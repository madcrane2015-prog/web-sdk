const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CnZxlV2z.js","./Cb0119l1.js","./BrW7ntrJ.js","./Fx7Xcyif.js","./CkL9UklL.js","./C2GHuDhf.js","./dfHp4ml0.js","./DvzPmpoi.js"])))=>i.map(i=>d[i]);
var Wn=Object.defineProperty;var jn=(t,e,a)=>e in t?Wn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var $e=(t,e,a)=>jn(t,typeof e!="symbol"?e+"":e,a);import{g as zn,l as Nn,e as bo,a as Q,t as te,n as yo,i as Dn,j as Un,k as C}from"./CYP10W50.js";import{i as Gn}from"./DqfWCwGf.js";import{y as Ee,j as Hn,a8 as Vn,F as s,Q as Yn,aa as Xn,ab as eo,h as to,e as Vs,k as kt,l as Kn,ac as wo,w as _o,ad as qn,q as ko,a7 as Qn,U as Jn,a2 as so,ar as Ys,z as ao,as as Zn,at as er,au as tr,o as sr,av as ar,aw as or,ax as nr,ay as rr,b as ir,az as lr,aA as cr,a6 as dr,aB as pr,aC as ur,D as fr,L as hr,p as la,f as it,ah as I,a as ca,T as x,c as w,s as u,r as _,t as oe,I as ze,ag as Ao,aD as Se,aE as gr,aF as ta}from"./Fx7Xcyif.js";import{_ as oo,i as ce,p as ve}from"./BrW7ntrJ.js";import{s as D}from"./DpmsE3qB.js";import{p as at,b as no}from"./C4w3i6Q0.js";import{b as Te}from"./gT0lAAV_.js";import{e as De,E as O,a as vr,C as da,Q as sa,V as aa,N as Xs,D as de,H as mr,p as He,a0 as lt,a1 as Ve,a2 as xr,w as Ne,a3 as $t,a4 as $o,a5 as ct,a6 as Pe,a7 as Gt,a8 as So,a9 as br,aa as Ks,y as qs}from"./Cb0119l1.js";import{A as yr,B as ro,G as wr,a as io}from"./CkL9UklL.js";function Dt(t,e){return e}function _r(t,e,a,o){for(var n=[],i=e.length,l=0;l<i;l++)tr(e[l].e,n,!0);var d=i>0&&n.length===0&&a!==null;if(d){var h=a.parentNode;sr(h),h.append(a),o.clear(),je(t,e[0].prev,e[i-1].next)}ar(n,()=>{for(var v=0;v<i;v++){var p=e[v];d||(o.delete(p.k),je(t,p.prev,p.next)),or(p.e,!d)}})}function Ut(t,e,a,o,n,i=null){var l=t,d={flags:e,items:new Map,first:null};Ee&&Hn();var h=null,v=!1,p=Yn(()=>{var b=a();return Qn(b)?b:b==null?[]:ko(b)});Vn(()=>{var b=s(p),m=b.length;if(v&&m===0)return;v=m===0;let L=!1;if(Ee){var T=l.data===Xn;T!==(m===0)&&(l=eo(),to(l),Vs(!1),L=!0)}if(Ee){for(var Z=null,K,R=0;R<m;R++){if(kt.nodeType===8&&kt.data===Kn){l=kt,L=!0,Vs(!1);break}var U=b[R],Le=o(U,R);K=Eo(kt,d,Z,null,U,Le,R,n,e,a),d.items.set(Le,K),Z=K}m>0&&to(eo())}Ee||kr(b,d,l,n,e,o,a),i!==null&&(m===0?h?wo(h):h=_o(()=>i(l)):h!==null&&qn(h,()=>{h=null})),L&&Vs(!0),s(p)}),Ee&&(l=kt)}function kr(t,e,a,o,n,i,l){var d=t.length,h=e.items,v=e.first,p=v,b,m=null,L=[],T=[],Z,K,R,U;for(U=0;U<d;U+=1){if(Z=t[U],K=i(Z,U),R=h.get(K),R===void 0){var Le=p?p.e.nodes_start:a;m=Eo(Le,e,m,m===null?e.first:m.next,Z,K,U,o,n,l),h.set(K,m),L=[],T=[],p=m.next;continue}if(Ar(R,Z,U),(R.e.f&Ys)!==0&&wo(R.e),R!==p){if(b!==void 0&&b.has(R)){if(L.length<T.length){var ne=T[0],W;m=ne.prev;var re=L[0],pe=L[L.length-1];for(W=0;W<L.length;W+=1)lo(L[W],ne,a);for(W=0;W<T.length;W+=1)b.delete(T[W]);je(e,re.prev,pe.next),je(e,m,re),je(e,pe,ne),p=ne,m=pe,U-=1,L=[],T=[]}else b.delete(R),lo(R,p,a),je(e,R.prev,R.next),je(e,R,m===null?e.first:m.next),je(e,m,R),m=R;continue}for(L=[],T=[];p!==null&&p.k!==K;)(p.e.f&Ys)===0&&(b??(b=new Set)).add(p),T.push(p),p=p.next;if(p===null)continue;R=p}L.push(R),m=R,p=R.next}if(p!==null||b!==void 0){for(var me=b===void 0?[]:ko(b);p!==null;)(p.e.f&Ys)===0&&me.push(p),p=p.next;var Re=me.length;if(Re>0){var M=null;_r(e,me,M,h)}}ao.first=e.first&&e.first.e,ao.last=m&&m.e}function Ar(t,e,a,o){er(t.v,e),t.i=a}function Eo(t,e,a,o,n,i,l,d,h,v){var p=(h&nr)!==0,b=(h&rr)===0,m=p?b?Jn(n):so(n):n,L=(h&Zn)===0?l:so(l),T={i:L,v:m,k:i,a:null,e:null,prev:a,next:o};try{return T.e=_o(()=>d(t,m,L,v),Ee),T.e.prev=a&&a.e,T.e.next=o&&o.e,a===null?e.first=T:(a.next=T,a.e.next=T.e),o!==null&&(o.prev=T,o.e.prev=T.e),T}finally{}}function lo(t,e,a){for(var o=t.next?t.next.e.nodes_start:a,n=e?e.e.nodes_start:a,i=t.e.nodes_start;i!==o;){var l=ir(i);n.before(i),i=l}}function je(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}const co=[...` 	
\r\f \v\uFEFF`];function $r(t,e,a){var o=t==null?"":""+t;if(e&&(o=o?o+" "+e:e),a){for(var n in a)if(a[n])o=o?o+" "+n:n;else if(o.length)for(var i=n.length,l=0;(l=o.indexOf(n,l))>=0;){var d=l+i;(l===0||co.includes(o[l-1]))&&(d===o.length||co.includes(o[d]))?o=(l===0?"":o.substring(0,l))+o.substring(d+1):l=d}}return o===""?null:o}function oa(t,e,a,o,n,i){var l=t.__className;if(Ee||l!==a){var d=$r(a,o,i);(!Ee||d!==t.getAttribute("class"))&&(d==null?t.removeAttribute("class"):e?t.className=d:t.setAttribute("class",d)),t.__className=a}else if(i)for(var h in i){var v=!!i[h];(n==null||v!==!!n[h])&&t.classList.toggle(h,v)}return i}function Sr(t){if(Ee){var e=!1,a=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var o=t.value;y(t,"value",null),t.value=o}if(t.hasAttribute("checked")){var n=t.checked;y(t,"checked",null),t.checked=n}}};t.__on_r=a,lr(a),zn()}}function y(t,e,a,o){var n=t.__attributes??(t.__attributes={});Ee&&(n[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||n[e]!==(n[e]=a)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[cr]=a),a==null?t.removeAttribute(e):typeof a!="string"&&Er(t).includes(e)?t[e]=a:t.setAttribute(e,a))}var po=new Map;function Er(t){var e=po.get(t.nodeName);if(e)return e;po.set(t.nodeName,e=[]);for(var a,o=t,n=Element.prototype;n!==o;){a=pr(o);for(var i in a)a[i].set&&e.push(i);o=dr(o)}return e}function Lr(t,e,a=e){var o=ur();Nn(t,"input",n=>{var i=n?t.defaultValue:t.value;if(i=Qs(t)?Js(i):i,a(i),o&&i!==(i=e())){var l=t.selectionStart,d=t.selectionEnd;t.value=i??"",d!==null&&(t.selectionStart=l,t.selectionEnd=Math.min(d,t.value.length))}}),(Ee&&t.defaultValue!==t.value||fr(e)==null&&t.value)&&a(Qs(t)?Js(t.value):t.value),hr(()=>{var n=e();Qs(t)&&n===Js(t.value)||t.type==="date"&&!n&&!t.value||n!==t.value&&(t.value=n??"")})}function Qs(t){var e=t.type;return e==="number"||e==="range"}function Js(t){return t===""?null:+t}function Tr(t){return function(...e){var a=e[0];return a.preventDefault(),t==null?void 0:t.apply(this,e)}}const na=[];De.handleByNamedList(O.Environment,na);async function Rr(t){if(!t)for(let e=0;e<na.length;e++){const a=na[e];if(a.value.test()){await a.value.load();return}}}let At;function Ir(){if(typeof At=="boolean")return At;try{At=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{At=!1}return At}var Lo=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(Lo||{});class Pr{constructor(e){this.items=[],this._name=e}emit(e,a,o,n,i,l,d,h){const{name:v,items:p}=this;for(let b=0,m=p.length;b<m;b++)p[b][v](e,a,o,n,i,l,d,h);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const a=this.items.indexOf(e);return a!==-1&&this.items.splice(a,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Or=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],To=class Ro extends vr{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const a=[...Or,...this.config.runners??[]];this._addRunners(...a),this._unsafeEvalCheck()}async init(e={}){const a=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Rr(a),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const o in this._systemsHash)e={...this._systemsHash[o].constructor.defaultOptions,...e};e={...Ro.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let o=0;o<this.runners.init.items.length;o++)await this.runners.init.items[o].init(e);this._initOptions=e}render(e,a){let o=e;if(o instanceof da&&(o={container:o},a&&(sa(aa,"passing a second argument is deprecated, please use render options instead"),o.target=a.renderTexture)),o.target||(o.target=this.view.renderTarget),o.target===this.view.renderTarget&&(this._lastObjectRendered=o.container,o.clearColor??(o.clearColor=this.background.colorRgba),o.clear??(o.clear=this.background.clearBeforeRender)),o.clearColor){const n=Array.isArray(o.clearColor)&&o.clearColor.length===4;o.clearColor=n?o.clearColor:Xs.shared.setValue(o.clearColor).toArray()}o.transform||(o.container.updateLocalTransform(),o.transform=o.container.localTransform),o.container.enableRenderGroup(),this.runners.prerender.emit(o),this.runners.renderStart.emit(o),this.runners.render.emit(o),this.runners.renderEnd.emit(o),this.runners.postrender.emit(o)}resize(e,a,o){const n=this.view.resolution;this.view.resize(e,a,o),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),o!==void 0&&o!==n&&this.runners.resolutionChange.emit(o)}clear(e={}){const a=this;e.target||(e.target=a.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Lo.ALL);const{clear:o,clearColor:n,target:i}=e;Xs.shared.setValue(n??this.background.colorRgba),a.renderTarget.clear(i,o,Xs.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(a=>{this.runners[a]=new Pr(a)})}_addSystems(e){let a;for(a in e){const o=e[a];this._addSystem(o.value,o.name)}}_addSystem(e,a){const o=new e(this);if(this[a])throw new Error(`Whoops! The name "${a}" is already in use`);this[a]=o,this._systemsHash[a]=o;for(const n in this.runners)this.runners[n].add(o);return this}_addPipes(e,a){const o=a.reduce((n,i)=>(n[i.name]=i.value,n),{});e.forEach(n=>{const i=n.value,l=n.name,d=o[l];this.renderPipes[l]=new i(this,d?new d:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(a=>{a.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Ir())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};To.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Io=To,zt;function Br(t){return zt!==void 0||(zt=(()=>{var a;const e={stencil:!0,failIfMajorPerformanceCaveat:t??Io.defaultOptions.failIfMajorPerformanceCaveat};try{if(!de.get().getWebGLRenderingContext())return!1;let n=de.get().createCanvas().getContext("webgl",e);const i=!!((a=n==null?void 0:n.getContextAttributes())!=null&&a.stencil);if(n){const l=n.getExtension("WEBGL_lose_context");l&&l.loseContext()}return n=null,i}catch{return!1}})()),zt}let Nt;async function Cr(t={}){return Nt!==void 0||(Nt=await(async()=>{const e=de.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),Nt}const uo=["webgl","webgpu","canvas"];async function Fr(t){let e=[];t.preference?(e.push(t.preference),uo.forEach(i=>{i!==t.preference&&e.push(i)})):e=uo.slice();let a,o={};for(let i=0;i<e.length;i++){const l=e[i];if(l==="webgpu"&&await Cr()){const{WebGPURenderer:d}=await oo(async()=>{const{WebGPURenderer:h}=await import("./CnZxlV2z.js");return{WebGPURenderer:h}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);a=d,o={...t,...t.webgpu};break}else if(l==="webgl"&&Br(t.failIfMajorPerformanceCaveat??Io.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:d}=await oo(async()=>{const{WebGLRenderer:h}=await import("./DvzPmpoi.js");return{WebGLRenderer:h}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);a=d,o={...t,...t.webgl};break}else if(l==="canvas")throw o={...t},new Error("CanvasRenderer is not yet implemented")}if(delete o.webgpu,delete o.webgl,!a)throw new Error("No available renderer for the current environment");const n=new a;return await n.init(o),n}const Po="8.8.1";class Oo{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Po)}static destroy(){}}Oo.extension=O.Application;class Mr{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Po)}destroy(){this._renderer=null}}Mr.extension={type:[O.WebGLSystem,O.WebGPUSystem],name:"initHook",priority:-10};const Bo=class ra{constructor(...e){this.stage=new da,e[0]!==void 0&&sa(aa,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Fr(e),ra._plugins.forEach(a=>{a.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return sa(aa,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,a=!1){const o=ra._plugins.slice(0);o.reverse(),o.forEach(n=>{n.destroy.call(this)}),this.stage.destroy(a),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Bo._plugins=[];let Co=Bo;De.handleByList(O.Application,Co._plugins);De.add(Oo);class Fo extends yr{constructor(e,a){super();const{textures:o,data:n}=e;Object.keys(n.pages).forEach(i=>{const l=n.pages[parseInt(i,10)],d=o[l.id];this.pages.push({texture:d})}),Object.keys(n.chars).forEach(i=>{const l=n.chars[i],{frame:d,source:h}=o[l.page],v=new mr(l.x+d.x,l.y+d.y,l.width,l.height),p=new He({source:h,frame:v});this.chars[i]={id:i.codePointAt(0),xOffset:l.xOffset,yOffset:l.yOffset,xAdvance:l.xAdvance,kerning:l.kerning??{},texture:p}}),this.baseRenderedFontSize=n.fontSize,this.baseMeasurementFontSize=n.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:n.fontSize},this.baseLineOffset=n.baseLineOffset,this.lineHeight=n.lineHeight,this.fontFamily=n.fontFamily,this.distanceField=n.distanceField??{type:"none",range:0},this.url=a}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:a}=this.pages[e];a.destroy(!0)}this.pages=null}static install(e){ro.install(e)}static uninstall(e){ro.uninstall(e)}}const Zs={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),a={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const b in e){const m=e[b].match(/^[a-z]+/gm)[0],L=e[b].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),T={};for(const Z in L){const K=L[Z].split("="),R=K[0],U=K[1].replace(/"/gm,""),Le=parseFloat(U),ne=isNaN(Le)?U:Le;T[R]=ne}a[m].push(T)}const o={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[n]=a.info,[i]=a.common,[l]=a.distanceField??[];l&&(o.distanceField={range:parseInt(l.distanceRange,10),type:l.fieldType}),o.fontSize=parseInt(n.size,10),o.fontFamily=n.face,o.lineHeight=parseInt(i.lineHeight,10);const d=a.page;for(let b=0;b<d.length;b++)o.pages.push({id:parseInt(d[b].id,10)||0,file:d[b].file});const h={};o.baseLineOffset=o.lineHeight-parseInt(i.base,10);const v=a.char;for(let b=0;b<v.length;b++){const m=v[b],L=parseInt(m.id,10);let T=m.letter??m.char??String.fromCharCode(L);T==="space"&&(T=" "),h[L]=T,o.chars[T]={id:L,page:parseInt(m.page,10)||0,x:parseInt(m.x,10),y:parseInt(m.y,10),width:parseInt(m.width,10),height:parseInt(m.height,10),xOffset:parseInt(m.xoffset,10),yOffset:parseInt(m.yoffset,10),xAdvance:parseInt(m.xadvance,10),kerning:{}}}const p=a.kerning||[];for(let b=0;b<p.length;b++){const m=parseInt(p[b].first,10),L=parseInt(p[b].second,10),T=parseInt(p[b].amount,10);o.chars[h[L]].kerning[h[m]]=T}return o}},fo={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},a=t.getElementsByTagName("info")[0],o=t.getElementsByTagName("common")[0],n=t.getElementsByTagName("distanceField")[0];n&&(e.distanceField={type:n.getAttribute("fieldType"),range:parseInt(n.getAttribute("distanceRange"),10)});const i=t.getElementsByTagName("page"),l=t.getElementsByTagName("char"),d=t.getElementsByTagName("kerning");e.fontSize=parseInt(a.getAttribute("size"),10),e.fontFamily=a.getAttribute("face"),e.lineHeight=parseInt(o.getAttribute("lineHeight"),10);for(let v=0;v<i.length;v++)e.pages.push({id:parseInt(i[v].getAttribute("id"),10)||0,file:i[v].getAttribute("file")});const h={};e.baseLineOffset=e.lineHeight-parseInt(o.getAttribute("base"),10);for(let v=0;v<l.length;v++){const p=l[v],b=parseInt(p.getAttribute("id"),10);let m=p.getAttribute("letter")??p.getAttribute("char")??String.fromCharCode(b);m==="space"&&(m=" "),h[b]=m,e.chars[m]={id:b,page:parseInt(p.getAttribute("page"),10)||0,x:parseInt(p.getAttribute("x"),10),y:parseInt(p.getAttribute("y"),10),width:parseInt(p.getAttribute("width"),10),height:parseInt(p.getAttribute("height"),10),xOffset:parseInt(p.getAttribute("xoffset"),10),yOffset:parseInt(p.getAttribute("yoffset"),10),xAdvance:parseInt(p.getAttribute("xadvance"),10),kerning:{}}}for(let v=0;v<d.length;v++){const p=parseInt(d[v].getAttribute("first"),10),b=parseInt(d[v].getAttribute("second"),10),m=parseInt(d[v].getAttribute("amount"),10);e.chars[h[b]].kerning[h[p]]=m}return e}},ho={test(t){return typeof t=="string"&&t.includes("<font>")?fo.test(de.get().parseXML(t)):!1},parse(t){return fo.parse(de.get().parseXML(t))}},Wr=[".xml",".fnt"],jr={extension:{type:O.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof Fo,getCacheableAssets(t,e){const a={};return t.forEach(o=>{a[o]=e,a[`${o}-bitmap`]=e}),a[`${e.fontFamily}-bitmap`]=e,a}},zr={extension:{type:O.LoadParser,priority:lt.Normal},name:"loadBitmapFont",test(t){return Wr.includes(Ve.extname(t).toLowerCase())},async testParse(t){return Zs.test(t)||ho.test(t)},async parse(t,e,a){const o=Zs.test(t)?Zs.parse(t):ho.parse(t),{src:n}=e,{pages:i}=o,l=[],d=o.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let b=0;b<i.length;++b){const m=i[b].file;let L=Ve.join(Ve.dirname(n),m);L=xr(L,n),l.push({src:L,data:d})}const h=await a.load(l),v=l.map(b=>h[b.src]);return new Fo({data:o,textures:v},n)},async load(t,e){return await(await de.get().fetch(t)).text()},async unload(t,e,a){await Promise.all(t.pages.map(o=>a.unload(o.texture.source._sourceOrigin))),t.destroy()}};class Nr{constructor(e,a=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=a}add(e){e.forEach(a=>{this._assetList.push(a)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],a=Math.min(this._assetList.length,this._maxConcurrent);for(let o=0;o<a;o++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Dr={extension:{type:O.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof He),getCacheableAssets:(t,e)=>{const a={};return t.forEach(o=>{e.forEach((n,i)=>{a[o+(i===0?"":i+1)]=n})}),a}};async function Mo(t){if("Image"in globalThis)return new Promise(e=>{const a=new Image;a.onload=()=>{e(!0)},a.onerror=()=>{e(!1)},a.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Ur={extension:{type:O.DetectionParser,priority:1},test:async()=>Mo("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},go=["png","jpg","jpeg"],Gr={extension:{type:O.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...go],remove:async t=>t.filter(e=>!go.includes(e))},Hr="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function pa(t){return Hr?!1:document.createElement("video").canPlayType(t)!==""}const Vr={extension:{type:O.DetectionParser,priority:0},test:async()=>pa("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},Yr={extension:{type:O.DetectionParser,priority:0},test:async()=>pa("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},Xr={extension:{type:O.DetectionParser,priority:0},test:async()=>pa("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},Kr={extension:{type:O.DetectionParser,priority:0},test:async()=>Mo("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class qr{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,a,o)=>(this._parsersValidated=!1,e[a]=o,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,a){const o={promise:null,parser:null};return o.promise=(async()=>{var l,d;let n=null,i=null;if(a.loadParser&&(i=this._parserHash[a.loadParser],i||Ne(`[Assets] specified load parser "${a.loadParser}" not found while loading ${e}`)),!i){for(let h=0;h<this.parsers.length;h++){const v=this.parsers[h];if(v.load&&((l=v.test)!=null&&l.call(v,e,a,this))){i=v;break}}if(!i)return Ne(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}n=await i.load(e,a,this),o.parser=i;for(let h=0;h<this.parsers.length;h++){const v=this.parsers[h];v.parse&&v.parse&&await((d=v.testParse)==null?void 0:d.call(v,n,a,this))&&(n=await v.parse(n,a,this)||n,o.parser=v)}return n})(),o}async load(e,a){this._parsersValidated||this._validateParsers();let o=0;const n={},i=$o(e),l=$t(e,v=>({alias:[v],src:v,data:{}})),d=l.length,h=l.map(async v=>{const p=Ve.toAbsolute(v.src);if(!n[v.src])try{this.promiseCache[p]||(this.promiseCache[p]=this._getLoadPromiseAndParser(p,v)),n[v.src]=await this.promiseCache[p].promise,a&&a(++o/d)}catch(b){throw delete this.promiseCache[p],delete n[v.src],new Error(`[Loader.load] Failed to load ${p}.
${b}`)}});return await Promise.all(h),i?n[l[0].src]:n}async unload(e){const o=$t(e,n=>({alias:[n],src:n})).map(async n=>{var d,h;const i=Ve.toAbsolute(n.src),l=this.promiseCache[i];if(l){const v=await l.promise;delete this.promiseCache[i],await((h=(d=l.parser)==null?void 0:d.unload)==null?void 0:h.call(d,v,n,this))}});await Promise.all(o)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,a)=>(a.name?e[a.name]&&Ne(`[Assets] loadParser name conflict "${a.name}"`):Ne("[Assets] loadParser should have a name"),{...e,[a.name]:a}),{})}}function dt(t,e){if(Array.isArray(e)){for(const a of e)if(t.startsWith(`data:${a}`))return!0;return!1}return t.startsWith(`data:${e}`)}const Qr=".json",Jr="application/json",Zr={extension:{type:O.LoadParser,priority:lt.Low},name:"loadJson",test(t){return dt(t,Jr)||ct(t,Qr)},async load(t){return await(await de.get().fetch(t)).json()}},ei=".txt",ti="text/plain",si={name:"loadTxt",extension:{type:O.LoadParser,priority:lt.Low,name:"loadTxt"},test(t){return dt(t,ti)||ct(t,ei)},async load(t){return await(await de.get().fetch(t)).text()}},ai=["normal","bold","100","200","300","400","500","600","700","800","900"],oi=[".ttf",".otf",".woff",".woff2"],ni=["font/ttf","font/otf","font/woff","font/woff2"],ri=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function ii(t){const e=Ve.extname(t),n=Ve.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(d=>d.charAt(0).toUpperCase()+d.slice(1));let i=n.length>0;for(const d of n)if(!d.match(ri)){i=!1;break}let l=n.join(" ");return i||(l=`"${l.replace(/[\\"]/g,"\\$&")}"`),l}const li=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function ci(t){return li.test(t)?t:encodeURI(t)}const di={extension:{type:O.LoadParser,priority:lt.Low},name:"loadWebFont",test(t){return dt(t,ni)||ct(t,oi)},async load(t,e){var o,n,i;const a=de.get().getFontFaceSet();if(a){const l=[],d=((o=e.data)==null?void 0:o.family)??ii(t),h=((i=(n=e.data)==null?void 0:n.weights)==null?void 0:i.filter(p=>ai.includes(p)))??["normal"],v=e.data??{};for(let p=0;p<h.length;p++){const b=h[p],m=new FontFace(d,`url(${ci(t)})`,{...v,weight:b});await m.load(),a.add(m),l.push(m)}return Pe.set(`${d}-and-url`,{url:t,fontFaces:l}),l.length===1?l[0]:l}return Ne("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{Pe.remove(`${e.family}-and-url`),de.get().getFontFaceSet().delete(e)})}};function ua(t,e=1){var o;const a=(o=Gt.RETINA_PREFIX)==null?void 0:o.exec(t);return a?parseFloat(a[1]):e}function fa(t,e,a){t.label=a,t._sourceOrigin=a;const o=new He({source:t,label:a}),n=()=>{delete e.promiseCache[a],Pe.has(a)&&Pe.remove(a)};return o.source.once("destroy",()=>{e.promiseCache[a]&&(Ne("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),n())}),o.once("destroy",()=>{t.destroyed||(Ne("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),n())}),o}const pi=".svg",ui="image/svg+xml",fi={extension:{type:O.LoadParser,priority:lt.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return dt(t,ui)||ct(t,pi)},async load(t,e,a){var o;return((o=e.data)==null?void 0:o.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?gi(t):hi(t,e,a,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function hi(t,e,a,o){var K,R,U;const i=await(await de.get().fetch(t)).blob(),l=URL.createObjectURL(i),d=new Image;d.src=l,d.crossOrigin=o,await d.decode(),URL.revokeObjectURL(l);const h=document.createElement("canvas"),v=h.getContext("2d"),p=((K=e.data)==null?void 0:K.resolution)||ua(t),b=((R=e.data)==null?void 0:R.width)??d.width,m=((U=e.data)==null?void 0:U.height)??d.height;h.width=b*p,h.height=m*p,v.drawImage(d,0,0,b*p,m*p);const{parseAsGraphicsContext:L,...T}=e.data??{},Z=new So({resource:h,alphaMode:"premultiply-alpha-on-upload",resolution:p,...T});return fa(Z,a,t)}async function gi(t){const a=await(await de.get().fetch(t)).text(),o=new wr;return o.svg(a),o}const vi=`(function () {
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
`;let nt=null,ia=class{constructor(){nt||(nt=URL.createObjectURL(new Blob([vi],{type:"application/javascript"}))),this.worker=new Worker(nt)}};ia.revokeObjectURL=function(){nt&&(URL.revokeObjectURL(nt),nt=null)};const mi=`(function () {
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
`;let rt=null;class Wo{constructor(){rt||(rt=URL.createObjectURL(new Blob([mi],{type:"application/javascript"}))),this.worker=new Worker(rt)}}Wo.revokeObjectURL=function(){rt&&(URL.revokeObjectURL(rt),rt=null)};let vo=0,ea;class xi{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:a}=new ia;a.addEventListener("message",o=>{a.terminate(),ia.revokeObjectURL(),e(o.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,a){var o;return this._run("loadImageBitmap",[e,(o=a==null?void 0:a.data)==null?void 0:o.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){ea===void 0&&(ea=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<ea&&(this._createdWorkers++,e=new Wo().worker,e.addEventListener("message",a=>{this._complete(a.data),this._returnWorker(a.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,a){await this._initWorkers();const o=new Promise((n,i)=>{this._queue.push({id:e,arguments:a,resolve:n,reject:i})});return this._next(),o}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const a=this._queue.pop(),o=a.id;this._resolveHash[vo]={resolve:a.resolve,reject:a.reject},e.postMessage({data:a.arguments,uuid:vo++,id:o})}}const mo=new xi,bi=[".jpeg",".jpg",".png",".webp",".avif"],yi=["image/jpeg","image/png","image/webp","image/avif"];async function wi(t,e){var n;const a=await de.get().fetch(t);if(!a.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${a.status} ${a.statusText}`);const o=await a.blob();return((n=e==null?void 0:e.data)==null?void 0:n.alphaMode)==="premultiplied-alpha"?createImageBitmap(o,{premultiplyAlpha:"none"}):createImageBitmap(o)}const jo={name:"loadTextures",extension:{type:O.LoadParser,priority:lt.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return dt(t,yi)||ct(t,bi)},async load(t,e,a){var i;let o=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await mo.isImageBitmapSupported()?o=await mo.loadImageBitmap(t,e):o=await wi(t,e):o=await new Promise((l,d)=>{o=new Image,o.crossOrigin=this.config.crossOrigin,o.src=t,o.complete?l(o):(o.onload=()=>{l(o)},o.onerror=d)});const n=new So({resource:o,alphaMode:"premultiply-alpha-on-upload",resolution:((i=e.data)==null?void 0:i.resolution)||ua(t),...e.data});return fa(n,a,t)},unload(t){t.destroy(!0)}},zo=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],_i=zo.map(t=>`video/${t.substring(1)}`);function ki(t,e,a){a===void 0&&!e.startsWith("data:")?t.crossOrigin=$i(e):a!==!1&&(t.crossOrigin=typeof a=="string"?a:"anonymous")}function Ai(t){return new Promise((e,a)=>{t.addEventListener("canplaythrough",o),t.addEventListener("error",n),t.load();function o(){i(),e()}function n(l){i(),a(l)}function i(){t.removeEventListener("canplaythrough",o),t.removeEventListener("error",n)}})}function $i(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const a=new URL(t,document.baseURI);return a.hostname!==e.hostname||a.port!==e.port||a.protocol!==e.protocol?"anonymous":""}const Si={name:"loadVideo",extension:{type:O.LoadParser,name:"loadVideo"},test(t){const e=dt(t,_i),a=ct(t,zo);return e||a},async load(t,e,a){var h,v;const o={...Ks.defaultOptions,resolution:((h=e.data)==null?void 0:h.resolution)||ua(t),alphaMode:((v=e.data)==null?void 0:v.alphaMode)||await br(),...e.data},n=document.createElement("video"),i={preload:o.autoLoad!==!1?"auto":void 0,"webkit-playsinline":o.playsinline!==!1?"":void 0,playsinline:o.playsinline!==!1?"":void 0,muted:o.muted===!0?"":void 0,loop:o.loop===!0?"":void 0,autoplay:o.autoPlay!==!1?"":void 0};Object.keys(i).forEach(p=>{const b=i[p];b!==void 0&&n.setAttribute(p,b)}),o.muted===!0&&(n.muted=!0),ki(n,t,o.crossorigin);const l=document.createElement("source");let d;if(t.startsWith("data:"))d=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const p=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();d=Ks.MIME_TYPES[p]||`video/${p}`}return l.src=t,d&&(l.type=d),new Promise(p=>{const b=async()=>{const m=new Ks({...o,resource:n});n.removeEventListener("canplay",b),e.data.preload&&await Ai(n),p(fa(m,a,t))};n.addEventListener("canplay",b),n.appendChild(l)})},unload(t){t.destroy(!0)}},No={extension:{type:O.ResolveParser,name:"resolveTexture"},test:jo.test,parse:t=>{var e;return{resolution:parseFloat(((e=Gt.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},Ei={extension:{type:O.ResolveParser,priority:-2,name:"resolveJson"},test:t=>Gt.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:No.parse};class Li{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Gt,this.loader=new qr,this.cache=Pe,this._backgroundLoader=new Nr(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var i,l;if(this._initialized){Ne("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let d=e.manifest;typeof d=="string"&&(d=await this.load(d)),this.resolver.addManifest(d)}const a=((i=e.texturePreference)==null?void 0:i.resolution)??1,o=typeof a=="number"?[a]:a,n=await this._detectFormats({preferredFormats:(l=e.texturePreference)==null?void 0:l.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:n,resolution:o}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,a){this._initialized||await this.init();const o=$o(e),n=$t(e).map(d=>{if(typeof d!="string"){const h=this.resolver.getAlias(d);return h.some(v=>!this.resolver.hasKey(v))&&this.add(d),Array.isArray(h)?h[0]:h}return this.resolver.hasKey(d)||this.add({alias:d,src:d}),d}),i=this.resolver.resolve(n),l=await this._mapLoadToResolve(i,a);return o?l[n[0]]:l}addBundle(e,a){this.resolver.addBundle(e,a)}async loadBundle(e,a){this._initialized||await this.init();let o=!1;typeof e=="string"&&(o=!0,e=[e]);const n=this.resolver.resolveBundle(e),i={},l=Object.keys(n);let d=0,h=0;const v=()=>{a==null||a(++d/h)},p=l.map(b=>{const m=n[b];return h+=Object.keys(m).length,this._mapLoadToResolve(m,v).then(L=>{i[b]=L})});return await Promise.all(p),o?i[e[0]]:i}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(a))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolveBundle(e);Object.values(a).forEach(o=>{this._backgroundLoader.add(Object.values(o))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Pe.get(e);const a={};for(let o=0;o<e.length;o++)a[o]=Pe.get(e[o]);return a}async _mapLoadToResolve(e,a){const o=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const n=await this.loader.load(o,a);this._backgroundLoader.active=!0;const i={};return o.forEach(l=>{const d=n[l.src],h=[l.src];l.alias&&h.push(...l.alias),h.forEach(v=>{i[v]=d}),Pe.set(h,d)}),i}async unload(e){this._initialized||await this.init();const a=$t(e).map(n=>typeof n!="string"?n.src:n),o=this.resolver.resolve(a);await this._unloadFromResolved(o)}async unloadBundle(e){this._initialized||await this.init(),e=$t(e);const a=this.resolver.resolveBundle(e),o=Object.keys(a).map(n=>this._unloadFromResolved(a[n]));await Promise.all(o)}async _unloadFromResolved(e){const a=Object.values(e);a.forEach(o=>{Pe.remove(o.src)}),await this.loader.unload(a)}async _detectFormats(e){let a=[];e.preferredFormats&&(a=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const o of e.detections)e.skipDetections||await o.test()?a=await o.add(a):e.skipDetections||(a=await o.remove(a));return a=a.filter((o,n)=>a.indexOf(o)===n),a}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(a=>{a.config&&Object.keys(a.config).filter(o=>o in e).forEach(o=>{a.config[o]=e[o]})})}}const ot=new Li;De.handleByList(O.LoadParser,ot.loader.parsers).handleByList(O.ResolveParser,ot.resolver.parsers).handleByList(O.CacheParser,ot.cache.parsers).handleByList(O.DetectionParser,ot.detections);De.add(Dr,Gr,Ur,Kr,Vr,Yr,Xr,Zr,si,di,fi,jo,Si,zr,jr,No,Ei);const xo={loader:O.LoadParser,resolver:O.ResolveParser,cache:O.CacheParser,detection:O.DetectionParser};De.handle(O.Asset,t=>{const e=t.ref;Object.entries(xo).filter(([a])=>!!e[a]).forEach(([a,o])=>De.add(Object.assign(e[a],{extension:e[a].extension??o})))},t=>{const e=t.ref;Object.keys(xo).filter(a=>!!e[a]).forEach(a=>De.remove(e[a]))});var Ti=te('<div class="win-label svelte-1vsph43">BIG WIN!</div> <div class="win-amount-display svelte-1vsph43"> </div>',1),Ri=yo('<use href="#sparkle" class="sparkle svelte-1vsph43"></use>'),Ii=yo('<use href="#vinyl"></use>'),Pi=te('<div><!> <svg class="vinyl-canvas svelte-1vsph43" viewBox="0 0 1024 800" xmlns="http://www.w3.org/2000/svg"><defs class="svelte-1vsph43"><symbol id="vinyl" viewBox="-200 -200 400 400" class="svelte-1vsph43"><circle cx="0" cy="0" r="180" fill="#0b0b0b" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="150" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.3" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="120" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.25" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="90" fill="none" stroke="#1a1a1a" stroke-width="1.5" opacity="0.2" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="55" fill="var(--label-color)" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="6" fill="#ffffff" class="svelte-1vsph43"></circle><ellipse cx="-15" cy="-15" rx="20" ry="15" fill="#ffffff" opacity="0.3" transform="rotate(-30)" class="svelte-1vsph43"></ellipse></symbol><symbol id="sparkle" viewBox="-12 -12 24 24" class="svelte-1vsph43"><polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ffd966" class="svelte-1vsph43"></polygon><circle cx="0" cy="0" r="2" fill="#ffffff" class="svelte-1vsph43"></circle></symbol><symbol id="confetti" viewBox="-3 -3 6 6" class="svelte-1vsph43"><circle cx="0" cy="0" r="2" fill="var(--confetti-color)" class="svelte-1vsph43"></circle></symbol></defs><!><!></svg></div>');function Oi(t,e){la(e,!0);let a=at(e,"winLevel",3,"small"),o=at(e,"winAmount",3,0),n=at(e,"vinylStartScale",3,.01),i=at(e,"vinylEndScale",3,.15),l=at(e,"sparkleScale",3,.6),d=I(!1),h=I(!1);const v={small:{vinyls:5,sparkles:8,maxRadius:70},medium:{vinyls:12,sparkles:16,maxRadius:100},jackpot:{vinyls:24,sparkles:30,maxRadius:130}},p=ze(()=>v[a()]),b=["#f04e37","#ffd966","#ff8533","#4ecdc4","#ff6b9d"];function m(W){const re=[],Re=s(p).maxRadius;for(let M=0;M<W;M++){const Y=Math.PI*2*M/W+Math.random()*.4,Oe=Math.random()*Re*.7+Re*.2;re.push({x:512+Math.cos(Y)*Oe,y:400+Math.sin(Y)*Oe,rotation:Math.random()*30-15,scale:i()*(.8+Math.random()*.4),delay:M*.05,color:b[M%b.length]})}return re}function L(W){const re=[];for(let pe=0;pe<W;pe++)re.push({x:100+Math.random()*824,y:50+Math.random()*700,delay:Math.random()*.8,duration:.6+Math.random()*.4,rotation:Math.random()*360});return re}const T=ze(()=>m(s(p).vinyls)),Z=ze(()=>L(s(p).sparkles));function K(){x(d,!0),x(h,!0),setTimeout(()=>{x(h,!1),setTimeout(()=>{var W;x(d,!1),(W=e.onComplete)==null||W.call(e)},500)},a()==="jackpot"?4e3:a()==="medium"?3e3:2500)}function R(){x(h,!1),setTimeout(()=>{x(d,!1)},500)}var U=bo(),Le=it(U);{var ne=W=>{var re=Pi();let pe;var me=w(re);{var Re=xe=>{var ee=Ti(),ue=u(it(ee),2),Ye=w(ue,!0);_(ue),oe(be=>D(Ye,be),[()=>o().toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),Q(xe,ee)};ce(me,xe=>{o()>0&&xe(Re)})}var M=u(me,2),Y=u(w(M));Ut(Y,17,()=>s(Z),Dt,(xe,ee)=>{var ue=Ri();oe(()=>y(ue,"style",`
            --sx: ${s(ee).x??""}px;
            --sy: ${s(ee).y??""}px;
            --duration: ${s(ee).duration??""}s;
            --sparkle-delay: ${s(ee).delay??""}s;
            --sparkle-scale: ${l()??""};
          `)),Q(xe,ue)});var Oe=u(Y);Ut(Oe,17,()=>s(T),Dt,(xe,ee)=>{var ue=Ii();let Ye;oe(()=>{Ye=oa(ue,0,"vinyl-group svelte-1vsph43",null,Ye,{floating:s(h)}),y(ue,"style",`
            --tx: ${s(ee).x??""}px;
            --ty: ${s(ee).y??""}px;
            --scale: ${s(ee).scale??""};
            --rotation: ${s(ee).rotation??""}deg;
            --delay: ${s(ee).delay??""}s;
            --label-color: ${s(ee).color??""};
            --start-scale: ${n()??""};
          `)}),Q(xe,ue)}),_(M),_(re),oe(()=>pe=oa(re,1,"vinyl-win-container svelte-1vsph43",null,pe,{visible:s(h),hiding:!s(h)})),Q(W,re)};ce(Le,W=>{s(d)&&W(ne)})}return Q(t,U),ca({show:K,hide:R})}var Bi=Un('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-o2kwxd"><\/script><!---->',1),Ci=te('<p style="color: red;" class="svelte-o2kwxd"><strong class="svelte-o2kwxd">Error:</strong> </p>'),Fi=te('<div class="svelte-o2kwxd"> </div>'),Mi=te('<details class="svelte-o2kwxd"><summary class="svelte-o2kwxd"> </summary> <!></details>'),Wi=te(`<div style="
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
  " class="svelte-o2kwxd"><h3 class="svelte-o2kwxd">🎰 Oma-peli Debug</h3> <p class="svelte-o2kwxd"><strong class="svelte-o2kwxd">Status:</strong> </p> <!> <p class="svelte-o2kwxd"><strong class="svelte-o2kwxd">Base:</strong> </p> <p class="svelte-o2kwxd"><strong class="svelte-o2kwxd">BG URL:</strong> </p> <p class="svelte-o2kwxd"><strong class="svelte-o2kwxd">Sample:</strong> </p> <!></div>`),ji=te('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-o2kwxd"> </div>'),zi=te('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-o2kwxd"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-o2kwxd"> </span></div>'),Ni=te(`<div style="
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
      " class="svelte-o2kwxd">Jatka pelaamista</button></div>`),Di=te(`<div class="svelte-o2kwxd"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-o2kwxd">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-o2kwxd">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-o2kwxd"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-o2kwxd"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-o2kwxd"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-o2kwxd">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-o2kwxd"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-o2kwxd">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-o2kwxd"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-o2kwxd">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-o2kwxd"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-o2kwxd">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-o2kwxd">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-o2kwxd"> <span style="color: #ffd700;" class="svelte-o2kwxd">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-o2kwxd">Sulje</button></div>`),Ui=te(`<div style="
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
        " class="svelte-o2kwxd">JATKA PERUSPELIIN</button></div></div>`),Gi=te('<div class="svelte-o2kwxd"><div class="svelte-o2kwxd">🔄 Select Rounds</div> <button class="svelte-o2kwxd">10 Rounds</button> <button class="svelte-o2kwxd">25 Rounds</button> <button class="svelte-o2kwxd">50 Rounds</button> <button class="svelte-o2kwxd">100 Rounds</button> <button class="svelte-o2kwxd">200 Rounds</button> <button class="svelte-o2kwxd">500 Rounds</button> <button class="svelte-o2kwxd">1,000 Rounds</button> <button class="svelte-o2kwxd">5,000 Rounds</button> <button class="svelte-o2kwxd">Cancel</button></div>'),Hi=te(`<!>   <!>   <!>   <!>  <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
" class="svelte-o2kwxd"><div class="svelte-o2kwxd"><div class="svelte-o2kwxd"><button class="svelte-o2kwxd">💰 PAYTABLE</button>  <div class="control-panel-mobile svelte-o2kwxd"><!>  <img alt="Left End" class="svelte-o2kwxd"> <div class="svelte-o2kwxd"><div style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;" class="svelte-o2kwxd"><div style="display: flex; flex-direction: column; align-items: center;" class="svelte-o2kwxd"><div class="svelte-o2kwxd">BET</div> <div class="svelte-o2kwxd"><button title="Decrease Bet" class="svelte-o2kwxd"></button> <div class="svelte-o2kwxd"> </div> <button title="Increase Bet" class="svelte-o2kwxd"></button></div></div> <img alt="Divider" class="svelte-o2kwxd"> <div style="display: flex; flex-direction: column; align-items: center;" class="svelte-o2kwxd"><div class="svelte-o2kwxd">BALANCE</div> <div class="svelte-o2kwxd"><div class="svelte-o2kwxd"> </div></div></div> <img alt="Divider" class="svelte-o2kwxd"></div> <div class="svelte-o2kwxd"></div> <div style="position: absolute; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; z-index: 10;" class="svelte-o2kwxd"><div>>>>>> <button title="SPIN" class="svelte-o2kwxd"></button></div></div> <div style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;" class="svelte-o2kwxd"><div class="svelte-o2kwxd"><button class="svelte-o2kwxd"></button> <img alt="Status bar" class="svelte-o2kwxd"></div> <img alt="Divider" class="svelte-o2kwxd"> <div class="svelte-o2kwxd"><button class="svelte-o2kwxd"></button> <img alt="Speed bar" class="svelte-o2kwxd"></div> <img alt="Divider" class="svelte-o2kwxd"> <div style="display: flex; flex-direction: column; align-items: center;" class="svelte-o2kwxd"><div class="svelte-o2kwxd">WIN</div> <div class="svelte-o2kwxd"><div class="win3d winShine svelte-o2kwxd" id="winLabel"><span class="depth svelte-o2kwxd" aria-hidden="true"> </span> <span class="face svelte-o2kwxd"> </span></div></div></div> <img alt="Divider" class="svelte-o2kwxd"> <div style="display: flex; align-items: center; justify-content: center;" class="svelte-o2kwxd"><button title="Menu" class="svelte-o2kwxd"></button></div></div></div> <img alt="Right End" class="svelte-o2kwxd"></div></div>  <button class="svelte-o2kwxd"></button> <!>   <div class="debug-panel svelte-o2kwxd"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-o2kwxd">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-o2kwxd"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Rounds:</span> <span style="color: #fff;" class="svelte-o2kwxd"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Wagered:</span> <span style="color: #ff6666;" class="svelte-o2kwxd"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Won:</span> <span style="color: #66ff66;" class="svelte-o2kwxd"> </span></div> <div style="
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
  " class="svelte-o2kwxd"><button class="svelte-o2kwxd"> </button> <button class="svelte-o2kwxd">Clear Win Log</button> <button class="svelte-o2kwxd"> </button> <button class="svelte-o2kwxd">🎰 Test Free Spins</button></div></div> <button class="debug-panel svelte-o2kwxd"> </button></div></div>`,1);function Vi(t,e){la(e,!0);const a="1.3.4",o=13,n=1445,i=1e3,l=1.75,d=-30,h=-10,v=160,p=0,b=750,m=80,L=250,T=0,Z=50,K=.5,R=40,U=-10,ne=Math.round(100*l),W=Math.round(ne*(700/760)),pe=W+10,me=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],Re=typeof window<"u"&&window.location.hostname.includes("github.io"),M=Re?"/web-sdk/oma-peli/symbols":`${Te}/symbols`,Y=Re?"/web-sdk/oma-peli/controls":`${Te}/controls`,Oe={a:`${M}/Blue_hotrod.jpg`,b:`${M}/Blue_jacket.jpg`,c:`${M}/Blue_rollers.jpg`,d:`${M}/Blue_speakers.jpg`,e:`${M}/Premium_blonde.jpg`,f:`${M}/Premium_brunette.jpg`,g:`${M}/Premium_rocker.jpg`,h:`${M}/New_Wild.jpg`,i:`${M}/Red_burger.jpg`,j:`${M}/Red_fries.jpg`,k:`${M}/Red_milkshake.jpg`,l:`${M}/Scatter.jpg`,emptyslot:`${M}/Emptyslot.jpg`},xe=`${M}/bg_base.jpg`,ee=`${M}/ReelFrames.png`,ue=`${M}/RockABillyReels_logo.png`,Ye={spin:`${Te}/sounds/spin.mp3`,stop:`${Te}/sounds/stop.mp3`,win:`${Te}/sounds/win.mp3`};let be=I(!0),Ht={},q=null,fe=null,Vt=null,Yt=null,ye=I(!0),Do=I(!1),Xt=I(945),Kt=null;const Uo={fast:3,medium:7,slow:18};let he=I("medium"),ha=I(Math.floor(Math.random()*20)+1);const St={background:()=>`${Te}/music/rockabilly reels loop ${s(ha)}.mp3`,freeSpins:`${Te}/music/rockabilly-loop_long.mp3`,drumHit:`${Te}/music/drum-hit.mp3`,winTheme:`${Te}/music/win-stinger.mp3`};function ga(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(ga,500);return}const c=window.Howl;try{q=new c({src:[St.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+s(ha)+")"),x(Do,!0)},onloaderror:(f,A)=>{console.warn("⚠️ Background music not found:",A)}}),fe=new c({src:[St.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(f,A)=>console.warn("⚠️ Free spins music not found:",A)}),Vt=new c({src:[St.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Yt=new c({src:[St.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(f){console.error("Failed to initialize music system:",f)}}function va(){const c=s(J)?fe:q;c&&s(ye)&&!c.playing()&&(c.play(),console.log("🎵 "+(s(J)?"Free spins":"Background")+" music started"))}function Go(){q&&q.playing()&&(q.fade(q.volume(),0,500),setTimeout(()=>q.stop(),500)),fe&&fe.playing()&&(fe.fade(fe.volume(),0,500),setTimeout(()=>fe.stop(),500))}function qt(){q&&q.playing()&&(q.fade(q.volume(),0,500),setTimeout(()=>q.stop(),500)),fe&&fe.playing()&&(fe.fade(fe.volume(),0,500),setTimeout(()=>fe.stop(),500)),setTimeout(()=>{s(ye)&&va()},600)}function Ho(){if(q&&q.playing()){const c=q.volume();q.fade(c,0,1e3),setTimeout(()=>{q.stop(),q.volume(.3)},1e3)}}let Qt=I(!1);function Vo(){x(Qt,!1),setTimeout(()=>{x(Qt,!0)},10)}let Xe=null;const Jt={vinylStartScale:.01,vinylEndScale:.15,sparkleScale:.6};function Yo(){x(ye,!s(ye)),s(ye)?va():Go()}function Xo(){Vt&&s(ye)&&s(be)&&Vt.play()}function Ko(){Yt&&s(ye)&&s(be)&&Yt.play()}let Et=null,Zt=null,pt=null,ut=null,ft=I("Initializing..."),Ke=I(""),we=[],Be=I(1e3);const ma=[.4,.8,1,1.6,2,3,5,8,10,15,20,25,30,40,50,60,80,100];let ht=I(5),_e=ze(()=>ma[s(ht)]),es=I(0),ke=I(!1),gt=I(0),ie=I(!1),ts=I(!1),qo=I(0),Ue=!1,Ie=null,ss=!1,qe=I(0),Qe=I(0),vt=I(0),as=I(0),os=ze(()=>s(Qe)>0?(s(vt)/s(Qe)*100).toFixed(2):"0.00"),ns=ze(()=>s(qe)>0?(s(as)/s(qe)*100).toFixed(2):"0.00"),J=I(!1),Ce=I(0),Ge=I(0),Lt=I(0),rs=I(0),Tt=I(0),is=I(0),Qo=ze(()=>s(Tt)>0?(s(is)/s(Tt)*100).toFixed(2):"0.00"),ge=I(ve([]));function Jo(c,f,A){const g=new Date().toLocaleString("fi-FI");let k=`
${"=".repeat(60)}
`;k+=`ROUND #${c} - ${g}
`,k+=`Mode: ${s(J)?"FREE SPINS":"BASE GAME"}
`,k+=`${"=".repeat(60)}
`,f.forEach(($,S)=>{k+=`
Win ${S+1}:
`,k+=`  Symbol: ${$.symbol} (${wa[$.symbol]})
`,k+=`  Count: ${$.count} symbols
`,k+=`  Multiplier: ${$.multiplier}x
`,k+=`  Payout: ${$.payout.toFixed(2)}
`,k+=`  Positions: [${$.positions.join(", ")}]
`}),k+=`
${"─".repeat(60)}
`,k+=`TOTAL WIN: ${A.toFixed(2)}
`,k+=`${"=".repeat(60)}
`,s(ge).push(k)}function Zo(){const c=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${s(ge).join(`
`)}`,f=new Blob([c],{type:"text/plain"}),A=URL.createObjectURL(f),g=document.createElement("a");g.href=A,g.download=`win-log-${Date.now()}.txt`,g.click(),URL.revokeObjectURL(A)}function en(){x(ge,ve([]))}function tn(){s(J)||(x(J,!0),x(Ce,10),x(Ge,0),Se(Lt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),qt())}const sn={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},an={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function xa(c){if(c===6)return Math.random()<.55?"h":"emptyslot";const f=s(J)?an:sn,A=Math.random();let g=0;const k=me.filter(S=>S!=="h"),$=k.reduce((S,B)=>S+f[B],0);for(const S of k)if(g+=f[S]/$,A<g)return S;return"f"}function ba(){const c=[];for(let f=0;f<o;f++){const A=xa(f);c.push(A),Se(Tt),A==="emptyslot"&&Se(is)}return c}function ya(c){return c<3?{col:0,row:c}:c<6?{col:1,row:c-3}:c===6?{col:2,row:0}:c<10?{col:3,row:c-7}:{col:4,row:c-10}}function mt(c,f){return c===0?f:c===1?3+f:c===2?6:c===3?7+f:c===4?10+f:-1}function on(){if(s(J)){const c=Math.random();return c<.7?3:c<.92?5:10}else{const c=Math.random();return c<.7?1:c<.92?2:3}}const nn={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function rn(){var X;const c=[],f=[];for(let E=0;E<o;E++)xt[E]==="l"&&f.push(E);if(f.length>=5){const E=f.length;x(Ce,s(Ce)+E),s(J)?console.log(`🎰 FREE SPINS RETRIGGERED! +${E} FREE SPINS! Total: ${s(Ce)}`):(x(J,!0),x(Ge,0),Se(Lt),console.log(`🎰 FREE SPINS TRIGGERED! ${f.length} scatters = ${E} FREE SPINS!`),qt()),c.push({symbol:"l",count:f.length,payout:0,positions:f,multiplier:1})}const A=[];for(let E=0;E<3;E++)for(let P=0;P<3;P++)for(let F=0;F<1;F++)for(let j=0;j<3;j++)for(let N=0;N<3;N++){const z=[mt(0,E),mt(1,P),mt(2,F),mt(3,j),mt(4,N)];A.push(z)}console.log(`Generated ${A.length} possible paths (should be 81)`);const g=[];for(const E of A){const P=E.map(z=>xt[z]);if(P[0]==="emptyslot"||P[0]==="l")continue;let F=null;for(let z=0;z<P.length;z++)if(P[z]!=="h"&&P[z]!=="emptyslot"&&P[z]!=="l"){F=P[z];break}if(!F)continue;let j=0;const N=new Set;for(let z=0;z<E.length;z++){const We=E[z],{col:st}=ya(We),le=P[z];(le===F||le==="h")&&N.add(st)}for(let z=0;z<5&&N.has(z);z++)j++;if(j>=3){const We=E[0]%3;g.push({symbol:F,length:j,path:E.slice(0,j),startRow:We})}}const k=[],$=new Map;for(const E of g){const P=`${E.symbol}-${E.path.join(",")}`;$.has(P)||$.set(P,[]),$.get(P).push(E)}for(const[E,P]of $.entries()){const F=Math.max(...P.map(N=>N.length)),j=P.find(N=>N.length===F);j&&k.push(j)}const S=[],B=new Map;for(const E of k)B.has(E.symbol)||B.set(E.symbol,[]),B.get(E.symbol).push(E);const G=[];for(const[E,P]of B.entries()){const F=Math.max(...P.map(N=>N.length)),j=P.filter(N=>N.length===F);G.push(...j)}const V=new Map;for(const E of G){const P=`${E.symbol}-${E.length}`;V.has(P)||V.set(P,[]),V.get(P).push(E)}const H=G.length>0?on():1;for(const[E,P]of V.entries()){const F=P[0],j=(X=nn[F.symbol])==null?void 0:X[F.length];if(j!==void 0&&j>0){const N=new Map;for(const le of P)for(let ae=0;ae<le.length;ae++)N.has(ae)||N.set(ae,new Set),N.get(ae).add(le.path[ae]);let z=1;for(let le=0;le<F.length;le++){const ae=N.get(le);z*=ae?ae.size:1}const We=j*s(_e)*z*H;console.log(`  ${F.length}x${F.symbol}: ${z} ways × ${j}x × ${s(_e)} bet × ${H} mult = ${We}`);const st=new Set;for(const le of P)le.path.forEach(ae=>st.add(ae));S.push({symbol:F.symbol,count:F.length,payout:We,positions:Array.from(st),multiplier:H})}}return c.push(...S),c}let Ae=I(0),Je=I(ve([])),Fe=I(!1),Ze=I(!1),ls=I(!1),cs=I(0);const wa={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function ds(c){if(!s(be)||!Ht[c])return;const f=Ht[c];f.currentTime=0,f.play().catch(A=>{console.warn("Äänen toisto epäonnistui:",c,A)})}function ln(c){bt.forEach(f=>se.stage.removeChild(f)),bt=[],c.forEach(f=>{f.positions.forEach(A=>{const g=et[A],k=new io().rect(0,0,ne,W).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});k.x=g.container.x,k.y=g.container.y,se.stage.addChild(k),bt.push(k);let $=0,S=1;const B=.05;se.ticker.add(()=>{$+=S*B,$>=.4&&(S=-1),$<=0&&(S=1),k.alpha=.5+$})})})}function ps(){bt.forEach(c=>se.stage.removeChild(c)),bt=[]}let xt=ba(),us,se,et=[],bt=[];class cn{constructor(f,A){$e(this,"index");$e(this,"container");$e(this,"offset",0);$e(this,"speed",0);$e(this,"targetSpeed",30);$e(this,"state","idle");$e(this,"stopDelay",0);$e(this,"bounceOffset",0);$e(this,"bounceSpeed",0);$e(this,"bounceFrames",0);this.index=f,this.container=A}start(f){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=f}startSynchronized(f){const A=Uo[s(he)],g=60+f*A;this.start(g)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const f=s(he)==="slow"?.88:s(he)==="medium"?.92:.95;this.speed*=f,this.speed<2.5&&(this.state="bouncing",this.speed=0,this.offset=0,this.bounceOffset=0,this.bounceSpeed=8,ds("stop"),Xo())}this.state==="bouncing"&&(this.bounceSpeed*=.85,this.bounceOffset+=this.bounceSpeed,Math.abs(this.bounceSpeed)<.3&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=pe&&(this.offset=0,xt[this.index]=xa(this.index)))}}draw(){const f=this.container;f.removeChildren();const A=xt[this.index];if(!A||!Et||!Et[A])return;const g=Et[A];if(!g)return;const k=this.offset+this.bounceOffset,$=new qs(g);$.width=ne,$.height=W,$.x=0,$.y=k,f.addChild($)}}let r=I(1);Ao(async()=>{se=new Co,await se.init({width:n,height:i,backgroundAlpha:0}),us.appendChild(se.canvas);const c=()=>{const g=window.innerWidth,k=window.innerHeight,$=g/n,S=k/i,B=Math.min($,S,1);x(r,ve(B)),se.stage.scale.set(B),se.renderer.resize(n,i)};c(),window.addEventListener("resize",c);const f={};try{x(ft,"Loading background and UI images..."),we.push(`Loading background: ${xe}`),we.push(`Loading reel frames: ${ee}`),we.push(`Loading logo: ${ue}`),await ot.load([{alias:"background",src:xe},{alias:"reelframes",src:ee},{alias:"logo",src:ue}]),Zt=He.from("background"),pt=He.from("reelframes"),ut=He.from("logo"),console.log("✅ Background texture created:",Zt.width,"x",Zt.height),console.log("✅ Reel frames texture created:",pt.width,"x",pt.height),console.log("✅ Logo texture created:",ut.width,"x",ut.height),we.push("✅ All UI images loaded"),x(ft,"Loading symbols...");const g=[];for(const k of me)g.push({alias:k,src:Oe[k]});await ot.load(g);for(const k of me){const $=Oe[k];we.push(`Loading symbol ${k}: ${$}`);try{const S=He.from(k);f[k]=S,console.log(`✅ Symbol ${k} loaded:`,S.width,"x",S.height),we.push(`✅ Symbol ${k} loaded`)}catch(S){const B=`❌ Failed to load symbol ${k} from ${$}: ${S}`;throw we.push(B),console.error(B),new Error(B)}}Et=f,x(ft,"Assets loaded successfully!")}catch(g){x(Ke,`Asset loading failed: ${g}`),we.push(s(Ke)),console.error(s(Ke));return}console.log("Ladataan ääniefektit...");for(const[g,k]of Object.entries(Ye)){const $=new Audio;$.src=k,$.preload="auto",$.volume=.7,$.load(),$.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${k} (käytetään hiljaista placeholderia)`)}),Ht[g]=$}[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(g=>({x:g.x+d,y:g.y+h})),et=[];for(let g=0;g<o;g++){const k=ya(g),$=k.col,S=k.row,B=300+$*(ne+20),G=250+S*(W+15),V=g===6?B+p:B,H=g===6?G+v:G,X=new da;X.x=V+d,X.y=H+h;const E=new io().rect(0,0,ne,W).fill(16777215);E.x=X.x,E.y=X.y,X.mask=E,se.stage.addChild(E),se.stage.addChild(X),et.push(new cn(g,X))}if(pt){const g=new qs(pt);g.scale.set(1),g.x=250,g.y=200,se.stage.addChild(g),Kt=g,x(Xt,ve(g.width)),console.log("Reel frames lisätty:",g.width.toFixed(0),"x",g.height.toFixed(0)),console.log("Control panel leveys päivitetty:",s(Xt).toFixed(0))}if(ut){const g=new qs(ut);g.scale.set(K),g.x=(se.renderer.width-g.width)/2+R,g.y=U,se.stage.addChild(g),console.log("Logo lisätty päällimmäiseen layeriin:",g.width.toFixed(0),"x",g.height.toFixed(0))}ga(),se.ticker.add(dn)});function dn(){for(const c of et)c.update(),c.draw();if(!s(Fe)&&!ss&&et.every(c=>c.state==="stopped")){ss=!0,Ho();const c=rn();console.log(`Checking wins, found ${c.length} wins`),c.length>0?(x(Je,ve(c)),x(Ae,ve(c.reduce((f,A)=>f+A.payout,0))),Jo(s(qe),c,s(Ae)),un(s(Ae)),x(Fe,!0),x(qo,ve(Date.now())),console.log(`🎉 VOITTO! ${s(Ae)} pistettä! Uusi saldo: ${s(Be)}`),console.log(`isShowingWin set to: ${s(Fe)}, totalWin: ${s(Ae)}`),c.forEach(f=>{const A=f.multiplier?` (${f.multiplier}x multiplier)`:"";console.log(`${f.count}x ${f.symbol} = ${f.payout} pistettä${A}`)}),ln(c),ds("win"),s(ke)&&!Ue&&(Ue=!0,Ie=window.setTimeout(()=>{s(Fe)&&s(ke)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),x(Fe,!1),ps()),Ie=window.setTimeout(()=>{Ue=!1,fs()},200)},1500))):(console.log("No wins found this spin"),s(ke)&&!Ue&&(Ue=!0,Ie=window.setTimeout(()=>{Ue=!1,fs()},500))),s(J)&&s(Ce)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${s(Ge)}`),setTimeout(()=>{x(cs,ve(s(Ge))),x(ls,!0)},2e3))}}function _a(){if(!s(J)&&q&&s(ye)&&!q.playing()&&(q.play(),console.log("🎵 Background music started on first spin")),Vo(),s(J)&&s(Ce)>0)Se(Ce,-1),Se(rs),console.log(`🎰 FREE SPIN! Remaining: ${s(Ce)}`);else if(!s(J)){if(s(Be)<s(_e)){alert(`Not enough credits! Balance: ${s(Be)}, Bet: ${s(_e)}`),Rt();return}x(Be,s(Be)-s(_e)),Se(qe),x(Qe,s(Qe)+s(_e))}Ie!==null&&(clearTimeout(Ie),Ie=null),x(Je,ve([])),x(Ae,0),x(Fe,!1),ss=!1,ps(),xt=ba(),et.forEach((c,f)=>{c.startSynchronized(f)}),ds("spin")}function pn(c,f,A=1400){if(typeof window>"u")return;const g=document.getElementById("winLabel");if(!g)return;const k=g.querySelector(".face"),$=g.querySelector(".depth");if(!k||!$)return;g.classList.add("rolling");const S=performance.now(),B=f-c,G=H=>1-Math.pow(1-H,3);function V(H){const X=Math.min(1,(H-S)/A),P="WIN "+Math.round(c+B*G(X)).toLocaleString("en-US");k.textContent=P,$.textContent=P,X<1?requestAnimationFrame(V):(g.classList.remove("rolling"),g.classList.add("winHit"),setTimeout(()=>g.classList.remove("winHit"),450))}requestAnimationFrame(V)}function un(c){x(Be,s(Be)+c),x(vt,s(vt)+c);const f=s(es);x(es,ve(c));const A=c>s(_e)*50?2e3:1400;if(pn(f,c,A),s(J)&&x(Ge,s(Ge)+c),c>0){Se(as);const g=c/s(_e);g>=10&&Ko(),Xe&&(g>=50?Xe.show():g>=20?setTimeout(()=>Xe.show(),200):g>=10&&setTimeout(()=>Xe.show(),400))}}function fn(){s(ht)<ma.length-1&&Se(ht)}function hn(){s(ht)>0&&Se(ht,-1)}function Me(c){x(ke,!0),x(gt,ve(c)),x(ie,!1),fs()}function Rt(){x(ke,!1),x(gt,0),Ue=!1,Ie!==null&&(clearTimeout(Ie),Ie=null)}function fs(){if(!s(ke)||s(gt)<=0){Rt();return}console.log(`Autoplay: Starting spin ${s(gt)} rounds left`),_a(),Se(gt,-1)}function gn(){confirm("Reset all statistics?")&&(x(qe,0),x(Qe,0),x(vt,0),x(as,0),x(Lt,0),x(rs,0),x(Tt,0),x(is,0))}var ka=Hi();Dn(c=>{var f=Bi();u(it(f)),Q(c,f)});var Aa=it(ka);{var vn=c=>{var f=Wi(),A=u(w(f),2),g=u(w(A));_(A);var k=u(A,2);{var $=F=>{var j=Ci(),N=u(w(j));_(j),oe(()=>D(N,` ${s(Ke)??""}`)),Q(F,j)};ce(k,F=>{s(Ke)&&F($)})}var S=u(k,2),B=u(w(S));B.nodeValue=` ${Te??""}`,_(S);var G=u(S,2),V=u(w(G));V.nodeValue=` ${xe??""}`,_(G);var H=u(G,2),X=u(w(H));_(H);var E=u(H,2);{var P=F=>{var j=Mi(),N=w(j),z=w(N);_(N);var We=u(N,2);Ut(We,17,()=>we,Dt,(st,le)=>{var ae=Fi(),Mn=w(ae,!0);_(ae),oe(()=>D(Mn,s(le))),Q(st,ae)}),_(j),oe(()=>D(z,`Log (${we.length??""})`)),Q(F,j)};ce(E,F=>{we.length>0&&F(P)})}_(f),oe(()=>{D(g,` ${s(ft)??""}`),D(X,` ${Oe.a??""}`)}),Q(c,f)};ce(Aa,c=>{(s(ft)!=="Assets loaded successfully!"||s(Ke))&&c(vn)})}var $a=u(Aa,2);{var mn=c=>{var f=Ni(),A=u(w(f),2),g=w(A);_(A);var k=u(A,2);Ut(k,17,()=>s(Je),Dt,(G,V)=>{var H=ji(),X=w(H);_(H),oe(E=>D(X,`${s(V).count??""} × ${wa[s(V).symbol]??""} = ${E??""} pistettä`),[()=>s(V).payout.toFixed(2)]),Q(G,H)});var $=u(k,2);{var S=G=>{var V=zi(),H=w(V),X=w(H);_(H),_(V),oe(()=>D(X,`✨ ${s(Je)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),Q(G,V)};ce($,G=>{s(Je).length>0&&s(Je)[0].multiplier>1&&G(S)})}var B=u($,2);_(f),oe(G=>D(g,`${G??""} pistettä`),[()=>s(Ae).toFixed(2)]),C("click",B,()=>{x(Fe,!1),ps(),console.log("Win popup closed, ready for next spin")}),Q(c,f)};ce($a,c=>{s(Ae)>0&&s(Fe)&&c(mn)})}var Sa=u($a,2);{var xn=c=>{var f=Di(),A=u(w(f),8);_(f),oe(g=>y(f,"style",`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.95);
    color: white;
    padding: ${30*s(r)}px;
    border-radius: ${15*s(r)}px;
    font-family: Arial, sans-serif;
    z-index: 3000;
    border: ${3*s(r)}px solid #ffd700;
    max-width: ${600*s(r)}px;
    max-height: ${g??""}px;
    overflow-y: auto;
    font-size: ${s(r)??""}em;
  `),[()=>Math.min(i*s(r)*.8,80*window.innerHeight/100)]),C("click",A,()=>{x(Ze,!1)}),Q(c,f)};ce(Sa,c=>{s(Ze)&&c(xn)})}var Ea=u(Sa,2);{var bn=c=>{var f=Ui(),A=w(f),g=u(w(A),4),k=w(g,!0);_(g);var $=u(g,2);_(A),_(f),oe(S=>D(k,S),[()=>s(cs).toFixed(2)]),C("click",$,()=>{x(ls,!1),x(J,!1),x(Ge,0),x(cs,0),qt()}),C("mouseenter",$,S=>{S.currentTarget.style.transform="scale(1.05)",S.currentTarget.style.boxShadow="0 6px 20px rgba(255, 215, 0, 0.6)"}),C("mouseleave",$,S=>{S.currentTarget.style.transform="scale(1)",S.currentTarget.style.boxShadow="0 4px 15px rgba(255, 215, 0, 0.4)"}),Q(c,f)};ce(Ea,c=>{s(ls)&&c(bn)})}var La=u(Ea,2),hs=w(La),yt=w(hs);y(yt,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${n}px;
        height: ${i}px;
      `);var gs=w(yt),vs=u(gs,2),Ta=w(vs);{var yn=c=>{var f=Gi(),A=w(f),g=u(A,2),k=u(g,2),$=u(k,2),S=u($,2),B=u(S,2),G=u(B,2),V=u(G,2),H=u(V,2),X=u(H,2);_(f),oe(()=>{y(f,"style",`
    position: absolute;
    bottom: ${(m+20)*s(r)}px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.95);
    padding: ${20*s(r)}px;
    border-radius: ${15*s(r)}px;
    border: ${3*s(r)}px solid #0088ff;
    box-shadow: 0 ${8*s(r)}px ${30*s(r)}px rgba(0, 136, 255, 0.6);
    z-index: 2000;
    min-width: ${250*s(r)}px;
  `),y(A,"style",`color: white; font-weight: bold; margin-bottom: ${15*s(r)}px; text-align: center; font-size: ${18*s(r)}px;`),y(g,"style",`
        width: 100%;
        padding: ${12*s(r)}px;
        margin-bottom: ${8*s(r)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*s(r)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*s(r)}px;
        box-shadow: 0 ${4*s(r)}px ${10*s(r)}px rgba(68, 170, 68, 0.4);
      `),y(k,"style",`
        width: 100%;
        padding: ${12*s(r)}px;
        margin-bottom: ${8*s(r)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*s(r)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*s(r)}px;
        box-shadow: 0 ${4*s(r)}px ${10*s(r)}px rgba(68, 170, 68, 0.4);
      `),y($,"style",`
        width: 100%;
        padding: ${12*s(r)}px;
        margin-bottom: ${8*s(r)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*s(r)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*s(r)}px;
        box-shadow: 0 ${4*s(r)}px ${10*s(r)}px rgba(68, 170, 68, 0.4);
      `),y(S,"style",`
        width: 100%;
        padding: ${12*s(r)}px;
        margin-bottom: ${8*s(r)}px;
        background: linear-gradient(135deg, #4488ff 0%, #66aaff 100%);
        color: white;
        border: none;
        border-radius: ${8*s(r)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*s(r)}px;
        box-shadow: 0 ${4*s(r)}px ${10*s(r)}px rgba(68, 136, 255, 0.4);
      `),y(B,"style",`
        width: 100%;
        padding: ${12*s(r)}px;
        margin-bottom: ${8*s(r)}px;
        background: linear-gradient(135deg, #4488ff 0%, #66aaff 100%);
        color: white;
        border: none;
        border-radius: ${8*s(r)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*s(r)}px;
        box-shadow: 0 ${4*s(r)}px ${10*s(r)}px rgba(68, 136, 255, 0.4);
      `),y(G,"style",`
        width: 100%;
        padding: ${12*s(r)}px;
        margin-bottom: ${8*s(r)}px;
        background: linear-gradient(135deg, #ff8844 0%, #ffaa66 100%);
        color: white;
        border: none;
        border-radius: ${8*s(r)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*s(r)}px;
        box-shadow: 0 ${4*s(r)}px ${10*s(r)}px rgba(255, 136, 68, 0.4);
      `),y(V,"style",`
        width: 100%;
        padding: ${12*s(r)}px;
        margin-bottom: ${8*s(r)}px;
        background: linear-gradient(135deg, #ff8844 0%, #ffaa66 100%);
        color: white;
        border: none;
        border-radius: ${8*s(r)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*s(r)}px;
        box-shadow: 0 ${4*s(r)}px ${10*s(r)}px rgba(255, 136, 68, 0.4);
      `),y(H,"style",`
        width: 100%;
        padding: ${12*s(r)}px;
        margin-bottom: ${15*s(r)}px;
        background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%);
        color: white;
        border: none;
        border-radius: ${8*s(r)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*s(r)}px;
        box-shadow: 0 ${4*s(r)}px ${10*s(r)}px rgba(255, 68, 68, 0.4);
      `),y(X,"style",`
        width: 100%;
        padding: ${10*s(r)}px;
        background: rgba(255, 255, 255, 0.1);
        color: #aaa;
        border: ${1*s(r)}px solid #555;
        border-radius: ${8*s(r)}px;
        cursor: pointer;
        font-size: ${14*s(r)}px;
      `)}),C("click",g,()=>{Me(10),x(ie,!1)}),C("click",k,()=>{Me(25),x(ie,!1)}),C("click",$,()=>{Me(50),x(ie,!1)}),C("click",S,()=>{Me(100),x(ie,!1)}),C("click",B,()=>{Me(200),x(ie,!1)}),C("click",G,()=>{Me(500),x(ie,!1)}),C("click",V,()=>{Me(1e3),x(ie,!1)}),C("click",H,()=>{Me(5e3),x(ie,!1)}),C("click",X,()=>{x(ie,!1)}),Q(c,f)};ce(Ta,c=>{s(ie)&&c(yn)})}var ms=u(Ta,2);y(ms,"src",`${Y??""}/Control_leftend.png`);var It=u(ms,2),xs=w(It),bs=w(xs),Ra=w(bs),ys=u(Ra,2),ws=w(ys),Pt=u(ws,2),wn=w(Pt,!0);_(Pt);var Ia=u(Pt,2);_(ys),_(bs);var _s=u(bs,2);y(_s,"src",`${Y??""}/Control_divider.png`);var ks=u(_s,2),Pa=w(ks),As=u(Pa,2),$s=w(As),_n=w($s,!0);_($s),_(As),_(ks);var Oa=u(ks,2);y(Oa,"src",`${Y??""}/Control_divider.png`),_(xs);var Ba=u(xs,2),Ss=u(Ba,2),Es=w(Ss),Ca=u(w(Es));_(Es),_(Ss);var Fa=u(Ss,2),Ot=w(Fa),Bt=w(Ot),Ma=u(Bt,2);_(Ot);var Ls=u(Ot,2);y(Ls,"src",`${Y??""}/Control_divider.png`);var Ct=u(Ls,2),Ft=w(Ct),Wa=u(Ft,2);_(Ct);var Ts=u(Ct,2);y(Ts,"src",`${Y??""}/Control_divider.png`);var Rs=u(Ts,2),ja=w(Rs),Is=u(ja,2),Ps=w(Is),Os=w(Ps),kn=w(Os);_(Os);var za=u(Os,2),An=w(za);_(za),_(Ps),_(Is),_(Rs);var Bs=u(Rs,2);y(Bs,"src",`${Y??""}/Control_divider.png`);var Na=u(Bs,2),Da=w(Na);_(Na),_(Fa),_(It);var Ua=u(It,2);y(Ua,"src",`${Y??""}/Control_rightend.png`),_(vs),_(yt),no(yt,c=>us=c,()=>us);var Mt=u(yt,2);Mt.textContent=`🛠️ DEBUG v${a}`;var Ga=u(Mt,2);const $n=ze(()=>s(Ae)/s(_e)>=50?"jackpot":s(Ae)/s(_e)>=20?"medium":"small");no(Oi(Ga,{get winLevel(){return s($n)},get winAmount(){return s(Ae)},get vinylStartScale(){return Jt.vinylStartScale},get vinylEndScale(){return Jt.vinylEndScale},get sparkleScale(){return Jt.sparkleScale}}),c=>Xe=c,()=>Xe);var Wt=u(Ga,2),Ha=u(w(Wt),2);Ha.textContent=`v${a}`;var Cs=u(Ha,2),Va=u(w(Cs),2),Sn=w(Va,!0);_(Va),_(Cs);var Fs=u(Cs,2),Ya=u(w(Fs),2),En=w(Ya,!0);_(Ya),_(Fs);var Ms=u(Fs,2),Xa=u(w(Ms),2),Ln=w(Xa,!0);_(Xa),_(Ms);var Ws=u(Ms,2),js=u(w(Ws),2),Tn=w(js);_(js),_(Ws);var zs=u(Ws,2),Ns=u(w(zs),2),Rn=w(Ns);_(Ns),_(zs);var Ds=u(zs,2),Ka=u(w(Ds),2),In=w(Ka,!0);_(Ka),_(Ds);var Us=u(Ds,2),qa=u(w(Us),2),Pn=w(qa,!0);_(qa),_(Us);var Gs=u(Us,2),Qa=u(w(Gs),2),On=w(Qa);_(Qa),_(Gs);var Ja=u(Gs,2),Za=u(Ja,2),tt=w(Za),Bn=w(tt);_(tt);var jt=u(tt,2),wt=u(jt,2),Cn=w(wt);_(wt);var Hs=u(wt,2);_(Za),_(Wt);var _t=u(Wt,2),Fn=w(_t,!0);_(_t),_(hs),_(La),oe((c,f,A,g,k,$,S,B)=>{y(hs,"style",`
    position: relative;
    width: ${n*s(r)}px;
    height: ${i*s(r)}px;
  `),y(gs,"style",`
          position: absolute;
          top: ${130*s(r)}px;
          right: ${20*s(r)}px;
          padding: ${10*s(r)}px ${15*s(r)}px;
          background-color: rgba(255, 215, 0, 0.3);
          border: ${2*s(r)}px solid rgba(255, 215, 0, 0.7);
          border-radius: ${8*s(r)}px;
          cursor: pointer;
          font-weight: bold;
          font-size: ${16*s(r)}px;
          color: white;
          text-shadow: 0 0 ${5*s(r)}px rgba(0,0,0,0.8);
          z-index: 1000;
          min-width: ${180*s(r)}px;
        `),y(vs,"style",`
        position: absolute;
        left: ${((Kt?Kt.x:L)+T)*s(r)}px;
        top: ${(b+Z)*s(r)}px;
        width: ${s(Xt)*s(r)}px;
        height: ${m*s(r)}px;
        display: flex;
        align-items: center;
        z-index: 1000;
      `),y(ms,"style",`height: ${m*s(r)}px; flex-shrink: 0;`),y(It,"style",`
    flex-grow: 1;
    height: ${m*s(r)}px;
    background-image: url('${Y??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    padding: 0 ${20*s(r)}px;
    position: relative;
    gap: ${20*s(r)}px;
  `),y(Ra,"style",`color: #00ff00; font-size: ${12*s(r)}px; font-weight: bold; line-height: 1; height: ${16*s(r)}px; display: flex; align-items: flex-end; padding-bottom: ${2*s(r)}px;`),y(ys,"style",`display: flex; gap: ${5*s(r)}px; align-items: center; height: ${44*s(r)}px;`),y(ws,"style",`
              width: ${40*s(r)}px;
              height: ${40*s(r)}px;
              background-image: url('${Y??""}/Control_lowerbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            `),y(Pt,"style",`
            color: #fff;
            font-size: ${18*s(r)}px;
            font-weight: bold;
            min-width: ${80*s(r)}px;
            text-align: center;
            font-family: 'Courier New', monospace;
          `),D(wn,c),y(Ia,"style",`
              width: ${40*s(r)}px;
              height: ${40*s(r)}px;
              background-image: url('${Y??""}/Control_upperbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            `),y(_s,"style",`height: ${m*.8*s(r)}px; flex-shrink: 0;`),y(Pa,"style",`color: #00ff00; font-size: ${12*s(r)}px; font-weight: bold; line-height: 1; height: ${16*s(r)}px; display: flex; align-items: flex-end; padding-bottom: ${2*s(r)}px;`),y(As,"style",`height: ${44*s(r)}px; display: flex; align-items: center;`),y($s,"style",`
            color: #fff;
            font-size: ${20*s(r)}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
          `),D(_n,f),y(Oa,"style",`height: ${m*.8*s(r)}px; flex-shrink: 0;`),y(Ba,"style",`flex-shrink: 0; width: ${130*s(r)}px;`),oa(Es,1,`play-button-wrapper ${(s(Qt)?"glare-animate":"")??""}`,"svelte-o2kwxd"),y(Ca,"style",`
            width: ${110*s(r)}px;
            height: ${110*s(r)}px;
            background-image: url('${Y??""}/Control_playbutton.png');
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
          `),y(Ot,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*s(r)}px;`),y(Bt,"style",`
            width: ${50*s(r)}px;
            height: ${50*s(r)}px;
            background-image: url('${Y??""}/${(s(ke)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(Bt,"title",s(ke)?"Stop Autoplay":"Autoplay"),y(Ma,"src",`${Y??""}/${(s(ke)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),y(Ma,"style",`height: ${10*s(r)}px; width: auto; display: block;`),y(Ls,"style",`height: ${m*.8*s(r)}px; flex-shrink: 0;`),y(Ct,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*s(r)}px;`),y(Ft,"style",`
            width: ${50*s(r)}px;
            height: ${50*s(r)}px;
            background-image: url('${Y??""}/Control_fastplay_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(Ft,"title",`Spin Speed: ${(s(he)==="slow"?"Slow":s(he)==="medium"?"Medium":"Fast")??""}`),y(Wa,"src",`${Y??""}/${(s(he)==="slow"?"Control_bar_deselect.png":s(he)==="medium"?"Control_half_bar_select.png":"Control_bar_select.png")??""}`),y(Wa,"style",`height: ${10*s(r)}px; width: auto; display: block;`),y(Ts,"style",`height: ${m*.8*s(r)}px; flex-shrink: 0;`),y(ja,"style",`color: #00ff00; font-size: ${12*s(r)}px; font-weight: bold; line-height: 1; height: ${16*s(r)}px; display: flex; align-items: flex-end; padding-bottom: ${2*s(r)}px;`),y(Is,"style",`height: ${44*s(r)}px; display: flex; align-items: center;`),y(Ps,"style",`font-size: ${20*s(r)}px;`),D(kn,`WIN ${A??""}`),D(An,`WIN ${A??""}`),y(Bs,"style",`height: ${m*.8*s(r)}px; flex-shrink: 0;`),y(Da,"style",`
            width: ${50*s(r)}px;
            height: ${50*s(r)}px;
            background-image: url('${Y??""}/Control_menubar.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(Ua,"style",`height: ${m*s(r)}px; flex-shrink: 0;`),y(Mt,"style",`
    position: absolute;
    top: ${190*s(r)}px;
    right: ${20*s(r)}px;
    padding: ${10*s(r)}px ${15*s(r)}px;
    background-color: rgba(0, 255, 0, 0.3);
    border: ${2*s(r)}px solid rgba(0, 255, 0, 0.7);
    border-radius: ${8*s(r)}px;
    cursor: pointer;
    font-weight: bold;
    font-size: ${16*s(r)}px;
    color: white;
    text-shadow: 0 0 ${5*s(r)}px rgba(0,0,0,0.8);
    z-index: 10000;
    min-width: ${180*s(r)}px;
    pointer-events: auto;
  `),y(Wt,"style",`
  position: absolute;
  top: 20px;
  left: 20px;
  display: ${(s(ts)?"block":"none")??""};
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
`),D(Sn,g),D(En,k),D(Ln,$),y(js,"style",`color: ${S??""};`),D(Tn,`${s(os)??""}%`),y(Ns,"style",`color: ${B??""};`),D(Rn,`${s(ns)??""}%`),D(In,s(Lt)),D(Pn,s(rs)),D(On,`${s(Qo)??""}%`),tt.disabled=s(ge).length===0,y(tt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(s(ge).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(s(ge).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(s(ge).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(s(ge).length>0?"1":"0.5")??""};
      `),D(Bn,`Download Win Log (${s(ge).length??""})`),jt.disabled=s(ge).length===0,y(jt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(s(ge).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(s(ge).length>0?"1":"0.5")??""};
      `),y(wt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(s(ye)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(s(ye)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),D(Cn,`🎵 Music: ${(s(ye)?"ON":"OFF")??""}`),Hs.disabled=s(J),y(Hs,"style",`
        width: 100%;
        padding: 5px;
        background: ${(s(J)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(s(J)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(s(J)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(s(J)?"0.5":"1")??""};
      `),y(_t,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(s(be)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(s(be)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),y(_t,"title",s(be)?"Mykistä äänet":"Laita äänet päälle"),D(Fn,s(be)?"🔊":"🔇")},[()=>s(_e).toFixed(2),()=>s(Be).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>s(es).toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0}),()=>s(qe).toLocaleString(),()=>s(Qe).toLocaleString(),()=>s(vt).toLocaleString(),()=>parseFloat(s(os))>=95?"#00ff00":parseFloat(s(os))>=85?"#ffff00":"#ff6666",()=>parseFloat(s(ns))>=30?"#00ff00":parseFloat(s(ns))>=20?"#ffff00":"#ff6666"]),C("click",gs,()=>{x(Ze,!s(Ze))}),C("click",ws,hn),C("click",Ia,fn),C("click",Ca,()=>{s(ke)&&Rt(),_a()}),C("click",Bt,()=>{s(ke)?Rt():x(ie,!s(ie))}),C("click",Ft,()=>{s(he)==="slow"?x(he,"medium"):s(he)==="medium"?x(he,"fast"):x(he,"slow")}),C("click",Da,()=>{x(Ze,!s(Ze))}),C("click",Mt,()=>{x(ts,!s(ts))}),C("click",Ja,gn),C("click",tt,Zo),C("click",jt,en),C("click",wt,Yo),C("click",Hs,tn),C("click",_t,()=>{x(be,!s(be))}),Q(t,ka),ca()}var Yi=te('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),Xi=te('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function Ki(t,e){la(e,!1);let a=at(e,"isAuthenticated",12,!1),o=ta(""),n=ta(!1);const i="slot2024";function l(){s(o)===i?(a(!0),sessionStorage.setItem("gameAuthenticated","true")):(x(n,!0),x(o,""),setTimeout(()=>x(n,!1),3e3))}Ao(()=>{a(sessionStorage.getItem("gameAuthenticated")==="true")}),Gn();var d=bo(),h=it(d);{var v=p=>{var b=Xi(),m=w(b),L=u(w(m),4),T=w(L);Sr(T),gr(2),_(L);var Z=u(L,2);{var K=R=>{var U=Yi();Q(R,U)};ce(Z,R=>{s(n)&&R(K)})}_(m),_(b),Lr(T,()=>s(o),R=>x(o,R)),C("submit",L,Tr(l)),Q(p,b)};ce(h,p=>{a()||p(v)})}Q(t,d),ca()}var qi=te("<!> <!>",1);function ll(t){let e=ta(!1);var a=qi(),o=it(a);Ki(o,{get isAuthenticated(){return s(e)},set isAuthenticated(l){x(e,l)},$$legacy:!0});var n=u(o,2);{var i=l=>{Vi(l,{})};ce(n,l=>{s(e)&&l(i)})}Q(t,a)}export{Io as A,Lo as C,Mr as R,Pr as S,Po as V,ll as _,Ir as u};
