const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Wu5bS_jO.js","./DNWEu6uq.js","./DEliLNnF.js","./DWgShhht.js","./C04N3yhf.js","./C2GHuDhf.js","./Cqsa2JUD.js","./B3zAVL46.js"])))=>i.map(i=>d[i]);
var ar=Object.defineProperty;var rr=(t,e,s)=>e in t?ar(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var re=(t,e,s)=>rr(t,typeof e!="symbol"?e+"":e,s);import{f as nr,l as ir,t as V,g as D,a as G,d as or}from"./DRDKHArV.js";import{i as lr}from"./Dw5_DM93.js";import{y as ce,j as cr,a8 as dr,F as o,Q as fr,aa as pr,ab as Cs,h as Fs,e as Dt,k as Je,l as ur,ac as Js,w as Zs,ad as hr,q as ea,a7 as gr,U as vr,a2 as $s,aq as Gt,z as qs,ar as mr,as as br,at as xr,o as yr,au as _r,av as wr,aw as Ar,ax as kr,b as Er,ay as Sr,az as Tr,a6 as Rr,aA as Pr,aB as Lr,D as Ir,L as Or,p as ta,ah as F,ag as sa,T as w,aC as Ce,f as $e,s as m,c as x,r as y,t as ne,I as Ms,a as aa,aD as Br,aE as Zt}from"./DWgShhht.js";import{_ as Ws,p as he,i as se}from"./DEliLNnF.js";import{s as $}from"./4RjN9yQL.js";import{b as Cr,p as Fr}from"./B1_V_3zc.js";import{b as Ze}from"./Xrb4gdNM.js";import{e as be,E as L,a as $r,C as as,Q as ut,V as ht,N as Ht,D as te,H as qr,p as Ee,a0 as We,a1 as Se,a2 as Mr,w as me,a3 as tt,a4 as ra,a5 as je,a6 as de,a7 as gt,a8 as na,a9 as Wr,aa as Vt,ab as jr,ac as Nr,y as dt}from"./DNWEu6uq.js";import{A as zr,B as js,G as Ur,T as ia,a as Dr,b as Yt}from"./C04N3yhf.js";function Ns(t,e){return e}function Gr(t,e,s,a){for(var r=[],n=e.length,i=0;i<n;i++)xr(e[i].e,r,!0);var l=n>0&&r.length===0&&s!==null;if(l){var p=s.parentNode;yr(p),p.append(s),a.clear(),ge(t,e[0].prev,e[n-1].next)}_r(r,()=>{for(var u=0;u<n;u++){var c=e[u];l||(a.delete(c.k),ge(t,c.prev,c.next)),wr(c.e,!l)}})}function zs(t,e,s,a,r,n=null){var i=t,l={flags:e,items:new Map,first:null};ce&&cr();var p=null,u=!1,c=fr(()=>{var h=s();return gr(h)?h:h==null?[]:ea(h)});dr(()=>{var h=o(c),g=h.length;if(u&&g===0)return;u=g===0;let k=!1;if(ce){var T=i.data===pr;T!==(g===0)&&(i=Cs(),Fs(i),Dt(!1),k=!0)}if(ce){for(var K=null,j,R=0;R<g;R++){if(Je.nodeType===8&&Je.data===ur){i=Je,k=!0,Dt(!1);break}var M=h[R],J=a(M,R);j=oa(Je,l,K,null,M,J,R,r,e,s),l.items.set(J,j),K=j}g>0&&Fs(Cs())}ce||Hr(h,l,i,r,e,a,s),n!==null&&(g===0?p?Js(p):p=Zs(()=>n(i)):p!==null&&hr(p,()=>{p=null})),k&&Dt(!0),o(c)}),ce&&(i=Je)}function Hr(t,e,s,a,r,n,i){var l=t.length,p=e.items,u=e.first,c=u,h,g=null,k=[],T=[],K,j,R,M;for(M=0;M<l;M+=1){if(K=t[M],j=n(K,M),R=p.get(j),R===void 0){var J=c?c.e.nodes_start:s;g=oa(J,e,g,g===null?e.first:g.next,K,j,M,a,r,i),p.set(j,g),k=[],T=[],c=g.next;continue}if(Vr(R,K,M),(R.e.f&Gt)!==0&&Js(R.e),R!==c){if(h!==void 0&&h.has(R)){if(k.length<T.length){var Z=T[0],ie;g=Z.prev;var st=k[0],xe=k[k.length-1];for(ie=0;ie<k.length;ie+=1)Us(k[ie],Z,s);for(ie=0;ie<T.length;ie+=1)h.delete(T[ie]);ge(e,st.prev,xe.next),ge(e,g,st),ge(e,xe,Z),c=Z,g=xe,M-=1,k=[],T=[]}else h.delete(R),Us(R,c,s),ge(e,R.prev,R.next),ge(e,R,g===null?e.first:g.next),ge(e,g,R),g=R;continue}for(k=[],T=[];c!==null&&c.k!==j;)(c.e.f&Gt)===0&&(h??(h=new Set)).add(c),T.push(c),c=c.next;if(c===null)continue;R=c}k.push(R),g=R,c=R.next}if(c!==null||h!==void 0){for(var at=h===void 0?[]:ea(h);c!==null;)(c.e.f&Gt)===0&&at.push(c),c=c.next;var z=at.length;if(z>0){var ze=null;Gr(e,at,ze,p)}}qs.first=e.first&&e.first.e,qs.last=g&&g.e}function Vr(t,e,s,a){br(t.v,e),t.i=s}function oa(t,e,s,a,r,n,i,l,p,u){var c=(p&Ar)!==0,h=(p&kr)===0,g=c?h?vr(r):$s(r):r,k=(p&mr)===0?i:$s(i),T={i:k,v:g,k:n,a:null,e:null,prev:s,next:a};try{return T.e=Zs(()=>l(t,g,k,u),ce),T.e.prev=s&&s.e,T.e.next=a&&a.e,s===null?e.first=T:(s.next=T,s.e.next=T.e),a!==null&&(a.prev=T,a.e.prev=T.e),T}finally{}}function Us(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,r=e?e.e.nodes_start:s,n=t.e.nodes_start;n!==a;){var i=Er(n);r.before(n),n=i}}function ge(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function Yr(t){if(ce){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;ve(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var r=t.checked;ve(t,"checked",null),t.checked=r}}};t.__on_r=s,Sr(s),nr()}}function ve(t,e,s,a){var r=t.__attributes??(t.__attributes={});ce&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Tr]=s),s==null?t.removeAttribute(e):typeof s!="string"&&Xr(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var Ds=new Map;function Xr(t){var e=Ds.get(t.nodeName);if(e)return e;Ds.set(t.nodeName,e=[]);for(var s,a=t,r=Element.prototype;r!==a;){s=Pr(a);for(var n in s)s[n].set&&e.push(n);a=Rr(a)}return e}function Kr(t,e,s=e){var a=Lr();ir(t,"input",r=>{var n=r?t.defaultValue:t.value;if(n=Xt(t)?Kt(n):n,s(n),a&&n!==(n=e())){var i=t.selectionStart,l=t.selectionEnd;t.value=n??"",l!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(l,t.value.length))}}),(ce&&t.defaultValue!==t.value||Ir(e)==null&&t.value)&&s(Xt(t)?Kt(t.value):t.value),Or(()=>{var r=e();Xt(t)&&r===Kt(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function Xt(t){var e=t.type;return e==="number"||e==="range"}function Kt(t){return t===""?null:+t}function Qr(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const es=[];be.handleByNamedList(L.Environment,es);async function Jr(t){if(!t)for(let e=0;e<es.length;e++){const s=es[e];if(s.value.test()){await s.value.load();return}}}let et;function Zr(){if(typeof et=="boolean")return et;try{et=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{et=!1}return et}var la=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(la||{});class en{constructor(e){this.items=[],this._name=e}emit(e,s,a,r,n,i,l,p){const{name:u,items:c}=this;for(let h=0,g=c.length;h<g;h++)c[h][u](e,s,a,r,n,i,l,p);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const tn=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],ca=class da extends $r{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...tn,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Jr(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...da.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof as&&(a={container:a},s&&(ut(ht,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const r=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=r?a.clearColor:Ht.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const r=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==r&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=la.ALL);const{clear:a,clearColor:r,target:n}=e;Ht.shared.setValue(r??this.background.colorRgba),s.renderTarget.clear(n,a,Ht.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new en(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const r in this.runners)this.runners[r].add(a);return this}_addPipes(e,s){const a=s.reduce((r,n)=>(r[n.name]=n.value,r),{});e.forEach(r=>{const n=r.value,i=r.name,l=a[i];this.renderPipes[i]=new n(this,l?new l:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Zr())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};ca.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let fa=ca,ft;function sn(t){return ft!==void 0||(ft=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??fa.defaultOptions.failIfMajorPerformanceCaveat};try{if(!te.get().getWebGLRenderingContext())return!1;let r=te.get().createCanvas().getContext("webgl",e);const n=!!((s=r==null?void 0:r.getContextAttributes())!=null&&s.stencil);if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,n}catch{return!1}})()),ft}let pt;async function an(t={}){return pt!==void 0||(pt=await(async()=>{const e=te.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),pt}const Gs=["webgl","webgpu","canvas"];async function rn(t){let e=[];t.preference?(e.push(t.preference),Gs.forEach(n=>{n!==t.preference&&e.push(n)})):e=Gs.slice();let s,a={};for(let n=0;n<e.length;n++){const i=e[n];if(i==="webgpu"&&await an()){const{WebGPURenderer:l}=await Ws(async()=>{const{WebGPURenderer:p}=await import("./Wu5bS_jO.js");return{WebGPURenderer:p}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=l,a={...t,...t.webgpu};break}else if(i==="webgl"&&sn(t.failIfMajorPerformanceCaveat??fa.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:l}=await Ws(async()=>{const{WebGLRenderer:p}=await import("./B3zAVL46.js");return{WebGLRenderer:p}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=l,a={...t,...t.webgl};break}else if(i==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const r=new s;return await r.init(a),r}const pa="8.8.1";class ua{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,pa)}static destroy(){}}ua.extension=L.Application;class nn{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,pa)}destroy(){this._renderer=null}}nn.extension={type:[L.WebGLSystem,L.WebGPUSystem],name:"initHook",priority:-10};const ha=class ts{constructor(...e){this.stage=new as,e[0]!==void 0&&ut(ht,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await rn(e),ts._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return ut(ht,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=ts._plugins.slice(0);a.reverse(),a.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};ha._plugins=[];let ga=ha;be.handleByList(L.Application,ga._plugins);be.add(ua);class va extends zr{constructor(e,s){super();const{textures:a,data:r}=e;Object.keys(r.pages).forEach(n=>{const i=r.pages[parseInt(n,10)],l=a[i.id];this.pages.push({texture:l})}),Object.keys(r.chars).forEach(n=>{const i=r.chars[n],{frame:l,source:p}=a[i.page],u=new qr(i.x+l.x,i.y+l.y,i.width,i.height),c=new Ee({source:p,frame:u});this.chars[n]={id:n.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:c}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){js.install(e)}static uninstall(e){js.uninstall(e)}}const Qt={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const h in e){const g=e[h].match(/^[a-z]+/gm)[0],k=e[h].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),T={};for(const K in k){const j=k[K].split("="),R=j[0],M=j[1].replace(/"/gm,""),J=parseFloat(M),Z=isNaN(J)?M:J;T[R]=Z}s[g].push(T)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=s.info,[n]=s.common,[i]=s.distanceField??[];i&&(a.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),a.fontSize=parseInt(r.size,10),a.fontFamily=r.face,a.lineHeight=parseInt(n.lineHeight,10);const l=s.page;for(let h=0;h<l.length;h++)a.pages.push({id:parseInt(l[h].id,10)||0,file:l[h].file});const p={};a.baseLineOffset=a.lineHeight-parseInt(n.base,10);const u=s.char;for(let h=0;h<u.length;h++){const g=u[h],k=parseInt(g.id,10);let T=g.letter??g.char??String.fromCharCode(k);T==="space"&&(T=" "),p[k]=T,a.chars[T]={id:k,page:parseInt(g.page,10)||0,x:parseInt(g.x,10),y:parseInt(g.y,10),width:parseInt(g.width,10),height:parseInt(g.height,10),xOffset:parseInt(g.xoffset,10),yOffset:parseInt(g.yoffset,10),xAdvance:parseInt(g.xadvance,10),kerning:{}}}const c=s.kerning||[];for(let h=0;h<c.length;h++){const g=parseInt(c[h].first,10),k=parseInt(c[h].second,10),T=parseInt(c[h].amount,10);a.chars[p[k]].kerning[p[g]]=T}return a}},Hs={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const n=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),l=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let u=0;u<n.length;u++)e.pages.push({id:parseInt(n[u].getAttribute("id"),10)||0,file:n[u].getAttribute("file")});const p={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let u=0;u<i.length;u++){const c=i[u],h=parseInt(c.getAttribute("id"),10);let g=c.getAttribute("letter")??c.getAttribute("char")??String.fromCharCode(h);g==="space"&&(g=" "),p[h]=g,e.chars[g]={id:h,page:parseInt(c.getAttribute("page"),10)||0,x:parseInt(c.getAttribute("x"),10),y:parseInt(c.getAttribute("y"),10),width:parseInt(c.getAttribute("width"),10),height:parseInt(c.getAttribute("height"),10),xOffset:parseInt(c.getAttribute("xoffset"),10),yOffset:parseInt(c.getAttribute("yoffset"),10),xAdvance:parseInt(c.getAttribute("xadvance"),10),kerning:{}}}for(let u=0;u<l.length;u++){const c=parseInt(l[u].getAttribute("first"),10),h=parseInt(l[u].getAttribute("second"),10),g=parseInt(l[u].getAttribute("amount"),10);e.chars[p[h]].kerning[p[c]]=g}return e}},Vs={test(t){return typeof t=="string"&&t.includes("<font>")?Hs.test(te.get().parseXML(t)):!1},parse(t){return Hs.parse(te.get().parseXML(t))}},on=[".xml",".fnt"],ln={extension:{type:L.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof va,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},cn={extension:{type:L.LoadParser,priority:We.Normal},name:"loadBitmapFont",test(t){return on.includes(Se.extname(t).toLowerCase())},async testParse(t){return Qt.test(t)||Vs.test(t)},async parse(t,e,s){const a=Qt.test(t)?Qt.parse(t):Vs.parse(t),{src:r}=e,{pages:n}=a,i=[],l=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let h=0;h<n.length;++h){const g=n[h].file;let k=Se.join(Se.dirname(r),g);k=Mr(k,r),i.push({src:k,data:l})}const p=await s.load(i),u=i.map(h=>p[h.src]);return new va({data:a,textures:u},r)},async load(t,e){return await(await te.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class dn{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const fn={extension:{type:L.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Ee),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((r,n)=>{s[a+(n===0?"":n+1)]=r})}),s}};async function ma(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const pn={extension:{type:L.DetectionParser,priority:1},test:async()=>ma("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},Ys=["png","jpg","jpeg"],un={extension:{type:L.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...Ys],remove:async t=>t.filter(e=>!Ys.includes(e))},hn="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function rs(t){return hn?!1:document.createElement("video").canPlayType(t)!==""}const gn={extension:{type:L.DetectionParser,priority:0},test:async()=>rs("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},vn={extension:{type:L.DetectionParser,priority:0},test:async()=>rs("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},mn={extension:{type:L.DetectionParser,priority:0},test:async()=>rs("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},bn={extension:{type:L.DetectionParser,priority:0},test:async()=>ma("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class xn{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var i,l;let r=null,n=null;if(s.loadParser&&(n=this._parserHash[s.loadParser],n||me(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!n){for(let p=0;p<this.parsers.length;p++){const u=this.parsers[p];if(u.load&&((i=u.test)!=null&&i.call(u,e,s,this))){n=u;break}}if(!n)return me(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await n.load(e,s,this),a.parser=n;for(let p=0;p<this.parsers.length;p++){const u=this.parsers[p];u.parse&&u.parse&&await((l=u.testParse)==null?void 0:l.call(u,r,s,this))&&(r=await u.parse(r,s,this)||r,a.parser=u)}return r})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const r={},n=ra(e),i=tt(e,u=>({alias:[u],src:u,data:{}})),l=i.length,p=i.map(async u=>{const c=Se.toAbsolute(u.src);if(!r[u.src])try{this.promiseCache[c]||(this.promiseCache[c]=this._getLoadPromiseAndParser(c,u)),r[u.src]=await this.promiseCache[c].promise,s&&s(++a/l)}catch(h){throw delete this.promiseCache[c],delete r[u.src],new Error(`[Loader.load] Failed to load ${c}.
${h}`)}});return await Promise.all(p),n?r[i[0].src]:r}async unload(e){const a=tt(e,r=>({alias:[r],src:r})).map(async r=>{var l,p;const n=Se.toAbsolute(r.src),i=this.promiseCache[n];if(i){const u=await i.promise;delete this.promiseCache[n],await((p=(l=i.parser)==null?void 0:l.unload)==null?void 0:p.call(l,u,r,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&me(`[Assets] loadParser name conflict "${s.name}"`):me("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function Ne(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const yn=".json",_n="application/json",wn={extension:{type:L.LoadParser,priority:We.Low},name:"loadJson",test(t){return Ne(t,_n)||je(t,yn)},async load(t){return await(await te.get().fetch(t)).json()}},An=".txt",kn="text/plain",En={name:"loadTxt",extension:{type:L.LoadParser,priority:We.Low,name:"loadTxt"},test(t){return Ne(t,kn)||je(t,An)},async load(t){return await(await te.get().fetch(t)).text()}},Sn=["normal","bold","100","200","300","400","500","600","700","800","900"],Tn=[".ttf",".otf",".woff",".woff2"],Rn=["font/ttf","font/otf","font/woff","font/woff2"],Pn=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Ln(t){const e=Se.extname(t),r=Se.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(l=>l.charAt(0).toUpperCase()+l.slice(1));let n=r.length>0;for(const l of r)if(!l.match(Pn)){n=!1;break}let i=r.join(" ");return n||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const In=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function On(t){return In.test(t)?t:encodeURI(t)}const Bn={extension:{type:L.LoadParser,priority:We.Low},name:"loadWebFont",test(t){return Ne(t,Rn)||je(t,Tn)},async load(t,e){var a,r,n;const s=te.get().getFontFaceSet();if(s){const i=[],l=((a=e.data)==null?void 0:a.family)??Ln(t),p=((n=(r=e.data)==null?void 0:r.weights)==null?void 0:n.filter(c=>Sn.includes(c)))??["normal"],u=e.data??{};for(let c=0;c<p.length;c++){const h=p[c],g=new FontFace(l,`url(${On(t)})`,{...u,weight:h});await g.load(),s.add(g),i.push(g)}return de.set(`${l}-and-url`,{url:t,fontFaces:i}),i.length===1?i[0]:i}return me("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{de.remove(`${e.family}-and-url`),te.get().getFontFaceSet().delete(e)})}};function ns(t,e=1){var a;const s=(a=gt.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function is(t,e,s){t.label=s,t._sourceOrigin=s;const a=new Ee({source:t,label:s}),r=()=>{delete e.promiseCache[s],de.has(s)&&de.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(me("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),a.once("destroy",()=>{t.destroyed||(me("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),a}const Cn=".svg",Fn="image/svg+xml",$n={extension:{type:L.LoadParser,priority:We.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return Ne(t,Fn)||je(t,Cn)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?Mn(t):qn(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function qn(t,e,s,a){var j,R,M;const n=await(await te.get().fetch(t)).blob(),i=URL.createObjectURL(n),l=new Image;l.src=i,l.crossOrigin=a,await l.decode(),URL.revokeObjectURL(i);const p=document.createElement("canvas"),u=p.getContext("2d"),c=((j=e.data)==null?void 0:j.resolution)||ns(t),h=((R=e.data)==null?void 0:R.width)??l.width,g=((M=e.data)==null?void 0:M.height)??l.height;p.width=h*c,p.height=g*c,u.drawImage(l,0,0,h*c,g*c);const{parseAsGraphicsContext:k,...T}=e.data??{},K=new na({resource:p,alphaMode:"premultiply-alpha-on-upload",resolution:c,...T});return is(K,s,t)}async function Mn(t){const s=await(await te.get().fetch(t)).text(),a=new Ur;return a.svg(s),a}const Wn=`(function () {
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
`;let qe=null,ss=class{constructor(){qe||(qe=URL.createObjectURL(new Blob([Wn],{type:"application/javascript"}))),this.worker=new Worker(qe)}};ss.revokeObjectURL=function(){qe&&(URL.revokeObjectURL(qe),qe=null)};const jn=`(function () {
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
`;let Me=null;class ba{constructor(){Me||(Me=URL.createObjectURL(new Blob([jn],{type:"application/javascript"}))),this.worker=new Worker(Me)}}ba.revokeObjectURL=function(){Me&&(URL.revokeObjectURL(Me),Me=null)};let Xs=0,Jt;class Nn{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new ss;s.addEventListener("message",a=>{s.terminate(),ss.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Jt===void 0&&(Jt=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Jt&&(this._createdWorkers++,e=new ba().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((r,n)=>{this._queue.push({id:e,arguments:s,resolve:r,reject:n})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[Xs]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:Xs++,id:a})}}const Ks=new Nn,zn=[".jpeg",".jpg",".png",".webp",".avif"],Un=["image/jpeg","image/png","image/webp","image/avif"];async function Dn(t,e){var r;const s=await te.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const xa={name:"loadTextures",extension:{type:L.LoadParser,priority:We.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return Ne(t,Un)||je(t,zn)},async load(t,e,s){var n;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Ks.isImageBitmapSupported()?a=await Ks.loadImageBitmap(t,e):a=await Dn(t,e):a=await new Promise((i,l)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?i(a):(a.onload=()=>{i(a)},a.onerror=l)});const r=new na({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((n=e.data)==null?void 0:n.resolution)||ns(t),...e.data});return is(r,s,t)},unload(t){t.destroy(!0)}},ya=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Gn=ya.map(t=>`video/${t.substring(1)}`);function Hn(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=Yn(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function Vn(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",r),t.load();function a(){n(),e()}function r(i){n(),s(i)}function n(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",r)}})}function Yn(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const Xn={name:"loadVideo",extension:{type:L.LoadParser,name:"loadVideo"},test(t){const e=Ne(t,Gn),s=je(t,ya);return e||s},async load(t,e,s){var p,u;const a={...Vt.defaultOptions,resolution:((p=e.data)==null?void 0:p.resolution)||ns(t),alphaMode:((u=e.data)==null?void 0:u.alphaMode)||await Wr(),...e.data},r=document.createElement("video"),n={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(n).forEach(c=>{const h=n[c];h!==void 0&&r.setAttribute(c,h)}),a.muted===!0&&(r.muted=!0),Hn(r,t,a.crossorigin);const i=document.createElement("source");let l;if(t.startsWith("data:"))l=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const c=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();l=Vt.MIME_TYPES[c]||`video/${c}`}return i.src=t,l&&(i.type=l),new Promise(c=>{const h=async()=>{const g=new Vt({...a,resource:r});r.removeEventListener("canplay",h),e.data.preload&&await Vn(r),c(is(g,s,t))};r.addEventListener("canplay",h),r.appendChild(i)})},unload(t){t.destroy(!0)}},_a={extension:{type:L.ResolveParser,name:"resolveTexture"},test:xa.test,parse:t=>{var e;return{resolution:parseFloat(((e=gt.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},Kn={extension:{type:L.ResolveParser,priority:-2,name:"resolveJson"},test:t=>gt.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:_a.parse};class Qn{constructor(){this._detections=[],this._initialized=!1,this.resolver=new gt,this.loader=new xn,this.cache=de,this._backgroundLoader=new dn(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var n,i;if(this._initialized){me("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let l=e.manifest;typeof l=="string"&&(l=await this.load(l)),this.resolver.addManifest(l)}const s=((n=e.texturePreference)==null?void 0:n.resolution)??1,a=typeof s=="number"?[s]:s,r=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=ra(e),r=tt(e).map(l=>{if(typeof l!="string"){const p=this.resolver.getAlias(l);return p.some(u=>!this.resolver.hasKey(u))&&this.add(l),Array.isArray(p)?p[0]:p}return this.resolver.hasKey(l)||this.add({alias:l,src:l}),l}),n=this.resolver.resolve(r),i=await this._mapLoadToResolve(n,s);return a?i[r[0]]:i}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const r=this.resolver.resolveBundle(e),n={},i=Object.keys(r);let l=0,p=0;const u=()=>{s==null||s(++l/p)},c=i.map(h=>{const g=r[h];return p+=Object.keys(g).length,this._mapLoadToResolve(g,u).then(k=>{n[h]=k})});return await Promise.all(c),a?n[e[0]]:n}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return de.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=de.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(a,s);this._backgroundLoader.active=!0;const n={};return a.forEach(i=>{const l=r[i.src],p=[i.src];i.alias&&p.push(...i.alias),p.forEach(u=>{n[u]=l}),de.set(p,l)}),n}async unload(e){this._initialized||await this.init();const s=tt(e).map(r=>typeof r!="string"?r.src:r),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=tt(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(r=>this._unloadFromResolved(s[r]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{de.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,r)=>s.indexOf(a)===r),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const Fe=new Qn;be.handleByList(L.LoadParser,Fe.loader.parsers).handleByList(L.ResolveParser,Fe.resolver.parsers).handleByList(L.CacheParser,Fe.cache.parsers).handleByList(L.DetectionParser,Fe.detections);be.add(fn,un,pn,bn,gn,vn,mn,wn,En,Bn,$n,xa,Xn,cn,ln,_a,Kn);const Qs={loader:L.LoadParser,resolver:L.ResolveParser,cache:L.CacheParser,detection:L.DetectionParser};be.handle(L.Asset,t=>{const e=t.ref;Object.entries(Qs).filter(([s])=>!!e[s]).forEach(([s,a])=>be.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(Qs).filter(s=>!!e[s]).forEach(s=>be.remove(e[s]))});class Jn extends jr{constructor(e,s){const{text:a,resolution:r,style:n,anchor:i,width:l,height:p,roundPixels:u,...c}=e;super({...c}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=n,this.resolution=r??null,this.allowChildren=!1,this._anchor=new Nr({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=u??!1,l!==void 0&&(this.width=l),p!==void 0&&(this.height=p)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,r=-s*this.anchor.x;let n=0;return e.x>=r&&e.x<=r+s&&(n=-a*this.anchor.y,e.y>=n&&e.y<=n+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function Zn(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(ut(ht,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class ei extends Jn{constructor(...e){const s=Zn(e,"Text");super(s,ia),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=Dr.measureText(this._text,this._style),{width:r,height:n}=a;e.minX=-s._x*r,e.maxX=e.minX+r,e.minY=-s._y*n,e.maxY=e.minY+n}}var ti=V('<p style="color: red;" class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Error:</strong> </p>'),si=V('<div class="svelte-1t2q5b9"> </div>'),ai=V('<details class="svelte-1t2q5b9"><summary class="svelte-1t2q5b9"> </summary> <!></details>'),ri=V(`<div style="
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
  " class="svelte-1t2q5b9"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-1t2q5b9">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-1t2q5b9">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-1t2q5b9"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-1t2q5b9"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-1t2q5b9">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Rockabilly: 3x=3.77 | 4x=18.83 | 5x=75.32 🎸</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Blonde: 3x=3.77 | 4x=15.07 | 5x=56.49 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Brunette: 3x=2.26 | 4x=11.30 | 5x=37.66 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-1t2q5b9">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Hot Rod: 3x=1.51 | 4x=5.28 | 5x=18.83 🚗</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Jacket: 3x=1.51 | 4x=5.28 | 5x=18.83 🧥</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Roller Skates: 3x=1.13 | 4x=3.77 | 5x=15.07 🛼</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Microphone: 3x=1.13 | 4x=3.77 | 5x=15.07 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-1t2q5b9">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Burger: 3x=0.38 | 4x=1.51 | 5x=7.53 🍔</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Fries: 3x=0.38 | 4x=1.51 | 5x=7.53 🍟</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Milkshake: 3x=0.23 | 4x=0.76 | 5x=3.77 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-1t2q5b9">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter)</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">SCATTER 📌 - 5-12 symbolia = 8-15 FREE SPINS</div></div> <div style="background: rgba(255, 215, 0, 0.15); padding: 10px; border-radius: 8px; border: 2px solid #ffd700;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-1t2q5b9">✨ WIN MULTIPLIERS</div> <div style="margin: 5px 0; color: #fff;" class="svelte-1t2q5b9">Base Game: 1x (50%) | 2x (30%) | 3x (20%)</div> <div style="margin: 5px 0; color: #00ff00;" class="svelte-1t2q5b9">Free Spins: 3x (50%) | 5x (30%) | 10x (20%)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-1t2q5b9">Kaikki voitot kerrotaan panoksella (Bet) ja sitten Win Multiplierilla</div> <button style="
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
" class="svelte-1t2q5b9"><!></div> <button class="svelte-1t2q5b9"> </button> <button title="SPIN" class="svelte-1t2q5b9"></button>`,1);function hi(t,e){ta(e,!0);const s=13,a=1445,r=1e3,n=1.75,i=-30,l=-10,p=160,u=0,c=720,h=750,g=.8,k=50,T=30,K=-40,j=1,R="height",J=Math.round(100*n),Z=Math.round(J*(700/760)),st=Z+10,xe=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],z=typeof window<"u"&&window.location.hostname.includes("github.io")?"/web-sdk/oma-peli/symbols":`${Ze}/symbols`,ze={a:`${z}/Blue_hotrod.jpg`,b:`${z}/Blue_jacket.jpg`,c:`${z}/Blue_rollers.jpg`,d:`${z}/Blue_speakers.jpg`,e:`${z}/Premium_blonde.jpg`,f:`${z}/Premium_brunette.jpg`,g:`${z}/Premium_rocker.jpg`,h:`${z}/New_Wild.jpg`,i:`${z}/Red_burger.jpg`,j:`${z}/Red_fries.jpg`,k:`${z}/Red_milkshake.jpg`,l:`${z}/Scatter.jpg`,emptyslot:`${z}/Emptyslot.jpg`},vt=`${z}/bg_base.jpg`,os=`${z}/ReelFrames.png`,ls=`${z}/RockABillyReels_logo.png`,cs={spin:`${Ze}/sounds/spin.mp3`,stop:`${Ze}/sounds/stop.mp3`,win:`${Ze}/sounds/win.mp3`};let ye=F(!0),rt={},nt=null,Te=null,Ue=null,De=null,Ge=F("Initializing..."),Re=F(""),ae=[],fe=F(1e3),Q=F(10);const ds=1,mt=100;let _e=F(!1),Pe=F(0),He=F(!1),wa=F(0),we=!1,oe=null,bt=!1,Ve=F(0),Le=F(0),Ye=F(0),xt=F(0),yt=Ms(()=>o(Le)>0?(o(Ye)/o(Le)*100).toFixed(2):"0.00"),_t=Ms(()=>o(Ve)>0?(o(xt)/o(Ve)*100).toFixed(2):"0.00"),le=F(!1),pe=F(0),Ae=F(0),wt=F(0),At=F(0);const fs={k:.25,j:.15,i:.15,c:.08,d:.08,b:.05,a:.05,f:.04,e:.03,g:.02,l:.115,h:0,emptyslot:.165};function ps(f){if(f===6)return Math.random()<.5?"emptyslot":"h";const v=Math.random();let d=0;const _=xe.filter(A=>A!=="h"),b=_.reduce((A,I)=>A+fs[I],0);for(const A of _)if(d+=fs[A]/b,v<d)return A;return"k"}function us(){const f=[];for(let v=0;v<s;v++)f.push(ps(v));return f}function Aa(f){return f<3?{col:0,row:f}:f<6?{col:1,row:f-3}:f===6?{col:2,row:0}:f<10?{col:3,row:f-7}:{col:4,row:f-10}}function Xe(f,v){return f===0?v:f===1?3+v:f===2?6:f===3?7+v:f===4?10+v:-1}function ka(){return 1}const Ea={k:{3:.23,4:.76,5:3.77},j:{3:.38,4:1.51,5:7.53},i:{3:.38,4:1.51,5:7.53},c:{3:1.13,4:3.77,5:15.07},d:{3:1.13,4:3.77,5:15.07},b:{3:1.51,4:5.28,5:18.83},a:{3:1.51,4:5.28,5:18.83},f:{3:2.26,4:11.3,5:37.66},e:{3:3.77,4:15.07,5:56.49},g:{3:3.77,4:18.83,5:75.32},h:{},l:{},emptyslot:{}};function Sa(){var H,O;const f=[],v=[];for(let P=0;P<s;P++)U[P]==="l"&&v.push(P);if(v.length>=5){const P=v.length;w(pe,o(pe)+P),o(le)?console.log(`🎰 FREE SPINS RETRIGGERED! +${P} FREE SPINS! Total: ${o(pe)}`):(w(le,!0),w(Ae,0),Ce(wt),console.log(`🎰 FREE SPINS TRIGGERED! ${v.length} scatters = ${P} FREE SPINS!`)),f.push({symbol:"l",count:v.length,payout:0,positions:v,multiplier:1})}U[0],U[1],U[2],U[3],U[4],U[5],U[6],U[7],U[8],U[9],U[10],U[11],U[12];const d=[];for(let P=0;P<3;P++)for(let S=0;S<3;S++)for(let C=0;C<1;C++)for(let B=0;B<3;B++)for(let E=0;E<3;E++){const Y=[Xe(0,P),Xe(1,S),Xe(2,C),Xe(3,B),Xe(4,E)];d.push(Y)}console.log(`Generated ${d.length} possible paths (should be 81)`);const _=[];for(const P of d){const S=P.map(E=>U[E]);if(S[0]==="emptyslot"||S[0]==="l")continue;let C=null;for(let E=0;E<S.length;E++)if(S[E]!=="h"&&S[E]!=="emptyslot"&&S[E]!=="l"){C=S[E];break}if(!C)continue;let B=0;for(let E=0;E<S.length;E++){const Y=S[E];if(Y===C||Y==="h")B++;else break}if(B>=3){const Y=P[0]%3;_.push({symbol:C,length:B,path:P.slice(0,B),startRow:Y})}}const b=[],A=new Map;for(const P of _){const S=`${P.symbol}-${P.path.join(",")}`;A.has(S)||A.set(S,[]),A.get(S).push(P)}for(const[P,S]of A.entries()){const C=Math.max(...S.map(E=>E.length)),B=S.find(E=>E.length===C);B&&b.push(B)}const I=[],N=new Map;for(const P of b){const S=`${P.symbol}-${P.length}`;N.has(S)||N.set(S,[]),N.get(S).push(P)}const W=N.size>0?ka():1;for(const[P,S]of N.entries()){const C=S[0],B=(H=Ea[C.symbol])==null?void 0:H[C.length];if(B!==void 0&&B>0){const E=new Map;console.log(`
  DEBUG ${C.length}x${C.symbol}: Processing ${S.length} wins in group`);for(const X of S){console.log(`    Path: [${X.path.join(", ")}]`);for(let ee=0;ee<X.length;ee++)E.has(ee)||E.set(ee,new Set),E.get(ee).add(X.path[ee])}console.log("    Symbol counts per reel:");for(let X=0;X<C.length;X++){const ee=Array.from(E.get(X)||[]);console.log(`      Reel ${X}: ${ee.length} positions [${ee.join(", ")}]`)}let Y=1;for(let X=0;X<C.length;X++)Y*=((O=E.get(X))==null?void 0:O.size)||1;const lt=B*o(Q)*W*Y;console.log(`  ${C.length}x${C.symbol}: ${Y} ways × ${B}x × ${o(Q)} × ${W} = ${lt}`);const ct=new Set;for(const X of S)X.path.forEach(ee=>ct.add(ee));I.push({symbol:C.symbol,count:C.length,payout:lt,positions:Array.from(ct),multiplier:W})}}return f.push(...I),f}let ke=F(0),Ie=F(he([])),ue=F(!1),it=F(!1);const Ta={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function kt(f){if(!o(ye)||!rt[f])return;const v=rt[f];v.currentTime=0,v.play().catch(d=>{console.warn("Äänen toisto epäonnistui:",f,d)})}function Ra(f){Ke.forEach(v=>q.stage.removeChild(v)),Ke=[],f.forEach(v=>{v.positions.forEach(d=>{const _=Oe[d],b=new Yt().rect(0,0,J,Z).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});b.x=_.container.x,b.y=_.container.y,q.stage.addChild(b),Ke.push(b);let A=0,I=1;const N=.05;q.ticker.add(()=>{A+=I*N,A>=.4&&(I=-1),A<=0&&(I=1),b.alpha=.5+A})})})}function Et(){Ke.forEach(f=>q.stage.removeChild(f)),Ke=[]}let U=us(),St,q,Oe=[],Ke=[];class Pa{constructor(v,d){re(this,"index");re(this,"container");re(this,"offset",0);re(this,"speed",0);re(this,"targetSpeed",30);re(this,"state","idle");re(this,"stopDelay",0);re(this,"bounceOffset",0);re(this,"bounceSpeed",0);re(this,"bounceFrames",0);this.index=v,this.container=d}start(v){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=v}update(){this.state!=="idle"&&(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"&&(this.speed*=.92,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,kt("stop"))),this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=st&&(this.offset=0,U[this.index]=ps(this.index))))}draw(){const v=this.container;v.removeChildren();const d=U[this.index];if(!d||!nt||!nt[d])return;const _=nt[d];if(!_)return;const b=this.offset+this.bounceOffset,A=new dt(_);A.width=J,A.height=Z,A.x=0,A.y=b,v.addChild(A)}}sa(async()=>{q=new ga,await q.init({width:a,height:r,background:"#001a33"}),St.appendChild(q.canvas);const f={};try{w(Ge,"Loading background and UI images..."),ae.push(`Loading background: ${vt}`),ae.push(`Loading reel frames: ${os}`),ae.push(`Loading logo: ${ls}`),await Fe.load([{alias:"background",src:vt},{alias:"reelframes",src:os},{alias:"logo",src:ls}]),Te=Ee.from("background"),Ue=Ee.from("reelframes"),De=Ee.from("logo"),console.log("✅ Background texture created:",Te.width,"x",Te.height),console.log("✅ Reel frames texture created:",Ue.width,"x",Ue.height),console.log("✅ Logo texture created:",De.width,"x",De.height),ae.push("✅ All UI images loaded"),w(Ge,"Loading symbols...");const d=[];for(const _ of xe)d.push({alias:_,src:ze[_]});await Fe.load(d);for(const _ of xe){const b=ze[_];ae.push(`Loading symbol ${_}: ${b}`);try{const A=Ee.from(_);f[_]=A,console.log(`✅ Symbol ${_} loaded:`,A.width,"x",A.height),ae.push(`✅ Symbol ${_} loaded`)}catch(A){const I=`❌ Failed to load symbol ${_} from ${b}: ${A}`;throw ae.push(I),console.error(I),new Error(I)}}nt=f,w(Ge,"Assets loaded successfully!")}catch(d){w(Re,`Asset loading failed: ${d}`),ae.push(o(Re)),console.error(o(Re));return}console.log("Ladataan ääniefektit...");for(const[d,_]of Object.entries(cs)){const b=new Audio;b.src=_,b.preload="auto",b.volume=.7,b.load(),b.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${_} (käytetään hiljaista placeholderia)`)}),rt[d]=b}console.log("Ladataan ääniefektit...");for(const[d,_]of Object.entries(cs)){const b=new Audio;b.src=_,b.preload="auto",b.volume=.7,b.load(),b.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${_} (käytetään hiljaista placeholderia)`)}),rt[d]=b}if(console.log("Taustakuva ladattu, tekstuuri:",Te),Te){const d=new dt(Te);q.renderer.width/q.renderer.height;const _=d.texture.width/d.texture.height;let b;b=q.renderer.height/d.texture.height,b*=j,d.scale.set(b),d.x=(q.renderer.width-d.width)/2,d.y=(q.renderer.height-d.height)/2+K,q.stage.addChild(d),console.log("Taustakuva lisätty:",R,"mode, size:",d.width.toFixed(0),"x",d.height.toFixed(0),"image aspect:",_.toFixed(2),"scale:",b.toFixed(2),"pos:",d.x.toFixed(0),d.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(d=>({x:d.x+i,y:d.y+l})),Oe=[];for(let d=0;d<s;d++){const _=Aa(d),b=_.col,A=_.row,I=300+b*(J+20),N=250+A*(Z+15),W=d===6?I+u:I,H=d===6?N+p:N,O=new as;O.x=W+i,O.y=H+l;const P=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],S=new Yt().rect(0,0,J,Z).fill({color:P[d],alpha:.3});S.x=O.x,S.y=O.y,q.stage.addChild(S);const C=new ia({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),B=new ei({text:d.toString(),style:C});B.x=O.x+5,B.y=O.y+5,q.stage.addChild(B);const E=new Yt().rect(0,0,J,Z).fill(16777215);E.x=O.x,E.y=O.y,O.mask=E,q.stage.addChild(E),q.stage.addChild(O),Oe.push(new Pa(d,O))}if(Ue){const d=new dt(Ue);d.scale.set(1),d.x=250,d.y=200,q.stage.addChild(d),console.log("Reel frames lisätty:",d.width.toFixed(0),"x",d.height.toFixed(0))}if(De){const d=new dt(De);d.scale.set(g),d.x=(q.renderer.width-d.width)/2+k,d.y=T,q.stage.addChild(d),console.log("Logo lisätty päällimmäiseen layeriin:",d.width.toFixed(0),"x",d.height.toFixed(0))}q.ticker.add(La)});function La(){for(const f of Oe)f.update(),f.draw();if(!o(ue)&&!bt&&Oe.every(f=>f.state==="stopped")){bt=!0;const f=Sa();console.log(`Checking wins, found ${f.length} wins`),f.length>0?(w(Ie,he(f)),w(ke,he(f.reduce((v,d)=>v+d.payout,0))),Ia(o(ke)),w(ue,!0),w(wa,he(Date.now())),console.log(`🎉 VOITTO! ${o(ke)} pistettä! Uusi saldo: ${o(fe)}`),console.log(`isShowingWin set to: ${o(ue)}, totalWin: ${o(ke)}`),f.forEach(v=>{const d=v.multiplier?` (${v.multiplier}x multiplier)`:"";console.log(`${v.count}x ${v.symbol} = ${v.payout} pistettä${d}`)}),Ra(f),kt("win"),o(le)&&o(pe)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${o(Ae)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${o(Ae).toFixed(2)}`),w(le,!1),w(Ae,0)},2e3)),o(_e)&&!we&&(we=!0,oe=window.setTimeout(()=>{o(ue)&&o(_e)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),w(ue,!1),Et()),oe=window.setTimeout(()=>{we=!1,Rt()},200)},1500))):(console.log("No wins found this spin"),o(_e)&&!we&&(we=!0,oe=window.setTimeout(()=>{we=!1,Rt()},1e3)))}}function hs(){if(o(le)&&o(pe)>0)Ce(pe,-1),Ce(At),console.log(`🎰 FREE SPIN! Remaining: ${o(pe)}`);else if(!o(le)){if(o(fe)<o(Q)){alert(`Not enough credits! Balance: ${o(fe)}, Bet: ${o(Q)}`),Tt();return}w(fe,o(fe)-o(Q)),Ce(Ve),w(Le,o(Le)+o(Q))}oe!==null&&(clearTimeout(oe),oe=null),w(Ie,he([])),w(ke,0),w(ue,!1),bt=!1,Et(),U=us(),Oe.forEach((f,v)=>f.start(60+v*10)),kt("spin")}function Ia(f){w(fe,o(fe)+f),w(Ye,o(Ye)+f),o(le)&&w(Ae,o(Ae)+f),f>0&&Ce(xt)}function Oa(){o(Q)<mt&&w(Q,he(Math.min(o(Q)+1,mt)))}function Ba(){o(Q)>ds&&w(Q,he(Math.max(o(Q)-1,ds)))}function Ca(){w(Q,mt)}function Qe(f){w(_e,!0),w(Pe,he(f)),w(He,!1),Rt()}function Tt(){w(_e,!1),w(Pe,0),we=!1,oe!==null&&(clearTimeout(oe),oe=null)}function Rt(){if(!o(_e)||o(Pe)<=0){Tt();return}console.log(`Autoplay: Starting spin ${o(Pe)} rounds left`),hs(),Ce(Pe,-1)}function Fa(){confirm("Reset all statistics?")&&(w(Ve,0),w(Le,0),w(Ye,0),w(xt,0),w(wt,0),w(At,0))}var gs=ui(),vs=$e(gs);{var $a=f=>{var v=ri(),d=m(x(v),2),_=m(x(d));y(d);var b=m(d,2);{var A=B=>{var E=ti(),Y=m(x(E));y(E),ne(()=>$(Y,` ${o(Re)??""}`)),G(B,E)};se(b,B=>{o(Re)&&B(A)})}var I=m(b,2),N=m(x(I));N.nodeValue=` ${Ze??""}`,y(I);var W=m(I,2),H=m(x(W));H.nodeValue=` ${vt??""}`,y(W);var O=m(W,2),P=m(x(O));y(O);var S=m(O,2);{var C=B=>{var E=ai(),Y=x(E),lt=x(Y);y(Y);var ct=m(Y,2);zs(ct,17,()=>ae,Ns,(X,ee)=>{var Ut=si(),sr=x(Ut,!0);y(Ut),ne(()=>$(sr,o(ee))),G(X,Ut)}),y(E),ne(()=>$(lt,`Log (${ae.length??""})`)),G(B,E)};se(S,B=>{ae.length>0&&B(C)})}y(v),ne(()=>{$(_,` ${o(Ge)??""}`),$(P,` ${ze.a??""}`)}),G(f,v)};se(vs,f=>{(o(Ge)!=="Assets loaded successfully!"||o(Re))&&f($a)})}var ms=m(vs,2);{var qa=f=>{var v=oi(),d=m(x(v),2),_=x(d);y(d);var b=m(d,2);zs(b,17,()=>o(Ie),Ns,(W,H)=>{var O=ni(),P=x(O);y(O),ne(S=>$(P,`${o(H).count??""} × ${Ta[o(H).symbol]??""} = ${S??""} pistettä`),[()=>o(H).payout.toFixed(2)]),G(W,O)});var A=m(b,2);{var I=W=>{var H=ii(),O=x(H),P=x(O);y(O),y(H),ne(()=>$(P,`✨ ${o(Ie)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),G(W,H)};se(A,W=>{o(Ie).length>0&&o(Ie)[0].multiplier>1&&W(I)})}var N=m(A,2);y(v),ne(()=>$(_,`${o(ke)??""} pistettä`)),D("click",N,()=>{w(ue,!1),Et(),console.log("Win popup closed, ready for next spin")}),G(f,v)};se(ms,f=>{o(ke)>0&&o(ue)&&f(qa)})}var bs=m(ms,2);{var Ma=f=>{var v=li(),d=m(x(v),8);y(v),D("click",d,()=>{w(it,!1)}),G(f,v)};se(bs,f=>{o(it)&&f(Ma)})}var xs=m(bs,2);Cr(xs,f=>St=f,()=>St);var ot=m(xs,2),ys=x(ot);{var Wa=f=>{var v=ci(),d=$e(v),_=m(x(d),2),b=x(_,!0);y(_),y(d);var A=m(d,2),I=m(x(A),2),N=x(I,!0);y(I),y(A),ne(W=>{$(b,o(pe)),$(N,W)},[()=>o(Ae).toFixed(2)]),G(f,v)};se(ys,f=>{o(le)&&f(Wa)})}var Pt=m(ys,2),_s=m(x(Pt),2),ja=x(_s,!0);y(_s),y(Pt);var ws=m(Pt,2),As=m(x(ws),2),Na=x(As,!0);y(As),y(ws),y(ot);var Lt=m(ot,2),ks=m(x(Lt),2),Es=x(ks),It=m(Es,2),za=x(It,!0);y(It);var Ss=m(It,2),Ua=m(Ss,2);y(ks),y(Lt);var Ts=m(Lt,2),Ot=m(Ts,2),Bt=m(x(Ot),2),Rs=m(x(Bt),2),Da=x(Rs,!0);y(Rs),y(Bt);var Ct=m(Bt,2),Ps=m(x(Ct),2),Ga=x(Ps,!0);y(Ps),y(Ct);var Ft=m(Ct,2),Ls=m(x(Ft),2),Ha=x(Ls,!0);y(Ls),y(Ft);var $t=m(Ft,2),qt=m(x($t),2),Va=x(qt);y(qt),y($t);var Mt=m($t,2),Wt=m(x(Mt),2),Ya=x(Wt);y(Wt),y(Mt);var jt=m(Mt,2),Is=m(x(jt),2),Xa=x(Is,!0);y(Is),y(jt);var Nt=m(jt,2),Os=m(x(Nt),2),Ka=x(Os,!0);y(Os),y(Nt);var Qa=m(Nt,2);y(Ot);var zt=m(Ot,2),Ja=x(zt);{var Za=f=>{var v=di(),d=m(x(v),2),_=x(d);y(d);var b=m(d,2);y(v),ne(()=>$(_,`${o(Pe)??""} left`)),D("click",b,Tt),G(f,v)},er=f=>{var v=pi(),d=$e(v),_=m(d,2);{var b=A=>{var I=fi(),N=m(x(I),2),W=m(N,2),H=m(W,2),O=m(H,2),P=m(O,2),S=m(P,2);y(I),D("click",N,()=>Qe(10)),D("click",W,()=>Qe(100)),D("click",H,()=>Qe(1e3)),D("click",O,()=>Qe(1e4)),D("click",P,()=>Qe(1e5)),D("click",S,()=>{w(He,!1)}),G(A,I)};se(_,A=>{o(He)&&A(b)})}D("click",d,()=>{w(He,!o(He))}),G(f,v)};se(Ja,f=>{o(_e)?f(Za):f(er,!1)})}y(zt);var Be=m(zt,2),tr=x(Be,!0);y(Be);var Bs=m(Be,2);ve(Bs,"style",`
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
  `),ne((f,v,d,_,b,A)=>{ve(ot,"style",`
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
  border: 2px solid ${(o(le)?"#ff00ff":"#ffd700")??""};
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
  z-index: 1500;
  min-width: 180px;
`),$(ja,f),$(Na,o(Q)),$(za,o(Q)),$(Da,v),$(Ga,d),$(Ha,_),ve(qt,"style",`color: ${b??""};`),$(Va,`${o(yt)??""}%`),ve(Wt,"style",`color: ${A??""};`),$(Ya,`${o(_t)??""}%`),$(Xa,o(wt)),$(Ka,o(At)),ve(Be,"style",`
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
  `),ve(Be,"title",o(ye)?"Mykistä äänet":"Laita äänet päälle"),$(tr,o(ye)?"🔊":"🔇")},[()=>o(fe).toLocaleString(),()=>o(Ve).toLocaleString(),()=>o(Le).toLocaleString(),()=>o(Ye).toLocaleString(),()=>parseFloat(o(yt))>=95?"#00ff00":parseFloat(o(yt))>=85?"#ffff00":"#ff6666",()=>parseFloat(o(_t))>=30?"#00ff00":parseFloat(o(_t))>=20?"#ffff00":"#ff6666"]),D("click",Es,Ba),D("click",Ss,Oa),D("click",Ua,Ca),D("click",Ts,()=>{w(it,!o(it))}),D("click",Qa,Fa),D("click",Be,()=>{w(ye,!o(ye))}),D("click",Bs,hs),G(t,gs),aa()}var gi=V('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),vi=V('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function mi(t,e){ta(e,!1);let s=Fr(e,"isAuthenticated",12,!1),a=Zt(""),r=Zt(!1);const n="slot2024";function i(){o(a)===n?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(w(r,!0),w(a,""),setTimeout(()=>w(r,!1),3e3))}sa(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),lr();var l=or(),p=$e(l);{var u=c=>{var h=vi(),g=x(h),k=m(x(g),4),T=x(k);Yr(T),Br(2),y(k);var K=m(k,2);{var j=R=>{var M=gi();G(R,M)};se(K,R=>{o(r)&&R(j)})}y(g),y(h),Kr(T,()=>o(a),R=>w(a,R)),D("submit",k,Qr(i)),G(c,h)};se(p,c=>{s()||c(u)})}G(t,l),aa()}var bi=V('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),xi=V("<!> <!>",1);function Ii(t){let e=Zt(!1);var s=xi(),a=$e(s);mi(a,{get isAuthenticated(){return o(e)},set isAuthenticated(i){w(e,i)},$$legacy:!0});var r=m(a,2);{var n=i=>{var l=bi(),p=m($e(l),2);hi(p,{}),G(i,l)};se(r,i=>{o(e)&&i(n)})}G(t,s)}export{fa as A,la as C,nn as R,en as S,pa as V,Ii as _,Zr as u};
