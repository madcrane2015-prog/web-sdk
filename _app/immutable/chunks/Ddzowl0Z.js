const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CW1z-1Gk.js","./DNWEu6uq.js","./DEliLNnF.js","./DWgShhht.js","./C04N3yhf.js","./C2GHuDhf.js","./CjkyMccx.js","./DKoCjlza.js"])))=>i.map(i=>d[i]);
var Xa=Object.defineProperty;var Ka=(t,e,s)=>e in t?Xa(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var ee=(t,e,s)=>Ka(t,typeof e!="symbol"?e+"":e,s);import{f as Qa,l as Ja,t as D,g as N,a as U,d as Za}from"./DRDKHArV.js";import{i as er}from"./Dw5_DM93.js";import{y as ie,j as tr,a8 as sr,F as l,Q as ar,aa as rr,ab as ks,h as Es,e as qt,k as Ye,l as ir,ac as Us,w as zs,ad as nr,q as Ds,a7 as or,U as lr,a2 as Ss,aq as $t,z as Ts,ar as cr,as as dr,at as fr,o as ur,au as pr,av as hr,aw as gr,ax as vr,b as mr,ay as br,az as xr,a6 as yr,aA as _r,aB as Ar,D as wr,L as kr,p as Gs,ah as q,ag as Hs,T as A,aC as rt,f as Ie,s as m,c as y,r as _,t as se,I as Rs,a as Vs,aD as Er,aE as Gt}from"./DWgShhht.js";import{_ as Ps,p as de,i as Q}from"./DEliLNnF.js";import{s as $}from"./4RjN9yQL.js";import{b as Sr,p as Tr}from"./B1_V_3zc.js";import{b as Xe}from"./DXnRZjex.js";import{e as he,E as L,a as Rr,C as Xt,Q as lt,V as ct,N as Mt,D as X,H as Pr,p as _e,a0 as Ce,a1 as Ae,a2 as Lr,w as pe,a3 as Qe,a4 as Ys,a5 as Fe,a6 as ne,a7 as dt,a8 as Xs,a9 as Ir,aa as Wt,ab as Or,ac as Br,y as it}from"./DNWEu6uq.js";import{A as Cr,B as Ls,G as Fr,T as Ks,a as qr,b as jt}from"./C04N3yhf.js";function Is(t,e){return e}function $r(t,e,s,a){for(var r=[],i=e.length,n=0;n<i;n++)fr(e[n].e,r,!0);var o=i>0&&r.length===0&&s!==null;if(o){var u=s.parentNode;ur(u),u.append(s),a.clear(),fe(t,e[0].prev,e[i-1].next)}pr(r,()=>{for(var p=0;p<i;p++){var c=e[p];o||(a.delete(c.k),fe(t,c.prev,c.next)),hr(c.e,!o)}})}function Os(t,e,s,a,r,i=null){var n=t,o={flags:e,items:new Map,first:null};ie&&tr();var u=null,p=!1,c=ar(()=>{var h=s();return or(h)?h:h==null?[]:Ds(h)});sr(()=>{var h=l(c),g=h.length;if(p&&g===0)return;p=g===0;let k=!1;if(ie){var T=n.data===rr;T!==(g===0)&&(n=ks(),Es(n),qt(!1),k=!0)}if(ie){for(var G=null,M,R=0;R<g;R++){if(Ye.nodeType===8&&Ye.data===ir){n=Ye,k=!0,qt(!1);break}var F=h[R],H=a(F,R);M=Qs(Ye,o,G,null,F,H,R,r,e,s),o.items.set(H,M),G=M}g>0&&Es(ks())}ie||Mr(h,o,n,r,e,a,s),i!==null&&(g===0?u?Us(u):u=zs(()=>i(n)):u!==null&&nr(u,()=>{u=null})),k&&qt(!0),l(c)}),ie&&(n=Ye)}function Mr(t,e,s,a,r,i,n){var o=t.length,u=e.items,p=e.first,c=p,h,g=null,k=[],T=[],G,M,R,F;for(F=0;F<o;F+=1){if(G=t[F],M=i(G,F),R=u.get(M),R===void 0){var H=c?c.e.nodes_start:s;g=Qs(H,e,g,g===null?e.first:g.next,G,M,F,a,r,n),u.set(M,g),k=[],T=[],c=g.next;continue}if(Wr(R,G,F),(R.e.f&$t)!==0&&Us(R.e),R!==c){if(h!==void 0&&h.has(R)){if(k.length<T.length){var Y=T[0],ae;g=Y.prev;var Je=k[0],ge=k[k.length-1];for(ae=0;ae<k.length;ae+=1)Bs(k[ae],Y,s);for(ae=0;ae<T.length;ae+=1)h.delete(T[ae]);fe(e,Je.prev,ge.next),fe(e,g,Je),fe(e,ge,Y),c=Y,g=ge,F-=1,k=[],T=[]}else h.delete(R),Bs(R,c,s),fe(e,R.prev,R.next),fe(e,R,g===null?e.first:g.next),fe(e,g,R),g=R;continue}for(k=[],T=[];c!==null&&c.k!==M;)(c.e.f&$t)===0&&(h??(h=new Set)).add(c),T.push(c),c=c.next;if(c===null)continue;R=c}k.push(R),g=R,c=R.next}if(c!==null||h!==void 0){for(var Ze=h===void 0?[]:Ds(h);c!==null;)(c.e.f&$t)===0&&Ze.push(c),c=c.next;var W=Ze.length;if(W>0){var $e=null;$r(e,Ze,$e,u)}}Ts.first=e.first&&e.first.e,Ts.last=g&&g.e}function Wr(t,e,s,a){dr(t.v,e),t.i=s}function Qs(t,e,s,a,r,i,n,o,u,p){var c=(u&gr)!==0,h=(u&vr)===0,g=c?h?lr(r):Ss(r):r,k=(u&cr)===0?n:Ss(n),T={i:k,v:g,k:i,a:null,e:null,prev:s,next:a};try{return T.e=zs(()=>o(t,g,k,p),ie),T.e.prev=s&&s.e,T.e.next=a&&a.e,s===null?e.first=T:(s.next=T,s.e.next=T.e),a!==null&&(a.prev=T,a.e.prev=T.e),T}finally{}}function Bs(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,r=e?e.e.nodes_start:s,i=t.e.nodes_start;i!==a;){var n=mr(i);r.before(i),i=n}}function fe(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function jr(t){if(ie){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;ue(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var r=t.checked;ue(t,"checked",null),t.checked=r}}};t.__on_r=s,br(s),Qa()}}function ue(t,e,s,a){var r=t.__attributes??(t.__attributes={});ie&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[xr]=s),s==null?t.removeAttribute(e):typeof s!="string"&&Nr(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var Cs=new Map;function Nr(t){var e=Cs.get(t.nodeName);if(e)return e;Cs.set(t.nodeName,e=[]);for(var s,a=t,r=Element.prototype;r!==a;){s=_r(a);for(var i in s)s[i].set&&e.push(i);a=yr(a)}return e}function Ur(t,e,s=e){var a=Ar();Ja(t,"input",r=>{var i=r?t.defaultValue:t.value;if(i=Nt(t)?Ut(i):i,s(i),a&&i!==(i=e())){var n=t.selectionStart,o=t.selectionEnd;t.value=i??"",o!==null&&(t.selectionStart=n,t.selectionEnd=Math.min(o,t.value.length))}}),(ie&&t.defaultValue!==t.value||wr(e)==null&&t.value)&&s(Nt(t)?Ut(t.value):t.value),kr(()=>{var r=e();Nt(t)&&r===Ut(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function Nt(t){var e=t.type;return e==="number"||e==="range"}function Ut(t){return t===""?null:+t}function zr(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const Ht=[];he.handleByNamedList(L.Environment,Ht);async function Dr(t){if(!t)for(let e=0;e<Ht.length;e++){const s=Ht[e];if(s.value.test()){await s.value.load();return}}}let Ke;function Gr(){if(typeof Ke=="boolean")return Ke;try{Ke=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{Ke=!1}return Ke}var Js=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(Js||{});class Hr{constructor(e){this.items=[],this._name=e}emit(e,s,a,r,i,n,o,u){const{name:p,items:c}=this;for(let h=0,g=c.length;h<g;h++)c[h][p](e,s,a,r,i,n,o,u);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Vr=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Zs=class ea extends Rr{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...Vr,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Dr(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...ea.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof Xt&&(a={container:a},s&&(lt(ct,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const r=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=r?a.clearColor:Mt.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const r=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==r&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Js.ALL);const{clear:a,clearColor:r,target:i}=e;Mt.shared.setValue(r??this.background.colorRgba),s.renderTarget.clear(i,a,Mt.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new Hr(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const r in this.runners)this.runners[r].add(a);return this}_addPipes(e,s){const a=s.reduce((r,i)=>(r[i.name]=i.value,r),{});e.forEach(r=>{const i=r.value,n=r.name,o=a[n];this.renderPipes[n]=new i(this,o?new o:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Gr())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Zs.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let ta=Zs,nt;function Yr(t){return nt!==void 0||(nt=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??ta.defaultOptions.failIfMajorPerformanceCaveat};try{if(!X.get().getWebGLRenderingContext())return!1;let r=X.get().createCanvas().getContext("webgl",e);const i=!!((s=r==null?void 0:r.getContextAttributes())!=null&&s.stencil);if(r){const n=r.getExtension("WEBGL_lose_context");n&&n.loseContext()}return r=null,i}catch{return!1}})()),nt}let ot;async function Xr(t={}){return ot!==void 0||(ot=await(async()=>{const e=X.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),ot}const Fs=["webgl","webgpu","canvas"];async function Kr(t){let e=[];t.preference?(e.push(t.preference),Fs.forEach(i=>{i!==t.preference&&e.push(i)})):e=Fs.slice();let s,a={};for(let i=0;i<e.length;i++){const n=e[i];if(n==="webgpu"&&await Xr()){const{WebGPURenderer:o}=await Ps(async()=>{const{WebGPURenderer:u}=await import("./CW1z-1Gk.js");return{WebGPURenderer:u}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=o,a={...t,...t.webgpu};break}else if(n==="webgl"&&Yr(t.failIfMajorPerformanceCaveat??ta.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:o}=await Ps(async()=>{const{WebGLRenderer:u}=await import("./DKoCjlza.js");return{WebGLRenderer:u}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=o,a={...t,...t.webgl};break}else if(n==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const r=new s;return await r.init(a),r}const sa="8.8.1";class aa{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,sa)}static destroy(){}}aa.extension=L.Application;class Qr{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,sa)}destroy(){this._renderer=null}}Qr.extension={type:[L.WebGLSystem,L.WebGPUSystem],name:"initHook",priority:-10};const ra=class Vt{constructor(...e){this.stage=new Xt,e[0]!==void 0&&lt(ct,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Kr(e),Vt._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return lt(ct,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=Vt._plugins.slice(0);a.reverse(),a.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};ra._plugins=[];let ia=ra;he.handleByList(L.Application,ia._plugins);he.add(aa);class na extends Cr{constructor(e,s){super();const{textures:a,data:r}=e;Object.keys(r.pages).forEach(i=>{const n=r.pages[parseInt(i,10)],o=a[n.id];this.pages.push({texture:o})}),Object.keys(r.chars).forEach(i=>{const n=r.chars[i],{frame:o,source:u}=a[n.page],p=new Pr(n.x+o.x,n.y+o.y,n.width,n.height),c=new _e({source:u,frame:p});this.chars[i]={id:i.codePointAt(0),xOffset:n.xOffset,yOffset:n.yOffset,xAdvance:n.xAdvance,kerning:n.kerning??{},texture:c}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){Ls.install(e)}static uninstall(e){Ls.uninstall(e)}}const zt={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const h in e){const g=e[h].match(/^[a-z]+/gm)[0],k=e[h].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),T={};for(const G in k){const M=k[G].split("="),R=M[0],F=M[1].replace(/"/gm,""),H=parseFloat(F),Y=isNaN(H)?F:H;T[R]=Y}s[g].push(T)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=s.info,[i]=s.common,[n]=s.distanceField??[];n&&(a.distanceField={range:parseInt(n.distanceRange,10),type:n.fieldType}),a.fontSize=parseInt(r.size,10),a.fontFamily=r.face,a.lineHeight=parseInt(i.lineHeight,10);const o=s.page;for(let h=0;h<o.length;h++)a.pages.push({id:parseInt(o[h].id,10)||0,file:o[h].file});const u={};a.baseLineOffset=a.lineHeight-parseInt(i.base,10);const p=s.char;for(let h=0;h<p.length;h++){const g=p[h],k=parseInt(g.id,10);let T=g.letter??g.char??String.fromCharCode(k);T==="space"&&(T=" "),u[k]=T,a.chars[T]={id:k,page:parseInt(g.page,10)||0,x:parseInt(g.x,10),y:parseInt(g.y,10),width:parseInt(g.width,10),height:parseInt(g.height,10),xOffset:parseInt(g.xoffset,10),yOffset:parseInt(g.yoffset,10),xAdvance:parseInt(g.xadvance,10),kerning:{}}}const c=s.kerning||[];for(let h=0;h<c.length;h++){const g=parseInt(c[h].first,10),k=parseInt(c[h].second,10),T=parseInt(c[h].amount,10);a.chars[u[k]].kerning[u[g]]=T}return a}},qs={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const i=t.getElementsByTagName("page"),n=t.getElementsByTagName("char"),o=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let p=0;p<i.length;p++)e.pages.push({id:parseInt(i[p].getAttribute("id"),10)||0,file:i[p].getAttribute("file")});const u={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let p=0;p<n.length;p++){const c=n[p],h=parseInt(c.getAttribute("id"),10);let g=c.getAttribute("letter")??c.getAttribute("char")??String.fromCharCode(h);g==="space"&&(g=" "),u[h]=g,e.chars[g]={id:h,page:parseInt(c.getAttribute("page"),10)||0,x:parseInt(c.getAttribute("x"),10),y:parseInt(c.getAttribute("y"),10),width:parseInt(c.getAttribute("width"),10),height:parseInt(c.getAttribute("height"),10),xOffset:parseInt(c.getAttribute("xoffset"),10),yOffset:parseInt(c.getAttribute("yoffset"),10),xAdvance:parseInt(c.getAttribute("xadvance"),10),kerning:{}}}for(let p=0;p<o.length;p++){const c=parseInt(o[p].getAttribute("first"),10),h=parseInt(o[p].getAttribute("second"),10),g=parseInt(o[p].getAttribute("amount"),10);e.chars[u[h]].kerning[u[c]]=g}return e}},$s={test(t){return typeof t=="string"&&t.includes("<font>")?qs.test(X.get().parseXML(t)):!1},parse(t){return qs.parse(X.get().parseXML(t))}},Jr=[".xml",".fnt"],Zr={extension:{type:L.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof na,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},ei={extension:{type:L.LoadParser,priority:Ce.Normal},name:"loadBitmapFont",test(t){return Jr.includes(Ae.extname(t).toLowerCase())},async testParse(t){return zt.test(t)||$s.test(t)},async parse(t,e,s){const a=zt.test(t)?zt.parse(t):$s.parse(t),{src:r}=e,{pages:i}=a,n=[],o=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let h=0;h<i.length;++h){const g=i[h].file;let k=Ae.join(Ae.dirname(r),g);k=Lr(k,r),n.push({src:k,data:o})}const u=await s.load(n),p=n.map(h=>u[h.src]);return new na({data:a,textures:p},r)},async load(t,e){return await(await X.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class ti{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const si={extension:{type:L.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof _e),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((r,i)=>{s[a+(i===0?"":i+1)]=r})}),s}};async function oa(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const ai={extension:{type:L.DetectionParser,priority:1},test:async()=>oa("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},Ms=["png","jpg","jpeg"],ri={extension:{type:L.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...Ms],remove:async t=>t.filter(e=>!Ms.includes(e))},ii="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Kt(t){return ii?!1:document.createElement("video").canPlayType(t)!==""}const ni={extension:{type:L.DetectionParser,priority:0},test:async()=>Kt("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},oi={extension:{type:L.DetectionParser,priority:0},test:async()=>Kt("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},li={extension:{type:L.DetectionParser,priority:0},test:async()=>Kt("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},ci={extension:{type:L.DetectionParser,priority:0},test:async()=>oa("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class di{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var n,o;let r=null,i=null;if(s.loadParser&&(i=this._parserHash[s.loadParser],i||pe(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!i){for(let u=0;u<this.parsers.length;u++){const p=this.parsers[u];if(p.load&&((n=p.test)!=null&&n.call(p,e,s,this))){i=p;break}}if(!i)return pe(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await i.load(e,s,this),a.parser=i;for(let u=0;u<this.parsers.length;u++){const p=this.parsers[u];p.parse&&p.parse&&await((o=p.testParse)==null?void 0:o.call(p,r,s,this))&&(r=await p.parse(r,s,this)||r,a.parser=p)}return r})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const r={},i=Ys(e),n=Qe(e,p=>({alias:[p],src:p,data:{}})),o=n.length,u=n.map(async p=>{const c=Ae.toAbsolute(p.src);if(!r[p.src])try{this.promiseCache[c]||(this.promiseCache[c]=this._getLoadPromiseAndParser(c,p)),r[p.src]=await this.promiseCache[c].promise,s&&s(++a/o)}catch(h){throw delete this.promiseCache[c],delete r[p.src],new Error(`[Loader.load] Failed to load ${c}.
${h}`)}});return await Promise.all(u),i?r[n[0].src]:r}async unload(e){const a=Qe(e,r=>({alias:[r],src:r})).map(async r=>{var o,u;const i=Ae.toAbsolute(r.src),n=this.promiseCache[i];if(n){const p=await n.promise;delete this.promiseCache[i],await((u=(o=n.parser)==null?void 0:o.unload)==null?void 0:u.call(o,p,r,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&pe(`[Assets] loadParser name conflict "${s.name}"`):pe("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function qe(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const fi=".json",ui="application/json",pi={extension:{type:L.LoadParser,priority:Ce.Low},name:"loadJson",test(t){return qe(t,ui)||Fe(t,fi)},async load(t){return await(await X.get().fetch(t)).json()}},hi=".txt",gi="text/plain",vi={name:"loadTxt",extension:{type:L.LoadParser,priority:Ce.Low,name:"loadTxt"},test(t){return qe(t,gi)||Fe(t,hi)},async load(t){return await(await X.get().fetch(t)).text()}},mi=["normal","bold","100","200","300","400","500","600","700","800","900"],bi=[".ttf",".otf",".woff",".woff2"],xi=["font/ttf","font/otf","font/woff","font/woff2"],yi=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function _i(t){const e=Ae.extname(t),r=Ae.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(o=>o.charAt(0).toUpperCase()+o.slice(1));let i=r.length>0;for(const o of r)if(!o.match(yi)){i=!1;break}let n=r.join(" ");return i||(n=`"${n.replace(/[\\"]/g,"\\$&")}"`),n}const Ai=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function wi(t){return Ai.test(t)?t:encodeURI(t)}const ki={extension:{type:L.LoadParser,priority:Ce.Low},name:"loadWebFont",test(t){return qe(t,xi)||Fe(t,bi)},async load(t,e){var a,r,i;const s=X.get().getFontFaceSet();if(s){const n=[],o=((a=e.data)==null?void 0:a.family)??_i(t),u=((i=(r=e.data)==null?void 0:r.weights)==null?void 0:i.filter(c=>mi.includes(c)))??["normal"],p=e.data??{};for(let c=0;c<u.length;c++){const h=u[c],g=new FontFace(o,`url(${wi(t)})`,{...p,weight:h});await g.load(),s.add(g),n.push(g)}return ne.set(`${o}-and-url`,{url:t,fontFaces:n}),n.length===1?n[0]:n}return pe("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{ne.remove(`${e.family}-and-url`),X.get().getFontFaceSet().delete(e)})}};function Qt(t,e=1){var a;const s=(a=dt.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function Jt(t,e,s){t.label=s,t._sourceOrigin=s;const a=new _e({source:t,label:s}),r=()=>{delete e.promiseCache[s],ne.has(s)&&ne.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(pe("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),a.once("destroy",()=>{t.destroyed||(pe("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),a}const Ei=".svg",Si="image/svg+xml",Ti={extension:{type:L.LoadParser,priority:Ce.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return qe(t,Si)||Fe(t,Ei)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?Pi(t):Ri(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function Ri(t,e,s,a){var M,R,F;const i=await(await X.get().fetch(t)).blob(),n=URL.createObjectURL(i),o=new Image;o.src=n,o.crossOrigin=a,await o.decode(),URL.revokeObjectURL(n);const u=document.createElement("canvas"),p=u.getContext("2d"),c=((M=e.data)==null?void 0:M.resolution)||Qt(t),h=((R=e.data)==null?void 0:R.width)??o.width,g=((F=e.data)==null?void 0:F.height)??o.height;u.width=h*c,u.height=g*c,p.drawImage(o,0,0,h*c,g*c);const{parseAsGraphicsContext:k,...T}=e.data??{},G=new Xs({resource:u,alphaMode:"premultiply-alpha-on-upload",resolution:c,...T});return Jt(G,s,t)}async function Pi(t){const s=await(await X.get().fetch(t)).text(),a=new Fr;return a.svg(s),a}const Li=`(function () {
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
`;let Oe=null,Yt=class{constructor(){Oe||(Oe=URL.createObjectURL(new Blob([Li],{type:"application/javascript"}))),this.worker=new Worker(Oe)}};Yt.revokeObjectURL=function(){Oe&&(URL.revokeObjectURL(Oe),Oe=null)};const Ii=`(function () {
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
`;let Be=null;class la{constructor(){Be||(Be=URL.createObjectURL(new Blob([Ii],{type:"application/javascript"}))),this.worker=new Worker(Be)}}la.revokeObjectURL=function(){Be&&(URL.revokeObjectURL(Be),Be=null)};let Ws=0,Dt;class Oi{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new Yt;s.addEventListener("message",a=>{s.terminate(),Yt.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Dt===void 0&&(Dt=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Dt&&(this._createdWorkers++,e=new la().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((r,i)=>{this._queue.push({id:e,arguments:s,resolve:r,reject:i})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[Ws]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:Ws++,id:a})}}const js=new Oi,Bi=[".jpeg",".jpg",".png",".webp",".avif"],Ci=["image/jpeg","image/png","image/webp","image/avif"];async function Fi(t,e){var r;const s=await X.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const ca={name:"loadTextures",extension:{type:L.LoadParser,priority:Ce.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return qe(t,Ci)||Fe(t,Bi)},async load(t,e,s){var i;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await js.isImageBitmapSupported()?a=await js.loadImageBitmap(t,e):a=await Fi(t,e):a=await new Promise((n,o)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?n(a):(a.onload=()=>{n(a)},a.onerror=o)});const r=new Xs({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((i=e.data)==null?void 0:i.resolution)||Qt(t),...e.data});return Jt(r,s,t)},unload(t){t.destroy(!0)}},da=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],qi=da.map(t=>`video/${t.substring(1)}`);function $i(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=Wi(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function Mi(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",r),t.load();function a(){i(),e()}function r(n){i(),s(n)}function i(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",r)}})}function Wi(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const ji={name:"loadVideo",extension:{type:L.LoadParser,name:"loadVideo"},test(t){const e=qe(t,qi),s=Fe(t,da);return e||s},async load(t,e,s){var u,p;const a={...Wt.defaultOptions,resolution:((u=e.data)==null?void 0:u.resolution)||Qt(t),alphaMode:((p=e.data)==null?void 0:p.alphaMode)||await Ir(),...e.data},r=document.createElement("video"),i={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(i).forEach(c=>{const h=i[c];h!==void 0&&r.setAttribute(c,h)}),a.muted===!0&&(r.muted=!0),$i(r,t,a.crossorigin);const n=document.createElement("source");let o;if(t.startsWith("data:"))o=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const c=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();o=Wt.MIME_TYPES[c]||`video/${c}`}return n.src=t,o&&(n.type=o),new Promise(c=>{const h=async()=>{const g=new Wt({...a,resource:r});r.removeEventListener("canplay",h),e.data.preload&&await Mi(r),c(Jt(g,s,t))};r.addEventListener("canplay",h),r.appendChild(n)})},unload(t){t.destroy(!0)}},fa={extension:{type:L.ResolveParser,name:"resolveTexture"},test:ca.test,parse:t=>{var e;return{resolution:parseFloat(((e=dt.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},Ni={extension:{type:L.ResolveParser,priority:-2,name:"resolveJson"},test:t=>dt.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:fa.parse};class Ui{constructor(){this._detections=[],this._initialized=!1,this.resolver=new dt,this.loader=new di,this.cache=ne,this._backgroundLoader=new ti(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var i,n;if(this._initialized){pe("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let o=e.manifest;typeof o=="string"&&(o=await this.load(o)),this.resolver.addManifest(o)}const s=((i=e.texturePreference)==null?void 0:i.resolution)??1,a=typeof s=="number"?[s]:s,r=await this._detectFormats({preferredFormats:(n=e.texturePreference)==null?void 0:n.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=Ys(e),r=Qe(e).map(o=>{if(typeof o!="string"){const u=this.resolver.getAlias(o);return u.some(p=>!this.resolver.hasKey(p))&&this.add(o),Array.isArray(u)?u[0]:u}return this.resolver.hasKey(o)||this.add({alias:o,src:o}),o}),i=this.resolver.resolve(r),n=await this._mapLoadToResolve(i,s);return a?n[r[0]]:n}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const r=this.resolver.resolveBundle(e),i={},n=Object.keys(r);let o=0,u=0;const p=()=>{s==null||s(++o/u)},c=n.map(h=>{const g=r[h];return u+=Object.keys(g).length,this._mapLoadToResolve(g,p).then(k=>{i[h]=k})});return await Promise.all(c),a?i[e[0]]:i}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return ne.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=ne.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(a,s);this._backgroundLoader.active=!0;const i={};return a.forEach(n=>{const o=r[n.src],u=[n.src];n.alias&&u.push(...n.alias),u.forEach(p=>{i[p]=o}),ne.set(u,o)}),i}async unload(e){this._initialized||await this.init();const s=Qe(e).map(r=>typeof r!="string"?r.src:r),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=Qe(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(r=>this._unloadFromResolved(s[r]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{ne.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,r)=>s.indexOf(a)===r),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const Le=new Ui;he.handleByList(L.LoadParser,Le.loader.parsers).handleByList(L.ResolveParser,Le.resolver.parsers).handleByList(L.CacheParser,Le.cache.parsers).handleByList(L.DetectionParser,Le.detections);he.add(si,ri,ai,ci,ni,oi,li,pi,vi,ki,Ti,ca,ji,ei,Zr,fa,Ni);const Ns={loader:L.LoadParser,resolver:L.ResolveParser,cache:L.CacheParser,detection:L.DetectionParser};he.handle(L.Asset,t=>{const e=t.ref;Object.entries(Ns).filter(([s])=>!!e[s]).forEach(([s,a])=>he.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(Ns).filter(s=>!!e[s]).forEach(s=>he.remove(e[s]))});class zi extends Or{constructor(e,s){const{text:a,resolution:r,style:i,anchor:n,width:o,height:u,roundPixels:p,...c}=e;super({...c}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=i,this.resolution=r??null,this.allowChildren=!1,this._anchor=new Br({_onUpdate:()=>{this.onViewUpdate()}}),n&&(this.anchor=n),this.roundPixels=p??!1,o!==void 0&&(this.width=o),u!==void 0&&(this.height=u)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,r=-s*this.anchor.x;let i=0;return e.x>=r&&e.x<=r+s&&(i=-a*this.anchor.y,e.y>=i&&e.y<=i+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function Di(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(lt(ct,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class Gi extends zi{constructor(...e){const s=Di(e,"Text");super(s,Ks),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=qr.measureText(this._text,this._style),{width:r,height:i}=a;e.minX=-s._x*r,e.maxX=e.minX+r,e.minY=-s._y*i,e.maxY=e.minY+i}}var Hi=D('<p style="color: red;" class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Error:</strong> </p>'),Vi=D('<div class="svelte-1t2q5b9"> </div>'),Yi=D('<details class="svelte-1t2q5b9"><summary class="svelte-1t2q5b9"> </summary> <!></details>'),Xi=D(`<div style="
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
  " class="svelte-1t2q5b9"><h3 class="svelte-1t2q5b9">🎰 Oma-peli Debug</h3> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Status:</strong> </p> <!> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Base:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">BG URL:</strong> </p> <p class="svelte-1t2q5b9"><strong class="svelte-1t2q5b9">Sample:</strong> </p> <!></div>`),Ki=D('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-1t2q5b9"> </div>'),Qi=D('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-1t2q5b9"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-1t2q5b9"> </span></div>'),Ji=D(`<div style="
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
      " class="svelte-1t2q5b9">Jatka pelaamista</button></div>`),Zi=D(`<div style="
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
      " class="svelte-1t2q5b9">Sulje</button></div>`),en=D('<div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #ff00ff; font-size: 16px; animation: pulse 1s infinite;" class="svelte-1t2q5b9"><span class="svelte-1t2q5b9">🎰 FREE SPINS:</span> <span class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-top: 1px solid #555; padding-top: 8px;" class="svelte-1t2q5b9"><span style="color: #fff; font-size: 14px;" class="svelte-1t2q5b9">Total Won:</span> <span style="color: #00ff00; font-size: 14px;" class="svelte-1t2q5b9"> </span></div>',1),tn=D(`<div style="
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
        " class="svelte-1t2q5b9">⏹ STOP</button></div>`),sn=D(`<div style="
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
          " class="svelte-1t2q5b9">Cancel</button></div>`),an=D(`<button style="
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
      " class="svelte-1t2q5b9">🔄 AUTOPLAY</button> <!>`,1),rn=D(`<!> <!> <!> <div class="svelte-1t2q5b9"></div> <div class="svelte-1t2q5b9"><!> <div style="display: flex; justify-content: space-between; margin-bottom: 8px;" class="svelte-1t2q5b9"><span style="color: #fff;" class="svelte-1t2q5b9">CREDITS:</span> <span style="color: #ffd700;" class="svelte-1t2q5b9"> </span></div> <div style="display: flex; justify-content: space-between; border-top: 1px solid #555; padding-top: 8px;" class="svelte-1t2q5b9"><span style="color: #fff;" class="svelte-1t2q5b9">BET:</span> <span style="color: #00ff00;" class="svelte-1t2q5b9"> </span></div></div> <div style="
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
" class="svelte-1t2q5b9"><!></div> <button class="svelte-1t2q5b9"> </button> <button title="SPIN" class="svelte-1t2q5b9"></button>`,1);function nn(t,e){Gs(e,!0);const s=13,a=1445,r=1e3,i=1.75,n=-30,o=-10,u=160,p=0,c=720,h=750,g=.8,k=50,T=30,G=-40,M=1,R="height",H=Math.round(100*i),Y=Math.round(H*(700/760)),Je=Y+10,ge=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],W=typeof window<"u"&&window.location.hostname.includes("github.io")?"/web-sdk/oma-peli/symbols":`${Xe}/symbols`,$e={a:`${W}/Blue_hotrod.jpg`,b:`${W}/Blue_jacket.jpg`,c:`${W}/Blue_rollers.jpg`,d:`${W}/Blue_speakers.jpg`,e:`${W}/Premium_blonde.jpg`,f:`${W}/Premium_brunette.jpg`,g:`${W}/Premium_rocker.jpg`,h:`${W}/New_Wild.jpg`,i:`${W}/Red_burger.jpg`,j:`${W}/Red_fries.jpg`,k:`${W}/Red_milkshake.jpg`,l:`${W}/Scatter.jpg`,emptyslot:`${W}/Emptyslot.jpg`},ft=`${W}/bg_base.jpg`,Zt=`${W}/ReelFrames.png`,es=`${W}/RockABillyReels_logo.png`,ts={spin:`${Xe}/sounds/spin.mp3`,stop:`${Xe}/sounds/stop.mp3`,win:`${Xe}/sounds/win.mp3`};let ve=q(!0),et={},tt=null,we=null,Me=null,We=null,je=q("Initializing..."),ke=q(""),J=[],oe=q(1e3),V=q(10);const ss=1,ut=100;let me=q(!1),Ee=q(0),Ne=q(!1),ua=q(0),be=!1,re=null,pt=!1,Ue=q(0),Se=q(0),ze=q(0),ht=q(0),gt=Rs(()=>l(Se)>0?(l(ze)/l(Se)*100).toFixed(2):"0.00"),vt=Rs(()=>l(Ue)>0?(l(ht)/l(Ue)*100).toFixed(2):"0.00"),te=q(!1),le=q(0),xe=q(0);const as={k:.14,j:.12,i:.12,c:.055,d:.055,b:.04,a:.04,f:.02,e:.012,g:.008,l:.09,h:0,emptyslot:.28};function rs(f){if(f===6)return Math.random()<.5?"emptyslot":"h";const v=Math.random();let d=0;const x=ge.filter(w=>w!=="h"),b=x.reduce((w,O)=>w+as[O],0);for(const w of x)if(d+=as[w]/b,v<d)return w;return"k"}function is(){const f=[];for(let v=0;v<s;v++)f.push(rs(v));return f}function pa(f){return f<3?{col:0,row:f}:f<6?{col:1,row:f-3}:f===6?{col:2,row:0}:f<10?{col:3,row:f-7}:{col:4,row:f-10}}function De(f,v){return f===0?v:f===1?3+v:f===2?6:f===3?7+v:f===4?10+v:-1}function ha(){const f=Math.random();return l(te)?f<.5?3:f<.8?5:10:f<.5?1:f<.8?2:3}const ga={k:{3:.3,4:1,5:5},j:{3:.5,4:2,5:10},i:{3:.5,4:2,5:10},c:{3:1.5,4:5,5:20},d:{3:1.5,4:5,5:20},b:{3:2,4:7,5:25},a:{3:2,4:7,5:25},f:{3:3,4:15,5:50},e:{3:5,4:20,5:75},g:{3:5,4:25,5:100},h:{},l:{},emptyslot:{}};function va(){var O;const f=[],v=[];for(let I=0;I<s;I++)j[I]==="l"&&v.push(I);if(v.length>=5){const I=8+(v.length-5);A(le,l(le)+I),l(te)?console.log(`🎰 FREE SPINS RETRIGGERED! +${I} FREE SPINS! Total: ${l(le)}`):(A(te,!0),A(xe,0),console.log(`🎰 FREE SPINS TRIGGERED! ${v.length} scatters = ${I} FREE SPINS!`)),f.push({symbol:"l",count:v.length,payout:0,positions:v,multiplier:1})}j[0],j[1],j[2],j[3],j[4],j[5],j[6],j[7],j[8],j[9],j[10],j[11],j[12];const d=[];for(let I=0;I<3;I++)for(let E=0;E<3;E++)for(let B=0;B<1;B++)for(let S=0;S<3;S++)for(let P=0;P<3;P++){const z=[De(0,I),De(1,E),De(2,B),De(3,S),De(4,P)];d.push(z)}console.log(`Generated ${d.length} possible paths (should be 81)`);const x=new Map;for(const I of d){const E=I.map(P=>j[P]);if(E[0]==="emptyslot"||E[0]==="l")continue;let B=null;for(let P=0;P<E.length;P++)if(E[P]!=="h"&&E[P]!=="emptyslot"&&E[P]!=="l"){B=E[P];break}if(!B)continue;let S=0;for(let P=0;P<E.length;P++){const z=E[P];if(z===B||z==="h")S++;else break}if(S>=3){const P=`${B}-${S}`,z=x.get(P);z?z.lineCount++:x.set(P,{symbol:B,length:S,lineCount:1,examplePath:I.slice(0,S)})}}const b=[],w=x.size>0?ha():1;for(const[I,E]of x.entries()){const B=(O=ga[E.symbol])==null?void 0:O[E.length];if(B!==void 0&&B>0){const S=B*l(V),P=S*w;console.log(`Win: ${E.length}x ${E.symbol} (found on ${E.lineCount} ways) = ${S} x ${w} = ${P}`),b.push({symbol:E.symbol,count:E.length,payout:P,positions:E.examplePath,multiplier:w})}}return f.push(...b),f}let ye=q(0),Te=q(de([])),ce=q(!1),st=q(!1);const ma={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function mt(f){if(!l(ve)||!et[f])return;const v=et[f];v.currentTime=0,v.play().catch(d=>{console.warn("Äänen toisto epäonnistui:",f,d)})}function ba(f){Ge.forEach(v=>C.stage.removeChild(v)),Ge=[],f.forEach(v=>{v.positions.forEach(d=>{const x=Re[d],b=new jt().rect(0,0,H,Y).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});b.x=x.container.x,b.y=x.container.y,C.stage.addChild(b),Ge.push(b);let w=0,O=1;const I=.05;C.ticker.add(()=>{w+=O*I,w>=.4&&(O=-1),w<=0&&(O=1),b.alpha=.5+w})})})}function bt(){Ge.forEach(f=>C.stage.removeChild(f)),Ge=[]}let j=is(),xt,C,Re=[],Ge=[];class xa{constructor(v,d){ee(this,"index");ee(this,"container");ee(this,"offset",0);ee(this,"speed",0);ee(this,"targetSpeed",30);ee(this,"state","idle");ee(this,"stopDelay",0);ee(this,"bounceOffset",0);ee(this,"bounceSpeed",0);ee(this,"bounceFrames",0);this.index=v,this.container=d}start(v){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=v}update(){this.state!=="idle"&&(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"&&(this.speed*=.92,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,mt("stop"))),this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=Je&&(this.offset=0,j[this.index]=rs(this.index))))}draw(){const v=this.container;v.removeChildren();const d=j[this.index];if(!d||!tt||!tt[d])return;const x=tt[d];if(!x)return;const b=this.offset+this.bounceOffset,w=new it(x);w.width=H,w.height=Y,w.x=0,w.y=b,v.addChild(w)}}Hs(async()=>{C=new ia,await C.init({width:a,height:r,background:"#001a33"}),xt.appendChild(C.canvas);const f={};try{A(je,"Loading background and UI images..."),J.push(`Loading background: ${ft}`),J.push(`Loading reel frames: ${Zt}`),J.push(`Loading logo: ${es}`),await Le.load([{alias:"background",src:ft},{alias:"reelframes",src:Zt},{alias:"logo",src:es}]),we=_e.from("background"),Me=_e.from("reelframes"),We=_e.from("logo"),console.log("✅ Background texture created:",we.width,"x",we.height),console.log("✅ Reel frames texture created:",Me.width,"x",Me.height),console.log("✅ Logo texture created:",We.width,"x",We.height),J.push("✅ All UI images loaded"),A(je,"Loading symbols...");const d=[];for(const x of ge)d.push({alias:x,src:$e[x]});await Le.load(d);for(const x of ge){const b=$e[x];J.push(`Loading symbol ${x}: ${b}`);try{const w=_e.from(x);f[x]=w,console.log(`✅ Symbol ${x} loaded:`,w.width,"x",w.height),J.push(`✅ Symbol ${x} loaded`)}catch(w){const O=`❌ Failed to load symbol ${x} from ${b}: ${w}`;throw J.push(O),console.error(O),new Error(O)}}tt=f,A(je,"Assets loaded successfully!")}catch(d){A(ke,`Asset loading failed: ${d}`),J.push(l(ke)),console.error(l(ke));return}console.log("Ladataan ääniefektit...");for(const[d,x]of Object.entries(ts)){const b=new Audio;b.src=x,b.preload="auto",b.volume=.7,b.load(),b.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${x} (käytetään hiljaista placeholderia)`)}),et[d]=b}console.log("Ladataan ääniefektit...");for(const[d,x]of Object.entries(ts)){const b=new Audio;b.src=x,b.preload="auto",b.volume=.7,b.load(),b.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${x} (käytetään hiljaista placeholderia)`)}),et[d]=b}if(console.log("Taustakuva ladattu, tekstuuri:",we),we){const d=new it(we);C.renderer.width/C.renderer.height;const x=d.texture.width/d.texture.height;let b;b=C.renderer.height/d.texture.height,b*=M,d.scale.set(b),d.x=(C.renderer.width-d.width)/2,d.y=(C.renderer.height-d.height)/2+G,C.stage.addChild(d),console.log("Taustakuva lisätty:",R,"mode, size:",d.width.toFixed(0),"x",d.height.toFixed(0),"image aspect:",x.toFixed(2),"scale:",b.toFixed(2),"pos:",d.x.toFixed(0),d.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(d=>({x:d.x+n,y:d.y+o})),Re=[];for(let d=0;d<s;d++){const x=pa(d),b=x.col,w=x.row,O=300+b*(H+20),I=250+w*(Y+15),E=d===6?O+p:O,B=d===6?I+u:I,S=new Xt;S.x=E+n,S.y=B+o;const P=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],z=new jt().rect(0,0,H,Y).fill({color:P[d],alpha:.3});z.x=S.x,z.y=S.y,C.stage.addChild(z);const Ct=new Ks({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),Z=new Gi({text:d.toString(),style:Ct});Z.x=S.x+5,Z.y=S.y+5,C.stage.addChild(Z);const K=new jt().rect(0,0,H,Y).fill(16777215);K.x=S.x,K.y=S.y,S.mask=K,C.stage.addChild(K),C.stage.addChild(S),Re.push(new xa(d,S))}if(Me){const d=new it(Me);d.scale.set(1),d.x=250,d.y=200,C.stage.addChild(d),console.log("Reel frames lisätty:",d.width.toFixed(0),"x",d.height.toFixed(0))}if(We){const d=new it(We);d.scale.set(g),d.x=(C.renderer.width-d.width)/2+k,d.y=T,C.stage.addChild(d),console.log("Logo lisätty päällimmäiseen layeriin:",d.width.toFixed(0),"x",d.height.toFixed(0))}C.ticker.add(ya)});function ya(){for(const f of Re)f.update(),f.draw();if(!l(ce)&&!pt&&Re.every(f=>f.state==="stopped")){pt=!0;const f=va();console.log(`Checking wins, found ${f.length} wins`),f.length>0?(A(Te,de(f)),A(ye,de(f.reduce((v,d)=>v+d.payout,0))),_a(l(ye)),A(ce,!0),A(ua,de(Date.now())),console.log(`🎉 VOITTO! ${l(ye)} pistettä! Uusi saldo: ${l(oe)}`),console.log(`isShowingWin set to: ${l(ce)}, totalWin: ${l(ye)}`),f.forEach(v=>{const d=v.multiplier?` (${v.multiplier}x multiplier)`:"";console.log(`${v.count}x ${v.symbol} = ${v.payout} pistettä${d}`)}),ba(f),mt("win"),l(te)&&l(le)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${l(xe)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${l(xe).toFixed(2)}`),A(te,!1),A(xe,0)},2e3)),l(me)&&!be&&(be=!0,re=window.setTimeout(()=>{l(ce)&&l(me)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),A(ce,!1),bt()),re=window.setTimeout(()=>{be=!1,_t()},200)},1500))):(console.log("No wins found this spin"),l(me)&&!be&&(be=!0,re=window.setTimeout(()=>{be=!1,_t()},1e3)))}}function ns(){if(l(te)&&l(le)>0)rt(le,-1),console.log(`🎰 FREE SPIN! Remaining: ${l(le)}`);else if(!l(te)){if(l(oe)<l(V)){alert(`Not enough credits! Balance: ${l(oe)}, Bet: ${l(V)}`),yt();return}A(oe,l(oe)-l(V)),rt(Ue),A(Se,l(Se)+l(V))}re!==null&&(clearTimeout(re),re=null),A(Te,de([])),A(ye,0),A(ce,!1),pt=!1,bt(),j=is(),Re.forEach((f,v)=>f.start(60+v*10)),mt("spin")}function _a(f){A(oe,l(oe)+f),A(ze,l(ze)+f),l(te)&&A(xe,l(xe)+f),f>0&&rt(ht)}function Aa(){l(V)<ut&&A(V,de(Math.min(l(V)+1,ut)))}function wa(){l(V)>ss&&A(V,de(Math.max(l(V)-1,ss)))}function ka(){A(V,ut)}function He(f){A(me,!0),A(Ee,de(f)),A(Ne,!1),_t()}function yt(){A(me,!1),A(Ee,0),be=!1,re!==null&&(clearTimeout(re),re=null)}function _t(){if(!l(me)||l(Ee)<=0){yt();return}console.log(`Autoplay: Starting spin ${l(Ee)} rounds left`),ns(),rt(Ee,-1)}function Ea(){confirm("Reset all statistics?")&&(A(Ue,0),A(Se,0),A(ze,0),A(ht,0))}var os=rn(),ls=Ie(os);{var Sa=f=>{var v=Xi(),d=m(y(v),2),x=m(y(d));_(d);var b=m(d,2);{var w=Z=>{var K=Hi(),Ve=m(y(K));_(K),se(()=>$(Ve,` ${l(ke)??""}`)),U(Z,K)};Q(b,Z=>{l(ke)&&Z(w)})}var O=m(b,2),I=m(y(O));I.nodeValue=` ${Xe??""}`,_(O);var E=m(O,2),B=m(y(E));B.nodeValue=` ${ft??""}`,_(E);var S=m(E,2),P=m(y(S));_(S);var z=m(S,2);{var Ct=Z=>{var K=Yi(),Ve=y(K),Da=y(Ve);_(Ve);var Ga=m(Ve,2);Os(Ga,17,()=>J,Is,(Ha,Va)=>{var Ft=Vi(),Ya=y(Ft,!0);_(Ft),se(()=>$(Ya,l(Va))),U(Ha,Ft)}),_(K),se(()=>$(Da,`Log (${J.length??""})`)),U(Z,K)};Q(z,Z=>{J.length>0&&Z(Ct)})}_(v),se(()=>{$(x,` ${l(je)??""}`),$(P,` ${$e.a??""}`)}),U(f,v)};Q(ls,f=>{(l(je)!=="Assets loaded successfully!"||l(ke))&&f(Sa)})}var cs=m(ls,2);{var Ta=f=>{var v=Ji(),d=m(y(v),2),x=y(d);_(d);var b=m(d,2);Os(b,17,()=>l(Te),Is,(E,B)=>{var S=Ki(),P=y(S);_(S),se(z=>$(P,`${l(B).count??""} × ${ma[l(B).symbol]??""} = ${z??""} pistettä`),[()=>l(B).payout.toFixed(2)]),U(E,S)});var w=m(b,2);{var O=E=>{var B=Qi(),S=y(B),P=y(S);_(S),_(B),se(()=>$(P,`✨ ${l(Te)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),U(E,B)};Q(w,E=>{l(Te).length>0&&l(Te)[0].multiplier>1&&E(O)})}var I=m(w,2);_(v),se(()=>$(x,`${l(ye)??""} pistettä`)),N("click",I,()=>{A(ce,!1),bt(),console.log("Win popup closed, ready for next spin")}),U(f,v)};Q(cs,f=>{l(ye)>0&&l(ce)&&f(Ta)})}var ds=m(cs,2);{var Ra=f=>{var v=Zi(),d=m(y(v),8);_(v),N("click",d,()=>{A(st,!1)}),U(f,v)};Q(ds,f=>{l(st)&&f(Ra)})}var fs=m(ds,2);Sr(fs,f=>xt=f,()=>xt);var at=m(fs,2),us=y(at);{var Pa=f=>{var v=en(),d=Ie(v),x=m(y(d),2),b=y(x,!0);_(x),_(d);var w=m(d,2),O=m(y(w),2),I=y(O,!0);_(O),_(w),se(E=>{$(b,l(le)),$(I,E)},[()=>l(xe).toFixed(2)]),U(f,v)};Q(us,f=>{l(te)&&f(Pa)})}var At=m(us,2),ps=m(y(At),2),La=y(ps,!0);_(ps),_(At);var hs=m(At,2),gs=m(y(hs),2),Ia=y(gs,!0);_(gs),_(hs),_(at);var wt=m(at,2),vs=m(y(wt),2),ms=y(vs),kt=m(ms,2),Oa=y(kt,!0);_(kt);var bs=m(kt,2),Ba=m(bs,2);_(vs),_(wt);var xs=m(wt,2),Et=m(xs,2),St=m(y(Et),2),ys=m(y(St),2),Ca=y(ys,!0);_(ys),_(St);var Tt=m(St,2),_s=m(y(Tt),2),Fa=y(_s,!0);_(_s),_(Tt);var Rt=m(Tt,2),As=m(y(Rt),2),qa=y(As,!0);_(As),_(Rt);var Pt=m(Rt,2),Lt=m(y(Pt),2),$a=y(Lt);_(Lt),_(Pt);var It=m(Pt,2),Ot=m(y(It),2),Ma=y(Ot);_(Ot),_(It);var Wa=m(It,2);_(Et);var Bt=m(Et,2),ja=y(Bt);{var Na=f=>{var v=tn(),d=m(y(v),2),x=y(d);_(d);var b=m(d,2);_(v),se(()=>$(x,`${l(Ee)??""} left`)),N("click",b,yt),U(f,v)},Ua=f=>{var v=an(),d=Ie(v),x=m(d,2);{var b=w=>{var O=sn(),I=m(y(O),2),E=m(I,2),B=m(E,2),S=m(B,2),P=m(S,2),z=m(P,2);_(O),N("click",I,()=>He(10)),N("click",E,()=>He(100)),N("click",B,()=>He(1e3)),N("click",S,()=>He(1e4)),N("click",P,()=>He(1e5)),N("click",z,()=>{A(Ne,!1)}),U(w,O)};Q(x,w=>{l(Ne)&&w(b)})}N("click",d,()=>{A(Ne,!l(Ne))}),U(f,v)};Q(ja,f=>{l(me)?f(Na):f(Ua,!1)})}_(Bt);var Pe=m(Bt,2),za=y(Pe,!0);_(Pe);var ws=m(Pe,2);ue(ws,"style",`
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
  `),se((f,v,d,x,b,w)=>{ue(at,"style",`
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
  border: 2px solid ${(l(te)?"#ff00ff":"#ffd700")??""};
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
  z-index: 1500;
  min-width: 180px;
`),$(La,f),$(Ia,l(V)),$(Oa,l(V)),$(Ca,v),$(Fa,d),$(qa,x),ue(Lt,"style",`color: ${b??""};`),$($a,`${l(gt)??""}%`),ue(Ot,"style",`color: ${w??""};`),$(Ma,`${l(vt)??""}%`),ue(Pe,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(l(ve)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(l(ve)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),ue(Pe,"title",l(ve)?"Mykistä äänet":"Laita äänet päälle"),$(za,l(ve)?"🔊":"🔇")},[()=>l(oe).toLocaleString(),()=>l(Ue).toLocaleString(),()=>l(Se).toLocaleString(),()=>l(ze).toLocaleString(),()=>parseFloat(l(gt))>=95?"#00ff00":parseFloat(l(gt))>=85?"#ffff00":"#ff6666",()=>parseFloat(l(vt))>=30?"#00ff00":parseFloat(l(vt))>=20?"#ffff00":"#ff6666"]),N("click",ms,wa),N("click",bs,Aa),N("click",Ba,ka),N("click",xs,()=>{A(st,!l(st))}),N("click",Wa,Ea),N("click",Pe,()=>{A(ve,!l(ve))}),N("click",ws,ns),U(t,os),Vs()}var on=D('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),ln=D('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function cn(t,e){Gs(e,!1);let s=Tr(e,"isAuthenticated",12,!1),a=Gt(""),r=Gt(!1);const i="slot2024";function n(){l(a)===i?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(A(r,!0),A(a,""),setTimeout(()=>A(r,!1),3e3))}Hs(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),er();var o=Za(),u=Ie(o);{var p=c=>{var h=ln(),g=y(h),k=m(y(g),4),T=y(k);jr(T),Er(2),_(k);var G=m(k,2);{var M=R=>{var F=on();U(R,F)};Q(G,R=>{l(r)&&R(M)})}_(g),_(h),Ur(T,()=>l(a),R=>A(a,R)),N("submit",k,zr(n)),U(c,h)};Q(u,c=>{s()||c(p)})}U(t,o),Vs()}var dn=D('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),fn=D("<!> <!>",1);function wn(t){let e=Gt(!1);var s=fn(),a=Ie(s);cn(a,{get isAuthenticated(){return l(e)},set isAuthenticated(n){A(e,n)},$$legacy:!0});var r=m(a,2);{var i=n=>{var o=dn(),u=m(Ie(o),2);nn(u,{}),U(n,o)};Q(r,n=>{l(e)&&n(i)})}U(t,s)}export{ta as A,Js as C,Qr as R,Hr as S,sa as V,wn as _,Gr as u};
