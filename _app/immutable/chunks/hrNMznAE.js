const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Dfv5ESbW.js","./DNWEu6uq.js","./DEliLNnF.js","./DWgShhht.js","./C04N3yhf.js","./C2GHuDhf.js","./CkjkOveb.js","./CLO3l6EM.js"])))=>i.map(i=>d[i]);
var _r=Object.defineProperty;var wr=(t,e,s)=>e in t?_r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var ne=(t,e,s)=>wr(t,typeof e!="symbol"?e+"":e,s);import{f as Ar,l as kr,t as H,g as M,a as V,d as Er}from"./DRDKHArV.js";import{i as Sr}from"./Dw5_DM93.js";import{y as he,j as Tr,a8 as Lr,F as n,Q as Rr,aa as Pr,ab as Vs,h as Hs,e as Qt,k as tt,l as Ir,ac as ca,w as da,ad as Or,q as fa,a7 as Br,U as $r,a2 as Ys,aq as Jt,z as Xs,ar as Cr,as as Fr,at as qr,o as Mr,au as Wr,av as jr,aw as Nr,ax as zr,b as Ur,ay as Dr,az as Gr,a6 as Vr,aA as Hr,aB as Yr,D as Xr,L as Kr,p as pa,ah as C,ag as ua,T as _,aC as ue,f as We,s as g,c as y,r as x,t as le,I as Zt,a as ha,aD as Qr,aE as is}from"./DWgShhht.js";import{_ as Ks,p as ce,i as ae}from"./DEliLNnF.js";import{s as F}from"./4RjN9yQL.js";import{b as Jr,p as Zr}from"./B1_V_3zc.js";import{b as st}from"./BTKtOozV.js";import{e as we,E as O,a as en,C as fs,Q as mt,V as yt,N as es,D as ee,H as tn,p as Te,a0 as ze,a1 as Le,a2 as sn,w as _e,a3 as rt,a4 as ga,a5 as Ue,a6 as ge,a7 as xt,a8 as va,a9 as an,aa as ts,ab as rn,ac as nn,y as gt}from"./DNWEu6uq.js";import{A as on,B as Qs,G as ln,T as ba,a as cn,b as ss}from"./C04N3yhf.js";function Js(t,e){return e}function dn(t,e,s,a){for(var r=[],o=e.length,i=0;i<o;i++)qr(e[i].e,r,!0);var c=o>0&&r.length===0&&s!==null;if(c){var p=s.parentNode;Mr(p),p.append(s),a.clear(),xe(t,e[0].prev,e[o-1].next)}Wr(r,()=>{for(var u=0;u<o;u++){var d=e[u];c||(a.delete(d.k),xe(t,d.prev,d.next)),jr(d.e,!c)}})}function Zs(t,e,s,a,r,o=null){var i=t,c={flags:e,items:new Map,first:null};he&&Tr();var p=null,u=!1,d=Rr(()=>{var h=s();return Br(h)?h:h==null?[]:fa(h)});Lr(()=>{var h=n(d),v=h.length;if(u&&v===0)return;u=v===0;let E=!1;if(he){var S=i.data===Pr;S!==(v===0)&&(i=Vs(),Hs(i),Qt(!1),E=!0)}if(he){for(var Y=null,N,T=0;T<v;T++){if(tt.nodeType===8&&tt.data===Ir){i=tt,E=!0,Qt(!1);break}var W=h[T],Q=a(W,T);N=ma(tt,c,Y,null,W,Q,T,r,e,s),c.items.set(Q,N),Y=N}v>0&&Hs(Vs())}he||fn(h,c,i,r,e,a,s),o!==null&&(v===0?p?ca(p):p=da(()=>o(i)):p!==null&&Or(p,()=>{p=null})),E&&Qt(!0),n(d)}),he&&(i=tt)}function fn(t,e,s,a,r,o,i){var c=t.length,p=e.items,u=e.first,d=u,h,v=null,E=[],S=[],Y,N,T,W;for(W=0;W<c;W+=1){if(Y=t[W],N=o(Y,W),T=p.get(N),T===void 0){var Q=d?d.e.nodes_start:s;v=ma(Q,e,v,v===null?e.first:v.next,Y,N,W,a,r,i),p.set(N,v),E=[],S=[],d=v.next;continue}if(pn(T,Y,W),(T.e.f&Jt)!==0&&ca(T.e),T!==d){if(h!==void 0&&h.has(T)){if(E.length<S.length){var J=S[0],de;v=J.prev;var nt=E[0],Ae=E[E.length-1];for(de=0;de<E.length;de+=1)ea(E[de],J,s);for(de=0;de<S.length;de+=1)h.delete(S[de]);xe(e,nt.prev,Ae.next),xe(e,v,nt),xe(e,Ae,J),d=J,v=Ae,W-=1,E=[],S=[]}else h.delete(T),ea(T,d,s),xe(e,T.prev,T.next),xe(e,T,v===null?e.first:v.next),xe(e,v,T),v=T;continue}for(E=[],S=[];d!==null&&d.k!==N;)(d.e.f&Jt)===0&&(h??(h=new Set)).add(d),S.push(d),d=d.next;if(d===null)continue;T=d}E.push(T),v=T,d=T.next}if(d!==null||h!==void 0){for(var ot=h===void 0?[]:fa(h);d!==null;)(d.e.f&Jt)===0&&ot.push(d),d=d.next;var D=ot.length;if(D>0){var Ge=null;dn(e,ot,Ge,p)}}Xs.first=e.first&&e.first.e,Xs.last=v&&v.e}function pn(t,e,s,a){Fr(t.v,e),t.i=s}function ma(t,e,s,a,r,o,i,c,p,u){var d=(p&Nr)!==0,h=(p&zr)===0,v=d?h?$r(r):Ys(r):r,E=(p&Cr)===0?i:Ys(i),S={i:E,v,k:o,a:null,e:null,prev:s,next:a};try{return S.e=da(()=>c(t,v,E,u),he),S.e.prev=s&&s.e,S.e.next=a&&a.e,s===null?e.first=S:(s.next=S,s.e.next=S.e),a!==null&&(a.prev=S,a.e.prev=S.e),S}finally{}}function ea(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,r=e?e.e.nodes_start:s,o=t.e.nodes_start;o!==a;){var i=Ur(o);r.before(o),o=i}}function xe(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function un(t){if(he){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;oe(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var r=t.checked;oe(t,"checked",null),t.checked=r}}};t.__on_r=s,Dr(s),Ar()}}function oe(t,e,s,a){var r=t.__attributes??(t.__attributes={});he&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Gr]=s),s==null?t.removeAttribute(e):typeof s!="string"&&hn(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var ta=new Map;function hn(t){var e=ta.get(t.nodeName);if(e)return e;ta.set(t.nodeName,e=[]);for(var s,a=t,r=Element.prototype;r!==a;){s=Hr(a);for(var o in s)s[o].set&&e.push(o);a=Vr(a)}return e}function gn(t,e,s=e){var a=Yr();kr(t,"input",r=>{var o=r?t.defaultValue:t.value;if(o=as(t)?rs(o):o,s(o),a&&o!==(o=e())){var i=t.selectionStart,c=t.selectionEnd;t.value=o??"",c!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(c,t.value.length))}}),(he&&t.defaultValue!==t.value||Xr(e)==null&&t.value)&&s(as(t)?rs(t.value):t.value),Kr(()=>{var r=e();as(t)&&r===rs(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function as(t){var e=t.type;return e==="number"||e==="range"}function rs(t){return t===""?null:+t}function vn(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const ls=[];we.handleByNamedList(O.Environment,ls);async function bn(t){if(!t)for(let e=0;e<ls.length;e++){const s=ls[e];if(s.value.test()){await s.value.load();return}}}let at;function mn(){if(typeof at=="boolean")return at;try{at=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{at=!1}return at}var ya=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(ya||{});class yn{constructor(e){this.items=[],this._name=e}emit(e,s,a,r,o,i,c,p){const{name:u,items:d}=this;for(let h=0,v=d.length;h<v;h++)d[h][u](e,s,a,r,o,i,c,p);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const xn=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],xa=class _a extends en{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...xn,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await bn(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={..._a.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof fs&&(a={container:a},s&&(mt(yt,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const r=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=r?a.clearColor:es.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const r=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==r&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=ya.ALL);const{clear:a,clearColor:r,target:o}=e;es.shared.setValue(r??this.background.colorRgba),s.renderTarget.clear(o,a,es.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new yn(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const r in this.runners)this.runners[r].add(a);return this}_addPipes(e,s){const a=s.reduce((r,o)=>(r[o.name]=o.value,r),{});e.forEach(r=>{const o=r.value,i=r.name,c=a[i];this.renderPipes[i]=new o(this,c?new c:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!mn())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};xa.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let wa=xa,vt;function _n(t){return vt!==void 0||(vt=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??wa.defaultOptions.failIfMajorPerformanceCaveat};try{if(!ee.get().getWebGLRenderingContext())return!1;let r=ee.get().createCanvas().getContext("webgl",e);const o=!!((s=r==null?void 0:r.getContextAttributes())!=null&&s.stencil);if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,o}catch{return!1}})()),vt}let bt;async function wn(t={}){return bt!==void 0||(bt=await(async()=>{const e=ee.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),bt}const sa=["webgl","webgpu","canvas"];async function An(t){let e=[];t.preference?(e.push(t.preference),sa.forEach(o=>{o!==t.preference&&e.push(o)})):e=sa.slice();let s,a={};for(let o=0;o<e.length;o++){const i=e[o];if(i==="webgpu"&&await wn()){const{WebGPURenderer:c}=await Ks(async()=>{const{WebGPURenderer:p}=await import("./Dfv5ESbW.js");return{WebGPURenderer:p}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=c,a={...t,...t.webgpu};break}else if(i==="webgl"&&_n(t.failIfMajorPerformanceCaveat??wa.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:c}=await Ks(async()=>{const{WebGLRenderer:p}=await import("./CLO3l6EM.js");return{WebGLRenderer:p}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=c,a={...t,...t.webgl};break}else if(i==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const r=new s;return await r.init(a),r}const Aa="8.8.1";class ka{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Aa)}static destroy(){}}ka.extension=O.Application;class kn{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Aa)}destroy(){this._renderer=null}}kn.extension={type:[O.WebGLSystem,O.WebGPUSystem],name:"initHook",priority:-10};const Ea=class cs{constructor(...e){this.stage=new fs,e[0]!==void 0&&mt(yt,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await An(e),cs._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return mt(yt,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=cs._plugins.slice(0);a.reverse(),a.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Ea._plugins=[];let Sa=Ea;we.handleByList(O.Application,Sa._plugins);we.add(ka);class Ta extends on{constructor(e,s){super();const{textures:a,data:r}=e;Object.keys(r.pages).forEach(o=>{const i=r.pages[parseInt(o,10)],c=a[i.id];this.pages.push({texture:c})}),Object.keys(r.chars).forEach(o=>{const i=r.chars[o],{frame:c,source:p}=a[i.page],u=new tn(i.x+c.x,i.y+c.y,i.width,i.height),d=new Te({source:p,frame:u});this.chars[o]={id:o.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:d}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){Qs.install(e)}static uninstall(e){Qs.uninstall(e)}}const ns={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const h in e){const v=e[h].match(/^[a-z]+/gm)[0],E=e[h].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),S={};for(const Y in E){const N=E[Y].split("="),T=N[0],W=N[1].replace(/"/gm,""),Q=parseFloat(W),J=isNaN(Q)?W:Q;S[T]=J}s[v].push(S)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=s.info,[o]=s.common,[i]=s.distanceField??[];i&&(a.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),a.fontSize=parseInt(r.size,10),a.fontFamily=r.face,a.lineHeight=parseInt(o.lineHeight,10);const c=s.page;for(let h=0;h<c.length;h++)a.pages.push({id:parseInt(c[h].id,10)||0,file:c[h].file});const p={};a.baseLineOffset=a.lineHeight-parseInt(o.base,10);const u=s.char;for(let h=0;h<u.length;h++){const v=u[h],E=parseInt(v.id,10);let S=v.letter??v.char??String.fromCharCode(E);S==="space"&&(S=" "),p[E]=S,a.chars[S]={id:E,page:parseInt(v.page,10)||0,x:parseInt(v.x,10),y:parseInt(v.y,10),width:parseInt(v.width,10),height:parseInt(v.height,10),xOffset:parseInt(v.xoffset,10),yOffset:parseInt(v.yoffset,10),xAdvance:parseInt(v.xadvance,10),kerning:{}}}const d=s.kerning||[];for(let h=0;h<d.length;h++){const v=parseInt(d[h].first,10),E=parseInt(d[h].second,10),S=parseInt(d[h].amount,10);a.chars[p[E]].kerning[p[v]]=S}return a}},aa={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const o=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),c=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let u=0;u<o.length;u++)e.pages.push({id:parseInt(o[u].getAttribute("id"),10)||0,file:o[u].getAttribute("file")});const p={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let u=0;u<i.length;u++){const d=i[u],h=parseInt(d.getAttribute("id"),10);let v=d.getAttribute("letter")??d.getAttribute("char")??String.fromCharCode(h);v==="space"&&(v=" "),p[h]=v,e.chars[v]={id:h,page:parseInt(d.getAttribute("page"),10)||0,x:parseInt(d.getAttribute("x"),10),y:parseInt(d.getAttribute("y"),10),width:parseInt(d.getAttribute("width"),10),height:parseInt(d.getAttribute("height"),10),xOffset:parseInt(d.getAttribute("xoffset"),10),yOffset:parseInt(d.getAttribute("yoffset"),10),xAdvance:parseInt(d.getAttribute("xadvance"),10),kerning:{}}}for(let u=0;u<c.length;u++){const d=parseInt(c[u].getAttribute("first"),10),h=parseInt(c[u].getAttribute("second"),10),v=parseInt(c[u].getAttribute("amount"),10);e.chars[p[h]].kerning[p[d]]=v}return e}},ra={test(t){return typeof t=="string"&&t.includes("<font>")?aa.test(ee.get().parseXML(t)):!1},parse(t){return aa.parse(ee.get().parseXML(t))}},En=[".xml",".fnt"],Sn={extension:{type:O.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof Ta,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},Tn={extension:{type:O.LoadParser,priority:ze.Normal},name:"loadBitmapFont",test(t){return En.includes(Le.extname(t).toLowerCase())},async testParse(t){return ns.test(t)||ra.test(t)},async parse(t,e,s){const a=ns.test(t)?ns.parse(t):ra.parse(t),{src:r}=e,{pages:o}=a,i=[],c=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let h=0;h<o.length;++h){const v=o[h].file;let E=Le.join(Le.dirname(r),v);E=sn(E,r),i.push({src:E,data:c})}const p=await s.load(i),u=i.map(h=>p[h.src]);return new Ta({data:a,textures:u},r)},async load(t,e){return await(await ee.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class Ln{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Rn={extension:{type:O.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Te),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((r,o)=>{s[a+(o===0?"":o+1)]=r})}),s}};async function La(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Pn={extension:{type:O.DetectionParser,priority:1},test:async()=>La("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},na=["png","jpg","jpeg"],In={extension:{type:O.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...na],remove:async t=>t.filter(e=>!na.includes(e))},On="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function ps(t){return On?!1:document.createElement("video").canPlayType(t)!==""}const Bn={extension:{type:O.DetectionParser,priority:0},test:async()=>ps("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},$n={extension:{type:O.DetectionParser,priority:0},test:async()=>ps("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},Cn={extension:{type:O.DetectionParser,priority:0},test:async()=>ps("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},Fn={extension:{type:O.DetectionParser,priority:0},test:async()=>La("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class qn{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var i,c;let r=null,o=null;if(s.loadParser&&(o=this._parserHash[s.loadParser],o||_e(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!o){for(let p=0;p<this.parsers.length;p++){const u=this.parsers[p];if(u.load&&((i=u.test)!=null&&i.call(u,e,s,this))){o=u;break}}if(!o)return _e(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await o.load(e,s,this),a.parser=o;for(let p=0;p<this.parsers.length;p++){const u=this.parsers[p];u.parse&&u.parse&&await((c=u.testParse)==null?void 0:c.call(u,r,s,this))&&(r=await u.parse(r,s,this)||r,a.parser=u)}return r})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const r={},o=ga(e),i=rt(e,u=>({alias:[u],src:u,data:{}})),c=i.length,p=i.map(async u=>{const d=Le.toAbsolute(u.src);if(!r[u.src])try{this.promiseCache[d]||(this.promiseCache[d]=this._getLoadPromiseAndParser(d,u)),r[u.src]=await this.promiseCache[d].promise,s&&s(++a/c)}catch(h){throw delete this.promiseCache[d],delete r[u.src],new Error(`[Loader.load] Failed to load ${d}.
${h}`)}});return await Promise.all(p),o?r[i[0].src]:r}async unload(e){const a=rt(e,r=>({alias:[r],src:r})).map(async r=>{var c,p;const o=Le.toAbsolute(r.src),i=this.promiseCache[o];if(i){const u=await i.promise;delete this.promiseCache[o],await((p=(c=i.parser)==null?void 0:c.unload)==null?void 0:p.call(c,u,r,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&_e(`[Assets] loadParser name conflict "${s.name}"`):_e("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function De(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const Mn=".json",Wn="application/json",jn={extension:{type:O.LoadParser,priority:ze.Low},name:"loadJson",test(t){return De(t,Wn)||Ue(t,Mn)},async load(t){return await(await ee.get().fetch(t)).json()}},Nn=".txt",zn="text/plain",Un={name:"loadTxt",extension:{type:O.LoadParser,priority:ze.Low,name:"loadTxt"},test(t){return De(t,zn)||Ue(t,Nn)},async load(t){return await(await ee.get().fetch(t)).text()}},Dn=["normal","bold","100","200","300","400","500","600","700","800","900"],Gn=[".ttf",".otf",".woff",".woff2"],Vn=["font/ttf","font/otf","font/woff","font/woff2"],Hn=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Yn(t){const e=Le.extname(t),r=Le.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(c=>c.charAt(0).toUpperCase()+c.slice(1));let o=r.length>0;for(const c of r)if(!c.match(Hn)){o=!1;break}let i=r.join(" ");return o||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const Xn=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function Kn(t){return Xn.test(t)?t:encodeURI(t)}const Qn={extension:{type:O.LoadParser,priority:ze.Low},name:"loadWebFont",test(t){return De(t,Vn)||Ue(t,Gn)},async load(t,e){var a,r,o;const s=ee.get().getFontFaceSet();if(s){const i=[],c=((a=e.data)==null?void 0:a.family)??Yn(t),p=((o=(r=e.data)==null?void 0:r.weights)==null?void 0:o.filter(d=>Dn.includes(d)))??["normal"],u=e.data??{};for(let d=0;d<p.length;d++){const h=p[d],v=new FontFace(c,`url(${Kn(t)})`,{...u,weight:h});await v.load(),s.add(v),i.push(v)}return ge.set(`${c}-and-url`,{url:t,fontFaces:i}),i.length===1?i[0]:i}return _e("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{ge.remove(`${e.family}-and-url`),ee.get().getFontFaceSet().delete(e)})}};function us(t,e=1){var a;const s=(a=xt.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function hs(t,e,s){t.label=s,t._sourceOrigin=s;const a=new Te({source:t,label:s}),r=()=>{delete e.promiseCache[s],ge.has(s)&&ge.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(_e("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),a.once("destroy",()=>{t.destroyed||(_e("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),a}const Jn=".svg",Zn="image/svg+xml",eo={extension:{type:O.LoadParser,priority:ze.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return De(t,Zn)||Ue(t,Jn)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?so(t):to(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function to(t,e,s,a){var N,T,W;const o=await(await ee.get().fetch(t)).blob(),i=URL.createObjectURL(o),c=new Image;c.src=i,c.crossOrigin=a,await c.decode(),URL.revokeObjectURL(i);const p=document.createElement("canvas"),u=p.getContext("2d"),d=((N=e.data)==null?void 0:N.resolution)||us(t),h=((T=e.data)==null?void 0:T.width)??c.width,v=((W=e.data)==null?void 0:W.height)??c.height;p.width=h*d,p.height=v*d,u.drawImage(c,0,0,h*d,v*d);const{parseAsGraphicsContext:E,...S}=e.data??{},Y=new va({resource:p,alphaMode:"premultiply-alpha-on-upload",resolution:d,...S});return hs(Y,s,t)}async function so(t){const s=await(await ee.get().fetch(t)).text(),a=new ln;return a.svg(s),a}const ao=`(function () {
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
`;let je=null,ds=class{constructor(){je||(je=URL.createObjectURL(new Blob([ao],{type:"application/javascript"}))),this.worker=new Worker(je)}};ds.revokeObjectURL=function(){je&&(URL.revokeObjectURL(je),je=null)};const ro=`(function () {
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
`;let Ne=null;class Ra{constructor(){Ne||(Ne=URL.createObjectURL(new Blob([ro],{type:"application/javascript"}))),this.worker=new Worker(Ne)}}Ra.revokeObjectURL=function(){Ne&&(URL.revokeObjectURL(Ne),Ne=null)};let oa=0,os;class no{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new ds;s.addEventListener("message",a=>{s.terminate(),ds.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){os===void 0&&(os=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<os&&(this._createdWorkers++,e=new Ra().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((r,o)=>{this._queue.push({id:e,arguments:s,resolve:r,reject:o})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[oa]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:oa++,id:a})}}const ia=new no,oo=[".jpeg",".jpg",".png",".webp",".avif"],io=["image/jpeg","image/png","image/webp","image/avif"];async function lo(t,e){var r;const s=await ee.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const Pa={name:"loadTextures",extension:{type:O.LoadParser,priority:ze.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return De(t,io)||Ue(t,oo)},async load(t,e,s){var o;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await ia.isImageBitmapSupported()?a=await ia.loadImageBitmap(t,e):a=await lo(t,e):a=await new Promise((i,c)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?i(a):(a.onload=()=>{i(a)},a.onerror=c)});const r=new va({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((o=e.data)==null?void 0:o.resolution)||us(t),...e.data});return hs(r,s,t)},unload(t){t.destroy(!0)}},Ia=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],co=Ia.map(t=>`video/${t.substring(1)}`);function fo(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=uo(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function po(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",r),t.load();function a(){o(),e()}function r(i){o(),s(i)}function o(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",r)}})}function uo(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const ho={name:"loadVideo",extension:{type:O.LoadParser,name:"loadVideo"},test(t){const e=De(t,co),s=Ue(t,Ia);return e||s},async load(t,e,s){var p,u;const a={...ts.defaultOptions,resolution:((p=e.data)==null?void 0:p.resolution)||us(t),alphaMode:((u=e.data)==null?void 0:u.alphaMode)||await an(),...e.data},r=document.createElement("video"),o={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(o).forEach(d=>{const h=o[d];h!==void 0&&r.setAttribute(d,h)}),a.muted===!0&&(r.muted=!0),fo(r,t,a.crossorigin);const i=document.createElement("source");let c;if(t.startsWith("data:"))c=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const d=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();c=ts.MIME_TYPES[d]||`video/${d}`}return i.src=t,c&&(i.type=c),new Promise(d=>{const h=async()=>{const v=new ts({...a,resource:r});r.removeEventListener("canplay",h),e.data.preload&&await po(r),d(hs(v,s,t))};r.addEventListener("canplay",h),r.appendChild(i)})},unload(t){t.destroy(!0)}},Oa={extension:{type:O.ResolveParser,name:"resolveTexture"},test:Pa.test,parse:t=>{var e;return{resolution:parseFloat(((e=xt.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},go={extension:{type:O.ResolveParser,priority:-2,name:"resolveJson"},test:t=>xt.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:Oa.parse};class vo{constructor(){this._detections=[],this._initialized=!1,this.resolver=new xt,this.loader=new qn,this.cache=ge,this._backgroundLoader=new Ln(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var o,i;if(this._initialized){_e("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let c=e.manifest;typeof c=="string"&&(c=await this.load(c)),this.resolver.addManifest(c)}const s=((o=e.texturePreference)==null?void 0:o.resolution)??1,a=typeof s=="number"?[s]:s,r=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=ga(e),r=rt(e).map(c=>{if(typeof c!="string"){const p=this.resolver.getAlias(c);return p.some(u=>!this.resolver.hasKey(u))&&this.add(c),Array.isArray(p)?p[0]:p}return this.resolver.hasKey(c)||this.add({alias:c,src:c}),c}),o=this.resolver.resolve(r),i=await this._mapLoadToResolve(o,s);return a?i[r[0]]:i}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const r=this.resolver.resolveBundle(e),o={},i=Object.keys(r);let c=0,p=0;const u=()=>{s==null||s(++c/p)},d=i.map(h=>{const v=r[h];return p+=Object.keys(v).length,this._mapLoadToResolve(v,u).then(E=>{o[h]=E})});return await Promise.all(d),a?o[e[0]]:o}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return ge.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=ge.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(a,s);this._backgroundLoader.active=!0;const o={};return a.forEach(i=>{const c=r[i.src],p=[i.src];i.alias&&p.push(...i.alias),p.forEach(u=>{o[u]=c}),ge.set(p,c)}),o}async unload(e){this._initialized||await this.init();const s=rt(e).map(r=>typeof r!="string"?r.src:r),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=rt(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(r=>this._unloadFromResolved(s[r]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{ge.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,r)=>s.indexOf(a)===r),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const Me=new vo;we.handleByList(O.LoadParser,Me.loader.parsers).handleByList(O.ResolveParser,Me.resolver.parsers).handleByList(O.CacheParser,Me.cache.parsers).handleByList(O.DetectionParser,Me.detections);we.add(Rn,In,Pn,Fn,Bn,$n,Cn,jn,Un,Qn,eo,Pa,ho,Tn,Sn,Oa,go);const la={loader:O.LoadParser,resolver:O.ResolveParser,cache:O.CacheParser,detection:O.DetectionParser};we.handle(O.Asset,t=>{const e=t.ref;Object.entries(la).filter(([s])=>!!e[s]).forEach(([s,a])=>we.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(la).filter(s=>!!e[s]).forEach(s=>we.remove(e[s]))});class bo extends rn{constructor(e,s){const{text:a,resolution:r,style:o,anchor:i,width:c,height:p,roundPixels:u,...d}=e;super({...d}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=o,this.resolution=r??null,this.allowChildren=!1,this._anchor=new nn({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=u??!1,c!==void 0&&(this.width=c),p!==void 0&&(this.height=p)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,r=-s*this.anchor.x;let o=0;return e.x>=r&&e.x<=r+s&&(o=-a*this.anchor.y,e.y>=o&&e.y<=o+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function mo(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(mt(yt,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class yo extends bo{constructor(...e){const s=mo(e,"Text");super(s,ba),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=cn.measureText(this._text,this._style),{width:r,height:o}=a;e.minX=-s._x*r,e.maxX=e.minX+r,e.minY=-s._y*o,e.maxY=e.minY+o}}var xo=H('<p style="color: red;" class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Error:</strong> </p>'),_o=H('<div class="svelte-1t2q5b9"> </div>'),wo=H('<details class="svelte-1t2q5b9"><summary class="svelte-1t2q5b9"> </summary> <!></details>'),Ao=H(`<div style="
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
  " class="svelte-1t2q5b9"><h3 class="svelte-1t2q5b9">🎰 Oma-peli Debug</h3> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Status:</strong> </p> <!> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Base:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">BG URL:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Sample:</strong> </p> <!></div>`),ko=H('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-1t2q5b9"> </div>'),Eo=H('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-1t2q5b9"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-1t2q5b9"> </span></div>'),So=H(`<div style="
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
      " class="svelte-1t2q5b9">Jatka pelaamista</button></div>`),To=H(`<div style="
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
  " class="svelte-1t2q5b9"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-1t2q5b9">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-1t2q5b9">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-1t2q5b9"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-1t2q5b9"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-1t2q5b9">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-1t2q5b9">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-1t2q5b9">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-1t2q5b9">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-1t2q5b9">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-1t2q5b9"> <span style="color: #ffd700;" class="svelte-1t2q5b9">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-1t2q5b9">Sulje</button></div>`),Lo=H('<div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #ff00ff; font-size: 16px; animation: pulse 1s infinite;" class="svelte-1t2q5b9"><span class="svelte-1t2q5b9">🎰 FREE SPINS:</span> <span class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-top: 1px solid #555; padding-top: 8px;" class="svelte-1t2q5b9"><span style="color: #fff; font-size: 14px;" class="svelte-1t2q5b9">Total Won:</span> <span style="color: #00ff00; font-size: 14px;" class="svelte-1t2q5b9"> </span></div>',1),Ro=H(`<div style="
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
        " class="svelte-1t2q5b9">⏹ STOP</button></div>`),Po=H(`<div style="
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
          " class="svelte-1t2q5b9">Cancel</button></div>`),Io=H(`<button style="
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
      " class="svelte-1t2q5b9">🔄 AUTOPLAY</button> <!>`,1),Oo=H(`<!> <!> <!> <div style="
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  " class="svelte-1t2q5b9"></div> <div class="svelte-1t2q5b9"><!> <div style="display: flex; justify-content: space-between; margin-bottom: 8px;" class="svelte-1t2q5b9"><span style="color: #fff;" class="svelte-1t2q5b9">CREDITS:</span> <span style="color: #ffd700;" class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; border-top: 1px solid #555; padding-top: 8px;" class="svelte-1t2q5b9"><span style="color: #fff;" class="svelte-1t2q5b9">BET:</span> <span style="color: #00ff00;" class="svelte-1t2q5b9"> </span></div></div> <div style="
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
" class="svelte-1t2q5b9"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-1t2q5b9">📊 RTP MONITOR</div> <div style="font-size: 11px; margin-bottom: 10px; color: #888; text-align: center;" class="svelte-1t2q5b9"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Rounds:</span> <span style="color: #fff;" class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Wagered:</span> <span style="color: #ff6666;" class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Won:</span> <span style="color: #66ff66;" class="svelte-1t2q5b9"> </span></div> <div style="
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
  " class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Free Spins Played:</span> <span style="color: #66ccff;" class="svelte-1t2q5b9"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #555;
    font-size: 14px;
  " class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Empty Slots:</span> <span style="color: #ff9900;" class="svelte-1t2q5b9"> </span></div> <button style="
      margin-top: 10px;
      width: 100%;
      padding: 5px;
      background: rgba(255, 100, 100, 0.3);
      color: #fff;
      border: 1px solid #ff6666;
      border-radius: 5px;
      cursor: pointer;
      font-size: 11px;
    " class="svelte-1t2q5b9">Reset Stats</button> <div style="
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  " class="svelte-1t2q5b9"><button class="svelte-1t2q5b9"> </button> <button class="svelte-1t2q5b9">Clear Win Log</button> <button class="svelte-1t2q5b9">🎰 Test Free Spins</button></div></div> <div style="
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1500;
" class="svelte-1t2q5b9"><!></div> <button class="svelte-1t2q5b9"> </button> <button title="SPIN" class="svelte-1t2q5b9"></button>`,1);function Bo(t,e){pa(e,!0);const s=13,a=1445,r=1e3,o=1.75,i=-30,c=-10,p=160,u=0,d=720,h=750,v=.8,E=50,S=30,Y=-40,N=1,T="height",Q=Math.round(100*o),J=Math.round(Q*(700/760)),nt=J+10,Ae=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],D=typeof window<"u"&&window.location.hostname.includes("github.io")?"/web-sdk/oma-peli/symbols":`${st}/symbols`,Ge={a:`${D}/Blue_hotrod.jpg`,b:`${D}/Blue_jacket.jpg`,c:`${D}/Blue_rollers.jpg`,d:`${D}/Blue_speakers.jpg`,e:`${D}/Premium_blonde.jpg`,f:`${D}/Premium_brunette.jpg`,g:`${D}/Premium_rocker.jpg`,h:`${D}/New_Wild.jpg`,i:`${D}/Red_burger.jpg`,j:`${D}/Red_fries.jpg`,k:`${D}/Red_milkshake.jpg`,l:`${D}/Scatter.jpg`,emptyslot:`${D}/Emptyslot.jpg`},_t=`${D}/bg_base.jpg`,gs=`${D}/ReelFrames.png`,vs=`${D}/RockABillyReels_logo.png`,Ba={spin:`${st}/sounds/spin.mp3`,stop:`${st}/sounds/stop.mp3`,win:`${st}/sounds/win.mp3`},$a="1.0.5";let ke=C(!0),wt={},it=null,Re=null,Ve=null,He=null,Ye=C("Initializing..."),Pe=C(""),re=[],ve=C(1e3),X=C(10);const bs=1,At=100;let Ee=C(!1),Ie=C(0),Xe=C(!1),Ca=C(0),Se=!1,fe=null,kt=!1,Oe=C(0),Be=C(0),Ke=C(0),Et=C(0),St=Zt(()=>n(Be)>0?(n(Ke)/n(Be)*100).toFixed(2):"0.00"),Tt=Zt(()=>n(Oe)>0?(n(Et)/n(Oe)*100).toFixed(2):"0.00"),z=C(!1),pe=C(0),be=C(0),lt=C(0),Lt=C(0),ct=C(0),Rt=C(0),Fa=Zt(()=>n(ct)>0?(n(Rt)/n(ct)*100).toFixed(2):"0.00"),te=C(ce([]));function qa(f,b,l){const A=new Date().toLocaleString("fi-FI");let m=`
${"=".repeat(60)}
`;m+=`ROUND #${f} - ${A}
`,m+=`Mode: ${n(z)?"FREE SPINS":"BASE GAME"}
`,m+=`${"=".repeat(60)}
`,b.forEach((w,B)=>{m+=`
Win ${B+1}:
`,m+=`  Symbol: ${w.symbol} (${_s[w.symbol]})
`,m+=`  Count: ${w.count} symbols
`,m+=`  Multiplier: ${w.multiplier}x
`,m+=`  Payout: ${w.payout.toFixed(2)}
`,m+=`  Positions: [${w.positions.join(", ")}]
`}),m+=`
${"─".repeat(60)}
`,m+=`TOTAL WIN: ${l.toFixed(2)}
`,m+=`${"=".repeat(60)}
`,n(te).push(m)}function Ma(){const f=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${n(te).join(`
`)}`,b=new Blob([f],{type:"text/plain"}),l=URL.createObjectURL(b),A=document.createElement("a");A.href=l,A.download=`win-log-${Date.now()}.txt`,A.click(),URL.revokeObjectURL(l)}function Wa(){_(te,ce([]))}function ja(){n(z)||(_(z,!0),_(pe,10),_(be,0),ue(lt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."))}const ms={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25};function ys(f){if(f===6)return Math.random()<.55?"h":"emptyslot";const b=Math.random();let l=0;const A=Ae.filter(w=>w!=="h"),m=A.reduce((w,B)=>w+ms[B],0);for(const w of A)if(l+=ms[w]/m,b<l)return w;return"k"}function xs(){const f=[];for(let b=0;b<s;b++){let l=ys(b);n(z)&&(l==="k"?l="f":l==="j"?l="e":l==="i"&&(l="g")),f.push(l),ue(ct),l==="emptyslot"&&ue(Rt)}return f}function Na(f){return f<3?{col:0,row:f}:f<6?{col:1,row:f-3}:f===6?{col:2,row:0}:f<10?{col:3,row:f-7}:{col:4,row:f-10}}function Qe(f,b){return f===0?b:f===1?3+b:f===2?6:f===3?7+b:f===4?10+b:-1}function za(){if(n(z)){const f=Math.random();return f<.7?3:f<.92?5:10}else{const f=Math.random();return f<.7?1:f<.92?2:3}}const Ua={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function Da(){var Z;const f=[],b=[];for(let k=0;k<s;k++)Je[k]==="l"&&b.push(k);if(b.length>=5){const k=b.length;_(pe,n(pe)+k),n(z)?console.log(`🎰 FREE SPINS RETRIGGERED! +${k} FREE SPINS! Total: ${n(pe)}`):(_(z,!0),_(be,0),ue(lt),console.log(`🎰 FREE SPINS TRIGGERED! ${b.length} scatters = ${k} FREE SPINS!`)),f.push({symbol:"l",count:b.length,payout:0,positions:b,multiplier:1})}const l=[];for(let k=0;k<3;k++)for(let R=0;R<3;R++)for(let P=0;P<1;P++)for(let I=0;I<3;I++)for(let L=0;L<3;L++){const se=[Qe(0,k),Qe(1,R),Qe(2,P),Qe(3,I),Qe(4,L)];l.push(se)}console.log(`Generated ${l.length} possible paths (should be 81)`);const A=[];for(const k of l){const R=k.map(L=>Je[L]);if(R[0]==="emptyslot"||R[0]==="l")continue;let P=null;for(let L=0;L<R.length;L++)if(R[L]!=="h"&&R[L]!=="emptyslot"&&R[L]!=="l"){P=R[L];break}if(!P)continue;let I=0;for(let L=0;L<R.length;L++){const se=R[L];if(se===P||se==="h")I++;else break}if(I>=3){const se=k[0]%3;A.push({symbol:P,length:I,path:k.slice(0,I),startRow:se})}}const m=[],w=new Map;for(const k of A){const R=`${k.symbol}-${k.path.join(",")}`;w.has(R)||w.set(R,[]),w.get(R).push(k)}for(const[k,R]of w.entries()){const P=Math.max(...R.map(L=>L.length)),I=R.find(L=>L.length===P);I&&m.push(I)}const B=[],G=new Map;for(const k of m)G.has(k.symbol)||G.set(k.symbol,[]),G.get(k.symbol).push(k);const j=[];for(const[k,R]of G.entries()){const P=Math.max(...R.map(L=>L.length)),I=R.filter(L=>L.length===P);j.push(...I)}const U=new Map;for(const k of j){const R=`${k.symbol}-${k.length}`;U.has(R)||U.set(R,[]),U.get(R).push(k)}const $=j.length>0?za():1;for(const[k,R]of U.entries()){const P=R[0],I=(Z=Ua[P.symbol])==null?void 0:Z[P.length];if(I!==void 0&&I>0){const L=new Map;for(const ie of R)for(let K=0;K<ie.length;K++)L.has(K)||L.set(K,new Set),L.get(K).add(ie.path[K]);let se=1;for(let ie=0;ie<P.length;ie++){const K=L.get(ie);se*=K?K.size:1}const ut=I*n(X)*se*$;console.log(`  ${P.length}x${P.symbol}: ${se} ways × ${I}x × ${n(X)} bet × ${$} mult = ${ut}`);const ht=new Set;for(const ie of R)ie.path.forEach(K=>ht.add(K));B.push({symbol:P.symbol,count:P.length,payout:ut,positions:Array.from(ht),multiplier:$})}}return f.push(...B),f}let me=C(0),$e=C(ce([])),ye=C(!1),dt=C(!1);const _s={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function Pt(f){if(!n(ke)||!wt[f])return;const b=wt[f];b.currentTime=0,b.play().catch(l=>{console.warn("Äänen toisto epäonnistui:",f,l)})}function Ga(f){Ze.forEach(b=>q.stage.removeChild(b)),Ze=[],f.forEach(b=>{b.positions.forEach(l=>{const A=Ce[l],m=new ss().rect(0,0,Q,J).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});m.x=A.container.x,m.y=A.container.y,q.stage.addChild(m),Ze.push(m);let w=0,B=1;const G=.05;q.ticker.add(()=>{w+=B*G,w>=.4&&(B=-1),w<=0&&(B=1),m.alpha=.5+w})})})}function It(){Ze.forEach(f=>q.stage.removeChild(f)),Ze=[]}let Je=xs(),Ot,q,Ce=[],Ze=[];class Va{constructor(b,l){ne(this,"index");ne(this,"container");ne(this,"offset",0);ne(this,"speed",0);ne(this,"targetSpeed",30);ne(this,"state","idle");ne(this,"stopDelay",0);ne(this,"bounceOffset",0);ne(this,"bounceSpeed",0);ne(this,"bounceFrames",0);this.index=b,this.container=l}start(b){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=b}update(){this.state!=="idle"&&(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"&&(this.speed*=.92,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,Pt("stop"))),this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=nt&&(this.offset=0,Je[this.index]=ys(this.index))))}draw(){const b=this.container;b.removeChildren();const l=Je[this.index];if(!l||!it||!it[l])return;const A=it[l];if(!A)return;const m=this.offset+this.bounceOffset,w=new gt(A);w.width=Q,w.height=J,w.x=0,w.y=m,b.addChild(w)}}ua(async()=>{q=new Sa,await q.init({width:a,height:r,background:"#001a33"}),Ot.appendChild(q.canvas);const f={};try{_(Ye,"Loading background and UI images..."),re.push(`Loading background: ${_t}`),re.push(`Loading reel frames: ${gs}`),re.push(`Loading logo: ${vs}`),await Me.load([{alias:"background",src:_t},{alias:"reelframes",src:gs},{alias:"logo",src:vs}]),Re=Te.from("background"),Ve=Te.from("reelframes"),He=Te.from("logo"),console.log("✅ Background texture created:",Re.width,"x",Re.height),console.log("✅ Reel frames texture created:",Ve.width,"x",Ve.height),console.log("✅ Logo texture created:",He.width,"x",He.height),re.push("✅ All UI images loaded"),_(Ye,"Loading symbols...");const l=[];for(const A of Ae)l.push({alias:A,src:Ge[A]});await Me.load(l);for(const A of Ae){const m=Ge[A];re.push(`Loading symbol ${A}: ${m}`);try{const w=Te.from(A);f[A]=w,console.log(`✅ Symbol ${A} loaded:`,w.width,"x",w.height),re.push(`✅ Symbol ${A} loaded`)}catch(w){const B=`❌ Failed to load symbol ${A} from ${m}: ${w}`;throw re.push(B),console.error(B),new Error(B)}}it=f,_(Ye,"Assets loaded successfully!")}catch(l){_(Pe,`Asset loading failed: ${l}`),re.push(n(Pe)),console.error(n(Pe));return}console.log("Ladataan ääniefektit...");for(const[l,A]of Object.entries(Ba)){const m=new Audio;m.src=A,m.preload="auto",m.volume=.7,m.load(),m.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${A} (käytetään hiljaista placeholderia)`)}),wt[l]=m}if(console.log("Taustakuva ladattu, tekstuuri:",Re),Re){const l=new gt(Re);q.renderer.width/q.renderer.height;const A=l.texture.width/l.texture.height;let m;m=q.renderer.height/l.texture.height,m*=N,l.scale.set(m),l.x=(q.renderer.width-l.width)/2,l.y=(q.renderer.height-l.height)/2+Y,q.stage.addChild(l),console.log("Taustakuva lisätty:",T,"mode, size:",l.width.toFixed(0),"x",l.height.toFixed(0),"image aspect:",A.toFixed(2),"scale:",m.toFixed(2),"pos:",l.x.toFixed(0),l.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(l=>({x:l.x+i,y:l.y+c})),Ce=[];for(let l=0;l<s;l++){const A=Na(l),m=A.col,w=A.row,B=300+m*(Q+20),G=250+w*(J+15),j=l===6?B+u:B,U=l===6?G+p:G,$=new fs;$.x=j+i,$.y=U+c;const Z=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],k=new ss().rect(0,0,Q,J).fill({color:Z[l],alpha:.3});k.x=$.x,k.y=$.y,q.stage.addChild(k);const R=new ba({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),P=new yo({text:l.toString(),style:R});P.x=$.x+5,P.y=$.y+5,q.stage.addChild(P);const I=new ss().rect(0,0,Q,J).fill(16777215);I.x=$.x,I.y=$.y,$.mask=I,q.stage.addChild(I),q.stage.addChild($),Ce.push(new Va(l,$))}if(Ve){const l=new gt(Ve);l.scale.set(1),l.x=250,l.y=200,q.stage.addChild(l),console.log("Reel frames lisätty:",l.width.toFixed(0),"x",l.height.toFixed(0))}if(He){const l=new gt(He);l.scale.set(v),l.x=(q.renderer.width-l.width)/2+E,l.y=S,q.stage.addChild(l),console.log("Logo lisätty päällimmäiseen layeriin:",l.width.toFixed(0),"x",l.height.toFixed(0))}q.ticker.add(Ha)});function Ha(){for(const f of Ce)f.update(),f.draw();if(!n(ye)&&!kt&&Ce.every(f=>f.state==="stopped")){kt=!0;const f=Da();console.log(`Checking wins, found ${f.length} wins`),f.length>0?(_($e,ce(f)),_(me,ce(f.reduce((b,l)=>b+l.payout,0))),qa(n(Oe),f,n(me)),Ya(n(me)),_(ye,!0),_(Ca,ce(Date.now())),console.log(`🎉 VOITTO! ${n(me)} pistettä! Uusi saldo: ${n(ve)}`),console.log(`isShowingWin set to: ${n(ye)}, totalWin: ${n(me)}`),f.forEach(b=>{const l=b.multiplier?` (${b.multiplier}x multiplier)`:"";console.log(`${b.count}x ${b.symbol} = ${b.payout} pistettä${l}`)}),Ga(f),Pt("win"),n(Ee)&&!Se&&(Se=!0,fe=window.setTimeout(()=>{n(ye)&&n(Ee)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),_(ye,!1),It()),fe=window.setTimeout(()=>{Se=!1,$t()},200)},1500))):(console.log("No wins found this spin"),n(Ee)&&!Se&&(Se=!0,fe=window.setTimeout(()=>{Se=!1,$t()},1e3))),n(z)&&n(pe)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${n(be)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${n(be).toFixed(2)}`),_(z,!1),_(be,0)},2e3))}}function ws(){if(n(z)&&n(pe)>0)ue(pe,-1),ue(Lt),console.log(`🎰 FREE SPIN! Remaining: ${n(pe)}`);else if(!n(z)){if(n(ve)<n(X)){alert(`Not enough credits! Balance: ${n(ve)}, Bet: ${n(X)}`),Bt();return}_(ve,n(ve)-n(X)),ue(Oe),_(Be,n(Be)+n(X))}fe!==null&&(clearTimeout(fe),fe=null),_($e,ce([])),_(me,0),_(ye,!1),kt=!1,It(),Je=xs(),Ce.forEach((f,b)=>f.start(60+b*10)),Pt("spin")}function Ya(f){_(ve,n(ve)+f),_(Ke,n(Ke)+f),n(z)&&_(be,n(be)+f),f>0&&ue(Et)}function Xa(){n(X)<At&&_(X,ce(Math.min(n(X)+1,At)))}function Ka(){n(X)>bs&&_(X,ce(Math.max(n(X)-1,bs)))}function Qa(){_(X,At)}function et(f){_(Ee,!0),_(Ie,ce(f)),_(Xe,!1),$t()}function Bt(){_(Ee,!1),_(Ie,0),Se=!1,fe!==null&&(clearTimeout(fe),fe=null)}function $t(){if(!n(Ee)||n(Ie)<=0){Bt();return}console.log(`Autoplay: Starting spin ${n(Ie)} rounds left`),ws(),ue(Ie,-1)}function Ja(){confirm("Reset all statistics?")&&(_(Oe,0),_(Be,0),_(Ke,0),_(Et,0),_(lt,0),_(Lt,0),_(ct,0),_(Rt,0))}var As=Oo(),ks=We(As);{var Za=f=>{var b=Ao(),l=g(y(b),2),A=g(y(l));x(l);var m=g(l,2);{var w=P=>{var I=xo(),L=g(y(I));x(I),le(()=>F(L,` ${n(Pe)??""}`)),V(P,I)};ae(m,P=>{n(Pe)&&P(w)})}var B=g(m,2),G=g(y(B));G.nodeValue=` ${st??""}`,x(B);var j=g(B,2),U=g(y(j));U.nodeValue=` ${_t??""}`,x(j);var $=g(j,2),Z=g(y($));x($);var k=g($,2);{var R=P=>{var I=wo(),L=y(I),se=y(L);x(L);var ut=g(L,2);Zs(ut,17,()=>re,Js,(ht,ie)=>{var K=_o(),xr=y(K,!0);x(K),le(()=>F(xr,n(ie))),V(ht,K)}),x(I),le(()=>F(se,`Log (${re.length??""})`)),V(P,I)};ae(k,P=>{re.length>0&&P(R)})}x(b),le(()=>{F(A,` ${n(Ye)??""}`),F(Z,` ${Ge.a??""}`)}),V(f,b)};ae(ks,f=>{(n(Ye)!=="Assets loaded successfully!"||n(Pe))&&f(Za)})}var Es=g(ks,2);{var er=f=>{var b=So(),l=g(y(b),2),A=y(l);x(l);var m=g(l,2);Zs(m,17,()=>n($e),Js,(j,U)=>{var $=ko(),Z=y($);x($),le(k=>F(Z,`${n(U).count??""} × ${_s[n(U).symbol]??""} = ${k??""} pistettä`),[()=>n(U).payout.toFixed(2)]),V(j,$)});var w=g(m,2);{var B=j=>{var U=Eo(),$=y(U),Z=y($);x($),x(U),le(()=>F(Z,`✨ ${n($e)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),V(j,U)};ae(w,j=>{n($e).length>0&&n($e)[0].multiplier>1&&j(B)})}var G=g(w,2);x(b),le(()=>F(A,`${n(me)??""} pistettä`)),M("click",G,()=>{_(ye,!1),It(),console.log("Win popup closed, ready for next spin")}),V(f,b)};ae(Es,f=>{n(me)>0&&n(ye)&&f(er)})}var Ss=g(Es,2);{var tr=f=>{var b=To(),l=g(y(b),8);x(b),M("click",l,()=>{_(dt,!1)}),V(f,b)};ae(Ss,f=>{n(dt)&&f(tr)})}var Ts=g(Ss,2);Jr(Ts,f=>Ot=f,()=>Ot);var ft=g(Ts,2),Ls=y(ft);{var sr=f=>{var b=Lo(),l=We(b),A=g(y(l),2),m=y(A,!0);x(A),x(l);var w=g(l,2),B=g(y(w),2),G=y(B,!0);x(B),x(w),le(j=>{F(m,n(pe)),F(G,j)},[()=>n(be).toFixed(2)]),V(f,b)};ae(Ls,f=>{n(z)&&f(sr)})}var Ct=g(Ls,2),Rs=g(y(Ct),2),ar=y(Rs,!0);x(Rs),x(Ct);var Ps=g(Ct,2),Is=g(y(Ps),2),rr=y(Is,!0);x(Is),x(Ps),x(ft);var Ft=g(ft,2),Os=g(y(Ft),2),Bs=y(Os),qt=g(Bs,2),nr=y(qt,!0);x(qt);var $s=g(qt,2),or=g($s,2);x(Os),x(Ft);var Cs=g(Ft,2),Mt=g(Cs,2),Fs=g(y(Mt),2);Fs.textContent=`v${$a}`;var Wt=g(Fs,2),qs=g(y(Wt),2),ir=y(qs,!0);x(qs),x(Wt);var jt=g(Wt,2),Ms=g(y(jt),2),lr=y(Ms,!0);x(Ms),x(jt);var Nt=g(jt,2),Ws=g(y(Nt),2),cr=y(Ws,!0);x(Ws),x(Nt);var zt=g(Nt,2),Ut=g(y(zt),2),dr=y(Ut);x(Ut),x(zt);var Dt=g(zt,2),Gt=g(y(Dt),2),fr=y(Gt);x(Gt),x(Dt);var Vt=g(Dt,2),js=g(y(Vt),2),pr=y(js,!0);x(js),x(Vt);var Ht=g(Vt,2),Ns=g(y(Ht),2),ur=y(Ns,!0);x(Ns),x(Ht);var Yt=g(Ht,2),zs=g(y(Yt),2),hr=y(zs);x(zs),x(Yt);var Us=g(Yt,2),Ds=g(Us,2),Fe=y(Ds),gr=y(Fe);x(Fe);var pt=g(Fe,2),Xt=g(pt,2);x(Ds),x(Mt);var Kt=g(Mt,2),vr=y(Kt);{var br=f=>{var b=Ro(),l=g(y(b),2),A=y(l);x(l);var m=g(l,2);x(b),le(()=>F(A,`${n(Ie)??""} left`)),M("click",m,Bt),V(f,b)},mr=f=>{var b=Io(),l=We(b),A=g(l,2);{var m=w=>{var B=Po(),G=g(y(B),2),j=g(G,2),U=g(j,2),$=g(U,2),Z=g($,2),k=g(Z,2);x(B),M("click",G,()=>et(10)),M("click",j,()=>et(100)),M("click",U,()=>et(1e3)),M("click",$,()=>et(1e4)),M("click",Z,()=>et(1e5)),M("click",k,()=>{_(Xe,!1)}),V(w,B)};ae(A,w=>{n(Xe)&&w(m)})}M("click",l,()=>{_(Xe,!n(Xe))}),V(f,b)};ae(vr,f=>{n(Ee)?f(br):f(mr,!1)})}x(Kt);var qe=g(Kt,2),yr=y(qe,!0);x(qe);var Gs=g(qe,2);oe(Gs,"style",`
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
  `),le((f,b,l,A,m,w)=>{oe(ft,"style",`
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
  border: 2px solid ${(n(z)?"#ff00ff":"#ffd700")??""};
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
  z-index: 1500;
  min-width: 180px;
`),F(ar,f),F(rr,n(X)),F(nr,n(X)),F(ir,b),F(lr,l),F(cr,A),oe(Ut,"style",`color: ${m??""};`),F(dr,`${n(St)??""}%`),oe(Gt,"style",`color: ${w??""};`),F(fr,`${n(Tt)??""}%`),F(pr,n(lt)),F(ur,n(Lt)),F(hr,`${n(Fa)??""}%`),Fe.disabled=n(te).length===0,oe(Fe,"style",`
        width: 100%;
        padding: 5px;
        background: ${(n(te).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(n(te).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(n(te).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(n(te).length>0?"1":"0.5")??""};
      `),F(gr,`Download Win Log (${n(te).length??""})`),pt.disabled=n(te).length===0,oe(pt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(n(te).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(n(te).length>0?"1":"0.5")??""};
      `),Xt.disabled=n(z),oe(Xt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(n(z)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(n(z)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(n(z)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(n(z)?"0.5":"1")??""};
      `),oe(qe,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(n(ke)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(n(ke)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),oe(qe,"title",n(ke)?"Mykistä äänet":"Laita äänet päälle"),F(yr,n(ke)?"🔊":"🔇")},[()=>n(ve).toLocaleString(),()=>n(Oe).toLocaleString(),()=>n(Be).toLocaleString(),()=>n(Ke).toLocaleString(),()=>parseFloat(n(St))>=95?"#00ff00":parseFloat(n(St))>=85?"#ffff00":"#ff6666",()=>parseFloat(n(Tt))>=30?"#00ff00":parseFloat(n(Tt))>=20?"#ffff00":"#ff6666"]),M("click",Bs,Ka),M("click",$s,Xa),M("click",or,Qa),M("click",Cs,()=>{_(dt,!n(dt))}),M("click",Us,Ja),M("click",Fe,Ma),M("click",pt,Wa),M("click",Xt,ja),M("click",qe,()=>{_(ke,!n(ke))}),M("click",Gs,ws),V(t,As),ha()}var $o=H('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),Co=H('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function Fo(t,e){pa(e,!1);let s=Zr(e,"isAuthenticated",12,!1),a=is(""),r=is(!1);const o="slot2024";function i(){n(a)===o?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(_(r,!0),_(a,""),setTimeout(()=>_(r,!1),3e3))}ua(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),Sr();var c=Er(),p=We(c);{var u=d=>{var h=Co(),v=y(h),E=g(y(v),4),S=y(E);un(S),Qr(2),x(E);var Y=g(E,2);{var N=T=>{var W=$o();V(T,W)};ae(Y,T=>{n(r)&&T(N)})}x(v),x(h),gn(S,()=>n(a),T=>_(a,T)),M("submit",E,vn(i)),V(d,h)};ae(p,d=>{s()||d(u)})}V(t,c),ha()}var qo=H('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),Mo=H("<!> <!>",1);function Ko(t){let e=is(!1);var s=Mo(),a=We(s);Fo(a,{get isAuthenticated(){return n(e)},set isAuthenticated(i){_(e,i)},$$legacy:!0});var r=g(a,2);{var o=i=>{var c=qo(),p=g(We(c),2);Bo(p,{}),V(i,c)};ae(r,i=>{n(e)&&i(o)})}V(t,s)}export{wa as A,ya as C,kn as R,yn as S,Aa as V,Ko as _,mn as u};
