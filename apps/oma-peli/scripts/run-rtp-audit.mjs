import {createRequire} from 'node:module';
import {spawnSync} from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
const require=createRequire(import.meta.url);
let esbuild;try{esbuild=require('esbuild');}catch{esbuild=createRequire(require.resolve('vite/package.json'))('esbuild');}
const appRoot=path.resolve(import.meta.dirname,'..');
const repoRoot=path.resolve(appRoot,'../..');
const temp=fs.mkdtempSync(path.join(os.tmpdir(),'rockabilly-rtp-'));
const experimental=process.argv.includes('--experimental');
const count=Number(process.argv.slice(2).filter(arg=>arg!=='--experimental')[0]??1000000);
if(!Number.isSafeInteger(count)||count<2)throw new Error('Paid-round count must be a safe integer of at least 2');
try {
	const output=path.join(temp,'audit.mjs');
	await esbuild.build({entryPoints:[path.join(appRoot,experimental?'scripts/audit-experimental-math.ts':'scripts/audit-active-rtp.ts')],outfile:output,bundle:true,platform:'node',format:'esm'});
	const run=spawnSync(process.execPath,[output,String(count)],{cwd:repoRoot,stdio:'inherit'});
	process.exitCode=run.status??1;
} finally {fs.rmSync(temp,{recursive:true,force:true});}
