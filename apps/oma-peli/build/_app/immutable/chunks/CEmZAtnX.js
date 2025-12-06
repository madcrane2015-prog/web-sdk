const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CEVFH-8X.js","./DNWEu6uq.js","./DEliLNnF.js","./DWgShhht.js","./C04N3yhf.js","./C2GHuDhf.js","./B6iY8hv_.js","./BQOWdLhd.js"])))=>i.map(i=>d[i]);
var Da=Object.defineProperty;var za=(t,e,s)=>e in t?Da(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var Z=(t,e,s)=>za(t,typeof e!="symbol"?e+"":e,s);import{f as Ha,l as Ga,t as D,g as W,a as N,d as Va}from"./DRDKHArV.js";import{i as Ya}from"./Dw5_DM93.js";import{y as re,j as Xa,a8 as Ka,F as d,Q as Qa,aa as Ja,ab as xs,h as _s,e as It,k as ze,l as Za,ac as qs,w as Ws,ad as er,q as js,a7 as tr,U as sr,a2 as As,aq as Bt,z as ws,ar,as as rr,at as ir,o as nr,au as or,av as lr,aw as cr,ax as dr,b as ur,ay as fr,az as pr,a6 as hr,aA as gr,aB as mr,D as vr,L as br,p as Ns,ah as j,ag as Us,T as S,aC as Ct,f as Ye,s as v,c as _,r as A,t as ae,I as ks,a as Ds,aD as yr,aE as Ut}from"./DWgShhht.js";import{_ as Es,p as le,i as ee}from"./DEliLNnF.js";import{s as q}from"./4RjN9yQL.js";import{b as xr,p as _r}from"./B1_V_3zc.js";import{b as He}from"./BJh200y8.js";import{e as ue,E as P,a as Ar,C as Gt,Q as at,V as rt,N as Ft,D as X,H as wr,p as ye,a0 as Pe,a1 as xe,a2 as kr,w as de,a3 as Ve,a4 as zs,a5 as Re,a6 as ie,a7 as it,a8 as Hs,a9 as Er,aa as $t,ab as Sr,ac as Tr,y as et}from"./DNWEu6uq.js";import{A as Lr,B as Ss,G as Or,T as Gs,a as Pr,b as Mt}from"./C04N3yhf.js";function Ts(t,e){return e}function Rr(t,e,s,a){for(var r=[],i=e.length,n=0;n<i;n++)ir(e[n].e,r,!0);var o=i>0&&r.length===0&&s!==null;if(o){var u=s.parentNode;nr(u),u.append(s),a.clear(),ce(t,e[0].prev,e[i-1].next)}or(r,()=>{for(var p=0;p<i;p++){var l=e[p];o||(a.delete(l.k),ce(t,l.prev,l.next)),lr(l.e,!o)}})}function Ls(t,e,s,a,r,i=null){var n=t,o={flags:e,items:new Map,first:null};re&&Xa();var u=null,p=!1,l=Qa(()=>{var h=s();return tr(h)?h:h==null?[]:js(h)});Ka(()=>{var h=d(l),g=h.length;if(p&&g===0)return;p=g===0;let w=!1;if(re){var T=n.data===Ja;T!==(g===0)&&(n=xs(),_s(n),It(!1),w=!0)}if(re){for(var z=null,F,L=0;L<g;L++){if(ze.nodeType===8&&ze.data===Za){n=ze,w=!0,It(!1);break}var C=h[L],H=a(C,L);F=Vs(ze,o,z,null,C,H,L,r,e,s),o.items.set(H,F),z=F}g>0&&_s(xs())}re||Ir(h,o,n,r,e,a,s),i!==null&&(g===0?u?qs(u):u=Ws(()=>i(n)):u!==null&&er(u,()=>{u=null})),w&&It(!0),d(l)}),re&&(n=ze)}function Ir(t,e,s,a,r,i,n){var o=t.length,u=e.items,p=e.first,l=p,h,g=null,w=[],T=[],z,F,L,C;for(C=0;C<o;C+=1){if(z=t[C],F=i(z,C),L=u.get(F),L===void 0){var H=l?l.e.nodes_start:s;g=Vs(H,e,g,g===null?e.first:g.next,z,F,C,a,r,n),u.set(F,g),w=[],T=[],l=g.next;continue}if(Br(L,z,C),(L.e.f&Bt)!==0&&qs(L.e),L!==l){if(h!==void 0&&h.has(L)){if(w.length<T.length){var V=T[0],te;g=V.prev;var Xe=w[0],fe=w[w.length-1];for(te=0;te<w.length;te+=1)Os(w[te],V,s);for(te=0;te<T.length;te+=1)h.delete(T[te]);ce(e,Xe.prev,fe.next),ce(e,g,Xe),ce(e,fe,V),l=V,g=fe,C-=1,w=[],T=[]}else h.delete(L),Os(L,l,s),ce(e,L.prev,L.next),ce(e,L,g===null?e.first:g.next),ce(e,g,L),g=L;continue}for(w=[],T=[];l!==null&&l.k!==F;)(l.e.f&Bt)===0&&(h??(h=new Set)).add(l),T.push(l),l=l.next;if(l===null)continue;L=l}w.push(L),g=L,l=L.next}if(l!==null||h!==void 0){for(var Ke=h===void 0?[]:js(h);l!==null;)(l.e.f&Bt)===0&&Ke.push(l),l=l.next;var $=Ke.length;if($>0){var Be=null;Rr(e,Ke,Be,u)}}ws.first=e.first&&e.first.e,ws.last=g&&g.e}function Br(t,e,s,a){rr(t.v,e),t.i=s}function Vs(t,e,s,a,r,i,n,o,u,p){var l=(u&cr)!==0,h=(u&dr)===0,g=l?h?sr(r):As(r):r,w=(u&ar)===0?n:As(n),T={i:w,v:g,k:i,a:null,e:null,prev:s,next:a};try{return T.e=Ws(()=>o(t,g,w,p),re),T.e.prev=s&&s.e,T.e.next=a&&a.e,s===null?e.first=T:(s.next=T,s.e.next=T.e),a!==null&&(a.prev=T,a.e.prev=T.e),T}finally{}}function Os(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,r=e?e.e.nodes_start:s,i=t.e.nodes_start;i!==a;){var n=ur(i);r.before(i),i=n}}function ce(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function Cr(t){if(re){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;be(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var r=t.checked;be(t,"checked",null),t.checked=r}}};t.__on_r=s,fr(s),Ha()}}function be(t,e,s,a){var r=t.__attributes??(t.__attributes={});re&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[pr]=s),s==null?t.removeAttribute(e):typeof s!="string"&&Fr(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var Ps=new Map;function Fr(t){var e=Ps.get(t.nodeName);if(e)return e;Ps.set(t.nodeName,e=[]);for(var s,a=t,r=Element.prototype;r!==a;){s=gr(a);for(var i in s)s[i].set&&e.push(i);a=hr(a)}return e}function $r(t,e,s=e){var a=mr();Ga(t,"input",r=>{var i=r?t.defaultValue:t.value;if(i=qt(t)?Wt(i):i,s(i),a&&i!==(i=e())){var n=t.selectionStart,o=t.selectionEnd;t.value=i??"",o!==null&&(t.selectionStart=n,t.selectionEnd=Math.min(o,t.value.length))}}),(re&&t.defaultValue!==t.value||vr(e)==null&&t.value)&&s(qt(t)?Wt(t.value):t.value),br(()=>{var r=e();qt(t)&&r===Wt(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function qt(t){var e=t.type;return e==="number"||e==="range"}function Wt(t){return t===""?null:+t}function Mr(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const Dt=[];ue.handleByNamedList(P.Environment,Dt);async function qr(t){if(!t)for(let e=0;e<Dt.length;e++){const s=Dt[e];if(s.value.test()){await s.value.load();return}}}let Ge;function Wr(){if(typeof Ge=="boolean")return Ge;try{Ge=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{Ge=!1}return Ge}var Ys=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(Ys||{});class jr{constructor(e){this.items=[],this._name=e}emit(e,s,a,r,i,n,o,u){const{name:p,items:l}=this;for(let h=0,g=l.length;h<g;h++)l[h][p](e,s,a,r,i,n,o,u);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Nr=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Xs=class Ks extends Ar{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...Nr,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await qr(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...Ks.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof Gt&&(a={container:a},s&&(at(rt,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const r=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=r?a.clearColor:Ft.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const r=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==r&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Ys.ALL);const{clear:a,clearColor:r,target:i}=e;Ft.shared.setValue(r??this.background.colorRgba),s.renderTarget.clear(i,a,Ft.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new jr(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const r in this.runners)this.runners[r].add(a);return this}_addPipes(e,s){const a=s.reduce((r,i)=>(r[i.name]=i.value,r),{});e.forEach(r=>{const i=r.value,n=r.name,o=a[n];this.renderPipes[n]=new i(this,o?new o:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Wr())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Xs.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Qs=Xs,tt;function Ur(t){return tt!==void 0||(tt=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??Qs.defaultOptions.failIfMajorPerformanceCaveat};try{if(!X.get().getWebGLRenderingContext())return!1;let r=X.get().createCanvas().getContext("webgl",e);const i=!!((s=r==null?void 0:r.getContextAttributes())!=null&&s.stencil);if(r){const n=r.getExtension("WEBGL_lose_context");n&&n.loseContext()}return r=null,i}catch{return!1}})()),tt}let st;async function Dr(t={}){return st!==void 0||(st=await(async()=>{const e=X.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),st}const Rs=["webgl","webgpu","canvas"];async function zr(t){let e=[];t.preference?(e.push(t.preference),Rs.forEach(i=>{i!==t.preference&&e.push(i)})):e=Rs.slice();let s,a={};for(let i=0;i<e.length;i++){const n=e[i];if(n==="webgpu"&&await Dr()){const{WebGPURenderer:o}=await Es(async()=>{const{WebGPURenderer:u}=await import("./CEVFH-8X.js");return{WebGPURenderer:u}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=o,a={...t,...t.webgpu};break}else if(n==="webgl"&&Ur(t.failIfMajorPerformanceCaveat??Qs.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:o}=await Es(async()=>{const{WebGLRenderer:u}=await import("./BQOWdLhd.js");return{WebGLRenderer:u}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=o,a={...t,...t.webgl};break}else if(n==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const r=new s;return await r.init(a),r}const Js="8.8.1";class Zs{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Js)}static destroy(){}}Zs.extension=P.Application;class Hr{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Js)}destroy(){this._renderer=null}}Hr.extension={type:[P.WebGLSystem,P.WebGPUSystem],name:"initHook",priority:-10};const ea=class zt{constructor(...e){this.stage=new Gt,e[0]!==void 0&&at(rt,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await zr(e),zt._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return at(rt,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=zt._plugins.slice(0);a.reverse(),a.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};ea._plugins=[];let ta=ea;ue.handleByList(P.Application,ta._plugins);ue.add(Zs);class sa extends Lr{constructor(e,s){super();const{textures:a,data:r}=e;Object.keys(r.pages).forEach(i=>{const n=r.pages[parseInt(i,10)],o=a[n.id];this.pages.push({texture:o})}),Object.keys(r.chars).forEach(i=>{const n=r.chars[i],{frame:o,source:u}=a[n.page],p=new wr(n.x+o.x,n.y+o.y,n.width,n.height),l=new ye({source:u,frame:p});this.chars[i]={id:i.codePointAt(0),xOffset:n.xOffset,yOffset:n.yOffset,xAdvance:n.xAdvance,kerning:n.kerning??{},texture:l}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){Ss.install(e)}static uninstall(e){Ss.uninstall(e)}}const jt={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const h in e){const g=e[h].match(/^[a-z]+/gm)[0],w=e[h].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),T={};for(const z in w){const F=w[z].split("="),L=F[0],C=F[1].replace(/"/gm,""),H=parseFloat(C),V=isNaN(H)?C:H;T[L]=V}s[g].push(T)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=s.info,[i]=s.common,[n]=s.distanceField??[];n&&(a.distanceField={range:parseInt(n.distanceRange,10),type:n.fieldType}),a.fontSize=parseInt(r.size,10),a.fontFamily=r.face,a.lineHeight=parseInt(i.lineHeight,10);const o=s.page;for(let h=0;h<o.length;h++)a.pages.push({id:parseInt(o[h].id,10)||0,file:o[h].file});const u={};a.baseLineOffset=a.lineHeight-parseInt(i.base,10);const p=s.char;for(let h=0;h<p.length;h++){const g=p[h],w=parseInt(g.id,10);let T=g.letter??g.char??String.fromCharCode(w);T==="space"&&(T=" "),u[w]=T,a.chars[T]={id:w,page:parseInt(g.page,10)||0,x:parseInt(g.x,10),y:parseInt(g.y,10),width:parseInt(g.width,10),height:parseInt(g.height,10),xOffset:parseInt(g.xoffset,10),yOffset:parseInt(g.yoffset,10),xAdvance:parseInt(g.xadvance,10),kerning:{}}}const l=s.kerning||[];for(let h=0;h<l.length;h++){const g=parseInt(l[h].first,10),w=parseInt(l[h].second,10),T=parseInt(l[h].amount,10);a.chars[u[w]].kerning[u[g]]=T}return a}},Is={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const i=t.getElementsByTagName("page"),n=t.getElementsByTagName("char"),o=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let p=0;p<i.length;p++)e.pages.push({id:parseInt(i[p].getAttribute("id"),10)||0,file:i[p].getAttribute("file")});const u={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let p=0;p<n.length;p++){const l=n[p],h=parseInt(l.getAttribute("id"),10);let g=l.getAttribute("letter")??l.getAttribute("char")??String.fromCharCode(h);g==="space"&&(g=" "),u[h]=g,e.chars[g]={id:h,page:parseInt(l.getAttribute("page"),10)||0,x:parseInt(l.getAttribute("x"),10),y:parseInt(l.getAttribute("y"),10),width:parseInt(l.getAttribute("width"),10),height:parseInt(l.getAttribute("height"),10),xOffset:parseInt(l.getAttribute("xoffset"),10),yOffset:parseInt(l.getAttribute("yoffset"),10),xAdvance:parseInt(l.getAttribute("xadvance"),10),kerning:{}}}for(let p=0;p<o.length;p++){const l=parseInt(o[p].getAttribute("first"),10),h=parseInt(o[p].getAttribute("second"),10),g=parseInt(o[p].getAttribute("amount"),10);e.chars[u[h]].kerning[u[l]]=g}return e}},Bs={test(t){return typeof t=="string"&&t.includes("<font>")?Is.test(X.get().parseXML(t)):!1},parse(t){return Is.parse(X.get().parseXML(t))}},Gr=[".xml",".fnt"],Vr={extension:{type:P.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof sa,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},Yr={extension:{type:P.LoadParser,priority:Pe.Normal},name:"loadBitmapFont",test(t){return Gr.includes(xe.extname(t).toLowerCase())},async testParse(t){return jt.test(t)||Bs.test(t)},async parse(t,e,s){const a=jt.test(t)?jt.parse(t):Bs.parse(t),{src:r}=e,{pages:i}=a,n=[],o=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let h=0;h<i.length;++h){const g=i[h].file;let w=xe.join(xe.dirname(r),g);w=kr(w,r),n.push({src:w,data:o})}const u=await s.load(n),p=n.map(h=>u[h.src]);return new sa({data:a,textures:p},r)},async load(t,e){return await(await X.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class Xr{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Kr={extension:{type:P.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof ye),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((r,i)=>{s[a+(i===0?"":i+1)]=r})}),s}};async function aa(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Qr={extension:{type:P.DetectionParser,priority:1},test:async()=>aa("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},Cs=["png","jpg","jpeg"],Jr={extension:{type:P.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...Cs],remove:async t=>t.filter(e=>!Cs.includes(e))},Zr="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Vt(t){return Zr?!1:document.createElement("video").canPlayType(t)!==""}const ei={extension:{type:P.DetectionParser,priority:0},test:async()=>Vt("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},ti={extension:{type:P.DetectionParser,priority:0},test:async()=>Vt("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},si={extension:{type:P.DetectionParser,priority:0},test:async()=>Vt("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},ai={extension:{type:P.DetectionParser,priority:0},test:async()=>aa("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class ri{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var n,o;let r=null,i=null;if(s.loadParser&&(i=this._parserHash[s.loadParser],i||de(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!i){for(let u=0;u<this.parsers.length;u++){const p=this.parsers[u];if(p.load&&((n=p.test)!=null&&n.call(p,e,s,this))){i=p;break}}if(!i)return de(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await i.load(e,s,this),a.parser=i;for(let u=0;u<this.parsers.length;u++){const p=this.parsers[u];p.parse&&p.parse&&await((o=p.testParse)==null?void 0:o.call(p,r,s,this))&&(r=await p.parse(r,s,this)||r,a.parser=p)}return r})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const r={},i=zs(e),n=Ve(e,p=>({alias:[p],src:p,data:{}})),o=n.length,u=n.map(async p=>{const l=xe.toAbsolute(p.src);if(!r[p.src])try{this.promiseCache[l]||(this.promiseCache[l]=this._getLoadPromiseAndParser(l,p)),r[p.src]=await this.promiseCache[l].promise,s&&s(++a/o)}catch(h){throw delete this.promiseCache[l],delete r[p.src],new Error(`[Loader.load] Failed to load ${l}.
${h}`)}});return await Promise.all(u),i?r[n[0].src]:r}async unload(e){const a=Ve(e,r=>({alias:[r],src:r})).map(async r=>{var o,u;const i=xe.toAbsolute(r.src),n=this.promiseCache[i];if(n){const p=await n.promise;delete this.promiseCache[i],await((u=(o=n.parser)==null?void 0:o.unload)==null?void 0:u.call(o,p,r,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&de(`[Assets] loadParser name conflict "${s.name}"`):de("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function Ie(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const ii=".json",ni="application/json",oi={extension:{type:P.LoadParser,priority:Pe.Low},name:"loadJson",test(t){return Ie(t,ni)||Re(t,ii)},async load(t){return await(await X.get().fetch(t)).json()}},li=".txt",ci="text/plain",di={name:"loadTxt",extension:{type:P.LoadParser,priority:Pe.Low,name:"loadTxt"},test(t){return Ie(t,ci)||Re(t,li)},async load(t){return await(await X.get().fetch(t)).text()}},ui=["normal","bold","100","200","300","400","500","600","700","800","900"],fi=[".ttf",".otf",".woff",".woff2"],pi=["font/ttf","font/otf","font/woff","font/woff2"],hi=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function gi(t){const e=xe.extname(t),r=xe.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(o=>o.charAt(0).toUpperCase()+o.slice(1));let i=r.length>0;for(const o of r)if(!o.match(hi)){i=!1;break}let n=r.join(" ");return i||(n=`"${n.replace(/[\\"]/g,"\\$&")}"`),n}const mi=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function vi(t){return mi.test(t)?t:encodeURI(t)}const bi={extension:{type:P.LoadParser,priority:Pe.Low},name:"loadWebFont",test(t){return Ie(t,pi)||Re(t,fi)},async load(t,e){var a,r,i;const s=X.get().getFontFaceSet();if(s){const n=[],o=((a=e.data)==null?void 0:a.family)??gi(t),u=((i=(r=e.data)==null?void 0:r.weights)==null?void 0:i.filter(l=>ui.includes(l)))??["normal"],p=e.data??{};for(let l=0;l<u.length;l++){const h=u[l],g=new FontFace(o,`url(${vi(t)})`,{...p,weight:h});await g.load(),s.add(g),n.push(g)}return ie.set(`${o}-and-url`,{url:t,fontFaces:n}),n.length===1?n[0]:n}return de("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{ie.remove(`${e.family}-and-url`),X.get().getFontFaceSet().delete(e)})}};function Yt(t,e=1){var a;const s=(a=it.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function Xt(t,e,s){t.label=s,t._sourceOrigin=s;const a=new ye({source:t,label:s}),r=()=>{delete e.promiseCache[s],ie.has(s)&&ie.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(de("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),a.once("destroy",()=>{t.destroyed||(de("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),a}const yi=".svg",xi="image/svg+xml",_i={extension:{type:P.LoadParser,priority:Pe.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return Ie(t,xi)||Re(t,yi)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?wi(t):Ai(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function Ai(t,e,s,a){var F,L,C;const i=await(await X.get().fetch(t)).blob(),n=URL.createObjectURL(i),o=new Image;o.src=n,o.crossOrigin=a,await o.decode(),URL.revokeObjectURL(n);const u=document.createElement("canvas"),p=u.getContext("2d"),l=((F=e.data)==null?void 0:F.resolution)||Yt(t),h=((L=e.data)==null?void 0:L.width)??o.width,g=((C=e.data)==null?void 0:C.height)??o.height;u.width=h*l,u.height=g*l,p.drawImage(o,0,0,h*l,g*l);const{parseAsGraphicsContext:w,...T}=e.data??{},z=new Hs({resource:u,alphaMode:"premultiply-alpha-on-upload",resolution:l,...T});return Xt(z,s,t)}async function wi(t){const s=await(await X.get().fetch(t)).text(),a=new Or;return a.svg(s),a}const ki=`(function () {
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
`;let Le=null,Ht=class{constructor(){Le||(Le=URL.createObjectURL(new Blob([ki],{type:"application/javascript"}))),this.worker=new Worker(Le)}};Ht.revokeObjectURL=function(){Le&&(URL.revokeObjectURL(Le),Le=null)};const Ei=`(function () {
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
`;let Oe=null;class ra{constructor(){Oe||(Oe=URL.createObjectURL(new Blob([Ei],{type:"application/javascript"}))),this.worker=new Worker(Oe)}}ra.revokeObjectURL=function(){Oe&&(URL.revokeObjectURL(Oe),Oe=null)};let Fs=0,Nt;class Si{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new Ht;s.addEventListener("message",a=>{s.terminate(),Ht.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Nt===void 0&&(Nt=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Nt&&(this._createdWorkers++,e=new ra().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((r,i)=>{this._queue.push({id:e,arguments:s,resolve:r,reject:i})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[Fs]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:Fs++,id:a})}}const $s=new Si,Ti=[".jpeg",".jpg",".png",".webp",".avif"],Li=["image/jpeg","image/png","image/webp","image/avif"];async function Oi(t,e){var r;const s=await X.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const ia={name:"loadTextures",extension:{type:P.LoadParser,priority:Pe.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return Ie(t,Li)||Re(t,Ti)},async load(t,e,s){var i;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await $s.isImageBitmapSupported()?a=await $s.loadImageBitmap(t,e):a=await Oi(t,e):a=await new Promise((n,o)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?n(a):(a.onload=()=>{n(a)},a.onerror=o)});const r=new Hs({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((i=e.data)==null?void 0:i.resolution)||Yt(t),...e.data});return Xt(r,s,t)},unload(t){t.destroy(!0)}},na=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Pi=na.map(t=>`video/${t.substring(1)}`);function Ri(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=Bi(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function Ii(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",r),t.load();function a(){i(),e()}function r(n){i(),s(n)}function i(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",r)}})}function Bi(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const Ci={name:"loadVideo",extension:{type:P.LoadParser,name:"loadVideo"},test(t){const e=Ie(t,Pi),s=Re(t,na);return e||s},async load(t,e,s){var u,p;const a={...$t.defaultOptions,resolution:((u=e.data)==null?void 0:u.resolution)||Yt(t),alphaMode:((p=e.data)==null?void 0:p.alphaMode)||await Er(),...e.data},r=document.createElement("video"),i={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(i).forEach(l=>{const h=i[l];h!==void 0&&r.setAttribute(l,h)}),a.muted===!0&&(r.muted=!0),Ri(r,t,a.crossorigin);const n=document.createElement("source");let o;if(t.startsWith("data:"))o=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const l=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();o=$t.MIME_TYPES[l]||`video/${l}`}return n.src=t,o&&(n.type=o),new Promise(l=>{const h=async()=>{const g=new $t({...a,resource:r});r.removeEventListener("canplay",h),e.data.preload&&await Ii(r),l(Xt(g,s,t))};r.addEventListener("canplay",h),r.appendChild(n)})},unload(t){t.destroy(!0)}},oa={extension:{type:P.ResolveParser,name:"resolveTexture"},test:ia.test,parse:t=>{var e;return{resolution:parseFloat(((e=it.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},Fi={extension:{type:P.ResolveParser,priority:-2,name:"resolveJson"},test:t=>it.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:oa.parse};class $i{constructor(){this._detections=[],this._initialized=!1,this.resolver=new it,this.loader=new ri,this.cache=ie,this._backgroundLoader=new Xr(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var i,n;if(this._initialized){de("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let o=e.manifest;typeof o=="string"&&(o=await this.load(o)),this.resolver.addManifest(o)}const s=((i=e.texturePreference)==null?void 0:i.resolution)??1,a=typeof s=="number"?[s]:s,r=await this._detectFormats({preferredFormats:(n=e.texturePreference)==null?void 0:n.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=zs(e),r=Ve(e).map(o=>{if(typeof o!="string"){const u=this.resolver.getAlias(o);return u.some(p=>!this.resolver.hasKey(p))&&this.add(o),Array.isArray(u)?u[0]:u}return this.resolver.hasKey(o)||this.add({alias:o,src:o}),o}),i=this.resolver.resolve(r),n=await this._mapLoadToResolve(i,s);return a?n[r[0]]:n}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const r=this.resolver.resolveBundle(e),i={},n=Object.keys(r);let o=0,u=0;const p=()=>{s==null||s(++o/u)},l=n.map(h=>{const g=r[h];return u+=Object.keys(g).length,this._mapLoadToResolve(g,p).then(w=>{i[h]=w})});return await Promise.all(l),a?i[e[0]]:i}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return ie.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=ie.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(a,s);this._backgroundLoader.active=!0;const i={};return a.forEach(n=>{const o=r[n.src],u=[n.src];n.alias&&u.push(...n.alias),u.forEach(p=>{i[p]=o}),ie.set(u,o)}),i}async unload(e){this._initialized||await this.init();const s=Ve(e).map(r=>typeof r!="string"?r.src:r),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=Ve(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(r=>this._unloadFromResolved(s[r]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{ie.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,r)=>s.indexOf(a)===r),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const Te=new $i;ue.handleByList(P.LoadParser,Te.loader.parsers).handleByList(P.ResolveParser,Te.resolver.parsers).handleByList(P.CacheParser,Te.cache.parsers).handleByList(P.DetectionParser,Te.detections);ue.add(Kr,Jr,Qr,ai,ei,ti,si,oi,di,bi,_i,ia,Ci,Yr,Vr,oa,Fi);const Ms={loader:P.LoadParser,resolver:P.ResolveParser,cache:P.CacheParser,detection:P.DetectionParser};ue.handle(P.Asset,t=>{const e=t.ref;Object.entries(Ms).filter(([s])=>!!e[s]).forEach(([s,a])=>ue.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(Ms).filter(s=>!!e[s]).forEach(s=>ue.remove(e[s]))});class Mi extends Sr{constructor(e,s){const{text:a,resolution:r,style:i,anchor:n,width:o,height:u,roundPixels:p,...l}=e;super({...l}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=i,this.resolution=r??null,this.allowChildren=!1,this._anchor=new Tr({_onUpdate:()=>{this.onViewUpdate()}}),n&&(this.anchor=n),this.roundPixels=p??!1,o!==void 0&&(this.width=o),u!==void 0&&(this.height=u)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,r=-s*this.anchor.x;let i=0;return e.x>=r&&e.x<=r+s&&(i=-a*this.anchor.y,e.y>=i&&e.y<=i+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function qi(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(at(rt,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class Wi extends Mi{constructor(...e){const s=qi(e,"Text");super(s,Gs),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=Pr.measureText(this._text,this._style),{width:r,height:i}=a;e.minX=-s._x*r,e.maxX=e.minX+r,e.minY=-s._y*i,e.maxY=e.minY+i}}var ji=D('<p style="color: red;" class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Error:</strong> </p>'),Ni=D('<div class="svelte-1t2q5b9"> </div>'),Ui=D('<details class="svelte-1t2q5b9"><summary class="svelte-1t2q5b9"> </summary> <!></details>'),Di=D(`<div style="
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
  " class="svelte-1t2q5b9"><h3 class="svelte-1t2q5b9">🎰 Oma-peli Debug</h3> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Status:</strong> </p> <!> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Base:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">BG URL:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Sample:</strong> </p> <!></div>`),zi=D('<span style="color: #ffd700; font-weight: bold;" class="svelte-1t2q5b9"> </span>'),Hi=D('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-1t2q5b9"> <!></div>'),Gi=D(`<div style="
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
      " class="svelte-1t2q5b9">Jatka pelaamista</button></div>`),Vi=D(`<div style="
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
  " class="svelte-1t2q5b9"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-1t2q5b9">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-1t2q5b9">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-1t2q5b9"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-1t2q5b9"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-1t2q5b9">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">g (Rockabilly): 3x=2.5 | 4x=12.5 | 5x=50</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">e (Blonde): 3x=2.5 | 4x=10 | 5x=37.5</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">f (Brunette): 3x=1.5 | 4x=7.5 | 5x=25</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-1t2q5b9">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">a (Hot Rod): 3x=1 | 4x=3.5 | 5x=12.5</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">b (Jacket): 3x=1 | 4x=3.5 | 5x=12.5</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">c (Roller Skates): 3x=0.75 | 4x=2.5 | 5x=10</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">d (Microphone): 3x=0.75 | 4x=2.5 | 5x=10</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-1t2q5b9">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">i (Burger): 3x=0.25 | 4x=1 | 5x=5</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">j (Fries): 3x=0.25 | 4x=1 | 5x=5</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">k (Milkshake): 3x=0.15 | 4x=0.5 | 5x=2.4</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-1t2q5b9">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">h (WILD) - Korvaa kaikki muut symbolit (paitsi Scatter)</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">l (SCATTER) - 5-12 symbolia = 8-15 FREE SPINS</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-1t2q5b9">Kaikki voitot kerrotaan panoksella (Bet)</div> <button style="
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
      " class="svelte-1t2q5b9">Sulje</button></div>`),Yi=D(`<div style="
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
        " class="svelte-1t2q5b9">⏹ STOP</button></div>`),Xi=D(`<div style="
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
          " class="svelte-1t2q5b9">Cancel</button></div>`),Ki=D(`<button style="
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
      " class="svelte-1t2q5b9">🔄 AUTOPLAY</button> <!>`,1),Qi=D(`<!> <!> <!> <div class="svelte-1t2q5b9"></div> <div style="
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
  " class="svelte-1t2q5b9"><span style="color: #ffd700;" class="svelte-1t2q5b9">RTP:</span> <span class="svelte-1t2q5b9"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
  " class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Hit Freq:</span> <span class="svelte-1t2q5b9"> </span></div> <button style="
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
" class="svelte-1t2q5b9"><!></div> <button class="svelte-1t2q5b9"> </button> <button title="SPIN" class="svelte-1t2q5b9"></button>`,1);function Ji(t,e){Ns(e,!0);const s=13,a=1445,r=1e3,i=1.75,n=-30,o=-10,u=160,p=0,l=720,h=750,g=.8,w=50,T=30,z=-40,F=1,L="height",H=Math.round(100*i),V=Math.round(H*(700/760)),Xe=V+10,fe=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],$=typeof window<"u"&&window.location.hostname.includes("github.io")?"/web-sdk/oma-peli/symbols":`${He}/symbols`,Be={a:`${$}/Blue_hotrod.jpg`,b:`${$}/Blue_jacket.jpg`,c:`${$}/Blue_rollers.jpg`,d:`${$}/Blue_speakers.jpg`,e:`${$}/Premium_blonde.jpg`,f:`${$}/Premium_brunette.jpg`,g:`${$}/Premium_rocker.jpg`,h:`${$}/Red_bubblegum.jpg`,i:`${$}/Red_burger.jpg`,j:`${$}/Red_fries.jpg`,k:`${$}/Red_milkshake.jpg`,l:`${$}/Scatter.jpg`,emptyslot:`${$}/Emptyslot.jpg`},nt=`${$}/bg_base.jpg`,Kt=`${$}/ReelFrames.png`,Qt=`${$}/RockABillyReels_logo.png`,Jt={spin:`${He}/sounds/spin.mp3`,stop:`${He}/sounds/stop.mp3`,win:`${He}/sounds/win.mp3`};let pe=j(!0),Qe={},Je=null,_e=null,Ce=null,Fe=null,$e=j("Initializing..."),Ae=j(""),Q=[],ne=j(1e3),G=j(10);const Zt=1,ot=100;let he=j(!1),we=j(0),Me=j(!1),la=j(0),ge=!1,se=null,lt=!1,qe=j(0),ke=j(0),We=j(0),ct=j(0),dt=ks(()=>d(ke)>0?(d(We)/d(ke)*100).toFixed(2):"0.00"),ut=ks(()=>d(qe)>0?(d(ct)/d(qe)*100).toFixed(2):"0.00");const es={k:.18,j:.15,i:.15,c:.09,d:.09,b:.07,a:.07,f:.04,e:.03,g:.025,l:.025,h:.08,emptyslot:0};function ts(f){if(f===6){const x=Math.random()<.5?"emptyslot":"h";return console.log(`Reel ${f} (MIDDLE): ${x}`),x}const m=Math.random();let c=0;const y=fe.filter(x=>x!=="emptyslot"&&x!=="h"),b=y.reduce((x,O)=>x+es[O],0);for(const x of y)if(c+=es[x]/b,m<c)return console.log(`Reel ${f} (WEIGHTED): ${x}`),x;return"k"}function ss(){const f=[];for(let m=0;m<s;m++)f.push(ts(m));return f}function ca(f){return f<3?{col:0,row:f}:f<6?{col:1,row:f-3}:f===6?{col:2,row:0}:f<10?{col:3,row:f-7}:{col:4,row:f-10}}function je(f,m){return f===0?m:f===1?3+m:f===2?6:f===3?7+m:f===4?10+m:-1}const da={k:{3:.15,4:.5,5:2.4},j:{3:.25,4:1,5:5},i:{3:.25,4:1,5:5},c:{3:.75,4:2.5,5:10},d:{3:.75,4:2.5,5:10},b:{3:1,4:3.5,5:12.5},a:{3:1,4:3.5,5:12.5},f:{3:1.5,4:7.5,5:25},e:{3:2.5,4:10,5:37.5},g:{3:2.5,4:12.5,5:50},h:{},l:{3:2.5,4:12.5,5:50},emptyslot:{}};function ua(){var x;const f=[],m=[];for(let O=0;O<s;O++)M[O]==="l"&&m.push(O);if(m.length>=5){const O=8+(m.length-5);console.log(`🎰 SCATTER WIN! ${m.length} scatters = ${O} FREE SPINS!`),f.push({symbol:"l",count:m.length,payout:0,positions:m})}M[0],M[1],M[2],M[3],M[4],M[5],M[6],M[7],M[8],M[9],M[10],M[11],M[12];const c=[];for(let O=0;O<3;O++)for(let E=0;E<3;E++)for(let R=0;R<1;R++)for(let I=0;I<3;I++)for(let k=0;k<3;k++){const U=[je(0,O),je(1,E),je(2,R),je(3,I),je(4,k)];c.push(U)}console.log(`Generated ${c.length} possible paths (should be 81)`);const y=new Map;for(const O of c){const E=O.map(k=>M[k]);if(E[0]==="emptyslot"||E[0]==="l")continue;let R=null;for(let k=0;k<E.length;k++)if(E[k]!=="h"&&E[k]!=="emptyslot"&&E[k]!=="l"){R=E[k];break}if(!R)continue;let I=0;for(let k=0;k<E.length;k++){const U=E[k];if(U===R||U==="h")I++;else break}if(I>=3){const k=`${R}-${I}`,U=y.get(k);U?U.lineCount++:y.set(k,{symbol:R,length:I,lineCount:1,examplePath:O.slice(0,I)})}}const b=[];for(const[O,E]of y.entries()){const R=(x=da[E.symbol])==null?void 0:x[E.length];if(R!==void 0&&R>0){const I=R*d(G);console.log(`Win: ${E.length}x ${E.symbol} (found on ${E.lineCount} ways) = ${I}`),b.push({symbol:E.symbol,count:E.length,payout:I,positions:E.examplePath})}}return f.push(...b),f}let me=j(0),ft=j(le([])),oe=j(!1),Ze=j(!1);const fa={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function pt(f){if(!d(pe)||!Qe[f])return;const m=Qe[f];m.currentTime=0,m.play().catch(c=>{console.warn("Äänen toisto epäonnistui:",f,c)})}function pa(f){Ne.forEach(m=>B.stage.removeChild(m)),Ne=[],f.forEach(m=>{m.positions.forEach(c=>{const y=Ee[c],b=new Mt().rect(0,0,H,V).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});b.x=y.container.x,b.y=y.container.y,B.stage.addChild(b),Ne.push(b);let x=0,O=1;const E=.05;B.ticker.add(()=>{x+=O*E,x>=.4&&(O=-1),x<=0&&(O=1),b.alpha=.5+x})})})}function ht(){Ne.forEach(f=>B.stage.removeChild(f)),Ne=[]}let M=ss(),gt,B,Ee=[],Ne=[];class ha{constructor(m,c){Z(this,"index");Z(this,"container");Z(this,"offset",0);Z(this,"speed",0);Z(this,"targetSpeed",30);Z(this,"state","idle");Z(this,"stopDelay",0);Z(this,"bounceOffset",0);Z(this,"bounceSpeed",0);Z(this,"bounceFrames",0);this.index=m,this.container=c}start(m){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=m}update(){this.state!=="idle"&&(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"&&(this.speed*=.92,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,pt("stop"))),this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=Xe&&(this.offset=0,M[this.index]=ts(this.index))))}draw(){const m=this.container;m.removeChildren();const c=M[this.index];if(!c||!Je||!Je[c])return;const y=Je[c];if(!y)return;const b=this.offset+this.bounceOffset,x=new et(y);x.width=H,x.height=V,x.x=0,x.y=b,m.addChild(x)}}Us(async()=>{B=new ta,await B.init({width:a,height:r,background:"#001a33"}),gt.appendChild(B.canvas);const f={};try{S($e,"Loading background and UI images..."),Q.push(`Loading background: ${nt}`),Q.push(`Loading reel frames: ${Kt}`),Q.push(`Loading logo: ${Qt}`),await Te.load([{alias:"background",src:nt},{alias:"reelframes",src:Kt},{alias:"logo",src:Qt}]),_e=ye.from("background"),Ce=ye.from("reelframes"),Fe=ye.from("logo"),console.log("✅ Background texture created:",_e.width,"x",_e.height),console.log("✅ Reel frames texture created:",Ce.width,"x",Ce.height),console.log("✅ Logo texture created:",Fe.width,"x",Fe.height),Q.push("✅ All UI images loaded"),S($e,"Loading symbols...");const c=[];for(const y of fe)c.push({alias:y,src:Be[y]});await Te.load(c);for(const y of fe){const b=Be[y];Q.push(`Loading symbol ${y}: ${b}`);try{const x=ye.from(y);f[y]=x,console.log(`✅ Symbol ${y} loaded:`,x.width,"x",x.height),Q.push(`✅ Symbol ${y} loaded`)}catch(x){const O=`❌ Failed to load symbol ${y} from ${b}: ${x}`;throw Q.push(O),console.error(O),new Error(O)}}Je=f,S($e,"Assets loaded successfully!")}catch(c){S(Ae,`Asset loading failed: ${c}`),Q.push(d(Ae)),console.error(d(Ae));return}console.log("Ladataan ääniefektit...");for(const[c,y]of Object.entries(Jt)){const b=new Audio;b.src=y,b.preload="auto",b.volume=.7,b.load(),b.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${y} (käytetään hiljaista placeholderia)`)}),Qe[c]=b}console.log("Ladataan ääniefektit...");for(const[c,y]of Object.entries(Jt)){const b=new Audio;b.src=y,b.preload="auto",b.volume=.7,b.load(),b.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${y} (käytetään hiljaista placeholderia)`)}),Qe[c]=b}if(console.log("Taustakuva ladattu, tekstuuri:",_e),_e){const c=new et(_e);B.renderer.width/B.renderer.height;const y=c.texture.width/c.texture.height;let b;b=B.renderer.height/c.texture.height,b*=F,c.scale.set(b),c.x=(B.renderer.width-c.width)/2,c.y=(B.renderer.height-c.height)/2+z,B.stage.addChild(c),console.log("Taustakuva lisätty:",L,"mode, size:",c.width.toFixed(0),"x",c.height.toFixed(0),"image aspect:",y.toFixed(2),"scale:",b.toFixed(2),"pos:",c.x.toFixed(0),c.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(c=>({x:c.x+n,y:c.y+o})),Ee=[];for(let c=0;c<s;c++){const y=ca(c),b=y.col,x=y.row,O=300+b*(H+20),E=250+x*(V+15),R=c===6?O+p:O,I=c===6?E+u:E,k=new Gt;k.x=R+n,k.y=I+o;const U=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],J=new Mt().rect(0,0,H,V).fill({color:U[c],alpha:.3});J.x=k.x,J.y=k.y,B.stage.addChild(J);const ve=new Gs({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),Y=new Wi({text:c.toString(),style:ve});Y.x=k.x+5,Y.y=k.y+5,B.stage.addChild(Y);const K=new Mt().rect(0,0,H,V).fill(16777215);K.x=k.x,K.y=k.y,k.mask=K,B.stage.addChild(K),B.stage.addChild(k),Ee.push(new ha(c,k))}if(Ce){const c=new et(Ce);c.scale.set(1),c.x=250,c.y=200,B.stage.addChild(c),console.log("Reel frames lisätty:",c.width.toFixed(0),"x",c.height.toFixed(0))}if(Fe){const c=new et(Fe);c.scale.set(g),c.x=(B.renderer.width-c.width)/2+w,c.y=T,B.stage.addChild(c),console.log("Logo lisätty päällimmäiseen layeriin:",c.width.toFixed(0),"x",c.height.toFixed(0))}B.ticker.add(ga)});function ga(){for(const f of Ee)f.update(),f.draw();if(!d(oe)&&!lt&&Ee.every(f=>f.state==="stopped")){lt=!0;const f=ua();console.log(`Checking wins, found ${f.length} wins`),f.length>0?(S(ft,le(f)),S(me,le(f.reduce((m,c)=>m+c.payout,0))),ma(d(me)),S(oe,!0),S(la,le(Date.now())),console.log(`🎉 VOITTO! ${d(me)} pistettä! Uusi saldo: ${d(ne)}`),console.log(`isShowingWin set to: ${d(oe)}, totalWin: ${d(me)}`),f.forEach(m=>{const c=m.multiplier?` (${m.multiplier}x multiplier)`:"";console.log(`${m.count}x ${m.symbol} = ${m.payout} pistettä${c}`)}),pa(f),pt("win"),d(he)&&!ge&&(ge=!0,se=window.setTimeout(()=>{d(oe)&&d(he)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),S(oe,!1),ht()),se=window.setTimeout(()=>{ge=!1,vt()},200)},1500))):(console.log("No wins found this spin"),d(he)&&!ge&&(ge=!0,se=window.setTimeout(()=>{ge=!1,vt()},1e3)))}}function as(){if(d(ne)<d(G)){alert(`Not enough credits! Balance: ${d(ne)}, Bet: ${d(G)}`),mt();return}se!==null&&(clearTimeout(se),se=null),S(ne,d(ne)-d(G)),Ct(qe),S(ke,d(ke)+d(G)),S(ft,le([])),S(me,0),S(oe,!1),lt=!1,ht(),M=ss(),Ee.forEach((f,m)=>f.start(60+m*10)),pt("spin")}function ma(f){S(ne,d(ne)+f),S(We,d(We)+f),f>0&&Ct(ct)}function va(){d(G)<ot&&S(G,le(Math.min(d(G)+1,ot)))}function ba(){d(G)>Zt&&S(G,le(Math.max(d(G)-1,Zt)))}function ya(){S(G,ot)}function Ue(f){S(he,!0),S(we,le(f)),S(Me,!1),vt()}function mt(){S(he,!1),S(we,0),ge=!1,se!==null&&(clearTimeout(se),se=null)}function vt(){if(!d(he)||d(we)<=0){mt();return}console.log(`Autoplay: Starting spin ${d(we)} rounds left`),as(),Ct(we,-1)}function xa(){confirm("Reset all statistics?")&&(S(qe,0),S(ke,0),S(We,0),S(ct,0))}var rs=Qi(),is=Ye(rs);{var _a=f=>{var m=Di(),c=v(_(m),2),y=v(_(c));A(c);var b=v(c,2);{var x=Y=>{var K=ji(),De=v(_(K));A(K),ae(()=>q(De,` ${d(Ae)??""}`)),N(Y,K)};ee(b,Y=>{d(Ae)&&Y(x)})}var O=v(b,2),E=v(_(O));E.nodeValue=` ${He??""}`,A(O);var R=v(O,2),I=v(_(R));I.nodeValue=` ${nt??""}`,A(R);var k=v(R,2),U=v(_(k));A(k);var J=v(k,2);{var ve=Y=>{var K=Ui(),De=_(K),qa=_(De);A(De);var Wa=v(De,2);Ls(Wa,17,()=>Q,Ts,(ja,Na)=>{var Rt=Ni(),Ua=_(Rt,!0);A(Rt),ae(()=>q(Ua,d(Na))),N(ja,Rt)}),A(K),ae(()=>q(qa,`Log (${Q.length??""})`)),N(Y,K)};ee(J,Y=>{Q.length>0&&Y(ve)})}A(m),ae(()=>{q(y,` ${d($e)??""}`),q(U,` ${Be.a??""}`)}),N(f,m)};ee(is,f=>{(d($e)!=="Assets loaded successfully!"||d(Ae))&&f(_a)})}var ns=v(is,2);{var Aa=f=>{var m=Gi(),c=v(_(m),2),y=_(c);A(c);var b=v(c,2);Ls(b,17,()=>d(ft),Ts,(O,E)=>{var R=Hi(),I=_(R),k=v(I);{var U=J=>{var ve=zi(),Y=_(ve);A(ve),ae(()=>q(Y,`(${d(E).multiplier??""}x kerroin!)`)),N(J,ve)};ee(k,J=>{d(E).multiplier&&d(E).multiplier>1&&J(U)})}A(R),ae(()=>q(I,`${d(E).count??""} × ${fa[d(E).symbol]??""} = ${d(E).payout??""} pistettä `)),N(O,R)});var x=v(b,2);A(m),ae(()=>q(y,`${d(me)??""} pistettä`)),W("click",x,()=>{S(oe,!1),ht(),console.log("Win popup closed, ready for next spin")}),N(f,m)};ee(ns,f=>{d(me)>0&&d(oe)&&f(Aa)})}var os=v(ns,2);{var wa=f=>{var m=Vi(),c=v(_(m),8);A(m),W("click",c,()=>{S(Ze,!1)}),N(f,m)};ee(os,f=>{d(Ze)&&f(wa)})}var ls=v(os,2);xr(ls,f=>gt=f,()=>gt);var bt=v(ls,2),yt=_(bt),cs=v(_(yt),2),ka=_(cs,!0);A(cs),A(yt);var ds=v(yt,2),us=v(_(ds),2),Ea=_(us,!0);A(us),A(ds),A(bt);var xt=v(bt,2),fs=v(_(xt),2),ps=_(fs),_t=v(ps,2),Sa=_(_t,!0);A(_t);var hs=v(_t,2),Ta=v(hs,2);A(fs),A(xt);var gs=v(xt,2),At=v(gs,2),wt=v(_(At),2),ms=v(_(wt),2),La=_(ms,!0);A(ms),A(wt);var kt=v(wt,2),vs=v(_(kt),2),Oa=_(vs,!0);A(vs),A(kt);var Et=v(kt,2),bs=v(_(Et),2),Pa=_(bs,!0);A(bs),A(Et);var St=v(Et,2),Tt=v(_(St),2),Ra=_(Tt);A(Tt),A(St);var Lt=v(St,2),Ot=v(_(Lt),2),Ia=_(Ot);A(Ot),A(Lt);var Ba=v(Lt,2);A(At);var Pt=v(At,2),Ca=_(Pt);{var Fa=f=>{var m=Yi(),c=v(_(m),2),y=_(c);A(c);var b=v(c,2);A(m),ae(()=>q(y,`${d(we)??""} left`)),W("click",b,mt),N(f,m)},$a=f=>{var m=Ki(),c=Ye(m),y=v(c,2);{var b=x=>{var O=Xi(),E=v(_(O),2),R=v(E,2),I=v(R,2),k=v(I,2),U=v(k,2),J=v(U,2);A(O),W("click",E,()=>Ue(10)),W("click",R,()=>Ue(100)),W("click",I,()=>Ue(1e3)),W("click",k,()=>Ue(1e4)),W("click",U,()=>Ue(1e5)),W("click",J,()=>{S(Me,!1)}),N(x,O)};ee(y,x=>{d(Me)&&x(b)})}W("click",c,()=>{S(Me,!d(Me))}),N(f,m)};ee(Ca,f=>{d(he)?f(Fa):f($a,!1)})}A(Pt);var Se=v(Pt,2),Ma=_(Se,!0);A(Se);var ys=v(Se,2);be(ys,"style",`
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
  `),ae((f,m,c,y,b,x)=>{q(ka,f),q(Ea,d(G)),q(Sa,d(G)),q(La,m),q(Oa,c),q(Pa,y),be(Tt,"style",`color: ${b??""};`),q(Ra,`${d(dt)??""}%`),be(Ot,"style",`color: ${x??""};`),q(Ia,`${d(ut)??""}%`),be(Se,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(d(pe)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(d(pe)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),be(Se,"title",d(pe)?"Mykistä äänet":"Laita äänet päälle"),q(Ma,d(pe)?"🔊":"🔇")},[()=>d(ne).toLocaleString(),()=>d(qe).toLocaleString(),()=>d(ke).toLocaleString(),()=>d(We).toLocaleString(),()=>parseFloat(d(dt))>=95?"#00ff00":parseFloat(d(dt))>=85?"#ffff00":"#ff6666",()=>parseFloat(d(ut))>=30?"#00ff00":parseFloat(d(ut))>=20?"#ffff00":"#ff6666"]),W("click",ps,ba),W("click",hs,va),W("click",Ta,ya),W("click",gs,()=>{S(Ze,!d(Ze))}),W("click",Ba,xa),W("click",Se,()=>{S(pe,!d(pe))}),W("click",ys,as),N(t,rs),Ds()}var Zi=D('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),en=D('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function tn(t,e){Ns(e,!1);let s=_r(e,"isAuthenticated",12,!1),a=Ut(""),r=Ut(!1);const i="slot2024";function n(){d(a)===i?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(S(r,!0),S(a,""),setTimeout(()=>S(r,!1),3e3))}Us(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),Ya();var o=Va(),u=Ye(o);{var p=l=>{var h=en(),g=_(h),w=v(_(g),4),T=_(w);Cr(T),yr(2),A(w);var z=v(w,2);{var F=L=>{var C=Zi();N(L,C)};ee(z,L=>{d(r)&&L(F)})}A(g),A(h),$r(T,()=>d(a),L=>S(a,L)),W("submit",w,Mr(n)),N(l,h)};ee(u,l=>{s()||l(p)})}N(t,o),Ds()}var sn=D('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),an=D("<!> <!>",1);function mn(t){let e=Ut(!1);var s=an(),a=Ye(s);tn(a,{get isAuthenticated(){return d(e)},set isAuthenticated(n){S(e,n)},$$legacy:!0});var r=v(a,2);{var i=n=>{var o=sn(),u=v(Ye(o),2);Ji(u,{}),N(n,o)};ee(r,n=>{d(e)&&n(i)})}N(t,s)}export{Qs as A,Ys as C,Hr as R,jr as S,Js as V,mn as _,Wr as u};
