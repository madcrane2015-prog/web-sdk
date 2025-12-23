const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./B6IfeEuX.js","./CfQEHKwl.js","./Db_meveG.js","./BdJg5JGx.js","./PpshkLFU.js","./C2GHuDhf.js","./CFLqFFhp.js","./BqVUcyT_.js"])))=>i.map(i=>d[i]);
var kn=Object.defineProperty;var En=(t,e,s)=>e in t?kn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var ie=(t,e,s)=>En(t,typeof e!="symbol"?e+"":e,s);import{f as Sn,l as Tn,t as K,g as q,a as V,i as Ln,d as Rn}from"./BJCaw-qO.js";import{i as $n}from"./CeejRTB0.js";import{R as we,T as On,Q as Pn,i as n,w as In,W as Cn,X as Ca,Y as Ba,Z as Rs,a1 as ct,a9 as Bn,_ as Qa,$ as Za,a0 as Fn,ad as Ja,O as qn,z as Mn,I as Fa,ar as $s,K as qa,as as Wn,at as Nn,au as jn,ac as zn,av as Dn,aw as Un,ax as Gn,ay as Hn,a3 as Vn,az as Yn,aA as Xn,N as Kn,aB as Qn,aC as Zn,g as Jn,n as eo,p as er,ai as B,ah as tr,y,aD as ye,f as Ce,s as p,c as m,r as x,t as pe,k as Os,a as sr,aE as to,aF as Ws}from"./BdJg5JGx.js";import{_ as Ma,p as le,i as ne}from"./Db_meveG.js";import{a as so,s as F}from"./Df-H93ww.js";import{b as ao,p as ro}from"./dtG1_1a4.js";import{b as _e}from"./DojKFwrb.js";import{e as Oe,E as I,a as no,C as Ds,Q as kt,V as Et,N as Ps,D as se,H as oo,p as Be,a0 as Qe,a1 as Fe,a2 as io,w as $e,a3 as pt,a4 as ar,a5 as Ze,a6 as Ae,a7 as St,a8 as rr,a9 as lo,aa as Is,ab as co,ac as po,y as _t}from"./CfQEHKwl.js";import{A as fo,B as Wa,G as uo,T as nr,a as ho,b as Cs}from"./PpshkLFU.js";function Na(t,e){return e}function go(t,e,s,a){for(var r=[],o=e.length,i=0;i<o;i++)jn(e[i].e,r,!0);var c=o>0&&r.length===0&&s!==null;if(c){var h=s.parentNode;zn(h),h.append(s),a.clear(),Re(t,e[0].prev,e[o-1].next)}Dn(r,()=>{for(var v=0;v<o;v++){var f=e[v];c||(a.delete(f.k),Re(t,f.prev,f.next)),Un(f.e,!c)}})}function ja(t,e,s,a,r,o=null){var i=t,c={flags:e,items:new Map,first:null};we&&On();var h=null,v=!1,f=In(()=>{var u=s();return qn(u)?u:u==null?[]:Ja(u)});Pn(()=>{var u=n(f),b=u.length;if(v&&b===0)return;v=b===0;let E=!1;if(we){var S=i.data===Cn;S!==(b===0)&&(i=Ca(),Ba(i),Rs(!1),E=!0)}if(we){for(var Z=null,U,T=0;T<b;T++){if(ct.nodeType===8&&ct.data===Bn){i=ct,E=!0,Rs(!1);break}var z=u[T],fe=a(z,T);U=or(ct,c,Z,null,z,fe,T,r,e,s),c.items.set(fe,U),Z=U}b>0&&Ba(Ca())}we||vo(u,c,i,r,e,a,s),o!==null&&(b===0?h?Qa(h):h=Za(()=>o(i)):h!==null&&Fn(h,()=>{h=null})),E&&Rs(!0),n(f)}),we&&(i=ct)}function vo(t,e,s,a,r,o,i){var c=t.length,h=e.items,v=e.first,f=v,u,b=null,E=[],S=[],Z,U,T,z;for(z=0;z<c;z+=1){if(Z=t[z],U=o(Z,z),T=h.get(U),T===void 0){var fe=f?f.e.nodes_start:s;b=or(fe,e,b,b===null?e.first:b.next,Z,U,z,a,r,i),h.set(U,b),E=[],S=[],f=b.next;continue}if(bo(T,Z,z),(T.e.f&$s)!==0&&Qa(T.e),T!==f){if(u!==void 0&&u.has(T)){if(E.length<S.length){var ke=S[0],ce;b=ke.prev;var ft=E[0],ut=E[E.length-1];for(ce=0;ce<E.length;ce+=1)za(E[ce],ke,s);for(ce=0;ce<S.length;ce+=1)u.delete(S[ce]);Re(e,ft.prev,ut.next),Re(e,b,ft),Re(e,ut,ke),f=ke,b=ut,z-=1,E=[],S=[]}else u.delete(T),za(T,f,s),Re(e,T.prev,T.next),Re(e,T,b===null?e.first:b.next),Re(e,b,T),b=T;continue}for(E=[],S=[];f!==null&&f.k!==U;)(f.e.f&$s)===0&&(u??(u=new Set)).add(f),S.push(f),f=f.next;if(f===null)continue;T=f}E.push(T),b=T,f=T.next}if(f!==null||u!==void 0){for(var de=u===void 0?[]:Ja(u);f!==null;)(f.e.f&$s)===0&&de.push(f),f=f.next;var Ee=de.length;if(Ee>0){var Vs=null;go(e,de,Vs,h)}}qa.first=e.first&&e.first.e,qa.last=b&&b.e}function bo(t,e,s,a){Nn(t.v,e),t.i=s}function or(t,e,s,a,r,o,i,c,h,v){var f=(h&Gn)!==0,u=(h&Hn)===0,b=f?u?Mn(r):Fa(r):r,E=(h&Wn)===0?i:Fa(i),S={i:E,v:b,k:o,a:null,e:null,prev:s,next:a};try{return S.e=Za(()=>c(t,b,E,v),we),S.e.prev=s&&s.e,S.e.next=a&&a.e,s===null?e.first=S:(s.next=S,s.e.next=S.e),a!==null&&(a.prev=S,a.e.prev=S.e),S}finally{}}function za(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,r=e?e.e.nodes_start:s,o=t.e.nodes_start;o!==a;){var i=Vn(o);r.before(o),o=i}}function Re(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function mo(t){if(we){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;R(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var r=t.checked;R(t,"checked",null),t.checked=r}}};t.__on_r=s,Yn(s),Sn()}}function R(t,e,s,a){var r=t.__attributes??(t.__attributes={});we&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Xn]=s),s==null?t.removeAttribute(e):typeof s!="string"&&xo(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var Da=new Map;function xo(t){var e=Da.get(t.nodeName);if(e)return e;Da.set(t.nodeName,e=[]);for(var s,a=t,r=Element.prototype;r!==a;){s=Qn(a);for(var o in s)s[o].set&&e.push(o);a=Kn(a)}return e}function yo(t,e,s=e){var a=Zn();Tn(t,"input",r=>{var o=r?t.defaultValue:t.value;if(o=Bs(t)?Fs(o):o,s(o),a&&o!==(o=e())){var i=t.selectionStart,c=t.selectionEnd;t.value=o??"",c!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(c,t.value.length))}}),(we&&t.defaultValue!==t.value||Jn(e)==null&&t.value)&&s(Bs(t)?Fs(t.value):t.value),eo(()=>{var r=e();Bs(t)&&r===Fs(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function Bs(t){var e=t.type;return e==="number"||e==="range"}function Fs(t){return t===""?null:+t}function _o(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const Ns=[];Oe.handleByNamedList(I.Environment,Ns);async function wo(t){if(!t)for(let e=0;e<Ns.length;e++){const s=Ns[e];if(s.value.test()){await s.value.load();return}}}let dt;function Ao(){if(typeof dt=="boolean")return dt;try{dt=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{dt=!1}return dt}var ir=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(ir||{});class ko{constructor(e){this.items=[],this._name=e}emit(e,s,a,r,o,i,c,h){const{name:v,items:f}=this;for(let u=0,b=f.length;u<b;u++)f[u][v](e,s,a,r,o,i,c,h);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Eo=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],lr=class cr extends no{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...Eo,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await wo(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...cr.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof Ds&&(a={container:a},s&&(kt(Et,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const r=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=r?a.clearColor:Ps.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const r=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==r&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=ir.ALL);const{clear:a,clearColor:r,target:o}=e;Ps.shared.setValue(r??this.background.colorRgba),s.renderTarget.clear(o,a,Ps.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new ko(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const r in this.runners)this.runners[r].add(a);return this}_addPipes(e,s){const a=s.reduce((r,o)=>(r[o.name]=o.value,r),{});e.forEach(r=>{const o=r.value,i=r.name,c=a[i];this.renderPipes[i]=new o(this,c?new c:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Ao())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};lr.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let dr=lr,wt;function So(t){return wt!==void 0||(wt=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??dr.defaultOptions.failIfMajorPerformanceCaveat};try{if(!se.get().getWebGLRenderingContext())return!1;let r=se.get().createCanvas().getContext("webgl",e);const o=!!((s=r==null?void 0:r.getContextAttributes())!=null&&s.stencil);if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,o}catch{return!1}})()),wt}let At;async function To(t={}){return At!==void 0||(At=await(async()=>{const e=se.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),At}const Ua=["webgl","webgpu","canvas"];async function Lo(t){let e=[];t.preference?(e.push(t.preference),Ua.forEach(o=>{o!==t.preference&&e.push(o)})):e=Ua.slice();let s,a={};for(let o=0;o<e.length;o++){const i=e[o];if(i==="webgpu"&&await To()){const{WebGPURenderer:c}=await Ma(async()=>{const{WebGPURenderer:h}=await import("./B6IfeEuX.js");return{WebGPURenderer:h}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=c,a={...t,...t.webgpu};break}else if(i==="webgl"&&So(t.failIfMajorPerformanceCaveat??dr.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:c}=await Ma(async()=>{const{WebGLRenderer:h}=await import("./BqVUcyT_.js");return{WebGLRenderer:h}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=c,a={...t,...t.webgl};break}else if(i==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const r=new s;return await r.init(a),r}const pr="8.8.1";class fr{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,pr)}static destroy(){}}fr.extension=I.Application;class Ro{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,pr)}destroy(){this._renderer=null}}Ro.extension={type:[I.WebGLSystem,I.WebGPUSystem],name:"initHook",priority:-10};const ur=class js{constructor(...e){this.stage=new Ds,e[0]!==void 0&&kt(Et,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Lo(e),js._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return kt(Et,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=js._plugins.slice(0);a.reverse(),a.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};ur._plugins=[];let hr=ur;Oe.handleByList(I.Application,hr._plugins);Oe.add(fr);class gr extends fo{constructor(e,s){super();const{textures:a,data:r}=e;Object.keys(r.pages).forEach(o=>{const i=r.pages[parseInt(o,10)],c=a[i.id];this.pages.push({texture:c})}),Object.keys(r.chars).forEach(o=>{const i=r.chars[o],{frame:c,source:h}=a[i.page],v=new oo(i.x+c.x,i.y+c.y,i.width,i.height),f=new Be({source:h,frame:v});this.chars[o]={id:o.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:f}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){Wa.install(e)}static uninstall(e){Wa.uninstall(e)}}const qs={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const u in e){const b=e[u].match(/^[a-z]+/gm)[0],E=e[u].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),S={};for(const Z in E){const U=E[Z].split("="),T=U[0],z=U[1].replace(/"/gm,""),fe=parseFloat(z),ke=isNaN(fe)?z:fe;S[T]=ke}s[b].push(S)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=s.info,[o]=s.common,[i]=s.distanceField??[];i&&(a.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),a.fontSize=parseInt(r.size,10),a.fontFamily=r.face,a.lineHeight=parseInt(o.lineHeight,10);const c=s.page;for(let u=0;u<c.length;u++)a.pages.push({id:parseInt(c[u].id,10)||0,file:c[u].file});const h={};a.baseLineOffset=a.lineHeight-parseInt(o.base,10);const v=s.char;for(let u=0;u<v.length;u++){const b=v[u],E=parseInt(b.id,10);let S=b.letter??b.char??String.fromCharCode(E);S==="space"&&(S=" "),h[E]=S,a.chars[S]={id:E,page:parseInt(b.page,10)||0,x:parseInt(b.x,10),y:parseInt(b.y,10),width:parseInt(b.width,10),height:parseInt(b.height,10),xOffset:parseInt(b.xoffset,10),yOffset:parseInt(b.yoffset,10),xAdvance:parseInt(b.xadvance,10),kerning:{}}}const f=s.kerning||[];for(let u=0;u<f.length;u++){const b=parseInt(f[u].first,10),E=parseInt(f[u].second,10),S=parseInt(f[u].amount,10);a.chars[h[E]].kerning[h[b]]=S}return a}},Ga={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const o=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),c=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let v=0;v<o.length;v++)e.pages.push({id:parseInt(o[v].getAttribute("id"),10)||0,file:o[v].getAttribute("file")});const h={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let v=0;v<i.length;v++){const f=i[v],u=parseInt(f.getAttribute("id"),10);let b=f.getAttribute("letter")??f.getAttribute("char")??String.fromCharCode(u);b==="space"&&(b=" "),h[u]=b,e.chars[b]={id:u,page:parseInt(f.getAttribute("page"),10)||0,x:parseInt(f.getAttribute("x"),10),y:parseInt(f.getAttribute("y"),10),width:parseInt(f.getAttribute("width"),10),height:parseInt(f.getAttribute("height"),10),xOffset:parseInt(f.getAttribute("xoffset"),10),yOffset:parseInt(f.getAttribute("yoffset"),10),xAdvance:parseInt(f.getAttribute("xadvance"),10),kerning:{}}}for(let v=0;v<c.length;v++){const f=parseInt(c[v].getAttribute("first"),10),u=parseInt(c[v].getAttribute("second"),10),b=parseInt(c[v].getAttribute("amount"),10);e.chars[h[u]].kerning[h[f]]=b}return e}},Ha={test(t){return typeof t=="string"&&t.includes("<font>")?Ga.test(se.get().parseXML(t)):!1},parse(t){return Ga.parse(se.get().parseXML(t))}},$o=[".xml",".fnt"],Oo={extension:{type:I.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof gr,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},Po={extension:{type:I.LoadParser,priority:Qe.Normal},name:"loadBitmapFont",test(t){return $o.includes(Fe.extname(t).toLowerCase())},async testParse(t){return qs.test(t)||Ha.test(t)},async parse(t,e,s){const a=qs.test(t)?qs.parse(t):Ha.parse(t),{src:r}=e,{pages:o}=a,i=[],c=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let u=0;u<o.length;++u){const b=o[u].file;let E=Fe.join(Fe.dirname(r),b);E=io(E,r),i.push({src:E,data:c})}const h=await s.load(i),v=i.map(u=>h[u.src]);return new gr({data:a,textures:v},r)},async load(t,e){return await(await se.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class Io{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Co={extension:{type:I.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Be),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((r,o)=>{s[a+(o===0?"":o+1)]=r})}),s}};async function vr(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Bo={extension:{type:I.DetectionParser,priority:1},test:async()=>vr("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},Va=["png","jpg","jpeg"],Fo={extension:{type:I.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...Va],remove:async t=>t.filter(e=>!Va.includes(e))},qo="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Us(t){return qo?!1:document.createElement("video").canPlayType(t)!==""}const Mo={extension:{type:I.DetectionParser,priority:0},test:async()=>Us("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},Wo={extension:{type:I.DetectionParser,priority:0},test:async()=>Us("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},No={extension:{type:I.DetectionParser,priority:0},test:async()=>Us("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},jo={extension:{type:I.DetectionParser,priority:0},test:async()=>vr("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class zo{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var i,c;let r=null,o=null;if(s.loadParser&&(o=this._parserHash[s.loadParser],o||$e(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!o){for(let h=0;h<this.parsers.length;h++){const v=this.parsers[h];if(v.load&&((i=v.test)!=null&&i.call(v,e,s,this))){o=v;break}}if(!o)return $e(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await o.load(e,s,this),a.parser=o;for(let h=0;h<this.parsers.length;h++){const v=this.parsers[h];v.parse&&v.parse&&await((c=v.testParse)==null?void 0:c.call(v,r,s,this))&&(r=await v.parse(r,s,this)||r,a.parser=v)}return r})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const r={},o=ar(e),i=pt(e,v=>({alias:[v],src:v,data:{}})),c=i.length,h=i.map(async v=>{const f=Fe.toAbsolute(v.src);if(!r[v.src])try{this.promiseCache[f]||(this.promiseCache[f]=this._getLoadPromiseAndParser(f,v)),r[v.src]=await this.promiseCache[f].promise,s&&s(++a/c)}catch(u){throw delete this.promiseCache[f],delete r[v.src],new Error(`[Loader.load] Failed to load ${f}.
${u}`)}});return await Promise.all(h),o?r[i[0].src]:r}async unload(e){const a=pt(e,r=>({alias:[r],src:r})).map(async r=>{var c,h;const o=Fe.toAbsolute(r.src),i=this.promiseCache[o];if(i){const v=await i.promise;delete this.promiseCache[o],await((h=(c=i.parser)==null?void 0:c.unload)==null?void 0:h.call(c,v,r,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&$e(`[Assets] loadParser name conflict "${s.name}"`):$e("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function Je(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const Do=".json",Uo="application/json",Go={extension:{type:I.LoadParser,priority:Qe.Low},name:"loadJson",test(t){return Je(t,Uo)||Ze(t,Do)},async load(t){return await(await se.get().fetch(t)).json()}},Ho=".txt",Vo="text/plain",Yo={name:"loadTxt",extension:{type:I.LoadParser,priority:Qe.Low,name:"loadTxt"},test(t){return Je(t,Vo)||Ze(t,Ho)},async load(t){return await(await se.get().fetch(t)).text()}},Xo=["normal","bold","100","200","300","400","500","600","700","800","900"],Ko=[".ttf",".otf",".woff",".woff2"],Qo=["font/ttf","font/otf","font/woff","font/woff2"],Zo=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Jo(t){const e=Fe.extname(t),r=Fe.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(c=>c.charAt(0).toUpperCase()+c.slice(1));let o=r.length>0;for(const c of r)if(!c.match(Zo)){o=!1;break}let i=r.join(" ");return o||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const ei=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function ti(t){return ei.test(t)?t:encodeURI(t)}const si={extension:{type:I.LoadParser,priority:Qe.Low},name:"loadWebFont",test(t){return Je(t,Qo)||Ze(t,Ko)},async load(t,e){var a,r,o;const s=se.get().getFontFaceSet();if(s){const i=[],c=((a=e.data)==null?void 0:a.family)??Jo(t),h=((o=(r=e.data)==null?void 0:r.weights)==null?void 0:o.filter(f=>Xo.includes(f)))??["normal"],v=e.data??{};for(let f=0;f<h.length;f++){const u=h[f],b=new FontFace(c,`url(${ti(t)})`,{...v,weight:u});await b.load(),s.add(b),i.push(b)}return Ae.set(`${c}-and-url`,{url:t,fontFaces:i}),i.length===1?i[0]:i}return $e("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{Ae.remove(`${e.family}-and-url`),se.get().getFontFaceSet().delete(e)})}};function Gs(t,e=1){var a;const s=(a=St.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function Hs(t,e,s){t.label=s,t._sourceOrigin=s;const a=new Be({source:t,label:s}),r=()=>{delete e.promiseCache[s],Ae.has(s)&&Ae.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&($e("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),a.once("destroy",()=>{t.destroyed||($e("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),a}const ai=".svg",ri="image/svg+xml",ni={extension:{type:I.LoadParser,priority:Qe.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return Je(t,ri)||Ze(t,ai)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?ii(t):oi(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function oi(t,e,s,a){var U,T,z;const o=await(await se.get().fetch(t)).blob(),i=URL.createObjectURL(o),c=new Image;c.src=i,c.crossOrigin=a,await c.decode(),URL.revokeObjectURL(i);const h=document.createElement("canvas"),v=h.getContext("2d"),f=((U=e.data)==null?void 0:U.resolution)||Gs(t),u=((T=e.data)==null?void 0:T.width)??c.width,b=((z=e.data)==null?void 0:z.height)??c.height;h.width=u*f,h.height=b*f,v.drawImage(c,0,0,u*f,b*f);const{parseAsGraphicsContext:E,...S}=e.data??{},Z=new rr({resource:h,alphaMode:"premultiply-alpha-on-upload",resolution:f,...S});return Hs(Z,s,t)}async function ii(t){const s=await(await se.get().fetch(t)).text(),a=new uo;return a.svg(s),a}const li=`(function () {
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
`;let Xe=null,zs=class{constructor(){Xe||(Xe=URL.createObjectURL(new Blob([li],{type:"application/javascript"}))),this.worker=new Worker(Xe)}};zs.revokeObjectURL=function(){Xe&&(URL.revokeObjectURL(Xe),Xe=null)};const ci=`(function () {
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
`;let Ke=null;class br{constructor(){Ke||(Ke=URL.createObjectURL(new Blob([ci],{type:"application/javascript"}))),this.worker=new Worker(Ke)}}br.revokeObjectURL=function(){Ke&&(URL.revokeObjectURL(Ke),Ke=null)};let Ya=0,Ms;class di{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new zs;s.addEventListener("message",a=>{s.terminate(),zs.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Ms===void 0&&(Ms=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Ms&&(this._createdWorkers++,e=new br().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((r,o)=>{this._queue.push({id:e,arguments:s,resolve:r,reject:o})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[Ya]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:Ya++,id:a})}}const Xa=new di,pi=[".jpeg",".jpg",".png",".webp",".avif"],fi=["image/jpeg","image/png","image/webp","image/avif"];async function ui(t,e){var r;const s=await se.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const mr={name:"loadTextures",extension:{type:I.LoadParser,priority:Qe.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return Je(t,fi)||Ze(t,pi)},async load(t,e,s){var o;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Xa.isImageBitmapSupported()?a=await Xa.loadImageBitmap(t,e):a=await ui(t,e):a=await new Promise((i,c)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?i(a):(a.onload=()=>{i(a)},a.onerror=c)});const r=new rr({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((o=e.data)==null?void 0:o.resolution)||Gs(t),...e.data});return Hs(r,s,t)},unload(t){t.destroy(!0)}},xr=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],hi=xr.map(t=>`video/${t.substring(1)}`);function gi(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=bi(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function vi(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",r),t.load();function a(){o(),e()}function r(i){o(),s(i)}function o(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",r)}})}function bi(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const mi={name:"loadVideo",extension:{type:I.LoadParser,name:"loadVideo"},test(t){const e=Je(t,hi),s=Ze(t,xr);return e||s},async load(t,e,s){var h,v;const a={...Is.defaultOptions,resolution:((h=e.data)==null?void 0:h.resolution)||Gs(t),alphaMode:((v=e.data)==null?void 0:v.alphaMode)||await lo(),...e.data},r=document.createElement("video"),o={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(o).forEach(f=>{const u=o[f];u!==void 0&&r.setAttribute(f,u)}),a.muted===!0&&(r.muted=!0),gi(r,t,a.crossorigin);const i=document.createElement("source");let c;if(t.startsWith("data:"))c=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const f=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();c=Is.MIME_TYPES[f]||`video/${f}`}return i.src=t,c&&(i.type=c),new Promise(f=>{const u=async()=>{const b=new Is({...a,resource:r});r.removeEventListener("canplay",u),e.data.preload&&await vi(r),f(Hs(b,s,t))};r.addEventListener("canplay",u),r.appendChild(i)})},unload(t){t.destroy(!0)}},yr={extension:{type:I.ResolveParser,name:"resolveTexture"},test:mr.test,parse:t=>{var e;return{resolution:parseFloat(((e=St.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},xi={extension:{type:I.ResolveParser,priority:-2,name:"resolveJson"},test:t=>St.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:yr.parse};class yi{constructor(){this._detections=[],this._initialized=!1,this.resolver=new St,this.loader=new zo,this.cache=Ae,this._backgroundLoader=new Io(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var o,i;if(this._initialized){$e("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let c=e.manifest;typeof c=="string"&&(c=await this.load(c)),this.resolver.addManifest(c)}const s=((o=e.texturePreference)==null?void 0:o.resolution)??1,a=typeof s=="number"?[s]:s,r=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=ar(e),r=pt(e).map(c=>{if(typeof c!="string"){const h=this.resolver.getAlias(c);return h.some(v=>!this.resolver.hasKey(v))&&this.add(c),Array.isArray(h)?h[0]:h}return this.resolver.hasKey(c)||this.add({alias:c,src:c}),c}),o=this.resolver.resolve(r),i=await this._mapLoadToResolve(o,s);return a?i[r[0]]:i}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const r=this.resolver.resolveBundle(e),o={},i=Object.keys(r);let c=0,h=0;const v=()=>{s==null||s(++c/h)},f=i.map(u=>{const b=r[u];return h+=Object.keys(b).length,this._mapLoadToResolve(b,v).then(E=>{o[u]=E})});return await Promise.all(f),a?o[e[0]]:o}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Ae.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=Ae.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(a,s);this._backgroundLoader.active=!0;const o={};return a.forEach(i=>{const c=r[i.src],h=[i.src];i.alias&&h.push(...i.alias),h.forEach(v=>{o[v]=c}),Ae.set(h,c)}),o}async unload(e){this._initialized||await this.init();const s=pt(e).map(r=>typeof r!="string"?r.src:r),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=pt(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(r=>this._unloadFromResolved(s[r]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{Ae.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,r)=>s.indexOf(a)===r),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const Ye=new yi;Oe.handleByList(I.LoadParser,Ye.loader.parsers).handleByList(I.ResolveParser,Ye.resolver.parsers).handleByList(I.CacheParser,Ye.cache.parsers).handleByList(I.DetectionParser,Ye.detections);Oe.add(Co,Fo,Bo,jo,Mo,Wo,No,Go,Yo,si,ni,mr,mi,Po,Oo,yr,xi);const Ka={loader:I.LoadParser,resolver:I.ResolveParser,cache:I.CacheParser,detection:I.DetectionParser};Oe.handle(I.Asset,t=>{const e=t.ref;Object.entries(Ka).filter(([s])=>!!e[s]).forEach(([s,a])=>Oe.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(Ka).filter(s=>!!e[s]).forEach(s=>Oe.remove(e[s]))});class _i extends co{constructor(e,s){const{text:a,resolution:r,style:o,anchor:i,width:c,height:h,roundPixels:v,...f}=e;super({...f}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=o,this.resolution=r??null,this.allowChildren=!1,this._anchor=new po({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=v??!1,c!==void 0&&(this.width=c),h!==void 0&&(this.height=h)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,r=-s*this.anchor.x;let o=0;return e.x>=r&&e.x<=r+s&&(o=-a*this.anchor.y,e.y>=o&&e.y<=o+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function wi(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(kt(Et,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class Ai extends _i{constructor(...e){const s=wi(e,"Text");super(s,nr),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=ho.measureText(this._text,this._style),{width:r,height:o}=a;e.minX=-s._x*r,e.maxX=e.minX+r,e.minY=-s._y*o,e.maxY=e.minY+o}}var ki=Ln('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-1t2q5b9"><\/script><!---->',1),Ei=K('<p style="color: red;" class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Error:</strong> </p>'),Si=K('<div class="svelte-1t2q5b9"> </div>'),Ti=K('<details class="svelte-1t2q5b9"><summary class="svelte-1t2q5b9"> </summary> <!></details>'),Li=K(`<div style="
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
  " class="svelte-1t2q5b9"><h3 class="svelte-1t2q5b9">🎰 Oma-peli Debug</h3> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Status:</strong> </p> <!> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Base:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">BG URL:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Sample:</strong> </p> <!></div>`),Ri=K('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-1t2q5b9"> </div>'),$i=K('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-1t2q5b9"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-1t2q5b9"> </span></div>'),Oi=K(`<div style="
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
      " class="svelte-1t2q5b9">Jatka pelaamista</button></div>`),Pi=K(`<div style="
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
      " class="svelte-1t2q5b9">Sulje</button></div>`),Ii=K('<div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #ff00ff; font-size: 16px; animation: pulse 1s infinite;" class="svelte-1t2q5b9"><span class="svelte-1t2q5b9">🎰 FREE SPINS:</span> <span class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-top: 1px solid #555; padding-top: 8px;" class="svelte-1t2q5b9"><span style="color: #fff; font-size: 14px;" class="svelte-1t2q5b9">Total Won:</span> <span style="color: #00ff00; font-size: 14px;" class="svelte-1t2q5b9"> </span></div>',1),Ci=K(`<div style="
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
        " class="svelte-1t2q5b9">⏹ STOP</button></div>`),Bi=K(`<div style="
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
          " class="svelte-1t2q5b9">Cancel</button></div>`),Fi=K(`<button style="
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
      " class="svelte-1t2q5b9">🔄 AUTOPLAY</button> <!>`,1),qi=K(`<!> <!> <!> <div style="
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
      " class="svelte-1t2q5b9"> </div></div> <img alt="Divider" class="svelte-1t2q5b9"> <div style="position: relative; display: flex; align-items: center; justify-content: center; flex-grow: 0.5;" class="svelte-1t2q5b9"><button title="SPIN" class="svelte-1t2q5b9"></button></div> <img alt="Divider" class="svelte-1t2q5b9"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-1t2q5b9"><button title="Autoplay" class="svelte-1t2q5b9"></button> <img alt="Status bar" style="width: 50px; height: auto;" class="svelte-1t2q5b9"></div> <img alt="Divider" class="svelte-1t2q5b9"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-1t2q5b9"><button title="Fast Play" class="svelte-1t2q5b9"></button> <img alt="Status bar" style="width: 50px; height: auto;" class="svelte-1t2q5b9"></div> <img alt="Divider" class="svelte-1t2q5b9"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-1t2q5b9"><div style="color: #00ff00; font-size: 12px; font-weight: bold;" class="svelte-1t2q5b9">WIN</div> <div style="
        color: #ffd700;
        font-size: 20px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      " class="svelte-1t2q5b9"> </div></div> <img alt="Divider" class="svelte-1t2q5b9"> <button title="Menu" class="svelte-1t2q5b9"></button></div> <img alt="Right End" class="svelte-1t2q5b9"></div>`,1);function Mi(t,e){er(e,!0);const s=13,a=1445,r=1e3,o=1.75,i=-30,c=-10,h=160,v=0,f=750,u=80,b=250,E=-230,S=-390,Z=1,U=1.1,T=.5,z=40,fe=0,ke=-40,ce=1,ft="height",de=Math.round(100*o),Ee=Math.round(de*(700/760)),_r=Ee+10,Tt=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],Ys=typeof window<"u"&&window.location.hostname.includes("github.io"),Q=Ys?"/web-sdk/oma-peli/symbols":`${_e}/symbols`,Y=Ys?"/web-sdk/oma-peli/controls":`${_e}/controls`,Lt={a:`${Q}/Blue_hotrod.jpg`,b:`${Q}/Blue_jacket.jpg`,c:`${Q}/Blue_rollers.jpg`,d:`${Q}/Blue_speakers.jpg`,e:`${Q}/Premium_blonde.jpg`,f:`${Q}/Premium_brunette.jpg`,g:`${Q}/Premium_rocker.jpg`,h:`${Q}/New_Wild.jpg`,i:`${Q}/Red_burger.jpg`,j:`${Q}/Red_fries.jpg`,k:`${Q}/Red_milkshake.jpg`,l:`${Q}/Scatter.jpg`,emptyslot:`${Q}/Emptyslot.jpg`},Rt=`${Q}/bg_base.jpg`,Xs=`${Q}/ReelFrames.png`,Ks=`${Q}/RockABillyReels_logo.png`,wr={spin:`${_e}/sounds/spin.mp3`,stop:`${_e}/sounds/stop.mp3`,win:`${_e}/sounds/win.mp3`},Ar="1.1.4";let ue=B(!0),$t={},he=null,Ot=null,Pt=null;const kr=60/130,Er=Math.round(kr*60);let ge=B(!0),Sr=B(!1),ht=B(!1),It=B(945),Ct=null;const Bt={background:`${_e}/music/rockabilly-loop.mp3`,drumHit:`${_e}/music/drum-hit.mp3`,winTheme:`${_e}/music/win-stinger.mp3`};function Qs(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(Qs,500);return}const d=window.Howl;try{he=new d({src:[Bt.background],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded"),y(Sr,!0)},onloaderror:(g,l)=>{console.warn("⚠️ Background music not found (generate with Suno AI):",l)}}),Ot=new d({src:[Bt.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Pt=new d({src:[Bt.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(g){console.error("Failed to initialize music system:",g)}}function Tr(){he&&n(ge)&&!he.playing()&&(he.play(),console.log("🎵 Background music started"))}function Lr(){he&&he.playing()&&(he.fade(he.volume(),0,500),setTimeout(()=>he.stop(),500))}function Rr(){y(ge,!n(ge)),n(ge)?Tr():Lr()}function $r(){Ot&&n(ge)&&n(ue)&&Ot.play()}function Or(){Pt&&n(ge)&&n(ue)&&Pt.play()}let gt=null,qe=null,et=null,tt=null,st=B("Initializing..."),Me=B(""),oe=[],ve=B(1e3),X=B(10);const Zs=1,Ft=100;let ae=B(!1),We=B(0),Pe=B(!1),Pr=B(0),Ie=!1,be=null,qt=!1,Ne=B(0),je=B(0),at=B(0),Mt=B(0),Wt=Os(()=>n(je)>0?(n(at)/n(je)*100).toFixed(2):"0.00"),Nt=Os(()=>n(Ne)>0?(n(Mt)/n(Ne)*100).toFixed(2):"0.00"),G=B(!1),me=B(0),Se=B(0),vt=B(0),jt=B(0),bt=B(0),zt=B(0),Ir=Os(()=>n(bt)>0?(n(zt)/n(bt)*100).toFixed(2):"0.00"),re=B(le([]));function Cr(d,g,l){const w=new Date().toLocaleString("fi-FI");let _=`
${"=".repeat(60)}
`;_+=`ROUND #${d} - ${w}
`,_+=`Mode: ${n(G)?"FREE SPINS":"BASE GAME"}
`,_+=`${"=".repeat(60)}
`,g.forEach((A,L)=>{_+=`
Win ${L+1}:
`,_+=`  Symbol: ${A.symbol} (${sa[A.symbol]})
`,_+=`  Count: ${A.count} symbols
`,_+=`  Multiplier: ${A.multiplier}x
`,_+=`  Payout: ${A.payout.toFixed(2)}
`,_+=`  Positions: [${A.positions.join(", ")}]
`}),_+=`
${"─".repeat(60)}
`,_+=`TOTAL WIN: ${l.toFixed(2)}
`,_+=`${"=".repeat(60)}
`,n(re).push(_)}function Br(){const d=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${n(re).join(`
`)}`,g=new Blob([d],{type:"text/plain"}),l=URL.createObjectURL(g),w=document.createElement("a");w.href=l,w.download=`win-log-${Date.now()}.txt`,w.click(),URL.revokeObjectURL(l)}function Fr(){y(re,le([]))}function qr(){n(G)||(y(G,!0),y(me,10),y(Se,0),ye(vt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."))}const Mr={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},Wr={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function Js(d){if(d===6)return Math.random()<.55?"h":"emptyslot";const g=n(G)?Wr:Mr,l=Math.random();let w=0;const _=Tt.filter(L=>L!=="h"),A=_.reduce((L,N)=>L+g[N],0);for(const L of _)if(w+=g[L]/A,l<w)return L;return"f"}function ea(){const d=[];for(let g=0;g<s;g++){const l=Js(g);d.push(l),ye(bt),l==="emptyslot"&&ye(zt)}return d}function ta(d){return d<3?{col:0,row:d}:d<6?{col:1,row:d-3}:d===6?{col:2,row:0}:d<10?{col:3,row:d-7}:{col:4,row:d-10}}function rt(d,g){return d===0?g:d===1?3+g:d===2?6:d===3?7+g:d===4?10+g:-1}function Nr(){if(n(G)){const d=Math.random();return d<.7?3:d<.92?5:10}else{const d=Math.random();return d<.7?1:d<.92?2:3}}const jr={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function zr(){var ee;const d=[],g=[];for(let k=0;k<s;k++)nt[k]==="l"&&g.push(k);if(g.length>=5){const k=g.length;y(me,n(me)+k),n(G)?console.log(`🎰 FREE SPINS RETRIGGERED! +${k} FREE SPINS! Total: ${n(me)}`):(y(G,!0),y(Se,0),ye(vt),console.log(`🎰 FREE SPINS TRIGGERED! ${g.length} scatters = ${k} FREE SPINS!`)),d.push({symbol:"l",count:g.length,payout:0,positions:g,multiplier:1})}const l=[];for(let k=0;k<3;k++)for(let $=0;$<3;$++)for(let O=0;O<1;O++)for(let P=0;P<3;P++)for(let W=0;W<3;W++){const M=[rt(0,k),rt(1,$),rt(2,O),rt(3,P),rt(4,W)];l.push(M)}console.log(`Generated ${l.length} possible paths (should be 81)`);const w=[];for(const k of l){const $=k.map(M=>nt[M]);if($[0]==="emptyslot"||$[0]==="l")continue;let O=null;for(let M=0;M<$.length;M++)if($[M]!=="h"&&$[M]!=="emptyslot"&&$[M]!=="l"){O=$[M];break}if(!O)continue;let P=0;const W=new Set;for(let M=0;M<k.length;M++){const Le=k[M],{col:Ve}=ta(Le),te=$[M];(te===O||te==="h")&&W.add(Ve)}for(let M=0;M<5&&W.has(M);M++)P++;if(P>=3){const Le=k[0]%3;w.push({symbol:O,length:P,path:k.slice(0,P),startRow:Le})}}const _=[],A=new Map;for(const k of w){const $=`${k.symbol}-${k.path.join(",")}`;A.has($)||A.set($,[]),A.get($).push(k)}for(const[k,$]of A.entries()){const O=Math.max(...$.map(W=>W.length)),P=$.find(W=>W.length===O);P&&_.push(P)}const L=[],N=new Map;for(const k of _)N.has(k.symbol)||N.set(k.symbol,[]),N.get(k.symbol).push(k);const j=[];for(const[k,$]of N.entries()){const O=Math.max(...$.map(W=>W.length)),P=$.filter(W=>W.length===O);j.push(...P)}const H=new Map;for(const k of j){const $=`${k.symbol}-${k.length}`;H.has($)||H.set($,[]),H.get($).push(k)}const C=j.length>0?Nr():1;for(const[k,$]of H.entries()){const O=$[0],P=(ee=jr[O.symbol])==null?void 0:ee[O.length];if(P!==void 0&&P>0){const W=new Map;for(const te of $)for(let J=0;J<te.length;J++)W.has(J)||W.set(J,new Set),W.get(J).add(te.path[J]);let M=1;for(let te=0;te<O.length;te++){const J=W.get(te);M*=J?J.size:1}const Le=P*n(X)*M*C;console.log(`  ${O.length}x${O.symbol}: ${M} ways × ${P}x × ${n(X)} bet × ${C} mult = ${Le}`);const Ve=new Set;for(const te of $)te.path.forEach(J=>Ve.add(J));L.push({symbol:O.symbol,count:O.length,payout:Le,positions:Array.from(Ve),multiplier:C})}}return d.push(...L),d}let xe=B(0),ze=B(le([])),Te=B(!1),De=B(!1);const sa={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function Dt(d){if(!n(ue)||!$t[d])return;const g=$t[d];g.currentTime=0,g.play().catch(l=>{console.warn("Äänen toisto epäonnistui:",d,l)})}function Dr(d){ot.forEach(g=>D.stage.removeChild(g)),ot=[],d.forEach(g=>{g.positions.forEach(l=>{const w=Ue[l],_=new Cs().rect(0,0,de,Ee).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});_.x=w.container.x,_.y=w.container.y,D.stage.addChild(_),ot.push(_);let A=0,L=1;const N=.05;D.ticker.add(()=>{A+=L*N,A>=.4&&(L=-1),A<=0&&(L=1),_.alpha=.5+A})})})}function Ut(){ot.forEach(d=>D.stage.removeChild(d)),ot=[]}let nt=ea(),Gt,D,Ue=[],ot=[];class Ur{constructor(g,l){ie(this,"index");ie(this,"container");ie(this,"offset",0);ie(this,"speed",0);ie(this,"targetSpeed",30);ie(this,"state","idle");ie(this,"stopDelay",0);ie(this,"bounceOffset",0);ie(this,"bounceSpeed",0);ie(this,"bounceFrames",0);this.index=g,this.container=l}start(g){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=g}startSynchronized(g){const l=60+g*Er;this.start(l)}update(){this.state!=="idle"&&(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"&&(this.speed*=.92,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,Dt("stop"),$r())),this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=_r&&(this.offset=0,nt[this.index]=Js(this.index))))}draw(){const g=this.container;g.removeChildren();const l=nt[this.index];if(!l||!gt||!gt[l])return;const w=gt[l];if(!w)return;const _=this.offset+this.bounceOffset,A=new _t(w);A.width=de,A.height=Ee,A.x=0,A.y=_,g.addChild(A)}}tr(async()=>{D=new hr,await D.init({width:a,height:r,background:"#001a33"}),Gt.appendChild(D.canvas);const d={};try{y(st,"Loading background and UI images..."),oe.push(`Loading background: ${Rt}`),oe.push(`Loading reel frames: ${Xs}`),oe.push(`Loading logo: ${Ks}`),await Ye.load([{alias:"background",src:Rt},{alias:"reelframes",src:Xs},{alias:"logo",src:Ks}]),qe=Be.from("background"),et=Be.from("reelframes"),tt=Be.from("logo"),console.log("✅ Background texture created:",qe.width,"x",qe.height),console.log("✅ Reel frames texture created:",et.width,"x",et.height),console.log("✅ Logo texture created:",tt.width,"x",tt.height),oe.push("✅ All UI images loaded"),y(st,"Loading symbols...");const l=[];for(const w of Tt)l.push({alias:w,src:Lt[w]});await Ye.load(l);for(const w of Tt){const _=Lt[w];oe.push(`Loading symbol ${w}: ${_}`);try{const A=Be.from(w);d[w]=A,console.log(`✅ Symbol ${w} loaded:`,A.width,"x",A.height),oe.push(`✅ Symbol ${w} loaded`)}catch(A){const L=`❌ Failed to load symbol ${w} from ${_}: ${A}`;throw oe.push(L),console.error(L),new Error(L)}}gt=d,y(st,"Assets loaded successfully!")}catch(l){y(Me,`Asset loading failed: ${l}`),oe.push(n(Me)),console.error(n(Me));return}console.log("Ladataan ääniefektit...");for(const[l,w]of Object.entries(wr)){const _=new Audio;_.src=w,_.preload="auto",_.volume=.7,_.load(),_.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${w} (käytetään hiljaista placeholderia)`)}),$t[l]=_}if(console.log("Taustakuva ladattu, tekstuuri:",qe),qe){const l=new _t(qe);D.renderer.width/D.renderer.height;const w=l.texture.width/l.texture.height;let _;_=D.renderer.height/l.texture.height,_*=ce,l.scale.set(_),l.x=(D.renderer.width-l.width)/2,l.y=(D.renderer.height-l.height)/2+ke,D.stage.addChild(l),console.log("Taustakuva lisätty:",ft,"mode, size:",l.width.toFixed(0),"x",l.height.toFixed(0),"image aspect:",w.toFixed(2),"scale:",_.toFixed(2),"pos:",l.x.toFixed(0),l.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(l=>({x:l.x+i,y:l.y+c})),Ue=[];for(let l=0;l<s;l++){const w=ta(l),_=w.col,A=w.row,L=300+_*(de+20),N=250+A*(Ee+15),j=l===6?L+v:L,H=l===6?N+h:N,C=new Ds;C.x=j+i,C.y=H+c;const ee=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],k=new Cs().rect(0,0,de,Ee).fill({color:ee[l],alpha:.3});k.x=C.x,k.y=C.y,D.stage.addChild(k);const $=new nr({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),O=new Ai({text:l.toString(),style:$});O.x=C.x+5,O.y=C.y+5,D.stage.addChild(O);const P=new Cs().rect(0,0,de,Ee).fill(16777215);P.x=C.x,P.y=C.y,C.mask=P,D.stage.addChild(P),D.stage.addChild(C),Ue.push(new Ur(l,C))}if(et){const l=new _t(et);l.scale.set(1),l.x=250,l.y=200,D.stage.addChild(l),Ct=l,y(It,le(l.width)),console.log("Reel frames lisätty:",l.width.toFixed(0),"x",l.height.toFixed(0)),console.log("Control panel leveys päivitetty:",n(It).toFixed(0))}if(tt){const l=new _t(tt);l.scale.set(T),l.x=(D.renderer.width-l.width)/2+z,l.y=fe,D.stage.addChild(l),console.log("Logo lisätty päällimmäiseen layeriin:",l.width.toFixed(0),"x",l.height.toFixed(0))}Qs(),D.ticker.add(Gr)});function Gr(){for(const d of Ue)d.update(),d.draw();if(!n(Te)&&!qt&&Ue.every(d=>d.state==="stopped")){qt=!0;const d=zr();console.log(`Checking wins, found ${d.length} wins`),d.length>0?(y(ze,le(d)),y(xe,le(d.reduce((g,l)=>g+l.payout,0))),Cr(n(Ne),d,n(xe)),Hr(n(xe)),y(Te,!0),y(Pr,le(Date.now())),console.log(`🎉 VOITTO! ${n(xe)} pistettä! Uusi saldo: ${n(ve)}`),console.log(`isShowingWin set to: ${n(Te)}, totalWin: ${n(xe)}`),d.forEach(g=>{const l=g.multiplier?` (${g.multiplier}x multiplier)`:"";console.log(`${g.count}x ${g.symbol} = ${g.payout} pistettä${l}`)}),Dr(d),Dt("win"),n(ae)&&!Ie&&(Ie=!0,be=window.setTimeout(()=>{n(Te)&&n(ae)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),y(Te,!1),Ut()),be=window.setTimeout(()=>{Ie=!1,Vt()},200)},1500))):(console.log("No wins found this spin"),n(ae)&&!Ie&&(Ie=!0,be=window.setTimeout(()=>{Ie=!1,Vt()},1e3))),n(G)&&n(me)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${n(Se)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${n(Se).toFixed(2)}`),y(G,!1),y(Se,0)},2e3))}}function aa(){if(n(G)&&n(me)>0)ye(me,-1),ye(jt),console.log(`🎰 FREE SPIN! Remaining: ${n(me)}`);else if(!n(G)){if(n(ve)<n(X)){alert(`Not enough credits! Balance: ${n(ve)}, Bet: ${n(X)}`),Ht();return}y(ve,n(ve)-n(X)),ye(Ne),y(je,n(je)+n(X))}be!==null&&(clearTimeout(be),be=null),y(ze,le([])),y(xe,0),y(Te,!1),qt=!1,Ut(),nt=ea(),Ue.forEach((d,g)=>{const l=Math.floor(g/3);d.startSynchronized(l)}),Dt("spin")}function Hr(d){y(ve,n(ve)+d),y(at,n(at)+d),n(G)&&y(Se,n(Se)+d),d>0&&(ye(Mt),d/n(X)>=10&&Or())}function ra(){n(X)<Ft&&y(X,le(Math.min(n(X)+1,Ft)))}function na(){n(X)>Zs&&y(X,le(Math.max(n(X)-1,Zs)))}function Vr(){y(X,Ft)}function it(d){y(ae,!0),y(We,le(d)),y(Pe,!1),Vt()}function Ht(){y(ae,!1),y(We,0),Ie=!1,be!==null&&(clearTimeout(be),be=null)}function Vt(){if(!n(ae)||n(We)<=0){Ht();return}console.log(`Autoplay: Starting spin ${n(We)} rounds left`),aa(),ye(We,-1)}function Yr(){confirm("Reset all statistics?")&&(y(Ne,0),y(je,0),y(at,0),y(Mt,0),y(vt,0),y(jt,0),y(bt,0),y(zt,0))}var oa=qi();so(d=>{var g=ki();p(Ce(g)),V(d,g)});var ia=Ce(oa);{var Xr=d=>{var g=Li(),l=p(m(g),2),w=p(m(l));x(l);var _=p(l,2);{var A=O=>{var P=Ei(),W=p(m(P));x(P),pe(()=>F(W,` ${n(Me)??""}`)),V(O,P)};ne(_,O=>{n(Me)&&O(A)})}var L=p(_,2),N=p(m(L));N.nodeValue=` ${_e??""}`,x(L);var j=p(L,2),H=p(m(j));H.nodeValue=` ${Rt??""}`,x(j);var C=p(j,2),ee=p(m(C));x(C);var k=p(C,2);{var $=O=>{var P=Ti(),W=m(P),M=m(W);x(W);var Le=p(W,2);ja(Le,17,()=>oe,Na,(Ve,te)=>{var J=Si(),An=m(J,!0);x(J),pe(()=>F(An,n(te))),V(Ve,J)}),x(P),pe(()=>F(M,`Log (${oe.length??""})`)),V(O,P)};ne(k,O=>{oe.length>0&&O($)})}x(g),pe(()=>{F(w,` ${n(st)??""}`),F(ee,` ${Lt.a??""}`)}),V(d,g)};ne(ia,d=>{(n(st)!=="Assets loaded successfully!"||n(Me))&&d(Xr)})}var la=p(ia,2);{var Kr=d=>{var g=Oi(),l=p(m(g),2),w=m(l);x(l);var _=p(l,2);ja(_,17,()=>n(ze),Na,(j,H)=>{var C=Ri(),ee=m(C);x(C),pe(k=>F(ee,`${n(H).count??""} × ${sa[n(H).symbol]??""} = ${k??""} pistettä`),[()=>n(H).payout.toFixed(2)]),V(j,C)});var A=p(_,2);{var L=j=>{var H=$i(),C=m(H),ee=m(C);x(C),x(H),pe(()=>F(ee,`✨ ${n(ze)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),V(j,H)};ne(A,j=>{n(ze).length>0&&n(ze)[0].multiplier>1&&j(L)})}var N=p(A,2);x(g),pe(()=>F(w,`${n(xe)??""} pistettä`)),q("click",N,()=>{y(Te,!1),Ut(),console.log("Win popup closed, ready for next spin")}),V(d,g)};ne(la,d=>{n(xe)>0&&n(Te)&&d(Kr)})}var ca=p(la,2);{var Qr=d=>{var g=Pi(),l=p(m(g),8);x(g),q("click",l,()=>{y(De,!1)}),V(d,g)};ne(ca,d=>{n(De)&&d(Qr)})}var da=p(ca,2);ao(da,d=>Gt=d,()=>Gt);var mt=p(da,2),pa=m(mt);{var Zr=d=>{var g=Ii(),l=Ce(g),w=p(m(l),2),_=m(w,!0);x(w),x(l);var A=p(l,2),L=p(m(A),2),N=m(L,!0);x(L),x(A),pe(j=>{F(_,n(me)),F(N,j)},[()=>n(Se).toFixed(2)]),V(d,g)};ne(pa,d=>{n(G)&&d(Zr)})}var Yt=p(pa,2),fa=p(m(Yt),2),Jr=m(fa,!0);x(fa),x(Yt);var ua=p(Yt,2),ha=p(m(ua),2),en=m(ha,!0);x(ha),x(ua),x(mt);var Xt=p(mt,2),ga=p(m(Xt),2),va=m(ga),Kt=p(va,2),tn=m(Kt,!0);x(Kt);var ba=p(Kt,2),sn=p(ba,2);x(ga),x(Xt);var ma=p(Xt,2),Qt=p(ma,2),xa=p(m(Qt),2);xa.textContent=`v${Ar}`;var Zt=p(xa,2),ya=p(m(Zt),2),an=m(ya,!0);x(ya),x(Zt);var Jt=p(Zt,2),_a=p(m(Jt),2),rn=m(_a,!0);x(_a),x(Jt);var es=p(Jt,2),wa=p(m(es),2),nn=m(wa,!0);x(wa),x(es);var ts=p(es,2),ss=p(m(ts),2),on=m(ss);x(ss),x(ts);var as=p(ts,2),rs=p(m(as),2),ln=m(rs);x(rs),x(as);var ns=p(as,2),Aa=p(m(ns),2),cn=m(Aa,!0);x(Aa),x(ns);var os=p(ns,2),ka=p(m(os),2),dn=m(ka,!0);x(ka),x(os);var is=p(os,2),Ea=p(m(is),2),pn=m(Ea);x(Ea),x(is);var Sa=p(is,2),Ta=p(Sa,2),Ge=m(Ta),fn=m(Ge);x(Ge);var xt=p(Ge,2),lt=p(xt,2),un=m(lt);x(lt);var ls=p(lt,2);x(Ta),x(Qt);var cs=p(Qt,2),hn=m(cs);{var gn=d=>{var g=Ci(),l=p(m(g),2),w=m(l);x(l);var _=p(l,2);x(g),pe(()=>F(w,`${n(We)??""} left`)),q("click",_,Ht),V(d,g)},vn=d=>{var g=Fi(),l=Ce(g),w=p(l,2);{var _=A=>{var L=Bi(),N=p(m(L),2),j=p(N,2),H=p(j,2),C=p(H,2),ee=p(C,2),k=p(ee,2);x(L),q("click",N,()=>it(10)),q("click",j,()=>it(100)),q("click",H,()=>it(1e3)),q("click",C,()=>it(1e4)),q("click",ee,()=>it(1e5)),q("click",k,()=>{y(Pe,!1)}),V(A,L)};ne(w,A=>{n(Pe)&&A(_)})}q("click",l,()=>{y(Pe,!n(Pe))}),V(d,g)};ne(hn,d=>{n(ae)?d(gn):d(vn,!1)})}x(cs);var He=p(cs,2),bn=m(He,!0);x(He);var ds=p(He,2),ps=m(ds);R(ps,"src",`${Y??""}/Control_leftend.png`),R(ps,"style",`height: ${u}px; flex-shrink: 0;`);var yt=p(ps,2);R(yt,"style",`
    flex-grow: 1;
    height: ${u}px;
    background-image: url('${Y??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 20px;
  `);var fs=m(yt),La=p(m(fs),2),us=m(La);R(us,"style",`
            width: 40px;
            height: 40px;
            background-image: url('${Y??""}/Control_lowerbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `);var hs=p(us,2),mn=m(hs,!0);x(hs);var Ra=p(hs,2);R(Ra,"style",`
            width: 40px;
            height: 40px;
            background-image: url('${Y??""}/Control_upperbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(La),x(fs);var gs=p(fs,2);R(gs,"src",`${Y??""}/Control_divider.png`),R(gs,"style",`height: ${u*.8}px; flex-shrink: 0;`);var vs=p(gs,2),$a=p(m(vs),2),xn=m($a,!0);x($a),x(vs);var bs=p(vs,2);R(bs,"src",`${Y??""}/Control_divider.png`),R(bs,"style",`height: ${u*.8}px; flex-shrink: 0;`);var ms=p(bs,2),xs=m(ms);x(ms);var ys=p(ms,2);R(ys,"src",`${Y??""}/Control_divider.png`),R(ys,"style",`height: ${u*.8}px; flex-shrink: 0;`);var _s=p(ys,2),ws=m(_s),yn=p(ws,2);x(_s);var As=p(_s,2);R(As,"src",`${Y??""}/Control_divider.png`),R(As,"style",`height: ${u*.8}px; flex-shrink: 0;`);var ks=p(As,2),Es=m(ks),_n=p(Es,2);x(ks);var Ss=p(ks,2);R(Ss,"src",`${Y??""}/Control_divider.png`),R(Ss,"style",`height: ${u*.8}px; flex-shrink: 0;`);var Ts=p(Ss,2),Oa=p(m(Ts),2),wn=m(Oa,!0);x(Oa),x(Ts);var Ls=p(Ts,2);R(Ls,"src",`${Y??""}/Control_divider.png`),R(Ls,"style",`height: ${u*.8}px; flex-shrink: 0;`);var Pa=p(Ls,2);R(Pa,"style",`
        width: 50px;
        height: 50px;
        background-image: url('${Y??""}/Control_menubar.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),x(yt);var Ia=p(yt,2);R(Ia,"src",`${Y??""}/Control_rightend.png`),R(Ia,"style",`height: ${u}px; flex-shrink: 0;`),x(ds),pe((d,g,l,w,_,A,L,N,j)=>{R(mt,"style",`
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
`),F(Jr,d),F(en,n(X)),F(tn,n(X)),F(an,g),F(rn,l),F(nn,w),R(ss,"style",`color: ${_??""};`),F(on,`${n(Wt)??""}%`),R(rs,"style",`color: ${A??""};`),F(ln,`${n(Nt)??""}%`),F(cn,n(vt)),F(dn,n(jt)),F(pn,`${n(Ir)??""}%`),Ge.disabled=n(re).length===0,R(Ge,"style",`
        width: 100%;
        padding: 5px;
        background: ${(n(re).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(n(re).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(n(re).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(n(re).length>0?"1":"0.5")??""};
      `),F(fn,`Download Win Log (${n(re).length??""})`),xt.disabled=n(re).length===0,R(xt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(n(re).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(n(re).length>0?"1":"0.5")??""};
      `),R(lt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(n(ge)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(n(ge)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),F(un,`🎵 Music: ${(n(ge)?"ON":"OFF")??""}`),ls.disabled=n(G),R(ls,"style",`
        width: 100%;
        padding: 5px;
        background: ${(n(G)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(n(G)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(n(G)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(n(G)?"0.5":"1")??""};
      `),R(He,"style",`
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
  `),R(He,"title",n(ue)?"Mykistä äänet":"Laita äänet päälle"),F(bn,n(ue)?"🔊":"🔇"),R(ds,"style",`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(
    calc(-50% + ${(Ct?Ct.x:b)+E}px),
    calc(-50% + ${f+S}px)
  ) scale(${Z}, ${U});
  transform-origin: center center;
  width: ${n(It)??""}px;
  height: ${u}px;
  display: flex;
  align-items: center;
  z-index: 1000;
`),F(mn,L),F(xn,N),xs.disabled=n(ae),R(xs,"style",`
          width: 130px;
          height: 130px;
          background-image: url('${Y??""}/Control_playbutton.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          border: none;
          cursor: ${(n(ae)?"not-allowed":"pointer")??""};
          background-color: transparent;
          opacity: ${(n(ae)?.5:1)??""};
          position: relative;
          z-index: 10;
          border-radius: 50%;
        `),R(ws,"style",`
          width: 50px;
          height: 50px;
          background-image: url('${Y??""}/${(n(ae)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),R(yn,"src",`${Y??""}/${(n(ae)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),R(Es,"style",`
          width: 50px;
          height: 50px;
          background-image: url('${Y??""}/${(n(ht)?"Control_fastplay_select.png":"Control_fastplay_deselect.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),R(_n,"src",`${Y??""}/${(n(ht)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),F(wn,j)},[()=>n(ve).toLocaleString(),()=>n(Ne).toLocaleString(),()=>n(je).toLocaleString(),()=>n(at).toLocaleString(),()=>parseFloat(n(Wt))>=95?"#00ff00":parseFloat(n(Wt))>=85?"#ffff00":"#ff6666",()=>parseFloat(n(Nt))>=30?"#00ff00":parseFloat(n(Nt))>=20?"#ffff00":"#ff6666",()=>n(X).toFixed(2),()=>n(ve).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>n(xe).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),q("click",va,na),q("click",ba,ra),q("click",sn,Vr),q("click",ma,()=>{y(De,!n(De))}),q("click",Sa,Yr),q("click",Ge,Br),q("click",xt,Fr),q("click",lt,Rr),q("click",ls,qr),q("click",He,()=>{y(ue,!n(ue))}),q("click",us,na),q("click",Ra,ra),q("click",xs,aa),q("click",ws,()=>{y(Pe,!n(Pe))}),q("click",Es,()=>{y(ht,!n(ht))}),q("click",Pa,()=>{y(De,!n(De))}),V(t,oa),sr()}var Wi=K('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),Ni=K('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function ji(t,e){er(e,!1);let s=ro(e,"isAuthenticated",12,!1),a=Ws(""),r=Ws(!1);const o="slot2024";function i(){n(a)===o?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(y(r,!0),y(a,""),setTimeout(()=>y(r,!1),3e3))}tr(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),$n();var c=Rn(),h=Ce(c);{var v=f=>{var u=Ni(),b=m(u),E=p(m(b),4),S=m(E);mo(S),to(2),x(E);var Z=p(E,2);{var U=T=>{var z=Wi();V(T,z)};ne(Z,T=>{n(r)&&T(U)})}x(b),x(u),yo(S,()=>n(a),T=>y(a,T)),q("submit",E,_o(i)),V(f,u)};ne(h,f=>{s()||f(v)})}V(t,c),sr()}var zi=K('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),Di=K("<!> <!>",1);function sl(t){let e=Ws(!1);var s=Di(),a=Ce(s);ji(a,{get isAuthenticated(){return n(e)},set isAuthenticated(i){y(e,i)},$$legacy:!0});var r=p(a,2);{var o=i=>{var c=zi(),h=p(Ce(c),2);Mi(h,{}),V(i,c)};ne(r,i=>{n(e)&&i(o)})}V(t,s)}export{dr as A,ir as C,Ro as R,ko as S,pr as V,sl as _,Ao as u};
