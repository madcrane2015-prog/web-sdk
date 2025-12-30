const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BQeKvjgY.js","./SpTHHzAp.js","./DN2ixH3E.js","./D1rxTRw3.js","./BUP9hRfY.js","./C2GHuDhf.js","./CEk9yDFC.js","./BELWXVAN.js"])))=>i.map(i=>d[i]);
var qi=Object.defineProperty;var Ji=(t,e,s)=>e in t?qi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var we=(t,e,s)=>Ji(t,typeof e!="symbol"?e+"":e,s);import{f as er,l as tr,d as Aa,a as N,t as Q,n as ka,g as I,i as sr}from"./CzvQHsIM.js";import{i as or}from"./CSlWMsbo.js";import{R as Ae,T as ar,Q as ir,i as a,w as rr,W as nr,X as ra,Y as na,Z as Qs,a1 as _t,a9 as lr,_ as ja,$ as Sa,a0 as cr,ad as Ea,O as dr,z as pr,I as la,ar as Zs,K as ca,as as fr,at as ur,au as hr,ac as gr,av as vr,aw as mr,ax as br,ay as xr,a3 as yr,az as _r,aA as wr,N as Ar,aB as kr,aC as jr,g as Sr,n as Er,p as fo,f as Oe,ai as R,a as uo,y,c as b,s as d,r as x,t as ne,k as Ue,ah as Ta,aD as Re,aE as Tr,aF as io}from"./D1rxTRw3.js";import{_ as da,i as le,p as be}from"./DN2ixH3E.js";import{s as W,a as Lr}from"./CSYyqGjZ.js";import{p as ro,b as pa}from"./Dk6Goypl.js";import{b as je}from"./DWmoNu_J.js";import{e as ze,E as C,a as $r,C as ho,Q as Mt,V as Wt,N as qs,D as ue,H as Rr,p as Ge,ab as nt,ac as He,ad as Pr,w as We,ae as At,af as La,ag as lt,a9 as Pe,ah as Dt,a1 as $a,ai as Or,aj as Js,aa as Ir,ak as Cr,y as Ct}from"./SpTHHzAp.js";import{A as Br,B as fa,G as Fr,T as Ra,a as Mr,b as eo}from"./BUP9hRfY.js";function zt(t,e){return e}function Wr(t,e,s,o){for(var i=[],r=e.length,n=0;n<r;n++)hr(e[n].e,i,!0);var l=r>0&&i.length===0&&s!==null;if(l){var u=s.parentNode;gr(u),u.append(s),o.clear(),Me(t,e[0].prev,e[r-1].next)}vr(i,()=>{for(var g=0;g<r;g++){var p=e[g];l||(o.delete(p.k),Me(t,p.prev,p.next)),mr(p.e,!l)}})}function Nt(t,e,s,o,i,r=null){var n=t,l={flags:e,items:new Map,first:null};Ae&&ar();var u=null,g=!1,p=rr(()=>{var m=s();return dr(m)?m:m==null?[]:Ea(m)});ir(()=>{var m=a(p),v=m.length;if(g&&v===0)return;g=v===0;let j=!1;if(Ae){var T=n.data===nr;T!==(v===0)&&(n=ra(),na(n),Qs(!1),j=!0)}if(Ae){for(var te=null,H,L=0;L<v;L++){if(_t.nodeType===8&&_t.data===lr){n=_t,j=!0,Qs(!1);break}var P=m[L],X=o(P,L);H=Pa(_t,l,te,null,P,X,L,i,e,s),l.items.set(X,H),te=H}v>0&&na(ra())}Ae||zr(m,l,n,i,e,o,s),r!==null&&(v===0?u?ja(u):u=Sa(()=>r(n)):u!==null&&cr(u,()=>{u=null})),j&&Qs(!0),a(p)}),Ae&&(n=_t)}function zr(t,e,s,o,i,r,n){var l=t.length,u=e.items,g=e.first,p=g,m,v=null,j=[],T=[],te,H,L,P;for(P=0;P<l;P+=1){if(te=t[P],H=r(te,P),L=u.get(H),L===void 0){var X=p?p.e.nodes_start:s;v=Pa(X,e,v,v===null?e.first:v.next,te,H,P,o,i,n),u.set(H,v),j=[],T=[],p=v.next;continue}if(Nr(L,te,P),(L.e.f&Zs)!==0&&ja(L.e),L!==p){if(m!==void 0&&m.has(L)){if(j.length<T.length){var ae=T[0],ce;v=ae.prev;var Se=j[0],de=j[j.length-1];for(ce=0;ce<j.length;ce+=1)ua(j[ce],ae,s);for(ce=0;ce<T.length;ce+=1)m.delete(T[ce]);Me(e,Se.prev,de.next),Me(e,v,Se),Me(e,de,ae),p=ae,v=de,P-=1,j=[],T=[]}else m.delete(L),ua(L,p,s),Me(e,L.prev,L.next),Me(e,L,v===null?e.first:v.next),Me(e,v,L),v=L;continue}for(j=[],T=[];p!==null&&p.k!==H;)(p.e.f&Zs)===0&&(m??(m=new Set)).add(p),T.push(p),p=p.next;if(p===null)continue;L=p}j.push(L),v=L,p=L.next}if(p!==null||m!==void 0){for(var ke=m===void 0?[]:Ea(m);p!==null;)(p.e.f&Zs)===0&&ke.push(p),p=p.next;var pe=ke.length;if(pe>0){var se=null;Wr(e,ke,se,u)}}ca.first=e.first&&e.first.e,ca.last=v&&v.e}function Nr(t,e,s,o){ur(t.v,e),t.i=s}function Pa(t,e,s,o,i,r,n,l,u,g){var p=(u&br)!==0,m=(u&xr)===0,v=p?m?pr(i):la(i):i,j=(u&fr)===0?n:la(n),T={i:j,v,k:r,a:null,e:null,prev:s,next:o};try{return T.e=Sa(()=>l(t,v,j,g),Ae),T.e.prev=s&&s.e,T.e.next=o&&o.e,s===null?e.first=T:(s.next=T,s.e.next=T.e),o!==null&&(o.prev=T,o.e.prev=T.e),T}finally{}}function ua(t,e,s){for(var o=t.next?t.next.e.nodes_start:s,i=e?e.e.nodes_start:s,r=t.e.nodes_start;r!==o;){var n=yr(r);i.before(r),r=n}}function Me(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}const ha=[...` 	
\r\f \v\uFEFF`];function Dr(t,e,s){var o=t==null?"":""+t;if(e&&(o=o?o+" "+e:e),s){for(var i in s)if(s[i])o=o?o+" "+i:i;else if(o.length)for(var r=i.length,n=0;(n=o.indexOf(i,n))>=0;){var l=n+r;(n===0||ha.includes(o[n-1]))&&(l===o.length||ha.includes(o[l]))?o=(n===0?"":o.substring(0,n))+o.substring(l+1):n=l}}return o===""?null:o}function no(t,e,s,o,i,r){var n=t.__className;if(Ae||n!==s){var l=Dr(s,o,r);(!Ae||l!==t.getAttribute("class"))&&(l==null?t.removeAttribute("class"):e?t.className=l:t.setAttribute("class",l)),t.__className=s}else if(r)for(var u in r){var g=!!r[u];(i==null||g!==!!i[u])&&t.classList.toggle(u,g)}return r}function Ur(t){if(Ae){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var o=t.value;k(t,"value",null),t.value=o}if(t.hasAttribute("checked")){var i=t.checked;k(t,"checked",null),t.checked=i}}};t.__on_r=s,_r(s),er()}}function k(t,e,s,o){var i=t.__attributes??(t.__attributes={});Ae&&(i[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||i[e]!==(i[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[wr]=s),s==null?t.removeAttribute(e):typeof s!="string"&&Gr(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var ga=new Map;function Gr(t){var e=ga.get(t.nodeName);if(e)return e;ga.set(t.nodeName,e=[]);for(var s,o=t,i=Element.prototype;i!==o;){s=kr(o);for(var r in s)s[r].set&&e.push(r);o=Ar(o)}return e}function Hr(t,e,s=e){var o=jr();tr(t,"input",i=>{var r=i?t.defaultValue:t.value;if(r=to(t)?so(r):r,s(r),o&&r!==(r=e())){var n=t.selectionStart,l=t.selectionEnd;t.value=r??"",l!==null&&(t.selectionStart=n,t.selectionEnd=Math.min(l,t.value.length))}}),(Ae&&t.defaultValue!==t.value||Sr(e)==null&&t.value)&&s(to(t)?so(t.value):t.value),Er(()=>{var i=e();to(t)&&i===so(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}function to(t){var e=t.type;return e==="number"||e==="range"}function so(t){return t===""?null:+t}function Vr(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const lo=[];ze.handleByNamedList(C.Environment,lo);async function Yr(t){if(!t)for(let e=0;e<lo.length;e++){const s=lo[e];if(s.value.test()){await s.value.load();return}}}let wt;function Xr(){if(typeof wt=="boolean")return wt;try{wt=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{wt=!1}return wt}var Oa=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(Oa||{});class Kr{constructor(e){this.items=[],this._name=e}emit(e,s,o,i,r,n,l,u){const{name:g,items:p}=this;for(let m=0,v=p.length;m<v;m++)p[m][g](e,s,o,i,r,n,l,u);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Qr=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],Ia=class Ca extends $r{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...Qr,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Yr(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const o in this._systemsHash)e={...this._systemsHash[o].constructor.defaultOptions,...e};e={...Ca.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let o=0;o<this.runners.init.items.length;o++)await this.runners.init.items[o].init(e);this._initOptions=e}render(e,s){let o=e;if(o instanceof ho&&(o={container:o},s&&(Mt(Wt,"passing a second argument is deprecated, please use render options instead"),o.target=s.renderTexture)),o.target||(o.target=this.view.renderTarget),o.target===this.view.renderTarget&&(this._lastObjectRendered=o.container,o.clearColor??(o.clearColor=this.background.colorRgba),o.clear??(o.clear=this.background.clearBeforeRender)),o.clearColor){const i=Array.isArray(o.clearColor)&&o.clearColor.length===4;o.clearColor=i?o.clearColor:qs.shared.setValue(o.clearColor).toArray()}o.transform||(o.container.updateLocalTransform(),o.transform=o.container.localTransform),o.container.enableRenderGroup(),this.runners.prerender.emit(o),this.runners.renderStart.emit(o),this.runners.render.emit(o),this.runners.renderEnd.emit(o),this.runners.postrender.emit(o)}resize(e,s,o){const i=this.view.resolution;this.view.resize(e,s,o),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),o!==void 0&&o!==i&&this.runners.resolutionChange.emit(o)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Oa.ALL);const{clear:o,clearColor:i,target:r}=e;qs.shared.setValue(i??this.background.colorRgba),s.renderTarget.clear(r,o,qs.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new Kr(s)})}_addSystems(e){let s;for(s in e){const o=e[s];this._addSystem(o.value,o.name)}}_addSystem(e,s){const o=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=o,this._systemsHash[s]=o;for(const i in this.runners)this.runners[i].add(o);return this}_addPipes(e,s){const o=s.reduce((i,r)=>(i[r.name]=r.value,i),{});e.forEach(i=>{const r=i.value,n=i.name,l=o[n];this.renderPipes[n]=new r(this,l?new l:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Xr())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};Ia.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Ba=Ia,Bt;function Zr(t){return Bt!==void 0||(Bt=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??Ba.defaultOptions.failIfMajorPerformanceCaveat};try{if(!ue.get().getWebGLRenderingContext())return!1;let i=ue.get().createCanvas().getContext("webgl",e);const r=!!((s=i==null?void 0:i.getContextAttributes())!=null&&s.stencil);if(i){const n=i.getExtension("WEBGL_lose_context");n&&n.loseContext()}return i=null,r}catch{return!1}})()),Bt}let Ft;async function qr(t={}){return Ft!==void 0||(Ft=await(async()=>{const e=ue.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),Ft}const va=["webgl","webgpu","canvas"];async function Jr(t){let e=[];t.preference?(e.push(t.preference),va.forEach(r=>{r!==t.preference&&e.push(r)})):e=va.slice();let s,o={};for(let r=0;r<e.length;r++){const n=e[r];if(n==="webgpu"&&await qr()){const{WebGPURenderer:l}=await da(async()=>{const{WebGPURenderer:u}=await import("./BQeKvjgY.js");return{WebGPURenderer:u}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=l,o={...t,...t.webgpu};break}else if(n==="webgl"&&Zr(t.failIfMajorPerformanceCaveat??Ba.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:l}=await da(async()=>{const{WebGLRenderer:u}=await import("./BELWXVAN.js");return{WebGLRenderer:u}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=l,o={...t,...t.webgl};break}else if(n==="canvas")throw o={...t},new Error("CanvasRenderer is not yet implemented")}if(delete o.webgpu,delete o.webgl,!s)throw new Error("No available renderer for the current environment");const i=new s;return await i.init(o),i}const Fa="8.8.1";class Ma{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Fa)}static destroy(){}}Ma.extension=C.Application;class en{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Fa)}destroy(){this._renderer=null}}en.extension={type:[C.WebGLSystem,C.WebGPUSystem],name:"initHook",priority:-10};const Wa=class co{constructor(...e){this.stage=new ho,e[0]!==void 0&&Mt(Wt,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Jr(e),co._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Mt(Wt,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const o=co._plugins.slice(0);o.reverse(),o.forEach(i=>{i.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Wa._plugins=[];let za=Wa;ze.handleByList(C.Application,za._plugins);ze.add(Ma);class Na extends Br{constructor(e,s){super();const{textures:o,data:i}=e;Object.keys(i.pages).forEach(r=>{const n=i.pages[parseInt(r,10)],l=o[n.id];this.pages.push({texture:l})}),Object.keys(i.chars).forEach(r=>{const n=i.chars[r],{frame:l,source:u}=o[n.page],g=new Rr(n.x+l.x,n.y+l.y,n.width,n.height),p=new Ge({source:u,frame:g});this.chars[r]={id:r.codePointAt(0),xOffset:n.xOffset,yOffset:n.yOffset,xAdvance:n.xAdvance,kerning:n.kerning??{},texture:p}}),this.baseRenderedFontSize=i.fontSize,this.baseMeasurementFontSize=i.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:i.fontSize},this.baseLineOffset=i.baseLineOffset,this.lineHeight=i.lineHeight,this.fontFamily=i.fontFamily,this.distanceField=i.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){fa.install(e)}static uninstall(e){fa.uninstall(e)}}const oo={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const m in e){const v=e[m].match(/^[a-z]+/gm)[0],j=e[m].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),T={};for(const te in j){const H=j[te].split("="),L=H[0],P=H[1].replace(/"/gm,""),X=parseFloat(P),ae=isNaN(X)?P:X;T[L]=ae}s[v].push(T)}const o={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[i]=s.info,[r]=s.common,[n]=s.distanceField??[];n&&(o.distanceField={range:parseInt(n.distanceRange,10),type:n.fieldType}),o.fontSize=parseInt(i.size,10),o.fontFamily=i.face,o.lineHeight=parseInt(r.lineHeight,10);const l=s.page;for(let m=0;m<l.length;m++)o.pages.push({id:parseInt(l[m].id,10)||0,file:l[m].file});const u={};o.baseLineOffset=o.lineHeight-parseInt(r.base,10);const g=s.char;for(let m=0;m<g.length;m++){const v=g[m],j=parseInt(v.id,10);let T=v.letter??v.char??String.fromCharCode(j);T==="space"&&(T=" "),u[j]=T,o.chars[T]={id:j,page:parseInt(v.page,10)||0,x:parseInt(v.x,10),y:parseInt(v.y,10),width:parseInt(v.width,10),height:parseInt(v.height,10),xOffset:parseInt(v.xoffset,10),yOffset:parseInt(v.yoffset,10),xAdvance:parseInt(v.xadvance,10),kerning:{}}}const p=s.kerning||[];for(let m=0;m<p.length;m++){const v=parseInt(p[m].first,10),j=parseInt(p[m].second,10),T=parseInt(p[m].amount,10);o.chars[u[j]].kerning[u[v]]=T}return o}},ma={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],o=t.getElementsByTagName("common")[0],i=t.getElementsByTagName("distanceField")[0];i&&(e.distanceField={type:i.getAttribute("fieldType"),range:parseInt(i.getAttribute("distanceRange"),10)});const r=t.getElementsByTagName("page"),n=t.getElementsByTagName("char"),l=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(o.getAttribute("lineHeight"),10);for(let g=0;g<r.length;g++)e.pages.push({id:parseInt(r[g].getAttribute("id"),10)||0,file:r[g].getAttribute("file")});const u={};e.baseLineOffset=e.lineHeight-parseInt(o.getAttribute("base"),10);for(let g=0;g<n.length;g++){const p=n[g],m=parseInt(p.getAttribute("id"),10);let v=p.getAttribute("letter")??p.getAttribute("char")??String.fromCharCode(m);v==="space"&&(v=" "),u[m]=v,e.chars[v]={id:m,page:parseInt(p.getAttribute("page"),10)||0,x:parseInt(p.getAttribute("x"),10),y:parseInt(p.getAttribute("y"),10),width:parseInt(p.getAttribute("width"),10),height:parseInt(p.getAttribute("height"),10),xOffset:parseInt(p.getAttribute("xoffset"),10),yOffset:parseInt(p.getAttribute("yoffset"),10),xAdvance:parseInt(p.getAttribute("xadvance"),10),kerning:{}}}for(let g=0;g<l.length;g++){const p=parseInt(l[g].getAttribute("first"),10),m=parseInt(l[g].getAttribute("second"),10),v=parseInt(l[g].getAttribute("amount"),10);e.chars[u[m]].kerning[u[p]]=v}return e}},ba={test(t){return typeof t=="string"&&t.includes("<font>")?ma.test(ue.get().parseXML(t)):!1},parse(t){return ma.parse(ue.get().parseXML(t))}},tn=[".xml",".fnt"],sn={extension:{type:C.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof Na,getCacheableAssets(t,e){const s={};return t.forEach(o=>{s[o]=e,s[`${o}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},on={extension:{type:C.LoadParser,priority:nt.Normal},name:"loadBitmapFont",test(t){return tn.includes(He.extname(t).toLowerCase())},async testParse(t){return oo.test(t)||ba.test(t)},async parse(t,e,s){const o=oo.test(t)?oo.parse(t):ba.parse(t),{src:i}=e,{pages:r}=o,n=[],l=o.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let m=0;m<r.length;++m){const v=r[m].file;let j=He.join(He.dirname(i),v);j=Pr(j,i),n.push({src:j,data:l})}const u=await s.load(n),g=n.map(m=>u[m.src]);return new Na({data:o,textures:g},i)},async load(t,e){return await(await ue.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(o=>s.unload(o.texture.source._sourceOrigin))),t.destroy()}};class an{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let o=0;o<s;o++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const rn={extension:{type:C.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Ge),getCacheableAssets:(t,e)=>{const s={};return t.forEach(o=>{e.forEach((i,r)=>{s[o+(r===0?"":r+1)]=i})}),s}};async function Da(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const nn={extension:{type:C.DetectionParser,priority:1},test:async()=>Da("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},xa=["png","jpg","jpeg"],ln={extension:{type:C.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...xa],remove:async t=>t.filter(e=>!xa.includes(e))},cn="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function go(t){return cn?!1:document.createElement("video").canPlayType(t)!==""}const dn={extension:{type:C.DetectionParser,priority:0},test:async()=>go("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},pn={extension:{type:C.DetectionParser,priority:0},test:async()=>go("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},fn={extension:{type:C.DetectionParser,priority:0},test:async()=>go("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},un={extension:{type:C.DetectionParser,priority:0},test:async()=>Da("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class hn{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,o)=>(this._parsersValidated=!1,e[s]=o,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const o={promise:null,parser:null};return o.promise=(async()=>{var n,l;let i=null,r=null;if(s.loadParser&&(r=this._parserHash[s.loadParser],r||We(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!r){for(let u=0;u<this.parsers.length;u++){const g=this.parsers[u];if(g.load&&((n=g.test)!=null&&n.call(g,e,s,this))){r=g;break}}if(!r)return We(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}i=await r.load(e,s,this),o.parser=r;for(let u=0;u<this.parsers.length;u++){const g=this.parsers[u];g.parse&&g.parse&&await((l=g.testParse)==null?void 0:l.call(g,i,s,this))&&(i=await g.parse(i,s,this)||i,o.parser=g)}return i})(),o}async load(e,s){this._parsersValidated||this._validateParsers();let o=0;const i={},r=La(e),n=At(e,g=>({alias:[g],src:g,data:{}})),l=n.length,u=n.map(async g=>{const p=He.toAbsolute(g.src);if(!i[g.src])try{this.promiseCache[p]||(this.promiseCache[p]=this._getLoadPromiseAndParser(p,g)),i[g.src]=await this.promiseCache[p].promise,s&&s(++o/l)}catch(m){throw delete this.promiseCache[p],delete i[g.src],new Error(`[Loader.load] Failed to load ${p}.
${m}`)}});return await Promise.all(u),r?i[n[0].src]:i}async unload(e){const o=At(e,i=>({alias:[i],src:i})).map(async i=>{var l,u;const r=He.toAbsolute(i.src),n=this.promiseCache[r];if(n){const g=await n.promise;delete this.promiseCache[r],await((u=(l=n.parser)==null?void 0:l.unload)==null?void 0:u.call(l,g,i,this))}});await Promise.all(o)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&We(`[Assets] loadParser name conflict "${s.name}"`):We("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function ct(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const gn=".json",vn="application/json",mn={extension:{type:C.LoadParser,priority:nt.Low},name:"loadJson",test(t){return ct(t,vn)||lt(t,gn)},async load(t){return await(await ue.get().fetch(t)).json()}},bn=".txt",xn="text/plain",yn={name:"loadTxt",extension:{type:C.LoadParser,priority:nt.Low,name:"loadTxt"},test(t){return ct(t,xn)||lt(t,bn)},async load(t){return await(await ue.get().fetch(t)).text()}},_n=["normal","bold","100","200","300","400","500","600","700","800","900"],wn=[".ttf",".otf",".woff",".woff2"],An=["font/ttf","font/otf","font/woff","font/woff2"],kn=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function jn(t){const e=He.extname(t),i=He.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(l=>l.charAt(0).toUpperCase()+l.slice(1));let r=i.length>0;for(const l of i)if(!l.match(kn)){r=!1;break}let n=i.join(" ");return r||(n=`"${n.replace(/[\\"]/g,"\\$&")}"`),n}const Sn=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function En(t){return Sn.test(t)?t:encodeURI(t)}const Tn={extension:{type:C.LoadParser,priority:nt.Low},name:"loadWebFont",test(t){return ct(t,An)||lt(t,wn)},async load(t,e){var o,i,r;const s=ue.get().getFontFaceSet();if(s){const n=[],l=((o=e.data)==null?void 0:o.family)??jn(t),u=((r=(i=e.data)==null?void 0:i.weights)==null?void 0:r.filter(p=>_n.includes(p)))??["normal"],g=e.data??{};for(let p=0;p<u.length;p++){const m=u[p],v=new FontFace(l,`url(${En(t)})`,{...g,weight:m});await v.load(),s.add(v),n.push(v)}return Pe.set(`${l}-and-url`,{url:t,fontFaces:n}),n.length===1?n[0]:n}return We("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{Pe.remove(`${e.family}-and-url`),ue.get().getFontFaceSet().delete(e)})}};function vo(t,e=1){var o;const s=(o=Dt.RETINA_PREFIX)==null?void 0:o.exec(t);return s?parseFloat(s[1]):e}function mo(t,e,s){t.label=s,t._sourceOrigin=s;const o=new Ge({source:t,label:s}),i=()=>{delete e.promiseCache[s],Pe.has(s)&&Pe.remove(s)};return o.source.once("destroy",()=>{e.promiseCache[s]&&(We("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),i())}),o.once("destroy",()=>{t.destroyed||(We("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),i())}),o}const Ln=".svg",$n="image/svg+xml",Rn={extension:{type:C.LoadParser,priority:nt.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return ct(t,$n)||lt(t,Ln)},async load(t,e,s){var o;return((o=e.data)==null?void 0:o.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?On(t):Pn(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function Pn(t,e,s,o){var H,L,P;const r=await(await ue.get().fetch(t)).blob(),n=URL.createObjectURL(r),l=new Image;l.src=n,l.crossOrigin=o,await l.decode(),URL.revokeObjectURL(n);const u=document.createElement("canvas"),g=u.getContext("2d"),p=((H=e.data)==null?void 0:H.resolution)||vo(t),m=((L=e.data)==null?void 0:L.width)??l.width,v=((P=e.data)==null?void 0:P.height)??l.height;u.width=m*p,u.height=v*p,g.drawImage(l,0,0,m*p,v*p);const{parseAsGraphicsContext:j,...T}=e.data??{},te=new $a({resource:u,alphaMode:"premultiply-alpha-on-upload",resolution:p,...T});return mo(te,s,t)}async function On(t){const s=await(await ue.get().fetch(t)).text(),o=new Fr;return o.svg(s),o}const In=`(function () {
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
`;let it=null,po=class{constructor(){it||(it=URL.createObjectURL(new Blob([In],{type:"application/javascript"}))),this.worker=new Worker(it)}};po.revokeObjectURL=function(){it&&(URL.revokeObjectURL(it),it=null)};const Cn=`(function () {
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
`;let rt=null;class Ua{constructor(){rt||(rt=URL.createObjectURL(new Blob([Cn],{type:"application/javascript"}))),this.worker=new Worker(rt)}}Ua.revokeObjectURL=function(){rt&&(URL.revokeObjectURL(rt),rt=null)};let ya=0,ao;class Bn{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new po;s.addEventListener("message",o=>{s.terminate(),po.revokeObjectURL(),e(o.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var o;return this._run("loadImageBitmap",[e,(o=s==null?void 0:s.data)==null?void 0:o.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){ao===void 0&&(ao=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<ao&&(this._createdWorkers++,e=new Ua().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const o=new Promise((i,r)=>{this._queue.push({id:e,arguments:s,resolve:i,reject:r})});return this._next(),o}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),o=s.id;this._resolveHash[ya]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:ya++,id:o})}}const _a=new Bn,Fn=[".jpeg",".jpg",".png",".webp",".avif"],Mn=["image/jpeg","image/png","image/webp","image/avif"];async function Wn(t,e){var i;const s=await ue.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const o=await s.blob();return((i=e==null?void 0:e.data)==null?void 0:i.alphaMode)==="premultiplied-alpha"?createImageBitmap(o,{premultiplyAlpha:"none"}):createImageBitmap(o)}const Ga={name:"loadTextures",extension:{type:C.LoadParser,priority:nt.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return ct(t,Mn)||lt(t,Fn)},async load(t,e,s){var r;let o=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await _a.isImageBitmapSupported()?o=await _a.loadImageBitmap(t,e):o=await Wn(t,e):o=await new Promise((n,l)=>{o=new Image,o.crossOrigin=this.config.crossOrigin,o.src=t,o.complete?n(o):(o.onload=()=>{n(o)},o.onerror=l)});const i=new $a({resource:o,alphaMode:"premultiply-alpha-on-upload",resolution:((r=e.data)==null?void 0:r.resolution)||vo(t),...e.data});return mo(i,s,t)},unload(t){t.destroy(!0)}},Ha=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],zn=Ha.map(t=>`video/${t.substring(1)}`);function Nn(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=Un(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function Dn(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",o),t.addEventListener("error",i),t.load();function o(){r(),e()}function i(n){r(),s(n)}function r(){t.removeEventListener("canplaythrough",o),t.removeEventListener("error",i)}})}function Un(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const Gn={name:"loadVideo",extension:{type:C.LoadParser,name:"loadVideo"},test(t){const e=ct(t,zn),s=lt(t,Ha);return e||s},async load(t,e,s){var u,g;const o={...Js.defaultOptions,resolution:((u=e.data)==null?void 0:u.resolution)||vo(t),alphaMode:((g=e.data)==null?void 0:g.alphaMode)||await Or(),...e.data},i=document.createElement("video"),r={preload:o.autoLoad!==!1?"auto":void 0,"webkit-playsinline":o.playsinline!==!1?"":void 0,playsinline:o.playsinline!==!1?"":void 0,muted:o.muted===!0?"":void 0,loop:o.loop===!0?"":void 0,autoplay:o.autoPlay!==!1?"":void 0};Object.keys(r).forEach(p=>{const m=r[p];m!==void 0&&i.setAttribute(p,m)}),o.muted===!0&&(i.muted=!0),Nn(i,t,o.crossorigin);const n=document.createElement("source");let l;if(t.startsWith("data:"))l=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const p=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();l=Js.MIME_TYPES[p]||`video/${p}`}return n.src=t,l&&(n.type=l),new Promise(p=>{const m=async()=>{const v=new Js({...o,resource:i});i.removeEventListener("canplay",m),e.data.preload&&await Dn(i),p(mo(v,s,t))};i.addEventListener("canplay",m),i.appendChild(n)})},unload(t){t.destroy(!0)}},Va={extension:{type:C.ResolveParser,name:"resolveTexture"},test:Ga.test,parse:t=>{var e;return{resolution:parseFloat(((e=Dt.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},Hn={extension:{type:C.ResolveParser,priority:-2,name:"resolveJson"},test:t=>Dt.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:Va.parse};class Vn{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Dt,this.loader=new hn,this.cache=Pe,this._backgroundLoader=new an(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var r,n;if(this._initialized){We("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let l=e.manifest;typeof l=="string"&&(l=await this.load(l)),this.resolver.addManifest(l)}const s=((r=e.texturePreference)==null?void 0:r.resolution)??1,o=typeof s=="number"?[s]:s,i=await this._detectFormats({preferredFormats:(n=e.texturePreference)==null?void 0:n.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:i,resolution:o}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const o=La(e),i=At(e).map(l=>{if(typeof l!="string"){const u=this.resolver.getAlias(l);return u.some(g=>!this.resolver.hasKey(g))&&this.add(l),Array.isArray(u)?u[0]:u}return this.resolver.hasKey(l)||this.add({alias:l,src:l}),l}),r=this.resolver.resolve(i),n=await this._mapLoadToResolve(r,s);return o?n[i[0]]:n}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let o=!1;typeof e=="string"&&(o=!0,e=[e]);const i=this.resolver.resolveBundle(e),r={},n=Object.keys(i);let l=0,u=0;const g=()=>{s==null||s(++l/u)},p=n.map(m=>{const v=i[m];return u+=Object.keys(v).length,this._mapLoadToResolve(v,g).then(j=>{r[m]=j})});return await Promise.all(p),o?r[e[0]]:r}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(o=>{this._backgroundLoader.add(Object.values(o))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Pe.get(e);const s={};for(let o=0;o<e.length;o++)s[o]=Pe.get(e[o]);return s}async _mapLoadToResolve(e,s){const o=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const i=await this.loader.load(o,s);this._backgroundLoader.active=!0;const r={};return o.forEach(n=>{const l=i[n.src],u=[n.src];n.alias&&u.push(...n.alias),u.forEach(g=>{r[g]=l}),Pe.set(u,l)}),r}async unload(e){this._initialized||await this.init();const s=At(e).map(i=>typeof i!="string"?i.src:i),o=this.resolver.resolve(s);await this._unloadFromResolved(o)}async unloadBundle(e){this._initialized||await this.init(),e=At(e);const s=this.resolver.resolveBundle(e),o=Object.keys(s).map(i=>this._unloadFromResolved(s[i]));await Promise.all(o)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(o=>{Pe.remove(o.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const o of e.detections)e.skipDetections||await o.test()?s=await o.add(s):e.skipDetections||(s=await o.remove(s));return s=s.filter((o,i)=>s.indexOf(o)===i),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(o=>o in e).forEach(o=>{s.config[o]=e[o]})})}}const at=new Vn;ze.handleByList(C.LoadParser,at.loader.parsers).handleByList(C.ResolveParser,at.resolver.parsers).handleByList(C.CacheParser,at.cache.parsers).handleByList(C.DetectionParser,at.detections);ze.add(rn,ln,nn,un,dn,pn,fn,mn,yn,Tn,Rn,Ga,Gn,on,sn,Va,Hn);const wa={loader:C.LoadParser,resolver:C.ResolveParser,cache:C.CacheParser,detection:C.DetectionParser};ze.handle(C.Asset,t=>{const e=t.ref;Object.entries(wa).filter(([s])=>!!e[s]).forEach(([s,o])=>ze.add(Object.assign(e[s],{extension:e[s].extension??o})))},t=>{const e=t.ref;Object.keys(wa).filter(s=>!!e[s]).forEach(s=>ze.remove(e[s]))});class Yn extends Ir{constructor(e,s){const{text:o,resolution:i,style:r,anchor:n,width:l,height:u,roundPixels:g,...p}=e;super({...p}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=o??"",this.style=r,this.resolution=i??null,this.allowChildren=!1,this._anchor=new Cr({_onUpdate:()=>{this.onViewUpdate()}}),n&&(this.anchor=n),this.roundPixels=g??!1,l!==void 0&&(this.width=l),u!==void 0&&(this.height=u)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,o=this.bounds.height,i=-s*this.anchor.x;let r=0;return e.x>=i&&e.x<=i+s&&(r=-o*this.anchor.y,e.y>=r&&e.y<=r+o)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function Xn(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(Mt(Wt,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class Kn extends Yn{constructor(...e){const s=Xn(e,"Text");super(s,Ra),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,o=Mr.measureText(this._text,this._style),{width:i,height:r}=o;e.minX=-s._x*i,e.maxX=e.minX+i,e.minY=-s._y*r,e.maxY=e.minY+r}}const Qn="1.1.8",Zn={version:Qn};var qn=Q('<div class="win-label svelte-27a1cu">BIG WIN!</div> <div class="win-amount-display svelte-27a1cu"> </div>',1),Jn=ka('<use href="#sparkle" class="sparkle svelte-27a1cu"></use>'),el=ka('<use href="#vinyl"></use>'),tl=Q('<div><!> <svg class="vinyl-canvas svelte-27a1cu" viewBox="0 0 1024 800" xmlns="http://www.w3.org/2000/svg"><defs class="svelte-27a1cu"><symbol id="vinyl" viewBox="-200 -200 400 400" class="svelte-27a1cu"><circle cx="0" cy="0" r="180" fill="#0b0b0b" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="150" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.3" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="120" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.25" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="90" fill="none" stroke="#1a1a1a" stroke-width="1.5" opacity="0.2" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="55" fill="var(--label-color)" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="6" fill="#ffffff" class="svelte-27a1cu"></circle><ellipse cx="-15" cy="-15" rx="20" ry="15" fill="#ffffff" opacity="0.3" transform="rotate(-30)" class="svelte-27a1cu"></ellipse></symbol><symbol id="sparkle" viewBox="-12 -12 24 24" class="svelte-27a1cu"><polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ffd966" class="svelte-27a1cu"></polygon><circle cx="0" cy="0" r="2" fill="#ffffff" class="svelte-27a1cu"></circle></symbol><symbol id="confetti" viewBox="-3 -3 6 6" class="svelte-27a1cu"><circle cx="0" cy="0" r="2" fill="var(--confetti-color)" class="svelte-27a1cu"></circle></symbol></defs><!><!></svg></div>');function sl(t,e){fo(e,!0);let s=ro(e,"winLevel",3,"small"),o=ro(e,"winAmount",3,0),i=R(!1),r=R(!1);const n={small:{vinyls:5,sparkles:8,maxRadius:100},medium:{vinyls:12,sparkles:16,maxRadius:140},jackpot:{vinyls:24,sparkles:30,maxRadius:180}},l=Ue(()=>n[s()]),u=["#f04e37","#ffd966","#ff8533","#4ecdc4","#ff6b9d"];function g(P){const X=[],Se=a(l).maxRadius;for(let de=0;de<P;de++){const ke=Math.PI*2*de/P+Math.random()*.4,pe=Math.random()*Se*.7+Se*.2;X.push({x:512+Math.cos(ke)*pe,y:400+Math.sin(ke)*pe,rotation:Math.random()*30-15,scale:.3+Math.random()*.25,delay:de*.05,color:u[de%u.length]})}return X}function p(P){const X=[];for(let ae=0;ae<P;ae++)X.push({x:100+Math.random()*824,y:50+Math.random()*700,delay:Math.random()*.8,duration:.6+Math.random()*.4,rotation:Math.random()*360});return X}const m=Ue(()=>g(a(l).vinyls)),v=Ue(()=>p(a(l).sparkles));function j(){y(i,!0),y(r,!0),setTimeout(()=>{y(r,!1),setTimeout(()=>{var P;y(i,!1),(P=e.onComplete)==null||P.call(e)},500)},s()==="jackpot"?4e3:s()==="medium"?3e3:2500)}function T(){y(r,!1),setTimeout(()=>{y(i,!1)},500)}var te=Aa(),H=Oe(te);{var L=P=>{var X=tl();let ae;var ce=b(X);{var Se=se=>{var ie=qn(),xe=d(Oe(ie),2),Ie=b(xe,!0);x(xe),ne(kt=>W(Ie,kt),[()=>o().toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),N(se,ie)};le(ce,se=>{o()>0&&se(Se)})}var de=d(ce,2),ke=d(b(de));Nt(ke,17,()=>a(v),zt,(se,ie)=>{var xe=Jn();ne(()=>k(xe,"style",`
            --sx: ${a(ie).x??""}px;
            --sy: ${a(ie).y??""}px;
            --duration: ${a(ie).duration??""}s;
            --sparkle-delay: ${a(ie).delay??""}s;
          `)),N(se,xe)});var pe=d(ke);Nt(pe,17,()=>a(m),zt,(se,ie)=>{var xe=el();let Ie;ne(()=>{Ie=no(xe,0,"vinyl-group svelte-27a1cu",null,Ie,{floating:a(r)}),k(xe,"style",`
            --tx: ${a(ie).x??""}px;
            --ty: ${a(ie).y??""}px;
            --scale: ${a(ie).scale??""};
            --rotation: ${a(ie).rotation??""}deg;
            --delay: ${a(ie).delay??""}s;
            --label-color: ${a(ie).color??""};
          `)}),N(se,xe)}),x(de),x(X),ne(()=>ae=no(X,1,"vinyl-win-container svelte-27a1cu",null,ae,{visible:a(r),hiding:!a(r)})),N(P,X)};le(H,P=>{a(i)&&P(L)})}return N(t,te),uo({show:j,hide:T})}var ol=sr('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-tijp0o"><\/script><!---->',1),al=Q('<p style="color: red;" class="svelte-tijp0o"><strong class="svelte-tijp0o">Error:</strong> </p>'),il=Q('<div class="svelte-tijp0o"> </div>'),rl=Q('<details class="svelte-tijp0o"><summary class="svelte-tijp0o"> </summary> <!></details>'),nl=Q(`<div style="
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
  " class="svelte-tijp0o"><h3 class="svelte-tijp0o">🎰 Oma-peli Debug</h3> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Status:</strong> </p> <!> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Base:</strong> </p> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">BG URL:</strong> </p> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Sample:</strong> </p> <!></div>`),ll=Q('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-tijp0o"> </div>'),cl=Q('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-tijp0o"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-tijp0o"> </span></div>'),dl=Q(`<div style="
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
      " class="svelte-tijp0o">Jatka pelaamista</button></div>`),pl=Q(`<div style="
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
  " class="svelte-tijp0o"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-tijp0o">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-tijp0o">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-tijp0o"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-tijp0o"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-tijp0o">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-tijp0o">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-tijp0o">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-tijp0o">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-tijp0o">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-tijp0o">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-tijp0o"> <span style="color: #ffd700;" class="svelte-tijp0o">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-tijp0o">Sulje</button></div>`),fl=Q('<div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #ff00ff; font-size: 16px; animation: pulse 1s infinite;" class="svelte-tijp0o"><span class="svelte-tijp0o">🎰 FREE SPINS:</span> <span class="svelte-tijp0o"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-top: 1px solid #555; padding-top: 8px;" class="svelte-tijp0o"><span style="color: #fff; font-size: 14px;" class="svelte-tijp0o">Total Won:</span> <span style="color: #00ff00; font-size: 14px;" class="svelte-tijp0o"> </span></div>',1),ul=Q(`<div style="
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
        " class="svelte-tijp0o"><div style="
            color: #ffd700;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            border-bottom: 1px solid #444;
            padding-bottom: 5px;
          " class="svelte-tijp0o">SPIN SPEED</div> <button class="svelte-tijp0o">🐌 SLOW</button> <button class="svelte-tijp0o">⚡ MEDIUM</button> <button class="svelte-tijp0o">🚀 FAST</button></div>`),hl=Q(`<div style="
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
        " class="svelte-tijp0o">⏹ STOP</button></div>`),gl=Q(`<div style="
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
          " class="svelte-tijp0o">Cancel</button></div>`),vl=Q(`<button style="
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
      " class="svelte-tijp0o">🔄 AUTOPLAY</button> <!>`,1),ml=Q(`<!> <!> <!> <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #000;
" class="svelte-tijp0o"><div class="svelte-tijp0o"><div class="svelte-tijp0o"></div> <div class="svelte-tijp0o"><!> <div style="display: flex; justify-content: space-between; margin-bottom: 8px;" class="svelte-tijp0o"><span style="color: #fff;" class="svelte-tijp0o">CREDITS:</span> <span style="color: #ffd700;" class="svelte-tijp0o"> </span></div> <div style="display: flex; justify-content: space-between; border-top: 1px solid #555; padding-top: 8px;" class="svelte-tijp0o"><span style="color: #fff;" class="svelte-tijp0o">BET:</span> <span style="color: #00ff00;" class="svelte-tijp0o"> </span></div></div> <div style="
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.85);
  padding: 15px;
  border-radius: 10px;
  border: 2px solid #00ff00;
  z-index: 1500;
" class="svelte-tijp0o"><div style="color: white; font-size: 14px; margin-bottom: 10px; text-align: center; font-weight: bold;" class="svelte-tijp0o">BET CONTROLS</div> <div style="display: flex; gap: 10px; align-items: center;" class="svelte-tijp0o"><button style="
        padding: 8px 15px;
        background: #ff4444;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: background 0.2s;
      " class="bet-btn-minus svelte-tijp0o">-</button> <div style="
      color: #00ff00;
      font-family: 'Courier New', monospace;
      font-size: 20px;
      font-weight: bold;
      min-width: 60px;
      text-align: center;
      background: rgba(0, 255, 0, 0.1);
      padding: 5px 10px;
      border-radius: 5px;
    " class="svelte-tijp0o"> </div> <button style="
        padding: 8px 15px;
        background: #44ff44;
        color: #000;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: background 0.2s;
      " class="bet-btn-plus svelte-tijp0o">+</button> <button style="
        padding: 8px 12px;
        background: #ffd700;
        color: #000;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        transition: background 0.2s;
      " class="bet-btn-max svelte-tijp0o">MAX</button></div></div> <button style="
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
  " class="svelte-tijp0o">💰 PAYTABLE</button>  <div class="control-panel-mobile svelte-tijp0o"><img alt="Left End" class="svelte-tijp0o"> <div class="svelte-tijp0o"><div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-tijp0o"><div style="color: #00ff00; font-size: 12px; font-weight: bold;" class="svelte-tijp0o">BET</div> <div style="display: flex; gap: 5px; align-items: center;" class="svelte-tijp0o"><button title="Decrease Bet" class="svelte-tijp0o"></button> <div style="
          color: #fff;
          font-size: 18px;
          font-weight: bold;
          min-width: 80px;
          text-align: center;
          font-family: 'Courier New', monospace;
        " class="svelte-tijp0o"> </div> <button title="Increase Bet" class="svelte-tijp0o"></button></div></div> <img alt="Divider" class="svelte-tijp0o"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-tijp0o"><div style="color: #00ff00; font-size: 12px; font-weight: bold;" class="svelte-tijp0o">BALANCE</div> <div style="
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      " class="svelte-tijp0o"> </div></div> <img alt="Divider" class="svelte-tijp0o"> <div style="position: relative; display: flex; align-items: center; justify-content: center; flex-grow: 0.5;" class="svelte-tijp0o"><div><button title="SPIN" class="svelte-tijp0o"></button></div></div> <img alt="Divider" class="svelte-tijp0o"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-tijp0o"><button title="Autoplay" class="svelte-tijp0o"></button> <img alt="Status bar" style="width: 50px; height: auto;" class="svelte-tijp0o"></div> <img alt="Divider" class="svelte-tijp0o"> <div style="position: relative; display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-tijp0o"><button class="svelte-tijp0o"></button> <div style="
        color: #ffffff;
        font-size: 10px;
        font-weight: bold;
        text-transform: uppercase;
      " class="svelte-tijp0o"> </div> <!></div> <img alt="Divider" class="svelte-tijp0o"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-tijp0o"><button title="Fast Play" class="svelte-tijp0o"></button> <img alt="Status bar" style="width: 50px; height: auto;" class="svelte-tijp0o"></div> <img alt="Divider" class="svelte-tijp0o"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-tijp0o"><div style="color: #00ff00; font-size: 12px; font-weight: bold;" class="svelte-tijp0o">WIN</div> <div style="
        color: #ffd700;
        font-size: 20px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      " class="svelte-tijp0o"> </div></div> <img alt="Divider" class="svelte-tijp0o"> <button title="Menu" class="svelte-tijp0o"></button></div> <img alt="Right End" class="svelte-tijp0o"></div> <!>  <div class="debug-panel svelte-tijp0o" style="
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
"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-tijp0o">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-tijp0o"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Rounds:</span> <span style="color: #fff;" class="svelte-tijp0o"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Wagered:</span> <span style="color: #ff6666;" class="svelte-tijp0o"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Won:</span> <span style="color: #66ff66;" class="svelte-tijp0o"> </span></div> <div style="
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
  " class="svelte-tijp0o"><button class="svelte-tijp0o"> </button> <button class="svelte-tijp0o">Clear Win Log</button> <button class="svelte-tijp0o"> </button> <button class="svelte-tijp0o">🎰 Test Free Spins</button></div></div> <div class="debug-panel svelte-tijp0o" style="
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1500;
"><!></div> <button class="debug-panel svelte-tijp0o"> </button></div></div>`,1);function bl(t,e){fo(e,!0);const s=Zn.version,o=13,i=1445,r=1e3,n=1.75,l=-30,u=-10,g=160,p=0,m=750,v=80,j=250,T=-230,te=-390,H=1,L=1.1,P=.5,X=40,ae=0,ce=-40,Se=1,de="height",pe=Math.round(100*n),se=Math.round(pe*(700/760)),xe=se+10,Ie=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],kt=typeof window<"u"&&window.location.hostname.includes("github.io"),oe=kt?"/web-sdk/oma-peli/symbols":`${je}/symbols`,Z=kt?"/web-sdk/oma-peli/controls":`${je}/controls`,Ut={a:`${oe}/Blue_hotrod.jpg`,b:`${oe}/Blue_jacket.jpg`,c:`${oe}/Blue_rollers.jpg`,d:`${oe}/Blue_speakers.jpg`,e:`${oe}/Premium_blonde.jpg`,f:`${oe}/Premium_brunette.jpg`,g:`${oe}/Premium_rocker.jpg`,h:`${oe}/New_Wild.jpg`,i:`${oe}/Red_burger.jpg`,j:`${oe}/Red_fries.jpg`,k:`${oe}/Red_milkshake.jpg`,l:`${oe}/Scatter.jpg`,emptyslot:`${oe}/Emptyslot.jpg`},Gt=`${oe}/bg_base.jpg`,bo=`${oe}/ReelFrames.png`,xo=`${oe}/RockABillyReels_logo.png`,Ya={spin:`${je}/sounds/spin.mp3`,stop:`${je}/sounds/stop.mp3`,win:`${je}/sounds/win.mp3`};let Ee=R(!0),Ht={},V=null,he=null,Vt=null,Yt=null;const Xa=60/130,Ka=Math.round(Xa*60);let ye=R(!0),Qa=R(!1),jt=R(!1),Xt=R(945),Kt=null,K=R("medium"),Ve=R(!1);const yo=Math.floor(Math.random()*20)+1,St={background:`${je}/music/rockabilly reels loop ${yo}.mp3`,freeSpins:`${je}/music/rockabilly-loop_long.mp3`,drumHit:`${je}/music/drum-hit.mp3`,winTheme:`${je}/music/win-stinger.mp3`};function _o(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(_o,500);return}const c=window.Howl;try{V=new c({src:[St.background],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+yo+")"),y(Qa,!0)},onloaderror:(f,w)=>{console.warn("⚠️ Background music not found:",w)}}),he=new c({src:[St.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(f,w)=>console.warn("⚠️ Free spins music not found:",w)}),Vt=new c({src:[St.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Yt=new c({src:[St.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(f){console.error("Failed to initialize music system:",f)}}function wo(){const c=a(Y)?he:V;c&&a(ye)&&!c.playing()&&(c.play(),console.log("🎵 "+(a(Y)?"Free spins":"Background")+" music started"))}function Za(){V&&V.playing()&&(V.fade(V.volume(),0,500),setTimeout(()=>V.stop(),500)),he&&he.playing()&&(he.fade(he.volume(),0,500),setTimeout(()=>he.stop(),500))}function Qt(){V&&V.playing()&&(V.fade(V.volume(),0,500),setTimeout(()=>V.stop(),500)),he&&he.playing()&&(he.fade(he.volume(),0,500),setTimeout(()=>he.stop(),500)),setTimeout(()=>{a(ye)&&wo()},600)}function qa(){if(V&&V.playing()){const c=V.volume();V.fade(c,0,1e3),setTimeout(()=>{V.stop(),V.volume(.3)},1e3)}}let Zt=R(!1);function Ja(){y(Zt,!1),setTimeout(()=>{y(Zt,!0)},10)}let Ye=null;function ei(){y(ye,!a(ye)),a(ye)?wo():Za()}function ti(){Vt&&a(ye)&&a(Ee)&&Vt.play()}function si(){Yt&&a(ye)&&a(Ee)&&Yt.play()}let Et=null,Xe=null,dt=null,pt=null,ft=R("Initializing..."),Ke=R(""),_e=[],Te=R(1e3),q=R(10);const Ao=1,qt=100;let ge=R(!1),Qe=R(0),Ne=R(!1),oi=R(0),De=!1,Le=null,Jt=!1,Ze=R(0),qe=R(0),ut=R(0),es=R(0),ts=Ue(()=>a(qe)>0?(a(ut)/a(qe)*100).toFixed(2):"0.00"),ss=Ue(()=>a(Ze)>0?(a(es)/a(Ze)*100).toFixed(2):"0.00"),Y=R(!1),$e=R(0),Ce=R(0),Tt=R(0),os=R(0),Lt=R(0),as=R(0),ai=Ue(()=>a(Lt)>0?(a(as)/a(Lt)*100).toFixed(2):"0.00"),ve=R(be([]));function ii(c,f,w){const h=new Date().toLocaleString("fi-FI");let _=`
${"=".repeat(60)}
`;_+=`ROUND #${c} - ${h}
`,_+=`Mode: ${a(Y)?"FREE SPINS":"BASE GAME"}
`,_+=`${"=".repeat(60)}
`,f.forEach((A,E)=>{_+=`
Win ${E+1}:
`,_+=`  Symbol: ${A.symbol} (${Eo[A.symbol]})
`,_+=`  Count: ${A.count} symbols
`,_+=`  Multiplier: ${A.multiplier}x
`,_+=`  Payout: ${A.payout.toFixed(2)}
`,_+=`  Positions: [${A.positions.join(", ")}]
`}),_+=`
${"─".repeat(60)}
`,_+=`TOTAL WIN: ${w.toFixed(2)}
`,_+=`${"=".repeat(60)}
`,a(ve).push(_)}function ri(){const c=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${a(ve).join(`
`)}`,f=new Blob([c],{type:"text/plain"}),w=URL.createObjectURL(f),h=document.createElement("a");h.href=w,h.download=`win-log-${Date.now()}.txt`,h.click(),URL.revokeObjectURL(w)}function ni(){y(ve,be([]))}function li(){a(Y)||(y(Y,!0),y($e,10),y(Ce,0),Re(Tt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),Qt())}const ci={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},di={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function ko(c){if(c===6)return Math.random()<.55?"h":"emptyslot";const f=a(Y)?di:ci,w=Math.random();let h=0;const _=Ie.filter(E=>E!=="h"),A=_.reduce((E,O)=>E+f[O],0);for(const E of _)if(h+=f[E]/A,w<h)return E;return"f"}function jo(){const c=[];for(let f=0;f<o;f++){const w=ko(f);c.push(w),Re(Lt),w==="emptyslot"&&Re(as)}return c}function So(c){return c<3?{col:0,row:c}:c<6?{col:1,row:c-3}:c===6?{col:2,row:0}:c<10?{col:3,row:c-7}:{col:4,row:c-10}}function ht(c,f){return c===0?f:c===1?3+f:c===2?6:c===3?7+f:c===4?10+f:-1}function pi(){if(a(Y)){const c=Math.random();return c<.7?3:c<.92?5:10}else{const c=Math.random();return c<.7?1:c<.92?2:3}}const fi={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function ui(){var G;const c=[],f=[];for(let S=0;S<o;S++)gt[S]==="l"&&f.push(S);if(f.length>=5){const S=f.length;y($e,a($e)+S),a(Y)?console.log(`🎰 FREE SPINS RETRIGGERED! +${S} FREE SPINS! Total: ${a($e)}`):(y(Y,!0),y(Ce,0),Re(Tt),console.log(`🎰 FREE SPINS TRIGGERED! ${f.length} scatters = ${S} FREE SPINS!`),Qt()),c.push({symbol:"l",count:f.length,payout:0,positions:f,multiplier:1})}const w=[];for(let S=0;S<3;S++)for(let $=0;$<3;$++)for(let B=0;B<1;B++)for(let F=0;F<3;F++)for(let M=0;M<3;M++){const z=[ht(0,S),ht(1,$),ht(2,B),ht(3,F),ht(4,M)];w.push(z)}console.log(`Generated ${w.length} possible paths (should be 81)`);const h=[];for(const S of w){const $=S.map(z=>gt[z]);if($[0]==="emptyslot"||$[0]==="l")continue;let B=null;for(let z=0;z<$.length;z++)if($[z]!=="h"&&$[z]!=="emptyslot"&&$[z]!=="l"){B=$[z];break}if(!B)continue;let F=0;const M=new Set;for(let z=0;z<S.length;z++){const Fe=S[z],{col:ot}=So(Fe),fe=$[z];(fe===B||fe==="h")&&M.add(ot)}for(let z=0;z<5&&M.has(z);z++)F++;if(F>=3){const Fe=S[0]%3;h.push({symbol:B,length:F,path:S.slice(0,F),startRow:Fe})}}const _=[],A=new Map;for(const S of h){const $=`${S.symbol}-${S.path.join(",")}`;A.has($)||A.set($,[]),A.get($).push(S)}for(const[S,$]of A.entries()){const B=Math.max(...$.map(M=>M.length)),F=$.find(M=>M.length===B);F&&_.push(F)}const E=[],O=new Map;for(const S of _)O.has(S.symbol)||O.set(S.symbol,[]),O.get(S.symbol).push(S);const U=[];for(const[S,$]of O.entries()){const B=Math.max(...$.map(M=>M.length)),F=$.filter(M=>M.length===B);U.push(...F)}const J=new Map;for(const S of U){const $=`${S.symbol}-${S.length}`;J.has($)||J.set($,[]),J.get($).push(S)}const ee=U.length>0?pi():1;for(const[S,$]of J.entries()){const B=$[0],F=(G=fi[B.symbol])==null?void 0:G[B.length];if(F!==void 0&&F>0){const M=new Map;for(const fe of $)for(let re=0;re<fe.length;re++)M.has(re)||M.set(re,new Set),M.get(re).add(fe.path[re]);let z=1;for(let fe=0;fe<B.length;fe++){const re=M.get(fe);z*=re?re.size:1}const Fe=F*a(q)*z*ee;console.log(`  ${B.length}x${B.symbol}: ${z} ways × ${F}x × ${a(q)} bet × ${ee} mult = ${Fe}`);const ot=new Set;for(const fe of $)fe.path.forEach(re=>ot.add(re));E.push({symbol:B.symbol,count:B.length,payout:Fe,positions:Array.from(ot),multiplier:ee})}}return c.push(...E),c}let me=R(0),Je=R(be([])),Be=R(!1),et=R(!1);const Eo={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function is(c){if(!a(Ee)||!Ht[c])return;const f=Ht[c];f.currentTime=0,f.play().catch(w=>{console.warn("Äänen toisto epäonnistui:",c,w)})}function hi(c){vt.forEach(f=>D.stage.removeChild(f)),vt=[],c.forEach(f=>{f.positions.forEach(w=>{const h=tt[w],_=new eo().rect(0,0,pe,se).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});_.x=h.container.x,_.y=h.container.y,D.stage.addChild(_),vt.push(_);let A=0,E=1;const O=.05;D.ticker.add(()=>{A+=E*O,A>=.4&&(E=-1),A<=0&&(E=1),_.alpha=.5+A})})})}function rs(){vt.forEach(c=>D.stage.removeChild(c)),vt=[]}let gt=jo(),ns,D,tt=[],vt=[];class gi{constructor(f,w){we(this,"index");we(this,"container");we(this,"offset",0);we(this,"speed",0);we(this,"targetSpeed",30);we(this,"state","idle");we(this,"stopDelay",0);we(this,"bounceOffset",0);we(this,"bounceSpeed",0);we(this,"bounceFrames",0);this.index=f,this.container=w}start(f){this.state="spinning",this.speed=0,a(K)==="slow"?this.targetSpeed=20:a(K)==="medium"?this.targetSpeed=35:this.targetSpeed=50,this.stopDelay=f}startSynchronized(f){const w=60+f*Ka;this.start(w)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const f=a(K)==="slow"?.88:a(K)==="medium"?.92:.95;this.speed*=f,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,is("stop"),ti())}this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=xe&&(this.offset=0,gt[this.index]=ko(this.index)))}}draw(){const f=this.container;f.removeChildren();const w=gt[this.index];if(!w||!Et||!Et[w])return;const h=Et[w];if(!h)return;const _=this.offset+this.bounceOffset,A=new Ct(h);A.width=pe,A.height=se,A.x=0,A.y=_,f.addChild(A)}}let mt=R(1);Ta(async()=>{D=new za,await D.init({width:i,height:r,background:"#001a33"}),ns.appendChild(D.canvas);const c=()=>{const h=window.innerWidth,_=window.innerHeight,A=h/i,E=_/r,O=Math.min(A,E,1);y(mt,be(O)),D.stage.scale.set(O),D.renderer.resize(i*O,r*O)};c(),window.addEventListener("resize",c);const f={};try{y(ft,"Loading background and UI images..."),_e.push(`Loading background: ${Gt}`),_e.push(`Loading reel frames: ${bo}`),_e.push(`Loading logo: ${xo}`),await at.load([{alias:"background",src:Gt},{alias:"reelframes",src:bo},{alias:"logo",src:xo}]),Xe=Ge.from("background"),dt=Ge.from("reelframes"),pt=Ge.from("logo"),console.log("✅ Background texture created:",Xe.width,"x",Xe.height),console.log("✅ Reel frames texture created:",dt.width,"x",dt.height),console.log("✅ Logo texture created:",pt.width,"x",pt.height),_e.push("✅ All UI images loaded"),y(ft,"Loading symbols...");const h=[];for(const _ of Ie)h.push({alias:_,src:Ut[_]});await at.load(h);for(const _ of Ie){const A=Ut[_];_e.push(`Loading symbol ${_}: ${A}`);try{const E=Ge.from(_);f[_]=E,console.log(`✅ Symbol ${_} loaded:`,E.width,"x",E.height),_e.push(`✅ Symbol ${_} loaded`)}catch(E){const O=`❌ Failed to load symbol ${_} from ${A}: ${E}`;throw _e.push(O),console.error(O),new Error(O)}}Et=f,y(ft,"Assets loaded successfully!")}catch(h){y(Ke,`Asset loading failed: ${h}`),_e.push(a(Ke)),console.error(a(Ke));return}console.log("Ladataan ääniefektit...");for(const[h,_]of Object.entries(Ya)){const A=new Audio;A.src=_,A.preload="auto",A.volume=.7,A.load(),A.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${_} (käytetään hiljaista placeholderia)`)}),Ht[h]=A}if(console.log("Taustakuva ladattu, tekstuuri:",Xe),Xe){const h=new Ct(Xe);D.renderer.width/D.renderer.height;const _=h.texture.width/h.texture.height;let A;A=D.renderer.height/h.texture.height,A*=Se,h.scale.set(A),h.x=(D.renderer.width-h.width)/2,h.y=(D.renderer.height-h.height)/2+ce,D.stage.addChild(h),console.log("Taustakuva lisätty:",de,"mode, size:",h.width.toFixed(0),"x",h.height.toFixed(0),"image aspect:",_.toFixed(2),"scale:",A.toFixed(2),"pos:",h.x.toFixed(0),h.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(h=>({x:h.x+l,y:h.y+u})),tt=[];for(let h=0;h<o;h++){const _=So(h),A=_.col,E=_.row,O=300+A*(pe+20),U=250+E*(se+15),J=h===6?O+p:O,ee=h===6?U+g:U,G=new ho;G.x=J+l,G.y=ee+u;const S=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],$=new eo().rect(0,0,pe,se).fill({color:S[h],alpha:.3});$.x=G.x,$.y=G.y,D.stage.addChild($);const B=new Ra({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),F=new Kn({text:h.toString(),style:B});F.x=G.x+5,F.y=G.y+5,D.stage.addChild(F);const M=new eo().rect(0,0,pe,se).fill(16777215);M.x=G.x,M.y=G.y,G.mask=M,D.stage.addChild(M),D.stage.addChild(G),tt.push(new gi(h,G))}if(dt){const h=new Ct(dt);h.scale.set(1),h.x=250,h.y=200,D.stage.addChild(h),Kt=h,y(Xt,be(h.width)),console.log("Reel frames lisätty:",h.width.toFixed(0),"x",h.height.toFixed(0)),console.log("Control panel leveys päivitetty:",a(Xt).toFixed(0))}if(pt){const h=new Ct(pt);h.scale.set(P),h.x=(D.renderer.width-h.width)/2+X,h.y=ae,D.stage.addChild(h),console.log("Logo lisätty päällimmäiseen layeriin:",h.width.toFixed(0),"x",h.height.toFixed(0))}_o(),D.ticker.add(vi)});function vi(){for(const c of tt)c.update(),c.draw();if(!a(Be)&&!Jt&&tt.every(c=>c.state==="stopped")){Jt=!0,qa();const c=ui();console.log(`Checking wins, found ${c.length} wins`),c.length>0?(y(Je,be(c)),y(me,be(c.reduce((f,w)=>f+w.payout,0))),ii(a(Ze),c,a(me)),mi(a(me)),y(Be,!0),y(oi,be(Date.now())),console.log(`🎉 VOITTO! ${a(me)} pistettä! Uusi saldo: ${a(Te)}`),console.log(`isShowingWin set to: ${a(Be)}, totalWin: ${a(me)}`),c.forEach(f=>{const w=f.multiplier?` (${f.multiplier}x multiplier)`:"";console.log(`${f.count}x ${f.symbol} = ${f.payout} pistettä${w}`)}),hi(c),is("win"),a(ge)&&!De&&(De=!0,Le=window.setTimeout(()=>{a(Be)&&a(ge)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),y(Be,!1),rs()),Le=window.setTimeout(()=>{De=!1,cs()},200)},1500))):(console.log("No wins found this spin"),a(ge)&&!De&&(De=!0,Le=window.setTimeout(()=>{De=!1,cs()},1e3))),a(Y)&&a($e)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${a(Ce)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${a(Ce).toFixed(2)}`),y(Y,!1),y(Ce,0),Qt()},2e3))}}function To(){if(V&&a(ye)&&!V.playing()&&(V.play(),console.log("🎵 Background music started on first spin")),Ja(),a(Y)&&a($e)>0)Re($e,-1),Re(os),console.log(`🎰 FREE SPIN! Remaining: ${a($e)}`);else if(!a(Y)){if(a(Te)<a(q)){alert(`Not enough credits! Balance: ${a(Te)}, Bet: ${a(q)}`),ls();return}y(Te,a(Te)-a(q)),Re(Ze),y(qe,a(qe)+a(q))}Le!==null&&(clearTimeout(Le),Le=null),y(Je,be([])),y(me,0),y(Be,!1),Jt=!1,rs(),gt=jo(),tt.forEach((c,f)=>{c.startSynchronized(f)}),is("spin")}function mi(c){if(y(Te,a(Te)+c),y(ut,a(ut)+c),a(Y)&&y(Ce,a(Ce)+c),c>0){Re(es);const f=c/a(q);f>=10&&si(),Ye&&(f>=50?Ye.show():f>=20?setTimeout(()=>Ye.show(),200):f>=10&&setTimeout(()=>Ye.show(),400))}}function Lo(){a(q)<qt&&y(q,be(Math.min(a(q)+1,qt)))}function $o(){a(q)>Ao&&y(q,be(Math.max(a(q)-1,Ao)))}function bi(){y(q,qt)}function bt(c){y(ge,!0),y(Qe,be(c)),y(Ne,!1),cs()}function ls(){y(ge,!1),y(Qe,0),De=!1,Le!==null&&(clearTimeout(Le),Le=null)}function cs(){if(!a(ge)||a(Qe)<=0){ls();return}console.log(`Autoplay: Starting spin ${a(Qe)} rounds left`),To(),Re(Qe,-1)}function xi(){confirm("Reset all statistics?")&&(y(Ze,0),y(qe,0),y(ut,0),y(es,0),y(Tt,0),y(os,0),y(Lt,0),y(as,0))}var Ro=ml();Lr(c=>{var f=ol();d(Oe(f)),N(c,f)});var Po=Oe(Ro);{var yi=c=>{var f=nl(),w=d(b(f),2),h=d(b(w));x(w);var _=d(w,2);{var A=B=>{var F=al(),M=d(b(F));x(F),ne(()=>W(M,` ${a(Ke)??""}`)),N(B,F)};le(_,B=>{a(Ke)&&B(A)})}var E=d(_,2),O=d(b(E));O.nodeValue=` ${je??""}`,x(E);var U=d(E,2),J=d(b(U));J.nodeValue=` ${Gt??""}`,x(U);var ee=d(U,2),G=d(b(ee));x(ee);var S=d(ee,2);{var $=B=>{var F=rl(),M=b(F),z=b(M);x(M);var Fe=d(M,2);Nt(Fe,17,()=>_e,zt,(ot,fe)=>{var re=il(),Zi=b(re,!0);x(re),ne(()=>W(Zi,a(fe))),N(ot,re)}),x(F),ne(()=>W(z,`Log (${_e.length??""})`)),N(B,F)};le(S,B=>{_e.length>0&&B($)})}x(f),ne(()=>{W(h,` ${a(ft)??""}`),W(G,` ${Ut.a??""}`)}),N(c,f)};le(Po,c=>{(a(ft)!=="Assets loaded successfully!"||a(Ke))&&c(yi)})}var Oo=d(Po,2);{var _i=c=>{var f=dl(),w=d(b(f),2),h=b(w);x(w);var _=d(w,2);Nt(_,17,()=>a(Je),zt,(U,J)=>{var ee=ll(),G=b(ee);x(ee),ne(S=>W(G,`${a(J).count??""} × ${Eo[a(J).symbol]??""} = ${S??""} pistettä`),[()=>a(J).payout.toFixed(2)]),N(U,ee)});var A=d(_,2);{var E=U=>{var J=cl(),ee=b(J),G=b(ee);x(ee),x(J),ne(()=>W(G,`✨ ${a(Je)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),N(U,J)};le(A,U=>{a(Je).length>0&&a(Je)[0].multiplier>1&&U(E)})}var O=d(A,2);x(f),ne(()=>W(h,`${a(me)??""} pistettä`)),I("click",O,()=>{y(Be,!1),rs(),console.log("Win popup closed, ready for next spin")}),N(c,f)};le(Oo,c=>{a(me)>0&&a(Be)&&c(_i)})}var Io=d(Oo,2);{var wi=c=>{var f=pl(),w=d(b(f),8);x(f),I("click",w,()=>{y(et,!1)}),N(c,f)};le(Io,c=>{a(et)&&c(wi)})}var Co=d(Io,2),ds=b(Co),ps=b(ds);k(ps,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${i}px;
        height: ${r}px;
      `),pa(ps,c=>ns=c,()=>ns);var $t=d(ps,2),Bo=b($t);{var Ai=c=>{var f=fl(),w=Oe(f),h=d(b(w),2),_=b(h,!0);x(h),x(w);var A=d(w,2),E=d(b(A),2),O=b(E,!0);x(E),x(A),ne(U=>{W(_,a($e)),W(O,U)},[()=>a(Ce).toFixed(2)]),N(c,f)};le(Bo,c=>{a(Y)&&c(Ai)})}var fs=d(Bo,2),Fo=d(b(fs),2),ki=b(Fo,!0);x(Fo),x(fs);var Mo=d(fs,2),Wo=d(b(Mo),2),ji=b(Wo,!0);x(Wo),x(Mo),x($t);var us=d($t,2),zo=d(b(us),2),No=b(zo),hs=d(No,2),Si=b(hs,!0);x(hs);var Do=d(hs,2),Ei=d(Do,2);x(zo),x(us);var Uo=d(us,2),Rt=d(Uo,2),gs=b(Rt);k(gs,"src",`${Z??""}/Control_leftend.png`),k(gs,"style",`height: ${v}px; flex-shrink: 0;`);var Pt=d(gs,2);k(Pt,"style",`
    flex-grow: 1;
    height: ${v}px;
    background-image: url('${Z??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 20px;
  `);var vs=b(Pt),Go=d(b(vs),2),ms=b(Go);k(ms,"style",`
            width: 40px;
            height: 40px;
            background-image: url('${Z??""}/Control_lowerbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `);var bs=d(ms,2),Ti=b(bs,!0);x(bs);var Ho=d(bs,2);k(Ho,"style",`
            width: 40px;
            height: 40px;
            background-image: url('${Z??""}/Control_upperbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),x(Go),x(vs);var xs=d(vs,2);k(xs,"src",`${Z??""}/Control_divider.png`),k(xs,"style",`height: ${v*.8}px; flex-shrink: 0;`);var ys=d(xs,2),Vo=d(b(ys),2),Li=b(Vo,!0);x(Vo),x(ys);var _s=d(ys,2);k(_s,"src",`${Z??""}/Control_divider.png`),k(_s,"style",`height: ${v*.8}px; flex-shrink: 0;`);var ws=d(_s,2),As=b(ws),ks=b(As);x(As),x(ws);var js=d(ws,2);k(js,"src",`${Z??""}/Control_divider.png`),k(js,"style",`height: ${v*.8}px; flex-shrink: 0;`);var Ss=d(js,2),Es=b(Ss),$i=d(Es,2);x(Ss);var Ts=d(Ss,2);k(Ts,"src",`${Z??""}/Control_divider.png`),k(Ts,"style",`height: ${v*.8}px; flex-shrink: 0;`);var Ls=d(Ts,2),Ot=b(Ls);k(Ot,"style",`
          width: 50px;
          height: 50px;
          background-image: url('${Z??""}/Control_fastplay_select.png');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `);var $s=d(Ot,2),Ri=b($s,!0);x($s);var Pi=d($s,2);{var Oi=c=>{var f=ul(),w=d(b(f),2),h=d(w,2),_=d(h,2);x(f),ne(()=>{k(w,"style",`
              background: ${(a(K)==="slow"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: 2px solid ${(a(K)==="slow"?"#ffd700":"#666")??""};
              color: ${(a(K)==="slow"?"#ffd700":"#ffffff")??""};
              padding: 8px 20px;
              border-radius: 5px;
              cursor: pointer;
              font-weight: bold;
              font-size: 12px;
              transition: all 0.2s;
            `),k(h,"style",`
              background: ${(a(K)==="medium"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: 2px solid ${(a(K)==="medium"?"#ffd700":"#666")??""};
              color: ${(a(K)==="medium"?"#ffd700":"#ffffff")??""};
              padding: 8px 20px;
              border-radius: 5px;
              cursor: pointer;
              font-weight: bold;
              font-size: 12px;
              transition: all 0.2s;
            `),k(_,"style",`
              background: ${(a(K)==="fast"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: 2px solid ${(a(K)==="fast"?"#ffd700":"#666")??""};
              color: ${(a(K)==="fast"?"#ffd700":"#ffffff")??""};
              padding: 8px 20px;
              border-radius: 5px;
              cursor: pointer;
              font-weight: bold;
              font-size: 12px;
              transition: all 0.2s;
            `)}),I("click",w,()=>{y(K,"slow"),y(Ve,!1)}),I("click",h,()=>{y(K,"medium"),y(Ve,!1)}),I("click",_,()=>{y(K,"fast"),y(Ve,!1)}),N(c,f)};le(Pi,c=>{a(Ve)&&c(Oi)})}x(Ls);var Rs=d(Ls,2);k(Rs,"src",`${Z??""}/Control_divider.png`),k(Rs,"style",`height: ${v*.8}px; flex-shrink: 0;`);var Ps=d(Rs,2),Os=b(Ps),Ii=d(Os,2);x(Ps);var Is=d(Ps,2);k(Is,"src",`${Z??""}/Control_divider.png`),k(Is,"style",`height: ${v*.8}px; flex-shrink: 0;`);var Cs=d(Is,2),Yo=d(b(Cs),2),Ci=b(Yo,!0);x(Yo),x(Cs);var Bs=d(Cs,2);k(Bs,"src",`${Z??""}/Control_divider.png`),k(Bs,"style",`height: ${v*.8}px; flex-shrink: 0;`);var Xo=d(Bs,2);k(Xo,"style",`
        width: 50px;
        height: 50px;
        background-image: url('${Z??""}/Control_menubar.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),x(Pt);var Ko=d(Pt,2);k(Ko,"src",`${Z??""}/Control_rightend.png`),k(Ko,"style",`height: ${v}px; flex-shrink: 0;`),x(Rt);var Qo=d(Rt,2);const Bi=Ue(()=>a(me)/a(q)>=50?"jackpot":a(me)/a(q)>=20?"medium":"small");pa(sl(Qo,{get winLevel(){return a(Bi)},get winAmount(){return a(me)}}),c=>Ye=c,()=>Ye);var Fs=d(Qo,2),Zo=d(b(Fs),2);Zo.textContent=`v${s}`;var Ms=d(Zo,2),qo=d(b(Ms),2),Fi=b(qo,!0);x(qo),x(Ms);var Ws=d(Ms,2),Jo=d(b(Ws),2),Mi=b(Jo,!0);x(Jo),x(Ws);var zs=d(Ws,2),ea=d(b(zs),2),Wi=b(ea,!0);x(ea),x(zs);var Ns=d(zs,2),Ds=d(b(Ns),2),zi=b(Ds);x(Ds),x(Ns);var Us=d(Ns,2),Gs=d(b(Us),2),Ni=b(Gs);x(Gs),x(Us);var Hs=d(Us,2),ta=d(b(Hs),2),Di=b(ta,!0);x(ta),x(Hs);var Vs=d(Hs,2),sa=d(b(Vs),2),Ui=b(sa,!0);x(sa),x(Vs);var Ys=d(Vs,2),oa=d(b(Ys),2),Gi=b(oa);x(oa),x(Ys);var aa=d(Ys,2),ia=d(aa,2),st=b(ia),Hi=b(st);x(st);var It=d(st,2),xt=d(It,2),Vi=b(xt);x(xt);var Xs=d(xt,2);x(ia),x(Fs);var Ks=d(Fs,2),Yi=b(Ks);{var Xi=c=>{var f=hl(),w=d(b(f),2),h=b(w);x(w);var _=d(w,2);x(f),ne(()=>W(h,`${a(Qe)??""} left`)),I("click",_,ls),N(c,f)},Ki=c=>{var f=vl(),w=Oe(f),h=d(w,2);{var _=A=>{var E=gl(),O=d(b(E),2),U=d(O,2),J=d(U,2),ee=d(J,2),G=d(ee,2),S=d(G,2);x(E),I("click",O,()=>bt(10)),I("click",U,()=>bt(100)),I("click",J,()=>bt(1e3)),I("click",ee,()=>bt(1e4)),I("click",G,()=>bt(1e5)),I("click",S,()=>{y(Ne,!1)}),N(A,E)};le(h,A=>{a(Ne)&&A(_)})}I("click",w,()=>{y(Ne,!a(Ne))}),N(c,f)};le(Yi,c=>{a(ge)?c(Xi):c(Ki,!1)})}x(Ks);var yt=d(Ks,2),Qi=b(yt,!0);x(yt),x(ds),x(Co),ne((c,f,w,h,_,A,E,O,U)=>{k(ds,"style",`
    position: relative;
    width: ${i*a(mt)}px;
    height: ${r*a(mt)}px;
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
      border: 2px solid ${(a(Y)?"#ff00ff":"#ffd700")??""};
      box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
      z-index: 1500;
      min-width: 180px;
    `),W(ki,c),W(ji,a(q)),W(Si,a(q)),k(Rt,"style",`
  position: absolute;
  left: ${(Kt?Kt.x:j)+T}px;
  top: ${m+te}px;
  transform: scale(${H*a(mt)}, ${L*a(mt)});
  transform-origin: top left;
  width: ${a(Xt)??""}px;
  height: ${v}px;
  display: flex;
  align-items: center;
  z-index: 1000;
`),W(Ti,f),W(Li,w),no(As,1,`play-button-wrapper ${(a(Zt)?"glare-animate":"")??""}`,"svelte-tijp0o"),ks.disabled=a(ge),k(ks,"style",`
            width: 130px;
            height: 130px;
            background-image: url('${Z??""}/Control_playbutton.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border: none;
            cursor: ${(a(ge)?"not-allowed":"pointer")??""};
            background-color: transparent;
            opacity: ${(a(ge)?.5:1)??""};
            position: relative;
            z-index: 10;
            border-radius: 50%;
          `),k(Es,"style",`
          width: 50px;
          height: 50px;
          background-image: url('${Z??""}/${(a(ge)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),k($i,"src",`${Z??""}/${(a(ge)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),k(Ot,"title",`Spin Speed: ${(a(K)==="slow"?"Slow":a(K)==="medium"?"Medium":"Fast")??""}`),W(Ri,a(K)==="slow"?"Slow":a(K)==="medium"?"Med":"Fast"),k(Os,"style",`
          width: 50px;
          height: 50px;
          background-image: url('${Z??""}/${(a(jt)?"Control_fastplay_select.png":"Control_fastplay_deselect.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),k(Ii,"src",`${Z??""}/${(a(jt)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),W(Ci,h),W(Fi,_),W(Mi,A),W(Wi,E),k(Ds,"style",`color: ${O??""};`),W(zi,`${a(ts)??""}%`),k(Gs,"style",`color: ${U??""};`),W(Ni,`${a(ss)??""}%`),W(Di,a(Tt)),W(Ui,a(os)),W(Gi,`${a(ai)??""}%`),st.disabled=a(ve).length===0,k(st,"style",`
        width: 100%;
        padding: 5px;
        background: ${(a(ve).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(a(ve).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(a(ve).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(a(ve).length>0?"1":"0.5")??""};
      `),W(Hi,`Download Win Log (${a(ve).length??""})`),It.disabled=a(ve).length===0,k(It,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(a(ve).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(a(ve).length>0?"1":"0.5")??""};
      `),k(xt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(a(ye)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(a(ye)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),W(Vi,`🎵 Music: ${(a(ye)?"ON":"OFF")??""}`),Xs.disabled=a(Y),k(Xs,"style",`
        width: 100%;
        padding: 5px;
        background: ${(a(Y)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(a(Y)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(a(Y)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(a(Y)?"0.5":"1")??""};
      `),k(yt,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(a(Ee)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(a(Ee)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),k(yt,"title",a(Ee)?"Mykistä äänet":"Laita äänet päälle"),W(Qi,a(Ee)?"🔊":"🔇")},[()=>a(Te).toLocaleString(),()=>a(q).toFixed(2),()=>a(Te).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>a(me).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>a(Ze).toLocaleString(),()=>a(qe).toLocaleString(),()=>a(ut).toLocaleString(),()=>parseFloat(a(ts))>=95?"#00ff00":parseFloat(a(ts))>=85?"#ffff00":"#ff6666",()=>parseFloat(a(ss))>=30?"#00ff00":parseFloat(a(ss))>=20?"#ffff00":"#ff6666"]),I("click",No,$o),I("click",Do,Lo),I("click",Ei,bi),I("click",Uo,()=>{y(et,!a(et))}),I("click",ms,$o),I("click",Ho,Lo),I("click",ks,To),I("click",Es,()=>{y(Ne,!a(Ne))}),I("click",Ot,()=>{y(Ve,!a(Ve))}),I("click",Os,()=>{y(jt,!a(jt))}),I("click",Xo,()=>{y(et,!a(et))}),I("click",aa,xi),I("click",st,ri),I("click",It,ni),I("click",xt,ei),I("click",Xs,li),I("click",yt,()=>{y(Ee,!a(Ee))}),N(t,Ro),uo()}var xl=Q('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),yl=Q('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function _l(t,e){fo(e,!1);let s=ro(e,"isAuthenticated",12,!1),o=io(""),i=io(!1);const r="slot2024";function n(){a(o)===r?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(y(i,!0),y(o,""),setTimeout(()=>y(i,!1),3e3))}Ta(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),or();var l=Aa(),u=Oe(l);{var g=p=>{var m=yl(),v=b(m),j=d(b(v),4),T=b(j);Ur(T),Tr(2),x(j);var te=d(j,2);{var H=L=>{var P=xl();N(L,P)};le(te,L=>{a(i)&&L(H)})}x(v),x(m),Hr(T,()=>a(o),L=>y(o,L)),I("submit",j,Vr(n)),N(p,m)};le(u,p=>{s()||p(g)})}N(t,l),uo()}var wl=Q('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),Al=Q("<!> <!>",1);function Bl(t){let e=io(!1);var s=Al(),o=Oe(s);_l(o,{get isAuthenticated(){return a(e)},set isAuthenticated(n){y(e,n)},$$legacy:!0});var i=d(o,2);{var r=n=>{var l=wl(),u=d(Oe(l),2);bl(u,{}),N(n,l)};le(i,n=>{a(e)&&n(r)})}N(t,s)}export{Ba as A,Oa as C,en as R,Kr as S,Fa as V,Bl as _,Xr as u};
