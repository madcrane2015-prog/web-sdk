const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./GlvU-nEo.js","./Cb0119l1.js","./BrW7ntrJ.js","./Fx7Xcyif.js","./CkL9UklL.js","./C2GHuDhf.js","./BaT-16k4.js","./Cj9CD914.js"])))=>i.map(i=>d[i]);
var er=Object.defineProperty;var tr=(s,e,a)=>e in s?er(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var Ee=(s,e,a)=>tr(s,typeof e!="symbol"?e+"":e,a);import{g as sr,l as ar,e as Vt,a as Y,t as ee,n as Fn,i as O,j as nr,k as or}from"./CsxIJThA.js";import{i as rr}from"./DqfWCwGf.js";import{y as Te,j as ir,a8 as lr,F as t,Q as cr,aa as dr,ab as yn,h as xn,e as ia,k as $t,l as pr,ac as zn,w as Wn,ad as ur,q as jn,a7 as fr,U as gr,a2 as wn,ar as la,z as _n,as as hr,at as vr,au as mr,o as br,av as yr,aw as xr,ax as wr,ay as _r,b as Ar,az as kr,aA as $r,a6 as Sr,aB as Er,aC as Lr,D as Tr,L as Rr,p as qt,f as Xe,ah as P,a as Qt,T as g,c as x,s as u,r as w,t as re,I as He,ag as _a,aD as Le,aE as Nn,aF as va}from"./Fx7Xcyif.js";import{_ as An,i as ae,p as he}from"./BrW7ntrJ.js";import{s as q}from"./DfoPkomP.js";import{p as lt,b as kn}from"./C4w3i6Q0.js";import{b as we}from"./B_ZBzHbD.js";import{e as Ye,E as W,a as Pr,C as Aa,Q as ma,V as ba,N as ca,D as ve,H as Ir,p as Je,a0 as ut,a1 as Ze,a2 as Or,w as Ve,a3 as Et,a4 as Dn,a5 as ft,a6 as Fe,a7 as Jt,a8 as Un,a9 as Cr,aa as da,y as pa}from"./Cb0119l1.js";import{A as Br,B as $n,G as Mr,a as Sn}from"./CkL9UklL.js";function Yt(s,e){return e}function Fr(s,e,a,n){for(var o=[],i=e.length,l=0;l<i;l++)mr(e[l].e,o,!0);var p=i>0&&o.length===0&&a!==null;if(p){var v=a.parentNode;br(v),v.append(a),n.clear(),Ge(s,e[0].prev,e[i-1].next)}yr(o,()=>{for(var _=0;_<i;_++){var f=e[_];p||(n.delete(f.k),Ge(s,f.prev,f.next)),xr(f.e,!p)}})}function Xt(s,e,a,n,o,i=null){var l=s,p={flags:e,items:new Map,first:null};Te&&ir();var v=null,_=!1,f=cr(()=>{var m=a();return fr(m)?m:m==null?[]:jn(m)});lr(()=>{var m=t(f),b=m.length;if(_&&b===0)return;_=b===0;let L=!1;if(Te){var T=l.data===dr;T!==(b===0)&&(l=yn(),xn(l),ia(!1),L=!0)}if(Te){for(var Q=null,F,R=0;R<b;R++){if($t.nodeType===8&&$t.data===pr){l=$t,L=!0,ia(!1);break}var H=m[R],ie=n(H,R);F=Gn($t,p,Q,null,H,ie,R,o,e,a),p.items.set(ie,F),Q=F}b>0&&xn(yn())}Te||zr(m,p,l,o,e,n,a),i!==null&&(b===0?v?zn(v):v=Wn(()=>i(l)):v!==null&&ur(v,()=>{v=null})),L&&ia(!0),t(f)}),Te&&(l=$t)}function zr(s,e,a,n,o,i,l){var p=s.length,v=e.items,_=e.first,f=_,m,b=null,L=[],T=[],Q,F,R,H;for(H=0;H<p;H+=1){if(Q=s[H],F=i(Q,H),R=v.get(F),R===void 0){var ie=f?f.e.nodes_start:a;b=Gn(ie,e,b,b===null?e.first:b.next,Q,F,H,n,o,l),v.set(F,b),L=[],T=[],f=b.next;continue}if(Wr(R,Q,H),(R.e.f&la)!==0&&zn(R.e),R!==f){if(m!==void 0&&m.has(R)){if(L.length<T.length){var le=T[0],K;b=le.prev;var ue=L[0],fe=L[L.length-1];for(K=0;K<L.length;K+=1)En(L[K],le,a);for(K=0;K<T.length;K+=1)m.delete(T[K]);Ge(e,ue.prev,fe.next),Ge(e,b,ue),Ge(e,fe,le),f=le,b=fe,H-=1,L=[],T=[]}else m.delete(R),En(R,f,a),Ge(e,R.prev,R.next),Ge(e,R,b===null?e.first:b.next),Ge(e,b,R),b=R;continue}for(L=[],T=[];f!==null&&f.k!==F;)(f.e.f&la)===0&&(m??(m=new Set)).add(f),T.push(f),f=f.next;if(f===null)continue;R=f}L.push(R),b=R,f=R.next}if(f!==null||m!==void 0){for(var _e=m===void 0?[]:jn(m);f!==null;)(f.e.f&la)===0&&_e.push(f),f=f.next;var Ie=_e.length;if(Ie>0){var X=null;Fr(e,_e,X,v)}}_n.first=e.first&&e.first.e,_n.last=b&&b.e}function Wr(s,e,a,n){vr(s.v,e),s.i=a}function Gn(s,e,a,n,o,i,l,p,v,_){var f=(v&wr)!==0,m=(v&_r)===0,b=f?m?gr(o):wn(o):o,L=(v&hr)===0?l:wn(l),T={i:L,v:b,k:i,a:null,e:null,prev:a,next:n};try{return T.e=Wn(()=>p(s,b,L,_),Te),T.e.prev=a&&a.e,T.e.next=n&&n.e,a===null?e.first=T:(a.next=T,a.e.next=T.e),n!==null&&(n.prev=T,n.e.prev=T.e),T}finally{}}function En(s,e,a){for(var n=s.next?s.next.e.nodes_start:a,o=e?e.e.nodes_start:a,i=s.e.nodes_start;i!==n;){var l=Ar(i);o.before(i),i=l}}function Ge(s,e,a){e===null?s.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}const Ln=[...` 	
\r\f \v\uFEFF`];function jr(s,e,a){var n=s==null?"":""+s;if(e&&(n=n?n+" "+e:e),a){for(var o in a)if(a[o])n=n?n+" "+o:o;else if(n.length)for(var i=o.length,l=0;(l=n.indexOf(o,l))>=0;){var p=l+i;(l===0||Ln.includes(n[l-1]))&&(p===n.length||Ln.includes(n[p]))?n=(l===0?"":n.substring(0,l))+n.substring(p+1):l=p}}return n===""?null:n}function Kt(s,e,a,n,o,i){var l=s.__className;if(Te||l!==a){var p=jr(a,n,i);(!Te||p!==s.getAttribute("class"))&&(p==null?s.removeAttribute("class"):e?s.className=p:s.setAttribute("class",p)),s.__className=a}else if(i)for(var v in i){var _=!!i[v];(o==null||_!==!!o[v])&&s.classList.toggle(v,_)}return i}function Nr(s){if(Te){var e=!1,a=()=>{if(!e){if(e=!0,s.hasAttribute("value")){var n=s.value;y(s,"value",null),s.value=n}if(s.hasAttribute("checked")){var o=s.checked;y(s,"checked",null),s.checked=o}}};s.__on_r=a,kr(a),sr()}}function y(s,e,a,n){var o=s.__attributes??(s.__attributes={});Te&&(o[e]=s.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&s.nodeName==="LINK")||o[e]!==(o[e]=a)&&(e==="style"&&"__styles"in s&&(s.__styles={}),e==="loading"&&(s[$r]=a),a==null?s.removeAttribute(e):typeof a!="string"&&Dr(s).includes(e)?s[e]=a:s.setAttribute(e,a))}var Tn=new Map;function Dr(s){var e=Tn.get(s.nodeName);if(e)return e;Tn.set(s.nodeName,e=[]);for(var a,n=s,o=Element.prototype;o!==n;){a=Er(n);for(var i in a)a[i].set&&e.push(i);n=Sr(n)}return e}function Ur(s,e,a=e){var n=Lr();ar(s,"input",o=>{var i=o?s.defaultValue:s.value;if(i=ua(s)?fa(i):i,a(i),n&&i!==(i=e())){var l=s.selectionStart,p=s.selectionEnd;s.value=i??"",p!==null&&(s.selectionStart=l,s.selectionEnd=Math.min(p,s.value.length))}}),(Te&&s.defaultValue!==s.value||Tr(e)==null&&s.value)&&a(ua(s)?fa(s.value):s.value),Rr(()=>{var o=e();ua(s)&&o===fa(s.value)||s.type==="date"&&!o&&!s.value||o!==s.value&&(s.value=o??"")})}function ua(s){var e=s.type;return e==="number"||e==="range"}function fa(s){return s===""?null:+s}function Gr(s){return function(...e){var a=e[0];return a.preventDefault(),s==null?void 0:s.apply(this,e)}}const ya=[];Ye.handleByNamedList(W.Environment,ya);async function Hr(s){if(!s)for(let e=0;e<ya.length;e++){const a=ya[e];if(a.value.test()){await a.value.load();return}}}let St;function Vr(){if(typeof St=="boolean")return St;try{St=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{St=!1}return St}var Hn=(s=>(s[s.NONE=0]="NONE",s[s.COLOR=16384]="COLOR",s[s.STENCIL=1024]="STENCIL",s[s.DEPTH=256]="DEPTH",s[s.COLOR_DEPTH=16640]="COLOR_DEPTH",s[s.COLOR_STENCIL=17408]="COLOR_STENCIL",s[s.DEPTH_STENCIL=1280]="DEPTH_STENCIL",s[s.ALL=17664]="ALL",s))(Hn||{});class Yr{constructor(e){this.items=[],this._name=e}emit(e,a,n,o,i,l,p,v){const{name:_,items:f}=this;for(let m=0,b=f.length;m<b;m++)f[m][_](e,a,n,o,i,l,p,v);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const a=this.items.indexOf(e);return a!==-1&&this.items.splice(a,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Xr=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Vn=class Yn extends Pr{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const a=[...Xr,...this.config.runners??[]];this._addRunners(...a),this._unsafeEvalCheck()}async init(e={}){const a=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Hr(a),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const n in this._systemsHash)e={...this._systemsHash[n].constructor.defaultOptions,...e};e={...Yn.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let n=0;n<this.runners.init.items.length;n++)await this.runners.init.items[n].init(e);this._initOptions=e}render(e,a){let n=e;if(n instanceof Aa&&(n={container:n},a&&(ma(ba,"passing a second argument is deprecated, please use render options instead"),n.target=a.renderTexture)),n.target||(n.target=this.view.renderTarget),n.target===this.view.renderTarget&&(this._lastObjectRendered=n.container,n.clearColor??(n.clearColor=this.background.colorRgba),n.clear??(n.clear=this.background.clearBeforeRender)),n.clearColor){const o=Array.isArray(n.clearColor)&&n.clearColor.length===4;n.clearColor=o?n.clearColor:ca.shared.setValue(n.clearColor).toArray()}n.transform||(n.container.updateLocalTransform(),n.transform=n.container.localTransform),n.container.enableRenderGroup(),this.runners.prerender.emit(n),this.runners.renderStart.emit(n),this.runners.render.emit(n),this.runners.renderEnd.emit(n),this.runners.postrender.emit(n)}resize(e,a,n){const o=this.view.resolution;this.view.resize(e,a,n),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),n!==void 0&&n!==o&&this.runners.resolutionChange.emit(n)}clear(e={}){const a=this;e.target||(e.target=a.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Hn.ALL);const{clear:n,clearColor:o,target:i}=e;ca.shared.setValue(o??this.background.colorRgba),a.renderTarget.clear(i,n,ca.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(a=>{this.runners[a]=new Yr(a)})}_addSystems(e){let a;for(a in e){const n=e[a];this._addSystem(n.value,n.name)}}_addSystem(e,a){const n=new e(this);if(this[a])throw new Error(`Whoops! The name "${a}" is already in use`);this[a]=n,this._systemsHash[a]=n;for(const o in this.runners)this.runners[o].add(n);return this}_addPipes(e,a){const n=a.reduce((o,i)=>(o[i.name]=i.value,o),{});e.forEach(o=>{const i=o.value,l=o.name,p=n[l];this.renderPipes[l]=new i(this,p?new p:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(a=>{a.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Vr())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Vn.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Xn=Vn,Gt;function Kr(s){return Gt!==void 0||(Gt=(()=>{var a;const e={stencil:!0,failIfMajorPerformanceCaveat:s??Xn.defaultOptions.failIfMajorPerformanceCaveat};try{if(!ve.get().getWebGLRenderingContext())return!1;let o=ve.get().createCanvas().getContext("webgl",e);const i=!!((a=o==null?void 0:o.getContextAttributes())!=null&&a.stencil);if(o){const l=o.getExtension("WEBGL_lose_context");l&&l.loseContext()}return o=null,i}catch{return!1}})()),Gt}let Ht;async function qr(s={}){return Ht!==void 0||(Ht=await(async()=>{const e=ve.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(s)).requestDevice(),!0}catch{return!1}})()),Ht}const Rn=["webgl","webgpu","canvas"];async function Qr(s){let e=[];s.preference?(e.push(s.preference),Rn.forEach(i=>{i!==s.preference&&e.push(i)})):e=Rn.slice();let a,n={};for(let i=0;i<e.length;i++){const l=e[i];if(l==="webgpu"&&await qr()){const{WebGPURenderer:p}=await An(async()=>{const{WebGPURenderer:v}=await import("./GlvU-nEo.js");return{WebGPURenderer:v}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);a=p,n={...s,...s.webgpu};break}else if(l==="webgl"&&Kr(s.failIfMajorPerformanceCaveat??Xn.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:p}=await An(async()=>{const{WebGLRenderer:v}=await import("./Cj9CD914.js");return{WebGLRenderer:v}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);a=p,n={...s,...s.webgl};break}else if(l==="canvas")throw n={...s},new Error("CanvasRenderer is not yet implemented")}if(delete n.webgpu,delete n.webgl,!a)throw new Error("No available renderer for the current environment");const o=new a;return await o.init(n),o}const Kn="8.8.1";class qn{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Kn)}static destroy(){}}qn.extension=W.Application;class Jr{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Kn)}destroy(){this._renderer=null}}Jr.extension={type:[W.WebGLSystem,W.WebGPUSystem],name:"initHook",priority:-10};const Qn=class xa{constructor(...e){this.stage=new Aa,e[0]!==void 0&&ma(ba,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Qr(e),xa._plugins.forEach(a=>{a.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return ma(ba,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,a=!1){const n=xa._plugins.slice(0);n.reverse(),n.forEach(o=>{o.destroy.call(this)}),this.stage.destroy(a),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Qn._plugins=[];let Jn=Qn;Ye.handleByList(W.Application,Jn._plugins);Ye.add(qn);class Zn extends Br{constructor(e,a){super();const{textures:n,data:o}=e;Object.keys(o.pages).forEach(i=>{const l=o.pages[parseInt(i,10)],p=n[l.id];this.pages.push({texture:p})}),Object.keys(o.chars).forEach(i=>{const l=o.chars[i],{frame:p,source:v}=n[l.page],_=new Ir(l.x+p.x,l.y+p.y,l.width,l.height),f=new Je({source:v,frame:_});this.chars[i]={id:i.codePointAt(0),xOffset:l.xOffset,yOffset:l.yOffset,xAdvance:l.xAdvance,kerning:l.kerning??{},texture:f}}),this.baseRenderedFontSize=o.fontSize,this.baseMeasurementFontSize=o.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:o.fontSize},this.baseLineOffset=o.baseLineOffset,this.lineHeight=o.lineHeight,this.fontFamily=o.fontFamily,this.distanceField=o.distanceField??{type:"none",range:0},this.url=a}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:a}=this.pages[e];a.destroy(!0)}this.pages=null}static install(e){$n.install(e)}static uninstall(e){$n.uninstall(e)}}const ga={test(s){return typeof s=="string"&&s.startsWith("info face=")},parse(s){const e=s.match(/^[a-z]+\s+.+$/gm),a={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const m in e){const b=e[m].match(/^[a-z]+/gm)[0],L=e[m].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),T={};for(const Q in L){const F=L[Q].split("="),R=F[0],H=F[1].replace(/"/gm,""),ie=parseFloat(H),le=isNaN(ie)?H:ie;T[R]=le}a[b].push(T)}const n={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[o]=a.info,[i]=a.common,[l]=a.distanceField??[];l&&(n.distanceField={range:parseInt(l.distanceRange,10),type:l.fieldType}),n.fontSize=parseInt(o.size,10),n.fontFamily=o.face,n.lineHeight=parseInt(i.lineHeight,10);const p=a.page;for(let m=0;m<p.length;m++)n.pages.push({id:parseInt(p[m].id,10)||0,file:p[m].file});const v={};n.baseLineOffset=n.lineHeight-parseInt(i.base,10);const _=a.char;for(let m=0;m<_.length;m++){const b=_[m],L=parseInt(b.id,10);let T=b.letter??b.char??String.fromCharCode(L);T==="space"&&(T=" "),v[L]=T,n.chars[T]={id:L,page:parseInt(b.page,10)||0,x:parseInt(b.x,10),y:parseInt(b.y,10),width:parseInt(b.width,10),height:parseInt(b.height,10),xOffset:parseInt(b.xoffset,10),yOffset:parseInt(b.yoffset,10),xAdvance:parseInt(b.xadvance,10),kerning:{}}}const f=a.kerning||[];for(let m=0;m<f.length;m++){const b=parseInt(f[m].first,10),L=parseInt(f[m].second,10),T=parseInt(f[m].amount,10);n.chars[v[L]].kerning[v[b]]=T}return n}},Pn={test(s){const e=s;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(s){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},a=s.getElementsByTagName("info")[0],n=s.getElementsByTagName("common")[0],o=s.getElementsByTagName("distanceField")[0];o&&(e.distanceField={type:o.getAttribute("fieldType"),range:parseInt(o.getAttribute("distanceRange"),10)});const i=s.getElementsByTagName("page"),l=s.getElementsByTagName("char"),p=s.getElementsByTagName("kerning");e.fontSize=parseInt(a.getAttribute("size"),10),e.fontFamily=a.getAttribute("face"),e.lineHeight=parseInt(n.getAttribute("lineHeight"),10);for(let _=0;_<i.length;_++)e.pages.push({id:parseInt(i[_].getAttribute("id"),10)||0,file:i[_].getAttribute("file")});const v={};e.baseLineOffset=e.lineHeight-parseInt(n.getAttribute("base"),10);for(let _=0;_<l.length;_++){const f=l[_],m=parseInt(f.getAttribute("id"),10);let b=f.getAttribute("letter")??f.getAttribute("char")??String.fromCharCode(m);b==="space"&&(b=" "),v[m]=b,e.chars[b]={id:m,page:parseInt(f.getAttribute("page"),10)||0,x:parseInt(f.getAttribute("x"),10),y:parseInt(f.getAttribute("y"),10),width:parseInt(f.getAttribute("width"),10),height:parseInt(f.getAttribute("height"),10),xOffset:parseInt(f.getAttribute("xoffset"),10),yOffset:parseInt(f.getAttribute("yoffset"),10),xAdvance:parseInt(f.getAttribute("xadvance"),10),kerning:{}}}for(let _=0;_<p.length;_++){const f=parseInt(p[_].getAttribute("first"),10),m=parseInt(p[_].getAttribute("second"),10),b=parseInt(p[_].getAttribute("amount"),10);e.chars[v[m]].kerning[v[f]]=b}return e}},In={test(s){return typeof s=="string"&&s.includes("<font>")?Pn.test(ve.get().parseXML(s)):!1},parse(s){return Pn.parse(ve.get().parseXML(s))}},Zr=[".xml",".fnt"],ei={extension:{type:W.CacheParser,name:"cacheBitmapFont"},test:s=>s instanceof Zn,getCacheableAssets(s,e){const a={};return s.forEach(n=>{a[n]=e,a[`${n}-bitmap`]=e}),a[`${e.fontFamily}-bitmap`]=e,a}},ti={extension:{type:W.LoadParser,priority:ut.Normal},name:"loadBitmapFont",test(s){return Zr.includes(Ze.extname(s).toLowerCase())},async testParse(s){return ga.test(s)||In.test(s)},async parse(s,e,a){const n=ga.test(s)?ga.parse(s):In.parse(s),{src:o}=e,{pages:i}=n,l=[],p=n.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let m=0;m<i.length;++m){const b=i[m].file;let L=Ze.join(Ze.dirname(o),b);L=Or(L,o),l.push({src:L,data:p})}const v=await a.load(l),_=l.map(m=>v[m.src]);return new Zn({data:n,textures:_},o)},async load(s,e){return await(await ve.get().fetch(s)).text()},async unload(s,e,a){await Promise.all(s.pages.map(n=>a.unload(n.texture.source._sourceOrigin))),s.destroy()}};class si{constructor(e,a=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=a}add(e){e.forEach(a=>{this._assetList.push(a)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],a=Math.min(this._assetList.length,this._maxConcurrent);for(let n=0;n<a;n++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const ai={extension:{type:W.CacheParser,name:"cacheTextureArray"},test:s=>Array.isArray(s)&&s.every(e=>e instanceof Je),getCacheableAssets:(s,e)=>{const a={};return s.forEach(n=>{e.forEach((o,i)=>{a[n+(i===0?"":i+1)]=o})}),a}};async function eo(s){if("Image"in globalThis)return new Promise(e=>{const a=new Image;a.onload=()=>{e(!0)},a.onerror=()=>{e(!1)},a.src=s});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(s)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const ni={extension:{type:W.DetectionParser,priority:1},test:async()=>eo("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async s=>[...s,"avif"],remove:async s=>s.filter(e=>e!=="avif")},On=["png","jpg","jpeg"],oi={extension:{type:W.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async s=>[...s,...On],remove:async s=>s.filter(e=>!On.includes(e))},ri="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function ka(s){return ri?!1:document.createElement("video").canPlayType(s)!==""}const ii={extension:{type:W.DetectionParser,priority:0},test:async()=>ka("video/mp4"),add:async s=>[...s,"mp4","m4v"],remove:async s=>s.filter(e=>e!=="mp4"&&e!=="m4v")},li={extension:{type:W.DetectionParser,priority:0},test:async()=>ka("video/ogg"),add:async s=>[...s,"ogv"],remove:async s=>s.filter(e=>e!=="ogv")},ci={extension:{type:W.DetectionParser,priority:0},test:async()=>ka("video/webm"),add:async s=>[...s,"webm"],remove:async s=>s.filter(e=>e!=="webm")},di={extension:{type:W.DetectionParser,priority:0},test:async()=>eo("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async s=>[...s,"webp"],remove:async s=>s.filter(e=>e!=="webp")};class pi{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,a,n)=>(this._parsersValidated=!1,e[a]=n,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,a){const n={promise:null,parser:null};return n.promise=(async()=>{var l,p;let o=null,i=null;if(a.loadParser&&(i=this._parserHash[a.loadParser],i||Ve(`[Assets] specified load parser "${a.loadParser}" not found while loading ${e}`)),!i){for(let v=0;v<this.parsers.length;v++){const _=this.parsers[v];if(_.load&&((l=_.test)!=null&&l.call(_,e,a,this))){i=_;break}}if(!i)return Ve(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}o=await i.load(e,a,this),n.parser=i;for(let v=0;v<this.parsers.length;v++){const _=this.parsers[v];_.parse&&_.parse&&await((p=_.testParse)==null?void 0:p.call(_,o,a,this))&&(o=await _.parse(o,a,this)||o,n.parser=_)}return o})(),n}async load(e,a){this._parsersValidated||this._validateParsers();let n=0;const o={},i=Dn(e),l=Et(e,_=>({alias:[_],src:_,data:{}})),p=l.length,v=l.map(async _=>{const f=Ze.toAbsolute(_.src);if(!o[_.src])try{this.promiseCache[f]||(this.promiseCache[f]=this._getLoadPromiseAndParser(f,_)),o[_.src]=await this.promiseCache[f].promise,a&&a(++n/p)}catch(m){throw delete this.promiseCache[f],delete o[_.src],new Error(`[Loader.load] Failed to load ${f}.
${m}`)}});return await Promise.all(v),i?o[l[0].src]:o}async unload(e){const n=Et(e,o=>({alias:[o],src:o})).map(async o=>{var p,v;const i=Ze.toAbsolute(o.src),l=this.promiseCache[i];if(l){const _=await l.promise;delete this.promiseCache[i],await((v=(p=l.parser)==null?void 0:p.unload)==null?void 0:v.call(p,_,o,this))}});await Promise.all(n)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,a)=>(a.name?e[a.name]&&Ve(`[Assets] loadParser name conflict "${a.name}"`):Ve("[Assets] loadParser should have a name"),{...e,[a.name]:a}),{})}}function gt(s,e){if(Array.isArray(e)){for(const a of e)if(s.startsWith(`data:${a}`))return!0;return!1}return s.startsWith(`data:${e}`)}const ui=".json",fi="application/json",gi={extension:{type:W.LoadParser,priority:ut.Low},name:"loadJson",test(s){return gt(s,fi)||ft(s,ui)},async load(s){return await(await ve.get().fetch(s)).json()}},hi=".txt",vi="text/plain",mi={name:"loadTxt",extension:{type:W.LoadParser,priority:ut.Low,name:"loadTxt"},test(s){return gt(s,vi)||ft(s,hi)},async load(s){return await(await ve.get().fetch(s)).text()}},bi=["normal","bold","100","200","300","400","500","600","700","800","900"],yi=[".ttf",".otf",".woff",".woff2"],xi=["font/ttf","font/otf","font/woff","font/woff2"],wi=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function _i(s){const e=Ze.extname(s),o=Ze.basename(s,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(p=>p.charAt(0).toUpperCase()+p.slice(1));let i=o.length>0;for(const p of o)if(!p.match(wi)){i=!1;break}let l=o.join(" ");return i||(l=`"${l.replace(/[\\"]/g,"\\$&")}"`),l}const Ai=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function ki(s){return Ai.test(s)?s:encodeURI(s)}const $i={extension:{type:W.LoadParser,priority:ut.Low},name:"loadWebFont",test(s){return gt(s,xi)||ft(s,yi)},async load(s,e){var n,o,i;const a=ve.get().getFontFaceSet();if(a){const l=[],p=((n=e.data)==null?void 0:n.family)??_i(s),v=((i=(o=e.data)==null?void 0:o.weights)==null?void 0:i.filter(f=>bi.includes(f)))??["normal"],_=e.data??{};for(let f=0;f<v.length;f++){const m=v[f],b=new FontFace(p,`url(${ki(s)})`,{..._,weight:m});await b.load(),a.add(b),l.push(b)}return Fe.set(`${p}-and-url`,{url:s,fontFaces:l}),l.length===1?l[0]:l}return Ve("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(s){(Array.isArray(s)?s:[s]).forEach(e=>{Fe.remove(`${e.family}-and-url`),ve.get().getFontFaceSet().delete(e)})}};function $a(s,e=1){var n;const a=(n=Jt.RETINA_PREFIX)==null?void 0:n.exec(s);return a?parseFloat(a[1]):e}function Sa(s,e,a){s.label=a,s._sourceOrigin=a;const n=new Je({source:s,label:a}),o=()=>{delete e.promiseCache[a],Fe.has(a)&&Fe.remove(a)};return n.source.once("destroy",()=>{e.promiseCache[a]&&(Ve("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),o())}),n.once("destroy",()=>{s.destroyed||(Ve("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),o())}),n}const Si=".svg",Ei="image/svg+xml",Li={extension:{type:W.LoadParser,priority:ut.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(s){return gt(s,Ei)||ft(s,Si)},async load(s,e,a){var n;return((n=e.data)==null?void 0:n.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?Ri(s):Ti(s,e,a,this.config.crossOrigin)},unload(s){s.destroy(!0)}};async function Ti(s,e,a,n){var F,R,H;const i=await(await ve.get().fetch(s)).blob(),l=URL.createObjectURL(i),p=new Image;p.src=l,p.crossOrigin=n,await p.decode(),URL.revokeObjectURL(l);const v=document.createElement("canvas"),_=v.getContext("2d"),f=((F=e.data)==null?void 0:F.resolution)||$a(s),m=((R=e.data)==null?void 0:R.width)??p.width,b=((H=e.data)==null?void 0:H.height)??p.height;v.width=m*f,v.height=b*f,_.drawImage(p,0,0,m*f,b*f);const{parseAsGraphicsContext:L,...T}=e.data??{},Q=new Un({resource:v,alphaMode:"premultiply-alpha-on-upload",resolution:f,...T});return Sa(Q,a,s)}async function Ri(s){const a=await(await ve.get().fetch(s)).text(),n=new Mr;return n.svg(a),n}const Pi=`(function () {
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
`;let dt=null,wa=class{constructor(){dt||(dt=URL.createObjectURL(new Blob([Pi],{type:"application/javascript"}))),this.worker=new Worker(dt)}};wa.revokeObjectURL=function(){dt&&(URL.revokeObjectURL(dt),dt=null)};const Ii=`(function () {
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
`;let pt=null;class to{constructor(){pt||(pt=URL.createObjectURL(new Blob([Ii],{type:"application/javascript"}))),this.worker=new Worker(pt)}}to.revokeObjectURL=function(){pt&&(URL.revokeObjectURL(pt),pt=null)};let Cn=0,ha;class Oi{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:a}=new wa;a.addEventListener("message",n=>{a.terminate(),wa.revokeObjectURL(),e(n.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,a){var n;return this._run("loadImageBitmap",[e,(n=a==null?void 0:a.data)==null?void 0:n.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){ha===void 0&&(ha=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<ha&&(this._createdWorkers++,e=new to().worker,e.addEventListener("message",a=>{this._complete(a.data),this._returnWorker(a.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,a){await this._initWorkers();const n=new Promise((o,i)=>{this._queue.push({id:e,arguments:a,resolve:o,reject:i})});return this._next(),n}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const a=this._queue.pop(),n=a.id;this._resolveHash[Cn]={resolve:a.resolve,reject:a.reject},e.postMessage({data:a.arguments,uuid:Cn++,id:n})}}const Bn=new Oi,Ci=[".jpeg",".jpg",".png",".webp",".avif"],Bi=["image/jpeg","image/png","image/webp","image/avif"];async function Mi(s,e){var o;const a=await ve.get().fetch(s);if(!a.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${s}: ${a.status} ${a.statusText}`);const n=await a.blob();return((o=e==null?void 0:e.data)==null?void 0:o.alphaMode)==="premultiplied-alpha"?createImageBitmap(n,{premultiplyAlpha:"none"}):createImageBitmap(n)}const so={name:"loadTextures",extension:{type:W.LoadParser,priority:ut.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(s){return gt(s,Bi)||ft(s,Ci)},async load(s,e,a){var i;let n=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Bn.isImageBitmapSupported()?n=await Bn.loadImageBitmap(s,e):n=await Mi(s,e):n=await new Promise((l,p)=>{n=new Image,n.crossOrigin=this.config.crossOrigin,n.src=s,n.complete?l(n):(n.onload=()=>{l(n)},n.onerror=p)});const o=new Un({resource:n,alphaMode:"premultiply-alpha-on-upload",resolution:((i=e.data)==null?void 0:i.resolution)||$a(s),...e.data});return Sa(o,a,s)},unload(s){s.destroy(!0)}},ao=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Fi=ao.map(s=>`video/${s.substring(1)}`);function zi(s,e,a){a===void 0&&!e.startsWith("data:")?s.crossOrigin=ji(e):a!==!1&&(s.crossOrigin=typeof a=="string"?a:"anonymous")}function Wi(s){return new Promise((e,a)=>{s.addEventListener("canplaythrough",n),s.addEventListener("error",o),s.load();function n(){i(),e()}function o(l){i(),a(l)}function i(){s.removeEventListener("canplaythrough",n),s.removeEventListener("error",o)}})}function ji(s,e=globalThis.location){if(s.startsWith("data:"))return"";e||(e=globalThis.location);const a=new URL(s,document.baseURI);return a.hostname!==e.hostname||a.port!==e.port||a.protocol!==e.protocol?"anonymous":""}const Ni={name:"loadVideo",extension:{type:W.LoadParser,name:"loadVideo"},test(s){const e=gt(s,Fi),a=ft(s,ao);return e||a},async load(s,e,a){var v,_;const n={...da.defaultOptions,resolution:((v=e.data)==null?void 0:v.resolution)||$a(s),alphaMode:((_=e.data)==null?void 0:_.alphaMode)||await Cr(),...e.data},o=document.createElement("video"),i={preload:n.autoLoad!==!1?"auto":void 0,"webkit-playsinline":n.playsinline!==!1?"":void 0,playsinline:n.playsinline!==!1?"":void 0,muted:n.muted===!0?"":void 0,loop:n.loop===!0?"":void 0,autoplay:n.autoPlay!==!1?"":void 0};Object.keys(i).forEach(f=>{const m=i[f];m!==void 0&&o.setAttribute(f,m)}),n.muted===!0&&(o.muted=!0),zi(o,s,n.crossorigin);const l=document.createElement("source");let p;if(s.startsWith("data:"))p=s.slice(5,s.indexOf(";"));else if(!s.startsWith("blob:")){const f=s.split("?")[0].slice(s.lastIndexOf(".")+1).toLowerCase();p=da.MIME_TYPES[f]||`video/${f}`}return l.src=s,p&&(l.type=p),new Promise(f=>{const m=async()=>{const b=new da({...n,resource:o});o.removeEventListener("canplay",m),e.data.preload&&await Wi(o),f(Sa(b,a,s))};o.addEventListener("canplay",m),o.appendChild(l)})},unload(s){s.destroy(!0)}},no={extension:{type:W.ResolveParser,name:"resolveTexture"},test:so.test,parse:s=>{var e;return{resolution:parseFloat(((e=Jt.RETINA_PREFIX.exec(s))==null?void 0:e[1])??"1"),format:s.split(".").pop(),src:s}}},Di={extension:{type:W.ResolveParser,priority:-2,name:"resolveJson"},test:s=>Jt.RETINA_PREFIX.test(s)&&s.endsWith(".json"),parse:no.parse};class Ui{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Jt,this.loader=new pi,this.cache=Fe,this._backgroundLoader=new si(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var i,l;if(this._initialized){Ve("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let p=e.manifest;typeof p=="string"&&(p=await this.load(p)),this.resolver.addManifest(p)}const a=((i=e.texturePreference)==null?void 0:i.resolution)??1,n=typeof a=="number"?[a]:a,o=await this._detectFormats({preferredFormats:(l=e.texturePreference)==null?void 0:l.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:o,resolution:n}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,a){this._initialized||await this.init();const n=Dn(e),o=Et(e).map(p=>{if(typeof p!="string"){const v=this.resolver.getAlias(p);return v.some(_=>!this.resolver.hasKey(_))&&this.add(p),Array.isArray(v)?v[0]:v}return this.resolver.hasKey(p)||this.add({alias:p,src:p}),p}),i=this.resolver.resolve(o),l=await this._mapLoadToResolve(i,a);return n?l[o[0]]:l}addBundle(e,a){this.resolver.addBundle(e,a)}async loadBundle(e,a){this._initialized||await this.init();let n=!1;typeof e=="string"&&(n=!0,e=[e]);const o=this.resolver.resolveBundle(e),i={},l=Object.keys(o);let p=0,v=0;const _=()=>{a==null||a(++p/v)},f=l.map(m=>{const b=o[m];return v+=Object.keys(b).length,this._mapLoadToResolve(b,_).then(L=>{i[m]=L})});return await Promise.all(f),n?i[e[0]]:i}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(a))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolveBundle(e);Object.values(a).forEach(n=>{this._backgroundLoader.add(Object.values(n))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Fe.get(e);const a={};for(let n=0;n<e.length;n++)a[n]=Fe.get(e[n]);return a}async _mapLoadToResolve(e,a){const n=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const o=await this.loader.load(n,a);this._backgroundLoader.active=!0;const i={};return n.forEach(l=>{const p=o[l.src],v=[l.src];l.alias&&v.push(...l.alias),v.forEach(_=>{i[_]=p}),Fe.set(v,p)}),i}async unload(e){this._initialized||await this.init();const a=Et(e).map(o=>typeof o!="string"?o.src:o),n=this.resolver.resolve(a);await this._unloadFromResolved(n)}async unloadBundle(e){this._initialized||await this.init(),e=Et(e);const a=this.resolver.resolveBundle(e),n=Object.keys(a).map(o=>this._unloadFromResolved(a[o]));await Promise.all(n)}async _unloadFromResolved(e){const a=Object.values(e);a.forEach(n=>{Fe.remove(n.src)}),await this.loader.unload(a)}async _detectFormats(e){let a=[];e.preferredFormats&&(a=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const n of e.detections)e.skipDetections||await n.test()?a=await n.add(a):e.skipDetections||(a=await n.remove(a));return a=a.filter((n,o)=>a.indexOf(n)===o),a}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(a=>{a.config&&Object.keys(a.config).filter(n=>n in e).forEach(n=>{a.config[n]=e[n]})})}}const ct=new Ui;Ye.handleByList(W.LoadParser,ct.loader.parsers).handleByList(W.ResolveParser,ct.resolver.parsers).handleByList(W.CacheParser,ct.cache.parsers).handleByList(W.DetectionParser,ct.detections);Ye.add(ai,oi,ni,di,ii,li,ci,gi,mi,$i,Li,so,Ni,ti,ei,no,Di);const Mn={loader:W.LoadParser,resolver:W.ResolveParser,cache:W.CacheParser,detection:W.DetectionParser};Ye.handle(W.Asset,s=>{const e=s.ref;Object.entries(Mn).filter(([a])=>!!e[a]).forEach(([a,n])=>Ye.add(Object.assign(e[a],{extension:e[a].extension??n})))},s=>{const e=s.ref;Object.keys(Mn).filter(a=>!!e[a]).forEach(a=>Ye.remove(e[a]))});var Gi=ee('<div class="win-label svelte-1vsph43">BIG WIN!</div> <div class="win-amount-display svelte-1vsph43"> </div>',1),Hi=Fn('<use href="#sparkle" class="sparkle svelte-1vsph43"></use>'),Vi=Fn('<use href="#vinyl"></use>'),Yi=ee('<div><!> <svg class="vinyl-canvas svelte-1vsph43" viewBox="0 0 1024 800" xmlns="http://www.w3.org/2000/svg"><defs class="svelte-1vsph43"><symbol id="vinyl" viewBox="-200 -200 400 400" class="svelte-1vsph43"><circle cx="0" cy="0" r="180" fill="#0b0b0b" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="150" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.3" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="120" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.25" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="90" fill="none" stroke="#1a1a1a" stroke-width="1.5" opacity="0.2" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="55" fill="var(--label-color)" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="6" fill="#ffffff" class="svelte-1vsph43"></circle><ellipse cx="-15" cy="-15" rx="20" ry="15" fill="#ffffff" opacity="0.3" transform="rotate(-30)" class="svelte-1vsph43"></ellipse></symbol><symbol id="sparkle" viewBox="-12 -12 24 24" class="svelte-1vsph43"><polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ffd966" class="svelte-1vsph43"></polygon><circle cx="0" cy="0" r="2" fill="#ffffff" class="svelte-1vsph43"></circle></symbol><symbol id="confetti" viewBox="-3 -3 6 6" class="svelte-1vsph43"><circle cx="0" cy="0" r="2" fill="var(--confetti-color)" class="svelte-1vsph43"></circle></symbol></defs><!><!></svg></div>');function Xi(s,e){qt(e,!0);let a=lt(e,"winLevel",3,"small"),n=lt(e,"winAmount",3,0),o=lt(e,"vinylStartScale",3,.01),i=lt(e,"vinylEndScale",3,.15),l=lt(e,"sparkleScale",3,.6),p=P(!1),v=P(!1);const _={small:{vinyls:5,sparkles:8,maxRadius:70},medium:{vinyls:12,sparkles:16,maxRadius:100},jackpot:{vinyls:24,sparkles:30,maxRadius:130}},f=He(()=>_[a()]),m=["#f04e37","#ffd966","#ff8533","#4ecdc4","#ff6b9d"];function b(K){const ue=[],Ie=t(f).maxRadius;for(let X=0;X<K;X++){const V=Math.PI*2*X/K+Math.random()*.4,ze=Math.random()*Ie*.7+Ie*.2;ue.push({x:512+Math.cos(V)*ze,y:400+Math.sin(V)*ze,rotation:Math.random()*30-15,scale:i()*(.8+Math.random()*.4),delay:X*.05,color:m[X%m.length]})}return ue}function L(K){const ue=[];for(let fe=0;fe<K;fe++)ue.push({x:100+Math.random()*824,y:50+Math.random()*700,delay:Math.random()*.8,duration:.6+Math.random()*.4,rotation:Math.random()*360});return ue}const T=He(()=>b(t(f).vinyls)),Q=He(()=>L(t(f).sparkles));function F(){g(p,!0),g(v,!0),setTimeout(()=>{g(v,!1),setTimeout(()=>{var K;g(p,!1),(K=e.onComplete)==null||K.call(e)},500)},a()==="jackpot"?4e3:a()==="medium"?3e3:2500)}function R(){g(v,!1),setTimeout(()=>{g(p,!1)},500)}var H=Vt(),ie=Xe(H);{var le=K=>{var ue=Yi();let fe;var _e=x(ue);{var Ie=Ae=>{var ne=Gi(),me=u(Xe(ne),2),et=x(me,!0);w(me),re(Oe=>q(et,Oe),[()=>n().toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),Y(Ae,ne)};ae(_e,Ae=>{n()>0&&Ae(Ie)})}var X=u(_e,2),V=u(x(X));Xt(V,17,()=>t(Q),Yt,(Ae,ne)=>{var me=Hi();re(()=>y(me,"style",`
            --sx: ${t(ne).x??""}px;
            --sy: ${t(ne).y??""}px;
            --duration: ${t(ne).duration??""}s;
            --sparkle-delay: ${t(ne).delay??""}s;
            --sparkle-scale: ${l()??""};
          `)),Y(Ae,me)});var ze=u(V);Xt(ze,17,()=>t(T),Yt,(Ae,ne)=>{var me=Vi();let et;re(()=>{et=Kt(me,0,"vinyl-group svelte-1vsph43",null,et,{floating:t(v)}),y(me,"style",`
            --tx: ${t(ne).x??""}px;
            --ty: ${t(ne).y??""}px;
            --scale: ${t(ne).scale??""};
            --rotation: ${t(ne).rotation??""}deg;
            --delay: ${t(ne).delay??""}s;
            --label-color: ${t(ne).color??""};
            --start-scale: ${o()??""};
          `)}),Y(Ae,me)}),w(X),w(ue),re(()=>fe=Kt(ue,1,"vinyl-win-container svelte-1vsph43",null,fe,{visible:t(v),hiding:!t(v)})),Y(K,ue)};ae(ie,K=>{t(p)&&K(le)})}return Y(s,H),Qt({show:F,hide:R})}var Ki=ee(`<div style="
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
		"> </div></div>`),qi=ee(`<div style="
				position: absolute;
				bottom: 40px;
				left: 50%;
				transform: translateX(-50%);
				color: #fff;
				font-family: Arial, sans-serif;
				font-size: 20px;
				text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
			">Please wait...</div>`),Qi=ee('<div role="button" tabindex="0"><span style="position: absolute; left: -9999px;">Click anywhere to continue</span> <!></div>');function Ji(s,e){qt(e,!0);let a=P(!1),n=P(!1),o=P(!1),i=P(0);_a(()=>{const m=setInterval(()=>{g(i,t(i)+2),t(i)>=100&&(clearInterval(m),g(i,100),setTimeout(()=>{g(n,!0),setTimeout(()=>{g(o,!0)},3e3)},500))},60);return()=>clearInterval(m)});function l(){t(n)&&t(o)&&!t(a)&&(g(a,!0),setTimeout(()=>e.onloaded(),300))}var p=Vt(),v=Xe(p);{var _=m=>{var b=Ki(),L=x(b);y(L,"src",`${we??""}/loading_screen/MadCraneLogo.jpg`);var T=u(L,2),Q=x(T);w(T);var F=u(T,2),R=x(F);w(F),w(b),re(H=>{y(Q,"style",`
				width: ${t(i)??""}%;
				height: 100%;
				background: linear-gradient(90deg, #ff0000, #ff6600);
				transition: width 0.3s ease;
			`),q(R,`Loading... ${H??""}%`)},[()=>Math.round(t(i))]),Y(m,b)},f=m=>{var b=Vt(),L=Xe(b);{var T=Q=>{var F=Qi(),R=u(x(F),2);{var H=ie=>{var le=qi();Y(ie,le)};ae(R,ie=>{t(o)||ie(H)})}w(F),re(()=>y(F,"style",`
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background-image: url('${we??""}/loading_screen/Splash_screen_RockabillyReels.jpeg');
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			cursor: ${(t(o)?"pointer":"default")??""};
			z-index: 10000;
		`)),O("click",F,l),O("keydown",F,ie=>ie.key==="Enter"&&l()),Y(Q,F)};ae(L,Q=>{t(n)&&!t(a)&&Q(T)},!0)}Y(m,b)};ae(v,m=>{t(n)?m(f,!1):m(_)})}Y(s,p),Qt()}var Zi=or('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-1t7b47p"><\/script><!---->',1),el=ee('<p style="color: red;" class="svelte-1t7b47p"><strong class="svelte-1t7b47p">Error:</strong> </p>'),tl=ee('<div class="svelte-1t7b47p"> </div>'),sl=ee('<details class="svelte-1t7b47p"><summary class="svelte-1t7b47p"> </summary> <!></details>'),al=ee(`<div style="
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
  " class="svelte-1t7b47p"><h3 class="svelte-1t7b47p">🎰 Oma-peli Debug</h3> <p class="svelte-1t7b47p"><strong class="svelte-1t7b47p">Status:</strong> </p> <!> <p class="svelte-1t7b47p"><strong class="svelte-1t7b47p">Base:</strong> </p> <p class="svelte-1t7b47p"><strong class="svelte-1t7b47p">BG URL:</strong> </p> <p class="svelte-1t7b47p"><strong class="svelte-1t7b47p">Sample:</strong> </p> <!></div>`),nl=ee('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-1t7b47p"> </div>'),ol=ee('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-1t7b47p"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-1t7b47p"> </span></div>'),rl=ee(`<div style="
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
  " class="svelte-1t7b47p"><h2 style="margin: 0 0 10px 0; font-size: 2em;" class="svelte-1t7b47p">🎉 VOITTO! 🎉</h2> <div style="font-size: 1.5em; font-weight: bold; margin: 10px 0;" class="svelte-1t7b47p"> </div> <!> <!> <button style="
        margin-top: 15px;
        padding: 8px 16px;
        background: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
      " class="svelte-1t7b47p">Jatka pelaamista</button></div>`),il=ee('<button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1em;" class="svelte-1t7b47p">🛑 STOP AUTOPLAY</button>'),ll=ee('<button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1em;" class="svelte-1t7b47p">▶️ START AUTOPLAY</button>'),cl=ee(`<div class="svelte-1t7b47p"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-1t7b47p">💰 MENU</h2> <div class="mobile-menu-controls svelte-1t7b47p" style="display: none; margin-bottom: 20px; padding: 15px; background: rgba(255, 255, 255, 0.05); border-radius: 10px;"><h3 style="margin: 0 0 15px 0; color: #ffd700; font-size: 1.2em;" class="svelte-1t7b47p">🎮 GAME CONTROLS</h3> <div style="margin-bottom: 15px;" class="svelte-1t7b47p"><div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;" class="svelte-1t7b47p"><span style="font-size: 1.1em;" class="svelte-1t7b47p">🔄 Autoplay:</span> <span class="svelte-1t7b47p"> </span></div> <!></div> <div style="margin-bottom: 10px;" class="svelte-1t7b47p"><div style="margin-bottom: 10px;" class="svelte-1t7b47p"><span style="font-size: 1.1em;" class="svelte-1t7b47p">⚡ Spin Speed:</span> <span style="color: #ffd700; font-weight: bold; margin-left: 10px;" class="svelte-1t7b47p"> </span></div> <div style="display: flex; gap: 10px;" class="svelte-1t7b47p"><button class="svelte-1t7b47p">🐌 Slow</button> <button class="svelte-1t7b47p">🏃 Medium</button> <button class="svelte-1t7b47p">⚡ Fast</button></div></div> <div style="border-top: 1px solid #555; margin: 20px 0;" class="svelte-1t7b47p"></div></div> <h3 style="margin: 0 0 15px 0; color: #ffd700; font-size: 1.2em;" class="svelte-1t7b47p">💰 PAYTABLE (81 WAYS)</h3> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-1t7b47p">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-1t7b47p"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-1t7b47p"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-1t7b47p"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-1t7b47p">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t7b47p">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-1t7b47p">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-1t7b47p">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-1t7b47p"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-1t7b47p">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t7b47p">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-1t7b47p">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-1t7b47p">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-1t7b47p">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-1t7b47p"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-1t7b47p">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t7b47p">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-1t7b47p">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-1t7b47p">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-1t7b47p"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-1t7b47p">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t7b47p">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-1t7b47p">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-1t7b47p">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-1t7b47p"> <span style="color: #ffd700;" class="svelte-1t7b47p">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-1t7b47p">Sulje</button></div>`),dl=ee(`<div style="
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
  " class="svelte-1t7b47p"><div style="
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: white;
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      border: 3px solid #ffd700;
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
      max-width: 500px;
      font-family: Arial, sans-serif;
    " class="svelte-1t7b47p"><h1 style="
        margin: 0 0 20px 0;
        font-size: 2.5em;
        color: #ffd700;
        text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
      " class="svelte-1t7b47p">🎰 VAPAAPELIT PÄÄTTYIVÄT! 🎰</h1> <div style="
        font-size: 1.2em;
        margin: 20px 0;
        color: #aaa;
      " class="svelte-1t7b47p">Voitit yhteensä:</div> <div style="
        font-size: 3em;
        font-weight: bold;
        color: #00ff00;
        text-shadow: 0 0 15px rgba(0, 255, 0, 0.8);
        margin: 20px 0;
      " class="svelte-1t7b47p"> </div> <button style="
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
        " class="svelte-1t7b47p">JATKA PERUSPELIIN</button></div></div>`),pl=ee('<div class="svelte-1t7b47p"><div class="svelte-1t7b47p">🔄 Select Rounds</div> <button class="svelte-1t7b47p">10 Rounds</button> <button class="svelte-1t7b47p">25 Rounds</button> <button class="svelte-1t7b47p">50 Rounds</button> <button class="svelte-1t7b47p">100 Rounds</button> <button class="svelte-1t7b47p">200 Rounds</button> <button class="svelte-1t7b47p">500 Rounds</button> <button class="svelte-1t7b47p">1,000 Rounds</button> <button class="svelte-1t7b47p">5,000 Rounds</button> <button class="svelte-1t7b47p">Cancel</button></div>'),ul=ee(`<!>  <!>   <!>   <!>   <!>  <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
" class="svelte-1t7b47p"><div class="svelte-1t7b47p"><div class="svelte-1t7b47p"><button class="svelte-1t7b47p">💰 PAYTABLE</button>  <div class="control-panel-mobile svelte-1t7b47p"><!>  <div class="desktop-controls svelte-1t7b47p" style="display: flex; width: 100%; height: 100%;"><img alt="Left End" class="svelte-1t7b47p"> <div class="svelte-1t7b47p"><div style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;" class="svelte-1t7b47p"><div style="display: flex; flex-direction: column; align-items: center;" class="svelte-1t7b47p"><div class="svelte-1t7b47p">BET</div> <div class="svelte-1t7b47p"><button title="Decrease Bet" class="svelte-1t7b47p"></button> <div class="svelte-1t7b47p"> </div> <button title="Increase Bet" class="svelte-1t7b47p"></button></div></div> <img alt="Divider" class="svelte-1t7b47p"> <div style="display: flex; flex-direction: column; align-items: center;" class="svelte-1t7b47p"><div class="svelte-1t7b47p">BALANCE</div> <div class="svelte-1t7b47p"><div class="svelte-1t7b47p"> </div></div></div> <img alt="Divider" class="svelte-1t7b47p"></div> <div class="svelte-1t7b47p"></div> <div style="position: absolute; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; z-index: 10;" class="svelte-1t7b47p"><div><button class="svelte-1t7b47p"></button></div></div> <div style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;" class="svelte-1t7b47p"><div class="svelte-1t7b47p"><button class="svelte-1t7b47p"></button> <img alt="Status bar" class="svelte-1t7b47p"></div> <img alt="Divider" class="svelte-1t7b47p"> <div class="svelte-1t7b47p"><button class="svelte-1t7b47p"></button> <img alt="Speed bar" class="svelte-1t7b47p"></div> <img alt="Divider" class="svelte-1t7b47p"> <div style="display: flex; flex-direction: column; align-items: center;" class="svelte-1t7b47p"><div class="svelte-1t7b47p">WIN</div> <div class="svelte-1t7b47p"><div class="svelte-1t7b47p"> </div></div></div> <img alt="Divider" class="svelte-1t7b47p"> <div style="display: flex; align-items: center; justify-content: center;" class="svelte-1t7b47p"><button title="Menu" class="svelte-1t7b47p"></button></div></div></div> <img alt="Right End" class="svelte-1t7b47p"></div>   <div class="mobile-controls svelte-1t7b47p" style="display: none; flex-direction: row; width: 100%; height: 100%; align-items: center; justify-content: space-between; padding: 0 10px; gap: 10px;"><div style="flex-shrink: 0; display: flex; align-items: center;" class="svelte-1t7b47p"><button title="Menu" class="svelte-1t7b47p"></button></div> <div style="flex-shrink: 0; display: flex; align-items: center; justify-content: center;" class="svelte-1t7b47p"><div><button class="svelte-1t7b47p"></button></div></div> <div style="flex-shrink: 0; display: flex; flex-direction: column; align-items: center;" class="svelte-1t7b47p"><div class="svelte-1t7b47p">BET</div> <div class="svelte-1t7b47p"><button title="Decrease Bet" class="svelte-1t7b47p"></button> <div class="svelte-1t7b47p"> </div> <button title="Increase Bet" class="svelte-1t7b47p"></button></div></div></div></div></div>  <button class="svelte-1t7b47p"></button> <!>   <div class="debug-panel svelte-1t7b47p"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-1t7b47p">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-1t7b47p"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1t7b47p"><span style="color: #aaa;" class="svelte-1t7b47p">Rounds:</span> <span style="color: #fff;" class="svelte-1t7b47p"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1t7b47p"><span style="color: #aaa;" class="svelte-1t7b47p">Wagered:</span> <span style="color: #ff6666;" class="svelte-1t7b47p"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1t7b47p"><span style="color: #aaa;" class="svelte-1t7b47p">Won:</span> <span style="color: #66ff66;" class="svelte-1t7b47p"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 10px; 
    padding-top: 10px; 
    border-top: 1px solid #555;
    font-weight: bold;
    font-size: 18px;
  " class="svelte-1t7b47p"><span style="color: #ffd700;" class="svelte-1t7b47p">RTP:</span> <span class="svelte-1t7b47p"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
  " class="svelte-1t7b47p"><span style="color: #aaa;" class="svelte-1t7b47p">Hit Freq:</span> <span class="svelte-1t7b47p"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-size: 14px;
  " class="svelte-1t7b47p"><span style="color: #aaa;" class="svelte-1t7b47p">Free Spins Triggered:</span> <span style="color: #66ccff;" class="svelte-1t7b47p"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 4px;
    font-size: 14px;
  " class="svelte-1t7b47p"><span style="color: #aaa;" class="svelte-1t7b47p">Free Spins Played:</span> <span style="color: #66ccff;" class="svelte-1t7b47p"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #555;
    font-size: 14px;
  " class="svelte-1t7b47p"><span style="color: #aaa;" class="svelte-1t7b47p">Empty Slots:</span> <span style="color: #ff9900;" class="svelte-1t7b47p"> </span></div> <button style="
      margin-top: 10px;
      width: 100%;
      padding: 5px;
      background: rgba(255, 100, 100, 0.3);
      color: #fff;
      border: 1px solid #ff6666;
      border-radius: 5px;
      cursor: pointer;
      font-size: 11px;
    " class="svelte-1t7b47p">Reset Stats</button> <div style="
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  " class="svelte-1t7b47p"><button class="svelte-1t7b47p"> </button> <button class="svelte-1t7b47p">Clear Win Log</button> <button class="svelte-1t7b47p">🎰 Test Free Spins</button></div></div> <div class="svelte-1t7b47p"><button class="svelte-1t7b47p"></button> <button class="svelte-1t7b47p"></button></div></div></div>`,1);function fl(s,e){qt(e,!0);const a="1.4.7",n=13,o=1445,i=1e3,l=1.75,p=-25,v=-15,_=175,f=-5,m=750,b=80,L=250,T=0,Q=50,F=.5,R=30,H=-10,le=Math.round(100*l),K=Math.round(le*(700/760)),fe=K+10,_e=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],Ie=typeof window<"u"&&window.location.hostname.includes("github.io"),X=Ie?"/web-sdk/oma-peli/symbols":`${we}/symbols`,V=Ie?"/web-sdk/oma-peli/controls":`${we}/controls`,ze={a:`${X}/Blue_hotrod.jpg`,b:`${X}/Blue_jacket.jpg`,c:`${X}/Blue_rollers.jpg`,d:`${X}/Blue_speakers.jpg`,e:`${X}/Premium_blonde.jpg`,f:`${X}/Premium_brunette.jpg`,g:`${X}/Premium_rocker.jpg`,h:`${X}/New_Wild.jpg`,i:`${X}/Red_burger.jpg`,j:`${X}/Red_fries.jpg`,k:`${X}/Red_milkshake.jpg`,l:`${X}/Scatter.jpg`,emptyslot:`${X}/Emptyslot.jpg`},Ae=`${X}/bg_base.jpg`,ne=`${X}/ReelFrames.png`,me=`${X}/RockABillyReels_logo.png`,et={spin:`${we}/sounds/spin.mp3`,stop:`${we}/sounds/stop.mp3`,win:`${we}/sounds/win.mp3`};let Oe=P(!0),Zt={},N=null,be=null,es=null,ts=null,Re=P(!0),oo=P(!1),ss=P(1100),as=null;const ro={fast:3,medium:7,slow:18};let J=P("medium"),We=P(Math.floor(Math.random()*20)+1);const ht={background:()=>`${we}/music/rockabilly reels loop ${t(We)}.mp3`,freeSpins:`${we}/music/rockabilly-loop_long.mp3`,drumHit:`${we}/music/drum-hit.mp3`,winTheme:`${we}/music/win-stinger.mp3`};function Ea(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(Ea,500);return}const c=window.Howl;try{N=new c({src:[ht.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+t(We)+")"),g(oo,!0)},onloaderror:(d,k)=>{console.warn("⚠️ Background music not found:",k)}}),be=new c({src:[ht.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(d,k)=>console.warn("⚠️ Free spins music not found:",k)}),es=new c({src:[ht.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),ts=new c({src:[ht.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(d){console.error("Failed to initialize music system:",d)}}function La(){const c=t(Z)?be:N;c&&t(Re)&&!c.playing()&&(c.play(),console.log("🎵 "+(t(Z)?"Free spins":"Background")+" music started"))}function io(){if(t(Z))return;const c=Math.floor(Math.random()*20)+1;c===t(We)?g(We,c%20+1):g(We,c),console.log("🎵 Changing to loop #"+t(We)),N&&(N.playing()?(N.fade(N.volume(),0,200),setTimeout(()=>{N.stop(),N.unload()},200)):N.unload());const d=window.Howl;d&&(N=new d({src:[ht.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ New background music loop #"+t(We)+" loaded"),t(Re)&&!t(Z)&&setTimeout(()=>{N&&!N.playing()&&N.play()},300)},onloaderror:(k,S)=>{console.warn("⚠️ Failed to load loop #"+t(We)+":",S)}}))}function lo(){N&&N.playing()&&(N.fade(N.volume(),0,500),setTimeout(()=>N.stop(),500)),be&&be.playing()&&(be.fade(be.volume(),0,500),setTimeout(()=>be.stop(),500))}function ns(){N&&N.playing()&&(N.fade(N.volume(),0,500),setTimeout(()=>N.stop(),500)),be&&be.playing()&&(be.fade(be.volume(),0,500),setTimeout(()=>be.stop(),500)),setTimeout(()=>{t(Re)&&La()},600)}function co(){if(N&&N.playing()){const c=N.volume();N.fade(c,0,1e3),setTimeout(()=>{N.stop(),N.volume(.3)},1e3)}}let Lt=P(!1);function po(){g(Lt,!1),setTimeout(()=>{g(Lt,!0)},10)}let tt=null;const os={vinylStartScale:.01,vinylEndScale:.05,sparkleScale:.1};function uo(){g(Re,!t(Re)),t(Re)?La():lo()}function fo(){g(Oe,!t(Oe))}function go(){es&&t(Re)&&t(Oe)&&es.play()}function ho(){ts&&t(Re)&&t(Oe)&&ts.play()}let Tt=null,rs=null,vt=null,Ce=null,mt=P("Initializing..."),st=P(""),ke=[],Ta=P(!1),je=P(1e3);const Ra=[.4,.8,1,1.6,2,3,5,8,10,15,20,25,30,40,50,60,80,100];let bt=P(5),$e=He(()=>Ra[t(bt)]),Ke=P(0),te=P(!1),yt=P(0),ge=P(!1),is=P(!1),vo=P(0),qe=!1,Be=null,ls=!1,at=P(0),nt=P(0),xt=P(0),cs=P(0),ds=He(()=>t(nt)>0?(t(xt)/t(nt)*100).toFixed(2):"0.00"),ps=He(()=>t(at)>0?(t(cs)/t(at)*100).toFixed(2):"0.00"),Z=P(!1),Ne=P(0),Qe=P(0),Rt=P(0),us=P(0),Pt=P(0),fs=P(0),mo=He(()=>t(Pt)>0?(t(fs)/t(Pt)*100).toFixed(2):"0.00"),ye=P(he([]));function bo(c,d,k){const S=new Date().toLocaleString("fi-FI");let h=`
${"=".repeat(60)}
`;h+=`ROUND #${c} - ${S}
`,h+=`Mode: ${t(Z)?"FREE SPINS":"BASE GAME"}
`,h+=`${"=".repeat(60)}
`,d.forEach(($,A)=>{h+=`
Win ${A+1}:
`,h+=`  Symbol: ${$.symbol} (${Ca[$.symbol]})
`,h+=`  Count: ${$.count} symbols
`,h+=`  Multiplier: ${$.multiplier}x
`,h+=`  Payout: ${$.payout.toFixed(2)}
`,h+=`  Positions: [${$.positions.join(", ")}]
`}),h+=`
${"─".repeat(60)}
`,h+=`TOTAL WIN: ${k.toFixed(2)}
`,h+=`${"=".repeat(60)}
`,t(ye).push(h)}function yo(){const c=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${t(ye).join(`
`)}`,d=new Blob([c],{type:"text/plain"}),k=URL.createObjectURL(d),S=document.createElement("a");S.href=k,S.download=`win-log-${Date.now()}.txt`,S.click(),URL.revokeObjectURL(k)}function xo(){g(ye,he([]))}function wo(){t(Z)||(g(Z,!0),g(Ne,10),g(Qe,0),Le(Rt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),ns())}const _o={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},Ao={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function Pa(c){if(c===6)return Math.random()<.55?"h":"emptyslot";const d=t(Z)?Ao:_o,k=Math.random();let S=0;const h=_e.filter(A=>A!=="h"),$=h.reduce((A,C)=>A+d[C],0);for(const A of h)if(S+=d[A]/$,k<S)return A;return"f"}function Ia(){const c=[];for(let d=0;d<n;d++){const k=Pa(d);c.push(k),Le(Pt),k==="emptyslot"&&Le(fs)}return c}function Oa(c){return c<3?{col:0,row:c}:c<6?{col:1,row:c-3}:c===6?{col:2,row:0}:c<10?{col:3,row:c-7}:{col:4,row:c-10}}function wt(c,d){return c===0?d:c===1?3+d:c===2?6:c===3?7+d:c===4?10+d:-1}function ko(){if(t(Z)){const c=Math.random();return c<.7?3:c<.92?5:10}else{const c=Math.random();return c<.7?1:c<.92?2:3}}const $o={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function So(){var oe;const c=[],d=[];for(let E=0;E<n;E++)_t[E]==="l"&&d.push(E);if(d.length>=5){const E=d.length;g(Ne,t(Ne)+E),t(Z)?console.log(`🎰 FREE SPINS RETRIGGERED! +${E} FREE SPINS! Total: ${t(Ne)}`):(g(Z,!0),g(Qe,0),Le(Rt),console.log(`🎰 FREE SPINS TRIGGERED! ${d.length} scatters = ${E} FREE SPINS!`),ns()),c.push({symbol:"l",count:d.length,payout:0,positions:d,multiplier:1})}const k=[];for(let E=0;E<3;E++)for(let B=0;B<3;B++)for(let z=0;z<1;z++)for(let j=0;j<3;j++)for(let U=0;U<3;U++){const G=[wt(0,E),wt(1,B),wt(2,z),wt(3,j),wt(4,U)];k.push(G)}console.log(`Generated ${k.length} possible paths (should be 81)`);const S=[];for(const E of k){const B=E.map(G=>_t[G]);if(B[0]==="emptyslot"||B[0]==="l")continue;let z=null;for(let G=0;G<B.length;G++)if(B[G]!=="h"&&B[G]!=="emptyslot"&&B[G]!=="l"){z=B[G];break}if(!z)continue;let j=0;const U=new Set;for(let G=0;G<E.length;G++){const Pe=E[G],{col:de}=Oa(Pe),se=B[G];(se===z||se==="h")&&U.add(de)}for(let G=0;G<5&&U.has(G);G++)j++;if(j>=3){const Pe=E[0]%3;S.push({symbol:z,length:j,path:E.slice(0,j),startRow:Pe})}}const h=[],$=new Map;for(const E of S){const B=`${E.symbol}-${E.path.join(",")}`;$.has(B)||$.set(B,[]),$.get(B).push(E)}for(const[E,B]of $.entries()){const z=Math.max(...B.map(U=>U.length)),j=B.find(U=>U.length===z);j&&h.push(j)}const A=[],C=new Map;for(const E of h)C.has(E.symbol)||C.set(E.symbol,[]),C.get(E.symbol).push(E);const I=[];for(const[E,B]of C.entries()){const z=Math.max(...B.map(U=>U.length)),j=B.filter(U=>U.length===z);I.push(...j)}const D=new Map;for(const E of I){const B=`${E.symbol}-${E.length}`;D.has(B)||D.set(B,[]),D.get(B).push(E)}const M=I.length>0?ko():1;for(const[E,B]of D.entries()){const z=B[0],j=(oe=$o[z.symbol])==null?void 0:oe[z.length];if(j!==void 0&&j>0){const U=new Map;for(const se of B)for(let pe=0;pe<se.length;pe++)U.has(pe)||U.set(pe,new Set),U.get(pe).add(se.path[pe]);let G=1;for(let se=0;se<z.length;se++){const pe=U.get(se);G*=pe?pe.size:1}const Pe=j*t($e)*G*M;console.log(`  ${z.length}x${z.symbol}: ${G} ways × ${j}x × ${t($e)} bet × ${M} mult = ${Pe}`);const de=new Set;for(const se of B)se.path.forEach(pe=>de.add(pe));A.push({symbol:z.symbol,count:z.length,payout:Pe,positions:Array.from(de),multiplier:M})}}return c.push(...A),c}let Se=P(0),ot=P(he([])),De=P(!1),Me=P(!1),gs=P(!1),hs=P(0);const Ca={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function vs(c){if(!t(Oe)||!Zt[c])return;const d=Zt[c];d.currentTime=0,d.play().catch(k=>{console.warn("Äänen toisto epäonnistui:",c,k)})}function Eo(c){At.forEach(d=>ce.stage.removeChild(d)),At=[],c.forEach(d=>{d.positions.forEach(k=>{const S=xe[k],h=new Sn().rect(0,0,le,K).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});h.x=S.container.x,h.y=S.container.y,ce.stage.addChild(h),At.push(h);let $=0,A=1;const C=.05;ce.ticker.add(()=>{$+=A*C,$>=.4&&(A=-1),$<=0&&(A=1),h.alpha=.5+$})})})}function ms(){At.forEach(c=>ce.stage.removeChild(c)),At=[]}let _t=Ia(),bs,ce,xe=[],At=[];class Lo{constructor(d,k){Ee(this,"index");Ee(this,"container");Ee(this,"offset",0);Ee(this,"speed",0);Ee(this,"targetSpeed",30);Ee(this,"state","idle");Ee(this,"stopDelay",0);Ee(this,"bounceOffset",0);Ee(this,"bounceSpeed",0);Ee(this,"bounceFrames",0);this.index=d,this.container=k}start(d){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=d}startSynchronized(d){const k=ro[t(J)],S=60+d*k;this.start(S)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const d=t(J)==="slow"?.88:t(J)==="medium"?.92:.95;this.speed*=d,this.speed<2.5&&(this.state="bouncing",this.speed=0,this.offset=0,this.bounceOffset=0,this.bounceSpeed=4,vs("stop"),go())}this.state==="bouncing"&&(this.bounceSpeed*=.8,this.bounceOffset+=this.bounceSpeed,Math.abs(this.bounceSpeed)<.2&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=fe&&(this.offset=0,_t[this.index]=Pa(this.index)))}}draw(){const d=this.container;d.removeChildren();const k=_t[this.index];if(!k||!Tt||!Tt[k])return;const S=this.offset+this.bounceOffset,h=($,A)=>{const C=Tt[$];if(!C)return;const I=new pa(C);I.width=le,I.height=K,I.x=0,I.y=A,d.addChild(I)};h(k,S-fe),h(k,S),h(k,S+fe)}}let r=P(1);_a(async()=>{ce=new Jn,await ce.init({width:o,height:i,backgroundAlpha:0}),bs.appendChild(ce.canvas);const c=()=>{const h=window.innerWidth,$=window.innerHeight,A=h/o,C=$/i,I=$>h,D=h<=768;let M;D&&I?M=Math.min(A*1,C*.95,1.2):D?M=Math.min(A*.98,C*.95,1.1):I?M=Math.min(A*.95,C*.85,1):M=Math.min(A,C,1),g(r,he(M)),ce.stage.scale.set(M),ce.renderer.resize(o,i)};c(),window.addEventListener("resize",c);const d=h=>{(h.code==="Space"||h.key===" ")&&(h.preventDefault(),xe.some(A=>A.state==="spinning"||A.state==="slowing")?(xe.forEach(A=>{A.state==="spinning"?(A.stopDelay=0,A.state="slowing",A.speed=A.targetSpeed*.5):A.state==="slowing"&&(A.speed=A.speed*.3)}),console.log("⚡ Skip spin - kiekot pysähtyvät nopeasti")):It())};window.addEventListener("keydown",d);const k={};try{g(mt,"Loading background and UI images..."),ke.push(`Loading background: ${Ae}`),ke.push(`Loading reel frames: ${ne}`),ke.push(`Loading logo: ${me}`),await ct.load([{alias:"background",src:Ae},{alias:"reelframes",src:ne},{alias:"logo",src:me}]),rs=Je.from("background"),vt=Je.from("reelframes"),Ce=Je.from("logo"),console.log("✅ Background texture created:",rs.width,"x",rs.height),console.log("✅ Reel frames texture created:",vt.width,"x",vt.height),console.log("✅ Logo texture created:",Ce.width,"x",Ce.height),ke.push("✅ All UI images loaded"),g(mt,"Loading symbols...");const h=[];for(const $ of _e)h.push({alias:$,src:ze[$]});await ct.load(h);for(const $ of _e){const A=ze[$];ke.push(`Loading symbol ${$}: ${A}`);try{const C=Je.from($);k[$]=C,console.log(`✅ Symbol ${$} loaded:`,C.width,"x",C.height),ke.push(`✅ Symbol ${$} loaded`)}catch(C){const I=`❌ Failed to load symbol ${$} from ${A}: ${C}`;throw ke.push(I),console.error(I),new Error(I)}}Tt=k,g(mt,"Assets loaded successfully!")}catch(h){g(st,`Asset loading failed: ${h}`),ke.push(t(st)),console.error(t(st));return}console.log("Ladataan ääniefektit...");for(const[h,$]of Object.entries(et)){const A=new Audio;A.src=$,A.preload="auto",A.volume=.7,A.load(),A.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${$} (käytetään hiljaista placeholderia)`)}),Zt[h]=A}[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(h=>({x:h.x+p,y:h.y+v})),xe=[];for(let h=0;h<n;h++){const $=Oa(h),A=$.col,C=$.row,I=300+A*(le+20),D=250+C*(K+15),M=h===6?I+f:I,oe=h===6?D+_:D,E=new Aa;E.x=M+p,E.y=oe+v;const B=new Sn().rect(0,0,le,K).fill(16777215);B.x=E.x,B.y=E.y,E.mask=B,ce.stage.addChild(B),ce.stage.addChild(E),xe.push(new Lo(h,E))}if(vt){const h=new pa(vt);h.scale.set(1),h.x=250,h.y=200,ce.stage.addChild(h),as=h,g(ss,he(h.width)),console.log("Reel frames lisätty:",h.width.toFixed(0),"x",h.height.toFixed(0)),console.log("Control panel leveys päivitetty:",t(ss).toFixed(0))}if(Ce){Ce.source&&(Ce.source.scaleMode="nearest",Ce.source.antialias=!1,Ce.source.update());const h=new pa(Ce);h.roundPixels=!0,h.scale.set(F),h.x=(ce.renderer.width-h.width)/2+R,h.y=H,ce.stage.addChild(h),console.log("Logo lisätty päällimmäiseen layeriin:",h.width.toFixed(0),"x",h.height.toFixed(0))}Ea(),ce.ticker.add(To)});function To(){for(const c of xe)c.update(),c.draw();if(!t(De)&&!ls&&xe.every(c=>c.state==="stopped")){ls=!0,co();const c=So();console.log(`Checking wins, found ${c.length} wins`),c.length>0?(g(ot,he(c)),g(Se,he(c.reduce((d,k)=>d+k.payout,0))),bo(t(at),c,t(Se)),Po(t(Se)),g(De,!0),g(vo,he(Date.now())),console.log(`🎉 VOITTO! ${t(Se)} pistettä! Uusi saldo: ${t(je)}`),console.log(`isShowingWin set to: ${t(De)}, totalWin: ${t(Se)}`),c.forEach(d=>{const k=d.multiplier?` (${d.multiplier}x multiplier)`:"";console.log(`${d.count}x ${d.symbol} = ${d.payout} pistettä${k}`)}),Eo(c),vs("win"),t(te)&&!qe&&(qe=!0,Be=window.setTimeout(()=>{t(De)&&t(te)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),g(De,!1),ms()),Be=window.setTimeout(()=>{qe=!1,ys()},200)},1500))):(console.log("No wins found this spin"),t(te)&&!qe&&(qe=!0,Be=window.setTimeout(()=>{qe=!1,ys()},500))),t(Z)&&t(Ne)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${t(Qe)}`),setTimeout(()=>{g(hs,he(t(Qe))),g(gs,!0)},2e3))}}function It(){if(t(Z)||io(),po(),t(Z)&&t(Ne)>0)Le(Ne,-1),Le(us),console.log(`🎰 FREE SPIN! Remaining: ${t(Ne)}`);else if(!t(Z)){if(t(je)<t($e)){alert(`Not enough credits! Balance: ${t(je)}, Bet: ${t($e)}`),rt();return}g(je,t(je)-t($e)),Le(at),g(nt,t(nt)+t($e))}Be!==null&&(clearTimeout(Be),Be=null),g(ot,he([])),g(Se,0),g(Ke,0),console.log("🔄 lastWin nollattu: "+t(Ke)),g(De,!1),ls=!1,ms(),_t=Ia(),xe.forEach((c,d)=>{c.startSynchronized(d)}),vs("spin")}function Ro(c,d,k=1400){if(typeof window>"u")return;const S=document.getElementById("winLabel");if(!S)return;S.classList.add("rolling");const h=performance.now(),$=d-c,A=I=>1-Math.pow(1-I,3);function C(I){const D=Math.min(1,(I-h)/k),M=c+$*A(D);g(Ke,M),D<1?requestAnimationFrame(C):(g(Ke,he(d)),S.classList.remove("rolling"),S.classList.add("winHit"),setTimeout(()=>S.classList.remove("winHit"),450))}requestAnimationFrame(C)}function Po(c){g(je,t(je)+c),g(xt,t(xt)+c);const d=t(Ke);g(Ke,he(c));const k=c>t($e)*50?2e3:1400;if(Ro(d,c,k),t(Z)&&g(Qe,t(Qe)+c),c>0){Le(cs);const S=c/t($e);S>=10&&ho(),tt&&(S>=50?tt.show():S>=20?setTimeout(()=>tt.show(),200):S>=10&&setTimeout(()=>tt.show(),400))}}function Ba(){t(bt)<Ra.length-1&&Le(bt)}function Ma(){t(bt)>0&&Le(bt,-1)}function Ue(c){g(te,!0),g(yt,he(c)),g(ge,!1),ys()}function rt(){g(te,!1),g(yt,0),qe=!1,Be!==null&&(clearTimeout(Be),Be=null)}function ys(){if(!t(te)||t(yt)<=0){rt();return}console.log(`Autoplay: Starting spin ${t(yt)} rounds left`),It(),Le(yt,-1)}function Io(){confirm("Reset all statistics?")&&(g(at,0),g(nt,0),g(xt,0),g(cs,0),g(Rt,0),g(us,0),g(Pt,0),g(fs,0))}var Fa=ul();nr(c=>{var d=Zi();u(Xe(d)),Y(c,d)});var za=Xe(Fa);{var Oo=c=>{Ji(c,{onloaded:()=>g(Ta,!0)})};ae(za,c=>{t(Ta)||c(Oo)})}var Wa=u(za,2);{var Co=c=>{var d=al(),k=u(x(d),2),S=u(x(k));w(k);var h=u(k,2);{var $=z=>{var j=el(),U=u(x(j));w(j),re(()=>q(U,` ${t(st)??""}`)),Y(z,j)};ae(h,z=>{t(st)&&z($)})}var A=u(h,2),C=u(x(A));C.nodeValue=` ${we??""}`,w(A);var I=u(A,2),D=u(x(I));D.nodeValue=` ${Ae??""}`,w(I);var M=u(I,2),oe=u(x(M));w(M);var E=u(M,2);{var B=z=>{var j=sl(),U=x(j),G=x(U);w(U);var Pe=u(U,2);Xt(Pe,17,()=>ke,Yt,(de,se)=>{var pe=tl(),Zo=x(pe,!0);w(pe),re(()=>q(Zo,t(se))),Y(de,pe)}),w(j),re(()=>q(G,`Log (${ke.length??""})`)),Y(z,j)};ae(E,z=>{ke.length>0&&z(B)})}w(d),re(()=>{q(S,` ${t(mt)??""}`),q(oe,` ${ze.a??""}`)}),Y(c,d)};ae(Wa,c=>{(t(mt)!=="Assets loaded successfully!"||t(st))&&c(Co)})}var ja=u(Wa,2);{var Bo=c=>{var d=rl(),k=u(x(d),2),S=x(k);w(k);var h=u(k,2);Xt(h,17,()=>t(ot),Yt,(I,D)=>{var M=nl(),oe=x(M);w(M),re(E=>q(oe,`${t(D).count??""} × ${Ca[t(D).symbol]??""} = ${E??""} pistettä`),[()=>t(D).payout.toFixed(2)]),Y(I,M)});var $=u(h,2);{var A=I=>{var D=ol(),M=x(D),oe=x(M);w(M),w(D),re(()=>q(oe,`✨ ${t(ot)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),Y(I,D)};ae($,I=>{t(ot).length>0&&t(ot)[0].multiplier>1&&I(A)})}var C=u($,2);w(d),re(I=>q(S,`${I??""} pistettä`),[()=>t(Se).toFixed(2)]),O("click",C,()=>{g(De,!1),ms(),console.log("Win popup closed, ready for next spin")}),Y(c,d)};ae(ja,c=>{t(Se)>0&&t(De)&&c(Bo)})}var Na=u(ja,2);{var Mo=c=>{var d=cl(),k=u(x(d),2),S=u(x(k),2),h=x(S),$=u(x(h),2),A=x($,!0);w($),w(h);var C=u(h,2);{var I=de=>{var se=il();O("click",se,rt),Y(de,se)},D=de=>{var se=ll();O("click",se,()=>{g(ge,!0),g(Me,!1)}),Y(de,se)};ae(C,de=>{t(te)?de(I):de(D,!1)})}w(S);var M=u(S,2),oe=x(M),E=u(x(oe),2),B=x(E,!0);w(E),w(oe);var z=u(oe,2),j=x(z),U=u(j,2),G=u(U,2);w(z),w(M),Nn(2),w(k);var Pe=u(k,10);w(d),re(de=>{y(d,"style",`
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
  `),y($,"style",`color: ${(t(te)?"#00ff00":"#ff6666")??""}; font-weight: bold;`),q(A,t(te)?`ON (${autoPlayRounds} left)`:"OFF"),q(B,t(J)==="slow"?"🐌 SLOW":t(J)==="medium"?"🏃 MEDIUM":"⚡ FAST"),y(j,"style",`flex: 1; padding: 10px; background: ${(t(J)==="slow"?"linear-gradient(135deg, #4488ff 0%, #66aaff 100%)":"rgba(255,255,255,0.1)")??""}; color: white; border: ${(t(J)==="slow"?"2px solid #ffd700":"1px solid #555")??""}; border-radius: 8px; cursor: pointer; font-size: 0.9em;`),y(U,"style",`flex: 1; padding: 10px; background: ${(t(J)==="medium"?"linear-gradient(135deg, #4488ff 0%, #66aaff 100%)":"rgba(255,255,255,0.1)")??""}; color: white; border: ${(t(J)==="medium"?"2px solid #ffd700":"1px solid #555")??""}; border-radius: 8px; cursor: pointer; font-size: 0.9em;`),y(G,"style",`flex: 1; padding: 10px; background: ${(t(J)==="fast"?"linear-gradient(135deg, #4488ff 0%, #66aaff 100%)":"rgba(255,255,255,0.1)")??""}; color: white; border: ${(t(J)==="fast"?"2px solid #ffd700":"1px solid #555")??""}; border-radius: 8px; cursor: pointer; font-size: 0.9em;`)},[()=>Math.min(i*t(r)*.8,80*window.innerHeight/100)]),O("click",j,()=>{g(J,"slow")}),O("click",U,()=>{g(J,"medium")}),O("click",G,()=>{g(J,"fast")}),O("click",Pe,()=>{g(Me,!1)}),Y(c,d)};ae(Na,c=>{t(Me)&&c(Mo)})}var Da=u(Na,2);{var Fo=c=>{var d=dl(),k=x(d),S=u(x(k),4),h=x(S,!0);w(S);var $=u(S,2);w(k),w(d),re(A=>q(h,A),[()=>t(hs).toFixed(2)]),O("click",$,()=>{g(gs,!1),g(Z,!1),g(Qe,0),g(hs,0),ns()}),O("mouseenter",$,A=>{A.currentTarget.style.transform="scale(1.05)",A.currentTarget.style.boxShadow="0 6px 20px rgba(255, 215, 0, 0.6)"}),O("mouseleave",$,A=>{A.currentTarget.style.transform="scale(1)",A.currentTarget.style.boxShadow="0 4px 15px rgba(255, 215, 0, 0.4)"}),Y(c,d)};ae(Da,c=>{t(gs)&&c(Fo)})}var Ua=u(Da,2),xs=x(Ua),kt=x(xs);y(kt,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${o}px;
        height: ${i}px;
      `);var ws=x(kt),_s=u(ws,2),Ga=x(_s);{var zo=c=>{var d=pl(),k=x(d),S=u(k,2),h=u(S,2),$=u(h,2),A=u($,2),C=u(A,2),I=u(C,2),D=u(I,2),M=u(D,2),oe=u(M,2);w(d),re(()=>{y(d,"style",`
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
  `),y(k,"style",`color: white; font-weight: bold; margin-bottom: ${15*t(r)}px; text-align: center; font-size: ${18*t(r)}px;`),y(S,"style",`
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
      `),y(h,"style",`
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
      `),y($,"style",`
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
      `),y(A,"style",`
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
      `),y(C,"style",`
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
      `),y(I,"style",`
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
      `),y(D,"style",`
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
      `),y(M,"style",`
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
      `),y(oe,"style",`
        width: 100%;
        padding: ${10*t(r)}px;
        background: rgba(255, 255, 255, 0.1);
        color: #aaa;
        border: ${1*t(r)}px solid #555;
        border-radius: ${8*t(r)}px;
        cursor: pointer;
        font-size: ${14*t(r)}px;
      `)}),O("click",S,()=>{Ue(10),g(ge,!1)}),O("click",h,()=>{Ue(25),g(ge,!1)}),O("click",$,()=>{Ue(50),g(ge,!1)}),O("click",A,()=>{Ue(100),g(ge,!1)}),O("click",C,()=>{Ue(200),g(ge,!1)}),O("click",I,()=>{Ue(500),g(ge,!1)}),O("click",D,()=>{Ue(1e3),g(ge,!1)}),O("click",M,()=>{Ue(5e3),g(ge,!1)}),O("click",oe,()=>{g(ge,!1)}),Y(c,d)};ae(Ga,c=>{t(ge)&&c(zo)})}var As=u(Ga,2),ks=x(As);y(ks,"src",`${V??""}/Control_leftend.png`);var Ot=u(ks,2),$s=x(Ot),Ss=x($s),Ha=x(Ss),Es=u(Ha,2),Ls=x(Es),Ct=u(Ls,2),Wo=x(Ct,!0);w(Ct);var Va=u(Ct,2);w(Es),w(Ss);var Ts=u(Ss,2);y(Ts,"src",`${V??""}/Control_divider.png`);var Rs=u(Ts,2),Ya=x(Rs),Ps=u(Ya,2),Is=x(Ps),jo=x(Is,!0);w(Is),w(Ps),w(Rs);var Xa=u(Rs,2);y(Xa,"src",`${V??""}/Control_divider.png`),w($s);var Ka=u($s,2),Os=u(Ka,2),Cs=x(Os),Bs=x(Cs);w(Cs),w(Os);var qa=u(Os,2),Bt=x(qa),Mt=x(Bt),Qa=u(Mt,2);w(Bt);var Ms=u(Bt,2);y(Ms,"src",`${V??""}/Control_divider.png`);var Ft=u(Ms,2),zt=x(Ft),Ja=u(zt,2);w(Ft);var Fs=u(Ft,2);y(Fs,"src",`${V??""}/Control_divider.png`);var zs=u(Fs,2),Za=x(zs),Ws=u(Za,2),js=x(Ws),No=x(js,!0);w(js),w(Ws),w(zs);var Ns=u(zs,2);y(Ns,"src",`${V??""}/Control_divider.png`);var en=u(Ns,2),tn=x(en);w(en),w(qa),w(Ot);var sn=u(Ot,2);y(sn,"src",`${V??""}/Control_rightend.png`),w(As);var an=u(As,2),Ds=x(an),nn=x(Ds);w(Ds);var Us=u(Ds,2),Gs=x(Us),Hs=x(Gs);w(Gs),w(Us);var on=u(Us,2),rn=x(on),Vs=u(rn,2),Ys=x(Vs),Wt=u(Ys,2),Do=x(Wt,!0);w(Wt);var ln=u(Wt,2);w(Vs),w(on),w(an),w(_s),w(kt),kn(kt,c=>bs=c,()=>bs);var jt=u(kt,2);jt.textContent=`🛠️ DEBUG v${a}`;var cn=u(jt,2);const Uo=He(()=>t(Se)/t($e)>=50?"jackpot":t(Se)/t($e)>=20?"medium":"small");kn(Xi(cn,{get winLevel(){return t(Uo)},get winAmount(){return t(Se)},get vinylStartScale(){return os.vinylStartScale},get vinylEndScale(){return os.vinylEndScale},get sparkleScale(){return os.sparkleScale}}),c=>tt=c,()=>tt);var Nt=u(cn,2),dn=u(x(Nt),2);dn.textContent=`v${a}`;var Xs=u(dn,2),pn=u(x(Xs),2),Go=x(pn,!0);w(pn),w(Xs);var Ks=u(Xs,2),un=u(x(Ks),2),Ho=x(un,!0);w(un),w(Ks);var qs=u(Ks,2),fn=u(x(qs),2),Vo=x(fn,!0);w(fn),w(qs);var Qs=u(qs,2),Js=u(x(Qs),2),Yo=x(Js);w(Js),w(Qs);var Zs=u(Qs,2),ea=u(x(Zs),2),Xo=x(ea);w(ea),w(Zs);var ta=u(Zs,2),gn=u(x(ta),2),Ko=x(gn,!0);w(gn),w(ta);var sa=u(ta,2),hn=u(x(sa),2),qo=x(hn,!0);w(hn),w(sa);var aa=u(sa,2),vn=u(x(aa),2),Qo=x(vn);w(vn),w(aa);var mn=u(aa,2),bn=u(mn,2),it=x(bn),Jo=x(it);w(it);var Dt=u(it,2),na=u(Dt,2);w(bn),w(Nt);var oa=u(Nt,2),Ut=x(oa),ra=u(Ut,2);w(oa),w(xs),w(Ua),re((c,d,k,S,h,$,A,C)=>{y(xs,"style",`
    position: relative;
    width: ${o*t(r)}px;
    height: ${i*t(r)}px;
  `),y(ws,"style",`
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
        `),y(_s,"style",`
        position: absolute;
        left: ${((as?as.x:L)+T)*t(r)}px;
        top: ${(m+Q)*t(r)}px;
        width: ${t(ss)*t(r)}px;
        height: ${b*t(r)}px;
        display: flex;
        align-items: center;
        z-index: 1000;
      `),y(ks,"style",`height: ${b*t(r)}px; flex-shrink: 0;`),y(Ot,"style",`
    flex-grow: 1;
    height: ${b*t(r)}px;
    background-image: url('${V??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    padding: 0 ${20*t(r)}px;
    position: relative;
    gap: ${20*t(r)}px;
  `),y(Ha,"style",`color: #00ff00; font-size: ${12*t(r)}px; font-weight: bold; line-height: 1; height: ${16*t(r)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(r)}px;`),y(Es,"style",`display: flex; gap: ${5*t(r)}px; align-items: center; height: ${44*t(r)}px;`),y(Ls,"style",`
              width: ${40*t(r)}px;
              height: ${40*t(r)}px;
              background-image: url('${V??""}/Control_lowerbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            `),y(Ct,"style",`
            color: #fff;
            font-size: ${18*t(r)}px;
            font-weight: bold;
            min-width: ${80*t(r)}px;
            text-align: center;
            font-family: 'Courier New', monospace;
          `),q(Wo,c),y(Va,"style",`
              width: ${40*t(r)}px;
              height: ${40*t(r)}px;
              background-image: url('${V??""}/Control_upperbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            `),y(Ts,"style",`height: ${b*.8*t(r)}px; flex-shrink: 0;`),y(Ya,"style",`color: #00ff00; font-size: ${12*t(r)}px; font-weight: bold; line-height: 1; height: ${16*t(r)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(r)}px;`),y(Ps,"style",`height: ${44*t(r)}px; display: flex; align-items: center;`),y(Is,"style",`
            color: #fff;
            font-size: ${20*t(r)}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
          `),q(jo,d),y(Xa,"style",`height: ${b*.8*t(r)}px; flex-shrink: 0;`),y(Ka,"style",`flex-shrink: 0; width: ${130*t(r)}px;`),Kt(Cs,1,`play-button-wrapper ${(t(Lt)?"glare-animate":"")??""}`,"svelte-1t7b47p"),y(Bs,"style",`
            width: ${110*t(r)}px;
            height: ${110*t(r)}px;
            background-image: url('${V??""}/${(t(te)?"Control_playbutton_stop.png":"Control_playbutton.png")??""}');
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
          `),y(Bs,"title",t(te)?"STOP AUTOPLAY":"SPIN"),y(Bt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*t(r)}px;`),y(Mt,"style",`
            width: ${50*t(r)}px;
            height: ${50*t(r)}px;
            background-image: url('${V??""}/${(t(te)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(Mt,"title",t(te)?"Stop Autoplay":"Autoplay"),y(Qa,"src",`${V??""}/${(t(te)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),y(Qa,"style",`height: ${10*t(r)}px; width: auto; display: block;`),y(Ms,"style",`height: ${b*.8*t(r)}px; flex-shrink: 0;`),y(Ft,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*t(r)}px;`),y(zt,"style",`
            width: ${50*t(r)}px;
            height: ${50*t(r)}px;
            background-image: url('${V??""}/Control_fastplay_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(zt,"title",`Spin Speed: ${(t(J)==="slow"?"Slow":t(J)==="medium"?"Medium":"Fast")??""}`),y(Ja,"src",`${V??""}/${(t(J)==="slow"?"Control_bar_deselect.png":t(J)==="medium"?"Control_half_bar_select.png":"Control_bar_select.png")??""}`),y(Ja,"style",`height: ${10*t(r)}px; width: auto; display: block;`),y(Fs,"style",`height: ${b*.8*t(r)}px; flex-shrink: 0;`),y(Za,"style",`color: #00ff00; font-size: ${12*t(r)}px; font-weight: bold; line-height: 1; height: ${16*t(r)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(r)}px;`),y(Ws,"style",`height: ${44*t(r)}px; display: flex; align-items: center;`),y(js,"style",`
            color: #fff;
            font-size: ${20*t(r)}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
          `),q(No,k),y(Ns,"style",`height: ${b*.8*t(r)}px; flex-shrink: 0;`),y(tn,"style",`
            width: ${50*t(r)}px;
            height: ${50*t(r)}px;
            background-image: url('${V??""}/Control_menubar.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(sn,"style",`height: ${b*t(r)}px; flex-shrink: 0;`),y(nn,"style",`
        width: ${50*t(r)}px;
        height: ${50*t(r)}px;
        background-image: url('${V??""}/Control_menubar.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),Kt(Gs,1,`play-button-wrapper ${(t(Lt)?"glare-animate":"")??""}`,"svelte-1t7b47p"),y(Hs,"style",`
          width: ${90*t(r)}px;
          height: ${90*t(r)}px;
          background-image: url('${V??""}/${(t(te)?"Control_playbutton_stop.png":"Control_playbutton.png")??""}');
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
        `),y(Hs,"title",t(te)?"STOP AUTOPLAY":"SPIN"),y(rn,"style",`color: #00ff00; font-size: ${10*t(r)}px; font-weight: bold; margin-bottom: ${3*t(r)}px;`),y(Vs,"style",`display: flex; gap: ${8*t(r)}px; align-items: center;`),y(Ys,"style",`
          width: ${45*t(r)}px;
          height: ${45*t(r)}px;
          background-image: url('${V??""}/Control_lowerbet_select.png');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),y(Wt,"style",`
        color: #fff;
        font-size: ${16*t(r)}px;
        font-weight: bold;
        min-width: ${70*t(r)}px;
        text-align: center;
        font-family: 'Courier New', monospace;
      `),q(Do,c),y(ln,"style",`
          width: ${45*t(r)}px;
          height: ${45*t(r)}px;
          background-image: url('${V??""}/Control_upperbet_select.png');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),y(jt,"style",`
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
  `),y(Nt,"style",`
  position: absolute;
  top: 20px;
  left: 20px;
  display: ${(t(is)?"block":"none")??""};
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
`),q(Go,S),q(Ho,h),q(Vo,$),y(Js,"style",`color: ${A??""};`),q(Yo,`${t(ds)??""}%`),y(ea,"style",`color: ${C??""};`),q(Xo,`${t(ps)??""}%`),q(Ko,t(Rt)),q(qo,t(us)),q(Qo,`${t(mo)??""}%`),it.disabled=t(ye).length===0,y(it,"style",`
        width: 100%;
        padding: 5px;
        background: ${(t(ye).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(t(ye).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(t(ye).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(t(ye).length>0?"1":"0.5")??""};
      `),q(Jo,`Download Win Log (${t(ye).length??""})`),Dt.disabled=t(ye).length===0,y(Dt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(t(ye).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(t(ye).length>0?"1":"0.5")??""};
      `),na.disabled=t(Z),y(na,"style",`
        width: 100%;
        padding: 5px;
        background: ${(t(Z)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(t(Z)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(t(Z)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(t(Z)?"0.5":"1")??""};
      `),y(oa,"style",`
  position: absolute;
  top: ${10*t(r)}px;
  right: ${10*t(r)}px;
  display: flex;
  gap: ${10*t(r)}px;
  z-index: 1001;
`),y(Ut,"style",`
      width: ${50*t(r)}px;
      height: ${50*t(r)}px;
      background-image: url('${V??""}/${(t(Re)?"music_on.png":"music_off.png")??""}');
      background-size: contain;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
      background-color: transparent;
    `),y(Ut,"title",t(Re)?"Music: ON":"Music: OFF"),y(ra,"style",`
      width: ${50*t(r)}px;
      height: ${50*t(r)}px;
      background-image: url('${V??""}/${(t(Oe)?"sounds_on.png":"sounds_off.png")??""}');
      background-size: contain;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
      background-color: transparent;
    `),y(ra,"title",t(Oe)?"Sound: ON":"Sound: OFF")},[()=>t($e).toFixed(2),()=>t(je).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>t(Ke).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>t(at).toLocaleString(),()=>t(nt).toLocaleString(),()=>t(xt).toLocaleString(),()=>parseFloat(t(ds))>=95?"#00ff00":parseFloat(t(ds))>=85?"#ffff00":"#ff6666",()=>parseFloat(t(ps))>=30?"#00ff00":parseFloat(t(ps))>=20?"#ffff00":"#ff6666"]),O("click",ws,()=>{g(Me,!t(Me))}),O("click",Ls,Ma),O("click",Va,Ba),O("click",Bs,()=>{t(te)?rt():xe.some(d=>d.state==="spinning"||d.state==="slowing")?xe.forEach(d=>{d.state==="spinning"?(d.stopDelay=0,d.state="slowing",d.speed=d.targetSpeed*.5):d.state==="slowing"&&(d.speed=d.speed*.3)}):It()}),O("click",Mt,()=>{t(te)?rt():g(ge,!t(ge))}),O("click",zt,()=>{t(J)==="slow"?g(J,"medium"):t(J)==="medium"?g(J,"fast"):g(J,"slow")}),O("click",tn,()=>{g(Me,!t(Me))}),O("click",nn,()=>{g(Me,!t(Me))}),O("click",Hs,()=>{t(te)?rt():xe.some(d=>d.state==="spinning"||d.state==="slowing")?xe.forEach(d=>{d.state==="spinning"?(d.stopDelay=0,d.state="slowing",d.speed=d.targetSpeed*.5):d.state==="slowing"&&(d.speed=d.speed*.3)}):It()}),O("click",Ys,Ma),O("click",ln,Ba),O("click",jt,()=>{g(is,!t(is))}),O("click",mn,Io),O("click",it,yo),O("click",Dt,xo),O("click",na,wo),O("click",Ut,uo),O("click",ra,fo),Y(s,Fa),Qt()}var gl=ee('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),hl=ee('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function vl(s,e){qt(e,!1);let a=lt(e,"isAuthenticated",12,!1),n=va(""),o=va(!1);const i="slot2024";function l(){t(n)===i?(a(!0),sessionStorage.setItem("gameAuthenticated","true")):(g(o,!0),g(n,""),setTimeout(()=>g(o,!1),3e3))}_a(()=>{a(sessionStorage.getItem("gameAuthenticated")==="true")}),rr();var p=Vt(),v=Xe(p);{var _=f=>{var m=hl(),b=x(m),L=u(x(b),4),T=x(L);Nr(T),Nn(2),w(L);var Q=u(L,2);{var F=R=>{var H=gl();Y(R,H)};ae(Q,R=>{t(o)&&R(F)})}w(b),w(m),Ur(T,()=>t(n),R=>g(n,R)),O("submit",L,Gr(l)),Y(f,m)};ae(v,f=>{a()||f(_)})}Y(s,p),Qt()}var ml=ee("<!> <!>",1);function Tl(s){let e=va(!1);var a=ml(),n=Xe(a);vl(n,{get isAuthenticated(){return t(e)},set isAuthenticated(l){g(e,l)},$$legacy:!0});var o=u(n,2);{var i=l=>{fl(l,{})};ae(o,l=>{t(e)&&l(i)})}Y(s,a)}export{Xn as A,Hn as C,Jr as R,Yr as S,Kn as V,Tl as _,Vr as u};
