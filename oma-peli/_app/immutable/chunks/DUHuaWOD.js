const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./sjCg5fYR.js","./l1Sqtw7g.js","./BrW7ntrJ.js","./Fx7Xcyif.js","./DUH9uncm.js","./C2GHuDhf.js","./C2GvypJb.js","./Dd43-LCm.js"])))=>i.map(i=>d[i]);
var jn=Object.defineProperty;var Dn=(s,e,a)=>e in s?jn(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var Se=(s,e,a)=>Dn(s,typeof e!="symbol"?e+"":e,a);import{g as Nn,l as Un,e as Ht,a as V,t as ee,n as wr,i as C,j as Gn,k as Hn}from"./CsxIJThA.js";import{i as Yn}from"./DqfWCwGf.js";import{y as Le,j as Vn,a8 as Xn,F as t,Q as Kn,aa as qn,ab as sr,h as ar,e as Xs,k as At,l as Qn,ac as _r,w as kr,ad as Jn,q as Ar,a7 as Zn,U as eo,a2 as rr,ar as Ks,z as nr,as as to,at as so,au as ao,o as ro,av as no,aw as oo,ax as io,ay as lo,b as co,az as fo,aA as po,a6 as uo,aB as ho,aC as go,D as vo,L as mo,p as Et,f as Ye,ah as R,a as Lt,T as h,c as x,s as f,r as w,t as re,I as ce,ag as da,aD as Ee,aE as $r,aF as aa}from"./Fx7Xcyif.js";import{_ as or,i as ne,p as be}from"./BrW7ntrJ.js";import{s as K}from"./DfoPkomP.js";import{p as qe,b as ir}from"./C4w3i6Q0.js";import{b as ye}from"./D_H0rzFZ.js";import{e as He,E as D,a as bo,C as fa,Q as ra,V as na,N as qs,D as xe,H as yo,p as Qe,ab as ct,ac as Je,ad as xo,w as Ge,ae as St,af as Sr,ag as dt,a9 as Ce,ah as Xt,a1 as Er,ai as wo,aj as Qs,y as Js}from"./l1Sqtw7g.js";import{A as _o,B as lr,G as ko,a as cr}from"./DUH9uncm.js";function Yt(s,e){return e}function Ao(s,e,a,r){for(var n=[],o=e.length,i=0;i<o;i++)ao(e[i].e,n,!0);var d=o>0&&n.length===0&&a!==null;if(d){var g=a.parentNode;ro(g),g.append(a),r.clear(),Ue(s,e[0].prev,e[o-1].next)}no(n,()=>{for(var b=0;b<o;b++){var u=e[b];d||(r.delete(u.k),Ue(s,u.prev,u.next)),oo(u.e,!d)}})}function Vt(s,e,a,r,n,o=null){var i=s,d={flags:e,items:new Map,first:null};Le&&Vn();var g=null,b=!1,u=Kn(()=>{var m=a();return Zn(m)?m:m==null?[]:Ar(m)});Xn(()=>{var m=t(u),_=m.length;if(b&&_===0)return;b=_===0;let L=!1;if(Le){var T=i.data===qn;T!==(_===0)&&(i=sr(),ar(i),Xs(!1),L=!0)}if(Le){for(var J=null,F,P=0;P<_;P++){if(At.nodeType===8&&At.data===Qn){i=At,L=!0,Xs(!1);break}var X=m[P],te=r(X,P);F=Lr(At,d,J,null,X,te,P,n,e,a),d.items.set(te,F),J=F}_>0&&ar(sr())}Le||$o(m,d,i,n,e,r,a),o!==null&&(_===0?g?_r(g):g=kr(()=>o(i)):g!==null&&Jn(g,()=>{g=null})),L&&Xs(!0),t(u)}),Le&&(i=At)}function $o(s,e,a,r,n,o,i){var d=s.length,g=e.items,b=e.first,u=b,m,_=null,L=[],T=[],J,F,P,X;for(X=0;X<d;X+=1){if(J=s[X],F=o(J,X),P=g.get(F),P===void 0){var te=u?u.e.nodes_start:a;_=Lr(te,e,_,_===null?e.first:_.next,J,F,X,r,n,i),g.set(F,_),L=[],T=[],u=_.next;continue}if(So(P,J,X),(P.e.f&Ks)!==0&&_r(P.e),P!==u){if(m!==void 0&&m.has(P)){if(L.length<T.length){var he=T[0],q;_=he.prev;var z=L[0],N=L[L.length-1];for(q=0;q<L.length;q+=1)dr(L[q],he,a);for(q=0;q<T.length;q+=1)m.delete(T[q]);Ue(e,z.prev,N.next),Ue(e,_,z),Ue(e,N,he),u=he,_=N,X-=1,L=[],T=[]}else m.delete(P),dr(P,u,a),Ue(e,P.prev,P.next),Ue(e,P,_===null?e.first:_.next),Ue(e,_,P),_=P;continue}for(L=[],T=[];u!==null&&u.k!==F;)(u.e.f&Ks)===0&&(m??(m=new Set)).add(u),T.push(u),u=u.next;if(u===null)continue;P=u}L.push(P),_=P,u=P.next}if(u!==null||m!==void 0){for(var _e=m===void 0?[]:Ar(m);u!==null;)(u.e.f&Ks)===0&&_e.push(u),u=u.next;var Pe=_e.length;if(Pe>0){var ve=null;Ao(e,_e,ve,g)}}nr.first=e.first&&e.first.e,nr.last=_&&_.e}function So(s,e,a,r){so(s.v,e),s.i=a}function Lr(s,e,a,r,n,o,i,d,g,b){var u=(g&io)!==0,m=(g&lo)===0,_=u?m?eo(n):rr(n):n,L=(g&to)===0?i:rr(i),T={i:L,v:_,k:o,a:null,e:null,prev:a,next:r};try{return T.e=kr(()=>d(s,_,L,b),Le),T.e.prev=a&&a.e,T.e.next=r&&r.e,a===null?e.first=T:(a.next=T,a.e.next=T.e),r!==null&&(r.prev=T,r.e.prev=T.e),T}finally{}}function dr(s,e,a){for(var r=s.next?s.next.e.nodes_start:a,n=e?e.e.nodes_start:a,o=s.e.nodes_start;o!==r;){var i=co(o);n.before(o),o=i}}function Ue(s,e,a){e===null?s.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}const fr=[...` 	
\r\f \v\uFEFF`];function Eo(s,e,a){var r=s==null?"":""+s;if(e&&(r=r?r+" "+e:e),a){for(var n in a)if(a[n])r=r?r+" "+n:n;else if(r.length)for(var o=n.length,i=0;(i=r.indexOf(n,i))>=0;){var d=i+o;(i===0||fr.includes(r[i-1]))&&(d===r.length||fr.includes(r[d]))?r=(i===0?"":r.substring(0,i))+r.substring(d+1):i=d}}return r===""?null:r}function oa(s,e,a,r,n,o){var i=s.__className;if(Le||i!==a){var d=Eo(a,r,o);(!Le||d!==s.getAttribute("class"))&&(d==null?s.removeAttribute("class"):e?s.className=d:s.setAttribute("class",d)),s.__className=a}else if(o)for(var g in o){var b=!!o[g];(n==null||b!==!!n[g])&&s.classList.toggle(g,b)}return o}function Lo(s){if(Le){var e=!1,a=()=>{if(!e){if(e=!0,s.hasAttribute("value")){var r=s.value;y(s,"value",null),s.value=r}if(s.hasAttribute("checked")){var n=s.checked;y(s,"checked",null),s.checked=n}}};s.__on_r=a,fo(a),Nn()}}function y(s,e,a,r){var n=s.__attributes??(s.__attributes={});Le&&(n[e]=s.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&s.nodeName==="LINK")||n[e]!==(n[e]=a)&&(e==="style"&&"__styles"in s&&(s.__styles={}),e==="loading"&&(s[po]=a),a==null?s.removeAttribute(e):typeof a!="string"&&Po(s).includes(e)?s[e]=a:s.setAttribute(e,a))}var pr=new Map;function Po(s){var e=pr.get(s.nodeName);if(e)return e;pr.set(s.nodeName,e=[]);for(var a,r=s,n=Element.prototype;n!==r;){a=ho(r);for(var o in a)a[o].set&&e.push(o);r=uo(r)}return e}function To(s,e,a=e){var r=go();Un(s,"input",n=>{var o=n?s.defaultValue:s.value;if(o=Zs(s)?ea(o):o,a(o),r&&o!==(o=e())){var i=s.selectionStart,d=s.selectionEnd;s.value=o??"",d!==null&&(s.selectionStart=i,s.selectionEnd=Math.min(d,s.value.length))}}),(Le&&s.defaultValue!==s.value||vo(e)==null&&s.value)&&a(Zs(s)?ea(s.value):s.value),mo(()=>{var n=e();Zs(s)&&n===ea(s.value)||s.type==="date"&&!n&&!s.value||n!==s.value&&(s.value=n??"")})}function Zs(s){var e=s.type;return e==="number"||e==="range"}function ea(s){return s===""?null:+s}function Ro(s){return function(...e){var a=e[0];return a.preventDefault(),s==null?void 0:s.apply(this,e)}}const ia=[];He.handleByNamedList(D.Environment,ia);async function Io(s){if(!s)for(let e=0;e<ia.length;e++){const a=ia[e];if(a.value.test()){await a.value.load();return}}}let $t;function Oo(){if(typeof $t=="boolean")return $t;try{$t=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{$t=!1}return $t}var Pr=(s=>(s[s.NONE=0]="NONE",s[s.COLOR=16384]="COLOR",s[s.STENCIL=1024]="STENCIL",s[s.DEPTH=256]="DEPTH",s[s.COLOR_DEPTH=16640]="COLOR_DEPTH",s[s.COLOR_STENCIL=17408]="COLOR_STENCIL",s[s.DEPTH_STENCIL=1280]="DEPTH_STENCIL",s[s.ALL=17664]="ALL",s))(Pr||{});class Bo{constructor(e){this.items=[],this._name=e}emit(e,a,r,n,o,i,d,g){const{name:b,items:u}=this;for(let m=0,_=u.length;m<_;m++)u[m][b](e,a,r,n,o,i,d,g);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const a=this.items.indexOf(e);return a!==-1&&this.items.splice(a,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Mo=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Tr=class Rr extends bo{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const a=[...Mo,...this.config.runners??[]];this._addRunners(...a),this._unsafeEvalCheck()}async init(e={}){const a=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Io(a),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const r in this._systemsHash)e={...this._systemsHash[r].constructor.defaultOptions,...e};e={...Rr.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let r=0;r<this.runners.init.items.length;r++)await this.runners.init.items[r].init(e);this._initOptions=e}render(e,a){let r=e;if(r instanceof fa&&(r={container:r},a&&(ra(na,"passing a second argument is deprecated, please use render options instead"),r.target=a.renderTexture)),r.target||(r.target=this.view.renderTarget),r.target===this.view.renderTarget&&(this._lastObjectRendered=r.container,r.clearColor??(r.clearColor=this.background.colorRgba),r.clear??(r.clear=this.background.clearBeforeRender)),r.clearColor){const n=Array.isArray(r.clearColor)&&r.clearColor.length===4;r.clearColor=n?r.clearColor:qs.shared.setValue(r.clearColor).toArray()}r.transform||(r.container.updateLocalTransform(),r.transform=r.container.localTransform),r.container.enableRenderGroup(),this.runners.prerender.emit(r),this.runners.renderStart.emit(r),this.runners.render.emit(r),this.runners.renderEnd.emit(r),this.runners.postrender.emit(r)}resize(e,a,r){const n=this.view.resolution;this.view.resize(e,a,r),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),r!==void 0&&r!==n&&this.runners.resolutionChange.emit(r)}clear(e={}){const a=this;e.target||(e.target=a.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Pr.ALL);const{clear:r,clearColor:n,target:o}=e;qs.shared.setValue(n??this.background.colorRgba),a.renderTarget.clear(o,r,qs.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(a=>{this.runners[a]=new Bo(a)})}_addSystems(e){let a;for(a in e){const r=e[a];this._addSystem(r.value,r.name)}}_addSystem(e,a){const r=new e(this);if(this[a])throw new Error(`Whoops! The name "${a}" is already in use`);this[a]=r,this._systemsHash[a]=r;for(const n in this.runners)this.runners[n].add(r);return this}_addPipes(e,a){const r=a.reduce((n,o)=>(n[o.name]=o.value,n),{});e.forEach(n=>{const o=n.value,i=n.name,d=r[i];this.renderPipes[i]=new o(this,d?new d:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(a=>{a.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Oo())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Tr.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Ir=Tr,Ut;function Co(s){return Ut!==void 0||(Ut=(()=>{var a;const e={stencil:!0,failIfMajorPerformanceCaveat:s??Ir.defaultOptions.failIfMajorPerformanceCaveat};try{if(!xe.get().getWebGLRenderingContext())return!1;let n=xe.get().createCanvas().getContext("webgl",e);const o=!!((a=n==null?void 0:n.getContextAttributes())!=null&&a.stencil);if(n){const i=n.getExtension("WEBGL_lose_context");i&&i.loseContext()}return n=null,o}catch{return!1}})()),Ut}let Gt;async function Fo(s={}){return Gt!==void 0||(Gt=await(async()=>{const e=xe.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(s)).requestDevice(),!0}catch{return!1}})()),Gt}const ur=["webgl","webgpu","canvas"];async function Wo(s){let e=[];s.preference?(e.push(s.preference),ur.forEach(o=>{o!==s.preference&&e.push(o)})):e=ur.slice();let a,r={};for(let o=0;o<e.length;o++){const i=e[o];if(i==="webgpu"&&await Fo()){const{WebGPURenderer:d}=await or(async()=>{const{WebGPURenderer:g}=await import("./sjCg5fYR.js");return{WebGPURenderer:g}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);a=d,r={...s,...s.webgpu};break}else if(i==="webgl"&&Co(s.failIfMajorPerformanceCaveat??Ir.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:d}=await or(async()=>{const{WebGLRenderer:g}=await import("./Dd43-LCm.js");return{WebGLRenderer:g}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);a=d,r={...s,...s.webgl};break}else if(i==="canvas")throw r={...s},new Error("CanvasRenderer is not yet implemented")}if(delete r.webgpu,delete r.webgl,!a)throw new Error("No available renderer for the current environment");const n=new a;return await n.init(r),n}const Or="8.8.1";class Br{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Or)}static destroy(){}}Br.extension=D.Application;class zo{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Or)}destroy(){this._renderer=null}}zo.extension={type:[D.WebGLSystem,D.WebGPUSystem],name:"initHook",priority:-10};const Mr=class la{constructor(...e){this.stage=new fa,e[0]!==void 0&&ra(na,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Wo(e),la._plugins.forEach(a=>{a.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return ra(na,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,a=!1){const r=la._plugins.slice(0);r.reverse(),r.forEach(n=>{n.destroy.call(this)}),this.stage.destroy(a),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Mr._plugins=[];let Cr=Mr;He.handleByList(D.Application,Cr._plugins);He.add(Br);class Fr extends _o{constructor(e,a){super();const{textures:r,data:n}=e;Object.keys(n.pages).forEach(o=>{const i=n.pages[parseInt(o,10)],d=r[i.id];this.pages.push({texture:d})}),Object.keys(n.chars).forEach(o=>{const i=n.chars[o],{frame:d,source:g}=r[i.page],b=new yo(i.x+d.x,i.y+d.y,i.width,i.height),u=new Qe({source:g,frame:b});this.chars[o]={id:o.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:u}}),this.baseRenderedFontSize=n.fontSize,this.baseMeasurementFontSize=n.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:n.fontSize},this.baseLineOffset=n.baseLineOffset,this.lineHeight=n.lineHeight,this.fontFamily=n.fontFamily,this.distanceField=n.distanceField??{type:"none",range:0},this.url=a}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:a}=this.pages[e];a.destroy(!0)}this.pages=null}static install(e){lr.install(e)}static uninstall(e){lr.uninstall(e)}}const ta={test(s){return typeof s=="string"&&s.startsWith("info face=")},parse(s){const e=s.match(/^[a-z]+\s+.+$/gm),a={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const m in e){const _=e[m].match(/^[a-z]+/gm)[0],L=e[m].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),T={};for(const J in L){const F=L[J].split("="),P=F[0],X=F[1].replace(/"/gm,""),te=parseFloat(X),he=isNaN(te)?X:te;T[P]=he}a[_].push(T)}const r={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[n]=a.info,[o]=a.common,[i]=a.distanceField??[];i&&(r.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),r.fontSize=parseInt(n.size,10),r.fontFamily=n.face,r.lineHeight=parseInt(o.lineHeight,10);const d=a.page;for(let m=0;m<d.length;m++)r.pages.push({id:parseInt(d[m].id,10)||0,file:d[m].file});const g={};r.baseLineOffset=r.lineHeight-parseInt(o.base,10);const b=a.char;for(let m=0;m<b.length;m++){const _=b[m],L=parseInt(_.id,10);let T=_.letter??_.char??String.fromCharCode(L);T==="space"&&(T=" "),g[L]=T,r.chars[T]={id:L,page:parseInt(_.page,10)||0,x:parseInt(_.x,10),y:parseInt(_.y,10),width:parseInt(_.width,10),height:parseInt(_.height,10),xOffset:parseInt(_.xoffset,10),yOffset:parseInt(_.yoffset,10),xAdvance:parseInt(_.xadvance,10),kerning:{}}}const u=a.kerning||[];for(let m=0;m<u.length;m++){const _=parseInt(u[m].first,10),L=parseInt(u[m].second,10),T=parseInt(u[m].amount,10);r.chars[g[L]].kerning[g[_]]=T}return r}},hr={test(s){const e=s;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(s){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},a=s.getElementsByTagName("info")[0],r=s.getElementsByTagName("common")[0],n=s.getElementsByTagName("distanceField")[0];n&&(e.distanceField={type:n.getAttribute("fieldType"),range:parseInt(n.getAttribute("distanceRange"),10)});const o=s.getElementsByTagName("page"),i=s.getElementsByTagName("char"),d=s.getElementsByTagName("kerning");e.fontSize=parseInt(a.getAttribute("size"),10),e.fontFamily=a.getAttribute("face"),e.lineHeight=parseInt(r.getAttribute("lineHeight"),10);for(let b=0;b<o.length;b++)e.pages.push({id:parseInt(o[b].getAttribute("id"),10)||0,file:o[b].getAttribute("file")});const g={};e.baseLineOffset=e.lineHeight-parseInt(r.getAttribute("base"),10);for(let b=0;b<i.length;b++){const u=i[b],m=parseInt(u.getAttribute("id"),10);let _=u.getAttribute("letter")??u.getAttribute("char")??String.fromCharCode(m);_==="space"&&(_=" "),g[m]=_,e.chars[_]={id:m,page:parseInt(u.getAttribute("page"),10)||0,x:parseInt(u.getAttribute("x"),10),y:parseInt(u.getAttribute("y"),10),width:parseInt(u.getAttribute("width"),10),height:parseInt(u.getAttribute("height"),10),xOffset:parseInt(u.getAttribute("xoffset"),10),yOffset:parseInt(u.getAttribute("yoffset"),10),xAdvance:parseInt(u.getAttribute("xadvance"),10),kerning:{}}}for(let b=0;b<d.length;b++){const u=parseInt(d[b].getAttribute("first"),10),m=parseInt(d[b].getAttribute("second"),10),_=parseInt(d[b].getAttribute("amount"),10);e.chars[g[m]].kerning[g[u]]=_}return e}},gr={test(s){return typeof s=="string"&&s.includes("<font>")?hr.test(xe.get().parseXML(s)):!1},parse(s){return hr.parse(xe.get().parseXML(s))}},jo=[".xml",".fnt"],Do={extension:{type:D.CacheParser,name:"cacheBitmapFont"},test:s=>s instanceof Fr,getCacheableAssets(s,e){const a={};return s.forEach(r=>{a[r]=e,a[`${r}-bitmap`]=e}),a[`${e.fontFamily}-bitmap`]=e,a}},No={extension:{type:D.LoadParser,priority:ct.Normal},name:"loadBitmapFont",test(s){return jo.includes(Je.extname(s).toLowerCase())},async testParse(s){return ta.test(s)||gr.test(s)},async parse(s,e,a){const r=ta.test(s)?ta.parse(s):gr.parse(s),{src:n}=e,{pages:o}=r,i=[],d=r.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let m=0;m<o.length;++m){const _=o[m].file;let L=Je.join(Je.dirname(n),_);L=xo(L,n),i.push({src:L,data:d})}const g=await a.load(i),b=i.map(m=>g[m.src]);return new Fr({data:r,textures:b},n)},async load(s,e){return await(await xe.get().fetch(s)).text()},async unload(s,e,a){await Promise.all(s.pages.map(r=>a.unload(r.texture.source._sourceOrigin))),s.destroy()}};class Uo{constructor(e,a=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=a}add(e){e.forEach(a=>{this._assetList.push(a)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],a=Math.min(this._assetList.length,this._maxConcurrent);for(let r=0;r<a;r++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Go={extension:{type:D.CacheParser,name:"cacheTextureArray"},test:s=>Array.isArray(s)&&s.every(e=>e instanceof Qe),getCacheableAssets:(s,e)=>{const a={};return s.forEach(r=>{e.forEach((n,o)=>{a[r+(o===0?"":o+1)]=n})}),a}};async function Wr(s){if("Image"in globalThis)return new Promise(e=>{const a=new Image;a.onload=()=>{e(!0)},a.onerror=()=>{e(!1)},a.src=s});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(s)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Ho={extension:{type:D.DetectionParser,priority:1},test:async()=>Wr("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async s=>[...s,"avif"],remove:async s=>s.filter(e=>e!=="avif")},vr=["png","jpg","jpeg"],Yo={extension:{type:D.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async s=>[...s,...vr],remove:async s=>s.filter(e=>!vr.includes(e))},Vo="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function pa(s){return Vo?!1:document.createElement("video").canPlayType(s)!==""}const Xo={extension:{type:D.DetectionParser,priority:0},test:async()=>pa("video/mp4"),add:async s=>[...s,"mp4","m4v"],remove:async s=>s.filter(e=>e!=="mp4"&&e!=="m4v")},Ko={extension:{type:D.DetectionParser,priority:0},test:async()=>pa("video/ogg"),add:async s=>[...s,"ogv"],remove:async s=>s.filter(e=>e!=="ogv")},qo={extension:{type:D.DetectionParser,priority:0},test:async()=>pa("video/webm"),add:async s=>[...s,"webm"],remove:async s=>s.filter(e=>e!=="webm")},Qo={extension:{type:D.DetectionParser,priority:0},test:async()=>Wr("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async s=>[...s,"webp"],remove:async s=>s.filter(e=>e!=="webp")};class Jo{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,a,r)=>(this._parsersValidated=!1,e[a]=r,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,a){const r={promise:null,parser:null};return r.promise=(async()=>{var i,d;let n=null,o=null;if(a.loadParser&&(o=this._parserHash[a.loadParser],o||Ge(`[Assets] specified load parser "${a.loadParser}" not found while loading ${e}`)),!o){for(let g=0;g<this.parsers.length;g++){const b=this.parsers[g];if(b.load&&((i=b.test)!=null&&i.call(b,e,a,this))){o=b;break}}if(!o)return Ge(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}n=await o.load(e,a,this),r.parser=o;for(let g=0;g<this.parsers.length;g++){const b=this.parsers[g];b.parse&&b.parse&&await((d=b.testParse)==null?void 0:d.call(b,n,a,this))&&(n=await b.parse(n,a,this)||n,r.parser=b)}return n})(),r}async load(e,a){this._parsersValidated||this._validateParsers();let r=0;const n={},o=Sr(e),i=St(e,b=>({alias:[b],src:b,data:{}})),d=i.length,g=i.map(async b=>{const u=Je.toAbsolute(b.src);if(!n[b.src])try{this.promiseCache[u]||(this.promiseCache[u]=this._getLoadPromiseAndParser(u,b)),n[b.src]=await this.promiseCache[u].promise,a&&a(++r/d)}catch(m){throw delete this.promiseCache[u],delete n[b.src],new Error(`[Loader.load] Failed to load ${u}.
${m}`)}});return await Promise.all(g),o?n[i[0].src]:n}async unload(e){const r=St(e,n=>({alias:[n],src:n})).map(async n=>{var d,g;const o=Je.toAbsolute(n.src),i=this.promiseCache[o];if(i){const b=await i.promise;delete this.promiseCache[o],await((g=(d=i.parser)==null?void 0:d.unload)==null?void 0:g.call(d,b,n,this))}});await Promise.all(r)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,a)=>(a.name?e[a.name]&&Ge(`[Assets] loadParser name conflict "${a.name}"`):Ge("[Assets] loadParser should have a name"),{...e,[a.name]:a}),{})}}function ft(s,e){if(Array.isArray(e)){for(const a of e)if(s.startsWith(`data:${a}`))return!0;return!1}return s.startsWith(`data:${e}`)}const Zo=".json",ei="application/json",ti={extension:{type:D.LoadParser,priority:ct.Low},name:"loadJson",test(s){return ft(s,ei)||dt(s,Zo)},async load(s){return await(await xe.get().fetch(s)).json()}},si=".txt",ai="text/plain",ri={name:"loadTxt",extension:{type:D.LoadParser,priority:ct.Low,name:"loadTxt"},test(s){return ft(s,ai)||dt(s,si)},async load(s){return await(await xe.get().fetch(s)).text()}},ni=["normal","bold","100","200","300","400","500","600","700","800","900"],oi=[".ttf",".otf",".woff",".woff2"],ii=["font/ttf","font/otf","font/woff","font/woff2"],li=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function ci(s){const e=Je.extname(s),n=Je.basename(s,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(d=>d.charAt(0).toUpperCase()+d.slice(1));let o=n.length>0;for(const d of n)if(!d.match(li)){o=!1;break}let i=n.join(" ");return o||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const di=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function fi(s){return di.test(s)?s:encodeURI(s)}const pi={extension:{type:D.LoadParser,priority:ct.Low},name:"loadWebFont",test(s){return ft(s,ii)||dt(s,oi)},async load(s,e){var r,n,o;const a=xe.get().getFontFaceSet();if(a){const i=[],d=((r=e.data)==null?void 0:r.family)??ci(s),g=((o=(n=e.data)==null?void 0:n.weights)==null?void 0:o.filter(u=>ni.includes(u)))??["normal"],b=e.data??{};for(let u=0;u<g.length;u++){const m=g[u],_=new FontFace(d,`url(${fi(s)})`,{...b,weight:m});await _.load(),a.add(_),i.push(_)}return Ce.set(`${d}-and-url`,{url:s,fontFaces:i}),i.length===1?i[0]:i}return Ge("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(s){(Array.isArray(s)?s:[s]).forEach(e=>{Ce.remove(`${e.family}-and-url`),xe.get().getFontFaceSet().delete(e)})}};function ua(s,e=1){var r;const a=(r=Xt.RETINA_PREFIX)==null?void 0:r.exec(s);return a?parseFloat(a[1]):e}function ha(s,e,a){s.label=a,s._sourceOrigin=a;const r=new Qe({source:s,label:a}),n=()=>{delete e.promiseCache[a],Ce.has(a)&&Ce.remove(a)};return r.source.once("destroy",()=>{e.promiseCache[a]&&(Ge("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),n())}),r.once("destroy",()=>{s.destroyed||(Ge("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),n())}),r}const ui=".svg",hi="image/svg+xml",gi={extension:{type:D.LoadParser,priority:ct.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(s){return ft(s,hi)||dt(s,ui)},async load(s,e,a){var r;return((r=e.data)==null?void 0:r.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?mi(s):vi(s,e,a,this.config.crossOrigin)},unload(s){s.destroy(!0)}};async function vi(s,e,a,r){var F,P,X;const o=await(await xe.get().fetch(s)).blob(),i=URL.createObjectURL(o),d=new Image;d.src=i,d.crossOrigin=r,await d.decode(),URL.revokeObjectURL(i);const g=document.createElement("canvas"),b=g.getContext("2d"),u=((F=e.data)==null?void 0:F.resolution)||ua(s),m=((P=e.data)==null?void 0:P.width)??d.width,_=((X=e.data)==null?void 0:X.height)??d.height;g.width=m*u,g.height=_*u,b.drawImage(d,0,0,m*u,_*u);const{parseAsGraphicsContext:L,...T}=e.data??{},J=new Er({resource:g,alphaMode:"premultiply-alpha-on-upload",resolution:u,...T});return ha(J,a,s)}async function mi(s){const a=await(await xe.get().fetch(s)).text(),r=new ko;return r.svg(a),r}const bi=`(function () {
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
`;let it=null,ca=class{constructor(){it||(it=URL.createObjectURL(new Blob([bi],{type:"application/javascript"}))),this.worker=new Worker(it)}};ca.revokeObjectURL=function(){it&&(URL.revokeObjectURL(it),it=null)};const yi=`(function () {
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
`;let lt=null;class zr{constructor(){lt||(lt=URL.createObjectURL(new Blob([yi],{type:"application/javascript"}))),this.worker=new Worker(lt)}}zr.revokeObjectURL=function(){lt&&(URL.revokeObjectURL(lt),lt=null)};let mr=0,sa;class xi{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:a}=new ca;a.addEventListener("message",r=>{a.terminate(),ca.revokeObjectURL(),e(r.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,a){var r;return this._run("loadImageBitmap",[e,(r=a==null?void 0:a.data)==null?void 0:r.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){sa===void 0&&(sa=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<sa&&(this._createdWorkers++,e=new zr().worker,e.addEventListener("message",a=>{this._complete(a.data),this._returnWorker(a.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,a){await this._initWorkers();const r=new Promise((n,o)=>{this._queue.push({id:e,arguments:a,resolve:n,reject:o})});return this._next(),r}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const a=this._queue.pop(),r=a.id;this._resolveHash[mr]={resolve:a.resolve,reject:a.reject},e.postMessage({data:a.arguments,uuid:mr++,id:r})}}const br=new xi,wi=[".jpeg",".jpg",".png",".webp",".avif"],_i=["image/jpeg","image/png","image/webp","image/avif"];async function ki(s,e){var n;const a=await xe.get().fetch(s);if(!a.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${s}: ${a.status} ${a.statusText}`);const r=await a.blob();return((n=e==null?void 0:e.data)==null?void 0:n.alphaMode)==="premultiplied-alpha"?createImageBitmap(r,{premultiplyAlpha:"none"}):createImageBitmap(r)}const jr={name:"loadTextures",extension:{type:D.LoadParser,priority:ct.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(s){return ft(s,_i)||dt(s,wi)},async load(s,e,a){var o;let r=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await br.isImageBitmapSupported()?r=await br.loadImageBitmap(s,e):r=await ki(s,e):r=await new Promise((i,d)=>{r=new Image,r.crossOrigin=this.config.crossOrigin,r.src=s,r.complete?i(r):(r.onload=()=>{i(r)},r.onerror=d)});const n=new Er({resource:r,alphaMode:"premultiply-alpha-on-upload",resolution:((o=e.data)==null?void 0:o.resolution)||ua(s),...e.data});return ha(n,a,s)},unload(s){s.destroy(!0)}},Dr=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Ai=Dr.map(s=>`video/${s.substring(1)}`);function $i(s,e,a){a===void 0&&!e.startsWith("data:")?s.crossOrigin=Ei(e):a!==!1&&(s.crossOrigin=typeof a=="string"?a:"anonymous")}function Si(s){return new Promise((e,a)=>{s.addEventListener("canplaythrough",r),s.addEventListener("error",n),s.load();function r(){o(),e()}function n(i){o(),a(i)}function o(){s.removeEventListener("canplaythrough",r),s.removeEventListener("error",n)}})}function Ei(s,e=globalThis.location){if(s.startsWith("data:"))return"";e||(e=globalThis.location);const a=new URL(s,document.baseURI);return a.hostname!==e.hostname||a.port!==e.port||a.protocol!==e.protocol?"anonymous":""}const Li={name:"loadVideo",extension:{type:D.LoadParser,name:"loadVideo"},test(s){const e=ft(s,Ai),a=dt(s,Dr);return e||a},async load(s,e,a){var g,b;const r={...Qs.defaultOptions,resolution:((g=e.data)==null?void 0:g.resolution)||ua(s),alphaMode:((b=e.data)==null?void 0:b.alphaMode)||await wo(),...e.data},n=document.createElement("video"),o={preload:r.autoLoad!==!1?"auto":void 0,"webkit-playsinline":r.playsinline!==!1?"":void 0,playsinline:r.playsinline!==!1?"":void 0,muted:r.muted===!0?"":void 0,loop:r.loop===!0?"":void 0,autoplay:r.autoPlay!==!1?"":void 0};Object.keys(o).forEach(u=>{const m=o[u];m!==void 0&&n.setAttribute(u,m)}),r.muted===!0&&(n.muted=!0),$i(n,s,r.crossorigin);const i=document.createElement("source");let d;if(s.startsWith("data:"))d=s.slice(5,s.indexOf(";"));else if(!s.startsWith("blob:")){const u=s.split("?")[0].slice(s.lastIndexOf(".")+1).toLowerCase();d=Qs.MIME_TYPES[u]||`video/${u}`}return i.src=s,d&&(i.type=d),new Promise(u=>{const m=async()=>{const _=new Qs({...r,resource:n});n.removeEventListener("canplay",m),e.data.preload&&await Si(n),u(ha(_,a,s))};n.addEventListener("canplay",m),n.appendChild(i)})},unload(s){s.destroy(!0)}},Nr={extension:{type:D.ResolveParser,name:"resolveTexture"},test:jr.test,parse:s=>{var e;return{resolution:parseFloat(((e=Xt.RETINA_PREFIX.exec(s))==null?void 0:e[1])??"1"),format:s.split(".").pop(),src:s}}},Pi={extension:{type:D.ResolveParser,priority:-2,name:"resolveJson"},test:s=>Xt.RETINA_PREFIX.test(s)&&s.endsWith(".json"),parse:Nr.parse};class Ti{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Xt,this.loader=new Jo,this.cache=Ce,this._backgroundLoader=new Uo(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var o,i;if(this._initialized){Ge("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let d=e.manifest;typeof d=="string"&&(d=await this.load(d)),this.resolver.addManifest(d)}const a=((o=e.texturePreference)==null?void 0:o.resolution)??1,r=typeof a=="number"?[a]:a,n=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:n,resolution:r}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,a){this._initialized||await this.init();const r=Sr(e),n=St(e).map(d=>{if(typeof d!="string"){const g=this.resolver.getAlias(d);return g.some(b=>!this.resolver.hasKey(b))&&this.add(d),Array.isArray(g)?g[0]:g}return this.resolver.hasKey(d)||this.add({alias:d,src:d}),d}),o=this.resolver.resolve(n),i=await this._mapLoadToResolve(o,a);return r?i[n[0]]:i}addBundle(e,a){this.resolver.addBundle(e,a)}async loadBundle(e,a){this._initialized||await this.init();let r=!1;typeof e=="string"&&(r=!0,e=[e]);const n=this.resolver.resolveBundle(e),o={},i=Object.keys(n);let d=0,g=0;const b=()=>{a==null||a(++d/g)},u=i.map(m=>{const _=n[m];return g+=Object.keys(_).length,this._mapLoadToResolve(_,b).then(L=>{o[m]=L})});return await Promise.all(u),r?o[e[0]]:o}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(a))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolveBundle(e);Object.values(a).forEach(r=>{this._backgroundLoader.add(Object.values(r))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Ce.get(e);const a={};for(let r=0;r<e.length;r++)a[r]=Ce.get(e[r]);return a}async _mapLoadToResolve(e,a){const r=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const n=await this.loader.load(r,a);this._backgroundLoader.active=!0;const o={};return r.forEach(i=>{const d=n[i.src],g=[i.src];i.alias&&g.push(...i.alias),g.forEach(b=>{o[b]=d}),Ce.set(g,d)}),o}async unload(e){this._initialized||await this.init();const a=St(e).map(n=>typeof n!="string"?n.src:n),r=this.resolver.resolve(a);await this._unloadFromResolved(r)}async unloadBundle(e){this._initialized||await this.init(),e=St(e);const a=this.resolver.resolveBundle(e),r=Object.keys(a).map(n=>this._unloadFromResolved(a[n]));await Promise.all(r)}async _unloadFromResolved(e){const a=Object.values(e);a.forEach(r=>{Ce.remove(r.src)}),await this.loader.unload(a)}async _detectFormats(e){let a=[];e.preferredFormats&&(a=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const r of e.detections)e.skipDetections||await r.test()?a=await r.add(a):e.skipDetections||(a=await r.remove(a));return a=a.filter((r,n)=>a.indexOf(r)===n),a}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(a=>{a.config&&Object.keys(a.config).filter(r=>r in e).forEach(r=>{a.config[r]=e[r]})})}}const ot=new Ti;He.handleByList(D.LoadParser,ot.loader.parsers).handleByList(D.ResolveParser,ot.resolver.parsers).handleByList(D.CacheParser,ot.cache.parsers).handleByList(D.DetectionParser,ot.detections);He.add(Go,Yo,Ho,Qo,Xo,Ko,qo,ti,ri,pi,gi,jr,Li,No,Do,Nr,Pi);const yr={loader:D.LoadParser,resolver:D.ResolveParser,cache:D.CacheParser,detection:D.DetectionParser};He.handle(D.Asset,s=>{const e=s.ref;Object.entries(yr).filter(([a])=>!!e[a]).forEach(([a,r])=>He.add(Object.assign(e[a],{extension:e[a].extension??r})))},s=>{const e=s.ref;Object.keys(yr).filter(a=>!!e[a]).forEach(a=>He.remove(e[a]))});var Ri=ee('<div class="win-label svelte-1vsph43">BIG WIN!</div> <div class="win-amount-display svelte-1vsph43"> </div>',1),Ii=wr('<use href="#sparkle" class="sparkle svelte-1vsph43"></use>'),Oi=wr('<use href="#vinyl"></use>'),Bi=ee('<div><!> <svg class="vinyl-canvas svelte-1vsph43" viewBox="0 0 1024 800" xmlns="http://www.w3.org/2000/svg"><defs class="svelte-1vsph43"><symbol id="vinyl" viewBox="-200 -200 400 400" class="svelte-1vsph43"><circle cx="0" cy="0" r="180" fill="#0b0b0b" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="150" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.3" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="120" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.25" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="90" fill="none" stroke="#1a1a1a" stroke-width="1.5" opacity="0.2" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="55" fill="var(--label-color)" class="svelte-1vsph43"></circle><circle cx="0" cy="0" r="6" fill="#ffffff" class="svelte-1vsph43"></circle><ellipse cx="-15" cy="-15" rx="20" ry="15" fill="#ffffff" opacity="0.3" transform="rotate(-30)" class="svelte-1vsph43"></ellipse></symbol><symbol id="sparkle" viewBox="-12 -12 24 24" class="svelte-1vsph43"><polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ffd966" class="svelte-1vsph43"></polygon><circle cx="0" cy="0" r="2" fill="#ffffff" class="svelte-1vsph43"></circle></symbol><symbol id="confetti" viewBox="-3 -3 6 6" class="svelte-1vsph43"><circle cx="0" cy="0" r="2" fill="var(--confetti-color)" class="svelte-1vsph43"></circle></symbol></defs><!><!></svg></div>');function Mi(s,e){Et(e,!0);let a=qe(e,"winLevel",3,"small"),r=qe(e,"winAmount",3,0),n=qe(e,"vinylStartScale",3,.01),o=qe(e,"vinylEndScale",3,.15),i=qe(e,"sparkleScale",3,.6),d=R(!1),g=R(!1);const b={small:{vinyls:5,sparkles:8,maxRadius:70},medium:{vinyls:12,sparkles:16,maxRadius:100},jackpot:{vinyls:24,sparkles:30,maxRadius:130}},u=ce(()=>b[a()]),m=["#f04e37","#ffd966","#ff8533","#4ecdc4","#ff6b9d"];function _(q){const z=[],Pe=t(u).maxRadius;for(let ve=0;ve<q;ve++){const Fe=Math.PI*2*ve/q+Math.random()*.4,Ze=Math.random()*Pe*.7+Pe*.2;z.push({x:512+Math.cos(Fe)*Ze,y:400+Math.sin(Fe)*Ze,rotation:Math.random()*30-15,scale:o()*(.8+Math.random()*.4),delay:ve*.05,color:m[ve%m.length]})}return z}function L(q){const z=[];for(let N=0;N<q;N++)z.push({x:100+Math.random()*824,y:50+Math.random()*700,delay:Math.random()*.8,duration:.6+Math.random()*.4,rotation:Math.random()*360});return z}const T=ce(()=>_(t(u).vinyls)),J=ce(()=>L(t(u).sparkles));function F(){h(d,!0),h(g,!0),setTimeout(()=>{h(g,!1),setTimeout(()=>{var q;h(d,!1),(q=e.onComplete)==null||q.call(e)},500)},a()==="jackpot"?4e3:a()==="medium"?3e3:2500)}function P(){h(g,!1),setTimeout(()=>{h(d,!1)},500)}var X=Ht(),te=Ye(X);{var he=q=>{var z=Bi();let N;var _e=x(z);{var Pe=de=>{var ae=Ri(),O=f(Ye(ae),2),oe=x(O,!0);w(O),re(pt=>K(oe,pt),[()=>r().toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),V(de,ae)};ne(_e,de=>{r()>0&&de(Pe)})}var ve=f(_e,2),Fe=f(x(ve));Vt(Fe,17,()=>t(J),Yt,(de,ae)=>{var O=Ii();re(()=>y(O,"style",`
            --sx: ${t(ae).x??""}px;
            --sy: ${t(ae).y??""}px;
            --duration: ${t(ae).duration??""}s;
            --sparkle-delay: ${t(ae).delay??""}s;
            --sparkle-scale: ${i()??""};
          `)),V(de,O)});var Ze=f(Fe);Vt(Ze,17,()=>t(T),Yt,(de,ae)=>{var O=Oi();let oe;re(()=>{oe=oa(O,0,"vinyl-group svelte-1vsph43",null,oe,{floating:t(g)}),y(O,"style",`
            --tx: ${t(ae).x??""}px;
            --ty: ${t(ae).y??""}px;
            --scale: ${t(ae).scale??""};
            --rotation: ${t(ae).rotation??""}deg;
            --delay: ${t(ae).delay??""}s;
            --label-color: ${t(ae).color??""};
            --start-scale: ${n()??""};
          `)}),V(de,O)}),w(ve),w(z),re(()=>N=oa(z,1,"vinyl-win-container svelte-1vsph43",null,N,{visible:t(g),hiding:!t(g)})),V(q,z)};ne(te,q=>{t(d)&&q(he)})}return V(s,X),Lt({show:F,hide:P})}var Ci=ee(`<div style="
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
		"> </div></div>`),Fi=ee(`<div style="
				position: absolute;
				bottom: 40px;
				left: 50%;
				transform: translateX(-50%);
				color: #fff;
				font-family: Arial, sans-serif;
				font-size: 20px;
				text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
			">Please wait...</div>`),Wi=ee('<div role="button" tabindex="0"><span style="position: absolute; left: -9999px;">Click anywhere to continue</span> <!></div>');function zi(s,e){Et(e,!0);let a=R(!1),r=R(!1),n=R(!1),o=R(0);da(()=>{const m=setInterval(()=>{h(o,t(o)+2),t(o)>=100&&(clearInterval(m),h(o,100),setTimeout(()=>{h(r,!0),setTimeout(()=>{h(n,!0)},3e3)},500))},60);return()=>clearInterval(m)});function i(){t(r)&&t(n)&&!t(a)&&(h(a,!0),setTimeout(()=>e.onloaded(),300))}var d=Ht(),g=Ye(d);{var b=m=>{var _=Ci(),L=x(_);y(L,"src",`${ye??""}/loading_screen/MadCraneLogo.jpg`);var T=f(L,2),J=x(T);w(T);var F=f(T,2),P=x(F);w(F),w(_),re(X=>{y(J,"style",`
				width: ${t(o)??""}%;
				height: 100%;
				background: linear-gradient(90deg, #ff0000, #ff6600);
				transition: width 0.3s ease;
			`),K(P,`Loading... ${X??""}%`)},[()=>Math.round(t(o))]),V(m,_)},u=m=>{var _=Ht(),L=Ye(_);{var T=J=>{var F=Wi(),P=f(x(F),2);{var X=te=>{var he=Fi();V(te,he)};ne(P,te=>{t(n)||te(X)})}w(F),re(()=>y(F,"style",`
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background-image: url('${ye??""}/loading_screen/Splash_screen_RockabillyReels.jpeg');
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			cursor: ${(t(n)?"pointer":"default")??""};
			z-index: 10000;
		`)),C("click",F,i),C("keydown",F,te=>te.key==="Enter"&&i()),V(J,F)};ne(L,J=>{t(r)&&!t(a)&&J(T)},!0)}V(m,_)};ne(g,m=>{t(r)?m(u,!1):m(b)})}V(s,d),Lt()}const xr={gameArea:{width:1445,height:1e3,scale:1,offsetX:-25,offsetY:-15},controlPanel:{x:250,y:750,width:1100,height:80,scaleX:1,scaleY:1.1,offsetX:0,offsetY:50},playButton:{scale:1,offsetX:0,offsetY:0},background:{yShift:-40,scale:1,fitMode:"height"}},ji={gameArea:{width:1445,height:1e3,scale:.95,offsetX:0,offsetY:-20},controlPanel:{x:250,y:820,width:1100,height:70,scaleX:.85,scaleY:.85,offsetX:0,offsetY:20},playButton:{scale:1.2,offsetX:0,offsetY:0},background:{yShift:-30,scale:1,fitMode:"width"}},Di={gameArea:{width:1445,height:1e3,scale:.75,offsetX:0,offsetY:0},controlPanel:{x:250,y:780,width:1100,height:65,scaleX:.8,scaleY:.8,offsetX:0,offsetY:40},playButton:{scale:1.1,offsetX:0,offsetY:0},background:{yShift:-20,scale:.95,fitMode:"height"}},Ni={gameArea:{width:1445,height:1e3,scale:.92,offsetX:0,offsetY:-15},controlPanel:{x:250,y:830,width:1100,height:70,scaleX:.82,scaleY:.82,offsetX:0,offsetY:25},playButton:{scale:1.25,offsetX:0,offsetY:0},background:{yShift:-25,scale:1,fitMode:"width"}},Ui={gameArea:{width:1445,height:1e3,scale:.72,offsetX:0,offsetY:5},controlPanel:{x:250,y:785,width:1100,height:65,scaleX:.78,scaleY:.78,offsetX:0,offsetY:35},playButton:{scale:1.15,offsetX:0,offsetY:0},background:{yShift:-15,scale:.93,fitMode:"height"}};function Gi(){if(typeof window>"u")return xr;const s=window.innerWidth,a=window.innerHeight>s,r=s<=768,n=/iPhone|iPad|iPod/i.test(navigator.userAgent);return r?n?a?Ni:Ui:a?ji:Di:xr}function Hi(){return Gi()}function Yi(s,e=1){return{x:(s.controlPanel.x+s.controlPanel.offsetX)*e,y:(s.controlPanel.y+s.controlPanel.offsetY)*e,width:s.controlPanel.width*e*s.controlPanel.scaleX,height:s.controlPanel.height*e*s.controlPanel.scaleY}}var Vi=ee('<div class="game-background svelte-hbou0y"><img alt="Game Background"></div>');function Xi(s,e){Et(e,!0);const a=qe(e,"backgroundPath",19,()=>`${ye}/background/bg.jpg`),r=ce(()=>()=>{const i=e.layout.background;return{yShift:i.yShift*e.gameScale,scale:i.scale,fitMode:i.fitMode}});var n=Vi(),o=x(n);w(n),re((i,d,g)=>{y(n,"style",`
  position: absolute;
  top: ${i??""}px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`),y(o,"src",a()),y(o,"style",`
      width: 100%;
      height: 100%;
      object-fit: ${d??""};
      object-position: center center;
      transform: scale(${g??""});
      transform-origin: center center;
    `)},[()=>t(r)().yShift,()=>t(r)().fitMode==="width"?"cover":(t(r)().fitMode==="height","contain"),()=>t(r)().scale]),V(s,n),Lt()}var Ki=Hn('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-1bferk7"><\/script><!---->',1),qi=ee('<p style="color: red;" class="svelte-1bferk7"><strong class="svelte-1bferk7">Error:</strong> </p>'),Qi=ee('<div class="svelte-1bferk7"> </div>'),Ji=ee('<details class="svelte-1bferk7"><summary class="svelte-1bferk7"> </summary> <!></details>'),Zi=ee(`<div style="
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
  " class="svelte-1bferk7"><h3 class="svelte-1bferk7">🎰 Oma-peli Debug</h3> <p class="svelte-1bferk7"><strong class="svelte-1bferk7">Status:</strong> </p> <!> <p class="svelte-1bferk7"><strong class="svelte-1bferk7">Base:</strong> </p> <p class="svelte-1bferk7"><strong class="svelte-1bferk7">BG URL:</strong> </p> <p class="svelte-1bferk7"><strong class="svelte-1bferk7">Sample:</strong> </p> <!></div>`),el=ee('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-1bferk7"> </div>'),tl=ee('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-1bferk7"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-1bferk7"> </span></div>'),sl=ee(`<div style="
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
      " class="svelte-1bferk7">Jatka pelaamista</button></div>`),al=ee('<button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1em;" class="svelte-1bferk7">🛑 STOP AUTOPLAY</button>'),rl=ee('<button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1em;" class="svelte-1bferk7">▶️ START AUTOPLAY</button>'),nl=ee(`<div class="svelte-1bferk7"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-1bferk7">💰 MENU</h2> <div class="mobile-menu-controls svelte-1bferk7" style="display: none; margin-bottom: 20px; padding: 15px; background: rgba(255, 255, 255, 0.05); border-radius: 10px;"><h3 style="margin: 0 0 15px 0; color: #ffd700; font-size: 1.2em;" class="svelte-1bferk7">🎮 GAME CONTROLS</h3> <div style="margin-bottom: 15px;" class="svelte-1bferk7"><div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;" class="svelte-1bferk7"><span style="font-size: 1.1em;" class="svelte-1bferk7">🔄 Autoplay:</span> <span class="svelte-1bferk7"> </span></div> <!></div> <div style="margin-bottom: 10px;" class="svelte-1bferk7"><div style="margin-bottom: 10px;" class="svelte-1bferk7"><span style="font-size: 1.1em;" class="svelte-1bferk7">⚡ Spin Speed:</span> <span style="color: #ffd700; font-weight: bold; margin-left: 10px;" class="svelte-1bferk7"> </span></div> <div style="display: flex; gap: 10px;" class="svelte-1bferk7"><button class="svelte-1bferk7">🐌 Slow</button> <button class="svelte-1bferk7">🏃 Medium</button> <button class="svelte-1bferk7">⚡ Fast</button></div></div> <div style="border-top: 1px solid #555; margin: 20px 0;" class="svelte-1bferk7"></div></div> <h3 style="margin: 0 0 15px 0; color: #ffd700; font-size: 1.2em;" class="svelte-1bferk7">💰 PAYTABLE (81 WAYS)</h3> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-1bferk7">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-1bferk7"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-1bferk7"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-1bferk7"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-1bferk7">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-1bferk7"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-1bferk7">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-1bferk7"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-1bferk7">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-1bferk7">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-1bferk7"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-1bferk7">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-1bferk7">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-1bferk7">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-1bferk7">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-1bferk7"> <span style="color: #ffd700;" class="svelte-1bferk7">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-1bferk7">Sulje</button></div>`),ol=ee(`<div style="
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
        " class="svelte-1bferk7">JATKA PERUSPELIIN</button></div></div>`),il=ee('<div class="svelte-1bferk7"><div class="svelte-1bferk7">🔄 Select Rounds</div> <button class="svelte-1bferk7">10 Rounds</button> <button class="svelte-1bferk7">25 Rounds</button> <button class="svelte-1bferk7">50 Rounds</button> <button class="svelte-1bferk7">100 Rounds</button> <button class="svelte-1bferk7">200 Rounds</button> <button class="svelte-1bferk7">500 Rounds</button> <button class="svelte-1bferk7">1,000 Rounds</button> <button class="svelte-1bferk7">5,000 Rounds</button> <button class="svelte-1bferk7">Cancel</button></div>'),ll=ee(`<!>  <!>   <!>   <!>   <!>  <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
" class="svelte-1bferk7"><div class="svelte-1bferk7"><!> <div class="svelte-1bferk7"><button class="svelte-1bferk7">💰 PAYTABLE</button>   <div class="control-panel-mobile svelte-1bferk7"><!>  <img alt="Left End" class="svelte-1bferk7"> <div class="svelte-1bferk7"><div style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;" class="svelte-1bferk7"><div class="hide-on-desktop svelte-1bferk7"><button title="Menu" class="svelte-1bferk7"></button></div> <div style="display: flex; flex-direction: column; align-items: center;" class="svelte-1bferk7"><div class="svelte-1bferk7">BET</div> <div class="svelte-1bferk7"><button title="Decrease Bet" class="svelte-1bferk7"></button> <div class="svelte-1bferk7"> </div> <button title="Increase Bet" class="svelte-1bferk7"></button></div></div> <img class="hide-on-mobile svelte-1bferk7" alt="Divider"> <div class="hide-on-mobile svelte-1bferk7" style="display: flex; flex-direction: column; align-items: center;"><div class="svelte-1bferk7">BALANCE</div> <div class="svelte-1bferk7"><div class="svelte-1bferk7"> </div></div></div> <img class="hide-on-mobile svelte-1bferk7" alt="Divider"></div> <div class="svelte-1bferk7"></div> <div style="position: absolute; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; z-index: 10;" class="svelte-1bferk7"><div><button class="svelte-1bferk7"></button></div></div> <div style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;" class="svelte-1bferk7"><div class="hide-on-mobile svelte-1bferk7"><button class="svelte-1bferk7"></button> <img alt="Status bar" class="svelte-1bferk7"></div> <img class="hide-on-mobile svelte-1bferk7" alt="Divider"> <div class="hide-on-mobile svelte-1bferk7"><button class="svelte-1bferk7"></button> <img alt="Speed bar" class="svelte-1bferk7"></div> <img class="hide-on-mobile svelte-1bferk7" alt="Divider"> <div class="hide-on-mobile svelte-1bferk7" style="display: flex; flex-direction: column; align-items: center;"><div class="svelte-1bferk7">WIN</div> <div class="svelte-1bferk7"><div class="svelte-1bferk7"> </div></div></div> <img class="hide-on-mobile svelte-1bferk7" alt="Divider"> <div class="hide-on-mobile svelte-1bferk7" style="display: flex; align-items: center; justify-content: center;"><button title="Menu" class="svelte-1bferk7"></button></div></div></div> <img alt="Right End" class="svelte-1bferk7"></div></div>  <button class="svelte-1bferk7"></button> <!>   <div class="debug-panel svelte-1bferk7"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-1bferk7">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-1bferk7"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1bferk7"><span style="color: #aaa;" class="svelte-1bferk7">Rounds:</span> <span style="color: #fff;" class="svelte-1bferk7"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1bferk7"><span style="color: #aaa;" class="svelte-1bferk7">Wagered:</span> <span style="color: #ff6666;" class="svelte-1bferk7"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-1bferk7"><span style="color: #aaa;" class="svelte-1bferk7">Won:</span> <span style="color: #66ff66;" class="svelte-1bferk7"> </span></div> <div style="
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
  " class="svelte-1bferk7"><button class="svelte-1bferk7"> </button> <button class="svelte-1bferk7">Clear Win Log</button> <button class="svelte-1bferk7">🎰 Test Free Spins</button></div></div> <div class="svelte-1bferk7"><button class="svelte-1bferk7"></button> <button class="svelte-1bferk7"></button></div></div></div>`,1);function cl(s,e){Et(e,!0);const a="1.4.8",r=13,n=ce(()=>()=>Hi()),o=ce(()=>t(n)().gameArea.width),i=ce(()=>t(n)().gameArea.height),d=1.75,g=ce(()=>t(n)().gameArea.offsetX),b=ce(()=>t(n)().gameArea.offsetY),u=175,m=-5,_=.5,L=30,T=-10,F=Math.round(100*d),P=Math.round(F*(700/760)),te=P+10,he=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],q=typeof window<"u"&&window.location.hostname.includes("github.io"),z=q?"/web-sdk/oma-peli/symbols":`${ye}/symbols`,N=q?"/web-sdk/oma-peli/controls":`${ye}/controls`,_e={a:`${z}/Blue_hotrod.jpg`,b:`${z}/Blue_jacket.jpg`,c:`${z}/Blue_rollers.jpg`,d:`${z}/Blue_speakers.jpg`,e:`${z}/Premium_blonde.jpg`,f:`${z}/Premium_brunette.jpg`,g:`${z}/Premium_rocker.jpg`,h:`${z}/New_Wild.jpg`,i:`${z}/Red_burger.jpg`,j:`${z}/Red_fries.jpg`,k:`${z}/Red_milkshake.jpg`,l:`${z}/Scatter.jpg`,emptyslot:`${z}/Emptyslot.jpg`},Pe=`${z}/bg_base.jpg`,ve=`${z}/ReelFrames.png`,Fe=`${z}/RockABillyReels_logo.png`,Ze={spin:`${ye}/sounds/spin.mp3`,stop:`${ye}/sounds/stop.mp3`,win:`${ye}/sounds/win.mp3`};let de=R(!0),ae={},O=null,oe=null,pt=null,Kt=null,Te=R(!0),Ur=R(!1),ga=R(1100);const Gr={fast:3,medium:7,slow:18};let Q=R("medium"),We=R(Math.floor(Math.random()*20)+1);const ut={background:()=>`${ye}/music/rockabilly reels loop ${t(We)}.mp3`,freeSpins:`${ye}/music/rockabilly-loop_long.mp3`,drumHit:`${ye}/music/drum-hit.mp3`,winTheme:`${ye}/music/win-stinger.mp3`};function va(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(va,500);return}const c=window.Howl;try{O=new c({src:[ut.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+t(We)+")"),h(Ur,!0)},onloaderror:(p,A)=>{console.warn("⚠️ Background music not found:",A)}}),oe=new c({src:[ut.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(p,A)=>console.warn("⚠️ Free spins music not found:",A)}),pt=new c({src:[ut.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Kt=new c({src:[ut.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(p){console.error("Failed to initialize music system:",p)}}function ma(){const c=t(Z)?oe:O;c&&t(Te)&&!c.playing()&&(c.play(),console.log("🎵 "+(t(Z)?"Free spins":"Background")+" music started"))}function Hr(){if(t(Z))return;const c=Math.floor(Math.random()*20)+1;c===t(We)?h(We,c%20+1):h(We,c),console.log("🎵 Changing to loop #"+t(We)),O&&(O.playing()?(O.fade(O.volume(),0,200),setTimeout(()=>{O.stop(),O.unload()},200)):O.unload());const p=window.Howl;p&&(O=new p({src:[ut.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ New background music loop #"+t(We)+" loaded"),t(Te)&&!t(Z)&&setTimeout(()=>{O&&!O.playing()&&O.play()},300)},onloaderror:(A,S)=>{console.warn("⚠️ Failed to load loop #"+t(We)+":",S)}}))}function Yr(){O&&O.playing()&&(O.fade(O.volume(),0,500),setTimeout(()=>O.stop(),500)),oe&&oe.playing()&&(oe.fade(oe.volume(),0,500),setTimeout(()=>oe.stop(),500))}function qt(){O&&O.playing()&&(O.fade(O.volume(),0,500),setTimeout(()=>O.stop(),500)),oe&&oe.playing()&&(oe.fade(oe.volume(),0,500),setTimeout(()=>oe.stop(),500)),setTimeout(()=>{t(Te)&&ma()},600)}function Vr(){if(O&&O.playing()){const c=O.volume();O.fade(c,0,1e3),setTimeout(()=>{O.stop(),O.volume(.3)},1e3)}}let Qt=R(!1);function Xr(){h(Qt,!1),setTimeout(()=>{h(Qt,!0)},10)}let et=null;const Jt={vinylStartScale:.01,vinylEndScale:.05,sparkleScale:.1};function Kr(){h(Te,!t(Te)),t(Te)?ma():Yr()}function qr(){h(de,!t(de))}function Qr(){pt&&t(Te)&&t(de)&&pt.play()}function Jr(){Kt&&t(Te)&&t(de)&&Kt.play()}let Pt=null,Zt=null,ht=null,Oe=null,gt=R("Initializing..."),tt=R(""),ke=[],ba=R(!1),ze=R(1e3);const ya=[.4,.8,1,1.6,2,3,5,8,10,15,20,25,30,40,50,60,80,100];let vt=R(5),Ae=ce(()=>ya[t(vt)]),Ve=R(0),le=R(!1),mt=R(0),ge=R(!1),es=R(!1),Zr=R(0),Xe=!1,Be=null,ts=!1,st=R(0),at=R(0),bt=R(0),ss=R(0),as=ce(()=>t(at)>0?(t(bt)/t(at)*100).toFixed(2):"0.00"),rs=ce(()=>t(st)>0?(t(ss)/t(st)*100).toFixed(2):"0.00"),Z=R(!1),je=R(0),Ke=R(0),Tt=R(0),ns=R(0),Rt=R(0),os=R(0),en=ce(()=>t(Rt)>0?(t(os)/t(Rt)*100).toFixed(2):"0.00"),we=R(be([]));function tn(c,p,A){const S=new Date().toLocaleString("fi-FI");let v=`
${"=".repeat(60)}
`;v+=`ROUND #${c} - ${S}
`,v+=`Mode: ${t(Z)?"FREE SPINS":"BASE GAME"}
`,v+=`${"=".repeat(60)}
`,p.forEach(($,k)=>{v+=`
Win ${k+1}:
`,v+=`  Symbol: ${$.symbol} (${ka[$.symbol]})
`,v+=`  Count: ${$.count} symbols
`,v+=`  Multiplier: ${$.multiplier}x
`,v+=`  Payout: ${$.payout.toFixed(2)}
`,v+=`  Positions: [${$.positions.join(", ")}]
`}),v+=`
${"─".repeat(60)}
`,v+=`TOTAL WIN: ${A.toFixed(2)}
`,v+=`${"=".repeat(60)}
`,t(we).push(v)}function sn(){const c=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${t(we).join(`
`)}`,p=new Blob([c],{type:"text/plain"}),A=URL.createObjectURL(p),S=document.createElement("a");S.href=A,S.download=`win-log-${Date.now()}.txt`,S.click(),URL.revokeObjectURL(A)}function an(){h(we,be([]))}function rn(){t(Z)||(h(Z,!0),h(je,10),h(Ke,0),Ee(Tt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),qt())}const nn={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},on={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function xa(c){if(c===6)return Math.random()<.55?"h":"emptyslot";const p=t(Z)?on:nn,A=Math.random();let S=0;const v=he.filter(k=>k!=="h"),$=v.reduce((k,B)=>k+p[B],0);for(const k of v)if(S+=p[k]/$,A<S)return k;return"f"}function wa(){const c=[];for(let p=0;p<r;p++){const A=xa(p);c.push(A),Ee(Rt),A==="emptyslot"&&Ee(os)}return c}function _a(c){return c<3?{col:0,row:c}:c<6?{col:1,row:c-3}:c===6?{col:2,row:0}:c<10?{col:3,row:c-7}:{col:4,row:c-10}}function yt(c,p){return c===0?p:c===1?3+p:c===2?6:c===3?7+p:c===4?10+p:-1}function ln(){if(t(Z)){const c=Math.random();return c<.7?3:c<.92?5:10}else{const c=Math.random();return c<.7?1:c<.92?2:3}}const cn={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function dn(){var ie;const c=[],p=[];for(let E=0;E<r;E++)xt[E]==="l"&&p.push(E);if(p.length>=5){const E=p.length;h(je,t(je)+E),t(Z)?console.log(`🎰 FREE SPINS RETRIGGERED! +${E} FREE SPINS! Total: ${t(je)}`):(h(Z,!0),h(Ke,0),Ee(Tt),console.log(`🎰 FREE SPINS TRIGGERED! ${p.length} scatters = ${E} FREE SPINS!`),qt()),c.push({symbol:"l",count:p.length,payout:0,positions:p,multiplier:1})}const A=[];for(let E=0;E<3;E++)for(let M=0;M<3;M++)for(let j=0;j<1;j++)for(let U=0;U<3;U++)for(let H=0;H<3;H++){const Y=[yt(0,E),yt(1,M),yt(2,j),yt(3,U),yt(4,H)];A.push(Y)}console.log(`Generated ${A.length} possible paths (should be 81)`);const S=[];for(const E of A){const M=E.map(Y=>xt[Y]);if(M[0]==="emptyslot"||M[0]==="l")continue;let j=null;for(let Y=0;Y<M.length;Y++)if(M[Y]!=="h"&&M[Y]!=="emptyslot"&&M[Y]!=="l"){j=M[Y];break}if(!j)continue;let U=0;const H=new Set;for(let Y=0;Y<E.length;Y++){const Ie=E[Y],{col:pe}=_a(Ie),se=M[Y];(se===j||se==="h")&&H.add(pe)}for(let Y=0;Y<5&&H.has(Y);Y++)U++;if(U>=3){const Ie=E[0]%3;S.push({symbol:j,length:U,path:E.slice(0,U),startRow:Ie})}}const v=[],$=new Map;for(const E of S){const M=`${E.symbol}-${E.path.join(",")}`;$.has(M)||$.set(M,[]),$.get(M).push(E)}for(const[E,M]of $.entries()){const j=Math.max(...M.map(H=>H.length)),U=M.find(H=>H.length===j);U&&v.push(U)}const k=[],B=new Map;for(const E of v)B.has(E.symbol)||B.set(E.symbol,[]),B.get(E.symbol).push(E);const I=[];for(const[E,M]of B.entries()){const j=Math.max(...M.map(H=>H.length)),U=M.filter(H=>H.length===j);I.push(...U)}const G=new Map;for(const E of I){const M=`${E.symbol}-${E.length}`;G.has(M)||G.set(M,[]),G.get(M).push(E)}const W=I.length>0?ln():1;for(const[E,M]of G.entries()){const j=M[0],U=(ie=cn[j.symbol])==null?void 0:ie[j.length];if(U!==void 0&&U>0){const H=new Map;for(const se of M)for(let ue=0;ue<se.length;ue++)H.has(ue)||H.set(ue,new Set),H.get(ue).add(se.path[ue]);let Y=1;for(let se=0;se<j.length;se++){const ue=H.get(se);Y*=ue?ue.size:1}const Ie=U*t(Ae)*Y*W;console.log(`  ${j.length}x${j.symbol}: ${Y} ways × ${U}x × ${t(Ae)} bet × ${W} mult = ${Ie}`);const pe=new Set;for(const se of M)se.path.forEach(ue=>pe.add(ue));k.push({symbol:j.symbol,count:j.length,payout:Ie,positions:Array.from(pe),multiplier:W})}}return c.push(...k),c}let $e=R(0),rt=R(be([])),De=R(!1),Me=R(!1),is=R(!1),ls=R(0);const ka={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function cs(c){if(!t(de)||!ae[c])return;const p=ae[c];p.currentTime=0,p.play().catch(A=>{console.warn("Äänen toisto epäonnistui:",c,A)})}function fn(c){wt.forEach(p=>fe.stage.removeChild(p)),wt=[],c.forEach(p=>{p.positions.forEach(A=>{const S=Re[A],v=new cr().rect(0,0,F,P).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});v.x=S.container.x,v.y=S.container.y,fe.stage.addChild(v),wt.push(v);let $=0,k=1;const B=.05;fe.ticker.add(()=>{$+=k*B,$>=.4&&(k=-1),$<=0&&(k=1),v.alpha=.5+$})})})}function ds(){wt.forEach(c=>fe.stage.removeChild(c)),wt=[]}let xt=wa(),fs,fe,Re=[],wt=[];class pn{constructor(p,A){Se(this,"index");Se(this,"container");Se(this,"offset",0);Se(this,"speed",0);Se(this,"targetSpeed",30);Se(this,"state","idle");Se(this,"stopDelay",0);Se(this,"bounceOffset",0);Se(this,"bounceSpeed",0);Se(this,"bounceFrames",0);this.index=p,this.container=A}start(p){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=p}startSynchronized(p){const A=Gr[t(Q)],S=60+p*A;this.start(S)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const p=t(Q)==="slow"?.88:t(Q)==="medium"?.92:.95;this.speed*=p,this.speed<2.5&&(this.state="bouncing",this.speed=0,this.offset=0,this.bounceOffset=0,this.bounceSpeed=4,cs("stop"),Qr())}this.state==="bouncing"&&(this.bounceSpeed*=.8,this.bounceOffset+=this.bounceSpeed,Math.abs(this.bounceSpeed)<.2&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=te&&(this.offset=0,xt[this.index]=xa(this.index)))}}draw(){const p=this.container;p.removeChildren();const A=xt[this.index];if(!A||!Pt||!Pt[A])return;const S=this.offset+this.bounceOffset,v=($,k)=>{const B=Pt[$];if(!B)return;const I=new Js(B);I.width=F,I.height=P,I.x=0,I.y=k,p.addChild(I)};v(A,S-te),v(A,S),v(A,S+te)}}let l=R(1);const me=ce(()=>Yi(t(n)(),t(l)));da(async()=>{fe=new Cr,await fe.init({width:t(o),height:t(i),backgroundAlpha:0}),fs.appendChild(fe.canvas);const c=()=>{const v=window.innerWidth,$=window.innerHeight,k=v/t(o),B=$/t(i),I=$>v,G=v<=768;let W;G&&I?W=Math.min(k*1,B*.95,1.2):G?W=Math.min(k*.98,B*.95,1.1):I?W=Math.min(k*.95,B*.85,1):W=Math.min(k,B,1),h(l,be(W)),fe.stage.scale.set(W),fe.renderer.resize(t(o),t(i))};c(),window.addEventListener("resize",c);const p=v=>{(v.code==="Space"||v.key===" ")&&(v.preventDefault(),Re.some(k=>k.state==="spinning"||k.state==="slowing")?(Re.forEach(k=>{k.state==="spinning"?(k.stopDelay=0,k.state="slowing",k.speed=k.targetSpeed*.5):k.state==="slowing"&&(k.speed=k.speed*.3)}),console.log("⚡ Skip spin - kiekot pysähtyvät nopeasti")):ps())};window.addEventListener("keydown",p);const A={};try{h(gt,"Loading background and UI images..."),ke.push(`Loading background: ${Pe}`),ke.push(`Loading reel frames: ${ve}`),ke.push(`Loading logo: ${Fe}`),await ot.load([{alias:"background",src:Pe},{alias:"reelframes",src:ve},{alias:"logo",src:Fe}]),Zt=Qe.from("background"),ht=Qe.from("reelframes"),Oe=Qe.from("logo"),console.log("✅ Background texture created:",Zt.width,"x",Zt.height),console.log("✅ Reel frames texture created:",ht.width,"x",ht.height),console.log("✅ Logo texture created:",Oe.width,"x",Oe.height),ke.push("✅ All UI images loaded"),h(gt,"Loading symbols...");const v=[];for(const $ of he)v.push({alias:$,src:_e[$]});await ot.load(v);for(const $ of he){const k=_e[$];ke.push(`Loading symbol ${$}: ${k}`);try{const B=Qe.from($);A[$]=B,console.log(`✅ Symbol ${$} loaded:`,B.width,"x",B.height),ke.push(`✅ Symbol ${$} loaded`)}catch(B){const I=`❌ Failed to load symbol ${$} from ${k}: ${B}`;throw ke.push(I),console.error(I),new Error(I)}}Pt=A,h(gt,"Assets loaded successfully!")}catch(v){h(tt,`Asset loading failed: ${v}`),ke.push(t(tt)),console.error(t(tt));return}console.log("Ladataan ääniefektit...");for(const[v,$]of Object.entries(Ze)){const k=new Audio;k.src=$,k.preload="auto",k.volume=.7,k.load(),k.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${$} (käytetään hiljaista placeholderia)`)}),ae[v]=k}[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(v=>({x:v.x+t(g),y:v.y+t(b)})),Re=[];for(let v=0;v<r;v++){const $=_a(v),k=$.col,B=$.row,I=300+k*(F+20),G=250+B*(P+15),W=v===6?I+m:I,ie=v===6?G+u:G,E=new fa;E.x=W+t(g),E.y=ie+t(b);const M=new cr().rect(0,0,F,P).fill(16777215);M.x=E.x,M.y=E.y,E.mask=M,fe.stage.addChild(M),fe.stage.addChild(E),Re.push(new pn(v,E))}if(ht){const v=new Js(ht);v.scale.set(1),v.x=250,v.y=200,fe.stage.addChild(v),h(ga,be(v.width)),console.log("Reel frames lisätty:",v.width.toFixed(0),"x",v.height.toFixed(0)),console.log("Control panel leveys päivitetty:",t(ga).toFixed(0))}if(Oe){Oe.source&&(Oe.source.scaleMode="nearest",Oe.source.antialias=!1,Oe.source.update());const v=new Js(Oe);v.roundPixels=!0,v.scale.set(_),v.x=(fe.renderer.width-v.width)/2+L,v.y=T,fe.stage.addChild(v),console.log("Logo lisätty päällimmäiseen layeriin:",v.width.toFixed(0),"x",v.height.toFixed(0))}va(),fe.ticker.add(un)});function un(){for(const c of Re)c.update(),c.draw();if(!t(De)&&!ts&&Re.every(c=>c.state==="stopped")){ts=!0,Vr();const c=dn();console.log(`Checking wins, found ${c.length} wins`),c.length>0?(h(rt,be(c)),h($e,be(c.reduce((p,A)=>p+A.payout,0))),tn(t(st),c,t($e)),gn(t($e)),h(De,!0),h(Zr,be(Date.now())),console.log(`🎉 VOITTO! ${t($e)} pistettä! Uusi saldo: ${t(ze)}`),console.log(`isShowingWin set to: ${t(De)}, totalWin: ${t($e)}`),c.forEach(p=>{const A=p.multiplier?` (${p.multiplier}x multiplier)`:"";console.log(`${p.count}x ${p.symbol} = ${p.payout} pistettä${A}`)}),fn(c),cs("win"),t(le)&&!Xe&&(Xe=!0,Be=window.setTimeout(()=>{t(De)&&t(le)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),h(De,!1),ds()),Be=window.setTimeout(()=>{Xe=!1,us()},200)},1500))):(console.log("No wins found this spin"),t(le)&&!Xe&&(Xe=!0,Be=window.setTimeout(()=>{Xe=!1,us()},500))),t(Z)&&t(je)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${t(Ke)}`),setTimeout(()=>{h(ls,be(t(Ke))),h(is,!0)},2e3))}}function ps(){if(t(Z)||Hr(),Xr(),t(Z)&&t(je)>0)Ee(je,-1),Ee(ns),console.log(`🎰 FREE SPIN! Remaining: ${t(je)}`);else if(!t(Z)){if(t(ze)<t(Ae)){alert(`Not enough credits! Balance: ${t(ze)}, Bet: ${t(Ae)}`),_t();return}h(ze,t(ze)-t(Ae)),Ee(st),h(at,t(at)+t(Ae))}Be!==null&&(clearTimeout(Be),Be=null),h(rt,be([])),h($e,0),h(Ve,0),console.log("🔄 lastWin nollattu: "+t(Ve)),h(De,!1),ts=!1,ds(),xt=wa(),Re.forEach((c,p)=>{c.startSynchronized(p)}),cs("spin")}function hn(c,p,A=1400){if(typeof window>"u")return;const S=document.getElementById("winLabel");if(!S)return;S.classList.add("rolling");const v=performance.now(),$=p-c,k=I=>1-Math.pow(1-I,3);function B(I){const G=Math.min(1,(I-v)/A),W=c+$*k(G);h(Ve,W),G<1?requestAnimationFrame(B):(h(Ve,be(p)),S.classList.remove("rolling"),S.classList.add("winHit"),setTimeout(()=>S.classList.remove("winHit"),450))}requestAnimationFrame(B)}function gn(c){h(ze,t(ze)+c),h(bt,t(bt)+c);const p=t(Ve);h(Ve,be(c));const A=c>t(Ae)*50?2e3:1400;if(hn(p,c,A),t(Z)&&h(Ke,t(Ke)+c),c>0){Ee(ss);const S=c/t(Ae);S>=10&&Jr(),et&&(S>=50?et.show():S>=20?setTimeout(()=>et.show(),200):S>=10&&setTimeout(()=>et.show(),400))}}function vn(){t(vt)<ya.length-1&&Ee(vt)}function mn(){t(vt)>0&&Ee(vt,-1)}function Ne(c){h(le,!0),h(mt,be(c)),h(ge,!1),us()}function _t(){h(le,!1),h(mt,0),Xe=!1,Be!==null&&(clearTimeout(Be),Be=null)}function us(){if(!t(le)||t(mt)<=0){_t();return}console.log(`Autoplay: Starting spin ${t(mt)} rounds left`),ps(),Ee(mt,-1)}function bn(){confirm("Reset all statistics?")&&(h(st,0),h(at,0),h(bt,0),h(ss,0),h(Tt,0),h(ns,0),h(Rt,0),h(os,0))}var Aa=ll();Gn(c=>{var p=Ki();f(Ye(p)),V(c,p)});var $a=Ye(Aa);{var yn=c=>{zi(c,{onloaded:()=>h(ba,!0)})};ne($a,c=>{t(ba)||c(yn)})}var Sa=f($a,2);{var xn=c=>{var p=Zi(),A=f(x(p),2),S=f(x(A));w(A);var v=f(A,2);{var $=j=>{var U=qi(),H=f(x(U));w(U),re(()=>K(H,` ${t(tt)??""}`)),V(j,U)};ne(v,j=>{t(tt)&&j($)})}var k=f(v,2),B=f(x(k));B.nodeValue=` ${ye??""}`,w(k);var I=f(k,2),G=f(x(I));G.nodeValue=` ${Pe??""}`,w(I);var W=f(I,2),ie=f(x(W));w(W);var E=f(W,2);{var M=j=>{var U=Ji(),H=x(U),Y=x(H);w(H);var Ie=f(H,2);Vt(Ie,17,()=>ke,Yt,(pe,se)=>{var ue=Qi(),zn=x(ue,!0);w(ue),re(()=>K(zn,t(se))),V(pe,ue)}),w(U),re(()=>K(Y,`Log (${ke.length??""})`)),V(j,U)};ne(E,j=>{ke.length>0&&j(M)})}w(p),re(()=>{K(S,` ${t(gt)??""}`),K(ie,` ${_e.a??""}`)}),V(c,p)};ne(Sa,c=>{(t(gt)!=="Assets loaded successfully!"||t(tt))&&c(xn)})}var Ea=f(Sa,2);{var wn=c=>{var p=sl(),A=f(x(p),2),S=x(A);w(A);var v=f(A,2);Vt(v,17,()=>t(rt),Yt,(I,G)=>{var W=el(),ie=x(W);w(W),re(E=>K(ie,`${t(G).count??""} × ${ka[t(G).symbol]??""} = ${E??""} pistettä`),[()=>t(G).payout.toFixed(2)]),V(I,W)});var $=f(v,2);{var k=I=>{var G=tl(),W=x(G),ie=x(W);w(W),w(G),re(()=>K(ie,`✨ ${t(rt)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),V(I,G)};ne($,I=>{t(rt).length>0&&t(rt)[0].multiplier>1&&I(k)})}var B=f($,2);w(p),re(I=>K(S,`${I??""} pistettä`),[()=>t($e).toFixed(2)]),C("click",B,()=>{h(De,!1),ds(),console.log("Win popup closed, ready for next spin")}),V(c,p)};ne(Ea,c=>{t($e)>0&&t(De)&&c(wn)})}var La=f(Ea,2);{var _n=c=>{var p=nl(),A=f(x(p),2),S=f(x(A),2),v=x(S),$=f(x(v),2),k=x($,!0);w($),w(v);var B=f(v,2);{var I=pe=>{var se=al();C("click",se,_t),V(pe,se)},G=pe=>{var se=rl();C("click",se,()=>{h(ge,!0),h(Me,!1)}),V(pe,se)};ne(B,pe=>{t(le)?pe(I):pe(G,!1)})}w(S);var W=f(S,2),ie=x(W),E=f(x(ie),2),M=x(E,!0);w(E),w(ie);var j=f(ie,2),U=x(j),H=f(U,2),Y=f(H,2);w(j),w(W),$r(2),w(A);var Ie=f(A,10);w(p),re(pe=>{y(p,"style",`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.95);
    color: white;
    padding: ${30*t(l)}px;
    border-radius: ${15*t(l)}px;
    font-family: Arial, sans-serif;
    z-index: 3000;
    border: ${3*t(l)}px solid #ffd700;
    max-width: ${600*t(l)}px;
    max-height: ${pe??""}px;
    overflow-y: auto;
    font-size: ${t(l)??""}em;
  `),y($,"style",`color: ${(t(le)?"#00ff00":"#ff6666")??""}; font-weight: bold;`),K(k,t(le)?`ON (${autoPlayRounds} left)`:"OFF"),K(M,t(Q)==="slow"?"🐌 SLOW":t(Q)==="medium"?"🏃 MEDIUM":"⚡ FAST"),y(U,"style",`flex: 1; padding: 10px; background: ${(t(Q)==="slow"?"linear-gradient(135deg, #4488ff 0%, #66aaff 100%)":"rgba(255,255,255,0.1)")??""}; color: white; border: ${(t(Q)==="slow"?"2px solid #ffd700":"1px solid #555")??""}; border-radius: 8px; cursor: pointer; font-size: 0.9em;`),y(H,"style",`flex: 1; padding: 10px; background: ${(t(Q)==="medium"?"linear-gradient(135deg, #4488ff 0%, #66aaff 100%)":"rgba(255,255,255,0.1)")??""}; color: white; border: ${(t(Q)==="medium"?"2px solid #ffd700":"1px solid #555")??""}; border-radius: 8px; cursor: pointer; font-size: 0.9em;`),y(Y,"style",`flex: 1; padding: 10px; background: ${(t(Q)==="fast"?"linear-gradient(135deg, #4488ff 0%, #66aaff 100%)":"rgba(255,255,255,0.1)")??""}; color: white; border: ${(t(Q)==="fast"?"2px solid #ffd700":"1px solid #555")??""}; border-radius: 8px; cursor: pointer; font-size: 0.9em;`)},[()=>Math.min(t(i)*t(l)*.8,80*window.innerHeight/100)]),C("click",U,()=>{h(Q,"slow")}),C("click",H,()=>{h(Q,"medium")}),C("click",Y,()=>{h(Q,"fast")}),C("click",Ie,()=>{h(Me,!1)}),V(c,p)};ne(La,c=>{t(Me)&&c(_n)})}var Pa=f(La,2);{var kn=c=>{var p=ol(),A=x(p),S=f(x(A),4),v=x(S,!0);w(S);var $=f(S,2);w(A),w(p),re(k=>K(v,k),[()=>t(ls).toFixed(2)]),C("click",$,()=>{h(is,!1),h(Z,!1),h(Ke,0),h(ls,0),qt()}),C("mouseenter",$,k=>{k.currentTarget.style.transform="scale(1.05)",k.currentTarget.style.boxShadow="0 6px 20px rgba(255, 215, 0, 0.6)"}),C("mouseleave",$,k=>{k.currentTarget.style.transform="scale(1)",k.currentTarget.style.boxShadow="0 4px 15px rgba(255, 215, 0, 0.4)"}),V(c,p)};ne(Pa,c=>{t(is)&&c(kn)})}var Ta=f(Pa,2),hs=x(Ta),Ra=x(hs);const An=ce(()=>t(n)());Xi(Ra,{get layout(){return t(An)},get gameScale(){return t(l)},backgroundPath:`${z??""}/bg_base.jpg`});var kt=f(Ra,2),gs=x(kt),vs=f(gs,2),Ia=x(vs);{var $n=c=>{var p=il(),A=x(p),S=f(A,2),v=f(S,2),$=f(v,2),k=f($,2),B=f(k,2),I=f(B,2),G=f(I,2),W=f(G,2),ie=f(W,2);w(p),re(()=>{y(p,"style",`
    position: absolute;
    bottom: ${(t(me).height/t(l)+20)*t(l)}px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.95);
    padding: ${20*t(l)}px;
    border-radius: ${15*t(l)}px;
    border: ${3*t(l)}px solid #0088ff;
    box-shadow: 0 ${8*t(l)}px ${30*t(l)}px rgba(0, 136, 255, 0.6);
    z-index: 2000;
    min-width: ${250*t(l)}px;
  `),y(A,"style",`color: white; font-weight: bold; margin-bottom: ${15*t(l)}px; text-align: center; font-size: ${18*t(l)}px;`),y(S,"style",`
        width: 100%;
        padding: ${12*t(l)}px;
        margin-bottom: ${8*t(l)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*t(l)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(l)}px;
        box-shadow: 0 ${4*t(l)}px ${10*t(l)}px rgba(68, 170, 68, 0.4);
      `),y(v,"style",`
        width: 100%;
        padding: ${12*t(l)}px;
        margin-bottom: ${8*t(l)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*t(l)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(l)}px;
        box-shadow: 0 ${4*t(l)}px ${10*t(l)}px rgba(68, 170, 68, 0.4);
      `),y($,"style",`
        width: 100%;
        padding: ${12*t(l)}px;
        margin-bottom: ${8*t(l)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*t(l)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(l)}px;
        box-shadow: 0 ${4*t(l)}px ${10*t(l)}px rgba(68, 170, 68, 0.4);
      `),y(k,"style",`
        width: 100%;
        padding: ${12*t(l)}px;
        margin-bottom: ${8*t(l)}px;
        background: linear-gradient(135deg, #4488ff 0%, #66aaff 100%);
        color: white;
        border: none;
        border-radius: ${8*t(l)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(l)}px;
        box-shadow: 0 ${4*t(l)}px ${10*t(l)}px rgba(68, 136, 255, 0.4);
      `),y(B,"style",`
        width: 100%;
        padding: ${12*t(l)}px;
        margin-bottom: ${8*t(l)}px;
        background: linear-gradient(135deg, #4488ff 0%, #66aaff 100%);
        color: white;
        border: none;
        border-radius: ${8*t(l)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(l)}px;
        box-shadow: 0 ${4*t(l)}px ${10*t(l)}px rgba(68, 136, 255, 0.4);
      `),y(I,"style",`
        width: 100%;
        padding: ${12*t(l)}px;
        margin-bottom: ${8*t(l)}px;
        background: linear-gradient(135deg, #ff8844 0%, #ffaa66 100%);
        color: white;
        border: none;
        border-radius: ${8*t(l)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(l)}px;
        box-shadow: 0 ${4*t(l)}px ${10*t(l)}px rgba(255, 136, 68, 0.4);
      `),y(G,"style",`
        width: 100%;
        padding: ${12*t(l)}px;
        margin-bottom: ${8*t(l)}px;
        background: linear-gradient(135deg, #ff8844 0%, #ffaa66 100%);
        color: white;
        border: none;
        border-radius: ${8*t(l)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(l)}px;
        box-shadow: 0 ${4*t(l)}px ${10*t(l)}px rgba(255, 136, 68, 0.4);
      `),y(W,"style",`
        width: 100%;
        padding: ${12*t(l)}px;
        margin-bottom: ${15*t(l)}px;
        background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%);
        color: white;
        border: none;
        border-radius: ${8*t(l)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*t(l)}px;
        box-shadow: 0 ${4*t(l)}px ${10*t(l)}px rgba(255, 68, 68, 0.4);
      `),y(ie,"style",`
        width: 100%;
        padding: ${10*t(l)}px;
        background: rgba(255, 255, 255, 0.1);
        color: #aaa;
        border: ${1*t(l)}px solid #555;
        border-radius: ${8*t(l)}px;
        cursor: pointer;
        font-size: ${14*t(l)}px;
      `)}),C("click",S,()=>{Ne(10),h(ge,!1)}),C("click",v,()=>{Ne(25),h(ge,!1)}),C("click",$,()=>{Ne(50),h(ge,!1)}),C("click",k,()=>{Ne(100),h(ge,!1)}),C("click",B,()=>{Ne(200),h(ge,!1)}),C("click",I,()=>{Ne(500),h(ge,!1)}),C("click",G,()=>{Ne(1e3),h(ge,!1)}),C("click",W,()=>{Ne(5e3),h(ge,!1)}),C("click",ie,()=>{h(ge,!1)}),V(c,p)};ne(Ia,c=>{t(ge)&&c($n)})}var ms=f(Ia,2);y(ms,"src",`${N??""}/Control_leftend.png`);var It=f(ms,2),bs=x(It),Ot=x(bs),Oa=x(Ot);w(Ot);var ys=f(Ot,2),Ba=x(ys),xs=f(Ba,2),ws=x(xs),Bt=f(ws,2),Sn=x(Bt,!0);w(Bt);var Ma=f(Bt,2);w(xs),w(ys);var _s=f(ys,2);y(_s,"src",`${N??""}/Control_divider.png`);var ks=f(_s,2),Ca=x(ks),As=f(Ca,2),$s=x(As),En=x($s,!0);w($s),w(As),w(ks);var Fa=f(ks,2);y(Fa,"src",`${N??""}/Control_divider.png`),w(bs);var Wa=f(bs,2),Ss=f(Wa,2),Es=x(Ss),Ls=x(Es);w(Es),w(Ss);var za=f(Ss,2),Mt=x(za),Ct=x(Mt),ja=f(Ct,2);w(Mt);var Ps=f(Mt,2);y(Ps,"src",`${N??""}/Control_divider.png`);var Ft=f(Ps,2),Wt=x(Ft),Da=f(Wt,2);w(Ft);var Ts=f(Ft,2);y(Ts,"src",`${N??""}/Control_divider.png`);var Rs=f(Ts,2),Na=x(Rs),Is=f(Na,2),Os=x(Is),Ln=x(Os,!0);w(Os),w(Is),w(Rs);var Bs=f(Rs,2);y(Bs,"src",`${N??""}/Control_divider.png`);var Ua=f(Bs,2),Ga=x(Ua);w(Ua),w(za),w(It);var Ha=f(It,2);y(Ha,"src",`${N??""}/Control_rightend.png`),w(vs),w(kt),ir(kt,c=>fs=c,()=>fs);var zt=f(kt,2);zt.textContent=`🛠️ DEBUG v${a}`;var Ya=f(zt,2);const Pn=ce(()=>t($e)/t(Ae)>=50?"jackpot":t($e)/t(Ae)>=20?"medium":"small");ir(Mi(Ya,{get winLevel(){return t(Pn)},get winAmount(){return t($e)},get vinylStartScale(){return Jt.vinylStartScale},get vinylEndScale(){return Jt.vinylEndScale},get sparkleScale(){return Jt.sparkleScale}}),c=>et=c,()=>et);var jt=f(Ya,2),Va=f(x(jt),2);Va.textContent=`v${a}`;var Ms=f(Va,2),Xa=f(x(Ms),2),Tn=x(Xa,!0);w(Xa),w(Ms);var Cs=f(Ms,2),Ka=f(x(Cs),2),Rn=x(Ka,!0);w(Ka),w(Cs);var Fs=f(Cs,2),qa=f(x(Fs),2),In=x(qa,!0);w(qa),w(Fs);var Ws=f(Fs,2),zs=f(x(Ws),2),On=x(zs);w(zs),w(Ws);var js=f(Ws,2),Ds=f(x(js),2),Bn=x(Ds);w(Ds),w(js);var Ns=f(js,2),Qa=f(x(Ns),2),Mn=x(Qa,!0);w(Qa),w(Ns);var Us=f(Ns,2),Ja=f(x(Us),2),Cn=x(Ja,!0);w(Ja),w(Us);var Gs=f(Us,2),Za=f(x(Gs),2),Fn=x(Za);w(Za),w(Gs);var er=f(Gs,2),tr=f(er,2),nt=x(tr),Wn=x(nt);w(nt);var Dt=f(nt,2),Hs=f(Dt,2);w(tr),w(jt);var Ys=f(jt,2),Nt=x(Ys),Vs=f(Nt,2);w(Ys),w(hs),w(Ta),re((c,p,A,S,v,$,k,B)=>{y(hs,"style",`
    position: relative;
    width: ${t(o)*t(l)}px;
    height: ${t(i)*t(l)}px;
  `),y(kt,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${t(o)??""}px;
        height: ${t(i)??""}px;
      `),y(gs,"style",`
          position: absolute;
          top: ${130*t(l)}px;
          right: ${20*t(l)}px;
          padding: ${10*t(l)}px ${15*t(l)}px;
          background-color: rgba(255, 215, 0, 0.3);
          border: ${2*t(l)}px solid rgba(255, 215, 0, 0.7);
          border-radius: ${8*t(l)}px;
          cursor: pointer;
          font-weight: bold;
          font-size: ${16*t(l)}px;
          color: white;
          text-shadow: 0 0 ${5*t(l)}px rgba(0,0,0,0.8);
          z-index: 1000;
          min-width: ${180*t(l)}px;
        `),y(vs,"style",`
        position: absolute;
        left: ${t(me).x??""}px;
        top: ${t(me).y??""}px;
        width: ${t(me).width??""}px;
        height: ${t(me).height??""}px;
        display: flex;
        align-items: center;
        z-index: 1000;
      `),y(ms,"style",`height: ${t(me).height??""}px; flex-shrink: 0;`),y(It,"style",`
    flex-grow: 1;
    height: ${t(me).height??""}px;
    background-image: url('${N??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    padding: 0 ${20*t(l)}px;
    position: relative;
    gap: ${20*t(l)}px;
  `),y(Ot,"style",`display: none; align-items: center; justify-content: center; margin-right: ${10*t(l)}px;`),y(Oa,"style",`
            width: ${50*t(l)}px;
            height: ${50*t(l)}px;
            background-image: url('${N??""}/Control_menubar.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(Ba,"style",`color: #00ff00; font-size: ${12*t(l)}px; font-weight: bold; line-height: 1; height: ${16*t(l)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(l)}px;`),y(xs,"style",`display: flex; gap: ${5*t(l)}px; align-items: center; height: ${44*t(l)}px;`),y(ws,"style",`
              width: ${40*t(l)}px;
              height: ${40*t(l)}px;
              background-image: url('${N??""}/Control_lowerbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            `),y(Bt,"style",`
            color: #fff;
            font-size: ${18*t(l)}px;
            font-weight: bold;
            min-width: ${80*t(l)}px;
            text-align: center;
            font-family: 'Courier New', monospace;
          `),K(Sn,c),y(Ma,"style",`
              width: ${40*t(l)}px;
              height: ${40*t(l)}px;
              background-image: url('${N??""}/Control_upperbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            `),y(_s,"style",`height: ${t(me).height*.8}px; flex-shrink: 0;`),y(Ca,"style",`color: #00ff00; font-size: ${12*t(l)}px; font-weight: bold; line-height: 1; height: ${16*t(l)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(l)}px;`),y(As,"style",`height: ${44*t(l)}px; display: flex; align-items: center;`),y($s,"style",`
            color: #fff;
            font-size: ${20*t(l)}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
          `),K(En,p),y(Fa,"style",`height: ${t(me).height*.8}px; flex-shrink: 0;`),y(Wa,"style",`flex-shrink: 0; width: ${130*t(l)}px;`),oa(Es,1,`play-button-wrapper ${(t(Qt)?"glare-animate":"")??""}`,"svelte-1bferk7"),y(Ls,"style",`
            width: ${110*t(l)}px;
            height: ${110*t(l)}px;
            background-image: url('${N??""}/${(t(le)?"Control_playbutton_stop.png":"Control_playbutton.png")??""}');
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
          `),y(Ls,"title",t(le)?"STOP AUTOPLAY":"SPIN"),y(Mt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*t(l)}px;`),y(Ct,"style",`
            width: ${50*t(l)}px;
            height: ${50*t(l)}px;
            background-image: url('${N??""}/${(t(le)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(Ct,"title",t(le)?"Stop Autoplay":"Autoplay"),y(ja,"src",`${N??""}/${(t(le)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),y(ja,"style",`height: ${10*t(l)}px; width: auto; display: block;`),y(Ps,"style",`height: ${t(me).height*.8}px; flex-shrink: 0;`),y(Ft,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*t(l)}px;`),y(Wt,"style",`
            width: ${50*t(l)}px;
            height: ${50*t(l)}px;
            background-image: url('${N??""}/Control_fastplay_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(Wt,"title",`Spin Speed: ${(t(Q)==="slow"?"Slow":t(Q)==="medium"?"Medium":"Fast")??""}`),y(Da,"src",`${N??""}/${(t(Q)==="slow"?"Control_bar_deselect.png":t(Q)==="medium"?"Control_half_bar_select.png":"Control_bar_select.png")??""}`),y(Da,"style",`height: ${10*t(l)}px; width: auto; display: block;`),y(Ts,"style",`height: ${t(me).height*.8}px; flex-shrink: 0;`),y(Na,"style",`color: #00ff00; font-size: ${12*t(l)}px; font-weight: bold; line-height: 1; height: ${16*t(l)}px; display: flex; align-items: flex-end; padding-bottom: ${2*t(l)}px;`),y(Is,"style",`height: ${44*t(l)}px; display: flex; align-items: center;`),y(Os,"style",`
            color: #fff;
            font-size: ${20*t(l)}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
          `),K(Ln,A),y(Bs,"style",`height: ${t(me).height*.8}px; flex-shrink: 0;`),y(Ga,"style",`
            width: ${50*t(l)}px;
            height: ${50*t(l)}px;
            background-image: url('${N??""}/Control_menubar.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(Ha,"style",`height: ${t(me).height??""}px; flex-shrink: 0;`),y(zt,"style",`
    position: absolute;
    top: ${190*t(l)}px;
    right: ${20*t(l)}px;
    padding: ${10*t(l)}px ${15*t(l)}px;
    background-color: rgba(0, 255, 0, 0.3);
    border: ${2*t(l)}px solid rgba(0, 255, 0, 0.7);
    border-radius: ${8*t(l)}px;
    cursor: pointer;
    font-weight: bold;
    font-size: ${16*t(l)}px;
    color: white;
    text-shadow: 0 0 ${5*t(l)}px rgba(0,0,0,0.8);
    z-index: 10000;
    min-width: ${180*t(l)}px;
    pointer-events: auto;
  `),y(jt,"style",`
  position: absolute;
  top: 20px;
  left: 20px;
  display: ${(t(es)?"block":"none")??""};
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
`),K(Tn,S),K(Rn,v),K(In,$),y(zs,"style",`color: ${k??""};`),K(On,`${t(as)??""}%`),y(Ds,"style",`color: ${B??""};`),K(Bn,`${t(rs)??""}%`),K(Mn,t(Tt)),K(Cn,t(ns)),K(Fn,`${t(en)??""}%`),nt.disabled=t(we).length===0,y(nt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(t(we).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(t(we).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(t(we).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(t(we).length>0?"1":"0.5")??""};
      `),K(Wn,`Download Win Log (${t(we).length??""})`),Dt.disabled=t(we).length===0,y(Dt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(t(we).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(t(we).length>0?"1":"0.5")??""};
      `),Hs.disabled=t(Z),y(Hs,"style",`
        width: 100%;
        padding: 5px;
        background: ${(t(Z)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(t(Z)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(t(Z)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(t(Z)?"0.5":"1")??""};
      `),y(Ys,"style",`
  position: absolute;
  top: ${10*t(l)}px;
  right: ${10*t(l)}px;
  display: flex;
  gap: ${10*t(l)}px;
  z-index: 1001;
`),y(Nt,"style",`
      width: ${50*t(l)}px;
      height: ${50*t(l)}px;
      background-image: url('${N??""}/${(t(Te)?"music_on.png":"music_off.png")??""}');
      background-size: contain;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
      background-color: transparent;
    `),y(Nt,"title",t(Te)?"Music: ON":"Music: OFF"),y(Vs,"style",`
      width: ${50*t(l)}px;
      height: ${50*t(l)}px;
      background-image: url('${N??""}/${(t(de)?"sounds_on.png":"sounds_off.png")??""}');
      background-size: contain;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
      background-color: transparent;
    `),y(Vs,"title",t(de)?"Sound: ON":"Sound: OFF")},[()=>t(Ae).toFixed(2),()=>t(ze).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>t(Ve).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>t(st).toLocaleString(),()=>t(at).toLocaleString(),()=>t(bt).toLocaleString(),()=>parseFloat(t(as))>=95?"#00ff00":parseFloat(t(as))>=85?"#ffff00":"#ff6666",()=>parseFloat(t(rs))>=30?"#00ff00":parseFloat(t(rs))>=20?"#ffff00":"#ff6666"]),C("click",gs,()=>{h(Me,!t(Me))}),C("click",Oa,()=>{h(Me,!t(Me))}),C("click",ws,mn),C("click",Ma,vn),C("click",Ls,()=>{t(le)?_t():Re.some(p=>p.state==="spinning"||p.state==="slowing")?Re.forEach(p=>{p.state==="spinning"?(p.stopDelay=0,p.state="slowing",p.speed=p.targetSpeed*.5):p.state==="slowing"&&(p.speed=p.speed*.3)}):ps()}),C("click",Ct,()=>{t(le)?_t():h(ge,!t(ge))}),C("click",Wt,()=>{t(Q)==="slow"?h(Q,"medium"):t(Q)==="medium"?h(Q,"fast"):h(Q,"slow")}),C("click",Ga,()=>{h(Me,!t(Me))}),C("click",zt,()=>{h(es,!t(es))}),C("click",er,bn),C("click",nt,sn),C("click",Dt,an),C("click",Hs,rn),C("click",Nt,Kr),C("click",Vs,qr),V(s,Aa),Lt()}var dl=ee('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),fl=ee('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function pl(s,e){Et(e,!1);let a=qe(e,"isAuthenticated",12,!1),r=aa(""),n=aa(!1);const o="slot2024";function i(){t(r)===o?(a(!0),sessionStorage.setItem("gameAuthenticated","true")):(h(n,!0),h(r,""),setTimeout(()=>h(n,!1),3e3))}da(()=>{a(sessionStorage.getItem("gameAuthenticated")==="true")}),Yn();var d=Ht(),g=Ye(d);{var b=u=>{var m=fl(),_=x(m),L=f(x(_),4),T=x(L);Lo(T),$r(2),w(L);var J=f(L,2);{var F=P=>{var X=dl();V(P,X)};ne(J,P=>{t(n)&&P(F)})}w(_),w(m),To(T,()=>t(r),P=>h(r,P)),C("submit",L,Ro(i)),V(u,m)};ne(g,u=>{a()||u(b)})}V(s,d),Lt()}var ul=ee("<!> <!>",1);function $l(s){let e=aa(!1);var a=ul(),r=Ye(a);pl(r,{get isAuthenticated(){return t(e)},set isAuthenticated(i){h(e,i)},$$legacy:!0});var n=f(r,2);{var o=i=>{cl(i,{})};ne(n,i=>{t(e)&&i(o)})}V(s,a)}export{Ir as A,Pr as C,zo as R,Bo as S,Or as V,$l as _,Oo as u};
