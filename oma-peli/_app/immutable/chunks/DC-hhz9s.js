const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Cxag-hH3.js","./l1Sqtw7g.js","./BrW7ntrJ.js","./Fx7Xcyif.js","./DUH9uncm.js","./C2GHuDhf.js","./CHc89HUU.js","./D3oVG2-1.js"])))=>i.map(i=>d[i]);
var Bo=Object.defineProperty;var Co=(s,e,a)=>e in s?Bo(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var Se=(s,e,a)=>Co(s,typeof e!="symbol"?e+"":e,a);import{g as Fo,l as Wo,e as jt,a as N,t as Z,n as yn,i as M,j as zo,k as Do}from"./CsxIJThA.js";import{i as jo}from"./DqfWCwGf.js";import{y as Pe,j as No,a8 as Uo,F as t,Q as Go,aa as Ho,ab as Za,h as en,e as Us,k as kt,l as Yo,ac as xn,w as wn,ad as Vo,q as _n,a7 as Xo,U as Ko,a2 as tn,ar as Gs,z as sn,as as Qo,at as Jo,au as Zo,o as ei,av as ti,aw as si,ax as ai,ay as ni,b as oi,az as ii,aA as ri,a6 as li,aB as ci,aC as di,D as fi,L as pi,p as Gt,f as Ve,ah as O,a as Ht,T as h,c as x,s as p,r as w,t as ne,I as ue,ag as ia,aD as Ee,aE as An,aF as Zs}from"./Fx7Xcyif.js";import{_ as an,i as se,p as ye}from"./BrW7ntrJ.js";import{s as X}from"./DfoPkomP.js";import{p as it,b as nn}from"./C4w3i6Q0.js";import{b as ke}from"./DX77Jz24.js";import{e as Ye,E as z,a as ui,C as ra,Q as ea,V as ta,N as Hs,D as xe,H as vi,p as lt,ab as ft,ac as Ze,ad as hi,w as He,ae as St,af as kn,ag as pt,a9 as Fe,ah as Yt,a1 as $n,ai as gi,aj as Ys,y as Vs}from"./l1Sqtw7g.js";import{A as mi,B as on,G as bi,a as rn}from"./DUH9uncm.js";function Nt(s,e){return e}function yi(s,e,a,n){for(var o=[],r=e.length,l=0;l<r;l++)Zo(e[l].e,o,!0);var d=r>0&&o.length===0&&a!==null;if(d){var g=a.parentNode;ei(g),g.append(a),n.clear(),Ge(s,e[0].prev,e[r-1].next)}ti(o,()=>{for(var y=0;y<r;y++){var v=e[y];d||(n.delete(v.k),Ge(s,v.prev,v.next)),si(v.e,!d)}})}function Ut(s,e,a,n,o,r=null){var l=s,d={flags:e,items:new Map,first:null};Pe&&No();var g=null,y=!1,v=Go(()=>{var m=a();return Xo(m)?m:m==null?[]:_n(m)});Uo(()=>{var m=t(v),_=m.length;if(y&&_===0)return;y=_===0;let P=!1;if(Pe){var R=l.data===Ho;R!==(_===0)&&(l=Za(),en(l),Us(!1),P=!0)}if(Pe){for(var Q=null,D,L=0;L<_;L++){if(kt.nodeType===8&&kt.data===Yo){l=kt,P=!0,Us(!1);break}var C=m[L],ie=n(C,L);D=Sn(kt,d,Q,null,C,ie,L,o,e,a),d.items.set(ie,D),Q=D}_>0&&en(Za())}Pe||xi(m,d,l,o,e,n,a),r!==null&&(_===0?g?xn(g):g=wn(()=>r(l)):g!==null&&Vo(g,()=>{g=null})),P&&Us(!0),t(v)}),Pe&&(l=kt)}function xi(s,e,a,n,o,r,l){var d=s.length,g=e.items,y=e.first,v=y,m,_=null,P=[],R=[],Q,D,L,C;for(C=0;C<d;C+=1){if(Q=s[C],D=r(Q,C),L=g.get(D),L===void 0){var ie=v?v.e.nodes_start:a;_=Sn(ie,e,_,_===null?e.first:_.next,Q,D,C,n,o,l),g.set(D,_),P=[],R=[],v=_.next;continue}if(wi(L,Q,C),(L.e.f&Gs)!==0&&xn(L.e),L!==v){if(m!==void 0&&m.has(L)){if(P.length<R.length){var ve=R[0],K;_=ve.prev;var re=P[0],V=P[P.length-1];for(K=0;K<P.length;K+=1)ln(P[K],ve,a);for(K=0;K<R.length;K+=1)m.delete(R[K]);Ge(e,re.prev,V.next),Ge(e,_,re),Ge(e,V,ve),v=ve,_=V,C-=1,P=[],R=[]}else m.delete(L),ln(L,v,a),Ge(e,L.prev,L.next),Ge(e,L,_===null?e.first:_.next),Ge(e,_,L),_=L;continue}for(P=[],R=[];v!==null&&v.k!==D;)(v.e.f&Gs)===0&&(m??(m=new Set)).add(v),R.push(v),v=v.next;if(v===null)continue;L=v}P.push(L),_=L,v=L.next}if(v!==null||m!==void 0){for(var U=m===void 0?[]:_n(m);v!==null;)(v.e.f&Gs)===0&&U.push(v),v=v.next;var Le=U.length;if(Le>0){var we=null;yi(e,U,we,g)}}sn.first=e.first&&e.first.e,sn.last=_&&_.e}function wi(s,e,a,n){Jo(s.v,e),s.i=a}function Sn(s,e,a,n,o,r,l,d,g,y){var v=(g&ai)!==0,m=(g&ni)===0,_=v?m?Ko(o):tn(o):o,P=(g&Qo)===0?l:tn(l),R={i:P,v:_,k:r,a:null,e:null,prev:a,next:n};try{return R.e=wn(()=>d(s,_,P,y),Pe),R.e.prev=a&&a.e,R.e.next=n&&n.e,a===null?e.first=R:(a.next=R,a.e.next=R.e),n!==null&&(n.prev=R,n.e.prev=R.e),R}finally{}}function ln(s,e,a){for(var n=s.next?s.next.e.nodes_start:a,o=e?e.e.nodes_start:a,r=s.e.nodes_start;r!==n;){var l=oi(r);o.before(r),r=l}}function Ge(s,e,a){e===null?s.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}const cn=[...` 	
\r\f \v\uFEFF`];function _i(s,e,a){var n=s==null?"":""+s;if(e&&(n=n?n+" "+e:e),a){for(var o in a)if(a[o])n=n?n+" "+o:o;else if(n.length)for(var r=o.length,l=0;(l=n.indexOf(o,l))>=0;){var d=l+r;(l===0||cn.includes(n[l-1]))&&(d===n.length||cn.includes(n[d]))?n=(l===0?"":n.substring(0,l))+n.substring(d+1):l=d}}return n===""?null:n}function sa(s,e,a,n,o,r){var l=s.__className;if(Pe||l!==a){var d=_i(a,n,r);(!Pe||d!==s.getAttribute("class"))&&(d==null?s.removeAttribute("class"):e?s.className=d:s.setAttribute("class",d)),s.__className=a}else if(r)for(var g in r){var y=!!r[g];(o==null||y!==!!o[g])&&s.classList.toggle(g,y)}return r}function Ai(s){if(Pe){var e=!1,a=()=>{if(!e){if(e=!0,s.hasAttribute("value")){var n=s.value;b(s,"value",null),s.value=n}if(s.hasAttribute("checked")){var o=s.checked;b(s,"checked",null),s.checked=o}}};s.__on_r=a,ii(a),Fo()}}function b(s,e,a,n){var o=s.__attributes??(s.__attributes={});Pe&&(o[e]=s.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&s.nodeName==="LINK")||o[e]!==(o[e]=a)&&(e==="style"&&"__styles"in s&&(s.__styles={}),e==="loading"&&(s[ri]=a),a==null?s.removeAttribute(e):typeof a!="string"&&ki(s).includes(e)?s[e]=a:s.setAttribute(e,a))}var dn=new Map;function ki(s){var e=dn.get(s.nodeName);if(e)return e;dn.set(s.nodeName,e=[]);for(var a,n=s,o=Element.prototype;o!==n;){a=ci(n);for(var r in a)a[r].set&&e.push(r);n=li(n)}return e}function $i(s,e,a=e){var n=di();Wo(s,"input",o=>{var r=o?s.defaultValue:s.value;if(r=Xs(s)?Ks(r):r,a(r),n&&r!==(r=e())){var l=s.selectionStart,d=s.selectionEnd;s.value=r??"",d!==null&&(s.selectionStart=l,s.selectionEnd=Math.min(d,s.value.length))}}),(Pe&&s.defaultValue!==s.value||fi(e)==null&&s.value)&&a(Xs(s)?Ks(s.value):s.value),pi(()=>{var o=e();Xs(s)&&o===Ks(s.value)||s.type==="date"&&!o&&!s.value||o!==s.value&&(s.value=o??"")})}function Xs(s){var e=s.type;return e==="number"||e==="range"}function Ks(s){return s===""?null:+s}function Si(s){return function(...e){var a=e[0];return a.preventDefault(),s==null?void 0:s.apply(this,e)}}const aa=[];Ye.handleByNamedList(z.Environment,aa);async function Ei(s){if(!s)for(let e=0;e<aa.length;e++){const a=aa[e];if(a.value.test()){await a.value.load();return}}}let $t;function Pi(){if(typeof $t=="boolean")return $t;try{$t=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{$t=!1}return $t}var En=(s=>(s[s.NONE=0]="NONE",s[s.COLOR=16384]="COLOR",s[s.STENCIL=1024]="STENCIL",s[s.DEPTH=256]="DEPTH",s[s.COLOR_DEPTH=16640]="COLOR_DEPTH",s[s.COLOR_STENCIL=17408]="COLOR_STENCIL",s[s.DEPTH_STENCIL=1280]="DEPTH_STENCIL",s[s.ALL=17664]="ALL",s))(En||{});class Li{constructor(e){this.items=[],this._name=e}emit(e,a,n,o,r,l,d,g){const{name:y,items:v}=this;for(let m=0,_=v.length;m<_;m++)v[m][y](e,a,n,o,r,l,d,g);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const a=this.items.indexOf(e);return a!==-1&&this.items.splice(a,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Ti=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Pn=class Ln extends ui{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const a=[...Ti,...this.config.runners??[]];this._addRunners(...a),this._unsafeEvalCheck()}async init(e={}){const a=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Ei(a),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const n in this._systemsHash)e={...this._systemsHash[n].constructor.defaultOptions,...e};e={...Ln.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let n=0;n<this.runners.init.items.length;n++)await this.runners.init.items[n].init(e);this._initOptions=e}render(e,a){let n=e;if(n instanceof ra&&(n={container:n},a&&(ea(ta,"passing a second argument is deprecated, please use render options instead"),n.target=a.renderTexture)),n.target||(n.target=this.view.renderTarget),n.target===this.view.renderTarget&&(this._lastObjectRendered=n.container,n.clearColor??(n.clearColor=this.background.colorRgba),n.clear??(n.clear=this.background.clearBeforeRender)),n.clearColor){const o=Array.isArray(n.clearColor)&&n.clearColor.length===4;n.clearColor=o?n.clearColor:Hs.shared.setValue(n.clearColor).toArray()}n.transform||(n.container.updateLocalTransform(),n.transform=n.container.localTransform),n.container.enableRenderGroup(),this.runners.prerender.emit(n),this.runners.renderStart.emit(n),this.runners.render.emit(n),this.runners.renderEnd.emit(n),this.runners.postrender.emit(n)}resize(e,a,n){const o=this.view.resolution;this.view.resize(e,a,n),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),n!==void 0&&n!==o&&this.runners.resolutionChange.emit(n)}clear(e={}){const a=this;e.target||(e.target=a.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=En.ALL);const{clear:n,clearColor:o,target:r}=e;Hs.shared.setValue(o??this.background.colorRgba),a.renderTarget.clear(r,n,Hs.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(a=>{this.runners[a]=new Li(a)})}_addSystems(e){let a;for(a in e){const n=e[a];this._addSystem(n.value,n.name)}}_addSystem(e,a){const n=new e(this);if(this[a])throw new Error(`Whoops! The name "${a}" is already in use`);this[a]=n,this._systemsHash[a]=n;for(const o in this.runners)this.runners[o].add(n);return this}_addPipes(e,a){const n=a.reduce((o,r)=>(o[r.name]=r.value,o),{});e.forEach(o=>{const r=o.value,l=o.name,d=n[l];this.renderPipes[l]=new r(this,d?new d:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(a=>{a.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Pi())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Pn.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Tn=Pn,zt;function Ri(s){return zt!==void 0||(zt=(()=>{var a;const e={stencil:!0,failIfMajorPerformanceCaveat:s??Tn.defaultOptions.failIfMajorPerformanceCaveat};try{if(!xe.get().getWebGLRenderingContext())return!1;let o=xe.get().createCanvas().getContext("webgl",e);const r=!!((a=o==null?void 0:o.getContextAttributes())!=null&&a.stencil);if(o){const l=o.getExtension("WEBGL_lose_context");l&&l.loseContext()}return o=null,r}catch{return!1}})()),zt}let Dt;async function Ii(s={}){return Dt!==void 0||(Dt=await(async()=>{const e=xe.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(s)).requestDevice(),!0}catch{return!1}})()),Dt}const fn=["webgl","webgpu","canvas"];async function Oi(s){let e=[];s.preference?(e.push(s.preference),fn.forEach(r=>{r!==s.preference&&e.push(r)})):e=fn.slice();let a,n={};for(let r=0;r<e.length;r++){const l=e[r];if(l==="webgpu"&&await Ii()){const{WebGPURenderer:d}=await an(async()=>{const{WebGPURenderer:g}=await import("./Cxag-hH3.js");return{WebGPURenderer:g}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);a=d,n={...s,...s.webgpu};break}else if(l==="webgl"&&Ri(s.failIfMajorPerformanceCaveat??Tn.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:d}=await an(async()=>{const{WebGLRenderer:g}=await import("./D3oVG2-1.js");return{WebGLRenderer:g}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);a=d,n={...s,...s.webgl};break}else if(l==="canvas")throw n={...s},new Error("CanvasRenderer is not yet implemented")}if(delete n.webgpu,delete n.webgl,!a)throw new Error("No available renderer for the current environment");const o=new a;return await o.init(n),o}const Rn="8.8.1";class In{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Rn)}static destroy(){}}In.extension=z.Application;class qi{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Rn)}destroy(){this._renderer=null}}qi.extension={type:[z.WebGLSystem,z.WebGPUSystem],name:"initHook",priority:-10};const On=class na{constructor(...e){this.stage=new ra,e[0]!==void 0&&ea(ta,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Oi(e),na._plugins.forEach(a=>{a.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return ea(ta,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,a=!1){const n=na._plugins.slice(0);n.reverse(),n.forEach(o=>{o.destroy.call(this)}),this.stage.destroy(a),this.stage=null,this.renderer.destroy(e),this.renderer=null}};On._plugins=[];let qn=On;Ye.handleByList(z.Application,qn._plugins);Ye.add(In);class Mn extends mi{constructor(e,a){super();const{textures:n,data:o}=e;Object.keys(o.pages).forEach(r=>{const l=o.pages[parseInt(r,10)],d=n[l.id];this.pages.push({texture:d})}),Object.keys(o.chars).forEach(r=>{const l=o.chars[r],{frame:d,source:g}=n[l.page],y=new vi(l.x+d.x,l.y+d.y,l.width,l.height),v=new lt({source:g,frame:y});this.chars[r]={id:r.codePointAt(0),xOffset:l.xOffset,yOffset:l.yOffset,xAdvance:l.xAdvance,kerning:l.kerning??{},texture:v}}),this.baseRenderedFontSize=o.fontSize,this.baseMeasurementFontSize=o.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:o.fontSize},this.baseLineOffset=o.baseLineOffset,this.lineHeight=o.lineHeight,this.fontFamily=o.fontFamily,this.distanceField=o.distanceField??{type:"none",range:0},this.url=a}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:a}=this.pages[e];a.destroy(!0)}this.pages=null}static install(e){on.install(e)}static uninstall(e){on.uninstall(e)}}const Qs={test(s){return typeof s=="string"&&s.startsWith("info face=")},parse(s){const e=s.match(/^[a-z]+\s+.+$/gm),a={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const m in e){const _=e[m].match(/^[a-z]+/gm)[0],P=e[m].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),R={};for(const Q in P){const D=P[Q].split("="),L=D[0],C=D[1].replace(/"/gm,""),ie=parseFloat(C),ve=isNaN(ie)?C:ie;R[L]=ve}a[_].push(R)}const n={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[o]=a.info,[r]=a.common,[l]=a.distanceField??[];l&&(n.distanceField={range:parseInt(l.distanceRange,10),type:l.fieldType}),n.fontSize=parseInt(o.size,10),n.fontFamily=o.face,n.lineHeight=parseInt(r.lineHeight,10);const d=a.page;for(let m=0;m<d.length;m++)n.pages.push({id:parseInt(d[m].id,10)||0,file:d[m].file});const g={};n.baseLineOffset=n.lineHeight-parseInt(r.base,10);const y=a.char;for(let m=0;m<y.length;m++){const _=y[m],P=parseInt(_.id,10);let R=_.letter??_.char??String.fromCharCode(P);R==="space"&&(R=" "),g[P]=R,n.chars[R]={id:P,page:parseInt(_.page,10)||0,x:parseInt(_.x,10),y:parseInt(_.y,10),width:parseInt(_.width,10),height:parseInt(_.height,10),xOffset:parseInt(_.xoffset,10),yOffset:parseInt(_.yoffset,10),xAdvance:parseInt(_.xadvance,10),kerning:{}}}const v=a.kerning||[];for(let m=0;m<v.length;m++){const _=parseInt(v[m].first,10),P=parseInt(v[m].second,10),R=parseInt(v[m].amount,10);n.chars[g[P]].kerning[g[_]]=R}return n}},pn={test(s){const e=s;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(s){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},a=s.getElementsByTagName("info")[0],n=s.getElementsByTagName("common")[0],o=s.getElementsByTagName("distanceField")[0];o&&(e.distanceField={type:o.getAttribute("fieldType"),range:parseInt(o.getAttribute("distanceRange"),10)});const r=s.getElementsByTagName("page"),l=s.getElementsByTagName("char"),d=s.getElementsByTagName("kerning");e.fontSize=parseInt(a.getAttribute("size"),10),e.fontFamily=a.getAttribute("face"),e.lineHeight=parseInt(n.getAttribute("lineHeight"),10);for(let y=0;y<r.length;y++)e.pages.push({id:parseInt(r[y].getAttribute("id"),10)||0,file:r[y].getAttribute("file")});const g={};e.baseLineOffset=e.lineHeight-parseInt(n.getAttribute("base"),10);for(let y=0;y<l.length;y++){const v=l[y],m=parseInt(v.getAttribute("id"),10);let _=v.getAttribute("letter")??v.getAttribute("char")??String.fromCharCode(m);_==="space"&&(_=" "),g[m]=_,e.chars[_]={id:m,page:parseInt(v.getAttribute("page"),10)||0,x:parseInt(v.getAttribute("x"),10),y:parseInt(v.getAttribute("y"),10),width:parseInt(v.getAttribute("width"),10),height:parseInt(v.getAttribute("height"),10),xOffset:parseInt(v.getAttribute("xoffset"),10),yOffset:parseInt(v.getAttribute("yoffset"),10),xAdvance:parseInt(v.getAttribute("xadvance"),10),kerning:{}}}for(let y=0;y<d.length;y++){const v=parseInt(d[y].getAttribute("first"),10),m=parseInt(d[y].getAttribute("second"),10),_=parseInt(d[y].getAttribute("amount"),10);e.chars[g[m]].kerning[g[v]]=_}return e}},un={test(s){return typeof s=="string"&&s.includes("<font>")?pn.test(xe.get().parseXML(s)):!1},parse(s){return pn.parse(xe.get().parseXML(s))}},Mi=[".xml",".fnt"],Bi={extension:{type:z.CacheParser,name:"cacheBitmapFont"},test:s=>s instanceof Mn,getCacheableAssets(s,e){const a={};return s.forEach(n=>{a[n]=e,a[`${n}-bitmap`]=e}),a[`${e.fontFamily}-bitmap`]=e,a}},Ci={extension:{type:z.LoadParser,priority:ft.Normal},name:"loadBitmapFont",test(s){return Mi.includes(Ze.extname(s).toLowerCase())},async testParse(s){return Qs.test(s)||un.test(s)},async parse(s,e,a){const n=Qs.test(s)?Qs.parse(s):un.parse(s),{src:o}=e,{pages:r}=n,l=[],d=n.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let m=0;m<r.length;++m){const _=r[m].file;let P=Ze.join(Ze.dirname(o),_);P=hi(P,o),l.push({src:P,data:d})}const g=await a.load(l),y=l.map(m=>g[m.src]);return new Mn({data:n,textures:y},o)},async load(s,e){return await(await xe.get().fetch(s)).text()},async unload(s,e,a){await Promise.all(s.pages.map(n=>a.unload(n.texture.source._sourceOrigin))),s.destroy()}};class Fi{constructor(e,a=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=a}add(e){e.forEach(a=>{this._assetList.push(a)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],a=Math.min(this._assetList.length,this._maxConcurrent);for(let n=0;n<a;n++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Wi={extension:{type:z.CacheParser,name:"cacheTextureArray"},test:s=>Array.isArray(s)&&s.every(e=>e instanceof lt),getCacheableAssets:(s,e)=>{const a={};return s.forEach(n=>{e.forEach((o,r)=>{a[n+(r===0?"":r+1)]=o})}),a}};async function Bn(s){if("Image"in globalThis)return new Promise(e=>{const a=new Image;a.onload=()=>{e(!0)},a.onerror=()=>{e(!1)},a.src=s});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(s)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const zi={extension:{type:z.DetectionParser,priority:1},test:async()=>Bn("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async s=>[...s,"avif"],remove:async s=>s.filter(e=>e!=="avif")},vn=["png","jpg","jpeg"],Di={extension:{type:z.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async s=>[...s,...vn],remove:async s=>s.filter(e=>!vn.includes(e))},ji="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function la(s){return ji?!1:document.createElement("video").canPlayType(s)!==""}const Ni={extension:{type:z.DetectionParser,priority:0},test:async()=>la("video/mp4"),add:async s=>[...s,"mp4","m4v"],remove:async s=>s.filter(e=>e!=="mp4"&&e!=="m4v")},Ui={extension:{type:z.DetectionParser,priority:0},test:async()=>la("video/ogg"),add:async s=>[...s,"ogv"],remove:async s=>s.filter(e=>e!=="ogv")},Gi={extension:{type:z.DetectionParser,priority:0},test:async()=>la("video/webm"),add:async s=>[...s,"webm"],remove:async s=>s.filter(e=>e!=="webm")},Hi={extension:{type:z.DetectionParser,priority:0},test:async()=>Bn("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async s=>[...s,"webp"],remove:async s=>s.filter(e=>e!=="webp")};class Yi{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,a,n)=>(this._parsersValidated=!1,e[a]=n,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,a){const n={promise:null,parser:null};return n.promise=(async()=>{var l,d;let o=null,r=null;if(a.loadParser&&(r=this._parserHash[a.loadParser],r||He(`[Assets] specified load parser "${a.loadParser}" not found while loading ${e}`)),!r){for(let g=0;g<this.parsers.length;g++){const y=this.parsers[g];if(y.load&&((l=y.test)!=null&&l.call(y,e,a,this))){r=y;break}}if(!r)return He(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}o=await r.load(e,a,this),n.parser=r;for(let g=0;g<this.parsers.length;g++){const y=this.parsers[g];y.parse&&y.parse&&await((d=y.testParse)==null?void 0:d.call(y,o,a,this))&&(o=await y.parse(o,a,this)||o,n.parser=y)}return o})(),n}async load(e,a){this._parsersValidated||this._validateParsers();let n=0;const o={},r=kn(e),l=St(e,y=>({alias:[y],src:y,data:{}})),d=l.length,g=l.map(async y=>{const v=Ze.toAbsolute(y.src);if(!o[y.src])try{this.promiseCache[v]||(this.promiseCache[v]=this._getLoadPromiseAndParser(v,y)),o[y.src]=await this.promiseCache[v].promise,a&&a(++n/d)}catch(m){throw delete this.promiseCache[v],delete o[y.src],new Error(`[Loader.load] Failed to load ${v}.
${m}`)}});return await Promise.all(g),r?o[l[0].src]:o}async unload(e){const n=St(e,o=>({alias:[o],src:o})).map(async o=>{var d,g;const r=Ze.toAbsolute(o.src),l=this.promiseCache[r];if(l){const y=await l.promise;delete this.promiseCache[r],await((g=(d=l.parser)==null?void 0:d.unload)==null?void 0:g.call(d,y,o,this))}});await Promise.all(n)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,a)=>(a.name?e[a.name]&&He(`[Assets] loadParser name conflict "${a.name}"`):He("[Assets] loadParser should have a name"),{...e,[a.name]:a}),{})}}function ut(s,e){if(Array.isArray(e)){for(const a of e)if(s.startsWith(`data:${a}`))return!0;return!1}return s.startsWith(`data:${e}`)}const Vi=".json",Xi="application/json",Ki={extension:{type:z.LoadParser,priority:ft.Low},name:"loadJson",test(s){return ut(s,Xi)||pt(s,Vi)},async load(s){return await(await xe.get().fetch(s)).json()}},Qi=".txt",Ji="text/plain",Zi={name:"loadTxt",extension:{type:z.LoadParser,priority:ft.Low,name:"loadTxt"},test(s){return ut(s,Ji)||pt(s,Qi)},async load(s){return await(await xe.get().fetch(s)).text()}},er=["normal","bold","100","200","300","400","500","600","700","800","900"],tr=[".ttf",".otf",".woff",".woff2"],sr=["font/ttf","font/otf","font/woff","font/woff2"],ar=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function nr(s){const e=Ze.extname(s),o=Ze.basename(s,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(d=>d.charAt(0).toUpperCase()+d.slice(1));let r=o.length>0;for(const d of o)if(!d.match(ar)){r=!1;break}let l=o.join(" ");return r||(l=`"${l.replace(/[\\"]/g,"\\$&")}"`),l}const or=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function ir(s){return or.test(s)?s:encodeURI(s)}const rr={extension:{type:z.LoadParser,priority:ft.Low},name:"loadWebFont",test(s){return ut(s,sr)||pt(s,tr)},async load(s,e){var n,o,r;const a=xe.get().getFontFaceSet();if(a){const l=[],d=((n=e.data)==null?void 0:n.family)??nr(s),g=((r=(o=e.data)==null?void 0:o.weights)==null?void 0:r.filter(v=>er.includes(v)))??["normal"],y=e.data??{};for(let v=0;v<g.length;v++){const m=g[v],_=new FontFace(d,`url(${ir(s)})`,{...y,weight:m});await _.load(),a.add(_),l.push(_)}return Fe.set(`${d}-and-url`,{url:s,fontFaces:l}),l.length===1?l[0]:l}return He("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(s){(Array.isArray(s)?s:[s]).forEach(e=>{Fe.remove(`${e.family}-and-url`),xe.get().getFontFaceSet().delete(e)})}};function ca(s,e=1){var n;const a=(n=Yt.RETINA_PREFIX)==null?void 0:n.exec(s);return a?parseFloat(a[1]):e}function da(s,e,a){s.label=a,s._sourceOrigin=a;const n=new lt({source:s,label:a}),o=()=>{delete e.promiseCache[a],Fe.has(a)&&Fe.remove(a)};return n.source.once("destroy",()=>{e.promiseCache[a]&&(He("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),o())}),n.once("destroy",()=>{s.destroyed||(He("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),o())}),n}const lr=".svg",cr="image/svg+xml",dr={extension:{type:z.LoadParser,priority:ft.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(s){return ut(s,cr)||pt(s,lr)},async load(s,e,a){var n;return((n=e.data)==null?void 0:n.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?pr(s):fr(s,e,a,this.config.crossOrigin)},unload(s){s.destroy(!0)}};async function fr(s,e,a,n){var D,L,C;const r=await(await xe.get().fetch(s)).blob(),l=URL.createObjectURL(r),d=new Image;d.src=l,d.crossOrigin=n,await d.decode(),URL.revokeObjectURL(l);const g=document.createElement("canvas"),y=g.getContext("2d"),v=((D=e.data)==null?void 0:D.resolution)||ca(s),m=((L=e.data)==null?void 0:L.width)??d.width,_=((C=e.data)==null?void 0:C.height)??d.height;g.width=m*v,g.height=_*v,y.drawImage(d,0,0,m*v,_*v);const{parseAsGraphicsContext:P,...R}=e.data??{},Q=new $n({resource:g,alphaMode:"premultiply-alpha-on-upload",resolution:v,...R});return da(Q,a,s)}async function pr(s){const a=await(await xe.get().fetch(s)).text(),n=new bi;return n.svg(a),n}const ur=`(function () {
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
`;let ct=null,oa=class{constructor(){ct||(ct=URL.createObjectURL(new Blob([ur],{type:"application/javascript"}))),this.worker=new Worker(ct)}};oa.revokeObjectURL=function(){ct&&(URL.revokeObjectURL(ct),ct=null)};const vr=`(function () {
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
`;let dt=null;class Cn{constructor(){dt||(dt=URL.createObjectURL(new Blob([vr],{type:"application/javascript"}))),this.worker=new Worker(dt)}}Cn.revokeObjectURL=function(){dt&&(URL.revokeObjectURL(dt),dt=null)};let hn=0,Js;class hr{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:a}=new oa;a.addEventListener("message",n=>{a.terminate(),oa.revokeObjectURL(),e(n.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,a){var n;return this._run("loadImageBitmap",[e,(n=a==null?void 0:a.data)==null?void 0:n.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Js===void 0&&(Js=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Js&&(this._createdWorkers++,e=new Cn().worker,e.addEventListener("message",a=>{this._complete(a.data),this._returnWorker(a.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,a){await this._initWorkers();const n=new Promise((o,r)=>{this._queue.push({id:e,arguments:a,resolve:o,reject:r})});return this._next(),n}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const a=this._queue.pop(),n=a.id;this._resolveHash[hn]={resolve:a.resolve,reject:a.reject},e.postMessage({data:a.arguments,uuid:hn++,id:n})}}const gn=new hr,gr=[".jpeg",".jpg",".png",".webp",".avif"],mr=["image/jpeg","image/png","image/webp","image/avif"];async function br(s,e){var o;const a=await xe.get().fetch(s);if(!a.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${s}: ${a.status} ${a.statusText}`);const n=await a.blob();return((o=e==null?void 0:e.data)==null?void 0:o.alphaMode)==="premultiplied-alpha"?createImageBitmap(n,{premultiplyAlpha:"none"}):createImageBitmap(n)}const Fn={name:"loadTextures",extension:{type:z.LoadParser,priority:ft.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(s){return ut(s,mr)||pt(s,gr)},async load(s,e,a){var r;let n=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await gn.isImageBitmapSupported()?n=await gn.loadImageBitmap(s,e):n=await br(s,e):n=await new Promise((l,d)=>{n=new Image,n.crossOrigin=this.config.crossOrigin,n.src=s,n.complete?l(n):(n.onload=()=>{l(n)},n.onerror=d)});const o=new $n({resource:n,alphaMode:"premultiply-alpha-on-upload",resolution:((r=e.data)==null?void 0:r.resolution)||ca(s),...e.data});return da(o,a,s)},unload(s){s.destroy(!0)}},Wn=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],yr=Wn.map(s=>`video/${s.substring(1)}`);function xr(s,e,a){a===void 0&&!e.startsWith("data:")?s.crossOrigin=_r(e):a!==!1&&(s.crossOrigin=typeof a=="string"?a:"anonymous")}function wr(s){return new Promise((e,a)=>{s.addEventListener("canplaythrough",n),s.addEventListener("error",o),s.load();function n(){r(),e()}function o(l){r(),a(l)}function r(){s.removeEventListener("canplaythrough",n),s.removeEventListener("error",o)}})}function _r(s,e=globalThis.location){if(s.startsWith("data:"))return"";e||(e=globalThis.location);const a=new URL(s,document.baseURI);return a.hostname!==e.hostname||a.port!==e.port||a.protocol!==e.protocol?"anonymous":""}const Ar={name:"loadVideo",extension:{type:z.LoadParser,name:"loadVideo"},test(s){const e=ut(s,yr),a=pt(s,Wn);return e||a},async load(s,e,a){var g,y;const n={...Ys.defaultOptions,resolution:((g=e.data)==null?void 0:g.resolution)||ca(s),alphaMode:((y=e.data)==null?void 0:y.alphaMode)||await gi(),...e.data},o=document.createElement("video"),r={preload:n.autoLoad!==!1?"auto":void 0,"webkit-playsinline":n.playsinline!==!1?"":void 0,playsinline:n.playsinline!==!1?"":void 0,muted:n.muted===!0?"":void 0,loop:n.loop===!0?"":void 0,autoplay:n.autoPlay!==!1?"":void 0};Object.keys(r).forEach(v=>{const m=r[v];m!==void 0&&o.setAttribute(v,m)}),n.muted===!0&&(o.muted=!0),xr(o,s,n.crossorigin);const l=document.createElement("source");let d;if(s.startsWith("data:"))d=s.slice(5,s.indexOf(";"));else if(!s.startsWith("blob:")){const v=s.split("?")[0].slice(s.lastIndexOf(".")+1).toLowerCase();d=Ys.MIME_TYPES[v]||`video/${v}`}return l.src=s,d&&(l.type=d),new Promise(v=>{const m=async()=>{const _=new Ys({...n,resource:o});o.removeEventListener("canplay",m),e.data.preload&&await wr(o),v(da(_,a,s))};o.addEventListener("canplay",m),o.appendChild(l)})},unload(s){s.destroy(!0)}},zn={extension:{type:z.ResolveParser,name:"resolveTexture"},test:Fn.test,parse:s=>{var e;return{resolution:parseFloat(((e=Yt.RETINA_PREFIX.exec(s))==null?void 0:e[1])??"1"),format:s.split(".").pop(),src:s}}},kr={extension:{type:z.ResolveParser,priority:-2,name:"resolveJson"},test:s=>Yt.RETINA_PREFIX.test(s)&&s.endsWith(".json"),parse:zn.parse};class $r{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Yt,this.loader=new Yi,this.cache=Fe,this._backgroundLoader=new Fi(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var r,l;if(this._initialized){He("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let d=e.manifest;typeof d=="string"&&(d=await this.load(d)),this.resolver.addManifest(d)}const a=((r=e.texturePreference)==null?void 0:r.resolution)??1,n=typeof a=="number"?[a]:a,o=await this._detectFormats({preferredFormats:(l=e.texturePreference)==null?void 0:l.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:o,resolution:n}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,a){this._initialized||await this.init();const n=kn(e),o=St(e).map(d=>{if(typeof d!="string"){const g=this.resolver.getAlias(d);return g.some(y=>!this.resolver.hasKey(y))&&this.add(d),Array.isArray(g)?g[0]:g}return this.resolver.hasKey(d)||this.add({alias:d,src:d}),d}),r=this.resolver.resolve(o),l=await this._mapLoadToResolve(r,a);return n?l[o[0]]:l}addBundle(e,a){this.resolver.addBundle(e,a)}async loadBundle(e,a){this._initialized||await this.init();let n=!1;typeof e=="string"&&(n=!0,e=[e]);const o=this.resolver.resolveBundle(e),r={},l=Object.keys(o);let d=0,g=0;const y=()=>{a==null||a(++d/g)},v=l.map(m=>{const _=o[m];return g+=Object.keys(_).length,this._mapLoadToResolve(_,y).then(P=>{r[m]=P})});return await Promise.all(v),n?r[e[0]]:r}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(a))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolveBundle(e);Object.values(a).forEach(n=>{this._backgroundLoader.add(Object.values(n))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Fe.get(e);const a={};for(let n=0;n<e.length;n++)a[n]=Fe.get(e[n]);return a}async _mapLoadToResolve(e,a){const n=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const o=await this.loader.load(n,a);this._backgroundLoader.active=!0;const r={};return n.forEach(l=>{const d=o[l.src],g=[l.src];l.alias&&g.push(...l.alias),g.forEach(y=>{r[y]=d}),Fe.set(g,d)}),r}async unload(e){this._initialized||await this.init();const a=St(e).map(o=>typeof o!="string"?o.src:o),n=this.resolver.resolve(a);await this._unloadFromResolved(n)}async unloadBundle(e){this._initialized||await this.init(),e=St(e);const a=this.resolver.resolveBundle(e),n=Object.keys(a).map(o=>this._unloadFromResolved(a[o]));await Promise.all(n)}async _unloadFromResolved(e){const a=Object.values(e);a.forEach(n=>{Fe.remove(n.src)}),await this.loader.unload(a)}async _detectFormats(e){let a=[];e.preferredFormats&&(a=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const n of e.detections)e.skipDetections||await n.test()?a=await n.add(a):e.skipDetections||(a=await n.remove(a));return a=a.filter((n,o)=>a.indexOf(n)===o),a}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(a=>{a.config&&Object.keys(a.config).filter(n=>n in e).forEach(n=>{a.config[n]=e[n]})})}}const rt=new $r;Ye.handleByList(z.LoadParser,rt.loader.parsers).handleByList(z.ResolveParser,rt.resolver.parsers).handleByList(z.CacheParser,rt.cache.parsers).handleByList(z.DetectionParser,rt.detections);Ye.add(Wi,Di,zi,Hi,Ni,Ui,Gi,Ki,Zi,rr,dr,Fn,Ar,Ci,Bi,zn,kr);const mn={loader:z.LoadParser,resolver:z.ResolveParser,cache:z.CacheParser,detection:z.DetectionParser};Ye.handle(z.Asset,s=>{const e=s.ref;Object.entries(mn).filter(([a])=>!!e[a]).forEach(([a,n])=>Ye.add(Object.assign(e[a],{extension:e[a].extension??n})))},s=>{const e=s.ref;Object.keys(mn).filter(a=>!!e[a]).forEach(a=>Ye.remove(e[a]))});const Sr="1.5.2";var Er=Z('<div class="win-label svelte-1vsph43">BIG WIN!</div> <div class="win-amount-display svelte-1vsph43"> </div>',1),Pr=yn('<use href="#sparkle" class="sparkle svelte-1vsph43"></use>'),Lr=yn('<use href="#vinyl"></use>'),Tr=Z('<div><!> <svg class="vinyl-canvas svelte-1vsph43" viewBox="0 0 1024 800" xmlns="http://www.w3.org/2000/svg"><defs class="svelte-1vsph43"><symbol id="vinyl" viewBox="-200 -200 400 400" class="svelte-1vsph43"><circle cx="0" cy="0" r="180" fill="#0b0b0b" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="150" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.3" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="120" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.25" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="90" fill="none" stroke="#1a1a1a" stroke-width="1.5" opacity="0.2" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="55" fill="var(--label-color)" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="6" fill="#ffffff" class="svelte-1vsph43"></circle><ellipse cx="-15" cy="-15" rx="20" ry="15" fill="#ffffff" opacity="0.3" transform="rotate(-30)" class="svelte-1vsph43"></ellipse></symbol><symbol id="sparkle" viewBox="-12 -12 24 24" class="svelte-1vsph43"><polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ffd966" class="svelte-1vsph43"></polygon><circle cx="0" cy="0" r="2" fill="#ffffff" class="svelte-1vsph43"></circle></symbol><symbol id="confetti" viewBox="-3 -3 6 6" class="svelte-1vsph43"><circle cx="0" cy="0" r="2" fill="var(--confetti-color)" class="svelte-1vsph43"></circle></symbol></defs><!><!></svg></div>');function Rr(s,e){Gt(e,!0);let a=it(e,"winLevel",3,"small"),n=it(e,"winAmount",3,0),o=it(e,"vinylStartScale",3,.01),r=it(e,"vinylEndScale",3,.15),l=it(e,"sparkleScale",3,.6),d=O(!1),g=O(!1);const y={small:{vinyls:5,sparkles:8,maxRadius:70},medium:{vinyls:12,sparkles:16,maxRadius:100},jackpot:{vinyls:24,sparkles:30,maxRadius:130}},v=ue(()=>y[a()]),m=["#f04e37","#ffd966","#ff8533","#4ecdc4","#ff6b9d"];function _(K){const re=[],Le=t(v).maxRadius;for(let we=0;we<K;we++){const We=Math.PI*2*we/K+Math.random()*.4,Xe=Math.random()*Le*.7+Le*.2;re.push({x:512+Math.cos(We)*Xe,y:400+Math.sin(We)*Xe,rotation:Math.random()*30-15,scale:r()*(.8+Math.random()*.4),delay:we*.05,color:m[we%m.length]})}return re}function P(K){const re=[];for(let V=0;V<K;V++)re.push({x:100+Math.random()*824,y:50+Math.random()*700,delay:Math.random()*.8,duration:.6+Math.random()*.4,rotation:Math.random()*360});return re}const R=ue(()=>_(t(v).vinyls)),Q=ue(()=>P(t(v).sparkles));function D(){h(d,!0),h(g,!0),setTimeout(()=>{h(g,!1),setTimeout(()=>{var K;h(d,!1),(K=e.onComplete)==null||K.call(e)},500)},a()==="jackpot"?4e3:a()==="medium"?3e3:2500)}function L(){h(g,!1),setTimeout(()=>{h(d,!1)},500)}var C=jt(),ie=Ve(C);{var ve=K=>{var re=Tr();let V;var U=x(re);{var Le=qe=>{var ee=Er(),me=p(Ve(ee),2),B=x(me,!0);w(me),ne(he=>X(B,he),[()=>n().toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),N(qe,ee)};se(U,qe=>{n()>0&&qe(Le)})}var we=p(U,2),We=p(x(we));Ut(We,17,()=>t(Q),Nt,(qe,ee)=>{var me=Pr();ne(()=>b(me,"style",`
            --sx: ${t(ee).x??""}px;
            --sy: ${t(ee).y??""}px;
            --duration: ${t(ee).duration??""}s;
            --sparkle-delay: ${t(ee).delay??""}s;
            --sparkle-scale: ${l()??""};
          `)),N(qe,me)});var Xe=p(We);Ut(Xe,17,()=>t(R),Nt,(qe,ee)=>{var me=Lr();let B;ne(()=>{B=sa(me,0,"vinyl-group svelte-1vsph43",null,B,{floating:t(g)}),b(me,"style",`
            --tx: ${t(ee).x??""}px;
            --ty: ${t(ee).y??""}px;
            --scale: ${t(ee).scale??""};
            --rotation: ${t(ee).rotation??""}deg;
            --delay: ${t(ee).delay??""}s;
            --label-color: ${t(ee).color??""};
            --start-scale: ${o()??""};
          `)}),N(qe,me)}),w(we),w(re),ne(()=>V=sa(re,1,"vinyl-win-container svelte-1vsph43",null,V,{visible:t(g),hiding:!t(g)})),N(K,re)};se(ie,K=>{t(d)&&K(ve)})}return N(s,C),Ht({show:D,hide:L})}var Ir=Z(`<div style="
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: #1a1a1a;
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
			height: 20px; //muutettu 03032026
			background-color: #222;
			border-radius: 10px; //muutettu 03032026
			overflow: hidden;
			border: 1px solid #444; //muutettu 03032026
		"><div></div></div> <div style="
			color: #fff;
			font-family: Arial, sans-serif;
			font-size: 18px;
			margin-top: 20px;
		"> </div></div>`),Or=Z(`<div style="
				position: absolute;
				bottom: 40px;
				left: 50%;
				transform: translateX(-50%);
				color: #fff;
				font-family: Arial, sans-serif;
				font-size: 20px;
				text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
			">Please wait...</div>`),qr=Z('<div role="button" tabindex="0"><span style="position: absolute; left: -9999px;">Click anywhere to continue</span> <!></div>');function Mr(s,e){Gt(e,!0);let a=O(!1),n=O(!1),o=O(!1),r=O(0);ia(()=>{const m=setInterval(()=>{h(r,t(r)+2),t(r)>=100&&(clearInterval(m),h(r,100),setTimeout(()=>{h(n,!0),setTimeout(()=>{h(o,!0)},3e3)},500))},60);return()=>clearInterval(m)});function l(){t(n)&&t(o)&&!t(a)&&(h(a,!0),setTimeout(()=>e.onloaded(),300))}var d=jt(),g=Ve(d);{var y=m=>{var _=Ir(),P=x(_);b(P,"src",`${ke??""}/loading_screen/madcrane_loader.png`);var R=p(P,2),Q=x(R);w(R);var D=p(R,2),L=x(D);w(D),w(_),ne(C=>{b(Q,"style",`
				width: ${t(r)??""}%;
				height: 100%;
				background: linear-gradient(90deg, #aaaaaa, #cccccc);
				transition: width 0.3s ease;
			`),X(L,`Loading... ${C??""}%`)},[()=>Math.round(t(r))]),N(m,_)},v=m=>{var _=jt(),P=Ve(_);{var R=Q=>{var D=qr(),L=p(x(D),2);{var C=ie=>{var ve=Or();N(ie,ve)};se(L,ie=>{t(o)||ie(C)})}w(D),ne(()=>b(D,"style",`
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background-image: url('${ke??""}/loading_screen/Splash_screen_RockabillyReels.jpeg');
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			cursor: ${(t(o)?"pointer":"default")??""};
			z-index: 10000;
		`)),M("click",D,l),M("keydown",D,ie=>ie.key==="Enter"&&l()),N(Q,D)};se(P,Q=>{t(n)&&!t(a)&&Q(R)},!0)}N(m,_)};se(g,m=>{t(n)?m(v,!1):m(y)})}N(s,d),Ht()}const bn={gameArea:{width:1445,height:1e3,scale:1,offsetX:-25,offsetY:-15},controlPanel:{x:250,y:750,width:1100,height:80,scaleX:1,scaleY:1.1,offsetX:0,offsetY:50},playButton:{scale:1,offsetX:0,offsetY:0},background:{yShift:-40,scale:1,fitMode:"height"}},Br={gameArea:{width:1445,height:1e3,scale:1,offsetX:0,offsetY:-20},controlPanel:{x:250,y:790,width:1100,height:70,scaleX:.85,scaleY:.85,offsetX:0,offsetY:20},playButton:{scale:1.2,offsetX:0,offsetY:0},background:{yShift:-30,scale:1,fitMode:"width"}},Cr={gameArea:{width:1445,height:1e3,scale:.75,offsetX:0,offsetY:0},controlPanel:{x:250,y:780,width:1100,height:65,scaleX:.8,scaleY:.8,offsetX:0,offsetY:40},playButton:{scale:1.1,offsetX:0,offsetY:0},background:{yShift:-20,scale:.95,fitMode:"height"}},Fr={gameArea:{width:1445,height:1e3,scale:.92,offsetX:0,offsetY:-15},controlPanel:{x:250,y:830,width:1100,height:70,scaleX:.82,scaleY:.82,offsetX:0,offsetY:25},playButton:{scale:1.25,offsetX:0,offsetY:0},background:{yShift:-25,scale:1,fitMode:"width"}},Wr={gameArea:{width:1445,height:1e3,scale:.72,offsetX:0,offsetY:5},controlPanel:{x:250,y:785,width:1100,height:65,scaleX:.78,scaleY:.78,offsetX:0,offsetY:35},playButton:{scale:1.15,offsetX:0,offsetY:0},background:{yShift:-15,scale:.93,fitMode:"height"}};function zr(){if(typeof window>"u")return bn;const s=window.innerWidth,a=window.innerHeight>s,n=s<=768,o=/iPhone|iPad|iPod/i.test(navigator.userAgent);return n?o?a?Fr:Wr:a?Br:Cr:bn}function Dr(){return zr()}function jr(){return Nr()}function Nr(){if(typeof window>"u")return"desktop";const s=window.innerWidth,a=window.innerHeight>s,n=s<=768,o=/iPhone|iPad|iPod/i.test(navigator.userAgent);return n?o?a?"iphone-portrait":"iphone-landscape":a?"android-portrait":"android-landscape":"desktop"}function Ur(s,e=1){return{x:(s.controlPanel.x+s.controlPanel.offsetX)*e,y:(s.controlPanel.y+s.controlPanel.offsetY)*e,width:s.controlPanel.width*e*s.controlPanel.scaleX,height:s.controlPanel.height*e*s.controlPanel.scaleY}}var Gr=Do('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-97qe5v"><\/script><!---->',1),Hr=Z('<p style="color: red;" class="svelte-97qe5v"><strong class="svelte-97qe5v">Error:</strong> </p>'),Yr=Z('<div class="svelte-97qe5v"> </div>'),Vr=Z('<details class="svelte-97qe5v"><summary class="svelte-97qe5v"> </summary> <!></details>'),Xr=Z(`<div style="
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
  " class="svelte-97qe5v"><h3 class="svelte-97qe5v">🎰 Oma-peli Debug</h3> <p class="svelte-97qe5v"><strong class="svelte-97qe5v">Status:</strong> </p> <!> <p class="svelte-97qe5v"><strong class="svelte-97qe5v">Base:</strong> </p> <p class="svelte-97qe5v"><strong class="svelte-97qe5v">BG URL:</strong> </p> <p class="svelte-97qe5v"><strong class="svelte-97qe5v">Sample:</strong> </p> <!></div>`),Kr=Z('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-97qe5v"> </div>'),Qr=Z('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-97qe5v"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-97qe5v"> </span></div>'),Jr=Z(`<div style="
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
  " class="svelte-97qe5v"><h2 style="margin: 0 0 10px 0; font-size: 2em;" class="svelte-97qe5v">🎉 VOITTO! 🎉</h2> <div style="font-size: 1.5em; font-weight: bold; margin: 10px 0;" class="svelte-97qe5v"> </div> <!> <!> <button style="
        margin-top: 15px;
        padding: 8px 16px;
        background: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
      " class="svelte-97qe5v">Jatka pelaamista</button></div>`),Zr=Z('<button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1em;" class="svelte-97qe5v">🛑 STOP AUTOPLAY</button>'),el=Z('<button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1em;" class="svelte-97qe5v">▶️ START AUTOPLAY</button>'),tl=Z(`<div class="svelte-97qe5v"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-97qe5v">💰 MENU</h2> <div class="mobile-menu-controls svelte-97qe5v" style="display: none; margin-bottom: 20px; padding: 15px; background: rgba(255, 255, 255, 0.05); border-radius: 10px;"><h3 style="margin: 0 0 15px 0; color: #ffd700; font-size: 1.2em;" class="svelte-97qe5v">🎮 GAME CONTROLS</h3> <div style="margin-bottom: 15px;" class="svelte-97qe5v"><div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;" class="svelte-97qe5v"><span style="font-size: 1.1em;" class="svelte-97qe5v">🔄 Autoplay:</span> <span class="svelte-97qe5v"> </span></div> <!></div> <div style="margin-bottom: 10px;" class="svelte-97qe5v"><div style="margin-bottom: 10px;" class="svelte-97qe5v"><span style="font-size: 1.1em;" class="svelte-97qe5v">⚡ Spin Speed:</span> <span style="color: #ffd700; font-weight: bold; margin-left: 10px;" class="svelte-97qe5v"> </span></div> <div style="display: flex; gap: 10px;" class="svelte-97qe5v"><button class="svelte-97qe5v">🐌 Slow</button> <button class="svelte-97qe5v">🏃 Medium</button> <button class="svelte-97qe5v">⚡ Fast</button></div></div> <div style="border-top: 1px solid #555; margin: 20px 0;" class="svelte-97qe5v"></div></div> <h3 style="margin: 0 0 15px 0; color: #ffd700; font-size: 1.2em;" class="svelte-97qe5v">💰 PAYTABLE (81 WAYS)</h3> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-97qe5v">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-97qe5v"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-97qe5v"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-97qe5v"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-97qe5v">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-97qe5v">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-97qe5v">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-97qe5v">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-97qe5v"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-97qe5v">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-97qe5v">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-97qe5v">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-97qe5v">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-97qe5v">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-97qe5v"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-97qe5v">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-97qe5v">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-97qe5v">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-97qe5v">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-97qe5v"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-97qe5v">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-97qe5v">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-97qe5v">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-97qe5v">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-97qe5v"> <span style="color: #ffd700;" class="svelte-97qe5v">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-97qe5v">Sulje</button></div>`),sl=Z(`<div style="
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
  " class="svelte-97qe5v"><div style="
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: white;
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      border: 3px solid #ffd700;
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
      max-width: 500px;
      font-family: Arial, sans-serif;
    " class="svelte-97qe5v"><h1 style="
        margin: 0 0 20px 0;
        font-size: 2.5em;
        color: #ffd700;
        text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
      " class="svelte-97qe5v">🎰 VAPAAPELIT PÄÄTTYIVÄT! 🎰</h1> <div style="
        font-size: 1.2em;
        margin: 20px 0;
        color: #aaa;
      " class="svelte-97qe5v">Voitit yhteensä:</div> <div style="
        font-size: 3em;
        font-weight: bold;
        color: #00ff00;
        text-shadow: 0 0 15px rgba(0, 255, 0, 0.8);
        margin: 20px 0;
      " class="svelte-97qe5v"> </div> <button style="
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
        " class="svelte-97qe5v">JATKA PERUSPELIIN</button></div></div>`),al=Z('<div class="svelte-97qe5v"><div class="svelte-97qe5v">🔄 Select Rounds</div> <button class="svelte-97qe5v">10 Rounds</button> <button class="svelte-97qe5v">25 Rounds</button> <button class="svelte-97qe5v">50 Rounds</button> <button class="svelte-97qe5v">100 Rounds</button> <button class="svelte-97qe5v">200 Rounds</button> <button class="svelte-97qe5v">500 Rounds</button> <button class="svelte-97qe5v">1,000 Rounds</button> <button class="svelte-97qe5v">5,000 Rounds</button> <button class="svelte-97qe5v">Cancel</button></div>'),nl=Z('<div style="display: flex; flex-direction: column; align-items: center;" class="svelte-97qe5v"><div class="svelte-97qe5v">BET</div> <div class="svelte-97qe5v"><button title="Decrease Bet" class="svelte-97qe5v"></button> <div class="svelte-97qe5v"> </div> <button title="Increase Bet" class="svelte-97qe5v"></button></div></div>'),ol=Z('<div style="display: flex; flex-direction: column; align-items: center;" class="svelte-97qe5v"><div class="svelte-97qe5v">BET</div> <div class="svelte-97qe5v"><button title="Decrease Bet" class="svelte-97qe5v"></button> <div class="svelte-97qe5v"> </div> <button title="Increase Bet" class="svelte-97qe5v"></button></div></div>'),il=Z(`<!>  <!>   <!>   <!>   <!>  <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
" class="svelte-97qe5v"><div class="svelte-97qe5v"><div class="svelte-97qe5v"><button class="svelte-97qe5v">💰 PAYTABLE</button>   <div class="control-panel-mobile svelte-97qe5v"><!>  <img alt="Left End" class="svelte-97qe5v"> <div class="svelte-97qe5v"><div style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;" class="svelte-97qe5v"><div class="hide-on-desktop svelte-97qe5v"><button title="Menu" class="svelte-97qe5v"></button></div> <!> <img class="hide-on-mobile svelte-97qe5v" alt="Divider"> <div class="hide-on-mobile svelte-97qe5v" style="display: flex; flex-direction: column; align-items: center;"><div class="svelte-97qe5v">BALANCE</div> <div class="svelte-97qe5v"><div class="svelte-97qe5v"> </div></div></div> <img class="hide-on-mobile svelte-97qe5v" alt="Divider"></div> <div class="svelte-97qe5v"></div> <div style="position: absolute; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; z-index: 10;" class="svelte-97qe5v"><div><button class="svelte-97qe5v"></button></div></div> <div style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;" class="svelte-97qe5v"><!> <div class="hide-on-mobile svelte-97qe5v"><button class="svelte-97qe5v"></button> <img alt="Status bar" class="svelte-97qe5v"></div> <img class="hide-on-mobile svelte-97qe5v" alt="Divider"> <div class="hide-on-mobile svelte-97qe5v"><button class="svelte-97qe5v"></button> <img alt="Speed bar" class="svelte-97qe5v"></div> <img class="hide-on-mobile svelte-97qe5v" alt="Divider"> <div class="hide-on-mobile svelte-97qe5v" style="display: flex; flex-direction: column; align-items: center;"><div class="svelte-97qe5v">WIN</div> <div class="svelte-97qe5v"><div class="svelte-97qe5v"> </div></div></div> <img class="hide-on-mobile svelte-97qe5v" alt="Divider"> <div class="hide-on-mobile svelte-97qe5v" style="display: flex; align-items: center; justify-content: center;"><button title="Menu" class="svelte-97qe5v"></button></div></div></div> <img alt="Right End" class="svelte-97qe5v"></div></div>  <button class="svelte-97qe5v"></button> <!>   <div class="debug-panel svelte-97qe5v"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-97qe5v">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-97qe5v"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-97qe5v"><span style="color: #aaa;" class="svelte-97qe5v">Rounds:</span> <span style="color: #fff;" class="svelte-97qe5v"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-97qe5v"><span style="color: #aaa;" class="svelte-97qe5v">Wagered:</span> <span style="color: #ff6666;" class="svelte-97qe5v"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-97qe5v"><span style="color: #aaa;" class="svelte-97qe5v">Won:</span> <span style="color: #66ff66;" class="svelte-97qe5v"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 10px; 
    padding-top: 10px; 
    border-top: 1px solid #555;
    font-weight: bold;
    font-size: 18px;
  " class="svelte-97qe5v"><span style="color: #ffd700;" class="svelte-97qe5v">RTP:</span> <span class="svelte-97qe5v"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
  " class="svelte-97qe5v"><span style="color: #aaa;" class="svelte-97qe5v">Hit Freq:</span> <span class="svelte-97qe5v"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-size: 14px;
  " class="svelte-97qe5v"><span style="color: #aaa;" class="svelte-97qe5v">Free Spins Triggered:</span> <span style="color: #66ccff;" class="svelte-97qe5v"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 4px;
    font-size: 14px;
  " class="svelte-97qe5v"><span style="color: #aaa;" class="svelte-97qe5v">Free Spins Played:</span> <span style="color: #66ccff;" class="svelte-97qe5v"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #555;
    font-size: 14px;
  " class="svelte-97qe5v"><span style="color: #aaa;" class="svelte-97qe5v">Empty Slots:</span> <span style="color: #ff9900;" class="svelte-97qe5v"> </span></div> <button style="
      margin-top: 10px;
      width: 100%;
      padding: 5px;
      background: rgba(255, 100, 100, 0.3);
      color: #fff;
      border: 1px solid #ff6666;
      border-radius: 5px;
      cursor: pointer;
      font-size: 11px;
    " class="svelte-97qe5v">Reset Stats</button> <div style="
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  " class="svelte-97qe5v"><button class="svelte-97qe5v"> </button> <button class="svelte-97qe5v">Clear Win Log</button> <button class="svelte-97qe5v">🎰 Test Free Spins</button></div></div> <div class="svelte-97qe5v"><button class="svelte-97qe5v"></button> <button class="svelte-97qe5v"></button></div></div></div>`,1);function rl(s,e){Gt(e,!0);const a=Sr,n=13,o=ue(()=>()=>Dr()),r=ue(()=>()=>jr()),l=ue(()=>t(o)().gameArea.width),d=ue(()=>t(o)().gameArea.height),g=1.75,y=ue(()=>t(o)().gameArea.offsetX),v=ue(()=>t(o)().gameArea.offsetY),m=175,_=-5,P=.5,R=30,Q=-10,L=Math.round(100*g),C=Math.round(L*(700/760)),ve=C+10,K=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],re=typeof window<"u"&&window.location.hostname.includes("github.io"),V=re?"/web-sdk/oma-peli/symbols":`${ke}/symbols`,U=re?"/web-sdk/oma-peli/controls":`${ke}/controls`,Le={a:`${V}/Blue_hotrod.jpg`,b:`${V}/Blue_jacket.jpg`,c:`${V}/Blue_rollers.jpg`,d:`${V}/Blue_speakers.jpg`,e:`${V}/Premium_blonde.jpg`,f:`${V}/Premium_brunette.jpg`,g:`${V}/Premium_rocker.jpg`,h:`${V}/New_Wild.jpg`,i:`${V}/Red_burger.jpg`,j:`${V}/Red_fries.jpg`,k:`${V}/Red_milkshake.jpg`,l:`${V}/Scatter.jpg`,emptyslot:`${V}/Emptyslot.jpg`},we=`${V}/bg_base.jpg`,We=`${V}/ReelFrames.png?v=${Date.now()}`,Xe=`${V}/RockABillyReels_logo.png`,qe={spin:`${ke}/sounds/spin.mp3`,stop:`${ke}/sounds/stop.mp3`,win:`${ke}/sounds/win.mp3`};let ee=O(!0),me={},B=null,he=null,Vt=null,Xt=null,Te=O(!0),Dn=O(!1),fa=O(1100);const jn={fast:3,medium:7,slow:18};let J=O("medium"),ze=O(Math.floor(Math.random()*20)+1);const vt={background:()=>`${ke}/music/rockabilly reels loop ${t(ze)}.mp3`,freeSpins:`${ke}/music/rockabilly-loop_long.mp3`,drumHit:`${ke}/music/drum-hit.mp3`,winTheme:`${ke}/music/win-stinger.mp3`};function pa(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(pa,500);return}const c=window.Howl;try{B=new c({src:[vt.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+t(ze)+")"),h(Dn,!0)},onloaderror:(f,$)=>{console.warn("⚠️ Background music not found:",$)}}),he=new c({src:[vt.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(f,$)=>console.warn("⚠️ Free spins music not found:",$)}),Vt=new c({src:[vt.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Xt=new c({src:[vt.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(f){console.error("Failed to initialize music system:",f)}}function ua(){const c=t(te)?he:B;c&&t(Te)&&!c.playing()&&(c.play(),console.log("🎵 "+(t(te)?"Free spins":"Background")+" music started"))}function Nn(){if(t(te))return;const c=Math.floor(Math.random()*20)+1;c===t(ze)?h(ze,c%20+1):h(ze,c),console.log("🎵 Changing to loop #"+t(ze)),B&&(B.playing()?(B.fade(B.volume(),0,200),setTimeout(()=>{B.stop(),B.unload()},200)):B.unload());const f=window.Howl;f&&(B=new f({src:[vt.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ New background music loop #"+t(ze)+" loaded"),t(Te)&&!t(te)&&setTimeout(()=>{B&&!B.playing()&&B.play()},300)},onloaderror:($,S)=>{console.warn("⚠️ Failed to load loop #"+t(ze)+":",S)}}))}function Un(){B&&B.playing()&&(B.fade(B.volume(),0,500),setTimeout(()=>B.stop(),500)),he&&he.playing()&&(he.fade(he.volume(),0,500),setTimeout(()=>he.stop(),500))}function Kt(){B&&B.playing()&&(B.fade(B.volume(),0,500),setTimeout(()=>B.stop(),500)),he&&he.playing()&&(he.fade(he.volume(),0,500),setTimeout(()=>he.stop(),500)),setTimeout(()=>{t(Te)&&ua()},600)}function Gn(){if(B&&B.playing()){const c=B.volume();B.fade(c,0,1e3),setTimeout(()=>{B.stop(),B.volume(.3)},1e3)}}let Qt=O(!1);function Hn(){h(Qt,!1),setTimeout(()=>{h(Qt,!0)},10)}let et=null;const Jt={vinylStartScale:.01,vinylEndScale:.05,sparkleScale:.1};function Yn(){h(Te,!t(Te)),t(Te)?ua():Un()}function Vn(){h(ee,!t(ee))}function Xn(){Vt&&t(Te)&&t(ee)&&Vt.play()}function Kn(){Xt&&t(Te)&&t(ee)&&Xt.play()}let Et=null,Me=null,ce=null,ht=O("Initializing..."),tt=O(""),Re=[],va=O(!1),De=O(1e3);const ha=[.4,.8,1,1.6,2,3,5,8,10,15,20,25,30,40,50,60,80,100];let gt=O(5),_e=ue(()=>ha[t(gt)]),Ke=O(0),le=O(!1),mt=O(0),ge=O(!1),Zt=O(!1),Qn=O(0),Qe=!1,Be=null,es=!1,st=O(0),at=O(0),bt=O(0),ts=O(0),ss=ue(()=>t(at)>0?(t(bt)/t(at)*100).toFixed(2):"0.00"),as=ue(()=>t(st)>0?(t(ts)/t(st)*100).toFixed(2):"0.00"),te=O(!1),je=O(0),Je=O(0),Pt=O(0),ns=O(0),Lt=O(0),os=O(0),Jn=ue(()=>t(Lt)>0?(t(os)/t(Lt)*100).toFixed(2):"0.00"),Ae=O(ye([]));function Zn(c,f,$){const S=new Date().toLocaleString("fi-FI");let u=`
${"=".repeat(60)}
`;u+=`ROUND #${c} - ${S}
`,u+=`Mode: ${t(te)?"FREE SPINS":"BASE GAME"}
`,u+=`${"=".repeat(60)}
`,f.forEach((k,A)=>{u+=`
Win ${A+1}:
`,u+=`  Symbol: ${k.symbol} (${ya[k.symbol]})
`,u+=`  Count: ${k.count} symbols
`,u+=`  Multiplier: ${k.multiplier}x
`,u+=`  Payout: ${k.payout.toFixed(2)}
`,u+=`  Positions: [${k.positions.join(", ")}]
`}),u+=`
${"─".repeat(60)}
`,u+=`TOTAL WIN: ${$.toFixed(2)}
`,u+=`${"=".repeat(60)}
`,t(Ae).push(u)}function eo(){const c=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${t(Ae).join(`
`)}`,f=new Blob([c],{type:"text/plain"}),$=URL.createObjectURL(f),S=document.createElement("a");S.href=$,S.download=`win-log-${Date.now()}.txt`,S.click(),URL.revokeObjectURL($)}function to(){h(Ae,ye([]))}function so(){t(te)||(h(te,!0),h(je,10),h(Je,0),Ee(Pt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),Kt())}const ao={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},no={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function ga(c){if(c===6)return Math.random()<.55?"h":"emptyslot";const f=t(te)?no:ao,$=Math.random();let S=0;const u=K.filter(A=>A!=="h"),k=u.reduce((A,T)=>A+f[T],0);for(const A of u)if(S+=f[A]/k,$<S)return A;return"f"}function ma(){const c=[];for(let f=0;f<n;f++){const $=ga(f);c.push($),Ee(Lt),$==="emptyslot"&&Ee(os)}return c}function ba(c){return c<3?{col:0,row:c}:c<6?{col:1,row:c-3}:c===6?{col:2,row:0}:c<10?{col:3,row:c-7}:{col:4,row:c-10}}function yt(c,f){return c===0?f:c===1?3+f:c===2?6:c===3?7+f:c===4?10+f:-1}function oo(){if(t(te)){const c=Math.random();return c<.7?3:c<.92?5:10}else{const c=Math.random();return c<.7?1:c<.92?2:3}}const io={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function ro(){var oe;const c=[],f=[];for(let E=0;E<n;E++)xt[E]==="l"&&f.push(E);if(f.length>=5){const E=f.length;h(je,t(je)+E),t(te)?console.log(`🎰 FREE SPINS RETRIGGERED! +${E} FREE SPINS! Total: ${t(je)}`):(h(te,!0),h(Je,0),Ee(Pt),console.log(`🎰 FREE SPINS TRIGGERED! ${f.length} scatters = ${E} FREE SPINS!`),Kt()),c.push({symbol:"l",count:f.length,payout:0,positions:f,multiplier:1})}const $=[];for(let E=0;E<3;E++)for(let q=0;q<3;q++)for(let W=0;W<1;W++)for(let j=0;j<3;j++)for(let H=0;H<3;H++){const Y=[yt(0,E),yt(1,q),yt(2,W),yt(3,j),yt(4,H)];$.push(Y)}console.log(`Generated ${$.length} possible paths (should be 81)`);const S=[];for(const E of $){const q=E.map(Y=>xt[Y]);if(q[0]==="emptyslot"||q[0]==="l")continue;let W=null;for(let Y=0;Y<q.length;Y++)if(q[Y]!=="h"&&q[Y]!=="emptyslot"&&q[Y]!=="l"){W=q[Y];break}if(!W)continue;let j=0;const H=new Set;for(let Y=0;Y<E.length;Y++){const Oe=E[Y],{col:fe}=ba(Oe),ae=q[Y];(ae===W||ae==="h")&&H.add(fe)}for(let Y=0;Y<5&&H.has(Y);Y++)j++;if(j>=3){const Oe=E[0]%3;S.push({symbol:W,length:j,path:E.slice(0,j),startRow:Oe})}}const u=[],k=new Map;for(const E of S){const q=`${E.symbol}-${E.path.join(",")}`;k.has(q)||k.set(q,[]),k.get(q).push(E)}for(const[E,q]of k.entries()){const W=Math.max(...q.map(H=>H.length)),j=q.find(H=>H.length===W);j&&u.push(j)}const A=[],T=new Map;for(const E of u)T.has(E.symbol)||T.set(E.symbol,[]),T.get(E.symbol).push(E);const I=[];for(const[E,q]of T.entries()){const W=Math.max(...q.map(H=>H.length)),j=q.filter(H=>H.length===W);I.push(...j)}const G=new Map;for(const E of I){const q=`${E.symbol}-${E.length}`;G.has(q)||G.set(q,[]),G.get(q).push(E)}const F=I.length>0?oo():1;for(const[E,q]of G.entries()){const W=q[0],j=(oe=io[W.symbol])==null?void 0:oe[W.length];if(j!==void 0&&j>0){const H=new Map;for(const ae of q)for(let pe=0;pe<ae.length;pe++)H.has(pe)||H.set(pe,new Set),H.get(pe).add(ae.path[pe]);let Y=1;for(let ae=0;ae<W.length;ae++){const pe=H.get(ae);Y*=pe?pe.size:1}const Oe=j*t(_e)*Y*F;console.log(`  ${W.length}x${W.symbol}: ${Y} ways × ${j}x × ${t(_e)} bet × ${F} mult = ${Oe}`);const fe=new Set;for(const ae of q)ae.path.forEach(pe=>fe.add(pe));A.push({symbol:W.symbol,count:W.length,payout:Oe,positions:Array.from(fe),multiplier:F})}}return c.push(...A),c}let $e=O(0),nt=O(ye([])),Ne=O(!1),Ce=O(!1),is=O(!1),rs=O(0);const ya={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function ls(c){if(!t(ee)||!me[c])return;const f=me[c];f.currentTime=0,f.play().catch($=>{console.warn("Äänen toisto epäonnistui:",c,$)})}function lo(c){wt.forEach(f=>de.stage.removeChild(f)),wt=[],c.forEach(f=>{f.positions.forEach($=>{const S=Ie[$],u=new rn().rect(0,0,L,C).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});u.x=S.container.x,u.y=S.container.y,de.stage.addChild(u),wt.push(u);let k=0,A=1;const T=.05;de.ticker.add(()=>{k+=A*T,k>=.4&&(A=-1),k<=0&&(A=1),u.alpha=.5+k})})})}function cs(){wt.forEach(c=>de.stage.removeChild(c)),wt=[]}let xt=ma(),ds,de,Ie=[],wt=[];class co{constructor(f,$){Se(this,"index");Se(this,"container");Se(this,"offset",0);Se(this,"speed",0);Se(this,"targetSpeed",30);Se(this,"state","idle");Se(this,"stopDelay",0);Se(this,"bounceOffset",0);Se(this,"bounceSpeed",0);Se(this,"bounceFrames",0);this.index=f,this.container=$}start(f){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=f}startSynchronized(f){const $=jn[t(J)],S=60+f*$;this.start(S)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const f=t(J)==="slow"?.88:t(J)==="medium"?.92:.95;this.speed*=f,this.speed<2.5&&(this.state="bouncing",this.speed=0,this.offset=0,this.bounceOffset=0,this.bounceSpeed=4,ls("stop"),Xn())}this.state==="bouncing"&&(this.bounceSpeed*=.8,this.bounceOffset+=this.bounceSpeed,Math.abs(this.bounceSpeed)<.2&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=ve&&(this.offset=0,xt[this.index]=ga(this.index)))}}draw(){const f=this.container;f.removeChildren();const $=xt[this.index];if(!$||!Et||!Et[$])return;const S=this.offset+this.bounceOffset,u=(k,A)=>{const T=Et[k];if(!T)return;const I=new Vs(T);I.width=L,I.height=C,I.x=0,I.y=A,f.addChild(I)};u($,S-ve),u($,S),u($,S+ve)}}let i=O(1);const be=ue(()=>Ur(t(o)(),t(i)));ia(async()=>{de=new qn,await de.init({width:t(l),height:t(d),backgroundAlpha:0,antialias:!0,resolution:window.devicePixelRatio||1,autoDensity:!0}),ds.appendChild(de.canvas);const c=()=>{const u=window.innerWidth,k=window.innerHeight,A=u/t(l),T=k/t(d),I=k>u,G=u<=768;let F;G&&I?F=Math.min(A*1,T*.95,1.2):G?F=Math.min(A*.98,T*.95,1.1):I?F=Math.min(A*.95,T*.85,1):F=Math.min(A,T,1),h(i,ye(F)),de.stage.scale.set(F),de.renderer.resize(t(l),t(d))};c(),window.addEventListener("resize",c);const f=u=>{(u.code==="Space"||u.key===" ")&&(u.preventDefault(),Ie.some(A=>A.state==="spinning"||A.state==="slowing")?(Ie.forEach(A=>{A.state==="spinning"?(A.stopDelay=0,A.state="slowing",A.speed=A.targetSpeed*.5):A.state==="slowing"&&(A.speed=A.speed*.3)}),console.log("⚡ Skip spin - kiekot pysähtyvät nopeasti")):fs())};window.addEventListener("keydown",f);const $={};try{h(ht,"Loading UI images..."),Re.push(`Loading reel frames: ${We}`),Re.push(`Loading logo: ${Xe}`),await rt.load([{alias:"reelframes",src:We},{alias:"logo",src:Xe}]),Me=lt.from("reelframes"),ce=lt.from("logo"),Me.source&&(Me.source.scaleMode="linear",Me.source.antialias=!0,Me.source.autoGenerateMipmaps=!0),ce.source&&(ce.source.scaleMode="linear",ce.source.antialias=!0,ce.source.autoGenerateMipmaps=!0,window.devicePixelRatio>1&&(ce.source.resolution=window.devicePixelRatio)),console.log("✅ Reel frames texture created:",Me.width,"x",Me.height),console.log("✅ Logo texture created:",ce.width,"x",ce.height),Re.push("✅ All UI images loaded"),h(ht,"Loading symbols...");const u=[];for(const k of K)u.push({alias:k,src:Le[k]});await rt.load(u);for(const k of K){const A=Le[k];Re.push(`Loading symbol ${k}: ${A}`);try{const T=lt.from(k);T.source&&(T.source.scaleMode="linear",T.source.antialias=!0),$[k]=T,console.log(`✅ Symbol ${k} loaded:`,T.width,"x",T.height),Re.push(`✅ Symbol ${k} loaded`)}catch(T){const I=`❌ Failed to load symbol ${k} from ${A}: ${T}`;throw Re.push(I),console.error(I),new Error(I)}}Et=$,h(ht,"Assets loaded successfully!")}catch(u){h(tt,`Asset loading failed: ${u}`),Re.push(t(tt)),console.error(t(tt));return}console.log("Ladataan ääniefektit...");for(const[u,k]of Object.entries(qe)){const A=new Audio;A.src=k,A.preload="auto",A.volume=.7,A.load(),A.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${k} (käytetään hiljaista placeholderia)`)}),me[u]=A}[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(u=>({x:u.x+t(y),y:u.y+t(v)})),Ie=[];for(let u=0;u<n;u++){const k=ba(u),A=k.col,T=k.row,I=300+A*(L+20),G=250+T*(C+15),F=u===6?I+_:I,oe=u===6?G+m:G,E=new ra;E.x=F+t(y),E.y=oe+t(v);const q=new rn().rect(0,0,L,C).fill(16777215);q.x=E.x,q.y=E.y,E.mask=q,de.stage.addChild(q),de.stage.addChild(E),Ie.push(new co(u,E))}if(Me){const u=new Vs(Me);u.scale.set(1),u.x=250,u.y=200,de.stage.addChild(u),h(fa,ye(u.width)),console.log("Reel frames lisätty:",u.width.toFixed(0),"x",u.height.toFixed(0)),console.log("Control panel leveys päivitetty:",t(fa).toFixed(0))}if(ce){ce.source&&(ce.source.scaleMode="linear",ce.source.antialias=!0,ce.source.autoGenerateMipmaps=!0,ce.source.update());const u=new Vs(ce);u.roundPixels=!1,u.texture.source.scaleMode="linear",u.scale.set(P),u.x=(de.renderer.width-u.width)/2+R,u.y=Q,de.stage.addChild(u),console.log("Logo lisätty päällimmäiseen layeriin:",u.width.toFixed(0),"x",u.height.toFixed(0))}pa(),de.ticker.add(fo)});function fo(){for(const c of Ie)c.update(),c.draw();if(!t(Ne)&&!es&&Ie.every(c=>c.state==="stopped")){es=!0,Gn();const c=ro();console.log(`Checking wins, found ${c.length} wins`),c.length>0?(h(nt,ye(c)),h($e,ye(c.reduce((f,$)=>f+$.payout,0))),Zn(t(st),c,t($e)),uo(t($e)),h(Ne,!0),h(Qn,ye(Date.now())),console.log(`🎉 VOITTO! ${t($e)} pistettä! Uusi saldo: ${t(De)}`),console.log(`isShowingWin set to: ${t(Ne)}, totalWin: ${t($e)}`),c.forEach(f=>{const $=f.multiplier?` (${f.multiplier}x multiplier)`:"";console.log(`${f.count}x ${f.symbol} = ${f.payout} pistettä${$}`)}),lo(c),ls("win"),t(le)&&!Qe&&(Qe=!0,Be=window.setTimeout(()=>{t(Ne)&&t(le)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),h(Ne,!1),cs()),Be=window.setTimeout(()=>{Qe=!1,ps()},200)},1500))):(console.log("No wins found this spin"),t(le)&&!Qe&&(Qe=!0,Be=window.setTimeout(()=>{Qe=!1,ps()},500))),t(te)&&t(je)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${t(Je)}`),setTimeout(()=>{h(rs,ye(t(Je))),h(is,!0)},2e3))}}function fs(){if(t(te)||Nn(),Hn(),t(te)&&t(je)>0)Ee(je,-1),Ee(ns),console.log(`🎰 FREE SPIN! Remaining: ${t(je)}`);else if(!t(te)){if(t(De)<t(_e)){alert(`Not enough credits! Balance: ${t(De)}, Bet: ${t(_e)}`),_t();return}h(De,t(De)-t(_e)),Ee(st),h(at,t(at)+t(_e))}Be!==null&&(clearTimeout(Be),Be=null),h(nt,ye([])),h($e,0),h(Ke,0),console.log("🔄 lastWin nollattu: "+t(Ke)),h(Ne,!1),es=!1,cs(),xt=ma(),Ie.forEach((c,f)=>{c.startSynchronized(f)}),ls("spin")}function po(c,f,$=1400){if(typeof window>"u")return;const S=document.getElementById("winLabel");if(!S)return;S.classList.add("rolling");const u=performance.now(),k=f-c,A=I=>1-Math.pow(1-I,3);function T(I){const G=Math.min(1,(I-u)/$),F=c+k*A(G);h(Ke,F),G<1?requestAnimationFrame(T):(h(Ke,ye(f)),S.classList.remove("rolling"),S.classList.add("winHit"),setTimeout(()=>S.classList.remove("winHit"),450))}requestAnimationFrame(T)}function uo(c){h(De,t(De)+c),h(bt,t(bt)+c);const f=t(Ke);h(Ke,ye(c));const $=c>t(_e)*50?2e3:1400;if(po(f,c,$),t(te)&&h(Je,t(Je)+c),c>0){Ee(ts);const S=c/t(_e);S>=10&&Kn(),et&&(S>=50?et.show():S>=20?setTimeout(()=>et.show(),200):S>=10&&setTimeout(()=>et.show(),400))}}function xa(){t(gt)<ha.length-1&&Ee(gt)}function wa(){t(gt)>0&&Ee(gt,-1)}function Ue(c){h(le,!0),h(mt,ye(c)),h(ge,!1),ps()}function _t(){h(le,!1),h(mt,0),Qe=!1,Be!==null&&(clearTimeout(Be),Be=null)}function ps(){if(!t(le)||t(mt)<=0){_t();return}console.log(`Autoplay: Starting spin ${t(mt)} rounds left`),fs(),Ee(mt,-1)}function vo(){confirm("Reset all statistics?")&&(h(st,0),h(at,0),h(bt,0),h(ts,0),h(Pt,0),h(ns,0),h(Lt,0),h(os,0))}var _a=il();zo(c=>{var f=Gr();p(Ve(f)),N(c,f)});var Aa=Ve(_a);{var ho=c=>{Mr(c,{onloaded:()=>h(va,!0)})};se(Aa,c=>{t(va)||c(ho)})}var ka=p(Aa,2);{var go=c=>{var f=Xr(),$=p(x(f),2),S=p(x($));w($);var u=p($,2);{var k=W=>{var j=Hr(),H=p(x(j));w(j),ne(()=>X(H,` ${t(tt)??""}`)),N(W,j)};se(u,W=>{t(tt)&&W(k)})}var A=p(u,2),T=p(x(A));T.nodeValue=` ${ke??""}`,w(A);var I=p(A,2),G=p(x(I));G.nodeValue=` ${we??""}`,w(I);var F=p(I,2),oe=p(x(F));w(F);var E=p(F,2);{var q=W=>{var j=Vr(),H=x(j),Y=x(H);w(H);var Oe=p(H,2);Ut(Oe,17,()=>Re,Nt,(fe,ae)=>{var pe=Yr(),Mo=x(pe,!0);w(pe),ne(()=>X(Mo,t(ae))),N(fe,pe)}),w(j),ne(()=>X(Y,`Log (${Re.length??""})`)),N(W,j)};se(E,W=>{Re.length>0&&W(q)})}w(f),ne(()=>{X(S,` ${t(ht)??""}`),X(oe,` ${Le.a??""}`)}),N(c,f)};se(ka,c=>{(t(ht)!=="Assets loaded successfully!"||t(tt))&&c(go)})}var $a=p(ka,2);{var mo=c=>{var f=Jr(),$=p(x(f),2),S=x($);w($);var u=p($,2);Ut(u,17,()=>t(nt),Nt,(I,G)=>{var F=Kr(),oe=x(F);w(F),ne(E=>X(oe,`${t(G).count??""} × ${ya[t(G).symbol]??""} = ${E??""} pistettä`),[()=>t(G).payout.toFixed(2)]),N(I,F)});var k=p(u,2);{var A=I=>{var G=Qr(),F=x(G),oe=x(F);w(F),w(G),ne(()=>X(oe,`✨ ${t(nt)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),N(I,G)};se(k,I=>{t(nt).length>0&&t(nt)[0].multiplier>1&&I(A)})}var T=p(k,2);w(f),ne(I=>X(S,`${I??""} pistettä`),[()=>t($e).toFixed(2)]),M("click",T,()=>{h(Ne,!1),cs(),console.log("Win popup closed, ready for next spin")}),N(c,f)};se($a,c=>{t($e)>0&&t(Ne)&&c(mo)})}var Sa=p($a,2);{var bo=c=>{var f=tl(),$=p(x(f),2),S=p(x($),2),u=x(S),k=p(x(u),2),A=x(k,!0);w(k),w(u);var T=p(u,2);{var I=fe=>{var ae=Zr();M("click",ae,_t),N(fe,ae)},G=fe=>{var ae=el();M("click",ae,()=>{h(ge,!0),h(Ce,!1)}),N(fe,ae)};se(T,fe=>{t(le)?fe(I):fe(G,!1)})}w(S);var F=p(S,2),oe=x(F),E=p(x(oe),2),q=x(E,!0);w(E),w(oe);var W=p(oe,2),j=x(W),H=p(j,2),Y=p(H,2);w(W),w(F),An(2),w($);var Oe=p($,10);w(f),ne(fe=>{b(f,"style",`
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
  `),b(k,"style",`color: ${(t(le)?"#00ff00":"#ff6666")??""}; font-weight: bold;`),X(A,t(le)?`ON (${autoPlayRounds} left)`:"OFF"),X(q,t(J)==="slow"?"🐌 SLOW":t(J)==="medium"?"🏃 MEDIUM":"⚡ FAST"),b(j,"style",`flex: 1; padding: 10px; background: ${(t(J)==="slow"?"linear-gradient(135deg, #4488ff 0%, #66aaff 100%)":"rgba(255,255,255,0.1)")??""}; color: white; border: ${(t(J)==="slow"?"2px solid #ffd700":"1px solid #555")??""}; border-radius: 8px; cursor: pointer; font-size: 0.9em;`),b(H,"style",`flex: 1; padding: 10px; background: ${(t(J)==="medium"?"linear-gradient(135deg, #4488ff 0%, #66aaff 100%)":"rgba(255,255,255,0.1)")??""}; color: white; border: ${(t(J)==="medium"?"2px solid #ffd700":"1px solid #555")??""}; border-radius: 8px; cursor: pointer; font-size: 0.9em;`),b(Y,"style",`flex: 1; padding: 10px; background: ${(t(J)==="fast"?"linear-gradient(135deg, #4488ff 0%, #66aaff 100%)":"rgba(255,255,255,0.1)")??""}; color: white; border: ${(t(J)==="fast"?"2px solid #ffd700":"1px solid #555")??""}; border-radius: 8px; cursor: pointer; font-size: 0.9em;`)},[()=>Math.min(t(d)*t(i)*.8,80*window.innerHeight/100)]),M("click",j,()=>{h(J,"slow")}),M("click",H,()=>{h(J,"medium")}),M("click",Y,()=>{h(J,"fast")}),M("click",Oe,()=>{h(Ce,!1)}),N(c,f)};se(Sa,c=>{t(Ce)&&c(bo)})}var Ea=p(Sa,2);{var yo=c=>{var f=sl(),$=x(f),S=p(x($),4),u=x(S,!0);w(S);var k=p(S,2);w($),w(f),ne(A=>X(u,A),[()=>t(rs).toFixed(2)]),M("click",k,()=>{h(is,!1),h(te,!1),h(Je,0),h(rs,0),Kt()}),M("mouseenter",k,A=>{A.currentTarget.style.transform="scale(1.05)",A.currentTarget.style.boxShadow="0 6px 20px rgba(255, 215, 0, 0.6)"}),M("mouseleave",k,A=>{A.currentTarget.style.transform="scale(1)",A.currentTarget.style.boxShadow="0 4px 15px rgba(255, 215, 0, 0.4)"}),N(c,f)};se(Ea,c=>{t(is)&&c(yo)})}var Pa=p(Ea,2),us=x(Pa),At=x(us),vs=x(At),hs=p(vs,2),La=x(hs);{var xo=c=>{var f=al(),$=x(f),S=p($,2),u=p(S,2),k=p(u,2),A=p(k,2),T=p(A,2),I=p(T,2),G=p(I,2),F=p(G,2),oe=p(F,2);w(f),ne(()=>{b(f,"style",`
    position: absolute;
    bottom: ${(t(be).height/t(i)+20)*t(i)}px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.95);
    padding: ${20*t(i)}px;
    border-radius: ${15*t(i)}px;
    border: ${3*t(i)}px solid #0088ff;
    box-shadow: 0 ${8*t(i)}px ${30*t(i)}px rgba(0, 136, 255, 0.6);
    z-index: 2000;
    min-width: ${250*t(i)}px;
  `),b($,"style",`color: white; font-weight: bold; margin-bottom: ${15*t(i)}px; text-align: center; font-size: ${18*t(i)}px;`),b(S,"style",`
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
      `),b(u,"style",`
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
      `),b(k,"style",`
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
      `),b(A,"style",`
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
      `),b(T,"style",`
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
      `),b(I,"style",`
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
      `),b(G,"style",`
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
      `),b(F,"style",`
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
      `),b(oe,"style",`
        width: 100%;
        padding: ${10*t(i)}px;
        background: rgba(255, 255, 255, 0.1);
        color: #aaa;
        border: ${1*t(i)}px solid #555;
        border-radius: ${8*t(i)}px;
        cursor: pointer;
        font-size: ${14*t(i)}px;
      `)}),M("click",S,()=>{Ue(10),h(ge,!1)}),M("click",u,()=>{Ue(25),h(ge,!1)}),M("click",k,()=>{Ue(50),h(ge,!1)}),M("click",A,()=>{Ue(100),h(ge,!1)}),M("click",T,()=>{Ue(200),h(ge,!1)}),M("click",I,()=>{Ue(500),h(ge,!1)}),M("click",G,()=>{Ue(1e3),h(ge,!1)}),M("click",F,()=>{Ue(5e3),h(ge,!1)}),M("click",oe,()=>{h(ge,!1)}),N(c,f)};se(La,c=>{t(ge)&&c(xo)})}var gs=p(La,2);b(gs,"src",`${U??""}/Control_leftend.png`);var Tt=p(gs,2),ms=x(Tt),Rt=x(ms),Ta=x(Rt);w(Rt);var Ra=p(Rt,2);{var wo=c=>{var f=nl(),$=x(f),S=p($,2),u=x(S),k=p(u,2),A=x(k,!0);w(k);var T=p(k,2);w(S),w(f),ne(I=>{b($,"style",`color: #00ff00; font-size: ${12*t(i)}px; font-weight: bold; line-height: 1; height: ${16*t(i)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(i)}px;`),b(S,"style",`display: flex; gap: ${5*t(i)}px; align-items: center; height: ${44*t(i)}px;`),b(u,"style",`
              width: ${40*t(i)}px;
              height: ${40*t(i)}px;
              background-image: url('${U??""}/Control_lowerbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            `),b(k,"style",`
            color: #fff;
            font-size: ${18*t(i)}px;
            font-weight: bold;
            min-width: ${80*t(i)}px;
            text-align: center;
            font-family: 'Courier New', monospace;
          `),X(A,I),b(T,"style",`
              width: ${40*t(i)}px;
              height: ${40*t(i)}px;
              background-image: url('${U??""}/Control_upperbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            `)},[()=>t(_e).toFixed(2)]),M("click",u,wa),M("click",T,xa),N(c,f)};se(Ra,c=>{t(r)()==="desktop"&&c(wo)})}var bs=p(Ra,2);b(bs,"src",`${U??""}/Control_divider.png`);var ys=p(bs,2),Ia=x(ys),xs=p(Ia,2),ws=x(xs),_o=x(ws,!0);w(ws),w(xs),w(ys);var Oa=p(ys,2);b(Oa,"src",`${U??""}/Control_divider.png`),w(ms);var qa=p(ms,2),_s=p(qa,2),As=x(_s),ks=x(As);w(As),w(_s);var Ma=p(_s,2),Ba=x(Ma);{var Ao=c=>{var f=ol(),$=x(f),S=p($,2),u=x(S),k=p(u,2),A=x(k,!0);w(k);var T=p(k,2);w(S),w(f),ne(I=>{b($,"style",`color: #00ff00; font-size: ${12*t(i)}px; font-weight: bold; line-height: 1; height: ${16*t(i)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(i)}px;`),b(S,"style",`display: flex; gap: ${5*t(i)}px; align-items: center; height: ${44*t(i)}px;`),b(u,"style",`
              width: ${40*t(i)}px;
              height: ${40*t(i)}px;
              background-image: url('${U??""}/Control_lowerbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            `),b(k,"style",`
            color: #fff;
            font-size: ${18*t(i)}px;
            font-weight: bold;
            min-width: ${80*t(i)}px;
            text-align: center;
            font-family: 'Courier New', monospace;
          `),X(A,I),b(T,"style",`
              width: ${40*t(i)}px;
              height: ${40*t(i)}px;
              background-image: url('${U??""}/Control_upperbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            `)},[()=>t(_e).toFixed(2)]),M("click",u,wa),M("click",T,xa),N(c,f)};se(Ba,c=>{t(r)()!=="desktop"&&c(Ao)})}var It=p(Ba,2),Ot=x(It),Ca=p(Ot,2);w(It);var $s=p(It,2);b($s,"src",`${U??""}/Control_divider.png`);var qt=p($s,2),Mt=x(qt),Fa=p(Mt,2);w(qt);var Ss=p(qt,2);b(Ss,"src",`${U??""}/Control_divider.png`);var Es=p(Ss,2),Wa=x(Es),Ps=p(Wa,2),Ls=x(Ps),ko=x(Ls,!0);w(Ls),w(Ps),w(Es);var Ts=p(Es,2);b(Ts,"src",`${U??""}/Control_divider.png`);var za=p(Ts,2),Da=x(za);w(za),w(Ma),w(Tt);var ja=p(Tt,2);b(ja,"src",`${U??""}/Control_rightend.png`),w(hs),w(At),nn(At,c=>ds=c,()=>ds);var Bt=p(At,2);Bt.textContent=`🛠️ DEBUG v${a}`;var Na=p(Bt,2);const $o=ue(()=>t($e)/t(_e)>=50?"jackpot":t($e)/t(_e)>=20?"medium":"small");nn(Rr(Na,{get winLevel(){return t($o)},get winAmount(){return t($e)},get vinylStartScale(){return Jt.vinylStartScale},get vinylEndScale(){return Jt.vinylEndScale},get sparkleScale(){return Jt.sparkleScale}}),c=>et=c,()=>et);var Ct=p(Na,2),Ua=p(x(Ct),2);Ua.textContent=`v${a}`;var Rs=p(Ua,2),Ga=p(x(Rs),2),So=x(Ga,!0);w(Ga),w(Rs);var Is=p(Rs,2),Ha=p(x(Is),2),Eo=x(Ha,!0);w(Ha),w(Is);var Os=p(Is,2),Ya=p(x(Os),2),Po=x(Ya,!0);w(Ya),w(Os);var qs=p(Os,2),Ms=p(x(qs),2),Lo=x(Ms);w(Ms),w(qs);var Bs=p(qs,2),Cs=p(x(Bs),2),To=x(Cs);w(Cs),w(Bs);var Fs=p(Bs,2),Va=p(x(Fs),2),Ro=x(Va,!0);w(Va),w(Fs);var Ws=p(Fs,2),Xa=p(x(Ws),2),Io=x(Xa,!0);w(Xa),w(Ws);var zs=p(Ws,2),Ka=p(x(zs),2),Oo=x(Ka);w(Ka),w(zs);var Qa=p(zs,2),Ja=p(Qa,2),ot=x(Ja),qo=x(ot);w(ot);var Ft=p(ot,2),Ds=p(Ft,2);w(Ja),w(Ct);var js=p(Ct,2),Wt=x(js),Ns=p(Wt,2);w(js),w(us),w(Pa),ne((c,f,$,S,u,k,A)=>{b(us,"style",`
    position: relative;
    width: ${t(l)*t(i)}px;
    height: ${t(d)*t(i)}px;
  `),b(At,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${t(l)??""}px;
        height: ${t(d)??""}px;
      `),b(vs,"style",`
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
        `),b(hs,"style",`
        position: absolute;
        left: ${t(be).x??""}px;
        top: ${t(be).y??""}px;
        width: ${t(be).width??""}px;
        height: ${t(be).height??""}px;
        display: flex;
        align-items: center;
        z-index: 1000;
      `),b(gs,"style",`height: ${t(be).height??""}px; flex-shrink: 0;`),b(Tt,"style",`
    flex-grow: 1;
    height: ${t(be).height??""}px;
    background-image: url('${U??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    padding: 0 ${20*t(i)}px;
    position: relative;
    gap: ${20*t(i)}px;
  `),b(Rt,"style",`display: none; align-items: center; justify-content: center; margin-right: ${10*t(i)}px;`),b(Ta,"style",`
            width: ${50*t(i)}px;
            height: ${50*t(i)}px;
            background-image: url('${U??""}/Control_menubar.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),b(bs,"style",`height: ${t(be).height*.8}px; flex-shrink: 0;`),b(Ia,"style",`color: #00ff00; font-size: ${12*t(i)}px; font-weight: bold; line-height: 1; height: ${16*t(i)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(i)}px;`),b(xs,"style",`height: ${44*t(i)}px; display: flex; align-items: center;`),b(ws,"style",`
            color: #fff;
            font-size: ${20*t(i)}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
          `),X(_o,c),b(Oa,"style",`height: ${t(be).height*.8}px; flex-shrink: 0;`),b(qa,"style",`flex-shrink: 0; width: ${130*t(i)}px;`),sa(As,1,`play-button-wrapper ${(t(Qt)?"glare-animate":"")??""}`,"svelte-97qe5v"),b(ks,"style",`
            width: ${110*t(i)}px;
            height: ${110*t(i)}px;
            background-image: url('${U??""}/${(t(le)?"Control_playbutton_stop.png":"Control_playbutton.png")??""}');
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
          `),b(ks,"title",t(le)?"STOP AUTOPLAY":"SPIN"),b(It,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*t(i)}px;`),b(Ot,"style",`
            width: ${50*t(i)}px;
            height: ${50*t(i)}px;
            background-image: url('${U??""}/${(t(le)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),b(Ot,"title",t(le)?"Stop Autoplay":"Autoplay"),b(Ca,"src",`${U??""}/${(t(le)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),b(Ca,"style",`height: ${10*t(i)}px; width: auto; display: block;`),b($s,"style",`height: ${t(be).height*.8}px; flex-shrink: 0;`),b(qt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*t(i)}px;`),b(Mt,"style",`
            width: ${50*t(i)}px;
            height: ${50*t(i)}px;
            background-image: url('${U??""}/Control_fastplay_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),b(Mt,"title",`Spin Speed: ${(t(J)==="slow"?"Slow":t(J)==="medium"?"Medium":"Fast")??""}`),b(Fa,"src",`${U??""}/${(t(J)==="slow"?"Control_bar_deselect.png":t(J)==="medium"?"Control_half_bar_select.png":"Control_bar_select.png")??""}`),b(Fa,"style",`height: ${10*t(i)}px; width: auto; display: block;`),b(Ss,"style",`height: ${t(be).height*.8}px; flex-shrink: 0;`),b(Wa,"style",`color: #00ff00; font-size: ${12*t(i)}px; font-weight: bold; line-height: 1; height: ${16*t(i)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(i)}px;`),b(Ps,"style",`height: ${44*t(i)}px; display: flex; align-items: center;`),b(Ls,"style",`
            color: #fff;
            font-size: ${20*t(i)}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
          `),X(ko,f),b(Ts,"style",`height: ${t(be).height*.8}px; flex-shrink: 0;`),b(Da,"style",`
            width: ${50*t(i)}px;
            height: ${50*t(i)}px;
            background-image: url('${U??""}/Control_menubar.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),b(ja,"style",`height: ${t(be).height??""}px; flex-shrink: 0;`),b(Bt,"style",`
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
  `),b(Ct,"style",`
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
`),X(So,$),X(Eo,S),X(Po,u),b(Ms,"style",`color: ${k??""};`),X(Lo,`${t(ss)??""}%`),b(Cs,"style",`color: ${A??""};`),X(To,`${t(as)??""}%`),X(Ro,t(Pt)),X(Io,t(ns)),X(Oo,`${t(Jn)??""}%`),ot.disabled=t(Ae).length===0,b(ot,"style",`
        width: 100%;
        padding: 5px;
        background: ${(t(Ae).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(t(Ae).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(t(Ae).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(t(Ae).length>0?"1":"0.5")??""};
      `),X(qo,`Download Win Log (${t(Ae).length??""})`),Ft.disabled=t(Ae).length===0,b(Ft,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(t(Ae).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(t(Ae).length>0?"1":"0.5")??""};
      `),Ds.disabled=t(te),b(Ds,"style",`
        width: 100%;
        padding: 5px;
        background: ${(t(te)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(t(te)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(t(te)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(t(te)?"0.5":"1")??""};
      `),b(js,"style",`
  position: absolute;
  top: ${10*t(i)}px;
  right: ${10*t(i)}px;
  display: flex;
  gap: ${10*t(i)}px;
  z-index: 1001;
`),b(Wt,"style",`
      width: ${50*t(i)}px;
      height: ${50*t(i)}px;
      background-image: url('${U??""}/${(t(Te)?"music_on.png":"music_off.png")??""}');
      background-size: contain;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
      background-color: transparent;
    `),b(Wt,"title",t(Te)?"Music: ON":"Music: OFF"),b(Ns,"style",`
      width: ${50*t(i)}px;
      height: ${50*t(i)}px;
      background-image: url('${U??""}/${(t(ee)?"sounds_on.png":"sounds_off.png")??""}');
      background-size: contain;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
      background-color: transparent;
    `),b(Ns,"title",t(ee)?"Sound: ON":"Sound: OFF")},[()=>t(De).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>t(Ke).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>t(st).toLocaleString(),()=>t(at).toLocaleString(),()=>t(bt).toLocaleString(),()=>parseFloat(t(ss))>=95?"#00ff00":parseFloat(t(ss))>=85?"#ffff00":"#ff6666",()=>parseFloat(t(as))>=30?"#00ff00":parseFloat(t(as))>=20?"#ffff00":"#ff6666"]),M("click",vs,()=>{h(Ce,!t(Ce))}),M("click",Ta,()=>{h(Ce,!t(Ce))}),M("click",ks,()=>{t(le)?_t():Ie.some(f=>f.state==="spinning"||f.state==="slowing")?Ie.forEach(f=>{f.state==="spinning"?(f.stopDelay=0,f.state="slowing",f.speed=f.targetSpeed*.5):f.state==="slowing"&&(f.speed=f.speed*.3)}):fs()}),M("click",Ot,()=>{t(le)?_t():h(ge,!t(ge))}),M("click",Mt,()=>{t(J)==="slow"?h(J,"medium"):t(J)==="medium"?h(J,"fast"):h(J,"slow")}),M("click",Da,()=>{h(Ce,!t(Ce))}),M("click",Bt,()=>{h(Zt,!t(Zt))}),M("click",Qa,vo),M("click",ot,eo),M("click",Ft,to),M("click",Ds,so),M("click",Wt,Yn),M("click",Ns,Vn),N(s,_a),Ht()}var ll=Z('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),cl=Z('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function dl(s,e){Gt(e,!1);let a=it(e,"isAuthenticated",12,!1),n=Zs(""),o=Zs(!1);const r="slot2024";function l(){t(n)===r?(a(!0),sessionStorage.setItem("gameAuthenticated","true")):(h(o,!0),h(n,""),setTimeout(()=>h(o,!1),3e3))}ia(()=>{a(sessionStorage.getItem("gameAuthenticated")==="true")}),jo();var d=jt(),g=Ve(d);{var y=v=>{var m=cl(),_=x(m),P=p(x(_),4),R=x(P);Ai(R),An(2),w(P);var Q=p(P,2);{var D=L=>{var C=ll();N(L,C)};se(Q,L=>{t(o)&&L(D)})}w(_),w(m),$i(R,()=>t(n),L=>h(n,L)),M("submit",P,Si(l)),N(v,m)};se(g,v=>{a()||v(y)})}N(s,d),Ht()}var fl=Z("<!> <!>",1);function Al(s){let e=Zs(!1);var a=fl(),n=Ve(a);dl(n,{get isAuthenticated(){return t(e)},set isAuthenticated(l){h(e,l)},$$legacy:!0});var o=p(n,2);{var r=l=>{rl(l,{})};se(o,l=>{t(e)&&l(r)})}N(s,a)}export{Tn as A,En as C,qi as R,Li as S,Rn as V,Al as _,Pi as u};
