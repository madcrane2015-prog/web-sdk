const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./C8QcIpUs.js","./CfQEHKwl.js","./Db_meveG.js","./BdJg5JGx.js","./PpshkLFU.js","./C2GHuDhf.js","./BAsatmZp.js","./Cy7bd1wk.js"])))=>i.map(i=>d[i]);
var Ia=Object.defineProperty;var Ca=(t,e,s)=>e in t?Ia(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var he=(t,e,s)=>Ca(t,typeof e!="symbol"?e+"":e,s);import{f as Ba,l as Fa,t as ee,g as F,a as q,i as Ma,d as Wa}from"./BJCaw-qO.js";import{i as za}from"./CeejRTB0.js";import{R as ve,T as Na,Q as Da,i as o,w as Ua,W as Ga,X as Xo,Y as Ko,Z as Ys,a1 as gt,a9 as Ha,_ as ui,$ as fi,a0 as Va,ad as hi,O as Ya,z as Xa,I as Qo,ar as Xs,K as Zo,as as Ka,at as Qa,au as Za,ac as qa,av as Ja,aw as er,ax as tr,ay as sr,a3 as or,az as ir,aA as ar,N as rr,aB as nr,aC as lr,g as cr,n as dr,p as gi,ai as P,ah as vi,y,aD as ke,f as qe,s as f,c as w,r as A,t as ge,k as Ks,a as mi,aE as pr,aF as oo}from"./BdJg5JGx.js";import{_ as qo,p as ae,i as de}from"./Db_meveG.js";import{a as ur,s as z}from"./Df-H93ww.js";import{b as Jo,p as fr}from"./dtG1_1a4.js";import{b as ye}from"./_yWDo2zn.js";import{e as Oe,E as O,a as hr,C as no,Q as Dt,V as Ut,N as Qs,D as re,H as gr,p as Fe,a0 as tt,a1 as Me,a2 as vr,w as Pe,a3 as mt,a4 as bi,a5 as st,a6 as $e,a7 as Gt,a8 as xi,a9 as mr,aa as Zs,ab as br,ac as xr,y as Wt}from"./CfQEHKwl.js";import{A as yr,B as ei,G as _r,T as yi,a as wr,b as qs}from"./PpshkLFU.js";function ti(t,e){return e}function Ar(t,e,s,i){for(var a=[],r=e.length,n=0;n<r;n++)Za(e[n].e,a,!0);var c=r>0&&a.length===0&&s!==null;if(c){var g=s.parentNode;qa(g),g.append(s),i.clear(),Re(t,e[0].prev,e[r-1].next)}Ja(a,()=>{for(var m=0;m<r;m++){var p=e[m];c||(i.delete(p.k),Re(t,p.prev,p.next)),er(p.e,!c)}})}function si(t,e,s,i,a,r=null){var n=t,c={flags:e,items:new Map,first:null};ve&&Na();var g=null,m=!1,p=Ua(()=>{var b=s();return Ya(b)?b:b==null?[]:hi(b)});Da(()=>{var b=o(p),v=b.length;if(m&&v===0)return;m=v===0;let E=!1;if(ve){var j=n.data===Ga;j!==(v===0)&&(n=Xo(),Ko(n),Ys(!1),E=!0)}if(ve){for(var se=null,V,T=0;T<v;T++){if(gt.nodeType===8&&gt.data===Ha){n=gt,E=!0,Ys(!1);break}var U=b[T],_e=i(U,T);V=_i(gt,c,se,null,U,_e,T,a,e,s),c.items.set(_e,V),se=V}v>0&&Ko(Xo())}ve||kr(b,c,n,a,e,i,s),r!==null&&(v===0?g?ui(g):g=fi(()=>r(n)):g!==null&&Va(g,()=>{g=null})),E&&Ys(!0),o(p)}),ve&&(n=gt)}function kr(t,e,s,i,a,r,n){var c=t.length,g=e.items,m=e.first,p=m,b,v=null,E=[],j=[],se,V,T,U;for(U=0;U<c;U+=1){if(se=t[U],V=r(se,U),T=g.get(V),T===void 0){var _e=p?p.e.nodes_start:s;v=_i(_e,e,v,v===null?e.first:v.next,se,V,U,i,a,n),g.set(V,v),E=[],j=[],p=v.next;continue}if($r(T,se,U),(T.e.f&Xs)!==0&&ui(T.e),T!==p){if(b!==void 0&&b.has(T)){if(E.length<j.length){var Se=j[0],me;v=Se.prev;var Ht=E[0],be=E[E.length-1];for(me=0;me<E.length;me+=1)oi(E[me],Se,s);for(me=0;me<j.length;me+=1)b.delete(j[me]);Re(e,Ht.prev,be.next),Re(e,v,Ht),Re(e,be,Se),p=Se,v=be,U-=1,E=[],j=[]}else b.delete(T),oi(T,p,s),Re(e,T.prev,T.next),Re(e,T,v===null?e.first:v.next),Re(e,v,T),v=T;continue}for(E=[],j=[];p!==null&&p.k!==V;)(p.e.f&Xs)===0&&(b??(b=new Set)).add(p),j.push(p),p=p.next;if(p===null)continue;T=p}E.push(T),v=T,p=T.next}if(p!==null||b!==void 0){for(var xe=b===void 0?[]:hi(b);p!==null;)(p.e.f&Xs)===0&&xe.push(p),p=p.next;var uo=xe.length;if(uo>0){var Vt=null;Ar(e,xe,Vt,g)}}Zo.first=e.first&&e.first.e,Zo.last=v&&v.e}function $r(t,e,s,i){Qa(t.v,e),t.i=s}function _i(t,e,s,i,a,r,n,c,g,m){var p=(g&tr)!==0,b=(g&sr)===0,v=p?b?Xa(a):Qo(a):a,E=(g&Ka)===0?n:Qo(n),j={i:E,v,k:r,a:null,e:null,prev:s,next:i};try{return j.e=fi(()=>c(t,v,E,m),ve),j.e.prev=s&&s.e,j.e.next=i&&i.e,s===null?e.first=j:(s.next=j,s.e.next=j.e),i!==null&&(i.prev=j,i.e.prev=j.e),j}finally{}}function oi(t,e,s){for(var i=t.next?t.next.e.nodes_start:s,a=e?e.e.nodes_start:s,r=t.e.nodes_start;r!==i;){var n=or(r);a.before(r),r=n}}function Re(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function Sr(t,e,s){var i=t==null?"":""+t;return i=i?i+" "+e:e,i===""?null:i}function Er(t,e,s,i,a,r){var n=t.__className;if(ve||n!==s){var c=Sr(s,i);(!ve||c!==t.getAttribute("class"))&&(c==null?t.removeAttribute("class"):t.className=c),t.__className=s}return r}function jr(t){if(ve){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var i=t.value;x(t,"value",null),t.value=i}if(t.hasAttribute("checked")){var a=t.checked;x(t,"checked",null),t.checked=a}}};t.__on_r=s,ir(s),Ba()}}function x(t,e,s,i){var a=t.__attributes??(t.__attributes={});ve&&(a[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||a[e]!==(a[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[ar]=s),s==null?t.removeAttribute(e):typeof s!="string"&&Tr(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var ii=new Map;function Tr(t){var e=ii.get(t.nodeName);if(e)return e;ii.set(t.nodeName,e=[]);for(var s,i=t,a=Element.prototype;a!==i;){s=nr(i);for(var r in s)s[r].set&&e.push(r);i=rr(i)}return e}function Lr(t,e,s=e){var i=lr();Fa(t,"input",a=>{var r=a?t.defaultValue:t.value;if(r=Js(t)?eo(r):r,s(r),i&&r!==(r=e())){var n=t.selectionStart,c=t.selectionEnd;t.value=r??"",c!==null&&(t.selectionStart=n,t.selectionEnd=Math.min(c,t.value.length))}}),(ve&&t.defaultValue!==t.value||cr(e)==null&&t.value)&&s(Js(t)?eo(t.value):t.value),dr(()=>{var a=e();Js(t)&&a===eo(t.value)||t.type==="date"&&!a&&!t.value||a!==t.value&&(t.value=a??"")})}function Js(t){var e=t.type;return e==="number"||e==="range"}function eo(t){return t===""?null:+t}function Rr(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const io=[];Oe.handleByNamedList(O.Environment,io);async function Pr(t){if(!t)for(let e=0;e<io.length;e++){const s=io[e];if(s.value.test()){await s.value.load();return}}}let vt;function Or(){if(typeof vt=="boolean")return vt;try{vt=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{vt=!1}return vt}var wi=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(wi||{});class Ir{constructor(e){this.items=[],this._name=e}emit(e,s,i,a,r,n,c,g){const{name:m,items:p}=this;for(let b=0,v=p.length;b<v;b++)p[b][m](e,s,i,a,r,n,c,g);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Cr=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Ai=class ki extends hr{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...Cr,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Pr(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const i in this._systemsHash)e={...this._systemsHash[i].constructor.defaultOptions,...e};e={...ki.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let i=0;i<this.runners.init.items.length;i++)await this.runners.init.items[i].init(e);this._initOptions=e}render(e,s){let i=e;if(i instanceof no&&(i={container:i},s&&(Dt(Ut,"passing a second argument is deprecated, please use render options instead"),i.target=s.renderTexture)),i.target||(i.target=this.view.renderTarget),i.target===this.view.renderTarget&&(this._lastObjectRendered=i.container,i.clearColor??(i.clearColor=this.background.colorRgba),i.clear??(i.clear=this.background.clearBeforeRender)),i.clearColor){const a=Array.isArray(i.clearColor)&&i.clearColor.length===4;i.clearColor=a?i.clearColor:Qs.shared.setValue(i.clearColor).toArray()}i.transform||(i.container.updateLocalTransform(),i.transform=i.container.localTransform),i.container.enableRenderGroup(),this.runners.prerender.emit(i),this.runners.renderStart.emit(i),this.runners.render.emit(i),this.runners.renderEnd.emit(i),this.runners.postrender.emit(i)}resize(e,s,i){const a=this.view.resolution;this.view.resize(e,s,i),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),i!==void 0&&i!==a&&this.runners.resolutionChange.emit(i)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=wi.ALL);const{clear:i,clearColor:a,target:r}=e;Qs.shared.setValue(a??this.background.colorRgba),s.renderTarget.clear(r,i,Qs.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new Ir(s)})}_addSystems(e){let s;for(s in e){const i=e[s];this._addSystem(i.value,i.name)}}_addSystem(e,s){const i=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=i,this._systemsHash[s]=i;for(const a in this.runners)this.runners[a].add(i);return this}_addPipes(e,s){const i=s.reduce((a,r)=>(a[r.name]=r.value,a),{});e.forEach(a=>{const r=a.value,n=a.name,c=i[n];this.renderPipes[n]=new r(this,c?new c:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Or())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Ai.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let $i=Ai,zt;function Br(t){return zt!==void 0||(zt=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??$i.defaultOptions.failIfMajorPerformanceCaveat};try{if(!re.get().getWebGLRenderingContext())return!1;let a=re.get().createCanvas().getContext("webgl",e);const r=!!((s=a==null?void 0:a.getContextAttributes())!=null&&s.stencil);if(a){const n=a.getExtension("WEBGL_lose_context");n&&n.loseContext()}return a=null,r}catch{return!1}})()),zt}let Nt;async function Fr(t={}){return Nt!==void 0||(Nt=await(async()=>{const e=re.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),Nt}const ai=["webgl","webgpu","canvas"];async function Mr(t){let e=[];t.preference?(e.push(t.preference),ai.forEach(r=>{r!==t.preference&&e.push(r)})):e=ai.slice();let s,i={};for(let r=0;r<e.length;r++){const n=e[r];if(n==="webgpu"&&await Fr()){const{WebGPURenderer:c}=await qo(async()=>{const{WebGPURenderer:g}=await import("./C8QcIpUs.js");return{WebGPURenderer:g}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=c,i={...t,...t.webgpu};break}else if(n==="webgl"&&Br(t.failIfMajorPerformanceCaveat??$i.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:c}=await qo(async()=>{const{WebGLRenderer:g}=await import("./Cy7bd1wk.js");return{WebGLRenderer:g}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=c,i={...t,...t.webgl};break}else if(n==="canvas")throw i={...t},new Error("CanvasRenderer is not yet implemented")}if(delete i.webgpu,delete i.webgl,!s)throw new Error("No available renderer for the current environment");const a=new s;return await a.init(i),a}const Si="8.8.1";class Ei{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Si)}static destroy(){}}Ei.extension=O.Application;class Wr{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Si)}destroy(){this._renderer=null}}Wr.extension={type:[O.WebGLSystem,O.WebGPUSystem],name:"initHook",priority:-10};const ji=class ao{constructor(...e){this.stage=new no,e[0]!==void 0&&Dt(Ut,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Mr(e),ao._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Dt(Ut,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const i=ao._plugins.slice(0);i.reverse(),i.forEach(a=>{a.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};ji._plugins=[];let Ti=ji;Oe.handleByList(O.Application,Ti._plugins);Oe.add(Ei);class Li extends yr{constructor(e,s){super();const{textures:i,data:a}=e;Object.keys(a.pages).forEach(r=>{const n=a.pages[parseInt(r,10)],c=i[n.id];this.pages.push({texture:c})}),Object.keys(a.chars).forEach(r=>{const n=a.chars[r],{frame:c,source:g}=i[n.page],m=new gr(n.x+c.x,n.y+c.y,n.width,n.height),p=new Fe({source:g,frame:m});this.chars[r]={id:r.codePointAt(0),xOffset:n.xOffset,yOffset:n.yOffset,xAdvance:n.xAdvance,kerning:n.kerning??{},texture:p}}),this.baseRenderedFontSize=a.fontSize,this.baseMeasurementFontSize=a.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:a.fontSize},this.baseLineOffset=a.baseLineOffset,this.lineHeight=a.lineHeight,this.fontFamily=a.fontFamily,this.distanceField=a.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){ei.install(e)}static uninstall(e){ei.uninstall(e)}}const to={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const b in e){const v=e[b].match(/^[a-z]+/gm)[0],E=e[b].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),j={};for(const se in E){const V=E[se].split("="),T=V[0],U=V[1].replace(/"/gm,""),_e=parseFloat(U),Se=isNaN(_e)?U:_e;j[T]=Se}s[v].push(j)}const i={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[a]=s.info,[r]=s.common,[n]=s.distanceField??[];n&&(i.distanceField={range:parseInt(n.distanceRange,10),type:n.fieldType}),i.fontSize=parseInt(a.size,10),i.fontFamily=a.face,i.lineHeight=parseInt(r.lineHeight,10);const c=s.page;for(let b=0;b<c.length;b++)i.pages.push({id:parseInt(c[b].id,10)||0,file:c[b].file});const g={};i.baseLineOffset=i.lineHeight-parseInt(r.base,10);const m=s.char;for(let b=0;b<m.length;b++){const v=m[b],E=parseInt(v.id,10);let j=v.letter??v.char??String.fromCharCode(E);j==="space"&&(j=" "),g[E]=j,i.chars[j]={id:E,page:parseInt(v.page,10)||0,x:parseInt(v.x,10),y:parseInt(v.y,10),width:parseInt(v.width,10),height:parseInt(v.height,10),xOffset:parseInt(v.xoffset,10),yOffset:parseInt(v.yoffset,10),xAdvance:parseInt(v.xadvance,10),kerning:{}}}const p=s.kerning||[];for(let b=0;b<p.length;b++){const v=parseInt(p[b].first,10),E=parseInt(p[b].second,10),j=parseInt(p[b].amount,10);i.chars[g[E]].kerning[g[v]]=j}return i}},ri={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],i=t.getElementsByTagName("common")[0],a=t.getElementsByTagName("distanceField")[0];a&&(e.distanceField={type:a.getAttribute("fieldType"),range:parseInt(a.getAttribute("distanceRange"),10)});const r=t.getElementsByTagName("page"),n=t.getElementsByTagName("char"),c=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(i.getAttribute("lineHeight"),10);for(let m=0;m<r.length;m++)e.pages.push({id:parseInt(r[m].getAttribute("id"),10)||0,file:r[m].getAttribute("file")});const g={};e.baseLineOffset=e.lineHeight-parseInt(i.getAttribute("base"),10);for(let m=0;m<n.length;m++){const p=n[m],b=parseInt(p.getAttribute("id"),10);let v=p.getAttribute("letter")??p.getAttribute("char")??String.fromCharCode(b);v==="space"&&(v=" "),g[b]=v,e.chars[v]={id:b,page:parseInt(p.getAttribute("page"),10)||0,x:parseInt(p.getAttribute("x"),10),y:parseInt(p.getAttribute("y"),10),width:parseInt(p.getAttribute("width"),10),height:parseInt(p.getAttribute("height"),10),xOffset:parseInt(p.getAttribute("xoffset"),10),yOffset:parseInt(p.getAttribute("yoffset"),10),xAdvance:parseInt(p.getAttribute("xadvance"),10),kerning:{}}}for(let m=0;m<c.length;m++){const p=parseInt(c[m].getAttribute("first"),10),b=parseInt(c[m].getAttribute("second"),10),v=parseInt(c[m].getAttribute("amount"),10);e.chars[g[b]].kerning[g[p]]=v}return e}},ni={test(t){return typeof t=="string"&&t.includes("<font>")?ri.test(re.get().parseXML(t)):!1},parse(t){return ri.parse(re.get().parseXML(t))}},zr=[".xml",".fnt"],Nr={extension:{type:O.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof Li,getCacheableAssets(t,e){const s={};return t.forEach(i=>{s[i]=e,s[`${i}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},Dr={extension:{type:O.LoadParser,priority:tt.Normal},name:"loadBitmapFont",test(t){return zr.includes(Me.extname(t).toLowerCase())},async testParse(t){return to.test(t)||ni.test(t)},async parse(t,e,s){const i=to.test(t)?to.parse(t):ni.parse(t),{src:a}=e,{pages:r}=i,n=[],c=i.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let b=0;b<r.length;++b){const v=r[b].file;let E=Me.join(Me.dirname(a),v);E=vr(E,a),n.push({src:E,data:c})}const g=await s.load(n),m=n.map(b=>g[b.src]);return new Li({data:i,textures:m},a)},async load(t,e){return await(await re.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(i=>s.unload(i.texture.source._sourceOrigin))),t.destroy()}};class Ur{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let i=0;i<s;i++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Gr={extension:{type:O.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Fe),getCacheableAssets:(t,e)=>{const s={};return t.forEach(i=>{e.forEach((a,r)=>{s[i+(r===0?"":r+1)]=a})}),s}};async function Ri(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Hr={extension:{type:O.DetectionParser,priority:1},test:async()=>Ri("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},li=["png","jpg","jpeg"],Vr={extension:{type:O.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...li],remove:async t=>t.filter(e=>!li.includes(e))},Yr="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function lo(t){return Yr?!1:document.createElement("video").canPlayType(t)!==""}const Xr={extension:{type:O.DetectionParser,priority:0},test:async()=>lo("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},Kr={extension:{type:O.DetectionParser,priority:0},test:async()=>lo("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},Qr={extension:{type:O.DetectionParser,priority:0},test:async()=>lo("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},Zr={extension:{type:O.DetectionParser,priority:0},test:async()=>Ri("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class qr{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,i)=>(this._parsersValidated=!1,e[s]=i,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const i={promise:null,parser:null};return i.promise=(async()=>{var n,c;let a=null,r=null;if(s.loadParser&&(r=this._parserHash[s.loadParser],r||Pe(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!r){for(let g=0;g<this.parsers.length;g++){const m=this.parsers[g];if(m.load&&((n=m.test)!=null&&n.call(m,e,s,this))){r=m;break}}if(!r)return Pe(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}a=await r.load(e,s,this),i.parser=r;for(let g=0;g<this.parsers.length;g++){const m=this.parsers[g];m.parse&&m.parse&&await((c=m.testParse)==null?void 0:c.call(m,a,s,this))&&(a=await m.parse(a,s,this)||a,i.parser=m)}return a})(),i}async load(e,s){this._parsersValidated||this._validateParsers();let i=0;const a={},r=bi(e),n=mt(e,m=>({alias:[m],src:m,data:{}})),c=n.length,g=n.map(async m=>{const p=Me.toAbsolute(m.src);if(!a[m.src])try{this.promiseCache[p]||(this.promiseCache[p]=this._getLoadPromiseAndParser(p,m)),a[m.src]=await this.promiseCache[p].promise,s&&s(++i/c)}catch(b){throw delete this.promiseCache[p],delete a[m.src],new Error(`[Loader.load] Failed to load ${p}.
${b}`)}});return await Promise.all(g),r?a[n[0].src]:a}async unload(e){const i=mt(e,a=>({alias:[a],src:a})).map(async a=>{var c,g;const r=Me.toAbsolute(a.src),n=this.promiseCache[r];if(n){const m=await n.promise;delete this.promiseCache[r],await((g=(c=n.parser)==null?void 0:c.unload)==null?void 0:g.call(c,m,a,this))}});await Promise.all(i)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&Pe(`[Assets] loadParser name conflict "${s.name}"`):Pe("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function ot(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const Jr=".json",en="application/json",tn={extension:{type:O.LoadParser,priority:tt.Low},name:"loadJson",test(t){return ot(t,en)||st(t,Jr)},async load(t){return await(await re.get().fetch(t)).json()}},sn=".txt",on="text/plain",an={name:"loadTxt",extension:{type:O.LoadParser,priority:tt.Low,name:"loadTxt"},test(t){return ot(t,on)||st(t,sn)},async load(t){return await(await re.get().fetch(t)).text()}},rn=["normal","bold","100","200","300","400","500","600","700","800","900"],nn=[".ttf",".otf",".woff",".woff2"],ln=["font/ttf","font/otf","font/woff","font/woff2"],cn=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function dn(t){const e=Me.extname(t),a=Me.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(c=>c.charAt(0).toUpperCase()+c.slice(1));let r=a.length>0;for(const c of a)if(!c.match(cn)){r=!1;break}let n=a.join(" ");return r||(n=`"${n.replace(/[\\"]/g,"\\$&")}"`),n}const pn=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function un(t){return pn.test(t)?t:encodeURI(t)}const fn={extension:{type:O.LoadParser,priority:tt.Low},name:"loadWebFont",test(t){return ot(t,ln)||st(t,nn)},async load(t,e){var i,a,r;const s=re.get().getFontFaceSet();if(s){const n=[],c=((i=e.data)==null?void 0:i.family)??dn(t),g=((r=(a=e.data)==null?void 0:a.weights)==null?void 0:r.filter(p=>rn.includes(p)))??["normal"],m=e.data??{};for(let p=0;p<g.length;p++){const b=g[p],v=new FontFace(c,`url(${un(t)})`,{...m,weight:b});await v.load(),s.add(v),n.push(v)}return $e.set(`${c}-and-url`,{url:t,fontFaces:n}),n.length===1?n[0]:n}return Pe("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{$e.remove(`${e.family}-and-url`),re.get().getFontFaceSet().delete(e)})}};function co(t,e=1){var i;const s=(i=Gt.RETINA_PREFIX)==null?void 0:i.exec(t);return s?parseFloat(s[1]):e}function po(t,e,s){t.label=s,t._sourceOrigin=s;const i=new Fe({source:t,label:s}),a=()=>{delete e.promiseCache[s],$e.has(s)&&$e.remove(s)};return i.source.once("destroy",()=>{e.promiseCache[s]&&(Pe("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),a())}),i.once("destroy",()=>{t.destroyed||(Pe("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),a())}),i}const hn=".svg",gn="image/svg+xml",vn={extension:{type:O.LoadParser,priority:tt.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return ot(t,gn)||st(t,hn)},async load(t,e,s){var i;return((i=e.data)==null?void 0:i.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?bn(t):mn(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function mn(t,e,s,i){var V,T,U;const r=await(await re.get().fetch(t)).blob(),n=URL.createObjectURL(r),c=new Image;c.src=n,c.crossOrigin=i,await c.decode(),URL.revokeObjectURL(n);const g=document.createElement("canvas"),m=g.getContext("2d"),p=((V=e.data)==null?void 0:V.resolution)||co(t),b=((T=e.data)==null?void 0:T.width)??c.width,v=((U=e.data)==null?void 0:U.height)??c.height;g.width=b*p,g.height=v*p,m.drawImage(c,0,0,b*p,v*p);const{parseAsGraphicsContext:E,...j}=e.data??{},se=new xi({resource:g,alphaMode:"premultiply-alpha-on-upload",resolution:p,...j});return po(se,s,t)}async function bn(t){const s=await(await re.get().fetch(t)).text(),i=new _r;return i.svg(s),i}const xn=`(function () {
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
`;let Je=null,ro=class{constructor(){Je||(Je=URL.createObjectURL(new Blob([xn],{type:"application/javascript"}))),this.worker=new Worker(Je)}};ro.revokeObjectURL=function(){Je&&(URL.revokeObjectURL(Je),Je=null)};const yn=`(function () {
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
`;let et=null;class Pi{constructor(){et||(et=URL.createObjectURL(new Blob([yn],{type:"application/javascript"}))),this.worker=new Worker(et)}}Pi.revokeObjectURL=function(){et&&(URL.revokeObjectURL(et),et=null)};let ci=0,so;class _n{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new ro;s.addEventListener("message",i=>{s.terminate(),ro.revokeObjectURL(),e(i.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var i;return this._run("loadImageBitmap",[e,(i=s==null?void 0:s.data)==null?void 0:i.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){so===void 0&&(so=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<so&&(this._createdWorkers++,e=new Pi().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const i=new Promise((a,r)=>{this._queue.push({id:e,arguments:s,resolve:a,reject:r})});return this._next(),i}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),i=s.id;this._resolveHash[ci]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:ci++,id:i})}}const di=new _n,wn=[".jpeg",".jpg",".png",".webp",".avif"],An=["image/jpeg","image/png","image/webp","image/avif"];async function kn(t,e){var a;const s=await re.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const i=await s.blob();return((a=e==null?void 0:e.data)==null?void 0:a.alphaMode)==="premultiplied-alpha"?createImageBitmap(i,{premultiplyAlpha:"none"}):createImageBitmap(i)}const Oi={name:"loadTextures",extension:{type:O.LoadParser,priority:tt.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return ot(t,An)||st(t,wn)},async load(t,e,s){var r;let i=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await di.isImageBitmapSupported()?i=await di.loadImageBitmap(t,e):i=await kn(t,e):i=await new Promise((n,c)=>{i=new Image,i.crossOrigin=this.config.crossOrigin,i.src=t,i.complete?n(i):(i.onload=()=>{n(i)},i.onerror=c)});const a=new xi({resource:i,alphaMode:"premultiply-alpha-on-upload",resolution:((r=e.data)==null?void 0:r.resolution)||co(t),...e.data});return po(a,s,t)},unload(t){t.destroy(!0)}},Ii=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],$n=Ii.map(t=>`video/${t.substring(1)}`);function Sn(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=jn(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function En(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",i),t.addEventListener("error",a),t.load();function i(){r(),e()}function a(n){r(),s(n)}function r(){t.removeEventListener("canplaythrough",i),t.removeEventListener("error",a)}})}function jn(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const Tn={name:"loadVideo",extension:{type:O.LoadParser,name:"loadVideo"},test(t){const e=ot(t,$n),s=st(t,Ii);return e||s},async load(t,e,s){var g,m;const i={...Zs.defaultOptions,resolution:((g=e.data)==null?void 0:g.resolution)||co(t),alphaMode:((m=e.data)==null?void 0:m.alphaMode)||await mr(),...e.data},a=document.createElement("video"),r={preload:i.autoLoad!==!1?"auto":void 0,"webkit-playsinline":i.playsinline!==!1?"":void 0,playsinline:i.playsinline!==!1?"":void 0,muted:i.muted===!0?"":void 0,loop:i.loop===!0?"":void 0,autoplay:i.autoPlay!==!1?"":void 0};Object.keys(r).forEach(p=>{const b=r[p];b!==void 0&&a.setAttribute(p,b)}),i.muted===!0&&(a.muted=!0),Sn(a,t,i.crossorigin);const n=document.createElement("source");let c;if(t.startsWith("data:"))c=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const p=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();c=Zs.MIME_TYPES[p]||`video/${p}`}return n.src=t,c&&(n.type=c),new Promise(p=>{const b=async()=>{const v=new Zs({...i,resource:a});a.removeEventListener("canplay",b),e.data.preload&&await En(a),p(po(v,s,t))};a.addEventListener("canplay",b),a.appendChild(n)})},unload(t){t.destroy(!0)}},Ci={extension:{type:O.ResolveParser,name:"resolveTexture"},test:Oi.test,parse:t=>{var e;return{resolution:parseFloat(((e=Gt.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},Ln={extension:{type:O.ResolveParser,priority:-2,name:"resolveJson"},test:t=>Gt.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:Ci.parse};class Rn{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Gt,this.loader=new qr,this.cache=$e,this._backgroundLoader=new Ur(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var r,n;if(this._initialized){Pe("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let c=e.manifest;typeof c=="string"&&(c=await this.load(c)),this.resolver.addManifest(c)}const s=((r=e.texturePreference)==null?void 0:r.resolution)??1,i=typeof s=="number"?[s]:s,a=await this._detectFormats({preferredFormats:(n=e.texturePreference)==null?void 0:n.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:a,resolution:i}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const i=bi(e),a=mt(e).map(c=>{if(typeof c!="string"){const g=this.resolver.getAlias(c);return g.some(m=>!this.resolver.hasKey(m))&&this.add(c),Array.isArray(g)?g[0]:g}return this.resolver.hasKey(c)||this.add({alias:c,src:c}),c}),r=this.resolver.resolve(a),n=await this._mapLoadToResolve(r,s);return i?n[a[0]]:n}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let i=!1;typeof e=="string"&&(i=!0,e=[e]);const a=this.resolver.resolveBundle(e),r={},n=Object.keys(a);let c=0,g=0;const m=()=>{s==null||s(++c/g)},p=n.map(b=>{const v=a[b];return g+=Object.keys(v).length,this._mapLoadToResolve(v,m).then(E=>{r[b]=E})});return await Promise.all(p),i?r[e[0]]:r}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(i=>{this._backgroundLoader.add(Object.values(i))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return $e.get(e);const s={};for(let i=0;i<e.length;i++)s[i]=$e.get(e[i]);return s}async _mapLoadToResolve(e,s){const i=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const a=await this.loader.load(i,s);this._backgroundLoader.active=!0;const r={};return i.forEach(n=>{const c=a[n.src],g=[n.src];n.alias&&g.push(...n.alias),g.forEach(m=>{r[m]=c}),$e.set(g,c)}),r}async unload(e){this._initialized||await this.init();const s=mt(e).map(a=>typeof a!="string"?a.src:a),i=this.resolver.resolve(s);await this._unloadFromResolved(i)}async unloadBundle(e){this._initialized||await this.init(),e=mt(e);const s=this.resolver.resolveBundle(e),i=Object.keys(s).map(a=>this._unloadFromResolved(s[a]));await Promise.all(i)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(i=>{$e.remove(i.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const i of e.detections)e.skipDetections||await i.test()?s=await i.add(s):e.skipDetections||(s=await i.remove(s));return s=s.filter((i,a)=>s.indexOf(i)===a),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(i=>i in e).forEach(i=>{s.config[i]=e[i]})})}}const Ze=new Rn;Oe.handleByList(O.LoadParser,Ze.loader.parsers).handleByList(O.ResolveParser,Ze.resolver.parsers).handleByList(O.CacheParser,Ze.cache.parsers).handleByList(O.DetectionParser,Ze.detections);Oe.add(Gr,Vr,Hr,Zr,Xr,Kr,Qr,tn,an,fn,vn,Oi,Tn,Dr,Nr,Ci,Ln);const pi={loader:O.LoadParser,resolver:O.ResolveParser,cache:O.CacheParser,detection:O.DetectionParser};Oe.handle(O.Asset,t=>{const e=t.ref;Object.entries(pi).filter(([s])=>!!e[s]).forEach(([s,i])=>Oe.add(Object.assign(e[s],{extension:e[s].extension??i})))},t=>{const e=t.ref;Object.keys(pi).filter(s=>!!e[s]).forEach(s=>Oe.remove(e[s]))});class Pn extends br{constructor(e,s){const{text:i,resolution:a,style:r,anchor:n,width:c,height:g,roundPixels:m,...p}=e;super({...p}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=i??"",this.style=r,this.resolution=a??null,this.allowChildren=!1,this._anchor=new xr({_onUpdate:()=>{this.onViewUpdate()}}),n&&(this.anchor=n),this.roundPixels=m??!1,c!==void 0&&(this.width=c),g!==void 0&&(this.height=g)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,i=this.bounds.height,a=-s*this.anchor.x;let r=0;return e.x>=a&&e.x<=a+s&&(r=-i*this.anchor.y,e.y>=r&&e.y<=r+i)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function On(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(Dt(Ut,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class In extends Pn{constructor(...e){const s=On(e,"Text");super(s,yi),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,i=wr.measureText(this._text,this._style),{width:a,height:r}=i;e.minX=-s._x*a,e.maxX=e.minX+a,e.minY=-s._y*r,e.maxY=e.minY+r}}var Cn=Ma('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-tijp0o"><\/script><!---->',1),Bn=ee('<p style="color: red;" class="svelte-tijp0o"><strong class="svelte-tijp0o">Error:</strong> </p>'),Fn=ee('<div class="svelte-tijp0o"> </div>'),Mn=ee('<details class="svelte-tijp0o"><summary class="svelte-tijp0o"> </summary> <!></details>'),Wn=ee(`<div style="
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
  " class="svelte-tijp0o"><h3 class="svelte-tijp0o">🎰 Oma-peli Debug</h3> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Status:</strong> </p> <!> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Base:</strong> </p> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">BG URL:</strong> </p> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Sample:</strong> </p> <!></div>`),zn=ee('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-tijp0o"> </div>'),Nn=ee('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-tijp0o"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-tijp0o"> </span></div>'),Dn=ee(`<div style="
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
      " class="svelte-tijp0o">Jatka pelaamista</button></div>`),Un=ee(`<div class="svelte-tijp0o"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-tijp0o">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-tijp0o">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-tijp0o"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-tijp0o"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-tijp0o">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-tijp0o">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-tijp0o">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-tijp0o">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-tijp0o">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-tijp0o">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-tijp0o"> <span style="color: #ffd700;" class="svelte-tijp0o">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-tijp0o">Sulje</button></div>`),Gn=ee('<div class="svelte-tijp0o"><div class="svelte-tijp0o">SPIN SPEED</div> <button class="svelte-tijp0o">🐌 SLOW</button> <button class="svelte-tijp0o">⚡ MEDIUM</button> <button class="svelte-tijp0o">🚀 FAST</button></div>'),Hn=ee(`<div style="
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
        " class="svelte-tijp0o">⏹ STOP</button></div>`),Vn=ee(`<div style="
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
          " class="svelte-tijp0o">Cancel</button></div>`),Yn=ee(`<button style="
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
      " class="svelte-tijp0o">🔄 AUTOPLAY</button> <!>`,1),Xn=ee(`<!> <!> <!> <div style="
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
  " class="svelte-tijp0o"><button class="svelte-tijp0o"> </button> <button class="svelte-tijp0o">Clear Win Log</button> <button class="svelte-tijp0o"> </button> <button class="svelte-tijp0o">🎰 Test Free Spins</button></div></div> <div class="debug-panel svelte-tijp0o"><!></div> <button class="debug-panel svelte-tijp0o"> </button></div></div>`,1);function Kn(t,e){gi(e,!0);const s="1.2.8",i=13,a=1445,r=1e3,n=1.75,c=-30,g=-10,m=160,p=0,b=750,v=80,E=250,j=0,se=50,V=.5,T=40,U=0,_e=-40,Se=1,me="height",be=Math.round(100*n),xe=Math.round(be*(700/760)),Vt=xe+10,Yt=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],fo=typeof window<"u"&&window.location.hostname.includes("github.io"),te=fo?"/web-sdk/oma-peli/symbols":`${ye}/symbols`,Y=fo?"/web-sdk/oma-peli/controls":`${ye}/controls`,Xt={a:`${te}/Blue_hotrod.jpg`,b:`${te}/Blue_jacket.jpg`,c:`${te}/Blue_rollers.jpg`,d:`${te}/Blue_speakers.jpg`,e:`${te}/Premium_blonde.jpg`,f:`${te}/Premium_brunette.jpg`,g:`${te}/Premium_rocker.jpg`,h:`${te}/New_Wild.jpg`,i:`${te}/Red_burger.jpg`,j:`${te}/Red_fries.jpg`,k:`${te}/Red_milkshake.jpg`,l:`${te}/Scatter.jpg`,emptyslot:`${te}/Emptyslot.jpg`},Kt=`${te}/bg_base.jpg`,ho=`${te}/ReelFrames.png`,go=`${te}/RockABillyReels_logo.png`,Bi={spin:`${ye}/sounds/spin.mp3`,stop:`${ye}/sounds/stop.mp3`,win:`${ye}/sounds/win.mp3`};let we=P(!0),Qt={},G=null,ne=null,Zt=null,qt=null,pe=P(!0),Fi=P(!1),bt=P(!1),Jt=P(945),es=null;const Mi={fast:3,medium:7,slow:18};let X=P("medium"),We=P(!1),vo=P(Math.floor(Math.random()*20)+1);const xt={background:()=>`${ye}/music/rockabilly reels loop ${o(vo)}.mp3`,freeSpins:`${ye}/music/rockabilly-loop_long.mp3`,drumHit:`${ye}/music/drum-hit.mp3`,winTheme:`${ye}/music/win-stinger.mp3`};function mo(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(mo,500);return}const l=window.Howl;try{G=new l({src:[xt.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+o(vo)+")"),y(Fi,!0)},onloaderror:(u,$)=>{console.warn("⚠️ Background music not found:",$)}}),ne=new l({src:[xt.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(u,$)=>console.warn("⚠️ Free spins music not found:",$)}),Zt=new l({src:[xt.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),qt=new l({src:[xt.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(u){console.error("Failed to initialize music system:",u)}}function bo(){const l=o(H)?ne:G;l&&o(pe)&&!l.playing()&&(l.play(),console.log("🎵 "+(o(H)?"Free spins":"Background")+" music started"))}function Wi(){G&&G.playing()&&(G.fade(G.volume(),0,500),setTimeout(()=>G.stop(),500)),ne&&ne.playing()&&(ne.fade(ne.volume(),0,500),setTimeout(()=>ne.stop(),500))}function ts(){G&&G.playing()&&(G.fade(G.volume(),0,500),setTimeout(()=>G.stop(),500)),ne&&ne.playing()&&(ne.fade(ne.volume(),0,500),setTimeout(()=>ne.stop(),500)),setTimeout(()=>{o(pe)&&bo()},600)}function zi(){if(G&&G.playing()){const l=G.volume();G.fade(l,0,1e3),setTimeout(()=>{G.stop(),G.volume(.3)},1e3)}}let ss=P(!1);function Ni(){y(ss,!1),setTimeout(()=>{y(ss,!0)},10)}let ze=null;function Di(){y(pe,!o(pe)),o(pe)?bo():Wi()}function Ui(){Zt&&o(pe)&&o(we)&&Zt.play()}function Gi(){qt&&o(pe)&&o(we)&&qt.play()}let yt=null,Ne=null,it=null,at=null,rt=P("Initializing..."),De=P(""),ue=[],Ee=P(1e3),J=P(10),xo=P(0);const yo=1,os=100;let le=P(!1),Ue=P(0),Ie=P(!1),_t=P(!1),Hi=P(0),Ce=!1,Ae=null,is=!1,Ge=P(0),He=P(0),nt=P(0),as=P(0),rs=Ks(()=>o(He)>0?(o(nt)/o(He)*100).toFixed(2):"0.00"),ns=Ks(()=>o(Ge)>0?(o(as)/o(Ge)*100).toFixed(2):"0.00"),H=P(!1),je=P(0),Be=P(0),wt=P(0),ls=P(0),At=P(0),cs=P(0),Vi=Ks(()=>o(At)>0?(o(cs)/o(At)*100).toFixed(2):"0.00"),ce=P(ae([]));function Yi(l,u,$){const h=new Date().toLocaleString("fi-FI");let _=`
${"=".repeat(60)}
`;_+=`ROUND #${l} - ${h}
`,_+=`Mode: ${o(H)?"FREE SPINS":"BASE GAME"}
`,_+=`${"=".repeat(60)}
`,u.forEach((k,L)=>{_+=`
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
`,o(ce).push(_)}function Xi(){const l=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${o(ce).join(`
`)}`,u=new Blob([l],{type:"text/plain"}),$=URL.createObjectURL(u),h=document.createElement("a");h.href=$,h.download=`win-log-${Date.now()}.txt`,h.click(),URL.revokeObjectURL($)}function Ki(){y(ce,ae([]))}function Qi(){o(H)||(y(H,!0),y(je,10),y(Be,0),ke(wt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),ts())}const Zi={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},qi={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function _o(l){if(l===6)return Math.random()<.55?"h":"emptyslot";const u=o(H)?qi:Zi,$=Math.random();let h=0;const _=Yt.filter(L=>L!=="h"),k=_.reduce((L,M)=>L+u[M],0);for(const L of _)if(h+=u[L]/k,$<h)return L;return"f"}function wo(){const l=[];for(let u=0;u<i;u++){const $=_o(u);l.push($),ke(At),$==="emptyslot"&&ke(cs)}return l}function Ao(l){return l<3?{col:0,row:l}:l<6?{col:1,row:l-3}:l===6?{col:2,row:0}:l<10?{col:3,row:l-7}:{col:4,row:l-10}}function lt(l,u){return l===0?u:l===1?3+u:l===2?6:l===3?7+u:l===4?10+u:-1}function Ji(){if(o(H)){const l=Math.random();return l<.7?3:l<.92?5:10}else{const l=Math.random();return l<.7?1:l<.92?2:3}}const ea={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function ta(){var D;const l=[],u=[];for(let S=0;S<i;S++)ct[S]==="l"&&u.push(S);if(u.length>=5){const S=u.length;y(je,o(je)+S),o(H)?console.log(`🎰 FREE SPINS RETRIGGERED! +${S} FREE SPINS! Total: ${o(je)}`):(y(H,!0),y(Be,0),ke(wt),console.log(`🎰 FREE SPINS TRIGGERED! ${u.length} scatters = ${S} FREE SPINS!`),ts()),l.push({symbol:"l",count:u.length,payout:0,positions:u,multiplier:1})}const $=[];for(let S=0;S<3;S++)for(let R=0;R<3;R++)for(let I=0;I<1;I++)for(let C=0;C<3;C++)for(let B=0;B<3;B++){const W=[lt(0,S),lt(1,R),lt(2,I),lt(3,C),lt(4,B)];$.push(W)}console.log(`Generated ${$.length} possible paths (should be 81)`);const h=[];for(const S of $){const R=S.map(W=>ct[W]);if(R[0]==="emptyslot"||R[0]==="l")continue;let I=null;for(let W=0;W<R.length;W++)if(R[W]!=="h"&&R[W]!=="emptyslot"&&R[W]!=="l"){I=R[W];break}if(!I)continue;let C=0;const B=new Set;for(let W=0;W<S.length;W++){const Le=S[W],{col:Qe}=Ao(Le),ie=R[W];(ie===I||ie==="h")&&B.add(Qe)}for(let W=0;W<5&&B.has(W);W++)C++;if(C>=3){const Le=S[0]%3;h.push({symbol:I,length:C,path:S.slice(0,C),startRow:Le})}}const _=[],k=new Map;for(const S of h){const R=`${S.symbol}-${S.path.join(",")}`;k.has(R)||k.set(R,[]),k.get(R).push(S)}for(const[S,R]of k.entries()){const I=Math.max(...R.map(B=>B.length)),C=R.find(B=>B.length===I);C&&_.push(C)}const L=[],M=new Map;for(const S of _)M.has(S.symbol)||M.set(S.symbol,[]),M.get(S.symbol).push(S);const K=[];for(const[S,R]of M.entries()){const I=Math.max(...R.map(B=>B.length)),C=R.filter(B=>B.length===I);K.push(...C)}const Q=new Map;for(const S of K){const R=`${S.symbol}-${S.length}`;Q.has(R)||Q.set(R,[]),Q.get(R).push(S)}const Z=K.length>0?Ji():1;for(const[S,R]of Q.entries()){const I=R[0],C=(D=ea[I.symbol])==null?void 0:D[I.length];if(C!==void 0&&C>0){const B=new Map;for(const ie of R)for(let oe=0;oe<ie.length;oe++)B.has(oe)||B.set(oe,new Set),B.get(oe).add(ie.path[oe]);let W=1;for(let ie=0;ie<I.length;ie++){const oe=B.get(ie);W*=oe?oe.size:1}const Le=C*o(J)*W*Z;console.log(`  ${I.length}x${I.symbol}: ${W} ways × ${C}x × ${o(J)} bet × ${Z} mult = ${Le}`);const Qe=new Set;for(const ie of R)ie.path.forEach(oe=>Qe.add(oe));L.push({symbol:I.symbol,count:I.length,payout:Le,positions:Array.from(Qe),multiplier:Z})}}return l.push(...L),l}let fe=P(0),Ve=P(ae([])),Te=P(!1),Ye=P(!1);const ko={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function ds(l){if(!o(we)||!Qt[l])return;const u=Qt[l];u.currentTime=0,u.play().catch($=>{console.warn("Äänen toisto epäonnistui:",l,$)})}function sa(l){dt.forEach(u=>N.stage.removeChild(u)),dt=[],l.forEach(u=>{u.positions.forEach($=>{const h=Xe[$],_=new qs().rect(0,0,be,xe).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});_.x=h.container.x,_.y=h.container.y,N.stage.addChild(_),dt.push(_);let k=0,L=1;const M=.05;N.ticker.add(()=>{k+=L*M,k>=.4&&(L=-1),k<=0&&(L=1),_.alpha=.5+k})})})}function ps(){dt.forEach(l=>N.stage.removeChild(l)),dt=[]}let ct=wo(),us,N,Xe=[],dt=[];class oa{constructor(u,$){he(this,"index");he(this,"container");he(this,"offset",0);he(this,"speed",0);he(this,"targetSpeed",30);he(this,"state","idle");he(this,"stopDelay",0);he(this,"bounceOffset",0);he(this,"bounceSpeed",0);he(this,"bounceFrames",0);this.index=u,this.container=$}start(u){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=u}startSynchronized(u){const $=Mi[o(X)],h=60+u*$;this.start(h)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const u=o(X)==="slow"?.88:o(X)==="medium"?.92:.95;this.speed*=u,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,ds("stop"),Ui())}this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=Vt&&(this.offset=0,ct[this.index]=_o(this.index)))}}draw(){const u=this.container;u.removeChildren();const $=ct[this.index];if(!$||!yt||!yt[$])return;const h=yt[$];if(!h)return;const _=this.offset+this.bounceOffset,k=new Wt(h);k.width=be,k.height=xe,k.x=0,k.y=_,u.addChild(k)}}let d=P(1);vi(async()=>{N=new Ti,await N.init({width:a,height:r,background:"#001a33"}),us.appendChild(N.canvas);const l=()=>{const h=window.innerWidth,_=window.innerHeight,k=h/a,L=_/r,M=Math.min(k,L,1);y(d,ae(M)),N.stage.scale.set(M),N.renderer.resize(a,r)};l(),window.addEventListener("resize",l);const u={};try{y(rt,"Loading background and UI images..."),ue.push(`Loading background: ${Kt}`),ue.push(`Loading reel frames: ${ho}`),ue.push(`Loading logo: ${go}`),await Ze.load([{alias:"background",src:Kt},{alias:"reelframes",src:ho},{alias:"logo",src:go}]),Ne=Fe.from("background"),it=Fe.from("reelframes"),at=Fe.from("logo"),console.log("✅ Background texture created:",Ne.width,"x",Ne.height),console.log("✅ Reel frames texture created:",it.width,"x",it.height),console.log("✅ Logo texture created:",at.width,"x",at.height),ue.push("✅ All UI images loaded"),y(rt,"Loading symbols...");const h=[];for(const _ of Yt)h.push({alias:_,src:Xt[_]});await Ze.load(h);for(const _ of Yt){const k=Xt[_];ue.push(`Loading symbol ${_}: ${k}`);try{const L=Fe.from(_);u[_]=L,console.log(`✅ Symbol ${_} loaded:`,L.width,"x",L.height),ue.push(`✅ Symbol ${_} loaded`)}catch(L){const M=`❌ Failed to load symbol ${_} from ${k}: ${L}`;throw ue.push(M),console.error(M),new Error(M)}}yt=u,y(rt,"Assets loaded successfully!")}catch(h){y(De,`Asset loading failed: ${h}`),ue.push(o(De)),console.error(o(De));return}console.log("Ladataan ääniefektit...");for(const[h,_]of Object.entries(Bi)){const k=new Audio;k.src=_,k.preload="auto",k.volume=.7,k.load(),k.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${_} (käytetään hiljaista placeholderia)`)}),Qt[h]=k}if(console.log("Taustakuva ladattu, tekstuuri:",Ne),Ne){const h=new Wt(Ne);N.renderer.width/N.renderer.height;const _=h.texture.width/h.texture.height;let k;k=N.renderer.height/h.texture.height,k*=Se,h.scale.set(k),h.x=(N.renderer.width-h.width)/2,h.y=(N.renderer.height-h.height)/2+_e,N.stage.addChild(h),console.log("Taustakuva lisätty:",me,"mode, size:",h.width.toFixed(0),"x",h.height.toFixed(0),"image aspect:",_.toFixed(2),"scale:",k.toFixed(2),"pos:",h.x.toFixed(0),h.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(h=>({x:h.x+c,y:h.y+g})),Xe=[];for(let h=0;h<i;h++){const _=Ao(h),k=_.col,L=_.row,M=300+k*(be+20),K=250+L*(xe+15),Q=h===6?M+p:M,Z=h===6?K+m:K,D=new no;D.x=Q+c,D.y=Z+g;const S=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],R=new qs().rect(0,0,be,xe).fill({color:S[h],alpha:.3});R.x=D.x,R.y=D.y,N.stage.addChild(R);const I=new yi({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),C=new In({text:h.toString(),style:I});C.x=D.x+5,C.y=D.y+5,N.stage.addChild(C);const B=new qs().rect(0,0,be,xe).fill(16777215);B.x=D.x,B.y=D.y,D.mask=B,N.stage.addChild(B),N.stage.addChild(D),Xe.push(new oa(h,D))}if(it){const h=new Wt(it);h.scale.set(1),h.x=250,h.y=200,N.stage.addChild(h),es=h,y(Jt,ae(h.width)),console.log("Reel frames lisätty:",h.width.toFixed(0),"x",h.height.toFixed(0)),console.log("Control panel leveys päivitetty:",o(Jt).toFixed(0))}if(at){const h=new Wt(at);h.scale.set(V),h.x=(N.renderer.width-h.width)/2+T,h.y=U,N.stage.addChild(h),console.log("Logo lisätty päällimmäiseen layeriin:",h.width.toFixed(0),"x",h.height.toFixed(0))}mo(),N.ticker.add(ia)});function ia(){for(const l of Xe)l.update(),l.draw();if(!o(Te)&&!is&&Xe.every(l=>l.state==="stopped")){is=!0,zi();const l=ta();console.log(`Checking wins, found ${l.length} wins`),l.length>0?(y(Ve,ae(l)),y(fe,ae(l.reduce((u,$)=>u+$.payout,0))),Yi(o(Ge),l,o(fe)),aa(o(fe)),y(Te,!0),y(Hi,ae(Date.now())),console.log(`🎉 VOITTO! ${o(fe)} pistettä! Uusi saldo: ${o(Ee)}`),console.log(`isShowingWin set to: ${o(Te)}, totalWin: ${o(fe)}`),l.forEach(u=>{const $=u.multiplier?` (${u.multiplier}x multiplier)`:"";console.log(`${u.count}x ${u.symbol} = ${u.payout} pistettä${$}`)}),sa(l),ds("win"),o(le)&&!Ce&&(Ce=!0,Ae=window.setTimeout(()=>{o(Te)&&o(le)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),y(Te,!1),ps()),Ae=window.setTimeout(()=>{Ce=!1,hs()},200)},1500))):(console.log("No wins found this spin"),o(le)&&!Ce&&(Ce=!0,Ae=window.setTimeout(()=>{Ce=!1,hs()},1e3))),o(H)&&o(je)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${o(Be)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${o(Be).toFixed(2)}`),y(H,!1),y(Be,0),ts()},2e3))}}function $o(){if(!o(H)&&G&&o(pe)&&!G.playing()&&(G.play(),console.log("🎵 Background music started on first spin")),Ni(),o(H)&&o(je)>0)ke(je,-1),ke(ls),console.log(`🎰 FREE SPIN! Remaining: ${o(je)}`);else if(!o(H)){if(o(Ee)<o(J)){alert(`Not enough credits! Balance: ${o(Ee)}, Bet: ${o(J)}`),fs();return}y(Ee,o(Ee)-o(J)),ke(Ge),y(He,o(He)+o(J))}Ae!==null&&(clearTimeout(Ae),Ae=null),y(Ve,ae([])),y(fe,0),y(Te,!1),is=!1,ps(),ct=wo(),Xe.forEach((l,u)=>{l.startSynchronized(u)}),ds("spin")}function aa(l){if(y(Ee,o(Ee)+l),y(nt,o(nt)+l),y(xo,ae(l)),o(H)&&y(Be,o(Be)+l),l>0){ke(as);const u=l/o(J);u>=10&&Gi(),ze&&(u>=50?ze.show():u>=20?setTimeout(()=>ze.show(),200):u>=10&&setTimeout(()=>ze.show(),400))}}function ra(){o(J)<os&&y(J,ae(Math.min(o(J)+1,os)))}function na(){o(J)>yo&&y(J,ae(Math.max(o(J)-1,yo)))}function la(){y(J,os)}function pt(l){y(le,!0),y(Ue,ae(l)),y(Ie,!1),hs()}function fs(){y(le,!1),y(Ue,0),Ce=!1,Ae!==null&&(clearTimeout(Ae),Ae=null)}function hs(){if(!o(le)||o(Ue)<=0){fs();return}console.log(`Autoplay: Starting spin ${o(Ue)} rounds left`),$o(),ke(Ue,-1)}function ca(){confirm("Reset all statistics?")&&(y(Ge,0),y(He,0),y(nt,0),y(as,0),y(wt,0),y(ls,0),y(At,0),y(cs,0))}var So=Xn();ur(l=>{var u=Cn();f(qe(u)),q(l,u)});var Eo=qe(So);{var da=l=>{var u=Wn(),$=f(w(u),2),h=f(w($));A($);var _=f($,2);{var k=I=>{var C=Bn(),B=f(w(C));A(C),ge(()=>z(B,` ${o(De)??""}`)),q(I,C)};de(_,I=>{o(De)&&I(k)})}var L=f(_,2),M=f(w(L));M.nodeValue=` ${ye??""}`,A(L);var K=f(L,2),Q=f(w(K));Q.nodeValue=` ${Kt??""}`,A(K);var Z=f(K,2),D=f(w(Z));A(Z);var S=f(Z,2);{var R=I=>{var C=Mn(),B=w(C),W=w(B);A(B);var Le=f(B,2);si(Le,17,()=>ue,ti,(Qe,ie)=>{var oe=Fn(),Oa=w(oe,!0);A(oe),ge(()=>z(Oa,o(ie))),q(Qe,oe)}),A(C),ge(()=>z(W,`Log (${ue.length??""})`)),q(I,C)};de(S,I=>{ue.length>0&&I(R)})}A(u),ge(()=>{z(h,` ${o(rt)??""}`),z(D,` ${Xt.a??""}`)}),q(l,u)};de(Eo,l=>{(o(rt)!=="Assets loaded successfully!"||o(De))&&l(da)})}var jo=f(Eo,2);{var pa=l=>{var u=Dn(),$=f(w(u),2),h=w($);A($);var _=f($,2);si(_,17,()=>o(Ve),ti,(K,Q)=>{var Z=zn(),D=w(Z);A(Z),ge(S=>z(D,`${o(Q).count??""} × ${ko[o(Q).symbol]??""} = ${S??""} pistettä`),[()=>o(Q).payout.toFixed(2)]),q(K,Z)});var k=f(_,2);{var L=K=>{var Q=Nn(),Z=w(Q),D=w(Z);A(Z),A(Q),ge(()=>z(D,`✨ ${o(Ve)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),q(K,Q)};de(k,K=>{o(Ve).length>0&&o(Ve)[0].multiplier>1&&K(L)})}var M=f(k,2);A(u),ge(()=>z(h,`${o(fe)??""} pistettä`)),F("click",M,()=>{y(Te,!1),ps(),console.log("Win popup closed, ready for next spin")}),q(l,u)};de(jo,l=>{o(fe)>0&&o(Te)&&l(pa)})}var To=f(jo,2);{var ua=l=>{var u=Un(),$=f(w(u),8);A(u),ge(h=>x(u,"style",`
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
  `),[()=>Math.min(r*o(d)*.8,80*window.innerHeight/100)]),F("click",$,()=>{y(Ye,!1)}),q(l,u)};de(To,l=>{o(Ye)&&l(ua)})}var Lo=f(To,2),gs=w(Lo),ut=w(gs);x(ut,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${a}px;
        height: ${r}px;
      `);var vs=w(ut),kt=f(vs,2);kt.textContent=`🛠️ DEBUG v${s}`;var ms=f(kt,2),bs=w(ms);x(bs,"src",`${Y??""}/Control_leftend.png`);var $t=f(bs,2),St=w($t),Ro=w(St),xs=f(Ro,2),ys=w(xs),Et=f(ys,2),fa=w(Et,!0);A(Et);var _s=f(Et,2),Po=f(_s,2);A(xs),A(St);var ws=f(St,2);x(ws,"src",`${Y??""}/Control_divider.png`);var jt=f(ws,2),Oo=w(jt),As=f(Oo,2),ha=w(As,!0);A(As),A(jt);var ks=f(jt,2);x(ks,"src",`${Y??""}/Control_divider.png`);var $s=f(ks,2),Ss=w($s),Es=w(Ss);A(Ss),A($s);var js=f($s,2);x(js,"src",`${Y??""}/Control_divider.png`);var Tt=f(js,2),Ts=w(Tt),Io=f(Ts,2);A(Tt);var Ls=f(Tt,2);x(Ls,"src",`${Y??""}/Control_divider.png`);var Lt=f(Ls,2),Rt=w(Lt),Pt=f(Rt,2),ga=w(Pt,!0);A(Pt);var va=f(Pt,2);{var ma=l=>{var u=Gn(),$=w(u),h=f($,2),_=f(h,2),k=f(_,2);A(u),ge(()=>{x(u,"style",`
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
            `)}),F("click",h,()=>{y(X,"slow"),y(We,!1)}),F("click",_,()=>{y(X,"medium"),y(We,!1)}),F("click",k,()=>{y(X,"fast"),y(We,!1)}),q(l,u)};de(va,l=>{o(We)&&l(ma)})}A(Lt);var Rs=f(Lt,2);x(Rs,"src",`${Y??""}/Control_divider.png`);var Ot=f(Rs,2),Ps=w(Ot),Co=f(Ps,2);A(Ot);var Os=f(Ot,2);x(Os,"src",`${Y??""}/Control_divider.png`);var It=f(Os,2),Bo=w(It),Is=f(Bo,2),ba=w(Is,!0);A(Is),A(It);var Cs=f(It,2);x(Cs,"src",`${Y??""}/Control_divider.png`);var Fo=f(Cs,2);A($t);var Mo=f($t,2);x(Mo,"src",`${Y??""}/Control_rightend.png`),A(ms),A(ut),Jo(ut,l=>us=l,()=>us);var Ct=f(ut,2);Jo(Ct,l=>ze=l,()=>ze);var Bt=f(Ct,2),Wo=f(w(Bt),2);Wo.textContent=`v${s}`;var Bs=f(Wo,2),zo=f(w(Bs),2),xa=w(zo,!0);A(zo),A(Bs);var Fs=f(Bs,2),No=f(w(Fs),2),ya=w(No,!0);A(No),A(Fs);var Ms=f(Fs,2),Do=f(w(Ms),2),_a=w(Do,!0);A(Do),A(Ms);var Ws=f(Ms,2),zs=f(w(Ws),2),wa=w(zs);A(zs),A(Ws);var Ns=f(Ws,2),Ds=f(w(Ns),2),Aa=w(Ds);A(Ds),A(Ns);var Us=f(Ns,2),Uo=f(w(Us),2),ka=w(Uo,!0);A(Uo),A(Us);var Gs=f(Us,2),Go=f(w(Gs),2),$a=w(Go,!0);A(Go),A(Gs);var Hs=f(Gs,2),Ho=f(w(Hs),2),Sa=w(Ho);A(Ho),A(Hs);var Vo=f(Hs,2),Yo=f(Vo,2),Ke=w(Yo),Ea=w(Ke);A(Ke);var Ft=f(Ke,2),ft=f(Ft,2),ja=w(ft);A(ft);var Vs=f(ft,2);A(Yo),A(Bt);var Mt=f(Bt,2),Ta=w(Mt);{var La=l=>{var u=Hn(),$=f(w(u),2),h=w($);A($);var _=f($,2);A(u),ge(()=>z(h,`${o(Ue)??""} left`)),F("click",_,fs),q(l,u)},Ra=l=>{var u=Yn(),$=qe(u),h=f($,2);{var _=k=>{var L=Vn(),M=f(w(L),2),K=f(M,2),Q=f(K,2),Z=f(Q,2),D=f(Z,2),S=f(D,2);A(L),F("click",M,()=>pt(10)),F("click",K,()=>pt(100)),F("click",Q,()=>pt(1e3)),F("click",Z,()=>pt(1e4)),F("click",D,()=>pt(1e5)),F("click",S,()=>{y(Ie,!1)}),q(k,L)};de(h,k=>{o(Ie)&&k(_)})}F("click",$,()=>{y(Ie,!o(Ie))}),q(l,u)};de(Ta,l=>{o(le)?l(La):l(Ra,!1)})}A(Mt);var ht=f(Mt,2),Pa=w(ht,!0);A(ht),A(gs),A(Lo),ge((l,u,$,h,_,k,L,M)=>{x(gs,"style",`
    position: relative;
    width: ${a*o(d)}px;
    height: ${r*o(d)}px;
  `),x(vs,"style",`
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
        `),x(kt,"style",`
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
        `),x(ms,"style",`
        position: absolute;
        left: ${((es?es.x:E)+j)*o(d)}px;
        top: ${(b+se)*o(d)}px;
        width: ${o(Jt)*o(d)}px;
        height: ${v*o(d)}px;
        display: flex;
        align-items: center;
        z-index: 1000;
      `),x(bs,"style",`height: ${v*o(d)}px; flex-shrink: 0;`),x($t,"style",`
    flex-grow: 1;
    height: ${v*o(d)}px;
    background-image: url('${Y??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 ${20*o(d)}px;
  `),x(St,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*o(d)}px;`),x(Ro,"style",`color: #00ff00; font-size: ${12*o(d)}px; font-weight: bold;`),x(xs,"style",`display: flex; gap: ${5*o(d)}px; align-items: center;`),x(ys,"style",`
            width: ${40*o(d)}px;
            height: ${40*o(d)}px;
            background-image: url('${Y??""}/Control_lowerbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(Et,"style",`
          color: #fff;
          font-size: ${18*o(d)}px;
          font-weight: bold;
          min-width: ${80*o(d)}px;
          text-align: center;
          font-family: 'Courier New', monospace;
        `),z(fa,l),x(_s,"style",`
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
          `),x(ws,"style",`height: ${v*.8*o(d)}px; flex-shrink: 0;`),x(jt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*o(d)}px;`),x(Oo,"style",`color: #00ff00; font-size: ${12*o(d)}px; font-weight: bold;`),x(As,"style",`
        color: #fff;
        font-size: ${20*o(d)}px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      `),z(ha,u),x(ks,"style",`height: ${v*.8*o(d)}px; flex-shrink: 0;`),Er(Ss,1,`play-button-wrapper ${(o(ss)?"glare-animate":"")??""}`,"svelte-tijp0o"),Es.disabled=o(le),x(Es,"style",`
            width: ${130*o(d)}px;
            height: ${130*o(d)}px;
            background-image: url('${Y??""}/Control_playbutton.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border: none;
            cursor: ${(o(le)?"not-allowed":"pointer")??""};
            background-color: transparent;
            opacity: ${(o(le)?.5:1)??""};
            position: relative;
            z-index: 10;
            border-radius: 50%;
          `),x(js,"style",`height: ${v*.8*o(d)}px; flex-shrink: 0;`),x(Tt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*o(d)}px;`),x(Ts,"style",`
          width: ${50*o(d)}px;
          height: ${50*o(d)}px;
          background-image: url('${Y??""}/${(o(le)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),x(Io,"src",`${Y??""}/${(o(le)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),x(Io,"style",`width: ${50*o(d)}px; height: auto;`),x(Ls,"style",`height: ${v*.8*o(d)}px; flex-shrink: 0;`),x(Lt,"style",`position: relative; display: flex; flex-direction: column; align-items: center; gap: ${5*o(d)}px;`),x(Rt,"style",`
          width: ${50*o(d)}px;
          height: ${50*o(d)}px;
          background-image: url('${Y??""}/Control_fastplay_select.png');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),x(Rt,"title",`Spin Speed: ${(o(X)==="slow"?"Slow":o(X)==="medium"?"Medium":"Fast")??""}`),x(Pt,"style",`
        color: #ffffff;
        font-size: ${10*o(d)}px;
        font-weight: bold;
        text-transform: uppercase;
      `),z(ga,o(X)==="slow"?"Slow":o(X)==="medium"?"Med":"Fast"),x(Rs,"style",`height: ${v*.8*o(d)}px; flex-shrink: 0;`),x(Ot,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*o(d)}px;`),x(Ps,"style",`
          width: ${50*o(d)}px;
          height: ${50*o(d)}px;
          background-image: url('${Y??""}/${(o(bt)?"Control_fastplay_select.png":"Control_fastplay_deselect.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),x(Co,"src",`${Y??""}/${(o(bt)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),x(Co,"style",`width: ${50*o(d)}px; height: auto;`),x(Os,"style",`height: ${v*.8*o(d)}px; flex-shrink: 0;`),x(It,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*o(d)}px;`),x(Bo,"style",`color: #00ff00; font-size: ${12*o(d)}px; font-weight: bold;`),x(Is,"style",`
        color: #ffd700;
        font-size: ${20*o(d)}px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      `),z(ba,$),x(Cs,"style",`height: ${v*.8*o(d)}px; flex-shrink: 0;`),x(Fo,"style",`
        width: ${50*o(d)}px;
        height: ${50*o(d)}px;
        background-image: url('${Y??""}/Control_menubar.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),x(Mo,"style",`height: ${v*o(d)}px; flex-shrink: 0;`),x(Ct,"winlevel",o(fe)/o(J)>=50?"jackpot":o(fe)/o(J)>=20?"medium":"small"),x(Ct,"winamount",o(fe)),x(Bt,"style",`
  position: absolute;
  top: 20px;
  left: 20px;
  display: ${(o(_t)?"block":"none")??""};
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
`),z(xa,h),z(ya,_),z(_a,k),x(zs,"style",`color: ${L??""};`),z(wa,`${o(rs)??""}%`),x(Ds,"style",`color: ${M??""};`),z(Aa,`${o(ns)??""}%`),z(ka,o(wt)),z($a,o(ls)),z(Sa,`${o(Vi)??""}%`),Ke.disabled=o(ce).length===0,x(Ke,"style",`
        width: 100%;
        padding: 5px;
        background: ${(o(ce).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(o(ce).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(o(ce).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(o(ce).length>0?"1":"0.5")??""};
      `),z(Ea,`Download Win Log (${o(ce).length??""})`),Ft.disabled=o(ce).length===0,x(Ft,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(o(ce).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(o(ce).length>0?"1":"0.5")??""};
      `),x(ft,"style",`
        width: 100%;
        padding: 5px;
        background: ${(o(pe)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(o(pe)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),z(ja,`🎵 Music: ${(o(pe)?"ON":"OFF")??""}`),Vs.disabled=o(H),x(Vs,"style",`
        width: 100%;
        padding: 5px;
        background: ${(o(H)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(o(H)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(o(H)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(o(H)?"0.5":"1")??""};
      `),x(Mt,"style",`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1500;
  display: ${(o(_t)?"block":"none")??""};
`),x(ht,"style",`
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
  `),x(ht,"title",o(we)?"Mykistä äänet":"Laita äänet päälle"),z(Pa,o(we)?"🔊":"🔇")},[()=>o(J).toFixed(2),()=>o(Ee).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>o(xo).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>o(Ge).toLocaleString(),()=>o(He).toLocaleString(),()=>o(nt).toLocaleString(),()=>parseFloat(o(rs))>=95?"#00ff00":parseFloat(o(rs))>=85?"#ffff00":"#ff6666",()=>parseFloat(o(ns))>=30?"#00ff00":parseFloat(o(ns))>=20?"#ffff00":"#ff6666"]),F("click",vs,()=>{y(Ye,!o(Ye))}),F("click",kt,()=>{y(_t,!o(_t))}),F("click",ys,na),F("click",_s,ra),F("click",Po,la),F("click",Es,$o),F("click",Ts,()=>{y(Ie,!o(Ie))}),F("click",Rt,()=>{y(We,!o(We))}),F("click",Ps,()=>{y(bt,!o(bt))}),F("click",Fo,()=>{y(Ye,!o(Ye))}),F("click",Vo,ca),F("click",Ke,Xi),F("click",Ft,Ki),F("click",ft,Di),F("click",Vs,Qi),F("click",ht,()=>{y(we,!o(we))}),q(t,So),mi()}var Qn=ee('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),Zn=ee('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function qn(t,e){gi(e,!1);let s=fr(e,"isAuthenticated",12,!1),i=oo(""),a=oo(!1);const r="slot2024";function n(){o(i)===r?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(y(a,!0),y(i,""),setTimeout(()=>y(a,!1),3e3))}vi(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),za();var c=Wa(),g=qe(c);{var m=p=>{var b=Zn(),v=w(b),E=f(w(v),4),j=w(E);jr(j),pr(2),A(E);var se=f(E,2);{var V=T=>{var U=Qn();q(T,U)};de(se,T=>{o(a)&&T(V)})}A(v),A(b),Lr(j,()=>o(i),T=>y(i,T)),F("submit",E,Rr(n)),q(p,b)};de(g,p=>{s()||p(m)})}q(t,c),mi()}var Jn=ee('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),el=ee("<!> <!>",1);function ul(t){let e=oo(!1);var s=el(),i=qe(s);qn(i,{get isAuthenticated(){return o(e)},set isAuthenticated(n){y(e,n)},$$legacy:!0});var a=f(i,2);{var r=n=>{var c=Jn(),g=f(qe(c),2);Kn(g,{}),q(n,c)};de(a,n=>{o(e)&&n(r)})}q(t,s)}export{$i as A,wi as C,Wr as R,Ir as S,Si as V,ul as _,Or as u};
