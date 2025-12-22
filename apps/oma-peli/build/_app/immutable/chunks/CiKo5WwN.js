const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./D3ozSZZd.js","./CfQEHKwl.js","./Db_meveG.js","./BdJg5JGx.js","./PpshkLFU.js","./C2GHuDhf.js","./DJrS_Z14.js","./x20eP5Ja.js"])))=>i.map(i=>d[i]);
var mn=Object.defineProperty;var xn=(t,e,s)=>e in t?mn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var ie=(t,e,s)=>xn(t,typeof e!="symbol"?e+"":e,s);import{f as yn,l as _n,t as X,g as M,a as V,i as wn,d as An}from"./BJCaw-qO.js";import{i as kn}from"./CeejRTB0.js";import{R as we,T as En,Q as Sn,i as n,w as Tn,W as Ln,X as Oa,Y as Pa,Z as Es,a1 as ct,a9 as Rn,_ as Va,$ as Ya,a0 as On,ad as Xa,O as Pn,z as In,I as Ia,ar as Ss,K as $a,as as $n,at as Cn,au as Bn,ac as Fn,av as qn,aw as Mn,ax as Wn,ay as Nn,a3 as jn,az as zn,aA as Dn,N as Un,aB as Gn,aC as Hn,g as Vn,n as Yn,p as Ka,ai as B,ah as Qa,y,aD as ye,f as Ce,s as f,c as m,r as x,t as pe,k as Ts,a as Za,aE as Xn,aF as Bs}from"./BdJg5JGx.js";import{_ as Ca,p as le,i as re}from"./Db_meveG.js";import{a as Kn,s as F}from"./Df-H93ww.js";import{b as Qn,p as Zn}from"./dtG1_1a4.js";import{b as _e}from"./KFaTUeEw.js";import{e as Pe,E as $,a as Jn,C as Ws,Q as kt,V as Et,N as Ls,D as se,H as eo,p as Be,a0 as Qe,a1 as Fe,a2 as to,w as Oe,a3 as pt,a4 as Ja,a5 as Ze,a6 as Ae,a7 as St,a8 as er,a9 as so,aa as Rs,ab as ao,ac as ro,y as _t}from"./CfQEHKwl.js";import{A as no,B as Ba,G as oo,T as tr,a as io,b as Os}from"./PpshkLFU.js";function Fa(t,e){return e}function lo(t,e,s,a){for(var r=[],o=e.length,i=0;i<o;i++)Bn(e[i].e,r,!0);var c=o>0&&r.length===0&&s!==null;if(c){var h=s.parentNode;Fn(h),h.append(s),a.clear(),Re(t,e[0].prev,e[o-1].next)}qn(r,()=>{for(var v=0;v<o;v++){var p=e[v];c||(a.delete(p.k),Re(t,p.prev,p.next)),Mn(p.e,!c)}})}function qa(t,e,s,a,r,o=null){var i=t,c={flags:e,items:new Map,first:null};we&&En();var h=null,v=!1,p=Tn(()=>{var u=s();return Pn(u)?u:u==null?[]:Xa(u)});Sn(()=>{var u=n(p),b=u.length;if(v&&b===0)return;v=b===0;let E=!1;if(we){var S=i.data===Ln;S!==(b===0)&&(i=Oa(),Pa(i),Es(!1),E=!0)}if(we){for(var Q=null,q,T=0;T<b;T++){if(ct.nodeType===8&&ct.data===Rn){i=ct,E=!0,Es(!1);break}var D=u[T],fe=a(D,T);q=sr(ct,c,Q,null,D,fe,T,r,e,s),c.items.set(fe,q),Q=q}b>0&&Pa(Oa())}we||co(u,c,i,r,e,a,s),o!==null&&(b===0?h?Va(h):h=Ya(()=>o(i)):h!==null&&On(h,()=>{h=null})),E&&Es(!0),n(p)}),we&&(i=ct)}function co(t,e,s,a,r,o,i){var c=t.length,h=e.items,v=e.first,p=v,u,b=null,E=[],S=[],Q,q,T,D;for(D=0;D<c;D+=1){if(Q=t[D],q=o(Q,D),T=h.get(q),T===void 0){var fe=p?p.e.nodes_start:s;b=sr(fe,e,b,b===null?e.first:b.next,Q,q,D,a,r,i),h.set(q,b),E=[],S=[],p=b.next;continue}if(po(T,Q,D),(T.e.f&Ss)!==0&&Va(T.e),T!==p){if(u!==void 0&&u.has(T)){if(E.length<S.length){var ke=S[0],ce;b=ke.prev;var ft=E[0],ut=E[E.length-1];for(ce=0;ce<E.length;ce+=1)Ma(E[ce],ke,s);for(ce=0;ce<S.length;ce+=1)u.delete(S[ce]);Re(e,ft.prev,ut.next),Re(e,b,ft),Re(e,ut,ke),p=ke,b=ut,D-=1,E=[],S=[]}else u.delete(T),Ma(T,p,s),Re(e,T.prev,T.next),Re(e,T,b===null?e.first:b.next),Re(e,b,T),b=T;continue}for(E=[],S=[];p!==null&&p.k!==q;)(p.e.f&Ss)===0&&(u??(u=new Set)).add(p),S.push(p),p=p.next;if(p===null)continue;T=p}E.push(T),b=T,p=T.next}if(p!==null||u!==void 0){for(var de=u===void 0?[]:Xa(u);p!==null;)(p.e.f&Ss)===0&&de.push(p),p=p.next;var Ee=de.length;if(Ee>0){var Ds=null;lo(e,de,Ds,h)}}$a.first=e.first&&e.first.e,$a.last=b&&b.e}function po(t,e,s,a){Cn(t.v,e),t.i=s}function sr(t,e,s,a,r,o,i,c,h,v){var p=(h&Wn)!==0,u=(h&Nn)===0,b=p?u?In(r):Ia(r):r,E=(h&$n)===0?i:Ia(i),S={i:E,v:b,k:o,a:null,e:null,prev:s,next:a};try{return S.e=Ya(()=>c(t,b,E,v),we),S.e.prev=s&&s.e,S.e.next=a&&a.e,s===null?e.first=S:(s.next=S,s.e.next=S.e),a!==null&&(a.prev=S,a.e.prev=S.e),S}finally{}}function Ma(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,r=e?e.e.nodes_start:s,o=t.e.nodes_start;o!==a;){var i=jn(o);r.before(o),o=i}}function Re(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function fo(t){if(we){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;O(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var r=t.checked;O(t,"checked",null),t.checked=r}}};t.__on_r=s,zn(s),yn()}}function O(t,e,s,a){var r=t.__attributes??(t.__attributes={});we&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Dn]=s),s==null?t.removeAttribute(e):typeof s!="string"&&uo(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var Wa=new Map;function uo(t){var e=Wa.get(t.nodeName);if(e)return e;Wa.set(t.nodeName,e=[]);for(var s,a=t,r=Element.prototype;r!==a;){s=Gn(a);for(var o in s)s[o].set&&e.push(o);a=Un(a)}return e}function ho(t,e,s=e){var a=Hn();_n(t,"input",r=>{var o=r?t.defaultValue:t.value;if(o=Ps(t)?Is(o):o,s(o),a&&o!==(o=e())){var i=t.selectionStart,c=t.selectionEnd;t.value=o??"",c!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(c,t.value.length))}}),(we&&t.defaultValue!==t.value||Vn(e)==null&&t.value)&&s(Ps(t)?Is(t.value):t.value),Yn(()=>{var r=e();Ps(t)&&r===Is(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function Ps(t){var e=t.type;return e==="number"||e==="range"}function Is(t){return t===""?null:+t}function go(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const Fs=[];Pe.handleByNamedList($.Environment,Fs);async function vo(t){if(!t)for(let e=0;e<Fs.length;e++){const s=Fs[e];if(s.value.test()){await s.value.load();return}}}let dt;function bo(){if(typeof dt=="boolean")return dt;try{dt=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{dt=!1}return dt}var ar=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(ar||{});class mo{constructor(e){this.items=[],this._name=e}emit(e,s,a,r,o,i,c,h){const{name:v,items:p}=this;for(let u=0,b=p.length;u<b;u++)p[u][v](e,s,a,r,o,i,c,h);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const xo=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],rr=class nr extends Jn{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...xo,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await vo(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...nr.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof Ws&&(a={container:a},s&&(kt(Et,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const r=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=r?a.clearColor:Ls.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const r=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==r&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=ar.ALL);const{clear:a,clearColor:r,target:o}=e;Ls.shared.setValue(r??this.background.colorRgba),s.renderTarget.clear(o,a,Ls.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new mo(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const r in this.runners)this.runners[r].add(a);return this}_addPipes(e,s){const a=s.reduce((r,o)=>(r[o.name]=o.value,r),{});e.forEach(r=>{const o=r.value,i=r.name,c=a[i];this.renderPipes[i]=new o(this,c?new c:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!bo())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};rr.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let or=rr,wt;function yo(t){return wt!==void 0||(wt=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??or.defaultOptions.failIfMajorPerformanceCaveat};try{if(!se.get().getWebGLRenderingContext())return!1;let r=se.get().createCanvas().getContext("webgl",e);const o=!!((s=r==null?void 0:r.getContextAttributes())!=null&&s.stencil);if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,o}catch{return!1}})()),wt}let At;async function _o(t={}){return At!==void 0||(At=await(async()=>{const e=se.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),At}const Na=["webgl","webgpu","canvas"];async function wo(t){let e=[];t.preference?(e.push(t.preference),Na.forEach(o=>{o!==t.preference&&e.push(o)})):e=Na.slice();let s,a={};for(let o=0;o<e.length;o++){const i=e[o];if(i==="webgpu"&&await _o()){const{WebGPURenderer:c}=await Ca(async()=>{const{WebGPURenderer:h}=await import("./D3ozSZZd.js");return{WebGPURenderer:h}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=c,a={...t,...t.webgpu};break}else if(i==="webgl"&&yo(t.failIfMajorPerformanceCaveat??or.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:c}=await Ca(async()=>{const{WebGLRenderer:h}=await import("./x20eP5Ja.js");return{WebGLRenderer:h}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=c,a={...t,...t.webgl};break}else if(i==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const r=new s;return await r.init(a),r}const ir="8.8.1";class lr{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,ir)}static destroy(){}}lr.extension=$.Application;class Ao{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,ir)}destroy(){this._renderer=null}}Ao.extension={type:[$.WebGLSystem,$.WebGPUSystem],name:"initHook",priority:-10};const cr=class qs{constructor(...e){this.stage=new Ws,e[0]!==void 0&&kt(Et,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await wo(e),qs._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return kt(Et,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=qs._plugins.slice(0);a.reverse(),a.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};cr._plugins=[];let dr=cr;Pe.handleByList($.Application,dr._plugins);Pe.add(lr);class pr extends no{constructor(e,s){super();const{textures:a,data:r}=e;Object.keys(r.pages).forEach(o=>{const i=r.pages[parseInt(o,10)],c=a[i.id];this.pages.push({texture:c})}),Object.keys(r.chars).forEach(o=>{const i=r.chars[o],{frame:c,source:h}=a[i.page],v=new eo(i.x+c.x,i.y+c.y,i.width,i.height),p=new Be({source:h,frame:v});this.chars[o]={id:o.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:p}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){Ba.install(e)}static uninstall(e){Ba.uninstall(e)}}const $s={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const u in e){const b=e[u].match(/^[a-z]+/gm)[0],E=e[u].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),S={};for(const Q in E){const q=E[Q].split("="),T=q[0],D=q[1].replace(/"/gm,""),fe=parseFloat(D),ke=isNaN(fe)?D:fe;S[T]=ke}s[b].push(S)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=s.info,[o]=s.common,[i]=s.distanceField??[];i&&(a.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),a.fontSize=parseInt(r.size,10),a.fontFamily=r.face,a.lineHeight=parseInt(o.lineHeight,10);const c=s.page;for(let u=0;u<c.length;u++)a.pages.push({id:parseInt(c[u].id,10)||0,file:c[u].file});const h={};a.baseLineOffset=a.lineHeight-parseInt(o.base,10);const v=s.char;for(let u=0;u<v.length;u++){const b=v[u],E=parseInt(b.id,10);let S=b.letter??b.char??String.fromCharCode(E);S==="space"&&(S=" "),h[E]=S,a.chars[S]={id:E,page:parseInt(b.page,10)||0,x:parseInt(b.x,10),y:parseInt(b.y,10),width:parseInt(b.width,10),height:parseInt(b.height,10),xOffset:parseInt(b.xoffset,10),yOffset:parseInt(b.yoffset,10),xAdvance:parseInt(b.xadvance,10),kerning:{}}}const p=s.kerning||[];for(let u=0;u<p.length;u++){const b=parseInt(p[u].first,10),E=parseInt(p[u].second,10),S=parseInt(p[u].amount,10);a.chars[h[E]].kerning[h[b]]=S}return a}},ja={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const o=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),c=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let v=0;v<o.length;v++)e.pages.push({id:parseInt(o[v].getAttribute("id"),10)||0,file:o[v].getAttribute("file")});const h={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let v=0;v<i.length;v++){const p=i[v],u=parseInt(p.getAttribute("id"),10);let b=p.getAttribute("letter")??p.getAttribute("char")??String.fromCharCode(u);b==="space"&&(b=" "),h[u]=b,e.chars[b]={id:u,page:parseInt(p.getAttribute("page"),10)||0,x:parseInt(p.getAttribute("x"),10),y:parseInt(p.getAttribute("y"),10),width:parseInt(p.getAttribute("width"),10),height:parseInt(p.getAttribute("height"),10),xOffset:parseInt(p.getAttribute("xoffset"),10),yOffset:parseInt(p.getAttribute("yoffset"),10),xAdvance:parseInt(p.getAttribute("xadvance"),10),kerning:{}}}for(let v=0;v<c.length;v++){const p=parseInt(c[v].getAttribute("first"),10),u=parseInt(c[v].getAttribute("second"),10),b=parseInt(c[v].getAttribute("amount"),10);e.chars[h[u]].kerning[h[p]]=b}return e}},za={test(t){return typeof t=="string"&&t.includes("<font>")?ja.test(se.get().parseXML(t)):!1},parse(t){return ja.parse(se.get().parseXML(t))}},ko=[".xml",".fnt"],Eo={extension:{type:$.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof pr,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},So={extension:{type:$.LoadParser,priority:Qe.Normal},name:"loadBitmapFont",test(t){return ko.includes(Fe.extname(t).toLowerCase())},async testParse(t){return $s.test(t)||za.test(t)},async parse(t,e,s){const a=$s.test(t)?$s.parse(t):za.parse(t),{src:r}=e,{pages:o}=a,i=[],c=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let u=0;u<o.length;++u){const b=o[u].file;let E=Fe.join(Fe.dirname(r),b);E=to(E,r),i.push({src:E,data:c})}const h=await s.load(i),v=i.map(u=>h[u.src]);return new pr({data:a,textures:v},r)},async load(t,e){return await(await se.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class To{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Lo={extension:{type:$.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Be),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((r,o)=>{s[a+(o===0?"":o+1)]=r})}),s}};async function fr(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Ro={extension:{type:$.DetectionParser,priority:1},test:async()=>fr("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},Da=["png","jpg","jpeg"],Oo={extension:{type:$.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...Da],remove:async t=>t.filter(e=>!Da.includes(e))},Po="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Ns(t){return Po?!1:document.createElement("video").canPlayType(t)!==""}const Io={extension:{type:$.DetectionParser,priority:0},test:async()=>Ns("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},$o={extension:{type:$.DetectionParser,priority:0},test:async()=>Ns("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},Co={extension:{type:$.DetectionParser,priority:0},test:async()=>Ns("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},Bo={extension:{type:$.DetectionParser,priority:0},test:async()=>fr("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class Fo{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var i,c;let r=null,o=null;if(s.loadParser&&(o=this._parserHash[s.loadParser],o||Oe(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!o){for(let h=0;h<this.parsers.length;h++){const v=this.parsers[h];if(v.load&&((i=v.test)!=null&&i.call(v,e,s,this))){o=v;break}}if(!o)return Oe(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await o.load(e,s,this),a.parser=o;for(let h=0;h<this.parsers.length;h++){const v=this.parsers[h];v.parse&&v.parse&&await((c=v.testParse)==null?void 0:c.call(v,r,s,this))&&(r=await v.parse(r,s,this)||r,a.parser=v)}return r})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const r={},o=Ja(e),i=pt(e,v=>({alias:[v],src:v,data:{}})),c=i.length,h=i.map(async v=>{const p=Fe.toAbsolute(v.src);if(!r[v.src])try{this.promiseCache[p]||(this.promiseCache[p]=this._getLoadPromiseAndParser(p,v)),r[v.src]=await this.promiseCache[p].promise,s&&s(++a/c)}catch(u){throw delete this.promiseCache[p],delete r[v.src],new Error(`[Loader.load] Failed to load ${p}.
${u}`)}});return await Promise.all(h),o?r[i[0].src]:r}async unload(e){const a=pt(e,r=>({alias:[r],src:r})).map(async r=>{var c,h;const o=Fe.toAbsolute(r.src),i=this.promiseCache[o];if(i){const v=await i.promise;delete this.promiseCache[o],await((h=(c=i.parser)==null?void 0:c.unload)==null?void 0:h.call(c,v,r,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&Oe(`[Assets] loadParser name conflict "${s.name}"`):Oe("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function Je(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const qo=".json",Mo="application/json",Wo={extension:{type:$.LoadParser,priority:Qe.Low},name:"loadJson",test(t){return Je(t,Mo)||Ze(t,qo)},async load(t){return await(await se.get().fetch(t)).json()}},No=".txt",jo="text/plain",zo={name:"loadTxt",extension:{type:$.LoadParser,priority:Qe.Low,name:"loadTxt"},test(t){return Je(t,jo)||Ze(t,No)},async load(t){return await(await se.get().fetch(t)).text()}},Do=["normal","bold","100","200","300","400","500","600","700","800","900"],Uo=[".ttf",".otf",".woff",".woff2"],Go=["font/ttf","font/otf","font/woff","font/woff2"],Ho=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Vo(t){const e=Fe.extname(t),r=Fe.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(c=>c.charAt(0).toUpperCase()+c.slice(1));let o=r.length>0;for(const c of r)if(!c.match(Ho)){o=!1;break}let i=r.join(" ");return o||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const Yo=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function Xo(t){return Yo.test(t)?t:encodeURI(t)}const Ko={extension:{type:$.LoadParser,priority:Qe.Low},name:"loadWebFont",test(t){return Je(t,Go)||Ze(t,Uo)},async load(t,e){var a,r,o;const s=se.get().getFontFaceSet();if(s){const i=[],c=((a=e.data)==null?void 0:a.family)??Vo(t),h=((o=(r=e.data)==null?void 0:r.weights)==null?void 0:o.filter(p=>Do.includes(p)))??["normal"],v=e.data??{};for(let p=0;p<h.length;p++){const u=h[p],b=new FontFace(c,`url(${Xo(t)})`,{...v,weight:u});await b.load(),s.add(b),i.push(b)}return Ae.set(`${c}-and-url`,{url:t,fontFaces:i}),i.length===1?i[0]:i}return Oe("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{Ae.remove(`${e.family}-and-url`),se.get().getFontFaceSet().delete(e)})}};function js(t,e=1){var a;const s=(a=St.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function zs(t,e,s){t.label=s,t._sourceOrigin=s;const a=new Be({source:t,label:s}),r=()=>{delete e.promiseCache[s],Ae.has(s)&&Ae.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(Oe("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),a.once("destroy",()=>{t.destroyed||(Oe("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),a}const Qo=".svg",Zo="image/svg+xml",Jo={extension:{type:$.LoadParser,priority:Qe.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return Je(t,Zo)||Ze(t,Qo)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?ti(t):ei(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function ei(t,e,s,a){var q,T,D;const o=await(await se.get().fetch(t)).blob(),i=URL.createObjectURL(o),c=new Image;c.src=i,c.crossOrigin=a,await c.decode(),URL.revokeObjectURL(i);const h=document.createElement("canvas"),v=h.getContext("2d"),p=((q=e.data)==null?void 0:q.resolution)||js(t),u=((T=e.data)==null?void 0:T.width)??c.width,b=((D=e.data)==null?void 0:D.height)??c.height;h.width=u*p,h.height=b*p,v.drawImage(c,0,0,u*p,b*p);const{parseAsGraphicsContext:E,...S}=e.data??{},Q=new er({resource:h,alphaMode:"premultiply-alpha-on-upload",resolution:p,...S});return zs(Q,s,t)}async function ti(t){const s=await(await se.get().fetch(t)).text(),a=new oo;return a.svg(s),a}const si=`(function () {
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
`;let Xe=null,Ms=class{constructor(){Xe||(Xe=URL.createObjectURL(new Blob([si],{type:"application/javascript"}))),this.worker=new Worker(Xe)}};Ms.revokeObjectURL=function(){Xe&&(URL.revokeObjectURL(Xe),Xe=null)};const ai=`(function () {
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
`;let Ke=null;class ur{constructor(){Ke||(Ke=URL.createObjectURL(new Blob([ai],{type:"application/javascript"}))),this.worker=new Worker(Ke)}}ur.revokeObjectURL=function(){Ke&&(URL.revokeObjectURL(Ke),Ke=null)};let Ua=0,Cs;class ri{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new Ms;s.addEventListener("message",a=>{s.terminate(),Ms.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Cs===void 0&&(Cs=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Cs&&(this._createdWorkers++,e=new ur().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((r,o)=>{this._queue.push({id:e,arguments:s,resolve:r,reject:o})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[Ua]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:Ua++,id:a})}}const Ga=new ri,ni=[".jpeg",".jpg",".png",".webp",".avif"],oi=["image/jpeg","image/png","image/webp","image/avif"];async function ii(t,e){var r;const s=await se.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const hr={name:"loadTextures",extension:{type:$.LoadParser,priority:Qe.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return Je(t,oi)||Ze(t,ni)},async load(t,e,s){var o;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Ga.isImageBitmapSupported()?a=await Ga.loadImageBitmap(t,e):a=await ii(t,e):a=await new Promise((i,c)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?i(a):(a.onload=()=>{i(a)},a.onerror=c)});const r=new er({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((o=e.data)==null?void 0:o.resolution)||js(t),...e.data});return zs(r,s,t)},unload(t){t.destroy(!0)}},gr=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],li=gr.map(t=>`video/${t.substring(1)}`);function ci(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=pi(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function di(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",r),t.load();function a(){o(),e()}function r(i){o(),s(i)}function o(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",r)}})}function pi(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const fi={name:"loadVideo",extension:{type:$.LoadParser,name:"loadVideo"},test(t){const e=Je(t,li),s=Ze(t,gr);return e||s},async load(t,e,s){var h,v;const a={...Rs.defaultOptions,resolution:((h=e.data)==null?void 0:h.resolution)||js(t),alphaMode:((v=e.data)==null?void 0:v.alphaMode)||await so(),...e.data},r=document.createElement("video"),o={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(o).forEach(p=>{const u=o[p];u!==void 0&&r.setAttribute(p,u)}),a.muted===!0&&(r.muted=!0),ci(r,t,a.crossorigin);const i=document.createElement("source");let c;if(t.startsWith("data:"))c=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const p=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();c=Rs.MIME_TYPES[p]||`video/${p}`}return i.src=t,c&&(i.type=c),new Promise(p=>{const u=async()=>{const b=new Rs({...a,resource:r});r.removeEventListener("canplay",u),e.data.preload&&await di(r),p(zs(b,s,t))};r.addEventListener("canplay",u),r.appendChild(i)})},unload(t){t.destroy(!0)}},vr={extension:{type:$.ResolveParser,name:"resolveTexture"},test:hr.test,parse:t=>{var e;return{resolution:parseFloat(((e=St.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},ui={extension:{type:$.ResolveParser,priority:-2,name:"resolveJson"},test:t=>St.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:vr.parse};class hi{constructor(){this._detections=[],this._initialized=!1,this.resolver=new St,this.loader=new Fo,this.cache=Ae,this._backgroundLoader=new To(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var o,i;if(this._initialized){Oe("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let c=e.manifest;typeof c=="string"&&(c=await this.load(c)),this.resolver.addManifest(c)}const s=((o=e.texturePreference)==null?void 0:o.resolution)??1,a=typeof s=="number"?[s]:s,r=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=Ja(e),r=pt(e).map(c=>{if(typeof c!="string"){const h=this.resolver.getAlias(c);return h.some(v=>!this.resolver.hasKey(v))&&this.add(c),Array.isArray(h)?h[0]:h}return this.resolver.hasKey(c)||this.add({alias:c,src:c}),c}),o=this.resolver.resolve(r),i=await this._mapLoadToResolve(o,s);return a?i[r[0]]:i}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const r=this.resolver.resolveBundle(e),o={},i=Object.keys(r);let c=0,h=0;const v=()=>{s==null||s(++c/h)},p=i.map(u=>{const b=r[u];return h+=Object.keys(b).length,this._mapLoadToResolve(b,v).then(E=>{o[u]=E})});return await Promise.all(p),a?o[e[0]]:o}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Ae.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=Ae.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(a,s);this._backgroundLoader.active=!0;const o={};return a.forEach(i=>{const c=r[i.src],h=[i.src];i.alias&&h.push(...i.alias),h.forEach(v=>{o[v]=c}),Ae.set(h,c)}),o}async unload(e){this._initialized||await this.init();const s=pt(e).map(r=>typeof r!="string"?r.src:r),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=pt(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(r=>this._unloadFromResolved(s[r]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{Ae.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,r)=>s.indexOf(a)===r),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const Ye=new hi;Pe.handleByList($.LoadParser,Ye.loader.parsers).handleByList($.ResolveParser,Ye.resolver.parsers).handleByList($.CacheParser,Ye.cache.parsers).handleByList($.DetectionParser,Ye.detections);Pe.add(Lo,Oo,Ro,Bo,Io,$o,Co,Wo,zo,Ko,Jo,hr,fi,So,Eo,vr,ui);const Ha={loader:$.LoadParser,resolver:$.ResolveParser,cache:$.CacheParser,detection:$.DetectionParser};Pe.handle($.Asset,t=>{const e=t.ref;Object.entries(Ha).filter(([s])=>!!e[s]).forEach(([s,a])=>Pe.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(Ha).filter(s=>!!e[s]).forEach(s=>Pe.remove(e[s]))});class gi extends ao{constructor(e,s){const{text:a,resolution:r,style:o,anchor:i,width:c,height:h,roundPixels:v,...p}=e;super({...p}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=o,this.resolution=r??null,this.allowChildren=!1,this._anchor=new ro({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=v??!1,c!==void 0&&(this.width=c),h!==void 0&&(this.height=h)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,r=-s*this.anchor.x;let o=0;return e.x>=r&&e.x<=r+s&&(o=-a*this.anchor.y,e.y>=o&&e.y<=o+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function vi(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(kt(Et,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class bi extends gi{constructor(...e){const s=vi(e,"Text");super(s,tr),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=io.measureText(this._text,this._style),{width:r,height:o}=a;e.minX=-s._x*r,e.maxX=e.minX+r,e.minY=-s._y*o,e.maxY=e.minY+o}}var mi=wn('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-1t2q5b9"><\/script><!---->',1),xi=X('<p style="color: red;" class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Error:</strong> </p>'),yi=X('<div class="svelte-1t2q5b9"> </div>'),_i=X('<details class="svelte-1t2q5b9"><summary class="svelte-1t2q5b9"> </summary> <!></details>'),wi=X(`<div style="
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
  " class="svelte-1t2q5b9"><h3 class="svelte-1t2q5b9">🎰 Oma-peli Debug</h3> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Status:</strong> </p> <!> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Base:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">BG URL:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Sample:</strong> </p> <!></div>`),Ai=X('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-1t2q5b9"> </div>'),ki=X('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-1t2q5b9"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-1t2q5b9"> </span></div>'),Ei=X(`<div style="
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
      " class="svelte-1t2q5b9">Jatka pelaamista</button></div>`),Si=X(`<div style="
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
      " class="svelte-1t2q5b9">Sulje</button></div>`),Ti=X('<div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #ff00ff; font-size: 16px; animation: pulse 1s infinite;" class="svelte-1t2q5b9"><span class="svelte-1t2q5b9">🎰 FREE SPINS:</span> <span class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-top: 1px solid #555; padding-top: 8px;" class="svelte-1t2q5b9"><span style="color: #fff; font-size: 14px;" class="svelte-1t2q5b9">Total Won:</span> <span style="color: #00ff00; font-size: 14px;" class="svelte-1t2q5b9"> </span></div>',1),Li=X(`<div style="
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
        " class="svelte-1t2q5b9">⏹ STOP</button></div>`),Ri=X(`<div style="
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
          " class="svelte-1t2q5b9">Cancel</button></div>`),Oi=X(`<button style="
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
      " class="svelte-1t2q5b9">🔄 AUTOPLAY</button> <!>`,1),Pi=X(`<!> <!> <!> <div style="
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
        " class="svelte-1t2q5b9"> </div> <button title="Increase Bet" class="svelte-1t2q5b9"></button></div></div> <img alt="Divider" class="svelte-1t2q5b9"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-1t2q5b9"><div style="color: #00ff00; font-size: 12px; font-weight: bold;" class="svelte-1t2q5b9">BALANCE</div> <div style="
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      " class="svelte-1t2q5b9"> </div></div> <img alt="Divider" class="svelte-1t2q5b9"> <button title="SPIN" class="svelte-1t2q5b9"></button> <img alt="Divider" class="svelte-1t2q5b9"> <button title="Autoplay" class="svelte-1t2q5b9"></button> <button title="Fast Play" class="svelte-1t2q5b9"></button> <img alt="Divider" class="svelte-1t2q5b9"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-1t2q5b9"><div style="color: #00ff00; font-size: 12px; font-weight: bold;" class="svelte-1t2q5b9">WIN</div> <div style="
        color: #ffd700;
        font-size: 20px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      " class="svelte-1t2q5b9"> </div></div> <img alt="Divider" class="svelte-1t2q5b9"> <button title="Menu" class="svelte-1t2q5b9"></button></div> <img alt="Right End" class="svelte-1t2q5b9"></div>`,1);function Ii(t,e){Ka(e,!0);const s=13,a=1445,r=1e3,o=1.75,i=-30,c=-10,h=160,v=0,p=750,u=120,b=250,E=300,S=20,Q=1,q=1,T=.8,D=50,fe=30,ke=-40,ce=1,ft="height",de=Math.round(100*o),Ee=Math.round(de*(700/760)),br=Ee+10,Tt=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],Us=typeof window<"u"&&window.location.hostname.includes("github.io"),K=Us?"/web-sdk/oma-peli/symbols":`${_e}/symbols`,J=Us?"/web-sdk/oma-peli/controls":`${_e}/controls`,Lt={a:`${K}/Blue_hotrod.jpg`,b:`${K}/Blue_jacket.jpg`,c:`${K}/Blue_rollers.jpg`,d:`${K}/Blue_speakers.jpg`,e:`${K}/Premium_blonde.jpg`,f:`${K}/Premium_brunette.jpg`,g:`${K}/Premium_rocker.jpg`,h:`${K}/New_Wild.jpg`,i:`${K}/Red_burger.jpg`,j:`${K}/Red_fries.jpg`,k:`${K}/Red_milkshake.jpg`,l:`${K}/Scatter.jpg`,emptyslot:`${K}/Emptyslot.jpg`},Rt=`${K}/bg_base.jpg`,Gs=`${K}/ReelFrames.png`,Hs=`${K}/RockABillyReels_logo.png`,mr={spin:`${_e}/sounds/spin.mp3`,stop:`${_e}/sounds/stop.mp3`,win:`${_e}/sounds/win.mp3`},xr="1.1.0";let ue=B(!0),Ot={},he=null,Pt=null,It=null;const yr=60/130,_r=Math.round(yr*60);let ge=B(!0),wr=B(!1),$t=B(!1),Ct=B(945),Bt=null;const Ft={background:`${_e}/music/rockabilly-loop.mp3`,drumHit:`${_e}/music/drum-hit.mp3`,winTheme:`${_e}/music/win-stinger.mp3`};function Vs(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(Vs,500);return}const d=window.Howl;try{he=new d({src:[Ft.background],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded"),y(wr,!0)},onloaderror:(g,l)=>{console.warn("⚠️ Background music not found (generate with Suno AI):",l)}}),Pt=new d({src:[Ft.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),It=new d({src:[Ft.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(g){console.error("Failed to initialize music system:",g)}}function Ar(){he&&n(ge)&&!he.playing()&&(he.play(),console.log("🎵 Background music started"))}function kr(){he&&he.playing()&&(he.fade(he.volume(),0,500),setTimeout(()=>he.stop(),500))}function Er(){y(ge,!n(ge)),n(ge)?Ar():kr()}function Sr(){Pt&&n(ge)&&n(ue)&&Pt.play()}function Tr(){It&&n(ge)&&n(ue)&&It.play()}let ht=null,qe=null,et=null,tt=null,st=B("Initializing..."),Me=B(""),ne=[],ve=B(1e3),Y=B(10);const Ys=1,qt=100;let oe=B(!1),We=B(0),Ie=B(!1),Lr=B(0),$e=!1,be=null,Mt=!1,Ne=B(0),je=B(0),at=B(0),Wt=B(0),Nt=Ts(()=>n(je)>0?(n(at)/n(je)*100).toFixed(2):"0.00"),jt=Ts(()=>n(Ne)>0?(n(Wt)/n(Ne)*100).toFixed(2):"0.00"),G=B(!1),me=B(0),Se=B(0),gt=B(0),zt=B(0),vt=B(0),Dt=B(0),Rr=Ts(()=>n(vt)>0?(n(Dt)/n(vt)*100).toFixed(2):"0.00"),ae=B(le([]));function Or(d,g,l){const w=new Date().toLocaleString("fi-FI");let _=`
${"=".repeat(60)}
`;_+=`ROUND #${d} - ${w}
`,_+=`Mode: ${n(G)?"FREE SPINS":"BASE GAME"}
`,_+=`${"=".repeat(60)}
`,g.forEach((A,L)=>{_+=`
Win ${L+1}:
`,_+=`  Symbol: ${A.symbol} (${Zs[A.symbol]})
`,_+=`  Count: ${A.count} symbols
`,_+=`  Multiplier: ${A.multiplier}x
`,_+=`  Payout: ${A.payout.toFixed(2)}
`,_+=`  Positions: [${A.positions.join(", ")}]
`}),_+=`
${"─".repeat(60)}
`,_+=`TOTAL WIN: ${l.toFixed(2)}
`,_+=`${"=".repeat(60)}
`,n(ae).push(_)}function Pr(){const d=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${n(ae).join(`
`)}`,g=new Blob([d],{type:"text/plain"}),l=URL.createObjectURL(g),w=document.createElement("a");w.href=l,w.download=`win-log-${Date.now()}.txt`,w.click(),URL.revokeObjectURL(l)}function Ir(){y(ae,le([]))}function $r(){n(G)||(y(G,!0),y(me,10),y(Se,0),ye(gt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."))}const Cr={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},Br={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function Xs(d){if(d===6)return Math.random()<.55?"h":"emptyslot";const g=n(G)?Br:Cr,l=Math.random();let w=0;const _=Tt.filter(L=>L!=="h"),A=_.reduce((L,j)=>L+g[j],0);for(const L of _)if(w+=g[L]/A,l<w)return L;return"f"}function Ks(){const d=[];for(let g=0;g<s;g++){const l=Xs(g);d.push(l),ye(vt),l==="emptyslot"&&ye(Dt)}return d}function Qs(d){return d<3?{col:0,row:d}:d<6?{col:1,row:d-3}:d===6?{col:2,row:0}:d<10?{col:3,row:d-7}:{col:4,row:d-10}}function rt(d,g){return d===0?g:d===1?3+g:d===2?6:d===3?7+g:d===4?10+g:-1}function Fr(){if(n(G)){const d=Math.random();return d<.7?3:d<.92?5:10}else{const d=Math.random();return d<.7?1:d<.92?2:3}}const qr={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function Mr(){var ee;const d=[],g=[];for(let k=0;k<s;k++)nt[k]==="l"&&g.push(k);if(g.length>=5){const k=g.length;y(me,n(me)+k),n(G)?console.log(`🎰 FREE SPINS RETRIGGERED! +${k} FREE SPINS! Total: ${n(me)}`):(y(G,!0),y(Se,0),ye(gt),console.log(`🎰 FREE SPINS TRIGGERED! ${g.length} scatters = ${k} FREE SPINS!`)),d.push({symbol:"l",count:g.length,payout:0,positions:g,multiplier:1})}const l=[];for(let k=0;k<3;k++)for(let R=0;R<3;R++)for(let P=0;P<1;P++)for(let I=0;I<3;I++)for(let N=0;N<3;N++){const W=[rt(0,k),rt(1,R),rt(2,P),rt(3,I),rt(4,N)];l.push(W)}console.log(`Generated ${l.length} possible paths (should be 81)`);const w=[];for(const k of l){const R=k.map(W=>nt[W]);if(R[0]==="emptyslot"||R[0]==="l")continue;let P=null;for(let W=0;W<R.length;W++)if(R[W]!=="h"&&R[W]!=="emptyslot"&&R[W]!=="l"){P=R[W];break}if(!P)continue;let I=0;const N=new Set;for(let W=0;W<k.length;W++){const Le=k[W],{col:Ve}=Qs(Le),te=R[W];(te===P||te==="h")&&N.add(Ve)}for(let W=0;W<5&&N.has(W);W++)I++;if(I>=3){const Le=k[0]%3;w.push({symbol:P,length:I,path:k.slice(0,I),startRow:Le})}}const _=[],A=new Map;for(const k of w){const R=`${k.symbol}-${k.path.join(",")}`;A.has(R)||A.set(R,[]),A.get(R).push(k)}for(const[k,R]of A.entries()){const P=Math.max(...R.map(N=>N.length)),I=R.find(N=>N.length===P);I&&_.push(I)}const L=[],j=new Map;for(const k of _)j.has(k.symbol)||j.set(k.symbol,[]),j.get(k.symbol).push(k);const z=[];for(const[k,R]of j.entries()){const P=Math.max(...R.map(N=>N.length)),I=R.filter(N=>N.length===P);z.push(...I)}const H=new Map;for(const k of z){const R=`${k.symbol}-${k.length}`;H.has(R)||H.set(R,[]),H.get(R).push(k)}const C=z.length>0?Fr():1;for(const[k,R]of H.entries()){const P=R[0],I=(ee=qr[P.symbol])==null?void 0:ee[P.length];if(I!==void 0&&I>0){const N=new Map;for(const te of R)for(let Z=0;Z<te.length;Z++)N.has(Z)||N.set(Z,new Set),N.get(Z).add(te.path[Z]);let W=1;for(let te=0;te<P.length;te++){const Z=N.get(te);W*=Z?Z.size:1}const Le=I*n(Y)*W*C;console.log(`  ${P.length}x${P.symbol}: ${W} ways × ${I}x × ${n(Y)} bet × ${C} mult = ${Le}`);const Ve=new Set;for(const te of R)te.path.forEach(Z=>Ve.add(Z));L.push({symbol:P.symbol,count:P.length,payout:Le,positions:Array.from(Ve),multiplier:C})}}return d.push(...L),d}let xe=B(0),ze=B(le([])),Te=B(!1),De=B(!1);const Zs={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function Ut(d){if(!n(ue)||!Ot[d])return;const g=Ot[d];g.currentTime=0,g.play().catch(l=>{console.warn("Äänen toisto epäonnistui:",d,l)})}function Wr(d){ot.forEach(g=>U.stage.removeChild(g)),ot=[],d.forEach(g=>{g.positions.forEach(l=>{const w=Ue[l],_=new Os().rect(0,0,de,Ee).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});_.x=w.container.x,_.y=w.container.y,U.stage.addChild(_),ot.push(_);let A=0,L=1;const j=.05;U.ticker.add(()=>{A+=L*j,A>=.4&&(L=-1),A<=0&&(L=1),_.alpha=.5+A})})})}function Gt(){ot.forEach(d=>U.stage.removeChild(d)),ot=[]}let nt=Ks(),Ht,U,Ue=[],ot=[];class Nr{constructor(g,l){ie(this,"index");ie(this,"container");ie(this,"offset",0);ie(this,"speed",0);ie(this,"targetSpeed",30);ie(this,"state","idle");ie(this,"stopDelay",0);ie(this,"bounceOffset",0);ie(this,"bounceSpeed",0);ie(this,"bounceFrames",0);this.index=g,this.container=l}start(g){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=g}startSynchronized(g){const l=60+g*_r;this.start(l)}update(){this.state!=="idle"&&(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"&&(this.speed*=.92,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,Ut("stop"),Sr())),this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=br&&(this.offset=0,nt[this.index]=Xs(this.index))))}draw(){const g=this.container;g.removeChildren();const l=nt[this.index];if(!l||!ht||!ht[l])return;const w=ht[l];if(!w)return;const _=this.offset+this.bounceOffset,A=new _t(w);A.width=de,A.height=Ee,A.x=0,A.y=_,g.addChild(A)}}Qa(async()=>{U=new dr,await U.init({width:a,height:r,background:"#001a33"}),Ht.appendChild(U.canvas);const d={};try{y(st,"Loading background and UI images..."),ne.push(`Loading background: ${Rt}`),ne.push(`Loading reel frames: ${Gs}`),ne.push(`Loading logo: ${Hs}`),await Ye.load([{alias:"background",src:Rt},{alias:"reelframes",src:Gs},{alias:"logo",src:Hs}]),qe=Be.from("background"),et=Be.from("reelframes"),tt=Be.from("logo"),console.log("✅ Background texture created:",qe.width,"x",qe.height),console.log("✅ Reel frames texture created:",et.width,"x",et.height),console.log("✅ Logo texture created:",tt.width,"x",tt.height),ne.push("✅ All UI images loaded"),y(st,"Loading symbols...");const l=[];for(const w of Tt)l.push({alias:w,src:Lt[w]});await Ye.load(l);for(const w of Tt){const _=Lt[w];ne.push(`Loading symbol ${w}: ${_}`);try{const A=Be.from(w);d[w]=A,console.log(`✅ Symbol ${w} loaded:`,A.width,"x",A.height),ne.push(`✅ Symbol ${w} loaded`)}catch(A){const L=`❌ Failed to load symbol ${w} from ${_}: ${A}`;throw ne.push(L),console.error(L),new Error(L)}}ht=d,y(st,"Assets loaded successfully!")}catch(l){y(Me,`Asset loading failed: ${l}`),ne.push(n(Me)),console.error(n(Me));return}console.log("Ladataan ääniefektit...");for(const[l,w]of Object.entries(mr)){const _=new Audio;_.src=w,_.preload="auto",_.volume=.7,_.load(),_.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${w} (käytetään hiljaista placeholderia)`)}),Ot[l]=_}if(console.log("Taustakuva ladattu, tekstuuri:",qe),qe){const l=new _t(qe);U.renderer.width/U.renderer.height;const w=l.texture.width/l.texture.height;let _;_=U.renderer.height/l.texture.height,_*=ce,l.scale.set(_),l.x=(U.renderer.width-l.width)/2,l.y=(U.renderer.height-l.height)/2+ke,U.stage.addChild(l),console.log("Taustakuva lisätty:",ft,"mode, size:",l.width.toFixed(0),"x",l.height.toFixed(0),"image aspect:",w.toFixed(2),"scale:",_.toFixed(2),"pos:",l.x.toFixed(0),l.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(l=>({x:l.x+i,y:l.y+c})),Ue=[];for(let l=0;l<s;l++){const w=Qs(l),_=w.col,A=w.row,L=300+_*(de+20),j=250+A*(Ee+15),z=l===6?L+v:L,H=l===6?j+h:j,C=new Ws;C.x=z+i,C.y=H+c;const ee=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],k=new Os().rect(0,0,de,Ee).fill({color:ee[l],alpha:.3});k.x=C.x,k.y=C.y,U.stage.addChild(k);const R=new tr({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),P=new bi({text:l.toString(),style:R});P.x=C.x+5,P.y=C.y+5,U.stage.addChild(P);const I=new Os().rect(0,0,de,Ee).fill(16777215);I.x=C.x,I.y=C.y,C.mask=I,U.stage.addChild(I),U.stage.addChild(C),Ue.push(new Nr(l,C))}if(et){const l=new _t(et);l.scale.set(1),l.x=250,l.y=200,U.stage.addChild(l),Bt=l,y(Ct,le(l.width)),console.log("Reel frames lisätty:",l.width.toFixed(0),"x",l.height.toFixed(0)),console.log("Control panel leveys päivitetty:",n(Ct).toFixed(0))}if(tt){const l=new _t(tt);l.scale.set(T),l.x=(U.renderer.width-l.width)/2+D,l.y=fe,U.stage.addChild(l),console.log("Logo lisätty päällimmäiseen layeriin:",l.width.toFixed(0),"x",l.height.toFixed(0))}Vs(),U.ticker.add(jr)});function jr(){for(const d of Ue)d.update(),d.draw();if(!n(Te)&&!Mt&&Ue.every(d=>d.state==="stopped")){Mt=!0;const d=Mr();console.log(`Checking wins, found ${d.length} wins`),d.length>0?(y(ze,le(d)),y(xe,le(d.reduce((g,l)=>g+l.payout,0))),Or(n(Ne),d,n(xe)),zr(n(xe)),y(Te,!0),y(Lr,le(Date.now())),console.log(`🎉 VOITTO! ${n(xe)} pistettä! Uusi saldo: ${n(ve)}`),console.log(`isShowingWin set to: ${n(Te)}, totalWin: ${n(xe)}`),d.forEach(g=>{const l=g.multiplier?` (${g.multiplier}x multiplier)`:"";console.log(`${g.count}x ${g.symbol} = ${g.payout} pistettä${l}`)}),Wr(d),Ut("win"),n(oe)&&!$e&&($e=!0,be=window.setTimeout(()=>{n(Te)&&n(oe)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),y(Te,!1),Gt()),be=window.setTimeout(()=>{$e=!1,Yt()},200)},1500))):(console.log("No wins found this spin"),n(oe)&&!$e&&($e=!0,be=window.setTimeout(()=>{$e=!1,Yt()},1e3))),n(G)&&n(me)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${n(Se)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${n(Se).toFixed(2)}`),y(G,!1),y(Se,0)},2e3))}}function Js(){if(n(G)&&n(me)>0)ye(me,-1),ye(zt),console.log(`🎰 FREE SPIN! Remaining: ${n(me)}`);else if(!n(G)){if(n(ve)<n(Y)){alert(`Not enough credits! Balance: ${n(ve)}, Bet: ${n(Y)}`),Vt();return}y(ve,n(ve)-n(Y)),ye(Ne),y(je,n(je)+n(Y))}be!==null&&(clearTimeout(be),be=null),y(ze,le([])),y(xe,0),y(Te,!1),Mt=!1,Gt(),nt=Ks(),Ue.forEach((d,g)=>{const l=Math.floor(g/3);d.startSynchronized(l)}),Ut("spin")}function zr(d){y(ve,n(ve)+d),y(at,n(at)+d),n(G)&&y(Se,n(Se)+d),d>0&&(ye(Wt),d/n(Y)>=10&&Tr())}function ea(){n(Y)<qt&&y(Y,le(Math.min(n(Y)+1,qt)))}function ta(){n(Y)>Ys&&y(Y,le(Math.max(n(Y)-1,Ys)))}function Dr(){y(Y,qt)}function it(d){y(oe,!0),y(We,le(d)),y(Ie,!1),Yt()}function Vt(){y(oe,!1),y(We,0),$e=!1,be!==null&&(clearTimeout(be),be=null)}function Yt(){if(!n(oe)||n(We)<=0){Vt();return}console.log(`Autoplay: Starting spin ${n(We)} rounds left`),Js(),ye(We,-1)}function Ur(){confirm("Reset all statistics?")&&(y(Ne,0),y(je,0),y(at,0),y(Wt,0),y(gt,0),y(zt,0),y(vt,0),y(Dt,0))}var sa=Pi();Kn(d=>{var g=mi();f(Ce(g)),V(d,g)});var aa=Ce(sa);{var Gr=d=>{var g=wi(),l=f(m(g),2),w=f(m(l));x(l);var _=f(l,2);{var A=P=>{var I=xi(),N=f(m(I));x(I),pe(()=>F(N,` ${n(Me)??""}`)),V(P,I)};re(_,P=>{n(Me)&&P(A)})}var L=f(_,2),j=f(m(L));j.nodeValue=` ${_e??""}`,x(L);var z=f(L,2),H=f(m(z));H.nodeValue=` ${Rt??""}`,x(z);var C=f(z,2),ee=f(m(C));x(C);var k=f(C,2);{var R=P=>{var I=_i(),N=m(I),W=m(N);x(N);var Le=f(N,2);qa(Le,17,()=>ne,Fa,(Ve,te)=>{var Z=yi(),bn=m(Z,!0);x(Z),pe(()=>F(bn,n(te))),V(Ve,Z)}),x(I),pe(()=>F(W,`Log (${ne.length??""})`)),V(P,I)};re(k,P=>{ne.length>0&&P(R)})}x(g),pe(()=>{F(w,` ${n(st)??""}`),F(ee,` ${Lt.a??""}`)}),V(d,g)};re(aa,d=>{(n(st)!=="Assets loaded successfully!"||n(Me))&&d(Gr)})}var ra=f(aa,2);{var Hr=d=>{var g=Ei(),l=f(m(g),2),w=m(l);x(l);var _=f(l,2);qa(_,17,()=>n(ze),Fa,(z,H)=>{var C=Ai(),ee=m(C);x(C),pe(k=>F(ee,`${n(H).count??""} × ${Zs[n(H).symbol]??""} = ${k??""} pistettä`),[()=>n(H).payout.toFixed(2)]),V(z,C)});var A=f(_,2);{var L=z=>{var H=ki(),C=m(H),ee=m(C);x(C),x(H),pe(()=>F(ee,`✨ ${n(ze)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),V(z,H)};re(A,z=>{n(ze).length>0&&n(ze)[0].multiplier>1&&z(L)})}var j=f(A,2);x(g),pe(()=>F(w,`${n(xe)??""} pistettä`)),M("click",j,()=>{y(Te,!1),Gt(),console.log("Win popup closed, ready for next spin")}),V(d,g)};re(ra,d=>{n(xe)>0&&n(Te)&&d(Hr)})}var na=f(ra,2);{var Vr=d=>{var g=Si(),l=f(m(g),8);x(g),M("click",l,()=>{y(De,!1)}),V(d,g)};re(na,d=>{n(De)&&d(Vr)})}var oa=f(na,2);Qn(oa,d=>Ht=d,()=>Ht);var bt=f(oa,2),ia=m(bt);{var Yr=d=>{var g=Ti(),l=Ce(g),w=f(m(l),2),_=m(w,!0);x(w),x(l);var A=f(l,2),L=f(m(A),2),j=m(L,!0);x(L),x(A),pe(z=>{F(_,n(me)),F(j,z)},[()=>n(Se).toFixed(2)]),V(d,g)};re(ia,d=>{n(G)&&d(Yr)})}var Xt=f(ia,2),la=f(m(Xt),2),Xr=m(la,!0);x(la),x(Xt);var ca=f(Xt,2),da=f(m(ca),2),Kr=m(da,!0);x(da),x(ca),x(bt);var Kt=f(bt,2),pa=f(m(Kt),2),fa=m(pa),Qt=f(fa,2),Qr=m(Qt,!0);x(Qt);var ua=f(Qt,2),Zr=f(ua,2);x(pa),x(Kt);var ha=f(Kt,2),Zt=f(ha,2),ga=f(m(Zt),2);ga.textContent=`v${xr}`;var Jt=f(ga,2),va=f(m(Jt),2),Jr=m(va,!0);x(va),x(Jt);var es=f(Jt,2),ba=f(m(es),2),en=m(ba,!0);x(ba),x(es);var ts=f(es,2),ma=f(m(ts),2),tn=m(ma,!0);x(ma),x(ts);var ss=f(ts,2),as=f(m(ss),2),sn=m(as);x(as),x(ss);var rs=f(ss,2),ns=f(m(rs),2),an=m(ns);x(ns),x(rs);var os=f(rs,2),xa=f(m(os),2),rn=m(xa,!0);x(xa),x(os);var is=f(os,2),ya=f(m(is),2),nn=m(ya,!0);x(ya),x(is);var ls=f(is,2),_a=f(m(ls),2),on=m(_a);x(_a),x(ls);var wa=f(ls,2),Aa=f(wa,2),Ge=m(Aa),ln=m(Ge);x(Ge);var mt=f(Ge,2),lt=f(mt,2),cn=m(lt);x(lt);var cs=f(lt,2);x(Aa),x(Zt);var ds=f(Zt,2),dn=m(ds);{var pn=d=>{var g=Li(),l=f(m(g),2),w=m(l);x(l);var _=f(l,2);x(g),pe(()=>F(w,`${n(We)??""} left`)),M("click",_,Vt),V(d,g)},fn=d=>{var g=Oi(),l=Ce(g),w=f(l,2);{var _=A=>{var L=Ri(),j=f(m(L),2),z=f(j,2),H=f(z,2),C=f(H,2),ee=f(C,2),k=f(ee,2);x(L),M("click",j,()=>it(10)),M("click",z,()=>it(100)),M("click",H,()=>it(1e3)),M("click",C,()=>it(1e4)),M("click",ee,()=>it(1e5)),M("click",k,()=>{y(Ie,!1)}),V(A,L)};re(w,A=>{n(Ie)&&A(_)})}M("click",l,()=>{y(Ie,!n(Ie))}),V(d,g)};re(dn,d=>{n(oe)?d(pn):d(fn,!1)})}x(ds);var He=f(ds,2),un=m(He,!0);x(He);var ps=f(He,2),fs=m(ps);O(fs,"src",`${J??""}/Control_leftend.png`),O(fs,"style",`height: ${u*q}px; flex-shrink: 0;`);var xt=f(fs,2);O(xt,"style",`
    flex-grow: 1;
    height: ${u*q}px;
    background-image: url('${J??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 20px;
  `);var us=m(xt),ka=f(m(us),2),hs=m(ka);O(hs,"style",`
            width: 40px;
            height: 40px;
            background-image: url('${J??""}/Control_lowerbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `);var gs=f(hs,2),hn=m(gs,!0);x(gs);var Ea=f(gs,2);O(Ea,"style",`
            width: 40px;
            height: 40px;
            background-image: url('${J??""}/Control_upperbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(ka),x(us);var vs=f(us,2);O(vs,"src",`${J??""}/Control_divider.png`),O(vs,"style",`height: ${u*q*.8}px; flex-shrink: 0;`);var bs=f(vs,2),Sa=f(m(bs),2),gn=m(Sa,!0);x(Sa),x(bs);var ms=f(bs,2);O(ms,"src",`${J??""}/Control_divider.png`),O(ms,"style",`height: ${u*q*.8}px; flex-shrink: 0;`);var yt=f(ms,2),xs=f(yt,2);O(xs,"src",`${J??""}/Control_divider.png`),O(xs,"style",`height: ${u*q*.8}px; flex-shrink: 0;`);var ys=f(xs,2),_s=f(ys,2),ws=f(_s,2);O(ws,"src",`${J??""}/Control_divider.png`),O(ws,"style",`height: ${u*q*.8}px; flex-shrink: 0;`);var As=f(ws,2),Ta=f(m(As),2),vn=m(Ta,!0);x(Ta),x(As);var ks=f(As,2);O(ks,"src",`${J??""}/Control_divider.png`),O(ks,"style",`height: ${u*q*.8}px; flex-shrink: 0;`);var La=f(ks,2);O(La,"style",`
        width: 50px;
        height: 50px;
        background-image: url('${J??""}/Control_menubar.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),x(xt);var Ra=f(xt,2);O(Ra,"src",`${J??""}/Control_rightend.png`),O(Ra,"style",`height: ${u*q}px; flex-shrink: 0;`),x(ps),pe((d,g,l,w,_,A,L,j,z)=>{O(bt,"style",`
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
`),F(Xr,d),F(Kr,n(Y)),F(Qr,n(Y)),F(Jr,g),F(en,l),F(tn,w),O(as,"style",`color: ${_??""};`),F(sn,`${n(Nt)??""}%`),O(ns,"style",`color: ${A??""};`),F(an,`${n(jt)??""}%`),F(rn,n(gt)),F(nn,n(zt)),F(on,`${n(Rr)??""}%`),Ge.disabled=n(ae).length===0,O(Ge,"style",`
        width: 100%;
        padding: 5px;
        background: ${(n(ae).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(n(ae).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(n(ae).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(n(ae).length>0?"1":"0.5")??""};
      `),F(ln,`Download Win Log (${n(ae).length??""})`),mt.disabled=n(ae).length===0,O(mt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(n(ae).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(n(ae).length>0?"1":"0.5")??""};
      `),O(lt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(n(ge)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(n(ge)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),F(cn,`🎵 Music: ${(n(ge)?"ON":"OFF")??""}`),cs.disabled=n(G),O(cs,"style",`
        width: 100%;
        padding: 5px;
        background: ${(n(G)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(n(G)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(n(G)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(n(G)?"0.5":"1")??""};
      `),O(He,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(n(ue)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(n(ue)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),O(He,"title",n(ue)?"Mykistä äänet":"Laita äänet päälle"),F(un,n(ue)?"🔊":"🔇"),O(ps,"style",`
  position: absolute;
  left: ${(Bt?Bt.x:b)+E}px;
  top: ${p+S}px;
  width: ${n(Ct)*Q}px;
  height: ${u*q}px;
  display: flex;
  align-items: center;
  z-index: 1000;
`),F(hn,L),F(gn,j),yt.disabled=n(oe),O(yt,"style",`
        width: 80px;
        height: 80px;
        background-image: url('${J??""}/Control_playbutton.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: ${(n(oe)?"not-allowed":"pointer")??""};
        background-color: transparent;
        opacity: ${(n(oe)?.5:1)??""};
      `),O(ys,"style",`
        width: 50px;
        height: 50px;
        background-image: url('${J??""}/${(n(oe)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),O(_s,"style",`
        width: 50px;
        height: 50px;
        background-image: url('${J??""}/${(n($t)?"Control_fastplay_select.png":"Control_fastplay_deselect.png")??""}');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),F(vn,z)},[()=>n(ve).toLocaleString(),()=>n(Ne).toLocaleString(),()=>n(je).toLocaleString(),()=>n(at).toLocaleString(),()=>parseFloat(n(Nt))>=95?"#00ff00":parseFloat(n(Nt))>=85?"#ffff00":"#ff6666",()=>parseFloat(n(jt))>=30?"#00ff00":parseFloat(n(jt))>=20?"#ffff00":"#ff6666",()=>n(Y).toFixed(2),()=>n(ve).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>n(xe).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),M("click",fa,ta),M("click",ua,ea),M("click",Zr,Dr),M("click",ha,()=>{y(De,!n(De))}),M("click",wa,Ur),M("click",Ge,Pr),M("click",mt,Ir),M("click",lt,Er),M("click",cs,$r),M("click",He,()=>{y(ue,!n(ue))}),M("click",hs,ta),M("click",Ea,ea),M("click",yt,Js),M("click",ys,()=>{y(Ie,!n(Ie))}),M("click",_s,()=>{y($t,!n($t))}),M("click",La,()=>{y(De,!n(De))}),V(t,sa),Za()}var $i=X('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),Ci=X('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function Bi(t,e){Ka(e,!1);let s=Zn(e,"isAuthenticated",12,!1),a=Bs(""),r=Bs(!1);const o="slot2024";function i(){n(a)===o?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(y(r,!0),y(a,""),setTimeout(()=>y(r,!1),3e3))}Qa(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),kn();var c=An(),h=Ce(c);{var v=p=>{var u=Ci(),b=m(u),E=f(m(b),4),S=m(E);fo(S),Xn(2),x(E);var Q=f(E,2);{var q=T=>{var D=$i();V(T,D)};re(Q,T=>{n(r)&&T(q)})}x(b),x(u),ho(S,()=>n(a),T=>y(a,T)),M("submit",E,go(i)),V(p,u)};re(h,p=>{s()||p(v)})}V(t,c),Za()}var Fi=X('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),qi=X("<!> <!>",1);function Ki(t){let e=Bs(!1);var s=qi(),a=Ce(s);Bi(a,{get isAuthenticated(){return n(e)},set isAuthenticated(i){y(e,i)},$$legacy:!0});var r=f(a,2);{var o=i=>{var c=Fi(),h=f(Ce(c),2);Ii(h,{}),V(i,c)};re(r,i=>{n(e)&&i(o)})}V(t,s)}export{or as A,ar as C,Ao as R,mo as S,ir as V,Ki as _,bo as u};
