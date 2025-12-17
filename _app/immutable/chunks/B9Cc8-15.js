const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./jz5QXDvk.js","./DNWEu6uq.js","./DEliLNnF.js","./DWgShhht.js","./C04N3yhf.js","./C2GHuDhf.js","./DGpT7YBN.js","./C7bb6J7m.js"])))=>i.map(i=>d[i]);
var _r=Object.defineProperty;var wr=(t,e,s)=>e in t?_r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var oe=(t,e,s)=>wr(t,typeof e!="symbol"?e+"":e,s);import{f as Ar,l as kr,t as Y,g as W,a as H,d as Er}from"./DRDKHArV.js";import{i as Sr}from"./Dw5_DM93.js";import{y as he,j as Tr,a8 as Lr,F as n,Q as Rr,aa as Pr,ab as Hs,h as Ys,e as Qt,k as at,l as Ir,ac as da,w as fa,ad as Or,q as pa,a7 as Br,U as $r,a2 as Xs,aq as Jt,z as Ks,ar as Cr,as as Fr,at as qr,o as Mr,au as Wr,av as jr,aw as Nr,ax as zr,b as Ur,ay as Dr,az as Gr,a6 as Vr,aA as Hr,aB as Yr,D as Xr,L as Kr,p as ua,ah as F,ag as ha,T as _,aC as ue,f as Ne,s as g,c as y,r as x,t as le,I as Zt,a as ga,aD as Qr,aE as is}from"./DWgShhht.js";import{_ as Qs,p as ce,i as re}from"./DEliLNnF.js";import{s as q}from"./4RjN9yQL.js";import{b as Jr,p as Zr}from"./B1_V_3zc.js";import{b as rt}from"./DF9Ww21S.js";import{e as Ae,E as I,a as en,C as fs,Q as mt,V as yt,N as es,D as se,H as tn,p as Le,a0 as De,a1 as Re,a2 as sn,w as we,a3 as ot,a4 as va,a5 as Ge,a6 as ge,a7 as xt,a8 as ba,a9 as an,aa as ts,ab as rn,ac as nn,y as gt}from"./DNWEu6uq.js";import{A as on,B as Js,G as ln,T as ma,a as cn,b as ss}from"./C04N3yhf.js";function Zs(t,e){return e}function dn(t,e,s,a){for(var r=[],o=e.length,i=0;i<o;i++)qr(e[i].e,r,!0);var c=o>0&&r.length===0&&s!==null;if(c){var p=s.parentNode;Mr(p),p.append(s),a.clear(),_e(t,e[0].prev,e[o-1].next)}Wr(r,()=>{for(var u=0;u<o;u++){var d=e[u];c||(a.delete(d.k),_e(t,d.prev,d.next)),jr(d.e,!c)}})}function ea(t,e,s,a,r,o=null){var i=t,c={flags:e,items:new Map,first:null};he&&Tr();var p=null,u=!1,d=Rr(()=>{var h=s();return Br(h)?h:h==null?[]:pa(h)});Lr(()=>{var h=n(d),v=h.length;if(u&&v===0)return;u=v===0;let E=!1;if(he){var S=i.data===Pr;S!==(v===0)&&(i=Hs(),Ys(i),Qt(!1),E=!0)}if(he){for(var X=null,z,T=0;T<v;T++){if(at.nodeType===8&&at.data===Ir){i=at,E=!0,Qt(!1);break}var j=h[T],J=a(j,T);z=ya(at,c,X,null,j,J,T,r,e,s),c.items.set(J,z),X=z}v>0&&Ys(Hs())}he||fn(h,c,i,r,e,a,s),o!==null&&(v===0?p?da(p):p=fa(()=>o(i)):p!==null&&Or(p,()=>{p=null})),E&&Qt(!0),n(d)}),he&&(i=at)}function fn(t,e,s,a,r,o,i){var c=t.length,p=e.items,u=e.first,d=u,h,v=null,E=[],S=[],X,z,T,j;for(j=0;j<c;j+=1){if(X=t[j],z=o(X,j),T=p.get(z),T===void 0){var J=d?d.e.nodes_start:s;v=ya(J,e,v,v===null?e.first:v.next,X,z,j,a,r,i),p.set(z,v),E=[],S=[],d=v.next;continue}if(pn(T,X,j),(T.e.f&Jt)!==0&&da(T.e),T!==d){if(h!==void 0&&h.has(T)){if(E.length<S.length){var Z=S[0],de;v=Z.prev;var it=E[0],ke=E[E.length-1];for(de=0;de<E.length;de+=1)ta(E[de],Z,s);for(de=0;de<S.length;de+=1)h.delete(S[de]);_e(e,it.prev,ke.next),_e(e,v,it),_e(e,ke,Z),d=Z,v=ke,j-=1,E=[],S=[]}else h.delete(T),ta(T,d,s),_e(e,T.prev,T.next),_e(e,T,v===null?e.first:v.next),_e(e,v,T),v=T;continue}for(E=[],S=[];d!==null&&d.k!==z;)(d.e.f&Jt)===0&&(h??(h=new Set)).add(d),S.push(d),d=d.next;if(d===null)continue;T=d}E.push(T),v=T,d=T.next}if(d!==null||h!==void 0){for(var lt=h===void 0?[]:pa(h);d!==null;)(d.e.f&Jt)===0&&lt.push(d),d=d.next;var G=lt.length;if(G>0){var He=null;dn(e,lt,He,p)}}Ks.first=e.first&&e.first.e,Ks.last=v&&v.e}function pn(t,e,s,a){Fr(t.v,e),t.i=s}function ya(t,e,s,a,r,o,i,c,p,u){var d=(p&Nr)!==0,h=(p&zr)===0,v=d?h?$r(r):Xs(r):r,E=(p&Cr)===0?i:Xs(i),S={i:E,v,k:o,a:null,e:null,prev:s,next:a};try{return S.e=fa(()=>c(t,v,E,u),he),S.e.prev=s&&s.e,S.e.next=a&&a.e,s===null?e.first=S:(s.next=S,s.e.next=S.e),a!==null&&(a.prev=S,a.e.prev=S.e),S}finally{}}function ta(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,r=e?e.e.nodes_start:s,o=t.e.nodes_start;o!==a;){var i=Ur(o);r.before(o),o=i}}function _e(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function un(t){if(he){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;ie(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var r=t.checked;ie(t,"checked",null),t.checked=r}}};t.__on_r=s,Dr(s),Ar()}}function ie(t,e,s,a){var r=t.__attributes??(t.__attributes={});he&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Gr]=s),s==null?t.removeAttribute(e):typeof s!="string"&&hn(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var sa=new Map;function hn(t){var e=sa.get(t.nodeName);if(e)return e;sa.set(t.nodeName,e=[]);for(var s,a=t,r=Element.prototype;r!==a;){s=Hr(a);for(var o in s)s[o].set&&e.push(o);a=Vr(a)}return e}function gn(t,e,s=e){var a=Yr();kr(t,"input",r=>{var o=r?t.defaultValue:t.value;if(o=as(t)?rs(o):o,s(o),a&&o!==(o=e())){var i=t.selectionStart,c=t.selectionEnd;t.value=o??"",c!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(c,t.value.length))}}),(he&&t.defaultValue!==t.value||Xr(e)==null&&t.value)&&s(as(t)?rs(t.value):t.value),Kr(()=>{var r=e();as(t)&&r===rs(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function as(t){var e=t.type;return e==="number"||e==="range"}function rs(t){return t===""?null:+t}function vn(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const ls=[];Ae.handleByNamedList(I.Environment,ls);async function bn(t){if(!t)for(let e=0;e<ls.length;e++){const s=ls[e];if(s.value.test()){await s.value.load();return}}}let nt;function mn(){if(typeof nt=="boolean")return nt;try{nt=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{nt=!1}return nt}var xa=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(xa||{});class yn{constructor(e){this.items=[],this._name=e}emit(e,s,a,r,o,i,c,p){const{name:u,items:d}=this;for(let h=0,v=d.length;h<v;h++)d[h][u](e,s,a,r,o,i,c,p);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const xn=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],_a=class wa extends en{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...xn,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await bn(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...wa.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof fs&&(a={container:a},s&&(mt(yt,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const r=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=r?a.clearColor:es.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const r=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==r&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=xa.ALL);const{clear:a,clearColor:r,target:o}=e;es.shared.setValue(r??this.background.colorRgba),s.renderTarget.clear(o,a,es.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new yn(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const r in this.runners)this.runners[r].add(a);return this}_addPipes(e,s){const a=s.reduce((r,o)=>(r[o.name]=o.value,r),{});e.forEach(r=>{const o=r.value,i=r.name,c=a[i];this.renderPipes[i]=new o(this,c?new c:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!mn())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};_a.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Aa=_a,vt;function _n(t){return vt!==void 0||(vt=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??Aa.defaultOptions.failIfMajorPerformanceCaveat};try{if(!se.get().getWebGLRenderingContext())return!1;let r=se.get().createCanvas().getContext("webgl",e);const o=!!((s=r==null?void 0:r.getContextAttributes())!=null&&s.stencil);if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,o}catch{return!1}})()),vt}let bt;async function wn(t={}){return bt!==void 0||(bt=await(async()=>{const e=se.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),bt}const aa=["webgl","webgpu","canvas"];async function An(t){let e=[];t.preference?(e.push(t.preference),aa.forEach(o=>{o!==t.preference&&e.push(o)})):e=aa.slice();let s,a={};for(let o=0;o<e.length;o++){const i=e[o];if(i==="webgpu"&&await wn()){const{WebGPURenderer:c}=await Qs(async()=>{const{WebGPURenderer:p}=await import("./jz5QXDvk.js");return{WebGPURenderer:p}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=c,a={...t,...t.webgpu};break}else if(i==="webgl"&&_n(t.failIfMajorPerformanceCaveat??Aa.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:c}=await Qs(async()=>{const{WebGLRenderer:p}=await import("./C7bb6J7m.js");return{WebGLRenderer:p}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=c,a={...t,...t.webgl};break}else if(i==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const r=new s;return await r.init(a),r}const ka="8.8.1";class Ea{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,ka)}static destroy(){}}Ea.extension=I.Application;class kn{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,ka)}destroy(){this._renderer=null}}kn.extension={type:[I.WebGLSystem,I.WebGPUSystem],name:"initHook",priority:-10};const Sa=class cs{constructor(...e){this.stage=new fs,e[0]!==void 0&&mt(yt,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await An(e),cs._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return mt(yt,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=cs._plugins.slice(0);a.reverse(),a.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Sa._plugins=[];let Ta=Sa;Ae.handleByList(I.Application,Ta._plugins);Ae.add(Ea);class La extends on{constructor(e,s){super();const{textures:a,data:r}=e;Object.keys(r.pages).forEach(o=>{const i=r.pages[parseInt(o,10)],c=a[i.id];this.pages.push({texture:c})}),Object.keys(r.chars).forEach(o=>{const i=r.chars[o],{frame:c,source:p}=a[i.page],u=new tn(i.x+c.x,i.y+c.y,i.width,i.height),d=new Le({source:p,frame:u});this.chars[o]={id:o.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:d}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){Js.install(e)}static uninstall(e){Js.uninstall(e)}}const ns={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const h in e){const v=e[h].match(/^[a-z]+/gm)[0],E=e[h].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),S={};for(const X in E){const z=E[X].split("="),T=z[0],j=z[1].replace(/"/gm,""),J=parseFloat(j),Z=isNaN(J)?j:J;S[T]=Z}s[v].push(S)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=s.info,[o]=s.common,[i]=s.distanceField??[];i&&(a.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),a.fontSize=parseInt(r.size,10),a.fontFamily=r.face,a.lineHeight=parseInt(o.lineHeight,10);const c=s.page;for(let h=0;h<c.length;h++)a.pages.push({id:parseInt(c[h].id,10)||0,file:c[h].file});const p={};a.baseLineOffset=a.lineHeight-parseInt(o.base,10);const u=s.char;for(let h=0;h<u.length;h++){const v=u[h],E=parseInt(v.id,10);let S=v.letter??v.char??String.fromCharCode(E);S==="space"&&(S=" "),p[E]=S,a.chars[S]={id:E,page:parseInt(v.page,10)||0,x:parseInt(v.x,10),y:parseInt(v.y,10),width:parseInt(v.width,10),height:parseInt(v.height,10),xOffset:parseInt(v.xoffset,10),yOffset:parseInt(v.yoffset,10),xAdvance:parseInt(v.xadvance,10),kerning:{}}}const d=s.kerning||[];for(let h=0;h<d.length;h++){const v=parseInt(d[h].first,10),E=parseInt(d[h].second,10),S=parseInt(d[h].amount,10);a.chars[p[E]].kerning[p[v]]=S}return a}},ra={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const o=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),c=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let u=0;u<o.length;u++)e.pages.push({id:parseInt(o[u].getAttribute("id"),10)||0,file:o[u].getAttribute("file")});const p={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let u=0;u<i.length;u++){const d=i[u],h=parseInt(d.getAttribute("id"),10);let v=d.getAttribute("letter")??d.getAttribute("char")??String.fromCharCode(h);v==="space"&&(v=" "),p[h]=v,e.chars[v]={id:h,page:parseInt(d.getAttribute("page"),10)||0,x:parseInt(d.getAttribute("x"),10),y:parseInt(d.getAttribute("y"),10),width:parseInt(d.getAttribute("width"),10),height:parseInt(d.getAttribute("height"),10),xOffset:parseInt(d.getAttribute("xoffset"),10),yOffset:parseInt(d.getAttribute("yoffset"),10),xAdvance:parseInt(d.getAttribute("xadvance"),10),kerning:{}}}for(let u=0;u<c.length;u++){const d=parseInt(c[u].getAttribute("first"),10),h=parseInt(c[u].getAttribute("second"),10),v=parseInt(c[u].getAttribute("amount"),10);e.chars[p[h]].kerning[p[d]]=v}return e}},na={test(t){return typeof t=="string"&&t.includes("<font>")?ra.test(se.get().parseXML(t)):!1},parse(t){return ra.parse(se.get().parseXML(t))}},En=[".xml",".fnt"],Sn={extension:{type:I.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof La,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},Tn={extension:{type:I.LoadParser,priority:De.Normal},name:"loadBitmapFont",test(t){return En.includes(Re.extname(t).toLowerCase())},async testParse(t){return ns.test(t)||na.test(t)},async parse(t,e,s){const a=ns.test(t)?ns.parse(t):na.parse(t),{src:r}=e,{pages:o}=a,i=[],c=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let h=0;h<o.length;++h){const v=o[h].file;let E=Re.join(Re.dirname(r),v);E=sn(E,r),i.push({src:E,data:c})}const p=await s.load(i),u=i.map(h=>p[h.src]);return new La({data:a,textures:u},r)},async load(t,e){return await(await se.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class Ln{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Rn={extension:{type:I.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Le),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((r,o)=>{s[a+(o===0?"":o+1)]=r})}),s}};async function Ra(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Pn={extension:{type:I.DetectionParser,priority:1},test:async()=>Ra("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},oa=["png","jpg","jpeg"],In={extension:{type:I.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...oa],remove:async t=>t.filter(e=>!oa.includes(e))},On="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function ps(t){return On?!1:document.createElement("video").canPlayType(t)!==""}const Bn={extension:{type:I.DetectionParser,priority:0},test:async()=>ps("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},$n={extension:{type:I.DetectionParser,priority:0},test:async()=>ps("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},Cn={extension:{type:I.DetectionParser,priority:0},test:async()=>ps("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},Fn={extension:{type:I.DetectionParser,priority:0},test:async()=>Ra("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class qn{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var i,c;let r=null,o=null;if(s.loadParser&&(o=this._parserHash[s.loadParser],o||we(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!o){for(let p=0;p<this.parsers.length;p++){const u=this.parsers[p];if(u.load&&((i=u.test)!=null&&i.call(u,e,s,this))){o=u;break}}if(!o)return we(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await o.load(e,s,this),a.parser=o;for(let p=0;p<this.parsers.length;p++){const u=this.parsers[p];u.parse&&u.parse&&await((c=u.testParse)==null?void 0:c.call(u,r,s,this))&&(r=await u.parse(r,s,this)||r,a.parser=u)}return r})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const r={},o=va(e),i=ot(e,u=>({alias:[u],src:u,data:{}})),c=i.length,p=i.map(async u=>{const d=Re.toAbsolute(u.src);if(!r[u.src])try{this.promiseCache[d]||(this.promiseCache[d]=this._getLoadPromiseAndParser(d,u)),r[u.src]=await this.promiseCache[d].promise,s&&s(++a/c)}catch(h){throw delete this.promiseCache[d],delete r[u.src],new Error(`[Loader.load] Failed to load ${d}.
${h}`)}});return await Promise.all(p),o?r[i[0].src]:r}async unload(e){const a=ot(e,r=>({alias:[r],src:r})).map(async r=>{var c,p;const o=Re.toAbsolute(r.src),i=this.promiseCache[o];if(i){const u=await i.promise;delete this.promiseCache[o],await((p=(c=i.parser)==null?void 0:c.unload)==null?void 0:p.call(c,u,r,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&we(`[Assets] loadParser name conflict "${s.name}"`):we("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function Ve(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const Mn=".json",Wn="application/json",jn={extension:{type:I.LoadParser,priority:De.Low},name:"loadJson",test(t){return Ve(t,Wn)||Ge(t,Mn)},async load(t){return await(await se.get().fetch(t)).json()}},Nn=".txt",zn="text/plain",Un={name:"loadTxt",extension:{type:I.LoadParser,priority:De.Low,name:"loadTxt"},test(t){return Ve(t,zn)||Ge(t,Nn)},async load(t){return await(await se.get().fetch(t)).text()}},Dn=["normal","bold","100","200","300","400","500","600","700","800","900"],Gn=[".ttf",".otf",".woff",".woff2"],Vn=["font/ttf","font/otf","font/woff","font/woff2"],Hn=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Yn(t){const e=Re.extname(t),r=Re.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(c=>c.charAt(0).toUpperCase()+c.slice(1));let o=r.length>0;for(const c of r)if(!c.match(Hn)){o=!1;break}let i=r.join(" ");return o||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const Xn=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function Kn(t){return Xn.test(t)?t:encodeURI(t)}const Qn={extension:{type:I.LoadParser,priority:De.Low},name:"loadWebFont",test(t){return Ve(t,Vn)||Ge(t,Gn)},async load(t,e){var a,r,o;const s=se.get().getFontFaceSet();if(s){const i=[],c=((a=e.data)==null?void 0:a.family)??Yn(t),p=((o=(r=e.data)==null?void 0:r.weights)==null?void 0:o.filter(d=>Dn.includes(d)))??["normal"],u=e.data??{};for(let d=0;d<p.length;d++){const h=p[d],v=new FontFace(c,`url(${Kn(t)})`,{...u,weight:h});await v.load(),s.add(v),i.push(v)}return ge.set(`${c}-and-url`,{url:t,fontFaces:i}),i.length===1?i[0]:i}return we("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{ge.remove(`${e.family}-and-url`),se.get().getFontFaceSet().delete(e)})}};function us(t,e=1){var a;const s=(a=xt.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function hs(t,e,s){t.label=s,t._sourceOrigin=s;const a=new Le({source:t,label:s}),r=()=>{delete e.promiseCache[s],ge.has(s)&&ge.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(we("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),a.once("destroy",()=>{t.destroyed||(we("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),a}const Jn=".svg",Zn="image/svg+xml",eo={extension:{type:I.LoadParser,priority:De.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return Ve(t,Zn)||Ge(t,Jn)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?so(t):to(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function to(t,e,s,a){var z,T,j;const o=await(await se.get().fetch(t)).blob(),i=URL.createObjectURL(o),c=new Image;c.src=i,c.crossOrigin=a,await c.decode(),URL.revokeObjectURL(i);const p=document.createElement("canvas"),u=p.getContext("2d"),d=((z=e.data)==null?void 0:z.resolution)||us(t),h=((T=e.data)==null?void 0:T.width)??c.width,v=((j=e.data)==null?void 0:j.height)??c.height;p.width=h*d,p.height=v*d,u.drawImage(c,0,0,h*d,v*d);const{parseAsGraphicsContext:E,...S}=e.data??{},X=new ba({resource:p,alphaMode:"premultiply-alpha-on-upload",resolution:d,...S});return hs(X,s,t)}async function so(t){const s=await(await se.get().fetch(t)).text(),a=new ln;return a.svg(s),a}const ao=`(function () {
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
`;let ze=null,ds=class{constructor(){ze||(ze=URL.createObjectURL(new Blob([ao],{type:"application/javascript"}))),this.worker=new Worker(ze)}};ds.revokeObjectURL=function(){ze&&(URL.revokeObjectURL(ze),ze=null)};const ro=`(function () {
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
`;let Ue=null;class Pa{constructor(){Ue||(Ue=URL.createObjectURL(new Blob([ro],{type:"application/javascript"}))),this.worker=new Worker(Ue)}}Pa.revokeObjectURL=function(){Ue&&(URL.revokeObjectURL(Ue),Ue=null)};let ia=0,os;class no{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new ds;s.addEventListener("message",a=>{s.terminate(),ds.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){os===void 0&&(os=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<os&&(this._createdWorkers++,e=new Pa().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((r,o)=>{this._queue.push({id:e,arguments:s,resolve:r,reject:o})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[ia]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:ia++,id:a})}}const la=new no,oo=[".jpeg",".jpg",".png",".webp",".avif"],io=["image/jpeg","image/png","image/webp","image/avif"];async function lo(t,e){var r;const s=await se.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const Ia={name:"loadTextures",extension:{type:I.LoadParser,priority:De.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return Ve(t,io)||Ge(t,oo)},async load(t,e,s){var o;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await la.isImageBitmapSupported()?a=await la.loadImageBitmap(t,e):a=await lo(t,e):a=await new Promise((i,c)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?i(a):(a.onload=()=>{i(a)},a.onerror=c)});const r=new ba({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((o=e.data)==null?void 0:o.resolution)||us(t),...e.data});return hs(r,s,t)},unload(t){t.destroy(!0)}},Oa=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],co=Oa.map(t=>`video/${t.substring(1)}`);function fo(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=uo(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function po(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",r),t.load();function a(){o(),e()}function r(i){o(),s(i)}function o(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",r)}})}function uo(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const ho={name:"loadVideo",extension:{type:I.LoadParser,name:"loadVideo"},test(t){const e=Ve(t,co),s=Ge(t,Oa);return e||s},async load(t,e,s){var p,u;const a={...ts.defaultOptions,resolution:((p=e.data)==null?void 0:p.resolution)||us(t),alphaMode:((u=e.data)==null?void 0:u.alphaMode)||await an(),...e.data},r=document.createElement("video"),o={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(o).forEach(d=>{const h=o[d];h!==void 0&&r.setAttribute(d,h)}),a.muted===!0&&(r.muted=!0),fo(r,t,a.crossorigin);const i=document.createElement("source");let c;if(t.startsWith("data:"))c=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const d=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();c=ts.MIME_TYPES[d]||`video/${d}`}return i.src=t,c&&(i.type=c),new Promise(d=>{const h=async()=>{const v=new ts({...a,resource:r});r.removeEventListener("canplay",h),e.data.preload&&await po(r),d(hs(v,s,t))};r.addEventListener("canplay",h),r.appendChild(i)})},unload(t){t.destroy(!0)}},Ba={extension:{type:I.ResolveParser,name:"resolveTexture"},test:Ia.test,parse:t=>{var e;return{resolution:parseFloat(((e=xt.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},go={extension:{type:I.ResolveParser,priority:-2,name:"resolveJson"},test:t=>xt.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:Ba.parse};class vo{constructor(){this._detections=[],this._initialized=!1,this.resolver=new xt,this.loader=new qn,this.cache=ge,this._backgroundLoader=new Ln(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var o,i;if(this._initialized){we("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let c=e.manifest;typeof c=="string"&&(c=await this.load(c)),this.resolver.addManifest(c)}const s=((o=e.texturePreference)==null?void 0:o.resolution)??1,a=typeof s=="number"?[s]:s,r=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=va(e),r=ot(e).map(c=>{if(typeof c!="string"){const p=this.resolver.getAlias(c);return p.some(u=>!this.resolver.hasKey(u))&&this.add(c),Array.isArray(p)?p[0]:p}return this.resolver.hasKey(c)||this.add({alias:c,src:c}),c}),o=this.resolver.resolve(r),i=await this._mapLoadToResolve(o,s);return a?i[r[0]]:i}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const r=this.resolver.resolveBundle(e),o={},i=Object.keys(r);let c=0,p=0;const u=()=>{s==null||s(++c/p)},d=i.map(h=>{const v=r[h];return p+=Object.keys(v).length,this._mapLoadToResolve(v,u).then(E=>{o[h]=E})});return await Promise.all(d),a?o[e[0]]:o}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return ge.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=ge.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(a,s);this._backgroundLoader.active=!0;const o={};return a.forEach(i=>{const c=r[i.src],p=[i.src];i.alias&&p.push(...i.alias),p.forEach(u=>{o[u]=c}),ge.set(p,c)}),o}async unload(e){this._initialized||await this.init();const s=ot(e).map(r=>typeof r!="string"?r.src:r),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=ot(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(r=>this._unloadFromResolved(s[r]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{ge.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,r)=>s.indexOf(a)===r),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const je=new vo;Ae.handleByList(I.LoadParser,je.loader.parsers).handleByList(I.ResolveParser,je.resolver.parsers).handleByList(I.CacheParser,je.cache.parsers).handleByList(I.DetectionParser,je.detections);Ae.add(Rn,In,Pn,Fn,Bn,$n,Cn,jn,Un,Qn,eo,Ia,ho,Tn,Sn,Ba,go);const ca={loader:I.LoadParser,resolver:I.ResolveParser,cache:I.CacheParser,detection:I.DetectionParser};Ae.handle(I.Asset,t=>{const e=t.ref;Object.entries(ca).filter(([s])=>!!e[s]).forEach(([s,a])=>Ae.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(ca).filter(s=>!!e[s]).forEach(s=>Ae.remove(e[s]))});class bo extends rn{constructor(e,s){const{text:a,resolution:r,style:o,anchor:i,width:c,height:p,roundPixels:u,...d}=e;super({...d}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=o,this.resolution=r??null,this.allowChildren=!1,this._anchor=new nn({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=u??!1,c!==void 0&&(this.width=c),p!==void 0&&(this.height=p)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,r=-s*this.anchor.x;let o=0;return e.x>=r&&e.x<=r+s&&(o=-a*this.anchor.y,e.y>=o&&e.y<=o+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function mo(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(mt(yt,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class yo extends bo{constructor(...e){const s=mo(e,"Text");super(s,ma),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=cn.measureText(this._text,this._style),{width:r,height:o}=a;e.minX=-s._x*r,e.maxX=e.minX+r,e.minY=-s._y*o,e.maxY=e.minY+o}}var xo=Y('<p style="color: red;" class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Error:</strong> </p>'),_o=Y('<div class="svelte-1t2q5b9"> </div>'),wo=Y('<details class="svelte-1t2q5b9"><summary class="svelte-1t2q5b9"> </summary> <!></details>'),Ao=Y(`<div style="
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
  " class="svelte-1t2q5b9"><h3 class="svelte-1t2q5b9">🎰 Oma-peli Debug</h3> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Status:</strong> </p> <!> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Base:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">BG URL:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Sample:</strong> </p> <!></div>`),ko=Y('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-1t2q5b9"> </div>'),Eo=Y('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-1t2q5b9"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-1t2q5b9"> </span></div>'),So=Y(`<div style="
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
      " class="svelte-1t2q5b9">Jatka pelaamista</button></div>`),To=Y(`<div style="
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
      " class="svelte-1t2q5b9">Sulje</button></div>`),Lo=Y('<div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #ff00ff; font-size: 16px; animation: pulse 1s infinite;" class="svelte-1t2q5b9"><span class="svelte-1t2q5b9">🎰 FREE SPINS:</span> <span class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-top: 1px solid #555; padding-top: 8px;" class="svelte-1t2q5b9"><span style="color: #fff; font-size: 14px;" class="svelte-1t2q5b9">Total Won:</span> <span style="color: #00ff00; font-size: 14px;" class="svelte-1t2q5b9"> </span></div>',1),Ro=Y(`<div style="
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
        " class="svelte-1t2q5b9">⏹ STOP</button></div>`),Po=Y(`<div style="
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
          " class="svelte-1t2q5b9">Cancel</button></div>`),Io=Y(`<button style="
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
      " class="svelte-1t2q5b9">🔄 AUTOPLAY</button> <!>`,1),Oo=Y(`<!> <!> <!> <div style="
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
" class="svelte-1t2q5b9"><!></div> <button class="svelte-1t2q5b9"> </button> <button title="SPIN" class="svelte-1t2q5b9"></button>`,1);function Bo(t,e){ua(e,!0);const s=13,a=1445,r=1e3,o=1.75,i=-30,c=-10,p=160,u=0,d=720,h=750,v=.8,E=50,S=30,X=-40,z=1,T="height",J=Math.round(100*o),Z=Math.round(J*(700/760)),it=Z+10,ke=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],G=typeof window<"u"&&window.location.hostname.includes("github.io")?"/web-sdk/oma-peli/symbols":`${rt}/symbols`,He={a:`${G}/Blue_hotrod.jpg`,b:`${G}/Blue_jacket.jpg`,c:`${G}/Blue_rollers.jpg`,d:`${G}/Blue_speakers.jpg`,e:`${G}/Premium_blonde.jpg`,f:`${G}/Premium_brunette.jpg`,g:`${G}/Premium_rocker.jpg`,h:`${G}/New_Wild.jpg`,i:`${G}/Red_burger.jpg`,j:`${G}/Red_fries.jpg`,k:`${G}/Red_milkshake.jpg`,l:`${G}/Scatter.jpg`,emptyslot:`${G}/Emptyslot.jpg`},_t=`${G}/bg_base.jpg`,gs=`${G}/ReelFrames.png`,vs=`${G}/RockABillyReels_logo.png`,$a={spin:`${rt}/sounds/spin.mp3`,stop:`${rt}/sounds/stop.mp3`,win:`${rt}/sounds/win.mp3`},Ca="1.0.6";let Ee=F(!0),wt={},ct=null,Pe=null,Ye=null,Xe=null,Ke=F("Initializing..."),Ie=F(""),ne=[],ve=F(1e3),K=F(10);const bs=1,At=100;let Se=F(!1),Oe=F(0),Qe=F(!1),Fa=F(0),Te=!1,fe=null,kt=!1,Be=F(0),$e=F(0),Je=F(0),Et=F(0),St=Zt(()=>n($e)>0?(n(Je)/n($e)*100).toFixed(2):"0.00"),Tt=Zt(()=>n(Be)>0?(n(Et)/n(Be)*100).toFixed(2):"0.00"),U=F(!1),pe=F(0),be=F(0),dt=F(0),Lt=F(0),ft=F(0),Rt=F(0),qa=Zt(()=>n(ft)>0?(n(Rt)/n(ft)*100).toFixed(2):"0.00"),ae=F(ce([]));function Ma(f,b,l){const A=new Date().toLocaleString("fi-FI");let m=`
${"=".repeat(60)}
`;m+=`ROUND #${f} - ${A}
`,m+=`Mode: ${n(U)?"FREE SPINS":"BASE GAME"}
`,m+=`${"=".repeat(60)}
`,b.forEach((w,O)=>{m+=`
Win ${O+1}:
`,m+=`  Symbol: ${w.symbol} (${ws[w.symbol]})
`,m+=`  Count: ${w.count} symbols
`,m+=`  Multiplier: ${w.multiplier}x
`,m+=`  Payout: ${w.payout.toFixed(2)}
`,m+=`  Positions: [${w.positions.join(", ")}]
`}),m+=`
${"─".repeat(60)}
`,m+=`TOTAL WIN: ${l.toFixed(2)}
`,m+=`${"=".repeat(60)}
`,n(ae).push(m)}function Wa(){const f=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${n(ae).join(`
`)}`,b=new Blob([f],{type:"text/plain"}),l=URL.createObjectURL(b),A=document.createElement("a");A.href=l,A.download=`win-log-${Date.now()}.txt`,A.click(),URL.revokeObjectURL(l)}function ja(){_(ae,ce([]))}function Na(){n(U)||(_(U,!0),_(pe,10),_(be,0),ue(dt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."))}const ms={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25};function ys(f){if(f===6)return Math.random()<.55?"h":"emptyslot";const b=Math.random();let l=0;const A=ke.filter(w=>w!=="h"),m=A.reduce((w,O)=>w+ms[O],0);for(const w of A)if(l+=ms[w]/m,b<l)return w;return"k"}function xs(){const f=[];for(let b=0;b<s;b++){let l=ys(b);n(U)&&(l==="k"?l="f":l==="j"?l="e":l==="i"&&(l="g")),f.push(l),ue(ft),l==="emptyslot"&&ue(Rt)}return f}function _s(f){return f<3?{col:0,row:f}:f<6?{col:1,row:f-3}:f===6?{col:2,row:0}:f<10?{col:3,row:f-7}:{col:4,row:f-10}}function Ze(f,b){return f===0?b:f===1?3+b:f===2?6:f===3?7+b:f===4?10+b:-1}function za(){if(n(U)){const f=Math.random();return f<.7?3:f<.92?5:10}else{const f=Math.random();return f<.7?1:f<.92?2:3}}const Ua={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function Da(){var ee;const f=[],b=[];for(let k=0;k<s;k++)et[k]==="l"&&b.push(k);if(b.length>=5){const k=b.length;_(pe,n(pe)+k),n(U)?console.log(`🎰 FREE SPINS RETRIGGERED! +${k} FREE SPINS! Total: ${n(pe)}`):(_(U,!0),_(be,0),ue(dt),console.log(`🎰 FREE SPINS TRIGGERED! ${b.length} scatters = ${k} FREE SPINS!`)),f.push({symbol:"l",count:b.length,payout:0,positions:b,multiplier:1})}const l=[];for(let k=0;k<3;k++)for(let L=0;L<3;L++)for(let R=0;R<1;R++)for(let P=0;P<3;P++)for(let C=0;C<3;C++){const $=[Ze(0,k),Ze(1,L),Ze(2,R),Ze(3,P),Ze(4,C)];l.push($)}console.log(`Generated ${l.length} possible paths (should be 81)`);const A=[];for(const k of l){const L=k.map($=>et[$]);if(L[0]==="emptyslot"||L[0]==="l")continue;let R=null;for(let $=0;$<L.length;$++)if(L[$]!=="h"&&L[$]!=="emptyslot"&&L[$]!=="l"){R=L[$];break}if(!R)continue;let P=0;const C=new Set;for(let $=0;$<k.length;$++){const xe=k[$],{col:We}=_s(xe),te=L[$];(te===R||te==="h")&&C.add(We)}for(let $=0;$<5&&C.has($);$++)P++;if(P>=3){const xe=k[0]%3;A.push({symbol:R,length:P,path:k.slice(0,P),startRow:xe})}}const m=[],w=new Map;for(const k of A){const L=`${k.symbol}-${k.path.join(",")}`;w.has(L)||w.set(L,[]),w.get(L).push(k)}for(const[k,L]of w.entries()){const R=Math.max(...L.map(C=>C.length)),P=L.find(C=>C.length===R);P&&m.push(P)}const O=[],V=new Map;for(const k of m)V.has(k.symbol)||V.set(k.symbol,[]),V.get(k.symbol).push(k);const N=[];for(const[k,L]of V.entries()){const R=Math.max(...L.map(C=>C.length)),P=L.filter(C=>C.length===R);N.push(...P)}const D=new Map;for(const k of N){const L=`${k.symbol}-${k.length}`;D.has(L)||D.set(L,[]),D.get(L).push(k)}const B=N.length>0?za():1;for(const[k,L]of D.entries()){const R=L[0],P=(ee=Ua[R.symbol])==null?void 0:ee[R.length];if(P!==void 0&&P>0){const C=new Map;for(const te of L)for(let Q=0;Q<te.length;Q++)C.has(Q)||C.set(Q,new Set),C.get(Q).add(te.path[Q]);let $=1;for(let te=0;te<R.length;te++){const Q=C.get(te);$*=Q?Q.size:1}const xe=P*n(K)*$*B;console.log(`  ${R.length}x${R.symbol}: ${$} ways × ${P}x × ${n(K)} bet × ${B} mult = ${xe}`);const We=new Set;for(const te of L)te.path.forEach(Q=>We.add(Q));O.push({symbol:R.symbol,count:R.length,payout:xe,positions:Array.from(We),multiplier:B})}}return f.push(...O),f}let me=F(0),Ce=F(ce([])),ye=F(!1),pt=F(!1);const ws={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function Pt(f){if(!n(Ee)||!wt[f])return;const b=wt[f];b.currentTime=0,b.play().catch(l=>{console.warn("Äänen toisto epäonnistui:",f,l)})}function Ga(f){tt.forEach(b=>M.stage.removeChild(b)),tt=[],f.forEach(b=>{b.positions.forEach(l=>{const A=Fe[l],m=new ss().rect(0,0,J,Z).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});m.x=A.container.x,m.y=A.container.y,M.stage.addChild(m),tt.push(m);let w=0,O=1;const V=.05;M.ticker.add(()=>{w+=O*V,w>=.4&&(O=-1),w<=0&&(O=1),m.alpha=.5+w})})})}function It(){tt.forEach(f=>M.stage.removeChild(f)),tt=[]}let et=xs(),Ot,M,Fe=[],tt=[];class Va{constructor(b,l){oe(this,"index");oe(this,"container");oe(this,"offset",0);oe(this,"speed",0);oe(this,"targetSpeed",30);oe(this,"state","idle");oe(this,"stopDelay",0);oe(this,"bounceOffset",0);oe(this,"bounceSpeed",0);oe(this,"bounceFrames",0);this.index=b,this.container=l}start(b){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=b}update(){this.state!=="idle"&&(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"&&(this.speed*=.92,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,Pt("stop"))),this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=it&&(this.offset=0,et[this.index]=ys(this.index))))}draw(){const b=this.container;b.removeChildren();const l=et[this.index];if(!l||!ct||!ct[l])return;const A=ct[l];if(!A)return;const m=this.offset+this.bounceOffset,w=new gt(A);w.width=J,w.height=Z,w.x=0,w.y=m,b.addChild(w)}}ha(async()=>{M=new Ta,await M.init({width:a,height:r,background:"#001a33"}),Ot.appendChild(M.canvas);const f={};try{_(Ke,"Loading background and UI images..."),ne.push(`Loading background: ${_t}`),ne.push(`Loading reel frames: ${gs}`),ne.push(`Loading logo: ${vs}`),await je.load([{alias:"background",src:_t},{alias:"reelframes",src:gs},{alias:"logo",src:vs}]),Pe=Le.from("background"),Ye=Le.from("reelframes"),Xe=Le.from("logo"),console.log("✅ Background texture created:",Pe.width,"x",Pe.height),console.log("✅ Reel frames texture created:",Ye.width,"x",Ye.height),console.log("✅ Logo texture created:",Xe.width,"x",Xe.height),ne.push("✅ All UI images loaded"),_(Ke,"Loading symbols...");const l=[];for(const A of ke)l.push({alias:A,src:He[A]});await je.load(l);for(const A of ke){const m=He[A];ne.push(`Loading symbol ${A}: ${m}`);try{const w=Le.from(A);f[A]=w,console.log(`✅ Symbol ${A} loaded:`,w.width,"x",w.height),ne.push(`✅ Symbol ${A} loaded`)}catch(w){const O=`❌ Failed to load symbol ${A} from ${m}: ${w}`;throw ne.push(O),console.error(O),new Error(O)}}ct=f,_(Ke,"Assets loaded successfully!")}catch(l){_(Ie,`Asset loading failed: ${l}`),ne.push(n(Ie)),console.error(n(Ie));return}console.log("Ladataan ääniefektit...");for(const[l,A]of Object.entries($a)){const m=new Audio;m.src=A,m.preload="auto",m.volume=.7,m.load(),m.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${A} (käytetään hiljaista placeholderia)`)}),wt[l]=m}if(console.log("Taustakuva ladattu, tekstuuri:",Pe),Pe){const l=new gt(Pe);M.renderer.width/M.renderer.height;const A=l.texture.width/l.texture.height;let m;m=M.renderer.height/l.texture.height,m*=z,l.scale.set(m),l.x=(M.renderer.width-l.width)/2,l.y=(M.renderer.height-l.height)/2+X,M.stage.addChild(l),console.log("Taustakuva lisätty:",T,"mode, size:",l.width.toFixed(0),"x",l.height.toFixed(0),"image aspect:",A.toFixed(2),"scale:",m.toFixed(2),"pos:",l.x.toFixed(0),l.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(l=>({x:l.x+i,y:l.y+c})),Fe=[];for(let l=0;l<s;l++){const A=_s(l),m=A.col,w=A.row,O=300+m*(J+20),V=250+w*(Z+15),N=l===6?O+u:O,D=l===6?V+p:V,B=new fs;B.x=N+i,B.y=D+c;const ee=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],k=new ss().rect(0,0,J,Z).fill({color:ee[l],alpha:.3});k.x=B.x,k.y=B.y,M.stage.addChild(k);const L=new ma({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),R=new yo({text:l.toString(),style:L});R.x=B.x+5,R.y=B.y+5,M.stage.addChild(R);const P=new ss().rect(0,0,J,Z).fill(16777215);P.x=B.x,P.y=B.y,B.mask=P,M.stage.addChild(P),M.stage.addChild(B),Fe.push(new Va(l,B))}if(Ye){const l=new gt(Ye);l.scale.set(1),l.x=250,l.y=200,M.stage.addChild(l),console.log("Reel frames lisätty:",l.width.toFixed(0),"x",l.height.toFixed(0))}if(Xe){const l=new gt(Xe);l.scale.set(v),l.x=(M.renderer.width-l.width)/2+E,l.y=S,M.stage.addChild(l),console.log("Logo lisätty päällimmäiseen layeriin:",l.width.toFixed(0),"x",l.height.toFixed(0))}M.ticker.add(Ha)});function Ha(){for(const f of Fe)f.update(),f.draw();if(!n(ye)&&!kt&&Fe.every(f=>f.state==="stopped")){kt=!0;const f=Da();console.log(`Checking wins, found ${f.length} wins`),f.length>0?(_(Ce,ce(f)),_(me,ce(f.reduce((b,l)=>b+l.payout,0))),Ma(n(Be),f,n(me)),Ya(n(me)),_(ye,!0),_(Fa,ce(Date.now())),console.log(`🎉 VOITTO! ${n(me)} pistettä! Uusi saldo: ${n(ve)}`),console.log(`isShowingWin set to: ${n(ye)}, totalWin: ${n(me)}`),f.forEach(b=>{const l=b.multiplier?` (${b.multiplier}x multiplier)`:"";console.log(`${b.count}x ${b.symbol} = ${b.payout} pistettä${l}`)}),Ga(f),Pt("win"),n(Se)&&!Te&&(Te=!0,fe=window.setTimeout(()=>{n(ye)&&n(Se)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),_(ye,!1),It()),fe=window.setTimeout(()=>{Te=!1,$t()},200)},1500))):(console.log("No wins found this spin"),n(Se)&&!Te&&(Te=!0,fe=window.setTimeout(()=>{Te=!1,$t()},1e3))),n(U)&&n(pe)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${n(be)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${n(be).toFixed(2)}`),_(U,!1),_(be,0)},2e3))}}function As(){if(n(U)&&n(pe)>0)ue(pe,-1),ue(Lt),console.log(`🎰 FREE SPIN! Remaining: ${n(pe)}`);else if(!n(U)){if(n(ve)<n(K)){alert(`Not enough credits! Balance: ${n(ve)}, Bet: ${n(K)}`),Bt();return}_(ve,n(ve)-n(K)),ue(Be),_($e,n($e)+n(K))}fe!==null&&(clearTimeout(fe),fe=null),_(Ce,ce([])),_(me,0),_(ye,!1),kt=!1,It(),et=xs(),Fe.forEach((f,b)=>f.start(60+b*10)),Pt("spin")}function Ya(f){_(ve,n(ve)+f),_(Je,n(Je)+f),n(U)&&_(be,n(be)+f),f>0&&ue(Et)}function Xa(){n(K)<At&&_(K,ce(Math.min(n(K)+1,At)))}function Ka(){n(K)>bs&&_(K,ce(Math.max(n(K)-1,bs)))}function Qa(){_(K,At)}function st(f){_(Se,!0),_(Oe,ce(f)),_(Qe,!1),$t()}function Bt(){_(Se,!1),_(Oe,0),Te=!1,fe!==null&&(clearTimeout(fe),fe=null)}function $t(){if(!n(Se)||n(Oe)<=0){Bt();return}console.log(`Autoplay: Starting spin ${n(Oe)} rounds left`),As(),ue(Oe,-1)}function Ja(){confirm("Reset all statistics?")&&(_(Be,0),_($e,0),_(Je,0),_(Et,0),_(dt,0),_(Lt,0),_(ft,0),_(Rt,0))}var ks=Oo(),Es=Ne(ks);{var Za=f=>{var b=Ao(),l=g(y(b),2),A=g(y(l));x(l);var m=g(l,2);{var w=R=>{var P=xo(),C=g(y(P));x(P),le(()=>q(C,` ${n(Ie)??""}`)),H(R,P)};re(m,R=>{n(Ie)&&R(w)})}var O=g(m,2),V=g(y(O));V.nodeValue=` ${rt??""}`,x(O);var N=g(O,2),D=g(y(N));D.nodeValue=` ${_t??""}`,x(N);var B=g(N,2),ee=g(y(B));x(B);var k=g(B,2);{var L=R=>{var P=wo(),C=y(P),$=y(C);x(C);var xe=g(C,2);ea(xe,17,()=>ne,Zs,(We,te)=>{var Q=_o(),xr=y(Q,!0);x(Q),le(()=>q(xr,n(te))),H(We,Q)}),x(P),le(()=>q($,`Log (${ne.length??""})`)),H(R,P)};re(k,R=>{ne.length>0&&R(L)})}x(b),le(()=>{q(A,` ${n(Ke)??""}`),q(ee,` ${He.a??""}`)}),H(f,b)};re(Es,f=>{(n(Ke)!=="Assets loaded successfully!"||n(Ie))&&f(Za)})}var Ss=g(Es,2);{var er=f=>{var b=So(),l=g(y(b),2),A=y(l);x(l);var m=g(l,2);ea(m,17,()=>n(Ce),Zs,(N,D)=>{var B=ko(),ee=y(B);x(B),le(k=>q(ee,`${n(D).count??""} × ${ws[n(D).symbol]??""} = ${k??""} pistettä`),[()=>n(D).payout.toFixed(2)]),H(N,B)});var w=g(m,2);{var O=N=>{var D=Eo(),B=y(D),ee=y(B);x(B),x(D),le(()=>q(ee,`✨ ${n(Ce)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),H(N,D)};re(w,N=>{n(Ce).length>0&&n(Ce)[0].multiplier>1&&N(O)})}var V=g(w,2);x(b),le(()=>q(A,`${n(me)??""} pistettä`)),W("click",V,()=>{_(ye,!1),It(),console.log("Win popup closed, ready for next spin")}),H(f,b)};re(Ss,f=>{n(me)>0&&n(ye)&&f(er)})}var Ts=g(Ss,2);{var tr=f=>{var b=To(),l=g(y(b),8);x(b),W("click",l,()=>{_(pt,!1)}),H(f,b)};re(Ts,f=>{n(pt)&&f(tr)})}var Ls=g(Ts,2);Jr(Ls,f=>Ot=f,()=>Ot);var ut=g(Ls,2),Rs=y(ut);{var sr=f=>{var b=Lo(),l=Ne(b),A=g(y(l),2),m=y(A,!0);x(A),x(l);var w=g(l,2),O=g(y(w),2),V=y(O,!0);x(O),x(w),le(N=>{q(m,n(pe)),q(V,N)},[()=>n(be).toFixed(2)]),H(f,b)};re(Rs,f=>{n(U)&&f(sr)})}var Ct=g(Rs,2),Ps=g(y(Ct),2),ar=y(Ps,!0);x(Ps),x(Ct);var Is=g(Ct,2),Os=g(y(Is),2),rr=y(Os,!0);x(Os),x(Is),x(ut);var Ft=g(ut,2),Bs=g(y(Ft),2),$s=y(Bs),qt=g($s,2),nr=y(qt,!0);x(qt);var Cs=g(qt,2),or=g(Cs,2);x(Bs),x(Ft);var Fs=g(Ft,2),Mt=g(Fs,2),qs=g(y(Mt),2);qs.textContent=`v${Ca}`;var Wt=g(qs,2),Ms=g(y(Wt),2),ir=y(Ms,!0);x(Ms),x(Wt);var jt=g(Wt,2),Ws=g(y(jt),2),lr=y(Ws,!0);x(Ws),x(jt);var Nt=g(jt,2),js=g(y(Nt),2),cr=y(js,!0);x(js),x(Nt);var zt=g(Nt,2),Ut=g(y(zt),2),dr=y(Ut);x(Ut),x(zt);var Dt=g(zt,2),Gt=g(y(Dt),2),fr=y(Gt);x(Gt),x(Dt);var Vt=g(Dt,2),Ns=g(y(Vt),2),pr=y(Ns,!0);x(Ns),x(Vt);var Ht=g(Vt,2),zs=g(y(Ht),2),ur=y(zs,!0);x(zs),x(Ht);var Yt=g(Ht,2),Us=g(y(Yt),2),hr=y(Us);x(Us),x(Yt);var Ds=g(Yt,2),Gs=g(Ds,2),qe=y(Gs),gr=y(qe);x(qe);var ht=g(qe,2),Xt=g(ht,2);x(Gs),x(Mt);var Kt=g(Mt,2),vr=y(Kt);{var br=f=>{var b=Ro(),l=g(y(b),2),A=y(l);x(l);var m=g(l,2);x(b),le(()=>q(A,`${n(Oe)??""} left`)),W("click",m,Bt),H(f,b)},mr=f=>{var b=Io(),l=Ne(b),A=g(l,2);{var m=w=>{var O=Po(),V=g(y(O),2),N=g(V,2),D=g(N,2),B=g(D,2),ee=g(B,2),k=g(ee,2);x(O),W("click",V,()=>st(10)),W("click",N,()=>st(100)),W("click",D,()=>st(1e3)),W("click",B,()=>st(1e4)),W("click",ee,()=>st(1e5)),W("click",k,()=>{_(Qe,!1)}),H(w,O)};re(A,w=>{n(Qe)&&w(m)})}W("click",l,()=>{_(Qe,!n(Qe))}),H(f,b)};re(vr,f=>{n(Se)?f(br):f(mr,!1)})}x(Kt);var Me=g(Kt,2),yr=y(Me,!0);x(Me);var Vs=g(Me,2);ie(Vs,"style",`
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
  `),le((f,b,l,A,m,w)=>{ie(ut,"style",`
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
  border: 2px solid ${(n(U)?"#ff00ff":"#ffd700")??""};
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
  z-index: 1500;
  min-width: 180px;
`),q(ar,f),q(rr,n(K)),q(nr,n(K)),q(ir,b),q(lr,l),q(cr,A),ie(Ut,"style",`color: ${m??""};`),q(dr,`${n(St)??""}%`),ie(Gt,"style",`color: ${w??""};`),q(fr,`${n(Tt)??""}%`),q(pr,n(dt)),q(ur,n(Lt)),q(hr,`${n(qa)??""}%`),qe.disabled=n(ae).length===0,ie(qe,"style",`
        width: 100%;
        padding: 5px;
        background: ${(n(ae).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(n(ae).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(n(ae).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(n(ae).length>0?"1":"0.5")??""};
      `),q(gr,`Download Win Log (${n(ae).length??""})`),ht.disabled=n(ae).length===0,ie(ht,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(n(ae).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(n(ae).length>0?"1":"0.5")??""};
      `),Xt.disabled=n(U),ie(Xt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(n(U)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(n(U)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(n(U)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(n(U)?"0.5":"1")??""};
      `),ie(Me,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(n(Ee)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(n(Ee)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),ie(Me,"title",n(Ee)?"Mykistä äänet":"Laita äänet päälle"),q(yr,n(Ee)?"🔊":"🔇")},[()=>n(ve).toLocaleString(),()=>n(Be).toLocaleString(),()=>n($e).toLocaleString(),()=>n(Je).toLocaleString(),()=>parseFloat(n(St))>=95?"#00ff00":parseFloat(n(St))>=85?"#ffff00":"#ff6666",()=>parseFloat(n(Tt))>=30?"#00ff00":parseFloat(n(Tt))>=20?"#ffff00":"#ff6666"]),W("click",$s,Ka),W("click",Cs,Xa),W("click",or,Qa),W("click",Fs,()=>{_(pt,!n(pt))}),W("click",Ds,Ja),W("click",qe,Wa),W("click",ht,ja),W("click",Xt,Na),W("click",Me,()=>{_(Ee,!n(Ee))}),W("click",Vs,As),H(t,ks),ga()}var $o=Y('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),Co=Y('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function Fo(t,e){ua(e,!1);let s=Zr(e,"isAuthenticated",12,!1),a=is(""),r=is(!1);const o="slot2024";function i(){n(a)===o?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(_(r,!0),_(a,""),setTimeout(()=>_(r,!1),3e3))}ha(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),Sr();var c=Er(),p=Ne(c);{var u=d=>{var h=Co(),v=y(h),E=g(y(v),4),S=y(E);un(S),Qr(2),x(E);var X=g(E,2);{var z=T=>{var j=$o();H(T,j)};re(X,T=>{n(r)&&T(z)})}x(v),x(h),gn(S,()=>n(a),T=>_(a,T)),W("submit",E,vn(i)),H(d,h)};re(p,d=>{s()||d(u)})}H(t,c),ga()}var qo=Y('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),Mo=Y("<!> <!>",1);function Ko(t){let e=is(!1);var s=Mo(),a=Ne(s);Fo(a,{get isAuthenticated(){return n(e)},set isAuthenticated(i){_(e,i)},$$legacy:!0});var r=g(a,2);{var o=i=>{var c=qo(),p=g(Ne(c),2);Bo(p,{}),H(i,c)};re(r,i=>{n(e)&&i(o)})}H(t,s)}export{Aa as A,xa as C,kn as R,yn as S,ka as V,Ko as _,mn as u};
