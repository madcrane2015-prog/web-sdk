import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
const appRoot=path.resolve(import.meta.dirname,'..');
const require=createRequire(import.meta.url);
// Support an existing workspace install while its new direct dependency is linked.
let esbuild;
try { esbuild=require('esbuild'); }
catch { esbuild=createRequire(require.resolve('vite/package.json'))('esbuild'); }
const {build}=esbuild;
const temp=fs.mkdtempSync(path.join(os.tmpdir(),'rockabilly-tests-'));
try {
	for(const name of ['test-round-controller','test-stake-session']) {
		const entry=path.join(appRoot,'scripts',name+'.ts');
		const output=path.join(temp,name+'.mjs');
		await build({entryPoints:[entry],outfile:output,bundle:true,platform:'node',format:'esm'});
		const run=spawnSync(process.execPath,[output],{stdio:'inherit'});
		if(run.status!==0) process.exitCode=run.status??1;
	}
} finally { fs.rmSync(temp,{recursive:true,force:true}); }
