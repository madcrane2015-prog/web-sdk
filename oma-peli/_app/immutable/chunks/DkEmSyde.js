const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DprMpkGs.js","./Cb0119l1.js","./BrW7ntrJ.js","./Fx7Xcyif.js","./CkL9UklL.js","./C2GHuDhf.js","./DpLtRfuL.js","./QM_GZ2oY.js"])))=>i.map(i=>d[i]);
var zo=Object.defineProperty;var No=(s,e,a)=>e in s?zo(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var $e=(s,e,a)=>No(s,typeof e!="symbol"?e+"":e,a);import{g as Do,l as Uo,e as Ut,a as V,t as ee,n as _n,i as C,j as Go,k as Ho}from"./CsxIJThA.js";import{i as Vo}from"./DqfWCwGf.js";import{y as Ee,j as Yo,a8 as Xo,F as t,Q as Ko,aa as qo,ab as an,h as nn,e as Js,k as kt,l as Qo,ac as An,w as jn,ad as Jo,q as kn,a7 as Zo,U as er,a2 as on,ar as Zs,z as rn,as as tr,at as sr,au as ar,o as nr,av as or,aw as rr,ax as ir,ay as lr,b as cr,az as dr,aA as fr,a6 as pr,aB as ur,aC as gr,D as hr,L as mr,p as Vt,f as Ye,ah as R,a as Yt,T as g,c as w,s as p,r as _,t as oe,I as Ge,ag as ga,aD as Se,aE as $n,aF as ia}from"./Fx7Xcyif.js";import{_ as ln,i as se,p as he}from"./BrW7ntrJ.js";import{s as K}from"./DfoPkomP.js";import{p as it,b as cn}from"./C4w3i6Q0.js";import{b as xe}from"./arYArM6r.js";import{e as Ve,E as W,a as vr,C as ha,Q as la,V as ca,N as ea,D as me,H as br,p as Je,a0 as ft,a1 as Ze,a2 as yr,w as He,a3 as St,a4 as Sn,a5 as pt,a6 as Be,a7 as Xt,a8 as En,a9 as xr,aa as ta,y as sa}from"./Cb0119l1.js";import{A as wr,B as dn,G as _r,a as fn}from"./CkL9UklL.js";function Gt(s,e){return e}function Ar(s,e,a,n){for(var o=[],i=e.length,l=0;l<i;l++)ar(e[l].e,o,!0);var d=i>0&&o.length===0&&a!==null;if(d){var m=a.parentNode;nr(m),m.append(a),n.clear(),Ue(s,e[0].prev,e[i-1].next)}or(o,()=>{for(var y=0;y<i;y++){var u=e[y];d||(n.delete(u.k),Ue(s,u.prev,u.next)),rr(u.e,!d)}})}function Ht(s,e,a,n,o,i=null){var l=s,d={flags:e,items:new Map,first:null};Ee&&Yo();var m=null,y=!1,u=Ko(()=>{var v=a();return Zo(v)?v:v==null?[]:kn(v)});Xo(()=>{var v=t(u),b=v.length;if(y&&b===0)return;y=b===0;let E=!1;if(Ee){var L=l.data===qo;L!==(b===0)&&(l=an(),nn(l),Js(!1),E=!0)}if(Ee){for(var Q=null,F,T=0;T<b;T++){if(kt.nodeType===8&&kt.data===Qo){l=kt,E=!0,Js(!1);break}var H=v[T],re=n(H,T);F=Ln(kt,d,Q,null,H,re,T,o,e,a),d.items.set(re,F),Q=F}b>0&&nn(an())}Ee||jr(v,d,l,o,e,n,a),i!==null&&(b===0?m?An(m):m=jn(()=>i(l)):m!==null&&Jo(m,()=>{m=null})),E&&Js(!0),t(u)}),Ee&&(l=kt)}function jr(s,e,a,n,o,i,l){var d=s.length,m=e.items,y=e.first,u=y,v,b=null,E=[],L=[],Q,F,T,H;for(H=0;H<d;H+=1){if(Q=s[H],F=i(Q,H),T=m.get(F),T===void 0){var re=u?u.e.nodes_start:a;b=Ln(re,e,b,b===null?e.first:b.next,Q,F,H,n,o,l),m.set(F,b),E=[],L=[],u=b.next;continue}if(kr(T,Q,H),(T.e.f&Zs)!==0&&An(T.e),T!==u){if(v!==void 0&&v.has(T)){if(E.length<L.length){var ie=L[0],X;b=ie.prev;var pe=E[0],ue=E[E.length-1];for(X=0;X<E.length;X+=1)pn(E[X],ie,a);for(X=0;X<L.length;X+=1)v.delete(L[X]);Ue(e,pe.prev,ue.next),Ue(e,b,pe),Ue(e,ue,ie),u=ie,b=ue,H-=1,E=[],L=[]}else v.delete(T),pn(T,u,a),Ue(e,T.prev,T.next),Ue(e,T,b===null?e.first:b.next),Ue(e,b,T),b=T;continue}for(E=[],L=[];u!==null&&u.k!==F;)(u.e.f&Zs)===0&&(v??(v=new Set)).add(u),L.push(u),u=u.next;if(u===null)continue;T=u}E.push(T),b=T,u=T.next}if(u!==null||v!==void 0){for(var we=v===void 0?[]:kn(v);u!==null;)(u.e.f&Zs)===0&&we.push(u),u=u.next;var Pe=we.length;if(Pe>0){var Y=null;Ar(e,we,Y,m)}}rn.first=e.first&&e.first.e,rn.last=b&&b.e}function kr(s,e,a,n){sr(s.v,e),s.i=a}function Ln(s,e,a,n,o,i,l,d,m,y){var u=(m&ir)!==0,v=(m&lr)===0,b=u?v?er(o):on(o):o,E=(m&tr)===0?l:on(l),L={i:E,v:b,k:i,a:null,e:null,prev:a,next:n};try{return L.e=jn(()=>d(s,b,E,y),Ee),L.e.prev=a&&a.e,L.e.next=n&&n.e,a===null?e.first=L:(a.next=L,a.e.next=L.e),n!==null&&(n.prev=L,n.e.prev=L.e),L}finally{}}function pn(s,e,a){for(var n=s.next?s.next.e.nodes_start:a,o=e?e.e.nodes_start:a,i=s.e.nodes_start;i!==n;){var l=cr(i);o.before(i),i=l}}function Ue(s,e,a){e===null?s.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}const un=[...` 	
\r\f \v\uFEFF`];function $r(s,e,a){var n=s==null?"":""+s;if(e&&(n=n?n+" "+e:e),a){for(var o in a)if(a[o])n=n?n+" "+o:o;else if(n.length)for(var i=o.length,l=0;(l=n.indexOf(o,l))>=0;){var d=l+i;(l===0||un.includes(n[l-1]))&&(d===n.length||un.includes(n[d]))?n=(l===0?"":n.substring(0,l))+n.substring(d+1):l=d}}return n===""?null:n}function da(s,e,a,n,o,i){var l=s.__className;if(Ee||l!==a){var d=$r(a,n,i);(!Ee||d!==s.getAttribute("class"))&&(d==null?s.removeAttribute("class"):e?s.className=d:s.setAttribute("class",d)),s.__className=a}else if(i)for(var m in i){var y=!!i[m];(o==null||y!==!!o[m])&&s.classList.toggle(m,y)}return i}function Sr(s){if(Ee){var e=!1,a=()=>{if(!e){if(e=!0,s.hasAttribute("value")){var n=s.value;x(s,"value",null),s.value=n}if(s.hasAttribute("checked")){var o=s.checked;x(s,"checked",null),s.checked=o}}};s.__on_r=a,dr(a),Do()}}function x(s,e,a,n){var o=s.__attributes??(s.__attributes={});Ee&&(o[e]=s.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&s.nodeName==="LINK")||o[e]!==(o[e]=a)&&(e==="style"&&"__styles"in s&&(s.__styles={}),e==="loading"&&(s[fr]=a),a==null?s.removeAttribute(e):typeof a!="string"&&Er(s).includes(e)?s[e]=a:s.setAttribute(e,a))}var gn=new Map;function Er(s){var e=gn.get(s.nodeName);if(e)return e;gn.set(s.nodeName,e=[]);for(var a,n=s,o=Element.prototype;o!==n;){a=ur(n);for(var i in a)a[i].set&&e.push(i);n=pr(n)}return e}function Lr(s,e,a=e){var n=gr();Uo(s,"input",o=>{var i=o?s.defaultValue:s.value;if(i=aa(s)?na(i):i,a(i),n&&i!==(i=e())){var l=s.selectionStart,d=s.selectionEnd;s.value=i??"",d!==null&&(s.selectionStart=l,s.selectionEnd=Math.min(d,s.value.length))}}),(Ee&&s.defaultValue!==s.value||hr(e)==null&&s.value)&&a(aa(s)?na(s.value):s.value),mr(()=>{var o=e();aa(s)&&o===na(s.value)||s.type==="date"&&!o&&!s.value||o!==s.value&&(s.value=o??"")})}function aa(s){var e=s.type;return e==="number"||e==="range"}function na(s){return s===""?null:+s}function Tr(s){return function(...e){var a=e[0];return a.preventDefault(),s==null?void 0:s.apply(this,e)}}const fa=[];Ve.handleByNamedList(W.Environment,fa);async function Rr(s){if(!s)for(let e=0;e<fa.length;e++){const a=fa[e];if(a.value.test()){await a.value.load();return}}}let $t;function Pr(){if(typeof $t=="boolean")return $t;try{$t=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{$t=!1}return $t}var Tn=(s=>(s[s.NONE=0]="NONE",s[s.COLOR=16384]="COLOR",s[s.STENCIL=1024]="STENCIL",s[s.DEPTH=256]="DEPTH",s[s.COLOR_DEPTH=16640]="COLOR_DEPTH",s[s.COLOR_STENCIL=17408]="COLOR_STENCIL",s[s.DEPTH_STENCIL=1280]="DEPTH_STENCIL",s[s.ALL=17664]="ALL",s))(Tn||{});class Ir{constructor(e){this.items=[],this._name=e}emit(e,a,n,o,i,l,d,m){const{name:y,items:u}=this;for(let v=0,b=u.length;v<b;v++)u[v][y](e,a,n,o,i,l,d,m);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const a=this.items.indexOf(e);return a!==-1&&this.items.splice(a,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Or=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Rn=class Pn extends vr{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const a=[...Or,...this.config.runners??[]];this._addRunners(...a),this._unsafeEvalCheck()}async init(e={}){const a=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Rr(a),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const n in this._systemsHash)e={...this._systemsHash[n].constructor.defaultOptions,...e};e={...Pn.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let n=0;n<this.runners.init.items.length;n++)await this.runners.init.items[n].init(e);this._initOptions=e}render(e,a){let n=e;if(n instanceof ha&&(n={container:n},a&&(la(ca,"passing a second argument is deprecated, please use render options instead"),n.target=a.renderTexture)),n.target||(n.target=this.view.renderTarget),n.target===this.view.renderTarget&&(this._lastObjectRendered=n.container,n.clearColor??(n.clearColor=this.background.colorRgba),n.clear??(n.clear=this.background.clearBeforeRender)),n.clearColor){const o=Array.isArray(n.clearColor)&&n.clearColor.length===4;n.clearColor=o?n.clearColor:ea.shared.setValue(n.clearColor).toArray()}n.transform||(n.container.updateLocalTransform(),n.transform=n.container.localTransform),n.container.enableRenderGroup(),this.runners.prerender.emit(n),this.runners.renderStart.emit(n),this.runners.render.emit(n),this.runners.renderEnd.emit(n),this.runners.postrender.emit(n)}resize(e,a,n){const o=this.view.resolution;this.view.resize(e,a,n),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),n!==void 0&&n!==o&&this.runners.resolutionChange.emit(n)}clear(e={}){const a=this;e.target||(e.target=a.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Tn.ALL);const{clear:n,clearColor:o,target:i}=e;ea.shared.setValue(o??this.background.colorRgba),a.renderTarget.clear(i,n,ea.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(a=>{this.runners[a]=new Ir(a)})}_addSystems(e){let a;for(a in e){const n=e[a];this._addSystem(n.value,n.name)}}_addSystem(e,a){const n=new e(this);if(this[a])throw new Error(`Whoops! The name "${a}" is already in use`);this[a]=n,this._systemsHash[a]=n;for(const o in this.runners)this.runners[o].add(n);return this}_addPipes(e,a){const n=a.reduce((o,i)=>(o[i.name]=i.value,o),{});e.forEach(o=>{const i=o.value,l=o.name,d=n[l];this.renderPipes[l]=new i(this,d?new d:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(a=>{a.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Pr())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Rn.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let In=Rn,Nt;function Cr(s){return Nt!==void 0||(Nt=(()=>{var a;const e={stencil:!0,failIfMajorPerformanceCaveat:s??In.defaultOptions.failIfMajorPerformanceCaveat};try{if(!me.get().getWebGLRenderingContext())return!1;let o=me.get().createCanvas().getContext("webgl",e);const i=!!((a=o==null?void 0:o.getContextAttributes())!=null&&a.stencil);if(o){const l=o.getExtension("WEBGL_lose_context");l&&l.loseContext()}return o=null,i}catch{return!1}})()),Nt}let Dt;async function Br(s={}){return Dt!==void 0||(Dt=await(async()=>{const e=me.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(s)).requestDevice(),!0}catch{return!1}})()),Dt}const hn=["webgl","webgpu","canvas"];async function Fr(s){let e=[];s.preference?(e.push(s.preference),hn.forEach(i=>{i!==s.preference&&e.push(i)})):e=hn.slice();let a,n={};for(let i=0;i<e.length;i++){const l=e[i];if(l==="webgpu"&&await Br()){const{WebGPURenderer:d}=await ln(async()=>{const{WebGPURenderer:m}=await import("./DprMpkGs.js");return{WebGPURenderer:m}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);a=d,n={...s,...s.webgpu};break}else if(l==="webgl"&&Cr(s.failIfMajorPerformanceCaveat??In.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:d}=await ln(async()=>{const{WebGLRenderer:m}=await import("./QM_GZ2oY.js");return{WebGLRenderer:m}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);a=d,n={...s,...s.webgl};break}else if(l==="canvas")throw n={...s},new Error("CanvasRenderer is not yet implemented")}if(delete n.webgpu,delete n.webgl,!a)throw new Error("No available renderer for the current environment");const o=new a;return await o.init(n),o}const On="8.8.1";class Cn{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,On)}static destroy(){}}Cn.extension=W.Application;class Mr{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,On)}destroy(){this._renderer=null}}Mr.extension={type:[W.WebGLSystem,W.WebGPUSystem],name:"initHook",priority:-10};const Bn=class pa{constructor(...e){this.stage=new ha,e[0]!==void 0&&la(ca,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Fr(e),pa._plugins.forEach(a=>{a.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return la(ca,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,a=!1){const n=pa._plugins.slice(0);n.reverse(),n.forEach(o=>{o.destroy.call(this)}),this.stage.destroy(a),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Bn._plugins=[];let Fn=Bn;Ve.handleByList(W.Application,Fn._plugins);Ve.add(Cn);class Mn extends wr{constructor(e,a){super();const{textures:n,data:o}=e;Object.keys(o.pages).forEach(i=>{const l=o.pages[parseInt(i,10)],d=n[l.id];this.pages.push({texture:d})}),Object.keys(o.chars).forEach(i=>{const l=o.chars[i],{frame:d,source:m}=n[l.page],y=new br(l.x+d.x,l.y+d.y,l.width,l.height),u=new Je({source:m,frame:y});this.chars[i]={id:i.codePointAt(0),xOffset:l.xOffset,yOffset:l.yOffset,xAdvance:l.xAdvance,kerning:l.kerning??{},texture:u}}),this.baseRenderedFontSize=o.fontSize,this.baseMeasurementFontSize=o.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:o.fontSize},this.baseLineOffset=o.baseLineOffset,this.lineHeight=o.lineHeight,this.fontFamily=o.fontFamily,this.distanceField=o.distanceField??{type:"none",range:0},this.url=a}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:a}=this.pages[e];a.destroy(!0)}this.pages=null}static install(e){dn.install(e)}static uninstall(e){dn.uninstall(e)}}const oa={test(s){return typeof s=="string"&&s.startsWith("info face=")},parse(s){const e=s.match(/^[a-z]+\s+.+$/gm),a={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const v in e){const b=e[v].match(/^[a-z]+/gm)[0],E=e[v].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),L={};for(const Q in E){const F=E[Q].split("="),T=F[0],H=F[1].replace(/"/gm,""),re=parseFloat(H),ie=isNaN(re)?H:re;L[T]=ie}a[b].push(L)}const n={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[o]=a.info,[i]=a.common,[l]=a.distanceField??[];l&&(n.distanceField={range:parseInt(l.distanceRange,10),type:l.fieldType}),n.fontSize=parseInt(o.size,10),n.fontFamily=o.face,n.lineHeight=parseInt(i.lineHeight,10);const d=a.page;for(let v=0;v<d.length;v++)n.pages.push({id:parseInt(d[v].id,10)||0,file:d[v].file});const m={};n.baseLineOffset=n.lineHeight-parseInt(i.base,10);const y=a.char;for(let v=0;v<y.length;v++){const b=y[v],E=parseInt(b.id,10);let L=b.letter??b.char??String.fromCharCode(E);L==="space"&&(L=" "),m[E]=L,n.chars[L]={id:E,page:parseInt(b.page,10)||0,x:parseInt(b.x,10),y:parseInt(b.y,10),width:parseInt(b.width,10),height:parseInt(b.height,10),xOffset:parseInt(b.xoffset,10),yOffset:parseInt(b.yoffset,10),xAdvance:parseInt(b.xadvance,10),kerning:{}}}const u=a.kerning||[];for(let v=0;v<u.length;v++){const b=parseInt(u[v].first,10),E=parseInt(u[v].second,10),L=parseInt(u[v].amount,10);n.chars[m[E]].kerning[m[b]]=L}return n}},mn={test(s){const e=s;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(s){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},a=s.getElementsByTagName("info")[0],n=s.getElementsByTagName("common")[0],o=s.getElementsByTagName("distanceField")[0];o&&(e.distanceField={type:o.getAttribute("fieldType"),range:parseInt(o.getAttribute("distanceRange"),10)});const i=s.getElementsByTagName("page"),l=s.getElementsByTagName("char"),d=s.getElementsByTagName("kerning");e.fontSize=parseInt(a.getAttribute("size"),10),e.fontFamily=a.getAttribute("face"),e.lineHeight=parseInt(n.getAttribute("lineHeight"),10);for(let y=0;y<i.length;y++)e.pages.push({id:parseInt(i[y].getAttribute("id"),10)||0,file:i[y].getAttribute("file")});const m={};e.baseLineOffset=e.lineHeight-parseInt(n.getAttribute("base"),10);for(let y=0;y<l.length;y++){const u=l[y],v=parseInt(u.getAttribute("id"),10);let b=u.getAttribute("letter")??u.getAttribute("char")??String.fromCharCode(v);b==="space"&&(b=" "),m[v]=b,e.chars[b]={id:v,page:parseInt(u.getAttribute("page"),10)||0,x:parseInt(u.getAttribute("x"),10),y:parseInt(u.getAttribute("y"),10),width:parseInt(u.getAttribute("width"),10),height:parseInt(u.getAttribute("height"),10),xOffset:parseInt(u.getAttribute("xoffset"),10),yOffset:parseInt(u.getAttribute("yoffset"),10),xAdvance:parseInt(u.getAttribute("xadvance"),10),kerning:{}}}for(let y=0;y<d.length;y++){const u=parseInt(d[y].getAttribute("first"),10),v=parseInt(d[y].getAttribute("second"),10),b=parseInt(d[y].getAttribute("amount"),10);e.chars[m[v]].kerning[m[u]]=b}return e}},vn={test(s){return typeof s=="string"&&s.includes("<font>")?mn.test(me.get().parseXML(s)):!1},parse(s){return mn.parse(me.get().parseXML(s))}},Wr=[".xml",".fnt"],zr={extension:{type:W.CacheParser,name:"cacheBitmapFont"},test:s=>s instanceof Mn,getCacheableAssets(s,e){const a={};return s.forEach(n=>{a[n]=e,a[`${n}-bitmap`]=e}),a[`${e.fontFamily}-bitmap`]=e,a}},Nr={extension:{type:W.LoadParser,priority:ft.Normal},name:"loadBitmapFont",test(s){return Wr.includes(Ze.extname(s).toLowerCase())},async testParse(s){return oa.test(s)||vn.test(s)},async parse(s,e,a){const n=oa.test(s)?oa.parse(s):vn.parse(s),{src:o}=e,{pages:i}=n,l=[],d=n.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let v=0;v<i.length;++v){const b=i[v].file;let E=Ze.join(Ze.dirname(o),b);E=yr(E,o),l.push({src:E,data:d})}const m=await a.load(l),y=l.map(v=>m[v.src]);return new Mn({data:n,textures:y},o)},async load(s,e){return await(await me.get().fetch(s)).text()},async unload(s,e,a){await Promise.all(s.pages.map(n=>a.unload(n.texture.source._sourceOrigin))),s.destroy()}};class Dr{constructor(e,a=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=a}add(e){e.forEach(a=>{this._assetList.push(a)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],a=Math.min(this._assetList.length,this._maxConcurrent);for(let n=0;n<a;n++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Ur={extension:{type:W.CacheParser,name:"cacheTextureArray"},test:s=>Array.isArray(s)&&s.every(e=>e instanceof Je),getCacheableAssets:(s,e)=>{const a={};return s.forEach(n=>{e.forEach((o,i)=>{a[n+(i===0?"":i+1)]=o})}),a}};async function Wn(s){if("Image"in globalThis)return new Promise(e=>{const a=new Image;a.onload=()=>{e(!0)},a.onerror=()=>{e(!1)},a.src=s});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(s)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Gr={extension:{type:W.DetectionParser,priority:1},test:async()=>Wn("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async s=>[...s,"avif"],remove:async s=>s.filter(e=>e!=="avif")},bn=["png","jpg","jpeg"],Hr={extension:{type:W.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async s=>[...s,...bn],remove:async s=>s.filter(e=>!bn.includes(e))},Vr="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function ma(s){return Vr?!1:document.createElement("video").canPlayType(s)!==""}const Yr={extension:{type:W.DetectionParser,priority:0},test:async()=>ma("video/mp4"),add:async s=>[...s,"mp4","m4v"],remove:async s=>s.filter(e=>e!=="mp4"&&e!=="m4v")},Xr={extension:{type:W.DetectionParser,priority:0},test:async()=>ma("video/ogg"),add:async s=>[...s,"ogv"],remove:async s=>s.filter(e=>e!=="ogv")},Kr={extension:{type:W.DetectionParser,priority:0},test:async()=>ma("video/webm"),add:async s=>[...s,"webm"],remove:async s=>s.filter(e=>e!=="webm")},qr={extension:{type:W.DetectionParser,priority:0},test:async()=>Wn("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async s=>[...s,"webp"],remove:async s=>s.filter(e=>e!=="webp")};class Qr{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,a,n)=>(this._parsersValidated=!1,e[a]=n,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,a){const n={promise:null,parser:null};return n.promise=(async()=>{var l,d;let o=null,i=null;if(a.loadParser&&(i=this._parserHash[a.loadParser],i||He(`[Assets] specified load parser "${a.loadParser}" not found while loading ${e}`)),!i){for(let m=0;m<this.parsers.length;m++){const y=this.parsers[m];if(y.load&&((l=y.test)!=null&&l.call(y,e,a,this))){i=y;break}}if(!i)return He(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}o=await i.load(e,a,this),n.parser=i;for(let m=0;m<this.parsers.length;m++){const y=this.parsers[m];y.parse&&y.parse&&await((d=y.testParse)==null?void 0:d.call(y,o,a,this))&&(o=await y.parse(o,a,this)||o,n.parser=y)}return o})(),n}async load(e,a){this._parsersValidated||this._validateParsers();let n=0;const o={},i=Sn(e),l=St(e,y=>({alias:[y],src:y,data:{}})),d=l.length,m=l.map(async y=>{const u=Ze.toAbsolute(y.src);if(!o[y.src])try{this.promiseCache[u]||(this.promiseCache[u]=this._getLoadPromiseAndParser(u,y)),o[y.src]=await this.promiseCache[u].promise,a&&a(++n/d)}catch(v){throw delete this.promiseCache[u],delete o[y.src],new Error(`[Loader.load] Failed to load ${u}.
${v}`)}});return await Promise.all(m),i?o[l[0].src]:o}async unload(e){const n=St(e,o=>({alias:[o],src:o})).map(async o=>{var d,m;const i=Ze.toAbsolute(o.src),l=this.promiseCache[i];if(l){const y=await l.promise;delete this.promiseCache[i],await((m=(d=l.parser)==null?void 0:d.unload)==null?void 0:m.call(d,y,o,this))}});await Promise.all(n)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,a)=>(a.name?e[a.name]&&He(`[Assets] loadParser name conflict "${a.name}"`):He("[Assets] loadParser should have a name"),{...e,[a.name]:a}),{})}}function ut(s,e){if(Array.isArray(e)){for(const a of e)if(s.startsWith(`data:${a}`))return!0;return!1}return s.startsWith(`data:${e}`)}const Jr=".json",Zr="application/json",ei={extension:{type:W.LoadParser,priority:ft.Low},name:"loadJson",test(s){return ut(s,Zr)||pt(s,Jr)},async load(s){return await(await me.get().fetch(s)).json()}},ti=".txt",si="text/plain",ai={name:"loadTxt",extension:{type:W.LoadParser,priority:ft.Low,name:"loadTxt"},test(s){return ut(s,si)||pt(s,ti)},async load(s){return await(await me.get().fetch(s)).text()}},ni=["normal","bold","100","200","300","400","500","600","700","800","900"],oi=[".ttf",".otf",".woff",".woff2"],ri=["font/ttf","font/otf","font/woff","font/woff2"],ii=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function li(s){const e=Ze.extname(s),o=Ze.basename(s,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(d=>d.charAt(0).toUpperCase()+d.slice(1));let i=o.length>0;for(const d of o)if(!d.match(ii)){i=!1;break}let l=o.join(" ");return i||(l=`"${l.replace(/[\\"]/g,"\\$&")}"`),l}const ci=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function di(s){return ci.test(s)?s:encodeURI(s)}const fi={extension:{type:W.LoadParser,priority:ft.Low},name:"loadWebFont",test(s){return ut(s,ri)||pt(s,oi)},async load(s,e){var n,o,i;const a=me.get().getFontFaceSet();if(a){const l=[],d=((n=e.data)==null?void 0:n.family)??li(s),m=((i=(o=e.data)==null?void 0:o.weights)==null?void 0:i.filter(u=>ni.includes(u)))??["normal"],y=e.data??{};for(let u=0;u<m.length;u++){const v=m[u],b=new FontFace(d,`url(${di(s)})`,{...y,weight:v});await b.load(),a.add(b),l.push(b)}return Be.set(`${d}-and-url`,{url:s,fontFaces:l}),l.length===1?l[0]:l}return He("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(s){(Array.isArray(s)?s:[s]).forEach(e=>{Be.remove(`${e.family}-and-url`),me.get().getFontFaceSet().delete(e)})}};function va(s,e=1){var n;const a=(n=Xt.RETINA_PREFIX)==null?void 0:n.exec(s);return a?parseFloat(a[1]):e}function ba(s,e,a){s.label=a,s._sourceOrigin=a;const n=new Je({source:s,label:a}),o=()=>{delete e.promiseCache[a],Be.has(a)&&Be.remove(a)};return n.source.once("destroy",()=>{e.promiseCache[a]&&(He("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),o())}),n.once("destroy",()=>{s.destroyed||(He("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),o())}),n}const pi=".svg",ui="image/svg+xml",gi={extension:{type:W.LoadParser,priority:ft.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(s){return ut(s,ui)||pt(s,pi)},async load(s,e,a){var n;return((n=e.data)==null?void 0:n.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?mi(s):hi(s,e,a,this.config.crossOrigin)},unload(s){s.destroy(!0)}};async function hi(s,e,a,n){var F,T,H;const i=await(await me.get().fetch(s)).blob(),l=URL.createObjectURL(i),d=new Image;d.src=l,d.crossOrigin=n,await d.decode(),URL.revokeObjectURL(l);const m=document.createElement("canvas"),y=m.getContext("2d"),u=((F=e.data)==null?void 0:F.resolution)||va(s),v=((T=e.data)==null?void 0:T.width)??d.width,b=((H=e.data)==null?void 0:H.height)??d.height;m.width=v*u,m.height=b*u,y.drawImage(d,0,0,v*u,b*u);const{parseAsGraphicsContext:E,...L}=e.data??{},Q=new En({resource:m,alphaMode:"premultiply-alpha-on-upload",resolution:u,...L});return ba(Q,a,s)}async function mi(s){const a=await(await me.get().fetch(s)).text(),n=new _r;return n.svg(a),n}const vi=`(function () {
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
`;let ct=null,ua=class{constructor(){ct||(ct=URL.createObjectURL(new Blob([vi],{type:"application/javascript"}))),this.worker=new Worker(ct)}};ua.revokeObjectURL=function(){ct&&(URL.revokeObjectURL(ct),ct=null)};const bi=`(function () {
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
`;let dt=null;class zn{constructor(){dt||(dt=URL.createObjectURL(new Blob([bi],{type:"application/javascript"}))),this.worker=new Worker(dt)}}zn.revokeObjectURL=function(){dt&&(URL.revokeObjectURL(dt),dt=null)};let yn=0,ra;class yi{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:a}=new ua;a.addEventListener("message",n=>{a.terminate(),ua.revokeObjectURL(),e(n.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,a){var n;return this._run("loadImageBitmap",[e,(n=a==null?void 0:a.data)==null?void 0:n.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){ra===void 0&&(ra=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<ra&&(this._createdWorkers++,e=new zn().worker,e.addEventListener("message",a=>{this._complete(a.data),this._returnWorker(a.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,a){await this._initWorkers();const n=new Promise((o,i)=>{this._queue.push({id:e,arguments:a,resolve:o,reject:i})});return this._next(),n}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const a=this._queue.pop(),n=a.id;this._resolveHash[yn]={resolve:a.resolve,reject:a.reject},e.postMessage({data:a.arguments,uuid:yn++,id:n})}}const xn=new yi,xi=[".jpeg",".jpg",".png",".webp",".avif"],wi=["image/jpeg","image/png","image/webp","image/avif"];async function _i(s,e){var o;const a=await me.get().fetch(s);if(!a.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${s}: ${a.status} ${a.statusText}`);const n=await a.blob();return((o=e==null?void 0:e.data)==null?void 0:o.alphaMode)==="premultiplied-alpha"?createImageBitmap(n,{premultiplyAlpha:"none"}):createImageBitmap(n)}const Nn={name:"loadTextures",extension:{type:W.LoadParser,priority:ft.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(s){return ut(s,wi)||pt(s,xi)},async load(s,e,a){var i;let n=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await xn.isImageBitmapSupported()?n=await xn.loadImageBitmap(s,e):n=await _i(s,e):n=await new Promise((l,d)=>{n=new Image,n.crossOrigin=this.config.crossOrigin,n.src=s,n.complete?l(n):(n.onload=()=>{l(n)},n.onerror=d)});const o=new En({resource:n,alphaMode:"premultiply-alpha-on-upload",resolution:((i=e.data)==null?void 0:i.resolution)||va(s),...e.data});return ba(o,a,s)},unload(s){s.destroy(!0)}},Dn=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Ai=Dn.map(s=>`video/${s.substring(1)}`);function ji(s,e,a){a===void 0&&!e.startsWith("data:")?s.crossOrigin=$i(e):a!==!1&&(s.crossOrigin=typeof a=="string"?a:"anonymous")}function ki(s){return new Promise((e,a)=>{s.addEventListener("canplaythrough",n),s.addEventListener("error",o),s.load();function n(){i(),e()}function o(l){i(),a(l)}function i(){s.removeEventListener("canplaythrough",n),s.removeEventListener("error",o)}})}function $i(s,e=globalThis.location){if(s.startsWith("data:"))return"";e||(e=globalThis.location);const a=new URL(s,document.baseURI);return a.hostname!==e.hostname||a.port!==e.port||a.protocol!==e.protocol?"anonymous":""}const Si={name:"loadVideo",extension:{type:W.LoadParser,name:"loadVideo"},test(s){const e=ut(s,Ai),a=pt(s,Dn);return e||a},async load(s,e,a){var m,y;const n={...ta.defaultOptions,resolution:((m=e.data)==null?void 0:m.resolution)||va(s),alphaMode:((y=e.data)==null?void 0:y.alphaMode)||await xr(),...e.data},o=document.createElement("video"),i={preload:n.autoLoad!==!1?"auto":void 0,"webkit-playsinline":n.playsinline!==!1?"":void 0,playsinline:n.playsinline!==!1?"":void 0,muted:n.muted===!0?"":void 0,loop:n.loop===!0?"":void 0,autoplay:n.autoPlay!==!1?"":void 0};Object.keys(i).forEach(u=>{const v=i[u];v!==void 0&&o.setAttribute(u,v)}),n.muted===!0&&(o.muted=!0),ji(o,s,n.crossorigin);const l=document.createElement("source");let d;if(s.startsWith("data:"))d=s.slice(5,s.indexOf(";"));else if(!s.startsWith("blob:")){const u=s.split("?")[0].slice(s.lastIndexOf(".")+1).toLowerCase();d=ta.MIME_TYPES[u]||`video/${u}`}return l.src=s,d&&(l.type=d),new Promise(u=>{const v=async()=>{const b=new ta({...n,resource:o});o.removeEventListener("canplay",v),e.data.preload&&await ki(o),u(ba(b,a,s))};o.addEventListener("canplay",v),o.appendChild(l)})},unload(s){s.destroy(!0)}},Un={extension:{type:W.ResolveParser,name:"resolveTexture"},test:Nn.test,parse:s=>{var e;return{resolution:parseFloat(((e=Xt.RETINA_PREFIX.exec(s))==null?void 0:e[1])??"1"),format:s.split(".").pop(),src:s}}},Ei={extension:{type:W.ResolveParser,priority:-2,name:"resolveJson"},test:s=>Xt.RETINA_PREFIX.test(s)&&s.endsWith(".json"),parse:Un.parse};class Li{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Xt,this.loader=new Qr,this.cache=Be,this._backgroundLoader=new Dr(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var i,l;if(this._initialized){He("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let d=e.manifest;typeof d=="string"&&(d=await this.load(d)),this.resolver.addManifest(d)}const a=((i=e.texturePreference)==null?void 0:i.resolution)??1,n=typeof a=="number"?[a]:a,o=await this._detectFormats({preferredFormats:(l=e.texturePreference)==null?void 0:l.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:o,resolution:n}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,a){this._initialized||await this.init();const n=Sn(e),o=St(e).map(d=>{if(typeof d!="string"){const m=this.resolver.getAlias(d);return m.some(y=>!this.resolver.hasKey(y))&&this.add(d),Array.isArray(m)?m[0]:m}return this.resolver.hasKey(d)||this.add({alias:d,src:d}),d}),i=this.resolver.resolve(o),l=await this._mapLoadToResolve(i,a);return n?l[o[0]]:l}addBundle(e,a){this.resolver.addBundle(e,a)}async loadBundle(e,a){this._initialized||await this.init();let n=!1;typeof e=="string"&&(n=!0,e=[e]);const o=this.resolver.resolveBundle(e),i={},l=Object.keys(o);let d=0,m=0;const y=()=>{a==null||a(++d/m)},u=l.map(v=>{const b=o[v];return m+=Object.keys(b).length,this._mapLoadToResolve(b,y).then(E=>{i[v]=E})});return await Promise.all(u),n?i[e[0]]:i}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(a))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolveBundle(e);Object.values(a).forEach(n=>{this._backgroundLoader.add(Object.values(n))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Be.get(e);const a={};for(let n=0;n<e.length;n++)a[n]=Be.get(e[n]);return a}async _mapLoadToResolve(e,a){const n=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const o=await this.loader.load(n,a);this._backgroundLoader.active=!0;const i={};return n.forEach(l=>{const d=o[l.src],m=[l.src];l.alias&&m.push(...l.alias),m.forEach(y=>{i[y]=d}),Be.set(m,d)}),i}async unload(e){this._initialized||await this.init();const a=St(e).map(o=>typeof o!="string"?o.src:o),n=this.resolver.resolve(a);await this._unloadFromResolved(n)}async unloadBundle(e){this._initialized||await this.init(),e=St(e);const a=this.resolver.resolveBundle(e),n=Object.keys(a).map(o=>this._unloadFromResolved(a[o]));await Promise.all(n)}async _unloadFromResolved(e){const a=Object.values(e);a.forEach(n=>{Be.remove(n.src)}),await this.loader.unload(a)}async _detectFormats(e){let a=[];e.preferredFormats&&(a=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const n of e.detections)e.skipDetections||await n.test()?a=await n.add(a):e.skipDetections||(a=await n.remove(a));return a=a.filter((n,o)=>a.indexOf(n)===o),a}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(a=>{a.config&&Object.keys(a.config).filter(n=>n in e).forEach(n=>{a.config[n]=e[n]})})}}const lt=new Li;Ve.handleByList(W.LoadParser,lt.loader.parsers).handleByList(W.ResolveParser,lt.resolver.parsers).handleByList(W.CacheParser,lt.cache.parsers).handleByList(W.DetectionParser,lt.detections);Ve.add(Ur,Hr,Gr,qr,Yr,Xr,Kr,ei,ai,fi,gi,Nn,Si,Nr,zr,Un,Ei);const wn={loader:W.LoadParser,resolver:W.ResolveParser,cache:W.CacheParser,detection:W.DetectionParser};Ve.handle(W.Asset,s=>{const e=s.ref;Object.entries(wn).filter(([a])=>!!e[a]).forEach(([a,n])=>Ve.add(Object.assign(e[a],{extension:e[a].extension??n})))},s=>{const e=s.ref;Object.keys(wn).filter(a=>!!e[a]).forEach(a=>Ve.remove(e[a]))});var Ti=ee('<div class="win-label svelte-1vsph43">BIG WIN!</div> <div class="win-amount-display svelte-1vsph43"> </div>',1),Ri=_n('<use href="#sparkle" class="sparkle svelte-1vsph43"></use>'),Pi=_n('<use href="#vinyl"></use>'),Ii=ee('<div><!> <svg class="vinyl-canvas svelte-1vsph43" viewBox="0 0 1024 800" xmlns="http://www.w3.org/2000/svg"><defs class="svelte-1vsph43"><symbol id="vinyl" viewBox="-200 -200 400 400" class="svelte-1vsph43"><circle cx="0" cy="0" r="180" fill="#0b0b0b" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="150" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.3" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="120" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.25" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="90" fill="none" stroke="#1a1a1a" stroke-width="1.5" opacity="0.2" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="55" fill="var(--label-color)" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="6" fill="#ffffff" class="svelte-1vsph43"></circle><ellipse cx="-15" cy="-15" rx="20" ry="15" fill="#ffffff" opacity="0.3" transform="rotate(-30)" class="svelte-1vsph43"></ellipse></symbol><symbol id="sparkle" viewBox="-12 -12 24 24" class="svelte-1vsph43"><polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ffd966" class="svelte-1vsph43"></polygon><circle cx="0" cy="0" r="2" fill="#ffffff" class="svelte-1vsph43"></circle></symbol><symbol id="confetti" viewBox="-3 -3 6 6" class="svelte-1vsph43"><circle cx="0" cy="0" r="2" fill="var(--confetti-color)" class="svelte-1vsph43"></circle></symbol></defs><!><!></svg></div>');function Oi(s,e){Vt(e,!0);let a=it(e,"winLevel",3,"small"),n=it(e,"winAmount",3,0),o=it(e,"vinylStartScale",3,.01),i=it(e,"vinylEndScale",3,.15),l=it(e,"sparkleScale",3,.6),d=R(!1),m=R(!1);const y={small:{vinyls:5,sparkles:8,maxRadius:70},medium:{vinyls:12,sparkles:16,maxRadius:100},jackpot:{vinyls:24,sparkles:30,maxRadius:130}},u=Ge(()=>y[a()]),v=["#f04e37","#ffd966","#ff8533","#4ecdc4","#ff6b9d"];function b(X){const pe=[],Pe=t(u).maxRadius;for(let Y=0;Y<X;Y++){const q=Math.PI*2*Y/X+Math.random()*.4,Fe=Math.random()*Pe*.7+Pe*.2;pe.push({x:512+Math.cos(q)*Fe,y:400+Math.sin(q)*Fe,rotation:Math.random()*30-15,scale:i()*(.8+Math.random()*.4),delay:Y*.05,color:v[Y%v.length]})}return pe}function E(X){const pe=[];for(let ue=0;ue<X;ue++)pe.push({x:100+Math.random()*824,y:50+Math.random()*700,delay:Math.random()*.8,duration:.6+Math.random()*.4,rotation:Math.random()*360});return pe}const L=Ge(()=>b(t(u).vinyls)),Q=Ge(()=>E(t(u).sparkles));function F(){g(d,!0),g(m,!0),setTimeout(()=>{g(m,!1),setTimeout(()=>{var X;g(d,!1),(X=e.onComplete)==null||X.call(e)},500)},a()==="jackpot"?4e3:a()==="medium"?3e3:2500)}function T(){g(m,!1),setTimeout(()=>{g(d,!1)},500)}var H=Ut(),re=Ye(H);{var ie=X=>{var pe=Ii();let ue;var we=w(pe);{var Pe=_e=>{var ae=Ti(),ve=p(Ye(ae),2),et=w(ve,!0);_(ve),oe(Ie=>K(et,Ie),[()=>n().toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),V(_e,ae)};se(we,_e=>{n()>0&&_e(Pe)})}var Y=p(we,2),q=p(w(Y));Ht(q,17,()=>t(Q),Gt,(_e,ae)=>{var ve=Ri();oe(()=>x(ve,"style",`
            --sx: ${t(ae).x??""}px;
            --sy: ${t(ae).y??""}px;
            --duration: ${t(ae).duration??""}s;
            --sparkle-delay: ${t(ae).delay??""}s;
            --sparkle-scale: ${l()??""};
          `)),V(_e,ve)});var Fe=p(q);Ht(Fe,17,()=>t(L),Gt,(_e,ae)=>{var ve=Pi();let et;oe(()=>{et=da(ve,0,"vinyl-group svelte-1vsph43",null,et,{floating:t(m)}),x(ve,"style",`
            --tx: ${t(ae).x??""}px;
            --ty: ${t(ae).y??""}px;
            --scale: ${t(ae).scale??""};
            --rotation: ${t(ae).rotation??""}deg;
            --delay: ${t(ae).delay??""}s;
            --label-color: ${t(ae).color??""};
            --start-scale: ${o()??""};
          `)}),V(_e,ve)}),_(Y),_(pe),oe(()=>ue=da(pe,1,"vinyl-win-container svelte-1vsph43",null,ue,{visible:t(m),hiding:!t(m)})),V(X,pe)};se(re,X=>{t(d)&&X(ie)})}return V(s,H),Yt({show:F,hide:T})}var Ci=ee(`<div style="
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
		"> </div></div>`),Bi=ee(`<div style="
				position: absolute;
				bottom: 40px;
				left: 50%;
				transform: translateX(-50%);
				color: #fff;
				font-family: Arial, sans-serif;
				font-size: 20px;
				text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
			">Please wait...</div>`),Fi=ee('<div role="button" tabindex="0"><span style="position: absolute; left: -9999px;">Click anywhere to continue</span> <!></div>');function Mi(s,e){Vt(e,!0);let a=R(!1),n=R(!1),o=R(!1),i=R(0);ga(()=>{const v=setInterval(()=>{g(i,t(i)+2),t(i)>=100&&(clearInterval(v),g(i,100),setTimeout(()=>{g(n,!0),setTimeout(()=>{g(o,!0)},3e3)},500))},60);return()=>clearInterval(v)});function l(){t(n)&&t(o)&&!t(a)&&(g(a,!0),setTimeout(()=>e.onloaded(),300))}var d=Ut(),m=Ye(d);{var y=v=>{var b=Ci(),E=w(b);x(E,"src",`${xe??""}/loading_screen/MadCraneLogo.jpg`);var L=p(E,2),Q=w(L);_(L);var F=p(L,2),T=w(F);_(F),_(b),oe(H=>{x(Q,"style",`
				width: ${t(i)??""}%;
				height: 100%;
				background: linear-gradient(90deg, #ff0000, #ff6600);
				transition: width 0.3s ease;
			`),K(T,`Loading... ${H??""}%`)},[()=>Math.round(t(i))]),V(v,b)},u=v=>{var b=Ut(),E=Ye(b);{var L=Q=>{var F=Fi(),T=p(w(F),2);{var H=re=>{var ie=Bi();V(re,ie)};se(T,re=>{t(o)||re(H)})}_(F),oe(()=>x(F,"style",`
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
		`)),C("click",F,l),C("keydown",F,re=>re.key==="Enter"&&l()),V(Q,F)};se(E,Q=>{t(n)&&!t(a)&&Q(L)},!0)}V(v,b)};se(m,v=>{t(n)?v(u,!1):v(y)})}V(s,d),Yt()}var Wi=Ho('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-13j6fjm"><\/script><!---->',1),zi=ee('<p style="color: red;" class="svelte-13j6fjm"><strong class="svelte-13j6fjm">Error:</strong> </p>'),Ni=ee('<div class="svelte-13j6fjm"> </div>'),Di=ee('<details class="svelte-13j6fjm"><summary class="svelte-13j6fjm"> </summary> <!></details>'),Ui=ee(`<div style="
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
  " class="svelte-13j6fjm"><h3 class="svelte-13j6fjm">🎰 Oma-peli Debug</h3> <p class="svelte-13j6fjm"><strong class="svelte-13j6fjm">Status:</strong> </p> <!> <p class="svelte-13j6fjm"><strong class="svelte-13j6fjm">Base:</strong> </p> <p class="svelte-13j6fjm"><strong class="svelte-13j6fjm">BG URL:</strong> </p> <p class="svelte-13j6fjm"><strong class="svelte-13j6fjm">Sample:</strong> </p> <!></div>`),Gi=ee('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-13j6fjm"> </div>'),Hi=ee('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-13j6fjm"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-13j6fjm"> </span></div>'),Vi=ee(`<div style="
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
  " class="svelte-13j6fjm"><h2 style="margin: 0 0 10px 0; font-size: 2em;" class="svelte-13j6fjm">🎉 VOITTO! 🎉</h2> <div style="font-size: 1.5em; font-weight: bold; margin: 10px 0;" class="svelte-13j6fjm"> </div> <!> <!> <button style="
        margin-top: 15px;
        padding: 8px 16px;
        background: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
      " class="svelte-13j6fjm">Jatka pelaamista</button></div>`),Yi=ee('<button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1em;" class="svelte-13j6fjm">🛑 STOP AUTOPLAY</button>'),Xi=ee('<button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1em;" class="svelte-13j6fjm">▶️ START AUTOPLAY</button>'),Ki=ee(`<div class="svelte-13j6fjm"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-13j6fjm">💰 MENU</h2> <div class="mobile-menu-controls svelte-13j6fjm" style="display: none; margin-bottom: 20px; padding: 15px; background: rgba(255, 255, 255, 0.05); border-radius: 10px;"><h3 style="margin: 0 0 15px 0; color: #ffd700; font-size: 1.2em;" class="svelte-13j6fjm">🎮 GAME CONTROLS</h3> <div style="margin-bottom: 15px;" class="svelte-13j6fjm"><div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;" class="svelte-13j6fjm"><span style="font-size: 1.1em;" class="svelte-13j6fjm">🔄 Autoplay:</span> <span class="svelte-13j6fjm"> </span></div> <!></div> <div style="margin-bottom: 10px;" class="svelte-13j6fjm"><div style="margin-bottom: 10px;" class="svelte-13j6fjm"><span style="font-size: 1.1em;" class="svelte-13j6fjm">⚡ Spin Speed:</span> <span style="color: #ffd700; font-weight: bold; margin-left: 10px;" class="svelte-13j6fjm"> </span></div> <div style="display: flex; gap: 10px;" class="svelte-13j6fjm"><button class="svelte-13j6fjm">🐌 Slow</button> <button class="svelte-13j6fjm">🏃 Medium</button> <button class="svelte-13j6fjm">⚡ Fast</button></div></div> <div style="border-top: 1px solid #555; margin: 20px 0;" class="svelte-13j6fjm"></div></div> <h3 style="margin: 0 0 15px 0; color: #ffd700; font-size: 1.2em;" class="svelte-13j6fjm">💰 PAYTABLE (81 WAYS)</h3> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-13j6fjm">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-13j6fjm"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-13j6fjm"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-13j6fjm"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-13j6fjm">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-13j6fjm">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-13j6fjm">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-13j6fjm">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-13j6fjm"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-13j6fjm">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-13j6fjm">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-13j6fjm">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-13j6fjm">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-13j6fjm">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-13j6fjm"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-13j6fjm">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-13j6fjm">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-13j6fjm">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-13j6fjm">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-13j6fjm"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-13j6fjm">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-13j6fjm">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-13j6fjm">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-13j6fjm">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-13j6fjm"> <span style="color: #ffd700;" class="svelte-13j6fjm">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-13j6fjm">Sulje</button></div>`),qi=ee(`<div style="
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
  " class="svelte-13j6fjm"><div style="
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: white;
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      border: 3px solid #ffd700;
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
      max-width: 500px;
      font-family: Arial, sans-serif;
    " class="svelte-13j6fjm"><h1 style="
        margin: 0 0 20px 0;
        font-size: 2.5em;
        color: #ffd700;
        text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
      " class="svelte-13j6fjm">🎰 VAPAAPELIT PÄÄTTYIVÄT! 🎰</h1> <div style="
        font-size: 1.2em;
        margin: 20px 0;
        color: #aaa;
      " class="svelte-13j6fjm">Voitit yhteensä:</div> <div style="
        font-size: 3em;
        font-weight: bold;
        color: #00ff00;
        text-shadow: 0 0 15px rgba(0, 255, 0, 0.8);
        margin: 20px 0;
      " class="svelte-13j6fjm"> </div> <button style="
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
        " class="svelte-13j6fjm">JATKA PERUSPELIIN</button></div></div>`),Qi=ee('<div class="svelte-13j6fjm"><div class="svelte-13j6fjm">🔄 Select Rounds</div> <button class="svelte-13j6fjm">10 Rounds</button> <button class="svelte-13j6fjm">25 Rounds</button> <button class="svelte-13j6fjm">50 Rounds</button> <button class="svelte-13j6fjm">100 Rounds</button> <button class="svelte-13j6fjm">200 Rounds</button> <button class="svelte-13j6fjm">500 Rounds</button> <button class="svelte-13j6fjm">1,000 Rounds</button> <button class="svelte-13j6fjm">5,000 Rounds</button> <button class="svelte-13j6fjm">Cancel</button></div>'),Ji=ee(`<!>  <!>   <!>   <!>   <!>  <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
" class="svelte-13j6fjm"><div class="svelte-13j6fjm"><div class="svelte-13j6fjm"><button class="svelte-13j6fjm">💰 PAYTABLE</button>  <div class="control-panel-mobile svelte-13j6fjm"><!>  <img alt="Left End" class="svelte-13j6fjm"> <div class="svelte-13j6fjm"><div style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;" class="svelte-13j6fjm"><div style="display: flex; flex-direction: column; align-items: center;" class="svelte-13j6fjm"><div class="svelte-13j6fjm">BET</div> <div class="svelte-13j6fjm"><button title="Decrease Bet" class="svelte-13j6fjm"></button> <div class="svelte-13j6fjm"> </div> <button title="Increase Bet" class="svelte-13j6fjm"></button></div></div> <img alt="Divider" class="svelte-13j6fjm"> <div style="display: flex; flex-direction: column; align-items: center;" class="svelte-13j6fjm"><div class="svelte-13j6fjm">BALANCE</div> <div class="svelte-13j6fjm"><div class="svelte-13j6fjm"> </div></div></div> <img alt="Divider" class="svelte-13j6fjm"></div> <div class="svelte-13j6fjm"></div> <div style="position: absolute; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; z-index: 10;" class="svelte-13j6fjm"><div><button class="svelte-13j6fjm"></button></div></div> <div style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;" class="svelte-13j6fjm"><div class="svelte-13j6fjm"><button class="svelte-13j6fjm"></button> <img alt="Status bar" class="svelte-13j6fjm"></div> <img alt="Divider" class="svelte-13j6fjm"> <div class="svelte-13j6fjm"><button class="svelte-13j6fjm"></button> <img alt="Speed bar" class="svelte-13j6fjm"></div> <img alt="Divider" class="svelte-13j6fjm"> <div style="display: flex; flex-direction: column; align-items: center;" class="svelte-13j6fjm"><div class="svelte-13j6fjm">WIN</div> <div class="svelte-13j6fjm"><div class="svelte-13j6fjm"> </div></div></div> <img alt="Divider" class="svelte-13j6fjm"> <div style="display: flex; align-items: center; justify-content: center;" class="svelte-13j6fjm"><button title="Menu" class="svelte-13j6fjm"></button></div></div></div> <img alt="Right End" class="svelte-13j6fjm"></div></div>  <button class="svelte-13j6fjm"></button> <!>   <div class="debug-panel svelte-13j6fjm"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-13j6fjm">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-13j6fjm"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-13j6fjm"><span style="color: #aaa;" class="svelte-13j6fjm">Rounds:</span> <span style="color: #fff;" class="svelte-13j6fjm"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-13j6fjm"><span style="color: #aaa;" class="svelte-13j6fjm">Wagered:</span> <span style="color: #ff6666;" class="svelte-13j6fjm"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-13j6fjm"><span style="color: #aaa;" class="svelte-13j6fjm">Won:</span> <span style="color: #66ff66;" class="svelte-13j6fjm"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 10px; 
    padding-top: 10px; 
    border-top: 1px solid #555;
    font-weight: bold;
    font-size: 18px;
  " class="svelte-13j6fjm"><span style="color: #ffd700;" class="svelte-13j6fjm">RTP:</span> <span class="svelte-13j6fjm"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
  " class="svelte-13j6fjm"><span style="color: #aaa;" class="svelte-13j6fjm">Hit Freq:</span> <span class="svelte-13j6fjm"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-size: 14px;
  " class="svelte-13j6fjm"><span style="color: #aaa;" class="svelte-13j6fjm">Free Spins Triggered:</span> <span style="color: #66ccff;" class="svelte-13j6fjm"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 4px;
    font-size: 14px;
  " class="svelte-13j6fjm"><span style="color: #aaa;" class="svelte-13j6fjm">Free Spins Played:</span> <span style="color: #66ccff;" class="svelte-13j6fjm"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #555;
    font-size: 14px;
  " class="svelte-13j6fjm"><span style="color: #aaa;" class="svelte-13j6fjm">Empty Slots:</span> <span style="color: #ff9900;" class="svelte-13j6fjm"> </span></div> <button style="
      margin-top: 10px;
      width: 100%;
      padding: 5px;
      background: rgba(255, 100, 100, 0.3);
      color: #fff;
      border: 1px solid #ff6666;
      border-radius: 5px;
      cursor: pointer;
      font-size: 11px;
    " class="svelte-13j6fjm">Reset Stats</button> <div style="
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  " class="svelte-13j6fjm"><button class="svelte-13j6fjm"> </button> <button class="svelte-13j6fjm">Clear Win Log</button> <button class="svelte-13j6fjm">🎰 Test Free Spins</button></div></div> <div class="svelte-13j6fjm"><button class="svelte-13j6fjm"></button> <button class="svelte-13j6fjm"></button></div></div></div>`,1);function Zi(s,e){Vt(e,!0);const a="1.4.7",n=13,o=1445,i=1e3,l=1.75,d=-25,m=-15,y=175,u=-5,v=750,b=80,E=250,L=0,Q=50,F=.5,T=30,H=-10,ie=Math.round(100*l),X=Math.round(ie*(700/760)),ue=X+10,we=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],Pe=typeof window<"u"&&window.location.hostname.includes("github.io"),Y=Pe?"/web-sdk/oma-peli/symbols":`${xe}/symbols`,q=Pe?"/web-sdk/oma-peli/controls":`${xe}/controls`,Fe={a:`${Y}/Blue_hotrod.jpg`,b:`${Y}/Blue_jacket.jpg`,c:`${Y}/Blue_rollers.jpg`,d:`${Y}/Blue_speakers.jpg`,e:`${Y}/Premium_blonde.jpg`,f:`${Y}/Premium_brunette.jpg`,g:`${Y}/Premium_rocker.jpg`,h:`${Y}/New_Wild.jpg`,i:`${Y}/Red_burger.jpg`,j:`${Y}/Red_fries.jpg`,k:`${Y}/Red_milkshake.jpg`,l:`${Y}/Scatter.jpg`,emptyslot:`${Y}/Emptyslot.jpg`},_e=`${Y}/bg_base.jpg`,ae=`${Y}/ReelFrames.png`,ve=`${Y}/RockABillyReels_logo.png`,et={spin:`${xe}/sounds/spin.mp3`,stop:`${xe}/sounds/stop.mp3`,win:`${xe}/sounds/win.mp3`};let Ie=R(!0),Kt={},N=null,be=null,qt=null,Qt=null,Le=R(!0),Gn=R(!1),Jt=R(1100),Zt=null;const Hn={fast:3,medium:7,slow:18};let J=R("medium"),Me=R(Math.floor(Math.random()*20)+1);const gt={background:()=>`${xe}/music/rockabilly reels loop ${t(Me)}.mp3`,freeSpins:`${xe}/music/rockabilly-loop_long.mp3`,drumHit:`${xe}/music/drum-hit.mp3`,winTheme:`${xe}/music/win-stinger.mp3`};function ya(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(ya,500);return}const c=window.Howl;try{N=new c({src:[gt.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+t(Me)+")"),g(Gn,!0)},onloaderror:(f,j)=>{console.warn("⚠️ Background music not found:",j)}}),be=new c({src:[gt.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(f,j)=>console.warn("⚠️ Free spins music not found:",j)}),qt=new c({src:[gt.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Qt=new c({src:[gt.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(f){console.error("Failed to initialize music system:",f)}}function xa(){const c=t(Z)?be:N;c&&t(Le)&&!c.playing()&&(c.play(),console.log("🎵 "+(t(Z)?"Free spins":"Background")+" music started"))}function Vn(){if(t(Z))return;const c=Math.floor(Math.random()*20)+1;c===t(Me)?g(Me,c%20+1):g(Me,c),console.log("🎵 Changing to loop #"+t(Me)),N&&(N.playing()?(N.fade(N.volume(),0,200),setTimeout(()=>{N.stop(),N.unload()},200)):N.unload());const f=window.Howl;f&&(N=new f({src:[gt.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ New background music loop #"+t(Me)+" loaded"),t(Le)&&!t(Z)&&setTimeout(()=>{N&&!N.playing()&&N.play()},300)},onloaderror:(j,$)=>{console.warn("⚠️ Failed to load loop #"+t(Me)+":",$)}}))}function Yn(){N&&N.playing()&&(N.fade(N.volume(),0,500),setTimeout(()=>N.stop(),500)),be&&be.playing()&&(be.fade(be.volume(),0,500),setTimeout(()=>be.stop(),500))}function es(){N&&N.playing()&&(N.fade(N.volume(),0,500),setTimeout(()=>N.stop(),500)),be&&be.playing()&&(be.fade(be.volume(),0,500),setTimeout(()=>be.stop(),500)),setTimeout(()=>{t(Le)&&xa()},600)}function Xn(){if(N&&N.playing()){const c=N.volume();N.fade(c,0,1e3),setTimeout(()=>{N.stop(),N.volume(.3)},1e3)}}let ts=R(!1);function Kn(){g(ts,!1),setTimeout(()=>{g(ts,!0)},10)}let tt=null;const ss={vinylStartScale:.01,vinylEndScale:.05,sparkleScale:.1};function qn(){g(Le,!t(Le)),t(Le)?xa():Yn()}function Qn(){g(Ie,!t(Ie))}function Jn(){qt&&t(Le)&&t(Ie)&&qt.play()}function Zn(){Qt&&t(Le)&&t(Ie)&&Qt.play()}let Et=null,as=null,ht=null,Oe=null,mt=R("Initializing..."),st=R(""),Ae=[],wa=R(!1),We=R(1e3);const _a=[.4,.8,1,1.6,2,3,5,8,10,15,20,25,30,40,50,60,80,100];let vt=R(5),je=Ge(()=>_a[t(vt)]),Xe=R(0),le=R(!1),bt=R(0),ge=R(!1),ns=R(!1),eo=R(0),Ke=!1,Ce=null,os=!1,at=R(0),nt=R(0),yt=R(0),rs=R(0),is=Ge(()=>t(nt)>0?(t(yt)/t(nt)*100).toFixed(2):"0.00"),ls=Ge(()=>t(at)>0?(t(rs)/t(at)*100).toFixed(2):"0.00"),Z=R(!1),ze=R(0),qe=R(0),Lt=R(0),cs=R(0),Tt=R(0),ds=R(0),to=Ge(()=>t(Tt)>0?(t(ds)/t(Tt)*100).toFixed(2):"0.00"),ye=R(he([]));function so(c,f,j){const $=new Date().toLocaleString("fi-FI");let h=`
${"=".repeat(60)}
`;h+=`ROUND #${c} - ${$}
`,h+=`Mode: ${t(Z)?"FREE SPINS":"BASE GAME"}
`,h+=`${"=".repeat(60)}
`,f.forEach((k,A)=>{h+=`
Win ${A+1}:
`,h+=`  Symbol: ${k.symbol} (${$a[k.symbol]})
`,h+=`  Count: ${k.count} symbols
`,h+=`  Multiplier: ${k.multiplier}x
`,h+=`  Payout: ${k.payout.toFixed(2)}
`,h+=`  Positions: [${k.positions.join(", ")}]
`}),h+=`
${"─".repeat(60)}
`,h+=`TOTAL WIN: ${j.toFixed(2)}
`,h+=`${"=".repeat(60)}
`,t(ye).push(h)}function ao(){const c=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${t(ye).join(`
`)}`,f=new Blob([c],{type:"text/plain"}),j=URL.createObjectURL(f),$=document.createElement("a");$.href=j,$.download=`win-log-${Date.now()}.txt`,$.click(),URL.revokeObjectURL(j)}function no(){g(ye,he([]))}function oo(){t(Z)||(g(Z,!0),g(ze,10),g(qe,0),Se(Lt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),es())}const ro={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},io={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function Aa(c){if(c===6)return Math.random()<.55?"h":"emptyslot";const f=t(Z)?io:ro,j=Math.random();let $=0;const h=we.filter(A=>A!=="h"),k=h.reduce((A,I)=>A+f[I],0);for(const A of h)if($+=f[A]/k,j<$)return A;return"f"}function ja(){const c=[];for(let f=0;f<n;f++){const j=Aa(f);c.push(j),Se(Tt),j==="emptyslot"&&Se(ds)}return c}function ka(c){return c<3?{col:0,row:c}:c<6?{col:1,row:c-3}:c===6?{col:2,row:0}:c<10?{col:3,row:c-7}:{col:4,row:c-10}}function xt(c,f){return c===0?f:c===1?3+f:c===2?6:c===3?7+f:c===4?10+f:-1}function lo(){if(t(Z)){const c=Math.random();return c<.7?3:c<.92?5:10}else{const c=Math.random();return c<.7?1:c<.92?2:3}}const co={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function fo(){var ne;const c=[],f=[];for(let S=0;S<n;S++)wt[S]==="l"&&f.push(S);if(f.length>=5){const S=f.length;g(ze,t(ze)+S),t(Z)?console.log(`🎰 FREE SPINS RETRIGGERED! +${S} FREE SPINS! Total: ${t(ze)}`):(g(Z,!0),g(qe,0),Se(Lt),console.log(`🎰 FREE SPINS TRIGGERED! ${f.length} scatters = ${S} FREE SPINS!`),es()),c.push({symbol:"l",count:f.length,payout:0,positions:f,multiplier:1})}const j=[];for(let S=0;S<3;S++)for(let O=0;O<3;O++)for(let M=0;M<1;M++)for(let z=0;z<3;z++)for(let U=0;U<3;U++){const G=[xt(0,S),xt(1,O),xt(2,M),xt(3,z),xt(4,U)];j.push(G)}console.log(`Generated ${j.length} possible paths (should be 81)`);const $=[];for(const S of j){const O=S.map(G=>wt[G]);if(O[0]==="emptyslot"||O[0]==="l")continue;let M=null;for(let G=0;G<O.length;G++)if(O[G]!=="h"&&O[G]!=="emptyslot"&&O[G]!=="l"){M=O[G];break}if(!M)continue;let z=0;const U=new Set;for(let G=0;G<S.length;G++){const Re=S[G],{col:de}=ka(Re),te=O[G];(te===M||te==="h")&&U.add(de)}for(let G=0;G<5&&U.has(G);G++)z++;if(z>=3){const Re=S[0]%3;$.push({symbol:M,length:z,path:S.slice(0,z),startRow:Re})}}const h=[],k=new Map;for(const S of $){const O=`${S.symbol}-${S.path.join(",")}`;k.has(O)||k.set(O,[]),k.get(O).push(S)}for(const[S,O]of k.entries()){const M=Math.max(...O.map(U=>U.length)),z=O.find(U=>U.length===M);z&&h.push(z)}const A=[],I=new Map;for(const S of h)I.has(S.symbol)||I.set(S.symbol,[]),I.get(S.symbol).push(S);const P=[];for(const[S,O]of I.entries()){const M=Math.max(...O.map(U=>U.length)),z=O.filter(U=>U.length===M);P.push(...z)}const D=new Map;for(const S of P){const O=`${S.symbol}-${S.length}`;D.has(O)||D.set(O,[]),D.get(O).push(S)}const B=P.length>0?lo():1;for(const[S,O]of D.entries()){const M=O[0],z=(ne=co[M.symbol])==null?void 0:ne[M.length];if(z!==void 0&&z>0){const U=new Map;for(const te of O)for(let fe=0;fe<te.length;fe++)U.has(fe)||U.set(fe,new Set),U.get(fe).add(te.path[fe]);let G=1;for(let te=0;te<M.length;te++){const fe=U.get(te);G*=fe?fe.size:1}const Re=z*t(je)*G*B;console.log(`  ${M.length}x${M.symbol}: ${G} ways × ${z}x × ${t(je)} bet × ${B} mult = ${Re}`);const de=new Set;for(const te of O)te.path.forEach(fe=>de.add(fe));A.push({symbol:M.symbol,count:M.length,payout:Re,positions:Array.from(de),multiplier:B})}}return c.push(...A),c}let ke=R(0),ot=R(he([])),Ne=R(!1),Qe=R(!1),fs=R(!1),ps=R(0);const $a={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function us(c){if(!t(Ie)||!Kt[c])return;const f=Kt[c];f.currentTime=0,f.play().catch(j=>{console.warn("Äänen toisto epäonnistui:",c,j)})}function po(c){_t.forEach(f=>ce.stage.removeChild(f)),_t=[],c.forEach(f=>{f.positions.forEach(j=>{const $=Te[j],h=new fn().rect(0,0,ie,X).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});h.x=$.container.x,h.y=$.container.y,ce.stage.addChild(h),_t.push(h);let k=0,A=1;const I=.05;ce.ticker.add(()=>{k+=A*I,k>=.4&&(A=-1),k<=0&&(A=1),h.alpha=.5+k})})})}function gs(){_t.forEach(c=>ce.stage.removeChild(c)),_t=[]}let wt=ja(),hs,ce,Te=[],_t=[];class uo{constructor(f,j){$e(this,"index");$e(this,"container");$e(this,"offset",0);$e(this,"speed",0);$e(this,"targetSpeed",30);$e(this,"state","idle");$e(this,"stopDelay",0);$e(this,"bounceOffset",0);$e(this,"bounceSpeed",0);$e(this,"bounceFrames",0);this.index=f,this.container=j}start(f){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=f}startSynchronized(f){const j=Hn[t(J)],$=60+f*j;this.start($)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const f=t(J)==="slow"?.88:t(J)==="medium"?.92:.95;this.speed*=f,this.speed<2.5&&(this.state="bouncing",this.speed=0,this.offset=0,this.bounceOffset=0,this.bounceSpeed=4,us("stop"),Jn())}this.state==="bouncing"&&(this.bounceSpeed*=.8,this.bounceOffset+=this.bounceSpeed,Math.abs(this.bounceSpeed)<.2&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=ue&&(this.offset=0,wt[this.index]=Aa(this.index)))}}draw(){const f=this.container;f.removeChildren();const j=wt[this.index];if(!j||!Et||!Et[j])return;const $=this.offset+this.bounceOffset,h=(k,A)=>{const I=Et[k];if(!I)return;const P=new sa(I);P.width=ie,P.height=X,P.x=0,P.y=A,f.addChild(P)};h(j,$-ue),h(j,$),h(j,$+ue)}}let r=R(1);ga(async()=>{ce=new Fn,await ce.init({width:o,height:i,backgroundAlpha:0}),hs.appendChild(ce.canvas);const c=()=>{const h=window.innerWidth,k=window.innerHeight,A=h/o,I=k/i,P=k>h,D=h<=768;let B;D&&P?B=Math.min(A*1,I*.95,1.2):D?B=Math.min(A*.98,I*.95,1.1):P?B=Math.min(A*.95,I*.85,1):B=Math.min(A,I,1),g(r,he(B)),ce.stage.scale.set(B),ce.renderer.resize(o,i)};c(),window.addEventListener("resize",c);const f=h=>{(h.code==="Space"||h.key===" ")&&(h.preventDefault(),Te.some(A=>A.state==="spinning"||A.state==="slowing")?(Te.forEach(A=>{A.state==="spinning"?(A.stopDelay=0,A.state="slowing",A.speed=A.targetSpeed*.5):A.state==="slowing"&&(A.speed=A.speed*.3)}),console.log("⚡ Skip spin - kiekot pysähtyvät nopeasti")):ms())};window.addEventListener("keydown",f);const j={};try{g(mt,"Loading background and UI images..."),Ae.push(`Loading background: ${_e}`),Ae.push(`Loading reel frames: ${ae}`),Ae.push(`Loading logo: ${ve}`),await lt.load([{alias:"background",src:_e},{alias:"reelframes",src:ae},{alias:"logo",src:ve}]),as=Je.from("background"),ht=Je.from("reelframes"),Oe=Je.from("logo"),console.log("✅ Background texture created:",as.width,"x",as.height),console.log("✅ Reel frames texture created:",ht.width,"x",ht.height),console.log("✅ Logo texture created:",Oe.width,"x",Oe.height),Ae.push("✅ All UI images loaded"),g(mt,"Loading symbols...");const h=[];for(const k of we)h.push({alias:k,src:Fe[k]});await lt.load(h);for(const k of we){const A=Fe[k];Ae.push(`Loading symbol ${k}: ${A}`);try{const I=Je.from(k);j[k]=I,console.log(`✅ Symbol ${k} loaded:`,I.width,"x",I.height),Ae.push(`✅ Symbol ${k} loaded`)}catch(I){const P=`❌ Failed to load symbol ${k} from ${A}: ${I}`;throw Ae.push(P),console.error(P),new Error(P)}}Et=j,g(mt,"Assets loaded successfully!")}catch(h){g(st,`Asset loading failed: ${h}`),Ae.push(t(st)),console.error(t(st));return}console.log("Ladataan ääniefektit...");for(const[h,k]of Object.entries(et)){const A=new Audio;A.src=k,A.preload="auto",A.volume=.7,A.load(),A.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${k} (käytetään hiljaista placeholderia)`)}),Kt[h]=A}[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(h=>({x:h.x+d,y:h.y+m})),Te=[];for(let h=0;h<n;h++){const k=ka(h),A=k.col,I=k.row,P=300+A*(ie+20),D=250+I*(X+15),B=h===6?P+u:P,ne=h===6?D+y:D,S=new ha;S.x=B+d,S.y=ne+m;const O=new fn().rect(0,0,ie,X).fill(16777215);O.x=S.x,O.y=S.y,S.mask=O,ce.stage.addChild(O),ce.stage.addChild(S),Te.push(new uo(h,S))}if(ht){const h=new sa(ht);h.scale.set(1),h.x=250,h.y=200,ce.stage.addChild(h),Zt=h,g(Jt,he(h.width)),console.log("Reel frames lisätty:",h.width.toFixed(0),"x",h.height.toFixed(0)),console.log("Control panel leveys päivitetty:",t(Jt).toFixed(0))}if(Oe){Oe.source&&(Oe.source.scaleMode="nearest",Oe.source.antialias=!1,Oe.source.update());const h=new sa(Oe);h.roundPixels=!0,h.scale.set(F),h.x=(ce.renderer.width-h.width)/2+T,h.y=H,ce.stage.addChild(h),console.log("Logo lisätty päällimmäiseen layeriin:",h.width.toFixed(0),"x",h.height.toFixed(0))}ya(),ce.ticker.add(go)});function go(){for(const c of Te)c.update(),c.draw();if(!t(Ne)&&!os&&Te.every(c=>c.state==="stopped")){os=!0,Xn();const c=fo();console.log(`Checking wins, found ${c.length} wins`),c.length>0?(g(ot,he(c)),g(ke,he(c.reduce((f,j)=>f+j.payout,0))),so(t(at),c,t(ke)),mo(t(ke)),g(Ne,!0),g(eo,he(Date.now())),console.log(`🎉 VOITTO! ${t(ke)} pistettä! Uusi saldo: ${t(We)}`),console.log(`isShowingWin set to: ${t(Ne)}, totalWin: ${t(ke)}`),c.forEach(f=>{const j=f.multiplier?` (${f.multiplier}x multiplier)`:"";console.log(`${f.count}x ${f.symbol} = ${f.payout} pistettä${j}`)}),po(c),us("win"),t(le)&&!Ke&&(Ke=!0,Ce=window.setTimeout(()=>{t(Ne)&&t(le)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),g(Ne,!1),gs()),Ce=window.setTimeout(()=>{Ke=!1,vs()},200)},1500))):(console.log("No wins found this spin"),t(le)&&!Ke&&(Ke=!0,Ce=window.setTimeout(()=>{Ke=!1,vs()},500))),t(Z)&&t(ze)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${t(qe)}`),setTimeout(()=>{g(ps,he(t(qe))),g(fs,!0)},2e3))}}function ms(){if(t(Z)||Vn(),Kn(),t(Z)&&t(ze)>0)Se(ze,-1),Se(cs),console.log(`🎰 FREE SPIN! Remaining: ${t(ze)}`);else if(!t(Z)){if(t(We)<t(je)){alert(`Not enough credits! Balance: ${t(We)}, Bet: ${t(je)}`),At();return}g(We,t(We)-t(je)),Se(at),g(nt,t(nt)+t(je))}Ce!==null&&(clearTimeout(Ce),Ce=null),g(ot,he([])),g(ke,0),g(Xe,0),console.log("🔄 lastWin nollattu: "+t(Xe)),g(Ne,!1),os=!1,gs(),wt=ja(),Te.forEach((c,f)=>{c.startSynchronized(f)}),us("spin")}function ho(c,f,j=1400){if(typeof window>"u")return;const $=document.getElementById("winLabel");if(!$)return;$.classList.add("rolling");const h=performance.now(),k=f-c,A=P=>1-Math.pow(1-P,3);function I(P){const D=Math.min(1,(P-h)/j),B=c+k*A(D);g(Xe,B),D<1?requestAnimationFrame(I):(g(Xe,he(f)),$.classList.remove("rolling"),$.classList.add("winHit"),setTimeout(()=>$.classList.remove("winHit"),450))}requestAnimationFrame(I)}function mo(c){g(We,t(We)+c),g(yt,t(yt)+c);const f=t(Xe);g(Xe,he(c));const j=c>t(je)*50?2e3:1400;if(ho(f,c,j),t(Z)&&g(qe,t(qe)+c),c>0){Se(rs);const $=c/t(je);$>=10&&Zn(),tt&&($>=50?tt.show():$>=20?setTimeout(()=>tt.show(),200):$>=10&&setTimeout(()=>tt.show(),400))}}function vo(){t(vt)<_a.length-1&&Se(vt)}function bo(){t(vt)>0&&Se(vt,-1)}function De(c){g(le,!0),g(bt,he(c)),g(ge,!1),vs()}function At(){g(le,!1),g(bt,0),Ke=!1,Ce!==null&&(clearTimeout(Ce),Ce=null)}function vs(){if(!t(le)||t(bt)<=0){At();return}console.log(`Autoplay: Starting spin ${t(bt)} rounds left`),ms(),Se(bt,-1)}function yo(){confirm("Reset all statistics?")&&(g(at,0),g(nt,0),g(yt,0),g(rs,0),g(Lt,0),g(cs,0),g(Tt,0),g(ds,0))}var Sa=Ji();Go(c=>{var f=Wi();p(Ye(f)),V(c,f)});var Ea=Ye(Sa);{var xo=c=>{Mi(c,{onloaded:()=>g(wa,!0)})};se(Ea,c=>{t(wa)||c(xo)})}var La=p(Ea,2);{var wo=c=>{var f=Ui(),j=p(w(f),2),$=p(w(j));_(j);var h=p(j,2);{var k=M=>{var z=zi(),U=p(w(z));_(z),oe(()=>K(U,` ${t(st)??""}`)),V(M,z)};se(h,M=>{t(st)&&M(k)})}var A=p(h,2),I=p(w(A));I.nodeValue=` ${xe??""}`,_(A);var P=p(A,2),D=p(w(P));D.nodeValue=` ${_e??""}`,_(P);var B=p(P,2),ne=p(w(B));_(B);var S=p(B,2);{var O=M=>{var z=Di(),U=w(z),G=w(U);_(U);var Re=p(U,2);Ht(Re,17,()=>Ae,Gt,(de,te)=>{var fe=Ni(),Wo=w(fe,!0);_(fe),oe(()=>K(Wo,t(te))),V(de,fe)}),_(z),oe(()=>K(G,`Log (${Ae.length??""})`)),V(M,z)};se(S,M=>{Ae.length>0&&M(O)})}_(f),oe(()=>{K($,` ${t(mt)??""}`),K(ne,` ${Fe.a??""}`)}),V(c,f)};se(La,c=>{(t(mt)!=="Assets loaded successfully!"||t(st))&&c(wo)})}var Ta=p(La,2);{var _o=c=>{var f=Vi(),j=p(w(f),2),$=w(j);_(j);var h=p(j,2);Ht(h,17,()=>t(ot),Gt,(P,D)=>{var B=Gi(),ne=w(B);_(B),oe(S=>K(ne,`${t(D).count??""} × ${$a[t(D).symbol]??""} = ${S??""} pistettä`),[()=>t(D).payout.toFixed(2)]),V(P,B)});var k=p(h,2);{var A=P=>{var D=Hi(),B=w(D),ne=w(B);_(B),_(D),oe(()=>K(ne,`✨ ${t(ot)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),V(P,D)};se(k,P=>{t(ot).length>0&&t(ot)[0].multiplier>1&&P(A)})}var I=p(k,2);_(f),oe(P=>K($,`${P??""} pistettä`),[()=>t(ke).toFixed(2)]),C("click",I,()=>{g(Ne,!1),gs(),console.log("Win popup closed, ready for next spin")}),V(c,f)};se(Ta,c=>{t(ke)>0&&t(Ne)&&c(_o)})}var Ra=p(Ta,2);{var Ao=c=>{var f=Ki(),j=p(w(f),2),$=p(w(j),2),h=w($),k=p(w(h),2),A=w(k,!0);_(k),_(h);var I=p(h,2);{var P=de=>{var te=Yi();C("click",te,At),V(de,te)},D=de=>{var te=Xi();C("click",te,()=>{g(ge,!0),g(Qe,!1)}),V(de,te)};se(I,de=>{t(le)?de(P):de(D,!1)})}_($);var B=p($,2),ne=w(B),S=p(w(ne),2),O=w(S,!0);_(S),_(ne);var M=p(ne,2),z=w(M),U=p(z,2),G=p(U,2);_(M),_(B),$n(2),_(j);var Re=p(j,10);_(f),oe(de=>{x(f,"style",`
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
  `),x(k,"style",`color: ${(t(le)?"#00ff00":"#ff6666")??""}; font-weight: bold;`),K(A,t(le)?`ON (${autoPlayRounds} left)`:"OFF"),K(O,t(J)==="slow"?"🐌 SLOW":t(J)==="medium"?"🏃 MEDIUM":"⚡ FAST"),x(z,"style",`flex: 1; padding: 10px; background: ${(t(J)==="slow"?"linear-gradient(135deg, #4488ff 0%, #66aaff 100%)":"rgba(255,255,255,0.1)")??""}; color: white; border: ${(t(J)==="slow"?"2px solid #ffd700":"1px solid #555")??""}; border-radius: 8px; cursor: pointer; font-size: 0.9em;`),x(U,"style",`flex: 1; padding: 10px; background: ${(t(J)==="medium"?"linear-gradient(135deg, #4488ff 0%, #66aaff 100%)":"rgba(255,255,255,0.1)")??""}; color: white; border: ${(t(J)==="medium"?"2px solid #ffd700":"1px solid #555")??""}; border-radius: 8px; cursor: pointer; font-size: 0.9em;`),x(G,"style",`flex: 1; padding: 10px; background: ${(t(J)==="fast"?"linear-gradient(135deg, #4488ff 0%, #66aaff 100%)":"rgba(255,255,255,0.1)")??""}; color: white; border: ${(t(J)==="fast"?"2px solid #ffd700":"1px solid #555")??""}; border-radius: 8px; cursor: pointer; font-size: 0.9em;`)},[()=>Math.min(i*t(r)*.8,80*window.innerHeight/100)]),C("click",z,()=>{g(J,"slow")}),C("click",U,()=>{g(J,"medium")}),C("click",G,()=>{g(J,"fast")}),C("click",Re,()=>{g(Qe,!1)}),V(c,f)};se(Ra,c=>{t(Qe)&&c(Ao)})}var Pa=p(Ra,2);{var jo=c=>{var f=qi(),j=w(f),$=p(w(j),4),h=w($,!0);_($);var k=p($,2);_(j),_(f),oe(A=>K(h,A),[()=>t(ps).toFixed(2)]),C("click",k,()=>{g(fs,!1),g(Z,!1),g(qe,0),g(ps,0),es()}),C("mouseenter",k,A=>{A.currentTarget.style.transform="scale(1.05)",A.currentTarget.style.boxShadow="0 6px 20px rgba(255, 215, 0, 0.6)"}),C("mouseleave",k,A=>{A.currentTarget.style.transform="scale(1)",A.currentTarget.style.boxShadow="0 4px 15px rgba(255, 215, 0, 0.4)"}),V(c,f)};se(Pa,c=>{t(fs)&&c(jo)})}var Ia=p(Pa,2),bs=w(Ia),jt=w(bs);x(jt,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${o}px;
        height: ${i}px;
      `);var ys=w(jt),xs=p(ys,2),Oa=w(xs);{var ko=c=>{var f=Qi(),j=w(f),$=p(j,2),h=p($,2),k=p(h,2),A=p(k,2),I=p(A,2),P=p(I,2),D=p(P,2),B=p(D,2),ne=p(B,2);_(f),oe(()=>{x(f,"style",`
    position: absolute;
    bottom: ${(b+20)*t(r)}px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.95);
    padding: ${20*t(r)}px;
    border-radius: ${15*t(r)}px;
    border: ${3*t(r)}px solid #0088ff;
    box-shadow: 0 ${8*t(r)}px ${30*t(r)}px rgba(0, 136, 255, 0.6);
    z-index: 2000;
    min-width: ${250*t(r)}px;
  `),x(j,"style",`color: white; font-weight: bold; margin-bottom: ${15*t(r)}px; text-align: center; font-size: ${18*t(r)}px;`),x($,"style",`
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
      `),x(k,"style",`
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
      `),x(I,"style",`
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
      `),x(D,"style",`
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
      `)}),C("click",$,()=>{De(10),g(ge,!1)}),C("click",h,()=>{De(25),g(ge,!1)}),C("click",k,()=>{De(50),g(ge,!1)}),C("click",A,()=>{De(100),g(ge,!1)}),C("click",I,()=>{De(200),g(ge,!1)}),C("click",P,()=>{De(500),g(ge,!1)}),C("click",D,()=>{De(1e3),g(ge,!1)}),C("click",B,()=>{De(5e3),g(ge,!1)}),C("click",ne,()=>{g(ge,!1)}),V(c,f)};se(Oa,c=>{t(ge)&&c(ko)})}var ws=p(Oa,2);x(ws,"src",`${q??""}/Control_leftend.png`);var Rt=p(ws,2),_s=w(Rt),As=w(_s),Ca=w(As),js=p(Ca,2),ks=w(js),Pt=p(ks,2),$o=w(Pt,!0);_(Pt);var Ba=p(Pt,2);_(js),_(As);var $s=p(As,2);x($s,"src",`${q??""}/Control_divider.png`);var Ss=p($s,2),Fa=w(Ss),Es=p(Fa,2),Ls=w(Es),So=w(Ls,!0);_(Ls),_(Es),_(Ss);var Ma=p(Ss,2);x(Ma,"src",`${q??""}/Control_divider.png`),_(_s);var Wa=p(_s,2),Ts=p(Wa,2),Rs=w(Ts),Ps=w(Rs);_(Rs),_(Ts);var za=p(Ts,2),It=w(za),Ot=w(It),Na=p(Ot,2);_(It);var Is=p(It,2);x(Is,"src",`${q??""}/Control_divider.png`);var Ct=p(Is,2),Bt=w(Ct),Da=p(Bt,2);_(Ct);var Os=p(Ct,2);x(Os,"src",`${q??""}/Control_divider.png`);var Cs=p(Os,2),Ua=w(Cs),Bs=p(Ua,2),Fs=w(Bs),Eo=w(Fs,!0);_(Fs),_(Bs),_(Cs);var Ms=p(Cs,2);x(Ms,"src",`${q??""}/Control_divider.png`);var Ga=p(Ms,2),Ha=w(Ga);_(Ga),_(za),_(Rt);var Va=p(Rt,2);x(Va,"src",`${q??""}/Control_rightend.png`),_(xs),_(jt),cn(jt,c=>hs=c,()=>hs);var Ft=p(jt,2);Ft.textContent=`🛠️ DEBUG v${a}`;var Ya=p(Ft,2);const Lo=Ge(()=>t(ke)/t(je)>=50?"jackpot":t(ke)/t(je)>=20?"medium":"small");cn(Oi(Ya,{get winLevel(){return t(Lo)},get winAmount(){return t(ke)},get vinylStartScale(){return ss.vinylStartScale},get vinylEndScale(){return ss.vinylEndScale},get sparkleScale(){return ss.sparkleScale}}),c=>tt=c,()=>tt);var Mt=p(Ya,2),Xa=p(w(Mt),2);Xa.textContent=`v${a}`;var Ws=p(Xa,2),Ka=p(w(Ws),2),To=w(Ka,!0);_(Ka),_(Ws);var zs=p(Ws,2),qa=p(w(zs),2),Ro=w(qa,!0);_(qa),_(zs);var Ns=p(zs,2),Qa=p(w(Ns),2),Po=w(Qa,!0);_(Qa),_(Ns);var Ds=p(Ns,2),Us=p(w(Ds),2),Io=w(Us);_(Us),_(Ds);var Gs=p(Ds,2),Hs=p(w(Gs),2),Oo=w(Hs);_(Hs),_(Gs);var Vs=p(Gs,2),Ja=p(w(Vs),2),Co=w(Ja,!0);_(Ja),_(Vs);var Ys=p(Vs,2),Za=p(w(Ys),2),Bo=w(Za,!0);_(Za),_(Ys);var Xs=p(Ys,2),en=p(w(Xs),2),Fo=w(en);_(en),_(Xs);var tn=p(Xs,2),sn=p(tn,2),rt=w(sn),Mo=w(rt);_(rt);var Wt=p(rt,2),Ks=p(Wt,2);_(sn),_(Mt);var qs=p(Mt,2),zt=w(qs),Qs=p(zt,2);_(qs),_(bs),_(Ia),oe((c,f,j,$,h,k,A,I)=>{x(bs,"style",`
    position: relative;
    width: ${o*t(r)}px;
    height: ${i*t(r)}px;
  `),x(ys,"style",`
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
        height: ${b*t(r)}px;
        display: flex;
        align-items: center;
        z-index: 1000;
      `),x(ws,"style",`height: ${b*t(r)}px; flex-shrink: 0;`),x(Rt,"style",`
    flex-grow: 1;
    height: ${b*t(r)}px;
    background-image: url('${q??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    padding: 0 ${20*t(r)}px;
    position: relative;
    gap: ${20*t(r)}px;
  `),x(Ca,"style",`color: #00ff00; font-size: ${12*t(r)}px; font-weight: bold; line-height: 1; height: ${16*t(r)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(r)}px;`),x(js,"style",`display: flex; gap: ${5*t(r)}px; align-items: center; height: ${44*t(r)}px;`),x(ks,"style",`
              width: ${40*t(r)}px;
              height: ${40*t(r)}px;
              background-image: url('${q??""}/Control_lowerbet_select.png');
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
          `),K($o,c),x(Ba,"style",`
              width: ${40*t(r)}px;
              height: ${40*t(r)}px;
              background-image: url('${q??""}/Control_upperbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            `),x($s,"style",`height: ${b*.8*t(r)}px; flex-shrink: 0;`),x(Fa,"style",`color: #00ff00; font-size: ${12*t(r)}px; font-weight: bold; line-height: 1; height: ${16*t(r)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(r)}px;`),x(Es,"style",`height: ${44*t(r)}px; display: flex; align-items: center;`),x(Ls,"style",`
            color: #fff;
            font-size: ${20*t(r)}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
          `),K(So,f),x(Ma,"style",`height: ${b*.8*t(r)}px; flex-shrink: 0;`),x(Wa,"style",`flex-shrink: 0; width: ${130*t(r)}px;`),da(Rs,1,`play-button-wrapper ${(t(ts)?"glare-animate":"")??""}`,"svelte-13j6fjm"),x(Ps,"style",`
            width: ${110*t(r)}px;
            height: ${110*t(r)}px;
            background-image: url('${q??""}/${(t(le)?"Control_playbutton_stop.png":"Control_playbutton.png")??""}');
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
            background-image: url('${q??""}/${(t(le)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(Ot,"title",t(le)?"Stop Autoplay":"Autoplay"),x(Na,"src",`${q??""}/${(t(le)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),x(Na,"style",`height: ${10*t(r)}px; width: auto; display: block;`),x(Is,"style",`height: ${b*.8*t(r)}px; flex-shrink: 0;`),x(Ct,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*t(r)}px;`),x(Bt,"style",`
            width: ${50*t(r)}px;
            height: ${50*t(r)}px;
            background-image: url('${q??""}/Control_fastplay_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(Bt,"title",`Spin Speed: ${(t(J)==="slow"?"Slow":t(J)==="medium"?"Medium":"Fast")??""}`),x(Da,"src",`${q??""}/${(t(J)==="slow"?"Control_bar_deselect.png":t(J)==="medium"?"Control_half_bar_select.png":"Control_bar_select.png")??""}`),x(Da,"style",`height: ${10*t(r)}px; width: auto; display: block;`),x(Os,"style",`height: ${b*.8*t(r)}px; flex-shrink: 0;`),x(Ua,"style",`color: #00ff00; font-size: ${12*t(r)}px; font-weight: bold; line-height: 1; height: ${16*t(r)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(r)}px;`),x(Bs,"style",`height: ${44*t(r)}px; display: flex; align-items: center;`),x(Fs,"style",`
            color: #fff;
            font-size: ${20*t(r)}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
          `),K(Eo,j),x(Ms,"style",`height: ${b*.8*t(r)}px; flex-shrink: 0;`),x(Ha,"style",`
            width: ${50*t(r)}px;
            height: ${50*t(r)}px;
            background-image: url('${q??""}/Control_menubar.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(Va,"style",`height: ${b*t(r)}px; flex-shrink: 0;`),x(Ft,"style",`
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
  `),x(Mt,"style",`
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
`),K(To,$),K(Ro,h),K(Po,k),x(Us,"style",`color: ${A??""};`),K(Io,`${t(is)??""}%`),x(Hs,"style",`color: ${I??""};`),K(Oo,`${t(ls)??""}%`),K(Co,t(Lt)),K(Bo,t(cs)),K(Fo,`${t(to)??""}%`),rt.disabled=t(ye).length===0,x(rt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(t(ye).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(t(ye).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(t(ye).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(t(ye).length>0?"1":"0.5")??""};
      `),K(Mo,`Download Win Log (${t(ye).length??""})`),Wt.disabled=t(ye).length===0,x(Wt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(t(ye).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(t(ye).length>0?"1":"0.5")??""};
      `),Ks.disabled=t(Z),x(Ks,"style",`
        width: 100%;
        padding: 5px;
        background: ${(t(Z)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(t(Z)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(t(Z)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(t(Z)?"0.5":"1")??""};
      `),x(qs,"style",`
  position: absolute;
  top: ${10*t(r)}px;
  right: ${10*t(r)}px;
  display: flex;
  gap: ${10*t(r)}px;
  z-index: 1001;
`),x(zt,"style",`
      width: ${50*t(r)}px;
      height: ${50*t(r)}px;
      background-image: url('${q??""}/${(t(Le)?"music_on.png":"music_off.png")??""}');
      background-size: contain;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
      background-color: transparent;
    `),x(zt,"title",t(Le)?"Music: ON":"Music: OFF"),x(Qs,"style",`
      width: ${50*t(r)}px;
      height: ${50*t(r)}px;
      background-image: url('${q??""}/${(t(Ie)?"sounds_on.png":"sounds_off.png")??""}');
      background-size: contain;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
      background-color: transparent;
    `),x(Qs,"title",t(Ie)?"Sound: ON":"Sound: OFF")},[()=>t(je).toFixed(2),()=>t(We).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>t(Xe).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>t(at).toLocaleString(),()=>t(nt).toLocaleString(),()=>t(yt).toLocaleString(),()=>parseFloat(t(is))>=95?"#00ff00":parseFloat(t(is))>=85?"#ffff00":"#ff6666",()=>parseFloat(t(ls))>=30?"#00ff00":parseFloat(t(ls))>=20?"#ffff00":"#ff6666"]),C("click",ys,()=>{g(Qe,!t(Qe))}),C("click",ks,bo),C("click",Ba,vo),C("click",Ps,()=>{t(le)?At():Te.some(f=>f.state==="spinning"||f.state==="slowing")?Te.forEach(f=>{f.state==="spinning"?(f.stopDelay=0,f.state="slowing",f.speed=f.targetSpeed*.5):f.state==="slowing"&&(f.speed=f.speed*.3)}):ms()}),C("click",Ot,()=>{t(le)?At():g(ge,!t(ge))}),C("click",Bt,()=>{t(J)==="slow"?g(J,"medium"):t(J)==="medium"?g(J,"fast"):g(J,"slow")}),C("click",Ha,()=>{g(Qe,!t(Qe))}),C("click",Ft,()=>{g(ns,!t(ns))}),C("click",tn,yo),C("click",rt,ao),C("click",Wt,no),C("click",Ks,oo),C("click",zt,qn),C("click",Qs,Qn),V(s,Sa),Yt()}var el=ee('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),tl=ee('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function sl(s,e){Vt(e,!1);let a=it(e,"isAuthenticated",12,!1),n=ia(""),o=ia(!1);const i="slot2024";function l(){t(n)===i?(a(!0),sessionStorage.setItem("gameAuthenticated","true")):(g(o,!0),g(n,""),setTimeout(()=>g(o,!1),3e3))}ga(()=>{a(sessionStorage.getItem("gameAuthenticated")==="true")}),Vo();var d=Ut(),m=Ye(d);{var y=u=>{var v=tl(),b=w(v),E=p(w(b),4),L=w(E);Sr(L),$n(2),_(E);var Q=p(E,2);{var F=T=>{var H=el();V(T,H)};se(Q,T=>{t(o)&&T(F)})}_(b),_(v),Lr(L,()=>t(n),T=>g(n,T)),C("submit",E,Tr(l)),V(u,v)};se(m,u=>{a()||u(y)})}V(s,d),Yt()}var al=ee("<!> <!>",1);function hl(s){let e=ia(!1);var a=al(),n=Ye(a);sl(n,{get isAuthenticated(){return t(e)},set isAuthenticated(l){g(e,l)},$$legacy:!0});var o=p(n,2);{var i=l=>{Zi(l,{})};se(o,l=>{t(e)&&l(i)})}V(s,a)}export{In as A,Tn as C,Mr as R,Ir as S,On as V,hl as _,Pr as u};
