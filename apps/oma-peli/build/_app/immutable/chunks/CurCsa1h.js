const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DVYmgXGV.js","./CfQEHKwl.js","./Db_meveG.js","./BdJg5JGx.js","./PpshkLFU.js","./C2GHuDhf.js","./CHQ9JITV.js","./DHLCHdpO.js"])))=>i.map(i=>d[i]);
var Ca=Object.defineProperty;var Ba=(t,e,s)=>e in t?Ca(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var he=(t,e,s)=>Ba(t,typeof e!="symbol"?e+"":e,s);import{f as Fa,l as Ma,t as ee,g as F,a as q,i as Wa,d as Na}from"./BJCaw-qO.js";import{i as za}from"./CeejRTB0.js";import{R as ve,T as Da,Q as Ua,i as o,w as Ga,W as Ha,X as Xo,Y as Ko,Z as Xs,a1 as vt,a9 as Va,_ as ui,$ as fi,a0 as Ya,ad as hi,O as Xa,z as Ka,I as Qo,ar as Ks,K as Zo,as as Qa,at as Za,au as qa,ac as Ja,av as er,aw as tr,ax as sr,ay as or,a3 as ir,az as ar,aA as rr,N as nr,aB as lr,aC as cr,g as dr,n as pr,p as gi,ai as P,ah as vi,y,aD as ke,f as qe,s as f,c as w,r as A,t as ge,k as Qs,a as mi,aE as ur,aF as io}from"./BdJg5JGx.js";import{_ as qo,p as ae,i as pe}from"./Db_meveG.js";import{a as fr,s as z}from"./Df-H93ww.js";import{b as Jo,p as hr}from"./dtG1_1a4.js";import{b as xe}from"./CqHBLgJp.js";import{e as Oe,E as O,a as gr,C as lo,Q as Ut,V as Gt,N as Zs,D as re,H as vr,p as Fe,a0 as tt,a1 as Me,a2 as mr,w as Pe,a3 as bt,a4 as bi,a5 as st,a6 as $e,a7 as Ht,a8 as yi,a9 as br,aa as qs,ab as yr,ac as xr,y as Nt}from"./CfQEHKwl.js";import{A as _r,B as ei,G as wr,T as xi,a as Ar,b as Js}from"./PpshkLFU.js";function ti(t,e){return e}function kr(t,e,s,i){for(var a=[],r=e.length,n=0;n<r;n++)qa(e[n].e,a,!0);var c=r>0&&a.length===0&&s!==null;if(c){var g=s.parentNode;Ja(g),g.append(s),i.clear(),Re(t,e[0].prev,e[r-1].next)}er(a,()=>{for(var m=0;m<r;m++){var u=e[m];c||(i.delete(u.k),Re(t,u.prev,u.next)),tr(u.e,!c)}})}function si(t,e,s,i,a,r=null){var n=t,c={flags:e,items:new Map,first:null};ve&&Da();var g=null,m=!1,u=Ga(()=>{var b=s();return Xa(b)?b:b==null?[]:hi(b)});Ua(()=>{var b=o(u),v=b.length;if(m&&v===0)return;m=v===0;let E=!1;if(ve){var j=n.data===Ha;j!==(v===0)&&(n=Xo(),Ko(n),Xs(!1),E=!0)}if(ve){for(var se=null,V,T=0;T<v;T++){if(vt.nodeType===8&&vt.data===Va){n=vt,E=!0,Xs(!1);break}var H=b[T],_e=i(H,T);V=_i(vt,c,se,null,H,_e,T,a,e,s),c.items.set(_e,V),se=V}v>0&&Ko(Xo())}ve||$r(b,c,n,a,e,i,s),r!==null&&(v===0?g?ui(g):g=fi(()=>r(n)):g!==null&&Ya(g,()=>{g=null})),E&&Xs(!0),o(u)}),ve&&(n=vt)}function $r(t,e,s,i,a,r,n){var c=t.length,g=e.items,m=e.first,u=m,b,v=null,E=[],j=[],se,V,T,H;for(H=0;H<c;H+=1){if(se=t[H],V=r(se,H),T=g.get(V),T===void 0){var _e=u?u.e.nodes_start:s;v=_i(_e,e,v,v===null?e.first:v.next,se,V,H,i,a,n),g.set(V,v),E=[],j=[],u=v.next;continue}if(Sr(T,se,H),(T.e.f&Ks)!==0&&ui(T.e),T!==u){if(b!==void 0&&b.has(T)){if(E.length<j.length){var Se=j[0],me;v=Se.prev;var Vt=E[0],be=E[E.length-1];for(me=0;me<E.length;me+=1)oi(E[me],Se,s);for(me=0;me<j.length;me+=1)b.delete(j[me]);Re(e,Vt.prev,be.next),Re(e,v,Vt),Re(e,be,Se),u=Se,v=be,H-=1,E=[],j=[]}else b.delete(T),oi(T,u,s),Re(e,T.prev,T.next),Re(e,T,v===null?e.first:v.next),Re(e,v,T),v=T;continue}for(E=[],j=[];u!==null&&u.k!==V;)(u.e.f&Ks)===0&&(b??(b=new Set)).add(u),j.push(u),u=u.next;if(u===null)continue;T=u}E.push(T),v=T,u=T.next}if(u!==null||b!==void 0){for(var ye=b===void 0?[]:hi(b);u!==null;)(u.e.f&Ks)===0&&ye.push(u),u=u.next;var fo=ye.length;if(fo>0){var Yt=null;kr(e,ye,Yt,g)}}Zo.first=e.first&&e.first.e,Zo.last=v&&v.e}function Sr(t,e,s,i){Za(t.v,e),t.i=s}function _i(t,e,s,i,a,r,n,c,g,m){var u=(g&sr)!==0,b=(g&or)===0,v=u?b?Ka(a):Qo(a):a,E=(g&Qa)===0?n:Qo(n),j={i:E,v,k:r,a:null,e:null,prev:s,next:i};try{return j.e=fi(()=>c(t,v,E,m),ve),j.e.prev=s&&s.e,j.e.next=i&&i.e,s===null?e.first=j:(s.next=j,s.e.next=j.e),i!==null&&(i.prev=j,i.e.prev=j.e),j}finally{}}function oi(t,e,s){for(var i=t.next?t.next.e.nodes_start:s,a=e?e.e.nodes_start:s,r=t.e.nodes_start;r!==i;){var n=ir(r);a.before(r),r=n}}function Re(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function Er(t,e,s){var i=t==null?"":""+t;return i=i?i+" "+e:e,i===""?null:i}function jr(t,e,s,i,a,r){var n=t.__className;if(ve||n!==s){var c=Er(s,i);(!ve||c!==t.getAttribute("class"))&&(c==null?t.removeAttribute("class"):t.className=c),t.__className=s}return r}function Tr(t){if(ve){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var i=t.value;x(t,"value",null),t.value=i}if(t.hasAttribute("checked")){var a=t.checked;x(t,"checked",null),t.checked=a}}};t.__on_r=s,ar(s),Fa()}}function x(t,e,s,i){var a=t.__attributes??(t.__attributes={});ve&&(a[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||a[e]!==(a[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[rr]=s),s==null?t.removeAttribute(e):typeof s!="string"&&Lr(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var ii=new Map;function Lr(t){var e=ii.get(t.nodeName);if(e)return e;ii.set(t.nodeName,e=[]);for(var s,i=t,a=Element.prototype;a!==i;){s=lr(i);for(var r in s)s[r].set&&e.push(r);i=nr(i)}return e}function Rr(t,e,s=e){var i=cr();Ma(t,"input",a=>{var r=a?t.defaultValue:t.value;if(r=eo(t)?to(r):r,s(r),i&&r!==(r=e())){var n=t.selectionStart,c=t.selectionEnd;t.value=r??"",c!==null&&(t.selectionStart=n,t.selectionEnd=Math.min(c,t.value.length))}}),(ve&&t.defaultValue!==t.value||dr(e)==null&&t.value)&&s(eo(t)?to(t.value):t.value),pr(()=>{var a=e();eo(t)&&a===to(t.value)||t.type==="date"&&!a&&!t.value||a!==t.value&&(t.value=a??"")})}function eo(t){var e=t.type;return e==="number"||e==="range"}function to(t){return t===""?null:+t}function Pr(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const ao=[];Oe.handleByNamedList(O.Environment,ao);async function Or(t){if(!t)for(let e=0;e<ao.length;e++){const s=ao[e];if(s.value.test()){await s.value.load();return}}}let mt;function Ir(){if(typeof mt=="boolean")return mt;try{mt=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{mt=!1}return mt}var wi=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(wi||{});class Cr{constructor(e){this.items=[],this._name=e}emit(e,s,i,a,r,n,c,g){const{name:m,items:u}=this;for(let b=0,v=u.length;b<v;b++)u[b][m](e,s,i,a,r,n,c,g);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Br=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Ai=class ki extends gr{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...Br,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Or(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const i in this._systemsHash)e={...this._systemsHash[i].constructor.defaultOptions,...e};e={...ki.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let i=0;i<this.runners.init.items.length;i++)await this.runners.init.items[i].init(e);this._initOptions=e}render(e,s){let i=e;if(i instanceof lo&&(i={container:i},s&&(Ut(Gt,"passing a second argument is deprecated, please use render options instead"),i.target=s.renderTexture)),i.target||(i.target=this.view.renderTarget),i.target===this.view.renderTarget&&(this._lastObjectRendered=i.container,i.clearColor??(i.clearColor=this.background.colorRgba),i.clear??(i.clear=this.background.clearBeforeRender)),i.clearColor){const a=Array.isArray(i.clearColor)&&i.clearColor.length===4;i.clearColor=a?i.clearColor:Zs.shared.setValue(i.clearColor).toArray()}i.transform||(i.container.updateLocalTransform(),i.transform=i.container.localTransform),i.container.enableRenderGroup(),this.runners.prerender.emit(i),this.runners.renderStart.emit(i),this.runners.render.emit(i),this.runners.renderEnd.emit(i),this.runners.postrender.emit(i)}resize(e,s,i){const a=this.view.resolution;this.view.resize(e,s,i),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),i!==void 0&&i!==a&&this.runners.resolutionChange.emit(i)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=wi.ALL);const{clear:i,clearColor:a,target:r}=e;Zs.shared.setValue(a??this.background.colorRgba),s.renderTarget.clear(r,i,Zs.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new Cr(s)})}_addSystems(e){let s;for(s in e){const i=e[s];this._addSystem(i.value,i.name)}}_addSystem(e,s){const i=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=i,this._systemsHash[s]=i;for(const a in this.runners)this.runners[a].add(i);return this}_addPipes(e,s){const i=s.reduce((a,r)=>(a[r.name]=r.value,a),{});e.forEach(a=>{const r=a.value,n=a.name,c=i[n];this.renderPipes[n]=new r(this,c?new c:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Ir())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Ai.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let $i=Ai,zt;function Fr(t){return zt!==void 0||(zt=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??$i.defaultOptions.failIfMajorPerformanceCaveat};try{if(!re.get().getWebGLRenderingContext())return!1;let a=re.get().createCanvas().getContext("webgl",e);const r=!!((s=a==null?void 0:a.getContextAttributes())!=null&&s.stencil);if(a){const n=a.getExtension("WEBGL_lose_context");n&&n.loseContext()}return a=null,r}catch{return!1}})()),zt}let Dt;async function Mr(t={}){return Dt!==void 0||(Dt=await(async()=>{const e=re.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),Dt}const ai=["webgl","webgpu","canvas"];async function Wr(t){let e=[];t.preference?(e.push(t.preference),ai.forEach(r=>{r!==t.preference&&e.push(r)})):e=ai.slice();let s,i={};for(let r=0;r<e.length;r++){const n=e[r];if(n==="webgpu"&&await Mr()){const{WebGPURenderer:c}=await qo(async()=>{const{WebGPURenderer:g}=await import("./DVYmgXGV.js");return{WebGPURenderer:g}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=c,i={...t,...t.webgpu};break}else if(n==="webgl"&&Fr(t.failIfMajorPerformanceCaveat??$i.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:c}=await qo(async()=>{const{WebGLRenderer:g}=await import("./DHLCHdpO.js");return{WebGLRenderer:g}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=c,i={...t,...t.webgl};break}else if(n==="canvas")throw i={...t},new Error("CanvasRenderer is not yet implemented")}if(delete i.webgpu,delete i.webgl,!s)throw new Error("No available renderer for the current environment");const a=new s;return await a.init(i),a}const Si="8.8.1";class Ei{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Si)}static destroy(){}}Ei.extension=O.Application;class Nr{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Si)}destroy(){this._renderer=null}}Nr.extension={type:[O.WebGLSystem,O.WebGPUSystem],name:"initHook",priority:-10};const ji=class ro{constructor(...e){this.stage=new lo,e[0]!==void 0&&Ut(Gt,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Wr(e),ro._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Ut(Gt,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const i=ro._plugins.slice(0);i.reverse(),i.forEach(a=>{a.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};ji._plugins=[];let Ti=ji;Oe.handleByList(O.Application,Ti._plugins);Oe.add(Ei);class Li extends _r{constructor(e,s){super();const{textures:i,data:a}=e;Object.keys(a.pages).forEach(r=>{const n=a.pages[parseInt(r,10)],c=i[n.id];this.pages.push({texture:c})}),Object.keys(a.chars).forEach(r=>{const n=a.chars[r],{frame:c,source:g}=i[n.page],m=new vr(n.x+c.x,n.y+c.y,n.width,n.height),u=new Fe({source:g,frame:m});this.chars[r]={id:r.codePointAt(0),xOffset:n.xOffset,yOffset:n.yOffset,xAdvance:n.xAdvance,kerning:n.kerning??{},texture:u}}),this.baseRenderedFontSize=a.fontSize,this.baseMeasurementFontSize=a.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:a.fontSize},this.baseLineOffset=a.baseLineOffset,this.lineHeight=a.lineHeight,this.fontFamily=a.fontFamily,this.distanceField=a.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){ei.install(e)}static uninstall(e){ei.uninstall(e)}}const so={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const b in e){const v=e[b].match(/^[a-z]+/gm)[0],E=e[b].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),j={};for(const se in E){const V=E[se].split("="),T=V[0],H=V[1].replace(/"/gm,""),_e=parseFloat(H),Se=isNaN(_e)?H:_e;j[T]=Se}s[v].push(j)}const i={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[a]=s.info,[r]=s.common,[n]=s.distanceField??[];n&&(i.distanceField={range:parseInt(n.distanceRange,10),type:n.fieldType}),i.fontSize=parseInt(a.size,10),i.fontFamily=a.face,i.lineHeight=parseInt(r.lineHeight,10);const c=s.page;for(let b=0;b<c.length;b++)i.pages.push({id:parseInt(c[b].id,10)||0,file:c[b].file});const g={};i.baseLineOffset=i.lineHeight-parseInt(r.base,10);const m=s.char;for(let b=0;b<m.length;b++){const v=m[b],E=parseInt(v.id,10);let j=v.letter??v.char??String.fromCharCode(E);j==="space"&&(j=" "),g[E]=j,i.chars[j]={id:E,page:parseInt(v.page,10)||0,x:parseInt(v.x,10),y:parseInt(v.y,10),width:parseInt(v.width,10),height:parseInt(v.height,10),xOffset:parseInt(v.xoffset,10),yOffset:parseInt(v.yoffset,10),xAdvance:parseInt(v.xadvance,10),kerning:{}}}const u=s.kerning||[];for(let b=0;b<u.length;b++){const v=parseInt(u[b].first,10),E=parseInt(u[b].second,10),j=parseInt(u[b].amount,10);i.chars[g[E]].kerning[g[v]]=j}return i}},ri={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],i=t.getElementsByTagName("common")[0],a=t.getElementsByTagName("distanceField")[0];a&&(e.distanceField={type:a.getAttribute("fieldType"),range:parseInt(a.getAttribute("distanceRange"),10)});const r=t.getElementsByTagName("page"),n=t.getElementsByTagName("char"),c=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(i.getAttribute("lineHeight"),10);for(let m=0;m<r.length;m++)e.pages.push({id:parseInt(r[m].getAttribute("id"),10)||0,file:r[m].getAttribute("file")});const g={};e.baseLineOffset=e.lineHeight-parseInt(i.getAttribute("base"),10);for(let m=0;m<n.length;m++){const u=n[m],b=parseInt(u.getAttribute("id"),10);let v=u.getAttribute("letter")??u.getAttribute("char")??String.fromCharCode(b);v==="space"&&(v=" "),g[b]=v,e.chars[v]={id:b,page:parseInt(u.getAttribute("page"),10)||0,x:parseInt(u.getAttribute("x"),10),y:parseInt(u.getAttribute("y"),10),width:parseInt(u.getAttribute("width"),10),height:parseInt(u.getAttribute("height"),10),xOffset:parseInt(u.getAttribute("xoffset"),10),yOffset:parseInt(u.getAttribute("yoffset"),10),xAdvance:parseInt(u.getAttribute("xadvance"),10),kerning:{}}}for(let m=0;m<c.length;m++){const u=parseInt(c[m].getAttribute("first"),10),b=parseInt(c[m].getAttribute("second"),10),v=parseInt(c[m].getAttribute("amount"),10);e.chars[g[b]].kerning[g[u]]=v}return e}},ni={test(t){return typeof t=="string"&&t.includes("<font>")?ri.test(re.get().parseXML(t)):!1},parse(t){return ri.parse(re.get().parseXML(t))}},zr=[".xml",".fnt"],Dr={extension:{type:O.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof Li,getCacheableAssets(t,e){const s={};return t.forEach(i=>{s[i]=e,s[`${i}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},Ur={extension:{type:O.LoadParser,priority:tt.Normal},name:"loadBitmapFont",test(t){return zr.includes(Me.extname(t).toLowerCase())},async testParse(t){return so.test(t)||ni.test(t)},async parse(t,e,s){const i=so.test(t)?so.parse(t):ni.parse(t),{src:a}=e,{pages:r}=i,n=[],c=i.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let b=0;b<r.length;++b){const v=r[b].file;let E=Me.join(Me.dirname(a),v);E=mr(E,a),n.push({src:E,data:c})}const g=await s.load(n),m=n.map(b=>g[b.src]);return new Li({data:i,textures:m},a)},async load(t,e){return await(await re.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(i=>s.unload(i.texture.source._sourceOrigin))),t.destroy()}};class Gr{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let i=0;i<s;i++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Hr={extension:{type:O.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Fe),getCacheableAssets:(t,e)=>{const s={};return t.forEach(i=>{e.forEach((a,r)=>{s[i+(r===0?"":r+1)]=a})}),s}};async function Ri(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Vr={extension:{type:O.DetectionParser,priority:1},test:async()=>Ri("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},li=["png","jpg","jpeg"],Yr={extension:{type:O.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...li],remove:async t=>t.filter(e=>!li.includes(e))},Xr="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function co(t){return Xr?!1:document.createElement("video").canPlayType(t)!==""}const Kr={extension:{type:O.DetectionParser,priority:0},test:async()=>co("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},Qr={extension:{type:O.DetectionParser,priority:0},test:async()=>co("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},Zr={extension:{type:O.DetectionParser,priority:0},test:async()=>co("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},qr={extension:{type:O.DetectionParser,priority:0},test:async()=>Ri("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class Jr{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,i)=>(this._parsersValidated=!1,e[s]=i,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const i={promise:null,parser:null};return i.promise=(async()=>{var n,c;let a=null,r=null;if(s.loadParser&&(r=this._parserHash[s.loadParser],r||Pe(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!r){for(let g=0;g<this.parsers.length;g++){const m=this.parsers[g];if(m.load&&((n=m.test)!=null&&n.call(m,e,s,this))){r=m;break}}if(!r)return Pe(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}a=await r.load(e,s,this),i.parser=r;for(let g=0;g<this.parsers.length;g++){const m=this.parsers[g];m.parse&&m.parse&&await((c=m.testParse)==null?void 0:c.call(m,a,s,this))&&(a=await m.parse(a,s,this)||a,i.parser=m)}return a})(),i}async load(e,s){this._parsersValidated||this._validateParsers();let i=0;const a={},r=bi(e),n=bt(e,m=>({alias:[m],src:m,data:{}})),c=n.length,g=n.map(async m=>{const u=Me.toAbsolute(m.src);if(!a[m.src])try{this.promiseCache[u]||(this.promiseCache[u]=this._getLoadPromiseAndParser(u,m)),a[m.src]=await this.promiseCache[u].promise,s&&s(++i/c)}catch(b){throw delete this.promiseCache[u],delete a[m.src],new Error(`[Loader.load] Failed to load ${u}.
${b}`)}});return await Promise.all(g),r?a[n[0].src]:a}async unload(e){const i=bt(e,a=>({alias:[a],src:a})).map(async a=>{var c,g;const r=Me.toAbsolute(a.src),n=this.promiseCache[r];if(n){const m=await n.promise;delete this.promiseCache[r],await((g=(c=n.parser)==null?void 0:c.unload)==null?void 0:g.call(c,m,a,this))}});await Promise.all(i)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&Pe(`[Assets] loadParser name conflict "${s.name}"`):Pe("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function ot(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const en=".json",tn="application/json",sn={extension:{type:O.LoadParser,priority:tt.Low},name:"loadJson",test(t){return ot(t,tn)||st(t,en)},async load(t){return await(await re.get().fetch(t)).json()}},on=".txt",an="text/plain",rn={name:"loadTxt",extension:{type:O.LoadParser,priority:tt.Low,name:"loadTxt"},test(t){return ot(t,an)||st(t,on)},async load(t){return await(await re.get().fetch(t)).text()}},nn=["normal","bold","100","200","300","400","500","600","700","800","900"],ln=[".ttf",".otf",".woff",".woff2"],cn=["font/ttf","font/otf","font/woff","font/woff2"],dn=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function pn(t){const e=Me.extname(t),a=Me.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(c=>c.charAt(0).toUpperCase()+c.slice(1));let r=a.length>0;for(const c of a)if(!c.match(dn)){r=!1;break}let n=a.join(" ");return r||(n=`"${n.replace(/[\\"]/g,"\\$&")}"`),n}const un=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function fn(t){return un.test(t)?t:encodeURI(t)}const hn={extension:{type:O.LoadParser,priority:tt.Low},name:"loadWebFont",test(t){return ot(t,cn)||st(t,ln)},async load(t,e){var i,a,r;const s=re.get().getFontFaceSet();if(s){const n=[],c=((i=e.data)==null?void 0:i.family)??pn(t),g=((r=(a=e.data)==null?void 0:a.weights)==null?void 0:r.filter(u=>nn.includes(u)))??["normal"],m=e.data??{};for(let u=0;u<g.length;u++){const b=g[u],v=new FontFace(c,`url(${fn(t)})`,{...m,weight:b});await v.load(),s.add(v),n.push(v)}return $e.set(`${c}-and-url`,{url:t,fontFaces:n}),n.length===1?n[0]:n}return Pe("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{$e.remove(`${e.family}-and-url`),re.get().getFontFaceSet().delete(e)})}};function po(t,e=1){var i;const s=(i=Ht.RETINA_PREFIX)==null?void 0:i.exec(t);return s?parseFloat(s[1]):e}function uo(t,e,s){t.label=s,t._sourceOrigin=s;const i=new Fe({source:t,label:s}),a=()=>{delete e.promiseCache[s],$e.has(s)&&$e.remove(s)};return i.source.once("destroy",()=>{e.promiseCache[s]&&(Pe("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),a())}),i.once("destroy",()=>{t.destroyed||(Pe("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),a())}),i}const gn=".svg",vn="image/svg+xml",mn={extension:{type:O.LoadParser,priority:tt.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return ot(t,vn)||st(t,gn)},async load(t,e,s){var i;return((i=e.data)==null?void 0:i.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?yn(t):bn(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function bn(t,e,s,i){var V,T,H;const r=await(await re.get().fetch(t)).blob(),n=URL.createObjectURL(r),c=new Image;c.src=n,c.crossOrigin=i,await c.decode(),URL.revokeObjectURL(n);const g=document.createElement("canvas"),m=g.getContext("2d"),u=((V=e.data)==null?void 0:V.resolution)||po(t),b=((T=e.data)==null?void 0:T.width)??c.width,v=((H=e.data)==null?void 0:H.height)??c.height;g.width=b*u,g.height=v*u,m.drawImage(c,0,0,b*u,v*u);const{parseAsGraphicsContext:E,...j}=e.data??{},se=new yi({resource:g,alphaMode:"premultiply-alpha-on-upload",resolution:u,...j});return uo(se,s,t)}async function yn(t){const s=await(await re.get().fetch(t)).text(),i=new wr;return i.svg(s),i}const xn=`(function () {
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
`;let Je=null,no=class{constructor(){Je||(Je=URL.createObjectURL(new Blob([xn],{type:"application/javascript"}))),this.worker=new Worker(Je)}};no.revokeObjectURL=function(){Je&&(URL.revokeObjectURL(Je),Je=null)};const _n=`(function () {
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
`;let et=null;class Pi{constructor(){et||(et=URL.createObjectURL(new Blob([_n],{type:"application/javascript"}))),this.worker=new Worker(et)}}Pi.revokeObjectURL=function(){et&&(URL.revokeObjectURL(et),et=null)};let ci=0,oo;class wn{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new no;s.addEventListener("message",i=>{s.terminate(),no.revokeObjectURL(),e(i.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var i;return this._run("loadImageBitmap",[e,(i=s==null?void 0:s.data)==null?void 0:i.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){oo===void 0&&(oo=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<oo&&(this._createdWorkers++,e=new Pi().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const i=new Promise((a,r)=>{this._queue.push({id:e,arguments:s,resolve:a,reject:r})});return this._next(),i}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),i=s.id;this._resolveHash[ci]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:ci++,id:i})}}const di=new wn,An=[".jpeg",".jpg",".png",".webp",".avif"],kn=["image/jpeg","image/png","image/webp","image/avif"];async function $n(t,e){var a;const s=await re.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const i=await s.blob();return((a=e==null?void 0:e.data)==null?void 0:a.alphaMode)==="premultiplied-alpha"?createImageBitmap(i,{premultiplyAlpha:"none"}):createImageBitmap(i)}const Oi={name:"loadTextures",extension:{type:O.LoadParser,priority:tt.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return ot(t,kn)||st(t,An)},async load(t,e,s){var r;let i=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await di.isImageBitmapSupported()?i=await di.loadImageBitmap(t,e):i=await $n(t,e):i=await new Promise((n,c)=>{i=new Image,i.crossOrigin=this.config.crossOrigin,i.src=t,i.complete?n(i):(i.onload=()=>{n(i)},i.onerror=c)});const a=new yi({resource:i,alphaMode:"premultiply-alpha-on-upload",resolution:((r=e.data)==null?void 0:r.resolution)||po(t),...e.data});return uo(a,s,t)},unload(t){t.destroy(!0)}},Ii=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Sn=Ii.map(t=>`video/${t.substring(1)}`);function En(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=Tn(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function jn(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",i),t.addEventListener("error",a),t.load();function i(){r(),e()}function a(n){r(),s(n)}function r(){t.removeEventListener("canplaythrough",i),t.removeEventListener("error",a)}})}function Tn(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const Ln={name:"loadVideo",extension:{type:O.LoadParser,name:"loadVideo"},test(t){const e=ot(t,Sn),s=st(t,Ii);return e||s},async load(t,e,s){var g,m;const i={...qs.defaultOptions,resolution:((g=e.data)==null?void 0:g.resolution)||po(t),alphaMode:((m=e.data)==null?void 0:m.alphaMode)||await br(),...e.data},a=document.createElement("video"),r={preload:i.autoLoad!==!1?"auto":void 0,"webkit-playsinline":i.playsinline!==!1?"":void 0,playsinline:i.playsinline!==!1?"":void 0,muted:i.muted===!0?"":void 0,loop:i.loop===!0?"":void 0,autoplay:i.autoPlay!==!1?"":void 0};Object.keys(r).forEach(u=>{const b=r[u];b!==void 0&&a.setAttribute(u,b)}),i.muted===!0&&(a.muted=!0),En(a,t,i.crossorigin);const n=document.createElement("source");let c;if(t.startsWith("data:"))c=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const u=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();c=qs.MIME_TYPES[u]||`video/${u}`}return n.src=t,c&&(n.type=c),new Promise(u=>{const b=async()=>{const v=new qs({...i,resource:a});a.removeEventListener("canplay",b),e.data.preload&&await jn(a),u(uo(v,s,t))};a.addEventListener("canplay",b),a.appendChild(n)})},unload(t){t.destroy(!0)}},Ci={extension:{type:O.ResolveParser,name:"resolveTexture"},test:Oi.test,parse:t=>{var e;return{resolution:parseFloat(((e=Ht.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},Rn={extension:{type:O.ResolveParser,priority:-2,name:"resolveJson"},test:t=>Ht.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:Ci.parse};class Pn{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Ht,this.loader=new Jr,this.cache=$e,this._backgroundLoader=new Gr(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var r,n;if(this._initialized){Pe("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let c=e.manifest;typeof c=="string"&&(c=await this.load(c)),this.resolver.addManifest(c)}const s=((r=e.texturePreference)==null?void 0:r.resolution)??1,i=typeof s=="number"?[s]:s,a=await this._detectFormats({preferredFormats:(n=e.texturePreference)==null?void 0:n.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:a,resolution:i}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const i=bi(e),a=bt(e).map(c=>{if(typeof c!="string"){const g=this.resolver.getAlias(c);return g.some(m=>!this.resolver.hasKey(m))&&this.add(c),Array.isArray(g)?g[0]:g}return this.resolver.hasKey(c)||this.add({alias:c,src:c}),c}),r=this.resolver.resolve(a),n=await this._mapLoadToResolve(r,s);return i?n[a[0]]:n}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let i=!1;typeof e=="string"&&(i=!0,e=[e]);const a=this.resolver.resolveBundle(e),r={},n=Object.keys(a);let c=0,g=0;const m=()=>{s==null||s(++c/g)},u=n.map(b=>{const v=a[b];return g+=Object.keys(v).length,this._mapLoadToResolve(v,m).then(E=>{r[b]=E})});return await Promise.all(u),i?r[e[0]]:r}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(i=>{this._backgroundLoader.add(Object.values(i))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return $e.get(e);const s={};for(let i=0;i<e.length;i++)s[i]=$e.get(e[i]);return s}async _mapLoadToResolve(e,s){const i=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const a=await this.loader.load(i,s);this._backgroundLoader.active=!0;const r={};return i.forEach(n=>{const c=a[n.src],g=[n.src];n.alias&&g.push(...n.alias),g.forEach(m=>{r[m]=c}),$e.set(g,c)}),r}async unload(e){this._initialized||await this.init();const s=bt(e).map(a=>typeof a!="string"?a.src:a),i=this.resolver.resolve(s);await this._unloadFromResolved(i)}async unloadBundle(e){this._initialized||await this.init(),e=bt(e);const s=this.resolver.resolveBundle(e),i=Object.keys(s).map(a=>this._unloadFromResolved(s[a]));await Promise.all(i)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(i=>{$e.remove(i.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const i of e.detections)e.skipDetections||await i.test()?s=await i.add(s):e.skipDetections||(s=await i.remove(s));return s=s.filter((i,a)=>s.indexOf(i)===a),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(i=>i in e).forEach(i=>{s.config[i]=e[i]})})}}const Ze=new Pn;Oe.handleByList(O.LoadParser,Ze.loader.parsers).handleByList(O.ResolveParser,Ze.resolver.parsers).handleByList(O.CacheParser,Ze.cache.parsers).handleByList(O.DetectionParser,Ze.detections);Oe.add(Hr,Yr,Vr,qr,Kr,Qr,Zr,sn,rn,hn,mn,Oi,Ln,Ur,Dr,Ci,Rn);const pi={loader:O.LoadParser,resolver:O.ResolveParser,cache:O.CacheParser,detection:O.DetectionParser};Oe.handle(O.Asset,t=>{const e=t.ref;Object.entries(pi).filter(([s])=>!!e[s]).forEach(([s,i])=>Oe.add(Object.assign(e[s],{extension:e[s].extension??i})))},t=>{const e=t.ref;Object.keys(pi).filter(s=>!!e[s]).forEach(s=>Oe.remove(e[s]))});class On extends yr{constructor(e,s){const{text:i,resolution:a,style:r,anchor:n,width:c,height:g,roundPixels:m,...u}=e;super({...u}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=i??"",this.style=r,this.resolution=a??null,this.allowChildren=!1,this._anchor=new xr({_onUpdate:()=>{this.onViewUpdate()}}),n&&(this.anchor=n),this.roundPixels=m??!1,c!==void 0&&(this.width=c),g!==void 0&&(this.height=g)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,i=this.bounds.height,a=-s*this.anchor.x;let r=0;return e.x>=a&&e.x<=a+s&&(r=-i*this.anchor.y,e.y>=r&&e.y<=r+i)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function In(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(Ut(Gt,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class Cn extends On{constructor(...e){const s=In(e,"Text");super(s,xi),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,i=Ar.measureText(this._text,this._style),{width:a,height:r}=i;e.minX=-s._x*a,e.maxX=e.minX+a,e.minY=-s._y*r,e.maxY=e.minY+r}}var Bn=Wa('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-tijp0o"><\/script><!---->',1),Fn=ee('<p style="color: red;" class="svelte-tijp0o"><strong class="svelte-tijp0o">Error:</strong> </p>'),Mn=ee('<div class="svelte-tijp0o"> </div>'),Wn=ee('<details class="svelte-tijp0o"><summary class="svelte-tijp0o"> </summary> <!></details>'),Nn=ee(`<div style="
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
  " class="svelte-tijp0o"><h3 class="svelte-tijp0o">🎰 Oma-peli Debug</h3> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Status:</strong> </p> <!> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Base:</strong> </p> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">BG URL:</strong> </p> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Sample:</strong> </p> <!></div>`),zn=ee('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-tijp0o"> </div>'),Dn=ee('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-tijp0o"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-tijp0o"> </span></div>'),Un=ee(`<div style="
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
      " class="svelte-tijp0o">Jatka pelaamista</button></div>`),Gn=ee(`<div class="svelte-tijp0o"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-tijp0o">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-tijp0o">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-tijp0o"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-tijp0o"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-tijp0o">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-tijp0o">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-tijp0o">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-tijp0o">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-tijp0o">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-tijp0o">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-tijp0o"> <span style="color: #ffd700;" class="svelte-tijp0o">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-tijp0o">Sulje</button></div>`),Hn=ee('<div class="svelte-tijp0o"><div class="svelte-tijp0o">SPIN SPEED</div> <button class="svelte-tijp0o">🐌 SLOW</button> <button class="svelte-tijp0o">⚡ MEDIUM</button> <button class="svelte-tijp0o">🚀 FAST</button></div>'),Vn=ee(`<div style="
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
        " class="svelte-tijp0o">⏹ STOP</button></div>`),Yn=ee(`<div style="
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
          " class="svelte-tijp0o">Cancel</button></div>`),Xn=ee(`<button style="
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
      " class="svelte-tijp0o">🔄 AUTOPLAY</button> <!>`,1),Kn=ee(`<!> <!> <!> <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #000;
" class="svelte-tijp0o"><div class="svelte-tijp0o"><div class="svelte-tijp0o"><button class="svelte-tijp0o">💰 PAYTABLE</button> <button class="svelte-tijp0o"></button> <div class="control-panel-mobile svelte-tijp0o"><img alt="Left End" class="svelte-tijp0o"> <div class="svelte-tijp0o"><div class="svelte-tijp0o"><div class="svelte-tijp0o">BET</div> <div class="svelte-tijp0o"><button title="Decrease Bet" class="svelte-tijp0o"></button> <div class="svelte-tijp0o"> </div> <button title="Increase Bet" class="svelte-tijp0o"></button> <button title="Max Bet" class="svelte-tijp0o">MAX</button></div></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><div class="svelte-tijp0o">BALANCE</div> <div class="svelte-tijp0o"> </div></div> <img alt="Divider" class="svelte-tijp0o"> <div style="position: relative; display: flex; align-items: center; justify-content: center; flex-grow: 0.5;" class="svelte-tijp0o"><div><button title="SPIN" class="svelte-tijp0o"></button></div></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><button title="Autoplay" class="svelte-tijp0o"></button> <img alt="Status bar" class="svelte-tijp0o"></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><button class="svelte-tijp0o"></button> <div class="svelte-tijp0o"> </div> <!></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><button title="Fast Play" class="svelte-tijp0o"></button> <img alt="Status bar" class="svelte-tijp0o"></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><div class="svelte-tijp0o">WIN</div> <div class="svelte-tijp0o"> </div></div> <img alt="Divider" class="svelte-tijp0o"> <button title="Menu" class="svelte-tijp0o"></button></div> <img alt="Right End" class="svelte-tijp0o"></div></div>  <button <VinylWinAnimation="" class="svelte-tijp0o"></button>  <div class="debug-panel svelte-tijp0o"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-tijp0o">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-tijp0o"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Rounds:</span> <span style="color: #fff;" class="svelte-tijp0o"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Wagered:</span> <span style="color: #ff6666;" class="svelte-tijp0o"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Won:</span> <span style="color: #66ff66;" class="svelte-tijp0o"> </span></div> <div style="
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
  " class="svelte-tijp0o"><button class="svelte-tijp0o"> </button> <button class="svelte-tijp0o">Clear Win Log</button> <button class="svelte-tijp0o"> </button> <button class="svelte-tijp0o">🎰 Test Free Spins</button></div></div> <div class="debug-panel svelte-tijp0o"><!></div> <button class="debug-panel svelte-tijp0o"> </button></div></div>`,1);function Qn(t,e){gi(e,!0);const s="1.2.7",i=13,a=1445,r=1e3,n=1.75,c=-30,g=-10,m=160,u=0,b=750,v=80,E=250,j=0,se=50,V=.5,T=40,H=0,_e=-40,Se=1,me="height",be=Math.round(100*n),ye=Math.round(be*(700/760)),Yt=ye+10,Xt=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],ho=typeof window<"u"&&window.location.hostname.includes("github.io"),te=ho?"/web-sdk/oma-peli/symbols":`${xe}/symbols`,Y=ho?"/web-sdk/oma-peli/controls":`${xe}/controls`,Kt={a:`${te}/Blue_hotrod.jpg`,b:`${te}/Blue_jacket.jpg`,c:`${te}/Blue_rollers.jpg`,d:`${te}/Blue_speakers.jpg`,e:`${te}/Premium_blonde.jpg`,f:`${te}/Premium_brunette.jpg`,g:`${te}/Premium_rocker.jpg`,h:`${te}/New_Wild.jpg`,i:`${te}/Red_burger.jpg`,j:`${te}/Red_fries.jpg`,k:`${te}/Red_milkshake.jpg`,l:`${te}/Scatter.jpg`,emptyslot:`${te}/Emptyslot.jpg`},Qt=`${te}/bg_base.jpg`,go=`${te}/ReelFrames.png`,vo=`${te}/RockABillyReels_logo.png`,Bi={spin:`${xe}/sounds/spin.mp3`,stop:`${xe}/sounds/stop.mp3`,win:`${xe}/sounds/win.mp3`};let we=P(!0),Zt={},M=null,ne=null,qt=null,Jt=null,le=P(!0),Fi=P(!1),yt=P(!1),es=P(945),ts=null;const Mi={fast:1,medium:10,slow:18};let X=P("medium"),We=P(!1),xt=P(Math.floor(Math.random()*20)+1);const it={background:()=>`${xe}/music/rockabilly reels loop ${o(xt)}.mp3`,freeSpins:`${xe}/music/rockabilly-loop_long.mp3`,drumHit:`${xe}/music/drum-hit.mp3`,winTheme:`${xe}/music/win-stinger.mp3`};function mo(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(mo,500);return}const l=window.Howl;try{M=new l({src:[it.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+o(xt)+")"),y(Fi,!0)},onloaderror:(p,$)=>{console.warn("⚠️ Background music not found:",$)}}),ne=new l({src:[it.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(p,$)=>console.warn("⚠️ Free spins music not found:",$)}),qt=new l({src:[it.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Jt=new l({src:[it.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(p){console.error("Failed to initialize music system:",p)}}function bo(){const l=o(D)?ne:M;l&&o(le)&&!l.playing()&&(l.play(),console.log("🎵 "+(o(D)?"Free spins":"Background")+" music started"))}function Wi(){if(o(D))return;const l=Math.floor(Math.random()*20)+1;y(xt,l),M&&(M.playing()&&(M.fade(M.volume(),0,300),setTimeout(()=>M.stop(),300)),M.unload());const p=window.Howl;p&&(M=new p({src:[it.background()],loop:!0,volume:.3,onload:()=>{console.log("🎵 New background music loop #"+o(xt)+" loaded"),o(le)&&!o(D)&&setTimeout(()=>M.play(),400)}}))}function Ni(){M&&M.playing()&&(M.fade(M.volume(),0,500),setTimeout(()=>M.stop(),500)),ne&&ne.playing()&&(ne.fade(ne.volume(),0,500),setTimeout(()=>ne.stop(),500))}function ss(){M&&M.playing()&&(M.fade(M.volume(),0,500),setTimeout(()=>M.stop(),500)),ne&&ne.playing()&&(ne.fade(ne.volume(),0,500),setTimeout(()=>ne.stop(),500)),setTimeout(()=>{o(le)&&bo()},600)}function zi(){if(M&&M.playing()){const l=M.volume();M.fade(l,0,1e3),setTimeout(()=>{M.stop(),M.volume(.3)},1e3)}}let os=P(!1);function Di(){y(os,!1),setTimeout(()=>{y(os,!0)},10)}let Ne=null;function Ui(){y(le,!o(le)),o(le)?bo():Ni()}function Gi(){qt&&o(le)&&o(we)&&qt.play()}function Hi(){Jt&&o(le)&&o(we)&&Jt.play()}let _t=null,ze=null,at=null,rt=null,nt=P("Initializing..."),De=P(""),ue=[],Ee=P(1e3),J=P(10),yo=P(0);const xo=1,is=100;let ce=P(!1),Ue=P(0),Ie=P(!1),wt=P(!1),Vi=P(0),Ce=!1,Ae=null,as=!1,Ge=P(0),He=P(0),lt=P(0),rs=P(0),ns=Qs(()=>o(He)>0?(o(lt)/o(He)*100).toFixed(2):"0.00"),ls=Qs(()=>o(Ge)>0?(o(rs)/o(Ge)*100).toFixed(2):"0.00"),D=P(!1),je=P(0),Be=P(0),At=P(0),cs=P(0),kt=P(0),ds=P(0),Yi=Qs(()=>o(kt)>0?(o(ds)/o(kt)*100).toFixed(2):"0.00"),de=P(ae([]));function Xi(l,p,$){const h=new Date().toLocaleString("fi-FI");let _=`
${"=".repeat(60)}
`;_+=`ROUND #${l} - ${h}
`,_+=`Mode: ${o(D)?"FREE SPINS":"BASE GAME"}
`,_+=`${"=".repeat(60)}
`,p.forEach((k,L)=>{_+=`
Win ${L+1}:
`,_+=`  Symbol: ${k.symbol} (${ko[k.symbol]})
`,_+=`  Count: ${k.count} symbols
`,_+=`  Multiplier: ${k.multiplier}x
`,_+=`  Payout: ${k.payout.toFixed(2)}
`,_+=`  Positions: [${k.positions.join(", ")}]
`}),_+=`
${"─".repeat(60)}
`,_+=`TOTAL WIN: ${$.toFixed(2)}
`,_+=`${"=".repeat(60)}
`,o(de).push(_)}function Ki(){const l=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${o(de).join(`
`)}`,p=new Blob([l],{type:"text/plain"}),$=URL.createObjectURL(p),h=document.createElement("a");h.href=$,h.download=`win-log-${Date.now()}.txt`,h.click(),URL.revokeObjectURL($)}function Qi(){y(de,ae([]))}function Zi(){o(D)||(y(D,!0),y(je,10),y(Be,0),ke(At),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),ss())}const qi={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},Ji={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function _o(l){if(l===6)return Math.random()<.55?"h":"emptyslot";const p=o(D)?Ji:qi,$=Math.random();let h=0;const _=Xt.filter(L=>L!=="h"),k=_.reduce((L,W)=>L+p[W],0);for(const L of _)if(h+=p[L]/k,$<h)return L;return"f"}function wo(){const l=[];for(let p=0;p<i;p++){const $=_o(p);l.push($),ke(kt),$==="emptyslot"&&ke(ds)}return l}function Ao(l){return l<3?{col:0,row:l}:l<6?{col:1,row:l-3}:l===6?{col:2,row:0}:l<10?{col:3,row:l-7}:{col:4,row:l-10}}function ct(l,p){return l===0?p:l===1?3+p:l===2?6:l===3?7+p:l===4?10+p:-1}function ea(){if(o(D)){const l=Math.random();return l<.7?3:l<.92?5:10}else{const l=Math.random();return l<.7?1:l<.92?2:3}}const ta={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function sa(){var G;const l=[],p=[];for(let S=0;S<i;S++)dt[S]==="l"&&p.push(S);if(p.length>=5){const S=p.length;y(je,o(je)+S),o(D)?console.log(`🎰 FREE SPINS RETRIGGERED! +${S} FREE SPINS! Total: ${o(je)}`):(y(D,!0),y(Be,0),ke(At),console.log(`🎰 FREE SPINS TRIGGERED! ${p.length} scatters = ${S} FREE SPINS!`),ss()),l.push({symbol:"l",count:p.length,payout:0,positions:p,multiplier:1})}const $=[];for(let S=0;S<3;S++)for(let R=0;R<3;R++)for(let I=0;I<1;I++)for(let C=0;C<3;C++)for(let B=0;B<3;B++){const N=[ct(0,S),ct(1,R),ct(2,I),ct(3,C),ct(4,B)];$.push(N)}console.log(`Generated ${$.length} possible paths (should be 81)`);const h=[];for(const S of $){const R=S.map(N=>dt[N]);if(R[0]==="emptyslot"||R[0]==="l")continue;let I=null;for(let N=0;N<R.length;N++)if(R[N]!=="h"&&R[N]!=="emptyslot"&&R[N]!=="l"){I=R[N];break}if(!I)continue;let C=0;const B=new Set;for(let N=0;N<S.length;N++){const Le=S[N],{col:Qe}=Ao(Le),ie=R[N];(ie===I||ie==="h")&&B.add(Qe)}for(let N=0;N<5&&B.has(N);N++)C++;if(C>=3){const Le=S[0]%3;h.push({symbol:I,length:C,path:S.slice(0,C),startRow:Le})}}const _=[],k=new Map;for(const S of h){const R=`${S.symbol}-${S.path.join(",")}`;k.has(R)||k.set(R,[]),k.get(R).push(S)}for(const[S,R]of k.entries()){const I=Math.max(...R.map(B=>B.length)),C=R.find(B=>B.length===I);C&&_.push(C)}const L=[],W=new Map;for(const S of _)W.has(S.symbol)||W.set(S.symbol,[]),W.get(S.symbol).push(S);const K=[];for(const[S,R]of W.entries()){const I=Math.max(...R.map(B=>B.length)),C=R.filter(B=>B.length===I);K.push(...C)}const Q=new Map;for(const S of K){const R=`${S.symbol}-${S.length}`;Q.has(R)||Q.set(R,[]),Q.get(R).push(S)}const Z=K.length>0?ea():1;for(const[S,R]of Q.entries()){const I=R[0],C=(G=ta[I.symbol])==null?void 0:G[I.length];if(C!==void 0&&C>0){const B=new Map;for(const ie of R)for(let oe=0;oe<ie.length;oe++)B.has(oe)||B.set(oe,new Set),B.get(oe).add(ie.path[oe]);let N=1;for(let ie=0;ie<I.length;ie++){const oe=B.get(ie);N*=oe?oe.size:1}const Le=C*o(J)*N*Z;console.log(`  ${I.length}x${I.symbol}: ${N} ways × ${C}x × ${o(J)} bet × ${Z} mult = ${Le}`);const Qe=new Set;for(const ie of R)ie.path.forEach(oe=>Qe.add(oe));L.push({symbol:I.symbol,count:I.length,payout:Le,positions:Array.from(Qe),multiplier:Z})}}return l.push(...L),l}let fe=P(0),Ve=P(ae([])),Te=P(!1),Ye=P(!1);const ko={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function ps(l){if(!o(we)||!Zt[l])return;const p=Zt[l];p.currentTime=0,p.play().catch($=>{console.warn("Äänen toisto epäonnistui:",l,$)})}function oa(l){pt.forEach(p=>U.stage.removeChild(p)),pt=[],l.forEach(p=>{p.positions.forEach($=>{const h=Xe[$],_=new Js().rect(0,0,be,ye).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});_.x=h.container.x,_.y=h.container.y,U.stage.addChild(_),pt.push(_);let k=0,L=1;const W=.05;U.ticker.add(()=>{k+=L*W,k>=.4&&(L=-1),k<=0&&(L=1),_.alpha=.5+k})})})}function us(){pt.forEach(l=>U.stage.removeChild(l)),pt=[]}let dt=wo(),fs,U,Xe=[],pt=[];class ia{constructor(p,$){he(this,"index");he(this,"container");he(this,"offset",0);he(this,"speed",0);he(this,"targetSpeed",30);he(this,"state","idle");he(this,"stopDelay",0);he(this,"bounceOffset",0);he(this,"bounceSpeed",0);he(this,"bounceFrames",0);this.index=p,this.container=$}start(p){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=p}startSynchronized(p){const $=Mi[o(X)],h=60+p*$;this.start(h)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const p=o(X)==="slow"?.88:o(X)==="medium"?.92:.95;this.speed*=p,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,ps("stop"),Gi())}this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=Yt&&(this.offset=0,dt[this.index]=_o(this.index)))}}draw(){const p=this.container;p.removeChildren();const $=dt[this.index];if(!$||!_t||!_t[$])return;const h=_t[$];if(!h)return;const _=this.offset+this.bounceOffset,k=new Nt(h);k.width=be,k.height=ye,k.x=0,k.y=_,p.addChild(k)}}let d=P(1);vi(async()=>{U=new Ti,await U.init({width:a,height:r,background:"#001a33"}),fs.appendChild(U.canvas);const l=()=>{const h=window.innerWidth,_=window.innerHeight,k=h/a,L=_/r,W=Math.min(k,L,1);y(d,ae(W)),U.stage.scale.set(W),U.renderer.resize(a,r)};l(),window.addEventListener("resize",l);const p={};try{y(nt,"Loading background and UI images..."),ue.push(`Loading background: ${Qt}`),ue.push(`Loading reel frames: ${go}`),ue.push(`Loading logo: ${vo}`),await Ze.load([{alias:"background",src:Qt},{alias:"reelframes",src:go},{alias:"logo",src:vo}]),ze=Fe.from("background"),at=Fe.from("reelframes"),rt=Fe.from("logo"),console.log("✅ Background texture created:",ze.width,"x",ze.height),console.log("✅ Reel frames texture created:",at.width,"x",at.height),console.log("✅ Logo texture created:",rt.width,"x",rt.height),ue.push("✅ All UI images loaded"),y(nt,"Loading symbols...");const h=[];for(const _ of Xt)h.push({alias:_,src:Kt[_]});await Ze.load(h);for(const _ of Xt){const k=Kt[_];ue.push(`Loading symbol ${_}: ${k}`);try{const L=Fe.from(_);p[_]=L,console.log(`✅ Symbol ${_} loaded:`,L.width,"x",L.height),ue.push(`✅ Symbol ${_} loaded`)}catch(L){const W=`❌ Failed to load symbol ${_} from ${k}: ${L}`;throw ue.push(W),console.error(W),new Error(W)}}_t=p,y(nt,"Assets loaded successfully!")}catch(h){y(De,`Asset loading failed: ${h}`),ue.push(o(De)),console.error(o(De));return}console.log("Ladataan ääniefektit...");for(const[h,_]of Object.entries(Bi)){const k=new Audio;k.src=_,k.preload="auto",k.volume=.7,k.load(),k.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${_} (käytetään hiljaista placeholderia)`)}),Zt[h]=k}if(console.log("Taustakuva ladattu, tekstuuri:",ze),ze){const h=new Nt(ze);U.renderer.width/U.renderer.height;const _=h.texture.width/h.texture.height;let k;k=U.renderer.height/h.texture.height,k*=Se,h.scale.set(k),h.x=(U.renderer.width-h.width)/2,h.y=(U.renderer.height-h.height)/2+_e,U.stage.addChild(h),console.log("Taustakuva lisätty:",me,"mode, size:",h.width.toFixed(0),"x",h.height.toFixed(0),"image aspect:",_.toFixed(2),"scale:",k.toFixed(2),"pos:",h.x.toFixed(0),h.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(h=>({x:h.x+c,y:h.y+g})),Xe=[];for(let h=0;h<i;h++){const _=Ao(h),k=_.col,L=_.row,W=300+k*(be+20),K=250+L*(ye+15),Q=h===6?W+u:W,Z=h===6?K+m:K,G=new lo;G.x=Q+c,G.y=Z+g;const S=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],R=new Js().rect(0,0,be,ye).fill({color:S[h],alpha:.3});R.x=G.x,R.y=G.y,U.stage.addChild(R);const I=new xi({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),C=new Cn({text:h.toString(),style:I});C.x=G.x+5,C.y=G.y+5,U.stage.addChild(C);const B=new Js().rect(0,0,be,ye).fill(16777215);B.x=G.x,B.y=G.y,G.mask=B,U.stage.addChild(B),U.stage.addChild(G),Xe.push(new ia(h,G))}if(at){const h=new Nt(at);h.scale.set(1),h.x=250,h.y=200,U.stage.addChild(h),ts=h,y(es,ae(h.width)),console.log("Reel frames lisätty:",h.width.toFixed(0),"x",h.height.toFixed(0)),console.log("Control panel leveys päivitetty:",o(es).toFixed(0))}if(rt){const h=new Nt(rt);h.scale.set(V),h.x=(U.renderer.width-h.width)/2+T,h.y=H,U.stage.addChild(h),console.log("Logo lisätty päällimmäiseen layeriin:",h.width.toFixed(0),"x",h.height.toFixed(0))}mo(),U.ticker.add(aa)});function aa(){for(const l of Xe)l.update(),l.draw();if(!o(Te)&&!as&&Xe.every(l=>l.state==="stopped")){as=!0,zi();const l=sa();console.log(`Checking wins, found ${l.length} wins`),l.length>0?(y(Ve,ae(l)),y(fe,ae(l.reduce((p,$)=>p+$.payout,0))),Xi(o(Ge),l,o(fe)),ra(o(fe)),y(Te,!0),y(Vi,ae(Date.now())),console.log(`🎉 VOITTO! ${o(fe)} pistettä! Uusi saldo: ${o(Ee)}`),console.log(`isShowingWin set to: ${o(Te)}, totalWin: ${o(fe)}`),l.forEach(p=>{const $=p.multiplier?` (${p.multiplier}x multiplier)`:"";console.log(`${p.count}x ${p.symbol} = ${p.payout} pistettä${$}`)}),oa(l),ps("win"),o(ce)&&!Ce&&(Ce=!0,Ae=window.setTimeout(()=>{o(Te)&&o(ce)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),y(Te,!1),us()),Ae=window.setTimeout(()=>{Ce=!1,gs()},200)},1500))):(console.log("No wins found this spin"),o(ce)&&!Ce&&(Ce=!0,Ae=window.setTimeout(()=>{Ce=!1,gs()},1e3))),o(D)&&o(je)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${o(Be)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${o(Be).toFixed(2)}`),y(D,!1),y(Be,0),ss()},2e3))}}function $o(){if(o(D)||Wi(),!o(D)&&M&&o(le)&&!M.playing()&&(M.play(),console.log("🎵 Background music started on first spin")),Di(),o(D)&&o(je)>0)ke(je,-1),ke(cs),console.log(`🎰 FREE SPIN! Remaining: ${o(je)}`);else if(!o(D)){if(o(Ee)<o(J)){alert(`Not enough credits! Balance: ${o(Ee)}, Bet: ${o(J)}`),hs();return}y(Ee,o(Ee)-o(J)),ke(Ge),y(He,o(He)+o(J))}Ae!==null&&(clearTimeout(Ae),Ae=null),y(Ve,ae([])),y(fe,0),y(Te,!1),as=!1,us(),dt=wo(),Xe.forEach((l,p)=>{l.startSynchronized(p)}),ps("spin")}function ra(l){if(y(Ee,o(Ee)+l),y(lt,o(lt)+l),y(yo,ae(l)),o(D)&&y(Be,o(Be)+l),l>0){ke(rs);const p=l/o(J);p>=10&&Hi(),Ne&&(p>=50?Ne.show():p>=20?setTimeout(()=>Ne.show(),200):p>=10&&setTimeout(()=>Ne.show(),400))}}function na(){o(J)<is&&y(J,ae(Math.min(o(J)+1,is)))}function la(){o(J)>xo&&y(J,ae(Math.max(o(J)-1,xo)))}function ca(){y(J,is)}function ut(l){y(ce,!0),y(Ue,ae(l)),y(Ie,!1),gs()}function hs(){y(ce,!1),y(Ue,0),Ce=!1,Ae!==null&&(clearTimeout(Ae),Ae=null)}function gs(){if(!o(ce)||o(Ue)<=0){hs();return}console.log(`Autoplay: Starting spin ${o(Ue)} rounds left`),$o(),ke(Ue,-1)}function da(){confirm("Reset all statistics?")&&(y(Ge,0),y(He,0),y(lt,0),y(rs,0),y(At,0),y(cs,0),y(kt,0),y(ds,0))}var So=Kn();fr(l=>{var p=Bn();f(qe(p)),q(l,p)});var Eo=qe(So);{var pa=l=>{var p=Nn(),$=f(w(p),2),h=f(w($));A($);var _=f($,2);{var k=I=>{var C=Fn(),B=f(w(C));A(C),ge(()=>z(B,` ${o(De)??""}`)),q(I,C)};pe(_,I=>{o(De)&&I(k)})}var L=f(_,2),W=f(w(L));W.nodeValue=` ${xe??""}`,A(L);var K=f(L,2),Q=f(w(K));Q.nodeValue=` ${Qt??""}`,A(K);var Z=f(K,2),G=f(w(Z));A(Z);var S=f(Z,2);{var R=I=>{var C=Wn(),B=w(C),N=w(B);A(B);var Le=f(B,2);si(Le,17,()=>ue,ti,(Qe,ie)=>{var oe=Mn(),Ia=w(oe,!0);A(oe),ge(()=>z(Ia,o(ie))),q(Qe,oe)}),A(C),ge(()=>z(N,`Log (${ue.length??""})`)),q(I,C)};pe(S,I=>{ue.length>0&&I(R)})}A(p),ge(()=>{z(h,` ${o(nt)??""}`),z(G,` ${Kt.a??""}`)}),q(l,p)};pe(Eo,l=>{(o(nt)!=="Assets loaded successfully!"||o(De))&&l(pa)})}var jo=f(Eo,2);{var ua=l=>{var p=Un(),$=f(w(p),2),h=w($);A($);var _=f($,2);si(_,17,()=>o(Ve),ti,(K,Q)=>{var Z=zn(),G=w(Z);A(Z),ge(S=>z(G,`${o(Q).count??""} × ${ko[o(Q).symbol]??""} = ${S??""} pistettä`),[()=>o(Q).payout.toFixed(2)]),q(K,Z)});var k=f(_,2);{var L=K=>{var Q=Dn(),Z=w(Q),G=w(Z);A(Z),A(Q),ge(()=>z(G,`✨ ${o(Ve)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),q(K,Q)};pe(k,K=>{o(Ve).length>0&&o(Ve)[0].multiplier>1&&K(L)})}var W=f(k,2);A(p),ge(()=>z(h,`${o(fe)??""} pistettä`)),F("click",W,()=>{y(Te,!1),us(),console.log("Win popup closed, ready for next spin")}),q(l,p)};pe(jo,l=>{o(fe)>0&&o(Te)&&l(ua)})}var To=f(jo,2);{var fa=l=>{var p=Gn(),$=f(w(p),8);A(p),ge(h=>x(p,"style",`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.95);
    color: white;
    padding: ${30*o(d)}px;
    border-radius: ${15*o(d)}px;
    font-family: Arial, sans-serif;
    z-index: 3000;
    border: ${3*o(d)}px solid #ffd700;
    max-width: ${600*o(d)}px;
    max-height: ${h??""}px;
    overflow-y: auto;
    font-size: ${o(d)??""}em;
  `),[()=>Math.min(r*o(d)*.8,80*window.innerHeight/100)]),F("click",$,()=>{y(Ye,!1)}),q(l,p)};pe(To,l=>{o(Ye)&&l(fa)})}var Lo=f(To,2),vs=w(Lo),ft=w(vs);x(ft,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${a}px;
        height: ${r}px;
      `);var ms=w(ft),$t=f(ms,2);$t.textContent=`🛠️ DEBUG v${s}`;var bs=f($t,2),ys=w(bs);x(ys,"src",`${Y??""}/Control_leftend.png`);var St=f(ys,2),Et=w(St),Ro=w(Et),xs=f(Ro,2),_s=w(xs),jt=f(_s,2),ha=w(jt,!0);A(jt);var ws=f(jt,2),Po=f(ws,2);A(xs),A(Et);var As=f(Et,2);x(As,"src",`${Y??""}/Control_divider.png`);var Tt=f(As,2),Oo=w(Tt),ks=f(Oo,2),ga=w(ks,!0);A(ks),A(Tt);var $s=f(Tt,2);x($s,"src",`${Y??""}/Control_divider.png`);var Ss=f($s,2),Es=w(Ss),js=w(Es);A(Es),A(Ss);var Ts=f(Ss,2);x(Ts,"src",`${Y??""}/Control_divider.png`);var Lt=f(Ts,2),Ls=w(Lt),Io=f(Ls,2);A(Lt);var Rs=f(Lt,2);x(Rs,"src",`${Y??""}/Control_divider.png`);var Rt=f(Rs,2),Pt=w(Rt),Ot=f(Pt,2),va=w(Ot,!0);A(Ot);var ma=f(Ot,2);{var ba=l=>{var p=Hn(),$=w(p),h=f($,2),_=f(h,2),k=f(_,2);A(p),ge(()=>{x(p,"style",`
          position: absolute;
          bottom: ${80*o(d)}px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
          border: ${2*o(d)}px solid #ffd700;
          border-radius: ${10*o(d)}px;
          padding: ${10*o(d)}px;
          display: flex;
          flex-direction: column;
          gap: ${8*o(d)}px;
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
        `),x($,"style",`
            color: #ffd700;
            font-size: ${14*o(d)}px;
            font-weight: bold;
            text-align: center;
            border-bottom: ${1*o(d)}px solid #444;
            padding-bottom: ${5*o(d)}px;
          `),x(h,"style",`
              background: ${(o(X)==="slow"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: ${2*o(d)}px solid ${(o(X)==="slow"?"#ffd700":"#666")??""};
              color: ${(o(X)==="slow"?"#ffd700":"#ffffff")??""};
              padding: ${8*o(d)}px ${20*o(d)}px;
              border-radius: ${5*o(d)}px;
              cursor: pointer;
              font-weight: bold;
              font-size: ${12*o(d)}px;
              transition: all 0.2s;
            `),x(_,"style",`
              background: ${(o(X)==="medium"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: ${2*o(d)}px solid ${(o(X)==="medium"?"#ffd700":"#666")??""};
              color: ${(o(X)==="medium"?"#ffd700":"#ffffff")??""};
              padding: ${8*o(d)}px ${20*o(d)}px;
              border-radius: ${5*o(d)}px;
              cursor: pointer;
              font-weight: bold;
              font-size: ${12*o(d)}px;
              transition: all 0.2s;
            `),x(k,"style",`
              background: ${(o(X)==="fast"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: ${2*o(d)}px solid ${(o(X)==="fast"?"#ffd700":"#666")??""};
              color: ${(o(X)==="fast"?"#ffd700":"#ffffff")??""};
              padding: ${8*o(d)}px ${20*o(d)}px;
              border-radius: ${5*o(d)}px;
              cursor: pointer;
              font-weight: bold;
              font-size: ${12*o(d)}px;
              transition: all 0.2s;
            `)}),F("click",h,()=>{y(X,"slow"),y(We,!1)}),F("click",_,()=>{y(X,"medium"),y(We,!1)}),F("click",k,()=>{y(X,"fast"),y(We,!1)}),q(l,p)};pe(ma,l=>{o(We)&&l(ba)})}A(Rt);var Ps=f(Rt,2);x(Ps,"src",`${Y??""}/Control_divider.png`);var It=f(Ps,2),Os=w(It),Co=f(Os,2);A(It);var Is=f(It,2);x(Is,"src",`${Y??""}/Control_divider.png`);var Ct=f(Is,2),Bo=w(Ct),Cs=f(Bo,2),ya=w(Cs,!0);A(Cs),A(Ct);var Bs=f(Ct,2);x(Bs,"src",`${Y??""}/Control_divider.png`);var Fo=f(Bs,2);A(St);var Mo=f(St,2);x(Mo,"src",`${Y??""}/Control_rightend.png`),A(bs),A(ft),Jo(ft,l=>fs=l,()=>fs);var Bt=f(ft,2);Jo(Bt,l=>Ne=l,()=>Ne);var Ft=f(Bt,2),Wo=f(w(Ft),2);Wo.textContent=`v${s}`;var Fs=f(Wo,2),No=f(w(Fs),2),xa=w(No,!0);A(No),A(Fs);var Ms=f(Fs,2),zo=f(w(Ms),2),_a=w(zo,!0);A(zo),A(Ms);var Ws=f(Ms,2),Do=f(w(Ws),2),wa=w(Do,!0);A(Do),A(Ws);var Ns=f(Ws,2),zs=f(w(Ns),2),Aa=w(zs);A(zs),A(Ns);var Ds=f(Ns,2),Us=f(w(Ds),2),ka=w(Us);A(Us),A(Ds);var Gs=f(Ds,2),Uo=f(w(Gs),2),$a=w(Uo,!0);A(Uo),A(Gs);var Hs=f(Gs,2),Go=f(w(Hs),2),Sa=w(Go,!0);A(Go),A(Hs);var Vs=f(Hs,2),Ho=f(w(Vs),2),Ea=w(Ho);A(Ho),A(Vs);var Vo=f(Vs,2),Yo=f(Vo,2),Ke=w(Yo),ja=w(Ke);A(Ke);var Mt=f(Ke,2),ht=f(Mt,2),Ta=w(ht);A(ht);var Ys=f(ht,2);A(Yo),A(Ft);var Wt=f(Ft,2),La=w(Wt);{var Ra=l=>{var p=Vn(),$=f(w(p),2),h=w($);A($);var _=f($,2);A(p),ge(()=>z(h,`${o(Ue)??""} left`)),F("click",_,hs),q(l,p)},Pa=l=>{var p=Xn(),$=qe(p),h=f($,2);{var _=k=>{var L=Yn(),W=f(w(L),2),K=f(W,2),Q=f(K,2),Z=f(Q,2),G=f(Z,2),S=f(G,2);A(L),F("click",W,()=>ut(10)),F("click",K,()=>ut(100)),F("click",Q,()=>ut(1e3)),F("click",Z,()=>ut(1e4)),F("click",G,()=>ut(1e5)),F("click",S,()=>{y(Ie,!1)}),q(k,L)};pe(h,k=>{o(Ie)&&k(_)})}F("click",$,()=>{y(Ie,!o(Ie))}),q(l,p)};pe(La,l=>{o(ce)?l(Ra):l(Pa,!1)})}A(Wt);var gt=f(Wt,2),Oa=w(gt,!0);A(gt),A(vs),A(Lo),ge((l,p,$,h,_,k,L,W)=>{x(vs,"style",`
    position: relative;
    width: ${a*o(d)}px;
    height: ${r*o(d)}px;
  `),x(ms,"style",`
          position: absolute;
          top: ${130*o(d)}px;
          right: ${20*o(d)}px;
          padding: ${10*o(d)}px ${15*o(d)}px;
          background-color: rgba(255, 215, 0, 0.3);
          border: ${2*o(d)}px solid rgba(255, 215, 0, 0.7);
          border-radius: ${8*o(d)}px;
          cursor: pointer;
          font-weight: bold;
          font-size: ${16*o(d)}px;
          color: white;
          text-shadow: 0 0 ${5*o(d)}px rgba(0,0,0,0.8);
          z-index: 1000;
          min-width: ${180*o(d)}px;
        `),x($t,"style",`
          position: absolute;
          top: ${190*o(d)}px;
          right: ${20*o(d)}px;
          padding: ${10*o(d)}px ${15*o(d)}px;
          background-color: rgba(0, 255, 0, 0.3);
          border: ${2*o(d)}px solid rgba(0, 255, 0, 0.7);
          border-radius: ${8*o(d)}px;
          cursor: pointer;
          font-weight: bold;
          font-size: ${16*o(d)}px;
          color: white;
          text-shadow: 0 0 ${5*o(d)}px rgba(0,0,0,0.8);
          z-index: 1000;
          min-width: ${180*o(d)}px;
        `),x(bs,"style",`
        position: absolute;
        left: ${((ts?ts.x:E)+j)*o(d)}px;
        top: ${(b+se)*o(d)}px;
        width: ${o(es)*o(d)}px;
        height: ${v*o(d)}px;
        display: flex;
        align-items: center;
        z-index: 1000;
      `),x(ys,"style",`height: ${v*o(d)}px; flex-shrink: 0;`),x(St,"style",`
    flex-grow: 1;
    height: ${v*o(d)}px;
    background-image: url('${Y??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 ${20*o(d)}px;
  `),x(Et,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*o(d)}px;`),x(Ro,"style",`color: #00ff00; font-size: ${12*o(d)}px; font-weight: bold;`),x(xs,"style",`display: flex; gap: ${5*o(d)}px; align-items: center;`),x(_s,"style",`
            width: ${40*o(d)}px;
            height: ${40*o(d)}px;
            background-image: url('${Y??""}/Control_lowerbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(jt,"style",`
          color: #fff;
          font-size: ${18*o(d)}px;
          font-weight: bold;
          min-width: ${80*o(d)}px;
          text-align: center;
          font-family: 'Courier New', monospace;
        `),z(ha,l),x(ws,"style",`
            width: ${40*o(d)}px;
            height: ${40*o(d)}px;
            background-image: url('${Y??""}/Control_upperbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(Po,"style",`
            padding: ${6*o(d)}px ${10*o(d)}px;
            background: #ffd700;
            color: #000;
            border: ${2*o(d)}px solid #000;
            border-radius: ${5*o(d)}px;
            cursor: pointer;
            font-size: ${12*o(d)}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
            transition: background 0.2s;
          `),x(As,"style",`height: ${v*.8*o(d)}px; flex-shrink: 0;`),x(Tt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*o(d)}px;`),x(Oo,"style",`color: #00ff00; font-size: ${12*o(d)}px; font-weight: bold;`),x(ks,"style",`
        color: #fff;
        font-size: ${20*o(d)}px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      `),z(ga,p),x($s,"style",`height: ${v*.8*o(d)}px; flex-shrink: 0;`),jr(Es,1,`play-button-wrapper ${(o(os)?"glare-animate":"")??""}`,"svelte-tijp0o"),js.disabled=o(ce),x(js,"style",`
            width: ${130*o(d)}px;
            height: ${130*o(d)}px;
            background-image: url('${Y??""}/Control_playbutton.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border: none;
            cursor: ${(o(ce)?"not-allowed":"pointer")??""};
            background-color: transparent;
            opacity: ${(o(ce)?.5:1)??""};
            position: relative;
            z-index: 10;
            border-radius: 50%;
          `),x(Ts,"style",`height: ${v*.8*o(d)}px; flex-shrink: 0;`),x(Lt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*o(d)}px;`),x(Ls,"style",`
          width: ${50*o(d)}px;
          height: ${50*o(d)}px;
          background-image: url('${Y??""}/${(o(ce)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),x(Io,"src",`${Y??""}/${(o(ce)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),x(Io,"style",`width: ${50*o(d)}px; height: auto;`),x(Rs,"style",`height: ${v*.8*o(d)}px; flex-shrink: 0;`),x(Rt,"style",`position: relative; display: flex; flex-direction: column; align-items: center; gap: ${5*o(d)}px;`),x(Pt,"style",`
          width: ${50*o(d)}px;
          height: ${50*o(d)}px;
          background-image: url('${Y??""}/Control_fastplay_select.png');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),x(Pt,"title",`Spin Speed: ${(o(X)==="slow"?"Slow":o(X)==="medium"?"Medium":"Fast")??""}`),x(Ot,"style",`
        color: #ffffff;
        font-size: ${10*o(d)}px;
        font-weight: bold;
        text-transform: uppercase;
      `),z(va,o(X)==="slow"?"Slow":o(X)==="medium"?"Med":"Fast"),x(Ps,"style",`height: ${v*.8*o(d)}px; flex-shrink: 0;`),x(It,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*o(d)}px;`),x(Os,"style",`
          width: ${50*o(d)}px;
          height: ${50*o(d)}px;
          background-image: url('${Y??""}/${(o(yt)?"Control_fastplay_select.png":"Control_fastplay_deselect.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),x(Co,"src",`${Y??""}/${(o(yt)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),x(Co,"style",`width: ${50*o(d)}px; height: auto;`),x(Is,"style",`height: ${v*.8*o(d)}px; flex-shrink: 0;`),x(Ct,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*o(d)}px;`),x(Bo,"style",`color: #00ff00; font-size: ${12*o(d)}px; font-weight: bold;`),x(Cs,"style",`
        color: #ffd700;
        font-size: ${20*o(d)}px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      `),z(ya,$),x(Bs,"style",`height: ${v*.8*o(d)}px; flex-shrink: 0;`),x(Fo,"style",`
        width: ${50*o(d)}px;
        height: ${50*o(d)}px;
        background-image: url('${Y??""}/Control_menubar.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),x(Mo,"style",`height: ${v*o(d)}px; flex-shrink: 0;`),x(Bt,"winlevel",o(fe)/o(J)>=50?"jackpot":o(fe)/o(J)>=20?"medium":"small"),x(Bt,"winamount",o(fe)),x(Ft,"style",`
  position: absolute;
  top: 20px;
  left: 20px;
  display: ${(o(wt)?"block":"none")??""};
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
`),z(xa,h),z(_a,_),z(wa,k),x(zs,"style",`color: ${L??""};`),z(Aa,`${o(ns)??""}%`),x(Us,"style",`color: ${W??""};`),z(ka,`${o(ls)??""}%`),z($a,o(At)),z(Sa,o(cs)),z(Ea,`${o(Yi)??""}%`),Ke.disabled=o(de).length===0,x(Ke,"style",`
        width: 100%;
        padding: 5px;
        background: ${(o(de).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(o(de).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(o(de).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(o(de).length>0?"1":"0.5")??""};
      `),z(ja,`Download Win Log (${o(de).length??""})`),Mt.disabled=o(de).length===0,x(Mt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(o(de).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(o(de).length>0?"1":"0.5")??""};
      `),x(ht,"style",`
        width: 100%;
        padding: 5px;
        background: ${(o(le)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(o(le)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),z(Ta,`🎵 Music: ${(o(le)?"ON":"OFF")??""}`),Ys.disabled=o(D),x(Ys,"style",`
        width: 100%;
        padding: 5px;
        background: ${(o(D)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(o(D)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(o(D)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(o(D)?"0.5":"1")??""};
      `),x(Wt,"style",`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1500;
  display: ${(o(wt)?"block":"none")??""};
`),x(gt,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(o(we)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(o(we)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),x(gt,"title",o(we)?"Mykistä äänet":"Laita äänet päälle"),z(Oa,o(we)?"🔊":"🔇")},[()=>o(J).toFixed(2),()=>o(Ee).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>o(yo).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>o(Ge).toLocaleString(),()=>o(He).toLocaleString(),()=>o(lt).toLocaleString(),()=>parseFloat(o(ns))>=95?"#00ff00":parseFloat(o(ns))>=85?"#ffff00":"#ff6666",()=>parseFloat(o(ls))>=30?"#00ff00":parseFloat(o(ls))>=20?"#ffff00":"#ff6666"]),F("click",ms,()=>{y(Ye,!o(Ye))}),F("click",$t,()=>{y(wt,!o(wt))}),F("click",_s,la),F("click",ws,na),F("click",Po,ca),F("click",js,$o),F("click",Ls,()=>{y(Ie,!o(Ie))}),F("click",Pt,()=>{y(We,!o(We))}),F("click",Os,()=>{y(yt,!o(yt))}),F("click",Fo,()=>{y(Ye,!o(Ye))}),F("click",Vo,da),F("click",Ke,Ki),F("click",Mt,Qi),F("click",ht,Ui),F("click",Ys,Zi),F("click",gt,()=>{y(we,!o(we))}),q(t,So),mi()}var Zn=ee('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),qn=ee('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function Jn(t,e){gi(e,!1);let s=hr(e,"isAuthenticated",12,!1),i=io(""),a=io(!1);const r="slot2024";function n(){o(i)===r?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(y(a,!0),y(i,""),setTimeout(()=>y(a,!1),3e3))}vi(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),za();var c=Na(),g=qe(c);{var m=u=>{var b=qn(),v=w(b),E=f(w(v),4),j=w(E);Tr(j),ur(2),A(E);var se=f(E,2);{var V=T=>{var H=Zn();q(T,H)};pe(se,T=>{o(a)&&T(V)})}A(v),A(b),Rr(j,()=>o(i),T=>y(i,T)),F("submit",E,Pr(n)),q(u,b)};pe(g,u=>{s()||u(m)})}q(t,c),mi()}var el=ee('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),tl=ee("<!> <!>",1);function fl(t){let e=io(!1);var s=tl(),i=qe(s);Jn(i,{get isAuthenticated(){return o(e)},set isAuthenticated(n){y(e,n)},$$legacy:!0});var a=f(i,2);{var r=n=>{var c=el(),g=f(qe(c),2);Qn(g,{}),q(n,c)};pe(a,n=>{o(e)&&n(r)})}q(t,s)}export{$i as A,wi as C,Nr as R,Cr as S,Si as V,fl as _,Ir as u};
