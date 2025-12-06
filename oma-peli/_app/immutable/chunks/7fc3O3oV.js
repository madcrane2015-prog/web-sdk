const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Dm05O0Hl.js","./DNWEu6uq.js","./DEliLNnF.js","./DWgShhht.js","./C04N3yhf.js","./C2GHuDhf.js","./DDvbbLah.js","./NB9NgCRC.js"])))=>i.map(i=>d[i]);
var Ma=Object.defineProperty;var qa=(t,e,s)=>e in t?Ma(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var Z=(t,e,s)=>qa(t,typeof e!="symbol"?e+"":e,s);import{f as Wa,l as ja,t as D,g as q,a as j,d as Na}from"./DRDKHArV.js";import{i as Ua}from"./Dw5_DM93.js";import{y as re,j as Da,a8 as za,F as p,Q as Ga,aa as Ha,ab as gs,h as ms,e as Lt,k as De,l as Va,ac as Bs,w as Cs,ad as Ya,q as Fs,a7 as Xa,U as Ka,a2 as vs,aq as Ot,z as bs,ar as Qa,as as Ja,at as Za,o as er,au as tr,av as sr,aw as ar,ax as rr,b as nr,ay as ir,az as or,a6 as lr,aA as cr,aB as dr,D as ur,L as fr,p as $s,ah as U,ag as Ms,T as S,aC as xs,f as Ve,s as v,c as k,r as E,t as ae,I as pr,a as qs,aD as hr,aE as Mt}from"./DWgShhht.js";import{_ as ys,p as le,i as ee}from"./DEliLNnF.js";import{s as W}from"./4RjN9yQL.js";import{b as gr,p as mr}from"./B1_V_3zc.js";import{b as ze}from"./DFHLSjkq.js";import{e as ue,E as P,a as vr,C as Nt,Q as st,V as at,N as Pt,D as X,H as br,p as be,a0 as Pe,a1 as xe,a2 as xr,w as de,a3 as He,a4 as Ws,a5 as Re,a6 as ne,a7 as rt,a8 as js,a9 as yr,aa as Rt,ab as _r,ac as Ar,y as Ze}from"./DNWEu6uq.js";import{A as wr,B as _s,G as kr,T as Ns,a as Er,b as It}from"./C04N3yhf.js";function As(t,e){return e}function Sr(t,e,s,a){for(var r=[],n=e.length,i=0;i<n;i++)Za(e[i].e,r,!0);var o=n>0&&r.length===0&&s!==null;if(o){var d=s.parentNode;er(d),d.append(s),a.clear(),ce(t,e[0].prev,e[n-1].next)}tr(r,()=>{for(var f=0;f<n;f++){var l=e[f];o||(a.delete(l.k),ce(t,l.prev,l.next)),sr(l.e,!o)}})}function ws(t,e,s,a,r,n=null){var i=t,o={flags:e,items:new Map,first:null};re&&Da();var d=null,f=!1,l=Ga(()=>{var h=s();return Xa(h)?h:h==null?[]:Fs(h)});za(()=>{var h=p(l),g=h.length;if(f&&g===0)return;f=g===0;let _=!1;if(re){var T=i.data===Ha;T!==(g===0)&&(i=gs(),ms(i),Lt(!1),_=!0)}if(re){for(var z=null,F,L=0;L<g;L++){if(De.nodeType===8&&De.data===Va){i=De,_=!0,Lt(!1);break}var C=h[L],G=a(C,L);F=Us(De,o,z,null,C,G,L,r,e,s),o.items.set(G,F),z=F}g>0&&ms(gs())}re||Tr(h,o,i,r,e,a,s),n!==null&&(g===0?d?Bs(d):d=Cs(()=>n(i)):d!==null&&Ya(d,()=>{d=null})),_&&Lt(!0),p(l)}),re&&(i=De)}function Tr(t,e,s,a,r,n,i){var o=t.length,d=e.items,f=e.first,l=f,h,g=null,_=[],T=[],z,F,L,C;for(C=0;C<o;C+=1){if(z=t[C],F=n(z,C),L=d.get(F),L===void 0){var G=l?l.e.nodes_start:s;g=Us(G,e,g,g===null?e.first:g.next,z,F,C,a,r,i),d.set(F,g),_=[],T=[],l=g.next;continue}if(Lr(L,z,C),(L.e.f&Ot)!==0&&Bs(L.e),L!==l){if(h!==void 0&&h.has(L)){if(_.length<T.length){var V=T[0],te;g=V.prev;var Ye=_[0],fe=_[_.length-1];for(te=0;te<_.length;te+=1)ks(_[te],V,s);for(te=0;te<T.length;te+=1)h.delete(T[te]);ce(e,Ye.prev,fe.next),ce(e,g,Ye),ce(e,fe,V),l=V,g=fe,C-=1,_=[],T=[]}else h.delete(L),ks(L,l,s),ce(e,L.prev,L.next),ce(e,L,g===null?e.first:g.next),ce(e,g,L),g=L;continue}for(_=[],T=[];l!==null&&l.k!==F;)(l.e.f&Ot)===0&&(h??(h=new Set)).add(l),T.push(l),l=l.next;if(l===null)continue;L=l}_.push(L),g=L,l=L.next}if(l!==null||h!==void 0){for(var Xe=h===void 0?[]:Fs(h);l!==null;)(l.e.f&Ot)===0&&Xe.push(l),l=l.next;var $=Xe.length;if($>0){var Be=null;Sr(e,Xe,Be,d)}}bs.first=e.first&&e.first.e,bs.last=g&&g.e}function Lr(t,e,s,a){Ja(t.v,e),t.i=s}function Us(t,e,s,a,r,n,i,o,d,f){var l=(d&ar)!==0,h=(d&rr)===0,g=l?h?Ka(r):vs(r):r,_=(d&Qa)===0?i:vs(i),T={i:_,v:g,k:n,a:null,e:null,prev:s,next:a};try{return T.e=Cs(()=>o(t,g,_,f),re),T.e.prev=s&&s.e,T.e.next=a&&a.e,s===null?e.first=T:(s.next=T,s.e.next=T.e),a!==null&&(a.prev=T,a.e.prev=T.e),T}finally{}}function ks(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,r=e?e.e.nodes_start:s,n=t.e.nodes_start;n!==a;){var i=nr(n);r.before(n),n=i}}function ce(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function Or(t){if(re){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;Se(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var r=t.checked;Se(t,"checked",null),t.checked=r}}};t.__on_r=s,ir(s),Wa()}}function Se(t,e,s,a){var r=t.__attributes??(t.__attributes={});re&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[or]=s),s==null?t.removeAttribute(e):typeof s!="string"&&Pr(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var Es=new Map;function Pr(t){var e=Es.get(t.nodeName);if(e)return e;Es.set(t.nodeName,e=[]);for(var s,a=t,r=Element.prototype;r!==a;){s=cr(a);for(var n in s)s[n].set&&e.push(n);a=lr(a)}return e}function Rr(t,e,s=e){var a=dr();ja(t,"input",r=>{var n=r?t.defaultValue:t.value;if(n=Bt(t)?Ct(n):n,s(n),a&&n!==(n=e())){var i=t.selectionStart,o=t.selectionEnd;t.value=n??"",o!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(o,t.value.length))}}),(re&&t.defaultValue!==t.value||ur(e)==null&&t.value)&&s(Bt(t)?Ct(t.value):t.value),fr(()=>{var r=e();Bt(t)&&r===Ct(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function Bt(t){var e=t.type;return e==="number"||e==="range"}function Ct(t){return t===""?null:+t}function Ir(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const qt=[];ue.handleByNamedList(P.Environment,qt);async function Br(t){if(!t)for(let e=0;e<qt.length;e++){const s=qt[e];if(s.value.test()){await s.value.load();return}}}let Ge;function Cr(){if(typeof Ge=="boolean")return Ge;try{Ge=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{Ge=!1}return Ge}var Ds=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(Ds||{});class Fr{constructor(e){this.items=[],this._name=e}emit(e,s,a,r,n,i,o,d){const{name:f,items:l}=this;for(let h=0,g=l.length;h<g;h++)l[h][f](e,s,a,r,n,i,o,d);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const $r=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],zs=class Gs extends vr{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...$r,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Br(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...Gs.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof Nt&&(a={container:a},s&&(st(at,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const r=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=r?a.clearColor:Pt.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const r=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==r&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Ds.ALL);const{clear:a,clearColor:r,target:n}=e;Pt.shared.setValue(r??this.background.colorRgba),s.renderTarget.clear(n,a,Pt.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new Fr(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const r in this.runners)this.runners[r].add(a);return this}_addPipes(e,s){const a=s.reduce((r,n)=>(r[n.name]=n.value,r),{});e.forEach(r=>{const n=r.value,i=r.name,o=a[i];this.renderPipes[i]=new n(this,o?new o:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Cr())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};zs.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Hs=zs,et;function Mr(t){return et!==void 0||(et=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??Hs.defaultOptions.failIfMajorPerformanceCaveat};try{if(!X.get().getWebGLRenderingContext())return!1;let r=X.get().createCanvas().getContext("webgl",e);const n=!!((s=r==null?void 0:r.getContextAttributes())!=null&&s.stencil);if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,n}catch{return!1}})()),et}let tt;async function qr(t={}){return tt!==void 0||(tt=await(async()=>{const e=X.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),tt}const Ss=["webgl","webgpu","canvas"];async function Wr(t){let e=[];t.preference?(e.push(t.preference),Ss.forEach(n=>{n!==t.preference&&e.push(n)})):e=Ss.slice();let s,a={};for(let n=0;n<e.length;n++){const i=e[n];if(i==="webgpu"&&await qr()){const{WebGPURenderer:o}=await ys(async()=>{const{WebGPURenderer:d}=await import("./Dm05O0Hl.js");return{WebGPURenderer:d}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=o,a={...t,...t.webgpu};break}else if(i==="webgl"&&Mr(t.failIfMajorPerformanceCaveat??Hs.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:o}=await ys(async()=>{const{WebGLRenderer:d}=await import("./NB9NgCRC.js");return{WebGLRenderer:d}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=o,a={...t,...t.webgl};break}else if(i==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const r=new s;return await r.init(a),r}const Vs="8.8.1";class Ys{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Vs)}static destroy(){}}Ys.extension=P.Application;class jr{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Vs)}destroy(){this._renderer=null}}jr.extension={type:[P.WebGLSystem,P.WebGPUSystem],name:"initHook",priority:-10};const Xs=class Wt{constructor(...e){this.stage=new Nt,e[0]!==void 0&&st(at,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Wr(e),Wt._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return st(at,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=Wt._plugins.slice(0);a.reverse(),a.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Xs._plugins=[];let Ks=Xs;ue.handleByList(P.Application,Ks._plugins);ue.add(Ys);class Qs extends wr{constructor(e,s){super();const{textures:a,data:r}=e;Object.keys(r.pages).forEach(n=>{const i=r.pages[parseInt(n,10)],o=a[i.id];this.pages.push({texture:o})}),Object.keys(r.chars).forEach(n=>{const i=r.chars[n],{frame:o,source:d}=a[i.page],f=new br(i.x+o.x,i.y+o.y,i.width,i.height),l=new be({source:d,frame:f});this.chars[n]={id:n.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:l}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){_s.install(e)}static uninstall(e){_s.uninstall(e)}}const Ft={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const h in e){const g=e[h].match(/^[a-z]+/gm)[0],_=e[h].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),T={};for(const z in _){const F=_[z].split("="),L=F[0],C=F[1].replace(/"/gm,""),G=parseFloat(C),V=isNaN(G)?C:G;T[L]=V}s[g].push(T)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=s.info,[n]=s.common,[i]=s.distanceField??[];i&&(a.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),a.fontSize=parseInt(r.size,10),a.fontFamily=r.face,a.lineHeight=parseInt(n.lineHeight,10);const o=s.page;for(let h=0;h<o.length;h++)a.pages.push({id:parseInt(o[h].id,10)||0,file:o[h].file});const d={};a.baseLineOffset=a.lineHeight-parseInt(n.base,10);const f=s.char;for(let h=0;h<f.length;h++){const g=f[h],_=parseInt(g.id,10);let T=g.letter??g.char??String.fromCharCode(_);T==="space"&&(T=" "),d[_]=T,a.chars[T]={id:_,page:parseInt(g.page,10)||0,x:parseInt(g.x,10),y:parseInt(g.y,10),width:parseInt(g.width,10),height:parseInt(g.height,10),xOffset:parseInt(g.xoffset,10),yOffset:parseInt(g.yoffset,10),xAdvance:parseInt(g.xadvance,10),kerning:{}}}const l=s.kerning||[];for(let h=0;h<l.length;h++){const g=parseInt(l[h].first,10),_=parseInt(l[h].second,10),T=parseInt(l[h].amount,10);a.chars[d[_]].kerning[d[g]]=T}return a}},Ts={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const n=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),o=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let f=0;f<n.length;f++)e.pages.push({id:parseInt(n[f].getAttribute("id"),10)||0,file:n[f].getAttribute("file")});const d={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let f=0;f<i.length;f++){const l=i[f],h=parseInt(l.getAttribute("id"),10);let g=l.getAttribute("letter")??l.getAttribute("char")??String.fromCharCode(h);g==="space"&&(g=" "),d[h]=g,e.chars[g]={id:h,page:parseInt(l.getAttribute("page"),10)||0,x:parseInt(l.getAttribute("x"),10),y:parseInt(l.getAttribute("y"),10),width:parseInt(l.getAttribute("width"),10),height:parseInt(l.getAttribute("height"),10),xOffset:parseInt(l.getAttribute("xoffset"),10),yOffset:parseInt(l.getAttribute("yoffset"),10),xAdvance:parseInt(l.getAttribute("xadvance"),10),kerning:{}}}for(let f=0;f<o.length;f++){const l=parseInt(o[f].getAttribute("first"),10),h=parseInt(o[f].getAttribute("second"),10),g=parseInt(o[f].getAttribute("amount"),10);e.chars[d[h]].kerning[d[l]]=g}return e}},Ls={test(t){return typeof t=="string"&&t.includes("<font>")?Ts.test(X.get().parseXML(t)):!1},parse(t){return Ts.parse(X.get().parseXML(t))}},Nr=[".xml",".fnt"],Ur={extension:{type:P.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof Qs,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},Dr={extension:{type:P.LoadParser,priority:Pe.Normal},name:"loadBitmapFont",test(t){return Nr.includes(xe.extname(t).toLowerCase())},async testParse(t){return Ft.test(t)||Ls.test(t)},async parse(t,e,s){const a=Ft.test(t)?Ft.parse(t):Ls.parse(t),{src:r}=e,{pages:n}=a,i=[],o=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let h=0;h<n.length;++h){const g=n[h].file;let _=xe.join(xe.dirname(r),g);_=xr(_,r),i.push({src:_,data:o})}const d=await s.load(i),f=i.map(h=>d[h.src]);return new Qs({data:a,textures:f},r)},async load(t,e){return await(await X.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class zr{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Gr={extension:{type:P.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof be),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((r,n)=>{s[a+(n===0?"":n+1)]=r})}),s}};async function Js(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Hr={extension:{type:P.DetectionParser,priority:1},test:async()=>Js("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},Os=["png","jpg","jpeg"],Vr={extension:{type:P.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...Os],remove:async t=>t.filter(e=>!Os.includes(e))},Yr="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Ut(t){return Yr?!1:document.createElement("video").canPlayType(t)!==""}const Xr={extension:{type:P.DetectionParser,priority:0},test:async()=>Ut("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},Kr={extension:{type:P.DetectionParser,priority:0},test:async()=>Ut("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},Qr={extension:{type:P.DetectionParser,priority:0},test:async()=>Ut("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},Jr={extension:{type:P.DetectionParser,priority:0},test:async()=>Js("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class Zr{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var i,o;let r=null,n=null;if(s.loadParser&&(n=this._parserHash[s.loadParser],n||de(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!n){for(let d=0;d<this.parsers.length;d++){const f=this.parsers[d];if(f.load&&((i=f.test)!=null&&i.call(f,e,s,this))){n=f;break}}if(!n)return de(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await n.load(e,s,this),a.parser=n;for(let d=0;d<this.parsers.length;d++){const f=this.parsers[d];f.parse&&f.parse&&await((o=f.testParse)==null?void 0:o.call(f,r,s,this))&&(r=await f.parse(r,s,this)||r,a.parser=f)}return r})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const r={},n=Ws(e),i=He(e,f=>({alias:[f],src:f,data:{}})),o=i.length,d=i.map(async f=>{const l=xe.toAbsolute(f.src);if(!r[f.src])try{this.promiseCache[l]||(this.promiseCache[l]=this._getLoadPromiseAndParser(l,f)),r[f.src]=await this.promiseCache[l].promise,s&&s(++a/o)}catch(h){throw delete this.promiseCache[l],delete r[f.src],new Error(`[Loader.load] Failed to load ${l}.
${h}`)}});return await Promise.all(d),n?r[i[0].src]:r}async unload(e){const a=He(e,r=>({alias:[r],src:r})).map(async r=>{var o,d;const n=xe.toAbsolute(r.src),i=this.promiseCache[n];if(i){const f=await i.promise;delete this.promiseCache[n],await((d=(o=i.parser)==null?void 0:o.unload)==null?void 0:d.call(o,f,r,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&de(`[Assets] loadParser name conflict "${s.name}"`):de("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function Ie(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const en=".json",tn="application/json",sn={extension:{type:P.LoadParser,priority:Pe.Low},name:"loadJson",test(t){return Ie(t,tn)||Re(t,en)},async load(t){return await(await X.get().fetch(t)).json()}},an=".txt",rn="text/plain",nn={name:"loadTxt",extension:{type:P.LoadParser,priority:Pe.Low,name:"loadTxt"},test(t){return Ie(t,rn)||Re(t,an)},async load(t){return await(await X.get().fetch(t)).text()}},on=["normal","bold","100","200","300","400","500","600","700","800","900"],ln=[".ttf",".otf",".woff",".woff2"],cn=["font/ttf","font/otf","font/woff","font/woff2"],dn=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function un(t){const e=xe.extname(t),r=xe.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(o=>o.charAt(0).toUpperCase()+o.slice(1));let n=r.length>0;for(const o of r)if(!o.match(dn)){n=!1;break}let i=r.join(" ");return n||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const fn=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function pn(t){return fn.test(t)?t:encodeURI(t)}const hn={extension:{type:P.LoadParser,priority:Pe.Low},name:"loadWebFont",test(t){return Ie(t,cn)||Re(t,ln)},async load(t,e){var a,r,n;const s=X.get().getFontFaceSet();if(s){const i=[],o=((a=e.data)==null?void 0:a.family)??un(t),d=((n=(r=e.data)==null?void 0:r.weights)==null?void 0:n.filter(l=>on.includes(l)))??["normal"],f=e.data??{};for(let l=0;l<d.length;l++){const h=d[l],g=new FontFace(o,`url(${pn(t)})`,{...f,weight:h});await g.load(),s.add(g),i.push(g)}return ne.set(`${o}-and-url`,{url:t,fontFaces:i}),i.length===1?i[0]:i}return de("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{ne.remove(`${e.family}-and-url`),X.get().getFontFaceSet().delete(e)})}};function Dt(t,e=1){var a;const s=(a=rt.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function zt(t,e,s){t.label=s,t._sourceOrigin=s;const a=new be({source:t,label:s}),r=()=>{delete e.promiseCache[s],ne.has(s)&&ne.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(de("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),a.once("destroy",()=>{t.destroyed||(de("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),a}const gn=".svg",mn="image/svg+xml",vn={extension:{type:P.LoadParser,priority:Pe.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return Ie(t,mn)||Re(t,gn)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?xn(t):bn(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function bn(t,e,s,a){var F,L,C;const n=await(await X.get().fetch(t)).blob(),i=URL.createObjectURL(n),o=new Image;o.src=i,o.crossOrigin=a,await o.decode(),URL.revokeObjectURL(i);const d=document.createElement("canvas"),f=d.getContext("2d"),l=((F=e.data)==null?void 0:F.resolution)||Dt(t),h=((L=e.data)==null?void 0:L.width)??o.width,g=((C=e.data)==null?void 0:C.height)??o.height;d.width=h*l,d.height=g*l,f.drawImage(o,0,0,h*l,g*l);const{parseAsGraphicsContext:_,...T}=e.data??{},z=new js({resource:d,alphaMode:"premultiply-alpha-on-upload",resolution:l,...T});return zt(z,s,t)}async function xn(t){const s=await(await X.get().fetch(t)).text(),a=new kr;return a.svg(s),a}const yn=`(function () {
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
`;let Le=null,jt=class{constructor(){Le||(Le=URL.createObjectURL(new Blob([yn],{type:"application/javascript"}))),this.worker=new Worker(Le)}};jt.revokeObjectURL=function(){Le&&(URL.revokeObjectURL(Le),Le=null)};const _n=`(function () {
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
`;let Oe=null;class Zs{constructor(){Oe||(Oe=URL.createObjectURL(new Blob([_n],{type:"application/javascript"}))),this.worker=new Worker(Oe)}}Zs.revokeObjectURL=function(){Oe&&(URL.revokeObjectURL(Oe),Oe=null)};let Ps=0,$t;class An{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new jt;s.addEventListener("message",a=>{s.terminate(),jt.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){$t===void 0&&($t=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<$t&&(this._createdWorkers++,e=new Zs().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((r,n)=>{this._queue.push({id:e,arguments:s,resolve:r,reject:n})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[Ps]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:Ps++,id:a})}}const Rs=new An,wn=[".jpeg",".jpg",".png",".webp",".avif"],kn=["image/jpeg","image/png","image/webp","image/avif"];async function En(t,e){var r;const s=await X.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const ea={name:"loadTextures",extension:{type:P.LoadParser,priority:Pe.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return Ie(t,kn)||Re(t,wn)},async load(t,e,s){var n;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Rs.isImageBitmapSupported()?a=await Rs.loadImageBitmap(t,e):a=await En(t,e):a=await new Promise((i,o)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?i(a):(a.onload=()=>{i(a)},a.onerror=o)});const r=new js({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((n=e.data)==null?void 0:n.resolution)||Dt(t),...e.data});return zt(r,s,t)},unload(t){t.destroy(!0)}},ta=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Sn=ta.map(t=>`video/${t.substring(1)}`);function Tn(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=On(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function Ln(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",r),t.load();function a(){n(),e()}function r(i){n(),s(i)}function n(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",r)}})}function On(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const Pn={name:"loadVideo",extension:{type:P.LoadParser,name:"loadVideo"},test(t){const e=Ie(t,Sn),s=Re(t,ta);return e||s},async load(t,e,s){var d,f;const a={...Rt.defaultOptions,resolution:((d=e.data)==null?void 0:d.resolution)||Dt(t),alphaMode:((f=e.data)==null?void 0:f.alphaMode)||await yr(),...e.data},r=document.createElement("video"),n={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(n).forEach(l=>{const h=n[l];h!==void 0&&r.setAttribute(l,h)}),a.muted===!0&&(r.muted=!0),Tn(r,t,a.crossorigin);const i=document.createElement("source");let o;if(t.startsWith("data:"))o=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const l=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();o=Rt.MIME_TYPES[l]||`video/${l}`}return i.src=t,o&&(i.type=o),new Promise(l=>{const h=async()=>{const g=new Rt({...a,resource:r});r.removeEventListener("canplay",h),e.data.preload&&await Ln(r),l(zt(g,s,t))};r.addEventListener("canplay",h),r.appendChild(i)})},unload(t){t.destroy(!0)}},sa={extension:{type:P.ResolveParser,name:"resolveTexture"},test:ea.test,parse:t=>{var e;return{resolution:parseFloat(((e=rt.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},Rn={extension:{type:P.ResolveParser,priority:-2,name:"resolveJson"},test:t=>rt.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:sa.parse};class In{constructor(){this._detections=[],this._initialized=!1,this.resolver=new rt,this.loader=new Zr,this.cache=ne,this._backgroundLoader=new zr(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var n,i;if(this._initialized){de("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let o=e.manifest;typeof o=="string"&&(o=await this.load(o)),this.resolver.addManifest(o)}const s=((n=e.texturePreference)==null?void 0:n.resolution)??1,a=typeof s=="number"?[s]:s,r=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=Ws(e),r=He(e).map(o=>{if(typeof o!="string"){const d=this.resolver.getAlias(o);return d.some(f=>!this.resolver.hasKey(f))&&this.add(o),Array.isArray(d)?d[0]:d}return this.resolver.hasKey(o)||this.add({alias:o,src:o}),o}),n=this.resolver.resolve(r),i=await this._mapLoadToResolve(n,s);return a?i[r[0]]:i}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const r=this.resolver.resolveBundle(e),n={},i=Object.keys(r);let o=0,d=0;const f=()=>{s==null||s(++o/d)},l=i.map(h=>{const g=r[h];return d+=Object.keys(g).length,this._mapLoadToResolve(g,f).then(_=>{n[h]=_})});return await Promise.all(l),a?n[e[0]]:n}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return ne.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=ne.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(a,s);this._backgroundLoader.active=!0;const n={};return a.forEach(i=>{const o=r[i.src],d=[i.src];i.alias&&d.push(...i.alias),d.forEach(f=>{n[f]=o}),ne.set(d,o)}),n}async unload(e){this._initialized||await this.init();const s=He(e).map(r=>typeof r!="string"?r.src:r),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=He(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(r=>this._unloadFromResolved(s[r]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{ne.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,r)=>s.indexOf(a)===r),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const Te=new In;ue.handleByList(P.LoadParser,Te.loader.parsers).handleByList(P.ResolveParser,Te.resolver.parsers).handleByList(P.CacheParser,Te.cache.parsers).handleByList(P.DetectionParser,Te.detections);ue.add(Gr,Vr,Hr,Jr,Xr,Kr,Qr,sn,nn,hn,vn,ea,Pn,Dr,Ur,sa,Rn);const Is={loader:P.LoadParser,resolver:P.ResolveParser,cache:P.CacheParser,detection:P.DetectionParser};ue.handle(P.Asset,t=>{const e=t.ref;Object.entries(Is).filter(([s])=>!!e[s]).forEach(([s,a])=>ue.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(Is).filter(s=>!!e[s]).forEach(s=>ue.remove(e[s]))});class Bn extends _r{constructor(e,s){const{text:a,resolution:r,style:n,anchor:i,width:o,height:d,roundPixels:f,...l}=e;super({...l}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=n,this.resolution=r??null,this.allowChildren=!1,this._anchor=new Ar({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=f??!1,o!==void 0&&(this.width=o),d!==void 0&&(this.height=d)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,r=-s*this.anchor.x;let n=0;return e.x>=r&&e.x<=r+s&&(n=-a*this.anchor.y,e.y>=n&&e.y<=n+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function Cn(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(st(at,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class Fn extends Bn{constructor(...e){const s=Cn(e,"Text");super(s,Ns),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=Er.measureText(this._text,this._style),{width:r,height:n}=a;e.minX=-s._x*r,e.maxX=e.minX+r,e.minY=-s._y*n,e.maxY=e.minY+n}}var $n=D('<p style="color: red;" class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Error:</strong> </p>'),Mn=D('<div class="svelte-1t2q5b9"> </div>'),qn=D('<details class="svelte-1t2q5b9"><summary class="svelte-1t2q5b9"> </summary> <!></details>'),Wn=D(`<div style="
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
  " class="svelte-1t2q5b9"><h3 class="svelte-1t2q5b9">🎰 Oma-peli Debug</h3> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Status:</strong> </p> <!> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Base:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">BG URL:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Sample:</strong> </p> <!></div>`),jn=D('<span style="color: #ffd700; font-weight: bold;" class="svelte-1t2q5b9"> </span>'),Nn=D('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-1t2q5b9"> <!></div>'),Un=D(`<div style="
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
      " class="svelte-1t2q5b9">Jatka pelaamista</button></div>`),Dn=D(`<div style="
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
      " class="svelte-1t2q5b9">Sulje</button></div>`),zn=D(`<div style="
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
        " class="svelte-1t2q5b9">⏹ STOP</button></div>`),Gn=D(`<div style="
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
          " class="svelte-1t2q5b9">Cancel</button></div>`),Hn=D(`<button style="
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
      " class="svelte-1t2q5b9">🔄 AUTOPLAY</button> <!>`,1),Vn=D(`<!> <!> <!> <div class="svelte-1t2q5b9"></div> <div style="
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
" class="svelte-1t2q5b9"><!></div> <button class="svelte-1t2q5b9"> </button> <button title="SPIN" class="svelte-1t2q5b9"></button>`,1);function Yn(t,e){$s(e,!0);const s=13,a=1445,r=1e3,n=1.75,i=-30,o=-10,d=160,f=0,l=720,h=750,g=.8,_=50,T=30,z=-40,F=1,L="height",G=Math.round(100*n),V=Math.round(G*(700/760)),Ye=V+10,fe=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],$=typeof window<"u"&&window.location.hostname.includes("github.io")?"/web-sdk/oma-peli/symbols":`${ze}/symbols`,Be={a:`${$}/Blue_hotrod.jpg`,b:`${$}/Blue_jacket.jpg`,c:`${$}/Blue_rollers.jpg`,d:`${$}/Blue_speakers.jpg`,e:`${$}/Premium_blonde.jpg`,f:`${$}/Premium_brunette.jpg`,g:`${$}/Premium_rocker.jpg`,h:`${$}/Red_bubblegum.jpg`,i:`${$}/Red_burger.jpg`,j:`${$}/Red_fries.jpg`,k:`${$}/Red_milkshake.jpg`,l:`${$}/Scatter.jpg`,emptyslot:`${$}/Emptyslot.jpg`},nt=`${$}/bg_base.jpg`,Gt=`${$}/ReelFrames.png`,Ht=`${$}/RockABillyReels_logo.png`,Vt={spin:`${ze}/sounds/spin.mp3`,stop:`${ze}/sounds/stop.mp3`,win:`${ze}/sounds/win.mp3`};let pe=U(!0),Ke={},Qe=null,ye=null,Ce=null,Fe=null,$e=U("Initializing..."),_e=U(""),Q=[],ie=U(1e3),H=U(10);const Yt=1,it=100;let he=U(!1),Ae=U(0),Me=U(!1),aa=U(0),ge=!1,se=null,ot=!1,lt=U(0),we=U(0),qe=U(0),ct=pr(()=>p(we)>0?(p(qe)/p(we)*100).toFixed(2):"0.00");const Xt={k:.18,j:.15,i:.15,c:.09,d:.09,b:.07,a:.07,f:.04,e:.03,g:.025,l:.025,h:.08,emptyslot:0};function Kt(u){if(u===6){const y=Math.random()<.5?"emptyslot":"h";return console.log(`Reel ${u} (MIDDLE): ${y}`),y}const m=Math.random();let c=0;const x=fe.filter(y=>y!=="emptyslot"&&y!=="h"),b=x.reduce((y,O)=>y+Xt[O],0);for(const y of x)if(c+=Xt[y]/b,m<c)return console.log(`Reel ${u} (WEIGHTED): ${y}`),y;return"k"}function Qt(){const u=[];for(let m=0;m<s;m++)u.push(Kt(m));return u}function ra(u){return u<3?{col:0,row:u}:u<6?{col:1,row:u-3}:u===6?{col:2,row:0}:u<10?{col:3,row:u-7}:{col:4,row:u-10}}function We(u,m){return u===0?m:u===1?3+m:u===2?6:u===3?7+m:u===4?10+m:-1}const na={k:{3:.15,4:.5,5:2.4},j:{3:.25,4:1,5:5},i:{3:.25,4:1,5:5},c:{3:.75,4:2.5,5:10},d:{3:.75,4:2.5,5:10},b:{3:1,4:3.5,5:12.5},a:{3:1,4:3.5,5:12.5},f:{3:1.5,4:7.5,5:25},e:{3:2.5,4:10,5:37.5},g:{3:2.5,4:12.5,5:50},h:{},l:{3:2.5,4:12.5,5:50},emptyslot:{}};function ia(){var y;const u=[],m=[];for(let O=0;O<s;O++)M[O]==="l"&&m.push(O);if(m.length>=5){const O=8+(m.length-5);console.log(`🎰 SCATTER WIN! ${m.length} scatters = ${O} FREE SPINS!`),u.push({symbol:"l",count:m.length,payout:0,positions:m})}M[0],M[1],M[2],M[3],M[4],M[5],M[6],M[7],M[8],M[9],M[10],M[11],M[12];const c=[];for(let O=0;O<3;O++)for(let w=0;w<3;w++)for(let R=0;R<1;R++)for(let I=0;I<3;I++)for(let A=0;A<3;A++){const N=[We(0,O),We(1,w),We(2,R),We(3,I),We(4,A)];c.push(N)}console.log(`Generated ${c.length} possible paths (should be 81)`);const x=new Map;for(const O of c){const w=O.map(A=>M[A]);if(w[0]==="emptyslot"||w[0]==="l")continue;let R=null;for(let A=0;A<w.length;A++)if(w[A]!=="h"&&w[A]!=="emptyslot"&&w[A]!=="l"){R=w[A];break}if(!R)continue;let I=0;for(let A=0;A<w.length;A++){const N=w[A];if(N===R||N==="h")I++;else break}if(I>=3){const A=`${R}-${I}`,N=x.get(A);N?N.lineCount++:x.set(A,{symbol:R,length:I,lineCount:1,examplePath:O.slice(0,I)})}}const b=[];for(const[O,w]of x.entries()){const R=(y=na[w.symbol])==null?void 0:y[w.length];if(R!==void 0&&R>0){const I=R*p(H);console.log(`Win: ${w.length}x ${w.symbol} (found on ${w.lineCount} ways) = ${I}`),b.push({symbol:w.symbol,count:w.length,payout:I,positions:w.examplePath})}}return u.push(...b),u}let me=U(0),dt=U(le([])),oe=U(!1),Je=U(!1);const oa={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function ut(u){if(!p(pe)||!Ke[u])return;const m=Ke[u];m.currentTime=0,m.play().catch(c=>{console.warn("Äänen toisto epäonnistui:",u,c)})}function la(u){je.forEach(m=>B.stage.removeChild(m)),je=[],u.forEach(m=>{m.positions.forEach(c=>{const x=ke[c],b=new It().rect(0,0,G,V).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});b.x=x.container.x,b.y=x.container.y,B.stage.addChild(b),je.push(b);let y=0,O=1;const w=.05;B.ticker.add(()=>{y+=O*w,y>=.4&&(O=-1),y<=0&&(O=1),b.alpha=.5+y})})})}function ft(){je.forEach(u=>B.stage.removeChild(u)),je=[]}let M=Qt(),pt,B,ke=[],je=[];class ca{constructor(m,c){Z(this,"index");Z(this,"container");Z(this,"offset",0);Z(this,"speed",0);Z(this,"targetSpeed",30);Z(this,"state","idle");Z(this,"stopDelay",0);Z(this,"bounceOffset",0);Z(this,"bounceSpeed",0);Z(this,"bounceFrames",0);this.index=m,this.container=c}start(m){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=m}update(){this.state!=="idle"&&(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"&&(this.speed*=.92,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,ut("stop"))),this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=Ye&&(this.offset=0,M[this.index]=Kt(this.index))))}draw(){const m=this.container;m.removeChildren();const c=M[this.index];if(!c||!Qe||!Qe[c])return;const x=Qe[c];if(!x)return;const b=this.offset+this.bounceOffset,y=new Ze(x);y.width=G,y.height=V,y.x=0,y.y=b,m.addChild(y)}}Ms(async()=>{B=new Ks,await B.init({width:a,height:r,background:"#001a33"}),pt.appendChild(B.canvas);const u={};try{S($e,"Loading background and UI images..."),Q.push(`Loading background: ${nt}`),Q.push(`Loading reel frames: ${Gt}`),Q.push(`Loading logo: ${Ht}`),await Te.load([{alias:"background",src:nt},{alias:"reelframes",src:Gt},{alias:"logo",src:Ht}]),ye=be.from("background"),Ce=be.from("reelframes"),Fe=be.from("logo"),console.log("✅ Background texture created:",ye.width,"x",ye.height),console.log("✅ Reel frames texture created:",Ce.width,"x",Ce.height),console.log("✅ Logo texture created:",Fe.width,"x",Fe.height),Q.push("✅ All UI images loaded"),S($e,"Loading symbols...");const c=[];for(const x of fe)c.push({alias:x,src:Be[x]});await Te.load(c);for(const x of fe){const b=Be[x];Q.push(`Loading symbol ${x}: ${b}`);try{const y=be.from(x);u[x]=y,console.log(`✅ Symbol ${x} loaded:`,y.width,"x",y.height),Q.push(`✅ Symbol ${x} loaded`)}catch(y){const O=`❌ Failed to load symbol ${x} from ${b}: ${y}`;throw Q.push(O),console.error(O),new Error(O)}}Qe=u,S($e,"Assets loaded successfully!")}catch(c){S(_e,`Asset loading failed: ${c}`),Q.push(p(_e)),console.error(p(_e));return}console.log("Ladataan ääniefektit...");for(const[c,x]of Object.entries(Vt)){const b=new Audio;b.src=x,b.preload="auto",b.volume=.7,b.load(),b.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${x} (käytetään hiljaista placeholderia)`)}),Ke[c]=b}console.log("Ladataan ääniefektit...");for(const[c,x]of Object.entries(Vt)){const b=new Audio;b.src=x,b.preload="auto",b.volume=.7,b.load(),b.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${x} (käytetään hiljaista placeholderia)`)}),Ke[c]=b}if(console.log("Taustakuva ladattu, tekstuuri:",ye),ye){const c=new Ze(ye);B.renderer.width/B.renderer.height;const x=c.texture.width/c.texture.height;let b;b=B.renderer.height/c.texture.height,b*=F,c.scale.set(b),c.x=(B.renderer.width-c.width)/2,c.y=(B.renderer.height-c.height)/2+z,B.stage.addChild(c),console.log("Taustakuva lisätty:",L,"mode, size:",c.width.toFixed(0),"x",c.height.toFixed(0),"image aspect:",x.toFixed(2),"scale:",b.toFixed(2),"pos:",c.x.toFixed(0),c.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(c=>({x:c.x+i,y:c.y+o})),ke=[];for(let c=0;c<s;c++){const x=ra(c),b=x.col,y=x.row,O=300+b*(G+20),w=250+y*(V+15),R=c===6?O+f:O,I=c===6?w+d:w,A=new Nt;A.x=R+i,A.y=I+o;const N=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],J=new It().rect(0,0,G,V).fill({color:N[c],alpha:.3});J.x=A.x,J.y=A.y,B.stage.addChild(J);const ve=new Ns({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),Y=new Fn({text:c.toString(),style:ve});Y.x=A.x+5,Y.y=A.y+5,B.stage.addChild(Y);const K=new It().rect(0,0,G,V).fill(16777215);K.x=A.x,K.y=A.y,A.mask=K,B.stage.addChild(K),B.stage.addChild(A),ke.push(new ca(c,A))}if(Ce){const c=new Ze(Ce);c.scale.set(1),c.x=250,c.y=200,B.stage.addChild(c),console.log("Reel frames lisätty:",c.width.toFixed(0),"x",c.height.toFixed(0))}if(Fe){const c=new Ze(Fe);c.scale.set(g),c.x=(B.renderer.width-c.width)/2+_,c.y=T,B.stage.addChild(c),console.log("Logo lisätty päällimmäiseen layeriin:",c.width.toFixed(0),"x",c.height.toFixed(0))}B.ticker.add(da)});function da(){for(const u of ke)u.update(),u.draw();if(!p(oe)&&!ot&&ke.every(u=>u.state==="stopped")){ot=!0;const u=ia();console.log(`Checking wins, found ${u.length} wins`),u.length>0?(S(dt,le(u)),S(me,le(u.reduce((m,c)=>m+c.payout,0))),ua(p(me)),S(oe,!0),S(aa,le(Date.now())),console.log(`🎉 VOITTO! ${p(me)} pistettä! Uusi saldo: ${p(ie)}`),console.log(`isShowingWin set to: ${p(oe)}, totalWin: ${p(me)}`),u.forEach(m=>{const c=m.multiplier?` (${m.multiplier}x multiplier)`:"";console.log(`${m.count}x ${m.symbol} = ${m.payout} pistettä${c}`)}),la(u),ut("win"),p(he)&&!ge&&(ge=!0,se=window.setTimeout(()=>{p(oe)&&p(he)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),S(oe,!1),ft()),se=window.setTimeout(()=>{ge=!1,gt()},200)},1500))):(console.log("No wins found this spin"),p(he)&&!ge&&(ge=!0,se=window.setTimeout(()=>{ge=!1,gt()},1e3)))}}function Jt(){if(p(ie)<p(H)){alert(`Not enough credits! Balance: ${p(ie)}, Bet: ${p(H)}`),ht();return}se!==null&&(clearTimeout(se),se=null),S(ie,p(ie)-p(H)),xs(lt),S(we,p(we)+p(H)),S(dt,le([])),S(me,0),S(oe,!1),ot=!1,ft(),M=Qt(),ke.forEach((u,m)=>u.start(60+m*10)),ut("spin")}function ua(u){S(ie,p(ie)+u),S(qe,p(qe)+u)}function fa(){p(H)<it&&S(H,le(Math.min(p(H)+1,it)))}function pa(){p(H)>Yt&&S(H,le(Math.max(p(H)-1,Yt)))}function ha(){S(H,it)}function Ne(u){S(he,!0),S(Ae,le(u)),S(Me,!1),gt()}function ht(){S(he,!1),S(Ae,0),ge=!1,se!==null&&(clearTimeout(se),se=null)}function gt(){if(!p(he)||p(Ae)<=0){ht();return}console.log(`Autoplay: Starting spin ${p(Ae)} rounds left`),Jt(),xs(Ae,-1)}function ga(){confirm("Reset all statistics?")&&(S(lt,0),S(we,0),S(qe,0))}var Zt=Vn(),es=Ve(Zt);{var ma=u=>{var m=Wn(),c=v(k(m),2),x=v(k(c));E(c);var b=v(c,2);{var y=Y=>{var K=$n(),Ue=v(k(K));E(K),ae(()=>W(Ue,` ${p(_e)??""}`)),j(Y,K)};ee(b,Y=>{p(_e)&&Y(y)})}var O=v(b,2),w=v(k(O));w.nodeValue=` ${ze??""}`,E(O);var R=v(O,2),I=v(k(R));I.nodeValue=` ${nt??""}`,E(R);var A=v(R,2),N=v(k(A));E(A);var J=v(A,2);{var ve=Y=>{var K=qn(),Ue=k(K),Ia=k(Ue);E(Ue);var Ba=v(Ue,2);ws(Ba,17,()=>Q,As,(Ca,Fa)=>{var Tt=Mn(),$a=k(Tt,!0);E(Tt),ae(()=>W($a,p(Fa))),j(Ca,Tt)}),E(K),ae(()=>W(Ia,`Log (${Q.length??""})`)),j(Y,K)};ee(J,Y=>{Q.length>0&&Y(ve)})}E(m),ae(()=>{W(x,` ${p($e)??""}`),W(N,` ${Be.a??""}`)}),j(u,m)};ee(es,u=>{(p($e)!=="Assets loaded successfully!"||p(_e))&&u(ma)})}var ts=v(es,2);{var va=u=>{var m=Un(),c=v(k(m),2),x=k(c);E(c);var b=v(c,2);ws(b,17,()=>p(dt),As,(O,w)=>{var R=Nn(),I=k(R),A=v(I);{var N=J=>{var ve=jn(),Y=k(ve);E(ve),ae(()=>W(Y,`(${p(w).multiplier??""}x kerroin!)`)),j(J,ve)};ee(A,J=>{p(w).multiplier&&p(w).multiplier>1&&J(N)})}E(R),ae(()=>W(I,`${p(w).count??""} × ${oa[p(w).symbol]??""} = ${p(w).payout??""} pistettä `)),j(O,R)});var y=v(b,2);E(m),ae(()=>W(x,`${p(me)??""} pistettä`)),q("click",y,()=>{S(oe,!1),ft(),console.log("Win popup closed, ready for next spin")}),j(u,m)};ee(ts,u=>{p(me)>0&&p(oe)&&u(va)})}var ss=v(ts,2);{var ba=u=>{var m=Dn(),c=v(k(m),8);E(m),q("click",c,()=>{S(Je,!1)}),j(u,m)};ee(ss,u=>{p(Je)&&u(ba)})}var as=v(ss,2);gr(as,u=>pt=u,()=>pt);var mt=v(as,2),vt=k(mt),rs=v(k(vt),2),xa=k(rs,!0);E(rs),E(vt);var ns=v(vt,2),is=v(k(ns),2),ya=k(is,!0);E(is),E(ns),E(mt);var bt=v(mt,2),os=v(k(bt),2),ls=k(os),xt=v(ls,2),_a=k(xt,!0);E(xt);var cs=v(xt,2),Aa=v(cs,2);E(os),E(bt);var ds=v(bt,2),yt=v(ds,2),_t=v(k(yt),2),us=v(k(_t),2),wa=k(us,!0);E(us),E(_t);var At=v(_t,2),fs=v(k(At),2),ka=k(fs,!0);E(fs),E(At);var wt=v(At,2),ps=v(k(wt),2),Ea=k(ps,!0);E(ps),E(wt);var kt=v(wt,2),Et=v(k(kt),2),Sa=k(Et);E(Et),E(kt);var Ta=v(kt,2);E(yt);var St=v(yt,2),La=k(St);{var Oa=u=>{var m=zn(),c=v(k(m),2),x=k(c);E(c);var b=v(c,2);E(m),ae(()=>W(x,`${p(Ae)??""} left`)),q("click",b,ht),j(u,m)},Pa=u=>{var m=Hn(),c=Ve(m),x=v(c,2);{var b=y=>{var O=Gn(),w=v(k(O),2),R=v(w,2),I=v(R,2),A=v(I,2),N=v(A,2),J=v(N,2);E(O),q("click",w,()=>Ne(10)),q("click",R,()=>Ne(100)),q("click",I,()=>Ne(1e3)),q("click",A,()=>Ne(1e4)),q("click",N,()=>Ne(1e5)),q("click",J,()=>{S(Me,!1)}),j(y,O)};ee(x,y=>{p(Me)&&y(b)})}q("click",c,()=>{S(Me,!p(Me))}),j(u,m)};ee(La,u=>{p(he)?u(Oa):u(Pa,!1)})}E(St);var Ee=v(St,2),Ra=k(Ee,!0);E(Ee);var hs=v(Ee,2);Se(hs,"style",`
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
  `),ae((u,m,c,x,b)=>{W(xa,u),W(ya,p(H)),W(_a,p(H)),W(wa,m),W(ka,c),W(Ea,x),Se(Et,"style",`color: ${b??""};`),W(Sa,`${p(ct)??""}%`),Se(Ee,"style",`
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
  `),Se(Ee,"title",p(pe)?"Mykistä äänet":"Laita äänet päälle"),W(Ra,p(pe)?"🔊":"🔇")},[()=>p(ie).toLocaleString(),()=>p(lt).toLocaleString(),()=>p(we).toLocaleString(),()=>p(qe).toLocaleString(),()=>parseFloat(p(ct))>=95?"#00ff00":parseFloat(p(ct))>=85?"#ffff00":"#ff6666"]),q("click",ls,pa),q("click",cs,fa),q("click",Aa,ha),q("click",ds,()=>{S(Je,!p(Je))}),q("click",Ta,ga),q("click",Ee,()=>{S(pe,!p(pe))}),q("click",hs,Jt),j(t,Zt),qs()}var Xn=D('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),Kn=D('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function Qn(t,e){$s(e,!1);let s=mr(e,"isAuthenticated",12,!1),a=Mt(""),r=Mt(!1);const n="slot2024";function i(){p(a)===n?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(S(r,!0),S(a,""),setTimeout(()=>S(r,!1),3e3))}Ms(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),Ua();var o=Na(),d=Ve(o);{var f=l=>{var h=Kn(),g=k(h),_=v(k(g),4),T=k(_);Or(T),hr(2),E(_);var z=v(_,2);{var F=L=>{var C=Xn();j(L,C)};ee(z,L=>{p(r)&&L(F)})}E(g),E(h),Rr(T,()=>p(a),L=>S(a,L)),q("submit",_,Ir(i)),j(l,h)};ee(d,l=>{s()||l(f)})}j(t,o),qs()}var Jn=D('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),Zn=D("<!> <!>",1);function ui(t){let e=Mt(!1);var s=Zn(),a=Ve(s);Qn(a,{get isAuthenticated(){return p(e)},set isAuthenticated(i){S(e,i)},$$legacy:!0});var r=v(a,2);{var n=i=>{var o=Jn(),d=v(Ve(o),2);Yn(d,{}),j(i,o)};ee(r,i=>{p(e)&&i(n)})}j(t,s)}export{Hs as A,Ds as C,jr as R,Fr as S,Vs as V,ui as _,Cr as u};
