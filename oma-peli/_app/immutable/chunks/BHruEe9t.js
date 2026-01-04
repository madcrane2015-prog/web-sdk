const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Cl7CMKni.js","./Cb0119l1.js","./BrW7ntrJ.js","./Fx7Xcyif.js","./CkL9UklL.js","./C2GHuDhf.js","./DKZts45e.js","./BLV9mn-X.js"])))=>i.map(i=>d[i]);
var zn=Object.defineProperty;var jn=(s,e,a)=>e in s?zn(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var $e=(s,e,a)=>jn(s,typeof e!="symbol"?e+"":e,a);import{g as Nn,l as Dn,e as Ut,a as H,t as Z,n as _o,i as F,j as Un,k as Gn}from"./CsxIJThA.js";import{i as Hn}from"./DqfWCwGf.js";import{y as Ee,j as Vn,a8 as Yn,F as t,Q as Xn,aa as Kn,ab as ao,h as oo,e as Js,k as At,l as qn,ac as ko,w as Ao,ad as Qn,q as $o,a7 as Jn,U as Zn,a2 as no,ar as Zs,z as ro,as as er,at as tr,au as sr,o as ar,av as or,aw as nr,ax as rr,ay as ir,b as lr,az as cr,aA as dr,a6 as pr,aB as fr,aC as ur,D as gr,L as hr,p as Vt,f as He,ah as P,a as Yt,T as g,c as w,s as u,r as _,t as te,I as De,ag as ga,aD as Se,aE as vr,aF as ia}from"./Fx7Xcyif.js";import{_ as io,i as se,p as ue}from"./BrW7ntrJ.js";import{s as q}from"./DfoPkomP.js";import{p as rt,b as lo}from"./C4w3i6Q0.js";import{b as ye}from"./CxU8Lryg.js";import{e as Ge,E as M,a as mr,C as ha,Q as la,V as ca,N as ea,D as ge,H as xr,p as Ke,a0 as dt,a1 as qe,a2 as yr,w as Ue,a3 as St,a4 as So,a5 as pt,a6 as Oe,a7 as Xt,a8 as Eo,a9 as br,aa as ta,y as sa}from"./Cb0119l1.js";import{A as wr,B as co,G as _r,a as po}from"./CkL9UklL.js";function Gt(s,e){return e}function kr(s,e,a,o){for(var n=[],i=e.length,l=0;l<i;l++)sr(e[l].e,n,!0);var d=i>0&&n.length===0&&a!==null;if(d){var h=a.parentNode;ar(h),h.append(a),o.clear(),Ne(s,e[0].prev,e[i-1].next)}or(n,()=>{for(var y=0;y<i;y++){var f=e[y];d||(o.delete(f.k),Ne(s,f.prev,f.next)),nr(f.e,!d)}})}function Ht(s,e,a,o,n,i=null){var l=s,d={flags:e,items:new Map,first:null};Ee&&Vn();var h=null,y=!1,f=Xn(()=>{var v=a();return Jn(v)?v:v==null?[]:$o(v)});Yn(()=>{var v=t(f),m=v.length;if(y&&m===0)return;y=m===0;let E=!1;if(Ee){var T=l.data===Kn;T!==(m===0)&&(l=ao(),oo(l),Js(!1),E=!0)}if(Ee){for(var K=null,B,R=0;R<m;R++){if(At.nodeType===8&&At.data===qn){l=At,E=!0,Js(!1);break}var z=v[R],ae=o(z,R);B=Lo(At,d,K,null,z,ae,R,n,e,a),d.items.set(ae,B),K=B}m>0&&oo(ao())}Ee||Ar(v,d,l,n,e,o,a),i!==null&&(m===0?h?ko(h):h=Ao(()=>i(l)):h!==null&&Qn(h,()=>{h=null})),E&&Js(!0),t(f)}),Ee&&(l=At)}function Ar(s,e,a,o,n,i,l){var d=s.length,h=e.items,y=e.first,f=y,v,m=null,E=[],T=[],K,B,R,z;for(z=0;z<d;z+=1){if(K=s[z],B=i(K,z),R=h.get(B),R===void 0){var ae=f?f.e.nodes_start:a;m=Lo(ae,e,m,m===null?e.first:m.next,K,B,z,o,n,l),h.set(B,m),E=[],T=[],f=m.next;continue}if($r(R,K,z),(R.e.f&Zs)!==0&&ko(R.e),R!==f){if(v!==void 0&&v.has(R)){if(E.length<T.length){var oe=T[0],D;m=oe.prev;var ie=E[0],le=E[E.length-1];for(D=0;D<E.length;D+=1)fo(E[D],oe,a);for(D=0;D<T.length;D+=1)v.delete(T[D]);Ne(e,ie.prev,le.next),Ne(e,m,ie),Ne(e,le,oe),f=oe,m=le,z-=1,E=[],T=[]}else v.delete(R),fo(R,f,a),Ne(e,R.prev,R.next),Ne(e,R,m===null?e.first:m.next),Ne(e,m,R),m=R;continue}for(E=[],T=[];f!==null&&f.k!==B;)(f.e.f&Zs)===0&&(v??(v=new Set)).add(f),T.push(f),f=f.next;if(f===null)continue;R=f}E.push(R),m=R,f=R.next}if(f!==null||v!==void 0){for(var be=v===void 0?[]:$o(v);f!==null;)(f.e.f&Zs)===0&&be.push(f),f=f.next;var Re=be.length;if(Re>0){var N=null;kr(e,be,N,h)}}ro.first=e.first&&e.first.e,ro.last=m&&m.e}function $r(s,e,a,o){tr(s.v,e),s.i=a}function Lo(s,e,a,o,n,i,l,d,h,y){var f=(h&rr)!==0,v=(h&ir)===0,m=f?v?Zn(n):no(n):n,E=(h&er)===0?l:no(l),T={i:E,v:m,k:i,a:null,e:null,prev:a,next:o};try{return T.e=Ao(()=>d(s,m,E,y),Ee),T.e.prev=a&&a.e,T.e.next=o&&o.e,a===null?e.first=T:(a.next=T,a.e.next=T.e),o!==null&&(o.prev=T,o.e.prev=T.e),T}finally{}}function fo(s,e,a){for(var o=s.next?s.next.e.nodes_start:a,n=e?e.e.nodes_start:a,i=s.e.nodes_start;i!==o;){var l=lr(i);n.before(i),i=l}}function Ne(s,e,a){e===null?s.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}const uo=[...` 	
\r\f \v\uFEFF`];function Sr(s,e,a){var o=s==null?"":""+s;if(e&&(o=o?o+" "+e:e),a){for(var n in a)if(a[n])o=o?o+" "+n:n;else if(o.length)for(var i=n.length,l=0;(l=o.indexOf(n,l))>=0;){var d=l+i;(l===0||uo.includes(o[l-1]))&&(d===o.length||uo.includes(o[d]))?o=(l===0?"":o.substring(0,l))+o.substring(d+1):l=d}}return o===""?null:o}function da(s,e,a,o,n,i){var l=s.__className;if(Ee||l!==a){var d=Sr(a,o,i);(!Ee||d!==s.getAttribute("class"))&&(d==null?s.removeAttribute("class"):e?s.className=d:s.setAttribute("class",d)),s.__className=a}else if(i)for(var h in i){var y=!!i[h];(n==null||y!==!!n[h])&&s.classList.toggle(h,y)}return i}function Er(s){if(Ee){var e=!1,a=()=>{if(!e){if(e=!0,s.hasAttribute("value")){var o=s.value;b(s,"value",null),s.value=o}if(s.hasAttribute("checked")){var n=s.checked;b(s,"checked",null),s.checked=n}}};s.__on_r=a,cr(a),Nn()}}function b(s,e,a,o){var n=s.__attributes??(s.__attributes={});Ee&&(n[e]=s.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&s.nodeName==="LINK")||n[e]!==(n[e]=a)&&(e==="style"&&"__styles"in s&&(s.__styles={}),e==="loading"&&(s[dr]=a),a==null?s.removeAttribute(e):typeof a!="string"&&Lr(s).includes(e)?s[e]=a:s.setAttribute(e,a))}var go=new Map;function Lr(s){var e=go.get(s.nodeName);if(e)return e;go.set(s.nodeName,e=[]);for(var a,o=s,n=Element.prototype;n!==o;){a=fr(o);for(var i in a)a[i].set&&e.push(i);o=pr(o)}return e}function Tr(s,e,a=e){var o=ur();Dn(s,"input",n=>{var i=n?s.defaultValue:s.value;if(i=aa(s)?oa(i):i,a(i),o&&i!==(i=e())){var l=s.selectionStart,d=s.selectionEnd;s.value=i??"",d!==null&&(s.selectionStart=l,s.selectionEnd=Math.min(d,s.value.length))}}),(Ee&&s.defaultValue!==s.value||gr(e)==null&&s.value)&&a(aa(s)?oa(s.value):s.value),hr(()=>{var n=e();aa(s)&&n===oa(s.value)||s.type==="date"&&!n&&!s.value||n!==s.value&&(s.value=n??"")})}function aa(s){var e=s.type;return e==="number"||e==="range"}function oa(s){return s===""?null:+s}function Rr(s){return function(...e){var a=e[0];return a.preventDefault(),s==null?void 0:s.apply(this,e)}}const pa=[];Ge.handleByNamedList(M.Environment,pa);async function Pr(s){if(!s)for(let e=0;e<pa.length;e++){const a=pa[e];if(a.value.test()){await a.value.load();return}}}let $t;function Ir(){if(typeof $t=="boolean")return $t;try{$t=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{$t=!1}return $t}var To=(s=>(s[s.NONE=0]="NONE",s[s.COLOR=16384]="COLOR",s[s.STENCIL=1024]="STENCIL",s[s.DEPTH=256]="DEPTH",s[s.COLOR_DEPTH=16640]="COLOR_DEPTH",s[s.COLOR_STENCIL=17408]="COLOR_STENCIL",s[s.DEPTH_STENCIL=1280]="DEPTH_STENCIL",s[s.ALL=17664]="ALL",s))(To||{});class Or{constructor(e){this.items=[],this._name=e}emit(e,a,o,n,i,l,d,h){const{name:y,items:f}=this;for(let v=0,m=f.length;v<m;v++)f[v][y](e,a,o,n,i,l,d,h);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const a=this.items.indexOf(e);return a!==-1&&this.items.splice(a,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Cr=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Ro=class Po extends mr{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const a=[...Cr,...this.config.runners??[]];this._addRunners(...a),this._unsafeEvalCheck()}async init(e={}){const a=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Pr(a),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const o in this._systemsHash)e={...this._systemsHash[o].constructor.defaultOptions,...e};e={...Po.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let o=0;o<this.runners.init.items.length;o++)await this.runners.init.items[o].init(e);this._initOptions=e}render(e,a){let o=e;if(o instanceof ha&&(o={container:o},a&&(la(ca,"passing a second argument is deprecated, please use render options instead"),o.target=a.renderTexture)),o.target||(o.target=this.view.renderTarget),o.target===this.view.renderTarget&&(this._lastObjectRendered=o.container,o.clearColor??(o.clearColor=this.background.colorRgba),o.clear??(o.clear=this.background.clearBeforeRender)),o.clearColor){const n=Array.isArray(o.clearColor)&&o.clearColor.length===4;o.clearColor=n?o.clearColor:ea.shared.setValue(o.clearColor).toArray()}o.transform||(o.container.updateLocalTransform(),o.transform=o.container.localTransform),o.container.enableRenderGroup(),this.runners.prerender.emit(o),this.runners.renderStart.emit(o),this.runners.render.emit(o),this.runners.renderEnd.emit(o),this.runners.postrender.emit(o)}resize(e,a,o){const n=this.view.resolution;this.view.resize(e,a,o),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),o!==void 0&&o!==n&&this.runners.resolutionChange.emit(o)}clear(e={}){const a=this;e.target||(e.target=a.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=To.ALL);const{clear:o,clearColor:n,target:i}=e;ea.shared.setValue(n??this.background.colorRgba),a.renderTarget.clear(i,o,ea.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(a=>{this.runners[a]=new Or(a)})}_addSystems(e){let a;for(a in e){const o=e[a];this._addSystem(o.value,o.name)}}_addSystem(e,a){const o=new e(this);if(this[a])throw new Error(`Whoops! The name "${a}" is already in use`);this[a]=o,this._systemsHash[a]=o;for(const n in this.runners)this.runners[n].add(o);return this}_addPipes(e,a){const o=a.reduce((n,i)=>(n[i.name]=i.value,n),{});e.forEach(n=>{const i=n.value,l=n.name,d=o[l];this.renderPipes[l]=new i(this,d?new d:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(a=>{a.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Ir())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Ro.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Io=Ro,Nt;function Br(s){return Nt!==void 0||(Nt=(()=>{var a;const e={stencil:!0,failIfMajorPerformanceCaveat:s??Io.defaultOptions.failIfMajorPerformanceCaveat};try{if(!ge.get().getWebGLRenderingContext())return!1;let n=ge.get().createCanvas().getContext("webgl",e);const i=!!((a=n==null?void 0:n.getContextAttributes())!=null&&a.stencil);if(n){const l=n.getExtension("WEBGL_lose_context");l&&l.loseContext()}return n=null,i}catch{return!1}})()),Nt}let Dt;async function Fr(s={}){return Dt!==void 0||(Dt=await(async()=>{const e=ge.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(s)).requestDevice(),!0}catch{return!1}})()),Dt}const ho=["webgl","webgpu","canvas"];async function Mr(s){let e=[];s.preference?(e.push(s.preference),ho.forEach(i=>{i!==s.preference&&e.push(i)})):e=ho.slice();let a,o={};for(let i=0;i<e.length;i++){const l=e[i];if(l==="webgpu"&&await Fr()){const{WebGPURenderer:d}=await io(async()=>{const{WebGPURenderer:h}=await import("./Cl7CMKni.js");return{WebGPURenderer:h}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);a=d,o={...s,...s.webgpu};break}else if(l==="webgl"&&Br(s.failIfMajorPerformanceCaveat??Io.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:d}=await io(async()=>{const{WebGLRenderer:h}=await import("./BLV9mn-X.js");return{WebGLRenderer:h}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);a=d,o={...s,...s.webgl};break}else if(l==="canvas")throw o={...s},new Error("CanvasRenderer is not yet implemented")}if(delete o.webgpu,delete o.webgl,!a)throw new Error("No available renderer for the current environment");const n=new a;return await n.init(o),n}const Oo="8.8.1";class Co{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Oo)}static destroy(){}}Co.extension=M.Application;class Wr{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Oo)}destroy(){this._renderer=null}}Wr.extension={type:[M.WebGLSystem,M.WebGPUSystem],name:"initHook",priority:-10};const Bo=class fa{constructor(...e){this.stage=new ha,e[0]!==void 0&&la(ca,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Mr(e),fa._plugins.forEach(a=>{a.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return la(ca,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,a=!1){const o=fa._plugins.slice(0);o.reverse(),o.forEach(n=>{n.destroy.call(this)}),this.stage.destroy(a),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Bo._plugins=[];let Fo=Bo;Ge.handleByList(M.Application,Fo._plugins);Ge.add(Co);class Mo extends wr{constructor(e,a){super();const{textures:o,data:n}=e;Object.keys(n.pages).forEach(i=>{const l=n.pages[parseInt(i,10)],d=o[l.id];this.pages.push({texture:d})}),Object.keys(n.chars).forEach(i=>{const l=n.chars[i],{frame:d,source:h}=o[l.page],y=new xr(l.x+d.x,l.y+d.y,l.width,l.height),f=new Ke({source:h,frame:y});this.chars[i]={id:i.codePointAt(0),xOffset:l.xOffset,yOffset:l.yOffset,xAdvance:l.xAdvance,kerning:l.kerning??{},texture:f}}),this.baseRenderedFontSize=n.fontSize,this.baseMeasurementFontSize=n.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:n.fontSize},this.baseLineOffset=n.baseLineOffset,this.lineHeight=n.lineHeight,this.fontFamily=n.fontFamily,this.distanceField=n.distanceField??{type:"none",range:0},this.url=a}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:a}=this.pages[e];a.destroy(!0)}this.pages=null}static install(e){co.install(e)}static uninstall(e){co.uninstall(e)}}const na={test(s){return typeof s=="string"&&s.startsWith("info face=")},parse(s){const e=s.match(/^[a-z]+\s+.+$/gm),a={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const v in e){const m=e[v].match(/^[a-z]+/gm)[0],E=e[v].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),T={};for(const K in E){const B=E[K].split("="),R=B[0],z=B[1].replace(/"/gm,""),ae=parseFloat(z),oe=isNaN(ae)?z:ae;T[R]=oe}a[m].push(T)}const o={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[n]=a.info,[i]=a.common,[l]=a.distanceField??[];l&&(o.distanceField={range:parseInt(l.distanceRange,10),type:l.fieldType}),o.fontSize=parseInt(n.size,10),o.fontFamily=n.face,o.lineHeight=parseInt(i.lineHeight,10);const d=a.page;for(let v=0;v<d.length;v++)o.pages.push({id:parseInt(d[v].id,10)||0,file:d[v].file});const h={};o.baseLineOffset=o.lineHeight-parseInt(i.base,10);const y=a.char;for(let v=0;v<y.length;v++){const m=y[v],E=parseInt(m.id,10);let T=m.letter??m.char??String.fromCharCode(E);T==="space"&&(T=" "),h[E]=T,o.chars[T]={id:E,page:parseInt(m.page,10)||0,x:parseInt(m.x,10),y:parseInt(m.y,10),width:parseInt(m.width,10),height:parseInt(m.height,10),xOffset:parseInt(m.xoffset,10),yOffset:parseInt(m.yoffset,10),xAdvance:parseInt(m.xadvance,10),kerning:{}}}const f=a.kerning||[];for(let v=0;v<f.length;v++){const m=parseInt(f[v].first,10),E=parseInt(f[v].second,10),T=parseInt(f[v].amount,10);o.chars[h[E]].kerning[h[m]]=T}return o}},vo={test(s){const e=s;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(s){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},a=s.getElementsByTagName("info")[0],o=s.getElementsByTagName("common")[0],n=s.getElementsByTagName("distanceField")[0];n&&(e.distanceField={type:n.getAttribute("fieldType"),range:parseInt(n.getAttribute("distanceRange"),10)});const i=s.getElementsByTagName("page"),l=s.getElementsByTagName("char"),d=s.getElementsByTagName("kerning");e.fontSize=parseInt(a.getAttribute("size"),10),e.fontFamily=a.getAttribute("face"),e.lineHeight=parseInt(o.getAttribute("lineHeight"),10);for(let y=0;y<i.length;y++)e.pages.push({id:parseInt(i[y].getAttribute("id"),10)||0,file:i[y].getAttribute("file")});const h={};e.baseLineOffset=e.lineHeight-parseInt(o.getAttribute("base"),10);for(let y=0;y<l.length;y++){const f=l[y],v=parseInt(f.getAttribute("id"),10);let m=f.getAttribute("letter")??f.getAttribute("char")??String.fromCharCode(v);m==="space"&&(m=" "),h[v]=m,e.chars[m]={id:v,page:parseInt(f.getAttribute("page"),10)||0,x:parseInt(f.getAttribute("x"),10),y:parseInt(f.getAttribute("y"),10),width:parseInt(f.getAttribute("width"),10),height:parseInt(f.getAttribute("height"),10),xOffset:parseInt(f.getAttribute("xoffset"),10),yOffset:parseInt(f.getAttribute("yoffset"),10),xAdvance:parseInt(f.getAttribute("xadvance"),10),kerning:{}}}for(let y=0;y<d.length;y++){const f=parseInt(d[y].getAttribute("first"),10),v=parseInt(d[y].getAttribute("second"),10),m=parseInt(d[y].getAttribute("amount"),10);e.chars[h[v]].kerning[h[f]]=m}return e}},mo={test(s){return typeof s=="string"&&s.includes("<font>")?vo.test(ge.get().parseXML(s)):!1},parse(s){return vo.parse(ge.get().parseXML(s))}},zr=[".xml",".fnt"],jr={extension:{type:M.CacheParser,name:"cacheBitmapFont"},test:s=>s instanceof Mo,getCacheableAssets(s,e){const a={};return s.forEach(o=>{a[o]=e,a[`${o}-bitmap`]=e}),a[`${e.fontFamily}-bitmap`]=e,a}},Nr={extension:{type:M.LoadParser,priority:dt.Normal},name:"loadBitmapFont",test(s){return zr.includes(qe.extname(s).toLowerCase())},async testParse(s){return na.test(s)||mo.test(s)},async parse(s,e,a){const o=na.test(s)?na.parse(s):mo.parse(s),{src:n}=e,{pages:i}=o,l=[],d=o.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let v=0;v<i.length;++v){const m=i[v].file;let E=qe.join(qe.dirname(n),m);E=yr(E,n),l.push({src:E,data:d})}const h=await a.load(l),y=l.map(v=>h[v.src]);return new Mo({data:o,textures:y},n)},async load(s,e){return await(await ge.get().fetch(s)).text()},async unload(s,e,a){await Promise.all(s.pages.map(o=>a.unload(o.texture.source._sourceOrigin))),s.destroy()}};class Dr{constructor(e,a=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=a}add(e){e.forEach(a=>{this._assetList.push(a)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],a=Math.min(this._assetList.length,this._maxConcurrent);for(let o=0;o<a;o++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Ur={extension:{type:M.CacheParser,name:"cacheTextureArray"},test:s=>Array.isArray(s)&&s.every(e=>e instanceof Ke),getCacheableAssets:(s,e)=>{const a={};return s.forEach(o=>{e.forEach((n,i)=>{a[o+(i===0?"":i+1)]=n})}),a}};async function Wo(s){if("Image"in globalThis)return new Promise(e=>{const a=new Image;a.onload=()=>{e(!0)},a.onerror=()=>{e(!1)},a.src=s});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(s)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Gr={extension:{type:M.DetectionParser,priority:1},test:async()=>Wo("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async s=>[...s,"avif"],remove:async s=>s.filter(e=>e!=="avif")},xo=["png","jpg","jpeg"],Hr={extension:{type:M.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async s=>[...s,...xo],remove:async s=>s.filter(e=>!xo.includes(e))},Vr="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function va(s){return Vr?!1:document.createElement("video").canPlayType(s)!==""}const Yr={extension:{type:M.DetectionParser,priority:0},test:async()=>va("video/mp4"),add:async s=>[...s,"mp4","m4v"],remove:async s=>s.filter(e=>e!=="mp4"&&e!=="m4v")},Xr={extension:{type:M.DetectionParser,priority:0},test:async()=>va("video/ogg"),add:async s=>[...s,"ogv"],remove:async s=>s.filter(e=>e!=="ogv")},Kr={extension:{type:M.DetectionParser,priority:0},test:async()=>va("video/webm"),add:async s=>[...s,"webm"],remove:async s=>s.filter(e=>e!=="webm")},qr={extension:{type:M.DetectionParser,priority:0},test:async()=>Wo("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async s=>[...s,"webp"],remove:async s=>s.filter(e=>e!=="webp")};class Qr{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,a,o)=>(this._parsersValidated=!1,e[a]=o,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,a){const o={promise:null,parser:null};return o.promise=(async()=>{var l,d;let n=null,i=null;if(a.loadParser&&(i=this._parserHash[a.loadParser],i||Ue(`[Assets] specified load parser "${a.loadParser}" not found while loading ${e}`)),!i){for(let h=0;h<this.parsers.length;h++){const y=this.parsers[h];if(y.load&&((l=y.test)!=null&&l.call(y,e,a,this))){i=y;break}}if(!i)return Ue(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}n=await i.load(e,a,this),o.parser=i;for(let h=0;h<this.parsers.length;h++){const y=this.parsers[h];y.parse&&y.parse&&await((d=y.testParse)==null?void 0:d.call(y,n,a,this))&&(n=await y.parse(n,a,this)||n,o.parser=y)}return n})(),o}async load(e,a){this._parsersValidated||this._validateParsers();let o=0;const n={},i=So(e),l=St(e,y=>({alias:[y],src:y,data:{}})),d=l.length,h=l.map(async y=>{const f=qe.toAbsolute(y.src);if(!n[y.src])try{this.promiseCache[f]||(this.promiseCache[f]=this._getLoadPromiseAndParser(f,y)),n[y.src]=await this.promiseCache[f].promise,a&&a(++o/d)}catch(v){throw delete this.promiseCache[f],delete n[y.src],new Error(`[Loader.load] Failed to load ${f}.
${v}`)}});return await Promise.all(h),i?n[l[0].src]:n}async unload(e){const o=St(e,n=>({alias:[n],src:n})).map(async n=>{var d,h;const i=qe.toAbsolute(n.src),l=this.promiseCache[i];if(l){const y=await l.promise;delete this.promiseCache[i],await((h=(d=l.parser)==null?void 0:d.unload)==null?void 0:h.call(d,y,n,this))}});await Promise.all(o)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,a)=>(a.name?e[a.name]&&Ue(`[Assets] loadParser name conflict "${a.name}"`):Ue("[Assets] loadParser should have a name"),{...e,[a.name]:a}),{})}}function ft(s,e){if(Array.isArray(e)){for(const a of e)if(s.startsWith(`data:${a}`))return!0;return!1}return s.startsWith(`data:${e}`)}const Jr=".json",Zr="application/json",ei={extension:{type:M.LoadParser,priority:dt.Low},name:"loadJson",test(s){return ft(s,Zr)||pt(s,Jr)},async load(s){return await(await ge.get().fetch(s)).json()}},ti=".txt",si="text/plain",ai={name:"loadTxt",extension:{type:M.LoadParser,priority:dt.Low,name:"loadTxt"},test(s){return ft(s,si)||pt(s,ti)},async load(s){return await(await ge.get().fetch(s)).text()}},oi=["normal","bold","100","200","300","400","500","600","700","800","900"],ni=[".ttf",".otf",".woff",".woff2"],ri=["font/ttf","font/otf","font/woff","font/woff2"],ii=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function li(s){const e=qe.extname(s),n=qe.basename(s,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(d=>d.charAt(0).toUpperCase()+d.slice(1));let i=n.length>0;for(const d of n)if(!d.match(ii)){i=!1;break}let l=n.join(" ");return i||(l=`"${l.replace(/[\\"]/g,"\\$&")}"`),l}const ci=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function di(s){return ci.test(s)?s:encodeURI(s)}const pi={extension:{type:M.LoadParser,priority:dt.Low},name:"loadWebFont",test(s){return ft(s,ri)||pt(s,ni)},async load(s,e){var o,n,i;const a=ge.get().getFontFaceSet();if(a){const l=[],d=((o=e.data)==null?void 0:o.family)??li(s),h=((i=(n=e.data)==null?void 0:n.weights)==null?void 0:i.filter(f=>oi.includes(f)))??["normal"],y=e.data??{};for(let f=0;f<h.length;f++){const v=h[f],m=new FontFace(d,`url(${di(s)})`,{...y,weight:v});await m.load(),a.add(m),l.push(m)}return Oe.set(`${d}-and-url`,{url:s,fontFaces:l}),l.length===1?l[0]:l}return Ue("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(s){(Array.isArray(s)?s:[s]).forEach(e=>{Oe.remove(`${e.family}-and-url`),ge.get().getFontFaceSet().delete(e)})}};function ma(s,e=1){var o;const a=(o=Xt.RETINA_PREFIX)==null?void 0:o.exec(s);return a?parseFloat(a[1]):e}function xa(s,e,a){s.label=a,s._sourceOrigin=a;const o=new Ke({source:s,label:a}),n=()=>{delete e.promiseCache[a],Oe.has(a)&&Oe.remove(a)};return o.source.once("destroy",()=>{e.promiseCache[a]&&(Ue("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),n())}),o.once("destroy",()=>{s.destroyed||(Ue("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),n())}),o}const fi=".svg",ui="image/svg+xml",gi={extension:{type:M.LoadParser,priority:dt.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(s){return ft(s,ui)||pt(s,fi)},async load(s,e,a){var o;return((o=e.data)==null?void 0:o.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?vi(s):hi(s,e,a,this.config.crossOrigin)},unload(s){s.destroy(!0)}};async function hi(s,e,a,o){var B,R,z;const i=await(await ge.get().fetch(s)).blob(),l=URL.createObjectURL(i),d=new Image;d.src=l,d.crossOrigin=o,await d.decode(),URL.revokeObjectURL(l);const h=document.createElement("canvas"),y=h.getContext("2d"),f=((B=e.data)==null?void 0:B.resolution)||ma(s),v=((R=e.data)==null?void 0:R.width)??d.width,m=((z=e.data)==null?void 0:z.height)??d.height;h.width=v*f,h.height=m*f,y.drawImage(d,0,0,v*f,m*f);const{parseAsGraphicsContext:E,...T}=e.data??{},K=new Eo({resource:h,alphaMode:"premultiply-alpha-on-upload",resolution:f,...T});return xa(K,a,s)}async function vi(s){const a=await(await ge.get().fetch(s)).text(),o=new _r;return o.svg(a),o}const mi=`(function () {
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
`;let lt=null,ua=class{constructor(){lt||(lt=URL.createObjectURL(new Blob([mi],{type:"application/javascript"}))),this.worker=new Worker(lt)}};ua.revokeObjectURL=function(){lt&&(URL.revokeObjectURL(lt),lt=null)};const xi=`(function () {
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
`;let ct=null;class zo{constructor(){ct||(ct=URL.createObjectURL(new Blob([xi],{type:"application/javascript"}))),this.worker=new Worker(ct)}}zo.revokeObjectURL=function(){ct&&(URL.revokeObjectURL(ct),ct=null)};let yo=0,ra;class yi{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:a}=new ua;a.addEventListener("message",o=>{a.terminate(),ua.revokeObjectURL(),e(o.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,a){var o;return this._run("loadImageBitmap",[e,(o=a==null?void 0:a.data)==null?void 0:o.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){ra===void 0&&(ra=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<ra&&(this._createdWorkers++,e=new zo().worker,e.addEventListener("message",a=>{this._complete(a.data),this._returnWorker(a.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,a){await this._initWorkers();const o=new Promise((n,i)=>{this._queue.push({id:e,arguments:a,resolve:n,reject:i})});return this._next(),o}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const a=this._queue.pop(),o=a.id;this._resolveHash[yo]={resolve:a.resolve,reject:a.reject},e.postMessage({data:a.arguments,uuid:yo++,id:o})}}const bo=new yi,bi=[".jpeg",".jpg",".png",".webp",".avif"],wi=["image/jpeg","image/png","image/webp","image/avif"];async function _i(s,e){var n;const a=await ge.get().fetch(s);if(!a.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${s}: ${a.status} ${a.statusText}`);const o=await a.blob();return((n=e==null?void 0:e.data)==null?void 0:n.alphaMode)==="premultiplied-alpha"?createImageBitmap(o,{premultiplyAlpha:"none"}):createImageBitmap(o)}const jo={name:"loadTextures",extension:{type:M.LoadParser,priority:dt.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(s){return ft(s,wi)||pt(s,bi)},async load(s,e,a){var i;let o=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await bo.isImageBitmapSupported()?o=await bo.loadImageBitmap(s,e):o=await _i(s,e):o=await new Promise((l,d)=>{o=new Image,o.crossOrigin=this.config.crossOrigin,o.src=s,o.complete?l(o):(o.onload=()=>{l(o)},o.onerror=d)});const n=new Eo({resource:o,alphaMode:"premultiply-alpha-on-upload",resolution:((i=e.data)==null?void 0:i.resolution)||ma(s),...e.data});return xa(n,a,s)},unload(s){s.destroy(!0)}},No=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],ki=No.map(s=>`video/${s.substring(1)}`);function Ai(s,e,a){a===void 0&&!e.startsWith("data:")?s.crossOrigin=Si(e):a!==!1&&(s.crossOrigin=typeof a=="string"?a:"anonymous")}function $i(s){return new Promise((e,a)=>{s.addEventListener("canplaythrough",o),s.addEventListener("error",n),s.load();function o(){i(),e()}function n(l){i(),a(l)}function i(){s.removeEventListener("canplaythrough",o),s.removeEventListener("error",n)}})}function Si(s,e=globalThis.location){if(s.startsWith("data:"))return"";e||(e=globalThis.location);const a=new URL(s,document.baseURI);return a.hostname!==e.hostname||a.port!==e.port||a.protocol!==e.protocol?"anonymous":""}const Ei={name:"loadVideo",extension:{type:M.LoadParser,name:"loadVideo"},test(s){const e=ft(s,ki),a=pt(s,No);return e||a},async load(s,e,a){var h,y;const o={...ta.defaultOptions,resolution:((h=e.data)==null?void 0:h.resolution)||ma(s),alphaMode:((y=e.data)==null?void 0:y.alphaMode)||await br(),...e.data},n=document.createElement("video"),i={preload:o.autoLoad!==!1?"auto":void 0,"webkit-playsinline":o.playsinline!==!1?"":void 0,playsinline:o.playsinline!==!1?"":void 0,muted:o.muted===!0?"":void 0,loop:o.loop===!0?"":void 0,autoplay:o.autoPlay!==!1?"":void 0};Object.keys(i).forEach(f=>{const v=i[f];v!==void 0&&n.setAttribute(f,v)}),o.muted===!0&&(n.muted=!0),Ai(n,s,o.crossorigin);const l=document.createElement("source");let d;if(s.startsWith("data:"))d=s.slice(5,s.indexOf(";"));else if(!s.startsWith("blob:")){const f=s.split("?")[0].slice(s.lastIndexOf(".")+1).toLowerCase();d=ta.MIME_TYPES[f]||`video/${f}`}return l.src=s,d&&(l.type=d),new Promise(f=>{const v=async()=>{const m=new ta({...o,resource:n});n.removeEventListener("canplay",v),e.data.preload&&await $i(n),f(xa(m,a,s))};n.addEventListener("canplay",v),n.appendChild(l)})},unload(s){s.destroy(!0)}},Do={extension:{type:M.ResolveParser,name:"resolveTexture"},test:jo.test,parse:s=>{var e;return{resolution:parseFloat(((e=Xt.RETINA_PREFIX.exec(s))==null?void 0:e[1])??"1"),format:s.split(".").pop(),src:s}}},Li={extension:{type:M.ResolveParser,priority:-2,name:"resolveJson"},test:s=>Xt.RETINA_PREFIX.test(s)&&s.endsWith(".json"),parse:Do.parse};class Ti{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Xt,this.loader=new Qr,this.cache=Oe,this._backgroundLoader=new Dr(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var i,l;if(this._initialized){Ue("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let d=e.manifest;typeof d=="string"&&(d=await this.load(d)),this.resolver.addManifest(d)}const a=((i=e.texturePreference)==null?void 0:i.resolution)??1,o=typeof a=="number"?[a]:a,n=await this._detectFormats({preferredFormats:(l=e.texturePreference)==null?void 0:l.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:n,resolution:o}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,a){this._initialized||await this.init();const o=So(e),n=St(e).map(d=>{if(typeof d!="string"){const h=this.resolver.getAlias(d);return h.some(y=>!this.resolver.hasKey(y))&&this.add(d),Array.isArray(h)?h[0]:h}return this.resolver.hasKey(d)||this.add({alias:d,src:d}),d}),i=this.resolver.resolve(n),l=await this._mapLoadToResolve(i,a);return o?l[n[0]]:l}addBundle(e,a){this.resolver.addBundle(e,a)}async loadBundle(e,a){this._initialized||await this.init();let o=!1;typeof e=="string"&&(o=!0,e=[e]);const n=this.resolver.resolveBundle(e),i={},l=Object.keys(n);let d=0,h=0;const y=()=>{a==null||a(++d/h)},f=l.map(v=>{const m=n[v];return h+=Object.keys(m).length,this._mapLoadToResolve(m,y).then(E=>{i[v]=E})});return await Promise.all(f),o?i[e[0]]:i}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(a))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolveBundle(e);Object.values(a).forEach(o=>{this._backgroundLoader.add(Object.values(o))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Oe.get(e);const a={};for(let o=0;o<e.length;o++)a[o]=Oe.get(e[o]);return a}async _mapLoadToResolve(e,a){const o=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const n=await this.loader.load(o,a);this._backgroundLoader.active=!0;const i={};return o.forEach(l=>{const d=n[l.src],h=[l.src];l.alias&&h.push(...l.alias),h.forEach(y=>{i[y]=d}),Oe.set(h,d)}),i}async unload(e){this._initialized||await this.init();const a=St(e).map(n=>typeof n!="string"?n.src:n),o=this.resolver.resolve(a);await this._unloadFromResolved(o)}async unloadBundle(e){this._initialized||await this.init(),e=St(e);const a=this.resolver.resolveBundle(e),o=Object.keys(a).map(n=>this._unloadFromResolved(a[n]));await Promise.all(o)}async _unloadFromResolved(e){const a=Object.values(e);a.forEach(o=>{Oe.remove(o.src)}),await this.loader.unload(a)}async _detectFormats(e){let a=[];e.preferredFormats&&(a=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const o of e.detections)e.skipDetections||await o.test()?a=await o.add(a):e.skipDetections||(a=await o.remove(a));return a=a.filter((o,n)=>a.indexOf(o)===n),a}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(a=>{a.config&&Object.keys(a.config).filter(o=>o in e).forEach(o=>{a.config[o]=e[o]})})}}const it=new Ti;Ge.handleByList(M.LoadParser,it.loader.parsers).handleByList(M.ResolveParser,it.resolver.parsers).handleByList(M.CacheParser,it.cache.parsers).handleByList(M.DetectionParser,it.detections);Ge.add(Ur,Hr,Gr,qr,Yr,Xr,Kr,ei,ai,pi,gi,jo,Ei,Nr,jr,Do,Li);const wo={loader:M.LoadParser,resolver:M.ResolveParser,cache:M.CacheParser,detection:M.DetectionParser};Ge.handle(M.Asset,s=>{const e=s.ref;Object.entries(wo).filter(([a])=>!!e[a]).forEach(([a,o])=>Ge.add(Object.assign(e[a],{extension:e[a].extension??o})))},s=>{const e=s.ref;Object.keys(wo).filter(a=>!!e[a]).forEach(a=>Ge.remove(e[a]))});var Ri=Z('<div class="win-label svelte-1vsph43">BIG WIN!</div> <div class="win-amount-display svelte-1vsph43"> </div>',1),Pi=_o('<use href="#sparkle" class="sparkle svelte-1vsph43"></use>'),Ii=_o('<use href="#vinyl"></use>'),Oi=Z('<div><!> <svg class="vinyl-canvas svelte-1vsph43" viewBox="0 0 1024 800" xmlns="http://www.w3.org/2000/svg"><defs class="svelte-1vsph43"><symbol id="vinyl" viewBox="-200 -200 400 400" class="svelte-1vsph43"><circle cx="0" cy="0" r="180" fill="#0b0b0b" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="150" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.3" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="120" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.25" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="90" fill="none" stroke="#1a1a1a" stroke-width="1.5" opacity="0.2" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="55" fill="var(--label-color)" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="6" fill="#ffffff" class="svelte-1vsph43"></circle><ellipse cx="-15" cy="-15" rx="20" ry="15" fill="#ffffff" opacity="0.3" transform="rotate(-30)" class="svelte-1vsph43"></ellipse></symbol><symbol id="sparkle" viewBox="-12 -12 24 24" class="svelte-1vsph43"><polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ffd966" class="svelte-1vsph43"></polygon><circle cx="0" cy="0" r="2" fill="#ffffff" class="svelte-1vsph43"></circle></symbol><symbol id="confetti" viewBox="-3 -3 6 6" class="svelte-1vsph43"><circle cx="0" cy="0" r="2" fill="var(--confetti-color)" class="svelte-1vsph43"></circle></symbol></defs><!><!></svg></div>');function Ci(s,e){Vt(e,!0);let a=rt(e,"winLevel",3,"small"),o=rt(e,"winAmount",3,0),n=rt(e,"vinylStartScale",3,.01),i=rt(e,"vinylEndScale",3,.15),l=rt(e,"sparkleScale",3,.6),d=P(!1),h=P(!1);const y={small:{vinyls:5,sparkles:8,maxRadius:70},medium:{vinyls:12,sparkles:16,maxRadius:100},jackpot:{vinyls:24,sparkles:30,maxRadius:130}},f=De(()=>y[a()]),v=["#f04e37","#ffd966","#ff8533","#4ecdc4","#ff6b9d"];function m(D){const ie=[],Re=t(f).maxRadius;for(let N=0;N<D;N++){const Y=Math.PI*2*N/D+Math.random()*.4,Ce=Math.random()*Re*.7+Re*.2;ie.push({x:512+Math.cos(Y)*Ce,y:400+Math.sin(Y)*Ce,rotation:Math.random()*30-15,scale:i()*(.8+Math.random()*.4),delay:N*.05,color:v[N%v.length]})}return ie}function E(D){const ie=[];for(let le=0;le<D;le++)ie.push({x:100+Math.random()*824,y:50+Math.random()*700,delay:Math.random()*.8,duration:.6+Math.random()*.4,rotation:Math.random()*360});return ie}const T=De(()=>m(t(f).vinyls)),K=De(()=>E(t(f).sparkles));function B(){g(d,!0),g(h,!0),setTimeout(()=>{g(h,!1),setTimeout(()=>{var D;g(d,!1),(D=e.onComplete)==null||D.call(e)},500)},a()==="jackpot"?4e3:a()==="medium"?3e3:2500)}function R(){g(h,!1),setTimeout(()=>{g(d,!1)},500)}var z=Ut(),ae=He(z);{var oe=D=>{var ie=Oi();let le;var be=w(ie);{var Re=we=>{var ee=Ri(),he=u(He(ee),2),Qe=w(he,!0);_(he),te(Pe=>q(Qe,Pe),[()=>o().toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),H(we,ee)};se(be,we=>{o()>0&&we(Re)})}var N=u(be,2),Y=u(w(N));Ht(Y,17,()=>t(K),Gt,(we,ee)=>{var he=Pi();te(()=>b(he,"style",`
            --sx: ${t(ee).x??""}px;
            --sy: ${t(ee).y??""}px;
            --duration: ${t(ee).duration??""}s;
            --sparkle-delay: ${t(ee).delay??""}s;
            --sparkle-scale: ${l()??""};
          `)),H(we,he)});var Ce=u(Y);Ht(Ce,17,()=>t(T),Gt,(we,ee)=>{var he=Ii();let Qe;te(()=>{Qe=da(he,0,"vinyl-group svelte-1vsph43",null,Qe,{floating:t(h)}),b(he,"style",`
            --tx: ${t(ee).x??""}px;
            --ty: ${t(ee).y??""}px;
            --scale: ${t(ee).scale??""};
            --rotation: ${t(ee).rotation??""}deg;
            --delay: ${t(ee).delay??""}s;
            --label-color: ${t(ee).color??""};
            --start-scale: ${n()??""};
          `)}),H(we,he)}),_(N),_(ie),te(()=>le=da(ie,1,"vinyl-win-container svelte-1vsph43",null,le,{visible:t(h),hiding:!t(h)})),H(D,ie)};se(ae,D=>{t(d)&&D(oe)})}return H(s,z),Yt({show:B,hide:R})}var Bi=Z(`<div style="
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
		"> </div></div>`),Fi=Z(`<div style="
				position: absolute;
				bottom: 40px;
				left: 50%;
				transform: translateX(-50%);
				color: #fff;
				font-family: Arial, sans-serif;
				font-size: 20px;
				text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
			">Please wait...</div>`),Mi=Z('<div role="button" tabindex="0"><span style="position: absolute; left: -9999px;">Click anywhere to continue</span> <!></div>');function Wi(s,e){Vt(e,!0);let a=P(!1),o=P(!1),n=P(!1),i=P(0);ga(()=>{const v=setInterval(()=>{g(i,t(i)+2),t(i)>=100&&(clearInterval(v),g(i,100),setTimeout(()=>{g(o,!0),setTimeout(()=>{g(n,!0)},3e3)},500))},60);return()=>clearInterval(v)});function l(){t(o)&&t(n)&&!t(a)&&(g(a,!0),setTimeout(()=>e.onloaded(),300))}var d=Ut(),h=He(d);{var y=v=>{var m=Bi(),E=w(m);b(E,"src",`${ye??""}/loading_screen/MadCraneLogo.jpg`);var T=u(E,2),K=w(T);_(T);var B=u(T,2),R=w(B);_(B),_(m),te(z=>{b(K,"style",`
				width: ${t(i)??""}%;
				height: 100%;
				background: linear-gradient(90deg, #ff0000, #ff6600);
				transition: width 0.3s ease;
			`),q(R,`Loading... ${z??""}%`)},[()=>Math.round(t(i))]),H(v,m)},f=v=>{var m=Ut(),E=He(m);{var T=K=>{var B=Mi(),R=u(w(B),2);{var z=ae=>{var oe=Fi();H(ae,oe)};se(R,ae=>{t(n)||ae(z)})}_(B),te(()=>b(B,"style",`
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background-image: url('${ye??""}/loading_screen/Splash_screen_RockabillyReels.jpeg');
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			cursor: ${(t(n)?"pointer":"default")??""};
			z-index: 10000;
		`)),F("click",B,l),F("keydown",B,ae=>ae.key==="Enter"&&l()),H(K,B)};se(E,K=>{t(o)&&!t(a)&&K(T)},!0)}H(v,m)};se(h,v=>{t(o)?v(f,!1):v(y)})}H(s,d),Yt()}var zi=Gn('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-o2kwxd"><\/script><!---->',1),ji=Z('<p style="color: red;" class="svelte-o2kwxd"><strong class="svelte-o2kwxd">Error:</strong> </p>'),Ni=Z('<div class="svelte-o2kwxd"> </div>'),Di=Z('<details class="svelte-o2kwxd"><summary class="svelte-o2kwxd"> </summary> <!></details>'),Ui=Z(`<div style="
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
  " class="svelte-o2kwxd"><h3 class="svelte-o2kwxd">🎰 Oma-peli Debug</h3> <p class="svelte-o2kwxd"><strong class="svelte-o2kwxd">Status:</strong> </p> <!> <p class="svelte-o2kwxd"><strong class="svelte-o2kwxd">Base:</strong> </p> <p class="svelte-o2kwxd"><strong class="svelte-o2kwxd">BG URL:</strong> </p> <p class="svelte-o2kwxd"><strong class="svelte-o2kwxd">Sample:</strong> </p> <!></div>`),Gi=Z('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-o2kwxd"> </div>'),Hi=Z('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-o2kwxd"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-o2kwxd"> </span></div>'),Vi=Z(`<div style="
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
      " class="svelte-o2kwxd">Jatka pelaamista</button></div>`),Yi=Z(`<div class="svelte-o2kwxd"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-o2kwxd">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-o2kwxd">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-o2kwxd"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-o2kwxd"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-o2kwxd"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-o2kwxd">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-o2kwxd"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-o2kwxd">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-o2kwxd"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-o2kwxd">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-o2kwxd"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-o2kwxd">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-o2kwxd">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-o2kwxd"> <span style="color: #ffd700;" class="svelte-o2kwxd">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-o2kwxd">Sulje</button></div>`),Xi=Z(`<div style="
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
        " class="svelte-o2kwxd">JATKA PERUSPELIIN</button></div></div>`),Ki=Z('<div class="svelte-o2kwxd"><div class="svelte-o2kwxd">🔄 Select Rounds</div> <button class="svelte-o2kwxd">10 Rounds</button> <button class="svelte-o2kwxd">25 Rounds</button> <button class="svelte-o2kwxd">50 Rounds</button> <button class="svelte-o2kwxd">100 Rounds</button> <button class="svelte-o2kwxd">200 Rounds</button> <button class="svelte-o2kwxd">500 Rounds</button> <button class="svelte-o2kwxd">1,000 Rounds</button> <button class="svelte-o2kwxd">5,000 Rounds</button> <button class="svelte-o2kwxd">Cancel</button></div>'),qi=Z(`<!>  <!>   <!>   <!>   <!>  <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
" class="svelte-o2kwxd"><div class="svelte-o2kwxd"><div class="svelte-o2kwxd"><button class="svelte-o2kwxd">💰 PAYTABLE</button>  <div class="control-panel-mobile svelte-o2kwxd"><!>  <img alt="Left End" class="svelte-o2kwxd"> <div class="svelte-o2kwxd"><div style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;" class="svelte-o2kwxd"><div style="display: flex; flex-direction: column; align-items: center;" class="svelte-o2kwxd"><div class="svelte-o2kwxd">BET</div> <div class="svelte-o2kwxd"><button title="Decrease Bet" class="svelte-o2kwxd"></button> <div class="svelte-o2kwxd"> </div> <button title="Increase Bet" class="svelte-o2kwxd"></button></div></div> <img alt="Divider" class="svelte-o2kwxd"> <div style="display: flex; flex-direction: column; align-items: center;" class="svelte-o2kwxd"><div class="svelte-o2kwxd">BALANCE</div> <div class="svelte-o2kwxd"><div class="svelte-o2kwxd"> </div></div></div> <img alt="Divider" class="svelte-o2kwxd"></div> <div class="svelte-o2kwxd"></div> <div style="position: absolute; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; z-index: 10;" class="svelte-o2kwxd"><div><button class="svelte-o2kwxd"></button></div></div> <div style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;" class="svelte-o2kwxd"><div class="svelte-o2kwxd"><button class="svelte-o2kwxd"></button> <img alt="Status bar" class="svelte-o2kwxd"></div> <img alt="Divider" class="svelte-o2kwxd"> <div class="svelte-o2kwxd"><button class="svelte-o2kwxd"></button> <img alt="Speed bar" class="svelte-o2kwxd"></div> <img alt="Divider" class="svelte-o2kwxd"> <div style="display: flex; flex-direction: column; align-items: center;" class="svelte-o2kwxd"><div class="svelte-o2kwxd">WIN</div> <div class="svelte-o2kwxd"><div class="svelte-o2kwxd"> </div></div></div> <img alt="Divider" class="svelte-o2kwxd"> <div style="display: flex; align-items: center; justify-content: center;" class="svelte-o2kwxd"><button title="Menu" class="svelte-o2kwxd"></button></div></div></div> <img alt="Right End" class="svelte-o2kwxd"></div></div>  <button class="svelte-o2kwxd"></button> <!>   <div class="debug-panel svelte-o2kwxd"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-o2kwxd">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-o2kwxd"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Rounds:</span> <span style="color: #fff;" class="svelte-o2kwxd"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Wagered:</span> <span style="color: #ff6666;" class="svelte-o2kwxd"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Won:</span> <span style="color: #66ff66;" class="svelte-o2kwxd"> </span></div> <div style="
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
  " class="svelte-o2kwxd"><button class="svelte-o2kwxd"> </button> <button class="svelte-o2kwxd">Clear Win Log</button> <button class="svelte-o2kwxd">🎰 Test Free Spins</button></div></div> <div class="svelte-o2kwxd"><button class="svelte-o2kwxd"></button> <button class="svelte-o2kwxd"></button></div></div></div>`,1);function Qi(s,e){Vt(e,!0);const a="1.4.1",o=13,n=1445,i=1e3,l=1.75,d=-30,h=-10,y=160,f=0,v=750,m=80,E=250,T=0,K=50,B=.5,R=40,z=-10,oe=Math.round(100*l),D=Math.round(oe*(700/760)),le=D+10,be=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],Re=typeof window<"u"&&window.location.hostname.includes("github.io"),N=Re?"/web-sdk/oma-peli/symbols":`${ye}/symbols`,Y=Re?"/web-sdk/oma-peli/controls":`${ye}/controls`,Ce={a:`${N}/Blue_hotrod.jpg`,b:`${N}/Blue_jacket.jpg`,c:`${N}/Blue_rollers.jpg`,d:`${N}/Blue_speakers.jpg`,e:`${N}/Premium_blonde.jpg`,f:`${N}/Premium_brunette.jpg`,g:`${N}/Premium_rocker.jpg`,h:`${N}/New_Wild.jpg`,i:`${N}/Red_burger.jpg`,j:`${N}/Red_fries.jpg`,k:`${N}/Red_milkshake.jpg`,l:`${N}/Scatter.jpg`,emptyslot:`${N}/Emptyslot.jpg`},we=`${N}/bg_base.jpg`,ee=`${N}/ReelFrames.png`,he=`${N}/RockABillyReels_logo.png`,Qe={spin:`${ye}/sounds/spin.mp3`,stop:`${ye}/sounds/stop.mp3`,win:`${ye}/sounds/win.mp3`};let Pe=P(!0),Kt={},W=null,ve=null,qt=null,Qt=null,Le=P(!0),Uo=P(!1),Jt=P(945),Zt=null;const Go={fast:3,medium:7,slow:18};let me=P("medium"),Be=P(Math.floor(Math.random()*20)+1);const ut={background:()=>`${ye}/music/rockabilly reels loop ${t(Be)}.mp3`,freeSpins:`${ye}/music/rockabilly-loop_long.mp3`,drumHit:`${ye}/music/drum-hit.mp3`,winTheme:`${ye}/music/win-stinger.mp3`};function ya(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(ya,500);return}const c=window.Howl;try{W=new c({src:[ut.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+t(Be)+")"),g(Uo,!0)},onloaderror:(p,A)=>{console.warn("⚠️ Background music not found:",A)}}),ve=new c({src:[ut.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(p,A)=>console.warn("⚠️ Free spins music not found:",A)}),qt=new c({src:[ut.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Qt=new c({src:[ut.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(p){console.error("Failed to initialize music system:",p)}}function ba(){const c=t(Q)?ve:W;c&&t(Le)&&!c.playing()&&(c.play(),console.log("🎵 "+(t(Q)?"Free spins":"Background")+" music started"))}function Ho(){if(t(Q))return;const c=Math.floor(Math.random()*20)+1;c===t(Be)?g(Be,c%20+1):g(Be,c),console.log("🎵 Changing to loop #"+t(Be)),W&&(W.playing()?(W.fade(W.volume(),0,200),setTimeout(()=>{W.stop(),W.unload()},200)):W.unload());const p=window.Howl;p&&(W=new p({src:[ut.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ New background music loop #"+t(Be)+" loaded"),t(Le)&&!t(Q)&&setTimeout(()=>{W&&!W.playing()&&W.play()},300)},onloaderror:(A,S)=>{console.warn("⚠️ Failed to load loop #"+t(Be)+":",S)}}))}function Vo(){W&&W.playing()&&(W.fade(W.volume(),0,500),setTimeout(()=>W.stop(),500)),ve&&ve.playing()&&(ve.fade(ve.volume(),0,500),setTimeout(()=>ve.stop(),500))}function es(){W&&W.playing()&&(W.fade(W.volume(),0,500),setTimeout(()=>W.stop(),500)),ve&&ve.playing()&&(ve.fade(ve.volume(),0,500),setTimeout(()=>ve.stop(),500)),setTimeout(()=>{t(Le)&&ba()},600)}function Yo(){if(W&&W.playing()){const c=W.volume();W.fade(c,0,1e3),setTimeout(()=>{W.stop(),W.volume(.3)},1e3)}}let ts=P(!1);function Xo(){g(ts,!1),setTimeout(()=>{g(ts,!0)},10)}let Je=null;const ss={vinylStartScale:.01,vinylEndScale:.15,sparkleScale:.6};function Ko(){g(Le,!t(Le)),t(Le)?ba():Vo()}function qo(){g(Pe,!t(Pe))}function Qo(){qt&&t(Le)&&t(Pe)&&qt.play()}function Jo(){Qt&&t(Le)&&t(Pe)&&Qt.play()}let Et=null,as=null,gt=null,ht=null,vt=P("Initializing..."),Ze=P(""),_e=[],wa=P(!1),Fe=P(1e3);const _a=[.4,.8,1,1.6,2,3,5,8,10,15,20,25,30,40,50,60,80,100];let mt=P(5),ke=De(()=>_a[t(mt)]),Ve=P(0),ce=P(!1),xt=P(0),de=P(!1),os=P(!1),Zo=P(0),Ye=!1,Ie=null,ns=!1,et=P(0),tt=P(0),yt=P(0),rs=P(0),is=De(()=>t(tt)>0?(t(yt)/t(tt)*100).toFixed(2):"0.00"),ls=De(()=>t(et)>0?(t(rs)/t(et)*100).toFixed(2):"0.00"),Q=P(!1),Me=P(0),Xe=P(0),Lt=P(0),cs=P(0),Tt=P(0),ds=P(0),en=De(()=>t(Tt)>0?(t(ds)/t(Tt)*100).toFixed(2):"0.00"),xe=P(ue([]));function tn(c,p,A){const S=new Date().toLocaleString("fi-FI");let x=`
${"=".repeat(60)}
`;x+=`ROUND #${c} - ${S}
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
`,t(xe).push(x)}function sn(){const c=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${t(xe).join(`
`)}`,p=new Blob([c],{type:"text/plain"}),A=URL.createObjectURL(p),S=document.createElement("a");S.href=A,S.download=`win-log-${Date.now()}.txt`,S.click(),URL.revokeObjectURL(A)}function an(){g(xe,ue([]))}function on(){t(Q)||(g(Q,!0),g(Me,10),g(Xe,0),Se(Lt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),es())}const nn={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},rn={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function ka(c){if(c===6)return Math.random()<.55?"h":"emptyslot";const p=t(Q)?rn:nn,A=Math.random();let S=0;const x=be.filter(k=>k!=="h"),$=x.reduce((k,C)=>k+p[C],0);for(const k of x)if(S+=p[k]/$,A<S)return k;return"f"}function Aa(){const c=[];for(let p=0;p<o;p++){const A=ka(p);c.push(A),Se(Tt),A==="emptyslot"&&Se(ds)}return c}function $a(c){return c<3?{col:0,row:c}:c<6?{col:1,row:c-3}:c===6?{col:2,row:0}:c<10?{col:3,row:c-7}:{col:4,row:c-10}}function bt(c,p){return c===0?p:c===1?3+p:c===2?6:c===3?7+p:c===4?10+p:-1}function ln(){if(t(Q)){const c=Math.random();return c<.7?3:c<.92?5:10}else{const c=Math.random();return c<.7?1:c<.92?2:3}}const cn={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function dn(){var pe;const c=[],p=[];for(let L=0;L<o;L++)wt[L]==="l"&&p.push(L);if(p.length>=5){const L=p.length;g(Me,t(Me)+L),t(Q)?console.log(`🎰 FREE SPINS RETRIGGERED! +${L} FREE SPINS! Total: ${t(Me)}`):(g(Q,!0),g(Xe,0),Se(Lt),console.log(`🎰 FREE SPINS TRIGGERED! ${p.length} scatters = ${L} FREE SPINS!`),es()),c.push({symbol:"l",count:p.length,payout:0,positions:p,multiplier:1})}const A=[];for(let L=0;L<3;L++)for(let O=0;O<3;O++)for(let j=0;j<1;j++)for(let U=0;U<3;U++)for(let V=0;V<3;V++){const G=[bt(0,L),bt(1,O),bt(2,j),bt(3,U),bt(4,V)];A.push(G)}console.log(`Generated ${A.length} possible paths (should be 81)`);const S=[];for(const L of A){const O=L.map(G=>wt[G]);if(O[0]==="emptyslot"||O[0]==="l")continue;let j=null;for(let G=0;G<O.length;G++)if(O[G]!=="h"&&O[G]!=="emptyslot"&&O[G]!=="l"){j=O[G];break}if(!j)continue;let U=0;const V=new Set;for(let G=0;G<L.length;G++){const je=L[G],{col:nt}=$a(je),fe=O[G];(fe===j||fe==="h")&&V.add(nt)}for(let G=0;G<5&&V.has(G);G++)U++;if(U>=3){const je=L[0]%3;S.push({symbol:j,length:U,path:L.slice(0,U),startRow:je})}}const x=[],$=new Map;for(const L of S){const O=`${L.symbol}-${L.path.join(",")}`;$.has(O)||$.set(O,[]),$.get(O).push(L)}for(const[L,O]of $.entries()){const j=Math.max(...O.map(V=>V.length)),U=O.find(V=>V.length===j);U&&x.push(U)}const k=[],C=new Map;for(const L of x)C.has(L.symbol)||C.set(L.symbol,[]),C.get(L.symbol).push(L);const I=[];for(const[L,O]of C.entries()){const j=Math.max(...O.map(V=>V.length)),U=O.filter(V=>V.length===j);I.push(...U)}const X=new Map;for(const L of I){const O=`${L.symbol}-${L.length}`;X.has(O)||X.set(O,[]),X.get(O).push(L)}const J=I.length>0?ln():1;for(const[L,O]of X.entries()){const j=O[0],U=(pe=cn[j.symbol])==null?void 0:pe[j.length];if(U!==void 0&&U>0){const V=new Map;for(const fe of O)for(let re=0;re<fe.length;re++)V.has(re)||V.set(re,new Set),V.get(re).add(fe.path[re]);let G=1;for(let fe=0;fe<j.length;fe++){const re=V.get(fe);G*=re?re.size:1}const je=U*t(ke)*G*J;console.log(`  ${j.length}x${j.symbol}: ${G} ways × ${U}x × ${t(ke)} bet × ${J} mult = ${je}`);const nt=new Set;for(const fe of O)fe.path.forEach(re=>nt.add(re));k.push({symbol:j.symbol,count:j.length,payout:je,positions:Array.from(nt),multiplier:J})}}return c.push(...k),c}let Ae=P(0),st=P(ue([])),We=P(!1),at=P(!1),ps=P(!1),fs=P(0);const Sa={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function us(c){if(!t(Pe)||!Kt[c])return;const p=Kt[c];p.currentTime=0,p.play().catch(A=>{console.warn("Äänen toisto epäonnistui:",c,A)})}function pn(c){_t.forEach(p=>ne.stage.removeChild(p)),_t=[],c.forEach(p=>{p.positions.forEach(A=>{const S=Te[A],x=new po().rect(0,0,oe,D).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});x.x=S.container.x,x.y=S.container.y,ne.stage.addChild(x),_t.push(x);let $=0,k=1;const C=.05;ne.ticker.add(()=>{$+=k*C,$>=.4&&(k=-1),$<=0&&(k=1),x.alpha=.5+$})})})}function gs(){_t.forEach(c=>ne.stage.removeChild(c)),_t=[]}let wt=Aa(),hs,ne,Te=[],_t=[];class fn{constructor(p,A){$e(this,"index");$e(this,"container");$e(this,"offset",0);$e(this,"speed",0);$e(this,"targetSpeed",30);$e(this,"state","idle");$e(this,"stopDelay",0);$e(this,"bounceOffset",0);$e(this,"bounceSpeed",0);$e(this,"bounceFrames",0);this.index=p,this.container=A}start(p){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=p}startSynchronized(p){const A=Go[t(me)],S=60+p*A;this.start(S)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const p=t(me)==="slow"?.88:t(me)==="medium"?.92:.95;this.speed*=p,this.speed<2.5&&(this.state="bouncing",this.speed=0,this.offset=0,this.bounceOffset=0,this.bounceSpeed=4,us("stop"),Qo())}this.state==="bouncing"&&(this.bounceSpeed*=.8,this.bounceOffset+=this.bounceSpeed,Math.abs(this.bounceSpeed)<.2&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=le&&(this.offset=0,wt[this.index]=ka(this.index)))}}draw(){const p=this.container;p.removeChildren();const A=wt[this.index];if(!A||!Et||!Et[A])return;const S=this.offset+this.bounceOffset,x=($,k)=>{const C=Et[$];if(!C)return;const I=new sa(C);I.width=oe,I.height=D,I.x=0,I.y=k,p.addChild(I)};x(A,S-le),x(A,S),x(A,S+le)}}let r=P(1);ga(async()=>{ne=new Fo,await ne.init({width:n,height:i,backgroundAlpha:0}),hs.appendChild(ne.canvas);const c=()=>{const x=window.innerWidth,$=window.innerHeight,k=x/n,C=$/i,I=Math.min(k,C,1);g(r,ue(I)),ne.stage.scale.set(I),ne.renderer.resize(n,i)};c(),window.addEventListener("resize",c);const p=x=>{(x.code==="Space"||x.key===" ")&&(x.preventDefault(),Te.some(k=>k.state==="spinning"||k.state==="slowing")?(Te.forEach(k=>{k.state==="spinning"?(k.stopDelay=0,k.state="slowing",k.speed=k.targetSpeed*.5):k.state==="slowing"&&(k.speed=k.speed*.3)}),console.log("⚡ Skip spin - kiekot pysähtyvät nopeasti")):vs())};window.addEventListener("keydown",p);const A={};try{g(vt,"Loading background and UI images..."),_e.push(`Loading background: ${we}`),_e.push(`Loading reel frames: ${ee}`),_e.push(`Loading logo: ${he}`),await it.load([{alias:"background",src:we},{alias:"reelframes",src:ee},{alias:"logo",src:he}]),as=Ke.from("background"),gt=Ke.from("reelframes"),ht=Ke.from("logo"),console.log("✅ Background texture created:",as.width,"x",as.height),console.log("✅ Reel frames texture created:",gt.width,"x",gt.height),console.log("✅ Logo texture created:",ht.width,"x",ht.height),_e.push("✅ All UI images loaded"),g(vt,"Loading symbols...");const x=[];for(const $ of be)x.push({alias:$,src:Ce[$]});await it.load(x);for(const $ of be){const k=Ce[$];_e.push(`Loading symbol ${$}: ${k}`);try{const C=Ke.from($);A[$]=C,console.log(`✅ Symbol ${$} loaded:`,C.width,"x",C.height),_e.push(`✅ Symbol ${$} loaded`)}catch(C){const I=`❌ Failed to load symbol ${$} from ${k}: ${C}`;throw _e.push(I),console.error(I),new Error(I)}}Et=A,g(vt,"Assets loaded successfully!")}catch(x){g(Ze,`Asset loading failed: ${x}`),_e.push(t(Ze)),console.error(t(Ze));return}console.log("Ladataan ääniefektit...");for(const[x,$]of Object.entries(Qe)){const k=new Audio;k.src=$,k.preload="auto",k.volume=.7,k.load(),k.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${$} (käytetään hiljaista placeholderia)`)}),Kt[x]=k}[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(x=>({x:x.x+d,y:x.y+h})),Te=[];for(let x=0;x<o;x++){const $=$a(x),k=$.col,C=$.row,I=300+k*(oe+20),X=250+C*(D+15),J=x===6?I+f:I,pe=x===6?X+y:X,L=new ha;L.x=J+d,L.y=pe+h;const O=new po().rect(0,0,oe,D).fill(16777215);O.x=L.x,O.y=L.y,L.mask=O,ne.stage.addChild(O),ne.stage.addChild(L),Te.push(new fn(x,L))}if(gt){const x=new sa(gt);x.scale.set(1),x.x=250,x.y=200,ne.stage.addChild(x),Zt=x,g(Jt,ue(x.width)),console.log("Reel frames lisätty:",x.width.toFixed(0),"x",x.height.toFixed(0)),console.log("Control panel leveys päivitetty:",t(Jt).toFixed(0))}if(ht){const x=new sa(ht);x.scale.set(B),x.x=(ne.renderer.width-x.width)/2+R,x.y=z,ne.stage.addChild(x),console.log("Logo lisätty päällimmäiseen layeriin:",x.width.toFixed(0),"x",x.height.toFixed(0))}ya(),ne.ticker.add(un)});function un(){for(const c of Te)c.update(),c.draw();if(!t(We)&&!ns&&Te.every(c=>c.state==="stopped")){ns=!0,Yo();const c=dn();console.log(`Checking wins, found ${c.length} wins`),c.length>0?(g(st,ue(c)),g(Ae,ue(c.reduce((p,A)=>p+A.payout,0))),tn(t(et),c,t(Ae)),hn(t(Ae)),g(We,!0),g(Zo,ue(Date.now())),console.log(`🎉 VOITTO! ${t(Ae)} pistettä! Uusi saldo: ${t(Fe)}`),console.log(`isShowingWin set to: ${t(We)}, totalWin: ${t(Ae)}`),c.forEach(p=>{const A=p.multiplier?` (${p.multiplier}x multiplier)`:"";console.log(`${p.count}x ${p.symbol} = ${p.payout} pistettä${A}`)}),pn(c),us("win"),t(ce)&&!Ye&&(Ye=!0,Ie=window.setTimeout(()=>{t(We)&&t(ce)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),g(We,!1),gs()),Ie=window.setTimeout(()=>{Ye=!1,ms()},200)},1500))):(console.log("No wins found this spin"),t(ce)&&!Ye&&(Ye=!0,Ie=window.setTimeout(()=>{Ye=!1,ms()},500))),t(Q)&&t(Me)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${t(Xe)}`),setTimeout(()=>{g(fs,ue(t(Xe))),g(ps,!0)},2e3))}}function vs(){if(t(Q)||Ho(),Xo(),t(Q)&&t(Me)>0)Se(Me,-1),Se(cs),console.log(`🎰 FREE SPIN! Remaining: ${t(Me)}`);else if(!t(Q)){if(t(Fe)<t(ke)){alert(`Not enough credits! Balance: ${t(Fe)}, Bet: ${t(ke)}`),Rt();return}g(Fe,t(Fe)-t(ke)),Se(et),g(tt,t(tt)+t(ke))}Ie!==null&&(clearTimeout(Ie),Ie=null),g(st,ue([])),g(Ae,0),g(Ve,0),console.log("🔄 lastWin nollattu: "+t(Ve)),g(We,!1),ns=!1,gs(),wt=Aa(),Te.forEach((c,p)=>{c.startSynchronized(p)}),us("spin")}function gn(c,p,A=1400){if(typeof window>"u")return;const S=document.getElementById("winLabel");if(!S)return;S.classList.add("rolling");const x=performance.now(),$=p-c,k=I=>1-Math.pow(1-I,3);function C(I){const X=Math.min(1,(I-x)/A),J=c+$*k(X);g(Ve,J),X<1?requestAnimationFrame(C):(g(Ve,ue(p)),S.classList.remove("rolling"),S.classList.add("winHit"),setTimeout(()=>S.classList.remove("winHit"),450))}requestAnimationFrame(C)}function hn(c){g(Fe,t(Fe)+c),g(yt,t(yt)+c);const p=t(Ve);g(Ve,ue(c));const A=c>t(ke)*50?2e3:1400;if(gn(p,c,A),t(Q)&&g(Xe,t(Xe)+c),c>0){Se(rs);const S=c/t(ke);S>=10&&Jo(),Je&&(S>=50?Je.show():S>=20?setTimeout(()=>Je.show(),200):S>=10&&setTimeout(()=>Je.show(),400))}}function vn(){t(mt)<_a.length-1&&Se(mt)}function mn(){t(mt)>0&&Se(mt,-1)}function ze(c){g(ce,!0),g(xt,ue(c)),g(de,!1),ms()}function Rt(){g(ce,!1),g(xt,0),Ye=!1,Ie!==null&&(clearTimeout(Ie),Ie=null)}function ms(){if(!t(ce)||t(xt)<=0){Rt();return}console.log(`Autoplay: Starting spin ${t(xt)} rounds left`),vs(),Se(xt,-1)}function xn(){confirm("Reset all statistics?")&&(g(et,0),g(tt,0),g(yt,0),g(rs,0),g(Lt,0),g(cs,0),g(Tt,0),g(ds,0))}var Ea=qi();Un(c=>{var p=zi();u(He(p)),H(c,p)});var La=He(Ea);{var yn=c=>{Wi(c,{onloaded:()=>g(wa,!0)})};se(La,c=>{t(wa)||c(yn)})}var Ta=u(La,2);{var bn=c=>{var p=Ui(),A=u(w(p),2),S=u(w(A));_(A);var x=u(A,2);{var $=j=>{var U=ji(),V=u(w(U));_(U),te(()=>q(V,` ${t(Ze)??""}`)),H(j,U)};se(x,j=>{t(Ze)&&j($)})}var k=u(x,2),C=u(w(k));C.nodeValue=` ${ye??""}`,_(k);var I=u(k,2),X=u(w(I));X.nodeValue=` ${we??""}`,_(I);var J=u(I,2),pe=u(w(J));_(J);var L=u(J,2);{var O=j=>{var U=Di(),V=w(U),G=w(V);_(V);var je=u(V,2);Ht(je,17,()=>_e,Gt,(nt,fe)=>{var re=Ni(),Wn=w(re,!0);_(re),te(()=>q(Wn,t(fe))),H(nt,re)}),_(U),te(()=>q(G,`Log (${_e.length??""})`)),H(j,U)};se(L,j=>{_e.length>0&&j(O)})}_(p),te(()=>{q(S,` ${t(vt)??""}`),q(pe,` ${Ce.a??""}`)}),H(c,p)};se(Ta,c=>{(t(vt)!=="Assets loaded successfully!"||t(Ze))&&c(bn)})}var Ra=u(Ta,2);{var wn=c=>{var p=Vi(),A=u(w(p),2),S=w(A);_(A);var x=u(A,2);Ht(x,17,()=>t(st),Gt,(I,X)=>{var J=Gi(),pe=w(J);_(J),te(L=>q(pe,`${t(X).count??""} × ${Sa[t(X).symbol]??""} = ${L??""} pistettä`),[()=>t(X).payout.toFixed(2)]),H(I,J)});var $=u(x,2);{var k=I=>{var X=Hi(),J=w(X),pe=w(J);_(J),_(X),te(()=>q(pe,`✨ ${t(st)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),H(I,X)};se($,I=>{t(st).length>0&&t(st)[0].multiplier>1&&I(k)})}var C=u($,2);_(p),te(I=>q(S,`${I??""} pistettä`),[()=>t(Ae).toFixed(2)]),F("click",C,()=>{g(We,!1),gs(),console.log("Win popup closed, ready for next spin")}),H(c,p)};se(Ra,c=>{t(Ae)>0&&t(We)&&c(wn)})}var Pa=u(Ra,2);{var _n=c=>{var p=Yi(),A=u(w(p),8);_(p),te(S=>b(p,"style",`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.95);
    color: white;
    padding: ${30*t(r)}px;
    border-radius: ${15*t(r)}px;
    font-family: Arial, sans-serif;
    z-index: 3000;
    border: ${3*t(r)}px solid #ffd700;
    max-width: ${600*t(r)}px;
    max-height: ${S??""}px;
    overflow-y: auto;
    font-size: ${t(r)??""}em;
  `),[()=>Math.min(i*t(r)*.8,80*window.innerHeight/100)]),F("click",A,()=>{g(at,!1)}),H(c,p)};se(Pa,c=>{t(at)&&c(_n)})}var Ia=u(Pa,2);{var kn=c=>{var p=Xi(),A=w(p),S=u(w(A),4),x=w(S,!0);_(S);var $=u(S,2);_(A),_(p),te(k=>q(x,k),[()=>t(fs).toFixed(2)]),F("click",$,()=>{g(ps,!1),g(Q,!1),g(Xe,0),g(fs,0),es()}),F("mouseenter",$,k=>{k.currentTarget.style.transform="scale(1.05)",k.currentTarget.style.boxShadow="0 6px 20px rgba(255, 215, 0, 0.6)"}),F("mouseleave",$,k=>{k.currentTarget.style.transform="scale(1)",k.currentTarget.style.boxShadow="0 4px 15px rgba(255, 215, 0, 0.4)"}),H(c,p)};se(Ia,c=>{t(ps)&&c(kn)})}var Oa=u(Ia,2),xs=w(Oa),kt=w(xs);b(kt,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${n}px;
        height: ${i}px;
      `);var ys=w(kt),bs=u(ys,2),Ca=w(bs);{var An=c=>{var p=Ki(),A=w(p),S=u(A,2),x=u(S,2),$=u(x,2),k=u($,2),C=u(k,2),I=u(C,2),X=u(I,2),J=u(X,2),pe=u(J,2);_(p),te(()=>{b(p,"style",`
    position: absolute;
    bottom: ${(m+20)*t(r)}px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.95);
    padding: ${20*t(r)}px;
    border-radius: ${15*t(r)}px;
    border: ${3*t(r)}px solid #0088ff;
    box-shadow: 0 ${8*t(r)}px ${30*t(r)}px rgba(0, 136, 255, 0.6);
    z-index: 2000;
    min-width: ${250*t(r)}px;
  `),b(A,"style",`color: white; font-weight: bold; margin-bottom: ${15*t(r)}px; text-align: center; font-size: ${18*t(r)}px;`),b(S,"style",`
        width: 100%;
        padding: ${12*t(r)}px;
        margin-bottom: ${8*t(r)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*t(r)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(r)}px;
        box-shadow: 0 ${4*t(r)}px ${10*t(r)}px rgba(68, 170, 68, 0.4);
      `),b(x,"style",`
        width: 100%;
        padding: ${12*t(r)}px;
        margin-bottom: ${8*t(r)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*t(r)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(r)}px;
        box-shadow: 0 ${4*t(r)}px ${10*t(r)}px rgba(68, 170, 68, 0.4);
      `),b($,"style",`
        width: 100%;
        padding: ${12*t(r)}px;
        margin-bottom: ${8*t(r)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*t(r)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(r)}px;
        box-shadow: 0 ${4*t(r)}px ${10*t(r)}px rgba(68, 170, 68, 0.4);
      `),b(k,"style",`
        width: 100%;
        padding: ${12*t(r)}px;
        margin-bottom: ${8*t(r)}px;
        background: linear-gradient(135deg, #4488ff 0%, #66aaff 100%);
        color: white;
        border: none;
        border-radius: ${8*t(r)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(r)}px;
        box-shadow: 0 ${4*t(r)}px ${10*t(r)}px rgba(68, 136, 255, 0.4);
      `),b(C,"style",`
        width: 100%;
        padding: ${12*t(r)}px;
        margin-bottom: ${8*t(r)}px;
        background: linear-gradient(135deg, #4488ff 0%, #66aaff 100%);
        color: white;
        border: none;
        border-radius: ${8*t(r)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(r)}px;
        box-shadow: 0 ${4*t(r)}px ${10*t(r)}px rgba(68, 136, 255, 0.4);
      `),b(I,"style",`
        width: 100%;
        padding: ${12*t(r)}px;
        margin-bottom: ${8*t(r)}px;
        background: linear-gradient(135deg, #ff8844 0%, #ffaa66 100%);
        color: white;
        border: none;
        border-radius: ${8*t(r)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(r)}px;
        box-shadow: 0 ${4*t(r)}px ${10*t(r)}px rgba(255, 136, 68, 0.4);
      `),b(X,"style",`
        width: 100%;
        padding: ${12*t(r)}px;
        margin-bottom: ${8*t(r)}px;
        background: linear-gradient(135deg, #ff8844 0%, #ffaa66 100%);
        color: white;
        border: none;
        border-radius: ${8*t(r)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(r)}px;
        box-shadow: 0 ${4*t(r)}px ${10*t(r)}px rgba(255, 136, 68, 0.4);
      `),b(J,"style",`
        width: 100%;
        padding: ${12*t(r)}px;
        margin-bottom: ${15*t(r)}px;
        background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%);
        color: white;
        border: none;
        border-radius: ${8*t(r)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(r)}px;
        box-shadow: 0 ${4*t(r)}px ${10*t(r)}px rgba(255, 68, 68, 0.4);
      `),b(pe,"style",`
        width: 100%;
        padding: ${10*t(r)}px;
        background: rgba(255, 255, 255, 0.1);
        color: #aaa;
        border: ${1*t(r)}px solid #555;
        border-radius: ${8*t(r)}px;
        cursor: pointer;
        font-size: ${14*t(r)}px;
      `)}),F("click",S,()=>{ze(10),g(de,!1)}),F("click",x,()=>{ze(25),g(de,!1)}),F("click",$,()=>{ze(50),g(de,!1)}),F("click",k,()=>{ze(100),g(de,!1)}),F("click",C,()=>{ze(200),g(de,!1)}),F("click",I,()=>{ze(500),g(de,!1)}),F("click",X,()=>{ze(1e3),g(de,!1)}),F("click",J,()=>{ze(5e3),g(de,!1)}),F("click",pe,()=>{g(de,!1)}),H(c,p)};se(Ca,c=>{t(de)&&c(An)})}var ws=u(Ca,2);b(ws,"src",`${Y??""}/Control_leftend.png`);var Pt=u(ws,2),_s=w(Pt),ks=w(_s),Ba=w(ks),As=u(Ba,2),$s=w(As),It=u($s,2),$n=w(It,!0);_(It);var Fa=u(It,2);_(As),_(ks);var Ss=u(ks,2);b(Ss,"src",`${Y??""}/Control_divider.png`);var Es=u(Ss,2),Ma=w(Es),Ls=u(Ma,2),Ts=w(Ls),Sn=w(Ts,!0);_(Ts),_(Ls),_(Es);var Wa=u(Es,2);b(Wa,"src",`${Y??""}/Control_divider.png`),_(_s);var za=u(_s,2),Rs=u(za,2),Ps=w(Rs),Is=w(Ps);_(Ps),_(Rs);var ja=u(Rs,2),Ot=w(ja),Ct=w(Ot),Na=u(Ct,2);_(Ot);var Os=u(Ot,2);b(Os,"src",`${Y??""}/Control_divider.png`);var Bt=u(Os,2),Ft=w(Bt),Da=u(Ft,2);_(Bt);var Cs=u(Bt,2);b(Cs,"src",`${Y??""}/Control_divider.png`);var Bs=u(Cs,2),Ua=w(Bs),Fs=u(Ua,2),Ms=w(Fs),En=w(Ms,!0);_(Ms),_(Fs),_(Bs);var Ws=u(Bs,2);b(Ws,"src",`${Y??""}/Control_divider.png`);var Ga=u(Ws,2),Ha=w(Ga);_(Ga),_(ja),_(Pt);var Va=u(Pt,2);b(Va,"src",`${Y??""}/Control_rightend.png`),_(bs),_(kt),lo(kt,c=>hs=c,()=>hs);var Mt=u(kt,2);Mt.textContent=`🛠️ DEBUG v${a}`;var Ya=u(Mt,2);const Ln=De(()=>t(Ae)/t(ke)>=50?"jackpot":t(Ae)/t(ke)>=20?"medium":"small");lo(Ci(Ya,{get winLevel(){return t(Ln)},get winAmount(){return t(Ae)},get vinylStartScale(){return ss.vinylStartScale},get vinylEndScale(){return ss.vinylEndScale},get sparkleScale(){return ss.sparkleScale}}),c=>Je=c,()=>Je);var Wt=u(Ya,2),Xa=u(w(Wt),2);Xa.textContent=`v${a}`;var zs=u(Xa,2),Ka=u(w(zs),2),Tn=w(Ka,!0);_(Ka),_(zs);var js=u(zs,2),qa=u(w(js),2),Rn=w(qa,!0);_(qa),_(js);var Ns=u(js,2),Qa=u(w(Ns),2),Pn=w(Qa,!0);_(Qa),_(Ns);var Ds=u(Ns,2),Us=u(w(Ds),2),In=w(Us);_(Us),_(Ds);var Gs=u(Ds,2),Hs=u(w(Gs),2),On=w(Hs);_(Hs),_(Gs);var Vs=u(Gs,2),Ja=u(w(Vs),2),Cn=w(Ja,!0);_(Ja),_(Vs);var Ys=u(Vs,2),Za=u(w(Ys),2),Bn=w(Za,!0);_(Za),_(Ys);var Xs=u(Ys,2),eo=u(w(Xs),2),Fn=w(eo);_(eo),_(Xs);var to=u(Xs,2),so=u(to,2),ot=w(so),Mn=w(ot);_(ot);var zt=u(ot,2),Ks=u(zt,2);_(so),_(Wt);var qs=u(Wt,2),jt=w(qs),Qs=u(jt,2);_(qs),_(xs),_(Oa),te((c,p,A,S,x,$,k,C)=>{b(xs,"style",`
    position: relative;
    width: ${n*t(r)}px;
    height: ${i*t(r)}px;
  `),b(ys,"style",`
          position: absolute;
          top: ${130*t(r)}px;
          right: ${20*t(r)}px;
          padding: ${10*t(r)}px ${15*t(r)}px;
          background-color: rgba(255, 215, 0, 0.3);
          border: ${2*t(r)}px solid rgba(255, 215, 0, 0.7);
          border-radius: ${8*t(r)}px;
          cursor: pointer;
          font-weight: bold;
          font-size: ${16*t(r)}px;
          color: white;
          text-shadow: 0 0 ${5*t(r)}px rgba(0,0,0,0.8);
          z-index: 1000;
          min-width: ${180*t(r)}px;
        `),b(bs,"style",`
        position: absolute;
        left: ${((Zt?Zt.x:E)+T)*t(r)}px;
        top: ${(v+K)*t(r)}px;
        width: ${t(Jt)*t(r)}px;
        height: ${m*t(r)}px;
        display: flex;
        align-items: center;
        z-index: 1000;
      `),b(ws,"style",`height: ${m*t(r)}px; flex-shrink: 0;`),b(Pt,"style",`
    flex-grow: 1;
    height: ${m*t(r)}px;
    background-image: url('${Y??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    padding: 0 ${20*t(r)}px;
    position: relative;
    gap: ${20*t(r)}px;
  `),b(Ba,"style",`color: #00ff00; font-size: ${12*t(r)}px; font-weight: bold; line-height: 1; height: ${16*t(r)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(r)}px;`),b(As,"style",`display: flex; gap: ${5*t(r)}px; align-items: center; height: ${44*t(r)}px;`),b($s,"style",`
              width: ${40*t(r)}px;
              height: ${40*t(r)}px;
              background-image: url('${Y??""}/Control_lowerbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            `),b(It,"style",`
            color: #fff;
            font-size: ${18*t(r)}px;
            font-weight: bold;
            min-width: ${80*t(r)}px;
            text-align: center;
            font-family: 'Courier New', monospace;
          `),q($n,c),b(Fa,"style",`
              width: ${40*t(r)}px;
              height: ${40*t(r)}px;
              background-image: url('${Y??""}/Control_upperbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            `),b(Ss,"style",`height: ${m*.8*t(r)}px; flex-shrink: 0;`),b(Ma,"style",`color: #00ff00; font-size: ${12*t(r)}px; font-weight: bold; line-height: 1; height: ${16*t(r)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(r)}px;`),b(Ls,"style",`height: ${44*t(r)}px; display: flex; align-items: center;`),b(Ts,"style",`
            color: #fff;
            font-size: ${20*t(r)}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
          `),q(Sn,p),b(Wa,"style",`height: ${m*.8*t(r)}px; flex-shrink: 0;`),b(za,"style",`flex-shrink: 0; width: ${130*t(r)}px;`),da(Ps,1,`play-button-wrapper ${(t(ts)?"glare-animate":"")??""}`,"svelte-o2kwxd"),b(Is,"style",`
            width: ${110*t(r)}px;
            height: ${110*t(r)}px;
            background-image: url('${Y??""}/${(t(ce)?"Control_playbutton_stop.png":"Control_playbutton.png")??""}');
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
          `),b(Is,"title",t(ce)?"STOP AUTOPLAY":"SPIN"),b(Ot,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*t(r)}px;`),b(Ct,"style",`
            width: ${50*t(r)}px;
            height: ${50*t(r)}px;
            background-image: url('${Y??""}/${(t(ce)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),b(Ct,"title",t(ce)?"Stop Autoplay":"Autoplay"),b(Na,"src",`${Y??""}/${(t(ce)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),b(Na,"style",`height: ${10*t(r)}px; width: auto; display: block;`),b(Os,"style",`height: ${m*.8*t(r)}px; flex-shrink: 0;`),b(Bt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*t(r)}px;`),b(Ft,"style",`
            width: ${50*t(r)}px;
            height: ${50*t(r)}px;
            background-image: url('${Y??""}/Control_fastplay_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),b(Ft,"title",`Spin Speed: ${(t(me)==="slow"?"Slow":t(me)==="medium"?"Medium":"Fast")??""}`),b(Da,"src",`${Y??""}/${(t(me)==="slow"?"Control_bar_deselect.png":t(me)==="medium"?"Control_half_bar_select.png":"Control_bar_select.png")??""}`),b(Da,"style",`height: ${10*t(r)}px; width: auto; display: block;`),b(Cs,"style",`height: ${m*.8*t(r)}px; flex-shrink: 0;`),b(Ua,"style",`color: #00ff00; font-size: ${12*t(r)}px; font-weight: bold; line-height: 1; height: ${16*t(r)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(r)}px;`),b(Fs,"style",`height: ${44*t(r)}px; display: flex; align-items: center;`),b(Ms,"style",`
            color: #fff;
            font-size: ${20*t(r)}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
          `),q(En,A),b(Ws,"style",`height: ${m*.8*t(r)}px; flex-shrink: 0;`),b(Ha,"style",`
            width: ${50*t(r)}px;
            height: ${50*t(r)}px;
            background-image: url('${Y??""}/Control_menubar.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),b(Va,"style",`height: ${m*t(r)}px; flex-shrink: 0;`),b(Mt,"style",`
    position: absolute;
    top: ${190*t(r)}px;
    right: ${20*t(r)}px;
    padding: ${10*t(r)}px ${15*t(r)}px;
    background-color: rgba(0, 255, 0, 0.3);
    border: ${2*t(r)}px solid rgba(0, 255, 0, 0.7);
    border-radius: ${8*t(r)}px;
    cursor: pointer;
    font-weight: bold;
    font-size: ${16*t(r)}px;
    color: white;
    text-shadow: 0 0 ${5*t(r)}px rgba(0,0,0,0.8);
    z-index: 10000;
    min-width: ${180*t(r)}px;
    pointer-events: auto;
  `),b(Wt,"style",`
  position: absolute;
  top: 20px;
  left: 20px;
  display: ${(t(os)?"block":"none")??""};
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
`),q(Tn,S),q(Rn,x),q(Pn,$),b(Us,"style",`color: ${k??""};`),q(In,`${t(is)??""}%`),b(Hs,"style",`color: ${C??""};`),q(On,`${t(ls)??""}%`),q(Cn,t(Lt)),q(Bn,t(cs)),q(Fn,`${t(en)??""}%`),ot.disabled=t(xe).length===0,b(ot,"style",`
        width: 100%;
        padding: 5px;
        background: ${(t(xe).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(t(xe).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(t(xe).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(t(xe).length>0?"1":"0.5")??""};
      `),q(Mn,`Download Win Log (${t(xe).length??""})`),zt.disabled=t(xe).length===0,b(zt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(t(xe).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(t(xe).length>0?"1":"0.5")??""};
      `),Ks.disabled=t(Q),b(Ks,"style",`
        width: 100%;
        padding: 5px;
        background: ${(t(Q)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(t(Q)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(t(Q)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(t(Q)?"0.5":"1")??""};
      `),b(qs,"style",`
  position: absolute;
  top: ${10*t(r)}px;
  right: ${10*t(r)}px;
  display: flex;
  gap: ${10*t(r)}px;
  z-index: 1001;
`),b(jt,"style",`
      width: ${50*t(r)}px;
      height: ${50*t(r)}px;
      background-image: url('${Y??""}/${(t(Le)?"music_on.png":"music_off.png")??""}');
      background-size: contain;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
      background-color: transparent;
    `),b(jt,"title",t(Le)?"Music: ON":"Music: OFF"),b(Qs,"style",`
      width: ${50*t(r)}px;
      height: ${50*t(r)}px;
      background-image: url('${Y??""}/${(t(Pe)?"sounds_on.png":"sounds_off.png")??""}');
      background-size: contain;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
      background-color: transparent;
    `),b(Qs,"title",t(Pe)?"Sound: ON":"Sound: OFF")},[()=>t(ke).toFixed(2),()=>t(Fe).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>t(Ve).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>t(et).toLocaleString(),()=>t(tt).toLocaleString(),()=>t(yt).toLocaleString(),()=>parseFloat(t(is))>=95?"#00ff00":parseFloat(t(is))>=85?"#ffff00":"#ff6666",()=>parseFloat(t(ls))>=30?"#00ff00":parseFloat(t(ls))>=20?"#ffff00":"#ff6666"]),F("click",ys,()=>{g(at,!t(at))}),F("click",$s,mn),F("click",Fa,vn),F("click",Is,()=>{t(ce)?Rt():Te.some(p=>p.state==="spinning"||p.state==="slowing")?Te.forEach(p=>{p.state==="spinning"?(p.stopDelay=0,p.state="slowing",p.speed=p.targetSpeed*.5):p.state==="slowing"&&(p.speed=p.speed*.3)}):vs()}),F("click",Ct,()=>{t(ce)?Rt():g(de,!t(de))}),F("click",Ft,()=>{t(me)==="slow"?g(me,"medium"):t(me)==="medium"?g(me,"fast"):g(me,"slow")}),F("click",Ha,()=>{g(at,!t(at))}),F("click",Mt,()=>{g(os,!t(os))}),F("click",to,xn),F("click",ot,sn),F("click",zt,an),F("click",Ks,on),F("click",jt,Ko),F("click",Qs,qo),H(s,Ea),Yt()}var Ji=Z('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),Zi=Z('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function el(s,e){Vt(e,!1);let a=rt(e,"isAuthenticated",12,!1),o=ia(""),n=ia(!1);const i="slot2024";function l(){t(o)===i?(a(!0),sessionStorage.setItem("gameAuthenticated","true")):(g(n,!0),g(o,""),setTimeout(()=>g(n,!1),3e3))}ga(()=>{a(sessionStorage.getItem("gameAuthenticated")==="true")}),Hn();var d=Ut(),h=He(d);{var y=f=>{var v=Zi(),m=w(v),E=u(w(m),4),T=w(E);Er(T),vr(2),_(E);var K=u(E,2);{var B=R=>{var z=Ji();H(R,z)};se(K,R=>{t(n)&&R(B)})}_(m),_(v),Tr(T,()=>t(o),R=>g(o,R)),F("submit",E,Rr(l)),H(f,v)};se(h,f=>{a()||f(y)})}H(s,d),Yt()}var tl=Z("<!> <!>",1);function ul(s){let e=ia(!1);var a=tl(),o=He(a);el(o,{get isAuthenticated(){return t(e)},set isAuthenticated(l){g(e,l)},$$legacy:!0});var n=u(o,2);{var i=l=>{Qi(l,{})};se(n,l=>{t(e)&&l(i)})}H(s,a)}export{Io as A,To as C,Wr as R,Or as S,Oo as V,ul as _,Ir as u};
