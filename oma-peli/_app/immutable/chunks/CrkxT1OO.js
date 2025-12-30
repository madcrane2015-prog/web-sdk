const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CYyLKxkn.js","./SpTHHzAp.js","./DN2ixH3E.js","./D1rxTRw3.js","./BUP9hRfY.js","./C2GHuDhf.js","./B_V-gmqB.js","./CakeCqhA.js"])))=>i.map(i=>d[i]);
var qn=Object.defineProperty;var Jn=(t,e,s)=>e in t?qn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var we=(t,e,s)=>Jn(t,typeof e!="symbol"?e+"":e,s);import{f as eo,l as to,d as _r,a as j,t as Q,n as wr,g as C,i as so}from"./CzvQHsIM.js";import{i as ao}from"./CSlWMsbo.js";import{R as Ae,T as ro,Q as no,i as r,w as oo,W as io,X as rr,Y as nr,Z as Qs,a1 as yt,a9 as lo,_ as Ar,$ as kr,a0 as co,ad as Sr,O as fo,z as uo,I as or,ar as Zs,K as ir,as as po,at as ho,au as go,ac as vo,av as mo,aw as bo,ax as xo,ay as yo,a3 as _o,az as wo,aA as Ao,N as ko,aB as So,aC as Eo,g as To,n as Lo,p as fa,f as Ie,ai as P,a as ua,y,c as b,s as d,r as x,t as ie,k as Ue,ah as Er,aD as Pe,aE as $o,aF as na}from"./D1rxTRw3.js";import{_ as lr,i as le,p as be}from"./DN2ixH3E.js";import{s as z,a as Ro}from"./CSYyqGjZ.js";import{p as oa,b as cr}from"./Dk6Goypl.js";import{b as Se}from"./OHysu_xg.js";import{e as Ne,E as B,a as Po,C as pa,Q as Mt,V as Wt,N as qs,D as pe,H as Oo,p as Ge,ab as lt,ac as He,ad as Io,w as ze,ae as wt,af as Tr,ag as ct,a9 as Oe,ah as jt,a1 as Lr,ai as Co,aj as Js,aa as Bo,ak as Fo,y as Ct}from"./SpTHHzAp.js";import{A as Mo,B as dr,G as Wo,T as $r,a as zo,b as ea}from"./BUP9hRfY.js";function zt(t,e){return e}function No(t,e,s,a){for(var n=[],o=e.length,i=0;i<o;i++)go(e[i].e,n,!0);var l=o>0&&n.length===0&&s!==null;if(l){var p=s.parentNode;vo(p),p.append(s),a.clear(),We(t,e[0].prev,e[o-1].next)}mo(n,()=>{for(var g=0;g<o;g++){var f=e[g];l||(a.delete(f.k),We(t,f.prev,f.next)),bo(f.e,!l)}})}function Nt(t,e,s,a,n,o=null){var i=t,l={flags:e,items:new Map,first:null};Ae&&ro();var p=null,g=!1,f=oo(()=>{var m=s();return fo(m)?m:m==null?[]:Sr(m)});no(()=>{var m=r(f),v=m.length;if(g&&v===0)return;g=v===0;let S=!1;if(Ae){var L=i.data===io;L!==(v===0)&&(i=rr(),nr(i),Qs(!1),S=!0)}if(Ae){for(var te=null,H,$=0;$<v;$++){if(yt.nodeType===8&&yt.data===lo){i=yt,S=!0,Qs(!1);break}var O=m[$],X=a(O,$);H=Rr(yt,l,te,null,O,X,$,n,e,s),l.items.set(X,H),te=H}v>0&&nr(rr())}Ae||jo(m,l,i,n,e,a,s),o!==null&&(v===0?p?Ar(p):p=kr(()=>o(i)):p!==null&&co(p,()=>{p=null})),S&&Qs(!0),r(f)}),Ae&&(i=yt)}function jo(t,e,s,a,n,o,i){var l=t.length,p=e.items,g=e.first,f=g,m,v=null,S=[],L=[],te,H,$,O;for(O=0;O<l;O+=1){if(te=t[O],H=o(te,O),$=p.get(H),$===void 0){var X=f?f.e.nodes_start:s;v=Rr(X,e,v,v===null?e.first:v.next,te,H,O,a,n,i),p.set(H,v),S=[],L=[],f=v.next;continue}if(Do($,te,O),($.e.f&Zs)!==0&&Ar($.e),$!==f){if(m!==void 0&&m.has($)){if(S.length<L.length){var re=L[0],ce;v=re.prev;var Ee=S[0],de=S[S.length-1];for(ce=0;ce<S.length;ce+=1)fr(S[ce],re,s);for(ce=0;ce<L.length;ce+=1)m.delete(L[ce]);We(e,Ee.prev,de.next),We(e,v,Ee),We(e,de,re),f=re,v=de,O-=1,S=[],L=[]}else m.delete($),fr($,f,s),We(e,$.prev,$.next),We(e,$,v===null?e.first:v.next),We(e,v,$),v=$;continue}for(S=[],L=[];f!==null&&f.k!==H;)(f.e.f&Zs)===0&&(m??(m=new Set)).add(f),L.push(f),f=f.next;if(f===null)continue;$=f}S.push($),v=$,f=$.next}if(f!==null||m!==void 0){for(var ke=m===void 0?[]:Sr(m);f!==null;)(f.e.f&Zs)===0&&ke.push(f),f=f.next;var fe=ke.length;if(fe>0){var se=null;No(e,ke,se,p)}}ir.first=e.first&&e.first.e,ir.last=v&&v.e}function Do(t,e,s,a){ho(t.v,e),t.i=s}function Rr(t,e,s,a,n,o,i,l,p,g){var f=(p&xo)!==0,m=(p&yo)===0,v=f?m?uo(n):or(n):n,S=(p&po)===0?i:or(i),L={i:S,v,k:o,a:null,e:null,prev:s,next:a};try{return L.e=kr(()=>l(t,v,S,g),Ae),L.e.prev=s&&s.e,L.e.next=a&&a.e,s===null?e.first=L:(s.next=L,s.e.next=L.e),a!==null&&(a.prev=L,a.e.prev=L.e),L}finally{}}function fr(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,n=e?e.e.nodes_start:s,o=t.e.nodes_start;o!==a;){var i=_o(o);n.before(o),o=i}}function We(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}const ur=[...` 	
\r\f \v\uFEFF`];function Uo(t,e,s){var a=t==null?"":""+t;if(e&&(a=a?a+" "+e:e),s){for(var n in s)if(s[n])a=a?a+" "+n:n;else if(a.length)for(var o=n.length,i=0;(i=a.indexOf(n,i))>=0;){var l=i+o;(i===0||ur.includes(a[i-1]))&&(l===a.length||ur.includes(a[l]))?a=(i===0?"":a.substring(0,i))+a.substring(l+1):i=l}}return a===""?null:a}function ia(t,e,s,a,n,o){var i=t.__className;if(Ae||i!==s){var l=Uo(s,a,o);(!Ae||l!==t.getAttribute("class"))&&(l==null?t.removeAttribute("class"):e?t.className=l:t.setAttribute("class",l)),t.__className=s}else if(o)for(var p in o){var g=!!o[p];(n==null||g!==!!n[p])&&t.classList.toggle(p,g)}return o}function Go(t){if(Ae){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;k(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var n=t.checked;k(t,"checked",null),t.checked=n}}};t.__on_r=s,wo(s),eo()}}function k(t,e,s,a){var n=t.__attributes??(t.__attributes={});Ae&&(n[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||n[e]!==(n[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[Ao]=s),s==null?t.removeAttribute(e):typeof s!="string"&&Ho(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var pr=new Map;function Ho(t){var e=pr.get(t.nodeName);if(e)return e;pr.set(t.nodeName,e=[]);for(var s,a=t,n=Element.prototype;n!==a;){s=So(a);for(var o in s)s[o].set&&e.push(o);a=ko(a)}return e}function Vo(t,e,s=e){var a=Eo();to(t,"input",n=>{var o=n?t.defaultValue:t.value;if(o=ta(t)?sa(o):o,s(o),a&&o!==(o=e())){var i=t.selectionStart,l=t.selectionEnd;t.value=o??"",l!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(l,t.value.length))}}),(Ae&&t.defaultValue!==t.value||To(e)==null&&t.value)&&s(ta(t)?sa(t.value):t.value),Lo(()=>{var n=e();ta(t)&&n===sa(t.value)||t.type==="date"&&!n&&!t.value||n!==t.value&&(t.value=n??"")})}function ta(t){var e=t.type;return e==="number"||e==="range"}function sa(t){return t===""?null:+t}function Yo(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const la=[];Ne.handleByNamedList(B.Environment,la);async function Xo(t){if(!t)for(let e=0;e<la.length;e++){const s=la[e];if(s.value.test()){await s.value.load();return}}}let _t;function Ko(){if(typeof _t=="boolean")return _t;try{_t=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{_t=!1}return _t}var Pr=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(Pr||{});class Qo{constructor(e){this.items=[],this._name=e}emit(e,s,a,n,o,i,l,p){const{name:g,items:f}=this;for(let m=0,v=f.length;m<v;m++)f[m][g](e,s,a,n,o,i,l,p);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Zo=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Or=class Ir extends Po{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...Zo,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Xo(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...Ir.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof pa&&(a={container:a},s&&(Mt(Wt,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const n=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=n?a.clearColor:qs.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const n=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==n&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Pr.ALL);const{clear:a,clearColor:n,target:o}=e;qs.shared.setValue(n??this.background.colorRgba),s.renderTarget.clear(o,a,qs.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new Qo(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const n in this.runners)this.runners[n].add(a);return this}_addPipes(e,s){const a=s.reduce((n,o)=>(n[o.name]=o.value,n),{});e.forEach(n=>{const o=n.value,i=n.name,l=a[i];this.renderPipes[i]=new o(this,l?new l:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Ko())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Or.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Cr=Or,Bt;function qo(t){return Bt!==void 0||(Bt=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??Cr.defaultOptions.failIfMajorPerformanceCaveat};try{if(!pe.get().getWebGLRenderingContext())return!1;let n=pe.get().createCanvas().getContext("webgl",e);const o=!!((s=n==null?void 0:n.getContextAttributes())!=null&&s.stencil);if(n){const i=n.getExtension("WEBGL_lose_context");i&&i.loseContext()}return n=null,o}catch{return!1}})()),Bt}let Ft;async function Jo(t={}){return Ft!==void 0||(Ft=await(async()=>{const e=pe.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),Ft}const hr=["webgl","webgpu","canvas"];async function ei(t){let e=[];t.preference?(e.push(t.preference),hr.forEach(o=>{o!==t.preference&&e.push(o)})):e=hr.slice();let s,a={};for(let o=0;o<e.length;o++){const i=e[o];if(i==="webgpu"&&await Jo()){const{WebGPURenderer:l}=await lr(async()=>{const{WebGPURenderer:p}=await import("./CYyLKxkn.js");return{WebGPURenderer:p}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=l,a={...t,...t.webgpu};break}else if(i==="webgl"&&qo(t.failIfMajorPerformanceCaveat??Cr.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:l}=await lr(async()=>{const{WebGLRenderer:p}=await import("./CakeCqhA.js");return{WebGLRenderer:p}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=l,a={...t,...t.webgl};break}else if(i==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const n=new s;return await n.init(a),n}const Br="8.8.1";class Fr{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Br)}static destroy(){}}Fr.extension=B.Application;class ti{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Br)}destroy(){this._renderer=null}}ti.extension={type:[B.WebGLSystem,B.WebGPUSystem],name:"initHook",priority:-10};const Mr=class ca{constructor(...e){this.stage=new pa,e[0]!==void 0&&Mt(Wt,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await ei(e),ca._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Mt(Wt,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=ca._plugins.slice(0);a.reverse(),a.forEach(n=>{n.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Mr._plugins=[];let Wr=Mr;Ne.handleByList(B.Application,Wr._plugins);Ne.add(Fr);class zr extends Mo{constructor(e,s){super();const{textures:a,data:n}=e;Object.keys(n.pages).forEach(o=>{const i=n.pages[parseInt(o,10)],l=a[i.id];this.pages.push({texture:l})}),Object.keys(n.chars).forEach(o=>{const i=n.chars[o],{frame:l,source:p}=a[i.page],g=new Oo(i.x+l.x,i.y+l.y,i.width,i.height),f=new Ge({source:p,frame:g});this.chars[o]={id:o.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:f}}),this.baseRenderedFontSize=n.fontSize,this.baseMeasurementFontSize=n.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:n.fontSize},this.baseLineOffset=n.baseLineOffset,this.lineHeight=n.lineHeight,this.fontFamily=n.fontFamily,this.distanceField=n.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){dr.install(e)}static uninstall(e){dr.uninstall(e)}}const aa={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const m in e){const v=e[m].match(/^[a-z]+/gm)[0],S=e[m].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),L={};for(const te in S){const H=S[te].split("="),$=H[0],O=H[1].replace(/"/gm,""),X=parseFloat(O),re=isNaN(X)?O:X;L[$]=re}s[v].push(L)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[n]=s.info,[o]=s.common,[i]=s.distanceField??[];i&&(a.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),a.fontSize=parseInt(n.size,10),a.fontFamily=n.face,a.lineHeight=parseInt(o.lineHeight,10);const l=s.page;for(let m=0;m<l.length;m++)a.pages.push({id:parseInt(l[m].id,10)||0,file:l[m].file});const p={};a.baseLineOffset=a.lineHeight-parseInt(o.base,10);const g=s.char;for(let m=0;m<g.length;m++){const v=g[m],S=parseInt(v.id,10);let L=v.letter??v.char??String.fromCharCode(S);L==="space"&&(L=" "),p[S]=L,a.chars[L]={id:S,page:parseInt(v.page,10)||0,x:parseInt(v.x,10),y:parseInt(v.y,10),width:parseInt(v.width,10),height:parseInt(v.height,10),xOffset:parseInt(v.xoffset,10),yOffset:parseInt(v.yoffset,10),xAdvance:parseInt(v.xadvance,10),kerning:{}}}const f=s.kerning||[];for(let m=0;m<f.length;m++){const v=parseInt(f[m].first,10),S=parseInt(f[m].second,10),L=parseInt(f[m].amount,10);a.chars[p[S]].kerning[p[v]]=L}return a}},gr={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],n=t.getElementsByTagName("distanceField")[0];n&&(e.distanceField={type:n.getAttribute("fieldType"),range:parseInt(n.getAttribute("distanceRange"),10)});const o=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),l=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let g=0;g<o.length;g++)e.pages.push({id:parseInt(o[g].getAttribute("id"),10)||0,file:o[g].getAttribute("file")});const p={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let g=0;g<i.length;g++){const f=i[g],m=parseInt(f.getAttribute("id"),10);let v=f.getAttribute("letter")??f.getAttribute("char")??String.fromCharCode(m);v==="space"&&(v=" "),p[m]=v,e.chars[v]={id:m,page:parseInt(f.getAttribute("page"),10)||0,x:parseInt(f.getAttribute("x"),10),y:parseInt(f.getAttribute("y"),10),width:parseInt(f.getAttribute("width"),10),height:parseInt(f.getAttribute("height"),10),xOffset:parseInt(f.getAttribute("xoffset"),10),yOffset:parseInt(f.getAttribute("yoffset"),10),xAdvance:parseInt(f.getAttribute("xadvance"),10),kerning:{}}}for(let g=0;g<l.length;g++){const f=parseInt(l[g].getAttribute("first"),10),m=parseInt(l[g].getAttribute("second"),10),v=parseInt(l[g].getAttribute("amount"),10);e.chars[p[m]].kerning[p[f]]=v}return e}},vr={test(t){return typeof t=="string"&&t.includes("<font>")?gr.test(pe.get().parseXML(t)):!1},parse(t){return gr.parse(pe.get().parseXML(t))}},si=[".xml",".fnt"],ai={extension:{type:B.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof zr,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},ri={extension:{type:B.LoadParser,priority:lt.Normal},name:"loadBitmapFont",test(t){return si.includes(He.extname(t).toLowerCase())},async testParse(t){return aa.test(t)||vr.test(t)},async parse(t,e,s){const a=aa.test(t)?aa.parse(t):vr.parse(t),{src:n}=e,{pages:o}=a,i=[],l=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let m=0;m<o.length;++m){const v=o[m].file;let S=He.join(He.dirname(n),v);S=Io(S,n),i.push({src:S,data:l})}const p=await s.load(i),g=i.map(m=>p[m.src]);return new zr({data:a,textures:g},n)},async load(t,e){return await(await pe.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class ni{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const oi={extension:{type:B.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Ge),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((n,o)=>{s[a+(o===0?"":o+1)]=n})}),s}};async function Nr(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const ii={extension:{type:B.DetectionParser,priority:1},test:async()=>Nr("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},mr=["png","jpg","jpeg"],li={extension:{type:B.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...mr],remove:async t=>t.filter(e=>!mr.includes(e))},ci="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function ha(t){return ci?!1:document.createElement("video").canPlayType(t)!==""}const di={extension:{type:B.DetectionParser,priority:0},test:async()=>ha("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},fi={extension:{type:B.DetectionParser,priority:0},test:async()=>ha("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},ui={extension:{type:B.DetectionParser,priority:0},test:async()=>ha("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},pi={extension:{type:B.DetectionParser,priority:0},test:async()=>Nr("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class hi{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var i,l;let n=null,o=null;if(s.loadParser&&(o=this._parserHash[s.loadParser],o||ze(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!o){for(let p=0;p<this.parsers.length;p++){const g=this.parsers[p];if(g.load&&((i=g.test)!=null&&i.call(g,e,s,this))){o=g;break}}if(!o)return ze(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}n=await o.load(e,s,this),a.parser=o;for(let p=0;p<this.parsers.length;p++){const g=this.parsers[p];g.parse&&g.parse&&await((l=g.testParse)==null?void 0:l.call(g,n,s,this))&&(n=await g.parse(n,s,this)||n,a.parser=g)}return n})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const n={},o=Tr(e),i=wt(e,g=>({alias:[g],src:g,data:{}})),l=i.length,p=i.map(async g=>{const f=He.toAbsolute(g.src);if(!n[g.src])try{this.promiseCache[f]||(this.promiseCache[f]=this._getLoadPromiseAndParser(f,g)),n[g.src]=await this.promiseCache[f].promise,s&&s(++a/l)}catch(m){throw delete this.promiseCache[f],delete n[g.src],new Error(`[Loader.load] Failed to load ${f}.
${m}`)}});return await Promise.all(p),o?n[i[0].src]:n}async unload(e){const a=wt(e,n=>({alias:[n],src:n})).map(async n=>{var l,p;const o=He.toAbsolute(n.src),i=this.promiseCache[o];if(i){const g=await i.promise;delete this.promiseCache[o],await((p=(l=i.parser)==null?void 0:l.unload)==null?void 0:p.call(l,g,n,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&ze(`[Assets] loadParser name conflict "${s.name}"`):ze("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function dt(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const gi=".json",vi="application/json",mi={extension:{type:B.LoadParser,priority:lt.Low},name:"loadJson",test(t){return dt(t,vi)||ct(t,gi)},async load(t){return await(await pe.get().fetch(t)).json()}},bi=".txt",xi="text/plain",yi={name:"loadTxt",extension:{type:B.LoadParser,priority:lt.Low,name:"loadTxt"},test(t){return dt(t,xi)||ct(t,bi)},async load(t){return await(await pe.get().fetch(t)).text()}},_i=["normal","bold","100","200","300","400","500","600","700","800","900"],wi=[".ttf",".otf",".woff",".woff2"],Ai=["font/ttf","font/otf","font/woff","font/woff2"],ki=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Si(t){const e=He.extname(t),n=He.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(l=>l.charAt(0).toUpperCase()+l.slice(1));let o=n.length>0;for(const l of n)if(!l.match(ki)){o=!1;break}let i=n.join(" ");return o||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const Ei=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function Ti(t){return Ei.test(t)?t:encodeURI(t)}const Li={extension:{type:B.LoadParser,priority:lt.Low},name:"loadWebFont",test(t){return dt(t,Ai)||ct(t,wi)},async load(t,e){var a,n,o;const s=pe.get().getFontFaceSet();if(s){const i=[],l=((a=e.data)==null?void 0:a.family)??Si(t),p=((o=(n=e.data)==null?void 0:n.weights)==null?void 0:o.filter(f=>_i.includes(f)))??["normal"],g=e.data??{};for(let f=0;f<p.length;f++){const m=p[f],v=new FontFace(l,`url(${Ti(t)})`,{...g,weight:m});await v.load(),s.add(v),i.push(v)}return Oe.set(`${l}-and-url`,{url:t,fontFaces:i}),i.length===1?i[0]:i}return ze("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{Oe.remove(`${e.family}-and-url`),pe.get().getFontFaceSet().delete(e)})}};function ga(t,e=1){var a;const s=(a=jt.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function va(t,e,s){t.label=s,t._sourceOrigin=s;const a=new Ge({source:t,label:s}),n=()=>{delete e.promiseCache[s],Oe.has(s)&&Oe.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(ze("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),n())}),a.once("destroy",()=>{t.destroyed||(ze("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),n())}),a}const $i=".svg",Ri="image/svg+xml",Pi={extension:{type:B.LoadParser,priority:lt.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return dt(t,Ri)||ct(t,$i)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?Ii(t):Oi(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function Oi(t,e,s,a){var H,$,O;const o=await(await pe.get().fetch(t)).blob(),i=URL.createObjectURL(o),l=new Image;l.src=i,l.crossOrigin=a,await l.decode(),URL.revokeObjectURL(i);const p=document.createElement("canvas"),g=p.getContext("2d"),f=((H=e.data)==null?void 0:H.resolution)||ga(t),m=(($=e.data)==null?void 0:$.width)??l.width,v=((O=e.data)==null?void 0:O.height)??l.height;p.width=m*f,p.height=v*f,g.drawImage(l,0,0,m*f,v*f);const{parseAsGraphicsContext:S,...L}=e.data??{},te=new Lr({resource:p,alphaMode:"premultiply-alpha-on-upload",resolution:f,...L});return va(te,s,t)}async function Ii(t){const s=await(await pe.get().fetch(t)).text(),a=new Wo;return a.svg(s),a}const Ci=`(function () {
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
`;let ot=null,da=class{constructor(){ot||(ot=URL.createObjectURL(new Blob([Ci],{type:"application/javascript"}))),this.worker=new Worker(ot)}};da.revokeObjectURL=function(){ot&&(URL.revokeObjectURL(ot),ot=null)};const Bi=`(function () {
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
`;let it=null;class jr{constructor(){it||(it=URL.createObjectURL(new Blob([Bi],{type:"application/javascript"}))),this.worker=new Worker(it)}}jr.revokeObjectURL=function(){it&&(URL.revokeObjectURL(it),it=null)};let br=0,ra;class Fi{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new da;s.addEventListener("message",a=>{s.terminate(),da.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){ra===void 0&&(ra=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<ra&&(this._createdWorkers++,e=new jr().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((n,o)=>{this._queue.push({id:e,arguments:s,resolve:n,reject:o})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[br]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:br++,id:a})}}const xr=new Fi,Mi=[".jpeg",".jpg",".png",".webp",".avif"],Wi=["image/jpeg","image/png","image/webp","image/avif"];async function zi(t,e){var n;const s=await pe.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((n=e==null?void 0:e.data)==null?void 0:n.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const Dr={name:"loadTextures",extension:{type:B.LoadParser,priority:lt.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return dt(t,Wi)||ct(t,Mi)},async load(t,e,s){var o;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await xr.isImageBitmapSupported()?a=await xr.loadImageBitmap(t,e):a=await zi(t,e):a=await new Promise((i,l)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?i(a):(a.onload=()=>{i(a)},a.onerror=l)});const n=new Lr({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((o=e.data)==null?void 0:o.resolution)||ga(t),...e.data});return va(n,s,t)},unload(t){t.destroy(!0)}},Ur=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Ni=Ur.map(t=>`video/${t.substring(1)}`);function ji(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=Ui(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function Di(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",n),t.load();function a(){o(),e()}function n(i){o(),s(i)}function o(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",n)}})}function Ui(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const Gi={name:"loadVideo",extension:{type:B.LoadParser,name:"loadVideo"},test(t){const e=dt(t,Ni),s=ct(t,Ur);return e||s},async load(t,e,s){var p,g;const a={...Js.defaultOptions,resolution:((p=e.data)==null?void 0:p.resolution)||ga(t),alphaMode:((g=e.data)==null?void 0:g.alphaMode)||await Co(),...e.data},n=document.createElement("video"),o={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(o).forEach(f=>{const m=o[f];m!==void 0&&n.setAttribute(f,m)}),a.muted===!0&&(n.muted=!0),ji(n,t,a.crossorigin);const i=document.createElement("source");let l;if(t.startsWith("data:"))l=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const f=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();l=Js.MIME_TYPES[f]||`video/${f}`}return i.src=t,l&&(i.type=l),new Promise(f=>{const m=async()=>{const v=new Js({...a,resource:n});n.removeEventListener("canplay",m),e.data.preload&&await Di(n),f(va(v,s,t))};n.addEventListener("canplay",m),n.appendChild(i)})},unload(t){t.destroy(!0)}},Gr={extension:{type:B.ResolveParser,name:"resolveTexture"},test:Dr.test,parse:t=>{var e;return{resolution:parseFloat(((e=jt.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},Hi={extension:{type:B.ResolveParser,priority:-2,name:"resolveJson"},test:t=>jt.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:Gr.parse};class Vi{constructor(){this._detections=[],this._initialized=!1,this.resolver=new jt,this.loader=new hi,this.cache=Oe,this._backgroundLoader=new ni(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var o,i;if(this._initialized){ze("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let l=e.manifest;typeof l=="string"&&(l=await this.load(l)),this.resolver.addManifest(l)}const s=((o=e.texturePreference)==null?void 0:o.resolution)??1,a=typeof s=="number"?[s]:s,n=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:n,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=Tr(e),n=wt(e).map(l=>{if(typeof l!="string"){const p=this.resolver.getAlias(l);return p.some(g=>!this.resolver.hasKey(g))&&this.add(l),Array.isArray(p)?p[0]:p}return this.resolver.hasKey(l)||this.add({alias:l,src:l}),l}),o=this.resolver.resolve(n),i=await this._mapLoadToResolve(o,s);return a?i[n[0]]:i}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const n=this.resolver.resolveBundle(e),o={},i=Object.keys(n);let l=0,p=0;const g=()=>{s==null||s(++l/p)},f=i.map(m=>{const v=n[m];return p+=Object.keys(v).length,this._mapLoadToResolve(v,g).then(S=>{o[m]=S})});return await Promise.all(f),a?o[e[0]]:o}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Oe.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=Oe.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const n=await this.loader.load(a,s);this._backgroundLoader.active=!0;const o={};return a.forEach(i=>{const l=n[i.src],p=[i.src];i.alias&&p.push(...i.alias),p.forEach(g=>{o[g]=l}),Oe.set(p,l)}),o}async unload(e){this._initialized||await this.init();const s=wt(e).map(n=>typeof n!="string"?n.src:n),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=wt(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(n=>this._unloadFromResolved(s[n]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{Oe.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,n)=>s.indexOf(a)===n),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const nt=new Vi;Ne.handleByList(B.LoadParser,nt.loader.parsers).handleByList(B.ResolveParser,nt.resolver.parsers).handleByList(B.CacheParser,nt.cache.parsers).handleByList(B.DetectionParser,nt.detections);Ne.add(oi,li,ii,pi,di,fi,ui,mi,yi,Li,Pi,Dr,Gi,ri,ai,Gr,Hi);const yr={loader:B.LoadParser,resolver:B.ResolveParser,cache:B.CacheParser,detection:B.DetectionParser};Ne.handle(B.Asset,t=>{const e=t.ref;Object.entries(yr).filter(([s])=>!!e[s]).forEach(([s,a])=>Ne.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(yr).filter(s=>!!e[s]).forEach(s=>Ne.remove(e[s]))});class Yi extends Bo{constructor(e,s){const{text:a,resolution:n,style:o,anchor:i,width:l,height:p,roundPixels:g,...f}=e;super({...f}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=o,this.resolution=n??null,this.allowChildren=!1,this._anchor=new Fo({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=g??!1,l!==void 0&&(this.width=l),p!==void 0&&(this.height=p)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,n=-s*this.anchor.x;let o=0;return e.x>=n&&e.x<=n+s&&(o=-a*this.anchor.y,e.y>=o&&e.y<=o+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function Xi(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(Mt(Wt,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class Ki extends Yi{constructor(...e){const s=Xi(e,"Text");super(s,$r),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=zo.measureText(this._text,this._style),{width:n,height:o}=a;e.minX=-s._x*n,e.maxX=e.minX+n,e.minY=-s._y*o,e.maxY=e.minY+o}}const Qi="1.1.8",Zi={version:Qi};var qi=Q('<div class="win-label svelte-27a1cu">BIG WIN!</div> <div class="win-amount-display svelte-27a1cu"> </div>',1),Ji=wr('<use href="#sparkle" class="sparkle svelte-27a1cu"></use>'),el=wr('<use href="#vinyl"></use>'),tl=Q('<div><!> <svg class="vinyl-canvas svelte-27a1cu" viewBox="0 0 1024 800" xmlns="http://www.w3.org/2000/svg"><defs class="svelte-27a1cu"><symbol id="vinyl" viewBox="-200 -200 400 400" class="svelte-27a1cu"><circle cx="0" cy="0" r="180" fill="#0b0b0b" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="150" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.3" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="120" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.25" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="90" fill="none" stroke="#1a1a1a" stroke-width="1.5" opacity="0.2" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="55" fill="var(--label-color)" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="6" fill="#ffffff" class="svelte-27a1cu"></circle><ellipse cx="-15" cy="-15" rx="20" ry="15" fill="#ffffff" opacity="0.3" transform="rotate(-30)" class="svelte-27a1cu"></ellipse></symbol><symbol id="sparkle" viewBox="-12 -12 24 24" class="svelte-27a1cu"><polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ffd966" class="svelte-27a1cu"></polygon><circle cx="0" cy="0" r="2" fill="#ffffff" class="svelte-27a1cu"></circle></symbol><symbol id="confetti" viewBox="-3 -3 6 6" class="svelte-27a1cu"><circle cx="0" cy="0" r="2" fill="var(--confetti-color)" class="svelte-27a1cu"></circle></symbol></defs><!><!></svg></div>');function sl(t,e){fa(e,!0);let s=oa(e,"winLevel",3,"small"),a=oa(e,"winAmount",3,0),n=P(!1),o=P(!1);const i={small:{vinyls:5,sparkles:8,maxRadius:100},medium:{vinyls:12,sparkles:16,maxRadius:140},jackpot:{vinyls:24,sparkles:30,maxRadius:180}},l=Ue(()=>i[s()]),p=["#f04e37","#ffd966","#ff8533","#4ecdc4","#ff6b9d"];function g(O){const X=[],Ee=r(l).maxRadius;for(let de=0;de<O;de++){const ke=Math.PI*2*de/O+Math.random()*.4,fe=Math.random()*Ee*.7+Ee*.2;X.push({x:512+Math.cos(ke)*fe,y:400+Math.sin(ke)*fe,rotation:Math.random()*30-15,scale:.3+Math.random()*.25,delay:de*.05,color:p[de%p.length]})}return X}function f(O){const X=[];for(let re=0;re<O;re++)X.push({x:100+Math.random()*824,y:50+Math.random()*700,delay:Math.random()*.8,duration:.6+Math.random()*.4,rotation:Math.random()*360});return X}const m=Ue(()=>g(r(l).vinyls)),v=Ue(()=>f(r(l).sparkles));function S(){y(n,!0),y(o,!0),setTimeout(()=>{y(o,!1),setTimeout(()=>{var O;y(n,!1),(O=e.onComplete)==null||O.call(e)},500)},s()==="jackpot"?4e3:s()==="medium"?3e3:2500)}function L(){y(o,!1),setTimeout(()=>{y(n,!1)},500)}var te=_r(),H=Ie(te);{var $=O=>{var X=tl();let re;var ce=b(X);{var Ee=se=>{var ne=qi(),xe=d(Ie(ne),2),Ce=b(xe,!0);x(xe),ie(At=>z(Ce,At),[()=>a().toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),j(se,ne)};le(ce,se=>{a()>0&&se(Ee)})}var de=d(ce,2),ke=d(b(de));Nt(ke,17,()=>r(v),zt,(se,ne)=>{var xe=Ji();ie(()=>k(xe,"style",`
            --sx: ${r(ne).x??""}px;
            --sy: ${r(ne).y??""}px;
            --duration: ${r(ne).duration??""}s;
            --sparkle-delay: ${r(ne).delay??""}s;
          `)),j(se,xe)});var fe=d(ke);Nt(fe,17,()=>r(m),zt,(se,ne)=>{var xe=el();let Ce;ie(()=>{Ce=ia(xe,0,"vinyl-group svelte-27a1cu",null,Ce,{floating:r(o)}),k(xe,"style",`
            --tx: ${r(ne).x??""}px;
            --ty: ${r(ne).y??""}px;
            --scale: ${r(ne).scale??""};
            --rotation: ${r(ne).rotation??""}deg;
            --delay: ${r(ne).delay??""}s;
            --label-color: ${r(ne).color??""};
          `)}),j(se,xe)}),x(de),x(X),ie(()=>re=ia(X,1,"vinyl-win-container svelte-27a1cu",null,re,{visible:r(o),hiding:!r(o)})),j(O,X)};le(H,O=>{r(n)&&O($)})}return j(t,te),ua({show:S,hide:L})}var al=so('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-170ah2r"><\/script><!---->',1),rl=Q('<p style="color: red;" class="svelte-170ah2r"><strong class="svelte-170ah2r">Error:</strong> </p>'),nl=Q('<div class="svelte-170ah2r"> </div>'),ol=Q('<details class="svelte-170ah2r"><summary class="svelte-170ah2r"> </summary> <!></details>'),il=Q(`<div style="
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
  " class="svelte-170ah2r"><h3 class="svelte-170ah2r">🎰 Oma-peli Debug</h3> <p class="svelte-170ah2r"><strong class="svelte-170ah2r">Status:</strong> </p> <!> <p class="svelte-170ah2r"><strong class="svelte-170ah2r">Base:</strong> </p> <p class="svelte-170ah2r"><strong class="svelte-170ah2r">BG URL:</strong> </p> <p class="svelte-170ah2r"><strong class="svelte-170ah2r">Sample:</strong> </p> <!></div>`),ll=Q('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-170ah2r"> </div>'),cl=Q('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-170ah2r"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-170ah2r"> </span></div>'),dl=Q(`<div style="
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
  " class="svelte-170ah2r"><h2 style="margin: 0 0 10px 0; font-size: 2em;" class="svelte-170ah2r">🎉 VOITTO! 🎉</h2> <div style="font-size: 1.5em; font-weight: bold; margin: 10px 0;" class="svelte-170ah2r"> </div> <!> <!> <button style="
        margin-top: 15px;
        padding: 8px 16px;
        background: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
      " class="svelte-170ah2r">Jatka pelaamista</button></div>`),fl=Q(`<div style="
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
  " class="svelte-170ah2r"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-170ah2r">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-170ah2r">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-170ah2r"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-170ah2r"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-170ah2r"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-170ah2r">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-170ah2r">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-170ah2r">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-170ah2r">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-170ah2r"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-170ah2r">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-170ah2r">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-170ah2r">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-170ah2r">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-170ah2r">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-170ah2r"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-170ah2r">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-170ah2r">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-170ah2r">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-170ah2r">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-170ah2r"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-170ah2r">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-170ah2r">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-170ah2r">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-170ah2r">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-170ah2r"> <span style="color: #ffd700;" class="svelte-170ah2r">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-170ah2r">Sulje</button></div>`),ul=Q('<div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #ff00ff; font-size: 16px; animation: pulse 1s infinite;" class="svelte-170ah2r"><span class="svelte-170ah2r">🎰 FREE SPINS:</span> <span class="svelte-170ah2r"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-top: 1px solid #555; padding-top: 8px;" class="svelte-170ah2r"><span style="color: #fff; font-size: 14px;" class="svelte-170ah2r">Total Won:</span> <span style="color: #00ff00; font-size: 14px;" class="svelte-170ah2r"> </span></div>',1),pl=Q(`<div style="
      background: rgba(255, 100, 100, 0.9);
      color: white;
      padding: 15px 20px;
      border-radius: 10px;
      border: 2px solid #ff0000;
      box-shadow: 0 4px 15px rgba(255, 0, 0, 0.5);
      text-align: center;
      animation: winPulse 1s infinite;
    " class="svelte-170ah2r"><div style="font-weight: bold; font-size: 16px; margin-bottom: 8px;" class="svelte-170ah2r">🔄 AUTOPLAY</div> <div style="font-size: 20px; font-family: 'Courier New', monospace; margin-bottom: 10px;" class="svelte-170ah2r"> </div> <button style="
          width: 100%;
          padding: 8px;
          background: #ffffff;
          color: #ff0000;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          font-size: 14px;
        " class="svelte-170ah2r">⏹ STOP</button></div>`),hl=Q(`<div style="
        position: absolute;
        bottom: 60px;
        right: 0;
        background: rgba(0, 0, 0, 0.95);
        padding: 15px;
        border-radius: 10px;
        border: 2px solid #0088ff;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
        min-width: 180px;
      " class="svelte-170ah2r"><div style="color: white; font-weight: bold; margin-bottom: 10px; text-align: center;" class="svelte-170ah2r">Select Rounds:</div> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #44aa44;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-170ah2r">10 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #4488ff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-170ah2r">100 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #ff8844;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-170ah2r">1,000 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #ff4444;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-170ah2r">10,000 Rounds</button> <button style="
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            background: #aa00ff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          " class="svelte-170ah2r">100,000 Rounds</button> <button style="
            width: 100%;
            padding: 6px;
            background: rgba(255, 255, 255, 0.1);
            color: #aaa;
            border: 1px solid #555;
            border-radius: 5px;
            cursor: pointer;
            font-size: 12px;
          " class="svelte-170ah2r">Cancel</button></div>`),gl=Q(`<button style="
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
      " class="svelte-170ah2r">🔄 AUTOPLAY</button> <!>`,1),vl=Q(`<div style="
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
        " class="svelte-170ah2r"><div style="
            color: #ffd700;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            border-bottom: 1px solid #444;
            padding-bottom: 5px;
          " class="svelte-170ah2r">SPIN SPEED</div> <button class="svelte-170ah2r">🐌 SLOW</button> <button class="svelte-170ah2r">⚡ MEDIUM</button> <button class="svelte-170ah2r">🚀 FAST</button></div>`),ml=Q(`<!> <!> <!> <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #000;
" class="svelte-170ah2r"><div class="svelte-170ah2r"><div class="svelte-170ah2r"></div> <div class="svelte-170ah2r"><!> <div style="display: flex; justify-content: space-between; margin-bottom: 8px;" class="svelte-170ah2r"><span style="color: #fff;" class="svelte-170ah2r">CREDITS:</span> <span style="color: #ffd700;" class="svelte-170ah2r"> </span></div> <div style="display: flex; justify-content: space-between; border-top: 1px solid #555; padding-top: 8px;" class="svelte-170ah2r"><span style="color: #fff;" class="svelte-170ah2r">BET:</span> <span style="color: #00ff00;" class="svelte-170ah2r"> </span></div></div> <div style="
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.85);
  padding: 15px;
  border-radius: 10px;
  border: 2px solid #00ff00;
  z-index: 1500;
" class="svelte-170ah2r"><div style="color: white; font-size: 14px; margin-bottom: 10px; text-align: center; font-weight: bold;" class="svelte-170ah2r">BET CONTROLS</div> <div style="display: flex; gap: 10px; align-items: center;" class="svelte-170ah2r"><button style="
        padding: 8px 15px;
        background: #ff4444;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: background 0.2s;
      " class="bet-btn-minus svelte-170ah2r">-</button> <div style="
      color: #00ff00;
      font-family: 'Courier New', monospace;
      font-size: 20px;
      font-weight: bold;
      min-width: 60px;
      text-align: center;
      background: rgba(0, 255, 0, 0.1);
      padding: 5px 10px;
      border-radius: 5px;
    " class="svelte-170ah2r"> </div> <button style="
        padding: 8px 15px;
        background: #44ff44;
        color: #000;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: background 0.2s;
      " class="bet-btn-plus svelte-170ah2r">+</button> <button style="
        padding: 8px 12px;
        background: #ffd700;
        color: #000;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        transition: background 0.2s;
      " class="bet-btn-max svelte-170ah2r">MAX</button></div></div> <button style="
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
  " class="svelte-170ah2r">💰 PAYTABLE</button> <div class="debug-panel svelte-170ah2r" style="
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
"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-170ah2r">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-170ah2r"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-170ah2r"><span style="color: #aaa;" class="svelte-170ah2r">Rounds:</span> <span style="color: #fff;" class="svelte-170ah2r"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-170ah2r"><span style="color: #aaa;" class="svelte-170ah2r">Wagered:</span> <span style="color: #ff6666;" class="svelte-170ah2r"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-170ah2r"><span style="color: #aaa;" class="svelte-170ah2r">Won:</span> <span style="color: #66ff66;" class="svelte-170ah2r"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 10px; 
    padding-top: 10px; 
    border-top: 1px solid #555;
    font-weight: bold;
    font-size: 18px;
  " class="svelte-170ah2r"><span style="color: #ffd700;" class="svelte-170ah2r">RTP:</span> <span class="svelte-170ah2r"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
  " class="svelte-170ah2r"><span style="color: #aaa;" class="svelte-170ah2r">Hit Freq:</span> <span class="svelte-170ah2r"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-size: 14px;
  " class="svelte-170ah2r"><span style="color: #aaa;" class="svelte-170ah2r">Free Spins Triggered:</span> <span style="color: #66ccff;" class="svelte-170ah2r"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 4px;
    font-size: 14px;
  " class="svelte-170ah2r"><span style="color: #aaa;" class="svelte-170ah2r">Free Spins Played:</span> <span style="color: #66ccff;" class="svelte-170ah2r"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #555;
    font-size: 14px;
  " class="svelte-170ah2r"><span style="color: #aaa;" class="svelte-170ah2r">Empty Slots:</span> <span style="color: #ff9900;" class="svelte-170ah2r"> </span></div> <button style="
      margin-top: 10px;
      width: 100%;
      padding: 5px;
      background: rgba(255, 100, 100, 0.3);
      color: #fff;
      border: 1px solid #ff6666;
      border-radius: 5px;
      cursor: pointer;
      font-size: 11px;
    " class="svelte-170ah2r">Reset Stats</button> <div style="
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  " class="svelte-170ah2r"><button class="svelte-170ah2r"> </button> <button class="svelte-170ah2r">Clear Win Log</button> <button class="svelte-170ah2r"> </button> <button class="svelte-170ah2r">🎰 Test Free Spins</button></div></div> <div class="debug-panel svelte-170ah2r" style="
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1500;
"><!></div> <button class="debug-panel svelte-170ah2r"> </button>  <div class="svelte-170ah2r"><img alt="Left End" class="svelte-170ah2r"> <div class="svelte-170ah2r"><div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-170ah2r"><div style="color: #00ff00; font-size: 12px; font-weight: bold;" class="svelte-170ah2r">BET</div> <div style="display: flex; gap: 5px; align-items: center;" class="svelte-170ah2r"><button title="Decrease Bet" class="svelte-170ah2r"></button> <div style="
          color: #fff;
          font-size: 18px;
          font-weight: bold;
          min-width: 80px;
          text-align: center;
          font-family: 'Courier New', monospace;
        " class="svelte-170ah2r"> </div> <button title="Increase Bet" class="svelte-170ah2r"></button></div></div> <img alt="Divider" class="svelte-170ah2r"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-170ah2r"><div style="color: #00ff00; font-size: 12px; font-weight: bold;" class="svelte-170ah2r">BALANCE</div> <div style="
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      " class="svelte-170ah2r"> </div></div> <img alt="Divider" class="svelte-170ah2r"> <div style="position: relative; display: flex; align-items: center; justify-content: center; flex-grow: 0.5;" class="svelte-170ah2r"><div><button title="SPIN" class="svelte-170ah2r"></button></div></div> <img alt="Divider" class="svelte-170ah2r"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-170ah2r"><button title="Autoplay" class="svelte-170ah2r"></button> <img alt="Status bar" style="width: 50px; height: auto;" class="svelte-170ah2r"></div> <img alt="Divider" class="svelte-170ah2r"> <div style="position: relative; display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-170ah2r"><button class="svelte-170ah2r"></button> <div style="
        color: #ffffff;
        font-size: 10px;
        font-weight: bold;
        text-transform: uppercase;
      " class="svelte-170ah2r"> </div> <!></div> <img alt="Divider" class="svelte-170ah2r"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-170ah2r"><button title="Fast Play" class="svelte-170ah2r"></button> <img alt="Status bar" style="width: 50px; height: auto;" class="svelte-170ah2r"></div> <img alt="Divider" class="svelte-170ah2r"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-170ah2r"><div style="color: #00ff00; font-size: 12px; font-weight: bold;" class="svelte-170ah2r">WIN</div> <div style="
        color: #ffd700;
        font-size: 20px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      " class="svelte-170ah2r"> </div></div> <img alt="Divider" class="svelte-170ah2r"> <button title="Menu" class="svelte-170ah2r"></button></div> <img alt="Right End" class="svelte-170ah2r"></div> <!></div></div>`,1);function bl(t,e){fa(e,!0);const s=Zi.version,a=13,n=1445,o=1e3,i=1.75,l=-30,p=-10,g=160,f=0,m=750,v=80,S=250,L=-230,te=-390,H=1,$=1.1,O=.5,X=40,re=0,ce=-40,Ee=1,de="height",fe=Math.round(100*i),se=Math.round(fe*(700/760)),xe=se+10,Ce=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],At=typeof window<"u"&&window.location.hostname.includes("github.io"),ae=At?"/web-sdk/oma-peli/symbols":`${Se}/symbols`,Z=At?"/web-sdk/oma-peli/controls":`${Se}/controls`,Dt={a:`${ae}/Blue_hotrod.jpg`,b:`${ae}/Blue_jacket.jpg`,c:`${ae}/Blue_rollers.jpg`,d:`${ae}/Blue_speakers.jpg`,e:`${ae}/Premium_blonde.jpg`,f:`${ae}/Premium_brunette.jpg`,g:`${ae}/Premium_rocker.jpg`,h:`${ae}/New_Wild.jpg`,i:`${ae}/Red_burger.jpg`,j:`${ae}/Red_fries.jpg`,k:`${ae}/Red_milkshake.jpg`,l:`${ae}/Scatter.jpg`,emptyslot:`${ae}/Emptyslot.jpg`},Ut=`${ae}/bg_base.jpg`,ma=`${ae}/ReelFrames.png`,ba=`${ae}/RockABillyReels_logo.png`,Hr={spin:`${Se}/sounds/spin.mp3`,stop:`${Se}/sounds/stop.mp3`,win:`${Se}/sounds/win.mp3`};let Te=P(!0),Gt={},V=null,he=null,Ht=null,Vt=null;const Vr=60/130,Yr=Math.round(Vr*60);let ye=P(!0),Xr=P(!1),kt=P(!1),Yt=P(945),Xt=null,K=P("medium"),Ve=P(!1);const xa=Math.floor(Math.random()*20)+1,St={background:`${Se}/music/rockabilly reels loop ${xa}.mp3`,freeSpins:`${Se}/music/rockabilly-loop_long.mp3`,drumHit:`${Se}/music/drum-hit.mp3`,winTheme:`${Se}/music/win-stinger.mp3`};function ya(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(ya,500);return}const c=window.Howl;try{V=new c({src:[St.background],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+xa+")"),y(Xr,!0)},onloaderror:(u,w)=>{console.warn("⚠️ Background music not found:",w)}}),he=new c({src:[St.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(u,w)=>console.warn("⚠️ Free spins music not found:",w)}),Ht=new c({src:[St.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Vt=new c({src:[St.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(u){console.error("Failed to initialize music system:",u)}}function _a(){const c=r(Y)?he:V;c&&r(ye)&&!c.playing()&&(c.play(),console.log("🎵 "+(r(Y)?"Free spins":"Background")+" music started"))}function Kr(){V&&V.playing()&&(V.fade(V.volume(),0,500),setTimeout(()=>V.stop(),500)),he&&he.playing()&&(he.fade(he.volume(),0,500),setTimeout(()=>he.stop(),500))}function Kt(){V&&V.playing()&&(V.fade(V.volume(),0,500),setTimeout(()=>V.stop(),500)),he&&he.playing()&&(he.fade(he.volume(),0,500),setTimeout(()=>he.stop(),500)),setTimeout(()=>{r(ye)&&_a()},600)}function Qr(){if(V&&V.playing()){const c=V.volume();V.fade(c,0,1e3),setTimeout(()=>{V.stop(),V.volume(.3)},1e3)}}let Qt=P(!1);function Zr(){y(Qt,!1),setTimeout(()=>{y(Qt,!0)},10)}let Ye=null;function qr(){y(ye,!r(ye)),r(ye)?_a():Kr()}function Jr(){Ht&&r(ye)&&r(Te)&&Ht.play()}function en(){Vt&&r(ye)&&r(Te)&&Vt.play()}let Et=null,Xe=null,ft=null,ut=null,pt=P("Initializing..."),Ke=P(""),_e=[],Le=P(1e3),q=P(10);const wa=1,Zt=100;let ge=P(!1),Qe=P(0),je=P(!1),tn=P(0),De=!1,$e=null,qt=!1,Ze=P(0),qe=P(0),ht=P(0),Jt=P(0),es=Ue(()=>r(qe)>0?(r(ht)/r(qe)*100).toFixed(2):"0.00"),ts=Ue(()=>r(Ze)>0?(r(Jt)/r(Ze)*100).toFixed(2):"0.00"),Y=P(!1),Re=P(0),Be=P(0),Tt=P(0),ss=P(0),Lt=P(0),as=P(0),sn=Ue(()=>r(Lt)>0?(r(as)/r(Lt)*100).toFixed(2):"0.00"),ve=P(be([]));function an(c,u,w){const h=new Date().toLocaleString("fi-FI");let _=`
${"=".repeat(60)}
`;_+=`ROUND #${c} - ${h}
`,_+=`Mode: ${r(Y)?"FREE SPINS":"BASE GAME"}
`,_+=`${"=".repeat(60)}
`,u.forEach((A,T)=>{_+=`
Win ${T+1}:
`,_+=`  Symbol: ${A.symbol} (${Ea[A.symbol]})
`,_+=`  Count: ${A.count} symbols
`,_+=`  Multiplier: ${A.multiplier}x
`,_+=`  Payout: ${A.payout.toFixed(2)}
`,_+=`  Positions: [${A.positions.join(", ")}]
`}),_+=`
${"─".repeat(60)}
`,_+=`TOTAL WIN: ${w.toFixed(2)}
`,_+=`${"=".repeat(60)}
`,r(ve).push(_)}function rn(){const c=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${r(ve).join(`
`)}`,u=new Blob([c],{type:"text/plain"}),w=URL.createObjectURL(u),h=document.createElement("a");h.href=w,h.download=`win-log-${Date.now()}.txt`,h.click(),URL.revokeObjectURL(w)}function nn(){y(ve,be([]))}function on(){r(Y)||(y(Y,!0),y(Re,10),y(Be,0),Pe(Tt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),Kt())}const ln={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},cn={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function Aa(c){if(c===6)return Math.random()<.55?"h":"emptyslot";const u=r(Y)?cn:ln,w=Math.random();let h=0;const _=Ce.filter(T=>T!=="h"),A=_.reduce((T,I)=>T+u[I],0);for(const T of _)if(h+=u[T]/A,w<h)return T;return"f"}function ka(){const c=[];for(let u=0;u<a;u++){const w=Aa(u);c.push(w),Pe(Lt),w==="emptyslot"&&Pe(as)}return c}function Sa(c){return c<3?{col:0,row:c}:c<6?{col:1,row:c-3}:c===6?{col:2,row:0}:c<10?{col:3,row:c-7}:{col:4,row:c-10}}function gt(c,u){return c===0?u:c===1?3+u:c===2?6:c===3?7+u:c===4?10+u:-1}function dn(){if(r(Y)){const c=Math.random();return c<.7?3:c<.92?5:10}else{const c=Math.random();return c<.7?1:c<.92?2:3}}const fn={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function un(){var G;const c=[],u=[];for(let E=0;E<a;E++)vt[E]==="l"&&u.push(E);if(u.length>=5){const E=u.length;y(Re,r(Re)+E),r(Y)?console.log(`🎰 FREE SPINS RETRIGGERED! +${E} FREE SPINS! Total: ${r(Re)}`):(y(Y,!0),y(Be,0),Pe(Tt),console.log(`🎰 FREE SPINS TRIGGERED! ${u.length} scatters = ${E} FREE SPINS!`),Kt()),c.push({symbol:"l",count:u.length,payout:0,positions:u,multiplier:1})}const w=[];for(let E=0;E<3;E++)for(let R=0;R<3;R++)for(let F=0;F<1;F++)for(let M=0;M<3;M++)for(let W=0;W<3;W++){const N=[gt(0,E),gt(1,R),gt(2,F),gt(3,M),gt(4,W)];w.push(N)}console.log(`Generated ${w.length} possible paths (should be 81)`);const h=[];for(const E of w){const R=E.map(N=>vt[N]);if(R[0]==="emptyslot"||R[0]==="l")continue;let F=null;for(let N=0;N<R.length;N++)if(R[N]!=="h"&&R[N]!=="emptyslot"&&R[N]!=="l"){F=R[N];break}if(!F)continue;let M=0;const W=new Set;for(let N=0;N<E.length;N++){const Me=E[N],{col:rt}=Sa(Me),ue=R[N];(ue===F||ue==="h")&&W.add(rt)}for(let N=0;N<5&&W.has(N);N++)M++;if(M>=3){const Me=E[0]%3;h.push({symbol:F,length:M,path:E.slice(0,M),startRow:Me})}}const _=[],A=new Map;for(const E of h){const R=`${E.symbol}-${E.path.join(",")}`;A.has(R)||A.set(R,[]),A.get(R).push(E)}for(const[E,R]of A.entries()){const F=Math.max(...R.map(W=>W.length)),M=R.find(W=>W.length===F);M&&_.push(M)}const T=[],I=new Map;for(const E of _)I.has(E.symbol)||I.set(E.symbol,[]),I.get(E.symbol).push(E);const U=[];for(const[E,R]of I.entries()){const F=Math.max(...R.map(W=>W.length)),M=R.filter(W=>W.length===F);U.push(...M)}const J=new Map;for(const E of U){const R=`${E.symbol}-${E.length}`;J.has(R)||J.set(R,[]),J.get(R).push(E)}const ee=U.length>0?dn():1;for(const[E,R]of J.entries()){const F=R[0],M=(G=fn[F.symbol])==null?void 0:G[F.length];if(M!==void 0&&M>0){const W=new Map;for(const ue of R)for(let oe=0;oe<ue.length;oe++)W.has(oe)||W.set(oe,new Set),W.get(oe).add(ue.path[oe]);let N=1;for(let ue=0;ue<F.length;ue++){const oe=W.get(ue);N*=oe?oe.size:1}const Me=M*r(q)*N*ee;console.log(`  ${F.length}x${F.symbol}: ${N} ways × ${M}x × ${r(q)} bet × ${ee} mult = ${Me}`);const rt=new Set;for(const ue of R)ue.path.forEach(oe=>rt.add(oe));T.push({symbol:F.symbol,count:F.length,payout:Me,positions:Array.from(rt),multiplier:ee})}}return c.push(...T),c}let me=P(0),Je=P(be([])),Fe=P(!1),et=P(!1);const Ea={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function rs(c){if(!r(Te)||!Gt[c])return;const u=Gt[c];u.currentTime=0,u.play().catch(w=>{console.warn("Äänen toisto epäonnistui:",c,w)})}function pn(c){mt.forEach(u=>D.stage.removeChild(u)),mt=[],c.forEach(u=>{u.positions.forEach(w=>{const h=tt[w],_=new ea().rect(0,0,fe,se).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});_.x=h.container.x,_.y=h.container.y,D.stage.addChild(_),mt.push(_);let A=0,T=1;const I=.05;D.ticker.add(()=>{A+=T*I,A>=.4&&(T=-1),A<=0&&(T=1),_.alpha=.5+A})})})}function ns(){mt.forEach(c=>D.stage.removeChild(c)),mt=[]}let vt=ka(),os,D,tt=[],mt=[];class hn{constructor(u,w){we(this,"index");we(this,"container");we(this,"offset",0);we(this,"speed",0);we(this,"targetSpeed",30);we(this,"state","idle");we(this,"stopDelay",0);we(this,"bounceOffset",0);we(this,"bounceSpeed",0);we(this,"bounceFrames",0);this.index=u,this.container=w}start(u){this.state="spinning",this.speed=0,r(K)==="slow"?this.targetSpeed=20:r(K)==="medium"?this.targetSpeed=35:this.targetSpeed=50,this.stopDelay=u}startSynchronized(u){const w=60+u*Yr;this.start(w)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const u=r(K)==="slow"?.88:r(K)==="medium"?.92:.95;this.speed*=u,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,rs("stop"),Jr())}this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=xe&&(this.offset=0,vt[this.index]=Aa(this.index)))}}draw(){const u=this.container;u.removeChildren();const w=vt[this.index];if(!w||!Et||!Et[w])return;const h=Et[w];if(!h)return;const _=this.offset+this.bounceOffset,A=new Ct(h);A.width=fe,A.height=se,A.x=0,A.y=_,u.addChild(A)}}let is=P(1);Er(async()=>{D=new Wr,await D.init({width:n,height:o,background:"#001a33"}),os.appendChild(D.canvas);const c=()=>{const h=window.innerWidth,_=window.innerHeight,A=h/n,T=_/o,I=Math.min(A,T,1);y(is,be(I)),D.stage.scale.set(I),D.renderer.resize(n*I,o*I)};c(),window.addEventListener("resize",c);const u={};try{y(pt,"Loading background and UI images..."),_e.push(`Loading background: ${Ut}`),_e.push(`Loading reel frames: ${ma}`),_e.push(`Loading logo: ${ba}`),await nt.load([{alias:"background",src:Ut},{alias:"reelframes",src:ma},{alias:"logo",src:ba}]),Xe=Ge.from("background"),ft=Ge.from("reelframes"),ut=Ge.from("logo"),console.log("✅ Background texture created:",Xe.width,"x",Xe.height),console.log("✅ Reel frames texture created:",ft.width,"x",ft.height),console.log("✅ Logo texture created:",ut.width,"x",ut.height),_e.push("✅ All UI images loaded"),y(pt,"Loading symbols...");const h=[];for(const _ of Ce)h.push({alias:_,src:Dt[_]});await nt.load(h);for(const _ of Ce){const A=Dt[_];_e.push(`Loading symbol ${_}: ${A}`);try{const T=Ge.from(_);u[_]=T,console.log(`✅ Symbol ${_} loaded:`,T.width,"x",T.height),_e.push(`✅ Symbol ${_} loaded`)}catch(T){const I=`❌ Failed to load symbol ${_} from ${A}: ${T}`;throw _e.push(I),console.error(I),new Error(I)}}Et=u,y(pt,"Assets loaded successfully!")}catch(h){y(Ke,`Asset loading failed: ${h}`),_e.push(r(Ke)),console.error(r(Ke));return}console.log("Ladataan ääniefektit...");for(const[h,_]of Object.entries(Hr)){const A=new Audio;A.src=_,A.preload="auto",A.volume=.7,A.load(),A.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${_} (käytetään hiljaista placeholderia)`)}),Gt[h]=A}if(console.log("Taustakuva ladattu, tekstuuri:",Xe),Xe){const h=new Ct(Xe);D.renderer.width/D.renderer.height;const _=h.texture.width/h.texture.height;let A;A=D.renderer.height/h.texture.height,A*=Ee,h.scale.set(A),h.x=(D.renderer.width-h.width)/2,h.y=(D.renderer.height-h.height)/2+ce,D.stage.addChild(h),console.log("Taustakuva lisätty:",de,"mode, size:",h.width.toFixed(0),"x",h.height.toFixed(0),"image aspect:",_.toFixed(2),"scale:",A.toFixed(2),"pos:",h.x.toFixed(0),h.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(h=>({x:h.x+l,y:h.y+p})),tt=[];for(let h=0;h<a;h++){const _=Sa(h),A=_.col,T=_.row,I=300+A*(fe+20),U=250+T*(se+15),J=h===6?I+f:I,ee=h===6?U+g:U,G=new pa;G.x=J+l,G.y=ee+p;const E=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],R=new ea().rect(0,0,fe,se).fill({color:E[h],alpha:.3});R.x=G.x,R.y=G.y,D.stage.addChild(R);const F=new $r({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),M=new Ki({text:h.toString(),style:F});M.x=G.x+5,M.y=G.y+5,D.stage.addChild(M);const W=new ea().rect(0,0,fe,se).fill(16777215);W.x=G.x,W.y=G.y,G.mask=W,D.stage.addChild(W),D.stage.addChild(G),tt.push(new hn(h,G))}if(ft){const h=new Ct(ft);h.scale.set(1),h.x=250,h.y=200,D.stage.addChild(h),Xt=h,y(Yt,be(h.width)),console.log("Reel frames lisätty:",h.width.toFixed(0),"x",h.height.toFixed(0)),console.log("Control panel leveys päivitetty:",r(Yt).toFixed(0))}if(ut){const h=new Ct(ut);h.scale.set(O),h.x=(D.renderer.width-h.width)/2+X,h.y=re,D.stage.addChild(h),console.log("Logo lisätty päällimmäiseen layeriin:",h.width.toFixed(0),"x",h.height.toFixed(0))}ya(),D.ticker.add(gn)});function gn(){for(const c of tt)c.update(),c.draw();if(!r(Fe)&&!qt&&tt.every(c=>c.state==="stopped")){qt=!0,Qr();const c=un();console.log(`Checking wins, found ${c.length} wins`),c.length>0?(y(Je,be(c)),y(me,be(c.reduce((u,w)=>u+w.payout,0))),an(r(Ze),c,r(me)),vn(r(me)),y(Fe,!0),y(tn,be(Date.now())),console.log(`🎉 VOITTO! ${r(me)} pistettä! Uusi saldo: ${r(Le)}`),console.log(`isShowingWin set to: ${r(Fe)}, totalWin: ${r(me)}`),c.forEach(u=>{const w=u.multiplier?` (${u.multiplier}x multiplier)`:"";console.log(`${u.count}x ${u.symbol} = ${u.payout} pistettä${w}`)}),pn(c),rs("win"),r(ge)&&!De&&(De=!0,$e=window.setTimeout(()=>{r(Fe)&&r(ge)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),y(Fe,!1),ns()),$e=window.setTimeout(()=>{De=!1,cs()},200)},1500))):(console.log("No wins found this spin"),r(ge)&&!De&&(De=!0,$e=window.setTimeout(()=>{De=!1,cs()},1e3))),r(Y)&&r(Re)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${r(Be)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${r(Be).toFixed(2)}`),y(Y,!1),y(Be,0),Kt()},2e3))}}function Ta(){if(V&&r(ye)&&!V.playing()&&(V.play(),console.log("🎵 Background music started on first spin")),Zr(),r(Y)&&r(Re)>0)Pe(Re,-1),Pe(ss),console.log(`🎰 FREE SPIN! Remaining: ${r(Re)}`);else if(!r(Y)){if(r(Le)<r(q)){alert(`Not enough credits! Balance: ${r(Le)}, Bet: ${r(q)}`),ls();return}y(Le,r(Le)-r(q)),Pe(Ze),y(qe,r(qe)+r(q))}$e!==null&&(clearTimeout($e),$e=null),y(Je,be([])),y(me,0),y(Fe,!1),qt=!1,ns(),vt=ka(),tt.forEach((c,u)=>{c.startSynchronized(u)}),rs("spin")}function vn(c){if(y(Le,r(Le)+c),y(ht,r(ht)+c),r(Y)&&y(Be,r(Be)+c),c>0){Pe(Jt);const u=c/r(q);u>=10&&en(),Ye&&(u>=50?Ye.show():u>=20?setTimeout(()=>Ye.show(),200):u>=10&&setTimeout(()=>Ye.show(),400))}}function La(){r(q)<Zt&&y(q,be(Math.min(r(q)+1,Zt)))}function $a(){r(q)>wa&&y(q,be(Math.max(r(q)-1,wa)))}function mn(){y(q,Zt)}function bt(c){y(ge,!0),y(Qe,be(c)),y(je,!1),cs()}function ls(){y(ge,!1),y(Qe,0),De=!1,$e!==null&&(clearTimeout($e),$e=null)}function cs(){if(!r(ge)||r(Qe)<=0){ls();return}console.log(`Autoplay: Starting spin ${r(Qe)} rounds left`),Ta(),Pe(Qe,-1)}function bn(){confirm("Reset all statistics?")&&(y(Ze,0),y(qe,0),y(ht,0),y(Jt,0),y(Tt,0),y(ss,0),y(Lt,0),y(as,0))}var Ra=ml();Ro(c=>{var u=al();d(Ie(u)),j(c,u)});var Pa=Ie(Ra);{var xn=c=>{var u=il(),w=d(b(u),2),h=d(b(w));x(w);var _=d(w,2);{var A=F=>{var M=rl(),W=d(b(M));x(M),ie(()=>z(W,` ${r(Ke)??""}`)),j(F,M)};le(_,F=>{r(Ke)&&F(A)})}var T=d(_,2),I=d(b(T));I.nodeValue=` ${Se??""}`,x(T);var U=d(T,2),J=d(b(U));J.nodeValue=` ${Ut??""}`,x(U);var ee=d(U,2),G=d(b(ee));x(ee);var E=d(ee,2);{var R=F=>{var M=ol(),W=b(M),N=b(W);x(W);var Me=d(W,2);Nt(Me,17,()=>_e,zt,(rt,ue)=>{var oe=nl(),Zn=b(oe,!0);x(oe),ie(()=>z(Zn,r(ue))),j(rt,oe)}),x(M),ie(()=>z(N,`Log (${_e.length??""})`)),j(F,M)};le(E,F=>{_e.length>0&&F(R)})}x(u),ie(()=>{z(h,` ${r(pt)??""}`),z(G,` ${Dt.a??""}`)}),j(c,u)};le(Pa,c=>{(r(pt)!=="Assets loaded successfully!"||r(Ke))&&c(xn)})}var Oa=d(Pa,2);{var yn=c=>{var u=dl(),w=d(b(u),2),h=b(w);x(w);var _=d(w,2);Nt(_,17,()=>r(Je),zt,(U,J)=>{var ee=ll(),G=b(ee);x(ee),ie(E=>z(G,`${r(J).count??""} × ${Ea[r(J).symbol]??""} = ${E??""} pistettä`),[()=>r(J).payout.toFixed(2)]),j(U,ee)});var A=d(_,2);{var T=U=>{var J=cl(),ee=b(J),G=b(ee);x(ee),x(J),ie(()=>z(G,`✨ ${r(Je)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),j(U,J)};le(A,U=>{r(Je).length>0&&r(Je)[0].multiplier>1&&U(T)})}var I=d(A,2);x(u),ie(()=>z(h,`${r(me)??""} pistettä`)),C("click",I,()=>{y(Fe,!1),ns(),console.log("Win popup closed, ready for next spin")}),j(c,u)};le(Oa,c=>{r(me)>0&&r(Fe)&&c(yn)})}var Ia=d(Oa,2);{var _n=c=>{var u=fl(),w=d(b(u),8);x(u),C("click",w,()=>{y(et,!1)}),j(c,u)};le(Ia,c=>{r(et)&&c(_n)})}var Ca=d(Ia,2),ds=b(Ca),fs=b(ds);k(fs,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${n}px;
        height: ${o}px;
      `),cr(fs,c=>os=c,()=>os);var $t=d(fs,2),Ba=b($t);{var wn=c=>{var u=ul(),w=Ie(u),h=d(b(w),2),_=b(h,!0);x(h),x(w);var A=d(w,2),T=d(b(A),2),I=b(T,!0);x(T),x(A),ie(U=>{z(_,r(Re)),z(I,U)},[()=>r(Be).toFixed(2)]),j(c,u)};le(Ba,c=>{r(Y)&&c(wn)})}var us=d(Ba,2),Fa=d(b(us),2),An=b(Fa,!0);x(Fa),x(us);var Ma=d(us,2),Wa=d(b(Ma),2),kn=b(Wa,!0);x(Wa),x(Ma),x($t);var ps=d($t,2),za=d(b(ps),2),Na=b(za),hs=d(Na,2),Sn=b(hs,!0);x(hs);var ja=d(hs,2),En=d(ja,2);x(za),x(ps);var Da=d(ps,2),gs=d(Da,2),Ua=d(b(gs),2);Ua.textContent=`v${s}`;var vs=d(Ua,2),Ga=d(b(vs),2),Tn=b(Ga,!0);x(Ga),x(vs);var ms=d(vs,2),Ha=d(b(ms),2),Ln=b(Ha,!0);x(Ha),x(ms);var bs=d(ms,2),Va=d(b(bs),2),$n=b(Va,!0);x(Va),x(bs);var xs=d(bs,2),ys=d(b(xs),2),Rn=b(ys);x(ys),x(xs);var _s=d(xs,2),ws=d(b(_s),2),Pn=b(ws);x(ws),x(_s);var As=d(_s,2),Ya=d(b(As),2),On=b(Ya,!0);x(Ya),x(As);var ks=d(As,2),Xa=d(b(ks),2),In=b(Xa,!0);x(Xa),x(ks);var Ss=d(ks,2),Ka=d(b(Ss),2),Cn=b(Ka);x(Ka),x(Ss);var Qa=d(Ss,2),Za=d(Qa,2),st=b(Za),Bn=b(st);x(st);var Rt=d(st,2),xt=d(Rt,2),Fn=b(xt);x(xt);var Es=d(xt,2);x(Za),x(gs);var Ts=d(gs,2),Mn=b(Ts);{var Wn=c=>{var u=pl(),w=d(b(u),2),h=b(w);x(w);var _=d(w,2);x(u),ie(()=>z(h,`${r(Qe)??""} left`)),C("click",_,ls),j(c,u)},zn=c=>{var u=gl(),w=Ie(u),h=d(w,2);{var _=A=>{var T=hl(),I=d(b(T),2),U=d(I,2),J=d(U,2),ee=d(J,2),G=d(ee,2),E=d(G,2);x(T),C("click",I,()=>bt(10)),C("click",U,()=>bt(100)),C("click",J,()=>bt(1e3)),C("click",ee,()=>bt(1e4)),C("click",G,()=>bt(1e5)),C("click",E,()=>{y(je,!1)}),j(A,T)};le(h,A=>{r(je)&&A(_)})}C("click",w,()=>{y(je,!r(je))}),j(c,u)};le(Mn,c=>{r(ge)?c(Wn):c(zn,!1)})}x(Ts);var at=d(Ts,2),Nn=b(at,!0);x(at);var Pt=d(at,2),Ls=b(Pt);k(Ls,"src",`${Z??""}/Control_leftend.png`),k(Ls,"style",`height: ${v}px; flex-shrink: 0;`);var Ot=d(Ls,2);k(Ot,"style",`
    flex-grow: 1;
    height: ${v}px;
    background-image: url('${Z??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 20px;
  `);var $s=b(Ot),qa=d(b($s),2),Rs=b(qa);k(Rs,"style",`
            width: 40px;
            height: 40px;
            background-image: url('${Z??""}/Control_lowerbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `);var Ps=d(Rs,2),jn=b(Ps,!0);x(Ps);var Ja=d(Ps,2);k(Ja,"style",`
            width: 40px;
            height: 40px;
            background-image: url('${Z??""}/Control_upperbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(qa),x($s);var Os=d($s,2);k(Os,"src",`${Z??""}/Control_divider.png`),k(Os,"style",`height: ${v*.8}px; flex-shrink: 0;`);var Is=d(Os,2),er=d(b(Is),2),Dn=b(er,!0);x(er),x(Is);var Cs=d(Is,2);k(Cs,"src",`${Z??""}/Control_divider.png`),k(Cs,"style",`height: ${v*.8}px; flex-shrink: 0;`);var Bs=d(Cs,2),Fs=b(Bs),Ms=b(Fs);x(Fs),x(Bs);var Ws=d(Bs,2);k(Ws,"src",`${Z??""}/Control_divider.png`),k(Ws,"style",`height: ${v*.8}px; flex-shrink: 0;`);var zs=d(Ws,2),Ns=b(zs),Un=d(Ns,2);x(zs);var js=d(zs,2);k(js,"src",`${Z??""}/Control_divider.png`),k(js,"style",`height: ${v*.8}px; flex-shrink: 0;`);var Ds=d(js,2),It=b(Ds);k(It,"style",`
          width: 50px;
          height: 50px;
          background-image: url('${Z??""}/Control_fastplay_select.png');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `);var Us=d(It,2),Gn=b(Us,!0);x(Us);var Hn=d(Us,2);{var Vn=c=>{var u=vl(),w=d(b(u),2),h=d(w,2),_=d(h,2);x(u),ie(()=>{k(w,"style",`
              background: ${(r(K)==="slow"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: 2px solid ${(r(K)==="slow"?"#ffd700":"#666")??""};
              color: ${(r(K)==="slow"?"#ffd700":"#ffffff")??""};
              padding: 8px 20px;
              border-radius: 5px;
              cursor: pointer;
              font-weight: bold;
              font-size: 12px;
              transition: all 0.2s;
            `),k(h,"style",`
              background: ${(r(K)==="medium"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: 2px solid ${(r(K)==="medium"?"#ffd700":"#666")??""};
              color: ${(r(K)==="medium"?"#ffd700":"#ffffff")??""};
              padding: 8px 20px;
              border-radius: 5px;
              cursor: pointer;
              font-weight: bold;
              font-size: 12px;
              transition: all 0.2s;
            `),k(_,"style",`
              background: ${(r(K)==="fast"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: 2px solid ${(r(K)==="fast"?"#ffd700":"#666")??""};
              color: ${(r(K)==="fast"?"#ffd700":"#ffffff")??""};
              padding: 8px 20px;
              border-radius: 5px;
              cursor: pointer;
              font-weight: bold;
              font-size: 12px;
              transition: all 0.2s;
            `)}),C("click",w,()=>{y(K,"slow"),y(Ve,!1)}),C("click",h,()=>{y(K,"medium"),y(Ve,!1)}),C("click",_,()=>{y(K,"fast"),y(Ve,!1)}),j(c,u)};le(Hn,c=>{r(Ve)&&c(Vn)})}x(Ds);var Gs=d(Ds,2);k(Gs,"src",`${Z??""}/Control_divider.png`),k(Gs,"style",`height: ${v*.8}px; flex-shrink: 0;`);var Hs=d(Gs,2),Vs=b(Hs),Yn=d(Vs,2);x(Hs);var Ys=d(Hs,2);k(Ys,"src",`${Z??""}/Control_divider.png`),k(Ys,"style",`height: ${v*.8}px; flex-shrink: 0;`);var Xs=d(Ys,2),tr=d(b(Xs),2),Xn=b(tr,!0);x(tr),x(Xs);var Ks=d(Xs,2);k(Ks,"src",`${Z??""}/Control_divider.png`),k(Ks,"style",`height: ${v*.8}px; flex-shrink: 0;`);var sr=d(Ks,2);k(sr,"style",`
        width: 50px;
        height: 50px;
        background-image: url('${Z??""}/Control_menubar.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),x(Ot);var ar=d(Ot,2);k(ar,"src",`${Z??""}/Control_rightend.png`),k(ar,"style",`height: ${v}px; flex-shrink: 0;`),x(Pt);var Kn=d(Pt,2);const Qn=Ue(()=>r(me)/r(q)>=50?"jackpot":r(me)/r(q)>=20?"medium":"small");cr(sl(Kn,{get winLevel(){return r(Qn)},get winAmount(){return r(me)}}),c=>Ye=c,()=>Ye),x(ds),x(Ca),ie((c,u,w,h,_,A,T,I,U)=>{k(ds,"style",`
    position: relative;
    width: ${n*r(is)}px;
    height: ${o*r(is)}px;
  `),k($t,"style",`
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
      border: 2px solid ${(r(Y)?"#ff00ff":"#ffd700")??""};
      box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
      z-index: 1500;
      min-width: 180px;
    `),z(An,c),z(kn,r(q)),z(Sn,r(q)),z(Tn,u),z(Ln,w),z($n,h),k(ys,"style",`color: ${_??""};`),z(Rn,`${r(es)??""}%`),k(ws,"style",`color: ${A??""};`),z(Pn,`${r(ts)??""}%`),z(On,r(Tt)),z(In,r(ss)),z(Cn,`${r(sn)??""}%`),st.disabled=r(ve).length===0,k(st,"style",`
        width: 100%;
        padding: 5px;
        background: ${(r(ve).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(r(ve).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(r(ve).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(r(ve).length>0?"1":"0.5")??""};
      `),z(Bn,`Download Win Log (${r(ve).length??""})`),Rt.disabled=r(ve).length===0,k(Rt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(r(ve).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(r(ve).length>0?"1":"0.5")??""};
      `),k(xt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(r(ye)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(r(ye)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),z(Fn,`🎵 Music: ${(r(ye)?"ON":"OFF")??""}`),Es.disabled=r(Y),k(Es,"style",`
        width: 100%;
        padding: 5px;
        background: ${(r(Y)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(r(Y)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(r(Y)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(r(Y)?"0.5":"1")??""};
      `),k(at,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(r(Te)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(r(Te)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),k(at,"title",r(Te)?"Mykistä äänet":"Laita äänet päälle"),z(Nn,r(Te)?"🔊":"🔇"),k(Pt,"style",`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(
    calc(-50% + ${(Xt?Xt.x:S)+L}px),
    calc(-50% + ${m+te}px)
  ) scale(${H}, ${$});
  transform-origin: center center;
  width: ${r(Yt)??""}px;
  height: ${v}px;
  display: flex;
  align-items: center;
  z-index: 1000;
`),z(jn,T),z(Dn,I),ia(Fs,1,`play-button-wrapper ${(r(Qt)?"glare-animate":"")??""}`,"svelte-170ah2r"),Ms.disabled=r(ge),k(Ms,"style",`
            width: 130px;
            height: 130px;
            background-image: url('${Z??""}/Control_playbutton.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border: none;
            cursor: ${(r(ge)?"not-allowed":"pointer")??""};
            background-color: transparent;
            opacity: ${(r(ge)?.5:1)??""};
            position: relative;
            z-index: 10;
            border-radius: 50%;
          `),k(Ns,"style",`
          width: 50px;
          height: 50px;
          background-image: url('${Z??""}/${(r(ge)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),k(Un,"src",`${Z??""}/${(r(ge)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),k(It,"title",`Spin Speed: ${(r(K)==="slow"?"Slow":r(K)==="medium"?"Medium":"Fast")??""}`),z(Gn,r(K)==="slow"?"Slow":r(K)==="medium"?"Med":"Fast"),k(Vs,"style",`
          width: 50px;
          height: 50px;
          background-image: url('${Z??""}/${(r(kt)?"Control_fastplay_select.png":"Control_fastplay_deselect.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),k(Yn,"src",`${Z??""}/${(r(kt)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),z(Xn,U)},[()=>r(Le).toLocaleString(),()=>r(Ze).toLocaleString(),()=>r(qe).toLocaleString(),()=>r(ht).toLocaleString(),()=>parseFloat(r(es))>=95?"#00ff00":parseFloat(r(es))>=85?"#ffff00":"#ff6666",()=>parseFloat(r(ts))>=30?"#00ff00":parseFloat(r(ts))>=20?"#ffff00":"#ff6666",()=>r(q).toFixed(2),()=>r(Le).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>r(me).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),C("click",Na,$a),C("click",ja,La),C("click",En,mn),C("click",Da,()=>{y(et,!r(et))}),C("click",Qa,bn),C("click",st,rn),C("click",Rt,nn),C("click",xt,qr),C("click",Es,on),C("click",at,()=>{y(Te,!r(Te))}),C("click",Rs,$a),C("click",Ja,La),C("click",Ms,Ta),C("click",Ns,()=>{y(je,!r(je))}),C("click",It,()=>{y(Ve,!r(Ve))}),C("click",Vs,()=>{y(kt,!r(kt))}),C("click",sr,()=>{y(et,!r(et))}),j(t,Ra),ua()}var xl=Q('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),yl=Q('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function _l(t,e){fa(e,!1);let s=oa(e,"isAuthenticated",12,!1),a=na(""),n=na(!1);const o="slot2024";function i(){r(a)===o?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(y(n,!0),y(a,""),setTimeout(()=>y(n,!1),3e3))}Er(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),ao();var l=_r(),p=Ie(l);{var g=f=>{var m=yl(),v=b(m),S=d(b(v),4),L=b(S);Go(L),$o(2),x(S);var te=d(S,2);{var H=$=>{var O=xl();j($,O)};le(te,$=>{r(n)&&$(H)})}x(v),x(m),Vo(L,()=>r(a),$=>y(a,$)),C("submit",S,Yo(i)),j(f,m)};le(p,f=>{s()||f(g)})}j(t,l),ua()}var wl=Q('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),Al=Q("<!> <!>",1);function Fl(t){let e=na(!1);var s=Al(),a=Ie(s);_l(a,{get isAuthenticated(){return r(e)},set isAuthenticated(i){y(e,i)},$$legacy:!0});var n=d(a,2);{var o=i=>{var l=wl(),p=d(Ie(l),2);bl(p,{}),j(i,l)};le(n,i=>{r(e)&&i(o)})}j(t,s)}export{Cr as A,Pr as C,ti as R,Qo as S,Br as V,Fl as _,Ko as u};
