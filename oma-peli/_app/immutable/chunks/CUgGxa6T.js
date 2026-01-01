const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DkTzoQxp.js","./Cb0119l1.js","./BrW7ntrJ.js","./Fx7Xcyif.js","./CkL9UklL.js","./C2GHuDhf.js","./DPBEpPGD.js","./CT5enwZ9.js"])))=>i.map(i=>d[i]);
var Ir=Object.defineProperty;var Pr=(t,e,a)=>e in t?Ir(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var $e=(t,e,a)=>Pr(t,typeof e!="symbol"?e+"":e,a);import{g as Or,l as Br,e as fo,a as Q,t as te,n as ho,i as Cr,j as Fr,k as C}from"./CYP10W50.js";import{i as Mr}from"./DqfWCwGf.js";import{y as Ee,j as Wr,a8 as jr,F as s,Q as zr,aa as Nr,ab as Xa,h as Ka,e as Gs,k as At,l as Dr,ac as go,w as vo,ad as Ur,q as mo,a7 as Gr,U as Hr,a2 as qa,ar as Hs,z as Qa,as as Vr,at as Yr,au as Xr,o as Kr,av as qr,aw as Qr,ax as Jr,ay as Zr,b as en,az as tn,aA as sn,a6 as an,aB as on,aC as rn,D as nn,L as ln,p as na,f as it,ah as I,a as ia,T as x,c as _,s as u,r as A,t as oe,I as ze,ag as xo,aD as Se,aE as cn,aF as Zs}from"./Fx7Xcyif.js";import{_ as Ja,i as ce,p as ve}from"./BrW7ntrJ.js";import{s as D}from"./DpmsE3qB.js";import{p as at,b as Za}from"./C4w3i6Q0.js";import{b as Te}from"./BVGP0iSs.js";import{e as De,E as O,a as dn,C as la,Q as ea,V as ta,N as Vs,D as de,H as pn,p as He,a0 as lt,a1 as Ve,a2 as un,w as Ne,a3 as $t,a4 as bo,a5 as ct,a6 as Pe,a7 as Yt,a8 as yo,a9 as fn,aa as Ys,y as Xs}from"./Cb0119l1.js";import{A as hn,B as eo,G as gn,a as to}from"./CkL9UklL.js";function Ht(t,e){return e}function vn(t,e,a,o){for(var r=[],n=e.length,l=0;l<n;l++)Xr(e[l].e,r,!0);var d=n>0&&r.length===0&&a!==null;if(d){var h=a.parentNode;Kr(h),h.append(a),o.clear(),je(t,e[0].prev,e[n-1].next)}qr(r,()=>{for(var v=0;v<n;v++){var p=e[v];d||(o.delete(p.k),je(t,p.prev,p.next)),Qr(p.e,!d)}})}function Vt(t,e,a,o,r,n=null){var l=t,d={flags:e,items:new Map,first:null};Ee&&Wr();var h=null,v=!1,p=zr(()=>{var b=a();return Gr(b)?b:b==null?[]:mo(b)});jr(()=>{var b=s(p),m=b.length;if(v&&m===0)return;v=m===0;let L=!1;if(Ee){var T=l.data===Nr;T!==(m===0)&&(l=Xa(),Ka(l),Gs(!1),L=!0)}if(Ee){for(var Z=null,K,R=0;R<m;R++){if(At.nodeType===8&&At.data===Dr){l=At,L=!0,Gs(!1);break}var U=b[R],Le=o(U,R);K=wo(At,d,Z,null,U,Le,R,r,e,a),d.items.set(Le,K),Z=K}m>0&&Ka(Xa())}Ee||mn(b,d,l,r,e,o,a),n!==null&&(m===0?h?go(h):h=vo(()=>n(l)):h!==null&&Ur(h,()=>{h=null})),L&&Gs(!0),s(p)}),Ee&&(l=At)}function mn(t,e,a,o,r,n,l){var d=t.length,h=e.items,v=e.first,p=v,b,m=null,L=[],T=[],Z,K,R,U;for(U=0;U<d;U+=1){if(Z=t[U],K=n(Z,U),R=h.get(K),R===void 0){var Le=p?p.e.nodes_start:a;m=wo(Le,e,m,m===null?e.first:m.next,Z,K,U,o,r,l),h.set(K,m),L=[],T=[],p=m.next;continue}if(xn(R,Z,U),(R.e.f&Hs)!==0&&go(R.e),R!==p){if(b!==void 0&&b.has(R)){if(L.length<T.length){var re=T[0],W;m=re.prev;var ne=L[0],pe=L[L.length-1];for(W=0;W<L.length;W+=1)so(L[W],re,a);for(W=0;W<T.length;W+=1)b.delete(T[W]);je(e,ne.prev,pe.next),je(e,m,ne),je(e,pe,re),p=re,m=pe,U-=1,L=[],T=[]}else b.delete(R),so(R,p,a),je(e,R.prev,R.next),je(e,R,m===null?e.first:m.next),je(e,m,R),m=R;continue}for(L=[],T=[];p!==null&&p.k!==K;)(p.e.f&Hs)===0&&(b??(b=new Set)).add(p),T.push(p),p=p.next;if(p===null)continue;R=p}L.push(R),m=R,p=R.next}if(p!==null||b!==void 0){for(var me=b===void 0?[]:mo(b);p!==null;)(p.e.f&Hs)===0&&me.push(p),p=p.next;var Re=me.length;if(Re>0){var M=null;vn(e,me,M,h)}}Qa.first=e.first&&e.first.e,Qa.last=m&&m.e}function xn(t,e,a,o){Yr(t.v,e),t.i=a}function wo(t,e,a,o,r,n,l,d,h,v){var p=(h&Jr)!==0,b=(h&Zr)===0,m=p?b?Hr(r):qa(r):r,L=(h&Vr)===0?l:qa(l),T={i:L,v:m,k:n,a:null,e:null,prev:a,next:o};try{return T.e=vo(()=>d(t,m,L,v),Ee),T.e.prev=a&&a.e,T.e.next=o&&o.e,a===null?e.first=T:(a.next=T,a.e.next=T.e),o!==null&&(o.prev=T,o.e.prev=T.e),T}finally{}}function so(t,e,a){for(var o=t.next?t.next.e.nodes_start:a,r=e?e.e.nodes_start:a,n=t.e.nodes_start;n!==o;){var l=en(n);r.before(n),n=l}}function je(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}const ao=[...` 	
\r\f \v\uFEFF`];function bn(t,e,a){var o=t==null?"":""+t;if(e&&(o=o?o+" "+e:e),a){for(var r in a)if(a[r])o=o?o+" "+r:r;else if(o.length)for(var n=r.length,l=0;(l=o.indexOf(r,l))>=0;){var d=l+n;(l===0||ao.includes(o[l-1]))&&(d===o.length||ao.includes(o[d]))?o=(l===0?"":o.substring(0,l))+o.substring(d+1):l=d}}return o===""?null:o}function sa(t,e,a,o,r,n){var l=t.__className;if(Ee||l!==a){var d=bn(a,o,n);(!Ee||d!==t.getAttribute("class"))&&(d==null?t.removeAttribute("class"):e?t.className=d:t.setAttribute("class",d)),t.__className=a}else if(n)for(var h in n){var v=!!n[h];(r==null||v!==!!r[h])&&t.classList.toggle(h,v)}return n}function yn(t){if(Ee){var e=!1,a=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var o=t.value;y(t,"value",null),t.value=o}if(t.hasAttribute("checked")){var r=t.checked;y(t,"checked",null),t.checked=r}}};t.__on_r=a,tn(a),Or()}}function y(t,e,a,o){var r=t.__attributes??(t.__attributes={});Ee&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=a)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[sn]=a),a==null?t.removeAttribute(e):typeof a!="string"&&wn(t).includes(e)?t[e]=a:t.setAttribute(e,a))}var oo=new Map;function wn(t){var e=oo.get(t.nodeName);if(e)return e;oo.set(t.nodeName,e=[]);for(var a,o=t,r=Element.prototype;r!==o;){a=on(o);for(var n in a)a[n].set&&e.push(n);o=an(o)}return e}function _n(t,e,a=e){var o=rn();Br(t,"input",r=>{var n=r?t.defaultValue:t.value;if(n=Ks(t)?qs(n):n,a(n),o&&n!==(n=e())){var l=t.selectionStart,d=t.selectionEnd;t.value=n??"",d!==null&&(t.selectionStart=l,t.selectionEnd=Math.min(d,t.value.length))}}),(Ee&&t.defaultValue!==t.value||nn(e)==null&&t.value)&&a(Ks(t)?qs(t.value):t.value),ln(()=>{var r=e();Ks(t)&&r===qs(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function Ks(t){var e=t.type;return e==="number"||e==="range"}function qs(t){return t===""?null:+t}function An(t){return function(...e){var a=e[0];return a.preventDefault(),t==null?void 0:t.apply(this,e)}}const aa=[];De.handleByNamedList(O.Environment,aa);async function kn(t){if(!t)for(let e=0;e<aa.length;e++){const a=aa[e];if(a.value.test()){await a.value.load();return}}}let kt;function $n(){if(typeof kt=="boolean")return kt;try{kt=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{kt=!1}return kt}var _o=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(_o||{});class Sn{constructor(e){this.items=[],this._name=e}emit(e,a,o,r,n,l,d,h){const{name:v,items:p}=this;for(let b=0,m=p.length;b<m;b++)p[b][v](e,a,o,r,n,l,d,h);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const a=this.items.indexOf(e);return a!==-1&&this.items.splice(a,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const En=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Ao=class ko extends dn{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const a=[...En,...this.config.runners??[]];this._addRunners(...a),this._unsafeEvalCheck()}async init(e={}){const a=e.skipExtensionImports===!0?!0:e.manageImports===!1;await kn(a),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const o in this._systemsHash)e={...this._systemsHash[o].constructor.defaultOptions,...e};e={...ko.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let o=0;o<this.runners.init.items.length;o++)await this.runners.init.items[o].init(e);this._initOptions=e}render(e,a){let o=e;if(o instanceof la&&(o={container:o},a&&(ea(ta,"passing a second argument is deprecated, please use render options instead"),o.target=a.renderTexture)),o.target||(o.target=this.view.renderTarget),o.target===this.view.renderTarget&&(this._lastObjectRendered=o.container,o.clearColor??(o.clearColor=this.background.colorRgba),o.clear??(o.clear=this.background.clearBeforeRender)),o.clearColor){const r=Array.isArray(o.clearColor)&&o.clearColor.length===4;o.clearColor=r?o.clearColor:Vs.shared.setValue(o.clearColor).toArray()}o.transform||(o.container.updateLocalTransform(),o.transform=o.container.localTransform),o.container.enableRenderGroup(),this.runners.prerender.emit(o),this.runners.renderStart.emit(o),this.runners.render.emit(o),this.runners.renderEnd.emit(o),this.runners.postrender.emit(o)}resize(e,a,o){const r=this.view.resolution;this.view.resize(e,a,o),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),o!==void 0&&o!==r&&this.runners.resolutionChange.emit(o)}clear(e={}){const a=this;e.target||(e.target=a.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=_o.ALL);const{clear:o,clearColor:r,target:n}=e;Vs.shared.setValue(r??this.background.colorRgba),a.renderTarget.clear(n,o,Vs.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(a=>{this.runners[a]=new Sn(a)})}_addSystems(e){let a;for(a in e){const o=e[a];this._addSystem(o.value,o.name)}}_addSystem(e,a){const o=new e(this);if(this[a])throw new Error(`Whoops! The name "${a}" is already in use`);this[a]=o,this._systemsHash[a]=o;for(const r in this.runners)this.runners[r].add(o);return this}_addPipes(e,a){const o=a.reduce((r,n)=>(r[n.name]=n.value,r),{});e.forEach(r=>{const n=r.value,l=r.name,d=o[l];this.renderPipes[l]=new n(this,d?new d:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(a=>{a.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!$n())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Ao.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let $o=Ao,Ut;function Ln(t){return Ut!==void 0||(Ut=(()=>{var a;const e={stencil:!0,failIfMajorPerformanceCaveat:t??$o.defaultOptions.failIfMajorPerformanceCaveat};try{if(!de.get().getWebGLRenderingContext())return!1;let r=de.get().createCanvas().getContext("webgl",e);const n=!!((a=r==null?void 0:r.getContextAttributes())!=null&&a.stencil);if(r){const l=r.getExtension("WEBGL_lose_context");l&&l.loseContext()}return r=null,n}catch{return!1}})()),Ut}let Gt;async function Tn(t={}){return Gt!==void 0||(Gt=await(async()=>{const e=de.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),Gt}const ro=["webgl","webgpu","canvas"];async function Rn(t){let e=[];t.preference?(e.push(t.preference),ro.forEach(n=>{n!==t.preference&&e.push(n)})):e=ro.slice();let a,o={};for(let n=0;n<e.length;n++){const l=e[n];if(l==="webgpu"&&await Tn()){const{WebGPURenderer:d}=await Ja(async()=>{const{WebGPURenderer:h}=await import("./DkTzoQxp.js");return{WebGPURenderer:h}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);a=d,o={...t,...t.webgpu};break}else if(l==="webgl"&&Ln(t.failIfMajorPerformanceCaveat??$o.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:d}=await Ja(async()=>{const{WebGLRenderer:h}=await import("./CT5enwZ9.js");return{WebGLRenderer:h}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);a=d,o={...t,...t.webgl};break}else if(l==="canvas")throw o={...t},new Error("CanvasRenderer is not yet implemented")}if(delete o.webgpu,delete o.webgl,!a)throw new Error("No available renderer for the current environment");const r=new a;return await r.init(o),r}const So="8.8.1";class Eo{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,So)}static destroy(){}}Eo.extension=O.Application;class In{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,So)}destroy(){this._renderer=null}}In.extension={type:[O.WebGLSystem,O.WebGPUSystem],name:"initHook",priority:-10};const Lo=class oa{constructor(...e){this.stage=new la,e[0]!==void 0&&ea(ta,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Rn(e),oa._plugins.forEach(a=>{a.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return ea(ta,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,a=!1){const o=oa._plugins.slice(0);o.reverse(),o.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(a),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Lo._plugins=[];let To=Lo;De.handleByList(O.Application,To._plugins);De.add(Eo);class Ro extends hn{constructor(e,a){super();const{textures:o,data:r}=e;Object.keys(r.pages).forEach(n=>{const l=r.pages[parseInt(n,10)],d=o[l.id];this.pages.push({texture:d})}),Object.keys(r.chars).forEach(n=>{const l=r.chars[n],{frame:d,source:h}=o[l.page],v=new pn(l.x+d.x,l.y+d.y,l.width,l.height),p=new He({source:h,frame:v});this.chars[n]={id:n.codePointAt(0),xOffset:l.xOffset,yOffset:l.yOffset,xAdvance:l.xAdvance,kerning:l.kerning??{},texture:p}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=a}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:a}=this.pages[e];a.destroy(!0)}this.pages=null}static install(e){eo.install(e)}static uninstall(e){eo.uninstall(e)}}const Qs={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),a={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const b in e){const m=e[b].match(/^[a-z]+/gm)[0],L=e[b].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),T={};for(const Z in L){const K=L[Z].split("="),R=K[0],U=K[1].replace(/"/gm,""),Le=parseFloat(U),re=isNaN(Le)?U:Le;T[R]=re}a[m].push(T)}const o={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=a.info,[n]=a.common,[l]=a.distanceField??[];l&&(o.distanceField={range:parseInt(l.distanceRange,10),type:l.fieldType}),o.fontSize=parseInt(r.size,10),o.fontFamily=r.face,o.lineHeight=parseInt(n.lineHeight,10);const d=a.page;for(let b=0;b<d.length;b++)o.pages.push({id:parseInt(d[b].id,10)||0,file:d[b].file});const h={};o.baseLineOffset=o.lineHeight-parseInt(n.base,10);const v=a.char;for(let b=0;b<v.length;b++){const m=v[b],L=parseInt(m.id,10);let T=m.letter??m.char??String.fromCharCode(L);T==="space"&&(T=" "),h[L]=T,o.chars[T]={id:L,page:parseInt(m.page,10)||0,x:parseInt(m.x,10),y:parseInt(m.y,10),width:parseInt(m.width,10),height:parseInt(m.height,10),xOffset:parseInt(m.xoffset,10),yOffset:parseInt(m.yoffset,10),xAdvance:parseInt(m.xadvance,10),kerning:{}}}const p=a.kerning||[];for(let b=0;b<p.length;b++){const m=parseInt(p[b].first,10),L=parseInt(p[b].second,10),T=parseInt(p[b].amount,10);o.chars[h[L]].kerning[h[m]]=T}return o}},no={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},a=t.getElementsByTagName("info")[0],o=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const n=t.getElementsByTagName("page"),l=t.getElementsByTagName("char"),d=t.getElementsByTagName("kerning");e.fontSize=parseInt(a.getAttribute("size"),10),e.fontFamily=a.getAttribute("face"),e.lineHeight=parseInt(o.getAttribute("lineHeight"),10);for(let v=0;v<n.length;v++)e.pages.push({id:parseInt(n[v].getAttribute("id"),10)||0,file:n[v].getAttribute("file")});const h={};e.baseLineOffset=e.lineHeight-parseInt(o.getAttribute("base"),10);for(let v=0;v<l.length;v++){const p=l[v],b=parseInt(p.getAttribute("id"),10);let m=p.getAttribute("letter")??p.getAttribute("char")??String.fromCharCode(b);m==="space"&&(m=" "),h[b]=m,e.chars[m]={id:b,page:parseInt(p.getAttribute("page"),10)||0,x:parseInt(p.getAttribute("x"),10),y:parseInt(p.getAttribute("y"),10),width:parseInt(p.getAttribute("width"),10),height:parseInt(p.getAttribute("height"),10),xOffset:parseInt(p.getAttribute("xoffset"),10),yOffset:parseInt(p.getAttribute("yoffset"),10),xAdvance:parseInt(p.getAttribute("xadvance"),10),kerning:{}}}for(let v=0;v<d.length;v++){const p=parseInt(d[v].getAttribute("first"),10),b=parseInt(d[v].getAttribute("second"),10),m=parseInt(d[v].getAttribute("amount"),10);e.chars[h[b]].kerning[h[p]]=m}return e}},io={test(t){return typeof t=="string"&&t.includes("<font>")?no.test(de.get().parseXML(t)):!1},parse(t){return no.parse(de.get().parseXML(t))}},Pn=[".xml",".fnt"],On={extension:{type:O.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof Ro,getCacheableAssets(t,e){const a={};return t.forEach(o=>{a[o]=e,a[`${o}-bitmap`]=e}),a[`${e.fontFamily}-bitmap`]=e,a}},Bn={extension:{type:O.LoadParser,priority:lt.Normal},name:"loadBitmapFont",test(t){return Pn.includes(Ve.extname(t).toLowerCase())},async testParse(t){return Qs.test(t)||io.test(t)},async parse(t,e,a){const o=Qs.test(t)?Qs.parse(t):io.parse(t),{src:r}=e,{pages:n}=o,l=[],d=o.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let b=0;b<n.length;++b){const m=n[b].file;let L=Ve.join(Ve.dirname(r),m);L=un(L,r),l.push({src:L,data:d})}const h=await a.load(l),v=l.map(b=>h[b.src]);return new Ro({data:o,textures:v},r)},async load(t,e){return await(await de.get().fetch(t)).text()},async unload(t,e,a){await Promise.all(t.pages.map(o=>a.unload(o.texture.source._sourceOrigin))),t.destroy()}};class Cn{constructor(e,a=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=a}add(e){e.forEach(a=>{this._assetList.push(a)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],a=Math.min(this._assetList.length,this._maxConcurrent);for(let o=0;o<a;o++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Fn={extension:{type:O.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof He),getCacheableAssets:(t,e)=>{const a={};return t.forEach(o=>{e.forEach((r,n)=>{a[o+(n===0?"":n+1)]=r})}),a}};async function Io(t){if("Image"in globalThis)return new Promise(e=>{const a=new Image;a.onload=()=>{e(!0)},a.onerror=()=>{e(!1)},a.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Mn={extension:{type:O.DetectionParser,priority:1},test:async()=>Io("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},lo=["png","jpg","jpeg"],Wn={extension:{type:O.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...lo],remove:async t=>t.filter(e=>!lo.includes(e))},jn="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function ca(t){return jn?!1:document.createElement("video").canPlayType(t)!==""}const zn={extension:{type:O.DetectionParser,priority:0},test:async()=>ca("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},Nn={extension:{type:O.DetectionParser,priority:0},test:async()=>ca("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},Dn={extension:{type:O.DetectionParser,priority:0},test:async()=>ca("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},Un={extension:{type:O.DetectionParser,priority:0},test:async()=>Io("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class Gn{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,a,o)=>(this._parsersValidated=!1,e[a]=o,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,a){const o={promise:null,parser:null};return o.promise=(async()=>{var l,d;let r=null,n=null;if(a.loadParser&&(n=this._parserHash[a.loadParser],n||Ne(`[Assets] specified load parser "${a.loadParser}" not found while loading ${e}`)),!n){for(let h=0;h<this.parsers.length;h++){const v=this.parsers[h];if(v.load&&((l=v.test)!=null&&l.call(v,e,a,this))){n=v;break}}if(!n)return Ne(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await n.load(e,a,this),o.parser=n;for(let h=0;h<this.parsers.length;h++){const v=this.parsers[h];v.parse&&v.parse&&await((d=v.testParse)==null?void 0:d.call(v,r,a,this))&&(r=await v.parse(r,a,this)||r,o.parser=v)}return r})(),o}async load(e,a){this._parsersValidated||this._validateParsers();let o=0;const r={},n=bo(e),l=$t(e,v=>({alias:[v],src:v,data:{}})),d=l.length,h=l.map(async v=>{const p=Ve.toAbsolute(v.src);if(!r[v.src])try{this.promiseCache[p]||(this.promiseCache[p]=this._getLoadPromiseAndParser(p,v)),r[v.src]=await this.promiseCache[p].promise,a&&a(++o/d)}catch(b){throw delete this.promiseCache[p],delete r[v.src],new Error(`[Loader.load] Failed to load ${p}.
${b}`)}});return await Promise.all(h),n?r[l[0].src]:r}async unload(e){const o=$t(e,r=>({alias:[r],src:r})).map(async r=>{var d,h;const n=Ve.toAbsolute(r.src),l=this.promiseCache[n];if(l){const v=await l.promise;delete this.promiseCache[n],await((h=(d=l.parser)==null?void 0:d.unload)==null?void 0:h.call(d,v,r,this))}});await Promise.all(o)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,a)=>(a.name?e[a.name]&&Ne(`[Assets] loadParser name conflict "${a.name}"`):Ne("[Assets] loadParser should have a name"),{...e,[a.name]:a}),{})}}function dt(t,e){if(Array.isArray(e)){for(const a of e)if(t.startsWith(`data:${a}`))return!0;return!1}return t.startsWith(`data:${e}`)}const Hn=".json",Vn="application/json",Yn={extension:{type:O.LoadParser,priority:lt.Low},name:"loadJson",test(t){return dt(t,Vn)||ct(t,Hn)},async load(t){return await(await de.get().fetch(t)).json()}},Xn=".txt",Kn="text/plain",qn={name:"loadTxt",extension:{type:O.LoadParser,priority:lt.Low,name:"loadTxt"},test(t){return dt(t,Kn)||ct(t,Xn)},async load(t){return await(await de.get().fetch(t)).text()}},Qn=["normal","bold","100","200","300","400","500","600","700","800","900"],Jn=[".ttf",".otf",".woff",".woff2"],Zn=["font/ttf","font/otf","font/woff","font/woff2"],ei=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function ti(t){const e=Ve.extname(t),r=Ve.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(d=>d.charAt(0).toUpperCase()+d.slice(1));let n=r.length>0;for(const d of r)if(!d.match(ei)){n=!1;break}let l=r.join(" ");return n||(l=`"${l.replace(/[\\"]/g,"\\$&")}"`),l}const si=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function ai(t){return si.test(t)?t:encodeURI(t)}const oi={extension:{type:O.LoadParser,priority:lt.Low},name:"loadWebFont",test(t){return dt(t,Zn)||ct(t,Jn)},async load(t,e){var o,r,n;const a=de.get().getFontFaceSet();if(a){const l=[],d=((o=e.data)==null?void 0:o.family)??ti(t),h=((n=(r=e.data)==null?void 0:r.weights)==null?void 0:n.filter(p=>Qn.includes(p)))??["normal"],v=e.data??{};for(let p=0;p<h.length;p++){const b=h[p],m=new FontFace(d,`url(${ai(t)})`,{...v,weight:b});await m.load(),a.add(m),l.push(m)}return Pe.set(`${d}-and-url`,{url:t,fontFaces:l}),l.length===1?l[0]:l}return Ne("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{Pe.remove(`${e.family}-and-url`),de.get().getFontFaceSet().delete(e)})}};function da(t,e=1){var o;const a=(o=Yt.RETINA_PREFIX)==null?void 0:o.exec(t);return a?parseFloat(a[1]):e}function pa(t,e,a){t.label=a,t._sourceOrigin=a;const o=new He({source:t,label:a}),r=()=>{delete e.promiseCache[a],Pe.has(a)&&Pe.remove(a)};return o.source.once("destroy",()=>{e.promiseCache[a]&&(Ne("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),o.once("destroy",()=>{t.destroyed||(Ne("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),o}const ri=".svg",ni="image/svg+xml",ii={extension:{type:O.LoadParser,priority:lt.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return dt(t,ni)||ct(t,ri)},async load(t,e,a){var o;return((o=e.data)==null?void 0:o.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?ci(t):li(t,e,a,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function li(t,e,a,o){var K,R,U;const n=await(await de.get().fetch(t)).blob(),l=URL.createObjectURL(n),d=new Image;d.src=l,d.crossOrigin=o,await d.decode(),URL.revokeObjectURL(l);const h=document.createElement("canvas"),v=h.getContext("2d"),p=((K=e.data)==null?void 0:K.resolution)||da(t),b=((R=e.data)==null?void 0:R.width)??d.width,m=((U=e.data)==null?void 0:U.height)??d.height;h.width=b*p,h.height=m*p,v.drawImage(d,0,0,b*p,m*p);const{parseAsGraphicsContext:L,...T}=e.data??{},Z=new yo({resource:h,alphaMode:"premultiply-alpha-on-upload",resolution:p,...T});return pa(Z,a,t)}async function ci(t){const a=await(await de.get().fetch(t)).text(),o=new gn;return o.svg(a),o}const di=`(function () {
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
`;let rt=null,ra=class{constructor(){rt||(rt=URL.createObjectURL(new Blob([di],{type:"application/javascript"}))),this.worker=new Worker(rt)}};ra.revokeObjectURL=function(){rt&&(URL.revokeObjectURL(rt),rt=null)};const pi=`(function () {
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
`;let nt=null;class Po{constructor(){nt||(nt=URL.createObjectURL(new Blob([pi],{type:"application/javascript"}))),this.worker=new Worker(nt)}}Po.revokeObjectURL=function(){nt&&(URL.revokeObjectURL(nt),nt=null)};let co=0,Js;class ui{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:a}=new ra;a.addEventListener("message",o=>{a.terminate(),ra.revokeObjectURL(),e(o.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,a){var o;return this._run("loadImageBitmap",[e,(o=a==null?void 0:a.data)==null?void 0:o.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Js===void 0&&(Js=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Js&&(this._createdWorkers++,e=new Po().worker,e.addEventListener("message",a=>{this._complete(a.data),this._returnWorker(a.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,a){await this._initWorkers();const o=new Promise((r,n)=>{this._queue.push({id:e,arguments:a,resolve:r,reject:n})});return this._next(),o}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const a=this._queue.pop(),o=a.id;this._resolveHash[co]={resolve:a.resolve,reject:a.reject},e.postMessage({data:a.arguments,uuid:co++,id:o})}}const po=new ui,fi=[".jpeg",".jpg",".png",".webp",".avif"],hi=["image/jpeg","image/png","image/webp","image/avif"];async function gi(t,e){var r;const a=await de.get().fetch(t);if(!a.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${a.status} ${a.statusText}`);const o=await a.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(o,{premultiplyAlpha:"none"}):createImageBitmap(o)}const Oo={name:"loadTextures",extension:{type:O.LoadParser,priority:lt.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return dt(t,hi)||ct(t,fi)},async load(t,e,a){var n;let o=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await po.isImageBitmapSupported()?o=await po.loadImageBitmap(t,e):o=await gi(t,e):o=await new Promise((l,d)=>{o=new Image,o.crossOrigin=this.config.crossOrigin,o.src=t,o.complete?l(o):(o.onload=()=>{l(o)},o.onerror=d)});const r=new yo({resource:o,alphaMode:"premultiply-alpha-on-upload",resolution:((n=e.data)==null?void 0:n.resolution)||da(t),...e.data});return pa(r,a,t)},unload(t){t.destroy(!0)}},Bo=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],vi=Bo.map(t=>`video/${t.substring(1)}`);function mi(t,e,a){a===void 0&&!e.startsWith("data:")?t.crossOrigin=bi(e):a!==!1&&(t.crossOrigin=typeof a=="string"?a:"anonymous")}function xi(t){return new Promise((e,a)=>{t.addEventListener("canplaythrough",o),t.addEventListener("error",r),t.load();function o(){n(),e()}function r(l){n(),a(l)}function n(){t.removeEventListener("canplaythrough",o),t.removeEventListener("error",r)}})}function bi(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const a=new URL(t,document.baseURI);return a.hostname!==e.hostname||a.port!==e.port||a.protocol!==e.protocol?"anonymous":""}const yi={name:"loadVideo",extension:{type:O.LoadParser,name:"loadVideo"},test(t){const e=dt(t,vi),a=ct(t,Bo);return e||a},async load(t,e,a){var h,v;const o={...Ys.defaultOptions,resolution:((h=e.data)==null?void 0:h.resolution)||da(t),alphaMode:((v=e.data)==null?void 0:v.alphaMode)||await fn(),...e.data},r=document.createElement("video"),n={preload:o.autoLoad!==!1?"auto":void 0,"webkit-playsinline":o.playsinline!==!1?"":void 0,playsinline:o.playsinline!==!1?"":void 0,muted:o.muted===!0?"":void 0,loop:o.loop===!0?"":void 0,autoplay:o.autoPlay!==!1?"":void 0};Object.keys(n).forEach(p=>{const b=n[p];b!==void 0&&r.setAttribute(p,b)}),o.muted===!0&&(r.muted=!0),mi(r,t,o.crossorigin);const l=document.createElement("source");let d;if(t.startsWith("data:"))d=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const p=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();d=Ys.MIME_TYPES[p]||`video/${p}`}return l.src=t,d&&(l.type=d),new Promise(p=>{const b=async()=>{const m=new Ys({...o,resource:r});r.removeEventListener("canplay",b),e.data.preload&&await xi(r),p(pa(m,a,t))};r.addEventListener("canplay",b),r.appendChild(l)})},unload(t){t.destroy(!0)}},Co={extension:{type:O.ResolveParser,name:"resolveTexture"},test:Oo.test,parse:t=>{var e;return{resolution:parseFloat(((e=Yt.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},wi={extension:{type:O.ResolveParser,priority:-2,name:"resolveJson"},test:t=>Yt.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:Co.parse};class _i{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Yt,this.loader=new Gn,this.cache=Pe,this._backgroundLoader=new Cn(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var n,l;if(this._initialized){Ne("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let d=e.manifest;typeof d=="string"&&(d=await this.load(d)),this.resolver.addManifest(d)}const a=((n=e.texturePreference)==null?void 0:n.resolution)??1,o=typeof a=="number"?[a]:a,r=await this._detectFormats({preferredFormats:(l=e.texturePreference)==null?void 0:l.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:o}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,a){this._initialized||await this.init();const o=bo(e),r=$t(e).map(d=>{if(typeof d!="string"){const h=this.resolver.getAlias(d);return h.some(v=>!this.resolver.hasKey(v))&&this.add(d),Array.isArray(h)?h[0]:h}return this.resolver.hasKey(d)||this.add({alias:d,src:d}),d}),n=this.resolver.resolve(r),l=await this._mapLoadToResolve(n,a);return o?l[r[0]]:l}addBundle(e,a){this.resolver.addBundle(e,a)}async loadBundle(e,a){this._initialized||await this.init();let o=!1;typeof e=="string"&&(o=!0,e=[e]);const r=this.resolver.resolveBundle(e),n={},l=Object.keys(r);let d=0,h=0;const v=()=>{a==null||a(++d/h)},p=l.map(b=>{const m=r[b];return h+=Object.keys(m).length,this._mapLoadToResolve(m,v).then(L=>{n[b]=L})});return await Promise.all(p),o?n[e[0]]:n}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(a))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolveBundle(e);Object.values(a).forEach(o=>{this._backgroundLoader.add(Object.values(o))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Pe.get(e);const a={};for(let o=0;o<e.length;o++)a[o]=Pe.get(e[o]);return a}async _mapLoadToResolve(e,a){const o=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(o,a);this._backgroundLoader.active=!0;const n={};return o.forEach(l=>{const d=r[l.src],h=[l.src];l.alias&&h.push(...l.alias),h.forEach(v=>{n[v]=d}),Pe.set(h,d)}),n}async unload(e){this._initialized||await this.init();const a=$t(e).map(r=>typeof r!="string"?r.src:r),o=this.resolver.resolve(a);await this._unloadFromResolved(o)}async unloadBundle(e){this._initialized||await this.init(),e=$t(e);const a=this.resolver.resolveBundle(e),o=Object.keys(a).map(r=>this._unloadFromResolved(a[r]));await Promise.all(o)}async _unloadFromResolved(e){const a=Object.values(e);a.forEach(o=>{Pe.remove(o.src)}),await this.loader.unload(a)}async _detectFormats(e){let a=[];e.preferredFormats&&(a=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const o of e.detections)e.skipDetections||await o.test()?a=await o.add(a):e.skipDetections||(a=await o.remove(a));return a=a.filter((o,r)=>a.indexOf(o)===r),a}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(a=>{a.config&&Object.keys(a.config).filter(o=>o in e).forEach(o=>{a.config[o]=e[o]})})}}const ot=new _i;De.handleByList(O.LoadParser,ot.loader.parsers).handleByList(O.ResolveParser,ot.resolver.parsers).handleByList(O.CacheParser,ot.cache.parsers).handleByList(O.DetectionParser,ot.detections);De.add(Fn,Wn,Mn,Un,zn,Nn,Dn,Yn,qn,oi,ii,Oo,yi,Bn,On,Co,wi);const uo={loader:O.LoadParser,resolver:O.ResolveParser,cache:O.CacheParser,detection:O.DetectionParser};De.handle(O.Asset,t=>{const e=t.ref;Object.entries(uo).filter(([a])=>!!e[a]).forEach(([a,o])=>De.add(Object.assign(e[a],{extension:e[a].extension??o})))},t=>{const e=t.ref;Object.keys(uo).filter(a=>!!e[a]).forEach(a=>De.remove(e[a]))});var Ai=te('<div class="win-label svelte-1vsph43">BIG WIN!</div> <div class="win-amount-display svelte-1vsph43"> </div>',1),ki=ho('<use href="#sparkle" class="sparkle svelte-1vsph43"></use>'),$i=ho('<use href="#vinyl"></use>'),Si=te('<div><!> <svg class="vinyl-canvas svelte-1vsph43" viewBox="0 0 1024 800" xmlns="http://www.w3.org/2000/svg"><defs class="svelte-1vsph43"><symbol id="vinyl" viewBox="-200 -200 400 400" class="svelte-1vsph43"><circle cx="0" cy="0" r="180" fill="#0b0b0b" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="150" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.3" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="120" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.25" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="90" fill="none" stroke="#1a1a1a" stroke-width="1.5" opacity="0.2" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="55" fill="var(--label-color)" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="6" fill="#ffffff" class="svelte-1vsph43"></circle><ellipse cx="-15" cy="-15" rx="20" ry="15" fill="#ffffff" opacity="0.3" transform="rotate(-30)" class="svelte-1vsph43"></ellipse></symbol><symbol id="sparkle" viewBox="-12 -12 24 24" class="svelte-1vsph43"><polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ffd966" class="svelte-1vsph43"></polygon><circle cx="0" cy="0" r="2" fill="#ffffff" class="svelte-1vsph43"></circle></symbol><symbol id="confetti" viewBox="-3 -3 6 6" class="svelte-1vsph43"><circle cx="0" cy="0" r="2" fill="var(--confetti-color)" class="svelte-1vsph43"></circle></symbol></defs><!><!></svg></div>');function Ei(t,e){na(e,!0);let a=at(e,"winLevel",3,"small"),o=at(e,"winAmount",3,0),r=at(e,"vinylStartScale",3,.01),n=at(e,"vinylEndScale",3,.15),l=at(e,"sparkleScale",3,.6),d=I(!1),h=I(!1);const v={small:{vinyls:5,sparkles:8,maxRadius:70},medium:{vinyls:12,sparkles:16,maxRadius:100},jackpot:{vinyls:24,sparkles:30,maxRadius:130}},p=ze(()=>v[a()]),b=["#f04e37","#ffd966","#ff8533","#4ecdc4","#ff6b9d"];function m(W){const ne=[],Re=s(p).maxRadius;for(let M=0;M<W;M++){const Y=Math.PI*2*M/W+Math.random()*.4,Oe=Math.random()*Re*.7+Re*.2;ne.push({x:512+Math.cos(Y)*Oe,y:400+Math.sin(Y)*Oe,rotation:Math.random()*30-15,scale:n()*(.8+Math.random()*.4),delay:M*.05,color:b[M%b.length]})}return ne}function L(W){const ne=[];for(let pe=0;pe<W;pe++)ne.push({x:100+Math.random()*824,y:50+Math.random()*700,delay:Math.random()*.8,duration:.6+Math.random()*.4,rotation:Math.random()*360});return ne}const T=ze(()=>m(s(p).vinyls)),Z=ze(()=>L(s(p).sparkles));function K(){x(d,!0),x(h,!0),setTimeout(()=>{x(h,!1),setTimeout(()=>{var W;x(d,!1),(W=e.onComplete)==null||W.call(e)},500)},a()==="jackpot"?4e3:a()==="medium"?3e3:2500)}function R(){x(h,!1),setTimeout(()=>{x(d,!1)},500)}var U=fo(),Le=it(U);{var re=W=>{var ne=Si();let pe;var me=_(ne);{var Re=xe=>{var ee=Ai(),ue=u(it(ee),2),Ye=_(ue,!0);A(ue),oe(be=>D(Ye,be),[()=>o().toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),Q(xe,ee)};ce(me,xe=>{o()>0&&xe(Re)})}var M=u(me,2),Y=u(_(M));Vt(Y,17,()=>s(Z),Ht,(xe,ee)=>{var ue=ki();oe(()=>y(ue,"style",`
            --sx: ${s(ee).x??""}px;
            --sy: ${s(ee).y??""}px;
            --duration: ${s(ee).duration??""}s;
            --sparkle-delay: ${s(ee).delay??""}s;
            --sparkle-scale: ${l()??""};
          `)),Q(xe,ue)});var Oe=u(Y);Vt(Oe,17,()=>s(T),Ht,(xe,ee)=>{var ue=$i();let Ye;oe(()=>{Ye=sa(ue,0,"vinyl-group svelte-1vsph43",null,Ye,{floating:s(h)}),y(ue,"style",`
            --tx: ${s(ee).x??""}px;
            --ty: ${s(ee).y??""}px;
            --scale: ${s(ee).scale??""};
            --rotation: ${s(ee).rotation??""}deg;
            --delay: ${s(ee).delay??""}s;
            --label-color: ${s(ee).color??""};
            --start-scale: ${r()??""};
          `)}),Q(xe,ue)}),A(M),A(ne),oe(()=>pe=sa(ne,1,"vinyl-win-container svelte-1vsph43",null,pe,{visible:s(h),hiding:!s(h)})),Q(W,ne)};ce(Le,W=>{s(d)&&W(re)})}return Q(t,U),ia({show:K,hide:R})}var Li=Fr('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-o2kwxd"><\/script><!---->',1),Ti=te('<p style="color: red;" class="svelte-o2kwxd"><strong class="svelte-o2kwxd">Error:</strong> </p>'),Ri=te('<div class="svelte-o2kwxd"> </div>'),Ii=te('<details class="svelte-o2kwxd"><summary class="svelte-o2kwxd"> </summary> <!></details>'),Pi=te(`<div style="
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
  " class="svelte-o2kwxd"><h3 class="svelte-o2kwxd">🎰 Oma-peli Debug</h3> <p class="svelte-o2kwxd"><strong class="svelte-o2kwxd">Status:</strong> </p> <!> <p class="svelte-o2kwxd"><strong class="svelte-o2kwxd">Base:</strong> </p> <p class="svelte-o2kwxd"><strong class="svelte-o2kwxd">BG URL:</strong> </p> <p class="svelte-o2kwxd"><strong class="svelte-o2kwxd">Sample:</strong> </p> <!></div>`),Oi=te('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-o2kwxd"> </div>'),Bi=te('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-o2kwxd"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-o2kwxd"> </span></div>'),Ci=te(`<div style="
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
  " class="svelte-o2kwxd"><h2 style="margin: 0 0 10px 0; font-size: 2em;" class="svelte-o2kwxd">🎉 VOITTO! 🎉</h2> <div style="font-size: 1.5em; font-weight: bold; margin: 10px 0;" class="svelte-o2kwxd"> </div> <!> <!> <button style="
        margin-top: 15px;
        padding: 8px 16px;
        background: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
      " class="svelte-o2kwxd">Jatka pelaamista</button></div>`),Fi=te(`<div class="svelte-o2kwxd"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-o2kwxd">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-o2kwxd">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-o2kwxd"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-o2kwxd"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-o2kwxd"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-o2kwxd">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-o2kwxd"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-o2kwxd">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-o2kwxd"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-o2kwxd">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-o2kwxd"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-o2kwxd">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-o2kwxd">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-o2kwxd"> <span style="color: #ffd700;" class="svelte-o2kwxd">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-o2kwxd">Sulje</button></div>`),Mi=te(`<div style="
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5000;
  " class="svelte-o2kwxd"><div style="
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: white;
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      border: 3px solid #ffd700;
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
      max-width: 500px;
      font-family: Arial, sans-serif;
    " class="svelte-o2kwxd"><h1 style="
        margin: 0 0 20px 0;
        font-size: 2.5em;
        color: #ffd700;
        text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
      " class="svelte-o2kwxd">🎰 VAPAAPELIT PÄÄTTYIVÄT! 🎰</h1> <div style="
        font-size: 1.2em;
        margin: 20px 0;
        color: #aaa;
      " class="svelte-o2kwxd">Voitit yhteensä:</div> <div style="
        font-size: 3em;
        font-weight: bold;
        color: #00ff00;
        text-shadow: 0 0 15px rgba(0, 255, 0, 0.8);
        margin: 20px 0;
      " class="svelte-o2kwxd"> </div> <button style="
          margin-top: 30px;
          padding: 15px 40px;
          background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
          color: #000;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-size: 1.3em;
          font-weight: bold;
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
          transition: transform 0.2s, box-shadow 0.2s;
        " class="svelte-o2kwxd">JATKA PERUSPELIIN</button></div></div>`),Wi=te('<div class="svelte-o2kwxd"><div class="svelte-o2kwxd">🔄 Select Rounds</div> <button class="svelte-o2kwxd">10 Rounds</button> <button class="svelte-o2kwxd">25 Rounds</button> <button class="svelte-o2kwxd">50 Rounds</button> <button class="svelte-o2kwxd">100 Rounds</button> <button class="svelte-o2kwxd">200 Rounds</button> <button class="svelte-o2kwxd">500 Rounds</button> <button class="svelte-o2kwxd">1,000 Rounds</button> <button class="svelte-o2kwxd">5,000 Rounds</button> <button class="svelte-o2kwxd">Cancel</button></div>'),ji=te(`<!>   <!>   <!>   <!>  <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
" class="svelte-o2kwxd"><div class="svelte-o2kwxd"><div class="svelte-o2kwxd"><button class="svelte-o2kwxd">💰 PAYTABLE</button>  <div class="control-panel-mobile svelte-o2kwxd"><!>  <img alt="Left End" class="svelte-o2kwxd"> <div class="svelte-o2kwxd"><div class="svelte-o2kwxd"><div class="svelte-o2kwxd">BET</div> <div class="svelte-o2kwxd"><button title="Decrease Bet" class="svelte-o2kwxd"></button> <div class="svelte-o2kwxd"> </div> <button title="Increase Bet" class="svelte-o2kwxd"></button></div></div> <img alt="Divider" class="svelte-o2kwxd"> <div class="svelte-o2kwxd"><div class="svelte-o2kwxd">BALANCE</div> <div class="svelte-o2kwxd"> </div></div> <img alt="Divider" class="svelte-o2kwxd"> <div style="position: relative; display: flex; align-items: center; justify-content: center; flex-grow: 0.5;" class="svelte-o2kwxd"><div><button title="SPIN" class="svelte-o2kwxd"></button></div></div> <img alt="Divider" class="svelte-o2kwxd"> <div class="svelte-o2kwxd"><button class="svelte-o2kwxd"></button> <img alt="Status bar" class="svelte-o2kwxd"></div> <img alt="Divider" class="svelte-o2kwxd"> <div class="svelte-o2kwxd"><button class="svelte-o2kwxd"></button> <img alt="Speed bar" class="svelte-o2kwxd"></div> <div class="svelte-o2kwxd"><div class="svelte-o2kwxd">WIN</div> <div class="win3d winShine svelte-o2kwxd" id="winLabel"><span class="depth svelte-o2kwxd" aria-hidden="true"> </span> <span class="face svelte-o2kwxd"> </span></div></div> <img alt="Divider" class="svelte-o2kwxd"> <button title="Menu" class="svelte-o2kwxd"></button></div> <img alt="Right End" class="svelte-o2kwxd"></div></div>  <button class="svelte-o2kwxd"></button> <!>   <div class="debug-panel svelte-o2kwxd"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-o2kwxd">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-o2kwxd"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Rounds:</span> <span style="color: #fff;" class="svelte-o2kwxd"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Wagered:</span> <span style="color: #ff6666;" class="svelte-o2kwxd"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Won:</span> <span style="color: #66ff66;" class="svelte-o2kwxd"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 10px; 
    padding-top: 10px; 
    border-top: 1px solid #555;
    font-weight: bold;
    font-size: 18px;
  " class="svelte-o2kwxd"><span style="color: #ffd700;" class="svelte-o2kwxd">RTP:</span> <span class="svelte-o2kwxd"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
  " class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Hit Freq:</span> <span class="svelte-o2kwxd"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-size: 14px;
  " class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Free Spins Triggered:</span> <span style="color: #66ccff;" class="svelte-o2kwxd"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 4px;
    font-size: 14px;
  " class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Free Spins Played:</span> <span style="color: #66ccff;" class="svelte-o2kwxd"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #555;
    font-size: 14px;
  " class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Empty Slots:</span> <span style="color: #ff9900;" class="svelte-o2kwxd"> </span></div> <button style="
      margin-top: 10px;
      width: 100%;
      padding: 5px;
      background: rgba(255, 100, 100, 0.3);
      color: #fff;
      border: 1px solid #ff6666;
      border-radius: 5px;
      cursor: pointer;
      font-size: 11px;
    " class="svelte-o2kwxd">Reset Stats</button> <div style="
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  " class="svelte-o2kwxd"><button class="svelte-o2kwxd"> </button> <button class="svelte-o2kwxd">Clear Win Log</button> <button class="svelte-o2kwxd"> </button> <button class="svelte-o2kwxd">🎰 Test Free Spins</button></div></div> <button class="debug-panel svelte-o2kwxd"> </button></div></div>`,1);function zi(t,e){na(e,!0);const a="1.3.4",o=13,r=1445,n=1e3,l=1.75,d=-30,h=-10,v=160,p=0,b=750,m=80,L=250,T=0,Z=50,K=.5,R=40,U=0,re=Math.round(100*l),W=Math.round(re*(700/760)),pe=W+10,me=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],Re=typeof window<"u"&&window.location.hostname.includes("github.io"),M=Re?"/web-sdk/oma-peli/symbols":`${Te}/symbols`,Y=Re?"/web-sdk/oma-peli/controls":`${Te}/controls`,Oe={a:`${M}/Blue_hotrod.jpg`,b:`${M}/Blue_jacket.jpg`,c:`${M}/Blue_rollers.jpg`,d:`${M}/Blue_speakers.jpg`,e:`${M}/Premium_blonde.jpg`,f:`${M}/Premium_brunette.jpg`,g:`${M}/Premium_rocker.jpg`,h:`${M}/New_Wild.jpg`,i:`${M}/Red_burger.jpg`,j:`${M}/Red_fries.jpg`,k:`${M}/Red_milkshake.jpg`,l:`${M}/Scatter.jpg`,emptyslot:`${M}/Emptyslot.jpg`},xe=`${M}/bg_base.jpg`,ee=`${M}/ReelFrames.png`,ue=`${M}/RockABillyReels_logo.png`,Ye={spin:`${Te}/sounds/spin.mp3`,stop:`${Te}/sounds/stop.mp3`,win:`${Te}/sounds/win.mp3`};let be=I(!0),Xt={},q=null,fe=null,Kt=null,qt=null,ye=I(!0),Fo=I(!1),Qt=I(945),Jt=null;const Mo={fast:3,medium:7,slow:18};let he=I("medium"),ua=I(Math.floor(Math.random()*20)+1);const St={background:()=>`${Te}/music/rockabilly reels loop ${s(ua)}.mp3`,freeSpins:`${Te}/music/rockabilly-loop_long.mp3`,drumHit:`${Te}/music/drum-hit.mp3`,winTheme:`${Te}/music/win-stinger.mp3`};function fa(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(fa,500);return}const c=window.Howl;try{q=new c({src:[St.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+s(ua)+")"),x(Fo,!0)},onloaderror:(f,k)=>{console.warn("⚠️ Background music not found:",k)}}),fe=new c({src:[St.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(f,k)=>console.warn("⚠️ Free spins music not found:",k)}),Kt=new c({src:[St.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),qt=new c({src:[St.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(f){console.error("Failed to initialize music system:",f)}}function ha(){const c=s(J)?fe:q;c&&s(ye)&&!c.playing()&&(c.play(),console.log("🎵 "+(s(J)?"Free spins":"Background")+" music started"))}function Wo(){q&&q.playing()&&(q.fade(q.volume(),0,500),setTimeout(()=>q.stop(),500)),fe&&fe.playing()&&(fe.fade(fe.volume(),0,500),setTimeout(()=>fe.stop(),500))}function Zt(){q&&q.playing()&&(q.fade(q.volume(),0,500),setTimeout(()=>q.stop(),500)),fe&&fe.playing()&&(fe.fade(fe.volume(),0,500),setTimeout(()=>fe.stop(),500)),setTimeout(()=>{s(ye)&&ha()},600)}function jo(){if(q&&q.playing()){const c=q.volume();q.fade(c,0,1e3),setTimeout(()=>{q.stop(),q.volume(.3)},1e3)}}let es=I(!1);function zo(){x(es,!1),setTimeout(()=>{x(es,!0)},10)}let Xe=null;const ts={vinylStartScale:.01,vinylEndScale:.15,sparkleScale:.6};function No(){x(ye,!s(ye)),s(ye)?ha():Wo()}function Do(){Kt&&s(ye)&&s(be)&&Kt.play()}function Uo(){qt&&s(ye)&&s(be)&&qt.play()}let Et=null,ss=null,pt=null,ut=null,ft=I("Initializing..."),Ke=I(""),we=[],Be=I(1e3);const ga=[.4,.8,1,1.6,2,3,5,8,10,15,20,25,30,40,50,60,80,100];let ht=I(5),_e=ze(()=>ga[s(ht)]),as=I(0),Ae=I(!1),gt=I(0),ie=I(!1),os=I(!1),Go=I(0),Ue=!1,Ie=null,rs=!1,qe=I(0),Qe=I(0),vt=I(0),ns=I(0),is=ze(()=>s(Qe)>0?(s(vt)/s(Qe)*100).toFixed(2):"0.00"),ls=ze(()=>s(qe)>0?(s(ns)/s(qe)*100).toFixed(2):"0.00"),J=I(!1),Ce=I(0),Ge=I(0),Lt=I(0),cs=I(0),Tt=I(0),ds=I(0),Ho=ze(()=>s(Tt)>0?(s(ds)/s(Tt)*100).toFixed(2):"0.00"),ge=I(ve([]));function Vo(c,f,k){const g=new Date().toLocaleString("fi-FI");let w=`
${"=".repeat(60)}
`;w+=`ROUND #${c} - ${g}
`,w+=`Mode: ${s(J)?"FREE SPINS":"BASE GAME"}
`,w+=`${"=".repeat(60)}
`,f.forEach(($,S)=>{w+=`
Win ${S+1}:
`,w+=`  Symbol: ${$.symbol} (${ba[$.symbol]})
`,w+=`  Count: ${$.count} symbols
`,w+=`  Multiplier: ${$.multiplier}x
`,w+=`  Payout: ${$.payout.toFixed(2)}
`,w+=`  Positions: [${$.positions.join(", ")}]
`}),w+=`
${"─".repeat(60)}
`,w+=`TOTAL WIN: ${k.toFixed(2)}
`,w+=`${"=".repeat(60)}
`,s(ge).push(w)}function Yo(){const c=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${s(ge).join(`
`)}`,f=new Blob([c],{type:"text/plain"}),k=URL.createObjectURL(f),g=document.createElement("a");g.href=k,g.download=`win-log-${Date.now()}.txt`,g.click(),URL.revokeObjectURL(k)}function Xo(){x(ge,ve([]))}function Ko(){s(J)||(x(J,!0),x(Ce,10),x(Ge,0),Se(Lt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),Zt())}const qo={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},Qo={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function va(c){if(c===6)return Math.random()<.55?"h":"emptyslot";const f=s(J)?Qo:qo,k=Math.random();let g=0;const w=me.filter(S=>S!=="h"),$=w.reduce((S,B)=>S+f[B],0);for(const S of w)if(g+=f[S]/$,k<g)return S;return"f"}function ma(){const c=[];for(let f=0;f<o;f++){const k=va(f);c.push(k),Se(Tt),k==="emptyslot"&&Se(ds)}return c}function xa(c){return c<3?{col:0,row:c}:c<6?{col:1,row:c-3}:c===6?{col:2,row:0}:c<10?{col:3,row:c-7}:{col:4,row:c-10}}function mt(c,f){return c===0?f:c===1?3+f:c===2?6:c===3?7+f:c===4?10+f:-1}function Jo(){if(s(J)){const c=Math.random();return c<.7?3:c<.92?5:10}else{const c=Math.random();return c<.7?1:c<.92?2:3}}const Zo={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function er(){var X;const c=[],f=[];for(let E=0;E<o;E++)xt[E]==="l"&&f.push(E);if(f.length>=5){const E=f.length;x(Ce,s(Ce)+E),s(J)?console.log(`🎰 FREE SPINS RETRIGGERED! +${E} FREE SPINS! Total: ${s(Ce)}`):(x(J,!0),x(Ge,0),Se(Lt),console.log(`🎰 FREE SPINS TRIGGERED! ${f.length} scatters = ${E} FREE SPINS!`),Zt()),c.push({symbol:"l",count:f.length,payout:0,positions:f,multiplier:1})}const k=[];for(let E=0;E<3;E++)for(let P=0;P<3;P++)for(let F=0;F<1;F++)for(let j=0;j<3;j++)for(let N=0;N<3;N++){const z=[mt(0,E),mt(1,P),mt(2,F),mt(3,j),mt(4,N)];k.push(z)}console.log(`Generated ${k.length} possible paths (should be 81)`);const g=[];for(const E of k){const P=E.map(z=>xt[z]);if(P[0]==="emptyslot"||P[0]==="l")continue;let F=null;for(let z=0;z<P.length;z++)if(P[z]!=="h"&&P[z]!=="emptyslot"&&P[z]!=="l"){F=P[z];break}if(!F)continue;let j=0;const N=new Set;for(let z=0;z<E.length;z++){const We=E[z],{col:st}=xa(We),le=P[z];(le===F||le==="h")&&N.add(st)}for(let z=0;z<5&&N.has(z);z++)j++;if(j>=3){const We=E[0]%3;g.push({symbol:F,length:j,path:E.slice(0,j),startRow:We})}}const w=[],$=new Map;for(const E of g){const P=`${E.symbol}-${E.path.join(",")}`;$.has(P)||$.set(P,[]),$.get(P).push(E)}for(const[E,P]of $.entries()){const F=Math.max(...P.map(N=>N.length)),j=P.find(N=>N.length===F);j&&w.push(j)}const S=[],B=new Map;for(const E of w)B.has(E.symbol)||B.set(E.symbol,[]),B.get(E.symbol).push(E);const G=[];for(const[E,P]of B.entries()){const F=Math.max(...P.map(N=>N.length)),j=P.filter(N=>N.length===F);G.push(...j)}const V=new Map;for(const E of G){const P=`${E.symbol}-${E.length}`;V.has(P)||V.set(P,[]),V.get(P).push(E)}const H=G.length>0?Jo():1;for(const[E,P]of V.entries()){const F=P[0],j=(X=Zo[F.symbol])==null?void 0:X[F.length];if(j!==void 0&&j>0){const N=new Map;for(const le of P)for(let ae=0;ae<le.length;ae++)N.has(ae)||N.set(ae,new Set),N.get(ae).add(le.path[ae]);let z=1;for(let le=0;le<F.length;le++){const ae=N.get(le);z*=ae?ae.size:1}const We=j*s(_e)*z*H;console.log(`  ${F.length}x${F.symbol}: ${z} ways × ${j}x × ${s(_e)} bet × ${H} mult = ${We}`);const st=new Set;for(const le of P)le.path.forEach(ae=>st.add(ae));S.push({symbol:F.symbol,count:F.length,payout:We,positions:Array.from(st),multiplier:H})}}return c.push(...S),c}let ke=I(0),Je=I(ve([])),Fe=I(!1),Ze=I(!1),ps=I(!1),us=I(0);const ba={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function fs(c){if(!s(be)||!Xt[c])return;const f=Xt[c];f.currentTime=0,f.play().catch(k=>{console.warn("Äänen toisto epäonnistui:",c,k)})}function tr(c){bt.forEach(f=>se.stage.removeChild(f)),bt=[],c.forEach(f=>{f.positions.forEach(k=>{const g=et[k],w=new to().rect(0,0,re,W).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});w.x=g.container.x,w.y=g.container.y,se.stage.addChild(w),bt.push(w);let $=0,S=1;const B=.05;se.ticker.add(()=>{$+=S*B,$>=.4&&(S=-1),$<=0&&(S=1),w.alpha=.5+$})})})}function hs(){bt.forEach(c=>se.stage.removeChild(c)),bt=[]}let xt=ma(),gs,se,et=[],bt=[];class sr{constructor(f,k){$e(this,"index");$e(this,"container");$e(this,"offset",0);$e(this,"speed",0);$e(this,"targetSpeed",30);$e(this,"state","idle");$e(this,"stopDelay",0);$e(this,"bounceOffset",0);$e(this,"bounceSpeed",0);$e(this,"bounceFrames",0);this.index=f,this.container=k}start(f){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=f}startSynchronized(f){const k=Mo[s(he)],g=60+f*k;this.start(g)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const f=s(he)==="slow"?.88:s(he)==="medium"?.92:.95;this.speed*=f,this.speed<2.5&&(this.state="bouncing",this.speed=0,this.offset=0,this.bounceOffset=0,this.bounceSpeed=8,fs("stop"),Do())}this.state==="bouncing"&&(this.bounceSpeed*=.85,this.bounceOffset+=this.bounceSpeed,Math.abs(this.bounceSpeed)<.3&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=pe&&(this.offset=0,xt[this.index]=va(this.index)))}}draw(){const f=this.container;f.removeChildren();const k=xt[this.index];if(!k||!Et||!Et[k])return;const g=Et[k];if(!g)return;const w=this.offset+this.bounceOffset,$=new Xs(g);$.width=re,$.height=W,$.x=0,$.y=w,f.addChild($)}}let i=I(1);xo(async()=>{se=new To,await se.init({width:r,height:n,backgroundAlpha:0}),gs.appendChild(se.canvas);const c=()=>{const g=window.innerWidth,w=window.innerHeight,$=g/r,S=w/n,B=Math.min($,S,1);x(i,ve(B)),se.stage.scale.set(B),se.renderer.resize(r,n)};c(),window.addEventListener("resize",c);const f={};try{x(ft,"Loading background and UI images..."),we.push(`Loading background: ${xe}`),we.push(`Loading reel frames: ${ee}`),we.push(`Loading logo: ${ue}`),await ot.load([{alias:"background",src:xe},{alias:"reelframes",src:ee},{alias:"logo",src:ue}]),ss=He.from("background"),pt=He.from("reelframes"),ut=He.from("logo"),console.log("✅ Background texture created:",ss.width,"x",ss.height),console.log("✅ Reel frames texture created:",pt.width,"x",pt.height),console.log("✅ Logo texture created:",ut.width,"x",ut.height),we.push("✅ All UI images loaded"),x(ft,"Loading symbols...");const g=[];for(const w of me)g.push({alias:w,src:Oe[w]});await ot.load(g);for(const w of me){const $=Oe[w];we.push(`Loading symbol ${w}: ${$}`);try{const S=He.from(w);f[w]=S,console.log(`✅ Symbol ${w} loaded:`,S.width,"x",S.height),we.push(`✅ Symbol ${w} loaded`)}catch(S){const B=`❌ Failed to load symbol ${w} from ${$}: ${S}`;throw we.push(B),console.error(B),new Error(B)}}Et=f,x(ft,"Assets loaded successfully!")}catch(g){x(Ke,`Asset loading failed: ${g}`),we.push(s(Ke)),console.error(s(Ke));return}console.log("Ladataan ääniefektit...");for(const[g,w]of Object.entries(Ye)){const $=new Audio;$.src=w,$.preload="auto",$.volume=.7,$.load(),$.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${w} (käytetään hiljaista placeholderia)`)}),Xt[g]=$}[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(g=>({x:g.x+d,y:g.y+h})),et=[];for(let g=0;g<o;g++){const w=xa(g),$=w.col,S=w.row,B=300+$*(re+20),G=250+S*(W+15),V=g===6?B+p:B,H=g===6?G+v:G,X=new la;X.x=V+d,X.y=H+h;const E=new to().rect(0,0,re,W).fill(16777215);E.x=X.x,E.y=X.y,X.mask=E,se.stage.addChild(E),se.stage.addChild(X),et.push(new sr(g,X))}if(pt){const g=new Xs(pt);g.scale.set(1),g.x=250,g.y=200,se.stage.addChild(g),Jt=g,x(Qt,ve(g.width)),console.log("Reel frames lisätty:",g.width.toFixed(0),"x",g.height.toFixed(0)),console.log("Control panel leveys päivitetty:",s(Qt).toFixed(0))}if(ut){const g=new Xs(ut);g.scale.set(K),g.x=(se.renderer.width-g.width)/2+R,g.y=U,se.stage.addChild(g),console.log("Logo lisätty päällimmäiseen layeriin:",g.width.toFixed(0),"x",g.height.toFixed(0))}fa(),se.ticker.add(ar)});function ar(){for(const c of et)c.update(),c.draw();if(!s(Fe)&&!rs&&et.every(c=>c.state==="stopped")){rs=!0,jo();const c=er();console.log(`Checking wins, found ${c.length} wins`),c.length>0?(x(Je,ve(c)),x(ke,ve(c.reduce((f,k)=>f+k.payout,0))),Vo(s(qe),c,s(ke)),rr(s(ke)),x(Fe,!0),x(Go,ve(Date.now())),console.log(`🎉 VOITTO! ${s(ke)} pistettä! Uusi saldo: ${s(Be)}`),console.log(`isShowingWin set to: ${s(Fe)}, totalWin: ${s(ke)}`),c.forEach(f=>{const k=f.multiplier?` (${f.multiplier}x multiplier)`:"";console.log(`${f.count}x ${f.symbol} = ${f.payout} pistettä${k}`)}),tr(c),fs("win"),s(Ae)&&!Ue&&(Ue=!0,Ie=window.setTimeout(()=>{s(Fe)&&s(Ae)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),x(Fe,!1),hs()),Ie=window.setTimeout(()=>{Ue=!1,vs()},200)},1500))):(console.log("No wins found this spin"),s(Ae)&&!Ue&&(Ue=!0,Ie=window.setTimeout(()=>{Ue=!1,vs()},500))),s(J)&&s(Ce)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${s(Ge)}`),setTimeout(()=>{x(us,ve(s(Ge))),x(ps,!0)},2e3))}}function ya(){if(!s(J)&&q&&s(ye)&&!q.playing()&&(q.play(),console.log("🎵 Background music started on first spin")),zo(),s(J)&&s(Ce)>0)Se(Ce,-1),Se(cs),console.log(`🎰 FREE SPIN! Remaining: ${s(Ce)}`);else if(!s(J)){if(s(Be)<s(_e)){alert(`Not enough credits! Balance: ${s(Be)}, Bet: ${s(_e)}`),Rt();return}x(Be,s(Be)-s(_e)),Se(qe),x(Qe,s(Qe)+s(_e))}Ie!==null&&(clearTimeout(Ie),Ie=null),x(Je,ve([])),x(ke,0),x(Fe,!1),rs=!1,hs(),xt=ma(),et.forEach((c,f)=>{c.startSynchronized(f)}),fs("spin")}function or(c,f,k=1400){if(typeof window>"u")return;const g=document.getElementById("winLabel");if(!g)return;const w=g.querySelector(".face"),$=g.querySelector(".depth");if(!w||!$)return;g.classList.add("rolling");const S=performance.now(),B=f-c,G=H=>1-Math.pow(1-H,3);function V(H){const X=Math.min(1,(H-S)/k),P="WIN "+Math.round(c+B*G(X)).toLocaleString("en-US");w.textContent=P,$.textContent=P,X<1?requestAnimationFrame(V):(g.classList.remove("rolling"),g.classList.add("winHit"),setTimeout(()=>g.classList.remove("winHit"),450))}requestAnimationFrame(V)}function rr(c){x(Be,s(Be)+c),x(vt,s(vt)+c);const f=s(as);x(as,ve(c));const k=c>s(_e)*50?2e3:1400;if(or(f,c,k),s(J)&&x(Ge,s(Ge)+c),c>0){Se(ns);const g=c/s(_e);g>=10&&Uo(),Xe&&(g>=50?Xe.show():g>=20?setTimeout(()=>Xe.show(),200):g>=10&&setTimeout(()=>Xe.show(),400))}}function nr(){s(ht)<ga.length-1&&Se(ht)}function ir(){s(ht)>0&&Se(ht,-1)}function Me(c){x(Ae,!0),x(gt,ve(c)),x(ie,!1),vs()}function Rt(){x(Ae,!1),x(gt,0),Ue=!1,Ie!==null&&(clearTimeout(Ie),Ie=null)}function vs(){if(!s(Ae)||s(gt)<=0){Rt();return}console.log(`Autoplay: Starting spin ${s(gt)} rounds left`),ya(),Se(gt,-1)}function lr(){confirm("Reset all statistics?")&&(x(qe,0),x(Qe,0),x(vt,0),x(ns,0),x(Lt,0),x(cs,0),x(Tt,0),x(ds,0))}var wa=ji();Cr(c=>{var f=Li();u(it(f)),Q(c,f)});var _a=it(wa);{var cr=c=>{var f=Pi(),k=u(_(f),2),g=u(_(k));A(k);var w=u(k,2);{var $=F=>{var j=Ti(),N=u(_(j));A(j),oe(()=>D(N,` ${s(Ke)??""}`)),Q(F,j)};ce(w,F=>{s(Ke)&&F($)})}var S=u(w,2),B=u(_(S));B.nodeValue=` ${Te??""}`,A(S);var G=u(S,2),V=u(_(G));V.nodeValue=` ${xe??""}`,A(G);var H=u(G,2),X=u(_(H));A(H);var E=u(H,2);{var P=F=>{var j=Ii(),N=_(j),z=_(N);A(N);var We=u(N,2);Vt(We,17,()=>we,Ht,(st,le)=>{var ae=Ri(),Rr=_(ae,!0);A(ae),oe(()=>D(Rr,s(le))),Q(st,ae)}),A(j),oe(()=>D(z,`Log (${we.length??""})`)),Q(F,j)};ce(E,F=>{we.length>0&&F(P)})}A(f),oe(()=>{D(g,` ${s(ft)??""}`),D(X,` ${Oe.a??""}`)}),Q(c,f)};ce(_a,c=>{(s(ft)!=="Assets loaded successfully!"||s(Ke))&&c(cr)})}var Aa=u(_a,2);{var dr=c=>{var f=Ci(),k=u(_(f),2),g=_(k);A(k);var w=u(k,2);Vt(w,17,()=>s(Je),Ht,(G,V)=>{var H=Oi(),X=_(H);A(H),oe(E=>D(X,`${s(V).count??""} × ${ba[s(V).symbol]??""} = ${E??""} pistettä`),[()=>s(V).payout.toFixed(2)]),Q(G,H)});var $=u(w,2);{var S=G=>{var V=Bi(),H=_(V),X=_(H);A(H),A(V),oe(()=>D(X,`✨ ${s(Je)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),Q(G,V)};ce($,G=>{s(Je).length>0&&s(Je)[0].multiplier>1&&G(S)})}var B=u($,2);A(f),oe(G=>D(g,`${G??""} pistettä`),[()=>s(ke).toFixed(2)]),C("click",B,()=>{x(Fe,!1),hs(),console.log("Win popup closed, ready for next spin")}),Q(c,f)};ce(Aa,c=>{s(ke)>0&&s(Fe)&&c(dr)})}var ka=u(Aa,2);{var pr=c=>{var f=Fi(),k=u(_(f),8);A(f),oe(g=>y(f,"style",`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.95);
    color: white;
    padding: ${30*s(i)}px;
    border-radius: ${15*s(i)}px;
    font-family: Arial, sans-serif;
    z-index: 3000;
    border: ${3*s(i)}px solid #ffd700;
    max-width: ${600*s(i)}px;
    max-height: ${g??""}px;
    overflow-y: auto;
    font-size: ${s(i)??""}em;
  `),[()=>Math.min(n*s(i)*.8,80*window.innerHeight/100)]),C("click",k,()=>{x(Ze,!1)}),Q(c,f)};ce(ka,c=>{s(Ze)&&c(pr)})}var $a=u(ka,2);{var ur=c=>{var f=Mi(),k=_(f),g=u(_(k),4),w=_(g,!0);A(g);var $=u(g,2);A(k),A(f),oe(S=>D(w,S),[()=>s(us).toFixed(2)]),C("click",$,()=>{x(ps,!1),x(J,!1),x(Ge,0),x(us,0),Zt()}),C("mouseenter",$,S=>{S.currentTarget.style.transform="scale(1.05)",S.currentTarget.style.boxShadow="0 6px 20px rgba(255, 215, 0, 0.6)"}),C("mouseleave",$,S=>{S.currentTarget.style.transform="scale(1)",S.currentTarget.style.boxShadow="0 4px 15px rgba(255, 215, 0, 0.4)"}),Q(c,f)};ce($a,c=>{s(ps)&&c(ur)})}var Sa=u($a,2),ms=_(Sa),yt=_(ms);y(yt,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${r}px;
        height: ${n}px;
      `);var xs=_(yt),bs=u(xs,2),Ea=_(bs);{var fr=c=>{var f=Wi(),k=_(f),g=u(k,2),w=u(g,2),$=u(w,2),S=u($,2),B=u(S,2),G=u(B,2),V=u(G,2),H=u(V,2),X=u(H,2);A(f),oe(()=>{y(f,"style",`
    position: absolute;
    bottom: ${(m+20)*s(i)}px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.95);
    padding: ${20*s(i)}px;
    border-radius: ${15*s(i)}px;
    border: ${3*s(i)}px solid #0088ff;
    box-shadow: 0 ${8*s(i)}px ${30*s(i)}px rgba(0, 136, 255, 0.6);
    z-index: 2000;
    min-width: ${250*s(i)}px;
  `),y(k,"style",`color: white; font-weight: bold; margin-bottom: ${15*s(i)}px; text-align: center; font-size: ${18*s(i)}px;`),y(g,"style",`
        width: 100%;
        padding: ${12*s(i)}px;
        margin-bottom: ${8*s(i)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*s(i)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*s(i)}px;
        box-shadow: 0 ${4*s(i)}px ${10*s(i)}px rgba(68, 170, 68, 0.4);
      `),y(w,"style",`
        width: 100%;
        padding: ${12*s(i)}px;
        margin-bottom: ${8*s(i)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*s(i)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*s(i)}px;
        box-shadow: 0 ${4*s(i)}px ${10*s(i)}px rgba(68, 170, 68, 0.4);
      `),y($,"style",`
        width: 100%;
        padding: ${12*s(i)}px;
        margin-bottom: ${8*s(i)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*s(i)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*s(i)}px;
        box-shadow: 0 ${4*s(i)}px ${10*s(i)}px rgba(68, 170, 68, 0.4);
      `),y(S,"style",`
        width: 100%;
        padding: ${12*s(i)}px;
        margin-bottom: ${8*s(i)}px;
        background: linear-gradient(135deg, #4488ff 0%, #66aaff 100%);
        color: white;
        border: none;
        border-radius: ${8*s(i)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*s(i)}px;
        box-shadow: 0 ${4*s(i)}px ${10*s(i)}px rgba(68, 136, 255, 0.4);
      `),y(B,"style",`
        width: 100%;
        padding: ${12*s(i)}px;
        margin-bottom: ${8*s(i)}px;
        background: linear-gradient(135deg, #4488ff 0%, #66aaff 100%);
        color: white;
        border: none;
        border-radius: ${8*s(i)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*s(i)}px;
        box-shadow: 0 ${4*s(i)}px ${10*s(i)}px rgba(68, 136, 255, 0.4);
      `),y(G,"style",`
        width: 100%;
        padding: ${12*s(i)}px;
        margin-bottom: ${8*s(i)}px;
        background: linear-gradient(135deg, #ff8844 0%, #ffaa66 100%);
        color: white;
        border: none;
        border-radius: ${8*s(i)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*s(i)}px;
        box-shadow: 0 ${4*s(i)}px ${10*s(i)}px rgba(255, 136, 68, 0.4);
      `),y(V,"style",`
        width: 100%;
        padding: ${12*s(i)}px;
        margin-bottom: ${8*s(i)}px;
        background: linear-gradient(135deg, #ff8844 0%, #ffaa66 100%);
        color: white;
        border: none;
        border-radius: ${8*s(i)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*s(i)}px;
        box-shadow: 0 ${4*s(i)}px ${10*s(i)}px rgba(255, 136, 68, 0.4);
      `),y(H,"style",`
        width: 100%;
        padding: ${12*s(i)}px;
        margin-bottom: ${15*s(i)}px;
        background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%);
        color: white;
        border: none;
        border-radius: ${8*s(i)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*s(i)}px;
        box-shadow: 0 ${4*s(i)}px ${10*s(i)}px rgba(255, 68, 68, 0.4);
      `),y(X,"style",`
        width: 100%;
        padding: ${10*s(i)}px;
        background: rgba(255, 255, 255, 0.1);
        color: #aaa;
        border: ${1*s(i)}px solid #555;
        border-radius: ${8*s(i)}px;
        cursor: pointer;
        font-size: ${14*s(i)}px;
      `)}),C("click",g,()=>{Me(10),x(ie,!1)}),C("click",w,()=>{Me(25),x(ie,!1)}),C("click",$,()=>{Me(50),x(ie,!1)}),C("click",S,()=>{Me(100),x(ie,!1)}),C("click",B,()=>{Me(200),x(ie,!1)}),C("click",G,()=>{Me(500),x(ie,!1)}),C("click",V,()=>{Me(1e3),x(ie,!1)}),C("click",H,()=>{Me(5e3),x(ie,!1)}),C("click",X,()=>{x(ie,!1)}),Q(c,f)};ce(Ea,c=>{s(ie)&&c(fr)})}var ys=u(Ea,2);y(ys,"src",`${Y??""}/Control_leftend.png`);var It=u(ys,2),Pt=_(It),La=_(Pt),ws=u(La,2),_s=_(ws),Ot=u(_s,2),hr=_(Ot,!0);A(Ot);var Ta=u(Ot,2);A(ws),A(Pt);var As=u(Pt,2);y(As,"src",`${Y??""}/Control_divider.png`);var Bt=u(As,2),Ra=_(Bt),ks=u(Ra,2),gr=_(ks,!0);A(ks),A(Bt);var $s=u(Bt,2);y($s,"src",`${Y??""}/Control_divider.png`);var Ss=u($s,2),Es=_(Ss),Ia=_(Es);A(Es),A(Ss);var Ls=u(Ss,2);y(Ls,"src",`${Y??""}/Control_divider.png`);var Ct=u(Ls,2),Ft=_(Ct),Pa=u(Ft,2);A(Ct);var Ts=u(Ct,2);y(Ts,"src",`${Y??""}/Control_divider.png`);var Mt=u(Ts,2),Wt=_(Mt),Oa=u(Wt,2);A(Mt);var jt=u(Mt,2),Ba=_(jt),Rs=u(Ba,2),Is=_(Rs),vr=_(Is);A(Is);var Ca=u(Is,2),mr=_(Ca);A(Ca),A(Rs),A(jt);var Ps=u(jt,2);y(Ps,"src",`${Y??""}/Control_divider.png`);var Fa=u(Ps,2);A(It);var Ma=u(It,2);y(Ma,"src",`${Y??""}/Control_rightend.png`),A(bs),A(yt),Za(yt,c=>gs=c,()=>gs);var zt=u(yt,2);zt.textContent=`🛠️ DEBUG v${a}`;var Wa=u(zt,2);const xr=ze(()=>s(ke)/s(_e)>=50?"jackpot":s(ke)/s(_e)>=20?"medium":"small");Za(Ei(Wa,{get winLevel(){return s(xr)},get winAmount(){return s(ke)},get vinylStartScale(){return ts.vinylStartScale},get vinylEndScale(){return ts.vinylEndScale},get sparkleScale(){return ts.sparkleScale}}),c=>Xe=c,()=>Xe);var Nt=u(Wa,2),ja=u(_(Nt),2);ja.textContent=`v${a}`;var Os=u(ja,2),za=u(_(Os),2),br=_(za,!0);A(za),A(Os);var Bs=u(Os,2),Na=u(_(Bs),2),yr=_(Na,!0);A(Na),A(Bs);var Cs=u(Bs,2),Da=u(_(Cs),2),wr=_(Da,!0);A(Da),A(Cs);var Fs=u(Cs,2),Ms=u(_(Fs),2),_r=_(Ms);A(Ms),A(Fs);var Ws=u(Fs,2),js=u(_(Ws),2),Ar=_(js);A(js),A(Ws);var zs=u(Ws,2),Ua=u(_(zs),2),kr=_(Ua,!0);A(Ua),A(zs);var Ns=u(zs,2),Ga=u(_(Ns),2),$r=_(Ga,!0);A(Ga),A(Ns);var Ds=u(Ns,2),Ha=u(_(Ds),2),Sr=_(Ha);A(Ha),A(Ds);var Va=u(Ds,2),Ya=u(Va,2),tt=_(Ya),Er=_(tt);A(tt);var Dt=u(tt,2),wt=u(Dt,2),Lr=_(wt);A(wt);var Us=u(wt,2);A(Ya),A(Nt);var _t=u(Nt,2),Tr=_(_t,!0);A(_t),A(ms),A(Sa),oe((c,f,k,g,w,$,S,B)=>{y(ms,"style",`
    position: relative;
    width: ${r*s(i)}px;
    height: ${n*s(i)}px;
  `),y(xs,"style",`
          position: absolute;
          top: ${130*s(i)}px;
          right: ${20*s(i)}px;
          padding: ${10*s(i)}px ${15*s(i)}px;
          background-color: rgba(255, 215, 0, 0.3);
          border: ${2*s(i)}px solid rgba(255, 215, 0, 0.7);
          border-radius: ${8*s(i)}px;
          cursor: pointer;
          font-weight: bold;
          font-size: ${16*s(i)}px;
          color: white;
          text-shadow: 0 0 ${5*s(i)}px rgba(0,0,0,0.8);
          z-index: 1000;
          min-width: ${180*s(i)}px;
        `),y(bs,"style",`
        position: absolute;
        left: ${((Jt?Jt.x:L)+T)*s(i)}px;
        top: ${(b+Z)*s(i)}px;
        width: ${s(Qt)*s(i)}px;
        height: ${m*s(i)}px;
        display: flex;
        align-items: center;
        z-index: 1000;
      `),y(ys,"style",`height: ${m*s(i)}px; flex-shrink: 0;`),y(It,"style",`
    flex-grow: 1;
    height: ${m*s(i)}px;
    background-image: url('${Y??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 ${20*s(i)}px;
  `),y(Pt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*s(i)}px;`),y(La,"style",`color: #00ff00; font-size: ${12*s(i)}px; font-weight: bold;`),y(ws,"style",`display: flex; gap: ${5*s(i)}px; align-items: center;`),y(_s,"style",`
            width: ${40*s(i)}px;
            height: ${40*s(i)}px;
            background-image: url('${Y??""}/Control_lowerbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(Ot,"style",`
          color: #fff;
          font-size: ${18*s(i)}px;
          font-weight: bold;
          min-width: ${80*s(i)}px;
          text-align: center;
          font-family: 'Courier New', monospace;
        `),D(hr,c),y(Ta,"style",`
            width: ${40*s(i)}px;
            height: ${40*s(i)}px;
            background-image: url('${Y??""}/Control_upperbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(As,"style",`height: ${m*.8*s(i)}px; flex-shrink: 0;`),y(Bt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*s(i)}px;`),y(Ra,"style",`color: #00ff00; font-size: ${12*s(i)}px; font-weight: bold;`),y(ks,"style",`
        color: #fff;
        font-size: ${20*s(i)}px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      `),D(gr,f),y($s,"style",`height: ${m*.8*s(i)}px; flex-shrink: 0;`),sa(Es,1,`play-button-wrapper ${(s(es)?"glare-animate":"")??""}`,"svelte-o2kwxd"),y(Ia,"style",`
            width: ${130*s(i)}px;
            height: ${130*s(i)}px;
            background-image: url('${Y??""}/Control_playbutton.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
            opacity: 1;
            position: relative;
            z-index: 10;
            border-radius: 50%;
          `),y(Ls,"style",`height: ${m*.8*s(i)}px; flex-shrink: 0;`),y(Ct,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*s(i)}px;`),y(Ft,"style",`
          width: ${50*s(i)}px;
          height: ${50*s(i)}px;
          background-image: url('${Y??""}/${(s(Ae)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),y(Ft,"title",s(Ae)?"Stop Autoplay":"Autoplay"),y(Pa,"src",`${Y??""}/${(s(Ae)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),y(Pa,"style",`width: ${50*s(i)}px; height: auto;`),y(Ts,"style",`height: ${m*.8*s(i)}px; flex-shrink: 0;`),y(Mt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*s(i)}px;`),y(Wt,"style",`
          width: ${50*s(i)}px;
          height: ${50*s(i)}px;
          background-image: url('${Y??""}/Control_fastplay_select.png');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),y(Wt,"title",`Spin Speed: ${(s(he)==="slow"?"Slow":s(he)==="medium"?"Medium":"Fast")??""}`),y(Oa,"src",`${Y??""}/${(s(he)==="slow"?"Control_bar_deselect.png":s(he)==="medium"?"Control_half_bar_select.png":"Control_bar_select.png")??""}`),y(Oa,"style",`width: ${50*s(i)}px; height: auto;`),y(jt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*s(i)}px;`),y(Ba,"style",`color: #00ff00; font-size: ${12*s(i)}px; font-weight: bold;`),y(Rs,"style",`font-size: ${20*s(i)}px;`),D(vr,`WIN ${k??""}`),D(mr,`WIN ${k??""}`),y(Ps,"style",`height: ${m*.8*s(i)}px; flex-shrink: 0;`),y(Fa,"style",`
        width: ${50*s(i)}px;
        height: ${50*s(i)}px;
        background-image: url('${Y??""}/Control_menubar.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),y(Ma,"style",`height: ${m*s(i)}px; flex-shrink: 0;`),y(zt,"style",`
    position: absolute;
    top: ${190*s(i)}px;
    right: ${20*s(i)}px;
    padding: ${10*s(i)}px ${15*s(i)}px;
    background-color: rgba(0, 255, 0, 0.3);
    border: ${2*s(i)}px solid rgba(0, 255, 0, 0.7);
    border-radius: ${8*s(i)}px;
    cursor: pointer;
    font-weight: bold;
    font-size: ${16*s(i)}px;
    color: white;
    text-shadow: 0 0 ${5*s(i)}px rgba(0,0,0,0.8);
    z-index: 10000;
    min-width: ${180*s(i)}px;
    pointer-events: auto;
  `),y(Nt,"style",`
  position: absolute;
  top: 20px;
  left: 20px;
  display: ${(s(os)?"block":"none")??""};
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
`),D(br,g),D(yr,w),D(wr,$),y(Ms,"style",`color: ${S??""};`),D(_r,`${s(is)??""}%`),y(js,"style",`color: ${B??""};`),D(Ar,`${s(ls)??""}%`),D(kr,s(Lt)),D($r,s(cs)),D(Sr,`${s(Ho)??""}%`),tt.disabled=s(ge).length===0,y(tt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(s(ge).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(s(ge).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(s(ge).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(s(ge).length>0?"1":"0.5")??""};
      `),D(Er,`Download Win Log (${s(ge).length??""})`),Dt.disabled=s(ge).length===0,y(Dt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(s(ge).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(s(ge).length>0?"1":"0.5")??""};
      `),y(wt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(s(ye)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(s(ye)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),D(Lr,`🎵 Music: ${(s(ye)?"ON":"OFF")??""}`),Us.disabled=s(J),y(Us,"style",`
        width: 100%;
        padding: 5px;
        background: ${(s(J)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(s(J)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(s(J)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(s(J)?"0.5":"1")??""};
      `),y(_t,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(s(be)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(s(be)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),y(_t,"title",s(be)?"Mykistä äänet":"Laita äänet päälle"),D(Tr,s(be)?"🔊":"🔇")},[()=>s(_e).toFixed(2),()=>s(Be).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>s(as).toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0}),()=>s(qe).toLocaleString(),()=>s(Qe).toLocaleString(),()=>s(vt).toLocaleString(),()=>parseFloat(s(is))>=95?"#00ff00":parseFloat(s(is))>=85?"#ffff00":"#ff6666",()=>parseFloat(s(ls))>=30?"#00ff00":parseFloat(s(ls))>=20?"#ffff00":"#ff6666"]),C("click",xs,()=>{x(Ze,!s(Ze))}),C("click",_s,ir),C("click",Ta,nr),C("click",Ia,()=>{s(Ae)&&Rt(),ya()}),C("click",Ft,()=>{s(Ae)?Rt():x(ie,!s(ie))}),C("click",Wt,()=>{s(he)==="slow"?x(he,"medium"):s(he)==="medium"?x(he,"fast"):x(he,"slow")}),C("click",Fa,()=>{x(Ze,!s(Ze))}),C("click",zt,()=>{x(os,!s(os))}),C("click",Va,lr),C("click",tt,Yo),C("click",Dt,Xo),C("click",wt,No),C("click",Us,Ko),C("click",_t,()=>{x(be,!s(be))}),Q(t,wa),ia()}var Ni=te('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),Di=te('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function Ui(t,e){na(e,!1);let a=at(e,"isAuthenticated",12,!1),o=Zs(""),r=Zs(!1);const n="slot2024";function l(){s(o)===n?(a(!0),sessionStorage.setItem("gameAuthenticated","true")):(x(r,!0),x(o,""),setTimeout(()=>x(r,!1),3e3))}xo(()=>{a(sessionStorage.getItem("gameAuthenticated")==="true")}),Mr();var d=fo(),h=it(d);{var v=p=>{var b=Di(),m=_(b),L=u(_(m),4),T=_(L);yn(T),cn(2),A(L);var Z=u(L,2);{var K=R=>{var U=Ni();Q(R,U)};ce(Z,R=>{s(r)&&R(K)})}A(m),A(b),_n(T,()=>s(o),R=>x(o,R)),C("submit",L,An(l)),Q(p,b)};ce(h,p=>{a()||p(v)})}Q(t,d),ia()}var Gi=te("<!> <!>",1);function sl(t){let e=Zs(!1);var a=Gi(),o=it(a);Ui(o,{get isAuthenticated(){return s(e)},set isAuthenticated(l){x(e,l)},$$legacy:!0});var r=u(o,2);{var n=l=>{zi(l,{})};ce(r,l=>{s(e)&&l(n)})}Q(t,a)}export{$o as A,_o as C,In as R,Sn as S,So as V,sl as _,$n as u};
