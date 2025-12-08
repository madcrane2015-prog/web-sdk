const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Bx-HehLT.js","./DNWEu6uq.js","./DEliLNnF.js","./DWgShhht.js","./C04N3yhf.js","./C2GHuDhf.js","./DVt0go5y.js","./dNg_Vogp.js"])))=>i.map(i=>d[i]);
var ar=Object.defineProperty;var rr=(t,e,s)=>e in t?ar(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var se=(t,e,s)=>rr(t,typeof e!="symbol"?e+"":e,s);import{f as nr,l as ir,t as V,g as D,a as G,d as or}from"./DRDKHArV.js";import{i as lr}from"./Dw5_DM93.js";import{y as oe,j as cr,a8 as dr,F as o,Q as fr,aa as pr,ab as Is,h as Os,e as jt,k as Ke,l as ur,ac as Xs,w as Ks,ad as hr,q as Qs,a7 as gr,U as vr,a2 as Bs,aq as Nt,z as Cs,ar as mr,as as br,at as xr,o as yr,au as _r,av as Ar,aw as wr,ax as kr,b as Er,ay as Sr,az as Tr,a6 as Pr,aA as Rr,aB as Lr,D as Ir,L as Or,p as Js,ah as F,ag as Zs,T as w,aC as Oe,f as Ce,s as m,c as x,r as y,t as re,I as Fs,a as ea,aD as Br,aE as Xt}from"./DWgShhht.js";import{_ as qs,p as pe,i as ee}from"./DEliLNnF.js";import{s as q}from"./4RjN9yQL.js";import{b as Cr,p as Fr}from"./B1_V_3zc.js";import{b as Qe}from"./DeuRpqi3.js";import{e as ve,E as L,a as qr,C as Zt,Q as ct,V as dt,N as zt,D as J,H as Mr,p as we,a0 as Me,a1 as ke,a2 as $r,w as ge,a3 as Ze,a4 as ta,a5 as $e,a6 as le,a7 as ft,a8 as sa,a9 as Wr,aa as Ut,ab as jr,ac as Nr,y as it}from"./DNWEu6uq.js";import{A as zr,B as Ms,G as Ur,T as aa,a as Dr,b as Dt}from"./C04N3yhf.js";function $s(t,e){return e}function Gr(t,e,s,a){for(var r=[],n=e.length,i=0;i<n;i++)xr(e[i].e,r,!0);var l=n>0&&r.length===0&&s!==null;if(l){var p=s.parentNode;yr(p),p.append(s),a.clear(),ue(t,e[0].prev,e[n-1].next)}_r(r,()=>{for(var u=0;u<n;u++){var c=e[u];l||(a.delete(c.k),ue(t,c.prev,c.next)),Ar(c.e,!l)}})}function Ws(t,e,s,a,r,n=null){var i=t,l={flags:e,items:new Map,first:null};oe&&cr();var p=null,u=!1,c=fr(()=>{var h=s();return gr(h)?h:h==null?[]:Qs(h)});dr(()=>{var h=o(c),g=h.length;if(u&&g===0)return;u=g===0;let S=!1;if(oe){var T=i.data===pr;T!==(g===0)&&(i=Is(),Os(i),jt(!1),S=!0)}if(oe){for(var Y=null,W,P=0;P<g;P++){if(Ke.nodeType===8&&Ke.data===ur){i=Ke,S=!0,jt(!1);break}var $=h[P],K=a($,P);W=ra(Ke,l,Y,null,$,K,P,r,e,s),l.items.set(K,W),Y=W}g>0&&Os(Is())}oe||Hr(h,l,i,r,e,a,s),n!==null&&(g===0?p?Xs(p):p=Ks(()=>n(i)):p!==null&&hr(p,()=>{p=null})),S&&jt(!0),o(c)}),oe&&(i=Ke)}function Hr(t,e,s,a,r,n,i){var l=t.length,p=e.items,u=e.first,c=u,h,g=null,S=[],T=[],Y,W,P,$;for($=0;$<l;$+=1){if(Y=t[$],W=n(Y,$),P=p.get(W),P===void 0){var K=c?c.e.nodes_start:s;g=ra(K,e,g,g===null?e.first:g.next,Y,W,$,a,r,i),p.set(W,g),S=[],T=[],c=g.next;continue}if(Vr(P,Y,$),(P.e.f&Nt)!==0&&Xs(P.e),P!==c){if(h!==void 0&&h.has(P)){if(S.length<T.length){var Q=T[0],ne;g=Q.prev;var et=S[0],me=S[S.length-1];for(ne=0;ne<S.length;ne+=1)js(S[ne],Q,s);for(ne=0;ne<T.length;ne+=1)h.delete(T[ne]);ue(e,et.prev,me.next),ue(e,g,et),ue(e,me,Q),c=Q,g=me,$-=1,S=[],T=[]}else h.delete(P),js(P,c,s),ue(e,P.prev,P.next),ue(e,P,g===null?e.first:g.next),ue(e,g,P),g=P;continue}for(S=[],T=[];c!==null&&c.k!==W;)(c.e.f&Nt)===0&&(h??(h=new Set)).add(c),T.push(c),c=c.next;if(c===null)continue;P=c}S.push(P),g=P,c=P.next}if(c!==null||h!==void 0){for(var tt=h===void 0?[]:Qs(h);c!==null;)(c.e.f&Nt)===0&&tt.push(c),c=c.next;var N=tt.length;if(N>0){var je=null;Gr(e,tt,je,p)}}Cs.first=e.first&&e.first.e,Cs.last=g&&g.e}function Vr(t,e,s,a){br(t.v,e),t.i=s}function ra(t,e,s,a,r,n,i,l,p,u){var c=(p&wr)!==0,h=(p&kr)===0,g=c?h?vr(r):Bs(r):r,S=(p&mr)===0?i:Bs(i),T={i:S,v:g,k:n,a:null,e:null,prev:s,next:a};try{return T.e=Ks(()=>l(t,g,S,u),oe),T.e.prev=s&&s.e,T.e.next=a&&a.e,s===null?e.first=T:(s.next=T,s.e.next=T.e),a!==null&&(a.prev=T,a.e.prev=T.e),T}finally{}}function js(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,r=e?e.e.nodes_start:s,n=t.e.nodes_start;n!==a;){var i=Er(n);r.before(n),n=i}}function ue(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function Yr(t){if(oe){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;he(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var r=t.checked;he(t,"checked",null),t.checked=r}}};t.__on_r=s,Sr(s),nr()}}function he(t,e,s,a){var r=t.__attributes??(t.__attributes={});oe&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Tr]=s),s==null?t.removeAttribute(e):typeof s!="string"&&Xr(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var Ns=new Map;function Xr(t){var e=Ns.get(t.nodeName);if(e)return e;Ns.set(t.nodeName,e=[]);for(var s,a=t,r=Element.prototype;r!==a;){s=Rr(a);for(var n in s)s[n].set&&e.push(n);a=Pr(a)}return e}function Kr(t,e,s=e){var a=Lr();ir(t,"input",r=>{var n=r?t.defaultValue:t.value;if(n=Gt(t)?Ht(n):n,s(n),a&&n!==(n=e())){var i=t.selectionStart,l=t.selectionEnd;t.value=n??"",l!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(l,t.value.length))}}),(oe&&t.defaultValue!==t.value||Ir(e)==null&&t.value)&&s(Gt(t)?Ht(t.value):t.value),Or(()=>{var r=e();Gt(t)&&r===Ht(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function Gt(t){var e=t.type;return e==="number"||e==="range"}function Ht(t){return t===""?null:+t}function Qr(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const Kt=[];ve.handleByNamedList(L.Environment,Kt);async function Jr(t){if(!t)for(let e=0;e<Kt.length;e++){const s=Kt[e];if(s.value.test()){await s.value.load();return}}}let Je;function Zr(){if(typeof Je=="boolean")return Je;try{Je=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{Je=!1}return Je}var na=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(na||{});class en{constructor(e){this.items=[],this._name=e}emit(e,s,a,r,n,i,l,p){const{name:u,items:c}=this;for(let h=0,g=c.length;h<g;h++)c[h][u](e,s,a,r,n,i,l,p);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const tn=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],ia=class oa extends qr{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...tn,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Jr(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...oa.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof Zt&&(a={container:a},s&&(ct(dt,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const r=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=r?a.clearColor:zt.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const r=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==r&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=na.ALL);const{clear:a,clearColor:r,target:n}=e;zt.shared.setValue(r??this.background.colorRgba),s.renderTarget.clear(n,a,zt.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new en(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const r in this.runners)this.runners[r].add(a);return this}_addPipes(e,s){const a=s.reduce((r,n)=>(r[n.name]=n.value,r),{});e.forEach(r=>{const n=r.value,i=r.name,l=a[i];this.renderPipes[i]=new n(this,l?new l:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Zr())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};ia.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let la=ia,ot;function sn(t){return ot!==void 0||(ot=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??la.defaultOptions.failIfMajorPerformanceCaveat};try{if(!J.get().getWebGLRenderingContext())return!1;let r=J.get().createCanvas().getContext("webgl",e);const n=!!((s=r==null?void 0:r.getContextAttributes())!=null&&s.stencil);if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,n}catch{return!1}})()),ot}let lt;async function an(t={}){return lt!==void 0||(lt=await(async()=>{const e=J.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),lt}const zs=["webgl","webgpu","canvas"];async function rn(t){let e=[];t.preference?(e.push(t.preference),zs.forEach(n=>{n!==t.preference&&e.push(n)})):e=zs.slice();let s,a={};for(let n=0;n<e.length;n++){const i=e[n];if(i==="webgpu"&&await an()){const{WebGPURenderer:l}=await qs(async()=>{const{WebGPURenderer:p}=await import("./Bx-HehLT.js");return{WebGPURenderer:p}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=l,a={...t,...t.webgpu};break}else if(i==="webgl"&&sn(t.failIfMajorPerformanceCaveat??la.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:l}=await qs(async()=>{const{WebGLRenderer:p}=await import("./dNg_Vogp.js");return{WebGLRenderer:p}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=l,a={...t,...t.webgl};break}else if(i==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const r=new s;return await r.init(a),r}const ca="8.8.1";class da{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,ca)}static destroy(){}}da.extension=L.Application;class nn{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,ca)}destroy(){this._renderer=null}}nn.extension={type:[L.WebGLSystem,L.WebGPUSystem],name:"initHook",priority:-10};const fa=class Qt{constructor(...e){this.stage=new Zt,e[0]!==void 0&&ct(dt,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await rn(e),Qt._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return ct(dt,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=Qt._plugins.slice(0);a.reverse(),a.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};fa._plugins=[];let pa=fa;ve.handleByList(L.Application,pa._plugins);ve.add(da);class ua extends zr{constructor(e,s){super();const{textures:a,data:r}=e;Object.keys(r.pages).forEach(n=>{const i=r.pages[parseInt(n,10)],l=a[i.id];this.pages.push({texture:l})}),Object.keys(r.chars).forEach(n=>{const i=r.chars[n],{frame:l,source:p}=a[i.page],u=new Mr(i.x+l.x,i.y+l.y,i.width,i.height),c=new we({source:p,frame:u});this.chars[n]={id:n.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:c}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){Ms.install(e)}static uninstall(e){Ms.uninstall(e)}}const Vt={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const h in e){const g=e[h].match(/^[a-z]+/gm)[0],S=e[h].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),T={};for(const Y in S){const W=S[Y].split("="),P=W[0],$=W[1].replace(/"/gm,""),K=parseFloat($),Q=isNaN(K)?$:K;T[P]=Q}s[g].push(T)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=s.info,[n]=s.common,[i]=s.distanceField??[];i&&(a.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),a.fontSize=parseInt(r.size,10),a.fontFamily=r.face,a.lineHeight=parseInt(n.lineHeight,10);const l=s.page;for(let h=0;h<l.length;h++)a.pages.push({id:parseInt(l[h].id,10)||0,file:l[h].file});const p={};a.baseLineOffset=a.lineHeight-parseInt(n.base,10);const u=s.char;for(let h=0;h<u.length;h++){const g=u[h],S=parseInt(g.id,10);let T=g.letter??g.char??String.fromCharCode(S);T==="space"&&(T=" "),p[S]=T,a.chars[T]={id:S,page:parseInt(g.page,10)||0,x:parseInt(g.x,10),y:parseInt(g.y,10),width:parseInt(g.width,10),height:parseInt(g.height,10),xOffset:parseInt(g.xoffset,10),yOffset:parseInt(g.yoffset,10),xAdvance:parseInt(g.xadvance,10),kerning:{}}}const c=s.kerning||[];for(let h=0;h<c.length;h++){const g=parseInt(c[h].first,10),S=parseInt(c[h].second,10),T=parseInt(c[h].amount,10);a.chars[p[S]].kerning[p[g]]=T}return a}},Us={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const n=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),l=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let u=0;u<n.length;u++)e.pages.push({id:parseInt(n[u].getAttribute("id"),10)||0,file:n[u].getAttribute("file")});const p={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let u=0;u<i.length;u++){const c=i[u],h=parseInt(c.getAttribute("id"),10);let g=c.getAttribute("letter")??c.getAttribute("char")??String.fromCharCode(h);g==="space"&&(g=" "),p[h]=g,e.chars[g]={id:h,page:parseInt(c.getAttribute("page"),10)||0,x:parseInt(c.getAttribute("x"),10),y:parseInt(c.getAttribute("y"),10),width:parseInt(c.getAttribute("width"),10),height:parseInt(c.getAttribute("height"),10),xOffset:parseInt(c.getAttribute("xoffset"),10),yOffset:parseInt(c.getAttribute("yoffset"),10),xAdvance:parseInt(c.getAttribute("xadvance"),10),kerning:{}}}for(let u=0;u<l.length;u++){const c=parseInt(l[u].getAttribute("first"),10),h=parseInt(l[u].getAttribute("second"),10),g=parseInt(l[u].getAttribute("amount"),10);e.chars[p[h]].kerning[p[c]]=g}return e}},Ds={test(t){return typeof t=="string"&&t.includes("<font>")?Us.test(J.get().parseXML(t)):!1},parse(t){return Us.parse(J.get().parseXML(t))}},on=[".xml",".fnt"],ln={extension:{type:L.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof ua,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},cn={extension:{type:L.LoadParser,priority:Me.Normal},name:"loadBitmapFont",test(t){return on.includes(ke.extname(t).toLowerCase())},async testParse(t){return Vt.test(t)||Ds.test(t)},async parse(t,e,s){const a=Vt.test(t)?Vt.parse(t):Ds.parse(t),{src:r}=e,{pages:n}=a,i=[],l=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let h=0;h<n.length;++h){const g=n[h].file;let S=ke.join(ke.dirname(r),g);S=$r(S,r),i.push({src:S,data:l})}const p=await s.load(i),u=i.map(h=>p[h.src]);return new ua({data:a,textures:u},r)},async load(t,e){return await(await J.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class dn{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const fn={extension:{type:L.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof we),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((r,n)=>{s[a+(n===0?"":n+1)]=r})}),s}};async function ha(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const pn={extension:{type:L.DetectionParser,priority:1},test:async()=>ha("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},Gs=["png","jpg","jpeg"],un={extension:{type:L.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...Gs],remove:async t=>t.filter(e=>!Gs.includes(e))},hn="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function es(t){return hn?!1:document.createElement("video").canPlayType(t)!==""}const gn={extension:{type:L.DetectionParser,priority:0},test:async()=>es("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},vn={extension:{type:L.DetectionParser,priority:0},test:async()=>es("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},mn={extension:{type:L.DetectionParser,priority:0},test:async()=>es("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},bn={extension:{type:L.DetectionParser,priority:0},test:async()=>ha("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class xn{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var i,l;let r=null,n=null;if(s.loadParser&&(n=this._parserHash[s.loadParser],n||ge(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!n){for(let p=0;p<this.parsers.length;p++){const u=this.parsers[p];if(u.load&&((i=u.test)!=null&&i.call(u,e,s,this))){n=u;break}}if(!n)return ge(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await n.load(e,s,this),a.parser=n;for(let p=0;p<this.parsers.length;p++){const u=this.parsers[p];u.parse&&u.parse&&await((l=u.testParse)==null?void 0:l.call(u,r,s,this))&&(r=await u.parse(r,s,this)||r,a.parser=u)}return r})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const r={},n=ta(e),i=Ze(e,u=>({alias:[u],src:u,data:{}})),l=i.length,p=i.map(async u=>{const c=ke.toAbsolute(u.src);if(!r[u.src])try{this.promiseCache[c]||(this.promiseCache[c]=this._getLoadPromiseAndParser(c,u)),r[u.src]=await this.promiseCache[c].promise,s&&s(++a/l)}catch(h){throw delete this.promiseCache[c],delete r[u.src],new Error(`[Loader.load] Failed to load ${c}.
${h}`)}});return await Promise.all(p),n?r[i[0].src]:r}async unload(e){const a=Ze(e,r=>({alias:[r],src:r})).map(async r=>{var l,p;const n=ke.toAbsolute(r.src),i=this.promiseCache[n];if(i){const u=await i.promise;delete this.promiseCache[n],await((p=(l=i.parser)==null?void 0:l.unload)==null?void 0:p.call(l,u,r,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&ge(`[Assets] loadParser name conflict "${s.name}"`):ge("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function We(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const yn=".json",_n="application/json",An={extension:{type:L.LoadParser,priority:Me.Low},name:"loadJson",test(t){return We(t,_n)||$e(t,yn)},async load(t){return await(await J.get().fetch(t)).json()}},wn=".txt",kn="text/plain",En={name:"loadTxt",extension:{type:L.LoadParser,priority:Me.Low,name:"loadTxt"},test(t){return We(t,kn)||$e(t,wn)},async load(t){return await(await J.get().fetch(t)).text()}},Sn=["normal","bold","100","200","300","400","500","600","700","800","900"],Tn=[".ttf",".otf",".woff",".woff2"],Pn=["font/ttf","font/otf","font/woff","font/woff2"],Rn=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Ln(t){const e=ke.extname(t),r=ke.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(l=>l.charAt(0).toUpperCase()+l.slice(1));let n=r.length>0;for(const l of r)if(!l.match(Rn)){n=!1;break}let i=r.join(" ");return n||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const In=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function On(t){return In.test(t)?t:encodeURI(t)}const Bn={extension:{type:L.LoadParser,priority:Me.Low},name:"loadWebFont",test(t){return We(t,Pn)||$e(t,Tn)},async load(t,e){var a,r,n;const s=J.get().getFontFaceSet();if(s){const i=[],l=((a=e.data)==null?void 0:a.family)??Ln(t),p=((n=(r=e.data)==null?void 0:r.weights)==null?void 0:n.filter(c=>Sn.includes(c)))??["normal"],u=e.data??{};for(let c=0;c<p.length;c++){const h=p[c],g=new FontFace(l,`url(${On(t)})`,{...u,weight:h});await g.load(),s.add(g),i.push(g)}return le.set(`${l}-and-url`,{url:t,fontFaces:i}),i.length===1?i[0]:i}return ge("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{le.remove(`${e.family}-and-url`),J.get().getFontFaceSet().delete(e)})}};function ts(t,e=1){var a;const s=(a=ft.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function ss(t,e,s){t.label=s,t._sourceOrigin=s;const a=new we({source:t,label:s}),r=()=>{delete e.promiseCache[s],le.has(s)&&le.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(ge("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),a.once("destroy",()=>{t.destroyed||(ge("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),a}const Cn=".svg",Fn="image/svg+xml",qn={extension:{type:L.LoadParser,priority:Me.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return We(t,Fn)||$e(t,Cn)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?$n(t):Mn(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function Mn(t,e,s,a){var W,P,$;const n=await(await J.get().fetch(t)).blob(),i=URL.createObjectURL(n),l=new Image;l.src=i,l.crossOrigin=a,await l.decode(),URL.revokeObjectURL(i);const p=document.createElement("canvas"),u=p.getContext("2d"),c=((W=e.data)==null?void 0:W.resolution)||ts(t),h=((P=e.data)==null?void 0:P.width)??l.width,g=(($=e.data)==null?void 0:$.height)??l.height;p.width=h*c,p.height=g*c,u.drawImage(l,0,0,h*c,g*c);const{parseAsGraphicsContext:S,...T}=e.data??{},Y=new sa({resource:p,alphaMode:"premultiply-alpha-on-upload",resolution:c,...T});return ss(Y,s,t)}async function $n(t){const s=await(await J.get().fetch(t)).text(),a=new Ur;return a.svg(s),a}const Wn=`(function () {
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
`;let Fe=null,Jt=class{constructor(){Fe||(Fe=URL.createObjectURL(new Blob([Wn],{type:"application/javascript"}))),this.worker=new Worker(Fe)}};Jt.revokeObjectURL=function(){Fe&&(URL.revokeObjectURL(Fe),Fe=null)};const jn=`(function () {
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
`;let qe=null;class ga{constructor(){qe||(qe=URL.createObjectURL(new Blob([jn],{type:"application/javascript"}))),this.worker=new Worker(qe)}}ga.revokeObjectURL=function(){qe&&(URL.revokeObjectURL(qe),qe=null)};let Hs=0,Yt;class Nn{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new Jt;s.addEventListener("message",a=>{s.terminate(),Jt.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Yt===void 0&&(Yt=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Yt&&(this._createdWorkers++,e=new ga().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((r,n)=>{this._queue.push({id:e,arguments:s,resolve:r,reject:n})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[Hs]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:Hs++,id:a})}}const Vs=new Nn,zn=[".jpeg",".jpg",".png",".webp",".avif"],Un=["image/jpeg","image/png","image/webp","image/avif"];async function Dn(t,e){var r;const s=await J.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const va={name:"loadTextures",extension:{type:L.LoadParser,priority:Me.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return We(t,Un)||$e(t,zn)},async load(t,e,s){var n;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Vs.isImageBitmapSupported()?a=await Vs.loadImageBitmap(t,e):a=await Dn(t,e):a=await new Promise((i,l)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?i(a):(a.onload=()=>{i(a)},a.onerror=l)});const r=new sa({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((n=e.data)==null?void 0:n.resolution)||ts(t),...e.data});return ss(r,s,t)},unload(t){t.destroy(!0)}},ma=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Gn=ma.map(t=>`video/${t.substring(1)}`);function Hn(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=Yn(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function Vn(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",r),t.load();function a(){n(),e()}function r(i){n(),s(i)}function n(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",r)}})}function Yn(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const Xn={name:"loadVideo",extension:{type:L.LoadParser,name:"loadVideo"},test(t){const e=We(t,Gn),s=$e(t,ma);return e||s},async load(t,e,s){var p,u;const a={...Ut.defaultOptions,resolution:((p=e.data)==null?void 0:p.resolution)||ts(t),alphaMode:((u=e.data)==null?void 0:u.alphaMode)||await Wr(),...e.data},r=document.createElement("video"),n={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(n).forEach(c=>{const h=n[c];h!==void 0&&r.setAttribute(c,h)}),a.muted===!0&&(r.muted=!0),Hn(r,t,a.crossorigin);const i=document.createElement("source");let l;if(t.startsWith("data:"))l=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const c=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();l=Ut.MIME_TYPES[c]||`video/${c}`}return i.src=t,l&&(i.type=l),new Promise(c=>{const h=async()=>{const g=new Ut({...a,resource:r});r.removeEventListener("canplay",h),e.data.preload&&await Vn(r),c(ss(g,s,t))};r.addEventListener("canplay",h),r.appendChild(i)})},unload(t){t.destroy(!0)}},ba={extension:{type:L.ResolveParser,name:"resolveTexture"},test:va.test,parse:t=>{var e;return{resolution:parseFloat(((e=ft.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},Kn={extension:{type:L.ResolveParser,priority:-2,name:"resolveJson"},test:t=>ft.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:ba.parse};class Qn{constructor(){this._detections=[],this._initialized=!1,this.resolver=new ft,this.loader=new xn,this.cache=le,this._backgroundLoader=new dn(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var n,i;if(this._initialized){ge("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let l=e.manifest;typeof l=="string"&&(l=await this.load(l)),this.resolver.addManifest(l)}const s=((n=e.texturePreference)==null?void 0:n.resolution)??1,a=typeof s=="number"?[s]:s,r=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=ta(e),r=Ze(e).map(l=>{if(typeof l!="string"){const p=this.resolver.getAlias(l);return p.some(u=>!this.resolver.hasKey(u))&&this.add(l),Array.isArray(p)?p[0]:p}return this.resolver.hasKey(l)||this.add({alias:l,src:l}),l}),n=this.resolver.resolve(r),i=await this._mapLoadToResolve(n,s);return a?i[r[0]]:i}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const r=this.resolver.resolveBundle(e),n={},i=Object.keys(r);let l=0,p=0;const u=()=>{s==null||s(++l/p)},c=i.map(h=>{const g=r[h];return p+=Object.keys(g).length,this._mapLoadToResolve(g,u).then(S=>{n[h]=S})});return await Promise.all(c),a?n[e[0]]:n}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return le.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=le.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(a,s);this._backgroundLoader.active=!0;const n={};return a.forEach(i=>{const l=r[i.src],p=[i.src];i.alias&&p.push(...i.alias),p.forEach(u=>{n[u]=l}),le.set(p,l)}),n}async unload(e){this._initialized||await this.init();const s=Ze(e).map(r=>typeof r!="string"?r.src:r),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=Ze(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(r=>this._unloadFromResolved(s[r]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{le.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,r)=>s.indexOf(a)===r),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const Be=new Qn;ve.handleByList(L.LoadParser,Be.loader.parsers).handleByList(L.ResolveParser,Be.resolver.parsers).handleByList(L.CacheParser,Be.cache.parsers).handleByList(L.DetectionParser,Be.detections);ve.add(fn,un,pn,bn,gn,vn,mn,An,En,Bn,qn,va,Xn,cn,ln,ba,Kn);const Ys={loader:L.LoadParser,resolver:L.ResolveParser,cache:L.CacheParser,detection:L.DetectionParser};ve.handle(L.Asset,t=>{const e=t.ref;Object.entries(Ys).filter(([s])=>!!e[s]).forEach(([s,a])=>ve.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(Ys).filter(s=>!!e[s]).forEach(s=>ve.remove(e[s]))});class Jn extends jr{constructor(e,s){const{text:a,resolution:r,style:n,anchor:i,width:l,height:p,roundPixels:u,...c}=e;super({...c}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=n,this.resolution=r??null,this.allowChildren=!1,this._anchor=new Nr({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=u??!1,l!==void 0&&(this.width=l),p!==void 0&&(this.height=p)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,r=-s*this.anchor.x;let n=0;return e.x>=r&&e.x<=r+s&&(n=-a*this.anchor.y,e.y>=n&&e.y<=n+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function Zn(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(ct(dt,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class ei extends Jn{constructor(...e){const s=Zn(e,"Text");super(s,aa),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=Dr.measureText(this._text,this._style),{width:r,height:n}=a;e.minX=-s._x*r,e.maxX=e.minX+r,e.minY=-s._y*n,e.maxY=e.minY+n}}var ti=V('<p style="color: red;" class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Error:</strong> </p>'),si=V('<div class="svelte-1t2q5b9"> </div>'),ai=V('<details class="svelte-1t2q5b9"><summary class="svelte-1t2q5b9"> </summary> <!></details>'),ri=V(`<div style="
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
  " class="svelte-1t2q5b9"><h3 class="svelte-1t2q5b9">🎰 Oma-peli Debug</h3> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Status:</strong> </p> <!> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Base:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">BG URL:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Sample:</strong> </p> <!></div>`),ni=V('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-1t2q5b9"> </div>'),ii=V('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-1t2q5b9"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-1t2q5b9"> </span></div>'),oi=V(`<div style="
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
      " class="svelte-1t2q5b9">Jatka pelaamista</button></div>`),li=V(`<div style="
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
  " class="svelte-1t2q5b9"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-1t2q5b9">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-1t2q5b9">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-1t2q5b9"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-1t2q5b9"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-1t2q5b9">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Rockabilly: 3x=5 | 4x=25 | 5x=100 🎸</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Blonde: 3x=5 | 4x=20 | 5x=75 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Brunette: 3x=3 | 4x=15 | 5x=50 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-1t2q5b9">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Hot Rod: 3x=2 | 4x=7 | 5x=25 🚗</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Jacket: 3x=2 | 4x=7 | 5x=25 🧥</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Roller Skates: 3x=1.5 | 4x=5 | 5x=20 🛼</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Microphone: 3x=1.5 | 4x=5 | 5x=20 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-1t2q5b9">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Burger: 3x=0.5 | 4x=2 | 5x=10 🍔</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Fries: 3x=0.5 | 4x=2 | 5x=10 🍟</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">Milkshake: 3x=0.3 | 4x=1 | 5x=5 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-1t2q5b9">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter)</div> <div style="margin: 5px 0;" class="svelte-1t2q5b9">SCATTER 📌 - 5-12 symbolia = 8-15 FREE SPINS</div></div> <div style="background: rgba(255, 215, 0, 0.15); padding: 10px; border-radius: 8px; border: 2px solid #ffd700;" class="svelte-1t2q5b9"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-1t2q5b9">✨ WIN MULTIPLIERS</div> <div style="margin: 5px 0; color: #fff;" class="svelte-1t2q5b9">Base Game: 1x (50%) | 2x (30%) | 3x (20%)</div> <div style="margin: 5px 0; color: #00ff00;" class="svelte-1t2q5b9">Free Spins: 3x (50%) | 5x (30%) | 10x (20%)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-1t2q5b9">Kaikki voitot kerrotaan panoksella (Bet) ja sitten Win Multiplierilla</div> <button style="
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
      " class="svelte-1t2q5b9">Sulje</button></div>`),ci=V('<div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #ff00ff; font-size: 16px; animation: pulse 1s infinite;" class="svelte-1t2q5b9"><span class="svelte-1t2q5b9">🎰 FREE SPINS:</span> <span class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-top: 1px solid #555; padding-top: 8px;" class="svelte-1t2q5b9"><span style="color: #fff; font-size: 14px;" class="svelte-1t2q5b9">Total Won:</span> <span style="color: #00ff00; font-size: 14px;" class="svelte-1t2q5b9"> </span></div>',1),di=V(`<div style="
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
        " class="svelte-1t2q5b9">⏹ STOP</button></div>`),fi=V(`<div style="
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
          " class="svelte-1t2q5b9">Cancel</button></div>`),pi=V(`<button style="
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
      " class="svelte-1t2q5b9">🔄 AUTOPLAY</button> <!>`,1),ui=V(`<!> <!> <!> <div class="svelte-1t2q5b9"></div> <div class="svelte-1t2q5b9"><!> <div style="display: flex; justify-content: space-between; margin-bottom: 8px;" class="svelte-1t2q5b9"><span style="color: #fff;" class="svelte-1t2q5b9">CREDITS:</span> <span style="color: #ffd700;" class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; border-top: 1px solid #555; padding-top: 8px;" class="svelte-1t2q5b9"><span style="color: #fff;" class="svelte-1t2q5b9">BET:</span> <span style="color: #00ff00;" class="svelte-1t2q5b9"> </span></div></div> <div style="
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
  " class="svelte-1t2q5b9"><span style="color: #aaa;" class="svelte-1t2q5b9">Free Spins Played:</span> <span style="color: #66ccff;" class="svelte-1t2q5b9"> </span></div> <button style="
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
" class="svelte-1t2q5b9"><!></div> <button class="svelte-1t2q5b9"> </button> <button title="SPIN" class="svelte-1t2q5b9"></button>`,1);function hi(t,e){Js(e,!0);const s=13,a=1445,r=1e3,n=1.75,i=-30,l=-10,p=160,u=0,c=720,h=750,g=.8,S=50,T=30,Y=-40,W=1,P="height",K=Math.round(100*n),Q=Math.round(K*(700/760)),et=Q+10,me=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],N=typeof window<"u"&&window.location.hostname.includes("github.io")?"/web-sdk/oma-peli/symbols":`${Qe}/symbols`,je={a:`${N}/Blue_hotrod.jpg`,b:`${N}/Blue_jacket.jpg`,c:`${N}/Blue_rollers.jpg`,d:`${N}/Blue_speakers.jpg`,e:`${N}/Premium_blonde.jpg`,f:`${N}/Premium_brunette.jpg`,g:`${N}/Premium_rocker.jpg`,h:`${N}/New_Wild.jpg`,i:`${N}/Red_burger.jpg`,j:`${N}/Red_fries.jpg`,k:`${N}/Red_milkshake.jpg`,l:`${N}/Scatter.jpg`,emptyslot:`${N}/Emptyslot.jpg`},pt=`${N}/bg_base.jpg`,as=`${N}/ReelFrames.png`,rs=`${N}/RockABillyReels_logo.png`,ns={spin:`${Qe}/sounds/spin.mp3`,stop:`${Qe}/sounds/stop.mp3`,win:`${Qe}/sounds/win.mp3`};let be=F(!0),st={},at=null,Ee=null,Ne=null,ze=null,Ue=F("Initializing..."),Se=F(""),te=[],ce=F(1e3),X=F(10);const is=1,ut=100;let xe=F(!1),Te=F(0),De=F(!1),xa=F(0),ye=!1,ie=null,ht=!1,Ge=F(0),Pe=F(0),He=F(0),gt=F(0),vt=Fs(()=>o(Pe)>0?(o(He)/o(Pe)*100).toFixed(2):"0.00"),mt=Fs(()=>o(Ge)>0?(o(gt)/o(Ge)*100).toFixed(2):"0.00"),ae=F(!1),de=F(0),_e=F(0),bt=F(0),xt=F(0);const os={k:.18,j:.13,i:.13,c:.065,d:.065,b:.047,a:.047,f:.022,e:.013,g:.009,l:.071,h:0,emptyslot:.44};function ls(f){if(f===6)return Math.random()<.7?"emptyslot":"h";const v=Math.random();let d=0;const A=me.filter(k=>k!=="h"),b=A.reduce((k,I)=>k+os[I],0);for(const k of A)if(d+=os[k]/b,v<d)return k;return"k"}function cs(){const f=[];for(let v=0;v<s;v++)f.push(ls(v));return f}function ya(f){return f<3?{col:0,row:f}:f<6?{col:1,row:f-3}:f===6?{col:2,row:0}:f<10?{col:3,row:f-7}:{col:4,row:f-10}}function Ve(f,v){return f===0?v:f===1?3+v:f===2?6:f===3?7+v:f===4?10+v:-1}function _a(){const f=Math.random();return o(ae)?f<.6?2:f<.9?3:5:f<.5?2:f<.8?3:5}const ds={k:{3:.282,4:.94,5:4.7},j:{3:.47,4:1.88,5:9.4},i:{3:.47,4:1.88,5:9.4},c:{3:1.41,4:4.7,5:18.8},d:{3:1.41,4:4.7,5:18.8},b:{3:1.88,4:6.58,5:23.5},a:{3:1.88,4:6.58,5:23.5},f:{3:2.82,4:14.1,5:47},e:{3:4.7,4:18.8,5:70.5},g:{3:4.7,4:23.5,5:94},h:{},l:{},emptyslot:{}};function Aa(){var H,O;const f=[],v=[];for(let E=0;E<s;E++)z[E]==="l"&&v.push(E);if(v.length>=5){const E=8+(v.length-5);w(de,o(de)+E),o(ae)?console.log(`🎰 FREE SPINS RETRIGGERED! +${E} FREE SPINS! Total: ${o(de)}`):(w(ae,!0),w(_e,0),Oe(bt),console.log(`🎰 FREE SPINS TRIGGERED! ${v.length} scatters = ${E} FREE SPINS!`)),f.push({symbol:"l",count:v.length,payout:0,positions:v,multiplier:1})}z[0],z[1],z[2],z[3],z[4],z[5],z[6],z[7],z[8],z[9],z[10],z[11],z[12];const d=[];for(let E=0;E<3;E++)for(let _=0;_<3;_++)if(!(Math.abs(E-_)>1)){for(let C=0;C<1;C++)if(!(Math.abs(_-C)>1)){for(let B=0;B<3;B++)if(!(Math.abs(C-B)>1))for(let R=0;R<3;R++){if(Math.abs(B-R)>1)continue;const Z=[Ve(0,E),Ve(1,_),Ve(2,C),Ve(3,B),Ve(4,R)];d.push(Z)}}}console.log(`Generated ${d.length} possible paths (should be 54)`);const A=[];for(const E of d){const _=E.map(R=>z[R]);if(_[0]==="emptyslot"||_[0]==="l")continue;let C=null;for(let R=0;R<_.length;R++)if(_[R]!=="h"&&_[R]!=="emptyslot"&&_[R]!=="l"){C=_[R];break}if(!C)continue;let B=0;for(let R=0;R<_.length;R++){const Z=_[R];if(Z===C||Z==="h")B++;else break}if(B>=3){const Z=E[0]%3;A.push({symbol:C,length:B,path:E.slice(0,B),startRow:Z})}}const b=[],k=new Map;for(const E of A){const _=`${E.symbol}-${E.path.join(",")}`;k.has(_)||k.set(_,[]),k.get(_).push(E)}for(const[E,_]of k.entries()){const C=Math.max(..._.map(R=>R.length)),B=_.find(R=>R.length===C);B&&b.push(B)}const I=[],U=new Map,j=b.length>0?_a():1;for(const E of b){const _=(H=ds[E.symbol])==null?void 0:H[E.length];if(_!==void 0&&_>0){const C=`${E.symbol}-${E.length}`;U.has(C)||U.set(C,{symbol:E.symbol,length:E.length,paths:[],multiplier:j,totalPayout:0});const B=U.get(C);B.paths.push(E.path);const R=_*o(X)*j;B.totalPayout+=R}}for(const[E,_]of U.entries()){const C=(O=ds[_.symbol])==null?void 0:O[_.length];console.log(`  ${_.length}x${_.symbol}: ${_.paths.length} ways x ${C}x x ${o(X)} x ${_.multiplier} = ${_.totalPayout}`),I.push({symbol:_.symbol,count:_.length,payout:_.totalPayout,positions:_.paths[0],multiplier:_.multiplier})}return f.push(...I),f}let Ae=F(0),Re=F(pe([])),fe=F(!1),rt=F(!1);const wa={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function yt(f){if(!o(be)||!st[f])return;const v=st[f];v.currentTime=0,v.play().catch(d=>{console.warn("Äänen toisto epäonnistui:",f,d)})}function ka(f){Ye.forEach(v=>M.stage.removeChild(v)),Ye=[],f.forEach(v=>{v.positions.forEach(d=>{const A=Le[d],b=new Dt().rect(0,0,K,Q).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});b.x=A.container.x,b.y=A.container.y,M.stage.addChild(b),Ye.push(b);let k=0,I=1;const U=.05;M.ticker.add(()=>{k+=I*U,k>=.4&&(I=-1),k<=0&&(I=1),b.alpha=.5+k})})})}function _t(){Ye.forEach(f=>M.stage.removeChild(f)),Ye=[]}let z=cs(),At,M,Le=[],Ye=[];class Ea{constructor(v,d){se(this,"index");se(this,"container");se(this,"offset",0);se(this,"speed",0);se(this,"targetSpeed",30);se(this,"state","idle");se(this,"stopDelay",0);se(this,"bounceOffset",0);se(this,"bounceSpeed",0);se(this,"bounceFrames",0);this.index=v,this.container=d}start(v){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=v}update(){this.state!=="idle"&&(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"&&(this.speed*=.92,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,yt("stop"))),this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=et&&(this.offset=0,z[this.index]=ls(this.index))))}draw(){const v=this.container;v.removeChildren();const d=z[this.index];if(!d||!at||!at[d])return;const A=at[d];if(!A)return;const b=this.offset+this.bounceOffset,k=new it(A);k.width=K,k.height=Q,k.x=0,k.y=b,v.addChild(k)}}Zs(async()=>{M=new pa,await M.init({width:a,height:r,background:"#001a33"}),At.appendChild(M.canvas);const f={};try{w(Ue,"Loading background and UI images..."),te.push(`Loading background: ${pt}`),te.push(`Loading reel frames: ${as}`),te.push(`Loading logo: ${rs}`),await Be.load([{alias:"background",src:pt},{alias:"reelframes",src:as},{alias:"logo",src:rs}]),Ee=we.from("background"),Ne=we.from("reelframes"),ze=we.from("logo"),console.log("✅ Background texture created:",Ee.width,"x",Ee.height),console.log("✅ Reel frames texture created:",Ne.width,"x",Ne.height),console.log("✅ Logo texture created:",ze.width,"x",ze.height),te.push("✅ All UI images loaded"),w(Ue,"Loading symbols...");const d=[];for(const A of me)d.push({alias:A,src:je[A]});await Be.load(d);for(const A of me){const b=je[A];te.push(`Loading symbol ${A}: ${b}`);try{const k=we.from(A);f[A]=k,console.log(`✅ Symbol ${A} loaded:`,k.width,"x",k.height),te.push(`✅ Symbol ${A} loaded`)}catch(k){const I=`❌ Failed to load symbol ${A} from ${b}: ${k}`;throw te.push(I),console.error(I),new Error(I)}}at=f,w(Ue,"Assets loaded successfully!")}catch(d){w(Se,`Asset loading failed: ${d}`),te.push(o(Se)),console.error(o(Se));return}console.log("Ladataan ääniefektit...");for(const[d,A]of Object.entries(ns)){const b=new Audio;b.src=A,b.preload="auto",b.volume=.7,b.load(),b.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${A} (käytetään hiljaista placeholderia)`)}),st[d]=b}console.log("Ladataan ääniefektit...");for(const[d,A]of Object.entries(ns)){const b=new Audio;b.src=A,b.preload="auto",b.volume=.7,b.load(),b.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${A} (käytetään hiljaista placeholderia)`)}),st[d]=b}if(console.log("Taustakuva ladattu, tekstuuri:",Ee),Ee){const d=new it(Ee);M.renderer.width/M.renderer.height;const A=d.texture.width/d.texture.height;let b;b=M.renderer.height/d.texture.height,b*=W,d.scale.set(b),d.x=(M.renderer.width-d.width)/2,d.y=(M.renderer.height-d.height)/2+Y,M.stage.addChild(d),console.log("Taustakuva lisätty:",P,"mode, size:",d.width.toFixed(0),"x",d.height.toFixed(0),"image aspect:",A.toFixed(2),"scale:",b.toFixed(2),"pos:",d.x.toFixed(0),d.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(d=>({x:d.x+i,y:d.y+l})),Le=[];for(let d=0;d<s;d++){const A=ya(d),b=A.col,k=A.row,I=300+b*(K+20),U=250+k*(Q+15),j=d===6?I+u:I,H=d===6?U+p:U,O=new Zt;O.x=j+i,O.y=H+l;const E=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],_=new Dt().rect(0,0,K,Q).fill({color:E[d],alpha:.3});_.x=O.x,_.y=O.y,M.stage.addChild(_);const C=new aa({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),B=new ei({text:d.toString(),style:C});B.x=O.x+5,B.y=O.y+5,M.stage.addChild(B);const R=new Dt().rect(0,0,K,Q).fill(16777215);R.x=O.x,R.y=O.y,O.mask=R,M.stage.addChild(R),M.stage.addChild(O),Le.push(new Ea(d,O))}if(Ne){const d=new it(Ne);d.scale.set(1),d.x=250,d.y=200,M.stage.addChild(d),console.log("Reel frames lisätty:",d.width.toFixed(0),"x",d.height.toFixed(0))}if(ze){const d=new it(ze);d.scale.set(g),d.x=(M.renderer.width-d.width)/2+S,d.y=T,M.stage.addChild(d),console.log("Logo lisätty päällimmäiseen layeriin:",d.width.toFixed(0),"x",d.height.toFixed(0))}M.ticker.add(Sa)});function Sa(){for(const f of Le)f.update(),f.draw();if(!o(fe)&&!ht&&Le.every(f=>f.state==="stopped")){ht=!0;const f=Aa();console.log(`Checking wins, found ${f.length} wins`),f.length>0?(w(Re,pe(f)),w(Ae,pe(f.reduce((v,d)=>v+d.payout,0))),Ta(o(Ae)),w(fe,!0),w(xa,pe(Date.now())),console.log(`🎉 VOITTO! ${o(Ae)} pistettä! Uusi saldo: ${o(ce)}`),console.log(`isShowingWin set to: ${o(fe)}, totalWin: ${o(Ae)}`),f.forEach(v=>{const d=v.multiplier?` (${v.multiplier}x multiplier)`:"";console.log(`${v.count}x ${v.symbol} = ${v.payout} pistettä${d}`)}),ka(f),yt("win"),o(ae)&&o(de)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${o(_e)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${o(_e).toFixed(2)}`),w(ae,!1),w(_e,0)},2e3)),o(xe)&&!ye&&(ye=!0,ie=window.setTimeout(()=>{o(fe)&&o(xe)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),w(fe,!1),_t()),ie=window.setTimeout(()=>{ye=!1,kt()},200)},1500))):(console.log("No wins found this spin"),o(xe)&&!ye&&(ye=!0,ie=window.setTimeout(()=>{ye=!1,kt()},1e3)))}}function fs(){if(o(ae)&&o(de)>0)Oe(de,-1),Oe(xt),console.log(`🎰 FREE SPIN! Remaining: ${o(de)}`);else if(!o(ae)){if(o(ce)<o(X)){alert(`Not enough credits! Balance: ${o(ce)}, Bet: ${o(X)}`),wt();return}w(ce,o(ce)-o(X)),Oe(Ge),w(Pe,o(Pe)+o(X))}ie!==null&&(clearTimeout(ie),ie=null),w(Re,pe([])),w(Ae,0),w(fe,!1),ht=!1,_t(),z=cs(),Le.forEach((f,v)=>f.start(60+v*10)),yt("spin")}function Ta(f){w(ce,o(ce)+f),w(He,o(He)+f),o(ae)&&w(_e,o(_e)+f),f>0&&Oe(gt)}function Pa(){o(X)<ut&&w(X,pe(Math.min(o(X)+1,ut)))}function Ra(){o(X)>is&&w(X,pe(Math.max(o(X)-1,is)))}function La(){w(X,ut)}function Xe(f){w(xe,!0),w(Te,pe(f)),w(De,!1),kt()}function wt(){w(xe,!1),w(Te,0),ye=!1,ie!==null&&(clearTimeout(ie),ie=null)}function kt(){if(!o(xe)||o(Te)<=0){wt();return}console.log(`Autoplay: Starting spin ${o(Te)} rounds left`),fs(),Oe(Te,-1)}function Ia(){confirm("Reset all statistics?")&&(w(Ge,0),w(Pe,0),w(He,0),w(gt,0),w(bt,0),w(xt,0))}var ps=ui(),us=Ce(ps);{var Oa=f=>{var v=ri(),d=m(x(v),2),A=m(x(d));y(d);var b=m(d,2);{var k=B=>{var R=ti(),Z=m(x(R));y(R),re(()=>q(Z,` ${o(Se)??""}`)),G(B,R)};ee(b,B=>{o(Se)&&B(k)})}var I=m(b,2),U=m(x(I));U.nodeValue=` ${Qe??""}`,y(I);var j=m(I,2),H=m(x(j));H.nodeValue=` ${pt??""}`,y(j);var O=m(j,2),E=m(x(O));y(O);var _=m(O,2);{var C=B=>{var R=ai(),Z=x(R),Ja=x(Z);y(Z);var Za=m(Z,2);Ws(Za,17,()=>te,$s,(er,tr)=>{var Wt=si(),sr=x(Wt,!0);y(Wt),re(()=>q(sr,o(tr))),G(er,Wt)}),y(R),re(()=>q(Ja,`Log (${te.length??""})`)),G(B,R)};ee(_,B=>{te.length>0&&B(C)})}y(v),re(()=>{q(A,` ${o(Ue)??""}`),q(E,` ${je.a??""}`)}),G(f,v)};ee(us,f=>{(o(Ue)!=="Assets loaded successfully!"||o(Se))&&f(Oa)})}var hs=m(us,2);{var Ba=f=>{var v=oi(),d=m(x(v),2),A=x(d);y(d);var b=m(d,2);Ws(b,17,()=>o(Re),$s,(j,H)=>{var O=ni(),E=x(O);y(O),re(_=>q(E,`${o(H).count??""} × ${wa[o(H).symbol]??""} = ${_??""} pistettä`),[()=>o(H).payout.toFixed(2)]),G(j,O)});var k=m(b,2);{var I=j=>{var H=ii(),O=x(H),E=x(O);y(O),y(H),re(()=>q(E,`✨ ${o(Re)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),G(j,H)};ee(k,j=>{o(Re).length>0&&o(Re)[0].multiplier>1&&j(I)})}var U=m(k,2);y(v),re(()=>q(A,`${o(Ae)??""} pistettä`)),D("click",U,()=>{w(fe,!1),_t(),console.log("Win popup closed, ready for next spin")}),G(f,v)};ee(hs,f=>{o(Ae)>0&&o(fe)&&f(Ba)})}var gs=m(hs,2);{var Ca=f=>{var v=li(),d=m(x(v),8);y(v),D("click",d,()=>{w(rt,!1)}),G(f,v)};ee(gs,f=>{o(rt)&&f(Ca)})}var vs=m(gs,2);Cr(vs,f=>At=f,()=>At);var nt=m(vs,2),ms=x(nt);{var Fa=f=>{var v=ci(),d=Ce(v),A=m(x(d),2),b=x(A,!0);y(A),y(d);var k=m(d,2),I=m(x(k),2),U=x(I,!0);y(I),y(k),re(j=>{q(b,o(de)),q(U,j)},[()=>o(_e).toFixed(2)]),G(f,v)};ee(ms,f=>{o(ae)&&f(Fa)})}var Et=m(ms,2),bs=m(x(Et),2),qa=x(bs,!0);y(bs),y(Et);var xs=m(Et,2),ys=m(x(xs),2),Ma=x(ys,!0);y(ys),y(xs),y(nt);var St=m(nt,2),_s=m(x(St),2),As=x(_s),Tt=m(As,2),$a=x(Tt,!0);y(Tt);var ws=m(Tt,2),Wa=m(ws,2);y(_s),y(St);var ks=m(St,2),Pt=m(ks,2),Rt=m(x(Pt),2),Es=m(x(Rt),2),ja=x(Es,!0);y(Es),y(Rt);var Lt=m(Rt,2),Ss=m(x(Lt),2),Na=x(Ss,!0);y(Ss),y(Lt);var It=m(Lt,2),Ts=m(x(It),2),za=x(Ts,!0);y(Ts),y(It);var Ot=m(It,2),Bt=m(x(Ot),2),Ua=x(Bt);y(Bt),y(Ot);var Ct=m(Ot,2),Ft=m(x(Ct),2),Da=x(Ft);y(Ft),y(Ct);var qt=m(Ct,2),Ps=m(x(qt),2),Ga=x(Ps,!0);y(Ps),y(qt);var Mt=m(qt,2),Rs=m(x(Mt),2),Ha=x(Rs,!0);y(Rs),y(Mt);var Va=m(Mt,2);y(Pt);var $t=m(Pt,2),Ya=x($t);{var Xa=f=>{var v=di(),d=m(x(v),2),A=x(d);y(d);var b=m(d,2);y(v),re(()=>q(A,`${o(Te)??""} left`)),D("click",b,wt),G(f,v)},Ka=f=>{var v=pi(),d=Ce(v),A=m(d,2);{var b=k=>{var I=fi(),U=m(x(I),2),j=m(U,2),H=m(j,2),O=m(H,2),E=m(O,2),_=m(E,2);y(I),D("click",U,()=>Xe(10)),D("click",j,()=>Xe(100)),D("click",H,()=>Xe(1e3)),D("click",O,()=>Xe(1e4)),D("click",E,()=>Xe(1e5)),D("click",_,()=>{w(De,!1)}),G(k,I)};ee(A,k=>{o(De)&&k(b)})}D("click",d,()=>{w(De,!o(De))}),G(f,v)};ee(Ya,f=>{o(xe)?f(Xa):f(Ka,!1)})}y($t);var Ie=m($t,2),Qa=x(Ie,!0);y(Ie);var Ls=m(Ie,2);he(Ls,"style",`
    position: absolute;
    left: ${c}px;                    /* X-koordinaatti (säädettävissä) */
    top: ${h}px;                     /* Y-koordinaatti (säädettävissä) */
    width: 60px;                           /* Napin leveys */
    height: 60px;                          /* Napin korkeus */
    border-radius: 50%;                    /* Pyöreä muoto */
    background-color: rgba(0,255,0,0.2);   /* Vihreä, läpinäkyvä */
    border: 2px solid rgba(0,255,0,0.5);   /* Vihreä reunus */
    cursor: pointer;                       /* Käsi-kursori hover:ssa */
    z-index: 1000;                         /* Varmista että nappi on päällimmäisenä */
    font-size: 0;                          /* Piilota teksti */
  `),re((f,v,d,A,b,k)=>{he(nt,"style",`
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
`),q(qa,f),q(Ma,o(X)),q($a,o(X)),q(ja,v),q(Na,d),q(za,A),he(Bt,"style",`color: ${b??""};`),q(Ua,`${o(vt)??""}%`),he(Ft,"style",`color: ${k??""};`),q(Da,`${o(mt)??""}%`),q(Ga,o(bt)),q(Ha,o(xt)),he(Ie,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(o(be)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(o(be)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),he(Ie,"title",o(be)?"Mykistä äänet":"Laita äänet päälle"),q(Qa,o(be)?"🔊":"🔇")},[()=>o(ce).toLocaleString(),()=>o(Ge).toLocaleString(),()=>o(Pe).toLocaleString(),()=>o(He).toLocaleString(),()=>parseFloat(o(vt))>=95?"#00ff00":parseFloat(o(vt))>=85?"#ffff00":"#ff6666",()=>parseFloat(o(mt))>=30?"#00ff00":parseFloat(o(mt))>=20?"#ffff00":"#ff6666"]),D("click",As,Ra),D("click",ws,Pa),D("click",Wa,La),D("click",ks,()=>{w(rt,!o(rt))}),D("click",Va,Ia),D("click",Ie,()=>{w(be,!o(be))}),D("click",Ls,fs),G(t,ps),ea()}var gi=V('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),vi=V('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function mi(t,e){Js(e,!1);let s=Fr(e,"isAuthenticated",12,!1),a=Xt(""),r=Xt(!1);const n="slot2024";function i(){o(a)===n?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(w(r,!0),w(a,""),setTimeout(()=>w(r,!1),3e3))}Zs(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),lr();var l=or(),p=Ce(l);{var u=c=>{var h=vi(),g=x(h),S=m(x(g),4),T=x(S);Yr(T),Br(2),y(S);var Y=m(S,2);{var W=P=>{var $=gi();G(P,$)};ee(Y,P=>{o(r)&&P(W)})}y(g),y(h),Kr(T,()=>o(a),P=>w(a,P)),D("submit",S,Qr(i)),G(c,h)};ee(p,c=>{s()||c(u)})}G(t,l),ea()}var bi=V('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),xi=V("<!> <!>",1);function Ii(t){let e=Xt(!1);var s=xi(),a=Ce(s);mi(a,{get isAuthenticated(){return o(e)},set isAuthenticated(i){w(e,i)},$$legacy:!0});var r=m(a,2);{var n=i=>{var l=bi(),p=m(Ce(l),2);hi(p,{}),G(i,l)};ee(r,i=>{o(e)&&i(n)})}G(t,s)}export{la as A,na as C,nn as R,en as S,ca as V,Ii as _,Zr as u};
