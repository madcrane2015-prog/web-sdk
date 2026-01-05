const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DCyjLnl0.js","./Cb0119l1.js","./BrW7ntrJ.js","./Fx7Xcyif.js","./CkL9UklL.js","./C2GHuDhf.js","./Cuj58mN5.js","./B4BgpSNC.js"])))=>i.map(i=>d[i]);
var zo=Object.defineProperty;var jo=(s,e,n)=>e in s?zo(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var $e=(s,e,n)=>jo(s,typeof e!="symbol"?e+"":e,n);import{g as No,l as Do,e as Ut,a as H,t as Z,n as _a,i as F,j as Uo,k as Go}from"./CsxIJThA.js";import{i as Ho}from"./DqfWCwGf.js";import{y as Ee,j as Vo,a8 as Yo,F as t,Q as Xo,aa as Ko,ab as aa,h as oa,e as Js,k as kt,l as qo,ac as Aa,w as ka,ad as Qo,q as $a,a7 as Jo,U as Zo,a2 as ia,ar as Zs,z as ra,as as ei,at as ti,au as si,o as ni,av as ai,aw as oi,ax as ii,ay as ri,b as li,az as ci,aA as di,a6 as pi,aB as ui,aC as fi,D as gi,L as hi,p as Vt,f as Ve,ah as P,a as Yt,T as g,c as w,s as f,r as _,t as te,I as Ue,ag as hn,aD as Se,aE as vi,aF as ln}from"./Fx7Xcyif.js";import{_ as la,i as se,p as fe}from"./BrW7ntrJ.js";import{s as q}from"./DfoPkomP.js";import{p as rt,b as ca}from"./C4w3i6Q0.js";import{b as ye}from"./D2NyisTr.js";import{e as He,E as M,a as mi,C as vn,Q as cn,V as dn,N as en,D as ge,H as bi,p as qe,a0 as pt,a1 as Qe,a2 as yi,w as Ge,a3 as St,a4 as Sa,a5 as ut,a6 as Oe,a7 as Xt,a8 as Ea,a9 as xi,aa as tn,y as sn}from"./Cb0119l1.js";import{A as wi,B as da,G as _i,a as pa}from"./CkL9UklL.js";function Gt(s,e){return e}function Ai(s,e,n,a){for(var o=[],r=e.length,l=0;l<r;l++)si(e[l].e,o,!0);var d=r>0&&o.length===0&&n!==null;if(d){var h=n.parentNode;ni(h),h.append(n),a.clear(),De(s,e[0].prev,e[r-1].next)}ai(o,()=>{for(var y=0;y<r;y++){var u=e[y];d||(a.delete(u.k),De(s,u.prev,u.next)),oi(u.e,!d)}})}function Ht(s,e,n,a,o,r=null){var l=s,d={flags:e,items:new Map,first:null};Ee&&Vo();var h=null,y=!1,u=Xo(()=>{var v=n();return Jo(v)?v:v==null?[]:$a(v)});Yo(()=>{var v=t(u),m=v.length;if(y&&m===0)return;y=m===0;let E=!1;if(Ee){var T=l.data===Ko;T!==(m===0)&&(l=aa(),oa(l),Js(!1),E=!0)}if(Ee){for(var K=null,B,R=0;R<m;R++){if(kt.nodeType===8&&kt.data===qo){l=kt,E=!0,Js(!1);break}var z=v[R],ne=a(z,R);B=La(kt,d,K,null,z,ne,R,o,e,n),d.items.set(ne,B),K=B}m>0&&oa(aa())}Ee||ki(v,d,l,o,e,a,n),r!==null&&(m===0?h?Aa(h):h=ka(()=>r(l)):h!==null&&Qo(h,()=>{h=null})),E&&Js(!0),t(u)}),Ee&&(l=kt)}function ki(s,e,n,a,o,r,l){var d=s.length,h=e.items,y=e.first,u=y,v,m=null,E=[],T=[],K,B,R,z;for(z=0;z<d;z+=1){if(K=s[z],B=r(K,z),R=h.get(B),R===void 0){var ne=u?u.e.nodes_start:n;m=La(ne,e,m,m===null?e.first:m.next,K,B,z,a,o,l),h.set(B,m),E=[],T=[],u=m.next;continue}if($i(R,K,z),(R.e.f&Zs)!==0&&Aa(R.e),R!==u){if(v!==void 0&&v.has(R)){if(E.length<T.length){var ae=T[0],D;m=ae.prev;var re=E[0],le=E[E.length-1];for(D=0;D<E.length;D+=1)ua(E[D],ae,n);for(D=0;D<T.length;D+=1)v.delete(T[D]);De(e,re.prev,le.next),De(e,m,re),De(e,le,ae),u=ae,m=le,z-=1,E=[],T=[]}else v.delete(R),ua(R,u,n),De(e,R.prev,R.next),De(e,R,m===null?e.first:m.next),De(e,m,R),m=R;continue}for(E=[],T=[];u!==null&&u.k!==B;)(u.e.f&Zs)===0&&(v??(v=new Set)).add(u),T.push(u),u=u.next;if(u===null)continue;R=u}E.push(R),m=R,u=R.next}if(u!==null||v!==void 0){for(var xe=v===void 0?[]:$a(v);u!==null;)(u.e.f&Zs)===0&&xe.push(u),u=u.next;var Re=xe.length;if(Re>0){var N=null;Ai(e,xe,N,h)}}ra.first=e.first&&e.first.e,ra.last=m&&m.e}function $i(s,e,n,a){ti(s.v,e),s.i=n}function La(s,e,n,a,o,r,l,d,h,y){var u=(h&ii)!==0,v=(h&ri)===0,m=u?v?Zo(o):ia(o):o,E=(h&ei)===0?l:ia(l),T={i:E,v:m,k:r,a:null,e:null,prev:n,next:a};try{return T.e=ka(()=>d(s,m,E,y),Ee),T.e.prev=n&&n.e,T.e.next=a&&a.e,n===null?e.first=T:(n.next=T,n.e.next=T.e),a!==null&&(a.prev=T,a.e.prev=T.e),T}finally{}}function ua(s,e,n){for(var a=s.next?s.next.e.nodes_start:n,o=e?e.e.nodes_start:n,r=s.e.nodes_start;r!==a;){var l=li(r);o.before(r),r=l}}function De(s,e,n){e===null?s.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}const fa=[...` 	
\r\f \v\uFEFF`];function Si(s,e,n){var a=s==null?"":""+s;if(e&&(a=a?a+" "+e:e),n){for(var o in n)if(n[o])a=a?a+" "+o:o;else if(a.length)for(var r=o.length,l=0;(l=a.indexOf(o,l))>=0;){var d=l+r;(l===0||fa.includes(a[l-1]))&&(d===a.length||fa.includes(a[d]))?a=(l===0?"":a.substring(0,l))+a.substring(d+1):l=d}}return a===""?null:a}function pn(s,e,n,a,o,r){var l=s.__className;if(Ee||l!==n){var d=Si(n,a,r);(!Ee||d!==s.getAttribute("class"))&&(d==null?s.removeAttribute("class"):e?s.className=d:s.setAttribute("class",d)),s.__className=n}else if(r)for(var h in r){var y=!!r[h];(o==null||y!==!!o[h])&&s.classList.toggle(h,y)}return r}function Ei(s){if(Ee){var e=!1,n=()=>{if(!e){if(e=!0,s.hasAttribute("value")){var a=s.value;x(s,"value",null),s.value=a}if(s.hasAttribute("checked")){var o=s.checked;x(s,"checked",null),s.checked=o}}};s.__on_r=n,ci(n),No()}}function x(s,e,n,a){var o=s.__attributes??(s.__attributes={});Ee&&(o[e]=s.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&s.nodeName==="LINK")||o[e]!==(o[e]=n)&&(e==="style"&&"__styles"in s&&(s.__styles={}),e==="loading"&&(s[di]=n),n==null?s.removeAttribute(e):typeof n!="string"&&Li(s).includes(e)?s[e]=n:s.setAttribute(e,n))}var ga=new Map;function Li(s){var e=ga.get(s.nodeName);if(e)return e;ga.set(s.nodeName,e=[]);for(var n,a=s,o=Element.prototype;o!==a;){n=ui(a);for(var r in n)n[r].set&&e.push(r);a=pi(a)}return e}function Ti(s,e,n=e){var a=fi();Do(s,"input",o=>{var r=o?s.defaultValue:s.value;if(r=nn(s)?an(r):r,n(r),a&&r!==(r=e())){var l=s.selectionStart,d=s.selectionEnd;s.value=r??"",d!==null&&(s.selectionStart=l,s.selectionEnd=Math.min(d,s.value.length))}}),(Ee&&s.defaultValue!==s.value||gi(e)==null&&s.value)&&n(nn(s)?an(s.value):s.value),hi(()=>{var o=e();nn(s)&&o===an(s.value)||s.type==="date"&&!o&&!s.value||o!==s.value&&(s.value=o??"")})}function nn(s){var e=s.type;return e==="number"||e==="range"}function an(s){return s===""?null:+s}function Ri(s){return function(...e){var n=e[0];return n.preventDefault(),s==null?void 0:s.apply(this,e)}}const un=[];He.handleByNamedList(M.Environment,un);async function Pi(s){if(!s)for(let e=0;e<un.length;e++){const n=un[e];if(n.value.test()){await n.value.load();return}}}let $t;function Ii(){if(typeof $t=="boolean")return $t;try{$t=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{$t=!1}return $t}var Ta=(s=>(s[s.NONE=0]="NONE",s[s.COLOR=16384]="COLOR",s[s.STENCIL=1024]="STENCIL",s[s.DEPTH=256]="DEPTH",s[s.COLOR_DEPTH=16640]="COLOR_DEPTH",s[s.COLOR_STENCIL=17408]="COLOR_STENCIL",s[s.DEPTH_STENCIL=1280]="DEPTH_STENCIL",s[s.ALL=17664]="ALL",s))(Ta||{});class Oi{constructor(e){this.items=[],this._name=e}emit(e,n,a,o,r,l,d,h){const{name:y,items:u}=this;for(let v=0,m=u.length;v<m;v++)u[v][y](e,n,a,o,r,l,d,h);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const n=this.items.indexOf(e);return n!==-1&&this.items.splice(n,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Ci=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Ra=class Pa extends mi{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const n=[...Ci,...this.config.runners??[]];this._addRunners(...n),this._unsafeEvalCheck()}async init(e={}){const n=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Pi(n),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...Pa.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,n){let a=e;if(a instanceof vn&&(a={container:a},n&&(cn(dn,"passing a second argument is deprecated, please use render options instead"),a.target=n.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const o=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=o?a.clearColor:en.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,n,a){const o=this.view.resolution;this.view.resize(e,n,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==o&&this.runners.resolutionChange.emit(a)}clear(e={}){const n=this;e.target||(e.target=n.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Ta.ALL);const{clear:a,clearColor:o,target:r}=e;en.shared.setValue(o??this.background.colorRgba),n.renderTarget.clear(r,a,en.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(n=>{this.runners[n]=new Oi(n)})}_addSystems(e){let n;for(n in e){const a=e[n];this._addSystem(a.value,a.name)}}_addSystem(e,n){const a=new e(this);if(this[n])throw new Error(`Whoops! The name "${n}" is already in use`);this[n]=a,this._systemsHash[n]=a;for(const o in this.runners)this.runners[o].add(a);return this}_addPipes(e,n){const a=n.reduce((o,r)=>(o[r.name]=r.value,o),{});e.forEach(o=>{const r=o.value,l=o.name,d=a[l];this.renderPipes[l]=new r(this,d?new d:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(n=>{n.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Ii())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Ra.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Ia=Ra,Nt;function Bi(s){return Nt!==void 0||(Nt=(()=>{var n;const e={stencil:!0,failIfMajorPerformanceCaveat:s??Ia.defaultOptions.failIfMajorPerformanceCaveat};try{if(!ge.get().getWebGLRenderingContext())return!1;let o=ge.get().createCanvas().getContext("webgl",e);const r=!!((n=o==null?void 0:o.getContextAttributes())!=null&&n.stencil);if(o){const l=o.getExtension("WEBGL_lose_context");l&&l.loseContext()}return o=null,r}catch{return!1}})()),Nt}let Dt;async function Fi(s={}){return Dt!==void 0||(Dt=await(async()=>{const e=ge.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(s)).requestDevice(),!0}catch{return!1}})()),Dt}const ha=["webgl","webgpu","canvas"];async function Mi(s){let e=[];s.preference?(e.push(s.preference),ha.forEach(r=>{r!==s.preference&&e.push(r)})):e=ha.slice();let n,a={};for(let r=0;r<e.length;r++){const l=e[r];if(l==="webgpu"&&await Fi()){const{WebGPURenderer:d}=await la(async()=>{const{WebGPURenderer:h}=await import("./DCyjLnl0.js");return{WebGPURenderer:h}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);n=d,a={...s,...s.webgpu};break}else if(l==="webgl"&&Bi(s.failIfMajorPerformanceCaveat??Ia.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:d}=await la(async()=>{const{WebGLRenderer:h}=await import("./B4BgpSNC.js");return{WebGLRenderer:h}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);n=d,a={...s,...s.webgl};break}else if(l==="canvas")throw a={...s},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!n)throw new Error("No available renderer for the current environment");const o=new n;return await o.init(a),o}const Oa="8.8.1";class Ca{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Oa)}static destroy(){}}Ca.extension=M.Application;class Wi{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Oa)}destroy(){this._renderer=null}}Wi.extension={type:[M.WebGLSystem,M.WebGPUSystem],name:"initHook",priority:-10};const Ba=class fn{constructor(...e){this.stage=new vn,e[0]!==void 0&&cn(dn,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Mi(e),fn._plugins.forEach(n=>{n.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return cn(dn,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,n=!1){const a=fn._plugins.slice(0);a.reverse(),a.forEach(o=>{o.destroy.call(this)}),this.stage.destroy(n),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Ba._plugins=[];let Fa=Ba;He.handleByList(M.Application,Fa._plugins);He.add(Ca);class Ma extends wi{constructor(e,n){super();const{textures:a,data:o}=e;Object.keys(o.pages).forEach(r=>{const l=o.pages[parseInt(r,10)],d=a[l.id];this.pages.push({texture:d})}),Object.keys(o.chars).forEach(r=>{const l=o.chars[r],{frame:d,source:h}=a[l.page],y=new bi(l.x+d.x,l.y+d.y,l.width,l.height),u=new qe({source:h,frame:y});this.chars[r]={id:r.codePointAt(0),xOffset:l.xOffset,yOffset:l.yOffset,xAdvance:l.xAdvance,kerning:l.kerning??{},texture:u}}),this.baseRenderedFontSize=o.fontSize,this.baseMeasurementFontSize=o.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:o.fontSize},this.baseLineOffset=o.baseLineOffset,this.lineHeight=o.lineHeight,this.fontFamily=o.fontFamily,this.distanceField=o.distanceField??{type:"none",range:0},this.url=n}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:n}=this.pages[e];n.destroy(!0)}this.pages=null}static install(e){da.install(e)}static uninstall(e){da.uninstall(e)}}const on={test(s){return typeof s=="string"&&s.startsWith("info face=")},parse(s){const e=s.match(/^[a-z]+\s+.+$/gm),n={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const v in e){const m=e[v].match(/^[a-z]+/gm)[0],E=e[v].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),T={};for(const K in E){const B=E[K].split("="),R=B[0],z=B[1].replace(/"/gm,""),ne=parseFloat(z),ae=isNaN(ne)?z:ne;T[R]=ae}n[m].push(T)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[o]=n.info,[r]=n.common,[l]=n.distanceField??[];l&&(a.distanceField={range:parseInt(l.distanceRange,10),type:l.fieldType}),a.fontSize=parseInt(o.size,10),a.fontFamily=o.face,a.lineHeight=parseInt(r.lineHeight,10);const d=n.page;for(let v=0;v<d.length;v++)a.pages.push({id:parseInt(d[v].id,10)||0,file:d[v].file});const h={};a.baseLineOffset=a.lineHeight-parseInt(r.base,10);const y=n.char;for(let v=0;v<y.length;v++){const m=y[v],E=parseInt(m.id,10);let T=m.letter??m.char??String.fromCharCode(E);T==="space"&&(T=" "),h[E]=T,a.chars[T]={id:E,page:parseInt(m.page,10)||0,x:parseInt(m.x,10),y:parseInt(m.y,10),width:parseInt(m.width,10),height:parseInt(m.height,10),xOffset:parseInt(m.xoffset,10),yOffset:parseInt(m.yoffset,10),xAdvance:parseInt(m.xadvance,10),kerning:{}}}const u=n.kerning||[];for(let v=0;v<u.length;v++){const m=parseInt(u[v].first,10),E=parseInt(u[v].second,10),T=parseInt(u[v].amount,10);a.chars[h[E]].kerning[h[m]]=T}return a}},va={test(s){const e=s;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(s){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},n=s.getElementsByTagName("info")[0],a=s.getElementsByTagName("common")[0],o=s.getElementsByTagName("distanceField")[0];o&&(e.distanceField={type:o.getAttribute("fieldType"),range:parseInt(o.getAttribute("distanceRange"),10)});const r=s.getElementsByTagName("page"),l=s.getElementsByTagName("char"),d=s.getElementsByTagName("kerning");e.fontSize=parseInt(n.getAttribute("size"),10),e.fontFamily=n.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let y=0;y<r.length;y++)e.pages.push({id:parseInt(r[y].getAttribute("id"),10)||0,file:r[y].getAttribute("file")});const h={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let y=0;y<l.length;y++){const u=l[y],v=parseInt(u.getAttribute("id"),10);let m=u.getAttribute("letter")??u.getAttribute("char")??String.fromCharCode(v);m==="space"&&(m=" "),h[v]=m,e.chars[m]={id:v,page:parseInt(u.getAttribute("page"),10)||0,x:parseInt(u.getAttribute("x"),10),y:parseInt(u.getAttribute("y"),10),width:parseInt(u.getAttribute("width"),10),height:parseInt(u.getAttribute("height"),10),xOffset:parseInt(u.getAttribute("xoffset"),10),yOffset:parseInt(u.getAttribute("yoffset"),10),xAdvance:parseInt(u.getAttribute("xadvance"),10),kerning:{}}}for(let y=0;y<d.length;y++){const u=parseInt(d[y].getAttribute("first"),10),v=parseInt(d[y].getAttribute("second"),10),m=parseInt(d[y].getAttribute("amount"),10);e.chars[h[v]].kerning[h[u]]=m}return e}},ma={test(s){return typeof s=="string"&&s.includes("<font>")?va.test(ge.get().parseXML(s)):!1},parse(s){return va.parse(ge.get().parseXML(s))}},zi=[".xml",".fnt"],ji={extension:{type:M.CacheParser,name:"cacheBitmapFont"},test:s=>s instanceof Ma,getCacheableAssets(s,e){const n={};return s.forEach(a=>{n[a]=e,n[`${a}-bitmap`]=e}),n[`${e.fontFamily}-bitmap`]=e,n}},Ni={extension:{type:M.LoadParser,priority:pt.Normal},name:"loadBitmapFont",test(s){return zi.includes(Qe.extname(s).toLowerCase())},async testParse(s){return on.test(s)||ma.test(s)},async parse(s,e,n){const a=on.test(s)?on.parse(s):ma.parse(s),{src:o}=e,{pages:r}=a,l=[],d=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let v=0;v<r.length;++v){const m=r[v].file;let E=Qe.join(Qe.dirname(o),m);E=yi(E,o),l.push({src:E,data:d})}const h=await n.load(l),y=l.map(v=>h[v.src]);return new Ma({data:a,textures:y},o)},async load(s,e){return await(await ge.get().fetch(s)).text()},async unload(s,e,n){await Promise.all(s.pages.map(a=>n.unload(a.texture.source._sourceOrigin))),s.destroy()}};class Di{constructor(e,n=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=n}add(e){e.forEach(n=>{this._assetList.push(n)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],n=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<n;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Ui={extension:{type:M.CacheParser,name:"cacheTextureArray"},test:s=>Array.isArray(s)&&s.every(e=>e instanceof qe),getCacheableAssets:(s,e)=>{const n={};return s.forEach(a=>{e.forEach((o,r)=>{n[a+(r===0?"":r+1)]=o})}),n}};async function Wa(s){if("Image"in globalThis)return new Promise(e=>{const n=new Image;n.onload=()=>{e(!0)},n.onerror=()=>{e(!1)},n.src=s});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(s)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Gi={extension:{type:M.DetectionParser,priority:1},test:async()=>Wa("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async s=>[...s,"avif"],remove:async s=>s.filter(e=>e!=="avif")},ba=["png","jpg","jpeg"],Hi={extension:{type:M.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async s=>[...s,...ba],remove:async s=>s.filter(e=>!ba.includes(e))},Vi="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function mn(s){return Vi?!1:document.createElement("video").canPlayType(s)!==""}const Yi={extension:{type:M.DetectionParser,priority:0},test:async()=>mn("video/mp4"),add:async s=>[...s,"mp4","m4v"],remove:async s=>s.filter(e=>e!=="mp4"&&e!=="m4v")},Xi={extension:{type:M.DetectionParser,priority:0},test:async()=>mn("video/ogg"),add:async s=>[...s,"ogv"],remove:async s=>s.filter(e=>e!=="ogv")},Ki={extension:{type:M.DetectionParser,priority:0},test:async()=>mn("video/webm"),add:async s=>[...s,"webm"],remove:async s=>s.filter(e=>e!=="webm")},qi={extension:{type:M.DetectionParser,priority:0},test:async()=>Wa("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async s=>[...s,"webp"],remove:async s=>s.filter(e=>e!=="webp")};class Qi{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,n,a)=>(this._parsersValidated=!1,e[n]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,n){const a={promise:null,parser:null};return a.promise=(async()=>{var l,d;let o=null,r=null;if(n.loadParser&&(r=this._parserHash[n.loadParser],r||Ge(`[Assets] specified load parser "${n.loadParser}" not found while loading ${e}`)),!r){for(let h=0;h<this.parsers.length;h++){const y=this.parsers[h];if(y.load&&((l=y.test)!=null&&l.call(y,e,n,this))){r=y;break}}if(!r)return Ge(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}o=await r.load(e,n,this),a.parser=r;for(let h=0;h<this.parsers.length;h++){const y=this.parsers[h];y.parse&&y.parse&&await((d=y.testParse)==null?void 0:d.call(y,o,n,this))&&(o=await y.parse(o,n,this)||o,a.parser=y)}return o})(),a}async load(e,n){this._parsersValidated||this._validateParsers();let a=0;const o={},r=Sa(e),l=St(e,y=>({alias:[y],src:y,data:{}})),d=l.length,h=l.map(async y=>{const u=Qe.toAbsolute(y.src);if(!o[y.src])try{this.promiseCache[u]||(this.promiseCache[u]=this._getLoadPromiseAndParser(u,y)),o[y.src]=await this.promiseCache[u].promise,n&&n(++a/d)}catch(v){throw delete this.promiseCache[u],delete o[y.src],new Error(`[Loader.load] Failed to load ${u}.
${v}`)}});return await Promise.all(h),r?o[l[0].src]:o}async unload(e){const a=St(e,o=>({alias:[o],src:o})).map(async o=>{var d,h;const r=Qe.toAbsolute(o.src),l=this.promiseCache[r];if(l){const y=await l.promise;delete this.promiseCache[r],await((h=(d=l.parser)==null?void 0:d.unload)==null?void 0:h.call(d,y,o,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,n)=>(n.name?e[n.name]&&Ge(`[Assets] loadParser name conflict "${n.name}"`):Ge("[Assets] loadParser should have a name"),{...e,[n.name]:n}),{})}}function ft(s,e){if(Array.isArray(e)){for(const n of e)if(s.startsWith(`data:${n}`))return!0;return!1}return s.startsWith(`data:${e}`)}const Ji=".json",Zi="application/json",er={extension:{type:M.LoadParser,priority:pt.Low},name:"loadJson",test(s){return ft(s,Zi)||ut(s,Ji)},async load(s){return await(await ge.get().fetch(s)).json()}},tr=".txt",sr="text/plain",nr={name:"loadTxt",extension:{type:M.LoadParser,priority:pt.Low,name:"loadTxt"},test(s){return ft(s,sr)||ut(s,tr)},async load(s){return await(await ge.get().fetch(s)).text()}},ar=["normal","bold","100","200","300","400","500","600","700","800","900"],or=[".ttf",".otf",".woff",".woff2"],ir=["font/ttf","font/otf","font/woff","font/woff2"],rr=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function lr(s){const e=Qe.extname(s),o=Qe.basename(s,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(d=>d.charAt(0).toUpperCase()+d.slice(1));let r=o.length>0;for(const d of o)if(!d.match(rr)){r=!1;break}let l=o.join(" ");return r||(l=`"${l.replace(/[\\"]/g,"\\$&")}"`),l}const cr=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function dr(s){return cr.test(s)?s:encodeURI(s)}const pr={extension:{type:M.LoadParser,priority:pt.Low},name:"loadWebFont",test(s){return ft(s,ir)||ut(s,or)},async load(s,e){var a,o,r;const n=ge.get().getFontFaceSet();if(n){const l=[],d=((a=e.data)==null?void 0:a.family)??lr(s),h=((r=(o=e.data)==null?void 0:o.weights)==null?void 0:r.filter(u=>ar.includes(u)))??["normal"],y=e.data??{};for(let u=0;u<h.length;u++){const v=h[u],m=new FontFace(d,`url(${dr(s)})`,{...y,weight:v});await m.load(),n.add(m),l.push(m)}return Oe.set(`${d}-and-url`,{url:s,fontFaces:l}),l.length===1?l[0]:l}return Ge("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(s){(Array.isArray(s)?s:[s]).forEach(e=>{Oe.remove(`${e.family}-and-url`),ge.get().getFontFaceSet().delete(e)})}};function bn(s,e=1){var a;const n=(a=Xt.RETINA_PREFIX)==null?void 0:a.exec(s);return n?parseFloat(n[1]):e}function yn(s,e,n){s.label=n,s._sourceOrigin=n;const a=new qe({source:s,label:n}),o=()=>{delete e.promiseCache[n],Oe.has(n)&&Oe.remove(n)};return a.source.once("destroy",()=>{e.promiseCache[n]&&(Ge("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),o())}),a.once("destroy",()=>{s.destroyed||(Ge("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),o())}),a}const ur=".svg",fr="image/svg+xml",gr={extension:{type:M.LoadParser,priority:pt.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(s){return ft(s,fr)||ut(s,ur)},async load(s,e,n){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?vr(s):hr(s,e,n,this.config.crossOrigin)},unload(s){s.destroy(!0)}};async function hr(s,e,n,a){var B,R,z;const r=await(await ge.get().fetch(s)).blob(),l=URL.createObjectURL(r),d=new Image;d.src=l,d.crossOrigin=a,await d.decode(),URL.revokeObjectURL(l);const h=document.createElement("canvas"),y=h.getContext("2d"),u=((B=e.data)==null?void 0:B.resolution)||bn(s),v=((R=e.data)==null?void 0:R.width)??d.width,m=((z=e.data)==null?void 0:z.height)??d.height;h.width=v*u,h.height=m*u,y.drawImage(d,0,0,v*u,m*u);const{parseAsGraphicsContext:E,...T}=e.data??{},K=new Ea({resource:h,alphaMode:"premultiply-alpha-on-upload",resolution:u,...T});return yn(K,n,s)}async function vr(s){const n=await(await ge.get().fetch(s)).text(),a=new _i;return a.svg(n),a}const mr=`(function () {
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
`;let ct=null,gn=class{constructor(){ct||(ct=URL.createObjectURL(new Blob([mr],{type:"application/javascript"}))),this.worker=new Worker(ct)}};gn.revokeObjectURL=function(){ct&&(URL.revokeObjectURL(ct),ct=null)};const br=`(function () {
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
`;let dt=null;class za{constructor(){dt||(dt=URL.createObjectURL(new Blob([br],{type:"application/javascript"}))),this.worker=new Worker(dt)}}za.revokeObjectURL=function(){dt&&(URL.revokeObjectURL(dt),dt=null)};let ya=0,rn;class yr{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:n}=new gn;n.addEventListener("message",a=>{n.terminate(),gn.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,n){var a;return this._run("loadImageBitmap",[e,(a=n==null?void 0:n.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){rn===void 0&&(rn=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<rn&&(this._createdWorkers++,e=new za().worker,e.addEventListener("message",n=>{this._complete(n.data),this._returnWorker(n.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,n){await this._initWorkers();const a=new Promise((o,r)=>{this._queue.push({id:e,arguments:n,resolve:o,reject:r})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const n=this._queue.pop(),a=n.id;this._resolveHash[ya]={resolve:n.resolve,reject:n.reject},e.postMessage({data:n.arguments,uuid:ya++,id:a})}}const xa=new yr,xr=[".jpeg",".jpg",".png",".webp",".avif"],wr=["image/jpeg","image/png","image/webp","image/avif"];async function _r(s,e){var o;const n=await ge.get().fetch(s);if(!n.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${s}: ${n.status} ${n.statusText}`);const a=await n.blob();return((o=e==null?void 0:e.data)==null?void 0:o.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const ja={name:"loadTextures",extension:{type:M.LoadParser,priority:pt.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(s){return ft(s,wr)||ut(s,xr)},async load(s,e,n){var r;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await xa.isImageBitmapSupported()?a=await xa.loadImageBitmap(s,e):a=await _r(s,e):a=await new Promise((l,d)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=s,a.complete?l(a):(a.onload=()=>{l(a)},a.onerror=d)});const o=new Ea({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((r=e.data)==null?void 0:r.resolution)||bn(s),...e.data});return yn(o,n,s)},unload(s){s.destroy(!0)}},Na=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Ar=Na.map(s=>`video/${s.substring(1)}`);function kr(s,e,n){n===void 0&&!e.startsWith("data:")?s.crossOrigin=Sr(e):n!==!1&&(s.crossOrigin=typeof n=="string"?n:"anonymous")}function $r(s){return new Promise((e,n)=>{s.addEventListener("canplaythrough",a),s.addEventListener("error",o),s.load();function a(){r(),e()}function o(l){r(),n(l)}function r(){s.removeEventListener("canplaythrough",a),s.removeEventListener("error",o)}})}function Sr(s,e=globalThis.location){if(s.startsWith("data:"))return"";e||(e=globalThis.location);const n=new URL(s,document.baseURI);return n.hostname!==e.hostname||n.port!==e.port||n.protocol!==e.protocol?"anonymous":""}const Er={name:"loadVideo",extension:{type:M.LoadParser,name:"loadVideo"},test(s){const e=ft(s,Ar),n=ut(s,Na);return e||n},async load(s,e,n){var h,y;const a={...tn.defaultOptions,resolution:((h=e.data)==null?void 0:h.resolution)||bn(s),alphaMode:((y=e.data)==null?void 0:y.alphaMode)||await xi(),...e.data},o=document.createElement("video"),r={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(r).forEach(u=>{const v=r[u];v!==void 0&&o.setAttribute(u,v)}),a.muted===!0&&(o.muted=!0),kr(o,s,a.crossorigin);const l=document.createElement("source");let d;if(s.startsWith("data:"))d=s.slice(5,s.indexOf(";"));else if(!s.startsWith("blob:")){const u=s.split("?")[0].slice(s.lastIndexOf(".")+1).toLowerCase();d=tn.MIME_TYPES[u]||`video/${u}`}return l.src=s,d&&(l.type=d),new Promise(u=>{const v=async()=>{const m=new tn({...a,resource:o});o.removeEventListener("canplay",v),e.data.preload&&await $r(o),u(yn(m,n,s))};o.addEventListener("canplay",v),o.appendChild(l)})},unload(s){s.destroy(!0)}},Da={extension:{type:M.ResolveParser,name:"resolveTexture"},test:ja.test,parse:s=>{var e;return{resolution:parseFloat(((e=Xt.RETINA_PREFIX.exec(s))==null?void 0:e[1])??"1"),format:s.split(".").pop(),src:s}}},Lr={extension:{type:M.ResolveParser,priority:-2,name:"resolveJson"},test:s=>Xt.RETINA_PREFIX.test(s)&&s.endsWith(".json"),parse:Da.parse};class Tr{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Xt,this.loader=new Qi,this.cache=Oe,this._backgroundLoader=new Di(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var r,l;if(this._initialized){Ge("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let d=e.manifest;typeof d=="string"&&(d=await this.load(d)),this.resolver.addManifest(d)}const n=((r=e.texturePreference)==null?void 0:r.resolution)??1,a=typeof n=="number"?[n]:n,o=await this._detectFormats({preferredFormats:(l=e.texturePreference)==null?void 0:l.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:o,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,n){this._initialized||await this.init();const a=Sa(e),o=St(e).map(d=>{if(typeof d!="string"){const h=this.resolver.getAlias(d);return h.some(y=>!this.resolver.hasKey(y))&&this.add(d),Array.isArray(h)?h[0]:h}return this.resolver.hasKey(d)||this.add({alias:d,src:d}),d}),r=this.resolver.resolve(o),l=await this._mapLoadToResolve(r,n);return a?l[o[0]]:l}addBundle(e,n){this.resolver.addBundle(e,n)}async loadBundle(e,n){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const o=this.resolver.resolveBundle(e),r={},l=Object.keys(o);let d=0,h=0;const y=()=>{n==null||n(++d/h)},u=l.map(v=>{const m=o[v];return h+=Object.keys(m).length,this._mapLoadToResolve(m,y).then(E=>{r[v]=E})});return await Promise.all(u),a?r[e[0]]:r}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const n=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(n))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const n=this.resolver.resolveBundle(e);Object.values(n).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Oe.get(e);const n={};for(let a=0;a<e.length;a++)n[a]=Oe.get(e[a]);return n}async _mapLoadToResolve(e,n){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const o=await this.loader.load(a,n);this._backgroundLoader.active=!0;const r={};return a.forEach(l=>{const d=o[l.src],h=[l.src];l.alias&&h.push(...l.alias),h.forEach(y=>{r[y]=d}),Oe.set(h,d)}),r}async unload(e){this._initialized||await this.init();const n=St(e).map(o=>typeof o!="string"?o.src:o),a=this.resolver.resolve(n);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=St(e);const n=this.resolver.resolveBundle(e),a=Object.keys(n).map(o=>this._unloadFromResolved(n[o]));await Promise.all(a)}async _unloadFromResolved(e){const n=Object.values(e);n.forEach(a=>{Oe.remove(a.src)}),await this.loader.unload(n)}async _detectFormats(e){let n=[];e.preferredFormats&&(n=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?n=await a.add(n):e.skipDetections||(n=await a.remove(n));return n=n.filter((a,o)=>n.indexOf(a)===o),n}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(n=>{n.config&&Object.keys(n.config).filter(a=>a in e).forEach(a=>{n.config[a]=e[a]})})}}const lt=new Tr;He.handleByList(M.LoadParser,lt.loader.parsers).handleByList(M.ResolveParser,lt.resolver.parsers).handleByList(M.CacheParser,lt.cache.parsers).handleByList(M.DetectionParser,lt.detections);He.add(Ui,Hi,Gi,qi,Yi,Xi,Ki,er,nr,pr,gr,ja,Er,Ni,ji,Da,Lr);const wa={loader:M.LoadParser,resolver:M.ResolveParser,cache:M.CacheParser,detection:M.DetectionParser};He.handle(M.Asset,s=>{const e=s.ref;Object.entries(wa).filter(([n])=>!!e[n]).forEach(([n,a])=>He.add(Object.assign(e[n],{extension:e[n].extension??a})))},s=>{const e=s.ref;Object.keys(wa).filter(n=>!!e[n]).forEach(n=>He.remove(e[n]))});var Rr=Z('<div class="win-label svelte-1vsph43">BIG WIN!</div> <div class="win-amount-display svelte-1vsph43"> </div>',1),Pr=_a('<use href="#sparkle" class="sparkle svelte-1vsph43"></use>'),Ir=_a('<use href="#vinyl"></use>'),Or=Z('<div><!> <svg class="vinyl-canvas svelte-1vsph43" viewBox="0 0 1024 800" xmlns="http://www.w3.org/2000/svg"><defs class="svelte-1vsph43"><symbol id="vinyl" viewBox="-200 -200 400 400" class="svelte-1vsph43"><circle cx="0" cy="0" r="180" fill="#0b0b0b" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="150" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.3" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="120" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.25" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="90" fill="none" stroke="#1a1a1a" stroke-width="1.5" opacity="0.2" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="55" fill="var(--label-color)" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="6" fill="#ffffff" class="svelte-1vsph43"></circle><ellipse cx="-15" cy="-15" rx="20" ry="15" fill="#ffffff" opacity="0.3" transform="rotate(-30)" class="svelte-1vsph43"></ellipse></symbol><symbol id="sparkle" viewBox="-12 -12 24 24" class="svelte-1vsph43"><polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ffd966" class="svelte-1vsph43"></polygon><circle cx="0" cy="0" r="2" fill="#ffffff" class="svelte-1vsph43"></circle></symbol><symbol id="confetti" viewBox="-3 -3 6 6" class="svelte-1vsph43"><circle cx="0" cy="0" r="2" fill="var(--confetti-color)" class="svelte-1vsph43"></circle></symbol></defs><!><!></svg></div>');function Cr(s,e){Vt(e,!0);let n=rt(e,"winLevel",3,"small"),a=rt(e,"winAmount",3,0),o=rt(e,"vinylStartScale",3,.01),r=rt(e,"vinylEndScale",3,.15),l=rt(e,"sparkleScale",3,.6),d=P(!1),h=P(!1);const y={small:{vinyls:5,sparkles:8,maxRadius:70},medium:{vinyls:12,sparkles:16,maxRadius:100},jackpot:{vinyls:24,sparkles:30,maxRadius:130}},u=Ue(()=>y[n()]),v=["#f04e37","#ffd966","#ff8533","#4ecdc4","#ff6b9d"];function m(D){const re=[],Re=t(u).maxRadius;for(let N=0;N<D;N++){const Y=Math.PI*2*N/D+Math.random()*.4,Ce=Math.random()*Re*.7+Re*.2;re.push({x:512+Math.cos(Y)*Ce,y:400+Math.sin(Y)*Ce,rotation:Math.random()*30-15,scale:r()*(.8+Math.random()*.4),delay:N*.05,color:v[N%v.length]})}return re}function E(D){const re=[];for(let le=0;le<D;le++)re.push({x:100+Math.random()*824,y:50+Math.random()*700,delay:Math.random()*.8,duration:.6+Math.random()*.4,rotation:Math.random()*360});return re}const T=Ue(()=>m(t(u).vinyls)),K=Ue(()=>E(t(u).sparkles));function B(){g(d,!0),g(h,!0),setTimeout(()=>{g(h,!1),setTimeout(()=>{var D;g(d,!1),(D=e.onComplete)==null||D.call(e)},500)},n()==="jackpot"?4e3:n()==="medium"?3e3:2500)}function R(){g(h,!1),setTimeout(()=>{g(d,!1)},500)}var z=Ut(),ne=Ve(z);{var ae=D=>{var re=Or();let le;var xe=w(re);{var Re=we=>{var ee=Rr(),he=f(Ve(ee),2),Je=w(he,!0);_(he),te(Pe=>q(Je,Pe),[()=>a().toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),H(we,ee)};se(xe,we=>{a()>0&&we(Re)})}var N=f(xe,2),Y=f(w(N));Ht(Y,17,()=>t(K),Gt,(we,ee)=>{var he=Pr();te(()=>x(he,"style",`
            --sx: ${t(ee).x??""}px;
            --sy: ${t(ee).y??""}px;
            --duration: ${t(ee).duration??""}s;
            --sparkle-delay: ${t(ee).delay??""}s;
            --sparkle-scale: ${l()??""};
          `)),H(we,he)});var Ce=f(Y);Ht(Ce,17,()=>t(T),Gt,(we,ee)=>{var he=Ir();let Je;te(()=>{Je=pn(he,0,"vinyl-group svelte-1vsph43",null,Je,{floating:t(h)}),x(he,"style",`
            --tx: ${t(ee).x??""}px;
            --ty: ${t(ee).y??""}px;
            --scale: ${t(ee).scale??""};
            --rotation: ${t(ee).rotation??""}deg;
            --delay: ${t(ee).delay??""}s;
            --label-color: ${t(ee).color??""};
            --start-scale: ${o()??""};
          `)}),H(we,he)}),_(N),_(re),te(()=>le=pn(re,1,"vinyl-win-container svelte-1vsph43",null,le,{visible:t(h),hiding:!t(h)})),H(D,re)};se(ne,D=>{t(d)&&D(ae)})}return H(s,z),Yt({show:B,hide:R})}var Br=Z(`<div style="
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
		"> </div></div>`),Fr=Z(`<div style="
				position: absolute;
				bottom: 40px;
				left: 50%;
				transform: translateX(-50%);
				color: #fff;
				font-family: Arial, sans-serif;
				font-size: 20px;
				text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
			">Please wait...</div>`),Mr=Z('<div role="button" tabindex="0"><span style="position: absolute; left: -9999px;">Click anywhere to continue</span> <!></div>');function Wr(s,e){Vt(e,!0);let n=P(!1),a=P(!1),o=P(!1),r=P(0);hn(()=>{const v=setInterval(()=>{g(r,t(r)+2),t(r)>=100&&(clearInterval(v),g(r,100),setTimeout(()=>{g(a,!0),setTimeout(()=>{g(o,!0)},3e3)},500))},60);return()=>clearInterval(v)});function l(){t(a)&&t(o)&&!t(n)&&(g(n,!0),setTimeout(()=>e.onloaded(),300))}var d=Ut(),h=Ve(d);{var y=v=>{var m=Br(),E=w(m);x(E,"src",`${ye??""}/loading_screen/MadCraneLogo.jpg`);var T=f(E,2),K=w(T);_(T);var B=f(T,2),R=w(B);_(B),_(m),te(z=>{x(K,"style",`
				width: ${t(r)??""}%;
				height: 100%;
				background: linear-gradient(90deg, #ff0000, #ff6600);
				transition: width 0.3s ease;
			`),q(R,`Loading... ${z??""}%`)},[()=>Math.round(t(r))]),H(v,m)},u=v=>{var m=Ut(),E=Ve(m);{var T=K=>{var B=Mr(),R=f(w(B),2);{var z=ne=>{var ae=Fr();H(ne,ae)};se(R,ne=>{t(o)||ne(z)})}_(B),te(()=>x(B,"style",`
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background-image: url('${ye??""}/loading_screen/Splash_screen_RockabillyReels.jpeg');
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			cursor: ${(t(o)?"pointer":"default")??""};
			z-index: 10000;
		`)),F("click",B,l),F("keydown",B,ne=>ne.key==="Enter"&&l()),H(K,B)};se(E,K=>{t(a)&&!t(n)&&K(T)},!0)}H(v,m)};se(h,v=>{t(a)?v(u,!1):v(y)})}H(s,d),Yt()}var zr=Go('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-dsobin"><\/script><!---->',1),jr=Z('<p style="color: red;" class="svelte-dsobin"><strong class="svelte-dsobin">Error:</strong> </p>'),Nr=Z('<div class="svelte-dsobin"> </div>'),Dr=Z('<details class="svelte-dsobin"><summary class="svelte-dsobin"> </summary> <!></details>'),Ur=Z(`<div style="
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
  " class="svelte-dsobin"><h3 class="svelte-dsobin">🎰 Oma-peli Debug</h3> <p class="svelte-dsobin"><strong class="svelte-dsobin">Status:</strong> </p> <!> <p class="svelte-dsobin"><strong class="svelte-dsobin">Base:</strong> </p> <p class="svelte-dsobin"><strong class="svelte-dsobin">BG URL:</strong> </p> <p class="svelte-dsobin"><strong class="svelte-dsobin">Sample:</strong> </p> <!></div>`),Gr=Z('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-dsobin"> </div>'),Hr=Z('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-dsobin"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-dsobin"> </span></div>'),Vr=Z(`<div style="
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
  " class="svelte-dsobin"><h2 style="margin: 0 0 10px 0; font-size: 2em;" class="svelte-dsobin">🎉 VOITTO! 🎉</h2> <div style="font-size: 1.5em; font-weight: bold; margin: 10px 0;" class="svelte-dsobin"> </div> <!> <!> <button style="
        margin-top: 15px;
        padding: 8px 16px;
        background: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
      " class="svelte-dsobin">Jatka pelaamista</button></div>`),Yr=Z(`<div class="svelte-dsobin"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-dsobin">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-dsobin">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-dsobin"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-dsobin"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-dsobin"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-dsobin">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-dsobin">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-dsobin">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-dsobin">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-dsobin"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-dsobin">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-dsobin">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-dsobin">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-dsobin">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-dsobin">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-dsobin"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-dsobin">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-dsobin">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-dsobin">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-dsobin">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-dsobin"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-dsobin">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-dsobin">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-dsobin">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-dsobin">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-dsobin"> <span style="color: #ffd700;" class="svelte-dsobin">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-dsobin">Sulje</button></div>`),Xr=Z(`<div style="
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
  " class="svelte-dsobin"><div style="
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: white;
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      border: 3px solid #ffd700;
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
      max-width: 500px;
      font-family: Arial, sans-serif;
    " class="svelte-dsobin"><h1 style="
        margin: 0 0 20px 0;
        font-size: 2.5em;
        color: #ffd700;
        text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
      " class="svelte-dsobin">🎰 VAPAAPELIT PÄÄTTYIVÄT! 🎰</h1> <div style="
        font-size: 1.2em;
        margin: 20px 0;
        color: #aaa;
      " class="svelte-dsobin">Voitit yhteensä:</div> <div style="
        font-size: 3em;
        font-weight: bold;
        color: #00ff00;
        text-shadow: 0 0 15px rgba(0, 255, 0, 0.8);
        margin: 20px 0;
      " class="svelte-dsobin"> </div> <button style="
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
        " class="svelte-dsobin">JATKA PERUSPELIIN</button></div></div>`),Kr=Z('<div class="svelte-dsobin"><div class="svelte-dsobin">🔄 Select Rounds</div> <button class="svelte-dsobin">10 Rounds</button> <button class="svelte-dsobin">25 Rounds</button> <button class="svelte-dsobin">50 Rounds</button> <button class="svelte-dsobin">100 Rounds</button> <button class="svelte-dsobin">200 Rounds</button> <button class="svelte-dsobin">500 Rounds</button> <button class="svelte-dsobin">1,000 Rounds</button> <button class="svelte-dsobin">5,000 Rounds</button> <button class="svelte-dsobin">Cancel</button></div>'),qr=Z(`<!>  <!>   <!>   <!>   <!>  <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
" class="svelte-dsobin"><div class="svelte-dsobin"><div class="svelte-dsobin"><button class="svelte-dsobin">💰 PAYTABLE</button>  <div class="control-panel-mobile svelte-dsobin"><!>  <img alt="Left End" class="svelte-dsobin"> <div class="svelte-dsobin"><div style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;" class="svelte-dsobin"><div style="display: flex; flex-direction: column; align-items: center;" class="svelte-dsobin"><div class="svelte-dsobin">BET</div> <div class="svelte-dsobin"><button title="Decrease Bet" class="svelte-dsobin"></button> <div class="svelte-dsobin"> </div> <button title="Increase Bet" class="svelte-dsobin"></button></div></div> <img alt="Divider" class="svelte-dsobin"> <div style="display: flex; flex-direction: column; align-items: center;" class="svelte-dsobin"><div class="svelte-dsobin">BALANCE</div> <div class="svelte-dsobin"><div class="svelte-dsobin"> </div></div></div> <img alt="Divider" class="svelte-dsobin"></div> <div class="svelte-dsobin"></div> <div style="position: absolute; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; z-index: 10;" class="svelte-dsobin"><div><button class="svelte-dsobin"></button></div></div> <div style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;" class="svelte-dsobin"><div class="svelte-dsobin"><button class="svelte-dsobin"></button> <img alt="Status bar" class="svelte-dsobin"></div> <img alt="Divider" class="svelte-dsobin"> <div class="svelte-dsobin"><button class="svelte-dsobin"></button> <img alt="Speed bar" class="svelte-dsobin"></div> <img alt="Divider" class="svelte-dsobin"> <div style="display: flex; flex-direction: column; align-items: center;" class="svelte-dsobin"><div class="svelte-dsobin">WIN</div> <div class="svelte-dsobin"><div class="svelte-dsobin"> </div></div></div> <img alt="Divider" class="svelte-dsobin"> <div style="display: flex; align-items: center; justify-content: center;" class="svelte-dsobin"><button title="Menu" class="svelte-dsobin"></button></div></div></div> <img alt="Right End" class="svelte-dsobin"></div></div>  <button class="svelte-dsobin"></button> <!>   <div class="debug-panel svelte-dsobin"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-dsobin">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-dsobin"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-dsobin"><span style="color: #aaa;" class="svelte-dsobin">Rounds:</span> <span style="color: #fff;" class="svelte-dsobin"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-dsobin"><span style="color: #aaa;" class="svelte-dsobin">Wagered:</span> <span style="color: #ff6666;" class="svelte-dsobin"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-dsobin"><span style="color: #aaa;" class="svelte-dsobin">Won:</span> <span style="color: #66ff66;" class="svelte-dsobin"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 10px; 
    padding-top: 10px; 
    border-top: 1px solid #555;
    font-weight: bold;
    font-size: 18px;
  " class="svelte-dsobin"><span style="color: #ffd700;" class="svelte-dsobin">RTP:</span> <span class="svelte-dsobin"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
  " class="svelte-dsobin"><span style="color: #aaa;" class="svelte-dsobin">Hit Freq:</span> <span class="svelte-dsobin"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-size: 14px;
  " class="svelte-dsobin"><span style="color: #aaa;" class="svelte-dsobin">Free Spins Triggered:</span> <span style="color: #66ccff;" class="svelte-dsobin"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 4px;
    font-size: 14px;
  " class="svelte-dsobin"><span style="color: #aaa;" class="svelte-dsobin">Free Spins Played:</span> <span style="color: #66ccff;" class="svelte-dsobin"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #555;
    font-size: 14px;
  " class="svelte-dsobin"><span style="color: #aaa;" class="svelte-dsobin">Empty Slots:</span> <span style="color: #ff9900;" class="svelte-dsobin"> </span></div> <button style="
      margin-top: 10px;
      width: 100%;
      padding: 5px;
      background: rgba(255, 100, 100, 0.3);
      color: #fff;
      border: 1px solid #ff6666;
      border-radius: 5px;
      cursor: pointer;
      font-size: 11px;
    " class="svelte-dsobin">Reset Stats</button> <div style="
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  " class="svelte-dsobin"><button class="svelte-dsobin"> </button> <button class="svelte-dsobin">Clear Win Log</button> <button class="svelte-dsobin">🎰 Test Free Spins</button></div></div> <div class="svelte-dsobin"><button class="svelte-dsobin"></button> <button class="svelte-dsobin"></button></div></div></div>`,1);function Qr(s,e){Vt(e,!0);const n="1.4.4",a=13,o=1445,r=1e3,l=1.75,d=-25,h=-15,y=175,u=-5,v=750,m=80,E=250,T=0,K=50,B=.5,R=30,z=-10,ae=Math.round(100*l),D=Math.round(ae*(700/760)),le=D+10,xe=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],Re=typeof window<"u"&&window.location.hostname.includes("github.io"),N=Re?"/web-sdk/oma-peli/symbols":`${ye}/symbols`,Y=Re?"/web-sdk/oma-peli/controls":`${ye}/controls`,Ce={a:`${N}/Blue_hotrod.jpg`,b:`${N}/Blue_jacket.jpg`,c:`${N}/Blue_rollers.jpg`,d:`${N}/Blue_speakers.jpg`,e:`${N}/Premium_blonde.jpg`,f:`${N}/Premium_brunette.jpg`,g:`${N}/Premium_rocker.jpg`,h:`${N}/New_Wild.jpg`,i:`${N}/Red_burger.jpg`,j:`${N}/Red_fries.jpg`,k:`${N}/Red_milkshake.jpg`,l:`${N}/Scatter.jpg`,emptyslot:`${N}/Emptyslot.jpg`},we=`${N}/bg_base.jpg`,ee=`${N}/ReelFrames.png`,he=`${N}/RockABillyReels_logo.png`,Je={spin:`${ye}/sounds/spin.mp3`,stop:`${ye}/sounds/stop.mp3`,win:`${ye}/sounds/win.mp3`};let Pe=P(!0),Kt={},W=null,ve=null,qt=null,Qt=null,Le=P(!0),Ua=P(!1),Jt=P(1100),Zt=null;const Ga={fast:3,medium:7,slow:18};let me=P("medium"),Be=P(Math.floor(Math.random()*20)+1);const gt={background:()=>`${ye}/music/rockabilly reels loop ${t(Be)}.mp3`,freeSpins:`${ye}/music/rockabilly-loop_long.mp3`,drumHit:`${ye}/music/drum-hit.mp3`,winTheme:`${ye}/music/win-stinger.mp3`};function xn(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(xn,500);return}const c=window.Howl;try{W=new c({src:[gt.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+t(Be)+")"),g(Ua,!0)},onloaderror:(p,k)=>{console.warn("⚠️ Background music not found:",k)}}),ve=new c({src:[gt.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(p,k)=>console.warn("⚠️ Free spins music not found:",k)}),qt=new c({src:[gt.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Qt=new c({src:[gt.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(p){console.error("Failed to initialize music system:",p)}}function wn(){const c=t(Q)?ve:W;c&&t(Le)&&!c.playing()&&(c.play(),console.log("🎵 "+(t(Q)?"Free spins":"Background")+" music started"))}function Ha(){if(t(Q))return;const c=Math.floor(Math.random()*20)+1;c===t(Be)?g(Be,c%20+1):g(Be,c),console.log("🎵 Changing to loop #"+t(Be)),W&&(W.playing()?(W.fade(W.volume(),0,200),setTimeout(()=>{W.stop(),W.unload()},200)):W.unload());const p=window.Howl;p&&(W=new p({src:[gt.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ New background music loop #"+t(Be)+" loaded"),t(Le)&&!t(Q)&&setTimeout(()=>{W&&!W.playing()&&W.play()},300)},onloaderror:(k,S)=>{console.warn("⚠️ Failed to load loop #"+t(Be)+":",S)}}))}function Va(){W&&W.playing()&&(W.fade(W.volume(),0,500),setTimeout(()=>W.stop(),500)),ve&&ve.playing()&&(ve.fade(ve.volume(),0,500),setTimeout(()=>ve.stop(),500))}function es(){W&&W.playing()&&(W.fade(W.volume(),0,500),setTimeout(()=>W.stop(),500)),ve&&ve.playing()&&(ve.fade(ve.volume(),0,500),setTimeout(()=>ve.stop(),500)),setTimeout(()=>{t(Le)&&wn()},600)}function Ya(){if(W&&W.playing()){const c=W.volume();W.fade(c,0,1e3),setTimeout(()=>{W.stop(),W.volume(.3)},1e3)}}let ts=P(!1);function Xa(){g(ts,!1),setTimeout(()=>{g(ts,!0)},10)}let Ze=null;const ss={vinylStartScale:.01,vinylEndScale:.05,sparkleScale:.1};function Ka(){g(Le,!t(Le)),t(Le)?wn():Va()}function qa(){g(Pe,!t(Pe))}function Qa(){qt&&t(Le)&&t(Pe)&&qt.play()}function Ja(){Qt&&t(Le)&&t(Pe)&&Qt.play()}let Et=null,ns=null,ht=null,Fe=null,vt=P("Initializing..."),et=P(""),_e=[],_n=P(!1),Me=P(1e3);const An=[.4,.8,1,1.6,2,3,5,8,10,15,20,25,30,40,50,60,80,100];let mt=P(5),Ae=Ue(()=>An[t(mt)]),Ye=P(0),ce=P(!1),bt=P(0),de=P(!1),as=P(!1),Za=P(0),Xe=!1,Ie=null,os=!1,tt=P(0),st=P(0),yt=P(0),is=P(0),rs=Ue(()=>t(st)>0?(t(yt)/t(st)*100).toFixed(2):"0.00"),ls=Ue(()=>t(tt)>0?(t(is)/t(tt)*100).toFixed(2):"0.00"),Q=P(!1),We=P(0),Ke=P(0),Lt=P(0),cs=P(0),Tt=P(0),ds=P(0),eo=Ue(()=>t(Tt)>0?(t(ds)/t(Tt)*100).toFixed(2):"0.00"),be=P(fe([]));function to(c,p,k){const S=new Date().toLocaleString("fi-FI");let b=`
${"=".repeat(60)}
`;b+=`ROUND #${c} - ${S}
`,b+=`Mode: ${t(Q)?"FREE SPINS":"BASE GAME"}
`,b+=`${"=".repeat(60)}
`,p.forEach(($,A)=>{b+=`
Win ${A+1}:
`,b+=`  Symbol: ${$.symbol} (${En[$.symbol]})
`,b+=`  Count: ${$.count} symbols
`,b+=`  Multiplier: ${$.multiplier}x
`,b+=`  Payout: ${$.payout.toFixed(2)}
`,b+=`  Positions: [${$.positions.join(", ")}]
`}),b+=`
${"─".repeat(60)}
`,b+=`TOTAL WIN: ${k.toFixed(2)}
`,b+=`${"=".repeat(60)}
`,t(be).push(b)}function so(){const c=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${t(be).join(`
`)}`,p=new Blob([c],{type:"text/plain"}),k=URL.createObjectURL(p),S=document.createElement("a");S.href=k,S.download=`win-log-${Date.now()}.txt`,S.click(),URL.revokeObjectURL(k)}function no(){g(be,fe([]))}function ao(){t(Q)||(g(Q,!0),g(We,10),g(Ke,0),Se(Lt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),es())}const oo={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},io={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function kn(c){if(c===6)return Math.random()<.55?"h":"emptyslot";const p=t(Q)?io:oo,k=Math.random();let S=0;const b=xe.filter(A=>A!=="h"),$=b.reduce((A,C)=>A+p[C],0);for(const A of b)if(S+=p[A]/$,k<S)return A;return"f"}function $n(){const c=[];for(let p=0;p<a;p++){const k=kn(p);c.push(k),Se(Tt),k==="emptyslot"&&Se(ds)}return c}function Sn(c){return c<3?{col:0,row:c}:c<6?{col:1,row:c-3}:c===6?{col:2,row:0}:c<10?{col:3,row:c-7}:{col:4,row:c-10}}function xt(c,p){return c===0?p:c===1?3+p:c===2?6:c===3?7+p:c===4?10+p:-1}function ro(){if(t(Q)){const c=Math.random();return c<.7?3:c<.92?5:10}else{const c=Math.random();return c<.7?1:c<.92?2:3}}const lo={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function co(){var pe;const c=[],p=[];for(let L=0;L<a;L++)wt[L]==="l"&&p.push(L);if(p.length>=5){const L=p.length;g(We,t(We)+L),t(Q)?console.log(`🎰 FREE SPINS RETRIGGERED! +${L} FREE SPINS! Total: ${t(We)}`):(g(Q,!0),g(Ke,0),Se(Lt),console.log(`🎰 FREE SPINS TRIGGERED! ${p.length} scatters = ${L} FREE SPINS!`),es()),c.push({symbol:"l",count:p.length,payout:0,positions:p,multiplier:1})}const k=[];for(let L=0;L<3;L++)for(let O=0;O<3;O++)for(let j=0;j<1;j++)for(let U=0;U<3;U++)for(let V=0;V<3;V++){const G=[xt(0,L),xt(1,O),xt(2,j),xt(3,U),xt(4,V)];k.push(G)}console.log(`Generated ${k.length} possible paths (should be 81)`);const S=[];for(const L of k){const O=L.map(G=>wt[G]);if(O[0]==="emptyslot"||O[0]==="l")continue;let j=null;for(let G=0;G<O.length;G++)if(O[G]!=="h"&&O[G]!=="emptyslot"&&O[G]!=="l"){j=O[G];break}if(!j)continue;let U=0;const V=new Set;for(let G=0;G<L.length;G++){const Ne=L[G],{col:it}=Sn(Ne),ue=O[G];(ue===j||ue==="h")&&V.add(it)}for(let G=0;G<5&&V.has(G);G++)U++;if(U>=3){const Ne=L[0]%3;S.push({symbol:j,length:U,path:L.slice(0,U),startRow:Ne})}}const b=[],$=new Map;for(const L of S){const O=`${L.symbol}-${L.path.join(",")}`;$.has(O)||$.set(O,[]),$.get(O).push(L)}for(const[L,O]of $.entries()){const j=Math.max(...O.map(V=>V.length)),U=O.find(V=>V.length===j);U&&b.push(U)}const A=[],C=new Map;for(const L of b)C.has(L.symbol)||C.set(L.symbol,[]),C.get(L.symbol).push(L);const I=[];for(const[L,O]of C.entries()){const j=Math.max(...O.map(V=>V.length)),U=O.filter(V=>V.length===j);I.push(...U)}const X=new Map;for(const L of I){const O=`${L.symbol}-${L.length}`;X.has(O)||X.set(O,[]),X.get(O).push(L)}const J=I.length>0?ro():1;for(const[L,O]of X.entries()){const j=O[0],U=(pe=lo[j.symbol])==null?void 0:pe[j.length];if(U!==void 0&&U>0){const V=new Map;for(const ue of O)for(let ie=0;ie<ue.length;ie++)V.has(ie)||V.set(ie,new Set),V.get(ie).add(ue.path[ie]);let G=1;for(let ue=0;ue<j.length;ue++){const ie=V.get(ue);G*=ie?ie.size:1}const Ne=U*t(Ae)*G*J;console.log(`  ${j.length}x${j.symbol}: ${G} ways × ${U}x × ${t(Ae)} bet × ${J} mult = ${Ne}`);const it=new Set;for(const ue of O)ue.path.forEach(ie=>it.add(ie));A.push({symbol:j.symbol,count:j.length,payout:Ne,positions:Array.from(it),multiplier:J})}}return c.push(...A),c}let ke=P(0),nt=P(fe([])),ze=P(!1),at=P(!1),ps=P(!1),us=P(0);const En={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function fs(c){if(!t(Pe)||!Kt[c])return;const p=Kt[c];p.currentTime=0,p.play().catch(k=>{console.warn("Äänen toisto epäonnistui:",c,k)})}function po(c){_t.forEach(p=>oe.stage.removeChild(p)),_t=[],c.forEach(p=>{p.positions.forEach(k=>{const S=Te[k],b=new pa().rect(0,0,ae,D).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});b.x=S.container.x,b.y=S.container.y,oe.stage.addChild(b),_t.push(b);let $=0,A=1;const C=.05;oe.ticker.add(()=>{$+=A*C,$>=.4&&(A=-1),$<=0&&(A=1),b.alpha=.5+$})})})}function gs(){_t.forEach(c=>oe.stage.removeChild(c)),_t=[]}let wt=$n(),hs,oe,Te=[],_t=[];class uo{constructor(p,k){$e(this,"index");$e(this,"container");$e(this,"offset",0);$e(this,"speed",0);$e(this,"targetSpeed",30);$e(this,"state","idle");$e(this,"stopDelay",0);$e(this,"bounceOffset",0);$e(this,"bounceSpeed",0);$e(this,"bounceFrames",0);this.index=p,this.container=k}start(p){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=p}startSynchronized(p){const k=Ga[t(me)],S=60+p*k;this.start(S)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const p=t(me)==="slow"?.88:t(me)==="medium"?.92:.95;this.speed*=p,this.speed<2.5&&(this.state="bouncing",this.speed=0,this.offset=0,this.bounceOffset=0,this.bounceSpeed=4,fs("stop"),Qa())}this.state==="bouncing"&&(this.bounceSpeed*=.8,this.bounceOffset+=this.bounceSpeed,Math.abs(this.bounceSpeed)<.2&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=le&&(this.offset=0,wt[this.index]=kn(this.index)))}}draw(){const p=this.container;p.removeChildren();const k=wt[this.index];if(!k||!Et||!Et[k])return;const S=this.offset+this.bounceOffset,b=($,A)=>{const C=Et[$];if(!C)return;const I=new sn(C);I.width=ae,I.height=D,I.x=0,I.y=A,p.addChild(I)};b(k,S-le),b(k,S),b(k,S+le)}}let i=P(1);hn(async()=>{oe=new Fa,await oe.init({width:o,height:r,backgroundAlpha:0}),hs.appendChild(oe.canvas);const c=()=>{const b=window.innerWidth,$=window.innerHeight,A=b/o,C=$/r,I=Math.min(A,C,1);g(i,fe(I)),oe.stage.scale.set(I),oe.renderer.resize(o,r)};c(),window.addEventListener("resize",c);const p=b=>{(b.code==="Space"||b.key===" ")&&(b.preventDefault(),Te.some(A=>A.state==="spinning"||A.state==="slowing")?(Te.forEach(A=>{A.state==="spinning"?(A.stopDelay=0,A.state="slowing",A.speed=A.targetSpeed*.5):A.state==="slowing"&&(A.speed=A.speed*.3)}),console.log("⚡ Skip spin - kiekot pysähtyvät nopeasti")):vs())};window.addEventListener("keydown",p);const k={};try{g(vt,"Loading background and UI images..."),_e.push(`Loading background: ${we}`),_e.push(`Loading reel frames: ${ee}`),_e.push(`Loading logo: ${he}`),await lt.load([{alias:"background",src:we},{alias:"reelframes",src:ee},{alias:"logo",src:he}]),ns=qe.from("background"),ht=qe.from("reelframes"),Fe=qe.from("logo"),console.log("✅ Background texture created:",ns.width,"x",ns.height),console.log("✅ Reel frames texture created:",ht.width,"x",ht.height),console.log("✅ Logo texture created:",Fe.width,"x",Fe.height),_e.push("✅ All UI images loaded"),g(vt,"Loading symbols...");const b=[];for(const $ of xe)b.push({alias:$,src:Ce[$]});await lt.load(b);for(const $ of xe){const A=Ce[$];_e.push(`Loading symbol ${$}: ${A}`);try{const C=qe.from($);k[$]=C,console.log(`✅ Symbol ${$} loaded:`,C.width,"x",C.height),_e.push(`✅ Symbol ${$} loaded`)}catch(C){const I=`❌ Failed to load symbol ${$} from ${A}: ${C}`;throw _e.push(I),console.error(I),new Error(I)}}Et=k,g(vt,"Assets loaded successfully!")}catch(b){g(et,`Asset loading failed: ${b}`),_e.push(t(et)),console.error(t(et));return}console.log("Ladataan ääniefektit...");for(const[b,$]of Object.entries(Je)){const A=new Audio;A.src=$,A.preload="auto",A.volume=.7,A.load(),A.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${$} (käytetään hiljaista placeholderia)`)}),Kt[b]=A}[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(b=>({x:b.x+d,y:b.y+h})),Te=[];for(let b=0;b<a;b++){const $=Sn(b),A=$.col,C=$.row,I=300+A*(ae+20),X=250+C*(D+15),J=b===6?I+u:I,pe=b===6?X+y:X,L=new vn;L.x=J+d,L.y=pe+h;const O=new pa().rect(0,0,ae,D).fill(16777215);O.x=L.x,O.y=L.y,L.mask=O,oe.stage.addChild(O),oe.stage.addChild(L),Te.push(new uo(b,L))}if(ht){const b=new sn(ht);b.scale.set(1),b.x=250,b.y=200,oe.stage.addChild(b),Zt=b,g(Jt,fe(b.width)),console.log("Reel frames lisätty:",b.width.toFixed(0),"x",b.height.toFixed(0)),console.log("Control panel leveys päivitetty:",t(Jt).toFixed(0))}if(Fe){Fe.source&&(Fe.source.scaleMode="linear",Fe.source.antialias=!0);const b=new sn(Fe);b.scale.set(B),b.x=(oe.renderer.width-b.width)/2+R,b.y=z,oe.stage.addChild(b),console.log("Logo lisätty päällimmäiseen layeriin:",b.width.toFixed(0),"x",b.height.toFixed(0))}xn(),oe.ticker.add(fo)});function fo(){for(const c of Te)c.update(),c.draw();if(!t(ze)&&!os&&Te.every(c=>c.state==="stopped")){os=!0,Ya();const c=co();console.log(`Checking wins, found ${c.length} wins`),c.length>0?(g(nt,fe(c)),g(ke,fe(c.reduce((p,k)=>p+k.payout,0))),to(t(tt),c,t(ke)),ho(t(ke)),g(ze,!0),g(Za,fe(Date.now())),console.log(`🎉 VOITTO! ${t(ke)} pistettä! Uusi saldo: ${t(Me)}`),console.log(`isShowingWin set to: ${t(ze)}, totalWin: ${t(ke)}`),c.forEach(p=>{const k=p.multiplier?` (${p.multiplier}x multiplier)`:"";console.log(`${p.count}x ${p.symbol} = ${p.payout} pistettä${k}`)}),po(c),fs("win"),t(ce)&&!Xe&&(Xe=!0,Ie=window.setTimeout(()=>{t(ze)&&t(ce)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),g(ze,!1),gs()),Ie=window.setTimeout(()=>{Xe=!1,ms()},200)},1500))):(console.log("No wins found this spin"),t(ce)&&!Xe&&(Xe=!0,Ie=window.setTimeout(()=>{Xe=!1,ms()},500))),t(Q)&&t(We)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${t(Ke)}`),setTimeout(()=>{g(us,fe(t(Ke))),g(ps,!0)},2e3))}}function vs(){if(t(Q)||Ha(),Xa(),t(Q)&&t(We)>0)Se(We,-1),Se(cs),console.log(`🎰 FREE SPIN! Remaining: ${t(We)}`);else if(!t(Q)){if(t(Me)<t(Ae)){alert(`Not enough credits! Balance: ${t(Me)}, Bet: ${t(Ae)}`),Rt();return}g(Me,t(Me)-t(Ae)),Se(tt),g(st,t(st)+t(Ae))}Ie!==null&&(clearTimeout(Ie),Ie=null),g(nt,fe([])),g(ke,0),g(Ye,0),console.log("🔄 lastWin nollattu: "+t(Ye)),g(ze,!1),os=!1,gs(),wt=$n(),Te.forEach((c,p)=>{c.startSynchronized(p)}),fs("spin")}function go(c,p,k=1400){if(typeof window>"u")return;const S=document.getElementById("winLabel");if(!S)return;S.classList.add("rolling");const b=performance.now(),$=p-c,A=I=>1-Math.pow(1-I,3);function C(I){const X=Math.min(1,(I-b)/k),J=c+$*A(X);g(Ye,J),X<1?requestAnimationFrame(C):(g(Ye,fe(p)),S.classList.remove("rolling"),S.classList.add("winHit"),setTimeout(()=>S.classList.remove("winHit"),450))}requestAnimationFrame(C)}function ho(c){g(Me,t(Me)+c),g(yt,t(yt)+c);const p=t(Ye);g(Ye,fe(c));const k=c>t(Ae)*50?2e3:1400;if(go(p,c,k),t(Q)&&g(Ke,t(Ke)+c),c>0){Se(is);const S=c/t(Ae);S>=10&&Ja(),Ze&&(S>=50?Ze.show():S>=20?setTimeout(()=>Ze.show(),200):S>=10&&setTimeout(()=>Ze.show(),400))}}function vo(){t(mt)<An.length-1&&Se(mt)}function mo(){t(mt)>0&&Se(mt,-1)}function je(c){g(ce,!0),g(bt,fe(c)),g(de,!1),ms()}function Rt(){g(ce,!1),g(bt,0),Xe=!1,Ie!==null&&(clearTimeout(Ie),Ie=null)}function ms(){if(!t(ce)||t(bt)<=0){Rt();return}console.log(`Autoplay: Starting spin ${t(bt)} rounds left`),vs(),Se(bt,-1)}function bo(){confirm("Reset all statistics?")&&(g(tt,0),g(st,0),g(yt,0),g(is,0),g(Lt,0),g(cs,0),g(Tt,0),g(ds,0))}var Ln=qr();Uo(c=>{var p=zr();f(Ve(p)),H(c,p)});var Tn=Ve(Ln);{var yo=c=>{Wr(c,{onloaded:()=>g(_n,!0)})};se(Tn,c=>{t(_n)||c(yo)})}var Rn=f(Tn,2);{var xo=c=>{var p=Ur(),k=f(w(p),2),S=f(w(k));_(k);var b=f(k,2);{var $=j=>{var U=jr(),V=f(w(U));_(U),te(()=>q(V,` ${t(et)??""}`)),H(j,U)};se(b,j=>{t(et)&&j($)})}var A=f(b,2),C=f(w(A));C.nodeValue=` ${ye??""}`,_(A);var I=f(A,2),X=f(w(I));X.nodeValue=` ${we??""}`,_(I);var J=f(I,2),pe=f(w(J));_(J);var L=f(J,2);{var O=j=>{var U=Dr(),V=w(U),G=w(V);_(V);var Ne=f(V,2);Ht(Ne,17,()=>_e,Gt,(it,ue)=>{var ie=Nr(),Wo=w(ie,!0);_(ie),te(()=>q(Wo,t(ue))),H(it,ie)}),_(U),te(()=>q(G,`Log (${_e.length??""})`)),H(j,U)};se(L,j=>{_e.length>0&&j(O)})}_(p),te(()=>{q(S,` ${t(vt)??""}`),q(pe,` ${Ce.a??""}`)}),H(c,p)};se(Rn,c=>{(t(vt)!=="Assets loaded successfully!"||t(et))&&c(xo)})}var Pn=f(Rn,2);{var wo=c=>{var p=Vr(),k=f(w(p),2),S=w(k);_(k);var b=f(k,2);Ht(b,17,()=>t(nt),Gt,(I,X)=>{var J=Gr(),pe=w(J);_(J),te(L=>q(pe,`${t(X).count??""} × ${En[t(X).symbol]??""} = ${L??""} pistettä`),[()=>t(X).payout.toFixed(2)]),H(I,J)});var $=f(b,2);{var A=I=>{var X=Hr(),J=w(X),pe=w(J);_(J),_(X),te(()=>q(pe,`✨ ${t(nt)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),H(I,X)};se($,I=>{t(nt).length>0&&t(nt)[0].multiplier>1&&I(A)})}var C=f($,2);_(p),te(I=>q(S,`${I??""} pistettä`),[()=>t(ke).toFixed(2)]),F("click",C,()=>{g(ze,!1),gs(),console.log("Win popup closed, ready for next spin")}),H(c,p)};se(Pn,c=>{t(ke)>0&&t(ze)&&c(wo)})}var In=f(Pn,2);{var _o=c=>{var p=Yr(),k=f(w(p),8);_(p),te(S=>x(p,"style",`
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
  `),[()=>Math.min(r*t(i)*.8,80*window.innerHeight/100)]),F("click",k,()=>{g(at,!1)}),H(c,p)};se(In,c=>{t(at)&&c(_o)})}var On=f(In,2);{var Ao=c=>{var p=Xr(),k=w(p),S=f(w(k),4),b=w(S,!0);_(S);var $=f(S,2);_(k),_(p),te(A=>q(b,A),[()=>t(us).toFixed(2)]),F("click",$,()=>{g(ps,!1),g(Q,!1),g(Ke,0),g(us,0),es()}),F("mouseenter",$,A=>{A.currentTarget.style.transform="scale(1.05)",A.currentTarget.style.boxShadow="0 6px 20px rgba(255, 215, 0, 0.6)"}),F("mouseleave",$,A=>{A.currentTarget.style.transform="scale(1)",A.currentTarget.style.boxShadow="0 4px 15px rgba(255, 215, 0, 0.4)"}),H(c,p)};se(On,c=>{t(ps)&&c(Ao)})}var Cn=f(On,2),bs=w(Cn),At=w(bs);x(At,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${o}px;
        height: ${r}px;
      `);var ys=w(At),xs=f(ys,2),Bn=w(xs);{var ko=c=>{var p=Kr(),k=w(p),S=f(k,2),b=f(S,2),$=f(b,2),A=f($,2),C=f(A,2),I=f(C,2),X=f(I,2),J=f(X,2),pe=f(J,2);_(p),te(()=>{x(p,"style",`
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
  `),x(k,"style",`color: white; font-weight: bold; margin-bottom: ${15*t(i)}px; text-align: center; font-size: ${18*t(i)}px;`),x(S,"style",`
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
      `),x(b,"style",`
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
      `),x($,"style",`
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
      `),x(A,"style",`
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
      `),x(C,"style",`
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
      `),x(I,"style",`
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
      `),x(X,"style",`
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
      `),x(J,"style",`
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
      `),x(pe,"style",`
        width: 100%;
        padding: ${10*t(i)}px;
        background: rgba(255, 255, 255, 0.1);
        color: #aaa;
        border: ${1*t(i)}px solid #555;
        border-radius: ${8*t(i)}px;
        cursor: pointer;
        font-size: ${14*t(i)}px;
      `)}),F("click",S,()=>{je(10),g(de,!1)}),F("click",b,()=>{je(25),g(de,!1)}),F("click",$,()=>{je(50),g(de,!1)}),F("click",A,()=>{je(100),g(de,!1)}),F("click",C,()=>{je(200),g(de,!1)}),F("click",I,()=>{je(500),g(de,!1)}),F("click",X,()=>{je(1e3),g(de,!1)}),F("click",J,()=>{je(5e3),g(de,!1)}),F("click",pe,()=>{g(de,!1)}),H(c,p)};se(Bn,c=>{t(de)&&c(ko)})}var ws=f(Bn,2);x(ws,"src",`${Y??""}/Control_leftend.png`);var Pt=f(ws,2),_s=w(Pt),As=w(_s),Fn=w(As),ks=f(Fn,2),$s=w(ks),It=f($s,2),$o=w(It,!0);_(It);var Mn=f(It,2);_(ks),_(As);var Ss=f(As,2);x(Ss,"src",`${Y??""}/Control_divider.png`);var Es=f(Ss,2),Wn=w(Es),Ls=f(Wn,2),Ts=w(Ls),So=w(Ts,!0);_(Ts),_(Ls),_(Es);var zn=f(Es,2);x(zn,"src",`${Y??""}/Control_divider.png`),_(_s);var jn=f(_s,2),Rs=f(jn,2),Ps=w(Rs),Is=w(Ps);_(Ps),_(Rs);var Nn=f(Rs,2),Ot=w(Nn),Ct=w(Ot),Dn=f(Ct,2);_(Ot);var Os=f(Ot,2);x(Os,"src",`${Y??""}/Control_divider.png`);var Bt=f(Os,2),Ft=w(Bt),Un=f(Ft,2);_(Bt);var Cs=f(Bt,2);x(Cs,"src",`${Y??""}/Control_divider.png`);var Bs=f(Cs,2),Gn=w(Bs),Fs=f(Gn,2),Ms=w(Fs),Eo=w(Ms,!0);_(Ms),_(Fs),_(Bs);var Ws=f(Bs,2);x(Ws,"src",`${Y??""}/Control_divider.png`);var Hn=f(Ws,2),Vn=w(Hn);_(Hn),_(Nn),_(Pt);var Yn=f(Pt,2);x(Yn,"src",`${Y??""}/Control_rightend.png`),_(xs),_(At),ca(At,c=>hs=c,()=>hs);var Mt=f(At,2);Mt.textContent=`🛠️ DEBUG v${n}`;var Xn=f(Mt,2);const Lo=Ue(()=>t(ke)/t(Ae)>=50?"jackpot":t(ke)/t(Ae)>=20?"medium":"small");ca(Cr(Xn,{get winLevel(){return t(Lo)},get winAmount(){return t(ke)},get vinylStartScale(){return ss.vinylStartScale},get vinylEndScale(){return ss.vinylEndScale},get sparkleScale(){return ss.sparkleScale}}),c=>Ze=c,()=>Ze);var Wt=f(Xn,2),Kn=f(w(Wt),2);Kn.textContent=`v${n}`;var zs=f(Kn,2),qn=f(w(zs),2),To=w(qn,!0);_(qn),_(zs);var js=f(zs,2),Qn=f(w(js),2),Ro=w(Qn,!0);_(Qn),_(js);var Ns=f(js,2),Jn=f(w(Ns),2),Po=w(Jn,!0);_(Jn),_(Ns);var Ds=f(Ns,2),Us=f(w(Ds),2),Io=w(Us);_(Us),_(Ds);var Gs=f(Ds,2),Hs=f(w(Gs),2),Oo=w(Hs);_(Hs),_(Gs);var Vs=f(Gs,2),Zn=f(w(Vs),2),Co=w(Zn,!0);_(Zn),_(Vs);var Ys=f(Vs,2),ea=f(w(Ys),2),Bo=w(ea,!0);_(ea),_(Ys);var Xs=f(Ys,2),ta=f(w(Xs),2),Fo=w(ta);_(ta),_(Xs);var sa=f(Xs,2),na=f(sa,2),ot=w(na),Mo=w(ot);_(ot);var zt=f(ot,2),Ks=f(zt,2);_(na),_(Wt);var qs=f(Wt,2),jt=w(qs),Qs=f(jt,2);_(qs),_(bs),_(Cn),te((c,p,k,S,b,$,A,C)=>{x(bs,"style",`
    position: relative;
    width: ${o*t(i)}px;
    height: ${r*t(i)}px;
  `),x(ys,"style",`
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
        `),x(xs,"style",`
        position: absolute;
        left: ${((Zt?Zt.x:E)+T)*t(i)}px;
        top: ${(v+K)*t(i)}px;
        width: ${t(Jt)*t(i)}px;
        height: ${m*t(i)}px;
        display: flex;
        align-items: center;
        z-index: 1000;
      `),x(ws,"style",`height: ${m*t(i)}px; flex-shrink: 0;`),x(Pt,"style",`
    flex-grow: 1;
    height: ${m*t(i)}px;
    background-image: url('${Y??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    padding: 0 ${20*t(i)}px;
    position: relative;
    gap: ${20*t(i)}px;
  `),x(Fn,"style",`color: #00ff00; font-size: ${12*t(i)}px; font-weight: bold; line-height: 1; height: ${16*t(i)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(i)}px;`),x(ks,"style",`display: flex; gap: ${5*t(i)}px; align-items: center; height: ${44*t(i)}px;`),x($s,"style",`
              width: ${40*t(i)}px;
              height: ${40*t(i)}px;
              background-image: url('${Y??""}/Control_lowerbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            `),x(It,"style",`
            color: #fff;
            font-size: ${18*t(i)}px;
            font-weight: bold;
            min-width: ${80*t(i)}px;
            text-align: center;
            font-family: 'Courier New', monospace;
          `),q($o,c),x(Mn,"style",`
              width: ${40*t(i)}px;
              height: ${40*t(i)}px;
              background-image: url('${Y??""}/Control_upperbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            `),x(Ss,"style",`height: ${m*.8*t(i)}px; flex-shrink: 0;`),x(Wn,"style",`color: #00ff00; font-size: ${12*t(i)}px; font-weight: bold; line-height: 1; height: ${16*t(i)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(i)}px;`),x(Ls,"style",`height: ${44*t(i)}px; display: flex; align-items: center;`),x(Ts,"style",`
            color: #fff;
            font-size: ${20*t(i)}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
          `),q(So,p),x(zn,"style",`height: ${m*.8*t(i)}px; flex-shrink: 0;`),x(jn,"style",`flex-shrink: 0; width: ${130*t(i)}px;`),pn(Ps,1,`play-button-wrapper ${(t(ts)?"glare-animate":"")??""}`,"svelte-dsobin"),x(Is,"style",`
            width: ${110*t(i)}px;
            height: ${110*t(i)}px;
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
          `),x(Is,"title",t(ce)?"STOP AUTOPLAY":"SPIN"),x(Ot,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*t(i)}px;`),x(Ct,"style",`
            width: ${50*t(i)}px;
            height: ${50*t(i)}px;
            background-image: url('${Y??""}/${(t(ce)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(Ct,"title",t(ce)?"Stop Autoplay":"Autoplay"),x(Dn,"src",`${Y??""}/${(t(ce)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),x(Dn,"style",`height: ${10*t(i)}px; width: auto; display: block;`),x(Os,"style",`height: ${m*.8*t(i)}px; flex-shrink: 0;`),x(Bt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*t(i)}px;`),x(Ft,"style",`
            width: ${50*t(i)}px;
            height: ${50*t(i)}px;
            background-image: url('${Y??""}/Control_fastplay_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(Ft,"title",`Spin Speed: ${(t(me)==="slow"?"Slow":t(me)==="medium"?"Medium":"Fast")??""}`),x(Un,"src",`${Y??""}/${(t(me)==="slow"?"Control_bar_deselect.png":t(me)==="medium"?"Control_half_bar_select.png":"Control_bar_select.png")??""}`),x(Un,"style",`height: ${10*t(i)}px; width: auto; display: block;`),x(Cs,"style",`height: ${m*.8*t(i)}px; flex-shrink: 0;`),x(Gn,"style",`color: #00ff00; font-size: ${12*t(i)}px; font-weight: bold; line-height: 1; height: ${16*t(i)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(i)}px;`),x(Fs,"style",`height: ${44*t(i)}px; display: flex; align-items: center;`),x(Ms,"style",`
            color: #fff;
            font-size: ${20*t(i)}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
          `),q(Eo,k),x(Ws,"style",`height: ${m*.8*t(i)}px; flex-shrink: 0;`),x(Vn,"style",`
            width: ${50*t(i)}px;
            height: ${50*t(i)}px;
            background-image: url('${Y??""}/Control_menubar.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(Yn,"style",`height: ${m*t(i)}px; flex-shrink: 0;`),x(Mt,"style",`
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
  `),x(Wt,"style",`
  position: absolute;
  top: 20px;
  left: 20px;
  display: ${(t(as)?"block":"none")??""};
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
`),q(To,S),q(Ro,b),q(Po,$),x(Us,"style",`color: ${A??""};`),q(Io,`${t(rs)??""}%`),x(Hs,"style",`color: ${C??""};`),q(Oo,`${t(ls)??""}%`),q(Co,t(Lt)),q(Bo,t(cs)),q(Fo,`${t(eo)??""}%`),ot.disabled=t(be).length===0,x(ot,"style",`
        width: 100%;
        padding: 5px;
        background: ${(t(be).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(t(be).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(t(be).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(t(be).length>0?"1":"0.5")??""};
      `),q(Mo,`Download Win Log (${t(be).length??""})`),zt.disabled=t(be).length===0,x(zt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(t(be).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(t(be).length>0?"1":"0.5")??""};
      `),Ks.disabled=t(Q),x(Ks,"style",`
        width: 100%;
        padding: 5px;
        background: ${(t(Q)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(t(Q)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(t(Q)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(t(Q)?"0.5":"1")??""};
      `),x(qs,"style",`
  position: absolute;
  top: ${10*t(i)}px;
  right: ${10*t(i)}px;
  display: flex;
  gap: ${10*t(i)}px;
  z-index: 1001;
`),x(jt,"style",`
      width: ${50*t(i)}px;
      height: ${50*t(i)}px;
      background-image: url('${Y??""}/${(t(Le)?"music_on.png":"music_off.png")??""}');
      background-size: contain;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
      background-color: transparent;
    `),x(jt,"title",t(Le)?"Music: ON":"Music: OFF"),x(Qs,"style",`
      width: ${50*t(i)}px;
      height: ${50*t(i)}px;
      background-image: url('${Y??""}/${(t(Pe)?"sounds_on.png":"sounds_off.png")??""}');
      background-size: contain;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
      background-color: transparent;
    `),x(Qs,"title",t(Pe)?"Sound: ON":"Sound: OFF")},[()=>t(Ae).toFixed(2),()=>t(Me).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>t(Ye).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>t(tt).toLocaleString(),()=>t(st).toLocaleString(),()=>t(yt).toLocaleString(),()=>parseFloat(t(rs))>=95?"#00ff00":parseFloat(t(rs))>=85?"#ffff00":"#ff6666",()=>parseFloat(t(ls))>=30?"#00ff00":parseFloat(t(ls))>=20?"#ffff00":"#ff6666"]),F("click",ys,()=>{g(at,!t(at))}),F("click",$s,mo),F("click",Mn,vo),F("click",Is,()=>{t(ce)?Rt():Te.some(p=>p.state==="spinning"||p.state==="slowing")?Te.forEach(p=>{p.state==="spinning"?(p.stopDelay=0,p.state="slowing",p.speed=p.targetSpeed*.5):p.state==="slowing"&&(p.speed=p.speed*.3)}):vs()}),F("click",Ct,()=>{t(ce)?Rt():g(de,!t(de))}),F("click",Ft,()=>{t(me)==="slow"?g(me,"medium"):t(me)==="medium"?g(me,"fast"):g(me,"slow")}),F("click",Vn,()=>{g(at,!t(at))}),F("click",Mt,()=>{g(as,!t(as))}),F("click",sa,bo),F("click",ot,so),F("click",zt,no),F("click",Ks,ao),F("click",jt,Ka),F("click",Qs,qa),H(s,Ln),Yt()}var Jr=Z('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),Zr=Z('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function el(s,e){Vt(e,!1);let n=rt(e,"isAuthenticated",12,!1),a=ln(""),o=ln(!1);const r="slot2024";function l(){t(a)===r?(n(!0),sessionStorage.setItem("gameAuthenticated","true")):(g(o,!0),g(a,""),setTimeout(()=>g(o,!1),3e3))}hn(()=>{n(sessionStorage.getItem("gameAuthenticated")==="true")}),Ho();var d=Ut(),h=Ve(d);{var y=u=>{var v=Zr(),m=w(v),E=f(w(m),4),T=w(E);Ei(T),vi(2),_(E);var K=f(E,2);{var B=R=>{var z=Jr();H(R,z)};se(K,R=>{t(o)&&R(B)})}_(m),_(v),Ti(T,()=>t(a),R=>g(a,R)),F("submit",E,Ri(l)),H(u,v)};se(h,u=>{n()||u(y)})}H(s,d),Yt()}var tl=Z("<!> <!>",1);function fl(s){let e=ln(!1);var n=tl(),a=Ve(n);el(a,{get isAuthenticated(){return t(e)},set isAuthenticated(l){g(e,l)},$$legacy:!0});var o=f(a,2);{var r=l=>{Qr(l,{})};se(o,l=>{t(e)&&l(r)})}H(s,n)}export{Ia as A,Ta as C,Wi as R,Oi as S,Oa as V,fl as _,Ii as u};
