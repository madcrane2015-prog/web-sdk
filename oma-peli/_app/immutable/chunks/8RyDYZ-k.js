const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DG3iW7cX.js","./DJ5S-yJ0.js","./Db_meveG.js","./BdJg5JGx.js","./BcU-qs_z.js","./C2GHuDhf.js","./C4fm-Y4x.js","./W10X4f8w.js"])))=>i.map(i=>d[i]);
var Ci=Object.defineProperty;var Bi=(t,e,s)=>e in t?Ci(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var he=(t,e,s)=>Bi(t,typeof e!="symbol"?e+"":e,s);import{f as Fi,l as Mi,t as q,g as I,a as Z,i as Wi,d as zi}from"./BJCaw-qO.js";import{i as Ni}from"./CeejRTB0.js";import{R as ve,T as Di,Q as Ui,i as a,w as Gi,W as Hi,X as Xa,Y as Ka,Z as Gs,a1 as ht,a9 as Vi,_ as go,$ as ho,a0 as Yi,ad as vo,O as Xi,z as Ki,I as Qa,ar as Hs,K as Ja,as as Qi,at as Ji,au as Zi,ac as qi,av as er,aw as tr,ax as sr,ay as ar,a3 as or,az as ir,aA as rr,N as nr,aB as lr,aC as cr,g as dr,n as pr,p as mo,ai as T,ah as bo,y,aD as ke,f as mt,s as f,c as w,r as A,t as pe,k as Vs,a as yo,aE as ur,aF as qs}from"./BdJg5JGx.js";import{_ as Za,p as oe,i as re}from"./Db_meveG.js";import{a as fr,s as z}from"./Df-H93ww.js";import{b as qa,p as gr}from"./dtG1_1a4.js";import{b as be}from"./CZ6LEkEP.js";import{e as Ie,E as O,a as hr,C as ia,Q as ea,V as ta,N as Ys,D as ne,H as vr,p as Fe,a0 as et,a1 as Me,a2 as mr,w as Pe,a3 as bt,a4 as xo,a5 as tt,a6 as $e,a7 as Gt,a8 as _o,a9 as br,aa as Xs,y as Nt}from"./DJ5S-yJ0.js";import{A as yr,B as eo,G as xr,a as to}from"./BcU-qs_z.js";function so(t,e){return e}function _r(t,e,s,o){for(var i=[],r=e.length,l=0;l<r;l++)Zi(e[l].e,i,!0);var c=r>0&&i.length===0&&s!==null;if(c){var v=s.parentNode;qi(v),v.append(s),o.clear(),Re(t,e[0].prev,e[r-1].next)}er(i,()=>{for(var m=0;m<r;m++){var u=e[m];c||(o.delete(u.k),Re(t,u.prev,u.next)),tr(u.e,!c)}})}function ao(t,e,s,o,i,r=null){var l=t,c={flags:e,items:new Map,first:null};ve&&Di();var v=null,m=!1,u=Gi(()=>{var b=s();return Xi(b)?b:b==null?[]:vo(b)});Ui(()=>{var b=a(u),h=b.length;if(m&&h===0)return;m=h===0;let j=!1;if(ve){var L=l.data===Hi;L!==(h===0)&&(l=Xa(),Ka(l),Gs(!1),j=!0)}if(ve){for(var se=null,H,R=0;R<h;R++){if(ht.nodeType===8&&ht.data===Vi){l=ht,j=!0,Gs(!1);break}var N=b[R],ye=o(N,R);H=wo(ht,c,se,null,N,ye,R,i,e,s),c.items.set(ye,H),se=H}h>0&&Ka(Xa())}ve||wr(b,c,l,i,e,o,s),r!==null&&(h===0?v?go(v):v=ho(()=>r(l)):v!==null&&Yi(v,()=>{v=null})),j&&Gs(!0),a(u)}),ve&&(l=ht)}function wr(t,e,s,o,i,r,l){var c=t.length,v=e.items,m=e.first,u=m,b,h=null,j=[],L=[],se,H,R,N;for(N=0;N<c;N+=1){if(se=t[N],H=r(se,N),R=v.get(H),R===void 0){var ye=u?u.e.nodes_start:s;h=wo(ye,e,h,h===null?e.first:h.next,se,H,N,o,i,l),v.set(H,h),j=[],L=[],u=h.next;continue}if(Ar(R,se,N),(R.e.f&Hs)!==0&&go(R.e),R!==u){if(b!==void 0&&b.has(R)){if(j.length<L.length){var Se=L[0],me;h=Se.prev;var Ht=j[0],xe=j[j.length-1];for(me=0;me<j.length;me+=1)oo(j[me],Se,s);for(me=0;me<L.length;me+=1)b.delete(L[me]);Re(e,Ht.prev,xe.next),Re(e,h,Ht),Re(e,xe,Se),u=Se,h=xe,N-=1,j=[],L=[]}else b.delete(R),oo(R,u,s),Re(e,R.prev,R.next),Re(e,R,h===null?e.first:h.next),Re(e,h,R),h=R;continue}for(j=[],L=[];u!==null&&u.k!==H;)(u.e.f&Hs)===0&&(b??(b=new Set)).add(u),L.push(u),u=u.next;if(u===null)continue;R=u}j.push(R),h=R,u=R.next}if(u!==null||b!==void 0){for(var _e=b===void 0?[]:vo(b);u!==null;)(u.e.f&Hs)===0&&_e.push(u),u=u.next;var ca=_e.length;if(ca>0){var Vt=null;_r(e,_e,Vt,v)}}Ja.first=e.first&&e.first.e,Ja.last=h&&h.e}function Ar(t,e,s,o){Ji(t.v,e),t.i=s}function wo(t,e,s,o,i,r,l,c,v,m){var u=(v&sr)!==0,b=(v&ar)===0,h=u?b?Ki(i):Qa(i):i,j=(v&Qi)===0?l:Qa(l),L={i:j,v:h,k:r,a:null,e:null,prev:s,next:o};try{return L.e=ho(()=>c(t,h,j,m),ve),L.e.prev=s&&s.e,L.e.next=o&&o.e,s===null?e.first=L:(s.next=L,s.e.next=L.e),o!==null&&(o.prev=L,o.e.prev=L.e),L}finally{}}function oo(t,e,s){for(var o=t.next?t.next.e.nodes_start:s,i=e?e.e.nodes_start:s,r=t.e.nodes_start;r!==o;){var l=or(r);i.before(r),r=l}}function Re(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function kr(t,e,s){var o=t==null?"":""+t;return o=o?o+" "+e:e,o===""?null:o}function $r(t,e,s,o,i,r){var l=t.__className;if(ve||l!==s){var c=kr(s,o);(!ve||c!==t.getAttribute("class"))&&(c==null?t.removeAttribute("class"):t.className=c),t.__className=s}return r}function Sr(t){if(ve){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var o=t.value;x(t,"value",null),t.value=o}if(t.hasAttribute("checked")){var i=t.checked;x(t,"checked",null),t.checked=i}}};t.__on_r=s,ir(s),Fi()}}function x(t,e,s,o){var i=t.__attributes??(t.__attributes={});ve&&(i[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||i[e]!==(i[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[rr]=s),s==null?t.removeAttribute(e):typeof s!="string"&&Er(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var io=new Map;function Er(t){var e=io.get(t.nodeName);if(e)return e;io.set(t.nodeName,e=[]);for(var s,o=t,i=Element.prototype;i!==o;){s=lr(o);for(var r in s)s[r].set&&e.push(r);o=nr(o)}return e}function jr(t,e,s=e){var o=cr();Mi(t,"input",i=>{var r=i?t.defaultValue:t.value;if(r=Ks(t)?Qs(r):r,s(r),o&&r!==(r=e())){var l=t.selectionStart,c=t.selectionEnd;t.value=r??"",c!==null&&(t.selectionStart=l,t.selectionEnd=Math.min(c,t.value.length))}}),(ve&&t.defaultValue!==t.value||dr(e)==null&&t.value)&&s(Ks(t)?Qs(t.value):t.value),pr(()=>{var i=e();Ks(t)&&i===Qs(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}function Ks(t){var e=t.type;return e==="number"||e==="range"}function Qs(t){return t===""?null:+t}function Tr(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const sa=[];Ie.handleByNamedList(O.Environment,sa);async function Lr(t){if(!t)for(let e=0;e<sa.length;e++){const s=sa[e];if(s.value.test()){await s.value.load();return}}}let vt;function Rr(){if(typeof vt=="boolean")return vt;try{vt=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{vt=!1}return vt}var Ao=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(Ao||{});class Pr{constructor(e){this.items=[],this._name=e}emit(e,s,o,i,r,l,c,v){const{name:m,items:u}=this;for(let b=0,h=u.length;b<h;b++)u[b][m](e,s,o,i,r,l,c,v);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Ir=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],ko=class $o extends hr{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...Ir,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Lr(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const o in this._systemsHash)e={...this._systemsHash[o].constructor.defaultOptions,...e};e={...$o.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let o=0;o<this.runners.init.items.length;o++)await this.runners.init.items[o].init(e);this._initOptions=e}render(e,s){let o=e;if(o instanceof ia&&(o={container:o},s&&(ea(ta,"passing a second argument is deprecated, please use render options instead"),o.target=s.renderTexture)),o.target||(o.target=this.view.renderTarget),o.target===this.view.renderTarget&&(this._lastObjectRendered=o.container,o.clearColor??(o.clearColor=this.background.colorRgba),o.clear??(o.clear=this.background.clearBeforeRender)),o.clearColor){const i=Array.isArray(o.clearColor)&&o.clearColor.length===4;o.clearColor=i?o.clearColor:Ys.shared.setValue(o.clearColor).toArray()}o.transform||(o.container.updateLocalTransform(),o.transform=o.container.localTransform),o.container.enableRenderGroup(),this.runners.prerender.emit(o),this.runners.renderStart.emit(o),this.runners.render.emit(o),this.runners.renderEnd.emit(o),this.runners.postrender.emit(o)}resize(e,s,o){const i=this.view.resolution;this.view.resize(e,s,o),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),o!==void 0&&o!==i&&this.runners.resolutionChange.emit(o)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Ao.ALL);const{clear:o,clearColor:i,target:r}=e;Ys.shared.setValue(i??this.background.colorRgba),s.renderTarget.clear(r,o,Ys.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new Pr(s)})}_addSystems(e){let s;for(s in e){const o=e[s];this._addSystem(o.value,o.name)}}_addSystem(e,s){const o=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=o,this._systemsHash[s]=o;for(const i in this.runners)this.runners[i].add(o);return this}_addPipes(e,s){const o=s.reduce((i,r)=>(i[r.name]=r.value,i),{});e.forEach(i=>{const r=i.value,l=i.name,c=o[l];this.renderPipes[l]=new r(this,c?new c:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Rr())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};ko.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let So=ko,Dt;function Or(t){return Dt!==void 0||(Dt=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??So.defaultOptions.failIfMajorPerformanceCaveat};try{if(!ne.get().getWebGLRenderingContext())return!1;let i=ne.get().createCanvas().getContext("webgl",e);const r=!!((s=i==null?void 0:i.getContextAttributes())!=null&&s.stencil);if(i){const l=i.getExtension("WEBGL_lose_context");l&&l.loseContext()}return i=null,r}catch{return!1}})()),Dt}let Ut;async function Cr(t={}){return Ut!==void 0||(Ut=await(async()=>{const e=ne.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),Ut}const ro=["webgl","webgpu","canvas"];async function Br(t){let e=[];t.preference?(e.push(t.preference),ro.forEach(r=>{r!==t.preference&&e.push(r)})):e=ro.slice();let s,o={};for(let r=0;r<e.length;r++){const l=e[r];if(l==="webgpu"&&await Cr()){const{WebGPURenderer:c}=await Za(async()=>{const{WebGPURenderer:v}=await import("./DG3iW7cX.js");return{WebGPURenderer:v}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=c,o={...t,...t.webgpu};break}else if(l==="webgl"&&Or(t.failIfMajorPerformanceCaveat??So.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:c}=await Za(async()=>{const{WebGLRenderer:v}=await import("./W10X4f8w.js");return{WebGLRenderer:v}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=c,o={...t,...t.webgl};break}else if(l==="canvas")throw o={...t},new Error("CanvasRenderer is not yet implemented")}if(delete o.webgpu,delete o.webgl,!s)throw new Error("No available renderer for the current environment");const i=new s;return await i.init(o),i}const Eo="8.8.1";class jo{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Eo)}static destroy(){}}jo.extension=O.Application;class Fr{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Eo)}destroy(){this._renderer=null}}Fr.extension={type:[O.WebGLSystem,O.WebGPUSystem],name:"initHook",priority:-10};const To=class aa{constructor(...e){this.stage=new ia,e[0]!==void 0&&ea(ta,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Br(e),aa._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return ea(ta,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const o=aa._plugins.slice(0);o.reverse(),o.forEach(i=>{i.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};To._plugins=[];let Lo=To;Ie.handleByList(O.Application,Lo._plugins);Ie.add(jo);class Ro extends yr{constructor(e,s){super();const{textures:o,data:i}=e;Object.keys(i.pages).forEach(r=>{const l=i.pages[parseInt(r,10)],c=o[l.id];this.pages.push({texture:c})}),Object.keys(i.chars).forEach(r=>{const l=i.chars[r],{frame:c,source:v}=o[l.page],m=new vr(l.x+c.x,l.y+c.y,l.width,l.height),u=new Fe({source:v,frame:m});this.chars[r]={id:r.codePointAt(0),xOffset:l.xOffset,yOffset:l.yOffset,xAdvance:l.xAdvance,kerning:l.kerning??{},texture:u}}),this.baseRenderedFontSize=i.fontSize,this.baseMeasurementFontSize=i.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:i.fontSize},this.baseLineOffset=i.baseLineOffset,this.lineHeight=i.lineHeight,this.fontFamily=i.fontFamily,this.distanceField=i.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){eo.install(e)}static uninstall(e){eo.uninstall(e)}}const Js={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const b in e){const h=e[b].match(/^[a-z]+/gm)[0],j=e[b].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),L={};for(const se in j){const H=j[se].split("="),R=H[0],N=H[1].replace(/"/gm,""),ye=parseFloat(N),Se=isNaN(ye)?N:ye;L[R]=Se}s[h].push(L)}const o={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[i]=s.info,[r]=s.common,[l]=s.distanceField??[];l&&(o.distanceField={range:parseInt(l.distanceRange,10),type:l.fieldType}),o.fontSize=parseInt(i.size,10),o.fontFamily=i.face,o.lineHeight=parseInt(r.lineHeight,10);const c=s.page;for(let b=0;b<c.length;b++)o.pages.push({id:parseInt(c[b].id,10)||0,file:c[b].file});const v={};o.baseLineOffset=o.lineHeight-parseInt(r.base,10);const m=s.char;for(let b=0;b<m.length;b++){const h=m[b],j=parseInt(h.id,10);let L=h.letter??h.char??String.fromCharCode(j);L==="space"&&(L=" "),v[j]=L,o.chars[L]={id:j,page:parseInt(h.page,10)||0,x:parseInt(h.x,10),y:parseInt(h.y,10),width:parseInt(h.width,10),height:parseInt(h.height,10),xOffset:parseInt(h.xoffset,10),yOffset:parseInt(h.yoffset,10),xAdvance:parseInt(h.xadvance,10),kerning:{}}}const u=s.kerning||[];for(let b=0;b<u.length;b++){const h=parseInt(u[b].first,10),j=parseInt(u[b].second,10),L=parseInt(u[b].amount,10);o.chars[v[j]].kerning[v[h]]=L}return o}},no={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],o=t.getElementsByTagName("common")[0],i=t.getElementsByTagName("distanceField")[0];i&&(e.distanceField={type:i.getAttribute("fieldType"),range:parseInt(i.getAttribute("distanceRange"),10)});const r=t.getElementsByTagName("page"),l=t.getElementsByTagName("char"),c=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(o.getAttribute("lineHeight"),10);for(let m=0;m<r.length;m++)e.pages.push({id:parseInt(r[m].getAttribute("id"),10)||0,file:r[m].getAttribute("file")});const v={};e.baseLineOffset=e.lineHeight-parseInt(o.getAttribute("base"),10);for(let m=0;m<l.length;m++){const u=l[m],b=parseInt(u.getAttribute("id"),10);let h=u.getAttribute("letter")??u.getAttribute("char")??String.fromCharCode(b);h==="space"&&(h=" "),v[b]=h,e.chars[h]={id:b,page:parseInt(u.getAttribute("page"),10)||0,x:parseInt(u.getAttribute("x"),10),y:parseInt(u.getAttribute("y"),10),width:parseInt(u.getAttribute("width"),10),height:parseInt(u.getAttribute("height"),10),xOffset:parseInt(u.getAttribute("xoffset"),10),yOffset:parseInt(u.getAttribute("yoffset"),10),xAdvance:parseInt(u.getAttribute("xadvance"),10),kerning:{}}}for(let m=0;m<c.length;m++){const u=parseInt(c[m].getAttribute("first"),10),b=parseInt(c[m].getAttribute("second"),10),h=parseInt(c[m].getAttribute("amount"),10);e.chars[v[b]].kerning[v[u]]=h}return e}},lo={test(t){return typeof t=="string"&&t.includes("<font>")?no.test(ne.get().parseXML(t)):!1},parse(t){return no.parse(ne.get().parseXML(t))}},Mr=[".xml",".fnt"],Wr={extension:{type:O.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof Ro,getCacheableAssets(t,e){const s={};return t.forEach(o=>{s[o]=e,s[`${o}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},zr={extension:{type:O.LoadParser,priority:et.Normal},name:"loadBitmapFont",test(t){return Mr.includes(Me.extname(t).toLowerCase())},async testParse(t){return Js.test(t)||lo.test(t)},async parse(t,e,s){const o=Js.test(t)?Js.parse(t):lo.parse(t),{src:i}=e,{pages:r}=o,l=[],c=o.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let b=0;b<r.length;++b){const h=r[b].file;let j=Me.join(Me.dirname(i),h);j=mr(j,i),l.push({src:j,data:c})}const v=await s.load(l),m=l.map(b=>v[b.src]);return new Ro({data:o,textures:m},i)},async load(t,e){return await(await ne.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(o=>s.unload(o.texture.source._sourceOrigin))),t.destroy()}};class Nr{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let o=0;o<s;o++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Dr={extension:{type:O.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Fe),getCacheableAssets:(t,e)=>{const s={};return t.forEach(o=>{e.forEach((i,r)=>{s[o+(r===0?"":r+1)]=i})}),s}};async function Po(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Ur={extension:{type:O.DetectionParser,priority:1},test:async()=>Po("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},co=["png","jpg","jpeg"],Gr={extension:{type:O.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...co],remove:async t=>t.filter(e=>!co.includes(e))},Hr="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function ra(t){return Hr?!1:document.createElement("video").canPlayType(t)!==""}const Vr={extension:{type:O.DetectionParser,priority:0},test:async()=>ra("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},Yr={extension:{type:O.DetectionParser,priority:0},test:async()=>ra("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},Xr={extension:{type:O.DetectionParser,priority:0},test:async()=>ra("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},Kr={extension:{type:O.DetectionParser,priority:0},test:async()=>Po("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class Qr{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,o)=>(this._parsersValidated=!1,e[s]=o,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const o={promise:null,parser:null};return o.promise=(async()=>{var l,c;let i=null,r=null;if(s.loadParser&&(r=this._parserHash[s.loadParser],r||Pe(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!r){for(let v=0;v<this.parsers.length;v++){const m=this.parsers[v];if(m.load&&((l=m.test)!=null&&l.call(m,e,s,this))){r=m;break}}if(!r)return Pe(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}i=await r.load(e,s,this),o.parser=r;for(let v=0;v<this.parsers.length;v++){const m=this.parsers[v];m.parse&&m.parse&&await((c=m.testParse)==null?void 0:c.call(m,i,s,this))&&(i=await m.parse(i,s,this)||i,o.parser=m)}return i})(),o}async load(e,s){this._parsersValidated||this._validateParsers();let o=0;const i={},r=xo(e),l=bt(e,m=>({alias:[m],src:m,data:{}})),c=l.length,v=l.map(async m=>{const u=Me.toAbsolute(m.src);if(!i[m.src])try{this.promiseCache[u]||(this.promiseCache[u]=this._getLoadPromiseAndParser(u,m)),i[m.src]=await this.promiseCache[u].promise,s&&s(++o/c)}catch(b){throw delete this.promiseCache[u],delete i[m.src],new Error(`[Loader.load] Failed to load ${u}.
${b}`)}});return await Promise.all(v),r?i[l[0].src]:i}async unload(e){const o=bt(e,i=>({alias:[i],src:i})).map(async i=>{var c,v;const r=Me.toAbsolute(i.src),l=this.promiseCache[r];if(l){const m=await l.promise;delete this.promiseCache[r],await((v=(c=l.parser)==null?void 0:c.unload)==null?void 0:v.call(c,m,i,this))}});await Promise.all(o)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&Pe(`[Assets] loadParser name conflict "${s.name}"`):Pe("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function st(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const Jr=".json",Zr="application/json",qr={extension:{type:O.LoadParser,priority:et.Low},name:"loadJson",test(t){return st(t,Zr)||tt(t,Jr)},async load(t){return await(await ne.get().fetch(t)).json()}},en=".txt",tn="text/plain",sn={name:"loadTxt",extension:{type:O.LoadParser,priority:et.Low,name:"loadTxt"},test(t){return st(t,tn)||tt(t,en)},async load(t){return await(await ne.get().fetch(t)).text()}},an=["normal","bold","100","200","300","400","500","600","700","800","900"],on=[".ttf",".otf",".woff",".woff2"],rn=["font/ttf","font/otf","font/woff","font/woff2"],nn=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function ln(t){const e=Me.extname(t),i=Me.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(c=>c.charAt(0).toUpperCase()+c.slice(1));let r=i.length>0;for(const c of i)if(!c.match(nn)){r=!1;break}let l=i.join(" ");return r||(l=`"${l.replace(/[\\"]/g,"\\$&")}"`),l}const cn=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function dn(t){return cn.test(t)?t:encodeURI(t)}const pn={extension:{type:O.LoadParser,priority:et.Low},name:"loadWebFont",test(t){return st(t,rn)||tt(t,on)},async load(t,e){var o,i,r;const s=ne.get().getFontFaceSet();if(s){const l=[],c=((o=e.data)==null?void 0:o.family)??ln(t),v=((r=(i=e.data)==null?void 0:i.weights)==null?void 0:r.filter(u=>an.includes(u)))??["normal"],m=e.data??{};for(let u=0;u<v.length;u++){const b=v[u],h=new FontFace(c,`url(${dn(t)})`,{...m,weight:b});await h.load(),s.add(h),l.push(h)}return $e.set(`${c}-and-url`,{url:t,fontFaces:l}),l.length===1?l[0]:l}return Pe("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{$e.remove(`${e.family}-and-url`),ne.get().getFontFaceSet().delete(e)})}};function na(t,e=1){var o;const s=(o=Gt.RETINA_PREFIX)==null?void 0:o.exec(t);return s?parseFloat(s[1]):e}function la(t,e,s){t.label=s,t._sourceOrigin=s;const o=new Fe({source:t,label:s}),i=()=>{delete e.promiseCache[s],$e.has(s)&&$e.remove(s)};return o.source.once("destroy",()=>{e.promiseCache[s]&&(Pe("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),i())}),o.once("destroy",()=>{t.destroyed||(Pe("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),i())}),o}const un=".svg",fn="image/svg+xml",gn={extension:{type:O.LoadParser,priority:et.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return st(t,fn)||tt(t,un)},async load(t,e,s){var o;return((o=e.data)==null?void 0:o.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?vn(t):hn(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function hn(t,e,s,o){var H,R,N;const r=await(await ne.get().fetch(t)).blob(),l=URL.createObjectURL(r),c=new Image;c.src=l,c.crossOrigin=o,await c.decode(),URL.revokeObjectURL(l);const v=document.createElement("canvas"),m=v.getContext("2d"),u=((H=e.data)==null?void 0:H.resolution)||na(t),b=((R=e.data)==null?void 0:R.width)??c.width,h=((N=e.data)==null?void 0:N.height)??c.height;v.width=b*u,v.height=h*u,m.drawImage(c,0,0,b*u,h*u);const{parseAsGraphicsContext:j,...L}=e.data??{},se=new _o({resource:v,alphaMode:"premultiply-alpha-on-upload",resolution:u,...L});return la(se,s,t)}async function vn(t){const s=await(await ne.get().fetch(t)).text(),o=new xr;return o.svg(s),o}const mn=`(function () {
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
`;let Ze=null,oa=class{constructor(){Ze||(Ze=URL.createObjectURL(new Blob([mn],{type:"application/javascript"}))),this.worker=new Worker(Ze)}};oa.revokeObjectURL=function(){Ze&&(URL.revokeObjectURL(Ze),Ze=null)};const bn=`(function () {
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
`;let qe=null;class Io{constructor(){qe||(qe=URL.createObjectURL(new Blob([bn],{type:"application/javascript"}))),this.worker=new Worker(qe)}}Io.revokeObjectURL=function(){qe&&(URL.revokeObjectURL(qe),qe=null)};let po=0,Zs;class yn{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new oa;s.addEventListener("message",o=>{s.terminate(),oa.revokeObjectURL(),e(o.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var o;return this._run("loadImageBitmap",[e,(o=s==null?void 0:s.data)==null?void 0:o.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Zs===void 0&&(Zs=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Zs&&(this._createdWorkers++,e=new Io().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const o=new Promise((i,r)=>{this._queue.push({id:e,arguments:s,resolve:i,reject:r})});return this._next(),o}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),o=s.id;this._resolveHash[po]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:po++,id:o})}}const uo=new yn,xn=[".jpeg",".jpg",".png",".webp",".avif"],_n=["image/jpeg","image/png","image/webp","image/avif"];async function wn(t,e){var i;const s=await ne.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const o=await s.blob();return((i=e==null?void 0:e.data)==null?void 0:i.alphaMode)==="premultiplied-alpha"?createImageBitmap(o,{premultiplyAlpha:"none"}):createImageBitmap(o)}const Oo={name:"loadTextures",extension:{type:O.LoadParser,priority:et.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return st(t,_n)||tt(t,xn)},async load(t,e,s){var r;let o=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await uo.isImageBitmapSupported()?o=await uo.loadImageBitmap(t,e):o=await wn(t,e):o=await new Promise((l,c)=>{o=new Image,o.crossOrigin=this.config.crossOrigin,o.src=t,o.complete?l(o):(o.onload=()=>{l(o)},o.onerror=c)});const i=new _o({resource:o,alphaMode:"premultiply-alpha-on-upload",resolution:((r=e.data)==null?void 0:r.resolution)||na(t),...e.data});return la(i,s,t)},unload(t){t.destroy(!0)}},Co=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],An=Co.map(t=>`video/${t.substring(1)}`);function kn(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=Sn(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function $n(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",o),t.addEventListener("error",i),t.load();function o(){r(),e()}function i(l){r(),s(l)}function r(){t.removeEventListener("canplaythrough",o),t.removeEventListener("error",i)}})}function Sn(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const En={name:"loadVideo",extension:{type:O.LoadParser,name:"loadVideo"},test(t){const e=st(t,An),s=tt(t,Co);return e||s},async load(t,e,s){var v,m;const o={...Xs.defaultOptions,resolution:((v=e.data)==null?void 0:v.resolution)||na(t),alphaMode:((m=e.data)==null?void 0:m.alphaMode)||await br(),...e.data},i=document.createElement("video"),r={preload:o.autoLoad!==!1?"auto":void 0,"webkit-playsinline":o.playsinline!==!1?"":void 0,playsinline:o.playsinline!==!1?"":void 0,muted:o.muted===!0?"":void 0,loop:o.loop===!0?"":void 0,autoplay:o.autoPlay!==!1?"":void 0};Object.keys(r).forEach(u=>{const b=r[u];b!==void 0&&i.setAttribute(u,b)}),o.muted===!0&&(i.muted=!0),kn(i,t,o.crossorigin);const l=document.createElement("source");let c;if(t.startsWith("data:"))c=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const u=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();c=Xs.MIME_TYPES[u]||`video/${u}`}return l.src=t,c&&(l.type=c),new Promise(u=>{const b=async()=>{const h=new Xs({...o,resource:i});i.removeEventListener("canplay",b),e.data.preload&&await $n(i),u(la(h,s,t))};i.addEventListener("canplay",b),i.appendChild(l)})},unload(t){t.destroy(!0)}},Bo={extension:{type:O.ResolveParser,name:"resolveTexture"},test:Oo.test,parse:t=>{var e;return{resolution:parseFloat(((e=Gt.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},jn={extension:{type:O.ResolveParser,priority:-2,name:"resolveJson"},test:t=>Gt.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:Bo.parse};class Tn{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Gt,this.loader=new Qr,this.cache=$e,this._backgroundLoader=new Nr(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var r,l;if(this._initialized){Pe("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let c=e.manifest;typeof c=="string"&&(c=await this.load(c)),this.resolver.addManifest(c)}const s=((r=e.texturePreference)==null?void 0:r.resolution)??1,o=typeof s=="number"?[s]:s,i=await this._detectFormats({preferredFormats:(l=e.texturePreference)==null?void 0:l.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:i,resolution:o}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const o=xo(e),i=bt(e).map(c=>{if(typeof c!="string"){const v=this.resolver.getAlias(c);return v.some(m=>!this.resolver.hasKey(m))&&this.add(c),Array.isArray(v)?v[0]:v}return this.resolver.hasKey(c)||this.add({alias:c,src:c}),c}),r=this.resolver.resolve(i),l=await this._mapLoadToResolve(r,s);return o?l[i[0]]:l}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let o=!1;typeof e=="string"&&(o=!0,e=[e]);const i=this.resolver.resolveBundle(e),r={},l=Object.keys(i);let c=0,v=0;const m=()=>{s==null||s(++c/v)},u=l.map(b=>{const h=i[b];return v+=Object.keys(h).length,this._mapLoadToResolve(h,m).then(j=>{r[b]=j})});return await Promise.all(u),o?r[e[0]]:r}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(o=>{this._backgroundLoader.add(Object.values(o))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return $e.get(e);const s={};for(let o=0;o<e.length;o++)s[o]=$e.get(e[o]);return s}async _mapLoadToResolve(e,s){const o=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const i=await this.loader.load(o,s);this._backgroundLoader.active=!0;const r={};return o.forEach(l=>{const c=i[l.src],v=[l.src];l.alias&&v.push(...l.alias),v.forEach(m=>{r[m]=c}),$e.set(v,c)}),r}async unload(e){this._initialized||await this.init();const s=bt(e).map(i=>typeof i!="string"?i.src:i),o=this.resolver.resolve(s);await this._unloadFromResolved(o)}async unloadBundle(e){this._initialized||await this.init(),e=bt(e);const s=this.resolver.resolveBundle(e),o=Object.keys(s).map(i=>this._unloadFromResolved(s[i]));await Promise.all(o)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(o=>{$e.remove(o.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const o of e.detections)e.skipDetections||await o.test()?s=await o.add(s):e.skipDetections||(s=await o.remove(s));return s=s.filter((o,i)=>s.indexOf(o)===i),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(o=>o in e).forEach(o=>{s.config[o]=e[o]})})}}const Je=new Tn;Ie.handleByList(O.LoadParser,Je.loader.parsers).handleByList(O.ResolveParser,Je.resolver.parsers).handleByList(O.CacheParser,Je.cache.parsers).handleByList(O.DetectionParser,Je.detections);Ie.add(Dr,Gr,Ur,Kr,Vr,Yr,Xr,qr,sn,pn,gn,Oo,En,zr,Wr,Bo,jn);const fo={loader:O.LoadParser,resolver:O.ResolveParser,cache:O.CacheParser,detection:O.DetectionParser};Ie.handle(O.Asset,t=>{const e=t.ref;Object.entries(fo).filter(([s])=>!!e[s]).forEach(([s,o])=>Ie.add(Object.assign(e[s],{extension:e[s].extension??o})))},t=>{const e=t.ref;Object.keys(fo).filter(s=>!!e[s]).forEach(s=>Ie.remove(e[s]))});var Ln=Wi('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-tijp0o"><\/script><!---->',1),Rn=q('<p style="color: red;" class="svelte-tijp0o"><strong class="svelte-tijp0o">Error:</strong> </p>'),Pn=q('<div class="svelte-tijp0o"> </div>'),In=q('<details class="svelte-tijp0o"><summary class="svelte-tijp0o"> </summary> <!></details>'),On=q(`<div style="
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
  " class="svelte-tijp0o"><h3 class="svelte-tijp0o">🎰 Oma-peli Debug</h3> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Status:</strong> </p> <!> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Base:</strong> </p> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">BG URL:</strong> </p> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Sample:</strong> </p> <!></div>`),Cn=q('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-tijp0o"> </div>'),Bn=q('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-tijp0o"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-tijp0o"> </span></div>'),Fn=q(`<div style="
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
      " class="svelte-tijp0o">Jatka pelaamista</button></div>`),Mn=q(`<div class="svelte-tijp0o"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-tijp0o">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-tijp0o">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-tijp0o"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-tijp0o"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-tijp0o">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-tijp0o">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-tijp0o">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-tijp0o">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-tijp0o">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-tijp0o">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-tijp0o"> <span style="color: #ffd700;" class="svelte-tijp0o">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-tijp0o">Sulje</button></div>`),Wn=q(`<div style="
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
        " class="svelte-tijp0o">JATKA PERUSPELIIN</button></div></div>`),zn=q('<div class="svelte-tijp0o"><div class="svelte-tijp0o">SPIN SPEED</div> <button class="svelte-tijp0o">🐌 SLOW</button> <button class="svelte-tijp0o">⚡ MEDIUM</button> <button class="svelte-tijp0o">🚀 FAST</button></div>'),Nn=q(`<div style="
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
        " class="svelte-tijp0o">⏹ STOP</button></div>`),Dn=q(`<div style="
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
          " class="svelte-tijp0o">Cancel</button></div>`),Un=q(`<button style="
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
      " class="svelte-tijp0o">🔄 AUTOPLAY</button> <!>`,1),Gn=q(`<!> <!> <!> <!> <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
" class="svelte-tijp0o"><div class="svelte-tijp0o"><div class="svelte-tijp0o"><button class="svelte-tijp0o">💰 PAYTABLE</button> <button class="svelte-tijp0o"></button> <div class="control-panel-mobile svelte-tijp0o"><img alt="Left End" class="svelte-tijp0o"> <div class="svelte-tijp0o"><div class="svelte-tijp0o"><div class="svelte-tijp0o">BET</div> <div class="svelte-tijp0o"><button title="Decrease Bet" class="svelte-tijp0o"></button> <div class="svelte-tijp0o"> </div> <button title="Increase Bet" class="svelte-tijp0o"></button></div></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><div class="svelte-tijp0o">BALANCE</div> <div class="svelte-tijp0o"> </div></div> <img alt="Divider" class="svelte-tijp0o"> <div style="position: relative; display: flex; align-items: center; justify-content: center; flex-grow: 0.5;" class="svelte-tijp0o"><div><button title="SPIN" class="svelte-tijp0o"></button></div></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><button class="svelte-tijp0o"></button> <img alt="Status bar" class="svelte-tijp0o"></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><button class="svelte-tijp0o"></button> <div class="svelte-tijp0o"> </div> <!></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><button title="Fast Play" class="svelte-tijp0o"></button> <img alt="Status bar" class="svelte-tijp0o"></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><div class="svelte-tijp0o">WIN</div> <div class="svelte-tijp0o"> </div></div> <img alt="Divider" class="svelte-tijp0o"> <button title="Menu" class="svelte-tijp0o"></button></div> <img alt="Right End" class="svelte-tijp0o"></div></div>  <button <VinylWinAnimation="" class="svelte-tijp0o"></button>  <div class="debug-panel svelte-tijp0o"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-tijp0o">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-tijp0o"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Rounds:</span> <span style="color: #fff;" class="svelte-tijp0o"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Wagered:</span> <span style="color: #ff6666;" class="svelte-tijp0o"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Won:</span> <span style="color: #66ff66;" class="svelte-tijp0o"> </span></div> <div style="
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
  " class="svelte-tijp0o"><button class="svelte-tijp0o"> </button> <button class="svelte-tijp0o">Clear Win Log</button> <button class="svelte-tijp0o"> </button> <button class="svelte-tijp0o">🎰 Test Free Spins</button></div></div> <div class="debug-panel svelte-tijp0o"><!></div> <button class="debug-panel svelte-tijp0o"> </button></div></div>`,1);function Hn(t,e){mo(e,!0);const s="1.3.1",o=13,i=1445,r=1e3,l=1.75,c=-30,v=-10,m=160,u=0,b=750,h=80,j=250,L=0,se=50,H=.5,R=40,N=0,ye=-40,Se=1,me="height",xe=Math.round(100*l),_e=Math.round(xe*(700/760)),Vt=_e+10,Yt=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],da=typeof window<"u"&&window.location.hostname.includes("github.io"),ee=da?"/web-sdk/oma-peli/symbols":`${be}/symbols`,V=da?"/web-sdk/oma-peli/controls":`${be}/controls`,Xt={a:`${ee}/Blue_hotrod.jpg`,b:`${ee}/Blue_jacket.jpg`,c:`${ee}/Blue_rollers.jpg`,d:`${ee}/Blue_speakers.jpg`,e:`${ee}/Premium_blonde.jpg`,f:`${ee}/Premium_brunette.jpg`,g:`${ee}/Premium_rocker.jpg`,h:`${ee}/New_Wild.jpg`,i:`${ee}/Red_burger.jpg`,j:`${ee}/Red_fries.jpg`,k:`${ee}/Red_milkshake.jpg`,l:`${ee}/Scatter.jpg`,emptyslot:`${ee}/Emptyslot.jpg`},Kt=`${ee}/bg_base.jpg`,pa=`${ee}/ReelFrames.png`,ua=`${ee}/RockABillyReels_logo.png`,Fo={spin:`${be}/sounds/spin.mp3`,stop:`${be}/sounds/stop.mp3`,win:`${be}/sounds/win.mp3`};let we=T(!0),Qt={},D=null,le=null,Jt=null,Zt=null,ue=T(!0),Mo=T(!1),yt=T(!1),qt=T(945),es=null;const Wo={fast:3,medium:7,slow:18};let Y=T("medium"),We=T(!1),fa=T(Math.floor(Math.random()*20)+1);const xt={background:()=>`${be}/music/rockabilly reels loop ${a(fa)}.mp3`,freeSpins:`${be}/music/rockabilly-loop_long.mp3`,drumHit:`${be}/music/drum-hit.mp3`,winTheme:`${be}/music/win-stinger.mp3`};function ga(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(ga,500);return}const n=window.Howl;try{D=new n({src:[xt.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+a(fa)+")"),y(Mo,!0)},onloaderror:(p,$)=>{console.warn("⚠️ Background music not found:",$)}}),le=new n({src:[xt.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(p,$)=>console.warn("⚠️ Free spins music not found:",$)}),Jt=new n({src:[xt.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Zt=new n({src:[xt.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(p){console.error("Failed to initialize music system:",p)}}function ha(){const n=a(G)?le:D;n&&a(ue)&&!n.playing()&&(n.play(),console.log("🎵 "+(a(G)?"Free spins":"Background")+" music started"))}function zo(){D&&D.playing()&&(D.fade(D.volume(),0,500),setTimeout(()=>D.stop(),500)),le&&le.playing()&&(le.fade(le.volume(),0,500),setTimeout(()=>le.stop(),500))}function ts(){D&&D.playing()&&(D.fade(D.volume(),0,500),setTimeout(()=>D.stop(),500)),le&&le.playing()&&(le.fade(le.volume(),0,500),setTimeout(()=>le.stop(),500)),setTimeout(()=>{a(ue)&&ha()},600)}function No(){if(D&&D.playing()){const n=D.volume();D.fade(n,0,1e3),setTimeout(()=>{D.stop(),D.volume(.3)},1e3)}}let ss=T(!1);function Do(){y(ss,!1),setTimeout(()=>{y(ss,!0)},10)}let ze=null;function Uo(){y(ue,!a(ue)),a(ue)?ha():zo()}function Go(){Jt&&a(ue)&&a(we)&&Jt.play()}function Ho(){Zt&&a(ue)&&a(we)&&Zt.play()}let _t=null,Ne=null,at=null,ot=null,it=T("Initializing..."),De=T(""),fe=[],Ee=T(1e3),te=T(10),va=T(0);const ma=1,ba=100;let ce=T(!1),Ue=T(0),Oe=T(!1),wt=T(!1),Vo=T(0),Ce=!1,Ae=null,as=!1,Ge=T(0),He=T(0),rt=T(0),os=T(0),is=Vs(()=>a(He)>0?(a(rt)/a(He)*100).toFixed(2):"0.00"),rs=Vs(()=>a(Ge)>0?(a(os)/a(Ge)*100).toFixed(2):"0.00"),G=T(!1),je=T(0),Be=T(0),At=T(0),ns=T(0),kt=T(0),ls=T(0),Yo=Vs(()=>a(kt)>0?(a(ls)/a(kt)*100).toFixed(2):"0.00"),de=T(oe([]));function Xo(n,p,$){const g=new Date().toLocaleString("fi-FI");let _=`
${"=".repeat(60)}
`;_+=`ROUND #${n} - ${g}
`,_+=`Mode: ${a(G)?"FREE SPINS":"BASE GAME"}
`,_+=`${"=".repeat(60)}
`,p.forEach((k,S)=>{_+=`
Win ${S+1}:
`,_+=`  Symbol: ${k.symbol} (${wa[k.symbol]})
`,_+=`  Count: ${k.count} symbols
`,_+=`  Multiplier: ${k.multiplier}x
`,_+=`  Payout: ${k.payout.toFixed(2)}
`,_+=`  Positions: [${k.positions.join(", ")}]
`}),_+=`
${"─".repeat(60)}
`,_+=`TOTAL WIN: ${$.toFixed(2)}
`,_+=`${"=".repeat(60)}
`,a(de).push(_)}function Ko(){const n=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${a(de).join(`
`)}`,p=new Blob([n],{type:"text/plain"}),$=URL.createObjectURL(p),g=document.createElement("a");g.href=$,g.download=`win-log-${Date.now()}.txt`,g.click(),URL.revokeObjectURL($)}function Qo(){y(de,oe([]))}function Jo(){a(G)||(y(G,!0),y(je,10),y(Be,0),ke(At),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),ts())}const Zo={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},qo={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function ya(n){if(n===6)return Math.random()<.55?"h":"emptyslot";const p=a(G)?qo:Zo,$=Math.random();let g=0;const _=Yt.filter(S=>S!=="h"),k=_.reduce((S,B)=>S+p[B],0);for(const S of _)if(g+=p[S]/k,$<g)return S;return"f"}function xa(){const n=[];for(let p=0;p<o;p++){const $=ya(p);n.push($),ke(kt),$==="emptyslot"&&ke(ls)}return n}function _a(n){return n<3?{col:0,row:n}:n<6?{col:1,row:n-3}:n===6?{col:2,row:0}:n<10?{col:3,row:n-7}:{col:4,row:n-10}}function nt(n,p){return n===0?p:n===1?3+p:n===2?6:n===3?7+p:n===4?10+p:-1}function ei(){if(a(G)){const n=Math.random();return n<.7?3:n<.92?5:10}else{const n=Math.random();return n<.7?1:n<.92?2:3}}const ti={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function si(){var J;const n=[],p=[];for(let E=0;E<o;E++)lt[E]==="l"&&p.push(E);if(p.length>=5){const E=p.length;y(je,a(je)+E),a(G)?console.log(`🎰 FREE SPINS RETRIGGERED! +${E} FREE SPINS! Total: ${a(je)}`):(y(G,!0),y(Be,0),ke(At),console.log(`🎰 FREE SPINS TRIGGERED! ${p.length} scatters = ${E} FREE SPINS!`),ts()),n.push({symbol:"l",count:p.length,payout:0,positions:p,multiplier:1})}const $=[];for(let E=0;E<3;E++)for(let P=0;P<3;P++)for(let C=0;C<1;C++)for(let F=0;F<3;F++)for(let W=0;W<3;W++){const M=[nt(0,E),nt(1,P),nt(2,C),nt(3,F),nt(4,W)];$.push(M)}console.log(`Generated ${$.length} possible paths (should be 81)`);const g=[];for(const E of $){const P=E.map(M=>lt[M]);if(P[0]==="emptyslot"||P[0]==="l")continue;let C=null;for(let M=0;M<P.length;M++)if(P[M]!=="h"&&P[M]!=="emptyslot"&&P[M]!=="l"){C=P[M];break}if(!C)continue;let F=0;const W=new Set;for(let M=0;M<E.length;M++){const Le=E[M],{col:Qe}=_a(Le),ie=P[M];(ie===C||ie==="h")&&W.add(Qe)}for(let M=0;M<5&&W.has(M);M++)F++;if(F>=3){const Le=E[0]%3;g.push({symbol:C,length:F,path:E.slice(0,F),startRow:Le})}}const _=[],k=new Map;for(const E of g){const P=`${E.symbol}-${E.path.join(",")}`;k.has(P)||k.set(P,[]),k.get(P).push(E)}for(const[E,P]of k.entries()){const C=Math.max(...P.map(W=>W.length)),F=P.find(W=>W.length===C);F&&_.push(F)}const S=[],B=new Map;for(const E of _)B.has(E.symbol)||B.set(E.symbol,[]),B.get(E.symbol).push(E);const X=[];for(const[E,P]of B.entries()){const C=Math.max(...P.map(W=>W.length)),F=P.filter(W=>W.length===C);X.push(...F)}const K=new Map;for(const E of X){const P=`${E.symbol}-${E.length}`;K.has(P)||K.set(P,[]),K.get(P).push(E)}const Q=X.length>0?ei():1;for(const[E,P]of K.entries()){const C=P[0],F=(J=ti[C.symbol])==null?void 0:J[C.length];if(F!==void 0&&F>0){const W=new Map;for(const ie of P)for(let ae=0;ae<ie.length;ae++)W.has(ae)||W.set(ae,new Set),W.get(ae).add(ie.path[ae]);let M=1;for(let ie=0;ie<C.length;ie++){const ae=W.get(ie);M*=ae?ae.size:1}const Le=F*a(te)*M*Q;console.log(`  ${C.length}x${C.symbol}: ${M} ways × ${F}x × ${a(te)} bet × ${Q} mult = ${Le}`);const Qe=new Set;for(const ie of P)ie.path.forEach(ae=>Qe.add(ae));S.push({symbol:C.symbol,count:C.length,payout:Le,positions:Array.from(Qe),multiplier:Q})}}return n.push(...S),n}let ge=T(0),Ve=T(oe([])),Te=T(!1),Ye=T(!1),cs=T(!1),ds=T(0);const wa={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function ps(n){if(!a(we)||!Qt[n])return;const p=Qt[n];p.currentTime=0,p.play().catch($=>{console.warn("Äänen toisto epäonnistui:",n,$)})}function ai(n){ct.forEach(p=>U.stage.removeChild(p)),ct=[],n.forEach(p=>{p.positions.forEach($=>{const g=Xe[$],_=new to().rect(0,0,xe,_e).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});_.x=g.container.x,_.y=g.container.y,U.stage.addChild(_),ct.push(_);let k=0,S=1;const B=.05;U.ticker.add(()=>{k+=S*B,k>=.4&&(S=-1),k<=0&&(S=1),_.alpha=.5+k})})})}function us(){ct.forEach(n=>U.stage.removeChild(n)),ct=[]}let lt=xa(),fs,U,Xe=[],ct=[];class oi{constructor(p,$){he(this,"index");he(this,"container");he(this,"offset",0);he(this,"speed",0);he(this,"targetSpeed",30);he(this,"state","idle");he(this,"stopDelay",0);he(this,"bounceOffset",0);he(this,"bounceSpeed",0);he(this,"bounceFrames",0);this.index=p,this.container=$}start(p){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=p}startSynchronized(p){const $=Wo[a(Y)],g=60+p*$;this.start(g)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const p=a(Y)==="slow"?.88:a(Y)==="medium"?.92:.95;this.speed*=p,this.speed<2.5&&(this.state="bouncing",this.speed=0,this.offset=0,this.bounceOffset=0,this.bounceSpeed=8,ps("stop"),Go())}this.state==="bouncing"&&(this.bounceSpeed*=.85,this.bounceOffset+=this.bounceSpeed,Math.abs(this.bounceSpeed)<.3&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=Vt&&(this.offset=0,lt[this.index]=ya(this.index)))}}draw(){const p=this.container;p.removeChildren();const $=lt[this.index];if(!$||!_t||!_t[$])return;const g=_t[$];if(!g)return;const _=this.offset+this.bounceOffset,k=new Nt(g);k.width=xe,k.height=_e,k.x=0,k.y=_,p.addChild(k)}}let d=T(1);bo(async()=>{U=new Lo,await U.init({width:i,height:r,background:"#001a33"}),fs.appendChild(U.canvas);const n=()=>{const g=window.innerWidth,_=window.innerHeight,k=g/i,S=_/r,B=Math.min(k,S,1);y(d,oe(B)),U.stage.scale.set(B),U.renderer.resize(i,r)};n(),window.addEventListener("resize",n);const p={};try{y(it,"Loading background and UI images..."),fe.push(`Loading background: ${Kt}`),fe.push(`Loading reel frames: ${pa}`),fe.push(`Loading logo: ${ua}`),await Je.load([{alias:"background",src:Kt},{alias:"reelframes",src:pa},{alias:"logo",src:ua}]),Ne=Fe.from("background"),at=Fe.from("reelframes"),ot=Fe.from("logo"),console.log("✅ Background texture created:",Ne.width,"x",Ne.height),console.log("✅ Reel frames texture created:",at.width,"x",at.height),console.log("✅ Logo texture created:",ot.width,"x",ot.height),fe.push("✅ All UI images loaded"),y(it,"Loading symbols...");const g=[];for(const _ of Yt)g.push({alias:_,src:Xt[_]});await Je.load(g);for(const _ of Yt){const k=Xt[_];fe.push(`Loading symbol ${_}: ${k}`);try{const S=Fe.from(_);p[_]=S,console.log(`✅ Symbol ${_} loaded:`,S.width,"x",S.height),fe.push(`✅ Symbol ${_} loaded`)}catch(S){const B=`❌ Failed to load symbol ${_} from ${k}: ${S}`;throw fe.push(B),console.error(B),new Error(B)}}_t=p,y(it,"Assets loaded successfully!")}catch(g){y(De,`Asset loading failed: ${g}`),fe.push(a(De)),console.error(a(De));return}console.log("Ladataan ääniefektit...");for(const[g,_]of Object.entries(Fo)){const k=new Audio;k.src=_,k.preload="auto",k.volume=.7,k.load(),k.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${_} (käytetään hiljaista placeholderia)`)}),Qt[g]=k}if(console.log("Taustakuva ladattu, tekstuuri:",Ne),Ne){const g=new Nt(Ne);U.renderer.width/U.renderer.height;const _=g.texture.width/g.texture.height;let k;k=U.renderer.height/g.texture.height,k*=Se,g.scale.set(k),g.x=(U.renderer.width-g.width)/2,g.y=(U.renderer.height-g.height)/2+ye,U.stage.addChild(g),console.log("Taustakuva lisätty:",me,"mode, size:",g.width.toFixed(0),"x",g.height.toFixed(0),"image aspect:",_.toFixed(2),"scale:",k.toFixed(2),"pos:",g.x.toFixed(0),g.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(g=>({x:g.x+c,y:g.y+v})),Xe=[];for(let g=0;g<o;g++){const _=_a(g),k=_.col,S=_.row,B=300+k*(xe+20),X=250+S*(_e+15),K=g===6?B+u:B,Q=g===6?X+m:X,J=new ia;J.x=K+c,J.y=Q+v;const E=new to().rect(0,0,xe,_e).fill(16777215);E.x=J.x,E.y=J.y,J.mask=E,U.stage.addChild(E),U.stage.addChild(J),Xe.push(new oi(g,J))}if(at){const g=new Nt(at);g.scale.set(1),g.x=250,g.y=200,U.stage.addChild(g),es=g,y(qt,oe(g.width)),console.log("Reel frames lisätty:",g.width.toFixed(0),"x",g.height.toFixed(0)),console.log("Control panel leveys päivitetty:",a(qt).toFixed(0))}if(ot){const g=new Nt(ot);g.scale.set(H),g.x=(U.renderer.width-g.width)/2+R,g.y=N,U.stage.addChild(g),console.log("Logo lisätty päällimmäiseen layeriin:",g.width.toFixed(0),"x",g.height.toFixed(0))}ga(),U.ticker.add(ii)});function ii(){for(const n of Xe)n.update(),n.draw();if(!a(Te)&&!as&&Xe.every(n=>n.state==="stopped")){as=!0,No();const n=si();console.log(`Checking wins, found ${n.length} wins`),n.length>0?(y(Ve,oe(n)),y(ge,oe(n.reduce((p,$)=>p+$.payout,0))),Xo(a(Ge),n,a(ge)),ri(a(ge)),y(Te,!0),y(Vo,oe(Date.now())),console.log(`🎉 VOITTO! ${a(ge)} pistettä! Uusi saldo: ${a(Ee)}`),console.log(`isShowingWin set to: ${a(Te)}, totalWin: ${a(ge)}`),n.forEach(p=>{const $=p.multiplier?` (${p.multiplier}x multiplier)`:"";console.log(`${p.count}x ${p.symbol} = ${p.payout} pistettä${$}`)}),ai(n),ps("win"),a(ce)&&!Ce&&(Ce=!0,Ae=window.setTimeout(()=>{a(Te)&&a(ce)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),y(Te,!1),us()),Ae=window.setTimeout(()=>{Ce=!1,gs()},200)},1500))):(console.log("No wins found this spin"),a(ce)&&!Ce&&(Ce=!0,Ae=window.setTimeout(()=>{Ce=!1,gs()},1e3))),a(G)&&a(je)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${a(Be)}`),setTimeout(()=>{y(ds,oe(a(Be))),y(cs,!0)},2e3))}}function Aa(){if(!a(G)&&D&&a(ue)&&!D.playing()&&(D.play(),console.log("🎵 Background music started on first spin")),Do(),a(G)&&a(je)>0)ke(je,-1),ke(ns),console.log(`🎰 FREE SPIN! Remaining: ${a(je)}`);else if(!a(G)){if(a(Ee)<a(te)){alert(`Not enough credits! Balance: ${a(Ee)}, Bet: ${a(te)}`),pt();return}y(Ee,a(Ee)-a(te)),ke(Ge),y(He,a(He)+a(te))}Ae!==null&&(clearTimeout(Ae),Ae=null),y(Ve,oe([])),y(ge,0),y(Te,!1),as=!1,us(),lt=xa(),Xe.forEach((n,p)=>{n.startSynchronized(p)}),ps("spin")}function ri(n){if(y(Ee,a(Ee)+n),y(rt,a(rt)+n),y(va,oe(n)),a(G)&&y(Be,a(Be)+n),n>0){ke(os);const p=n/a(te);p>=10&&Ho(),ze&&(p>=50?ze.show():p>=20?setTimeout(()=>ze.show(),200):p>=10&&setTimeout(()=>ze.show(),400))}}function ni(){a(te)<ba&&y(te,oe(Math.min(a(te)+1,ba)))}function li(){a(te)>ma&&y(te,oe(Math.max(a(te)-1,ma)))}function dt(n){y(ce,!0),y(Ue,oe(n)),y(Oe,!1),gs()}function pt(){y(ce,!1),y(Ue,0),Ce=!1,Ae!==null&&(clearTimeout(Ae),Ae=null)}function gs(){if(!a(ce)||a(Ue)<=0){pt();return}console.log(`Autoplay: Starting spin ${a(Ue)} rounds left`),Aa(),ke(Ue,-1)}function ci(){confirm("Reset all statistics?")&&(y(Ge,0),y(He,0),y(rt,0),y(os,0),y(At,0),y(ns,0),y(kt,0),y(ls,0))}var ka=Gn();fr(n=>{var p=Ln();f(mt(p)),Z(n,p)});var $a=mt(ka);{var di=n=>{var p=On(),$=f(w(p),2),g=f(w($));A($);var _=f($,2);{var k=C=>{var F=Rn(),W=f(w(F));A(F),pe(()=>z(W,` ${a(De)??""}`)),Z(C,F)};re(_,C=>{a(De)&&C(k)})}var S=f(_,2),B=f(w(S));B.nodeValue=` ${be??""}`,A(S);var X=f(S,2),K=f(w(X));K.nodeValue=` ${Kt??""}`,A(X);var Q=f(X,2),J=f(w(Q));A(Q);var E=f(Q,2);{var P=C=>{var F=In(),W=w(F),M=w(W);A(W);var Le=f(W,2);ao(Le,17,()=>fe,so,(Qe,ie)=>{var ae=Pn(),Oi=w(ae,!0);A(ae),pe(()=>z(Oi,a(ie))),Z(Qe,ae)}),A(F),pe(()=>z(M,`Log (${fe.length??""})`)),Z(C,F)};re(E,C=>{fe.length>0&&C(P)})}A(p),pe(()=>{z(g,` ${a(it)??""}`),z(J,` ${Xt.a??""}`)}),Z(n,p)};re($a,n=>{(a(it)!=="Assets loaded successfully!"||a(De))&&n(di)})}var Sa=f($a,2);{var pi=n=>{var p=Fn(),$=f(w(p),2),g=w($);A($);var _=f($,2);ao(_,17,()=>a(Ve),so,(X,K)=>{var Q=Cn(),J=w(Q);A(Q),pe(E=>z(J,`${a(K).count??""} × ${wa[a(K).symbol]??""} = ${E??""} pistettä`),[()=>a(K).payout.toFixed(2)]),Z(X,Q)});var k=f(_,2);{var S=X=>{var K=Bn(),Q=w(K),J=w(Q);A(Q),A(K),pe(()=>z(J,`✨ ${a(Ve)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),Z(X,K)};re(k,X=>{a(Ve).length>0&&a(Ve)[0].multiplier>1&&X(S)})}var B=f(k,2);A(p),pe(()=>z(g,`${a(ge)??""} pistettä`)),I("click",B,()=>{y(Te,!1),us(),console.log("Win popup closed, ready for next spin")}),Z(n,p)};re(Sa,n=>{a(ge)>0&&a(Te)&&n(pi)})}var Ea=f(Sa,2);{var ui=n=>{var p=Mn(),$=f(w(p),8);A(p),pe(g=>x(p,"style",`
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
    max-height: ${g??""}px;
    overflow-y: auto;
    font-size: ${a(d)??""}em;
  `),[()=>Math.min(r*a(d)*.8,80*window.innerHeight/100)]),I("click",$,()=>{y(Ye,!1)}),Z(n,p)};re(Ea,n=>{a(Ye)&&n(ui)})}var ja=f(Ea,2);{var fi=n=>{var p=Wn(),$=w(p),g=f(w($),4),_=w(g,!0);A(g);var k=f(g,2);A($),A(p),pe(S=>z(_,S),[()=>a(ds).toFixed(2)]),I("click",k,()=>{y(cs,!1),y(G,!1),y(Be,0),y(ds,0),ts()}),I("mouseenter",k,S=>{S.currentTarget.style.transform="scale(1.05)",S.currentTarget.style.boxShadow="0 6px 20px rgba(255, 215, 0, 0.6)"}),I("mouseleave",k,S=>{S.currentTarget.style.transform="scale(1)",S.currentTarget.style.boxShadow="0 4px 15px rgba(255, 215, 0, 0.4)"}),Z(n,p)};re(ja,n=>{a(cs)&&n(fi)})}var Ta=f(ja,2),hs=w(Ta),ut=w(hs);x(ut,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${i}px;
        height: ${r}px;
      `);var vs=w(ut),$t=f(vs,2);$t.textContent=`🛠️ DEBUG v${s}`;var ms=f($t,2),bs=w(ms);x(bs,"src",`${V??""}/Control_leftend.png`);var St=f(bs,2),Et=w(St),La=w(Et),ys=f(La,2),xs=w(ys),jt=f(xs,2),gi=w(jt,!0);A(jt);var Ra=f(jt,2);A(ys),A(Et);var _s=f(Et,2);x(_s,"src",`${V??""}/Control_divider.png`);var Tt=f(_s,2),Pa=w(Tt),ws=f(Pa,2),hi=w(ws,!0);A(ws),A(Tt);var As=f(Tt,2);x(As,"src",`${V??""}/Control_divider.png`);var ks=f(As,2),$s=w(ks),Ia=w($s);A($s),A(ks);var Ss=f(ks,2);x(Ss,"src",`${V??""}/Control_divider.png`);var Lt=f(Ss,2),Rt=w(Lt),Oa=f(Rt,2);A(Lt);var Es=f(Lt,2);x(Es,"src",`${V??""}/Control_divider.png`);var Pt=f(Es,2),It=w(Pt),Ot=f(It,2),vi=w(Ot,!0);A(Ot);var mi=f(Ot,2);{var bi=n=>{var p=zn(),$=w(p),g=f($,2),_=f(g,2),k=f(_,2);A(p),pe(()=>{x(p,"style",`
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
        `),x($,"style",`
            color: #ffd700;
            font-size: ${14*a(d)}px;
            font-weight: bold;
            text-align: center;
            border-bottom: ${1*a(d)}px solid #444;
            padding-bottom: ${5*a(d)}px;
          `),x(g,"style",`
              background: ${(a(Y)==="slow"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: ${2*a(d)}px solid ${(a(Y)==="slow"?"#ffd700":"#666")??""};
              color: ${(a(Y)==="slow"?"#ffd700":"#ffffff")??""};
              padding: ${8*a(d)}px ${20*a(d)}px;
              border-radius: ${5*a(d)}px;
              cursor: pointer;
              font-weight: bold;
              font-size: ${12*a(d)}px;
              transition: all 0.2s;
            `),x(_,"style",`
              background: ${(a(Y)==="medium"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: ${2*a(d)}px solid ${(a(Y)==="medium"?"#ffd700":"#666")??""};
              color: ${(a(Y)==="medium"?"#ffd700":"#ffffff")??""};
              padding: ${8*a(d)}px ${20*a(d)}px;
              border-radius: ${5*a(d)}px;
              cursor: pointer;
              font-weight: bold;
              font-size: ${12*a(d)}px;
              transition: all 0.2s;
            `),x(k,"style",`
              background: ${(a(Y)==="fast"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: ${2*a(d)}px solid ${(a(Y)==="fast"?"#ffd700":"#666")??""};
              color: ${(a(Y)==="fast"?"#ffd700":"#ffffff")??""};
              padding: ${8*a(d)}px ${20*a(d)}px;
              border-radius: ${5*a(d)}px;
              cursor: pointer;
              font-weight: bold;
              font-size: ${12*a(d)}px;
              transition: all 0.2s;
            `)}),I("click",g,()=>{y(Y,"slow"),y(We,!1)}),I("click",_,()=>{y(Y,"medium"),y(We,!1)}),I("click",k,()=>{y(Y,"fast"),y(We,!1)}),Z(n,p)};re(mi,n=>{a(We)&&n(bi)})}A(Pt);var js=f(Pt,2);x(js,"src",`${V??""}/Control_divider.png`);var Ct=f(js,2),Ts=w(Ct),Ca=f(Ts,2);A(Ct);var Ls=f(Ct,2);x(Ls,"src",`${V??""}/Control_divider.png`);var Bt=f(Ls,2),Ba=w(Bt),Rs=f(Ba,2),yi=w(Rs,!0);A(Rs),A(Bt);var Ps=f(Bt,2);x(Ps,"src",`${V??""}/Control_divider.png`);var Fa=f(Ps,2);A(St);var Ma=f(St,2);x(Ma,"src",`${V??""}/Control_rightend.png`),A(ms),A(ut),qa(ut,n=>fs=n,()=>fs);var Ft=f(ut,2);qa(Ft,n=>ze=n,()=>ze);var Mt=f(Ft,2),Wa=f(w(Mt),2);Wa.textContent=`v${s}`;var Is=f(Wa,2),za=f(w(Is),2),xi=w(za,!0);A(za),A(Is);var Os=f(Is,2),Na=f(w(Os),2),_i=w(Na,!0);A(Na),A(Os);var Cs=f(Os,2),Da=f(w(Cs),2),wi=w(Da,!0);A(Da),A(Cs);var Bs=f(Cs,2),Fs=f(w(Bs),2),Ai=w(Fs);A(Fs),A(Bs);var Ms=f(Bs,2),Ws=f(w(Ms),2),ki=w(Ws);A(Ws),A(Ms);var zs=f(Ms,2),Ua=f(w(zs),2),$i=w(Ua,!0);A(Ua),A(zs);var Ns=f(zs,2),Ga=f(w(Ns),2),Si=w(Ga,!0);A(Ga),A(Ns);var Ds=f(Ns,2),Ha=f(w(Ds),2),Ei=w(Ha);A(Ha),A(Ds);var Va=f(Ds,2),Ya=f(Va,2),Ke=w(Ya),ji=w(Ke);A(Ke);var Wt=f(Ke,2),ft=f(Wt,2),Ti=w(ft);A(ft);var Us=f(ft,2);A(Ya),A(Mt);var zt=f(Mt,2),Li=w(zt);{var Ri=n=>{var p=Nn(),$=f(w(p),2),g=w($);A($);var _=f($,2);A(p),pe(()=>z(g,`${a(Ue)??""} left`)),I("click",_,pt),Z(n,p)},Pi=n=>{var p=Un(),$=mt(p),g=f($,2);{var _=k=>{var S=Dn(),B=f(w(S),2),X=f(B,2),K=f(X,2),Q=f(K,2),J=f(Q,2),E=f(J,2);A(S),I("click",B,()=>dt(10)),I("click",X,()=>dt(100)),I("click",K,()=>dt(1e3)),I("click",Q,()=>dt(1e4)),I("click",J,()=>dt(1e5)),I("click",E,()=>{y(Oe,!1)}),Z(k,S)};re(g,k=>{a(Oe)&&k(_)})}I("click",$,()=>{y(Oe,!a(Oe))}),Z(n,p)};re(Li,n=>{a(ce)?n(Ri):n(Pi,!1)})}A(zt);var gt=f(zt,2),Ii=w(gt,!0);A(gt),A(hs),A(Ta),pe((n,p,$,g,_,k,S,B)=>{x(hs,"style",`
    position: relative;
    width: ${i*a(d)}px;
    height: ${r*a(d)}px;
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
        `),x($t,"style",`
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
          z-index: 1000;
          min-width: ${180*a(d)}px;
        `),x(ms,"style",`
        position: absolute;
        left: ${((es?es.x:j)+L)*a(d)}px;
        top: ${(b+se)*a(d)}px;
        width: ${a(qt)*a(d)}px;
        height: ${h*a(d)}px;
        display: flex;
        align-items: center;
        z-index: 1000;
      `),x(bs,"style",`height: ${h*a(d)}px; flex-shrink: 0;`),x(St,"style",`
    flex-grow: 1;
    height: ${h*a(d)}px;
    background-image: url('${V??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 ${20*a(d)}px;
  `),x(Et,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*a(d)}px;`),x(La,"style",`color: #00ff00; font-size: ${12*a(d)}px; font-weight: bold;`),x(ys,"style",`display: flex; gap: ${5*a(d)}px; align-items: center;`),x(xs,"style",`
            width: ${40*a(d)}px;
            height: ${40*a(d)}px;
            background-image: url('${V??""}/Control_lowerbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(jt,"style",`
          color: #fff;
          font-size: ${18*a(d)}px;
          font-weight: bold;
          min-width: ${80*a(d)}px;
          text-align: center;
          font-family: 'Courier New', monospace;
        `),z(gi,n),x(Ra,"style",`
            width: ${40*a(d)}px;
            height: ${40*a(d)}px;
            background-image: url('${V??""}/Control_upperbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(_s,"style",`height: ${h*.8*a(d)}px; flex-shrink: 0;`),x(Tt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*a(d)}px;`),x(Pa,"style",`color: #00ff00; font-size: ${12*a(d)}px; font-weight: bold;`),x(ws,"style",`
        color: #fff;
        font-size: ${20*a(d)}px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      `),z(hi,p),x(As,"style",`height: ${h*.8*a(d)}px; flex-shrink: 0;`),$r($s,1,`play-button-wrapper ${(a(ss)?"glare-animate":"")??""}`,"svelte-tijp0o"),x(Ia,"style",`
            width: ${130*a(d)}px;
            height: ${130*a(d)}px;
            background-image: url('${V??""}/Control_playbutton.png');
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
          `),x(Ss,"style",`height: ${h*.8*a(d)}px; flex-shrink: 0;`),x(Lt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*a(d)}px;`),x(Rt,"style",`
          width: ${50*a(d)}px;
          height: ${50*a(d)}px;
          background-image: url('${V??""}/${(a(ce)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),x(Rt,"title",a(ce)?"Stop Autoplay":"Autoplay"),x(Oa,"src",`${V??""}/${(a(ce)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),x(Oa,"style",`width: ${50*a(d)}px; height: auto;`),x(Es,"style",`height: ${h*.8*a(d)}px; flex-shrink: 0;`),x(Pt,"style",`position: relative; display: flex; flex-direction: column; align-items: center; gap: ${5*a(d)}px;`),x(It,"style",`
          width: ${50*a(d)}px;
          height: ${50*a(d)}px;
          background-image: url('${V??""}/Control_fastplay_select.png');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),x(It,"title",`Spin Speed: ${(a(Y)==="slow"?"Slow":a(Y)==="medium"?"Medium":"Fast")??""}`),x(Ot,"style",`
        color: #ffffff;
        font-size: ${10*a(d)}px;
        font-weight: bold;
        text-transform: uppercase;
      `),z(vi,a(Y)==="slow"?"Slow":a(Y)==="medium"?"Med":"Fast"),x(js,"style",`height: ${h*.8*a(d)}px; flex-shrink: 0;`),x(Ct,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*a(d)}px;`),x(Ts,"style",`
          width: ${50*a(d)}px;
          height: ${50*a(d)}px;
          background-image: url('${V??""}/${(a(yt)?"Control_fastplay_select.png":"Control_fastplay_deselect.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),x(Ca,"src",`${V??""}/${(a(yt)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),x(Ca,"style",`width: ${50*a(d)}px; height: auto;`),x(Ls,"style",`height: ${h*.8*a(d)}px; flex-shrink: 0;`),x(Bt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*a(d)}px;`),x(Ba,"style",`color: #00ff00; font-size: ${12*a(d)}px; font-weight: bold;`),x(Rs,"style",`
        color: #ffd700;
        font-size: ${20*a(d)}px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      `),z(yi,$),x(Ps,"style",`height: ${h*.8*a(d)}px; flex-shrink: 0;`),x(Fa,"style",`
        width: ${50*a(d)}px;
        height: ${50*a(d)}px;
        background-image: url('${V??""}/Control_menubar.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),x(Ma,"style",`height: ${h*a(d)}px; flex-shrink: 0;`),x(Ft,"winlevel",a(ge)/a(te)>=50?"jackpot":a(ge)/a(te)>=20?"medium":"small"),x(Ft,"winamount",a(ge)),x(Mt,"style",`
  position: absolute;
  top: 20px;
  left: 20px;
  display: ${(a(wt)?"block":"none")??""};
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
`),z(xi,g),z(_i,_),z(wi,k),x(Fs,"style",`color: ${S??""};`),z(Ai,`${a(is)??""}%`),x(Ws,"style",`color: ${B??""};`),z(ki,`${a(rs)??""}%`),z($i,a(At)),z(Si,a(ns)),z(Ei,`${a(Yo)??""}%`),Ke.disabled=a(de).length===0,x(Ke,"style",`
        width: 100%;
        padding: 5px;
        background: ${(a(de).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(a(de).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(a(de).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(a(de).length>0?"1":"0.5")??""};
      `),z(ji,`Download Win Log (${a(de).length??""})`),Wt.disabled=a(de).length===0,x(Wt,"style",`
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
        background: ${(a(ue)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(a(ue)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),z(Ti,`🎵 Music: ${(a(ue)?"ON":"OFF")??""}`),Us.disabled=a(G),x(Us,"style",`
        width: 100%;
        padding: 5px;
        background: ${(a(G)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(a(G)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(a(G)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(a(G)?"0.5":"1")??""};
      `),x(zt,"style",`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1500;
  display: ${(a(wt)?"block":"none")??""};
`),x(gt,"style",`
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
  `),x(gt,"title",a(we)?"Mykistä äänet":"Laita äänet päälle"),z(Ii,a(we)?"🔊":"🔇")},[()=>a(te).toFixed(2),()=>a(Ee).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>a(va).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>a(Ge).toLocaleString(),()=>a(He).toLocaleString(),()=>a(rt).toLocaleString(),()=>parseFloat(a(is))>=95?"#00ff00":parseFloat(a(is))>=85?"#ffff00":"#ff6666",()=>parseFloat(a(rs))>=30?"#00ff00":parseFloat(a(rs))>=20?"#ffff00":"#ff6666"]),I("click",vs,()=>{y(Ye,!a(Ye))}),I("click",$t,()=>{y(wt,!a(wt))}),I("click",xs,li),I("click",Ra,ni),I("click",Ia,()=>{a(ce)&&pt(),Aa()}),I("click",Rt,()=>{a(ce)?pt():y(Oe,!a(Oe))}),I("click",It,()=>{y(We,!a(We))}),I("click",Ts,()=>{y(yt,!a(yt))}),I("click",Fa,()=>{y(Ye,!a(Ye))}),I("click",Va,ci),I("click",Ke,Ko),I("click",Wt,Qo),I("click",ft,Uo),I("click",Us,Jo),I("click",gt,()=>{y(we,!a(we))}),Z(t,ka),yo()}var Vn=q('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),Yn=q('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function Xn(t,e){mo(e,!1);let s=gr(e,"isAuthenticated",12,!1),o=qs(""),i=qs(!1);const r="slot2024";function l(){a(o)===r?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(y(i,!0),y(o,""),setTimeout(()=>y(i,!1),3e3))}bo(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),Ni();var c=zi(),v=mt(c);{var m=u=>{var b=Yn(),h=w(b),j=f(w(h),4),L=w(j);Sr(L),ur(2),A(j);var se=f(j,2);{var H=R=>{var N=Vn();Z(R,N)};re(se,R=>{a(i)&&R(H)})}A(h),A(b),jr(L,()=>a(o),R=>y(o,R)),I("submit",j,Tr(l)),Z(u,b)};re(v,u=>{s()||u(m)})}Z(t,c),yo()}var Kn=q("<!> <!>",1);function nl(t){let e=qs(!1);var s=Kn(),o=mt(s);Xn(o,{get isAuthenticated(){return a(e)},set isAuthenticated(l){y(e,l)},$$legacy:!0});var i=f(o,2);{var r=l=>{Hn(l,{})};re(i,l=>{a(e)&&l(r)})}Z(t,s)}export{So as A,Ao as C,Fr as R,Pr as S,Eo as V,nl as _,Rr as u};
