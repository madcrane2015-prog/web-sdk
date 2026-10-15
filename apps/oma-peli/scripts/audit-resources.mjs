import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root=path.resolve(import.meta.dirname,'..');
const repo=path.resolve(root,'../..');
const walk=directory=>fs.readdirSync(directory,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?walk(path.join(directory,entry.name)):[path.join(directory,entry.name)]);
const sources=walk(path.join(root,'src')).filter(file=>/\.(svelte|ts|js|css|json|yml)$/.test(file));
const content=new Map(sources.map(file=>[file,fs.readFileSync(file,'utf8')]));
const sourcePath=file=>path.relative(repo,file).replaceAll('\\','/');
const imports=[];
for(const [file,text] of content) {
	for(const match of text.matchAll(/(?:from\s*|import\s*\()(['"])([^'"]+)\1/g)) {
		const specifier=match[2];let resolved=null;
		if(specifier.startsWith('.')) {
			const candidate=path.resolve(path.dirname(file),specifier);
			resolved=['','.ts','.js','.svelte','/index.ts','/index.js'].map(suffix=>candidate+suffix).find(file=>fs.existsSync(file)&&fs.statSync(file).isFile())??null;
		}
		imports.push({source:sourcePath(file),specifier,resolved:resolved?sourcePath(resolved):null});
	}
}
const reachable=new Set();
const visit=file=>{if(reachable.has(file))return;reachable.add(file);for(const entry of imports.filter(entry=>entry.source===file))if(entry.resolved)visit(entry.resolved);};
visit('apps/oma-peli/src/routes/+page.svelte');visit('apps/oma-peli/src/routes/+layout.svelte');
const assets=walk(path.join(root,'static')).map(file=>{
	const name=path.basename(file),relative=path.relative(path.join(root,'static'),file).replaceAll('\\','/');
	const references=[...content].filter(([,text])=>text.includes(name)||text.includes(relative)).map(([file])=>sourcePath(file));
	return {path:'apps/oma-peli/static/'+relative,sha256:crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex'),references,classification:references.length?'literal_or_manifest_reference':'dynamic_or_archive_candidate',deleteSafe:false};
});
const report={date:'2026-10-14',limitations:'Literal/manifest usage map; dynamic URL construction, external consumers and historical deployments require review. No asset is automatically safe to delete.',imports,activeRouteReachable:[...reachable].sort(),assets};
fs.mkdirSync(path.join(root,'reports'),{recursive:true});
fs.writeFileSync(path.join(root,'reports/resource-usage.json'),JSON.stringify(report,null,2)+'\n');
console.log(`Mapped ${imports.length} imports, ${reachable.size} route dependencies and ${assets.length} assets; no deletions.`);
