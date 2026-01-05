const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Bmv_e-Gh.js","./Cb0119l1.js","./BrW7ntrJ.js","./Fx7Xcyif.js","./CkL9UklL.js","./C2GHuDhf.js","./BM03j1Ro.js","./D6Z-oCrj.js"])))=>i.map(i=>d[i]);
var Wo=Object.defineProperty;var zo=(s,e,a)=>e in s?Wo(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var Se=(s,e,a)=>zo(s,typeof e!="symbol"?e+"":e,a);import{g as No,l as Do,e as Dt,a as G,t as ee,n as _n,i as q,j as Uo,k as Go}from"./CsxIJThA.js";import{i as Ho}from"./DqfWCwGf.js";import{y as Ee,j as Vo,a8 as Yo,F as t,Q as Xo,aa as Ko,ab as an,h as nn,e as Js,k as $t,l as Qo,ac as An,w as kn,ad as Jo,q as $n,a7 as Zo,U as er,a2 as on,ar as Zs,z as rn,as as tr,at as sr,au as ar,o as nr,av as or,aw as rr,ax as ir,ay as lr,b as cr,az as dr,aA as pr,a6 as fr,aB as ur,aC as gr,D as hr,L as mr,p as Ht,f as Ve,ah as R,a as Vt,T as g,c as w,s as f,r as _,t as oe,I as Ue,ag as ga,aD as je,aE as Sn,aF as ia}from"./Fx7Xcyif.js";import{_ as ln,i as se,p as he}from"./BrW7ntrJ.js";import{s as X}from"./DfoPkomP.js";import{p as it,b as cn}from"./C4w3i6Q0.js";import{b as xe}from"./C7kMa9ZL.js";import{e as He,E as M,a as vr,C as ha,Q as la,V as ca,N as ea,D as me,H as yr,p as Je,a0 as pt,a1 as Ze,a2 as br,w as Ge,a3 as jt,a4 as jn,a5 as ft,a6 as qe,a7 as Yt,a8 as En,a9 as xr,aa as ta,y as sa}from"./Cb0119l1.js";import{A as wr,B as dn,G as _r,a as pn}from"./CkL9UklL.js";function Ut(s,e){return e}function Ar(s,e,a,n){for(var o=[],i=e.length,l=0;l<i;l++)ar(e[l].e,o,!0);var d=i>0&&o.length===0&&a!==null;if(d){var m=a.parentNode;nr(m),m.append(a),n.clear(),De(s,e[0].prev,e[i-1].next)}or(o,()=>{for(var b=0;b<i;b++){var u=e[b];d||(n.delete(u.k),De(s,u.prev,u.next)),rr(u.e,!d)}})}function Gt(s,e,a,n,o,i=null){var l=s,d={flags:e,items:new Map,first:null};Ee&&Vo();var m=null,b=!1,u=Xo(()=>{var v=a();return Zo(v)?v:v==null?[]:$n(v)});Yo(()=>{var v=t(u),y=v.length;if(b&&y===0)return;b=y===0;let E=!1;if(Ee){var L=l.data===Ko;L!==(y===0)&&(l=an(),nn(l),Js(!1),E=!0)}if(Ee){for(var Q=null,C,T=0;T<y;T++){if($t.nodeType===8&&$t.data===Qo){l=$t,E=!0,Js(!1);break}var U=v[T],re=n(U,T);C=Ln($t,d,Q,null,U,re,T,o,e,a),d.items.set(re,C),Q=C}y>0&&nn(an())}Ee||kr(v,d,l,o,e,n,a),i!==null&&(y===0?m?An(m):m=kn(()=>i(l)):m!==null&&Jo(m,()=>{m=null})),E&&Js(!0),t(u)}),Ee&&(l=$t)}function kr(s,e,a,n,o,i,l){var d=s.length,m=e.items,b=e.first,u=b,v,y=null,E=[],L=[],Q,C,T,U;for(U=0;U<d;U+=1){if(Q=s[U],C=i(Q,U),T=m.get(C),T===void 0){var re=u?u.e.nodes_start:a;y=Ln(re,e,y,y===null?e.first:y.next,Q,C,U,n,o,l),m.set(C,y),E=[],L=[],u=y.next;continue}if($r(T,Q,U),(T.e.f&Zs)!==0&&An(T.e),T!==u){if(v!==void 0&&v.has(T)){if(E.length<L.length){var ie=L[0],V;y=ie.prev;var fe=E[0],ue=E[E.length-1];for(V=0;V<E.length;V+=1)fn(E[V],ie,a);for(V=0;V<L.length;V+=1)v.delete(L[V]);De(e,fe.prev,ue.next),De(e,y,fe),De(e,ue,ie),u=ie,y=ue,U-=1,E=[],L=[]}else v.delete(T),fn(T,u,a),De(e,T.prev,T.next),De(e,T,y===null?e.first:y.next),De(e,y,T),y=T;continue}for(E=[],L=[];u!==null&&u.k!==C;)(u.e.f&Zs)===0&&(v??(v=new Set)).add(u),L.push(u),u=u.next;if(u===null)continue;T=u}E.push(T),y=T,u=T.next}if(u!==null||v!==void 0){for(var we=v===void 0?[]:$n(v);u!==null;)(u.e.f&Zs)===0&&we.push(u),u=u.next;var Pe=we.length;if(Pe>0){var H=null;Ar(e,we,H,m)}}rn.first=e.first&&e.first.e,rn.last=y&&y.e}function $r(s,e,a,n){sr(s.v,e),s.i=a}function Ln(s,e,a,n,o,i,l,d,m,b){var u=(m&ir)!==0,v=(m&lr)===0,y=u?v?er(o):on(o):o,E=(m&tr)===0?l:on(l),L={i:E,v:y,k:i,a:null,e:null,prev:a,next:n};try{return L.e=kn(()=>d(s,y,E,b),Ee),L.e.prev=a&&a.e,L.e.next=n&&n.e,a===null?e.first=L:(a.next=L,a.e.next=L.e),n!==null&&(n.prev=L,n.e.prev=L.e),L}finally{}}function fn(s,e,a){for(var n=s.next?s.next.e.nodes_start:a,o=e?e.e.nodes_start:a,i=s.e.nodes_start;i!==n;){var l=cr(i);o.before(i),i=l}}function De(s,e,a){e===null?s.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}const un=[...` 	
\r\f \v\uFEFF`];function Sr(s,e,a){var n=s==null?"":""+s;if(e&&(n=n?n+" "+e:e),a){for(var o in a)if(a[o])n=n?n+" "+o:o;else if(n.length)for(var i=o.length,l=0;(l=n.indexOf(o,l))>=0;){var d=l+i;(l===0||un.includes(n[l-1]))&&(d===n.length||un.includes(n[d]))?n=(l===0?"":n.substring(0,l))+n.substring(d+1):l=d}}return n===""?null:n}function da(s,e,a,n,o,i){var l=s.__className;if(Ee||l!==a){var d=Sr(a,n,i);(!Ee||d!==s.getAttribute("class"))&&(d==null?s.removeAttribute("class"):e?s.className=d:s.setAttribute("class",d)),s.__className=a}else if(i)for(var m in i){var b=!!i[m];(o==null||b!==!!o[m])&&s.classList.toggle(m,b)}return i}function jr(s){if(Ee){var e=!1,a=()=>{if(!e){if(e=!0,s.hasAttribute("value")){var n=s.value;x(s,"value",null),s.value=n}if(s.hasAttribute("checked")){var o=s.checked;x(s,"checked",null),s.checked=o}}};s.__on_r=a,dr(a),No()}}function x(s,e,a,n){var o=s.__attributes??(s.__attributes={});Ee&&(o[e]=s.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&s.nodeName==="LINK")||o[e]!==(o[e]=a)&&(e==="style"&&"__styles"in s&&(s.__styles={}),e==="loading"&&(s[pr]=a),a==null?s.removeAttribute(e):typeof a!="string"&&Er(s).includes(e)?s[e]=a:s.setAttribute(e,a))}var gn=new Map;function Er(s){var e=gn.get(s.nodeName);if(e)return e;gn.set(s.nodeName,e=[]);for(var a,n=s,o=Element.prototype;o!==n;){a=ur(n);for(var i in a)a[i].set&&e.push(i);n=fr(n)}return e}function Lr(s,e,a=e){var n=gr();Do(s,"input",o=>{var i=o?s.defaultValue:s.value;if(i=aa(s)?na(i):i,a(i),n&&i!==(i=e())){var l=s.selectionStart,d=s.selectionEnd;s.value=i??"",d!==null&&(s.selectionStart=l,s.selectionEnd=Math.min(d,s.value.length))}}),(Ee&&s.defaultValue!==s.value||hr(e)==null&&s.value)&&a(aa(s)?na(s.value):s.value),mr(()=>{var o=e();aa(s)&&o===na(s.value)||s.type==="date"&&!o&&!s.value||o!==s.value&&(s.value=o??"")})}function aa(s){var e=s.type;return e==="number"||e==="range"}function na(s){return s===""?null:+s}function Tr(s){return function(...e){var a=e[0];return a.preventDefault(),s==null?void 0:s.apply(this,e)}}const pa=[];He.handleByNamedList(M.Environment,pa);async function Rr(s){if(!s)for(let e=0;e<pa.length;e++){const a=pa[e];if(a.value.test()){await a.value.load();return}}}let St;function Pr(){if(typeof St=="boolean")return St;try{St=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{St=!1}return St}var Tn=(s=>(s[s.NONE=0]="NONE",s[s.COLOR=16384]="COLOR",s[s.STENCIL=1024]="STENCIL",s[s.DEPTH=256]="DEPTH",s[s.COLOR_DEPTH=16640]="COLOR_DEPTH",s[s.COLOR_STENCIL=17408]="COLOR_STENCIL",s[s.DEPTH_STENCIL=1280]="DEPTH_STENCIL",s[s.ALL=17664]="ALL",s))(Tn||{});class Ir{constructor(e){this.items=[],this._name=e}emit(e,a,n,o,i,l,d,m){const{name:b,items:u}=this;for(let v=0,y=u.length;v<y;v++)u[v][b](e,a,n,o,i,l,d,m);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const a=this.items.indexOf(e);return a!==-1&&this.items.splice(a,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Or=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Rn=class Pn extends vr{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const a=[...Or,...this.config.runners??[]];this._addRunners(...a),this._unsafeEvalCheck()}async init(e={}){const a=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Rr(a),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const n in this._systemsHash)e={...this._systemsHash[n].constructor.defaultOptions,...e};e={...Pn.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let n=0;n<this.runners.init.items.length;n++)await this.runners.init.items[n].init(e);this._initOptions=e}render(e,a){let n=e;if(n instanceof ha&&(n={container:n},a&&(la(ca,"passing a second argument is deprecated, please use render options instead"),n.target=a.renderTexture)),n.target||(n.target=this.view.renderTarget),n.target===this.view.renderTarget&&(this._lastObjectRendered=n.container,n.clearColor??(n.clearColor=this.background.colorRgba),n.clear??(n.clear=this.background.clearBeforeRender)),n.clearColor){const o=Array.isArray(n.clearColor)&&n.clearColor.length===4;n.clearColor=o?n.clearColor:ea.shared.setValue(n.clearColor).toArray()}n.transform||(n.container.updateLocalTransform(),n.transform=n.container.localTransform),n.container.enableRenderGroup(),this.runners.prerender.emit(n),this.runners.renderStart.emit(n),this.runners.render.emit(n),this.runners.renderEnd.emit(n),this.runners.postrender.emit(n)}resize(e,a,n){const o=this.view.resolution;this.view.resize(e,a,n),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),n!==void 0&&n!==o&&this.runners.resolutionChange.emit(n)}clear(e={}){const a=this;e.target||(e.target=a.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Tn.ALL);const{clear:n,clearColor:o,target:i}=e;ea.shared.setValue(o??this.background.colorRgba),a.renderTarget.clear(i,n,ea.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(a=>{this.runners[a]=new Ir(a)})}_addSystems(e){let a;for(a in e){const n=e[a];this._addSystem(n.value,n.name)}}_addSystem(e,a){const n=new e(this);if(this[a])throw new Error(`Whoops! The name "${a}" is already in use`);this[a]=n,this._systemsHash[a]=n;for(const o in this.runners)this.runners[o].add(n);return this}_addPipes(e,a){const n=a.reduce((o,i)=>(o[i.name]=i.value,o),{});e.forEach(o=>{const i=o.value,l=o.name,d=n[l];this.renderPipes[l]=new i(this,d?new d:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(a=>{a.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Pr())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Rn.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let In=Rn,zt;function qr(s){return zt!==void 0||(zt=(()=>{var a;const e={stencil:!0,failIfMajorPerformanceCaveat:s??In.defaultOptions.failIfMajorPerformanceCaveat};try{if(!me.get().getWebGLRenderingContext())return!1;let o=me.get().createCanvas().getContext("webgl",e);const i=!!((a=o==null?void 0:o.getContextAttributes())!=null&&a.stencil);if(o){const l=o.getExtension("WEBGL_lose_context");l&&l.loseContext()}return o=null,i}catch{return!1}})()),zt}let Nt;async function Cr(s={}){return Nt!==void 0||(Nt=await(async()=>{const e=me.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(s)).requestDevice(),!0}catch{return!1}})()),Nt}const hn=["webgl","webgpu","canvas"];async function Br(s){let e=[];s.preference?(e.push(s.preference),hn.forEach(i=>{i!==s.preference&&e.push(i)})):e=hn.slice();let a,n={};for(let i=0;i<e.length;i++){const l=e[i];if(l==="webgpu"&&await Cr()){const{WebGPURenderer:d}=await ln(async()=>{const{WebGPURenderer:m}=await import("./Bmv_e-Gh.js");return{WebGPURenderer:m}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);a=d,n={...s,...s.webgpu};break}else if(l==="webgl"&&qr(s.failIfMajorPerformanceCaveat??In.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:d}=await ln(async()=>{const{WebGLRenderer:m}=await import("./D6Z-oCrj.js");return{WebGLRenderer:m}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);a=d,n={...s,...s.webgl};break}else if(l==="canvas")throw n={...s},new Error("CanvasRenderer is not yet implemented")}if(delete n.webgpu,delete n.webgl,!a)throw new Error("No available renderer for the current environment");const o=new a;return await o.init(n),o}const On="8.8.1";class qn{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,On)}static destroy(){}}qn.extension=M.Application;class Fr{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,On)}destroy(){this._renderer=null}}Fr.extension={type:[M.WebGLSystem,M.WebGPUSystem],name:"initHook",priority:-10};const Cn=class fa{constructor(...e){this.stage=new ha,e[0]!==void 0&&la(ca,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Br(e),fa._plugins.forEach(a=>{a.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return la(ca,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,a=!1){const n=fa._plugins.slice(0);n.reverse(),n.forEach(o=>{o.destroy.call(this)}),this.stage.destroy(a),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Cn._plugins=[];let Bn=Cn;He.handleByList(M.Application,Bn._plugins);He.add(qn);class Fn extends wr{constructor(e,a){super();const{textures:n,data:o}=e;Object.keys(o.pages).forEach(i=>{const l=o.pages[parseInt(i,10)],d=n[l.id];this.pages.push({texture:d})}),Object.keys(o.chars).forEach(i=>{const l=o.chars[i],{frame:d,source:m}=n[l.page],b=new yr(l.x+d.x,l.y+d.y,l.width,l.height),u=new Je({source:m,frame:b});this.chars[i]={id:i.codePointAt(0),xOffset:l.xOffset,yOffset:l.yOffset,xAdvance:l.xAdvance,kerning:l.kerning??{},texture:u}}),this.baseRenderedFontSize=o.fontSize,this.baseMeasurementFontSize=o.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:o.fontSize},this.baseLineOffset=o.baseLineOffset,this.lineHeight=o.lineHeight,this.fontFamily=o.fontFamily,this.distanceField=o.distanceField??{type:"none",range:0},this.url=a}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:a}=this.pages[e];a.destroy(!0)}this.pages=null}static install(e){dn.install(e)}static uninstall(e){dn.uninstall(e)}}const oa={test(s){return typeof s=="string"&&s.startsWith("info face=")},parse(s){const e=s.match(/^[a-z]+\s+.+$/gm),a={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const v in e){const y=e[v].match(/^[a-z]+/gm)[0],E=e[v].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),L={};for(const Q in E){const C=E[Q].split("="),T=C[0],U=C[1].replace(/"/gm,""),re=parseFloat(U),ie=isNaN(re)?U:re;L[T]=ie}a[y].push(L)}const n={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[o]=a.info,[i]=a.common,[l]=a.distanceField??[];l&&(n.distanceField={range:parseInt(l.distanceRange,10),type:l.fieldType}),n.fontSize=parseInt(o.size,10),n.fontFamily=o.face,n.lineHeight=parseInt(i.lineHeight,10);const d=a.page;for(let v=0;v<d.length;v++)n.pages.push({id:parseInt(d[v].id,10)||0,file:d[v].file});const m={};n.baseLineOffset=n.lineHeight-parseInt(i.base,10);const b=a.char;for(let v=0;v<b.length;v++){const y=b[v],E=parseInt(y.id,10);let L=y.letter??y.char??String.fromCharCode(E);L==="space"&&(L=" "),m[E]=L,n.chars[L]={id:E,page:parseInt(y.page,10)||0,x:parseInt(y.x,10),y:parseInt(y.y,10),width:parseInt(y.width,10),height:parseInt(y.height,10),xOffset:parseInt(y.xoffset,10),yOffset:parseInt(y.yoffset,10),xAdvance:parseInt(y.xadvance,10),kerning:{}}}const u=a.kerning||[];for(let v=0;v<u.length;v++){const y=parseInt(u[v].first,10),E=parseInt(u[v].second,10),L=parseInt(u[v].amount,10);n.chars[m[E]].kerning[m[y]]=L}return n}},mn={test(s){const e=s;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(s){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},a=s.getElementsByTagName("info")[0],n=s.getElementsByTagName("common")[0],o=s.getElementsByTagName("distanceField")[0];o&&(e.distanceField={type:o.getAttribute("fieldType"),range:parseInt(o.getAttribute("distanceRange"),10)});const i=s.getElementsByTagName("page"),l=s.getElementsByTagName("char"),d=s.getElementsByTagName("kerning");e.fontSize=parseInt(a.getAttribute("size"),10),e.fontFamily=a.getAttribute("face"),e.lineHeight=parseInt(n.getAttribute("lineHeight"),10);for(let b=0;b<i.length;b++)e.pages.push({id:parseInt(i[b].getAttribute("id"),10)||0,file:i[b].getAttribute("file")});const m={};e.baseLineOffset=e.lineHeight-parseInt(n.getAttribute("base"),10);for(let b=0;b<l.length;b++){const u=l[b],v=parseInt(u.getAttribute("id"),10);let y=u.getAttribute("letter")??u.getAttribute("char")??String.fromCharCode(v);y==="space"&&(y=" "),m[v]=y,e.chars[y]={id:v,page:parseInt(u.getAttribute("page"),10)||0,x:parseInt(u.getAttribute("x"),10),y:parseInt(u.getAttribute("y"),10),width:parseInt(u.getAttribute("width"),10),height:parseInt(u.getAttribute("height"),10),xOffset:parseInt(u.getAttribute("xoffset"),10),yOffset:parseInt(u.getAttribute("yoffset"),10),xAdvance:parseInt(u.getAttribute("xadvance"),10),kerning:{}}}for(let b=0;b<d.length;b++){const u=parseInt(d[b].getAttribute("first"),10),v=parseInt(d[b].getAttribute("second"),10),y=parseInt(d[b].getAttribute("amount"),10);e.chars[m[v]].kerning[m[u]]=y}return e}},vn={test(s){return typeof s=="string"&&s.includes("<font>")?mn.test(me.get().parseXML(s)):!1},parse(s){return mn.parse(me.get().parseXML(s))}},Mr=[".xml",".fnt"],Wr={extension:{type:M.CacheParser,name:"cacheBitmapFont"},test:s=>s instanceof Fn,getCacheableAssets(s,e){const a={};return s.forEach(n=>{a[n]=e,a[`${n}-bitmap`]=e}),a[`${e.fontFamily}-bitmap`]=e,a}},zr={extension:{type:M.LoadParser,priority:pt.Normal},name:"loadBitmapFont",test(s){return Mr.includes(Ze.extname(s).toLowerCase())},async testParse(s){return oa.test(s)||vn.test(s)},async parse(s,e,a){const n=oa.test(s)?oa.parse(s):vn.parse(s),{src:o}=e,{pages:i}=n,l=[],d=n.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let v=0;v<i.length;++v){const y=i[v].file;let E=Ze.join(Ze.dirname(o),y);E=br(E,o),l.push({src:E,data:d})}const m=await a.load(l),b=l.map(v=>m[v.src]);return new Fn({data:n,textures:b},o)},async load(s,e){return await(await me.get().fetch(s)).text()},async unload(s,e,a){await Promise.all(s.pages.map(n=>a.unload(n.texture.source._sourceOrigin))),s.destroy()}};class Nr{constructor(e,a=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=a}add(e){e.forEach(a=>{this._assetList.push(a)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],a=Math.min(this._assetList.length,this._maxConcurrent);for(let n=0;n<a;n++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Dr={extension:{type:M.CacheParser,name:"cacheTextureArray"},test:s=>Array.isArray(s)&&s.every(e=>e instanceof Je),getCacheableAssets:(s,e)=>{const a={};return s.forEach(n=>{e.forEach((o,i)=>{a[n+(i===0?"":i+1)]=o})}),a}};async function Mn(s){if("Image"in globalThis)return new Promise(e=>{const a=new Image;a.onload=()=>{e(!0)},a.onerror=()=>{e(!1)},a.src=s});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(s)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Ur={extension:{type:M.DetectionParser,priority:1},test:async()=>Mn("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async s=>[...s,"avif"],remove:async s=>s.filter(e=>e!=="avif")},yn=["png","jpg","jpeg"],Gr={extension:{type:M.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async s=>[...s,...yn],remove:async s=>s.filter(e=>!yn.includes(e))},Hr="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function ma(s){return Hr?!1:document.createElement("video").canPlayType(s)!==""}const Vr={extension:{type:M.DetectionParser,priority:0},test:async()=>ma("video/mp4"),add:async s=>[...s,"mp4","m4v"],remove:async s=>s.filter(e=>e!=="mp4"&&e!=="m4v")},Yr={extension:{type:M.DetectionParser,priority:0},test:async()=>ma("video/ogg"),add:async s=>[...s,"ogv"],remove:async s=>s.filter(e=>e!=="ogv")},Xr={extension:{type:M.DetectionParser,priority:0},test:async()=>ma("video/webm"),add:async s=>[...s,"webm"],remove:async s=>s.filter(e=>e!=="webm")},Kr={extension:{type:M.DetectionParser,priority:0},test:async()=>Mn("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async s=>[...s,"webp"],remove:async s=>s.filter(e=>e!=="webp")};class Qr{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,a,n)=>(this._parsersValidated=!1,e[a]=n,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,a){const n={promise:null,parser:null};return n.promise=(async()=>{var l,d;let o=null,i=null;if(a.loadParser&&(i=this._parserHash[a.loadParser],i||Ge(`[Assets] specified load parser "${a.loadParser}" not found while loading ${e}`)),!i){for(let m=0;m<this.parsers.length;m++){const b=this.parsers[m];if(b.load&&((l=b.test)!=null&&l.call(b,e,a,this))){i=b;break}}if(!i)return Ge(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}o=await i.load(e,a,this),n.parser=i;for(let m=0;m<this.parsers.length;m++){const b=this.parsers[m];b.parse&&b.parse&&await((d=b.testParse)==null?void 0:d.call(b,o,a,this))&&(o=await b.parse(o,a,this)||o,n.parser=b)}return o})(),n}async load(e,a){this._parsersValidated||this._validateParsers();let n=0;const o={},i=jn(e),l=jt(e,b=>({alias:[b],src:b,data:{}})),d=l.length,m=l.map(async b=>{const u=Ze.toAbsolute(b.src);if(!o[b.src])try{this.promiseCache[u]||(this.promiseCache[u]=this._getLoadPromiseAndParser(u,b)),o[b.src]=await this.promiseCache[u].promise,a&&a(++n/d)}catch(v){throw delete this.promiseCache[u],delete o[b.src],new Error(`[Loader.load] Failed to load ${u}.
${v}`)}});return await Promise.all(m),i?o[l[0].src]:o}async unload(e){const n=jt(e,o=>({alias:[o],src:o})).map(async o=>{var d,m;const i=Ze.toAbsolute(o.src),l=this.promiseCache[i];if(l){const b=await l.promise;delete this.promiseCache[i],await((m=(d=l.parser)==null?void 0:d.unload)==null?void 0:m.call(d,b,o,this))}});await Promise.all(n)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,a)=>(a.name?e[a.name]&&Ge(`[Assets] loadParser name conflict "${a.name}"`):Ge("[Assets] loadParser should have a name"),{...e,[a.name]:a}),{})}}function ut(s,e){if(Array.isArray(e)){for(const a of e)if(s.startsWith(`data:${a}`))return!0;return!1}return s.startsWith(`data:${e}`)}const Jr=".json",Zr="application/json",ei={extension:{type:M.LoadParser,priority:pt.Low},name:"loadJson",test(s){return ut(s,Zr)||ft(s,Jr)},async load(s){return await(await me.get().fetch(s)).json()}},ti=".txt",si="text/plain",ai={name:"loadTxt",extension:{type:M.LoadParser,priority:pt.Low,name:"loadTxt"},test(s){return ut(s,si)||ft(s,ti)},async load(s){return await(await me.get().fetch(s)).text()}},ni=["normal","bold","100","200","300","400","500","600","700","800","900"],oi=[".ttf",".otf",".woff",".woff2"],ri=["font/ttf","font/otf","font/woff","font/woff2"],ii=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function li(s){const e=Ze.extname(s),o=Ze.basename(s,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(d=>d.charAt(0).toUpperCase()+d.slice(1));let i=o.length>0;for(const d of o)if(!d.match(ii)){i=!1;break}let l=o.join(" ");return i||(l=`"${l.replace(/[\\"]/g,"\\$&")}"`),l}const ci=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function di(s){return ci.test(s)?s:encodeURI(s)}const pi={extension:{type:M.LoadParser,priority:pt.Low},name:"loadWebFont",test(s){return ut(s,ri)||ft(s,oi)},async load(s,e){var n,o,i;const a=me.get().getFontFaceSet();if(a){const l=[],d=((n=e.data)==null?void 0:n.family)??li(s),m=((i=(o=e.data)==null?void 0:o.weights)==null?void 0:i.filter(u=>ni.includes(u)))??["normal"],b=e.data??{};for(let u=0;u<m.length;u++){const v=m[u],y=new FontFace(d,`url(${di(s)})`,{...b,weight:v});await y.load(),a.add(y),l.push(y)}return qe.set(`${d}-and-url`,{url:s,fontFaces:l}),l.length===1?l[0]:l}return Ge("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(s){(Array.isArray(s)?s:[s]).forEach(e=>{qe.remove(`${e.family}-and-url`),me.get().getFontFaceSet().delete(e)})}};function va(s,e=1){var n;const a=(n=Yt.RETINA_PREFIX)==null?void 0:n.exec(s);return a?parseFloat(a[1]):e}function ya(s,e,a){s.label=a,s._sourceOrigin=a;const n=new Je({source:s,label:a}),o=()=>{delete e.promiseCache[a],qe.has(a)&&qe.remove(a)};return n.source.once("destroy",()=>{e.promiseCache[a]&&(Ge("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),o())}),n.once("destroy",()=>{s.destroyed||(Ge("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),o())}),n}const fi=".svg",ui="image/svg+xml",gi={extension:{type:M.LoadParser,priority:pt.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(s){return ut(s,ui)||ft(s,fi)},async load(s,e,a){var n;return((n=e.data)==null?void 0:n.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?mi(s):hi(s,e,a,this.config.crossOrigin)},unload(s){s.destroy(!0)}};async function hi(s,e,a,n){var C,T,U;const i=await(await me.get().fetch(s)).blob(),l=URL.createObjectURL(i),d=new Image;d.src=l,d.crossOrigin=n,await d.decode(),URL.revokeObjectURL(l);const m=document.createElement("canvas"),b=m.getContext("2d"),u=((C=e.data)==null?void 0:C.resolution)||va(s),v=((T=e.data)==null?void 0:T.width)??d.width,y=((U=e.data)==null?void 0:U.height)??d.height;m.width=v*u,m.height=y*u,b.drawImage(d,0,0,v*u,y*u);const{parseAsGraphicsContext:E,...L}=e.data??{},Q=new En({resource:m,alphaMode:"premultiply-alpha-on-upload",resolution:u,...L});return ya(Q,a,s)}async function mi(s){const a=await(await me.get().fetch(s)).text(),n=new _r;return n.svg(a),n}const vi=`(function () {
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
`;let ct=null,ua=class{constructor(){ct||(ct=URL.createObjectURL(new Blob([vi],{type:"application/javascript"}))),this.worker=new Worker(ct)}};ua.revokeObjectURL=function(){ct&&(URL.revokeObjectURL(ct),ct=null)};const yi=`(function () {
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
`;let dt=null;class Wn{constructor(){dt||(dt=URL.createObjectURL(new Blob([yi],{type:"application/javascript"}))),this.worker=new Worker(dt)}}Wn.revokeObjectURL=function(){dt&&(URL.revokeObjectURL(dt),dt=null)};let bn=0,ra;class bi{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:a}=new ua;a.addEventListener("message",n=>{a.terminate(),ua.revokeObjectURL(),e(n.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,a){var n;return this._run("loadImageBitmap",[e,(n=a==null?void 0:a.data)==null?void 0:n.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){ra===void 0&&(ra=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<ra&&(this._createdWorkers++,e=new Wn().worker,e.addEventListener("message",a=>{this._complete(a.data),this._returnWorker(a.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,a){await this._initWorkers();const n=new Promise((o,i)=>{this._queue.push({id:e,arguments:a,resolve:o,reject:i})});return this._next(),n}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const a=this._queue.pop(),n=a.id;this._resolveHash[bn]={resolve:a.resolve,reject:a.reject},e.postMessage({data:a.arguments,uuid:bn++,id:n})}}const xn=new bi,xi=[".jpeg",".jpg",".png",".webp",".avif"],wi=["image/jpeg","image/png","image/webp","image/avif"];async function _i(s,e){var o;const a=await me.get().fetch(s);if(!a.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${s}: ${a.status} ${a.statusText}`);const n=await a.blob();return((o=e==null?void 0:e.data)==null?void 0:o.alphaMode)==="premultiplied-alpha"?createImageBitmap(n,{premultiplyAlpha:"none"}):createImageBitmap(n)}const zn={name:"loadTextures",extension:{type:M.LoadParser,priority:pt.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(s){return ut(s,wi)||ft(s,xi)},async load(s,e,a){var i;let n=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await xn.isImageBitmapSupported()?n=await xn.loadImageBitmap(s,e):n=await _i(s,e):n=await new Promise((l,d)=>{n=new Image,n.crossOrigin=this.config.crossOrigin,n.src=s,n.complete?l(n):(n.onload=()=>{l(n)},n.onerror=d)});const o=new En({resource:n,alphaMode:"premultiply-alpha-on-upload",resolution:((i=e.data)==null?void 0:i.resolution)||va(s),...e.data});return ya(o,a,s)},unload(s){s.destroy(!0)}},Nn=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Ai=Nn.map(s=>`video/${s.substring(1)}`);function ki(s,e,a){a===void 0&&!e.startsWith("data:")?s.crossOrigin=Si(e):a!==!1&&(s.crossOrigin=typeof a=="string"?a:"anonymous")}function $i(s){return new Promise((e,a)=>{s.addEventListener("canplaythrough",n),s.addEventListener("error",o),s.load();function n(){i(),e()}function o(l){i(),a(l)}function i(){s.removeEventListener("canplaythrough",n),s.removeEventListener("error",o)}})}function Si(s,e=globalThis.location){if(s.startsWith("data:"))return"";e||(e=globalThis.location);const a=new URL(s,document.baseURI);return a.hostname!==e.hostname||a.port!==e.port||a.protocol!==e.protocol?"anonymous":""}const ji={name:"loadVideo",extension:{type:M.LoadParser,name:"loadVideo"},test(s){const e=ut(s,Ai),a=ft(s,Nn);return e||a},async load(s,e,a){var m,b;const n={...ta.defaultOptions,resolution:((m=e.data)==null?void 0:m.resolution)||va(s),alphaMode:((b=e.data)==null?void 0:b.alphaMode)||await xr(),...e.data},o=document.createElement("video"),i={preload:n.autoLoad!==!1?"auto":void 0,"webkit-playsinline":n.playsinline!==!1?"":void 0,playsinline:n.playsinline!==!1?"":void 0,muted:n.muted===!0?"":void 0,loop:n.loop===!0?"":void 0,autoplay:n.autoPlay!==!1?"":void 0};Object.keys(i).forEach(u=>{const v=i[u];v!==void 0&&o.setAttribute(u,v)}),n.muted===!0&&(o.muted=!0),ki(o,s,n.crossorigin);const l=document.createElement("source");let d;if(s.startsWith("data:"))d=s.slice(5,s.indexOf(";"));else if(!s.startsWith("blob:")){const u=s.split("?")[0].slice(s.lastIndexOf(".")+1).toLowerCase();d=ta.MIME_TYPES[u]||`video/${u}`}return l.src=s,d&&(l.type=d),new Promise(u=>{const v=async()=>{const y=new ta({...n,resource:o});o.removeEventListener("canplay",v),e.data.preload&&await $i(o),u(ya(y,a,s))};o.addEventListener("canplay",v),o.appendChild(l)})},unload(s){s.destroy(!0)}},Dn={extension:{type:M.ResolveParser,name:"resolveTexture"},test:zn.test,parse:s=>{var e;return{resolution:parseFloat(((e=Yt.RETINA_PREFIX.exec(s))==null?void 0:e[1])??"1"),format:s.split(".").pop(),src:s}}},Ei={extension:{type:M.ResolveParser,priority:-2,name:"resolveJson"},test:s=>Yt.RETINA_PREFIX.test(s)&&s.endsWith(".json"),parse:Dn.parse};class Li{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Yt,this.loader=new Qr,this.cache=qe,this._backgroundLoader=new Nr(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var i,l;if(this._initialized){Ge("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let d=e.manifest;typeof d=="string"&&(d=await this.load(d)),this.resolver.addManifest(d)}const a=((i=e.texturePreference)==null?void 0:i.resolution)??1,n=typeof a=="number"?[a]:a,o=await this._detectFormats({preferredFormats:(l=e.texturePreference)==null?void 0:l.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:o,resolution:n}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,a){this._initialized||await this.init();const n=jn(e),o=jt(e).map(d=>{if(typeof d!="string"){const m=this.resolver.getAlias(d);return m.some(b=>!this.resolver.hasKey(b))&&this.add(d),Array.isArray(m)?m[0]:m}return this.resolver.hasKey(d)||this.add({alias:d,src:d}),d}),i=this.resolver.resolve(o),l=await this._mapLoadToResolve(i,a);return n?l[o[0]]:l}addBundle(e,a){this.resolver.addBundle(e,a)}async loadBundle(e,a){this._initialized||await this.init();let n=!1;typeof e=="string"&&(n=!0,e=[e]);const o=this.resolver.resolveBundle(e),i={},l=Object.keys(o);let d=0,m=0;const b=()=>{a==null||a(++d/m)},u=l.map(v=>{const y=o[v];return m+=Object.keys(y).length,this._mapLoadToResolve(y,b).then(E=>{i[v]=E})});return await Promise.all(u),n?i[e[0]]:i}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(a))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolveBundle(e);Object.values(a).forEach(n=>{this._backgroundLoader.add(Object.values(n))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return qe.get(e);const a={};for(let n=0;n<e.length;n++)a[n]=qe.get(e[n]);return a}async _mapLoadToResolve(e,a){const n=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const o=await this.loader.load(n,a);this._backgroundLoader.active=!0;const i={};return n.forEach(l=>{const d=o[l.src],m=[l.src];l.alias&&m.push(...l.alias),m.forEach(b=>{i[b]=d}),qe.set(m,d)}),i}async unload(e){this._initialized||await this.init();const a=jt(e).map(o=>typeof o!="string"?o.src:o),n=this.resolver.resolve(a);await this._unloadFromResolved(n)}async unloadBundle(e){this._initialized||await this.init(),e=jt(e);const a=this.resolver.resolveBundle(e),n=Object.keys(a).map(o=>this._unloadFromResolved(a[o]));await Promise.all(n)}async _unloadFromResolved(e){const a=Object.values(e);a.forEach(n=>{qe.remove(n.src)}),await this.loader.unload(a)}async _detectFormats(e){let a=[];e.preferredFormats&&(a=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const n of e.detections)e.skipDetections||await n.test()?a=await n.add(a):e.skipDetections||(a=await n.remove(a));return a=a.filter((n,o)=>a.indexOf(n)===o),a}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(a=>{a.config&&Object.keys(a.config).filter(n=>n in e).forEach(n=>{a.config[n]=e[n]})})}}const lt=new Li;He.handleByList(M.LoadParser,lt.loader.parsers).handleByList(M.ResolveParser,lt.resolver.parsers).handleByList(M.CacheParser,lt.cache.parsers).handleByList(M.DetectionParser,lt.detections);He.add(Dr,Gr,Ur,Kr,Vr,Yr,Xr,ei,ai,pi,gi,zn,ji,zr,Wr,Dn,Ei);const wn={loader:M.LoadParser,resolver:M.ResolveParser,cache:M.CacheParser,detection:M.DetectionParser};He.handle(M.Asset,s=>{const e=s.ref;Object.entries(wn).filter(([a])=>!!e[a]).forEach(([a,n])=>He.add(Object.assign(e[a],{extension:e[a].extension??n})))},s=>{const e=s.ref;Object.keys(wn).filter(a=>!!e[a]).forEach(a=>He.remove(e[a]))});var Ti=ee('<div class="win-label svelte-1vsph43">BIG WIN!</div> <div class="win-amount-display svelte-1vsph43"> </div>',1),Ri=_n('<use href="#sparkle" class="sparkle svelte-1vsph43"></use>'),Pi=_n('<use href="#vinyl"></use>'),Ii=ee('<div><!> <svg class="vinyl-canvas svelte-1vsph43" viewBox="0 0 1024 800" xmlns="http://www.w3.org/2000/svg"><defs class="svelte-1vsph43"><symbol id="vinyl" viewBox="-200 -200 400 400" class="svelte-1vsph43"><circle cx="0" cy="0" r="180" fill="#0b0b0b" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="150" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.3" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="120" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.25" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="90" fill="none" stroke="#1a1a1a" stroke-width="1.5" opacity="0.2" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="55" fill="var(--label-color)" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="6" fill="#ffffff" class="svelte-1vsph43"></circle><ellipse cx="-15" cy="-15" rx="20" ry="15" fill="#ffffff" opacity="0.3" transform="rotate(-30)" class="svelte-1vsph43"></ellipse></symbol><symbol id="sparkle" viewBox="-12 -12 24 24" class="svelte-1vsph43"><polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ffd966" class="svelte-1vsph43"></polygon><circle cx="0" cy="0" r="2" fill="#ffffff" class="svelte-1vsph43"></circle></symbol><symbol id="confetti" viewBox="-3 -3 6 6" class="svelte-1vsph43"><circle cx="0" cy="0" r="2" fill="var(--confetti-color)" class="svelte-1vsph43"></circle></symbol></defs><!><!></svg></div>');function Oi(s,e){Ht(e,!0);let a=it(e,"winLevel",3,"small"),n=it(e,"winAmount",3,0),o=it(e,"vinylStartScale",3,.01),i=it(e,"vinylEndScale",3,.15),l=it(e,"sparkleScale",3,.6),d=R(!1),m=R(!1);const b={small:{vinyls:5,sparkles:8,maxRadius:70},medium:{vinyls:12,sparkles:16,maxRadius:100},jackpot:{vinyls:24,sparkles:30,maxRadius:130}},u=Ue(()=>b[a()]),v=["#f04e37","#ffd966","#ff8533","#4ecdc4","#ff6b9d"];function y(V){const fe=[],Pe=t(u).maxRadius;for(let H=0;H<V;H++){const K=Math.PI*2*H/V+Math.random()*.4,Ce=Math.random()*Pe*.7+Pe*.2;fe.push({x:512+Math.cos(K)*Ce,y:400+Math.sin(K)*Ce,rotation:Math.random()*30-15,scale:i()*(.8+Math.random()*.4),delay:H*.05,color:v[H%v.length]})}return fe}function E(V){const fe=[];for(let ue=0;ue<V;ue++)fe.push({x:100+Math.random()*824,y:50+Math.random()*700,delay:Math.random()*.8,duration:.6+Math.random()*.4,rotation:Math.random()*360});return fe}const L=Ue(()=>y(t(u).vinyls)),Q=Ue(()=>E(t(u).sparkles));function C(){g(d,!0),g(m,!0),setTimeout(()=>{g(m,!1),setTimeout(()=>{var V;g(d,!1),(V=e.onComplete)==null||V.call(e)},500)},a()==="jackpot"?4e3:a()==="medium"?3e3:2500)}function T(){g(m,!1),setTimeout(()=>{g(d,!1)},500)}var U=Dt(),re=Ve(U);{var ie=V=>{var fe=Ii();let ue;var we=w(fe);{var Pe=_e=>{var ae=Ti(),ve=f(Ve(ae),2),et=w(ve,!0);_(ve),oe(Ie=>X(et,Ie),[()=>n().toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),G(_e,ae)};se(we,_e=>{n()>0&&_e(Pe)})}var H=f(we,2),K=f(w(H));Gt(K,17,()=>t(Q),Ut,(_e,ae)=>{var ve=Ri();oe(()=>x(ve,"style",`
            --sx: ${t(ae).x??""}px;
            --sy: ${t(ae).y??""}px;
            --duration: ${t(ae).duration??""}s;
            --sparkle-delay: ${t(ae).delay??""}s;
            --sparkle-scale: ${l()??""};
          `)),G(_e,ve)});var Ce=f(K);Gt(Ce,17,()=>t(L),Ut,(_e,ae)=>{var ve=Pi();let et;oe(()=>{et=da(ve,0,"vinyl-group svelte-1vsph43",null,et,{floating:t(m)}),x(ve,"style",`
            --tx: ${t(ae).x??""}px;
            --ty: ${t(ae).y??""}px;
            --scale: ${t(ae).scale??""};
            --rotation: ${t(ae).rotation??""}deg;
            --delay: ${t(ae).delay??""}s;
            --label-color: ${t(ae).color??""};
            --start-scale: ${o()??""};
          `)}),G(_e,ve)}),_(H),_(fe),oe(()=>ue=da(fe,1,"vinyl-win-container svelte-1vsph43",null,ue,{visible:t(m),hiding:!t(m)})),G(V,fe)};se(re,V=>{t(d)&&V(ie)})}return G(s,U),Vt({show:C,hide:T})}var qi=ee(`<div style="
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
		"> </div></div>`),Ci=ee(`<div style="
				position: absolute;
				bottom: 40px;
				left: 50%;
				transform: translateX(-50%);
				color: #fff;
				font-family: Arial, sans-serif;
				font-size: 20px;
				text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
			">Please wait...</div>`),Bi=ee('<div role="button" tabindex="0"><span style="position: absolute; left: -9999px;">Click anywhere to continue</span> <!></div>');function Fi(s,e){Ht(e,!0);let a=R(!1),n=R(!1),o=R(!1),i=R(0);ga(()=>{const v=setInterval(()=>{g(i,t(i)+2),t(i)>=100&&(clearInterval(v),g(i,100),setTimeout(()=>{g(n,!0),setTimeout(()=>{g(o,!0)},3e3)},500))},60);return()=>clearInterval(v)});function l(){t(n)&&t(o)&&!t(a)&&(g(a,!0),setTimeout(()=>e.onloaded(),300))}var d=Dt(),m=Ve(d);{var b=v=>{var y=qi(),E=w(y);x(E,"src",`${xe??""}/loading_screen/MadCraneLogo.jpg`);var L=f(E,2),Q=w(L);_(L);var C=f(L,2),T=w(C);_(C),_(y),oe(U=>{x(Q,"style",`
				width: ${t(i)??""}%;
				height: 100%;
				background: linear-gradient(90deg, #ff0000, #ff6600);
				transition: width 0.3s ease;
			`),X(T,`Loading... ${U??""}%`)},[()=>Math.round(t(i))]),G(v,y)},u=v=>{var y=Dt(),E=Ve(y);{var L=Q=>{var C=Bi(),T=f(w(C),2);{var U=re=>{var ie=Ci();G(re,ie)};se(T,re=>{t(o)||re(U)})}_(C),oe(()=>x(C,"style",`
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background-image: url('${xe??""}/loading_screen/Splash_screen_RockabillyReels.jpeg');
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			cursor: ${(t(o)?"pointer":"default")??""};
			z-index: 10000;
		`)),q("click",C,l),q("keydown",C,re=>re.key==="Enter"&&l()),G(Q,C)};se(E,Q=>{t(n)&&!t(a)&&Q(L)},!0)}G(v,y)};se(m,v=>{t(n)?v(u,!1):v(b)})}G(s,d),Vt()}var Mi=Go('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-1tj0qym"><\/script><!---->',1),Wi=ee('<p style="color: red;" class="svelte-1tj0qym"><strong class="svelte-1tj0qym">Error:</strong> </p>'),zi=ee('<div class="svelte-1tj0qym"> </div>'),Ni=ee('<details class="svelte-1tj0qym"><summary class="svelte-1tj0qym"> </summary> <!></details>'),Di=ee(`<div style="
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
  " class="svelte-1tj0qym"><h3 class="svelte-1tj0qym">🎰 Oma-peli Debug</h3> <p class="svelte-1tj0qym"><strong class="svelte-1tj0qym">Status:</strong> </p> <!> <p class="svelte-1tj0qym"><strong class="svelte-1tj0qym">Base:</strong> </p> <p class="svelte-1tj0qym"><strong class="svelte-1tj0qym">BG URL:</strong> </p> <p class="svelte-1tj0qym"><strong class="svelte-1tj0qym">Sample:</strong> </p> <!></div>`),Ui=ee('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-1tj0qym"> </div>'),Gi=ee('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-1tj0qym"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-1tj0qym"> </span></div>'),Hi=ee(`<div style="
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
  " class="svelte-1tj0qym"><h2 style="margin: 0 0 10px 0; font-size: 2em;" class="svelte-1tj0qym">🎉 VOITTO! 🎉</h2> <div style="font-size: 1.5em; font-weight: bold; margin: 10px 0;" class="svelte-1tj0qym"> </div> <!> <!> <button style="
        margin-top: 15px;
        padding: 8px 16px;
        background: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
      " class="svelte-1tj0qym">Jatka pelaamista</button></div>`),Vi=ee('<button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1em;" class="svelte-1tj0qym">🛑 STOP AUTOPLAY</button>'),Yi=ee('<button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1em;" class="svelte-1tj0qym">▶️ START AUTOPLAY</button>'),Xi=ee(`<div class="svelte-1tj0qym"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-1tj0qym">💰 MENU</h2> <div class="mobile-menu-controls svelte-1tj0qym" style="display: none; margin-bottom: 20px; padding: 15px; background: rgba(255, 255, 255, 0.05); border-radius: 10px;"><h3 style="margin: 0 0 15px 0; color: #ffd700; font-size: 1.2em;" class="svelte-1tj0qym">🎮 GAME CONTROLS</h3> <div style="margin-bottom: 15px;" class="svelte-1tj0qym"><div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;" class="svelte-1tj0qym"><span style="font-size: 1.1em;" class="svelte-1tj0qym">🔄 Autoplay:</span> <span class="svelte-1tj0qym"> </span></div> <!></div> <div style="margin-bottom: 10px;" class="svelte-1tj0qym"><div style="margin-bottom: 10px;" class="svelte-1tj0qym"><span style="font-size: 1.1em;" class="svelte-1tj0qym">⚡ Spin Speed:</span> <span style="color: #ffd700; font-weight: bold; margin-left: 10px;" class="svelte-1tj0qym"> </span></div> <div style="display: flex; gap: 10px;" class="svelte-1tj0qym"><button class="svelte-1tj0qym">🐌 Slow</button> <button class="svelte-1tj0qym">🏃 Medium</button> <button class="svelte-1tj0qym">⚡ Fast</button></div></div> <div style="border-top: 1px solid #555; margin: 20px 0;" class="svelte-1tj0qym"></div></div> <h3 style="margin: 0 0 15px 0; color: #ffd700; font-size: 1.2em;" class="svelte-1tj0qym">💰 PAYTABLE (81 WAYS)</h3> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-1tj0qym">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-1tj0qym"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-1tj0qym"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-1tj0qym"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-1tj0qym">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1tj0qym">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-1tj0qym">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-1tj0qym">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-1tj0qym"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-1tj0qym">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1tj0qym">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-1tj0qym">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-1tj0qym">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-1tj0qym">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-1tj0qym"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-1tj0qym">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1tj0qym">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-1tj0qym">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-1tj0qym">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-1tj0qym"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-1tj0qym">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1tj0qym">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-1tj0qym">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-1tj0qym">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-1tj0qym"> <span style="color: #ffd700;" class="svelte-1tj0qym">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-1tj0qym">Sulje</button></div>`),Ki=ee(`<div style="
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
  " class="svelte-1tj0qym"><div style="
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: white;
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      border: 3px solid #ffd700;
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
      max-width: 500px;
      font-family: Arial, sans-serif;
    " class="svelte-1tj0qym"><h1 style="
        margin: 0 0 20px 0;
        font-size: 2.5em;
        color: #ffd700;
        text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
      " class="svelte-1tj0qym">🎰 VAPAAPELIT PÄÄTTYIVÄT! 🎰</h1> <div style="
        font-size: 1.2em;
        margin: 20px 0;
        color: #aaa;
      " class="svelte-1tj0qym">Voitit yhteensä:</div> <div style="
        font-size: 3em;
        font-weight: bold;
        color: #00ff00;
        text-shadow: 0 0 15px rgba(0, 255, 0, 0.8);
        margin: 20px 0;
      " class="svelte-1tj0qym"> </div> <button style="
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
        " class="svelte-1tj0qym">JATKA PERUSPELIIN</button></div></div>`),Qi=ee('<div class="svelte-1tj0qym"><div class="svelte-1tj0qym">🔄 Select Rounds</div> <button class="svelte-1tj0qym">10 Rounds</button> <button class="svelte-1tj0qym">25 Rounds</button> <button class="svelte-1tj0qym">50 Rounds</button> <button class="svelte-1tj0qym">100 Rounds</button> <button class="svelte-1tj0qym">200 Rounds</button> <button class="svelte-1tj0qym">500 Rounds</button> <button class="svelte-1tj0qym">1,000 Rounds</button> <button class="svelte-1tj0qym">5,000 Rounds</button> <button class="svelte-1tj0qym">Cancel</button></div>'),Ji=ee(`<!>  <!>   <!>   <!>   <!>  <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
" class="svelte-1tj0qym"><div class="svelte-1tj0qym"><div class="svelte-1tj0qym"><button class="svelte-1tj0qym">💰 PAYTABLE</button>  <div class="control-panel-mobile svelte-1tj0qym"><!>  <img alt="Left End" class="svelte-1tj0qym"> <div class="svelte-1tj0qym"><div style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;" class="svelte-1tj0qym"><div style="display: flex; flex-direction: column; align-items: center;" class="svelte-1tj0qym"><div class="svelte-1tj0qym">BET</div> <div class="svelte-1tj0qym"><button title="Decrease Bet" class="svelte-1tj0qym"></button> <div class="svelte-1tj0qym"> </div> <button title="Increase Bet" class="svelte-1tj0qym"></button></div></div> <img alt="Divider" class="svelte-1tj0qym"> <div style="display: flex; flex-direction: column; align-items: center;" class="svelte-1tj0qym"><div class="svelte-1tj0qym">BALANCE</div> <div class="svelte-1tj0qym"><div class="svelte-1tj0qym"> </div></div></div> <img alt="Divider" class="svelte-1tj0qym"></div> <div class="svelte-1tj0qym"></div> <div style="position: absolute; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; z-index: 10;" class="svelte-1tj0qym"><div><button class="svelte-1tj0qym"></button></div></div> <div style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;" class="svelte-1tj0qym"><div class="svelte-1tj0qym"><button class="svelte-1tj0qym"></button> <img alt="Status bar" class="svelte-1tj0qym"></div> <img alt="Divider" class="svelte-1tj0qym"> <div class="svelte-1tj0qym"><button class="svelte-1tj0qym"></button> <img alt="Speed bar" class="svelte-1tj0qym"></div> <img alt="Divider" class="svelte-1tj0qym"> <div style="display: flex; flex-direction: column; align-items: center;" class="svelte-1tj0qym"><div class="svelte-1tj0qym">WIN</div> <div class="svelte-1tj0qym"><div class="svelte-1tj0qym"> </div></div></div> <img alt="Divider" class="svelte-1tj0qym"> <div style="display: flex; align-items: center; justify-content: center;" class="svelte-1tj0qym"><button title="Menu" class="svelte-1tj0qym"></button></div></div></div> <img alt="Right End" class="svelte-1tj0qym"></div></div>  <button class="svelte-1tj0qym"></button> <!>   <div class="debug-panel svelte-1tj0qym"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-1tj0qym">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-1tj0qym"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1tj0qym"><span style="color: #aaa;" class="svelte-1tj0qym">Rounds:</span> <span style="color: #fff;" class="svelte-1tj0qym"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1tj0qym"><span style="color: #aaa;" class="svelte-1tj0qym">Wagered:</span> <span style="color: #ff6666;" class="svelte-1tj0qym"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1tj0qym"><span style="color: #aaa;" class="svelte-1tj0qym">Won:</span> <span style="color: #66ff66;" class="svelte-1tj0qym"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 10px; 
    padding-top: 10px; 
    border-top: 1px solid #555;
    font-weight: bold;
    font-size: 18px;
  " class="svelte-1tj0qym"><span style="color: #ffd700;" class="svelte-1tj0qym">RTP:</span> <span class="svelte-1tj0qym"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
  " class="svelte-1tj0qym"><span style="color: #aaa;" class="svelte-1tj0qym">Hit Freq:</span> <span class="svelte-1tj0qym"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-size: 14px;
  " class="svelte-1tj0qym"><span style="color: #aaa;" class="svelte-1tj0qym">Free Spins Triggered:</span> <span style="color: #66ccff;" class="svelte-1tj0qym"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 4px;
    font-size: 14px;
  " class="svelte-1tj0qym"><span style="color: #aaa;" class="svelte-1tj0qym">Free Spins Played:</span> <span style="color: #66ccff;" class="svelte-1tj0qym"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #555;
    font-size: 14px;
  " class="svelte-1tj0qym"><span style="color: #aaa;" class="svelte-1tj0qym">Empty Slots:</span> <span style="color: #ff9900;" class="svelte-1tj0qym"> </span></div> <button style="
      margin-top: 10px;
      width: 100%;
      padding: 5px;
      background: rgba(255, 100, 100, 0.3);
      color: #fff;
      border: 1px solid #ff6666;
      border-radius: 5px;
      cursor: pointer;
      font-size: 11px;
    " class="svelte-1tj0qym">Reset Stats</button> <div style="
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  " class="svelte-1tj0qym"><button class="svelte-1tj0qym"> </button> <button class="svelte-1tj0qym">Clear Win Log</button> <button class="svelte-1tj0qym">🎰 Test Free Spins</button></div></div> <div class="svelte-1tj0qym"><button class="svelte-1tj0qym"></button> <button class="svelte-1tj0qym"></button></div></div></div>`,1);function Zi(s,e){Ht(e,!0);const a="1.4.6",n=13,o=1445,i=1e3,l=1.75,d=-25,m=-15,b=175,u=-5,v=750,y=80,E=250,L=0,Q=50,C=.5,T=30,U=-10,ie=Math.round(100*l),V=Math.round(ie*(700/760)),ue=V+10,we=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],Pe=typeof window<"u"&&window.location.hostname.includes("github.io"),H=Pe?"/web-sdk/oma-peli/symbols":`${xe}/symbols`,K=Pe?"/web-sdk/oma-peli/controls":`${xe}/controls`,Ce={a:`${H}/Blue_hotrod.jpg`,b:`${H}/Blue_jacket.jpg`,c:`${H}/Blue_rollers.jpg`,d:`${H}/Blue_speakers.jpg`,e:`${H}/Premium_blonde.jpg`,f:`${H}/Premium_brunette.jpg`,g:`${H}/Premium_rocker.jpg`,h:`${H}/New_Wild.jpg`,i:`${H}/Red_burger.jpg`,j:`${H}/Red_fries.jpg`,k:`${H}/Red_milkshake.jpg`,l:`${H}/Scatter.jpg`,emptyslot:`${H}/Emptyslot.jpg`},_e=`${H}/bg_base.jpg`,ae=`${H}/ReelFrames.png`,ve=`${H}/RockABillyReels_logo.png`,et={spin:`${xe}/sounds/spin.mp3`,stop:`${xe}/sounds/stop.mp3`,win:`${xe}/sounds/win.mp3`};let Ie=R(!0),Xt={},z=null,ye=null,Kt=null,Qt=null,Le=R(!0),Un=R(!1),Jt=R(1100),Zt=null;const Gn={fast:3,medium:7,slow:18};let J=R("medium"),Be=R(Math.floor(Math.random()*20)+1);const gt={background:()=>`${xe}/music/rockabilly reels loop ${t(Be)}.mp3`,freeSpins:`${xe}/music/rockabilly-loop_long.mp3`,drumHit:`${xe}/music/drum-hit.mp3`,winTheme:`${xe}/music/win-stinger.mp3`};function ba(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(ba,500);return}const c=window.Howl;try{z=new c({src:[gt.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+t(Be)+")"),g(Un,!0)},onloaderror:(p,k)=>{console.warn("⚠️ Background music not found:",k)}}),ye=new c({src:[gt.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(p,k)=>console.warn("⚠️ Free spins music not found:",k)}),Kt=new c({src:[gt.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Qt=new c({src:[gt.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(p){console.error("Failed to initialize music system:",p)}}function xa(){const c=t(Z)?ye:z;c&&t(Le)&&!c.playing()&&(c.play(),console.log("🎵 "+(t(Z)?"Free spins":"Background")+" music started"))}function Hn(){if(t(Z))return;const c=Math.floor(Math.random()*20)+1;c===t(Be)?g(Be,c%20+1):g(Be,c),console.log("🎵 Changing to loop #"+t(Be)),z&&(z.playing()?(z.fade(z.volume(),0,200),setTimeout(()=>{z.stop(),z.unload()},200)):z.unload());const p=window.Howl;p&&(z=new p({src:[gt.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ New background music loop #"+t(Be)+" loaded"),t(Le)&&!t(Z)&&setTimeout(()=>{z&&!z.playing()&&z.play()},300)},onloaderror:(k,S)=>{console.warn("⚠️ Failed to load loop #"+t(Be)+":",S)}}))}function Vn(){z&&z.playing()&&(z.fade(z.volume(),0,500),setTimeout(()=>z.stop(),500)),ye&&ye.playing()&&(ye.fade(ye.volume(),0,500),setTimeout(()=>ye.stop(),500))}function es(){z&&z.playing()&&(z.fade(z.volume(),0,500),setTimeout(()=>z.stop(),500)),ye&&ye.playing()&&(ye.fade(ye.volume(),0,500),setTimeout(()=>ye.stop(),500)),setTimeout(()=>{t(Le)&&xa()},600)}function Yn(){if(z&&z.playing()){const c=z.volume();z.fade(c,0,1e3),setTimeout(()=>{z.stop(),z.volume(.3)},1e3)}}let ts=R(!1);function Xn(){g(ts,!1),setTimeout(()=>{g(ts,!0)},10)}let tt=null;const ss={vinylStartScale:.01,vinylEndScale:.05,sparkleScale:.1};function Kn(){g(Le,!t(Le)),t(Le)?xa():Vn()}function Qn(){g(Ie,!t(Ie))}function Jn(){Kt&&t(Le)&&t(Ie)&&Kt.play()}function Zn(){Qt&&t(Le)&&t(Ie)&&Qt.play()}let Et=null,as=null,ht=null,Fe=null,mt=R("Initializing..."),st=R(""),Ae=[],wa=R(!1),Me=R(1e3);const _a=[.4,.8,1,1.6,2,3,5,8,10,15,20,25,30,40,50,60,80,100];let vt=R(5),ke=Ue(()=>_a[t(vt)]),Ye=R(0),le=R(!1),yt=R(0),ge=R(!1),ns=R(!1),eo=R(0),Xe=!1,Oe=null,os=!1,at=R(0),nt=R(0),bt=R(0),rs=R(0),is=Ue(()=>t(nt)>0?(t(bt)/t(nt)*100).toFixed(2):"0.00"),ls=Ue(()=>t(at)>0?(t(rs)/t(at)*100).toFixed(2):"0.00"),Z=R(!1),We=R(0),Ke=R(0),Lt=R(0),cs=R(0),Tt=R(0),ds=R(0),to=Ue(()=>t(Tt)>0?(t(ds)/t(Tt)*100).toFixed(2):"0.00"),be=R(he([]));function so(c,p,k){const S=new Date().toLocaleString("fi-FI");let h=`
${"=".repeat(60)}
`;h+=`ROUND #${c} - ${S}
`,h+=`Mode: ${t(Z)?"FREE SPINS":"BASE GAME"}
`,h+=`${"=".repeat(60)}
`,p.forEach(($,A)=>{h+=`
Win ${A+1}:
`,h+=`  Symbol: ${$.symbol} (${Sa[$.symbol]})
`,h+=`  Count: ${$.count} symbols
`,h+=`  Multiplier: ${$.multiplier}x
`,h+=`  Payout: ${$.payout.toFixed(2)}
`,h+=`  Positions: [${$.positions.join(", ")}]
`}),h+=`
${"─".repeat(60)}
`,h+=`TOTAL WIN: ${k.toFixed(2)}
`,h+=`${"=".repeat(60)}
`,t(be).push(h)}function ao(){const c=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${t(be).join(`
`)}`,p=new Blob([c],{type:"text/plain"}),k=URL.createObjectURL(p),S=document.createElement("a");S.href=k,S.download=`win-log-${Date.now()}.txt`,S.click(),URL.revokeObjectURL(k)}function no(){g(be,he([]))}function oo(){t(Z)||(g(Z,!0),g(We,10),g(Ke,0),je(Lt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),es())}const ro={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},io={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function Aa(c){if(c===6)return Math.random()<.55?"h":"emptyslot";const p=t(Z)?io:ro,k=Math.random();let S=0;const h=we.filter(A=>A!=="h"),$=h.reduce((A,O)=>A+p[O],0);for(const A of h)if(S+=p[A]/$,k<S)return A;return"f"}function ka(){const c=[];for(let p=0;p<n;p++){const k=Aa(p);c.push(k),je(Tt),k==="emptyslot"&&je(ds)}return c}function $a(c){return c<3?{col:0,row:c}:c<6?{col:1,row:c-3}:c===6?{col:2,row:0}:c<10?{col:3,row:c-7}:{col:4,row:c-10}}function xt(c,p){return c===0?p:c===1?3+p:c===2?6:c===3?7+p:c===4?10+p:-1}function lo(){if(t(Z)){const c=Math.random();return c<.7?3:c<.92?5:10}else{const c=Math.random();return c<.7?1:c<.92?2:3}}const co={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function po(){var ne;const c=[],p=[];for(let j=0;j<n;j++)wt[j]==="l"&&p.push(j);if(p.length>=5){const j=p.length;g(We,t(We)+j),t(Z)?console.log(`🎰 FREE SPINS RETRIGGERED! +${j} FREE SPINS! Total: ${t(We)}`):(g(Z,!0),g(Ke,0),je(Lt),console.log(`🎰 FREE SPINS TRIGGERED! ${p.length} scatters = ${j} FREE SPINS!`),es()),c.push({symbol:"l",count:p.length,payout:0,positions:p,multiplier:1})}const k=[];for(let j=0;j<3;j++)for(let I=0;I<3;I++)for(let F=0;F<1;F++)for(let W=0;W<3;W++)for(let N=0;N<3;N++){const D=[xt(0,j),xt(1,I),xt(2,F),xt(3,W),xt(4,N)];k.push(D)}console.log(`Generated ${k.length} possible paths (should be 81)`);const S=[];for(const j of k){const I=j.map(D=>wt[D]);if(I[0]==="emptyslot"||I[0]==="l")continue;let F=null;for(let D=0;D<I.length;D++)if(I[D]!=="h"&&I[D]!=="emptyslot"&&I[D]!=="l"){F=I[D];break}if(!F)continue;let W=0;const N=new Set;for(let D=0;D<j.length;D++){const Re=j[D],{col:de}=$a(Re),te=I[D];(te===F||te==="h")&&N.add(de)}for(let D=0;D<5&&N.has(D);D++)W++;if(W>=3){const Re=j[0]%3;S.push({symbol:F,length:W,path:j.slice(0,W),startRow:Re})}}const h=[],$=new Map;for(const j of S){const I=`${j.symbol}-${j.path.join(",")}`;$.has(I)||$.set(I,[]),$.get(I).push(j)}for(const[j,I]of $.entries()){const F=Math.max(...I.map(N=>N.length)),W=I.find(N=>N.length===F);W&&h.push(W)}const A=[],O=new Map;for(const j of h)O.has(j.symbol)||O.set(j.symbol,[]),O.get(j.symbol).push(j);const P=[];for(const[j,I]of O.entries()){const F=Math.max(...I.map(N=>N.length)),W=I.filter(N=>N.length===F);P.push(...W)}const B=new Map;for(const j of P){const I=`${j.symbol}-${j.length}`;B.has(I)||B.set(I,[]),B.get(I).push(j)}const Y=P.length>0?lo():1;for(const[j,I]of B.entries()){const F=I[0],W=(ne=co[F.symbol])==null?void 0:ne[F.length];if(W!==void 0&&W>0){const N=new Map;for(const te of I)for(let pe=0;pe<te.length;pe++)N.has(pe)||N.set(pe,new Set),N.get(pe).add(te.path[pe]);let D=1;for(let te=0;te<F.length;te++){const pe=N.get(te);D*=pe?pe.size:1}const Re=W*t(ke)*D*Y;console.log(`  ${F.length}x${F.symbol}: ${D} ways × ${W}x × ${t(ke)} bet × ${Y} mult = ${Re}`);const de=new Set;for(const te of I)te.path.forEach(pe=>de.add(pe));A.push({symbol:F.symbol,count:F.length,payout:Re,positions:Array.from(de),multiplier:Y})}}return c.push(...A),c}let $e=R(0),ot=R(he([])),ze=R(!1),Qe=R(!1),ps=R(!1),fs=R(0);const Sa={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function us(c){if(!t(Ie)||!Xt[c])return;const p=Xt[c];p.currentTime=0,p.play().catch(k=>{console.warn("Äänen toisto epäonnistui:",c,k)})}function fo(c){_t.forEach(p=>ce.stage.removeChild(p)),_t=[],c.forEach(p=>{p.positions.forEach(k=>{const S=Te[k],h=new pn().rect(0,0,ie,V).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});h.x=S.container.x,h.y=S.container.y,ce.stage.addChild(h),_t.push(h);let $=0,A=1;const O=.05;ce.ticker.add(()=>{$+=A*O,$>=.4&&(A=-1),$<=0&&(A=1),h.alpha=.5+$})})})}function gs(){_t.forEach(c=>ce.stage.removeChild(c)),_t=[]}let wt=ka(),hs,ce,Te=[],_t=[];class uo{constructor(p,k){Se(this,"index");Se(this,"container");Se(this,"offset",0);Se(this,"speed",0);Se(this,"targetSpeed",30);Se(this,"state","idle");Se(this,"stopDelay",0);Se(this,"bounceOffset",0);Se(this,"bounceSpeed",0);Se(this,"bounceFrames",0);this.index=p,this.container=k}start(p){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=p}startSynchronized(p){const k=Gn[t(J)],S=60+p*k;this.start(S)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const p=t(J)==="slow"?.88:t(J)==="medium"?.92:.95;this.speed*=p,this.speed<2.5&&(this.state="bouncing",this.speed=0,this.offset=0,this.bounceOffset=0,this.bounceSpeed=4,us("stop"),Jn())}this.state==="bouncing"&&(this.bounceSpeed*=.8,this.bounceOffset+=this.bounceSpeed,Math.abs(this.bounceSpeed)<.2&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=ue&&(this.offset=0,wt[this.index]=Aa(this.index)))}}draw(){const p=this.container;p.removeChildren();const k=wt[this.index];if(!k||!Et||!Et[k])return;const S=this.offset+this.bounceOffset,h=($,A)=>{const O=Et[$];if(!O)return;const P=new sa(O);P.width=ie,P.height=V,P.x=0,P.y=A,p.addChild(P)};h(k,S-ue),h(k,S),h(k,S+ue)}}let r=R(1);ga(async()=>{ce=new Bn,await ce.init({width:o,height:i,backgroundAlpha:0}),hs.appendChild(ce.canvas);const c=()=>{const h=window.innerWidth,$=window.innerHeight,A=h/o,O=$/i,P=$>h;let B;P?B=Math.min(A*.95,O*.85,1):B=Math.min(A,O,1),g(r,he(B)),ce.stage.scale.set(B),ce.renderer.resize(o,i)};c(),window.addEventListener("resize",c);const p=h=>{(h.code==="Space"||h.key===" ")&&(h.preventDefault(),Te.some(A=>A.state==="spinning"||A.state==="slowing")?(Te.forEach(A=>{A.state==="spinning"?(A.stopDelay=0,A.state="slowing",A.speed=A.targetSpeed*.5):A.state==="slowing"&&(A.speed=A.speed*.3)}),console.log("⚡ Skip spin - kiekot pysähtyvät nopeasti")):ms())};window.addEventListener("keydown",p);const k={};try{g(mt,"Loading background and UI images..."),Ae.push(`Loading background: ${_e}`),Ae.push(`Loading reel frames: ${ae}`),Ae.push(`Loading logo: ${ve}`),await lt.load([{alias:"background",src:_e},{alias:"reelframes",src:ae},{alias:"logo",src:ve}]),as=Je.from("background"),ht=Je.from("reelframes"),Fe=Je.from("logo"),console.log("✅ Background texture created:",as.width,"x",as.height),console.log("✅ Reel frames texture created:",ht.width,"x",ht.height),console.log("✅ Logo texture created:",Fe.width,"x",Fe.height),Ae.push("✅ All UI images loaded"),g(mt,"Loading symbols...");const h=[];for(const $ of we)h.push({alias:$,src:Ce[$]});await lt.load(h);for(const $ of we){const A=Ce[$];Ae.push(`Loading symbol ${$}: ${A}`);try{const O=Je.from($);k[$]=O,console.log(`✅ Symbol ${$} loaded:`,O.width,"x",O.height),Ae.push(`✅ Symbol ${$} loaded`)}catch(O){const P=`❌ Failed to load symbol ${$} from ${A}: ${O}`;throw Ae.push(P),console.error(P),new Error(P)}}Et=k,g(mt,"Assets loaded successfully!")}catch(h){g(st,`Asset loading failed: ${h}`),Ae.push(t(st)),console.error(t(st));return}console.log("Ladataan ääniefektit...");for(const[h,$]of Object.entries(et)){const A=new Audio;A.src=$,A.preload="auto",A.volume=.7,A.load(),A.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${$} (käytetään hiljaista placeholderia)`)}),Xt[h]=A}[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(h=>({x:h.x+d,y:h.y+m})),Te=[];for(let h=0;h<n;h++){const $=$a(h),A=$.col,O=$.row,P=300+A*(ie+20),B=250+O*(V+15),Y=h===6?P+u:P,ne=h===6?B+b:B,j=new ha;j.x=Y+d,j.y=ne+m;const I=new pn().rect(0,0,ie,V).fill(16777215);I.x=j.x,I.y=j.y,j.mask=I,ce.stage.addChild(I),ce.stage.addChild(j),Te.push(new uo(h,j))}if(ht){const h=new sa(ht);h.scale.set(1),h.x=250,h.y=200,ce.stage.addChild(h),Zt=h,g(Jt,he(h.width)),console.log("Reel frames lisätty:",h.width.toFixed(0),"x",h.height.toFixed(0)),console.log("Control panel leveys päivitetty:",t(Jt).toFixed(0))}if(Fe){Fe.source&&(Fe.source.scaleMode="nearest",Fe.source.antialias=!1);const h=new sa(Fe);h.scale.set(C),h.x=(ce.renderer.width-h.width)/2+T,h.y=U,ce.stage.addChild(h),console.log("Logo lisätty päällimmäiseen layeriin:",h.width.toFixed(0),"x",h.height.toFixed(0))}ba(),ce.ticker.add(go)});function go(){for(const c of Te)c.update(),c.draw();if(!t(ze)&&!os&&Te.every(c=>c.state==="stopped")){os=!0,Yn();const c=po();console.log(`Checking wins, found ${c.length} wins`),c.length>0?(g(ot,he(c)),g($e,he(c.reduce((p,k)=>p+k.payout,0))),so(t(at),c,t($e)),mo(t($e)),g(ze,!0),g(eo,he(Date.now())),console.log(`🎉 VOITTO! ${t($e)} pistettä! Uusi saldo: ${t(Me)}`),console.log(`isShowingWin set to: ${t(ze)}, totalWin: ${t($e)}`),c.forEach(p=>{const k=p.multiplier?` (${p.multiplier}x multiplier)`:"";console.log(`${p.count}x ${p.symbol} = ${p.payout} pistettä${k}`)}),fo(c),us("win"),t(le)&&!Xe&&(Xe=!0,Oe=window.setTimeout(()=>{t(ze)&&t(le)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),g(ze,!1),gs()),Oe=window.setTimeout(()=>{Xe=!1,vs()},200)},1500))):(console.log("No wins found this spin"),t(le)&&!Xe&&(Xe=!0,Oe=window.setTimeout(()=>{Xe=!1,vs()},500))),t(Z)&&t(We)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${t(Ke)}`),setTimeout(()=>{g(fs,he(t(Ke))),g(ps,!0)},2e3))}}function ms(){if(t(Z)||Hn(),Xn(),t(Z)&&t(We)>0)je(We,-1),je(cs),console.log(`🎰 FREE SPIN! Remaining: ${t(We)}`);else if(!t(Z)){if(t(Me)<t(ke)){alert(`Not enough credits! Balance: ${t(Me)}, Bet: ${t(ke)}`),At();return}g(Me,t(Me)-t(ke)),je(at),g(nt,t(nt)+t(ke))}Oe!==null&&(clearTimeout(Oe),Oe=null),g(ot,he([])),g($e,0),g(Ye,0),console.log("🔄 lastWin nollattu: "+t(Ye)),g(ze,!1),os=!1,gs(),wt=ka(),Te.forEach((c,p)=>{c.startSynchronized(p)}),us("spin")}function ho(c,p,k=1400){if(typeof window>"u")return;const S=document.getElementById("winLabel");if(!S)return;S.classList.add("rolling");const h=performance.now(),$=p-c,A=P=>1-Math.pow(1-P,3);function O(P){const B=Math.min(1,(P-h)/k),Y=c+$*A(B);g(Ye,Y),B<1?requestAnimationFrame(O):(g(Ye,he(p)),S.classList.remove("rolling"),S.classList.add("winHit"),setTimeout(()=>S.classList.remove("winHit"),450))}requestAnimationFrame(O)}function mo(c){g(Me,t(Me)+c),g(bt,t(bt)+c);const p=t(Ye);g(Ye,he(c));const k=c>t(ke)*50?2e3:1400;if(ho(p,c,k),t(Z)&&g(Ke,t(Ke)+c),c>0){je(rs);const S=c/t(ke);S>=10&&Zn(),tt&&(S>=50?tt.show():S>=20?setTimeout(()=>tt.show(),200):S>=10&&setTimeout(()=>tt.show(),400))}}function vo(){t(vt)<_a.length-1&&je(vt)}function yo(){t(vt)>0&&je(vt,-1)}function Ne(c){g(le,!0),g(yt,he(c)),g(ge,!1),vs()}function At(){g(le,!1),g(yt,0),Xe=!1,Oe!==null&&(clearTimeout(Oe),Oe=null)}function vs(){if(!t(le)||t(yt)<=0){At();return}console.log(`Autoplay: Starting spin ${t(yt)} rounds left`),ms(),je(yt,-1)}function bo(){confirm("Reset all statistics?")&&(g(at,0),g(nt,0),g(bt,0),g(rs,0),g(Lt,0),g(cs,0),g(Tt,0),g(ds,0))}var ja=Ji();Uo(c=>{var p=Mi();f(Ve(p)),G(c,p)});var Ea=Ve(ja);{var xo=c=>{Fi(c,{onloaded:()=>g(wa,!0)})};se(Ea,c=>{t(wa)||c(xo)})}var La=f(Ea,2);{var wo=c=>{var p=Di(),k=f(w(p),2),S=f(w(k));_(k);var h=f(k,2);{var $=F=>{var W=Wi(),N=f(w(W));_(W),oe(()=>X(N,` ${t(st)??""}`)),G(F,W)};se(h,F=>{t(st)&&F($)})}var A=f(h,2),O=f(w(A));O.nodeValue=` ${xe??""}`,_(A);var P=f(A,2),B=f(w(P));B.nodeValue=` ${_e??""}`,_(P);var Y=f(P,2),ne=f(w(Y));_(Y);var j=f(Y,2);{var I=F=>{var W=Ni(),N=w(W),D=w(N);_(N);var Re=f(N,2);Gt(Re,17,()=>Ae,Ut,(de,te)=>{var pe=zi(),Mo=w(pe,!0);_(pe),oe(()=>X(Mo,t(te))),G(de,pe)}),_(W),oe(()=>X(D,`Log (${Ae.length??""})`)),G(F,W)};se(j,F=>{Ae.length>0&&F(I)})}_(p),oe(()=>{X(S,` ${t(mt)??""}`),X(ne,` ${Ce.a??""}`)}),G(c,p)};se(La,c=>{(t(mt)!=="Assets loaded successfully!"||t(st))&&c(wo)})}var Ta=f(La,2);{var _o=c=>{var p=Hi(),k=f(w(p),2),S=w(k);_(k);var h=f(k,2);Gt(h,17,()=>t(ot),Ut,(P,B)=>{var Y=Ui(),ne=w(Y);_(Y),oe(j=>X(ne,`${t(B).count??""} × ${Sa[t(B).symbol]??""} = ${j??""} pistettä`),[()=>t(B).payout.toFixed(2)]),G(P,Y)});var $=f(h,2);{var A=P=>{var B=Gi(),Y=w(B),ne=w(Y);_(Y),_(B),oe(()=>X(ne,`✨ ${t(ot)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),G(P,B)};se($,P=>{t(ot).length>0&&t(ot)[0].multiplier>1&&P(A)})}var O=f($,2);_(p),oe(P=>X(S,`${P??""} pistettä`),[()=>t($e).toFixed(2)]),q("click",O,()=>{g(ze,!1),gs(),console.log("Win popup closed, ready for next spin")}),G(c,p)};se(Ta,c=>{t($e)>0&&t(ze)&&c(_o)})}var Ra=f(Ta,2);{var Ao=c=>{var p=Xi(),k=f(w(p),2),S=f(w(k),2),h=w(S),$=f(w(h),2),A=w($,!0);_($),_(h);var O=f(h,2);{var P=de=>{var te=Vi();q("click",te,At),G(de,te)},B=de=>{var te=Yi();q("click",te,()=>{g(ge,!0),g(Qe,!1)}),G(de,te)};se(O,de=>{t(le)?de(P):de(B,!1)})}_(S);var Y=f(S,2),ne=w(Y),j=f(w(ne),2),I=w(j,!0);_(j),_(ne);var F=f(ne,2),W=w(F),N=f(W,2),D=f(N,2);_(F),_(Y),Sn(2),_(k);var Re=f(k,10);_(p),oe(de=>{x(p,"style",`
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
    max-height: ${de??""}px;
    overflow-y: auto;
    font-size: ${t(r)??""}em;
  `),x($,"style",`color: ${(t(le)?"#00ff00":"#ff6666")??""}; font-weight: bold;`),X(A,t(le)?`ON (${autoPlayRounds} left)`:"OFF"),X(I,t(J)==="slow"?"🐌 SLOW":t(J)==="medium"?"🏃 MEDIUM":"⚡ FAST"),x(W,"style",`flex: 1; padding: 10px; background: ${(t(J)==="slow"?"linear-gradient(135deg, #4488ff 0%, #66aaff 100%)":"rgba(255,255,255,0.1)")??""}; color: white; border: ${(t(J)==="slow"?"2px solid #ffd700":"1px solid #555")??""}; border-radius: 8px; cursor: pointer; font-size: 0.9em;`),x(N,"style",`flex: 1; padding: 10px; background: ${(t(J)==="medium"?"linear-gradient(135deg, #4488ff 0%, #66aaff 100%)":"rgba(255,255,255,0.1)")??""}; color: white; border: ${(t(J)==="medium"?"2px solid #ffd700":"1px solid #555")??""}; border-radius: 8px; cursor: pointer; font-size: 0.9em;`),x(D,"style",`flex: 1; padding: 10px; background: ${(t(J)==="fast"?"linear-gradient(135deg, #4488ff 0%, #66aaff 100%)":"rgba(255,255,255,0.1)")??""}; color: white; border: ${(t(J)==="fast"?"2px solid #ffd700":"1px solid #555")??""}; border-radius: 8px; cursor: pointer; font-size: 0.9em;`)},[()=>Math.min(i*t(r)*.8,80*window.innerHeight/100)]),q("click",W,()=>{g(J,"slow")}),q("click",N,()=>{g(J,"medium")}),q("click",D,()=>{g(J,"fast")}),q("click",Re,()=>{g(Qe,!1)}),G(c,p)};se(Ra,c=>{t(Qe)&&c(Ao)})}var Pa=f(Ra,2);{var ko=c=>{var p=Ki(),k=w(p),S=f(w(k),4),h=w(S,!0);_(S);var $=f(S,2);_(k),_(p),oe(A=>X(h,A),[()=>t(fs).toFixed(2)]),q("click",$,()=>{g(ps,!1),g(Z,!1),g(Ke,0),g(fs,0),es()}),q("mouseenter",$,A=>{A.currentTarget.style.transform="scale(1.05)",A.currentTarget.style.boxShadow="0 6px 20px rgba(255, 215, 0, 0.6)"}),q("mouseleave",$,A=>{A.currentTarget.style.transform="scale(1)",A.currentTarget.style.boxShadow="0 4px 15px rgba(255, 215, 0, 0.4)"}),G(c,p)};se(Pa,c=>{t(ps)&&c(ko)})}var Ia=f(Pa,2),ys=w(Ia),kt=w(ys);x(kt,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${o}px;
        height: ${i}px;
      `);var bs=w(kt),xs=f(bs,2),Oa=w(xs);{var $o=c=>{var p=Qi(),k=w(p),S=f(k,2),h=f(S,2),$=f(h,2),A=f($,2),O=f(A,2),P=f(O,2),B=f(P,2),Y=f(B,2),ne=f(Y,2);_(p),oe(()=>{x(p,"style",`
    position: absolute;
    bottom: ${(y+20)*t(r)}px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.95);
    padding: ${20*t(r)}px;
    border-radius: ${15*t(r)}px;
    border: ${3*t(r)}px solid #0088ff;
    box-shadow: 0 ${8*t(r)}px ${30*t(r)}px rgba(0, 136, 255, 0.6);
    z-index: 2000;
    min-width: ${250*t(r)}px;
  `),x(k,"style",`color: white; font-weight: bold; margin-bottom: ${15*t(r)}px; text-align: center; font-size: ${18*t(r)}px;`),x(S,"style",`
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
      `),x(h,"style",`
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
      `),x($,"style",`
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
      `),x(A,"style",`
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
      `),x(O,"style",`
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
      `),x(P,"style",`
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
      `),x(B,"style",`
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
      `),x(Y,"style",`
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
      `),x(ne,"style",`
        width: 100%;
        padding: ${10*t(r)}px;
        background: rgba(255, 255, 255, 0.1);
        color: #aaa;
        border: ${1*t(r)}px solid #555;
        border-radius: ${8*t(r)}px;
        cursor: pointer;
        font-size: ${14*t(r)}px;
      `)}),q("click",S,()=>{Ne(10),g(ge,!1)}),q("click",h,()=>{Ne(25),g(ge,!1)}),q("click",$,()=>{Ne(50),g(ge,!1)}),q("click",A,()=>{Ne(100),g(ge,!1)}),q("click",O,()=>{Ne(200),g(ge,!1)}),q("click",P,()=>{Ne(500),g(ge,!1)}),q("click",B,()=>{Ne(1e3),g(ge,!1)}),q("click",Y,()=>{Ne(5e3),g(ge,!1)}),q("click",ne,()=>{g(ge,!1)}),G(c,p)};se(Oa,c=>{t(ge)&&c($o)})}var ws=f(Oa,2);x(ws,"src",`${K??""}/Control_leftend.png`);var Rt=f(ws,2),_s=w(Rt),As=w(_s),qa=w(As),ks=f(qa,2),$s=w(ks),Pt=f($s,2),So=w(Pt,!0);_(Pt);var Ca=f(Pt,2);_(ks),_(As);var Ss=f(As,2);x(Ss,"src",`${K??""}/Control_divider.png`);var js=f(Ss,2),Ba=w(js),Es=f(Ba,2),Ls=w(Es),jo=w(Ls,!0);_(Ls),_(Es),_(js);var Fa=f(js,2);x(Fa,"src",`${K??""}/Control_divider.png`),_(_s);var Ma=f(_s,2),Ts=f(Ma,2),Rs=w(Ts),Ps=w(Rs);_(Rs),_(Ts);var Wa=f(Ts,2),It=w(Wa),Ot=w(It),za=f(Ot,2);_(It);var Is=f(It,2);x(Is,"src",`${K??""}/Control_divider.png`);var qt=f(Is,2),Ct=w(qt),Na=f(Ct,2);_(qt);var Os=f(qt,2);x(Os,"src",`${K??""}/Control_divider.png`);var qs=f(Os,2),Da=w(qs),Cs=f(Da,2),Bs=w(Cs),Eo=w(Bs,!0);_(Bs),_(Cs),_(qs);var Fs=f(qs,2);x(Fs,"src",`${K??""}/Control_divider.png`);var Ua=f(Fs,2),Ga=w(Ua);_(Ua),_(Wa),_(Rt);var Ha=f(Rt,2);x(Ha,"src",`${K??""}/Control_rightend.png`),_(xs),_(kt),cn(kt,c=>hs=c,()=>hs);var Bt=f(kt,2);Bt.textContent=`🛠️ DEBUG v${a}`;var Va=f(Bt,2);const Lo=Ue(()=>t($e)/t(ke)>=50?"jackpot":t($e)/t(ke)>=20?"medium":"small");cn(Oi(Va,{get winLevel(){return t(Lo)},get winAmount(){return t($e)},get vinylStartScale(){return ss.vinylStartScale},get vinylEndScale(){return ss.vinylEndScale},get sparkleScale(){return ss.sparkleScale}}),c=>tt=c,()=>tt);var Ft=f(Va,2),Ya=f(w(Ft),2);Ya.textContent=`v${a}`;var Ms=f(Ya,2),Xa=f(w(Ms),2),To=w(Xa,!0);_(Xa),_(Ms);var Ws=f(Ms,2),Ka=f(w(Ws),2),Ro=w(Ka,!0);_(Ka),_(Ws);var zs=f(Ws,2),Qa=f(w(zs),2),Po=w(Qa,!0);_(Qa),_(zs);var Ns=f(zs,2),Ds=f(w(Ns),2),Io=w(Ds);_(Ds),_(Ns);var Us=f(Ns,2),Gs=f(w(Us),2),Oo=w(Gs);_(Gs),_(Us);var Hs=f(Us,2),Ja=f(w(Hs),2),qo=w(Ja,!0);_(Ja),_(Hs);var Vs=f(Hs,2),Za=f(w(Vs),2),Co=w(Za,!0);_(Za),_(Vs);var Ys=f(Vs,2),en=f(w(Ys),2),Bo=w(en);_(en),_(Ys);var tn=f(Ys,2),sn=f(tn,2),rt=w(sn),Fo=w(rt);_(rt);var Mt=f(rt,2),Xs=f(Mt,2);_(sn),_(Ft);var Ks=f(Ft,2),Wt=w(Ks),Qs=f(Wt,2);_(Ks),_(ys),_(Ia),oe((c,p,k,S,h,$,A,O)=>{x(ys,"style",`
    position: relative;
    width: ${o*t(r)}px;
    height: ${i*t(r)}px;
  `),x(bs,"style",`
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
        `),x(xs,"style",`
        position: absolute;
        left: ${((Zt?Zt.x:E)+L)*t(r)}px;
        top: ${(v+Q)*t(r)}px;
        width: ${t(Jt)*t(r)}px;
        height: ${y*t(r)}px;
        display: flex;
        align-items: center;
        z-index: 1000;
      `),x(ws,"style",`height: ${y*t(r)}px; flex-shrink: 0;`),x(Rt,"style",`
    flex-grow: 1;
    height: ${y*t(r)}px;
    background-image: url('${K??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    padding: 0 ${20*t(r)}px;
    position: relative;
    gap: ${20*t(r)}px;
  `),x(qa,"style",`color: #00ff00; font-size: ${12*t(r)}px; font-weight: bold; line-height: 1; height: ${16*t(r)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(r)}px;`),x(ks,"style",`display: flex; gap: ${5*t(r)}px; align-items: center; height: ${44*t(r)}px;`),x($s,"style",`
              width: ${40*t(r)}px;
              height: ${40*t(r)}px;
              background-image: url('${K??""}/Control_lowerbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            `),x(Pt,"style",`
            color: #fff;
            font-size: ${18*t(r)}px;
            font-weight: bold;
            min-width: ${80*t(r)}px;
            text-align: center;
            font-family: 'Courier New', monospace;
          `),X(So,c),x(Ca,"style",`
              width: ${40*t(r)}px;
              height: ${40*t(r)}px;
              background-image: url('${K??""}/Control_upperbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            `),x(Ss,"style",`height: ${y*.8*t(r)}px; flex-shrink: 0;`),x(Ba,"style",`color: #00ff00; font-size: ${12*t(r)}px; font-weight: bold; line-height: 1; height: ${16*t(r)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(r)}px;`),x(Es,"style",`height: ${44*t(r)}px; display: flex; align-items: center;`),x(Ls,"style",`
            color: #fff;
            font-size: ${20*t(r)}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
          `),X(jo,p),x(Fa,"style",`height: ${y*.8*t(r)}px; flex-shrink: 0;`),x(Ma,"style",`flex-shrink: 0; width: ${130*t(r)}px;`),da(Rs,1,`play-button-wrapper ${(t(ts)?"glare-animate":"")??""}`,"svelte-1tj0qym"),x(Ps,"style",`
            width: ${110*t(r)}px;
            height: ${110*t(r)}px;
            background-image: url('${K??""}/${(t(le)?"Control_playbutton_stop.png":"Control_playbutton.png")??""}');
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
          `),x(Ps,"title",t(le)?"STOP AUTOPLAY":"SPIN"),x(It,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*t(r)}px;`),x(Ot,"style",`
            width: ${50*t(r)}px;
            height: ${50*t(r)}px;
            background-image: url('${K??""}/${(t(le)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(Ot,"title",t(le)?"Stop Autoplay":"Autoplay"),x(za,"src",`${K??""}/${(t(le)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),x(za,"style",`height: ${10*t(r)}px; width: auto; display: block;`),x(Is,"style",`height: ${y*.8*t(r)}px; flex-shrink: 0;`),x(qt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*t(r)}px;`),x(Ct,"style",`
            width: ${50*t(r)}px;
            height: ${50*t(r)}px;
            background-image: url('${K??""}/Control_fastplay_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(Ct,"title",`Spin Speed: ${(t(J)==="slow"?"Slow":t(J)==="medium"?"Medium":"Fast")??""}`),x(Na,"src",`${K??""}/${(t(J)==="slow"?"Control_bar_deselect.png":t(J)==="medium"?"Control_half_bar_select.png":"Control_bar_select.png")??""}`),x(Na,"style",`height: ${10*t(r)}px; width: auto; display: block;`),x(Os,"style",`height: ${y*.8*t(r)}px; flex-shrink: 0;`),x(Da,"style",`color: #00ff00; font-size: ${12*t(r)}px; font-weight: bold; line-height: 1; height: ${16*t(r)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(r)}px;`),x(Cs,"style",`height: ${44*t(r)}px; display: flex; align-items: center;`),x(Bs,"style",`
            color: #fff;
            font-size: ${20*t(r)}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
          `),X(Eo,k),x(Fs,"style",`height: ${y*.8*t(r)}px; flex-shrink: 0;`),x(Ga,"style",`
            width: ${50*t(r)}px;
            height: ${50*t(r)}px;
            background-image: url('${K??""}/Control_menubar.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(Ha,"style",`height: ${y*t(r)}px; flex-shrink: 0;`),x(Bt,"style",`
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
  `),x(Ft,"style",`
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
`),X(To,S),X(Ro,h),X(Po,$),x(Ds,"style",`color: ${A??""};`),X(Io,`${t(is)??""}%`),x(Gs,"style",`color: ${O??""};`),X(Oo,`${t(ls)??""}%`),X(qo,t(Lt)),X(Co,t(cs)),X(Bo,`${t(to)??""}%`),rt.disabled=t(be).length===0,x(rt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(t(be).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(t(be).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(t(be).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(t(be).length>0?"1":"0.5")??""};
      `),X(Fo,`Download Win Log (${t(be).length??""})`),Mt.disabled=t(be).length===0,x(Mt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(t(be).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(t(be).length>0?"1":"0.5")??""};
      `),Xs.disabled=t(Z),x(Xs,"style",`
        width: 100%;
        padding: 5px;
        background: ${(t(Z)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(t(Z)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(t(Z)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(t(Z)?"0.5":"1")??""};
      `),x(Ks,"style",`
  position: absolute;
  top: ${10*t(r)}px;
  right: ${10*t(r)}px;
  display: flex;
  gap: ${10*t(r)}px;
  z-index: 1001;
`),x(Wt,"style",`
      width: ${50*t(r)}px;
      height: ${50*t(r)}px;
      background-image: url('${K??""}/${(t(Le)?"music_on.png":"music_off.png")??""}');
      background-size: contain;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
      background-color: transparent;
    `),x(Wt,"title",t(Le)?"Music: ON":"Music: OFF"),x(Qs,"style",`
      width: ${50*t(r)}px;
      height: ${50*t(r)}px;
      background-image: url('${K??""}/${(t(Ie)?"sounds_on.png":"sounds_off.png")??""}');
      background-size: contain;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
      background-color: transparent;
    `),x(Qs,"title",t(Ie)?"Sound: ON":"Sound: OFF")},[()=>t(ke).toFixed(2),()=>t(Me).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>t(Ye).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>t(at).toLocaleString(),()=>t(nt).toLocaleString(),()=>t(bt).toLocaleString(),()=>parseFloat(t(is))>=95?"#00ff00":parseFloat(t(is))>=85?"#ffff00":"#ff6666",()=>parseFloat(t(ls))>=30?"#00ff00":parseFloat(t(ls))>=20?"#ffff00":"#ff6666"]),q("click",bs,()=>{g(Qe,!t(Qe))}),q("click",$s,yo),q("click",Ca,vo),q("click",Ps,()=>{t(le)?At():Te.some(p=>p.state==="spinning"||p.state==="slowing")?Te.forEach(p=>{p.state==="spinning"?(p.stopDelay=0,p.state="slowing",p.speed=p.targetSpeed*.5):p.state==="slowing"&&(p.speed=p.speed*.3)}):ms()}),q("click",Ot,()=>{t(le)?At():g(ge,!t(ge))}),q("click",Ct,()=>{t(J)==="slow"?g(J,"medium"):t(J)==="medium"?g(J,"fast"):g(J,"slow")}),q("click",Ga,()=>{g(Qe,!t(Qe))}),q("click",Bt,()=>{g(ns,!t(ns))}),q("click",tn,bo),q("click",rt,ao),q("click",Mt,no),q("click",Xs,oo),q("click",Wt,Kn),q("click",Qs,Qn),G(s,ja),Vt()}var el=ee('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),tl=ee('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function sl(s,e){Ht(e,!1);let a=it(e,"isAuthenticated",12,!1),n=ia(""),o=ia(!1);const i="slot2024";function l(){t(n)===i?(a(!0),sessionStorage.setItem("gameAuthenticated","true")):(g(o,!0),g(n,""),setTimeout(()=>g(o,!1),3e3))}ga(()=>{a(sessionStorage.getItem("gameAuthenticated")==="true")}),Ho();var d=Dt(),m=Ve(d);{var b=u=>{var v=tl(),y=w(v),E=f(w(y),4),L=w(E);jr(L),Sn(2),_(E);var Q=f(E,2);{var C=T=>{var U=el();G(T,U)};se(Q,T=>{t(o)&&T(C)})}_(y),_(v),Lr(L,()=>t(n),T=>g(n,T)),q("submit",E,Tr(l)),G(u,v)};se(m,u=>{a()||u(b)})}G(s,d),Vt()}var al=ee("<!> <!>",1);function hl(s){let e=ia(!1);var a=al(),n=Ve(a);sl(n,{get isAuthenticated(){return t(e)},set isAuthenticated(l){g(e,l)},$$legacy:!0});var o=f(n,2);{var i=l=>{Zi(l,{})};se(o,l=>{t(e)&&l(i)})}G(s,a)}export{In as A,Tn as C,Fr as R,Ir as S,On as V,hl as _,Pr as u};
