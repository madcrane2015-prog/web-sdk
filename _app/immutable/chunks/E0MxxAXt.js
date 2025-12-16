const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BmtPi5Ld.js","./DNWEu6uq.js","./DEliLNnF.js","./DWgShhht.js","./C04N3yhf.js","./C2GHuDhf.js","./t78U-FH3.js","./BQakGk7D.js"])))=>i.map(i=>d[i]);
var fr=Object.defineProperty;var pr=(t,e,s)=>e in t?fr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var se=(t,e,s)=>pr(t,typeof e!="symbol"?e+"":e,s);import{f as ur,l as hr,t as V,g as U,a as D,d as gr}from"./DRDKHArV.js";import{i as vr}from"./Dw5_DM93.js";import{y as oe,j as mr,a8 as br,F as o,Q as yr,aa as xr,ab as Ms,h as Ws,e as Vt,k as Je,l as _r,ac as ta,w as sa,ad as wr,q as aa,a7 as Ar,U as kr,a2 as js,aq as Ht,z as Ns,ar as Er,as as Sr,at as Tr,o as Rr,au as Pr,av as Lr,aw as Ir,ax as Or,b as Br,ay as Cr,az as Fr,a6 as qr,aA as $r,aB as Mr,D as Wr,L as jr,p as ra,ah as B,ag as na,T as _,aC as ue,f as Fe,s as v,c as y,r as x,t as re,I as Yt,a as ia,aD as Nr,aE as ss}from"./DWgShhht.js";import{_ as zs,p as he,i as Z}from"./DEliLNnF.js";import{s as F}from"./4RjN9yQL.js";import{b as zr,p as Ur}from"./B1_V_3zc.js";import{b as Ze}from"./Bc7qyL8h.js";import{e as be,E as L,a as Dr,C as is,Q as pt,V as ut,N as Xt,D as J,H as Gr,p as Ee,a0 as Me,a1 as Se,a2 as Vr,w as me,a3 as tt,a4 as oa,a5 as We,a6 as le,a7 as ht,a8 as la,a9 as Hr,aa as Kt,ab as Yr,ac as Xr,y as ct}from"./DNWEu6uq.js";import{A as Kr,B as Us,G as Qr,T as ca,a as Jr,b as Qt}from"./C04N3yhf.js";function Ds(t,e){return e}function Zr(t,e,s,a){for(var r=[],n=e.length,i=0;i<n;i++)Tr(e[i].e,r,!0);var l=n>0&&r.length===0&&s!==null;if(l){var p=s.parentNode;Rr(p),p.append(s),a.clear(),ge(t,e[0].prev,e[n-1].next)}Pr(r,()=>{for(var u=0;u<n;u++){var d=e[u];l||(a.delete(d.k),ge(t,d.prev,d.next)),Lr(d.e,!l)}})}function Gs(t,e,s,a,r,n=null){var i=t,l={flags:e,items:new Map,first:null};oe&&mr();var p=null,u=!1,d=yr(()=>{var h=s();return Ar(h)?h:h==null?[]:aa(h)});br(()=>{var h=o(d),g=h.length;if(u&&g===0)return;u=g===0;let E=!1;if(oe){var R=i.data===xr;R!==(g===0)&&(i=Ms(),Ws(i),Vt(!1),E=!0)}if(oe){for(var H=null,j,P=0;P<g;P++){if(Je.nodeType===8&&Je.data===_r){i=Je,E=!0,Vt(!1);break}var $=h[P],X=a($,P);j=da(Je,l,H,null,$,X,P,r,e,s),l.items.set(X,j),H=j}g>0&&Ws(Ms())}oe||en(h,l,i,r,e,a,s),n!==null&&(g===0?p?ta(p):p=sa(()=>n(i)):p!==null&&wr(p,()=>{p=null})),E&&Vt(!0),o(d)}),oe&&(i=Je)}function en(t,e,s,a,r,n,i){var l=t.length,p=e.items,u=e.first,d=u,h,g=null,E=[],R=[],H,j,P,$;for($=0;$<l;$+=1){if(H=t[$],j=n(H,$),P=p.get(j),P===void 0){var X=d?d.e.nodes_start:s;g=da(X,e,g,g===null?e.first:g.next,H,j,$,a,r,i),p.set(j,g),E=[],R=[],d=g.next;continue}if(tn(P,H,$),(P.e.f&Ht)!==0&&ta(P.e),P!==d){if(h!==void 0&&h.has(P)){if(E.length<R.length){var K=R[0],ne;g=K.prev;var st=E[0],ye=E[E.length-1];for(ne=0;ne<E.length;ne+=1)Vs(E[ne],K,s);for(ne=0;ne<R.length;ne+=1)h.delete(R[ne]);ge(e,st.prev,ye.next),ge(e,g,st),ge(e,ye,K),d=K,g=ye,$-=1,E=[],R=[]}else h.delete(P),Vs(P,d,s),ge(e,P.prev,P.next),ge(e,P,g===null?e.first:g.next),ge(e,g,P),g=P;continue}for(E=[],R=[];d!==null&&d.k!==j;)(d.e.f&Ht)===0&&(h??(h=new Set)).add(d),R.push(d),d=d.next;if(d===null)continue;P=d}E.push(P),g=P,d=P.next}if(d!==null||h!==void 0){for(var at=h===void 0?[]:aa(h);d!==null;)(d.e.f&Ht)===0&&at.push(d),d=d.next;var N=at.length;if(N>0){var Ne=null;Zr(e,at,Ne,p)}}Ns.first=e.first&&e.first.e,Ns.last=g&&g.e}function tn(t,e,s,a){Sr(t.v,e),t.i=s}function da(t,e,s,a,r,n,i,l,p,u){var d=(p&Ir)!==0,h=(p&Or)===0,g=d?h?kr(r):js(r):r,E=(p&Er)===0?i:js(i),R={i:E,v:g,k:n,a:null,e:null,prev:s,next:a};try{return R.e=sa(()=>l(t,g,E,u),oe),R.e.prev=s&&s.e,R.e.next=a&&a.e,s===null?e.first=R:(s.next=R,s.e.next=R.e),a!==null&&(a.prev=R,a.e.prev=R.e),R}finally{}}function Vs(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,r=e?e.e.nodes_start:s,n=t.e.nodes_start;n!==a;){var i=Br(n);r.before(n),n=i}}function ge(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function sn(t){if(oe){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;ve(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var r=t.checked;ve(t,"checked",null),t.checked=r}}};t.__on_r=s,Cr(s),ur()}}function ve(t,e,s,a){var r=t.__attributes??(t.__attributes={});oe&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Fr]=s),s==null?t.removeAttribute(e):typeof s!="string"&&an(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var Hs=new Map;function an(t){var e=Hs.get(t.nodeName);if(e)return e;Hs.set(t.nodeName,e=[]);for(var s,a=t,r=Element.prototype;r!==a;){s=$r(a);for(var n in s)s[n].set&&e.push(n);a=qr(a)}return e}function rn(t,e,s=e){var a=Mr();hr(t,"input",r=>{var n=r?t.defaultValue:t.value;if(n=Jt(t)?Zt(n):n,s(n),a&&n!==(n=e())){var i=t.selectionStart,l=t.selectionEnd;t.value=n??"",l!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(l,t.value.length))}}),(oe&&t.defaultValue!==t.value||Wr(e)==null&&t.value)&&s(Jt(t)?Zt(t.value):t.value),jr(()=>{var r=e();Jt(t)&&r===Zt(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function Jt(t){var e=t.type;return e==="number"||e==="range"}function Zt(t){return t===""?null:+t}function nn(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const as=[];be.handleByNamedList(L.Environment,as);async function on(t){if(!t)for(let e=0;e<as.length;e++){const s=as[e];if(s.value.test()){await s.value.load();return}}}let et;function ln(){if(typeof et=="boolean")return et;try{et=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{et=!1}return et}var fa=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(fa||{});class cn{constructor(e){this.items=[],this._name=e}emit(e,s,a,r,n,i,l,p){const{name:u,items:d}=this;for(let h=0,g=d.length;h<g;h++)d[h][u](e,s,a,r,n,i,l,p);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const dn=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],pa=class ua extends Dr{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...dn,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await on(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...ua.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof is&&(a={container:a},s&&(pt(ut,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const r=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=r?a.clearColor:Xt.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const r=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==r&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=fa.ALL);const{clear:a,clearColor:r,target:n}=e;Xt.shared.setValue(r??this.background.colorRgba),s.renderTarget.clear(n,a,Xt.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new cn(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const r in this.runners)this.runners[r].add(a);return this}_addPipes(e,s){const a=s.reduce((r,n)=>(r[n.name]=n.value,r),{});e.forEach(r=>{const n=r.value,i=r.name,l=a[i];this.renderPipes[i]=new n(this,l?new l:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!ln())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};pa.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let ha=pa,dt;function fn(t){return dt!==void 0||(dt=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??ha.defaultOptions.failIfMajorPerformanceCaveat};try{if(!J.get().getWebGLRenderingContext())return!1;let r=J.get().createCanvas().getContext("webgl",e);const n=!!((s=r==null?void 0:r.getContextAttributes())!=null&&s.stencil);if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,n}catch{return!1}})()),dt}let ft;async function pn(t={}){return ft!==void 0||(ft=await(async()=>{const e=J.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),ft}const Ys=["webgl","webgpu","canvas"];async function un(t){let e=[];t.preference?(e.push(t.preference),Ys.forEach(n=>{n!==t.preference&&e.push(n)})):e=Ys.slice();let s,a={};for(let n=0;n<e.length;n++){const i=e[n];if(i==="webgpu"&&await pn()){const{WebGPURenderer:l}=await zs(async()=>{const{WebGPURenderer:p}=await import("./BmtPi5Ld.js");return{WebGPURenderer:p}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=l,a={...t,...t.webgpu};break}else if(i==="webgl"&&fn(t.failIfMajorPerformanceCaveat??ha.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:l}=await zs(async()=>{const{WebGLRenderer:p}=await import("./BQakGk7D.js");return{WebGLRenderer:p}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=l,a={...t,...t.webgl};break}else if(i==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const r=new s;return await r.init(a),r}const ga="8.8.1";class va{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,ga)}static destroy(){}}va.extension=L.Application;class hn{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,ga)}destroy(){this._renderer=null}}hn.extension={type:[L.WebGLSystem,L.WebGPUSystem],name:"initHook",priority:-10};const ma=class rs{constructor(...e){this.stage=new is,e[0]!==void 0&&pt(ut,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await un(e),rs._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return pt(ut,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=rs._plugins.slice(0);a.reverse(),a.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};ma._plugins=[];let ba=ma;be.handleByList(L.Application,ba._plugins);be.add(va);class ya extends Kr{constructor(e,s){super();const{textures:a,data:r}=e;Object.keys(r.pages).forEach(n=>{const i=r.pages[parseInt(n,10)],l=a[i.id];this.pages.push({texture:l})}),Object.keys(r.chars).forEach(n=>{const i=r.chars[n],{frame:l,source:p}=a[i.page],u=new Gr(i.x+l.x,i.y+l.y,i.width,i.height),d=new Ee({source:p,frame:u});this.chars[n]={id:n.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:d}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){Us.install(e)}static uninstall(e){Us.uninstall(e)}}const es={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const h in e){const g=e[h].match(/^[a-z]+/gm)[0],E=e[h].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),R={};for(const H in E){const j=E[H].split("="),P=j[0],$=j[1].replace(/"/gm,""),X=parseFloat($),K=isNaN(X)?$:X;R[P]=K}s[g].push(R)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=s.info,[n]=s.common,[i]=s.distanceField??[];i&&(a.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),a.fontSize=parseInt(r.size,10),a.fontFamily=r.face,a.lineHeight=parseInt(n.lineHeight,10);const l=s.page;for(let h=0;h<l.length;h++)a.pages.push({id:parseInt(l[h].id,10)||0,file:l[h].file});const p={};a.baseLineOffset=a.lineHeight-parseInt(n.base,10);const u=s.char;for(let h=0;h<u.length;h++){const g=u[h],E=parseInt(g.id,10);let R=g.letter??g.char??String.fromCharCode(E);R==="space"&&(R=" "),p[E]=R,a.chars[R]={id:E,page:parseInt(g.page,10)||0,x:parseInt(g.x,10),y:parseInt(g.y,10),width:parseInt(g.width,10),height:parseInt(g.height,10),xOffset:parseInt(g.xoffset,10),yOffset:parseInt(g.yoffset,10),xAdvance:parseInt(g.xadvance,10),kerning:{}}}const d=s.kerning||[];for(let h=0;h<d.length;h++){const g=parseInt(d[h].first,10),E=parseInt(d[h].second,10),R=parseInt(d[h].amount,10);a.chars[p[E]].kerning[p[g]]=R}return a}},Xs={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const n=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),l=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let u=0;u<n.length;u++)e.pages.push({id:parseInt(n[u].getAttribute("id"),10)||0,file:n[u].getAttribute("file")});const p={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let u=0;u<i.length;u++){const d=i[u],h=parseInt(d.getAttribute("id"),10);let g=d.getAttribute("letter")??d.getAttribute("char")??String.fromCharCode(h);g==="space"&&(g=" "),p[h]=g,e.chars[g]={id:h,page:parseInt(d.getAttribute("page"),10)||0,x:parseInt(d.getAttribute("x"),10),y:parseInt(d.getAttribute("y"),10),width:parseInt(d.getAttribute("width"),10),height:parseInt(d.getAttribute("height"),10),xOffset:parseInt(d.getAttribute("xoffset"),10),yOffset:parseInt(d.getAttribute("yoffset"),10),xAdvance:parseInt(d.getAttribute("xadvance"),10),kerning:{}}}for(let u=0;u<l.length;u++){const d=parseInt(l[u].getAttribute("first"),10),h=parseInt(l[u].getAttribute("second"),10),g=parseInt(l[u].getAttribute("amount"),10);e.chars[p[h]].kerning[p[d]]=g}return e}},Ks={test(t){return typeof t=="string"&&t.includes("<font>")?Xs.test(J.get().parseXML(t)):!1},parse(t){return Xs.parse(J.get().parseXML(t))}},gn=[".xml",".fnt"],vn={extension:{type:L.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof ya,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},mn={extension:{type:L.LoadParser,priority:Me.Normal},name:"loadBitmapFont",test(t){return gn.includes(Se.extname(t).toLowerCase())},async testParse(t){return es.test(t)||Ks.test(t)},async parse(t,e,s){const a=es.test(t)?es.parse(t):Ks.parse(t),{src:r}=e,{pages:n}=a,i=[],l=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let h=0;h<n.length;++h){const g=n[h].file;let E=Se.join(Se.dirname(r),g);E=Vr(E,r),i.push({src:E,data:l})}const p=await s.load(i),u=i.map(h=>p[h.src]);return new ya({data:a,textures:u},r)},async load(t,e){return await(await J.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class bn{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const yn={extension:{type:L.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Ee),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((r,n)=>{s[a+(n===0?"":n+1)]=r})}),s}};async function xa(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const xn={extension:{type:L.DetectionParser,priority:1},test:async()=>xa("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},Qs=["png","jpg","jpeg"],_n={extension:{type:L.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...Qs],remove:async t=>t.filter(e=>!Qs.includes(e))},wn="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function os(t){return wn?!1:document.createElement("video").canPlayType(t)!==""}const An={extension:{type:L.DetectionParser,priority:0},test:async()=>os("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},kn={extension:{type:L.DetectionParser,priority:0},test:async()=>os("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},En={extension:{type:L.DetectionParser,priority:0},test:async()=>os("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},Sn={extension:{type:L.DetectionParser,priority:0},test:async()=>xa("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class Tn{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var i,l;let r=null,n=null;if(s.loadParser&&(n=this._parserHash[s.loadParser],n||me(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!n){for(let p=0;p<this.parsers.length;p++){const u=this.parsers[p];if(u.load&&((i=u.test)!=null&&i.call(u,e,s,this))){n=u;break}}if(!n)return me(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await n.load(e,s,this),a.parser=n;for(let p=0;p<this.parsers.length;p++){const u=this.parsers[p];u.parse&&u.parse&&await((l=u.testParse)==null?void 0:l.call(u,r,s,this))&&(r=await u.parse(r,s,this)||r,a.parser=u)}return r})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const r={},n=oa(e),i=tt(e,u=>({alias:[u],src:u,data:{}})),l=i.length,p=i.map(async u=>{const d=Se.toAbsolute(u.src);if(!r[u.src])try{this.promiseCache[d]||(this.promiseCache[d]=this._getLoadPromiseAndParser(d,u)),r[u.src]=await this.promiseCache[d].promise,s&&s(++a/l)}catch(h){throw delete this.promiseCache[d],delete r[u.src],new Error(`[Loader.load] Failed to load ${d}.
${h}`)}});return await Promise.all(p),n?r[i[0].src]:r}async unload(e){const a=tt(e,r=>({alias:[r],src:r})).map(async r=>{var l,p;const n=Se.toAbsolute(r.src),i=this.promiseCache[n];if(i){const u=await i.promise;delete this.promiseCache[n],await((p=(l=i.parser)==null?void 0:l.unload)==null?void 0:p.call(l,u,r,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&me(`[Assets] loadParser name conflict "${s.name}"`):me("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function je(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const Rn=".json",Pn="application/json",Ln={extension:{type:L.LoadParser,priority:Me.Low},name:"loadJson",test(t){return je(t,Pn)||We(t,Rn)},async load(t){return await(await J.get().fetch(t)).json()}},In=".txt",On="text/plain",Bn={name:"loadTxt",extension:{type:L.LoadParser,priority:Me.Low,name:"loadTxt"},test(t){return je(t,On)||We(t,In)},async load(t){return await(await J.get().fetch(t)).text()}},Cn=["normal","bold","100","200","300","400","500","600","700","800","900"],Fn=[".ttf",".otf",".woff",".woff2"],qn=["font/ttf","font/otf","font/woff","font/woff2"],$n=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Mn(t){const e=Se.extname(t),r=Se.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(l=>l.charAt(0).toUpperCase()+l.slice(1));let n=r.length>0;for(const l of r)if(!l.match($n)){n=!1;break}let i=r.join(" ");return n||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const Wn=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function jn(t){return Wn.test(t)?t:encodeURI(t)}const Nn={extension:{type:L.LoadParser,priority:Me.Low},name:"loadWebFont",test(t){return je(t,qn)||We(t,Fn)},async load(t,e){var a,r,n;const s=J.get().getFontFaceSet();if(s){const i=[],l=((a=e.data)==null?void 0:a.family)??Mn(t),p=((n=(r=e.data)==null?void 0:r.weights)==null?void 0:n.filter(d=>Cn.includes(d)))??["normal"],u=e.data??{};for(let d=0;d<p.length;d++){const h=p[d],g=new FontFace(l,`url(${jn(t)})`,{...u,weight:h});await g.load(),s.add(g),i.push(g)}return le.set(`${l}-and-url`,{url:t,fontFaces:i}),i.length===1?i[0]:i}return me("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{le.remove(`${e.family}-and-url`),J.get().getFontFaceSet().delete(e)})}};function ls(t,e=1){var a;const s=(a=ht.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function cs(t,e,s){t.label=s,t._sourceOrigin=s;const a=new Ee({source:t,label:s}),r=()=>{delete e.promiseCache[s],le.has(s)&&le.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(me("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),a.once("destroy",()=>{t.destroyed||(me("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),a}const zn=".svg",Un="image/svg+xml",Dn={extension:{type:L.LoadParser,priority:Me.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return je(t,Un)||We(t,zn)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?Vn(t):Gn(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function Gn(t,e,s,a){var j,P,$;const n=await(await J.get().fetch(t)).blob(),i=URL.createObjectURL(n),l=new Image;l.src=i,l.crossOrigin=a,await l.decode(),URL.revokeObjectURL(i);const p=document.createElement("canvas"),u=p.getContext("2d"),d=((j=e.data)==null?void 0:j.resolution)||ls(t),h=((P=e.data)==null?void 0:P.width)??l.width,g=(($=e.data)==null?void 0:$.height)??l.height;p.width=h*d,p.height=g*d,u.drawImage(l,0,0,h*d,g*d);const{parseAsGraphicsContext:E,...R}=e.data??{},H=new la({resource:p,alphaMode:"premultiply-alpha-on-upload",resolution:d,...R});return cs(H,s,t)}async function Vn(t){const s=await(await J.get().fetch(t)).text(),a=new Qr;return a.svg(s),a}const Hn=`(function () {
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
`;let qe=null,ns=class{constructor(){qe||(qe=URL.createObjectURL(new Blob([Hn],{type:"application/javascript"}))),this.worker=new Worker(qe)}};ns.revokeObjectURL=function(){qe&&(URL.revokeObjectURL(qe),qe=null)};const Yn=`(function () {
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
`;let $e=null;class _a{constructor(){$e||($e=URL.createObjectURL(new Blob([Yn],{type:"application/javascript"}))),this.worker=new Worker($e)}}_a.revokeObjectURL=function(){$e&&(URL.revokeObjectURL($e),$e=null)};let Js=0,ts;class Xn{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new ns;s.addEventListener("message",a=>{s.terminate(),ns.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){ts===void 0&&(ts=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<ts&&(this._createdWorkers++,e=new _a().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((r,n)=>{this._queue.push({id:e,arguments:s,resolve:r,reject:n})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[Js]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:Js++,id:a})}}const Zs=new Xn,Kn=[".jpeg",".jpg",".png",".webp",".avif"],Qn=["image/jpeg","image/png","image/webp","image/avif"];async function Jn(t,e){var r;const s=await J.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const wa={name:"loadTextures",extension:{type:L.LoadParser,priority:Me.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return je(t,Qn)||We(t,Kn)},async load(t,e,s){var n;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Zs.isImageBitmapSupported()?a=await Zs.loadImageBitmap(t,e):a=await Jn(t,e):a=await new Promise((i,l)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?i(a):(a.onload=()=>{i(a)},a.onerror=l)});const r=new la({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((n=e.data)==null?void 0:n.resolution)||ls(t),...e.data});return cs(r,s,t)},unload(t){t.destroy(!0)}},Aa=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Zn=Aa.map(t=>`video/${t.substring(1)}`);function ei(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=si(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function ti(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",r),t.load();function a(){n(),e()}function r(i){n(),s(i)}function n(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",r)}})}function si(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const ai={name:"loadVideo",extension:{type:L.LoadParser,name:"loadVideo"},test(t){const e=je(t,Zn),s=We(t,Aa);return e||s},async load(t,e,s){var p,u;const a={...Kt.defaultOptions,resolution:((p=e.data)==null?void 0:p.resolution)||ls(t),alphaMode:((u=e.data)==null?void 0:u.alphaMode)||await Hr(),...e.data},r=document.createElement("video"),n={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(n).forEach(d=>{const h=n[d];h!==void 0&&r.setAttribute(d,h)}),a.muted===!0&&(r.muted=!0),ei(r,t,a.crossorigin);const i=document.createElement("source");let l;if(t.startsWith("data:"))l=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const d=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();l=Kt.MIME_TYPES[d]||`video/${d}`}return i.src=t,l&&(i.type=l),new Promise(d=>{const h=async()=>{const g=new Kt({...a,resource:r});r.removeEventListener("canplay",h),e.data.preload&&await ti(r),d(cs(g,s,t))};r.addEventListener("canplay",h),r.appendChild(i)})},unload(t){t.destroy(!0)}},ka={extension:{type:L.ResolveParser,name:"resolveTexture"},test:wa.test,parse:t=>{var e;return{resolution:parseFloat(((e=ht.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},ri={extension:{type:L.ResolveParser,priority:-2,name:"resolveJson"},test:t=>ht.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:ka.parse};class ni{constructor(){this._detections=[],this._initialized=!1,this.resolver=new ht,this.loader=new Tn,this.cache=le,this._backgroundLoader=new bn(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var n,i;if(this._initialized){me("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let l=e.manifest;typeof l=="string"&&(l=await this.load(l)),this.resolver.addManifest(l)}const s=((n=e.texturePreference)==null?void 0:n.resolution)??1,a=typeof s=="number"?[s]:s,r=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=oa(e),r=tt(e).map(l=>{if(typeof l!="string"){const p=this.resolver.getAlias(l);return p.some(u=>!this.resolver.hasKey(u))&&this.add(l),Array.isArray(p)?p[0]:p}return this.resolver.hasKey(l)||this.add({alias:l,src:l}),l}),n=this.resolver.resolve(r),i=await this._mapLoadToResolve(n,s);return a?i[r[0]]:i}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const r=this.resolver.resolveBundle(e),n={},i=Object.keys(r);let l=0,p=0;const u=()=>{s==null||s(++l/p)},d=i.map(h=>{const g=r[h];return p+=Object.keys(g).length,this._mapLoadToResolve(g,u).then(E=>{n[h]=E})});return await Promise.all(d),a?n[e[0]]:n}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return le.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=le.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(a,s);this._backgroundLoader.active=!0;const n={};return a.forEach(i=>{const l=r[i.src],p=[i.src];i.alias&&p.push(...i.alias),p.forEach(u=>{n[u]=l}),le.set(p,l)}),n}async unload(e){this._initialized||await this.init();const s=tt(e).map(r=>typeof r!="string"?r.src:r),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=tt(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(r=>this._unloadFromResolved(s[r]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{le.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,r)=>s.indexOf(a)===r),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const Ce=new ni;be.handleByList(L.LoadParser,Ce.loader.parsers).handleByList(L.ResolveParser,Ce.resolver.parsers).handleByList(L.CacheParser,Ce.cache.parsers).handleByList(L.DetectionParser,Ce.detections);be.add(yn,_n,xn,Sn,An,kn,En,Ln,Bn,Nn,Dn,wa,ai,mn,vn,ka,ri);const ea={loader:L.LoadParser,resolver:L.ResolveParser,cache:L.CacheParser,detection:L.DetectionParser};be.handle(L.Asset,t=>{const e=t.ref;Object.entries(ea).filter(([s])=>!!e[s]).forEach(([s,a])=>be.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(ea).filter(s=>!!e[s]).forEach(s=>be.remove(e[s]))});class ii extends Yr{constructor(e,s){const{text:a,resolution:r,style:n,anchor:i,width:l,height:p,roundPixels:u,...d}=e;super({...d}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=n,this.resolution=r??null,this.allowChildren=!1,this._anchor=new Xr({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=u??!1,l!==void 0&&(this.width=l),p!==void 0&&(this.height=p)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,r=-s*this.anchor.x;let n=0;return e.x>=r&&e.x<=r+s&&(n=-a*this.anchor.y,e.y>=n&&e.y<=n+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function oi(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(pt(ut,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class li extends ii{constructor(...e){const s=oi(e,"Text");super(s,ca),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=Jr.measureText(this._text,this._style),{width:r,height:n}=a;e.minX=-s._x*r,e.maxX=e.minX+r,e.minY=-s._y*n,e.maxY=e.minY+n}}var ci=V('<p style="color: red;" class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Error:</strong> </p>'),di=V('<div class="svelte-1t2q5b9"> </div>'),fi=V('<details class="svelte-1t2q5b9"><summary class="svelte-1t2q5b9"> </summary> <!></details>'),pi=V(`<div style="
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
" class="svelte-1t2q5b9"><!></div> <button class="svelte-1t2q5b9"> </button> <button title="SPIN" class="svelte-1t2q5b9"></button>`,1);function wi(t,e){ra(e,!0);const s=13,a=1445,r=1e3,n=1.75,i=-30,l=-10,p=160,u=0,d=720,h=750,g=.8,E=50,R=30,H=-40,j=1,P="height",X=Math.round(100*n),K=Math.round(X*(700/760)),st=K+10,ye=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],N=typeof window<"u"&&window.location.hostname.includes("github.io")?"/web-sdk/oma-peli/symbols":`${Ze}/symbols`,Ne={a:`${N}/Blue_hotrod.jpg`,b:`${N}/Blue_jacket.jpg`,c:`${N}/Blue_rollers.jpg`,d:`${N}/Blue_speakers.jpg`,e:`${N}/Premium_blonde.jpg`,f:`${N}/Premium_brunette.jpg`,g:`${N}/Premium_rocker.jpg`,h:`${N}/New_Wild.jpg`,i:`${N}/Red_burger.jpg`,j:`${N}/Red_fries.jpg`,k:`${N}/Red_milkshake.jpg`,l:`${N}/Scatter.jpg`,emptyslot:`${N}/Emptyslot.jpg`},gt=`${N}/bg_base.jpg`,ds=`${N}/ReelFrames.png`,fs=`${N}/RockABillyReels_logo.png`,Ea={spin:`${Ze}/sounds/spin.mp3`,stop:`${Ze}/sounds/stop.mp3`,win:`${Ze}/sounds/win.mp3`},Sa="1.0.3";let xe=B(!0),vt={},rt=null,Te=null,ze=null,Ue=null,De=B("Initializing..."),Re=B(""),ee=[],ce=B(1e3),Y=B(10);const ps=1,mt=100;let _e=B(!1),Pe=B(0),Ge=B(!1),Ta=B(0),we=!1,ie=null,bt=!1,Ve=B(0),Le=B(0),He=B(0),yt=B(0),xt=Yt(()=>o(Le)>0?(o(He)/o(Le)*100).toFixed(2):"0.00"),_t=Yt(()=>o(Ve)>0?(o(yt)/o(Ve)*100).toFixed(2):"0.00"),te=B(!1),de=B(0),Ae=B(0),wt=B(0),At=B(0),nt=B(0),kt=B(0),Ra=Yt(()=>o(nt)>0?(o(kt)/o(nt)*100).toFixed(2):"0.00");const us={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25};function hs(f){if(f===6)return Math.random()<.55?"h":"emptyslot";const m=Math.random();let c=0;const w=ye.filter(k=>k!=="h"),A=w.reduce((k,I)=>k+us[I],0);for(const k of w)if(c+=us[k]/A,m<c)return k;return"k"}function gs(){const f=[];for(let m=0;m<s;m++){let c=hs(m);o(te)&&(c==="k"?c="f":c==="j"?c="e":c==="i"&&(c="g")),f.push(c),ue(nt),c==="emptyslot"&&ue(kt)}return f}function Pa(f){return f<3?{col:0,row:f}:f<6?{col:1,row:f-3}:f===6?{col:2,row:0}:f<10?{col:3,row:f-7}:{col:4,row:f-10}}function Ye(f,m){return f===0?m:f===1?3+m:f===2?6:f===3?7+m:f===4?10+m:-1}function La(){if(o(te)){const f=Math.random();return f<.7?3:f<.92?5:10}else{const f=Math.random();return f<.7?1:f<.92?2:3}}const Ia={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function Oa(){var G;const f=[],m=[];for(let b=0;b<s;b++)Xe[b]==="l"&&m.push(b);if(m.length>=5){const b=m.length;_(de,o(de)+b),o(te)?console.log(`🎰 FREE SPINS RETRIGGERED! +${b} FREE SPINS! Total: ${o(de)}`):(_(te,!0),_(Ae,0),ue(wt),console.log(`🎰 FREE SPINS TRIGGERED! ${m.length} scatters = ${b} FREE SPINS!`)),f.push({symbol:"l",count:m.length,payout:0,positions:m,multiplier:1})}const c=[];for(let b=0;b<3;b++)for(let S=0;S<3;S++)for(let O=0;O<1;O++)for(let W=0;W<3;W++)for(let T=0;T<3;T++){const C=[Ye(0,b),Ye(1,S),Ye(2,O),Ye(3,W),Ye(4,T)];c.push(C)}console.log(`Generated ${c.length} possible paths (should be 81)`);const w=[];for(const b of c){const S=b.map(T=>Xe[T]);if(S[0]==="emptyslot"||S[0]==="l")continue;let O=null;for(let T=0;T<S.length;T++)if(S[T]!=="h"&&S[T]!=="emptyslot"&&S[T]!=="l"){O=S[T];break}if(!O)continue;let W=0;for(let T=0;T<S.length;T++){const C=S[T];if(C===O||C==="h")W++;else break}if(W>=3){const C=b[0]%3;w.push({symbol:O,length:W,path:b.slice(0,W),startRow:C})}}const A=[],k=new Map;for(const b of w){const S=`${b.symbol}-${b.path.join(",")}`;k.has(S)||k.set(S,[]),k.get(S).push(b)}for(const[b,S]of k.entries()){const O=Math.max(...S.map(T=>T.length)),W=S.find(T=>T.length===O);W&&A.push(W)}const I=[],z=new Map;for(const b of A){const S=`${b.symbol}-${b.length}`;z.has(S)||z.set(S,[]),z.get(S).push(b)}const M=A.length>0?La():1;for(const[b,S]of z.entries()){const O=S[0],W=(G=Ia[O.symbol])==null?void 0:G[O.length];if(W!==void 0&&W>0){const T=new Map;for(const ae of S)for(let Q=0;Q<ae.length;Q++)T.has(Q)||T.set(Q,new Set),T.get(Q).add(ae.path[Q]);let C=1;for(let ae=0;ae<O.length;ae++){const Q=T.get(ae);C*=Q?Q.size:1}const pe=W*o(Y)*C*M;console.log(`  ${O.length}x${O.symbol}: ${C} ways × ${W}x × ${o(Y)} bet × ${M} mult = ${pe}`);const lt=new Set;for(const ae of S)ae.path.forEach(Q=>lt.add(Q));I.push({symbol:O.symbol,count:O.length,payout:pe,positions:Array.from(lt),multiplier:M})}}return f.push(...I),f}let ke=B(0),Ie=B(he([])),fe=B(!1),it=B(!1);const Ba={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function Et(f){if(!o(xe)||!vt[f])return;const m=vt[f];m.currentTime=0,m.play().catch(c=>{console.warn("Äänen toisto epäonnistui:",f,c)})}function Ca(f){Ke.forEach(m=>q.stage.removeChild(m)),Ke=[],f.forEach(m=>{m.positions.forEach(c=>{const w=Oe[c],A=new Qt().rect(0,0,X,K).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});A.x=w.container.x,A.y=w.container.y,q.stage.addChild(A),Ke.push(A);let k=0,I=1;const z=.05;q.ticker.add(()=>{k+=I*z,k>=.4&&(I=-1),k<=0&&(I=1),A.alpha=.5+k})})})}function St(){Ke.forEach(f=>q.stage.removeChild(f)),Ke=[]}let Xe=gs(),Tt,q,Oe=[],Ke=[];class Fa{constructor(m,c){se(this,"index");se(this,"container");se(this,"offset",0);se(this,"speed",0);se(this,"targetSpeed",30);se(this,"state","idle");se(this,"stopDelay",0);se(this,"bounceOffset",0);se(this,"bounceSpeed",0);se(this,"bounceFrames",0);this.index=m,this.container=c}start(m){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=m}update(){this.state!=="idle"&&(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"&&(this.speed*=.92,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,Et("stop"))),this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=st&&(this.offset=0,Xe[this.index]=hs(this.index))))}draw(){const m=this.container;m.removeChildren();const c=Xe[this.index];if(!c||!rt||!rt[c])return;const w=rt[c];if(!w)return;const A=this.offset+this.bounceOffset,k=new ct(w);k.width=X,k.height=K,k.x=0,k.y=A,m.addChild(k)}}na(async()=>{q=new ba,await q.init({width:a,height:r,background:"#001a33"}),Tt.appendChild(q.canvas);const f={};try{_(De,"Loading background and UI images..."),ee.push(`Loading background: ${gt}`),ee.push(`Loading reel frames: ${ds}`),ee.push(`Loading logo: ${fs}`),await Ce.load([{alias:"background",src:gt},{alias:"reelframes",src:ds},{alias:"logo",src:fs}]),Te=Ee.from("background"),ze=Ee.from("reelframes"),Ue=Ee.from("logo"),console.log("✅ Background texture created:",Te.width,"x",Te.height),console.log("✅ Reel frames texture created:",ze.width,"x",ze.height),console.log("✅ Logo texture created:",Ue.width,"x",Ue.height),ee.push("✅ All UI images loaded"),_(De,"Loading symbols...");const c=[];for(const w of ye)c.push({alias:w,src:Ne[w]});await Ce.load(c);for(const w of ye){const A=Ne[w];ee.push(`Loading symbol ${w}: ${A}`);try{const k=Ee.from(w);f[w]=k,console.log(`✅ Symbol ${w} loaded:`,k.width,"x",k.height),ee.push(`✅ Symbol ${w} loaded`)}catch(k){const I=`❌ Failed to load symbol ${w} from ${A}: ${k}`;throw ee.push(I),console.error(I),new Error(I)}}rt=f,_(De,"Assets loaded successfully!")}catch(c){_(Re,`Asset loading failed: ${c}`),ee.push(o(Re)),console.error(o(Re));return}console.log("Ladataan ääniefektit...");for(const[c,w]of Object.entries(Ea)){const A=new Audio;A.src=w,A.preload="auto",A.volume=.7,A.load(),A.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${w} (käytetään hiljaista placeholderia)`)}),vt[c]=A}if(console.log("Taustakuva ladattu, tekstuuri:",Te),Te){const c=new ct(Te);q.renderer.width/q.renderer.height;const w=c.texture.width/c.texture.height;let A;A=q.renderer.height/c.texture.height,A*=j,c.scale.set(A),c.x=(q.renderer.width-c.width)/2,c.y=(q.renderer.height-c.height)/2+H,q.stage.addChild(c),console.log("Taustakuva lisätty:",P,"mode, size:",c.width.toFixed(0),"x",c.height.toFixed(0),"image aspect:",w.toFixed(2),"scale:",A.toFixed(2),"pos:",c.x.toFixed(0),c.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(c=>({x:c.x+i,y:c.y+l})),Oe=[];for(let c=0;c<s;c++){const w=Pa(c),A=w.col,k=w.row,I=300+A*(X+20),z=250+k*(K+15),M=c===6?I+u:I,G=c===6?z+p:z,b=new is;b.x=M+i,b.y=G+l;const S=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],O=new Qt().rect(0,0,X,K).fill({color:S[c],alpha:.3});O.x=b.x,O.y=b.y,q.stage.addChild(O);const W=new ca({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),T=new li({text:c.toString(),style:W});T.x=b.x+5,T.y=b.y+5,q.stage.addChild(T);const C=new Qt().rect(0,0,X,K).fill(16777215);C.x=b.x,C.y=b.y,b.mask=C,q.stage.addChild(C),q.stage.addChild(b),Oe.push(new Fa(c,b))}if(ze){const c=new ct(ze);c.scale.set(1),c.x=250,c.y=200,q.stage.addChild(c),console.log("Reel frames lisätty:",c.width.toFixed(0),"x",c.height.toFixed(0))}if(Ue){const c=new ct(Ue);c.scale.set(g),c.x=(q.renderer.width-c.width)/2+E,c.y=R,q.stage.addChild(c),console.log("Logo lisätty päällimmäiseen layeriin:",c.width.toFixed(0),"x",c.height.toFixed(0))}q.ticker.add(qa)});function qa(){for(const f of Oe)f.update(),f.draw();if(!o(fe)&&!bt&&Oe.every(f=>f.state==="stopped")){bt=!0;const f=Oa();console.log(`Checking wins, found ${f.length} wins`),f.length>0?(_(Ie,he(f)),_(ke,he(f.reduce((m,c)=>m+c.payout,0))),$a(o(ke)),_(fe,!0),_(Ta,he(Date.now())),console.log(`🎉 VOITTO! ${o(ke)} pistettä! Uusi saldo: ${o(ce)}`),console.log(`isShowingWin set to: ${o(fe)}, totalWin: ${o(ke)}`),f.forEach(m=>{const c=m.multiplier?` (${m.multiplier}x multiplier)`:"";console.log(`${m.count}x ${m.symbol} = ${m.payout} pistettä${c}`)}),Ca(f),Et("win"),o(_e)&&!we&&(we=!0,ie=window.setTimeout(()=>{o(fe)&&o(_e)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),_(fe,!1),St()),ie=window.setTimeout(()=>{we=!1,Pt()},200)},1500))):(console.log("No wins found this spin"),o(_e)&&!we&&(we=!0,ie=window.setTimeout(()=>{we=!1,Pt()},1e3))),o(te)&&o(de)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${o(Ae)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${o(Ae).toFixed(2)}`),_(te,!1),_(Ae,0)},2e3))}}function vs(){if(o(te)&&o(de)>0)ue(de,-1),ue(At),console.log(`🎰 FREE SPIN! Remaining: ${o(de)}`);else if(!o(te)){if(o(ce)<o(Y)){alert(`Not enough credits! Balance: ${o(ce)}, Bet: ${o(Y)}`),Rt();return}_(ce,o(ce)-o(Y)),ue(Ve),_(Le,o(Le)+o(Y))}ie!==null&&(clearTimeout(ie),ie=null),_(Ie,he([])),_(ke,0),_(fe,!1),bt=!1,St(),Xe=gs(),Oe.forEach((f,m)=>f.start(60+m*10)),Et("spin")}function $a(f){_(ce,o(ce)+f),_(He,o(He)+f),o(te)&&_(Ae,o(Ae)+f),f>0&&ue(yt)}function Ma(){o(Y)<mt&&_(Y,he(Math.min(o(Y)+1,mt)))}function Wa(){o(Y)>ps&&_(Y,he(Math.max(o(Y)-1,ps)))}function ja(){_(Y,mt)}function Qe(f){_(_e,!0),_(Pe,he(f)),_(Ge,!1),Pt()}function Rt(){_(_e,!1),_(Pe,0),we=!1,ie!==null&&(clearTimeout(ie),ie=null)}function Pt(){if(!o(_e)||o(Pe)<=0){Rt();return}console.log(`Autoplay: Starting spin ${o(Pe)} rounds left`),vs(),ue(Pe,-1)}function Na(){confirm("Reset all statistics?")&&(_(Ve,0),_(Le,0),_(He,0),_(yt,0),_(wt,0),_(At,0),_(nt,0),_(kt,0))}var ms=_i(),bs=Fe(ms);{var za=f=>{var m=pi(),c=v(y(m),2),w=v(y(c));x(c);var A=v(c,2);{var k=T=>{var C=ci(),pe=v(y(C));x(C),re(()=>F(pe,` ${o(Re)??""}`)),D(T,C)};Z(A,T=>{o(Re)&&T(k)})}var I=v(A,2),z=v(y(I));z.nodeValue=` ${Ze??""}`,x(I);var M=v(I,2),G=v(y(M));G.nodeValue=` ${gt??""}`,x(M);var b=v(M,2),S=v(y(b));x(b);var O=v(b,2);{var W=T=>{var C=fi(),pe=y(C),lt=y(pe);x(pe);var ae=v(pe,2);Gs(ae,17,()=>ee,Ds,(Q,cr)=>{var Gt=di(),dr=y(Gt,!0);x(Gt),re(()=>F(dr,o(cr))),D(Q,Gt)}),x(C),re(()=>F(lt,`Log (${ee.length??""})`)),D(T,C)};Z(O,T=>{ee.length>0&&T(W)})}x(m),re(()=>{F(w,` ${o(De)??""}`),F(S,` ${Ne.a??""}`)}),D(f,m)};Z(bs,f=>{(o(De)!=="Assets loaded successfully!"||o(Re))&&f(za)})}var ys=v(bs,2);{var Ua=f=>{var m=gi(),c=v(y(m),2),w=y(c);x(c);var A=v(c,2);Gs(A,17,()=>o(Ie),Ds,(M,G)=>{var b=ui(),S=y(b);x(b),re(O=>F(S,`${o(G).count??""} × ${Ba[o(G).symbol]??""} = ${O??""} pistettä`),[()=>o(G).payout.toFixed(2)]),D(M,b)});var k=v(A,2);{var I=M=>{var G=hi(),b=y(G),S=y(b);x(b),x(G),re(()=>F(S,`✨ ${o(Ie)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),D(M,G)};Z(k,M=>{o(Ie).length>0&&o(Ie)[0].multiplier>1&&M(I)})}var z=v(k,2);x(m),re(()=>F(w,`${o(ke)??""} pistettä`)),U("click",z,()=>{_(fe,!1),St(),console.log("Win popup closed, ready for next spin")}),D(f,m)};Z(ys,f=>{o(ke)>0&&o(fe)&&f(Ua)})}var xs=v(ys,2);{var Da=f=>{var m=vi(),c=v(y(m),8);x(m),U("click",c,()=>{_(it,!1)}),D(f,m)};Z(xs,f=>{o(it)&&f(Da)})}var _s=v(xs,2);zr(_s,f=>Tt=f,()=>Tt);var ot=v(_s,2),ws=y(ot);{var Ga=f=>{var m=mi(),c=Fe(m),w=v(y(c),2),A=y(w,!0);x(w),x(c);var k=v(c,2),I=v(y(k),2),z=y(I,!0);x(I),x(k),re(M=>{F(A,o(de)),F(z,M)},[()=>o(Ae).toFixed(2)]),D(f,m)};Z(ws,f=>{o(te)&&f(Ga)})}var Lt=v(ws,2),As=v(y(Lt),2),Va=y(As,!0);x(As),x(Lt);var ks=v(Lt,2),Es=v(y(ks),2),Ha=y(Es,!0);x(Es),x(ks),x(ot);var It=v(ot,2),Ss=v(y(It),2),Ts=y(Ss),Ot=v(Ts,2),Ya=y(Ot,!0);x(Ot);var Rs=v(Ot,2),Xa=v(Rs,2);x(Ss),x(It);var Ps=v(It,2),Bt=v(Ps,2),Ls=v(y(Bt),2);Ls.textContent=`v${Sa}`;var Ct=v(Ls,2),Is=v(y(Ct),2),Ka=y(Is,!0);x(Is),x(Ct);var Ft=v(Ct,2),Os=v(y(Ft),2),Qa=y(Os,!0);x(Os),x(Ft);var qt=v(Ft,2),Bs=v(y(qt),2),Ja=y(Bs,!0);x(Bs),x(qt);var $t=v(qt,2),Mt=v(y($t),2),Za=y(Mt);x(Mt),x($t);var Wt=v($t,2),jt=v(y(Wt),2),er=y(jt);x(jt),x(Wt);var Nt=v(Wt,2),Cs=v(y(Nt),2),tr=y(Cs,!0);x(Cs),x(Nt);var zt=v(Nt,2),Fs=v(y(zt),2),sr=y(Fs,!0);x(Fs),x(zt);var Ut=v(zt,2),qs=v(y(Ut),2),ar=y(qs);x(qs),x(Ut);var rr=v(Ut,2);x(Bt);var Dt=v(Bt,2),nr=y(Dt);{var ir=f=>{var m=bi(),c=v(y(m),2),w=y(c);x(c);var A=v(c,2);x(m),re(()=>F(w,`${o(Pe)??""} left`)),U("click",A,Rt),D(f,m)},or=f=>{var m=xi(),c=Fe(m),w=v(c,2);{var A=k=>{var I=yi(),z=v(y(I),2),M=v(z,2),G=v(M,2),b=v(G,2),S=v(b,2),O=v(S,2);x(I),U("click",z,()=>Qe(10)),U("click",M,()=>Qe(100)),U("click",G,()=>Qe(1e3)),U("click",b,()=>Qe(1e4)),U("click",S,()=>Qe(1e5)),U("click",O,()=>{_(Ge,!1)}),D(k,I)};Z(w,k=>{o(Ge)&&k(A)})}U("click",c,()=>{_(Ge,!o(Ge))}),D(f,m)};Z(nr,f=>{o(_e)?f(ir):f(or,!1)})}x(Dt);var Be=v(Dt,2),lr=y(Be,!0);x(Be);var $s=v(Be,2);ve($s,"style",`
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
  `),re((f,m,c,w,A,k)=>{ve(ot,"style",`
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
  border: 2px solid ${(o(te)?"#ff00ff":"#ffd700")??""};
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
  z-index: 1500;
  min-width: 180px;
`),F(Va,f),F(Ha,o(Y)),F(Ya,o(Y)),F(Ka,m),F(Qa,c),F(Ja,w),ve(Mt,"style",`color: ${A??""};`),F(Za,`${o(xt)??""}%`),ve(jt,"style",`color: ${k??""};`),F(er,`${o(_t)??""}%`),F(tr,o(wt)),F(sr,o(At)),F(ar,`${o(Ra)??""}%`),ve(Be,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(o(xe)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(o(xe)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),ve(Be,"title",o(xe)?"Mykistä äänet":"Laita äänet päälle"),F(lr,o(xe)?"🔊":"🔇")},[()=>o(ce).toLocaleString(),()=>o(Ve).toLocaleString(),()=>o(Le).toLocaleString(),()=>o(He).toLocaleString(),()=>parseFloat(o(xt))>=95?"#00ff00":parseFloat(o(xt))>=85?"#ffff00":"#ff6666",()=>parseFloat(o(_t))>=30?"#00ff00":parseFloat(o(_t))>=20?"#ffff00":"#ff6666"]),U("click",Ts,Wa),U("click",Rs,Ma),U("click",Xa,ja),U("click",Ps,()=>{_(it,!o(it))}),U("click",rr,Na),U("click",Be,()=>{_(xe,!o(xe))}),U("click",$s,vs),D(t,ms),ia()}var Ai=V('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),ki=V('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function Ei(t,e){ra(e,!1);let s=Ur(e,"isAuthenticated",12,!1),a=ss(""),r=ss(!1);const n="slot2024";function i(){o(a)===n?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(_(r,!0),_(a,""),setTimeout(()=>_(r,!1),3e3))}na(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),vr();var l=gr(),p=Fe(l);{var u=d=>{var h=ki(),g=y(h),E=v(y(g),4),R=y(E);sn(R),Nr(2),x(E);var H=v(E,2);{var j=P=>{var $=Ai();D(P,$)};Z(H,P=>{o(r)&&P(j)})}x(g),x(h),rn(R,()=>o(a),P=>_(a,P)),U("submit",E,nn(i)),D(d,h)};Z(p,d=>{s()||d(u)})}D(t,l),ia()}var Si=V('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),Ti=V("<!> <!>",1);function Wi(t){let e=ss(!1);var s=Ti(),a=Fe(s);Ei(a,{get isAuthenticated(){return o(e)},set isAuthenticated(i){_(e,i)},$$legacy:!0});var r=v(a,2);{var n=i=>{var l=Si(),p=v(Fe(l),2);wi(p,{}),D(i,l)};Z(r,i=>{o(e)&&i(n)})}D(t,s)}export{ha as A,fa as C,hn as R,cn as S,ga as V,Wi as _,ln as u};
