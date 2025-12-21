const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./rNKBEngf.js","./CfQEHKwl.js","./Db_meveG.js","./BdJg5JGx.js","./PpshkLFU.js","./C2GHuDhf.js","./CtZ46o6t.js","./BGdlwvhy.js"])))=>i.map(i=>d[i]);
var cn=Object.defineProperty;var dn=(t,e,s)=>e in t?cn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var le=(t,e,s)=>dn(t,typeof e!="symbol"?e+"":e,s);import{f as pn,l as fn,t as K,g as F,a as V,i as un,d as hn}from"./BJCaw-qO.js";import{i as gn}from"./CeejRTB0.js";import{R as _e,T as vn,Q as bn,i as n,w as mn,W as yn,X as wa,Y as Aa,Z as ys,a1 as ct,a9 as xn,_ as Wa,$ as ja,a0 as _n,ad as za,O as wn,z as An,I as ka,ar as xs,K as Ea,as as kn,at as En,au as Sn,ac as Tn,av as Ln,aw as Rn,ax as Pn,ay as In,a3 as On,az as $n,aA as Bn,N as Cn,aB as Fn,aC as qn,g as Mn,n as Wn,p as Na,ai as B,ah as Da,y as x,aD as ye,f as $e,s as f,c as m,r as y,t as de,k as _s,a as Ua,aE as jn,aF as Rs}from"./BdJg5JGx.js";import{_ as Sa,p as ce,i as ne}from"./Db_meveG.js";import{a as zn,s as C}from"./Df-H93ww.js";import{b as Nn,p as Dn}from"./dtG1_1a4.js";import{b as xe}from"./Bn4wGHts.js";import{e as Re,E as O,a as Un,C as $s,Q as At,V as kt,N as ws,D as ae,H as Gn,p as Be,a0 as Ke,a1 as Ce,a2 as Hn,w as Le,a3 as pt,a4 as Ga,a5 as Qe,a6 as we,a7 as Et,a8 as Ha,a9 as Vn,aa as As,ab as Yn,ac as Xn,y as xt}from"./CfQEHKwl.js";import{A as Kn,B as Ta,G as Qn,T as Va,a as Zn,b as ks}from"./PpshkLFU.js";function La(t,e){return e}function Jn(t,e,s,a){for(var r=[],o=e.length,i=0;i<o;i++)Sn(e[i].e,r,!0);var c=o>0&&r.length===0&&s!==null;if(c){var u=s.parentNode;Tn(u),u.append(s),a.clear(),Te(t,e[0].prev,e[o-1].next)}Ln(r,()=>{for(var g=0;g<o;g++){var p=e[g];c||(a.delete(p.k),Te(t,p.prev,p.next)),Rn(p.e,!c)}})}function Ra(t,e,s,a,r,o=null){var i=t,c={flags:e,items:new Map,first:null};_e&&vn();var u=null,g=!1,p=mn(()=>{var v=s();return wn(v)?v:v==null?[]:za(v)});bn(()=>{var v=n(p),b=v.length;if(g&&b===0)return;g=b===0;let E=!1;if(_e){var S=i.data===yn;S!==(b===0)&&(i=wa(),Aa(i),ys(!1),E=!0)}if(_e){for(var Q=null,U,T=0;T<b;T++){if(ct.nodeType===8&&ct.data===xn){i=ct,E=!0,ys(!1);break}var N=v[T],Ae=a(N,T);U=Ya(ct,c,Q,null,N,Ae,T,r,e,s),c.items.set(Ae,U),Q=U}b>0&&Aa(wa())}_e||eo(v,c,i,r,e,a,s),o!==null&&(b===0?u?Wa(u):u=ja(()=>o(i)):u!==null&&_n(u,()=>{u=null})),E&&ys(!0),n(p)}),_e&&(i=ct)}function eo(t,e,s,a,r,o,i){var c=t.length,u=e.items,g=e.first,p=g,v,b=null,E=[],S=[],Q,U,T,N;for(N=0;N<c;N+=1){if(Q=t[N],U=o(Q,N),T=u.get(U),T===void 0){var Ae=p?p.e.nodes_start:s;b=Ya(Ae,e,b,b===null?e.first:b.next,Q,U,N,a,r,i),u.set(U,b),E=[],S=[],p=b.next;continue}if(to(T,Q,N),(T.e.f&xs)!==0&&Wa(T.e),T!==p){if(v!==void 0&&v.has(T)){if(E.length<S.length){var ee=S[0],Z;b=ee.prev;var St=E[0],Je=E[E.length-1];for(Z=0;Z<E.length;Z+=1)Pa(E[Z],ee,s);for(Z=0;Z<S.length;Z+=1)v.delete(S[Z]);Te(e,St.prev,Je.next),Te(e,b,St),Te(e,Je,ee),p=ee,b=Je,N-=1,E=[],S=[]}else v.delete(T),Pa(T,p,s),Te(e,T.prev,T.next),Te(e,T,b===null?e.first:b.next),Te(e,b,T),b=T;continue}for(E=[],S=[];p!==null&&p.k!==U;)(p.e.f&xs)===0&&(v??(v=new Set)).add(p),S.push(p),p=p.next;if(p===null)continue;T=p}E.push(T),b=T,p=T.next}if(p!==null||v!==void 0){for(var Pe=v===void 0?[]:za(v);p!==null;)(p.e.f&xs)===0&&Pe.push(p),p=p.next;var ft=Pe.length;if(ft>0){var Y=null;Jn(e,Pe,Y,u)}}Ea.first=e.first&&e.first.e,Ea.last=b&&b.e}function to(t,e,s,a){En(t.v,e),t.i=s}function Ya(t,e,s,a,r,o,i,c,u,g){var p=(u&Pn)!==0,v=(u&In)===0,b=p?v?An(r):ka(r):r,E=(u&kn)===0?i:ka(i),S={i:E,v:b,k:o,a:null,e:null,prev:s,next:a};try{return S.e=ja(()=>c(t,b,E,g),_e),S.e.prev=s&&s.e,S.e.next=a&&a.e,s===null?e.first=S:(s.next=S,s.e.next=S.e),a!==null&&(a.prev=S,a.e.prev=S.e),S}finally{}}function Pa(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,r=e?e.e.nodes_start:s,o=t.e.nodes_start;o!==a;){var i=On(o);r.before(o),o=i}}function Te(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function so(t){if(_e){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;W(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var r=t.checked;W(t,"checked",null),t.checked=r}}};t.__on_r=s,$n(s),pn()}}function W(t,e,s,a){var r=t.__attributes??(t.__attributes={});_e&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Bn]=s),s==null?t.removeAttribute(e):typeof s!="string"&&ao(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var Ia=new Map;function ao(t){var e=Ia.get(t.nodeName);if(e)return e;Ia.set(t.nodeName,e=[]);for(var s,a=t,r=Element.prototype;r!==a;){s=Fn(a);for(var o in s)s[o].set&&e.push(o);a=Cn(a)}return e}function ro(t,e,s=e){var a=qn();fn(t,"input",r=>{var o=r?t.defaultValue:t.value;if(o=Es(t)?Ss(o):o,s(o),a&&o!==(o=e())){var i=t.selectionStart,c=t.selectionEnd;t.value=o??"",c!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(c,t.value.length))}}),(_e&&t.defaultValue!==t.value||Mn(e)==null&&t.value)&&s(Es(t)?Ss(t.value):t.value),Wn(()=>{var r=e();Es(t)&&r===Ss(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function Es(t){var e=t.type;return e==="number"||e==="range"}function Ss(t){return t===""?null:+t}function no(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const Ps=[];Re.handleByNamedList(O.Environment,Ps);async function oo(t){if(!t)for(let e=0;e<Ps.length;e++){const s=Ps[e];if(s.value.test()){await s.value.load();return}}}let dt;function io(){if(typeof dt=="boolean")return dt;try{dt=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{dt=!1}return dt}var Xa=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(Xa||{});class lo{constructor(e){this.items=[],this._name=e}emit(e,s,a,r,o,i,c,u){const{name:g,items:p}=this;for(let v=0,b=p.length;v<b;v++)p[v][g](e,s,a,r,o,i,c,u);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const co=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Ka=class Qa extends Un{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...co,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await oo(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...Qa.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof $s&&(a={container:a},s&&(At(kt,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const r=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=r?a.clearColor:ws.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const r=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==r&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Xa.ALL);const{clear:a,clearColor:r,target:o}=e;ws.shared.setValue(r??this.background.colorRgba),s.renderTarget.clear(o,a,ws.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new lo(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const r in this.runners)this.runners[r].add(a);return this}_addPipes(e,s){const a=s.reduce((r,o)=>(r[o.name]=o.value,r),{});e.forEach(r=>{const o=r.value,i=r.name,c=a[i];this.renderPipes[i]=new o(this,c?new c:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!io())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Ka.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Za=Ka,_t;function po(t){return _t!==void 0||(_t=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??Za.defaultOptions.failIfMajorPerformanceCaveat};try{if(!ae.get().getWebGLRenderingContext())return!1;let r=ae.get().createCanvas().getContext("webgl",e);const o=!!((s=r==null?void 0:r.getContextAttributes())!=null&&s.stencil);if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,o}catch{return!1}})()),_t}let wt;async function fo(t={}){return wt!==void 0||(wt=await(async()=>{const e=ae.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),wt}const Oa=["webgl","webgpu","canvas"];async function uo(t){let e=[];t.preference?(e.push(t.preference),Oa.forEach(o=>{o!==t.preference&&e.push(o)})):e=Oa.slice();let s,a={};for(let o=0;o<e.length;o++){const i=e[o];if(i==="webgpu"&&await fo()){const{WebGPURenderer:c}=await Sa(async()=>{const{WebGPURenderer:u}=await import("./rNKBEngf.js");return{WebGPURenderer:u}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=c,a={...t,...t.webgpu};break}else if(i==="webgl"&&po(t.failIfMajorPerformanceCaveat??Za.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:c}=await Sa(async()=>{const{WebGLRenderer:u}=await import("./BGdlwvhy.js");return{WebGLRenderer:u}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=c,a={...t,...t.webgl};break}else if(i==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const r=new s;return await r.init(a),r}const Ja="8.8.1";class er{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Ja)}static destroy(){}}er.extension=O.Application;class ho{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Ja)}destroy(){this._renderer=null}}ho.extension={type:[O.WebGLSystem,O.WebGPUSystem],name:"initHook",priority:-10};const tr=class Is{constructor(...e){this.stage=new $s,e[0]!==void 0&&At(kt,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await uo(e),Is._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return At(kt,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=Is._plugins.slice(0);a.reverse(),a.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};tr._plugins=[];let sr=tr;Re.handleByList(O.Application,sr._plugins);Re.add(er);class ar extends Kn{constructor(e,s){super();const{textures:a,data:r}=e;Object.keys(r.pages).forEach(o=>{const i=r.pages[parseInt(o,10)],c=a[i.id];this.pages.push({texture:c})}),Object.keys(r.chars).forEach(o=>{const i=r.chars[o],{frame:c,source:u}=a[i.page],g=new Gn(i.x+c.x,i.y+c.y,i.width,i.height),p=new Be({source:u,frame:g});this.chars[o]={id:o.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:p}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){Ta.install(e)}static uninstall(e){Ta.uninstall(e)}}const Ts={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const v in e){const b=e[v].match(/^[a-z]+/gm)[0],E=e[v].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),S={};for(const Q in E){const U=E[Q].split("="),T=U[0],N=U[1].replace(/"/gm,""),Ae=parseFloat(N),ee=isNaN(Ae)?N:Ae;S[T]=ee}s[b].push(S)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=s.info,[o]=s.common,[i]=s.distanceField??[];i&&(a.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),a.fontSize=parseInt(r.size,10),a.fontFamily=r.face,a.lineHeight=parseInt(o.lineHeight,10);const c=s.page;for(let v=0;v<c.length;v++)a.pages.push({id:parseInt(c[v].id,10)||0,file:c[v].file});const u={};a.baseLineOffset=a.lineHeight-parseInt(o.base,10);const g=s.char;for(let v=0;v<g.length;v++){const b=g[v],E=parseInt(b.id,10);let S=b.letter??b.char??String.fromCharCode(E);S==="space"&&(S=" "),u[E]=S,a.chars[S]={id:E,page:parseInt(b.page,10)||0,x:parseInt(b.x,10),y:parseInt(b.y,10),width:parseInt(b.width,10),height:parseInt(b.height,10),xOffset:parseInt(b.xoffset,10),yOffset:parseInt(b.yoffset,10),xAdvance:parseInt(b.xadvance,10),kerning:{}}}const p=s.kerning||[];for(let v=0;v<p.length;v++){const b=parseInt(p[v].first,10),E=parseInt(p[v].second,10),S=parseInt(p[v].amount,10);a.chars[u[E]].kerning[u[b]]=S}return a}},$a={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const o=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),c=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let g=0;g<o.length;g++)e.pages.push({id:parseInt(o[g].getAttribute("id"),10)||0,file:o[g].getAttribute("file")});const u={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let g=0;g<i.length;g++){const p=i[g],v=parseInt(p.getAttribute("id"),10);let b=p.getAttribute("letter")??p.getAttribute("char")??String.fromCharCode(v);b==="space"&&(b=" "),u[v]=b,e.chars[b]={id:v,page:parseInt(p.getAttribute("page"),10)||0,x:parseInt(p.getAttribute("x"),10),y:parseInt(p.getAttribute("y"),10),width:parseInt(p.getAttribute("width"),10),height:parseInt(p.getAttribute("height"),10),xOffset:parseInt(p.getAttribute("xoffset"),10),yOffset:parseInt(p.getAttribute("yoffset"),10),xAdvance:parseInt(p.getAttribute("xadvance"),10),kerning:{}}}for(let g=0;g<c.length;g++){const p=parseInt(c[g].getAttribute("first"),10),v=parseInt(c[g].getAttribute("second"),10),b=parseInt(c[g].getAttribute("amount"),10);e.chars[u[v]].kerning[u[p]]=b}return e}},Ba={test(t){return typeof t=="string"&&t.includes("<font>")?$a.test(ae.get().parseXML(t)):!1},parse(t){return $a.parse(ae.get().parseXML(t))}},go=[".xml",".fnt"],vo={extension:{type:O.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof ar,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},bo={extension:{type:O.LoadParser,priority:Ke.Normal},name:"loadBitmapFont",test(t){return go.includes(Ce.extname(t).toLowerCase())},async testParse(t){return Ts.test(t)||Ba.test(t)},async parse(t,e,s){const a=Ts.test(t)?Ts.parse(t):Ba.parse(t),{src:r}=e,{pages:o}=a,i=[],c=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let v=0;v<o.length;++v){const b=o[v].file;let E=Ce.join(Ce.dirname(r),b);E=Hn(E,r),i.push({src:E,data:c})}const u=await s.load(i),g=i.map(v=>u[v.src]);return new ar({data:a,textures:g},r)},async load(t,e){return await(await ae.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class mo{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const yo={extension:{type:O.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Be),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((r,o)=>{s[a+(o===0?"":o+1)]=r})}),s}};async function rr(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const xo={extension:{type:O.DetectionParser,priority:1},test:async()=>rr("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},Ca=["png","jpg","jpeg"],_o={extension:{type:O.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...Ca],remove:async t=>t.filter(e=>!Ca.includes(e))},wo="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Bs(t){return wo?!1:document.createElement("video").canPlayType(t)!==""}const Ao={extension:{type:O.DetectionParser,priority:0},test:async()=>Bs("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},ko={extension:{type:O.DetectionParser,priority:0},test:async()=>Bs("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},Eo={extension:{type:O.DetectionParser,priority:0},test:async()=>Bs("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},So={extension:{type:O.DetectionParser,priority:0},test:async()=>rr("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class To{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var i,c;let r=null,o=null;if(s.loadParser&&(o=this._parserHash[s.loadParser],o||Le(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!o){for(let u=0;u<this.parsers.length;u++){const g=this.parsers[u];if(g.load&&((i=g.test)!=null&&i.call(g,e,s,this))){o=g;break}}if(!o)return Le(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await o.load(e,s,this),a.parser=o;for(let u=0;u<this.parsers.length;u++){const g=this.parsers[u];g.parse&&g.parse&&await((c=g.testParse)==null?void 0:c.call(g,r,s,this))&&(r=await g.parse(r,s,this)||r,a.parser=g)}return r})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const r={},o=Ga(e),i=pt(e,g=>({alias:[g],src:g,data:{}})),c=i.length,u=i.map(async g=>{const p=Ce.toAbsolute(g.src);if(!r[g.src])try{this.promiseCache[p]||(this.promiseCache[p]=this._getLoadPromiseAndParser(p,g)),r[g.src]=await this.promiseCache[p].promise,s&&s(++a/c)}catch(v){throw delete this.promiseCache[p],delete r[g.src],new Error(`[Loader.load] Failed to load ${p}.
${v}`)}});return await Promise.all(u),o?r[i[0].src]:r}async unload(e){const a=pt(e,r=>({alias:[r],src:r})).map(async r=>{var c,u;const o=Ce.toAbsolute(r.src),i=this.promiseCache[o];if(i){const g=await i.promise;delete this.promiseCache[o],await((u=(c=i.parser)==null?void 0:c.unload)==null?void 0:u.call(c,g,r,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&Le(`[Assets] loadParser name conflict "${s.name}"`):Le("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function Ze(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const Lo=".json",Ro="application/json",Po={extension:{type:O.LoadParser,priority:Ke.Low},name:"loadJson",test(t){return Ze(t,Ro)||Qe(t,Lo)},async load(t){return await(await ae.get().fetch(t)).json()}},Io=".txt",Oo="text/plain",$o={name:"loadTxt",extension:{type:O.LoadParser,priority:Ke.Low,name:"loadTxt"},test(t){return Ze(t,Oo)||Qe(t,Io)},async load(t){return await(await ae.get().fetch(t)).text()}},Bo=["normal","bold","100","200","300","400","500","600","700","800","900"],Co=[".ttf",".otf",".woff",".woff2"],Fo=["font/ttf","font/otf","font/woff","font/woff2"],qo=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Mo(t){const e=Ce.extname(t),r=Ce.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(c=>c.charAt(0).toUpperCase()+c.slice(1));let o=r.length>0;for(const c of r)if(!c.match(qo)){o=!1;break}let i=r.join(" ");return o||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const Wo=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function jo(t){return Wo.test(t)?t:encodeURI(t)}const zo={extension:{type:O.LoadParser,priority:Ke.Low},name:"loadWebFont",test(t){return Ze(t,Fo)||Qe(t,Co)},async load(t,e){var a,r,o;const s=ae.get().getFontFaceSet();if(s){const i=[],c=((a=e.data)==null?void 0:a.family)??Mo(t),u=((o=(r=e.data)==null?void 0:r.weights)==null?void 0:o.filter(p=>Bo.includes(p)))??["normal"],g=e.data??{};for(let p=0;p<u.length;p++){const v=u[p],b=new FontFace(c,`url(${jo(t)})`,{...g,weight:v});await b.load(),s.add(b),i.push(b)}return we.set(`${c}-and-url`,{url:t,fontFaces:i}),i.length===1?i[0]:i}return Le("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{we.remove(`${e.family}-and-url`),ae.get().getFontFaceSet().delete(e)})}};function Cs(t,e=1){var a;const s=(a=Et.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function Fs(t,e,s){t.label=s,t._sourceOrigin=s;const a=new Be({source:t,label:s}),r=()=>{delete e.promiseCache[s],we.has(s)&&we.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(Le("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),a.once("destroy",()=>{t.destroyed||(Le("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),a}const No=".svg",Do="image/svg+xml",Uo={extension:{type:O.LoadParser,priority:Ke.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return Ze(t,Do)||Qe(t,No)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?Ho(t):Go(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function Go(t,e,s,a){var U,T,N;const o=await(await ae.get().fetch(t)).blob(),i=URL.createObjectURL(o),c=new Image;c.src=i,c.crossOrigin=a,await c.decode(),URL.revokeObjectURL(i);const u=document.createElement("canvas"),g=u.getContext("2d"),p=((U=e.data)==null?void 0:U.resolution)||Cs(t),v=((T=e.data)==null?void 0:T.width)??c.width,b=((N=e.data)==null?void 0:N.height)??c.height;u.width=v*p,u.height=b*p,g.drawImage(c,0,0,v*p,b*p);const{parseAsGraphicsContext:E,...S}=e.data??{},Q=new Ha({resource:u,alphaMode:"premultiply-alpha-on-upload",resolution:p,...S});return Fs(Q,s,t)}async function Ho(t){const s=await(await ae.get().fetch(t)).text(),a=new Qn;return a.svg(s),a}const Vo=`(function () {
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
`;let Ye=null,Os=class{constructor(){Ye||(Ye=URL.createObjectURL(new Blob([Vo],{type:"application/javascript"}))),this.worker=new Worker(Ye)}};Os.revokeObjectURL=function(){Ye&&(URL.revokeObjectURL(Ye),Ye=null)};const Yo=`(function () {
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
`;let Xe=null;class nr{constructor(){Xe||(Xe=URL.createObjectURL(new Blob([Yo],{type:"application/javascript"}))),this.worker=new Worker(Xe)}}nr.revokeObjectURL=function(){Xe&&(URL.revokeObjectURL(Xe),Xe=null)};let Fa=0,Ls;class Xo{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new Os;s.addEventListener("message",a=>{s.terminate(),Os.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Ls===void 0&&(Ls=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Ls&&(this._createdWorkers++,e=new nr().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((r,o)=>{this._queue.push({id:e,arguments:s,resolve:r,reject:o})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[Fa]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:Fa++,id:a})}}const qa=new Xo,Ko=[".jpeg",".jpg",".png",".webp",".avif"],Qo=["image/jpeg","image/png","image/webp","image/avif"];async function Zo(t,e){var r;const s=await ae.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const or={name:"loadTextures",extension:{type:O.LoadParser,priority:Ke.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return Ze(t,Qo)||Qe(t,Ko)},async load(t,e,s){var o;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await qa.isImageBitmapSupported()?a=await qa.loadImageBitmap(t,e):a=await Zo(t,e):a=await new Promise((i,c)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?i(a):(a.onload=()=>{i(a)},a.onerror=c)});const r=new Ha({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((o=e.data)==null?void 0:o.resolution)||Cs(t),...e.data});return Fs(r,s,t)},unload(t){t.destroy(!0)}},ir=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Jo=ir.map(t=>`video/${t.substring(1)}`);function ei(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=si(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function ti(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",r),t.load();function a(){o(),e()}function r(i){o(),s(i)}function o(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",r)}})}function si(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const ai={name:"loadVideo",extension:{type:O.LoadParser,name:"loadVideo"},test(t){const e=Ze(t,Jo),s=Qe(t,ir);return e||s},async load(t,e,s){var u,g;const a={...As.defaultOptions,resolution:((u=e.data)==null?void 0:u.resolution)||Cs(t),alphaMode:((g=e.data)==null?void 0:g.alphaMode)||await Vn(),...e.data},r=document.createElement("video"),o={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(o).forEach(p=>{const v=o[p];v!==void 0&&r.setAttribute(p,v)}),a.muted===!0&&(r.muted=!0),ei(r,t,a.crossorigin);const i=document.createElement("source");let c;if(t.startsWith("data:"))c=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const p=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();c=As.MIME_TYPES[p]||`video/${p}`}return i.src=t,c&&(i.type=c),new Promise(p=>{const v=async()=>{const b=new As({...a,resource:r});r.removeEventListener("canplay",v),e.data.preload&&await ti(r),p(Fs(b,s,t))};r.addEventListener("canplay",v),r.appendChild(i)})},unload(t){t.destroy(!0)}},lr={extension:{type:O.ResolveParser,name:"resolveTexture"},test:or.test,parse:t=>{var e;return{resolution:parseFloat(((e=Et.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},ri={extension:{type:O.ResolveParser,priority:-2,name:"resolveJson"},test:t=>Et.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:lr.parse};class ni{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Et,this.loader=new To,this.cache=we,this._backgroundLoader=new mo(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var o,i;if(this._initialized){Le("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let c=e.manifest;typeof c=="string"&&(c=await this.load(c)),this.resolver.addManifest(c)}const s=((o=e.texturePreference)==null?void 0:o.resolution)??1,a=typeof s=="number"?[s]:s,r=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=Ga(e),r=pt(e).map(c=>{if(typeof c!="string"){const u=this.resolver.getAlias(c);return u.some(g=>!this.resolver.hasKey(g))&&this.add(c),Array.isArray(u)?u[0]:u}return this.resolver.hasKey(c)||this.add({alias:c,src:c}),c}),o=this.resolver.resolve(r),i=await this._mapLoadToResolve(o,s);return a?i[r[0]]:i}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const r=this.resolver.resolveBundle(e),o={},i=Object.keys(r);let c=0,u=0;const g=()=>{s==null||s(++c/u)},p=i.map(v=>{const b=r[v];return u+=Object.keys(b).length,this._mapLoadToResolve(b,g).then(E=>{o[v]=E})});return await Promise.all(p),a?o[e[0]]:o}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return we.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=we.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(a,s);this._backgroundLoader.active=!0;const o={};return a.forEach(i=>{const c=r[i.src],u=[i.src];i.alias&&u.push(...i.alias),u.forEach(g=>{o[g]=c}),we.set(u,c)}),o}async unload(e){this._initialized||await this.init();const s=pt(e).map(r=>typeof r!="string"?r.src:r),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=pt(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(r=>this._unloadFromResolved(s[r]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{we.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,r)=>s.indexOf(a)===r),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const Ve=new ni;Re.handleByList(O.LoadParser,Ve.loader.parsers).handleByList(O.ResolveParser,Ve.resolver.parsers).handleByList(O.CacheParser,Ve.cache.parsers).handleByList(O.DetectionParser,Ve.detections);Re.add(yo,_o,xo,So,Ao,ko,Eo,Po,$o,zo,Uo,or,ai,bo,vo,lr,ri);const Ma={loader:O.LoadParser,resolver:O.ResolveParser,cache:O.CacheParser,detection:O.DetectionParser};Re.handle(O.Asset,t=>{const e=t.ref;Object.entries(Ma).filter(([s])=>!!e[s]).forEach(([s,a])=>Re.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(Ma).filter(s=>!!e[s]).forEach(s=>Re.remove(e[s]))});class oi extends Yn{constructor(e,s){const{text:a,resolution:r,style:o,anchor:i,width:c,height:u,roundPixels:g,...p}=e;super({...p}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=o,this.resolution=r??null,this.allowChildren=!1,this._anchor=new Xn({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=g??!1,c!==void 0&&(this.width=c),u!==void 0&&(this.height=u)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,r=-s*this.anchor.x;let o=0;return e.x>=r&&e.x<=r+s&&(o=-a*this.anchor.y,e.y>=o&&e.y<=o+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function ii(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(At(kt,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class li extends oi{constructor(...e){const s=ii(e,"Text");super(s,Va),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=Zn.measureText(this._text,this._style),{width:r,height:o}=a;e.minX=-s._x*r,e.maxX=e.minX+r,e.minY=-s._y*o,e.maxY=e.minY+o}}var ci=un('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-1t2q5b9"><\/script><!---->',1),di=K('<p style="color: red;" class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Error:</strong> </p>'),pi=K('<div class="svelte-1t2q5b9"> </div>'),fi=K('<details class="svelte-1t2q5b9"><summary class="svelte-1t2q5b9"> </summary> <!></details>'),ui=K(`<div style="
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
  " class="svelte-1t2q5b9"><h3 class="svelte-1t2q5b9">🎰 Oma-peli Debug</h3> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Status:</strong> </p> <!> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Base:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">BG URL:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Sample:</strong> </p> <!></div>`),hi=K('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-1t2q5b9"> </div>'),gi=K('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-1t2q5b9"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-1t2q5b9"> </span></div>'),vi=K(`<div style="
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
      " class="svelte-1t2q5b9">Jatka pelaamista</button></div>`),bi=K(`<div style="
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
      " class="svelte-1t2q5b9">Sulje</button></div>`),mi=K('<div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #ff00ff; font-size: 16px; animation: pulse 1s infinite;" class="svelte-1t2q5b9"><span class="svelte-1t2q5b9">🎰 FREE SPINS:</span> <span class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-top: 1px solid #555; padding-top: 8px;" class="svelte-1t2q5b9"><span style="color: #fff; font-size: 14px;" class="svelte-1t2q5b9">Total Won:</span> <span style="color: #00ff00; font-size: 14px;" class="svelte-1t2q5b9"> </span></div>',1),yi=K(`<div style="
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
        " class="svelte-1t2q5b9">⏹ STOP</button></div>`),xi=K(`<div style="
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
          " class="svelte-1t2q5b9">Cancel</button></div>`),_i=K(`<button style="
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
      " class="svelte-1t2q5b9">🔄 AUTOPLAY</button> <!>`,1),wi=K(`<!> <!> <!> <div style="
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
      " class="svelte-1t2q5b9"> </div></div> <button title="Menu" class="svelte-1t2q5b9"></button></div> <img alt="Right End" class="svelte-1t2q5b9"></div>`,1);function Ai(t,e){Na(e,!0);const s=13,a=1445,r=1e3,o=1.75,i=-30,c=-10,u=160,g=0,p=750,v=120,b=250,E=.8,S=50,Q=30,U=-40,T=1,N="height",ee=Math.round(100*o),Z=Math.round(ee*(700/760)),Je=Z+10,Pe=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],ft=typeof window<"u"&&window.location.hostname.includes("github.io"),Y=ft?"/web-sdk/oma-peli/symbols":`${xe}/symbols`,pe=ft?"/web-sdk/oma-peli/controls":`${xe}/controls`,Tt={a:`${Y}/Blue_hotrod.jpg`,b:`${Y}/Blue_jacket.jpg`,c:`${Y}/Blue_rollers.jpg`,d:`${Y}/Blue_speakers.jpg`,e:`${Y}/Premium_blonde.jpg`,f:`${Y}/Premium_brunette.jpg`,g:`${Y}/Premium_rocker.jpg`,h:`${Y}/New_Wild.jpg`,i:`${Y}/Red_burger.jpg`,j:`${Y}/Red_fries.jpg`,k:`${Y}/Red_milkshake.jpg`,l:`${Y}/Scatter.jpg`,emptyslot:`${Y}/Emptyslot.jpg`},Lt=`${Y}/bg_base.jpg`,qs=`${Y}/ReelFrames.png`,Ms=`${Y}/RockABillyReels_logo.png`,cr={spin:`${xe}/sounds/spin.mp3`,stop:`${xe}/sounds/stop.mp3`,win:`${xe}/sounds/win.mp3`},dr="1.1.0";let fe=B(!0),Rt={},ue=null,Pt=null,It=null;const pr=60/130,fr=Math.round(pr*60);let he=B(!0),ur=B(!1),Ot=B(!1),$t=B(945),Bt=null;const Ct={background:`${xe}/music/rockabilly-loop.mp3`,drumHit:`${xe}/music/drum-hit.mp3`,winTheme:`${xe}/music/win-stinger.mp3`};function Ws(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(Ws,500);return}const d=window.Howl;try{ue=new d({src:[Ct.background],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded"),x(ur,!0)},onloaderror:(h,l)=>{console.warn("⚠️ Background music not found (generate with Suno AI):",l)}}),Pt=new d({src:[Ct.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),It=new d({src:[Ct.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(h){console.error("Failed to initialize music system:",h)}}function hr(){ue&&n(he)&&!ue.playing()&&(ue.play(),console.log("🎵 Background music started"))}function gr(){ue&&ue.playing()&&(ue.fade(ue.volume(),0,500),setTimeout(()=>ue.stop(),500))}function vr(){x(he,!n(he)),n(he)?hr():gr()}function br(){Pt&&n(he)&&n(fe)&&Pt.play()}function mr(){It&&n(he)&&n(fe)&&It.play()}let ut=null,Fe=null,et=null,tt=null,st=B("Initializing..."),qe=B(""),oe=[],ge=B(1e3),X=B(10);const js=1,Ft=100;let ie=B(!1),Me=B(0),Ie=B(!1),yr=B(0),Oe=!1,ve=null,qt=!1,We=B(0),je=B(0),at=B(0),Mt=B(0),Wt=_s(()=>n(je)>0?(n(at)/n(je)*100).toFixed(2):"0.00"),jt=_s(()=>n(We)>0?(n(Mt)/n(We)*100).toFixed(2):"0.00"),G=B(!1),be=B(0),ke=B(0),ht=B(0),zt=B(0),gt=B(0),Nt=B(0),xr=_s(()=>n(gt)>0?(n(Nt)/n(gt)*100).toFixed(2):"0.00"),re=B(ce([]));function _r(d,h,l){const w=new Date().toLocaleString("fi-FI");let _=`
${"=".repeat(60)}
`;_+=`ROUND #${d} - ${w}
`,_+=`Mode: ${n(G)?"FREE SPINS":"BASE GAME"}
`,_+=`${"=".repeat(60)}
`,h.forEach((A,L)=>{_+=`
Win ${L+1}:
`,_+=`  Symbol: ${A.symbol} (${Us[A.symbol]})
`,_+=`  Count: ${A.count} symbols
`,_+=`  Multiplier: ${A.multiplier}x
`,_+=`  Payout: ${A.payout.toFixed(2)}
`,_+=`  Positions: [${A.positions.join(", ")}]
`}),_+=`
${"─".repeat(60)}
`,_+=`TOTAL WIN: ${l.toFixed(2)}
`,_+=`${"=".repeat(60)}
`,n(re).push(_)}function wr(){const d=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${n(re).join(`
`)}`,h=new Blob([d],{type:"text/plain"}),l=URL.createObjectURL(h),w=document.createElement("a");w.href=l,w.download=`win-log-${Date.now()}.txt`,w.click(),URL.revokeObjectURL(l)}function Ar(){x(re,ce([]))}function kr(){n(G)||(x(G,!0),x(be,10),x(ke,0),ye(ht),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."))}const Er={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},Sr={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function zs(d){if(d===6)return Math.random()<.55?"h":"emptyslot";const h=n(G)?Sr:Er,l=Math.random();let w=0;const _=Pe.filter(L=>L!=="h"),A=_.reduce((L,j)=>L+h[j],0);for(const L of _)if(w+=h[L]/A,l<w)return L;return"f"}function Ns(){const d=[];for(let h=0;h<s;h++){const l=zs(h);d.push(l),ye(gt),l==="emptyslot"&&ye(Nt)}return d}function Ds(d){return d<3?{col:0,row:d}:d<6?{col:1,row:d-3}:d===6?{col:2,row:0}:d<10?{col:3,row:d-7}:{col:4,row:d-10}}function rt(d,h){return d===0?h:d===1?3+h:d===2?6:d===3?7+h:d===4?10+h:-1}function Tr(){if(n(G)){const d=Math.random();return d<.7?3:d<.92?5:10}else{const d=Math.random();return d<.7?1:d<.92?2:3}}const Lr={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function Rr(){var te;const d=[],h=[];for(let k=0;k<s;k++)nt[k]==="l"&&h.push(k);if(h.length>=5){const k=h.length;x(be,n(be)+k),n(G)?console.log(`🎰 FREE SPINS RETRIGGERED! +${k} FREE SPINS! Total: ${n(be)}`):(x(G,!0),x(ke,0),ye(ht),console.log(`🎰 FREE SPINS TRIGGERED! ${h.length} scatters = ${k} FREE SPINS!`)),d.push({symbol:"l",count:h.length,payout:0,positions:h,multiplier:1})}const l=[];for(let k=0;k<3;k++)for(let R=0;R<3;R++)for(let P=0;P<1;P++)for(let I=0;I<3;I++)for(let M=0;M<3;M++){const q=[rt(0,k),rt(1,R),rt(2,P),rt(3,I),rt(4,M)];l.push(q)}console.log(`Generated ${l.length} possible paths (should be 81)`);const w=[];for(const k of l){const R=k.map(q=>nt[q]);if(R[0]==="emptyslot"||R[0]==="l")continue;let P=null;for(let q=0;q<R.length;q++)if(R[q]!=="h"&&R[q]!=="emptyslot"&&R[q]!=="l"){P=R[q];break}if(!P)continue;let I=0;const M=new Set;for(let q=0;q<k.length;q++){const Se=k[q],{col:He}=Ds(Se),se=R[q];(se===P||se==="h")&&M.add(He)}for(let q=0;q<5&&M.has(q);q++)I++;if(I>=3){const Se=k[0]%3;w.push({symbol:P,length:I,path:k.slice(0,I),startRow:Se})}}const _=[],A=new Map;for(const k of w){const R=`${k.symbol}-${k.path.join(",")}`;A.has(R)||A.set(R,[]),A.get(R).push(k)}for(const[k,R]of A.entries()){const P=Math.max(...R.map(M=>M.length)),I=R.find(M=>M.length===P);I&&_.push(I)}const L=[],j=new Map;for(const k of _)j.has(k.symbol)||j.set(k.symbol,[]),j.get(k.symbol).push(k);const z=[];for(const[k,R]of j.entries()){const P=Math.max(...R.map(M=>M.length)),I=R.filter(M=>M.length===P);z.push(...I)}const H=new Map;for(const k of z){const R=`${k.symbol}-${k.length}`;H.has(R)||H.set(R,[]),H.get(R).push(k)}const $=z.length>0?Tr():1;for(const[k,R]of H.entries()){const P=R[0],I=(te=Lr[P.symbol])==null?void 0:te[P.length];if(I!==void 0&&I>0){const M=new Map;for(const se of R)for(let J=0;J<se.length;J++)M.has(J)||M.set(J,new Set),M.get(J).add(se.path[J]);let q=1;for(let se=0;se<P.length;se++){const J=M.get(se);q*=J?J.size:1}const Se=I*n(X)*q*$;console.log(`  ${P.length}x${P.symbol}: ${q} ways × ${I}x × ${n(X)} bet × ${$} mult = ${Se}`);const He=new Set;for(const se of R)se.path.forEach(J=>He.add(J));L.push({symbol:P.symbol,count:P.length,payout:Se,positions:Array.from(He),multiplier:$})}}return d.push(...L),d}let me=B(0),ze=B(ce([])),Ee=B(!1),Ne=B(!1);const Us={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function Dt(d){if(!n(fe)||!Rt[d])return;const h=Rt[d];h.currentTime=0,h.play().catch(l=>{console.warn("Äänen toisto epäonnistui:",d,l)})}function Pr(d){ot.forEach(h=>D.stage.removeChild(h)),ot=[],d.forEach(h=>{h.positions.forEach(l=>{const w=De[l],_=new ks().rect(0,0,ee,Z).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});_.x=w.container.x,_.y=w.container.y,D.stage.addChild(_),ot.push(_);let A=0,L=1;const j=.05;D.ticker.add(()=>{A+=L*j,A>=.4&&(L=-1),A<=0&&(L=1),_.alpha=.5+A})})})}function Ut(){ot.forEach(d=>D.stage.removeChild(d)),ot=[]}let nt=Ns(),Gt,D,De=[],ot=[];class Ir{constructor(h,l){le(this,"index");le(this,"container");le(this,"offset",0);le(this,"speed",0);le(this,"targetSpeed",30);le(this,"state","idle");le(this,"stopDelay",0);le(this,"bounceOffset",0);le(this,"bounceSpeed",0);le(this,"bounceFrames",0);this.index=h,this.container=l}start(h){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=h}startSynchronized(h){const l=60+h*fr;this.start(l)}update(){this.state!=="idle"&&(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"&&(this.speed*=.92,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,Dt("stop"),br())),this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=Je&&(this.offset=0,nt[this.index]=zs(this.index))))}draw(){const h=this.container;h.removeChildren();const l=nt[this.index];if(!l||!ut||!ut[l])return;const w=ut[l];if(!w)return;const _=this.offset+this.bounceOffset,A=new xt(w);A.width=ee,A.height=Z,A.x=0,A.y=_,h.addChild(A)}}Da(async()=>{D=new sr,await D.init({width:a,height:r,background:"#001a33"}),Gt.appendChild(D.canvas);const d={};try{x(st,"Loading background and UI images..."),oe.push(`Loading background: ${Lt}`),oe.push(`Loading reel frames: ${qs}`),oe.push(`Loading logo: ${Ms}`),await Ve.load([{alias:"background",src:Lt},{alias:"reelframes",src:qs},{alias:"logo",src:Ms}]),Fe=Be.from("background"),et=Be.from("reelframes"),tt=Be.from("logo"),console.log("✅ Background texture created:",Fe.width,"x",Fe.height),console.log("✅ Reel frames texture created:",et.width,"x",et.height),console.log("✅ Logo texture created:",tt.width,"x",tt.height),oe.push("✅ All UI images loaded"),x(st,"Loading symbols...");const l=[];for(const w of Pe)l.push({alias:w,src:Tt[w]});await Ve.load(l);for(const w of Pe){const _=Tt[w];oe.push(`Loading symbol ${w}: ${_}`);try{const A=Be.from(w);d[w]=A,console.log(`✅ Symbol ${w} loaded:`,A.width,"x",A.height),oe.push(`✅ Symbol ${w} loaded`)}catch(A){const L=`❌ Failed to load symbol ${w} from ${_}: ${A}`;throw oe.push(L),console.error(L),new Error(L)}}ut=d,x(st,"Assets loaded successfully!")}catch(l){x(qe,`Asset loading failed: ${l}`),oe.push(n(qe)),console.error(n(qe));return}console.log("Ladataan ääniefektit...");for(const[l,w]of Object.entries(cr)){const _=new Audio;_.src=w,_.preload="auto",_.volume=.7,_.load(),_.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${w} (käytetään hiljaista placeholderia)`)}),Rt[l]=_}if(console.log("Taustakuva ladattu, tekstuuri:",Fe),Fe){const l=new xt(Fe);D.renderer.width/D.renderer.height;const w=l.texture.width/l.texture.height;let _;_=D.renderer.height/l.texture.height,_*=T,l.scale.set(_),l.x=(D.renderer.width-l.width)/2,l.y=(D.renderer.height-l.height)/2+U,D.stage.addChild(l),console.log("Taustakuva lisätty:",N,"mode, size:",l.width.toFixed(0),"x",l.height.toFixed(0),"image aspect:",w.toFixed(2),"scale:",_.toFixed(2),"pos:",l.x.toFixed(0),l.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(l=>({x:l.x+i,y:l.y+c})),De=[];for(let l=0;l<s;l++){const w=Ds(l),_=w.col,A=w.row,L=300+_*(ee+20),j=250+A*(Z+15),z=l===6?L+g:L,H=l===6?j+u:j,$=new $s;$.x=z+i,$.y=H+c;const te=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],k=new ks().rect(0,0,ee,Z).fill({color:te[l],alpha:.3});k.x=$.x,k.y=$.y,D.stage.addChild(k);const R=new Va({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),P=new li({text:l.toString(),style:R});P.x=$.x+5,P.y=$.y+5,D.stage.addChild(P);const I=new ks().rect(0,0,ee,Z).fill(16777215);I.x=$.x,I.y=$.y,$.mask=I,D.stage.addChild(I),D.stage.addChild($),De.push(new Ir(l,$))}if(et){const l=new xt(et);l.scale.set(1),l.x=250,l.y=200,D.stage.addChild(l),Bt=l,x($t,ce(l.width)),console.log("Reel frames lisätty:",l.width.toFixed(0),"x",l.height.toFixed(0)),console.log("Control panel leveys päivitetty:",n($t).toFixed(0))}if(tt){const l=new xt(tt);l.scale.set(E),l.x=(D.renderer.width-l.width)/2+S,l.y=Q,D.stage.addChild(l),console.log("Logo lisätty päällimmäiseen layeriin:",l.width.toFixed(0),"x",l.height.toFixed(0))}Ws(),D.ticker.add(Or)});function Or(){for(const d of De)d.update(),d.draw();if(!n(Ee)&&!qt&&De.every(d=>d.state==="stopped")){qt=!0;const d=Rr();console.log(`Checking wins, found ${d.length} wins`),d.length>0?(x(ze,ce(d)),x(me,ce(d.reduce((h,l)=>h+l.payout,0))),_r(n(We),d,n(me)),$r(n(me)),x(Ee,!0),x(yr,ce(Date.now())),console.log(`🎉 VOITTO! ${n(me)} pistettä! Uusi saldo: ${n(ge)}`),console.log(`isShowingWin set to: ${n(Ee)}, totalWin: ${n(me)}`),d.forEach(h=>{const l=h.multiplier?` (${h.multiplier}x multiplier)`:"";console.log(`${h.count}x ${h.symbol} = ${h.payout} pistettä${l}`)}),Pr(d),Dt("win"),n(ie)&&!Oe&&(Oe=!0,ve=window.setTimeout(()=>{n(Ee)&&n(ie)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),x(Ee,!1),Ut()),ve=window.setTimeout(()=>{Oe=!1,Vt()},200)},1500))):(console.log("No wins found this spin"),n(ie)&&!Oe&&(Oe=!0,ve=window.setTimeout(()=>{Oe=!1,Vt()},1e3))),n(G)&&n(be)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${n(ke)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${n(ke).toFixed(2)}`),x(G,!1),x(ke,0)},2e3))}}function Gs(){if(n(G)&&n(be)>0)ye(be,-1),ye(zt),console.log(`🎰 FREE SPIN! Remaining: ${n(be)}`);else if(!n(G)){if(n(ge)<n(X)){alert(`Not enough credits! Balance: ${n(ge)}, Bet: ${n(X)}`),Ht();return}x(ge,n(ge)-n(X)),ye(We),x(je,n(je)+n(X))}ve!==null&&(clearTimeout(ve),ve=null),x(ze,ce([])),x(me,0),x(Ee,!1),qt=!1,Ut(),nt=Ns(),De.forEach((d,h)=>{const l=Math.floor(h/3);d.startSynchronized(l)}),Dt("spin")}function $r(d){x(ge,n(ge)+d),x(at,n(at)+d),n(G)&&x(ke,n(ke)+d),d>0&&(ye(Mt),d/n(X)>=10&&mr())}function Hs(){n(X)<Ft&&x(X,ce(Math.min(n(X)+1,Ft)))}function Vs(){n(X)>js&&x(X,ce(Math.max(n(X)-1,js)))}function Br(){x(X,Ft)}function it(d){x(ie,!0),x(Me,ce(d)),x(Ie,!1),Vt()}function Ht(){x(ie,!1),x(Me,0),Oe=!1,ve!==null&&(clearTimeout(ve),ve=null)}function Vt(){if(!n(ie)||n(Me)<=0){Ht();return}console.log(`Autoplay: Starting spin ${n(Me)} rounds left`),Gs(),ye(Me,-1)}function Cr(){confirm("Reset all statistics?")&&(x(We,0),x(je,0),x(at,0),x(Mt,0),x(ht,0),x(zt,0),x(gt,0),x(Nt,0))}var Ys=wi();zn(d=>{var h=ci();f($e(h)),V(d,h)});var Xs=$e(Ys);{var Fr=d=>{var h=ui(),l=f(m(h),2),w=f(m(l));y(l);var _=f(l,2);{var A=P=>{var I=di(),M=f(m(I));y(I),de(()=>C(M,` ${n(qe)??""}`)),V(P,I)};ne(_,P=>{n(qe)&&P(A)})}var L=f(_,2),j=f(m(L));j.nodeValue=` ${xe??""}`,y(L);var z=f(L,2),H=f(m(z));H.nodeValue=` ${Lt??""}`,y(z);var $=f(z,2),te=f(m($));y($);var k=f($,2);{var R=P=>{var I=fi(),M=m(I),q=m(M);y(M);var Se=f(M,2);Ra(Se,17,()=>oe,La,(He,se)=>{var J=pi(),ln=m(J,!0);y(J),de(()=>C(ln,n(se))),V(He,J)}),y(I),de(()=>C(q,`Log (${oe.length??""})`)),V(P,I)};ne(k,P=>{oe.length>0&&P(R)})}y(h),de(()=>{C(w,` ${n(st)??""}`),C(te,` ${Tt.a??""}`)}),V(d,h)};ne(Xs,d=>{(n(st)!=="Assets loaded successfully!"||n(qe))&&d(Fr)})}var Ks=f(Xs,2);{var qr=d=>{var h=vi(),l=f(m(h),2),w=m(l);y(l);var _=f(l,2);Ra(_,17,()=>n(ze),La,(z,H)=>{var $=hi(),te=m($);y($),de(k=>C(te,`${n(H).count??""} × ${Us[n(H).symbol]??""} = ${k??""} pistettä`),[()=>n(H).payout.toFixed(2)]),V(z,$)});var A=f(_,2);{var L=z=>{var H=gi(),$=m(H),te=m($);y($),y(H),de(()=>C(te,`✨ ${n(ze)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),V(z,H)};ne(A,z=>{n(ze).length>0&&n(ze)[0].multiplier>1&&z(L)})}var j=f(A,2);y(h),de(()=>C(w,`${n(me)??""} pistettä`)),F("click",j,()=>{x(Ee,!1),Ut(),console.log("Win popup closed, ready for next spin")}),V(d,h)};ne(Ks,d=>{n(me)>0&&n(Ee)&&d(qr)})}var Qs=f(Ks,2);{var Mr=d=>{var h=bi(),l=f(m(h),8);y(h),F("click",l,()=>{x(Ne,!1)}),V(d,h)};ne(Qs,d=>{n(Ne)&&d(Mr)})}var Zs=f(Qs,2);Nn(Zs,d=>Gt=d,()=>Gt);var vt=f(Zs,2),Js=m(vt);{var Wr=d=>{var h=mi(),l=$e(h),w=f(m(l),2),_=m(w,!0);y(w),y(l);var A=f(l,2),L=f(m(A),2),j=m(L,!0);y(L),y(A),de(z=>{C(_,n(be)),C(j,z)},[()=>n(ke).toFixed(2)]),V(d,h)};ne(Js,d=>{n(G)&&d(Wr)})}var Yt=f(Js,2),ea=f(m(Yt),2),jr=m(ea,!0);y(ea),y(Yt);var ta=f(Yt,2),sa=f(m(ta),2),zr=m(sa,!0);y(sa),y(ta),y(vt);var Xt=f(vt,2),aa=f(m(Xt),2),ra=m(aa),Kt=f(ra,2),Nr=m(Kt,!0);y(Kt);var na=f(Kt,2),Dr=f(na,2);y(aa),y(Xt);var oa=f(Xt,2),Qt=f(oa,2),ia=f(m(Qt),2);ia.textContent=`v${dr}`;var Zt=f(ia,2),la=f(m(Zt),2),Ur=m(la,!0);y(la),y(Zt);var Jt=f(Zt,2),ca=f(m(Jt),2),Gr=m(ca,!0);y(ca),y(Jt);var es=f(Jt,2),da=f(m(es),2),Hr=m(da,!0);y(da),y(es);var ts=f(es,2),ss=f(m(ts),2),Vr=m(ss);y(ss),y(ts);var as=f(ts,2),rs=f(m(as),2),Yr=m(rs);y(rs),y(as);var ns=f(as,2),pa=f(m(ns),2),Xr=m(pa,!0);y(pa),y(ns);var os=f(ns,2),fa=f(m(os),2),Kr=m(fa,!0);y(fa),y(os);var is=f(os,2),ua=f(m(is),2),Qr=m(ua);y(ua),y(is);var ha=f(is,2),ga=f(ha,2),Ue=m(ga),Zr=m(Ue);y(Ue);var bt=f(Ue,2),lt=f(bt,2),Jr=m(lt);y(lt);var ls=f(lt,2);y(ga),y(Qt);var cs=f(Qt,2),en=m(cs);{var tn=d=>{var h=yi(),l=f(m(h),2),w=m(l);y(l);var _=f(l,2);y(h),de(()=>C(w,`${n(Me)??""} left`)),F("click",_,Ht),V(d,h)},sn=d=>{var h=_i(),l=$e(h),w=f(l,2);{var _=A=>{var L=xi(),j=f(m(L),2),z=f(j,2),H=f(z,2),$=f(H,2),te=f($,2),k=f(te,2);y(L),F("click",j,()=>it(10)),F("click",z,()=>it(100)),F("click",H,()=>it(1e3)),F("click",$,()=>it(1e4)),F("click",te,()=>it(1e5)),F("click",k,()=>{x(Ie,!1)}),V(A,L)};ne(w,A=>{n(Ie)&&A(_)})}F("click",l,()=>{x(Ie,!n(Ie))}),V(d,h)};ne(en,d=>{n(ie)?d(tn):d(sn,!1)})}y(cs);var Ge=f(cs,2),an=m(Ge,!0);y(Ge);var ds=f(Ge,2),ps=m(ds);W(ps,"src",`${pe??""}/Control_leftend.png`),W(ps,"style",`height: ${v}px; flex-shrink: 0;`);var mt=f(ps,2);W(mt,"style",`
    flex-grow: 1;
    height: ${v}px;
    background-image: url('${pe??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 20px;
  `);var fs=m(mt),va=f(m(fs),2),us=m(va);W(us,"style",`
            width: 40px;
            height: 40px;
            background-image: url('${pe??""}/Control_lowerbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `);var hs=f(us,2),rn=m(hs,!0);y(hs);var ba=f(hs,2);W(ba,"style",`
            width: 40px;
            height: 40px;
            background-image: url('${pe??""}/Control_upperbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(va),y(fs);var gs=f(fs,2),ma=f(m(gs),2),nn=m(ma,!0);y(ma),y(gs);var yt=f(gs,2),vs=f(yt,2),bs=f(vs,2),ms=f(bs,2),ya=f(m(ms),2),on=m(ya,!0);y(ya),y(ms);var xa=f(ms,2);W(xa,"style",`
        width: 50px;
        height: 50px;
        background-image: url('${pe??""}/Control_menubar.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),y(mt);var _a=f(mt,2);W(_a,"src",`${pe??""}/Control_rightend.png`),W(_a,"style",`height: ${v}px; flex-shrink: 0;`),y(ds),de((d,h,l,w,_,A,L,j,z)=>{W(vt,"style",`
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
  border: 2px solid ${(n(G)?"#ff00ff":"#ffd700")??""};
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
  z-index: 1500;
  min-width: 180px;
`),C(jr,d),C(zr,n(X)),C(Nr,n(X)),C(Ur,h),C(Gr,l),C(Hr,w),W(ss,"style",`color: ${_??""};`),C(Vr,`${n(Wt)??""}%`),W(rs,"style",`color: ${A??""};`),C(Yr,`${n(jt)??""}%`),C(Xr,n(ht)),C(Kr,n(zt)),C(Qr,`${n(xr)??""}%`),Ue.disabled=n(re).length===0,W(Ue,"style",`
        width: 100%;
        padding: 5px;
        background: ${(n(re).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(n(re).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(n(re).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(n(re).length>0?"1":"0.5")??""};
      `),C(Zr,`Download Win Log (${n(re).length??""})`),bt.disabled=n(re).length===0,W(bt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(n(re).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(n(re).length>0?"1":"0.5")??""};
      `),W(lt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(n(he)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(n(he)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),C(Jr,`🎵 Music: ${(n(he)?"ON":"OFF")??""}`),ls.disabled=n(G),W(ls,"style",`
        width: 100%;
        padding: 5px;
        background: ${(n(G)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(n(G)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(n(G)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(n(G)?"0.5":"1")??""};
      `),W(Ge,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(n(fe)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(n(fe)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),W(Ge,"title",n(fe)?"Mykistä äänet":"Laita äänet päälle"),C(an,n(fe)?"🔊":"🔇"),W(ds,"style",`
  position: absolute;
  left: ${(Bt?Bt.x:b)??""}px;
  top: ${p}px;
  width: ${n($t)??""}px;
  height: ${v}px;
  display: flex;
  align-items: center;
  z-index: 1000;
`),C(rn,L),C(nn,j),yt.disabled=n(ie),W(yt,"style",`
        width: 80px;
        height: 80px;
        background-image: url('${pe??""}/Control_playbutton.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: ${(n(ie)?"not-allowed":"pointer")??""};
        background-color: transparent;
        opacity: ${(n(ie)?.5:1)??""};
      `),W(vs,"style",`
        width: 50px;
        height: 50px;
        background-image: url('${pe??""}/${(n(ie)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),W(bs,"style",`
        width: 50px;
        height: 50px;
        background-image: url('${pe??""}/${(n(Ot)?"Control_fastplay_select.png":"Control_fastplay_deselect.png")??""}');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),C(on,z)},[()=>n(ge).toLocaleString(),()=>n(We).toLocaleString(),()=>n(je).toLocaleString(),()=>n(at).toLocaleString(),()=>parseFloat(n(Wt))>=95?"#00ff00":parseFloat(n(Wt))>=85?"#ffff00":"#ff6666",()=>parseFloat(n(jt))>=30?"#00ff00":parseFloat(n(jt))>=20?"#ffff00":"#ff6666",()=>n(X).toFixed(2),()=>n(ge).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>n(me).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),F("click",ra,Vs),F("click",na,Hs),F("click",Dr,Br),F("click",oa,()=>{x(Ne,!n(Ne))}),F("click",ha,Cr),F("click",Ue,wr),F("click",bt,Ar),F("click",lt,vr),F("click",ls,kr),F("click",Ge,()=>{x(fe,!n(fe))}),F("click",us,Vs),F("click",ba,Hs),F("click",yt,Gs),F("click",vs,()=>{x(Ie,!n(Ie))}),F("click",bs,()=>{x(Ot,!n(Ot))}),F("click",xa,()=>{x(Ne,!n(Ne))}),V(t,Ys),Ua()}var ki=K('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),Ei=K('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function Si(t,e){Na(e,!1);let s=Dn(e,"isAuthenticated",12,!1),a=Rs(""),r=Rs(!1);const o="slot2024";function i(){n(a)===o?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(x(r,!0),x(a,""),setTimeout(()=>x(r,!1),3e3))}Da(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),gn();var c=hn(),u=$e(c);{var g=p=>{var v=Ei(),b=m(v),E=f(m(b),4),S=m(E);so(S),jn(2),y(E);var Q=f(E,2);{var U=T=>{var N=ki();V(T,N)};ne(Q,T=>{n(r)&&T(U)})}y(b),y(v),ro(S,()=>n(a),T=>x(a,T)),F("submit",E,no(i)),V(p,v)};ne(u,p=>{s()||p(g)})}V(t,c),Ua()}var Ti=K('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),Li=K("<!> <!>",1);function zi(t){let e=Rs(!1);var s=Li(),a=$e(s);Si(a,{get isAuthenticated(){return n(e)},set isAuthenticated(i){x(e,i)},$$legacy:!0});var r=f(a,2);{var o=i=>{var c=Ti(),u=f($e(c),2);Ai(u,{}),V(i,c)};ne(r,i=>{n(e)&&i(o)})}V(t,s)}export{Za as A,Xa as C,ho as R,lo as S,Ja as V,zi as _,io as u};
