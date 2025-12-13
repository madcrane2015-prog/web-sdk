const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./3ya5EBLs.js","./DNWEu6uq.js","./DEliLNnF.js","./DWgShhht.js","./C04N3yhf.js","./C2GHuDhf.js","./C8CgrZ10.js","./B-X8b_TI.js"])))=>i.map(i=>d[i]);
var sr=Object.defineProperty;var ar=(t,e,s)=>e in t?sr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var ae=(t,e,s)=>ar(t,typeof e!="symbol"?e+"":e,s);import{f as rr,l as nr,t as V,g as U,a as D,d as ir}from"./DRDKHArV.js";import{i as or}from"./Dw5_DM93.js";import{y as le,j as lr,a8 as cr,F as o,Q as dr,aa as fr,ab as Bs,h as Cs,e as Dt,k as Je,l as pr,ac as Qs,w as Js,ad as ur,q as Zs,a7 as hr,U as gr,a2 as Fs,aq as Gt,z as $s,ar as vr,as as mr,at as br,o as yr,au as xr,av as _r,aw as wr,ax as Ar,b as kr,ay as Er,az as Sr,a6 as Tr,aA as Rr,aB as Pr,D as Lr,L as Ir,p as ea,ah as F,ag as ta,T as x,aC as Be,f as Fe,s as v,c as b,r as y,t as re,I as qs,a as sa,aD as Or,aE as Zt}from"./DWgShhht.js";import{_ as Ms,p as ue,i as te}from"./DEliLNnF.js";import{s as $}from"./4RjN9yQL.js";import{b as Br,p as Cr}from"./B1_V_3zc.js";import{b as Ze}from"./B9q2FmKg.js";import{e as me,E as L,a as Fr,C as as,Q as pt,V as ut,N as Vt,D as ee,H as $r,p as ke,a0 as Me,a1 as Ee,a2 as qr,w as ve,a3 as tt,a4 as aa,a5 as We,a6 as ce,a7 as ht,a8 as ra,a9 as Mr,aa as Ht,ab as Wr,ac as jr,y as ct}from"./DNWEu6uq.js";import{A as Nr,B as Ws,G as zr,T as na,a as Ur,b as Yt}from"./C04N3yhf.js";function js(t,e){return e}function Dr(t,e,s,a){for(var r=[],n=e.length,i=0;i<n;i++)br(e[i].e,r,!0);var l=n>0&&r.length===0&&s!==null;if(l){var p=s.parentNode;yr(p),p.append(s),a.clear(),he(t,e[0].prev,e[n-1].next)}xr(r,()=>{for(var u=0;u<n;u++){var c=e[u];l||(a.delete(c.k),he(t,c.prev,c.next)),_r(c.e,!l)}})}function Ns(t,e,s,a,r,n=null){var i=t,l={flags:e,items:new Map,first:null};le&&lr();var p=null,u=!1,c=dr(()=>{var h=s();return hr(h)?h:h==null?[]:Zs(h)});cr(()=>{var h=o(c),g=h.length;if(u&&g===0)return;u=g===0;let k=!1;if(le){var T=i.data===fr;T!==(g===0)&&(i=Bs(),Cs(i),Dt(!1),k=!0)}if(le){for(var X=null,j,R=0;R<g;R++){if(Je.nodeType===8&&Je.data===pr){i=Je,k=!0,Dt(!1);break}var M=h[R],Q=a(M,R);j=ia(Je,l,X,null,M,Q,R,r,e,s),l.items.set(Q,j),X=j}g>0&&Cs(Bs())}le||Gr(h,l,i,r,e,a,s),n!==null&&(g===0?p?Qs(p):p=Js(()=>n(i)):p!==null&&ur(p,()=>{p=null})),k&&Dt(!0),o(c)}),le&&(i=Je)}function Gr(t,e,s,a,r,n,i){var l=t.length,p=e.items,u=e.first,c=u,h,g=null,k=[],T=[],X,j,R,M;for(M=0;M<l;M+=1){if(X=t[M],j=n(X,M),R=p.get(j),R===void 0){var Q=c?c.e.nodes_start:s;g=ia(Q,e,g,g===null?e.first:g.next,X,j,M,a,r,i),p.set(j,g),k=[],T=[],c=g.next;continue}if(Vr(R,X,M),(R.e.f&Gt)!==0&&Qs(R.e),R!==c){if(h!==void 0&&h.has(R)){if(k.length<T.length){var J=T[0],ne;g=J.prev;var st=k[0],be=k[k.length-1];for(ne=0;ne<k.length;ne+=1)zs(k[ne],J,s);for(ne=0;ne<T.length;ne+=1)h.delete(T[ne]);he(e,st.prev,be.next),he(e,g,st),he(e,be,J),c=J,g=be,M-=1,k=[],T=[]}else h.delete(R),zs(R,c,s),he(e,R.prev,R.next),he(e,R,g===null?e.first:g.next),he(e,g,R),g=R;continue}for(k=[],T=[];c!==null&&c.k!==j;)(c.e.f&Gt)===0&&(h??(h=new Set)).add(c),T.push(c),c=c.next;if(c===null)continue;R=c}k.push(R),g=R,c=R.next}if(c!==null||h!==void 0){for(var at=h===void 0?[]:Zs(h);c!==null;)(c.e.f&Gt)===0&&at.push(c),c=c.next;var N=at.length;if(N>0){var Ne=null;Dr(e,at,Ne,p)}}$s.first=e.first&&e.first.e,$s.last=g&&g.e}function Vr(t,e,s,a){mr(t.v,e),t.i=s}function ia(t,e,s,a,r,n,i,l,p,u){var c=(p&wr)!==0,h=(p&Ar)===0,g=c?h?gr(r):Fs(r):r,k=(p&vr)===0?i:Fs(i),T={i:k,v:g,k:n,a:null,e:null,prev:s,next:a};try{return T.e=Js(()=>l(t,g,k,u),le),T.e.prev=s&&s.e,T.e.next=a&&a.e,s===null?e.first=T:(s.next=T,s.e.next=T.e),a!==null&&(a.prev=T,a.e.prev=T.e),T}finally{}}function zs(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,r=e?e.e.nodes_start:s,n=t.e.nodes_start;n!==a;){var i=kr(n);r.before(n),n=i}}function he(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function Hr(t){if(le){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;ge(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var r=t.checked;ge(t,"checked",null),t.checked=r}}};t.__on_r=s,Er(s),rr()}}function ge(t,e,s,a){var r=t.__attributes??(t.__attributes={});le&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Sr]=s),s==null?t.removeAttribute(e):typeof s!="string"&&Yr(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var Us=new Map;function Yr(t){var e=Us.get(t.nodeName);if(e)return e;Us.set(t.nodeName,e=[]);for(var s,a=t,r=Element.prototype;r!==a;){s=Rr(a);for(var n in s)s[n].set&&e.push(n);a=Tr(a)}return e}function Xr(t,e,s=e){var a=Pr();nr(t,"input",r=>{var n=r?t.defaultValue:t.value;if(n=Xt(t)?Kt(n):n,s(n),a&&n!==(n=e())){var i=t.selectionStart,l=t.selectionEnd;t.value=n??"",l!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(l,t.value.length))}}),(le&&t.defaultValue!==t.value||Lr(e)==null&&t.value)&&s(Xt(t)?Kt(t.value):t.value),Ir(()=>{var r=e();Xt(t)&&r===Kt(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function Xt(t){var e=t.type;return e==="number"||e==="range"}function Kt(t){return t===""?null:+t}function Kr(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const es=[];me.handleByNamedList(L.Environment,es);async function Qr(t){if(!t)for(let e=0;e<es.length;e++){const s=es[e];if(s.value.test()){await s.value.load();return}}}let et;function Jr(){if(typeof et=="boolean")return et;try{et=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{et=!1}return et}var oa=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(oa||{});class Zr{constructor(e){this.items=[],this._name=e}emit(e,s,a,r,n,i,l,p){const{name:u,items:c}=this;for(let h=0,g=c.length;h<g;h++)c[h][u](e,s,a,r,n,i,l,p);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const en=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],la=class ca extends Fr{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...en,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Qr(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...ca.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof as&&(a={container:a},s&&(pt(ut,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const r=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=r?a.clearColor:Vt.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const r=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==r&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=oa.ALL);const{clear:a,clearColor:r,target:n}=e;Vt.shared.setValue(r??this.background.colorRgba),s.renderTarget.clear(n,a,Vt.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new Zr(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const r in this.runners)this.runners[r].add(a);return this}_addPipes(e,s){const a=s.reduce((r,n)=>(r[n.name]=n.value,r),{});e.forEach(r=>{const n=r.value,i=r.name,l=a[i];this.renderPipes[i]=new n(this,l?new l:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Jr())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};la.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let da=la,dt;function tn(t){return dt!==void 0||(dt=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??da.defaultOptions.failIfMajorPerformanceCaveat};try{if(!ee.get().getWebGLRenderingContext())return!1;let r=ee.get().createCanvas().getContext("webgl",e);const n=!!((s=r==null?void 0:r.getContextAttributes())!=null&&s.stencil);if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,n}catch{return!1}})()),dt}let ft;async function sn(t={}){return ft!==void 0||(ft=await(async()=>{const e=ee.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),ft}const Ds=["webgl","webgpu","canvas"];async function an(t){let e=[];t.preference?(e.push(t.preference),Ds.forEach(n=>{n!==t.preference&&e.push(n)})):e=Ds.slice();let s,a={};for(let n=0;n<e.length;n++){const i=e[n];if(i==="webgpu"&&await sn()){const{WebGPURenderer:l}=await Ms(async()=>{const{WebGPURenderer:p}=await import("./3ya5EBLs.js");return{WebGPURenderer:p}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=l,a={...t,...t.webgpu};break}else if(i==="webgl"&&tn(t.failIfMajorPerformanceCaveat??da.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:l}=await Ms(async()=>{const{WebGLRenderer:p}=await import("./B-X8b_TI.js");return{WebGLRenderer:p}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=l,a={...t,...t.webgl};break}else if(i==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const r=new s;return await r.init(a),r}const fa="8.8.1";class pa{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,fa)}static destroy(){}}pa.extension=L.Application;class rn{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,fa)}destroy(){this._renderer=null}}rn.extension={type:[L.WebGLSystem,L.WebGPUSystem],name:"initHook",priority:-10};const ua=class ts{constructor(...e){this.stage=new as,e[0]!==void 0&&pt(ut,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await an(e),ts._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return pt(ut,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=ts._plugins.slice(0);a.reverse(),a.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};ua._plugins=[];let ha=ua;me.handleByList(L.Application,ha._plugins);me.add(pa);class ga extends Nr{constructor(e,s){super();const{textures:a,data:r}=e;Object.keys(r.pages).forEach(n=>{const i=r.pages[parseInt(n,10)],l=a[i.id];this.pages.push({texture:l})}),Object.keys(r.chars).forEach(n=>{const i=r.chars[n],{frame:l,source:p}=a[i.page],u=new $r(i.x+l.x,i.y+l.y,i.width,i.height),c=new ke({source:p,frame:u});this.chars[n]={id:n.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:c}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){Ws.install(e)}static uninstall(e){Ws.uninstall(e)}}const Qt={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const h in e){const g=e[h].match(/^[a-z]+/gm)[0],k=e[h].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),T={};for(const X in k){const j=k[X].split("="),R=j[0],M=j[1].replace(/"/gm,""),Q=parseFloat(M),J=isNaN(Q)?M:Q;T[R]=J}s[g].push(T)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=s.info,[n]=s.common,[i]=s.distanceField??[];i&&(a.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),a.fontSize=parseInt(r.size,10),a.fontFamily=r.face,a.lineHeight=parseInt(n.lineHeight,10);const l=s.page;for(let h=0;h<l.length;h++)a.pages.push({id:parseInt(l[h].id,10)||0,file:l[h].file});const p={};a.baseLineOffset=a.lineHeight-parseInt(n.base,10);const u=s.char;for(let h=0;h<u.length;h++){const g=u[h],k=parseInt(g.id,10);let T=g.letter??g.char??String.fromCharCode(k);T==="space"&&(T=" "),p[k]=T,a.chars[T]={id:k,page:parseInt(g.page,10)||0,x:parseInt(g.x,10),y:parseInt(g.y,10),width:parseInt(g.width,10),height:parseInt(g.height,10),xOffset:parseInt(g.xoffset,10),yOffset:parseInt(g.yoffset,10),xAdvance:parseInt(g.xadvance,10),kerning:{}}}const c=s.kerning||[];for(let h=0;h<c.length;h++){const g=parseInt(c[h].first,10),k=parseInt(c[h].second,10),T=parseInt(c[h].amount,10);a.chars[p[k]].kerning[p[g]]=T}return a}},Gs={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const n=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),l=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let u=0;u<n.length;u++)e.pages.push({id:parseInt(n[u].getAttribute("id"),10)||0,file:n[u].getAttribute("file")});const p={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let u=0;u<i.length;u++){const c=i[u],h=parseInt(c.getAttribute("id"),10);let g=c.getAttribute("letter")??c.getAttribute("char")??String.fromCharCode(h);g==="space"&&(g=" "),p[h]=g,e.chars[g]={id:h,page:parseInt(c.getAttribute("page"),10)||0,x:parseInt(c.getAttribute("x"),10),y:parseInt(c.getAttribute("y"),10),width:parseInt(c.getAttribute("width"),10),height:parseInt(c.getAttribute("height"),10),xOffset:parseInt(c.getAttribute("xoffset"),10),yOffset:parseInt(c.getAttribute("yoffset"),10),xAdvance:parseInt(c.getAttribute("xadvance"),10),kerning:{}}}for(let u=0;u<l.length;u++){const c=parseInt(l[u].getAttribute("first"),10),h=parseInt(l[u].getAttribute("second"),10),g=parseInt(l[u].getAttribute("amount"),10);e.chars[p[h]].kerning[p[c]]=g}return e}},Vs={test(t){return typeof t=="string"&&t.includes("<font>")?Gs.test(ee.get().parseXML(t)):!1},parse(t){return Gs.parse(ee.get().parseXML(t))}},nn=[".xml",".fnt"],on={extension:{type:L.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof ga,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},ln={extension:{type:L.LoadParser,priority:Me.Normal},name:"loadBitmapFont",test(t){return nn.includes(Ee.extname(t).toLowerCase())},async testParse(t){return Qt.test(t)||Vs.test(t)},async parse(t,e,s){const a=Qt.test(t)?Qt.parse(t):Vs.parse(t),{src:r}=e,{pages:n}=a,i=[],l=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let h=0;h<n.length;++h){const g=n[h].file;let k=Ee.join(Ee.dirname(r),g);k=qr(k,r),i.push({src:k,data:l})}const p=await s.load(i),u=i.map(h=>p[h.src]);return new ga({data:a,textures:u},r)},async load(t,e){return await(await ee.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class cn{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const dn={extension:{type:L.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof ke),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((r,n)=>{s[a+(n===0?"":n+1)]=r})}),s}};async function va(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const fn={extension:{type:L.DetectionParser,priority:1},test:async()=>va("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},Hs=["png","jpg","jpeg"],pn={extension:{type:L.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...Hs],remove:async t=>t.filter(e=>!Hs.includes(e))},un="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function rs(t){return un?!1:document.createElement("video").canPlayType(t)!==""}const hn={extension:{type:L.DetectionParser,priority:0},test:async()=>rs("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},gn={extension:{type:L.DetectionParser,priority:0},test:async()=>rs("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},vn={extension:{type:L.DetectionParser,priority:0},test:async()=>rs("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},mn={extension:{type:L.DetectionParser,priority:0},test:async()=>va("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class bn{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var i,l;let r=null,n=null;if(s.loadParser&&(n=this._parserHash[s.loadParser],n||ve(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!n){for(let p=0;p<this.parsers.length;p++){const u=this.parsers[p];if(u.load&&((i=u.test)!=null&&i.call(u,e,s,this))){n=u;break}}if(!n)return ve(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await n.load(e,s,this),a.parser=n;for(let p=0;p<this.parsers.length;p++){const u=this.parsers[p];u.parse&&u.parse&&await((l=u.testParse)==null?void 0:l.call(u,r,s,this))&&(r=await u.parse(r,s,this)||r,a.parser=u)}return r})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const r={},n=aa(e),i=tt(e,u=>({alias:[u],src:u,data:{}})),l=i.length,p=i.map(async u=>{const c=Ee.toAbsolute(u.src);if(!r[u.src])try{this.promiseCache[c]||(this.promiseCache[c]=this._getLoadPromiseAndParser(c,u)),r[u.src]=await this.promiseCache[c].promise,s&&s(++a/l)}catch(h){throw delete this.promiseCache[c],delete r[u.src],new Error(`[Loader.load] Failed to load ${c}.
${h}`)}});return await Promise.all(p),n?r[i[0].src]:r}async unload(e){const a=tt(e,r=>({alias:[r],src:r})).map(async r=>{var l,p;const n=Ee.toAbsolute(r.src),i=this.promiseCache[n];if(i){const u=await i.promise;delete this.promiseCache[n],await((p=(l=i.parser)==null?void 0:l.unload)==null?void 0:p.call(l,u,r,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&ve(`[Assets] loadParser name conflict "${s.name}"`):ve("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function je(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const yn=".json",xn="application/json",_n={extension:{type:L.LoadParser,priority:Me.Low},name:"loadJson",test(t){return je(t,xn)||We(t,yn)},async load(t){return await(await ee.get().fetch(t)).json()}},wn=".txt",An="text/plain",kn={name:"loadTxt",extension:{type:L.LoadParser,priority:Me.Low,name:"loadTxt"},test(t){return je(t,An)||We(t,wn)},async load(t){return await(await ee.get().fetch(t)).text()}},En=["normal","bold","100","200","300","400","500","600","700","800","900"],Sn=[".ttf",".otf",".woff",".woff2"],Tn=["font/ttf","font/otf","font/woff","font/woff2"],Rn=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Pn(t){const e=Ee.extname(t),r=Ee.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(l=>l.charAt(0).toUpperCase()+l.slice(1));let n=r.length>0;for(const l of r)if(!l.match(Rn)){n=!1;break}let i=r.join(" ");return n||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const Ln=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function In(t){return Ln.test(t)?t:encodeURI(t)}const On={extension:{type:L.LoadParser,priority:Me.Low},name:"loadWebFont",test(t){return je(t,Tn)||We(t,Sn)},async load(t,e){var a,r,n;const s=ee.get().getFontFaceSet();if(s){const i=[],l=((a=e.data)==null?void 0:a.family)??Pn(t),p=((n=(r=e.data)==null?void 0:r.weights)==null?void 0:n.filter(c=>En.includes(c)))??["normal"],u=e.data??{};for(let c=0;c<p.length;c++){const h=p[c],g=new FontFace(l,`url(${In(t)})`,{...u,weight:h});await g.load(),s.add(g),i.push(g)}return ce.set(`${l}-and-url`,{url:t,fontFaces:i}),i.length===1?i[0]:i}return ve("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{ce.remove(`${e.family}-and-url`),ee.get().getFontFaceSet().delete(e)})}};function ns(t,e=1){var a;const s=(a=ht.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function is(t,e,s){t.label=s,t._sourceOrigin=s;const a=new ke({source:t,label:s}),r=()=>{delete e.promiseCache[s],ce.has(s)&&ce.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(ve("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),a.once("destroy",()=>{t.destroyed||(ve("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),a}const Bn=".svg",Cn="image/svg+xml",Fn={extension:{type:L.LoadParser,priority:Me.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return je(t,Cn)||We(t,Bn)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?qn(t):$n(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function $n(t,e,s,a){var j,R,M;const n=await(await ee.get().fetch(t)).blob(),i=URL.createObjectURL(n),l=new Image;l.src=i,l.crossOrigin=a,await l.decode(),URL.revokeObjectURL(i);const p=document.createElement("canvas"),u=p.getContext("2d"),c=((j=e.data)==null?void 0:j.resolution)||ns(t),h=((R=e.data)==null?void 0:R.width)??l.width,g=((M=e.data)==null?void 0:M.height)??l.height;p.width=h*c,p.height=g*c,u.drawImage(l,0,0,h*c,g*c);const{parseAsGraphicsContext:k,...T}=e.data??{},X=new ra({resource:p,alphaMode:"premultiply-alpha-on-upload",resolution:c,...T});return is(X,s,t)}async function qn(t){const s=await(await ee.get().fetch(t)).text(),a=new zr;return a.svg(s),a}const Mn=`(function () {
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
`;let $e=null,ss=class{constructor(){$e||($e=URL.createObjectURL(new Blob([Mn],{type:"application/javascript"}))),this.worker=new Worker($e)}};ss.revokeObjectURL=function(){$e&&(URL.revokeObjectURL($e),$e=null)};const Wn=`(function () {
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
`;let qe=null;class ma{constructor(){qe||(qe=URL.createObjectURL(new Blob([Wn],{type:"application/javascript"}))),this.worker=new Worker(qe)}}ma.revokeObjectURL=function(){qe&&(URL.revokeObjectURL(qe),qe=null)};let Ys=0,Jt;class jn{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new ss;s.addEventListener("message",a=>{s.terminate(),ss.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Jt===void 0&&(Jt=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Jt&&(this._createdWorkers++,e=new ma().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((r,n)=>{this._queue.push({id:e,arguments:s,resolve:r,reject:n})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[Ys]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:Ys++,id:a})}}const Xs=new jn,Nn=[".jpeg",".jpg",".png",".webp",".avif"],zn=["image/jpeg","image/png","image/webp","image/avif"];async function Un(t,e){var r;const s=await ee.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const ba={name:"loadTextures",extension:{type:L.LoadParser,priority:Me.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return je(t,zn)||We(t,Nn)},async load(t,e,s){var n;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Xs.isImageBitmapSupported()?a=await Xs.loadImageBitmap(t,e):a=await Un(t,e):a=await new Promise((i,l)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?i(a):(a.onload=()=>{i(a)},a.onerror=l)});const r=new ra({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((n=e.data)==null?void 0:n.resolution)||ns(t),...e.data});return is(r,s,t)},unload(t){t.destroy(!0)}},ya=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Dn=ya.map(t=>`video/${t.substring(1)}`);function Gn(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=Hn(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function Vn(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",r),t.load();function a(){n(),e()}function r(i){n(),s(i)}function n(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",r)}})}function Hn(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const Yn={name:"loadVideo",extension:{type:L.LoadParser,name:"loadVideo"},test(t){const e=je(t,Dn),s=We(t,ya);return e||s},async load(t,e,s){var p,u;const a={...Ht.defaultOptions,resolution:((p=e.data)==null?void 0:p.resolution)||ns(t),alphaMode:((u=e.data)==null?void 0:u.alphaMode)||await Mr(),...e.data},r=document.createElement("video"),n={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(n).forEach(c=>{const h=n[c];h!==void 0&&r.setAttribute(c,h)}),a.muted===!0&&(r.muted=!0),Gn(r,t,a.crossorigin);const i=document.createElement("source");let l;if(t.startsWith("data:"))l=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const c=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();l=Ht.MIME_TYPES[c]||`video/${c}`}return i.src=t,l&&(i.type=l),new Promise(c=>{const h=async()=>{const g=new Ht({...a,resource:r});r.removeEventListener("canplay",h),e.data.preload&&await Vn(r),c(is(g,s,t))};r.addEventListener("canplay",h),r.appendChild(i)})},unload(t){t.destroy(!0)}},xa={extension:{type:L.ResolveParser,name:"resolveTexture"},test:ba.test,parse:t=>{var e;return{resolution:parseFloat(((e=ht.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},Xn={extension:{type:L.ResolveParser,priority:-2,name:"resolveJson"},test:t=>ht.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:xa.parse};class Kn{constructor(){this._detections=[],this._initialized=!1,this.resolver=new ht,this.loader=new bn,this.cache=ce,this._backgroundLoader=new cn(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var n,i;if(this._initialized){ve("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let l=e.manifest;typeof l=="string"&&(l=await this.load(l)),this.resolver.addManifest(l)}const s=((n=e.texturePreference)==null?void 0:n.resolution)??1,a=typeof s=="number"?[s]:s,r=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=aa(e),r=tt(e).map(l=>{if(typeof l!="string"){const p=this.resolver.getAlias(l);return p.some(u=>!this.resolver.hasKey(u))&&this.add(l),Array.isArray(p)?p[0]:p}return this.resolver.hasKey(l)||this.add({alias:l,src:l}),l}),n=this.resolver.resolve(r),i=await this._mapLoadToResolve(n,s);return a?i[r[0]]:i}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const r=this.resolver.resolveBundle(e),n={},i=Object.keys(r);let l=0,p=0;const u=()=>{s==null||s(++l/p)},c=i.map(h=>{const g=r[h];return p+=Object.keys(g).length,this._mapLoadToResolve(g,u).then(k=>{n[h]=k})});return await Promise.all(c),a?n[e[0]]:n}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return ce.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=ce.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(a,s);this._backgroundLoader.active=!0;const n={};return a.forEach(i=>{const l=r[i.src],p=[i.src];i.alias&&p.push(...i.alias),p.forEach(u=>{n[u]=l}),ce.set(p,l)}),n}async unload(e){this._initialized||await this.init();const s=tt(e).map(r=>typeof r!="string"?r.src:r),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=tt(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(r=>this._unloadFromResolved(s[r]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{ce.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,r)=>s.indexOf(a)===r),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const Ce=new Kn;me.handleByList(L.LoadParser,Ce.loader.parsers).handleByList(L.ResolveParser,Ce.resolver.parsers).handleByList(L.CacheParser,Ce.cache.parsers).handleByList(L.DetectionParser,Ce.detections);me.add(dn,pn,fn,mn,hn,gn,vn,_n,kn,On,Fn,ba,Yn,ln,on,xa,Xn);const Ks={loader:L.LoadParser,resolver:L.ResolveParser,cache:L.CacheParser,detection:L.DetectionParser};me.handle(L.Asset,t=>{const e=t.ref;Object.entries(Ks).filter(([s])=>!!e[s]).forEach(([s,a])=>me.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(Ks).filter(s=>!!e[s]).forEach(s=>me.remove(e[s]))});class Qn extends Wr{constructor(e,s){const{text:a,resolution:r,style:n,anchor:i,width:l,height:p,roundPixels:u,...c}=e;super({...c}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=n,this.resolution=r??null,this.allowChildren=!1,this._anchor=new jr({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=u??!1,l!==void 0&&(this.width=l),p!==void 0&&(this.height=p)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,r=-s*this.anchor.x;let n=0;return e.x>=r&&e.x<=r+s&&(n=-a*this.anchor.y,e.y>=n&&e.y<=n+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function Jn(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(pt(ut,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class Zn extends Qn{constructor(...e){const s=Jn(e,"Text");super(s,na),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=Ur.measureText(this._text,this._style),{width:r,height:n}=a;e.minX=-s._x*r,e.maxX=e.minX+r,e.minY=-s._y*n,e.maxY=e.minY+n}}var ei=V('<p style="color: red;" class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Error:</strong> </p>'),ti=V('<div class="svelte-1t2q5b9"> </div>'),si=V('<details class="svelte-1t2q5b9"><summary class="svelte-1t2q5b9"> </summary> <!></details>'),ai=V(`<div style="
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
  " class="svelte-1t2q5b9"><h3 class="svelte-1t2q5b9">🎰 Oma-peli Debug</h3> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Status:</strong> </p> <!> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Base:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">BG URL:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Sample:</strong> </p> <!></div>`),ri=V('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-1t2q5b9"> </div>'),ni=V('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-1t2q5b9"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-1t2q5b9"> </span></div>'),ii=V(`<div style="
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
      " class="svelte-1t2q5b9">Jatka pelaamista</button></div>`),oi=V(`<div style="
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
      " class="svelte-1t2q5b9">Sulje</button></div>`),li=V('<div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #ff00ff; font-size: 16px; animation: pulse 1s infinite;" class="svelte-1t2q5b9"><span class="svelte-1t2q5b9">🎰 FREE SPINS:</span> <span class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-top: 1px solid #555; padding-top: 8px;" class="svelte-1t2q5b9"><span style="color: #fff; font-size: 14px;" class="svelte-1t2q5b9">Total Won:</span> <span style="color: #00ff00; font-size: 14px;" class="svelte-1t2q5b9"> </span></div>',1),ci=V(`<div style="
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
        " class="svelte-1t2q5b9">⏹ STOP</button></div>`),di=V(`<div style="
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
          " class="svelte-1t2q5b9">Cancel</button></div>`),fi=V(`<button style="
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
      " class="svelte-1t2q5b9">🔄 AUTOPLAY</button> <!>`,1),pi=V(`<!> <!> <!> <div class="svelte-1t2q5b9"></div> <div class="svelte-1t2q5b9"><!> <div style="display: flex; justify-content: space-between; margin-bottom: 8px;" class="svelte-1t2q5b9"><span style="color: #fff;" class="svelte-1t2q5b9">CREDITS:</span> <span style="color: #ffd700;" class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; border-top: 1px solid #555; padding-top: 8px;" class="svelte-1t2q5b9"><span style="color: #fff;" class="svelte-1t2q5b9">BET:</span> <span style="color: #00ff00;" class="svelte-1t2q5b9"> </span></div></div> <div style="
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
" class="svelte-1t2q5b9"><!></div> <button class="svelte-1t2q5b9"> </button> <button title="SPIN" class="svelte-1t2q5b9"></button>`,1);function ui(t,e){ea(e,!0);const s=13,a=1445,r=1e3,n=1.75,i=-30,l=-10,p=160,u=0,c=720,h=750,g=.8,k=50,T=30,X=-40,j=1,R="height",Q=Math.round(100*n),J=Math.round(Q*(700/760)),st=J+10,be=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],N=typeof window<"u"&&window.location.hostname.includes("github.io")?"/web-sdk/oma-peli/symbols":`${Ze}/symbols`,Ne={a:`${N}/Blue_hotrod.jpg`,b:`${N}/Blue_jacket.jpg`,c:`${N}/Blue_rollers.jpg`,d:`${N}/Blue_speakers.jpg`,e:`${N}/Premium_blonde.jpg`,f:`${N}/Premium_brunette.jpg`,g:`${N}/Premium_rocker.jpg`,h:`${N}/New_Wild.jpg`,i:`${N}/Red_burger.jpg`,j:`${N}/Red_fries.jpg`,k:`${N}/Red_milkshake.jpg`,l:`${N}/Scatter.jpg`,emptyslot:`${N}/Emptyslot.jpg`},gt=`${N}/bg_base.jpg`,os=`${N}/ReelFrames.png`,ls=`${N}/RockABillyReels_logo.png`,_a={spin:`${Ze}/sounds/spin.mp3`,stop:`${Ze}/sounds/stop.mp3`,win:`${Ze}/sounds/win.mp3`};let ye=F(!0),vt={},rt=null,Se=null,ze=null,Ue=null,De=F("Initializing..."),Te=F(""),se=[],de=F(1e3),K=F(10);const cs=1,mt=100;let xe=F(!1),Re=F(0),Ge=F(!1),wa=F(0),_e=!1,ie=null,bt=!1,Ve=F(0),Pe=F(0),He=F(0),yt=F(0),xt=qs(()=>o(Pe)>0?(o(He)/o(Pe)*100).toFixed(2):"0.00"),_t=qs(()=>o(Ve)>0?(o(yt)/o(Ve)*100).toFixed(2):"0.00"),oe=F(!1),fe=F(0),we=F(0),wt=F(0),At=F(0);const ds={k:.25,j:.15,i:.15,c:.08,d:.08,b:.05,a:.05,f:.04,e:.03,g:.02,l:.115,h:0,emptyslot:.165};function fs(f){if(f===6)return Math.random()<.5?"emptyslot":"h";const m=Math.random();let d=0;const _=be.filter(w=>w!=="h"),A=_.reduce((w,I)=>w+ds[I],0);for(const w of _)if(d+=ds[w]/A,m<d)return w;return"k"}function ps(){const f=[];for(let m=0;m<s;m++)f.push(fs(m));return f}function Aa(f){return f<3?{col:0,row:f}:f<6?{col:1,row:f-3}:f===6?{col:2,row:0}:f<10?{col:3,row:f-7}:{col:4,row:f-10}}function Ye(f,m){return f===0?m:f===1?3+m:f===2?6:f===3?7+m:f===4?10+m:-1}const ka={k:{3:.23,4:.76,5:3.77},j:{3:.38,4:1.51,5:7.53},i:{3:.38,4:1.51,5:7.53},c:{3:1.13,4:3.77,5:15.07},d:{3:1.13,4:3.77,5:15.07},b:{3:1.51,4:5.28,5:18.83},a:{3:1.51,4:5.28,5:18.83},f:{3:2.26,4:11.3,5:37.66},e:{3:3.77,4:15.07,5:56.49},g:{3:3.77,4:18.83,5:75.32},h:{},l:{},emptyslot:{}};function Ea(){var G,O;const f=[],m=[];for(let P=0;P<s;P++)Xe[P]==="l"&&m.push(P);m.length>=5&&(x(fe,o(fe)+10),o(oe)?console.log(`🎰 FREE SPINS RETRIGGERED! +10 FREE SPINS! Total: ${o(fe)}`):(x(oe,!0),x(we,0),Be(wt),console.log(`🎰 FREE SPINS TRIGGERED! ${m.length} scatters = 10 FREE SPINS!`)),f.push({symbol:"l",count:m.length,payout:0,positions:m,multiplier:1}));const d=[];for(let P=0;P<3;P++)for(let S=0;S<3;S++)for(let C=0;C<1;C++)for(let B=0;B<3;B++)for(let E=0;E<3;E++){const H=[Ye(0,P),Ye(1,S),Ye(2,C),Ye(3,B),Ye(4,E)];d.push(H)}console.log(`Generated ${d.length} possible paths (should be 81)`);const _=[];for(const P of d){const S=P.map(E=>Xe[E]);if(S[0]==="emptyslot"||S[0]==="l")continue;let C=null;for(let E=0;E<S.length;E++)if(S[E]!=="h"&&S[E]!=="emptyslot"&&S[E]!=="l"){C=S[E];break}if(!C)continue;let B=0;for(let E=0;E<S.length;E++){const H=S[E];if(H===C||H==="h")B++;else break}if(B>=3){const H=P[0]%3;_.push({symbol:C,length:B,path:P.slice(0,B),startRow:H})}}const A=[],w=new Map;for(const P of _){const S=`${P.symbol}-${P.path.join(",")}`;w.has(S)||w.set(S,[]),w.get(S).push(P)}for(const[P,S]of w.entries()){const C=Math.max(...S.map(E=>E.length)),B=S.find(E=>E.length===C);B&&A.push(B)}const I=[],z=new Map;for(const P of A){const S=`${P.symbol}-${P.length}`;z.has(S)||z.set(S,[]),z.get(S).push(P)}const W=1;for(const[P,S]of z.entries()){const C=S[0],B=(G=ka[C.symbol])==null?void 0:G[C.length];if(B!==void 0&&B>0){const E=new Map;console.log(`
  DEBUG ${C.length}x${C.symbol}: Processing ${S.length} wins in group`);for(const Y of S){console.log(`    Path: [${Y.path.join(", ")}]`);for(let Z=0;Z<Y.length;Z++)E.has(Z)||E.set(Z,new Set),E.get(Z).add(Y.path[Z])}console.log("    Symbol counts per reel:");for(let Y=0;Y<C.length;Y++){const Z=Array.from(E.get(Y)||[]);console.log(`      Reel ${Y}: ${Z.length} positions [${Z.join(", ")}]`)}let H=1;for(let Y=0;Y<C.length;Y++)H*=((O=E.get(Y))==null?void 0:O.size)||1;const ot=B*o(K)*W*H;console.log(`  ${C.length}x${C.symbol}: ${H} ways × ${B}x × ${o(K)} × ${W} = ${ot}`);const lt=new Set;for(const Y of S)Y.path.forEach(Z=>lt.add(Z));I.push({symbol:C.symbol,count:C.length,payout:ot,positions:Array.from(lt),multiplier:W})}}return f.push(...I),f}let Ae=F(0),Le=F(ue([])),pe=F(!1),nt=F(!1);const Sa={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function kt(f){if(!o(ye)||!vt[f])return;const m=vt[f];m.currentTime=0,m.play().catch(d=>{console.warn("Äänen toisto epäonnistui:",f,d)})}function Ta(f){Ke.forEach(m=>q.stage.removeChild(m)),Ke=[],f.forEach(m=>{m.positions.forEach(d=>{const _=Ie[d],A=new Yt().rect(0,0,Q,J).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});A.x=_.container.x,A.y=_.container.y,q.stage.addChild(A),Ke.push(A);let w=0,I=1;const z=.05;q.ticker.add(()=>{w+=I*z,w>=.4&&(I=-1),w<=0&&(I=1),A.alpha=.5+w})})})}function Et(){Ke.forEach(f=>q.stage.removeChild(f)),Ke=[]}let Xe=ps(),St,q,Ie=[],Ke=[];class Ra{constructor(m,d){ae(this,"index");ae(this,"container");ae(this,"offset",0);ae(this,"speed",0);ae(this,"targetSpeed",30);ae(this,"state","idle");ae(this,"stopDelay",0);ae(this,"bounceOffset",0);ae(this,"bounceSpeed",0);ae(this,"bounceFrames",0);this.index=m,this.container=d}start(m){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=m}update(){this.state!=="idle"&&(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"&&(this.speed*=.92,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,kt("stop"))),this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=st&&(this.offset=0,Xe[this.index]=fs(this.index))))}draw(){const m=this.container;m.removeChildren();const d=Xe[this.index];if(!d||!rt||!rt[d])return;const _=rt[d];if(!_)return;const A=this.offset+this.bounceOffset,w=new ct(_);w.width=Q,w.height=J,w.x=0,w.y=A,m.addChild(w)}}ta(async()=>{q=new ha,await q.init({width:a,height:r,background:"#001a33"}),St.appendChild(q.canvas);const f={};try{x(De,"Loading background and UI images..."),se.push(`Loading background: ${gt}`),se.push(`Loading reel frames: ${os}`),se.push(`Loading logo: ${ls}`),await Ce.load([{alias:"background",src:gt},{alias:"reelframes",src:os},{alias:"logo",src:ls}]),Se=ke.from("background"),ze=ke.from("reelframes"),Ue=ke.from("logo"),console.log("✅ Background texture created:",Se.width,"x",Se.height),console.log("✅ Reel frames texture created:",ze.width,"x",ze.height),console.log("✅ Logo texture created:",Ue.width,"x",Ue.height),se.push("✅ All UI images loaded"),x(De,"Loading symbols...");const d=[];for(const _ of be)d.push({alias:_,src:Ne[_]});await Ce.load(d);for(const _ of be){const A=Ne[_];se.push(`Loading symbol ${_}: ${A}`);try{const w=ke.from(_);f[_]=w,console.log(`✅ Symbol ${_} loaded:`,w.width,"x",w.height),se.push(`✅ Symbol ${_} loaded`)}catch(w){const I=`❌ Failed to load symbol ${_} from ${A}: ${w}`;throw se.push(I),console.error(I),new Error(I)}}rt=f,x(De,"Assets loaded successfully!")}catch(d){x(Te,`Asset loading failed: ${d}`),se.push(o(Te)),console.error(o(Te));return}console.log("Ladataan ääniefektit...");for(const[d,_]of Object.entries(_a)){const A=new Audio;A.src=_,A.preload="auto",A.volume=.7,A.load(),A.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${_} (käytetään hiljaista placeholderia)`)}),vt[d]=A}if(console.log("Taustakuva ladattu, tekstuuri:",Se),Se){const d=new ct(Se);q.renderer.width/q.renderer.height;const _=d.texture.width/d.texture.height;let A;A=q.renderer.height/d.texture.height,A*=j,d.scale.set(A),d.x=(q.renderer.width-d.width)/2,d.y=(q.renderer.height-d.height)/2+X,q.stage.addChild(d),console.log("Taustakuva lisätty:",R,"mode, size:",d.width.toFixed(0),"x",d.height.toFixed(0),"image aspect:",_.toFixed(2),"scale:",A.toFixed(2),"pos:",d.x.toFixed(0),d.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(d=>({x:d.x+i,y:d.y+l})),Ie=[];for(let d=0;d<s;d++){const _=Aa(d),A=_.col,w=_.row,I=300+A*(Q+20),z=250+w*(J+15),W=d===6?I+u:I,G=d===6?z+p:z,O=new as;O.x=W+i,O.y=G+l;const P=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],S=new Yt().rect(0,0,Q,J).fill({color:P[d],alpha:.3});S.x=O.x,S.y=O.y,q.stage.addChild(S);const C=new na({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),B=new Zn({text:d.toString(),style:C});B.x=O.x+5,B.y=O.y+5,q.stage.addChild(B);const E=new Yt().rect(0,0,Q,J).fill(16777215);E.x=O.x,E.y=O.y,O.mask=E,q.stage.addChild(E),q.stage.addChild(O),Ie.push(new Ra(d,O))}if(ze){const d=new ct(ze);d.scale.set(1),d.x=250,d.y=200,q.stage.addChild(d),console.log("Reel frames lisätty:",d.width.toFixed(0),"x",d.height.toFixed(0))}if(Ue){const d=new ct(Ue);d.scale.set(g),d.x=(q.renderer.width-d.width)/2+k,d.y=T,q.stage.addChild(d),console.log("Logo lisätty päällimmäiseen layeriin:",d.width.toFixed(0),"x",d.height.toFixed(0))}q.ticker.add(Pa)});function Pa(){for(const f of Ie)f.update(),f.draw();if(!o(pe)&&!bt&&Ie.every(f=>f.state==="stopped")){bt=!0;const f=Ea();console.log(`Checking wins, found ${f.length} wins`),f.length>0?(x(Le,ue(f)),x(Ae,ue(f.reduce((m,d)=>m+d.payout,0))),La(o(Ae)),x(pe,!0),x(wa,ue(Date.now())),console.log(`🎉 VOITTO! ${o(Ae)} pistettä! Uusi saldo: ${o(de)}`),console.log(`isShowingWin set to: ${o(pe)}, totalWin: ${o(Ae)}`),f.forEach(m=>{const d=m.multiplier?` (${m.multiplier}x multiplier)`:"";console.log(`${m.count}x ${m.symbol} = ${m.payout} pistettä${d}`)}),Ta(f),kt("win"),o(xe)&&!_e&&(_e=!0,ie=window.setTimeout(()=>{o(pe)&&o(xe)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),x(pe,!1),Et()),ie=window.setTimeout(()=>{_e=!1,Rt()},200)},1500))):(console.log("No wins found this spin"),o(xe)&&!_e&&(_e=!0,ie=window.setTimeout(()=>{_e=!1,Rt()},1e3))),o(oe)&&o(fe)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${o(we)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${o(we).toFixed(2)}`),x(oe,!1),x(we,0)},2e3))}}function us(){if(o(oe)&&o(fe)>0)Be(fe,-1),Be(At),console.log(`🎰 FREE SPIN! Remaining: ${o(fe)}`);else if(!o(oe)){if(o(de)<o(K)){alert(`Not enough credits! Balance: ${o(de)}, Bet: ${o(K)}`),Tt();return}x(de,o(de)-o(K)),Be(Ve),x(Pe,o(Pe)+o(K))}ie!==null&&(clearTimeout(ie),ie=null),x(Le,ue([])),x(Ae,0),x(pe,!1),bt=!1,Et(),Xe=ps(),Ie.forEach((f,m)=>f.start(60+m*10)),kt("spin")}function La(f){x(de,o(de)+f),x(He,o(He)+f),o(oe)&&x(we,o(we)+f),f>0&&Be(yt)}function Ia(){o(K)<mt&&x(K,ue(Math.min(o(K)+1,mt)))}function Oa(){o(K)>cs&&x(K,ue(Math.max(o(K)-1,cs)))}function Ba(){x(K,mt)}function Qe(f){x(xe,!0),x(Re,ue(f)),x(Ge,!1),Rt()}function Tt(){x(xe,!1),x(Re,0),_e=!1,ie!==null&&(clearTimeout(ie),ie=null)}function Rt(){if(!o(xe)||o(Re)<=0){Tt();return}console.log(`Autoplay: Starting spin ${o(Re)} rounds left`),us(),Be(Re,-1)}function Ca(){confirm("Reset all statistics?")&&(x(Ve,0),x(Pe,0),x(He,0),x(yt,0),x(wt,0),x(At,0))}var hs=pi(),gs=Fe(hs);{var Fa=f=>{var m=ai(),d=v(b(m),2),_=v(b(d));y(d);var A=v(d,2);{var w=B=>{var E=ei(),H=v(b(E));y(E),re(()=>$(H,` ${o(Te)??""}`)),D(B,E)};te(A,B=>{o(Te)&&B(w)})}var I=v(A,2),z=v(b(I));z.nodeValue=` ${Ze??""}`,y(I);var W=v(I,2),G=v(b(W));G.nodeValue=` ${gt??""}`,y(W);var O=v(W,2),P=v(b(O));y(O);var S=v(O,2);{var C=B=>{var E=si(),H=b(E),ot=b(H);y(H);var lt=v(H,2);Ns(lt,17,()=>se,js,(Y,Z)=>{var Ut=ti(),tr=b(Ut,!0);y(Ut),re(()=>$(tr,o(Z))),D(Y,Ut)}),y(E),re(()=>$(ot,`Log (${se.length??""})`)),D(B,E)};te(S,B=>{se.length>0&&B(C)})}y(m),re(()=>{$(_,` ${o(De)??""}`),$(P,` ${Ne.a??""}`)}),D(f,m)};te(gs,f=>{(o(De)!=="Assets loaded successfully!"||o(Te))&&f(Fa)})}var vs=v(gs,2);{var $a=f=>{var m=ii(),d=v(b(m),2),_=b(d);y(d);var A=v(d,2);Ns(A,17,()=>o(Le),js,(W,G)=>{var O=ri(),P=b(O);y(O),re(S=>$(P,`${o(G).count??""} × ${Sa[o(G).symbol]??""} = ${S??""} pistettä`),[()=>o(G).payout.toFixed(2)]),D(W,O)});var w=v(A,2);{var I=W=>{var G=ni(),O=b(G),P=b(O);y(O),y(G),re(()=>$(P,`✨ ${o(Le)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),D(W,G)};te(w,W=>{o(Le).length>0&&o(Le)[0].multiplier>1&&W(I)})}var z=v(w,2);y(m),re(()=>$(_,`${o(Ae)??""} pistettä`)),U("click",z,()=>{x(pe,!1),Et(),console.log("Win popup closed, ready for next spin")}),D(f,m)};te(vs,f=>{o(Ae)>0&&o(pe)&&f($a)})}var ms=v(vs,2);{var qa=f=>{var m=oi(),d=v(b(m),8);y(m),U("click",d,()=>{x(nt,!1)}),D(f,m)};te(ms,f=>{o(nt)&&f(qa)})}var bs=v(ms,2);Br(bs,f=>St=f,()=>St);var it=v(bs,2),ys=b(it);{var Ma=f=>{var m=li(),d=Fe(m),_=v(b(d),2),A=b(_,!0);y(_),y(d);var w=v(d,2),I=v(b(w),2),z=b(I,!0);y(I),y(w),re(W=>{$(A,o(fe)),$(z,W)},[()=>o(we).toFixed(2)]),D(f,m)};te(ys,f=>{o(oe)&&f(Ma)})}var Pt=v(ys,2),xs=v(b(Pt),2),Wa=b(xs,!0);y(xs),y(Pt);var _s=v(Pt,2),ws=v(b(_s),2),ja=b(ws,!0);y(ws),y(_s),y(it);var Lt=v(it,2),As=v(b(Lt),2),ks=b(As),It=v(ks,2),Na=b(It,!0);y(It);var Es=v(It,2),za=v(Es,2);y(As),y(Lt);var Ss=v(Lt,2),Ot=v(Ss,2),Bt=v(b(Ot),2),Ts=v(b(Bt),2),Ua=b(Ts,!0);y(Ts),y(Bt);var Ct=v(Bt,2),Rs=v(b(Ct),2),Da=b(Rs,!0);y(Rs),y(Ct);var Ft=v(Ct,2),Ps=v(b(Ft),2),Ga=b(Ps,!0);y(Ps),y(Ft);var $t=v(Ft,2),qt=v(b($t),2),Va=b(qt);y(qt),y($t);var Mt=v($t,2),Wt=v(b(Mt),2),Ha=b(Wt);y(Wt),y(Mt);var jt=v(Mt,2),Ls=v(b(jt),2),Ya=b(Ls,!0);y(Ls),y(jt);var Nt=v(jt,2),Is=v(b(Nt),2),Xa=b(Is,!0);y(Is),y(Nt);var Ka=v(Nt,2);y(Ot);var zt=v(Ot,2),Qa=b(zt);{var Ja=f=>{var m=ci(),d=v(b(m),2),_=b(d);y(d);var A=v(d,2);y(m),re(()=>$(_,`${o(Re)??""} left`)),U("click",A,Tt),D(f,m)},Za=f=>{var m=fi(),d=Fe(m),_=v(d,2);{var A=w=>{var I=di(),z=v(b(I),2),W=v(z,2),G=v(W,2),O=v(G,2),P=v(O,2),S=v(P,2);y(I),U("click",z,()=>Qe(10)),U("click",W,()=>Qe(100)),U("click",G,()=>Qe(1e3)),U("click",O,()=>Qe(1e4)),U("click",P,()=>Qe(1e5)),U("click",S,()=>{x(Ge,!1)}),D(w,I)};te(_,w=>{o(Ge)&&w(A)})}U("click",d,()=>{x(Ge,!o(Ge))}),D(f,m)};te(Qa,f=>{o(xe)?f(Ja):f(Za,!1)})}y(zt);var Oe=v(zt,2),er=b(Oe,!0);y(Oe);var Os=v(Oe,2);ge(Os,"style",`
    position: absolute;
    left: ${c}px;                    /* X-koordinaatti (säädettävissä) */
    top: ${h}px;                     /* Y-koordinaatti (säädettävissä) */
    width: 60px;                           /* Napin leveys */
    height: 60px;                          /* Napin korkeus */
    border-radius: 50%;                    /* Pyöreä muoto */
    background-color: rgba(0,255,0,0.2);   /* Vihreä, läpinäkyvä */
    border: 2px solid rgba(0,255,0,0.5);   /* Vihreä reunus */
    cursor: pointer;                       /* Käsi-kursori hover:ssa */
    z-index: 1000;                         /* Varmista että nappi on päällimmäisenä */
    font-size: 0;                          /* Piilota teksti */
  `),re((f,m,d,_,A,w)=>{ge(it,"style",`
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
  border: 2px solid ${(o(oe)?"#ff00ff":"#ffd700")??""};
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
  z-index: 1500;
  min-width: 180px;
`),$(Wa,f),$(ja,o(K)),$(Na,o(K)),$(Ua,m),$(Da,d),$(Ga,_),ge(qt,"style",`color: ${A??""};`),$(Va,`${o(xt)??""}%`),ge(Wt,"style",`color: ${w??""};`),$(Ha,`${o(_t)??""}%`),$(Ya,o(wt)),$(Xa,o(At)),ge(Oe,"style",`
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
  `),ge(Oe,"title",o(ye)?"Mykistä äänet":"Laita äänet päälle"),$(er,o(ye)?"🔊":"🔇")},[()=>o(de).toLocaleString(),()=>o(Ve).toLocaleString(),()=>o(Pe).toLocaleString(),()=>o(He).toLocaleString(),()=>parseFloat(o(xt))>=95?"#00ff00":parseFloat(o(xt))>=85?"#ffff00":"#ff6666",()=>parseFloat(o(_t))>=30?"#00ff00":parseFloat(o(_t))>=20?"#ffff00":"#ff6666"]),U("click",ks,Oa),U("click",Es,Ia),U("click",za,Ba),U("click",Ss,()=>{x(nt,!o(nt))}),U("click",Ka,Ca),U("click",Oe,()=>{x(ye,!o(ye))}),U("click",Os,us),D(t,hs),sa()}var hi=V('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),gi=V('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function vi(t,e){ea(e,!1);let s=Cr(e,"isAuthenticated",12,!1),a=Zt(""),r=Zt(!1);const n="slot2024";function i(){o(a)===n?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(x(r,!0),x(a,""),setTimeout(()=>x(r,!1),3e3))}ta(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),or();var l=ir(),p=Fe(l);{var u=c=>{var h=gi(),g=b(h),k=v(b(g),4),T=b(k);Hr(T),Or(2),y(k);var X=v(k,2);{var j=R=>{var M=hi();D(R,M)};te(X,R=>{o(r)&&R(j)})}y(g),y(h),Xr(T,()=>o(a),R=>x(a,R)),U("submit",k,Kr(i)),D(c,h)};te(p,c=>{s()||c(u)})}D(t,l),sa()}var mi=V('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),bi=V("<!> <!>",1);function Li(t){let e=Zt(!1);var s=bi(),a=Fe(s);vi(a,{get isAuthenticated(){return o(e)},set isAuthenticated(i){x(e,i)},$$legacy:!0});var r=v(a,2);{var n=i=>{var l=mi(),p=v(Fe(l),2);ui(p,{}),D(i,l)};te(r,i=>{o(e)&&i(n)})}D(t,s)}export{da as A,oa as C,rn as R,Zr as S,fa as V,Li as _,Jr as u};
