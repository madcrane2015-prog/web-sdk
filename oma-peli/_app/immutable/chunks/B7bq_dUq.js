const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ihCl2r2G.js","./DNWEu6uq.js","./DEliLNnF.js","./DWgShhht.js","./C04N3yhf.js","./C2GHuDhf.js","./DvCpHiR0.js","./DbZoDibV.js"])))=>i.map(i=>d[i]);
var $a=Object.defineProperty;var Ma=(t,e,s)=>e in t?$a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var Z=(t,e,s)=>Ma(t,typeof e!="symbol"?e+"":e,s);import{f as qa,l as Wa,t as D,g as q,a as j,d as ja}from"./DRDKHArV.js";import{i as Na}from"./Dw5_DM93.js";import{y as re,j as Ua,a8 as Da,F as p,Q as za,aa as Va,ab as hs,h as gs,e as Lt,k as De,l as Ga,ac as Is,w as Bs,ad as Ha,q as Cs,a7 as Ya,U as Xa,a2 as ms,aq as Ot,z as vs,ar as Ka,as as Qa,at as Ja,o as Za,au as er,av as tr,aw as sr,ax as ar,b as rr,ay as nr,az as ir,a6 as or,aA as lr,aB as cr,D as dr,L as ur,p as Fs,ah as U,ag as $s,T as E,aC as bs,f as He,s as v,c as w,r as k,t as ae,I as fr,a as Ms,aD as pr,aE as Mt}from"./DWgShhht.js";import{_ as xs,p as le,i as ee}from"./DEliLNnF.js";import{s as W}from"./4RjN9yQL.js";import{b as hr,p as gr}from"./B1_V_3zc.js";import{b as ze}from"./DqV6W88t.js";import{e as ue,E as O,a as mr,C as Nt,Q as st,V as at,N as Pt,D as X,H as vr,p as be,a0 as Pe,a1 as xe,a2 as br,w as de,a3 as Ge,a4 as qs,a5 as Re,a6 as ne,a7 as rt,a8 as Ws,a9 as xr,aa as Rt,ab as yr,ac as _r,y as Ze}from"./DNWEu6uq.js";import{A as Ar,B as ys,G as wr,T as js,a as kr,b as It}from"./C04N3yhf.js";function _s(t,e){return e}function Er(t,e,s,a){for(var r=[],n=e.length,i=0;i<n;i++)Ja(e[i].e,r,!0);var o=n>0&&r.length===0&&s!==null;if(o){var d=s.parentNode;Za(d),d.append(s),a.clear(),ce(t,e[0].prev,e[n-1].next)}er(r,()=>{for(var f=0;f<n;f++){var l=e[f];o||(a.delete(l.k),ce(t,l.prev,l.next)),tr(l.e,!o)}})}function As(t,e,s,a,r,n=null){var i=t,o={flags:e,items:new Map,first:null};re&&Ua();var d=null,f=!1,l=za(()=>{var h=s();return Ya(h)?h:h==null?[]:Cs(h)});Da(()=>{var h=p(l),g=h.length;if(f&&g===0)return;f=g===0;let y=!1;if(re){var S=i.data===Va;S!==(g===0)&&(i=hs(),gs(i),Lt(!1),y=!0)}if(re){for(var z=null,F,T=0;T<g;T++){if(De.nodeType===8&&De.data===Ga){i=De,y=!0,Lt(!1);break}var C=h[T],V=a(C,T);F=Ns(De,o,z,null,C,V,T,r,e,s),o.items.set(V,F),z=F}g>0&&gs(hs())}re||Sr(h,o,i,r,e,a,s),n!==null&&(g===0?d?Is(d):d=Bs(()=>n(i)):d!==null&&Ha(d,()=>{d=null})),y&&Lt(!0),p(l)}),re&&(i=De)}function Sr(t,e,s,a,r,n,i){var o=t.length,d=e.items,f=e.first,l=f,h,g=null,y=[],S=[],z,F,T,C;for(C=0;C<o;C+=1){if(z=t[C],F=n(z,C),T=d.get(F),T===void 0){var V=l?l.e.nodes_start:s;g=Ns(V,e,g,g===null?e.first:g.next,z,F,C,a,r,i),d.set(F,g),y=[],S=[],l=g.next;continue}if(Tr(T,z,C),(T.e.f&Ot)!==0&&Is(T.e),T!==l){if(h!==void 0&&h.has(T)){if(y.length<S.length){var H=S[0],te;g=H.prev;var Ye=y[0],fe=y[y.length-1];for(te=0;te<y.length;te+=1)ws(y[te],H,s);for(te=0;te<S.length;te+=1)h.delete(S[te]);ce(e,Ye.prev,fe.next),ce(e,g,Ye),ce(e,fe,H),l=H,g=fe,C-=1,y=[],S=[]}else h.delete(T),ws(T,l,s),ce(e,T.prev,T.next),ce(e,T,g===null?e.first:g.next),ce(e,g,T),g=T;continue}for(y=[],S=[];l!==null&&l.k!==F;)(l.e.f&Ot)===0&&(h??(h=new Set)).add(l),S.push(l),l=l.next;if(l===null)continue;T=l}y.push(T),g=T,l=T.next}if(l!==null||h!==void 0){for(var Xe=h===void 0?[]:Cs(h);l!==null;)(l.e.f&Ot)===0&&Xe.push(l),l=l.next;var $=Xe.length;if($>0){var Be=null;Er(e,Xe,Be,d)}}vs.first=e.first&&e.first.e,vs.last=g&&g.e}function Tr(t,e,s,a){Qa(t.v,e),t.i=s}function Ns(t,e,s,a,r,n,i,o,d,f){var l=(d&sr)!==0,h=(d&ar)===0,g=l?h?Xa(r):ms(r):r,y=(d&Ka)===0?i:ms(i),S={i:y,v:g,k:n,a:null,e:null,prev:s,next:a};try{return S.e=Bs(()=>o(t,g,y,f),re),S.e.prev=s&&s.e,S.e.next=a&&a.e,s===null?e.first=S:(s.next=S,s.e.next=S.e),a!==null&&(a.prev=S,a.e.prev=S.e),S}finally{}}function ws(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,r=e?e.e.nodes_start:s,n=t.e.nodes_start;n!==a;){var i=rr(n);r.before(n),n=i}}function ce(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function Lr(t){if(re){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;Se(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var r=t.checked;Se(t,"checked",null),t.checked=r}}};t.__on_r=s,nr(s),qa()}}function Se(t,e,s,a){var r=t.__attributes??(t.__attributes={});re&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[ir]=s),s==null?t.removeAttribute(e):typeof s!="string"&&Or(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var ks=new Map;function Or(t){var e=ks.get(t.nodeName);if(e)return e;ks.set(t.nodeName,e=[]);for(var s,a=t,r=Element.prototype;r!==a;){s=lr(a);for(var n in s)s[n].set&&e.push(n);a=or(a)}return e}function Pr(t,e,s=e){var a=cr();Wa(t,"input",r=>{var n=r?t.defaultValue:t.value;if(n=Bt(t)?Ct(n):n,s(n),a&&n!==(n=e())){var i=t.selectionStart,o=t.selectionEnd;t.value=n??"",o!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(o,t.value.length))}}),(re&&t.defaultValue!==t.value||dr(e)==null&&t.value)&&s(Bt(t)?Ct(t.value):t.value),ur(()=>{var r=e();Bt(t)&&r===Ct(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function Bt(t){var e=t.type;return e==="number"||e==="range"}function Ct(t){return t===""?null:+t}function Rr(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const qt=[];ue.handleByNamedList(O.Environment,qt);async function Ir(t){if(!t)for(let e=0;e<qt.length;e++){const s=qt[e];if(s.value.test()){await s.value.load();return}}}let Ve;function Br(){if(typeof Ve=="boolean")return Ve;try{Ve=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{Ve=!1}return Ve}var Us=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(Us||{});class Cr{constructor(e){this.items=[],this._name=e}emit(e,s,a,r,n,i,o,d){const{name:f,items:l}=this;for(let h=0,g=l.length;h<g;h++)l[h][f](e,s,a,r,n,i,o,d);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Fr=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Ds=class zs extends mr{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...Fr,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Ir(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...zs.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof Nt&&(a={container:a},s&&(st(at,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const r=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=r?a.clearColor:Pt.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const r=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==r&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Us.ALL);const{clear:a,clearColor:r,target:n}=e;Pt.shared.setValue(r??this.background.colorRgba),s.renderTarget.clear(n,a,Pt.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new Cr(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const r in this.runners)this.runners[r].add(a);return this}_addPipes(e,s){const a=s.reduce((r,n)=>(r[n.name]=n.value,r),{});e.forEach(r=>{const n=r.value,i=r.name,o=a[i];this.renderPipes[i]=new n(this,o?new o:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Br())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Ds.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Vs=Ds,et;function $r(t){return et!==void 0||(et=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??Vs.defaultOptions.failIfMajorPerformanceCaveat};try{if(!X.get().getWebGLRenderingContext())return!1;let r=X.get().createCanvas().getContext("webgl",e);const n=!!((s=r==null?void 0:r.getContextAttributes())!=null&&s.stencil);if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,n}catch{return!1}})()),et}let tt;async function Mr(t={}){return tt!==void 0||(tt=await(async()=>{const e=X.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),tt}const Es=["webgl","webgpu","canvas"];async function qr(t){let e=[];t.preference?(e.push(t.preference),Es.forEach(n=>{n!==t.preference&&e.push(n)})):e=Es.slice();let s,a={};for(let n=0;n<e.length;n++){const i=e[n];if(i==="webgpu"&&await Mr()){const{WebGPURenderer:o}=await xs(async()=>{const{WebGPURenderer:d}=await import("./ihCl2r2G.js");return{WebGPURenderer:d}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=o,a={...t,...t.webgpu};break}else if(i==="webgl"&&$r(t.failIfMajorPerformanceCaveat??Vs.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:o}=await xs(async()=>{const{WebGLRenderer:d}=await import("./DbZoDibV.js");return{WebGLRenderer:d}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=o,a={...t,...t.webgl};break}else if(i==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const r=new s;return await r.init(a),r}const Gs="8.8.1";class Hs{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Gs)}static destroy(){}}Hs.extension=O.Application;class Wr{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Gs)}destroy(){this._renderer=null}}Wr.extension={type:[O.WebGLSystem,O.WebGPUSystem],name:"initHook",priority:-10};const Ys=class Wt{constructor(...e){this.stage=new Nt,e[0]!==void 0&&st(at,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await qr(e),Wt._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return st(at,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=Wt._plugins.slice(0);a.reverse(),a.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Ys._plugins=[];let Xs=Ys;ue.handleByList(O.Application,Xs._plugins);ue.add(Hs);class Ks extends Ar{constructor(e,s){super();const{textures:a,data:r}=e;Object.keys(r.pages).forEach(n=>{const i=r.pages[parseInt(n,10)],o=a[i.id];this.pages.push({texture:o})}),Object.keys(r.chars).forEach(n=>{const i=r.chars[n],{frame:o,source:d}=a[i.page],f=new vr(i.x+o.x,i.y+o.y,i.width,i.height),l=new be({source:d,frame:f});this.chars[n]={id:n.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:l}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){ys.install(e)}static uninstall(e){ys.uninstall(e)}}const Ft={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const h in e){const g=e[h].match(/^[a-z]+/gm)[0],y=e[h].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),S={};for(const z in y){const F=y[z].split("="),T=F[0],C=F[1].replace(/"/gm,""),V=parseFloat(C),H=isNaN(V)?C:V;S[T]=H}s[g].push(S)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=s.info,[n]=s.common,[i]=s.distanceField??[];i&&(a.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),a.fontSize=parseInt(r.size,10),a.fontFamily=r.face,a.lineHeight=parseInt(n.lineHeight,10);const o=s.page;for(let h=0;h<o.length;h++)a.pages.push({id:parseInt(o[h].id,10)||0,file:o[h].file});const d={};a.baseLineOffset=a.lineHeight-parseInt(n.base,10);const f=s.char;for(let h=0;h<f.length;h++){const g=f[h],y=parseInt(g.id,10);let S=g.letter??g.char??String.fromCharCode(y);S==="space"&&(S=" "),d[y]=S,a.chars[S]={id:y,page:parseInt(g.page,10)||0,x:parseInt(g.x,10),y:parseInt(g.y,10),width:parseInt(g.width,10),height:parseInt(g.height,10),xOffset:parseInt(g.xoffset,10),yOffset:parseInt(g.yoffset,10),xAdvance:parseInt(g.xadvance,10),kerning:{}}}const l=s.kerning||[];for(let h=0;h<l.length;h++){const g=parseInt(l[h].first,10),y=parseInt(l[h].second,10),S=parseInt(l[h].amount,10);a.chars[d[y]].kerning[d[g]]=S}return a}},Ss={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const n=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),o=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let f=0;f<n.length;f++)e.pages.push({id:parseInt(n[f].getAttribute("id"),10)||0,file:n[f].getAttribute("file")});const d={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let f=0;f<i.length;f++){const l=i[f],h=parseInt(l.getAttribute("id"),10);let g=l.getAttribute("letter")??l.getAttribute("char")??String.fromCharCode(h);g==="space"&&(g=" "),d[h]=g,e.chars[g]={id:h,page:parseInt(l.getAttribute("page"),10)||0,x:parseInt(l.getAttribute("x"),10),y:parseInt(l.getAttribute("y"),10),width:parseInt(l.getAttribute("width"),10),height:parseInt(l.getAttribute("height"),10),xOffset:parseInt(l.getAttribute("xoffset"),10),yOffset:parseInt(l.getAttribute("yoffset"),10),xAdvance:parseInt(l.getAttribute("xadvance"),10),kerning:{}}}for(let f=0;f<o.length;f++){const l=parseInt(o[f].getAttribute("first"),10),h=parseInt(o[f].getAttribute("second"),10),g=parseInt(o[f].getAttribute("amount"),10);e.chars[d[h]].kerning[d[l]]=g}return e}},Ts={test(t){return typeof t=="string"&&t.includes("<font>")?Ss.test(X.get().parseXML(t)):!1},parse(t){return Ss.parse(X.get().parseXML(t))}},jr=[".xml",".fnt"],Nr={extension:{type:O.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof Ks,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},Ur={extension:{type:O.LoadParser,priority:Pe.Normal},name:"loadBitmapFont",test(t){return jr.includes(xe.extname(t).toLowerCase())},async testParse(t){return Ft.test(t)||Ts.test(t)},async parse(t,e,s){const a=Ft.test(t)?Ft.parse(t):Ts.parse(t),{src:r}=e,{pages:n}=a,i=[],o=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let h=0;h<n.length;++h){const g=n[h].file;let y=xe.join(xe.dirname(r),g);y=br(y,r),i.push({src:y,data:o})}const d=await s.load(i),f=i.map(h=>d[h.src]);return new Ks({data:a,textures:f},r)},async load(t,e){return await(await X.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class Dr{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const zr={extension:{type:O.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof be),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((r,n)=>{s[a+(n===0?"":n+1)]=r})}),s}};async function Qs(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Vr={extension:{type:O.DetectionParser,priority:1},test:async()=>Qs("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},Ls=["png","jpg","jpeg"],Gr={extension:{type:O.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...Ls],remove:async t=>t.filter(e=>!Ls.includes(e))},Hr="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Ut(t){return Hr?!1:document.createElement("video").canPlayType(t)!==""}const Yr={extension:{type:O.DetectionParser,priority:0},test:async()=>Ut("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},Xr={extension:{type:O.DetectionParser,priority:0},test:async()=>Ut("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},Kr={extension:{type:O.DetectionParser,priority:0},test:async()=>Ut("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},Qr={extension:{type:O.DetectionParser,priority:0},test:async()=>Qs("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class Jr{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var i,o;let r=null,n=null;if(s.loadParser&&(n=this._parserHash[s.loadParser],n||de(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!n){for(let d=0;d<this.parsers.length;d++){const f=this.parsers[d];if(f.load&&((i=f.test)!=null&&i.call(f,e,s,this))){n=f;break}}if(!n)return de(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await n.load(e,s,this),a.parser=n;for(let d=0;d<this.parsers.length;d++){const f=this.parsers[d];f.parse&&f.parse&&await((o=f.testParse)==null?void 0:o.call(f,r,s,this))&&(r=await f.parse(r,s,this)||r,a.parser=f)}return r})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const r={},n=qs(e),i=Ge(e,f=>({alias:[f],src:f,data:{}})),o=i.length,d=i.map(async f=>{const l=xe.toAbsolute(f.src);if(!r[f.src])try{this.promiseCache[l]||(this.promiseCache[l]=this._getLoadPromiseAndParser(l,f)),r[f.src]=await this.promiseCache[l].promise,s&&s(++a/o)}catch(h){throw delete this.promiseCache[l],delete r[f.src],new Error(`[Loader.load] Failed to load ${l}.
${h}`)}});return await Promise.all(d),n?r[i[0].src]:r}async unload(e){const a=Ge(e,r=>({alias:[r],src:r})).map(async r=>{var o,d;const n=xe.toAbsolute(r.src),i=this.promiseCache[n];if(i){const f=await i.promise;delete this.promiseCache[n],await((d=(o=i.parser)==null?void 0:o.unload)==null?void 0:d.call(o,f,r,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&de(`[Assets] loadParser name conflict "${s.name}"`):de("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function Ie(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const Zr=".json",en="application/json",tn={extension:{type:O.LoadParser,priority:Pe.Low},name:"loadJson",test(t){return Ie(t,en)||Re(t,Zr)},async load(t){return await(await X.get().fetch(t)).json()}},sn=".txt",an="text/plain",rn={name:"loadTxt",extension:{type:O.LoadParser,priority:Pe.Low,name:"loadTxt"},test(t){return Ie(t,an)||Re(t,sn)},async load(t){return await(await X.get().fetch(t)).text()}},nn=["normal","bold","100","200","300","400","500","600","700","800","900"],on=[".ttf",".otf",".woff",".woff2"],ln=["font/ttf","font/otf","font/woff","font/woff2"],cn=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function dn(t){const e=xe.extname(t),r=xe.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(o=>o.charAt(0).toUpperCase()+o.slice(1));let n=r.length>0;for(const o of r)if(!o.match(cn)){n=!1;break}let i=r.join(" ");return n||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const un=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function fn(t){return un.test(t)?t:encodeURI(t)}const pn={extension:{type:O.LoadParser,priority:Pe.Low},name:"loadWebFont",test(t){return Ie(t,ln)||Re(t,on)},async load(t,e){var a,r,n;const s=X.get().getFontFaceSet();if(s){const i=[],o=((a=e.data)==null?void 0:a.family)??dn(t),d=((n=(r=e.data)==null?void 0:r.weights)==null?void 0:n.filter(l=>nn.includes(l)))??["normal"],f=e.data??{};for(let l=0;l<d.length;l++){const h=d[l],g=new FontFace(o,`url(${fn(t)})`,{...f,weight:h});await g.load(),s.add(g),i.push(g)}return ne.set(`${o}-and-url`,{url:t,fontFaces:i}),i.length===1?i[0]:i}return de("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{ne.remove(`${e.family}-and-url`),X.get().getFontFaceSet().delete(e)})}};function Dt(t,e=1){var a;const s=(a=rt.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function zt(t,e,s){t.label=s,t._sourceOrigin=s;const a=new be({source:t,label:s}),r=()=>{delete e.promiseCache[s],ne.has(s)&&ne.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(de("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),a.once("destroy",()=>{t.destroyed||(de("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),a}const hn=".svg",gn="image/svg+xml",mn={extension:{type:O.LoadParser,priority:Pe.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return Ie(t,gn)||Re(t,hn)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?bn(t):vn(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function vn(t,e,s,a){var F,T,C;const n=await(await X.get().fetch(t)).blob(),i=URL.createObjectURL(n),o=new Image;o.src=i,o.crossOrigin=a,await o.decode(),URL.revokeObjectURL(i);const d=document.createElement("canvas"),f=d.getContext("2d"),l=((F=e.data)==null?void 0:F.resolution)||Dt(t),h=((T=e.data)==null?void 0:T.width)??o.width,g=((C=e.data)==null?void 0:C.height)??o.height;d.width=h*l,d.height=g*l,f.drawImage(o,0,0,h*l,g*l);const{parseAsGraphicsContext:y,...S}=e.data??{},z=new Ws({resource:d,alphaMode:"premultiply-alpha-on-upload",resolution:l,...S});return zt(z,s,t)}async function bn(t){const s=await(await X.get().fetch(t)).text(),a=new wr;return a.svg(s),a}const xn=`(function () {
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
`;let Le=null,jt=class{constructor(){Le||(Le=URL.createObjectURL(new Blob([xn],{type:"application/javascript"}))),this.worker=new Worker(Le)}};jt.revokeObjectURL=function(){Le&&(URL.revokeObjectURL(Le),Le=null)};const yn=`(function () {
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
`;let Oe=null;class Js{constructor(){Oe||(Oe=URL.createObjectURL(new Blob([yn],{type:"application/javascript"}))),this.worker=new Worker(Oe)}}Js.revokeObjectURL=function(){Oe&&(URL.revokeObjectURL(Oe),Oe=null)};let Os=0,$t;class _n{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new jt;s.addEventListener("message",a=>{s.terminate(),jt.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){$t===void 0&&($t=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<$t&&(this._createdWorkers++,e=new Js().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((r,n)=>{this._queue.push({id:e,arguments:s,resolve:r,reject:n})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[Os]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:Os++,id:a})}}const Ps=new _n,An=[".jpeg",".jpg",".png",".webp",".avif"],wn=["image/jpeg","image/png","image/webp","image/avif"];async function kn(t,e){var r;const s=await X.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const Zs={name:"loadTextures",extension:{type:O.LoadParser,priority:Pe.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return Ie(t,wn)||Re(t,An)},async load(t,e,s){var n;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Ps.isImageBitmapSupported()?a=await Ps.loadImageBitmap(t,e):a=await kn(t,e):a=await new Promise((i,o)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?i(a):(a.onload=()=>{i(a)},a.onerror=o)});const r=new Ws({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((n=e.data)==null?void 0:n.resolution)||Dt(t),...e.data});return zt(r,s,t)},unload(t){t.destroy(!0)}},ea=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],En=ea.map(t=>`video/${t.substring(1)}`);function Sn(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=Ln(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function Tn(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",r),t.load();function a(){n(),e()}function r(i){n(),s(i)}function n(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",r)}})}function Ln(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const On={name:"loadVideo",extension:{type:O.LoadParser,name:"loadVideo"},test(t){const e=Ie(t,En),s=Re(t,ea);return e||s},async load(t,e,s){var d,f;const a={...Rt.defaultOptions,resolution:((d=e.data)==null?void 0:d.resolution)||Dt(t),alphaMode:((f=e.data)==null?void 0:f.alphaMode)||await xr(),...e.data},r=document.createElement("video"),n={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(n).forEach(l=>{const h=n[l];h!==void 0&&r.setAttribute(l,h)}),a.muted===!0&&(r.muted=!0),Sn(r,t,a.crossorigin);const i=document.createElement("source");let o;if(t.startsWith("data:"))o=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const l=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();o=Rt.MIME_TYPES[l]||`video/${l}`}return i.src=t,o&&(i.type=o),new Promise(l=>{const h=async()=>{const g=new Rt({...a,resource:r});r.removeEventListener("canplay",h),e.data.preload&&await Tn(r),l(zt(g,s,t))};r.addEventListener("canplay",h),r.appendChild(i)})},unload(t){t.destroy(!0)}},ta={extension:{type:O.ResolveParser,name:"resolveTexture"},test:Zs.test,parse:t=>{var e;return{resolution:parseFloat(((e=rt.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},Pn={extension:{type:O.ResolveParser,priority:-2,name:"resolveJson"},test:t=>rt.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:ta.parse};class Rn{constructor(){this._detections=[],this._initialized=!1,this.resolver=new rt,this.loader=new Jr,this.cache=ne,this._backgroundLoader=new Dr(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var n,i;if(this._initialized){de("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let o=e.manifest;typeof o=="string"&&(o=await this.load(o)),this.resolver.addManifest(o)}const s=((n=e.texturePreference)==null?void 0:n.resolution)??1,a=typeof s=="number"?[s]:s,r=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=qs(e),r=Ge(e).map(o=>{if(typeof o!="string"){const d=this.resolver.getAlias(o);return d.some(f=>!this.resolver.hasKey(f))&&this.add(o),Array.isArray(d)?d[0]:d}return this.resolver.hasKey(o)||this.add({alias:o,src:o}),o}),n=this.resolver.resolve(r),i=await this._mapLoadToResolve(n,s);return a?i[r[0]]:i}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const r=this.resolver.resolveBundle(e),n={},i=Object.keys(r);let o=0,d=0;const f=()=>{s==null||s(++o/d)},l=i.map(h=>{const g=r[h];return d+=Object.keys(g).length,this._mapLoadToResolve(g,f).then(y=>{n[h]=y})});return await Promise.all(l),a?n[e[0]]:n}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return ne.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=ne.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(a,s);this._backgroundLoader.active=!0;const n={};return a.forEach(i=>{const o=r[i.src],d=[i.src];i.alias&&d.push(...i.alias),d.forEach(f=>{n[f]=o}),ne.set(d,o)}),n}async unload(e){this._initialized||await this.init();const s=Ge(e).map(r=>typeof r!="string"?r.src:r),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=Ge(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(r=>this._unloadFromResolved(s[r]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{ne.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,r)=>s.indexOf(a)===r),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const Te=new Rn;ue.handleByList(O.LoadParser,Te.loader.parsers).handleByList(O.ResolveParser,Te.resolver.parsers).handleByList(O.CacheParser,Te.cache.parsers).handleByList(O.DetectionParser,Te.detections);ue.add(zr,Gr,Vr,Qr,Yr,Xr,Kr,tn,rn,pn,mn,Zs,On,Ur,Nr,ta,Pn);const Rs={loader:O.LoadParser,resolver:O.ResolveParser,cache:O.CacheParser,detection:O.DetectionParser};ue.handle(O.Asset,t=>{const e=t.ref;Object.entries(Rs).filter(([s])=>!!e[s]).forEach(([s,a])=>ue.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(Rs).filter(s=>!!e[s]).forEach(s=>ue.remove(e[s]))});class In extends yr{constructor(e,s){const{text:a,resolution:r,style:n,anchor:i,width:o,height:d,roundPixels:f,...l}=e;super({...l}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=n,this.resolution=r??null,this.allowChildren=!1,this._anchor=new _r({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=f??!1,o!==void 0&&(this.width=o),d!==void 0&&(this.height=d)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,r=-s*this.anchor.x;let n=0;return e.x>=r&&e.x<=r+s&&(n=-a*this.anchor.y,e.y>=n&&e.y<=n+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function Bn(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(st(at,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class Cn extends In{constructor(...e){const s=Bn(e,"Text");super(s,js),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=kr.measureText(this._text,this._style),{width:r,height:n}=a;e.minX=-s._x*r,e.maxX=e.minX+r,e.minY=-s._y*n,e.maxY=e.minY+n}}var Fn=D('<p style="color: red;" class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Error:</strong> </p>'),$n=D('<div class="svelte-1t2q5b9"> </div>'),Mn=D('<details class="svelte-1t2q5b9"><summary class="svelte-1t2q5b9"> </summary> <!></details>'),qn=D(`<div style="
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
  " class="svelte-1t2q5b9"><h3 class="svelte-1t2q5b9">🎰 Oma-peli Debug</h3> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Status:</strong> </p> <!> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Base:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">BG URL:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Sample:</strong> </p> <!></div>`),Wn=D('<span style="color: #ffd700; font-weight: bold;" class="svelte-1t2q5b9"> </span>'),jn=D('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-1t2q5b9"> <!></div>'),Nn=D(`<div style="
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
      " class="svelte-1t2q5b9">Jatka pelaamista</button></div>`),Un=D(`<div style="
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
      " class="svelte-1t2q5b9">Sulje</button></div>`),Dn=D(`<div style="
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
        " class="svelte-1t2q5b9">⏹ STOP</button></div>`),zn=D(`<div style="
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
          " class="svelte-1t2q5b9">Cancel</button></div>`),Vn=D(`<button style="
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
      " class="svelte-1t2q5b9">🔄 AUTOPLAY</button> <!>`,1),Gn=D(`<!> <!> <!> <div class="svelte-1t2q5b9"></div> <div style="
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
" class="svelte-1t2q5b9"><!></div> <button class="svelte-1t2q5b9"> </button> <button title="SPIN" class="svelte-1t2q5b9"></button>`,1);function Hn(t,e){Fs(e,!0);const s=13,a=1445,r=1e3,n=1.75,i=-30,o=-10,d=160,f=0,l=720,h=750,g=.8,y=50,S=30,z=-40,F=1,T="height",V=Math.round(100*n),H=Math.round(V*(700/760)),Ye=H+10,fe=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],$=typeof window<"u"&&window.location.hostname.includes("github.io")?"/web-sdk/oma-peli/symbols":`${ze}/symbols`,Be={a:`${$}/Blue_hotrod.jpg`,b:`${$}/Blue_jacket.jpg`,c:`${$}/Blue_rollers.jpg`,d:`${$}/Blue_speakers.jpg`,e:`${$}/Premium_blonde.jpg`,f:`${$}/Premium_brunette.jpg`,g:`${$}/Premium_rocker.jpg`,h:`${$}/Red_bubblegum.jpg`,i:`${$}/Red_burger.jpg`,j:`${$}/Red_fries.jpg`,k:`${$}/Red_milkshake.jpg`,l:`${$}/Scatter.jpg`,emptyslot:`${$}/Emptyslot.jpg`},nt=`${$}/bg_base.jpg`,Vt=`${$}/ReelFrames.png`,Gt=`${$}/RockABillyReels_logo.png`,Ht={spin:`${ze}/sounds/spin.mp3`,stop:`${ze}/sounds/stop.mp3`,win:`${ze}/sounds/win.mp3`};let pe=U(!0),Ke={},Qe=null,ye=null,Ce=null,Fe=null,$e=U("Initializing..."),_e=U(""),Q=[],ie=U(1e3),G=U(10);const Yt=1,it=100;let he=U(!1),Ae=U(0),Me=U(!1),sa=U(0),ge=!1,se=null,ot=!1,lt=U(0),we=U(0),qe=U(0),ct=fr(()=>p(we)>0?(p(qe)/p(we)*100).toFixed(2):"0.00");function Xt(u){if(u===6){const b=Math.random()<.5?"emptyslot":"h";return console.log(`Reel ${u} (MIDDLE): ${b}`),b}const m=fe.filter(b=>b!=="emptyslot"),c=m[Math.floor(Math.random()*m.length)];return console.log(`Reel ${u} (NORMAL): ${c}, available: ${m.length}`),c}function Kt(){const u=[];for(let m=0;m<s;m++)u.push(Xt(m));return u}function aa(u){return u<3?{col:0,row:u}:u<6?{col:1,row:u-3}:u===6?{col:2,row:0}:u<10?{col:3,row:u-7}:{col:4,row:u-10}}function We(u,m){return u===0?m:u===1?3+m:u===2?6:u===3?7+m:u===4?10+m:-1}const ra={k:{3:.025,4:.06,5:.24},j:{3:.025,4:.1,5:.48},i:{3:.025,4:.1,5:.48},c:{3:.06,4:.15,5:.9},d:{3:.06,4:.15,5:.9},b:{3:.08,4:.3,5:1.5},a:{3:.08,4:.3,5:1.5},f:{3:.15,4:.6,5:3},e:{3:.3,4:1.2,5:6},g:{3:.45,4:1.8,5:9},h:{},l:{},emptyslot:{}};function na(){var P;const u=[],m=[];for(let L=0;L<s;L++)M[L]==="l"&&m.push(L);if(m.length>=5){const L=8+(m.length-5);console.log(`🎰 SCATTER WIN! ${m.length} scatters = ${L} FREE SPINS!`),u.push({symbol:"l",count:m.length,payout:0,positions:m})}M[0],M[1],M[2],M[3],M[4],M[5],M[6],M[7],M[8],M[9],M[10],M[11],M[12];const c=[];for(let L=0;L<3;L++)for(let A=0;A<3;A++)for(let R=0;R<1;R++)for(let I=0;I<3;I++)for(let _=0;_<3;_++){const N=[We(0,L),We(1,A),We(2,R),We(3,I),We(4,_)];c.push(N)}console.log(`Generated ${c.length} possible paths (should be 81)`);const b=new Map;for(const L of c){const A=L.map(_=>M[_]);if(A[0]==="emptyslot"||A[0]==="l")continue;let R=null;for(let _=0;_<A.length;_++)if(A[_]!=="h"&&A[_]!=="emptyslot"&&A[_]!=="l"){R=A[_];break}if(!R)continue;let I=0;for(let _=0;_<A.length;_++){const N=A[_];if(N===R||N==="h")I++;else break}if(I>=3){const _=`${R}-${I}`,N=b.get(_);N?N.lineCount++:b.set(_,{symbol:R,length:I,lineCount:1,examplePath:L.slice(0,I)})}}const x=[];for(const[L,A]of b.entries()){const R=(P=ra[A.symbol])==null?void 0:P[A.length];if(R!==void 0&&R>0){const I=R*p(G);console.log(`Win: ${A.length}x ${A.symbol} (found on ${A.lineCount} ways) = ${I}`),x.push({symbol:A.symbol,count:A.length,payout:I,positions:A.examplePath})}}return u.push(...x),u}let me=U(0),dt=U(le([])),oe=U(!1),Je=U(!1);const ia={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function ut(u){if(!p(pe)||!Ke[u])return;const m=Ke[u];m.currentTime=0,m.play().catch(c=>{console.warn("Äänen toisto epäonnistui:",u,c)})}function oa(u){je.forEach(m=>B.stage.removeChild(m)),je=[],u.forEach(m=>{m.positions.forEach(c=>{const b=ke[c],x=new It().rect(0,0,V,H).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});x.x=b.container.x,x.y=b.container.y,B.stage.addChild(x),je.push(x);let P=0,L=1;const A=.05;B.ticker.add(()=>{P+=L*A,P>=.4&&(L=-1),P<=0&&(L=1),x.alpha=.5+P})})})}function ft(){je.forEach(u=>B.stage.removeChild(u)),je=[]}let M=Kt(),pt,B,ke=[],je=[];class la{constructor(m,c){Z(this,"index");Z(this,"container");Z(this,"offset",0);Z(this,"speed",0);Z(this,"targetSpeed",30);Z(this,"state","idle");Z(this,"stopDelay",0);Z(this,"bounceOffset",0);Z(this,"bounceSpeed",0);Z(this,"bounceFrames",0);this.index=m,this.container=c}start(m){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=m}update(){this.state!=="idle"&&(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"&&(this.speed*=.92,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,ut("stop"))),this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=Ye&&(this.offset=0,M[this.index]=Xt(this.index))))}draw(){const m=this.container;m.removeChildren();const c=M[this.index];if(!c||!Qe||!Qe[c])return;const b=Qe[c];if(!b)return;const x=this.offset+this.bounceOffset,P=new Ze(b);P.width=V,P.height=H,P.x=0,P.y=x,m.addChild(P)}}$s(async()=>{B=new Xs,await B.init({width:a,height:r,background:"#001a33"}),pt.appendChild(B.canvas);const u={};try{E($e,"Loading background and UI images..."),Q.push(`Loading background: ${nt}`),Q.push(`Loading reel frames: ${Vt}`),Q.push(`Loading logo: ${Gt}`),await Te.load([{alias:"background",src:nt},{alias:"reelframes",src:Vt},{alias:"logo",src:Gt}]),ye=be.from("background"),Ce=be.from("reelframes"),Fe=be.from("logo"),console.log("✅ Background texture created:",ye.width,"x",ye.height),console.log("✅ Reel frames texture created:",Ce.width,"x",Ce.height),console.log("✅ Logo texture created:",Fe.width,"x",Fe.height),Q.push("✅ All UI images loaded"),E($e,"Loading symbols...");const c=[];for(const b of fe)c.push({alias:b,src:Be[b]});await Te.load(c);for(const b of fe){const x=Be[b];Q.push(`Loading symbol ${b}: ${x}`);try{const P=be.from(b);u[b]=P,console.log(`✅ Symbol ${b} loaded:`,P.width,"x",P.height),Q.push(`✅ Symbol ${b} loaded`)}catch(P){const L=`❌ Failed to load symbol ${b} from ${x}: ${P}`;throw Q.push(L),console.error(L),new Error(L)}}Qe=u,E($e,"Assets loaded successfully!")}catch(c){E(_e,`Asset loading failed: ${c}`),Q.push(p(_e)),console.error(p(_e));return}console.log("Ladataan ääniefektit...");for(const[c,b]of Object.entries(Ht)){const x=new Audio;x.src=b,x.preload="auto",x.volume=.7,x.load(),x.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${b} (käytetään hiljaista placeholderia)`)}),Ke[c]=x}console.log("Ladataan ääniefektit...");for(const[c,b]of Object.entries(Ht)){const x=new Audio;x.src=b,x.preload="auto",x.volume=.7,x.load(),x.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${b} (käytetään hiljaista placeholderia)`)}),Ke[c]=x}if(console.log("Taustakuva ladattu, tekstuuri:",ye),ye){const c=new Ze(ye);B.renderer.width/B.renderer.height;const b=c.texture.width/c.texture.height;let x;x=B.renderer.height/c.texture.height,x*=F,c.scale.set(x),c.x=(B.renderer.width-c.width)/2,c.y=(B.renderer.height-c.height)/2+z,B.stage.addChild(c),console.log("Taustakuva lisätty:",T,"mode, size:",c.width.toFixed(0),"x",c.height.toFixed(0),"image aspect:",b.toFixed(2),"scale:",x.toFixed(2),"pos:",c.x.toFixed(0),c.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(c=>({x:c.x+i,y:c.y+o})),ke=[];for(let c=0;c<s;c++){const b=aa(c),x=b.col,P=b.row,L=300+x*(V+20),A=250+P*(H+15),R=c===6?L+f:L,I=c===6?A+d:A,_=new Nt;_.x=R+i,_.y=I+o;const N=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],J=new It().rect(0,0,V,H).fill({color:N[c],alpha:.3});J.x=_.x,J.y=_.y,B.stage.addChild(J);const ve=new js({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),Y=new Cn({text:c.toString(),style:ve});Y.x=_.x+5,Y.y=_.y+5,B.stage.addChild(Y);const K=new It().rect(0,0,V,H).fill(16777215);K.x=_.x,K.y=_.y,_.mask=K,B.stage.addChild(K),B.stage.addChild(_),ke.push(new la(c,_))}if(Ce){const c=new Ze(Ce);c.scale.set(1),c.x=250,c.y=200,B.stage.addChild(c),console.log("Reel frames lisätty:",c.width.toFixed(0),"x",c.height.toFixed(0))}if(Fe){const c=new Ze(Fe);c.scale.set(g),c.x=(B.renderer.width-c.width)/2+y,c.y=S,B.stage.addChild(c),console.log("Logo lisätty päällimmäiseen layeriin:",c.width.toFixed(0),"x",c.height.toFixed(0))}B.ticker.add(ca)});function ca(){for(const u of ke)u.update(),u.draw();if(!p(oe)&&!ot&&ke.every(u=>u.state==="stopped")){ot=!0;const u=na();console.log(`Checking wins, found ${u.length} wins`),u.length>0?(E(dt,le(u)),E(me,le(u.reduce((m,c)=>m+c.payout,0))),da(p(me)),E(oe,!0),E(sa,le(Date.now())),console.log(`🎉 VOITTO! ${p(me)} pistettä! Uusi saldo: ${p(ie)}`),console.log(`isShowingWin set to: ${p(oe)}, totalWin: ${p(me)}`),u.forEach(m=>{const c=m.multiplier?` (${m.multiplier}x multiplier)`:"";console.log(`${m.count}x ${m.symbol} = ${m.payout} pistettä${c}`)}),oa(u),ut("win"),p(he)&&!ge&&(ge=!0,se=window.setTimeout(()=>{p(oe)&&p(he)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),E(oe,!1),ft()),se=window.setTimeout(()=>{ge=!1,gt()},200)},1500))):(console.log("No wins found this spin"),p(he)&&!ge&&(ge=!0,se=window.setTimeout(()=>{ge=!1,gt()},1e3)))}}function Qt(){if(p(ie)<p(G)){alert(`Not enough credits! Balance: ${p(ie)}, Bet: ${p(G)}`),ht();return}se!==null&&(clearTimeout(se),se=null),E(ie,p(ie)-p(G)),bs(lt),E(we,p(we)+p(G)),E(dt,le([])),E(me,0),E(oe,!1),ot=!1,ft(),M=Kt(),ke.forEach((u,m)=>u.start(60+m*10)),ut("spin")}function da(u){E(ie,p(ie)+u),E(qe,p(qe)+u)}function ua(){p(G)<it&&E(G,le(Math.min(p(G)+1,it)))}function fa(){p(G)>Yt&&E(G,le(Math.max(p(G)-1,Yt)))}function pa(){E(G,it)}function Ne(u){E(he,!0),E(Ae,le(u)),E(Me,!1),gt()}function ht(){E(he,!1),E(Ae,0),ge=!1,se!==null&&(clearTimeout(se),se=null)}function gt(){if(!p(he)||p(Ae)<=0){ht();return}console.log(`Autoplay: Starting spin ${p(Ae)} rounds left`),Qt(),bs(Ae,-1)}function ha(){confirm("Reset all statistics?")&&(E(lt,0),E(we,0),E(qe,0))}var Jt=Gn(),Zt=He(Jt);{var ga=u=>{var m=qn(),c=v(w(m),2),b=v(w(c));k(c);var x=v(c,2);{var P=Y=>{var K=Fn(),Ue=v(w(K));k(K),ae(()=>W(Ue,` ${p(_e)??""}`)),j(Y,K)};ee(x,Y=>{p(_e)&&Y(P)})}var L=v(x,2),A=v(w(L));A.nodeValue=` ${ze??""}`,k(L);var R=v(L,2),I=v(w(R));I.nodeValue=` ${nt??""}`,k(R);var _=v(R,2),N=v(w(_));k(_);var J=v(_,2);{var ve=Y=>{var K=Mn(),Ue=w(K),Ra=w(Ue);k(Ue);var Ia=v(Ue,2);As(Ia,17,()=>Q,_s,(Ba,Ca)=>{var Tt=$n(),Fa=w(Tt,!0);k(Tt),ae(()=>W(Fa,p(Ca))),j(Ba,Tt)}),k(K),ae(()=>W(Ra,`Log (${Q.length??""})`)),j(Y,K)};ee(J,Y=>{Q.length>0&&Y(ve)})}k(m),ae(()=>{W(b,` ${p($e)??""}`),W(N,` ${Be.a??""}`)}),j(u,m)};ee(Zt,u=>{(p($e)!=="Assets loaded successfully!"||p(_e))&&u(ga)})}var es=v(Zt,2);{var ma=u=>{var m=Nn(),c=v(w(m),2),b=w(c);k(c);var x=v(c,2);As(x,17,()=>p(dt),_s,(L,A)=>{var R=jn(),I=w(R),_=v(I);{var N=J=>{var ve=Wn(),Y=w(ve);k(ve),ae(()=>W(Y,`(${p(A).multiplier??""}x kerroin!)`)),j(J,ve)};ee(_,J=>{p(A).multiplier&&p(A).multiplier>1&&J(N)})}k(R),ae(()=>W(I,`${p(A).count??""} × ${ia[p(A).symbol]??""} = ${p(A).payout??""} pistettä `)),j(L,R)});var P=v(x,2);k(m),ae(()=>W(b,`${p(me)??""} pistettä`)),q("click",P,()=>{E(oe,!1),ft(),console.log("Win popup closed, ready for next spin")}),j(u,m)};ee(es,u=>{p(me)>0&&p(oe)&&u(ma)})}var ts=v(es,2);{var va=u=>{var m=Un(),c=v(w(m),8);k(m),q("click",c,()=>{E(Je,!1)}),j(u,m)};ee(ts,u=>{p(Je)&&u(va)})}var ss=v(ts,2);hr(ss,u=>pt=u,()=>pt);var mt=v(ss,2),vt=w(mt),as=v(w(vt),2),ba=w(as,!0);k(as),k(vt);var rs=v(vt,2),ns=v(w(rs),2),xa=w(ns,!0);k(ns),k(rs),k(mt);var bt=v(mt,2),is=v(w(bt),2),os=w(is),xt=v(os,2),ya=w(xt,!0);k(xt);var ls=v(xt,2),_a=v(ls,2);k(is),k(bt);var cs=v(bt,2),yt=v(cs,2),_t=v(w(yt),2),ds=v(w(_t),2),Aa=w(ds,!0);k(ds),k(_t);var At=v(_t,2),us=v(w(At),2),wa=w(us,!0);k(us),k(At);var wt=v(At,2),fs=v(w(wt),2),ka=w(fs,!0);k(fs),k(wt);var kt=v(wt,2),Et=v(w(kt),2),Ea=w(Et);k(Et),k(kt);var Sa=v(kt,2);k(yt);var St=v(yt,2),Ta=w(St);{var La=u=>{var m=Dn(),c=v(w(m),2),b=w(c);k(c);var x=v(c,2);k(m),ae(()=>W(b,`${p(Ae)??""} left`)),q("click",x,ht),j(u,m)},Oa=u=>{var m=Vn(),c=He(m),b=v(c,2);{var x=P=>{var L=zn(),A=v(w(L),2),R=v(A,2),I=v(R,2),_=v(I,2),N=v(_,2),J=v(N,2);k(L),q("click",A,()=>Ne(10)),q("click",R,()=>Ne(100)),q("click",I,()=>Ne(1e3)),q("click",_,()=>Ne(1e4)),q("click",N,()=>Ne(1e5)),q("click",J,()=>{E(Me,!1)}),j(P,L)};ee(b,P=>{p(Me)&&P(x)})}q("click",c,()=>{E(Me,!p(Me))}),j(u,m)};ee(Ta,u=>{p(he)?u(La):u(Oa,!1)})}k(St);var Ee=v(St,2),Pa=w(Ee,!0);k(Ee);var ps=v(Ee,2);Se(ps,"style",`
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
  `),ae((u,m,c,b,x)=>{W(ba,u),W(xa,p(G)),W(ya,p(G)),W(Aa,m),W(wa,c),W(ka,b),Se(Et,"style",`color: ${x??""};`),W(Ea,`${p(ct)??""}%`),Se(Ee,"style",`
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
  `),Se(Ee,"title",p(pe)?"Mykistä äänet":"Laita äänet päälle"),W(Pa,p(pe)?"🔊":"🔇")},[()=>p(ie).toLocaleString(),()=>p(lt).toLocaleString(),()=>p(we).toLocaleString(),()=>p(qe).toLocaleString(),()=>parseFloat(p(ct))>=95?"#00ff00":parseFloat(p(ct))>=85?"#ffff00":"#ff6666"]),q("click",os,fa),q("click",ls,ua),q("click",_a,pa),q("click",cs,()=>{E(Je,!p(Je))}),q("click",Sa,ha),q("click",Ee,()=>{E(pe,!p(pe))}),q("click",ps,Qt),j(t,Jt),Ms()}var Yn=D('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),Xn=D('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function Kn(t,e){Fs(e,!1);let s=gr(e,"isAuthenticated",12,!1),a=Mt(""),r=Mt(!1);const n="slot2024";function i(){p(a)===n?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(E(r,!0),E(a,""),setTimeout(()=>E(r,!1),3e3))}$s(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),Na();var o=ja(),d=He(o);{var f=l=>{var h=Xn(),g=w(h),y=v(w(g),4),S=w(y);Lr(S),pr(2),k(y);var z=v(y,2);{var F=T=>{var C=Yn();j(T,C)};ee(z,T=>{p(r)&&T(F)})}k(g),k(h),Pr(S,()=>p(a),T=>E(a,T)),q("submit",y,Rr(i)),j(l,h)};ee(d,l=>{s()||l(f)})}j(t,o),Ms()}var Qn=D('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),Jn=D("<!> <!>",1);function di(t){let e=Mt(!1);var s=Jn(),a=He(s);Kn(a,{get isAuthenticated(){return p(e)},set isAuthenticated(i){E(e,i)},$$legacy:!0});var r=v(a,2);{var n=i=>{var o=Qn(),d=v(He(o),2);Hn(d,{}),j(i,o)};ee(r,i=>{p(e)&&i(n)})}j(t,s)}export{Vs as A,Us as C,Wr as R,Cr as S,Gs as V,di as _,Br as u};
