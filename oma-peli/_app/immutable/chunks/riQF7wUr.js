const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BOJXKfvH.js","./Cb0119l1.js","./BrW7ntrJ.js","./Fx7Xcyif.js","./CkL9UklL.js","./C2GHuDhf.js","./CSHPpcrU.js","./DLHcUPuG.js"])))=>i.map(i=>d[i]);
var Nn=Object.defineProperty;var Dn=(s,e,a)=>e in s?Nn(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var Se=(s,e,a)=>Dn(s,typeof e!="symbol"?e+"":e,a);import{g as Un,l as Gn,e as Gt,a as V,t as ee,n as kr,i as B,j as Hn,k as Vn}from"./CsxIJThA.js";import{i as Yn}from"./DqfWCwGf.js";import{y as Le,j as Xn,a8 as Kn,F as t,Q as qn,aa as Qn,ab as nr,h as or,e as Zs,k as $t,l as Jn,ac as Ar,w as $r,ad as Zn,q as Sr,a7 as eo,U as to,a2 as ir,ar as ea,z as lr,as as so,at as ao,au as ro,o as no,av as oo,aw as io,ax as lo,ay as co,b as fo,az as po,aA as uo,a6 as go,aB as ho,aC as vo,D as mo,L as bo,p as Yt,f as Xe,ah as P,a as Xt,T as g,c as w,s as p,r as _,t as ne,I as He,ag as ha,aD as Ee,aE as Er,aF as la}from"./Fx7Xcyif.js";import{_ as cr,i as se,p as he}from"./BrW7ntrJ.js";import{s as q}from"./DfoPkomP.js";import{p as it,b as dr}from"./C4w3i6Q0.js";import{b as xe}from"./C9L5N0oD.js";import{e as Ye,E as z,a as yo,C as va,Q as ca,V as da,N as ta,D as ve,H as xo,p as Je,a0 as ft,a1 as Ze,a2 as wo,w as Ve,a3 as Et,a4 as Lr,a5 as pt,a6 as Fe,a7 as Kt,a8 as Tr,a9 as _o,aa as sa,y as aa}from"./Cb0119l1.js";import{A as ko,B as fr,G as Ao,a as pr}from"./CkL9UklL.js";function Ht(s,e){return e}function $o(s,e,a,r){for(var n=[],i=e.length,l=0;l<i;l++)ro(e[l].e,n,!0);var d=i>0&&n.length===0&&a!==null;if(d){var v=a.parentNode;no(v),v.append(a),r.clear(),Ge(s,e[0].prev,e[i-1].next)}oo(n,()=>{for(var y=0;y<i;y++){var u=e[y];d||(r.delete(u.k),Ge(s,u.prev,u.next)),io(u.e,!d)}})}function Vt(s,e,a,r,n,i=null){var l=s,d={flags:e,items:new Map,first:null};Le&&Xn();var v=null,y=!1,u=qn(()=>{var m=a();return eo(m)?m:m==null?[]:Sr(m)});Kn(()=>{var m=t(u),b=m.length;if(y&&b===0)return;y=b===0;let L=!1;if(Le){var T=l.data===Qn;T!==(b===0)&&(l=nr(),or(l),Zs(!1),L=!0)}if(Le){for(var Q=null,F,R=0;R<b;R++){if($t.nodeType===8&&$t.data===Jn){l=$t,L=!0,Zs(!1);break}var H=m[R],oe=r(H,R);F=Rr($t,d,Q,null,H,oe,R,n,e,a),d.items.set(oe,F),Q=F}b>0&&or(nr())}Le||So(m,d,l,n,e,r,a),i!==null&&(b===0?v?Ar(v):v=$r(()=>i(l)):v!==null&&Zn(v,()=>{v=null})),L&&Zs(!0),t(u)}),Le&&(l=$t)}function So(s,e,a,r,n,i,l){var d=s.length,v=e.items,y=e.first,u=y,m,b=null,L=[],T=[],Q,F,R,H;for(H=0;H<d;H+=1){if(Q=s[H],F=i(Q,H),R=v.get(F),R===void 0){var oe=u?u.e.nodes_start:a;b=Rr(oe,e,b,b===null?e.first:b.next,Q,F,H,r,n,l),v.set(F,b),L=[],T=[],u=b.next;continue}if(Eo(R,Q,H),(R.e.f&ea)!==0&&Ar(R.e),R!==u){if(m!==void 0&&m.has(R)){if(L.length<T.length){var ie=T[0],X;b=ie.prev;var pe=L[0],ue=L[L.length-1];for(X=0;X<L.length;X+=1)ur(L[X],ie,a);for(X=0;X<T.length;X+=1)m.delete(T[X]);Ge(e,pe.prev,ue.next),Ge(e,b,pe),Ge(e,ue,ie),u=ie,b=ue,H-=1,L=[],T=[]}else m.delete(R),ur(R,u,a),Ge(e,R.prev,R.next),Ge(e,R,b===null?e.first:b.next),Ge(e,b,R),b=R;continue}for(L=[],T=[];u!==null&&u.k!==F;)(u.e.f&ea)===0&&(m??(m=new Set)).add(u),T.push(u),u=u.next;if(u===null)continue;R=u}L.push(R),b=R,u=R.next}if(u!==null||m!==void 0){for(var we=m===void 0?[]:Sr(m);u!==null;)(u.e.f&ea)===0&&we.push(u),u=u.next;var Ie=we.length;if(Ie>0){var Y=null;$o(e,we,Y,v)}}lr.first=e.first&&e.first.e,lr.last=b&&b.e}function Eo(s,e,a,r){ao(s.v,e),s.i=a}function Rr(s,e,a,r,n,i,l,d,v,y){var u=(v&lo)!==0,m=(v&co)===0,b=u?m?to(n):ir(n):n,L=(v&so)===0?l:ir(l),T={i:L,v:b,k:i,a:null,e:null,prev:a,next:r};try{return T.e=$r(()=>d(s,b,L,y),Le),T.e.prev=a&&a.e,T.e.next=r&&r.e,a===null?e.first=T:(a.next=T,a.e.next=T.e),r!==null&&(r.prev=T,r.e.prev=T.e),T}finally{}}function ur(s,e,a){for(var r=s.next?s.next.e.nodes_start:a,n=e?e.e.nodes_start:a,i=s.e.nodes_start;i!==r;){var l=fo(i);n.before(i),i=l}}function Ge(s,e,a){e===null?s.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}const gr=[...` 	
\r\f \v\uFEFF`];function Lo(s,e,a){var r=s==null?"":""+s;if(e&&(r=r?r+" "+e:e),a){for(var n in a)if(a[n])r=r?r+" "+n:n;else if(r.length)for(var i=n.length,l=0;(l=r.indexOf(n,l))>=0;){var d=l+i;(l===0||gr.includes(r[l-1]))&&(d===r.length||gr.includes(r[d]))?r=(l===0?"":r.substring(0,l))+r.substring(d+1):l=d}}return r===""?null:r}function fa(s,e,a,r,n,i){var l=s.__className;if(Le||l!==a){var d=Lo(a,r,i);(!Le||d!==s.getAttribute("class"))&&(d==null?s.removeAttribute("class"):e?s.className=d:s.setAttribute("class",d)),s.__className=a}else if(i)for(var v in i){var y=!!i[v];(n==null||y!==!!n[v])&&s.classList.toggle(v,y)}return i}function To(s){if(Le){var e=!1,a=()=>{if(!e){if(e=!0,s.hasAttribute("value")){var r=s.value;x(s,"value",null),s.value=r}if(s.hasAttribute("checked")){var n=s.checked;x(s,"checked",null),s.checked=n}}};s.__on_r=a,po(a),Un()}}function x(s,e,a,r){var n=s.__attributes??(s.__attributes={});Le&&(n[e]=s.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&s.nodeName==="LINK")||n[e]!==(n[e]=a)&&(e==="style"&&"__styles"in s&&(s.__styles={}),e==="loading"&&(s[uo]=a),a==null?s.removeAttribute(e):typeof a!="string"&&Ro(s).includes(e)?s[e]=a:s.setAttribute(e,a))}var hr=new Map;function Ro(s){var e=hr.get(s.nodeName);if(e)return e;hr.set(s.nodeName,e=[]);for(var a,r=s,n=Element.prototype;n!==r;){a=ho(r);for(var i in a)a[i].set&&e.push(i);r=go(r)}return e}function Po(s,e,a=e){var r=vo();Gn(s,"input",n=>{var i=n?s.defaultValue:s.value;if(i=ra(s)?na(i):i,a(i),r&&i!==(i=e())){var l=s.selectionStart,d=s.selectionEnd;s.value=i??"",d!==null&&(s.selectionStart=l,s.selectionEnd=Math.min(d,s.value.length))}}),(Le&&s.defaultValue!==s.value||mo(e)==null&&s.value)&&a(ra(s)?na(s.value):s.value),bo(()=>{var n=e();ra(s)&&n===na(s.value)||s.type==="date"&&!n&&!s.value||n!==s.value&&(s.value=n??"")})}function ra(s){var e=s.type;return e==="number"||e==="range"}function na(s){return s===""?null:+s}function Io(s){return function(...e){var a=e[0];return a.preventDefault(),s==null?void 0:s.apply(this,e)}}const pa=[];Ye.handleByNamedList(z.Environment,pa);async function Oo(s){if(!s)for(let e=0;e<pa.length;e++){const a=pa[e];if(a.value.test()){await a.value.load();return}}}let St;function Co(){if(typeof St=="boolean")return St;try{St=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{St=!1}return St}var Pr=(s=>(s[s.NONE=0]="NONE",s[s.COLOR=16384]="COLOR",s[s.STENCIL=1024]="STENCIL",s[s.DEPTH=256]="DEPTH",s[s.COLOR_DEPTH=16640]="COLOR_DEPTH",s[s.COLOR_STENCIL=17408]="COLOR_STENCIL",s[s.DEPTH_STENCIL=1280]="DEPTH_STENCIL",s[s.ALL=17664]="ALL",s))(Pr||{});class Bo{constructor(e){this.items=[],this._name=e}emit(e,a,r,n,i,l,d,v){const{name:y,items:u}=this;for(let m=0,b=u.length;m<b;m++)u[m][y](e,a,r,n,i,l,d,v);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const a=this.items.indexOf(e);return a!==-1&&this.items.splice(a,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Mo=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Ir=class Or extends yo{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const a=[...Mo,...this.config.runners??[]];this._addRunners(...a),this._unsafeEvalCheck()}async init(e={}){const a=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Oo(a),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const r in this._systemsHash)e={...this._systemsHash[r].constructor.defaultOptions,...e};e={...Or.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let r=0;r<this.runners.init.items.length;r++)await this.runners.init.items[r].init(e);this._initOptions=e}render(e,a){let r=e;if(r instanceof va&&(r={container:r},a&&(ca(da,"passing a second argument is deprecated, please use render options instead"),r.target=a.renderTexture)),r.target||(r.target=this.view.renderTarget),r.target===this.view.renderTarget&&(this._lastObjectRendered=r.container,r.clearColor??(r.clearColor=this.background.colorRgba),r.clear??(r.clear=this.background.clearBeforeRender)),r.clearColor){const n=Array.isArray(r.clearColor)&&r.clearColor.length===4;r.clearColor=n?r.clearColor:ta.shared.setValue(r.clearColor).toArray()}r.transform||(r.container.updateLocalTransform(),r.transform=r.container.localTransform),r.container.enableRenderGroup(),this.runners.prerender.emit(r),this.runners.renderStart.emit(r),this.runners.render.emit(r),this.runners.renderEnd.emit(r),this.runners.postrender.emit(r)}resize(e,a,r){const n=this.view.resolution;this.view.resize(e,a,r),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),r!==void 0&&r!==n&&this.runners.resolutionChange.emit(r)}clear(e={}){const a=this;e.target||(e.target=a.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Pr.ALL);const{clear:r,clearColor:n,target:i}=e;ta.shared.setValue(n??this.background.colorRgba),a.renderTarget.clear(i,r,ta.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(a=>{this.runners[a]=new Bo(a)})}_addSystems(e){let a;for(a in e){const r=e[a];this._addSystem(r.value,r.name)}}_addSystem(e,a){const r=new e(this);if(this[a])throw new Error(`Whoops! The name "${a}" is already in use`);this[a]=r,this._systemsHash[a]=r;for(const n in this.runners)this.runners[n].add(r);return this}_addPipes(e,a){const r=a.reduce((n,i)=>(n[i.name]=i.value,n),{});e.forEach(n=>{const i=n.value,l=n.name,d=r[l];this.renderPipes[l]=new i(this,d?new d:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(a=>{a.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Co())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Ir.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Cr=Ir,Dt;function Fo(s){return Dt!==void 0||(Dt=(()=>{var a;const e={stencil:!0,failIfMajorPerformanceCaveat:s??Cr.defaultOptions.failIfMajorPerformanceCaveat};try{if(!ve.get().getWebGLRenderingContext())return!1;let n=ve.get().createCanvas().getContext("webgl",e);const i=!!((a=n==null?void 0:n.getContextAttributes())!=null&&a.stencil);if(n){const l=n.getExtension("WEBGL_lose_context");l&&l.loseContext()}return n=null,i}catch{return!1}})()),Dt}let Ut;async function Wo(s={}){return Ut!==void 0||(Ut=await(async()=>{const e=ve.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(s)).requestDevice(),!0}catch{return!1}})()),Ut}const vr=["webgl","webgpu","canvas"];async function zo(s){let e=[];s.preference?(e.push(s.preference),vr.forEach(i=>{i!==s.preference&&e.push(i)})):e=vr.slice();let a,r={};for(let i=0;i<e.length;i++){const l=e[i];if(l==="webgpu"&&await Wo()){const{WebGPURenderer:d}=await cr(async()=>{const{WebGPURenderer:v}=await import("./BOJXKfvH.js");return{WebGPURenderer:v}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);a=d,r={...s,...s.webgpu};break}else if(l==="webgl"&&Fo(s.failIfMajorPerformanceCaveat??Cr.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:d}=await cr(async()=>{const{WebGLRenderer:v}=await import("./DLHcUPuG.js");return{WebGLRenderer:v}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);a=d,r={...s,...s.webgl};break}else if(l==="canvas")throw r={...s},new Error("CanvasRenderer is not yet implemented")}if(delete r.webgpu,delete r.webgl,!a)throw new Error("No available renderer for the current environment");const n=new a;return await n.init(r),n}const Br="8.8.1";class Mr{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Br)}static destroy(){}}Mr.extension=z.Application;class jo{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Br)}destroy(){this._renderer=null}}jo.extension={type:[z.WebGLSystem,z.WebGPUSystem],name:"initHook",priority:-10};const Fr=class ua{constructor(...e){this.stage=new va,e[0]!==void 0&&ca(da,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await zo(e),ua._plugins.forEach(a=>{a.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return ca(da,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,a=!1){const r=ua._plugins.slice(0);r.reverse(),r.forEach(n=>{n.destroy.call(this)}),this.stage.destroy(a),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Fr._plugins=[];let Wr=Fr;Ye.handleByList(z.Application,Wr._plugins);Ye.add(Mr);class zr extends ko{constructor(e,a){super();const{textures:r,data:n}=e;Object.keys(n.pages).forEach(i=>{const l=n.pages[parseInt(i,10)],d=r[l.id];this.pages.push({texture:d})}),Object.keys(n.chars).forEach(i=>{const l=n.chars[i],{frame:d,source:v}=r[l.page],y=new xo(l.x+d.x,l.y+d.y,l.width,l.height),u=new Je({source:v,frame:y});this.chars[i]={id:i.codePointAt(0),xOffset:l.xOffset,yOffset:l.yOffset,xAdvance:l.xAdvance,kerning:l.kerning??{},texture:u}}),this.baseRenderedFontSize=n.fontSize,this.baseMeasurementFontSize=n.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:n.fontSize},this.baseLineOffset=n.baseLineOffset,this.lineHeight=n.lineHeight,this.fontFamily=n.fontFamily,this.distanceField=n.distanceField??{type:"none",range:0},this.url=a}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:a}=this.pages[e];a.destroy(!0)}this.pages=null}static install(e){fr.install(e)}static uninstall(e){fr.uninstall(e)}}const oa={test(s){return typeof s=="string"&&s.startsWith("info face=")},parse(s){const e=s.match(/^[a-z]+\s+.+$/gm),a={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const m in e){const b=e[m].match(/^[a-z]+/gm)[0],L=e[m].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),T={};for(const Q in L){const F=L[Q].split("="),R=F[0],H=F[1].replace(/"/gm,""),oe=parseFloat(H),ie=isNaN(oe)?H:oe;T[R]=ie}a[b].push(T)}const r={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[n]=a.info,[i]=a.common,[l]=a.distanceField??[];l&&(r.distanceField={range:parseInt(l.distanceRange,10),type:l.fieldType}),r.fontSize=parseInt(n.size,10),r.fontFamily=n.face,r.lineHeight=parseInt(i.lineHeight,10);const d=a.page;for(let m=0;m<d.length;m++)r.pages.push({id:parseInt(d[m].id,10)||0,file:d[m].file});const v={};r.baseLineOffset=r.lineHeight-parseInt(i.base,10);const y=a.char;for(let m=0;m<y.length;m++){const b=y[m],L=parseInt(b.id,10);let T=b.letter??b.char??String.fromCharCode(L);T==="space"&&(T=" "),v[L]=T,r.chars[T]={id:L,page:parseInt(b.page,10)||0,x:parseInt(b.x,10),y:parseInt(b.y,10),width:parseInt(b.width,10),height:parseInt(b.height,10),xOffset:parseInt(b.xoffset,10),yOffset:parseInt(b.yoffset,10),xAdvance:parseInt(b.xadvance,10),kerning:{}}}const u=a.kerning||[];for(let m=0;m<u.length;m++){const b=parseInt(u[m].first,10),L=parseInt(u[m].second,10),T=parseInt(u[m].amount,10);r.chars[v[L]].kerning[v[b]]=T}return r}},mr={test(s){const e=s;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(s){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},a=s.getElementsByTagName("info")[0],r=s.getElementsByTagName("common")[0],n=s.getElementsByTagName("distanceField")[0];n&&(e.distanceField={type:n.getAttribute("fieldType"),range:parseInt(n.getAttribute("distanceRange"),10)});const i=s.getElementsByTagName("page"),l=s.getElementsByTagName("char"),d=s.getElementsByTagName("kerning");e.fontSize=parseInt(a.getAttribute("size"),10),e.fontFamily=a.getAttribute("face"),e.lineHeight=parseInt(r.getAttribute("lineHeight"),10);for(let y=0;y<i.length;y++)e.pages.push({id:parseInt(i[y].getAttribute("id"),10)||0,file:i[y].getAttribute("file")});const v={};e.baseLineOffset=e.lineHeight-parseInt(r.getAttribute("base"),10);for(let y=0;y<l.length;y++){const u=l[y],m=parseInt(u.getAttribute("id"),10);let b=u.getAttribute("letter")??u.getAttribute("char")??String.fromCharCode(m);b==="space"&&(b=" "),v[m]=b,e.chars[b]={id:m,page:parseInt(u.getAttribute("page"),10)||0,x:parseInt(u.getAttribute("x"),10),y:parseInt(u.getAttribute("y"),10),width:parseInt(u.getAttribute("width"),10),height:parseInt(u.getAttribute("height"),10),xOffset:parseInt(u.getAttribute("xoffset"),10),yOffset:parseInt(u.getAttribute("yoffset"),10),xAdvance:parseInt(u.getAttribute("xadvance"),10),kerning:{}}}for(let y=0;y<d.length;y++){const u=parseInt(d[y].getAttribute("first"),10),m=parseInt(d[y].getAttribute("second"),10),b=parseInt(d[y].getAttribute("amount"),10);e.chars[v[m]].kerning[v[u]]=b}return e}},br={test(s){return typeof s=="string"&&s.includes("<font>")?mr.test(ve.get().parseXML(s)):!1},parse(s){return mr.parse(ve.get().parseXML(s))}},No=[".xml",".fnt"],Do={extension:{type:z.CacheParser,name:"cacheBitmapFont"},test:s=>s instanceof zr,getCacheableAssets(s,e){const a={};return s.forEach(r=>{a[r]=e,a[`${r}-bitmap`]=e}),a[`${e.fontFamily}-bitmap`]=e,a}},Uo={extension:{type:z.LoadParser,priority:ft.Normal},name:"loadBitmapFont",test(s){return No.includes(Ze.extname(s).toLowerCase())},async testParse(s){return oa.test(s)||br.test(s)},async parse(s,e,a){const r=oa.test(s)?oa.parse(s):br.parse(s),{src:n}=e,{pages:i}=r,l=[],d=r.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let m=0;m<i.length;++m){const b=i[m].file;let L=Ze.join(Ze.dirname(n),b);L=wo(L,n),l.push({src:L,data:d})}const v=await a.load(l),y=l.map(m=>v[m.src]);return new zr({data:r,textures:y},n)},async load(s,e){return await(await ve.get().fetch(s)).text()},async unload(s,e,a){await Promise.all(s.pages.map(r=>a.unload(r.texture.source._sourceOrigin))),s.destroy()}};class Go{constructor(e,a=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=a}add(e){e.forEach(a=>{this._assetList.push(a)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],a=Math.min(this._assetList.length,this._maxConcurrent);for(let r=0;r<a;r++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Ho={extension:{type:z.CacheParser,name:"cacheTextureArray"},test:s=>Array.isArray(s)&&s.every(e=>e instanceof Je),getCacheableAssets:(s,e)=>{const a={};return s.forEach(r=>{e.forEach((n,i)=>{a[r+(i===0?"":i+1)]=n})}),a}};async function jr(s){if("Image"in globalThis)return new Promise(e=>{const a=new Image;a.onload=()=>{e(!0)},a.onerror=()=>{e(!1)},a.src=s});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(s)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Vo={extension:{type:z.DetectionParser,priority:1},test:async()=>jr("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async s=>[...s,"avif"],remove:async s=>s.filter(e=>e!=="avif")},yr=["png","jpg","jpeg"],Yo={extension:{type:z.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async s=>[...s,...yr],remove:async s=>s.filter(e=>!yr.includes(e))},Xo="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function ma(s){return Xo?!1:document.createElement("video").canPlayType(s)!==""}const Ko={extension:{type:z.DetectionParser,priority:0},test:async()=>ma("video/mp4"),add:async s=>[...s,"mp4","m4v"],remove:async s=>s.filter(e=>e!=="mp4"&&e!=="m4v")},qo={extension:{type:z.DetectionParser,priority:0},test:async()=>ma("video/ogg"),add:async s=>[...s,"ogv"],remove:async s=>s.filter(e=>e!=="ogv")},Qo={extension:{type:z.DetectionParser,priority:0},test:async()=>ma("video/webm"),add:async s=>[...s,"webm"],remove:async s=>s.filter(e=>e!=="webm")},Jo={extension:{type:z.DetectionParser,priority:0},test:async()=>jr("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async s=>[...s,"webp"],remove:async s=>s.filter(e=>e!=="webp")};class Zo{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,a,r)=>(this._parsersValidated=!1,e[a]=r,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,a){const r={promise:null,parser:null};return r.promise=(async()=>{var l,d;let n=null,i=null;if(a.loadParser&&(i=this._parserHash[a.loadParser],i||Ve(`[Assets] specified load parser "${a.loadParser}" not found while loading ${e}`)),!i){for(let v=0;v<this.parsers.length;v++){const y=this.parsers[v];if(y.load&&((l=y.test)!=null&&l.call(y,e,a,this))){i=y;break}}if(!i)return Ve(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}n=await i.load(e,a,this),r.parser=i;for(let v=0;v<this.parsers.length;v++){const y=this.parsers[v];y.parse&&y.parse&&await((d=y.testParse)==null?void 0:d.call(y,n,a,this))&&(n=await y.parse(n,a,this)||n,r.parser=y)}return n})(),r}async load(e,a){this._parsersValidated||this._validateParsers();let r=0;const n={},i=Lr(e),l=Et(e,y=>({alias:[y],src:y,data:{}})),d=l.length,v=l.map(async y=>{const u=Ze.toAbsolute(y.src);if(!n[y.src])try{this.promiseCache[u]||(this.promiseCache[u]=this._getLoadPromiseAndParser(u,y)),n[y.src]=await this.promiseCache[u].promise,a&&a(++r/d)}catch(m){throw delete this.promiseCache[u],delete n[y.src],new Error(`[Loader.load] Failed to load ${u}.
${m}`)}});return await Promise.all(v),i?n[l[0].src]:n}async unload(e){const r=Et(e,n=>({alias:[n],src:n})).map(async n=>{var d,v;const i=Ze.toAbsolute(n.src),l=this.promiseCache[i];if(l){const y=await l.promise;delete this.promiseCache[i],await((v=(d=l.parser)==null?void 0:d.unload)==null?void 0:v.call(d,y,n,this))}});await Promise.all(r)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,a)=>(a.name?e[a.name]&&Ve(`[Assets] loadParser name conflict "${a.name}"`):Ve("[Assets] loadParser should have a name"),{...e,[a.name]:a}),{})}}function ut(s,e){if(Array.isArray(e)){for(const a of e)if(s.startsWith(`data:${a}`))return!0;return!1}return s.startsWith(`data:${e}`)}const ei=".json",ti="application/json",si={extension:{type:z.LoadParser,priority:ft.Low},name:"loadJson",test(s){return ut(s,ti)||pt(s,ei)},async load(s){return await(await ve.get().fetch(s)).json()}},ai=".txt",ri="text/plain",ni={name:"loadTxt",extension:{type:z.LoadParser,priority:ft.Low,name:"loadTxt"},test(s){return ut(s,ri)||pt(s,ai)},async load(s){return await(await ve.get().fetch(s)).text()}},oi=["normal","bold","100","200","300","400","500","600","700","800","900"],ii=[".ttf",".otf",".woff",".woff2"],li=["font/ttf","font/otf","font/woff","font/woff2"],ci=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function di(s){const e=Ze.extname(s),n=Ze.basename(s,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(d=>d.charAt(0).toUpperCase()+d.slice(1));let i=n.length>0;for(const d of n)if(!d.match(ci)){i=!1;break}let l=n.join(" ");return i||(l=`"${l.replace(/[\\"]/g,"\\$&")}"`),l}const fi=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function pi(s){return fi.test(s)?s:encodeURI(s)}const ui={extension:{type:z.LoadParser,priority:ft.Low},name:"loadWebFont",test(s){return ut(s,li)||pt(s,ii)},async load(s,e){var r,n,i;const a=ve.get().getFontFaceSet();if(a){const l=[],d=((r=e.data)==null?void 0:r.family)??di(s),v=((i=(n=e.data)==null?void 0:n.weights)==null?void 0:i.filter(u=>oi.includes(u)))??["normal"],y=e.data??{};for(let u=0;u<v.length;u++){const m=v[u],b=new FontFace(d,`url(${pi(s)})`,{...y,weight:m});await b.load(),a.add(b),l.push(b)}return Fe.set(`${d}-and-url`,{url:s,fontFaces:l}),l.length===1?l[0]:l}return Ve("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(s){(Array.isArray(s)?s:[s]).forEach(e=>{Fe.remove(`${e.family}-and-url`),ve.get().getFontFaceSet().delete(e)})}};function ba(s,e=1){var r;const a=(r=Kt.RETINA_PREFIX)==null?void 0:r.exec(s);return a?parseFloat(a[1]):e}function ya(s,e,a){s.label=a,s._sourceOrigin=a;const r=new Je({source:s,label:a}),n=()=>{delete e.promiseCache[a],Fe.has(a)&&Fe.remove(a)};return r.source.once("destroy",()=>{e.promiseCache[a]&&(Ve("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),n())}),r.once("destroy",()=>{s.destroyed||(Ve("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),n())}),r}const gi=".svg",hi="image/svg+xml",vi={extension:{type:z.LoadParser,priority:ft.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(s){return ut(s,hi)||pt(s,gi)},async load(s,e,a){var r;return((r=e.data)==null?void 0:r.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?bi(s):mi(s,e,a,this.config.crossOrigin)},unload(s){s.destroy(!0)}};async function mi(s,e,a,r){var F,R,H;const i=await(await ve.get().fetch(s)).blob(),l=URL.createObjectURL(i),d=new Image;d.src=l,d.crossOrigin=r,await d.decode(),URL.revokeObjectURL(l);const v=document.createElement("canvas"),y=v.getContext("2d"),u=((F=e.data)==null?void 0:F.resolution)||ba(s),m=((R=e.data)==null?void 0:R.width)??d.width,b=((H=e.data)==null?void 0:H.height)??d.height;v.width=m*u,v.height=b*u,y.drawImage(d,0,0,m*u,b*u);const{parseAsGraphicsContext:L,...T}=e.data??{},Q=new Tr({resource:v,alphaMode:"premultiply-alpha-on-upload",resolution:u,...T});return ya(Q,a,s)}async function bi(s){const a=await(await ve.get().fetch(s)).text(),r=new Ao;return r.svg(a),r}const yi=`(function () {
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
`;let ct=null,ga=class{constructor(){ct||(ct=URL.createObjectURL(new Blob([yi],{type:"application/javascript"}))),this.worker=new Worker(ct)}};ga.revokeObjectURL=function(){ct&&(URL.revokeObjectURL(ct),ct=null)};const xi=`(function () {
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
`;let dt=null;class Nr{constructor(){dt||(dt=URL.createObjectURL(new Blob([xi],{type:"application/javascript"}))),this.worker=new Worker(dt)}}Nr.revokeObjectURL=function(){dt&&(URL.revokeObjectURL(dt),dt=null)};let xr=0,ia;class wi{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:a}=new ga;a.addEventListener("message",r=>{a.terminate(),ga.revokeObjectURL(),e(r.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,a){var r;return this._run("loadImageBitmap",[e,(r=a==null?void 0:a.data)==null?void 0:r.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){ia===void 0&&(ia=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<ia&&(this._createdWorkers++,e=new Nr().worker,e.addEventListener("message",a=>{this._complete(a.data),this._returnWorker(a.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,a){await this._initWorkers();const r=new Promise((n,i)=>{this._queue.push({id:e,arguments:a,resolve:n,reject:i})});return this._next(),r}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const a=this._queue.pop(),r=a.id;this._resolveHash[xr]={resolve:a.resolve,reject:a.reject},e.postMessage({data:a.arguments,uuid:xr++,id:r})}}const wr=new wi,_i=[".jpeg",".jpg",".png",".webp",".avif"],ki=["image/jpeg","image/png","image/webp","image/avif"];async function Ai(s,e){var n;const a=await ve.get().fetch(s);if(!a.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${s}: ${a.status} ${a.statusText}`);const r=await a.blob();return((n=e==null?void 0:e.data)==null?void 0:n.alphaMode)==="premultiplied-alpha"?createImageBitmap(r,{premultiplyAlpha:"none"}):createImageBitmap(r)}const Dr={name:"loadTextures",extension:{type:z.LoadParser,priority:ft.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(s){return ut(s,ki)||pt(s,_i)},async load(s,e,a){var i;let r=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await wr.isImageBitmapSupported()?r=await wr.loadImageBitmap(s,e):r=await Ai(s,e):r=await new Promise((l,d)=>{r=new Image,r.crossOrigin=this.config.crossOrigin,r.src=s,r.complete?l(r):(r.onload=()=>{l(r)},r.onerror=d)});const n=new Tr({resource:r,alphaMode:"premultiply-alpha-on-upload",resolution:((i=e.data)==null?void 0:i.resolution)||ba(s),...e.data});return ya(n,a,s)},unload(s){s.destroy(!0)}},Ur=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],$i=Ur.map(s=>`video/${s.substring(1)}`);function Si(s,e,a){a===void 0&&!e.startsWith("data:")?s.crossOrigin=Li(e):a!==!1&&(s.crossOrigin=typeof a=="string"?a:"anonymous")}function Ei(s){return new Promise((e,a)=>{s.addEventListener("canplaythrough",r),s.addEventListener("error",n),s.load();function r(){i(),e()}function n(l){i(),a(l)}function i(){s.removeEventListener("canplaythrough",r),s.removeEventListener("error",n)}})}function Li(s,e=globalThis.location){if(s.startsWith("data:"))return"";e||(e=globalThis.location);const a=new URL(s,document.baseURI);return a.hostname!==e.hostname||a.port!==e.port||a.protocol!==e.protocol?"anonymous":""}const Ti={name:"loadVideo",extension:{type:z.LoadParser,name:"loadVideo"},test(s){const e=ut(s,$i),a=pt(s,Ur);return e||a},async load(s,e,a){var v,y;const r={...sa.defaultOptions,resolution:((v=e.data)==null?void 0:v.resolution)||ba(s),alphaMode:((y=e.data)==null?void 0:y.alphaMode)||await _o(),...e.data},n=document.createElement("video"),i={preload:r.autoLoad!==!1?"auto":void 0,"webkit-playsinline":r.playsinline!==!1?"":void 0,playsinline:r.playsinline!==!1?"":void 0,muted:r.muted===!0?"":void 0,loop:r.loop===!0?"":void 0,autoplay:r.autoPlay!==!1?"":void 0};Object.keys(i).forEach(u=>{const m=i[u];m!==void 0&&n.setAttribute(u,m)}),r.muted===!0&&(n.muted=!0),Si(n,s,r.crossorigin);const l=document.createElement("source");let d;if(s.startsWith("data:"))d=s.slice(5,s.indexOf(";"));else if(!s.startsWith("blob:")){const u=s.split("?")[0].slice(s.lastIndexOf(".")+1).toLowerCase();d=sa.MIME_TYPES[u]||`video/${u}`}return l.src=s,d&&(l.type=d),new Promise(u=>{const m=async()=>{const b=new sa({...r,resource:n});n.removeEventListener("canplay",m),e.data.preload&&await Ei(n),u(ya(b,a,s))};n.addEventListener("canplay",m),n.appendChild(l)})},unload(s){s.destroy(!0)}},Gr={extension:{type:z.ResolveParser,name:"resolveTexture"},test:Dr.test,parse:s=>{var e;return{resolution:parseFloat(((e=Kt.RETINA_PREFIX.exec(s))==null?void 0:e[1])??"1"),format:s.split(".").pop(),src:s}}},Ri={extension:{type:z.ResolveParser,priority:-2,name:"resolveJson"},test:s=>Kt.RETINA_PREFIX.test(s)&&s.endsWith(".json"),parse:Gr.parse};class Pi{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Kt,this.loader=new Zo,this.cache=Fe,this._backgroundLoader=new Go(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var i,l;if(this._initialized){Ve("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let d=e.manifest;typeof d=="string"&&(d=await this.load(d)),this.resolver.addManifest(d)}const a=((i=e.texturePreference)==null?void 0:i.resolution)??1,r=typeof a=="number"?[a]:a,n=await this._detectFormats({preferredFormats:(l=e.texturePreference)==null?void 0:l.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:n,resolution:r}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,a){this._initialized||await this.init();const r=Lr(e),n=Et(e).map(d=>{if(typeof d!="string"){const v=this.resolver.getAlias(d);return v.some(y=>!this.resolver.hasKey(y))&&this.add(d),Array.isArray(v)?v[0]:v}return this.resolver.hasKey(d)||this.add({alias:d,src:d}),d}),i=this.resolver.resolve(n),l=await this._mapLoadToResolve(i,a);return r?l[n[0]]:l}addBundle(e,a){this.resolver.addBundle(e,a)}async loadBundle(e,a){this._initialized||await this.init();let r=!1;typeof e=="string"&&(r=!0,e=[e]);const n=this.resolver.resolveBundle(e),i={},l=Object.keys(n);let d=0,v=0;const y=()=>{a==null||a(++d/v)},u=l.map(m=>{const b=n[m];return v+=Object.keys(b).length,this._mapLoadToResolve(b,y).then(L=>{i[m]=L})});return await Promise.all(u),r?i[e[0]]:i}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(a))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolveBundle(e);Object.values(a).forEach(r=>{this._backgroundLoader.add(Object.values(r))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Fe.get(e);const a={};for(let r=0;r<e.length;r++)a[r]=Fe.get(e[r]);return a}async _mapLoadToResolve(e,a){const r=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const n=await this.loader.load(r,a);this._backgroundLoader.active=!0;const i={};return r.forEach(l=>{const d=n[l.src],v=[l.src];l.alias&&v.push(...l.alias),v.forEach(y=>{i[y]=d}),Fe.set(v,d)}),i}async unload(e){this._initialized||await this.init();const a=Et(e).map(n=>typeof n!="string"?n.src:n),r=this.resolver.resolve(a);await this._unloadFromResolved(r)}async unloadBundle(e){this._initialized||await this.init(),e=Et(e);const a=this.resolver.resolveBundle(e),r=Object.keys(a).map(n=>this._unloadFromResolved(a[n]));await Promise.all(r)}async _unloadFromResolved(e){const a=Object.values(e);a.forEach(r=>{Fe.remove(r.src)}),await this.loader.unload(a)}async _detectFormats(e){let a=[];e.preferredFormats&&(a=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const r of e.detections)e.skipDetections||await r.test()?a=await r.add(a):e.skipDetections||(a=await r.remove(a));return a=a.filter((r,n)=>a.indexOf(r)===n),a}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(a=>{a.config&&Object.keys(a.config).filter(r=>r in e).forEach(r=>{a.config[r]=e[r]})})}}const lt=new Pi;Ye.handleByList(z.LoadParser,lt.loader.parsers).handleByList(z.ResolveParser,lt.resolver.parsers).handleByList(z.CacheParser,lt.cache.parsers).handleByList(z.DetectionParser,lt.detections);Ye.add(Ho,Yo,Vo,Jo,Ko,qo,Qo,si,ni,ui,vi,Dr,Ti,Uo,Do,Gr,Ri);const _r={loader:z.LoadParser,resolver:z.ResolveParser,cache:z.CacheParser,detection:z.DetectionParser};Ye.handle(z.Asset,s=>{const e=s.ref;Object.entries(_r).filter(([a])=>!!e[a]).forEach(([a,r])=>Ye.add(Object.assign(e[a],{extension:e[a].extension??r})))},s=>{const e=s.ref;Object.keys(_r).filter(a=>!!e[a]).forEach(a=>Ye.remove(e[a]))});var Ii=ee('<div class="win-label svelte-1vsph43">BIG WIN!</div> <div class="win-amount-display svelte-1vsph43"> </div>',1),Oi=kr('<use href="#sparkle" class="sparkle svelte-1vsph43"></use>'),Ci=kr('<use href="#vinyl"></use>'),Bi=ee('<div><!> <svg class="vinyl-canvas svelte-1vsph43" viewBox="0 0 1024 800" xmlns="http://www.w3.org/2000/svg"><defs class="svelte-1vsph43"><symbol id="vinyl" viewBox="-200 -200 400 400" class="svelte-1vsph43"><circle cx="0" cy="0" r="180" fill="#0b0b0b" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="150" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.3" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="120" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.25" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="90" fill="none" stroke="#1a1a1a" stroke-width="1.5" opacity="0.2" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="55" fill="var(--label-color)" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="6" fill="#ffffff" class="svelte-1vsph43"></circle><ellipse cx="-15" cy="-15" rx="20" ry="15" fill="#ffffff" opacity="0.3" transform="rotate(-30)" class="svelte-1vsph43"></ellipse></symbol><symbol id="sparkle" viewBox="-12 -12 24 24" class="svelte-1vsph43"><polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ffd966" class="svelte-1vsph43"></polygon><circle cx="0" cy="0" r="2" fill="#ffffff" class="svelte-1vsph43"></circle></symbol><symbol id="confetti" viewBox="-3 -3 6 6" class="svelte-1vsph43"><circle cx="0" cy="0" r="2" fill="var(--confetti-color)" class="svelte-1vsph43"></circle></symbol></defs><!><!></svg></div>');function Mi(s,e){Yt(e,!0);let a=it(e,"winLevel",3,"small"),r=it(e,"winAmount",3,0),n=it(e,"vinylStartScale",3,.01),i=it(e,"vinylEndScale",3,.15),l=it(e,"sparkleScale",3,.6),d=P(!1),v=P(!1);const y={small:{vinyls:5,sparkles:8,maxRadius:70},medium:{vinyls:12,sparkles:16,maxRadius:100},jackpot:{vinyls:24,sparkles:30,maxRadius:130}},u=He(()=>y[a()]),m=["#f04e37","#ffd966","#ff8533","#4ecdc4","#ff6b9d"];function b(X){const pe=[],Ie=t(u).maxRadius;for(let Y=0;Y<X;Y++){const K=Math.PI*2*Y/X+Math.random()*.4,We=Math.random()*Ie*.7+Ie*.2;pe.push({x:512+Math.cos(K)*We,y:400+Math.sin(K)*We,rotation:Math.random()*30-15,scale:i()*(.8+Math.random()*.4),delay:Y*.05,color:m[Y%m.length]})}return pe}function L(X){const pe=[];for(let ue=0;ue<X;ue++)pe.push({x:100+Math.random()*824,y:50+Math.random()*700,delay:Math.random()*.8,duration:.6+Math.random()*.4,rotation:Math.random()*360});return pe}const T=He(()=>b(t(u).vinyls)),Q=He(()=>L(t(u).sparkles));function F(){g(d,!0),g(v,!0),setTimeout(()=>{g(v,!1),setTimeout(()=>{var X;g(d,!1),(X=e.onComplete)==null||X.call(e)},500)},a()==="jackpot"?4e3:a()==="medium"?3e3:2500)}function R(){g(v,!1),setTimeout(()=>{g(d,!1)},500)}var H=Gt(),oe=Xe(H);{var ie=X=>{var pe=Bi();let ue;var we=w(pe);{var Ie=_e=>{var ae=Ii(),me=p(Xe(ae),2),et=w(me,!0);_(me),ne(Oe=>q(et,Oe),[()=>r().toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),V(_e,ae)};se(we,_e=>{r()>0&&_e(Ie)})}var Y=p(we,2),K=p(w(Y));Vt(K,17,()=>t(Q),Ht,(_e,ae)=>{var me=Oi();ne(()=>x(me,"style",`
            --sx: ${t(ae).x??""}px;
            --sy: ${t(ae).y??""}px;
            --duration: ${t(ae).duration??""}s;
            --sparkle-delay: ${t(ae).delay??""}s;
            --sparkle-scale: ${l()??""};
          `)),V(_e,me)});var We=p(K);Vt(We,17,()=>t(T),Ht,(_e,ae)=>{var me=Ci();let et;ne(()=>{et=fa(me,0,"vinyl-group svelte-1vsph43",null,et,{floating:t(v)}),x(me,"style",`
            --tx: ${t(ae).x??""}px;
            --ty: ${t(ae).y??""}px;
            --scale: ${t(ae).scale??""};
            --rotation: ${t(ae).rotation??""}deg;
            --delay: ${t(ae).delay??""}s;
            --label-color: ${t(ae).color??""};
            --start-scale: ${n()??""};
          `)}),V(_e,me)}),_(Y),_(pe),ne(()=>ue=fa(pe,1,"vinyl-win-container svelte-1vsph43",null,ue,{visible:t(v),hiding:!t(v)})),V(X,pe)};se(oe,X=>{t(d)&&X(ie)})}return V(s,H),Xt({show:F,hide:R})}var Fi=ee(`<div style="
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: #000;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 10000;
	"><img alt="MadCrane Logo" style="
				max-width: 400px;
				width: 80%;
				height: auto;
				margin-bottom: 40px;
			"> <div style="
			width: 400px;
			max-width: 80%;
			height: 30px;
			background-color: #222;
			border-radius: 15px;
			overflow: hidden;
			border: 2px solid #444;
		"><div></div></div> <div style="
			color: #fff;
			font-family: Arial, sans-serif;
			font-size: 18px;
			margin-top: 20px;
		"> </div></div>`),Wi=ee(`<div style="
				position: absolute;
				bottom: 40px;
				left: 50%;
				transform: translateX(-50%);
				color: #fff;
				font-family: Arial, sans-serif;
				font-size: 20px;
				text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
			">Please wait...</div>`),zi=ee('<div role="button" tabindex="0"><span style="position: absolute; left: -9999px;">Click anywhere to continue</span> <!></div>');function ji(s,e){Yt(e,!0);let a=P(!1),r=P(!1),n=P(!1),i=P(0);ha(()=>{const m=setInterval(()=>{g(i,t(i)+2),t(i)>=100&&(clearInterval(m),g(i,100),setTimeout(()=>{g(r,!0),setTimeout(()=>{g(n,!0)},3e3)},500))},60);return()=>clearInterval(m)});function l(){t(r)&&t(n)&&!t(a)&&(g(a,!0),setTimeout(()=>e.onloaded(),300))}var d=Gt(),v=Xe(d);{var y=m=>{var b=Fi(),L=w(b);x(L,"src",`${xe??""}/loading_screen/MadCraneLogo.jpg`);var T=p(L,2),Q=w(T);_(T);var F=p(T,2),R=w(F);_(F),_(b),ne(H=>{x(Q,"style",`
				width: ${t(i)??""}%;
				height: 100%;
				background: linear-gradient(90deg, #ff0000, #ff6600);
				transition: width 0.3s ease;
			`),q(R,`Loading... ${H??""}%`)},[()=>Math.round(t(i))]),V(m,b)},u=m=>{var b=Gt(),L=Xe(b);{var T=Q=>{var F=zi(),R=p(w(F),2);{var H=oe=>{var ie=Wi();V(oe,ie)};se(R,oe=>{t(n)||oe(H)})}_(F),ne(()=>x(F,"style",`
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background-image: url('${xe??""}/loading_screen/Splash_screen_RockabillyReels.jpeg');
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			cursor: ${(t(n)?"pointer":"default")??""};
			z-index: 10000;
		`)),B("click",F,l),B("keydown",F,oe=>oe.key==="Enter"&&l()),V(Q,F)};se(L,Q=>{t(r)&&!t(a)&&Q(T)},!0)}V(m,b)};se(v,m=>{t(r)?m(u,!1):m(y)})}V(s,d),Xt()}var Ni=Vn('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-1bferk7"><\/script><!---->',1),Di=ee('<p style="color: red;" class="svelte-1bferk7"><strong class="svelte-1bferk7">Error:</strong> </p>'),Ui=ee('<div class="svelte-1bferk7"> </div>'),Gi=ee('<details class="svelte-1bferk7"><summary class="svelte-1bferk7"> </summary> <!></details>'),Hi=ee(`<div style="
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
  " class="svelte-1bferk7"><h3 class="svelte-1bferk7">🎰 Oma-peli Debug</h3> <p class="svelte-1bferk7"><strong class="svelte-1bferk7">Status:</strong> </p> <!> <p class="svelte-1bferk7"><strong class="svelte-1bferk7">Base:</strong> </p> <p class="svelte-1bferk7"><strong class="svelte-1bferk7">BG URL:</strong> </p> <p class="svelte-1bferk7"><strong class="svelte-1bferk7">Sample:</strong> </p> <!></div>`),Vi=ee('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-1bferk7"> </div>'),Yi=ee('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-1bferk7"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-1bferk7"> </span></div>'),Xi=ee(`<div style="
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
  " class="svelte-1bferk7"><h2 style="margin: 0 0 10px 0; font-size: 2em;" class="svelte-1bferk7">🎉 VOITTO! 🎉</h2> <div style="font-size: 1.5em; font-weight: bold; margin: 10px 0;" class="svelte-1bferk7"> </div> <!> <!> <button style="
        margin-top: 15px;
        padding: 8px 16px;
        background: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
      " class="svelte-1bferk7">Jatka pelaamista</button></div>`),Ki=ee('<button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1em;" class="svelte-1bferk7">🛑 STOP AUTOPLAY</button>'),qi=ee('<button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1em;" class="svelte-1bferk7">▶️ START AUTOPLAY</button>'),Qi=ee(`<div class="svelte-1bferk7"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-1bferk7">💰 MENU</h2> <div class="mobile-menu-controls svelte-1bferk7" style="display: none; margin-bottom: 20px; padding: 15px; background: rgba(255, 255, 255, 0.05); border-radius: 10px;"><h3 style="margin: 0 0 15px 0; color: #ffd700; font-size: 1.2em;" class="svelte-1bferk7">🎮 GAME CONTROLS</h3> <div style="margin-bottom: 15px;" class="svelte-1bferk7"><div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;" class="svelte-1bferk7"><span style="font-size: 1.1em;" class="svelte-1bferk7">🔄 Autoplay:</span> <span class="svelte-1bferk7"> </span></div> <!></div> <div style="margin-bottom: 10px;" class="svelte-1bferk7"><div style="margin-bottom: 10px;" class="svelte-1bferk7"><span style="font-size: 1.1em;" class="svelte-1bferk7">⚡ Spin Speed:</span> <span style="color: #ffd700; font-weight: bold; margin-left: 10px;" class="svelte-1bferk7"> </span></div> <div style="display: flex; gap: 10px;" class="svelte-1bferk7"><button class="svelte-1bferk7">🐌 Slow</button> <button class="svelte-1bferk7">🏃 Medium</button> <button class="svelte-1bferk7">⚡ Fast</button></div></div> <div style="border-top: 1px solid #555; margin: 20px 0;" class="svelte-1bferk7"></div></div> <h3 style="margin: 0 0 15px 0; color: #ffd700; font-size: 1.2em;" class="svelte-1bferk7">💰 PAYTABLE (81 WAYS)</h3> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-1bferk7">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-1bferk7"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-1bferk7"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-1bferk7"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-1bferk7">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-1bferk7"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-1bferk7">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-1bferk7"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-1bferk7">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-1bferk7"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-1bferk7">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1bferk7">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-1bferk7">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-1bferk7">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-1bferk7"> <span style="color: #ffd700;" class="svelte-1bferk7">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-1bferk7">Sulje</button></div>`),Ji=ee(`<div style="
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
  " class="svelte-1bferk7"><div style="
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: white;
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      border: 3px solid #ffd700;
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
      max-width: 500px;
      font-family: Arial, sans-serif;
    " class="svelte-1bferk7"><h1 style="
        margin: 0 0 20px 0;
        font-size: 2.5em;
        color: #ffd700;
        text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
      " class="svelte-1bferk7">🎰 VAPAAPELIT PÄÄTTYIVÄT! 🎰</h1> <div style="
        font-size: 1.2em;
        margin: 20px 0;
        color: #aaa;
      " class="svelte-1bferk7">Voitit yhteensä:</div> <div style="
        font-size: 3em;
        font-weight: bold;
        color: #00ff00;
        text-shadow: 0 0 15px rgba(0, 255, 0, 0.8);
        margin: 20px 0;
      " class="svelte-1bferk7"> </div> <button style="
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
        " class="svelte-1bferk7">JATKA PERUSPELIIN</button></div></div>`),Zi=ee('<div class="svelte-1bferk7"><div class="svelte-1bferk7">🔄 Select Rounds</div> <button class="svelte-1bferk7">10 Rounds</button> <button class="svelte-1bferk7">25 Rounds</button> <button class="svelte-1bferk7">50 Rounds</button> <button class="svelte-1bferk7">100 Rounds</button> <button class="svelte-1bferk7">200 Rounds</button> <button class="svelte-1bferk7">500 Rounds</button> <button class="svelte-1bferk7">1,000 Rounds</button> <button class="svelte-1bferk7">5,000 Rounds</button> <button class="svelte-1bferk7">Cancel</button></div>'),el=ee(`<!>  <!>   <!>   <!>   <!>  <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
" class="svelte-1bferk7"><div class="svelte-1bferk7"><div class="svelte-1bferk7"><button class="svelte-1bferk7">💰 PAYTABLE</button>  <div class="control-panel-mobile svelte-1bferk7"><!>  <img alt="Left End" class="svelte-1bferk7"> <div class="svelte-1bferk7"><div style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;" class="svelte-1bferk7"><div class="hide-on-desktop svelte-1bferk7"><button title="Menu" class="svelte-1bferk7"></button></div> <div style="display: flex; flex-direction: column; align-items: center;" class="svelte-1bferk7"><div class="svelte-1bferk7">BET</div> <div class="svelte-1bferk7"><button title="Decrease Bet" class="svelte-1bferk7"></button> <div class="svelte-1bferk7"> </div> <button title="Increase Bet" class="svelte-1bferk7"></button></div></div> <img class="hide-on-mobile svelte-1bferk7" alt="Divider"> <div class="hide-on-mobile svelte-1bferk7" style="display: flex; flex-direction: column; align-items: center;"><div class="svelte-1bferk7">BALANCE</div> <div class="svelte-1bferk7"><div class="svelte-1bferk7"> </div></div></div> <img class="hide-on-mobile svelte-1bferk7" alt="Divider"></div> <div class="svelte-1bferk7"></div> <div style="position: absolute; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; z-index: 10;" class="svelte-1bferk7"><div><button class="svelte-1bferk7"></button></div></div> <div style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;" class="svelte-1bferk7"><div class="hide-on-mobile svelte-1bferk7"><button class="svelte-1bferk7"></button> <img alt="Status bar" class="svelte-1bferk7"></div> <img class="hide-on-mobile svelte-1bferk7" alt="Divider"> <div class="hide-on-mobile svelte-1bferk7"><button class="svelte-1bferk7"></button> <img alt="Speed bar" class="svelte-1bferk7"></div> <img class="hide-on-mobile svelte-1bferk7" alt="Divider"> <div class="hide-on-mobile svelte-1bferk7" style="display: flex; flex-direction: column; align-items: center;"><div class="svelte-1bferk7">WIN</div> <div class="svelte-1bferk7"><div class="svelte-1bferk7"> </div></div></div> <img class="hide-on-mobile svelte-1bferk7" alt="Divider"> <div class="hide-on-mobile svelte-1bferk7" style="display: flex; align-items: center; justify-content: center;"><button title="Menu" class="svelte-1bferk7"></button></div></div></div> <img alt="Right End" class="svelte-1bferk7"></div></div>  <button class="svelte-1bferk7"></button> <!>   <div class="debug-panel svelte-1bferk7"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-1bferk7">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-1bferk7"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1bferk7"><span style="color: #aaa;" class="svelte-1bferk7">Rounds:</span> <span style="color: #fff;" class="svelte-1bferk7"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1bferk7"><span style="color: #aaa;" class="svelte-1bferk7">Wagered:</span> <span style="color: #ff6666;" class="svelte-1bferk7"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1bferk7"><span style="color: #aaa;" class="svelte-1bferk7">Won:</span> <span style="color: #66ff66;" class="svelte-1bferk7"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 10px; 
    padding-top: 10px; 
    border-top: 1px solid #555;
    font-weight: bold;
    font-size: 18px;
  " class="svelte-1bferk7"><span style="color: #ffd700;" class="svelte-1bferk7">RTP:</span> <span class="svelte-1bferk7"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
  " class="svelte-1bferk7"><span style="color: #aaa;" class="svelte-1bferk7">Hit Freq:</span> <span class="svelte-1bferk7"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-size: 14px;
  " class="svelte-1bferk7"><span style="color: #aaa;" class="svelte-1bferk7">Free Spins Triggered:</span> <span style="color: #66ccff;" class="svelte-1bferk7"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 4px;
    font-size: 14px;
  " class="svelte-1bferk7"><span style="color: #aaa;" class="svelte-1bferk7">Free Spins Played:</span> <span style="color: #66ccff;" class="svelte-1bferk7"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #555;
    font-size: 14px;
  " class="svelte-1bferk7"><span style="color: #aaa;" class="svelte-1bferk7">Empty Slots:</span> <span style="color: #ff9900;" class="svelte-1bferk7"> </span></div> <button style="
      margin-top: 10px;
      width: 100%;
      padding: 5px;
      background: rgba(255, 100, 100, 0.3);
      color: #fff;
      border: 1px solid #ff6666;
      border-radius: 5px;
      cursor: pointer;
      font-size: 11px;
    " class="svelte-1bferk7">Reset Stats</button> <div style="
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  " class="svelte-1bferk7"><button class="svelte-1bferk7"> </button> <button class="svelte-1bferk7">Clear Win Log</button> <button class="svelte-1bferk7">🎰 Test Free Spins</button></div></div> <div class="svelte-1bferk7"><button class="svelte-1bferk7"></button> <button class="svelte-1bferk7"></button></div></div></div>`,1);function tl(s,e){Yt(e,!0);const a="1.4.8",r=13,n=1445,i=1e3,l=1.75,d=-25,v=-15,y=175,u=-5,m=750,b=80,L=250,T=0,Q=50,F=.5,R=30,H=-10,ie=Math.round(100*l),X=Math.round(ie*(700/760)),ue=X+10,we=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],Ie=typeof window<"u"&&window.location.hostname.includes("github.io"),Y=Ie?"/web-sdk/oma-peli/symbols":`${xe}/symbols`,K=Ie?"/web-sdk/oma-peli/controls":`${xe}/controls`,We={a:`${Y}/Blue_hotrod.jpg`,b:`${Y}/Blue_jacket.jpg`,c:`${Y}/Blue_rollers.jpg`,d:`${Y}/Blue_speakers.jpg`,e:`${Y}/Premium_blonde.jpg`,f:`${Y}/Premium_brunette.jpg`,g:`${Y}/Premium_rocker.jpg`,h:`${Y}/New_Wild.jpg`,i:`${Y}/Red_burger.jpg`,j:`${Y}/Red_fries.jpg`,k:`${Y}/Red_milkshake.jpg`,l:`${Y}/Scatter.jpg`,emptyslot:`${Y}/Emptyslot.jpg`},_e=`${Y}/bg_base.jpg`,ae=`${Y}/ReelFrames.png`,me=`${Y}/RockABillyReels_logo.png`,et={spin:`${xe}/sounds/spin.mp3`,stop:`${xe}/sounds/stop.mp3`,win:`${xe}/sounds/win.mp3`};let Oe=P(!0),qt={},N=null,be=null,Qt=null,Jt=null,Te=P(!0),Hr=P(!1),Zt=P(1100),es=null;const Vr={fast:3,medium:7,slow:18};let J=P("medium"),ze=P(Math.floor(Math.random()*20)+1);const gt={background:()=>`${xe}/music/rockabilly reels loop ${t(ze)}.mp3`,freeSpins:`${xe}/music/rockabilly-loop_long.mp3`,drumHit:`${xe}/music/drum-hit.mp3`,winTheme:`${xe}/music/win-stinger.mp3`};function xa(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(xa,500);return}const c=window.Howl;try{N=new c({src:[gt.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+t(ze)+")"),g(Hr,!0)},onloaderror:(f,A)=>{console.warn("⚠️ Background music not found:",A)}}),be=new c({src:[gt.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(f,A)=>console.warn("⚠️ Free spins music not found:",A)}),Qt=new c({src:[gt.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Jt=new c({src:[gt.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(f){console.error("Failed to initialize music system:",f)}}function wa(){const c=t(Z)?be:N;c&&t(Te)&&!c.playing()&&(c.play(),console.log("🎵 "+(t(Z)?"Free spins":"Background")+" music started"))}function Yr(){if(t(Z))return;const c=Math.floor(Math.random()*20)+1;c===t(ze)?g(ze,c%20+1):g(ze,c),console.log("🎵 Changing to loop #"+t(ze)),N&&(N.playing()?(N.fade(N.volume(),0,200),setTimeout(()=>{N.stop(),N.unload()},200)):N.unload());const f=window.Howl;f&&(N=new f({src:[gt.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ New background music loop #"+t(ze)+" loaded"),t(Te)&&!t(Z)&&setTimeout(()=>{N&&!N.playing()&&N.play()},300)},onloaderror:(A,S)=>{console.warn("⚠️ Failed to load loop #"+t(ze)+":",S)}}))}function Xr(){N&&N.playing()&&(N.fade(N.volume(),0,500),setTimeout(()=>N.stop(),500)),be&&be.playing()&&(be.fade(be.volume(),0,500),setTimeout(()=>be.stop(),500))}function ts(){N&&N.playing()&&(N.fade(N.volume(),0,500),setTimeout(()=>N.stop(),500)),be&&be.playing()&&(be.fade(be.volume(),0,500),setTimeout(()=>be.stop(),500)),setTimeout(()=>{t(Te)&&wa()},600)}function Kr(){if(N&&N.playing()){const c=N.volume();N.fade(c,0,1e3),setTimeout(()=>{N.stop(),N.volume(.3)},1e3)}}let ss=P(!1);function qr(){g(ss,!1),setTimeout(()=>{g(ss,!0)},10)}let tt=null;const as={vinylStartScale:.01,vinylEndScale:.05,sparkleScale:.1};function Qr(){g(Te,!t(Te)),t(Te)?wa():Xr()}function Jr(){g(Oe,!t(Oe))}function Zr(){Qt&&t(Te)&&t(Oe)&&Qt.play()}function en(){Jt&&t(Te)&&t(Oe)&&Jt.play()}let Lt=null,rs=null,ht=null,Ce=null,vt=P("Initializing..."),st=P(""),ke=[],_a=P(!1),je=P(1e3);const ka=[.4,.8,1,1.6,2,3,5,8,10,15,20,25,30,40,50,60,80,100];let mt=P(5),Ae=He(()=>ka[t(mt)]),Ke=P(0),le=P(!1),bt=P(0),ge=P(!1),ns=P(!1),tn=P(0),qe=!1,Be=null,os=!1,at=P(0),rt=P(0),yt=P(0),is=P(0),ls=He(()=>t(rt)>0?(t(yt)/t(rt)*100).toFixed(2):"0.00"),cs=He(()=>t(at)>0?(t(is)/t(at)*100).toFixed(2):"0.00"),Z=P(!1),Ne=P(0),Qe=P(0),Tt=P(0),ds=P(0),Rt=P(0),fs=P(0),sn=He(()=>t(Rt)>0?(t(fs)/t(Rt)*100).toFixed(2):"0.00"),ye=P(he([]));function an(c,f,A){const S=new Date().toLocaleString("fi-FI");let h=`
${"=".repeat(60)}
`;h+=`ROUND #${c} - ${S}
`,h+=`Mode: ${t(Z)?"FREE SPINS":"BASE GAME"}
`,h+=`${"=".repeat(60)}
`,f.forEach(($,k)=>{h+=`
Win ${k+1}:
`,h+=`  Symbol: ${$.symbol} (${Ea[$.symbol]})
`,h+=`  Count: ${$.count} symbols
`,h+=`  Multiplier: ${$.multiplier}x
`,h+=`  Payout: ${$.payout.toFixed(2)}
`,h+=`  Positions: [${$.positions.join(", ")}]
`}),h+=`
${"─".repeat(60)}
`,h+=`TOTAL WIN: ${A.toFixed(2)}
`,h+=`${"=".repeat(60)}
`,t(ye).push(h)}function rn(){const c=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${t(ye).join(`
`)}`,f=new Blob([c],{type:"text/plain"}),A=URL.createObjectURL(f),S=document.createElement("a");S.href=A,S.download=`win-log-${Date.now()}.txt`,S.click(),URL.revokeObjectURL(A)}function nn(){g(ye,he([]))}function on(){t(Z)||(g(Z,!0),g(Ne,10),g(Qe,0),Ee(Tt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),ts())}const ln={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},cn={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function Aa(c){if(c===6)return Math.random()<.55?"h":"emptyslot";const f=t(Z)?cn:ln,A=Math.random();let S=0;const h=we.filter(k=>k!=="h"),$=h.reduce((k,O)=>k+f[O],0);for(const k of h)if(S+=f[k]/$,A<S)return k;return"f"}function $a(){const c=[];for(let f=0;f<r;f++){const A=Aa(f);c.push(A),Ee(Rt),A==="emptyslot"&&Ee(fs)}return c}function Sa(c){return c<3?{col:0,row:c}:c<6?{col:1,row:c-3}:c===6?{col:2,row:0}:c<10?{col:3,row:c-7}:{col:4,row:c-10}}function xt(c,f){return c===0?f:c===1?3+f:c===2?6:c===3?7+f:c===4?10+f:-1}function dn(){if(t(Z)){const c=Math.random();return c<.7?3:c<.92?5:10}else{const c=Math.random();return c<.7?1:c<.92?2:3}}const fn={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function pn(){var re;const c=[],f=[];for(let E=0;E<r;E++)wt[E]==="l"&&f.push(E);if(f.length>=5){const E=f.length;g(Ne,t(Ne)+E),t(Z)?console.log(`🎰 FREE SPINS RETRIGGERED! +${E} FREE SPINS! Total: ${t(Ne)}`):(g(Z,!0),g(Qe,0),Ee(Tt),console.log(`🎰 FREE SPINS TRIGGERED! ${f.length} scatters = ${E} FREE SPINS!`),ts()),c.push({symbol:"l",count:f.length,payout:0,positions:f,multiplier:1})}const A=[];for(let E=0;E<3;E++)for(let C=0;C<3;C++)for(let W=0;W<1;W++)for(let j=0;j<3;j++)for(let U=0;U<3;U++){const G=[xt(0,E),xt(1,C),xt(2,W),xt(3,j),xt(4,U)];A.push(G)}console.log(`Generated ${A.length} possible paths (should be 81)`);const S=[];for(const E of A){const C=E.map(G=>wt[G]);if(C[0]==="emptyslot"||C[0]==="l")continue;let W=null;for(let G=0;G<C.length;G++)if(C[G]!=="h"&&C[G]!=="emptyslot"&&C[G]!=="l"){W=C[G];break}if(!W)continue;let j=0;const U=new Set;for(let G=0;G<E.length;G++){const Pe=E[G],{col:de}=Sa(Pe),te=C[G];(te===W||te==="h")&&U.add(de)}for(let G=0;G<5&&U.has(G);G++)j++;if(j>=3){const Pe=E[0]%3;S.push({symbol:W,length:j,path:E.slice(0,j),startRow:Pe})}}const h=[],$=new Map;for(const E of S){const C=`${E.symbol}-${E.path.join(",")}`;$.has(C)||$.set(C,[]),$.get(C).push(E)}for(const[E,C]of $.entries()){const W=Math.max(...C.map(U=>U.length)),j=C.find(U=>U.length===W);j&&h.push(j)}const k=[],O=new Map;for(const E of h)O.has(E.symbol)||O.set(E.symbol,[]),O.get(E.symbol).push(E);const I=[];for(const[E,C]of O.entries()){const W=Math.max(...C.map(U=>U.length)),j=C.filter(U=>U.length===W);I.push(...j)}const D=new Map;for(const E of I){const C=`${E.symbol}-${E.length}`;D.has(C)||D.set(C,[]),D.get(C).push(E)}const M=I.length>0?dn():1;for(const[E,C]of D.entries()){const W=C[0],j=(re=fn[W.symbol])==null?void 0:re[W.length];if(j!==void 0&&j>0){const U=new Map;for(const te of C)for(let fe=0;fe<te.length;fe++)U.has(fe)||U.set(fe,new Set),U.get(fe).add(te.path[fe]);let G=1;for(let te=0;te<W.length;te++){const fe=U.get(te);G*=fe?fe.size:1}const Pe=j*t(Ae)*G*M;console.log(`  ${W.length}x${W.symbol}: ${G} ways × ${j}x × ${t(Ae)} bet × ${M} mult = ${Pe}`);const de=new Set;for(const te of C)te.path.forEach(fe=>de.add(fe));k.push({symbol:W.symbol,count:W.length,payout:Pe,positions:Array.from(de),multiplier:M})}}return c.push(...k),c}let $e=P(0),nt=P(he([])),De=P(!1),Me=P(!1),ps=P(!1),us=P(0);const Ea={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function gs(c){if(!t(Oe)||!qt[c])return;const f=qt[c];f.currentTime=0,f.play().catch(A=>{console.warn("Äänen toisto epäonnistui:",c,A)})}function un(c){_t.forEach(f=>ce.stage.removeChild(f)),_t=[],c.forEach(f=>{f.positions.forEach(A=>{const S=Re[A],h=new pr().rect(0,0,ie,X).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});h.x=S.container.x,h.y=S.container.y,ce.stage.addChild(h),_t.push(h);let $=0,k=1;const O=.05;ce.ticker.add(()=>{$+=k*O,$>=.4&&(k=-1),$<=0&&(k=1),h.alpha=.5+$})})})}function hs(){_t.forEach(c=>ce.stage.removeChild(c)),_t=[]}let wt=$a(),vs,ce,Re=[],_t=[];class gn{constructor(f,A){Se(this,"index");Se(this,"container");Se(this,"offset",0);Se(this,"speed",0);Se(this,"targetSpeed",30);Se(this,"state","idle");Se(this,"stopDelay",0);Se(this,"bounceOffset",0);Se(this,"bounceSpeed",0);Se(this,"bounceFrames",0);this.index=f,this.container=A}start(f){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=f}startSynchronized(f){const A=Vr[t(J)],S=60+f*A;this.start(S)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const f=t(J)==="slow"?.88:t(J)==="medium"?.92:.95;this.speed*=f,this.speed<2.5&&(this.state="bouncing",this.speed=0,this.offset=0,this.bounceOffset=0,this.bounceSpeed=4,gs("stop"),Zr())}this.state==="bouncing"&&(this.bounceSpeed*=.8,this.bounceOffset+=this.bounceSpeed,Math.abs(this.bounceSpeed)<.2&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=ue&&(this.offset=0,wt[this.index]=Aa(this.index)))}}draw(){const f=this.container;f.removeChildren();const A=wt[this.index];if(!A||!Lt||!Lt[A])return;const S=this.offset+this.bounceOffset,h=($,k)=>{const O=Lt[$];if(!O)return;const I=new aa(O);I.width=ie,I.height=X,I.x=0,I.y=k,f.addChild(I)};h(A,S-ue),h(A,S),h(A,S+ue)}}let o=P(1);ha(async()=>{ce=new Wr,await ce.init({width:n,height:i,backgroundAlpha:0}),vs.appendChild(ce.canvas);const c=()=>{const h=window.innerWidth,$=window.innerHeight,k=h/n,O=$/i,I=$>h,D=h<=768;let M;D&&I?M=Math.min(k*1,O*.95,1.2):D?M=Math.min(k*.98,O*.95,1.1):I?M=Math.min(k*.95,O*.85,1):M=Math.min(k,O,1),g(o,he(M)),ce.stage.scale.set(M),ce.renderer.resize(n,i)};c(),window.addEventListener("resize",c);const f=h=>{(h.code==="Space"||h.key===" ")&&(h.preventDefault(),Re.some(k=>k.state==="spinning"||k.state==="slowing")?(Re.forEach(k=>{k.state==="spinning"?(k.stopDelay=0,k.state="slowing",k.speed=k.targetSpeed*.5):k.state==="slowing"&&(k.speed=k.speed*.3)}),console.log("⚡ Skip spin - kiekot pysähtyvät nopeasti")):ms())};window.addEventListener("keydown",f);const A={};try{g(vt,"Loading background and UI images..."),ke.push(`Loading background: ${_e}`),ke.push(`Loading reel frames: ${ae}`),ke.push(`Loading logo: ${me}`),await lt.load([{alias:"background",src:_e},{alias:"reelframes",src:ae},{alias:"logo",src:me}]),rs=Je.from("background"),ht=Je.from("reelframes"),Ce=Je.from("logo"),console.log("✅ Background texture created:",rs.width,"x",rs.height),console.log("✅ Reel frames texture created:",ht.width,"x",ht.height),console.log("✅ Logo texture created:",Ce.width,"x",Ce.height),ke.push("✅ All UI images loaded"),g(vt,"Loading symbols...");const h=[];for(const $ of we)h.push({alias:$,src:We[$]});await lt.load(h);for(const $ of we){const k=We[$];ke.push(`Loading symbol ${$}: ${k}`);try{const O=Je.from($);A[$]=O,console.log(`✅ Symbol ${$} loaded:`,O.width,"x",O.height),ke.push(`✅ Symbol ${$} loaded`)}catch(O){const I=`❌ Failed to load symbol ${$} from ${k}: ${O}`;throw ke.push(I),console.error(I),new Error(I)}}Lt=A,g(vt,"Assets loaded successfully!")}catch(h){g(st,`Asset loading failed: ${h}`),ke.push(t(st)),console.error(t(st));return}console.log("Ladataan ääniefektit...");for(const[h,$]of Object.entries(et)){const k=new Audio;k.src=$,k.preload="auto",k.volume=.7,k.load(),k.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${$} (käytetään hiljaista placeholderia)`)}),qt[h]=k}[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(h=>({x:h.x+d,y:h.y+v})),Re=[];for(let h=0;h<r;h++){const $=Sa(h),k=$.col,O=$.row,I=300+k*(ie+20),D=250+O*(X+15),M=h===6?I+u:I,re=h===6?D+y:D,E=new va;E.x=M+d,E.y=re+v;const C=new pr().rect(0,0,ie,X).fill(16777215);C.x=E.x,C.y=E.y,E.mask=C,ce.stage.addChild(C),ce.stage.addChild(E),Re.push(new gn(h,E))}if(ht){const h=new aa(ht);h.scale.set(1),h.x=250,h.y=200,ce.stage.addChild(h),es=h,g(Zt,he(h.width)),console.log("Reel frames lisätty:",h.width.toFixed(0),"x",h.height.toFixed(0)),console.log("Control panel leveys päivitetty:",t(Zt).toFixed(0))}if(Ce){Ce.source&&(Ce.source.scaleMode="nearest",Ce.source.antialias=!1,Ce.source.update());const h=new aa(Ce);h.roundPixels=!0,h.scale.set(F),h.x=(ce.renderer.width-h.width)/2+R,h.y=H,ce.stage.addChild(h),console.log("Logo lisätty päällimmäiseen layeriin:",h.width.toFixed(0),"x",h.height.toFixed(0))}xa(),ce.ticker.add(hn)});function hn(){for(const c of Re)c.update(),c.draw();if(!t(De)&&!os&&Re.every(c=>c.state==="stopped")){os=!0,Kr();const c=pn();console.log(`Checking wins, found ${c.length} wins`),c.length>0?(g(nt,he(c)),g($e,he(c.reduce((f,A)=>f+A.payout,0))),an(t(at),c,t($e)),mn(t($e)),g(De,!0),g(tn,he(Date.now())),console.log(`🎉 VOITTO! ${t($e)} pistettä! Uusi saldo: ${t(je)}`),console.log(`isShowingWin set to: ${t(De)}, totalWin: ${t($e)}`),c.forEach(f=>{const A=f.multiplier?` (${f.multiplier}x multiplier)`:"";console.log(`${f.count}x ${f.symbol} = ${f.payout} pistettä${A}`)}),un(c),gs("win"),t(le)&&!qe&&(qe=!0,Be=window.setTimeout(()=>{t(De)&&t(le)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),g(De,!1),hs()),Be=window.setTimeout(()=>{qe=!1,bs()},200)},1500))):(console.log("No wins found this spin"),t(le)&&!qe&&(qe=!0,Be=window.setTimeout(()=>{qe=!1,bs()},500))),t(Z)&&t(Ne)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${t(Qe)}`),setTimeout(()=>{g(us,he(t(Qe))),g(ps,!0)},2e3))}}function ms(){if(t(Z)||Yr(),qr(),t(Z)&&t(Ne)>0)Ee(Ne,-1),Ee(ds),console.log(`🎰 FREE SPIN! Remaining: ${t(Ne)}`);else if(!t(Z)){if(t(je)<t(Ae)){alert(`Not enough credits! Balance: ${t(je)}, Bet: ${t(Ae)}`),kt();return}g(je,t(je)-t(Ae)),Ee(at),g(rt,t(rt)+t(Ae))}Be!==null&&(clearTimeout(Be),Be=null),g(nt,he([])),g($e,0),g(Ke,0),console.log("🔄 lastWin nollattu: "+t(Ke)),g(De,!1),os=!1,hs(),wt=$a(),Re.forEach((c,f)=>{c.startSynchronized(f)}),gs("spin")}function vn(c,f,A=1400){if(typeof window>"u")return;const S=document.getElementById("winLabel");if(!S)return;S.classList.add("rolling");const h=performance.now(),$=f-c,k=I=>1-Math.pow(1-I,3);function O(I){const D=Math.min(1,(I-h)/A),M=c+$*k(D);g(Ke,M),D<1?requestAnimationFrame(O):(g(Ke,he(f)),S.classList.remove("rolling"),S.classList.add("winHit"),setTimeout(()=>S.classList.remove("winHit"),450))}requestAnimationFrame(O)}function mn(c){g(je,t(je)+c),g(yt,t(yt)+c);const f=t(Ke);g(Ke,he(c));const A=c>t(Ae)*50?2e3:1400;if(vn(f,c,A),t(Z)&&g(Qe,t(Qe)+c),c>0){Ee(is);const S=c/t(Ae);S>=10&&en(),tt&&(S>=50?tt.show():S>=20?setTimeout(()=>tt.show(),200):S>=10&&setTimeout(()=>tt.show(),400))}}function bn(){t(mt)<ka.length-1&&Ee(mt)}function yn(){t(mt)>0&&Ee(mt,-1)}function Ue(c){g(le,!0),g(bt,he(c)),g(ge,!1),bs()}function kt(){g(le,!1),g(bt,0),qe=!1,Be!==null&&(clearTimeout(Be),Be=null)}function bs(){if(!t(le)||t(bt)<=0){kt();return}console.log(`Autoplay: Starting spin ${t(bt)} rounds left`),ms(),Ee(bt,-1)}function xn(){confirm("Reset all statistics?")&&(g(at,0),g(rt,0),g(yt,0),g(is,0),g(Tt,0),g(ds,0),g(Rt,0),g(fs,0))}var La=el();Hn(c=>{var f=Ni();p(Xe(f)),V(c,f)});var Ta=Xe(La);{var wn=c=>{ji(c,{onloaded:()=>g(_a,!0)})};se(Ta,c=>{t(_a)||c(wn)})}var Ra=p(Ta,2);{var _n=c=>{var f=Hi(),A=p(w(f),2),S=p(w(A));_(A);var h=p(A,2);{var $=W=>{var j=Di(),U=p(w(j));_(j),ne(()=>q(U,` ${t(st)??""}`)),V(W,j)};se(h,W=>{t(st)&&W($)})}var k=p(h,2),O=p(w(k));O.nodeValue=` ${xe??""}`,_(k);var I=p(k,2),D=p(w(I));D.nodeValue=` ${_e??""}`,_(I);var M=p(I,2),re=p(w(M));_(M);var E=p(M,2);{var C=W=>{var j=Gi(),U=w(j),G=w(U);_(U);var Pe=p(U,2);Vt(Pe,17,()=>ke,Ht,(de,te)=>{var fe=Ui(),jn=w(fe,!0);_(fe),ne(()=>q(jn,t(te))),V(de,fe)}),_(j),ne(()=>q(G,`Log (${ke.length??""})`)),V(W,j)};se(E,W=>{ke.length>0&&W(C)})}_(f),ne(()=>{q(S,` ${t(vt)??""}`),q(re,` ${We.a??""}`)}),V(c,f)};se(Ra,c=>{(t(vt)!=="Assets loaded successfully!"||t(st))&&c(_n)})}var Pa=p(Ra,2);{var kn=c=>{var f=Xi(),A=p(w(f),2),S=w(A);_(A);var h=p(A,2);Vt(h,17,()=>t(nt),Ht,(I,D)=>{var M=Vi(),re=w(M);_(M),ne(E=>q(re,`${t(D).count??""} × ${Ea[t(D).symbol]??""} = ${E??""} pistettä`),[()=>t(D).payout.toFixed(2)]),V(I,M)});var $=p(h,2);{var k=I=>{var D=Yi(),M=w(D),re=w(M);_(M),_(D),ne(()=>q(re,`✨ ${t(nt)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),V(I,D)};se($,I=>{t(nt).length>0&&t(nt)[0].multiplier>1&&I(k)})}var O=p($,2);_(f),ne(I=>q(S,`${I??""} pistettä`),[()=>t($e).toFixed(2)]),B("click",O,()=>{g(De,!1),hs(),console.log("Win popup closed, ready for next spin")}),V(c,f)};se(Pa,c=>{t($e)>0&&t(De)&&c(kn)})}var Ia=p(Pa,2);{var An=c=>{var f=Qi(),A=p(w(f),2),S=p(w(A),2),h=w(S),$=p(w(h),2),k=w($,!0);_($),_(h);var O=p(h,2);{var I=de=>{var te=Ki();B("click",te,kt),V(de,te)},D=de=>{var te=qi();B("click",te,()=>{g(ge,!0),g(Me,!1)}),V(de,te)};se(O,de=>{t(le)?de(I):de(D,!1)})}_(S);var M=p(S,2),re=w(M),E=p(w(re),2),C=w(E,!0);_(E),_(re);var W=p(re,2),j=w(W),U=p(j,2),G=p(U,2);_(W),_(M),Er(2),_(A);var Pe=p(A,10);_(f),ne(de=>{x(f,"style",`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.95);
    color: white;
    padding: ${30*t(o)}px;
    border-radius: ${15*t(o)}px;
    font-family: Arial, sans-serif;
    z-index: 3000;
    border: ${3*t(o)}px solid #ffd700;
    max-width: ${600*t(o)}px;
    max-height: ${de??""}px;
    overflow-y: auto;
    font-size: ${t(o)??""}em;
  `),x($,"style",`color: ${(t(le)?"#00ff00":"#ff6666")??""}; font-weight: bold;`),q(k,t(le)?`ON (${autoPlayRounds} left)`:"OFF"),q(C,t(J)==="slow"?"🐌 SLOW":t(J)==="medium"?"🏃 MEDIUM":"⚡ FAST"),x(j,"style",`flex: 1; padding: 10px; background: ${(t(J)==="slow"?"linear-gradient(135deg, #4488ff 0%, #66aaff 100%)":"rgba(255,255,255,0.1)")??""}; color: white; border: ${(t(J)==="slow"?"2px solid #ffd700":"1px solid #555")??""}; border-radius: 8px; cursor: pointer; font-size: 0.9em;`),x(U,"style",`flex: 1; padding: 10px; background: ${(t(J)==="medium"?"linear-gradient(135deg, #4488ff 0%, #66aaff 100%)":"rgba(255,255,255,0.1)")??""}; color: white; border: ${(t(J)==="medium"?"2px solid #ffd700":"1px solid #555")??""}; border-radius: 8px; cursor: pointer; font-size: 0.9em;`),x(G,"style",`flex: 1; padding: 10px; background: ${(t(J)==="fast"?"linear-gradient(135deg, #4488ff 0%, #66aaff 100%)":"rgba(255,255,255,0.1)")??""}; color: white; border: ${(t(J)==="fast"?"2px solid #ffd700":"1px solid #555")??""}; border-radius: 8px; cursor: pointer; font-size: 0.9em;`)},[()=>Math.min(i*t(o)*.8,80*window.innerHeight/100)]),B("click",j,()=>{g(J,"slow")}),B("click",U,()=>{g(J,"medium")}),B("click",G,()=>{g(J,"fast")}),B("click",Pe,()=>{g(Me,!1)}),V(c,f)};se(Ia,c=>{t(Me)&&c(An)})}var Oa=p(Ia,2);{var $n=c=>{var f=Ji(),A=w(f),S=p(w(A),4),h=w(S,!0);_(S);var $=p(S,2);_(A),_(f),ne(k=>q(h,k),[()=>t(us).toFixed(2)]),B("click",$,()=>{g(ps,!1),g(Z,!1),g(Qe,0),g(us,0),ts()}),B("mouseenter",$,k=>{k.currentTarget.style.transform="scale(1.05)",k.currentTarget.style.boxShadow="0 6px 20px rgba(255, 215, 0, 0.6)"}),B("mouseleave",$,k=>{k.currentTarget.style.transform="scale(1)",k.currentTarget.style.boxShadow="0 4px 15px rgba(255, 215, 0, 0.4)"}),V(c,f)};se(Oa,c=>{t(ps)&&c($n)})}var Ca=p(Oa,2),ys=w(Ca),At=w(ys);x(At,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${n}px;
        height: ${i}px;
      `);var xs=w(At),ws=p(xs,2),Ba=w(ws);{var Sn=c=>{var f=Zi(),A=w(f),S=p(A,2),h=p(S,2),$=p(h,2),k=p($,2),O=p(k,2),I=p(O,2),D=p(I,2),M=p(D,2),re=p(M,2);_(f),ne(()=>{x(f,"style",`
    position: absolute;
    bottom: ${(b+20)*t(o)}px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.95);
    padding: ${20*t(o)}px;
    border-radius: ${15*t(o)}px;
    border: ${3*t(o)}px solid #0088ff;
    box-shadow: 0 ${8*t(o)}px ${30*t(o)}px rgba(0, 136, 255, 0.6);
    z-index: 2000;
    min-width: ${250*t(o)}px;
  `),x(A,"style",`color: white; font-weight: bold; margin-bottom: ${15*t(o)}px; text-align: center; font-size: ${18*t(o)}px;`),x(S,"style",`
        width: 100%;
        padding: ${12*t(o)}px;
        margin-bottom: ${8*t(o)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*t(o)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(o)}px;
        box-shadow: 0 ${4*t(o)}px ${10*t(o)}px rgba(68, 170, 68, 0.4);
      `),x(h,"style",`
        width: 100%;
        padding: ${12*t(o)}px;
        margin-bottom: ${8*t(o)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*t(o)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(o)}px;
        box-shadow: 0 ${4*t(o)}px ${10*t(o)}px rgba(68, 170, 68, 0.4);
      `),x($,"style",`
        width: 100%;
        padding: ${12*t(o)}px;
        margin-bottom: ${8*t(o)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*t(o)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(o)}px;
        box-shadow: 0 ${4*t(o)}px ${10*t(o)}px rgba(68, 170, 68, 0.4);
      `),x(k,"style",`
        width: 100%;
        padding: ${12*t(o)}px;
        margin-bottom: ${8*t(o)}px;
        background: linear-gradient(135deg, #4488ff 0%, #66aaff 100%);
        color: white;
        border: none;
        border-radius: ${8*t(o)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(o)}px;
        box-shadow: 0 ${4*t(o)}px ${10*t(o)}px rgba(68, 136, 255, 0.4);
      `),x(O,"style",`
        width: 100%;
        padding: ${12*t(o)}px;
        margin-bottom: ${8*t(o)}px;
        background: linear-gradient(135deg, #4488ff 0%, #66aaff 100%);
        color: white;
        border: none;
        border-radius: ${8*t(o)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(o)}px;
        box-shadow: 0 ${4*t(o)}px ${10*t(o)}px rgba(68, 136, 255, 0.4);
      `),x(I,"style",`
        width: 100%;
        padding: ${12*t(o)}px;
        margin-bottom: ${8*t(o)}px;
        background: linear-gradient(135deg, #ff8844 0%, #ffaa66 100%);
        color: white;
        border: none;
        border-radius: ${8*t(o)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(o)}px;
        box-shadow: 0 ${4*t(o)}px ${10*t(o)}px rgba(255, 136, 68, 0.4);
      `),x(D,"style",`
        width: 100%;
        padding: ${12*t(o)}px;
        margin-bottom: ${8*t(o)}px;
        background: linear-gradient(135deg, #ff8844 0%, #ffaa66 100%);
        color: white;
        border: none;
        border-radius: ${8*t(o)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(o)}px;
        box-shadow: 0 ${4*t(o)}px ${10*t(o)}px rgba(255, 136, 68, 0.4);
      `),x(M,"style",`
        width: 100%;
        padding: ${12*t(o)}px;
        margin-bottom: ${15*t(o)}px;
        background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%);
        color: white;
        border: none;
        border-radius: ${8*t(o)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(o)}px;
        box-shadow: 0 ${4*t(o)}px ${10*t(o)}px rgba(255, 68, 68, 0.4);
      `),x(re,"style",`
        width: 100%;
        padding: ${10*t(o)}px;
        background: rgba(255, 255, 255, 0.1);
        color: #aaa;
        border: ${1*t(o)}px solid #555;
        border-radius: ${8*t(o)}px;
        cursor: pointer;
        font-size: ${14*t(o)}px;
      `)}),B("click",S,()=>{Ue(10),g(ge,!1)}),B("click",h,()=>{Ue(25),g(ge,!1)}),B("click",$,()=>{Ue(50),g(ge,!1)}),B("click",k,()=>{Ue(100),g(ge,!1)}),B("click",O,()=>{Ue(200),g(ge,!1)}),B("click",I,()=>{Ue(500),g(ge,!1)}),B("click",D,()=>{Ue(1e3),g(ge,!1)}),B("click",M,()=>{Ue(5e3),g(ge,!1)}),B("click",re,()=>{g(ge,!1)}),V(c,f)};se(Ba,c=>{t(ge)&&c(Sn)})}var _s=p(Ba,2);x(_s,"src",`${K??""}/Control_leftend.png`);var Pt=p(_s,2),ks=w(Pt),It=w(ks),Ma=w(It);_(It);var As=p(It,2),Fa=w(As),$s=p(Fa,2),Ss=w($s),Ot=p(Ss,2),En=w(Ot,!0);_(Ot);var Wa=p(Ot,2);_($s),_(As);var Es=p(As,2);x(Es,"src",`${K??""}/Control_divider.png`);var Ls=p(Es,2),za=w(Ls),Ts=p(za,2),Rs=w(Ts),Ln=w(Rs,!0);_(Rs),_(Ts),_(Ls);var ja=p(Ls,2);x(ja,"src",`${K??""}/Control_divider.png`),_(ks);var Na=p(ks,2),Ps=p(Na,2),Is=w(Ps),Os=w(Is);_(Is),_(Ps);var Da=p(Ps,2),Ct=w(Da),Bt=w(Ct),Ua=p(Bt,2);_(Ct);var Cs=p(Ct,2);x(Cs,"src",`${K??""}/Control_divider.png`);var Mt=p(Cs,2),Ft=w(Mt),Ga=p(Ft,2);_(Mt);var Bs=p(Mt,2);x(Bs,"src",`${K??""}/Control_divider.png`);var Ms=p(Bs,2),Ha=w(Ms),Fs=p(Ha,2),Ws=w(Fs),Tn=w(Ws,!0);_(Ws),_(Fs),_(Ms);var zs=p(Ms,2);x(zs,"src",`${K??""}/Control_divider.png`);var Va=p(zs,2),Ya=w(Va);_(Va),_(Da),_(Pt);var Xa=p(Pt,2);x(Xa,"src",`${K??""}/Control_rightend.png`),_(ws),_(At),dr(At,c=>vs=c,()=>vs);var Wt=p(At,2);Wt.textContent=`🛠️ DEBUG v${a}`;var Ka=p(Wt,2);const Rn=He(()=>t($e)/t(Ae)>=50?"jackpot":t($e)/t(Ae)>=20?"medium":"small");dr(Mi(Ka,{get winLevel(){return t(Rn)},get winAmount(){return t($e)},get vinylStartScale(){return as.vinylStartScale},get vinylEndScale(){return as.vinylEndScale},get sparkleScale(){return as.sparkleScale}}),c=>tt=c,()=>tt);var zt=p(Ka,2),qa=p(w(zt),2);qa.textContent=`v${a}`;var js=p(qa,2),Qa=p(w(js),2),Pn=w(Qa,!0);_(Qa),_(js);var Ns=p(js,2),Ja=p(w(Ns),2),In=w(Ja,!0);_(Ja),_(Ns);var Ds=p(Ns,2),Za=p(w(Ds),2),On=w(Za,!0);_(Za),_(Ds);var Us=p(Ds,2),Gs=p(w(Us),2),Cn=w(Gs);_(Gs),_(Us);var Hs=p(Us,2),Vs=p(w(Hs),2),Bn=w(Vs);_(Vs),_(Hs);var Ys=p(Hs,2),er=p(w(Ys),2),Mn=w(er,!0);_(er),_(Ys);var Xs=p(Ys,2),tr=p(w(Xs),2),Fn=w(tr,!0);_(tr),_(Xs);var Ks=p(Xs,2),sr=p(w(Ks),2),Wn=w(sr);_(sr),_(Ks);var ar=p(Ks,2),rr=p(ar,2),ot=w(rr),zn=w(ot);_(ot);var jt=p(ot,2),qs=p(jt,2);_(rr),_(zt);var Qs=p(zt,2),Nt=w(Qs),Js=p(Nt,2);_(Qs),_(ys),_(Ca),ne((c,f,A,S,h,$,k,O)=>{x(ys,"style",`
    position: relative;
    width: ${n*t(o)}px;
    height: ${i*t(o)}px;
  `),x(xs,"style",`
          position: absolute;
          top: ${130*t(o)}px;
          right: ${20*t(o)}px;
          padding: ${10*t(o)}px ${15*t(o)}px;
          background-color: rgba(255, 215, 0, 0.3);
          border: ${2*t(o)}px solid rgba(255, 215, 0, 0.7);
          border-radius: ${8*t(o)}px;
          cursor: pointer;
          font-weight: bold;
          font-size: ${16*t(o)}px;
          color: white;
          text-shadow: 0 0 ${5*t(o)}px rgba(0,0,0,0.8);
          z-index: 1000;
          min-width: ${180*t(o)}px;
        `),x(ws,"style",`
        position: absolute;
        left: ${((es?es.x:L)+T)*t(o)}px;
        top: ${(m+Q)*t(o)}px;
        width: ${t(Zt)*t(o)}px;
        height: ${b*t(o)}px;
        display: flex;
        align-items: center;
        z-index: 1000;
      `),x(_s,"style",`height: ${b*t(o)}px; flex-shrink: 0;`),x(Pt,"style",`
    flex-grow: 1;
    height: ${b*t(o)}px;
    background-image: url('${K??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    padding: 0 ${20*t(o)}px;
    position: relative;
    gap: ${20*t(o)}px;
  `),x(It,"style",`display: none; align-items: center; justify-content: center; margin-right: ${10*t(o)}px;`),x(Ma,"style",`
            width: ${50*t(o)}px;
            height: ${50*t(o)}px;
            background-image: url('${K??""}/Control_menubar.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(Fa,"style",`color: #00ff00; font-size: ${12*t(o)}px; font-weight: bold; line-height: 1; height: ${16*t(o)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(o)}px;`),x($s,"style",`display: flex; gap: ${5*t(o)}px; align-items: center; height: ${44*t(o)}px;`),x(Ss,"style",`
              width: ${40*t(o)}px;
              height: ${40*t(o)}px;
              background-image: url('${K??""}/Control_lowerbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            `),x(Ot,"style",`
            color: #fff;
            font-size: ${18*t(o)}px;
            font-weight: bold;
            min-width: ${80*t(o)}px;
            text-align: center;
            font-family: 'Courier New', monospace;
          `),q(En,c),x(Wa,"style",`
              width: ${40*t(o)}px;
              height: ${40*t(o)}px;
              background-image: url('${K??""}/Control_upperbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            `),x(Es,"style",`height: ${b*.8*t(o)}px; flex-shrink: 0;`),x(za,"style",`color: #00ff00; font-size: ${12*t(o)}px; font-weight: bold; line-height: 1; height: ${16*t(o)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(o)}px;`),x(Ts,"style",`height: ${44*t(o)}px; display: flex; align-items: center;`),x(Rs,"style",`
            color: #fff;
            font-size: ${20*t(o)}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
          `),q(Ln,f),x(ja,"style",`height: ${b*.8*t(o)}px; flex-shrink: 0;`),x(Na,"style",`flex-shrink: 0; width: ${130*t(o)}px;`),fa(Is,1,`play-button-wrapper ${(t(ss)?"glare-animate":"")??""}`,"svelte-1bferk7"),x(Os,"style",`
            width: ${110*t(o)}px;
            height: ${110*t(o)}px;
            background-image: url('${K??""}/${(t(le)?"Control_playbutton_stop.png":"Control_playbutton.png")??""}');
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
          `),x(Os,"title",t(le)?"STOP AUTOPLAY":"SPIN"),x(Ct,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*t(o)}px;`),x(Bt,"style",`
            width: ${50*t(o)}px;
            height: ${50*t(o)}px;
            background-image: url('${K??""}/${(t(le)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(Bt,"title",t(le)?"Stop Autoplay":"Autoplay"),x(Ua,"src",`${K??""}/${(t(le)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),x(Ua,"style",`height: ${10*t(o)}px; width: auto; display: block;`),x(Cs,"style",`height: ${b*.8*t(o)}px; flex-shrink: 0;`),x(Mt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*t(o)}px;`),x(Ft,"style",`
            width: ${50*t(o)}px;
            height: ${50*t(o)}px;
            background-image: url('${K??""}/Control_fastplay_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(Ft,"title",`Spin Speed: ${(t(J)==="slow"?"Slow":t(J)==="medium"?"Medium":"Fast")??""}`),x(Ga,"src",`${K??""}/${(t(J)==="slow"?"Control_bar_deselect.png":t(J)==="medium"?"Control_half_bar_select.png":"Control_bar_select.png")??""}`),x(Ga,"style",`height: ${10*t(o)}px; width: auto; display: block;`),x(Bs,"style",`height: ${b*.8*t(o)}px; flex-shrink: 0;`),x(Ha,"style",`color: #00ff00; font-size: ${12*t(o)}px; font-weight: bold; line-height: 1; height: ${16*t(o)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(o)}px;`),x(Fs,"style",`height: ${44*t(o)}px; display: flex; align-items: center;`),x(Ws,"style",`
            color: #fff;
            font-size: ${20*t(o)}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
          `),q(Tn,A),x(zs,"style",`height: ${b*.8*t(o)}px; flex-shrink: 0;`),x(Ya,"style",`
            width: ${50*t(o)}px;
            height: ${50*t(o)}px;
            background-image: url('${K??""}/Control_menubar.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(Xa,"style",`height: ${b*t(o)}px; flex-shrink: 0;`),x(Wt,"style",`
    position: absolute;
    top: ${190*t(o)}px;
    right: ${20*t(o)}px;
    padding: ${10*t(o)}px ${15*t(o)}px;
    background-color: rgba(0, 255, 0, 0.3);
    border: ${2*t(o)}px solid rgba(0, 255, 0, 0.7);
    border-radius: ${8*t(o)}px;
    cursor: pointer;
    font-weight: bold;
    font-size: ${16*t(o)}px;
    color: white;
    text-shadow: 0 0 ${5*t(o)}px rgba(0,0,0,0.8);
    z-index: 10000;
    min-width: ${180*t(o)}px;
    pointer-events: auto;
  `),x(zt,"style",`
  position: absolute;
  top: 20px;
  left: 20px;
  display: ${(t(ns)?"block":"none")??""};
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
`),q(Pn,S),q(In,h),q(On,$),x(Gs,"style",`color: ${k??""};`),q(Cn,`${t(ls)??""}%`),x(Vs,"style",`color: ${O??""};`),q(Bn,`${t(cs)??""}%`),q(Mn,t(Tt)),q(Fn,t(ds)),q(Wn,`${t(sn)??""}%`),ot.disabled=t(ye).length===0,x(ot,"style",`
        width: 100%;
        padding: 5px;
        background: ${(t(ye).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(t(ye).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(t(ye).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(t(ye).length>0?"1":"0.5")??""};
      `),q(zn,`Download Win Log (${t(ye).length??""})`),jt.disabled=t(ye).length===0,x(jt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(t(ye).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(t(ye).length>0?"1":"0.5")??""};
      `),qs.disabled=t(Z),x(qs,"style",`
        width: 100%;
        padding: 5px;
        background: ${(t(Z)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(t(Z)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(t(Z)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(t(Z)?"0.5":"1")??""};
      `),x(Qs,"style",`
  position: absolute;
  top: ${10*t(o)}px;
  right: ${10*t(o)}px;
  display: flex;
  gap: ${10*t(o)}px;
  z-index: 1001;
`),x(Nt,"style",`
      width: ${50*t(o)}px;
      height: ${50*t(o)}px;
      background-image: url('${K??""}/${(t(Te)?"music_on.png":"music_off.png")??""}');
      background-size: contain;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
      background-color: transparent;
    `),x(Nt,"title",t(Te)?"Music: ON":"Music: OFF"),x(Js,"style",`
      width: ${50*t(o)}px;
      height: ${50*t(o)}px;
      background-image: url('${K??""}/${(t(Oe)?"sounds_on.png":"sounds_off.png")??""}');
      background-size: contain;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
      background-color: transparent;
    `),x(Js,"title",t(Oe)?"Sound: ON":"Sound: OFF")},[()=>t(Ae).toFixed(2),()=>t(je).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>t(Ke).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>t(at).toLocaleString(),()=>t(rt).toLocaleString(),()=>t(yt).toLocaleString(),()=>parseFloat(t(ls))>=95?"#00ff00":parseFloat(t(ls))>=85?"#ffff00":"#ff6666",()=>parseFloat(t(cs))>=30?"#00ff00":parseFloat(t(cs))>=20?"#ffff00":"#ff6666"]),B("click",xs,()=>{g(Me,!t(Me))}),B("click",Ma,()=>{g(Me,!t(Me))}),B("click",Ss,yn),B("click",Wa,bn),B("click",Os,()=>{t(le)?kt():Re.some(f=>f.state==="spinning"||f.state==="slowing")?Re.forEach(f=>{f.state==="spinning"?(f.stopDelay=0,f.state="slowing",f.speed=f.targetSpeed*.5):f.state==="slowing"&&(f.speed=f.speed*.3)}):ms()}),B("click",Bt,()=>{t(le)?kt():g(ge,!t(ge))}),B("click",Ft,()=>{t(J)==="slow"?g(J,"medium"):t(J)==="medium"?g(J,"fast"):g(J,"slow")}),B("click",Ya,()=>{g(Me,!t(Me))}),B("click",Wt,()=>{g(ns,!t(ns))}),B("click",ar,xn),B("click",ot,rn),B("click",jt,nn),B("click",qs,on),B("click",Nt,Qr),B("click",Js,Jr),V(s,La),Xt()}var sl=ee('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),al=ee('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function rl(s,e){Yt(e,!1);let a=it(e,"isAuthenticated",12,!1),r=la(""),n=la(!1);const i="slot2024";function l(){t(r)===i?(a(!0),sessionStorage.setItem("gameAuthenticated","true")):(g(n,!0),g(r,""),setTimeout(()=>g(n,!1),3e3))}ha(()=>{a(sessionStorage.getItem("gameAuthenticated")==="true")}),Yn();var d=Gt(),v=Xe(d);{var y=u=>{var m=al(),b=w(m),L=p(w(b),4),T=w(L);To(T),Er(2),_(L);var Q=p(L,2);{var F=R=>{var H=sl();V(R,H)};se(Q,R=>{t(n)&&R(F)})}_(b),_(m),Po(T,()=>t(r),R=>g(r,R)),B("submit",L,Io(l)),V(u,m)};se(v,u=>{a()||u(y)})}V(s,d),Xt()}var nl=ee("<!> <!>",1);function ml(s){let e=la(!1);var a=nl(),r=Xe(a);rl(r,{get isAuthenticated(){return t(e)},set isAuthenticated(l){g(e,l)},$$legacy:!0});var n=p(r,2);{var i=l=>{tl(l,{})};se(n,l=>{t(e)&&l(i)})}V(s,a)}export{Cr as A,Pr as C,jo as R,Bo as S,Br as V,ml as _,Co as u};
