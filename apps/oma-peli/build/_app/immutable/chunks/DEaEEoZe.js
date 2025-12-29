const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DimO9jVD.js","./SpTHHzAp.js","./DN2ixH3E.js","./D1rxTRw3.js","./BUP9hRfY.js","./C2GHuDhf.js","./xOvOPg4e.js","./BUb8vGTa.js"])))=>i.map(i=>d[i]);
var qn=Object.defineProperty;var Jn=(t,e,s)=>e in t?qn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var we=(t,e,s)=>Jn(t,typeof e!="symbol"?e+"":e,s);import{f as eo,l as to,d as _r,a as j,t as Q,n as wr,g as O,i as so}from"./CzvQHsIM.js";import{i as ao}from"./CSlWMsbo.js";import{R as ke,T as ro,Q as no,i as r,w as oo,W as io,X as rr,Y as nr,Z as Ks,a1 as yt,a9 as lo,_ as kr,$ as Ar,a0 as co,ad as zr,O as fo,z as uo,I as or,ar as Qs,K as ir,as as po,at as ho,au as vo,ac as go,av as mo,aw as bo,ax as xo,ay as yo,a3 as _o,az as wo,aA as ko,N as Ao,aB as zo,aC as So,g as Eo,n as To,p as da,f as Oe,ai as R,a as fa,y,c as b,s as d,r as x,t as ie,k as Ue,ah as Sr,aD as Re,aE as Lo,aF as ra}from"./D1rxTRw3.js";import{_ as lr,i as le,p as be}from"./DN2ixH3E.js";import{s as M,a as $o}from"./CSYyqGjZ.js";import{p as na,b as cr}from"./Dk6Goypl.js";import{b as ze}from"./DxYqdDtw.js";import{e as Ne,E as I,a as Ro,C as ua,Q as Ft,V as Mt,N as Zs,D as pe,H as Po,p as Ge,ab as lt,ac as He,ad as Oo,w as We,ae as wt,af as Er,ag as ct,a9 as Pe,ah as jt,a1 as Tr,ai as Io,aj as qs,aa as Co,ak as Bo,y as It}from"./SpTHHzAp.js";import{A as Fo,B as dr,G as Mo,T as Lr,a as Wo,b as Js}from"./BUP9hRfY.js";function Wt(t,e){return e}function No(t,e,s,a){for(var n=[],o=e.length,i=0;i<o;i++)vo(e[i].e,n,!0);var l=o>0&&n.length===0&&s!==null;if(l){var p=s.parentNode;go(p),p.append(s),a.clear(),Me(t,e[0].prev,e[o-1].next)}mo(n,()=>{for(var v=0;v<o;v++){var f=e[v];l||(a.delete(f.k),Me(t,f.prev,f.next)),bo(f.e,!l)}})}function Nt(t,e,s,a,n,o=null){var i=t,l={flags:e,items:new Map,first:null};ke&&ro();var p=null,v=!1,f=oo(()=>{var m=s();return fo(m)?m:m==null?[]:zr(m)});no(()=>{var m=r(f),g=m.length;if(v&&g===0)return;v=g===0;let z=!1;if(ke){var T=i.data===io;T!==(g===0)&&(i=rr(),nr(i),Ks(!1),z=!0)}if(ke){for(var te=null,G,L=0;L<g;L++){if(yt.nodeType===8&&yt.data===lo){i=yt,z=!0,Ks(!1);break}var P=m[L],X=a(P,L);G=$r(yt,l,te,null,P,X,L,n,e,s),l.items.set(X,G),te=G}g>0&&nr(rr())}ke||jo(m,l,i,n,e,a,s),o!==null&&(g===0?p?kr(p):p=Ar(()=>o(i)):p!==null&&co(p,()=>{p=null})),z&&Ks(!0),r(f)}),ke&&(i=yt)}function jo(t,e,s,a,n,o,i){var l=t.length,p=e.items,v=e.first,f=v,m,g=null,z=[],T=[],te,G,L,P;for(P=0;P<l;P+=1){if(te=t[P],G=o(te,P),L=p.get(G),L===void 0){var X=f?f.e.nodes_start:s;g=$r(X,e,g,g===null?e.first:g.next,te,G,P,a,n,i),p.set(G,g),z=[],T=[],f=g.next;continue}if(Do(L,te,P),(L.e.f&Qs)!==0&&kr(L.e),L!==f){if(m!==void 0&&m.has(L)){if(z.length<T.length){var re=T[0],ce;g=re.prev;var Se=z[0],de=z[z.length-1];for(ce=0;ce<z.length;ce+=1)fr(z[ce],re,s);for(ce=0;ce<T.length;ce+=1)m.delete(T[ce]);Me(e,Se.prev,de.next),Me(e,g,Se),Me(e,de,re),f=re,g=de,P-=1,z=[],T=[]}else m.delete(L),fr(L,f,s),Me(e,L.prev,L.next),Me(e,L,g===null?e.first:g.next),Me(e,g,L),g=L;continue}for(z=[],T=[];f!==null&&f.k!==G;)(f.e.f&Qs)===0&&(m??(m=new Set)).add(f),T.push(f),f=f.next;if(f===null)continue;L=f}z.push(L),g=L,f=L.next}if(f!==null||m!==void 0){for(var Ae=m===void 0?[]:zr(m);f!==null;)(f.e.f&Qs)===0&&Ae.push(f),f=f.next;var fe=Ae.length;if(fe>0){var se=null;No(e,Ae,se,p)}}ir.first=e.first&&e.first.e,ir.last=g&&g.e}function Do(t,e,s,a){ho(t.v,e),t.i=s}function $r(t,e,s,a,n,o,i,l,p,v){var f=(p&xo)!==0,m=(p&yo)===0,g=f?m?uo(n):or(n):n,z=(p&po)===0?i:or(i),T={i:z,v:g,k:o,a:null,e:null,prev:s,next:a};try{return T.e=Ar(()=>l(t,g,z,v),ke),T.e.prev=s&&s.e,T.e.next=a&&a.e,s===null?e.first=T:(s.next=T,s.e.next=T.e),a!==null&&(a.prev=T,a.e.prev=T.e),T}finally{}}function fr(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,n=e?e.e.nodes_start:s,o=t.e.nodes_start;o!==a;){var i=_o(o);n.before(o),o=i}}function Me(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}const ur=[...` 	
\r\f \v\uFEFF`];function Uo(t,e,s){var a=t==null?"":""+t;if(e&&(a=a?a+" "+e:e),s){for(var n in s)if(s[n])a=a?a+" "+n:n;else if(a.length)for(var o=n.length,i=0;(i=a.indexOf(n,i))>=0;){var l=i+o;(i===0||ur.includes(a[i-1]))&&(l===a.length||ur.includes(a[l]))?a=(i===0?"":a.substring(0,i))+a.substring(l+1):i=l}}return a===""?null:a}function oa(t,e,s,a,n,o){var i=t.__className;if(ke||i!==s){var l=Uo(s,a,o);(!ke||l!==t.getAttribute("class"))&&(l==null?t.removeAttribute("class"):e?t.className=l:t.setAttribute("class",l)),t.__className=s}else if(o)for(var p in o){var v=!!o[p];(n==null||v!==!!n[p])&&t.classList.toggle(p,v)}return o}function Go(t){if(ke){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;A(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var n=t.checked;A(t,"checked",null),t.checked=n}}};t.__on_r=s,wo(s),eo()}}function A(t,e,s,a){var n=t.__attributes??(t.__attributes={});ke&&(n[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||n[e]!==(n[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[ko]=s),s==null?t.removeAttribute(e):typeof s!="string"&&Ho(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var pr=new Map;function Ho(t){var e=pr.get(t.nodeName);if(e)return e;pr.set(t.nodeName,e=[]);for(var s,a=t,n=Element.prototype;n!==a;){s=zo(a);for(var o in s)s[o].set&&e.push(o);a=Ao(a)}return e}function Vo(t,e,s=e){var a=So();to(t,"input",n=>{var o=n?t.defaultValue:t.value;if(o=ea(t)?ta(o):o,s(o),a&&o!==(o=e())){var i=t.selectionStart,l=t.selectionEnd;t.value=o??"",l!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(l,t.value.length))}}),(ke&&t.defaultValue!==t.value||Eo(e)==null&&t.value)&&s(ea(t)?ta(t.value):t.value),To(()=>{var n=e();ea(t)&&n===ta(t.value)||t.type==="date"&&!n&&!t.value||n!==t.value&&(t.value=n??"")})}function ea(t){var e=t.type;return e==="number"||e==="range"}function ta(t){return t===""?null:+t}function Yo(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const ia=[];Ne.handleByNamedList(I.Environment,ia);async function Xo(t){if(!t)for(let e=0;e<ia.length;e++){const s=ia[e];if(s.value.test()){await s.value.load();return}}}let _t;function Ko(){if(typeof _t=="boolean")return _t;try{_t=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{_t=!1}return _t}var Rr=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(Rr||{});class Qo{constructor(e){this.items=[],this._name=e}emit(e,s,a,n,o,i,l,p){const{name:v,items:f}=this;for(let m=0,g=f.length;m<g;m++)f[m][v](e,s,a,n,o,i,l,p);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Zo=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Pr=class Or extends Ro{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...Zo,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Xo(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...Or.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof ua&&(a={container:a},s&&(Ft(Mt,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const n=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=n?a.clearColor:Zs.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const n=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==n&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Rr.ALL);const{clear:a,clearColor:n,target:o}=e;Zs.shared.setValue(n??this.background.colorRgba),s.renderTarget.clear(o,a,Zs.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new Qo(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const n in this.runners)this.runners[n].add(a);return this}_addPipes(e,s){const a=s.reduce((n,o)=>(n[o.name]=o.value,n),{});e.forEach(n=>{const o=n.value,i=n.name,l=a[i];this.renderPipes[i]=new o(this,l?new l:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Ko())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Pr.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Ir=Pr,Ct;function qo(t){return Ct!==void 0||(Ct=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??Ir.defaultOptions.failIfMajorPerformanceCaveat};try{if(!pe.get().getWebGLRenderingContext())return!1;let n=pe.get().createCanvas().getContext("webgl",e);const o=!!((s=n==null?void 0:n.getContextAttributes())!=null&&s.stencil);if(n){const i=n.getExtension("WEBGL_lose_context");i&&i.loseContext()}return n=null,o}catch{return!1}})()),Ct}let Bt;async function Jo(t={}){return Bt!==void 0||(Bt=await(async()=>{const e=pe.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),Bt}const hr=["webgl","webgpu","canvas"];async function ei(t){let e=[];t.preference?(e.push(t.preference),hr.forEach(o=>{o!==t.preference&&e.push(o)})):e=hr.slice();let s,a={};for(let o=0;o<e.length;o++){const i=e[o];if(i==="webgpu"&&await Jo()){const{WebGPURenderer:l}=await lr(async()=>{const{WebGPURenderer:p}=await import("./DimO9jVD.js");return{WebGPURenderer:p}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=l,a={...t,...t.webgpu};break}else if(i==="webgl"&&qo(t.failIfMajorPerformanceCaveat??Ir.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:l}=await lr(async()=>{const{WebGLRenderer:p}=await import("./BUb8vGTa.js");return{WebGLRenderer:p}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=l,a={...t,...t.webgl};break}else if(i==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const n=new s;return await n.init(a),n}const Cr="8.8.1";class Br{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Cr)}static destroy(){}}Br.extension=I.Application;class ti{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Cr)}destroy(){this._renderer=null}}ti.extension={type:[I.WebGLSystem,I.WebGPUSystem],name:"initHook",priority:-10};const Fr=class la{constructor(...e){this.stage=new ua,e[0]!==void 0&&Ft(Mt,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await ei(e),la._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Ft(Mt,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=la._plugins.slice(0);a.reverse(),a.forEach(n=>{n.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Fr._plugins=[];let Mr=Fr;Ne.handleByList(I.Application,Mr._plugins);Ne.add(Br);class Wr extends Fo{constructor(e,s){super();const{textures:a,data:n}=e;Object.keys(n.pages).forEach(o=>{const i=n.pages[parseInt(o,10)],l=a[i.id];this.pages.push({texture:l})}),Object.keys(n.chars).forEach(o=>{const i=n.chars[o],{frame:l,source:p}=a[i.page],v=new Po(i.x+l.x,i.y+l.y,i.width,i.height),f=new Ge({source:p,frame:v});this.chars[o]={id:o.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:f}}),this.baseRenderedFontSize=n.fontSize,this.baseMeasurementFontSize=n.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:n.fontSize},this.baseLineOffset=n.baseLineOffset,this.lineHeight=n.lineHeight,this.fontFamily=n.fontFamily,this.distanceField=n.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){dr.install(e)}static uninstall(e){dr.uninstall(e)}}const sa={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const m in e){const g=e[m].match(/^[a-z]+/gm)[0],z=e[m].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),T={};for(const te in z){const G=z[te].split("="),L=G[0],P=G[1].replace(/"/gm,""),X=parseFloat(P),re=isNaN(X)?P:X;T[L]=re}s[g].push(T)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[n]=s.info,[o]=s.common,[i]=s.distanceField??[];i&&(a.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),a.fontSize=parseInt(n.size,10),a.fontFamily=n.face,a.lineHeight=parseInt(o.lineHeight,10);const l=s.page;for(let m=0;m<l.length;m++)a.pages.push({id:parseInt(l[m].id,10)||0,file:l[m].file});const p={};a.baseLineOffset=a.lineHeight-parseInt(o.base,10);const v=s.char;for(let m=0;m<v.length;m++){const g=v[m],z=parseInt(g.id,10);let T=g.letter??g.char??String.fromCharCode(z);T==="space"&&(T=" "),p[z]=T,a.chars[T]={id:z,page:parseInt(g.page,10)||0,x:parseInt(g.x,10),y:parseInt(g.y,10),width:parseInt(g.width,10),height:parseInt(g.height,10),xOffset:parseInt(g.xoffset,10),yOffset:parseInt(g.yoffset,10),xAdvance:parseInt(g.xadvance,10),kerning:{}}}const f=s.kerning||[];for(let m=0;m<f.length;m++){const g=parseInt(f[m].first,10),z=parseInt(f[m].second,10),T=parseInt(f[m].amount,10);a.chars[p[z]].kerning[p[g]]=T}return a}},vr={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],n=t.getElementsByTagName("distanceField")[0];n&&(e.distanceField={type:n.getAttribute("fieldType"),range:parseInt(n.getAttribute("distanceRange"),10)});const o=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),l=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let v=0;v<o.length;v++)e.pages.push({id:parseInt(o[v].getAttribute("id"),10)||0,file:o[v].getAttribute("file")});const p={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let v=0;v<i.length;v++){const f=i[v],m=parseInt(f.getAttribute("id"),10);let g=f.getAttribute("letter")??f.getAttribute("char")??String.fromCharCode(m);g==="space"&&(g=" "),p[m]=g,e.chars[g]={id:m,page:parseInt(f.getAttribute("page"),10)||0,x:parseInt(f.getAttribute("x"),10),y:parseInt(f.getAttribute("y"),10),width:parseInt(f.getAttribute("width"),10),height:parseInt(f.getAttribute("height"),10),xOffset:parseInt(f.getAttribute("xoffset"),10),yOffset:parseInt(f.getAttribute("yoffset"),10),xAdvance:parseInt(f.getAttribute("xadvance"),10),kerning:{}}}for(let v=0;v<l.length;v++){const f=parseInt(l[v].getAttribute("first"),10),m=parseInt(l[v].getAttribute("second"),10),g=parseInt(l[v].getAttribute("amount"),10);e.chars[p[m]].kerning[p[f]]=g}return e}},gr={test(t){return typeof t=="string"&&t.includes("<font>")?vr.test(pe.get().parseXML(t)):!1},parse(t){return vr.parse(pe.get().parseXML(t))}},si=[".xml",".fnt"],ai={extension:{type:I.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof Wr,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},ri={extension:{type:I.LoadParser,priority:lt.Normal},name:"loadBitmapFont",test(t){return si.includes(He.extname(t).toLowerCase())},async testParse(t){return sa.test(t)||gr.test(t)},async parse(t,e,s){const a=sa.test(t)?sa.parse(t):gr.parse(t),{src:n}=e,{pages:o}=a,i=[],l=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let m=0;m<o.length;++m){const g=o[m].file;let z=He.join(He.dirname(n),g);z=Oo(z,n),i.push({src:z,data:l})}const p=await s.load(i),v=i.map(m=>p[m.src]);return new Wr({data:a,textures:v},n)},async load(t,e){return await(await pe.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class ni{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const oi={extension:{type:I.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Ge),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((n,o)=>{s[a+(o===0?"":o+1)]=n})}),s}};async function Nr(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const ii={extension:{type:I.DetectionParser,priority:1},test:async()=>Nr("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},mr=["png","jpg","jpeg"],li={extension:{type:I.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...mr],remove:async t=>t.filter(e=>!mr.includes(e))},ci="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function pa(t){return ci?!1:document.createElement("video").canPlayType(t)!==""}const di={extension:{type:I.DetectionParser,priority:0},test:async()=>pa("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},fi={extension:{type:I.DetectionParser,priority:0},test:async()=>pa("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},ui={extension:{type:I.DetectionParser,priority:0},test:async()=>pa("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},pi={extension:{type:I.DetectionParser,priority:0},test:async()=>Nr("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class hi{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var i,l;let n=null,o=null;if(s.loadParser&&(o=this._parserHash[s.loadParser],o||We(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!o){for(let p=0;p<this.parsers.length;p++){const v=this.parsers[p];if(v.load&&((i=v.test)!=null&&i.call(v,e,s,this))){o=v;break}}if(!o)return We(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}n=await o.load(e,s,this),a.parser=o;for(let p=0;p<this.parsers.length;p++){const v=this.parsers[p];v.parse&&v.parse&&await((l=v.testParse)==null?void 0:l.call(v,n,s,this))&&(n=await v.parse(n,s,this)||n,a.parser=v)}return n})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const n={},o=Er(e),i=wt(e,v=>({alias:[v],src:v,data:{}})),l=i.length,p=i.map(async v=>{const f=He.toAbsolute(v.src);if(!n[v.src])try{this.promiseCache[f]||(this.promiseCache[f]=this._getLoadPromiseAndParser(f,v)),n[v.src]=await this.promiseCache[f].promise,s&&s(++a/l)}catch(m){throw delete this.promiseCache[f],delete n[v.src],new Error(`[Loader.load] Failed to load ${f}.
${m}`)}});return await Promise.all(p),o?n[i[0].src]:n}async unload(e){const a=wt(e,n=>({alias:[n],src:n})).map(async n=>{var l,p;const o=He.toAbsolute(n.src),i=this.promiseCache[o];if(i){const v=await i.promise;delete this.promiseCache[o],await((p=(l=i.parser)==null?void 0:l.unload)==null?void 0:p.call(l,v,n,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&We(`[Assets] loadParser name conflict "${s.name}"`):We("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function dt(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const vi=".json",gi="application/json",mi={extension:{type:I.LoadParser,priority:lt.Low},name:"loadJson",test(t){return dt(t,gi)||ct(t,vi)},async load(t){return await(await pe.get().fetch(t)).json()}},bi=".txt",xi="text/plain",yi={name:"loadTxt",extension:{type:I.LoadParser,priority:lt.Low,name:"loadTxt"},test(t){return dt(t,xi)||ct(t,bi)},async load(t){return await(await pe.get().fetch(t)).text()}},_i=["normal","bold","100","200","300","400","500","600","700","800","900"],wi=[".ttf",".otf",".woff",".woff2"],ki=["font/ttf","font/otf","font/woff","font/woff2"],Ai=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function zi(t){const e=He.extname(t),n=He.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(l=>l.charAt(0).toUpperCase()+l.slice(1));let o=n.length>0;for(const l of n)if(!l.match(Ai)){o=!1;break}let i=n.join(" ");return o||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const Si=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function Ei(t){return Si.test(t)?t:encodeURI(t)}const Ti={extension:{type:I.LoadParser,priority:lt.Low},name:"loadWebFont",test(t){return dt(t,ki)||ct(t,wi)},async load(t,e){var a,n,o;const s=pe.get().getFontFaceSet();if(s){const i=[],l=((a=e.data)==null?void 0:a.family)??zi(t),p=((o=(n=e.data)==null?void 0:n.weights)==null?void 0:o.filter(f=>_i.includes(f)))??["normal"],v=e.data??{};for(let f=0;f<p.length;f++){const m=p[f],g=new FontFace(l,`url(${Ei(t)})`,{...v,weight:m});await g.load(),s.add(g),i.push(g)}return Pe.set(`${l}-and-url`,{url:t,fontFaces:i}),i.length===1?i[0]:i}return We("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{Pe.remove(`${e.family}-and-url`),pe.get().getFontFaceSet().delete(e)})}};function ha(t,e=1){var a;const s=(a=jt.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function va(t,e,s){t.label=s,t._sourceOrigin=s;const a=new Ge({source:t,label:s}),n=()=>{delete e.promiseCache[s],Pe.has(s)&&Pe.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(We("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),n())}),a.once("destroy",()=>{t.destroyed||(We("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),n())}),a}const Li=".svg",$i="image/svg+xml",Ri={extension:{type:I.LoadParser,priority:lt.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return dt(t,$i)||ct(t,Li)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?Oi(t):Pi(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function Pi(t,e,s,a){var G,L,P;const o=await(await pe.get().fetch(t)).blob(),i=URL.createObjectURL(o),l=new Image;l.src=i,l.crossOrigin=a,await l.decode(),URL.revokeObjectURL(i);const p=document.createElement("canvas"),v=p.getContext("2d"),f=((G=e.data)==null?void 0:G.resolution)||ha(t),m=((L=e.data)==null?void 0:L.width)??l.width,g=((P=e.data)==null?void 0:P.height)??l.height;p.width=m*f,p.height=g*f,v.drawImage(l,0,0,m*f,g*f);const{parseAsGraphicsContext:z,...T}=e.data??{},te=new Tr({resource:p,alphaMode:"premultiply-alpha-on-upload",resolution:f,...T});return va(te,s,t)}async function Oi(t){const s=await(await pe.get().fetch(t)).text(),a=new Mo;return a.svg(s),a}const Ii=`(function () {
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
`;let ot=null,ca=class{constructor(){ot||(ot=URL.createObjectURL(new Blob([Ii],{type:"application/javascript"}))),this.worker=new Worker(ot)}};ca.revokeObjectURL=function(){ot&&(URL.revokeObjectURL(ot),ot=null)};const Ci=`(function () {
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
`;let it=null;class jr{constructor(){it||(it=URL.createObjectURL(new Blob([Ci],{type:"application/javascript"}))),this.worker=new Worker(it)}}jr.revokeObjectURL=function(){it&&(URL.revokeObjectURL(it),it=null)};let br=0,aa;class Bi{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new ca;s.addEventListener("message",a=>{s.terminate(),ca.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){aa===void 0&&(aa=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<aa&&(this._createdWorkers++,e=new jr().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((n,o)=>{this._queue.push({id:e,arguments:s,resolve:n,reject:o})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[br]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:br++,id:a})}}const xr=new Bi,Fi=[".jpeg",".jpg",".png",".webp",".avif"],Mi=["image/jpeg","image/png","image/webp","image/avif"];async function Wi(t,e){var n;const s=await pe.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((n=e==null?void 0:e.data)==null?void 0:n.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const Dr={name:"loadTextures",extension:{type:I.LoadParser,priority:lt.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return dt(t,Mi)||ct(t,Fi)},async load(t,e,s){var o;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await xr.isImageBitmapSupported()?a=await xr.loadImageBitmap(t,e):a=await Wi(t,e):a=await new Promise((i,l)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?i(a):(a.onload=()=>{i(a)},a.onerror=l)});const n=new Tr({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((o=e.data)==null?void 0:o.resolution)||ha(t),...e.data});return va(n,s,t)},unload(t){t.destroy(!0)}},Ur=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Ni=Ur.map(t=>`video/${t.substring(1)}`);function ji(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=Ui(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function Di(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",n),t.load();function a(){o(),e()}function n(i){o(),s(i)}function o(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",n)}})}function Ui(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const Gi={name:"loadVideo",extension:{type:I.LoadParser,name:"loadVideo"},test(t){const e=dt(t,Ni),s=ct(t,Ur);return e||s},async load(t,e,s){var p,v;const a={...qs.defaultOptions,resolution:((p=e.data)==null?void 0:p.resolution)||ha(t),alphaMode:((v=e.data)==null?void 0:v.alphaMode)||await Io(),...e.data},n=document.createElement("video"),o={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(o).forEach(f=>{const m=o[f];m!==void 0&&n.setAttribute(f,m)}),a.muted===!0&&(n.muted=!0),ji(n,t,a.crossorigin);const i=document.createElement("source");let l;if(t.startsWith("data:"))l=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const f=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();l=qs.MIME_TYPES[f]||`video/${f}`}return i.src=t,l&&(i.type=l),new Promise(f=>{const m=async()=>{const g=new qs({...a,resource:n});n.removeEventListener("canplay",m),e.data.preload&&await Di(n),f(va(g,s,t))};n.addEventListener("canplay",m),n.appendChild(i)})},unload(t){t.destroy(!0)}},Gr={extension:{type:I.ResolveParser,name:"resolveTexture"},test:Dr.test,parse:t=>{var e;return{resolution:parseFloat(((e=jt.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},Hi={extension:{type:I.ResolveParser,priority:-2,name:"resolveJson"},test:t=>jt.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:Gr.parse};class Vi{constructor(){this._detections=[],this._initialized=!1,this.resolver=new jt,this.loader=new hi,this.cache=Pe,this._backgroundLoader=new ni(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var o,i;if(this._initialized){We("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let l=e.manifest;typeof l=="string"&&(l=await this.load(l)),this.resolver.addManifest(l)}const s=((o=e.texturePreference)==null?void 0:o.resolution)??1,a=typeof s=="number"?[s]:s,n=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:n,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=Er(e),n=wt(e).map(l=>{if(typeof l!="string"){const p=this.resolver.getAlias(l);return p.some(v=>!this.resolver.hasKey(v))&&this.add(l),Array.isArray(p)?p[0]:p}return this.resolver.hasKey(l)||this.add({alias:l,src:l}),l}),o=this.resolver.resolve(n),i=await this._mapLoadToResolve(o,s);return a?i[n[0]]:i}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const n=this.resolver.resolveBundle(e),o={},i=Object.keys(n);let l=0,p=0;const v=()=>{s==null||s(++l/p)},f=i.map(m=>{const g=n[m];return p+=Object.keys(g).length,this._mapLoadToResolve(g,v).then(z=>{o[m]=z})});return await Promise.all(f),a?o[e[0]]:o}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Pe.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=Pe.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const n=await this.loader.load(a,s);this._backgroundLoader.active=!0;const o={};return a.forEach(i=>{const l=n[i.src],p=[i.src];i.alias&&p.push(...i.alias),p.forEach(v=>{o[v]=l}),Pe.set(p,l)}),o}async unload(e){this._initialized||await this.init();const s=wt(e).map(n=>typeof n!="string"?n.src:n),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=wt(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(n=>this._unloadFromResolved(s[n]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{Pe.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,n)=>s.indexOf(a)===n),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const nt=new Vi;Ne.handleByList(I.LoadParser,nt.loader.parsers).handleByList(I.ResolveParser,nt.resolver.parsers).handleByList(I.CacheParser,nt.cache.parsers).handleByList(I.DetectionParser,nt.detections);Ne.add(oi,li,ii,pi,di,fi,ui,mi,yi,Ti,Ri,Dr,Gi,ri,ai,Gr,Hi);const yr={loader:I.LoadParser,resolver:I.ResolveParser,cache:I.CacheParser,detection:I.DetectionParser};Ne.handle(I.Asset,t=>{const e=t.ref;Object.entries(yr).filter(([s])=>!!e[s]).forEach(([s,a])=>Ne.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(yr).filter(s=>!!e[s]).forEach(s=>Ne.remove(e[s]))});class Yi extends Co{constructor(e,s){const{text:a,resolution:n,style:o,anchor:i,width:l,height:p,roundPixels:v,...f}=e;super({...f}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=o,this.resolution=n??null,this.allowChildren=!1,this._anchor=new Bo({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=v??!1,l!==void 0&&(this.width=l),p!==void 0&&(this.height=p)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,n=-s*this.anchor.x;let o=0;return e.x>=n&&e.x<=n+s&&(o=-a*this.anchor.y,e.y>=o&&e.y<=o+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function Xi(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(Ft(Mt,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class Ki extends Yi{constructor(...e){const s=Xi(e,"Text");super(s,Lr),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=Wo.measureText(this._text,this._style),{width:n,height:o}=a;e.minX=-s._x*n,e.maxX=e.minX+n,e.minY=-s._y*o,e.maxY=e.minY+o}}const Qi="1.1.8",Zi={version:Qi};var qi=Q('<div class="win-label svelte-27a1cu">BIG WIN!</div> <div class="win-amount-display svelte-27a1cu"> </div>',1),Ji=wr('<use href="#sparkle" class="sparkle svelte-27a1cu"></use>'),el=wr('<use href="#vinyl"></use>'),tl=Q('<div><!> <svg class="vinyl-canvas svelte-27a1cu" viewBox="0 0 1024 800" xmlns="http://www.w3.org/2000/svg"><defs class="svelte-27a1cu"><symbol id="vinyl" viewBox="-200 -200 400 400" class="svelte-27a1cu"><circle cx="0" cy="0" r="180" fill="#0b0b0b" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="150" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.3" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="120" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.25" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="90" fill="none" stroke="#1a1a1a" stroke-width="1.5" opacity="0.2" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="55" fill="var(--label-color)" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="6" fill="#ffffff" class="svelte-27a1cu"></circle><ellipse cx="-15" cy="-15" rx="20" ry="15" fill="#ffffff" opacity="0.3" transform="rotate(-30)" class="svelte-27a1cu"></ellipse></symbol><symbol id="sparkle" viewBox="-12 -12 24 24" class="svelte-27a1cu"><polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ffd966" class="svelte-27a1cu"></polygon><circle cx="0" cy="0" r="2" fill="#ffffff" class="svelte-27a1cu"></circle></symbol><symbol id="confetti" viewBox="-3 -3 6 6" class="svelte-27a1cu"><circle cx="0" cy="0" r="2" fill="var(--confetti-color)" class="svelte-27a1cu"></circle></symbol></defs><!><!></svg></div>');function sl(t,e){da(e,!0);let s=na(e,"winLevel",3,"small"),a=na(e,"winAmount",3,0),n=R(!1),o=R(!1);const i={small:{vinyls:5,sparkles:8,maxRadius:100},medium:{vinyls:12,sparkles:16,maxRadius:140},jackpot:{vinyls:24,sparkles:30,maxRadius:180}},l=Ue(()=>i[s()]),p=["#f04e37","#ffd966","#ff8533","#4ecdc4","#ff6b9d"];function v(P){const X=[],Se=r(l).maxRadius;for(let de=0;de<P;de++){const Ae=Math.PI*2*de/P+Math.random()*.4,fe=Math.random()*Se*.7+Se*.2;X.push({x:512+Math.cos(Ae)*fe,y:400+Math.sin(Ae)*fe,rotation:Math.random()*30-15,scale:.3+Math.random()*.25,delay:de*.05,color:p[de%p.length]})}return X}function f(P){const X=[];for(let re=0;re<P;re++)X.push({x:100+Math.random()*824,y:50+Math.random()*700,delay:Math.random()*.8,duration:.6+Math.random()*.4,rotation:Math.random()*360});return X}const m=Ue(()=>v(r(l).vinyls)),g=Ue(()=>f(r(l).sparkles));function z(){y(n,!0),y(o,!0),setTimeout(()=>{y(o,!1),setTimeout(()=>{var P;y(n,!1),(P=e.onComplete)==null||P.call(e)},500)},s()==="jackpot"?4e3:s()==="medium"?3e3:2500)}function T(){y(o,!1),setTimeout(()=>{y(n,!1)},500)}var te=_r(),G=Oe(te);{var L=P=>{var X=tl();let re;var ce=b(X);{var Se=se=>{var ne=qi(),xe=d(Oe(ne),2),Ie=b(xe,!0);x(xe),ie(kt=>M(Ie,kt),[()=>a().toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),j(se,ne)};le(ce,se=>{a()>0&&se(Se)})}var de=d(ce,2),Ae=d(b(de));Nt(Ae,17,()=>r(g),Wt,(se,ne)=>{var xe=Ji();ie(()=>A(xe,"style",`
            --sx: ${r(ne).x??""}px;
            --sy: ${r(ne).y??""}px;
            --duration: ${r(ne).duration??""}s;
            --sparkle-delay: ${r(ne).delay??""}s;
          `)),j(se,xe)});var fe=d(Ae);Nt(fe,17,()=>r(m),Wt,(se,ne)=>{var xe=el();let Ie;ie(()=>{Ie=oa(xe,0,"vinyl-group svelte-27a1cu",null,Ie,{floating:r(o)}),A(xe,"style",`
            --tx: ${r(ne).x??""}px;
            --ty: ${r(ne).y??""}px;
            --scale: ${r(ne).scale??""};
            --rotation: ${r(ne).rotation??""}deg;
            --delay: ${r(ne).delay??""}s;
            --label-color: ${r(ne).color??""};
          `)}),j(se,xe)}),x(de),x(X),ie(()=>re=oa(X,1,"vinyl-win-container svelte-27a1cu",null,re,{visible:r(o),hiding:!r(o)})),j(P,X)};le(G,P=>{r(n)&&P(L)})}return j(t,te),fa({show:z,hide:T})}var al=so('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-2k82zv"><\/script><!---->',1),rl=Q('<p style="color: red;" class="svelte-2k82zv"><strong class="svelte-2k82zv">Error:</strong> </p>'),nl=Q('<div class="svelte-2k82zv"> </div>'),ol=Q('<details class="svelte-2k82zv"><summary class="svelte-2k82zv"> </summary> <!></details>'),il=Q(`<div style="
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
  " class="svelte-2k82zv"><h3 class="svelte-2k82zv">🎰 Oma-peli Debug</h3> <p class="svelte-2k82zv"><strong class="svelte-2k82zv">Status:</strong> </p> <!> <p class="svelte-2k82zv"><strong class="svelte-2k82zv">Base:</strong> </p> <p class="svelte-2k82zv"><strong class="svelte-2k82zv">BG URL:</strong> </p> <p class="svelte-2k82zv"><strong class="svelte-2k82zv">Sample:</strong> </p> <!></div>`),ll=Q('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-2k82zv"> </div>'),cl=Q('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-2k82zv"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-2k82zv"> </span></div>'),dl=Q(`<div style="
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
  " class="svelte-2k82zv"><h2 style="margin: 0 0 10px 0; font-size: 2em;" class="svelte-2k82zv">🎉 VOITTO! 🎉</h2> <div style="font-size: 1.5em; font-weight: bold; margin: 10px 0;" class="svelte-2k82zv"> </div> <!> <!> <button style="
        margin-top: 15px;
        padding: 8px 16px;
        background: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
      " class="svelte-2k82zv">Jatka pelaamista</button></div>`),fl=Q(`<div style="
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
  " class="svelte-2k82zv"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-2k82zv">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-2k82zv">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-2k82zv"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-2k82zv"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-2k82zv"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-2k82zv">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-2k82zv"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-2k82zv">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-2k82zv"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-2k82zv">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-2k82zv">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-2k82zv"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-2k82zv">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-2k82zv">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-2k82zv">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-2k82zv">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-2k82zv"> <span style="color: #ffd700;" class="svelte-2k82zv">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-2k82zv">Sulje</button></div>`),ul=Q('<div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #ff00ff; font-size: 16px; animation: pulse 1s infinite;" class="svelte-2k82zv"><span class="svelte-2k82zv">🎰 FREE SPINS:</span> <span class="svelte-2k82zv"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-top: 1px solid #555; padding-top: 8px;" class="svelte-2k82zv"><span style="color: #fff; font-size: 14px;" class="svelte-2k82zv">Total Won:</span> <span style="color: #00ff00; font-size: 14px;" class="svelte-2k82zv"> </span></div>',1),pl=Q(`<div style="
      background: rgba(255, 100, 100, 0.9);
      color: white;
      padding: 15px 20px;
      border-radius: 10px;
      border: 2px solid #ff0000;
      box-shadow: 0 4px 15px rgba(255, 0, 0, 0.5);
      text-align: center;
      animation: winPulse 1s infinite;
    " class="svelte-2k82zv"><div style="font-weight: bold; font-size: 16px; margin-bottom: 8px;" class="svelte-2k82zv">🔄 AUTOPLAY</div> <div style="font-size: 20px; font-family: 'Courier New', monospace; margin-bottom: 10px;" class="svelte-2k82zv"> </div> <button style="
          width: 100%;
          padding: 8px;
          background: #ffffff;
          color: #ff0000;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          font-size: 14px;
        " class="svelte-2k82zv">⏹ STOP</button></div>`),hl=Q(`<div style="
        position: absolute;
        bottom: 60px;
        right: 0;
        background: rgba(0, 0, 0, 0.95);
        padding: 15px;
        border-radius: 10px;
        border: 2px solid #0088ff;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
        min-width: 180px;
      " class="svelte-2k82zv"><div style="color: white; font-weight: bold; margin-bottom: 10px; text-align: center;" class="svelte-2k82zv">Select Rounds:</div> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #44aa44;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-2k82zv">10 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #4488ff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-2k82zv">100 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #ff8844;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-2k82zv">1,000 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #ff4444;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-2k82zv">10,000 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            background: #aa00ff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-2k82zv">100,000 Rounds</button> <button style="
            width: 100%;
            padding: 6px;
            background: rgba(255, 255, 255, 0.1);
            color: #aaa;
            border: 1px solid #555;
            border-radius: 5px;
            cursor: pointer;
            font-size: 12px;
          " class="svelte-2k82zv">Cancel</button></div>`),vl=Q(`<button style="
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
      " class="svelte-2k82zv">🔄 AUTOPLAY</button> <!>`,1),gl=Q(`<div style="
          position: absolute;
          bottom: 80px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
          border: 2px solid #ffd700;
          border-radius: 10px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
        " class="svelte-2k82zv"><div style="
            color: #ffd700;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            border-bottom: 1px solid #444;
            padding-bottom: 5px;
          " class="svelte-2k82zv">SPIN SPEED</div> <button class="svelte-2k82zv">🐌 SLOW</button> <button class="svelte-2k82zv">⚡ MEDIUM</button> <button class="svelte-2k82zv">🚀 FAST</button></div>`),ml=Q(`<!> <!> <!> <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #000;
" class="svelte-2k82zv"><div class="svelte-2k82zv"><div class="svelte-2k82zv"></div> <div class="svelte-2k82zv"><!> <div style="display: flex; justify-content: space-between; margin-bottom: 8px;" class="svelte-2k82zv"><span style="color: #fff;" class="svelte-2k82zv">CREDITS:</span> <span style="color: #ffd700;" class="svelte-2k82zv"> </span></div> <div style="display: flex; justify-content: space-between; border-top: 1px solid #555; padding-top: 8px;" class="svelte-2k82zv"><span style="color: #fff;" class="svelte-2k82zv">BET:</span> <span style="color: #00ff00;" class="svelte-2k82zv"> </span></div></div> <div style="
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.85);
  padding: 15px;
  border-radius: 10px;
  border: 2px solid #00ff00;
  z-index: 1500;
" class="svelte-2k82zv"><div style="color: white; font-size: 14px; margin-bottom: 10px; text-align: center; font-weight: bold;" class="svelte-2k82zv">BET CONTROLS</div> <div style="display: flex; gap: 10px; align-items: center;" class="svelte-2k82zv"><button style="
        padding: 8px 15px;
        background: #ff4444;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: background 0.2s;
      " class="bet-btn-minus svelte-2k82zv">-</button> <div style="
      color: #00ff00;
      font-family: 'Courier New', monospace;
      font-size: 20px;
      font-weight: bold;
      min-width: 60px;
      text-align: center;
      background: rgba(0, 255, 0, 0.1);
      padding: 5px 10px;
      border-radius: 5px;
    " class="svelte-2k82zv"> </div> <button style="
        padding: 8px 15px;
        background: #44ff44;
        color: #000;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: background 0.2s;
      " class="bet-btn-plus svelte-2k82zv">+</button> <button style="
        padding: 8px 12px;
        background: #ffd700;
        color: #000;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        transition: background 0.2s;
      " class="bet-btn-max svelte-2k82zv">MAX</button></div></div> <button style="
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
  " class="svelte-2k82zv">💰 PAYTABLE</button> <div style="
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
" class="svelte-2k82zv"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-2k82zv">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-2k82zv"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-2k82zv"><span style="color: #aaa;" class="svelte-2k82zv">Rounds:</span> <span style="color: #fff;" class="svelte-2k82zv"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-2k82zv"><span style="color: #aaa;" class="svelte-2k82zv">Wagered:</span> <span style="color: #ff6666;" class="svelte-2k82zv"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-2k82zv"><span style="color: #aaa;" class="svelte-2k82zv">Won:</span> <span style="color: #66ff66;" class="svelte-2k82zv"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 10px; 
    padding-top: 10px; 
    border-top: 1px solid #555;
    font-weight: bold;
    font-size: 18px;
  " class="svelte-2k82zv"><span style="color: #ffd700;" class="svelte-2k82zv">RTP:</span> <span class="svelte-2k82zv"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
  " class="svelte-2k82zv"><span style="color: #aaa;" class="svelte-2k82zv">Hit Freq:</span> <span class="svelte-2k82zv"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-size: 14px;
  " class="svelte-2k82zv"><span style="color: #aaa;" class="svelte-2k82zv">Free Spins Triggered:</span> <span style="color: #66ccff;" class="svelte-2k82zv"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 4px;
    font-size: 14px;
  " class="svelte-2k82zv"><span style="color: #aaa;" class="svelte-2k82zv">Free Spins Played:</span> <span style="color: #66ccff;" class="svelte-2k82zv"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #555;
    font-size: 14px;
  " class="svelte-2k82zv"><span style="color: #aaa;" class="svelte-2k82zv">Empty Slots:</span> <span style="color: #ff9900;" class="svelte-2k82zv"> </span></div> <button style="
      margin-top: 10px;
      width: 100%;
      padding: 5px;
      background: rgba(255, 100, 100, 0.3);
      color: #fff;
      border: 1px solid #ff6666;
      border-radius: 5px;
      cursor: pointer;
      font-size: 11px;
    " class="svelte-2k82zv">Reset Stats</button> <div style="
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  " class="svelte-2k82zv"><button class="svelte-2k82zv"> </button> <button class="svelte-2k82zv">Clear Win Log</button> <button class="svelte-2k82zv"> </button> <button class="svelte-2k82zv">🎰 Test Free Spins</button></div></div> <div style="
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1500;
" class="svelte-2k82zv"><!></div> <button class="svelte-2k82zv"> </button>  <div class="svelte-2k82zv"><img alt="Left End" class="svelte-2k82zv"> <div class="svelte-2k82zv"><div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-2k82zv"><div style="color: #00ff00; font-size: 12px; font-weight: bold;" class="svelte-2k82zv">BET</div> <div style="display: flex; gap: 5px; align-items: center;" class="svelte-2k82zv"><button title="Decrease Bet" class="svelte-2k82zv"></button> <div style="
          color: #fff;
          font-size: 18px;
          font-weight: bold;
          min-width: 80px;
          text-align: center;
          font-family: 'Courier New', monospace;
        " class="svelte-2k82zv"> </div> <button title="Increase Bet" class="svelte-2k82zv"></button></div></div> <img alt="Divider" class="svelte-2k82zv"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-2k82zv"><div style="color: #00ff00; font-size: 12px; font-weight: bold;" class="svelte-2k82zv">BALANCE</div> <div style="
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      " class="svelte-2k82zv"> </div></div> <img alt="Divider" class="svelte-2k82zv"> <div style="position: relative; display: flex; align-items: center; justify-content: center; flex-grow: 0.5;" class="svelte-2k82zv"><div><button title="SPIN" class="svelte-2k82zv"></button></div></div> <img alt="Divider" class="svelte-2k82zv"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-2k82zv"><button title="Autoplay" class="svelte-2k82zv"></button> <img alt="Status bar" style="width: 50px; height: auto;" class="svelte-2k82zv"></div> <img alt="Divider" class="svelte-2k82zv"> <div style="position: relative; display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-2k82zv"><button class="svelte-2k82zv"></button> <div style="
        color: #ffffff;
        font-size: 10px;
        font-weight: bold;
        text-transform: uppercase;
      " class="svelte-2k82zv"> </div> <!></div> <img alt="Divider" class="svelte-2k82zv"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-2k82zv"><button title="Fast Play" class="svelte-2k82zv"></button> <img alt="Status bar" style="width: 50px; height: auto;" class="svelte-2k82zv"></div> <img alt="Divider" class="svelte-2k82zv"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-2k82zv"><div style="color: #00ff00; font-size: 12px; font-weight: bold;" class="svelte-2k82zv">WIN</div> <div style="
        color: #ffd700;
        font-size: 20px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      " class="svelte-2k82zv"> </div></div> <img alt="Divider" class="svelte-2k82zv"> <button title="Menu" class="svelte-2k82zv"></button></div> <img alt="Right End" class="svelte-2k82zv"></div> <!></div></div>`,1);function bl(t,e){da(e,!0);const s=Zi.version,a=13,n=1445,o=1e3,i=1.75,l=-30,p=-10,v=160,f=0,m=750,g=80,z=250,T=-230,te=-390,G=1,L=1.1,P=.5,X=40,re=0,ce=-40,Se=1,de="height",fe=Math.round(100*i),se=Math.round(fe*(700/760)),xe=se+10,Ie=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],kt=typeof window<"u"&&window.location.hostname.includes("github.io"),ae=kt?"/web-sdk/oma-peli/symbols":`${ze}/symbols`,Z=kt?"/web-sdk/oma-peli/controls":`${ze}/controls`,Dt={a:`${ae}/Blue_hotrod.jpg`,b:`${ae}/Blue_jacket.jpg`,c:`${ae}/Blue_rollers.jpg`,d:`${ae}/Blue_speakers.jpg`,e:`${ae}/Premium_blonde.jpg`,f:`${ae}/Premium_brunette.jpg`,g:`${ae}/Premium_rocker.jpg`,h:`${ae}/New_Wild.jpg`,i:`${ae}/Red_burger.jpg`,j:`${ae}/Red_fries.jpg`,k:`${ae}/Red_milkshake.jpg`,l:`${ae}/Scatter.jpg`,emptyslot:`${ae}/Emptyslot.jpg`},Ut=`${ae}/bg_base.jpg`,ga=`${ae}/ReelFrames.png`,ma=`${ae}/RockABillyReels_logo.png`,Hr={spin:`${ze}/sounds/spin.mp3`,stop:`${ze}/sounds/stop.mp3`,win:`${ze}/sounds/win.mp3`};let Ee=R(!0),Gt={},H=null,he=null,Ht=null,Vt=null;const Vr=60/130,Yr=Math.round(Vr*60);let ye=R(!0),Xr=R(!1),At=R(!1),Yt=R(945),Xt=null,K=R("medium"),Ve=R(!1);const ba=Math.floor(Math.random()*20)+1,zt={background:`${ze}/music/rockabilly reels loop ${ba}.mp3`,freeSpins:`${ze}/music/rockabilly-loop_long.mp3`,drumHit:`${ze}/music/drum-hit.mp3`,winTheme:`${ze}/music/win-stinger.mp3`};function xa(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(xa,500);return}const c=window.Howl;try{H=new c({src:[zt.background],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+ba+")"),y(Xr,!0)},onloaderror:(u,w)=>{console.warn("⚠️ Background music not found:",w)}}),he=new c({src:[zt.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(u,w)=>console.warn("⚠️ Free spins music not found:",w)}),Ht=new c({src:[zt.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Vt=new c({src:[zt.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(u){console.error("Failed to initialize music system:",u)}}function ya(){const c=r(V)?he:H;c&&r(ye)&&!c.playing()&&(c.play(),console.log("🎵 "+(r(V)?"Free spins":"Background")+" music started"))}function Kr(){H&&H.playing()&&(H.fade(H.volume(),0,500),setTimeout(()=>H.stop(),500)),he&&he.playing()&&(he.fade(he.volume(),0,500),setTimeout(()=>he.stop(),500))}function Kt(){H&&H.playing()&&(H.fade(H.volume(),0,500),setTimeout(()=>H.stop(),500)),he&&he.playing()&&(he.fade(he.volume(),0,500),setTimeout(()=>he.stop(),500)),setTimeout(()=>{r(ye)&&ya()},600)}function Qr(){if(H&&H.playing()){const c=H.volume();H.fade(c,0,1e3),setTimeout(()=>{H.stop(),H.volume(.3)},1e3)}}let Qt=R(!1);function Zr(){y(Qt,!1),setTimeout(()=>{y(Qt,!0)},10)}let Ye=null;function qr(){y(ye,!r(ye)),r(ye)?ya():Kr()}function Jr(){Ht&&r(ye)&&r(Ee)&&Ht.play()}function en(){Vt&&r(ye)&&r(Ee)&&Vt.play()}let St=null,Xe=null,ft=null,ut=null,pt=R("Initializing..."),Ke=R(""),_e=[],Te=R(1e3),q=R(10);const _a=1,Zt=100;let ve=R(!1),Qe=R(0),je=R(!1),tn=R(0),De=!1,Le=null,qt=!1,Ze=R(0),qe=R(0),ht=R(0),Jt=R(0),es=Ue(()=>r(qe)>0?(r(ht)/r(qe)*100).toFixed(2):"0.00"),ts=Ue(()=>r(Ze)>0?(r(Jt)/r(Ze)*100).toFixed(2):"0.00"),V=R(!1),$e=R(0),Ce=R(0),Et=R(0),ss=R(0),Tt=R(0),as=R(0),sn=Ue(()=>r(Tt)>0?(r(as)/r(Tt)*100).toFixed(2):"0.00"),ge=R(be([]));function an(c,u,w){const h=new Date().toLocaleString("fi-FI");let _=`
${"=".repeat(60)}
`;_+=`ROUND #${c} - ${h}
`,_+=`Mode: ${r(V)?"FREE SPINS":"BASE GAME"}
`,_+=`${"=".repeat(60)}
`,u.forEach((k,E)=>{_+=`
Win ${E+1}:
`,_+=`  Symbol: ${k.symbol} (${za[k.symbol]})
`,_+=`  Count: ${k.count} symbols
`,_+=`  Multiplier: ${k.multiplier}x
`,_+=`  Payout: ${k.payout.toFixed(2)}
`,_+=`  Positions: [${k.positions.join(", ")}]
`}),_+=`
${"─".repeat(60)}
`,_+=`TOTAL WIN: ${w.toFixed(2)}
`,_+=`${"=".repeat(60)}
`,r(ge).push(_)}function rn(){const c=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${r(ge).join(`
`)}`,u=new Blob([c],{type:"text/plain"}),w=URL.createObjectURL(u),h=document.createElement("a");h.href=w,h.download=`win-log-${Date.now()}.txt`,h.click(),URL.revokeObjectURL(w)}function nn(){y(ge,be([]))}function on(){r(V)||(y(V,!0),y($e,10),y(Ce,0),Re(Et),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),Kt())}const ln={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},cn={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function wa(c){if(c===6)return Math.random()<.55?"h":"emptyslot";const u=r(V)?cn:ln,w=Math.random();let h=0;const _=Ie.filter(E=>E!=="h"),k=_.reduce((E,W)=>E+u[W],0);for(const E of _)if(h+=u[E]/k,w<h)return E;return"f"}function ka(){const c=[];for(let u=0;u<a;u++){const w=wa(u);c.push(w),Re(Tt),w==="emptyslot"&&Re(as)}return c}function Aa(c){return c<3?{col:0,row:c}:c<6?{col:1,row:c-3}:c===6?{col:2,row:0}:c<10?{col:3,row:c-7}:{col:4,row:c-10}}function vt(c,u){return c===0?u:c===1?3+u:c===2?6:c===3?7+u:c===4?10+u:-1}function dn(){if(r(V)){const c=Math.random();return c<.7?3:c<.92?5:10}else{const c=Math.random();return c<.7?1:c<.92?2:3}}const fn={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function un(){var U;const c=[],u=[];for(let S=0;S<a;S++)gt[S]==="l"&&u.push(S);if(u.length>=5){const S=u.length;y($e,r($e)+S),r(V)?console.log(`🎰 FREE SPINS RETRIGGERED! +${S} FREE SPINS! Total: ${r($e)}`):(y(V,!0),y(Ce,0),Re(Et),console.log(`🎰 FREE SPINS TRIGGERED! ${u.length} scatters = ${S} FREE SPINS!`),Kt()),c.push({symbol:"l",count:u.length,payout:0,positions:u,multiplier:1})}const w=[];for(let S=0;S<3;S++)for(let $=0;$<3;$++)for(let C=0;C<1;C++)for(let B=0;B<3;B++)for(let F=0;F<3;F++){const N=[vt(0,S),vt(1,$),vt(2,C),vt(3,B),vt(4,F)];w.push(N)}console.log(`Generated ${w.length} possible paths (should be 81)`);const h=[];for(const S of w){const $=S.map(N=>gt[N]);if($[0]==="emptyslot"||$[0]==="l")continue;let C=null;for(let N=0;N<$.length;N++)if($[N]!=="h"&&$[N]!=="emptyslot"&&$[N]!=="l"){C=$[N];break}if(!C)continue;let B=0;const F=new Set;for(let N=0;N<S.length;N++){const Fe=S[N],{col:rt}=Aa(Fe),ue=$[N];(ue===C||ue==="h")&&F.add(rt)}for(let N=0;N<5&&F.has(N);N++)B++;if(B>=3){const Fe=S[0]%3;h.push({symbol:C,length:B,path:S.slice(0,B),startRow:Fe})}}const _=[],k=new Map;for(const S of h){const $=`${S.symbol}-${S.path.join(",")}`;k.has($)||k.set($,[]),k.get($).push(S)}for(const[S,$]of k.entries()){const C=Math.max(...$.map(F=>F.length)),B=$.find(F=>F.length===C);B&&_.push(B)}const E=[],W=new Map;for(const S of _)W.has(S.symbol)||W.set(S.symbol,[]),W.get(S.symbol).push(S);const D=[];for(const[S,$]of W.entries()){const C=Math.max(...$.map(F=>F.length)),B=$.filter(F=>F.length===C);D.push(...B)}const J=new Map;for(const S of D){const $=`${S.symbol}-${S.length}`;J.has($)||J.set($,[]),J.get($).push(S)}const ee=D.length>0?dn():1;for(const[S,$]of J.entries()){const C=$[0],B=(U=fn[C.symbol])==null?void 0:U[C.length];if(B!==void 0&&B>0){const F=new Map;for(const ue of $)for(let oe=0;oe<ue.length;oe++)F.has(oe)||F.set(oe,new Set),F.get(oe).add(ue.path[oe]);let N=1;for(let ue=0;ue<C.length;ue++){const oe=F.get(ue);N*=oe?oe.size:1}const Fe=B*r(q)*N*ee;console.log(`  ${C.length}x${C.symbol}: ${N} ways × ${B}x × ${r(q)} bet × ${ee} mult = ${Fe}`);const rt=new Set;for(const ue of $)ue.path.forEach(oe=>rt.add(oe));E.push({symbol:C.symbol,count:C.length,payout:Fe,positions:Array.from(rt),multiplier:ee})}}return c.push(...E),c}let me=R(0),Je=R(be([])),Be=R(!1),et=R(!1);const za={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function rs(c){if(!r(Ee)||!Gt[c])return;const u=Gt[c];u.currentTime=0,u.play().catch(w=>{console.warn("Äänen toisto epäonnistui:",c,w)})}function pn(c){mt.forEach(u=>Y.stage.removeChild(u)),mt=[],c.forEach(u=>{u.positions.forEach(w=>{const h=tt[w],_=new Js().rect(0,0,fe,se).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});_.x=h.container.x,_.y=h.container.y,Y.stage.addChild(_),mt.push(_);let k=0,E=1;const W=.05;Y.ticker.add(()=>{k+=E*W,k>=.4&&(E=-1),k<=0&&(E=1),_.alpha=.5+k})})})}function ns(){mt.forEach(c=>Y.stage.removeChild(c)),mt=[]}let gt=ka(),os,Y,tt=[],mt=[];class hn{constructor(u,w){we(this,"index");we(this,"container");we(this,"offset",0);we(this,"speed",0);we(this,"targetSpeed",30);we(this,"state","idle");we(this,"stopDelay",0);we(this,"bounceOffset",0);we(this,"bounceSpeed",0);we(this,"bounceFrames",0);this.index=u,this.container=w}start(u){this.state="spinning",this.speed=0,r(K)==="slow"?this.targetSpeed=20:r(K)==="medium"?this.targetSpeed=35:this.targetSpeed=50,this.stopDelay=u}startSynchronized(u){const w=60+u*Yr;this.start(w)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const u=r(K)==="slow"?.88:r(K)==="medium"?.92:.95;this.speed*=u,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,rs("stop"),Jr())}this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=xe&&(this.offset=0,gt[this.index]=wa(this.index)))}}draw(){const u=this.container;u.removeChildren();const w=gt[this.index];if(!w||!St||!St[w])return;const h=St[w];if(!h)return;const _=this.offset+this.bounceOffset,k=new It(h);k.width=fe,k.height=se,k.x=0,k.y=_,u.addChild(k)}}let Sa=R(1);Sr(async()=>{Y=new Mr,await Y.init({width:n,height:o,background:"#001a33"}),os.appendChild(Y.canvas);const c=()=>{const h=window.innerWidth,_=window.innerHeight,k=h/n,E=_/o,W=Math.min(k,E);y(Sa,be(W))};c(),window.addEventListener("resize",c);const u={};try{y(pt,"Loading background and UI images..."),_e.push(`Loading background: ${Ut}`),_e.push(`Loading reel frames: ${ga}`),_e.push(`Loading logo: ${ma}`),await nt.load([{alias:"background",src:Ut},{alias:"reelframes",src:ga},{alias:"logo",src:ma}]),Xe=Ge.from("background"),ft=Ge.from("reelframes"),ut=Ge.from("logo"),console.log("✅ Background texture created:",Xe.width,"x",Xe.height),console.log("✅ Reel frames texture created:",ft.width,"x",ft.height),console.log("✅ Logo texture created:",ut.width,"x",ut.height),_e.push("✅ All UI images loaded"),y(pt,"Loading symbols...");const h=[];for(const _ of Ie)h.push({alias:_,src:Dt[_]});await nt.load(h);for(const _ of Ie){const k=Dt[_];_e.push(`Loading symbol ${_}: ${k}`);try{const E=Ge.from(_);u[_]=E,console.log(`✅ Symbol ${_} loaded:`,E.width,"x",E.height),_e.push(`✅ Symbol ${_} loaded`)}catch(E){const W=`❌ Failed to load symbol ${_} from ${k}: ${E}`;throw _e.push(W),console.error(W),new Error(W)}}St=u,y(pt,"Assets loaded successfully!")}catch(h){y(Ke,`Asset loading failed: ${h}`),_e.push(r(Ke)),console.error(r(Ke));return}console.log("Ladataan ääniefektit...");for(const[h,_]of Object.entries(Hr)){const k=new Audio;k.src=_,k.preload="auto",k.volume=.7,k.load(),k.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${_} (käytetään hiljaista placeholderia)`)}),Gt[h]=k}if(console.log("Taustakuva ladattu, tekstuuri:",Xe),Xe){const h=new It(Xe);Y.renderer.width/Y.renderer.height;const _=h.texture.width/h.texture.height;let k;k=Y.renderer.height/h.texture.height,k*=Se,h.scale.set(k),h.x=(Y.renderer.width-h.width)/2,h.y=(Y.renderer.height-h.height)/2+ce,Y.stage.addChild(h),console.log("Taustakuva lisätty:",de,"mode, size:",h.width.toFixed(0),"x",h.height.toFixed(0),"image aspect:",_.toFixed(2),"scale:",k.toFixed(2),"pos:",h.x.toFixed(0),h.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(h=>({x:h.x+l,y:h.y+p})),tt=[];for(let h=0;h<a;h++){const _=Aa(h),k=_.col,E=_.row,W=300+k*(fe+20),D=250+E*(se+15),J=h===6?W+f:W,ee=h===6?D+v:D,U=new ua;U.x=J+l,U.y=ee+p;const S=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],$=new Js().rect(0,0,fe,se).fill({color:S[h],alpha:.3});$.x=U.x,$.y=U.y,Y.stage.addChild($);const C=new Lr({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),B=new Ki({text:h.toString(),style:C});B.x=U.x+5,B.y=U.y+5,Y.stage.addChild(B);const F=new Js().rect(0,0,fe,se).fill(16777215);F.x=U.x,F.y=U.y,U.mask=F,Y.stage.addChild(F),Y.stage.addChild(U),tt.push(new hn(h,U))}if(ft){const h=new It(ft);h.scale.set(1),h.x=250,h.y=200,Y.stage.addChild(h),Xt=h,y(Yt,be(h.width)),console.log("Reel frames lisätty:",h.width.toFixed(0),"x",h.height.toFixed(0)),console.log("Control panel leveys päivitetty:",r(Yt).toFixed(0))}if(ut){const h=new It(ut);h.scale.set(P),h.x=(Y.renderer.width-h.width)/2+X,h.y=re,Y.stage.addChild(h),console.log("Logo lisätty päällimmäiseen layeriin:",h.width.toFixed(0),"x",h.height.toFixed(0))}xa(),Y.ticker.add(vn)});function vn(){for(const c of tt)c.update(),c.draw();if(!r(Be)&&!qt&&tt.every(c=>c.state==="stopped")){qt=!0,Qr();const c=un();console.log(`Checking wins, found ${c.length} wins`),c.length>0?(y(Je,be(c)),y(me,be(c.reduce((u,w)=>u+w.payout,0))),an(r(Ze),c,r(me)),gn(r(me)),y(Be,!0),y(tn,be(Date.now())),console.log(`🎉 VOITTO! ${r(me)} pistettä! Uusi saldo: ${r(Te)}`),console.log(`isShowingWin set to: ${r(Be)}, totalWin: ${r(me)}`),c.forEach(u=>{const w=u.multiplier?` (${u.multiplier}x multiplier)`:"";console.log(`${u.count}x ${u.symbol} = ${u.payout} pistettä${w}`)}),pn(c),rs("win"),r(ve)&&!De&&(De=!0,Le=window.setTimeout(()=>{r(Be)&&r(ve)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),y(Be,!1),ns()),Le=window.setTimeout(()=>{De=!1,ls()},200)},1500))):(console.log("No wins found this spin"),r(ve)&&!De&&(De=!0,Le=window.setTimeout(()=>{De=!1,ls()},1e3))),r(V)&&r($e)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${r(Ce)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${r(Ce).toFixed(2)}`),y(V,!1),y(Ce,0),Kt()},2e3))}}function Ea(){if(H&&r(ye)&&!H.playing()&&(H.play(),console.log("🎵 Background music started on first spin")),Zr(),r(V)&&r($e)>0)Re($e,-1),Re(ss),console.log(`🎰 FREE SPIN! Remaining: ${r($e)}`);else if(!r(V)){if(r(Te)<r(q)){alert(`Not enough credits! Balance: ${r(Te)}, Bet: ${r(q)}`),is();return}y(Te,r(Te)-r(q)),Re(Ze),y(qe,r(qe)+r(q))}Le!==null&&(clearTimeout(Le),Le=null),y(Je,be([])),y(me,0),y(Be,!1),qt=!1,ns(),gt=ka(),tt.forEach((c,u)=>{c.startSynchronized(u)}),rs("spin")}function gn(c){if(y(Te,r(Te)+c),y(ht,r(ht)+c),r(V)&&y(Ce,r(Ce)+c),c>0){Re(Jt);const u=c/r(q);u>=10&&en(),Ye&&(u>=50?Ye.show():u>=20?setTimeout(()=>Ye.show(),200):u>=10&&setTimeout(()=>Ye.show(),400))}}function Ta(){r(q)<Zt&&y(q,be(Math.min(r(q)+1,Zt)))}function La(){r(q)>_a&&y(q,be(Math.max(r(q)-1,_a)))}function mn(){y(q,Zt)}function bt(c){y(ve,!0),y(Qe,be(c)),y(je,!1),ls()}function is(){y(ve,!1),y(Qe,0),De=!1,Le!==null&&(clearTimeout(Le),Le=null)}function ls(){if(!r(ve)||r(Qe)<=0){is();return}console.log(`Autoplay: Starting spin ${r(Qe)} rounds left`),Ea(),Re(Qe,-1)}function bn(){confirm("Reset all statistics?")&&(y(Ze,0),y(qe,0),y(ht,0),y(Jt,0),y(Et,0),y(ss,0),y(Tt,0),y(as,0))}var $a=ml();$o(c=>{var u=al();d(Oe(u)),j(c,u)});var Ra=Oe($a);{var xn=c=>{var u=il(),w=d(b(u),2),h=d(b(w));x(w);var _=d(w,2);{var k=C=>{var B=rl(),F=d(b(B));x(B),ie(()=>M(F,` ${r(Ke)??""}`)),j(C,B)};le(_,C=>{r(Ke)&&C(k)})}var E=d(_,2),W=d(b(E));W.nodeValue=` ${ze??""}`,x(E);var D=d(E,2),J=d(b(D));J.nodeValue=` ${Ut??""}`,x(D);var ee=d(D,2),U=d(b(ee));x(ee);var S=d(ee,2);{var $=C=>{var B=ol(),F=b(B),N=b(F);x(F);var Fe=d(F,2);Nt(Fe,17,()=>_e,Wt,(rt,ue)=>{var oe=nl(),Zn=b(oe,!0);x(oe),ie(()=>M(Zn,r(ue))),j(rt,oe)}),x(B),ie(()=>M(N,`Log (${_e.length??""})`)),j(C,B)};le(S,C=>{_e.length>0&&C($)})}x(u),ie(()=>{M(h,` ${r(pt)??""}`),M(U,` ${Dt.a??""}`)}),j(c,u)};le(Ra,c=>{(r(pt)!=="Assets loaded successfully!"||r(Ke))&&c(xn)})}var Pa=d(Ra,2);{var yn=c=>{var u=dl(),w=d(b(u),2),h=b(w);x(w);var _=d(w,2);Nt(_,17,()=>r(Je),Wt,(D,J)=>{var ee=ll(),U=b(ee);x(ee),ie(S=>M(U,`${r(J).count??""} × ${za[r(J).symbol]??""} = ${S??""} pistettä`),[()=>r(J).payout.toFixed(2)]),j(D,ee)});var k=d(_,2);{var E=D=>{var J=cl(),ee=b(J),U=b(ee);x(ee),x(J),ie(()=>M(U,`✨ ${r(Je)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),j(D,J)};le(k,D=>{r(Je).length>0&&r(Je)[0].multiplier>1&&D(E)})}var W=d(k,2);x(u),ie(()=>M(h,`${r(me)??""} pistettä`)),O("click",W,()=>{y(Be,!1),ns(),console.log("Win popup closed, ready for next spin")}),j(c,u)};le(Pa,c=>{r(me)>0&&r(Be)&&c(yn)})}var Oa=d(Pa,2);{var _n=c=>{var u=fl(),w=d(b(u),8);x(u),O("click",w,()=>{y(et,!1)}),j(c,u)};le(Oa,c=>{r(et)&&c(_n)})}var Ia=d(Oa,2),cs=b(Ia),ds=b(cs);A(ds,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${n}px;
        height: ${o}px;
      `),cr(ds,c=>os=c,()=>os);var Lt=d(ds,2),Ca=b(Lt);{var wn=c=>{var u=ul(),w=Oe(u),h=d(b(w),2),_=b(h,!0);x(h),x(w);var k=d(w,2),E=d(b(k),2),W=b(E,!0);x(E),x(k),ie(D=>{M(_,r($e)),M(W,D)},[()=>r(Ce).toFixed(2)]),j(c,u)};le(Ca,c=>{r(V)&&c(wn)})}var fs=d(Ca,2),Ba=d(b(fs),2),kn=b(Ba,!0);x(Ba),x(fs);var Fa=d(fs,2),Ma=d(b(Fa),2),An=b(Ma,!0);x(Ma),x(Fa),x(Lt);var us=d(Lt,2),Wa=d(b(us),2),Na=b(Wa),ps=d(Na,2),zn=b(ps,!0);x(ps);var ja=d(ps,2),Sn=d(ja,2);x(Wa),x(us);var Da=d(us,2),hs=d(Da,2),Ua=d(b(hs),2);Ua.textContent=`v${s}`;var vs=d(Ua,2),Ga=d(b(vs),2),En=b(Ga,!0);x(Ga),x(vs);var gs=d(vs,2),Ha=d(b(gs),2),Tn=b(Ha,!0);x(Ha),x(gs);var ms=d(gs,2),Va=d(b(ms),2),Ln=b(Va,!0);x(Va),x(ms);var bs=d(ms,2),xs=d(b(bs),2),$n=b(xs);x(xs),x(bs);var ys=d(bs,2),_s=d(b(ys),2),Rn=b(_s);x(_s),x(ys);var ws=d(ys,2),Ya=d(b(ws),2),Pn=b(Ya,!0);x(Ya),x(ws);var ks=d(ws,2),Xa=d(b(ks),2),On=b(Xa,!0);x(Xa),x(ks);var As=d(ks,2),Ka=d(b(As),2),In=b(Ka);x(Ka),x(As);var Qa=d(As,2),Za=d(Qa,2),st=b(Za),Cn=b(st);x(st);var $t=d(st,2),xt=d($t,2),Bn=b(xt);x(xt);var zs=d(xt,2);x(Za),x(hs);var Ss=d(hs,2),Fn=b(Ss);{var Mn=c=>{var u=pl(),w=d(b(u),2),h=b(w);x(w);var _=d(w,2);x(u),ie(()=>M(h,`${r(Qe)??""} left`)),O("click",_,is),j(c,u)},Wn=c=>{var u=vl(),w=Oe(u),h=d(w,2);{var _=k=>{var E=hl(),W=d(b(E),2),D=d(W,2),J=d(D,2),ee=d(J,2),U=d(ee,2),S=d(U,2);x(E),O("click",W,()=>bt(10)),O("click",D,()=>bt(100)),O("click",J,()=>bt(1e3)),O("click",ee,()=>bt(1e4)),O("click",U,()=>bt(1e5)),O("click",S,()=>{y(je,!1)}),j(k,E)};le(h,k=>{r(je)&&k(_)})}O("click",w,()=>{y(je,!r(je))}),j(c,u)};le(Fn,c=>{r(ve)?c(Mn):c(Wn,!1)})}x(Ss);var at=d(Ss,2),Nn=b(at,!0);x(at);var Rt=d(at,2),Es=b(Rt);A(Es,"src",`${Z??""}/Control_leftend.png`),A(Es,"style",`height: ${g}px; flex-shrink: 0;`);var Pt=d(Es,2);A(Pt,"style",`
    flex-grow: 1;
    height: ${g}px;
    background-image: url('${Z??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 20px;
  `);var Ts=b(Pt),qa=d(b(Ts),2),Ls=b(qa);A(Ls,"style",`
            width: 40px;
            height: 40px;
            background-image: url('${Z??""}/Control_lowerbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `);var $s=d(Ls,2),jn=b($s,!0);x($s);var Ja=d($s,2);A(Ja,"style",`
            width: 40px;
            height: 40px;
            background-image: url('${Z??""}/Control_upperbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(qa),x(Ts);var Rs=d(Ts,2);A(Rs,"src",`${Z??""}/Control_divider.png`),A(Rs,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Ps=d(Rs,2),er=d(b(Ps),2),Dn=b(er,!0);x(er),x(Ps);var Os=d(Ps,2);A(Os,"src",`${Z??""}/Control_divider.png`),A(Os,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Is=d(Os,2),Cs=b(Is),Bs=b(Cs);x(Cs),x(Is);var Fs=d(Is,2);A(Fs,"src",`${Z??""}/Control_divider.png`),A(Fs,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Ms=d(Fs,2),Ws=b(Ms),Un=d(Ws,2);x(Ms);var Ns=d(Ms,2);A(Ns,"src",`${Z??""}/Control_divider.png`),A(Ns,"style",`height: ${g*.8}px; flex-shrink: 0;`);var js=d(Ns,2),Ot=b(js);A(Ot,"style",`
          width: 50px;
          height: 50px;
          background-image: url('${Z??""}/Control_fastplay_select.png');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `);var Ds=d(Ot,2),Gn=b(Ds,!0);x(Ds);var Hn=d(Ds,2);{var Vn=c=>{var u=gl(),w=d(b(u),2),h=d(w,2),_=d(h,2);x(u),ie(()=>{A(w,"style",`
              background: ${(r(K)==="slow"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: 2px solid ${(r(K)==="slow"?"#ffd700":"#666")??""};
              color: ${(r(K)==="slow"?"#ffd700":"#ffffff")??""};
              padding: 8px 20px;
              border-radius: 5px;
              cursor: pointer;
              font-weight: bold;
              font-size: 12px;
              transition: all 0.2s;
            `),A(h,"style",`
              background: ${(r(K)==="medium"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: 2px solid ${(r(K)==="medium"?"#ffd700":"#666")??""};
              color: ${(r(K)==="medium"?"#ffd700":"#ffffff")??""};
              padding: 8px 20px;
              border-radius: 5px;
              cursor: pointer;
              font-weight: bold;
              font-size: 12px;
              transition: all 0.2s;
            `),A(_,"style",`
              background: ${(r(K)==="fast"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: 2px solid ${(r(K)==="fast"?"#ffd700":"#666")??""};
              color: ${(r(K)==="fast"?"#ffd700":"#ffffff")??""};
              padding: 8px 20px;
              border-radius: 5px;
              cursor: pointer;
              font-weight: bold;
              font-size: 12px;
              transition: all 0.2s;
            `)}),O("click",w,()=>{y(K,"slow"),y(Ve,!1)}),O("click",h,()=>{y(K,"medium"),y(Ve,!1)}),O("click",_,()=>{y(K,"fast"),y(Ve,!1)}),j(c,u)};le(Hn,c=>{r(Ve)&&c(Vn)})}x(js);var Us=d(js,2);A(Us,"src",`${Z??""}/Control_divider.png`),A(Us,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Gs=d(Us,2),Hs=b(Gs),Yn=d(Hs,2);x(Gs);var Vs=d(Gs,2);A(Vs,"src",`${Z??""}/Control_divider.png`),A(Vs,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Ys=d(Vs,2),tr=d(b(Ys),2),Xn=b(tr,!0);x(tr),x(Ys);var Xs=d(Ys,2);A(Xs,"src",`${Z??""}/Control_divider.png`),A(Xs,"style",`height: ${g*.8}px; flex-shrink: 0;`);var sr=d(Xs,2);A(sr,"style",`
        width: 50px;
        height: 50px;
        background-image: url('${Z??""}/Control_menubar.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),x(Pt);var ar=d(Pt,2);A(ar,"src",`${Z??""}/Control_rightend.png`),A(ar,"style",`height: ${g}px; flex-shrink: 0;`),x(Rt);var Kn=d(Rt,2);const Qn=Ue(()=>r(me)/r(q)>=50?"jackpot":r(me)/r(q)>=20?"medium":"small");cr(sl(Kn,{get winLevel(){return r(Qn)},get winAmount(){return r(me)}}),c=>Ye=c,()=>Ye),x(cs),x(Ia),ie((c,u,w,h,_,k,E,W,D)=>{A(cs,"style",`
    position: relative;
    width: ${n}px;
    height: ${o}px;
    max-width: 100vw;
    max-height: 100vh;
    transform: scale(${r(Sa)??""});
    transform-origin: center center;
  `),A(Lt,"style",`
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
      border: 2px solid ${(r(V)?"#ff00ff":"#ffd700")??""};
      box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
      z-index: 1500;
      min-width: 180px;
    `),M(kn,c),M(An,r(q)),M(zn,r(q)),M(En,u),M(Tn,w),M(Ln,h),A(xs,"style",`color: ${_??""};`),M($n,`${r(es)??""}%`),A(_s,"style",`color: ${k??""};`),M(Rn,`${r(ts)??""}%`),M(Pn,r(Et)),M(On,r(ss)),M(In,`${r(sn)??""}%`),st.disabled=r(ge).length===0,A(st,"style",`
        width: 100%;
        padding: 5px;
        background: ${(r(ge).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(r(ge).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(r(ge).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(r(ge).length>0?"1":"0.5")??""};
      `),M(Cn,`Download Win Log (${r(ge).length??""})`),$t.disabled=r(ge).length===0,A($t,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(r(ge).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(r(ge).length>0?"1":"0.5")??""};
      `),A(xt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(r(ye)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(r(ye)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),M(Bn,`🎵 Music: ${(r(ye)?"ON":"OFF")??""}`),zs.disabled=r(V),A(zs,"style",`
        width: 100%;
        padding: 5px;
        background: ${(r(V)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(r(V)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(r(V)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(r(V)?"0.5":"1")??""};
      `),A(at,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(r(Ee)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(r(Ee)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),A(at,"title",r(Ee)?"Mykistä äänet":"Laita äänet päälle"),M(Nn,r(Ee)?"🔊":"🔇"),A(Rt,"style",`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(
    calc(-50% + ${(Xt?Xt.x:z)+T}px),
    calc(-50% + ${m+te}px)
  ) scale(${G}, ${L});
  transform-origin: center center;
  width: ${r(Yt)??""}px;
  height: ${g}px;
  display: flex;
  align-items: center;
  z-index: 1000;
`),M(jn,E),M(Dn,W),oa(Cs,1,`play-button-wrapper ${(r(Qt)?"glare-animate":"")??""}`,"svelte-2k82zv"),Bs.disabled=r(ve),A(Bs,"style",`
            width: 130px;
            height: 130px;
            background-image: url('${Z??""}/Control_playbutton.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border: none;
            cursor: ${(r(ve)?"not-allowed":"pointer")??""};
            background-color: transparent;
            opacity: ${(r(ve)?.5:1)??""};
            position: relative;
            z-index: 10;
            border-radius: 50%;
          `),A(Ws,"style",`
          width: 50px;
          height: 50px;
          background-image: url('${Z??""}/${(r(ve)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),A(Un,"src",`${Z??""}/${(r(ve)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),A(Ot,"title",`Spin Speed: ${(r(K)==="slow"?"Slow":r(K)==="medium"?"Medium":"Fast")??""}`),M(Gn,r(K)==="slow"?"Slow":r(K)==="medium"?"Med":"Fast"),A(Hs,"style",`
          width: 50px;
          height: 50px;
          background-image: url('${Z??""}/${(r(At)?"Control_fastplay_select.png":"Control_fastplay_deselect.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),A(Yn,"src",`${Z??""}/${(r(At)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),M(Xn,D)},[()=>r(Te).toLocaleString(),()=>r(Ze).toLocaleString(),()=>r(qe).toLocaleString(),()=>r(ht).toLocaleString(),()=>parseFloat(r(es))>=95?"#00ff00":parseFloat(r(es))>=85?"#ffff00":"#ff6666",()=>parseFloat(r(ts))>=30?"#00ff00":parseFloat(r(ts))>=20?"#ffff00":"#ff6666",()=>r(q).toFixed(2),()=>r(Te).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>r(me).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),O("click",Na,La),O("click",ja,Ta),O("click",Sn,mn),O("click",Da,()=>{y(et,!r(et))}),O("click",Qa,bn),O("click",st,rn),O("click",$t,nn),O("click",xt,qr),O("click",zs,on),O("click",at,()=>{y(Ee,!r(Ee))}),O("click",Ls,La),O("click",Ja,Ta),O("click",Bs,Ea),O("click",Ws,()=>{y(je,!r(je))}),O("click",Ot,()=>{y(Ve,!r(Ve))}),O("click",Hs,()=>{y(At,!r(At))}),O("click",sr,()=>{y(et,!r(et))}),j(t,$a),fa()}var xl=Q('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),yl=Q('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function _l(t,e){da(e,!1);let s=na(e,"isAuthenticated",12,!1),a=ra(""),n=ra(!1);const o="slot2024";function i(){r(a)===o?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(y(n,!0),y(a,""),setTimeout(()=>y(n,!1),3e3))}Sr(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),ao();var l=_r(),p=Oe(l);{var v=f=>{var m=yl(),g=b(m),z=d(b(g),4),T=b(z);Go(T),Lo(2),x(z);var te=d(z,2);{var G=L=>{var P=xl();j(L,P)};le(te,L=>{r(n)&&L(G)})}x(g),x(m),Vo(T,()=>r(a),L=>y(a,L)),O("submit",z,Yo(i)),j(f,m)};le(p,f=>{s()||f(v)})}j(t,l),fa()}var wl=Q('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),kl=Q("<!> <!>",1);function Bl(t){let e=ra(!1);var s=kl(),a=Oe(s);_l(a,{get isAuthenticated(){return r(e)},set isAuthenticated(i){y(e,i)},$$legacy:!0});var n=d(a,2);{var o=i=>{var l=wl(),p=d(Oe(l),2);bl(p,{}),j(i,l)};le(n,i=>{r(e)&&i(o)})}j(t,s)}export{Ir as A,Rr as C,ti as R,Qo as S,Cr as V,Bl as _,Ko as u};
