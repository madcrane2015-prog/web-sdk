const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./3hPoXhvc.js","./DNWEu6uq.js","./DEliLNnF.js","./DWgShhht.js","./C04N3yhf.js","./C2GHuDhf.js","./OR9T7Yf6.js","./QXAqfywq.js"])))=>i.map(i=>d[i]);
var ar=Object.defineProperty;var rr=(t,e,s)=>e in t?ar(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var te=(t,e,s)=>rr(t,typeof e!="symbol"?e+"":e,s);import{f as nr,l as ir,t as V,g as D,a as G,d as or}from"./DRDKHArV.js";import{i as lr}from"./Dw5_DM93.js";import{y as ie,j as cr,a8 as dr,F as o,Q as fr,aa as pr,ab as Ls,h as Is,e as jt,k as Ke,l as ur,ac as Ys,w as Xs,ad as hr,q as Ks,a7 as gr,U as vr,a2 as Os,aq as Nt,z as Bs,ar as mr,as as br,at as xr,o as yr,au as _r,av as Ar,aw as wr,ax as kr,b as Er,ay as Sr,az as Tr,a6 as Rr,aA as Pr,aB as Lr,D as Ir,L as Or,p as Qs,ah as B,ag as Js,T as k,aC as Ie,f as Be,s as m,c as y,r as _,t as se,I as Cs,a as Zs,aD as Br,aE as Xt}from"./DWgShhht.js";import{_ as Fs,p as fe,i as Z}from"./DEliLNnF.js";import{s as C}from"./4RjN9yQL.js";import{b as Cr,p as Fr}from"./B1_V_3zc.js";import{b as Qe}from"./_2zz98R0.js";import{e as ge,E as L,a as qr,C as Zt,Q as ct,V as dt,N as zt,D as J,H as $r,p as Ae,a0 as qe,a1 as we,a2 as Mr,w as he,a3 as Ze,a4 as ea,a5 as $e,a6 as oe,a7 as ft,a8 as ta,a9 as Wr,aa as Ut,ab as jr,ac as Nr,y as it}from"./DNWEu6uq.js";import{A as zr,B as qs,G as Ur,T as sa,a as Dr,b as Dt}from"./C04N3yhf.js";function $s(t,e){return e}function Gr(t,e,s,a){for(var r=[],n=e.length,i=0;i<n;i++)xr(e[i].e,r,!0);var l=n>0&&r.length===0&&s!==null;if(l){var p=s.parentNode;yr(p),p.append(s),a.clear(),pe(t,e[0].prev,e[n-1].next)}_r(r,()=>{for(var u=0;u<n;u++){var c=e[u];l||(a.delete(c.k),pe(t,c.prev,c.next)),Ar(c.e,!l)}})}function Ms(t,e,s,a,r,n=null){var i=t,l={flags:e,items:new Map,first:null};ie&&cr();var p=null,u=!1,c=fr(()=>{var h=s();return gr(h)?h:h==null?[]:Ks(h)});dr(()=>{var h=o(c),g=h.length;if(u&&g===0)return;u=g===0;let S=!1;if(ie){var T=i.data===pr;T!==(g===0)&&(i=Ls(),Is(i),jt(!1),S=!0)}if(ie){for(var Y=null,M,R=0;R<g;R++){if(Ke.nodeType===8&&Ke.data===ur){i=Ke,S=!0,jt(!1);break}var q=h[R],K=a(q,R);M=aa(Ke,l,Y,null,q,K,R,r,e,s),l.items.set(K,M),Y=M}g>0&&Is(Ls())}ie||Hr(h,l,i,r,e,a,s),n!==null&&(g===0?p?Ys(p):p=Xs(()=>n(i)):p!==null&&hr(p,()=>{p=null})),S&&jt(!0),o(c)}),ie&&(i=Ke)}function Hr(t,e,s,a,r,n,i){var l=t.length,p=e.items,u=e.first,c=u,h,g=null,S=[],T=[],Y,M,R,q;for(q=0;q<l;q+=1){if(Y=t[q],M=n(Y,q),R=p.get(M),R===void 0){var K=c?c.e.nodes_start:s;g=aa(K,e,g,g===null?e.first:g.next,Y,M,q,a,r,i),p.set(M,g),S=[],T=[],c=g.next;continue}if(Vr(R,Y,q),(R.e.f&Nt)!==0&&Ys(R.e),R!==c){if(h!==void 0&&h.has(R)){if(S.length<T.length){var Q=T[0],ae;g=Q.prev;var et=S[0],ve=S[S.length-1];for(ae=0;ae<S.length;ae+=1)Ws(S[ae],Q,s);for(ae=0;ae<T.length;ae+=1)h.delete(T[ae]);pe(e,et.prev,ve.next),pe(e,g,et),pe(e,ve,Q),c=Q,g=ve,q-=1,S=[],T=[]}else h.delete(R),Ws(R,c,s),pe(e,R.prev,R.next),pe(e,R,g===null?e.first:g.next),pe(e,g,R),g=R;continue}for(S=[],T=[];c!==null&&c.k!==M;)(c.e.f&Nt)===0&&(h??(h=new Set)).add(c),T.push(c),c=c.next;if(c===null)continue;R=c}S.push(R),g=R,c=R.next}if(c!==null||h!==void 0){for(var tt=h===void 0?[]:Ks(h);c!==null;)(c.e.f&Nt)===0&&tt.push(c),c=c.next;var j=tt.length;if(j>0){var We=null;Gr(e,tt,We,p)}}Bs.first=e.first&&e.first.e,Bs.last=g&&g.e}function Vr(t,e,s,a){br(t.v,e),t.i=s}function aa(t,e,s,a,r,n,i,l,p,u){var c=(p&wr)!==0,h=(p&kr)===0,g=c?h?vr(r):Os(r):r,S=(p&mr)===0?i:Os(i),T={i:S,v:g,k:n,a:null,e:null,prev:s,next:a};try{return T.e=Xs(()=>l(t,g,S,u),ie),T.e.prev=s&&s.e,T.e.next=a&&a.e,s===null?e.first=T:(s.next=T,s.e.next=T.e),a!==null&&(a.prev=T,a.e.prev=T.e),T}finally{}}function Ws(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,r=e?e.e.nodes_start:s,n=t.e.nodes_start;n!==a;){var i=Er(n);r.before(n),n=i}}function pe(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function Yr(t){if(ie){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;ue(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var r=t.checked;ue(t,"checked",null),t.checked=r}}};t.__on_r=s,Sr(s),nr()}}function ue(t,e,s,a){var r=t.__attributes??(t.__attributes={});ie&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Tr]=s),s==null?t.removeAttribute(e):typeof s!="string"&&Xr(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var js=new Map;function Xr(t){var e=js.get(t.nodeName);if(e)return e;js.set(t.nodeName,e=[]);for(var s,a=t,r=Element.prototype;r!==a;){s=Pr(a);for(var n in s)s[n].set&&e.push(n);a=Rr(a)}return e}function Kr(t,e,s=e){var a=Lr();ir(t,"input",r=>{var n=r?t.defaultValue:t.value;if(n=Gt(t)?Ht(n):n,s(n),a&&n!==(n=e())){var i=t.selectionStart,l=t.selectionEnd;t.value=n??"",l!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(l,t.value.length))}}),(ie&&t.defaultValue!==t.value||Ir(e)==null&&t.value)&&s(Gt(t)?Ht(t.value):t.value),Or(()=>{var r=e();Gt(t)&&r===Ht(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function Gt(t){var e=t.type;return e==="number"||e==="range"}function Ht(t){return t===""?null:+t}function Qr(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const Kt=[];ge.handleByNamedList(L.Environment,Kt);async function Jr(t){if(!t)for(let e=0;e<Kt.length;e++){const s=Kt[e];if(s.value.test()){await s.value.load();return}}}let Je;function Zr(){if(typeof Je=="boolean")return Je;try{Je=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{Je=!1}return Je}var ra=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(ra||{});class en{constructor(e){this.items=[],this._name=e}emit(e,s,a,r,n,i,l,p){const{name:u,items:c}=this;for(let h=0,g=c.length;h<g;h++)c[h][u](e,s,a,r,n,i,l,p);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const tn=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],na=class ia extends qr{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...tn,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Jr(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...ia.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof Zt&&(a={container:a},s&&(ct(dt,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const r=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=r?a.clearColor:zt.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const r=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==r&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=ra.ALL);const{clear:a,clearColor:r,target:n}=e;zt.shared.setValue(r??this.background.colorRgba),s.renderTarget.clear(n,a,zt.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new en(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const r in this.runners)this.runners[r].add(a);return this}_addPipes(e,s){const a=s.reduce((r,n)=>(r[n.name]=n.value,r),{});e.forEach(r=>{const n=r.value,i=r.name,l=a[i];this.renderPipes[i]=new n(this,l?new l:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Zr())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};na.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let oa=na,ot;function sn(t){return ot!==void 0||(ot=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??oa.defaultOptions.failIfMajorPerformanceCaveat};try{if(!J.get().getWebGLRenderingContext())return!1;let r=J.get().createCanvas().getContext("webgl",e);const n=!!((s=r==null?void 0:r.getContextAttributes())!=null&&s.stencil);if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,n}catch{return!1}})()),ot}let lt;async function an(t={}){return lt!==void 0||(lt=await(async()=>{const e=J.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),lt}const Ns=["webgl","webgpu","canvas"];async function rn(t){let e=[];t.preference?(e.push(t.preference),Ns.forEach(n=>{n!==t.preference&&e.push(n)})):e=Ns.slice();let s,a={};for(let n=0;n<e.length;n++){const i=e[n];if(i==="webgpu"&&await an()){const{WebGPURenderer:l}=await Fs(async()=>{const{WebGPURenderer:p}=await import("./3hPoXhvc.js");return{WebGPURenderer:p}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=l,a={...t,...t.webgpu};break}else if(i==="webgl"&&sn(t.failIfMajorPerformanceCaveat??oa.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:l}=await Fs(async()=>{const{WebGLRenderer:p}=await import("./QXAqfywq.js");return{WebGLRenderer:p}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=l,a={...t,...t.webgl};break}else if(i==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const r=new s;return await r.init(a),r}const la="8.8.1";class ca{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,la)}static destroy(){}}ca.extension=L.Application;class nn{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,la)}destroy(){this._renderer=null}}nn.extension={type:[L.WebGLSystem,L.WebGPUSystem],name:"initHook",priority:-10};const da=class Qt{constructor(...e){this.stage=new Zt,e[0]!==void 0&&ct(dt,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await rn(e),Qt._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return ct(dt,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=Qt._plugins.slice(0);a.reverse(),a.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};da._plugins=[];let fa=da;ge.handleByList(L.Application,fa._plugins);ge.add(ca);class pa extends zr{constructor(e,s){super();const{textures:a,data:r}=e;Object.keys(r.pages).forEach(n=>{const i=r.pages[parseInt(n,10)],l=a[i.id];this.pages.push({texture:l})}),Object.keys(r.chars).forEach(n=>{const i=r.chars[n],{frame:l,source:p}=a[i.page],u=new $r(i.x+l.x,i.y+l.y,i.width,i.height),c=new Ae({source:p,frame:u});this.chars[n]={id:n.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:c}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){qs.install(e)}static uninstall(e){qs.uninstall(e)}}const Vt={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const h in e){const g=e[h].match(/^[a-z]+/gm)[0],S=e[h].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),T={};for(const Y in S){const M=S[Y].split("="),R=M[0],q=M[1].replace(/"/gm,""),K=parseFloat(q),Q=isNaN(K)?q:K;T[R]=Q}s[g].push(T)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=s.info,[n]=s.common,[i]=s.distanceField??[];i&&(a.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),a.fontSize=parseInt(r.size,10),a.fontFamily=r.face,a.lineHeight=parseInt(n.lineHeight,10);const l=s.page;for(let h=0;h<l.length;h++)a.pages.push({id:parseInt(l[h].id,10)||0,file:l[h].file});const p={};a.baseLineOffset=a.lineHeight-parseInt(n.base,10);const u=s.char;for(let h=0;h<u.length;h++){const g=u[h],S=parseInt(g.id,10);let T=g.letter??g.char??String.fromCharCode(S);T==="space"&&(T=" "),p[S]=T,a.chars[T]={id:S,page:parseInt(g.page,10)||0,x:parseInt(g.x,10),y:parseInt(g.y,10),width:parseInt(g.width,10),height:parseInt(g.height,10),xOffset:parseInt(g.xoffset,10),yOffset:parseInt(g.yoffset,10),xAdvance:parseInt(g.xadvance,10),kerning:{}}}const c=s.kerning||[];for(let h=0;h<c.length;h++){const g=parseInt(c[h].first,10),S=parseInt(c[h].second,10),T=parseInt(c[h].amount,10);a.chars[p[S]].kerning[p[g]]=T}return a}},zs={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const n=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),l=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let u=0;u<n.length;u++)e.pages.push({id:parseInt(n[u].getAttribute("id"),10)||0,file:n[u].getAttribute("file")});const p={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let u=0;u<i.length;u++){const c=i[u],h=parseInt(c.getAttribute("id"),10);let g=c.getAttribute("letter")??c.getAttribute("char")??String.fromCharCode(h);g==="space"&&(g=" "),p[h]=g,e.chars[g]={id:h,page:parseInt(c.getAttribute("page"),10)||0,x:parseInt(c.getAttribute("x"),10),y:parseInt(c.getAttribute("y"),10),width:parseInt(c.getAttribute("width"),10),height:parseInt(c.getAttribute("height"),10),xOffset:parseInt(c.getAttribute("xoffset"),10),yOffset:parseInt(c.getAttribute("yoffset"),10),xAdvance:parseInt(c.getAttribute("xadvance"),10),kerning:{}}}for(let u=0;u<l.length;u++){const c=parseInt(l[u].getAttribute("first"),10),h=parseInt(l[u].getAttribute("second"),10),g=parseInt(l[u].getAttribute("amount"),10);e.chars[p[h]].kerning[p[c]]=g}return e}},Us={test(t){return typeof t=="string"&&t.includes("<font>")?zs.test(J.get().parseXML(t)):!1},parse(t){return zs.parse(J.get().parseXML(t))}},on=[".xml",".fnt"],ln={extension:{type:L.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof pa,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},cn={extension:{type:L.LoadParser,priority:qe.Normal},name:"loadBitmapFont",test(t){return on.includes(we.extname(t).toLowerCase())},async testParse(t){return Vt.test(t)||Us.test(t)},async parse(t,e,s){const a=Vt.test(t)?Vt.parse(t):Us.parse(t),{src:r}=e,{pages:n}=a,i=[],l=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let h=0;h<n.length;++h){const g=n[h].file;let S=we.join(we.dirname(r),g);S=Mr(S,r),i.push({src:S,data:l})}const p=await s.load(i),u=i.map(h=>p[h.src]);return new pa({data:a,textures:u},r)},async load(t,e){return await(await J.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class dn{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const fn={extension:{type:L.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Ae),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((r,n)=>{s[a+(n===0?"":n+1)]=r})}),s}};async function ua(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const pn={extension:{type:L.DetectionParser,priority:1},test:async()=>ua("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},Ds=["png","jpg","jpeg"],un={extension:{type:L.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...Ds],remove:async t=>t.filter(e=>!Ds.includes(e))},hn="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function es(t){return hn?!1:document.createElement("video").canPlayType(t)!==""}const gn={extension:{type:L.DetectionParser,priority:0},test:async()=>es("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},vn={extension:{type:L.DetectionParser,priority:0},test:async()=>es("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},mn={extension:{type:L.DetectionParser,priority:0},test:async()=>es("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},bn={extension:{type:L.DetectionParser,priority:0},test:async()=>ua("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class xn{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var i,l;let r=null,n=null;if(s.loadParser&&(n=this._parserHash[s.loadParser],n||he(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!n){for(let p=0;p<this.parsers.length;p++){const u=this.parsers[p];if(u.load&&((i=u.test)!=null&&i.call(u,e,s,this))){n=u;break}}if(!n)return he(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await n.load(e,s,this),a.parser=n;for(let p=0;p<this.parsers.length;p++){const u=this.parsers[p];u.parse&&u.parse&&await((l=u.testParse)==null?void 0:l.call(u,r,s,this))&&(r=await u.parse(r,s,this)||r,a.parser=u)}return r})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const r={},n=ea(e),i=Ze(e,u=>({alias:[u],src:u,data:{}})),l=i.length,p=i.map(async u=>{const c=we.toAbsolute(u.src);if(!r[u.src])try{this.promiseCache[c]||(this.promiseCache[c]=this._getLoadPromiseAndParser(c,u)),r[u.src]=await this.promiseCache[c].promise,s&&s(++a/l)}catch(h){throw delete this.promiseCache[c],delete r[u.src],new Error(`[Loader.load] Failed to load ${c}.
${h}`)}});return await Promise.all(p),n?r[i[0].src]:r}async unload(e){const a=Ze(e,r=>({alias:[r],src:r})).map(async r=>{var l,p;const n=we.toAbsolute(r.src),i=this.promiseCache[n];if(i){const u=await i.promise;delete this.promiseCache[n],await((p=(l=i.parser)==null?void 0:l.unload)==null?void 0:p.call(l,u,r,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&he(`[Assets] loadParser name conflict "${s.name}"`):he("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function Me(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const yn=".json",_n="application/json",An={extension:{type:L.LoadParser,priority:qe.Low},name:"loadJson",test(t){return Me(t,_n)||$e(t,yn)},async load(t){return await(await J.get().fetch(t)).json()}},wn=".txt",kn="text/plain",En={name:"loadTxt",extension:{type:L.LoadParser,priority:qe.Low,name:"loadTxt"},test(t){return Me(t,kn)||$e(t,wn)},async load(t){return await(await J.get().fetch(t)).text()}},Sn=["normal","bold","100","200","300","400","500","600","700","800","900"],Tn=[".ttf",".otf",".woff",".woff2"],Rn=["font/ttf","font/otf","font/woff","font/woff2"],Pn=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Ln(t){const e=we.extname(t),r=we.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(l=>l.charAt(0).toUpperCase()+l.slice(1));let n=r.length>0;for(const l of r)if(!l.match(Pn)){n=!1;break}let i=r.join(" ");return n||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const In=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function On(t){return In.test(t)?t:encodeURI(t)}const Bn={extension:{type:L.LoadParser,priority:qe.Low},name:"loadWebFont",test(t){return Me(t,Rn)||$e(t,Tn)},async load(t,e){var a,r,n;const s=J.get().getFontFaceSet();if(s){const i=[],l=((a=e.data)==null?void 0:a.family)??Ln(t),p=((n=(r=e.data)==null?void 0:r.weights)==null?void 0:n.filter(c=>Sn.includes(c)))??["normal"],u=e.data??{};for(let c=0;c<p.length;c++){const h=p[c],g=new FontFace(l,`url(${On(t)})`,{...u,weight:h});await g.load(),s.add(g),i.push(g)}return oe.set(`${l}-and-url`,{url:t,fontFaces:i}),i.length===1?i[0]:i}return he("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{oe.remove(`${e.family}-and-url`),J.get().getFontFaceSet().delete(e)})}};function ts(t,e=1){var a;const s=(a=ft.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function ss(t,e,s){t.label=s,t._sourceOrigin=s;const a=new Ae({source:t,label:s}),r=()=>{delete e.promiseCache[s],oe.has(s)&&oe.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(he("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),a.once("destroy",()=>{t.destroyed||(he("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),a}const Cn=".svg",Fn="image/svg+xml",qn={extension:{type:L.LoadParser,priority:qe.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return Me(t,Fn)||$e(t,Cn)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?Mn(t):$n(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function $n(t,e,s,a){var M,R,q;const n=await(await J.get().fetch(t)).blob(),i=URL.createObjectURL(n),l=new Image;l.src=i,l.crossOrigin=a,await l.decode(),URL.revokeObjectURL(i);const p=document.createElement("canvas"),u=p.getContext("2d"),c=((M=e.data)==null?void 0:M.resolution)||ts(t),h=((R=e.data)==null?void 0:R.width)??l.width,g=((q=e.data)==null?void 0:q.height)??l.height;p.width=h*c,p.height=g*c,u.drawImage(l,0,0,h*c,g*c);const{parseAsGraphicsContext:S,...T}=e.data??{},Y=new ta({resource:p,alphaMode:"premultiply-alpha-on-upload",resolution:c,...T});return ss(Y,s,t)}async function Mn(t){const s=await(await J.get().fetch(t)).text(),a=new Ur;return a.svg(s),a}const Wn=`(function () {
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
`;let Ce=null,Jt=class{constructor(){Ce||(Ce=URL.createObjectURL(new Blob([Wn],{type:"application/javascript"}))),this.worker=new Worker(Ce)}};Jt.revokeObjectURL=function(){Ce&&(URL.revokeObjectURL(Ce),Ce=null)};const jn=`(function () {
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
`;let Fe=null;class ha{constructor(){Fe||(Fe=URL.createObjectURL(new Blob([jn],{type:"application/javascript"}))),this.worker=new Worker(Fe)}}ha.revokeObjectURL=function(){Fe&&(URL.revokeObjectURL(Fe),Fe=null)};let Gs=0,Yt;class Nn{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new Jt;s.addEventListener("message",a=>{s.terminate(),Jt.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Yt===void 0&&(Yt=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Yt&&(this._createdWorkers++,e=new ha().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((r,n)=>{this._queue.push({id:e,arguments:s,resolve:r,reject:n})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[Gs]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:Gs++,id:a})}}const Hs=new Nn,zn=[".jpeg",".jpg",".png",".webp",".avif"],Un=["image/jpeg","image/png","image/webp","image/avif"];async function Dn(t,e){var r;const s=await J.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const ga={name:"loadTextures",extension:{type:L.LoadParser,priority:qe.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return Me(t,Un)||$e(t,zn)},async load(t,e,s){var n;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Hs.isImageBitmapSupported()?a=await Hs.loadImageBitmap(t,e):a=await Dn(t,e):a=await new Promise((i,l)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?i(a):(a.onload=()=>{i(a)},a.onerror=l)});const r=new ta({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((n=e.data)==null?void 0:n.resolution)||ts(t),...e.data});return ss(r,s,t)},unload(t){t.destroy(!0)}},va=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Gn=va.map(t=>`video/${t.substring(1)}`);function Hn(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=Yn(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function Vn(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",r),t.load();function a(){n(),e()}function r(i){n(),s(i)}function n(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",r)}})}function Yn(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const Xn={name:"loadVideo",extension:{type:L.LoadParser,name:"loadVideo"},test(t){const e=Me(t,Gn),s=$e(t,va);return e||s},async load(t,e,s){var p,u;const a={...Ut.defaultOptions,resolution:((p=e.data)==null?void 0:p.resolution)||ts(t),alphaMode:((u=e.data)==null?void 0:u.alphaMode)||await Wr(),...e.data},r=document.createElement("video"),n={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(n).forEach(c=>{const h=n[c];h!==void 0&&r.setAttribute(c,h)}),a.muted===!0&&(r.muted=!0),Hn(r,t,a.crossorigin);const i=document.createElement("source");let l;if(t.startsWith("data:"))l=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const c=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();l=Ut.MIME_TYPES[c]||`video/${c}`}return i.src=t,l&&(i.type=l),new Promise(c=>{const h=async()=>{const g=new Ut({...a,resource:r});r.removeEventListener("canplay",h),e.data.preload&&await Vn(r),c(ss(g,s,t))};r.addEventListener("canplay",h),r.appendChild(i)})},unload(t){t.destroy(!0)}},ma={extension:{type:L.ResolveParser,name:"resolveTexture"},test:ga.test,parse:t=>{var e;return{resolution:parseFloat(((e=ft.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},Kn={extension:{type:L.ResolveParser,priority:-2,name:"resolveJson"},test:t=>ft.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:ma.parse};class Qn{constructor(){this._detections=[],this._initialized=!1,this.resolver=new ft,this.loader=new xn,this.cache=oe,this._backgroundLoader=new dn(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var n,i;if(this._initialized){he("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let l=e.manifest;typeof l=="string"&&(l=await this.load(l)),this.resolver.addManifest(l)}const s=((n=e.texturePreference)==null?void 0:n.resolution)??1,a=typeof s=="number"?[s]:s,r=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=ea(e),r=Ze(e).map(l=>{if(typeof l!="string"){const p=this.resolver.getAlias(l);return p.some(u=>!this.resolver.hasKey(u))&&this.add(l),Array.isArray(p)?p[0]:p}return this.resolver.hasKey(l)||this.add({alias:l,src:l}),l}),n=this.resolver.resolve(r),i=await this._mapLoadToResolve(n,s);return a?i[r[0]]:i}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const r=this.resolver.resolveBundle(e),n={},i=Object.keys(r);let l=0,p=0;const u=()=>{s==null||s(++l/p)},c=i.map(h=>{const g=r[h];return p+=Object.keys(g).length,this._mapLoadToResolve(g,u).then(S=>{n[h]=S})});return await Promise.all(c),a?n[e[0]]:n}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return oe.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=oe.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(a,s);this._backgroundLoader.active=!0;const n={};return a.forEach(i=>{const l=r[i.src],p=[i.src];i.alias&&p.push(...i.alias),p.forEach(u=>{n[u]=l}),oe.set(p,l)}),n}async unload(e){this._initialized||await this.init();const s=Ze(e).map(r=>typeof r!="string"?r.src:r),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=Ze(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(r=>this._unloadFromResolved(s[r]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{oe.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,r)=>s.indexOf(a)===r),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const Oe=new Qn;ge.handleByList(L.LoadParser,Oe.loader.parsers).handleByList(L.ResolveParser,Oe.resolver.parsers).handleByList(L.CacheParser,Oe.cache.parsers).handleByList(L.DetectionParser,Oe.detections);ge.add(fn,un,pn,bn,gn,vn,mn,An,En,Bn,qn,ga,Xn,cn,ln,ma,Kn);const Vs={loader:L.LoadParser,resolver:L.ResolveParser,cache:L.CacheParser,detection:L.DetectionParser};ge.handle(L.Asset,t=>{const e=t.ref;Object.entries(Vs).filter(([s])=>!!e[s]).forEach(([s,a])=>ge.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(Vs).filter(s=>!!e[s]).forEach(s=>ge.remove(e[s]))});class Jn extends jr{constructor(e,s){const{text:a,resolution:r,style:n,anchor:i,width:l,height:p,roundPixels:u,...c}=e;super({...c}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=n,this.resolution=r??null,this.allowChildren=!1,this._anchor=new Nr({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=u??!1,l!==void 0&&(this.width=l),p!==void 0&&(this.height=p)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,r=-s*this.anchor.x;let n=0;return e.x>=r&&e.x<=r+s&&(n=-a*this.anchor.y,e.y>=n&&e.y<=n+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function Zn(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(ct(dt,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class ei extends Jn{constructor(...e){const s=Zn(e,"Text");super(s,sa),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=Dr.measureText(this._text,this._style),{width:r,height:n}=a;e.minX=-s._x*r,e.maxX=e.minX+r,e.minY=-s._y*n,e.maxY=e.minY+n}}var ti=V('<p style="color: red;" class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Error:</strong> </p>'),si=V('<div class="svelte-1t2q5b9"> </div>'),ai=V('<details class="svelte-1t2q5b9"><summary class="svelte-1t2q5b9"> </summary> <!></details>'),ri=V(`<div style="
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
" class="svelte-1t2q5b9"><!></div> <button class="svelte-1t2q5b9"> </button> <button title="SPIN" class="svelte-1t2q5b9"></button>`,1);function hi(t,e){Qs(e,!0);const s=13,a=1445,r=1e3,n=1.75,i=-30,l=-10,p=160,u=0,c=720,h=750,g=.8,S=50,T=30,Y=-40,M=1,R="height",K=Math.round(100*n),Q=Math.round(K*(700/760)),et=Q+10,ve=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],j=typeof window<"u"&&window.location.hostname.includes("github.io")?"/web-sdk/oma-peli/symbols":`${Qe}/symbols`,We={a:`${j}/Blue_hotrod.jpg`,b:`${j}/Blue_jacket.jpg`,c:`${j}/Blue_rollers.jpg`,d:`${j}/Blue_speakers.jpg`,e:`${j}/Premium_blonde.jpg`,f:`${j}/Premium_brunette.jpg`,g:`${j}/Premium_rocker.jpg`,h:`${j}/New_Wild.jpg`,i:`${j}/Red_burger.jpg`,j:`${j}/Red_fries.jpg`,k:`${j}/Red_milkshake.jpg`,l:`${j}/Scatter.jpg`,emptyslot:`${j}/Emptyslot.jpg`},pt=`${j}/bg_base.jpg`,as=`${j}/ReelFrames.png`,rs=`${j}/RockABillyReels_logo.png`,ns={spin:`${Qe}/sounds/spin.mp3`,stop:`${Qe}/sounds/stop.mp3`,win:`${Qe}/sounds/win.mp3`};let me=B(!0),st={},at=null,ke=null,je=null,Ne=null,ze=B("Initializing..."),Ee=B(""),ee=[],le=B(1e3),X=B(10);const is=1,ut=100;let be=B(!1),Se=B(0),Ue=B(!1),ba=B(0),xe=!1,re=null,ht=!1,De=B(0),Te=B(0),Ge=B(0),gt=B(0),vt=Cs(()=>o(Te)>0?(o(Ge)/o(Te)*100).toFixed(2):"0.00"),mt=Cs(()=>o(De)>0?(o(gt)/o(De)*100).toFixed(2):"0.00"),ne=B(!1),ce=B(0),ye=B(0),bt=B(0),xt=B(0);const os={k:.25,j:.15,i:.15,c:.08,d:.08,b:.05,a:.05,f:.04,e:.03,g:.02,l:.053,h:0,emptyslot:.182};function ls(f){if(f===6)return Math.random()<.5?"emptyslot":"h";const v=Math.random();let d=0;const A=ve.filter(E=>E!=="h"),x=A.reduce((E,I)=>E+os[I],0);for(const E of A)if(d+=os[E]/x,v<d)return E;return"k"}function cs(){const f=[];for(let v=0;v<s;v++)f.push(ls(v));return f}function xa(f){return f<3?{col:0,row:f}:f<6?{col:1,row:f-3}:f===6?{col:2,row:0}:f<10?{col:3,row:f-7}:{col:4,row:f-10}}function He(f,v){return f===0?v:f===1?3+v:f===2?6:f===3?7+v:f===4?10+v:-1}function ya(){return 1}const _a={k:{3:.42,4:1.39,5:6.95},j:{3:.7,4:2.78,5:13.9},i:{3:.7,4:2.78,5:13.9},c:{3:2.09,4:6.95,5:27.8},d:{3:2.09,4:6.95,5:27.8},b:{3:2.78,4:9.73,5:34.75},a:{3:2.78,4:9.73,5:34.75},f:{3:4.17,4:20.85,5:69.5},e:{3:6.95,4:27.8,5:104.25},g:{3:6.95,4:34.75,5:139},h:{},l:{},emptyslot:{}};function Aa(){var H;const f=[],v=[];for(let b=0;b<s;b++)N[b]==="l"&&v.push(b);if(v.length>=5){const b=v.length;k(ce,o(ce)+b),o(ne)?console.log(`🎰 FREE SPINS RETRIGGERED! +${b} FREE SPINS! Total: ${o(ce)}`):(k(ne,!0),k(ye,0),Ie(bt),console.log(`🎰 FREE SPINS TRIGGERED! ${v.length} scatters = ${b} FREE SPINS!`)),f.push({symbol:"l",count:v.length,payout:0,positions:v,multiplier:1})}N[0],N[1],N[2],N[3],N[4],N[5],N[6],N[7],N[8],N[9],N[10],N[11],N[12];const d=[];for(let b=0;b<3;b++)for(let w=0;w<3;w++)for(let O=0;O<1;O++)for(let U=0;U<3;U++)for(let P=0;P<3;P++){const W=[He(0,b),He(1,w),He(2,O),He(3,U),He(4,P)];d.push(W)}console.log(`Generated ${d.length} possible paths (should be 81)`);const A=[];for(const b of d){const w=b.map(P=>N[P]);if(w[0]==="emptyslot"||w[0]==="l")continue;let O=null;for(let P=0;P<w.length;P++)if(w[P]!=="h"&&w[P]!=="emptyslot"&&w[P]!=="l"){O=w[P];break}if(!O)continue;let U=0;for(let P=0;P<w.length;P++){const W=w[P];if(W===O||W==="h")U++;else break}if(U>=3){const W=b[0]%3;A.push({symbol:O,length:U,path:b.slice(0,U),startRow:W})}}const x=[],E=new Map;for(const b of A){const w=`${b.symbol}-${b.path.join(",")}`;E.has(w)||E.set(w,[]),E.get(w).push(b)}for(const[b,w]of E.entries()){const O=Math.max(...w.map(P=>P.length)),U=w.find(P=>P.length===O);U&&x.push(U)}const I=[],z=new Map;for(const b of x){const w=z.get(b.symbol);w?b.length>w.length?(w.length=b.length,w.paths=[b.path]):b.length===w.length&&w.paths.push(b.path):z.set(b.symbol,{symbol:b.symbol,length:b.length,paths:[b.path]})}const $=z.size>0?ya():1;for(const[b,w]of z.entries()){const O=(H=_a[w.symbol])==null?void 0:H[w.length];if(O!==void 0&&O>0){const U=O*o(X)*$;console.log(`  ${w.length}x${w.symbol}: BEST of ${w.paths.length} paths = ${O}x x ${o(X)} x ${$} = ${U}`),I.push({symbol:w.symbol,count:w.length,payout:U,positions:w.paths[0],multiplier:$})}}return f.push(...I),f}let _e=B(0),Re=B(fe([])),de=B(!1),rt=B(!1);const wa={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function yt(f){if(!o(me)||!st[f])return;const v=st[f];v.currentTime=0,v.play().catch(d=>{console.warn("Äänen toisto epäonnistui:",f,d)})}function ka(f){Ve.forEach(v=>F.stage.removeChild(v)),Ve=[],f.forEach(v=>{v.positions.forEach(d=>{const A=Pe[d],x=new Dt().rect(0,0,K,Q).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});x.x=A.container.x,x.y=A.container.y,F.stage.addChild(x),Ve.push(x);let E=0,I=1;const z=.05;F.ticker.add(()=>{E+=I*z,E>=.4&&(I=-1),E<=0&&(I=1),x.alpha=.5+E})})})}function _t(){Ve.forEach(f=>F.stage.removeChild(f)),Ve=[]}let N=cs(),At,F,Pe=[],Ve=[];class Ea{constructor(v,d){te(this,"index");te(this,"container");te(this,"offset",0);te(this,"speed",0);te(this,"targetSpeed",30);te(this,"state","idle");te(this,"stopDelay",0);te(this,"bounceOffset",0);te(this,"bounceSpeed",0);te(this,"bounceFrames",0);this.index=v,this.container=d}start(v){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=v}update(){this.state!=="idle"&&(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"&&(this.speed*=.92,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,yt("stop"))),this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=et&&(this.offset=0,N[this.index]=ls(this.index))))}draw(){const v=this.container;v.removeChildren();const d=N[this.index];if(!d||!at||!at[d])return;const A=at[d];if(!A)return;const x=this.offset+this.bounceOffset,E=new it(A);E.width=K,E.height=Q,E.x=0,E.y=x,v.addChild(E)}}Js(async()=>{F=new fa,await F.init({width:a,height:r,background:"#001a33"}),At.appendChild(F.canvas);const f={};try{k(ze,"Loading background and UI images..."),ee.push(`Loading background: ${pt}`),ee.push(`Loading reel frames: ${as}`),ee.push(`Loading logo: ${rs}`),await Oe.load([{alias:"background",src:pt},{alias:"reelframes",src:as},{alias:"logo",src:rs}]),ke=Ae.from("background"),je=Ae.from("reelframes"),Ne=Ae.from("logo"),console.log("✅ Background texture created:",ke.width,"x",ke.height),console.log("✅ Reel frames texture created:",je.width,"x",je.height),console.log("✅ Logo texture created:",Ne.width,"x",Ne.height),ee.push("✅ All UI images loaded"),k(ze,"Loading symbols...");const d=[];for(const A of ve)d.push({alias:A,src:We[A]});await Oe.load(d);for(const A of ve){const x=We[A];ee.push(`Loading symbol ${A}: ${x}`);try{const E=Ae.from(A);f[A]=E,console.log(`✅ Symbol ${A} loaded:`,E.width,"x",E.height),ee.push(`✅ Symbol ${A} loaded`)}catch(E){const I=`❌ Failed to load symbol ${A} from ${x}: ${E}`;throw ee.push(I),console.error(I),new Error(I)}}at=f,k(ze,"Assets loaded successfully!")}catch(d){k(Ee,`Asset loading failed: ${d}`),ee.push(o(Ee)),console.error(o(Ee));return}console.log("Ladataan ääniefektit...");for(const[d,A]of Object.entries(ns)){const x=new Audio;x.src=A,x.preload="auto",x.volume=.7,x.load(),x.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${A} (käytetään hiljaista placeholderia)`)}),st[d]=x}console.log("Ladataan ääniefektit...");for(const[d,A]of Object.entries(ns)){const x=new Audio;x.src=A,x.preload="auto",x.volume=.7,x.load(),x.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${A} (käytetään hiljaista placeholderia)`)}),st[d]=x}if(console.log("Taustakuva ladattu, tekstuuri:",ke),ke){const d=new it(ke);F.renderer.width/F.renderer.height;const A=d.texture.width/d.texture.height;let x;x=F.renderer.height/d.texture.height,x*=M,d.scale.set(x),d.x=(F.renderer.width-d.width)/2,d.y=(F.renderer.height-d.height)/2+Y,F.stage.addChild(d),console.log("Taustakuva lisätty:",R,"mode, size:",d.width.toFixed(0),"x",d.height.toFixed(0),"image aspect:",A.toFixed(2),"scale:",x.toFixed(2),"pos:",d.x.toFixed(0),d.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(d=>({x:d.x+i,y:d.y+l})),Pe=[];for(let d=0;d<s;d++){const A=xa(d),x=A.col,E=A.row,I=300+x*(K+20),z=250+E*(Q+15),$=d===6?I+u:I,H=d===6?z+p:z,b=new Zt;b.x=$+i,b.y=H+l;const w=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],O=new Dt().rect(0,0,K,Q).fill({color:w[d],alpha:.3});O.x=b.x,O.y=b.y,F.stage.addChild(O);const U=new sa({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),P=new ei({text:d.toString(),style:U});P.x=b.x+5,P.y=b.y+5,F.stage.addChild(P);const W=new Dt().rect(0,0,K,Q).fill(16777215);W.x=b.x,W.y=b.y,b.mask=W,F.stage.addChild(W),F.stage.addChild(b),Pe.push(new Ea(d,b))}if(je){const d=new it(je);d.scale.set(1),d.x=250,d.y=200,F.stage.addChild(d),console.log("Reel frames lisätty:",d.width.toFixed(0),"x",d.height.toFixed(0))}if(Ne){const d=new it(Ne);d.scale.set(g),d.x=(F.renderer.width-d.width)/2+S,d.y=T,F.stage.addChild(d),console.log("Logo lisätty päällimmäiseen layeriin:",d.width.toFixed(0),"x",d.height.toFixed(0))}F.ticker.add(Sa)});function Sa(){for(const f of Pe)f.update(),f.draw();if(!o(de)&&!ht&&Pe.every(f=>f.state==="stopped")){ht=!0;const f=Aa();console.log(`Checking wins, found ${f.length} wins`),f.length>0?(k(Re,fe(f)),k(_e,fe(f.reduce((v,d)=>v+d.payout,0))),Ta(o(_e)),k(de,!0),k(ba,fe(Date.now())),console.log(`🎉 VOITTO! ${o(_e)} pistettä! Uusi saldo: ${o(le)}`),console.log(`isShowingWin set to: ${o(de)}, totalWin: ${o(_e)}`),f.forEach(v=>{const d=v.multiplier?` (${v.multiplier}x multiplier)`:"";console.log(`${v.count}x ${v.symbol} = ${v.payout} pistettä${d}`)}),ka(f),yt("win"),o(ne)&&o(ce)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${o(ye)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${o(ye).toFixed(2)}`),k(ne,!1),k(ye,0)},2e3)),o(be)&&!xe&&(xe=!0,re=window.setTimeout(()=>{o(de)&&o(be)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),k(de,!1),_t()),re=window.setTimeout(()=>{xe=!1,kt()},200)},1500))):(console.log("No wins found this spin"),o(be)&&!xe&&(xe=!0,re=window.setTimeout(()=>{xe=!1,kt()},1e3)))}}function ds(){if(o(ne)&&o(ce)>0)Ie(ce,-1),Ie(xt),console.log(`🎰 FREE SPIN! Remaining: ${o(ce)}`);else if(!o(ne)){if(o(le)<o(X)){alert(`Not enough credits! Balance: ${o(le)}, Bet: ${o(X)}`),wt();return}k(le,o(le)-o(X)),Ie(De),k(Te,o(Te)+o(X))}re!==null&&(clearTimeout(re),re=null),k(Re,fe([])),k(_e,0),k(de,!1),ht=!1,_t(),N=cs(),Pe.forEach((f,v)=>f.start(60+v*10)),yt("spin")}function Ta(f){k(le,o(le)+f),k(Ge,o(Ge)+f),o(ne)&&k(ye,o(ye)+f),f>0&&Ie(gt)}function Ra(){o(X)<ut&&k(X,fe(Math.min(o(X)+1,ut)))}function Pa(){o(X)>is&&k(X,fe(Math.max(o(X)-1,is)))}function La(){k(X,ut)}function Ye(f){k(be,!0),k(Se,fe(f)),k(Ue,!1),kt()}function wt(){k(be,!1),k(Se,0),xe=!1,re!==null&&(clearTimeout(re),re=null)}function kt(){if(!o(be)||o(Se)<=0){wt();return}console.log(`Autoplay: Starting spin ${o(Se)} rounds left`),ds(),Ie(Se,-1)}function Ia(){confirm("Reset all statistics?")&&(k(De,0),k(Te,0),k(Ge,0),k(gt,0),k(bt,0),k(xt,0))}var fs=ui(),ps=Be(fs);{var Oa=f=>{var v=ri(),d=m(y(v),2),A=m(y(d));_(d);var x=m(d,2);{var E=P=>{var W=ti(),Xe=m(y(W));_(W),se(()=>C(Xe,` ${o(Ee)??""}`)),G(P,W)};Z(x,P=>{o(Ee)&&P(E)})}var I=m(x,2),z=m(y(I));z.nodeValue=` ${Qe??""}`,_(I);var $=m(I,2),H=m(y($));H.nodeValue=` ${pt??""}`,_($);var b=m($,2),w=m(y(b));_(b);var O=m(b,2);{var U=P=>{var W=ai(),Xe=y(W),Ja=y(Xe);_(Xe);var Za=m(Xe,2);Ms(Za,17,()=>ee,$s,(er,tr)=>{var Wt=si(),sr=y(Wt,!0);_(Wt),se(()=>C(sr,o(tr))),G(er,Wt)}),_(W),se(()=>C(Ja,`Log (${ee.length??""})`)),G(P,W)};Z(O,P=>{ee.length>0&&P(U)})}_(v),se(()=>{C(A,` ${o(ze)??""}`),C(w,` ${We.a??""}`)}),G(f,v)};Z(ps,f=>{(o(ze)!=="Assets loaded successfully!"||o(Ee))&&f(Oa)})}var us=m(ps,2);{var Ba=f=>{var v=oi(),d=m(y(v),2),A=y(d);_(d);var x=m(d,2);Ms(x,17,()=>o(Re),$s,($,H)=>{var b=ni(),w=y(b);_(b),se(O=>C(w,`${o(H).count??""} × ${wa[o(H).symbol]??""} = ${O??""} pistettä`),[()=>o(H).payout.toFixed(2)]),G($,b)});var E=m(x,2);{var I=$=>{var H=ii(),b=y(H),w=y(b);_(b),_(H),se(()=>C(w,`✨ ${o(Re)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),G($,H)};Z(E,$=>{o(Re).length>0&&o(Re)[0].multiplier>1&&$(I)})}var z=m(E,2);_(v),se(()=>C(A,`${o(_e)??""} pistettä`)),D("click",z,()=>{k(de,!1),_t(),console.log("Win popup closed, ready for next spin")}),G(f,v)};Z(us,f=>{o(_e)>0&&o(de)&&f(Ba)})}var hs=m(us,2);{var Ca=f=>{var v=li(),d=m(y(v),8);_(v),D("click",d,()=>{k(rt,!1)}),G(f,v)};Z(hs,f=>{o(rt)&&f(Ca)})}var gs=m(hs,2);Cr(gs,f=>At=f,()=>At);var nt=m(gs,2),vs=y(nt);{var Fa=f=>{var v=ci(),d=Be(v),A=m(y(d),2),x=y(A,!0);_(A),_(d);var E=m(d,2),I=m(y(E),2),z=y(I,!0);_(I),_(E),se($=>{C(x,o(ce)),C(z,$)},[()=>o(ye).toFixed(2)]),G(f,v)};Z(vs,f=>{o(ne)&&f(Fa)})}var Et=m(vs,2),ms=m(y(Et),2),qa=y(ms,!0);_(ms),_(Et);var bs=m(Et,2),xs=m(y(bs),2),$a=y(xs,!0);_(xs),_(bs),_(nt);var St=m(nt,2),ys=m(y(St),2),_s=y(ys),Tt=m(_s,2),Ma=y(Tt,!0);_(Tt);var As=m(Tt,2),Wa=m(As,2);_(ys),_(St);var ws=m(St,2),Rt=m(ws,2),Pt=m(y(Rt),2),ks=m(y(Pt),2),ja=y(ks,!0);_(ks),_(Pt);var Lt=m(Pt,2),Es=m(y(Lt),2),Na=y(Es,!0);_(Es),_(Lt);var It=m(Lt,2),Ss=m(y(It),2),za=y(Ss,!0);_(Ss),_(It);var Ot=m(It,2),Bt=m(y(Ot),2),Ua=y(Bt);_(Bt),_(Ot);var Ct=m(Ot,2),Ft=m(y(Ct),2),Da=y(Ft);_(Ft),_(Ct);var qt=m(Ct,2),Ts=m(y(qt),2),Ga=y(Ts,!0);_(Ts),_(qt);var $t=m(qt,2),Rs=m(y($t),2),Ha=y(Rs,!0);_(Rs),_($t);var Va=m($t,2);_(Rt);var Mt=m(Rt,2),Ya=y(Mt);{var Xa=f=>{var v=di(),d=m(y(v),2),A=y(d);_(d);var x=m(d,2);_(v),se(()=>C(A,`${o(Se)??""} left`)),D("click",x,wt),G(f,v)},Ka=f=>{var v=pi(),d=Be(v),A=m(d,2);{var x=E=>{var I=fi(),z=m(y(I),2),$=m(z,2),H=m($,2),b=m(H,2),w=m(b,2),O=m(w,2);_(I),D("click",z,()=>Ye(10)),D("click",$,()=>Ye(100)),D("click",H,()=>Ye(1e3)),D("click",b,()=>Ye(1e4)),D("click",w,()=>Ye(1e5)),D("click",O,()=>{k(Ue,!1)}),G(E,I)};Z(A,E=>{o(Ue)&&E(x)})}D("click",d,()=>{k(Ue,!o(Ue))}),G(f,v)};Z(Ya,f=>{o(be)?f(Xa):f(Ka,!1)})}_(Mt);var Le=m(Mt,2),Qa=y(Le,!0);_(Le);var Ps=m(Le,2);ue(Ps,"style",`
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
  `),se((f,v,d,A,x,E)=>{ue(nt,"style",`
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
  border: 2px solid ${(o(ne)?"#ff00ff":"#ffd700")??""};
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
  z-index: 1500;
  min-width: 180px;
`),C(qa,f),C($a,o(X)),C(Ma,o(X)),C(ja,v),C(Na,d),C(za,A),ue(Bt,"style",`color: ${x??""};`),C(Ua,`${o(vt)??""}%`),ue(Ft,"style",`color: ${E??""};`),C(Da,`${o(mt)??""}%`),C(Ga,o(bt)),C(Ha,o(xt)),ue(Le,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(o(me)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(o(me)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),ue(Le,"title",o(me)?"Mykistä äänet":"Laita äänet päälle"),C(Qa,o(me)?"🔊":"🔇")},[()=>o(le).toLocaleString(),()=>o(De).toLocaleString(),()=>o(Te).toLocaleString(),()=>o(Ge).toLocaleString(),()=>parseFloat(o(vt))>=95?"#00ff00":parseFloat(o(vt))>=85?"#ffff00":"#ff6666",()=>parseFloat(o(mt))>=30?"#00ff00":parseFloat(o(mt))>=20?"#ffff00":"#ff6666"]),D("click",_s,Pa),D("click",As,Ra),D("click",Wa,La),D("click",ws,()=>{k(rt,!o(rt))}),D("click",Va,Ia),D("click",Le,()=>{k(me,!o(me))}),D("click",Ps,ds),G(t,fs),Zs()}var gi=V('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),vi=V('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function mi(t,e){Qs(e,!1);let s=Fr(e,"isAuthenticated",12,!1),a=Xt(""),r=Xt(!1);const n="slot2024";function i(){o(a)===n?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(k(r,!0),k(a,""),setTimeout(()=>k(r,!1),3e3))}Js(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),lr();var l=or(),p=Be(l);{var u=c=>{var h=vi(),g=y(h),S=m(y(g),4),T=y(S);Yr(T),Br(2),_(S);var Y=m(S,2);{var M=R=>{var q=gi();G(R,q)};Z(Y,R=>{o(r)&&R(M)})}_(g),_(h),Kr(T,()=>o(a),R=>k(a,R)),D("submit",S,Qr(i)),G(c,h)};Z(p,c=>{s()||c(u)})}G(t,l),Zs()}var bi=V('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),xi=V("<!> <!>",1);function Ii(t){let e=Xt(!1);var s=xi(),a=Be(s);mi(a,{get isAuthenticated(){return o(e)},set isAuthenticated(i){k(e,i)},$$legacy:!0});var r=m(a,2);{var n=i=>{var l=bi(),p=m(Be(l),2);hi(p,{}),G(i,l)};Z(r,i=>{o(e)&&i(n)})}G(t,s)}export{oa as A,ra as C,nn as R,en as S,la as V,Ii as _,Zr as u};
