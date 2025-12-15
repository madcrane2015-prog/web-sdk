const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./D5XoV2MB.js","./DNWEu6uq.js","./DEliLNnF.js","./DWgShhht.js","./C04N3yhf.js","./C2GHuDhf.js","./CPiaDNp4.js","./FJtIms7T.js"])))=>i.map(i=>d[i]);
var ar=Object.defineProperty;var rr=(t,e,s)=>e in t?ar(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var se=(t,e,s)=>rr(t,typeof e!="symbol"?e+"":e,s);import{f as nr,l as ir,t as V,g as U,a as D,d as or}from"./DRDKHArV.js";import{i as lr}from"./Dw5_DM93.js";import{y as oe,j as cr,a8 as dr,F as o,Q as fr,aa as pr,ab as Os,h as Bs,e as Ut,k as Je,l as ur,ac as Ks,w as Qs,ad as hr,q as Js,a7 as gr,U as vr,a2 as Cs,aq as Dt,z as Fs,ar as mr,as as br,at as yr,o as xr,au as _r,av as wr,aw as Ar,ax as kr,b as Er,ay as Sr,az as Tr,a6 as Rr,aA as Pr,aB as Lr,D as Ir,L as Or,p as Zs,ah as C,ag as ea,T as _,aC as Be,f as Fe,s as m,c as y,r as x,t as re,I as qs,a as ta,aD as Br,aE as Jt}from"./DWgShhht.js";import{_ as $s,p as ue,i as Z}from"./DEliLNnF.js";import{s as F}from"./4RjN9yQL.js";import{b as Cr,p as Fr}from"./B1_V_3zc.js";import{b as Ze}from"./DbifEsbB.js";import{e as me,E as L,a as qr,C as ss,Q as ft,V as pt,N as Gt,D as J,H as $r,p as ke,a0 as Me,a1 as Ee,a2 as Mr,w as ve,a3 as tt,a4 as sa,a5 as We,a6 as le,a7 as ut,a8 as aa,a9 as Wr,aa as Vt,ab as jr,ac as Nr,y as lt}from"./DNWEu6uq.js";import{A as zr,B as Ms,G as Ur,T as ra,a as Dr,b as Ht}from"./C04N3yhf.js";function Ws(t,e){return e}function Gr(t,e,s,a){for(var r=[],n=e.length,i=0;i<n;i++)yr(e[i].e,r,!0);var l=n>0&&r.length===0&&s!==null;if(l){var p=s.parentNode;xr(p),p.append(s),a.clear(),he(t,e[0].prev,e[n-1].next)}_r(r,()=>{for(var u=0;u<n;u++){var d=e[u];l||(a.delete(d.k),he(t,d.prev,d.next)),wr(d.e,!l)}})}function js(t,e,s,a,r,n=null){var i=t,l={flags:e,items:new Map,first:null};oe&&cr();var p=null,u=!1,d=fr(()=>{var h=s();return gr(h)?h:h==null?[]:Js(h)});dr(()=>{var h=o(d),g=h.length;if(u&&g===0)return;u=g===0;let E=!1;if(oe){var R=i.data===pr;R!==(g===0)&&(i=Os(),Bs(i),Ut(!1),E=!0)}if(oe){for(var H=null,j,P=0;P<g;P++){if(Je.nodeType===8&&Je.data===ur){i=Je,E=!0,Ut(!1);break}var $=h[P],X=a($,P);j=na(Je,l,H,null,$,X,P,r,e,s),l.items.set(X,j),H=j}g>0&&Bs(Os())}oe||Vr(h,l,i,r,e,a,s),n!==null&&(g===0?p?Ks(p):p=Qs(()=>n(i)):p!==null&&hr(p,()=>{p=null})),E&&Ut(!0),o(d)}),oe&&(i=Je)}function Vr(t,e,s,a,r,n,i){var l=t.length,p=e.items,u=e.first,d=u,h,g=null,E=[],R=[],H,j,P,$;for($=0;$<l;$+=1){if(H=t[$],j=n(H,$),P=p.get(j),P===void 0){var X=d?d.e.nodes_start:s;g=na(X,e,g,g===null?e.first:g.next,H,j,$,a,r,i),p.set(j,g),E=[],R=[],d=g.next;continue}if(Hr(P,H,$),(P.e.f&Dt)!==0&&Ks(P.e),P!==d){if(h!==void 0&&h.has(P)){if(E.length<R.length){var K=R[0],ne;g=K.prev;var st=E[0],be=E[E.length-1];for(ne=0;ne<E.length;ne+=1)Ns(E[ne],K,s);for(ne=0;ne<R.length;ne+=1)h.delete(R[ne]);he(e,st.prev,be.next),he(e,g,st),he(e,be,K),d=K,g=be,$-=1,E=[],R=[]}else h.delete(P),Ns(P,d,s),he(e,P.prev,P.next),he(e,P,g===null?e.first:g.next),he(e,g,P),g=P;continue}for(E=[],R=[];d!==null&&d.k!==j;)(d.e.f&Dt)===0&&(h??(h=new Set)).add(d),R.push(d),d=d.next;if(d===null)continue;P=d}E.push(P),g=P,d=P.next}if(d!==null||h!==void 0){for(var at=h===void 0?[]:Js(h);d!==null;)(d.e.f&Dt)===0&&at.push(d),d=d.next;var N=at.length;if(N>0){var Ne=null;Gr(e,at,Ne,p)}}Fs.first=e.first&&e.first.e,Fs.last=g&&g.e}function Hr(t,e,s,a){br(t.v,e),t.i=s}function na(t,e,s,a,r,n,i,l,p,u){var d=(p&Ar)!==0,h=(p&kr)===0,g=d?h?vr(r):Cs(r):r,E=(p&mr)===0?i:Cs(i),R={i:E,v:g,k:n,a:null,e:null,prev:s,next:a};try{return R.e=Qs(()=>l(t,g,E,u),oe),R.e.prev=s&&s.e,R.e.next=a&&a.e,s===null?e.first=R:(s.next=R,s.e.next=R.e),a!==null&&(a.prev=R,a.e.prev=R.e),R}finally{}}function Ns(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,r=e?e.e.nodes_start:s,n=t.e.nodes_start;n!==a;){var i=Er(n);r.before(n),n=i}}function he(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function Yr(t){if(oe){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;ge(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var r=t.checked;ge(t,"checked",null),t.checked=r}}};t.__on_r=s,Sr(s),nr()}}function ge(t,e,s,a){var r=t.__attributes??(t.__attributes={});oe&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Tr]=s),s==null?t.removeAttribute(e):typeof s!="string"&&Xr(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var zs=new Map;function Xr(t){var e=zs.get(t.nodeName);if(e)return e;zs.set(t.nodeName,e=[]);for(var s,a=t,r=Element.prototype;r!==a;){s=Pr(a);for(var n in s)s[n].set&&e.push(n);a=Rr(a)}return e}function Kr(t,e,s=e){var a=Lr();ir(t,"input",r=>{var n=r?t.defaultValue:t.value;if(n=Yt(t)?Xt(n):n,s(n),a&&n!==(n=e())){var i=t.selectionStart,l=t.selectionEnd;t.value=n??"",l!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(l,t.value.length))}}),(oe&&t.defaultValue!==t.value||Ir(e)==null&&t.value)&&s(Yt(t)?Xt(t.value):t.value),Or(()=>{var r=e();Yt(t)&&r===Xt(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function Yt(t){var e=t.type;return e==="number"||e==="range"}function Xt(t){return t===""?null:+t}function Qr(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const Zt=[];me.handleByNamedList(L.Environment,Zt);async function Jr(t){if(!t)for(let e=0;e<Zt.length;e++){const s=Zt[e];if(s.value.test()){await s.value.load();return}}}let et;function Zr(){if(typeof et=="boolean")return et;try{et=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{et=!1}return et}var ia=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(ia||{});class en{constructor(e){this.items=[],this._name=e}emit(e,s,a,r,n,i,l,p){const{name:u,items:d}=this;for(let h=0,g=d.length;h<g;h++)d[h][u](e,s,a,r,n,i,l,p);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const tn=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],oa=class la extends qr{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...tn,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Jr(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...la.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof ss&&(a={container:a},s&&(ft(pt,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const r=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=r?a.clearColor:Gt.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const r=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==r&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=ia.ALL);const{clear:a,clearColor:r,target:n}=e;Gt.shared.setValue(r??this.background.colorRgba),s.renderTarget.clear(n,a,Gt.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new en(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const r in this.runners)this.runners[r].add(a);return this}_addPipes(e,s){const a=s.reduce((r,n)=>(r[n.name]=n.value,r),{});e.forEach(r=>{const n=r.value,i=r.name,l=a[i];this.renderPipes[i]=new n(this,l?new l:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Zr())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};oa.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let ca=oa,ct;function sn(t){return ct!==void 0||(ct=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??ca.defaultOptions.failIfMajorPerformanceCaveat};try{if(!J.get().getWebGLRenderingContext())return!1;let r=J.get().createCanvas().getContext("webgl",e);const n=!!((s=r==null?void 0:r.getContextAttributes())!=null&&s.stencil);if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,n}catch{return!1}})()),ct}let dt;async function an(t={}){return dt!==void 0||(dt=await(async()=>{const e=J.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),dt}const Us=["webgl","webgpu","canvas"];async function rn(t){let e=[];t.preference?(e.push(t.preference),Us.forEach(n=>{n!==t.preference&&e.push(n)})):e=Us.slice();let s,a={};for(let n=0;n<e.length;n++){const i=e[n];if(i==="webgpu"&&await an()){const{WebGPURenderer:l}=await $s(async()=>{const{WebGPURenderer:p}=await import("./D5XoV2MB.js");return{WebGPURenderer:p}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=l,a={...t,...t.webgpu};break}else if(i==="webgl"&&sn(t.failIfMajorPerformanceCaveat??ca.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:l}=await $s(async()=>{const{WebGLRenderer:p}=await import("./FJtIms7T.js");return{WebGLRenderer:p}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=l,a={...t,...t.webgl};break}else if(i==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const r=new s;return await r.init(a),r}const da="8.8.1";class fa{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,da)}static destroy(){}}fa.extension=L.Application;class nn{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,da)}destroy(){this._renderer=null}}nn.extension={type:[L.WebGLSystem,L.WebGPUSystem],name:"initHook",priority:-10};const pa=class es{constructor(...e){this.stage=new ss,e[0]!==void 0&&ft(pt,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await rn(e),es._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return ft(pt,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=es._plugins.slice(0);a.reverse(),a.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};pa._plugins=[];let ua=pa;me.handleByList(L.Application,ua._plugins);me.add(fa);class ha extends zr{constructor(e,s){super();const{textures:a,data:r}=e;Object.keys(r.pages).forEach(n=>{const i=r.pages[parseInt(n,10)],l=a[i.id];this.pages.push({texture:l})}),Object.keys(r.chars).forEach(n=>{const i=r.chars[n],{frame:l,source:p}=a[i.page],u=new $r(i.x+l.x,i.y+l.y,i.width,i.height),d=new ke({source:p,frame:u});this.chars[n]={id:n.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:d}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){Ms.install(e)}static uninstall(e){Ms.uninstall(e)}}const Kt={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const h in e){const g=e[h].match(/^[a-z]+/gm)[0],E=e[h].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),R={};for(const H in E){const j=E[H].split("="),P=j[0],$=j[1].replace(/"/gm,""),X=parseFloat($),K=isNaN(X)?$:X;R[P]=K}s[g].push(R)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=s.info,[n]=s.common,[i]=s.distanceField??[];i&&(a.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),a.fontSize=parseInt(r.size,10),a.fontFamily=r.face,a.lineHeight=parseInt(n.lineHeight,10);const l=s.page;for(let h=0;h<l.length;h++)a.pages.push({id:parseInt(l[h].id,10)||0,file:l[h].file});const p={};a.baseLineOffset=a.lineHeight-parseInt(n.base,10);const u=s.char;for(let h=0;h<u.length;h++){const g=u[h],E=parseInt(g.id,10);let R=g.letter??g.char??String.fromCharCode(E);R==="space"&&(R=" "),p[E]=R,a.chars[R]={id:E,page:parseInt(g.page,10)||0,x:parseInt(g.x,10),y:parseInt(g.y,10),width:parseInt(g.width,10),height:parseInt(g.height,10),xOffset:parseInt(g.xoffset,10),yOffset:parseInt(g.yoffset,10),xAdvance:parseInt(g.xadvance,10),kerning:{}}}const d=s.kerning||[];for(let h=0;h<d.length;h++){const g=parseInt(d[h].first,10),E=parseInt(d[h].second,10),R=parseInt(d[h].amount,10);a.chars[p[E]].kerning[p[g]]=R}return a}},Ds={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const n=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),l=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let u=0;u<n.length;u++)e.pages.push({id:parseInt(n[u].getAttribute("id"),10)||0,file:n[u].getAttribute("file")});const p={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let u=0;u<i.length;u++){const d=i[u],h=parseInt(d.getAttribute("id"),10);let g=d.getAttribute("letter")??d.getAttribute("char")??String.fromCharCode(h);g==="space"&&(g=" "),p[h]=g,e.chars[g]={id:h,page:parseInt(d.getAttribute("page"),10)||0,x:parseInt(d.getAttribute("x"),10),y:parseInt(d.getAttribute("y"),10),width:parseInt(d.getAttribute("width"),10),height:parseInt(d.getAttribute("height"),10),xOffset:parseInt(d.getAttribute("xoffset"),10),yOffset:parseInt(d.getAttribute("yoffset"),10),xAdvance:parseInt(d.getAttribute("xadvance"),10),kerning:{}}}for(let u=0;u<l.length;u++){const d=parseInt(l[u].getAttribute("first"),10),h=parseInt(l[u].getAttribute("second"),10),g=parseInt(l[u].getAttribute("amount"),10);e.chars[p[h]].kerning[p[d]]=g}return e}},Gs={test(t){return typeof t=="string"&&t.includes("<font>")?Ds.test(J.get().parseXML(t)):!1},parse(t){return Ds.parse(J.get().parseXML(t))}},on=[".xml",".fnt"],ln={extension:{type:L.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof ha,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},cn={extension:{type:L.LoadParser,priority:Me.Normal},name:"loadBitmapFont",test(t){return on.includes(Ee.extname(t).toLowerCase())},async testParse(t){return Kt.test(t)||Gs.test(t)},async parse(t,e,s){const a=Kt.test(t)?Kt.parse(t):Gs.parse(t),{src:r}=e,{pages:n}=a,i=[],l=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let h=0;h<n.length;++h){const g=n[h].file;let E=Ee.join(Ee.dirname(r),g);E=Mr(E,r),i.push({src:E,data:l})}const p=await s.load(i),u=i.map(h=>p[h.src]);return new ha({data:a,textures:u},r)},async load(t,e){return await(await J.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class dn{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const fn={extension:{type:L.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof ke),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((r,n)=>{s[a+(n===0?"":n+1)]=r})}),s}};async function ga(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const pn={extension:{type:L.DetectionParser,priority:1},test:async()=>ga("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},Vs=["png","jpg","jpeg"],un={extension:{type:L.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...Vs],remove:async t=>t.filter(e=>!Vs.includes(e))},hn="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function as(t){return hn?!1:document.createElement("video").canPlayType(t)!==""}const gn={extension:{type:L.DetectionParser,priority:0},test:async()=>as("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},vn={extension:{type:L.DetectionParser,priority:0},test:async()=>as("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},mn={extension:{type:L.DetectionParser,priority:0},test:async()=>as("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},bn={extension:{type:L.DetectionParser,priority:0},test:async()=>ga("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class yn{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var i,l;let r=null,n=null;if(s.loadParser&&(n=this._parserHash[s.loadParser],n||ve(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!n){for(let p=0;p<this.parsers.length;p++){const u=this.parsers[p];if(u.load&&((i=u.test)!=null&&i.call(u,e,s,this))){n=u;break}}if(!n)return ve(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await n.load(e,s,this),a.parser=n;for(let p=0;p<this.parsers.length;p++){const u=this.parsers[p];u.parse&&u.parse&&await((l=u.testParse)==null?void 0:l.call(u,r,s,this))&&(r=await u.parse(r,s,this)||r,a.parser=u)}return r})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const r={},n=sa(e),i=tt(e,u=>({alias:[u],src:u,data:{}})),l=i.length,p=i.map(async u=>{const d=Ee.toAbsolute(u.src);if(!r[u.src])try{this.promiseCache[d]||(this.promiseCache[d]=this._getLoadPromiseAndParser(d,u)),r[u.src]=await this.promiseCache[d].promise,s&&s(++a/l)}catch(h){throw delete this.promiseCache[d],delete r[u.src],new Error(`[Loader.load] Failed to load ${d}.
${h}`)}});return await Promise.all(p),n?r[i[0].src]:r}async unload(e){const a=tt(e,r=>({alias:[r],src:r})).map(async r=>{var l,p;const n=Ee.toAbsolute(r.src),i=this.promiseCache[n];if(i){const u=await i.promise;delete this.promiseCache[n],await((p=(l=i.parser)==null?void 0:l.unload)==null?void 0:p.call(l,u,r,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&ve(`[Assets] loadParser name conflict "${s.name}"`):ve("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function je(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const xn=".json",_n="application/json",wn={extension:{type:L.LoadParser,priority:Me.Low},name:"loadJson",test(t){return je(t,_n)||We(t,xn)},async load(t){return await(await J.get().fetch(t)).json()}},An=".txt",kn="text/plain",En={name:"loadTxt",extension:{type:L.LoadParser,priority:Me.Low,name:"loadTxt"},test(t){return je(t,kn)||We(t,An)},async load(t){return await(await J.get().fetch(t)).text()}},Sn=["normal","bold","100","200","300","400","500","600","700","800","900"],Tn=[".ttf",".otf",".woff",".woff2"],Rn=["font/ttf","font/otf","font/woff","font/woff2"],Pn=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Ln(t){const e=Ee.extname(t),r=Ee.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(l=>l.charAt(0).toUpperCase()+l.slice(1));let n=r.length>0;for(const l of r)if(!l.match(Pn)){n=!1;break}let i=r.join(" ");return n||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const In=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function On(t){return In.test(t)?t:encodeURI(t)}const Bn={extension:{type:L.LoadParser,priority:Me.Low},name:"loadWebFont",test(t){return je(t,Rn)||We(t,Tn)},async load(t,e){var a,r,n;const s=J.get().getFontFaceSet();if(s){const i=[],l=((a=e.data)==null?void 0:a.family)??Ln(t),p=((n=(r=e.data)==null?void 0:r.weights)==null?void 0:n.filter(d=>Sn.includes(d)))??["normal"],u=e.data??{};for(let d=0;d<p.length;d++){const h=p[d],g=new FontFace(l,`url(${On(t)})`,{...u,weight:h});await g.load(),s.add(g),i.push(g)}return le.set(`${l}-and-url`,{url:t,fontFaces:i}),i.length===1?i[0]:i}return ve("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{le.remove(`${e.family}-and-url`),J.get().getFontFaceSet().delete(e)})}};function rs(t,e=1){var a;const s=(a=ut.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function ns(t,e,s){t.label=s,t._sourceOrigin=s;const a=new ke({source:t,label:s}),r=()=>{delete e.promiseCache[s],le.has(s)&&le.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(ve("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),a.once("destroy",()=>{t.destroyed||(ve("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),a}const Cn=".svg",Fn="image/svg+xml",qn={extension:{type:L.LoadParser,priority:Me.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return je(t,Fn)||We(t,Cn)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?Mn(t):$n(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function $n(t,e,s,a){var j,P,$;const n=await(await J.get().fetch(t)).blob(),i=URL.createObjectURL(n),l=new Image;l.src=i,l.crossOrigin=a,await l.decode(),URL.revokeObjectURL(i);const p=document.createElement("canvas"),u=p.getContext("2d"),d=((j=e.data)==null?void 0:j.resolution)||rs(t),h=((P=e.data)==null?void 0:P.width)??l.width,g=(($=e.data)==null?void 0:$.height)??l.height;p.width=h*d,p.height=g*d,u.drawImage(l,0,0,h*d,g*d);const{parseAsGraphicsContext:E,...R}=e.data??{},H=new aa({resource:p,alphaMode:"premultiply-alpha-on-upload",resolution:d,...R});return ns(H,s,t)}async function Mn(t){const s=await(await J.get().fetch(t)).text(),a=new Ur;return a.svg(s),a}const Wn=`(function () {
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
`;let qe=null,ts=class{constructor(){qe||(qe=URL.createObjectURL(new Blob([Wn],{type:"application/javascript"}))),this.worker=new Worker(qe)}};ts.revokeObjectURL=function(){qe&&(URL.revokeObjectURL(qe),qe=null)};const jn=`(function () {
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
`;let $e=null;class va{constructor(){$e||($e=URL.createObjectURL(new Blob([jn],{type:"application/javascript"}))),this.worker=new Worker($e)}}va.revokeObjectURL=function(){$e&&(URL.revokeObjectURL($e),$e=null)};let Hs=0,Qt;class Nn{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new ts;s.addEventListener("message",a=>{s.terminate(),ts.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Qt===void 0&&(Qt=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Qt&&(this._createdWorkers++,e=new va().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((r,n)=>{this._queue.push({id:e,arguments:s,resolve:r,reject:n})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[Hs]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:Hs++,id:a})}}const Ys=new Nn,zn=[".jpeg",".jpg",".png",".webp",".avif"],Un=["image/jpeg","image/png","image/webp","image/avif"];async function Dn(t,e){var r;const s=await J.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const ma={name:"loadTextures",extension:{type:L.LoadParser,priority:Me.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return je(t,Un)||We(t,zn)},async load(t,e,s){var n;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Ys.isImageBitmapSupported()?a=await Ys.loadImageBitmap(t,e):a=await Dn(t,e):a=await new Promise((i,l)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?i(a):(a.onload=()=>{i(a)},a.onerror=l)});const r=new aa({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((n=e.data)==null?void 0:n.resolution)||rs(t),...e.data});return ns(r,s,t)},unload(t){t.destroy(!0)}},ba=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Gn=ba.map(t=>`video/${t.substring(1)}`);function Vn(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=Yn(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function Hn(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",r),t.load();function a(){n(),e()}function r(i){n(),s(i)}function n(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",r)}})}function Yn(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const Xn={name:"loadVideo",extension:{type:L.LoadParser,name:"loadVideo"},test(t){const e=je(t,Gn),s=We(t,ba);return e||s},async load(t,e,s){var p,u;const a={...Vt.defaultOptions,resolution:((p=e.data)==null?void 0:p.resolution)||rs(t),alphaMode:((u=e.data)==null?void 0:u.alphaMode)||await Wr(),...e.data},r=document.createElement("video"),n={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(n).forEach(d=>{const h=n[d];h!==void 0&&r.setAttribute(d,h)}),a.muted===!0&&(r.muted=!0),Vn(r,t,a.crossorigin);const i=document.createElement("source");let l;if(t.startsWith("data:"))l=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const d=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();l=Vt.MIME_TYPES[d]||`video/${d}`}return i.src=t,l&&(i.type=l),new Promise(d=>{const h=async()=>{const g=new Vt({...a,resource:r});r.removeEventListener("canplay",h),e.data.preload&&await Hn(r),d(ns(g,s,t))};r.addEventListener("canplay",h),r.appendChild(i)})},unload(t){t.destroy(!0)}},ya={extension:{type:L.ResolveParser,name:"resolveTexture"},test:ma.test,parse:t=>{var e;return{resolution:parseFloat(((e=ut.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},Kn={extension:{type:L.ResolveParser,priority:-2,name:"resolveJson"},test:t=>ut.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:ya.parse};class Qn{constructor(){this._detections=[],this._initialized=!1,this.resolver=new ut,this.loader=new yn,this.cache=le,this._backgroundLoader=new dn(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var n,i;if(this._initialized){ve("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let l=e.manifest;typeof l=="string"&&(l=await this.load(l)),this.resolver.addManifest(l)}const s=((n=e.texturePreference)==null?void 0:n.resolution)??1,a=typeof s=="number"?[s]:s,r=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=sa(e),r=tt(e).map(l=>{if(typeof l!="string"){const p=this.resolver.getAlias(l);return p.some(u=>!this.resolver.hasKey(u))&&this.add(l),Array.isArray(p)?p[0]:p}return this.resolver.hasKey(l)||this.add({alias:l,src:l}),l}),n=this.resolver.resolve(r),i=await this._mapLoadToResolve(n,s);return a?i[r[0]]:i}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const r=this.resolver.resolveBundle(e),n={},i=Object.keys(r);let l=0,p=0;const u=()=>{s==null||s(++l/p)},d=i.map(h=>{const g=r[h];return p+=Object.keys(g).length,this._mapLoadToResolve(g,u).then(E=>{n[h]=E})});return await Promise.all(d),a?n[e[0]]:n}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return le.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=le.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(a,s);this._backgroundLoader.active=!0;const n={};return a.forEach(i=>{const l=r[i.src],p=[i.src];i.alias&&p.push(...i.alias),p.forEach(u=>{n[u]=l}),le.set(p,l)}),n}async unload(e){this._initialized||await this.init();const s=tt(e).map(r=>typeof r!="string"?r.src:r),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=tt(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(r=>this._unloadFromResolved(s[r]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{le.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,r)=>s.indexOf(a)===r),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const Ce=new Qn;me.handleByList(L.LoadParser,Ce.loader.parsers).handleByList(L.ResolveParser,Ce.resolver.parsers).handleByList(L.CacheParser,Ce.cache.parsers).handleByList(L.DetectionParser,Ce.detections);me.add(fn,un,pn,bn,gn,vn,mn,wn,En,Bn,qn,ma,Xn,cn,ln,ya,Kn);const Xs={loader:L.LoadParser,resolver:L.ResolveParser,cache:L.CacheParser,detection:L.DetectionParser};me.handle(L.Asset,t=>{const e=t.ref;Object.entries(Xs).filter(([s])=>!!e[s]).forEach(([s,a])=>me.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(Xs).filter(s=>!!e[s]).forEach(s=>me.remove(e[s]))});class Jn extends jr{constructor(e,s){const{text:a,resolution:r,style:n,anchor:i,width:l,height:p,roundPixels:u,...d}=e;super({...d}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=n,this.resolution=r??null,this.allowChildren=!1,this._anchor=new Nr({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=u??!1,l!==void 0&&(this.width=l),p!==void 0&&(this.height=p)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,r=-s*this.anchor.x;let n=0;return e.x>=r&&e.x<=r+s&&(n=-a*this.anchor.y,e.y>=n&&e.y<=n+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function Zn(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(ft(pt,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class ei extends Jn{constructor(...e){const s=Zn(e,"Text");super(s,ra),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=Dr.measureText(this._text,this._style),{width:r,height:n}=a;e.minX=-s._x*r,e.maxX=e.minX+r,e.minY=-s._y*n,e.maxY=e.minY+n}}var ti=V('<p style="color: red;" class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Error:</strong> </p>'),si=V('<div class="svelte-1t2q5b9"> </div>'),ai=V('<details class="svelte-1t2q5b9"><summary class="svelte-1t2q5b9"> </summary> <!></details>'),ri=V(`<div style="
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
  " class="svelte-1t2q5b9"><h3 class="svelte-1t2q5b9">🎰 Oma-peli Debug</h3> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Status:</strong> </p> <!> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Base:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">BG URL:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Sample:</strong> </p> <!></div>`),ni=V('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-1t2q5b9"> </div>'),ii=V('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-1t2q5b9"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-1t2q5b9"> </span></div>'),oi=V(`<div style="
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
  " class="svelte-1t2q5b9"><h2 style="margin: 0 0 10px 0; font-size: 2em;" class="svelte-1t2q5b9">🎉 VOITTO! 🎉</h2> <div style="font-size: 1.5em; font-weight: bold; margin: 10px 0;" class="svelte-1t2q5b9"> </div> <!> <!> <button style="
        margin-top: 15px;
        padding: 8px 16px;
        background: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
      " class="svelte-1t2q5b9">Jatka pelaamista</button></div>`),li=V(`<div style="
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.95);
    color: white;
    padding: 30px;
    border-radius: 15px;
    font-family: Arial, sans-serif;
    z-index: 3000;
    border: 3px solid #ffd700;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
  " class="svelte-1t2q5b9"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-1t2q5b9">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-1t2q5b9">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-1t2q5b9"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-1t2q5b9"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-1t2q5b9">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Rockabilly: 3x=3.77 | 4x=18.83 | 5x=75.32 🎸</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Blonde: 3x=3.77 | 4x=15.07 | 5x=56.49 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Brunette: 3x=2.26 | 4x=11.30 | 5x=37.66 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-1t2q5b9">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Hot Rod: 3x=1.51 | 4x=5.28 | 5x=18.83 🚗</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Jacket: 3x=1.51 | 4x=5.28 | 5x=18.83 🧥</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Roller Skates: 3x=1.13 | 4x=3.77 | 5x=15.07 🛼</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Microphone: 3x=1.13 | 4x=3.77 | 5x=15.07 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-1t2q5b9">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Burger: 3x=0.38 | 4x=1.51 | 5x=7.53 🍔</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Fries: 3x=0.38 | 4x=1.51 | 5x=7.53 🍟</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Milkshake: 3x=0.23 | 4x=0.76 | 5x=3.77 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-1t2q5b9">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">SCATTER 📌 - Triggeröi 10 FREE SPINS</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-1t2q5b9">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-1t2q5b9"> <span style="color: #ffd700;" class="svelte-1t2q5b9">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-1t2q5b9">Sulje</button></div>`),ci=V('<div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #ff00ff; font-size: 16px; animation: pulse 1s infinite;" class="svelte-1t2q5b9"><span class="svelte-1t2q5b9">🎰 FREE SPINS:</span> <span class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-top: 1px solid #555; padding-top: 8px;" class="svelte-1t2q5b9"><span style="color: #fff; font-size: 14px;" class="svelte-1t2q5b9">Total Won:</span> <span style="color: #00ff00; font-size: 14px;" class="svelte-1t2q5b9"> </span></div>',1),di=V(`<div style="
      background: rgba(255, 100, 100, 0.9);
      color: white;
      padding: 15px 20px;
      border-radius: 10px;
      border: 2px solid #ff0000;
      box-shadow: 0 4px 15px rgba(255, 0, 0, 0.5);
      text-align: center;
      animation: winPulse 1s infinite;
    " class="svelte-1t2q5b9"><div style="font-weight: bold; font-size: 16px; margin-bottom: 8px;" class="svelte-1t2q5b9">🔄 AUTOPLAY</div> <div style="font-size: 20px; font-family: 'Courier New', monospace; margin-bottom: 10px;" class="svelte-1t2q5b9"> </div> <button style="
          width: 100%;
          padding: 8px;
          background: #ffffff;
          color: #ff0000;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          font-size: 14px;
        " class="svelte-1t2q5b9">⏹ STOP</button></div>`),fi=V(`<div style="
        position: absolute;
        bottom: 60px;
        right: 0;
        background: rgba(0, 0, 0, 0.95);
        padding: 15px;
        border-radius: 10px;
        border: 2px solid #0088ff;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
        min-width: 180px;
      " class="svelte-1t2q5b9"><div style="color: white; font-weight: bold; margin-bottom: 10px; text-align: center;" class="svelte-1t2q5b9">Select Rounds:</div> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #44aa44;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-1t2q5b9">10 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #4488ff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-1t2q5b9">100 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #ff8844;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-1t2q5b9">1,000 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #ff4444;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-1t2q5b9">10,000 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            background: #aa00ff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-1t2q5b9">100,000 Rounds</button> <button style="
            width: 100%;
            padding: 6px;
            background: rgba(255, 255, 255, 0.1);
            color: #aaa;
            border: 1px solid #555;
            border-radius: 5px;
            cursor: pointer;
            font-size: 12px;
          " class="svelte-1t2q5b9">Cancel</button></div>`),pi=V(`<button style="
        padding: 12px 20px;
        background: rgba(100, 200, 255, 0.9);
        color: white;
        border: 2px solid #0088ff;
        border-radius: 10px;
        cursor: pointer;
        font-weight: bold;
        font-size: 14px;
        box-shadow: 0 4px 15px rgba(0, 136, 255, 0.5);
        min-width: 140px;
      " class="svelte-1t2q5b9">🔄 AUTOPLAY</button> <!>`,1),ui=V(`<!> <!> <!> <div class="svelte-1t2q5b9"></div> <div class="svelte-1t2q5b9"><!> <div style="display: flex; justify-content: space-between; margin-bottom: 8px;" class="svelte-1t2q5b9"><span style="color: #fff;" class="svelte-1t2q5b9">CREDITS:</span> <span style="color: #ffd700;" class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; border-top: 1px solid #555; padding-top: 8px;" class="svelte-1t2q5b9"><span style="color: #fff;" class="svelte-1t2q5b9">BET:</span> <span style="color: #00ff00;" class="svelte-1t2q5b9"> </span></div></div> <div style="
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.85);
  padding: 15px;
  border-radius: 10px;
  border: 2px solid #00ff00;
  z-index: 1500;
" class="svelte-1t2q5b9"><div style="color: white; font-size: 14px; margin-bottom: 10px; text-align: center; font-weight: bold;" class="svelte-1t2q5b9">BET CONTROLS</div> <div style="display: flex; gap: 10px; align-items: center;" class="svelte-1t2q5b9"><button style="
        padding: 8px 15px;
        background: #ff4444;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: background 0.2s;
      " class="bet-btn-minus svelte-1t2q5b9">-</button> <div style="
      color: #00ff00;
      font-family: 'Courier New', monospace;
      font-size: 20px;
      font-weight: bold;
      min-width: 60px;
      text-align: center;
      background: rgba(0, 255, 0, 0.1);
      padding: 5px 10px;
      border-radius: 5px;
    " class="svelte-1t2q5b9"> </div> <button style="
        padding: 8px 15px;
        background: #44ff44;
        color: #000;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: background 0.2s;
      " class="bet-btn-plus svelte-1t2q5b9">+</button> <button style="
        padding: 8px 12px;
        background: #ffd700;
        color: #000;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        transition: background 0.2s;
      " class="bet-btn-max svelte-1t2q5b9">MAX</button></div></div> <button style="
    position: absolute;
    top: 130px;
    right: 20px;
    padding: 10px 15px;
    background-color: rgba(255, 215, 0, 0.3);
    border: 2px solid rgba(255, 215, 0, 0.7);
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    color: white;
    text-shadow: 0 0 5px rgba(0,0,0,0.8);
    z-index: 1000;
    min-width: 180px;
  " class="svelte-1t2q5b9">💰 PAYTABLE</button> <div style="
  position: absolute;
  top: 20px;
  left: 20px;
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
" class="svelte-1t2q5b9"><div style="font-weight: bold; font-size: 16px; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-1t2q5b9">📊 RTP MONITOR</div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Rounds:</span> <span style="color: #fff;" class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Wagered:</span> <span style="color: #ff6666;" class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Won:</span> <span style="color: #66ff66;" class="svelte-1t2q5b9"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 10px; 
    padding-top: 10px; 
    border-top: 1px solid #555;
    font-weight: bold;
    font-size: 18px;
  " class="svelte-1t2q5b9"><span style="color: #ffd700;" class="svelte-1t2q5b9">RTP:</span> <span class="svelte-1t2q5b9"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
  " class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Hit Freq:</span> <span class="svelte-1t2q5b9"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-size: 14px;
  " class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Free Spins Triggered:</span> <span style="color: #66ccff;" class="svelte-1t2q5b9"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 4px;
    font-size: 14px;
  " class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Free Spins Played:</span> <span style="color: #66ccff;" class="svelte-1t2q5b9"> </span></div> <button style="
      margin-top: 10px;
      width: 100%;
      padding: 5px;
      background: rgba(255, 100, 100, 0.3);
      color: #fff;
      border: 1px solid #ff6666;
      border-radius: 5px;
      cursor: pointer;
      font-size: 11px;
    " class="svelte-1t2q5b9">Reset Stats</button></div> <div style="
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1500;
" class="svelte-1t2q5b9"><!></div> <button class="svelte-1t2q5b9"> </button> <button title="SPIN" class="svelte-1t2q5b9"></button>`,1);function hi(t,e){Zs(e,!0);const s=13,a=1445,r=1e3,n=1.75,i=-30,l=-10,p=160,u=0,d=720,h=750,g=.8,E=50,R=30,H=-40,j=1,P="height",X=Math.round(100*n),K=Math.round(X*(700/760)),st=K+10,be=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],N=typeof window<"u"&&window.location.hostname.includes("github.io")?"/web-sdk/oma-peli/symbols":`${Ze}/symbols`,Ne={a:`${N}/Blue_hotrod.jpg`,b:`${N}/Blue_jacket.jpg`,c:`${N}/Blue_rollers.jpg`,d:`${N}/Blue_speakers.jpg`,e:`${N}/Premium_blonde.jpg`,f:`${N}/Premium_brunette.jpg`,g:`${N}/Premium_rocker.jpg`,h:`${N}/New_Wild.jpg`,i:`${N}/Red_burger.jpg`,j:`${N}/Red_fries.jpg`,k:`${N}/Red_milkshake.jpg`,l:`${N}/Scatter.jpg`,emptyslot:`${N}/Emptyslot.jpg`},ht=`${N}/bg_base.jpg`,is=`${N}/ReelFrames.png`,os=`${N}/RockABillyReels_logo.png`,xa={spin:`${Ze}/sounds/spin.mp3`,stop:`${Ze}/sounds/stop.mp3`,win:`${Ze}/sounds/win.mp3`};let ye=C(!0),gt={},rt=null,Se=null,ze=null,Ue=null,De=C("Initializing..."),Te=C(""),ee=[],ce=C(1e3),Y=C(10);const ls=1,vt=100;let xe=C(!1),Re=C(0),Ge=C(!1),_a=C(0),_e=!1,ie=null,mt=!1,Ve=C(0),Pe=C(0),He=C(0),bt=C(0),yt=qs(()=>o(Pe)>0?(o(He)/o(Pe)*100).toFixed(2):"0.00"),xt=qs(()=>o(Ve)>0?(o(bt)/o(Ve)*100).toFixed(2):"0.00"),te=C(!1),de=C(0),we=C(0),_t=C(0),wt=C(0);const cs={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25};function ds(f){if(f===6)return Math.random()<.5?"emptyslot":"h";const v=Math.random();let c=0;const w=be.filter(k=>k!=="h"),A=w.reduce((k,I)=>k+cs[I],0);for(const k of w)if(c+=cs[k]/A,v<c)return k;return"k"}function fs(){const f=[];for(let v=0;v<s;v++){let c=ds(v);o(te)&&(c==="k"?c="f":c==="j"?c="e":c==="i"&&(c="g")),f.push(c)}return f}function wa(f){return f<3?{col:0,row:f}:f<6?{col:1,row:f-3}:f===6?{col:2,row:0}:f<10?{col:3,row:f-7}:{col:4,row:f-10}}function Ye(f,v){return f===0?v:f===1?3+v:f===2?6:f===3?7+v:f===4?10+v:-1}function Aa(){if(o(te)){const f=Math.random();return f<.6?3:f<.9?5:10}else{const f=Math.random();return f<.6?1:f<.9?2:3}}const ka={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function Ea(){var G;const f=[],v=[];for(let b=0;b<s;b++)Xe[b]==="l"&&v.push(b);if(v.length>=5){const b=v.length;_(de,o(de)+b),o(te)?console.log(`🎰 FREE SPINS RETRIGGERED! +${b} FREE SPINS! Total: ${o(de)}`):(_(te,!0),_(we,0),Be(_t),console.log(`🎰 FREE SPINS TRIGGERED! ${v.length} scatters = ${b} FREE SPINS!`)),f.push({symbol:"l",count:v.length,payout:0,positions:v,multiplier:1})}const c=[];for(let b=0;b<3;b++)for(let S=0;S<3;S++)for(let O=0;O<1;O++)for(let W=0;W<3;W++)for(let T=0;T<3;T++){const B=[Ye(0,b),Ye(1,S),Ye(2,O),Ye(3,W),Ye(4,T)];c.push(B)}console.log(`Generated ${c.length} possible paths (should be 81)`);const w=[];for(const b of c){const S=b.map(T=>Xe[T]);if(S[0]==="emptyslot"||S[0]==="l")continue;let O=null;for(let T=0;T<S.length;T++)if(S[T]!=="h"&&S[T]!=="emptyslot"&&S[T]!=="l"){O=S[T];break}if(!O)continue;let W=0;for(let T=0;T<S.length;T++){const B=S[T];if(B===O||B==="h")W++;else break}if(W>=3){const B=b[0]%3;w.push({symbol:O,length:W,path:b.slice(0,W),startRow:B})}}const A=[],k=new Map;for(const b of w){const S=`${b.symbol}-${b.path.join(",")}`;k.has(S)||k.set(S,[]),k.get(S).push(b)}for(const[b,S]of k.entries()){const O=Math.max(...S.map(T=>T.length)),W=S.find(T=>T.length===O);W&&A.push(W)}const I=[],z=new Map;for(const b of A){const S=`${b.symbol}-${b.length}`;z.has(S)||z.set(S,[]),z.get(S).push(b)}const M=A.length>0?Aa():1;for(const[b,S]of z.entries()){const O=S[0],W=(G=ka[O.symbol])==null?void 0:G[O.length];if(W!==void 0&&W>0){const T=new Map;for(const ae of S)for(let Q=0;Q<ae.length;Q++)T.has(Q)||T.set(Q,new Set),T.get(Q).add(ae.path[Q]);let B=1;for(let ae=0;ae<O.length;ae++){const Q=T.get(ae);B*=Q?Q.size:1}const pe=W*o(Y)*B*M;console.log(`  ${O.length}x${O.symbol}: ${B} ways × ${W}x × ${o(Y)} bet × ${M} mult = ${pe}`);const ot=new Set;for(const ae of S)ae.path.forEach(Q=>ot.add(Q));I.push({symbol:O.symbol,count:O.length,payout:pe,positions:Array.from(ot),multiplier:M})}}return f.push(...I),f}let Ae=C(0),Le=C(ue([])),fe=C(!1),nt=C(!1);const Sa={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function At(f){if(!o(ye)||!gt[f])return;const v=gt[f];v.currentTime=0,v.play().catch(c=>{console.warn("Äänen toisto epäonnistui:",f,c)})}function Ta(f){Ke.forEach(v=>q.stage.removeChild(v)),Ke=[],f.forEach(v=>{v.positions.forEach(c=>{const w=Ie[c],A=new Ht().rect(0,0,X,K).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});A.x=w.container.x,A.y=w.container.y,q.stage.addChild(A),Ke.push(A);let k=0,I=1;const z=.05;q.ticker.add(()=>{k+=I*z,k>=.4&&(I=-1),k<=0&&(I=1),A.alpha=.5+k})})})}function kt(){Ke.forEach(f=>q.stage.removeChild(f)),Ke=[]}let Xe=fs(),Et,q,Ie=[],Ke=[];class Ra{constructor(v,c){se(this,"index");se(this,"container");se(this,"offset",0);se(this,"speed",0);se(this,"targetSpeed",30);se(this,"state","idle");se(this,"stopDelay",0);se(this,"bounceOffset",0);se(this,"bounceSpeed",0);se(this,"bounceFrames",0);this.index=v,this.container=c}start(v){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=v}update(){this.state!=="idle"&&(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"&&(this.speed*=.92,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,At("stop"))),this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=st&&(this.offset=0,Xe[this.index]=ds(this.index))))}draw(){const v=this.container;v.removeChildren();const c=Xe[this.index];if(!c||!rt||!rt[c])return;const w=rt[c];if(!w)return;const A=this.offset+this.bounceOffset,k=new lt(w);k.width=X,k.height=K,k.x=0,k.y=A,v.addChild(k)}}ea(async()=>{q=new ua,await q.init({width:a,height:r,background:"#001a33"}),Et.appendChild(q.canvas);const f={};try{_(De,"Loading background and UI images..."),ee.push(`Loading background: ${ht}`),ee.push(`Loading reel frames: ${is}`),ee.push(`Loading logo: ${os}`),await Ce.load([{alias:"background",src:ht},{alias:"reelframes",src:is},{alias:"logo",src:os}]),Se=ke.from("background"),ze=ke.from("reelframes"),Ue=ke.from("logo"),console.log("✅ Background texture created:",Se.width,"x",Se.height),console.log("✅ Reel frames texture created:",ze.width,"x",ze.height),console.log("✅ Logo texture created:",Ue.width,"x",Ue.height),ee.push("✅ All UI images loaded"),_(De,"Loading symbols...");const c=[];for(const w of be)c.push({alias:w,src:Ne[w]});await Ce.load(c);for(const w of be){const A=Ne[w];ee.push(`Loading symbol ${w}: ${A}`);try{const k=ke.from(w);f[w]=k,console.log(`✅ Symbol ${w} loaded:`,k.width,"x",k.height),ee.push(`✅ Symbol ${w} loaded`)}catch(k){const I=`❌ Failed to load symbol ${w} from ${A}: ${k}`;throw ee.push(I),console.error(I),new Error(I)}}rt=f,_(De,"Assets loaded successfully!")}catch(c){_(Te,`Asset loading failed: ${c}`),ee.push(o(Te)),console.error(o(Te));return}console.log("Ladataan ääniefektit...");for(const[c,w]of Object.entries(xa)){const A=new Audio;A.src=w,A.preload="auto",A.volume=.7,A.load(),A.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${w} (käytetään hiljaista placeholderia)`)}),gt[c]=A}if(console.log("Taustakuva ladattu, tekstuuri:",Se),Se){const c=new lt(Se);q.renderer.width/q.renderer.height;const w=c.texture.width/c.texture.height;let A;A=q.renderer.height/c.texture.height,A*=j,c.scale.set(A),c.x=(q.renderer.width-c.width)/2,c.y=(q.renderer.height-c.height)/2+H,q.stage.addChild(c),console.log("Taustakuva lisätty:",P,"mode, size:",c.width.toFixed(0),"x",c.height.toFixed(0),"image aspect:",w.toFixed(2),"scale:",A.toFixed(2),"pos:",c.x.toFixed(0),c.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(c=>({x:c.x+i,y:c.y+l})),Ie=[];for(let c=0;c<s;c++){const w=wa(c),A=w.col,k=w.row,I=300+A*(X+20),z=250+k*(K+15),M=c===6?I+u:I,G=c===6?z+p:z,b=new ss;b.x=M+i,b.y=G+l;const S=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],O=new Ht().rect(0,0,X,K).fill({color:S[c],alpha:.3});O.x=b.x,O.y=b.y,q.stage.addChild(O);const W=new ra({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),T=new ei({text:c.toString(),style:W});T.x=b.x+5,T.y=b.y+5,q.stage.addChild(T);const B=new Ht().rect(0,0,X,K).fill(16777215);B.x=b.x,B.y=b.y,b.mask=B,q.stage.addChild(B),q.stage.addChild(b),Ie.push(new Ra(c,b))}if(ze){const c=new lt(ze);c.scale.set(1),c.x=250,c.y=200,q.stage.addChild(c),console.log("Reel frames lisätty:",c.width.toFixed(0),"x",c.height.toFixed(0))}if(Ue){const c=new lt(Ue);c.scale.set(g),c.x=(q.renderer.width-c.width)/2+E,c.y=R,q.stage.addChild(c),console.log("Logo lisätty päällimmäiseen layeriin:",c.width.toFixed(0),"x",c.height.toFixed(0))}q.ticker.add(Pa)});function Pa(){for(const f of Ie)f.update(),f.draw();if(!o(fe)&&!mt&&Ie.every(f=>f.state==="stopped")){mt=!0;const f=Ea();console.log(`Checking wins, found ${f.length} wins`),f.length>0?(_(Le,ue(f)),_(Ae,ue(f.reduce((v,c)=>v+c.payout,0))),La(o(Ae)),_(fe,!0),_(_a,ue(Date.now())),console.log(`🎉 VOITTO! ${o(Ae)} pistettä! Uusi saldo: ${o(ce)}`),console.log(`isShowingWin set to: ${o(fe)}, totalWin: ${o(Ae)}`),f.forEach(v=>{const c=v.multiplier?` (${v.multiplier}x multiplier)`:"";console.log(`${v.count}x ${v.symbol} = ${v.payout} pistettä${c}`)}),Ta(f),At("win"),o(xe)&&!_e&&(_e=!0,ie=window.setTimeout(()=>{o(fe)&&o(xe)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),_(fe,!1),kt()),ie=window.setTimeout(()=>{_e=!1,Tt()},200)},1500))):(console.log("No wins found this spin"),o(xe)&&!_e&&(_e=!0,ie=window.setTimeout(()=>{_e=!1,Tt()},1e3))),o(te)&&o(de)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${o(we)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${o(we).toFixed(2)}`),_(te,!1),_(we,0)},2e3))}}function ps(){if(o(te)&&o(de)>0)Be(de,-1),Be(wt),console.log(`🎰 FREE SPIN! Remaining: ${o(de)}`);else if(!o(te)){if(o(ce)<o(Y)){alert(`Not enough credits! Balance: ${o(ce)}, Bet: ${o(Y)}`),St();return}_(ce,o(ce)-o(Y)),Be(Ve),_(Pe,o(Pe)+o(Y))}ie!==null&&(clearTimeout(ie),ie=null),_(Le,ue([])),_(Ae,0),_(fe,!1),mt=!1,kt(),Xe=fs(),Ie.forEach((f,v)=>f.start(60+v*10)),At("spin")}function La(f){_(ce,o(ce)+f),_(He,o(He)+f),o(te)&&_(we,o(we)+f),f>0&&Be(bt)}function Ia(){o(Y)<vt&&_(Y,ue(Math.min(o(Y)+1,vt)))}function Oa(){o(Y)>ls&&_(Y,ue(Math.max(o(Y)-1,ls)))}function Ba(){_(Y,vt)}function Qe(f){_(xe,!0),_(Re,ue(f)),_(Ge,!1),Tt()}function St(){_(xe,!1),_(Re,0),_e=!1,ie!==null&&(clearTimeout(ie),ie=null)}function Tt(){if(!o(xe)||o(Re)<=0){St();return}console.log(`Autoplay: Starting spin ${o(Re)} rounds left`),ps(),Be(Re,-1)}function Ca(){confirm("Reset all statistics?")&&(_(Ve,0),_(Pe,0),_(He,0),_(bt,0),_(_t,0),_(wt,0))}var us=ui(),hs=Fe(us);{var Fa=f=>{var v=ri(),c=m(y(v),2),w=m(y(c));x(c);var A=m(c,2);{var k=T=>{var B=ti(),pe=m(y(B));x(B),re(()=>F(pe,` ${o(Te)??""}`)),D(T,B)};Z(A,T=>{o(Te)&&T(k)})}var I=m(A,2),z=m(y(I));z.nodeValue=` ${Ze??""}`,x(I);var M=m(I,2),G=m(y(M));G.nodeValue=` ${ht??""}`,x(M);var b=m(M,2),S=m(y(b));x(b);var O=m(b,2);{var W=T=>{var B=ai(),pe=y(B),ot=y(pe);x(pe);var ae=m(pe,2);js(ae,17,()=>ee,Ws,(Q,tr)=>{var zt=si(),sr=y(zt,!0);x(zt),re(()=>F(sr,o(tr))),D(Q,zt)}),x(B),re(()=>F(ot,`Log (${ee.length??""})`)),D(T,B)};Z(O,T=>{ee.length>0&&T(W)})}x(v),re(()=>{F(w,` ${o(De)??""}`),F(S,` ${Ne.a??""}`)}),D(f,v)};Z(hs,f=>{(o(De)!=="Assets loaded successfully!"||o(Te))&&f(Fa)})}var gs=m(hs,2);{var qa=f=>{var v=oi(),c=m(y(v),2),w=y(c);x(c);var A=m(c,2);js(A,17,()=>o(Le),Ws,(M,G)=>{var b=ni(),S=y(b);x(b),re(O=>F(S,`${o(G).count??""} × ${Sa[o(G).symbol]??""} = ${O??""} pistettä`),[()=>o(G).payout.toFixed(2)]),D(M,b)});var k=m(A,2);{var I=M=>{var G=ii(),b=y(G),S=y(b);x(b),x(G),re(()=>F(S,`✨ ${o(Le)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),D(M,G)};Z(k,M=>{o(Le).length>0&&o(Le)[0].multiplier>1&&M(I)})}var z=m(k,2);x(v),re(()=>F(w,`${o(Ae)??""} pistettä`)),U("click",z,()=>{_(fe,!1),kt(),console.log("Win popup closed, ready for next spin")}),D(f,v)};Z(gs,f=>{o(Ae)>0&&o(fe)&&f(qa)})}var vs=m(gs,2);{var $a=f=>{var v=li(),c=m(y(v),8);x(v),U("click",c,()=>{_(nt,!1)}),D(f,v)};Z(vs,f=>{o(nt)&&f($a)})}var ms=m(vs,2);Cr(ms,f=>Et=f,()=>Et);var it=m(ms,2),bs=y(it);{var Ma=f=>{var v=ci(),c=Fe(v),w=m(y(c),2),A=y(w,!0);x(w),x(c);var k=m(c,2),I=m(y(k),2),z=y(I,!0);x(I),x(k),re(M=>{F(A,o(de)),F(z,M)},[()=>o(we).toFixed(2)]),D(f,v)};Z(bs,f=>{o(te)&&f(Ma)})}var Rt=m(bs,2),ys=m(y(Rt),2),Wa=y(ys,!0);x(ys),x(Rt);var xs=m(Rt,2),_s=m(y(xs),2),ja=y(_s,!0);x(_s),x(xs),x(it);var Pt=m(it,2),ws=m(y(Pt),2),As=y(ws),Lt=m(As,2),Na=y(Lt,!0);x(Lt);var ks=m(Lt,2),za=m(ks,2);x(ws),x(Pt);var Es=m(Pt,2),It=m(Es,2),Ot=m(y(It),2),Ss=m(y(Ot),2),Ua=y(Ss,!0);x(Ss),x(Ot);var Bt=m(Ot,2),Ts=m(y(Bt),2),Da=y(Ts,!0);x(Ts),x(Bt);var Ct=m(Bt,2),Rs=m(y(Ct),2),Ga=y(Rs,!0);x(Rs),x(Ct);var Ft=m(Ct,2),qt=m(y(Ft),2),Va=y(qt);x(qt),x(Ft);var $t=m(Ft,2),Mt=m(y($t),2),Ha=y(Mt);x(Mt),x($t);var Wt=m($t,2),Ps=m(y(Wt),2),Ya=y(Ps,!0);x(Ps),x(Wt);var jt=m(Wt,2),Ls=m(y(jt),2),Xa=y(Ls,!0);x(Ls),x(jt);var Ka=m(jt,2);x(It);var Nt=m(It,2),Qa=y(Nt);{var Ja=f=>{var v=di(),c=m(y(v),2),w=y(c);x(c);var A=m(c,2);x(v),re(()=>F(w,`${o(Re)??""} left`)),U("click",A,St),D(f,v)},Za=f=>{var v=pi(),c=Fe(v),w=m(c,2);{var A=k=>{var I=fi(),z=m(y(I),2),M=m(z,2),G=m(M,2),b=m(G,2),S=m(b,2),O=m(S,2);x(I),U("click",z,()=>Qe(10)),U("click",M,()=>Qe(100)),U("click",G,()=>Qe(1e3)),U("click",b,()=>Qe(1e4)),U("click",S,()=>Qe(1e5)),U("click",O,()=>{_(Ge,!1)}),D(k,I)};Z(w,k=>{o(Ge)&&k(A)})}U("click",c,()=>{_(Ge,!o(Ge))}),D(f,v)};Z(Qa,f=>{o(xe)?f(Ja):f(Za,!1)})}x(Nt);var Oe=m(Nt,2),er=y(Oe,!0);x(Oe);var Is=m(Oe,2);ge(Is,"style",`
    position: absolute;
    left: ${d}px;                    /* X-koordinaatti (säädettävissä) */
    top: ${h}px;                     /* Y-koordinaatti (säädettävissä) */
    width: 60px;                           /* Napin leveys */
    height: 60px;                          /* Napin korkeus */
    border-radius: 50%;                    /* Pyöreä muoto */
    background-color: rgba(0,255,0,0.2);   /* Vihreä, läpinäkyvä */
    border: 2px solid rgba(0,255,0,0.5);   /* Vihreä reunus */
    cursor: pointer;                       /* Käsi-kursori hover:ssa */
    z-index: 1000;                         /* Varmista että nappi on päällimmäisenä */
    font-size: 0;                          /* Piilota teksti */
  `),re((f,v,c,w,A,k)=>{ge(it,"style",`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.85);
  color: #ffd700;
  padding: 15px 20px;
  border-radius: 10px;
  font-family: 'Courier New', monospace;
  font-size: 18px;
  font-weight: bold;
  border: 2px solid ${(o(te)?"#ff00ff":"#ffd700")??""};
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
  z-index: 1500;
  min-width: 180px;
`),F(Wa,f),F(ja,o(Y)),F(Na,o(Y)),F(Ua,v),F(Da,c),F(Ga,w),ge(qt,"style",`color: ${A??""};`),F(Va,`${o(yt)??""}%`),ge(Mt,"style",`color: ${k??""};`),F(Ha,`${o(xt)??""}%`),F(Ya,o(_t)),F(Xa,o(wt)),ge(Oe,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(o(ye)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(o(ye)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),ge(Oe,"title",o(ye)?"Mykistä äänet":"Laita äänet päälle"),F(er,o(ye)?"🔊":"🔇")},[()=>o(ce).toLocaleString(),()=>o(Ve).toLocaleString(),()=>o(Pe).toLocaleString(),()=>o(He).toLocaleString(),()=>parseFloat(o(yt))>=95?"#00ff00":parseFloat(o(yt))>=85?"#ffff00":"#ff6666",()=>parseFloat(o(xt))>=30?"#00ff00":parseFloat(o(xt))>=20?"#ffff00":"#ff6666"]),U("click",As,Oa),U("click",ks,Ia),U("click",za,Ba),U("click",Es,()=>{_(nt,!o(nt))}),U("click",Ka,Ca),U("click",Oe,()=>{_(ye,!o(ye))}),U("click",Is,ps),D(t,us),ta()}var gi=V('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),vi=V('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function mi(t,e){Zs(e,!1);let s=Fr(e,"isAuthenticated",12,!1),a=Jt(""),r=Jt(!1);const n="slot2024";function i(){o(a)===n?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(_(r,!0),_(a,""),setTimeout(()=>_(r,!1),3e3))}ea(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),lr();var l=or(),p=Fe(l);{var u=d=>{var h=vi(),g=y(h),E=m(y(g),4),R=y(E);Yr(R),Br(2),x(E);var H=m(E,2);{var j=P=>{var $=gi();D(P,$)};Z(H,P=>{o(r)&&P(j)})}x(g),x(h),Kr(R,()=>o(a),P=>_(a,P)),U("submit",E,Qr(i)),D(d,h)};Z(p,d=>{s()||d(u)})}D(t,l),ta()}var bi=V('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),yi=V("<!> <!>",1);function Ii(t){let e=Jt(!1);var s=yi(),a=Fe(s);mi(a,{get isAuthenticated(){return o(e)},set isAuthenticated(i){_(e,i)},$$legacy:!0});var r=m(a,2);{var n=i=>{var l=bi(),p=m(Fe(l),2);hi(p,{}),D(i,l)};Z(r,i=>{o(e)&&i(n)})}D(t,s)}export{ca as A,ia as C,nn as R,en as S,da as V,Ii as _,Zr as u};
