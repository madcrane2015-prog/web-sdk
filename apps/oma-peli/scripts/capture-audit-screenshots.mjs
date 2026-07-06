import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const chromePath = process.env.CHROME_PATH ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const baseUrl = process.env.AUDIT_BASE_URL ?? 'http://localhost:3010/';
const repoRoot = path.resolve(import.meta.dirname, '../../..');
const outputDir = path.join(repoRoot, '.codex-screenshots', 'audit');
const profileDir = path.join(outputDir, '.chrome-profile');
const port = 12000 + Math.floor(Math.random() * 1000);

const viewports = [
	{ name: 'portrait', width: 390, height: 844, mobile: true },
	{ name: 'landscape', width: 844, height: 390, mobile: false },
	{ name: 'desktop', width: 1240, height: 900, mobile: false },
];

const modes = [
	{ name: 'game', query: 'audit=game&skipIntro=1' },
	{ name: 'menu', query: 'audit=menu&skipIntro=1' },
	{ name: 'autoplay', query: 'audit=autoplay&skipIntro=1' },
	{ name: 'debug', query: 'audit=debug&skipIntro=1' },
];

fs.mkdirSync(outputDir, { recursive: true });

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function readJson(url, options) {
	const response = await fetch(url, options);
	const text = await response.text();
	return JSON.parse(text);
}

async function waitForCdp() {
	for (let i = 0; i < 60; i += 1) {
		try {
			return await readJson(`http://127.0.0.1:${port}/json/version`);
		} catch {
			await wait(200);
		}
	}

	throw new Error('Chrome DevTools endpoint did not start.');
}

let messageId = 0;

function connectCdp(webSocketDebuggerUrl) {
	const socket = new WebSocket(webSocketDebuggerUrl);
	const pending = new Map();

	socket.onmessage = (event) => {
		const message = JSON.parse(event.data);
		if (!message.id || !pending.has(message.id)) return;

		const { resolve, reject } = pending.get(message.id);
		pending.delete(message.id);
		if (message.error) reject(new Error(JSON.stringify(message.error)));
		else resolve(message.result);
	};

	return new Promise((resolve, reject) => {
		socket.onopen = () => {
			resolve({
				send(method, params = {}) {
					const id = ++messageId;
					socket.send(JSON.stringify({ id, method, params }));
					return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
				},
				close() {
					socket.close();
				},
			});
		};
		socket.onerror = reject;
	});
}

async function capture(client, viewport, mode) {
	await client.send('Emulation.setDeviceMetricsOverride', {
		width: viewport.width,
		height: viewport.height,
		deviceScaleFactor: 1,
		mobile: viewport.mobile,
	});

	const url = `${baseUrl}?${mode.query}`;
	await client.send('Page.navigate', { url });

	for (let i = 0; i < 80; i += 1) {
		await wait(250);
		const result = await client.send('Runtime.evaluate', {
			expression: `Boolean(document.querySelector('canvas')) && !document.body.innerText.includes('Loading...')`,
			returnByValue: true,
		});
		if (result.result.value) break;
	}

	await wait(1200);

	const screenshot = await client.send('Page.captureScreenshot', {
		format: 'png',
		captureBeyondViewport: false,
	});
	const filename = `${viewport.name}-${mode.name}.png`;
	fs.writeFileSync(path.join(outputDir, filename), Buffer.from(screenshot.data, 'base64'));

	return filename;
}

async function main() {
	const chrome = spawn(
		chromePath,
		[
			'--headless=new',
			'--disable-gpu',
			'--hide-scrollbars',
			'--no-first-run',
			'--no-default-browser-check',
			`--remote-debugging-port=${port}`,
			`--user-data-dir=${profileDir}`,
			'about:blank',
		],
		{ stdio: 'ignore' },
	);

	try {
		await waitForCdp();
		const target = await readJson(`http://127.0.0.1:${port}/json/new`, { method: 'PUT' });
		const client = await connectCdp(target.webSocketDebuggerUrl);
		await client.send('Page.enable');
		await client.send('Runtime.enable');

		const files = [];
		for (const viewport of viewports) {
			for (const mode of modes) {
				files.push(await capture(client, viewport, mode));
			}
		}

		client.close();
		console.log(JSON.stringify({ outputDir, files }, null, 2));
	} finally {
		chrome.kill();
	}
}

main().catch((error) => {
	console.error(error);
	process.exit(1);
});
