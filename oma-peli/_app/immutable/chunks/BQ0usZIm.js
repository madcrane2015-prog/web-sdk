const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DMSyJIIs.js","./SpTHHzAp.js","./DN2ixH3E.js","./D1rxTRw3.js","./BUP9hRfY.js","./C2GHuDhf.js","./DG7EE1Sd.js","./CBSdYCIa.js"])))=>i.map(i=>d[i]);
var Kn=Object.defineProperty;var Qn=(t,e,s)=>e in t?Kn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var _e=(t,e,s)=>Qn(t,typeof e!="symbol"?e+"":e,s);import{f as Zn,l as qn,d as br,a as j,t as Q,n as xr,g as C,i as Jn}from"./CzvQHsIM.js";import{i as eo}from"./CSlWMsbo.js";import{R as ke,T as to,Q as so,i as r,w as ao,W as ro,X as tr,Y as sr,Z as Ys,a1 as yt,a9 as no,_ as yr,$ as _r,a0 as oo,ad as wr,O as io,z as lo,I as ar,ar as Xs,K as rr,as as co,at as fo,au as uo,ac as po,av as ho,aw as vo,ax as go,ay as mo,a3 as bo,az as xo,aA as yo,N as _o,aB as wo,aC as ko,g as Ao,n as zo,p as la,f as Oe,ai as $,a as ca,y,c as b,s as f,r as x,t as oe,k as Ue,ah as kr,aD as $e,aE as So,aF as sa}from"./D1rxTRw3.js";import{_ as nr,i as ie,p as we}from"./DN2ixH3E.js";import{s as F,a as Eo}from"./CSYyqGjZ.js";import{p as aa,b as or}from"./Dk6Goypl.js";import{b as ze}from"./DSii6Id-.js";import{e as Ne,E as B,a as To,C as da,Q as Ft,V as Mt,N as Ks,D as pe,H as Lo,p as Ge,ab as lt,ac as He,ad as Ro,w as We,ae as wt,af as Ar,ag as ct,a9 as Pe,ah as jt,a1 as zr,ai as $o,aj as Qs,aa as Po,ak as Oo,y as It}from"./SpTHHzAp.js";import{A as Io,B as ir,G as Co,T as Sr,a as Bo,b as Zs}from"./BUP9hRfY.js";function Wt(t,e){return e}function Fo(t,e,s,a){for(var n=[],o=e.length,i=0;i<o;i++)uo(e[i].e,n,!0);var l=o>0&&n.length===0&&s!==null;if(l){var h=s.parentNode;po(h),h.append(s),a.clear(),Me(t,e[0].prev,e[o-1].next)}ho(n,()=>{for(var v=0;v<o;v++){var u=e[v];l||(a.delete(u.k),Me(t,u.prev,u.next)),vo(u.e,!l)}})}function Nt(t,e,s,a,n,o=null){var i=t,l={flags:e,items:new Map,first:null};ke&&to();var h=null,v=!1,u=ao(()=>{var m=s();return io(m)?m:m==null?[]:wr(m)});so(()=>{var m=r(u),g=m.length;if(v&&g===0)return;v=g===0;let S=!1;if(ke){var E=i.data===ro;E!==(g===0)&&(i=tr(),sr(i),Ys(!1),S=!0)}if(ke){for(var ee=null,G,T=0;T<g;T++){if(yt.nodeType===8&&yt.data===no){i=yt,S=!0,Ys(!1);break}var P=m[T],X=a(P,T);G=Er(yt,l,ee,null,P,X,T,n,e,s),l.items.set(X,G),ee=G}g>0&&sr(tr())}ke||Mo(m,l,i,n,e,a,s),o!==null&&(g===0?h?yr(h):h=_r(()=>o(i)):h!==null&&oo(h,()=>{h=null})),S&&Ys(!0),r(u)}),ke&&(i=yt)}function Mo(t,e,s,a,n,o,i){var l=t.length,h=e.items,v=e.first,u=v,m,g=null,S=[],E=[],ee,G,T,P;for(P=0;P<l;P+=1){if(ee=t[P],G=o(ee,P),T=h.get(G),T===void 0){var X=u?u.e.nodes_start:s;g=Er(X,e,g,g===null?e.first:g.next,ee,G,P,a,n,i),h.set(G,g),S=[],E=[],u=g.next;continue}if(Wo(T,ee,P),(T.e.f&Xs)!==0&&yr(T.e),T!==u){if(m!==void 0&&m.has(T)){if(S.length<E.length){var ae=E[0],le;g=ae.prev;var Se=S[0],ce=S[S.length-1];for(le=0;le<S.length;le+=1)lr(S[le],ae,s);for(le=0;le<E.length;le+=1)m.delete(E[le]);Me(e,Se.prev,ce.next),Me(e,g,Se),Me(e,ce,ae),u=ae,g=ce,P-=1,S=[],E=[]}else m.delete(T),lr(T,u,s),Me(e,T.prev,T.next),Me(e,T,g===null?e.first:g.next),Me(e,g,T),g=T;continue}for(S=[],E=[];u!==null&&u.k!==G;)(u.e.f&Xs)===0&&(m??(m=new Set)).add(u),E.push(u),u=u.next;if(u===null)continue;T=u}S.push(T),g=T,u=T.next}if(u!==null||m!==void 0){for(var Ae=m===void 0?[]:wr(m);u!==null;)(u.e.f&Xs)===0&&Ae.push(u),u=u.next;var de=Ae.length;if(de>0){var te=null;Fo(e,Ae,te,h)}}rr.first=e.first&&e.first.e,rr.last=g&&g.e}function Wo(t,e,s,a){fo(t.v,e),t.i=s}function Er(t,e,s,a,n,o,i,l,h,v){var u=(h&go)!==0,m=(h&mo)===0,g=u?m?lo(n):ar(n):n,S=(h&co)===0?i:ar(i),E={i:S,v:g,k:o,a:null,e:null,prev:s,next:a};try{return E.e=_r(()=>l(t,g,S,v),ke),E.e.prev=s&&s.e,E.e.next=a&&a.e,s===null?e.first=E:(s.next=E,s.e.next=E.e),a!==null&&(a.prev=E,a.e.prev=E.e),E}finally{}}function lr(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,n=e?e.e.nodes_start:s,o=t.e.nodes_start;o!==a;){var i=bo(o);n.before(o),o=i}}function Me(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}const cr=[...` 	
\r\f \v\uFEFF`];function No(t,e,s){var a=t==null?"":""+t;if(e&&(a=a?a+" "+e:e),s){for(var n in s)if(s[n])a=a?a+" "+n:n;else if(a.length)for(var o=n.length,i=0;(i=a.indexOf(n,i))>=0;){var l=i+o;(i===0||cr.includes(a[i-1]))&&(l===a.length||cr.includes(a[l]))?a=(i===0?"":a.substring(0,i))+a.substring(l+1):i=l}}return a===""?null:a}function ra(t,e,s,a,n,o){var i=t.__className;if(ke||i!==s){var l=No(s,a,o);(!ke||l!==t.getAttribute("class"))&&(l==null?t.removeAttribute("class"):e?t.className=l:t.setAttribute("class",l)),t.__className=s}else if(o)for(var h in o){var v=!!o[h];(n==null||v!==!!n[h])&&t.classList.toggle(h,v)}return o}function jo(t){if(ke){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;A(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var n=t.checked;A(t,"checked",null),t.checked=n}}};t.__on_r=s,xo(s),Zn()}}function A(t,e,s,a){var n=t.__attributes??(t.__attributes={});ke&&(n[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||n[e]!==(n[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[yo]=s),s==null?t.removeAttribute(e):typeof s!="string"&&Do(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var dr=new Map;function Do(t){var e=dr.get(t.nodeName);if(e)return e;dr.set(t.nodeName,e=[]);for(var s,a=t,n=Element.prototype;n!==a;){s=wo(a);for(var o in s)s[o].set&&e.push(o);a=_o(a)}return e}function Uo(t,e,s=e){var a=ko();qn(t,"input",n=>{var o=n?t.defaultValue:t.value;if(o=qs(t)?Js(o):o,s(o),a&&o!==(o=e())){var i=t.selectionStart,l=t.selectionEnd;t.value=o??"",l!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(l,t.value.length))}}),(ke&&t.defaultValue!==t.value||Ao(e)==null&&t.value)&&s(qs(t)?Js(t.value):t.value),zo(()=>{var n=e();qs(t)&&n===Js(t.value)||t.type==="date"&&!n&&!t.value||n!==t.value&&(t.value=n??"")})}function qs(t){var e=t.type;return e==="number"||e==="range"}function Js(t){return t===""?null:+t}function Go(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const na=[];Ne.handleByNamedList(B.Environment,na);async function Ho(t){if(!t)for(let e=0;e<na.length;e++){const s=na[e];if(s.value.test()){await s.value.load();return}}}let _t;function Vo(){if(typeof _t=="boolean")return _t;try{_t=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{_t=!1}return _t}var Tr=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(Tr||{});class Yo{constructor(e){this.items=[],this._name=e}emit(e,s,a,n,o,i,l,h){const{name:v,items:u}=this;for(let m=0,g=u.length;m<g;m++)u[m][v](e,s,a,n,o,i,l,h);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Xo=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Lr=class Rr extends To{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...Xo,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Ho(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...Rr.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof da&&(a={container:a},s&&(Ft(Mt,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const n=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=n?a.clearColor:Ks.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const n=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==n&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Tr.ALL);const{clear:a,clearColor:n,target:o}=e;Ks.shared.setValue(n??this.background.colorRgba),s.renderTarget.clear(o,a,Ks.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new Yo(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const n in this.runners)this.runners[n].add(a);return this}_addPipes(e,s){const a=s.reduce((n,o)=>(n[o.name]=o.value,n),{});e.forEach(n=>{const o=n.value,i=n.name,l=a[i];this.renderPipes[i]=new o(this,l?new l:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Vo())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Lr.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let $r=Lr,Ct;function Ko(t){return Ct!==void 0||(Ct=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??$r.defaultOptions.failIfMajorPerformanceCaveat};try{if(!pe.get().getWebGLRenderingContext())return!1;let n=pe.get().createCanvas().getContext("webgl",e);const o=!!((s=n==null?void 0:n.getContextAttributes())!=null&&s.stencil);if(n){const i=n.getExtension("WEBGL_lose_context");i&&i.loseContext()}return n=null,o}catch{return!1}})()),Ct}let Bt;async function Qo(t={}){return Bt!==void 0||(Bt=await(async()=>{const e=pe.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),Bt}const fr=["webgl","webgpu","canvas"];async function Zo(t){let e=[];t.preference?(e.push(t.preference),fr.forEach(o=>{o!==t.preference&&e.push(o)})):e=fr.slice();let s,a={};for(let o=0;o<e.length;o++){const i=e[o];if(i==="webgpu"&&await Qo()){const{WebGPURenderer:l}=await nr(async()=>{const{WebGPURenderer:h}=await import("./DMSyJIIs.js");return{WebGPURenderer:h}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=l,a={...t,...t.webgpu};break}else if(i==="webgl"&&Ko(t.failIfMajorPerformanceCaveat??$r.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:l}=await nr(async()=>{const{WebGLRenderer:h}=await import("./CBSdYCIa.js");return{WebGLRenderer:h}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=l,a={...t,...t.webgl};break}else if(i==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const n=new s;return await n.init(a),n}const Pr="8.8.1";class Or{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Pr)}static destroy(){}}Or.extension=B.Application;class qo{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Pr)}destroy(){this._renderer=null}}qo.extension={type:[B.WebGLSystem,B.WebGPUSystem],name:"initHook",priority:-10};const Ir=class oa{constructor(...e){this.stage=new da,e[0]!==void 0&&Ft(Mt,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Zo(e),oa._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Ft(Mt,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=oa._plugins.slice(0);a.reverse(),a.forEach(n=>{n.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Ir._plugins=[];let Cr=Ir;Ne.handleByList(B.Application,Cr._plugins);Ne.add(Or);class Br extends Io{constructor(e,s){super();const{textures:a,data:n}=e;Object.keys(n.pages).forEach(o=>{const i=n.pages[parseInt(o,10)],l=a[i.id];this.pages.push({texture:l})}),Object.keys(n.chars).forEach(o=>{const i=n.chars[o],{frame:l,source:h}=a[i.page],v=new Lo(i.x+l.x,i.y+l.y,i.width,i.height),u=new Ge({source:h,frame:v});this.chars[o]={id:o.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:u}}),this.baseRenderedFontSize=n.fontSize,this.baseMeasurementFontSize=n.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:n.fontSize},this.baseLineOffset=n.baseLineOffset,this.lineHeight=n.lineHeight,this.fontFamily=n.fontFamily,this.distanceField=n.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){ir.install(e)}static uninstall(e){ir.uninstall(e)}}const ea={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const m in e){const g=e[m].match(/^[a-z]+/gm)[0],S=e[m].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),E={};for(const ee in S){const G=S[ee].split("="),T=G[0],P=G[1].replace(/"/gm,""),X=parseFloat(P),ae=isNaN(X)?P:X;E[T]=ae}s[g].push(E)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[n]=s.info,[o]=s.common,[i]=s.distanceField??[];i&&(a.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),a.fontSize=parseInt(n.size,10),a.fontFamily=n.face,a.lineHeight=parseInt(o.lineHeight,10);const l=s.page;for(let m=0;m<l.length;m++)a.pages.push({id:parseInt(l[m].id,10)||0,file:l[m].file});const h={};a.baseLineOffset=a.lineHeight-parseInt(o.base,10);const v=s.char;for(let m=0;m<v.length;m++){const g=v[m],S=parseInt(g.id,10);let E=g.letter??g.char??String.fromCharCode(S);E==="space"&&(E=" "),h[S]=E,a.chars[E]={id:S,page:parseInt(g.page,10)||0,x:parseInt(g.x,10),y:parseInt(g.y,10),width:parseInt(g.width,10),height:parseInt(g.height,10),xOffset:parseInt(g.xoffset,10),yOffset:parseInt(g.yoffset,10),xAdvance:parseInt(g.xadvance,10),kerning:{}}}const u=s.kerning||[];for(let m=0;m<u.length;m++){const g=parseInt(u[m].first,10),S=parseInt(u[m].second,10),E=parseInt(u[m].amount,10);a.chars[h[S]].kerning[h[g]]=E}return a}},ur={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],n=t.getElementsByTagName("distanceField")[0];n&&(e.distanceField={type:n.getAttribute("fieldType"),range:parseInt(n.getAttribute("distanceRange"),10)});const o=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),l=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let v=0;v<o.length;v++)e.pages.push({id:parseInt(o[v].getAttribute("id"),10)||0,file:o[v].getAttribute("file")});const h={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let v=0;v<i.length;v++){const u=i[v],m=parseInt(u.getAttribute("id"),10);let g=u.getAttribute("letter")??u.getAttribute("char")??String.fromCharCode(m);g==="space"&&(g=" "),h[m]=g,e.chars[g]={id:m,page:parseInt(u.getAttribute("page"),10)||0,x:parseInt(u.getAttribute("x"),10),y:parseInt(u.getAttribute("y"),10),width:parseInt(u.getAttribute("width"),10),height:parseInt(u.getAttribute("height"),10),xOffset:parseInt(u.getAttribute("xoffset"),10),yOffset:parseInt(u.getAttribute("yoffset"),10),xAdvance:parseInt(u.getAttribute("xadvance"),10),kerning:{}}}for(let v=0;v<l.length;v++){const u=parseInt(l[v].getAttribute("first"),10),m=parseInt(l[v].getAttribute("second"),10),g=parseInt(l[v].getAttribute("amount"),10);e.chars[h[m]].kerning[h[u]]=g}return e}},pr={test(t){return typeof t=="string"&&t.includes("<font>")?ur.test(pe.get().parseXML(t)):!1},parse(t){return ur.parse(pe.get().parseXML(t))}},Jo=[".xml",".fnt"],ei={extension:{type:B.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof Br,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},ti={extension:{type:B.LoadParser,priority:lt.Normal},name:"loadBitmapFont",test(t){return Jo.includes(He.extname(t).toLowerCase())},async testParse(t){return ea.test(t)||pr.test(t)},async parse(t,e,s){const a=ea.test(t)?ea.parse(t):pr.parse(t),{src:n}=e,{pages:o}=a,i=[],l=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let m=0;m<o.length;++m){const g=o[m].file;let S=He.join(He.dirname(n),g);S=Ro(S,n),i.push({src:S,data:l})}const h=await s.load(i),v=i.map(m=>h[m.src]);return new Br({data:a,textures:v},n)},async load(t,e){return await(await pe.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class si{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const ai={extension:{type:B.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Ge),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((n,o)=>{s[a+(o===0?"":o+1)]=n})}),s}};async function Fr(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const ri={extension:{type:B.DetectionParser,priority:1},test:async()=>Fr("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},hr=["png","jpg","jpeg"],ni={extension:{type:B.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...hr],remove:async t=>t.filter(e=>!hr.includes(e))},oi="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function fa(t){return oi?!1:document.createElement("video").canPlayType(t)!==""}const ii={extension:{type:B.DetectionParser,priority:0},test:async()=>fa("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},li={extension:{type:B.DetectionParser,priority:0},test:async()=>fa("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},ci={extension:{type:B.DetectionParser,priority:0},test:async()=>fa("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},di={extension:{type:B.DetectionParser,priority:0},test:async()=>Fr("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class fi{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var i,l;let n=null,o=null;if(s.loadParser&&(o=this._parserHash[s.loadParser],o||We(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!o){for(let h=0;h<this.parsers.length;h++){const v=this.parsers[h];if(v.load&&((i=v.test)!=null&&i.call(v,e,s,this))){o=v;break}}if(!o)return We(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}n=await o.load(e,s,this),a.parser=o;for(let h=0;h<this.parsers.length;h++){const v=this.parsers[h];v.parse&&v.parse&&await((l=v.testParse)==null?void 0:l.call(v,n,s,this))&&(n=await v.parse(n,s,this)||n,a.parser=v)}return n})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const n={},o=Ar(e),i=wt(e,v=>({alias:[v],src:v,data:{}})),l=i.length,h=i.map(async v=>{const u=He.toAbsolute(v.src);if(!n[v.src])try{this.promiseCache[u]||(this.promiseCache[u]=this._getLoadPromiseAndParser(u,v)),n[v.src]=await this.promiseCache[u].promise,s&&s(++a/l)}catch(m){throw delete this.promiseCache[u],delete n[v.src],new Error(`[Loader.load] Failed to load ${u}.
${m}`)}});return await Promise.all(h),o?n[i[0].src]:n}async unload(e){const a=wt(e,n=>({alias:[n],src:n})).map(async n=>{var l,h;const o=He.toAbsolute(n.src),i=this.promiseCache[o];if(i){const v=await i.promise;delete this.promiseCache[o],await((h=(l=i.parser)==null?void 0:l.unload)==null?void 0:h.call(l,v,n,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&We(`[Assets] loadParser name conflict "${s.name}"`):We("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function dt(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const ui=".json",pi="application/json",hi={extension:{type:B.LoadParser,priority:lt.Low},name:"loadJson",test(t){return dt(t,pi)||ct(t,ui)},async load(t){return await(await pe.get().fetch(t)).json()}},vi=".txt",gi="text/plain",mi={name:"loadTxt",extension:{type:B.LoadParser,priority:lt.Low,name:"loadTxt"},test(t){return dt(t,gi)||ct(t,vi)},async load(t){return await(await pe.get().fetch(t)).text()}},bi=["normal","bold","100","200","300","400","500","600","700","800","900"],xi=[".ttf",".otf",".woff",".woff2"],yi=["font/ttf","font/otf","font/woff","font/woff2"],_i=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function wi(t){const e=He.extname(t),n=He.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(l=>l.charAt(0).toUpperCase()+l.slice(1));let o=n.length>0;for(const l of n)if(!l.match(_i)){o=!1;break}let i=n.join(" ");return o||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const ki=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function Ai(t){return ki.test(t)?t:encodeURI(t)}const zi={extension:{type:B.LoadParser,priority:lt.Low},name:"loadWebFont",test(t){return dt(t,yi)||ct(t,xi)},async load(t,e){var a,n,o;const s=pe.get().getFontFaceSet();if(s){const i=[],l=((a=e.data)==null?void 0:a.family)??wi(t),h=((o=(n=e.data)==null?void 0:n.weights)==null?void 0:o.filter(u=>bi.includes(u)))??["normal"],v=e.data??{};for(let u=0;u<h.length;u++){const m=h[u],g=new FontFace(l,`url(${Ai(t)})`,{...v,weight:m});await g.load(),s.add(g),i.push(g)}return Pe.set(`${l}-and-url`,{url:t,fontFaces:i}),i.length===1?i[0]:i}return We("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{Pe.remove(`${e.family}-and-url`),pe.get().getFontFaceSet().delete(e)})}};function ua(t,e=1){var a;const s=(a=jt.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function pa(t,e,s){t.label=s,t._sourceOrigin=s;const a=new Ge({source:t,label:s}),n=()=>{delete e.promiseCache[s],Pe.has(s)&&Pe.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(We("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),n())}),a.once("destroy",()=>{t.destroyed||(We("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),n())}),a}const Si=".svg",Ei="image/svg+xml",Ti={extension:{type:B.LoadParser,priority:lt.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return dt(t,Ei)||ct(t,Si)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?Ri(t):Li(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function Li(t,e,s,a){var G,T,P;const o=await(await pe.get().fetch(t)).blob(),i=URL.createObjectURL(o),l=new Image;l.src=i,l.crossOrigin=a,await l.decode(),URL.revokeObjectURL(i);const h=document.createElement("canvas"),v=h.getContext("2d"),u=((G=e.data)==null?void 0:G.resolution)||ua(t),m=((T=e.data)==null?void 0:T.width)??l.width,g=((P=e.data)==null?void 0:P.height)??l.height;h.width=m*u,h.height=g*u,v.drawImage(l,0,0,m*u,g*u);const{parseAsGraphicsContext:S,...E}=e.data??{},ee=new zr({resource:h,alphaMode:"premultiply-alpha-on-upload",resolution:u,...E});return pa(ee,s,t)}async function Ri(t){const s=await(await pe.get().fetch(t)).text(),a=new Co;return a.svg(s),a}const $i=`(function () {
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
`;let ot=null,ia=class{constructor(){ot||(ot=URL.createObjectURL(new Blob([$i],{type:"application/javascript"}))),this.worker=new Worker(ot)}};ia.revokeObjectURL=function(){ot&&(URL.revokeObjectURL(ot),ot=null)};const Pi=`(function () {
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
`;let it=null;class Mr{constructor(){it||(it=URL.createObjectURL(new Blob([Pi],{type:"application/javascript"}))),this.worker=new Worker(it)}}Mr.revokeObjectURL=function(){it&&(URL.revokeObjectURL(it),it=null)};let vr=0,ta;class Oi{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new ia;s.addEventListener("message",a=>{s.terminate(),ia.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){ta===void 0&&(ta=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<ta&&(this._createdWorkers++,e=new Mr().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((n,o)=>{this._queue.push({id:e,arguments:s,resolve:n,reject:o})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[vr]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:vr++,id:a})}}const gr=new Oi,Ii=[".jpeg",".jpg",".png",".webp",".avif"],Ci=["image/jpeg","image/png","image/webp","image/avif"];async function Bi(t,e){var n;const s=await pe.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((n=e==null?void 0:e.data)==null?void 0:n.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const Wr={name:"loadTextures",extension:{type:B.LoadParser,priority:lt.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return dt(t,Ci)||ct(t,Ii)},async load(t,e,s){var o;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await gr.isImageBitmapSupported()?a=await gr.loadImageBitmap(t,e):a=await Bi(t,e):a=await new Promise((i,l)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?i(a):(a.onload=()=>{i(a)},a.onerror=l)});const n=new zr({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((o=e.data)==null?void 0:o.resolution)||ua(t),...e.data});return pa(n,s,t)},unload(t){t.destroy(!0)}},Nr=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Fi=Nr.map(t=>`video/${t.substring(1)}`);function Mi(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=Ni(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function Wi(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",n),t.load();function a(){o(),e()}function n(i){o(),s(i)}function o(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",n)}})}function Ni(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const ji={name:"loadVideo",extension:{type:B.LoadParser,name:"loadVideo"},test(t){const e=dt(t,Fi),s=ct(t,Nr);return e||s},async load(t,e,s){var h,v;const a={...Qs.defaultOptions,resolution:((h=e.data)==null?void 0:h.resolution)||ua(t),alphaMode:((v=e.data)==null?void 0:v.alphaMode)||await $o(),...e.data},n=document.createElement("video"),o={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(o).forEach(u=>{const m=o[u];m!==void 0&&n.setAttribute(u,m)}),a.muted===!0&&(n.muted=!0),Mi(n,t,a.crossorigin);const i=document.createElement("source");let l;if(t.startsWith("data:"))l=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const u=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();l=Qs.MIME_TYPES[u]||`video/${u}`}return i.src=t,l&&(i.type=l),new Promise(u=>{const m=async()=>{const g=new Qs({...a,resource:n});n.removeEventListener("canplay",m),e.data.preload&&await Wi(n),u(pa(g,s,t))};n.addEventListener("canplay",m),n.appendChild(i)})},unload(t){t.destroy(!0)}},jr={extension:{type:B.ResolveParser,name:"resolveTexture"},test:Wr.test,parse:t=>{var e;return{resolution:parseFloat(((e=jt.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},Di={extension:{type:B.ResolveParser,priority:-2,name:"resolveJson"},test:t=>jt.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:jr.parse};class Ui{constructor(){this._detections=[],this._initialized=!1,this.resolver=new jt,this.loader=new fi,this.cache=Pe,this._backgroundLoader=new si(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var o,i;if(this._initialized){We("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let l=e.manifest;typeof l=="string"&&(l=await this.load(l)),this.resolver.addManifest(l)}const s=((o=e.texturePreference)==null?void 0:o.resolution)??1,a=typeof s=="number"?[s]:s,n=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:n,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=Ar(e),n=wt(e).map(l=>{if(typeof l!="string"){const h=this.resolver.getAlias(l);return h.some(v=>!this.resolver.hasKey(v))&&this.add(l),Array.isArray(h)?h[0]:h}return this.resolver.hasKey(l)||this.add({alias:l,src:l}),l}),o=this.resolver.resolve(n),i=await this._mapLoadToResolve(o,s);return a?i[n[0]]:i}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const n=this.resolver.resolveBundle(e),o={},i=Object.keys(n);let l=0,h=0;const v=()=>{s==null||s(++l/h)},u=i.map(m=>{const g=n[m];return h+=Object.keys(g).length,this._mapLoadToResolve(g,v).then(S=>{o[m]=S})});return await Promise.all(u),a?o[e[0]]:o}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Pe.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=Pe.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const n=await this.loader.load(a,s);this._backgroundLoader.active=!0;const o={};return a.forEach(i=>{const l=n[i.src],h=[i.src];i.alias&&h.push(...i.alias),h.forEach(v=>{o[v]=l}),Pe.set(h,l)}),o}async unload(e){this._initialized||await this.init();const s=wt(e).map(n=>typeof n!="string"?n.src:n),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=wt(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(n=>this._unloadFromResolved(s[n]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{Pe.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,n)=>s.indexOf(a)===n),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const nt=new Ui;Ne.handleByList(B.LoadParser,nt.loader.parsers).handleByList(B.ResolveParser,nt.resolver.parsers).handleByList(B.CacheParser,nt.cache.parsers).handleByList(B.DetectionParser,nt.detections);Ne.add(ai,ni,ri,di,ii,li,ci,hi,mi,zi,Ti,Wr,ji,ti,ei,jr,Di);const mr={loader:B.LoadParser,resolver:B.ResolveParser,cache:B.CacheParser,detection:B.DetectionParser};Ne.handle(B.Asset,t=>{const e=t.ref;Object.entries(mr).filter(([s])=>!!e[s]).forEach(([s,a])=>Ne.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(mr).filter(s=>!!e[s]).forEach(s=>Ne.remove(e[s]))});class Gi extends Po{constructor(e,s){const{text:a,resolution:n,style:o,anchor:i,width:l,height:h,roundPixels:v,...u}=e;super({...u}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=o,this.resolution=n??null,this.allowChildren=!1,this._anchor=new Oo({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=v??!1,l!==void 0&&(this.width=l),h!==void 0&&(this.height=h)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,n=-s*this.anchor.x;let o=0;return e.x>=n&&e.x<=n+s&&(o=-a*this.anchor.y,e.y>=o&&e.y<=o+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function Hi(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(Ft(Mt,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class Vi extends Gi{constructor(...e){const s=Hi(e,"Text");super(s,Sr),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=Bo.measureText(this._text,this._style),{width:n,height:o}=a;e.minX=-s._x*n,e.maxX=e.minX+n,e.minY=-s._y*o,e.maxY=e.minY+o}}const Yi="1.1.8",Xi={version:Yi};var Ki=Q('<div class="win-label svelte-27a1cu">BIG WIN!</div> <div class="win-amount-display svelte-27a1cu"> </div>',1),Qi=xr('<use href="#sparkle" class="sparkle svelte-27a1cu"></use>'),Zi=xr('<use href="#vinyl"></use>'),qi=Q('<div><!> <svg class="vinyl-canvas svelte-27a1cu" viewBox="0 0 1024 800" xmlns="http://www.w3.org/2000/svg"><defs class="svelte-27a1cu"><symbol id="vinyl" viewBox="-200 -200 400 400" class="svelte-27a1cu"><circle cx="0" cy="0" r="180" fill="#0b0b0b" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="150" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.3" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="120" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.25" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="90" fill="none" stroke="#1a1a1a" stroke-width="1.5" opacity="0.2" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="55" fill="var(--label-color)" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="6" fill="#ffffff" class="svelte-27a1cu"></circle><ellipse cx="-15" cy="-15" rx="20" ry="15" fill="#ffffff" opacity="0.3" transform="rotate(-30)" class="svelte-27a1cu"></ellipse></symbol><symbol id="sparkle" viewBox="-12 -12 24 24" class="svelte-27a1cu"><polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ffd966" class="svelte-27a1cu"></polygon><circle cx="0" cy="0" r="2" fill="#ffffff" class="svelte-27a1cu"></circle></symbol><symbol id="confetti" viewBox="-3 -3 6 6" class="svelte-27a1cu"><circle cx="0" cy="0" r="2" fill="var(--confetti-color)" class="svelte-27a1cu"></circle></symbol></defs><!><!></svg></div>');function Ji(t,e){la(e,!0);let s=aa(e,"winLevel",3,"small"),a=aa(e,"winAmount",3,0),n=$(!1),o=$(!1);const i={small:{vinyls:5,sparkles:8,maxRadius:100},medium:{vinyls:12,sparkles:16,maxRadius:140},jackpot:{vinyls:24,sparkles:30,maxRadius:180}},l=Ue(()=>i[s()]),h=["#f04e37","#ffd966","#ff8533","#4ecdc4","#ff6b9d"];function v(P){const X=[],Se=r(l).maxRadius;for(let ce=0;ce<P;ce++){const Ae=Math.PI*2*ce/P+Math.random()*.4,de=Math.random()*Se*.7+Se*.2;X.push({x:512+Math.cos(Ae)*de,y:400+Math.sin(Ae)*de,rotation:Math.random()*30-15,scale:.3+Math.random()*.25,delay:ce*.05,color:h[ce%h.length]})}return X}function u(P){const X=[];for(let ae=0;ae<P;ae++)X.push({x:100+Math.random()*824,y:50+Math.random()*700,delay:Math.random()*.8,duration:.6+Math.random()*.4,rotation:Math.random()*360});return X}const m=Ue(()=>v(r(l).vinyls)),g=Ue(()=>u(r(l).sparkles));function S(){y(n,!0),y(o,!0),setTimeout(()=>{y(o,!1),setTimeout(()=>{var P;y(n,!1),(P=e.onComplete)==null||P.call(e)},500)},s()==="jackpot"?4e3:s()==="medium"?3e3:2500)}function E(){y(o,!1),setTimeout(()=>{y(n,!1)},500)}var ee=br(),G=Oe(ee);{var T=P=>{var X=qi();let ae;var le=b(X);{var Se=te=>{var re=Ki(),be=f(Oe(re),2),Ie=b(be,!0);x(be),oe(kt=>F(Ie,kt),[()=>a().toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),j(te,re)};ie(le,te=>{a()>0&&te(Se)})}var ce=f(le,2),Ae=f(b(ce));Nt(Ae,17,()=>r(g),Wt,(te,re)=>{var be=Qi();oe(()=>A(be,"style",`
            --sx: ${r(re).x??""}px;
            --sy: ${r(re).y??""}px;
            --duration: ${r(re).duration??""}s;
            --sparkle-delay: ${r(re).delay??""}s;
          `)),j(te,be)});var de=f(Ae);Nt(de,17,()=>r(m),Wt,(te,re)=>{var be=Zi();let Ie;oe(()=>{Ie=ra(be,0,"vinyl-group svelte-27a1cu",null,Ie,{floating:r(o)}),A(be,"style",`
            --tx: ${r(re).x??""}px;
            --ty: ${r(re).y??""}px;
            --scale: ${r(re).scale??""};
            --rotation: ${r(re).rotation??""}deg;
            --delay: ${r(re).delay??""}s;
            --label-color: ${r(re).color??""};
          `)}),j(te,be)}),x(ce),x(X),oe(()=>ae=ra(X,1,"vinyl-win-container svelte-27a1cu",null,ae,{visible:r(o),hiding:!r(o)})),j(P,X)};ie(G,P=>{r(n)&&P(T)})}return j(t,ee),ca({show:S,hide:E})}var el=Jn('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-2k82zv"><\/script><!---->',1),tl=Q('<p style="color: red;" class="svelte-2k82zv"><strong class="svelte-2k82zv">Error:</strong> </p>'),sl=Q('<div class="svelte-2k82zv"> </div>'),al=Q('<details class="svelte-2k82zv"><summary class="svelte-2k82zv"> </summary> <!></details>'),rl=Q(`<div style="
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
  " class="svelte-2k82zv"><h3 class="svelte-2k82zv">🎰 Oma-peli Debug</h3> <p class="svelte-2k82zv"><strong class="svelte-2k82zv">Status:</strong> </p> <!> <p class="svelte-2k82zv"><strong class="svelte-2k82zv">Base:</strong> </p> <p class="svelte-2k82zv"><strong class="svelte-2k82zv">BG URL:</strong> </p> <p class="svelte-2k82zv"><strong class="svelte-2k82zv">Sample:</strong> </p> <!></div>`),nl=Q('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-2k82zv"> </div>'),ol=Q('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-2k82zv"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-2k82zv"> </span></div>'),il=Q(`<div style="
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
  " class="svelte-2k82zv"><h2 style="margin: 0 0 10px 0; font-size: 2em;" class="svelte-2k82zv">🎉 VOITTO! 🎉</h2> <div style="font-size: 1.5em; font-weight: bold; margin: 10px 0;" class="svelte-2k82zv"> </div> <!> <!> <button style="
        margin-top: 15px;
        padding: 8px 16px;
        background: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
      " class="svelte-2k82zv">Jatka pelaamista</button></div>`),ll=Q(`<div style="
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
  " class="svelte-2k82zv"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-2k82zv">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-2k82zv">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-2k82zv"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-2k82zv"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-2k82zv"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-2k82zv">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-2k82zv"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-2k82zv">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-2k82zv"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-2k82zv">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-2k82zv"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-2k82zv">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-2k82zv">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-2k82zv">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-2k82zv">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-2k82zv"> <span style="color: #ffd700;" class="svelte-2k82zv">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-2k82zv">Sulje</button></div>`),cl=Q('<div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #ff00ff; font-size: 16px; animation: pulse 1s infinite;" class="svelte-2k82zv"><span class="svelte-2k82zv">🎰 FREE SPINS:</span> <span class="svelte-2k82zv"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-top: 1px solid #555; padding-top: 8px;" class="svelte-2k82zv"><span style="color: #fff; font-size: 14px;" class="svelte-2k82zv">Total Won:</span> <span style="color: #00ff00; font-size: 14px;" class="svelte-2k82zv"> </span></div>',1),dl=Q(`<div style="
      background: rgba(255, 100, 100, 0.9);
      color: white;
      padding: 15px 20px;
      border-radius: 10px;
      border: 2px solid #ff0000;
      box-shadow: 0 4px 15px rgba(255, 0, 0, 0.5);
      text-align: center;
      animation: winPulse 1s infinite;
    " class="svelte-2k82zv"><div style="font-weight: bold; font-size: 16px; margin-bottom: 8px;" class="svelte-2k82zv">🔄 AUTOPLAY</div> <div style="font-size: 20px; font-family: 'Courier New', monospace; margin-bottom: 10px;" class="svelte-2k82zv"> </div> <button style="
          width: 100%;
          padding: 8px;
          background: #ffffff;
          color: #ff0000;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          font-size: 14px;
        " class="svelte-2k82zv">⏹ STOP</button></div>`),fl=Q(`<div style="
        position: absolute;
        bottom: 60px;
        right: 0;
        background: rgba(0, 0, 0, 0.95);
        padding: 15px;
        border-radius: 10px;
        border: 2px solid #0088ff;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
        min-width: 180px;
      " class="svelte-2k82zv"><div style="color: white; font-weight: bold; margin-bottom: 10px; text-align: center;" class="svelte-2k82zv">Select Rounds:</div> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #44aa44;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-2k82zv">10 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #4488ff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-2k82zv">100 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #ff8844;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-2k82zv">1,000 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #ff4444;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-2k82zv">10,000 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            background: #aa00ff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-2k82zv">100,000 Rounds</button> <button style="
            width: 100%;
            padding: 6px;
            background: rgba(255, 255, 255, 0.1);
            color: #aaa;
            border: 1px solid #555;
            border-radius: 5px;
            cursor: pointer;
            font-size: 12px;
          " class="svelte-2k82zv">Cancel</button></div>`),ul=Q(`<button style="
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
      " class="svelte-2k82zv">🔄 AUTOPLAY</button> <!>`,1),pl=Q(`<div style="
          position: absolute;
          bottom: 80px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
          border: 2px solid #ffd700;
          border-radius: 10px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
        " class="svelte-2k82zv"><div style="
            color: #ffd700;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            border-bottom: 1px solid #444;
            padding-bottom: 5px;
          " class="svelte-2k82zv">SPIN SPEED</div> <button class="svelte-2k82zv">🐌 SLOW</button> <button class="svelte-2k82zv">⚡ MEDIUM</button> <button class="svelte-2k82zv">🚀 FAST</button></div>`),hl=Q(`<!> <!> <!> <div style="
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  " class="svelte-2k82zv"></div> <div class="svelte-2k82zv"><!> <div style="display: flex; justify-content: space-between; margin-bottom: 8px;" class="svelte-2k82zv"><span style="color: #fff;" class="svelte-2k82zv">CREDITS:</span> <span style="color: #ffd700;" class="svelte-2k82zv"> </span></div> <div style="display: flex; justify-content: space-between; border-top: 1px solid #555; padding-top: 8px;" class="svelte-2k82zv"><span style="color: #fff;" class="svelte-2k82zv">BET:</span> <span style="color: #00ff00;" class="svelte-2k82zv"> </span></div></div> <div style="
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.85);
  padding: 15px;
  border-radius: 10px;
  border: 2px solid #00ff00;
  z-index: 1500;
" class="svelte-2k82zv"><div style="color: white; font-size: 14px; margin-bottom: 10px; text-align: center; font-weight: bold;" class="svelte-2k82zv">BET CONTROLS</div> <div style="display: flex; gap: 10px; align-items: center;" class="svelte-2k82zv"><button style="
        padding: 8px 15px;
        background: #ff4444;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: background 0.2s;
      " class="bet-btn-minus svelte-2k82zv">-</button> <div style="
      color: #00ff00;
      font-family: 'Courier New', monospace;
      font-size: 20px;
      font-weight: bold;
      min-width: 60px;
      text-align: center;
      background: rgba(0, 255, 0, 0.1);
      padding: 5px 10px;
      border-radius: 5px;
    " class="svelte-2k82zv"> </div> <button style="
        padding: 8px 15px;
        background: #44ff44;
        color: #000;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: background 0.2s;
      " class="bet-btn-plus svelte-2k82zv">+</button> <button style="
        padding: 8px 12px;
        background: #ffd700;
        color: #000;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        transition: background 0.2s;
      " class="bet-btn-max svelte-2k82zv">MAX</button></div></div> <button style="
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
  " class="svelte-2k82zv">💰 PAYTABLE</button> <div style="
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
" class="svelte-2k82zv"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-2k82zv">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-2k82zv"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-2k82zv"><span style="color: #aaa;" class="svelte-2k82zv">Rounds:</span> <span style="color: #fff;" class="svelte-2k82zv"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-2k82zv"><span style="color: #aaa;" class="svelte-2k82zv">Wagered:</span> <span style="color: #ff6666;" class="svelte-2k82zv"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-2k82zv"><span style="color: #aaa;" class="svelte-2k82zv">Won:</span> <span style="color: #66ff66;" class="svelte-2k82zv"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 10px; 
    padding-top: 10px; 
    border-top: 1px solid #555;
    font-weight: bold;
    font-size: 18px;
  " class="svelte-2k82zv"><span style="color: #ffd700;" class="svelte-2k82zv">RTP:</span> <span class="svelte-2k82zv"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
  " class="svelte-2k82zv"><span style="color: #aaa;" class="svelte-2k82zv">Hit Freq:</span> <span class="svelte-2k82zv"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-size: 14px;
  " class="svelte-2k82zv"><span style="color: #aaa;" class="svelte-2k82zv">Free Spins Triggered:</span> <span style="color: #66ccff;" class="svelte-2k82zv"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 4px;
    font-size: 14px;
  " class="svelte-2k82zv"><span style="color: #aaa;" class="svelte-2k82zv">Free Spins Played:</span> <span style="color: #66ccff;" class="svelte-2k82zv"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #555;
    font-size: 14px;
  " class="svelte-2k82zv"><span style="color: #aaa;" class="svelte-2k82zv">Empty Slots:</span> <span style="color: #ff9900;" class="svelte-2k82zv"> </span></div> <button style="
      margin-top: 10px;
      width: 100%;
      padding: 5px;
      background: rgba(255, 100, 100, 0.3);
      color: #fff;
      border: 1px solid #ff6666;
      border-radius: 5px;
      cursor: pointer;
      font-size: 11px;
    " class="svelte-2k82zv">Reset Stats</button> <div style="
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  " class="svelte-2k82zv"><button class="svelte-2k82zv"> </button> <button class="svelte-2k82zv">Clear Win Log</button> <button class="svelte-2k82zv"> </button> <button class="svelte-2k82zv">🎰 Test Free Spins</button></div></div> <div style="
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1500;
" class="svelte-2k82zv"><!></div> <button class="svelte-2k82zv"> </button>  <div class="svelte-2k82zv"><img alt="Left End" class="svelte-2k82zv"> <div class="svelte-2k82zv"><div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-2k82zv"><div style="color: #00ff00; font-size: 12px; font-weight: bold;" class="svelte-2k82zv">BET</div> <div style="display: flex; gap: 5px; align-items: center;" class="svelte-2k82zv"><button title="Decrease Bet" class="svelte-2k82zv"></button> <div style="
          color: #fff;
          font-size: 18px;
          font-weight: bold;
          min-width: 80px;
          text-align: center;
          font-family: 'Courier New', monospace;
        " class="svelte-2k82zv"> </div> <button title="Increase Bet" class="svelte-2k82zv"></button></div></div> <img alt="Divider" class="svelte-2k82zv"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-2k82zv"><div style="color: #00ff00; font-size: 12px; font-weight: bold;" class="svelte-2k82zv">BALANCE</div> <div style="
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      " class="svelte-2k82zv"> </div></div> <img alt="Divider" class="svelte-2k82zv"> <div style="position: relative; display: flex; align-items: center; justify-content: center; flex-grow: 0.5;" class="svelte-2k82zv"><div><button title="SPIN" class="svelte-2k82zv"></button></div></div> <img alt="Divider" class="svelte-2k82zv"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-2k82zv"><button title="Autoplay" class="svelte-2k82zv"></button> <img alt="Status bar" style="width: 50px; height: auto;" class="svelte-2k82zv"></div> <img alt="Divider" class="svelte-2k82zv"> <div style="position: relative; display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-2k82zv"><button class="svelte-2k82zv"></button> <div style="
        color: #ffffff;
        font-size: 10px;
        font-weight: bold;
        text-transform: uppercase;
      " class="svelte-2k82zv"> </div> <!></div> <img alt="Divider" class="svelte-2k82zv"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-2k82zv"><button title="Fast Play" class="svelte-2k82zv"></button> <img alt="Status bar" style="width: 50px; height: auto;" class="svelte-2k82zv"></div> <img alt="Divider" class="svelte-2k82zv"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-2k82zv"><div style="color: #00ff00; font-size: 12px; font-weight: bold;" class="svelte-2k82zv">WIN</div> <div style="
        color: #ffd700;
        font-size: 20px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      " class="svelte-2k82zv"> </div></div> <img alt="Divider" class="svelte-2k82zv"> <button title="Menu" class="svelte-2k82zv"></button></div> <img alt="Right End" class="svelte-2k82zv"></div> <!>`,1);function vl(t,e){la(e,!0);const s=Xi.version,a=13,n=1445,o=1e3,i=1.75,l=-30,h=-10,v=160,u=0,m=750,g=80,S=250,E=-230,ee=-390,G=1,T=1.1,P=.5,X=40,ae=0,le=-40,Se=1,ce="height",de=Math.round(100*i),te=Math.round(de*(700/760)),be=te+10,Ie=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],kt=typeof window<"u"&&window.location.hostname.includes("github.io"),se=kt?"/web-sdk/oma-peli/symbols":`${ze}/symbols`,Z=kt?"/web-sdk/oma-peli/controls":`${ze}/controls`,Dt={a:`${se}/Blue_hotrod.jpg`,b:`${se}/Blue_jacket.jpg`,c:`${se}/Blue_rollers.jpg`,d:`${se}/Blue_speakers.jpg`,e:`${se}/Premium_blonde.jpg`,f:`${se}/Premium_brunette.jpg`,g:`${se}/Premium_rocker.jpg`,h:`${se}/New_Wild.jpg`,i:`${se}/Red_burger.jpg`,j:`${se}/Red_fries.jpg`,k:`${se}/Red_milkshake.jpg`,l:`${se}/Scatter.jpg`,emptyslot:`${se}/Emptyslot.jpg`},Ut=`${se}/bg_base.jpg`,ha=`${se}/ReelFrames.png`,va=`${se}/RockABillyReels_logo.png`,Dr={spin:`${ze}/sounds/spin.mp3`,stop:`${ze}/sounds/stop.mp3`,win:`${ze}/sounds/win.mp3`};let Ee=$(!0),Gt={},H=null,he=null,Ht=null,Vt=null;const Ur=60/130,Gr=Math.round(Ur*60);let xe=$(!0),Hr=$(!1),At=$(!1),Yt=$(945),Xt=null,K=$("medium"),Ve=$(!1);const ga=Math.floor(Math.random()*20)+1,zt={background:`${ze}/music/rockabilly reels loop ${ga}.mp3`,freeSpins:`${ze}/music/rockabilly-loop_long.mp3`,drumHit:`${ze}/music/drum-hit.mp3`,winTheme:`${ze}/music/win-stinger.mp3`};function ma(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(ma,500);return}const c=window.Howl;try{H=new c({src:[zt.background],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+ga+")"),y(Hr,!0)},onloaderror:(p,d)=>{console.warn("⚠️ Background music not found:",d)}}),he=new c({src:[zt.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(p,d)=>console.warn("⚠️ Free spins music not found:",d)}),Ht=new c({src:[zt.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Vt=new c({src:[zt.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(p){console.error("Failed to initialize music system:",p)}}function ba(){const c=r(V)?he:H;c&&r(xe)&&!c.playing()&&(c.play(),console.log("🎵 "+(r(V)?"Free spins":"Background")+" music started"))}function Vr(){H&&H.playing()&&(H.fade(H.volume(),0,500),setTimeout(()=>H.stop(),500)),he&&he.playing()&&(he.fade(he.volume(),0,500),setTimeout(()=>he.stop(),500))}function Kt(){H&&H.playing()&&(H.fade(H.volume(),0,500),setTimeout(()=>H.stop(),500)),he&&he.playing()&&(he.fade(he.volume(),0,500),setTimeout(()=>he.stop(),500)),setTimeout(()=>{r(xe)&&ba()},600)}function Yr(){if(H&&H.playing()){const c=H.volume();H.fade(c,0,1e3),setTimeout(()=>{H.stop(),H.volume(.3)},1e3)}}let Qt=$(!1);function Xr(){y(Qt,!1),setTimeout(()=>{y(Qt,!0)},10)}let Ye=null;function Kr(){y(xe,!r(xe)),r(xe)?ba():Vr()}function Qr(){Ht&&r(xe)&&r(Ee)&&Ht.play()}function Zr(){Vt&&r(xe)&&r(Ee)&&Vt.play()}let St=null,Xe=null,ft=null,ut=null,pt=$("Initializing..."),Ke=$(""),ye=[],Te=$(1e3),q=$(10);const xa=1,Zt=100;let ve=$(!1),Qe=$(0),je=$(!1),qr=$(0),De=!1,Le=null,qt=!1,Ze=$(0),qe=$(0),ht=$(0),Jt=$(0),es=Ue(()=>r(qe)>0?(r(ht)/r(qe)*100).toFixed(2):"0.00"),ts=Ue(()=>r(Ze)>0?(r(Jt)/r(Ze)*100).toFixed(2):"0.00"),V=$(!1),Re=$(0),Ce=$(0),Et=$(0),ss=$(0),Tt=$(0),as=$(0),Jr=Ue(()=>r(Tt)>0?(r(as)/r(Tt)*100).toFixed(2):"0.00"),ge=$(we([]));function en(c,p,d){const w=new Date().toLocaleString("fi-FI");let _=`
${"=".repeat(60)}
`;_+=`ROUND #${c} - ${w}
`,_+=`Mode: ${r(V)?"FREE SPINS":"BASE GAME"}
`,_+=`${"=".repeat(60)}
`,p.forEach((k,L)=>{_+=`
Win ${L+1}:
`,_+=`  Symbol: ${k.symbol} (${ka[k.symbol]})
`,_+=`  Count: ${k.count} symbols
`,_+=`  Multiplier: ${k.multiplier}x
`,_+=`  Payout: ${k.payout.toFixed(2)}
`,_+=`  Positions: [${k.positions.join(", ")}]
`}),_+=`
${"─".repeat(60)}
`,_+=`TOTAL WIN: ${d.toFixed(2)}
`,_+=`${"=".repeat(60)}
`,r(ge).push(_)}function tn(){const c=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${r(ge).join(`
`)}`,p=new Blob([c],{type:"text/plain"}),d=URL.createObjectURL(p),w=document.createElement("a");w.href=d,w.download=`win-log-${Date.now()}.txt`,w.click(),URL.revokeObjectURL(d)}function sn(){y(ge,we([]))}function an(){r(V)||(y(V,!0),y(Re,10),y(Ce,0),$e(Et),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),Kt())}const rn={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},nn={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function ya(c){if(c===6)return Math.random()<.55?"h":"emptyslot";const p=r(V)?nn:rn,d=Math.random();let w=0;const _=Ie.filter(L=>L!=="h"),k=_.reduce((L,D)=>L+p[D],0);for(const L of _)if(w+=p[L]/k,d<w)return L;return"f"}function _a(){const c=[];for(let p=0;p<a;p++){const d=ya(p);c.push(d),$e(Tt),d==="emptyslot"&&$e(as)}return c}function wa(c){return c<3?{col:0,row:c}:c<6?{col:1,row:c-3}:c===6?{col:2,row:0}:c<10?{col:3,row:c-7}:{col:4,row:c-10}}function vt(c,p){return c===0?p:c===1?3+p:c===2?6:c===3?7+p:c===4?10+p:-1}function on(){if(r(V)){const c=Math.random();return c<.7?3:c<.92?5:10}else{const c=Math.random();return c<.7?1:c<.92?2:3}}const ln={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function cn(){var fe;const c=[],p=[];for(let z=0;z<a;z++)gt[z]==="l"&&p.push(z);if(p.length>=5){const z=p.length;y(Re,r(Re)+z),r(V)?console.log(`🎰 FREE SPINS RETRIGGERED! +${z} FREE SPINS! Total: ${r(Re)}`):(y(V,!0),y(Ce,0),$e(Et),console.log(`🎰 FREE SPINS TRIGGERED! ${p.length} scatters = ${z} FREE SPINS!`),Kt()),c.push({symbol:"l",count:p.length,payout:0,positions:p,multiplier:1})}const d=[];for(let z=0;z<3;z++)for(let R=0;R<3;R++)for(let O=0;O<1;O++)for(let I=0;I<3;I++)for(let N=0;N<3;N++){const W=[vt(0,z),vt(1,R),vt(2,O),vt(3,I),vt(4,N)];d.push(W)}console.log(`Generated ${d.length} possible paths (should be 81)`);const w=[];for(const z of d){const R=z.map(W=>gt[W]);if(R[0]==="emptyslot"||R[0]==="l")continue;let O=null;for(let W=0;W<R.length;W++)if(R[W]!=="h"&&R[W]!=="emptyslot"&&R[W]!=="l"){O=R[W];break}if(!O)continue;let I=0;const N=new Set;for(let W=0;W<z.length;W++){const Fe=z[W],{col:rt}=wa(Fe),ue=R[W];(ue===O||ue==="h")&&N.add(rt)}for(let W=0;W<5&&N.has(W);W++)I++;if(I>=3){const Fe=z[0]%3;w.push({symbol:O,length:I,path:z.slice(0,I),startRow:Fe})}}const _=[],k=new Map;for(const z of w){const R=`${z.symbol}-${z.path.join(",")}`;k.has(R)||k.set(R,[]),k.get(R).push(z)}for(const[z,R]of k.entries()){const O=Math.max(...R.map(N=>N.length)),I=R.find(N=>N.length===O);I&&_.push(I)}const L=[],D=new Map;for(const z of _)D.has(z.symbol)||D.set(z.symbol,[]),D.get(z.symbol).push(z);const U=[];for(const[z,R]of D.entries()){const O=Math.max(...R.map(N=>N.length)),I=R.filter(N=>N.length===O);U.push(...I)}const J=new Map;for(const z of U){const R=`${z.symbol}-${z.length}`;J.has(R)||J.set(R,[]),J.get(R).push(z)}const M=U.length>0?on():1;for(const[z,R]of J.entries()){const O=R[0],I=(fe=ln[O.symbol])==null?void 0:fe[O.length];if(I!==void 0&&I>0){const N=new Map;for(const ue of R)for(let ne=0;ne<ue.length;ne++)N.has(ne)||N.set(ne,new Set),N.get(ne).add(ue.path[ne]);let W=1;for(let ue=0;ue<O.length;ue++){const ne=N.get(ue);W*=ne?ne.size:1}const Fe=I*r(q)*W*M;console.log(`  ${O.length}x${O.symbol}: ${W} ways × ${I}x × ${r(q)} bet × ${M} mult = ${Fe}`);const rt=new Set;for(const ue of R)ue.path.forEach(ne=>rt.add(ne));L.push({symbol:O.symbol,count:O.length,payout:Fe,positions:Array.from(rt),multiplier:M})}}return c.push(...L),c}let me=$(0),Je=$(we([])),Be=$(!1),et=$(!1);const ka={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function rs(c){if(!r(Ee)||!Gt[c])return;const p=Gt[c];p.currentTime=0,p.play().catch(d=>{console.warn("Äänen toisto epäonnistui:",c,d)})}function dn(c){mt.forEach(p=>Y.stage.removeChild(p)),mt=[],c.forEach(p=>{p.positions.forEach(d=>{const w=tt[d],_=new Zs().rect(0,0,de,te).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});_.x=w.container.x,_.y=w.container.y,Y.stage.addChild(_),mt.push(_);let k=0,L=1;const D=.05;Y.ticker.add(()=>{k+=L*D,k>=.4&&(L=-1),k<=0&&(L=1),_.alpha=.5+k})})})}function ns(){mt.forEach(c=>Y.stage.removeChild(c)),mt=[]}let gt=_a(),os,Y,tt=[],mt=[];class fn{constructor(p,d){_e(this,"index");_e(this,"container");_e(this,"offset",0);_e(this,"speed",0);_e(this,"targetSpeed",30);_e(this,"state","idle");_e(this,"stopDelay",0);_e(this,"bounceOffset",0);_e(this,"bounceSpeed",0);_e(this,"bounceFrames",0);this.index=p,this.container=d}start(p){this.state="spinning",this.speed=0,r(K)==="slow"?this.targetSpeed=20:r(K)==="medium"?this.targetSpeed=35:this.targetSpeed=50,this.stopDelay=p}startSynchronized(p){const d=60+p*Gr;this.start(d)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const p=r(K)==="slow"?.88:r(K)==="medium"?.92:.95;this.speed*=p,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,rs("stop"),Qr())}this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=be&&(this.offset=0,gt[this.index]=ya(this.index)))}}draw(){const p=this.container;p.removeChildren();const d=gt[this.index];if(!d||!St||!St[d])return;const w=St[d];if(!w)return;const _=this.offset+this.bounceOffset,k=new It(w);k.width=de,k.height=te,k.x=0,k.y=_,p.addChild(k)}}kr(async()=>{Y=new Cr,await Y.init({width:n,height:o,background:"#001a33"}),os.appendChild(Y.canvas);const c={};try{y(pt,"Loading background and UI images..."),ye.push(`Loading background: ${Ut}`),ye.push(`Loading reel frames: ${ha}`),ye.push(`Loading logo: ${va}`),await nt.load([{alias:"background",src:Ut},{alias:"reelframes",src:ha},{alias:"logo",src:va}]),Xe=Ge.from("background"),ft=Ge.from("reelframes"),ut=Ge.from("logo"),console.log("✅ Background texture created:",Xe.width,"x",Xe.height),console.log("✅ Reel frames texture created:",ft.width,"x",ft.height),console.log("✅ Logo texture created:",ut.width,"x",ut.height),ye.push("✅ All UI images loaded"),y(pt,"Loading symbols...");const d=[];for(const w of Ie)d.push({alias:w,src:Dt[w]});await nt.load(d);for(const w of Ie){const _=Dt[w];ye.push(`Loading symbol ${w}: ${_}`);try{const k=Ge.from(w);c[w]=k,console.log(`✅ Symbol ${w} loaded:`,k.width,"x",k.height),ye.push(`✅ Symbol ${w} loaded`)}catch(k){const L=`❌ Failed to load symbol ${w} from ${_}: ${k}`;throw ye.push(L),console.error(L),new Error(L)}}St=c,y(pt,"Assets loaded successfully!")}catch(d){y(Ke,`Asset loading failed: ${d}`),ye.push(r(Ke)),console.error(r(Ke));return}console.log("Ladataan ääniefektit...");for(const[d,w]of Object.entries(Dr)){const _=new Audio;_.src=w,_.preload="auto",_.volume=.7,_.load(),_.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${w} (käytetään hiljaista placeholderia)`)}),Gt[d]=_}if(console.log("Taustakuva ladattu, tekstuuri:",Xe),Xe){const d=new It(Xe);Y.renderer.width/Y.renderer.height;const w=d.texture.width/d.texture.height;let _;_=Y.renderer.height/d.texture.height,_*=Se,d.scale.set(_),d.x=(Y.renderer.width-d.width)/2,d.y=(Y.renderer.height-d.height)/2+le,Y.stage.addChild(d),console.log("Taustakuva lisätty:",ce,"mode, size:",d.width.toFixed(0),"x",d.height.toFixed(0),"image aspect:",w.toFixed(2),"scale:",_.toFixed(2),"pos:",d.x.toFixed(0),d.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(d=>({x:d.x+l,y:d.y+h})),tt=[];for(let d=0;d<a;d++){const w=wa(d),_=w.col,k=w.row,L=300+_*(de+20),D=250+k*(te+15),U=d===6?L+u:L,J=d===6?D+v:D,M=new da;M.x=U+l,M.y=J+h;const fe=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],z=new Zs().rect(0,0,de,te).fill({color:fe[d],alpha:.3});z.x=M.x,z.y=M.y,Y.stage.addChild(z);const R=new Sr({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),O=new Vi({text:d.toString(),style:R});O.x=M.x+5,O.y=M.y+5,Y.stage.addChild(O);const I=new Zs().rect(0,0,de,te).fill(16777215);I.x=M.x,I.y=M.y,M.mask=I,Y.stage.addChild(I),Y.stage.addChild(M),tt.push(new fn(d,M))}if(ft){const d=new It(ft);d.scale.set(1),d.x=250,d.y=200,Y.stage.addChild(d),Xt=d,y(Yt,we(d.width)),console.log("Reel frames lisätty:",d.width.toFixed(0),"x",d.height.toFixed(0)),console.log("Control panel leveys päivitetty:",r(Yt).toFixed(0))}if(ut){const d=new It(ut);d.scale.set(P),d.x=(Y.renderer.width-d.width)/2+X,d.y=ae,Y.stage.addChild(d),console.log("Logo lisätty päällimmäiseen layeriin:",d.width.toFixed(0),"x",d.height.toFixed(0))}ma(),Y.ticker.add(un)});function un(){for(const c of tt)c.update(),c.draw();if(!r(Be)&&!qt&&tt.every(c=>c.state==="stopped")){qt=!0,Yr();const c=cn();console.log(`Checking wins, found ${c.length} wins`),c.length>0?(y(Je,we(c)),y(me,we(c.reduce((p,d)=>p+d.payout,0))),en(r(Ze),c,r(me)),pn(r(me)),y(Be,!0),y(qr,we(Date.now())),console.log(`🎉 VOITTO! ${r(me)} pistettä! Uusi saldo: ${r(Te)}`),console.log(`isShowingWin set to: ${r(Be)}, totalWin: ${r(me)}`),c.forEach(p=>{const d=p.multiplier?` (${p.multiplier}x multiplier)`:"";console.log(`${p.count}x ${p.symbol} = ${p.payout} pistettä${d}`)}),dn(c),rs("win"),r(ve)&&!De&&(De=!0,Le=window.setTimeout(()=>{r(Be)&&r(ve)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),y(Be,!1),ns()),Le=window.setTimeout(()=>{De=!1,ls()},200)},1500))):(console.log("No wins found this spin"),r(ve)&&!De&&(De=!0,Le=window.setTimeout(()=>{De=!1,ls()},1e3))),r(V)&&r(Re)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${r(Ce)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${r(Ce).toFixed(2)}`),y(V,!1),y(Ce,0),Kt()},2e3))}}function Aa(){if(H&&r(xe)&&!H.playing()&&(H.play(),console.log("🎵 Background music started on first spin")),Xr(),r(V)&&r(Re)>0)$e(Re,-1),$e(ss),console.log(`🎰 FREE SPIN! Remaining: ${r(Re)}`);else if(!r(V)){if(r(Te)<r(q)){alert(`Not enough credits! Balance: ${r(Te)}, Bet: ${r(q)}`),is();return}y(Te,r(Te)-r(q)),$e(Ze),y(qe,r(qe)+r(q))}Le!==null&&(clearTimeout(Le),Le=null),y(Je,we([])),y(me,0),y(Be,!1),qt=!1,ns(),gt=_a(),tt.forEach((c,p)=>{c.startSynchronized(p)}),rs("spin")}function pn(c){if(y(Te,r(Te)+c),y(ht,r(ht)+c),r(V)&&y(Ce,r(Ce)+c),c>0){$e(Jt);const p=c/r(q);p>=10&&Zr(),Ye&&(p>=50?Ye.show():p>=20?setTimeout(()=>Ye.show(),200):p>=10&&setTimeout(()=>Ye.show(),400))}}function za(){r(q)<Zt&&y(q,we(Math.min(r(q)+1,Zt)))}function Sa(){r(q)>xa&&y(q,we(Math.max(r(q)-1,xa)))}function hn(){y(q,Zt)}function bt(c){y(ve,!0),y(Qe,we(c)),y(je,!1),ls()}function is(){y(ve,!1),y(Qe,0),De=!1,Le!==null&&(clearTimeout(Le),Le=null)}function ls(){if(!r(ve)||r(Qe)<=0){is();return}console.log(`Autoplay: Starting spin ${r(Qe)} rounds left`),Aa(),$e(Qe,-1)}function vn(){confirm("Reset all statistics?")&&(y(Ze,0),y(qe,0),y(ht,0),y(Jt,0),y(Et,0),y(ss,0),y(Tt,0),y(as,0))}var Ea=hl();Eo(c=>{var p=el();f(Oe(p)),j(c,p)});var Ta=Oe(Ea);{var gn=c=>{var p=rl(),d=f(b(p),2),w=f(b(d));x(d);var _=f(d,2);{var k=O=>{var I=tl(),N=f(b(I));x(I),oe(()=>F(N,` ${r(Ke)??""}`)),j(O,I)};ie(_,O=>{r(Ke)&&O(k)})}var L=f(_,2),D=f(b(L));D.nodeValue=` ${ze??""}`,x(L);var U=f(L,2),J=f(b(U));J.nodeValue=` ${Ut??""}`,x(U);var M=f(U,2),fe=f(b(M));x(M);var z=f(M,2);{var R=O=>{var I=al(),N=b(I),W=b(N);x(N);var Fe=f(N,2);Nt(Fe,17,()=>ye,Wt,(rt,ue)=>{var ne=sl(),Xn=b(ne,!0);x(ne),oe(()=>F(Xn,r(ue))),j(rt,ne)}),x(I),oe(()=>F(W,`Log (${ye.length??""})`)),j(O,I)};ie(z,O=>{ye.length>0&&O(R)})}x(p),oe(()=>{F(w,` ${r(pt)??""}`),F(fe,` ${Dt.a??""}`)}),j(c,p)};ie(Ta,c=>{(r(pt)!=="Assets loaded successfully!"||r(Ke))&&c(gn)})}var La=f(Ta,2);{var mn=c=>{var p=il(),d=f(b(p),2),w=b(d);x(d);var _=f(d,2);Nt(_,17,()=>r(Je),Wt,(U,J)=>{var M=nl(),fe=b(M);x(M),oe(z=>F(fe,`${r(J).count??""} × ${ka[r(J).symbol]??""} = ${z??""} pistettä`),[()=>r(J).payout.toFixed(2)]),j(U,M)});var k=f(_,2);{var L=U=>{var J=ol(),M=b(J),fe=b(M);x(M),x(J),oe(()=>F(fe,`✨ ${r(Je)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),j(U,J)};ie(k,U=>{r(Je).length>0&&r(Je)[0].multiplier>1&&U(L)})}var D=f(k,2);x(p),oe(()=>F(w,`${r(me)??""} pistettä`)),C("click",D,()=>{y(Be,!1),ns(),console.log("Win popup closed, ready for next spin")}),j(c,p)};ie(La,c=>{r(me)>0&&r(Be)&&c(mn)})}var Ra=f(La,2);{var bn=c=>{var p=ll(),d=f(b(p),8);x(p),C("click",d,()=>{y(et,!1)}),j(c,p)};ie(Ra,c=>{r(et)&&c(bn)})}var $a=f(Ra,2);or($a,c=>os=c,()=>os);var Lt=f($a,2),Pa=b(Lt);{var xn=c=>{var p=cl(),d=Oe(p),w=f(b(d),2),_=b(w,!0);x(w),x(d);var k=f(d,2),L=f(b(k),2),D=b(L,!0);x(L),x(k),oe(U=>{F(_,r(Re)),F(D,U)},[()=>r(Ce).toFixed(2)]),j(c,p)};ie(Pa,c=>{r(V)&&c(xn)})}var cs=f(Pa,2),Oa=f(b(cs),2),yn=b(Oa,!0);x(Oa),x(cs);var Ia=f(cs,2),Ca=f(b(Ia),2),_n=b(Ca,!0);x(Ca),x(Ia),x(Lt);var ds=f(Lt,2),Ba=f(b(ds),2),Fa=b(Ba),fs=f(Fa,2),wn=b(fs,!0);x(fs);var Ma=f(fs,2),kn=f(Ma,2);x(Ba),x(ds);var Wa=f(ds,2),us=f(Wa,2),Na=f(b(us),2);Na.textContent=`v${s}`;var ps=f(Na,2),ja=f(b(ps),2),An=b(ja,!0);x(ja),x(ps);var hs=f(ps,2),Da=f(b(hs),2),zn=b(Da,!0);x(Da),x(hs);var vs=f(hs,2),Ua=f(b(vs),2),Sn=b(Ua,!0);x(Ua),x(vs);var gs=f(vs,2),ms=f(b(gs),2),En=b(ms);x(ms),x(gs);var bs=f(gs,2),xs=f(b(bs),2),Tn=b(xs);x(xs),x(bs);var ys=f(bs,2),Ga=f(b(ys),2),Ln=b(Ga,!0);x(Ga),x(ys);var _s=f(ys,2),Ha=f(b(_s),2),Rn=b(Ha,!0);x(Ha),x(_s);var ws=f(_s,2),Va=f(b(ws),2),$n=b(Va);x(Va),x(ws);var Ya=f(ws,2),Xa=f(Ya,2),st=b(Xa),Pn=b(st);x(st);var Rt=f(st,2),xt=f(Rt,2),On=b(xt);x(xt);var ks=f(xt,2);x(Xa),x(us);var As=f(us,2),In=b(As);{var Cn=c=>{var p=dl(),d=f(b(p),2),w=b(d);x(d);var _=f(d,2);x(p),oe(()=>F(w,`${r(Qe)??""} left`)),C("click",_,is),j(c,p)},Bn=c=>{var p=ul(),d=Oe(p),w=f(d,2);{var _=k=>{var L=fl(),D=f(b(L),2),U=f(D,2),J=f(U,2),M=f(J,2),fe=f(M,2),z=f(fe,2);x(L),C("click",D,()=>bt(10)),C("click",U,()=>bt(100)),C("click",J,()=>bt(1e3)),C("click",M,()=>bt(1e4)),C("click",fe,()=>bt(1e5)),C("click",z,()=>{y(je,!1)}),j(k,L)};ie(w,k=>{r(je)&&k(_)})}C("click",d,()=>{y(je,!r(je))}),j(c,p)};ie(In,c=>{r(ve)?c(Cn):c(Bn,!1)})}x(As);var at=f(As,2),Fn=b(at,!0);x(at);var $t=f(at,2),zs=b($t);A(zs,"src",`${Z??""}/Control_leftend.png`),A(zs,"style",`height: ${g}px; flex-shrink: 0;`);var Pt=f(zs,2);A(Pt,"style",`
    flex-grow: 1;
    height: ${g}px;
    background-image: url('${Z??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 20px;
  `);var Ss=b(Pt),Ka=f(b(Ss),2),Es=b(Ka);A(Es,"style",`
            width: 40px;
            height: 40px;
            background-image: url('${Z??""}/Control_lowerbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `);var Ts=f(Es,2),Mn=b(Ts,!0);x(Ts);var Qa=f(Ts,2);A(Qa,"style",`
            width: 40px;
            height: 40px;
            background-image: url('${Z??""}/Control_upperbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(Ka),x(Ss);var Ls=f(Ss,2);A(Ls,"src",`${Z??""}/Control_divider.png`),A(Ls,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Rs=f(Ls,2),Za=f(b(Rs),2),Wn=b(Za,!0);x(Za),x(Rs);var $s=f(Rs,2);A($s,"src",`${Z??""}/Control_divider.png`),A($s,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Ps=f($s,2),Os=b(Ps),Is=b(Os);x(Os),x(Ps);var Cs=f(Ps,2);A(Cs,"src",`${Z??""}/Control_divider.png`),A(Cs,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Bs=f(Cs,2),Fs=b(Bs),Nn=f(Fs,2);x(Bs);var Ms=f(Bs,2);A(Ms,"src",`${Z??""}/Control_divider.png`),A(Ms,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Ws=f(Ms,2),Ot=b(Ws);A(Ot,"style",`
          width: 50px;
          height: 50px;
          background-image: url('${Z??""}/Control_fastplay_select.png');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `);var Ns=f(Ot,2),jn=b(Ns,!0);x(Ns);var Dn=f(Ns,2);{var Un=c=>{var p=pl(),d=f(b(p),2),w=f(d,2),_=f(w,2);x(p),oe(()=>{A(d,"style",`
              background: ${(r(K)==="slow"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: 2px solid ${(r(K)==="slow"?"#ffd700":"#666")??""};
              color: ${(r(K)==="slow"?"#ffd700":"#ffffff")??""};
              padding: 8px 20px;
              border-radius: 5px;
              cursor: pointer;
              font-weight: bold;
              font-size: 12px;
              transition: all 0.2s;
            `),A(w,"style",`
              background: ${(r(K)==="medium"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: 2px solid ${(r(K)==="medium"?"#ffd700":"#666")??""};
              color: ${(r(K)==="medium"?"#ffd700":"#ffffff")??""};
              padding: 8px 20px;
              border-radius: 5px;
              cursor: pointer;
              font-weight: bold;
              font-size: 12px;
              transition: all 0.2s;
            `),A(_,"style",`
              background: ${(r(K)==="fast"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: 2px solid ${(r(K)==="fast"?"#ffd700":"#666")??""};
              color: ${(r(K)==="fast"?"#ffd700":"#ffffff")??""};
              padding: 8px 20px;
              border-radius: 5px;
              cursor: pointer;
              font-weight: bold;
              font-size: 12px;
              transition: all 0.2s;
            `)}),C("click",d,()=>{y(K,"slow"),y(Ve,!1)}),C("click",w,()=>{y(K,"medium"),y(Ve,!1)}),C("click",_,()=>{y(K,"fast"),y(Ve,!1)}),j(c,p)};ie(Dn,c=>{r(Ve)&&c(Un)})}x(Ws);var js=f(Ws,2);A(js,"src",`${Z??""}/Control_divider.png`),A(js,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Ds=f(js,2),Us=b(Ds),Gn=f(Us,2);x(Ds);var Gs=f(Ds,2);A(Gs,"src",`${Z??""}/Control_divider.png`),A(Gs,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Hs=f(Gs,2),qa=f(b(Hs),2),Hn=b(qa,!0);x(qa),x(Hs);var Vs=f(Hs,2);A(Vs,"src",`${Z??""}/Control_divider.png`),A(Vs,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Ja=f(Vs,2);A(Ja,"style",`
        width: 50px;
        height: 50px;
        background-image: url('${Z??""}/Control_menubar.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),x(Pt);var er=f(Pt,2);A(er,"src",`${Z??""}/Control_rightend.png`),A(er,"style",`height: ${g}px; flex-shrink: 0;`),x($t);var Vn=f($t,2);const Yn=Ue(()=>r(me)/r(q)>=50?"jackpot":r(me)/r(q)>=20?"medium":"small");or(Ji(Vn,{get winLevel(){return r(Yn)},get winAmount(){return r(me)}}),c=>Ye=c,()=>Ye),oe((c,p,d,w,_,k,L,D,U)=>{A(Lt,"style",`
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
  border: 2px solid ${(r(V)?"#ff00ff":"#ffd700")??""};
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
  z-index: 1500;
  min-width: 180px;
`),F(yn,c),F(_n,r(q)),F(wn,r(q)),F(An,p),F(zn,d),F(Sn,w),A(ms,"style",`color: ${_??""};`),F(En,`${r(es)??""}%`),A(xs,"style",`color: ${k??""};`),F(Tn,`${r(ts)??""}%`),F(Ln,r(Et)),F(Rn,r(ss)),F($n,`${r(Jr)??""}%`),st.disabled=r(ge).length===0,A(st,"style",`
        width: 100%;
        padding: 5px;
        background: ${(r(ge).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(r(ge).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(r(ge).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(r(ge).length>0?"1":"0.5")??""};
      `),F(Pn,`Download Win Log (${r(ge).length??""})`),Rt.disabled=r(ge).length===0,A(Rt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(r(ge).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(r(ge).length>0?"1":"0.5")??""};
      `),A(xt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(r(xe)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(r(xe)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),F(On,`🎵 Music: ${(r(xe)?"ON":"OFF")??""}`),ks.disabled=r(V),A(ks,"style",`
        width: 100%;
        padding: 5px;
        background: ${(r(V)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(r(V)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(r(V)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(r(V)?"0.5":"1")??""};
      `),A(at,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(r(Ee)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(r(Ee)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),A(at,"title",r(Ee)?"Mykistä äänet":"Laita äänet päälle"),F(Fn,r(Ee)?"🔊":"🔇"),A($t,"style",`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(
    calc(-50% + ${(Xt?Xt.x:S)+E}px),
    calc(-50% + ${m+ee}px)
  ) scale(${G}, ${T});
  transform-origin: center center;
  width: ${r(Yt)??""}px;
  height: ${g}px;
  display: flex;
  align-items: center;
  z-index: 1000;
`),F(Mn,L),F(Wn,D),ra(Os,1,`play-button-wrapper ${(r(Qt)?"glare-animate":"")??""}`,"svelte-2k82zv"),Is.disabled=r(ve),A(Is,"style",`
            width: 130px;
            height: 130px;
            background-image: url('${Z??""}/Control_playbutton.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border: none;
            cursor: ${(r(ve)?"not-allowed":"pointer")??""};
            background-color: transparent;
            opacity: ${(r(ve)?.5:1)??""};
            position: relative;
            z-index: 10;
            border-radius: 50%;
          `),A(Fs,"style",`
          width: 50px;
          height: 50px;
          background-image: url('${Z??""}/${(r(ve)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),A(Nn,"src",`${Z??""}/${(r(ve)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),A(Ot,"title",`Spin Speed: ${(r(K)==="slow"?"Slow":r(K)==="medium"?"Medium":"Fast")??""}`),F(jn,r(K)==="slow"?"Slow":r(K)==="medium"?"Med":"Fast"),A(Us,"style",`
          width: 50px;
          height: 50px;
          background-image: url('${Z??""}/${(r(At)?"Control_fastplay_select.png":"Control_fastplay_deselect.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),A(Gn,"src",`${Z??""}/${(r(At)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),F(Hn,U)},[()=>r(Te).toLocaleString(),()=>r(Ze).toLocaleString(),()=>r(qe).toLocaleString(),()=>r(ht).toLocaleString(),()=>parseFloat(r(es))>=95?"#00ff00":parseFloat(r(es))>=85?"#ffff00":"#ff6666",()=>parseFloat(r(ts))>=30?"#00ff00":parseFloat(r(ts))>=20?"#ffff00":"#ff6666",()=>r(q).toFixed(2),()=>r(Te).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>r(me).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),C("click",Fa,Sa),C("click",Ma,za),C("click",kn,hn),C("click",Wa,()=>{y(et,!r(et))}),C("click",Ya,vn),C("click",st,tn),C("click",Rt,sn),C("click",xt,Kr),C("click",ks,an),C("click",at,()=>{y(Ee,!r(Ee))}),C("click",Es,Sa),C("click",Qa,za),C("click",Is,Aa),C("click",Fs,()=>{y(je,!r(je))}),C("click",Ot,()=>{y(Ve,!r(Ve))}),C("click",Us,()=>{y(At,!r(At))}),C("click",Ja,()=>{y(et,!r(et))}),j(t,Ea),ca()}var gl=Q('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),ml=Q('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function bl(t,e){la(e,!1);let s=aa(e,"isAuthenticated",12,!1),a=sa(""),n=sa(!1);const o="slot2024";function i(){r(a)===o?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(y(n,!0),y(a,""),setTimeout(()=>y(n,!1),3e3))}kr(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),eo();var l=br(),h=Oe(l);{var v=u=>{var m=ml(),g=b(m),S=f(b(g),4),E=b(S);jo(E),So(2),x(S);var ee=f(S,2);{var G=T=>{var P=gl();j(T,P)};ie(ee,T=>{r(n)&&T(G)})}x(g),x(m),Uo(E,()=>r(a),T=>y(a,T)),C("submit",S,Go(i)),j(u,m)};ie(h,u=>{s()||u(v)})}j(t,l),ca()}var xl=Q('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),yl=Q("<!> <!>",1);function Ol(t){let e=sa(!1);var s=yl(),a=Oe(s);bl(a,{get isAuthenticated(){return r(e)},set isAuthenticated(i){y(e,i)},$$legacy:!0});var n=f(a,2);{var o=i=>{var l=xl(),h=f(Oe(l),2);vl(h,{}),j(i,l)};ie(n,i=>{r(e)&&i(o)})}j(t,s)}export{$r as A,Tr as C,qo as R,Yo as S,Pr as V,Ol as _,Vo as u};
