const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./C7jwB7aJ.js","./CfQEHKwl.js","./Db_meveG.js","./BdJg5JGx.js","./PpshkLFU.js","./C2GHuDhf.js","./Fxq1LI7-.js","./nLjBJIUF.js"])))=>i.map(i=>d[i]);
var qr=Object.defineProperty;var Wr=(t,e,s)=>e in t?qr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var ie=(t,e,s)=>Wr(t,typeof e!="symbol"?e+"":e,s);import{f as jr,l as Nr,t as Y,g as q,a as H,i as zr,d as Ur}from"./BJCaw-qO.js";import{i as Dr}from"./CeejRTB0.js";import{R as ve,T as Gr,Q as Hr,i as n,w as Vr,W as Yr,X as Js,Y as ea,Z as as,a1 as it,a9 as Xr,_ as ma,$ as va,a0 as Kr,ad as ba,O as Qr,z as Zr,I as ta,ar as rs,K as sa,as as Jr,at as en,au as tn,ac as sn,av as an,aw as rn,ax as nn,ay as on,a3 as ln,az as cn,aA as dn,N as fn,aB as pn,aC as un,g as hn,n as gn,p as ya,ai as $,ah as xa,y as _,aD as me,f as Ie,s as m,c as y,r as x,t as le,k as ns,a as _a,aE as mn,aF as us}from"./BdJg5JGx.js";import{_ as aa,p as ce,i as ne}from"./Db_meveG.js";import{a as vn,s as M}from"./Df-H93ww.js";import{b as bn,p as yn}from"./dtG1_1a4.js";import{b as ke}from"./Bjf_Q4DF.js";import{e as Te,E as O,a as xn,C as vs,Q as _t,V as wt,N as os,D as se,H as _n,p as Oe,a0 as Ve,a1 as Be,a2 as wn,w as Se,a3 as ct,a4 as wa,a5 as Ye,a6 as be,a7 as At,a8 as Aa,a9 as An,aa as is,ab as kn,ac as En,y as bt}from"./CfQEHKwl.js";import{A as Sn,B as ra,G as Tn,T as ka,a as Ln,b as ls}from"./PpshkLFU.js";function na(t,e){return e}function Rn(t,e,s,a){for(var r=[],o=e.length,i=0;i<o;i++)tn(e[i].e,r,!0);var c=o>0&&r.length===0&&s!==null;if(c){var p=s.parentNode;sn(p),p.append(s),a.clear(),Ee(t,e[0].prev,e[o-1].next)}an(r,()=>{for(var h=0;h<o;h++){var f=e[h];c||(a.delete(f.k),Ee(t,f.prev,f.next)),rn(f.e,!c)}})}function oa(t,e,s,a,r,o=null){var i=t,c={flags:e,items:new Map,first:null};ve&&Gr();var p=null,h=!1,f=Vr(()=>{var g=s();return Qr(g)?g:g==null?[]:ba(g)});Hr(()=>{var g=n(f),v=g.length;if(h&&v===0)return;h=v===0;let E=!1;if(ve){var S=i.data===Yr;S!==(v===0)&&(i=Js(),ea(i),as(!1),E=!0)}if(ve){for(var K=null,U,T=0;T<v;T++){if(it.nodeType===8&&it.data===Xr){i=it,E=!0,as(!1);break}var j=g[T],Z=a(j,T);U=Ea(it,c,K,null,j,Z,T,r,e,s),c.items.set(Z,U),K=U}v>0&&ea(Js())}ve||Pn(g,c,i,r,e,a,s),o!==null&&(v===0?p?ma(p):p=va(()=>o(i)):p!==null&&Kr(p,()=>{p=null})),E&&as(!0),n(f)}),ve&&(i=it)}function Pn(t,e,s,a,r,o,i){var c=t.length,p=e.items,h=e.first,f=h,g,v=null,E=[],S=[],K,U,T,j;for(j=0;j<c;j+=1){if(K=t[j],U=o(K,j),T=p.get(U),T===void 0){var Z=f?f.e.nodes_start:s;v=Ea(Z,e,v,v===null?e.first:v.next,K,U,j,a,r,i),p.set(U,v),E=[],S=[],f=v.next;continue}if(In(T,K,j),(T.e.f&rs)!==0&&ma(T.e),T!==f){if(g!==void 0&&g.has(T)){if(E.length<S.length){var J=S[0],de;v=J.prev;var dt=E[0],Le=E[E.length-1];for(de=0;de<E.length;de+=1)ia(E[de],J,s);for(de=0;de<S.length;de+=1)g.delete(S[de]);Ee(e,dt.prev,Le.next),Ee(e,v,dt),Ee(e,Le,J),f=J,v=Le,j-=1,E=[],S=[]}else g.delete(T),ia(T,f,s),Ee(e,T.prev,T.next),Ee(e,T,v===null?e.first:v.next),Ee(e,v,T),v=T;continue}for(E=[],S=[];f!==null&&f.k!==U;)(f.e.f&rs)===0&&(g??(g=new Set)).add(f),S.push(f),f=f.next;if(f===null)continue;T=f}E.push(T),v=T,f=T.next}if(f!==null||g!==void 0){for(var ft=g===void 0?[]:ba(g);f!==null;)(f.e.f&rs)===0&&ft.push(f),f=f.next;var V=ft.length;if(V>0){var Ke=null;Rn(e,ft,Ke,p)}}sa.first=e.first&&e.first.e,sa.last=v&&v.e}function In(t,e,s,a){en(t.v,e),t.i=s}function Ea(t,e,s,a,r,o,i,c,p,h){var f=(p&nn)!==0,g=(p&on)===0,v=f?g?Zr(r):ta(r):r,E=(p&Jr)===0?i:ta(i),S={i:E,v,k:o,a:null,e:null,prev:s,next:a};try{return S.e=va(()=>c(t,v,E,h),ve),S.e.prev=s&&s.e,S.e.next=a&&a.e,s===null?e.first=S:(s.next=S,s.e.next=S.e),a!==null&&(a.prev=S,a.e.prev=S.e),S}finally{}}function ia(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,r=e?e.e.nodes_start:s,o=t.e.nodes_start;o!==a;){var i=ln(o);r.before(o),o=i}}function Ee(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function On(t){if(ve){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;re(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var r=t.checked;re(t,"checked",null),t.checked=r}}};t.__on_r=s,cn(s),jr()}}function re(t,e,s,a){var r=t.__attributes??(t.__attributes={});ve&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[dn]=s),s==null?t.removeAttribute(e):typeof s!="string"&&Bn(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var la=new Map;function Bn(t){var e=la.get(t.nodeName);if(e)return e;la.set(t.nodeName,e=[]);for(var s,a=t,r=Element.prototype;r!==a;){s=pn(a);for(var o in s)s[o].set&&e.push(o);a=fn(a)}return e}function $n(t,e,s=e){var a=un();Nr(t,"input",r=>{var o=r?t.defaultValue:t.value;if(o=cs(t)?ds(o):o,s(o),a&&o!==(o=e())){var i=t.selectionStart,c=t.selectionEnd;t.value=o??"",c!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(c,t.value.length))}}),(ve&&t.defaultValue!==t.value||hn(e)==null&&t.value)&&s(cs(t)?ds(t.value):t.value),gn(()=>{var r=e();cs(t)&&r===ds(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function cs(t){var e=t.type;return e==="number"||e==="range"}function ds(t){return t===""?null:+t}function Fn(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const hs=[];Te.handleByNamedList(O.Environment,hs);async function Cn(t){if(!t)for(let e=0;e<hs.length;e++){const s=hs[e];if(s.value.test()){await s.value.load();return}}}let lt;function Mn(){if(typeof lt=="boolean")return lt;try{lt=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{lt=!1}return lt}var Sa=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(Sa||{});class qn{constructor(e){this.items=[],this._name=e}emit(e,s,a,r,o,i,c,p){const{name:h,items:f}=this;for(let g=0,v=f.length;g<v;g++)f[g][h](e,s,a,r,o,i,c,p);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Wn=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Ta=class La extends xn{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...Wn,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Cn(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...La.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof vs&&(a={container:a},s&&(_t(wt,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const r=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=r?a.clearColor:os.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const r=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==r&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Sa.ALL);const{clear:a,clearColor:r,target:o}=e;os.shared.setValue(r??this.background.colorRgba),s.renderTarget.clear(o,a,os.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new qn(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const r in this.runners)this.runners[r].add(a);return this}_addPipes(e,s){const a=s.reduce((r,o)=>(r[o.name]=o.value,r),{});e.forEach(r=>{const o=r.value,i=r.name,c=a[i];this.renderPipes[i]=new o(this,c?new c:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Mn())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Ta.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Ra=Ta,yt;function jn(t){return yt!==void 0||(yt=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??Ra.defaultOptions.failIfMajorPerformanceCaveat};try{if(!se.get().getWebGLRenderingContext())return!1;let r=se.get().createCanvas().getContext("webgl",e);const o=!!((s=r==null?void 0:r.getContextAttributes())!=null&&s.stencil);if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,o}catch{return!1}})()),yt}let xt;async function Nn(t={}){return xt!==void 0||(xt=await(async()=>{const e=se.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),xt}const ca=["webgl","webgpu","canvas"];async function zn(t){let e=[];t.preference?(e.push(t.preference),ca.forEach(o=>{o!==t.preference&&e.push(o)})):e=ca.slice();let s,a={};for(let o=0;o<e.length;o++){const i=e[o];if(i==="webgpu"&&await Nn()){const{WebGPURenderer:c}=await aa(async()=>{const{WebGPURenderer:p}=await import("./C7jwB7aJ.js");return{WebGPURenderer:p}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=c,a={...t,...t.webgpu};break}else if(i==="webgl"&&jn(t.failIfMajorPerformanceCaveat??Ra.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:c}=await aa(async()=>{const{WebGLRenderer:p}=await import("./nLjBJIUF.js");return{WebGLRenderer:p}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=c,a={...t,...t.webgl};break}else if(i==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const r=new s;return await r.init(a),r}const Pa="8.8.1";class Ia{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Pa)}static destroy(){}}Ia.extension=O.Application;class Un{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Pa)}destroy(){this._renderer=null}}Un.extension={type:[O.WebGLSystem,O.WebGPUSystem],name:"initHook",priority:-10};const Oa=class gs{constructor(...e){this.stage=new vs,e[0]!==void 0&&_t(wt,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await zn(e),gs._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return _t(wt,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=gs._plugins.slice(0);a.reverse(),a.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Oa._plugins=[];let Ba=Oa;Te.handleByList(O.Application,Ba._plugins);Te.add(Ia);class $a extends Sn{constructor(e,s){super();const{textures:a,data:r}=e;Object.keys(r.pages).forEach(o=>{const i=r.pages[parseInt(o,10)],c=a[i.id];this.pages.push({texture:c})}),Object.keys(r.chars).forEach(o=>{const i=r.chars[o],{frame:c,source:p}=a[i.page],h=new _n(i.x+c.x,i.y+c.y,i.width,i.height),f=new Oe({source:p,frame:h});this.chars[o]={id:o.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:f}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){ra.install(e)}static uninstall(e){ra.uninstall(e)}}const fs={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const g in e){const v=e[g].match(/^[a-z]+/gm)[0],E=e[g].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),S={};for(const K in E){const U=E[K].split("="),T=U[0],j=U[1].replace(/"/gm,""),Z=parseFloat(j),J=isNaN(Z)?j:Z;S[T]=J}s[v].push(S)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=s.info,[o]=s.common,[i]=s.distanceField??[];i&&(a.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),a.fontSize=parseInt(r.size,10),a.fontFamily=r.face,a.lineHeight=parseInt(o.lineHeight,10);const c=s.page;for(let g=0;g<c.length;g++)a.pages.push({id:parseInt(c[g].id,10)||0,file:c[g].file});const p={};a.baseLineOffset=a.lineHeight-parseInt(o.base,10);const h=s.char;for(let g=0;g<h.length;g++){const v=h[g],E=parseInt(v.id,10);let S=v.letter??v.char??String.fromCharCode(E);S==="space"&&(S=" "),p[E]=S,a.chars[S]={id:E,page:parseInt(v.page,10)||0,x:parseInt(v.x,10),y:parseInt(v.y,10),width:parseInt(v.width,10),height:parseInt(v.height,10),xOffset:parseInt(v.xoffset,10),yOffset:parseInt(v.yoffset,10),xAdvance:parseInt(v.xadvance,10),kerning:{}}}const f=s.kerning||[];for(let g=0;g<f.length;g++){const v=parseInt(f[g].first,10),E=parseInt(f[g].second,10),S=parseInt(f[g].amount,10);a.chars[p[E]].kerning[p[v]]=S}return a}},da={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const o=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),c=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let h=0;h<o.length;h++)e.pages.push({id:parseInt(o[h].getAttribute("id"),10)||0,file:o[h].getAttribute("file")});const p={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let h=0;h<i.length;h++){const f=i[h],g=parseInt(f.getAttribute("id"),10);let v=f.getAttribute("letter")??f.getAttribute("char")??String.fromCharCode(g);v==="space"&&(v=" "),p[g]=v,e.chars[v]={id:g,page:parseInt(f.getAttribute("page"),10)||0,x:parseInt(f.getAttribute("x"),10),y:parseInt(f.getAttribute("y"),10),width:parseInt(f.getAttribute("width"),10),height:parseInt(f.getAttribute("height"),10),xOffset:parseInt(f.getAttribute("xoffset"),10),yOffset:parseInt(f.getAttribute("yoffset"),10),xAdvance:parseInt(f.getAttribute("xadvance"),10),kerning:{}}}for(let h=0;h<c.length;h++){const f=parseInt(c[h].getAttribute("first"),10),g=parseInt(c[h].getAttribute("second"),10),v=parseInt(c[h].getAttribute("amount"),10);e.chars[p[g]].kerning[p[f]]=v}return e}},fa={test(t){return typeof t=="string"&&t.includes("<font>")?da.test(se.get().parseXML(t)):!1},parse(t){return da.parse(se.get().parseXML(t))}},Dn=[".xml",".fnt"],Gn={extension:{type:O.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof $a,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},Hn={extension:{type:O.LoadParser,priority:Ve.Normal},name:"loadBitmapFont",test(t){return Dn.includes(Be.extname(t).toLowerCase())},async testParse(t){return fs.test(t)||fa.test(t)},async parse(t,e,s){const a=fs.test(t)?fs.parse(t):fa.parse(t),{src:r}=e,{pages:o}=a,i=[],c=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let g=0;g<o.length;++g){const v=o[g].file;let E=Be.join(Be.dirname(r),v);E=wn(E,r),i.push({src:E,data:c})}const p=await s.load(i),h=i.map(g=>p[g.src]);return new $a({data:a,textures:h},r)},async load(t,e){return await(await se.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class Vn{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Yn={extension:{type:O.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Oe),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((r,o)=>{s[a+(o===0?"":o+1)]=r})}),s}};async function Fa(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Xn={extension:{type:O.DetectionParser,priority:1},test:async()=>Fa("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},pa=["png","jpg","jpeg"],Kn={extension:{type:O.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...pa],remove:async t=>t.filter(e=>!pa.includes(e))},Qn="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function bs(t){return Qn?!1:document.createElement("video").canPlayType(t)!==""}const Zn={extension:{type:O.DetectionParser,priority:0},test:async()=>bs("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},Jn={extension:{type:O.DetectionParser,priority:0},test:async()=>bs("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},eo={extension:{type:O.DetectionParser,priority:0},test:async()=>bs("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},to={extension:{type:O.DetectionParser,priority:0},test:async()=>Fa("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class so{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var i,c;let r=null,o=null;if(s.loadParser&&(o=this._parserHash[s.loadParser],o||Se(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!o){for(let p=0;p<this.parsers.length;p++){const h=this.parsers[p];if(h.load&&((i=h.test)!=null&&i.call(h,e,s,this))){o=h;break}}if(!o)return Se(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await o.load(e,s,this),a.parser=o;for(let p=0;p<this.parsers.length;p++){const h=this.parsers[p];h.parse&&h.parse&&await((c=h.testParse)==null?void 0:c.call(h,r,s,this))&&(r=await h.parse(r,s,this)||r,a.parser=h)}return r})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const r={},o=wa(e),i=ct(e,h=>({alias:[h],src:h,data:{}})),c=i.length,p=i.map(async h=>{const f=Be.toAbsolute(h.src);if(!r[h.src])try{this.promiseCache[f]||(this.promiseCache[f]=this._getLoadPromiseAndParser(f,h)),r[h.src]=await this.promiseCache[f].promise,s&&s(++a/c)}catch(g){throw delete this.promiseCache[f],delete r[h.src],new Error(`[Loader.load] Failed to load ${f}.
${g}`)}});return await Promise.all(p),o?r[i[0].src]:r}async unload(e){const a=ct(e,r=>({alias:[r],src:r})).map(async r=>{var c,p;const o=Be.toAbsolute(r.src),i=this.promiseCache[o];if(i){const h=await i.promise;delete this.promiseCache[o],await((p=(c=i.parser)==null?void 0:c.unload)==null?void 0:p.call(c,h,r,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&Se(`[Assets] loadParser name conflict "${s.name}"`):Se("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function Xe(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const ao=".json",ro="application/json",no={extension:{type:O.LoadParser,priority:Ve.Low},name:"loadJson",test(t){return Xe(t,ro)||Ye(t,ao)},async load(t){return await(await se.get().fetch(t)).json()}},oo=".txt",io="text/plain",lo={name:"loadTxt",extension:{type:O.LoadParser,priority:Ve.Low,name:"loadTxt"},test(t){return Xe(t,io)||Ye(t,oo)},async load(t){return await(await se.get().fetch(t)).text()}},co=["normal","bold","100","200","300","400","500","600","700","800","900"],fo=[".ttf",".otf",".woff",".woff2"],po=["font/ttf","font/otf","font/woff","font/woff2"],uo=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function ho(t){const e=Be.extname(t),r=Be.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(c=>c.charAt(0).toUpperCase()+c.slice(1));let o=r.length>0;for(const c of r)if(!c.match(uo)){o=!1;break}let i=r.join(" ");return o||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const go=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function mo(t){return go.test(t)?t:encodeURI(t)}const vo={extension:{type:O.LoadParser,priority:Ve.Low},name:"loadWebFont",test(t){return Xe(t,po)||Ye(t,fo)},async load(t,e){var a,r,o;const s=se.get().getFontFaceSet();if(s){const i=[],c=((a=e.data)==null?void 0:a.family)??ho(t),p=((o=(r=e.data)==null?void 0:r.weights)==null?void 0:o.filter(f=>co.includes(f)))??["normal"],h=e.data??{};for(let f=0;f<p.length;f++){const g=p[f],v=new FontFace(c,`url(${mo(t)})`,{...h,weight:g});await v.load(),s.add(v),i.push(v)}return be.set(`${c}-and-url`,{url:t,fontFaces:i}),i.length===1?i[0]:i}return Se("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{be.remove(`${e.family}-and-url`),se.get().getFontFaceSet().delete(e)})}};function ys(t,e=1){var a;const s=(a=At.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function xs(t,e,s){t.label=s,t._sourceOrigin=s;const a=new Oe({source:t,label:s}),r=()=>{delete e.promiseCache[s],be.has(s)&&be.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(Se("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),a.once("destroy",()=>{t.destroyed||(Se("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),a}const bo=".svg",yo="image/svg+xml",xo={extension:{type:O.LoadParser,priority:Ve.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return Xe(t,yo)||Ye(t,bo)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?wo(t):_o(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function _o(t,e,s,a){var U,T,j;const o=await(await se.get().fetch(t)).blob(),i=URL.createObjectURL(o),c=new Image;c.src=i,c.crossOrigin=a,await c.decode(),URL.revokeObjectURL(i);const p=document.createElement("canvas"),h=p.getContext("2d"),f=((U=e.data)==null?void 0:U.resolution)||ys(t),g=((T=e.data)==null?void 0:T.width)??c.width,v=((j=e.data)==null?void 0:j.height)??c.height;p.width=g*f,p.height=v*f,h.drawImage(c,0,0,g*f,v*f);const{parseAsGraphicsContext:E,...S}=e.data??{},K=new Aa({resource:p,alphaMode:"premultiply-alpha-on-upload",resolution:f,...S});return xs(K,s,t)}async function wo(t){const s=await(await se.get().fetch(t)).text(),a=new Tn;return a.svg(s),a}const Ao=`(function () {
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
`;let Ge=null,ms=class{constructor(){Ge||(Ge=URL.createObjectURL(new Blob([Ao],{type:"application/javascript"}))),this.worker=new Worker(Ge)}};ms.revokeObjectURL=function(){Ge&&(URL.revokeObjectURL(Ge),Ge=null)};const ko=`(function () {
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
`;let He=null;class Ca{constructor(){He||(He=URL.createObjectURL(new Blob([ko],{type:"application/javascript"}))),this.worker=new Worker(He)}}Ca.revokeObjectURL=function(){He&&(URL.revokeObjectURL(He),He=null)};let ua=0,ps;class Eo{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new ms;s.addEventListener("message",a=>{s.terminate(),ms.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){ps===void 0&&(ps=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<ps&&(this._createdWorkers++,e=new Ca().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((r,o)=>{this._queue.push({id:e,arguments:s,resolve:r,reject:o})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[ua]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:ua++,id:a})}}const ha=new Eo,So=[".jpeg",".jpg",".png",".webp",".avif"],To=["image/jpeg","image/png","image/webp","image/avif"];async function Lo(t,e){var r;const s=await se.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const Ma={name:"loadTextures",extension:{type:O.LoadParser,priority:Ve.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return Xe(t,To)||Ye(t,So)},async load(t,e,s){var o;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await ha.isImageBitmapSupported()?a=await ha.loadImageBitmap(t,e):a=await Lo(t,e):a=await new Promise((i,c)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?i(a):(a.onload=()=>{i(a)},a.onerror=c)});const r=new Aa({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((o=e.data)==null?void 0:o.resolution)||ys(t),...e.data});return xs(r,s,t)},unload(t){t.destroy(!0)}},qa=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Ro=qa.map(t=>`video/${t.substring(1)}`);function Po(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=Oo(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function Io(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",r),t.load();function a(){o(),e()}function r(i){o(),s(i)}function o(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",r)}})}function Oo(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const Bo={name:"loadVideo",extension:{type:O.LoadParser,name:"loadVideo"},test(t){const e=Xe(t,Ro),s=Ye(t,qa);return e||s},async load(t,e,s){var p,h;const a={...is.defaultOptions,resolution:((p=e.data)==null?void 0:p.resolution)||ys(t),alphaMode:((h=e.data)==null?void 0:h.alphaMode)||await An(),...e.data},r=document.createElement("video"),o={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(o).forEach(f=>{const g=o[f];g!==void 0&&r.setAttribute(f,g)}),a.muted===!0&&(r.muted=!0),Po(r,t,a.crossorigin);const i=document.createElement("source");let c;if(t.startsWith("data:"))c=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const f=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();c=is.MIME_TYPES[f]||`video/${f}`}return i.src=t,c&&(i.type=c),new Promise(f=>{const g=async()=>{const v=new is({...a,resource:r});r.removeEventListener("canplay",g),e.data.preload&&await Io(r),f(xs(v,s,t))};r.addEventListener("canplay",g),r.appendChild(i)})},unload(t){t.destroy(!0)}},Wa={extension:{type:O.ResolveParser,name:"resolveTexture"},test:Ma.test,parse:t=>{var e;return{resolution:parseFloat(((e=At.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},$o={extension:{type:O.ResolveParser,priority:-2,name:"resolveJson"},test:t=>At.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:Wa.parse};class Fo{constructor(){this._detections=[],this._initialized=!1,this.resolver=new At,this.loader=new so,this.cache=be,this._backgroundLoader=new Vn(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var o,i;if(this._initialized){Se("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let c=e.manifest;typeof c=="string"&&(c=await this.load(c)),this.resolver.addManifest(c)}const s=((o=e.texturePreference)==null?void 0:o.resolution)??1,a=typeof s=="number"?[s]:s,r=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=wa(e),r=ct(e).map(c=>{if(typeof c!="string"){const p=this.resolver.getAlias(c);return p.some(h=>!this.resolver.hasKey(h))&&this.add(c),Array.isArray(p)?p[0]:p}return this.resolver.hasKey(c)||this.add({alias:c,src:c}),c}),o=this.resolver.resolve(r),i=await this._mapLoadToResolve(o,s);return a?i[r[0]]:i}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const r=this.resolver.resolveBundle(e),o={},i=Object.keys(r);let c=0,p=0;const h=()=>{s==null||s(++c/p)},f=i.map(g=>{const v=r[g];return p+=Object.keys(v).length,this._mapLoadToResolve(v,h).then(E=>{o[g]=E})});return await Promise.all(f),a?o[e[0]]:o}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return be.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=be.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(a,s);this._backgroundLoader.active=!0;const o={};return a.forEach(i=>{const c=r[i.src],p=[i.src];i.alias&&p.push(...i.alias),p.forEach(h=>{o[h]=c}),be.set(p,c)}),o}async unload(e){this._initialized||await this.init();const s=ct(e).map(r=>typeof r!="string"?r.src:r),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=ct(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(r=>this._unloadFromResolved(s[r]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{be.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,r)=>s.indexOf(a)===r),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const De=new Fo;Te.handleByList(O.LoadParser,De.loader.parsers).handleByList(O.ResolveParser,De.resolver.parsers).handleByList(O.CacheParser,De.cache.parsers).handleByList(O.DetectionParser,De.detections);Te.add(Yn,Kn,Xn,to,Zn,Jn,eo,no,lo,vo,xo,Ma,Bo,Hn,Gn,Wa,$o);const ga={loader:O.LoadParser,resolver:O.ResolveParser,cache:O.CacheParser,detection:O.DetectionParser};Te.handle(O.Asset,t=>{const e=t.ref;Object.entries(ga).filter(([s])=>!!e[s]).forEach(([s,a])=>Te.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(ga).filter(s=>!!e[s]).forEach(s=>Te.remove(e[s]))});class Co extends kn{constructor(e,s){const{text:a,resolution:r,style:o,anchor:i,width:c,height:p,roundPixels:h,...f}=e;super({...f}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=o,this.resolution=r??null,this.allowChildren=!1,this._anchor=new En({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=h??!1,c!==void 0&&(this.width=c),p!==void 0&&(this.height=p)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,r=-s*this.anchor.x;let o=0;return e.x>=r&&e.x<=r+s&&(o=-a*this.anchor.y,e.y>=o&&e.y<=o+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function Mo(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(_t(wt,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class qo extends Co{constructor(...e){const s=Mo(e,"Text");super(s,ka),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=Ln.measureText(this._text,this._style),{width:r,height:o}=a;e.minX=-s._x*r,e.maxX=e.minX+r,e.minY=-s._y*o,e.maxY=e.minY+o}}var Wo=zr('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-1t2q5b9"><\/script><!---->',1),jo=Y('<p style="color: red;" class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Error:</strong> </p>'),No=Y('<div class="svelte-1t2q5b9"> </div>'),zo=Y('<details class="svelte-1t2q5b9"><summary class="svelte-1t2q5b9"> </summary> <!></details>'),Uo=Y(`<div style="
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
  " class="svelte-1t2q5b9"><h3 class="svelte-1t2q5b9">🎰 Oma-peli Debug</h3> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Status:</strong> </p> <!> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Base:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">BG URL:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Sample:</strong> </p> <!></div>`),Do=Y('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-1t2q5b9"> </div>'),Go=Y('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-1t2q5b9"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-1t2q5b9"> </span></div>'),Ho=Y(`<div style="
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
      " class="svelte-1t2q5b9">Jatka pelaamista</button></div>`),Vo=Y(`<div style="
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
      " class="svelte-1t2q5b9">Sulje</button></div>`),Yo=Y('<div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #ff00ff; font-size: 16px; animation: pulse 1s infinite;" class="svelte-1t2q5b9"><span class="svelte-1t2q5b9">🎰 FREE SPINS:</span> <span class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-top: 1px solid #555; padding-top: 8px;" class="svelte-1t2q5b9"><span style="color: #fff; font-size: 14px;" class="svelte-1t2q5b9">Total Won:</span> <span style="color: #00ff00; font-size: 14px;" class="svelte-1t2q5b9"> </span></div>',1),Xo=Y(`<div style="
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
        " class="svelte-1t2q5b9">⏹ STOP</button></div>`),Ko=Y(`<div style="
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
          " class="svelte-1t2q5b9">Cancel</button></div>`),Qo=Y(`<button style="
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
      " class="svelte-1t2q5b9">🔄 AUTOPLAY</button> <!>`,1),Zo=Y(`<!> <!> <!> <div style="
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
" class="svelte-1t2q5b9"><!></div> <button class="svelte-1t2q5b9"> </button> <button title="SPIN" class="svelte-1t2q5b9"></button>`,1);function Jo(t,e){ya(e,!0);const s=13,a=1445,r=1e3,o=1.75,i=-30,c=-10,p=160,h=0,f=720,g=750,v=.8,E=50,S=30,K=-40,U=1,T="height",Z=Math.round(100*o),J=Math.round(Z*(700/760)),dt=J+10,Le=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],V=typeof window<"u"&&window.location.hostname.includes("github.io")?"/web-sdk/oma-peli/symbols":`${ke}/symbols`,Ke={a:`${V}/Blue_hotrod.jpg`,b:`${V}/Blue_jacket.jpg`,c:`${V}/Blue_rollers.jpg`,d:`${V}/Blue_speakers.jpg`,e:`${V}/Premium_blonde.jpg`,f:`${V}/Premium_brunette.jpg`,g:`${V}/Premium_rocker.jpg`,h:`${V}/New_Wild.jpg`,i:`${V}/Red_burger.jpg`,j:`${V}/Red_fries.jpg`,k:`${V}/Red_milkshake.jpg`,l:`${V}/Scatter.jpg`,emptyslot:`${V}/Emptyslot.jpg`},kt=`${V}/bg_base.jpg`,_s=`${V}/ReelFrames.png`,ws=`${V}/RockABillyReels_logo.png`,ja={spin:`${ke}/sounds/spin.mp3`,stop:`${ke}/sounds/stop.mp3`,win:`${ke}/sounds/win.mp3`},Na="1.0.9";let fe=$(!0),Et={},pe=null,St=null,Tt=null;const za=60/130,Ua=Math.round(za*60);let ue=$(!0),Da=$(!1);const Lt={background:`${ke}/music/rockabilly-loop.mp3`,drumHit:`${ke}/music/drum-hit.mp3`,winTheme:`${ke}/music/win-stinger.mp3`};function As(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(As,500);return}const d=window.Howl;try{pe=new d({src:[Lt.background],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded"),_(Da,!0)},onloaderror:(u,l)=>{console.warn("⚠️ Background music not found (generate with Suno AI):",l)}}),St=new d({src:[Lt.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Tt=new d({src:[Lt.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(u){console.error("Failed to initialize music system:",u)}}function Ga(){pe&&n(ue)&&!pe.playing()&&(pe.play(),console.log("🎵 Background music started"))}function Ha(){pe&&pe.playing()&&(pe.fade(pe.volume(),0,500),setTimeout(()=>pe.stop(),500))}function Va(){_(ue,!n(ue)),n(ue)?Ga():Ha()}function Ya(){St&&n(ue)&&n(fe)&&St.play()}function Xa(){Tt&&n(ue)&&n(fe)&&Tt.play()}let pt=null,$e=null,Qe=null,Ze=null,Je=$("Initializing..."),Fe=$(""),oe=[],ye=$(1e3),X=$(10);const ks=1,Rt=100;let Re=$(!1),Ce=$(0),et=$(!1),Ka=$(0),Pe=!1,he=null,Pt=!1,Me=$(0),qe=$(0),tt=$(0),It=$(0),Ot=ns(()=>n(qe)>0?(n(tt)/n(qe)*100).toFixed(2):"0.00"),Bt=ns(()=>n(Me)>0?(n(It)/n(Me)*100).toFixed(2):"0.00"),D=$(!1),ge=$(0),xe=$(0),ut=$(0),$t=$(0),ht=$(0),Ft=$(0),Qa=ns(()=>n(ht)>0?(n(Ft)/n(ht)*100).toFixed(2):"0.00"),ae=$(ce([]));function Za(d,u,l){const w=new Date().toLocaleString("fi-FI");let b=`
${"=".repeat(60)}
`;b+=`ROUND #${d} - ${w}
`,b+=`Mode: ${n(D)?"FREE SPINS":"BASE GAME"}
`,b+=`${"=".repeat(60)}
`,u.forEach((A,L)=>{b+=`
Win ${L+1}:
`,b+=`  Symbol: ${A.symbol} (${Ls[A.symbol]})
`,b+=`  Count: ${A.count} symbols
`,b+=`  Multiplier: ${A.multiplier}x
`,b+=`  Payout: ${A.payout.toFixed(2)}
`,b+=`  Positions: [${A.positions.join(", ")}]
`}),b+=`
${"─".repeat(60)}
`,b+=`TOTAL WIN: ${l.toFixed(2)}
`,b+=`${"=".repeat(60)}
`,n(ae).push(b)}function Ja(){const d=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${n(ae).join(`
`)}`,u=new Blob([d],{type:"text/plain"}),l=URL.createObjectURL(u),w=document.createElement("a");w.href=l,w.download=`win-log-${Date.now()}.txt`,w.click(),URL.revokeObjectURL(l)}function er(){_(ae,ce([]))}function tr(){n(D)||(_(D,!0),_(ge,10),_(xe,0),me(ut),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."))}const sr={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},ar={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function Es(d){if(d===6)return Math.random()<.55?"h":"emptyslot";const u=n(D)?ar:sr,l=Math.random();let w=0;const b=Le.filter(L=>L!=="h"),A=b.reduce((L,N)=>L+u[N],0);for(const L of b)if(w+=u[L]/A,l<w)return L;return"f"}function Ss(){const d=[];for(let u=0;u<s;u++){const l=Es(u);d.push(l),me(ht),l==="emptyslot"&&me(Ft)}return d}function Ts(d){return d<3?{col:0,row:d}:d<6?{col:1,row:d-3}:d===6?{col:2,row:0}:d<10?{col:3,row:d-7}:{col:4,row:d-10}}function st(d,u){return d===0?u:d===1?3+u:d===2?6:d===3?7+u:d===4?10+u:-1}function rr(){if(n(D)){const d=Math.random();return d<.7?3:d<.92?5:10}else{const d=Math.random();return d<.7?1:d<.92?2:3}}const nr={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function or(){var ee;const d=[],u=[];for(let k=0;k<s;k++)at[k]==="l"&&u.push(k);if(u.length>=5){const k=u.length;_(ge,n(ge)+k),n(D)?console.log(`🎰 FREE SPINS RETRIGGERED! +${k} FREE SPINS! Total: ${n(ge)}`):(_(D,!0),_(xe,0),me(ut),console.log(`🎰 FREE SPINS TRIGGERED! ${u.length} scatters = ${k} FREE SPINS!`)),d.push({symbol:"l",count:u.length,payout:0,positions:u,multiplier:1})}const l=[];for(let k=0;k<3;k++)for(let R=0;R<3;R++)for(let P=0;P<1;P++)for(let I=0;I<3;I++)for(let C=0;C<3;C++){const F=[st(0,k),st(1,R),st(2,P),st(3,I),st(4,C)];l.push(F)}console.log(`Generated ${l.length} possible paths (should be 81)`);const w=[];for(const k of l){const R=k.map(F=>at[F]);if(R[0]==="emptyslot"||R[0]==="l")continue;let P=null;for(let F=0;F<R.length;F++)if(R[F]!=="h"&&R[F]!=="emptyslot"&&R[F]!=="l"){P=R[F];break}if(!P)continue;let I=0;const C=new Set;for(let F=0;F<k.length;F++){const Ae=k[F],{col:Ue}=Ts(Ae),te=R[F];(te===P||te==="h")&&C.add(Ue)}for(let F=0;F<5&&C.has(F);F++)I++;if(I>=3){const Ae=k[0]%3;w.push({symbol:P,length:I,path:k.slice(0,I),startRow:Ae})}}const b=[],A=new Map;for(const k of w){const R=`${k.symbol}-${k.path.join(",")}`;A.has(R)||A.set(R,[]),A.get(R).push(k)}for(const[k,R]of A.entries()){const P=Math.max(...R.map(C=>C.length)),I=R.find(C=>C.length===P);I&&b.push(I)}const L=[],N=new Map;for(const k of b)N.has(k.symbol)||N.set(k.symbol,[]),N.get(k.symbol).push(k);const z=[];for(const[k,R]of N.entries()){const P=Math.max(...R.map(C=>C.length)),I=R.filter(C=>C.length===P);z.push(...I)}const G=new Map;for(const k of z){const R=`${k.symbol}-${k.length}`;G.has(R)||G.set(R,[]),G.get(R).push(k)}const B=z.length>0?rr():1;for(const[k,R]of G.entries()){const P=R[0],I=(ee=nr[P.symbol])==null?void 0:ee[P.length];if(I!==void 0&&I>0){const C=new Map;for(const te of R)for(let Q=0;Q<te.length;Q++)C.has(Q)||C.set(Q,new Set),C.get(Q).add(te.path[Q]);let F=1;for(let te=0;te<P.length;te++){const Q=C.get(te);F*=Q?Q.size:1}const Ae=I*n(X)*F*B;console.log(`  ${P.length}x${P.symbol}: ${F} ways × ${I}x × ${n(X)} bet × ${B} mult = ${Ae}`);const Ue=new Set;for(const te of R)te.path.forEach(Q=>Ue.add(Q));L.push({symbol:P.symbol,count:P.length,payout:Ae,positions:Array.from(Ue),multiplier:B})}}return d.push(...L),d}let _e=$(0),We=$(ce([])),we=$(!1),gt=$(!1);const Ls={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function Ct(d){if(!n(fe)||!Et[d])return;const u=Et[d];u.currentTime=0,u.play().catch(l=>{console.warn("Äänen toisto epäonnistui:",d,l)})}function ir(d){rt.forEach(u=>W.stage.removeChild(u)),rt=[],d.forEach(u=>{u.positions.forEach(l=>{const w=je[l],b=new ls().rect(0,0,Z,J).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});b.x=w.container.x,b.y=w.container.y,W.stage.addChild(b),rt.push(b);let A=0,L=1;const N=.05;W.ticker.add(()=>{A+=L*N,A>=.4&&(L=-1),A<=0&&(L=1),b.alpha=.5+A})})})}function Mt(){rt.forEach(d=>W.stage.removeChild(d)),rt=[]}let at=Ss(),qt,W,je=[],rt=[];class lr{constructor(u,l){ie(this,"index");ie(this,"container");ie(this,"offset",0);ie(this,"speed",0);ie(this,"targetSpeed",30);ie(this,"state","idle");ie(this,"stopDelay",0);ie(this,"bounceOffset",0);ie(this,"bounceSpeed",0);ie(this,"bounceFrames",0);this.index=u,this.container=l}start(u){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=u}startSynchronized(u){const l=60+u*Ua;this.start(l)}update(){this.state!=="idle"&&(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"&&(this.speed*=.92,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,Ct("stop"),Ya())),this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=dt&&(this.offset=0,at[this.index]=Es(this.index))))}draw(){const u=this.container;u.removeChildren();const l=at[this.index];if(!l||!pt||!pt[l])return;const w=pt[l];if(!w)return;const b=this.offset+this.bounceOffset,A=new bt(w);A.width=Z,A.height=J,A.x=0,A.y=b,u.addChild(A)}}xa(async()=>{W=new Ba,await W.init({width:a,height:r,background:"#001a33"}),qt.appendChild(W.canvas);const d={};try{_(Je,"Loading background and UI images..."),oe.push(`Loading background: ${kt}`),oe.push(`Loading reel frames: ${_s}`),oe.push(`Loading logo: ${ws}`),await De.load([{alias:"background",src:kt},{alias:"reelframes",src:_s},{alias:"logo",src:ws}]),$e=Oe.from("background"),Qe=Oe.from("reelframes"),Ze=Oe.from("logo"),console.log("✅ Background texture created:",$e.width,"x",$e.height),console.log("✅ Reel frames texture created:",Qe.width,"x",Qe.height),console.log("✅ Logo texture created:",Ze.width,"x",Ze.height),oe.push("✅ All UI images loaded"),_(Je,"Loading symbols...");const l=[];for(const w of Le)l.push({alias:w,src:Ke[w]});await De.load(l);for(const w of Le){const b=Ke[w];oe.push(`Loading symbol ${w}: ${b}`);try{const A=Oe.from(w);d[w]=A,console.log(`✅ Symbol ${w} loaded:`,A.width,"x",A.height),oe.push(`✅ Symbol ${w} loaded`)}catch(A){const L=`❌ Failed to load symbol ${w} from ${b}: ${A}`;throw oe.push(L),console.error(L),new Error(L)}}pt=d,_(Je,"Assets loaded successfully!")}catch(l){_(Fe,`Asset loading failed: ${l}`),oe.push(n(Fe)),console.error(n(Fe));return}console.log("Ladataan ääniefektit...");for(const[l,w]of Object.entries(ja)){const b=new Audio;b.src=w,b.preload="auto",b.volume=.7,b.load(),b.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${w} (käytetään hiljaista placeholderia)`)}),Et[l]=b}if(console.log("Taustakuva ladattu, tekstuuri:",$e),$e){const l=new bt($e);W.renderer.width/W.renderer.height;const w=l.texture.width/l.texture.height;let b;b=W.renderer.height/l.texture.height,b*=U,l.scale.set(b),l.x=(W.renderer.width-l.width)/2,l.y=(W.renderer.height-l.height)/2+K,W.stage.addChild(l),console.log("Taustakuva lisätty:",T,"mode, size:",l.width.toFixed(0),"x",l.height.toFixed(0),"image aspect:",w.toFixed(2),"scale:",b.toFixed(2),"pos:",l.x.toFixed(0),l.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(l=>({x:l.x+i,y:l.y+c})),je=[];for(let l=0;l<s;l++){const w=Ts(l),b=w.col,A=w.row,L=300+b*(Z+20),N=250+A*(J+15),z=l===6?L+h:L,G=l===6?N+p:N,B=new vs;B.x=z+i,B.y=G+c;const ee=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],k=new ls().rect(0,0,Z,J).fill({color:ee[l],alpha:.3});k.x=B.x,k.y=B.y,W.stage.addChild(k);const R=new ka({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),P=new qo({text:l.toString(),style:R});P.x=B.x+5,P.y=B.y+5,W.stage.addChild(P);const I=new ls().rect(0,0,Z,J).fill(16777215);I.x=B.x,I.y=B.y,B.mask=I,W.stage.addChild(I),W.stage.addChild(B),je.push(new lr(l,B))}if(Qe){const l=new bt(Qe);l.scale.set(1),l.x=250,l.y=200,W.stage.addChild(l),console.log("Reel frames lisätty:",l.width.toFixed(0),"x",l.height.toFixed(0))}if(Ze){const l=new bt(Ze);l.scale.set(v),l.x=(W.renderer.width-l.width)/2+E,l.y=S,W.stage.addChild(l),console.log("Logo lisätty päällimmäiseen layeriin:",l.width.toFixed(0),"x",l.height.toFixed(0))}As(),W.ticker.add(cr)});function cr(){for(const d of je)d.update(),d.draw();if(!n(we)&&!Pt&&je.every(d=>d.state==="stopped")){Pt=!0;const d=or();console.log(`Checking wins, found ${d.length} wins`),d.length>0?(_(We,ce(d)),_(_e,ce(d.reduce((u,l)=>u+l.payout,0))),Za(n(Me),d,n(_e)),dr(n(_e)),_(we,!0),_(Ka,ce(Date.now())),console.log(`🎉 VOITTO! ${n(_e)} pistettä! Uusi saldo: ${n(ye)}`),console.log(`isShowingWin set to: ${n(we)}, totalWin: ${n(_e)}`),d.forEach(u=>{const l=u.multiplier?` (${u.multiplier}x multiplier)`:"";console.log(`${u.count}x ${u.symbol} = ${u.payout} pistettä${l}`)}),ir(d),Ct("win"),n(Re)&&!Pe&&(Pe=!0,he=window.setTimeout(()=>{n(we)&&n(Re)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),_(we,!1),Mt()),he=window.setTimeout(()=>{Pe=!1,jt()},200)},1500))):(console.log("No wins found this spin"),n(Re)&&!Pe&&(Pe=!0,he=window.setTimeout(()=>{Pe=!1,jt()},1e3))),n(D)&&n(ge)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${n(xe)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${n(xe).toFixed(2)}`),_(D,!1),_(xe,0)},2e3))}}function Rs(){if(n(D)&&n(ge)>0)me(ge,-1),me($t),console.log(`🎰 FREE SPIN! Remaining: ${n(ge)}`);else if(!n(D)){if(n(ye)<n(X)){alert(`Not enough credits! Balance: ${n(ye)}, Bet: ${n(X)}`),Wt();return}_(ye,n(ye)-n(X)),me(Me),_(qe,n(qe)+n(X))}he!==null&&(clearTimeout(he),he=null),_(We,ce([])),_(_e,0),_(we,!1),Pt=!1,Mt(),at=Ss(),je.forEach((d,u)=>{const l=Math.floor(u/3);d.startSynchronized(l)}),Ct("spin")}function dr(d){_(ye,n(ye)+d),_(tt,n(tt)+d),n(D)&&_(xe,n(xe)+d),d>0&&(me(It),d/n(X)>=10&&Xa())}function fr(){n(X)<Rt&&_(X,ce(Math.min(n(X)+1,Rt)))}function pr(){n(X)>ks&&_(X,ce(Math.max(n(X)-1,ks)))}function ur(){_(X,Rt)}function nt(d){_(Re,!0),_(Ce,ce(d)),_(et,!1),jt()}function Wt(){_(Re,!1),_(Ce,0),Pe=!1,he!==null&&(clearTimeout(he),he=null)}function jt(){if(!n(Re)||n(Ce)<=0){Wt();return}console.log(`Autoplay: Starting spin ${n(Ce)} rounds left`),Rs(),me(Ce,-1)}function hr(){confirm("Reset all statistics?")&&(_(Me,0),_(qe,0),_(tt,0),_(It,0),_(ut,0),_($t,0),_(ht,0),_(Ft,0))}var Ps=Zo();vn(d=>{var u=Wo();m(Ie(u)),H(d,u)});var Is=Ie(Ps);{var gr=d=>{var u=Uo(),l=m(y(u),2),w=m(y(l));x(l);var b=m(l,2);{var A=P=>{var I=jo(),C=m(y(I));x(I),le(()=>M(C,` ${n(Fe)??""}`)),H(P,I)};ne(b,P=>{n(Fe)&&P(A)})}var L=m(b,2),N=m(y(L));N.nodeValue=` ${ke??""}`,x(L);var z=m(L,2),G=m(y(z));G.nodeValue=` ${kt??""}`,x(z);var B=m(z,2),ee=m(y(B));x(B);var k=m(B,2);{var R=P=>{var I=zo(),C=y(I),F=y(C);x(C);var Ae=m(C,2);oa(Ae,17,()=>oe,na,(Ue,te)=>{var Q=No(),Mr=y(Q,!0);x(Q),le(()=>M(Mr,n(te))),H(Ue,Q)}),x(I),le(()=>M(F,`Log (${oe.length??""})`)),H(P,I)};ne(k,P=>{oe.length>0&&P(R)})}x(u),le(()=>{M(w,` ${n(Je)??""}`),M(ee,` ${Ke.a??""}`)}),H(d,u)};ne(Is,d=>{(n(Je)!=="Assets loaded successfully!"||n(Fe))&&d(gr)})}var Os=m(Is,2);{var mr=d=>{var u=Ho(),l=m(y(u),2),w=y(l);x(l);var b=m(l,2);oa(b,17,()=>n(We),na,(z,G)=>{var B=Do(),ee=y(B);x(B),le(k=>M(ee,`${n(G).count??""} × ${Ls[n(G).symbol]??""} = ${k??""} pistettä`),[()=>n(G).payout.toFixed(2)]),H(z,B)});var A=m(b,2);{var L=z=>{var G=Go(),B=y(G),ee=y(B);x(B),x(G),le(()=>M(ee,`✨ ${n(We)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),H(z,G)};ne(A,z=>{n(We).length>0&&n(We)[0].multiplier>1&&z(L)})}var N=m(A,2);x(u),le(()=>M(w,`${n(_e)??""} pistettä`)),q("click",N,()=>{_(we,!1),Mt(),console.log("Win popup closed, ready for next spin")}),H(d,u)};ne(Os,d=>{n(_e)>0&&n(we)&&d(mr)})}var Bs=m(Os,2);{var vr=d=>{var u=Vo(),l=m(y(u),8);x(u),q("click",l,()=>{_(gt,!1)}),H(d,u)};ne(Bs,d=>{n(gt)&&d(vr)})}var $s=m(Bs,2);bn($s,d=>qt=d,()=>qt);var mt=m($s,2),Fs=y(mt);{var br=d=>{var u=Yo(),l=Ie(u),w=m(y(l),2),b=y(w,!0);x(w),x(l);var A=m(l,2),L=m(y(A),2),N=y(L,!0);x(L),x(A),le(z=>{M(b,n(ge)),M(N,z)},[()=>n(xe).toFixed(2)]),H(d,u)};ne(Fs,d=>{n(D)&&d(br)})}var Nt=m(Fs,2),Cs=m(y(Nt),2),yr=y(Cs,!0);x(Cs),x(Nt);var Ms=m(Nt,2),qs=m(y(Ms),2),xr=y(qs,!0);x(qs),x(Ms),x(mt);var zt=m(mt,2),Ws=m(y(zt),2),js=y(Ws),Ut=m(js,2),_r=y(Ut,!0);x(Ut);var Ns=m(Ut,2),wr=m(Ns,2);x(Ws),x(zt);var zs=m(zt,2),Dt=m(zs,2),Us=m(y(Dt),2);Us.textContent=`v${Na}`;var Gt=m(Us,2),Ds=m(y(Gt),2),Ar=y(Ds,!0);x(Ds),x(Gt);var Ht=m(Gt,2),Gs=m(y(Ht),2),kr=y(Gs,!0);x(Gs),x(Ht);var Vt=m(Ht,2),Hs=m(y(Vt),2),Er=y(Hs,!0);x(Hs),x(Vt);var Yt=m(Vt,2),Xt=m(y(Yt),2),Sr=y(Xt);x(Xt),x(Yt);var Kt=m(Yt,2),Qt=m(y(Kt),2),Tr=y(Qt);x(Qt),x(Kt);var Zt=m(Kt,2),Vs=m(y(Zt),2),Lr=y(Vs,!0);x(Vs),x(Zt);var Jt=m(Zt,2),Ys=m(y(Jt),2),Rr=y(Ys,!0);x(Ys),x(Jt);var es=m(Jt,2),Xs=m(y(es),2),Pr=y(Xs);x(Xs),x(es);var Ks=m(es,2),Qs=m(Ks,2),Ne=y(Qs),Ir=y(Ne);x(Ne);var vt=m(Ne,2),ot=m(vt,2),Or=y(ot);x(ot);var ts=m(ot,2);x(Qs),x(Dt);var ss=m(Dt,2),Br=y(ss);{var $r=d=>{var u=Xo(),l=m(y(u),2),w=y(l);x(l);var b=m(l,2);x(u),le(()=>M(w,`${n(Ce)??""} left`)),q("click",b,Wt),H(d,u)},Fr=d=>{var u=Qo(),l=Ie(u),w=m(l,2);{var b=A=>{var L=Ko(),N=m(y(L),2),z=m(N,2),G=m(z,2),B=m(G,2),ee=m(B,2),k=m(ee,2);x(L),q("click",N,()=>nt(10)),q("click",z,()=>nt(100)),q("click",G,()=>nt(1e3)),q("click",B,()=>nt(1e4)),q("click",ee,()=>nt(1e5)),q("click",k,()=>{_(et,!1)}),H(A,L)};ne(w,A=>{n(et)&&A(b)})}q("click",l,()=>{_(et,!n(et))}),H(d,u)};ne(Br,d=>{n(Re)?d($r):d(Fr,!1)})}x(ss);var ze=m(ss,2),Cr=y(ze,!0);x(ze);var Zs=m(ze,2);re(Zs,"style",`
    position: absolute;
    left: ${f}px;                    /* X-koordinaatti (säädettävissä) */
    top: ${g}px;                     /* Y-koordinaatti (säädettävissä) */
    width: 60px;                           /* Napin leveys */
    height: 60px;                          /* Napin korkeus */
    border-radius: 50%;                    /* Pyöreä muoto */
    background-color: rgba(0,255,0,0.2);   /* Vihreä, läpinäkyvä */
    border: 2px solid rgba(0,255,0,0.5);   /* Vihreä reunus */
    cursor: pointer;                       /* Käsi-kursori hover:ssa */
    z-index: 1000;                         /* Varmista että nappi on päällimmäisenä */
    font-size: 0;                          /* Piilota teksti */
  `),le((d,u,l,w,b,A)=>{re(mt,"style",`
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
  border: 2px solid ${(n(D)?"#ff00ff":"#ffd700")??""};
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
  z-index: 1500;
  min-width: 180px;
`),M(yr,d),M(xr,n(X)),M(_r,n(X)),M(Ar,u),M(kr,l),M(Er,w),re(Xt,"style",`color: ${b??""};`),M(Sr,`${n(Ot)??""}%`),re(Qt,"style",`color: ${A??""};`),M(Tr,`${n(Bt)??""}%`),M(Lr,n(ut)),M(Rr,n($t)),M(Pr,`${n(Qa)??""}%`),Ne.disabled=n(ae).length===0,re(Ne,"style",`
        width: 100%;
        padding: 5px;
        background: ${(n(ae).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(n(ae).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(n(ae).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(n(ae).length>0?"1":"0.5")??""};
      `),M(Ir,`Download Win Log (${n(ae).length??""})`),vt.disabled=n(ae).length===0,re(vt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(n(ae).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(n(ae).length>0?"1":"0.5")??""};
      `),re(ot,"style",`
        width: 100%;
        padding: 5px;
        background: ${(n(ue)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(n(ue)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),M(Or,`🎵 Music: ${(n(ue)?"ON":"OFF")??""}`),ts.disabled=n(D),re(ts,"style",`
        width: 100%;
        padding: 5px;
        background: ${(n(D)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(n(D)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(n(D)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(n(D)?"0.5":"1")??""};
      `),re(ze,"style",`
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
  `),re(ze,"title",n(fe)?"Mykistä äänet":"Laita äänet päälle"),M(Cr,n(fe)?"🔊":"🔇")},[()=>n(ye).toLocaleString(),()=>n(Me).toLocaleString(),()=>n(qe).toLocaleString(),()=>n(tt).toLocaleString(),()=>parseFloat(n(Ot))>=95?"#00ff00":parseFloat(n(Ot))>=85?"#ffff00":"#ff6666",()=>parseFloat(n(Bt))>=30?"#00ff00":parseFloat(n(Bt))>=20?"#ffff00":"#ff6666"]),q("click",js,pr),q("click",Ns,fr),q("click",wr,ur),q("click",zs,()=>{_(gt,!n(gt))}),q("click",Ks,hr),q("click",Ne,Ja),q("click",vt,er),q("click",ot,Va),q("click",ts,tr),q("click",ze,()=>{_(fe,!n(fe))}),q("click",Zs,Rs),H(t,Ps),_a()}var ei=Y('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),ti=Y('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function si(t,e){ya(e,!1);let s=yn(e,"isAuthenticated",12,!1),a=us(""),r=us(!1);const o="slot2024";function i(){n(a)===o?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(_(r,!0),_(a,""),setTimeout(()=>_(r,!1),3e3))}xa(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),Dr();var c=Ur(),p=Ie(c);{var h=f=>{var g=ti(),v=y(g),E=m(y(v),4),S=y(E);On(S),mn(2),x(E);var K=m(E,2);{var U=T=>{var j=ei();H(T,j)};ne(K,T=>{n(r)&&T(U)})}x(v),x(g),$n(S,()=>n(a),T=>_(a,T)),q("submit",E,Fn(i)),H(f,g)};ne(p,f=>{s()||f(h)})}H(t,c),_a()}var ai=Y('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),ri=Y("<!> <!>",1);function vi(t){let e=us(!1);var s=ri(),a=Ie(s);si(a,{get isAuthenticated(){return n(e)},set isAuthenticated(i){_(e,i)},$$legacy:!0});var r=m(a,2);{var o=i=>{var c=ai(),p=m(Ie(c),2);Jo(p,{}),H(i,c)};ne(r,i=>{n(e)&&i(o)})}H(t,s)}export{Ra as A,Sa as C,Un as R,qn as S,Pa as V,vi as _,Mn as u};
