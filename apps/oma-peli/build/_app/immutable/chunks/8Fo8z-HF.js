const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./2U8aNjeF.js","./DNWEu6uq.js","./DEliLNnF.js","./DWgShhht.js","./C04N3yhf.js","./C2GHuDhf.js","./DAGF2_Ud.js","./NtGDxkgw.js"])))=>i.map(i=>d[i]);
var fr=Object.defineProperty;var pr=(t,e,s)=>e in t?fr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var re=(t,e,s)=>pr(t,typeof e!="symbol"?e+"":e,s);import{f as ur,l as hr,t as V,g as D,a as G,d as gr}from"./DRDKHArV.js";import{i as vr}from"./Dw5_DM93.js";import{y as ce,j as mr,a8 as br,F as o,Q as yr,aa as xr,ab as Ws,h as js,e as Ht,k as Ze,l as _r,ac as sa,w as aa,ad as wr,q as ra,a7 as Ar,U as kr,a2 as Ns,aq as Yt,z as zs,ar as Er,as as Sr,at as Tr,o as Rr,au as Pr,av as Lr,aw as Ir,ax as Or,b as Br,ay as Cr,az as Fr,a6 as qr,aA as Mr,aB as $r,D as Wr,L as jr,p as na,ah as F,ag as ia,T as x,aC as he,f as qe,s as v,c as b,r as y,t as ie,I as Xt,a as oa,aD as Nr,aE as as}from"./DWgShhht.js";import{_ as Us,p as ge,i as te}from"./DEliLNnF.js";import{s as q}from"./4RjN9yQL.js";import{b as zr,p as Ur}from"./B1_V_3zc.js";import{b as et}from"./DL_46ivd.js";import{e as ye,E as O,a as Dr,C as os,Q as ht,V as gt,N as Kt,D as Z,H as Gr,p as Se,a0 as We,a1 as Te,a2 as Vr,w as be,a3 as st,a4 as la,a5 as je,a6 as de,a7 as vt,a8 as ca,a9 as Hr,aa as Qt,ab as Yr,ac as Xr,y as ft}from"./DNWEu6uq.js";import{A as Kr,B as Ds,G as Qr,T as da,a as Jr,b as Jt}from"./C04N3yhf.js";function Gs(t,e){return e}function Zr(t,e,s,a){for(var r=[],n=e.length,i=0;i<n;i++)Tr(e[i].e,r,!0);var l=n>0&&r.length===0&&s!==null;if(l){var p=s.parentNode;Rr(p),p.append(s),a.clear(),ve(t,e[0].prev,e[n-1].next)}Pr(r,()=>{for(var u=0;u<n;u++){var d=e[u];l||(a.delete(d.k),ve(t,d.prev,d.next)),Lr(d.e,!l)}})}function Vs(t,e,s,a,r,n=null){var i=t,l={flags:e,items:new Map,first:null};ce&&mr();var p=null,u=!1,d=yr(()=>{var h=s();return Ar(h)?h:h==null?[]:ra(h)});br(()=>{var h=o(d),g=h.length;if(u&&g===0)return;u=g===0;let E=!1;if(ce){var S=i.data===xr;S!==(g===0)&&(i=Ws(),js(i),Ht(!1),E=!0)}if(ce){for(var H=null,j,T=0;T<g;T++){if(Ze.nodeType===8&&Ze.data===_r){i=Ze,E=!0,Ht(!1);break}var $=h[T],K=a($,T);j=fa(Ze,l,H,null,$,K,T,r,e,s),l.items.set(K,j),H=j}g>0&&js(Ws())}ce||en(h,l,i,r,e,a,s),n!==null&&(g===0?p?sa(p):p=aa(()=>n(i)):p!==null&&wr(p,()=>{p=null})),E&&Ht(!0),o(d)}),ce&&(i=Ze)}function en(t,e,s,a,r,n,i){var l=t.length,p=e.items,u=e.first,d=u,h,g=null,E=[],S=[],H,j,T,$;for($=0;$<l;$+=1){if(H=t[$],j=n(H,$),T=p.get(j),T===void 0){var K=d?d.e.nodes_start:s;g=fa(K,e,g,g===null?e.first:g.next,H,j,$,a,r,i),p.set(j,g),E=[],S=[],d=g.next;continue}if(tn(T,H,$),(T.e.f&Yt)!==0&&sa(T.e),T!==d){if(h!==void 0&&h.has(T)){if(E.length<S.length){var Q=S[0],oe;g=Q.prev;var at=E[0],xe=E[E.length-1];for(oe=0;oe<E.length;oe+=1)Hs(E[oe],Q,s);for(oe=0;oe<S.length;oe+=1)h.delete(S[oe]);ve(e,at.prev,xe.next),ve(e,g,at),ve(e,xe,Q),d=Q,g=xe,$-=1,E=[],S=[]}else h.delete(T),Hs(T,d,s),ve(e,T.prev,T.next),ve(e,T,g===null?e.first:g.next),ve(e,g,T),g=T;continue}for(E=[],S=[];d!==null&&d.k!==j;)(d.e.f&Yt)===0&&(h??(h=new Set)).add(d),S.push(d),d=d.next;if(d===null)continue;T=d}E.push(T),g=T,d=T.next}if(d!==null||h!==void 0){for(var rt=h===void 0?[]:ra(h);d!==null;)(d.e.f&Yt)===0&&rt.push(d),d=d.next;var z=rt.length;if(z>0){var ze=null;Zr(e,rt,ze,p)}}zs.first=e.first&&e.first.e,zs.last=g&&g.e}function tn(t,e,s,a){Sr(t.v,e),t.i=s}function fa(t,e,s,a,r,n,i,l,p,u){var d=(p&Ir)!==0,h=(p&Or)===0,g=d?h?kr(r):Ns(r):r,E=(p&Er)===0?i:Ns(i),S={i:E,v:g,k:n,a:null,e:null,prev:s,next:a};try{return S.e=aa(()=>l(t,g,E,u),ce),S.e.prev=s&&s.e,S.e.next=a&&a.e,s===null?e.first=S:(s.next=S,s.e.next=S.e),a!==null&&(a.prev=S,a.e.prev=S.e),S}finally{}}function Hs(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,r=e?e.e.nodes_start:s,n=t.e.nodes_start;n!==a;){var i=Br(n);r.before(n),n=i}}function ve(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function sn(t){if(ce){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;me(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var r=t.checked;me(t,"checked",null),t.checked=r}}};t.__on_r=s,Cr(s),ur()}}function me(t,e,s,a){var r=t.__attributes??(t.__attributes={});ce&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Fr]=s),s==null?t.removeAttribute(e):typeof s!="string"&&an(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var Ys=new Map;function an(t){var e=Ys.get(t.nodeName);if(e)return e;Ys.set(t.nodeName,e=[]);for(var s,a=t,r=Element.prototype;r!==a;){s=Mr(a);for(var n in s)s[n].set&&e.push(n);a=qr(a)}return e}function rn(t,e,s=e){var a=$r();hr(t,"input",r=>{var n=r?t.defaultValue:t.value;if(n=Zt(t)?es(n):n,s(n),a&&n!==(n=e())){var i=t.selectionStart,l=t.selectionEnd;t.value=n??"",l!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(l,t.value.length))}}),(ce&&t.defaultValue!==t.value||Wr(e)==null&&t.value)&&s(Zt(t)?es(t.value):t.value),jr(()=>{var r=e();Zt(t)&&r===es(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function Zt(t){var e=t.type;return e==="number"||e==="range"}function es(t){return t===""?null:+t}function nn(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const rs=[];ye.handleByNamedList(O.Environment,rs);async function on(t){if(!t)for(let e=0;e<rs.length;e++){const s=rs[e];if(s.value.test()){await s.value.load();return}}}let tt;function ln(){if(typeof tt=="boolean")return tt;try{tt=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{tt=!1}return tt}var pa=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(pa||{});class cn{constructor(e){this.items=[],this._name=e}emit(e,s,a,r,n,i,l,p){const{name:u,items:d}=this;for(let h=0,g=d.length;h<g;h++)d[h][u](e,s,a,r,n,i,l,p);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const dn=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],ua=class ha extends Dr{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...dn,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await on(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...ha.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof os&&(a={container:a},s&&(ht(gt,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const r=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=r?a.clearColor:Kt.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const r=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==r&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=pa.ALL);const{clear:a,clearColor:r,target:n}=e;Kt.shared.setValue(r??this.background.colorRgba),s.renderTarget.clear(n,a,Kt.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new cn(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const r in this.runners)this.runners[r].add(a);return this}_addPipes(e,s){const a=s.reduce((r,n)=>(r[n.name]=n.value,r),{});e.forEach(r=>{const n=r.value,i=r.name,l=a[i];this.renderPipes[i]=new n(this,l?new l:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!ln())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};ua.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let ga=ua,pt;function fn(t){return pt!==void 0||(pt=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??ga.defaultOptions.failIfMajorPerformanceCaveat};try{if(!Z.get().getWebGLRenderingContext())return!1;let r=Z.get().createCanvas().getContext("webgl",e);const n=!!((s=r==null?void 0:r.getContextAttributes())!=null&&s.stencil);if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,n}catch{return!1}})()),pt}let ut;async function pn(t={}){return ut!==void 0||(ut=await(async()=>{const e=Z.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),ut}const Xs=["webgl","webgpu","canvas"];async function un(t){let e=[];t.preference?(e.push(t.preference),Xs.forEach(n=>{n!==t.preference&&e.push(n)})):e=Xs.slice();let s,a={};for(let n=0;n<e.length;n++){const i=e[n];if(i==="webgpu"&&await pn()){const{WebGPURenderer:l}=await Us(async()=>{const{WebGPURenderer:p}=await import("./2U8aNjeF.js");return{WebGPURenderer:p}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=l,a={...t,...t.webgpu};break}else if(i==="webgl"&&fn(t.failIfMajorPerformanceCaveat??ga.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:l}=await Us(async()=>{const{WebGLRenderer:p}=await import("./NtGDxkgw.js");return{WebGLRenderer:p}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=l,a={...t,...t.webgl};break}else if(i==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const r=new s;return await r.init(a),r}const va="8.8.1";class ma{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,va)}static destroy(){}}ma.extension=O.Application;class hn{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,va)}destroy(){this._renderer=null}}hn.extension={type:[O.WebGLSystem,O.WebGPUSystem],name:"initHook",priority:-10};const ba=class ns{constructor(...e){this.stage=new os,e[0]!==void 0&&ht(gt,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await un(e),ns._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return ht(gt,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=ns._plugins.slice(0);a.reverse(),a.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};ba._plugins=[];let ya=ba;ye.handleByList(O.Application,ya._plugins);ye.add(ma);class xa extends Kr{constructor(e,s){super();const{textures:a,data:r}=e;Object.keys(r.pages).forEach(n=>{const i=r.pages[parseInt(n,10)],l=a[i.id];this.pages.push({texture:l})}),Object.keys(r.chars).forEach(n=>{const i=r.chars[n],{frame:l,source:p}=a[i.page],u=new Gr(i.x+l.x,i.y+l.y,i.width,i.height),d=new Se({source:p,frame:u});this.chars[n]={id:n.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:d}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){Ds.install(e)}static uninstall(e){Ds.uninstall(e)}}const ts={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const h in e){const g=e[h].match(/^[a-z]+/gm)[0],E=e[h].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),S={};for(const H in E){const j=E[H].split("="),T=j[0],$=j[1].replace(/"/gm,""),K=parseFloat($),Q=isNaN(K)?$:K;S[T]=Q}s[g].push(S)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=s.info,[n]=s.common,[i]=s.distanceField??[];i&&(a.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),a.fontSize=parseInt(r.size,10),a.fontFamily=r.face,a.lineHeight=parseInt(n.lineHeight,10);const l=s.page;for(let h=0;h<l.length;h++)a.pages.push({id:parseInt(l[h].id,10)||0,file:l[h].file});const p={};a.baseLineOffset=a.lineHeight-parseInt(n.base,10);const u=s.char;for(let h=0;h<u.length;h++){const g=u[h],E=parseInt(g.id,10);let S=g.letter??g.char??String.fromCharCode(E);S==="space"&&(S=" "),p[E]=S,a.chars[S]={id:E,page:parseInt(g.page,10)||0,x:parseInt(g.x,10),y:parseInt(g.y,10),width:parseInt(g.width,10),height:parseInt(g.height,10),xOffset:parseInt(g.xoffset,10),yOffset:parseInt(g.yoffset,10),xAdvance:parseInt(g.xadvance,10),kerning:{}}}const d=s.kerning||[];for(let h=0;h<d.length;h++){const g=parseInt(d[h].first,10),E=parseInt(d[h].second,10),S=parseInt(d[h].amount,10);a.chars[p[E]].kerning[p[g]]=S}return a}},Ks={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const n=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),l=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let u=0;u<n.length;u++)e.pages.push({id:parseInt(n[u].getAttribute("id"),10)||0,file:n[u].getAttribute("file")});const p={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let u=0;u<i.length;u++){const d=i[u],h=parseInt(d.getAttribute("id"),10);let g=d.getAttribute("letter")??d.getAttribute("char")??String.fromCharCode(h);g==="space"&&(g=" "),p[h]=g,e.chars[g]={id:h,page:parseInt(d.getAttribute("page"),10)||0,x:parseInt(d.getAttribute("x"),10),y:parseInt(d.getAttribute("y"),10),width:parseInt(d.getAttribute("width"),10),height:parseInt(d.getAttribute("height"),10),xOffset:parseInt(d.getAttribute("xoffset"),10),yOffset:parseInt(d.getAttribute("yoffset"),10),xAdvance:parseInt(d.getAttribute("xadvance"),10),kerning:{}}}for(let u=0;u<l.length;u++){const d=parseInt(l[u].getAttribute("first"),10),h=parseInt(l[u].getAttribute("second"),10),g=parseInt(l[u].getAttribute("amount"),10);e.chars[p[h]].kerning[p[d]]=g}return e}},Qs={test(t){return typeof t=="string"&&t.includes("<font>")?Ks.test(Z.get().parseXML(t)):!1},parse(t){return Ks.parse(Z.get().parseXML(t))}},gn=[".xml",".fnt"],vn={extension:{type:O.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof xa,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},mn={extension:{type:O.LoadParser,priority:We.Normal},name:"loadBitmapFont",test(t){return gn.includes(Te.extname(t).toLowerCase())},async testParse(t){return ts.test(t)||Qs.test(t)},async parse(t,e,s){const a=ts.test(t)?ts.parse(t):Qs.parse(t),{src:r}=e,{pages:n}=a,i=[],l=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let h=0;h<n.length;++h){const g=n[h].file;let E=Te.join(Te.dirname(r),g);E=Vr(E,r),i.push({src:E,data:l})}const p=await s.load(i),u=i.map(h=>p[h.src]);return new xa({data:a,textures:u},r)},async load(t,e){return await(await Z.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class bn{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const yn={extension:{type:O.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Se),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((r,n)=>{s[a+(n===0?"":n+1)]=r})}),s}};async function _a(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const xn={extension:{type:O.DetectionParser,priority:1},test:async()=>_a("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},Js=["png","jpg","jpeg"],_n={extension:{type:O.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...Js],remove:async t=>t.filter(e=>!Js.includes(e))},wn="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function ls(t){return wn?!1:document.createElement("video").canPlayType(t)!==""}const An={extension:{type:O.DetectionParser,priority:0},test:async()=>ls("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},kn={extension:{type:O.DetectionParser,priority:0},test:async()=>ls("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},En={extension:{type:O.DetectionParser,priority:0},test:async()=>ls("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},Sn={extension:{type:O.DetectionParser,priority:0},test:async()=>_a("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class Tn{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var i,l;let r=null,n=null;if(s.loadParser&&(n=this._parserHash[s.loadParser],n||be(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!n){for(let p=0;p<this.parsers.length;p++){const u=this.parsers[p];if(u.load&&((i=u.test)!=null&&i.call(u,e,s,this))){n=u;break}}if(!n)return be(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await n.load(e,s,this),a.parser=n;for(let p=0;p<this.parsers.length;p++){const u=this.parsers[p];u.parse&&u.parse&&await((l=u.testParse)==null?void 0:l.call(u,r,s,this))&&(r=await u.parse(r,s,this)||r,a.parser=u)}return r})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const r={},n=la(e),i=st(e,u=>({alias:[u],src:u,data:{}})),l=i.length,p=i.map(async u=>{const d=Te.toAbsolute(u.src);if(!r[u.src])try{this.promiseCache[d]||(this.promiseCache[d]=this._getLoadPromiseAndParser(d,u)),r[u.src]=await this.promiseCache[d].promise,s&&s(++a/l)}catch(h){throw delete this.promiseCache[d],delete r[u.src],new Error(`[Loader.load] Failed to load ${d}.
${h}`)}});return await Promise.all(p),n?r[i[0].src]:r}async unload(e){const a=st(e,r=>({alias:[r],src:r})).map(async r=>{var l,p;const n=Te.toAbsolute(r.src),i=this.promiseCache[n];if(i){const u=await i.promise;delete this.promiseCache[n],await((p=(l=i.parser)==null?void 0:l.unload)==null?void 0:p.call(l,u,r,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&be(`[Assets] loadParser name conflict "${s.name}"`):be("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function Ne(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const Rn=".json",Pn="application/json",Ln={extension:{type:O.LoadParser,priority:We.Low},name:"loadJson",test(t){return Ne(t,Pn)||je(t,Rn)},async load(t){return await(await Z.get().fetch(t)).json()}},In=".txt",On="text/plain",Bn={name:"loadTxt",extension:{type:O.LoadParser,priority:We.Low,name:"loadTxt"},test(t){return Ne(t,On)||je(t,In)},async load(t){return await(await Z.get().fetch(t)).text()}},Cn=["normal","bold","100","200","300","400","500","600","700","800","900"],Fn=[".ttf",".otf",".woff",".woff2"],qn=["font/ttf","font/otf","font/woff","font/woff2"],Mn=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function $n(t){const e=Te.extname(t),r=Te.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(l=>l.charAt(0).toUpperCase()+l.slice(1));let n=r.length>0;for(const l of r)if(!l.match(Mn)){n=!1;break}let i=r.join(" ");return n||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const Wn=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function jn(t){return Wn.test(t)?t:encodeURI(t)}const Nn={extension:{type:O.LoadParser,priority:We.Low},name:"loadWebFont",test(t){return Ne(t,qn)||je(t,Fn)},async load(t,e){var a,r,n;const s=Z.get().getFontFaceSet();if(s){const i=[],l=((a=e.data)==null?void 0:a.family)??$n(t),p=((n=(r=e.data)==null?void 0:r.weights)==null?void 0:n.filter(d=>Cn.includes(d)))??["normal"],u=e.data??{};for(let d=0;d<p.length;d++){const h=p[d],g=new FontFace(l,`url(${jn(t)})`,{...u,weight:h});await g.load(),s.add(g),i.push(g)}return de.set(`${l}-and-url`,{url:t,fontFaces:i}),i.length===1?i[0]:i}return be("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{de.remove(`${e.family}-and-url`),Z.get().getFontFaceSet().delete(e)})}};function cs(t,e=1){var a;const s=(a=vt.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function ds(t,e,s){t.label=s,t._sourceOrigin=s;const a=new Se({source:t,label:s}),r=()=>{delete e.promiseCache[s],de.has(s)&&de.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(be("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),a.once("destroy",()=>{t.destroyed||(be("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),a}const zn=".svg",Un="image/svg+xml",Dn={extension:{type:O.LoadParser,priority:We.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return Ne(t,Un)||je(t,zn)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?Vn(t):Gn(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function Gn(t,e,s,a){var j,T,$;const n=await(await Z.get().fetch(t)).blob(),i=URL.createObjectURL(n),l=new Image;l.src=i,l.crossOrigin=a,await l.decode(),URL.revokeObjectURL(i);const p=document.createElement("canvas"),u=p.getContext("2d"),d=((j=e.data)==null?void 0:j.resolution)||cs(t),h=((T=e.data)==null?void 0:T.width)??l.width,g=(($=e.data)==null?void 0:$.height)??l.height;p.width=h*d,p.height=g*d,u.drawImage(l,0,0,h*d,g*d);const{parseAsGraphicsContext:E,...S}=e.data??{},H=new ca({resource:p,alphaMode:"premultiply-alpha-on-upload",resolution:d,...S});return ds(H,s,t)}async function Vn(t){const s=await(await Z.get().fetch(t)).text(),a=new Qr;return a.svg(s),a}const Hn=`(function () {
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
`;let Me=null,is=class{constructor(){Me||(Me=URL.createObjectURL(new Blob([Hn],{type:"application/javascript"}))),this.worker=new Worker(Me)}};is.revokeObjectURL=function(){Me&&(URL.revokeObjectURL(Me),Me=null)};const Yn=`(function () {
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
`;let $e=null;class wa{constructor(){$e||($e=URL.createObjectURL(new Blob([Yn],{type:"application/javascript"}))),this.worker=new Worker($e)}}wa.revokeObjectURL=function(){$e&&(URL.revokeObjectURL($e),$e=null)};let Zs=0,ss;class Xn{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new is;s.addEventListener("message",a=>{s.terminate(),is.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){ss===void 0&&(ss=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<ss&&(this._createdWorkers++,e=new wa().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((r,n)=>{this._queue.push({id:e,arguments:s,resolve:r,reject:n})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[Zs]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:Zs++,id:a})}}const ea=new Xn,Kn=[".jpeg",".jpg",".png",".webp",".avif"],Qn=["image/jpeg","image/png","image/webp","image/avif"];async function Jn(t,e){var r;const s=await Z.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const Aa={name:"loadTextures",extension:{type:O.LoadParser,priority:We.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return Ne(t,Qn)||je(t,Kn)},async load(t,e,s){var n;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await ea.isImageBitmapSupported()?a=await ea.loadImageBitmap(t,e):a=await Jn(t,e):a=await new Promise((i,l)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?i(a):(a.onload=()=>{i(a)},a.onerror=l)});const r=new ca({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((n=e.data)==null?void 0:n.resolution)||cs(t),...e.data});return ds(r,s,t)},unload(t){t.destroy(!0)}},ka=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Zn=ka.map(t=>`video/${t.substring(1)}`);function ei(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=si(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function ti(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",r),t.load();function a(){n(),e()}function r(i){n(),s(i)}function n(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",r)}})}function si(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const ai={name:"loadVideo",extension:{type:O.LoadParser,name:"loadVideo"},test(t){const e=Ne(t,Zn),s=je(t,ka);return e||s},async load(t,e,s){var p,u;const a={...Qt.defaultOptions,resolution:((p=e.data)==null?void 0:p.resolution)||cs(t),alphaMode:((u=e.data)==null?void 0:u.alphaMode)||await Hr(),...e.data},r=document.createElement("video"),n={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(n).forEach(d=>{const h=n[d];h!==void 0&&r.setAttribute(d,h)}),a.muted===!0&&(r.muted=!0),ei(r,t,a.crossorigin);const i=document.createElement("source");let l;if(t.startsWith("data:"))l=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const d=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();l=Qt.MIME_TYPES[d]||`video/${d}`}return i.src=t,l&&(i.type=l),new Promise(d=>{const h=async()=>{const g=new Qt({...a,resource:r});r.removeEventListener("canplay",h),e.data.preload&&await ti(r),d(ds(g,s,t))};r.addEventListener("canplay",h),r.appendChild(i)})},unload(t){t.destroy(!0)}},Ea={extension:{type:O.ResolveParser,name:"resolveTexture"},test:Aa.test,parse:t=>{var e;return{resolution:parseFloat(((e=vt.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},ri={extension:{type:O.ResolveParser,priority:-2,name:"resolveJson"},test:t=>vt.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:Ea.parse};class ni{constructor(){this._detections=[],this._initialized=!1,this.resolver=new vt,this.loader=new Tn,this.cache=de,this._backgroundLoader=new bn(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var n,i;if(this._initialized){be("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let l=e.manifest;typeof l=="string"&&(l=await this.load(l)),this.resolver.addManifest(l)}const s=((n=e.texturePreference)==null?void 0:n.resolution)??1,a=typeof s=="number"?[s]:s,r=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=la(e),r=st(e).map(l=>{if(typeof l!="string"){const p=this.resolver.getAlias(l);return p.some(u=>!this.resolver.hasKey(u))&&this.add(l),Array.isArray(p)?p[0]:p}return this.resolver.hasKey(l)||this.add({alias:l,src:l}),l}),n=this.resolver.resolve(r),i=await this._mapLoadToResolve(n,s);return a?i[r[0]]:i}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const r=this.resolver.resolveBundle(e),n={},i=Object.keys(r);let l=0,p=0;const u=()=>{s==null||s(++l/p)},d=i.map(h=>{const g=r[h];return p+=Object.keys(g).length,this._mapLoadToResolve(g,u).then(E=>{n[h]=E})});return await Promise.all(d),a?n[e[0]]:n}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return de.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=de.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(a,s);this._backgroundLoader.active=!0;const n={};return a.forEach(i=>{const l=r[i.src],p=[i.src];i.alias&&p.push(...i.alias),p.forEach(u=>{n[u]=l}),de.set(p,l)}),n}async unload(e){this._initialized||await this.init();const s=st(e).map(r=>typeof r!="string"?r.src:r),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=st(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(r=>this._unloadFromResolved(s[r]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{de.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,r)=>s.indexOf(a)===r),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const Fe=new ni;ye.handleByList(O.LoadParser,Fe.loader.parsers).handleByList(O.ResolveParser,Fe.resolver.parsers).handleByList(O.CacheParser,Fe.cache.parsers).handleByList(O.DetectionParser,Fe.detections);ye.add(yn,_n,xn,Sn,An,kn,En,Ln,Bn,Nn,Dn,Aa,ai,mn,vn,Ea,ri);const ta={loader:O.LoadParser,resolver:O.ResolveParser,cache:O.CacheParser,detection:O.DetectionParser};ye.handle(O.Asset,t=>{const e=t.ref;Object.entries(ta).filter(([s])=>!!e[s]).forEach(([s,a])=>ye.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(ta).filter(s=>!!e[s]).forEach(s=>ye.remove(e[s]))});class ii extends Yr{constructor(e,s){const{text:a,resolution:r,style:n,anchor:i,width:l,height:p,roundPixels:u,...d}=e;super({...d}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=n,this.resolution=r??null,this.allowChildren=!1,this._anchor=new Xr({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=u??!1,l!==void 0&&(this.width=l),p!==void 0&&(this.height=p)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,r=-s*this.anchor.x;let n=0;return e.x>=r&&e.x<=r+s&&(n=-a*this.anchor.y,e.y>=n&&e.y<=n+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function oi(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(ht(gt,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class li extends ii{constructor(...e){const s=oi(e,"Text");super(s,da),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=Jr.measureText(this._text,this._style),{width:r,height:n}=a;e.minX=-s._x*r,e.maxX=e.minX+r,e.minY=-s._y*n,e.maxY=e.minY+n}}var ci=V('<p style="color: red;" class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Error:</strong> </p>'),di=V('<div class="svelte-1t2q5b9"> </div>'),fi=V('<details class="svelte-1t2q5b9"><summary class="svelte-1t2q5b9"> </summary> <!></details>'),pi=V(`<div style="
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
  " class="svelte-1t2q5b9"><h3 class="svelte-1t2q5b9">🎰 Oma-peli Debug</h3> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Status:</strong> </p> <!> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Base:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">BG URL:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Sample:</strong> </p> <!></div>`),ui=V('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-1t2q5b9"> </div>'),hi=V('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-1t2q5b9"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-1t2q5b9"> </span></div>'),gi=V(`<div style="
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
      " class="svelte-1t2q5b9">Jatka pelaamista</button></div>`),vi=V(`<div style="
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
      " class="svelte-1t2q5b9">Sulje</button></div>`),mi=V('<div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #ff00ff; font-size: 16px; animation: pulse 1s infinite;" class="svelte-1t2q5b9"><span class="svelte-1t2q5b9">🎰 FREE SPINS:</span> <span class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-top: 1px solid #555; padding-top: 8px;" class="svelte-1t2q5b9"><span style="color: #fff; font-size: 14px;" class="svelte-1t2q5b9">Total Won:</span> <span style="color: #00ff00; font-size: 14px;" class="svelte-1t2q5b9"> </span></div>',1),bi=V(`<div style="
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
        " class="svelte-1t2q5b9">⏹ STOP</button></div>`),yi=V(`<div style="
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
          " class="svelte-1t2q5b9">Cancel</button></div>`),xi=V(`<button style="
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
      " class="svelte-1t2q5b9">🔄 AUTOPLAY</button> <!>`,1),_i=V(`<!> <!> <!> <div style="
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
" class="svelte-1t2q5b9"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-1t2q5b9">📊 RTP MONITOR</div> <div style="font-size: 11px; margin-bottom: 10px; color: #888; text-align: center;" class="svelte-1t2q5b9"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Rounds:</span> <span style="color: #fff;" class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Wagered:</span> <span style="color: #ff6666;" class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Won:</span> <span style="color: #66ff66;" class="svelte-1t2q5b9"> </span></div> <div style="
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
    " class="svelte-1t2q5b9">Reset Stats</button></div> <div style="
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1500;
" class="svelte-1t2q5b9"><!></div> <button class="svelte-1t2q5b9"> </button> <button title="SPIN" class="svelte-1t2q5b9"></button>`,1);function wi(t,e){na(e,!0);const s=13,a=1445,r=1e3,n=1.75,i=-30,l=-10,p=160,u=0,d=720,h=750,g=.8,E=50,S=30,H=-40,j=1,T="height",K=Math.round(100*n),Q=Math.round(K*(700/760)),at=Q+10,xe=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],z=typeof window<"u"&&window.location.hostname.includes("github.io")?"/web-sdk/oma-peli/symbols":`${et}/symbols`,ze={a:`${z}/Blue_hotrod.jpg`,b:`${z}/Blue_jacket.jpg`,c:`${z}/Blue_rollers.jpg`,d:`${z}/Blue_speakers.jpg`,e:`${z}/Premium_blonde.jpg`,f:`${z}/Premium_brunette.jpg`,g:`${z}/Premium_rocker.jpg`,h:`${z}/New_Wild.jpg`,i:`${z}/Red_burger.jpg`,j:`${z}/Red_fries.jpg`,k:`${z}/Red_milkshake.jpg`,l:`${z}/Scatter.jpg`,emptyslot:`${z}/Emptyslot.jpg`},mt=`${z}/bg_base.jpg`,fs=`${z}/ReelFrames.png`,ps=`${z}/RockABillyReels_logo.png`,Sa={spin:`${et}/sounds/spin.mp3`,stop:`${et}/sounds/stop.mp3`,win:`${et}/sounds/win.mp3`},Ta="1.0.4";let _e=F(!0),bt={},nt=null,Re=null,Ue=null,De=null,Ge=F("Initializing..."),Pe=F(""),se=[],fe=F(1e3),Y=F(10);const us=1,yt=100;let we=F(!1),Le=F(0),Ve=F(!1),Ra=F(0),Ae=!1,le=null,xt=!1,He=F(0),Ie=F(0),Ye=F(0),_t=F(0),wt=Xt(()=>o(Ie)>0?(o(Ye)/o(Ie)*100).toFixed(2):"0.00"),At=Xt(()=>o(He)>0?(o(_t)/o(He)*100).toFixed(2):"0.00"),ae=F(!1),pe=F(0),ke=F(0),kt=F(0),Et=F(0),it=F(0),St=F(0),Pa=Xt(()=>o(it)>0?(o(St)/o(it)*100).toFixed(2):"0.00");const hs={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25};function gs(f){if(f===6)return Math.random()<.55?"h":"emptyslot";const m=Math.random();let c=0;const _=xe.filter(w=>w!=="h"),A=_.reduce((w,C)=>w+hs[C],0);for(const w of _)if(c+=hs[w]/A,m<c)return w;return"k"}function vs(){const f=[];for(let m=0;m<s;m++){let c=gs(m);o(ae)&&(c==="k"?c="f":c==="j"?c="e":c==="i"&&(c="g")),f.push(c),he(it),c==="emptyslot"&&he(St)}return f}function La(f){return f<3?{col:0,row:f}:f<6?{col:1,row:f-3}:f===6?{col:2,row:0}:f<10?{col:3,row:f-7}:{col:4,row:f-10}}function Xe(f,m){return f===0?m:f===1?3+m:f===2?6:f===3?7+m:f===4?10+m:-1}function Ia(){if(o(ae)){const f=Math.random();return f<.7?3:f<.92?5:10}else{const f=Math.random();return f<.7?1:f<.92?2:3}}const Oa={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function Ba(){var J;const f=[],m=[];for(let k=0;k<s;k++)Ke[k]==="l"&&m.push(k);if(m.length>=5){const k=m.length;x(pe,o(pe)+k),o(ae)?console.log(`🎰 FREE SPINS RETRIGGERED! +${k} FREE SPINS! Total: ${o(pe)}`):(x(ae,!0),x(ke,0),he(kt),console.log(`🎰 FREE SPINS TRIGGERED! ${m.length} scatters = ${k} FREE SPINS!`)),f.push({symbol:"l",count:m.length,payout:0,positions:m,multiplier:1})}const c=[];for(let k=0;k<3;k++)for(let P=0;P<3;P++)for(let L=0;L<1;L++)for(let I=0;I<3;I++)for(let R=0;R<3;R++){const ee=[Xe(0,k),Xe(1,P),Xe(2,L),Xe(3,I),Xe(4,R)];c.push(ee)}console.log(`Generated ${c.length} possible paths (should be 81)`);const _=[];for(const k of c){const P=k.map(R=>Ke[R]);if(P[0]==="emptyslot"||P[0]==="l")continue;let L=null;for(let R=0;R<P.length;R++)if(P[R]!=="h"&&P[R]!=="emptyslot"&&P[R]!=="l"){L=P[R];break}if(!L)continue;let I=0;for(let R=0;R<P.length;R++){const ee=P[R];if(ee===L||ee==="h")I++;else break}if(I>=3){const ee=k[0]%3;_.push({symbol:L,length:I,path:k.slice(0,I),startRow:ee})}}const A=[],w=new Map;for(const k of _){const P=`${k.symbol}-${k.path.join(",")}`;w.has(P)||w.set(P,[]),w.get(P).push(k)}for(const[k,P]of w.entries()){const L=Math.max(...P.map(R=>R.length)),I=P.find(R=>R.length===L);I&&A.push(I)}const C=[],U=new Map;for(const k of A)U.has(k.symbol)||U.set(k.symbol,[]),U.get(k.symbol).push(k);const W=[];for(const[k,P]of U.entries()){const L=Math.max(...P.map(R=>R.length)),I=P.filter(R=>R.length===L);W.push(...I)}const N=new Map;for(const k of W){const P=`${k.symbol}-${k.length}`;N.has(P)||N.set(P,[]),N.get(P).push(k)}const B=W.length>0?Ia():1;for(const[k,P]of N.entries()){const L=P[0],I=(J=Oa[L.symbol])==null?void 0:J[L.length];if(I!==void 0&&I>0){const R=new Map;for(const ne of P)for(let X=0;X<ne.length;X++)R.has(X)||R.set(X,new Set),R.get(X).add(ne.path[X]);let ee=1;for(let ne=0;ne<L.length;ne++){const X=R.get(ne);ee*=X?X.size:1}const ct=I*o(Y)*ee*B;console.log(`  ${L.length}x${L.symbol}: ${ee} ways × ${I}x × ${o(Y)} bet × ${B} mult = ${ct}`);const dt=new Set;for(const ne of P)ne.path.forEach(X=>dt.add(X));C.push({symbol:L.symbol,count:L.length,payout:ct,positions:Array.from(dt),multiplier:B})}}return f.push(...C),f}let Ee=F(0),Oe=F(ge([])),ue=F(!1),ot=F(!1);const Ca={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function Tt(f){if(!o(_e)||!bt[f])return;const m=bt[f];m.currentTime=0,m.play().catch(c=>{console.warn("Äänen toisto epäonnistui:",f,c)})}function Fa(f){Qe.forEach(m=>M.stage.removeChild(m)),Qe=[],f.forEach(m=>{m.positions.forEach(c=>{const _=Be[c],A=new Jt().rect(0,0,K,Q).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});A.x=_.container.x,A.y=_.container.y,M.stage.addChild(A),Qe.push(A);let w=0,C=1;const U=.05;M.ticker.add(()=>{w+=C*U,w>=.4&&(C=-1),w<=0&&(C=1),A.alpha=.5+w})})})}function Rt(){Qe.forEach(f=>M.stage.removeChild(f)),Qe=[]}let Ke=vs(),Pt,M,Be=[],Qe=[];class qa{constructor(m,c){re(this,"index");re(this,"container");re(this,"offset",0);re(this,"speed",0);re(this,"targetSpeed",30);re(this,"state","idle");re(this,"stopDelay",0);re(this,"bounceOffset",0);re(this,"bounceSpeed",0);re(this,"bounceFrames",0);this.index=m,this.container=c}start(m){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=m}update(){this.state!=="idle"&&(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"&&(this.speed*=.92,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,Tt("stop"))),this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=at&&(this.offset=0,Ke[this.index]=gs(this.index))))}draw(){const m=this.container;m.removeChildren();const c=Ke[this.index];if(!c||!nt||!nt[c])return;const _=nt[c];if(!_)return;const A=this.offset+this.bounceOffset,w=new ft(_);w.width=K,w.height=Q,w.x=0,w.y=A,m.addChild(w)}}ia(async()=>{M=new ya,await M.init({width:a,height:r,background:"#001a33"}),Pt.appendChild(M.canvas);const f={};try{x(Ge,"Loading background and UI images..."),se.push(`Loading background: ${mt}`),se.push(`Loading reel frames: ${fs}`),se.push(`Loading logo: ${ps}`),await Fe.load([{alias:"background",src:mt},{alias:"reelframes",src:fs},{alias:"logo",src:ps}]),Re=Se.from("background"),Ue=Se.from("reelframes"),De=Se.from("logo"),console.log("✅ Background texture created:",Re.width,"x",Re.height),console.log("✅ Reel frames texture created:",Ue.width,"x",Ue.height),console.log("✅ Logo texture created:",De.width,"x",De.height),se.push("✅ All UI images loaded"),x(Ge,"Loading symbols...");const c=[];for(const _ of xe)c.push({alias:_,src:ze[_]});await Fe.load(c);for(const _ of xe){const A=ze[_];se.push(`Loading symbol ${_}: ${A}`);try{const w=Se.from(_);f[_]=w,console.log(`✅ Symbol ${_} loaded:`,w.width,"x",w.height),se.push(`✅ Symbol ${_} loaded`)}catch(w){const C=`❌ Failed to load symbol ${_} from ${A}: ${w}`;throw se.push(C),console.error(C),new Error(C)}}nt=f,x(Ge,"Assets loaded successfully!")}catch(c){x(Pe,`Asset loading failed: ${c}`),se.push(o(Pe)),console.error(o(Pe));return}console.log("Ladataan ääniefektit...");for(const[c,_]of Object.entries(Sa)){const A=new Audio;A.src=_,A.preload="auto",A.volume=.7,A.load(),A.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${_} (käytetään hiljaista placeholderia)`)}),bt[c]=A}if(console.log("Taustakuva ladattu, tekstuuri:",Re),Re){const c=new ft(Re);M.renderer.width/M.renderer.height;const _=c.texture.width/c.texture.height;let A;A=M.renderer.height/c.texture.height,A*=j,c.scale.set(A),c.x=(M.renderer.width-c.width)/2,c.y=(M.renderer.height-c.height)/2+H,M.stage.addChild(c),console.log("Taustakuva lisätty:",T,"mode, size:",c.width.toFixed(0),"x",c.height.toFixed(0),"image aspect:",_.toFixed(2),"scale:",A.toFixed(2),"pos:",c.x.toFixed(0),c.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(c=>({x:c.x+i,y:c.y+l})),Be=[];for(let c=0;c<s;c++){const _=La(c),A=_.col,w=_.row,C=300+A*(K+20),U=250+w*(Q+15),W=c===6?C+u:C,N=c===6?U+p:U,B=new os;B.x=W+i,B.y=N+l;const J=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],k=new Jt().rect(0,0,K,Q).fill({color:J[c],alpha:.3});k.x=B.x,k.y=B.y,M.stage.addChild(k);const P=new da({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),L=new li({text:c.toString(),style:P});L.x=B.x+5,L.y=B.y+5,M.stage.addChild(L);const I=new Jt().rect(0,0,K,Q).fill(16777215);I.x=B.x,I.y=B.y,B.mask=I,M.stage.addChild(I),M.stage.addChild(B),Be.push(new qa(c,B))}if(Ue){const c=new ft(Ue);c.scale.set(1),c.x=250,c.y=200,M.stage.addChild(c),console.log("Reel frames lisätty:",c.width.toFixed(0),"x",c.height.toFixed(0))}if(De){const c=new ft(De);c.scale.set(g),c.x=(M.renderer.width-c.width)/2+E,c.y=S,M.stage.addChild(c),console.log("Logo lisätty päällimmäiseen layeriin:",c.width.toFixed(0),"x",c.height.toFixed(0))}M.ticker.add(Ma)});function Ma(){for(const f of Be)f.update(),f.draw();if(!o(ue)&&!xt&&Be.every(f=>f.state==="stopped")){xt=!0;const f=Ba();console.log(`Checking wins, found ${f.length} wins`),f.length>0?(x(Oe,ge(f)),x(Ee,ge(f.reduce((m,c)=>m+c.payout,0))),$a(o(Ee)),x(ue,!0),x(Ra,ge(Date.now())),console.log(`🎉 VOITTO! ${o(Ee)} pistettä! Uusi saldo: ${o(fe)}`),console.log(`isShowingWin set to: ${o(ue)}, totalWin: ${o(Ee)}`),f.forEach(m=>{const c=m.multiplier?` (${m.multiplier}x multiplier)`:"";console.log(`${m.count}x ${m.symbol} = ${m.payout} pistettä${c}`)}),Fa(f),Tt("win"),o(we)&&!Ae&&(Ae=!0,le=window.setTimeout(()=>{o(ue)&&o(we)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),x(ue,!1),Rt()),le=window.setTimeout(()=>{Ae=!1,It()},200)},1500))):(console.log("No wins found this spin"),o(we)&&!Ae&&(Ae=!0,le=window.setTimeout(()=>{Ae=!1,It()},1e3))),o(ae)&&o(pe)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${o(ke)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${o(ke).toFixed(2)}`),x(ae,!1),x(ke,0)},2e3))}}function ms(){if(o(ae)&&o(pe)>0)he(pe,-1),he(Et),console.log(`🎰 FREE SPIN! Remaining: ${o(pe)}`);else if(!o(ae)){if(o(fe)<o(Y)){alert(`Not enough credits! Balance: ${o(fe)}, Bet: ${o(Y)}`),Lt();return}x(fe,o(fe)-o(Y)),he(He),x(Ie,o(Ie)+o(Y))}le!==null&&(clearTimeout(le),le=null),x(Oe,ge([])),x(Ee,0),x(ue,!1),xt=!1,Rt(),Ke=vs(),Be.forEach((f,m)=>f.start(60+m*10)),Tt("spin")}function $a(f){x(fe,o(fe)+f),x(Ye,o(Ye)+f),o(ae)&&x(ke,o(ke)+f),f>0&&he(_t)}function Wa(){o(Y)<yt&&x(Y,ge(Math.min(o(Y)+1,yt)))}function ja(){o(Y)>us&&x(Y,ge(Math.max(o(Y)-1,us)))}function Na(){x(Y,yt)}function Je(f){x(we,!0),x(Le,ge(f)),x(Ve,!1),It()}function Lt(){x(we,!1),x(Le,0),Ae=!1,le!==null&&(clearTimeout(le),le=null)}function It(){if(!o(we)||o(Le)<=0){Lt();return}console.log(`Autoplay: Starting spin ${o(Le)} rounds left`),ms(),he(Le,-1)}function za(){confirm("Reset all statistics?")&&(x(He,0),x(Ie,0),x(Ye,0),x(_t,0),x(kt,0),x(Et,0),x(it,0),x(St,0))}var bs=_i(),ys=qe(bs);{var Ua=f=>{var m=pi(),c=v(b(m),2),_=v(b(c));y(c);var A=v(c,2);{var w=L=>{var I=ci(),R=v(b(I));y(I),ie(()=>q(R,` ${o(Pe)??""}`)),G(L,I)};te(A,L=>{o(Pe)&&L(w)})}var C=v(A,2),U=v(b(C));U.nodeValue=` ${et??""}`,y(C);var W=v(C,2),N=v(b(W));N.nodeValue=` ${mt??""}`,y(W);var B=v(W,2),J=v(b(B));y(B);var k=v(B,2);{var P=L=>{var I=fi(),R=b(I),ee=b(R);y(R);var ct=v(R,2);Vs(ct,17,()=>se,Gs,(dt,ne)=>{var X=di(),dr=b(X,!0);y(X),ie(()=>q(dr,o(ne))),G(dt,X)}),y(I),ie(()=>q(ee,`Log (${se.length??""})`)),G(L,I)};te(k,L=>{se.length>0&&L(P)})}y(m),ie(()=>{q(_,` ${o(Ge)??""}`),q(J,` ${ze.a??""}`)}),G(f,m)};te(ys,f=>{(o(Ge)!=="Assets loaded successfully!"||o(Pe))&&f(Ua)})}var xs=v(ys,2);{var Da=f=>{var m=gi(),c=v(b(m),2),_=b(c);y(c);var A=v(c,2);Vs(A,17,()=>o(Oe),Gs,(W,N)=>{var B=ui(),J=b(B);y(B),ie(k=>q(J,`${o(N).count??""} × ${Ca[o(N).symbol]??""} = ${k??""} pistettä`),[()=>o(N).payout.toFixed(2)]),G(W,B)});var w=v(A,2);{var C=W=>{var N=hi(),B=b(N),J=b(B);y(B),y(N),ie(()=>q(J,`✨ ${o(Oe)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),G(W,N)};te(w,W=>{o(Oe).length>0&&o(Oe)[0].multiplier>1&&W(C)})}var U=v(w,2);y(m),ie(()=>q(_,`${o(Ee)??""} pistettä`)),D("click",U,()=>{x(ue,!1),Rt(),console.log("Win popup closed, ready for next spin")}),G(f,m)};te(xs,f=>{o(Ee)>0&&o(ue)&&f(Da)})}var _s=v(xs,2);{var Ga=f=>{var m=vi(),c=v(b(m),8);y(m),D("click",c,()=>{x(ot,!1)}),G(f,m)};te(_s,f=>{o(ot)&&f(Ga)})}var ws=v(_s,2);zr(ws,f=>Pt=f,()=>Pt);var lt=v(ws,2),As=b(lt);{var Va=f=>{var m=mi(),c=qe(m),_=v(b(c),2),A=b(_,!0);y(_),y(c);var w=v(c,2),C=v(b(w),2),U=b(C,!0);y(C),y(w),ie(W=>{q(A,o(pe)),q(U,W)},[()=>o(ke).toFixed(2)]),G(f,m)};te(As,f=>{o(ae)&&f(Va)})}var Ot=v(As,2),ks=v(b(Ot),2),Ha=b(ks,!0);y(ks),y(Ot);var Es=v(Ot,2),Ss=v(b(Es),2),Ya=b(Ss,!0);y(Ss),y(Es),y(lt);var Bt=v(lt,2),Ts=v(b(Bt),2),Rs=b(Ts),Ct=v(Rs,2),Xa=b(Ct,!0);y(Ct);var Ps=v(Ct,2),Ka=v(Ps,2);y(Ts),y(Bt);var Ls=v(Bt,2),Ft=v(Ls,2),Is=v(b(Ft),2);Is.textContent=`v${Ta}`;var qt=v(Is,2),Os=v(b(qt),2),Qa=b(Os,!0);y(Os),y(qt);var Mt=v(qt,2),Bs=v(b(Mt),2),Ja=b(Bs,!0);y(Bs),y(Mt);var $t=v(Mt,2),Cs=v(b($t),2),Za=b(Cs,!0);y(Cs),y($t);var Wt=v($t,2),jt=v(b(Wt),2),er=b(jt);y(jt),y(Wt);var Nt=v(Wt,2),zt=v(b(Nt),2),tr=b(zt);y(zt),y(Nt);var Ut=v(Nt,2),Fs=v(b(Ut),2),sr=b(Fs,!0);y(Fs),y(Ut);var Dt=v(Ut,2),qs=v(b(Dt),2),ar=b(qs,!0);y(qs),y(Dt);var Gt=v(Dt,2),Ms=v(b(Gt),2),rr=b(Ms);y(Ms),y(Gt);var nr=v(Gt,2);y(Ft);var Vt=v(Ft,2),ir=b(Vt);{var or=f=>{var m=bi(),c=v(b(m),2),_=b(c);y(c);var A=v(c,2);y(m),ie(()=>q(_,`${o(Le)??""} left`)),D("click",A,Lt),G(f,m)},lr=f=>{var m=xi(),c=qe(m),_=v(c,2);{var A=w=>{var C=yi(),U=v(b(C),2),W=v(U,2),N=v(W,2),B=v(N,2),J=v(B,2),k=v(J,2);y(C),D("click",U,()=>Je(10)),D("click",W,()=>Je(100)),D("click",N,()=>Je(1e3)),D("click",B,()=>Je(1e4)),D("click",J,()=>Je(1e5)),D("click",k,()=>{x(Ve,!1)}),G(w,C)};te(_,w=>{o(Ve)&&w(A)})}D("click",c,()=>{x(Ve,!o(Ve))}),G(f,m)};te(ir,f=>{o(we)?f(or):f(lr,!1)})}y(Vt);var Ce=v(Vt,2),cr=b(Ce,!0);y(Ce);var $s=v(Ce,2);me($s,"style",`
    position: absolute;
    left: ${d}px;                    /* X-koordinaatti (säädettävissä) */
    top: ${h}px;                     /* Y-koordinaatti (säädettävissä) */
    width: 60px;                           /* Napin leveys */
    height: 60px;                          /* Napin korkeus */
    border-radius: 50%;                    /* Pyöreä muoto */
    background-color: rgba(0,255,0,0.2);   /* Vihreä, läpinäkyvä */
    border: 2px solid rgba(0,255,0,0.5);   /* Vihreä reunus */
    cursor: pointer;                       /* Käsi-kursori hover:ssa */
    z-index: 1000;                         /* Varmista että nappi on päällimmäisenä */
    font-size: 0;                          /* Piilota teksti */
  `),ie((f,m,c,_,A,w)=>{me(lt,"style",`
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
  border: 2px solid ${(o(ae)?"#ff00ff":"#ffd700")??""};
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
  z-index: 1500;
  min-width: 180px;
`),q(Ha,f),q(Ya,o(Y)),q(Xa,o(Y)),q(Qa,m),q(Ja,c),q(Za,_),me(jt,"style",`color: ${A??""};`),q(er,`${o(wt)??""}%`),me(zt,"style",`color: ${w??""};`),q(tr,`${o(At)??""}%`),q(sr,o(kt)),q(ar,o(Et)),q(rr,`${o(Pa)??""}%`),me(Ce,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(o(_e)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(o(_e)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),me(Ce,"title",o(_e)?"Mykistä äänet":"Laita äänet päälle"),q(cr,o(_e)?"🔊":"🔇")},[()=>o(fe).toLocaleString(),()=>o(He).toLocaleString(),()=>o(Ie).toLocaleString(),()=>o(Ye).toLocaleString(),()=>parseFloat(o(wt))>=95?"#00ff00":parseFloat(o(wt))>=85?"#ffff00":"#ff6666",()=>parseFloat(o(At))>=30?"#00ff00":parseFloat(o(At))>=20?"#ffff00":"#ff6666"]),D("click",Rs,ja),D("click",Ps,Wa),D("click",Ka,Na),D("click",Ls,()=>{x(ot,!o(ot))}),D("click",nr,za),D("click",Ce,()=>{x(_e,!o(_e))}),D("click",$s,ms),G(t,bs),oa()}var Ai=V('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),ki=V('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function Ei(t,e){na(e,!1);let s=Ur(e,"isAuthenticated",12,!1),a=as(""),r=as(!1);const n="slot2024";function i(){o(a)===n?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(x(r,!0),x(a,""),setTimeout(()=>x(r,!1),3e3))}ia(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),vr();var l=gr(),p=qe(l);{var u=d=>{var h=ki(),g=b(h),E=v(b(g),4),S=b(E);sn(S),Nr(2),y(E);var H=v(E,2);{var j=T=>{var $=Ai();G(T,$)};te(H,T=>{o(r)&&T(j)})}y(g),y(h),rn(S,()=>o(a),T=>x(a,T)),D("submit",E,nn(i)),G(d,h)};te(p,d=>{s()||d(u)})}G(t,l),oa()}var Si=V('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),Ti=V("<!> <!>",1);function Wi(t){let e=as(!1);var s=Ti(),a=qe(s);Ei(a,{get isAuthenticated(){return o(e)},set isAuthenticated(i){x(e,i)},$$legacy:!0});var r=v(a,2);{var n=i=>{var l=Si(),p=v(qe(l),2);wi(p,{}),G(i,l)};te(r,i=>{o(e)&&i(n)})}G(t,s)}export{ga as A,pa as C,hn as R,cn as S,va as V,Wi as _,ln as u};
