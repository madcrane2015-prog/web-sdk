const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DP3_Aky4.js","./SpTHHzAp.js","./DN2ixH3E.js","./D1rxTRw3.js","./BUP9hRfY.js","./C2GHuDhf.js","./C32jx9mm.js","./CpISbLKI.js"])))=>i.map(i=>d[i]);
var Vn=Object.defineProperty;var Yn=(t,e,s)=>e in t?Vn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var xe=(t,e,s)=>Yn(t,typeof e!="symbol"?e+"":e,s);import{f as Xn,l as Kn,d as hr,a as j,t as X,n as vr,g as C,i as Qn}from"./CzvQHsIM.js";import{i as Zn}from"./CSlWMsbo.js";import{R as _e,T as qn,Q as Jn,i as r,w as eo,W as to,X as Za,Y as qa,Z as Hs,a1 as xt,a9 as so,_ as gr,$ as mr,a0 as ao,ad as br,O as ro,z as no,I as Ja,ar as Vs,K as er,as as oo,at as io,au as lo,ac as co,av as fo,aw as uo,ax as po,ay as ho,a3 as vo,az as go,aA as mo,N as bo,aB as xo,aC as yo,g as _o,n as wo,p as oa,f as Pe,ai as $,a as ia,y,c as b,s as f,r as x,t as oe,k as De,ah as xr,aD as Le,aE as ko,aF as ea}from"./D1rxTRw3.js";import{_ as tr,i as ie,p as ye}from"./DN2ixH3E.js";import{s as F,a as Ao}from"./CSYyqGjZ.js";import{p as ta,b as sr}from"./Dk6Goypl.js";import{b as Re}from"./DeVtIdaV.js";import{e as We,E as B,a as zo,C as la,Q as Ct,V as Bt,N as Ys,D as pe,H as So,p as Ue,ab as it,ac as Ge,ad as Eo,w as Me,ae as _t,af as yr,ag as lt,a9 as $e,ah as Wt,a1 as _r,ai as To,aj as Xs,aa as Lo,ak as Ro,y as Pt}from"./SpTHHzAp.js";import{A as $o,B as ar,G as Po,T as wr,a as Oo,b as Ks}from"./BUP9hRfY.js";function Ft(t,e){return e}function Io(t,e,s,a){for(var n=[],o=e.length,i=0;i<o;i++)lo(e[i].e,n,!0);var l=o>0&&n.length===0&&s!==null;if(l){var h=s.parentNode;co(h),h.append(s),a.clear(),Fe(t,e[0].prev,e[o-1].next)}fo(n,()=>{for(var v=0;v<o;v++){var u=e[v];l||(a.delete(u.k),Fe(t,u.prev,u.next)),uo(u.e,!l)}})}function Mt(t,e,s,a,n,o=null){var i=t,l={flags:e,items:new Map,first:null};_e&&qn();var h=null,v=!1,u=eo(()=>{var m=s();return ro(m)?m:m==null?[]:br(m)});Jn(()=>{var m=r(u),g=m.length;if(v&&g===0)return;v=g===0;let S=!1;if(_e){var E=i.data===to;E!==(g===0)&&(i=Za(),qa(i),Hs(!1),S=!0)}if(_e){for(var J=null,G,T=0;T<g;T++){if(xt.nodeType===8&&xt.data===so){i=xt,S=!0,Hs(!1);break}var P=m[T],V=a(P,T);G=kr(xt,l,J,null,P,V,T,n,e,s),l.items.set(V,G),J=G}g>0&&qa(Za())}_e||Co(m,l,i,n,e,a,s),o!==null&&(g===0?h?gr(h):h=mr(()=>o(i)):h!==null&&ao(h,()=>{h=null})),S&&Hs(!0),r(u)}),_e&&(i=xt)}function Co(t,e,s,a,n,o,i){var l=t.length,h=e.items,v=e.first,u=v,m,g=null,S=[],E=[],J,G,T,P;for(P=0;P<l;P+=1){if(J=t[P],G=o(J,P),T=h.get(G),T===void 0){var V=u?u.e.nodes_start:s;g=kr(V,e,g,g===null?e.first:g.next,J,G,P,a,n,i),h.set(G,g),S=[],E=[],u=g.next;continue}if(Bo(T,J,P),(T.e.f&Vs)!==0&&gr(T.e),T!==u){if(m!==void 0&&m.has(T)){if(S.length<E.length){var ae=E[0],le;g=ae.prev;var Ae=S[0],ce=S[S.length-1];for(le=0;le<S.length;le+=1)rr(S[le],ae,s);for(le=0;le<E.length;le+=1)m.delete(E[le]);Fe(e,Ae.prev,ce.next),Fe(e,g,Ae),Fe(e,ce,ae),u=ae,g=ce,P-=1,S=[],E=[]}else m.delete(T),rr(T,u,s),Fe(e,T.prev,T.next),Fe(e,T,g===null?e.first:g.next),Fe(e,g,T),g=T;continue}for(S=[],E=[];u!==null&&u.k!==G;)(u.e.f&Vs)===0&&(m??(m=new Set)).add(u),E.push(u),u=u.next;if(u===null)continue;T=u}S.push(T),g=T,u=T.next}if(u!==null||m!==void 0){for(var we=m===void 0?[]:br(m);u!==null;)(u.e.f&Vs)===0&&we.push(u),u=u.next;var de=we.length;if(de>0){var te=null;Io(e,we,te,h)}}er.first=e.first&&e.first.e,er.last=g&&g.e}function Bo(t,e,s,a){io(t.v,e),t.i=s}function kr(t,e,s,a,n,o,i,l,h,v){var u=(h&po)!==0,m=(h&ho)===0,g=u?m?no(n):Ja(n):n,S=(h&oo)===0?i:Ja(i),E={i:S,v:g,k:o,a:null,e:null,prev:s,next:a};try{return E.e=mr(()=>l(t,g,S,v),_e),E.e.prev=s&&s.e,E.e.next=a&&a.e,s===null?e.first=E:(s.next=E,s.e.next=E.e),a!==null&&(a.prev=E,a.e.prev=E.e),E}finally{}}function rr(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,n=e?e.e.nodes_start:s,o=t.e.nodes_start;o!==a;){var i=vo(o);n.before(o),o=i}}function Fe(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}const nr=[...` 	
\r\f \v\uFEFF`];function Fo(t,e,s){var a=t==null?"":""+t;if(e&&(a=a?a+" "+e:e),s){for(var n in s)if(s[n])a=a?a+" "+n:n;else if(a.length)for(var o=n.length,i=0;(i=a.indexOf(n,i))>=0;){var l=i+o;(i===0||nr.includes(a[i-1]))&&(l===a.length||nr.includes(a[l]))?a=(i===0?"":a.substring(0,i))+a.substring(l+1):i=l}}return a===""?null:a}function sa(t,e,s,a,n,o){var i=t.__className;if(_e||i!==s){var l=Fo(s,a,o);(!_e||l!==t.getAttribute("class"))&&(l==null?t.removeAttribute("class"):e?t.className=l:t.setAttribute("class",l)),t.__className=s}else if(o)for(var h in o){var v=!!o[h];(n==null||v!==!!n[h])&&t.classList.toggle(h,v)}return o}function Mo(t){if(_e){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;A(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var n=t.checked;A(t,"checked",null),t.checked=n}}};t.__on_r=s,go(s),Xn()}}function A(t,e,s,a){var n=t.__attributes??(t.__attributes={});_e&&(n[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||n[e]!==(n[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[mo]=s),s==null?t.removeAttribute(e):typeof s!="string"&&Wo(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var or=new Map;function Wo(t){var e=or.get(t.nodeName);if(e)return e;or.set(t.nodeName,e=[]);for(var s,a=t,n=Element.prototype;n!==a;){s=xo(a);for(var o in s)s[o].set&&e.push(o);a=bo(a)}return e}function No(t,e,s=e){var a=yo();Kn(t,"input",n=>{var o=n?t.defaultValue:t.value;if(o=Qs(t)?Zs(o):o,s(o),a&&o!==(o=e())){var i=t.selectionStart,l=t.selectionEnd;t.value=o??"",l!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(l,t.value.length))}}),(_e&&t.defaultValue!==t.value||_o(e)==null&&t.value)&&s(Qs(t)?Zs(t.value):t.value),wo(()=>{var n=e();Qs(t)&&n===Zs(t.value)||t.type==="date"&&!n&&!t.value||n!==t.value&&(t.value=n??"")})}function Qs(t){var e=t.type;return e==="number"||e==="range"}function Zs(t){return t===""?null:+t}function jo(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const aa=[];We.handleByNamedList(B.Environment,aa);async function Do(t){if(!t)for(let e=0;e<aa.length;e++){const s=aa[e];if(s.value.test()){await s.value.load();return}}}let yt;function Uo(){if(typeof yt=="boolean")return yt;try{yt=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{yt=!1}return yt}var Ar=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(Ar||{});class Go{constructor(e){this.items=[],this._name=e}emit(e,s,a,n,o,i,l,h){const{name:v,items:u}=this;for(let m=0,g=u.length;m<g;m++)u[m][v](e,s,a,n,o,i,l,h);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Ho=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],zr=class Sr extends zo{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...Ho,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Do(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...Sr.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof la&&(a={container:a},s&&(Ct(Bt,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const n=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=n?a.clearColor:Ys.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const n=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==n&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Ar.ALL);const{clear:a,clearColor:n,target:o}=e;Ys.shared.setValue(n??this.background.colorRgba),s.renderTarget.clear(o,a,Ys.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new Go(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const n in this.runners)this.runners[n].add(a);return this}_addPipes(e,s){const a=s.reduce((n,o)=>(n[o.name]=o.value,n),{});e.forEach(n=>{const o=n.value,i=n.name,l=a[i];this.renderPipes[i]=new o(this,l?new l:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Uo())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};zr.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Er=zr,Ot;function Vo(t){return Ot!==void 0||(Ot=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??Er.defaultOptions.failIfMajorPerformanceCaveat};try{if(!pe.get().getWebGLRenderingContext())return!1;let n=pe.get().createCanvas().getContext("webgl",e);const o=!!((s=n==null?void 0:n.getContextAttributes())!=null&&s.stencil);if(n){const i=n.getExtension("WEBGL_lose_context");i&&i.loseContext()}return n=null,o}catch{return!1}})()),Ot}let It;async function Yo(t={}){return It!==void 0||(It=await(async()=>{const e=pe.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),It}const ir=["webgl","webgpu","canvas"];async function Xo(t){let e=[];t.preference?(e.push(t.preference),ir.forEach(o=>{o!==t.preference&&e.push(o)})):e=ir.slice();let s,a={};for(let o=0;o<e.length;o++){const i=e[o];if(i==="webgpu"&&await Yo()){const{WebGPURenderer:l}=await tr(async()=>{const{WebGPURenderer:h}=await import("./DP3_Aky4.js");return{WebGPURenderer:h}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=l,a={...t,...t.webgpu};break}else if(i==="webgl"&&Vo(t.failIfMajorPerformanceCaveat??Er.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:l}=await tr(async()=>{const{WebGLRenderer:h}=await import("./CpISbLKI.js");return{WebGLRenderer:h}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=l,a={...t,...t.webgl};break}else if(i==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const n=new s;return await n.init(a),n}const Tr="8.8.1";class Lr{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Tr)}static destroy(){}}Lr.extension=B.Application;class Ko{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Tr)}destroy(){this._renderer=null}}Ko.extension={type:[B.WebGLSystem,B.WebGPUSystem],name:"initHook",priority:-10};const Rr=class ra{constructor(...e){this.stage=new la,e[0]!==void 0&&Ct(Bt,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Xo(e),ra._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Ct(Bt,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=ra._plugins.slice(0);a.reverse(),a.forEach(n=>{n.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Rr._plugins=[];let $r=Rr;We.handleByList(B.Application,$r._plugins);We.add(Lr);class Pr extends $o{constructor(e,s){super();const{textures:a,data:n}=e;Object.keys(n.pages).forEach(o=>{const i=n.pages[parseInt(o,10)],l=a[i.id];this.pages.push({texture:l})}),Object.keys(n.chars).forEach(o=>{const i=n.chars[o],{frame:l,source:h}=a[i.page],v=new So(i.x+l.x,i.y+l.y,i.width,i.height),u=new Ue({source:h,frame:v});this.chars[o]={id:o.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:u}}),this.baseRenderedFontSize=n.fontSize,this.baseMeasurementFontSize=n.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:n.fontSize},this.baseLineOffset=n.baseLineOffset,this.lineHeight=n.lineHeight,this.fontFamily=n.fontFamily,this.distanceField=n.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){ar.install(e)}static uninstall(e){ar.uninstall(e)}}const qs={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const m in e){const g=e[m].match(/^[a-z]+/gm)[0],S=e[m].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),E={};for(const J in S){const G=S[J].split("="),T=G[0],P=G[1].replace(/"/gm,""),V=parseFloat(P),ae=isNaN(V)?P:V;E[T]=ae}s[g].push(E)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[n]=s.info,[o]=s.common,[i]=s.distanceField??[];i&&(a.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),a.fontSize=parseInt(n.size,10),a.fontFamily=n.face,a.lineHeight=parseInt(o.lineHeight,10);const l=s.page;for(let m=0;m<l.length;m++)a.pages.push({id:parseInt(l[m].id,10)||0,file:l[m].file});const h={};a.baseLineOffset=a.lineHeight-parseInt(o.base,10);const v=s.char;for(let m=0;m<v.length;m++){const g=v[m],S=parseInt(g.id,10);let E=g.letter??g.char??String.fromCharCode(S);E==="space"&&(E=" "),h[S]=E,a.chars[E]={id:S,page:parseInt(g.page,10)||0,x:parseInt(g.x,10),y:parseInt(g.y,10),width:parseInt(g.width,10),height:parseInt(g.height,10),xOffset:parseInt(g.xoffset,10),yOffset:parseInt(g.yoffset,10),xAdvance:parseInt(g.xadvance,10),kerning:{}}}const u=s.kerning||[];for(let m=0;m<u.length;m++){const g=parseInt(u[m].first,10),S=parseInt(u[m].second,10),E=parseInt(u[m].amount,10);a.chars[h[S]].kerning[h[g]]=E}return a}},lr={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],n=t.getElementsByTagName("distanceField")[0];n&&(e.distanceField={type:n.getAttribute("fieldType"),range:parseInt(n.getAttribute("distanceRange"),10)});const o=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),l=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let v=0;v<o.length;v++)e.pages.push({id:parseInt(o[v].getAttribute("id"),10)||0,file:o[v].getAttribute("file")});const h={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let v=0;v<i.length;v++){const u=i[v],m=parseInt(u.getAttribute("id"),10);let g=u.getAttribute("letter")??u.getAttribute("char")??String.fromCharCode(m);g==="space"&&(g=" "),h[m]=g,e.chars[g]={id:m,page:parseInt(u.getAttribute("page"),10)||0,x:parseInt(u.getAttribute("x"),10),y:parseInt(u.getAttribute("y"),10),width:parseInt(u.getAttribute("width"),10),height:parseInt(u.getAttribute("height"),10),xOffset:parseInt(u.getAttribute("xoffset"),10),yOffset:parseInt(u.getAttribute("yoffset"),10),xAdvance:parseInt(u.getAttribute("xadvance"),10),kerning:{}}}for(let v=0;v<l.length;v++){const u=parseInt(l[v].getAttribute("first"),10),m=parseInt(l[v].getAttribute("second"),10),g=parseInt(l[v].getAttribute("amount"),10);e.chars[h[m]].kerning[h[u]]=g}return e}},cr={test(t){return typeof t=="string"&&t.includes("<font>")?lr.test(pe.get().parseXML(t)):!1},parse(t){return lr.parse(pe.get().parseXML(t))}},Qo=[".xml",".fnt"],Zo={extension:{type:B.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof Pr,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},qo={extension:{type:B.LoadParser,priority:it.Normal},name:"loadBitmapFont",test(t){return Qo.includes(Ge.extname(t).toLowerCase())},async testParse(t){return qs.test(t)||cr.test(t)},async parse(t,e,s){const a=qs.test(t)?qs.parse(t):cr.parse(t),{src:n}=e,{pages:o}=a,i=[],l=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let m=0;m<o.length;++m){const g=o[m].file;let S=Ge.join(Ge.dirname(n),g);S=Eo(S,n),i.push({src:S,data:l})}const h=await s.load(i),v=i.map(m=>h[m.src]);return new Pr({data:a,textures:v},n)},async load(t,e){return await(await pe.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class Jo{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const ei={extension:{type:B.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Ue),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((n,o)=>{s[a+(o===0?"":o+1)]=n})}),s}};async function Or(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const ti={extension:{type:B.DetectionParser,priority:1},test:async()=>Or("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},dr=["png","jpg","jpeg"],si={extension:{type:B.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...dr],remove:async t=>t.filter(e=>!dr.includes(e))},ai="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function ca(t){return ai?!1:document.createElement("video").canPlayType(t)!==""}const ri={extension:{type:B.DetectionParser,priority:0},test:async()=>ca("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},ni={extension:{type:B.DetectionParser,priority:0},test:async()=>ca("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},oi={extension:{type:B.DetectionParser,priority:0},test:async()=>ca("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},ii={extension:{type:B.DetectionParser,priority:0},test:async()=>Or("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class li{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var i,l;let n=null,o=null;if(s.loadParser&&(o=this._parserHash[s.loadParser],o||Me(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!o){for(let h=0;h<this.parsers.length;h++){const v=this.parsers[h];if(v.load&&((i=v.test)!=null&&i.call(v,e,s,this))){o=v;break}}if(!o)return Me(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}n=await o.load(e,s,this),a.parser=o;for(let h=0;h<this.parsers.length;h++){const v=this.parsers[h];v.parse&&v.parse&&await((l=v.testParse)==null?void 0:l.call(v,n,s,this))&&(n=await v.parse(n,s,this)||n,a.parser=v)}return n})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const n={},o=yr(e),i=_t(e,v=>({alias:[v],src:v,data:{}})),l=i.length,h=i.map(async v=>{const u=Ge.toAbsolute(v.src);if(!n[v.src])try{this.promiseCache[u]||(this.promiseCache[u]=this._getLoadPromiseAndParser(u,v)),n[v.src]=await this.promiseCache[u].promise,s&&s(++a/l)}catch(m){throw delete this.promiseCache[u],delete n[v.src],new Error(`[Loader.load] Failed to load ${u}.
${m}`)}});return await Promise.all(h),o?n[i[0].src]:n}async unload(e){const a=_t(e,n=>({alias:[n],src:n})).map(async n=>{var l,h;const o=Ge.toAbsolute(n.src),i=this.promiseCache[o];if(i){const v=await i.promise;delete this.promiseCache[o],await((h=(l=i.parser)==null?void 0:l.unload)==null?void 0:h.call(l,v,n,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&Me(`[Assets] loadParser name conflict "${s.name}"`):Me("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function ct(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const ci=".json",di="application/json",fi={extension:{type:B.LoadParser,priority:it.Low},name:"loadJson",test(t){return ct(t,di)||lt(t,ci)},async load(t){return await(await pe.get().fetch(t)).json()}},ui=".txt",pi="text/plain",hi={name:"loadTxt",extension:{type:B.LoadParser,priority:it.Low,name:"loadTxt"},test(t){return ct(t,pi)||lt(t,ui)},async load(t){return await(await pe.get().fetch(t)).text()}},vi=["normal","bold","100","200","300","400","500","600","700","800","900"],gi=[".ttf",".otf",".woff",".woff2"],mi=["font/ttf","font/otf","font/woff","font/woff2"],bi=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function xi(t){const e=Ge.extname(t),n=Ge.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(l=>l.charAt(0).toUpperCase()+l.slice(1));let o=n.length>0;for(const l of n)if(!l.match(bi)){o=!1;break}let i=n.join(" ");return o||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const yi=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function _i(t){return yi.test(t)?t:encodeURI(t)}const wi={extension:{type:B.LoadParser,priority:it.Low},name:"loadWebFont",test(t){return ct(t,mi)||lt(t,gi)},async load(t,e){var a,n,o;const s=pe.get().getFontFaceSet();if(s){const i=[],l=((a=e.data)==null?void 0:a.family)??xi(t),h=((o=(n=e.data)==null?void 0:n.weights)==null?void 0:o.filter(u=>vi.includes(u)))??["normal"],v=e.data??{};for(let u=0;u<h.length;u++){const m=h[u],g=new FontFace(l,`url(${_i(t)})`,{...v,weight:m});await g.load(),s.add(g),i.push(g)}return $e.set(`${l}-and-url`,{url:t,fontFaces:i}),i.length===1?i[0]:i}return Me("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{$e.remove(`${e.family}-and-url`),pe.get().getFontFaceSet().delete(e)})}};function da(t,e=1){var a;const s=(a=Wt.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function fa(t,e,s){t.label=s,t._sourceOrigin=s;const a=new Ue({source:t,label:s}),n=()=>{delete e.promiseCache[s],$e.has(s)&&$e.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(Me("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),n())}),a.once("destroy",()=>{t.destroyed||(Me("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),n())}),a}const ki=".svg",Ai="image/svg+xml",zi={extension:{type:B.LoadParser,priority:it.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return ct(t,Ai)||lt(t,ki)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?Ei(t):Si(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function Si(t,e,s,a){var G,T,P;const o=await(await pe.get().fetch(t)).blob(),i=URL.createObjectURL(o),l=new Image;l.src=i,l.crossOrigin=a,await l.decode(),URL.revokeObjectURL(i);const h=document.createElement("canvas"),v=h.getContext("2d"),u=((G=e.data)==null?void 0:G.resolution)||da(t),m=((T=e.data)==null?void 0:T.width)??l.width,g=((P=e.data)==null?void 0:P.height)??l.height;h.width=m*u,h.height=g*u,v.drawImage(l,0,0,m*u,g*u);const{parseAsGraphicsContext:S,...E}=e.data??{},J=new _r({resource:h,alphaMode:"premultiply-alpha-on-upload",resolution:u,...E});return fa(J,s,t)}async function Ei(t){const s=await(await pe.get().fetch(t)).text(),a=new Po;return a.svg(s),a}const Ti=`(function () {
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
`;let nt=null,na=class{constructor(){nt||(nt=URL.createObjectURL(new Blob([Ti],{type:"application/javascript"}))),this.worker=new Worker(nt)}};na.revokeObjectURL=function(){nt&&(URL.revokeObjectURL(nt),nt=null)};const Li=`(function () {
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
`;let ot=null;class Ir{constructor(){ot||(ot=URL.createObjectURL(new Blob([Li],{type:"application/javascript"}))),this.worker=new Worker(ot)}}Ir.revokeObjectURL=function(){ot&&(URL.revokeObjectURL(ot),ot=null)};let fr=0,Js;class Ri{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new na;s.addEventListener("message",a=>{s.terminate(),na.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Js===void 0&&(Js=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Js&&(this._createdWorkers++,e=new Ir().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((n,o)=>{this._queue.push({id:e,arguments:s,resolve:n,reject:o})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[fr]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:fr++,id:a})}}const ur=new Ri,$i=[".jpeg",".jpg",".png",".webp",".avif"],Pi=["image/jpeg","image/png","image/webp","image/avif"];async function Oi(t,e){var n;const s=await pe.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((n=e==null?void 0:e.data)==null?void 0:n.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const Cr={name:"loadTextures",extension:{type:B.LoadParser,priority:it.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return ct(t,Pi)||lt(t,$i)},async load(t,e,s){var o;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await ur.isImageBitmapSupported()?a=await ur.loadImageBitmap(t,e):a=await Oi(t,e):a=await new Promise((i,l)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?i(a):(a.onload=()=>{i(a)},a.onerror=l)});const n=new _r({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((o=e.data)==null?void 0:o.resolution)||da(t),...e.data});return fa(n,s,t)},unload(t){t.destroy(!0)}},Br=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Ii=Br.map(t=>`video/${t.substring(1)}`);function Ci(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=Fi(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function Bi(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",n),t.load();function a(){o(),e()}function n(i){o(),s(i)}function o(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",n)}})}function Fi(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const Mi={name:"loadVideo",extension:{type:B.LoadParser,name:"loadVideo"},test(t){const e=ct(t,Ii),s=lt(t,Br);return e||s},async load(t,e,s){var h,v;const a={...Xs.defaultOptions,resolution:((h=e.data)==null?void 0:h.resolution)||da(t),alphaMode:((v=e.data)==null?void 0:v.alphaMode)||await To(),...e.data},n=document.createElement("video"),o={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(o).forEach(u=>{const m=o[u];m!==void 0&&n.setAttribute(u,m)}),a.muted===!0&&(n.muted=!0),Ci(n,t,a.crossorigin);const i=document.createElement("source");let l;if(t.startsWith("data:"))l=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const u=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();l=Xs.MIME_TYPES[u]||`video/${u}`}return i.src=t,l&&(i.type=l),new Promise(u=>{const m=async()=>{const g=new Xs({...a,resource:n});n.removeEventListener("canplay",m),e.data.preload&&await Bi(n),u(fa(g,s,t))};n.addEventListener("canplay",m),n.appendChild(i)})},unload(t){t.destroy(!0)}},Fr={extension:{type:B.ResolveParser,name:"resolveTexture"},test:Cr.test,parse:t=>{var e;return{resolution:parseFloat(((e=Wt.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},Wi={extension:{type:B.ResolveParser,priority:-2,name:"resolveJson"},test:t=>Wt.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:Fr.parse};class Ni{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Wt,this.loader=new li,this.cache=$e,this._backgroundLoader=new Jo(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var o,i;if(this._initialized){Me("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let l=e.manifest;typeof l=="string"&&(l=await this.load(l)),this.resolver.addManifest(l)}const s=((o=e.texturePreference)==null?void 0:o.resolution)??1,a=typeof s=="number"?[s]:s,n=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:n,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=yr(e),n=_t(e).map(l=>{if(typeof l!="string"){const h=this.resolver.getAlias(l);return h.some(v=>!this.resolver.hasKey(v))&&this.add(l),Array.isArray(h)?h[0]:h}return this.resolver.hasKey(l)||this.add({alias:l,src:l}),l}),o=this.resolver.resolve(n),i=await this._mapLoadToResolve(o,s);return a?i[n[0]]:i}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const n=this.resolver.resolveBundle(e),o={},i=Object.keys(n);let l=0,h=0;const v=()=>{s==null||s(++l/h)},u=i.map(m=>{const g=n[m];return h+=Object.keys(g).length,this._mapLoadToResolve(g,v).then(S=>{o[m]=S})});return await Promise.all(u),a?o[e[0]]:o}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return $e.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=$e.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const n=await this.loader.load(a,s);this._backgroundLoader.active=!0;const o={};return a.forEach(i=>{const l=n[i.src],h=[i.src];i.alias&&h.push(...i.alias),h.forEach(v=>{o[v]=l}),$e.set(h,l)}),o}async unload(e){this._initialized||await this.init();const s=_t(e).map(n=>typeof n!="string"?n.src:n),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=_t(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(n=>this._unloadFromResolved(s[n]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{$e.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,n)=>s.indexOf(a)===n),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const rt=new Ni;We.handleByList(B.LoadParser,rt.loader.parsers).handleByList(B.ResolveParser,rt.resolver.parsers).handleByList(B.CacheParser,rt.cache.parsers).handleByList(B.DetectionParser,rt.detections);We.add(ei,si,ti,ii,ri,ni,oi,fi,hi,wi,zi,Cr,Mi,qo,Zo,Fr,Wi);const pr={loader:B.LoadParser,resolver:B.ResolveParser,cache:B.CacheParser,detection:B.DetectionParser};We.handle(B.Asset,t=>{const e=t.ref;Object.entries(pr).filter(([s])=>!!e[s]).forEach(([s,a])=>We.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(pr).filter(s=>!!e[s]).forEach(s=>We.remove(e[s]))});class ji extends Lo{constructor(e,s){const{text:a,resolution:n,style:o,anchor:i,width:l,height:h,roundPixels:v,...u}=e;super({...u}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=o,this.resolution=n??null,this.allowChildren=!1,this._anchor=new Ro({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=v??!1,l!==void 0&&(this.width=l),h!==void 0&&(this.height=h)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,n=-s*this.anchor.x;let o=0;return e.x>=n&&e.x<=n+s&&(o=-a*this.anchor.y,e.y>=o&&e.y<=o+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function Di(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(Ct(Bt,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class Ui extends ji{constructor(...e){const s=Di(e,"Text");super(s,wr),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=Oo.measureText(this._text,this._style),{width:n,height:o}=a;e.minX=-s._x*n,e.maxX=e.minX+n,e.minY=-s._y*o,e.maxY=e.minY+o}}const Gi="1.1.8",Hi={version:Gi};var Vi=X('<div class="win-label svelte-27a1cu">BIG WIN!</div> <div class="win-amount-display svelte-27a1cu"> </div>',1),Yi=vr('<use href="#sparkle" class="sparkle svelte-27a1cu"></use>'),Xi=vr('<use href="#vinyl"></use>'),Ki=X('<div><!> <svg class="vinyl-canvas svelte-27a1cu" viewBox="0 0 1024 800" xmlns="http://www.w3.org/2000/svg"><defs class="svelte-27a1cu"><symbol id="vinyl" viewBox="-200 -200 400 400" class="svelte-27a1cu"><circle cx="0" cy="0" r="180" fill="#0b0b0b" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="150" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.3" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="120" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.25" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="90" fill="none" stroke="#1a1a1a" stroke-width="1.5" opacity="0.2" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="55" fill="var(--label-color)" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="6" fill="#ffffff" class="svelte-27a1cu"></circle><ellipse cx="-15" cy="-15" rx="20" ry="15" fill="#ffffff" opacity="0.3" transform="rotate(-30)" class="svelte-27a1cu"></ellipse></symbol><symbol id="sparkle" viewBox="-12 -12 24 24" class="svelte-27a1cu"><polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ffd966" class="svelte-27a1cu"></polygon><circle cx="0" cy="0" r="2" fill="#ffffff" class="svelte-27a1cu"></circle></symbol><symbol id="confetti" viewBox="-3 -3 6 6" class="svelte-27a1cu"><circle cx="0" cy="0" r="2" fill="var(--confetti-color)" class="svelte-27a1cu"></circle></symbol></defs><!><!></svg></div>');function Qi(t,e){oa(e,!0);let s=ta(e,"winLevel",3,"small"),a=ta(e,"winAmount",3,0),n=$(!1),o=$(!1);const i={small:{vinyls:5,sparkles:8,maxRadius:100},medium:{vinyls:12,sparkles:16,maxRadius:140},jackpot:{vinyls:24,sparkles:30,maxRadius:180}},l=De(()=>i[s()]),h=["#f04e37","#ffd966","#ff8533","#4ecdc4","#ff6b9d"];function v(P){const V=[],Ae=r(l).maxRadius;for(let ce=0;ce<P;ce++){const we=Math.PI*2*ce/P+Math.random()*.4,de=Math.random()*Ae*.7+Ae*.2;V.push({x:512+Math.cos(we)*de,y:400+Math.sin(we)*de,rotation:Math.random()*30-15,scale:.3+Math.random()*.25,delay:ce*.05,color:h[ce%h.length]})}return V}function u(P){const V=[];for(let ae=0;ae<P;ae++)V.push({x:100+Math.random()*824,y:50+Math.random()*700,delay:Math.random()*.8,duration:.6+Math.random()*.4,rotation:Math.random()*360});return V}const m=De(()=>v(r(l).vinyls)),g=De(()=>u(r(l).sparkles));function S(){y(n,!0),y(o,!0),setTimeout(()=>{y(o,!1),setTimeout(()=>{var P;y(n,!1),(P=e.onComplete)==null||P.call(e)},500)},s()==="jackpot"?4e3:s()==="medium"?3e3:2500)}function E(){y(o,!1),setTimeout(()=>{y(n,!1)},500)}var J=hr(),G=Pe(J);{var T=P=>{var V=Ki();let ae;var le=b(V);{var Ae=te=>{var re=Vi(),me=f(Pe(re),2),Oe=b(me,!0);x(me),oe(wt=>F(Oe,wt),[()=>a().toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),j(te,re)};ie(le,te=>{a()>0&&te(Ae)})}var ce=f(le,2),we=f(b(ce));Mt(we,17,()=>r(g),Ft,(te,re)=>{var me=Yi();oe(()=>A(me,"style",`
            --sx: ${r(re).x??""}px;
            --sy: ${r(re).y??""}px;
            --duration: ${r(re).duration??""}s;
            --sparkle-delay: ${r(re).delay??""}s;
          `)),j(te,me)});var de=f(we);Mt(de,17,()=>r(m),Ft,(te,re)=>{var me=Xi();let Oe;oe(()=>{Oe=sa(me,0,"vinyl-group svelte-27a1cu",null,Oe,{floating:r(o)}),A(me,"style",`
            --tx: ${r(re).x??""}px;
            --ty: ${r(re).y??""}px;
            --scale: ${r(re).scale??""};
            --rotation: ${r(re).rotation??""}deg;
            --delay: ${r(re).delay??""}s;
            --label-color: ${r(re).color??""};
          `)}),j(te,me)}),x(ce),x(V),oe(()=>ae=sa(V,1,"vinyl-win-container svelte-27a1cu",null,ae,{visible:r(o),hiding:!r(o)})),j(P,V)};ie(G,P=>{r(n)&&P(T)})}return j(t,J),ia({show:S,hide:E})}var Zi=Qn('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-2k82zv"><\/script><!---->',1),qi=X('<p style="color: red;" class="svelte-2k82zv"><strong class="svelte-2k82zv">Error:</strong> </p>'),Ji=X('<div class="svelte-2k82zv"> </div>'),el=X('<details class="svelte-2k82zv"><summary class="svelte-2k82zv"> </summary> <!></details>'),tl=X(`<div style="
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
  " class="svelte-2k82zv"><h3 class="svelte-2k82zv">🎰 Oma-peli Debug</h3> <p class="svelte-2k82zv"><strong class="svelte-2k82zv">Status:</strong> </p> <!> <p class="svelte-2k82zv"><strong class="svelte-2k82zv">Base:</strong> </p> <p class="svelte-2k82zv"><strong class="svelte-2k82zv">BG URL:</strong> </p> <p class="svelte-2k82zv"><strong class="svelte-2k82zv">Sample:</strong> </p> <!></div>`),sl=X('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-2k82zv"> </div>'),al=X('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-2k82zv"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-2k82zv"> </span></div>'),rl=X(`<div style="
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
  " class="svelte-2k82zv"><h2 style="margin: 0 0 10px 0; font-size: 2em;" class="svelte-2k82zv">🎉 VOITTO! 🎉</h2> <div style="font-size: 1.5em; font-weight: bold; margin: 10px 0;" class="svelte-2k82zv"> </div> <!> <!> <button style="
        margin-top: 15px;
        padding: 8px 16px;
        background: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
      " class="svelte-2k82zv">Jatka pelaamista</button></div>`),nl=X(`<div style="
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.95);
    color: white;
    padding: 30px;
    border-radius: 15px;
    font-family: Arial, sans-serif;
    z-index: 3000;
    border: 3px solid #ffd700;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
  " class="svelte-2k82zv"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-2k82zv">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-2k82zv">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-2k82zv"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-2k82zv"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-2k82zv"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-2k82zv">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-2k82zv"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-2k82zv">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-2k82zv"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-2k82zv">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-2k82zv"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-2k82zv">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-2k82zv">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-2k82zv">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-2k82zv">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-2k82zv"> <span style="color: #ffd700;" class="svelte-2k82zv">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-2k82zv">Sulje</button></div>`),ol=X('<div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #ff00ff; font-size: 16px; animation: pulse 1s infinite;" class="svelte-2k82zv"><span class="svelte-2k82zv">🎰 FREE SPINS:</span> <span class="svelte-2k82zv"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-top: 1px solid #555; padding-top: 8px;" class="svelte-2k82zv"><span style="color: #fff; font-size: 14px;" class="svelte-2k82zv">Total Won:</span> <span style="color: #00ff00; font-size: 14px;" class="svelte-2k82zv"> </span></div>',1),il=X(`<div style="
      background: rgba(255, 100, 100, 0.9);
      color: white;
      padding: 15px 20px;
      border-radius: 10px;
      border: 2px solid #ff0000;
      box-shadow: 0 4px 15px rgba(255, 0, 0, 0.5);
      text-align: center;
      animation: winPulse 1s infinite;
    " class="svelte-2k82zv"><div style="font-weight: bold; font-size: 16px; margin-bottom: 8px;" class="svelte-2k82zv">🔄 AUTOPLAY</div> <div style="font-size: 20px; font-family: 'Courier New', monospace; margin-bottom: 10px;" class="svelte-2k82zv"> </div> <button style="
          width: 100%;
          padding: 8px;
          background: #ffffff;
          color: #ff0000;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          font-size: 14px;
        " class="svelte-2k82zv">⏹ STOP</button></div>`),ll=X(`<div style="
        position: absolute;
        bottom: 60px;
        right: 0;
        background: rgba(0, 0, 0, 0.95);
        padding: 15px;
        border-radius: 10px;
        border: 2px solid #0088ff;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
        min-width: 180px;
      " class="svelte-2k82zv"><div style="color: white; font-weight: bold; margin-bottom: 10px; text-align: center;" class="svelte-2k82zv">Select Rounds:</div> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #44aa44;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-2k82zv">10 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #4488ff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-2k82zv">100 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #ff8844;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-2k82zv">1,000 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #ff4444;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-2k82zv">10,000 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            background: #aa00ff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-2k82zv">100,000 Rounds</button> <button style="
            width: 100%;
            padding: 6px;
            background: rgba(255, 255, 255, 0.1);
            color: #aaa;
            border: 1px solid #555;
            border-radius: 5px;
            cursor: pointer;
            font-size: 12px;
          " class="svelte-2k82zv">Cancel</button></div>`),cl=X(`<button style="
        padding: 12px 20px;
        background: rgba(100, 200, 255, 0.9);
        color: white;
        border: 2px solid #0088ff;
        border-radius: 10px;
        cursor: pointer;
        font-weight: bold;
        font-size: 14px;
        box-shadow: 0 4px 15px rgba(0, 136, 255, 0.5);
        min-width: 140px;
      " class="svelte-2k82zv">🔄 AUTOPLAY</button> <!>`,1),dl=X(`<div style="
          position: absolute;
          bottom: 80px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
          border: 2px solid #ffd700;
          border-radius: 10px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
        " class="svelte-2k82zv"><div style="
            color: #ffd700;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            border-bottom: 1px solid #444;
            padding-bottom: 5px;
          " class="svelte-2k82zv">SPIN SPEED</div> <button class="svelte-2k82zv">🐌 SLOW</button> <button class="svelte-2k82zv">⚡ MEDIUM</button> <button class="svelte-2k82zv">🚀 FAST</button></div>`),fl=X(`<!> <!> <!> <div style="
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  " class="svelte-2k82zv"></div> <div class="svelte-2k82zv"><!> <div style="display: flex; justify-content: space-between; margin-bottom: 8px;" class="svelte-2k82zv"><span style="color: #fff;" class="svelte-2k82zv">CREDITS:</span> <span style="color: #ffd700;" class="svelte-2k82zv"> </span></div> <div style="display: flex; justify-content: space-between; border-top: 1px solid #555; padding-top: 8px;" class="svelte-2k82zv"><span style="color: #fff;" class="svelte-2k82zv">BET:</span> <span style="color: #00ff00;" class="svelte-2k82zv"> </span></div></div> <div style="
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.85);
  padding: 15px;
  border-radius: 10px;
  border: 2px solid #00ff00;
  z-index: 1500;
" class="svelte-2k82zv"><div style="color: white; font-size: 14px; margin-bottom: 10px; text-align: center; font-weight: bold;" class="svelte-2k82zv">BET CONTROLS</div> <div style="display: flex; gap: 10px; align-items: center;" class="svelte-2k82zv"><button style="
        padding: 8px 15px;
        background: #ff4444;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: background 0.2s;
      " class="bet-btn-minus svelte-2k82zv">-</button> <div style="
      color: #00ff00;
      font-family: 'Courier New', monospace;
      font-size: 20px;
      font-weight: bold;
      min-width: 60px;
      text-align: center;
      background: rgba(0, 255, 0, 0.1);
      padding: 5px 10px;
      border-radius: 5px;
    " class="svelte-2k82zv"> </div> <button style="
        padding: 8px 15px;
        background: #44ff44;
        color: #000;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: background 0.2s;
      " class="bet-btn-plus svelte-2k82zv">+</button> <button style="
        padding: 8px 12px;
        background: #ffd700;
        color: #000;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        transition: background 0.2s;
      " class="bet-btn-max svelte-2k82zv">MAX</button></div></div> <button style="
    position: absolute;
    top: 130px;
    right: 20px;
    padding: 10px 15px;
    background-color: rgba(255, 215, 0, 0.3);
    border: 2px solid rgba(255, 215, 0, 0.7);
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    color: white;
    text-shadow: 0 0 5px rgba(0,0,0,0.8);
    z-index: 1000;
    min-width: 180px;
  " class="svelte-2k82zv">💰 PAYTABLE</button> <div style="
  position: absolute;
  top: 20px;
  left: 20px;
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
" class="svelte-2k82zv"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-2k82zv">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-2k82zv"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-2k82zv"><span style="color: #aaa;" class="svelte-2k82zv">Rounds:</span> <span style="color: #fff;" class="svelte-2k82zv"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-2k82zv"><span style="color: #aaa;" class="svelte-2k82zv">Wagered:</span> <span style="color: #ff6666;" class="svelte-2k82zv"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-2k82zv"><span style="color: #aaa;" class="svelte-2k82zv">Won:</span> <span style="color: #66ff66;" class="svelte-2k82zv"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 10px; 
    padding-top: 10px; 
    border-top: 1px solid #555;
    font-weight: bold;
    font-size: 18px;
  " class="svelte-2k82zv"><span style="color: #ffd700;" class="svelte-2k82zv">RTP:</span> <span class="svelte-2k82zv"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
  " class="svelte-2k82zv"><span style="color: #aaa;" class="svelte-2k82zv">Hit Freq:</span> <span class="svelte-2k82zv"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-size: 14px;
  " class="svelte-2k82zv"><span style="color: #aaa;" class="svelte-2k82zv">Free Spins Triggered:</span> <span style="color: #66ccff;" class="svelte-2k82zv"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 4px;
    font-size: 14px;
  " class="svelte-2k82zv"><span style="color: #aaa;" class="svelte-2k82zv">Free Spins Played:</span> <span style="color: #66ccff;" class="svelte-2k82zv"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #555;
    font-size: 14px;
  " class="svelte-2k82zv"><span style="color: #aaa;" class="svelte-2k82zv">Empty Slots:</span> <span style="color: #ff9900;" class="svelte-2k82zv"> </span></div> <button style="
      margin-top: 10px;
      width: 100%;
      padding: 5px;
      background: rgba(255, 100, 100, 0.3);
      color: #fff;
      border: 1px solid #ff6666;
      border-radius: 5px;
      cursor: pointer;
      font-size: 11px;
    " class="svelte-2k82zv">Reset Stats</button> <div style="
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  " class="svelte-2k82zv"><button class="svelte-2k82zv"> </button> <button class="svelte-2k82zv">Clear Win Log</button> <button class="svelte-2k82zv"> </button> <button class="svelte-2k82zv">🎰 Test Free Spins</button></div></div> <div style="
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1500;
" class="svelte-2k82zv"><!></div> <button class="svelte-2k82zv"> </button>  <div class="svelte-2k82zv"><img alt="Left End" class="svelte-2k82zv"> <div class="svelte-2k82zv"><div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-2k82zv"><div style="color: #00ff00; font-size: 12px; font-weight: bold;" class="svelte-2k82zv">BET</div> <div style="display: flex; gap: 5px; align-items: center;" class="svelte-2k82zv"><button title="Decrease Bet" class="svelte-2k82zv"></button> <div style="
          color: #fff;
          font-size: 18px;
          font-weight: bold;
          min-width: 80px;
          text-align: center;
          font-family: 'Courier New', monospace;
        " class="svelte-2k82zv"> </div> <button title="Increase Bet" class="svelte-2k82zv"></button></div></div> <img alt="Divider" class="svelte-2k82zv"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-2k82zv"><div style="color: #00ff00; font-size: 12px; font-weight: bold;" class="svelte-2k82zv">BALANCE</div> <div style="
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      " class="svelte-2k82zv"> </div></div> <img alt="Divider" class="svelte-2k82zv"> <div style="position: relative; display: flex; align-items: center; justify-content: center; flex-grow: 0.5;" class="svelte-2k82zv"><div><button title="SPIN" class="svelte-2k82zv"></button></div></div> <img alt="Divider" class="svelte-2k82zv"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-2k82zv"><button title="Autoplay" class="svelte-2k82zv"></button> <img alt="Status bar" style="width: 50px; height: auto;" class="svelte-2k82zv"></div> <img alt="Divider" class="svelte-2k82zv"> <div style="position: relative; display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-2k82zv"><button class="svelte-2k82zv"></button> <div style="
        color: #ffffff;
        font-size: 10px;
        font-weight: bold;
        text-transform: uppercase;
      " class="svelte-2k82zv"> </div> <!></div> <img alt="Divider" class="svelte-2k82zv"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-2k82zv"><button title="Fast Play" class="svelte-2k82zv"></button> <img alt="Status bar" style="width: 50px; height: auto;" class="svelte-2k82zv"></div> <img alt="Divider" class="svelte-2k82zv"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-2k82zv"><div style="color: #00ff00; font-size: 12px; font-weight: bold;" class="svelte-2k82zv">WIN</div> <div style="
        color: #ffd700;
        font-size: 20px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      " class="svelte-2k82zv"> </div></div> <img alt="Divider" class="svelte-2k82zv"> <button title="Menu" class="svelte-2k82zv"></button></div> <img alt="Right End" class="svelte-2k82zv"></div> <!>`,1);function ul(t,e){oa(e,!0);const s=Hi.version,a=13,n=1445,o=1e3,i=1.75,l=-30,h=-10,v=160,u=0,m=750,g=80,S=250,E=-230,J=-390,G=1,T=1.1,P=.5,V=40,ae=0,le=-40,Ae=1,ce="height",de=Math.round(100*i),te=Math.round(de*(700/760)),me=te+10,Oe=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],wt=typeof window<"u"&&window.location.hostname.includes("github.io"),se=wt?"/web-sdk/oma-peli/symbols":`${Re}/symbols`,K=wt?"/web-sdk/oma-peli/controls":`${Re}/controls`,Nt={a:`${se}/Blue_hotrod.jpg`,b:`${se}/Blue_jacket.jpg`,c:`${se}/Blue_rollers.jpg`,d:`${se}/Blue_speakers.jpg`,e:`${se}/Premium_blonde.jpg`,f:`${se}/Premium_brunette.jpg`,g:`${se}/Premium_rocker.jpg`,h:`${se}/New_Wild.jpg`,i:`${se}/Red_burger.jpg`,j:`${se}/Red_fries.jpg`,k:`${se}/Red_milkshake.jpg`,l:`${se}/Scatter.jpg`,emptyslot:`${se}/Emptyslot.jpg`},jt=`${se}/bg_base.jpg`,ua=`${se}/ReelFrames.png`,pa=`${se}/RockABillyReels_logo.png`,Mr={spin:`${Re}/sounds/spin.mp3`,stop:`${Re}/sounds/stop.mp3`,win:`${Re}/sounds/win.mp3`};let ze=$(!0),Dt={},ee=null,Ut=null,Gt=null;const Wr=60/130,Nr=Math.round(Wr*60);let ke=$(!0),jr=$(!1),kt=$(!1),Ht=$(945),Vt=null,Y=$("medium"),He=$(!1);const Yt={background:`${Re}/music/rockabilly-loop.mp3`,drumHit:`${Re}/music/drum-hit.mp3`,winTheme:`${Re}/music/win-stinger.mp3`};function ha(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(ha,500);return}const d=window.Howl;try{ee=new d({src:[Yt.background],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded"),y(jr,!0)},onloaderror:(p,c)=>{console.warn("⚠️ Background music not found (generate with Suno AI):",c)}}),Ut=new d({src:[Yt.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Gt=new d({src:[Yt.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(p){console.error("Failed to initialize music system:",p)}}function Dr(){ee&&r(ke)&&!ee.playing()&&(ee.play(),console.log("🎵 Background music started"))}function Ur(){ee&&ee.playing()&&(ee.fade(ee.volume(),0,500),setTimeout(()=>ee.stop(),500))}function Gr(){if(ee&&ee.playing()){const d=ee.volume();ee.fade(d,0,1e3),setTimeout(()=>{ee.stop(),ee.volume(.3)},1e3)}}let Xt=$(!1);function Hr(){y(Xt,!1),setTimeout(()=>{y(Xt,!0)},10)}let Ve=null;function Vr(){y(ke,!r(ke)),r(ke)?Dr():Ur()}function Yr(){Ut&&r(ke)&&r(ze)&&Ut.play()}function Xr(){Gt&&r(ke)&&r(ze)&&Gt.play()}let At=null,Ye=null,dt=null,ft=null,ut=$("Initializing..."),Xe=$(""),be=[],Se=$(1e3),Q=$(10);const va=1,Kt=100;let he=$(!1),Ke=$(0),Ne=$(!1),Kr=$(0),je=!1,Ee=null,Qt=!1,Qe=$(0),Ze=$(0),pt=$(0),Zt=$(0),qt=De(()=>r(Ze)>0?(r(pt)/r(Ze)*100).toFixed(2):"0.00"),Jt=De(()=>r(Qe)>0?(r(Zt)/r(Qe)*100).toFixed(2):"0.00"),Z=$(!1),Te=$(0),Ie=$(0),zt=$(0),es=$(0),St=$(0),ts=$(0),Qr=De(()=>r(St)>0?(r(ts)/r(St)*100).toFixed(2):"0.00"),ve=$(ye([]));function Zr(d,p,c){const w=new Date().toLocaleString("fi-FI");let _=`
${"=".repeat(60)}
`;_+=`ROUND #${d} - ${w}
`,_+=`Mode: ${r(Z)?"FREE SPINS":"BASE GAME"}
`,_+=`${"=".repeat(60)}
`,p.forEach((k,L)=>{_+=`
Win ${L+1}:
`,_+=`  Symbol: ${k.symbol} (${xa[k.symbol]})
`,_+=`  Count: ${k.count} symbols
`,_+=`  Multiplier: ${k.multiplier}x
`,_+=`  Payout: ${k.payout.toFixed(2)}
`,_+=`  Positions: [${k.positions.join(", ")}]
`}),_+=`
${"─".repeat(60)}
`,_+=`TOTAL WIN: ${c.toFixed(2)}
`,_+=`${"=".repeat(60)}
`,r(ve).push(_)}function qr(){const d=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${r(ve).join(`
`)}`,p=new Blob([d],{type:"text/plain"}),c=URL.createObjectURL(p),w=document.createElement("a");w.href=c,w.download=`win-log-${Date.now()}.txt`,w.click(),URL.revokeObjectURL(c)}function Jr(){y(ve,ye([]))}function en(){r(Z)||(y(Z,!0),y(Te,10),y(Ie,0),Le(zt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."))}const tn={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},sn={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function ga(d){if(d===6)return Math.random()<.55?"h":"emptyslot";const p=r(Z)?sn:tn,c=Math.random();let w=0;const _=Oe.filter(L=>L!=="h"),k=_.reduce((L,D)=>L+p[D],0);for(const L of _)if(w+=p[L]/k,c<w)return L;return"f"}function ma(){const d=[];for(let p=0;p<a;p++){const c=ga(p);d.push(c),Le(St),c==="emptyslot"&&Le(ts)}return d}function ba(d){return d<3?{col:0,row:d}:d<6?{col:1,row:d-3}:d===6?{col:2,row:0}:d<10?{col:3,row:d-7}:{col:4,row:d-10}}function ht(d,p){return d===0?p:d===1?3+p:d===2?6:d===3?7+p:d===4?10+p:-1}function an(){if(r(Z)){const d=Math.random();return d<.7?3:d<.92?5:10}else{const d=Math.random();return d<.7?1:d<.92?2:3}}const rn={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function nn(){var fe;const d=[],p=[];for(let z=0;z<a;z++)vt[z]==="l"&&p.push(z);if(p.length>=5){const z=p.length;y(Te,r(Te)+z),r(Z)?console.log(`🎰 FREE SPINS RETRIGGERED! +${z} FREE SPINS! Total: ${r(Te)}`):(y(Z,!0),y(Ie,0),Le(zt),console.log(`🎰 FREE SPINS TRIGGERED! ${p.length} scatters = ${z} FREE SPINS!`)),d.push({symbol:"l",count:p.length,payout:0,positions:p,multiplier:1})}const c=[];for(let z=0;z<3;z++)for(let R=0;R<3;R++)for(let O=0;O<1;O++)for(let I=0;I<3;I++)for(let N=0;N<3;N++){const W=[ht(0,z),ht(1,R),ht(2,O),ht(3,I),ht(4,N)];c.push(W)}console.log(`Generated ${c.length} possible paths (should be 81)`);const w=[];for(const z of c){const R=z.map(W=>vt[W]);if(R[0]==="emptyslot"||R[0]==="l")continue;let O=null;for(let W=0;W<R.length;W++)if(R[W]!=="h"&&R[W]!=="emptyslot"&&R[W]!=="l"){O=R[W];break}if(!O)continue;let I=0;const N=new Set;for(let W=0;W<z.length;W++){const Be=z[W],{col:at}=ba(Be),ue=R[W];(ue===O||ue==="h")&&N.add(at)}for(let W=0;W<5&&N.has(W);W++)I++;if(I>=3){const Be=z[0]%3;w.push({symbol:O,length:I,path:z.slice(0,I),startRow:Be})}}const _=[],k=new Map;for(const z of w){const R=`${z.symbol}-${z.path.join(",")}`;k.has(R)||k.set(R,[]),k.get(R).push(z)}for(const[z,R]of k.entries()){const O=Math.max(...R.map(N=>N.length)),I=R.find(N=>N.length===O);I&&_.push(I)}const L=[],D=new Map;for(const z of _)D.has(z.symbol)||D.set(z.symbol,[]),D.get(z.symbol).push(z);const U=[];for(const[z,R]of D.entries()){const O=Math.max(...R.map(N=>N.length)),I=R.filter(N=>N.length===O);U.push(...I)}const q=new Map;for(const z of U){const R=`${z.symbol}-${z.length}`;q.has(R)||q.set(R,[]),q.get(R).push(z)}const M=U.length>0?an():1;for(const[z,R]of q.entries()){const O=R[0],I=(fe=rn[O.symbol])==null?void 0:fe[O.length];if(I!==void 0&&I>0){const N=new Map;for(const ue of R)for(let ne=0;ne<ue.length;ne++)N.has(ne)||N.set(ne,new Set),N.get(ne).add(ue.path[ne]);let W=1;for(let ue=0;ue<O.length;ue++){const ne=N.get(ue);W*=ne?ne.size:1}const Be=I*r(Q)*W*M;console.log(`  ${O.length}x${O.symbol}: ${W} ways × ${I}x × ${r(Q)} bet × ${M} mult = ${Be}`);const at=new Set;for(const ue of R)ue.path.forEach(ne=>at.add(ne));L.push({symbol:O.symbol,count:O.length,payout:Be,positions:Array.from(at),multiplier:M})}}return d.push(...L),d}let ge=$(0),qe=$(ye([])),Ce=$(!1),Je=$(!1);const xa={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function ss(d){if(!r(ze)||!Dt[d])return;const p=Dt[d];p.currentTime=0,p.play().catch(c=>{console.warn("Äänen toisto epäonnistui:",d,c)})}function on(d){gt.forEach(p=>H.stage.removeChild(p)),gt=[],d.forEach(p=>{p.positions.forEach(c=>{const w=et[c],_=new Ks().rect(0,0,de,te).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});_.x=w.container.x,_.y=w.container.y,H.stage.addChild(_),gt.push(_);let k=0,L=1;const D=.05;H.ticker.add(()=>{k+=L*D,k>=.4&&(L=-1),k<=0&&(L=1),_.alpha=.5+k})})})}function as(){gt.forEach(d=>H.stage.removeChild(d)),gt=[]}let vt=ma(),rs,H,et=[],gt=[];class ln{constructor(p,c){xe(this,"index");xe(this,"container");xe(this,"offset",0);xe(this,"speed",0);xe(this,"targetSpeed",30);xe(this,"state","idle");xe(this,"stopDelay",0);xe(this,"bounceOffset",0);xe(this,"bounceSpeed",0);xe(this,"bounceFrames",0);this.index=p,this.container=c}start(p){this.state="spinning",this.speed=0,r(Y)==="slow"?this.targetSpeed=20:r(Y)==="medium"?this.targetSpeed=35:this.targetSpeed=50,this.stopDelay=p}startSynchronized(p){const c=60+p*Nr;this.start(c)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const p=r(Y)==="slow"?.88:r(Y)==="medium"?.92:.95;this.speed*=p,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,ss("stop"),Yr())}this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=me&&(this.offset=0,vt[this.index]=ga(this.index)))}}draw(){const p=this.container;p.removeChildren();const c=vt[this.index];if(!c||!At||!At[c])return;const w=At[c];if(!w)return;const _=this.offset+this.bounceOffset,k=new Pt(w);k.width=de,k.height=te,k.x=0,k.y=_,p.addChild(k)}}xr(async()=>{H=new $r,await H.init({width:n,height:o,background:"#001a33"}),rs.appendChild(H.canvas);const d={};try{y(ut,"Loading background and UI images..."),be.push(`Loading background: ${jt}`),be.push(`Loading reel frames: ${ua}`),be.push(`Loading logo: ${pa}`),await rt.load([{alias:"background",src:jt},{alias:"reelframes",src:ua},{alias:"logo",src:pa}]),Ye=Ue.from("background"),dt=Ue.from("reelframes"),ft=Ue.from("logo"),console.log("✅ Background texture created:",Ye.width,"x",Ye.height),console.log("✅ Reel frames texture created:",dt.width,"x",dt.height),console.log("✅ Logo texture created:",ft.width,"x",ft.height),be.push("✅ All UI images loaded"),y(ut,"Loading symbols...");const c=[];for(const w of Oe)c.push({alias:w,src:Nt[w]});await rt.load(c);for(const w of Oe){const _=Nt[w];be.push(`Loading symbol ${w}: ${_}`);try{const k=Ue.from(w);d[w]=k,console.log(`✅ Symbol ${w} loaded:`,k.width,"x",k.height),be.push(`✅ Symbol ${w} loaded`)}catch(k){const L=`❌ Failed to load symbol ${w} from ${_}: ${k}`;throw be.push(L),console.error(L),new Error(L)}}At=d,y(ut,"Assets loaded successfully!")}catch(c){y(Xe,`Asset loading failed: ${c}`),be.push(r(Xe)),console.error(r(Xe));return}console.log("Ladataan ääniefektit...");for(const[c,w]of Object.entries(Mr)){const _=new Audio;_.src=w,_.preload="auto",_.volume=.7,_.load(),_.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${w} (käytetään hiljaista placeholderia)`)}),Dt[c]=_}if(console.log("Taustakuva ladattu, tekstuuri:",Ye),Ye){const c=new Pt(Ye);H.renderer.width/H.renderer.height;const w=c.texture.width/c.texture.height;let _;_=H.renderer.height/c.texture.height,_*=Ae,c.scale.set(_),c.x=(H.renderer.width-c.width)/2,c.y=(H.renderer.height-c.height)/2+le,H.stage.addChild(c),console.log("Taustakuva lisätty:",ce,"mode, size:",c.width.toFixed(0),"x",c.height.toFixed(0),"image aspect:",w.toFixed(2),"scale:",_.toFixed(2),"pos:",c.x.toFixed(0),c.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(c=>({x:c.x+l,y:c.y+h})),et=[];for(let c=0;c<a;c++){const w=ba(c),_=w.col,k=w.row,L=300+_*(de+20),D=250+k*(te+15),U=c===6?L+u:L,q=c===6?D+v:D,M=new la;M.x=U+l,M.y=q+h;const fe=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],z=new Ks().rect(0,0,de,te).fill({color:fe[c],alpha:.3});z.x=M.x,z.y=M.y,H.stage.addChild(z);const R=new wr({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),O=new Ui({text:c.toString(),style:R});O.x=M.x+5,O.y=M.y+5,H.stage.addChild(O);const I=new Ks().rect(0,0,de,te).fill(16777215);I.x=M.x,I.y=M.y,M.mask=I,H.stage.addChild(I),H.stage.addChild(M),et.push(new ln(c,M))}if(dt){const c=new Pt(dt);c.scale.set(1),c.x=250,c.y=200,H.stage.addChild(c),Vt=c,y(Ht,ye(c.width)),console.log("Reel frames lisätty:",c.width.toFixed(0),"x",c.height.toFixed(0)),console.log("Control panel leveys päivitetty:",r(Ht).toFixed(0))}if(ft){const c=new Pt(ft);c.scale.set(P),c.x=(H.renderer.width-c.width)/2+V,c.y=ae,H.stage.addChild(c),console.log("Logo lisätty päällimmäiseen layeriin:",c.width.toFixed(0),"x",c.height.toFixed(0))}ha(),H.ticker.add(cn)});function cn(){for(const d of et)d.update(),d.draw();if(!r(Ce)&&!Qt&&et.every(d=>d.state==="stopped")){Qt=!0,Gr();const d=nn();console.log(`Checking wins, found ${d.length} wins`),d.length>0?(y(qe,ye(d)),y(ge,ye(d.reduce((p,c)=>p+c.payout,0))),Zr(r(Qe),d,r(ge)),dn(r(ge)),y(Ce,!0),y(Kr,ye(Date.now())),console.log(`🎉 VOITTO! ${r(ge)} pistettä! Uusi saldo: ${r(Se)}`),console.log(`isShowingWin set to: ${r(Ce)}, totalWin: ${r(ge)}`),d.forEach(p=>{const c=p.multiplier?` (${p.multiplier}x multiplier)`:"";console.log(`${p.count}x ${p.symbol} = ${p.payout} pistettä${c}`)}),on(d),ss("win"),r(he)&&!je&&(je=!0,Ee=window.setTimeout(()=>{r(Ce)&&r(he)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),y(Ce,!1),as()),Ee=window.setTimeout(()=>{je=!1,os()},200)},1500))):(console.log("No wins found this spin"),r(he)&&!je&&(je=!0,Ee=window.setTimeout(()=>{je=!1,os()},1e3))),r(Z)&&r(Te)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${r(Ie)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${r(Ie).toFixed(2)}`),y(Z,!1),y(Ie,0)},2e3))}}function ya(){if(ee&&r(ke)&&!ee.playing()&&(ee.play(),console.log("🎵 Background music started on first spin")),Hr(),r(Z)&&r(Te)>0)Le(Te,-1),Le(es),console.log(`🎰 FREE SPIN! Remaining: ${r(Te)}`);else if(!r(Z)){if(r(Se)<r(Q)){alert(`Not enough credits! Balance: ${r(Se)}, Bet: ${r(Q)}`),ns();return}y(Se,r(Se)-r(Q)),Le(Qe),y(Ze,r(Ze)+r(Q))}Ee!==null&&(clearTimeout(Ee),Ee=null),y(qe,ye([])),y(ge,0),y(Ce,!1),Qt=!1,as(),vt=ma(),et.forEach((d,p)=>{const c=Math.floor(p/3);d.startSynchronized(c)}),ss("spin")}function dn(d){if(y(Se,r(Se)+d),y(pt,r(pt)+d),r(Z)&&y(Ie,r(Ie)+d),d>0){Le(Zt);const p=d/r(Q);p>=10&&Xr(),Ve&&(p>=50?Ve.show():p>=20?setTimeout(()=>Ve.show(),200):p>=10&&setTimeout(()=>Ve.show(),400))}}function _a(){r(Q)<Kt&&y(Q,ye(Math.min(r(Q)+1,Kt)))}function wa(){r(Q)>va&&y(Q,ye(Math.max(r(Q)-1,va)))}function fn(){y(Q,Kt)}function mt(d){y(he,!0),y(Ke,ye(d)),y(Ne,!1),os()}function ns(){y(he,!1),y(Ke,0),je=!1,Ee!==null&&(clearTimeout(Ee),Ee=null)}function os(){if(!r(he)||r(Ke)<=0){ns();return}console.log(`Autoplay: Starting spin ${r(Ke)} rounds left`),ya(),Le(Ke,-1)}function un(){confirm("Reset all statistics?")&&(y(Qe,0),y(Ze,0),y(pt,0),y(Zt,0),y(zt,0),y(es,0),y(St,0),y(ts,0))}var ka=fl();Ao(d=>{var p=Zi();f(Pe(p)),j(d,p)});var Aa=Pe(ka);{var pn=d=>{var p=tl(),c=f(b(p),2),w=f(b(c));x(c);var _=f(c,2);{var k=O=>{var I=qi(),N=f(b(I));x(I),oe(()=>F(N,` ${r(Xe)??""}`)),j(O,I)};ie(_,O=>{r(Xe)&&O(k)})}var L=f(_,2),D=f(b(L));D.nodeValue=` ${Re??""}`,x(L);var U=f(L,2),q=f(b(U));q.nodeValue=` ${jt??""}`,x(U);var M=f(U,2),fe=f(b(M));x(M);var z=f(M,2);{var R=O=>{var I=el(),N=b(I),W=b(N);x(N);var Be=f(N,2);Mt(Be,17,()=>be,Ft,(at,ue)=>{var ne=Ji(),Hn=b(ne,!0);x(ne),oe(()=>F(Hn,r(ue))),j(at,ne)}),x(I),oe(()=>F(W,`Log (${be.length??""})`)),j(O,I)};ie(z,O=>{be.length>0&&O(R)})}x(p),oe(()=>{F(w,` ${r(ut)??""}`),F(fe,` ${Nt.a??""}`)}),j(d,p)};ie(Aa,d=>{(r(ut)!=="Assets loaded successfully!"||r(Xe))&&d(pn)})}var za=f(Aa,2);{var hn=d=>{var p=rl(),c=f(b(p),2),w=b(c);x(c);var _=f(c,2);Mt(_,17,()=>r(qe),Ft,(U,q)=>{var M=sl(),fe=b(M);x(M),oe(z=>F(fe,`${r(q).count??""} × ${xa[r(q).symbol]??""} = ${z??""} pistettä`),[()=>r(q).payout.toFixed(2)]),j(U,M)});var k=f(_,2);{var L=U=>{var q=al(),M=b(q),fe=b(M);x(M),x(q),oe(()=>F(fe,`✨ ${r(qe)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),j(U,q)};ie(k,U=>{r(qe).length>0&&r(qe)[0].multiplier>1&&U(L)})}var D=f(k,2);x(p),oe(()=>F(w,`${r(ge)??""} pistettä`)),C("click",D,()=>{y(Ce,!1),as(),console.log("Win popup closed, ready for next spin")}),j(d,p)};ie(za,d=>{r(ge)>0&&r(Ce)&&d(hn)})}var Sa=f(za,2);{var vn=d=>{var p=nl(),c=f(b(p),8);x(p),C("click",c,()=>{y(Je,!1)}),j(d,p)};ie(Sa,d=>{r(Je)&&d(vn)})}var Ea=f(Sa,2);sr(Ea,d=>rs=d,()=>rs);var Et=f(Ea,2),Ta=b(Et);{var gn=d=>{var p=ol(),c=Pe(p),w=f(b(c),2),_=b(w,!0);x(w),x(c);var k=f(c,2),L=f(b(k),2),D=b(L,!0);x(L),x(k),oe(U=>{F(_,r(Te)),F(D,U)},[()=>r(Ie).toFixed(2)]),j(d,p)};ie(Ta,d=>{r(Z)&&d(gn)})}var is=f(Ta,2),La=f(b(is),2),mn=b(La,!0);x(La),x(is);var Ra=f(is,2),$a=f(b(Ra),2),bn=b($a,!0);x($a),x(Ra),x(Et);var ls=f(Et,2),Pa=f(b(ls),2),Oa=b(Pa),cs=f(Oa,2),xn=b(cs,!0);x(cs);var Ia=f(cs,2),yn=f(Ia,2);x(Pa),x(ls);var Ca=f(ls,2),ds=f(Ca,2),Ba=f(b(ds),2);Ba.textContent=`v${s}`;var fs=f(Ba,2),Fa=f(b(fs),2),_n=b(Fa,!0);x(Fa),x(fs);var us=f(fs,2),Ma=f(b(us),2),wn=b(Ma,!0);x(Ma),x(us);var ps=f(us,2),Wa=f(b(ps),2),kn=b(Wa,!0);x(Wa),x(ps);var hs=f(ps,2),vs=f(b(hs),2),An=b(vs);x(vs),x(hs);var gs=f(hs,2),ms=f(b(gs),2),zn=b(ms);x(ms),x(gs);var bs=f(gs,2),Na=f(b(bs),2),Sn=b(Na,!0);x(Na),x(bs);var xs=f(bs,2),ja=f(b(xs),2),En=b(ja,!0);x(ja),x(xs);var ys=f(xs,2),Da=f(b(ys),2),Tn=b(Da);x(Da),x(ys);var Ua=f(ys,2),Ga=f(Ua,2),tt=b(Ga),Ln=b(tt);x(tt);var Tt=f(tt,2),bt=f(Tt,2),Rn=b(bt);x(bt);var _s=f(bt,2);x(Ga),x(ds);var ws=f(ds,2),$n=b(ws);{var Pn=d=>{var p=il(),c=f(b(p),2),w=b(c);x(c);var _=f(c,2);x(p),oe(()=>F(w,`${r(Ke)??""} left`)),C("click",_,ns),j(d,p)},On=d=>{var p=cl(),c=Pe(p),w=f(c,2);{var _=k=>{var L=ll(),D=f(b(L),2),U=f(D,2),q=f(U,2),M=f(q,2),fe=f(M,2),z=f(fe,2);x(L),C("click",D,()=>mt(10)),C("click",U,()=>mt(100)),C("click",q,()=>mt(1e3)),C("click",M,()=>mt(1e4)),C("click",fe,()=>mt(1e5)),C("click",z,()=>{y(Ne,!1)}),j(k,L)};ie(w,k=>{r(Ne)&&k(_)})}C("click",c,()=>{y(Ne,!r(Ne))}),j(d,p)};ie($n,d=>{r(he)?d(Pn):d(On,!1)})}x(ws);var st=f(ws,2),In=b(st,!0);x(st);var Lt=f(st,2),ks=b(Lt);A(ks,"src",`${K??""}/Control_leftend.png`),A(ks,"style",`height: ${g}px; flex-shrink: 0;`);var Rt=f(ks,2);A(Rt,"style",`
    flex-grow: 1;
    height: ${g}px;
    background-image: url('${K??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 20px;
  `);var As=b(Rt),Ha=f(b(As),2),zs=b(Ha);A(zs,"style",`
            width: 40px;
            height: 40px;
            background-image: url('${K??""}/Control_lowerbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `);var Ss=f(zs,2),Cn=b(Ss,!0);x(Ss);var Va=f(Ss,2);A(Va,"style",`
            width: 40px;
            height: 40px;
            background-image: url('${K??""}/Control_upperbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(Ha),x(As);var Es=f(As,2);A(Es,"src",`${K??""}/Control_divider.png`),A(Es,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Ts=f(Es,2),Ya=f(b(Ts),2),Bn=b(Ya,!0);x(Ya),x(Ts);var Ls=f(Ts,2);A(Ls,"src",`${K??""}/Control_divider.png`),A(Ls,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Rs=f(Ls,2),$s=b(Rs),Ps=b($s);x($s),x(Rs);var Os=f(Rs,2);A(Os,"src",`${K??""}/Control_divider.png`),A(Os,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Is=f(Os,2),Cs=b(Is),Fn=f(Cs,2);x(Is);var Bs=f(Is,2);A(Bs,"src",`${K??""}/Control_divider.png`),A(Bs,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Fs=f(Bs,2),$t=b(Fs);A($t,"style",`
          width: 50px;
          height: 50px;
          background-image: url('${K??""}/Control_fastplay_select.png');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `);var Ms=f($t,2),Mn=b(Ms,!0);x(Ms);var Wn=f(Ms,2);{var Nn=d=>{var p=dl(),c=f(b(p),2),w=f(c,2),_=f(w,2);x(p),oe(()=>{A(c,"style",`
              background: ${(r(Y)==="slow"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: 2px solid ${(r(Y)==="slow"?"#ffd700":"#666")??""};
              color: ${(r(Y)==="slow"?"#ffd700":"#ffffff")??""};
              padding: 8px 20px;
              border-radius: 5px;
              cursor: pointer;
              font-weight: bold;
              font-size: 12px;
              transition: all 0.2s;
            `),A(w,"style",`
              background: ${(r(Y)==="medium"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: 2px solid ${(r(Y)==="medium"?"#ffd700":"#666")??""};
              color: ${(r(Y)==="medium"?"#ffd700":"#ffffff")??""};
              padding: 8px 20px;
              border-radius: 5px;
              cursor: pointer;
              font-weight: bold;
              font-size: 12px;
              transition: all 0.2s;
            `),A(_,"style",`
              background: ${(r(Y)==="fast"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: 2px solid ${(r(Y)==="fast"?"#ffd700":"#666")??""};
              color: ${(r(Y)==="fast"?"#ffd700":"#ffffff")??""};
              padding: 8px 20px;
              border-radius: 5px;
              cursor: pointer;
              font-weight: bold;
              font-size: 12px;
              transition: all 0.2s;
            `)}),C("click",c,()=>{y(Y,"slow"),y(He,!1)}),C("click",w,()=>{y(Y,"medium"),y(He,!1)}),C("click",_,()=>{y(Y,"fast"),y(He,!1)}),j(d,p)};ie(Wn,d=>{r(He)&&d(Nn)})}x(Fs);var Ws=f(Fs,2);A(Ws,"src",`${K??""}/Control_divider.png`),A(Ws,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Ns=f(Ws,2),js=b(Ns),jn=f(js,2);x(Ns);var Ds=f(Ns,2);A(Ds,"src",`${K??""}/Control_divider.png`),A(Ds,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Us=f(Ds,2),Xa=f(b(Us),2),Dn=b(Xa,!0);x(Xa),x(Us);var Gs=f(Us,2);A(Gs,"src",`${K??""}/Control_divider.png`),A(Gs,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Ka=f(Gs,2);A(Ka,"style",`
        width: 50px;
        height: 50px;
        background-image: url('${K??""}/Control_menubar.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),x(Rt);var Qa=f(Rt,2);A(Qa,"src",`${K??""}/Control_rightend.png`),A(Qa,"style",`height: ${g}px; flex-shrink: 0;`),x(Lt);var Un=f(Lt,2);const Gn=De(()=>r(ge)/r(Q)>=50?"jackpot":r(ge)/r(Q)>=20?"medium":"small");sr(Qi(Un,{get winLevel(){return r(Gn)},get winAmount(){return r(ge)}}),d=>Ve=d,()=>Ve),oe((d,p,c,w,_,k,L,D,U)=>{A(Et,"style",`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.85);
  color: #ffd700;
  padding: 15px 20px;
  border-radius: 10px;
  font-family: 'Courier New', monospace;
  font-size: 18px;
  font-weight: bold;
  border: 2px solid ${(r(Z)?"#ff00ff":"#ffd700")??""};
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
  z-index: 1500;
  min-width: 180px;
`),F(mn,d),F(bn,r(Q)),F(xn,r(Q)),F(_n,p),F(wn,c),F(kn,w),A(vs,"style",`color: ${_??""};`),F(An,`${r(qt)??""}%`),A(ms,"style",`color: ${k??""};`),F(zn,`${r(Jt)??""}%`),F(Sn,r(zt)),F(En,r(es)),F(Tn,`${r(Qr)??""}%`),tt.disabled=r(ve).length===0,A(tt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(r(ve).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(r(ve).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(r(ve).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(r(ve).length>0?"1":"0.5")??""};
      `),F(Ln,`Download Win Log (${r(ve).length??""})`),Tt.disabled=r(ve).length===0,A(Tt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(r(ve).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(r(ve).length>0?"1":"0.5")??""};
      `),A(bt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(r(ke)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(r(ke)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),F(Rn,`🎵 Music: ${(r(ke)?"ON":"OFF")??""}`),_s.disabled=r(Z),A(_s,"style",`
        width: 100%;
        padding: 5px;
        background: ${(r(Z)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(r(Z)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(r(Z)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(r(Z)?"0.5":"1")??""};
      `),A(st,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(r(ze)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(r(ze)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),A(st,"title",r(ze)?"Mykistä äänet":"Laita äänet päälle"),F(In,r(ze)?"🔊":"🔇"),A(Lt,"style",`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(
    calc(-50% + ${(Vt?Vt.x:S)+E}px),
    calc(-50% + ${m+J}px)
  ) scale(${G}, ${T});
  transform-origin: center center;
  width: ${r(Ht)??""}px;
  height: ${g}px;
  display: flex;
  align-items: center;
  z-index: 1000;
`),F(Cn,L),F(Bn,D),sa($s,1,`play-button-wrapper ${(r(Xt)?"glare-animate":"")??""}`,"svelte-2k82zv"),Ps.disabled=r(he),A(Ps,"style",`
            width: 130px;
            height: 130px;
            background-image: url('${K??""}/Control_playbutton.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border: none;
            cursor: ${(r(he)?"not-allowed":"pointer")??""};
            background-color: transparent;
            opacity: ${(r(he)?.5:1)??""};
            position: relative;
            z-index: 10;
            border-radius: 50%;
          `),A(Cs,"style",`
          width: 50px;
          height: 50px;
          background-image: url('${K??""}/${(r(he)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),A(Fn,"src",`${K??""}/${(r(he)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),A($t,"title",`Spin Speed: ${(r(Y)==="slow"?"Slow":r(Y)==="medium"?"Medium":"Fast")??""}`),F(Mn,r(Y)==="slow"?"Slow":r(Y)==="medium"?"Med":"Fast"),A(js,"style",`
          width: 50px;
          height: 50px;
          background-image: url('${K??""}/${(r(kt)?"Control_fastplay_select.png":"Control_fastplay_deselect.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),A(jn,"src",`${K??""}/${(r(kt)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),F(Dn,U)},[()=>r(Se).toLocaleString(),()=>r(Qe).toLocaleString(),()=>r(Ze).toLocaleString(),()=>r(pt).toLocaleString(),()=>parseFloat(r(qt))>=95?"#00ff00":parseFloat(r(qt))>=85?"#ffff00":"#ff6666",()=>parseFloat(r(Jt))>=30?"#00ff00":parseFloat(r(Jt))>=20?"#ffff00":"#ff6666",()=>r(Q).toFixed(2),()=>r(Se).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>r(ge).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),C("click",Oa,wa),C("click",Ia,_a),C("click",yn,fn),C("click",Ca,()=>{y(Je,!r(Je))}),C("click",Ua,un),C("click",tt,qr),C("click",Tt,Jr),C("click",bt,Vr),C("click",_s,en),C("click",st,()=>{y(ze,!r(ze))}),C("click",zs,wa),C("click",Va,_a),C("click",Ps,ya),C("click",Cs,()=>{y(Ne,!r(Ne))}),C("click",$t,()=>{y(He,!r(He))}),C("click",js,()=>{y(kt,!r(kt))}),C("click",Ka,()=>{y(Je,!r(Je))}),j(t,ka),ia()}var pl=X('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),hl=X('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function vl(t,e){oa(e,!1);let s=ta(e,"isAuthenticated",12,!1),a=ea(""),n=ea(!1);const o="slot2024";function i(){r(a)===o?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(y(n,!0),y(a,""),setTimeout(()=>y(n,!1),3e3))}xr(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),Zn();var l=hr(),h=Pe(l);{var v=u=>{var m=hl(),g=b(m),S=f(b(g),4),E=b(S);Mo(E),ko(2),x(S);var J=f(S,2);{var G=T=>{var P=pl();j(T,P)};ie(J,T=>{r(n)&&T(G)})}x(g),x(m),No(E,()=>r(a),T=>y(a,T)),C("submit",S,jo(i)),j(u,m)};ie(h,u=>{s()||u(v)})}j(t,l),ia()}var gl=X('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),ml=X("<!> <!>",1);function Rl(t){let e=ea(!1);var s=ml(),a=Pe(s);vl(a,{get isAuthenticated(){return r(e)},set isAuthenticated(i){y(e,i)},$$legacy:!0});var n=f(a,2);{var o=i=>{var l=gl(),h=f(Pe(l),2);ul(h,{}),j(i,l)};ie(n,i=>{r(e)&&i(o)})}j(t,s)}export{Er as A,Ar as C,Ko as R,Go as S,Tr as V,Rl as _,Uo as u};
