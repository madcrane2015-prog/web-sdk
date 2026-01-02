const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BwG0urDe.js","./Cb0119l1.js","./BrW7ntrJ.js","./Fx7Xcyif.js","./CkL9UklL.js","./C2GHuDhf.js","./DxyzD-xb.js","./BYN1Yfl4.js"])))=>i.map(i=>d[i]);
var Dn=Object.defineProperty;var Un=(s,e,a)=>e in s?Dn(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var Ee=(s,e,a)=>Un(s,typeof e!="symbol"?e+"":e,a);import{g as Gn,l as Hn,e as Gt,a as V,t as Z,n as ko,i as F,j as Vn,k as Yn}from"./CsxIJThA.js";import{i as Xn}from"./DqfWCwGf.js";import{y as Te,j as Kn,a8 as qn,F as t,Q as Qn,aa as Jn,ab as oo,h as no,e as Js,k as St,l as Zn,ac as Ao,w as $o,ad as er,q as So,a7 as tr,U as sr,a2 as ro,ar as Zs,z as io,as as ar,at as or,au as nr,o as rr,av as ir,aw as lr,ax as dr,ay as cr,b as pr,az as fr,aA as ur,a6 as gr,aB as hr,aC as vr,D as mr,L as xr,p as Yt,f as He,ah as P,a as Xt,T as g,c as w,s as u,r as _,t as te,I as De,ag as ga,aD as Le,aE as br,aF as ia}from"./Fx7Xcyif.js";import{_ as lo,i as se,p as ue}from"./BrW7ntrJ.js";import{s as H}from"./DfoPkomP.js";import{p as rt,b as co}from"./C4w3i6Q0.js";import{b as be}from"./3DKfKKIE.js";import{e as Ge,E as M,a as yr,C as ha,Q as la,V as da,N as ea,D as ge,H as wr,p as Ke,a0 as ct,a1 as qe,a2 as _r,w as Ue,a3 as Lt,a4 as Eo,a5 as pt,a6 as Oe,a7 as Kt,a8 as Lo,a9 as kr,aa as ta,y as sa}from"./Cb0119l1.js";import{A as Ar,B as po,G as $r,a as fo}from"./CkL9UklL.js";function Ht(s,e){return e}function Sr(s,e,a,o){for(var n=[],r=e.length,l=0;l<r;l++)nr(e[l].e,n,!0);var c=r>0&&n.length===0&&a!==null;if(c){var h=a.parentNode;rr(h),h.append(a),o.clear(),Ne(s,e[0].prev,e[r-1].next)}ir(n,()=>{for(var b=0;b<r;b++){var f=e[b];c||(o.delete(f.k),Ne(s,f.prev,f.next)),lr(f.e,!c)}})}function Vt(s,e,a,o,n,r=null){var l=s,c={flags:e,items:new Map,first:null};Te&&Kn();var h=null,b=!1,f=Qn(()=>{var v=a();return tr(v)?v:v==null?[]:So(v)});qn(()=>{var v=t(f),m=v.length;if(b&&m===0)return;b=m===0;let E=!1;if(Te){var T=l.data===Jn;T!==(m===0)&&(l=oo(),no(l),Js(!1),E=!0)}if(Te){for(var K=null,C,R=0;R<m;R++){if(St.nodeType===8&&St.data===Zn){l=St,E=!0,Js(!1);break}var z=v[R],ae=o(z,R);C=To(St,c,K,null,z,ae,R,n,e,a),c.items.set(ae,C),K=C}m>0&&no(oo())}Te||Er(v,c,l,n,e,o,a),r!==null&&(m===0?h?Ao(h):h=$o(()=>r(l)):h!==null&&er(h,()=>{h=null})),E&&Js(!0),t(f)}),Te&&(l=St)}function Er(s,e,a,o,n,r,l){var c=s.length,h=e.items,b=e.first,f=b,v,m=null,E=[],T=[],K,C,R,z;for(z=0;z<c;z+=1){if(K=s[z],C=r(K,z),R=h.get(C),R===void 0){var ae=f?f.e.nodes_start:a;m=To(ae,e,m,m===null?e.first:m.next,K,C,z,o,n,l),h.set(C,m),E=[],T=[],f=m.next;continue}if(Lr(R,K,z),(R.e.f&Zs)!==0&&Ao(R.e),R!==f){if(v!==void 0&&v.has(R)){if(E.length<T.length){var oe=T[0],D;m=oe.prev;var ie=E[0],le=E[E.length-1];for(D=0;D<E.length;D+=1)uo(E[D],oe,a);for(D=0;D<T.length;D+=1)v.delete(T[D]);Ne(e,ie.prev,le.next),Ne(e,m,ie),Ne(e,le,oe),f=oe,m=le,z-=1,E=[],T=[]}else v.delete(R),uo(R,f,a),Ne(e,R.prev,R.next),Ne(e,R,m===null?e.first:m.next),Ne(e,m,R),m=R;continue}for(E=[],T=[];f!==null&&f.k!==C;)(f.e.f&Zs)===0&&(v??(v=new Set)).add(f),T.push(f),f=f.next;if(f===null)continue;R=f}E.push(R),m=R,f=R.next}if(f!==null||v!==void 0){for(var ye=v===void 0?[]:So(v);f!==null;)(f.e.f&Zs)===0&&ye.push(f),f=f.next;var Pe=ye.length;if(Pe>0){var N=null;Sr(e,ye,N,h)}}io.first=e.first&&e.first.e,io.last=m&&m.e}function Lr(s,e,a,o){or(s.v,e),s.i=a}function To(s,e,a,o,n,r,l,c,h,b){var f=(h&dr)!==0,v=(h&cr)===0,m=f?v?sr(n):ro(n):n,E=(h&ar)===0?l:ro(l),T={i:E,v:m,k:r,a:null,e:null,prev:a,next:o};try{return T.e=$o(()=>c(s,m,E,b),Te),T.e.prev=a&&a.e,T.e.next=o&&o.e,a===null?e.first=T:(a.next=T,a.e.next=T.e),o!==null&&(o.prev=T,o.e.prev=T.e),T}finally{}}function uo(s,e,a){for(var o=s.next?s.next.e.nodes_start:a,n=e?e.e.nodes_start:a,r=s.e.nodes_start;r!==o;){var l=pr(r);n.before(r),r=l}}function Ne(s,e,a){e===null?s.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}const go=[...` 	
\r\f \v\uFEFF`];function Tr(s,e,a){var o=s==null?"":""+s;if(e&&(o=o?o+" "+e:e),a){for(var n in a)if(a[n])o=o?o+" "+n:n;else if(o.length)for(var r=n.length,l=0;(l=o.indexOf(n,l))>=0;){var c=l+r;(l===0||go.includes(o[l-1]))&&(c===o.length||go.includes(o[c]))?o=(l===0?"":o.substring(0,l))+o.substring(c+1):l=c}}return o===""?null:o}function ca(s,e,a,o,n,r){var l=s.__className;if(Te||l!==a){var c=Tr(a,o,r);(!Te||c!==s.getAttribute("class"))&&(c==null?s.removeAttribute("class"):e?s.className=c:s.setAttribute("class",c)),s.__className=a}else if(r)for(var h in r){var b=!!r[h];(n==null||b!==!!n[h])&&s.classList.toggle(h,b)}return r}function Rr(s){if(Te){var e=!1,a=()=>{if(!e){if(e=!0,s.hasAttribute("value")){var o=s.value;y(s,"value",null),s.value=o}if(s.hasAttribute("checked")){var n=s.checked;y(s,"checked",null),s.checked=n}}};s.__on_r=a,fr(a),Gn()}}function y(s,e,a,o){var n=s.__attributes??(s.__attributes={});Te&&(n[e]=s.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&s.nodeName==="LINK")||n[e]!==(n[e]=a)&&(e==="style"&&"__styles"in s&&(s.__styles={}),e==="loading"&&(s[ur]=a),a==null?s.removeAttribute(e):typeof a!="string"&&Pr(s).includes(e)?s[e]=a:s.setAttribute(e,a))}var ho=new Map;function Pr(s){var e=ho.get(s.nodeName);if(e)return e;ho.set(s.nodeName,e=[]);for(var a,o=s,n=Element.prototype;n!==o;){a=hr(o);for(var r in a)a[r].set&&e.push(r);o=gr(o)}return e}function Ir(s,e,a=e){var o=vr();Hn(s,"input",n=>{var r=n?s.defaultValue:s.value;if(r=aa(s)?oa(r):r,a(r),o&&r!==(r=e())){var l=s.selectionStart,c=s.selectionEnd;s.value=r??"",c!==null&&(s.selectionStart=l,s.selectionEnd=Math.min(c,s.value.length))}}),(Te&&s.defaultValue!==s.value||mr(e)==null&&s.value)&&a(aa(s)?oa(s.value):s.value),xr(()=>{var n=e();aa(s)&&n===oa(s.value)||s.type==="date"&&!n&&!s.value||n!==s.value&&(s.value=n??"")})}function aa(s){var e=s.type;return e==="number"||e==="range"}function oa(s){return s===""?null:+s}function Or(s){return function(...e){var a=e[0];return a.preventDefault(),s==null?void 0:s.apply(this,e)}}const pa=[];Ge.handleByNamedList(M.Environment,pa);async function Br(s){if(!s)for(let e=0;e<pa.length;e++){const a=pa[e];if(a.value.test()){await a.value.load();return}}}let Et;function Cr(){if(typeof Et=="boolean")return Et;try{Et=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{Et=!1}return Et}var Ro=(s=>(s[s.NONE=0]="NONE",s[s.COLOR=16384]="COLOR",s[s.STENCIL=1024]="STENCIL",s[s.DEPTH=256]="DEPTH",s[s.COLOR_DEPTH=16640]="COLOR_DEPTH",s[s.COLOR_STENCIL=17408]="COLOR_STENCIL",s[s.DEPTH_STENCIL=1280]="DEPTH_STENCIL",s[s.ALL=17664]="ALL",s))(Ro||{});class Fr{constructor(e){this.items=[],this._name=e}emit(e,a,o,n,r,l,c,h){const{name:b,items:f}=this;for(let v=0,m=f.length;v<m;v++)f[v][b](e,a,o,n,r,l,c,h);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const a=this.items.indexOf(e);return a!==-1&&this.items.splice(a,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Mr=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Po=class Io extends yr{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const a=[...Mr,...this.config.runners??[]];this._addRunners(...a),this._unsafeEvalCheck()}async init(e={}){const a=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Br(a),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const o in this._systemsHash)e={...this._systemsHash[o].constructor.defaultOptions,...e};e={...Io.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let o=0;o<this.runners.init.items.length;o++)await this.runners.init.items[o].init(e);this._initOptions=e}render(e,a){let o=e;if(o instanceof ha&&(o={container:o},a&&(la(da,"passing a second argument is deprecated, please use render options instead"),o.target=a.renderTexture)),o.target||(o.target=this.view.renderTarget),o.target===this.view.renderTarget&&(this._lastObjectRendered=o.container,o.clearColor??(o.clearColor=this.background.colorRgba),o.clear??(o.clear=this.background.clearBeforeRender)),o.clearColor){const n=Array.isArray(o.clearColor)&&o.clearColor.length===4;o.clearColor=n?o.clearColor:ea.shared.setValue(o.clearColor).toArray()}o.transform||(o.container.updateLocalTransform(),o.transform=o.container.localTransform),o.container.enableRenderGroup(),this.runners.prerender.emit(o),this.runners.renderStart.emit(o),this.runners.render.emit(o),this.runners.renderEnd.emit(o),this.runners.postrender.emit(o)}resize(e,a,o){const n=this.view.resolution;this.view.resize(e,a,o),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),o!==void 0&&o!==n&&this.runners.resolutionChange.emit(o)}clear(e={}){const a=this;e.target||(e.target=a.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Ro.ALL);const{clear:o,clearColor:n,target:r}=e;ea.shared.setValue(n??this.background.colorRgba),a.renderTarget.clear(r,o,ea.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(a=>{this.runners[a]=new Fr(a)})}_addSystems(e){let a;for(a in e){const o=e[a];this._addSystem(o.value,o.name)}}_addSystem(e,a){const o=new e(this);if(this[a])throw new Error(`Whoops! The name "${a}" is already in use`);this[a]=o,this._systemsHash[a]=o;for(const n in this.runners)this.runners[n].add(o);return this}_addPipes(e,a){const o=a.reduce((n,r)=>(n[r.name]=r.value,n),{});e.forEach(n=>{const r=n.value,l=n.name,c=o[l];this.renderPipes[l]=new r(this,c?new c:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(a=>{a.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Cr())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Po.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Oo=Po,Dt;function Wr(s){return Dt!==void 0||(Dt=(()=>{var a;const e={stencil:!0,failIfMajorPerformanceCaveat:s??Oo.defaultOptions.failIfMajorPerformanceCaveat};try{if(!ge.get().getWebGLRenderingContext())return!1;let n=ge.get().createCanvas().getContext("webgl",e);const r=!!((a=n==null?void 0:n.getContextAttributes())!=null&&a.stencil);if(n){const l=n.getExtension("WEBGL_lose_context");l&&l.loseContext()}return n=null,r}catch{return!1}})()),Dt}let Ut;async function zr(s={}){return Ut!==void 0||(Ut=await(async()=>{const e=ge.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(s)).requestDevice(),!0}catch{return!1}})()),Ut}const vo=["webgl","webgpu","canvas"];async function jr(s){let e=[];s.preference?(e.push(s.preference),vo.forEach(r=>{r!==s.preference&&e.push(r)})):e=vo.slice();let a,o={};for(let r=0;r<e.length;r++){const l=e[r];if(l==="webgpu"&&await zr()){const{WebGPURenderer:c}=await lo(async()=>{const{WebGPURenderer:h}=await import("./BwG0urDe.js");return{WebGPURenderer:h}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);a=c,o={...s,...s.webgpu};break}else if(l==="webgl"&&Wr(s.failIfMajorPerformanceCaveat??Oo.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:c}=await lo(async()=>{const{WebGLRenderer:h}=await import("./BYN1Yfl4.js");return{WebGLRenderer:h}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);a=c,o={...s,...s.webgl};break}else if(l==="canvas")throw o={...s},new Error("CanvasRenderer is not yet implemented")}if(delete o.webgpu,delete o.webgl,!a)throw new Error("No available renderer for the current environment");const n=new a;return await n.init(o),n}const Bo="8.8.1";class Co{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Bo)}static destroy(){}}Co.extension=M.Application;class Nr{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Bo)}destroy(){this._renderer=null}}Nr.extension={type:[M.WebGLSystem,M.WebGPUSystem],name:"initHook",priority:-10};const Fo=class fa{constructor(...e){this.stage=new ha,e[0]!==void 0&&la(da,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await jr(e),fa._plugins.forEach(a=>{a.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return la(da,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,a=!1){const o=fa._plugins.slice(0);o.reverse(),o.forEach(n=>{n.destroy.call(this)}),this.stage.destroy(a),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Fo._plugins=[];let Mo=Fo;Ge.handleByList(M.Application,Mo._plugins);Ge.add(Co);class Wo extends Ar{constructor(e,a){super();const{textures:o,data:n}=e;Object.keys(n.pages).forEach(r=>{const l=n.pages[parseInt(r,10)],c=o[l.id];this.pages.push({texture:c})}),Object.keys(n.chars).forEach(r=>{const l=n.chars[r],{frame:c,source:h}=o[l.page],b=new wr(l.x+c.x,l.y+c.y,l.width,l.height),f=new Ke({source:h,frame:b});this.chars[r]={id:r.codePointAt(0),xOffset:l.xOffset,yOffset:l.yOffset,xAdvance:l.xAdvance,kerning:l.kerning??{},texture:f}}),this.baseRenderedFontSize=n.fontSize,this.baseMeasurementFontSize=n.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:n.fontSize},this.baseLineOffset=n.baseLineOffset,this.lineHeight=n.lineHeight,this.fontFamily=n.fontFamily,this.distanceField=n.distanceField??{type:"none",range:0},this.url=a}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:a}=this.pages[e];a.destroy(!0)}this.pages=null}static install(e){po.install(e)}static uninstall(e){po.uninstall(e)}}const na={test(s){return typeof s=="string"&&s.startsWith("info face=")},parse(s){const e=s.match(/^[a-z]+\s+.+$/gm),a={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const v in e){const m=e[v].match(/^[a-z]+/gm)[0],E=e[v].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),T={};for(const K in E){const C=E[K].split("="),R=C[0],z=C[1].replace(/"/gm,""),ae=parseFloat(z),oe=isNaN(ae)?z:ae;T[R]=oe}a[m].push(T)}const o={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[n]=a.info,[r]=a.common,[l]=a.distanceField??[];l&&(o.distanceField={range:parseInt(l.distanceRange,10),type:l.fieldType}),o.fontSize=parseInt(n.size,10),o.fontFamily=n.face,o.lineHeight=parseInt(r.lineHeight,10);const c=a.page;for(let v=0;v<c.length;v++)o.pages.push({id:parseInt(c[v].id,10)||0,file:c[v].file});const h={};o.baseLineOffset=o.lineHeight-parseInt(r.base,10);const b=a.char;for(let v=0;v<b.length;v++){const m=b[v],E=parseInt(m.id,10);let T=m.letter??m.char??String.fromCharCode(E);T==="space"&&(T=" "),h[E]=T,o.chars[T]={id:E,page:parseInt(m.page,10)||0,x:parseInt(m.x,10),y:parseInt(m.y,10),width:parseInt(m.width,10),height:parseInt(m.height,10),xOffset:parseInt(m.xoffset,10),yOffset:parseInt(m.yoffset,10),xAdvance:parseInt(m.xadvance,10),kerning:{}}}const f=a.kerning||[];for(let v=0;v<f.length;v++){const m=parseInt(f[v].first,10),E=parseInt(f[v].second,10),T=parseInt(f[v].amount,10);o.chars[h[E]].kerning[h[m]]=T}return o}},mo={test(s){const e=s;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(s){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},a=s.getElementsByTagName("info")[0],o=s.getElementsByTagName("common")[0],n=s.getElementsByTagName("distanceField")[0];n&&(e.distanceField={type:n.getAttribute("fieldType"),range:parseInt(n.getAttribute("distanceRange"),10)});const r=s.getElementsByTagName("page"),l=s.getElementsByTagName("char"),c=s.getElementsByTagName("kerning");e.fontSize=parseInt(a.getAttribute("size"),10),e.fontFamily=a.getAttribute("face"),e.lineHeight=parseInt(o.getAttribute("lineHeight"),10);for(let b=0;b<r.length;b++)e.pages.push({id:parseInt(r[b].getAttribute("id"),10)||0,file:r[b].getAttribute("file")});const h={};e.baseLineOffset=e.lineHeight-parseInt(o.getAttribute("base"),10);for(let b=0;b<l.length;b++){const f=l[b],v=parseInt(f.getAttribute("id"),10);let m=f.getAttribute("letter")??f.getAttribute("char")??String.fromCharCode(v);m==="space"&&(m=" "),h[v]=m,e.chars[m]={id:v,page:parseInt(f.getAttribute("page"),10)||0,x:parseInt(f.getAttribute("x"),10),y:parseInt(f.getAttribute("y"),10),width:parseInt(f.getAttribute("width"),10),height:parseInt(f.getAttribute("height"),10),xOffset:parseInt(f.getAttribute("xoffset"),10),yOffset:parseInt(f.getAttribute("yoffset"),10),xAdvance:parseInt(f.getAttribute("xadvance"),10),kerning:{}}}for(let b=0;b<c.length;b++){const f=parseInt(c[b].getAttribute("first"),10),v=parseInt(c[b].getAttribute("second"),10),m=parseInt(c[b].getAttribute("amount"),10);e.chars[h[v]].kerning[h[f]]=m}return e}},xo={test(s){return typeof s=="string"&&s.includes("<font>")?mo.test(ge.get().parseXML(s)):!1},parse(s){return mo.parse(ge.get().parseXML(s))}},Dr=[".xml",".fnt"],Ur={extension:{type:M.CacheParser,name:"cacheBitmapFont"},test:s=>s instanceof Wo,getCacheableAssets(s,e){const a={};return s.forEach(o=>{a[o]=e,a[`${o}-bitmap`]=e}),a[`${e.fontFamily}-bitmap`]=e,a}},Gr={extension:{type:M.LoadParser,priority:ct.Normal},name:"loadBitmapFont",test(s){return Dr.includes(qe.extname(s).toLowerCase())},async testParse(s){return na.test(s)||xo.test(s)},async parse(s,e,a){const o=na.test(s)?na.parse(s):xo.parse(s),{src:n}=e,{pages:r}=o,l=[],c=o.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let v=0;v<r.length;++v){const m=r[v].file;let E=qe.join(qe.dirname(n),m);E=_r(E,n),l.push({src:E,data:c})}const h=await a.load(l),b=l.map(v=>h[v.src]);return new Wo({data:o,textures:b},n)},async load(s,e){return await(await ge.get().fetch(s)).text()},async unload(s,e,a){await Promise.all(s.pages.map(o=>a.unload(o.texture.source._sourceOrigin))),s.destroy()}};class Hr{constructor(e,a=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=a}add(e){e.forEach(a=>{this._assetList.push(a)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],a=Math.min(this._assetList.length,this._maxConcurrent);for(let o=0;o<a;o++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Vr={extension:{type:M.CacheParser,name:"cacheTextureArray"},test:s=>Array.isArray(s)&&s.every(e=>e instanceof Ke),getCacheableAssets:(s,e)=>{const a={};return s.forEach(o=>{e.forEach((n,r)=>{a[o+(r===0?"":r+1)]=n})}),a}};async function zo(s){if("Image"in globalThis)return new Promise(e=>{const a=new Image;a.onload=()=>{e(!0)},a.onerror=()=>{e(!1)},a.src=s});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(s)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Yr={extension:{type:M.DetectionParser,priority:1},test:async()=>zo("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async s=>[...s,"avif"],remove:async s=>s.filter(e=>e!=="avif")},bo=["png","jpg","jpeg"],Xr={extension:{type:M.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async s=>[...s,...bo],remove:async s=>s.filter(e=>!bo.includes(e))},Kr="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function va(s){return Kr?!1:document.createElement("video").canPlayType(s)!==""}const qr={extension:{type:M.DetectionParser,priority:0},test:async()=>va("video/mp4"),add:async s=>[...s,"mp4","m4v"],remove:async s=>s.filter(e=>e!=="mp4"&&e!=="m4v")},Qr={extension:{type:M.DetectionParser,priority:0},test:async()=>va("video/ogg"),add:async s=>[...s,"ogv"],remove:async s=>s.filter(e=>e!=="ogv")},Jr={extension:{type:M.DetectionParser,priority:0},test:async()=>va("video/webm"),add:async s=>[...s,"webm"],remove:async s=>s.filter(e=>e!=="webm")},Zr={extension:{type:M.DetectionParser,priority:0},test:async()=>zo("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async s=>[...s,"webp"],remove:async s=>s.filter(e=>e!=="webp")};class ei{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,a,o)=>(this._parsersValidated=!1,e[a]=o,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,a){const o={promise:null,parser:null};return o.promise=(async()=>{var l,c;let n=null,r=null;if(a.loadParser&&(r=this._parserHash[a.loadParser],r||Ue(`[Assets] specified load parser "${a.loadParser}" not found while loading ${e}`)),!r){for(let h=0;h<this.parsers.length;h++){const b=this.parsers[h];if(b.load&&((l=b.test)!=null&&l.call(b,e,a,this))){r=b;break}}if(!r)return Ue(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}n=await r.load(e,a,this),o.parser=r;for(let h=0;h<this.parsers.length;h++){const b=this.parsers[h];b.parse&&b.parse&&await((c=b.testParse)==null?void 0:c.call(b,n,a,this))&&(n=await b.parse(n,a,this)||n,o.parser=b)}return n})(),o}async load(e,a){this._parsersValidated||this._validateParsers();let o=0;const n={},r=Eo(e),l=Lt(e,b=>({alias:[b],src:b,data:{}})),c=l.length,h=l.map(async b=>{const f=qe.toAbsolute(b.src);if(!n[b.src])try{this.promiseCache[f]||(this.promiseCache[f]=this._getLoadPromiseAndParser(f,b)),n[b.src]=await this.promiseCache[f].promise,a&&a(++o/c)}catch(v){throw delete this.promiseCache[f],delete n[b.src],new Error(`[Loader.load] Failed to load ${f}.
${v}`)}});return await Promise.all(h),r?n[l[0].src]:n}async unload(e){const o=Lt(e,n=>({alias:[n],src:n})).map(async n=>{var c,h;const r=qe.toAbsolute(n.src),l=this.promiseCache[r];if(l){const b=await l.promise;delete this.promiseCache[r],await((h=(c=l.parser)==null?void 0:c.unload)==null?void 0:h.call(c,b,n,this))}});await Promise.all(o)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,a)=>(a.name?e[a.name]&&Ue(`[Assets] loadParser name conflict "${a.name}"`):Ue("[Assets] loadParser should have a name"),{...e,[a.name]:a}),{})}}function ft(s,e){if(Array.isArray(e)){for(const a of e)if(s.startsWith(`data:${a}`))return!0;return!1}return s.startsWith(`data:${e}`)}const ti=".json",si="application/json",ai={extension:{type:M.LoadParser,priority:ct.Low},name:"loadJson",test(s){return ft(s,si)||pt(s,ti)},async load(s){return await(await ge.get().fetch(s)).json()}},oi=".txt",ni="text/plain",ri={name:"loadTxt",extension:{type:M.LoadParser,priority:ct.Low,name:"loadTxt"},test(s){return ft(s,ni)||pt(s,oi)},async load(s){return await(await ge.get().fetch(s)).text()}},ii=["normal","bold","100","200","300","400","500","600","700","800","900"],li=[".ttf",".otf",".woff",".woff2"],di=["font/ttf","font/otf","font/woff","font/woff2"],ci=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function pi(s){const e=qe.extname(s),n=qe.basename(s,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(c=>c.charAt(0).toUpperCase()+c.slice(1));let r=n.length>0;for(const c of n)if(!c.match(ci)){r=!1;break}let l=n.join(" ");return r||(l=`"${l.replace(/[\\"]/g,"\\$&")}"`),l}const fi=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function ui(s){return fi.test(s)?s:encodeURI(s)}const gi={extension:{type:M.LoadParser,priority:ct.Low},name:"loadWebFont",test(s){return ft(s,di)||pt(s,li)},async load(s,e){var o,n,r;const a=ge.get().getFontFaceSet();if(a){const l=[],c=((o=e.data)==null?void 0:o.family)??pi(s),h=((r=(n=e.data)==null?void 0:n.weights)==null?void 0:r.filter(f=>ii.includes(f)))??["normal"],b=e.data??{};for(let f=0;f<h.length;f++){const v=h[f],m=new FontFace(c,`url(${ui(s)})`,{...b,weight:v});await m.load(),a.add(m),l.push(m)}return Oe.set(`${c}-and-url`,{url:s,fontFaces:l}),l.length===1?l[0]:l}return Ue("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(s){(Array.isArray(s)?s:[s]).forEach(e=>{Oe.remove(`${e.family}-and-url`),ge.get().getFontFaceSet().delete(e)})}};function ma(s,e=1){var o;const a=(o=Kt.RETINA_PREFIX)==null?void 0:o.exec(s);return a?parseFloat(a[1]):e}function xa(s,e,a){s.label=a,s._sourceOrigin=a;const o=new Ke({source:s,label:a}),n=()=>{delete e.promiseCache[a],Oe.has(a)&&Oe.remove(a)};return o.source.once("destroy",()=>{e.promiseCache[a]&&(Ue("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),n())}),o.once("destroy",()=>{s.destroyed||(Ue("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),n())}),o}const hi=".svg",vi="image/svg+xml",mi={extension:{type:M.LoadParser,priority:ct.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(s){return ft(s,vi)||pt(s,hi)},async load(s,e,a){var o;return((o=e.data)==null?void 0:o.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?bi(s):xi(s,e,a,this.config.crossOrigin)},unload(s){s.destroy(!0)}};async function xi(s,e,a,o){var C,R,z;const r=await(await ge.get().fetch(s)).blob(),l=URL.createObjectURL(r),c=new Image;c.src=l,c.crossOrigin=o,await c.decode(),URL.revokeObjectURL(l);const h=document.createElement("canvas"),b=h.getContext("2d"),f=((C=e.data)==null?void 0:C.resolution)||ma(s),v=((R=e.data)==null?void 0:R.width)??c.width,m=((z=e.data)==null?void 0:z.height)??c.height;h.width=v*f,h.height=m*f,b.drawImage(c,0,0,v*f,m*f);const{parseAsGraphicsContext:E,...T}=e.data??{},K=new Lo({resource:h,alphaMode:"premultiply-alpha-on-upload",resolution:f,...T});return xa(K,a,s)}async function bi(s){const a=await(await ge.get().fetch(s)).text(),o=new $r;return o.svg(a),o}const yi=`(function () {
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
`;let lt=null,ua=class{constructor(){lt||(lt=URL.createObjectURL(new Blob([yi],{type:"application/javascript"}))),this.worker=new Worker(lt)}};ua.revokeObjectURL=function(){lt&&(URL.revokeObjectURL(lt),lt=null)};const wi=`(function () {
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
`;let dt=null;class jo{constructor(){dt||(dt=URL.createObjectURL(new Blob([wi],{type:"application/javascript"}))),this.worker=new Worker(dt)}}jo.revokeObjectURL=function(){dt&&(URL.revokeObjectURL(dt),dt=null)};let yo=0,ra;class _i{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:a}=new ua;a.addEventListener("message",o=>{a.terminate(),ua.revokeObjectURL(),e(o.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,a){var o;return this._run("loadImageBitmap",[e,(o=a==null?void 0:a.data)==null?void 0:o.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){ra===void 0&&(ra=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<ra&&(this._createdWorkers++,e=new jo().worker,e.addEventListener("message",a=>{this._complete(a.data),this._returnWorker(a.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,a){await this._initWorkers();const o=new Promise((n,r)=>{this._queue.push({id:e,arguments:a,resolve:n,reject:r})});return this._next(),o}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const a=this._queue.pop(),o=a.id;this._resolveHash[yo]={resolve:a.resolve,reject:a.reject},e.postMessage({data:a.arguments,uuid:yo++,id:o})}}const wo=new _i,ki=[".jpeg",".jpg",".png",".webp",".avif"],Ai=["image/jpeg","image/png","image/webp","image/avif"];async function $i(s,e){var n;const a=await ge.get().fetch(s);if(!a.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${s}: ${a.status} ${a.statusText}`);const o=await a.blob();return((n=e==null?void 0:e.data)==null?void 0:n.alphaMode)==="premultiplied-alpha"?createImageBitmap(o,{premultiplyAlpha:"none"}):createImageBitmap(o)}const No={name:"loadTextures",extension:{type:M.LoadParser,priority:ct.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(s){return ft(s,Ai)||pt(s,ki)},async load(s,e,a){var r;let o=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await wo.isImageBitmapSupported()?o=await wo.loadImageBitmap(s,e):o=await $i(s,e):o=await new Promise((l,c)=>{o=new Image,o.crossOrigin=this.config.crossOrigin,o.src=s,o.complete?l(o):(o.onload=()=>{l(o)},o.onerror=c)});const n=new Lo({resource:o,alphaMode:"premultiply-alpha-on-upload",resolution:((r=e.data)==null?void 0:r.resolution)||ma(s),...e.data});return xa(n,a,s)},unload(s){s.destroy(!0)}},Do=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Si=Do.map(s=>`video/${s.substring(1)}`);function Ei(s,e,a){a===void 0&&!e.startsWith("data:")?s.crossOrigin=Ti(e):a!==!1&&(s.crossOrigin=typeof a=="string"?a:"anonymous")}function Li(s){return new Promise((e,a)=>{s.addEventListener("canplaythrough",o),s.addEventListener("error",n),s.load();function o(){r(),e()}function n(l){r(),a(l)}function r(){s.removeEventListener("canplaythrough",o),s.removeEventListener("error",n)}})}function Ti(s,e=globalThis.location){if(s.startsWith("data:"))return"";e||(e=globalThis.location);const a=new URL(s,document.baseURI);return a.hostname!==e.hostname||a.port!==e.port||a.protocol!==e.protocol?"anonymous":""}const Ri={name:"loadVideo",extension:{type:M.LoadParser,name:"loadVideo"},test(s){const e=ft(s,Si),a=pt(s,Do);return e||a},async load(s,e,a){var h,b;const o={...ta.defaultOptions,resolution:((h=e.data)==null?void 0:h.resolution)||ma(s),alphaMode:((b=e.data)==null?void 0:b.alphaMode)||await kr(),...e.data},n=document.createElement("video"),r={preload:o.autoLoad!==!1?"auto":void 0,"webkit-playsinline":o.playsinline!==!1?"":void 0,playsinline:o.playsinline!==!1?"":void 0,muted:o.muted===!0?"":void 0,loop:o.loop===!0?"":void 0,autoplay:o.autoPlay!==!1?"":void 0};Object.keys(r).forEach(f=>{const v=r[f];v!==void 0&&n.setAttribute(f,v)}),o.muted===!0&&(n.muted=!0),Ei(n,s,o.crossorigin);const l=document.createElement("source");let c;if(s.startsWith("data:"))c=s.slice(5,s.indexOf(";"));else if(!s.startsWith("blob:")){const f=s.split("?")[0].slice(s.lastIndexOf(".")+1).toLowerCase();c=ta.MIME_TYPES[f]||`video/${f}`}return l.src=s,c&&(l.type=c),new Promise(f=>{const v=async()=>{const m=new ta({...o,resource:n});n.removeEventListener("canplay",v),e.data.preload&&await Li(n),f(xa(m,a,s))};n.addEventListener("canplay",v),n.appendChild(l)})},unload(s){s.destroy(!0)}},Uo={extension:{type:M.ResolveParser,name:"resolveTexture"},test:No.test,parse:s=>{var e;return{resolution:parseFloat(((e=Kt.RETINA_PREFIX.exec(s))==null?void 0:e[1])??"1"),format:s.split(".").pop(),src:s}}},Pi={extension:{type:M.ResolveParser,priority:-2,name:"resolveJson"},test:s=>Kt.RETINA_PREFIX.test(s)&&s.endsWith(".json"),parse:Uo.parse};class Ii{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Kt,this.loader=new ei,this.cache=Oe,this._backgroundLoader=new Hr(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var r,l;if(this._initialized){Ue("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let c=e.manifest;typeof c=="string"&&(c=await this.load(c)),this.resolver.addManifest(c)}const a=((r=e.texturePreference)==null?void 0:r.resolution)??1,o=typeof a=="number"?[a]:a,n=await this._detectFormats({preferredFormats:(l=e.texturePreference)==null?void 0:l.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:n,resolution:o}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,a){this._initialized||await this.init();const o=Eo(e),n=Lt(e).map(c=>{if(typeof c!="string"){const h=this.resolver.getAlias(c);return h.some(b=>!this.resolver.hasKey(b))&&this.add(c),Array.isArray(h)?h[0]:h}return this.resolver.hasKey(c)||this.add({alias:c,src:c}),c}),r=this.resolver.resolve(n),l=await this._mapLoadToResolve(r,a);return o?l[n[0]]:l}addBundle(e,a){this.resolver.addBundle(e,a)}async loadBundle(e,a){this._initialized||await this.init();let o=!1;typeof e=="string"&&(o=!0,e=[e]);const n=this.resolver.resolveBundle(e),r={},l=Object.keys(n);let c=0,h=0;const b=()=>{a==null||a(++c/h)},f=l.map(v=>{const m=n[v];return h+=Object.keys(m).length,this._mapLoadToResolve(m,b).then(E=>{r[v]=E})});return await Promise.all(f),o?r[e[0]]:r}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(a))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolveBundle(e);Object.values(a).forEach(o=>{this._backgroundLoader.add(Object.values(o))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Oe.get(e);const a={};for(let o=0;o<e.length;o++)a[o]=Oe.get(e[o]);return a}async _mapLoadToResolve(e,a){const o=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const n=await this.loader.load(o,a);this._backgroundLoader.active=!0;const r={};return o.forEach(l=>{const c=n[l.src],h=[l.src];l.alias&&h.push(...l.alias),h.forEach(b=>{r[b]=c}),Oe.set(h,c)}),r}async unload(e){this._initialized||await this.init();const a=Lt(e).map(n=>typeof n!="string"?n.src:n),o=this.resolver.resolve(a);await this._unloadFromResolved(o)}async unloadBundle(e){this._initialized||await this.init(),e=Lt(e);const a=this.resolver.resolveBundle(e),o=Object.keys(a).map(n=>this._unloadFromResolved(a[n]));await Promise.all(o)}async _unloadFromResolved(e){const a=Object.values(e);a.forEach(o=>{Oe.remove(o.src)}),await this.loader.unload(a)}async _detectFormats(e){let a=[];e.preferredFormats&&(a=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const o of e.detections)e.skipDetections||await o.test()?a=await o.add(a):e.skipDetections||(a=await o.remove(a));return a=a.filter((o,n)=>a.indexOf(o)===n),a}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(a=>{a.config&&Object.keys(a.config).filter(o=>o in e).forEach(o=>{a.config[o]=e[o]})})}}const it=new Ii;Ge.handleByList(M.LoadParser,it.loader.parsers).handleByList(M.ResolveParser,it.resolver.parsers).handleByList(M.CacheParser,it.cache.parsers).handleByList(M.DetectionParser,it.detections);Ge.add(Vr,Xr,Yr,Zr,qr,Qr,Jr,ai,ri,gi,mi,No,Ri,Gr,Ur,Uo,Pi);const _o={loader:M.LoadParser,resolver:M.ResolveParser,cache:M.CacheParser,detection:M.DetectionParser};Ge.handle(M.Asset,s=>{const e=s.ref;Object.entries(_o).filter(([a])=>!!e[a]).forEach(([a,o])=>Ge.add(Object.assign(e[a],{extension:e[a].extension??o})))},s=>{const e=s.ref;Object.keys(_o).filter(a=>!!e[a]).forEach(a=>Ge.remove(e[a]))});var Oi=Z('<div class="win-label svelte-1vsph43">BIG WIN!</div> <div class="win-amount-display svelte-1vsph43"> </div>',1),Bi=ko('<use href="#sparkle" class="sparkle svelte-1vsph43"></use>'),Ci=ko('<use href="#vinyl"></use>'),Fi=Z('<div><!> <svg class="vinyl-canvas svelte-1vsph43" viewBox="0 0 1024 800" xmlns="http://www.w3.org/2000/svg"><defs class="svelte-1vsph43"><symbol id="vinyl" viewBox="-200 -200 400 400" class="svelte-1vsph43"><circle cx="0" cy="0" r="180" fill="#0b0b0b" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="150" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.3" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="120" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.25" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="90" fill="none" stroke="#1a1a1a" stroke-width="1.5" opacity="0.2" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="55" fill="var(--label-color)" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="6" fill="#ffffff" class="svelte-1vsph43"></circle><ellipse cx="-15" cy="-15" rx="20" ry="15" fill="#ffffff" opacity="0.3" transform="rotate(-30)" class="svelte-1vsph43"></ellipse></symbol><symbol id="sparkle" viewBox="-12 -12 24 24" class="svelte-1vsph43"><polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ffd966" class="svelte-1vsph43"></polygon><circle cx="0" cy="0" r="2" fill="#ffffff" class="svelte-1vsph43"></circle></symbol><symbol id="confetti" viewBox="-3 -3 6 6" class="svelte-1vsph43"><circle cx="0" cy="0" r="2" fill="var(--confetti-color)" class="svelte-1vsph43"></circle></symbol></defs><!><!></svg></div>');function Mi(s,e){Yt(e,!0);let a=rt(e,"winLevel",3,"small"),o=rt(e,"winAmount",3,0),n=rt(e,"vinylStartScale",3,.01),r=rt(e,"vinylEndScale",3,.15),l=rt(e,"sparkleScale",3,.6),c=P(!1),h=P(!1);const b={small:{vinyls:5,sparkles:8,maxRadius:70},medium:{vinyls:12,sparkles:16,maxRadius:100},jackpot:{vinyls:24,sparkles:30,maxRadius:130}},f=De(()=>b[a()]),v=["#f04e37","#ffd966","#ff8533","#4ecdc4","#ff6b9d"];function m(D){const ie=[],Pe=t(f).maxRadius;for(let N=0;N<D;N++){const q=Math.PI*2*N/D+Math.random()*.4,Be=Math.random()*Pe*.7+Pe*.2;ie.push({x:512+Math.cos(q)*Be,y:400+Math.sin(q)*Be,rotation:Math.random()*30-15,scale:r()*(.8+Math.random()*.4),delay:N*.05,color:v[N%v.length]})}return ie}function E(D){const ie=[];for(let le=0;le<D;le++)ie.push({x:100+Math.random()*824,y:50+Math.random()*700,delay:Math.random()*.8,duration:.6+Math.random()*.4,rotation:Math.random()*360});return ie}const T=De(()=>m(t(f).vinyls)),K=De(()=>E(t(f).sparkles));function C(){g(c,!0),g(h,!0),setTimeout(()=>{g(h,!1),setTimeout(()=>{var D;g(c,!1),(D=e.onComplete)==null||D.call(e)},500)},a()==="jackpot"?4e3:a()==="medium"?3e3:2500)}function R(){g(h,!1),setTimeout(()=>{g(c,!1)},500)}var z=Gt(),ae=He(z);{var oe=D=>{var ie=Fi();let le;var ye=w(ie);{var Pe=we=>{var ee=Oi(),he=u(He(ee),2),Qe=w(he,!0);_(he),te(_e=>H(Qe,_e),[()=>o().toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),V(we,ee)};se(ye,we=>{o()>0&&we(Pe)})}var N=u(ye,2),q=u(w(N));Vt(q,17,()=>t(K),Ht,(we,ee)=>{var he=Bi();te(()=>y(he,"style",`
            --sx: ${t(ee).x??""}px;
            --sy: ${t(ee).y??""}px;
            --duration: ${t(ee).duration??""}s;
            --sparkle-delay: ${t(ee).delay??""}s;
            --sparkle-scale: ${l()??""};
          `)),V(we,he)});var Be=u(q);Vt(Be,17,()=>t(T),Ht,(we,ee)=>{var he=Ci();let Qe;te(()=>{Qe=ca(he,0,"vinyl-group svelte-1vsph43",null,Qe,{floating:t(h)}),y(he,"style",`
            --tx: ${t(ee).x??""}px;
            --ty: ${t(ee).y??""}px;
            --scale: ${t(ee).scale??""};
            --rotation: ${t(ee).rotation??""}deg;
            --delay: ${t(ee).delay??""}s;
            --label-color: ${t(ee).color??""};
            --start-scale: ${n()??""};
          `)}),V(we,he)}),_(N),_(ie),te(()=>le=ca(ie,1,"vinyl-win-container svelte-1vsph43",null,le,{visible:t(h),hiding:!t(h)})),V(D,ie)};se(ae,D=>{t(c)&&D(oe)})}return V(s,z),Xt({show:C,hide:R})}var Wi=Z(`<div style="
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: #000;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 10000;
	"><img alt="MadCrane Logo" style="
				max-width: 400px;
				width: 80%;
				height: auto;
				margin-bottom: 40px;
			"> <div style="
			width: 400px;
			max-width: 80%;
			height: 30px;
			background-color: #222;
			border-radius: 15px;
			overflow: hidden;
			border: 2px solid #444;
		"><div></div></div> <div style="
			color: #fff;
			font-family: Arial, sans-serif;
			font-size: 18px;
			margin-top: 20px;
		"> </div></div>`),zi=Z(`<div style="
				position: absolute;
				bottom: 40px;
				left: 50%;
				transform: translateX(-50%);
				color: #fff;
				font-family: Arial, sans-serif;
				font-size: 20px;
				text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
			">Please wait...</div>`),ji=Z('<div role="button" tabindex="0"><span style="position: absolute; left: -9999px;">Click anywhere to continue</span> <!></div>');function Ni(s,e){Yt(e,!0);let a=P(!1),o=P(!1),n=P(!1),r=P(0);ga(()=>{const v=setInterval(()=>{g(r,t(r)+2),t(r)>=100&&(clearInterval(v),g(r,100),setTimeout(()=>{g(o,!0),setTimeout(()=>{g(n,!0)},3e3)},500))},60);return()=>clearInterval(v)});function l(){t(o)&&t(n)&&!t(a)&&(g(a,!0),setTimeout(()=>e.onloaded(),300))}var c=Gt(),h=He(c);{var b=v=>{var m=Wi(),E=w(m);y(E,"src",`${be??""}/loading_screen/MadCraneLogo.jpg`);var T=u(E,2),K=w(T);_(T);var C=u(T,2),R=w(C);_(C),_(m),te(z=>{y(K,"style",`
				width: ${t(r)??""}%;
				height: 100%;
				background: linear-gradient(90deg, #ff0000, #ff6600);
				transition: width 0.3s ease;
			`),H(R,`Loading... ${z??""}%`)},[()=>Math.round(t(r))]),V(v,m)},f=v=>{var m=Gt(),E=He(m);{var T=K=>{var C=ji(),R=u(w(C),2);{var z=ae=>{var oe=zi();V(ae,oe)};se(R,ae=>{t(n)||ae(z)})}_(C),te(()=>y(C,"style",`
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background-image: url('${be??""}/loading_screen/Splash_screen_RockabillyReels.jpeg');
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			cursor: ${(t(n)?"pointer":"default")??""};
			z-index: 10000;
		`)),F("click",C,l),F("keydown",C,ae=>ae.key==="Enter"&&l()),V(K,C)};se(E,K=>{t(o)&&!t(a)&&K(T)},!0)}V(v,m)};se(h,v=>{t(o)?v(f,!1):v(b)})}V(s,c),Xt()}var Di=Yn('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-o2kwxd"><\/script><!---->',1),Ui=Z('<p style="color: red;" class="svelte-o2kwxd"><strong class="svelte-o2kwxd">Error:</strong> </p>'),Gi=Z('<div class="svelte-o2kwxd"> </div>'),Hi=Z('<details class="svelte-o2kwxd"><summary class="svelte-o2kwxd"> </summary> <!></details>'),Vi=Z(`<div style="
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
  " class="svelte-o2kwxd"><h3 class="svelte-o2kwxd">🎰 Oma-peli Debug</h3> <p class="svelte-o2kwxd"><strong class="svelte-o2kwxd">Status:</strong> </p> <!> <p class="svelte-o2kwxd"><strong class="svelte-o2kwxd">Base:</strong> </p> <p class="svelte-o2kwxd"><strong class="svelte-o2kwxd">BG URL:</strong> </p> <p class="svelte-o2kwxd"><strong class="svelte-o2kwxd">Sample:</strong> </p> <!></div>`),Yi=Z('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-o2kwxd"> </div>'),Xi=Z('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-o2kwxd"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-o2kwxd"> </span></div>'),Ki=Z(`<div style="
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
  " class="svelte-o2kwxd"><h2 style="margin: 0 0 10px 0; font-size: 2em;" class="svelte-o2kwxd">🎉 VOITTO! 🎉</h2> <div style="font-size: 1.5em; font-weight: bold; margin: 10px 0;" class="svelte-o2kwxd"> </div> <!> <!> <button style="
        margin-top: 15px;
        padding: 8px 16px;
        background: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
      " class="svelte-o2kwxd">Jatka pelaamista</button></div>`),qi=Z(`<div class="svelte-o2kwxd"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-o2kwxd">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-o2kwxd">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-o2kwxd"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-o2kwxd"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-o2kwxd"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-o2kwxd">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-o2kwxd"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-o2kwxd">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-o2kwxd"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-o2kwxd">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-o2kwxd"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-o2kwxd">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-o2kwxd">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-o2kwxd"> <span style="color: #ffd700;" class="svelte-o2kwxd">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-o2kwxd">Sulje</button></div>`),Qi=Z(`<div style="
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
  " class="svelte-o2kwxd"><div style="
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: white;
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      border: 3px solid #ffd700;
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
      max-width: 500px;
      font-family: Arial, sans-serif;
    " class="svelte-o2kwxd"><h1 style="
        margin: 0 0 20px 0;
        font-size: 2.5em;
        color: #ffd700;
        text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
      " class="svelte-o2kwxd">🎰 VAPAAPELIT PÄÄTTYIVÄT! 🎰</h1> <div style="
        font-size: 1.2em;
        margin: 20px 0;
        color: #aaa;
      " class="svelte-o2kwxd">Voitit yhteensä:</div> <div style="
        font-size: 3em;
        font-weight: bold;
        color: #00ff00;
        text-shadow: 0 0 15px rgba(0, 255, 0, 0.8);
        margin: 20px 0;
      " class="svelte-o2kwxd"> </div> <button style="
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
        " class="svelte-o2kwxd">JATKA PERUSPELIIN</button></div></div>`),Ji=Z('<div class="svelte-o2kwxd"><div class="svelte-o2kwxd">🔄 Select Rounds</div> <button class="svelte-o2kwxd">10 Rounds</button> <button class="svelte-o2kwxd">25 Rounds</button> <button class="svelte-o2kwxd">50 Rounds</button> <button class="svelte-o2kwxd">100 Rounds</button> <button class="svelte-o2kwxd">200 Rounds</button> <button class="svelte-o2kwxd">500 Rounds</button> <button class="svelte-o2kwxd">1,000 Rounds</button> <button class="svelte-o2kwxd">5,000 Rounds</button> <button class="svelte-o2kwxd">Cancel</button></div>'),Zi=Z(`<!>  <!>   <!>   <!>   <!>  <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
" class="svelte-o2kwxd"><div class="svelte-o2kwxd"><div class="svelte-o2kwxd"><button class="svelte-o2kwxd">💰 PAYTABLE</button>  <div class="control-panel-mobile svelte-o2kwxd"><!>  <img alt="Left End" class="svelte-o2kwxd"> <div class="svelte-o2kwxd"><div style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;" class="svelte-o2kwxd"><div style="display: flex; flex-direction: column; align-items: center;" class="svelte-o2kwxd"><div class="svelte-o2kwxd">BET</div> <div class="svelte-o2kwxd"><button title="Decrease Bet" class="svelte-o2kwxd"></button> <div class="svelte-o2kwxd"> </div> <button title="Increase Bet" class="svelte-o2kwxd"></button></div></div> <img alt="Divider" class="svelte-o2kwxd"> <div style="display: flex; flex-direction: column; align-items: center;" class="svelte-o2kwxd"><div class="svelte-o2kwxd">BALANCE</div> <div class="svelte-o2kwxd"><div class="svelte-o2kwxd"> </div></div></div> <img alt="Divider" class="svelte-o2kwxd"></div> <div class="svelte-o2kwxd"></div> <div style="position: absolute; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; z-index: 10;" class="svelte-o2kwxd"><div><button class="svelte-o2kwxd"></button></div></div> <div style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;" class="svelte-o2kwxd"><div class="svelte-o2kwxd"><button class="svelte-o2kwxd"></button> <img alt="Status bar" class="svelte-o2kwxd"></div> <img alt="Divider" class="svelte-o2kwxd"> <div class="svelte-o2kwxd"><button class="svelte-o2kwxd"></button> <img alt="Speed bar" class="svelte-o2kwxd"></div> <img alt="Divider" class="svelte-o2kwxd"> <div style="display: flex; flex-direction: column; align-items: center;" class="svelte-o2kwxd"><div class="svelte-o2kwxd">WIN</div> <div class="svelte-o2kwxd"><div class="win3d winShine svelte-o2kwxd" id="winLabel"><span class="depth svelte-o2kwxd" aria-hidden="true"> </span> <span class="face svelte-o2kwxd"> </span></div></div></div> <img alt="Divider" class="svelte-o2kwxd"> <div style="display: flex; align-items: center; justify-content: center;" class="svelte-o2kwxd"><button title="Menu" class="svelte-o2kwxd"></button></div></div></div> <img alt="Right End" class="svelte-o2kwxd"></div></div>  <button class="svelte-o2kwxd"></button> <!>   <div class="debug-panel svelte-o2kwxd"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-o2kwxd">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-o2kwxd"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Rounds:</span> <span style="color: #fff;" class="svelte-o2kwxd"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Wagered:</span> <span style="color: #ff6666;" class="svelte-o2kwxd"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Won:</span> <span style="color: #66ff66;" class="svelte-o2kwxd"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 10px; 
    padding-top: 10px; 
    border-top: 1px solid #555;
    font-weight: bold;
    font-size: 18px;
  " class="svelte-o2kwxd"><span style="color: #ffd700;" class="svelte-o2kwxd">RTP:</span> <span class="svelte-o2kwxd"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
  " class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Hit Freq:</span> <span class="svelte-o2kwxd"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-size: 14px;
  " class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Free Spins Triggered:</span> <span style="color: #66ccff;" class="svelte-o2kwxd"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 4px;
    font-size: 14px;
  " class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Free Spins Played:</span> <span style="color: #66ccff;" class="svelte-o2kwxd"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #555;
    font-size: 14px;
  " class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Empty Slots:</span> <span style="color: #ff9900;" class="svelte-o2kwxd"> </span></div> <button style="
      margin-top: 10px;
      width: 100%;
      padding: 5px;
      background: rgba(255, 100, 100, 0.3);
      color: #fff;
      border: 1px solid #ff6666;
      border-radius: 5px;
      cursor: pointer;
      font-size: 11px;
    " class="svelte-o2kwxd">Reset Stats</button> <div style="
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  " class="svelte-o2kwxd"><button class="svelte-o2kwxd"> </button> <button class="svelte-o2kwxd">Clear Win Log</button> <button class="svelte-o2kwxd"> </button> <button class="svelte-o2kwxd">🎰 Test Free Spins</button></div></div> <button class="debug-panel svelte-o2kwxd"> </button></div></div>`,1);function el(s,e){Yt(e,!0);const a="1.4.0",o=13,n=1445,r=1e3,l=1.75,c=-30,h=-10,b=160,f=0,v=750,m=80,E=250,T=0,K=50,C=.5,R=40,z=-10,oe=Math.round(100*l),D=Math.round(oe*(700/760)),le=D+10,ye=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],Pe=typeof window<"u"&&window.location.hostname.includes("github.io"),N=Pe?"/web-sdk/oma-peli/symbols":`${be}/symbols`,q=Pe?"/web-sdk/oma-peli/controls":`${be}/controls`,Be={a:`${N}/Blue_hotrod.jpg`,b:`${N}/Blue_jacket.jpg`,c:`${N}/Blue_rollers.jpg`,d:`${N}/Blue_speakers.jpg`,e:`${N}/Premium_blonde.jpg`,f:`${N}/Premium_brunette.jpg`,g:`${N}/Premium_rocker.jpg`,h:`${N}/New_Wild.jpg`,i:`${N}/Red_burger.jpg`,j:`${N}/Red_fries.jpg`,k:`${N}/Red_milkshake.jpg`,l:`${N}/Scatter.jpg`,emptyslot:`${N}/Emptyslot.jpg`},we=`${N}/bg_base.jpg`,ee=`${N}/ReelFrames.png`,he=`${N}/RockABillyReels_logo.png`,Qe={spin:`${be}/sounds/spin.mp3`,stop:`${be}/sounds/stop.mp3`,win:`${be}/sounds/win.mp3`};let _e=P(!0),qt={},W=null,ve=null,Qt=null,Jt=null,ke=P(!0),Go=P(!1),Zt=P(945),es=null;const Ho={fast:3,medium:7,slow:18};let me=P("medium"),Ce=P(Math.floor(Math.random()*20)+1);const ut={background:()=>`${be}/music/rockabilly reels loop ${t(Ce)}.mp3`,freeSpins:`${be}/music/rockabilly-loop_long.mp3`,drumHit:`${be}/music/drum-hit.mp3`,winTheme:`${be}/music/win-stinger.mp3`};function ba(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(ba,500);return}const d=window.Howl;try{W=new d({src:[ut.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+t(Ce)+")"),g(Go,!0)},onloaderror:(p,A)=>{console.warn("⚠️ Background music not found:",A)}}),ve=new d({src:[ut.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(p,A)=>console.warn("⚠️ Free spins music not found:",A)}),Qt=new d({src:[ut.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Jt=new d({src:[ut.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(p){console.error("Failed to initialize music system:",p)}}function ya(){const d=t(Q)?ve:W;d&&t(ke)&&!d.playing()&&(d.play(),console.log("🎵 "+(t(Q)?"Free spins":"Background")+" music started"))}function Vo(){if(t(Q))return;const d=Math.floor(Math.random()*20)+1;d===t(Ce)?g(Ce,d%20+1):g(Ce,d),console.log("🎵 Changing to loop #"+t(Ce)),W&&(W.playing()?(W.fade(W.volume(),0,200),setTimeout(()=>{W.stop(),W.unload()},200)):W.unload());const p=window.Howl;p&&(W=new p({src:[ut.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ New background music loop #"+t(Ce)+" loaded"),t(ke)&&!t(Q)&&setTimeout(()=>{W&&!W.playing()&&W.play()},300)},onloaderror:(A,S)=>{console.warn("⚠️ Failed to load loop #"+t(Ce)+":",S)}}))}function Yo(){W&&W.playing()&&(W.fade(W.volume(),0,500),setTimeout(()=>W.stop(),500)),ve&&ve.playing()&&(ve.fade(ve.volume(),0,500),setTimeout(()=>ve.stop(),500))}function ts(){W&&W.playing()&&(W.fade(W.volume(),0,500),setTimeout(()=>W.stop(),500)),ve&&ve.playing()&&(ve.fade(ve.volume(),0,500),setTimeout(()=>ve.stop(),500)),setTimeout(()=>{t(ke)&&ya()},600)}function Xo(){if(W&&W.playing()){const d=W.volume();W.fade(d,0,1e3),setTimeout(()=>{W.stop(),W.volume(.3)},1e3)}}let ss=P(!1);function Ko(){g(ss,!1),setTimeout(()=>{g(ss,!0)},10)}let Je=null;const as={vinylStartScale:.01,vinylEndScale:.15,sparkleScale:.6};function qo(){g(ke,!t(ke)),t(ke)?ya():Yo()}function Qo(){Qt&&t(ke)&&t(_e)&&Qt.play()}function Jo(){Jt&&t(ke)&&t(_e)&&Jt.play()}let Tt=null,os=null,gt=null,ht=null,vt=P("Initializing..."),Ze=P(""),Ae=[],wa=P(!1),Fe=P(1e3);const _a=[.4,.8,1,1.6,2,3,5,8,10,15,20,25,30,40,50,60,80,100];let mt=P(5),$e=De(()=>_a[t(mt)]),Ve=P(0),de=P(!1),xt=P(0),ce=P(!1),ns=P(!1),Zo=P(0),Ye=!1,Ie=null,rs=!1,et=P(0),tt=P(0),bt=P(0),is=P(0),ls=De(()=>t(tt)>0?(t(bt)/t(tt)*100).toFixed(2):"0.00"),ds=De(()=>t(et)>0?(t(is)/t(et)*100).toFixed(2):"0.00"),Q=P(!1),Me=P(0),Xe=P(0),Rt=P(0),cs=P(0),Pt=P(0),ps=P(0),en=De(()=>t(Pt)>0?(t(ps)/t(Pt)*100).toFixed(2):"0.00"),xe=P(ue([]));function tn(d,p,A){const S=new Date().toLocaleString("fi-FI");let x=`
${"=".repeat(60)}
`;x+=`ROUND #${d} - ${S}
`,x+=`Mode: ${t(Q)?"FREE SPINS":"BASE GAME"}
`,x+=`${"=".repeat(60)}
`,p.forEach(($,k)=>{x+=`
Win ${k+1}:
`,x+=`  Symbol: ${$.symbol} (${Sa[$.symbol]})
`,x+=`  Count: ${$.count} symbols
`,x+=`  Multiplier: ${$.multiplier}x
`,x+=`  Payout: ${$.payout.toFixed(2)}
`,x+=`  Positions: [${$.positions.join(", ")}]
`}),x+=`
${"─".repeat(60)}
`,x+=`TOTAL WIN: ${A.toFixed(2)}
`,x+=`${"=".repeat(60)}
`,t(xe).push(x)}function sn(){const d=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${t(xe).join(`
`)}`,p=new Blob([d],{type:"text/plain"}),A=URL.createObjectURL(p),S=document.createElement("a");S.href=A,S.download=`win-log-${Date.now()}.txt`,S.click(),URL.revokeObjectURL(A)}function an(){g(xe,ue([]))}function on(){t(Q)||(g(Q,!0),g(Me,10),g(Xe,0),Le(Rt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),ts())}const nn={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},rn={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function ka(d){if(d===6)return Math.random()<.55?"h":"emptyslot";const p=t(Q)?rn:nn,A=Math.random();let S=0;const x=ye.filter(k=>k!=="h"),$=x.reduce((k,B)=>k+p[B],0);for(const k of x)if(S+=p[k]/$,A<S)return k;return"f"}function Aa(){const d=[];for(let p=0;p<o;p++){const A=ka(p);d.push(A),Le(Pt),A==="emptyslot"&&Le(ps)}return d}function $a(d){return d<3?{col:0,row:d}:d<6?{col:1,row:d-3}:d===6?{col:2,row:0}:d<10?{col:3,row:d-7}:{col:4,row:d-10}}function yt(d,p){return d===0?p:d===1?3+p:d===2?6:d===3?7+p:d===4?10+p:-1}function ln(){if(t(Q)){const d=Math.random();return d<.7?3:d<.92?5:10}else{const d=Math.random();return d<.7?1:d<.92?2:3}}const dn={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function cn(){var pe;const d=[],p=[];for(let L=0;L<o;L++)wt[L]==="l"&&p.push(L);if(p.length>=5){const L=p.length;g(Me,t(Me)+L),t(Q)?console.log(`🎰 FREE SPINS RETRIGGERED! +${L} FREE SPINS! Total: ${t(Me)}`):(g(Q,!0),g(Xe,0),Le(Rt),console.log(`🎰 FREE SPINS TRIGGERED! ${p.length} scatters = ${L} FREE SPINS!`),ts()),d.push({symbol:"l",count:p.length,payout:0,positions:p,multiplier:1})}const A=[];for(let L=0;L<3;L++)for(let O=0;O<3;O++)for(let j=0;j<1;j++)for(let U=0;U<3;U++)for(let Y=0;Y<3;Y++){const G=[yt(0,L),yt(1,O),yt(2,j),yt(3,U),yt(4,Y)];A.push(G)}console.log(`Generated ${A.length} possible paths (should be 81)`);const S=[];for(const L of A){const O=L.map(G=>wt[G]);if(O[0]==="emptyslot"||O[0]==="l")continue;let j=null;for(let G=0;G<O.length;G++)if(O[G]!=="h"&&O[G]!=="emptyslot"&&O[G]!=="l"){j=O[G];break}if(!j)continue;let U=0;const Y=new Set;for(let G=0;G<L.length;G++){const je=L[G],{col:nt}=$a(je),fe=O[G];(fe===j||fe==="h")&&Y.add(nt)}for(let G=0;G<5&&Y.has(G);G++)U++;if(U>=3){const je=L[0]%3;S.push({symbol:j,length:U,path:L.slice(0,U),startRow:je})}}const x=[],$=new Map;for(const L of S){const O=`${L.symbol}-${L.path.join(",")}`;$.has(O)||$.set(O,[]),$.get(O).push(L)}for(const[L,O]of $.entries()){const j=Math.max(...O.map(Y=>Y.length)),U=O.find(Y=>Y.length===j);U&&x.push(U)}const k=[],B=new Map;for(const L of x)B.has(L.symbol)||B.set(L.symbol,[]),B.get(L.symbol).push(L);const I=[];for(const[L,O]of B.entries()){const j=Math.max(...O.map(Y=>Y.length)),U=O.filter(Y=>Y.length===j);I.push(...U)}const X=new Map;for(const L of I){const O=`${L.symbol}-${L.length}`;X.has(O)||X.set(O,[]),X.get(O).push(L)}const J=I.length>0?ln():1;for(const[L,O]of X.entries()){const j=O[0],U=(pe=dn[j.symbol])==null?void 0:pe[j.length];if(U!==void 0&&U>0){const Y=new Map;for(const fe of O)for(let re=0;re<fe.length;re++)Y.has(re)||Y.set(re,new Set),Y.get(re).add(fe.path[re]);let G=1;for(let fe=0;fe<j.length;fe++){const re=Y.get(fe);G*=re?re.size:1}const je=U*t($e)*G*J;console.log(`  ${j.length}x${j.symbol}: ${G} ways × ${U}x × ${t($e)} bet × ${J} mult = ${je}`);const nt=new Set;for(const fe of O)fe.path.forEach(re=>nt.add(re));k.push({symbol:j.symbol,count:j.length,payout:je,positions:Array.from(nt),multiplier:J})}}return d.push(...k),d}let Se=P(0),st=P(ue([])),We=P(!1),at=P(!1),fs=P(!1),us=P(0);const Sa={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function gs(d){if(!t(_e)||!qt[d])return;const p=qt[d];p.currentTime=0,p.play().catch(A=>{console.warn("Äänen toisto epäonnistui:",d,A)})}function pn(d){_t.forEach(p=>ne.stage.removeChild(p)),_t=[],d.forEach(p=>{p.positions.forEach(A=>{const S=Re[A],x=new fo().rect(0,0,oe,D).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});x.x=S.container.x,x.y=S.container.y,ne.stage.addChild(x),_t.push(x);let $=0,k=1;const B=.05;ne.ticker.add(()=>{$+=k*B,$>=.4&&(k=-1),$<=0&&(k=1),x.alpha=.5+$})})})}function hs(){_t.forEach(d=>ne.stage.removeChild(d)),_t=[]}let wt=Aa(),vs,ne,Re=[],_t=[];class fn{constructor(p,A){Ee(this,"index");Ee(this,"container");Ee(this,"offset",0);Ee(this,"speed",0);Ee(this,"targetSpeed",30);Ee(this,"state","idle");Ee(this,"stopDelay",0);Ee(this,"bounceOffset",0);Ee(this,"bounceSpeed",0);Ee(this,"bounceFrames",0);this.index=p,this.container=A}start(p){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=p}startSynchronized(p){const A=Ho[t(me)],S=60+p*A;this.start(S)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const p=t(me)==="slow"?.88:t(me)==="medium"?.92:.95;this.speed*=p,this.speed<2.5&&(this.state="bouncing",this.speed=0,this.offset=0,this.bounceOffset=0,this.bounceSpeed=4,gs("stop"),Qo())}this.state==="bouncing"&&(this.bounceSpeed*=.8,this.bounceOffset+=this.bounceSpeed,Math.abs(this.bounceSpeed)<.2&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=le&&(this.offset=0,wt[this.index]=ka(this.index)))}}draw(){const p=this.container;p.removeChildren();const A=wt[this.index];if(!A||!Tt||!Tt[A])return;const S=this.offset+this.bounceOffset,x=($,k)=>{const B=Tt[$];if(!B)return;const I=new sa(B);I.width=oe,I.height=D,I.x=0,I.y=k,p.addChild(I)};x(A,S-le),x(A,S),x(A,S+le)}}let i=P(1);ga(async()=>{ne=new Mo,await ne.init({width:n,height:r,backgroundAlpha:0}),vs.appendChild(ne.canvas);const d=()=>{const x=window.innerWidth,$=window.innerHeight,k=x/n,B=$/r,I=Math.min(k,B,1);g(i,ue(I)),ne.stage.scale.set(I),ne.renderer.resize(n,r)};d(),window.addEventListener("resize",d);const p=x=>{(x.code==="Space"||x.key===" ")&&(x.preventDefault(),Re.some(k=>k.state==="spinning"||k.state==="slowing")?(Re.forEach(k=>{k.state==="spinning"?(k.stopDelay=0,k.state="slowing",k.speed=k.targetSpeed*.5):k.state==="slowing"&&(k.speed=k.speed*.3)}),console.log("⚡ Skip spin - kiekot pysähtyvät nopeasti")):ms())};window.addEventListener("keydown",p);const A={};try{g(vt,"Loading background and UI images..."),Ae.push(`Loading background: ${we}`),Ae.push(`Loading reel frames: ${ee}`),Ae.push(`Loading logo: ${he}`),await it.load([{alias:"background",src:we},{alias:"reelframes",src:ee},{alias:"logo",src:he}]),os=Ke.from("background"),gt=Ke.from("reelframes"),ht=Ke.from("logo"),console.log("✅ Background texture created:",os.width,"x",os.height),console.log("✅ Reel frames texture created:",gt.width,"x",gt.height),console.log("✅ Logo texture created:",ht.width,"x",ht.height),Ae.push("✅ All UI images loaded"),g(vt,"Loading symbols...");const x=[];for(const $ of ye)x.push({alias:$,src:Be[$]});await it.load(x);for(const $ of ye){const k=Be[$];Ae.push(`Loading symbol ${$}: ${k}`);try{const B=Ke.from($);A[$]=B,console.log(`✅ Symbol ${$} loaded:`,B.width,"x",B.height),Ae.push(`✅ Symbol ${$} loaded`)}catch(B){const I=`❌ Failed to load symbol ${$} from ${k}: ${B}`;throw Ae.push(I),console.error(I),new Error(I)}}Tt=A,g(vt,"Assets loaded successfully!")}catch(x){g(Ze,`Asset loading failed: ${x}`),Ae.push(t(Ze)),console.error(t(Ze));return}console.log("Ladataan ääniefektit...");for(const[x,$]of Object.entries(Qe)){const k=new Audio;k.src=$,k.preload="auto",k.volume=.7,k.load(),k.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${$} (käytetään hiljaista placeholderia)`)}),qt[x]=k}[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(x=>({x:x.x+c,y:x.y+h})),Re=[];for(let x=0;x<o;x++){const $=$a(x),k=$.col,B=$.row,I=300+k*(oe+20),X=250+B*(D+15),J=x===6?I+f:I,pe=x===6?X+b:X,L=new ha;L.x=J+c,L.y=pe+h;const O=new fo().rect(0,0,oe,D).fill(16777215);O.x=L.x,O.y=L.y,L.mask=O,ne.stage.addChild(O),ne.stage.addChild(L),Re.push(new fn(x,L))}if(gt){const x=new sa(gt);x.scale.set(1),x.x=250,x.y=200,ne.stage.addChild(x),es=x,g(Zt,ue(x.width)),console.log("Reel frames lisätty:",x.width.toFixed(0),"x",x.height.toFixed(0)),console.log("Control panel leveys päivitetty:",t(Zt).toFixed(0))}if(ht){const x=new sa(ht);x.scale.set(C),x.x=(ne.renderer.width-x.width)/2+R,x.y=z,ne.stage.addChild(x),console.log("Logo lisätty päällimmäiseen layeriin:",x.width.toFixed(0),"x",x.height.toFixed(0))}ba(),ne.ticker.add(un)});function un(){for(const d of Re)d.update(),d.draw();if(!t(We)&&!rs&&Re.every(d=>d.state==="stopped")){rs=!0,Xo();const d=cn();console.log(`Checking wins, found ${d.length} wins`),d.length>0?(g(st,ue(d)),g(Se,ue(d.reduce((p,A)=>p+A.payout,0))),tn(t(et),d,t(Se)),hn(t(Se)),g(We,!0),g(Zo,ue(Date.now())),console.log(`🎉 VOITTO! ${t(Se)} pistettä! Uusi saldo: ${t(Fe)}`),console.log(`isShowingWin set to: ${t(We)}, totalWin: ${t(Se)}`),d.forEach(p=>{const A=p.multiplier?` (${p.multiplier}x multiplier)`:"";console.log(`${p.count}x ${p.symbol} = ${p.payout} pistettä${A}`)}),pn(d),gs("win"),t(de)&&!Ye&&(Ye=!0,Ie=window.setTimeout(()=>{t(We)&&t(de)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),g(We,!1),hs()),Ie=window.setTimeout(()=>{Ye=!1,xs()},200)},1500))):(console.log("No wins found this spin"),t(de)&&!Ye&&(Ye=!0,Ie=window.setTimeout(()=>{Ye=!1,xs()},500))),t(Q)&&t(Me)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${t(Xe)}`),setTimeout(()=>{g(us,ue(t(Xe))),g(fs,!0)},2e3))}}function ms(){if(t(Q)||Vo(),Ko(),t(Q)&&t(Me)>0)Le(Me,-1),Le(cs),console.log(`🎰 FREE SPIN! Remaining: ${t(Me)}`);else if(!t(Q)){if(t(Fe)<t($e)){alert(`Not enough credits! Balance: ${t(Fe)}, Bet: ${t($e)}`),It();return}g(Fe,t(Fe)-t($e)),Le(et),g(tt,t(tt)+t($e))}Ie!==null&&(clearTimeout(Ie),Ie=null),g(st,ue([])),g(Se,0),g(Ve,0),console.log("🔄 lastWin nollattu: "+t(Ve)),g(We,!1),rs=!1,hs(),wt=Aa(),Re.forEach((d,p)=>{d.startSynchronized(p)}),gs("spin")}function gn(d,p,A=1400){if(typeof window>"u")return;const S=document.getElementById("winLabel");if(!S)return;S.classList.add("rolling");const x=performance.now(),$=p-d,k=I=>1-Math.pow(1-I,3);function B(I){const X=Math.min(1,(I-x)/A),J=d+$*k(X);g(Ve,J),X<1?requestAnimationFrame(B):(g(Ve,ue(p)),S.classList.remove("rolling"),S.classList.add("winHit"),setTimeout(()=>S.classList.remove("winHit"),450))}requestAnimationFrame(B)}function hn(d){g(Fe,t(Fe)+d),g(bt,t(bt)+d);const p=t(Ve);g(Ve,ue(d));const A=d>t($e)*50?2e3:1400;if(gn(p,d,A),t(Q)&&g(Xe,t(Xe)+d),d>0){Le(is);const S=d/t($e);S>=10&&Jo(),Je&&(S>=50?Je.show():S>=20?setTimeout(()=>Je.show(),200):S>=10&&setTimeout(()=>Je.show(),400))}}function vn(){t(mt)<_a.length-1&&Le(mt)}function mn(){t(mt)>0&&Le(mt,-1)}function ze(d){g(de,!0),g(xt,ue(d)),g(ce,!1),xs()}function It(){g(de,!1),g(xt,0),Ye=!1,Ie!==null&&(clearTimeout(Ie),Ie=null)}function xs(){if(!t(de)||t(xt)<=0){It();return}console.log(`Autoplay: Starting spin ${t(xt)} rounds left`),ms(),Le(xt,-1)}function xn(){confirm("Reset all statistics?")&&(g(et,0),g(tt,0),g(bt,0),g(is,0),g(Rt,0),g(cs,0),g(Pt,0),g(ps,0))}var Ea=Zi();Vn(d=>{var p=Di();u(He(p)),V(d,p)});var La=He(Ea);{var bn=d=>{Ni(d,{onloaded:()=>g(wa,!0)})};se(La,d=>{t(wa)||d(bn)})}var Ta=u(La,2);{var yn=d=>{var p=Vi(),A=u(w(p),2),S=u(w(A));_(A);var x=u(A,2);{var $=j=>{var U=Ui(),Y=u(w(U));_(U),te(()=>H(Y,` ${t(Ze)??""}`)),V(j,U)};se(x,j=>{t(Ze)&&j($)})}var k=u(x,2),B=u(w(k));B.nodeValue=` ${be??""}`,_(k);var I=u(k,2),X=u(w(I));X.nodeValue=` ${we??""}`,_(I);var J=u(I,2),pe=u(w(J));_(J);var L=u(J,2);{var O=j=>{var U=Hi(),Y=w(U),G=w(Y);_(Y);var je=u(Y,2);Vt(je,17,()=>Ae,Ht,(nt,fe)=>{var re=Gi(),Nn=w(re,!0);_(re),te(()=>H(Nn,t(fe))),V(nt,re)}),_(U),te(()=>H(G,`Log (${Ae.length??""})`)),V(j,U)};se(L,j=>{Ae.length>0&&j(O)})}_(p),te(()=>{H(S,` ${t(vt)??""}`),H(pe,` ${Be.a??""}`)}),V(d,p)};se(Ta,d=>{(t(vt)!=="Assets loaded successfully!"||t(Ze))&&d(yn)})}var Ra=u(Ta,2);{var wn=d=>{var p=Ki(),A=u(w(p),2),S=w(A);_(A);var x=u(A,2);Vt(x,17,()=>t(st),Ht,(I,X)=>{var J=Yi(),pe=w(J);_(J),te(L=>H(pe,`${t(X).count??""} × ${Sa[t(X).symbol]??""} = ${L??""} pistettä`),[()=>t(X).payout.toFixed(2)]),V(I,J)});var $=u(x,2);{var k=I=>{var X=Xi(),J=w(X),pe=w(J);_(J),_(X),te(()=>H(pe,`✨ ${t(st)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),V(I,X)};se($,I=>{t(st).length>0&&t(st)[0].multiplier>1&&I(k)})}var B=u($,2);_(p),te(I=>H(S,`${I??""} pistettä`),[()=>t(Se).toFixed(2)]),F("click",B,()=>{g(We,!1),hs(),console.log("Win popup closed, ready for next spin")}),V(d,p)};se(Ra,d=>{t(Se)>0&&t(We)&&d(wn)})}var Pa=u(Ra,2);{var _n=d=>{var p=qi(),A=u(w(p),8);_(p),te(S=>y(p,"style",`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.95);
    color: white;
    padding: ${30*t(i)}px;
    border-radius: ${15*t(i)}px;
    font-family: Arial, sans-serif;
    z-index: 3000;
    border: ${3*t(i)}px solid #ffd700;
    max-width: ${600*t(i)}px;
    max-height: ${S??""}px;
    overflow-y: auto;
    font-size: ${t(i)??""}em;
  `),[()=>Math.min(r*t(i)*.8,80*window.innerHeight/100)]),F("click",A,()=>{g(at,!1)}),V(d,p)};se(Pa,d=>{t(at)&&d(_n)})}var Ia=u(Pa,2);{var kn=d=>{var p=Qi(),A=w(p),S=u(w(A),4),x=w(S,!0);_(S);var $=u(S,2);_(A),_(p),te(k=>H(x,k),[()=>t(us).toFixed(2)]),F("click",$,()=>{g(fs,!1),g(Q,!1),g(Xe,0),g(us,0),ts()}),F("mouseenter",$,k=>{k.currentTarget.style.transform="scale(1.05)",k.currentTarget.style.boxShadow="0 6px 20px rgba(255, 215, 0, 0.6)"}),F("mouseleave",$,k=>{k.currentTarget.style.transform="scale(1)",k.currentTarget.style.boxShadow="0 4px 15px rgba(255, 215, 0, 0.4)"}),V(d,p)};se(Ia,d=>{t(fs)&&d(kn)})}var Oa=u(Ia,2),bs=w(Oa),kt=w(bs);y(kt,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${n}px;
        height: ${r}px;
      `);var ys=w(kt),ws=u(ys,2),Ba=w(ws);{var An=d=>{var p=Ji(),A=w(p),S=u(A,2),x=u(S,2),$=u(x,2),k=u($,2),B=u(k,2),I=u(B,2),X=u(I,2),J=u(X,2),pe=u(J,2);_(p),te(()=>{y(p,"style",`
    position: absolute;
    bottom: ${(m+20)*t(i)}px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.95);
    padding: ${20*t(i)}px;
    border-radius: ${15*t(i)}px;
    border: ${3*t(i)}px solid #0088ff;
    box-shadow: 0 ${8*t(i)}px ${30*t(i)}px rgba(0, 136, 255, 0.6);
    z-index: 2000;
    min-width: ${250*t(i)}px;
  `),y(A,"style",`color: white; font-weight: bold; margin-bottom: ${15*t(i)}px; text-align: center; font-size: ${18*t(i)}px;`),y(S,"style",`
        width: 100%;
        padding: ${12*t(i)}px;
        margin-bottom: ${8*t(i)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*t(i)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(i)}px;
        box-shadow: 0 ${4*t(i)}px ${10*t(i)}px rgba(68, 170, 68, 0.4);
      `),y(x,"style",`
        width: 100%;
        padding: ${12*t(i)}px;
        margin-bottom: ${8*t(i)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*t(i)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(i)}px;
        box-shadow: 0 ${4*t(i)}px ${10*t(i)}px rgba(68, 170, 68, 0.4);
      `),y($,"style",`
        width: 100%;
        padding: ${12*t(i)}px;
        margin-bottom: ${8*t(i)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*t(i)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(i)}px;
        box-shadow: 0 ${4*t(i)}px ${10*t(i)}px rgba(68, 170, 68, 0.4);
      `),y(k,"style",`
        width: 100%;
        padding: ${12*t(i)}px;
        margin-bottom: ${8*t(i)}px;
        background: linear-gradient(135deg, #4488ff 0%, #66aaff 100%);
        color: white;
        border: none;
        border-radius: ${8*t(i)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(i)}px;
        box-shadow: 0 ${4*t(i)}px ${10*t(i)}px rgba(68, 136, 255, 0.4);
      `),y(B,"style",`
        width: 100%;
        padding: ${12*t(i)}px;
        margin-bottom: ${8*t(i)}px;
        background: linear-gradient(135deg, #4488ff 0%, #66aaff 100%);
        color: white;
        border: none;
        border-radius: ${8*t(i)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(i)}px;
        box-shadow: 0 ${4*t(i)}px ${10*t(i)}px rgba(68, 136, 255, 0.4);
      `),y(I,"style",`
        width: 100%;
        padding: ${12*t(i)}px;
        margin-bottom: ${8*t(i)}px;
        background: linear-gradient(135deg, #ff8844 0%, #ffaa66 100%);
        color: white;
        border: none;
        border-radius: ${8*t(i)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(i)}px;
        box-shadow: 0 ${4*t(i)}px ${10*t(i)}px rgba(255, 136, 68, 0.4);
      `),y(X,"style",`
        width: 100%;
        padding: ${12*t(i)}px;
        margin-bottom: ${8*t(i)}px;
        background: linear-gradient(135deg, #ff8844 0%, #ffaa66 100%);
        color: white;
        border: none;
        border-radius: ${8*t(i)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(i)}px;
        box-shadow: 0 ${4*t(i)}px ${10*t(i)}px rgba(255, 136, 68, 0.4);
      `),y(J,"style",`
        width: 100%;
        padding: ${12*t(i)}px;
        margin-bottom: ${15*t(i)}px;
        background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%);
        color: white;
        border: none;
        border-radius: ${8*t(i)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(i)}px;
        box-shadow: 0 ${4*t(i)}px ${10*t(i)}px rgba(255, 68, 68, 0.4);
      `),y(pe,"style",`
        width: 100%;
        padding: ${10*t(i)}px;
        background: rgba(255, 255, 255, 0.1);
        color: #aaa;
        border: ${1*t(i)}px solid #555;
        border-radius: ${8*t(i)}px;
        cursor: pointer;
        font-size: ${14*t(i)}px;
      `)}),F("click",S,()=>{ze(10),g(ce,!1)}),F("click",x,()=>{ze(25),g(ce,!1)}),F("click",$,()=>{ze(50),g(ce,!1)}),F("click",k,()=>{ze(100),g(ce,!1)}),F("click",B,()=>{ze(200),g(ce,!1)}),F("click",I,()=>{ze(500),g(ce,!1)}),F("click",X,()=>{ze(1e3),g(ce,!1)}),F("click",J,()=>{ze(5e3),g(ce,!1)}),F("click",pe,()=>{g(ce,!1)}),V(d,p)};se(Ba,d=>{t(ce)&&d(An)})}var _s=u(Ba,2);y(_s,"src",`${q??""}/Control_leftend.png`);var Ot=u(_s,2),ks=w(Ot),As=w(ks),Ca=w(As),$s=u(Ca,2),Ss=w($s),Bt=u(Ss,2),$n=w(Bt,!0);_(Bt);var Fa=u(Bt,2);_($s),_(As);var Es=u(As,2);y(Es,"src",`${q??""}/Control_divider.png`);var Ls=u(Es,2),Ma=w(Ls),Ts=u(Ma,2),Rs=w(Ts),Sn=w(Rs,!0);_(Rs),_(Ts),_(Ls);var Wa=u(Ls,2);y(Wa,"src",`${q??""}/Control_divider.png`),_(ks);var za=u(ks,2),Ps=u(za,2),Is=w(Ps),Os=w(Is);_(Is),_(Ps);var ja=u(Ps,2),Ct=w(ja),Ft=w(Ct),Na=u(Ft,2);_(Ct);var Bs=u(Ct,2);y(Bs,"src",`${q??""}/Control_divider.png`);var Mt=u(Bs,2),Wt=w(Mt),Da=u(Wt,2);_(Mt);var Cs=u(Mt,2);y(Cs,"src",`${q??""}/Control_divider.png`);var Fs=u(Cs,2),Ua=w(Fs),Ms=u(Ua,2),Ws=w(Ms),zs=w(Ws),En=w(zs,!0);_(zs);var Ga=u(zs,2),Ln=w(Ga,!0);_(Ga),_(Ws),_(Ms),_(Fs);var js=u(Fs,2);y(js,"src",`${q??""}/Control_divider.png`);var Ha=u(js,2),Va=w(Ha);_(Ha),_(ja),_(Ot);var Ya=u(Ot,2);y(Ya,"src",`${q??""}/Control_rightend.png`),_(ws),_(kt),co(kt,d=>vs=d,()=>vs);var zt=u(kt,2);zt.textContent=`🛠️ DEBUG v${a}`;var Xa=u(zt,2);const Tn=De(()=>t(Se)/t($e)>=50?"jackpot":t(Se)/t($e)>=20?"medium":"small");co(Mi(Xa,{get winLevel(){return t(Tn)},get winAmount(){return t(Se)},get vinylStartScale(){return as.vinylStartScale},get vinylEndScale(){return as.vinylEndScale},get sparkleScale(){return as.sparkleScale}}),d=>Je=d,()=>Je);var jt=u(Xa,2),Ka=u(w(jt),2);Ka.textContent=`v${a}`;var Ns=u(Ka,2),qa=u(w(Ns),2),Rn=w(qa,!0);_(qa),_(Ns);var Ds=u(Ns,2),Qa=u(w(Ds),2),Pn=w(Qa,!0);_(Qa),_(Ds);var Us=u(Ds,2),Ja=u(w(Us),2),In=w(Ja,!0);_(Ja),_(Us);var Gs=u(Us,2),Hs=u(w(Gs),2),On=w(Hs);_(Hs),_(Gs);var Vs=u(Gs,2),Ys=u(w(Vs),2),Bn=w(Ys);_(Ys),_(Vs);var Xs=u(Vs,2),Za=u(w(Xs),2),Cn=w(Za,!0);_(Za),_(Xs);var Ks=u(Xs,2),eo=u(w(Ks),2),Fn=w(eo,!0);_(eo),_(Ks);var qs=u(Ks,2),to=u(w(qs),2),Mn=w(to);_(to),_(qs);var so=u(qs,2),ao=u(so,2),ot=w(ao),Wn=w(ot);_(ot);var Nt=u(ot,2),At=u(Nt,2),zn=w(At);_(At);var Qs=u(At,2);_(ao),_(jt);var $t=u(jt,2),jn=w($t,!0);_($t),_(bs),_(Oa),te((d,p,A,S,x,$,k,B)=>{y(bs,"style",`
    position: relative;
    width: ${n*t(i)}px;
    height: ${r*t(i)}px;
  `),y(ys,"style",`
          position: absolute;
          top: ${130*t(i)}px;
          right: ${20*t(i)}px;
          padding: ${10*t(i)}px ${15*t(i)}px;
          background-color: rgba(255, 215, 0, 0.3);
          border: ${2*t(i)}px solid rgba(255, 215, 0, 0.7);
          border-radius: ${8*t(i)}px;
          cursor: pointer;
          font-weight: bold;
          font-size: ${16*t(i)}px;
          color: white;
          text-shadow: 0 0 ${5*t(i)}px rgba(0,0,0,0.8);
          z-index: 1000;
          min-width: ${180*t(i)}px;
        `),y(ws,"style",`
        position: absolute;
        left: ${((es?es.x:E)+T)*t(i)}px;
        top: ${(v+K)*t(i)}px;
        width: ${t(Zt)*t(i)}px;
        height: ${m*t(i)}px;
        display: flex;
        align-items: center;
        z-index: 1000;
      `),y(_s,"style",`height: ${m*t(i)}px; flex-shrink: 0;`),y(Ot,"style",`
    flex-grow: 1;
    height: ${m*t(i)}px;
    background-image: url('${q??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    padding: 0 ${20*t(i)}px;
    position: relative;
    gap: ${20*t(i)}px;
  `),y(Ca,"style",`color: #00ff00; font-size: ${12*t(i)}px; font-weight: bold; line-height: 1; height: ${16*t(i)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(i)}px;`),y($s,"style",`display: flex; gap: ${5*t(i)}px; align-items: center; height: ${44*t(i)}px;`),y(Ss,"style",`
              width: ${40*t(i)}px;
              height: ${40*t(i)}px;
              background-image: url('${q??""}/Control_lowerbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            `),y(Bt,"style",`
            color: #fff;
            font-size: ${18*t(i)}px;
            font-weight: bold;
            min-width: ${80*t(i)}px;
            text-align: center;
            font-family: 'Courier New', monospace;
          `),H($n,d),y(Fa,"style",`
              width: ${40*t(i)}px;
              height: ${40*t(i)}px;
              background-image: url('${q??""}/Control_upperbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            `),y(Es,"style",`height: ${m*.8*t(i)}px; flex-shrink: 0;`),y(Ma,"style",`color: #00ff00; font-size: ${12*t(i)}px; font-weight: bold; line-height: 1; height: ${16*t(i)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(i)}px;`),y(Ts,"style",`height: ${44*t(i)}px; display: flex; align-items: center;`),y(Rs,"style",`
            color: #fff;
            font-size: ${20*t(i)}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
          `),H(Sn,p),y(Wa,"style",`height: ${m*.8*t(i)}px; flex-shrink: 0;`),y(za,"style",`flex-shrink: 0; width: ${130*t(i)}px;`),ca(Is,1,`play-button-wrapper ${(t(ss)?"glare-animate":"")??""}`,"svelte-o2kwxd"),y(Os,"style",`
            width: ${110*t(i)}px;
            height: ${110*t(i)}px;
            background-image: url('${q??""}/${(t(de)?"Control_playbutton_stop.png":"Control_playbutton.png")??""}');
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
          `),y(Os,"title",t(de)?"STOP AUTOPLAY":"SPIN"),y(Ct,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*t(i)}px;`),y(Ft,"style",`
            width: ${50*t(i)}px;
            height: ${50*t(i)}px;
            background-image: url('${q??""}/${(t(de)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(Ft,"title",t(de)?"Stop Autoplay":"Autoplay"),y(Na,"src",`${q??""}/${(t(de)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),y(Na,"style",`height: ${10*t(i)}px; width: auto; display: block;`),y(Bs,"style",`height: ${m*.8*t(i)}px; flex-shrink: 0;`),y(Mt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*t(i)}px;`),y(Wt,"style",`
            width: ${50*t(i)}px;
            height: ${50*t(i)}px;
            background-image: url('${q??""}/Control_fastplay_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(Wt,"title",`Spin Speed: ${(t(me)==="slow"?"Slow":t(me)==="medium"?"Medium":"Fast")??""}`),y(Da,"src",`${q??""}/${(t(me)==="slow"?"Control_bar_deselect.png":t(me)==="medium"?"Control_half_bar_select.png":"Control_bar_select.png")??""}`),y(Da,"style",`height: ${10*t(i)}px; width: auto; display: block;`),y(Cs,"style",`height: ${m*.8*t(i)}px; flex-shrink: 0;`),y(Ua,"style",`color: #00ff00; font-size: ${12*t(i)}px; font-weight: bold; line-height: 1; height: ${16*t(i)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(i)}px;`),y(Ms,"style",`height: ${44*t(i)}px; display: flex; align-items: center;`),y(Ws,"style",`font-size: ${20*t(i)}px;`),H(En,A),H(Ln,A),y(js,"style",`height: ${m*.8*t(i)}px; flex-shrink: 0;`),y(Va,"style",`
            width: ${50*t(i)}px;
            height: ${50*t(i)}px;
            background-image: url('${q??""}/Control_menubar.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(Ya,"style",`height: ${m*t(i)}px; flex-shrink: 0;`),y(zt,"style",`
    position: absolute;
    top: ${190*t(i)}px;
    right: ${20*t(i)}px;
    padding: ${10*t(i)}px ${15*t(i)}px;
    background-color: rgba(0, 255, 0, 0.3);
    border: ${2*t(i)}px solid rgba(0, 255, 0, 0.7);
    border-radius: ${8*t(i)}px;
    cursor: pointer;
    font-weight: bold;
    font-size: ${16*t(i)}px;
    color: white;
    text-shadow: 0 0 ${5*t(i)}px rgba(0,0,0,0.8);
    z-index: 10000;
    min-width: ${180*t(i)}px;
    pointer-events: auto;
  `),y(jt,"style",`
  position: absolute;
  top: 20px;
  left: 20px;
  display: ${(t(ns)?"block":"none")??""};
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
`),H(Rn,S),H(Pn,x),H(In,$),y(Hs,"style",`color: ${k??""};`),H(On,`${t(ls)??""}%`),y(Ys,"style",`color: ${B??""};`),H(Bn,`${t(ds)??""}%`),H(Cn,t(Rt)),H(Fn,t(cs)),H(Mn,`${t(en)??""}%`),ot.disabled=t(xe).length===0,y(ot,"style",`
        width: 100%;
        padding: 5px;
        background: ${(t(xe).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(t(xe).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(t(xe).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(t(xe).length>0?"1":"0.5")??""};
      `),H(Wn,`Download Win Log (${t(xe).length??""})`),Nt.disabled=t(xe).length===0,y(Nt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(t(xe).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(t(xe).length>0?"1":"0.5")??""};
      `),y(At,"style",`
        width: 100%;
        padding: 5px;
        background: ${(t(ke)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(t(ke)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),H(zn,`🎵 Music: ${(t(ke)?"ON":"OFF")??""}`),Qs.disabled=t(Q),y(Qs,"style",`
        width: 100%;
        padding: 5px;
        background: ${(t(Q)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(t(Q)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(t(Q)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(t(Q)?"0.5":"1")??""};
      `),y($t,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(t(_e)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(t(_e)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),y($t,"title",t(_e)?"Mykistä äänet":"Laita äänet päälle"),H(jn,t(_e)?"🔊":"🔇")},[()=>t($e).toFixed(2),()=>t(Fe).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>t(Ve).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>t(et).toLocaleString(),()=>t(tt).toLocaleString(),()=>t(bt).toLocaleString(),()=>parseFloat(t(ls))>=95?"#00ff00":parseFloat(t(ls))>=85?"#ffff00":"#ff6666",()=>parseFloat(t(ds))>=30?"#00ff00":parseFloat(t(ds))>=20?"#ffff00":"#ff6666"]),F("click",ys,()=>{g(at,!t(at))}),F("click",Ss,mn),F("click",Fa,vn),F("click",Os,()=>{t(de)?It():Re.some(p=>p.state==="spinning"||p.state==="slowing")?Re.forEach(p=>{p.state==="spinning"?(p.stopDelay=0,p.state="slowing",p.speed=p.targetSpeed*.5):p.state==="slowing"&&(p.speed=p.speed*.3)}):ms()}),F("click",Ft,()=>{t(de)?It():g(ce,!t(ce))}),F("click",Wt,()=>{t(me)==="slow"?g(me,"medium"):t(me)==="medium"?g(me,"fast"):g(me,"slow")}),F("click",Va,()=>{g(at,!t(at))}),F("click",zt,()=>{g(ns,!t(ns))}),F("click",so,xn),F("click",ot,sn),F("click",Nt,an),F("click",At,qo),F("click",Qs,on),F("click",$t,()=>{g(_e,!t(_e))}),V(s,Ea),Xt()}var tl=Z('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),sl=Z('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function al(s,e){Yt(e,!1);let a=rt(e,"isAuthenticated",12,!1),o=ia(""),n=ia(!1);const r="slot2024";function l(){t(o)===r?(a(!0),sessionStorage.setItem("gameAuthenticated","true")):(g(n,!0),g(o,""),setTimeout(()=>g(n,!1),3e3))}ga(()=>{a(sessionStorage.getItem("gameAuthenticated")==="true")}),Xn();var c=Gt(),h=He(c);{var b=f=>{var v=sl(),m=w(v),E=u(w(m),4),T=w(E);Rr(T),br(2),_(E);var K=u(E,2);{var C=R=>{var z=tl();V(R,z)};se(K,R=>{t(n)&&R(C)})}_(m),_(v),Ir(T,()=>t(o),R=>g(o,R)),F("submit",E,Or(l)),V(f,v)};se(h,f=>{a()||f(b)})}V(s,c),Xt()}var ol=Z("<!> <!>",1);function vl(s){let e=ia(!1);var a=ol(),o=He(a);al(o,{get isAuthenticated(){return t(e)},set isAuthenticated(l){g(e,l)},$$legacy:!0});var n=u(o,2);{var r=l=>{el(l,{})};se(n,l=>{t(e)&&l(r)})}V(s,a)}export{Oo as A,Ro as C,Nr as R,Fr as S,Bo as V,vl as _,Cr as u};
