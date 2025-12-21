const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DgcDbsop.js","./CfQEHKwl.js","./Db_meveG.js","./BdJg5JGx.js","./PpshkLFU.js","./C2GHuDhf.js","./BTwppbwI.js","./CJgdrKwD.js"])))=>i.map(i=>d[i]);
var ur=Object.defineProperty;var hr=(t,e,s)=>e in t?ur(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var oe=(t,e,s)=>hr(t,typeof e!="symbol"?e+"":e,s);import{f as gr,l as vr,t as X,g as F,a as V,i as br,d as mr}from"./BJCaw-qO.js";import{i as yr}from"./CeejRTB0.js";import{R as we,T as xr,Q as _r,i as r,w as wr,W as Ar,X as Ea,Y as Sa,Z as xs,a1 as ct,a9 as kr,_ as za,$ as Da,a0 as Er,ad as Ua,O as Sr,z as Tr,I as Ta,ar as _s,K as La,as as Lr,at as Rr,au as Or,ac as Pr,av as Ir,aw as $r,ax as Cr,ay as Br,a3 as Fr,az as qr,aA as Mr,N as Wr,aB as Nr,aC as jr,g as zr,n as Dr,p as Ga,ai as C,ah as Ha,y as x,aD as xe,f as Ce,s as f,c as m,r as y,t as de,k as ws,a as Va,aE as Ur,aF as Os}from"./BdJg5JGx.js";import{_ as Ra,p as ie,i as ae}from"./Db_meveG.js";import{a as Gr,s as B}from"./Df-H93ww.js";import{b as Hr,p as Vr}from"./dtG1_1a4.js";import{b as _e}from"./BGgMu6jm.js";import{e as Pe,E as I,a as Yr,C as Cs,Q as kt,V as Et,N as As,D as te,H as Xr,p as Be,a0 as Qe,a1 as Fe,a2 as Kr,w as Oe,a3 as pt,a4 as Ya,a5 as Ze,a6 as Ae,a7 as St,a8 as Xa,a9 as Qr,aa as ks,ab as Zr,ac as Jr,y as _t}from"./CfQEHKwl.js";import{A as eo,B as Oa,G as to,T as Ka,a as so,b as Es}from"./PpshkLFU.js";function Pa(t,e){return e}function ao(t,e,s,a){for(var n=[],o=e.length,i=0;i<o;i++)Or(e[i].e,n,!0);var c=o>0&&n.length===0&&s!==null;if(c){var u=s.parentNode;Pr(u),u.append(s),a.clear(),Re(t,e[0].prev,e[o-1].next)}Ir(n,()=>{for(var g=0;g<o;g++){var p=e[g];c||(a.delete(p.k),Re(t,p.prev,p.next)),$r(p.e,!c)}})}function Ia(t,e,s,a,n,o=null){var i=t,c={flags:e,items:new Map,first:null};we&&xr();var u=null,g=!1,p=wr(()=>{var v=s();return Sr(v)?v:v==null?[]:Ua(v)});_r(()=>{var v=r(p),b=v.length;if(g&&b===0)return;g=b===0;let E=!1;if(we){var S=i.data===Ar;S!==(b===0)&&(i=Ea(),Sa(i),xs(!1),E=!0)}if(we){for(var Q=null,N,T=0;T<b;T++){if(ct.nodeType===8&&ct.data===kr){i=ct,E=!0,xs(!1);break}var D=v[T],pe=a(D,T);N=Qa(ct,c,Q,null,D,pe,T,n,e,s),c.items.set(pe,N),Q=N}b>0&&Sa(Ea())}we||no(v,c,i,n,e,a,s),o!==null&&(b===0?u?za(u):u=Da(()=>o(i)):u!==null&&Er(u,()=>{u=null})),E&&xs(!0),r(p)}),we&&(i=ct)}function no(t,e,s,a,n,o,i){var c=t.length,u=e.items,g=e.first,p=g,v,b=null,E=[],S=[],Q,N,T,D;for(D=0;D<c;D+=1){if(Q=t[D],N=o(Q,D),T=u.get(N),T===void 0){var pe=p?p.e.nodes_start:s;b=Qa(pe,e,b,b===null?e.first:b.next,Q,N,D,a,n,i),u.set(N,b),E=[],S=[],p=b.next;continue}if(ro(T,Q,D),(T.e.f&_s)!==0&&za(T.e),T!==p){if(v!==void 0&&v.has(T)){if(E.length<S.length){var ke=S[0],le;b=ke.prev;var ft=E[0],ut=E[E.length-1];for(le=0;le<E.length;le+=1)$a(E[le],ke,s);for(le=0;le<S.length;le+=1)v.delete(S[le]);Re(e,ft.prev,ut.next),Re(e,b,ft),Re(e,ut,ke),p=ke,b=ut,D-=1,E=[],S=[]}else v.delete(T),$a(T,p,s),Re(e,T.prev,T.next),Re(e,T,b===null?e.first:b.next),Re(e,b,T),b=T;continue}for(E=[],S=[];p!==null&&p.k!==N;)(p.e.f&_s)===0&&(v??(v=new Set)).add(p),S.push(p),p=p.next;if(p===null)continue;T=p}E.push(T),b=T,p=T.next}if(p!==null||v!==void 0){for(var ce=v===void 0?[]:Ua(v);p!==null;)(p.e.f&_s)===0&&ce.push(p),p=p.next;var Ee=ce.length;if(Ee>0){var Ms=null;ao(e,ce,Ms,u)}}La.first=e.first&&e.first.e,La.last=b&&b.e}function ro(t,e,s,a){Rr(t.v,e),t.i=s}function Qa(t,e,s,a,n,o,i,c,u,g){var p=(u&Cr)!==0,v=(u&Br)===0,b=p?v?Tr(n):Ta(n):n,E=(u&Lr)===0?i:Ta(i),S={i:E,v:b,k:o,a:null,e:null,prev:s,next:a};try{return S.e=Da(()=>c(t,b,E,g),we),S.e.prev=s&&s.e,S.e.next=a&&a.e,s===null?e.first=S:(s.next=S,s.e.next=S.e),a!==null&&(a.prev=S,a.e.prev=S.e),S}finally{}}function $a(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,n=e?e.e.nodes_start:s,o=t.e.nodes_start;o!==a;){var i=Fr(o);n.before(o),o=i}}function Re(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function oo(t){if(we){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;W(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var n=t.checked;W(t,"checked",null),t.checked=n}}};t.__on_r=s,qr(s),gr()}}function W(t,e,s,a){var n=t.__attributes??(t.__attributes={});we&&(n[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||n[e]!==(n[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Mr]=s),s==null?t.removeAttribute(e):typeof s!="string"&&io(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var Ca=new Map;function io(t){var e=Ca.get(t.nodeName);if(e)return e;Ca.set(t.nodeName,e=[]);for(var s,a=t,n=Element.prototype;n!==a;){s=Nr(a);for(var o in s)s[o].set&&e.push(o);a=Wr(a)}return e}function lo(t,e,s=e){var a=jr();vr(t,"input",n=>{var o=n?t.defaultValue:t.value;if(o=Ss(t)?Ts(o):o,s(o),a&&o!==(o=e())){var i=t.selectionStart,c=t.selectionEnd;t.value=o??"",c!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(c,t.value.length))}}),(we&&t.defaultValue!==t.value||zr(e)==null&&t.value)&&s(Ss(t)?Ts(t.value):t.value),Dr(()=>{var n=e();Ss(t)&&n===Ts(t.value)||t.type==="date"&&!n&&!t.value||n!==t.value&&(t.value=n??"")})}function Ss(t){var e=t.type;return e==="number"||e==="range"}function Ts(t){return t===""?null:+t}function co(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const Ps=[];Pe.handleByNamedList(I.Environment,Ps);async function po(t){if(!t)for(let e=0;e<Ps.length;e++){const s=Ps[e];if(s.value.test()){await s.value.load();return}}}let dt;function fo(){if(typeof dt=="boolean")return dt;try{dt=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{dt=!1}return dt}var Za=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(Za||{});class uo{constructor(e){this.items=[],this._name=e}emit(e,s,a,n,o,i,c,u){const{name:g,items:p}=this;for(let v=0,b=p.length;v<b;v++)p[v][g](e,s,a,n,o,i,c,u);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const ho=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Ja=class en extends Yr{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...ho,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await po(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...en.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof Cs&&(a={container:a},s&&(kt(Et,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const n=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=n?a.clearColor:As.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const n=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==n&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Za.ALL);const{clear:a,clearColor:n,target:o}=e;As.shared.setValue(n??this.background.colorRgba),s.renderTarget.clear(o,a,As.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new uo(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const n in this.runners)this.runners[n].add(a);return this}_addPipes(e,s){const a=s.reduce((n,o)=>(n[o.name]=o.value,n),{});e.forEach(n=>{const o=n.value,i=n.name,c=a[i];this.renderPipes[i]=new o(this,c?new c:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!fo())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Ja.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let tn=Ja,wt;function go(t){return wt!==void 0||(wt=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??tn.defaultOptions.failIfMajorPerformanceCaveat};try{if(!te.get().getWebGLRenderingContext())return!1;let n=te.get().createCanvas().getContext("webgl",e);const o=!!((s=n==null?void 0:n.getContextAttributes())!=null&&s.stencil);if(n){const i=n.getExtension("WEBGL_lose_context");i&&i.loseContext()}return n=null,o}catch{return!1}})()),wt}let At;async function vo(t={}){return At!==void 0||(At=await(async()=>{const e=te.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),At}const Ba=["webgl","webgpu","canvas"];async function bo(t){let e=[];t.preference?(e.push(t.preference),Ba.forEach(o=>{o!==t.preference&&e.push(o)})):e=Ba.slice();let s,a={};for(let o=0;o<e.length;o++){const i=e[o];if(i==="webgpu"&&await vo()){const{WebGPURenderer:c}=await Ra(async()=>{const{WebGPURenderer:u}=await import("./DgcDbsop.js");return{WebGPURenderer:u}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=c,a={...t,...t.webgpu};break}else if(i==="webgl"&&go(t.failIfMajorPerformanceCaveat??tn.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:c}=await Ra(async()=>{const{WebGLRenderer:u}=await import("./CJgdrKwD.js");return{WebGLRenderer:u}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=c,a={...t,...t.webgl};break}else if(i==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const n=new s;return await n.init(a),n}const sn="8.8.1";class an{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,sn)}static destroy(){}}an.extension=I.Application;class mo{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,sn)}destroy(){this._renderer=null}}mo.extension={type:[I.WebGLSystem,I.WebGPUSystem],name:"initHook",priority:-10};const nn=class Is{constructor(...e){this.stage=new Cs,e[0]!==void 0&&kt(Et,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await bo(e),Is._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return kt(Et,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=Is._plugins.slice(0);a.reverse(),a.forEach(n=>{n.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};nn._plugins=[];let rn=nn;Pe.handleByList(I.Application,rn._plugins);Pe.add(an);class on extends eo{constructor(e,s){super();const{textures:a,data:n}=e;Object.keys(n.pages).forEach(o=>{const i=n.pages[parseInt(o,10)],c=a[i.id];this.pages.push({texture:c})}),Object.keys(n.chars).forEach(o=>{const i=n.chars[o],{frame:c,source:u}=a[i.page],g=new Xr(i.x+c.x,i.y+c.y,i.width,i.height),p=new Be({source:u,frame:g});this.chars[o]={id:o.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:p}}),this.baseRenderedFontSize=n.fontSize,this.baseMeasurementFontSize=n.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:n.fontSize},this.baseLineOffset=n.baseLineOffset,this.lineHeight=n.lineHeight,this.fontFamily=n.fontFamily,this.distanceField=n.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){Oa.install(e)}static uninstall(e){Oa.uninstall(e)}}const Ls={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const v in e){const b=e[v].match(/^[a-z]+/gm)[0],E=e[v].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),S={};for(const Q in E){const N=E[Q].split("="),T=N[0],D=N[1].replace(/"/gm,""),pe=parseFloat(D),ke=isNaN(pe)?D:pe;S[T]=ke}s[b].push(S)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[n]=s.info,[o]=s.common,[i]=s.distanceField??[];i&&(a.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),a.fontSize=parseInt(n.size,10),a.fontFamily=n.face,a.lineHeight=parseInt(o.lineHeight,10);const c=s.page;for(let v=0;v<c.length;v++)a.pages.push({id:parseInt(c[v].id,10)||0,file:c[v].file});const u={};a.baseLineOffset=a.lineHeight-parseInt(o.base,10);const g=s.char;for(let v=0;v<g.length;v++){const b=g[v],E=parseInt(b.id,10);let S=b.letter??b.char??String.fromCharCode(E);S==="space"&&(S=" "),u[E]=S,a.chars[S]={id:E,page:parseInt(b.page,10)||0,x:parseInt(b.x,10),y:parseInt(b.y,10),width:parseInt(b.width,10),height:parseInt(b.height,10),xOffset:parseInt(b.xoffset,10),yOffset:parseInt(b.yoffset,10),xAdvance:parseInt(b.xadvance,10),kerning:{}}}const p=s.kerning||[];for(let v=0;v<p.length;v++){const b=parseInt(p[v].first,10),E=parseInt(p[v].second,10),S=parseInt(p[v].amount,10);a.chars[u[E]].kerning[u[b]]=S}return a}},Fa={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],n=t.getElementsByTagName("distanceField")[0];n&&(e.distanceField={type:n.getAttribute("fieldType"),range:parseInt(n.getAttribute("distanceRange"),10)});const o=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),c=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let g=0;g<o.length;g++)e.pages.push({id:parseInt(o[g].getAttribute("id"),10)||0,file:o[g].getAttribute("file")});const u={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let g=0;g<i.length;g++){const p=i[g],v=parseInt(p.getAttribute("id"),10);let b=p.getAttribute("letter")??p.getAttribute("char")??String.fromCharCode(v);b==="space"&&(b=" "),u[v]=b,e.chars[b]={id:v,page:parseInt(p.getAttribute("page"),10)||0,x:parseInt(p.getAttribute("x"),10),y:parseInt(p.getAttribute("y"),10),width:parseInt(p.getAttribute("width"),10),height:parseInt(p.getAttribute("height"),10),xOffset:parseInt(p.getAttribute("xoffset"),10),yOffset:parseInt(p.getAttribute("yoffset"),10),xAdvance:parseInt(p.getAttribute("xadvance"),10),kerning:{}}}for(let g=0;g<c.length;g++){const p=parseInt(c[g].getAttribute("first"),10),v=parseInt(c[g].getAttribute("second"),10),b=parseInt(c[g].getAttribute("amount"),10);e.chars[u[v]].kerning[u[p]]=b}return e}},qa={test(t){return typeof t=="string"&&t.includes("<font>")?Fa.test(te.get().parseXML(t)):!1},parse(t){return Fa.parse(te.get().parseXML(t))}},yo=[".xml",".fnt"],xo={extension:{type:I.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof on,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},_o={extension:{type:I.LoadParser,priority:Qe.Normal},name:"loadBitmapFont",test(t){return yo.includes(Fe.extname(t).toLowerCase())},async testParse(t){return Ls.test(t)||qa.test(t)},async parse(t,e,s){const a=Ls.test(t)?Ls.parse(t):qa.parse(t),{src:n}=e,{pages:o}=a,i=[],c=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let v=0;v<o.length;++v){const b=o[v].file;let E=Fe.join(Fe.dirname(n),b);E=Kr(E,n),i.push({src:E,data:c})}const u=await s.load(i),g=i.map(v=>u[v.src]);return new on({data:a,textures:g},n)},async load(t,e){return await(await te.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class wo{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Ao={extension:{type:I.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Be),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((n,o)=>{s[a+(o===0?"":o+1)]=n})}),s}};async function ln(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const ko={extension:{type:I.DetectionParser,priority:1},test:async()=>ln("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},Ma=["png","jpg","jpeg"],Eo={extension:{type:I.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...Ma],remove:async t=>t.filter(e=>!Ma.includes(e))},So="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Bs(t){return So?!1:document.createElement("video").canPlayType(t)!==""}const To={extension:{type:I.DetectionParser,priority:0},test:async()=>Bs("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},Lo={extension:{type:I.DetectionParser,priority:0},test:async()=>Bs("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},Ro={extension:{type:I.DetectionParser,priority:0},test:async()=>Bs("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},Oo={extension:{type:I.DetectionParser,priority:0},test:async()=>ln("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class Po{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var i,c;let n=null,o=null;if(s.loadParser&&(o=this._parserHash[s.loadParser],o||Oe(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!o){for(let u=0;u<this.parsers.length;u++){const g=this.parsers[u];if(g.load&&((i=g.test)!=null&&i.call(g,e,s,this))){o=g;break}}if(!o)return Oe(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}n=await o.load(e,s,this),a.parser=o;for(let u=0;u<this.parsers.length;u++){const g=this.parsers[u];g.parse&&g.parse&&await((c=g.testParse)==null?void 0:c.call(g,n,s,this))&&(n=await g.parse(n,s,this)||n,a.parser=g)}return n})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const n={},o=Ya(e),i=pt(e,g=>({alias:[g],src:g,data:{}})),c=i.length,u=i.map(async g=>{const p=Fe.toAbsolute(g.src);if(!n[g.src])try{this.promiseCache[p]||(this.promiseCache[p]=this._getLoadPromiseAndParser(p,g)),n[g.src]=await this.promiseCache[p].promise,s&&s(++a/c)}catch(v){throw delete this.promiseCache[p],delete n[g.src],new Error(`[Loader.load] Failed to load ${p}.
${v}`)}});return await Promise.all(u),o?n[i[0].src]:n}async unload(e){const a=pt(e,n=>({alias:[n],src:n})).map(async n=>{var c,u;const o=Fe.toAbsolute(n.src),i=this.promiseCache[o];if(i){const g=await i.promise;delete this.promiseCache[o],await((u=(c=i.parser)==null?void 0:c.unload)==null?void 0:u.call(c,g,n,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&Oe(`[Assets] loadParser name conflict "${s.name}"`):Oe("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function Je(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const Io=".json",$o="application/json",Co={extension:{type:I.LoadParser,priority:Qe.Low},name:"loadJson",test(t){return Je(t,$o)||Ze(t,Io)},async load(t){return await(await te.get().fetch(t)).json()}},Bo=".txt",Fo="text/plain",qo={name:"loadTxt",extension:{type:I.LoadParser,priority:Qe.Low,name:"loadTxt"},test(t){return Je(t,Fo)||Ze(t,Bo)},async load(t){return await(await te.get().fetch(t)).text()}},Mo=["normal","bold","100","200","300","400","500","600","700","800","900"],Wo=[".ttf",".otf",".woff",".woff2"],No=["font/ttf","font/otf","font/woff","font/woff2"],jo=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function zo(t){const e=Fe.extname(t),n=Fe.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(c=>c.charAt(0).toUpperCase()+c.slice(1));let o=n.length>0;for(const c of n)if(!c.match(jo)){o=!1;break}let i=n.join(" ");return o||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const Do=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function Uo(t){return Do.test(t)?t:encodeURI(t)}const Go={extension:{type:I.LoadParser,priority:Qe.Low},name:"loadWebFont",test(t){return Je(t,No)||Ze(t,Wo)},async load(t,e){var a,n,o;const s=te.get().getFontFaceSet();if(s){const i=[],c=((a=e.data)==null?void 0:a.family)??zo(t),u=((o=(n=e.data)==null?void 0:n.weights)==null?void 0:o.filter(p=>Mo.includes(p)))??["normal"],g=e.data??{};for(let p=0;p<u.length;p++){const v=u[p],b=new FontFace(c,`url(${Uo(t)})`,{...g,weight:v});await b.load(),s.add(b),i.push(b)}return Ae.set(`${c}-and-url`,{url:t,fontFaces:i}),i.length===1?i[0]:i}return Oe("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{Ae.remove(`${e.family}-and-url`),te.get().getFontFaceSet().delete(e)})}};function Fs(t,e=1){var a;const s=(a=St.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function qs(t,e,s){t.label=s,t._sourceOrigin=s;const a=new Be({source:t,label:s}),n=()=>{delete e.promiseCache[s],Ae.has(s)&&Ae.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(Oe("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),n())}),a.once("destroy",()=>{t.destroyed||(Oe("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),n())}),a}const Ho=".svg",Vo="image/svg+xml",Yo={extension:{type:I.LoadParser,priority:Qe.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return Je(t,Vo)||Ze(t,Ho)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?Ko(t):Xo(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function Xo(t,e,s,a){var N,T,D;const o=await(await te.get().fetch(t)).blob(),i=URL.createObjectURL(o),c=new Image;c.src=i,c.crossOrigin=a,await c.decode(),URL.revokeObjectURL(i);const u=document.createElement("canvas"),g=u.getContext("2d"),p=((N=e.data)==null?void 0:N.resolution)||Fs(t),v=((T=e.data)==null?void 0:T.width)??c.width,b=((D=e.data)==null?void 0:D.height)??c.height;u.width=v*p,u.height=b*p,g.drawImage(c,0,0,v*p,b*p);const{parseAsGraphicsContext:E,...S}=e.data??{},Q=new Xa({resource:u,alphaMode:"premultiply-alpha-on-upload",resolution:p,...S});return qs(Q,s,t)}async function Ko(t){const s=await(await te.get().fetch(t)).text(),a=new to;return a.svg(s),a}const Qo=`(function () {
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
`;let Xe=null,$s=class{constructor(){Xe||(Xe=URL.createObjectURL(new Blob([Qo],{type:"application/javascript"}))),this.worker=new Worker(Xe)}};$s.revokeObjectURL=function(){Xe&&(URL.revokeObjectURL(Xe),Xe=null)};const Zo=`(function () {
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
`;let Ke=null;class cn{constructor(){Ke||(Ke=URL.createObjectURL(new Blob([Zo],{type:"application/javascript"}))),this.worker=new Worker(Ke)}}cn.revokeObjectURL=function(){Ke&&(URL.revokeObjectURL(Ke),Ke=null)};let Wa=0,Rs;class Jo{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new $s;s.addEventListener("message",a=>{s.terminate(),$s.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Rs===void 0&&(Rs=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Rs&&(this._createdWorkers++,e=new cn().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((n,o)=>{this._queue.push({id:e,arguments:s,resolve:n,reject:o})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[Wa]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:Wa++,id:a})}}const Na=new Jo,ei=[".jpeg",".jpg",".png",".webp",".avif"],ti=["image/jpeg","image/png","image/webp","image/avif"];async function si(t,e){var n;const s=await te.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((n=e==null?void 0:e.data)==null?void 0:n.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const dn={name:"loadTextures",extension:{type:I.LoadParser,priority:Qe.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return Je(t,ti)||Ze(t,ei)},async load(t,e,s){var o;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Na.isImageBitmapSupported()?a=await Na.loadImageBitmap(t,e):a=await si(t,e):a=await new Promise((i,c)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?i(a):(a.onload=()=>{i(a)},a.onerror=c)});const n=new Xa({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((o=e.data)==null?void 0:o.resolution)||Fs(t),...e.data});return qs(n,s,t)},unload(t){t.destroy(!0)}},pn=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],ai=pn.map(t=>`video/${t.substring(1)}`);function ni(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=oi(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function ri(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",n),t.load();function a(){o(),e()}function n(i){o(),s(i)}function o(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",n)}})}function oi(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const ii={name:"loadVideo",extension:{type:I.LoadParser,name:"loadVideo"},test(t){const e=Je(t,ai),s=Ze(t,pn);return e||s},async load(t,e,s){var u,g;const a={...ks.defaultOptions,resolution:((u=e.data)==null?void 0:u.resolution)||Fs(t),alphaMode:((g=e.data)==null?void 0:g.alphaMode)||await Qr(),...e.data},n=document.createElement("video"),o={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(o).forEach(p=>{const v=o[p];v!==void 0&&n.setAttribute(p,v)}),a.muted===!0&&(n.muted=!0),ni(n,t,a.crossorigin);const i=document.createElement("source");let c;if(t.startsWith("data:"))c=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const p=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();c=ks.MIME_TYPES[p]||`video/${p}`}return i.src=t,c&&(i.type=c),new Promise(p=>{const v=async()=>{const b=new ks({...a,resource:n});n.removeEventListener("canplay",v),e.data.preload&&await ri(n),p(qs(b,s,t))};n.addEventListener("canplay",v),n.appendChild(i)})},unload(t){t.destroy(!0)}},fn={extension:{type:I.ResolveParser,name:"resolveTexture"},test:dn.test,parse:t=>{var e;return{resolution:parseFloat(((e=St.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},li={extension:{type:I.ResolveParser,priority:-2,name:"resolveJson"},test:t=>St.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:fn.parse};class ci{constructor(){this._detections=[],this._initialized=!1,this.resolver=new St,this.loader=new Po,this.cache=Ae,this._backgroundLoader=new wo(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var o,i;if(this._initialized){Oe("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let c=e.manifest;typeof c=="string"&&(c=await this.load(c)),this.resolver.addManifest(c)}const s=((o=e.texturePreference)==null?void 0:o.resolution)??1,a=typeof s=="number"?[s]:s,n=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:n,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=Ya(e),n=pt(e).map(c=>{if(typeof c!="string"){const u=this.resolver.getAlias(c);return u.some(g=>!this.resolver.hasKey(g))&&this.add(c),Array.isArray(u)?u[0]:u}return this.resolver.hasKey(c)||this.add({alias:c,src:c}),c}),o=this.resolver.resolve(n),i=await this._mapLoadToResolve(o,s);return a?i[n[0]]:i}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const n=this.resolver.resolveBundle(e),o={},i=Object.keys(n);let c=0,u=0;const g=()=>{s==null||s(++c/u)},p=i.map(v=>{const b=n[v];return u+=Object.keys(b).length,this._mapLoadToResolve(b,g).then(E=>{o[v]=E})});return await Promise.all(p),a?o[e[0]]:o}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Ae.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=Ae.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const n=await this.loader.load(a,s);this._backgroundLoader.active=!0;const o={};return a.forEach(i=>{const c=n[i.src],u=[i.src];i.alias&&u.push(...i.alias),u.forEach(g=>{o[g]=c}),Ae.set(u,c)}),o}async unload(e){this._initialized||await this.init();const s=pt(e).map(n=>typeof n!="string"?n.src:n),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=pt(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(n=>this._unloadFromResolved(s[n]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{Ae.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,n)=>s.indexOf(a)===n),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const Ye=new ci;Pe.handleByList(I.LoadParser,Ye.loader.parsers).handleByList(I.ResolveParser,Ye.resolver.parsers).handleByList(I.CacheParser,Ye.cache.parsers).handleByList(I.DetectionParser,Ye.detections);Pe.add(Ao,Eo,ko,Oo,To,Lo,Ro,Co,qo,Go,Yo,dn,ii,_o,xo,fn,li);const ja={loader:I.LoadParser,resolver:I.ResolveParser,cache:I.CacheParser,detection:I.DetectionParser};Pe.handle(I.Asset,t=>{const e=t.ref;Object.entries(ja).filter(([s])=>!!e[s]).forEach(([s,a])=>Pe.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(ja).filter(s=>!!e[s]).forEach(s=>Pe.remove(e[s]))});class di extends Zr{constructor(e,s){const{text:a,resolution:n,style:o,anchor:i,width:c,height:u,roundPixels:g,...p}=e;super({...p}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=o,this.resolution=n??null,this.allowChildren=!1,this._anchor=new Jr({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=g??!1,c!==void 0&&(this.width=c),u!==void 0&&(this.height=u)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,n=-s*this.anchor.x;let o=0;return e.x>=n&&e.x<=n+s&&(o=-a*this.anchor.y,e.y>=o&&e.y<=o+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function pi(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(kt(Et,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class fi extends di{constructor(...e){const s=pi(e,"Text");super(s,Ka),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=so.measureText(this._text,this._style),{width:n,height:o}=a;e.minX=-s._x*n,e.maxX=e.minX+n,e.minY=-s._y*o,e.maxY=e.minY+o}}var ui=br('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-1t2q5b9"><\/script><!---->',1),hi=X('<p style="color: red;" class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Error:</strong> </p>'),gi=X('<div class="svelte-1t2q5b9"> </div>'),vi=X('<details class="svelte-1t2q5b9"><summary class="svelte-1t2q5b9"> </summary> <!></details>'),bi=X(`<div style="
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
  " class="svelte-1t2q5b9"><h3 class="svelte-1t2q5b9">🎰 Oma-peli Debug</h3> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Status:</strong> </p> <!> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Base:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">BG URL:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Sample:</strong> </p> <!></div>`),mi=X('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-1t2q5b9"> </div>'),yi=X('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-1t2q5b9"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-1t2q5b9"> </span></div>'),xi=X(`<div style="
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
  " class="svelte-1t2q5b9"><h2 style="margin: 0 0 10px 0; font-size: 2em;" class="svelte-1t2q5b9">🎉 VOITTO! 🎉</h2> <div style="font-size: 1.5em; font-weight: bold; margin: 10px 0;" class="svelte-1t2q5b9"> </div> <!> <!> <button style="
        margin-top: 15px;
        padding: 8px 16px;
        background: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
      " class="svelte-1t2q5b9">Jatka pelaamista</button></div>`),_i=X(`<div style="
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
  " class="svelte-1t2q5b9"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-1t2q5b9">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-1t2q5b9">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-1t2q5b9"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-1t2q5b9"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-1t2q5b9">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-1t2q5b9">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-1t2q5b9">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-1t2q5b9">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-1t2q5b9">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-1t2q5b9"> <span style="color: #ffd700;" class="svelte-1t2q5b9">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-1t2q5b9">Sulje</button></div>`),wi=X('<div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #ff00ff; font-size: 16px; animation: pulse 1s infinite;" class="svelte-1t2q5b9"><span class="svelte-1t2q5b9">🎰 FREE SPINS:</span> <span class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-top: 1px solid #555; padding-top: 8px;" class="svelte-1t2q5b9"><span style="color: #fff; font-size: 14px;" class="svelte-1t2q5b9">Total Won:</span> <span style="color: #00ff00; font-size: 14px;" class="svelte-1t2q5b9"> </span></div>',1),Ai=X(`<div style="
      background: rgba(255, 100, 100, 0.9);
      color: white;
      padding: 15px 20px;
      border-radius: 10px;
      border: 2px solid #ff0000;
      box-shadow: 0 4px 15px rgba(255, 0, 0, 0.5);
      text-align: center;
      animation: winPulse 1s infinite;
    " class="svelte-1t2q5b9"><div style="font-weight: bold; font-size: 16px; margin-bottom: 8px;" class="svelte-1t2q5b9">🔄 AUTOPLAY</div> <div style="font-size: 20px; font-family: 'Courier New', monospace; margin-bottom: 10px;" class="svelte-1t2q5b9"> </div> <button style="
          width: 100%;
          padding: 8px;
          background: #ffffff;
          color: #ff0000;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          font-size: 14px;
        " class="svelte-1t2q5b9">⏹ STOP</button></div>`),ki=X(`<div style="
        position: absolute;
        bottom: 60px;
        right: 0;
        background: rgba(0, 0, 0, 0.95);
        padding: 15px;
        border-radius: 10px;
        border: 2px solid #0088ff;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
        min-width: 180px;
      " class="svelte-1t2q5b9"><div style="color: white; font-weight: bold; margin-bottom: 10px; text-align: center;" class="svelte-1t2q5b9">Select Rounds:</div> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #44aa44;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-1t2q5b9">10 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #4488ff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-1t2q5b9">100 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #ff8844;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-1t2q5b9">1,000 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #ff4444;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-1t2q5b9">10,000 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            background: #aa00ff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-1t2q5b9">100,000 Rounds</button> <button style="
            width: 100%;
            padding: 6px;
            background: rgba(255, 255, 255, 0.1);
            color: #aaa;
            border: 1px solid #555;
            border-radius: 5px;
            cursor: pointer;
            font-size: 12px;
          " class="svelte-1t2q5b9">Cancel</button></div>`),Ei=X(`<button style="
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
      " class="svelte-1t2q5b9">🔄 AUTOPLAY</button> <!>`,1),Si=X(`<!> <!> <!> <div style="
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  " class="svelte-1t2q5b9"></div> <div class="svelte-1t2q5b9"><!> <div style="display: flex; justify-content: space-between; margin-bottom: 8px;" class="svelte-1t2q5b9"><span style="color: #fff;" class="svelte-1t2q5b9">CREDITS:</span> <span style="color: #ffd700;" class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; border-top: 1px solid #555; padding-top: 8px;" class="svelte-1t2q5b9"><span style="color: #fff;" class="svelte-1t2q5b9">BET:</span> <span style="color: #00ff00;" class="svelte-1t2q5b9"> </span></div></div> <div style="
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.85);
  padding: 15px;
  border-radius: 10px;
  border: 2px solid #00ff00;
  z-index: 1500;
" class="svelte-1t2q5b9"><div style="color: white; font-size: 14px; margin-bottom: 10px; text-align: center; font-weight: bold;" class="svelte-1t2q5b9">BET CONTROLS</div> <div style="display: flex; gap: 10px; align-items: center;" class="svelte-1t2q5b9"><button style="
        padding: 8px 15px;
        background: #ff4444;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: background 0.2s;
      " class="bet-btn-minus svelte-1t2q5b9">-</button> <div style="
      color: #00ff00;
      font-family: 'Courier New', monospace;
      font-size: 20px;
      font-weight: bold;
      min-width: 60px;
      text-align: center;
      background: rgba(0, 255, 0, 0.1);
      padding: 5px 10px;
      border-radius: 5px;
    " class="svelte-1t2q5b9"> </div> <button style="
        padding: 8px 15px;
        background: #44ff44;
        color: #000;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: background 0.2s;
      " class="bet-btn-plus svelte-1t2q5b9">+</button> <button style="
        padding: 8px 12px;
        background: #ffd700;
        color: #000;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        transition: background 0.2s;
      " class="bet-btn-max svelte-1t2q5b9">MAX</button></div></div> <button style="
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
  " class="svelte-1t2q5b9">💰 PAYTABLE</button> <div style="
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
" class="svelte-1t2q5b9"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-1t2q5b9">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-1t2q5b9"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Rounds:</span> <span style="color: #fff;" class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Wagered:</span> <span style="color: #ff6666;" class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Won:</span> <span style="color: #66ff66;" class="svelte-1t2q5b9"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 10px; 
    padding-top: 10px; 
    border-top: 1px solid #555;
    font-weight: bold;
    font-size: 18px;
  " class="svelte-1t2q5b9"><span style="color: #ffd700;" class="svelte-1t2q5b9">RTP:</span> <span class="svelte-1t2q5b9"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
  " class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Hit Freq:</span> <span class="svelte-1t2q5b9"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-size: 14px;
  " class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Free Spins Triggered:</span> <span style="color: #66ccff;" class="svelte-1t2q5b9"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 4px;
    font-size: 14px;
  " class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Free Spins Played:</span> <span style="color: #66ccff;" class="svelte-1t2q5b9"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #555;
    font-size: 14px;
  " class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Empty Slots:</span> <span style="color: #ff9900;" class="svelte-1t2q5b9"> </span></div> <button style="
      margin-top: 10px;
      width: 100%;
      padding: 5px;
      background: rgba(255, 100, 100, 0.3);
      color: #fff;
      border: 1px solid #ff6666;
      border-radius: 5px;
      cursor: pointer;
      font-size: 11px;
    " class="svelte-1t2q5b9">Reset Stats</button> <div style="
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  " class="svelte-1t2q5b9"><button class="svelte-1t2q5b9"> </button> <button class="svelte-1t2q5b9">Clear Win Log</button> <button class="svelte-1t2q5b9"> </button> <button class="svelte-1t2q5b9">🎰 Test Free Spins</button></div></div> <div style="
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1500;
" class="svelte-1t2q5b9"><!></div> <button class="svelte-1t2q5b9"> </button>  <div class="svelte-1t2q5b9"><img alt="Left End" class="svelte-1t2q5b9"> <div class="svelte-1t2q5b9"><div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-1t2q5b9"><div style="color: #00ff00; font-size: 12px; font-weight: bold;" class="svelte-1t2q5b9">BET</div> <div style="display: flex; gap: 5px; align-items: center;" class="svelte-1t2q5b9"><button title="Decrease Bet" class="svelte-1t2q5b9"></button> <div style="
          color: #fff;
          font-size: 18px;
          font-weight: bold;
          min-width: 80px;
          text-align: center;
          font-family: 'Courier New', monospace;
        " class="svelte-1t2q5b9"> </div> <button title="Increase Bet" class="svelte-1t2q5b9"></button></div></div> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-1t2q5b9"><div style="color: #00ff00; font-size: 12px; font-weight: bold;" class="svelte-1t2q5b9">BALANCE</div> <div style="
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      " class="svelte-1t2q5b9"> </div></div> <button title="SPIN" class="svelte-1t2q5b9"></button> <button title="Autoplay" class="svelte-1t2q5b9"></button> <button title="Fast Play" class="svelte-1t2q5b9"></button> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-1t2q5b9"><div style="color: #00ff00; font-size: 12px; font-weight: bold;" class="svelte-1t2q5b9">WIN</div> <div style="
        color: #ffd700;
        font-size: 20px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      " class="svelte-1t2q5b9"> </div></div> <button title="Menu" class="svelte-1t2q5b9"></button></div> <img alt="Right End" class="svelte-1t2q5b9"></div>`,1);function Ti(t,e){Ga(e,!0);const s=13,a=1445,n=1e3,o=1.75,i=-30,c=-10,u=160,g=0,p=750,v=120,b=250,E=0,S=0,Q=1,N=1,T=.8,D=50,pe=30,ke=-40,le=1,ft="height",ce=Math.round(100*o),Ee=Math.round(ce*(700/760)),un=Ee+10,Tt=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],Ws=typeof window<"u"&&window.location.hostname.includes("github.io"),K=Ws?"/web-sdk/oma-peli/symbols":`${_e}/symbols`,fe=Ws?"/web-sdk/oma-peli/controls":`${_e}/controls`,Lt={a:`${K}/Blue_hotrod.jpg`,b:`${K}/Blue_jacket.jpg`,c:`${K}/Blue_rollers.jpg`,d:`${K}/Blue_speakers.jpg`,e:`${K}/Premium_blonde.jpg`,f:`${K}/Premium_brunette.jpg`,g:`${K}/Premium_rocker.jpg`,h:`${K}/New_Wild.jpg`,i:`${K}/Red_burger.jpg`,j:`${K}/Red_fries.jpg`,k:`${K}/Red_milkshake.jpg`,l:`${K}/Scatter.jpg`,emptyslot:`${K}/Emptyslot.jpg`},Rt=`${K}/bg_base.jpg`,Ns=`${K}/ReelFrames.png`,js=`${K}/RockABillyReels_logo.png`,hn={spin:`${_e}/sounds/spin.mp3`,stop:`${_e}/sounds/stop.mp3`,win:`${_e}/sounds/win.mp3`},gn="1.1.0";let ue=C(!0),Ot={},he=null,Pt=null,It=null;const vn=60/130,bn=Math.round(vn*60);let ge=C(!0),mn=C(!1),$t=C(!1),Ct=C(945),Bt=null;const Ft={background:`${_e}/music/rockabilly-loop.mp3`,drumHit:`${_e}/music/drum-hit.mp3`,winTheme:`${_e}/music/win-stinger.mp3`};function zs(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(zs,500);return}const d=window.Howl;try{he=new d({src:[Ft.background],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded"),x(mn,!0)},onloaderror:(h,l)=>{console.warn("⚠️ Background music not found (generate with Suno AI):",l)}}),Pt=new d({src:[Ft.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),It=new d({src:[Ft.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(h){console.error("Failed to initialize music system:",h)}}function yn(){he&&r(ge)&&!he.playing()&&(he.play(),console.log("🎵 Background music started"))}function xn(){he&&he.playing()&&(he.fade(he.volume(),0,500),setTimeout(()=>he.stop(),500))}function _n(){x(ge,!r(ge)),r(ge)?yn():xn()}function wn(){Pt&&r(ge)&&r(ue)&&Pt.play()}function An(){It&&r(ge)&&r(ue)&&It.play()}let ht=null,qe=null,et=null,tt=null,st=C("Initializing..."),Me=C(""),ne=[],ve=C(1e3),Y=C(10);const Ds=1,qt=100;let re=C(!1),We=C(0),Ie=C(!1),kn=C(0),$e=!1,be=null,Mt=!1,Ne=C(0),je=C(0),at=C(0),Wt=C(0),Nt=ws(()=>r(je)>0?(r(at)/r(je)*100).toFixed(2):"0.00"),jt=ws(()=>r(Ne)>0?(r(Wt)/r(Ne)*100).toFixed(2):"0.00"),G=C(!1),me=C(0),Se=C(0),gt=C(0),zt=C(0),vt=C(0),Dt=C(0),En=ws(()=>r(vt)>0?(r(Dt)/r(vt)*100).toFixed(2):"0.00"),se=C(ie([]));function Sn(d,h,l){const w=new Date().toLocaleString("fi-FI");let _=`
${"=".repeat(60)}
`;_+=`ROUND #${d} - ${w}
`,_+=`Mode: ${r(G)?"FREE SPINS":"BASE GAME"}
`,_+=`${"=".repeat(60)}
`,h.forEach((A,L)=>{_+=`
Win ${L+1}:
`,_+=`  Symbol: ${A.symbol} (${Vs[A.symbol]})
`,_+=`  Count: ${A.count} symbols
`,_+=`  Multiplier: ${A.multiplier}x
`,_+=`  Payout: ${A.payout.toFixed(2)}
`,_+=`  Positions: [${A.positions.join(", ")}]
`}),_+=`
${"─".repeat(60)}
`,_+=`TOTAL WIN: ${l.toFixed(2)}
`,_+=`${"=".repeat(60)}
`,r(se).push(_)}function Tn(){const d=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${r(se).join(`
`)}`,h=new Blob([d],{type:"text/plain"}),l=URL.createObjectURL(h),w=document.createElement("a");w.href=l,w.download=`win-log-${Date.now()}.txt`,w.click(),URL.revokeObjectURL(l)}function Ln(){x(se,ie([]))}function Rn(){r(G)||(x(G,!0),x(me,10),x(Se,0),xe(gt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."))}const On={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},Pn={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function Us(d){if(d===6)return Math.random()<.55?"h":"emptyslot";const h=r(G)?Pn:On,l=Math.random();let w=0;const _=Tt.filter(L=>L!=="h"),A=_.reduce((L,j)=>L+h[j],0);for(const L of _)if(w+=h[L]/A,l<w)return L;return"f"}function Gs(){const d=[];for(let h=0;h<s;h++){const l=Us(h);d.push(l),xe(vt),l==="emptyslot"&&xe(Dt)}return d}function Hs(d){return d<3?{col:0,row:d}:d<6?{col:1,row:d-3}:d===6?{col:2,row:0}:d<10?{col:3,row:d-7}:{col:4,row:d-10}}function nt(d,h){return d===0?h:d===1?3+h:d===2?6:d===3?7+h:d===4?10+h:-1}function In(){if(r(G)){const d=Math.random();return d<.7?3:d<.92?5:10}else{const d=Math.random();return d<.7?1:d<.92?2:3}}const $n={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function Cn(){var J;const d=[],h=[];for(let k=0;k<s;k++)rt[k]==="l"&&h.push(k);if(h.length>=5){const k=h.length;x(me,r(me)+k),r(G)?console.log(`🎰 FREE SPINS RETRIGGERED! +${k} FREE SPINS! Total: ${r(me)}`):(x(G,!0),x(Se,0),xe(gt),console.log(`🎰 FREE SPINS TRIGGERED! ${h.length} scatters = ${k} FREE SPINS!`)),d.push({symbol:"l",count:h.length,payout:0,positions:h,multiplier:1})}const l=[];for(let k=0;k<3;k++)for(let R=0;R<3;R++)for(let O=0;O<1;O++)for(let P=0;P<3;P++)for(let M=0;M<3;M++){const q=[nt(0,k),nt(1,R),nt(2,O),nt(3,P),nt(4,M)];l.push(q)}console.log(`Generated ${l.length} possible paths (should be 81)`);const w=[];for(const k of l){const R=k.map(q=>rt[q]);if(R[0]==="emptyslot"||R[0]==="l")continue;let O=null;for(let q=0;q<R.length;q++)if(R[q]!=="h"&&R[q]!=="emptyslot"&&R[q]!=="l"){O=R[q];break}if(!O)continue;let P=0;const M=new Set;for(let q=0;q<k.length;q++){const Le=k[q],{col:Ve}=Hs(Le),ee=R[q];(ee===O||ee==="h")&&M.add(Ve)}for(let q=0;q<5&&M.has(q);q++)P++;if(P>=3){const Le=k[0]%3;w.push({symbol:O,length:P,path:k.slice(0,P),startRow:Le})}}const _=[],A=new Map;for(const k of w){const R=`${k.symbol}-${k.path.join(",")}`;A.has(R)||A.set(R,[]),A.get(R).push(k)}for(const[k,R]of A.entries()){const O=Math.max(...R.map(M=>M.length)),P=R.find(M=>M.length===O);P&&_.push(P)}const L=[],j=new Map;for(const k of _)j.has(k.symbol)||j.set(k.symbol,[]),j.get(k.symbol).push(k);const z=[];for(const[k,R]of j.entries()){const O=Math.max(...R.map(M=>M.length)),P=R.filter(M=>M.length===O);z.push(...P)}const H=new Map;for(const k of z){const R=`${k.symbol}-${k.length}`;H.has(R)||H.set(R,[]),H.get(R).push(k)}const $=z.length>0?In():1;for(const[k,R]of H.entries()){const O=R[0],P=(J=$n[O.symbol])==null?void 0:J[O.length];if(P!==void 0&&P>0){const M=new Map;for(const ee of R)for(let Z=0;Z<ee.length;Z++)M.has(Z)||M.set(Z,new Set),M.get(Z).add(ee.path[Z]);let q=1;for(let ee=0;ee<O.length;ee++){const Z=M.get(ee);q*=Z?Z.size:1}const Le=P*r(Y)*q*$;console.log(`  ${O.length}x${O.symbol}: ${q} ways × ${P}x × ${r(Y)} bet × ${$} mult = ${Le}`);const Ve=new Set;for(const ee of R)ee.path.forEach(Z=>Ve.add(Z));L.push({symbol:O.symbol,count:O.length,payout:Le,positions:Array.from(Ve),multiplier:$})}}return d.push(...L),d}let ye=C(0),ze=C(ie([])),Te=C(!1),De=C(!1);const Vs={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function Ut(d){if(!r(ue)||!Ot[d])return;const h=Ot[d];h.currentTime=0,h.play().catch(l=>{console.warn("Äänen toisto epäonnistui:",d,l)})}function Bn(d){ot.forEach(h=>U.stage.removeChild(h)),ot=[],d.forEach(h=>{h.positions.forEach(l=>{const w=Ue[l],_=new Es().rect(0,0,ce,Ee).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});_.x=w.container.x,_.y=w.container.y,U.stage.addChild(_),ot.push(_);let A=0,L=1;const j=.05;U.ticker.add(()=>{A+=L*j,A>=.4&&(L=-1),A<=0&&(L=1),_.alpha=.5+A})})})}function Gt(){ot.forEach(d=>U.stage.removeChild(d)),ot=[]}let rt=Gs(),Ht,U,Ue=[],ot=[];class Fn{constructor(h,l){oe(this,"index");oe(this,"container");oe(this,"offset",0);oe(this,"speed",0);oe(this,"targetSpeed",30);oe(this,"state","idle");oe(this,"stopDelay",0);oe(this,"bounceOffset",0);oe(this,"bounceSpeed",0);oe(this,"bounceFrames",0);this.index=h,this.container=l}start(h){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=h}startSynchronized(h){const l=60+h*bn;this.start(l)}update(){this.state!=="idle"&&(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"&&(this.speed*=.92,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,Ut("stop"),wn())),this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=un&&(this.offset=0,rt[this.index]=Us(this.index))))}draw(){const h=this.container;h.removeChildren();const l=rt[this.index];if(!l||!ht||!ht[l])return;const w=ht[l];if(!w)return;const _=this.offset+this.bounceOffset,A=new _t(w);A.width=ce,A.height=Ee,A.x=0,A.y=_,h.addChild(A)}}Ha(async()=>{U=new rn,await U.init({width:a,height:n,background:"#001a33"}),Ht.appendChild(U.canvas);const d={};try{x(st,"Loading background and UI images..."),ne.push(`Loading background: ${Rt}`),ne.push(`Loading reel frames: ${Ns}`),ne.push(`Loading logo: ${js}`),await Ye.load([{alias:"background",src:Rt},{alias:"reelframes",src:Ns},{alias:"logo",src:js}]),qe=Be.from("background"),et=Be.from("reelframes"),tt=Be.from("logo"),console.log("✅ Background texture created:",qe.width,"x",qe.height),console.log("✅ Reel frames texture created:",et.width,"x",et.height),console.log("✅ Logo texture created:",tt.width,"x",tt.height),ne.push("✅ All UI images loaded"),x(st,"Loading symbols...");const l=[];for(const w of Tt)l.push({alias:w,src:Lt[w]});await Ye.load(l);for(const w of Tt){const _=Lt[w];ne.push(`Loading symbol ${w}: ${_}`);try{const A=Be.from(w);d[w]=A,console.log(`✅ Symbol ${w} loaded:`,A.width,"x",A.height),ne.push(`✅ Symbol ${w} loaded`)}catch(A){const L=`❌ Failed to load symbol ${w} from ${_}: ${A}`;throw ne.push(L),console.error(L),new Error(L)}}ht=d,x(st,"Assets loaded successfully!")}catch(l){x(Me,`Asset loading failed: ${l}`),ne.push(r(Me)),console.error(r(Me));return}console.log("Ladataan ääniefektit...");for(const[l,w]of Object.entries(hn)){const _=new Audio;_.src=w,_.preload="auto",_.volume=.7,_.load(),_.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${w} (käytetään hiljaista placeholderia)`)}),Ot[l]=_}if(console.log("Taustakuva ladattu, tekstuuri:",qe),qe){const l=new _t(qe);U.renderer.width/U.renderer.height;const w=l.texture.width/l.texture.height;let _;_=U.renderer.height/l.texture.height,_*=le,l.scale.set(_),l.x=(U.renderer.width-l.width)/2,l.y=(U.renderer.height-l.height)/2+ke,U.stage.addChild(l),console.log("Taustakuva lisätty:",ft,"mode, size:",l.width.toFixed(0),"x",l.height.toFixed(0),"image aspect:",w.toFixed(2),"scale:",_.toFixed(2),"pos:",l.x.toFixed(0),l.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(l=>({x:l.x+i,y:l.y+c})),Ue=[];for(let l=0;l<s;l++){const w=Hs(l),_=w.col,A=w.row,L=300+_*(ce+20),j=250+A*(Ee+15),z=l===6?L+g:L,H=l===6?j+u:j,$=new Cs;$.x=z+i,$.y=H+c;const J=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],k=new Es().rect(0,0,ce,Ee).fill({color:J[l],alpha:.3});k.x=$.x,k.y=$.y,U.stage.addChild(k);const R=new Ka({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),O=new fi({text:l.toString(),style:R});O.x=$.x+5,O.y=$.y+5,U.stage.addChild(O);const P=new Es().rect(0,0,ce,Ee).fill(16777215);P.x=$.x,P.y=$.y,$.mask=P,U.stage.addChild(P),U.stage.addChild($),Ue.push(new Fn(l,$))}if(et){const l=new _t(et);l.scale.set(1),l.x=250,l.y=200,U.stage.addChild(l),Bt=l,x(Ct,ie(l.width)),console.log("Reel frames lisätty:",l.width.toFixed(0),"x",l.height.toFixed(0)),console.log("Control panel leveys päivitetty:",r(Ct).toFixed(0))}if(tt){const l=new _t(tt);l.scale.set(T),l.x=(U.renderer.width-l.width)/2+D,l.y=pe,U.stage.addChild(l),console.log("Logo lisätty päällimmäiseen layeriin:",l.width.toFixed(0),"x",l.height.toFixed(0))}zs(),U.ticker.add(qn)});function qn(){for(const d of Ue)d.update(),d.draw();if(!r(Te)&&!Mt&&Ue.every(d=>d.state==="stopped")){Mt=!0;const d=Cn();console.log(`Checking wins, found ${d.length} wins`),d.length>0?(x(ze,ie(d)),x(ye,ie(d.reduce((h,l)=>h+l.payout,0))),Sn(r(Ne),d,r(ye)),Mn(r(ye)),x(Te,!0),x(kn,ie(Date.now())),console.log(`🎉 VOITTO! ${r(ye)} pistettä! Uusi saldo: ${r(ve)}`),console.log(`isShowingWin set to: ${r(Te)}, totalWin: ${r(ye)}`),d.forEach(h=>{const l=h.multiplier?` (${h.multiplier}x multiplier)`:"";console.log(`${h.count}x ${h.symbol} = ${h.payout} pistettä${l}`)}),Bn(d),Ut("win"),r(re)&&!$e&&($e=!0,be=window.setTimeout(()=>{r(Te)&&r(re)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),x(Te,!1),Gt()),be=window.setTimeout(()=>{$e=!1,Yt()},200)},1500))):(console.log("No wins found this spin"),r(re)&&!$e&&($e=!0,be=window.setTimeout(()=>{$e=!1,Yt()},1e3))),r(G)&&r(me)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${r(Se)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${r(Se).toFixed(2)}`),x(G,!1),x(Se,0)},2e3))}}function Ys(){if(r(G)&&r(me)>0)xe(me,-1),xe(zt),console.log(`🎰 FREE SPIN! Remaining: ${r(me)}`);else if(!r(G)){if(r(ve)<r(Y)){alert(`Not enough credits! Balance: ${r(ve)}, Bet: ${r(Y)}`),Vt();return}x(ve,r(ve)-r(Y)),xe(Ne),x(je,r(je)+r(Y))}be!==null&&(clearTimeout(be),be=null),x(ze,ie([])),x(ye,0),x(Te,!1),Mt=!1,Gt(),rt=Gs(),Ue.forEach((d,h)=>{const l=Math.floor(h/3);d.startSynchronized(l)}),Ut("spin")}function Mn(d){x(ve,r(ve)+d),x(at,r(at)+d),r(G)&&x(Se,r(Se)+d),d>0&&(xe(Wt),d/r(Y)>=10&&An())}function Xs(){r(Y)<qt&&x(Y,ie(Math.min(r(Y)+1,qt)))}function Ks(){r(Y)>Ds&&x(Y,ie(Math.max(r(Y)-1,Ds)))}function Wn(){x(Y,qt)}function it(d){x(re,!0),x(We,ie(d)),x(Ie,!1),Yt()}function Vt(){x(re,!1),x(We,0),$e=!1,be!==null&&(clearTimeout(be),be=null)}function Yt(){if(!r(re)||r(We)<=0){Vt();return}console.log(`Autoplay: Starting spin ${r(We)} rounds left`),Ys(),xe(We,-1)}function Nn(){confirm("Reset all statistics?")&&(x(Ne,0),x(je,0),x(at,0),x(Wt,0),x(gt,0),x(zt,0),x(vt,0),x(Dt,0))}var Qs=Si();Gr(d=>{var h=ui();f(Ce(h)),V(d,h)});var Zs=Ce(Qs);{var jn=d=>{var h=bi(),l=f(m(h),2),w=f(m(l));y(l);var _=f(l,2);{var A=O=>{var P=hi(),M=f(m(P));y(P),de(()=>B(M,` ${r(Me)??""}`)),V(O,P)};ae(_,O=>{r(Me)&&O(A)})}var L=f(_,2),j=f(m(L));j.nodeValue=` ${_e??""}`,y(L);var z=f(L,2),H=f(m(z));H.nodeValue=` ${Rt??""}`,y(z);var $=f(z,2),J=f(m($));y($);var k=f($,2);{var R=O=>{var P=vi(),M=m(P),q=m(M);y(M);var Le=f(M,2);Ia(Le,17,()=>ne,Pa,(Ve,ee)=>{var Z=gi(),fr=m(Z,!0);y(Z),de(()=>B(fr,r(ee))),V(Ve,Z)}),y(P),de(()=>B(q,`Log (${ne.length??""})`)),V(O,P)};ae(k,O=>{ne.length>0&&O(R)})}y(h),de(()=>{B(w,` ${r(st)??""}`),B(J,` ${Lt.a??""}`)}),V(d,h)};ae(Zs,d=>{(r(st)!=="Assets loaded successfully!"||r(Me))&&d(jn)})}var Js=f(Zs,2);{var zn=d=>{var h=xi(),l=f(m(h),2),w=m(l);y(l);var _=f(l,2);Ia(_,17,()=>r(ze),Pa,(z,H)=>{var $=mi(),J=m($);y($),de(k=>B(J,`${r(H).count??""} × ${Vs[r(H).symbol]??""} = ${k??""} pistettä`),[()=>r(H).payout.toFixed(2)]),V(z,$)});var A=f(_,2);{var L=z=>{var H=yi(),$=m(H),J=m($);y($),y(H),de(()=>B(J,`✨ ${r(ze)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),V(z,H)};ae(A,z=>{r(ze).length>0&&r(ze)[0].multiplier>1&&z(L)})}var j=f(A,2);y(h),de(()=>B(w,`${r(ye)??""} pistettä`)),F("click",j,()=>{x(Te,!1),Gt(),console.log("Win popup closed, ready for next spin")}),V(d,h)};ae(Js,d=>{r(ye)>0&&r(Te)&&d(zn)})}var ea=f(Js,2);{var Dn=d=>{var h=_i(),l=f(m(h),8);y(h),F("click",l,()=>{x(De,!1)}),V(d,h)};ae(ea,d=>{r(De)&&d(Dn)})}var ta=f(ea,2);Hr(ta,d=>Ht=d,()=>Ht);var bt=f(ta,2),sa=m(bt);{var Un=d=>{var h=wi(),l=Ce(h),w=f(m(l),2),_=m(w,!0);y(w),y(l);var A=f(l,2),L=f(m(A),2),j=m(L,!0);y(L),y(A),de(z=>{B(_,r(me)),B(j,z)},[()=>r(Se).toFixed(2)]),V(d,h)};ae(sa,d=>{r(G)&&d(Un)})}var Xt=f(sa,2),aa=f(m(Xt),2),Gn=m(aa,!0);y(aa),y(Xt);var na=f(Xt,2),ra=f(m(na),2),Hn=m(ra,!0);y(ra),y(na),y(bt);var Kt=f(bt,2),oa=f(m(Kt),2),ia=m(oa),Qt=f(ia,2),Vn=m(Qt,!0);y(Qt);var la=f(Qt,2),Yn=f(la,2);y(oa),y(Kt);var ca=f(Kt,2),Zt=f(ca,2),da=f(m(Zt),2);da.textContent=`v${gn}`;var Jt=f(da,2),pa=f(m(Jt),2),Xn=m(pa,!0);y(pa),y(Jt);var es=f(Jt,2),fa=f(m(es),2),Kn=m(fa,!0);y(fa),y(es);var ts=f(es,2),ua=f(m(ts),2),Qn=m(ua,!0);y(ua),y(ts);var ss=f(ts,2),as=f(m(ss),2),Zn=m(as);y(as),y(ss);var ns=f(ss,2),rs=f(m(ns),2),Jn=m(rs);y(rs),y(ns);var os=f(ns,2),ha=f(m(os),2),er=m(ha,!0);y(ha),y(os);var is=f(os,2),ga=f(m(is),2),tr=m(ga,!0);y(ga),y(is);var ls=f(is,2),va=f(m(ls),2),sr=m(va);y(va),y(ls);var ba=f(ls,2),ma=f(ba,2),Ge=m(ma),ar=m(Ge);y(Ge);var mt=f(Ge,2),lt=f(mt,2),nr=m(lt);y(lt);var cs=f(lt,2);y(ma),y(Zt);var ds=f(Zt,2),rr=m(ds);{var or=d=>{var h=Ai(),l=f(m(h),2),w=m(l);y(l);var _=f(l,2);y(h),de(()=>B(w,`${r(We)??""} left`)),F("click",_,Vt),V(d,h)},ir=d=>{var h=Ei(),l=Ce(h),w=f(l,2);{var _=A=>{var L=ki(),j=f(m(L),2),z=f(j,2),H=f(z,2),$=f(H,2),J=f($,2),k=f(J,2);y(L),F("click",j,()=>it(10)),F("click",z,()=>it(100)),F("click",H,()=>it(1e3)),F("click",$,()=>it(1e4)),F("click",J,()=>it(1e5)),F("click",k,()=>{x(Ie,!1)}),V(A,L)};ae(w,A=>{r(Ie)&&A(_)})}F("click",l,()=>{x(Ie,!r(Ie))}),V(d,h)};ae(rr,d=>{r(re)?d(or):d(ir,!1)})}y(ds);var He=f(ds,2),lr=m(He,!0);y(He);var ps=f(He,2),fs=m(ps);W(fs,"src",`${fe??""}/Control_leftend.png`),W(fs,"style",`height: ${v*N}px; flex-shrink: 0;`);var yt=f(fs,2);W(yt,"style",`
    flex-grow: 1;
    height: ${v*N}px;
    background-image: url('${fe??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 20px;
  `);var us=m(yt),ya=f(m(us),2),hs=m(ya);W(hs,"style",`
            width: 40px;
            height: 40px;
            background-image: url('${fe??""}/Control_lowerbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `);var gs=f(hs,2),cr=m(gs,!0);y(gs);var xa=f(gs,2);W(xa,"style",`
            width: 40px;
            height: 40px;
            background-image: url('${fe??""}/Control_upperbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(ya),y(us);var vs=f(us,2),_a=f(m(vs),2),dr=m(_a,!0);y(_a),y(vs);var xt=f(vs,2),bs=f(xt,2),ms=f(bs,2),ys=f(ms,2),wa=f(m(ys),2),pr=m(wa,!0);y(wa),y(ys);var Aa=f(ys,2);W(Aa,"style",`
        width: 50px;
        height: 50px;
        background-image: url('${fe??""}/Control_menubar.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),y(yt);var ka=f(yt,2);W(ka,"src",`${fe??""}/Control_rightend.png`),W(ka,"style",`height: ${v*N}px; flex-shrink: 0;`),y(ps),de((d,h,l,w,_,A,L,j,z)=>{W(bt,"style",`
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
  border: 2px solid ${(r(G)?"#ff00ff":"#ffd700")??""};
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
  z-index: 1500;
  min-width: 180px;
`),B(Gn,d),B(Hn,r(Y)),B(Vn,r(Y)),B(Xn,h),B(Kn,l),B(Qn,w),W(as,"style",`color: ${_??""};`),B(Zn,`${r(Nt)??""}%`),W(rs,"style",`color: ${A??""};`),B(Jn,`${r(jt)??""}%`),B(er,r(gt)),B(tr,r(zt)),B(sr,`${r(En)??""}%`),Ge.disabled=r(se).length===0,W(Ge,"style",`
        width: 100%;
        padding: 5px;
        background: ${(r(se).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(r(se).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(r(se).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(r(se).length>0?"1":"0.5")??""};
      `),B(ar,`Download Win Log (${r(se).length??""})`),mt.disabled=r(se).length===0,W(mt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(r(se).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(r(se).length>0?"1":"0.5")??""};
      `),W(lt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(r(ge)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(r(ge)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),B(nr,`🎵 Music: ${(r(ge)?"ON":"OFF")??""}`),cs.disabled=r(G),W(cs,"style",`
        width: 100%;
        padding: 5px;
        background: ${(r(G)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(r(G)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(r(G)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(r(G)?"0.5":"1")??""};
      `),W(He,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(r(ue)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(r(ue)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),W(He,"title",r(ue)?"Mykistä äänet":"Laita äänet päälle"),B(lr,r(ue)?"🔊":"🔇"),W(ps,"style",`
  position: absolute;
  left: ${(Bt?Bt.x:b)+E}px;
  top: ${p+S}px;
  width: ${r(Ct)*Q}px;
  height: ${v*N}px;
  display: flex;
  align-items: center;
  z-index: 1000;
`),B(cr,L),B(dr,j),xt.disabled=r(re),W(xt,"style",`
        width: 80px;
        height: 80px;
        background-image: url('${fe??""}/Control_playbutton.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: ${(r(re)?"not-allowed":"pointer")??""};
        background-color: transparent;
        opacity: ${(r(re)?.5:1)??""};
      `),W(bs,"style",`
        width: 50px;
        height: 50px;
        background-image: url('${fe??""}/${(r(re)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),W(ms,"style",`
        width: 50px;
        height: 50px;
        background-image: url('${fe??""}/${(r($t)?"Control_fastplay_select.png":"Control_fastplay_deselect.png")??""}');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),B(pr,z)},[()=>r(ve).toLocaleString(),()=>r(Ne).toLocaleString(),()=>r(je).toLocaleString(),()=>r(at).toLocaleString(),()=>parseFloat(r(Nt))>=95?"#00ff00":parseFloat(r(Nt))>=85?"#ffff00":"#ff6666",()=>parseFloat(r(jt))>=30?"#00ff00":parseFloat(r(jt))>=20?"#ffff00":"#ff6666",()=>r(Y).toFixed(2),()=>r(ve).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>r(ye).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),F("click",ia,Ks),F("click",la,Xs),F("click",Yn,Wn),F("click",ca,()=>{x(De,!r(De))}),F("click",ba,Nn),F("click",Ge,Tn),F("click",mt,Ln),F("click",lt,_n),F("click",cs,Rn),F("click",He,()=>{x(ue,!r(ue))}),F("click",hs,Ks),F("click",xa,Xs),F("click",xt,Ys),F("click",bs,()=>{x(Ie,!r(Ie))}),F("click",ms,()=>{x($t,!r($t))}),F("click",Aa,()=>{x(De,!r(De))}),V(t,Qs),Va()}var Li=X('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),Ri=X('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function Oi(t,e){Ga(e,!1);let s=Vr(e,"isAuthenticated",12,!1),a=Os(""),n=Os(!1);const o="slot2024";function i(){r(a)===o?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(x(n,!0),x(a,""),setTimeout(()=>x(n,!1),3e3))}Ha(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),yr();var c=mr(),u=Ce(c);{var g=p=>{var v=Ri(),b=m(v),E=f(m(b),4),S=m(E);oo(S),Ur(2),y(E);var Q=f(E,2);{var N=T=>{var D=Li();V(T,D)};ae(Q,T=>{r(n)&&T(N)})}y(b),y(v),lo(S,()=>r(a),T=>x(a,T)),F("submit",E,co(i)),V(p,v)};ae(u,p=>{s()||p(g)})}V(t,c),Va()}var Pi=X('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),Ii=X("<!> <!>",1);function Gi(t){let e=Os(!1);var s=Ii(),a=Ce(s);Oi(a,{get isAuthenticated(){return r(e)},set isAuthenticated(i){x(e,i)},$$legacy:!0});var n=f(a,2);{var o=i=>{var c=Pi(),u=f(Ce(c),2);Ti(u,{}),V(i,c)};ae(n,i=>{r(e)&&i(o)})}V(t,s)}export{tn as A,Za as C,mo as R,uo as S,sn as V,Gi as _,fo as u};
