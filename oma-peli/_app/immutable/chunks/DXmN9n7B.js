const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./D_BOgN0x.js","./l1Sqtw7g.js","./BrW7ntrJ.js","./Fx7Xcyif.js","./DUH9uncm.js","./C2GHuDhf.js","./F-xVlx2F.js","./Bq3mD3i6.js"])))=>i.map(i=>d[i]);
var Fn=Object.defineProperty;var Wn=(s,e,a)=>e in s?Fn(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var $e=(s,e,a)=>Wn(s,typeof e!="symbol"?e+"":e,a);import{g as zn,l as jn,e as Ut,a as V,t as ee,n as yr,i as M,j as Dn,k as Nn}from"./CsxIJThA.js";import{i as Un}from"./DqfWCwGf.js";import{y as Ee,j as Gn,a8 as Hn,F as t,Q as Yn,aa as Vn,ab as er,h as tr,e as Vs,k as At,l as Xn,ac as xr,w as wr,ad as Kn,q as _r,a7 as qn,U as Qn,a2 as sr,ar as Xs,z as ar,as as Jn,at as Zn,au as eo,o as to,av as so,aw as ao,ax as ro,ay as no,b as oo,az as io,aA as lo,a6 as co,aB as fo,aC as po,D as uo,L as ho,p as Yt,f as Ye,ah as R,a as Vt,T as h,c as w,s as p,r as _,t as ie,I as ge,ag as ca,aD as Se,aE as kr,aF as sa}from"./Fx7Xcyif.js";import{_ as rr,i as re,p as be}from"./BrW7ntrJ.js";import{s as K}from"./DfoPkomP.js";import{p as rt,b as nr}from"./C4w3i6Q0.js";import{b as we}from"./DeJdJvhY.js";import{e as He,E as j,a as go,C as da,Q as aa,V as ra,N as Ks,D as ye,H as vo,p as ot,ab as ct,ac as qe,ad as mo,w as Ge,ae as St,af as Ar,ag as dt,a9 as Ce,ah as Xt,a1 as $r,ai as bo,aj as qs,y as Qs}from"./l1Sqtw7g.js";import{A as yo,B as or,G as xo,a as ir}from"./DUH9uncm.js";function Gt(s,e){return e}function wo(s,e,a,r){for(var n=[],o=e.length,l=0;l<o;l++)eo(e[l].e,n,!0);var d=o>0&&n.length===0&&a!==null;if(d){var v=a.parentNode;to(v),v.append(a),r.clear(),Ue(s,e[0].prev,e[o-1].next)}so(n,()=>{for(var b=0;b<o;b++){var u=e[b];d||(r.delete(u.k),Ue(s,u.prev,u.next)),ao(u.e,!d)}})}function Ht(s,e,a,r,n,o=null){var l=s,d={flags:e,items:new Map,first:null};Ee&&Gn();var v=null,b=!1,u=Yn(()=>{var m=a();return qn(m)?m:m==null?[]:_r(m)});Hn(()=>{var m=t(u),x=m.length;if(b&&x===0)return;b=x===0;let L=!1;if(Ee){var T=l.data===Vn;T!==(x===0)&&(l=er(),tr(l),Vs(!1),L=!0)}if(Ee){for(var J=null,F,P=0;P<x;P++){if(At.nodeType===8&&At.data===Xn){l=At,L=!0,Vs(!1);break}var X=m[P],te=r(X,P);F=Sr(At,d,J,null,X,te,P,n,e,a),d.items.set(te,F),J=F}x>0&&tr(er())}Ee||_o(m,d,l,n,e,r,a),o!==null&&(x===0?v?xr(v):v=wr(()=>o(l)):v!==null&&Kn(v,()=>{v=null})),L&&Vs(!0),t(u)}),Ee&&(l=At)}function _o(s,e,a,r,n,o,l){var d=s.length,v=e.items,b=e.first,u=b,m,x=null,L=[],T=[],J,F,P,X;for(X=0;X<d;X+=1){if(J=s[X],F=o(J,X),P=v.get(F),P===void 0){var te=u?u.e.nodes_start:a;x=Sr(te,e,x,x===null?e.first:x.next,J,F,X,r,n,l),v.set(F,x),L=[],T=[],u=x.next;continue}if(ko(P,J,X),(P.e.f&Xs)!==0&&xr(P.e),P!==u){if(m!==void 0&&m.has(P)){if(L.length<T.length){var ue=T[0],q;x=ue.prev;var D=L[0],N=L[L.length-1];for(q=0;q<L.length;q+=1)lr(L[q],ue,a);for(q=0;q<T.length;q+=1)m.delete(T[q]);Ue(e,D.prev,N.next),Ue(e,x,D),Ue(e,N,ue),u=ue,x=N,X-=1,L=[],T=[]}else m.delete(P),lr(P,u,a),Ue(e,P.prev,P.next),Ue(e,P,x===null?e.first:x.next),Ue(e,x,P),x=P;continue}for(L=[],T=[];u!==null&&u.k!==F;)(u.e.f&Xs)===0&&(m??(m=new Set)).add(u),T.push(u),u=u.next;if(u===null)continue;P=u}L.push(P),x=P,u=P.next}if(u!==null||m!==void 0){for(var _e=m===void 0?[]:_r(m);u!==null;)(u.e.f&Xs)===0&&_e.push(u),u=u.next;var Me=_e.length;if(Me>0){var ve=null;wo(e,_e,ve,v)}}ar.first=e.first&&e.first.e,ar.last=x&&x.e}function ko(s,e,a,r){Zn(s.v,e),s.i=a}function Sr(s,e,a,r,n,o,l,d,v,b){var u=(v&ro)!==0,m=(v&no)===0,x=u?m?Qn(n):sr(n):n,L=(v&Jn)===0?l:sr(l),T={i:L,v:x,k:o,a:null,e:null,prev:a,next:r};try{return T.e=wr(()=>d(s,x,L,b),Ee),T.e.prev=a&&a.e,T.e.next=r&&r.e,a===null?e.first=T:(a.next=T,a.e.next=T.e),r!==null&&(r.prev=T,r.e.prev=T.e),T}finally{}}function lr(s,e,a){for(var r=s.next?s.next.e.nodes_start:a,n=e?e.e.nodes_start:a,o=s.e.nodes_start;o!==r;){var l=oo(o);n.before(o),o=l}}function Ue(s,e,a){e===null?s.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}const cr=[...` 	
\r\f \v\uFEFF`];function Ao(s,e,a){var r=s==null?"":""+s;if(e&&(r=r?r+" "+e:e),a){for(var n in a)if(a[n])r=r?r+" "+n:n;else if(r.length)for(var o=n.length,l=0;(l=r.indexOf(n,l))>=0;){var d=l+o;(l===0||cr.includes(r[l-1]))&&(d===r.length||cr.includes(r[d]))?r=(l===0?"":r.substring(0,l))+r.substring(d+1):l=d}}return r===""?null:r}function na(s,e,a,r,n,o){var l=s.__className;if(Ee||l!==a){var d=Ao(a,r,o);(!Ee||d!==s.getAttribute("class"))&&(d==null?s.removeAttribute("class"):e?s.className=d:s.setAttribute("class",d)),s.__className=a}else if(o)for(var v in o){var b=!!o[v];(n==null||b!==!!n[v])&&s.classList.toggle(v,b)}return o}function $o(s){if(Ee){var e=!1,a=()=>{if(!e){if(e=!0,s.hasAttribute("value")){var r=s.value;y(s,"value",null),s.value=r}if(s.hasAttribute("checked")){var n=s.checked;y(s,"checked",null),s.checked=n}}};s.__on_r=a,io(a),zn()}}function y(s,e,a,r){var n=s.__attributes??(s.__attributes={});Ee&&(n[e]=s.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&s.nodeName==="LINK")||n[e]!==(n[e]=a)&&(e==="style"&&"__styles"in s&&(s.__styles={}),e==="loading"&&(s[lo]=a),a==null?s.removeAttribute(e):typeof a!="string"&&So(s).includes(e)?s[e]=a:s.setAttribute(e,a))}var dr=new Map;function So(s){var e=dr.get(s.nodeName);if(e)return e;dr.set(s.nodeName,e=[]);for(var a,r=s,n=Element.prototype;n!==r;){a=fo(r);for(var o in a)a[o].set&&e.push(o);r=co(r)}return e}function Eo(s,e,a=e){var r=po();jn(s,"input",n=>{var o=n?s.defaultValue:s.value;if(o=Js(s)?Zs(o):o,a(o),r&&o!==(o=e())){var l=s.selectionStart,d=s.selectionEnd;s.value=o??"",d!==null&&(s.selectionStart=l,s.selectionEnd=Math.min(d,s.value.length))}}),(Ee&&s.defaultValue!==s.value||uo(e)==null&&s.value)&&a(Js(s)?Zs(s.value):s.value),ho(()=>{var n=e();Js(s)&&n===Zs(s.value)||s.type==="date"&&!n&&!s.value||n!==s.value&&(s.value=n??"")})}function Js(s){var e=s.type;return e==="number"||e==="range"}function Zs(s){return s===""?null:+s}function Lo(s){return function(...e){var a=e[0];return a.preventDefault(),s==null?void 0:s.apply(this,e)}}const oa=[];He.handleByNamedList(j.Environment,oa);async function Po(s){if(!s)for(let e=0;e<oa.length;e++){const a=oa[e];if(a.value.test()){await a.value.load();return}}}let $t;function To(){if(typeof $t=="boolean")return $t;try{$t=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{$t=!1}return $t}var Er=(s=>(s[s.NONE=0]="NONE",s[s.COLOR=16384]="COLOR",s[s.STENCIL=1024]="STENCIL",s[s.DEPTH=256]="DEPTH",s[s.COLOR_DEPTH=16640]="COLOR_DEPTH",s[s.COLOR_STENCIL=17408]="COLOR_STENCIL",s[s.DEPTH_STENCIL=1280]="DEPTH_STENCIL",s[s.ALL=17664]="ALL",s))(Er||{});class Ro{constructor(e){this.items=[],this._name=e}emit(e,a,r,n,o,l,d,v){const{name:b,items:u}=this;for(let m=0,x=u.length;m<x;m++)u[m][b](e,a,r,n,o,l,d,v);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const a=this.items.indexOf(e);return a!==-1&&this.items.splice(a,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Io=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Lr=class Pr extends go{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const a=[...Io,...this.config.runners??[]];this._addRunners(...a),this._unsafeEvalCheck()}async init(e={}){const a=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Po(a),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const r in this._systemsHash)e={...this._systemsHash[r].constructor.defaultOptions,...e};e={...Pr.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let r=0;r<this.runners.init.items.length;r++)await this.runners.init.items[r].init(e);this._initOptions=e}render(e,a){let r=e;if(r instanceof da&&(r={container:r},a&&(aa(ra,"passing a second argument is deprecated, please use render options instead"),r.target=a.renderTexture)),r.target||(r.target=this.view.renderTarget),r.target===this.view.renderTarget&&(this._lastObjectRendered=r.container,r.clearColor??(r.clearColor=this.background.colorRgba),r.clear??(r.clear=this.background.clearBeforeRender)),r.clearColor){const n=Array.isArray(r.clearColor)&&r.clearColor.length===4;r.clearColor=n?r.clearColor:Ks.shared.setValue(r.clearColor).toArray()}r.transform||(r.container.updateLocalTransform(),r.transform=r.container.localTransform),r.container.enableRenderGroup(),this.runners.prerender.emit(r),this.runners.renderStart.emit(r),this.runners.render.emit(r),this.runners.renderEnd.emit(r),this.runners.postrender.emit(r)}resize(e,a,r){const n=this.view.resolution;this.view.resize(e,a,r),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),r!==void 0&&r!==n&&this.runners.resolutionChange.emit(r)}clear(e={}){const a=this;e.target||(e.target=a.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Er.ALL);const{clear:r,clearColor:n,target:o}=e;Ks.shared.setValue(n??this.background.colorRgba),a.renderTarget.clear(o,r,Ks.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(a=>{this.runners[a]=new Ro(a)})}_addSystems(e){let a;for(a in e){const r=e[a];this._addSystem(r.value,r.name)}}_addSystem(e,a){const r=new e(this);if(this[a])throw new Error(`Whoops! The name "${a}" is already in use`);this[a]=r,this._systemsHash[a]=r;for(const n in this.runners)this.runners[n].add(r);return this}_addPipes(e,a){const r=a.reduce((n,o)=>(n[o.name]=o.value,n),{});e.forEach(n=>{const o=n.value,l=n.name,d=r[l];this.renderPipes[l]=new o(this,d?new d:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(a=>{a.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!To())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Lr.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Tr=Lr,Dt;function Oo(s){return Dt!==void 0||(Dt=(()=>{var a;const e={stencil:!0,failIfMajorPerformanceCaveat:s??Tr.defaultOptions.failIfMajorPerformanceCaveat};try{if(!ye.get().getWebGLRenderingContext())return!1;let n=ye.get().createCanvas().getContext("webgl",e);const o=!!((a=n==null?void 0:n.getContextAttributes())!=null&&a.stencil);if(n){const l=n.getExtension("WEBGL_lose_context");l&&l.loseContext()}return n=null,o}catch{return!1}})()),Dt}let Nt;async function Bo(s={}){return Nt!==void 0||(Nt=await(async()=>{const e=ye.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(s)).requestDevice(),!0}catch{return!1}})()),Nt}const fr=["webgl","webgpu","canvas"];async function Co(s){let e=[];s.preference?(e.push(s.preference),fr.forEach(o=>{o!==s.preference&&e.push(o)})):e=fr.slice();let a,r={};for(let o=0;o<e.length;o++){const l=e[o];if(l==="webgpu"&&await Bo()){const{WebGPURenderer:d}=await rr(async()=>{const{WebGPURenderer:v}=await import("./D_BOgN0x.js");return{WebGPURenderer:v}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);a=d,r={...s,...s.webgpu};break}else if(l==="webgl"&&Oo(s.failIfMajorPerformanceCaveat??Tr.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:d}=await rr(async()=>{const{WebGLRenderer:v}=await import("./Bq3mD3i6.js");return{WebGLRenderer:v}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);a=d,r={...s,...s.webgl};break}else if(l==="canvas")throw r={...s},new Error("CanvasRenderer is not yet implemented")}if(delete r.webgpu,delete r.webgl,!a)throw new Error("No available renderer for the current environment");const n=new a;return await n.init(r),n}const Rr="8.8.1";class Ir{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Rr)}static destroy(){}}Ir.extension=j.Application;class Mo{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Rr)}destroy(){this._renderer=null}}Mo.extension={type:[j.WebGLSystem,j.WebGPUSystem],name:"initHook",priority:-10};const Or=class ia{constructor(...e){this.stage=new da,e[0]!==void 0&&aa(ra,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Co(e),ia._plugins.forEach(a=>{a.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return aa(ra,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,a=!1){const r=ia._plugins.slice(0);r.reverse(),r.forEach(n=>{n.destroy.call(this)}),this.stage.destroy(a),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Or._plugins=[];let Br=Or;He.handleByList(j.Application,Br._plugins);He.add(Ir);class Cr extends yo{constructor(e,a){super();const{textures:r,data:n}=e;Object.keys(n.pages).forEach(o=>{const l=n.pages[parseInt(o,10)],d=r[l.id];this.pages.push({texture:d})}),Object.keys(n.chars).forEach(o=>{const l=n.chars[o],{frame:d,source:v}=r[l.page],b=new vo(l.x+d.x,l.y+d.y,l.width,l.height),u=new ot({source:v,frame:b});this.chars[o]={id:o.codePointAt(0),xOffset:l.xOffset,yOffset:l.yOffset,xAdvance:l.xAdvance,kerning:l.kerning??{},texture:u}}),this.baseRenderedFontSize=n.fontSize,this.baseMeasurementFontSize=n.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:n.fontSize},this.baseLineOffset=n.baseLineOffset,this.lineHeight=n.lineHeight,this.fontFamily=n.fontFamily,this.distanceField=n.distanceField??{type:"none",range:0},this.url=a}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:a}=this.pages[e];a.destroy(!0)}this.pages=null}static install(e){or.install(e)}static uninstall(e){or.uninstall(e)}}const ea={test(s){return typeof s=="string"&&s.startsWith("info face=")},parse(s){const e=s.match(/^[a-z]+\s+.+$/gm),a={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const m in e){const x=e[m].match(/^[a-z]+/gm)[0],L=e[m].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),T={};for(const J in L){const F=L[J].split("="),P=F[0],X=F[1].replace(/"/gm,""),te=parseFloat(X),ue=isNaN(te)?X:te;T[P]=ue}a[x].push(T)}const r={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[n]=a.info,[o]=a.common,[l]=a.distanceField??[];l&&(r.distanceField={range:parseInt(l.distanceRange,10),type:l.fieldType}),r.fontSize=parseInt(n.size,10),r.fontFamily=n.face,r.lineHeight=parseInt(o.lineHeight,10);const d=a.page;for(let m=0;m<d.length;m++)r.pages.push({id:parseInt(d[m].id,10)||0,file:d[m].file});const v={};r.baseLineOffset=r.lineHeight-parseInt(o.base,10);const b=a.char;for(let m=0;m<b.length;m++){const x=b[m],L=parseInt(x.id,10);let T=x.letter??x.char??String.fromCharCode(L);T==="space"&&(T=" "),v[L]=T,r.chars[T]={id:L,page:parseInt(x.page,10)||0,x:parseInt(x.x,10),y:parseInt(x.y,10),width:parseInt(x.width,10),height:parseInt(x.height,10),xOffset:parseInt(x.xoffset,10),yOffset:parseInt(x.yoffset,10),xAdvance:parseInt(x.xadvance,10),kerning:{}}}const u=a.kerning||[];for(let m=0;m<u.length;m++){const x=parseInt(u[m].first,10),L=parseInt(u[m].second,10),T=parseInt(u[m].amount,10);r.chars[v[L]].kerning[v[x]]=T}return r}},pr={test(s){const e=s;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(s){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},a=s.getElementsByTagName("info")[0],r=s.getElementsByTagName("common")[0],n=s.getElementsByTagName("distanceField")[0];n&&(e.distanceField={type:n.getAttribute("fieldType"),range:parseInt(n.getAttribute("distanceRange"),10)});const o=s.getElementsByTagName("page"),l=s.getElementsByTagName("char"),d=s.getElementsByTagName("kerning");e.fontSize=parseInt(a.getAttribute("size"),10),e.fontFamily=a.getAttribute("face"),e.lineHeight=parseInt(r.getAttribute("lineHeight"),10);for(let b=0;b<o.length;b++)e.pages.push({id:parseInt(o[b].getAttribute("id"),10)||0,file:o[b].getAttribute("file")});const v={};e.baseLineOffset=e.lineHeight-parseInt(r.getAttribute("base"),10);for(let b=0;b<l.length;b++){const u=l[b],m=parseInt(u.getAttribute("id"),10);let x=u.getAttribute("letter")??u.getAttribute("char")??String.fromCharCode(m);x==="space"&&(x=" "),v[m]=x,e.chars[x]={id:m,page:parseInt(u.getAttribute("page"),10)||0,x:parseInt(u.getAttribute("x"),10),y:parseInt(u.getAttribute("y"),10),width:parseInt(u.getAttribute("width"),10),height:parseInt(u.getAttribute("height"),10),xOffset:parseInt(u.getAttribute("xoffset"),10),yOffset:parseInt(u.getAttribute("yoffset"),10),xAdvance:parseInt(u.getAttribute("xadvance"),10),kerning:{}}}for(let b=0;b<d.length;b++){const u=parseInt(d[b].getAttribute("first"),10),m=parseInt(d[b].getAttribute("second"),10),x=parseInt(d[b].getAttribute("amount"),10);e.chars[v[m]].kerning[v[u]]=x}return e}},ur={test(s){return typeof s=="string"&&s.includes("<font>")?pr.test(ye.get().parseXML(s)):!1},parse(s){return pr.parse(ye.get().parseXML(s))}},Fo=[".xml",".fnt"],Wo={extension:{type:j.CacheParser,name:"cacheBitmapFont"},test:s=>s instanceof Cr,getCacheableAssets(s,e){const a={};return s.forEach(r=>{a[r]=e,a[`${r}-bitmap`]=e}),a[`${e.fontFamily}-bitmap`]=e,a}},zo={extension:{type:j.LoadParser,priority:ct.Normal},name:"loadBitmapFont",test(s){return Fo.includes(qe.extname(s).toLowerCase())},async testParse(s){return ea.test(s)||ur.test(s)},async parse(s,e,a){const r=ea.test(s)?ea.parse(s):ur.parse(s),{src:n}=e,{pages:o}=r,l=[],d=r.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let m=0;m<o.length;++m){const x=o[m].file;let L=qe.join(qe.dirname(n),x);L=mo(L,n),l.push({src:L,data:d})}const v=await a.load(l),b=l.map(m=>v[m.src]);return new Cr({data:r,textures:b},n)},async load(s,e){return await(await ye.get().fetch(s)).text()},async unload(s,e,a){await Promise.all(s.pages.map(r=>a.unload(r.texture.source._sourceOrigin))),s.destroy()}};class jo{constructor(e,a=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=a}add(e){e.forEach(a=>{this._assetList.push(a)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],a=Math.min(this._assetList.length,this._maxConcurrent);for(let r=0;r<a;r++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Do={extension:{type:j.CacheParser,name:"cacheTextureArray"},test:s=>Array.isArray(s)&&s.every(e=>e instanceof ot),getCacheableAssets:(s,e)=>{const a={};return s.forEach(r=>{e.forEach((n,o)=>{a[r+(o===0?"":o+1)]=n})}),a}};async function Mr(s){if("Image"in globalThis)return new Promise(e=>{const a=new Image;a.onload=()=>{e(!0)},a.onerror=()=>{e(!1)},a.src=s});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(s)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const No={extension:{type:j.DetectionParser,priority:1},test:async()=>Mr("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async s=>[...s,"avif"],remove:async s=>s.filter(e=>e!=="avif")},hr=["png","jpg","jpeg"],Uo={extension:{type:j.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async s=>[...s,...hr],remove:async s=>s.filter(e=>!hr.includes(e))},Go="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function fa(s){return Go?!1:document.createElement("video").canPlayType(s)!==""}const Ho={extension:{type:j.DetectionParser,priority:0},test:async()=>fa("video/mp4"),add:async s=>[...s,"mp4","m4v"],remove:async s=>s.filter(e=>e!=="mp4"&&e!=="m4v")},Yo={extension:{type:j.DetectionParser,priority:0},test:async()=>fa("video/ogg"),add:async s=>[...s,"ogv"],remove:async s=>s.filter(e=>e!=="ogv")},Vo={extension:{type:j.DetectionParser,priority:0},test:async()=>fa("video/webm"),add:async s=>[...s,"webm"],remove:async s=>s.filter(e=>e!=="webm")},Xo={extension:{type:j.DetectionParser,priority:0},test:async()=>Mr("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async s=>[...s,"webp"],remove:async s=>s.filter(e=>e!=="webp")};class Ko{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,a,r)=>(this._parsersValidated=!1,e[a]=r,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,a){const r={promise:null,parser:null};return r.promise=(async()=>{var l,d;let n=null,o=null;if(a.loadParser&&(o=this._parserHash[a.loadParser],o||Ge(`[Assets] specified load parser "${a.loadParser}" not found while loading ${e}`)),!o){for(let v=0;v<this.parsers.length;v++){const b=this.parsers[v];if(b.load&&((l=b.test)!=null&&l.call(b,e,a,this))){o=b;break}}if(!o)return Ge(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}n=await o.load(e,a,this),r.parser=o;for(let v=0;v<this.parsers.length;v++){const b=this.parsers[v];b.parse&&b.parse&&await((d=b.testParse)==null?void 0:d.call(b,n,a,this))&&(n=await b.parse(n,a,this)||n,r.parser=b)}return n})(),r}async load(e,a){this._parsersValidated||this._validateParsers();let r=0;const n={},o=Ar(e),l=St(e,b=>({alias:[b],src:b,data:{}})),d=l.length,v=l.map(async b=>{const u=qe.toAbsolute(b.src);if(!n[b.src])try{this.promiseCache[u]||(this.promiseCache[u]=this._getLoadPromiseAndParser(u,b)),n[b.src]=await this.promiseCache[u].promise,a&&a(++r/d)}catch(m){throw delete this.promiseCache[u],delete n[b.src],new Error(`[Loader.load] Failed to load ${u}.
${m}`)}});return await Promise.all(v),o?n[l[0].src]:n}async unload(e){const r=St(e,n=>({alias:[n],src:n})).map(async n=>{var d,v;const o=qe.toAbsolute(n.src),l=this.promiseCache[o];if(l){const b=await l.promise;delete this.promiseCache[o],await((v=(d=l.parser)==null?void 0:d.unload)==null?void 0:v.call(d,b,n,this))}});await Promise.all(r)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,a)=>(a.name?e[a.name]&&Ge(`[Assets] loadParser name conflict "${a.name}"`):Ge("[Assets] loadParser should have a name"),{...e,[a.name]:a}),{})}}function ft(s,e){if(Array.isArray(e)){for(const a of e)if(s.startsWith(`data:${a}`))return!0;return!1}return s.startsWith(`data:${e}`)}const qo=".json",Qo="application/json",Jo={extension:{type:j.LoadParser,priority:ct.Low},name:"loadJson",test(s){return ft(s,Qo)||dt(s,qo)},async load(s){return await(await ye.get().fetch(s)).json()}},Zo=".txt",ei="text/plain",ti={name:"loadTxt",extension:{type:j.LoadParser,priority:ct.Low,name:"loadTxt"},test(s){return ft(s,ei)||dt(s,Zo)},async load(s){return await(await ye.get().fetch(s)).text()}},si=["normal","bold","100","200","300","400","500","600","700","800","900"],ai=[".ttf",".otf",".woff",".woff2"],ri=["font/ttf","font/otf","font/woff","font/woff2"],ni=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function oi(s){const e=qe.extname(s),n=qe.basename(s,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(d=>d.charAt(0).toUpperCase()+d.slice(1));let o=n.length>0;for(const d of n)if(!d.match(ni)){o=!1;break}let l=n.join(" ");return o||(l=`"${l.replace(/[\\"]/g,"\\$&")}"`),l}const ii=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function li(s){return ii.test(s)?s:encodeURI(s)}const ci={extension:{type:j.LoadParser,priority:ct.Low},name:"loadWebFont",test(s){return ft(s,ri)||dt(s,ai)},async load(s,e){var r,n,o;const a=ye.get().getFontFaceSet();if(a){const l=[],d=((r=e.data)==null?void 0:r.family)??oi(s),v=((o=(n=e.data)==null?void 0:n.weights)==null?void 0:o.filter(u=>si.includes(u)))??["normal"],b=e.data??{};for(let u=0;u<v.length;u++){const m=v[u],x=new FontFace(d,`url(${li(s)})`,{...b,weight:m});await x.load(),a.add(x),l.push(x)}return Ce.set(`${d}-and-url`,{url:s,fontFaces:l}),l.length===1?l[0]:l}return Ge("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(s){(Array.isArray(s)?s:[s]).forEach(e=>{Ce.remove(`${e.family}-and-url`),ye.get().getFontFaceSet().delete(e)})}};function pa(s,e=1){var r;const a=(r=Xt.RETINA_PREFIX)==null?void 0:r.exec(s);return a?parseFloat(a[1]):e}function ua(s,e,a){s.label=a,s._sourceOrigin=a;const r=new ot({source:s,label:a}),n=()=>{delete e.promiseCache[a],Ce.has(a)&&Ce.remove(a)};return r.source.once("destroy",()=>{e.promiseCache[a]&&(Ge("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),n())}),r.once("destroy",()=>{s.destroyed||(Ge("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),n())}),r}const di=".svg",fi="image/svg+xml",pi={extension:{type:j.LoadParser,priority:ct.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(s){return ft(s,fi)||dt(s,di)},async load(s,e,a){var r;return((r=e.data)==null?void 0:r.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?hi(s):ui(s,e,a,this.config.crossOrigin)},unload(s){s.destroy(!0)}};async function ui(s,e,a,r){var F,P,X;const o=await(await ye.get().fetch(s)).blob(),l=URL.createObjectURL(o),d=new Image;d.src=l,d.crossOrigin=r,await d.decode(),URL.revokeObjectURL(l);const v=document.createElement("canvas"),b=v.getContext("2d"),u=((F=e.data)==null?void 0:F.resolution)||pa(s),m=((P=e.data)==null?void 0:P.width)??d.width,x=((X=e.data)==null?void 0:X.height)??d.height;v.width=m*u,v.height=x*u,b.drawImage(d,0,0,m*u,x*u);const{parseAsGraphicsContext:L,...T}=e.data??{},J=new $r({resource:v,alphaMode:"premultiply-alpha-on-upload",resolution:u,...T});return ua(J,a,s)}async function hi(s){const a=await(await ye.get().fetch(s)).text(),r=new xo;return r.svg(a),r}const gi=`(function () {
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
`;let it=null,la=class{constructor(){it||(it=URL.createObjectURL(new Blob([gi],{type:"application/javascript"}))),this.worker=new Worker(it)}};la.revokeObjectURL=function(){it&&(URL.revokeObjectURL(it),it=null)};const vi=`(function () {
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
`;let lt=null;class Fr{constructor(){lt||(lt=URL.createObjectURL(new Blob([vi],{type:"application/javascript"}))),this.worker=new Worker(lt)}}Fr.revokeObjectURL=function(){lt&&(URL.revokeObjectURL(lt),lt=null)};let gr=0,ta;class mi{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:a}=new la;a.addEventListener("message",r=>{a.terminate(),la.revokeObjectURL(),e(r.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,a){var r;return this._run("loadImageBitmap",[e,(r=a==null?void 0:a.data)==null?void 0:r.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){ta===void 0&&(ta=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<ta&&(this._createdWorkers++,e=new Fr().worker,e.addEventListener("message",a=>{this._complete(a.data),this._returnWorker(a.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,a){await this._initWorkers();const r=new Promise((n,o)=>{this._queue.push({id:e,arguments:a,resolve:n,reject:o})});return this._next(),r}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const a=this._queue.pop(),r=a.id;this._resolveHash[gr]={resolve:a.resolve,reject:a.reject},e.postMessage({data:a.arguments,uuid:gr++,id:r})}}const vr=new mi,bi=[".jpeg",".jpg",".png",".webp",".avif"],yi=["image/jpeg","image/png","image/webp","image/avif"];async function xi(s,e){var n;const a=await ye.get().fetch(s);if(!a.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${s}: ${a.status} ${a.statusText}`);const r=await a.blob();return((n=e==null?void 0:e.data)==null?void 0:n.alphaMode)==="premultiplied-alpha"?createImageBitmap(r,{premultiplyAlpha:"none"}):createImageBitmap(r)}const Wr={name:"loadTextures",extension:{type:j.LoadParser,priority:ct.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(s){return ft(s,yi)||dt(s,bi)},async load(s,e,a){var o;let r=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await vr.isImageBitmapSupported()?r=await vr.loadImageBitmap(s,e):r=await xi(s,e):r=await new Promise((l,d)=>{r=new Image,r.crossOrigin=this.config.crossOrigin,r.src=s,r.complete?l(r):(r.onload=()=>{l(r)},r.onerror=d)});const n=new $r({resource:r,alphaMode:"premultiply-alpha-on-upload",resolution:((o=e.data)==null?void 0:o.resolution)||pa(s),...e.data});return ua(n,a,s)},unload(s){s.destroy(!0)}},zr=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],wi=zr.map(s=>`video/${s.substring(1)}`);function _i(s,e,a){a===void 0&&!e.startsWith("data:")?s.crossOrigin=Ai(e):a!==!1&&(s.crossOrigin=typeof a=="string"?a:"anonymous")}function ki(s){return new Promise((e,a)=>{s.addEventListener("canplaythrough",r),s.addEventListener("error",n),s.load();function r(){o(),e()}function n(l){o(),a(l)}function o(){s.removeEventListener("canplaythrough",r),s.removeEventListener("error",n)}})}function Ai(s,e=globalThis.location){if(s.startsWith("data:"))return"";e||(e=globalThis.location);const a=new URL(s,document.baseURI);return a.hostname!==e.hostname||a.port!==e.port||a.protocol!==e.protocol?"anonymous":""}const $i={name:"loadVideo",extension:{type:j.LoadParser,name:"loadVideo"},test(s){const e=ft(s,wi),a=dt(s,zr);return e||a},async load(s,e,a){var v,b;const r={...qs.defaultOptions,resolution:((v=e.data)==null?void 0:v.resolution)||pa(s),alphaMode:((b=e.data)==null?void 0:b.alphaMode)||await bo(),...e.data},n=document.createElement("video"),o={preload:r.autoLoad!==!1?"auto":void 0,"webkit-playsinline":r.playsinline!==!1?"":void 0,playsinline:r.playsinline!==!1?"":void 0,muted:r.muted===!0?"":void 0,loop:r.loop===!0?"":void 0,autoplay:r.autoPlay!==!1?"":void 0};Object.keys(o).forEach(u=>{const m=o[u];m!==void 0&&n.setAttribute(u,m)}),r.muted===!0&&(n.muted=!0),_i(n,s,r.crossorigin);const l=document.createElement("source");let d;if(s.startsWith("data:"))d=s.slice(5,s.indexOf(";"));else if(!s.startsWith("blob:")){const u=s.split("?")[0].slice(s.lastIndexOf(".")+1).toLowerCase();d=qs.MIME_TYPES[u]||`video/${u}`}return l.src=s,d&&(l.type=d),new Promise(u=>{const m=async()=>{const x=new qs({...r,resource:n});n.removeEventListener("canplay",m),e.data.preload&&await ki(n),u(ua(x,a,s))};n.addEventListener("canplay",m),n.appendChild(l)})},unload(s){s.destroy(!0)}},jr={extension:{type:j.ResolveParser,name:"resolveTexture"},test:Wr.test,parse:s=>{var e;return{resolution:parseFloat(((e=Xt.RETINA_PREFIX.exec(s))==null?void 0:e[1])??"1"),format:s.split(".").pop(),src:s}}},Si={extension:{type:j.ResolveParser,priority:-2,name:"resolveJson"},test:s=>Xt.RETINA_PREFIX.test(s)&&s.endsWith(".json"),parse:jr.parse};class Ei{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Xt,this.loader=new Ko,this.cache=Ce,this._backgroundLoader=new jo(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var o,l;if(this._initialized){Ge("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let d=e.manifest;typeof d=="string"&&(d=await this.load(d)),this.resolver.addManifest(d)}const a=((o=e.texturePreference)==null?void 0:o.resolution)??1,r=typeof a=="number"?[a]:a,n=await this._detectFormats({preferredFormats:(l=e.texturePreference)==null?void 0:l.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:n,resolution:r}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,a){this._initialized||await this.init();const r=Ar(e),n=St(e).map(d=>{if(typeof d!="string"){const v=this.resolver.getAlias(d);return v.some(b=>!this.resolver.hasKey(b))&&this.add(d),Array.isArray(v)?v[0]:v}return this.resolver.hasKey(d)||this.add({alias:d,src:d}),d}),o=this.resolver.resolve(n),l=await this._mapLoadToResolve(o,a);return r?l[n[0]]:l}addBundle(e,a){this.resolver.addBundle(e,a)}async loadBundle(e,a){this._initialized||await this.init();let r=!1;typeof e=="string"&&(r=!0,e=[e]);const n=this.resolver.resolveBundle(e),o={},l=Object.keys(n);let d=0,v=0;const b=()=>{a==null||a(++d/v)},u=l.map(m=>{const x=n[m];return v+=Object.keys(x).length,this._mapLoadToResolve(x,b).then(L=>{o[m]=L})});return await Promise.all(u),r?o[e[0]]:o}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(a))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolveBundle(e);Object.values(a).forEach(r=>{this._backgroundLoader.add(Object.values(r))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Ce.get(e);const a={};for(let r=0;r<e.length;r++)a[r]=Ce.get(e[r]);return a}async _mapLoadToResolve(e,a){const r=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const n=await this.loader.load(r,a);this._backgroundLoader.active=!0;const o={};return r.forEach(l=>{const d=n[l.src],v=[l.src];l.alias&&v.push(...l.alias),v.forEach(b=>{o[b]=d}),Ce.set(v,d)}),o}async unload(e){this._initialized||await this.init();const a=St(e).map(n=>typeof n!="string"?n.src:n),r=this.resolver.resolve(a);await this._unloadFromResolved(r)}async unloadBundle(e){this._initialized||await this.init(),e=St(e);const a=this.resolver.resolveBundle(e),r=Object.keys(a).map(n=>this._unloadFromResolved(a[n]));await Promise.all(r)}async _unloadFromResolved(e){const a=Object.values(e);a.forEach(r=>{Ce.remove(r.src)}),await this.loader.unload(a)}async _detectFormats(e){let a=[];e.preferredFormats&&(a=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const r of e.detections)e.skipDetections||await r.test()?a=await r.add(a):e.skipDetections||(a=await r.remove(a));return a=a.filter((r,n)=>a.indexOf(r)===n),a}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(a=>{a.config&&Object.keys(a.config).filter(r=>r in e).forEach(r=>{a.config[r]=e[r]})})}}const nt=new Ei;He.handleByList(j.LoadParser,nt.loader.parsers).handleByList(j.ResolveParser,nt.resolver.parsers).handleByList(j.CacheParser,nt.cache.parsers).handleByList(j.DetectionParser,nt.detections);He.add(Do,Uo,No,Xo,Ho,Yo,Vo,Jo,ti,ci,pi,Wr,$i,zo,Wo,jr,Si);const mr={loader:j.LoadParser,resolver:j.ResolveParser,cache:j.CacheParser,detection:j.DetectionParser};He.handle(j.Asset,s=>{const e=s.ref;Object.entries(mr).filter(([a])=>!!e[a]).forEach(([a,r])=>He.add(Object.assign(e[a],{extension:e[a].extension??r})))},s=>{const e=s.ref;Object.keys(mr).filter(a=>!!e[a]).forEach(a=>He.remove(e[a]))});var Li=ee('<div class="win-label svelte-1vsph43">BIG WIN!</div> <div class="win-amount-display svelte-1vsph43"> </div>',1),Pi=yr('<use href="#sparkle" class="sparkle svelte-1vsph43"></use>'),Ti=yr('<use href="#vinyl"></use>'),Ri=ee('<div><!> <svg class="vinyl-canvas svelte-1vsph43" viewBox="0 0 1024 800" xmlns="http://www.w3.org/2000/svg"><defs class="svelte-1vsph43"><symbol id="vinyl" viewBox="-200 -200 400 400" class="svelte-1vsph43"><circle cx="0" cy="0" r="180" fill="#0b0b0b" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="150" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.3" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="120" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.25" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="90" fill="none" stroke="#1a1a1a" stroke-width="1.5" opacity="0.2" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="55" fill="var(--label-color)" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="6" fill="#ffffff" class="svelte-1vsph43"></circle><ellipse cx="-15" cy="-15" rx="20" ry="15" fill="#ffffff" opacity="0.3" transform="rotate(-30)" class="svelte-1vsph43"></ellipse></symbol><symbol id="sparkle" viewBox="-12 -12 24 24" class="svelte-1vsph43"><polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ffd966" class="svelte-1vsph43"></polygon><circle cx="0" cy="0" r="2" fill="#ffffff" class="svelte-1vsph43"></circle></symbol><symbol id="confetti" viewBox="-3 -3 6 6" class="svelte-1vsph43"><circle cx="0" cy="0" r="2" fill="var(--confetti-color)" class="svelte-1vsph43"></circle></symbol></defs><!><!></svg></div>');function Ii(s,e){Yt(e,!0);let a=rt(e,"winLevel",3,"small"),r=rt(e,"winAmount",3,0),n=rt(e,"vinylStartScale",3,.01),o=rt(e,"vinylEndScale",3,.15),l=rt(e,"sparkleScale",3,.6),d=R(!1),v=R(!1);const b={small:{vinyls:5,sparkles:8,maxRadius:70},medium:{vinyls:12,sparkles:16,maxRadius:100},jackpot:{vinyls:24,sparkles:30,maxRadius:130}},u=ge(()=>b[a()]),m=["#f04e37","#ffd966","#ff8533","#4ecdc4","#ff6b9d"];function x(q){const D=[],Me=t(u).maxRadius;for(let ve=0;ve<q;ve++){const Fe=Math.PI*2*ve/q+Math.random()*.4,Qe=Math.random()*Me*.7+Me*.2;D.push({x:512+Math.cos(Fe)*Qe,y:400+Math.sin(Fe)*Qe,rotation:Math.random()*30-15,scale:o()*(.8+Math.random()*.4),delay:ve*.05,color:m[ve%m.length]})}return D}function L(q){const D=[];for(let N=0;N<q;N++)D.push({x:100+Math.random()*824,y:50+Math.random()*700,delay:Math.random()*.8,duration:.6+Math.random()*.4,rotation:Math.random()*360});return D}const T=ge(()=>x(t(u).vinyls)),J=ge(()=>L(t(u).sparkles));function F(){h(d,!0),h(v,!0),setTimeout(()=>{h(v,!1),setTimeout(()=>{var q;h(d,!1),(q=e.onComplete)==null||q.call(e)},500)},a()==="jackpot"?4e3:a()==="medium"?3e3:2500)}function P(){h(v,!1),setTimeout(()=>{h(d,!1)},500)}var X=Ut(),te=Ye(X);{var ue=q=>{var D=Ri();let N;var _e=w(D);{var Me=ce=>{var ae=Li(),O=p(Ye(ae),2),ne=w(O,!0);_(O),ie(pt=>K(ne,pt),[()=>r().toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),V(ce,ae)};re(_e,ce=>{r()>0&&ce(Me)})}var ve=p(_e,2),Fe=p(w(ve));Ht(Fe,17,()=>t(J),Gt,(ce,ae)=>{var O=Pi();ie(()=>y(O,"style",`
            --sx: ${t(ae).x??""}px;
            --sy: ${t(ae).y??""}px;
            --duration: ${t(ae).duration??""}s;
            --sparkle-delay: ${t(ae).delay??""}s;
            --sparkle-scale: ${l()??""};
          `)),V(ce,O)});var Qe=p(Fe);Ht(Qe,17,()=>t(T),Gt,(ce,ae)=>{var O=Ti();let ne;ie(()=>{ne=na(O,0,"vinyl-group svelte-1vsph43",null,ne,{floating:t(v)}),y(O,"style",`
            --tx: ${t(ae).x??""}px;
            --ty: ${t(ae).y??""}px;
            --scale: ${t(ae).scale??""};
            --rotation: ${t(ae).rotation??""}deg;
            --delay: ${t(ae).delay??""}s;
            --label-color: ${t(ae).color??""};
            --start-scale: ${n()??""};
          `)}),V(ce,O)}),_(ve),_(D),ie(()=>N=na(D,1,"vinyl-win-container svelte-1vsph43",null,N,{visible:t(v),hiding:!t(v)})),V(q,D)};re(te,q=>{t(d)&&q(ue)})}return V(s,X),Vt({show:F,hide:P})}var Oi=ee(`<div style="
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
			">Please wait...</div>`),Ci=ee('<div role="button" tabindex="0"><span style="position: absolute; left: -9999px;">Click anywhere to continue</span> <!></div>');function Mi(s,e){Yt(e,!0);let a=R(!1),r=R(!1),n=R(!1),o=R(0);ca(()=>{const m=setInterval(()=>{h(o,t(o)+2),t(o)>=100&&(clearInterval(m),h(o,100),setTimeout(()=>{h(r,!0),setTimeout(()=>{h(n,!0)},3e3)},500))},60);return()=>clearInterval(m)});function l(){t(r)&&t(n)&&!t(a)&&(h(a,!0),setTimeout(()=>e.onloaded(),300))}var d=Ut(),v=Ye(d);{var b=m=>{var x=Oi(),L=w(x);y(L,"src",`${we??""}/loading_screen/MadCraneLogo.jpg`);var T=p(L,2),J=w(T);_(T);var F=p(T,2),P=w(F);_(F),_(x),ie(X=>{y(J,"style",`
				width: ${t(o)??""}%;
				height: 100%;
				background: linear-gradient(90deg, #ff0000, #ff6600);
				transition: width 0.3s ease;
			`),K(P,`Loading... ${X??""}%`)},[()=>Math.round(t(o))]),V(m,x)},u=m=>{var x=Ut(),L=Ye(x);{var T=J=>{var F=Ci(),P=p(w(F),2);{var X=te=>{var ue=Bi();V(te,ue)};re(P,te=>{t(n)||te(X)})}_(F),ie(()=>y(F,"style",`
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background-image: url('${we??""}/loading_screen/Splash_screen_RockabillyReels.jpeg');
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			cursor: ${(t(n)?"pointer":"default")??""};
			z-index: 10000;
		`)),M("click",F,l),M("keydown",F,te=>te.key==="Enter"&&l()),V(J,F)};re(L,J=>{t(r)&&!t(a)&&J(T)},!0)}V(m,x)};re(v,m=>{t(r)?m(u,!1):m(b)})}V(s,d),Vt()}const br={gameArea:{width:1445,height:1e3,scale:1,offsetX:-25,offsetY:-15},controlPanel:{x:250,y:750,width:1100,height:80,scaleX:1,scaleY:1.1,offsetX:0,offsetY:50},playButton:{scale:1,offsetX:0,offsetY:0},background:{yShift:-40,scale:1,fitMode:"height"}},Fi={gameArea:{width:1445,height:1e3,scale:.95,offsetX:0,offsetY:-20},controlPanel:{x:250,y:820,width:1100,height:70,scaleX:.85,scaleY:.85,offsetX:0,offsetY:20},playButton:{scale:1.2,offsetX:0,offsetY:0},background:{yShift:-30,scale:1,fitMode:"width"}},Wi={gameArea:{width:1445,height:1e3,scale:.75,offsetX:0,offsetY:0},controlPanel:{x:250,y:780,width:1100,height:65,scaleX:.8,scaleY:.8,offsetX:0,offsetY:40},playButton:{scale:1.1,offsetX:0,offsetY:0},background:{yShift:-20,scale:.95,fitMode:"height"}},zi={gameArea:{width:1445,height:1e3,scale:.92,offsetX:0,offsetY:-15},controlPanel:{x:250,y:830,width:1100,height:70,scaleX:.82,scaleY:.82,offsetX:0,offsetY:25},playButton:{scale:1.25,offsetX:0,offsetY:0},background:{yShift:-25,scale:1,fitMode:"width"}},ji={gameArea:{width:1445,height:1e3,scale:.72,offsetX:0,offsetY:5},controlPanel:{x:250,y:785,width:1100,height:65,scaleX:.78,scaleY:.78,offsetX:0,offsetY:35},playButton:{scale:1.15,offsetX:0,offsetY:0},background:{yShift:-15,scale:.93,fitMode:"height"}};function Di(){if(typeof window>"u")return br;const s=window.innerWidth,a=window.innerHeight>s,r=s<=768,n=/iPhone|iPad|iPod/i.test(navigator.userAgent);return r?n?a?zi:ji:a?Fi:Wi:br}function Ni(){return Di()}function Ui(s,e=1){return{x:(s.controlPanel.x+s.controlPanel.offsetX)*e,y:(s.controlPanel.y+s.controlPanel.offsetY)*e,width:s.controlPanel.width*e*s.controlPanel.scaleX,height:s.controlPanel.height*e*s.controlPanel.scaleY}}var Gi=Nn('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-1bferk7"><\/script><!---->',1),Hi=ee('<p style="color: red;" class="svelte-1bferk7"><strong class="svelte-1bferk7">Error:</strong> </p>'),Yi=ee('<div class="svelte-1bferk7"> </div>'),Vi=ee('<details class="svelte-1bferk7"><summary class="svelte-1bferk7"> </summary> <!></details>'),Xi=ee(`<div style="
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
  " class="svelte-1bferk7"><h3 class="svelte-1bferk7">🎰 Oma-peli Debug</h3> <p class="svelte-1bferk7"><strong class="svelte-1bferk7">Status:</strong> </p> <!> <p class="svelte-1bferk7"><strong class="svelte-1bferk7">Base:</strong> </p> <p class="svelte-1bferk7"><strong class="svelte-1bferk7">BG URL:</strong> </p> <p class="svelte-1bferk7"><strong class="svelte-1bferk7">Sample:</strong> </p> <!></div>`),Ki=ee('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-1bferk7"> </div>'),qi=ee('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-1bferk7"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-1bferk7"> </span></div>'),Qi=ee(`<div style="
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
  " class="svelte-1bferk7"><h2 style="margin: 0 0 10px 0; font-size: 2em;" class="svelte-1bferk7">🎉 VOITTO! 🎉</h2> <div style="font-size: 1.5em; font-weight: bold; margin: 10px 0;" class="svelte-1bferk7"> </div> <!> <!> <button style="
        margin-top: 15px;
        padding: 8px 16px;
        background: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
      " class="svelte-1bferk7">Jatka pelaamista</button></div>`),Ji=ee('<button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1em;" class="svelte-1bferk7">🛑 STOP AUTOPLAY</button>'),Zi=ee('<button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1em;" class="svelte-1bferk7">▶️ START AUTOPLAY</button>'),el=ee(`<div class="svelte-1bferk7"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-1bferk7">💰 MENU</h2> <div class="mobile-menu-controls svelte-1bferk7" style="display: none; margin-bottom: 20px; padding: 15px; background: rgba(255, 255, 255, 0.05); border-radius: 10px;"><h3 style="margin: 0 0 15px 0; color: #ffd700; font-size: 1.2em;" class="svelte-1bferk7">🎮 GAME CONTROLS</h3> <div style="margin-bottom: 15px;" class="svelte-1bferk7"><div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;" class="svelte-1bferk7"><span style="font-size: 1.1em;" class="svelte-1bferk7">🔄 Autoplay:</span> <span class="svelte-1bferk7"> </span></div> <!></div> <div style="margin-bottom: 10px;" class="svelte-1bferk7"><div style="margin-bottom: 10px;" class="svelte-1bferk7"><span style="font-size: 1.1em;" class="svelte-1bferk7">⚡ Spin Speed:</span> <span style="color: #ffd700; font-weight: bold; margin-left: 10px;" class="svelte-1bferk7"> </span></div> <div style="display: flex; gap: 10px;" class="svelte-1bferk7"><button class="svelte-1bferk7">🐌 Slow</button> <button class="svelte-1bferk7">🏃 Medium</button> <button class="svelte-1bferk7">⚡ Fast</button></div></div> <div style="border-top: 1px solid #555; margin: 20px 0;" class="svelte-1bferk7"></div></div> <h3 style="margin: 0 0 15px 0; color: #ffd700; font-size: 1.2em;" class="svelte-1bferk7">💰 PAYTABLE (81 WAYS)</h3> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-1bferk7">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-1bferk7"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-1bferk7"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-1bferk7"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-1bferk7">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-1bferk7"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-1bferk7">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-1bferk7"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-1bferk7">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-1bferk7"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-1bferk7">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1bferk7">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-1bferk7">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-1bferk7">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-1bferk7"> <span style="color: #ffd700;" class="svelte-1bferk7">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-1bferk7">Sulje</button></div>`),tl=ee(`<div style="
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
  " class="svelte-1bferk7"><div style="
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: white;
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      border: 3px solid #ffd700;
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
      max-width: 500px;
      font-family: Arial, sans-serif;
    " class="svelte-1bferk7"><h1 style="
        margin: 0 0 20px 0;
        font-size: 2.5em;
        color: #ffd700;
        text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
      " class="svelte-1bferk7">🎰 VAPAAPELIT PÄÄTTYIVÄT! 🎰</h1> <div style="
        font-size: 1.2em;
        margin: 20px 0;
        color: #aaa;
      " class="svelte-1bferk7">Voitit yhteensä:</div> <div style="
        font-size: 3em;
        font-weight: bold;
        color: #00ff00;
        text-shadow: 0 0 15px rgba(0, 255, 0, 0.8);
        margin: 20px 0;
      " class="svelte-1bferk7"> </div> <button style="
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
        " class="svelte-1bferk7">JATKA PERUSPELIIN</button></div></div>`),sl=ee('<div class="svelte-1bferk7"><div class="svelte-1bferk7">🔄 Select Rounds</div> <button class="svelte-1bferk7">10 Rounds</button> <button class="svelte-1bferk7">25 Rounds</button> <button class="svelte-1bferk7">50 Rounds</button> <button class="svelte-1bferk7">100 Rounds</button> <button class="svelte-1bferk7">200 Rounds</button> <button class="svelte-1bferk7">500 Rounds</button> <button class="svelte-1bferk7">1,000 Rounds</button> <button class="svelte-1bferk7">5,000 Rounds</button> <button class="svelte-1bferk7">Cancel</button></div>'),al=ee(`<!>  <!>   <!>   <!>   <!>  <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
" class="svelte-1bferk7"><div class="svelte-1bferk7"><div class="svelte-1bferk7"><button class="svelte-1bferk7">💰 PAYTABLE</button>   <div class="control-panel-mobile svelte-1bferk7"><!>  <img alt="Left End" class="svelte-1bferk7"> <div class="svelte-1bferk7"><div style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;" class="svelte-1bferk7"><div class="hide-on-desktop svelte-1bferk7"><button title="Menu" class="svelte-1bferk7"></button></div> <div style="display: flex; flex-direction: column; align-items: center;" class="svelte-1bferk7"><div class="svelte-1bferk7">BET</div> <div class="svelte-1bferk7"><button title="Decrease Bet" class="svelte-1bferk7"></button> <div class="svelte-1bferk7"> </div> <button title="Increase Bet" class="svelte-1bferk7"></button></div></div> <img class="hide-on-mobile svelte-1bferk7" alt="Divider"> <div class="hide-on-mobile svelte-1bferk7" style="display: flex; flex-direction: column; align-items: center;"><div class="svelte-1bferk7">BALANCE</div> <div class="svelte-1bferk7"><div class="svelte-1bferk7"> </div></div></div> <img class="hide-on-mobile svelte-1bferk7" alt="Divider"></div> <div class="svelte-1bferk7"></div> <div style="position: absolute; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; z-index: 10;" class="svelte-1bferk7"><div><button class="svelte-1bferk7"></button></div></div> <div style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;" class="svelte-1bferk7"><div class="hide-on-mobile svelte-1bferk7"><button class="svelte-1bferk7"></button> <img alt="Status bar" class="svelte-1bferk7"></div> <img class="hide-on-mobile svelte-1bferk7" alt="Divider"> <div class="hide-on-mobile svelte-1bferk7"><button class="svelte-1bferk7"></button> <img alt="Speed bar" class="svelte-1bferk7"></div> <img class="hide-on-mobile svelte-1bferk7" alt="Divider"> <div class="hide-on-mobile svelte-1bferk7" style="display: flex; flex-direction: column; align-items: center;"><div class="svelte-1bferk7">WIN</div> <div class="svelte-1bferk7"><div class="svelte-1bferk7"> </div></div></div> <img class="hide-on-mobile svelte-1bferk7" alt="Divider"> <div class="hide-on-mobile svelte-1bferk7" style="display: flex; align-items: center; justify-content: center;"><button title="Menu" class="svelte-1bferk7"></button></div></div></div> <img alt="Right End" class="svelte-1bferk7"></div></div>  <button class="svelte-1bferk7"></button> <!>   <div class="debug-panel svelte-1bferk7"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-1bferk7">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-1bferk7"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1bferk7"><span style="color: #aaa;" class="svelte-1bferk7">Rounds:</span> <span style="color: #fff;" class="svelte-1bferk7"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1bferk7"><span style="color: #aaa;" class="svelte-1bferk7">Wagered:</span> <span style="color: #ff6666;" class="svelte-1bferk7"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1bferk7"><span style="color: #aaa;" class="svelte-1bferk7">Won:</span> <span style="color: #66ff66;" class="svelte-1bferk7"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 10px; 
    padding-top: 10px; 
    border-top: 1px solid #555;
    font-weight: bold;
    font-size: 18px;
  " class="svelte-1bferk7"><span style="color: #ffd700;" class="svelte-1bferk7">RTP:</span> <span class="svelte-1bferk7"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
  " class="svelte-1bferk7"><span style="color: #aaa;" class="svelte-1bferk7">Hit Freq:</span> <span class="svelte-1bferk7"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-size: 14px;
  " class="svelte-1bferk7"><span style="color: #aaa;" class="svelte-1bferk7">Free Spins Triggered:</span> <span style="color: #66ccff;" class="svelte-1bferk7"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 4px;
    font-size: 14px;
  " class="svelte-1bferk7"><span style="color: #aaa;" class="svelte-1bferk7">Free Spins Played:</span> <span style="color: #66ccff;" class="svelte-1bferk7"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #555;
    font-size: 14px;
  " class="svelte-1bferk7"><span style="color: #aaa;" class="svelte-1bferk7">Empty Slots:</span> <span style="color: #ff9900;" class="svelte-1bferk7"> </span></div> <button style="
      margin-top: 10px;
      width: 100%;
      padding: 5px;
      background: rgba(255, 100, 100, 0.3);
      color: #fff;
      border: 1px solid #ff6666;
      border-radius: 5px;
      cursor: pointer;
      font-size: 11px;
    " class="svelte-1bferk7">Reset Stats</button> <div style="
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  " class="svelte-1bferk7"><button class="svelte-1bferk7"> </button> <button class="svelte-1bferk7">Clear Win Log</button> <button class="svelte-1bferk7">🎰 Test Free Spins</button></div></div> <div class="svelte-1bferk7"><button class="svelte-1bferk7"></button> <button class="svelte-1bferk7"></button></div></div></div>`,1);function rl(s,e){Yt(e,!0);const a="1.4.8",r=13,n=ge(()=>()=>Ni()),o=ge(()=>t(n)().gameArea.width),l=ge(()=>t(n)().gameArea.height),d=1.75,v=ge(()=>t(n)().gameArea.offsetX),b=ge(()=>t(n)().gameArea.offsetY),u=175,m=-5,x=1,L=30,T=-10,F=Math.round(100*d),P=Math.round(F*(700/760)),te=P+10,ue=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],q=typeof window<"u"&&window.location.hostname.includes("github.io"),D=q?"/web-sdk/oma-peli/symbols":`${we}/symbols`,N=q?"/web-sdk/oma-peli/controls":`${we}/controls`,_e={a:`${D}/Blue_hotrod.jpg`,b:`${D}/Blue_jacket.jpg`,c:`${D}/Blue_rollers.jpg`,d:`${D}/Blue_speakers.jpg`,e:`${D}/Premium_blonde.jpg`,f:`${D}/Premium_brunette.jpg`,g:`${D}/Premium_rocker.jpg`,h:`${D}/New_Wild.jpg`,i:`${D}/Red_burger.jpg`,j:`${D}/Red_fries.jpg`,k:`${D}/Red_milkshake.jpg`,l:`${D}/Scatter.jpg`,emptyslot:`${D}/Emptyslot.jpg`},Me=`${D}/bg_base.jpg`,ve=`${D}/ReelFrames.png?v=${Date.now()}`,Fe=`${D}/RockABillyReels_logo.png`,Qe={spin:`${we}/sounds/spin.mp3`,stop:`${we}/sounds/stop.mp3`,win:`${we}/sounds/win.mp3`};let ce=R(!0),ae={},O=null,ne=null,pt=null,Kt=null,Le=R(!0),Dr=R(!1),ha=R(1100);const Nr={fast:3,medium:7,slow:18};let Q=R("medium"),We=R(Math.floor(Math.random()*20)+1);const ut={background:()=>`${we}/music/rockabilly reels loop ${t(We)}.mp3`,freeSpins:`${we}/music/rockabilly-loop_long.mp3`,drumHit:`${we}/music/drum-hit.mp3`,winTheme:`${we}/music/win-stinger.mp3`};function ga(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(ga,500);return}const c=window.Howl;try{O=new c({src:[ut.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+t(We)+")"),h(Dr,!0)},onloaderror:(f,A)=>{console.warn("⚠️ Background music not found:",A)}}),ne=new c({src:[ut.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(f,A)=>console.warn("⚠️ Free spins music not found:",A)}),pt=new c({src:[ut.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Kt=new c({src:[ut.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(f){console.error("Failed to initialize music system:",f)}}function va(){const c=t(Z)?ne:O;c&&t(Le)&&!c.playing()&&(c.play(),console.log("🎵 "+(t(Z)?"Free spins":"Background")+" music started"))}function Ur(){if(t(Z))return;const c=Math.floor(Math.random()*20)+1;c===t(We)?h(We,c%20+1):h(We,c),console.log("🎵 Changing to loop #"+t(We)),O&&(O.playing()?(O.fade(O.volume(),0,200),setTimeout(()=>{O.stop(),O.unload()},200)):O.unload());const f=window.Howl;f&&(O=new f({src:[ut.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ New background music loop #"+t(We)+" loaded"),t(Le)&&!t(Z)&&setTimeout(()=>{O&&!O.playing()&&O.play()},300)},onloaderror:(A,S)=>{console.warn("⚠️ Failed to load loop #"+t(We)+":",S)}}))}function Gr(){O&&O.playing()&&(O.fade(O.volume(),0,500),setTimeout(()=>O.stop(),500)),ne&&ne.playing()&&(ne.fade(ne.volume(),0,500),setTimeout(()=>ne.stop(),500))}function qt(){O&&O.playing()&&(O.fade(O.volume(),0,500),setTimeout(()=>O.stop(),500)),ne&&ne.playing()&&(ne.fade(ne.volume(),0,500),setTimeout(()=>ne.stop(),500)),setTimeout(()=>{t(Le)&&va()},600)}function Hr(){if(O&&O.playing()){const c=O.volume();O.fade(c,0,1e3),setTimeout(()=>{O.stop(),O.volume(.3)},1e3)}}let Qt=R(!1);function Yr(){h(Qt,!1),setTimeout(()=>{h(Qt,!0)},10)}let Je=null;const Jt={vinylStartScale:.01,vinylEndScale:.05,sparkleScale:.1};function Vr(){h(Le,!t(Le)),t(Le)?va():Gr()}function Xr(){h(ce,!t(ce))}function Kr(){pt&&t(Le)&&t(ce)&&pt.play()}function qr(){Kt&&t(Le)&&t(ce)&&Kt.play()}let Et=null,ht=null,Ie=null,gt=R("Initializing..."),Ze=R(""),Pe=[],ma=R(!1),ze=R(1e3);const ba=[.4,.8,1,1.6,2,3,5,8,10,15,20,25,30,40,50,60,80,100];let vt=R(5),ke=ge(()=>ba[t(vt)]),Ve=R(0),le=R(!1),mt=R(0),he=R(!1),Zt=R(!1),Qr=R(0),Xe=!1,Oe=null,es=!1,et=R(0),tt=R(0),bt=R(0),ts=R(0),ss=ge(()=>t(tt)>0?(t(bt)/t(tt)*100).toFixed(2):"0.00"),as=ge(()=>t(et)>0?(t(ts)/t(et)*100).toFixed(2):"0.00"),Z=R(!1),je=R(0),Ke=R(0),Lt=R(0),rs=R(0),Pt=R(0),ns=R(0),Jr=ge(()=>t(Pt)>0?(t(ns)/t(Pt)*100).toFixed(2):"0.00"),xe=R(be([]));function Zr(c,f,A){const S=new Date().toLocaleString("fi-FI");let g=`
${"=".repeat(60)}
`;g+=`ROUND #${c} - ${S}
`,g+=`Mode: ${t(Z)?"FREE SPINS":"BASE GAME"}
`,g+=`${"=".repeat(60)}
`,f.forEach(($,k)=>{g+=`
Win ${k+1}:
`,g+=`  Symbol: ${$.symbol} (${_a[$.symbol]})
`,g+=`  Count: ${$.count} symbols
`,g+=`  Multiplier: ${$.multiplier}x
`,g+=`  Payout: ${$.payout.toFixed(2)}
`,g+=`  Positions: [${$.positions.join(", ")}]
`}),g+=`
${"─".repeat(60)}
`,g+=`TOTAL WIN: ${A.toFixed(2)}
`,g+=`${"=".repeat(60)}
`,t(xe).push(g)}function en(){const c=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${t(xe).join(`
`)}`,f=new Blob([c],{type:"text/plain"}),A=URL.createObjectURL(f),S=document.createElement("a");S.href=A,S.download=`win-log-${Date.now()}.txt`,S.click(),URL.revokeObjectURL(A)}function tn(){h(xe,be([]))}function sn(){t(Z)||(h(Z,!0),h(je,10),h(Ke,0),Se(Lt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),qt())}const an={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},rn={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function ya(c){if(c===6)return Math.random()<.55?"h":"emptyslot";const f=t(Z)?rn:an,A=Math.random();let S=0;const g=ue.filter(k=>k!=="h"),$=g.reduce((k,B)=>k+f[B],0);for(const k of g)if(S+=f[k]/$,A<S)return k;return"f"}function xa(){const c=[];for(let f=0;f<r;f++){const A=ya(f);c.push(A),Se(Pt),A==="emptyslot"&&Se(ns)}return c}function wa(c){return c<3?{col:0,row:c}:c<6?{col:1,row:c-3}:c===6?{col:2,row:0}:c<10?{col:3,row:c-7}:{col:4,row:c-10}}function yt(c,f){return c===0?f:c===1?3+f:c===2?6:c===3?7+f:c===4?10+f:-1}function nn(){if(t(Z)){const c=Math.random();return c<.7?3:c<.92?5:10}else{const c=Math.random();return c<.7?1:c<.92?2:3}}const on={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function ln(){var oe;const c=[],f=[];for(let E=0;E<r;E++)xt[E]==="l"&&f.push(E);if(f.length>=5){const E=f.length;h(je,t(je)+E),t(Z)?console.log(`🎰 FREE SPINS RETRIGGERED! +${E} FREE SPINS! Total: ${t(je)}`):(h(Z,!0),h(Ke,0),Se(Lt),console.log(`🎰 FREE SPINS TRIGGERED! ${f.length} scatters = ${E} FREE SPINS!`),qt()),c.push({symbol:"l",count:f.length,payout:0,positions:f,multiplier:1})}const A=[];for(let E=0;E<3;E++)for(let C=0;C<3;C++)for(let z=0;z<1;z++)for(let U=0;U<3;U++)for(let H=0;H<3;H++){const Y=[yt(0,E),yt(1,C),yt(2,z),yt(3,U),yt(4,H)];A.push(Y)}console.log(`Generated ${A.length} possible paths (should be 81)`);const S=[];for(const E of A){const C=E.map(Y=>xt[Y]);if(C[0]==="emptyslot"||C[0]==="l")continue;let z=null;for(let Y=0;Y<C.length;Y++)if(C[Y]!=="h"&&C[Y]!=="emptyslot"&&C[Y]!=="l"){z=C[Y];break}if(!z)continue;let U=0;const H=new Set;for(let Y=0;Y<E.length;Y++){const Re=E[Y],{col:fe}=wa(Re),se=C[Y];(se===z||se==="h")&&H.add(fe)}for(let Y=0;Y<5&&H.has(Y);Y++)U++;if(U>=3){const Re=E[0]%3;S.push({symbol:z,length:U,path:E.slice(0,U),startRow:Re})}}const g=[],$=new Map;for(const E of S){const C=`${E.symbol}-${E.path.join(",")}`;$.has(C)||$.set(C,[]),$.get(C).push(E)}for(const[E,C]of $.entries()){const z=Math.max(...C.map(H=>H.length)),U=C.find(H=>H.length===z);U&&g.push(U)}const k=[],B=new Map;for(const E of g)B.has(E.symbol)||B.set(E.symbol,[]),B.get(E.symbol).push(E);const I=[];for(const[E,C]of B.entries()){const z=Math.max(...C.map(H=>H.length)),U=C.filter(H=>H.length===z);I.push(...U)}const G=new Map;for(const E of I){const C=`${E.symbol}-${E.length}`;G.has(C)||G.set(C,[]),G.get(C).push(E)}const W=I.length>0?nn():1;for(const[E,C]of G.entries()){const z=C[0],U=(oe=on[z.symbol])==null?void 0:oe[z.length];if(U!==void 0&&U>0){const H=new Map;for(const se of C)for(let pe=0;pe<se.length;pe++)H.has(pe)||H.set(pe,new Set),H.get(pe).add(se.path[pe]);let Y=1;for(let se=0;se<z.length;se++){const pe=H.get(se);Y*=pe?pe.size:1}const Re=U*t(ke)*Y*W;console.log(`  ${z.length}x${z.symbol}: ${Y} ways × ${U}x × ${t(ke)} bet × ${W} mult = ${Re}`);const fe=new Set;for(const se of C)se.path.forEach(pe=>fe.add(pe));k.push({symbol:z.symbol,count:z.length,payout:Re,positions:Array.from(fe),multiplier:W})}}return c.push(...k),c}let Ae=R(0),st=R(be([])),De=R(!1),Be=R(!1),os=R(!1),is=R(0);const _a={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function ls(c){if(!t(ce)||!ae[c])return;const f=ae[c];f.currentTime=0,f.play().catch(A=>{console.warn("Äänen toisto epäonnistui:",c,A)})}function cn(c){wt.forEach(f=>de.stage.removeChild(f)),wt=[],c.forEach(f=>{f.positions.forEach(A=>{const S=Te[A],g=new ir().rect(0,0,F,P).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});g.x=S.container.x,g.y=S.container.y,de.stage.addChild(g),wt.push(g);let $=0,k=1;const B=.05;de.ticker.add(()=>{$+=k*B,$>=.4&&(k=-1),$<=0&&(k=1),g.alpha=.5+$})})})}function cs(){wt.forEach(c=>de.stage.removeChild(c)),wt=[]}let xt=xa(),ds,de,Te=[],wt=[];class dn{constructor(f,A){$e(this,"index");$e(this,"container");$e(this,"offset",0);$e(this,"speed",0);$e(this,"targetSpeed",30);$e(this,"state","idle");$e(this,"stopDelay",0);$e(this,"bounceOffset",0);$e(this,"bounceSpeed",0);$e(this,"bounceFrames",0);this.index=f,this.container=A}start(f){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=f}startSynchronized(f){const A=Nr[t(Q)],S=60+f*A;this.start(S)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const f=t(Q)==="slow"?.88:t(Q)==="medium"?.92:.95;this.speed*=f,this.speed<2.5&&(this.state="bouncing",this.speed=0,this.offset=0,this.bounceOffset=0,this.bounceSpeed=4,ls("stop"),Kr())}this.state==="bouncing"&&(this.bounceSpeed*=.8,this.bounceOffset+=this.bounceSpeed,Math.abs(this.bounceSpeed)<.2&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=te&&(this.offset=0,xt[this.index]=ya(this.index)))}}draw(){const f=this.container;f.removeChildren();const A=xt[this.index];if(!A||!Et||!Et[A])return;const S=this.offset+this.bounceOffset,g=($,k)=>{const B=Et[$];if(!B)return;const I=new Qs(B);I.width=F,I.height=P,I.x=0,I.y=k,f.addChild(I)};g(A,S-te),g(A,S),g(A,S+te)}}let i=R(1);const me=ge(()=>Ui(t(n)(),t(i)));ca(async()=>{de=new Br,await de.init({width:t(o),height:t(l),backgroundAlpha:0}),ds.appendChild(de.canvas);const c=()=>{const g=window.innerWidth,$=window.innerHeight,k=g/t(o),B=$/t(l),I=$>g,G=g<=768;let W;G&&I?W=Math.min(k*1,B*.95,1.2):G?W=Math.min(k*.98,B*.95,1.1):I?W=Math.min(k*.95,B*.85,1):W=Math.min(k,B,1),h(i,be(W)),de.stage.scale.set(W),de.renderer.resize(t(o),t(l))};c(),window.addEventListener("resize",c);const f=g=>{(g.code==="Space"||g.key===" ")&&(g.preventDefault(),Te.some(k=>k.state==="spinning"||k.state==="slowing")?(Te.forEach(k=>{k.state==="spinning"?(k.stopDelay=0,k.state="slowing",k.speed=k.targetSpeed*.5):k.state==="slowing"&&(k.speed=k.speed*.3)}),console.log("⚡ Skip spin - kiekot pysähtyvät nopeasti")):fs())};window.addEventListener("keydown",f);const A={};try{h(gt,"Loading UI images..."),Pe.push(`Loading reel frames: ${ve}`),Pe.push(`Loading logo: ${Fe}`),await nt.load([{alias:"reelframes",src:ve},{alias:"logo",src:Fe}]),ht=ot.from("reelframes"),Ie=ot.from("logo"),console.log("✅ Reel frames texture created:",ht.width,"x",ht.height),console.log("✅ Logo texture created:",Ie.width,"x",Ie.height),Pe.push("✅ All UI images loaded"),h(gt,"Loading symbols...");const g=[];for(const $ of ue)g.push({alias:$,src:_e[$]});await nt.load(g);for(const $ of ue){const k=_e[$];Pe.push(`Loading symbol ${$}: ${k}`);try{const B=ot.from($);A[$]=B,console.log(`✅ Symbol ${$} loaded:`,B.width,"x",B.height),Pe.push(`✅ Symbol ${$} loaded`)}catch(B){const I=`❌ Failed to load symbol ${$} from ${k}: ${B}`;throw Pe.push(I),console.error(I),new Error(I)}}Et=A,h(gt,"Assets loaded successfully!")}catch(g){h(Ze,`Asset loading failed: ${g}`),Pe.push(t(Ze)),console.error(t(Ze));return}console.log("Ladataan ääniefektit...");for(const[g,$]of Object.entries(Qe)){const k=new Audio;k.src=$,k.preload="auto",k.volume=.7,k.load(),k.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${$} (käytetään hiljaista placeholderia)`)}),ae[g]=k}[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(g=>({x:g.x+t(v),y:g.y+t(b)})),Te=[];for(let g=0;g<r;g++){const $=wa(g),k=$.col,B=$.row,I=300+k*(F+20),G=250+B*(P+15),W=g===6?I+m:I,oe=g===6?G+u:G,E=new da;E.x=W+t(v),E.y=oe+t(b);const C=new ir().rect(0,0,F,P).fill(16777215);C.x=E.x,C.y=E.y,E.mask=C,de.stage.addChild(C),de.stage.addChild(E),Te.push(new dn(g,E))}if(ht){const g=new Qs(ht);g.scale.set(1),g.x=250,g.y=200,de.stage.addChild(g),h(ha,be(g.width)),console.log("Reel frames lisätty:",g.width.toFixed(0),"x",g.height.toFixed(0)),console.log("Control panel leveys päivitetty:",t(ha).toFixed(0))}if(Ie){Ie.source&&(Ie.source.scaleMode="nearest",Ie.source.antialias=!1,Ie.source.update());const g=new Qs(Ie);g.roundPixels=!0,g.scale.set(x),g.x=(de.renderer.width-g.width)/2+L,g.y=T,de.stage.addChild(g),console.log("Logo lisätty päällimmäiseen layeriin:",g.width.toFixed(0),"x",g.height.toFixed(0))}ga(),de.ticker.add(fn)});function fn(){for(const c of Te)c.update(),c.draw();if(!t(De)&&!es&&Te.every(c=>c.state==="stopped")){es=!0,Hr();const c=ln();console.log(`Checking wins, found ${c.length} wins`),c.length>0?(h(st,be(c)),h(Ae,be(c.reduce((f,A)=>f+A.payout,0))),Zr(t(et),c,t(Ae)),un(t(Ae)),h(De,!0),h(Qr,be(Date.now())),console.log(`🎉 VOITTO! ${t(Ae)} pistettä! Uusi saldo: ${t(ze)}`),console.log(`isShowingWin set to: ${t(De)}, totalWin: ${t(Ae)}`),c.forEach(f=>{const A=f.multiplier?` (${f.multiplier}x multiplier)`:"";console.log(`${f.count}x ${f.symbol} = ${f.payout} pistettä${A}`)}),cn(c),ls("win"),t(le)&&!Xe&&(Xe=!0,Oe=window.setTimeout(()=>{t(De)&&t(le)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),h(De,!1),cs()),Oe=window.setTimeout(()=>{Xe=!1,ps()},200)},1500))):(console.log("No wins found this spin"),t(le)&&!Xe&&(Xe=!0,Oe=window.setTimeout(()=>{Xe=!1,ps()},500))),t(Z)&&t(je)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${t(Ke)}`),setTimeout(()=>{h(is,be(t(Ke))),h(os,!0)},2e3))}}function fs(){if(t(Z)||Ur(),Yr(),t(Z)&&t(je)>0)Se(je,-1),Se(rs),console.log(`🎰 FREE SPIN! Remaining: ${t(je)}`);else if(!t(Z)){if(t(ze)<t(ke)){alert(`Not enough credits! Balance: ${t(ze)}, Bet: ${t(ke)}`),_t();return}h(ze,t(ze)-t(ke)),Se(et),h(tt,t(tt)+t(ke))}Oe!==null&&(clearTimeout(Oe),Oe=null),h(st,be([])),h(Ae,0),h(Ve,0),console.log("🔄 lastWin nollattu: "+t(Ve)),h(De,!1),es=!1,cs(),xt=xa(),Te.forEach((c,f)=>{c.startSynchronized(f)}),ls("spin")}function pn(c,f,A=1400){if(typeof window>"u")return;const S=document.getElementById("winLabel");if(!S)return;S.classList.add("rolling");const g=performance.now(),$=f-c,k=I=>1-Math.pow(1-I,3);function B(I){const G=Math.min(1,(I-g)/A),W=c+$*k(G);h(Ve,W),G<1?requestAnimationFrame(B):(h(Ve,be(f)),S.classList.remove("rolling"),S.classList.add("winHit"),setTimeout(()=>S.classList.remove("winHit"),450))}requestAnimationFrame(B)}function un(c){h(ze,t(ze)+c),h(bt,t(bt)+c);const f=t(Ve);h(Ve,be(c));const A=c>t(ke)*50?2e3:1400;if(pn(f,c,A),t(Z)&&h(Ke,t(Ke)+c),c>0){Se(ts);const S=c/t(ke);S>=10&&qr(),Je&&(S>=50?Je.show():S>=20?setTimeout(()=>Je.show(),200):S>=10&&setTimeout(()=>Je.show(),400))}}function hn(){t(vt)<ba.length-1&&Se(vt)}function gn(){t(vt)>0&&Se(vt,-1)}function Ne(c){h(le,!0),h(mt,be(c)),h(he,!1),ps()}function _t(){h(le,!1),h(mt,0),Xe=!1,Oe!==null&&(clearTimeout(Oe),Oe=null)}function ps(){if(!t(le)||t(mt)<=0){_t();return}console.log(`Autoplay: Starting spin ${t(mt)} rounds left`),fs(),Se(mt,-1)}function vn(){confirm("Reset all statistics?")&&(h(et,0),h(tt,0),h(bt,0),h(ts,0),h(Lt,0),h(rs,0),h(Pt,0),h(ns,0))}var ka=al();Dn(c=>{var f=Gi();p(Ye(f)),V(c,f)});var Aa=Ye(ka);{var mn=c=>{Mi(c,{onloaded:()=>h(ma,!0)})};re(Aa,c=>{t(ma)||c(mn)})}var $a=p(Aa,2);{var bn=c=>{var f=Xi(),A=p(w(f),2),S=p(w(A));_(A);var g=p(A,2);{var $=z=>{var U=Hi(),H=p(w(U));_(U),ie(()=>K(H,` ${t(Ze)??""}`)),V(z,U)};re(g,z=>{t(Ze)&&z($)})}var k=p(g,2),B=p(w(k));B.nodeValue=` ${we??""}`,_(k);var I=p(k,2),G=p(w(I));G.nodeValue=` ${Me??""}`,_(I);var W=p(I,2),oe=p(w(W));_(W);var E=p(W,2);{var C=z=>{var U=Vi(),H=w(U),Y=w(H);_(H);var Re=p(H,2);Ht(Re,17,()=>Pe,Gt,(fe,se)=>{var pe=Yi(),Mn=w(pe,!0);_(pe),ie(()=>K(Mn,t(se))),V(fe,pe)}),_(U),ie(()=>K(Y,`Log (${Pe.length??""})`)),V(z,U)};re(E,z=>{Pe.length>0&&z(C)})}_(f),ie(()=>{K(S,` ${t(gt)??""}`),K(oe,` ${_e.a??""}`)}),V(c,f)};re($a,c=>{(t(gt)!=="Assets loaded successfully!"||t(Ze))&&c(bn)})}var Sa=p($a,2);{var yn=c=>{var f=Qi(),A=p(w(f),2),S=w(A);_(A);var g=p(A,2);Ht(g,17,()=>t(st),Gt,(I,G)=>{var W=Ki(),oe=w(W);_(W),ie(E=>K(oe,`${t(G).count??""} × ${_a[t(G).symbol]??""} = ${E??""} pistettä`),[()=>t(G).payout.toFixed(2)]),V(I,W)});var $=p(g,2);{var k=I=>{var G=qi(),W=w(G),oe=w(W);_(W),_(G),ie(()=>K(oe,`✨ ${t(st)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),V(I,G)};re($,I=>{t(st).length>0&&t(st)[0].multiplier>1&&I(k)})}var B=p($,2);_(f),ie(I=>K(S,`${I??""} pistettä`),[()=>t(Ae).toFixed(2)]),M("click",B,()=>{h(De,!1),cs(),console.log("Win popup closed, ready for next spin")}),V(c,f)};re(Sa,c=>{t(Ae)>0&&t(De)&&c(yn)})}var Ea=p(Sa,2);{var xn=c=>{var f=el(),A=p(w(f),2),S=p(w(A),2),g=w(S),$=p(w(g),2),k=w($,!0);_($),_(g);var B=p(g,2);{var I=fe=>{var se=Ji();M("click",se,_t),V(fe,se)},G=fe=>{var se=Zi();M("click",se,()=>{h(he,!0),h(Be,!1)}),V(fe,se)};re(B,fe=>{t(le)?fe(I):fe(G,!1)})}_(S);var W=p(S,2),oe=w(W),E=p(w(oe),2),C=w(E,!0);_(E),_(oe);var z=p(oe,2),U=w(z),H=p(U,2),Y=p(H,2);_(z),_(W),kr(2),_(A);var Re=p(A,10);_(f),ie(fe=>{y(f,"style",`
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
    max-height: ${fe??""}px;
    overflow-y: auto;
    font-size: ${t(i)??""}em;
  `),y($,"style",`color: ${(t(le)?"#00ff00":"#ff6666")??""}; font-weight: bold;`),K(k,t(le)?`ON (${autoPlayRounds} left)`:"OFF"),K(C,t(Q)==="slow"?"🐌 SLOW":t(Q)==="medium"?"🏃 MEDIUM":"⚡ FAST"),y(U,"style",`flex: 1; padding: 10px; background: ${(t(Q)==="slow"?"linear-gradient(135deg, #4488ff 0%, #66aaff 100%)":"rgba(255,255,255,0.1)")??""}; color: white; border: ${(t(Q)==="slow"?"2px solid #ffd700":"1px solid #555")??""}; border-radius: 8px; cursor: pointer; font-size: 0.9em;`),y(H,"style",`flex: 1; padding: 10px; background: ${(t(Q)==="medium"?"linear-gradient(135deg, #4488ff 0%, #66aaff 100%)":"rgba(255,255,255,0.1)")??""}; color: white; border: ${(t(Q)==="medium"?"2px solid #ffd700":"1px solid #555")??""}; border-radius: 8px; cursor: pointer; font-size: 0.9em;`),y(Y,"style",`flex: 1; padding: 10px; background: ${(t(Q)==="fast"?"linear-gradient(135deg, #4488ff 0%, #66aaff 100%)":"rgba(255,255,255,0.1)")??""}; color: white; border: ${(t(Q)==="fast"?"2px solid #ffd700":"1px solid #555")??""}; border-radius: 8px; cursor: pointer; font-size: 0.9em;`)},[()=>Math.min(t(l)*t(i)*.8,80*window.innerHeight/100)]),M("click",U,()=>{h(Q,"slow")}),M("click",H,()=>{h(Q,"medium")}),M("click",Y,()=>{h(Q,"fast")}),M("click",Re,()=>{h(Be,!1)}),V(c,f)};re(Ea,c=>{t(Be)&&c(xn)})}var La=p(Ea,2);{var wn=c=>{var f=tl(),A=w(f),S=p(w(A),4),g=w(S,!0);_(S);var $=p(S,2);_(A),_(f),ie(k=>K(g,k),[()=>t(is).toFixed(2)]),M("click",$,()=>{h(os,!1),h(Z,!1),h(Ke,0),h(is,0),qt()}),M("mouseenter",$,k=>{k.currentTarget.style.transform="scale(1.05)",k.currentTarget.style.boxShadow="0 6px 20px rgba(255, 215, 0, 0.6)"}),M("mouseleave",$,k=>{k.currentTarget.style.transform="scale(1)",k.currentTarget.style.boxShadow="0 4px 15px rgba(255, 215, 0, 0.4)"}),V(c,f)};re(La,c=>{t(os)&&c(wn)})}var Pa=p(La,2),us=w(Pa),kt=w(us),hs=w(kt),gs=p(hs,2),Ta=w(gs);{var _n=c=>{var f=sl(),A=w(f),S=p(A,2),g=p(S,2),$=p(g,2),k=p($,2),B=p(k,2),I=p(B,2),G=p(I,2),W=p(G,2),oe=p(W,2);_(f),ie(()=>{y(f,"style",`
    position: absolute;
    bottom: ${(t(me).height/t(i)+20)*t(i)}px;
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
      `),y(g,"style",`
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
      `),y(G,"style",`
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
      `),y(W,"style",`
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
      `),y(oe,"style",`
        width: 100%;
        padding: ${10*t(i)}px;
        background: rgba(255, 255, 255, 0.1);
        color: #aaa;
        border: ${1*t(i)}px solid #555;
        border-radius: ${8*t(i)}px;
        cursor: pointer;
        font-size: ${14*t(i)}px;
      `)}),M("click",S,()=>{Ne(10),h(he,!1)}),M("click",g,()=>{Ne(25),h(he,!1)}),M("click",$,()=>{Ne(50),h(he,!1)}),M("click",k,()=>{Ne(100),h(he,!1)}),M("click",B,()=>{Ne(200),h(he,!1)}),M("click",I,()=>{Ne(500),h(he,!1)}),M("click",G,()=>{Ne(1e3),h(he,!1)}),M("click",W,()=>{Ne(5e3),h(he,!1)}),M("click",oe,()=>{h(he,!1)}),V(c,f)};re(Ta,c=>{t(he)&&c(_n)})}var vs=p(Ta,2);y(vs,"src",`${N??""}/Control_leftend.png`);var Tt=p(vs,2),ms=w(Tt),Rt=w(ms),Ra=w(Rt);_(Rt);var bs=p(Rt,2),Ia=w(bs),ys=p(Ia,2),xs=w(ys),It=p(xs,2),kn=w(It,!0);_(It);var Oa=p(It,2);_(ys),_(bs);var ws=p(bs,2);y(ws,"src",`${N??""}/Control_divider.png`);var _s=p(ws,2),Ba=w(_s),ks=p(Ba,2),As=w(ks),An=w(As,!0);_(As),_(ks),_(_s);var Ca=p(_s,2);y(Ca,"src",`${N??""}/Control_divider.png`),_(ms);var Ma=p(ms,2),$s=p(Ma,2),Ss=w($s),Es=w(Ss);_(Ss),_($s);var Fa=p($s,2),Ot=w(Fa),Bt=w(Ot),Wa=p(Bt,2);_(Ot);var Ls=p(Ot,2);y(Ls,"src",`${N??""}/Control_divider.png`);var Ct=p(Ls,2),Mt=w(Ct),za=p(Mt,2);_(Ct);var Ps=p(Ct,2);y(Ps,"src",`${N??""}/Control_divider.png`);var Ts=p(Ps,2),ja=w(Ts),Rs=p(ja,2),Is=w(Rs),$n=w(Is,!0);_(Is),_(Rs),_(Ts);var Os=p(Ts,2);y(Os,"src",`${N??""}/Control_divider.png`);var Da=p(Os,2),Na=w(Da);_(Da),_(Fa),_(Tt);var Ua=p(Tt,2);y(Ua,"src",`${N??""}/Control_rightend.png`),_(gs),_(kt),nr(kt,c=>ds=c,()=>ds);var Ft=p(kt,2);Ft.textContent=`🛠️ DEBUG v${a}`;var Ga=p(Ft,2);const Sn=ge(()=>t(Ae)/t(ke)>=50?"jackpot":t(Ae)/t(ke)>=20?"medium":"small");nr(Ii(Ga,{get winLevel(){return t(Sn)},get winAmount(){return t(Ae)},get vinylStartScale(){return Jt.vinylStartScale},get vinylEndScale(){return Jt.vinylEndScale},get sparkleScale(){return Jt.sparkleScale}}),c=>Je=c,()=>Je);var Wt=p(Ga,2),Ha=p(w(Wt),2);Ha.textContent=`v${a}`;var Bs=p(Ha,2),Ya=p(w(Bs),2),En=w(Ya,!0);_(Ya),_(Bs);var Cs=p(Bs,2),Va=p(w(Cs),2),Ln=w(Va,!0);_(Va),_(Cs);var Ms=p(Cs,2),Xa=p(w(Ms),2),Pn=w(Xa,!0);_(Xa),_(Ms);var Fs=p(Ms,2),Ws=p(w(Fs),2),Tn=w(Ws);_(Ws),_(Fs);var zs=p(Fs,2),js=p(w(zs),2),Rn=w(js);_(js),_(zs);var Ds=p(zs,2),Ka=p(w(Ds),2),In=w(Ka,!0);_(Ka),_(Ds);var Ns=p(Ds,2),qa=p(w(Ns),2),On=w(qa,!0);_(qa),_(Ns);var Us=p(Ns,2),Qa=p(w(Us),2),Bn=w(Qa);_(Qa),_(Us);var Ja=p(Us,2),Za=p(Ja,2),at=w(Za),Cn=w(at);_(at);var zt=p(at,2),Gs=p(zt,2);_(Za),_(Wt);var Hs=p(Wt,2),jt=w(Hs),Ys=p(jt,2);_(Hs),_(us),_(Pa),ie((c,f,A,S,g,$,k,B)=>{y(us,"style",`
    position: relative;
    width: ${t(o)*t(i)}px;
    height: ${t(l)*t(i)}px;
  `),y(kt,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${t(o)??""}px;
        height: ${t(l)??""}px;
      `),y(hs,"style",`
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
        `),y(gs,"style",`
        position: absolute;
        left: ${t(me).x??""}px;
        top: ${t(me).y??""}px;
        width: ${t(me).width??""}px;
        height: ${t(me).height??""}px;
        display: flex;
        align-items: center;
        z-index: 1000;
      `),y(vs,"style",`height: ${t(me).height??""}px; flex-shrink: 0;`),y(Tt,"style",`
    flex-grow: 1;
    height: ${t(me).height??""}px;
    background-image: url('${N??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    padding: 0 ${20*t(i)}px;
    position: relative;
    gap: ${20*t(i)}px;
  `),y(Rt,"style",`display: none; align-items: center; justify-content: center; margin-right: ${10*t(i)}px;`),y(Ra,"style",`
            width: ${50*t(i)}px;
            height: ${50*t(i)}px;
            background-image: url('${N??""}/Control_menubar.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(Ia,"style",`color: #00ff00; font-size: ${12*t(i)}px; font-weight: bold; line-height: 1; height: ${16*t(i)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(i)}px;`),y(ys,"style",`display: flex; gap: ${5*t(i)}px; align-items: center; height: ${44*t(i)}px;`),y(xs,"style",`
              width: ${40*t(i)}px;
              height: ${40*t(i)}px;
              background-image: url('${N??""}/Control_lowerbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            `),y(It,"style",`
            color: #fff;
            font-size: ${18*t(i)}px;
            font-weight: bold;
            min-width: ${80*t(i)}px;
            text-align: center;
            font-family: 'Courier New', monospace;
          `),K(kn,c),y(Oa,"style",`
              width: ${40*t(i)}px;
              height: ${40*t(i)}px;
              background-image: url('${N??""}/Control_upperbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            `),y(ws,"style",`height: ${t(me).height*.8}px; flex-shrink: 0;`),y(Ba,"style",`color: #00ff00; font-size: ${12*t(i)}px; font-weight: bold; line-height: 1; height: ${16*t(i)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(i)}px;`),y(ks,"style",`height: ${44*t(i)}px; display: flex; align-items: center;`),y(As,"style",`
            color: #fff;
            font-size: ${20*t(i)}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
          `),K(An,f),y(Ca,"style",`height: ${t(me).height*.8}px; flex-shrink: 0;`),y(Ma,"style",`flex-shrink: 0; width: ${130*t(i)}px;`),na(Ss,1,`play-button-wrapper ${(t(Qt)?"glare-animate":"")??""}`,"svelte-1bferk7"),y(Es,"style",`
            width: ${110*t(i)}px;
            height: ${110*t(i)}px;
            background-image: url('${N??""}/${(t(le)?"Control_playbutton_stop.png":"Control_playbutton.png")??""}');
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
          `),y(Es,"title",t(le)?"STOP AUTOPLAY":"SPIN"),y(Ot,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*t(i)}px;`),y(Bt,"style",`
            width: ${50*t(i)}px;
            height: ${50*t(i)}px;
            background-image: url('${N??""}/${(t(le)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(Bt,"title",t(le)?"Stop Autoplay":"Autoplay"),y(Wa,"src",`${N??""}/${(t(le)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),y(Wa,"style",`height: ${10*t(i)}px; width: auto; display: block;`),y(Ls,"style",`height: ${t(me).height*.8}px; flex-shrink: 0;`),y(Ct,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*t(i)}px;`),y(Mt,"style",`
            width: ${50*t(i)}px;
            height: ${50*t(i)}px;
            background-image: url('${N??""}/Control_fastplay_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(Mt,"title",`Spin Speed: ${(t(Q)==="slow"?"Slow":t(Q)==="medium"?"Medium":"Fast")??""}`),y(za,"src",`${N??""}/${(t(Q)==="slow"?"Control_bar_deselect.png":t(Q)==="medium"?"Control_half_bar_select.png":"Control_bar_select.png")??""}`),y(za,"style",`height: ${10*t(i)}px; width: auto; display: block;`),y(Ps,"style",`height: ${t(me).height*.8}px; flex-shrink: 0;`),y(ja,"style",`color: #00ff00; font-size: ${12*t(i)}px; font-weight: bold; line-height: 1; height: ${16*t(i)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(i)}px;`),y(Rs,"style",`height: ${44*t(i)}px; display: flex; align-items: center;`),y(Is,"style",`
            color: #fff;
            font-size: ${20*t(i)}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
          `),K($n,A),y(Os,"style",`height: ${t(me).height*.8}px; flex-shrink: 0;`),y(Na,"style",`
            width: ${50*t(i)}px;
            height: ${50*t(i)}px;
            background-image: url('${N??""}/Control_menubar.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(Ua,"style",`height: ${t(me).height??""}px; flex-shrink: 0;`),y(Ft,"style",`
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
  `),y(Wt,"style",`
  position: absolute;
  top: 20px;
  left: 20px;
  display: ${(t(Zt)?"block":"none")??""};
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
`),K(En,S),K(Ln,g),K(Pn,$),y(Ws,"style",`color: ${k??""};`),K(Tn,`${t(ss)??""}%`),y(js,"style",`color: ${B??""};`),K(Rn,`${t(as)??""}%`),K(In,t(Lt)),K(On,t(rs)),K(Bn,`${t(Jr)??""}%`),at.disabled=t(xe).length===0,y(at,"style",`
        width: 100%;
        padding: 5px;
        background: ${(t(xe).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(t(xe).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(t(xe).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(t(xe).length>0?"1":"0.5")??""};
      `),K(Cn,`Download Win Log (${t(xe).length??""})`),zt.disabled=t(xe).length===0,y(zt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(t(xe).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(t(xe).length>0?"1":"0.5")??""};
      `),Gs.disabled=t(Z),y(Gs,"style",`
        width: 100%;
        padding: 5px;
        background: ${(t(Z)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(t(Z)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(t(Z)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(t(Z)?"0.5":"1")??""};
      `),y(Hs,"style",`
  position: absolute;
  top: ${10*t(i)}px;
  right: ${10*t(i)}px;
  display: flex;
  gap: ${10*t(i)}px;
  z-index: 1001;
`),y(jt,"style",`
      width: ${50*t(i)}px;
      height: ${50*t(i)}px;
      background-image: url('${N??""}/${(t(Le)?"music_on.png":"music_off.png")??""}');
      background-size: contain;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
      background-color: transparent;
    `),y(jt,"title",t(Le)?"Music: ON":"Music: OFF"),y(Ys,"style",`
      width: ${50*t(i)}px;
      height: ${50*t(i)}px;
      background-image: url('${N??""}/${(t(ce)?"sounds_on.png":"sounds_off.png")??""}');
      background-size: contain;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
      background-color: transparent;
    `),y(Ys,"title",t(ce)?"Sound: ON":"Sound: OFF")},[()=>t(ke).toFixed(2),()=>t(ze).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>t(Ve).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>t(et).toLocaleString(),()=>t(tt).toLocaleString(),()=>t(bt).toLocaleString(),()=>parseFloat(t(ss))>=95?"#00ff00":parseFloat(t(ss))>=85?"#ffff00":"#ff6666",()=>parseFloat(t(as))>=30?"#00ff00":parseFloat(t(as))>=20?"#ffff00":"#ff6666"]),M("click",hs,()=>{h(Be,!t(Be))}),M("click",Ra,()=>{h(Be,!t(Be))}),M("click",xs,gn),M("click",Oa,hn),M("click",Es,()=>{t(le)?_t():Te.some(f=>f.state==="spinning"||f.state==="slowing")?Te.forEach(f=>{f.state==="spinning"?(f.stopDelay=0,f.state="slowing",f.speed=f.targetSpeed*.5):f.state==="slowing"&&(f.speed=f.speed*.3)}):fs()}),M("click",Bt,()=>{t(le)?_t():h(he,!t(he))}),M("click",Mt,()=>{t(Q)==="slow"?h(Q,"medium"):t(Q)==="medium"?h(Q,"fast"):h(Q,"slow")}),M("click",Na,()=>{h(Be,!t(Be))}),M("click",Ft,()=>{h(Zt,!t(Zt))}),M("click",Ja,vn),M("click",at,en),M("click",zt,tn),M("click",Gs,sn),M("click",jt,Vr),M("click",Ys,Xr),V(s,ka),Vt()}var nl=ee('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),ol=ee('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function il(s,e){Yt(e,!1);let a=rt(e,"isAuthenticated",12,!1),r=sa(""),n=sa(!1);const o="slot2024";function l(){t(r)===o?(a(!0),sessionStorage.setItem("gameAuthenticated","true")):(h(n,!0),h(r,""),setTimeout(()=>h(n,!1),3e3))}ca(()=>{a(sessionStorage.getItem("gameAuthenticated")==="true")}),Un();var d=Ut(),v=Ye(d);{var b=u=>{var m=ol(),x=w(m),L=p(w(x),4),T=w(L);$o(T),kr(2),_(L);var J=p(L,2);{var F=P=>{var X=nl();V(P,X)};re(J,P=>{t(n)&&P(F)})}_(x),_(m),Eo(T,()=>t(r),P=>h(r,P)),M("submit",L,Lo(l)),V(u,m)};re(v,u=>{a()||u(b)})}V(s,d),Vt()}var ll=ee("<!> <!>",1);function xl(s){let e=sa(!1);var a=ll(),r=Ye(a);il(r,{get isAuthenticated(){return t(e)},set isAuthenticated(l){h(e,l)},$$legacy:!0});var n=p(r,2);{var o=l=>{rl(l,{})};re(n,l=>{t(e)&&l(o)})}V(s,a)}export{Tr as A,Er as C,Mo as R,Ro as S,Rr as V,xl as _,To as u};
