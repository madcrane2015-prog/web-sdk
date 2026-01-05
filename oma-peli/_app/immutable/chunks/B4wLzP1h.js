const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CUCw-qPT.js","./Cb0119l1.js","./BrW7ntrJ.js","./Fx7Xcyif.js","./CkL9UklL.js","./C2GHuDhf.js","./BZV-7TFg.js","./DcaTzMll.js"])))=>i.map(i=>d[i]);
var Wr=Object.defineProperty;var zr=(s,e,a)=>e in s?Wr(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var $e=(s,e,a)=>zr(s,typeof e!="symbol"?e+"":e,a);import{g as jr,l as Nr,e as Ut,a as V,t as Z,n as _n,i as F,j as Dr,k as Ur}from"./CsxIJThA.js";import{i as Gr}from"./DqfWCwGf.js";import{y as Ee,j as Hr,a8 as Vr,F as t,Q as Yr,aa as Xr,ab as an,h as nn,e as Js,k as kt,l as Kr,ac as An,w as kn,ad as qr,q as $n,a7 as Qr,U as Jr,a2 as rn,ar as Zs,z as on,as as Zr,at as eo,au as to,o as so,av as ao,aw as no,ax as ro,ay as oo,b as io,az as lo,aA as co,a6 as fo,aB as po,aC as uo,D as go,L as ho,p as Vt,f as Ve,ah as P,a as Yt,T as g,c as w,s as u,r as _,t as te,I as Ue,ag as ga,aD as Se,aE as vo,aF as ia}from"./Fx7Xcyif.js";import{_ as ln,i as se,p as ue}from"./BrW7ntrJ.js";import{s as q}from"./DfoPkomP.js";import{p as it,b as cn}from"./C4w3i6Q0.js";import{b as be}from"./DBriF3ME.js";import{e as He,E as M,a as mo,C as ha,Q as la,V as ca,N as ea,D as ge,H as yo,p as qe,a0 as ft,a1 as Qe,a2 as bo,w as Ge,a3 as St,a4 as Sn,a5 as pt,a6 as Oe,a7 as Xt,a8 as En,a9 as xo,aa as ta,y as sa}from"./Cb0119l1.js";import{A as wo,B as dn,G as _o,a as fn}from"./CkL9UklL.js";function Gt(s,e){return e}function Ao(s,e,a,n){for(var r=[],i=e.length,l=0;l<i;l++)to(e[l].e,r,!0);var d=i>0&&r.length===0&&a!==null;if(d){var h=a.parentNode;so(h),h.append(a),n.clear(),De(s,e[0].prev,e[i-1].next)}ao(r,()=>{for(var b=0;b<i;b++){var p=e[b];d||(n.delete(p.k),De(s,p.prev,p.next)),no(p.e,!d)}})}function Ht(s,e,a,n,r,i=null){var l=s,d={flags:e,items:new Map,first:null};Ee&&Hr();var h=null,b=!1,p=Yr(()=>{var v=a();return Qr(v)?v:v==null?[]:$n(v)});Vr(()=>{var v=t(p),m=v.length;if(b&&m===0)return;b=m===0;let E=!1;if(Ee){var T=l.data===Xr;T!==(m===0)&&(l=an(),nn(l),Js(!1),E=!0)}if(Ee){for(var K=null,B,R=0;R<m;R++){if(kt.nodeType===8&&kt.data===Kr){l=kt,E=!0,Js(!1);break}var j=v[R],ae=n(j,R);B=Ln(kt,d,K,null,j,ae,R,r,e,a),d.items.set(ae,B),K=B}m>0&&nn(an())}Ee||ko(v,d,l,r,e,n,a),i!==null&&(m===0?h?An(h):h=kn(()=>i(l)):h!==null&&qr(h,()=>{h=null})),E&&Js(!0),t(p)}),Ee&&(l=kt)}function ko(s,e,a,n,r,i,l){var d=s.length,h=e.items,b=e.first,p=b,v,m=null,E=[],T=[],K,B,R,j;for(j=0;j<d;j+=1){if(K=s[j],B=i(K,j),R=h.get(B),R===void 0){var ae=p?p.e.nodes_start:a;m=Ln(ae,e,m,m===null?e.first:m.next,K,B,j,n,r,l),h.set(B,m),E=[],T=[],p=m.next;continue}if($o(R,K,j),(R.e.f&Zs)!==0&&An(R.e),R!==p){if(v!==void 0&&v.has(R)){if(E.length<T.length){var ne=T[0],U;m=ne.prev;var ie=E[0],le=E[E.length-1];for(U=0;U<E.length;U+=1)pn(E[U],ne,a);for(U=0;U<T.length;U+=1)v.delete(T[U]);De(e,ie.prev,le.next),De(e,m,ie),De(e,le,ne),p=ne,m=le,j-=1,E=[],T=[]}else v.delete(R),pn(R,p,a),De(e,R.prev,R.next),De(e,R,m===null?e.first:m.next),De(e,m,R),m=R;continue}for(E=[],T=[];p!==null&&p.k!==B;)(p.e.f&Zs)===0&&(v??(v=new Set)).add(p),T.push(p),p=p.next;if(p===null)continue;R=p}E.push(R),m=R,p=R.next}if(p!==null||v!==void 0){for(var xe=v===void 0?[]:$n(v);p!==null;)(p.e.f&Zs)===0&&xe.push(p),p=p.next;var Re=xe.length;if(Re>0){var D=null;Ao(e,xe,D,h)}}on.first=e.first&&e.first.e,on.last=m&&m.e}function $o(s,e,a,n){eo(s.v,e),s.i=a}function Ln(s,e,a,n,r,i,l,d,h,b){var p=(h&ro)!==0,v=(h&oo)===0,m=p?v?Jr(r):rn(r):r,E=(h&Zr)===0?l:rn(l),T={i:E,v:m,k:i,a:null,e:null,prev:a,next:n};try{return T.e=kn(()=>d(s,m,E,b),Ee),T.e.prev=a&&a.e,T.e.next=n&&n.e,a===null?e.first=T:(a.next=T,a.e.next=T.e),n!==null&&(n.prev=T,n.e.prev=T.e),T}finally{}}function pn(s,e,a){for(var n=s.next?s.next.e.nodes_start:a,r=e?e.e.nodes_start:a,i=s.e.nodes_start;i!==n;){var l=io(i);r.before(i),i=l}}function De(s,e,a){e===null?s.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}const un=[...` 	
\r\f \v\uFEFF`];function So(s,e,a){var n=s==null?"":""+s;if(e&&(n=n?n+" "+e:e),a){for(var r in a)if(a[r])n=n?n+" "+r:r;else if(n.length)for(var i=r.length,l=0;(l=n.indexOf(r,l))>=0;){var d=l+i;(l===0||un.includes(n[l-1]))&&(d===n.length||un.includes(n[d]))?n=(l===0?"":n.substring(0,l))+n.substring(d+1):l=d}}return n===""?null:n}function da(s,e,a,n,r,i){var l=s.__className;if(Ee||l!==a){var d=So(a,n,i);(!Ee||d!==s.getAttribute("class"))&&(d==null?s.removeAttribute("class"):e?s.className=d:s.setAttribute("class",d)),s.__className=a}else if(i)for(var h in i){var b=!!i[h];(r==null||b!==!!r[h])&&s.classList.toggle(h,b)}return i}function Eo(s){if(Ee){var e=!1,a=()=>{if(!e){if(e=!0,s.hasAttribute("value")){var n=s.value;x(s,"value",null),s.value=n}if(s.hasAttribute("checked")){var r=s.checked;x(s,"checked",null),s.checked=r}}};s.__on_r=a,lo(a),jr()}}function x(s,e,a,n){var r=s.__attributes??(s.__attributes={});Ee&&(r[e]=s.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&s.nodeName==="LINK")||r[e]!==(r[e]=a)&&(e==="style"&&"__styles"in s&&(s.__styles={}),e==="loading"&&(s[co]=a),a==null?s.removeAttribute(e):typeof a!="string"&&Lo(s).includes(e)?s[e]=a:s.setAttribute(e,a))}var gn=new Map;function Lo(s){var e=gn.get(s.nodeName);if(e)return e;gn.set(s.nodeName,e=[]);for(var a,n=s,r=Element.prototype;r!==n;){a=po(n);for(var i in a)a[i].set&&e.push(i);n=fo(n)}return e}function To(s,e,a=e){var n=uo();Nr(s,"input",r=>{var i=r?s.defaultValue:s.value;if(i=aa(s)?na(i):i,a(i),n&&i!==(i=e())){var l=s.selectionStart,d=s.selectionEnd;s.value=i??"",d!==null&&(s.selectionStart=l,s.selectionEnd=Math.min(d,s.value.length))}}),(Ee&&s.defaultValue!==s.value||go(e)==null&&s.value)&&a(aa(s)?na(s.value):s.value),ho(()=>{var r=e();aa(s)&&r===na(s.value)||s.type==="date"&&!r&&!s.value||r!==s.value&&(s.value=r??"")})}function aa(s){var e=s.type;return e==="number"||e==="range"}function na(s){return s===""?null:+s}function Ro(s){return function(...e){var a=e[0];return a.preventDefault(),s==null?void 0:s.apply(this,e)}}const fa=[];He.handleByNamedList(M.Environment,fa);async function Po(s){if(!s)for(let e=0;e<fa.length;e++){const a=fa[e];if(a.value.test()){await a.value.load();return}}}let $t;function Io(){if(typeof $t=="boolean")return $t;try{$t=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{$t=!1}return $t}var Tn=(s=>(s[s.NONE=0]="NONE",s[s.COLOR=16384]="COLOR",s[s.STENCIL=1024]="STENCIL",s[s.DEPTH=256]="DEPTH",s[s.COLOR_DEPTH=16640]="COLOR_DEPTH",s[s.COLOR_STENCIL=17408]="COLOR_STENCIL",s[s.DEPTH_STENCIL=1280]="DEPTH_STENCIL",s[s.ALL=17664]="ALL",s))(Tn||{});class Oo{constructor(e){this.items=[],this._name=e}emit(e,a,n,r,i,l,d,h){const{name:b,items:p}=this;for(let v=0,m=p.length;v<m;v++)p[v][b](e,a,n,r,i,l,d,h);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const a=this.items.indexOf(e);return a!==-1&&this.items.splice(a,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Co=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Rn=class Pn extends mo{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const a=[...Co,...this.config.runners??[]];this._addRunners(...a),this._unsafeEvalCheck()}async init(e={}){const a=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Po(a),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const n in this._systemsHash)e={...this._systemsHash[n].constructor.defaultOptions,...e};e={...Pn.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let n=0;n<this.runners.init.items.length;n++)await this.runners.init.items[n].init(e);this._initOptions=e}render(e,a){let n=e;if(n instanceof ha&&(n={container:n},a&&(la(ca,"passing a second argument is deprecated, please use render options instead"),n.target=a.renderTexture)),n.target||(n.target=this.view.renderTarget),n.target===this.view.renderTarget&&(this._lastObjectRendered=n.container,n.clearColor??(n.clearColor=this.background.colorRgba),n.clear??(n.clear=this.background.clearBeforeRender)),n.clearColor){const r=Array.isArray(n.clearColor)&&n.clearColor.length===4;n.clearColor=r?n.clearColor:ea.shared.setValue(n.clearColor).toArray()}n.transform||(n.container.updateLocalTransform(),n.transform=n.container.localTransform),n.container.enableRenderGroup(),this.runners.prerender.emit(n),this.runners.renderStart.emit(n),this.runners.render.emit(n),this.runners.renderEnd.emit(n),this.runners.postrender.emit(n)}resize(e,a,n){const r=this.view.resolution;this.view.resize(e,a,n),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),n!==void 0&&n!==r&&this.runners.resolutionChange.emit(n)}clear(e={}){const a=this;e.target||(e.target=a.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Tn.ALL);const{clear:n,clearColor:r,target:i}=e;ea.shared.setValue(r??this.background.colorRgba),a.renderTarget.clear(i,n,ea.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(a=>{this.runners[a]=new Oo(a)})}_addSystems(e){let a;for(a in e){const n=e[a];this._addSystem(n.value,n.name)}}_addSystem(e,a){const n=new e(this);if(this[a])throw new Error(`Whoops! The name "${a}" is already in use`);this[a]=n,this._systemsHash[a]=n;for(const r in this.runners)this.runners[r].add(n);return this}_addPipes(e,a){const n=a.reduce((r,i)=>(r[i.name]=i.value,r),{});e.forEach(r=>{const i=r.value,l=r.name,d=n[l];this.renderPipes[l]=new i(this,d?new d:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(a=>{a.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Io())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Rn.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let In=Rn,Nt;function Bo(s){return Nt!==void 0||(Nt=(()=>{var a;const e={stencil:!0,failIfMajorPerformanceCaveat:s??In.defaultOptions.failIfMajorPerformanceCaveat};try{if(!ge.get().getWebGLRenderingContext())return!1;let r=ge.get().createCanvas().getContext("webgl",e);const i=!!((a=r==null?void 0:r.getContextAttributes())!=null&&a.stencil);if(r){const l=r.getExtension("WEBGL_lose_context");l&&l.loseContext()}return r=null,i}catch{return!1}})()),Nt}let Dt;async function Fo(s={}){return Dt!==void 0||(Dt=await(async()=>{const e=ge.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(s)).requestDevice(),!0}catch{return!1}})()),Dt}const hn=["webgl","webgpu","canvas"];async function Mo(s){let e=[];s.preference?(e.push(s.preference),hn.forEach(i=>{i!==s.preference&&e.push(i)})):e=hn.slice();let a,n={};for(let i=0;i<e.length;i++){const l=e[i];if(l==="webgpu"&&await Fo()){const{WebGPURenderer:d}=await ln(async()=>{const{WebGPURenderer:h}=await import("./CUCw-qPT.js");return{WebGPURenderer:h}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);a=d,n={...s,...s.webgpu};break}else if(l==="webgl"&&Bo(s.failIfMajorPerformanceCaveat??In.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:d}=await ln(async()=>{const{WebGLRenderer:h}=await import("./DcaTzMll.js");return{WebGLRenderer:h}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);a=d,n={...s,...s.webgl};break}else if(l==="canvas")throw n={...s},new Error("CanvasRenderer is not yet implemented")}if(delete n.webgpu,delete n.webgl,!a)throw new Error("No available renderer for the current environment");const r=new a;return await r.init(n),r}const On="8.8.1";class Cn{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,On)}static destroy(){}}Cn.extension=M.Application;class Wo{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,On)}destroy(){this._renderer=null}}Wo.extension={type:[M.WebGLSystem,M.WebGPUSystem],name:"initHook",priority:-10};const Bn=class pa{constructor(...e){this.stage=new ha,e[0]!==void 0&&la(ca,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Mo(e),pa._plugins.forEach(a=>{a.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return la(ca,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,a=!1){const n=pa._plugins.slice(0);n.reverse(),n.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(a),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Bn._plugins=[];let Fn=Bn;He.handleByList(M.Application,Fn._plugins);He.add(Cn);class Mn extends wo{constructor(e,a){super();const{textures:n,data:r}=e;Object.keys(r.pages).forEach(i=>{const l=r.pages[parseInt(i,10)],d=n[l.id];this.pages.push({texture:d})}),Object.keys(r.chars).forEach(i=>{const l=r.chars[i],{frame:d,source:h}=n[l.page],b=new yo(l.x+d.x,l.y+d.y,l.width,l.height),p=new qe({source:h,frame:b});this.chars[i]={id:i.codePointAt(0),xOffset:l.xOffset,yOffset:l.yOffset,xAdvance:l.xAdvance,kerning:l.kerning??{},texture:p}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=a}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:a}=this.pages[e];a.destroy(!0)}this.pages=null}static install(e){dn.install(e)}static uninstall(e){dn.uninstall(e)}}const ra={test(s){return typeof s=="string"&&s.startsWith("info face=")},parse(s){const e=s.match(/^[a-z]+\s+.+$/gm),a={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const v in e){const m=e[v].match(/^[a-z]+/gm)[0],E=e[v].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),T={};for(const K in E){const B=E[K].split("="),R=B[0],j=B[1].replace(/"/gm,""),ae=parseFloat(j),ne=isNaN(ae)?j:ae;T[R]=ne}a[m].push(T)}const n={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=a.info,[i]=a.common,[l]=a.distanceField??[];l&&(n.distanceField={range:parseInt(l.distanceRange,10),type:l.fieldType}),n.fontSize=parseInt(r.size,10),n.fontFamily=r.face,n.lineHeight=parseInt(i.lineHeight,10);const d=a.page;for(let v=0;v<d.length;v++)n.pages.push({id:parseInt(d[v].id,10)||0,file:d[v].file});const h={};n.baseLineOffset=n.lineHeight-parseInt(i.base,10);const b=a.char;for(let v=0;v<b.length;v++){const m=b[v],E=parseInt(m.id,10);let T=m.letter??m.char??String.fromCharCode(E);T==="space"&&(T=" "),h[E]=T,n.chars[T]={id:E,page:parseInt(m.page,10)||0,x:parseInt(m.x,10),y:parseInt(m.y,10),width:parseInt(m.width,10),height:parseInt(m.height,10),xOffset:parseInt(m.xoffset,10),yOffset:parseInt(m.yoffset,10),xAdvance:parseInt(m.xadvance,10),kerning:{}}}const p=a.kerning||[];for(let v=0;v<p.length;v++){const m=parseInt(p[v].first,10),E=parseInt(p[v].second,10),T=parseInt(p[v].amount,10);n.chars[h[E]].kerning[h[m]]=T}return n}},vn={test(s){const e=s;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(s){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},a=s.getElementsByTagName("info")[0],n=s.getElementsByTagName("common")[0],r=s.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const i=s.getElementsByTagName("page"),l=s.getElementsByTagName("char"),d=s.getElementsByTagName("kerning");e.fontSize=parseInt(a.getAttribute("size"),10),e.fontFamily=a.getAttribute("face"),e.lineHeight=parseInt(n.getAttribute("lineHeight"),10);for(let b=0;b<i.length;b++)e.pages.push({id:parseInt(i[b].getAttribute("id"),10)||0,file:i[b].getAttribute("file")});const h={};e.baseLineOffset=e.lineHeight-parseInt(n.getAttribute("base"),10);for(let b=0;b<l.length;b++){const p=l[b],v=parseInt(p.getAttribute("id"),10);let m=p.getAttribute("letter")??p.getAttribute("char")??String.fromCharCode(v);m==="space"&&(m=" "),h[v]=m,e.chars[m]={id:v,page:parseInt(p.getAttribute("page"),10)||0,x:parseInt(p.getAttribute("x"),10),y:parseInt(p.getAttribute("y"),10),width:parseInt(p.getAttribute("width"),10),height:parseInt(p.getAttribute("height"),10),xOffset:parseInt(p.getAttribute("xoffset"),10),yOffset:parseInt(p.getAttribute("yoffset"),10),xAdvance:parseInt(p.getAttribute("xadvance"),10),kerning:{}}}for(let b=0;b<d.length;b++){const p=parseInt(d[b].getAttribute("first"),10),v=parseInt(d[b].getAttribute("second"),10),m=parseInt(d[b].getAttribute("amount"),10);e.chars[h[v]].kerning[h[p]]=m}return e}},mn={test(s){return typeof s=="string"&&s.includes("<font>")?vn.test(ge.get().parseXML(s)):!1},parse(s){return vn.parse(ge.get().parseXML(s))}},zo=[".xml",".fnt"],jo={extension:{type:M.CacheParser,name:"cacheBitmapFont"},test:s=>s instanceof Mn,getCacheableAssets(s,e){const a={};return s.forEach(n=>{a[n]=e,a[`${n}-bitmap`]=e}),a[`${e.fontFamily}-bitmap`]=e,a}},No={extension:{type:M.LoadParser,priority:ft.Normal},name:"loadBitmapFont",test(s){return zo.includes(Qe.extname(s).toLowerCase())},async testParse(s){return ra.test(s)||mn.test(s)},async parse(s,e,a){const n=ra.test(s)?ra.parse(s):mn.parse(s),{src:r}=e,{pages:i}=n,l=[],d=n.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let v=0;v<i.length;++v){const m=i[v].file;let E=Qe.join(Qe.dirname(r),m);E=bo(E,r),l.push({src:E,data:d})}const h=await a.load(l),b=l.map(v=>h[v.src]);return new Mn({data:n,textures:b},r)},async load(s,e){return await(await ge.get().fetch(s)).text()},async unload(s,e,a){await Promise.all(s.pages.map(n=>a.unload(n.texture.source._sourceOrigin))),s.destroy()}};class Do{constructor(e,a=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=a}add(e){e.forEach(a=>{this._assetList.push(a)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],a=Math.min(this._assetList.length,this._maxConcurrent);for(let n=0;n<a;n++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Uo={extension:{type:M.CacheParser,name:"cacheTextureArray"},test:s=>Array.isArray(s)&&s.every(e=>e instanceof qe),getCacheableAssets:(s,e)=>{const a={};return s.forEach(n=>{e.forEach((r,i)=>{a[n+(i===0?"":i+1)]=r})}),a}};async function Wn(s){if("Image"in globalThis)return new Promise(e=>{const a=new Image;a.onload=()=>{e(!0)},a.onerror=()=>{e(!1)},a.src=s});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(s)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Go={extension:{type:M.DetectionParser,priority:1},test:async()=>Wn("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async s=>[...s,"avif"],remove:async s=>s.filter(e=>e!=="avif")},yn=["png","jpg","jpeg"],Ho={extension:{type:M.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async s=>[...s,...yn],remove:async s=>s.filter(e=>!yn.includes(e))},Vo="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function va(s){return Vo?!1:document.createElement("video").canPlayType(s)!==""}const Yo={extension:{type:M.DetectionParser,priority:0},test:async()=>va("video/mp4"),add:async s=>[...s,"mp4","m4v"],remove:async s=>s.filter(e=>e!=="mp4"&&e!=="m4v")},Xo={extension:{type:M.DetectionParser,priority:0},test:async()=>va("video/ogg"),add:async s=>[...s,"ogv"],remove:async s=>s.filter(e=>e!=="ogv")},Ko={extension:{type:M.DetectionParser,priority:0},test:async()=>va("video/webm"),add:async s=>[...s,"webm"],remove:async s=>s.filter(e=>e!=="webm")},qo={extension:{type:M.DetectionParser,priority:0},test:async()=>Wn("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async s=>[...s,"webp"],remove:async s=>s.filter(e=>e!=="webp")};class Qo{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,a,n)=>(this._parsersValidated=!1,e[a]=n,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,a){const n={promise:null,parser:null};return n.promise=(async()=>{var l,d;let r=null,i=null;if(a.loadParser&&(i=this._parserHash[a.loadParser],i||Ge(`[Assets] specified load parser "${a.loadParser}" not found while loading ${e}`)),!i){for(let h=0;h<this.parsers.length;h++){const b=this.parsers[h];if(b.load&&((l=b.test)!=null&&l.call(b,e,a,this))){i=b;break}}if(!i)return Ge(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await i.load(e,a,this),n.parser=i;for(let h=0;h<this.parsers.length;h++){const b=this.parsers[h];b.parse&&b.parse&&await((d=b.testParse)==null?void 0:d.call(b,r,a,this))&&(r=await b.parse(r,a,this)||r,n.parser=b)}return r})(),n}async load(e,a){this._parsersValidated||this._validateParsers();let n=0;const r={},i=Sn(e),l=St(e,b=>({alias:[b],src:b,data:{}})),d=l.length,h=l.map(async b=>{const p=Qe.toAbsolute(b.src);if(!r[b.src])try{this.promiseCache[p]||(this.promiseCache[p]=this._getLoadPromiseAndParser(p,b)),r[b.src]=await this.promiseCache[p].promise,a&&a(++n/d)}catch(v){throw delete this.promiseCache[p],delete r[b.src],new Error(`[Loader.load] Failed to load ${p}.
${v}`)}});return await Promise.all(h),i?r[l[0].src]:r}async unload(e){const n=St(e,r=>({alias:[r],src:r})).map(async r=>{var d,h;const i=Qe.toAbsolute(r.src),l=this.promiseCache[i];if(l){const b=await l.promise;delete this.promiseCache[i],await((h=(d=l.parser)==null?void 0:d.unload)==null?void 0:h.call(d,b,r,this))}});await Promise.all(n)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,a)=>(a.name?e[a.name]&&Ge(`[Assets] loadParser name conflict "${a.name}"`):Ge("[Assets] loadParser should have a name"),{...e,[a.name]:a}),{})}}function ut(s,e){if(Array.isArray(e)){for(const a of e)if(s.startsWith(`data:${a}`))return!0;return!1}return s.startsWith(`data:${e}`)}const Jo=".json",Zo="application/json",ei={extension:{type:M.LoadParser,priority:ft.Low},name:"loadJson",test(s){return ut(s,Zo)||pt(s,Jo)},async load(s){return await(await ge.get().fetch(s)).json()}},ti=".txt",si="text/plain",ai={name:"loadTxt",extension:{type:M.LoadParser,priority:ft.Low,name:"loadTxt"},test(s){return ut(s,si)||pt(s,ti)},async load(s){return await(await ge.get().fetch(s)).text()}},ni=["normal","bold","100","200","300","400","500","600","700","800","900"],ri=[".ttf",".otf",".woff",".woff2"],oi=["font/ttf","font/otf","font/woff","font/woff2"],ii=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function li(s){const e=Qe.extname(s),r=Qe.basename(s,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(d=>d.charAt(0).toUpperCase()+d.slice(1));let i=r.length>0;for(const d of r)if(!d.match(ii)){i=!1;break}let l=r.join(" ");return i||(l=`"${l.replace(/[\\"]/g,"\\$&")}"`),l}const ci=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function di(s){return ci.test(s)?s:encodeURI(s)}const fi={extension:{type:M.LoadParser,priority:ft.Low},name:"loadWebFont",test(s){return ut(s,oi)||pt(s,ri)},async load(s,e){var n,r,i;const a=ge.get().getFontFaceSet();if(a){const l=[],d=((n=e.data)==null?void 0:n.family)??li(s),h=((i=(r=e.data)==null?void 0:r.weights)==null?void 0:i.filter(p=>ni.includes(p)))??["normal"],b=e.data??{};for(let p=0;p<h.length;p++){const v=h[p],m=new FontFace(d,`url(${di(s)})`,{...b,weight:v});await m.load(),a.add(m),l.push(m)}return Oe.set(`${d}-and-url`,{url:s,fontFaces:l}),l.length===1?l[0]:l}return Ge("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(s){(Array.isArray(s)?s:[s]).forEach(e=>{Oe.remove(`${e.family}-and-url`),ge.get().getFontFaceSet().delete(e)})}};function ma(s,e=1){var n;const a=(n=Xt.RETINA_PREFIX)==null?void 0:n.exec(s);return a?parseFloat(a[1]):e}function ya(s,e,a){s.label=a,s._sourceOrigin=a;const n=new qe({source:s,label:a}),r=()=>{delete e.promiseCache[a],Oe.has(a)&&Oe.remove(a)};return n.source.once("destroy",()=>{e.promiseCache[a]&&(Ge("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),n.once("destroy",()=>{s.destroyed||(Ge("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),n}const pi=".svg",ui="image/svg+xml",gi={extension:{type:M.LoadParser,priority:ft.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(s){return ut(s,ui)||pt(s,pi)},async load(s,e,a){var n;return((n=e.data)==null?void 0:n.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?vi(s):hi(s,e,a,this.config.crossOrigin)},unload(s){s.destroy(!0)}};async function hi(s,e,a,n){var B,R,j;const i=await(await ge.get().fetch(s)).blob(),l=URL.createObjectURL(i),d=new Image;d.src=l,d.crossOrigin=n,await d.decode(),URL.revokeObjectURL(l);const h=document.createElement("canvas"),b=h.getContext("2d"),p=((B=e.data)==null?void 0:B.resolution)||ma(s),v=((R=e.data)==null?void 0:R.width)??d.width,m=((j=e.data)==null?void 0:j.height)??d.height;h.width=v*p,h.height=m*p,b.drawImage(d,0,0,v*p,m*p);const{parseAsGraphicsContext:E,...T}=e.data??{},K=new En({resource:h,alphaMode:"premultiply-alpha-on-upload",resolution:p,...T});return ya(K,a,s)}async function vi(s){const a=await(await ge.get().fetch(s)).text(),n=new _o;return n.svg(a),n}const mi=`(function () {
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
`;let ct=null,ua=class{constructor(){ct||(ct=URL.createObjectURL(new Blob([mi],{type:"application/javascript"}))),this.worker=new Worker(ct)}};ua.revokeObjectURL=function(){ct&&(URL.revokeObjectURL(ct),ct=null)};const yi=`(function () {
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
`;let dt=null;class zn{constructor(){dt||(dt=URL.createObjectURL(new Blob([yi],{type:"application/javascript"}))),this.worker=new Worker(dt)}}zn.revokeObjectURL=function(){dt&&(URL.revokeObjectURL(dt),dt=null)};let bn=0,oa;class bi{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:a}=new ua;a.addEventListener("message",n=>{a.terminate(),ua.revokeObjectURL(),e(n.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,a){var n;return this._run("loadImageBitmap",[e,(n=a==null?void 0:a.data)==null?void 0:n.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){oa===void 0&&(oa=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<oa&&(this._createdWorkers++,e=new zn().worker,e.addEventListener("message",a=>{this._complete(a.data),this._returnWorker(a.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,a){await this._initWorkers();const n=new Promise((r,i)=>{this._queue.push({id:e,arguments:a,resolve:r,reject:i})});return this._next(),n}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const a=this._queue.pop(),n=a.id;this._resolveHash[bn]={resolve:a.resolve,reject:a.reject},e.postMessage({data:a.arguments,uuid:bn++,id:n})}}const xn=new bi,xi=[".jpeg",".jpg",".png",".webp",".avif"],wi=["image/jpeg","image/png","image/webp","image/avif"];async function _i(s,e){var r;const a=await ge.get().fetch(s);if(!a.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${s}: ${a.status} ${a.statusText}`);const n=await a.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(n,{premultiplyAlpha:"none"}):createImageBitmap(n)}const jn={name:"loadTextures",extension:{type:M.LoadParser,priority:ft.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(s){return ut(s,wi)||pt(s,xi)},async load(s,e,a){var i;let n=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await xn.isImageBitmapSupported()?n=await xn.loadImageBitmap(s,e):n=await _i(s,e):n=await new Promise((l,d)=>{n=new Image,n.crossOrigin=this.config.crossOrigin,n.src=s,n.complete?l(n):(n.onload=()=>{l(n)},n.onerror=d)});const r=new En({resource:n,alphaMode:"premultiply-alpha-on-upload",resolution:((i=e.data)==null?void 0:i.resolution)||ma(s),...e.data});return ya(r,a,s)},unload(s){s.destroy(!0)}},Nn=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Ai=Nn.map(s=>`video/${s.substring(1)}`);function ki(s,e,a){a===void 0&&!e.startsWith("data:")?s.crossOrigin=Si(e):a!==!1&&(s.crossOrigin=typeof a=="string"?a:"anonymous")}function $i(s){return new Promise((e,a)=>{s.addEventListener("canplaythrough",n),s.addEventListener("error",r),s.load();function n(){i(),e()}function r(l){i(),a(l)}function i(){s.removeEventListener("canplaythrough",n),s.removeEventListener("error",r)}})}function Si(s,e=globalThis.location){if(s.startsWith("data:"))return"";e||(e=globalThis.location);const a=new URL(s,document.baseURI);return a.hostname!==e.hostname||a.port!==e.port||a.protocol!==e.protocol?"anonymous":""}const Ei={name:"loadVideo",extension:{type:M.LoadParser,name:"loadVideo"},test(s){const e=ut(s,Ai),a=pt(s,Nn);return e||a},async load(s,e,a){var h,b;const n={...ta.defaultOptions,resolution:((h=e.data)==null?void 0:h.resolution)||ma(s),alphaMode:((b=e.data)==null?void 0:b.alphaMode)||await xo(),...e.data},r=document.createElement("video"),i={preload:n.autoLoad!==!1?"auto":void 0,"webkit-playsinline":n.playsinline!==!1?"":void 0,playsinline:n.playsinline!==!1?"":void 0,muted:n.muted===!0?"":void 0,loop:n.loop===!0?"":void 0,autoplay:n.autoPlay!==!1?"":void 0};Object.keys(i).forEach(p=>{const v=i[p];v!==void 0&&r.setAttribute(p,v)}),n.muted===!0&&(r.muted=!0),ki(r,s,n.crossorigin);const l=document.createElement("source");let d;if(s.startsWith("data:"))d=s.slice(5,s.indexOf(";"));else if(!s.startsWith("blob:")){const p=s.split("?")[0].slice(s.lastIndexOf(".")+1).toLowerCase();d=ta.MIME_TYPES[p]||`video/${p}`}return l.src=s,d&&(l.type=d),new Promise(p=>{const v=async()=>{const m=new ta({...n,resource:r});r.removeEventListener("canplay",v),e.data.preload&&await $i(r),p(ya(m,a,s))};r.addEventListener("canplay",v),r.appendChild(l)})},unload(s){s.destroy(!0)}},Dn={extension:{type:M.ResolveParser,name:"resolveTexture"},test:jn.test,parse:s=>{var e;return{resolution:parseFloat(((e=Xt.RETINA_PREFIX.exec(s))==null?void 0:e[1])??"1"),format:s.split(".").pop(),src:s}}},Li={extension:{type:M.ResolveParser,priority:-2,name:"resolveJson"},test:s=>Xt.RETINA_PREFIX.test(s)&&s.endsWith(".json"),parse:Dn.parse};class Ti{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Xt,this.loader=new Qo,this.cache=Oe,this._backgroundLoader=new Do(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var i,l;if(this._initialized){Ge("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let d=e.manifest;typeof d=="string"&&(d=await this.load(d)),this.resolver.addManifest(d)}const a=((i=e.texturePreference)==null?void 0:i.resolution)??1,n=typeof a=="number"?[a]:a,r=await this._detectFormats({preferredFormats:(l=e.texturePreference)==null?void 0:l.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:n}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,a){this._initialized||await this.init();const n=Sn(e),r=St(e).map(d=>{if(typeof d!="string"){const h=this.resolver.getAlias(d);return h.some(b=>!this.resolver.hasKey(b))&&this.add(d),Array.isArray(h)?h[0]:h}return this.resolver.hasKey(d)||this.add({alias:d,src:d}),d}),i=this.resolver.resolve(r),l=await this._mapLoadToResolve(i,a);return n?l[r[0]]:l}addBundle(e,a){this.resolver.addBundle(e,a)}async loadBundle(e,a){this._initialized||await this.init();let n=!1;typeof e=="string"&&(n=!0,e=[e]);const r=this.resolver.resolveBundle(e),i={},l=Object.keys(r);let d=0,h=0;const b=()=>{a==null||a(++d/h)},p=l.map(v=>{const m=r[v];return h+=Object.keys(m).length,this._mapLoadToResolve(m,b).then(E=>{i[v]=E})});return await Promise.all(p),n?i[e[0]]:i}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(a))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolveBundle(e);Object.values(a).forEach(n=>{this._backgroundLoader.add(Object.values(n))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Oe.get(e);const a={};for(let n=0;n<e.length;n++)a[n]=Oe.get(e[n]);return a}async _mapLoadToResolve(e,a){const n=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(n,a);this._backgroundLoader.active=!0;const i={};return n.forEach(l=>{const d=r[l.src],h=[l.src];l.alias&&h.push(...l.alias),h.forEach(b=>{i[b]=d}),Oe.set(h,d)}),i}async unload(e){this._initialized||await this.init();const a=St(e).map(r=>typeof r!="string"?r.src:r),n=this.resolver.resolve(a);await this._unloadFromResolved(n)}async unloadBundle(e){this._initialized||await this.init(),e=St(e);const a=this.resolver.resolveBundle(e),n=Object.keys(a).map(r=>this._unloadFromResolved(a[r]));await Promise.all(n)}async _unloadFromResolved(e){const a=Object.values(e);a.forEach(n=>{Oe.remove(n.src)}),await this.loader.unload(a)}async _detectFormats(e){let a=[];e.preferredFormats&&(a=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const n of e.detections)e.skipDetections||await n.test()?a=await n.add(a):e.skipDetections||(a=await n.remove(a));return a=a.filter((n,r)=>a.indexOf(n)===r),a}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(a=>{a.config&&Object.keys(a.config).filter(n=>n in e).forEach(n=>{a.config[n]=e[n]})})}}const lt=new Ti;He.handleByList(M.LoadParser,lt.loader.parsers).handleByList(M.ResolveParser,lt.resolver.parsers).handleByList(M.CacheParser,lt.cache.parsers).handleByList(M.DetectionParser,lt.detections);He.add(Uo,Ho,Go,qo,Yo,Xo,Ko,ei,ai,fi,gi,jn,Ei,No,jo,Dn,Li);const wn={loader:M.LoadParser,resolver:M.ResolveParser,cache:M.CacheParser,detection:M.DetectionParser};He.handle(M.Asset,s=>{const e=s.ref;Object.entries(wn).filter(([a])=>!!e[a]).forEach(([a,n])=>He.add(Object.assign(e[a],{extension:e[a].extension??n})))},s=>{const e=s.ref;Object.keys(wn).filter(a=>!!e[a]).forEach(a=>He.remove(e[a]))});var Ri=Z('<div class="win-label svelte-1vsph43">BIG WIN!</div> <div class="win-amount-display svelte-1vsph43"> </div>',1),Pi=_n('<use href="#sparkle" class="sparkle svelte-1vsph43"></use>'),Ii=_n('<use href="#vinyl"></use>'),Oi=Z('<div><!> <svg class="vinyl-canvas svelte-1vsph43" viewBox="0 0 1024 800" xmlns="http://www.w3.org/2000/svg"><defs class="svelte-1vsph43"><symbol id="vinyl" viewBox="-200 -200 400 400" class="svelte-1vsph43"><circle cx="0" cy="0" r="180" fill="#0b0b0b" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="150" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.3" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="120" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.25" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="90" fill="none" stroke="#1a1a1a" stroke-width="1.5" opacity="0.2" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="55" fill="var(--label-color)" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="6" fill="#ffffff" class="svelte-1vsph43"></circle><ellipse cx="-15" cy="-15" rx="20" ry="15" fill="#ffffff" opacity="0.3" transform="rotate(-30)" class="svelte-1vsph43"></ellipse></symbol><symbol id="sparkle" viewBox="-12 -12 24 24" class="svelte-1vsph43"><polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ffd966" class="svelte-1vsph43"></polygon><circle cx="0" cy="0" r="2" fill="#ffffff" class="svelte-1vsph43"></circle></symbol><symbol id="confetti" viewBox="-3 -3 6 6" class="svelte-1vsph43"><circle cx="0" cy="0" r="2" fill="var(--confetti-color)" class="svelte-1vsph43"></circle></symbol></defs><!><!></svg></div>');function Ci(s,e){Vt(e,!0);let a=it(e,"winLevel",3,"small"),n=it(e,"winAmount",3,0),r=it(e,"vinylStartScale",3,.01),i=it(e,"vinylEndScale",3,.15),l=it(e,"sparkleScale",3,.6),d=P(!1),h=P(!1);const b={small:{vinyls:5,sparkles:8,maxRadius:70},medium:{vinyls:12,sparkles:16,maxRadius:100},jackpot:{vinyls:24,sparkles:30,maxRadius:130}},p=Ue(()=>b[a()]),v=["#f04e37","#ffd966","#ff8533","#4ecdc4","#ff6b9d"];function m(U){const ie=[],Re=t(p).maxRadius;for(let D=0;D<U;D++){const X=Math.PI*2*D/U+Math.random()*.4,Ce=Math.random()*Re*.7+Re*.2;ie.push({x:512+Math.cos(X)*Ce,y:400+Math.sin(X)*Ce,rotation:Math.random()*30-15,scale:i()*(.8+Math.random()*.4),delay:D*.05,color:v[D%v.length]})}return ie}function E(U){const ie=[];for(let le=0;le<U;le++)ie.push({x:100+Math.random()*824,y:50+Math.random()*700,delay:Math.random()*.8,duration:.6+Math.random()*.4,rotation:Math.random()*360});return ie}const T=Ue(()=>m(t(p).vinyls)),K=Ue(()=>E(t(p).sparkles));function B(){g(d,!0),g(h,!0),setTimeout(()=>{g(h,!1),setTimeout(()=>{var U;g(d,!1),(U=e.onComplete)==null||U.call(e)},500)},a()==="jackpot"?4e3:a()==="medium"?3e3:2500)}function R(){g(h,!1),setTimeout(()=>{g(d,!1)},500)}var j=Ut(),ae=Ve(j);{var ne=U=>{var ie=Oi();let le;var xe=w(ie);{var Re=we=>{var ee=Ri(),he=u(Ve(ee),2),Je=w(he,!0);_(he),te(Pe=>q(Je,Pe),[()=>n().toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),V(we,ee)};se(xe,we=>{n()>0&&we(Re)})}var D=u(xe,2),X=u(w(D));Ht(X,17,()=>t(K),Gt,(we,ee)=>{var he=Pi();te(()=>x(he,"style",`
            --sx: ${t(ee).x??""}px;
            --sy: ${t(ee).y??""}px;
            --duration: ${t(ee).duration??""}s;
            --sparkle-delay: ${t(ee).delay??""}s;
            --sparkle-scale: ${l()??""};
          `)),V(we,he)});var Ce=u(X);Ht(Ce,17,()=>t(T),Gt,(we,ee)=>{var he=Ii();let Je;te(()=>{Je=da(he,0,"vinyl-group svelte-1vsph43",null,Je,{floating:t(h)}),x(he,"style",`
            --tx: ${t(ee).x??""}px;
            --ty: ${t(ee).y??""}px;
            --scale: ${t(ee).scale??""};
            --rotation: ${t(ee).rotation??""}deg;
            --delay: ${t(ee).delay??""}s;
            --label-color: ${t(ee).color??""};
            --start-scale: ${r()??""};
          `)}),V(we,he)}),_(D),_(ie),te(()=>le=da(ie,1,"vinyl-win-container svelte-1vsph43",null,le,{visible:t(h),hiding:!t(h)})),V(U,ie)};se(ae,U=>{t(d)&&U(ne)})}return V(s,j),Yt({show:B,hide:R})}var Bi=Z(`<div style="
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
			">Please wait...</div>`),Mi=Z('<div role="button" tabindex="0"><span style="position: absolute; left: -9999px;">Click anywhere to continue</span> <!></div>');function Wi(s,e){Vt(e,!0);let a=P(!1),n=P(!1),r=P(!1),i=P(0);ga(()=>{const v=setInterval(()=>{g(i,t(i)+2),t(i)>=100&&(clearInterval(v),g(i,100),setTimeout(()=>{g(n,!0),setTimeout(()=>{g(r,!0)},3e3)},500))},60);return()=>clearInterval(v)});function l(){t(n)&&t(r)&&!t(a)&&(g(a,!0),setTimeout(()=>e.onloaded(),300))}var d=Ut(),h=Ve(d);{var b=v=>{var m=Bi(),E=w(m);x(E,"src",`${be??""}/loading_screen/MadCraneLogo.jpg`);var T=u(E,2),K=w(T);_(T);var B=u(T,2),R=w(B);_(B),_(m),te(j=>{x(K,"style",`
				width: ${t(i)??""}%;
				height: 100%;
				background: linear-gradient(90deg, #ff0000, #ff6600);
				transition: width 0.3s ease;
			`),q(R,`Loading... ${j??""}%`)},[()=>Math.round(t(i))]),V(v,m)},p=v=>{var m=Ut(),E=Ve(m);{var T=K=>{var B=Mi(),R=u(w(B),2);{var j=ae=>{var ne=Fi();V(ae,ne)};se(R,ae=>{t(r)||ae(j)})}_(B),te(()=>x(B,"style",`
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background-image: url('${be??""}/loading_screen/Splash_screen_RockabillyReels.jpeg');
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			cursor: ${(t(r)?"pointer":"default")??""};
			z-index: 10000;
		`)),F("click",B,l),F("keydown",B,ae=>ae.key==="Enter"&&l()),V(K,B)};se(E,K=>{t(n)&&!t(a)&&K(T)},!0)}V(v,m)};se(h,v=>{t(n)?v(p,!1):v(b)})}V(s,d),Yt()}var zi=Ur('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-11fybce"><\/script><!---->',1),ji=Z('<p style="color: red;" class="svelte-11fybce"><strong class="svelte-11fybce">Error:</strong> </p>'),Ni=Z('<div class="svelte-11fybce"> </div>'),Di=Z('<details class="svelte-11fybce"><summary class="svelte-11fybce"> </summary> <!></details>'),Ui=Z(`<div style="
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
  " class="svelte-11fybce"><h3 class="svelte-11fybce">🎰 Oma-peli Debug</h3> <p class="svelte-11fybce"><strong class="svelte-11fybce">Status:</strong> </p> <!> <p class="svelte-11fybce"><strong class="svelte-11fybce">Base:</strong> </p> <p class="svelte-11fybce"><strong class="svelte-11fybce">BG URL:</strong> </p> <p class="svelte-11fybce"><strong class="svelte-11fybce">Sample:</strong> </p> <!></div>`),Gi=Z('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-11fybce"> </div>'),Hi=Z('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-11fybce"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-11fybce"> </span></div>'),Vi=Z(`<div style="
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
  " class="svelte-11fybce"><h2 style="margin: 0 0 10px 0; font-size: 2em;" class="svelte-11fybce">🎉 VOITTO! 🎉</h2> <div style="font-size: 1.5em; font-weight: bold; margin: 10px 0;" class="svelte-11fybce"> </div> <!> <!> <button style="
        margin-top: 15px;
        padding: 8px 16px;
        background: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
      " class="svelte-11fybce">Jatka pelaamista</button></div>`),Yi=Z(`<div class="svelte-11fybce"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-11fybce">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-11fybce">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-11fybce"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-11fybce"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-11fybce"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-11fybce">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-11fybce">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-11fybce">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-11fybce">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-11fybce"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-11fybce">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-11fybce">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-11fybce">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-11fybce">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-11fybce">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-11fybce"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-11fybce">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-11fybce">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-11fybce">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-11fybce">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-11fybce"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-11fybce">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-11fybce">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-11fybce">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-11fybce">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-11fybce"> <span style="color: #ffd700;" class="svelte-11fybce">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-11fybce">Sulje</button></div>`),Xi=Z(`<div style="
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
  " class="svelte-11fybce"><div style="
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: white;
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      border: 3px solid #ffd700;
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
      max-width: 500px;
      font-family: Arial, sans-serif;
    " class="svelte-11fybce"><h1 style="
        margin: 0 0 20px 0;
        font-size: 2.5em;
        color: #ffd700;
        text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
      " class="svelte-11fybce">🎰 VAPAAPELIT PÄÄTTYIVÄT! 🎰</h1> <div style="
        font-size: 1.2em;
        margin: 20px 0;
        color: #aaa;
      " class="svelte-11fybce">Voitit yhteensä:</div> <div style="
        font-size: 3em;
        font-weight: bold;
        color: #00ff00;
        text-shadow: 0 0 15px rgba(0, 255, 0, 0.8);
        margin: 20px 0;
      " class="svelte-11fybce"> </div> <button style="
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
        " class="svelte-11fybce">JATKA PERUSPELIIN</button></div></div>`),Ki=Z('<div class="svelte-11fybce"><div class="svelte-11fybce">🔄 Select Rounds</div> <button class="svelte-11fybce">10 Rounds</button> <button class="svelte-11fybce">25 Rounds</button> <button class="svelte-11fybce">50 Rounds</button> <button class="svelte-11fybce">100 Rounds</button> <button class="svelte-11fybce">200 Rounds</button> <button class="svelte-11fybce">500 Rounds</button> <button class="svelte-11fybce">1,000 Rounds</button> <button class="svelte-11fybce">5,000 Rounds</button> <button class="svelte-11fybce">Cancel</button></div>'),qi=Z(`<!>  <!>   <!>   <!>   <!>  <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
" class="svelte-11fybce"><div class="svelte-11fybce"><div class="svelte-11fybce"><button class="svelte-11fybce">💰 PAYTABLE</button>  <div class="control-panel-mobile svelte-11fybce"><!>  <img alt="Left End" class="svelte-11fybce"> <div class="svelte-11fybce"><div style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;" class="svelte-11fybce"><div style="display: flex; flex-direction: column; align-items: center;" class="svelte-11fybce"><div class="svelte-11fybce">BET</div> <div class="svelte-11fybce"><button title="Decrease Bet" class="svelte-11fybce"></button> <div class="svelte-11fybce"> </div> <button title="Increase Bet" class="svelte-11fybce"></button></div></div> <img alt="Divider" class="svelte-11fybce"> <div style="display: flex; flex-direction: column; align-items: center;" class="svelte-11fybce"><div class="svelte-11fybce">BALANCE</div> <div class="svelte-11fybce"><div class="svelte-11fybce"> </div></div></div> <img alt="Divider" class="svelte-11fybce"></div> <div class="svelte-11fybce"></div> <div style="position: absolute; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; z-index: 10;" class="svelte-11fybce"><div><button class="svelte-11fybce"></button></div></div> <div style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;" class="svelte-11fybce"><div class="svelte-11fybce"><button class="svelte-11fybce"></button> <img alt="Status bar" class="svelte-11fybce"></div> <img alt="Divider" class="svelte-11fybce"> <div class="svelte-11fybce"><button class="svelte-11fybce"></button> <img alt="Speed bar" class="svelte-11fybce"></div> <img alt="Divider" class="svelte-11fybce"> <div style="display: flex; flex-direction: column; align-items: center;" class="svelte-11fybce"><div class="svelte-11fybce">WIN</div> <div class="svelte-11fybce"><div class="svelte-11fybce"> </div></div></div> <img alt="Divider" class="svelte-11fybce"> <div style="display: flex; align-items: center; justify-content: center;" class="svelte-11fybce"><button title="Menu" class="svelte-11fybce"></button></div></div></div> <img alt="Right End" class="svelte-11fybce"></div></div>  <button class="svelte-11fybce"></button> <!>   <div class="debug-panel svelte-11fybce"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-11fybce">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-11fybce"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-11fybce"><span style="color: #aaa;" class="svelte-11fybce">Rounds:</span> <span style="color: #fff;" class="svelte-11fybce"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-11fybce"><span style="color: #aaa;" class="svelte-11fybce">Wagered:</span> <span style="color: #ff6666;" class="svelte-11fybce"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-11fybce"><span style="color: #aaa;" class="svelte-11fybce">Won:</span> <span style="color: #66ff66;" class="svelte-11fybce"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 10px; 
    padding-top: 10px; 
    border-top: 1px solid #555;
    font-weight: bold;
    font-size: 18px;
  " class="svelte-11fybce"><span style="color: #ffd700;" class="svelte-11fybce">RTP:</span> <span class="svelte-11fybce"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
  " class="svelte-11fybce"><span style="color: #aaa;" class="svelte-11fybce">Hit Freq:</span> <span class="svelte-11fybce"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-size: 14px;
  " class="svelte-11fybce"><span style="color: #aaa;" class="svelte-11fybce">Free Spins Triggered:</span> <span style="color: #66ccff;" class="svelte-11fybce"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 4px;
    font-size: 14px;
  " class="svelte-11fybce"><span style="color: #aaa;" class="svelte-11fybce">Free Spins Played:</span> <span style="color: #66ccff;" class="svelte-11fybce"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #555;
    font-size: 14px;
  " class="svelte-11fybce"><span style="color: #aaa;" class="svelte-11fybce">Empty Slots:</span> <span style="color: #ff9900;" class="svelte-11fybce"> </span></div> <button style="
      margin-top: 10px;
      width: 100%;
      padding: 5px;
      background: rgba(255, 100, 100, 0.3);
      color: #fff;
      border: 1px solid #ff6666;
      border-radius: 5px;
      cursor: pointer;
      font-size: 11px;
    " class="svelte-11fybce">Reset Stats</button> <div style="
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  " class="svelte-11fybce"><button class="svelte-11fybce"> </button> <button class="svelte-11fybce">Clear Win Log</button> <button class="svelte-11fybce">🎰 Test Free Spins</button></div></div> <div class="svelte-11fybce"><button class="svelte-11fybce"></button> <button class="svelte-11fybce"></button></div></div></div>`,1);function Qi(s,e){Vt(e,!0);const a="1.4.5",n=13,r=1445,i=1e3,l=1.75,d=-25,h=-15,b=175,p=-5,v=750,m=80,E=250,T=0,K=50,B=.5,R=30,j=-10,ne=Math.round(100*l),U=Math.round(ne*(700/760)),le=U+10,xe=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],Re=typeof window<"u"&&window.location.hostname.includes("github.io"),D=Re?"/web-sdk/oma-peli/symbols":`${be}/symbols`,X=Re?"/web-sdk/oma-peli/controls":`${be}/controls`,Ce={a:`${D}/Blue_hotrod.jpg`,b:`${D}/Blue_jacket.jpg`,c:`${D}/Blue_rollers.jpg`,d:`${D}/Blue_speakers.jpg`,e:`${D}/Premium_blonde.jpg`,f:`${D}/Premium_brunette.jpg`,g:`${D}/Premium_rocker.jpg`,h:`${D}/New_Wild.jpg`,i:`${D}/Red_burger.jpg`,j:`${D}/Red_fries.jpg`,k:`${D}/Red_milkshake.jpg`,l:`${D}/Scatter.jpg`,emptyslot:`${D}/Emptyslot.jpg`},we=`${D}/bg_base.jpg`,ee=`${D}/ReelFrames.png`,he=`${D}/RockABillyReels_logo.png`,Je={spin:`${be}/sounds/spin.mp3`,stop:`${be}/sounds/stop.mp3`,win:`${be}/sounds/win.mp3`};let Pe=P(!0),Kt={},W=null,ve=null,qt=null,Qt=null,Le=P(!0),Un=P(!1),Jt=P(1100),Zt=null;const Gn={fast:3,medium:7,slow:18};let me=P("medium"),Be=P(Math.floor(Math.random()*20)+1);const gt={background:()=>`${be}/music/rockabilly reels loop ${t(Be)}.mp3`,freeSpins:`${be}/music/rockabilly-loop_long.mp3`,drumHit:`${be}/music/drum-hit.mp3`,winTheme:`${be}/music/win-stinger.mp3`};function ba(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(ba,500);return}const c=window.Howl;try{W=new c({src:[gt.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+t(Be)+")"),g(Un,!0)},onloaderror:(f,k)=>{console.warn("⚠️ Background music not found:",k)}}),ve=new c({src:[gt.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(f,k)=>console.warn("⚠️ Free spins music not found:",k)}),qt=new c({src:[gt.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Qt=new c({src:[gt.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(f){console.error("Failed to initialize music system:",f)}}function xa(){const c=t(Q)?ve:W;c&&t(Le)&&!c.playing()&&(c.play(),console.log("🎵 "+(t(Q)?"Free spins":"Background")+" music started"))}function Hn(){if(t(Q))return;const c=Math.floor(Math.random()*20)+1;c===t(Be)?g(Be,c%20+1):g(Be,c),console.log("🎵 Changing to loop #"+t(Be)),W&&(W.playing()?(W.fade(W.volume(),0,200),setTimeout(()=>{W.stop(),W.unload()},200)):W.unload());const f=window.Howl;f&&(W=new f({src:[gt.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ New background music loop #"+t(Be)+" loaded"),t(Le)&&!t(Q)&&setTimeout(()=>{W&&!W.playing()&&W.play()},300)},onloaderror:(k,S)=>{console.warn("⚠️ Failed to load loop #"+t(Be)+":",S)}}))}function Vn(){W&&W.playing()&&(W.fade(W.volume(),0,500),setTimeout(()=>W.stop(),500)),ve&&ve.playing()&&(ve.fade(ve.volume(),0,500),setTimeout(()=>ve.stop(),500))}function es(){W&&W.playing()&&(W.fade(W.volume(),0,500),setTimeout(()=>W.stop(),500)),ve&&ve.playing()&&(ve.fade(ve.volume(),0,500),setTimeout(()=>ve.stop(),500)),setTimeout(()=>{t(Le)&&xa()},600)}function Yn(){if(W&&W.playing()){const c=W.volume();W.fade(c,0,1e3),setTimeout(()=>{W.stop(),W.volume(.3)},1e3)}}let ts=P(!1);function Xn(){g(ts,!1),setTimeout(()=>{g(ts,!0)},10)}let Ze=null;const ss={vinylStartScale:.01,vinylEndScale:.05,sparkleScale:.1};function Kn(){g(Le,!t(Le)),t(Le)?xa():Vn()}function qn(){g(Pe,!t(Pe))}function Qn(){qt&&t(Le)&&t(Pe)&&qt.play()}function Jn(){Qt&&t(Le)&&t(Pe)&&Qt.play()}let Et=null,as=null,ht=null,Fe=null,vt=P("Initializing..."),et=P(""),_e=[],wa=P(!1),Me=P(1e3);const _a=[.4,.8,1,1.6,2,3,5,8,10,15,20,25,30,40,50,60,80,100];let mt=P(5),Ae=Ue(()=>_a[t(mt)]),Ye=P(0),ce=P(!1),yt=P(0),de=P(!1),ns=P(!1),Zn=P(0),Xe=!1,Ie=null,rs=!1,tt=P(0),st=P(0),bt=P(0),os=P(0),is=Ue(()=>t(st)>0?(t(bt)/t(st)*100).toFixed(2):"0.00"),ls=Ue(()=>t(tt)>0?(t(os)/t(tt)*100).toFixed(2):"0.00"),Q=P(!1),We=P(0),Ke=P(0),Lt=P(0),cs=P(0),Tt=P(0),ds=P(0),er=Ue(()=>t(Tt)>0?(t(ds)/t(Tt)*100).toFixed(2):"0.00"),ye=P(ue([]));function tr(c,f,k){const S=new Date().toLocaleString("fi-FI");let y=`
${"=".repeat(60)}
`;y+=`ROUND #${c} - ${S}
`,y+=`Mode: ${t(Q)?"FREE SPINS":"BASE GAME"}
`,y+=`${"=".repeat(60)}
`,f.forEach(($,A)=>{y+=`
Win ${A+1}:
`,y+=`  Symbol: ${$.symbol} (${Sa[$.symbol]})
`,y+=`  Count: ${$.count} symbols
`,y+=`  Multiplier: ${$.multiplier}x
`,y+=`  Payout: ${$.payout.toFixed(2)}
`,y+=`  Positions: [${$.positions.join(", ")}]
`}),y+=`
${"─".repeat(60)}
`,y+=`TOTAL WIN: ${k.toFixed(2)}
`,y+=`${"=".repeat(60)}
`,t(ye).push(y)}function sr(){const c=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${t(ye).join(`
`)}`,f=new Blob([c],{type:"text/plain"}),k=URL.createObjectURL(f),S=document.createElement("a");S.href=k,S.download=`win-log-${Date.now()}.txt`,S.click(),URL.revokeObjectURL(k)}function ar(){g(ye,ue([]))}function nr(){t(Q)||(g(Q,!0),g(We,10),g(Ke,0),Se(Lt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),es())}const rr={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},or={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function Aa(c){if(c===6)return Math.random()<.55?"h":"emptyslot";const f=t(Q)?or:rr,k=Math.random();let S=0;const y=xe.filter(A=>A!=="h"),$=y.reduce((A,C)=>A+f[C],0);for(const A of y)if(S+=f[A]/$,k<S)return A;return"f"}function ka(){const c=[];for(let f=0;f<n;f++){const k=Aa(f);c.push(k),Se(Tt),k==="emptyslot"&&Se(ds)}return c}function $a(c){return c<3?{col:0,row:c}:c<6?{col:1,row:c-3}:c===6?{col:2,row:0}:c<10?{col:3,row:c-7}:{col:4,row:c-10}}function xt(c,f){return c===0?f:c===1?3+f:c===2?6:c===3?7+f:c===4?10+f:-1}function ir(){if(t(Q)){const c=Math.random();return c<.7?3:c<.92?5:10}else{const c=Math.random();return c<.7?1:c<.92?2:3}}const lr={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function cr(){var fe;const c=[],f=[];for(let L=0;L<n;L++)wt[L]==="l"&&f.push(L);if(f.length>=5){const L=f.length;g(We,t(We)+L),t(Q)?console.log(`🎰 FREE SPINS RETRIGGERED! +${L} FREE SPINS! Total: ${t(We)}`):(g(Q,!0),g(Ke,0),Se(Lt),console.log(`🎰 FREE SPINS TRIGGERED! ${f.length} scatters = ${L} FREE SPINS!`),es()),c.push({symbol:"l",count:f.length,payout:0,positions:f,multiplier:1})}const k=[];for(let L=0;L<3;L++)for(let O=0;O<3;O++)for(let N=0;N<1;N++)for(let G=0;G<3;G++)for(let Y=0;Y<3;Y++){const H=[xt(0,L),xt(1,O),xt(2,N),xt(3,G),xt(4,Y)];k.push(H)}console.log(`Generated ${k.length} possible paths (should be 81)`);const S=[];for(const L of k){const O=L.map(H=>wt[H]);if(O[0]==="emptyslot"||O[0]==="l")continue;let N=null;for(let H=0;H<O.length;H++)if(O[H]!=="h"&&O[H]!=="emptyslot"&&O[H]!=="l"){N=O[H];break}if(!N)continue;let G=0;const Y=new Set;for(let H=0;H<L.length;H++){const Ne=L[H],{col:ot}=$a(Ne),pe=O[H];(pe===N||pe==="h")&&Y.add(ot)}for(let H=0;H<5&&Y.has(H);H++)G++;if(G>=3){const Ne=L[0]%3;S.push({symbol:N,length:G,path:L.slice(0,G),startRow:Ne})}}const y=[],$=new Map;for(const L of S){const O=`${L.symbol}-${L.path.join(",")}`;$.has(O)||$.set(O,[]),$.get(O).push(L)}for(const[L,O]of $.entries()){const N=Math.max(...O.map(Y=>Y.length)),G=O.find(Y=>Y.length===N);G&&y.push(G)}const A=[],C=new Map;for(const L of y)C.has(L.symbol)||C.set(L.symbol,[]),C.get(L.symbol).push(L);const I=[];for(const[L,O]of C.entries()){const N=Math.max(...O.map(Y=>Y.length)),G=O.filter(Y=>Y.length===N);I.push(...G)}const z=new Map;for(const L of I){const O=`${L.symbol}-${L.length}`;z.has(O)||z.set(O,[]),z.get(O).push(L)}const J=I.length>0?ir():1;for(const[L,O]of z.entries()){const N=O[0],G=(fe=lr[N.symbol])==null?void 0:fe[N.length];if(G!==void 0&&G>0){const Y=new Map;for(const pe of O)for(let oe=0;oe<pe.length;oe++)Y.has(oe)||Y.set(oe,new Set),Y.get(oe).add(pe.path[oe]);let H=1;for(let pe=0;pe<N.length;pe++){const oe=Y.get(pe);H*=oe?oe.size:1}const Ne=G*t(Ae)*H*J;console.log(`  ${N.length}x${N.symbol}: ${H} ways × ${G}x × ${t(Ae)} bet × ${J} mult = ${Ne}`);const ot=new Set;for(const pe of O)pe.path.forEach(oe=>ot.add(oe));A.push({symbol:N.symbol,count:N.length,payout:Ne,positions:Array.from(ot),multiplier:J})}}return c.push(...A),c}let ke=P(0),at=P(ue([])),ze=P(!1),nt=P(!1),fs=P(!1),ps=P(0);const Sa={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function us(c){if(!t(Pe)||!Kt[c])return;const f=Kt[c];f.currentTime=0,f.play().catch(k=>{console.warn("Äänen toisto epäonnistui:",c,k)})}function dr(c){_t.forEach(f=>re.stage.removeChild(f)),_t=[],c.forEach(f=>{f.positions.forEach(k=>{const S=Te[k],y=new fn().rect(0,0,ne,U).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});y.x=S.container.x,y.y=S.container.y,re.stage.addChild(y),_t.push(y);let $=0,A=1;const C=.05;re.ticker.add(()=>{$+=A*C,$>=.4&&(A=-1),$<=0&&(A=1),y.alpha=.5+$})})})}function gs(){_t.forEach(c=>re.stage.removeChild(c)),_t=[]}let wt=ka(),hs,re,Te=[],_t=[];class fr{constructor(f,k){$e(this,"index");$e(this,"container");$e(this,"offset",0);$e(this,"speed",0);$e(this,"targetSpeed",30);$e(this,"state","idle");$e(this,"stopDelay",0);$e(this,"bounceOffset",0);$e(this,"bounceSpeed",0);$e(this,"bounceFrames",0);this.index=f,this.container=k}start(f){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=f}startSynchronized(f){const k=Gn[t(me)],S=60+f*k;this.start(S)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const f=t(me)==="slow"?.88:t(me)==="medium"?.92:.95;this.speed*=f,this.speed<2.5&&(this.state="bouncing",this.speed=0,this.offset=0,this.bounceOffset=0,this.bounceSpeed=4,us("stop"),Qn())}this.state==="bouncing"&&(this.bounceSpeed*=.8,this.bounceOffset+=this.bounceSpeed,Math.abs(this.bounceSpeed)<.2&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=le&&(this.offset=0,wt[this.index]=Aa(this.index)))}}draw(){const f=this.container;f.removeChildren();const k=wt[this.index];if(!k||!Et||!Et[k])return;const S=this.offset+this.bounceOffset,y=($,A)=>{const C=Et[$];if(!C)return;const I=new sa(C);I.width=ne,I.height=U,I.x=0,I.y=A,f.addChild(I)};y(k,S-le),y(k,S),y(k,S+le)}}let o=P(1);ga(async()=>{re=new Fn,await re.init({width:r,height:i,backgroundAlpha:0}),hs.appendChild(re.canvas);const c=()=>{const y=window.innerWidth,$=window.innerHeight,A=y/r,C=$/i,I=$>y;let z;I?z=Math.min(A*.95,C*.85,1):z=Math.min(A,C,1),g(o,ue(z)),re.stage.scale.set(z),re.renderer.resize(r,i)};c(),window.addEventListener("resize",c);const f=y=>{(y.code==="Space"||y.key===" ")&&(y.preventDefault(),Te.some(A=>A.state==="spinning"||A.state==="slowing")?(Te.forEach(A=>{A.state==="spinning"?(A.stopDelay=0,A.state="slowing",A.speed=A.targetSpeed*.5):A.state==="slowing"&&(A.speed=A.speed*.3)}),console.log("⚡ Skip spin - kiekot pysähtyvät nopeasti")):vs())};window.addEventListener("keydown",f);const k={};try{g(vt,"Loading background and UI images..."),_e.push(`Loading background: ${we}`),_e.push(`Loading reel frames: ${ee}`),_e.push(`Loading logo: ${he}`),await lt.load([{alias:"background",src:we},{alias:"reelframes",src:ee},{alias:"logo",src:he}]),as=qe.from("background"),ht=qe.from("reelframes"),Fe=qe.from("logo"),console.log("✅ Background texture created:",as.width,"x",as.height),console.log("✅ Reel frames texture created:",ht.width,"x",ht.height),console.log("✅ Logo texture created:",Fe.width,"x",Fe.height),_e.push("✅ All UI images loaded"),g(vt,"Loading symbols...");const y=[];for(const $ of xe)y.push({alias:$,src:Ce[$]});await lt.load(y);for(const $ of xe){const A=Ce[$];_e.push(`Loading symbol ${$}: ${A}`);try{const C=qe.from($);k[$]=C,console.log(`✅ Symbol ${$} loaded:`,C.width,"x",C.height),_e.push(`✅ Symbol ${$} loaded`)}catch(C){const I=`❌ Failed to load symbol ${$} from ${A}: ${C}`;throw _e.push(I),console.error(I),new Error(I)}}Et=k,g(vt,"Assets loaded successfully!")}catch(y){g(et,`Asset loading failed: ${y}`),_e.push(t(et)),console.error(t(et));return}console.log("Ladataan ääniefektit...");for(const[y,$]of Object.entries(Je)){const A=new Audio;A.src=$,A.preload="auto",A.volume=.7,A.load(),A.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${$} (käytetään hiljaista placeholderia)`)}),Kt[y]=A}[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(y=>({x:y.x+d,y:y.y+h})),Te=[];for(let y=0;y<n;y++){const $=$a(y),A=$.col,C=$.row,I=300+A*(ne+20),z=250+C*(U+15),J=y===6?I+p:I,fe=y===6?z+b:z,L=new ha;L.x=J+d,L.y=fe+h;const O=new fn().rect(0,0,ne,U).fill(16777215);O.x=L.x,O.y=L.y,L.mask=O,re.stage.addChild(O),re.stage.addChild(L),Te.push(new fr(y,L))}if(ht){const y=new sa(ht);y.scale.set(1),y.x=250,y.y=200,re.stage.addChild(y),Zt=y,g(Jt,ue(y.width)),console.log("Reel frames lisätty:",y.width.toFixed(0),"x",y.height.toFixed(0)),console.log("Control panel leveys päivitetty:",t(Jt).toFixed(0))}if(Fe){Fe.source&&(Fe.source.scaleMode="nearest",Fe.source.antialias=!1);const y=new sa(Fe);y.scale.set(B),y.x=(re.renderer.width-y.width)/2+R,y.y=j,re.stage.addChild(y),console.log("Logo lisätty päällimmäiseen layeriin:",y.width.toFixed(0),"x",y.height.toFixed(0))}ba(),re.ticker.add(pr)});function pr(){for(const c of Te)c.update(),c.draw();if(!t(ze)&&!rs&&Te.every(c=>c.state==="stopped")){rs=!0,Yn();const c=cr();console.log(`Checking wins, found ${c.length} wins`),c.length>0?(g(at,ue(c)),g(ke,ue(c.reduce((f,k)=>f+k.payout,0))),tr(t(tt),c,t(ke)),gr(t(ke)),g(ze,!0),g(Zn,ue(Date.now())),console.log(`🎉 VOITTO! ${t(ke)} pistettä! Uusi saldo: ${t(Me)}`),console.log(`isShowingWin set to: ${t(ze)}, totalWin: ${t(ke)}`),c.forEach(f=>{const k=f.multiplier?` (${f.multiplier}x multiplier)`:"";console.log(`${f.count}x ${f.symbol} = ${f.payout} pistettä${k}`)}),dr(c),us("win"),t(ce)&&!Xe&&(Xe=!0,Ie=window.setTimeout(()=>{t(ze)&&t(ce)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),g(ze,!1),gs()),Ie=window.setTimeout(()=>{Xe=!1,ms()},200)},1500))):(console.log("No wins found this spin"),t(ce)&&!Xe&&(Xe=!0,Ie=window.setTimeout(()=>{Xe=!1,ms()},500))),t(Q)&&t(We)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${t(Ke)}`),setTimeout(()=>{g(ps,ue(t(Ke))),g(fs,!0)},2e3))}}function vs(){if(t(Q)||Hn(),Xn(),t(Q)&&t(We)>0)Se(We,-1),Se(cs),console.log(`🎰 FREE SPIN! Remaining: ${t(We)}`);else if(!t(Q)){if(t(Me)<t(Ae)){alert(`Not enough credits! Balance: ${t(Me)}, Bet: ${t(Ae)}`),Rt();return}g(Me,t(Me)-t(Ae)),Se(tt),g(st,t(st)+t(Ae))}Ie!==null&&(clearTimeout(Ie),Ie=null),g(at,ue([])),g(ke,0),g(Ye,0),console.log("🔄 lastWin nollattu: "+t(Ye)),g(ze,!1),rs=!1,gs(),wt=ka(),Te.forEach((c,f)=>{c.startSynchronized(f)}),us("spin")}function ur(c,f,k=1400){if(typeof window>"u")return;const S=document.getElementById("winLabel");if(!S)return;S.classList.add("rolling");const y=performance.now(),$=f-c,A=I=>1-Math.pow(1-I,3);function C(I){const z=Math.min(1,(I-y)/k),J=c+$*A(z);g(Ye,J),z<1?requestAnimationFrame(C):(g(Ye,ue(f)),S.classList.remove("rolling"),S.classList.add("winHit"),setTimeout(()=>S.classList.remove("winHit"),450))}requestAnimationFrame(C)}function gr(c){g(Me,t(Me)+c),g(bt,t(bt)+c);const f=t(Ye);g(Ye,ue(c));const k=c>t(Ae)*50?2e3:1400;if(ur(f,c,k),t(Q)&&g(Ke,t(Ke)+c),c>0){Se(os);const S=c/t(Ae);S>=10&&Jn(),Ze&&(S>=50?Ze.show():S>=20?setTimeout(()=>Ze.show(),200):S>=10&&setTimeout(()=>Ze.show(),400))}}function hr(){t(mt)<_a.length-1&&Se(mt)}function vr(){t(mt)>0&&Se(mt,-1)}function je(c){g(ce,!0),g(yt,ue(c)),g(de,!1),ms()}function Rt(){g(ce,!1),g(yt,0),Xe=!1,Ie!==null&&(clearTimeout(Ie),Ie=null)}function ms(){if(!t(ce)||t(yt)<=0){Rt();return}console.log(`Autoplay: Starting spin ${t(yt)} rounds left`),vs(),Se(yt,-1)}function mr(){confirm("Reset all statistics?")&&(g(tt,0),g(st,0),g(bt,0),g(os,0),g(Lt,0),g(cs,0),g(Tt,0),g(ds,0))}var Ea=qi();Dr(c=>{var f=zi();u(Ve(f)),V(c,f)});var La=Ve(Ea);{var yr=c=>{Wi(c,{onloaded:()=>g(wa,!0)})};se(La,c=>{t(wa)||c(yr)})}var Ta=u(La,2);{var br=c=>{var f=Ui(),k=u(w(f),2),S=u(w(k));_(k);var y=u(k,2);{var $=N=>{var G=ji(),Y=u(w(G));_(G),te(()=>q(Y,` ${t(et)??""}`)),V(N,G)};se(y,N=>{t(et)&&N($)})}var A=u(y,2),C=u(w(A));C.nodeValue=` ${be??""}`,_(A);var I=u(A,2),z=u(w(I));z.nodeValue=` ${we??""}`,_(I);var J=u(I,2),fe=u(w(J));_(J);var L=u(J,2);{var O=N=>{var G=Di(),Y=w(G),H=w(Y);_(Y);var Ne=u(Y,2);Ht(Ne,17,()=>_e,Gt,(ot,pe)=>{var oe=Ni(),Mr=w(oe,!0);_(oe),te(()=>q(Mr,t(pe))),V(ot,oe)}),_(G),te(()=>q(H,`Log (${_e.length??""})`)),V(N,G)};se(L,N=>{_e.length>0&&N(O)})}_(f),te(()=>{q(S,` ${t(vt)??""}`),q(fe,` ${Ce.a??""}`)}),V(c,f)};se(Ta,c=>{(t(vt)!=="Assets loaded successfully!"||t(et))&&c(br)})}var Ra=u(Ta,2);{var xr=c=>{var f=Vi(),k=u(w(f),2),S=w(k);_(k);var y=u(k,2);Ht(y,17,()=>t(at),Gt,(I,z)=>{var J=Gi(),fe=w(J);_(J),te(L=>q(fe,`${t(z).count??""} × ${Sa[t(z).symbol]??""} = ${L??""} pistettä`),[()=>t(z).payout.toFixed(2)]),V(I,J)});var $=u(y,2);{var A=I=>{var z=Hi(),J=w(z),fe=w(J);_(J),_(z),te(()=>q(fe,`✨ ${t(at)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),V(I,z)};se($,I=>{t(at).length>0&&t(at)[0].multiplier>1&&I(A)})}var C=u($,2);_(f),te(I=>q(S,`${I??""} pistettä`),[()=>t(ke).toFixed(2)]),F("click",C,()=>{g(ze,!1),gs(),console.log("Win popup closed, ready for next spin")}),V(c,f)};se(Ra,c=>{t(ke)>0&&t(ze)&&c(xr)})}var Pa=u(Ra,2);{var wr=c=>{var f=Yi(),k=u(w(f),8);_(f),te(S=>x(f,"style",`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.95);
    color: white;
    padding: ${30*t(o)}px;
    border-radius: ${15*t(o)}px;
    font-family: Arial, sans-serif;
    z-index: 3000;
    border: ${3*t(o)}px solid #ffd700;
    max-width: ${600*t(o)}px;
    max-height: ${S??""}px;
    overflow-y: auto;
    font-size: ${t(o)??""}em;
  `),[()=>Math.min(i*t(o)*.8,80*window.innerHeight/100)]),F("click",k,()=>{g(nt,!1)}),V(c,f)};se(Pa,c=>{t(nt)&&c(wr)})}var Ia=u(Pa,2);{var _r=c=>{var f=Xi(),k=w(f),S=u(w(k),4),y=w(S,!0);_(S);var $=u(S,2);_(k),_(f),te(A=>q(y,A),[()=>t(ps).toFixed(2)]),F("click",$,()=>{g(fs,!1),g(Q,!1),g(Ke,0),g(ps,0),es()}),F("mouseenter",$,A=>{A.currentTarget.style.transform="scale(1.05)",A.currentTarget.style.boxShadow="0 6px 20px rgba(255, 215, 0, 0.6)"}),F("mouseleave",$,A=>{A.currentTarget.style.transform="scale(1)",A.currentTarget.style.boxShadow="0 4px 15px rgba(255, 215, 0, 0.4)"}),V(c,f)};se(Ia,c=>{t(fs)&&c(_r)})}var Oa=u(Ia,2),ys=w(Oa),At=w(ys);x(At,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${r}px;
        height: ${i}px;
      `);var bs=w(At),xs=u(bs,2),Ca=w(xs);{var Ar=c=>{var f=Ki(),k=w(f),S=u(k,2),y=u(S,2),$=u(y,2),A=u($,2),C=u(A,2),I=u(C,2),z=u(I,2),J=u(z,2),fe=u(J,2);_(f),te(()=>{x(f,"style",`
    position: absolute;
    bottom: ${(m+20)*t(o)}px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.95);
    padding: ${20*t(o)}px;
    border-radius: ${15*t(o)}px;
    border: ${3*t(o)}px solid #0088ff;
    box-shadow: 0 ${8*t(o)}px ${30*t(o)}px rgba(0, 136, 255, 0.6);
    z-index: 2000;
    min-width: ${250*t(o)}px;
  `),x(k,"style",`color: white; font-weight: bold; margin-bottom: ${15*t(o)}px; text-align: center; font-size: ${18*t(o)}px;`),x(S,"style",`
        width: 100%;
        padding: ${12*t(o)}px;
        margin-bottom: ${8*t(o)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*t(o)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(o)}px;
        box-shadow: 0 ${4*t(o)}px ${10*t(o)}px rgba(68, 170, 68, 0.4);
      `),x(y,"style",`
        width: 100%;
        padding: ${12*t(o)}px;
        margin-bottom: ${8*t(o)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*t(o)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(o)}px;
        box-shadow: 0 ${4*t(o)}px ${10*t(o)}px rgba(68, 170, 68, 0.4);
      `),x($,"style",`
        width: 100%;
        padding: ${12*t(o)}px;
        margin-bottom: ${8*t(o)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*t(o)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(o)}px;
        box-shadow: 0 ${4*t(o)}px ${10*t(o)}px rgba(68, 170, 68, 0.4);
      `),x(A,"style",`
        width: 100%;
        padding: ${12*t(o)}px;
        margin-bottom: ${8*t(o)}px;
        background: linear-gradient(135deg, #4488ff 0%, #66aaff 100%);
        color: white;
        border: none;
        border-radius: ${8*t(o)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(o)}px;
        box-shadow: 0 ${4*t(o)}px ${10*t(o)}px rgba(68, 136, 255, 0.4);
      `),x(C,"style",`
        width: 100%;
        padding: ${12*t(o)}px;
        margin-bottom: ${8*t(o)}px;
        background: linear-gradient(135deg, #4488ff 0%, #66aaff 100%);
        color: white;
        border: none;
        border-radius: ${8*t(o)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(o)}px;
        box-shadow: 0 ${4*t(o)}px ${10*t(o)}px rgba(68, 136, 255, 0.4);
      `),x(I,"style",`
        width: 100%;
        padding: ${12*t(o)}px;
        margin-bottom: ${8*t(o)}px;
        background: linear-gradient(135deg, #ff8844 0%, #ffaa66 100%);
        color: white;
        border: none;
        border-radius: ${8*t(o)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(o)}px;
        box-shadow: 0 ${4*t(o)}px ${10*t(o)}px rgba(255, 136, 68, 0.4);
      `),x(z,"style",`
        width: 100%;
        padding: ${12*t(o)}px;
        margin-bottom: ${8*t(o)}px;
        background: linear-gradient(135deg, #ff8844 0%, #ffaa66 100%);
        color: white;
        border: none;
        border-radius: ${8*t(o)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(o)}px;
        box-shadow: 0 ${4*t(o)}px ${10*t(o)}px rgba(255, 136, 68, 0.4);
      `),x(J,"style",`
        width: 100%;
        padding: ${12*t(o)}px;
        margin-bottom: ${15*t(o)}px;
        background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%);
        color: white;
        border: none;
        border-radius: ${8*t(o)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(o)}px;
        box-shadow: 0 ${4*t(o)}px ${10*t(o)}px rgba(255, 68, 68, 0.4);
      `),x(fe,"style",`
        width: 100%;
        padding: ${10*t(o)}px;
        background: rgba(255, 255, 255, 0.1);
        color: #aaa;
        border: ${1*t(o)}px solid #555;
        border-radius: ${8*t(o)}px;
        cursor: pointer;
        font-size: ${14*t(o)}px;
      `)}),F("click",S,()=>{je(10),g(de,!1)}),F("click",y,()=>{je(25),g(de,!1)}),F("click",$,()=>{je(50),g(de,!1)}),F("click",A,()=>{je(100),g(de,!1)}),F("click",C,()=>{je(200),g(de,!1)}),F("click",I,()=>{je(500),g(de,!1)}),F("click",z,()=>{je(1e3),g(de,!1)}),F("click",J,()=>{je(5e3),g(de,!1)}),F("click",fe,()=>{g(de,!1)}),V(c,f)};se(Ca,c=>{t(de)&&c(Ar)})}var ws=u(Ca,2);x(ws,"src",`${X??""}/Control_leftend.png`);var Pt=u(ws,2),_s=w(Pt),As=w(_s),Ba=w(As),ks=u(Ba,2),$s=w(ks),It=u($s,2),kr=w(It,!0);_(It);var Fa=u(It,2);_(ks),_(As);var Ss=u(As,2);x(Ss,"src",`${X??""}/Control_divider.png`);var Es=u(Ss,2),Ma=w(Es),Ls=u(Ma,2),Ts=w(Ls),$r=w(Ts,!0);_(Ts),_(Ls),_(Es);var Wa=u(Es,2);x(Wa,"src",`${X??""}/Control_divider.png`),_(_s);var za=u(_s,2),Rs=u(za,2),Ps=w(Rs),Is=w(Ps);_(Ps),_(Rs);var ja=u(Rs,2),Ot=w(ja),Ct=w(Ot),Na=u(Ct,2);_(Ot);var Os=u(Ot,2);x(Os,"src",`${X??""}/Control_divider.png`);var Bt=u(Os,2),Ft=w(Bt),Da=u(Ft,2);_(Bt);var Cs=u(Bt,2);x(Cs,"src",`${X??""}/Control_divider.png`);var Bs=u(Cs,2),Ua=w(Bs),Fs=u(Ua,2),Ms=w(Fs),Sr=w(Ms,!0);_(Ms),_(Fs),_(Bs);var Ws=u(Bs,2);x(Ws,"src",`${X??""}/Control_divider.png`);var Ga=u(Ws,2),Ha=w(Ga);_(Ga),_(ja),_(Pt);var Va=u(Pt,2);x(Va,"src",`${X??""}/Control_rightend.png`),_(xs),_(At),cn(At,c=>hs=c,()=>hs);var Mt=u(At,2);Mt.textContent=`🛠️ DEBUG v${a}`;var Ya=u(Mt,2);const Er=Ue(()=>t(ke)/t(Ae)>=50?"jackpot":t(ke)/t(Ae)>=20?"medium":"small");cn(Ci(Ya,{get winLevel(){return t(Er)},get winAmount(){return t(ke)},get vinylStartScale(){return ss.vinylStartScale},get vinylEndScale(){return ss.vinylEndScale},get sparkleScale(){return ss.sparkleScale}}),c=>Ze=c,()=>Ze);var Wt=u(Ya,2),Xa=u(w(Wt),2);Xa.textContent=`v${a}`;var zs=u(Xa,2),Ka=u(w(zs),2),Lr=w(Ka,!0);_(Ka),_(zs);var js=u(zs,2),qa=u(w(js),2),Tr=w(qa,!0);_(qa),_(js);var Ns=u(js,2),Qa=u(w(Ns),2),Rr=w(Qa,!0);_(Qa),_(Ns);var Ds=u(Ns,2),Us=u(w(Ds),2),Pr=w(Us);_(Us),_(Ds);var Gs=u(Ds,2),Hs=u(w(Gs),2),Ir=w(Hs);_(Hs),_(Gs);var Vs=u(Gs,2),Ja=u(w(Vs),2),Or=w(Ja,!0);_(Ja),_(Vs);var Ys=u(Vs,2),Za=u(w(Ys),2),Cr=w(Za,!0);_(Za),_(Ys);var Xs=u(Ys,2),en=u(w(Xs),2),Br=w(en);_(en),_(Xs);var tn=u(Xs,2),sn=u(tn,2),rt=w(sn),Fr=w(rt);_(rt);var zt=u(rt,2),Ks=u(zt,2);_(sn),_(Wt);var qs=u(Wt,2),jt=w(qs),Qs=u(jt,2);_(qs),_(ys),_(Oa),te((c,f,k,S,y,$,A,C)=>{x(ys,"style",`
    position: relative;
    width: ${r*t(o)}px;
    height: ${i*t(o)}px;
  `),x(bs,"style",`
          position: absolute;
          top: ${130*t(o)}px;
          right: ${20*t(o)}px;
          padding: ${10*t(o)}px ${15*t(o)}px;
          background-color: rgba(255, 215, 0, 0.3);
          border: ${2*t(o)}px solid rgba(255, 215, 0, 0.7);
          border-radius: ${8*t(o)}px;
          cursor: pointer;
          font-weight: bold;
          font-size: ${16*t(o)}px;
          color: white;
          text-shadow: 0 0 ${5*t(o)}px rgba(0,0,0,0.8);
          z-index: 1000;
          min-width: ${180*t(o)}px;
        `),x(xs,"style",`
        position: absolute;
        left: ${((Zt?Zt.x:E)+T)*t(o)}px;
        top: ${(v+K)*t(o)}px;
        width: ${t(Jt)*t(o)}px;
        height: ${m*t(o)}px;
        display: flex;
        align-items: center;
        z-index: 1000;
      `),x(ws,"style",`height: ${m*t(o)}px; flex-shrink: 0;`),x(Pt,"style",`
    flex-grow: 1;
    height: ${m*t(o)}px;
    background-image: url('${X??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    padding: 0 ${20*t(o)}px;
    position: relative;
    gap: ${20*t(o)}px;
  `),x(Ba,"style",`color: #00ff00; font-size: ${12*t(o)}px; font-weight: bold; line-height: 1; height: ${16*t(o)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(o)}px;`),x(ks,"style",`display: flex; gap: ${5*t(o)}px; align-items: center; height: ${44*t(o)}px;`),x($s,"style",`
              width: ${40*t(o)}px;
              height: ${40*t(o)}px;
              background-image: url('${X??""}/Control_lowerbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            `),x(It,"style",`
            color: #fff;
            font-size: ${18*t(o)}px;
            font-weight: bold;
            min-width: ${80*t(o)}px;
            text-align: center;
            font-family: 'Courier New', monospace;
          `),q(kr,c),x(Fa,"style",`
              width: ${40*t(o)}px;
              height: ${40*t(o)}px;
              background-image: url('${X??""}/Control_upperbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            `),x(Ss,"style",`height: ${m*.8*t(o)}px; flex-shrink: 0;`),x(Ma,"style",`color: #00ff00; font-size: ${12*t(o)}px; font-weight: bold; line-height: 1; height: ${16*t(o)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(o)}px;`),x(Ls,"style",`height: ${44*t(o)}px; display: flex; align-items: center;`),x(Ts,"style",`
            color: #fff;
            font-size: ${20*t(o)}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
          `),q($r,f),x(Wa,"style",`height: ${m*.8*t(o)}px; flex-shrink: 0;`),x(za,"style",`flex-shrink: 0; width: ${130*t(o)}px;`),da(Ps,1,`play-button-wrapper ${(t(ts)?"glare-animate":"")??""}`,"svelte-11fybce"),x(Is,"style",`
            width: ${110*t(o)}px;
            height: ${110*t(o)}px;
            background-image: url('${X??""}/${(t(ce)?"Control_playbutton_stop.png":"Control_playbutton.png")??""}');
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
          `),x(Is,"title",t(ce)?"STOP AUTOPLAY":"SPIN"),x(Ot,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*t(o)}px;`),x(Ct,"style",`
            width: ${50*t(o)}px;
            height: ${50*t(o)}px;
            background-image: url('${X??""}/${(t(ce)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(Ct,"title",t(ce)?"Stop Autoplay":"Autoplay"),x(Na,"src",`${X??""}/${(t(ce)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),x(Na,"style",`height: ${10*t(o)}px; width: auto; display: block;`),x(Os,"style",`height: ${m*.8*t(o)}px; flex-shrink: 0;`),x(Bt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*t(o)}px;`),x(Ft,"style",`
            width: ${50*t(o)}px;
            height: ${50*t(o)}px;
            background-image: url('${X??""}/Control_fastplay_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(Ft,"title",`Spin Speed: ${(t(me)==="slow"?"Slow":t(me)==="medium"?"Medium":"Fast")??""}`),x(Da,"src",`${X??""}/${(t(me)==="slow"?"Control_bar_deselect.png":t(me)==="medium"?"Control_half_bar_select.png":"Control_bar_select.png")??""}`),x(Da,"style",`height: ${10*t(o)}px; width: auto; display: block;`),x(Cs,"style",`height: ${m*.8*t(o)}px; flex-shrink: 0;`),x(Ua,"style",`color: #00ff00; font-size: ${12*t(o)}px; font-weight: bold; line-height: 1; height: ${16*t(o)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(o)}px;`),x(Fs,"style",`height: ${44*t(o)}px; display: flex; align-items: center;`),x(Ms,"style",`
            color: #fff;
            font-size: ${20*t(o)}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
          `),q(Sr,k),x(Ws,"style",`height: ${m*.8*t(o)}px; flex-shrink: 0;`),x(Ha,"style",`
            width: ${50*t(o)}px;
            height: ${50*t(o)}px;
            background-image: url('${X??""}/Control_menubar.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(Va,"style",`height: ${m*t(o)}px; flex-shrink: 0;`),x(Mt,"style",`
    position: absolute;
    top: ${190*t(o)}px;
    right: ${20*t(o)}px;
    padding: ${10*t(o)}px ${15*t(o)}px;
    background-color: rgba(0, 255, 0, 0.3);
    border: ${2*t(o)}px solid rgba(0, 255, 0, 0.7);
    border-radius: ${8*t(o)}px;
    cursor: pointer;
    font-weight: bold;
    font-size: ${16*t(o)}px;
    color: white;
    text-shadow: 0 0 ${5*t(o)}px rgba(0,0,0,0.8);
    z-index: 10000;
    min-width: ${180*t(o)}px;
    pointer-events: auto;
  `),x(Wt,"style",`
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
`),q(Lr,S),q(Tr,y),q(Rr,$),x(Us,"style",`color: ${A??""};`),q(Pr,`${t(is)??""}%`),x(Hs,"style",`color: ${C??""};`),q(Ir,`${t(ls)??""}%`),q(Or,t(Lt)),q(Cr,t(cs)),q(Br,`${t(er)??""}%`),rt.disabled=t(ye).length===0,x(rt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(t(ye).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(t(ye).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(t(ye).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(t(ye).length>0?"1":"0.5")??""};
      `),q(Fr,`Download Win Log (${t(ye).length??""})`),zt.disabled=t(ye).length===0,x(zt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(t(ye).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(t(ye).length>0?"1":"0.5")??""};
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
  top: ${10*t(o)}px;
  right: ${10*t(o)}px;
  display: flex;
  gap: ${10*t(o)}px;
  z-index: 1001;
`),x(jt,"style",`
      width: ${50*t(o)}px;
      height: ${50*t(o)}px;
      background-image: url('${X??""}/${(t(Le)?"music_on.png":"music_off.png")??""}');
      background-size: contain;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
      background-color: transparent;
    `),x(jt,"title",t(Le)?"Music: ON":"Music: OFF"),x(Qs,"style",`
      width: ${50*t(o)}px;
      height: ${50*t(o)}px;
      background-image: url('${X??""}/${(t(Pe)?"sounds_on.png":"sounds_off.png")??""}');
      background-size: contain;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
      background-color: transparent;
    `),x(Qs,"title",t(Pe)?"Sound: ON":"Sound: OFF")},[()=>t(Ae).toFixed(2),()=>t(Me).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>t(Ye).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>t(tt).toLocaleString(),()=>t(st).toLocaleString(),()=>t(bt).toLocaleString(),()=>parseFloat(t(is))>=95?"#00ff00":parseFloat(t(is))>=85?"#ffff00":"#ff6666",()=>parseFloat(t(ls))>=30?"#00ff00":parseFloat(t(ls))>=20?"#ffff00":"#ff6666"]),F("click",bs,()=>{g(nt,!t(nt))}),F("click",$s,vr),F("click",Fa,hr),F("click",Is,()=>{t(ce)?Rt():Te.some(f=>f.state==="spinning"||f.state==="slowing")?Te.forEach(f=>{f.state==="spinning"?(f.stopDelay=0,f.state="slowing",f.speed=f.targetSpeed*.5):f.state==="slowing"&&(f.speed=f.speed*.3)}):vs()}),F("click",Ct,()=>{t(ce)?Rt():g(de,!t(de))}),F("click",Ft,()=>{t(me)==="slow"?g(me,"medium"):t(me)==="medium"?g(me,"fast"):g(me,"slow")}),F("click",Ha,()=>{g(nt,!t(nt))}),F("click",Mt,()=>{g(ns,!t(ns))}),F("click",tn,mr),F("click",rt,sr),F("click",zt,ar),F("click",Ks,nr),F("click",jt,Kn),F("click",Qs,qn),V(s,Ea),Yt()}var Ji=Z('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),Zi=Z('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function el(s,e){Vt(e,!1);let a=it(e,"isAuthenticated",12,!1),n=ia(""),r=ia(!1);const i="slot2024";function l(){t(n)===i?(a(!0),sessionStorage.setItem("gameAuthenticated","true")):(g(r,!0),g(n,""),setTimeout(()=>g(r,!1),3e3))}ga(()=>{a(sessionStorage.getItem("gameAuthenticated")==="true")}),Gr();var d=Ut(),h=Ve(d);{var b=p=>{var v=Zi(),m=w(v),E=u(w(m),4),T=w(E);Eo(T),vo(2),_(E);var K=u(E,2);{var B=R=>{var j=Ji();V(R,j)};se(K,R=>{t(r)&&R(B)})}_(m),_(v),To(T,()=>t(n),R=>g(n,R)),F("submit",E,Ro(l)),V(p,v)};se(h,p=>{a()||p(b)})}V(s,d),Yt()}var tl=Z("<!> <!>",1);function ul(s){let e=ia(!1);var a=tl(),n=Ve(a);el(n,{get isAuthenticated(){return t(e)},set isAuthenticated(l){g(e,l)},$$legacy:!0});var r=u(n,2);{var i=l=>{Qi(l,{})};se(r,l=>{t(e)&&l(i)})}V(s,a)}export{In as A,Tn as C,Wo as R,Oo as S,On as V,ul as _,Io as u};
