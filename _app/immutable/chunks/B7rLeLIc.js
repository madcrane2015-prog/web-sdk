const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CBp4gqZf.js","./DNWEu6uq.js","./DEliLNnF.js","./DWgShhht.js","./C04N3yhf.js","./C2GHuDhf.js","./DaeI04Oa.js","./BRSdnCOC.js"])))=>i.map(i=>d[i]);
var ar=Object.defineProperty;var rr=(t,e,s)=>e in t?ar(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var ee=(t,e,s)=>rr(t,typeof e!="symbol"?e+"":e,s);import{f as ir,l as nr,t as D,g as N,a as z,d as or}from"./DRDKHArV.js";import{i as lr}from"./Dw5_DM93.js";import{y as ie,j as cr,a8 as dr,F as o,Q as fr,aa as pr,ab as Ls,h as Is,e as jt,k as Xe,l as ur,ac as Ys,w as Xs,ad as hr,q as Ks,a7 as gr,U as vr,a2 as Os,aq as Nt,z as Bs,ar as mr,as as br,at as xr,o as yr,au as _r,av as Ar,aw as wr,ax as kr,b as Er,ay as Sr,az as Tr,a6 as Pr,aA as Rr,aB as Lr,D as Ir,L as Or,p as Qs,ah as C,ag as Js,T as A,aC as Le,f as Oe,s as m,c as x,r as y,t as se,I as Cs,a as Zs,aD as Br,aE as Xt}from"./DWgShhht.js";import{_ as Fs,p as de,i as Q}from"./DEliLNnF.js";import{s as F}from"./4RjN9yQL.js";import{b as Cr,p as Fr}from"./B1_V_3zc.js";import{b as Ke}from"./Bnt7xpU3.js";import{e as he,E as L,a as qr,C as Zt,Q as lt,V as ct,N as zt,D as X,H as $r,p as _e,a0 as Fe,a1 as Ae,a2 as Mr,w as ue,a3 as Je,a4 as ea,a5 as qe,a6 as ne,a7 as dt,a8 as ta,a9 as Wr,aa as Ut,ab as jr,ac as Nr,y as it}from"./DNWEu6uq.js";import{A as zr,B as qs,G as Ur,T as sa,a as Dr,b as Dt}from"./C04N3yhf.js";function $s(t,e){return e}function Gr(t,e,s,a){for(var r=[],i=e.length,n=0;n<i;n++)xr(e[n].e,r,!0);var l=i>0&&r.length===0&&s!==null;if(l){var p=s.parentNode;yr(p),p.append(s),a.clear(),fe(t,e[0].prev,e[i-1].next)}_r(r,()=>{for(var u=0;u<i;u++){var c=e[u];l||(a.delete(c.k),fe(t,c.prev,c.next)),Ar(c.e,!l)}})}function Ms(t,e,s,a,r,i=null){var n=t,l={flags:e,items:new Map,first:null};ie&&cr();var p=null,u=!1,c=fr(()=>{var h=s();return gr(h)?h:h==null?[]:Ks(h)});dr(()=>{var h=o(c),g=h.length;if(u&&g===0)return;u=g===0;let k=!1;if(ie){var T=n.data===pr;T!==(g===0)&&(n=Ls(),Is(n),jt(!1),k=!0)}if(ie){for(var G=null,M,P=0;P<g;P++){if(Xe.nodeType===8&&Xe.data===ur){n=Xe,k=!0,jt(!1);break}var $=h[P],H=a($,P);M=aa(Xe,l,G,null,$,H,P,r,e,s),l.items.set(H,M),G=M}g>0&&Is(Ls())}ie||Hr(h,l,n,r,e,a,s),i!==null&&(g===0?p?Ys(p):p=Xs(()=>i(n)):p!==null&&hr(p,()=>{p=null})),k&&jt(!0),o(c)}),ie&&(n=Xe)}function Hr(t,e,s,a,r,i,n){var l=t.length,p=e.items,u=e.first,c=u,h,g=null,k=[],T=[],G,M,P,$;for($=0;$<l;$+=1){if(G=t[$],M=i(G,$),P=p.get(M),P===void 0){var H=c?c.e.nodes_start:s;g=aa(H,e,g,g===null?e.first:g.next,G,M,$,a,r,n),p.set(M,g),k=[],T=[],c=g.next;continue}if(Vr(P,G,$),(P.e.f&Nt)!==0&&Ys(P.e),P!==c){if(h!==void 0&&h.has(P)){if(k.length<T.length){var Y=T[0],ae;g=Y.prev;var Ze=k[0],ge=k[k.length-1];for(ae=0;ae<k.length;ae+=1)Ws(k[ae],Y,s);for(ae=0;ae<T.length;ae+=1)h.delete(T[ae]);fe(e,Ze.prev,ge.next),fe(e,g,Ze),fe(e,ge,Y),c=Y,g=ge,$-=1,k=[],T=[]}else h.delete(P),Ws(P,c,s),fe(e,P.prev,P.next),fe(e,P,g===null?e.first:g.next),fe(e,g,P),g=P;continue}for(k=[],T=[];c!==null&&c.k!==M;)(c.e.f&Nt)===0&&(h??(h=new Set)).add(c),T.push(c),c=c.next;if(c===null)continue;P=c}k.push(P),g=P,c=P.next}if(c!==null||h!==void 0){for(var et=h===void 0?[]:Ks(h);c!==null;)(c.e.f&Nt)===0&&et.push(c),c=c.next;var W=et.length;if(W>0){var Me=null;Gr(e,et,Me,p)}}Bs.first=e.first&&e.first.e,Bs.last=g&&g.e}function Vr(t,e,s,a){br(t.v,e),t.i=s}function aa(t,e,s,a,r,i,n,l,p,u){var c=(p&wr)!==0,h=(p&kr)===0,g=c?h?vr(r):Os(r):r,k=(p&mr)===0?n:Os(n),T={i:k,v:g,k:i,a:null,e:null,prev:s,next:a};try{return T.e=Xs(()=>l(t,g,k,u),ie),T.e.prev=s&&s.e,T.e.next=a&&a.e,s===null?e.first=T:(s.next=T,s.e.next=T.e),a!==null&&(a.prev=T,a.e.prev=T.e),T}finally{}}function Ws(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,r=e?e.e.nodes_start:s,i=t.e.nodes_start;i!==a;){var n=Er(i);r.before(i),i=n}}function fe(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function Yr(t){if(ie){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;pe(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var r=t.checked;pe(t,"checked",null),t.checked=r}}};t.__on_r=s,Sr(s),ir()}}function pe(t,e,s,a){var r=t.__attributes??(t.__attributes={});ie&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Tr]=s),s==null?t.removeAttribute(e):typeof s!="string"&&Xr(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var js=new Map;function Xr(t){var e=js.get(t.nodeName);if(e)return e;js.set(t.nodeName,e=[]);for(var s,a=t,r=Element.prototype;r!==a;){s=Rr(a);for(var i in s)s[i].set&&e.push(i);a=Pr(a)}return e}function Kr(t,e,s=e){var a=Lr();nr(t,"input",r=>{var i=r?t.defaultValue:t.value;if(i=Gt(t)?Ht(i):i,s(i),a&&i!==(i=e())){var n=t.selectionStart,l=t.selectionEnd;t.value=i??"",l!==null&&(t.selectionStart=n,t.selectionEnd=Math.min(l,t.value.length))}}),(ie&&t.defaultValue!==t.value||Ir(e)==null&&t.value)&&s(Gt(t)?Ht(t.value):t.value),Or(()=>{var r=e();Gt(t)&&r===Ht(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function Gt(t){var e=t.type;return e==="number"||e==="range"}function Ht(t){return t===""?null:+t}function Qr(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const Kt=[];he.handleByNamedList(L.Environment,Kt);async function Jr(t){if(!t)for(let e=0;e<Kt.length;e++){const s=Kt[e];if(s.value.test()){await s.value.load();return}}}let Qe;function Zr(){if(typeof Qe=="boolean")return Qe;try{Qe=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{Qe=!1}return Qe}var ra=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(ra||{});class ei{constructor(e){this.items=[],this._name=e}emit(e,s,a,r,i,n,l,p){const{name:u,items:c}=this;for(let h=0,g=c.length;h<g;h++)c[h][u](e,s,a,r,i,n,l,p);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const ti=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],ia=class na extends qr{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...ti,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Jr(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...na.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof Zt&&(a={container:a},s&&(lt(ct,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const r=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=r?a.clearColor:zt.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const r=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==r&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=ra.ALL);const{clear:a,clearColor:r,target:i}=e;zt.shared.setValue(r??this.background.colorRgba),s.renderTarget.clear(i,a,zt.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new ei(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const r in this.runners)this.runners[r].add(a);return this}_addPipes(e,s){const a=s.reduce((r,i)=>(r[i.name]=i.value,r),{});e.forEach(r=>{const i=r.value,n=r.name,l=a[n];this.renderPipes[n]=new i(this,l?new l:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Zr())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};ia.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let oa=ia,nt;function si(t){return nt!==void 0||(nt=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??oa.defaultOptions.failIfMajorPerformanceCaveat};try{if(!X.get().getWebGLRenderingContext())return!1;let r=X.get().createCanvas().getContext("webgl",e);const i=!!((s=r==null?void 0:r.getContextAttributes())!=null&&s.stencil);if(r){const n=r.getExtension("WEBGL_lose_context");n&&n.loseContext()}return r=null,i}catch{return!1}})()),nt}let ot;async function ai(t={}){return ot!==void 0||(ot=await(async()=>{const e=X.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),ot}const Ns=["webgl","webgpu","canvas"];async function ri(t){let e=[];t.preference?(e.push(t.preference),Ns.forEach(i=>{i!==t.preference&&e.push(i)})):e=Ns.slice();let s,a={};for(let i=0;i<e.length;i++){const n=e[i];if(n==="webgpu"&&await ai()){const{WebGPURenderer:l}=await Fs(async()=>{const{WebGPURenderer:p}=await import("./CBp4gqZf.js");return{WebGPURenderer:p}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=l,a={...t,...t.webgpu};break}else if(n==="webgl"&&si(t.failIfMajorPerformanceCaveat??oa.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:l}=await Fs(async()=>{const{WebGLRenderer:p}=await import("./BRSdnCOC.js");return{WebGLRenderer:p}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=l,a={...t,...t.webgl};break}else if(n==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const r=new s;return await r.init(a),r}const la="8.8.1";class ca{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,la)}static destroy(){}}ca.extension=L.Application;class ii{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,la)}destroy(){this._renderer=null}}ii.extension={type:[L.WebGLSystem,L.WebGPUSystem],name:"initHook",priority:-10};const da=class Qt{constructor(...e){this.stage=new Zt,e[0]!==void 0&&lt(ct,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await ri(e),Qt._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return lt(ct,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=Qt._plugins.slice(0);a.reverse(),a.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};da._plugins=[];let fa=da;he.handleByList(L.Application,fa._plugins);he.add(ca);class pa extends zr{constructor(e,s){super();const{textures:a,data:r}=e;Object.keys(r.pages).forEach(i=>{const n=r.pages[parseInt(i,10)],l=a[n.id];this.pages.push({texture:l})}),Object.keys(r.chars).forEach(i=>{const n=r.chars[i],{frame:l,source:p}=a[n.page],u=new $r(n.x+l.x,n.y+l.y,n.width,n.height),c=new _e({source:p,frame:u});this.chars[i]={id:i.codePointAt(0),xOffset:n.xOffset,yOffset:n.yOffset,xAdvance:n.xAdvance,kerning:n.kerning??{},texture:c}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){qs.install(e)}static uninstall(e){qs.uninstall(e)}}const Vt={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const h in e){const g=e[h].match(/^[a-z]+/gm)[0],k=e[h].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),T={};for(const G in k){const M=k[G].split("="),P=M[0],$=M[1].replace(/"/gm,""),H=parseFloat($),Y=isNaN(H)?$:H;T[P]=Y}s[g].push(T)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=s.info,[i]=s.common,[n]=s.distanceField??[];n&&(a.distanceField={range:parseInt(n.distanceRange,10),type:n.fieldType}),a.fontSize=parseInt(r.size,10),a.fontFamily=r.face,a.lineHeight=parseInt(i.lineHeight,10);const l=s.page;for(let h=0;h<l.length;h++)a.pages.push({id:parseInt(l[h].id,10)||0,file:l[h].file});const p={};a.baseLineOffset=a.lineHeight-parseInt(i.base,10);const u=s.char;for(let h=0;h<u.length;h++){const g=u[h],k=parseInt(g.id,10);let T=g.letter??g.char??String.fromCharCode(k);T==="space"&&(T=" "),p[k]=T,a.chars[T]={id:k,page:parseInt(g.page,10)||0,x:parseInt(g.x,10),y:parseInt(g.y,10),width:parseInt(g.width,10),height:parseInt(g.height,10),xOffset:parseInt(g.xoffset,10),yOffset:parseInt(g.yoffset,10),xAdvance:parseInt(g.xadvance,10),kerning:{}}}const c=s.kerning||[];for(let h=0;h<c.length;h++){const g=parseInt(c[h].first,10),k=parseInt(c[h].second,10),T=parseInt(c[h].amount,10);a.chars[p[k]].kerning[p[g]]=T}return a}},zs={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const i=t.getElementsByTagName("page"),n=t.getElementsByTagName("char"),l=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let u=0;u<i.length;u++)e.pages.push({id:parseInt(i[u].getAttribute("id"),10)||0,file:i[u].getAttribute("file")});const p={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let u=0;u<n.length;u++){const c=n[u],h=parseInt(c.getAttribute("id"),10);let g=c.getAttribute("letter")??c.getAttribute("char")??String.fromCharCode(h);g==="space"&&(g=" "),p[h]=g,e.chars[g]={id:h,page:parseInt(c.getAttribute("page"),10)||0,x:parseInt(c.getAttribute("x"),10),y:parseInt(c.getAttribute("y"),10),width:parseInt(c.getAttribute("width"),10),height:parseInt(c.getAttribute("height"),10),xOffset:parseInt(c.getAttribute("xoffset"),10),yOffset:parseInt(c.getAttribute("yoffset"),10),xAdvance:parseInt(c.getAttribute("xadvance"),10),kerning:{}}}for(let u=0;u<l.length;u++){const c=parseInt(l[u].getAttribute("first"),10),h=parseInt(l[u].getAttribute("second"),10),g=parseInt(l[u].getAttribute("amount"),10);e.chars[p[h]].kerning[p[c]]=g}return e}},Us={test(t){return typeof t=="string"&&t.includes("<font>")?zs.test(X.get().parseXML(t)):!1},parse(t){return zs.parse(X.get().parseXML(t))}},ni=[".xml",".fnt"],oi={extension:{type:L.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof pa,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},li={extension:{type:L.LoadParser,priority:Fe.Normal},name:"loadBitmapFont",test(t){return ni.includes(Ae.extname(t).toLowerCase())},async testParse(t){return Vt.test(t)||Us.test(t)},async parse(t,e,s){const a=Vt.test(t)?Vt.parse(t):Us.parse(t),{src:r}=e,{pages:i}=a,n=[],l=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let h=0;h<i.length;++h){const g=i[h].file;let k=Ae.join(Ae.dirname(r),g);k=Mr(k,r),n.push({src:k,data:l})}const p=await s.load(n),u=n.map(h=>p[h.src]);return new pa({data:a,textures:u},r)},async load(t,e){return await(await X.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class ci{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const di={extension:{type:L.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof _e),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((r,i)=>{s[a+(i===0?"":i+1)]=r})}),s}};async function ua(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const fi={extension:{type:L.DetectionParser,priority:1},test:async()=>ua("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},Ds=["png","jpg","jpeg"],pi={extension:{type:L.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...Ds],remove:async t=>t.filter(e=>!Ds.includes(e))},ui="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function es(t){return ui?!1:document.createElement("video").canPlayType(t)!==""}const hi={extension:{type:L.DetectionParser,priority:0},test:async()=>es("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},gi={extension:{type:L.DetectionParser,priority:0},test:async()=>es("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},vi={extension:{type:L.DetectionParser,priority:0},test:async()=>es("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},mi={extension:{type:L.DetectionParser,priority:0},test:async()=>ua("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class bi{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var n,l;let r=null,i=null;if(s.loadParser&&(i=this._parserHash[s.loadParser],i||ue(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!i){for(let p=0;p<this.parsers.length;p++){const u=this.parsers[p];if(u.load&&((n=u.test)!=null&&n.call(u,e,s,this))){i=u;break}}if(!i)return ue(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await i.load(e,s,this),a.parser=i;for(let p=0;p<this.parsers.length;p++){const u=this.parsers[p];u.parse&&u.parse&&await((l=u.testParse)==null?void 0:l.call(u,r,s,this))&&(r=await u.parse(r,s,this)||r,a.parser=u)}return r})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const r={},i=ea(e),n=Je(e,u=>({alias:[u],src:u,data:{}})),l=n.length,p=n.map(async u=>{const c=Ae.toAbsolute(u.src);if(!r[u.src])try{this.promiseCache[c]||(this.promiseCache[c]=this._getLoadPromiseAndParser(c,u)),r[u.src]=await this.promiseCache[c].promise,s&&s(++a/l)}catch(h){throw delete this.promiseCache[c],delete r[u.src],new Error(`[Loader.load] Failed to load ${c}.
${h}`)}});return await Promise.all(p),i?r[n[0].src]:r}async unload(e){const a=Je(e,r=>({alias:[r],src:r})).map(async r=>{var l,p;const i=Ae.toAbsolute(r.src),n=this.promiseCache[i];if(n){const u=await n.promise;delete this.promiseCache[i],await((p=(l=n.parser)==null?void 0:l.unload)==null?void 0:p.call(l,u,r,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&ue(`[Assets] loadParser name conflict "${s.name}"`):ue("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function $e(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const xi=".json",yi="application/json",_i={extension:{type:L.LoadParser,priority:Fe.Low},name:"loadJson",test(t){return $e(t,yi)||qe(t,xi)},async load(t){return await(await X.get().fetch(t)).json()}},Ai=".txt",wi="text/plain",ki={name:"loadTxt",extension:{type:L.LoadParser,priority:Fe.Low,name:"loadTxt"},test(t){return $e(t,wi)||qe(t,Ai)},async load(t){return await(await X.get().fetch(t)).text()}},Ei=["normal","bold","100","200","300","400","500","600","700","800","900"],Si=[".ttf",".otf",".woff",".woff2"],Ti=["font/ttf","font/otf","font/woff","font/woff2"],Pi=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Ri(t){const e=Ae.extname(t),r=Ae.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(l=>l.charAt(0).toUpperCase()+l.slice(1));let i=r.length>0;for(const l of r)if(!l.match(Pi)){i=!1;break}let n=r.join(" ");return i||(n=`"${n.replace(/[\\"]/g,"\\$&")}"`),n}const Li=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function Ii(t){return Li.test(t)?t:encodeURI(t)}const Oi={extension:{type:L.LoadParser,priority:Fe.Low},name:"loadWebFont",test(t){return $e(t,Ti)||qe(t,Si)},async load(t,e){var a,r,i;const s=X.get().getFontFaceSet();if(s){const n=[],l=((a=e.data)==null?void 0:a.family)??Ri(t),p=((i=(r=e.data)==null?void 0:r.weights)==null?void 0:i.filter(c=>Ei.includes(c)))??["normal"],u=e.data??{};for(let c=0;c<p.length;c++){const h=p[c],g=new FontFace(l,`url(${Ii(t)})`,{...u,weight:h});await g.load(),s.add(g),n.push(g)}return ne.set(`${l}-and-url`,{url:t,fontFaces:n}),n.length===1?n[0]:n}return ue("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{ne.remove(`${e.family}-and-url`),X.get().getFontFaceSet().delete(e)})}};function ts(t,e=1){var a;const s=(a=dt.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function ss(t,e,s){t.label=s,t._sourceOrigin=s;const a=new _e({source:t,label:s}),r=()=>{delete e.promiseCache[s],ne.has(s)&&ne.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(ue("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),a.once("destroy",()=>{t.destroyed||(ue("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),a}const Bi=".svg",Ci="image/svg+xml",Fi={extension:{type:L.LoadParser,priority:Fe.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return $e(t,Ci)||qe(t,Bi)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?$i(t):qi(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function qi(t,e,s,a){var M,P,$;const i=await(await X.get().fetch(t)).blob(),n=URL.createObjectURL(i),l=new Image;l.src=n,l.crossOrigin=a,await l.decode(),URL.revokeObjectURL(n);const p=document.createElement("canvas"),u=p.getContext("2d"),c=((M=e.data)==null?void 0:M.resolution)||ts(t),h=((P=e.data)==null?void 0:P.width)??l.width,g=(($=e.data)==null?void 0:$.height)??l.height;p.width=h*c,p.height=g*c,u.drawImage(l,0,0,h*c,g*c);const{parseAsGraphicsContext:k,...T}=e.data??{},G=new ta({resource:p,alphaMode:"premultiply-alpha-on-upload",resolution:c,...T});return ss(G,s,t)}async function $i(t){const s=await(await X.get().fetch(t)).text(),a=new Ur;return a.svg(s),a}const Mi=`(function () {
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
`;let Be=null,Jt=class{constructor(){Be||(Be=URL.createObjectURL(new Blob([Mi],{type:"application/javascript"}))),this.worker=new Worker(Be)}};Jt.revokeObjectURL=function(){Be&&(URL.revokeObjectURL(Be),Be=null)};const Wi=`(function () {
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
`;let Ce=null;class ha{constructor(){Ce||(Ce=URL.createObjectURL(new Blob([Wi],{type:"application/javascript"}))),this.worker=new Worker(Ce)}}ha.revokeObjectURL=function(){Ce&&(URL.revokeObjectURL(Ce),Ce=null)};let Gs=0,Yt;class ji{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new Jt;s.addEventListener("message",a=>{s.terminate(),Jt.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Yt===void 0&&(Yt=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Yt&&(this._createdWorkers++,e=new ha().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((r,i)=>{this._queue.push({id:e,arguments:s,resolve:r,reject:i})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[Gs]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:Gs++,id:a})}}const Hs=new ji,Ni=[".jpeg",".jpg",".png",".webp",".avif"],zi=["image/jpeg","image/png","image/webp","image/avif"];async function Ui(t,e){var r;const s=await X.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const ga={name:"loadTextures",extension:{type:L.LoadParser,priority:Fe.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return $e(t,zi)||qe(t,Ni)},async load(t,e,s){var i;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Hs.isImageBitmapSupported()?a=await Hs.loadImageBitmap(t,e):a=await Ui(t,e):a=await new Promise((n,l)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?n(a):(a.onload=()=>{n(a)},a.onerror=l)});const r=new ta({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((i=e.data)==null?void 0:i.resolution)||ts(t),...e.data});return ss(r,s,t)},unload(t){t.destroy(!0)}},va=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Di=va.map(t=>`video/${t.substring(1)}`);function Gi(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=Vi(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function Hi(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",r),t.load();function a(){i(),e()}function r(n){i(),s(n)}function i(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",r)}})}function Vi(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const Yi={name:"loadVideo",extension:{type:L.LoadParser,name:"loadVideo"},test(t){const e=$e(t,Di),s=qe(t,va);return e||s},async load(t,e,s){var p,u;const a={...Ut.defaultOptions,resolution:((p=e.data)==null?void 0:p.resolution)||ts(t),alphaMode:((u=e.data)==null?void 0:u.alphaMode)||await Wr(),...e.data},r=document.createElement("video"),i={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(i).forEach(c=>{const h=i[c];h!==void 0&&r.setAttribute(c,h)}),a.muted===!0&&(r.muted=!0),Gi(r,t,a.crossorigin);const n=document.createElement("source");let l;if(t.startsWith("data:"))l=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const c=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();l=Ut.MIME_TYPES[c]||`video/${c}`}return n.src=t,l&&(n.type=l),new Promise(c=>{const h=async()=>{const g=new Ut({...a,resource:r});r.removeEventListener("canplay",h),e.data.preload&&await Hi(r),c(ss(g,s,t))};r.addEventListener("canplay",h),r.appendChild(n)})},unload(t){t.destroy(!0)}},ma={extension:{type:L.ResolveParser,name:"resolveTexture"},test:ga.test,parse:t=>{var e;return{resolution:parseFloat(((e=dt.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},Xi={extension:{type:L.ResolveParser,priority:-2,name:"resolveJson"},test:t=>dt.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:ma.parse};class Ki{constructor(){this._detections=[],this._initialized=!1,this.resolver=new dt,this.loader=new bi,this.cache=ne,this._backgroundLoader=new ci(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var i,n;if(this._initialized){ue("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let l=e.manifest;typeof l=="string"&&(l=await this.load(l)),this.resolver.addManifest(l)}const s=((i=e.texturePreference)==null?void 0:i.resolution)??1,a=typeof s=="number"?[s]:s,r=await this._detectFormats({preferredFormats:(n=e.texturePreference)==null?void 0:n.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=ea(e),r=Je(e).map(l=>{if(typeof l!="string"){const p=this.resolver.getAlias(l);return p.some(u=>!this.resolver.hasKey(u))&&this.add(l),Array.isArray(p)?p[0]:p}return this.resolver.hasKey(l)||this.add({alias:l,src:l}),l}),i=this.resolver.resolve(r),n=await this._mapLoadToResolve(i,s);return a?n[r[0]]:n}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const r=this.resolver.resolveBundle(e),i={},n=Object.keys(r);let l=0,p=0;const u=()=>{s==null||s(++l/p)},c=n.map(h=>{const g=r[h];return p+=Object.keys(g).length,this._mapLoadToResolve(g,u).then(k=>{i[h]=k})});return await Promise.all(c),a?i[e[0]]:i}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return ne.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=ne.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(a,s);this._backgroundLoader.active=!0;const i={};return a.forEach(n=>{const l=r[n.src],p=[n.src];n.alias&&p.push(...n.alias),p.forEach(u=>{i[u]=l}),ne.set(p,l)}),i}async unload(e){this._initialized||await this.init();const s=Je(e).map(r=>typeof r!="string"?r.src:r),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=Je(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(r=>this._unloadFromResolved(s[r]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{ne.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,r)=>s.indexOf(a)===r),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const Ie=new Ki;he.handleByList(L.LoadParser,Ie.loader.parsers).handleByList(L.ResolveParser,Ie.resolver.parsers).handleByList(L.CacheParser,Ie.cache.parsers).handleByList(L.DetectionParser,Ie.detections);he.add(di,pi,fi,mi,hi,gi,vi,_i,ki,Oi,Fi,ga,Yi,li,oi,ma,Xi);const Vs={loader:L.LoadParser,resolver:L.ResolveParser,cache:L.CacheParser,detection:L.DetectionParser};he.handle(L.Asset,t=>{const e=t.ref;Object.entries(Vs).filter(([s])=>!!e[s]).forEach(([s,a])=>he.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(Vs).filter(s=>!!e[s]).forEach(s=>he.remove(e[s]))});class Qi extends jr{constructor(e,s){const{text:a,resolution:r,style:i,anchor:n,width:l,height:p,roundPixels:u,...c}=e;super({...c}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=i,this.resolution=r??null,this.allowChildren=!1,this._anchor=new Nr({_onUpdate:()=>{this.onViewUpdate()}}),n&&(this.anchor=n),this.roundPixels=u??!1,l!==void 0&&(this.width=l),p!==void 0&&(this.height=p)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,r=-s*this.anchor.x;let i=0;return e.x>=r&&e.x<=r+s&&(i=-a*this.anchor.y,e.y>=i&&e.y<=i+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function Ji(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(lt(ct,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class Zi extends Qi{constructor(...e){const s=Ji(e,"Text");super(s,sa),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=Dr.measureText(this._text,this._style),{width:r,height:i}=a;e.minX=-s._x*r,e.maxX=e.minX+r,e.minY=-s._y*i,e.maxY=e.minY+i}}var en=D('<p style="color: red;" class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Error:</strong> </p>'),tn=D('<div class="svelte-1t2q5b9"> </div>'),sn=D('<details class="svelte-1t2q5b9"><summary class="svelte-1t2q5b9"> </summary> <!></details>'),an=D(`<div style="
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
  " class="svelte-1t2q5b9"><h3 class="svelte-1t2q5b9">🎰 Oma-peli Debug</h3> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Status:</strong> </p> <!> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Base:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">BG URL:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Sample:</strong> </p> <!></div>`),rn=D('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-1t2q5b9"> </div>'),nn=D('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-1t2q5b9"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-1t2q5b9"> </span></div>'),on=D(`<div style="
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
      " class="svelte-1t2q5b9">Jatka pelaamista</button></div>`),ln=D(`<div style="
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
      " class="svelte-1t2q5b9">Sulje</button></div>`),cn=D('<div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #ff00ff; font-size: 16px; animation: pulse 1s infinite;" class="svelte-1t2q5b9"><span class="svelte-1t2q5b9">🎰 FREE SPINS:</span> <span class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-top: 1px solid #555; padding-top: 8px;" class="svelte-1t2q5b9"><span style="color: #fff; font-size: 14px;" class="svelte-1t2q5b9">Total Won:</span> <span style="color: #00ff00; font-size: 14px;" class="svelte-1t2q5b9"> </span></div>',1),dn=D(`<div style="
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
        " class="svelte-1t2q5b9">⏹ STOP</button></div>`),fn=D(`<div style="
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
          " class="svelte-1t2q5b9">Cancel</button></div>`),pn=D(`<button style="
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
      " class="svelte-1t2q5b9">🔄 AUTOPLAY</button> <!>`,1),un=D(`<!> <!> <!> <div class="svelte-1t2q5b9"></div> <div class="svelte-1t2q5b9"><!> <div style="display: flex; justify-content: space-between; margin-bottom: 8px;" class="svelte-1t2q5b9"><span style="color: #fff;" class="svelte-1t2q5b9">CREDITS:</span> <span style="color: #ffd700;" class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; border-top: 1px solid #555; padding-top: 8px;" class="svelte-1t2q5b9"><span style="color: #fff;" class="svelte-1t2q5b9">BET:</span> <span style="color: #00ff00;" class="svelte-1t2q5b9"> </span></div></div> <div style="
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
" class="svelte-1t2q5b9"><!></div> <button class="svelte-1t2q5b9"> </button> <button title="SPIN" class="svelte-1t2q5b9"></button>`,1);function hn(t,e){Qs(e,!0);const s=13,a=1445,r=1e3,i=1.75,n=-30,l=-10,p=160,u=0,c=720,h=750,g=.8,k=50,T=30,G=-40,M=1,P="height",H=Math.round(100*i),Y=Math.round(H*(700/760)),Ze=Y+10,ge=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],W=typeof window<"u"&&window.location.hostname.includes("github.io")?"/web-sdk/oma-peli/symbols":`${Ke}/symbols`,Me={a:`${W}/Blue_hotrod.jpg`,b:`${W}/Blue_jacket.jpg`,c:`${W}/Blue_rollers.jpg`,d:`${W}/Blue_speakers.jpg`,e:`${W}/Premium_blonde.jpg`,f:`${W}/Premium_brunette.jpg`,g:`${W}/Premium_rocker.jpg`,h:`${W}/New_Wild.jpg`,i:`${W}/Red_burger.jpg`,j:`${W}/Red_fries.jpg`,k:`${W}/Red_milkshake.jpg`,l:`${W}/Scatter.jpg`,emptyslot:`${W}/Emptyslot.jpg`},ft=`${W}/bg_base.jpg`,as=`${W}/ReelFrames.png`,rs=`${W}/RockABillyReels_logo.png`,is={spin:`${Ke}/sounds/spin.mp3`,stop:`${Ke}/sounds/stop.mp3`,win:`${Ke}/sounds/win.mp3`};let ve=C(!0),tt={},st=null,we=null,We=null,je=null,Ne=C("Initializing..."),ke=C(""),J=[],oe=C(1e3),V=C(10);const ns=1,pt=100;let me=C(!1),Ee=C(0),ze=C(!1),ba=C(0),be=!1,re=null,ut=!1,Ue=C(0),Se=C(0),De=C(0),ht=C(0),gt=Cs(()=>o(Se)>0?(o(De)/o(Se)*100).toFixed(2):"0.00"),vt=Cs(()=>o(Ue)>0?(o(ht)/o(Ue)*100).toFixed(2):"0.00"),te=C(!1),le=C(0),xe=C(0),mt=C(0),bt=C(0);const os={k:.17,j:.14,i:.14,c:.065,d:.065,b:.05,a:.05,f:.025,e:.015,g:.01,l:.07,h:0,emptyslot:.4};function ls(f){if(f===6)return Math.random()<.6?"emptyslot":"h";const v=Math.random();let d=0;const _=ge.filter(w=>w!=="h"),b=_.reduce((w,O)=>w+os[O],0);for(const w of _)if(d+=os[w]/b,v<d)return w;return"k"}function cs(){const f=[];for(let v=0;v<s;v++)f.push(ls(v));return f}function xa(f){return f<3?{col:0,row:f}:f<6?{col:1,row:f-3}:f===6?{col:2,row:0}:f<10?{col:3,row:f-7}:{col:4,row:f-10}}function Ge(f,v){return f===0?v:f===1?3+v:f===2?6:f===3?7+v:f===4?10+v:-1}function ya(){const f=Math.random();return o(te)?f<.5?3:f<.8?5:10:f<.5?2:f<.8?3:5}const _a={k:{3:.3,4:1,5:5},j:{3:.5,4:2,5:10},i:{3:.5,4:2,5:10},c:{3:1.5,4:5,5:20},d:{3:1.5,4:5,5:20},b:{3:2,4:7,5:25},a:{3:2,4:7,5:25},f:{3:3,4:15,5:50},e:{3:5,4:20,5:75},g:{3:5,4:25,5:100},h:{},l:{},emptyslot:{}};function Aa(){var O;const f=[],v=[];for(let I=0;I<s;I++)j[I]==="l"&&v.push(I);if(v.length>=5){const I=8+(v.length-5);A(le,o(le)+I),o(te)?console.log(`🎰 FREE SPINS RETRIGGERED! +${I} FREE SPINS! Total: ${o(le)}`):(A(te,!0),A(xe,0),Le(mt),console.log(`🎰 FREE SPINS TRIGGERED! ${v.length} scatters = ${I} FREE SPINS!`)),f.push({symbol:"l",count:v.length,payout:0,positions:v,multiplier:1})}j[0],j[1],j[2],j[3],j[4],j[5],j[6],j[7],j[8],j[9],j[10],j[11],j[12];const d=[];for(let I=0;I<3;I++)for(let E=0;E<3;E++)for(let B=0;B<1;B++)for(let S=0;S<3;S++)for(let R=0;R<3;R++){const U=[Ge(0,I),Ge(1,E),Ge(2,B),Ge(3,S),Ge(4,R)];d.push(U)}console.log(`Generated ${d.length} possible paths (should be 81)`);const _=new Map;for(const I of d){const E=I.map(R=>j[R]);if(E[0]==="emptyslot"||E[0]==="l")continue;let B=null;for(let R=0;R<E.length;R++)if(E[R]!=="h"&&E[R]!=="emptyslot"&&E[R]!=="l"){B=E[R];break}if(!B)continue;let S=0;for(let R=0;R<E.length;R++){const U=E[R];if(U===B||U==="h")S++;else break}if(S>=3){const R=`${B}-${S}`,U=_.get(R);U?U.lineCount++:_.set(R,{symbol:B,length:S,lineCount:1,examplePath:I.slice(0,S)})}}const b=[],w=_.size>0?ya():1;for(const[I,E]of _.entries()){const B=(O=_a[E.symbol])==null?void 0:O[E.length];if(B!==void 0&&B>0){const S=B*o(V),R=S*w;console.log(`Win: ${E.length}x ${E.symbol} (found on ${E.lineCount} ways) = ${S} x ${w} = ${R}`),b.push({symbol:E.symbol,count:E.length,payout:R,positions:E.examplePath,multiplier:w})}}return f.push(...b),f}let ye=C(0),Te=C(de([])),ce=C(!1),at=C(!1);const wa={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function xt(f){if(!o(ve)||!tt[f])return;const v=tt[f];v.currentTime=0,v.play().catch(d=>{console.warn("Äänen toisto epäonnistui:",f,d)})}function ka(f){He.forEach(v=>q.stage.removeChild(v)),He=[],f.forEach(v=>{v.positions.forEach(d=>{const _=Pe[d],b=new Dt().rect(0,0,H,Y).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});b.x=_.container.x,b.y=_.container.y,q.stage.addChild(b),He.push(b);let w=0,O=1;const I=.05;q.ticker.add(()=>{w+=O*I,w>=.4&&(O=-1),w<=0&&(O=1),b.alpha=.5+w})})})}function yt(){He.forEach(f=>q.stage.removeChild(f)),He=[]}let j=cs(),_t,q,Pe=[],He=[];class Ea{constructor(v,d){ee(this,"index");ee(this,"container");ee(this,"offset",0);ee(this,"speed",0);ee(this,"targetSpeed",30);ee(this,"state","idle");ee(this,"stopDelay",0);ee(this,"bounceOffset",0);ee(this,"bounceSpeed",0);ee(this,"bounceFrames",0);this.index=v,this.container=d}start(v){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=v}update(){this.state!=="idle"&&(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"&&(this.speed*=.92,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,xt("stop"))),this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=Ze&&(this.offset=0,j[this.index]=ls(this.index))))}draw(){const v=this.container;v.removeChildren();const d=j[this.index];if(!d||!st||!st[d])return;const _=st[d];if(!_)return;const b=this.offset+this.bounceOffset,w=new it(_);w.width=H,w.height=Y,w.x=0,w.y=b,v.addChild(w)}}Js(async()=>{q=new fa,await q.init({width:a,height:r,background:"#001a33"}),_t.appendChild(q.canvas);const f={};try{A(Ne,"Loading background and UI images..."),J.push(`Loading background: ${ft}`),J.push(`Loading reel frames: ${as}`),J.push(`Loading logo: ${rs}`),await Ie.load([{alias:"background",src:ft},{alias:"reelframes",src:as},{alias:"logo",src:rs}]),we=_e.from("background"),We=_e.from("reelframes"),je=_e.from("logo"),console.log("✅ Background texture created:",we.width,"x",we.height),console.log("✅ Reel frames texture created:",We.width,"x",We.height),console.log("✅ Logo texture created:",je.width,"x",je.height),J.push("✅ All UI images loaded"),A(Ne,"Loading symbols...");const d=[];for(const _ of ge)d.push({alias:_,src:Me[_]});await Ie.load(d);for(const _ of ge){const b=Me[_];J.push(`Loading symbol ${_}: ${b}`);try{const w=_e.from(_);f[_]=w,console.log(`✅ Symbol ${_} loaded:`,w.width,"x",w.height),J.push(`✅ Symbol ${_} loaded`)}catch(w){const O=`❌ Failed to load symbol ${_} from ${b}: ${w}`;throw J.push(O),console.error(O),new Error(O)}}st=f,A(Ne,"Assets loaded successfully!")}catch(d){A(ke,`Asset loading failed: ${d}`),J.push(o(ke)),console.error(o(ke));return}console.log("Ladataan ääniefektit...");for(const[d,_]of Object.entries(is)){const b=new Audio;b.src=_,b.preload="auto",b.volume=.7,b.load(),b.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${_} (käytetään hiljaista placeholderia)`)}),tt[d]=b}console.log("Ladataan ääniefektit...");for(const[d,_]of Object.entries(is)){const b=new Audio;b.src=_,b.preload="auto",b.volume=.7,b.load(),b.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${_} (käytetään hiljaista placeholderia)`)}),tt[d]=b}if(console.log("Taustakuva ladattu, tekstuuri:",we),we){const d=new it(we);q.renderer.width/q.renderer.height;const _=d.texture.width/d.texture.height;let b;b=q.renderer.height/d.texture.height,b*=M,d.scale.set(b),d.x=(q.renderer.width-d.width)/2,d.y=(q.renderer.height-d.height)/2+G,q.stage.addChild(d),console.log("Taustakuva lisätty:",P,"mode, size:",d.width.toFixed(0),"x",d.height.toFixed(0),"image aspect:",_.toFixed(2),"scale:",b.toFixed(2),"pos:",d.x.toFixed(0),d.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(d=>({x:d.x+n,y:d.y+l})),Pe=[];for(let d=0;d<s;d++){const _=xa(d),b=_.col,w=_.row,O=300+b*(H+20),I=250+w*(Y+15),E=d===6?O+u:O,B=d===6?I+p:I,S=new Zt;S.x=E+n,S.y=B+l;const R=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],U=new Dt().rect(0,0,H,Y).fill({color:R[d],alpha:.3});U.x=S.x,U.y=S.y,q.stage.addChild(U);const Mt=new sa({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),Z=new Zi({text:d.toString(),style:Mt});Z.x=S.x+5,Z.y=S.y+5,q.stage.addChild(Z);const K=new Dt().rect(0,0,H,Y).fill(16777215);K.x=S.x,K.y=S.y,S.mask=K,q.stage.addChild(K),q.stage.addChild(S),Pe.push(new Ea(d,S))}if(We){const d=new it(We);d.scale.set(1),d.x=250,d.y=200,q.stage.addChild(d),console.log("Reel frames lisätty:",d.width.toFixed(0),"x",d.height.toFixed(0))}if(je){const d=new it(je);d.scale.set(g),d.x=(q.renderer.width-d.width)/2+k,d.y=T,q.stage.addChild(d),console.log("Logo lisätty päällimmäiseen layeriin:",d.width.toFixed(0),"x",d.height.toFixed(0))}q.ticker.add(Sa)});function Sa(){for(const f of Pe)f.update(),f.draw();if(!o(ce)&&!ut&&Pe.every(f=>f.state==="stopped")){ut=!0;const f=Aa();console.log(`Checking wins, found ${f.length} wins`),f.length>0?(A(Te,de(f)),A(ye,de(f.reduce((v,d)=>v+d.payout,0))),Ta(o(ye)),A(ce,!0),A(ba,de(Date.now())),console.log(`🎉 VOITTO! ${o(ye)} pistettä! Uusi saldo: ${o(oe)}`),console.log(`isShowingWin set to: ${o(ce)}, totalWin: ${o(ye)}`),f.forEach(v=>{const d=v.multiplier?` (${v.multiplier}x multiplier)`:"";console.log(`${v.count}x ${v.symbol} = ${v.payout} pistettä${d}`)}),ka(f),xt("win"),o(te)&&o(le)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${o(xe)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${o(xe).toFixed(2)}`),A(te,!1),A(xe,0)},2e3)),o(me)&&!be&&(be=!0,re=window.setTimeout(()=>{o(ce)&&o(me)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),A(ce,!1),yt()),re=window.setTimeout(()=>{be=!1,wt()},200)},1500))):(console.log("No wins found this spin"),o(me)&&!be&&(be=!0,re=window.setTimeout(()=>{be=!1,wt()},1e3)))}}function ds(){if(o(te)&&o(le)>0)Le(le,-1),Le(bt),console.log(`🎰 FREE SPIN! Remaining: ${o(le)}`);else if(!o(te)){if(o(oe)<o(V)){alert(`Not enough credits! Balance: ${o(oe)}, Bet: ${o(V)}`),At();return}A(oe,o(oe)-o(V)),Le(Ue),A(Se,o(Se)+o(V))}re!==null&&(clearTimeout(re),re=null),A(Te,de([])),A(ye,0),A(ce,!1),ut=!1,yt(),j=cs(),Pe.forEach((f,v)=>f.start(60+v*10)),xt("spin")}function Ta(f){A(oe,o(oe)+f),A(De,o(De)+f),o(te)&&A(xe,o(xe)+f),f>0&&Le(ht)}function Pa(){o(V)<pt&&A(V,de(Math.min(o(V)+1,pt)))}function Ra(){o(V)>ns&&A(V,de(Math.max(o(V)-1,ns)))}function La(){A(V,pt)}function Ve(f){A(me,!0),A(Ee,de(f)),A(ze,!1),wt()}function At(){A(me,!1),A(Ee,0),be=!1,re!==null&&(clearTimeout(re),re=null)}function wt(){if(!o(me)||o(Ee)<=0){At();return}console.log(`Autoplay: Starting spin ${o(Ee)} rounds left`),ds(),Le(Ee,-1)}function Ia(){confirm("Reset all statistics?")&&(A(Ue,0),A(Se,0),A(De,0),A(ht,0),A(mt,0),A(bt,0))}var fs=un(),ps=Oe(fs);{var Oa=f=>{var v=an(),d=m(x(v),2),_=m(x(d));y(d);var b=m(d,2);{var w=Z=>{var K=en(),Ye=m(x(K));y(K),se(()=>F(Ye,` ${o(ke)??""}`)),z(Z,K)};Q(b,Z=>{o(ke)&&Z(w)})}var O=m(b,2),I=m(x(O));I.nodeValue=` ${Ke??""}`,y(O);var E=m(O,2),B=m(x(E));B.nodeValue=` ${ft??""}`,y(E);var S=m(E,2),R=m(x(S));y(S);var U=m(S,2);{var Mt=Z=>{var K=sn(),Ye=x(K),Ja=x(Ye);y(Ye);var Za=m(Ye,2);Ms(Za,17,()=>J,$s,(er,tr)=>{var Wt=tn(),sr=x(Wt,!0);y(Wt),se(()=>F(sr,o(tr))),z(er,Wt)}),y(K),se(()=>F(Ja,`Log (${J.length??""})`)),z(Z,K)};Q(U,Z=>{J.length>0&&Z(Mt)})}y(v),se(()=>{F(_,` ${o(Ne)??""}`),F(R,` ${Me.a??""}`)}),z(f,v)};Q(ps,f=>{(o(Ne)!=="Assets loaded successfully!"||o(ke))&&f(Oa)})}var us=m(ps,2);{var Ba=f=>{var v=on(),d=m(x(v),2),_=x(d);y(d);var b=m(d,2);Ms(b,17,()=>o(Te),$s,(E,B)=>{var S=rn(),R=x(S);y(S),se(U=>F(R,`${o(B).count??""} × ${wa[o(B).symbol]??""} = ${U??""} pistettä`),[()=>o(B).payout.toFixed(2)]),z(E,S)});var w=m(b,2);{var O=E=>{var B=nn(),S=x(B),R=x(S);y(S),y(B),se(()=>F(R,`✨ ${o(Te)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),z(E,B)};Q(w,E=>{o(Te).length>0&&o(Te)[0].multiplier>1&&E(O)})}var I=m(w,2);y(v),se(()=>F(_,`${o(ye)??""} pistettä`)),N("click",I,()=>{A(ce,!1),yt(),console.log("Win popup closed, ready for next spin")}),z(f,v)};Q(us,f=>{o(ye)>0&&o(ce)&&f(Ba)})}var hs=m(us,2);{var Ca=f=>{var v=ln(),d=m(x(v),8);y(v),N("click",d,()=>{A(at,!1)}),z(f,v)};Q(hs,f=>{o(at)&&f(Ca)})}var gs=m(hs,2);Cr(gs,f=>_t=f,()=>_t);var rt=m(gs,2),vs=x(rt);{var Fa=f=>{var v=cn(),d=Oe(v),_=m(x(d),2),b=x(_,!0);y(_),y(d);var w=m(d,2),O=m(x(w),2),I=x(O,!0);y(O),y(w),se(E=>{F(b,o(le)),F(I,E)},[()=>o(xe).toFixed(2)]),z(f,v)};Q(vs,f=>{o(te)&&f(Fa)})}var kt=m(vs,2),ms=m(x(kt),2),qa=x(ms,!0);y(ms),y(kt);var bs=m(kt,2),xs=m(x(bs),2),$a=x(xs,!0);y(xs),y(bs),y(rt);var Et=m(rt,2),ys=m(x(Et),2),_s=x(ys),St=m(_s,2),Ma=x(St,!0);y(St);var As=m(St,2),Wa=m(As,2);y(ys),y(Et);var ws=m(Et,2),Tt=m(ws,2),Pt=m(x(Tt),2),ks=m(x(Pt),2),ja=x(ks,!0);y(ks),y(Pt);var Rt=m(Pt,2),Es=m(x(Rt),2),Na=x(Es,!0);y(Es),y(Rt);var Lt=m(Rt,2),Ss=m(x(Lt),2),za=x(Ss,!0);y(Ss),y(Lt);var It=m(Lt,2),Ot=m(x(It),2),Ua=x(Ot);y(Ot),y(It);var Bt=m(It,2),Ct=m(x(Bt),2),Da=x(Ct);y(Ct),y(Bt);var Ft=m(Bt,2),Ts=m(x(Ft),2),Ga=x(Ts,!0);y(Ts),y(Ft);var qt=m(Ft,2),Ps=m(x(qt),2),Ha=x(Ps,!0);y(Ps),y(qt);var Va=m(qt,2);y(Tt);var $t=m(Tt,2),Ya=x($t);{var Xa=f=>{var v=dn(),d=m(x(v),2),_=x(d);y(d);var b=m(d,2);y(v),se(()=>F(_,`${o(Ee)??""} left`)),N("click",b,At),z(f,v)},Ka=f=>{var v=pn(),d=Oe(v),_=m(d,2);{var b=w=>{var O=fn(),I=m(x(O),2),E=m(I,2),B=m(E,2),S=m(B,2),R=m(S,2),U=m(R,2);y(O),N("click",I,()=>Ve(10)),N("click",E,()=>Ve(100)),N("click",B,()=>Ve(1e3)),N("click",S,()=>Ve(1e4)),N("click",R,()=>Ve(1e5)),N("click",U,()=>{A(ze,!1)}),z(w,O)};Q(_,w=>{o(ze)&&w(b)})}N("click",d,()=>{A(ze,!o(ze))}),z(f,v)};Q(Ya,f=>{o(me)?f(Xa):f(Ka,!1)})}y($t);var Re=m($t,2),Qa=x(Re,!0);y(Re);var Rs=m(Re,2);pe(Rs,"style",`
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
  `),se((f,v,d,_,b,w)=>{pe(rt,"style",`
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
`),F(qa,f),F($a,o(V)),F(Ma,o(V)),F(ja,v),F(Na,d),F(za,_),pe(Ot,"style",`color: ${b??""};`),F(Ua,`${o(gt)??""}%`),pe(Ct,"style",`color: ${w??""};`),F(Da,`${o(vt)??""}%`),F(Ga,o(mt)),F(Ha,o(bt)),pe(Re,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(o(ve)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(o(ve)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),pe(Re,"title",o(ve)?"Mykistä äänet":"Laita äänet päälle"),F(Qa,o(ve)?"🔊":"🔇")},[()=>o(oe).toLocaleString(),()=>o(Ue).toLocaleString(),()=>o(Se).toLocaleString(),()=>o(De).toLocaleString(),()=>parseFloat(o(gt))>=95?"#00ff00":parseFloat(o(gt))>=85?"#ffff00":"#ff6666",()=>parseFloat(o(vt))>=30?"#00ff00":parseFloat(o(vt))>=20?"#ffff00":"#ff6666"]),N("click",_s,Ra),N("click",As,Pa),N("click",Wa,La),N("click",ws,()=>{A(at,!o(at))}),N("click",Va,Ia),N("click",Re,()=>{A(ve,!o(ve))}),N("click",Rs,ds),z(t,fs),Zs()}var gn=D('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),vn=D('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function mn(t,e){Qs(e,!1);let s=Fr(e,"isAuthenticated",12,!1),a=Xt(""),r=Xt(!1);const i="slot2024";function n(){o(a)===i?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(A(r,!0),A(a,""),setTimeout(()=>A(r,!1),3e3))}Js(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),lr();var l=or(),p=Oe(l);{var u=c=>{var h=vn(),g=x(h),k=m(x(g),4),T=x(k);Yr(T),Br(2),y(k);var G=m(k,2);{var M=P=>{var $=gn();z(P,$)};Q(G,P=>{o(r)&&P(M)})}y(g),y(h),Kr(T,()=>o(a),P=>A(a,P)),N("submit",k,Qr(n)),z(c,h)};Q(p,c=>{s()||c(u)})}z(t,l),Zs()}var bn=D('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),xn=D("<!> <!>",1);function In(t){let e=Xt(!1);var s=xn(),a=Oe(s);mn(a,{get isAuthenticated(){return o(e)},set isAuthenticated(n){A(e,n)},$$legacy:!0});var r=m(a,2);{var i=n=>{var l=bn(),p=m(Oe(l),2);hn(p,{}),z(n,l)};Q(r,n=>{o(e)&&n(i)})}z(t,s)}export{oa as A,ra as C,ii as R,ei as S,la as V,In as _,Zr as u};
