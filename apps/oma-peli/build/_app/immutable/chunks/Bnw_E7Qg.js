const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./bi6ndXp9.js","./DNWEu6uq.js","./DEliLNnF.js","./DWgShhht.js","./C04N3yhf.js","./C2GHuDhf.js","./VglXddhR.js","./DJStR8y6.js"])))=>i.map(i=>d[i]);
var wr=Object.defineProperty;var Ar=(t,e,s)=>e in t?wr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var oe=(t,e,s)=>Ar(t,typeof e!="symbol"?e+"":e,s);import{f as kr,l as Er,t as Y,g as W,a as H,d as Sr}from"./DRDKHArV.js";import{i as Tr}from"./Dw5_DM93.js";import{y as he,j as Lr,a8 as Rr,F as n,Q as Pr,aa as Ir,ab as Vs,h as Hs,e as Qt,k as at,l as Or,ac as ca,w as da,ad as Br,q as fa,a7 as $r,U as Cr,a2 as Ys,aq as Jt,z as Xs,ar as Fr,as as qr,at as Mr,o as Wr,au as jr,av as Nr,aw as zr,ax as Ur,b as Dr,ay as Gr,az as Vr,a6 as Hr,aA as Yr,aB as Xr,D as Kr,L as Qr,p as pa,ah as F,ag as ua,T as _,aC as ue,f as Ne,s as g,c as y,r as x,t as le,I as Zt,a as ha,aD as Jr,aE as is}from"./DWgShhht.js";import{_ as Ks,p as ce,i as re}from"./DEliLNnF.js";import{s as q}from"./4RjN9yQL.js";import{b as Zr,p as en}from"./B1_V_3zc.js";import{b as rt}from"./COriewiH.js";import{e as Ae,E as O,a as tn,C as fs,Q as mt,V as yt,N as es,D as se,H as sn,p as Le,a0 as De,a1 as Re,a2 as an,w as we,a3 as ot,a4 as ga,a5 as Ge,a6 as ge,a7 as xt,a8 as va,a9 as rn,aa as ts,ab as nn,ac as on,y as gt}from"./DNWEu6uq.js";import{A as ln,B as Qs,G as cn,T as ba,a as dn,b as ss}from"./C04N3yhf.js";function Js(t,e){return e}function fn(t,e,s,a){for(var r=[],o=e.length,i=0;i<o;i++)Mr(e[i].e,r,!0);var l=o>0&&r.length===0&&s!==null;if(l){var p=s.parentNode;Wr(p),p.append(s),a.clear(),_e(t,e[0].prev,e[o-1].next)}jr(r,()=>{for(var u=0;u<o;u++){var d=e[u];l||(a.delete(d.k),_e(t,d.prev,d.next)),Nr(d.e,!l)}})}function Zs(t,e,s,a,r,o=null){var i=t,l={flags:e,items:new Map,first:null};he&&Lr();var p=null,u=!1,d=Pr(()=>{var h=s();return $r(h)?h:h==null?[]:fa(h)});Rr(()=>{var h=n(d),b=h.length;if(u&&b===0)return;u=b===0;let E=!1;if(he){var S=i.data===Ir;S!==(b===0)&&(i=Vs(),Hs(i),Qt(!1),E=!0)}if(he){for(var X=null,U,T=0;T<b;T++){if(at.nodeType===8&&at.data===Or){i=at,E=!0,Qt(!1);break}var j=h[T],J=a(j,T);U=ma(at,l,X,null,j,J,T,r,e,s),l.items.set(J,U),X=U}b>0&&Hs(Vs())}he||pn(h,l,i,r,e,a,s),o!==null&&(b===0?p?ca(p):p=da(()=>o(i)):p!==null&&Br(p,()=>{p=null})),E&&Qt(!0),n(d)}),he&&(i=at)}function pn(t,e,s,a,r,o,i){var l=t.length,p=e.items,u=e.first,d=u,h,b=null,E=[],S=[],X,U,T,j;for(j=0;j<l;j+=1){if(X=t[j],U=o(X,j),T=p.get(U),T===void 0){var J=d?d.e.nodes_start:s;b=ma(J,e,b,b===null?e.first:b.next,X,U,j,a,r,i),p.set(U,b),E=[],S=[],d=b.next;continue}if(un(T,X,j),(T.e.f&Jt)!==0&&ca(T.e),T!==d){if(h!==void 0&&h.has(T)){if(E.length<S.length){var Z=S[0],de;b=Z.prev;var it=E[0],ke=E[E.length-1];for(de=0;de<E.length;de+=1)ea(E[de],Z,s);for(de=0;de<S.length;de+=1)h.delete(S[de]);_e(e,it.prev,ke.next),_e(e,b,it),_e(e,ke,Z),d=Z,b=ke,j-=1,E=[],S=[]}else h.delete(T),ea(T,d,s),_e(e,T.prev,T.next),_e(e,T,b===null?e.first:b.next),_e(e,b,T),b=T;continue}for(E=[],S=[];d!==null&&d.k!==U;)(d.e.f&Jt)===0&&(h??(h=new Set)).add(d),S.push(d),d=d.next;if(d===null)continue;T=d}E.push(T),b=T,d=T.next}if(d!==null||h!==void 0){for(var lt=h===void 0?[]:fa(h);d!==null;)(d.e.f&Jt)===0&&lt.push(d),d=d.next;var V=lt.length;if(V>0){var He=null;fn(e,lt,He,p)}}Xs.first=e.first&&e.first.e,Xs.last=b&&b.e}function un(t,e,s,a){qr(t.v,e),t.i=s}function ma(t,e,s,a,r,o,i,l,p,u){var d=(p&zr)!==0,h=(p&Ur)===0,b=d?h?Cr(r):Ys(r):r,E=(p&Fr)===0?i:Ys(i),S={i:E,v:b,k:o,a:null,e:null,prev:s,next:a};try{return S.e=da(()=>l(t,b,E,u),he),S.e.prev=s&&s.e,S.e.next=a&&a.e,s===null?e.first=S:(s.next=S,s.e.next=S.e),a!==null&&(a.prev=S,a.e.prev=S.e),S}finally{}}function ea(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,r=e?e.e.nodes_start:s,o=t.e.nodes_start;o!==a;){var i=Dr(o);r.before(o),o=i}}function _e(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function hn(t){if(he){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;ie(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var r=t.checked;ie(t,"checked",null),t.checked=r}}};t.__on_r=s,Gr(s),kr()}}function ie(t,e,s,a){var r=t.__attributes??(t.__attributes={});he&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Vr]=s),s==null?t.removeAttribute(e):typeof s!="string"&&gn(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var ta=new Map;function gn(t){var e=ta.get(t.nodeName);if(e)return e;ta.set(t.nodeName,e=[]);for(var s,a=t,r=Element.prototype;r!==a;){s=Yr(a);for(var o in s)s[o].set&&e.push(o);a=Hr(a)}return e}function vn(t,e,s=e){var a=Xr();Er(t,"input",r=>{var o=r?t.defaultValue:t.value;if(o=as(t)?rs(o):o,s(o),a&&o!==(o=e())){var i=t.selectionStart,l=t.selectionEnd;t.value=o??"",l!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(l,t.value.length))}}),(he&&t.defaultValue!==t.value||Kr(e)==null&&t.value)&&s(as(t)?rs(t.value):t.value),Qr(()=>{var r=e();as(t)&&r===rs(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function as(t){var e=t.type;return e==="number"||e==="range"}function rs(t){return t===""?null:+t}function bn(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const ls=[];Ae.handleByNamedList(O.Environment,ls);async function mn(t){if(!t)for(let e=0;e<ls.length;e++){const s=ls[e];if(s.value.test()){await s.value.load();return}}}let nt;function yn(){if(typeof nt=="boolean")return nt;try{nt=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{nt=!1}return nt}var ya=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(ya||{});class xn{constructor(e){this.items=[],this._name=e}emit(e,s,a,r,o,i,l,p){const{name:u,items:d}=this;for(let h=0,b=d.length;h<b;h++)d[h][u](e,s,a,r,o,i,l,p);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const _n=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],xa=class _a extends tn{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[..._n,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await mn(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={..._a.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof fs&&(a={container:a},s&&(mt(yt,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const r=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=r?a.clearColor:es.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const r=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==r&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=ya.ALL);const{clear:a,clearColor:r,target:o}=e;es.shared.setValue(r??this.background.colorRgba),s.renderTarget.clear(o,a,es.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new xn(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const r in this.runners)this.runners[r].add(a);return this}_addPipes(e,s){const a=s.reduce((r,o)=>(r[o.name]=o.value,r),{});e.forEach(r=>{const o=r.value,i=r.name,l=a[i];this.renderPipes[i]=new o(this,l?new l:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!yn())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};xa.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let wa=xa,vt;function wn(t){return vt!==void 0||(vt=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??wa.defaultOptions.failIfMajorPerformanceCaveat};try{if(!se.get().getWebGLRenderingContext())return!1;let r=se.get().createCanvas().getContext("webgl",e);const o=!!((s=r==null?void 0:r.getContextAttributes())!=null&&s.stencil);if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,o}catch{return!1}})()),vt}let bt;async function An(t={}){return bt!==void 0||(bt=await(async()=>{const e=se.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),bt}const sa=["webgl","webgpu","canvas"];async function kn(t){let e=[];t.preference?(e.push(t.preference),sa.forEach(o=>{o!==t.preference&&e.push(o)})):e=sa.slice();let s,a={};for(let o=0;o<e.length;o++){const i=e[o];if(i==="webgpu"&&await An()){const{WebGPURenderer:l}=await Ks(async()=>{const{WebGPURenderer:p}=await import("./bi6ndXp9.js");return{WebGPURenderer:p}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=l,a={...t,...t.webgpu};break}else if(i==="webgl"&&wn(t.failIfMajorPerformanceCaveat??wa.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:l}=await Ks(async()=>{const{WebGLRenderer:p}=await import("./DJStR8y6.js");return{WebGLRenderer:p}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=l,a={...t,...t.webgl};break}else if(i==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const r=new s;return await r.init(a),r}const Aa="8.8.1";class ka{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Aa)}static destroy(){}}ka.extension=O.Application;class En{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Aa)}destroy(){this._renderer=null}}En.extension={type:[O.WebGLSystem,O.WebGPUSystem],name:"initHook",priority:-10};const Ea=class cs{constructor(...e){this.stage=new fs,e[0]!==void 0&&mt(yt,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await kn(e),cs._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return mt(yt,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=cs._plugins.slice(0);a.reverse(),a.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Ea._plugins=[];let Sa=Ea;Ae.handleByList(O.Application,Sa._plugins);Ae.add(ka);class Ta extends ln{constructor(e,s){super();const{textures:a,data:r}=e;Object.keys(r.pages).forEach(o=>{const i=r.pages[parseInt(o,10)],l=a[i.id];this.pages.push({texture:l})}),Object.keys(r.chars).forEach(o=>{const i=r.chars[o],{frame:l,source:p}=a[i.page],u=new sn(i.x+l.x,i.y+l.y,i.width,i.height),d=new Le({source:p,frame:u});this.chars[o]={id:o.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:d}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){Qs.install(e)}static uninstall(e){Qs.uninstall(e)}}const ns={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const h in e){const b=e[h].match(/^[a-z]+/gm)[0],E=e[h].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),S={};for(const X in E){const U=E[X].split("="),T=U[0],j=U[1].replace(/"/gm,""),J=parseFloat(j),Z=isNaN(J)?j:J;S[T]=Z}s[b].push(S)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=s.info,[o]=s.common,[i]=s.distanceField??[];i&&(a.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),a.fontSize=parseInt(r.size,10),a.fontFamily=r.face,a.lineHeight=parseInt(o.lineHeight,10);const l=s.page;for(let h=0;h<l.length;h++)a.pages.push({id:parseInt(l[h].id,10)||0,file:l[h].file});const p={};a.baseLineOffset=a.lineHeight-parseInt(o.base,10);const u=s.char;for(let h=0;h<u.length;h++){const b=u[h],E=parseInt(b.id,10);let S=b.letter??b.char??String.fromCharCode(E);S==="space"&&(S=" "),p[E]=S,a.chars[S]={id:E,page:parseInt(b.page,10)||0,x:parseInt(b.x,10),y:parseInt(b.y,10),width:parseInt(b.width,10),height:parseInt(b.height,10),xOffset:parseInt(b.xoffset,10),yOffset:parseInt(b.yoffset,10),xAdvance:parseInt(b.xadvance,10),kerning:{}}}const d=s.kerning||[];for(let h=0;h<d.length;h++){const b=parseInt(d[h].first,10),E=parseInt(d[h].second,10),S=parseInt(d[h].amount,10);a.chars[p[E]].kerning[p[b]]=S}return a}},aa={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const o=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),l=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let u=0;u<o.length;u++)e.pages.push({id:parseInt(o[u].getAttribute("id"),10)||0,file:o[u].getAttribute("file")});const p={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let u=0;u<i.length;u++){const d=i[u],h=parseInt(d.getAttribute("id"),10);let b=d.getAttribute("letter")??d.getAttribute("char")??String.fromCharCode(h);b==="space"&&(b=" "),p[h]=b,e.chars[b]={id:h,page:parseInt(d.getAttribute("page"),10)||0,x:parseInt(d.getAttribute("x"),10),y:parseInt(d.getAttribute("y"),10),width:parseInt(d.getAttribute("width"),10),height:parseInt(d.getAttribute("height"),10),xOffset:parseInt(d.getAttribute("xoffset"),10),yOffset:parseInt(d.getAttribute("yoffset"),10),xAdvance:parseInt(d.getAttribute("xadvance"),10),kerning:{}}}for(let u=0;u<l.length;u++){const d=parseInt(l[u].getAttribute("first"),10),h=parseInt(l[u].getAttribute("second"),10),b=parseInt(l[u].getAttribute("amount"),10);e.chars[p[h]].kerning[p[d]]=b}return e}},ra={test(t){return typeof t=="string"&&t.includes("<font>")?aa.test(se.get().parseXML(t)):!1},parse(t){return aa.parse(se.get().parseXML(t))}},Sn=[".xml",".fnt"],Tn={extension:{type:O.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof Ta,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},Ln={extension:{type:O.LoadParser,priority:De.Normal},name:"loadBitmapFont",test(t){return Sn.includes(Re.extname(t).toLowerCase())},async testParse(t){return ns.test(t)||ra.test(t)},async parse(t,e,s){const a=ns.test(t)?ns.parse(t):ra.parse(t),{src:r}=e,{pages:o}=a,i=[],l=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let h=0;h<o.length;++h){const b=o[h].file;let E=Re.join(Re.dirname(r),b);E=an(E,r),i.push({src:E,data:l})}const p=await s.load(i),u=i.map(h=>p[h.src]);return new Ta({data:a,textures:u},r)},async load(t,e){return await(await se.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class Rn{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Pn={extension:{type:O.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Le),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((r,o)=>{s[a+(o===0?"":o+1)]=r})}),s}};async function La(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const In={extension:{type:O.DetectionParser,priority:1},test:async()=>La("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},na=["png","jpg","jpeg"],On={extension:{type:O.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...na],remove:async t=>t.filter(e=>!na.includes(e))},Bn="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function ps(t){return Bn?!1:document.createElement("video").canPlayType(t)!==""}const $n={extension:{type:O.DetectionParser,priority:0},test:async()=>ps("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},Cn={extension:{type:O.DetectionParser,priority:0},test:async()=>ps("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},Fn={extension:{type:O.DetectionParser,priority:0},test:async()=>ps("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},qn={extension:{type:O.DetectionParser,priority:0},test:async()=>La("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class Mn{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var i,l;let r=null,o=null;if(s.loadParser&&(o=this._parserHash[s.loadParser],o||we(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!o){for(let p=0;p<this.parsers.length;p++){const u=this.parsers[p];if(u.load&&((i=u.test)!=null&&i.call(u,e,s,this))){o=u;break}}if(!o)return we(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await o.load(e,s,this),a.parser=o;for(let p=0;p<this.parsers.length;p++){const u=this.parsers[p];u.parse&&u.parse&&await((l=u.testParse)==null?void 0:l.call(u,r,s,this))&&(r=await u.parse(r,s,this)||r,a.parser=u)}return r})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const r={},o=ga(e),i=ot(e,u=>({alias:[u],src:u,data:{}})),l=i.length,p=i.map(async u=>{const d=Re.toAbsolute(u.src);if(!r[u.src])try{this.promiseCache[d]||(this.promiseCache[d]=this._getLoadPromiseAndParser(d,u)),r[u.src]=await this.promiseCache[d].promise,s&&s(++a/l)}catch(h){throw delete this.promiseCache[d],delete r[u.src],new Error(`[Loader.load] Failed to load ${d}.
${h}`)}});return await Promise.all(p),o?r[i[0].src]:r}async unload(e){const a=ot(e,r=>({alias:[r],src:r})).map(async r=>{var l,p;const o=Re.toAbsolute(r.src),i=this.promiseCache[o];if(i){const u=await i.promise;delete this.promiseCache[o],await((p=(l=i.parser)==null?void 0:l.unload)==null?void 0:p.call(l,u,r,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&we(`[Assets] loadParser name conflict "${s.name}"`):we("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function Ve(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const Wn=".json",jn="application/json",Nn={extension:{type:O.LoadParser,priority:De.Low},name:"loadJson",test(t){return Ve(t,jn)||Ge(t,Wn)},async load(t){return await(await se.get().fetch(t)).json()}},zn=".txt",Un="text/plain",Dn={name:"loadTxt",extension:{type:O.LoadParser,priority:De.Low,name:"loadTxt"},test(t){return Ve(t,Un)||Ge(t,zn)},async load(t){return await(await se.get().fetch(t)).text()}},Gn=["normal","bold","100","200","300","400","500","600","700","800","900"],Vn=[".ttf",".otf",".woff",".woff2"],Hn=["font/ttf","font/otf","font/woff","font/woff2"],Yn=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Xn(t){const e=Re.extname(t),r=Re.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(l=>l.charAt(0).toUpperCase()+l.slice(1));let o=r.length>0;for(const l of r)if(!l.match(Yn)){o=!1;break}let i=r.join(" ");return o||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const Kn=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function Qn(t){return Kn.test(t)?t:encodeURI(t)}const Jn={extension:{type:O.LoadParser,priority:De.Low},name:"loadWebFont",test(t){return Ve(t,Hn)||Ge(t,Vn)},async load(t,e){var a,r,o;const s=se.get().getFontFaceSet();if(s){const i=[],l=((a=e.data)==null?void 0:a.family)??Xn(t),p=((o=(r=e.data)==null?void 0:r.weights)==null?void 0:o.filter(d=>Gn.includes(d)))??["normal"],u=e.data??{};for(let d=0;d<p.length;d++){const h=p[d],b=new FontFace(l,`url(${Qn(t)})`,{...u,weight:h});await b.load(),s.add(b),i.push(b)}return ge.set(`${l}-and-url`,{url:t,fontFaces:i}),i.length===1?i[0]:i}return we("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{ge.remove(`${e.family}-and-url`),se.get().getFontFaceSet().delete(e)})}};function us(t,e=1){var a;const s=(a=xt.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function hs(t,e,s){t.label=s,t._sourceOrigin=s;const a=new Le({source:t,label:s}),r=()=>{delete e.promiseCache[s],ge.has(s)&&ge.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(we("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),a.once("destroy",()=>{t.destroyed||(we("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),a}const Zn=".svg",eo="image/svg+xml",to={extension:{type:O.LoadParser,priority:De.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return Ve(t,eo)||Ge(t,Zn)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?ao(t):so(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function so(t,e,s,a){var U,T,j;const o=await(await se.get().fetch(t)).blob(),i=URL.createObjectURL(o),l=new Image;l.src=i,l.crossOrigin=a,await l.decode(),URL.revokeObjectURL(i);const p=document.createElement("canvas"),u=p.getContext("2d"),d=((U=e.data)==null?void 0:U.resolution)||us(t),h=((T=e.data)==null?void 0:T.width)??l.width,b=((j=e.data)==null?void 0:j.height)??l.height;p.width=h*d,p.height=b*d,u.drawImage(l,0,0,h*d,b*d);const{parseAsGraphicsContext:E,...S}=e.data??{},X=new va({resource:p,alphaMode:"premultiply-alpha-on-upload",resolution:d,...S});return hs(X,s,t)}async function ao(t){const s=await(await se.get().fetch(t)).text(),a=new cn;return a.svg(s),a}const ro=`(function () {
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
`;let ze=null,ds=class{constructor(){ze||(ze=URL.createObjectURL(new Blob([ro],{type:"application/javascript"}))),this.worker=new Worker(ze)}};ds.revokeObjectURL=function(){ze&&(URL.revokeObjectURL(ze),ze=null)};const no=`(function () {
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
`;let Ue=null;class Ra{constructor(){Ue||(Ue=URL.createObjectURL(new Blob([no],{type:"application/javascript"}))),this.worker=new Worker(Ue)}}Ra.revokeObjectURL=function(){Ue&&(URL.revokeObjectURL(Ue),Ue=null)};let oa=0,os;class oo{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new ds;s.addEventListener("message",a=>{s.terminate(),ds.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){os===void 0&&(os=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<os&&(this._createdWorkers++,e=new Ra().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((r,o)=>{this._queue.push({id:e,arguments:s,resolve:r,reject:o})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[oa]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:oa++,id:a})}}const ia=new oo,io=[".jpeg",".jpg",".png",".webp",".avif"],lo=["image/jpeg","image/png","image/webp","image/avif"];async function co(t,e){var r;const s=await se.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const Pa={name:"loadTextures",extension:{type:O.LoadParser,priority:De.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return Ve(t,lo)||Ge(t,io)},async load(t,e,s){var o;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await ia.isImageBitmapSupported()?a=await ia.loadImageBitmap(t,e):a=await co(t,e):a=await new Promise((i,l)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?i(a):(a.onload=()=>{i(a)},a.onerror=l)});const r=new va({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((o=e.data)==null?void 0:o.resolution)||us(t),...e.data});return hs(r,s,t)},unload(t){t.destroy(!0)}},Ia=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],fo=Ia.map(t=>`video/${t.substring(1)}`);function po(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=ho(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function uo(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",r),t.load();function a(){o(),e()}function r(i){o(),s(i)}function o(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",r)}})}function ho(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const go={name:"loadVideo",extension:{type:O.LoadParser,name:"loadVideo"},test(t){const e=Ve(t,fo),s=Ge(t,Ia);return e||s},async load(t,e,s){var p,u;const a={...ts.defaultOptions,resolution:((p=e.data)==null?void 0:p.resolution)||us(t),alphaMode:((u=e.data)==null?void 0:u.alphaMode)||await rn(),...e.data},r=document.createElement("video"),o={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(o).forEach(d=>{const h=o[d];h!==void 0&&r.setAttribute(d,h)}),a.muted===!0&&(r.muted=!0),po(r,t,a.crossorigin);const i=document.createElement("source");let l;if(t.startsWith("data:"))l=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const d=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();l=ts.MIME_TYPES[d]||`video/${d}`}return i.src=t,l&&(i.type=l),new Promise(d=>{const h=async()=>{const b=new ts({...a,resource:r});r.removeEventListener("canplay",h),e.data.preload&&await uo(r),d(hs(b,s,t))};r.addEventListener("canplay",h),r.appendChild(i)})},unload(t){t.destroy(!0)}},Oa={extension:{type:O.ResolveParser,name:"resolveTexture"},test:Pa.test,parse:t=>{var e;return{resolution:parseFloat(((e=xt.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},vo={extension:{type:O.ResolveParser,priority:-2,name:"resolveJson"},test:t=>xt.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:Oa.parse};class bo{constructor(){this._detections=[],this._initialized=!1,this.resolver=new xt,this.loader=new Mn,this.cache=ge,this._backgroundLoader=new Rn(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var o,i;if(this._initialized){we("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let l=e.manifest;typeof l=="string"&&(l=await this.load(l)),this.resolver.addManifest(l)}const s=((o=e.texturePreference)==null?void 0:o.resolution)??1,a=typeof s=="number"?[s]:s,r=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=ga(e),r=ot(e).map(l=>{if(typeof l!="string"){const p=this.resolver.getAlias(l);return p.some(u=>!this.resolver.hasKey(u))&&this.add(l),Array.isArray(p)?p[0]:p}return this.resolver.hasKey(l)||this.add({alias:l,src:l}),l}),o=this.resolver.resolve(r),i=await this._mapLoadToResolve(o,s);return a?i[r[0]]:i}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const r=this.resolver.resolveBundle(e),o={},i=Object.keys(r);let l=0,p=0;const u=()=>{s==null||s(++l/p)},d=i.map(h=>{const b=r[h];return p+=Object.keys(b).length,this._mapLoadToResolve(b,u).then(E=>{o[h]=E})});return await Promise.all(d),a?o[e[0]]:o}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return ge.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=ge.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(a,s);this._backgroundLoader.active=!0;const o={};return a.forEach(i=>{const l=r[i.src],p=[i.src];i.alias&&p.push(...i.alias),p.forEach(u=>{o[u]=l}),ge.set(p,l)}),o}async unload(e){this._initialized||await this.init();const s=ot(e).map(r=>typeof r!="string"?r.src:r),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=ot(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(r=>this._unloadFromResolved(s[r]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{ge.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,r)=>s.indexOf(a)===r),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const je=new bo;Ae.handleByList(O.LoadParser,je.loader.parsers).handleByList(O.ResolveParser,je.resolver.parsers).handleByList(O.CacheParser,je.cache.parsers).handleByList(O.DetectionParser,je.detections);Ae.add(Pn,On,In,qn,$n,Cn,Fn,Nn,Dn,Jn,to,Pa,go,Ln,Tn,Oa,vo);const la={loader:O.LoadParser,resolver:O.ResolveParser,cache:O.CacheParser,detection:O.DetectionParser};Ae.handle(O.Asset,t=>{const e=t.ref;Object.entries(la).filter(([s])=>!!e[s]).forEach(([s,a])=>Ae.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(la).filter(s=>!!e[s]).forEach(s=>Ae.remove(e[s]))});class mo extends nn{constructor(e,s){const{text:a,resolution:r,style:o,anchor:i,width:l,height:p,roundPixels:u,...d}=e;super({...d}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=o,this.resolution=r??null,this.allowChildren=!1,this._anchor=new on({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=u??!1,l!==void 0&&(this.width=l),p!==void 0&&(this.height=p)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,r=-s*this.anchor.x;let o=0;return e.x>=r&&e.x<=r+s&&(o=-a*this.anchor.y,e.y>=o&&e.y<=o+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function yo(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(mt(yt,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class xo extends mo{constructor(...e){const s=yo(e,"Text");super(s,ba),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=dn.measureText(this._text,this._style),{width:r,height:o}=a;e.minX=-s._x*r,e.maxX=e.minX+r,e.minY=-s._y*o,e.maxY=e.minY+o}}var _o=Y('<p style="color: red;" class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Error:</strong> </p>'),wo=Y('<div class="svelte-1t2q5b9"> </div>'),Ao=Y('<details class="svelte-1t2q5b9"><summary class="svelte-1t2q5b9"> </summary> <!></details>'),ko=Y(`<div style="
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
  " class="svelte-1t2q5b9"><h3 class="svelte-1t2q5b9">🎰 Oma-peli Debug</h3> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Status:</strong> </p> <!> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Base:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">BG URL:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Sample:</strong> </p> <!></div>`),Eo=Y('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-1t2q5b9"> </div>'),So=Y('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-1t2q5b9"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-1t2q5b9"> </span></div>'),To=Y(`<div style="
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
      " class="svelte-1t2q5b9">Jatka pelaamista</button></div>`),Lo=Y(`<div style="
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
      " class="svelte-1t2q5b9">Sulje</button></div>`),Ro=Y('<div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #ff00ff; font-size: 16px; animation: pulse 1s infinite;" class="svelte-1t2q5b9"><span class="svelte-1t2q5b9">🎰 FREE SPINS:</span> <span class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-top: 1px solid #555; padding-top: 8px;" class="svelte-1t2q5b9"><span style="color: #fff; font-size: 14px;" class="svelte-1t2q5b9">Total Won:</span> <span style="color: #00ff00; font-size: 14px;" class="svelte-1t2q5b9"> </span></div>',1),Po=Y(`<div style="
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
        " class="svelte-1t2q5b9">⏹ STOP</button></div>`),Io=Y(`<div style="
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
          " class="svelte-1t2q5b9">Cancel</button></div>`),Oo=Y(`<button style="
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
      " class="svelte-1t2q5b9">🔄 AUTOPLAY</button> <!>`,1),Bo=Y(`<!> <!> <!> <div style="
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
" class="svelte-1t2q5b9"><!></div> <button class="svelte-1t2q5b9"> </button> <button title="SPIN" class="svelte-1t2q5b9"></button>`,1);function $o(t,e){pa(e,!0);const s=13,a=1445,r=1e3,o=1.75,i=-30,l=-10,p=160,u=0,d=720,h=750,b=.8,E=50,S=30,X=-40,U=1,T="height",J=Math.round(100*o),Z=Math.round(J*(700/760)),it=Z+10,ke=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],V=typeof window<"u"&&window.location.hostname.includes("github.io")?"/web-sdk/oma-peli/symbols":`${rt}/symbols`,He={a:`${V}/Blue_hotrod.jpg`,b:`${V}/Blue_jacket.jpg`,c:`${V}/Blue_rollers.jpg`,d:`${V}/Blue_speakers.jpg`,e:`${V}/Premium_blonde.jpg`,f:`${V}/Premium_brunette.jpg`,g:`${V}/Premium_rocker.jpg`,h:`${V}/New_Wild.jpg`,i:`${V}/Red_burger.jpg`,j:`${V}/Red_fries.jpg`,k:`${V}/Red_milkshake.jpg`,l:`${V}/Scatter.jpg`,emptyslot:`${V}/Emptyslot.jpg`},_t=`${V}/bg_base.jpg`,gs=`${V}/ReelFrames.png`,vs=`${V}/RockABillyReels_logo.png`,Ba={spin:`${rt}/sounds/spin.mp3`,stop:`${rt}/sounds/stop.mp3`,win:`${rt}/sounds/win.mp3`},$a="1.0.7";let Ee=F(!0),wt={},ct=null,Pe=null,Ye=null,Xe=null,Ke=F("Initializing..."),Ie=F(""),ne=[],ve=F(1e3),K=F(10);const bs=1,At=100;let Se=F(!1),Oe=F(0),Qe=F(!1),Ca=F(0),Te=!1,fe=null,kt=!1,Be=F(0),$e=F(0),Je=F(0),Et=F(0),St=Zt(()=>n($e)>0?(n(Je)/n($e)*100).toFixed(2):"0.00"),Tt=Zt(()=>n(Be)>0?(n(Et)/n(Be)*100).toFixed(2):"0.00"),D=F(!1),pe=F(0),be=F(0),dt=F(0),Lt=F(0),ft=F(0),Rt=F(0),Fa=Zt(()=>n(ft)>0?(n(Rt)/n(ft)*100).toFixed(2):"0.00"),ae=F(ce([]));function qa(f,v,c){const w=new Date().toLocaleString("fi-FI");let m=`
${"=".repeat(60)}
`;m+=`ROUND #${f} - ${w}
`,m+=`Mode: ${n(D)?"FREE SPINS":"BASE GAME"}
`,m+=`${"=".repeat(60)}
`,v.forEach((A,L)=>{m+=`
Win ${L+1}:
`,m+=`  Symbol: ${A.symbol} (${_s[A.symbol]})
`,m+=`  Count: ${A.count} symbols
`,m+=`  Multiplier: ${A.multiplier}x
`,m+=`  Payout: ${A.payout.toFixed(2)}
`,m+=`  Positions: [${A.positions.join(", ")}]
`}),m+=`
${"─".repeat(60)}
`,m+=`TOTAL WIN: ${c.toFixed(2)}
`,m+=`${"=".repeat(60)}
`,n(ae).push(m)}function Ma(){const f=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${n(ae).join(`
`)}`,v=new Blob([f],{type:"text/plain"}),c=URL.createObjectURL(v),w=document.createElement("a");w.href=c,w.download=`win-log-${Date.now()}.txt`,w.click(),URL.revokeObjectURL(c)}function Wa(){_(ae,ce([]))}function ja(){n(D)||(_(D,!0),_(pe,10),_(be,0),ue(dt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."))}const Na={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},za={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function ms(f){if(f===6)return Math.random()<.55?"h":"emptyslot";const v=n(D)?za:Na,c=Math.random();let w=0;const m=ke.filter(L=>L!=="h"),A=m.reduce((L,N)=>L+v[N],0);for(const L of m)if(w+=v[L]/A,c<w)return L;return"f"}function ys(){const f=[];for(let v=0;v<s;v++){const c=ms(v);f.push(c),ue(ft),c==="emptyslot"&&ue(Rt)}return f}function xs(f){return f<3?{col:0,row:f}:f<6?{col:1,row:f-3}:f===6?{col:2,row:0}:f<10?{col:3,row:f-7}:{col:4,row:f-10}}function Ze(f,v){return f===0?v:f===1?3+v:f===2?6:f===3?7+v:f===4?10+v:-1}function Ua(){if(n(D)){const f=Math.random();return f<.7?3:f<.92?5:10}else{const f=Math.random();return f<.7?1:f<.92?2:3}}const Da={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function Ga(){var ee;const f=[],v=[];for(let k=0;k<s;k++)et[k]==="l"&&v.push(k);if(v.length>=5){const k=v.length;_(pe,n(pe)+k),n(D)?console.log(`🎰 FREE SPINS RETRIGGERED! +${k} FREE SPINS! Total: ${n(pe)}`):(_(D,!0),_(be,0),ue(dt),console.log(`🎰 FREE SPINS TRIGGERED! ${v.length} scatters = ${k} FREE SPINS!`)),f.push({symbol:"l",count:v.length,payout:0,positions:v,multiplier:1})}const c=[];for(let k=0;k<3;k++)for(let R=0;R<3;R++)for(let P=0;P<1;P++)for(let I=0;I<3;I++)for(let C=0;C<3;C++){const $=[Ze(0,k),Ze(1,R),Ze(2,P),Ze(3,I),Ze(4,C)];c.push($)}console.log(`Generated ${c.length} possible paths (should be 81)`);const w=[];for(const k of c){const R=k.map($=>et[$]);if(R[0]==="emptyslot"||R[0]==="l")continue;let P=null;for(let $=0;$<R.length;$++)if(R[$]!=="h"&&R[$]!=="emptyslot"&&R[$]!=="l"){P=R[$];break}if(!P)continue;let I=0;const C=new Set;for(let $=0;$<k.length;$++){const xe=k[$],{col:We}=xs(xe),te=R[$];(te===P||te==="h")&&C.add(We)}for(let $=0;$<5&&C.has($);$++)I++;if(I>=3){const xe=k[0]%3;w.push({symbol:P,length:I,path:k.slice(0,I),startRow:xe})}}const m=[],A=new Map;for(const k of w){const R=`${k.symbol}-${k.path.join(",")}`;A.has(R)||A.set(R,[]),A.get(R).push(k)}for(const[k,R]of A.entries()){const P=Math.max(...R.map(C=>C.length)),I=R.find(C=>C.length===P);I&&m.push(I)}const L=[],N=new Map;for(const k of m)N.has(k.symbol)||N.set(k.symbol,[]),N.get(k.symbol).push(k);const z=[];for(const[k,R]of N.entries()){const P=Math.max(...R.map(C=>C.length)),I=R.filter(C=>C.length===P);z.push(...I)}const G=new Map;for(const k of z){const R=`${k.symbol}-${k.length}`;G.has(R)||G.set(R,[]),G.get(R).push(k)}const B=z.length>0?Ua():1;for(const[k,R]of G.entries()){const P=R[0],I=(ee=Da[P.symbol])==null?void 0:ee[P.length];if(I!==void 0&&I>0){const C=new Map;for(const te of R)for(let Q=0;Q<te.length;Q++)C.has(Q)||C.set(Q,new Set),C.get(Q).add(te.path[Q]);let $=1;for(let te=0;te<P.length;te++){const Q=C.get(te);$*=Q?Q.size:1}const xe=I*n(K)*$*B;console.log(`  ${P.length}x${P.symbol}: ${$} ways × ${I}x × ${n(K)} bet × ${B} mult = ${xe}`);const We=new Set;for(const te of R)te.path.forEach(Q=>We.add(Q));L.push({symbol:P.symbol,count:P.length,payout:xe,positions:Array.from(We),multiplier:B})}}return f.push(...L),f}let me=F(0),Ce=F(ce([])),ye=F(!1),pt=F(!1);const _s={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function Pt(f){if(!n(Ee)||!wt[f])return;const v=wt[f];v.currentTime=0,v.play().catch(c=>{console.warn("Äänen toisto epäonnistui:",f,c)})}function Va(f){tt.forEach(v=>M.stage.removeChild(v)),tt=[],f.forEach(v=>{v.positions.forEach(c=>{const w=Fe[c],m=new ss().rect(0,0,J,Z).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});m.x=w.container.x,m.y=w.container.y,M.stage.addChild(m),tt.push(m);let A=0,L=1;const N=.05;M.ticker.add(()=>{A+=L*N,A>=.4&&(L=-1),A<=0&&(L=1),m.alpha=.5+A})})})}function It(){tt.forEach(f=>M.stage.removeChild(f)),tt=[]}let et=ys(),Ot,M,Fe=[],tt=[];class Ha{constructor(v,c){oe(this,"index");oe(this,"container");oe(this,"offset",0);oe(this,"speed",0);oe(this,"targetSpeed",30);oe(this,"state","idle");oe(this,"stopDelay",0);oe(this,"bounceOffset",0);oe(this,"bounceSpeed",0);oe(this,"bounceFrames",0);this.index=v,this.container=c}start(v){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=v}update(){this.state!=="idle"&&(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"&&(this.speed*=.92,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,Pt("stop"))),this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=it&&(this.offset=0,et[this.index]=ms(this.index))))}draw(){const v=this.container;v.removeChildren();const c=et[this.index];if(!c||!ct||!ct[c])return;const w=ct[c];if(!w)return;const m=this.offset+this.bounceOffset,A=new gt(w);A.width=J,A.height=Z,A.x=0,A.y=m,v.addChild(A)}}ua(async()=>{M=new Sa,await M.init({width:a,height:r,background:"#001a33"}),Ot.appendChild(M.canvas);const f={};try{_(Ke,"Loading background and UI images..."),ne.push(`Loading background: ${_t}`),ne.push(`Loading reel frames: ${gs}`),ne.push(`Loading logo: ${vs}`),await je.load([{alias:"background",src:_t},{alias:"reelframes",src:gs},{alias:"logo",src:vs}]),Pe=Le.from("background"),Ye=Le.from("reelframes"),Xe=Le.from("logo"),console.log("✅ Background texture created:",Pe.width,"x",Pe.height),console.log("✅ Reel frames texture created:",Ye.width,"x",Ye.height),console.log("✅ Logo texture created:",Xe.width,"x",Xe.height),ne.push("✅ All UI images loaded"),_(Ke,"Loading symbols...");const c=[];for(const w of ke)c.push({alias:w,src:He[w]});await je.load(c);for(const w of ke){const m=He[w];ne.push(`Loading symbol ${w}: ${m}`);try{const A=Le.from(w);f[w]=A,console.log(`✅ Symbol ${w} loaded:`,A.width,"x",A.height),ne.push(`✅ Symbol ${w} loaded`)}catch(A){const L=`❌ Failed to load symbol ${w} from ${m}: ${A}`;throw ne.push(L),console.error(L),new Error(L)}}ct=f,_(Ke,"Assets loaded successfully!")}catch(c){_(Ie,`Asset loading failed: ${c}`),ne.push(n(Ie)),console.error(n(Ie));return}console.log("Ladataan ääniefektit...");for(const[c,w]of Object.entries(Ba)){const m=new Audio;m.src=w,m.preload="auto",m.volume=.7,m.load(),m.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${w} (käytetään hiljaista placeholderia)`)}),wt[c]=m}if(console.log("Taustakuva ladattu, tekstuuri:",Pe),Pe){const c=new gt(Pe);M.renderer.width/M.renderer.height;const w=c.texture.width/c.texture.height;let m;m=M.renderer.height/c.texture.height,m*=U,c.scale.set(m),c.x=(M.renderer.width-c.width)/2,c.y=(M.renderer.height-c.height)/2+X,M.stage.addChild(c),console.log("Taustakuva lisätty:",T,"mode, size:",c.width.toFixed(0),"x",c.height.toFixed(0),"image aspect:",w.toFixed(2),"scale:",m.toFixed(2),"pos:",c.x.toFixed(0),c.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(c=>({x:c.x+i,y:c.y+l})),Fe=[];for(let c=0;c<s;c++){const w=xs(c),m=w.col,A=w.row,L=300+m*(J+20),N=250+A*(Z+15),z=c===6?L+u:L,G=c===6?N+p:N,B=new fs;B.x=z+i,B.y=G+l;const ee=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],k=new ss().rect(0,0,J,Z).fill({color:ee[c],alpha:.3});k.x=B.x,k.y=B.y,M.stage.addChild(k);const R=new ba({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),P=new xo({text:c.toString(),style:R});P.x=B.x+5,P.y=B.y+5,M.stage.addChild(P);const I=new ss().rect(0,0,J,Z).fill(16777215);I.x=B.x,I.y=B.y,B.mask=I,M.stage.addChild(I),M.stage.addChild(B),Fe.push(new Ha(c,B))}if(Ye){const c=new gt(Ye);c.scale.set(1),c.x=250,c.y=200,M.stage.addChild(c),console.log("Reel frames lisätty:",c.width.toFixed(0),"x",c.height.toFixed(0))}if(Xe){const c=new gt(Xe);c.scale.set(b),c.x=(M.renderer.width-c.width)/2+E,c.y=S,M.stage.addChild(c),console.log("Logo lisätty päällimmäiseen layeriin:",c.width.toFixed(0),"x",c.height.toFixed(0))}M.ticker.add(Ya)});function Ya(){for(const f of Fe)f.update(),f.draw();if(!n(ye)&&!kt&&Fe.every(f=>f.state==="stopped")){kt=!0;const f=Ga();console.log(`Checking wins, found ${f.length} wins`),f.length>0?(_(Ce,ce(f)),_(me,ce(f.reduce((v,c)=>v+c.payout,0))),qa(n(Be),f,n(me)),Xa(n(me)),_(ye,!0),_(Ca,ce(Date.now())),console.log(`🎉 VOITTO! ${n(me)} pistettä! Uusi saldo: ${n(ve)}`),console.log(`isShowingWin set to: ${n(ye)}, totalWin: ${n(me)}`),f.forEach(v=>{const c=v.multiplier?` (${v.multiplier}x multiplier)`:"";console.log(`${v.count}x ${v.symbol} = ${v.payout} pistettä${c}`)}),Va(f),Pt("win"),n(Se)&&!Te&&(Te=!0,fe=window.setTimeout(()=>{n(ye)&&n(Se)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),_(ye,!1),It()),fe=window.setTimeout(()=>{Te=!1,$t()},200)},1500))):(console.log("No wins found this spin"),n(Se)&&!Te&&(Te=!0,fe=window.setTimeout(()=>{Te=!1,$t()},1e3))),n(D)&&n(pe)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${n(be)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${n(be).toFixed(2)}`),_(D,!1),_(be,0)},2e3))}}function ws(){if(n(D)&&n(pe)>0)ue(pe,-1),ue(Lt),console.log(`🎰 FREE SPIN! Remaining: ${n(pe)}`);else if(!n(D)){if(n(ve)<n(K)){alert(`Not enough credits! Balance: ${n(ve)}, Bet: ${n(K)}`),Bt();return}_(ve,n(ve)-n(K)),ue(Be),_($e,n($e)+n(K))}fe!==null&&(clearTimeout(fe),fe=null),_(Ce,ce([])),_(me,0),_(ye,!1),kt=!1,It(),et=ys(),Fe.forEach((f,v)=>f.start(60+v*10)),Pt("spin")}function Xa(f){_(ve,n(ve)+f),_(Je,n(Je)+f),n(D)&&_(be,n(be)+f),f>0&&ue(Et)}function Ka(){n(K)<At&&_(K,ce(Math.min(n(K)+1,At)))}function Qa(){n(K)>bs&&_(K,ce(Math.max(n(K)-1,bs)))}function Ja(){_(K,At)}function st(f){_(Se,!0),_(Oe,ce(f)),_(Qe,!1),$t()}function Bt(){_(Se,!1),_(Oe,0),Te=!1,fe!==null&&(clearTimeout(fe),fe=null)}function $t(){if(!n(Se)||n(Oe)<=0){Bt();return}console.log(`Autoplay: Starting spin ${n(Oe)} rounds left`),ws(),ue(Oe,-1)}function Za(){confirm("Reset all statistics?")&&(_(Be,0),_($e,0),_(Je,0),_(Et,0),_(dt,0),_(Lt,0),_(ft,0),_(Rt,0))}var As=Bo(),ks=Ne(As);{var er=f=>{var v=ko(),c=g(y(v),2),w=g(y(c));x(c);var m=g(c,2);{var A=P=>{var I=_o(),C=g(y(I));x(I),le(()=>q(C,` ${n(Ie)??""}`)),H(P,I)};re(m,P=>{n(Ie)&&P(A)})}var L=g(m,2),N=g(y(L));N.nodeValue=` ${rt??""}`,x(L);var z=g(L,2),G=g(y(z));G.nodeValue=` ${_t??""}`,x(z);var B=g(z,2),ee=g(y(B));x(B);var k=g(B,2);{var R=P=>{var I=Ao(),C=y(I),$=y(C);x(C);var xe=g(C,2);Zs(xe,17,()=>ne,Js,(We,te)=>{var Q=wo(),_r=y(Q,!0);x(Q),le(()=>q(_r,n(te))),H(We,Q)}),x(I),le(()=>q($,`Log (${ne.length??""})`)),H(P,I)};re(k,P=>{ne.length>0&&P(R)})}x(v),le(()=>{q(w,` ${n(Ke)??""}`),q(ee,` ${He.a??""}`)}),H(f,v)};re(ks,f=>{(n(Ke)!=="Assets loaded successfully!"||n(Ie))&&f(er)})}var Es=g(ks,2);{var tr=f=>{var v=To(),c=g(y(v),2),w=y(c);x(c);var m=g(c,2);Zs(m,17,()=>n(Ce),Js,(z,G)=>{var B=Eo(),ee=y(B);x(B),le(k=>q(ee,`${n(G).count??""} × ${_s[n(G).symbol]??""} = ${k??""} pistettä`),[()=>n(G).payout.toFixed(2)]),H(z,B)});var A=g(m,2);{var L=z=>{var G=So(),B=y(G),ee=y(B);x(B),x(G),le(()=>q(ee,`✨ ${n(Ce)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),H(z,G)};re(A,z=>{n(Ce).length>0&&n(Ce)[0].multiplier>1&&z(L)})}var N=g(A,2);x(v),le(()=>q(w,`${n(me)??""} pistettä`)),W("click",N,()=>{_(ye,!1),It(),console.log("Win popup closed, ready for next spin")}),H(f,v)};re(Es,f=>{n(me)>0&&n(ye)&&f(tr)})}var Ss=g(Es,2);{var sr=f=>{var v=Lo(),c=g(y(v),8);x(v),W("click",c,()=>{_(pt,!1)}),H(f,v)};re(Ss,f=>{n(pt)&&f(sr)})}var Ts=g(Ss,2);Zr(Ts,f=>Ot=f,()=>Ot);var ut=g(Ts,2),Ls=y(ut);{var ar=f=>{var v=Ro(),c=Ne(v),w=g(y(c),2),m=y(w,!0);x(w),x(c);var A=g(c,2),L=g(y(A),2),N=y(L,!0);x(L),x(A),le(z=>{q(m,n(pe)),q(N,z)},[()=>n(be).toFixed(2)]),H(f,v)};re(Ls,f=>{n(D)&&f(ar)})}var Ct=g(Ls,2),Rs=g(y(Ct),2),rr=y(Rs,!0);x(Rs),x(Ct);var Ps=g(Ct,2),Is=g(y(Ps),2),nr=y(Is,!0);x(Is),x(Ps),x(ut);var Ft=g(ut,2),Os=g(y(Ft),2),Bs=y(Os),qt=g(Bs,2),or=y(qt,!0);x(qt);var $s=g(qt,2),ir=g($s,2);x(Os),x(Ft);var Cs=g(Ft,2),Mt=g(Cs,2),Fs=g(y(Mt),2);Fs.textContent=`v${$a}`;var Wt=g(Fs,2),qs=g(y(Wt),2),lr=y(qs,!0);x(qs),x(Wt);var jt=g(Wt,2),Ms=g(y(jt),2),cr=y(Ms,!0);x(Ms),x(jt);var Nt=g(jt,2),Ws=g(y(Nt),2),dr=y(Ws,!0);x(Ws),x(Nt);var zt=g(Nt,2),Ut=g(y(zt),2),fr=y(Ut);x(Ut),x(zt);var Dt=g(zt,2),Gt=g(y(Dt),2),pr=y(Gt);x(Gt),x(Dt);var Vt=g(Dt,2),js=g(y(Vt),2),ur=y(js,!0);x(js),x(Vt);var Ht=g(Vt,2),Ns=g(y(Ht),2),hr=y(Ns,!0);x(Ns),x(Ht);var Yt=g(Ht,2),zs=g(y(Yt),2),gr=y(zs);x(zs),x(Yt);var Us=g(Yt,2),Ds=g(Us,2),qe=y(Ds),vr=y(qe);x(qe);var ht=g(qe,2),Xt=g(ht,2);x(Ds),x(Mt);var Kt=g(Mt,2),br=y(Kt);{var mr=f=>{var v=Po(),c=g(y(v),2),w=y(c);x(c);var m=g(c,2);x(v),le(()=>q(w,`${n(Oe)??""} left`)),W("click",m,Bt),H(f,v)},yr=f=>{var v=Oo(),c=Ne(v),w=g(c,2);{var m=A=>{var L=Io(),N=g(y(L),2),z=g(N,2),G=g(z,2),B=g(G,2),ee=g(B,2),k=g(ee,2);x(L),W("click",N,()=>st(10)),W("click",z,()=>st(100)),W("click",G,()=>st(1e3)),W("click",B,()=>st(1e4)),W("click",ee,()=>st(1e5)),W("click",k,()=>{_(Qe,!1)}),H(A,L)};re(w,A=>{n(Qe)&&A(m)})}W("click",c,()=>{_(Qe,!n(Qe))}),H(f,v)};re(br,f=>{n(Se)?f(mr):f(yr,!1)})}x(Kt);var Me=g(Kt,2),xr=y(Me,!0);x(Me);var Gs=g(Me,2);ie(Gs,"style",`
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
  `),le((f,v,c,w,m,A)=>{ie(ut,"style",`
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
  border: 2px solid ${(n(D)?"#ff00ff":"#ffd700")??""};
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
  z-index: 1500;
  min-width: 180px;
`),q(rr,f),q(nr,n(K)),q(or,n(K)),q(lr,v),q(cr,c),q(dr,w),ie(Ut,"style",`color: ${m??""};`),q(fr,`${n(St)??""}%`),ie(Gt,"style",`color: ${A??""};`),q(pr,`${n(Tt)??""}%`),q(ur,n(dt)),q(hr,n(Lt)),q(gr,`${n(Fa)??""}%`),qe.disabled=n(ae).length===0,ie(qe,"style",`
        width: 100%;
        padding: 5px;
        background: ${(n(ae).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(n(ae).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(n(ae).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(n(ae).length>0?"1":"0.5")??""};
      `),q(vr,`Download Win Log (${n(ae).length??""})`),ht.disabled=n(ae).length===0,ie(ht,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(n(ae).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(n(ae).length>0?"1":"0.5")??""};
      `),Xt.disabled=n(D),ie(Xt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(n(D)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(n(D)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(n(D)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(n(D)?"0.5":"1")??""};
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
  `),ie(Me,"title",n(Ee)?"Mykistä äänet":"Laita äänet päälle"),q(xr,n(Ee)?"🔊":"🔇")},[()=>n(ve).toLocaleString(),()=>n(Be).toLocaleString(),()=>n($e).toLocaleString(),()=>n(Je).toLocaleString(),()=>parseFloat(n(St))>=95?"#00ff00":parseFloat(n(St))>=85?"#ffff00":"#ff6666",()=>parseFloat(n(Tt))>=30?"#00ff00":parseFloat(n(Tt))>=20?"#ffff00":"#ff6666"]),W("click",Bs,Qa),W("click",$s,Ka),W("click",ir,Ja),W("click",Cs,()=>{_(pt,!n(pt))}),W("click",Us,Za),W("click",qe,Ma),W("click",ht,Wa),W("click",Xt,ja),W("click",Me,()=>{_(Ee,!n(Ee))}),W("click",Gs,ws),H(t,As),ha()}var Co=Y('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),Fo=Y('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function qo(t,e){pa(e,!1);let s=en(e,"isAuthenticated",12,!1),a=is(""),r=is(!1);const o="slot2024";function i(){n(a)===o?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(_(r,!0),_(a,""),setTimeout(()=>_(r,!1),3e3))}ua(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),Tr();var l=Sr(),p=Ne(l);{var u=d=>{var h=Fo(),b=y(h),E=g(y(b),4),S=y(E);hn(S),Jr(2),x(E);var X=g(E,2);{var U=T=>{var j=Co();H(T,j)};re(X,T=>{n(r)&&T(U)})}x(b),x(h),vn(S,()=>n(a),T=>_(a,T)),W("submit",E,bn(i)),H(d,h)};re(p,d=>{s()||d(u)})}H(t,l),ha()}var Mo=Y('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),Wo=Y("<!> <!>",1);function Qo(t){let e=is(!1);var s=Wo(),a=Ne(s);qo(a,{get isAuthenticated(){return n(e)},set isAuthenticated(i){_(e,i)},$$legacy:!0});var r=g(a,2);{var o=i=>{var l=Mo(),p=g(Ne(l),2);$o(p,{}),H(i,l)};re(r,i=>{n(e)&&i(o)})}H(t,s)}export{wa as A,ya as C,En as R,xn as S,Aa as V,Qo as _,yn as u};
