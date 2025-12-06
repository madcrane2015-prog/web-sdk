const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DpJmBStm.js","./DNWEu6uq.js","./DEliLNnF.js","./DWgShhht.js","./C04N3yhf.js","./C2GHuDhf.js","./D90bWsyD.js","./Duj03ZRA.js"])))=>i.map(i=>d[i]);
var Ba=Object.defineProperty;var Ca=(t,e,s)=>e in t?Ba(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var Z=(t,e,s)=>Ca(t,typeof e!="symbol"?e+"":e,s);import{f as $a,l as Fa,t as D,g as W,a as N,d as Ma}from"./DRDKHArV.js";import{i as qa}from"./Dw5_DM93.js";import{y as re,j as Wa,a8 as ja,F as p,Q as Na,aa as Ua,ab as us,h as fs,e as Et,k as Ne,l as Da,ac as Os,w as Rs,ad as za,q as Ps,a7 as Va,U as Ga,a2 as ps,aq as St,z as hs,ar as Ha,as as Ya,at as Xa,o as Ka,au as Qa,av as Ja,aw as Za,ax as er,b as tr,ay as sr,az as ar,a6 as rr,aA as nr,aB as ir,D as or,L as lr,p as Is,ah as U,ag as Bs,T as E,aC as gs,f as Ve,s as v,c as w,r as k,t as ae,I as cr,a as Cs,aD as dr,aE as Ct}from"./DWgShhht.js";import{_ as ms,p as le,i as ee}from"./DEliLNnF.js";import{s as j}from"./4RjN9yQL.js";import{b as ur,p as fr}from"./B1_V_3zc.js";import{b as Ue}from"./Cc6EkQBo.js";import{e as ue,E as O,a as pr,C as qt,Q as et,V as tt,N as Lt,D as K,H as hr,p as ge,a0 as Te,a1 as me,a2 as gr,w as de,a3 as ze,a4 as $s,a5 as Oe,a6 as ne,a7 as st,a8 as Fs,a9 as mr,aa as Tt,ab as vr,ac as br,y as Qe}from"./DNWEu6uq.js";import{A as xr,B as vs,G as yr,T as Ms,a as _r,b as Ot}from"./C04N3yhf.js";function bs(t,e){return e}function Ar(t,e,s,a){for(var r=[],n=e.length,i=0;i<n;i++)Xa(e[i].e,r,!0);var o=n>0&&r.length===0&&s!==null;if(o){var d=s.parentNode;Ka(d),d.append(s),a.clear(),ce(t,e[0].prev,e[n-1].next)}Qa(r,()=>{for(var f=0;f<n;f++){var l=e[f];o||(a.delete(l.k),ce(t,l.prev,l.next)),Ja(l.e,!o)}})}function xs(t,e,s,a,r,n=null){var i=t,o={flags:e,items:new Map,first:null};re&&Wa();var d=null,f=!1,l=Na(()=>{var h=s();return Va(h)?h:h==null?[]:Ps(h)});ja(()=>{var h=p(l),g=h.length;if(f&&g===0)return;f=g===0;let _=!1;if(re){var S=i.data===Ua;S!==(g===0)&&(i=us(),fs(i),Et(!1),_=!0)}if(re){for(var z=null,$,L=0;L<g;L++){if(Ne.nodeType===8&&Ne.data===Da){i=Ne,_=!0,Et(!1);break}var C=h[L],G=a(C,L);$=qs(Ne,o,z,null,C,G,L,r,e,s),o.items.set(G,$),z=$}g>0&&fs(us())}re||wr(h,o,i,r,e,a,s),n!==null&&(g===0?d?Os(d):d=Rs(()=>n(i)):d!==null&&za(d,()=>{d=null})),_&&Et(!0),p(l)}),re&&(i=Ne)}function wr(t,e,s,a,r,n,i){var o=t.length,d=e.items,f=e.first,l=f,h,g=null,_=[],S=[],z,$,L,C;for(C=0;C<o;C+=1){if(z=t[C],$=n(z,C),L=d.get($),L===void 0){var G=l?l.e.nodes_start:s;g=qs(G,e,g,g===null?e.first:g.next,z,$,C,a,r,i),d.set($,g),_=[],S=[],l=g.next;continue}if(kr(L,z,C),(L.e.f&St)!==0&&Os(L.e),L!==l){if(h!==void 0&&h.has(L)){if(_.length<S.length){var Y=S[0],se;g=Y.prev;var Ge=_[0],fe=_[_.length-1];for(se=0;se<_.length;se+=1)ys(_[se],Y,s);for(se=0;se<S.length;se+=1)h.delete(S[se]);ce(e,Ge.prev,fe.next),ce(e,g,Ge),ce(e,fe,Y),l=Y,g=fe,C-=1,_=[],S=[]}else h.delete(L),ys(L,l,s),ce(e,L.prev,L.next),ce(e,L,g===null?e.first:g.next),ce(e,g,L),g=L;continue}for(_=[],S=[];l!==null&&l.k!==$;)(l.e.f&St)===0&&(h??(h=new Set)).add(l),S.push(l),l=l.next;if(l===null)continue;L=l}_.push(L),g=L,l=L.next}if(l!==null||h!==void 0){for(var He=h===void 0?[]:Ps(h);l!==null;)(l.e.f&St)===0&&He.push(l),l=l.next;var M=He.length;if(M>0){var Pe=null;Ar(e,He,Pe,d)}}hs.first=e.first&&e.first.e,hs.last=g&&g.e}function kr(t,e,s,a){Ya(t.v,e),t.i=s}function qs(t,e,s,a,r,n,i,o,d,f){var l=(d&Za)!==0,h=(d&er)===0,g=l?h?Ga(r):ps(r):r,_=(d&Ha)===0?i:ps(i),S={i:_,v:g,k:n,a:null,e:null,prev:s,next:a};try{return S.e=Rs(()=>o(t,g,_,f),re),S.e.prev=s&&s.e,S.e.next=a&&a.e,s===null?e.first=S:(s.next=S,s.e.next=S.e),a!==null&&(a.prev=S,a.e.prev=S.e),S}finally{}}function ys(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,r=e?e.e.nodes_start:s,n=t.e.nodes_start;n!==a;){var i=tr(n);r.before(n),n=i}}function ce(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function Er(t){if(re){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;ke(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var r=t.checked;ke(t,"checked",null),t.checked=r}}};t.__on_r=s,sr(s),$a()}}function ke(t,e,s,a){var r=t.__attributes??(t.__attributes={});re&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[ar]=s),s==null?t.removeAttribute(e):typeof s!="string"&&Sr(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var _s=new Map;function Sr(t){var e=_s.get(t.nodeName);if(e)return e;_s.set(t.nodeName,e=[]);for(var s,a=t,r=Element.prototype;r!==a;){s=nr(a);for(var n in s)s[n].set&&e.push(n);a=rr(a)}return e}function Lr(t,e,s=e){var a=ir();Fa(t,"input",r=>{var n=r?t.defaultValue:t.value;if(n=Rt(t)?Pt(n):n,s(n),a&&n!==(n=e())){var i=t.selectionStart,o=t.selectionEnd;t.value=n??"",o!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(o,t.value.length))}}),(re&&t.defaultValue!==t.value||or(e)==null&&t.value)&&s(Rt(t)?Pt(t.value):t.value),lr(()=>{var r=e();Rt(t)&&r===Pt(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function Rt(t){var e=t.type;return e==="number"||e==="range"}function Pt(t){return t===""?null:+t}function Tr(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const $t=[];ue.handleByNamedList(O.Environment,$t);async function Or(t){if(!t)for(let e=0;e<$t.length;e++){const s=$t[e];if(s.value.test()){await s.value.load();return}}}let De;function Rr(){if(typeof De=="boolean")return De;try{De=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{De=!1}return De}var Ws=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(Ws||{});class Pr{constructor(e){this.items=[],this._name=e}emit(e,s,a,r,n,i,o,d){const{name:f,items:l}=this;for(let h=0,g=l.length;h<g;h++)l[h][f](e,s,a,r,n,i,o,d);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Ir=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],js=class Ns extends pr{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...Ir,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Or(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...Ns.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof qt&&(a={container:a},s&&(et(tt,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const r=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=r?a.clearColor:Lt.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const r=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==r&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Ws.ALL);const{clear:a,clearColor:r,target:n}=e;Lt.shared.setValue(r??this.background.colorRgba),s.renderTarget.clear(n,a,Lt.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new Pr(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const r in this.runners)this.runners[r].add(a);return this}_addPipes(e,s){const a=s.reduce((r,n)=>(r[n.name]=n.value,r),{});e.forEach(r=>{const n=r.value,i=r.name,o=a[i];this.renderPipes[i]=new n(this,o?new o:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Rr())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};js.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Us=js,Je;function Br(t){return Je!==void 0||(Je=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??Us.defaultOptions.failIfMajorPerformanceCaveat};try{if(!K.get().getWebGLRenderingContext())return!1;let r=K.get().createCanvas().getContext("webgl",e);const n=!!((s=r==null?void 0:r.getContextAttributes())!=null&&s.stencil);if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,n}catch{return!1}})()),Je}let Ze;async function Cr(t={}){return Ze!==void 0||(Ze=await(async()=>{const e=K.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),Ze}const As=["webgl","webgpu","canvas"];async function $r(t){let e=[];t.preference?(e.push(t.preference),As.forEach(n=>{n!==t.preference&&e.push(n)})):e=As.slice();let s,a={};for(let n=0;n<e.length;n++){const i=e[n];if(i==="webgpu"&&await Cr()){const{WebGPURenderer:o}=await ms(async()=>{const{WebGPURenderer:d}=await import("./DpJmBStm.js");return{WebGPURenderer:d}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=o,a={...t,...t.webgpu};break}else if(i==="webgl"&&Br(t.failIfMajorPerformanceCaveat??Us.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:o}=await ms(async()=>{const{WebGLRenderer:d}=await import("./Duj03ZRA.js");return{WebGLRenderer:d}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=o,a={...t,...t.webgl};break}else if(i==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const r=new s;return await r.init(a),r}const Ds="8.8.1";class zs{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Ds)}static destroy(){}}zs.extension=O.Application;class Fr{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Ds)}destroy(){this._renderer=null}}Fr.extension={type:[O.WebGLSystem,O.WebGPUSystem],name:"initHook",priority:-10};const Vs=class Ft{constructor(...e){this.stage=new qt,e[0]!==void 0&&et(tt,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await $r(e),Ft._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return et(tt,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=Ft._plugins.slice(0);a.reverse(),a.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Vs._plugins=[];let Gs=Vs;ue.handleByList(O.Application,Gs._plugins);ue.add(zs);class Hs extends xr{constructor(e,s){super();const{textures:a,data:r}=e;Object.keys(r.pages).forEach(n=>{const i=r.pages[parseInt(n,10)],o=a[i.id];this.pages.push({texture:o})}),Object.keys(r.chars).forEach(n=>{const i=r.chars[n],{frame:o,source:d}=a[i.page],f=new hr(i.x+o.x,i.y+o.y,i.width,i.height),l=new ge({source:d,frame:f});this.chars[n]={id:n.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:l}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){vs.install(e)}static uninstall(e){vs.uninstall(e)}}const It={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const h in e){const g=e[h].match(/^[a-z]+/gm)[0],_=e[h].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),S={};for(const z in _){const $=_[z].split("="),L=$[0],C=$[1].replace(/"/gm,""),G=parseFloat(C),Y=isNaN(G)?C:G;S[L]=Y}s[g].push(S)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=s.info,[n]=s.common,[i]=s.distanceField??[];i&&(a.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),a.fontSize=parseInt(r.size,10),a.fontFamily=r.face,a.lineHeight=parseInt(n.lineHeight,10);const o=s.page;for(let h=0;h<o.length;h++)a.pages.push({id:parseInt(o[h].id,10)||0,file:o[h].file});const d={};a.baseLineOffset=a.lineHeight-parseInt(n.base,10);const f=s.char;for(let h=0;h<f.length;h++){const g=f[h],_=parseInt(g.id,10);let S=g.letter??g.char??String.fromCharCode(_);S==="space"&&(S=" "),d[_]=S,a.chars[S]={id:_,page:parseInt(g.page,10)||0,x:parseInt(g.x,10),y:parseInt(g.y,10),width:parseInt(g.width,10),height:parseInt(g.height,10),xOffset:parseInt(g.xoffset,10),yOffset:parseInt(g.yoffset,10),xAdvance:parseInt(g.xadvance,10),kerning:{}}}const l=s.kerning||[];for(let h=0;h<l.length;h++){const g=parseInt(l[h].first,10),_=parseInt(l[h].second,10),S=parseInt(l[h].amount,10);a.chars[d[_]].kerning[d[g]]=S}return a}},ws={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const n=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),o=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let f=0;f<n.length;f++)e.pages.push({id:parseInt(n[f].getAttribute("id"),10)||0,file:n[f].getAttribute("file")});const d={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let f=0;f<i.length;f++){const l=i[f],h=parseInt(l.getAttribute("id"),10);let g=l.getAttribute("letter")??l.getAttribute("char")??String.fromCharCode(h);g==="space"&&(g=" "),d[h]=g,e.chars[g]={id:h,page:parseInt(l.getAttribute("page"),10)||0,x:parseInt(l.getAttribute("x"),10),y:parseInt(l.getAttribute("y"),10),width:parseInt(l.getAttribute("width"),10),height:parseInt(l.getAttribute("height"),10),xOffset:parseInt(l.getAttribute("xoffset"),10),yOffset:parseInt(l.getAttribute("yoffset"),10),xAdvance:parseInt(l.getAttribute("xadvance"),10),kerning:{}}}for(let f=0;f<o.length;f++){const l=parseInt(o[f].getAttribute("first"),10),h=parseInt(o[f].getAttribute("second"),10),g=parseInt(o[f].getAttribute("amount"),10);e.chars[d[h]].kerning[d[l]]=g}return e}},ks={test(t){return typeof t=="string"&&t.includes("<font>")?ws.test(K.get().parseXML(t)):!1},parse(t){return ws.parse(K.get().parseXML(t))}},Mr=[".xml",".fnt"],qr={extension:{type:O.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof Hs,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},Wr={extension:{type:O.LoadParser,priority:Te.Normal},name:"loadBitmapFont",test(t){return Mr.includes(me.extname(t).toLowerCase())},async testParse(t){return It.test(t)||ks.test(t)},async parse(t,e,s){const a=It.test(t)?It.parse(t):ks.parse(t),{src:r}=e,{pages:n}=a,i=[],o=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let h=0;h<n.length;++h){const g=n[h].file;let _=me.join(me.dirname(r),g);_=gr(_,r),i.push({src:_,data:o})}const d=await s.load(i),f=i.map(h=>d[h.src]);return new Hs({data:a,textures:f},r)},async load(t,e){return await(await K.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class jr{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Nr={extension:{type:O.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof ge),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((r,n)=>{s[a+(n===0?"":n+1)]=r})}),s}};async function Ys(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Ur={extension:{type:O.DetectionParser,priority:1},test:async()=>Ys("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},Es=["png","jpg","jpeg"],Dr={extension:{type:O.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...Es],remove:async t=>t.filter(e=>!Es.includes(e))},zr="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Wt(t){return zr?!1:document.createElement("video").canPlayType(t)!==""}const Vr={extension:{type:O.DetectionParser,priority:0},test:async()=>Wt("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},Gr={extension:{type:O.DetectionParser,priority:0},test:async()=>Wt("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},Hr={extension:{type:O.DetectionParser,priority:0},test:async()=>Wt("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},Yr={extension:{type:O.DetectionParser,priority:0},test:async()=>Ys("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class Xr{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var i,o;let r=null,n=null;if(s.loadParser&&(n=this._parserHash[s.loadParser],n||de(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!n){for(let d=0;d<this.parsers.length;d++){const f=this.parsers[d];if(f.load&&((i=f.test)!=null&&i.call(f,e,s,this))){n=f;break}}if(!n)return de(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await n.load(e,s,this),a.parser=n;for(let d=0;d<this.parsers.length;d++){const f=this.parsers[d];f.parse&&f.parse&&await((o=f.testParse)==null?void 0:o.call(f,r,s,this))&&(r=await f.parse(r,s,this)||r,a.parser=f)}return r})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const r={},n=$s(e),i=ze(e,f=>({alias:[f],src:f,data:{}})),o=i.length,d=i.map(async f=>{const l=me.toAbsolute(f.src);if(!r[f.src])try{this.promiseCache[l]||(this.promiseCache[l]=this._getLoadPromiseAndParser(l,f)),r[f.src]=await this.promiseCache[l].promise,s&&s(++a/o)}catch(h){throw delete this.promiseCache[l],delete r[f.src],new Error(`[Loader.load] Failed to load ${l}.
${h}`)}});return await Promise.all(d),n?r[i[0].src]:r}async unload(e){const a=ze(e,r=>({alias:[r],src:r})).map(async r=>{var o,d;const n=me.toAbsolute(r.src),i=this.promiseCache[n];if(i){const f=await i.promise;delete this.promiseCache[n],await((d=(o=i.parser)==null?void 0:o.unload)==null?void 0:d.call(o,f,r,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&de(`[Assets] loadParser name conflict "${s.name}"`):de("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function Re(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const Kr=".json",Qr="application/json",Jr={extension:{type:O.LoadParser,priority:Te.Low},name:"loadJson",test(t){return Re(t,Qr)||Oe(t,Kr)},async load(t){return await(await K.get().fetch(t)).json()}},Zr=".txt",en="text/plain",tn={name:"loadTxt",extension:{type:O.LoadParser,priority:Te.Low,name:"loadTxt"},test(t){return Re(t,en)||Oe(t,Zr)},async load(t){return await(await K.get().fetch(t)).text()}},sn=["normal","bold","100","200","300","400","500","600","700","800","900"],an=[".ttf",".otf",".woff",".woff2"],rn=["font/ttf","font/otf","font/woff","font/woff2"],nn=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function on(t){const e=me.extname(t),r=me.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(o=>o.charAt(0).toUpperCase()+o.slice(1));let n=r.length>0;for(const o of r)if(!o.match(nn)){n=!1;break}let i=r.join(" ");return n||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const ln=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function cn(t){return ln.test(t)?t:encodeURI(t)}const dn={extension:{type:O.LoadParser,priority:Te.Low},name:"loadWebFont",test(t){return Re(t,rn)||Oe(t,an)},async load(t,e){var a,r,n;const s=K.get().getFontFaceSet();if(s){const i=[],o=((a=e.data)==null?void 0:a.family)??on(t),d=((n=(r=e.data)==null?void 0:r.weights)==null?void 0:n.filter(l=>sn.includes(l)))??["normal"],f=e.data??{};for(let l=0;l<d.length;l++){const h=d[l],g=new FontFace(o,`url(${cn(t)})`,{...f,weight:h});await g.load(),s.add(g),i.push(g)}return ne.set(`${o}-and-url`,{url:t,fontFaces:i}),i.length===1?i[0]:i}return de("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{ne.remove(`${e.family}-and-url`),K.get().getFontFaceSet().delete(e)})}};function jt(t,e=1){var a;const s=(a=st.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function Nt(t,e,s){t.label=s,t._sourceOrigin=s;const a=new ge({source:t,label:s}),r=()=>{delete e.promiseCache[s],ne.has(s)&&ne.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(de("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),a.once("destroy",()=>{t.destroyed||(de("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),a}const un=".svg",fn="image/svg+xml",pn={extension:{type:O.LoadParser,priority:Te.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return Re(t,fn)||Oe(t,un)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?gn(t):hn(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function hn(t,e,s,a){var $,L,C;const n=await(await K.get().fetch(t)).blob(),i=URL.createObjectURL(n),o=new Image;o.src=i,o.crossOrigin=a,await o.decode(),URL.revokeObjectURL(i);const d=document.createElement("canvas"),f=d.getContext("2d"),l=(($=e.data)==null?void 0:$.resolution)||jt(t),h=((L=e.data)==null?void 0:L.width)??o.width,g=((C=e.data)==null?void 0:C.height)??o.height;d.width=h*l,d.height=g*l,f.drawImage(o,0,0,h*l,g*l);const{parseAsGraphicsContext:_,...S}=e.data??{},z=new Fs({resource:d,alphaMode:"premultiply-alpha-on-upload",resolution:l,...S});return Nt(z,s,t)}async function gn(t){const s=await(await K.get().fetch(t)).text(),a=new yr;return a.svg(s),a}const mn=`(function () {
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
`;let Se=null,Mt=class{constructor(){Se||(Se=URL.createObjectURL(new Blob([mn],{type:"application/javascript"}))),this.worker=new Worker(Se)}};Mt.revokeObjectURL=function(){Se&&(URL.revokeObjectURL(Se),Se=null)};const vn=`(function () {
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
`;let Le=null;class Xs{constructor(){Le||(Le=URL.createObjectURL(new Blob([vn],{type:"application/javascript"}))),this.worker=new Worker(Le)}}Xs.revokeObjectURL=function(){Le&&(URL.revokeObjectURL(Le),Le=null)};let Ss=0,Bt;class bn{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new Mt;s.addEventListener("message",a=>{s.terminate(),Mt.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Bt===void 0&&(Bt=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Bt&&(this._createdWorkers++,e=new Xs().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((r,n)=>{this._queue.push({id:e,arguments:s,resolve:r,reject:n})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[Ss]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:Ss++,id:a})}}const Ls=new bn,xn=[".jpeg",".jpg",".png",".webp",".avif"],yn=["image/jpeg","image/png","image/webp","image/avif"];async function _n(t,e){var r;const s=await K.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const Ks={name:"loadTextures",extension:{type:O.LoadParser,priority:Te.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return Re(t,yn)||Oe(t,xn)},async load(t,e,s){var n;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Ls.isImageBitmapSupported()?a=await Ls.loadImageBitmap(t,e):a=await _n(t,e):a=await new Promise((i,o)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?i(a):(a.onload=()=>{i(a)},a.onerror=o)});const r=new Fs({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((n=e.data)==null?void 0:n.resolution)||jt(t),...e.data});return Nt(r,s,t)},unload(t){t.destroy(!0)}},Qs=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],An=Qs.map(t=>`video/${t.substring(1)}`);function wn(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=En(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function kn(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",r),t.load();function a(){n(),e()}function r(i){n(),s(i)}function n(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",r)}})}function En(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const Sn={name:"loadVideo",extension:{type:O.LoadParser,name:"loadVideo"},test(t){const e=Re(t,An),s=Oe(t,Qs);return e||s},async load(t,e,s){var d,f;const a={...Tt.defaultOptions,resolution:((d=e.data)==null?void 0:d.resolution)||jt(t),alphaMode:((f=e.data)==null?void 0:f.alphaMode)||await mr(),...e.data},r=document.createElement("video"),n={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(n).forEach(l=>{const h=n[l];h!==void 0&&r.setAttribute(l,h)}),a.muted===!0&&(r.muted=!0),wn(r,t,a.crossorigin);const i=document.createElement("source");let o;if(t.startsWith("data:"))o=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const l=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();o=Tt.MIME_TYPES[l]||`video/${l}`}return i.src=t,o&&(i.type=o),new Promise(l=>{const h=async()=>{const g=new Tt({...a,resource:r});r.removeEventListener("canplay",h),e.data.preload&&await kn(r),l(Nt(g,s,t))};r.addEventListener("canplay",h),r.appendChild(i)})},unload(t){t.destroy(!0)}},Js={extension:{type:O.ResolveParser,name:"resolveTexture"},test:Ks.test,parse:t=>{var e;return{resolution:parseFloat(((e=st.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},Ln={extension:{type:O.ResolveParser,priority:-2,name:"resolveJson"},test:t=>st.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:Js.parse};class Tn{constructor(){this._detections=[],this._initialized=!1,this.resolver=new st,this.loader=new Xr,this.cache=ne,this._backgroundLoader=new jr(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var n,i;if(this._initialized){de("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let o=e.manifest;typeof o=="string"&&(o=await this.load(o)),this.resolver.addManifest(o)}const s=((n=e.texturePreference)==null?void 0:n.resolution)??1,a=typeof s=="number"?[s]:s,r=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=$s(e),r=ze(e).map(o=>{if(typeof o!="string"){const d=this.resolver.getAlias(o);return d.some(f=>!this.resolver.hasKey(f))&&this.add(o),Array.isArray(d)?d[0]:d}return this.resolver.hasKey(o)||this.add({alias:o,src:o}),o}),n=this.resolver.resolve(r),i=await this._mapLoadToResolve(n,s);return a?i[r[0]]:i}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const r=this.resolver.resolveBundle(e),n={},i=Object.keys(r);let o=0,d=0;const f=()=>{s==null||s(++o/d)},l=i.map(h=>{const g=r[h];return d+=Object.keys(g).length,this._mapLoadToResolve(g,f).then(_=>{n[h]=_})});return await Promise.all(l),a?n[e[0]]:n}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return ne.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=ne.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(a,s);this._backgroundLoader.active=!0;const n={};return a.forEach(i=>{const o=r[i.src],d=[i.src];i.alias&&d.push(...i.alias),d.forEach(f=>{n[f]=o}),ne.set(d,o)}),n}async unload(e){this._initialized||await this.init();const s=ze(e).map(r=>typeof r!="string"?r.src:r),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=ze(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(r=>this._unloadFromResolved(s[r]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{ne.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,r)=>s.indexOf(a)===r),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const Ee=new Tn;ue.handleByList(O.LoadParser,Ee.loader.parsers).handleByList(O.ResolveParser,Ee.resolver.parsers).handleByList(O.CacheParser,Ee.cache.parsers).handleByList(O.DetectionParser,Ee.detections);ue.add(Nr,Dr,Ur,Yr,Vr,Gr,Hr,Jr,tn,dn,pn,Ks,Sn,Wr,qr,Js,Ln);const Ts={loader:O.LoadParser,resolver:O.ResolveParser,cache:O.CacheParser,detection:O.DetectionParser};ue.handle(O.Asset,t=>{const e=t.ref;Object.entries(Ts).filter(([s])=>!!e[s]).forEach(([s,a])=>ue.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(Ts).filter(s=>!!e[s]).forEach(s=>ue.remove(e[s]))});class On extends vr{constructor(e,s){const{text:a,resolution:r,style:n,anchor:i,width:o,height:d,roundPixels:f,...l}=e;super({...l}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=n,this.resolution=r??null,this.allowChildren=!1,this._anchor=new br({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=f??!1,o!==void 0&&(this.width=o),d!==void 0&&(this.height=d)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,r=-s*this.anchor.x;let n=0;return e.x>=r&&e.x<=r+s&&(n=-a*this.anchor.y,e.y>=n&&e.y<=n+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function Rn(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(et(tt,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class Pn extends On{constructor(...e){const s=Rn(e,"Text");super(s,Ms),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=_r.measureText(this._text,this._style),{width:r,height:n}=a;e.minX=-s._x*r,e.maxX=e.minX+r,e.minY=-s._y*n,e.maxY=e.minY+n}}var In=D('<p style="color: red;" class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Error:</strong> </p>'),Bn=D('<div class="svelte-1t2q5b9"> </div>'),Cn=D('<details class="svelte-1t2q5b9"><summary class="svelte-1t2q5b9"> </summary> <!></details>'),$n=D(`<div style="
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
  " class="svelte-1t2q5b9"><h3 class="svelte-1t2q5b9">🎰 Oma-peli Debug</h3> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Status:</strong> </p> <!> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Base:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">BG URL:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Sample:</strong> </p> <!></div>`),Fn=D('<span style="color: #ffd700; font-weight: bold;" class="svelte-1t2q5b9"> </span>'),Mn=D('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-1t2q5b9"> <!></div>'),qn=D(`<div style="
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
  " class="svelte-1t2q5b9"><h2 style="margin: 0 0 10px 0; font-size: 2em;" class="svelte-1t2q5b9">🎉 VOITTO! 🎉</h2> <div style="font-size: 1.5em; font-weight: bold; margin: 10px 0;" class="svelte-1t2q5b9"> </div> <!> <button style="
        margin-top: 15px;
        padding: 8px 16px;
        background: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
      " class="svelte-1t2q5b9">Jatka pelaamista</button></div>`),Wn=D(`<div style="
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
  " class="svelte-1t2q5b9"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-1t2q5b9">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-1t2q5b9">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-1t2q5b9"> Vähintään 3 symbolia tarvitaan voittoon<br class="svelte-1t2q5b9"> <span style="color: #ffd700;" class="svelte-1t2q5b9">Satunnainen 1x-3x kerroin lisätään voittoihin!</span></div> <div style="display: grid; gap: 10px;" class="svelte-1t2q5b9"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-1t2q5b9">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">g (Rockabilly): 3x=5 | 4x=25 | 5x=100</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">e (Blonde): 3x=5 | 4x=20 | 5x=75</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">f (Brunette): 3x=3 | 4x=15 | 5x=50</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-1t2q5b9">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">a (Hot Rod): 3x=2 | 4x=7 | 5x=25</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">b (Jacket): 3x=2 | 4x=7 | 5x=25</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">c (Roller Skates): 3x=1.5 | 4x=5 | 5x=20</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">d (Microphone): 3x=1.5 | 4x=5 | 5x=20</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-1t2q5b9">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">i (Burger): 3x=0.5 | 4x=2 | 5x=10</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">j (Fries): 3x=0.5 | 4x=2 | 5x=10</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">k (Milkshake): 3x=0.3 | 4x=1 | 5x=5</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-1t2q5b9">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">h (WILD) - Korvaa kaikki muut symbolit (paitsi Scatter)</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">l (SCATTER) - 5-12 symbolia = 8-15 FREE SPINS</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-1t2q5b9">Kaikki voitot kerrotaan panoksella (Bet) | Satunnainen 1x-3x kerroin lisätään</div> <button style="
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
      " class="svelte-1t2q5b9">Sulje</button></div>`),jn=D(`<div style="
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
        " class="svelte-1t2q5b9">⏹ STOP</button></div>`),Nn=D(`<div style="
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
          " class="svelte-1t2q5b9">Cancel</button></div>`),Un=D(`<button style="
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
      " class="svelte-1t2q5b9">🔄 AUTOPLAY</button> <!>`,1),Dn=D(`<!> <!> <!> <div class="svelte-1t2q5b9"></div> <div style="
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
  border: 2px solid #ffd700;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
  z-index: 1500;
  min-width: 180px;
" class="svelte-1t2q5b9"><div style="display: flex; justify-content: space-between; margin-bottom: 8px;" class="svelte-1t2q5b9"><span style="color: #fff;" class="svelte-1t2q5b9">CREDITS:</span> <span style="color: #ffd700;" class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; border-top: 1px solid #555; padding-top: 8px;" class="svelte-1t2q5b9"><span style="color: #fff;" class="svelte-1t2q5b9">BET:</span> <span style="color: #00ff00;" class="svelte-1t2q5b9"> </span></div></div> <div style="
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
" class="svelte-1t2q5b9"><div style="font-weight: bold; font-size: 16px; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-1t2q5b9">📊 RTP MONITOR</div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Rounds:</span> <span style="color: #fff;" class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Wagered:</span> <span style="color: #ff6666;" class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Won:</span> <span style="color: #66ff66;" class="svelte-1t2q5b9"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 10px; 
    padding-top: 10px; 
    border-top: 1px solid #555;
    font-weight: bold;
    font-size: 18px;
  " class="svelte-1t2q5b9"><span style="color: #ffd700;" class="svelte-1t2q5b9">RTP:</span> <span class="svelte-1t2q5b9"> </span></div> <button style="
      margin-top: 10px;
      width: 100%;
      padding: 5px;
      background: rgba(255, 100, 100, 0.3);
      color: #fff;
      border: 1px solid #ff6666;
      border-radius: 5px;
      cursor: pointer;
      font-size: 11px;
    " class="svelte-1t2q5b9">Reset Stats</button></div> <div style="
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1500;
" class="svelte-1t2q5b9"><!></div> <button class="svelte-1t2q5b9"> </button> <button title="SPIN" class="svelte-1t2q5b9"></button>`,1);function zn(t,e){Is(e,!0);const s=13,a=1445,r=1e3,n=1.75,i=-30,o=-10,d=160,f=0,l=720,h=750,g=.8,_=50,S=30,z=-40,$=1,L="height",G=Math.round(100*n),Y=Math.round(G*(700/760)),Ge=Y+10,fe=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],M=typeof window<"u"&&window.location.hostname.includes("github.io")?"/web-sdk/oma-peli/symbols":`${Ue}/symbols`,Pe={a:`${M}/Blue_hotrod.jpg`,b:`${M}/Blue_jacket.jpg`,c:`${M}/Blue_rollers.jpg`,d:`${M}/Blue_speakers.jpg`,e:`${M}/Premium_blonde.jpg`,f:`${M}/Premium_brunette.jpg`,g:`${M}/Premium_rocker.jpg`,h:`${M}/Red_bubblegum.jpg`,i:`${M}/Red_burger.jpg`,j:`${M}/Red_fries.jpg`,k:`${M}/Red_milkshake.jpg`,l:`${M}/Scatter.jpg`,emptyslot:`${M}/Emptyslot.jpg`},at=`${M}/bg_base.jpg`,Ut=`${M}/ReelFrames.png`,Dt=`${M}/RockABillyReels_logo.png`,zt={spin:`${Ue}/sounds/spin.mp3`,stop:`${Ue}/sounds/stop.mp3`,win:`${Ue}/sounds/win.mp3`};let pe=U(!0),Ye={},Xe=null,ve=null,Ie=null,Be=null,Ce=U("Initializing..."),be=U(""),J=[],ie=U(1e3),H=U(10);const Vt=1,rt=100;let xe=U(!1),ye=U(0),$e=U(!1),Zs=U(0),nt=U(0),_e=U(0),Fe=U(0),it=cr(()=>p(_e)>0?(p(Fe)/p(_e)*100).toFixed(2):"0.00");function Gt(u){if(u===6){const b=Math.random()<.5?"emptyslot":"h";return console.log(`Reel ${u} (MIDDLE): ${b}`),b}const m=fe.filter(b=>b!=="emptyslot"),c=m[Math.floor(Math.random()*m.length)];return console.log(`Reel ${u} (NORMAL): ${c}, available: ${m.length}`),c}function Ht(){const u=[];for(let m=0;m<s;m++)u.push(Gt(m));return u}function ea(u){return u<3?{col:0,row:u}:u<6?{col:1,row:u-3}:u===6?{col:2,row:0}:u<10?{col:3,row:u-7}:{col:4,row:u-10}}function Me(u,m){return u===0?m:u===1?3+m:u===2?6:u===3?7+m:u===4?10+m:-1}const ta={k:{3:.3,4:1,5:5},j:{3:.5,4:2,5:10},i:{3:.5,4:2,5:10},c:{3:1.5,4:5,5:20},d:{3:1.5,4:5,5:20},b:{3:2,4:7,5:25},a:{3:2,4:7,5:25},f:{3:3,4:15,5:50},e:{3:5,4:20,5:75},g:{3:5,4:25,5:100},h:{},l:{},emptyslot:{}};function sa(){var R;const u=[],m=[];for(let T=0;T<s;T++)q[T]==="l"&&m.push(T);if(m.length>=5){const T=8+(m.length-5);console.log(`🎰 SCATTER WIN! ${m.length} scatters = ${T} FREE SPINS!`),u.push({symbol:"l",count:m.length,payout:0,positions:m})}q[0],q[1],q[2],q[3],q[4],q[5],q[6],q[7],q[8],q[9],q[10],q[11],q[12];const c=[];for(let T=0;T<3;T++)for(let A=0;A<3;A++)for(let P=0;P<1;P++)for(let I=0;I<3;I++)for(let y=0;y<3;y++){const F=[Me(0,T),Me(1,A),Me(2,P),Me(3,I),Me(4,y)];c.push(F)}console.log(`Generated ${c.length} possible paths (should be 81)`);const b=new Map;for(const T of c){const A=T.map(y=>q[y]);if(A[0]==="emptyslot"||A[0]==="l")continue;let P=null;for(let y=0;y<A.length;y++)if(A[y]!=="h"&&A[y]!=="emptyslot"&&A[y]!=="l"){P=A[y];break}if(!P)continue;let I=0;for(let y=0;y<A.length;y++){const F=A[y];if(F===P||F==="h")I++;else break}if(I>=3){const y=`${P}-${I}`,F=b.get(y);F?F.lineCount++:b.set(y,{symbol:P,length:I,lineCount:1,examplePath:T.slice(0,I)})}}const x=[];for(const[T,A]of b.entries()){const P=(R=ta[A.symbol])==null?void 0:R[A.length];if(P!==void 0&&P>0){const I=P*p(H),y=I*A.lineCount,F=[1,2,3],V=F[Math.floor(Math.random()*F.length)],te=y*V;console.log(`Win: ${A.length}x ${A.symbol} on ${A.lineCount} ways = ${te} (single line: ${I}, total base: ${y}, multiplier: ${V}x)`),x.push({symbol:A.symbol,count:A.length,payout:te,positions:A.examplePath,multiplier:V})}}return u.push(...x),u}let he=U(0),ot=U(le([])),oe=U(!1),Ke=U(!1);const aa={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function lt(u){if(!p(pe)||!Ye[u])return;const m=Ye[u];m.currentTime=0,m.play().catch(c=>{console.warn("Äänen toisto epäonnistui:",u,c)})}function ra(u){qe.forEach(m=>B.stage.removeChild(m)),qe=[],u.forEach(m=>{m.positions.forEach(c=>{const b=Ae[c],x=new Ot().rect(0,0,G,Y).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});x.x=b.container.x,x.y=b.container.y,B.stage.addChild(x),qe.push(x);let R=0,T=1;const A=.05;B.ticker.add(()=>{R+=T*A,R>=.4&&(T=-1),R<=0&&(T=1),x.alpha=.5+R})})})}function ct(){qe.forEach(u=>B.stage.removeChild(u)),qe=[]}let q=Ht(),dt,B,Ae=[],qe=[];class na{constructor(m,c){Z(this,"index");Z(this,"container");Z(this,"offset",0);Z(this,"speed",0);Z(this,"targetSpeed",30);Z(this,"state","idle");Z(this,"stopDelay",0);Z(this,"bounceOffset",0);Z(this,"bounceSpeed",0);Z(this,"bounceFrames",0);this.index=m,this.container=c}start(m){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=m}update(){this.state!=="idle"&&(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"&&(this.speed*=.92,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,lt("stop"))),this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=Ge&&(this.offset=0,q[this.index]=Gt(this.index))))}draw(){const m=this.container;m.removeChildren();const c=q[this.index];if(!c||!Xe||!Xe[c])return;const b=Xe[c];if(!b)return;const x=this.offset+this.bounceOffset,R=new Qe(b);R.width=G,R.height=Y,R.x=0,R.y=x,m.addChild(R)}}Bs(async()=>{B=new Gs,await B.init({width:a,height:r,background:"#001a33"}),dt.appendChild(B.canvas);const u={};try{E(Ce,"Loading background and UI images..."),J.push(`Loading background: ${at}`),J.push(`Loading reel frames: ${Ut}`),J.push(`Loading logo: ${Dt}`),await Ee.load([{alias:"background",src:at},{alias:"reelframes",src:Ut},{alias:"logo",src:Dt}]),ve=ge.from("background"),Ie=ge.from("reelframes"),Be=ge.from("logo"),console.log("✅ Background texture created:",ve.width,"x",ve.height),console.log("✅ Reel frames texture created:",Ie.width,"x",Ie.height),console.log("✅ Logo texture created:",Be.width,"x",Be.height),J.push("✅ All UI images loaded"),E(Ce,"Loading symbols...");const c=[];for(const b of fe)c.push({alias:b,src:Pe[b]});await Ee.load(c);for(const b of fe){const x=Pe[b];J.push(`Loading symbol ${b}: ${x}`);try{const R=ge.from(b);u[b]=R,console.log(`✅ Symbol ${b} loaded:`,R.width,"x",R.height),J.push(`✅ Symbol ${b} loaded`)}catch(R){const T=`❌ Failed to load symbol ${b} from ${x}: ${R}`;throw J.push(T),console.error(T),new Error(T)}}Xe=u,E(Ce,"Assets loaded successfully!")}catch(c){E(be,`Asset loading failed: ${c}`),J.push(p(be)),console.error(p(be));return}console.log("Ladataan ääniefektit...");for(const[c,b]of Object.entries(zt)){const x=new Audio;x.src=b,x.preload="auto",x.volume=.7,x.load(),x.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${b} (käytetään hiljaista placeholderia)`)}),Ye[c]=x}console.log("Ladataan ääniefektit...");for(const[c,b]of Object.entries(zt)){const x=new Audio;x.src=b,x.preload="auto",x.volume=.7,x.load(),x.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${b} (käytetään hiljaista placeholderia)`)}),Ye[c]=x}if(console.log("Taustakuva ladattu, tekstuuri:",ve),ve){const c=new Qe(ve);B.renderer.width/B.renderer.height;const b=c.texture.width/c.texture.height;let x;x=B.renderer.height/c.texture.height,x*=$,c.scale.set(x),c.x=(B.renderer.width-c.width)/2,c.y=(B.renderer.height-c.height)/2+z,B.stage.addChild(c),console.log("Taustakuva lisätty:",L,"mode, size:",c.width.toFixed(0),"x",c.height.toFixed(0),"image aspect:",b.toFixed(2),"scale:",x.toFixed(2),"pos:",c.x.toFixed(0),c.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(c=>({x:c.x+i,y:c.y+o})),Ae=[];for(let c=0;c<s;c++){const b=ea(c),x=b.col,R=b.row,T=300+x*(G+20),A=250+R*(Y+15),P=c===6?T+f:T,I=c===6?A+d:A,y=new qt;y.x=P+i,y.y=I+o;const F=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],V=new Ot().rect(0,0,G,Y).fill({color:F[c],alpha:.3});V.x=y.x,V.y=y.y,B.stage.addChild(V);const te=new Ms({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),X=new Pn({text:c.toString(),style:te});X.x=y.x+5,X.y=y.y+5,B.stage.addChild(X);const Q=new Ot().rect(0,0,G,Y).fill(16777215);Q.x=y.x,Q.y=y.y,y.mask=Q,B.stage.addChild(Q),B.stage.addChild(y),Ae.push(new na(c,y))}if(Ie){const c=new Qe(Ie);c.scale.set(1),c.x=250,c.y=200,B.stage.addChild(c),console.log("Reel frames lisätty:",c.width.toFixed(0),"x",c.height.toFixed(0))}if(Be){const c=new Qe(Be);c.scale.set(g),c.x=(B.renderer.width-c.width)/2+_,c.y=S,B.stage.addChild(c),console.log("Logo lisätty päällimmäiseen layeriin:",c.width.toFixed(0),"x",c.height.toFixed(0))}B.ticker.add(ia)});function ia(){for(const u of Ae)u.update(),u.draw();if(!p(oe)&&Ae.every(u=>u.state==="stopped")){const u=sa();console.log(`Checking wins, found ${u.length} wins`),u.length>0?(E(ot,le(u)),E(he,le(u.reduce((m,c)=>m+c.payout,0))),oa(p(he)),E(oe,!0),E(Zs,le(Date.now())),console.log(`🎉 VOITTO! ${p(he)} pistettä! Uusi saldo: ${p(ie)}`),console.log(`isShowingWin set to: ${p(oe)}, totalWin: ${p(he)}`),u.forEach(m=>{const c=m.multiplier?` (${m.multiplier}x multiplier)`:"";console.log(`${m.count}x ${m.symbol} = ${m.payout} pistettä${c}`)}),ra(u),lt("win"),p(xe)&&setTimeout(()=>{p(oe)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),E(oe,!1),ct(),setTimeout(ft,200))},1500)):(console.log("No wins found this spin"),p(xe)&&setTimeout(ft,500))}}function Yt(){if(p(ie)<p(H)){alert(`Not enough credits! Balance: ${p(ie)}, Bet: ${p(H)}`),ut();return}E(ie,p(ie)-p(H)),gs(nt),E(_e,p(_e)+p(H)),E(ot,le([])),E(he,0),E(oe,!1),ct(),q=Ht(),Ae.forEach((u,m)=>u.start(60+m*10)),lt("spin")}function oa(u){E(ie,p(ie)+u),E(Fe,p(Fe)+u)}function la(){p(H)<rt&&E(H,le(Math.min(p(H)+1,rt)))}function ca(){p(H)>Vt&&E(H,le(Math.max(p(H)-1,Vt)))}function da(){E(H,rt)}function We(u){E(xe,!0),E(ye,le(u)),E($e,!1),ft()}function ut(){E(xe,!1),E(ye,0)}function ft(){if(!p(xe)||p(ye)<=0){ut();return}console.log(`Autoplay: Starting spin ${p(ye)} rounds left`),Yt(),gs(ye,-1)}function ua(){confirm("Reset all statistics?")&&(E(nt,0),E(_e,0),E(Fe,0))}var Xt=Dn(),Kt=Ve(Xt);{var fa=u=>{var m=$n(),c=v(w(m),2),b=v(w(c));k(c);var x=v(c,2);{var R=X=>{var Q=In(),je=v(w(Q));k(Q),ae(()=>j(je,` ${p(be)??""}`)),N(X,Q)};ee(x,X=>{p(be)&&X(R)})}var T=v(x,2),A=v(w(T));A.nodeValue=` ${Ue??""}`,k(T);var P=v(T,2),I=v(w(P));I.nodeValue=` ${at??""}`,k(P);var y=v(P,2),F=v(w(y));k(y);var V=v(y,2);{var te=X=>{var Q=Cn(),je=w(Q),Ta=w(je);k(je);var Oa=v(je,2);xs(Oa,17,()=>J,bs,(Ra,Pa)=>{var kt=Bn(),Ia=w(kt,!0);k(kt),ae(()=>j(Ia,p(Pa))),N(Ra,kt)}),k(Q),ae(()=>j(Ta,`Log (${J.length??""})`)),N(X,Q)};ee(V,X=>{J.length>0&&X(te)})}k(m),ae(()=>{j(b,` ${p(Ce)??""}`),j(F,` ${Pe.a??""}`)}),N(u,m)};ee(Kt,u=>{(p(Ce)!=="Assets loaded successfully!"||p(be))&&u(fa)})}var Qt=v(Kt,2);{var pa=u=>{var m=qn(),c=v(w(m),2),b=w(c);k(c);var x=v(c,2);xs(x,17,()=>p(ot),bs,(T,A)=>{var P=Mn(),I=w(P),y=v(I);{var F=V=>{var te=Fn(),X=w(te);k(te),ae(()=>j(X,`(${p(A).multiplier??""}x kerroin!)`)),N(V,te)};ee(y,V=>{p(A).multiplier&&p(A).multiplier>1&&V(F)})}k(P),ae(()=>j(I,`${p(A).count??""} × ${aa[p(A).symbol]??""} = ${p(A).payout??""} pistettä `)),N(T,P)});var R=v(x,2);k(m),ae(()=>j(b,`${p(he)??""} pistettä`)),W("click",R,()=>{E(oe,!1),ct(),console.log("Win popup closed, ready for next spin")}),N(u,m)};ee(Qt,u=>{p(he)>0&&p(oe)&&u(pa)})}var Jt=v(Qt,2);{var ha=u=>{var m=Wn(),c=v(w(m),8);k(m),W("click",c,()=>{E(Ke,!1)}),N(u,m)};ee(Jt,u=>{p(Ke)&&u(ha)})}var Zt=v(Jt,2);ur(Zt,u=>dt=u,()=>dt);var pt=v(Zt,2),ht=w(pt),es=v(w(ht),2),ga=w(es,!0);k(es),k(ht);var ts=v(ht,2),ss=v(w(ts),2),ma=w(ss,!0);k(ss),k(ts),k(pt);var gt=v(pt,2),as=v(w(gt),2),rs=w(as),mt=v(rs,2),va=w(mt,!0);k(mt);var ns=v(mt,2),ba=v(ns,2);k(as),k(gt);var is=v(gt,2),vt=v(is,2),bt=v(w(vt),2),os=v(w(bt),2),xa=w(os,!0);k(os),k(bt);var xt=v(bt,2),ls=v(w(xt),2),ya=w(ls,!0);k(ls),k(xt);var yt=v(xt,2),cs=v(w(yt),2),_a=w(cs,!0);k(cs),k(yt);var _t=v(yt,2),At=v(w(_t),2),Aa=w(At);k(At),k(_t);var wa=v(_t,2);k(vt);var wt=v(vt,2),ka=w(wt);{var Ea=u=>{var m=jn(),c=v(w(m),2),b=w(c);k(c);var x=v(c,2);k(m),ae(()=>j(b,`${p(ye)??""} left`)),W("click",x,ut),N(u,m)},Sa=u=>{var m=Un(),c=Ve(m),b=v(c,2);{var x=R=>{var T=Nn(),A=v(w(T),2),P=v(A,2),I=v(P,2),y=v(I,2),F=v(y,2),V=v(F,2);k(T),W("click",A,()=>We(10)),W("click",P,()=>We(100)),W("click",I,()=>We(1e3)),W("click",y,()=>We(1e4)),W("click",F,()=>We(1e5)),W("click",V,()=>{E($e,!1)}),N(R,T)};ee(b,R=>{p($e)&&R(x)})}W("click",c,()=>{E($e,!p($e))}),N(u,m)};ee(ka,u=>{p(xe)?u(Ea):u(Sa,!1)})}k(wt);var we=v(wt,2),La=w(we,!0);k(we);var ds=v(we,2);ke(ds,"style",`
    position: absolute;
    left: ${l}px;                    /* X-koordinaatti (säädettävissä) */
    top: ${h}px;                     /* Y-koordinaatti (säädettävissä) */
    width: 60px;                           /* Napin leveys */
    height: 60px;                          /* Napin korkeus */
    border-radius: 50%;                    /* Pyöreä muoto */
    background-color: rgba(0,255,0,0.2);   /* Vihreä, läpinäkyvä */
    border: 2px solid rgba(0,255,0,0.5);   /* Vihreä reunus */
    cursor: pointer;                       /* Käsi-kursori hover:ssa */
    z-index: 1000;                         /* Varmista että nappi on päällimmäisenä */
    font-size: 0;                          /* Piilota teksti */
  `),ae((u,m,c,b,x)=>{j(ga,u),j(ma,p(H)),j(va,p(H)),j(xa,m),j(ya,c),j(_a,b),ke(At,"style",`color: ${x??""};`),j(Aa,`${p(it)??""}%`),ke(we,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(p(pe)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(p(pe)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),ke(we,"title",p(pe)?"Mykistä äänet":"Laita äänet päälle"),j(La,p(pe)?"🔊":"🔇")},[()=>p(ie).toLocaleString(),()=>p(nt).toLocaleString(),()=>p(_e).toLocaleString(),()=>p(Fe).toLocaleString(),()=>parseFloat(p(it))>=95?"#00ff00":parseFloat(p(it))>=85?"#ffff00":"#ff6666"]),W("click",rs,ca),W("click",ns,la),W("click",ba,da),W("click",is,()=>{E(Ke,!p(Ke))}),W("click",wa,ua),W("click",we,()=>{E(pe,!p(pe))}),W("click",ds,Yt),N(t,Xt),Cs()}var Vn=D('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),Gn=D('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function Hn(t,e){Is(e,!1);let s=fr(e,"isAuthenticated",12,!1),a=Ct(""),r=Ct(!1);const n="slot2024";function i(){p(a)===n?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(E(r,!0),E(a,""),setTimeout(()=>E(r,!1),3e3))}Bs(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),qa();var o=Ma(),d=Ve(o);{var f=l=>{var h=Gn(),g=w(h),_=v(w(g),4),S=w(_);Er(S),dr(2),k(_);var z=v(_,2);{var $=L=>{var C=Vn();N(L,C)};ee(z,L=>{p(r)&&L($)})}k(g),k(h),Lr(S,()=>p(a),L=>E(a,L)),W("submit",_,Tr(i)),N(l,h)};ee(d,l=>{s()||l(f)})}N(t,o),Cs()}var Yn=D('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),Xn=D("<!> <!>",1);function oi(t){let e=Ct(!1);var s=Xn(),a=Ve(s);Hn(a,{get isAuthenticated(){return p(e)},set isAuthenticated(i){E(e,i)},$$legacy:!0});var r=v(a,2);{var n=i=>{var o=Yn(),d=v(Ve(o),2);zn(d,{}),N(i,o)};ee(r,i=>{p(e)&&i(n)})}N(t,s)}export{Us as A,Ws as C,Fr as R,Pr as S,Ds as V,oi as _,Rr as u};
