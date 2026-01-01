const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Dxo04E8T.js","./BaqJxISf.js","./CgWia7Op.js","./EjnPGRTu.js","./Bkkaav7K.js","./C2GHuDhf.js","./B-YR1XwW.js","./CbksKRtu.js"])))=>i.map(i=>d[i]);
var xr=Object.defineProperty;var _r=(t,e,s)=>e in t?xr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var he=(t,e,s)=>_r(t,typeof e!="symbol"?e+"":e,s);import{g as wr,l as Ar,t as se,i as $r,j as kr,a as q,k as M,e as Er}from"./XZc5ccWP.js";import{i as Sr}from"./DIdOt9--.js";import{y as be,j as jr,a8 as Lr,F as a,Q as Tr,aa as Rr,ab as Ma,h as Wa,e as Cs,k as ft,l as Pr,ac as ao,w as oo,ad as Ir,q as ro,a7 as Or,U as Br,a2 as za,ar as Fs,z as Na,as as Cr,at as Fr,au as Mr,o as Wr,av as zr,aw as Nr,ax as Dr,ay as Ur,b as Gr,az as Hr,aA as Vr,a6 as Yr,aB as Xr,aC as Kr,D as Qr,L as qr,p as io,ah as R,ag as no,T as y,aD as ge,I as Bt,s as f,f as Mt,c as w,r as A,t as me,a as lo,aE as Jr,aF as Hs}from"./EjnPGRTu.js";import{_ as Da,p as ce,i as ve}from"./CgWia7Op.js";import{s as z}from"./2z5c-rnE.js";import{b as Ua,p as Zr}from"./CHseoIM1.js";import{b as _e}from"./C74uVxKj.js";import{e as Pe,E as I,a as ei,C as qs,Q as Vs,V as Ys,N as Ms,D as oe,H as ti,p as Ce,a0 as Qe,a1 as Fe,a2 as si,w as Re,a3 as gt,a4 as co,a5 as qe,a6 as $e,a7 as Wt,a8 as po,a9 as ai,aa as Ws,y as zs}from"./BaqJxISf.js";import{A as oi,B as Ga,G as ri,a as Ha}from"./Bkkaav7K.js";function Va(t,e){return e}function ii(t,e,s,o){for(var r=[],i=e.length,n=0;n<i;n++)Mr(e[n].e,r,!0);var d=i>0&&r.length===0&&s!==null;if(d){var g=s.parentNode;Wr(g),g.append(s),o.clear(),Te(t,e[0].prev,e[i-1].next)}zr(r,()=>{for(var m=0;m<i;m++){var p=e[m];d||(o.delete(p.k),Te(t,p.prev,p.next)),Nr(p.e,!d)}})}function Ya(t,e,s,o,r,i=null){var n=t,d={flags:e,items:new Map,first:null};be&&jr();var g=null,m=!1,p=Tr(()=>{var v=s();return Or(v)?v:v==null?[]:ro(v)});Lr(()=>{var v=a(p),h=v.length;if(m&&h===0)return;m=h===0;let j=!1;if(be){var L=n.data===Rr;L!==(h===0)&&(n=Ma(),Wa(n),Cs(!1),j=!0)}if(be){for(var J=null,H,T=0;T<h;T++){if(ft.nodeType===8&&ft.data===Pr){n=ft,j=!0,Cs(!1);break}var N=v[T],ke=o(N,T);H=uo(ft,d,J,null,N,ke,T,r,e,s),d.items.set(ke,H),J=H}h>0&&Wa(Ma())}be||ni(v,d,n,r,e,o,s),i!==null&&(h===0?g?ao(g):g=oo(()=>i(n)):g!==null&&Ir(g,()=>{g=null})),j&&Cs(!0),a(p)}),be&&(n=ft)}function ni(t,e,s,o,r,i,n){var d=t.length,g=e.items,m=e.first,p=m,v,h=null,j=[],L=[],J,H,T,N;for(N=0;N<d;N+=1){if(J=t[N],H=i(J,N),T=g.get(H),T===void 0){var ke=p?p.e.nodes_start:s;h=uo(ke,e,h,h===null?e.first:h.next,J,H,N,o,r,n),g.set(H,h),j=[],L=[],p=h.next;continue}if(li(T,J,N),(T.e.f&Fs)!==0&&ao(T.e),T!==p){if(v!==void 0&&v.has(T)){if(j.length<L.length){var re=L[0],te;h=re.prev;var zt=j[0],Ze=j[j.length-1];for(te=0;te<j.length;te+=1)Xa(j[te],re,s);for(te=0;te<L.length;te+=1)v.delete(L[te]);Te(e,zt.prev,Ze.next),Te(e,h,zt),Te(e,Ze,re),p=re,h=Ze,N-=1,j=[],L=[]}else v.delete(T),Xa(T,p,s),Te(e,T.prev,T.next),Te(e,T,h===null?e.first:h.next),Te(e,h,T),h=T;continue}for(j=[],L=[];p!==null&&p.k!==H;)(p.e.f&Fs)===0&&(v??(v=new Set)).add(p),L.push(p),p=p.next;if(p===null)continue;T=p}j.push(T),h=T,p=T.next}if(p!==null||v!==void 0){for(var Ie=v===void 0?[]:ro(v);p!==null;)(p.e.f&Fs)===0&&Ie.push(p),p=p.next;var mt=Ie.length;if(mt>0){var V=null;ii(e,Ie,V,g)}}Na.first=e.first&&e.first.e,Na.last=h&&h.e}function li(t,e,s,o){Fr(t.v,e),t.i=s}function uo(t,e,s,o,r,i,n,d,g,m){var p=(g&Dr)!==0,v=(g&Ur)===0,h=p?v?Br(r):za(r):r,j=(g&Cr)===0?n:za(n),L={i:j,v:h,k:i,a:null,e:null,prev:s,next:o};try{return L.e=oo(()=>d(t,h,j,m),be),L.e.prev=s&&s.e,L.e.next=o&&o.e,s===null?e.first=L:(s.next=L,s.e.next=L.e),o!==null&&(o.prev=L,o.e.prev=L.e),L}finally{}}function Xa(t,e,s){for(var o=t.next?t.next.e.nodes_start:s,r=e?e.e.nodes_start:s,i=t.e.nodes_start;i!==o;){var n=Gr(i);r.before(i),i=n}}function Te(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function ci(t,e,s){var o=t==null?"":""+t;return o=o?o+" "+e:e,o===""?null:o}function di(t,e,s,o,r,i){var n=t.__className;if(be||n!==s){var d=ci(s,o);(!be||d!==t.getAttribute("class"))&&(d==null?t.removeAttribute("class"):t.className=d),t.__className=s}return i}function pi(t){if(be){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var o=t.value;x(t,"value",null),t.value=o}if(t.hasAttribute("checked")){var r=t.checked;x(t,"checked",null),t.checked=r}}};t.__on_r=s,Hr(s),wr()}}function x(t,e,s,o){var r=t.__attributes??(t.__attributes={});be&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Vr]=s),s==null?t.removeAttribute(e):typeof s!="string"&&ui(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var Ka=new Map;function ui(t){var e=Ka.get(t.nodeName);if(e)return e;Ka.set(t.nodeName,e=[]);for(var s,o=t,r=Element.prototype;r!==o;){s=Xr(o);for(var i in s)s[i].set&&e.push(i);o=Yr(o)}return e}function fi(t,e,s=e){var o=Kr();Ar(t,"input",r=>{var i=r?t.defaultValue:t.value;if(i=Ns(t)?Ds(i):i,s(i),o&&i!==(i=e())){var n=t.selectionStart,d=t.selectionEnd;t.value=i??"",d!==null&&(t.selectionStart=n,t.selectionEnd=Math.min(d,t.value.length))}}),(be&&t.defaultValue!==t.value||Qr(e)==null&&t.value)&&s(Ns(t)?Ds(t.value):t.value),qr(()=>{var r=e();Ns(t)&&r===Ds(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function Ns(t){var e=t.type;return e==="number"||e==="range"}function Ds(t){return t===""?null:+t}function hi(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const Xs=[];Pe.handleByNamedList(I.Environment,Xs);async function gi(t){if(!t)for(let e=0;e<Xs.length;e++){const s=Xs[e];if(s.value.test()){await s.value.load();return}}}let ht;function mi(){if(typeof ht=="boolean")return ht;try{ht=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{ht=!1}return ht}var fo=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(fo||{});class vi{constructor(e){this.items=[],this._name=e}emit(e,s,o,r,i,n,d,g){const{name:m,items:p}=this;for(let v=0,h=p.length;v<h;v++)p[v][m](e,s,o,r,i,n,d,g);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const bi=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],ho=class go extends ei{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...bi,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await gi(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const o in this._systemsHash)e={...this._systemsHash[o].constructor.defaultOptions,...e};e={...go.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let o=0;o<this.runners.init.items.length;o++)await this.runners.init.items[o].init(e);this._initOptions=e}render(e,s){let o=e;if(o instanceof qs&&(o={container:o},s&&(Vs(Ys,"passing a second argument is deprecated, please use render options instead"),o.target=s.renderTexture)),o.target||(o.target=this.view.renderTarget),o.target===this.view.renderTarget&&(this._lastObjectRendered=o.container,o.clearColor??(o.clearColor=this.background.colorRgba),o.clear??(o.clear=this.background.clearBeforeRender)),o.clearColor){const r=Array.isArray(o.clearColor)&&o.clearColor.length===4;o.clearColor=r?o.clearColor:Ms.shared.setValue(o.clearColor).toArray()}o.transform||(o.container.updateLocalTransform(),o.transform=o.container.localTransform),o.container.enableRenderGroup(),this.runners.prerender.emit(o),this.runners.renderStart.emit(o),this.runners.render.emit(o),this.runners.renderEnd.emit(o),this.runners.postrender.emit(o)}resize(e,s,o){const r=this.view.resolution;this.view.resize(e,s,o),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),o!==void 0&&o!==r&&this.runners.resolutionChange.emit(o)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=fo.ALL);const{clear:o,clearColor:r,target:i}=e;Ms.shared.setValue(r??this.background.colorRgba),s.renderTarget.clear(i,o,Ms.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new vi(s)})}_addSystems(e){let s;for(s in e){const o=e[s];this._addSystem(o.value,o.name)}}_addSystem(e,s){const o=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=o,this._systemsHash[s]=o;for(const r in this.runners)this.runners[r].add(o);return this}_addPipes(e,s){const o=s.reduce((r,i)=>(r[i.name]=i.value,r),{});e.forEach(r=>{const i=r.value,n=r.name,d=o[n];this.renderPipes[n]=new i(this,d?new d:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!mi())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};ho.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let mo=ho,Ct;function yi(t){return Ct!==void 0||(Ct=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??mo.defaultOptions.failIfMajorPerformanceCaveat};try{if(!oe.get().getWebGLRenderingContext())return!1;let r=oe.get().createCanvas().getContext("webgl",e);const i=!!((s=r==null?void 0:r.getContextAttributes())!=null&&s.stencil);if(r){const n=r.getExtension("WEBGL_lose_context");n&&n.loseContext()}return r=null,i}catch{return!1}})()),Ct}let Ft;async function xi(t={}){return Ft!==void 0||(Ft=await(async()=>{const e=oe.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),Ft}const Qa=["webgl","webgpu","canvas"];async function _i(t){let e=[];t.preference?(e.push(t.preference),Qa.forEach(i=>{i!==t.preference&&e.push(i)})):e=Qa.slice();let s,o={};for(let i=0;i<e.length;i++){const n=e[i];if(n==="webgpu"&&await xi()){const{WebGPURenderer:d}=await Da(async()=>{const{WebGPURenderer:g}=await import("./Dxo04E8T.js");return{WebGPURenderer:g}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=d,o={...t,...t.webgpu};break}else if(n==="webgl"&&yi(t.failIfMajorPerformanceCaveat??mo.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:d}=await Da(async()=>{const{WebGLRenderer:g}=await import("./CbksKRtu.js");return{WebGLRenderer:g}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=d,o={...t,...t.webgl};break}else if(n==="canvas")throw o={...t},new Error("CanvasRenderer is not yet implemented")}if(delete o.webgpu,delete o.webgl,!s)throw new Error("No available renderer for the current environment");const r=new s;return await r.init(o),r}const vo="8.8.1";class bo{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,vo)}static destroy(){}}bo.extension=I.Application;class wi{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,vo)}destroy(){this._renderer=null}}wi.extension={type:[I.WebGLSystem,I.WebGPUSystem],name:"initHook",priority:-10};const yo=class Ks{constructor(...e){this.stage=new qs,e[0]!==void 0&&Vs(Ys,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await _i(e),Ks._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Vs(Ys,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const o=Ks._plugins.slice(0);o.reverse(),o.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};yo._plugins=[];let xo=yo;Pe.handleByList(I.Application,xo._plugins);Pe.add(bo);class _o extends oi{constructor(e,s){super();const{textures:o,data:r}=e;Object.keys(r.pages).forEach(i=>{const n=r.pages[parseInt(i,10)],d=o[n.id];this.pages.push({texture:d})}),Object.keys(r.chars).forEach(i=>{const n=r.chars[i],{frame:d,source:g}=o[n.page],m=new ti(n.x+d.x,n.y+d.y,n.width,n.height),p=new Ce({source:g,frame:m});this.chars[i]={id:i.codePointAt(0),xOffset:n.xOffset,yOffset:n.yOffset,xAdvance:n.xAdvance,kerning:n.kerning??{},texture:p}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){Ga.install(e)}static uninstall(e){Ga.uninstall(e)}}const Us={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const v in e){const h=e[v].match(/^[a-z]+/gm)[0],j=e[v].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),L={};for(const J in j){const H=j[J].split("="),T=H[0],N=H[1].replace(/"/gm,""),ke=parseFloat(N),re=isNaN(ke)?N:ke;L[T]=re}s[h].push(L)}const o={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=s.info,[i]=s.common,[n]=s.distanceField??[];n&&(o.distanceField={range:parseInt(n.distanceRange,10),type:n.fieldType}),o.fontSize=parseInt(r.size,10),o.fontFamily=r.face,o.lineHeight=parseInt(i.lineHeight,10);const d=s.page;for(let v=0;v<d.length;v++)o.pages.push({id:parseInt(d[v].id,10)||0,file:d[v].file});const g={};o.baseLineOffset=o.lineHeight-parseInt(i.base,10);const m=s.char;for(let v=0;v<m.length;v++){const h=m[v],j=parseInt(h.id,10);let L=h.letter??h.char??String.fromCharCode(j);L==="space"&&(L=" "),g[j]=L,o.chars[L]={id:j,page:parseInt(h.page,10)||0,x:parseInt(h.x,10),y:parseInt(h.y,10),width:parseInt(h.width,10),height:parseInt(h.height,10),xOffset:parseInt(h.xoffset,10),yOffset:parseInt(h.yoffset,10),xAdvance:parseInt(h.xadvance,10),kerning:{}}}const p=s.kerning||[];for(let v=0;v<p.length;v++){const h=parseInt(p[v].first,10),j=parseInt(p[v].second,10),L=parseInt(p[v].amount,10);o.chars[g[j]].kerning[g[h]]=L}return o}},qa={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],o=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const i=t.getElementsByTagName("page"),n=t.getElementsByTagName("char"),d=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(o.getAttribute("lineHeight"),10);for(let m=0;m<i.length;m++)e.pages.push({id:parseInt(i[m].getAttribute("id"),10)||0,file:i[m].getAttribute("file")});const g={};e.baseLineOffset=e.lineHeight-parseInt(o.getAttribute("base"),10);for(let m=0;m<n.length;m++){const p=n[m],v=parseInt(p.getAttribute("id"),10);let h=p.getAttribute("letter")??p.getAttribute("char")??String.fromCharCode(v);h==="space"&&(h=" "),g[v]=h,e.chars[h]={id:v,page:parseInt(p.getAttribute("page"),10)||0,x:parseInt(p.getAttribute("x"),10),y:parseInt(p.getAttribute("y"),10),width:parseInt(p.getAttribute("width"),10),height:parseInt(p.getAttribute("height"),10),xOffset:parseInt(p.getAttribute("xoffset"),10),yOffset:parseInt(p.getAttribute("yoffset"),10),xAdvance:parseInt(p.getAttribute("xadvance"),10),kerning:{}}}for(let m=0;m<d.length;m++){const p=parseInt(d[m].getAttribute("first"),10),v=parseInt(d[m].getAttribute("second"),10),h=parseInt(d[m].getAttribute("amount"),10);e.chars[g[v]].kerning[g[p]]=h}return e}},Ja={test(t){return typeof t=="string"&&t.includes("<font>")?qa.test(oe.get().parseXML(t)):!1},parse(t){return qa.parse(oe.get().parseXML(t))}},Ai=[".xml",".fnt"],$i={extension:{type:I.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof _o,getCacheableAssets(t,e){const s={};return t.forEach(o=>{s[o]=e,s[`${o}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},ki={extension:{type:I.LoadParser,priority:Qe.Normal},name:"loadBitmapFont",test(t){return Ai.includes(Fe.extname(t).toLowerCase())},async testParse(t){return Us.test(t)||Ja.test(t)},async parse(t,e,s){const o=Us.test(t)?Us.parse(t):Ja.parse(t),{src:r}=e,{pages:i}=o,n=[],d=o.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let v=0;v<i.length;++v){const h=i[v].file;let j=Fe.join(Fe.dirname(r),h);j=si(j,r),n.push({src:j,data:d})}const g=await s.load(n),m=n.map(v=>g[v.src]);return new _o({data:o,textures:m},r)},async load(t,e){return await(await oe.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(o=>s.unload(o.texture.source._sourceOrigin))),t.destroy()}};class Ei{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let o=0;o<s;o++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Si={extension:{type:I.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Ce),getCacheableAssets:(t,e)=>{const s={};return t.forEach(o=>{e.forEach((r,i)=>{s[o+(i===0?"":i+1)]=r})}),s}};async function wo(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const ji={extension:{type:I.DetectionParser,priority:1},test:async()=>wo("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},Za=["png","jpg","jpeg"],Li={extension:{type:I.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...Za],remove:async t=>t.filter(e=>!Za.includes(e))},Ti="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Js(t){return Ti?!1:document.createElement("video").canPlayType(t)!==""}const Ri={extension:{type:I.DetectionParser,priority:0},test:async()=>Js("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},Pi={extension:{type:I.DetectionParser,priority:0},test:async()=>Js("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},Ii={extension:{type:I.DetectionParser,priority:0},test:async()=>Js("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},Oi={extension:{type:I.DetectionParser,priority:0},test:async()=>wo("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class Bi{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,o)=>(this._parsersValidated=!1,e[s]=o,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const o={promise:null,parser:null};return o.promise=(async()=>{var n,d;let r=null,i=null;if(s.loadParser&&(i=this._parserHash[s.loadParser],i||Re(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!i){for(let g=0;g<this.parsers.length;g++){const m=this.parsers[g];if(m.load&&((n=m.test)!=null&&n.call(m,e,s,this))){i=m;break}}if(!i)return Re(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await i.load(e,s,this),o.parser=i;for(let g=0;g<this.parsers.length;g++){const m=this.parsers[g];m.parse&&m.parse&&await((d=m.testParse)==null?void 0:d.call(m,r,s,this))&&(r=await m.parse(r,s,this)||r,o.parser=m)}return r})(),o}async load(e,s){this._parsersValidated||this._validateParsers();let o=0;const r={},i=co(e),n=gt(e,m=>({alias:[m],src:m,data:{}})),d=n.length,g=n.map(async m=>{const p=Fe.toAbsolute(m.src);if(!r[m.src])try{this.promiseCache[p]||(this.promiseCache[p]=this._getLoadPromiseAndParser(p,m)),r[m.src]=await this.promiseCache[p].promise,s&&s(++o/d)}catch(v){throw delete this.promiseCache[p],delete r[m.src],new Error(`[Loader.load] Failed to load ${p}.
${v}`)}});return await Promise.all(g),i?r[n[0].src]:r}async unload(e){const o=gt(e,r=>({alias:[r],src:r})).map(async r=>{var d,g;const i=Fe.toAbsolute(r.src),n=this.promiseCache[i];if(n){const m=await n.promise;delete this.promiseCache[i],await((g=(d=n.parser)==null?void 0:d.unload)==null?void 0:g.call(d,m,r,this))}});await Promise.all(o)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&Re(`[Assets] loadParser name conflict "${s.name}"`):Re("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function Je(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const Ci=".json",Fi="application/json",Mi={extension:{type:I.LoadParser,priority:Qe.Low},name:"loadJson",test(t){return Je(t,Fi)||qe(t,Ci)},async load(t){return await(await oe.get().fetch(t)).json()}},Wi=".txt",zi="text/plain",Ni={name:"loadTxt",extension:{type:I.LoadParser,priority:Qe.Low,name:"loadTxt"},test(t){return Je(t,zi)||qe(t,Wi)},async load(t){return await(await oe.get().fetch(t)).text()}},Di=["normal","bold","100","200","300","400","500","600","700","800","900"],Ui=[".ttf",".otf",".woff",".woff2"],Gi=["font/ttf","font/otf","font/woff","font/woff2"],Hi=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Vi(t){const e=Fe.extname(t),r=Fe.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(d=>d.charAt(0).toUpperCase()+d.slice(1));let i=r.length>0;for(const d of r)if(!d.match(Hi)){i=!1;break}let n=r.join(" ");return i||(n=`"${n.replace(/[\\"]/g,"\\$&")}"`),n}const Yi=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function Xi(t){return Yi.test(t)?t:encodeURI(t)}const Ki={extension:{type:I.LoadParser,priority:Qe.Low},name:"loadWebFont",test(t){return Je(t,Gi)||qe(t,Ui)},async load(t,e){var o,r,i;const s=oe.get().getFontFaceSet();if(s){const n=[],d=((o=e.data)==null?void 0:o.family)??Vi(t),g=((i=(r=e.data)==null?void 0:r.weights)==null?void 0:i.filter(p=>Di.includes(p)))??["normal"],m=e.data??{};for(let p=0;p<g.length;p++){const v=g[p],h=new FontFace(d,`url(${Xi(t)})`,{...m,weight:v});await h.load(),s.add(h),n.push(h)}return $e.set(`${d}-and-url`,{url:t,fontFaces:n}),n.length===1?n[0]:n}return Re("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{$e.remove(`${e.family}-and-url`),oe.get().getFontFaceSet().delete(e)})}};function Zs(t,e=1){var o;const s=(o=Wt.RETINA_PREFIX)==null?void 0:o.exec(t);return s?parseFloat(s[1]):e}function ea(t,e,s){t.label=s,t._sourceOrigin=s;const o=new Ce({source:t,label:s}),r=()=>{delete e.promiseCache[s],$e.has(s)&&$e.remove(s)};return o.source.once("destroy",()=>{e.promiseCache[s]&&(Re("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),o.once("destroy",()=>{t.destroyed||(Re("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),o}const Qi=".svg",qi="image/svg+xml",Ji={extension:{type:I.LoadParser,priority:Qe.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return Je(t,qi)||qe(t,Qi)},async load(t,e,s){var o;return((o=e.data)==null?void 0:o.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?en(t):Zi(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function Zi(t,e,s,o){var H,T,N;const i=await(await oe.get().fetch(t)).blob(),n=URL.createObjectURL(i),d=new Image;d.src=n,d.crossOrigin=o,await d.decode(),URL.revokeObjectURL(n);const g=document.createElement("canvas"),m=g.getContext("2d"),p=((H=e.data)==null?void 0:H.resolution)||Zs(t),v=((T=e.data)==null?void 0:T.width)??d.width,h=((N=e.data)==null?void 0:N.height)??d.height;g.width=v*p,g.height=h*p,m.drawImage(d,0,0,v*p,h*p);const{parseAsGraphicsContext:j,...L}=e.data??{},J=new po({resource:g,alphaMode:"premultiply-alpha-on-upload",resolution:p,...L});return ea(J,s,t)}async function en(t){const s=await(await oe.get().fetch(t)).text(),o=new ri;return o.svg(s),o}const tn=`(function () {
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
`;let Xe=null,Qs=class{constructor(){Xe||(Xe=URL.createObjectURL(new Blob([tn],{type:"application/javascript"}))),this.worker=new Worker(Xe)}};Qs.revokeObjectURL=function(){Xe&&(URL.revokeObjectURL(Xe),Xe=null)};const sn=`(function () {
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
`;let Ke=null;class Ao{constructor(){Ke||(Ke=URL.createObjectURL(new Blob([sn],{type:"application/javascript"}))),this.worker=new Worker(Ke)}}Ao.revokeObjectURL=function(){Ke&&(URL.revokeObjectURL(Ke),Ke=null)};let eo=0,Gs;class an{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new Qs;s.addEventListener("message",o=>{s.terminate(),Qs.revokeObjectURL(),e(o.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var o;return this._run("loadImageBitmap",[e,(o=s==null?void 0:s.data)==null?void 0:o.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Gs===void 0&&(Gs=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Gs&&(this._createdWorkers++,e=new Ao().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const o=new Promise((r,i)=>{this._queue.push({id:e,arguments:s,resolve:r,reject:i})});return this._next(),o}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),o=s.id;this._resolveHash[eo]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:eo++,id:o})}}const to=new an,on=[".jpeg",".jpg",".png",".webp",".avif"],rn=["image/jpeg","image/png","image/webp","image/avif"];async function nn(t,e){var r;const s=await oe.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const o=await s.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(o,{premultiplyAlpha:"none"}):createImageBitmap(o)}const $o={name:"loadTextures",extension:{type:I.LoadParser,priority:Qe.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return Je(t,rn)||qe(t,on)},async load(t,e,s){var i;let o=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await to.isImageBitmapSupported()?o=await to.loadImageBitmap(t,e):o=await nn(t,e):o=await new Promise((n,d)=>{o=new Image,o.crossOrigin=this.config.crossOrigin,o.src=t,o.complete?n(o):(o.onload=()=>{n(o)},o.onerror=d)});const r=new po({resource:o,alphaMode:"premultiply-alpha-on-upload",resolution:((i=e.data)==null?void 0:i.resolution)||Zs(t),...e.data});return ea(r,s,t)},unload(t){t.destroy(!0)}},ko=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],ln=ko.map(t=>`video/${t.substring(1)}`);function cn(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=pn(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function dn(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",o),t.addEventListener("error",r),t.load();function o(){i(),e()}function r(n){i(),s(n)}function i(){t.removeEventListener("canplaythrough",o),t.removeEventListener("error",r)}})}function pn(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const un={name:"loadVideo",extension:{type:I.LoadParser,name:"loadVideo"},test(t){const e=Je(t,ln),s=qe(t,ko);return e||s},async load(t,e,s){var g,m;const o={...Ws.defaultOptions,resolution:((g=e.data)==null?void 0:g.resolution)||Zs(t),alphaMode:((m=e.data)==null?void 0:m.alphaMode)||await ai(),...e.data},r=document.createElement("video"),i={preload:o.autoLoad!==!1?"auto":void 0,"webkit-playsinline":o.playsinline!==!1?"":void 0,playsinline:o.playsinline!==!1?"":void 0,muted:o.muted===!0?"":void 0,loop:o.loop===!0?"":void 0,autoplay:o.autoPlay!==!1?"":void 0};Object.keys(i).forEach(p=>{const v=i[p];v!==void 0&&r.setAttribute(p,v)}),o.muted===!0&&(r.muted=!0),cn(r,t,o.crossorigin);const n=document.createElement("source");let d;if(t.startsWith("data:"))d=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const p=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();d=Ws.MIME_TYPES[p]||`video/${p}`}return n.src=t,d&&(n.type=d),new Promise(p=>{const v=async()=>{const h=new Ws({...o,resource:r});r.removeEventListener("canplay",v),e.data.preload&&await dn(r),p(ea(h,s,t))};r.addEventListener("canplay",v),r.appendChild(n)})},unload(t){t.destroy(!0)}},Eo={extension:{type:I.ResolveParser,name:"resolveTexture"},test:$o.test,parse:t=>{var e;return{resolution:parseFloat(((e=Wt.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},fn={extension:{type:I.ResolveParser,priority:-2,name:"resolveJson"},test:t=>Wt.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:Eo.parse};class hn{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Wt,this.loader=new Bi,this.cache=$e,this._backgroundLoader=new Ei(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var i,n;if(this._initialized){Re("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let d=e.manifest;typeof d=="string"&&(d=await this.load(d)),this.resolver.addManifest(d)}const s=((i=e.texturePreference)==null?void 0:i.resolution)??1,o=typeof s=="number"?[s]:s,r=await this._detectFormats({preferredFormats:(n=e.texturePreference)==null?void 0:n.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:o}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const o=co(e),r=gt(e).map(d=>{if(typeof d!="string"){const g=this.resolver.getAlias(d);return g.some(m=>!this.resolver.hasKey(m))&&this.add(d),Array.isArray(g)?g[0]:g}return this.resolver.hasKey(d)||this.add({alias:d,src:d}),d}),i=this.resolver.resolve(r),n=await this._mapLoadToResolve(i,s);return o?n[r[0]]:n}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let o=!1;typeof e=="string"&&(o=!0,e=[e]);const r=this.resolver.resolveBundle(e),i={},n=Object.keys(r);let d=0,g=0;const m=()=>{s==null||s(++d/g)},p=n.map(v=>{const h=r[v];return g+=Object.keys(h).length,this._mapLoadToResolve(h,m).then(j=>{i[v]=j})});return await Promise.all(p),o?i[e[0]]:i}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(o=>{this._backgroundLoader.add(Object.values(o))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return $e.get(e);const s={};for(let o=0;o<e.length;o++)s[o]=$e.get(e[o]);return s}async _mapLoadToResolve(e,s){const o=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(o,s);this._backgroundLoader.active=!0;const i={};return o.forEach(n=>{const d=r[n.src],g=[n.src];n.alias&&g.push(...n.alias),g.forEach(m=>{i[m]=d}),$e.set(g,d)}),i}async unload(e){this._initialized||await this.init();const s=gt(e).map(r=>typeof r!="string"?r.src:r),o=this.resolver.resolve(s);await this._unloadFromResolved(o)}async unloadBundle(e){this._initialized||await this.init(),e=gt(e);const s=this.resolver.resolveBundle(e),o=Object.keys(s).map(r=>this._unloadFromResolved(s[r]));await Promise.all(o)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(o=>{$e.remove(o.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const o of e.detections)e.skipDetections||await o.test()?s=await o.add(s):e.skipDetections||(s=await o.remove(s));return s=s.filter((o,r)=>s.indexOf(o)===r),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(o=>o in e).forEach(o=>{s.config[o]=e[o]})})}}const Ye=new hn;Pe.handleByList(I.LoadParser,Ye.loader.parsers).handleByList(I.ResolveParser,Ye.resolver.parsers).handleByList(I.CacheParser,Ye.cache.parsers).handleByList(I.DetectionParser,Ye.detections);Pe.add(Si,Li,ji,Oi,Ri,Pi,Ii,Mi,Ni,Ki,Ji,$o,un,ki,$i,Eo,fn);const so={loader:I.LoadParser,resolver:I.ResolveParser,cache:I.CacheParser,detection:I.DetectionParser};Pe.handle(I.Asset,t=>{const e=t.ref;Object.entries(so).filter(([s])=>!!e[s]).forEach(([s,o])=>Pe.add(Object.assign(e[s],{extension:e[s].extension??o})))},t=>{const e=t.ref;Object.keys(so).filter(s=>!!e[s]).forEach(s=>Pe.remove(e[s]))});var gn=kr('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-tijp0o"><\/script><!---->',1),mn=se('<p style="color: red;" class="svelte-tijp0o"><strong class="svelte-tijp0o">Error:</strong> </p>'),vn=se('<div class="svelte-tijp0o"> </div>'),bn=se('<details class="svelte-tijp0o"><summary class="svelte-tijp0o"> </summary> <!></details>'),yn=se(`<div style="
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
  " class="svelte-tijp0o"><h3 class="svelte-tijp0o">🎰 Oma-peli Debug</h3> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Status:</strong> </p> <!> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Base:</strong> </p> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">BG URL:</strong> </p> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Sample:</strong> </p> <!></div>`),xn=se('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-tijp0o"> </div>'),_n=se('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-tijp0o"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-tijp0o"> </span></div>'),wn=se(`<div style="
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
  " class="svelte-tijp0o"><h2 style="margin: 0 0 10px 0; font-size: 2em;" class="svelte-tijp0o">🎉 VOITTO! 🎉</h2> <div style="font-size: 1.5em; font-weight: bold; margin: 10px 0;" class="svelte-tijp0o"> </div> <!> <!> <button style="
        margin-top: 15px;
        padding: 8px 16px;
        background: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
      " class="svelte-tijp0o">Jatka pelaamista</button></div>`),An=se(`<div class="svelte-tijp0o"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-tijp0o">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-tijp0o">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-tijp0o"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-tijp0o"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-tijp0o">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-tijp0o">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-tijp0o">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-tijp0o">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-tijp0o">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-tijp0o">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-tijp0o"> <span style="color: #ffd700;" class="svelte-tijp0o">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-tijp0o">Sulje</button></div>`),$n=se(`<div style="
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
  " class="svelte-tijp0o"><div style="
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: white;
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      border: 3px solid #ffd700;
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
      max-width: 500px;
      font-family: Arial, sans-serif;
    " class="svelte-tijp0o"><h1 style="
        margin: 0 0 20px 0;
        font-size: 2.5em;
        color: #ffd700;
        text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
      " class="svelte-tijp0o">🎰 VAPAAPELIT PÄÄTTYIVÄT! 🎰</h1> <div style="
        font-size: 1.2em;
        margin: 20px 0;
        color: #aaa;
      " class="svelte-tijp0o">Voitit yhteensä:</div> <div style="
        font-size: 3em;
        font-weight: bold;
        color: #00ff00;
        text-shadow: 0 0 15px rgba(0, 255, 0, 0.8);
        margin: 20px 0;
      " class="svelte-tijp0o"> </div> <button style="
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
        " class="svelte-tijp0o">JATKA PERUSPELIIN</button></div></div>`),kn=se('<div class="svelte-tijp0o"><div class="svelte-tijp0o">🔄 Select Rounds</div> <button class="svelte-tijp0o">10 Rounds</button> <button class="svelte-tijp0o">100 Rounds</button> <button class="svelte-tijp0o">1,000 Rounds</button> <button class="svelte-tijp0o">10,000 Rounds</button> <button class="svelte-tijp0o">100,000 Rounds</button> <button class="svelte-tijp0o">Cancel</button></div>'),En=se(`<!> <!> <!> <!> <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
" class="svelte-tijp0o"><div class="svelte-tijp0o"><div class="svelte-tijp0o"><button class="svelte-tijp0o">💰 PAYTABLE</button> <div class="control-panel-mobile svelte-tijp0o"><!>  <img alt="Left End" class="svelte-tijp0o"> <div class="svelte-tijp0o"><div class="svelte-tijp0o"><div class="svelte-tijp0o">BET</div> <div class="svelte-tijp0o"><button title="Decrease Bet" class="svelte-tijp0o"></button> <div class="svelte-tijp0o"> </div> <button title="Increase Bet" class="svelte-tijp0o"></button></div></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><div class="svelte-tijp0o">BALANCE</div> <div class="svelte-tijp0o"> </div></div> <img alt="Divider" class="svelte-tijp0o"> <div style="position: relative; display: flex; align-items: center; justify-content: center; flex-grow: 0.5;" class="svelte-tijp0o"><div><button title="SPIN" class="svelte-tijp0o"></button></div></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><button class="svelte-tijp0o"></button> <img alt="Status bar" class="svelte-tijp0o"></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><button class="svelte-tijp0o"></button> <img alt="Speed bar" class="svelte-tijp0o"></div> <div class="svelte-tijp0o"><div class="svelte-tijp0o">WIN</div> <div class="svelte-tijp0o"> </div></div> <img alt="Divider" class="svelte-tijp0o"> <button title="Menu" class="svelte-tijp0o"></button></div> <img alt="Right End" class="svelte-tijp0o"></div></div>  <button class="svelte-tijp0o"></button> <button <VinylWinAnimation="" class="svelte-tijp0o"></button>  <div class="debug-panel svelte-tijp0o"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-tijp0o">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-tijp0o"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Rounds:</span> <span style="color: #fff;" class="svelte-tijp0o"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Wagered:</span> <span style="color: #ff6666;" class="svelte-tijp0o"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Won:</span> <span style="color: #66ff66;" class="svelte-tijp0o"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 10px; 
    padding-top: 10px; 
    border-top: 1px solid #555;
    font-weight: bold;
    font-size: 18px;
  " class="svelte-tijp0o"><span style="color: #ffd700;" class="svelte-tijp0o">RTP:</span> <span class="svelte-tijp0o"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
  " class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Hit Freq:</span> <span class="svelte-tijp0o"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-size: 14px;
  " class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Free Spins Triggered:</span> <span style="color: #66ccff;" class="svelte-tijp0o"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 4px;
    font-size: 14px;
  " class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Free Spins Played:</span> <span style="color: #66ccff;" class="svelte-tijp0o"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #555;
    font-size: 14px;
  " class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Empty Slots:</span> <span style="color: #ff9900;" class="svelte-tijp0o"> </span></div> <button style="
      margin-top: 10px;
      width: 100%;
      padding: 5px;
      background: rgba(255, 100, 100, 0.3);
      color: #fff;
      border: 1px solid #ff6666;
      border-radius: 5px;
      cursor: pointer;
      font-size: 11px;
    " class="svelte-tijp0o">Reset Stats</button> <div style="
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  " class="svelte-tijp0o"><button class="svelte-tijp0o"> </button> <button class="svelte-tijp0o">Clear Win Log</button> <button class="svelte-tijp0o"> </button> <button class="svelte-tijp0o">🎰 Test Free Spins</button></div></div> <button class="debug-panel svelte-tijp0o"> </button></div></div>`,1);function Sn(t,e){io(e,!0);const s="1.3.1",o=13,r=1445,i=1e3,n=1.75,d=-30,g=-10,m=160,p=0,v=750,h=80,j=250,L=0,J=50,H=.5,T=40,N=0,re=Math.round(100*n),te=Math.round(re*(700/760)),Ze=te+10,Ie=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],mt=typeof window<"u"&&window.location.hostname.includes("github.io"),V=mt?"/web-sdk/oma-peli/symbols":`${_e}/symbols`,Y=mt?"/web-sdk/oma-peli/controls":`${_e}/controls`,Nt={a:`${V}/Blue_hotrod.jpg`,b:`${V}/Blue_jacket.jpg`,c:`${V}/Blue_rollers.jpg`,d:`${V}/Blue_speakers.jpg`,e:`${V}/Premium_blonde.jpg`,f:`${V}/Premium_brunette.jpg`,g:`${V}/Premium_rocker.jpg`,h:`${V}/New_Wild.jpg`,i:`${V}/Red_burger.jpg`,j:`${V}/Red_fries.jpg`,k:`${V}/Red_milkshake.jpg`,l:`${V}/Scatter.jpg`,emptyslot:`${V}/Emptyslot.jpg`},Dt=`${V}/bg_base.jpg`,ta=`${V}/ReelFrames.png`,sa=`${V}/RockABillyReels_logo.png`,So={spin:`${_e}/sounds/spin.mp3`,stop:`${_e}/sounds/stop.mp3`,win:`${_e}/sounds/win.mp3`};let we=R(!0),Ut={},D=null,ie=null,Gt=null,Ht=null,de=R(!0),jo=R(!1),Vt=R(945),Yt=null;const Lo={fast:3,medium:7,slow:18};let ne=R("medium"),aa=R(Math.floor(Math.random()*20)+1);const vt={background:()=>`${_e}/music/rockabilly reels loop ${a(aa)}.mp3`,freeSpins:`${_e}/music/rockabilly-loop_long.mp3`,drumHit:`${_e}/music/drum-hit.mp3`,winTheme:`${_e}/music/win-stinger.mp3`};function oa(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(oa,500);return}const c=window.Howl;try{D=new c({src:[vt.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+a(aa)+")"),y(jo,!0)},onloaderror:(u,k)=>{console.warn("⚠️ Background music not found:",k)}}),ie=new c({src:[vt.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(u,k)=>console.warn("⚠️ Free spins music not found:",k)}),Gt=new c({src:[vt.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Ht=new c({src:[vt.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(u){console.error("Failed to initialize music system:",u)}}function ra(){const c=a(G)?ie:D;c&&a(de)&&!c.playing()&&(c.play(),console.log("🎵 "+(a(G)?"Free spins":"Background")+" music started"))}function To(){D&&D.playing()&&(D.fade(D.volume(),0,500),setTimeout(()=>D.stop(),500)),ie&&ie.playing()&&(ie.fade(ie.volume(),0,500),setTimeout(()=>ie.stop(),500))}function Xt(){D&&D.playing()&&(D.fade(D.volume(),0,500),setTimeout(()=>D.stop(),500)),ie&&ie.playing()&&(ie.fade(ie.volume(),0,500),setTimeout(()=>ie.stop(),500)),setTimeout(()=>{a(de)&&ra()},600)}function Ro(){if(D&&D.playing()){const c=D.volume();D.fade(c,0,1e3),setTimeout(()=>{D.stop(),D.volume(.3)},1e3)}}let Kt=R(!1);function Po(){y(Kt,!1),setTimeout(()=>{y(Kt,!0)},10)}let Me=null;function Io(){y(de,!a(de)),a(de)?ra():To()}function Oo(){Gt&&a(de)&&a(we)&&Gt.play()}function Bo(){Ht&&a(de)&&a(we)&&Ht.play()}let bt=null,Qt=null,et=null,tt=null,st=R("Initializing..."),We=R(""),pe=[],Ee=R(1e3);const ia=[.4,.8,1,1.6,2,3,5,8,10,15,20,25,30,40,50,60,80,100];let at=R(5),ye=Bt(()=>ia[a(at)]),na=R(0),ue=R(!1),ot=R(0),xe=R(!1),qt=R(!1),Co=R(0),Oe=!1,Ae=null,Jt=!1,ze=R(0),Ne=R(0),rt=R(0),Zt=R(0),es=Bt(()=>a(Ne)>0?(a(rt)/a(Ne)*100).toFixed(2):"0.00"),ts=Bt(()=>a(ze)>0?(a(Zt)/a(ze)*100).toFixed(2):"0.00"),G=R(!1),Se=R(0),Be=R(0),yt=R(0),ss=R(0),xt=R(0),as=R(0),Fo=Bt(()=>a(xt)>0?(a(as)/a(xt)*100).toFixed(2):"0.00"),le=R(ce([]));function Mo(c,u,k){const b=new Date().toLocaleString("fi-FI");let _=`
${"=".repeat(60)}
`;_+=`ROUND #${c} - ${b}
`,_+=`Mode: ${a(G)?"FREE SPINS":"BASE GAME"}
`,_+=`${"=".repeat(60)}
`,u.forEach(($,E)=>{_+=`
Win ${E+1}:
`,_+=`  Symbol: ${$.symbol} (${pa[$.symbol]})
`,_+=`  Count: ${$.count} symbols
`,_+=`  Multiplier: ${$.multiplier}x
`,_+=`  Payout: ${$.payout.toFixed(2)}
`,_+=`  Positions: [${$.positions.join(", ")}]
`}),_+=`
${"─".repeat(60)}
`,_+=`TOTAL WIN: ${k.toFixed(2)}
`,_+=`${"=".repeat(60)}
`,a(le).push(_)}function Wo(){const c=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${a(le).join(`
`)}`,u=new Blob([c],{type:"text/plain"}),k=URL.createObjectURL(u),b=document.createElement("a");b.href=k,b.download=`win-log-${Date.now()}.txt`,b.click(),URL.revokeObjectURL(k)}function zo(){y(le,ce([]))}function No(){a(G)||(y(G,!0),y(Se,10),y(Be,0),ge(yt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),Xt())}const Do={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},Uo={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function la(c){if(c===6)return Math.random()<.55?"h":"emptyslot";const u=a(G)?Uo:Do,k=Math.random();let b=0;const _=Ie.filter(E=>E!=="h"),$=_.reduce((E,O)=>E+u[O],0);for(const E of _)if(b+=u[E]/$,k<b)return E;return"f"}function ca(){const c=[];for(let u=0;u<o;u++){const k=la(u);c.push(k),ge(xt),k==="emptyslot"&&ge(as)}return c}function da(c){return c<3?{col:0,row:c}:c<6?{col:1,row:c-3}:c===6?{col:2,row:0}:c<10?{col:3,row:c-7}:{col:4,row:c-10}}function it(c,u){return c===0?u:c===1?3+u:c===2?6:c===3?7+u:c===4?10+u:-1}function Go(){if(a(G)){const c=Math.random();return c<.7?3:c<.92?5:10}else{const c=Math.random();return c<.7?1:c<.92?2:3}}const Ho={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function Vo(){var Q;const c=[],u=[];for(let S=0;S<o;S++)nt[S]==="l"&&u.push(S);if(u.length>=5){const S=u.length;y(Se,a(Se)+S),a(G)?console.log(`🎰 FREE SPINS RETRIGGERED! +${S} FREE SPINS! Total: ${a(Se)}`):(y(G,!0),y(Be,0),ge(yt),console.log(`🎰 FREE SPINS TRIGGERED! ${u.length} scatters = ${S} FREE SPINS!`),Xt()),c.push({symbol:"l",count:u.length,payout:0,positions:u,multiplier:1})}const k=[];for(let S=0;S<3;S++)for(let P=0;P<3;P++)for(let B=0;B<1;B++)for(let C=0;C<3;C++)for(let W=0;W<3;W++){const F=[it(0,S),it(1,P),it(2,B),it(3,C),it(4,W)];k.push(F)}console.log(`Generated ${k.length} possible paths (should be 81)`);const b=[];for(const S of k){const P=S.map(F=>nt[F]);if(P[0]==="emptyslot"||P[0]==="l")continue;let B=null;for(let F=0;F<P.length;F++)if(P[F]!=="h"&&P[F]!=="emptyslot"&&P[F]!=="l"){B=P[F];break}if(!B)continue;let C=0;const W=new Set;for(let F=0;F<S.length;F++){const Le=S[F],{col:Ve}=da(Le),ae=P[F];(ae===B||ae==="h")&&W.add(Ve)}for(let F=0;F<5&&W.has(F);F++)C++;if(C>=3){const Le=S[0]%3;b.push({symbol:B,length:C,path:S.slice(0,C),startRow:Le})}}const _=[],$=new Map;for(const S of b){const P=`${S.symbol}-${S.path.join(",")}`;$.has(P)||$.set(P,[]),$.get(P).push(S)}for(const[S,P]of $.entries()){const B=Math.max(...P.map(W=>W.length)),C=P.find(W=>W.length===B);C&&_.push(C)}const E=[],O=new Map;for(const S of _)O.has(S.symbol)||O.set(S.symbol,[]),O.get(S.symbol).push(S);const U=[];for(const[S,P]of O.entries()){const B=Math.max(...P.map(W=>W.length)),C=P.filter(W=>W.length===B);U.push(...C)}const X=new Map;for(const S of U){const P=`${S.symbol}-${S.length}`;X.has(P)||X.set(P,[]),X.get(P).push(S)}const K=U.length>0?Go():1;for(const[S,P]of X.entries()){const B=P[0],C=(Q=Ho[B.symbol])==null?void 0:Q[B.length];if(C!==void 0&&C>0){const W=new Map;for(const ae of P)for(let ee=0;ee<ae.length;ee++)W.has(ee)||W.set(ee,new Set),W.get(ee).add(ae.path[ee]);let F=1;for(let ae=0;ae<B.length;ae++){const ee=W.get(ae);F*=ee?ee.size:1}const Le=C*a(ye)*F*K;console.log(`  ${B.length}x${B.symbol}: ${F} ways × ${C}x × ${a(ye)} bet × ${K} mult = ${Le}`);const Ve=new Set;for(const ae of P)ae.path.forEach(ee=>Ve.add(ee));E.push({symbol:B.symbol,count:B.length,payout:Le,positions:Array.from(Ve),multiplier:K})}}return c.push(...E),c}let fe=R(0),De=R(ce([])),je=R(!1),Ue=R(!1),os=R(!1),rs=R(0);const pa={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function is(c){if(!a(we)||!Ut[c])return;const u=Ut[c];u.currentTime=0,u.play().catch(k=>{console.warn("Äänen toisto epäonnistui:",c,k)})}function Yo(c){lt.forEach(u=>Z.stage.removeChild(u)),lt=[],c.forEach(u=>{u.positions.forEach(k=>{const b=Ge[k],_=new Ha().rect(0,0,re,te).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});_.x=b.container.x,_.y=b.container.y,Z.stage.addChild(_),lt.push(_);let $=0,E=1;const O=.05;Z.ticker.add(()=>{$+=E*O,$>=.4&&(E=-1),$<=0&&(E=1),_.alpha=.5+$})})})}function ns(){lt.forEach(c=>Z.stage.removeChild(c)),lt=[]}let nt=ca(),ls,Z,Ge=[],lt=[];class Xo{constructor(u,k){he(this,"index");he(this,"container");he(this,"offset",0);he(this,"speed",0);he(this,"targetSpeed",30);he(this,"state","idle");he(this,"stopDelay",0);he(this,"bounceOffset",0);he(this,"bounceSpeed",0);he(this,"bounceFrames",0);this.index=u,this.container=k}start(u){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=u}startSynchronized(u){const k=Lo[a(ne)],b=60+u*k;this.start(b)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const u=a(ne)==="slow"?.88:a(ne)==="medium"?.92:.95;this.speed*=u,this.speed<2.5&&(this.state="bouncing",this.speed=0,this.offset=0,this.bounceOffset=0,this.bounceSpeed=8,is("stop"),Oo())}this.state==="bouncing"&&(this.bounceSpeed*=.85,this.bounceOffset+=this.bounceSpeed,Math.abs(this.bounceSpeed)<.3&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=Ze&&(this.offset=0,nt[this.index]=la(this.index)))}}draw(){const u=this.container;u.removeChildren();const k=nt[this.index];if(!k||!bt||!bt[k])return;const b=bt[k];if(!b)return;const _=this.offset+this.bounceOffset,$=new zs(b);$.width=re,$.height=te,$.x=0,$.y=_,u.addChild($)}}let l=R(1);no(async()=>{Z=new xo,await Z.init({width:r,height:i,backgroundAlpha:0}),ls.appendChild(Z.canvas);const c=()=>{const b=window.innerWidth,_=window.innerHeight,$=b/r,E=_/i,O=Math.min($,E,1);y(l,ce(O)),Z.stage.scale.set(O),Z.renderer.resize(r,i)};c(),window.addEventListener("resize",c);const u={};try{y(st,"Loading background and UI images..."),pe.push(`Loading background: ${Dt}`),pe.push(`Loading reel frames: ${ta}`),pe.push(`Loading logo: ${sa}`),await Ye.load([{alias:"background",src:Dt},{alias:"reelframes",src:ta},{alias:"logo",src:sa}]),Qt=Ce.from("background"),et=Ce.from("reelframes"),tt=Ce.from("logo"),console.log("✅ Background texture created:",Qt.width,"x",Qt.height),console.log("✅ Reel frames texture created:",et.width,"x",et.height),console.log("✅ Logo texture created:",tt.width,"x",tt.height),pe.push("✅ All UI images loaded"),y(st,"Loading symbols...");const b=[];for(const _ of Ie)b.push({alias:_,src:Nt[_]});await Ye.load(b);for(const _ of Ie){const $=Nt[_];pe.push(`Loading symbol ${_}: ${$}`);try{const E=Ce.from(_);u[_]=E,console.log(`✅ Symbol ${_} loaded:`,E.width,"x",E.height),pe.push(`✅ Symbol ${_} loaded`)}catch(E){const O=`❌ Failed to load symbol ${_} from ${$}: ${E}`;throw pe.push(O),console.error(O),new Error(O)}}bt=u,y(st,"Assets loaded successfully!")}catch(b){y(We,`Asset loading failed: ${b}`),pe.push(a(We)),console.error(a(We));return}console.log("Ladataan ääniefektit...");for(const[b,_]of Object.entries(So)){const $=new Audio;$.src=_,$.preload="auto",$.volume=.7,$.load(),$.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${_} (käytetään hiljaista placeholderia)`)}),Ut[b]=$}[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(b=>({x:b.x+d,y:b.y+g})),Ge=[];for(let b=0;b<o;b++){const _=da(b),$=_.col,E=_.row,O=300+$*(re+20),U=250+E*(te+15),X=b===6?O+p:O,K=b===6?U+m:U,Q=new qs;Q.x=X+d,Q.y=K+g;const S=new Ha().rect(0,0,re,te).fill(16777215);S.x=Q.x,S.y=Q.y,Q.mask=S,Z.stage.addChild(S),Z.stage.addChild(Q),Ge.push(new Xo(b,Q))}if(et){const b=new zs(et);b.scale.set(1),b.x=250,b.y=200,Z.stage.addChild(b),Yt=b,y(Vt,ce(b.width)),console.log("Reel frames lisätty:",b.width.toFixed(0),"x",b.height.toFixed(0)),console.log("Control panel leveys päivitetty:",a(Vt).toFixed(0))}if(tt){const b=new zs(tt);b.scale.set(H),b.x=(Z.renderer.width-b.width)/2+T,b.y=N,Z.stage.addChild(b),console.log("Logo lisätty päällimmäiseen layeriin:",b.width.toFixed(0),"x",b.height.toFixed(0))}oa(),Z.ticker.add(Ko)});function Ko(){for(const c of Ge)c.update(),c.draw();if(!a(je)&&!Jt&&Ge.every(c=>c.state==="stopped")){Jt=!0,Ro();const c=Vo();console.log(`Checking wins, found ${c.length} wins`),c.length>0?(y(De,ce(c)),y(fe,ce(c.reduce((u,k)=>u+k.payout,0))),Mo(a(ze),c,a(fe)),Qo(a(fe)),y(je,!0),y(Co,ce(Date.now())),console.log(`🎉 VOITTO! ${a(fe)} pistettä! Uusi saldo: ${a(Ee)}`),console.log(`isShowingWin set to: ${a(je)}, totalWin: ${a(fe)}`),c.forEach(u=>{const k=u.multiplier?` (${u.multiplier}x multiplier)`:"";console.log(`${u.count}x ${u.symbol} = ${u.payout} pistettä${k}`)}),Yo(c),is("win"),a(ue)&&!Oe&&(Oe=!0,Ae=window.setTimeout(()=>{a(je)&&a(ue)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),y(je,!1),ns()),Ae=window.setTimeout(()=>{Oe=!1,cs()},200)},1500))):(console.log("No wins found this spin"),a(ue)&&!Oe&&(Oe=!0,Ae=window.setTimeout(()=>{Oe=!1,cs()},1e3))),a(G)&&a(Se)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${a(Be)}`),setTimeout(()=>{y(rs,ce(a(Be))),y(os,!0)},2e3))}}function ua(){if(!a(G)&&D&&a(de)&&!D.playing()&&(D.play(),console.log("🎵 Background music started on first spin")),Po(),a(G)&&a(Se)>0)ge(Se,-1),ge(ss),console.log(`🎰 FREE SPIN! Remaining: ${a(Se)}`);else if(!a(G)){if(a(Ee)<a(ye)){alert(`Not enough credits! Balance: ${a(Ee)}, Bet: ${a(ye)}`),_t();return}y(Ee,a(Ee)-a(ye)),ge(ze),y(Ne,a(Ne)+a(ye))}Ae!==null&&(clearTimeout(Ae),Ae=null),y(De,ce([])),y(fe,0),y(je,!1),Jt=!1,ns(),nt=ca(),Ge.forEach((c,u)=>{c.startSynchronized(u)}),is("spin")}function Qo(c){if(y(Ee,a(Ee)+c),y(rt,a(rt)+c),y(na,ce(c)),a(G)&&y(Be,a(Be)+c),c>0){ge(Zt);const u=c/a(ye);u>=10&&Bo(),Me&&(u>=50?Me.show():u>=20?setTimeout(()=>Me.show(),200):u>=10&&setTimeout(()=>Me.show(),400))}}function qo(){a(at)<ia.length-1&&ge(at)}function Jo(){a(at)>0&&ge(at,-1)}function ct(c){y(ue,!0),y(ot,ce(c)),y(xe,!1),cs()}function _t(){y(ue,!1),y(ot,0),Oe=!1,Ae!==null&&(clearTimeout(Ae),Ae=null)}function cs(){if(!a(ue)||a(ot)<=0){_t();return}console.log(`Autoplay: Starting spin ${a(ot)} rounds left`),ua(),ge(ot,-1)}function Zo(){confirm("Reset all statistics?")&&(y(ze,0),y(Ne,0),y(rt,0),y(Zt,0),y(yt,0),y(ss,0),y(xt,0),y(as,0))}var fa=En();$r(c=>{var u=gn();f(Mt(u)),q(c,u)});var ha=Mt(fa);{var er=c=>{var u=yn(),k=f(w(u),2),b=f(w(k));A(k);var _=f(k,2);{var $=B=>{var C=mn(),W=f(w(C));A(C),me(()=>z(W,` ${a(We)??""}`)),q(B,C)};ve(_,B=>{a(We)&&B($)})}var E=f(_,2),O=f(w(E));O.nodeValue=` ${_e??""}`,A(E);var U=f(E,2),X=f(w(U));X.nodeValue=` ${Dt??""}`,A(U);var K=f(U,2),Q=f(w(K));A(K);var S=f(K,2);{var P=B=>{var C=bn(),W=w(C),F=w(W);A(W);var Le=f(W,2);Ya(Le,17,()=>pe,Va,(Ve,ae)=>{var ee=vn(),yr=w(ee,!0);A(ee),me(()=>z(yr,a(ae))),q(Ve,ee)}),A(C),me(()=>z(F,`Log (${pe.length??""})`)),q(B,C)};ve(S,B=>{pe.length>0&&B(P)})}A(u),me(()=>{z(b,` ${a(st)??""}`),z(Q,` ${Nt.a??""}`)}),q(c,u)};ve(ha,c=>{(a(st)!=="Assets loaded successfully!"||a(We))&&c(er)})}var ga=f(ha,2);{var tr=c=>{var u=wn(),k=f(w(u),2),b=w(k);A(k);var _=f(k,2);Ya(_,17,()=>a(De),Va,(U,X)=>{var K=xn(),Q=w(K);A(K),me(S=>z(Q,`${a(X).count??""} × ${pa[a(X).symbol]??""} = ${S??""} pistettä`),[()=>a(X).payout.toFixed(2)]),q(U,K)});var $=f(_,2);{var E=U=>{var X=_n(),K=w(X),Q=w(K);A(K),A(X),me(()=>z(Q,`✨ ${a(De)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),q(U,X)};ve($,U=>{a(De).length>0&&a(De)[0].multiplier>1&&U(E)})}var O=f($,2);A(u),me(U=>z(b,`${U??""} pistettä`),[()=>a(fe).toFixed(2)]),M("click",O,()=>{y(je,!1),ns(),console.log("Win popup closed, ready for next spin")}),q(c,u)};ve(ga,c=>{a(fe)>0&&a(je)&&c(tr)})}var ma=f(ga,2);{var sr=c=>{var u=An(),k=f(w(u),8);A(u),me(b=>x(u,"style",`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.95);
    color: white;
    padding: ${30*a(l)}px;
    border-radius: ${15*a(l)}px;
    font-family: Arial, sans-serif;
    z-index: 3000;
    border: ${3*a(l)}px solid #ffd700;
    max-width: ${600*a(l)}px;
    max-height: ${b??""}px;
    overflow-y: auto;
    font-size: ${a(l)??""}em;
  `),[()=>Math.min(i*a(l)*.8,80*window.innerHeight/100)]),M("click",k,()=>{y(Ue,!1)}),q(c,u)};ve(ma,c=>{a(Ue)&&c(sr)})}var va=f(ma,2);{var ar=c=>{var u=$n(),k=w(u),b=f(w(k),4),_=w(b,!0);A(b);var $=f(b,2);A(k),A(u),me(E=>z(_,E),[()=>a(rs).toFixed(2)]),M("click",$,()=>{y(os,!1),y(G,!1),y(Be,0),y(rs,0),Xt()}),M("mouseenter",$,E=>{E.currentTarget.style.transform="scale(1.05)",E.currentTarget.style.boxShadow="0 6px 20px rgba(255, 215, 0, 0.6)"}),M("mouseleave",$,E=>{E.currentTarget.style.transform="scale(1)",E.currentTarget.style.boxShadow="0 4px 15px rgba(255, 215, 0, 0.4)"}),q(c,u)};ve(va,c=>{a(os)&&c(ar)})}var ba=f(va,2),ds=w(ba),dt=w(ds);x(dt,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${r}px;
        height: ${i}px;
      `);var ps=w(dt),us=f(ps,2),ya=w(us);{var or=c=>{var u=kn(),k=w(u),b=f(k,2),_=f(b,2),$=f(_,2),E=f($,2),O=f(E,2),U=f(O,2);A(u),me(()=>{x(u,"style",`
    position: absolute;
    bottom: ${(h+20)*a(l)}px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.95);
    padding: ${20*a(l)}px;
    border-radius: ${15*a(l)}px;
    border: ${3*a(l)}px solid #0088ff;
    box-shadow: 0 ${8*a(l)}px ${30*a(l)}px rgba(0, 136, 255, 0.6);
    z-index: 2000;
    min-width: ${250*a(l)}px;
  `),x(k,"style",`color: white; font-weight: bold; margin-bottom: ${15*a(l)}px; text-align: center; font-size: ${18*a(l)}px;`),x(b,"style",`
        width: 100%;
        padding: ${12*a(l)}px;
        margin-bottom: ${8*a(l)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*a(l)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*a(l)}px;
        box-shadow: 0 ${4*a(l)}px ${10*a(l)}px rgba(68, 170, 68, 0.4);
      `),x(_,"style",`
        width: 100%;
        padding: ${12*a(l)}px;
        margin-bottom: ${8*a(l)}px;
        background: linear-gradient(135deg, #4488ff 0%, #66aaff 100%);
        color: white;
        border: none;
        border-radius: ${8*a(l)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*a(l)}px;
        box-shadow: 0 ${4*a(l)}px ${10*a(l)}px rgba(68, 136, 255, 0.4);
      `),x($,"style",`
        width: 100%;
        padding: ${12*a(l)}px;
        margin-bottom: ${8*a(l)}px;
        background: linear-gradient(135deg, #ff8844 0%, #ffaa66 100%);
        color: white;
        border: none;
        border-radius: ${8*a(l)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*a(l)}px;
        box-shadow: 0 ${4*a(l)}px ${10*a(l)}px rgba(255, 136, 68, 0.4);
      `),x(E,"style",`
        width: 100%;
        padding: ${12*a(l)}px;
        margin-bottom: ${8*a(l)}px;
        background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%);
        color: white;
        border: none;
        border-radius: ${8*a(l)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*a(l)}px;
        box-shadow: 0 ${4*a(l)}px ${10*a(l)}px rgba(255, 68, 68, 0.4);
      `),x(O,"style",`
        width: 100%;
        padding: ${12*a(l)}px;
        margin-bottom: ${15*a(l)}px;
        background: linear-gradient(135deg, #aa00ff 0%, #cc44ff 100%);
        color: white;
        border: none;
        border-radius: ${8*a(l)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*a(l)}px;
        box-shadow: 0 ${4*a(l)}px ${10*a(l)}px rgba(170, 0, 255, 0.4);
      `),x(U,"style",`
        width: 100%;
        padding: ${10*a(l)}px;
        background: rgba(255, 255, 255, 0.1);
        color: #aaa;
        border: ${1*a(l)}px solid #555;
        border-radius: ${8*a(l)}px;
        cursor: pointer;
        font-size: ${14*a(l)}px;
      `)}),M("click",b,()=>{ct(10),y(xe,!1)}),M("click",_,()=>{ct(100),y(xe,!1)}),M("click",$,()=>{ct(1e3),y(xe,!1)}),M("click",E,()=>{ct(1e4),y(xe,!1)}),M("click",O,()=>{ct(1e5),y(xe,!1)}),M("click",U,()=>{y(xe,!1)}),q(c,u)};ve(ya,c=>{a(xe)&&c(or)})}var fs=f(ya,2);x(fs,"src",`${Y??""}/Control_leftend.png`);var wt=f(fs,2),At=w(wt),xa=w(At),hs=f(xa,2),gs=w(hs),$t=f(gs,2),rr=w($t,!0);A($t);var _a=f($t,2);A(hs),A(At);var ms=f(At,2);x(ms,"src",`${Y??""}/Control_divider.png`);var kt=f(ms,2),wa=w(kt),vs=f(wa,2),ir=w(vs,!0);A(vs),A(kt);var bs=f(kt,2);x(bs,"src",`${Y??""}/Control_divider.png`);var ys=f(bs,2),xs=w(ys),Aa=w(xs);A(xs),A(ys);var _s=f(ys,2);x(_s,"src",`${Y??""}/Control_divider.png`);var Et=f(_s,2),St=w(Et),$a=f(St,2);A(Et);var ws=f(Et,2);x(ws,"src",`${Y??""}/Control_divider.png`);var jt=f(ws,2),Lt=w(jt),ka=f(Lt,2);A(jt);var Tt=f(jt,2),Ea=w(Tt),As=f(Ea,2),nr=w(As,!0);A(As),A(Tt);var $s=f(Tt,2);x($s,"src",`${Y??""}/Control_divider.png`);var Sa=f($s,2);A(wt);var ja=f(wt,2);x(ja,"src",`${Y??""}/Control_rightend.png`),A(us),A(dt),Ua(dt,c=>ls=c,()=>ls);var Rt=f(dt,2);Rt.textContent=`🛠️ DEBUG v${s}`;var Pt=f(Rt,2);Ua(Pt,c=>Me=c,()=>Me);var It=f(Pt,2),La=f(w(It),2);La.textContent=`v${s}`;var ks=f(La,2),Ta=f(w(ks),2),lr=w(Ta,!0);A(Ta),A(ks);var Es=f(ks,2),Ra=f(w(Es),2),cr=w(Ra,!0);A(Ra),A(Es);var Ss=f(Es,2),Pa=f(w(Ss),2),dr=w(Pa,!0);A(Pa),A(Ss);var js=f(Ss,2),Ls=f(w(js),2),pr=w(Ls);A(Ls),A(js);var Ts=f(js,2),Rs=f(w(Ts),2),ur=w(Rs);A(Rs),A(Ts);var Ps=f(Ts,2),Ia=f(w(Ps),2),fr=w(Ia,!0);A(Ia),A(Ps);var Is=f(Ps,2),Oa=f(w(Is),2),hr=w(Oa,!0);A(Oa),A(Is);var Os=f(Is,2),Ba=f(w(Os),2),gr=w(Ba);A(Ba),A(Os);var Ca=f(Os,2),Fa=f(Ca,2),He=w(Fa),mr=w(He);A(He);var Ot=f(He,2),pt=f(Ot,2),vr=w(pt);A(pt);var Bs=f(pt,2);A(Fa),A(It);var ut=f(It,2),br=w(ut,!0);A(ut),A(ds),A(ba),me((c,u,k,b,_,$,E,O)=>{x(ds,"style",`
    position: relative;
    width: ${r*a(l)}px;
    height: ${i*a(l)}px;
  `),x(ps,"style",`
          position: absolute;
          top: ${130*a(l)}px;
          right: ${20*a(l)}px;
          padding: ${10*a(l)}px ${15*a(l)}px;
          background-color: rgba(255, 215, 0, 0.3);
          border: ${2*a(l)}px solid rgba(255, 215, 0, 0.7);
          border-radius: ${8*a(l)}px;
          cursor: pointer;
          font-weight: bold;
          font-size: ${16*a(l)}px;
          color: white;
          text-shadow: 0 0 ${5*a(l)}px rgba(0,0,0,0.8);
          z-index: 1000;
          min-width: ${180*a(l)}px;
        `),x(us,"style",`
        position: absolute;
        left: ${((Yt?Yt.x:j)+L)*a(l)}px;
        top: ${(v+J)*a(l)}px;
        width: ${a(Vt)*a(l)}px;
        height: ${h*a(l)}px;
        display: flex;
        align-items: center;
        z-index: 1000;
      `),x(fs,"style",`height: ${h*a(l)}px; flex-shrink: 0;`),x(wt,"style",`
    flex-grow: 1;
    height: ${h*a(l)}px;
    background-image: url('${Y??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 ${20*a(l)}px;
  `),x(At,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*a(l)}px;`),x(xa,"style",`color: #00ff00; font-size: ${12*a(l)}px; font-weight: bold;`),x(hs,"style",`display: flex; gap: ${5*a(l)}px; align-items: center;`),x(gs,"style",`
            width: ${40*a(l)}px;
            height: ${40*a(l)}px;
            background-image: url('${Y??""}/Control_lowerbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x($t,"style",`
          color: #fff;
          font-size: ${18*a(l)}px;
          font-weight: bold;
          min-width: ${80*a(l)}px;
          text-align: center;
          font-family: 'Courier New', monospace;
        `),z(rr,c),x(_a,"style",`
            width: ${40*a(l)}px;
            height: ${40*a(l)}px;
            background-image: url('${Y??""}/Control_upperbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(ms,"style",`height: ${h*.8*a(l)}px; flex-shrink: 0;`),x(kt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*a(l)}px;`),x(wa,"style",`color: #00ff00; font-size: ${12*a(l)}px; font-weight: bold;`),x(vs,"style",`
        color: #fff;
        font-size: ${20*a(l)}px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      `),z(ir,u),x(bs,"style",`height: ${h*.8*a(l)}px; flex-shrink: 0;`),di(xs,1,`play-button-wrapper ${(a(Kt)?"glare-animate":"")??""}`,"svelte-tijp0o"),x(Aa,"style",`
            width: ${130*a(l)}px;
            height: ${130*a(l)}px;
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
          `),x(_s,"style",`height: ${h*.8*a(l)}px; flex-shrink: 0;`),x(Et,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*a(l)}px;`),x(St,"style",`
          width: ${50*a(l)}px;
          height: ${50*a(l)}px;
          background-image: url('${Y??""}/${(a(ue)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),x(St,"title",a(ue)?"Stop Autoplay":"Autoplay"),x($a,"src",`${Y??""}/${(a(ue)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),x($a,"style",`width: ${50*a(l)}px; height: auto;`),x(ws,"style",`height: ${h*.8*a(l)}px; flex-shrink: 0;`),x(jt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*a(l)}px;`),x(Lt,"style",`
          width: ${50*a(l)}px;
          height: ${50*a(l)}px;
          background-image: url('${Y??""}/Control_fastplay_select.png');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),x(Lt,"title",`Spin Speed: ${(a(ne)==="slow"?"Slow":a(ne)==="medium"?"Medium":"Fast")??""}`),x(ka,"src",`${Y??""}/${(a(ne)==="slow"?"Control_bar_deselect.png":a(ne)==="medium"?"Control_half_bar_select.png":"Control_bar_select.png")??""}`),x(ka,"style",`width: ${50*a(l)}px; height: auto;`),x(Tt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*a(l)}px;`),x(Ea,"style",`color: #00ff00; font-size: ${12*a(l)}px; font-weight: bold;`),x(As,"style",`
        color: #ffd700;
        font-size: ${20*a(l)}px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      `),z(nr,k),x($s,"style",`height: ${h*.8*a(l)}px; flex-shrink: 0;`),x(Sa,"style",`
        width: ${50*a(l)}px;
        height: ${50*a(l)}px;
        background-image: url('${Y??""}/Control_menubar.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),x(ja,"style",`height: ${h*a(l)}px; flex-shrink: 0;`),x(Rt,"style",`
    position: absolute;
    top: ${190*a(l)}px;
    right: ${20*a(l)}px;
    padding: ${10*a(l)}px ${15*a(l)}px;
    background-color: rgba(0, 255, 0, 0.3);
    border: ${2*a(l)}px solid rgba(0, 255, 0, 0.7);
    border-radius: ${8*a(l)}px;
    cursor: pointer;
    font-weight: bold;
    font-size: ${16*a(l)}px;
    color: white;
    text-shadow: 0 0 ${5*a(l)}px rgba(0,0,0,0.8);
    z-index: 10000;
    min-width: ${180*a(l)}px;
    pointer-events: auto;
  `),x(Pt,"winlevel",a(fe)/a(ye)>=50?"jackpot":a(fe)/a(ye)>=20?"medium":"small"),x(Pt,"winamount",a(fe)),x(It,"style",`
  position: absolute;
  top: 20px;
  left: 20px;
  display: ${(a(qt)?"block":"none")??""};
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
`),z(lr,b),z(cr,_),z(dr,$),x(Ls,"style",`color: ${E??""};`),z(pr,`${a(es)??""}%`),x(Rs,"style",`color: ${O??""};`),z(ur,`${a(ts)??""}%`),z(fr,a(yt)),z(hr,a(ss)),z(gr,`${a(Fo)??""}%`),He.disabled=a(le).length===0,x(He,"style",`
        width: 100%;
        padding: 5px;
        background: ${(a(le).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(a(le).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(a(le).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(a(le).length>0?"1":"0.5")??""};
      `),z(mr,`Download Win Log (${a(le).length??""})`),Ot.disabled=a(le).length===0,x(Ot,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(a(le).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(a(le).length>0?"1":"0.5")??""};
      `),x(pt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(a(de)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(a(de)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),z(vr,`🎵 Music: ${(a(de)?"ON":"OFF")??""}`),Bs.disabled=a(G),x(Bs,"style",`
        width: 100%;
        padding: 5px;
        background: ${(a(G)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(a(G)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(a(G)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(a(G)?"0.5":"1")??""};
      `),x(ut,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(a(we)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(a(we)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),x(ut,"title",a(we)?"Mykistä äänet":"Laita äänet päälle"),z(br,a(we)?"🔊":"🔇")},[()=>a(ye).toFixed(2),()=>a(Ee).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>a(na).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>a(ze).toLocaleString(),()=>a(Ne).toLocaleString(),()=>a(rt).toLocaleString(),()=>parseFloat(a(es))>=95?"#00ff00":parseFloat(a(es))>=85?"#ffff00":"#ff6666",()=>parseFloat(a(ts))>=30?"#00ff00":parseFloat(a(ts))>=20?"#ffff00":"#ff6666"]),M("click",ps,()=>{y(Ue,!a(Ue))}),M("click",gs,Jo),M("click",_a,qo),M("click",Aa,()=>{a(ue)&&_t(),ua()}),M("click",St,()=>{a(ue)?_t():y(xe,!a(xe))}),M("click",Lt,()=>{a(ne)==="slow"?y(ne,"medium"):a(ne)==="medium"?y(ne,"fast"):y(ne,"slow")}),M("click",Sa,()=>{y(Ue,!a(Ue))}),M("click",Rt,()=>{y(qt,!a(qt))}),M("click",Ca,Zo),M("click",He,Wo),M("click",Ot,zo),M("click",pt,Io),M("click",Bs,No),M("click",ut,()=>{y(we,!a(we))}),q(t,fa),lo()}var jn=se('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),Ln=se('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function Tn(t,e){io(e,!1);let s=Zr(e,"isAuthenticated",12,!1),o=Hs(""),r=Hs(!1);const i="slot2024";function n(){a(o)===i?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(y(r,!0),y(o,""),setTimeout(()=>y(r,!1),3e3))}no(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),Sr();var d=Er(),g=Mt(d);{var m=p=>{var v=Ln(),h=w(v),j=f(w(h),4),L=w(j);pi(L),Jr(2),A(j);var J=f(j,2);{var H=T=>{var N=jn();q(T,N)};ve(J,T=>{a(r)&&T(H)})}A(h),A(v),fi(L,()=>a(o),T=>y(o,T)),M("submit",j,hi(n)),q(p,v)};ve(g,p=>{s()||p(m)})}q(t,d),lo()}var Rn=se("<!> <!>",1);function Un(t){let e=Hs(!1);var s=Rn(),o=Mt(s);Tn(o,{get isAuthenticated(){return a(e)},set isAuthenticated(n){y(e,n)},$$legacy:!0});var r=f(o,2);{var i=n=>{Sn(n,{})};ve(r,n=>{a(e)&&n(i)})}q(t,s)}export{mo as A,fo as C,wi as R,vi as S,vo as V,Un as _,mi as u};
