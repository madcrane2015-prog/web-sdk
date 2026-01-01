const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CXlMRA9e.js","./BaqJxISf.js","./CgWia7Op.js","./EjnPGRTu.js","./Bkkaav7K.js","./C2GHuDhf.js","./DM0tPHbM.js","./BBvXqNF-.js"])))=>i.map(i=>d[i]);
var xr=Object.defineProperty;var _r=(t,e,a)=>e in t?xr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var ge=(t,e,a)=>_r(t,typeof e!="symbol"?e+"":e,a);import{g as wr,l as Ar,t as se,i as $r,j as kr,a as q,k as O,e as Er}from"./XZc5ccWP.js";import{i as Sr}from"./DIdOt9--.js";import{y as ye,j as jr,a8 as Lr,F as s,Q as Tr,aa as Rr,ab as Ma,h as Wa,e as Cs,k as ft,l as Pr,ac as ao,w as oo,ad as Ir,q as ro,a7 as Or,U as Br,a2 as za,ar as Fs,z as Na,as as Cr,at as Fr,au as Mr,o as Wr,av as zr,aw as Nr,ax as Dr,ay as Ur,b as Gr,az as Hr,aA as Vr,a6 as Yr,aB as Xr,aC as Kr,D as Qr,L as qr,p as io,ah as R,ag as no,T as b,aD as me,I as Bt,s as f,f as Mt,c as w,r as A,t as ve,a as lo,aE as Jr,aF as Hs}from"./EjnPGRTu.js";import{_ as Da,p as de,i as be}from"./CgWia7Op.js";import{s as z}from"./2z5c-rnE.js";import{b as Ua,p as Zr}from"./CHseoIM1.js";import{b as _e}from"./WlVQTKxM.js";import{e as Ie,E as I,a as ei,C as qs,Q as Vs,V as Ys,N as Ms,D as re,H as ti,p as Fe,a0 as qe,a1 as Me,a2 as si,w as Pe,a3 as gt,a4 as co,a5 as Je,a6 as $e,a7 as Wt,a8 as po,a9 as ai,aa as Ws,y as zs}from"./BaqJxISf.js";import{A as oi,B as Ga,G as ri,a as Ha}from"./Bkkaav7K.js";function Va(t,e){return e}function ii(t,e,a,o){for(var r=[],n=e.length,l=0;l<n;l++)Mr(e[l].e,r,!0);var d=n>0&&r.length===0&&a!==null;if(d){var g=a.parentNode;Wr(g),g.append(a),o.clear(),Re(t,e[0].prev,e[n-1].next)}zr(r,()=>{for(var m=0;m<n;m++){var p=e[m];d||(o.delete(p.k),Re(t,p.prev,p.next)),Nr(p.e,!d)}})}function Ya(t,e,a,o,r,n=null){var l=t,d={flags:e,items:new Map,first:null};ye&&jr();var g=null,m=!1,p=Tr(()=>{var v=a();return Or(v)?v:v==null?[]:ro(v)});Lr(()=>{var v=s(p),h=v.length;if(m&&h===0)return;m=h===0;let j=!1;if(ye){var L=l.data===Rr;L!==(h===0)&&(l=Ma(),Wa(l),Cs(!1),j=!0)}if(ye){for(var J=null,Y,T=0;T<h;T++){if(ft.nodeType===8&&ft.data===Pr){l=ft,j=!0,Cs(!1);break}var D=v[T],ke=o(D,T);Y=uo(ft,d,J,null,D,ke,T,r,e,a),d.items.set(ke,Y),J=Y}h>0&&Wa(Ma())}ye||ni(v,d,l,r,e,o,a),n!==null&&(h===0?g?ao(g):g=oo(()=>n(l)):g!==null&&Ir(g,()=>{g=null})),j&&Cs(!0),s(p)}),ye&&(l=ft)}function ni(t,e,a,o,r,n,l){var d=t.length,g=e.items,m=e.first,p=m,v,h=null,j=[],L=[],J,Y,T,D;for(D=0;D<d;D+=1){if(J=t[D],Y=n(J,D),T=g.get(Y),T===void 0){var ke=p?p.e.nodes_start:a;h=uo(ke,e,h,h===null?e.first:h.next,J,Y,D,o,r,l),g.set(Y,h),j=[],L=[],p=h.next;continue}if(li(T,J,D),(T.e.f&Fs)!==0&&ao(T.e),T!==p){if(v!==void 0&&v.has(T)){if(j.length<L.length){var ie=L[0],te;h=ie.prev;var zt=j[0],et=j[j.length-1];for(te=0;te<j.length;te+=1)Xa(j[te],ie,a);for(te=0;te<L.length;te+=1)v.delete(L[te]);Re(e,zt.prev,et.next),Re(e,h,zt),Re(e,et,ie),p=ie,h=et,D-=1,j=[],L=[]}else v.delete(T),Xa(T,p,a),Re(e,T.prev,T.next),Re(e,T,h===null?e.first:h.next),Re(e,h,T),h=T;continue}for(j=[],L=[];p!==null&&p.k!==Y;)(p.e.f&Fs)===0&&(v??(v=new Set)).add(p),L.push(p),p=p.next;if(p===null)continue;T=p}j.push(T),h=T,p=T.next}if(p!==null||v!==void 0){for(var Oe=v===void 0?[]:ro(v);p!==null;)(p.e.f&Fs)===0&&Oe.push(p),p=p.next;var mt=Oe.length;if(mt>0){var K=null;ii(e,Oe,K,g)}}Na.first=e.first&&e.first.e,Na.last=h&&h.e}function li(t,e,a,o){Fr(t.v,e),t.i=a}function uo(t,e,a,o,r,n,l,d,g,m){var p=(g&Dr)!==0,v=(g&Ur)===0,h=p?v?Br(r):za(r):r,j=(g&Cr)===0?l:za(l),L={i:j,v:h,k:n,a:null,e:null,prev:a,next:o};try{return L.e=oo(()=>d(t,h,j,m),ye),L.e.prev=a&&a.e,L.e.next=o&&o.e,a===null?e.first=L:(a.next=L,a.e.next=L.e),o!==null&&(o.prev=L,o.e.prev=L.e),L}finally{}}function Xa(t,e,a){for(var o=t.next?t.next.e.nodes_start:a,r=e?e.e.nodes_start:a,n=t.e.nodes_start;n!==o;){var l=Gr(n);r.before(n),n=l}}function Re(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function ci(t,e,a){var o=t==null?"":""+t;return o=o?o+" "+e:e,o===""?null:o}function di(t,e,a,o,r,n){var l=t.__className;if(ye||l!==a){var d=ci(a,o);(!ye||d!==t.getAttribute("class"))&&(d==null?t.removeAttribute("class"):t.className=d),t.__className=a}return n}function pi(t){if(ye){var e=!1,a=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var o=t.value;x(t,"value",null),t.value=o}if(t.hasAttribute("checked")){var r=t.checked;x(t,"checked",null),t.checked=r}}};t.__on_r=a,Hr(a),wr()}}function x(t,e,a,o){var r=t.__attributes??(t.__attributes={});ye&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=a)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Vr]=a),a==null?t.removeAttribute(e):typeof a!="string"&&ui(t).includes(e)?t[e]=a:t.setAttribute(e,a))}var Ka=new Map;function ui(t){var e=Ka.get(t.nodeName);if(e)return e;Ka.set(t.nodeName,e=[]);for(var a,o=t,r=Element.prototype;r!==o;){a=Xr(o);for(var n in a)a[n].set&&e.push(n);o=Yr(o)}return e}function fi(t,e,a=e){var o=Kr();Ar(t,"input",r=>{var n=r?t.defaultValue:t.value;if(n=Ns(t)?Ds(n):n,a(n),o&&n!==(n=e())){var l=t.selectionStart,d=t.selectionEnd;t.value=n??"",d!==null&&(t.selectionStart=l,t.selectionEnd=Math.min(d,t.value.length))}}),(ye&&t.defaultValue!==t.value||Qr(e)==null&&t.value)&&a(Ns(t)?Ds(t.value):t.value),qr(()=>{var r=e();Ns(t)&&r===Ds(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function Ns(t){var e=t.type;return e==="number"||e==="range"}function Ds(t){return t===""?null:+t}function hi(t){return function(...e){var a=e[0];return a.preventDefault(),t==null?void 0:t.apply(this,e)}}const Xs=[];Ie.handleByNamedList(I.Environment,Xs);async function gi(t){if(!t)for(let e=0;e<Xs.length;e++){const a=Xs[e];if(a.value.test()){await a.value.load();return}}}let ht;function mi(){if(typeof ht=="boolean")return ht;try{ht=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{ht=!1}return ht}var fo=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(fo||{});class vi{constructor(e){this.items=[],this._name=e}emit(e,a,o,r,n,l,d,g){const{name:m,items:p}=this;for(let v=0,h=p.length;v<h;v++)p[v][m](e,a,o,r,n,l,d,g);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const a=this.items.indexOf(e);return a!==-1&&this.items.splice(a,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const bi=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],ho=class go extends ei{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const a=[...bi,...this.config.runners??[]];this._addRunners(...a),this._unsafeEvalCheck()}async init(e={}){const a=e.skipExtensionImports===!0?!0:e.manageImports===!1;await gi(a),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const o in this._systemsHash)e={...this._systemsHash[o].constructor.defaultOptions,...e};e={...go.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let o=0;o<this.runners.init.items.length;o++)await this.runners.init.items[o].init(e);this._initOptions=e}render(e,a){let o=e;if(o instanceof qs&&(o={container:o},a&&(Vs(Ys,"passing a second argument is deprecated, please use render options instead"),o.target=a.renderTexture)),o.target||(o.target=this.view.renderTarget),o.target===this.view.renderTarget&&(this._lastObjectRendered=o.container,o.clearColor??(o.clearColor=this.background.colorRgba),o.clear??(o.clear=this.background.clearBeforeRender)),o.clearColor){const r=Array.isArray(o.clearColor)&&o.clearColor.length===4;o.clearColor=r?o.clearColor:Ms.shared.setValue(o.clearColor).toArray()}o.transform||(o.container.updateLocalTransform(),o.transform=o.container.localTransform),o.container.enableRenderGroup(),this.runners.prerender.emit(o),this.runners.renderStart.emit(o),this.runners.render.emit(o),this.runners.renderEnd.emit(o),this.runners.postrender.emit(o)}resize(e,a,o){const r=this.view.resolution;this.view.resize(e,a,o),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),o!==void 0&&o!==r&&this.runners.resolutionChange.emit(o)}clear(e={}){const a=this;e.target||(e.target=a.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=fo.ALL);const{clear:o,clearColor:r,target:n}=e;Ms.shared.setValue(r??this.background.colorRgba),a.renderTarget.clear(n,o,Ms.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(a=>{this.runners[a]=new vi(a)})}_addSystems(e){let a;for(a in e){const o=e[a];this._addSystem(o.value,o.name)}}_addSystem(e,a){const o=new e(this);if(this[a])throw new Error(`Whoops! The name "${a}" is already in use`);this[a]=o,this._systemsHash[a]=o;for(const r in this.runners)this.runners[r].add(o);return this}_addPipes(e,a){const o=a.reduce((r,n)=>(r[n.name]=n.value,r),{});e.forEach(r=>{const n=r.value,l=r.name,d=o[l];this.renderPipes[l]=new n(this,d?new d:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(a=>{a.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!mi())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};ho.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let mo=ho,Ct;function yi(t){return Ct!==void 0||(Ct=(()=>{var a;const e={stencil:!0,failIfMajorPerformanceCaveat:t??mo.defaultOptions.failIfMajorPerformanceCaveat};try{if(!re.get().getWebGLRenderingContext())return!1;let r=re.get().createCanvas().getContext("webgl",e);const n=!!((a=r==null?void 0:r.getContextAttributes())!=null&&a.stencil);if(r){const l=r.getExtension("WEBGL_lose_context");l&&l.loseContext()}return r=null,n}catch{return!1}})()),Ct}let Ft;async function xi(t={}){return Ft!==void 0||(Ft=await(async()=>{const e=re.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),Ft}const Qa=["webgl","webgpu","canvas"];async function _i(t){let e=[];t.preference?(e.push(t.preference),Qa.forEach(n=>{n!==t.preference&&e.push(n)})):e=Qa.slice();let a,o={};for(let n=0;n<e.length;n++){const l=e[n];if(l==="webgpu"&&await xi()){const{WebGPURenderer:d}=await Da(async()=>{const{WebGPURenderer:g}=await import("./CXlMRA9e.js");return{WebGPURenderer:g}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);a=d,o={...t,...t.webgpu};break}else if(l==="webgl"&&yi(t.failIfMajorPerformanceCaveat??mo.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:d}=await Da(async()=>{const{WebGLRenderer:g}=await import("./BBvXqNF-.js");return{WebGLRenderer:g}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);a=d,o={...t,...t.webgl};break}else if(l==="canvas")throw o={...t},new Error("CanvasRenderer is not yet implemented")}if(delete o.webgpu,delete o.webgl,!a)throw new Error("No available renderer for the current environment");const r=new a;return await r.init(o),r}const vo="8.8.1";class bo{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,vo)}static destroy(){}}bo.extension=I.Application;class wi{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,vo)}destroy(){this._renderer=null}}wi.extension={type:[I.WebGLSystem,I.WebGPUSystem],name:"initHook",priority:-10};const yo=class Ks{constructor(...e){this.stage=new qs,e[0]!==void 0&&Vs(Ys,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await _i(e),Ks._plugins.forEach(a=>{a.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Vs(Ys,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,a=!1){const o=Ks._plugins.slice(0);o.reverse(),o.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(a),this.stage=null,this.renderer.destroy(e),this.renderer=null}};yo._plugins=[];let xo=yo;Ie.handleByList(I.Application,xo._plugins);Ie.add(bo);class _o extends oi{constructor(e,a){super();const{textures:o,data:r}=e;Object.keys(r.pages).forEach(n=>{const l=r.pages[parseInt(n,10)],d=o[l.id];this.pages.push({texture:d})}),Object.keys(r.chars).forEach(n=>{const l=r.chars[n],{frame:d,source:g}=o[l.page],m=new ti(l.x+d.x,l.y+d.y,l.width,l.height),p=new Fe({source:g,frame:m});this.chars[n]={id:n.codePointAt(0),xOffset:l.xOffset,yOffset:l.yOffset,xAdvance:l.xAdvance,kerning:l.kerning??{},texture:p}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=a}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:a}=this.pages[e];a.destroy(!0)}this.pages=null}static install(e){Ga.install(e)}static uninstall(e){Ga.uninstall(e)}}const Us={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),a={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const v in e){const h=e[v].match(/^[a-z]+/gm)[0],j=e[v].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),L={};for(const J in j){const Y=j[J].split("="),T=Y[0],D=Y[1].replace(/"/gm,""),ke=parseFloat(D),ie=isNaN(ke)?D:ke;L[T]=ie}a[h].push(L)}const o={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=a.info,[n]=a.common,[l]=a.distanceField??[];l&&(o.distanceField={range:parseInt(l.distanceRange,10),type:l.fieldType}),o.fontSize=parseInt(r.size,10),o.fontFamily=r.face,o.lineHeight=parseInt(n.lineHeight,10);const d=a.page;for(let v=0;v<d.length;v++)o.pages.push({id:parseInt(d[v].id,10)||0,file:d[v].file});const g={};o.baseLineOffset=o.lineHeight-parseInt(n.base,10);const m=a.char;for(let v=0;v<m.length;v++){const h=m[v],j=parseInt(h.id,10);let L=h.letter??h.char??String.fromCharCode(j);L==="space"&&(L=" "),g[j]=L,o.chars[L]={id:j,page:parseInt(h.page,10)||0,x:parseInt(h.x,10),y:parseInt(h.y,10),width:parseInt(h.width,10),height:parseInt(h.height,10),xOffset:parseInt(h.xoffset,10),yOffset:parseInt(h.yoffset,10),xAdvance:parseInt(h.xadvance,10),kerning:{}}}const p=a.kerning||[];for(let v=0;v<p.length;v++){const h=parseInt(p[v].first,10),j=parseInt(p[v].second,10),L=parseInt(p[v].amount,10);o.chars[g[j]].kerning[g[h]]=L}return o}},qa={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},a=t.getElementsByTagName("info")[0],o=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const n=t.getElementsByTagName("page"),l=t.getElementsByTagName("char"),d=t.getElementsByTagName("kerning");e.fontSize=parseInt(a.getAttribute("size"),10),e.fontFamily=a.getAttribute("face"),e.lineHeight=parseInt(o.getAttribute("lineHeight"),10);for(let m=0;m<n.length;m++)e.pages.push({id:parseInt(n[m].getAttribute("id"),10)||0,file:n[m].getAttribute("file")});const g={};e.baseLineOffset=e.lineHeight-parseInt(o.getAttribute("base"),10);for(let m=0;m<l.length;m++){const p=l[m],v=parseInt(p.getAttribute("id"),10);let h=p.getAttribute("letter")??p.getAttribute("char")??String.fromCharCode(v);h==="space"&&(h=" "),g[v]=h,e.chars[h]={id:v,page:parseInt(p.getAttribute("page"),10)||0,x:parseInt(p.getAttribute("x"),10),y:parseInt(p.getAttribute("y"),10),width:parseInt(p.getAttribute("width"),10),height:parseInt(p.getAttribute("height"),10),xOffset:parseInt(p.getAttribute("xoffset"),10),yOffset:parseInt(p.getAttribute("yoffset"),10),xAdvance:parseInt(p.getAttribute("xadvance"),10),kerning:{}}}for(let m=0;m<d.length;m++){const p=parseInt(d[m].getAttribute("first"),10),v=parseInt(d[m].getAttribute("second"),10),h=parseInt(d[m].getAttribute("amount"),10);e.chars[g[v]].kerning[g[p]]=h}return e}},Ja={test(t){return typeof t=="string"&&t.includes("<font>")?qa.test(re.get().parseXML(t)):!1},parse(t){return qa.parse(re.get().parseXML(t))}},Ai=[".xml",".fnt"],$i={extension:{type:I.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof _o,getCacheableAssets(t,e){const a={};return t.forEach(o=>{a[o]=e,a[`${o}-bitmap`]=e}),a[`${e.fontFamily}-bitmap`]=e,a}},ki={extension:{type:I.LoadParser,priority:qe.Normal},name:"loadBitmapFont",test(t){return Ai.includes(Me.extname(t).toLowerCase())},async testParse(t){return Us.test(t)||Ja.test(t)},async parse(t,e,a){const o=Us.test(t)?Us.parse(t):Ja.parse(t),{src:r}=e,{pages:n}=o,l=[],d=o.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let v=0;v<n.length;++v){const h=n[v].file;let j=Me.join(Me.dirname(r),h);j=si(j,r),l.push({src:j,data:d})}const g=await a.load(l),m=l.map(v=>g[v.src]);return new _o({data:o,textures:m},r)},async load(t,e){return await(await re.get().fetch(t)).text()},async unload(t,e,a){await Promise.all(t.pages.map(o=>a.unload(o.texture.source._sourceOrigin))),t.destroy()}};class Ei{constructor(e,a=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=a}add(e){e.forEach(a=>{this._assetList.push(a)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],a=Math.min(this._assetList.length,this._maxConcurrent);for(let o=0;o<a;o++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Si={extension:{type:I.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Fe),getCacheableAssets:(t,e)=>{const a={};return t.forEach(o=>{e.forEach((r,n)=>{a[o+(n===0?"":n+1)]=r})}),a}};async function wo(t){if("Image"in globalThis)return new Promise(e=>{const a=new Image;a.onload=()=>{e(!0)},a.onerror=()=>{e(!1)},a.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const ji={extension:{type:I.DetectionParser,priority:1},test:async()=>wo("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},Za=["png","jpg","jpeg"],Li={extension:{type:I.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...Za],remove:async t=>t.filter(e=>!Za.includes(e))},Ti="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Js(t){return Ti?!1:document.createElement("video").canPlayType(t)!==""}const Ri={extension:{type:I.DetectionParser,priority:0},test:async()=>Js("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},Pi={extension:{type:I.DetectionParser,priority:0},test:async()=>Js("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},Ii={extension:{type:I.DetectionParser,priority:0},test:async()=>Js("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},Oi={extension:{type:I.DetectionParser,priority:0},test:async()=>wo("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class Bi{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,a,o)=>(this._parsersValidated=!1,e[a]=o,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,a){const o={promise:null,parser:null};return o.promise=(async()=>{var l,d;let r=null,n=null;if(a.loadParser&&(n=this._parserHash[a.loadParser],n||Pe(`[Assets] specified load parser "${a.loadParser}" not found while loading ${e}`)),!n){for(let g=0;g<this.parsers.length;g++){const m=this.parsers[g];if(m.load&&((l=m.test)!=null&&l.call(m,e,a,this))){n=m;break}}if(!n)return Pe(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await n.load(e,a,this),o.parser=n;for(let g=0;g<this.parsers.length;g++){const m=this.parsers[g];m.parse&&m.parse&&await((d=m.testParse)==null?void 0:d.call(m,r,a,this))&&(r=await m.parse(r,a,this)||r,o.parser=m)}return r})(),o}async load(e,a){this._parsersValidated||this._validateParsers();let o=0;const r={},n=co(e),l=gt(e,m=>({alias:[m],src:m,data:{}})),d=l.length,g=l.map(async m=>{const p=Me.toAbsolute(m.src);if(!r[m.src])try{this.promiseCache[p]||(this.promiseCache[p]=this._getLoadPromiseAndParser(p,m)),r[m.src]=await this.promiseCache[p].promise,a&&a(++o/d)}catch(v){throw delete this.promiseCache[p],delete r[m.src],new Error(`[Loader.load] Failed to load ${p}.
${v}`)}});return await Promise.all(g),n?r[l[0].src]:r}async unload(e){const o=gt(e,r=>({alias:[r],src:r})).map(async r=>{var d,g;const n=Me.toAbsolute(r.src),l=this.promiseCache[n];if(l){const m=await l.promise;delete this.promiseCache[n],await((g=(d=l.parser)==null?void 0:d.unload)==null?void 0:g.call(d,m,r,this))}});await Promise.all(o)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,a)=>(a.name?e[a.name]&&Pe(`[Assets] loadParser name conflict "${a.name}"`):Pe("[Assets] loadParser should have a name"),{...e,[a.name]:a}),{})}}function Ze(t,e){if(Array.isArray(e)){for(const a of e)if(t.startsWith(`data:${a}`))return!0;return!1}return t.startsWith(`data:${e}`)}const Ci=".json",Fi="application/json",Mi={extension:{type:I.LoadParser,priority:qe.Low},name:"loadJson",test(t){return Ze(t,Fi)||Je(t,Ci)},async load(t){return await(await re.get().fetch(t)).json()}},Wi=".txt",zi="text/plain",Ni={name:"loadTxt",extension:{type:I.LoadParser,priority:qe.Low,name:"loadTxt"},test(t){return Ze(t,zi)||Je(t,Wi)},async load(t){return await(await re.get().fetch(t)).text()}},Di=["normal","bold","100","200","300","400","500","600","700","800","900"],Ui=[".ttf",".otf",".woff",".woff2"],Gi=["font/ttf","font/otf","font/woff","font/woff2"],Hi=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Vi(t){const e=Me.extname(t),r=Me.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(d=>d.charAt(0).toUpperCase()+d.slice(1));let n=r.length>0;for(const d of r)if(!d.match(Hi)){n=!1;break}let l=r.join(" ");return n||(l=`"${l.replace(/[\\"]/g,"\\$&")}"`),l}const Yi=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function Xi(t){return Yi.test(t)?t:encodeURI(t)}const Ki={extension:{type:I.LoadParser,priority:qe.Low},name:"loadWebFont",test(t){return Ze(t,Gi)||Je(t,Ui)},async load(t,e){var o,r,n;const a=re.get().getFontFaceSet();if(a){const l=[],d=((o=e.data)==null?void 0:o.family)??Vi(t),g=((n=(r=e.data)==null?void 0:r.weights)==null?void 0:n.filter(p=>Di.includes(p)))??["normal"],m=e.data??{};for(let p=0;p<g.length;p++){const v=g[p],h=new FontFace(d,`url(${Xi(t)})`,{...m,weight:v});await h.load(),a.add(h),l.push(h)}return $e.set(`${d}-and-url`,{url:t,fontFaces:l}),l.length===1?l[0]:l}return Pe("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{$e.remove(`${e.family}-and-url`),re.get().getFontFaceSet().delete(e)})}};function Zs(t,e=1){var o;const a=(o=Wt.RETINA_PREFIX)==null?void 0:o.exec(t);return a?parseFloat(a[1]):e}function ea(t,e,a){t.label=a,t._sourceOrigin=a;const o=new Fe({source:t,label:a}),r=()=>{delete e.promiseCache[a],$e.has(a)&&$e.remove(a)};return o.source.once("destroy",()=>{e.promiseCache[a]&&(Pe("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),o.once("destroy",()=>{t.destroyed||(Pe("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),o}const Qi=".svg",qi="image/svg+xml",Ji={extension:{type:I.LoadParser,priority:qe.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return Ze(t,qi)||Je(t,Qi)},async load(t,e,a){var o;return((o=e.data)==null?void 0:o.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?en(t):Zi(t,e,a,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function Zi(t,e,a,o){var Y,T,D;const n=await(await re.get().fetch(t)).blob(),l=URL.createObjectURL(n),d=new Image;d.src=l,d.crossOrigin=o,await d.decode(),URL.revokeObjectURL(l);const g=document.createElement("canvas"),m=g.getContext("2d"),p=((Y=e.data)==null?void 0:Y.resolution)||Zs(t),v=((T=e.data)==null?void 0:T.width)??d.width,h=((D=e.data)==null?void 0:D.height)??d.height;g.width=v*p,g.height=h*p,m.drawImage(d,0,0,v*p,h*p);const{parseAsGraphicsContext:j,...L}=e.data??{},J=new po({resource:g,alphaMode:"premultiply-alpha-on-upload",resolution:p,...L});return ea(J,a,t)}async function en(t){const a=await(await re.get().fetch(t)).text(),o=new ri;return o.svg(a),o}const tn=`(function () {
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
`;let Ke=null,Qs=class{constructor(){Ke||(Ke=URL.createObjectURL(new Blob([tn],{type:"application/javascript"}))),this.worker=new Worker(Ke)}};Qs.revokeObjectURL=function(){Ke&&(URL.revokeObjectURL(Ke),Ke=null)};const sn=`(function () {
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
`;let Qe=null;class Ao{constructor(){Qe||(Qe=URL.createObjectURL(new Blob([sn],{type:"application/javascript"}))),this.worker=new Worker(Qe)}}Ao.revokeObjectURL=function(){Qe&&(URL.revokeObjectURL(Qe),Qe=null)};let eo=0,Gs;class an{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:a}=new Qs;a.addEventListener("message",o=>{a.terminate(),Qs.revokeObjectURL(),e(o.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,a){var o;return this._run("loadImageBitmap",[e,(o=a==null?void 0:a.data)==null?void 0:o.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Gs===void 0&&(Gs=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Gs&&(this._createdWorkers++,e=new Ao().worker,e.addEventListener("message",a=>{this._complete(a.data),this._returnWorker(a.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,a){await this._initWorkers();const o=new Promise((r,n)=>{this._queue.push({id:e,arguments:a,resolve:r,reject:n})});return this._next(),o}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const a=this._queue.pop(),o=a.id;this._resolveHash[eo]={resolve:a.resolve,reject:a.reject},e.postMessage({data:a.arguments,uuid:eo++,id:o})}}const to=new an,on=[".jpeg",".jpg",".png",".webp",".avif"],rn=["image/jpeg","image/png","image/webp","image/avif"];async function nn(t,e){var r;const a=await re.get().fetch(t);if(!a.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${a.status} ${a.statusText}`);const o=await a.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(o,{premultiplyAlpha:"none"}):createImageBitmap(o)}const $o={name:"loadTextures",extension:{type:I.LoadParser,priority:qe.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return Ze(t,rn)||Je(t,on)},async load(t,e,a){var n;let o=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await to.isImageBitmapSupported()?o=await to.loadImageBitmap(t,e):o=await nn(t,e):o=await new Promise((l,d)=>{o=new Image,o.crossOrigin=this.config.crossOrigin,o.src=t,o.complete?l(o):(o.onload=()=>{l(o)},o.onerror=d)});const r=new po({resource:o,alphaMode:"premultiply-alpha-on-upload",resolution:((n=e.data)==null?void 0:n.resolution)||Zs(t),...e.data});return ea(r,a,t)},unload(t){t.destroy(!0)}},ko=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],ln=ko.map(t=>`video/${t.substring(1)}`);function cn(t,e,a){a===void 0&&!e.startsWith("data:")?t.crossOrigin=pn(e):a!==!1&&(t.crossOrigin=typeof a=="string"?a:"anonymous")}function dn(t){return new Promise((e,a)=>{t.addEventListener("canplaythrough",o),t.addEventListener("error",r),t.load();function o(){n(),e()}function r(l){n(),a(l)}function n(){t.removeEventListener("canplaythrough",o),t.removeEventListener("error",r)}})}function pn(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const a=new URL(t,document.baseURI);return a.hostname!==e.hostname||a.port!==e.port||a.protocol!==e.protocol?"anonymous":""}const un={name:"loadVideo",extension:{type:I.LoadParser,name:"loadVideo"},test(t){const e=Ze(t,ln),a=Je(t,ko);return e||a},async load(t,e,a){var g,m;const o={...Ws.defaultOptions,resolution:((g=e.data)==null?void 0:g.resolution)||Zs(t),alphaMode:((m=e.data)==null?void 0:m.alphaMode)||await ai(),...e.data},r=document.createElement("video"),n={preload:o.autoLoad!==!1?"auto":void 0,"webkit-playsinline":o.playsinline!==!1?"":void 0,playsinline:o.playsinline!==!1?"":void 0,muted:o.muted===!0?"":void 0,loop:o.loop===!0?"":void 0,autoplay:o.autoPlay!==!1?"":void 0};Object.keys(n).forEach(p=>{const v=n[p];v!==void 0&&r.setAttribute(p,v)}),o.muted===!0&&(r.muted=!0),cn(r,t,o.crossorigin);const l=document.createElement("source");let d;if(t.startsWith("data:"))d=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const p=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();d=Ws.MIME_TYPES[p]||`video/${p}`}return l.src=t,d&&(l.type=d),new Promise(p=>{const v=async()=>{const h=new Ws({...o,resource:r});r.removeEventListener("canplay",v),e.data.preload&&await dn(r),p(ea(h,a,t))};r.addEventListener("canplay",v),r.appendChild(l)})},unload(t){t.destroy(!0)}},Eo={extension:{type:I.ResolveParser,name:"resolveTexture"},test:$o.test,parse:t=>{var e;return{resolution:parseFloat(((e=Wt.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},fn={extension:{type:I.ResolveParser,priority:-2,name:"resolveJson"},test:t=>Wt.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:Eo.parse};class hn{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Wt,this.loader=new Bi,this.cache=$e,this._backgroundLoader=new Ei(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var n,l;if(this._initialized){Pe("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let d=e.manifest;typeof d=="string"&&(d=await this.load(d)),this.resolver.addManifest(d)}const a=((n=e.texturePreference)==null?void 0:n.resolution)??1,o=typeof a=="number"?[a]:a,r=await this._detectFormats({preferredFormats:(l=e.texturePreference)==null?void 0:l.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:o}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,a){this._initialized||await this.init();const o=co(e),r=gt(e).map(d=>{if(typeof d!="string"){const g=this.resolver.getAlias(d);return g.some(m=>!this.resolver.hasKey(m))&&this.add(d),Array.isArray(g)?g[0]:g}return this.resolver.hasKey(d)||this.add({alias:d,src:d}),d}),n=this.resolver.resolve(r),l=await this._mapLoadToResolve(n,a);return o?l[r[0]]:l}addBundle(e,a){this.resolver.addBundle(e,a)}async loadBundle(e,a){this._initialized||await this.init();let o=!1;typeof e=="string"&&(o=!0,e=[e]);const r=this.resolver.resolveBundle(e),n={},l=Object.keys(r);let d=0,g=0;const m=()=>{a==null||a(++d/g)},p=l.map(v=>{const h=r[v];return g+=Object.keys(h).length,this._mapLoadToResolve(h,m).then(j=>{n[v]=j})});return await Promise.all(p),o?n[e[0]]:n}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(a))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolveBundle(e);Object.values(a).forEach(o=>{this._backgroundLoader.add(Object.values(o))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return $e.get(e);const a={};for(let o=0;o<e.length;o++)a[o]=$e.get(e[o]);return a}async _mapLoadToResolve(e,a){const o=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(o,a);this._backgroundLoader.active=!0;const n={};return o.forEach(l=>{const d=r[l.src],g=[l.src];l.alias&&g.push(...l.alias),g.forEach(m=>{n[m]=d}),$e.set(g,d)}),n}async unload(e){this._initialized||await this.init();const a=gt(e).map(r=>typeof r!="string"?r.src:r),o=this.resolver.resolve(a);await this._unloadFromResolved(o)}async unloadBundle(e){this._initialized||await this.init(),e=gt(e);const a=this.resolver.resolveBundle(e),o=Object.keys(a).map(r=>this._unloadFromResolved(a[r]));await Promise.all(o)}async _unloadFromResolved(e){const a=Object.values(e);a.forEach(o=>{$e.remove(o.src)}),await this.loader.unload(a)}async _detectFormats(e){let a=[];e.preferredFormats&&(a=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const o of e.detections)e.skipDetections||await o.test()?a=await o.add(a):e.skipDetections||(a=await o.remove(a));return a=a.filter((o,r)=>a.indexOf(o)===r),a}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(a=>{a.config&&Object.keys(a.config).filter(o=>o in e).forEach(o=>{a.config[o]=e[o]})})}}const Xe=new hn;Ie.handleByList(I.LoadParser,Xe.loader.parsers).handleByList(I.ResolveParser,Xe.resolver.parsers).handleByList(I.CacheParser,Xe.cache.parsers).handleByList(I.DetectionParser,Xe.detections);Ie.add(Si,Li,ji,Oi,Ri,Pi,Ii,Mi,Ni,Ki,Ji,$o,un,ki,$i,Eo,fn);const so={loader:I.LoadParser,resolver:I.ResolveParser,cache:I.CacheParser,detection:I.DetectionParser};Ie.handle(I.Asset,t=>{const e=t.ref;Object.entries(so).filter(([a])=>!!e[a]).forEach(([a,o])=>Ie.add(Object.assign(e[a],{extension:e[a].extension??o})))},t=>{const e=t.ref;Object.keys(so).filter(a=>!!e[a]).forEach(a=>Ie.remove(e[a]))});var gn=kr('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-tijp0o"><\/script><!---->',1),mn=se('<p style="color: red;" class="svelte-tijp0o"><strong class="svelte-tijp0o">Error:</strong> </p>'),vn=se('<div class="svelte-tijp0o"> </div>'),bn=se('<details class="svelte-tijp0o"><summary class="svelte-tijp0o"> </summary> <!></details>'),yn=se(`<div style="
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
        " class="svelte-tijp0o">JATKA PERUSPELIIN</button></div></div>`),kn=se('<div class="svelte-tijp0o"><div class="svelte-tijp0o">🔄 Select Rounds</div> <button class="svelte-tijp0o">10 Rounds</button> <button class="svelte-tijp0o">25 Rounds</button> <button class="svelte-tijp0o">50 Rounds</button> <button class="svelte-tijp0o">100 Rounds</button> <button class="svelte-tijp0o">200 Rounds</button> <button class="svelte-tijp0o">500 Rounds</button> <button class="svelte-tijp0o">1,000 Rounds</button> <button class="svelte-tijp0o">5,000 Rounds</button> <button class="svelte-tijp0o">Cancel</button></div>'),En=se(`<!>   <!>   <!>   <!>  <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
" class="svelte-tijp0o"><div class="svelte-tijp0o"><div class="svelte-tijp0o"><button class="svelte-tijp0o">💰 PAYTABLE</button>  <div class="control-panel-mobile svelte-tijp0o"><!>  <img alt="Left End" class="svelte-tijp0o"> <div class="svelte-tijp0o"><div class="svelte-tijp0o"><div class="svelte-tijp0o">BET</div> <div class="svelte-tijp0o"><button title="Decrease Bet" class="svelte-tijp0o"></button> <div class="svelte-tijp0o"> </div> <button title="Increase Bet" class="svelte-tijp0o"></button></div></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><div class="svelte-tijp0o">BALANCE</div> <div class="svelte-tijp0o"> </div></div> <img alt="Divider" class="svelte-tijp0o"> <div style="position: relative; display: flex; align-items: center; justify-content: center; flex-grow: 0.5;" class="svelte-tijp0o"><div><button title="SPIN" class="svelte-tijp0o"></button></div></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><button class="svelte-tijp0o"></button> <img alt="Status bar" class="svelte-tijp0o"></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><button class="svelte-tijp0o"></button> <img alt="Speed bar" class="svelte-tijp0o"></div> <div class="svelte-tijp0o"><div class="svelte-tijp0o">WIN</div> <div class="svelte-tijp0o"> </div></div> <img alt="Divider" class="svelte-tijp0o"> <button title="Menu" class="svelte-tijp0o"></button></div> <img alt="Right End" class="svelte-tijp0o"></div></div>  <button class="svelte-tijp0o"></button> <button <VinylWinAnimation="" class="svelte-tijp0o"></button>   <div class="debug-panel svelte-tijp0o"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-tijp0o">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-tijp0o"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Rounds:</span> <span style="color: #fff;" class="svelte-tijp0o"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Wagered:</span> <span style="color: #ff6666;" class="svelte-tijp0o"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Won:</span> <span style="color: #66ff66;" class="svelte-tijp0o"> </span></div> <div style="
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
  " class="svelte-tijp0o"><button class="svelte-tijp0o"> </button> <button class="svelte-tijp0o">Clear Win Log</button> <button class="svelte-tijp0o"> </button> <button class="svelte-tijp0o">🎰 Test Free Spins</button></div></div> <button class="debug-panel svelte-tijp0o"> </button></div></div>`,1);function Sn(t,e){io(e,!0);const a="1.2.0",o=13,r=1445,n=1e3,l=1.75,d=-30,g=-10,m=160,p=0,v=750,h=80,j=250,L=0,J=50,Y=.5,T=40,D=0,ie=Math.round(100*l),te=Math.round(ie*(700/760)),et=te+10,Oe=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],mt=typeof window<"u"&&window.location.hostname.includes("github.io"),K=mt?"/web-sdk/oma-peli/symbols":`${_e}/symbols`,Q=mt?"/web-sdk/oma-peli/controls":`${_e}/controls`,Nt={a:`${K}/Blue_hotrod.jpg`,b:`${K}/Blue_jacket.jpg`,c:`${K}/Blue_rollers.jpg`,d:`${K}/Blue_speakers.jpg`,e:`${K}/Premium_blonde.jpg`,f:`${K}/Premium_brunette.jpg`,g:`${K}/Premium_rocker.jpg`,h:`${K}/New_Wild.jpg`,i:`${K}/Red_burger.jpg`,j:`${K}/Red_fries.jpg`,k:`${K}/Red_milkshake.jpg`,l:`${K}/Scatter.jpg`,emptyslot:`${K}/Emptyslot.jpg`},Dt=`${K}/bg_base.jpg`,ta=`${K}/ReelFrames.png`,sa=`${K}/RockABillyReels_logo.png`,So={spin:`${_e}/sounds/spin.mp3`,stop:`${_e}/sounds/stop.mp3`,win:`${_e}/sounds/win.mp3`};let we=R(!0),Ut={},U=null,ne=null,Gt=null,Ht=null,pe=R(!0),jo=R(!1),Vt=R(945),Yt=null;const Lo={fast:3,medium:7,slow:18};let le=R("medium"),aa=R(Math.floor(Math.random()*20)+1);const vt={background:()=>`${_e}/music/rockabilly reels loop ${s(aa)}.mp3`,freeSpins:`${_e}/music/rockabilly-loop_long.mp3`,drumHit:`${_e}/music/drum-hit.mp3`,winTheme:`${_e}/music/win-stinger.mp3`};function oa(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(oa,500);return}const c=window.Howl;try{U=new c({src:[vt.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+s(aa)+")"),b(jo,!0)},onloaderror:(u,k)=>{console.warn("⚠️ Background music not found:",k)}}),ne=new c({src:[vt.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(u,k)=>console.warn("⚠️ Free spins music not found:",k)}),Gt=new c({src:[vt.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Ht=new c({src:[vt.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(u){console.error("Failed to initialize music system:",u)}}function ra(){const c=s(G)?ne:U;c&&s(pe)&&!c.playing()&&(c.play(),console.log("🎵 "+(s(G)?"Free spins":"Background")+" music started"))}function To(){U&&U.playing()&&(U.fade(U.volume(),0,500),setTimeout(()=>U.stop(),500)),ne&&ne.playing()&&(ne.fade(ne.volume(),0,500),setTimeout(()=>ne.stop(),500))}function Xt(){U&&U.playing()&&(U.fade(U.volume(),0,500),setTimeout(()=>U.stop(),500)),ne&&ne.playing()&&(ne.fade(ne.volume(),0,500),setTimeout(()=>ne.stop(),500)),setTimeout(()=>{s(pe)&&ra()},600)}function Ro(){if(U&&U.playing()){const c=U.volume();U.fade(c,0,1e3),setTimeout(()=>{U.stop(),U.volume(.3)},1e3)}}let Kt=R(!1);function Po(){b(Kt,!1),setTimeout(()=>{b(Kt,!0)},10)}let We=null;function Io(){b(pe,!s(pe)),s(pe)?ra():To()}function Oo(){Gt&&s(pe)&&s(we)&&Gt.play()}function Bo(){Ht&&s(pe)&&s(we)&&Ht.play()}let bt=null,Qt=null,tt=null,st=null,at=R("Initializing..."),ze=R(""),ue=[],Ee=R(1e3);const ia=[.4,.8,1,1.6,2,3,5,8,10,15,20,25,30,40,50,60,80,100];let ot=R(5),xe=Bt(()=>ia[s(ot)]),na=R(0),fe=R(!1),rt=R(0),ae=R(!1),qt=R(!1),Co=R(0),Be=!1,Ae=null,Jt=!1,Ne=R(0),De=R(0),it=R(0),Zt=R(0),es=Bt(()=>s(De)>0?(s(it)/s(De)*100).toFixed(2):"0.00"),ts=Bt(()=>s(Ne)>0?(s(Zt)/s(Ne)*100).toFixed(2):"0.00"),G=R(!1),Se=R(0),Ce=R(0),yt=R(0),ss=R(0),xt=R(0),as=R(0),Fo=Bt(()=>s(xt)>0?(s(as)/s(xt)*100).toFixed(2):"0.00"),ce=R(de([]));function Mo(c,u,k){const y=new Date().toLocaleString("fi-FI");let _=`
${"=".repeat(60)}
`;_+=`ROUND #${c} - ${y}
`,_+=`Mode: ${s(G)?"FREE SPINS":"BASE GAME"}
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
`,s(ce).push(_)}function Wo(){const c=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${s(ce).join(`
`)}`,u=new Blob([c],{type:"text/plain"}),k=URL.createObjectURL(u),y=document.createElement("a");y.href=k,y.download=`win-log-${Date.now()}.txt`,y.click(),URL.revokeObjectURL(k)}function zo(){b(ce,de([]))}function No(){s(G)||(b(G,!0),b(Se,10),b(Ce,0),me(yt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),Xt())}const Do={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},Uo={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function la(c){if(c===6)return Math.random()<.55?"h":"emptyslot";const u=s(G)?Uo:Do,k=Math.random();let y=0;const _=Oe.filter(E=>E!=="h"),$=_.reduce((E,B)=>E+u[B],0);for(const E of _)if(y+=u[E]/$,k<y)return E;return"f"}function ca(){const c=[];for(let u=0;u<o;u++){const k=la(u);c.push(k),me(xt),k==="emptyslot"&&me(as)}return c}function da(c){return c<3?{col:0,row:c}:c<6?{col:1,row:c-3}:c===6?{col:2,row:0}:c<10?{col:3,row:c-7}:{col:4,row:c-10}}function nt(c,u){return c===0?u:c===1?3+u:c===2?6:c===3?7+u:c===4?10+u:-1}function Go(){if(s(G)){const c=Math.random();return c<.7?3:c<.92?5:10}else{const c=Math.random();return c<.7?1:c<.92?2:3}}const Ho={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function Vo(){var X;const c=[],u=[];for(let S=0;S<o;S++)lt[S]==="l"&&u.push(S);if(u.length>=5){const S=u.length;b(Se,s(Se)+S),s(G)?console.log(`🎰 FREE SPINS RETRIGGERED! +${S} FREE SPINS! Total: ${s(Se)}`):(b(G,!0),b(Ce,0),me(yt),console.log(`🎰 FREE SPINS TRIGGERED! ${u.length} scatters = ${S} FREE SPINS!`),Xt()),c.push({symbol:"l",count:u.length,payout:0,positions:u,multiplier:1})}const k=[];for(let S=0;S<3;S++)for(let P=0;P<3;P++)for(let C=0;C<1;C++)for(let F=0;F<3;F++)for(let W=0;W<3;W++){const M=[nt(0,S),nt(1,P),nt(2,C),nt(3,F),nt(4,W)];k.push(M)}console.log(`Generated ${k.length} possible paths (should be 81)`);const y=[];for(const S of k){const P=S.map(M=>lt[M]);if(P[0]==="emptyslot"||P[0]==="l")continue;let C=null;for(let M=0;M<P.length;M++)if(P[M]!=="h"&&P[M]!=="emptyslot"&&P[M]!=="l"){C=P[M];break}if(!C)continue;let F=0;const W=new Set;for(let M=0;M<S.length;M++){const Te=S[M],{col:Ye}=da(Te),oe=P[M];(oe===C||oe==="h")&&W.add(Ye)}for(let M=0;M<5&&W.has(M);M++)F++;if(F>=3){const Te=S[0]%3;y.push({symbol:C,length:F,path:S.slice(0,F),startRow:Te})}}const _=[],$=new Map;for(const S of y){const P=`${S.symbol}-${S.path.join(",")}`;$.has(P)||$.set(P,[]),$.get(P).push(S)}for(const[S,P]of $.entries()){const C=Math.max(...P.map(W=>W.length)),F=P.find(W=>W.length===C);F&&_.push(F)}const E=[],B=new Map;for(const S of _)B.has(S.symbol)||B.set(S.symbol,[]),B.get(S.symbol).push(S);const N=[];for(const[S,P]of B.entries()){const C=Math.max(...P.map(W=>W.length)),F=P.filter(W=>W.length===C);N.push(...F)}const H=new Map;for(const S of N){const P=`${S.symbol}-${S.length}`;H.has(P)||H.set(P,[]),H.get(P).push(S)}const V=N.length>0?Go():1;for(const[S,P]of H.entries()){const C=P[0],F=(X=Ho[C.symbol])==null?void 0:X[C.length];if(F!==void 0&&F>0){const W=new Map;for(const oe of P)for(let ee=0;ee<oe.length;ee++)W.has(ee)||W.set(ee,new Set),W.get(ee).add(oe.path[ee]);let M=1;for(let oe=0;oe<C.length;oe++){const ee=W.get(oe);M*=ee?ee.size:1}const Te=F*s(xe)*M*V;console.log(`  ${C.length}x${C.symbol}: ${M} ways × ${F}x × ${s(xe)} bet × ${V} mult = ${Te}`);const Ye=new Set;for(const oe of P)oe.path.forEach(ee=>Ye.add(ee));E.push({symbol:C.symbol,count:C.length,payout:Te,positions:Array.from(Ye),multiplier:V})}}return c.push(...E),c}let he=R(0),Ue=R(de([])),je=R(!1),Ge=R(!1),os=R(!1),rs=R(0);const pa={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function is(c){if(!s(we)||!Ut[c])return;const u=Ut[c];u.currentTime=0,u.play().catch(k=>{console.warn("Äänen toisto epäonnistui:",c,k)})}function Yo(c){ct.forEach(u=>Z.stage.removeChild(u)),ct=[],c.forEach(u=>{u.positions.forEach(k=>{const y=He[k],_=new Ha().rect(0,0,ie,te).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});_.x=y.container.x,_.y=y.container.y,Z.stage.addChild(_),ct.push(_);let $=0,E=1;const B=.05;Z.ticker.add(()=>{$+=E*B,$>=.4&&(E=-1),$<=0&&(E=1),_.alpha=.5+$})})})}function ns(){ct.forEach(c=>Z.stage.removeChild(c)),ct=[]}let lt=ca(),ls,Z,He=[],ct=[];class Xo{constructor(u,k){ge(this,"index");ge(this,"container");ge(this,"offset",0);ge(this,"speed",0);ge(this,"targetSpeed",30);ge(this,"state","idle");ge(this,"stopDelay",0);ge(this,"bounceOffset",0);ge(this,"bounceSpeed",0);ge(this,"bounceFrames",0);this.index=u,this.container=k}start(u){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=u}startSynchronized(u){const k=Lo[s(le)],y=60+u*k;this.start(y)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const u=s(le)==="slow"?.88:s(le)==="medium"?.92:.95;this.speed*=u,this.speed<2.5&&(this.state="bouncing",this.speed=0,this.offset=0,this.bounceOffset=0,this.bounceSpeed=8,is("stop"),Oo())}this.state==="bouncing"&&(this.bounceSpeed*=.85,this.bounceOffset+=this.bounceSpeed,Math.abs(this.bounceSpeed)<.3&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=et&&(this.offset=0,lt[this.index]=la(this.index)))}}draw(){const u=this.container;u.removeChildren();const k=lt[this.index];if(!k||!bt||!bt[k])return;const y=bt[k];if(!y)return;const _=this.offset+this.bounceOffset,$=new zs(y);$.width=ie,$.height=te,$.x=0,$.y=_,u.addChild($)}}let i=R(1);no(async()=>{Z=new xo,await Z.init({width:r,height:n,backgroundAlpha:0}),ls.appendChild(Z.canvas);const c=()=>{const y=window.innerWidth,_=window.innerHeight,$=y/r,E=_/n,B=Math.min($,E,1);b(i,de(B)),Z.stage.scale.set(B),Z.renderer.resize(r,n)};c(),window.addEventListener("resize",c);const u={};try{b(at,"Loading background and UI images..."),ue.push(`Loading background: ${Dt}`),ue.push(`Loading reel frames: ${ta}`),ue.push(`Loading logo: ${sa}`),await Xe.load([{alias:"background",src:Dt},{alias:"reelframes",src:ta},{alias:"logo",src:sa}]),Qt=Fe.from("background"),tt=Fe.from("reelframes"),st=Fe.from("logo"),console.log("✅ Background texture created:",Qt.width,"x",Qt.height),console.log("✅ Reel frames texture created:",tt.width,"x",tt.height),console.log("✅ Logo texture created:",st.width,"x",st.height),ue.push("✅ All UI images loaded"),b(at,"Loading symbols...");const y=[];for(const _ of Oe)y.push({alias:_,src:Nt[_]});await Xe.load(y);for(const _ of Oe){const $=Nt[_];ue.push(`Loading symbol ${_}: ${$}`);try{const E=Fe.from(_);u[_]=E,console.log(`✅ Symbol ${_} loaded:`,E.width,"x",E.height),ue.push(`✅ Symbol ${_} loaded`)}catch(E){const B=`❌ Failed to load symbol ${_} from ${$}: ${E}`;throw ue.push(B),console.error(B),new Error(B)}}bt=u,b(at,"Assets loaded successfully!")}catch(y){b(ze,`Asset loading failed: ${y}`),ue.push(s(ze)),console.error(s(ze));return}console.log("Ladataan ääniefektit...");for(const[y,_]of Object.entries(So)){const $=new Audio;$.src=_,$.preload="auto",$.volume=.7,$.load(),$.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${_} (käytetään hiljaista placeholderia)`)}),Ut[y]=$}[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(y=>({x:y.x+d,y:y.y+g})),He=[];for(let y=0;y<o;y++){const _=da(y),$=_.col,E=_.row,B=300+$*(ie+20),N=250+E*(te+15),H=y===6?B+p:B,V=y===6?N+m:N,X=new qs;X.x=H+d,X.y=V+g;const S=new Ha().rect(0,0,ie,te).fill(16777215);S.x=X.x,S.y=X.y,X.mask=S,Z.stage.addChild(S),Z.stage.addChild(X),He.push(new Xo(y,X))}if(tt){const y=new zs(tt);y.scale.set(1),y.x=250,y.y=200,Z.stage.addChild(y),Yt=y,b(Vt,de(y.width)),console.log("Reel frames lisätty:",y.width.toFixed(0),"x",y.height.toFixed(0)),console.log("Control panel leveys päivitetty:",s(Vt).toFixed(0))}if(st){const y=new zs(st);y.scale.set(Y),y.x=(Z.renderer.width-y.width)/2+T,y.y=D,Z.stage.addChild(y),console.log("Logo lisätty päällimmäiseen layeriin:",y.width.toFixed(0),"x",y.height.toFixed(0))}oa(),Z.ticker.add(Ko)});function Ko(){for(const c of He)c.update(),c.draw();if(!s(je)&&!Jt&&He.every(c=>c.state==="stopped")){Jt=!0,Ro();const c=Vo();console.log(`Checking wins, found ${c.length} wins`),c.length>0?(b(Ue,de(c)),b(he,de(c.reduce((u,k)=>u+k.payout,0))),Mo(s(Ne),c,s(he)),Qo(s(he)),b(je,!0),b(Co,de(Date.now())),console.log(`🎉 VOITTO! ${s(he)} pistettä! Uusi saldo: ${s(Ee)}`),console.log(`isShowingWin set to: ${s(je)}, totalWin: ${s(he)}`),c.forEach(u=>{const k=u.multiplier?` (${u.multiplier}x multiplier)`:"";console.log(`${u.count}x ${u.symbol} = ${u.payout} pistettä${k}`)}),Yo(c),is("win"),s(fe)&&!Be&&(Be=!0,Ae=window.setTimeout(()=>{s(je)&&s(fe)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),b(je,!1),ns()),Ae=window.setTimeout(()=>{Be=!1,cs()},200)},1500))):(console.log("No wins found this spin"),s(fe)&&!Be&&(Be=!0,Ae=window.setTimeout(()=>{Be=!1,cs()},500))),s(G)&&s(Se)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${s(Ce)}`),setTimeout(()=>{b(rs,de(s(Ce))),b(os,!0)},2e3))}}function ua(){if(!s(G)&&U&&s(pe)&&!U.playing()&&(U.play(),console.log("🎵 Background music started on first spin")),Po(),s(G)&&s(Se)>0)me(Se,-1),me(ss),console.log(`🎰 FREE SPIN! Remaining: ${s(Se)}`);else if(!s(G)){if(s(Ee)<s(xe)){alert(`Not enough credits! Balance: ${s(Ee)}, Bet: ${s(xe)}`),_t();return}b(Ee,s(Ee)-s(xe)),me(Ne),b(De,s(De)+s(xe))}Ae!==null&&(clearTimeout(Ae),Ae=null),b(Ue,de([])),b(he,0),b(je,!1),Jt=!1,ns(),lt=ca(),He.forEach((c,u)=>{c.startSynchronized(u)}),is("spin")}function Qo(c){if(b(Ee,s(Ee)+c),b(it,s(it)+c),b(na,de(c)),s(G)&&b(Ce,s(Ce)+c),c>0){me(Zt);const u=c/s(xe);u>=10&&Bo(),We&&(u>=50?We.show():u>=20?setTimeout(()=>We.show(),200):u>=10&&setTimeout(()=>We.show(),400))}}function qo(){s(ot)<ia.length-1&&me(ot)}function Jo(){s(ot)>0&&me(ot,-1)}function Le(c){b(fe,!0),b(rt,de(c)),b(ae,!1),cs()}function _t(){b(fe,!1),b(rt,0),Be=!1,Ae!==null&&(clearTimeout(Ae),Ae=null)}function cs(){if(!s(fe)||s(rt)<=0){_t();return}console.log(`Autoplay: Starting spin ${s(rt)} rounds left`),ua(),me(rt,-1)}function Zo(){confirm("Reset all statistics?")&&(b(Ne,0),b(De,0),b(it,0),b(Zt,0),b(yt,0),b(ss,0),b(xt,0),b(as,0))}var fa=En();$r(c=>{var u=gn();f(Mt(u)),q(c,u)});var ha=Mt(fa);{var er=c=>{var u=yn(),k=f(w(u),2),y=f(w(k));A(k);var _=f(k,2);{var $=C=>{var F=mn(),W=f(w(F));A(F),ve(()=>z(W,` ${s(ze)??""}`)),q(C,F)};be(_,C=>{s(ze)&&C($)})}var E=f(_,2),B=f(w(E));B.nodeValue=` ${_e??""}`,A(E);var N=f(E,2),H=f(w(N));H.nodeValue=` ${Dt??""}`,A(N);var V=f(N,2),X=f(w(V));A(V);var S=f(V,2);{var P=C=>{var F=bn(),W=w(F),M=w(W);A(W);var Te=f(W,2);Ya(Te,17,()=>ue,Va,(Ye,oe)=>{var ee=vn(),yr=w(ee,!0);A(ee),ve(()=>z(yr,s(oe))),q(Ye,ee)}),A(F),ve(()=>z(M,`Log (${ue.length??""})`)),q(C,F)};be(S,C=>{ue.length>0&&C(P)})}A(u),ve(()=>{z(y,` ${s(at)??""}`),z(X,` ${Nt.a??""}`)}),q(c,u)};be(ha,c=>{(s(at)!=="Assets loaded successfully!"||s(ze))&&c(er)})}var ga=f(ha,2);{var tr=c=>{var u=wn(),k=f(w(u),2),y=w(k);A(k);var _=f(k,2);Ya(_,17,()=>s(Ue),Va,(N,H)=>{var V=xn(),X=w(V);A(V),ve(S=>z(X,`${s(H).count??""} × ${pa[s(H).symbol]??""} = ${S??""} pistettä`),[()=>s(H).payout.toFixed(2)]),q(N,V)});var $=f(_,2);{var E=N=>{var H=_n(),V=w(H),X=w(V);A(V),A(H),ve(()=>z(X,`✨ ${s(Ue)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),q(N,H)};be($,N=>{s(Ue).length>0&&s(Ue)[0].multiplier>1&&N(E)})}var B=f($,2);A(u),ve(N=>z(y,`${N??""} pistettä`),[()=>s(he).toFixed(2)]),O("click",B,()=>{b(je,!1),ns(),console.log("Win popup closed, ready for next spin")}),q(c,u)};be(ga,c=>{s(he)>0&&s(je)&&c(tr)})}var ma=f(ga,2);{var sr=c=>{var u=An(),k=f(w(u),8);A(u),ve(y=>x(u,"style",`
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
    max-height: ${y??""}px;
    overflow-y: auto;
    font-size: ${s(i)??""}em;
  `),[()=>Math.min(n*s(i)*.8,80*window.innerHeight/100)]),O("click",k,()=>{b(Ge,!1)}),q(c,u)};be(ma,c=>{s(Ge)&&c(sr)})}var va=f(ma,2);{var ar=c=>{var u=$n(),k=w(u),y=f(w(k),4),_=w(y,!0);A(y);var $=f(y,2);A(k),A(u),ve(E=>z(_,E),[()=>s(rs).toFixed(2)]),O("click",$,()=>{b(os,!1),b(G,!1),b(Ce,0),b(rs,0),Xt()}),O("mouseenter",$,E=>{E.currentTarget.style.transform="scale(1.05)",E.currentTarget.style.boxShadow="0 6px 20px rgba(255, 215, 0, 0.6)"}),O("mouseleave",$,E=>{E.currentTarget.style.transform="scale(1)",E.currentTarget.style.boxShadow="0 4px 15px rgba(255, 215, 0, 0.4)"}),q(c,u)};be(va,c=>{s(os)&&c(ar)})}var ba=f(va,2),ds=w(ba),dt=w(ds);x(dt,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${r}px;
        height: ${n}px;
      `);var ps=w(dt),us=f(ps,2),ya=w(us);{var or=c=>{var u=kn(),k=w(u),y=f(k,2),_=f(y,2),$=f(_,2),E=f($,2),B=f(E,2),N=f(B,2),H=f(N,2),V=f(H,2),X=f(V,2);A(u),ve(()=>{x(u,"style",`
    position: absolute;
    bottom: ${(h+20)*s(i)}px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.95);
    padding: ${20*s(i)}px;
    border-radius: ${15*s(i)}px;
    border: ${3*s(i)}px solid #0088ff;
    box-shadow: 0 ${8*s(i)}px ${30*s(i)}px rgba(0, 136, 255, 0.6);
    z-index: 2000;
    min-width: ${250*s(i)}px;
  `),x(k,"style",`color: white; font-weight: bold; margin-bottom: ${15*s(i)}px; text-align: center; font-size: ${18*s(i)}px;`),x(y,"style",`
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
      `),x(_,"style",`
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
      `),x($,"style",`
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
      `),x(E,"style",`
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
      `),x(B,"style",`
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
      `),x(N,"style",`
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
      `),x(H,"style",`
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
      `),x(V,"style",`
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
      `),x(X,"style",`
        width: 100%;
        padding: ${10*s(i)}px;
        background: rgba(255, 255, 255, 0.1);
        color: #aaa;
        border: ${1*s(i)}px solid #555;
        border-radius: ${8*s(i)}px;
        cursor: pointer;
        font-size: ${14*s(i)}px;
      `)}),O("click",y,()=>{Le(10),b(ae,!1)}),O("click",_,()=>{Le(25),b(ae,!1)}),O("click",$,()=>{Le(50),b(ae,!1)}),O("click",E,()=>{Le(100),b(ae,!1)}),O("click",B,()=>{Le(200),b(ae,!1)}),O("click",N,()=>{Le(500),b(ae,!1)}),O("click",H,()=>{Le(1e3),b(ae,!1)}),O("click",V,()=>{Le(5e3),b(ae,!1)}),O("click",X,()=>{b(ae,!1)}),q(c,u)};be(ya,c=>{s(ae)&&c(or)})}var fs=f(ya,2);x(fs,"src",`${Q??""}/Control_leftend.png`);var wt=f(fs,2),At=w(wt),xa=w(At),hs=f(xa,2),gs=w(hs),$t=f(gs,2),rr=w($t,!0);A($t);var _a=f($t,2);A(hs),A(At);var ms=f(At,2);x(ms,"src",`${Q??""}/Control_divider.png`);var kt=f(ms,2),wa=w(kt),vs=f(wa,2),ir=w(vs,!0);A(vs),A(kt);var bs=f(kt,2);x(bs,"src",`${Q??""}/Control_divider.png`);var ys=f(bs,2),xs=w(ys),Aa=w(xs);A(xs),A(ys);var _s=f(ys,2);x(_s,"src",`${Q??""}/Control_divider.png`);var Et=f(_s,2),St=w(Et),$a=f(St,2);A(Et);var ws=f(Et,2);x(ws,"src",`${Q??""}/Control_divider.png`);var jt=f(ws,2),Lt=w(jt),ka=f(Lt,2);A(jt);var Tt=f(jt,2),Ea=w(Tt),As=f(Ea,2),nr=w(As,!0);A(As),A(Tt);var $s=f(Tt,2);x($s,"src",`${Q??""}/Control_divider.png`);var Sa=f($s,2);A(wt);var ja=f(wt,2);x(ja,"src",`${Q??""}/Control_rightend.png`),A(us),A(dt),Ua(dt,c=>ls=c,()=>ls);var Rt=f(dt,2);Rt.textContent=`🛠️ DEBUG v${a}`;var Pt=f(Rt,2);Ua(Pt,c=>We=c,()=>We);var It=f(Pt,2),La=f(w(It),2);La.textContent=`v${a}`;var ks=f(La,2),Ta=f(w(ks),2),lr=w(Ta,!0);A(Ta),A(ks);var Es=f(ks,2),Ra=f(w(Es),2),cr=w(Ra,!0);A(Ra),A(Es);var Ss=f(Es,2),Pa=f(w(Ss),2),dr=w(Pa,!0);A(Pa),A(Ss);var js=f(Ss,2),Ls=f(w(js),2),pr=w(Ls);A(Ls),A(js);var Ts=f(js,2),Rs=f(w(Ts),2),ur=w(Rs);A(Rs),A(Ts);var Ps=f(Ts,2),Ia=f(w(Ps),2),fr=w(Ia,!0);A(Ia),A(Ps);var Is=f(Ps,2),Oa=f(w(Is),2),hr=w(Oa,!0);A(Oa),A(Is);var Os=f(Is,2),Ba=f(w(Os),2),gr=w(Ba);A(Ba),A(Os);var Ca=f(Os,2),Fa=f(Ca,2),Ve=w(Fa),mr=w(Ve);A(Ve);var Ot=f(Ve,2),pt=f(Ot,2),vr=w(pt);A(pt);var Bs=f(pt,2);A(Fa),A(It);var ut=f(It,2),br=w(ut,!0);A(ut),A(ds),A(ba),ve((c,u,k,y,_,$,E,B)=>{x(ds,"style",`
    position: relative;
    width: ${r*s(i)}px;
    height: ${n*s(i)}px;
  `),x(ps,"style",`
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
        `),x(us,"style",`
        position: absolute;
        left: ${((Yt?Yt.x:j)+L)*s(i)}px;
        top: ${(v+J)*s(i)}px;
        width: ${s(Vt)*s(i)}px;
        height: ${h*s(i)}px;
        display: flex;
        align-items: center;
        z-index: 1000;
      `),x(fs,"style",`height: ${h*s(i)}px; flex-shrink: 0;`),x(wt,"style",`
    flex-grow: 1;
    height: ${h*s(i)}px;
    background-image: url('${Q??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 ${20*s(i)}px;
  `),x(At,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*s(i)}px;`),x(xa,"style",`color: #00ff00; font-size: ${12*s(i)}px; font-weight: bold;`),x(hs,"style",`display: flex; gap: ${5*s(i)}px; align-items: center;`),x(gs,"style",`
            width: ${40*s(i)}px;
            height: ${40*s(i)}px;
            background-image: url('${Q??""}/Control_lowerbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x($t,"style",`
          color: #fff;
          font-size: ${18*s(i)}px;
          font-weight: bold;
          min-width: ${80*s(i)}px;
          text-align: center;
          font-family: 'Courier New', monospace;
        `),z(rr,c),x(_a,"style",`
            width: ${40*s(i)}px;
            height: ${40*s(i)}px;
            background-image: url('${Q??""}/Control_upperbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(ms,"style",`height: ${h*.8*s(i)}px; flex-shrink: 0;`),x(kt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*s(i)}px;`),x(wa,"style",`color: #00ff00; font-size: ${12*s(i)}px; font-weight: bold;`),x(vs,"style",`
        color: #fff;
        font-size: ${20*s(i)}px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      `),z(ir,u),x(bs,"style",`height: ${h*.8*s(i)}px; flex-shrink: 0;`),di(xs,1,`play-button-wrapper ${(s(Kt)?"glare-animate":"")??""}`,"svelte-tijp0o"),x(Aa,"style",`
            width: ${130*s(i)}px;
            height: ${130*s(i)}px;
            background-image: url('${Q??""}/Control_playbutton.png');
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
          `),x(_s,"style",`height: ${h*.8*s(i)}px; flex-shrink: 0;`),x(Et,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*s(i)}px;`),x(St,"style",`
          width: ${50*s(i)}px;
          height: ${50*s(i)}px;
          background-image: url('${Q??""}/${(s(fe)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),x(St,"title",s(fe)?"Stop Autoplay":"Autoplay"),x($a,"src",`${Q??""}/${(s(fe)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),x($a,"style",`width: ${50*s(i)}px; height: auto;`),x(ws,"style",`height: ${h*.8*s(i)}px; flex-shrink: 0;`),x(jt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*s(i)}px;`),x(Lt,"style",`
          width: ${50*s(i)}px;
          height: ${50*s(i)}px;
          background-image: url('${Q??""}/Control_fastplay_select.png');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),x(Lt,"title",`Spin Speed: ${(s(le)==="slow"?"Slow":s(le)==="medium"?"Medium":"Fast")??""}`),x(ka,"src",`${Q??""}/${(s(le)==="slow"?"Control_bar_deselect.png":s(le)==="medium"?"Control_half_bar_select.png":"Control_bar_select.png")??""}`),x(ka,"style",`width: ${50*s(i)}px; height: auto;`),x(Tt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*s(i)}px;`),x(Ea,"style",`color: #00ff00; font-size: ${12*s(i)}px; font-weight: bold;`),x(As,"style",`
        color: #ffd700;
        font-size: ${20*s(i)}px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      `),z(nr,k),x($s,"style",`height: ${h*.8*s(i)}px; flex-shrink: 0;`),x(Sa,"style",`
        width: ${50*s(i)}px;
        height: ${50*s(i)}px;
        background-image: url('${Q??""}/Control_menubar.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),x(ja,"style",`height: ${h*s(i)}px; flex-shrink: 0;`),x(Rt,"style",`
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
  `),x(Pt,"winlevel",s(he)/s(xe)>=50?"jackpot":s(he)/s(xe)>=20?"medium":"small"),x(Pt,"winamount",s(he)),x(It,"style",`
  position: absolute;
  top: 20px;
  left: 20px;
  display: ${(s(qt)?"block":"none")??""};
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
`),z(lr,y),z(cr,_),z(dr,$),x(Ls,"style",`color: ${E??""};`),z(pr,`${s(es)??""}%`),x(Rs,"style",`color: ${B??""};`),z(ur,`${s(ts)??""}%`),z(fr,s(yt)),z(hr,s(ss)),z(gr,`${s(Fo)??""}%`),Ve.disabled=s(ce).length===0,x(Ve,"style",`
        width: 100%;
        padding: 5px;
        background: ${(s(ce).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(s(ce).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(s(ce).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(s(ce).length>0?"1":"0.5")??""};
      `),z(mr,`Download Win Log (${s(ce).length??""})`),Ot.disabled=s(ce).length===0,x(Ot,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(s(ce).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(s(ce).length>0?"1":"0.5")??""};
      `),x(pt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(s(pe)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(s(pe)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),z(vr,`🎵 Music: ${(s(pe)?"ON":"OFF")??""}`),Bs.disabled=s(G),x(Bs,"style",`
        width: 100%;
        padding: 5px;
        background: ${(s(G)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(s(G)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(s(G)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(s(G)?"0.5":"1")??""};
      `),x(ut,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(s(we)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(s(we)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),x(ut,"title",s(we)?"Mykistä äänet":"Laita äänet päälle"),z(br,s(we)?"🔊":"🔇")},[()=>s(xe).toFixed(2),()=>s(Ee).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>s(na).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>s(Ne).toLocaleString(),()=>s(De).toLocaleString(),()=>s(it).toLocaleString(),()=>parseFloat(s(es))>=95?"#00ff00":parseFloat(s(es))>=85?"#ffff00":"#ff6666",()=>parseFloat(s(ts))>=30?"#00ff00":parseFloat(s(ts))>=20?"#ffff00":"#ff6666"]),O("click",ps,()=>{b(Ge,!s(Ge))}),O("click",gs,Jo),O("click",_a,qo),O("click",Aa,()=>{s(fe)&&_t(),ua()}),O("click",St,()=>{s(fe)?_t():b(ae,!s(ae))}),O("click",Lt,()=>{s(le)==="slow"?b(le,"medium"):s(le)==="medium"?b(le,"fast"):b(le,"slow")}),O("click",Sa,()=>{b(Ge,!s(Ge))}),O("click",Rt,()=>{b(qt,!s(qt))}),O("click",Ca,Zo),O("click",Ve,Wo),O("click",Ot,zo),O("click",pt,Io),O("click",Bs,No),O("click",ut,()=>{b(we,!s(we))}),q(t,fa),lo()}var jn=se('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),Ln=se('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function Tn(t,e){io(e,!1);let a=Zr(e,"isAuthenticated",12,!1),o=Hs(""),r=Hs(!1);const n="slot2024";function l(){s(o)===n?(a(!0),sessionStorage.setItem("gameAuthenticated","true")):(b(r,!0),b(o,""),setTimeout(()=>b(r,!1),3e3))}no(()=>{a(sessionStorage.getItem("gameAuthenticated")==="true")}),Sr();var d=Er(),g=Mt(d);{var m=p=>{var v=Ln(),h=w(v),j=f(w(h),4),L=w(j);pi(L),Jr(2),A(j);var J=f(j,2);{var Y=T=>{var D=jn();q(T,D)};be(J,T=>{s(r)&&T(Y)})}A(h),A(v),fi(L,()=>s(o),T=>b(o,T)),O("submit",j,hi(l)),q(p,v)};be(g,p=>{a()||p(m)})}q(t,d),lo()}var Rn=se("<!> <!>",1);function Un(t){let e=Hs(!1);var a=Rn(),o=Mt(a);Tn(o,{get isAuthenticated(){return s(e)},set isAuthenticated(l){b(e,l)},$$legacy:!0});var r=f(o,2);{var n=l=>{Sn(l,{})};be(r,l=>{s(e)&&l(n)})}q(t,a)}export{mo as A,fo as C,wi as R,vi as S,vo as V,Un as _,mi as u};
