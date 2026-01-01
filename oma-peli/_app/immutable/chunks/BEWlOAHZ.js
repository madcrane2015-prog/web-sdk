const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./UgX9FRtR.js","./BaqJxISf.js","./CgWia7Op.js","./EjnPGRTu.js","./Bkkaav7K.js","./C2GHuDhf.js","./DBmErawR.js","./kmXWqcip.js"])))=>i.map(i=>d[i]);
var vr=Object.defineProperty;var yr=(t,e,s)=>e in t?vr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var ue=(t,e,s)=>yr(t,typeof e!="symbol"?e+"":e,s);import{g as br,l as xr,t as oe,i as _r,j as wr,a as ee,k as U,e as Ar}from"./XZc5ccWP.js";import{i as kr}from"./DIdOt9--.js";import{y as ge,j as Er,a8 as Sr,F as o,Q as $r,aa as jr,ab as Ca,h as Fa,e as Is,k as dt,l as Lr,ac as to,w as so,ad as Tr,q as ao,a7 as Pr,U as Rr,a2 as Ma,ar as Os,z as Wa,as as Ir,at as Or,au as Br,o as Cr,av as Fr,aw as Mr,ax as Wr,ay as Nr,b as zr,az as Dr,aA as Ur,a6 as Gr,aB as Hr,aC as Vr,D as Yr,L as Xr,p as oo,ah as P,ag as ro,T as b,aD as fe,I as It,s as m,f as Ct,c as _,r as w,t as ye,a as io,aE as Kr,aF as Ds}from"./EjnPGRTu.js";import{_ as Na,p as he,i as xe}from"./CgWia7Op.js";import{s as W}from"./2z5c-rnE.js";import{b as za,p as Qr}from"./CHseoIM1.js";import{b as be}from"./2j-9XOIZ.js";import{e as Pe,E as I,a as qr,C as Xs,Q as Us,V as Gs,N as Bs,D as ae,H as Jr,p as Be,a0 as Ke,a1 as Ce,a2 as Zr,w as Te,a3 as ut,a4 as no,a5 as Qe,a6 as Ae,a7 as Ft,a8 as lo,a9 as ei,aa as Cs,y as Fs}from"./BaqJxISf.js";import{A as ti,B as Da,G as si,a as Ua}from"./Bkkaav7K.js";function Ga(t,e){return e}function ai(t,e,s,a){for(var r=[],i=e.length,n=0;n<i;n++)Br(e[n].e,r,!0);var c=i>0&&r.length===0&&s!==null;if(c){var f=s.parentNode;Cr(f),f.append(s),a.clear(),Le(t,e[0].prev,e[i-1].next)}Fr(r,()=>{for(var h=0;h<i;h++){var d=e[h];c||(a.delete(d.k),Le(t,d.prev,d.next)),Mr(d.e,!c)}})}function Ha(t,e,s,a,r,i=null){var n=t,c={flags:e,items:new Map,first:null};ge&&Er();var f=null,h=!1,d=$r(()=>{var g=s();return Pr(g)?g:g==null?[]:ao(g)});Sr(()=>{var g=o(d),u=g.length;if(h&&u===0)return;h=u===0;let j=!1;if(ge){var L=n.data===jr;L!==(u===0)&&(n=Ca(),Fa(n),Is(!1),j=!0)}if(ge){for(var q=null,G,T=0;T<u;T++){if(dt.nodeType===8&&dt.data===Lr){n=dt,j=!0,Is(!1);break}var N=g[T],ke=a(N,T);G=co(dt,c,q,null,N,ke,T,r,e,s),c.items.set(ke,G),q=G}u>0&&Fa(Ca())}ge||oi(g,c,n,r,e,a,s),i!==null&&(u===0?f?to(f):f=so(()=>i(n)):f!==null&&Tr(f,()=>{f=null})),j&&Is(!0),o(d)}),ge&&(n=dt)}function oi(t,e,s,a,r,i,n){var c=t.length,f=e.items,h=e.first,d=h,g,u=null,j=[],L=[],q,G,T,N;for(N=0;N<c;N+=1){if(q=t[N],G=i(q,N),T=f.get(G),T===void 0){var ke=d?d.e.nodes_start:s;u=co(ke,e,u,u===null?e.first:u.next,q,G,N,a,r,n),f.set(G,u),j=[],L=[],d=u.next;continue}if(ri(T,q,N),(T.e.f&Os)!==0&&to(T.e),T!==d){if(g!==void 0&&g.has(T)){if(j.length<L.length){var re=L[0],te;u=re.prev;var Mt=j[0],Je=j[j.length-1];for(te=0;te<j.length;te+=1)Va(j[te],re,s);for(te=0;te<L.length;te+=1)g.delete(L[te]);Le(e,Mt.prev,Je.next),Le(e,u,Mt),Le(e,Je,re),d=re,u=Je,N-=1,j=[],L=[]}else g.delete(T),Va(T,d,s),Le(e,T.prev,T.next),Le(e,T,u===null?e.first:u.next),Le(e,u,T),u=T;continue}for(j=[],L=[];d!==null&&d.k!==G;)(d.e.f&Os)===0&&(g??(g=new Set)).add(d),L.push(d),d=d.next;if(d===null)continue;T=d}j.push(T),u=T,d=T.next}if(d!==null||g!==void 0){for(var Re=g===void 0?[]:ao(g);d!==null;)(d.e.f&Os)===0&&Re.push(d),d=d.next;var ft=Re.length;if(ft>0){var H=null;ai(e,Re,H,f)}}Wa.first=e.first&&e.first.e,Wa.last=u&&u.e}function ri(t,e,s,a){Or(t.v,e),t.i=s}function co(t,e,s,a,r,i,n,c,f,h){var d=(f&Wr)!==0,g=(f&Nr)===0,u=d?g?Rr(r):Ma(r):r,j=(f&Ir)===0?n:Ma(n),L={i:j,v:u,k:i,a:null,e:null,prev:s,next:a};try{return L.e=so(()=>c(t,u,j,h),ge),L.e.prev=s&&s.e,L.e.next=a&&a.e,s===null?e.first=L:(s.next=L,s.e.next=L.e),a!==null&&(a.prev=L,a.e.prev=L.e),L}finally{}}function Va(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,r=e?e.e.nodes_start:s,i=t.e.nodes_start;i!==a;){var n=zr(i);r.before(i),i=n}}function Le(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function ii(t,e,s){var a=t==null?"":""+t;return a=a?a+" "+e:e,a===""?null:a}function ni(t,e,s,a,r,i){var n=t.__className;if(ge||n!==s){var c=ii(s,a);(!ge||c!==t.getAttribute("class"))&&(c==null?t.removeAttribute("class"):t.className=c),t.__className=s}return i}function li(t){if(ge){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;x(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var r=t.checked;x(t,"checked",null),t.checked=r}}};t.__on_r=s,Dr(s),br()}}function x(t,e,s,a){var r=t.__attributes??(t.__attributes={});ge&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Ur]=s),s==null?t.removeAttribute(e):typeof s!="string"&&ci(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var Ya=new Map;function ci(t){var e=Ya.get(t.nodeName);if(e)return e;Ya.set(t.nodeName,e=[]);for(var s,a=t,r=Element.prototype;r!==a;){s=Hr(a);for(var i in s)s[i].set&&e.push(i);a=Gr(a)}return e}function di(t,e,s=e){var a=Vr();xr(t,"input",r=>{var i=r?t.defaultValue:t.value;if(i=Ms(t)?Ws(i):i,s(i),a&&i!==(i=e())){var n=t.selectionStart,c=t.selectionEnd;t.value=i??"",c!==null&&(t.selectionStart=n,t.selectionEnd=Math.min(c,t.value.length))}}),(ge&&t.defaultValue!==t.value||Yr(e)==null&&t.value)&&s(Ms(t)?Ws(t.value):t.value),Xr(()=>{var r=e();Ms(t)&&r===Ws(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function Ms(t){var e=t.type;return e==="number"||e==="range"}function Ws(t){return t===""?null:+t}function pi(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const Hs=[];Pe.handleByNamedList(I.Environment,Hs);async function ui(t){if(!t)for(let e=0;e<Hs.length;e++){const s=Hs[e];if(s.value.test()){await s.value.load();return}}}let pt;function fi(){if(typeof pt=="boolean")return pt;try{pt=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{pt=!1}return pt}var po=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(po||{});class hi{constructor(e){this.items=[],this._name=e}emit(e,s,a,r,i,n,c,f){const{name:h,items:d}=this;for(let g=0,u=d.length;g<u;g++)d[g][h](e,s,a,r,i,n,c,f);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const gi=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],uo=class fo extends qr{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...gi,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await ui(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...fo.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof Xs&&(a={container:a},s&&(Us(Gs,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const r=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=r?a.clearColor:Bs.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const r=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==r&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=po.ALL);const{clear:a,clearColor:r,target:i}=e;Bs.shared.setValue(r??this.background.colorRgba),s.renderTarget.clear(i,a,Bs.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new hi(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const r in this.runners)this.runners[r].add(a);return this}_addPipes(e,s){const a=s.reduce((r,i)=>(r[i.name]=i.value,r),{});e.forEach(r=>{const i=r.value,n=r.name,c=a[n];this.renderPipes[n]=new i(this,c?new c:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!fi())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};uo.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let ho=uo,Ot;function mi(t){return Ot!==void 0||(Ot=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??ho.defaultOptions.failIfMajorPerformanceCaveat};try{if(!ae.get().getWebGLRenderingContext())return!1;let r=ae.get().createCanvas().getContext("webgl",e);const i=!!((s=r==null?void 0:r.getContextAttributes())!=null&&s.stencil);if(r){const n=r.getExtension("WEBGL_lose_context");n&&n.loseContext()}return r=null,i}catch{return!1}})()),Ot}let Bt;async function vi(t={}){return Bt!==void 0||(Bt=await(async()=>{const e=ae.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),Bt}const Xa=["webgl","webgpu","canvas"];async function yi(t){let e=[];t.preference?(e.push(t.preference),Xa.forEach(i=>{i!==t.preference&&e.push(i)})):e=Xa.slice();let s,a={};for(let i=0;i<e.length;i++){const n=e[i];if(n==="webgpu"&&await vi()){const{WebGPURenderer:c}=await Na(async()=>{const{WebGPURenderer:f}=await import("./UgX9FRtR.js");return{WebGPURenderer:f}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=c,a={...t,...t.webgpu};break}else if(n==="webgl"&&mi(t.failIfMajorPerformanceCaveat??ho.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:c}=await Na(async()=>{const{WebGLRenderer:f}=await import("./kmXWqcip.js");return{WebGLRenderer:f}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=c,a={...t,...t.webgl};break}else if(n==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const r=new s;return await r.init(a),r}const go="8.8.1";class mo{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,go)}static destroy(){}}mo.extension=I.Application;class bi{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,go)}destroy(){this._renderer=null}}bi.extension={type:[I.WebGLSystem,I.WebGPUSystem],name:"initHook",priority:-10};const vo=class Vs{constructor(...e){this.stage=new Xs,e[0]!==void 0&&Us(Gs,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await yi(e),Vs._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Us(Gs,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=Vs._plugins.slice(0);a.reverse(),a.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};vo._plugins=[];let yo=vo;Pe.handleByList(I.Application,yo._plugins);Pe.add(mo);class bo extends ti{constructor(e,s){super();const{textures:a,data:r}=e;Object.keys(r.pages).forEach(i=>{const n=r.pages[parseInt(i,10)],c=a[n.id];this.pages.push({texture:c})}),Object.keys(r.chars).forEach(i=>{const n=r.chars[i],{frame:c,source:f}=a[n.page],h=new Jr(n.x+c.x,n.y+c.y,n.width,n.height),d=new Be({source:f,frame:h});this.chars[i]={id:i.codePointAt(0),xOffset:n.xOffset,yOffset:n.yOffset,xAdvance:n.xAdvance,kerning:n.kerning??{},texture:d}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){Da.install(e)}static uninstall(e){Da.uninstall(e)}}const Ns={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const g in e){const u=e[g].match(/^[a-z]+/gm)[0],j=e[g].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),L={};for(const q in j){const G=j[q].split("="),T=G[0],N=G[1].replace(/"/gm,""),ke=parseFloat(N),re=isNaN(ke)?N:ke;L[T]=re}s[u].push(L)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=s.info,[i]=s.common,[n]=s.distanceField??[];n&&(a.distanceField={range:parseInt(n.distanceRange,10),type:n.fieldType}),a.fontSize=parseInt(r.size,10),a.fontFamily=r.face,a.lineHeight=parseInt(i.lineHeight,10);const c=s.page;for(let g=0;g<c.length;g++)a.pages.push({id:parseInt(c[g].id,10)||0,file:c[g].file});const f={};a.baseLineOffset=a.lineHeight-parseInt(i.base,10);const h=s.char;for(let g=0;g<h.length;g++){const u=h[g],j=parseInt(u.id,10);let L=u.letter??u.char??String.fromCharCode(j);L==="space"&&(L=" "),f[j]=L,a.chars[L]={id:j,page:parseInt(u.page,10)||0,x:parseInt(u.x,10),y:parseInt(u.y,10),width:parseInt(u.width,10),height:parseInt(u.height,10),xOffset:parseInt(u.xoffset,10),yOffset:parseInt(u.yoffset,10),xAdvance:parseInt(u.xadvance,10),kerning:{}}}const d=s.kerning||[];for(let g=0;g<d.length;g++){const u=parseInt(d[g].first,10),j=parseInt(d[g].second,10),L=parseInt(d[g].amount,10);a.chars[f[j]].kerning[f[u]]=L}return a}},Ka={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const i=t.getElementsByTagName("page"),n=t.getElementsByTagName("char"),c=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let h=0;h<i.length;h++)e.pages.push({id:parseInt(i[h].getAttribute("id"),10)||0,file:i[h].getAttribute("file")});const f={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let h=0;h<n.length;h++){const d=n[h],g=parseInt(d.getAttribute("id"),10);let u=d.getAttribute("letter")??d.getAttribute("char")??String.fromCharCode(g);u==="space"&&(u=" "),f[g]=u,e.chars[u]={id:g,page:parseInt(d.getAttribute("page"),10)||0,x:parseInt(d.getAttribute("x"),10),y:parseInt(d.getAttribute("y"),10),width:parseInt(d.getAttribute("width"),10),height:parseInt(d.getAttribute("height"),10),xOffset:parseInt(d.getAttribute("xoffset"),10),yOffset:parseInt(d.getAttribute("yoffset"),10),xAdvance:parseInt(d.getAttribute("xadvance"),10),kerning:{}}}for(let h=0;h<c.length;h++){const d=parseInt(c[h].getAttribute("first"),10),g=parseInt(c[h].getAttribute("second"),10),u=parseInt(c[h].getAttribute("amount"),10);e.chars[f[g]].kerning[f[d]]=u}return e}},Qa={test(t){return typeof t=="string"&&t.includes("<font>")?Ka.test(ae.get().parseXML(t)):!1},parse(t){return Ka.parse(ae.get().parseXML(t))}},xi=[".xml",".fnt"],_i={extension:{type:I.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof bo,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},wi={extension:{type:I.LoadParser,priority:Ke.Normal},name:"loadBitmapFont",test(t){return xi.includes(Ce.extname(t).toLowerCase())},async testParse(t){return Ns.test(t)||Qa.test(t)},async parse(t,e,s){const a=Ns.test(t)?Ns.parse(t):Qa.parse(t),{src:r}=e,{pages:i}=a,n=[],c=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let g=0;g<i.length;++g){const u=i[g].file;let j=Ce.join(Ce.dirname(r),u);j=Zr(j,r),n.push({src:j,data:c})}const f=await s.load(n),h=n.map(g=>f[g.src]);return new bo({data:a,textures:h},r)},async load(t,e){return await(await ae.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class Ai{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const ki={extension:{type:I.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Be),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((r,i)=>{s[a+(i===0?"":i+1)]=r})}),s}};async function xo(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Ei={extension:{type:I.DetectionParser,priority:1},test:async()=>xo("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},qa=["png","jpg","jpeg"],Si={extension:{type:I.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...qa],remove:async t=>t.filter(e=>!qa.includes(e))},$i="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Ks(t){return $i?!1:document.createElement("video").canPlayType(t)!==""}const ji={extension:{type:I.DetectionParser,priority:0},test:async()=>Ks("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},Li={extension:{type:I.DetectionParser,priority:0},test:async()=>Ks("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},Ti={extension:{type:I.DetectionParser,priority:0},test:async()=>Ks("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},Pi={extension:{type:I.DetectionParser,priority:0},test:async()=>xo("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class Ri{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var n,c;let r=null,i=null;if(s.loadParser&&(i=this._parserHash[s.loadParser],i||Te(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!i){for(let f=0;f<this.parsers.length;f++){const h=this.parsers[f];if(h.load&&((n=h.test)!=null&&n.call(h,e,s,this))){i=h;break}}if(!i)return Te(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await i.load(e,s,this),a.parser=i;for(let f=0;f<this.parsers.length;f++){const h=this.parsers[f];h.parse&&h.parse&&await((c=h.testParse)==null?void 0:c.call(h,r,s,this))&&(r=await h.parse(r,s,this)||r,a.parser=h)}return r})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const r={},i=no(e),n=ut(e,h=>({alias:[h],src:h,data:{}})),c=n.length,f=n.map(async h=>{const d=Ce.toAbsolute(h.src);if(!r[h.src])try{this.promiseCache[d]||(this.promiseCache[d]=this._getLoadPromiseAndParser(d,h)),r[h.src]=await this.promiseCache[d].promise,s&&s(++a/c)}catch(g){throw delete this.promiseCache[d],delete r[h.src],new Error(`[Loader.load] Failed to load ${d}.
${g}`)}});return await Promise.all(f),i?r[n[0].src]:r}async unload(e){const a=ut(e,r=>({alias:[r],src:r})).map(async r=>{var c,f;const i=Ce.toAbsolute(r.src),n=this.promiseCache[i];if(n){const h=await n.promise;delete this.promiseCache[i],await((f=(c=n.parser)==null?void 0:c.unload)==null?void 0:f.call(c,h,r,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&Te(`[Assets] loadParser name conflict "${s.name}"`):Te("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function qe(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const Ii=".json",Oi="application/json",Bi={extension:{type:I.LoadParser,priority:Ke.Low},name:"loadJson",test(t){return qe(t,Oi)||Qe(t,Ii)},async load(t){return await(await ae.get().fetch(t)).json()}},Ci=".txt",Fi="text/plain",Mi={name:"loadTxt",extension:{type:I.LoadParser,priority:Ke.Low,name:"loadTxt"},test(t){return qe(t,Fi)||Qe(t,Ci)},async load(t){return await(await ae.get().fetch(t)).text()}},Wi=["normal","bold","100","200","300","400","500","600","700","800","900"],Ni=[".ttf",".otf",".woff",".woff2"],zi=["font/ttf","font/otf","font/woff","font/woff2"],Di=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Ui(t){const e=Ce.extname(t),r=Ce.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(c=>c.charAt(0).toUpperCase()+c.slice(1));let i=r.length>0;for(const c of r)if(!c.match(Di)){i=!1;break}let n=r.join(" ");return i||(n=`"${n.replace(/[\\"]/g,"\\$&")}"`),n}const Gi=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function Hi(t){return Gi.test(t)?t:encodeURI(t)}const Vi={extension:{type:I.LoadParser,priority:Ke.Low},name:"loadWebFont",test(t){return qe(t,zi)||Qe(t,Ni)},async load(t,e){var a,r,i;const s=ae.get().getFontFaceSet();if(s){const n=[],c=((a=e.data)==null?void 0:a.family)??Ui(t),f=((i=(r=e.data)==null?void 0:r.weights)==null?void 0:i.filter(d=>Wi.includes(d)))??["normal"],h=e.data??{};for(let d=0;d<f.length;d++){const g=f[d],u=new FontFace(c,`url(${Hi(t)})`,{...h,weight:g});await u.load(),s.add(u),n.push(u)}return Ae.set(`${c}-and-url`,{url:t,fontFaces:n}),n.length===1?n[0]:n}return Te("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{Ae.remove(`${e.family}-and-url`),ae.get().getFontFaceSet().delete(e)})}};function Qs(t,e=1){var a;const s=(a=Ft.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function qs(t,e,s){t.label=s,t._sourceOrigin=s;const a=new Be({source:t,label:s}),r=()=>{delete e.promiseCache[s],Ae.has(s)&&Ae.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(Te("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),a.once("destroy",()=>{t.destroyed||(Te("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),a}const Yi=".svg",Xi="image/svg+xml",Ki={extension:{type:I.LoadParser,priority:Ke.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return qe(t,Xi)||Qe(t,Yi)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?qi(t):Qi(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function Qi(t,e,s,a){var G,T,N;const i=await(await ae.get().fetch(t)).blob(),n=URL.createObjectURL(i),c=new Image;c.src=n,c.crossOrigin=a,await c.decode(),URL.revokeObjectURL(n);const f=document.createElement("canvas"),h=f.getContext("2d"),d=((G=e.data)==null?void 0:G.resolution)||Qs(t),g=((T=e.data)==null?void 0:T.width)??c.width,u=((N=e.data)==null?void 0:N.height)??c.height;f.width=g*d,f.height=u*d,h.drawImage(c,0,0,g*d,u*d);const{parseAsGraphicsContext:j,...L}=e.data??{},q=new lo({resource:f,alphaMode:"premultiply-alpha-on-upload",resolution:d,...L});return qs(q,s,t)}async function qi(t){const s=await(await ae.get().fetch(t)).text(),a=new si;return a.svg(s),a}const Ji=`(function () {
    'use strict';

    const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
    async function checkImageBitmap() {
      try {
        if (typeof createImageBitmap !== "function")
          return false;
        const response = await fetch(WHITE_PNG);
        const imageBlob = await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);
        return imageBitmap.width === 1 && imageBitmap.height === 1;
      } catch (_e) {
        return false;
      }
    }
    void checkImageBitmap().then((result) => {
      self.postMessage(result);
    });

})();
`;let Ye=null,Ys=class{constructor(){Ye||(Ye=URL.createObjectURL(new Blob([Ji],{type:"application/javascript"}))),this.worker=new Worker(Ye)}};Ys.revokeObjectURL=function(){Ye&&(URL.revokeObjectURL(Ye),Ye=null)};const Zi=`(function () {
    'use strict';

    async function loadImageBitmap(url, alphaMode) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
      }
      const imageBlob = await response.blob();
      return alphaMode === "premultiplied-alpha" ? createImageBitmap(imageBlob, { premultiplyAlpha: "none" }) : createImageBitmap(imageBlob);
    }
    self.onmessage = async (event) => {
      try {
        const imageBitmap = await loadImageBitmap(event.data.data[0], event.data.data[1]);
        self.postMessage({
          data: imageBitmap,
          uuid: event.data.uuid,
          id: event.data.id
        }, [imageBitmap]);
      } catch (e) {
        self.postMessage({
          error: e,
          uuid: event.data.uuid,
          id: event.data.id
        });
      }
    };

})();
`;let Xe=null;class _o{constructor(){Xe||(Xe=URL.createObjectURL(new Blob([Zi],{type:"application/javascript"}))),this.worker=new Worker(Xe)}}_o.revokeObjectURL=function(){Xe&&(URL.revokeObjectURL(Xe),Xe=null)};let Ja=0,zs;class en{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new Ys;s.addEventListener("message",a=>{s.terminate(),Ys.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){zs===void 0&&(zs=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<zs&&(this._createdWorkers++,e=new _o().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((r,i)=>{this._queue.push({id:e,arguments:s,resolve:r,reject:i})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[Ja]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:Ja++,id:a})}}const Za=new en,tn=[".jpeg",".jpg",".png",".webp",".avif"],sn=["image/jpeg","image/png","image/webp","image/avif"];async function an(t,e){var r;const s=await ae.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const wo={name:"loadTextures",extension:{type:I.LoadParser,priority:Ke.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return qe(t,sn)||Qe(t,tn)},async load(t,e,s){var i;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Za.isImageBitmapSupported()?a=await Za.loadImageBitmap(t,e):a=await an(t,e):a=await new Promise((n,c)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?n(a):(a.onload=()=>{n(a)},a.onerror=c)});const r=new lo({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((i=e.data)==null?void 0:i.resolution)||Qs(t),...e.data});return qs(r,s,t)},unload(t){t.destroy(!0)}},Ao=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],on=Ao.map(t=>`video/${t.substring(1)}`);function rn(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=ln(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function nn(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",r),t.load();function a(){i(),e()}function r(n){i(),s(n)}function i(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",r)}})}function ln(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const cn={name:"loadVideo",extension:{type:I.LoadParser,name:"loadVideo"},test(t){const e=qe(t,on),s=Qe(t,Ao);return e||s},async load(t,e,s){var f,h;const a={...Cs.defaultOptions,resolution:((f=e.data)==null?void 0:f.resolution)||Qs(t),alphaMode:((h=e.data)==null?void 0:h.alphaMode)||await ei(),...e.data},r=document.createElement("video"),i={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(i).forEach(d=>{const g=i[d];g!==void 0&&r.setAttribute(d,g)}),a.muted===!0&&(r.muted=!0),rn(r,t,a.crossorigin);const n=document.createElement("source");let c;if(t.startsWith("data:"))c=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const d=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();c=Cs.MIME_TYPES[d]||`video/${d}`}return n.src=t,c&&(n.type=c),new Promise(d=>{const g=async()=>{const u=new Cs({...a,resource:r});r.removeEventListener("canplay",g),e.data.preload&&await nn(r),d(qs(u,s,t))};r.addEventListener("canplay",g),r.appendChild(n)})},unload(t){t.destroy(!0)}},ko={extension:{type:I.ResolveParser,name:"resolveTexture"},test:wo.test,parse:t=>{var e;return{resolution:parseFloat(((e=Ft.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},dn={extension:{type:I.ResolveParser,priority:-2,name:"resolveJson"},test:t=>Ft.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:ko.parse};class pn{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Ft,this.loader=new Ri,this.cache=Ae,this._backgroundLoader=new Ai(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var i,n;if(this._initialized){Te("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let c=e.manifest;typeof c=="string"&&(c=await this.load(c)),this.resolver.addManifest(c)}const s=((i=e.texturePreference)==null?void 0:i.resolution)??1,a=typeof s=="number"?[s]:s,r=await this._detectFormats({preferredFormats:(n=e.texturePreference)==null?void 0:n.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=no(e),r=ut(e).map(c=>{if(typeof c!="string"){const f=this.resolver.getAlias(c);return f.some(h=>!this.resolver.hasKey(h))&&this.add(c),Array.isArray(f)?f[0]:f}return this.resolver.hasKey(c)||this.add({alias:c,src:c}),c}),i=this.resolver.resolve(r),n=await this._mapLoadToResolve(i,s);return a?n[r[0]]:n}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const r=this.resolver.resolveBundle(e),i={},n=Object.keys(r);let c=0,f=0;const h=()=>{s==null||s(++c/f)},d=n.map(g=>{const u=r[g];return f+=Object.keys(u).length,this._mapLoadToResolve(u,h).then(j=>{i[g]=j})});return await Promise.all(d),a?i[e[0]]:i}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Ae.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=Ae.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(a,s);this._backgroundLoader.active=!0;const i={};return a.forEach(n=>{const c=r[n.src],f=[n.src];n.alias&&f.push(...n.alias),f.forEach(h=>{i[h]=c}),Ae.set(f,c)}),i}async unload(e){this._initialized||await this.init();const s=ut(e).map(r=>typeof r!="string"?r.src:r),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=ut(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(r=>this._unloadFromResolved(s[r]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{Ae.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,r)=>s.indexOf(a)===r),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const Ve=new pn;Pe.handleByList(I.LoadParser,Ve.loader.parsers).handleByList(I.ResolveParser,Ve.resolver.parsers).handleByList(I.CacheParser,Ve.cache.parsers).handleByList(I.DetectionParser,Ve.detections);Pe.add(ki,Si,Ei,Pi,ji,Li,Ti,Bi,Mi,Vi,Ki,wo,cn,wi,_i,ko,dn);const eo={loader:I.LoadParser,resolver:I.ResolveParser,cache:I.CacheParser,detection:I.DetectionParser};Pe.handle(I.Asset,t=>{const e=t.ref;Object.entries(eo).filter(([s])=>!!e[s]).forEach(([s,a])=>Pe.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(eo).filter(s=>!!e[s]).forEach(s=>Pe.remove(e[s]))});var un=wr('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-tijp0o"><\/script><!---->',1),fn=oe('<p style="color: red;" class="svelte-tijp0o"><strong class="svelte-tijp0o">Error:</strong> </p>'),hn=oe('<div class="svelte-tijp0o"> </div>'),gn=oe('<details class="svelte-tijp0o"><summary class="svelte-tijp0o"> </summary> <!></details>'),mn=oe(`<div style="
    position: fixed;
    top: 10px;
    left: 10px;
    background: rgba(0,0,0,0.8);
    color: white;
    padding: 10px;
    border-radius: 5px;
    font-family: monospace;
    font-size: 12px;
    z-index: 2000;
    max-width: 400px;
    max-height: 300px;
    overflow-y: auto;
  " class="svelte-tijp0o"><h3 class="svelte-tijp0o">🎰 Oma-peli Debug</h3> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Status:</strong> </p> <!> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Base:</strong> </p> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">BG URL:</strong> </p> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Sample:</strong> </p> <!></div>`),vn=oe('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-tijp0o"> </div>'),yn=oe('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-tijp0o"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-tijp0o"> </span></div>'),bn=oe(`<div style="
    position: fixed;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    background: linear-gradient(45deg, #ffd700, #ffed4a);
    color: #333;
    padding: 20px;
    border-radius: 15px;
    font-family: Arial, sans-serif;
    text-align: center;
    z-index: 3000;
    border: 3px solid #ffb700;
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.8);
    animation: winPulse 2s infinite;
    max-width: 350px;
  " class="svelte-tijp0o"><h2 style="margin: 0 0 10px 0; font-size: 2em;" class="svelte-tijp0o">🎉 VOITTO! 🎉</h2> <div style="font-size: 1.5em; font-weight: bold; margin: 10px 0;" class="svelte-tijp0o"> </div> <!> <!> <button style="
        margin-top: 15px;
        padding: 8px 16px;
        background: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
      " class="svelte-tijp0o">Jatka pelaamista</button></div>`),xn=oe(`<div class="svelte-tijp0o"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-tijp0o">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-tijp0o">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-tijp0o"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-tijp0o"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-tijp0o">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-tijp0o">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-tijp0o">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-tijp0o">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-tijp0o">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-tijp0o">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-tijp0o"> <span style="color: #ffd700;" class="svelte-tijp0o">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
        margin-top: 20px;
        width: 100%;
        padding: 10px;
        background: #ffd700;
        color: #333;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1em;
        font-weight: bold;
      " class="svelte-tijp0o">Sulje</button></div>`),_n=oe(`<div style="
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5000;
  " class="svelte-tijp0o"><div style="
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: white;
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      border: 3px solid #ffd700;
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
      max-width: 500px;
      font-family: Arial, sans-serif;
    " class="svelte-tijp0o"><h1 style="
        margin: 0 0 20px 0;
        font-size: 2.5em;
        color: #ffd700;
        text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
      " class="svelte-tijp0o">🎰 VAPAAPELIT PÄÄTTYIVÄT! 🎰</h1> <div style="
        font-size: 1.2em;
        margin: 20px 0;
        color: #aaa;
      " class="svelte-tijp0o">Voitit yhteensä:</div> <div style="
        font-size: 3em;
        font-weight: bold;
        color: #00ff00;
        text-shadow: 0 0 15px rgba(0, 255, 0, 0.8);
        margin: 20px 0;
      " class="svelte-tijp0o"> </div> <button style="
          margin-top: 30px;
          padding: 15px 40px;
          background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
          color: #000;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-size: 1.3em;
          font-weight: bold;
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
          transition: transform 0.2s, box-shadow 0.2s;
        " class="svelte-tijp0o">JATKA PERUSPELIIN</button></div></div>`),wn=oe(`<!> <!> <!> <!> <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
" class="svelte-tijp0o"><div class="svelte-tijp0o"><div class="svelte-tijp0o"><button class="svelte-tijp0o">💰 PAYTABLE</button> <div class="control-panel-mobile svelte-tijp0o"><img alt="Left End" class="svelte-tijp0o"> <div class="svelte-tijp0o"><div class="svelte-tijp0o"><div class="svelte-tijp0o">BET</div> <div class="svelte-tijp0o"><button title="Decrease Bet" class="svelte-tijp0o"></button> <div class="svelte-tijp0o"> </div> <button title="Increase Bet" class="svelte-tijp0o"></button></div></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><div class="svelte-tijp0o">BALANCE</div> <div class="svelte-tijp0o"> </div></div> <img alt="Divider" class="svelte-tijp0o"> <div style="position: relative; display: flex; align-items: center; justify-content: center; flex-grow: 0.5;" class="svelte-tijp0o"><div><button title="SPIN" class="svelte-tijp0o"></button></div></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><button class="svelte-tijp0o"></button> <img alt="Status bar" class="svelte-tijp0o"></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><button class="svelte-tijp0o"></button> <img alt="Speed bar" class="svelte-tijp0o"></div> <div class="svelte-tijp0o"><div class="svelte-tijp0o">WIN</div> <div class="svelte-tijp0o"> </div></div> <img alt="Divider" class="svelte-tijp0o"> <button title="Menu" class="svelte-tijp0o"></button></div> <img alt="Right End" class="svelte-tijp0o"></div></div>  <button class="svelte-tijp0o"></button> <button <VinylWinAnimation="" class="svelte-tijp0o"></button>  <div class="debug-panel svelte-tijp0o"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-tijp0o">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-tijp0o"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Rounds:</span> <span style="color: #fff;" class="svelte-tijp0o"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Wagered:</span> <span style="color: #ff6666;" class="svelte-tijp0o"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Won:</span> <span style="color: #66ff66;" class="svelte-tijp0o"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 10px; 
    padding-top: 10px; 
    border-top: 1px solid #555;
    font-weight: bold;
    font-size: 18px;
  " class="svelte-tijp0o"><span style="color: #ffd700;" class="svelte-tijp0o">RTP:</span> <span class="svelte-tijp0o"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
  " class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Hit Freq:</span> <span class="svelte-tijp0o"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-size: 14px;
  " class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Free Spins Triggered:</span> <span style="color: #66ccff;" class="svelte-tijp0o"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 4px;
    font-size: 14px;
  " class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Free Spins Played:</span> <span style="color: #66ccff;" class="svelte-tijp0o"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #555;
    font-size: 14px;
  " class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Empty Slots:</span> <span style="color: #ff9900;" class="svelte-tijp0o"> </span></div> <button style="
      margin-top: 10px;
      width: 100%;
      padding: 5px;
      background: rgba(255, 100, 100, 0.3);
      color: #fff;
      border: 1px solid #ff6666;
      border-radius: 5px;
      cursor: pointer;
      font-size: 11px;
    " class="svelte-tijp0o">Reset Stats</button> <div style="
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  " class="svelte-tijp0o"><button class="svelte-tijp0o"> </button> <button class="svelte-tijp0o">Clear Win Log</button> <button class="svelte-tijp0o"> </button> <button class="svelte-tijp0o">🎰 Test Free Spins</button></div></div> <button class="debug-panel svelte-tijp0o"> </button></div></div>`,1);function An(t,e){oo(e,!0);const s="1.3.1",a=13,r=1445,i=1e3,n=1.75,c=-30,f=-10,h=160,d=0,g=750,u=80,j=250,L=0,q=50,G=.5,T=40,N=0,re=Math.round(100*n),te=Math.round(re*(700/760)),Je=te+10,Re=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],ft=typeof window<"u"&&window.location.hostname.includes("github.io"),H=ft?"/web-sdk/oma-peli/symbols":`${be}/symbols`,V=ft?"/web-sdk/oma-peli/controls":`${be}/controls`,Wt={a:`${H}/Blue_hotrod.jpg`,b:`${H}/Blue_jacket.jpg`,c:`${H}/Blue_rollers.jpg`,d:`${H}/Blue_speakers.jpg`,e:`${H}/Premium_blonde.jpg`,f:`${H}/Premium_brunette.jpg`,g:`${H}/Premium_rocker.jpg`,h:`${H}/New_Wild.jpg`,i:`${H}/Red_burger.jpg`,j:`${H}/Red_fries.jpg`,k:`${H}/Red_milkshake.jpg`,l:`${H}/Scatter.jpg`,emptyslot:`${H}/Emptyslot.jpg`},Nt=`${H}/bg_base.jpg`,Js=`${H}/ReelFrames.png`,Zs=`${H}/RockABillyReels_logo.png`,Eo={spin:`${be}/sounds/spin.mp3`,stop:`${be}/sounds/stop.mp3`,win:`${be}/sounds/win.mp3`};let _e=P(!0),zt={},z=null,ie=null,Dt=null,Ut=null,le=P(!0),So=P(!1),Gt=P(945),Ht=null;const $o={fast:3,medium:7,slow:18};let ce=P("medium"),ea=P(Math.floor(Math.random()*20)+1);const ht={background:()=>`${be}/music/rockabilly reels loop ${o(ea)}.mp3`,freeSpins:`${be}/music/rockabilly-loop_long.mp3`,drumHit:`${be}/music/drum-hit.mp3`,winTheme:`${be}/music/win-stinger.mp3`};function ta(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(ta,500);return}const l=window.Howl;try{z=new l({src:[ht.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+o(ea)+")"),b(So,!0)},onloaderror:(p,k)=>{console.warn("⚠️ Background music not found:",k)}}),ie=new l({src:[ht.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(p,k)=>console.warn("⚠️ Free spins music not found:",k)}),Dt=new l({src:[ht.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Ut=new l({src:[ht.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(p){console.error("Failed to initialize music system:",p)}}function sa(){const l=o(D)?ie:z;l&&o(le)&&!l.playing()&&(l.play(),console.log("🎵 "+(o(D)?"Free spins":"Background")+" music started"))}function jo(){z&&z.playing()&&(z.fade(z.volume(),0,500),setTimeout(()=>z.stop(),500)),ie&&ie.playing()&&(ie.fade(ie.volume(),0,500),setTimeout(()=>ie.stop(),500))}function Vt(){z&&z.playing()&&(z.fade(z.volume(),0,500),setTimeout(()=>z.stop(),500)),ie&&ie.playing()&&(ie.fade(ie.volume(),0,500),setTimeout(()=>ie.stop(),500)),setTimeout(()=>{o(le)&&sa()},600)}function Lo(){if(z&&z.playing()){const l=z.volume();z.fade(l,0,1e3),setTimeout(()=>{z.stop(),z.volume(.3)},1e3)}}let Yt=P(!1);function To(){b(Yt,!1),setTimeout(()=>{b(Yt,!0)},10)}let Fe=null;function Po(){b(le,!o(le)),o(le)?sa():jo()}function Ro(){Dt&&o(le)&&o(_e)&&Dt.play()}function Io(){Ut&&o(le)&&o(_e)&&Ut.play()}let gt=null,Xt=null,Ze=null,et=null,tt=P("Initializing..."),Me=P(""),de=[],Ee=P(1e3);const aa=[.4,.8,1,1.6,2,3,5,8,10,15,20,25,30,40,50,60,80,100];let st=P(5),me=It(()=>aa[o(st)]),oa=P(0),ve=P(!1),mt=P(0),ra=P(!1),Kt=P(!1),Oo=P(0),Ie=!1,we=null,Qt=!1,We=P(0),Ne=P(0),at=P(0),qt=P(0),Jt=It(()=>o(Ne)>0?(o(at)/o(Ne)*100).toFixed(2):"0.00"),Zt=It(()=>o(We)>0?(o(qt)/o(We)*100).toFixed(2):"0.00"),D=P(!1),Se=P(0),Oe=P(0),vt=P(0),es=P(0),yt=P(0),ts=P(0),Bo=It(()=>o(yt)>0?(o(ts)/o(yt)*100).toFixed(2):"0.00"),ne=P(he([]));function Co(l,p,k){const y=new Date().toLocaleString("fi-FI");let A=`
${"=".repeat(60)}
`;A+=`ROUND #${l} - ${y}
`,A+=`Mode: ${o(D)?"FREE SPINS":"BASE GAME"}
`,A+=`${"=".repeat(60)}
`,p.forEach((E,$)=>{A+=`
Win ${$+1}:
`,A+=`  Symbol: ${E.symbol} (${ca[E.symbol]})
`,A+=`  Count: ${E.count} symbols
`,A+=`  Multiplier: ${E.multiplier}x
`,A+=`  Payout: ${E.payout.toFixed(2)}
`,A+=`  Positions: [${E.positions.join(", ")}]
`}),A+=`
${"─".repeat(60)}
`,A+=`TOTAL WIN: ${k.toFixed(2)}
`,A+=`${"=".repeat(60)}
`,o(ne).push(A)}function Fo(){const l=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${o(ne).join(`
`)}`,p=new Blob([l],{type:"text/plain"}),k=URL.createObjectURL(p),y=document.createElement("a");y.href=k,y.download=`win-log-${Date.now()}.txt`,y.click(),URL.revokeObjectURL(k)}function Mo(){b(ne,he([]))}function Wo(){o(D)||(b(D,!0),b(Se,10),b(Oe,0),fe(vt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),Vt())}const No={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},zo={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function ia(l){if(l===6)return Math.random()<.55?"h":"emptyslot";const p=o(D)?zo:No,k=Math.random();let y=0;const A=Re.filter($=>$!=="h"),E=A.reduce(($,M)=>$+p[M],0);for(const $ of A)if(y+=p[$]/E,k<y)return $;return"f"}function na(){const l=[];for(let p=0;p<a;p++){const k=ia(p);l.push(k),fe(yt),k==="emptyslot"&&fe(ts)}return l}function la(l){return l<3?{col:0,row:l}:l<6?{col:1,row:l-3}:l===6?{col:2,row:0}:l<10?{col:3,row:l-7}:{col:4,row:l-10}}function ot(l,p){return l===0?p:l===1?3+p:l===2?6:l===3?7+p:l===4?10+p:-1}function Do(){if(o(D)){const l=Math.random();return l<.7?3:l<.92?5:10}else{const l=Math.random();return l<.7?1:l<.92?2:3}}const Uo={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function Go(){var Q;const l=[],p=[];for(let S=0;S<a;S++)rt[S]==="l"&&p.push(S);if(p.length>=5){const S=p.length;b(Se,o(Se)+S),o(D)?console.log(`🎰 FREE SPINS RETRIGGERED! +${S} FREE SPINS! Total: ${o(Se)}`):(b(D,!0),b(Oe,0),fe(vt),console.log(`🎰 FREE SPINS TRIGGERED! ${p.length} scatters = ${S} FREE SPINS!`),Vt()),l.push({symbol:"l",count:p.length,payout:0,positions:p,multiplier:1})}const k=[];for(let S=0;S<3;S++)for(let R=0;R<3;R++)for(let O=0;O<1;O++)for(let B=0;B<3;B++)for(let F=0;F<3;F++){const C=[ot(0,S),ot(1,R),ot(2,O),ot(3,B),ot(4,F)];k.push(C)}console.log(`Generated ${k.length} possible paths (should be 81)`);const y=[];for(const S of k){const R=S.map(C=>rt[C]);if(R[0]==="emptyslot"||R[0]==="l")continue;let O=null;for(let C=0;C<R.length;C++)if(R[C]!=="h"&&R[C]!=="emptyslot"&&R[C]!=="l"){O=R[C];break}if(!O)continue;let B=0;const F=new Set;for(let C=0;C<S.length;C++){const je=S[C],{col:He}=la(je),se=R[C];(se===O||se==="h")&&F.add(He)}for(let C=0;C<5&&F.has(C);C++)B++;if(B>=3){const je=S[0]%3;y.push({symbol:O,length:B,path:S.slice(0,B),startRow:je})}}const A=[],E=new Map;for(const S of y){const R=`${S.symbol}-${S.path.join(",")}`;E.has(R)||E.set(R,[]),E.get(R).push(S)}for(const[S,R]of E.entries()){const O=Math.max(...R.map(F=>F.length)),B=R.find(F=>F.length===O);B&&A.push(B)}const $=[],M=new Map;for(const S of A)M.has(S.symbol)||M.set(S.symbol,[]),M.get(S.symbol).push(S);const Y=[];for(const[S,R]of M.entries()){const O=Math.max(...R.map(F=>F.length)),B=R.filter(F=>F.length===O);Y.push(...B)}const X=new Map;for(const S of Y){const R=`${S.symbol}-${S.length}`;X.has(R)||X.set(R,[]),X.get(R).push(S)}const K=Y.length>0?Do():1;for(const[S,R]of X.entries()){const O=R[0],B=(Q=Uo[O.symbol])==null?void 0:Q[O.length];if(B!==void 0&&B>0){const F=new Map;for(const se of R)for(let Z=0;Z<se.length;Z++)F.has(Z)||F.set(Z,new Set),F.get(Z).add(se.path[Z]);let C=1;for(let se=0;se<O.length;se++){const Z=F.get(se);C*=Z?Z.size:1}const je=B*o(me)*C*K;console.log(`  ${O.length}x${O.symbol}: ${C} ways × ${B}x × ${o(me)} bet × ${K} mult = ${je}`);const He=new Set;for(const se of R)se.path.forEach(Z=>He.add(Z));$.push({symbol:O.symbol,count:O.length,payout:je,positions:Array.from(He),multiplier:K})}}return l.push(...$),l}let pe=P(0),ze=P(he([])),$e=P(!1),De=P(!1),ss=P(!1),as=P(0);const ca={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function os(l){if(!o(_e)||!zt[l])return;const p=zt[l];p.currentTime=0,p.play().catch(k=>{console.warn("Äänen toisto epäonnistui:",l,k)})}function Ho(l){it.forEach(p=>J.stage.removeChild(p)),it=[],l.forEach(p=>{p.positions.forEach(k=>{const y=Ue[k],A=new Ua().rect(0,0,re,te).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});A.x=y.container.x,A.y=y.container.y,J.stage.addChild(A),it.push(A);let E=0,$=1;const M=.05;J.ticker.add(()=>{E+=$*M,E>=.4&&($=-1),E<=0&&($=1),A.alpha=.5+E})})})}function rs(){it.forEach(l=>J.stage.removeChild(l)),it=[]}let rt=na(),is,J,Ue=[],it=[];class Vo{constructor(p,k){ue(this,"index");ue(this,"container");ue(this,"offset",0);ue(this,"speed",0);ue(this,"targetSpeed",30);ue(this,"state","idle");ue(this,"stopDelay",0);ue(this,"bounceOffset",0);ue(this,"bounceSpeed",0);ue(this,"bounceFrames",0);this.index=p,this.container=k}start(p){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=p}startSynchronized(p){const k=$o[o(ce)],y=60+p*k;this.start(y)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const p=o(ce)==="slow"?.88:o(ce)==="medium"?.92:.95;this.speed*=p,this.speed<2.5&&(this.state="bouncing",this.speed=0,this.offset=0,this.bounceOffset=0,this.bounceSpeed=8,os("stop"),Ro())}this.state==="bouncing"&&(this.bounceSpeed*=.85,this.bounceOffset+=this.bounceSpeed,Math.abs(this.bounceSpeed)<.3&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=Je&&(this.offset=0,rt[this.index]=ia(this.index)))}}draw(){const p=this.container;p.removeChildren();const k=rt[this.index];if(!k||!gt||!gt[k])return;const y=gt[k];if(!y)return;const A=this.offset+this.bounceOffset,E=new Fs(y);E.width=re,E.height=te,E.x=0,E.y=A,p.addChild(E)}}let v=P(1);ro(async()=>{J=new yo,await J.init({width:r,height:i,backgroundAlpha:0}),is.appendChild(J.canvas);const l=()=>{const y=window.innerWidth,A=window.innerHeight,E=y/r,$=A/i,M=Math.min(E,$,1);b(v,he(M)),J.stage.scale.set(M),J.renderer.resize(r,i)};l(),window.addEventListener("resize",l);const p={};try{b(tt,"Loading background and UI images..."),de.push(`Loading background: ${Nt}`),de.push(`Loading reel frames: ${Js}`),de.push(`Loading logo: ${Zs}`),await Ve.load([{alias:"background",src:Nt},{alias:"reelframes",src:Js},{alias:"logo",src:Zs}]),Xt=Be.from("background"),Ze=Be.from("reelframes"),et=Be.from("logo"),console.log("✅ Background texture created:",Xt.width,"x",Xt.height),console.log("✅ Reel frames texture created:",Ze.width,"x",Ze.height),console.log("✅ Logo texture created:",et.width,"x",et.height),de.push("✅ All UI images loaded"),b(tt,"Loading symbols...");const y=[];for(const A of Re)y.push({alias:A,src:Wt[A]});await Ve.load(y);for(const A of Re){const E=Wt[A];de.push(`Loading symbol ${A}: ${E}`);try{const $=Be.from(A);p[A]=$,console.log(`✅ Symbol ${A} loaded:`,$.width,"x",$.height),de.push(`✅ Symbol ${A} loaded`)}catch($){const M=`❌ Failed to load symbol ${A} from ${E}: ${$}`;throw de.push(M),console.error(M),new Error(M)}}gt=p,b(tt,"Assets loaded successfully!")}catch(y){b(Me,`Asset loading failed: ${y}`),de.push(o(Me)),console.error(o(Me));return}console.log("Ladataan ääniefektit...");for(const[y,A]of Object.entries(Eo)){const E=new Audio;E.src=A,E.preload="auto",E.volume=.7,E.load(),E.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${A} (käytetään hiljaista placeholderia)`)}),zt[y]=E}[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(y=>({x:y.x+c,y:y.y+f})),Ue=[];for(let y=0;y<a;y++){const A=la(y),E=A.col,$=A.row,M=300+E*(re+20),Y=250+$*(te+15),X=y===6?M+d:M,K=y===6?Y+h:Y,Q=new Xs;Q.x=X+c,Q.y=K+f;const S=new Ua().rect(0,0,re,te).fill(16777215);S.x=Q.x,S.y=Q.y,Q.mask=S,J.stage.addChild(S),J.stage.addChild(Q),Ue.push(new Vo(y,Q))}if(Ze){const y=new Fs(Ze);y.scale.set(1),y.x=250,y.y=200,J.stage.addChild(y),Ht=y,b(Gt,he(y.width)),console.log("Reel frames lisätty:",y.width.toFixed(0),"x",y.height.toFixed(0)),console.log("Control panel leveys päivitetty:",o(Gt).toFixed(0))}if(et){const y=new Fs(et);y.scale.set(G),y.x=(J.renderer.width-y.width)/2+T,y.y=N,J.stage.addChild(y),console.log("Logo lisätty päällimmäiseen layeriin:",y.width.toFixed(0),"x",y.height.toFixed(0))}ta(),J.ticker.add(Yo)});function Yo(){for(const l of Ue)l.update(),l.draw();if(!o($e)&&!Qt&&Ue.every(l=>l.state==="stopped")){Qt=!0,Lo();const l=Go();console.log(`Checking wins, found ${l.length} wins`),l.length>0?(b(ze,he(l)),b(pe,he(l.reduce((p,k)=>p+k.payout,0))),Co(o(We),l,o(pe)),Xo(o(pe)),b($e,!0),b(Oo,he(Date.now())),console.log(`🎉 VOITTO! ${o(pe)} pistettä! Uusi saldo: ${o(Ee)}`),console.log(`isShowingWin set to: ${o($e)}, totalWin: ${o(pe)}`),l.forEach(p=>{const k=p.multiplier?` (${p.multiplier}x multiplier)`:"";console.log(`${p.count}x ${p.symbol} = ${p.payout} pistettä${k}`)}),Ho(l),os("win"),o(ve)&&!Ie&&(Ie=!0,we=window.setTimeout(()=>{o($e)&&o(ve)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),b($e,!1),rs()),we=window.setTimeout(()=>{Ie=!1,pa()},200)},1500))):(console.log("No wins found this spin"),o(ve)&&!Ie&&(Ie=!0,we=window.setTimeout(()=>{Ie=!1,pa()},1e3))),o(D)&&o(Se)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${o(Oe)}`),setTimeout(()=>{b(as,he(o(Oe))),b(ss,!0)},2e3))}}function da(){if(!o(D)&&z&&o(le)&&!z.playing()&&(z.play(),console.log("🎵 Background music started on first spin")),To(),o(D)&&o(Se)>0)fe(Se,-1),fe(es),console.log(`🎰 FREE SPIN! Remaining: ${o(Se)}`);else if(!o(D)){if(o(Ee)<o(me)){alert(`Not enough credits! Balance: ${o(Ee)}, Bet: ${o(me)}`),bt();return}b(Ee,o(Ee)-o(me)),fe(We),b(Ne,o(Ne)+o(me))}we!==null&&(clearTimeout(we),we=null),b(ze,he([])),b(pe,0),b($e,!1),Qt=!1,rs(),rt=na(),Ue.forEach((l,p)=>{l.startSynchronized(p)}),os("spin")}function Xo(l){if(b(Ee,o(Ee)+l),b(at,o(at)+l),b(oa,he(l)),o(D)&&b(Oe,o(Oe)+l),l>0){fe(qt);const p=l/o(me);p>=10&&Io(),Fe&&(p>=50?Fe.show():p>=20?setTimeout(()=>Fe.show(),200):p>=10&&setTimeout(()=>Fe.show(),400))}}function Ko(){o(st)<aa.length-1&&fe(st)}function Qo(){o(st)>0&&fe(st,-1)}function bt(){b(ve,!1),b(mt,0),Ie=!1,we!==null&&(clearTimeout(we),we=null)}function pa(){if(!o(ve)||o(mt)<=0){bt();return}console.log(`Autoplay: Starting spin ${o(mt)} rounds left`),da(),fe(mt,-1)}function qo(){confirm("Reset all statistics?")&&(b(We,0),b(Ne,0),b(at,0),b(qt,0),b(vt,0),b(es,0),b(yt,0),b(ts,0))}var ua=wn();_r(l=>{var p=un();m(Ct(p)),ee(l,p)});var fa=Ct(ua);{var Jo=l=>{var p=mn(),k=m(_(p),2),y=m(_(k));w(k);var A=m(k,2);{var E=O=>{var B=fn(),F=m(_(B));w(B),ye(()=>W(F,` ${o(Me)??""}`)),ee(O,B)};xe(A,O=>{o(Me)&&O(E)})}var $=m(A,2),M=m(_($));M.nodeValue=` ${be??""}`,w($);var Y=m($,2),X=m(_(Y));X.nodeValue=` ${Nt??""}`,w(Y);var K=m(Y,2),Q=m(_(K));w(K);var S=m(K,2);{var R=O=>{var B=gn(),F=_(B),C=_(F);w(F);var je=m(F,2);Ha(je,17,()=>de,Ga,(He,se)=>{var Z=hn(),mr=_(Z,!0);w(Z),ye(()=>W(mr,o(se))),ee(He,Z)}),w(B),ye(()=>W(C,`Log (${de.length??""})`)),ee(O,B)};xe(S,O=>{de.length>0&&O(R)})}w(p),ye(()=>{W(y,` ${o(tt)??""}`),W(Q,` ${Wt.a??""}`)}),ee(l,p)};xe(fa,l=>{(o(tt)!=="Assets loaded successfully!"||o(Me))&&l(Jo)})}var ha=m(fa,2);{var Zo=l=>{var p=bn(),k=m(_(p),2),y=_(k);w(k);var A=m(k,2);Ha(A,17,()=>o(ze),Ga,(Y,X)=>{var K=vn(),Q=_(K);w(K),ye(S=>W(Q,`${o(X).count??""} × ${ca[o(X).symbol]??""} = ${S??""} pistettä`),[()=>o(X).payout.toFixed(2)]),ee(Y,K)});var E=m(A,2);{var $=Y=>{var X=yn(),K=_(X),Q=_(K);w(K),w(X),ye(()=>W(Q,`✨ ${o(ze)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),ee(Y,X)};xe(E,Y=>{o(ze).length>0&&o(ze)[0].multiplier>1&&Y($)})}var M=m(E,2);w(p),ye(()=>W(y,`${o(pe)??""} pistettä`)),U("click",M,()=>{b($e,!1),rs(),console.log("Win popup closed, ready for next spin")}),ee(l,p)};xe(ha,l=>{o(pe)>0&&o($e)&&l(Zo)})}var ga=m(ha,2);{var er=l=>{var p=xn(),k=m(_(p),8);w(p),ye(y=>x(p,"style",`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.95);
    color: white;
    padding: ${30*o(v)}px;
    border-radius: ${15*o(v)}px;
    font-family: Arial, sans-serif;
    z-index: 3000;
    border: ${3*o(v)}px solid #ffd700;
    max-width: ${600*o(v)}px;
    max-height: ${y??""}px;
    overflow-y: auto;
    font-size: ${o(v)??""}em;
  `),[()=>Math.min(i*o(v)*.8,80*window.innerHeight/100)]),U("click",k,()=>{b(De,!1)}),ee(l,p)};xe(ga,l=>{o(De)&&l(er)})}var ma=m(ga,2);{var tr=l=>{var p=_n(),k=_(p),y=m(_(k),4),A=_(y,!0);w(y);var E=m(y,2);w(k),w(p),ye($=>W(A,$),[()=>o(as).toFixed(2)]),U("click",E,()=>{b(ss,!1),b(D,!1),b(Oe,0),b(as,0),Vt()}),U("mouseenter",E,$=>{$.currentTarget.style.transform="scale(1.05)",$.currentTarget.style.boxShadow="0 6px 20px rgba(255, 215, 0, 0.6)"}),U("mouseleave",E,$=>{$.currentTarget.style.transform="scale(1)",$.currentTarget.style.boxShadow="0 4px 15px rgba(255, 215, 0, 0.4)"}),ee(l,p)};xe(ma,l=>{o(ss)&&l(tr)})}var va=m(ma,2),ns=_(va),nt=_(ns);x(nt,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${r}px;
        height: ${i}px;
      `);var ls=_(nt),cs=m(ls,2),ds=_(cs);x(ds,"src",`${V??""}/Control_leftend.png`);var xt=m(ds,2),_t=_(xt),ya=_(_t),ps=m(ya,2),us=_(ps),wt=m(us,2),sr=_(wt,!0);w(wt);var ba=m(wt,2);w(ps),w(_t);var fs=m(_t,2);x(fs,"src",`${V??""}/Control_divider.png`);var At=m(fs,2),xa=_(At),hs=m(xa,2),ar=_(hs,!0);w(hs),w(At);var gs=m(At,2);x(gs,"src",`${V??""}/Control_divider.png`);var ms=m(gs,2),vs=_(ms),_a=_(vs);w(vs),w(ms);var ys=m(ms,2);x(ys,"src",`${V??""}/Control_divider.png`);var kt=m(ys,2),Et=_(kt),wa=m(Et,2);w(kt);var bs=m(kt,2);x(bs,"src",`${V??""}/Control_divider.png`);var St=m(bs,2),$t=_(St),Aa=m($t,2);w(St);var jt=m(St,2),ka=_(jt),xs=m(ka,2),or=_(xs,!0);w(xs),w(jt);var _s=m(jt,2);x(_s,"src",`${V??""}/Control_divider.png`);var Ea=m(_s,2);w(xt);var Sa=m(xt,2);x(Sa,"src",`${V??""}/Control_rightend.png`),w(cs),w(nt),za(nt,l=>is=l,()=>is);var Lt=m(nt,2);Lt.textContent=`🛠️ DEBUG v${s}`;var Tt=m(Lt,2);za(Tt,l=>Fe=l,()=>Fe);var Pt=m(Tt,2),$a=m(_(Pt),2);$a.textContent=`v${s}`;var ws=m($a,2),ja=m(_(ws),2),rr=_(ja,!0);w(ja),w(ws);var As=m(ws,2),La=m(_(As),2),ir=_(La,!0);w(La),w(As);var ks=m(As,2),Ta=m(_(ks),2),nr=_(Ta,!0);w(Ta),w(ks);var Es=m(ks,2),Ss=m(_(Es),2),lr=_(Ss);w(Ss),w(Es);var $s=m(Es,2),js=m(_($s),2),cr=_(js);w(js),w($s);var Ls=m($s,2),Pa=m(_(Ls),2),dr=_(Pa,!0);w(Pa),w(Ls);var Ts=m(Ls,2),Ra=m(_(Ts),2),pr=_(Ra,!0);w(Ra),w(Ts);var Ps=m(Ts,2),Ia=m(_(Ps),2),ur=_(Ia);w(Ia),w(Ps);var Oa=m(Ps,2),Ba=m(Oa,2),Ge=_(Ba),fr=_(Ge);w(Ge);var Rt=m(Ge,2),lt=m(Rt,2),hr=_(lt);w(lt);var Rs=m(lt,2);w(Ba),w(Pt);var ct=m(Pt,2),gr=_(ct,!0);w(ct),w(ns),w(va),ye((l,p,k,y,A,E,$,M)=>{x(ns,"style",`
    position: relative;
    width: ${r*o(v)}px;
    height: ${i*o(v)}px;
  `),x(ls,"style",`
          position: absolute;
          top: ${130*o(v)}px;
          right: ${20*o(v)}px;
          padding: ${10*o(v)}px ${15*o(v)}px;
          background-color: rgba(255, 215, 0, 0.3);
          border: ${2*o(v)}px solid rgba(255, 215, 0, 0.7);
          border-radius: ${8*o(v)}px;
          cursor: pointer;
          font-weight: bold;
          font-size: ${16*o(v)}px;
          color: white;
          text-shadow: 0 0 ${5*o(v)}px rgba(0,0,0,0.8);
          z-index: 1000;
          min-width: ${180*o(v)}px;
        `),x(cs,"style",`
        position: absolute;
        left: ${((Ht?Ht.x:j)+L)*o(v)}px;
        top: ${(g+q)*o(v)}px;
        width: ${o(Gt)*o(v)}px;
        height: ${u*o(v)}px;
        display: flex;
        align-items: center;
        z-index: 1000;
      `),x(ds,"style",`height: ${u*o(v)}px; flex-shrink: 0;`),x(xt,"style",`
    flex-grow: 1;
    height: ${u*o(v)}px;
    background-image: url('${V??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 ${20*o(v)}px;
  `),x(_t,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*o(v)}px;`),x(ya,"style",`color: #00ff00; font-size: ${12*o(v)}px; font-weight: bold;`),x(ps,"style",`display: flex; gap: ${5*o(v)}px; align-items: center;`),x(us,"style",`
            width: ${40*o(v)}px;
            height: ${40*o(v)}px;
            background-image: url('${V??""}/Control_lowerbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(wt,"style",`
          color: #fff;
          font-size: ${18*o(v)}px;
          font-weight: bold;
          min-width: ${80*o(v)}px;
          text-align: center;
          font-family: 'Courier New', monospace;
        `),W(sr,l),x(ba,"style",`
            width: ${40*o(v)}px;
            height: ${40*o(v)}px;
            background-image: url('${V??""}/Control_upperbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(fs,"style",`height: ${u*.8*o(v)}px; flex-shrink: 0;`),x(At,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*o(v)}px;`),x(xa,"style",`color: #00ff00; font-size: ${12*o(v)}px; font-weight: bold;`),x(hs,"style",`
        color: #fff;
        font-size: ${20*o(v)}px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      `),W(ar,p),x(gs,"style",`height: ${u*.8*o(v)}px; flex-shrink: 0;`),ni(vs,1,`play-button-wrapper ${(o(Yt)?"glare-animate":"")??""}`,"svelte-tijp0o"),x(_a,"style",`
            width: ${130*o(v)}px;
            height: ${130*o(v)}px;
            background-image: url('${V??""}/Control_playbutton.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
            opacity: 1;
            position: relative;
            z-index: 10;
            border-radius: 50%;
          `),x(ys,"style",`height: ${u*.8*o(v)}px; flex-shrink: 0;`),x(kt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*o(v)}px;`),x(Et,"style",`
          width: ${50*o(v)}px;
          height: ${50*o(v)}px;
          background-image: url('${V??""}/${(o(ve)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),x(Et,"title",o(ve)?"Stop Autoplay":"Autoplay"),x(wa,"src",`${V??""}/${(o(ve)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),x(wa,"style",`width: ${50*o(v)}px; height: auto;`),x(bs,"style",`height: ${u*.8*o(v)}px; flex-shrink: 0;`),x(St,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*o(v)}px;`),x($t,"style",`
          width: ${50*o(v)}px;
          height: ${50*o(v)}px;
          background-image: url('${V??""}/Control_fastplay_select.png');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),x($t,"title",`Spin Speed: ${(o(ce)==="slow"?"Slow":o(ce)==="medium"?"Medium":"Fast")??""}`),x(Aa,"src",`${V??""}/${(o(ce)==="fast"?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),x(Aa,"style",`width: ${50*o(v)}px; height: auto;`),x(jt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*o(v)}px;`),x(ka,"style",`color: #00ff00; font-size: ${12*o(v)}px; font-weight: bold;`),x(xs,"style",`
        color: #ffd700;
        font-size: ${20*o(v)}px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      `),W(or,k),x(_s,"style",`height: ${u*.8*o(v)}px; flex-shrink: 0;`),x(Ea,"style",`
        width: ${50*o(v)}px;
        height: ${50*o(v)}px;
        background-image: url('${V??""}/Control_menubar.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),x(Sa,"style",`height: ${u*o(v)}px; flex-shrink: 0;`),x(Lt,"style",`
    position: absolute;
    top: ${190*o(v)}px;
    right: ${20*o(v)}px;
    padding: ${10*o(v)}px ${15*o(v)}px;
    background-color: rgba(0, 255, 0, 0.3);
    border: ${2*o(v)}px solid rgba(0, 255, 0, 0.7);
    border-radius: ${8*o(v)}px;
    cursor: pointer;
    font-weight: bold;
    font-size: ${16*o(v)}px;
    color: white;
    text-shadow: 0 0 ${5*o(v)}px rgba(0,0,0,0.8);
    z-index: 10000;
    min-width: ${180*o(v)}px;
    pointer-events: auto;
  `),x(Tt,"winlevel",o(pe)/o(me)>=50?"jackpot":o(pe)/o(me)>=20?"medium":"small"),x(Tt,"winamount",o(pe)),x(Pt,"style",`
  position: absolute;
  top: 20px;
  left: 20px;
  display: ${(o(Kt)?"block":"none")??""};
  background: rgba(0, 0, 0, 0.9);
  color: #00ff00;
  padding: 15px 20px;
  border-radius: 10px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  border: 2px solid #00ff00;
  box-shadow: 0 4px 15px rgba(0, 255, 0, 0.3);
  z-index: 1500;
  min-width: 200px;
`),W(rr,y),W(ir,A),W(nr,E),x(Ss,"style",`color: ${$??""};`),W(lr,`${o(Jt)??""}%`),x(js,"style",`color: ${M??""};`),W(cr,`${o(Zt)??""}%`),W(dr,o(vt)),W(pr,o(es)),W(ur,`${o(Bo)??""}%`),Ge.disabled=o(ne).length===0,x(Ge,"style",`
        width: 100%;
        padding: 5px;
        background: ${(o(ne).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(o(ne).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(o(ne).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(o(ne).length>0?"1":"0.5")??""};
      `),W(fr,`Download Win Log (${o(ne).length??""})`),Rt.disabled=o(ne).length===0,x(Rt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(o(ne).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(o(ne).length>0?"1":"0.5")??""};
      `),x(lt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(o(le)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(o(le)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),W(hr,`🎵 Music: ${(o(le)?"ON":"OFF")??""}`),Rs.disabled=o(D),x(Rs,"style",`
        width: 100%;
        padding: 5px;
        background: ${(o(D)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(o(D)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(o(D)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(o(D)?"0.5":"1")??""};
      `),x(ct,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(o(_e)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(o(_e)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),x(ct,"title",o(_e)?"Mykistä äänet":"Laita äänet päälle"),W(gr,o(_e)?"🔊":"🔇")},[()=>o(me).toFixed(2),()=>o(Ee).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>o(oa).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>o(We).toLocaleString(),()=>o(Ne).toLocaleString(),()=>o(at).toLocaleString(),()=>parseFloat(o(Jt))>=95?"#00ff00":parseFloat(o(Jt))>=85?"#ffff00":"#ff6666",()=>parseFloat(o(Zt))>=30?"#00ff00":parseFloat(o(Zt))>=20?"#ffff00":"#ff6666"]),U("click",ls,()=>{b(De,!o(De))}),U("click",us,Qo),U("click",ba,Ko),U("click",_a,()=>{o(ve)&&bt(),da()}),U("click",Et,()=>{o(ve)?bt():b(ra,!o(ra))}),U("click",$t,()=>{o(ce)==="slow"?b(ce,"medium"):o(ce)==="medium"?b(ce,"fast"):b(ce,"slow")}),U("click",Ea,()=>{b(De,!o(De))}),U("click",Lt,()=>{b(Kt,!o(Kt))}),U("click",Oa,qo),U("click",Ge,Fo),U("click",Rt,Mo),U("click",lt,Po),U("click",Rs,Wo),U("click",ct,()=>{b(_e,!o(_e))}),ee(t,ua),io()}var kn=oe('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),En=oe('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function Sn(t,e){oo(e,!1);let s=Qr(e,"isAuthenticated",12,!1),a=Ds(""),r=Ds(!1);const i="slot2024";function n(){o(a)===i?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(b(r,!0),b(a,""),setTimeout(()=>b(r,!1),3e3))}ro(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),kr();var c=Ar(),f=Ct(c);{var h=d=>{var g=En(),u=_(g),j=m(_(u),4),L=_(j);li(L),Kr(2),w(j);var q=m(j,2);{var G=T=>{var N=kn();ee(T,N)};xe(q,T=>{o(r)&&T(G)})}w(u),w(g),di(L,()=>o(a),T=>b(a,T)),U("submit",j,pi(n)),ee(d,g)};xe(f,d=>{s()||d(h)})}ee(t,c),io()}var $n=oe("<!> <!>",1);function Wn(t){let e=Ds(!1);var s=$n(),a=Ct(s);Sn(a,{get isAuthenticated(){return o(e)},set isAuthenticated(n){b(e,n)},$$legacy:!0});var r=m(a,2);{var i=n=>{An(n,{})};xe(r,n=>{o(e)&&n(i)})}ee(t,s)}export{ho as A,po as C,bi as R,hi as S,go as V,Wn as _,fi as u};
