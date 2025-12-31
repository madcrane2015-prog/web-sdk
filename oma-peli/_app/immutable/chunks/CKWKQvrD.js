const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Ctoz-AP3.js","./BaqJxISf.js","./CgWia7Op.js","./EjnPGRTu.js","./Bkkaav7K.js","./C2GHuDhf.js","./BV5XQy5s.js","./CYEEUqcR.js"])))=>i.map(i=>d[i]);
var Rr=Object.defineProperty;var Ir=(t,e,s)=>e in t?Rr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var ve=(t,e,s)=>Ir(t,typeof e!="symbol"?e+"":e,s);import{g as Or,l as Cr,t as Z,i as Br,j as Fr,a as q,k as I,e as Mr}from"./XZc5ccWP.js";import{i as Wr}from"./DIdOt9--.js";import{y as be,j as zr,a8 as Nr,F as a,Q as Dr,aa as Ur,ab as Ha,h as Va,e as Gs,k as ht,l as Gr,ac as po,w as uo,ad as Hr,q as fo,a7 as Vr,U as Yr,a2 as Ya,ar as Hs,z as Xa,as as Xr,at as Kr,au as Qr,o as qr,av as Jr,aw as Zr,ax as ei,ay as ti,b as si,az as ai,aA as oi,a6 as ri,aB as ii,aC as ni,D as li,L as ci,p as go,ah as L,ag as ho,T as y,aD as me,I as Dt,s as f,f as mt,c as w,r as A,t as pe,a as vo,aE as di,aF as Zs}from"./EjnPGRTu.js";import{_ as Ka,p as ue,i as re}from"./CgWia7Op.js";import{s as z}from"./2z5c-rnE.js";import{b as Qa,p as pi}from"./CHseoIM1.js";import{b as xe}from"./D8ncw53E.js";import{e as Pe,E as O,a as ui,C as ra,Q as ea,V as ta,N as Vs,D as ie,H as fi,p as Be,a0 as Je,a1 as Fe,a2 as gi,w as Te,a3 as bt,a4 as mo,a5 as Ze,a6 as Ae,a7 as Ht,a8 as bo,a9 as hi,aa as Ys,y as Xs}from"./BaqJxISf.js";import{A as vi,B as qa,G as mi,a as Ja}from"./Bkkaav7K.js";function Za(t,e){return e}function bi(t,e,s,o){for(var r=[],i=e.length,l=0;l<i;l++)Qr(e[l].e,r,!0);var c=i>0&&r.length===0&&s!==null;if(c){var h=s.parentNode;qr(h),h.append(s),o.clear(),Le(t,e[0].prev,e[i-1].next)}Jr(r,()=>{for(var v=0;v<i;v++){var u=e[v];c||(o.delete(u.k),Le(t,u.prev,u.next)),Zr(u.e,!c)}})}function eo(t,e,s,o,r,i=null){var l=t,c={flags:e,items:new Map,first:null};be&&zr();var h=null,v=!1,u=Dr(()=>{var m=s();return Vr(m)?m:m==null?[]:fo(m)});Nr(()=>{var m=a(u),g=m.length;if(v&&g===0)return;v=g===0;let E=!1;if(be){var T=l.data===Ur;T!==(g===0)&&(l=Ha(),Va(l),Gs(!1),E=!0)}if(be){for(var ee=null,G,P=0;P<g;P++){if(ht.nodeType===8&&ht.data===Gr){l=ht,E=!0,Gs(!1);break}var N=m[P],ke=o(N,P);G=yo(ht,c,ee,null,N,ke,P,r,e,s),c.items.set(ke,G),ee=G}g>0&&Va(Ha())}be||yi(m,c,l,r,e,o,s),i!==null&&(g===0?h?po(h):h=uo(()=>i(l)):h!==null&&Hr(h,()=>{h=null})),E&&Gs(!0),a(u)}),be&&(l=ht)}function yi(t,e,s,o,r,i,l){var c=t.length,h=e.items,v=e.first,u=v,m,g=null,E=[],T=[],ee,G,P,N;for(N=0;N<c;N+=1){if(ee=t[N],G=i(ee,N),P=h.get(G),P===void 0){var ke=u?u.e.nodes_start:s;g=yo(ke,e,g,g===null?e.first:g.next,ee,G,N,o,r,l),h.set(G,g),E=[],T=[],u=g.next;continue}if(xi(P,ee,N),(P.e.f&Hs)!==0&&po(P.e),P!==u){if(m!==void 0&&m.has(P)){if(E.length<T.length){var ne=T[0],ae;g=ne.prev;var Vt=E[0],tt=E[E.length-1];for(ae=0;ae<E.length;ae+=1)to(E[ae],ne,s);for(ae=0;ae<T.length;ae+=1)m.delete(T[ae]);Le(e,Vt.prev,tt.next),Le(e,g,Vt),Le(e,tt,ne),u=ne,g=tt,N-=1,E=[],T=[]}else m.delete(P),to(P,u,s),Le(e,P.prev,P.next),Le(e,P,g===null?e.first:g.next),Le(e,g,P),g=P;continue}for(E=[],T=[];u!==null&&u.k!==G;)(u.e.f&Hs)===0&&(m??(m=new Set)).add(u),T.push(u),u=u.next;if(u===null)continue;P=u}E.push(P),g=P,u=P.next}if(u!==null||m!==void 0){for(var Re=m===void 0?[]:fo(m);u!==null;)(u.e.f&Hs)===0&&Re.push(u),u=u.next;var yt=Re.length;if(yt>0){var J=null;bi(e,Re,J,h)}}Xa.first=e.first&&e.first.e,Xa.last=g&&g.e}function xi(t,e,s,o){Kr(t.v,e),t.i=s}function yo(t,e,s,o,r,i,l,c,h,v){var u=(h&ei)!==0,m=(h&ti)===0,g=u?m?Yr(r):Ya(r):r,E=(h&Xr)===0?l:Ya(l),T={i:E,v:g,k:i,a:null,e:null,prev:s,next:o};try{return T.e=uo(()=>c(t,g,E,v),be),T.e.prev=s&&s.e,T.e.next=o&&o.e,s===null?e.first=T:(s.next=T,s.e.next=T.e),o!==null&&(o.prev=T,o.e.prev=T.e),T}finally{}}function to(t,e,s){for(var o=t.next?t.next.e.nodes_start:s,r=e?e.e.nodes_start:s,i=t.e.nodes_start;i!==o;){var l=si(i);r.before(i),i=l}}function Le(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function _i(t,e,s){var o=t==null?"":""+t;return o=o?o+" "+e:e,o===""?null:o}function wi(t,e,s,o,r,i){var l=t.__className;if(be||l!==s){var c=_i(s,o);(!be||c!==t.getAttribute("class"))&&(c==null?t.removeAttribute("class"):t.className=c),t.__className=s}return i}function Ai(t){if(be){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var o=t.value;x(t,"value",null),t.value=o}if(t.hasAttribute("checked")){var r=t.checked;x(t,"checked",null),t.checked=r}}};t.__on_r=s,ai(s),Or()}}function x(t,e,s,o){var r=t.__attributes??(t.__attributes={});be&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[oi]=s),s==null?t.removeAttribute(e):typeof s!="string"&&ki(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var so=new Map;function ki(t){var e=so.get(t.nodeName);if(e)return e;so.set(t.nodeName,e=[]);for(var s,o=t,r=Element.prototype;r!==o;){s=ii(o);for(var i in s)s[i].set&&e.push(i);o=ri(o)}return e}function $i(t,e,s=e){var o=ni();Cr(t,"input",r=>{var i=r?t.defaultValue:t.value;if(i=Ks(t)?Qs(i):i,s(i),o&&i!==(i=e())){var l=t.selectionStart,c=t.selectionEnd;t.value=i??"",c!==null&&(t.selectionStart=l,t.selectionEnd=Math.min(c,t.value.length))}}),(be&&t.defaultValue!==t.value||li(e)==null&&t.value)&&s(Ks(t)?Qs(t.value):t.value),ci(()=>{var r=e();Ks(t)&&r===Qs(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function Ks(t){var e=t.type;return e==="number"||e==="range"}function Qs(t){return t===""?null:+t}function ji(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const sa=[];Pe.handleByNamedList(O.Environment,sa);async function Si(t){if(!t)for(let e=0;e<sa.length;e++){const s=sa[e];if(s.value.test()){await s.value.load();return}}}let vt;function Ei(){if(typeof vt=="boolean")return vt;try{vt=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{vt=!1}return vt}var xo=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(xo||{});class Li{constructor(e){this.items=[],this._name=e}emit(e,s,o,r,i,l,c,h){const{name:v,items:u}=this;for(let m=0,g=u.length;m<g;m++)u[m][v](e,s,o,r,i,l,c,h);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Ti=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],_o=class wo extends ui{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...Ti,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Si(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const o in this._systemsHash)e={...this._systemsHash[o].constructor.defaultOptions,...e};e={...wo.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let o=0;o<this.runners.init.items.length;o++)await this.runners.init.items[o].init(e);this._initOptions=e}render(e,s){let o=e;if(o instanceof ra&&(o={container:o},s&&(ea(ta,"passing a second argument is deprecated, please use render options instead"),o.target=s.renderTexture)),o.target||(o.target=this.view.renderTarget),o.target===this.view.renderTarget&&(this._lastObjectRendered=o.container,o.clearColor??(o.clearColor=this.background.colorRgba),o.clear??(o.clear=this.background.clearBeforeRender)),o.clearColor){const r=Array.isArray(o.clearColor)&&o.clearColor.length===4;o.clearColor=r?o.clearColor:Vs.shared.setValue(o.clearColor).toArray()}o.transform||(o.container.updateLocalTransform(),o.transform=o.container.localTransform),o.container.enableRenderGroup(),this.runners.prerender.emit(o),this.runners.renderStart.emit(o),this.runners.render.emit(o),this.runners.renderEnd.emit(o),this.runners.postrender.emit(o)}resize(e,s,o){const r=this.view.resolution;this.view.resize(e,s,o),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),o!==void 0&&o!==r&&this.runners.resolutionChange.emit(o)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=xo.ALL);const{clear:o,clearColor:r,target:i}=e;Vs.shared.setValue(r??this.background.colorRgba),s.renderTarget.clear(i,o,Vs.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new Li(s)})}_addSystems(e){let s;for(s in e){const o=e[s];this._addSystem(o.value,o.name)}}_addSystem(e,s){const o=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=o,this._systemsHash[s]=o;for(const r in this.runners)this.runners[r].add(o);return this}_addPipes(e,s){const o=s.reduce((r,i)=>(r[i.name]=i.value,r),{});e.forEach(r=>{const i=r.value,l=r.name,c=o[l];this.renderPipes[l]=new i(this,c?new c:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Ei())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};_o.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Ao=_o,Ut;function Pi(t){return Ut!==void 0||(Ut=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??Ao.defaultOptions.failIfMajorPerformanceCaveat};try{if(!ie.get().getWebGLRenderingContext())return!1;let r=ie.get().createCanvas().getContext("webgl",e);const i=!!((s=r==null?void 0:r.getContextAttributes())!=null&&s.stencil);if(r){const l=r.getExtension("WEBGL_lose_context");l&&l.loseContext()}return r=null,i}catch{return!1}})()),Ut}let Gt;async function Ri(t={}){return Gt!==void 0||(Gt=await(async()=>{const e=ie.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),Gt}const ao=["webgl","webgpu","canvas"];async function Ii(t){let e=[];t.preference?(e.push(t.preference),ao.forEach(i=>{i!==t.preference&&e.push(i)})):e=ao.slice();let s,o={};for(let i=0;i<e.length;i++){const l=e[i];if(l==="webgpu"&&await Ri()){const{WebGPURenderer:c}=await Ka(async()=>{const{WebGPURenderer:h}=await import("./Ctoz-AP3.js");return{WebGPURenderer:h}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=c,o={...t,...t.webgpu};break}else if(l==="webgl"&&Pi(t.failIfMajorPerformanceCaveat??Ao.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:c}=await Ka(async()=>{const{WebGLRenderer:h}=await import("./CYEEUqcR.js");return{WebGLRenderer:h}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=c,o={...t,...t.webgl};break}else if(l==="canvas")throw o={...t},new Error("CanvasRenderer is not yet implemented")}if(delete o.webgpu,delete o.webgl,!s)throw new Error("No available renderer for the current environment");const r=new s;return await r.init(o),r}const ko="8.8.1";class $o{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,ko)}static destroy(){}}$o.extension=O.Application;class Oi{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,ko)}destroy(){this._renderer=null}}Oi.extension={type:[O.WebGLSystem,O.WebGPUSystem],name:"initHook",priority:-10};const jo=class aa{constructor(...e){this.stage=new ra,e[0]!==void 0&&ea(ta,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Ii(e),aa._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return ea(ta,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const o=aa._plugins.slice(0);o.reverse(),o.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};jo._plugins=[];let So=jo;Pe.handleByList(O.Application,So._plugins);Pe.add($o);class Eo extends vi{constructor(e,s){super();const{textures:o,data:r}=e;Object.keys(r.pages).forEach(i=>{const l=r.pages[parseInt(i,10)],c=o[l.id];this.pages.push({texture:c})}),Object.keys(r.chars).forEach(i=>{const l=r.chars[i],{frame:c,source:h}=o[l.page],v=new fi(l.x+c.x,l.y+c.y,l.width,l.height),u=new Be({source:h,frame:v});this.chars[i]={id:i.codePointAt(0),xOffset:l.xOffset,yOffset:l.yOffset,xAdvance:l.xAdvance,kerning:l.kerning??{},texture:u}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){qa.install(e)}static uninstall(e){qa.uninstall(e)}}const qs={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const m in e){const g=e[m].match(/^[a-z]+/gm)[0],E=e[m].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),T={};for(const ee in E){const G=E[ee].split("="),P=G[0],N=G[1].replace(/"/gm,""),ke=parseFloat(N),ne=isNaN(ke)?N:ke;T[P]=ne}s[g].push(T)}const o={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=s.info,[i]=s.common,[l]=s.distanceField??[];l&&(o.distanceField={range:parseInt(l.distanceRange,10),type:l.fieldType}),o.fontSize=parseInt(r.size,10),o.fontFamily=r.face,o.lineHeight=parseInt(i.lineHeight,10);const c=s.page;for(let m=0;m<c.length;m++)o.pages.push({id:parseInt(c[m].id,10)||0,file:c[m].file});const h={};o.baseLineOffset=o.lineHeight-parseInt(i.base,10);const v=s.char;for(let m=0;m<v.length;m++){const g=v[m],E=parseInt(g.id,10);let T=g.letter??g.char??String.fromCharCode(E);T==="space"&&(T=" "),h[E]=T,o.chars[T]={id:E,page:parseInt(g.page,10)||0,x:parseInt(g.x,10),y:parseInt(g.y,10),width:parseInt(g.width,10),height:parseInt(g.height,10),xOffset:parseInt(g.xoffset,10),yOffset:parseInt(g.yoffset,10),xAdvance:parseInt(g.xadvance,10),kerning:{}}}const u=s.kerning||[];for(let m=0;m<u.length;m++){const g=parseInt(u[m].first,10),E=parseInt(u[m].second,10),T=parseInt(u[m].amount,10);o.chars[h[E]].kerning[h[g]]=T}return o}},oo={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],o=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const i=t.getElementsByTagName("page"),l=t.getElementsByTagName("char"),c=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(o.getAttribute("lineHeight"),10);for(let v=0;v<i.length;v++)e.pages.push({id:parseInt(i[v].getAttribute("id"),10)||0,file:i[v].getAttribute("file")});const h={};e.baseLineOffset=e.lineHeight-parseInt(o.getAttribute("base"),10);for(let v=0;v<l.length;v++){const u=l[v],m=parseInt(u.getAttribute("id"),10);let g=u.getAttribute("letter")??u.getAttribute("char")??String.fromCharCode(m);g==="space"&&(g=" "),h[m]=g,e.chars[g]={id:m,page:parseInt(u.getAttribute("page"),10)||0,x:parseInt(u.getAttribute("x"),10),y:parseInt(u.getAttribute("y"),10),width:parseInt(u.getAttribute("width"),10),height:parseInt(u.getAttribute("height"),10),xOffset:parseInt(u.getAttribute("xoffset"),10),yOffset:parseInt(u.getAttribute("yoffset"),10),xAdvance:parseInt(u.getAttribute("xadvance"),10),kerning:{}}}for(let v=0;v<c.length;v++){const u=parseInt(c[v].getAttribute("first"),10),m=parseInt(c[v].getAttribute("second"),10),g=parseInt(c[v].getAttribute("amount"),10);e.chars[h[m]].kerning[h[u]]=g}return e}},ro={test(t){return typeof t=="string"&&t.includes("<font>")?oo.test(ie.get().parseXML(t)):!1},parse(t){return oo.parse(ie.get().parseXML(t))}},Ci=[".xml",".fnt"],Bi={extension:{type:O.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof Eo,getCacheableAssets(t,e){const s={};return t.forEach(o=>{s[o]=e,s[`${o}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},Fi={extension:{type:O.LoadParser,priority:Je.Normal},name:"loadBitmapFont",test(t){return Ci.includes(Fe.extname(t).toLowerCase())},async testParse(t){return qs.test(t)||ro.test(t)},async parse(t,e,s){const o=qs.test(t)?qs.parse(t):ro.parse(t),{src:r}=e,{pages:i}=o,l=[],c=o.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let m=0;m<i.length;++m){const g=i[m].file;let E=Fe.join(Fe.dirname(r),g);E=gi(E,r),l.push({src:E,data:c})}const h=await s.load(l),v=l.map(m=>h[m.src]);return new Eo({data:o,textures:v},r)},async load(t,e){return await(await ie.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(o=>s.unload(o.texture.source._sourceOrigin))),t.destroy()}};class Mi{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let o=0;o<s;o++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Wi={extension:{type:O.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Be),getCacheableAssets:(t,e)=>{const s={};return t.forEach(o=>{e.forEach((r,i)=>{s[o+(i===0?"":i+1)]=r})}),s}};async function Lo(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const zi={extension:{type:O.DetectionParser,priority:1},test:async()=>Lo("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},io=["png","jpg","jpeg"],Ni={extension:{type:O.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...io],remove:async t=>t.filter(e=>!io.includes(e))},Di="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function ia(t){return Di?!1:document.createElement("video").canPlayType(t)!==""}const Ui={extension:{type:O.DetectionParser,priority:0},test:async()=>ia("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},Gi={extension:{type:O.DetectionParser,priority:0},test:async()=>ia("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},Hi={extension:{type:O.DetectionParser,priority:0},test:async()=>ia("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},Vi={extension:{type:O.DetectionParser,priority:0},test:async()=>Lo("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class Yi{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,o)=>(this._parsersValidated=!1,e[s]=o,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const o={promise:null,parser:null};return o.promise=(async()=>{var l,c;let r=null,i=null;if(s.loadParser&&(i=this._parserHash[s.loadParser],i||Te(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!i){for(let h=0;h<this.parsers.length;h++){const v=this.parsers[h];if(v.load&&((l=v.test)!=null&&l.call(v,e,s,this))){i=v;break}}if(!i)return Te(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await i.load(e,s,this),o.parser=i;for(let h=0;h<this.parsers.length;h++){const v=this.parsers[h];v.parse&&v.parse&&await((c=v.testParse)==null?void 0:c.call(v,r,s,this))&&(r=await v.parse(r,s,this)||r,o.parser=v)}return r})(),o}async load(e,s){this._parsersValidated||this._validateParsers();let o=0;const r={},i=mo(e),l=bt(e,v=>({alias:[v],src:v,data:{}})),c=l.length,h=l.map(async v=>{const u=Fe.toAbsolute(v.src);if(!r[v.src])try{this.promiseCache[u]||(this.promiseCache[u]=this._getLoadPromiseAndParser(u,v)),r[v.src]=await this.promiseCache[u].promise,s&&s(++o/c)}catch(m){throw delete this.promiseCache[u],delete r[v.src],new Error(`[Loader.load] Failed to load ${u}.
${m}`)}});return await Promise.all(h),i?r[l[0].src]:r}async unload(e){const o=bt(e,r=>({alias:[r],src:r})).map(async r=>{var c,h;const i=Fe.toAbsolute(r.src),l=this.promiseCache[i];if(l){const v=await l.promise;delete this.promiseCache[i],await((h=(c=l.parser)==null?void 0:c.unload)==null?void 0:h.call(c,v,r,this))}});await Promise.all(o)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&Te(`[Assets] loadParser name conflict "${s.name}"`):Te("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function et(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const Xi=".json",Ki="application/json",Qi={extension:{type:O.LoadParser,priority:Je.Low},name:"loadJson",test(t){return et(t,Ki)||Ze(t,Xi)},async load(t){return await(await ie.get().fetch(t)).json()}},qi=".txt",Ji="text/plain",Zi={name:"loadTxt",extension:{type:O.LoadParser,priority:Je.Low,name:"loadTxt"},test(t){return et(t,Ji)||Ze(t,qi)},async load(t){return await(await ie.get().fetch(t)).text()}},en=["normal","bold","100","200","300","400","500","600","700","800","900"],tn=[".ttf",".otf",".woff",".woff2"],sn=["font/ttf","font/otf","font/woff","font/woff2"],an=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function on(t){const e=Fe.extname(t),r=Fe.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(c=>c.charAt(0).toUpperCase()+c.slice(1));let i=r.length>0;for(const c of r)if(!c.match(an)){i=!1;break}let l=r.join(" ");return i||(l=`"${l.replace(/[\\"]/g,"\\$&")}"`),l}const rn=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function nn(t){return rn.test(t)?t:encodeURI(t)}const ln={extension:{type:O.LoadParser,priority:Je.Low},name:"loadWebFont",test(t){return et(t,sn)||Ze(t,tn)},async load(t,e){var o,r,i;const s=ie.get().getFontFaceSet();if(s){const l=[],c=((o=e.data)==null?void 0:o.family)??on(t),h=((i=(r=e.data)==null?void 0:r.weights)==null?void 0:i.filter(u=>en.includes(u)))??["normal"],v=e.data??{};for(let u=0;u<h.length;u++){const m=h[u],g=new FontFace(c,`url(${nn(t)})`,{...v,weight:m});await g.load(),s.add(g),l.push(g)}return Ae.set(`${c}-and-url`,{url:t,fontFaces:l}),l.length===1?l[0]:l}return Te("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{Ae.remove(`${e.family}-and-url`),ie.get().getFontFaceSet().delete(e)})}};function na(t,e=1){var o;const s=(o=Ht.RETINA_PREFIX)==null?void 0:o.exec(t);return s?parseFloat(s[1]):e}function la(t,e,s){t.label=s,t._sourceOrigin=s;const o=new Be({source:t,label:s}),r=()=>{delete e.promiseCache[s],Ae.has(s)&&Ae.remove(s)};return o.source.once("destroy",()=>{e.promiseCache[s]&&(Te("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),o.once("destroy",()=>{t.destroyed||(Te("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),o}const cn=".svg",dn="image/svg+xml",pn={extension:{type:O.LoadParser,priority:Je.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return et(t,dn)||Ze(t,cn)},async load(t,e,s){var o;return((o=e.data)==null?void 0:o.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?fn(t):un(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function un(t,e,s,o){var G,P,N;const i=await(await ie.get().fetch(t)).blob(),l=URL.createObjectURL(i),c=new Image;c.src=l,c.crossOrigin=o,await c.decode(),URL.revokeObjectURL(l);const h=document.createElement("canvas"),v=h.getContext("2d"),u=((G=e.data)==null?void 0:G.resolution)||na(t),m=((P=e.data)==null?void 0:P.width)??c.width,g=((N=e.data)==null?void 0:N.height)??c.height;h.width=m*u,h.height=g*u,v.drawImage(c,0,0,m*u,g*u);const{parseAsGraphicsContext:E,...T}=e.data??{},ee=new bo({resource:h,alphaMode:"premultiply-alpha-on-upload",resolution:u,...T});return la(ee,s,t)}async function fn(t){const s=await(await ie.get().fetch(t)).text(),o=new mi;return o.svg(s),o}const gn=`(function () {
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
`;let Qe=null,oa=class{constructor(){Qe||(Qe=URL.createObjectURL(new Blob([gn],{type:"application/javascript"}))),this.worker=new Worker(Qe)}};oa.revokeObjectURL=function(){Qe&&(URL.revokeObjectURL(Qe),Qe=null)};const hn=`(function () {
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
`;let qe=null;class To{constructor(){qe||(qe=URL.createObjectURL(new Blob([hn],{type:"application/javascript"}))),this.worker=new Worker(qe)}}To.revokeObjectURL=function(){qe&&(URL.revokeObjectURL(qe),qe=null)};let no=0,Js;class vn{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new oa;s.addEventListener("message",o=>{s.terminate(),oa.revokeObjectURL(),e(o.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var o;return this._run("loadImageBitmap",[e,(o=s==null?void 0:s.data)==null?void 0:o.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Js===void 0&&(Js=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Js&&(this._createdWorkers++,e=new To().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const o=new Promise((r,i)=>{this._queue.push({id:e,arguments:s,resolve:r,reject:i})});return this._next(),o}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),o=s.id;this._resolveHash[no]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:no++,id:o})}}const lo=new vn,mn=[".jpeg",".jpg",".png",".webp",".avif"],bn=["image/jpeg","image/png","image/webp","image/avif"];async function yn(t,e){var r;const s=await ie.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const o=await s.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(o,{premultiplyAlpha:"none"}):createImageBitmap(o)}const Po={name:"loadTextures",extension:{type:O.LoadParser,priority:Je.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return et(t,bn)||Ze(t,mn)},async load(t,e,s){var i;let o=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await lo.isImageBitmapSupported()?o=await lo.loadImageBitmap(t,e):o=await yn(t,e):o=await new Promise((l,c)=>{o=new Image,o.crossOrigin=this.config.crossOrigin,o.src=t,o.complete?l(o):(o.onload=()=>{l(o)},o.onerror=c)});const r=new bo({resource:o,alphaMode:"premultiply-alpha-on-upload",resolution:((i=e.data)==null?void 0:i.resolution)||na(t),...e.data});return la(r,s,t)},unload(t){t.destroy(!0)}},Ro=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],xn=Ro.map(t=>`video/${t.substring(1)}`);function _n(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=An(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function wn(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",o),t.addEventListener("error",r),t.load();function o(){i(),e()}function r(l){i(),s(l)}function i(){t.removeEventListener("canplaythrough",o),t.removeEventListener("error",r)}})}function An(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const kn={name:"loadVideo",extension:{type:O.LoadParser,name:"loadVideo"},test(t){const e=et(t,xn),s=Ze(t,Ro);return e||s},async load(t,e,s){var h,v;const o={...Ys.defaultOptions,resolution:((h=e.data)==null?void 0:h.resolution)||na(t),alphaMode:((v=e.data)==null?void 0:v.alphaMode)||await hi(),...e.data},r=document.createElement("video"),i={preload:o.autoLoad!==!1?"auto":void 0,"webkit-playsinline":o.playsinline!==!1?"":void 0,playsinline:o.playsinline!==!1?"":void 0,muted:o.muted===!0?"":void 0,loop:o.loop===!0?"":void 0,autoplay:o.autoPlay!==!1?"":void 0};Object.keys(i).forEach(u=>{const m=i[u];m!==void 0&&r.setAttribute(u,m)}),o.muted===!0&&(r.muted=!0),_n(r,t,o.crossorigin);const l=document.createElement("source");let c;if(t.startsWith("data:"))c=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const u=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();c=Ys.MIME_TYPES[u]||`video/${u}`}return l.src=t,c&&(l.type=c),new Promise(u=>{const m=async()=>{const g=new Ys({...o,resource:r});r.removeEventListener("canplay",m),e.data.preload&&await wn(r),u(la(g,s,t))};r.addEventListener("canplay",m),r.appendChild(l)})},unload(t){t.destroy(!0)}},Io={extension:{type:O.ResolveParser,name:"resolveTexture"},test:Po.test,parse:t=>{var e;return{resolution:parseFloat(((e=Ht.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},$n={extension:{type:O.ResolveParser,priority:-2,name:"resolveJson"},test:t=>Ht.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:Io.parse};class jn{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Ht,this.loader=new Yi,this.cache=Ae,this._backgroundLoader=new Mi(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var i,l;if(this._initialized){Te("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let c=e.manifest;typeof c=="string"&&(c=await this.load(c)),this.resolver.addManifest(c)}const s=((i=e.texturePreference)==null?void 0:i.resolution)??1,o=typeof s=="number"?[s]:s,r=await this._detectFormats({preferredFormats:(l=e.texturePreference)==null?void 0:l.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:o}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const o=mo(e),r=bt(e).map(c=>{if(typeof c!="string"){const h=this.resolver.getAlias(c);return h.some(v=>!this.resolver.hasKey(v))&&this.add(c),Array.isArray(h)?h[0]:h}return this.resolver.hasKey(c)||this.add({alias:c,src:c}),c}),i=this.resolver.resolve(r),l=await this._mapLoadToResolve(i,s);return o?l[r[0]]:l}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let o=!1;typeof e=="string"&&(o=!0,e=[e]);const r=this.resolver.resolveBundle(e),i={},l=Object.keys(r);let c=0,h=0;const v=()=>{s==null||s(++c/h)},u=l.map(m=>{const g=r[m];return h+=Object.keys(g).length,this._mapLoadToResolve(g,v).then(E=>{i[m]=E})});return await Promise.all(u),o?i[e[0]]:i}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(o=>{this._backgroundLoader.add(Object.values(o))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Ae.get(e);const s={};for(let o=0;o<e.length;o++)s[o]=Ae.get(e[o]);return s}async _mapLoadToResolve(e,s){const o=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(o,s);this._backgroundLoader.active=!0;const i={};return o.forEach(l=>{const c=r[l.src],h=[l.src];l.alias&&h.push(...l.alias),h.forEach(v=>{i[v]=c}),Ae.set(h,c)}),i}async unload(e){this._initialized||await this.init();const s=bt(e).map(r=>typeof r!="string"?r.src:r),o=this.resolver.resolve(s);await this._unloadFromResolved(o)}async unloadBundle(e){this._initialized||await this.init(),e=bt(e);const s=this.resolver.resolveBundle(e),o=Object.keys(s).map(r=>this._unloadFromResolved(s[r]));await Promise.all(o)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(o=>{Ae.remove(o.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const o of e.detections)e.skipDetections||await o.test()?s=await o.add(s):e.skipDetections||(s=await o.remove(s));return s=s.filter((o,r)=>s.indexOf(o)===r),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(o=>o in e).forEach(o=>{s.config[o]=e[o]})})}}const Ke=new jn;Pe.handleByList(O.LoadParser,Ke.loader.parsers).handleByList(O.ResolveParser,Ke.resolver.parsers).handleByList(O.CacheParser,Ke.cache.parsers).handleByList(O.DetectionParser,Ke.detections);Pe.add(Wi,Ni,zi,Vi,Ui,Gi,Hi,Qi,Zi,ln,pn,Po,kn,Fi,Bi,Io,$n);const co={loader:O.LoadParser,resolver:O.ResolveParser,cache:O.CacheParser,detection:O.DetectionParser};Pe.handle(O.Asset,t=>{const e=t.ref;Object.entries(co).filter(([s])=>!!e[s]).forEach(([s,o])=>Pe.add(Object.assign(e[s],{extension:e[s].extension??o})))},t=>{const e=t.ref;Object.keys(co).filter(s=>!!e[s]).forEach(s=>Pe.remove(e[s]))});var Sn=Fr('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-tijp0o"><\/script><!---->',1),En=Z('<p style="color: red;" class="svelte-tijp0o"><strong class="svelte-tijp0o">Error:</strong> </p>'),Ln=Z('<div class="svelte-tijp0o"> </div>'),Tn=Z('<details class="svelte-tijp0o"><summary class="svelte-tijp0o"> </summary> <!></details>'),Pn=Z(`<div style="
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
  " class="svelte-tijp0o"><h3 class="svelte-tijp0o">🎰 Oma-peli Debug</h3> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Status:</strong> </p> <!> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Base:</strong> </p> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">BG URL:</strong> </p> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Sample:</strong> </p> <!></div>`),Rn=Z('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-tijp0o"> </div>'),In=Z('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-tijp0o"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-tijp0o"> </span></div>'),On=Z(`<div style="
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
      " class="svelte-tijp0o">Jatka pelaamista</button></div>`),Cn=Z(`<div class="svelte-tijp0o"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-tijp0o">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-tijp0o">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-tijp0o"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-tijp0o"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-tijp0o">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-tijp0o">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-tijp0o">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-tijp0o">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-tijp0o">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-tijp0o">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-tijp0o"> <span style="color: #ffd700;" class="svelte-tijp0o">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-tijp0o">Sulje</button></div>`),Bn=Z(`<div style="
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
        " class="svelte-tijp0o">JATKA PERUSPELIIN</button></div></div>`),Fn=Z('<div class="svelte-tijp0o"><div class="svelte-tijp0o">SPIN SPEED</div> <button class="svelte-tijp0o">🐌 SLOW</button> <button class="svelte-tijp0o">⚡ MEDIUM</button> <button class="svelte-tijp0o">🚀 FAST</button></div>'),Mn=Z(`<div style="
      background: rgba(255, 100, 100, 0.9);
      color: white;
      padding: 15px 20px;
      border-radius: 10px;
      border: 2px solid #ff0000;
      box-shadow: 0 4px 15px rgba(255, 0, 0, 0.5);
      text-align: center;
      animation: winPulse 1s infinite;
    " class="svelte-tijp0o"><div style="font-weight: bold; font-size: 16px; margin-bottom: 8px;" class="svelte-tijp0o">🔄 AUTOPLAY</div> <div style="font-size: 20px; font-family: 'Courier New', monospace; margin-bottom: 10px;" class="svelte-tijp0o"> </div> <button style="
          width: 100%;
          padding: 8px;
          background: #ffffff;
          color: #ff0000;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          font-size: 14px;
        " class="svelte-tijp0o">⏹ STOP</button></div>`),Wn=Z(`<div style="
        position: absolute;
        bottom: 60px;
        right: 0;
        background: rgba(0, 0, 0, 0.95);
        padding: 15px;
        border-radius: 10px;
        border: 2px solid #0088ff;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
        min-width: 180px;
      " class="svelte-tijp0o"><div style="color: white; font-weight: bold; margin-bottom: 10px; text-align: center;" class="svelte-tijp0o">Select Rounds:</div> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #44aa44;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-tijp0o">10 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #4488ff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-tijp0o">100 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #ff8844;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-tijp0o">1,000 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #ff4444;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-tijp0o">10,000 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            background: #aa00ff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-tijp0o">100,000 Rounds</button> <button style="
            width: 100%;
            padding: 6px;
            background: rgba(255, 255, 255, 0.1);
            color: #aaa;
            border: 1px solid #555;
            border-radius: 5px;
            cursor: pointer;
            font-size: 12px;
          " class="svelte-tijp0o">Cancel</button></div>`),zn=Z(`<button style="
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
      " class="svelte-tijp0o">🔄 AUTOPLAY</button> <!>`,1),Nn=Z(`<!> <!> <!> <!> <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
" class="svelte-tijp0o"><div class="svelte-tijp0o"><div class="svelte-tijp0o"><button class="svelte-tijp0o">💰 PAYTABLE</button> <div class="control-panel-mobile svelte-tijp0o"><img alt="Left End" class="svelte-tijp0o"> <div class="svelte-tijp0o"><div class="svelte-tijp0o"><div class="svelte-tijp0o">BET</div> <div class="svelte-tijp0o"><button title="Decrease Bet" class="svelte-tijp0o"></button> <div class="svelte-tijp0o"> </div> <button title="Increase Bet" class="svelte-tijp0o"></button></div></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><div class="svelte-tijp0o">BALANCE</div> <div class="svelte-tijp0o"> </div></div> <img alt="Divider" class="svelte-tijp0o"> <div style="position: relative; display: flex; align-items: center; justify-content: center; flex-grow: 0.5;" class="svelte-tijp0o"><div><button title="SPIN" class="svelte-tijp0o"></button></div></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><button class="svelte-tijp0o"></button> <img alt="Status bar" class="svelte-tijp0o"></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><button class="svelte-tijp0o"></button> <div class="svelte-tijp0o"> </div> <!></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><button title="Fast Play" class="svelte-tijp0o"></button> <img alt="Status bar" class="svelte-tijp0o"></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><div class="svelte-tijp0o">WIN</div> <div class="svelte-tijp0o"> </div></div> <img alt="Divider" class="svelte-tijp0o"> <button title="Menu" class="svelte-tijp0o"></button></div> <img alt="Right End" class="svelte-tijp0o"></div></div>  <button class="svelte-tijp0o"></button> <button <VinylWinAnimation="" class="svelte-tijp0o"></button>  <div class="debug-panel svelte-tijp0o"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-tijp0o">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-tijp0o"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Rounds:</span> <span style="color: #fff;" class="svelte-tijp0o"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Wagered:</span> <span style="color: #ff6666;" class="svelte-tijp0o"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Won:</span> <span style="color: #66ff66;" class="svelte-tijp0o"> </span></div> <div style="
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
  " class="svelte-tijp0o"><button class="svelte-tijp0o"> </button> <button class="svelte-tijp0o">Clear Win Log</button> <button class="svelte-tijp0o"> </button> <button class="svelte-tijp0o">🎰 Test Free Spins</button></div></div> <div class="debug-panel svelte-tijp0o"><!></div> <button class="debug-panel svelte-tijp0o"> </button></div></div>`,1);function Dn(t,e){go(e,!0);const s="1.3.1",o=13,r=1445,i=1e3,l=1.75,c=-30,h=-10,v=160,u=0,m=750,g=80,E=250,T=0,ee=50,G=.5,P=40,N=0,ne=Math.round(100*l),ae=Math.round(ne*(700/760)),tt=ae+10,Re=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],yt=typeof window<"u"&&window.location.hostname.includes("github.io"),J=yt?"/web-sdk/oma-peli/symbols":`${xe}/symbols`,H=yt?"/web-sdk/oma-peli/controls":`${xe}/controls`,Yt={a:`${J}/Blue_hotrod.jpg`,b:`${J}/Blue_jacket.jpg`,c:`${J}/Blue_rollers.jpg`,d:`${J}/Blue_speakers.jpg`,e:`${J}/Premium_blonde.jpg`,f:`${J}/Premium_brunette.jpg`,g:`${J}/Premium_rocker.jpg`,h:`${J}/New_Wild.jpg`,i:`${J}/Red_burger.jpg`,j:`${J}/Red_fries.jpg`,k:`${J}/Red_milkshake.jpg`,l:`${J}/Scatter.jpg`,emptyslot:`${J}/Emptyslot.jpg`},Xt=`${J}/bg_base.jpg`,ca=`${J}/ReelFrames.png`,da=`${J}/RockABillyReels_logo.png`,Oo={spin:`${xe}/sounds/spin.mp3`,stop:`${xe}/sounds/stop.mp3`,win:`${xe}/sounds/win.mp3`};let _e=L(!0),Kt={},D=null,le=null,Qt=null,qt=null,fe=L(!0),Co=L(!1),xt=L(!1),Jt=L(945),Zt=null;const Bo={fast:3,medium:7,slow:18};let V=L("medium"),Me=L(!1),pa=L(Math.floor(Math.random()*20)+1);const _t={background:()=>`${xe}/music/rockabilly reels loop ${a(pa)}.mp3`,freeSpins:`${xe}/music/rockabilly-loop_long.mp3`,drumHit:`${xe}/music/drum-hit.mp3`,winTheme:`${xe}/music/win-stinger.mp3`};function ua(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(ua,500);return}const n=window.Howl;try{D=new n({src:[_t.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+a(pa)+")"),y(Co,!0)},onloaderror:(p,k)=>{console.warn("⚠️ Background music not found:",k)}}),le=new n({src:[_t.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(p,k)=>console.warn("⚠️ Free spins music not found:",k)}),Qt=new n({src:[_t.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),qt=new n({src:[_t.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(p){console.error("Failed to initialize music system:",p)}}function fa(){const n=a(U)?le:D;n&&a(fe)&&!n.playing()&&(n.play(),console.log("🎵 "+(a(U)?"Free spins":"Background")+" music started"))}function Fo(){D&&D.playing()&&(D.fade(D.volume(),0,500),setTimeout(()=>D.stop(),500)),le&&le.playing()&&(le.fade(le.volume(),0,500),setTimeout(()=>le.stop(),500))}function es(){D&&D.playing()&&(D.fade(D.volume(),0,500),setTimeout(()=>D.stop(),500)),le&&le.playing()&&(le.fade(le.volume(),0,500),setTimeout(()=>le.stop(),500)),setTimeout(()=>{a(fe)&&fa()},600)}function Mo(){if(D&&D.playing()){const n=D.volume();D.fade(n,0,1e3),setTimeout(()=>{D.stop(),D.volume(.3)},1e3)}}let ts=L(!1);function Wo(){y(ts,!1),setTimeout(()=>{y(ts,!0)},10)}let We=null;function zo(){y(fe,!a(fe)),a(fe)?fa():Fo()}function No(){Qt&&a(fe)&&a(_e)&&Qt.play()}function Do(){qt&&a(fe)&&a(_e)&&qt.play()}let wt=null,ss=null,st=null,at=null,ot=L("Initializing..."),ze=L(""),ge=[],$e=L(1e3);const ga=[.4,.8,1,1.6,2,3,5,8,10,15,20,25,30,40,50,60,80,100];let rt=L(8),ye=Dt(()=>ga[a(rt)]),ha=L(0),ce=L(!1),Ne=L(0),Ie=L(!1),At=L(!1),Uo=L(0),Oe=!1,we=null,as=!1,De=L(0),Ue=L(0),it=L(0),os=L(0),rs=Dt(()=>a(Ue)>0?(a(it)/a(Ue)*100).toFixed(2):"0.00"),is=Dt(()=>a(De)>0?(a(os)/a(De)*100).toFixed(2):"0.00"),U=L(!1),je=L(0),Ce=L(0),kt=L(0),ns=L(0),$t=L(0),ls=L(0),Go=Dt(()=>a($t)>0?(a(ls)/a($t)*100).toFixed(2):"0.00"),de=L(ue([]));function Ho(n,p,k){const b=new Date().toLocaleString("fi-FI");let _=`
${"=".repeat(60)}
`;_+=`ROUND #${n} - ${b}
`,_+=`Mode: ${a(U)?"FREE SPINS":"BASE GAME"}
`,_+=`${"=".repeat(60)}
`,p.forEach(($,j)=>{_+=`
Win ${j+1}:
`,_+=`  Symbol: ${$.symbol} (${ya[$.symbol]})
`,_+=`  Count: ${$.count} symbols
`,_+=`  Multiplier: ${$.multiplier}x
`,_+=`  Payout: ${$.payout.toFixed(2)}
`,_+=`  Positions: [${$.positions.join(", ")}]
`}),_+=`
${"─".repeat(60)}
`,_+=`TOTAL WIN: ${k.toFixed(2)}
`,_+=`${"=".repeat(60)}
`,a(de).push(_)}function Vo(){const n=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${a(de).join(`
`)}`,p=new Blob([n],{type:"text/plain"}),k=URL.createObjectURL(p),b=document.createElement("a");b.href=k,b.download=`win-log-${Date.now()}.txt`,b.click(),URL.revokeObjectURL(k)}function Yo(){y(de,ue([]))}function Xo(){a(U)||(y(U,!0),y(je,10),y(Ce,0),me(kt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),es())}const Ko={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},Qo={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function va(n){if(n===6)return Math.random()<.55?"h":"emptyslot";const p=a(U)?Qo:Ko,k=Math.random();let b=0;const _=Re.filter(j=>j!=="h"),$=_.reduce((j,B)=>j+p[B],0);for(const j of _)if(b+=p[j]/$,k<b)return j;return"f"}function ma(){const n=[];for(let p=0;p<o;p++){const k=va(p);n.push(k),me($t),k==="emptyslot"&&me(ls)}return n}function ba(n){return n<3?{col:0,row:n}:n<6?{col:1,row:n-3}:n===6?{col:2,row:0}:n<10?{col:3,row:n-7}:{col:4,row:n-10}}function nt(n,p){return n===0?p:n===1?3+p:n===2?6:n===3?7+p:n===4?10+p:-1}function qo(){if(a(U)){const n=Math.random();return n<.7?3:n<.92?5:10}else{const n=Math.random();return n<.7?1:n<.92?2:3}}const Jo={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function Zo(){var Q;const n=[],p=[];for(let S=0;S<o;S++)lt[S]==="l"&&p.push(S);if(p.length>=5){const S=p.length;y(je,a(je)+S),a(U)?console.log(`🎰 FREE SPINS RETRIGGERED! +${S} FREE SPINS! Total: ${a(je)}`):(y(U,!0),y(Ce,0),me(kt),console.log(`🎰 FREE SPINS TRIGGERED! ${p.length} scatters = ${S} FREE SPINS!`),es()),n.push({symbol:"l",count:p.length,payout:0,positions:p,multiplier:1})}const k=[];for(let S=0;S<3;S++)for(let R=0;R<3;R++)for(let C=0;C<1;C++)for(let F=0;F<3;F++)for(let W=0;W<3;W++){const M=[nt(0,S),nt(1,R),nt(2,C),nt(3,F),nt(4,W)];k.push(M)}console.log(`Generated ${k.length} possible paths (should be 81)`);const b=[];for(const S of k){const R=S.map(M=>lt[M]);if(R[0]==="emptyslot"||R[0]==="l")continue;let C=null;for(let M=0;M<R.length;M++)if(R[M]!=="h"&&R[M]!=="emptyslot"&&R[M]!=="l"){C=R[M];break}if(!C)continue;let F=0;const W=new Set;for(let M=0;M<S.length;M++){const Ee=S[M],{col:Xe}=ba(Ee),oe=R[M];(oe===C||oe==="h")&&W.add(Xe)}for(let M=0;M<5&&W.has(M);M++)F++;if(F>=3){const Ee=S[0]%3;b.push({symbol:C,length:F,path:S.slice(0,F),startRow:Ee})}}const _=[],$=new Map;for(const S of b){const R=`${S.symbol}-${S.path.join(",")}`;$.has(R)||$.set(R,[]),$.get(R).push(S)}for(const[S,R]of $.entries()){const C=Math.max(...R.map(W=>W.length)),F=R.find(W=>W.length===C);F&&_.push(F)}const j=[],B=new Map;for(const S of _)B.has(S.symbol)||B.set(S.symbol,[]),B.get(S.symbol).push(S);const Y=[];for(const[S,R]of B.entries()){const C=Math.max(...R.map(W=>W.length)),F=R.filter(W=>W.length===C);Y.push(...F)}const X=new Map;for(const S of Y){const R=`${S.symbol}-${S.length}`;X.has(R)||X.set(R,[]),X.get(R).push(S)}const K=Y.length>0?qo():1;for(const[S,R]of X.entries()){const C=R[0],F=(Q=Jo[C.symbol])==null?void 0:Q[C.length];if(F!==void 0&&F>0){const W=new Map;for(const oe of R)for(let se=0;se<oe.length;se++)W.has(se)||W.set(se,new Set),W.get(se).add(oe.path[se]);let M=1;for(let oe=0;oe<C.length;oe++){const se=W.get(oe);M*=se?se.size:1}const Ee=F*a(ye)*M*K;console.log(`  ${C.length}x${C.symbol}: ${M} ways × ${F}x × ${a(ye)} bet × ${K} mult = ${Ee}`);const Xe=new Set;for(const oe of R)oe.path.forEach(se=>Xe.add(se));j.push({symbol:C.symbol,count:C.length,payout:Ee,positions:Array.from(Xe),multiplier:K})}}return n.push(...j),n}let he=L(0),Ge=L(ue([])),Se=L(!1),He=L(!1),cs=L(!1),ds=L(0);const ya={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function ps(n){if(!a(_e)||!Kt[n])return;const p=Kt[n];p.currentTime=0,p.play().catch(k=>{console.warn("Äänen toisto epäonnistui:",n,k)})}function er(n){ct.forEach(p=>te.stage.removeChild(p)),ct=[],n.forEach(p=>{p.positions.forEach(k=>{const b=Ve[k],_=new Ja().rect(0,0,ne,ae).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});_.x=b.container.x,_.y=b.container.y,te.stage.addChild(_),ct.push(_);let $=0,j=1;const B=.05;te.ticker.add(()=>{$+=j*B,$>=.4&&(j=-1),$<=0&&(j=1),_.alpha=.5+$})})})}function us(){ct.forEach(n=>te.stage.removeChild(n)),ct=[]}let lt=ma(),fs,te,Ve=[],ct=[];class tr{constructor(p,k){ve(this,"index");ve(this,"container");ve(this,"offset",0);ve(this,"speed",0);ve(this,"targetSpeed",30);ve(this,"state","idle");ve(this,"stopDelay",0);ve(this,"bounceOffset",0);ve(this,"bounceSpeed",0);ve(this,"bounceFrames",0);this.index=p,this.container=k}start(p){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=p}startSynchronized(p){const k=Bo[a(V)],b=60+p*k;this.start(b)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const p=a(V)==="slow"?.88:a(V)==="medium"?.92:.95;this.speed*=p,this.speed<2.5&&(this.state="bouncing",this.speed=0,this.offset=0,this.bounceOffset=0,this.bounceSpeed=8,ps("stop"),No())}this.state==="bouncing"&&(this.bounceSpeed*=.85,this.bounceOffset+=this.bounceSpeed,Math.abs(this.bounceSpeed)<.3&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=tt&&(this.offset=0,lt[this.index]=va(this.index)))}}draw(){const p=this.container;p.removeChildren();const k=lt[this.index];if(!k||!wt||!wt[k])return;const b=wt[k];if(!b)return;const _=this.offset+this.bounceOffset,$=new Xs(b);$.width=ne,$.height=ae,$.x=0,$.y=_,p.addChild($)}}let d=L(1);ho(async()=>{te=new So,await te.init({width:r,height:i,backgroundAlpha:0}),fs.appendChild(te.canvas);const n=()=>{const b=window.innerWidth,_=window.innerHeight,$=b/r,j=_/i,B=Math.min($,j,1);y(d,ue(B)),te.stage.scale.set(B),te.renderer.resize(r,i)};n(),window.addEventListener("resize",n);const p={};try{y(ot,"Loading background and UI images..."),ge.push(`Loading background: ${Xt}`),ge.push(`Loading reel frames: ${ca}`),ge.push(`Loading logo: ${da}`),await Ke.load([{alias:"background",src:Xt},{alias:"reelframes",src:ca},{alias:"logo",src:da}]),ss=Be.from("background"),st=Be.from("reelframes"),at=Be.from("logo"),console.log("✅ Background texture created:",ss.width,"x",ss.height),console.log("✅ Reel frames texture created:",st.width,"x",st.height),console.log("✅ Logo texture created:",at.width,"x",at.height),ge.push("✅ All UI images loaded"),y(ot,"Loading symbols...");const b=[];for(const _ of Re)b.push({alias:_,src:Yt[_]});await Ke.load(b);for(const _ of Re){const $=Yt[_];ge.push(`Loading symbol ${_}: ${$}`);try{const j=Be.from(_);p[_]=j,console.log(`✅ Symbol ${_} loaded:`,j.width,"x",j.height),ge.push(`✅ Symbol ${_} loaded`)}catch(j){const B=`❌ Failed to load symbol ${_} from ${$}: ${j}`;throw ge.push(B),console.error(B),new Error(B)}}wt=p,y(ot,"Assets loaded successfully!")}catch(b){y(ze,`Asset loading failed: ${b}`),ge.push(a(ze)),console.error(a(ze));return}console.log("Ladataan ääniefektit...");for(const[b,_]of Object.entries(Oo)){const $=new Audio;$.src=_,$.preload="auto",$.volume=.7,$.load(),$.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${_} (käytetään hiljaista placeholderia)`)}),Kt[b]=$}[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(b=>({x:b.x+c,y:b.y+h})),Ve=[];for(let b=0;b<o;b++){const _=ba(b),$=_.col,j=_.row,B=300+$*(ne+20),Y=250+j*(ae+15),X=b===6?B+u:B,K=b===6?Y+v:Y,Q=new ra;Q.x=X+c,Q.y=K+h;const S=new Ja().rect(0,0,ne,ae).fill(16777215);S.x=Q.x,S.y=Q.y,Q.mask=S,te.stage.addChild(S),te.stage.addChild(Q),Ve.push(new tr(b,Q))}if(st){const b=new Xs(st);b.scale.set(1),b.x=250,b.y=200,te.stage.addChild(b),Zt=b,y(Jt,ue(b.width)),console.log("Reel frames lisätty:",b.width.toFixed(0),"x",b.height.toFixed(0)),console.log("Control panel leveys päivitetty:",a(Jt).toFixed(0))}if(at){const b=new Xs(at);b.scale.set(G),b.x=(te.renderer.width-b.width)/2+P,b.y=N,te.stage.addChild(b),console.log("Logo lisätty päällimmäiseen layeriin:",b.width.toFixed(0),"x",b.height.toFixed(0))}ua(),te.ticker.add(sr)});function sr(){for(const n of Ve)n.update(),n.draw();if(!a(Se)&&!as&&Ve.every(n=>n.state==="stopped")){as=!0,Mo();const n=Zo();console.log(`Checking wins, found ${n.length} wins`),n.length>0?(y(Ge,ue(n)),y(he,ue(n.reduce((p,k)=>p+k.payout,0))),Ho(a(De),n,a(he)),ar(a(he)),y(Se,!0),y(Uo,ue(Date.now())),console.log(`🎉 VOITTO! ${a(he)} pistettä! Uusi saldo: ${a($e)}`),console.log(`isShowingWin set to: ${a(Se)}, totalWin: ${a(he)}`),n.forEach(p=>{const k=p.multiplier?` (${p.multiplier}x multiplier)`:"";console.log(`${p.count}x ${p.symbol} = ${p.payout} pistettä${k}`)}),er(n),ps("win"),a(ce)&&!Oe&&(Oe=!0,we=window.setTimeout(()=>{a(Se)&&a(ce)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),y(Se,!1),us()),we=window.setTimeout(()=>{Oe=!1,gs()},200)},1500))):(console.log("No wins found this spin"),a(ce)&&!Oe&&(Oe=!0,we=window.setTimeout(()=>{Oe=!1,gs()},1e3))),a(U)&&a(je)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${a(Ce)}`),setTimeout(()=>{y(ds,ue(a(Ce))),y(cs,!0)},2e3))}}function xa(){if(!a(U)&&D&&a(fe)&&!D.playing()&&(D.play(),console.log("🎵 Background music started on first spin")),Wo(),a(U)&&a(je)>0)me(je,-1),me(ns),console.log(`🎰 FREE SPIN! Remaining: ${a(je)}`);else if(!a(U)){if(a($e)<a(ye)){alert(`Not enough credits! Balance: ${a($e)}, Bet: ${a(ye)}`),pt();return}y($e,a($e)-a(ye)),me(De),y(Ue,a(Ue)+a(ye))}we!==null&&(clearTimeout(we),we=null),y(Ge,ue([])),y(he,0),y(Se,!1),as=!1,us(),lt=ma(),Ve.forEach((n,p)=>{n.startSynchronized(p)}),ps("spin")}function ar(n){if(y($e,a($e)+n),y(it,a(it)+n),y(ha,ue(n)),a(U)&&y(Ce,a(Ce)+n),n>0){me(os);const p=n/a(ye);p>=10&&Do(),We&&(p>=50?We.show():p>=20?setTimeout(()=>We.show(),200):p>=10&&setTimeout(()=>We.show(),400))}}function or(){a(rt)<ga.length-1&&me(rt)}function rr(){a(rt)>0&&me(rt,-1)}function dt(n){y(ce,!0),y(Ne,ue(n)),y(Ie,!1),gs()}function pt(){y(ce,!1),y(Ne,0),Oe=!1,we!==null&&(clearTimeout(we),we=null)}function gs(){if(!a(ce)||a(Ne)<=0){pt();return}console.log(`Autoplay: Starting spin ${a(Ne)} rounds left`),xa(),me(Ne,-1)}function ir(){confirm("Reset all statistics?")&&(y(De,0),y(Ue,0),y(it,0),y(os,0),y(kt,0),y(ns,0),y($t,0),y(ls,0))}var _a=Nn();Br(n=>{var p=Sn();f(mt(p)),q(n,p)});var wa=mt(_a);{var nr=n=>{var p=Pn(),k=f(w(p),2),b=f(w(k));A(k);var _=f(k,2);{var $=C=>{var F=En(),W=f(w(F));A(F),pe(()=>z(W,` ${a(ze)??""}`)),q(C,F)};re(_,C=>{a(ze)&&C($)})}var j=f(_,2),B=f(w(j));B.nodeValue=` ${xe??""}`,A(j);var Y=f(j,2),X=f(w(Y));X.nodeValue=` ${Xt??""}`,A(Y);var K=f(Y,2),Q=f(w(K));A(K);var S=f(K,2);{var R=C=>{var F=Tn(),W=w(F),M=w(W);A(W);var Ee=f(W,2);eo(Ee,17,()=>ge,Za,(Xe,oe)=>{var se=Ln(),Pr=w(se,!0);A(se),pe(()=>z(Pr,a(oe))),q(Xe,se)}),A(F),pe(()=>z(M,`Log (${ge.length??""})`)),q(C,F)};re(S,C=>{ge.length>0&&C(R)})}A(p),pe(()=>{z(b,` ${a(ot)??""}`),z(Q,` ${Yt.a??""}`)}),q(n,p)};re(wa,n=>{(a(ot)!=="Assets loaded successfully!"||a(ze))&&n(nr)})}var Aa=f(wa,2);{var lr=n=>{var p=On(),k=f(w(p),2),b=w(k);A(k);var _=f(k,2);eo(_,17,()=>a(Ge),Za,(Y,X)=>{var K=Rn(),Q=w(K);A(K),pe(S=>z(Q,`${a(X).count??""} × ${ya[a(X).symbol]??""} = ${S??""} pistettä`),[()=>a(X).payout.toFixed(2)]),q(Y,K)});var $=f(_,2);{var j=Y=>{var X=In(),K=w(X),Q=w(K);A(K),A(X),pe(()=>z(Q,`✨ ${a(Ge)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),q(Y,X)};re($,Y=>{a(Ge).length>0&&a(Ge)[0].multiplier>1&&Y(j)})}var B=f($,2);A(p),pe(()=>z(b,`${a(he)??""} pistettä`)),I("click",B,()=>{y(Se,!1),us(),console.log("Win popup closed, ready for next spin")}),q(n,p)};re(Aa,n=>{a(he)>0&&a(Se)&&n(lr)})}var ka=f(Aa,2);{var cr=n=>{var p=Cn(),k=f(w(p),8);A(p),pe(b=>x(p,"style",`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.95);
    color: white;
    padding: ${30*a(d)}px;
    border-radius: ${15*a(d)}px;
    font-family: Arial, sans-serif;
    z-index: 3000;
    border: ${3*a(d)}px solid #ffd700;
    max-width: ${600*a(d)}px;
    max-height: ${b??""}px;
    overflow-y: auto;
    font-size: ${a(d)??""}em;
  `),[()=>Math.min(i*a(d)*.8,80*window.innerHeight/100)]),I("click",k,()=>{y(He,!1)}),q(n,p)};re(ka,n=>{a(He)&&n(cr)})}var $a=f(ka,2);{var dr=n=>{var p=Bn(),k=w(p),b=f(w(k),4),_=w(b,!0);A(b);var $=f(b,2);A(k),A(p),pe(j=>z(_,j),[()=>a(ds).toFixed(2)]),I("click",$,()=>{y(cs,!1),y(U,!1),y(Ce,0),y(ds,0),es()}),I("mouseenter",$,j=>{j.currentTarget.style.transform="scale(1.05)",j.currentTarget.style.boxShadow="0 6px 20px rgba(255, 215, 0, 0.6)"}),I("mouseleave",$,j=>{j.currentTarget.style.transform="scale(1)",j.currentTarget.style.boxShadow="0 4px 15px rgba(255, 215, 0, 0.4)"}),q(n,p)};re($a,n=>{a(cs)&&n(dr)})}var ja=f($a,2),hs=w(ja),ut=w(hs);x(ut,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${r}px;
        height: ${i}px;
      `);var vs=w(ut),ms=f(vs,2),bs=w(ms);x(bs,"src",`${H??""}/Control_leftend.png`);var jt=f(bs,2),St=w(jt),Sa=w(St),ys=f(Sa,2),xs=w(ys),Et=f(xs,2),pr=w(Et,!0);A(Et);var Ea=f(Et,2);A(ys),A(St);var _s=f(St,2);x(_s,"src",`${H??""}/Control_divider.png`);var Lt=f(_s,2),La=w(Lt),ws=f(La,2),ur=w(ws,!0);A(ws),A(Lt);var As=f(Lt,2);x(As,"src",`${H??""}/Control_divider.png`);var ks=f(As,2),$s=w(ks),Ta=w($s);A($s),A(ks);var js=f(ks,2);x(js,"src",`${H??""}/Control_divider.png`);var Tt=f(js,2),Pt=w(Tt),Pa=f(Pt,2);A(Tt);var Ss=f(Tt,2);x(Ss,"src",`${H??""}/Control_divider.png`);var Rt=f(Ss,2),It=w(Rt),Ot=f(It,2),fr=w(Ot,!0);A(Ot);var gr=f(Ot,2);{var hr=n=>{var p=Fn(),k=w(p),b=f(k,2),_=f(b,2),$=f(_,2);A(p),pe(()=>{x(p,"style",`
          position: absolute;
          bottom: ${80*a(d)}px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
          border: ${2*a(d)}px solid #ffd700;
          border-radius: ${10*a(d)}px;
          padding: ${10*a(d)}px;
          display: flex;
          flex-direction: column;
          gap: ${8*a(d)}px;
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
        `),x(k,"style",`
            color: #ffd700;
            font-size: ${14*a(d)}px;
            font-weight: bold;
            text-align: center;
            border-bottom: ${1*a(d)}px solid #444;
            padding-bottom: ${5*a(d)}px;
          `),x(b,"style",`
              background: ${(a(V)==="slow"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: ${2*a(d)}px solid ${(a(V)==="slow"?"#ffd700":"#666")??""};
              color: ${(a(V)==="slow"?"#ffd700":"#ffffff")??""};
              padding: ${8*a(d)}px ${20*a(d)}px;
              border-radius: ${5*a(d)}px;
              cursor: pointer;
              font-weight: bold;
              font-size: ${12*a(d)}px;
              transition: all 0.2s;
            `),x(_,"style",`
              background: ${(a(V)==="medium"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: ${2*a(d)}px solid ${(a(V)==="medium"?"#ffd700":"#666")??""};
              color: ${(a(V)==="medium"?"#ffd700":"#ffffff")??""};
              padding: ${8*a(d)}px ${20*a(d)}px;
              border-radius: ${5*a(d)}px;
              cursor: pointer;
              font-weight: bold;
              font-size: ${12*a(d)}px;
              transition: all 0.2s;
            `),x($,"style",`
              background: ${(a(V)==="fast"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: ${2*a(d)}px solid ${(a(V)==="fast"?"#ffd700":"#666")??""};
              color: ${(a(V)==="fast"?"#ffd700":"#ffffff")??""};
              padding: ${8*a(d)}px ${20*a(d)}px;
              border-radius: ${5*a(d)}px;
              cursor: pointer;
              font-weight: bold;
              font-size: ${12*a(d)}px;
              transition: all 0.2s;
            `)}),I("click",b,()=>{y(V,"slow"),y(Me,!1)}),I("click",_,()=>{y(V,"medium"),y(Me,!1)}),I("click",$,()=>{y(V,"fast"),y(Me,!1)}),q(n,p)};re(gr,n=>{a(Me)&&n(hr)})}A(Rt);var Es=f(Rt,2);x(Es,"src",`${H??""}/Control_divider.png`);var Ct=f(Es,2),Ls=w(Ct),Ra=f(Ls,2);A(Ct);var Ts=f(Ct,2);x(Ts,"src",`${H??""}/Control_divider.png`);var Bt=f(Ts,2),Ia=w(Bt),Ps=f(Ia,2),vr=w(Ps,!0);A(Ps),A(Bt);var Rs=f(Bt,2);x(Rs,"src",`${H??""}/Control_divider.png`);var Oa=f(Rs,2);A(jt);var Ca=f(jt,2);x(Ca,"src",`${H??""}/Control_rightend.png`),A(ms),A(ut),Qa(ut,n=>fs=n,()=>fs);var Ft=f(ut,2);Ft.textContent=`🛠️ DEBUG v${s}`;var Mt=f(Ft,2);Qa(Mt,n=>We=n,()=>We);var Wt=f(Mt,2),Ba=f(w(Wt),2);Ba.textContent=`v${s}`;var Is=f(Ba,2),Fa=f(w(Is),2),mr=w(Fa,!0);A(Fa),A(Is);var Os=f(Is,2),Ma=f(w(Os),2),br=w(Ma,!0);A(Ma),A(Os);var Cs=f(Os,2),Wa=f(w(Cs),2),yr=w(Wa,!0);A(Wa),A(Cs);var Bs=f(Cs,2),Fs=f(w(Bs),2),xr=w(Fs);A(Fs),A(Bs);var Ms=f(Bs,2),Ws=f(w(Ms),2),_r=w(Ws);A(Ws),A(Ms);var zs=f(Ms,2),za=f(w(zs),2),wr=w(za,!0);A(za),A(zs);var Ns=f(zs,2),Na=f(w(Ns),2),Ar=w(Na,!0);A(Na),A(Ns);var Ds=f(Ns,2),Da=f(w(Ds),2),kr=w(Da);A(Da),A(Ds);var Ua=f(Ds,2),Ga=f(Ua,2),Ye=w(Ga),$r=w(Ye);A(Ye);var zt=f(Ye,2),ft=f(zt,2),jr=w(ft);A(ft);var Us=f(ft,2);A(Ga),A(Wt);var Nt=f(Wt,2),Sr=w(Nt);{var Er=n=>{var p=Mn(),k=f(w(p),2),b=w(k);A(k);var _=f(k,2);A(p),pe(()=>z(b,`${a(Ne)??""} left`)),I("click",_,pt),q(n,p)},Lr=n=>{var p=zn(),k=mt(p),b=f(k,2);{var _=$=>{var j=Wn(),B=f(w(j),2),Y=f(B,2),X=f(Y,2),K=f(X,2),Q=f(K,2),S=f(Q,2);A(j),I("click",B,()=>dt(10)),I("click",Y,()=>dt(100)),I("click",X,()=>dt(1e3)),I("click",K,()=>dt(1e4)),I("click",Q,()=>dt(1e5)),I("click",S,()=>{y(Ie,!1)}),q($,j)};re(b,$=>{a(Ie)&&$(_)})}I("click",k,()=>{y(Ie,!a(Ie))}),q(n,p)};re(Sr,n=>{a(ce)?n(Er):n(Lr,!1)})}A(Nt);var gt=f(Nt,2),Tr=w(gt,!0);A(gt),A(hs),A(ja),pe((n,p,k,b,_,$,j,B)=>{x(hs,"style",`
    position: relative;
    width: ${r*a(d)}px;
    height: ${i*a(d)}px;
  `),x(vs,"style",`
          position: absolute;
          top: ${130*a(d)}px;
          right: ${20*a(d)}px;
          padding: ${10*a(d)}px ${15*a(d)}px;
          background-color: rgba(255, 215, 0, 0.3);
          border: ${2*a(d)}px solid rgba(255, 215, 0, 0.7);
          border-radius: ${8*a(d)}px;
          cursor: pointer;
          font-weight: bold;
          font-size: ${16*a(d)}px;
          color: white;
          text-shadow: 0 0 ${5*a(d)}px rgba(0,0,0,0.8);
          z-index: 1000;
          min-width: ${180*a(d)}px;
        `),x(ms,"style",`
        position: absolute;
        left: ${((Zt?Zt.x:E)+T)*a(d)}px;
        top: ${(m+ee)*a(d)}px;
        width: ${a(Jt)*a(d)}px;
        height: ${g*a(d)}px;
        display: flex;
        align-items: center;
        z-index: 1000;
      `),x(bs,"style",`height: ${g*a(d)}px; flex-shrink: 0;`),x(jt,"style",`
    flex-grow: 1;
    height: ${g*a(d)}px;
    background-image: url('${H??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 ${20*a(d)}px;
  `),x(St,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*a(d)}px;`),x(Sa,"style",`color: #00ff00; font-size: ${12*a(d)}px; font-weight: bold;`),x(ys,"style",`display: flex; gap: ${5*a(d)}px; align-items: center;`),x(xs,"style",`
            width: ${40*a(d)}px;
            height: ${40*a(d)}px;
            background-image: url('${H??""}/Control_lowerbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(Et,"style",`
          color: #fff;
          font-size: ${18*a(d)}px;
          font-weight: bold;
          min-width: ${80*a(d)}px;
          text-align: center;
          font-family: 'Courier New', monospace;
        `),z(pr,n),x(Ea,"style",`
            width: ${40*a(d)}px;
            height: ${40*a(d)}px;
            background-image: url('${H??""}/Control_upperbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(_s,"style",`height: ${g*.8*a(d)}px; flex-shrink: 0;`),x(Lt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*a(d)}px;`),x(La,"style",`color: #00ff00; font-size: ${12*a(d)}px; font-weight: bold;`),x(ws,"style",`
        color: #fff;
        font-size: ${20*a(d)}px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      `),z(ur,p),x(As,"style",`height: ${g*.8*a(d)}px; flex-shrink: 0;`),wi($s,1,`play-button-wrapper ${(a(ts)?"glare-animate":"")??""}`,"svelte-tijp0o"),x(Ta,"style",`
            width: ${130*a(d)}px;
            height: ${130*a(d)}px;
            background-image: url('${H??""}/Control_playbutton.png');
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
          `),x(js,"style",`height: ${g*.8*a(d)}px; flex-shrink: 0;`),x(Tt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*a(d)}px;`),x(Pt,"style",`
          width: ${50*a(d)}px;
          height: ${50*a(d)}px;
          background-image: url('${H??""}/${(a(ce)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),x(Pt,"title",a(ce)?"Stop Autoplay":"Autoplay"),x(Pa,"src",`${H??""}/${(a(ce)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),x(Pa,"style",`width: ${50*a(d)}px; height: auto;`),x(Ss,"style",`height: ${g*.8*a(d)}px; flex-shrink: 0;`),x(Rt,"style",`position: relative; display: flex; flex-direction: column; align-items: center; gap: ${5*a(d)}px;`),x(It,"style",`
          width: ${50*a(d)}px;
          height: ${50*a(d)}px;
          background-image: url('${H??""}/Control_fastplay_select.png');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),x(It,"title",`Spin Speed: ${(a(V)==="slow"?"Slow":a(V)==="medium"?"Medium":"Fast")??""}`),x(Ot,"style",`
        color: #ffffff;
        font-size: ${10*a(d)}px;
        font-weight: bold;
        text-transform: uppercase;
      `),z(fr,a(V)==="slow"?"Slow":a(V)==="medium"?"Med":"Fast"),x(Es,"style",`height: ${g*.8*a(d)}px; flex-shrink: 0;`),x(Ct,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*a(d)}px;`),x(Ls,"style",`
          width: ${50*a(d)}px;
          height: ${50*a(d)}px;
          background-image: url('${H??""}/${(a(xt)?"Control_fastplay_select.png":"Control_fastplay_deselect.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),x(Ra,"src",`${H??""}/${(a(xt)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),x(Ra,"style",`width: ${50*a(d)}px; height: auto;`),x(Ts,"style",`height: ${g*.8*a(d)}px; flex-shrink: 0;`),x(Bt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*a(d)}px;`),x(Ia,"style",`color: #00ff00; font-size: ${12*a(d)}px; font-weight: bold;`),x(Ps,"style",`
        color: #ffd700;
        font-size: ${20*a(d)}px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      `),z(vr,k),x(Rs,"style",`height: ${g*.8*a(d)}px; flex-shrink: 0;`),x(Oa,"style",`
        width: ${50*a(d)}px;
        height: ${50*a(d)}px;
        background-image: url('${H??""}/Control_menubar.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),x(Ca,"style",`height: ${g*a(d)}px; flex-shrink: 0;`),x(Ft,"style",`
    position: absolute;
    top: ${190*a(d)}px;
    right: ${20*a(d)}px;
    padding: ${10*a(d)}px ${15*a(d)}px;
    background-color: rgba(0, 255, 0, 0.3);
    border: ${2*a(d)}px solid rgba(0, 255, 0, 0.7);
    border-radius: ${8*a(d)}px;
    cursor: pointer;
    font-weight: bold;
    font-size: ${16*a(d)}px;
    color: white;
    text-shadow: 0 0 ${5*a(d)}px rgba(0,0,0,0.8);
    z-index: 10000;
    min-width: ${180*a(d)}px;
    pointer-events: auto;
  `),x(Mt,"winlevel",a(he)/a(ye)>=50?"jackpot":a(he)/a(ye)>=20?"medium":"small"),x(Mt,"winamount",a(he)),x(Wt,"style",`
  position: absolute;
  top: 20px;
  left: 20px;
  display: ${(a(At)?"block":"none")??""};
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
`),z(mr,b),z(br,_),z(yr,$),x(Fs,"style",`color: ${j??""};`),z(xr,`${a(rs)??""}%`),x(Ws,"style",`color: ${B??""};`),z(_r,`${a(is)??""}%`),z(wr,a(kt)),z(Ar,a(ns)),z(kr,`${a(Go)??""}%`),Ye.disabled=a(de).length===0,x(Ye,"style",`
        width: 100%;
        padding: 5px;
        background: ${(a(de).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(a(de).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(a(de).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(a(de).length>0?"1":"0.5")??""};
      `),z($r,`Download Win Log (${a(de).length??""})`),zt.disabled=a(de).length===0,x(zt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(a(de).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(a(de).length>0?"1":"0.5")??""};
      `),x(ft,"style",`
        width: 100%;
        padding: 5px;
        background: ${(a(fe)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(a(fe)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),z(jr,`🎵 Music: ${(a(fe)?"ON":"OFF")??""}`),Us.disabled=a(U),x(Us,"style",`
        width: 100%;
        padding: 5px;
        background: ${(a(U)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(a(U)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(a(U)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(a(U)?"0.5":"1")??""};
      `),x(Nt,"style",`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1500;
  display: ${(a(At)?"block":"none")??""};
`),x(gt,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(a(_e)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(a(_e)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),x(gt,"title",a(_e)?"Mykistä äänet":"Laita äänet päälle"),z(Tr,a(_e)?"🔊":"🔇")},[()=>a(ye).toFixed(2),()=>a($e).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>a(ha).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>a(De).toLocaleString(),()=>a(Ue).toLocaleString(),()=>a(it).toLocaleString(),()=>parseFloat(a(rs))>=95?"#00ff00":parseFloat(a(rs))>=85?"#ffff00":"#ff6666",()=>parseFloat(a(is))>=30?"#00ff00":parseFloat(a(is))>=20?"#ffff00":"#ff6666"]),I("click",vs,()=>{y(He,!a(He))}),I("click",xs,rr),I("click",Ea,or),I("click",Ta,()=>{a(ce)&&pt(),xa()}),I("click",Pt,()=>{a(ce)?pt():y(Ie,!a(Ie))}),I("click",It,()=>{y(Me,!a(Me))}),I("click",Ls,()=>{y(xt,!a(xt))}),I("click",Oa,()=>{y(He,!a(He))}),I("click",Ft,()=>{y(At,!a(At))}),I("click",Ua,ir),I("click",Ye,Vo),I("click",zt,Yo),I("click",ft,zo),I("click",Us,Xo),I("click",gt,()=>{y(_e,!a(_e))}),q(t,_a),vo()}var Un=Z('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),Gn=Z('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function Hn(t,e){go(e,!1);let s=pi(e,"isAuthenticated",12,!1),o=Zs(""),r=Zs(!1);const i="slot2024";function l(){a(o)===i?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(y(r,!0),y(o,""),setTimeout(()=>y(r,!1),3e3))}ho(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),Wr();var c=Mr(),h=mt(c);{var v=u=>{var m=Gn(),g=w(m),E=f(w(g),4),T=w(E);Ai(T),di(2),A(E);var ee=f(E,2);{var G=P=>{var N=Un();q(P,N)};re(ee,P=>{a(r)&&P(G)})}A(g),A(m),$i(T,()=>a(o),P=>y(o,P)),I("submit",E,ji(l)),q(u,m)};re(h,u=>{s()||u(v)})}q(t,c),vo()}var Vn=Z("<!> <!>",1);function ol(t){let e=Zs(!1);var s=Vn(),o=mt(s);Hn(o,{get isAuthenticated(){return a(e)},set isAuthenticated(l){y(e,l)},$$legacy:!0});var r=f(o,2);{var i=l=>{Dn(l,{})};re(r,l=>{a(e)&&l(i)})}q(t,s)}export{Ao as A,xo as C,Oi as R,Li as S,ko as V,ol as _,Ei as u};
