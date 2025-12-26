const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Cf-ADWCl.js","./SpTHHzAp.js","./DN2ixH3E.js","./D1rxTRw3.js","./BUP9hRfY.js","./C2GHuDhf.js","./Czo8_gyB.js","./dz3ot17j.js"])))=>i.map(i=>d[i]);
var Fn=Object.defineProperty;var Mn=(t,e,s)=>e in t?Fn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var be=(t,e,s)=>Mn(t,typeof e!="symbol"?e+"":e,s);import{f as Wn,l as Nn,d as lr,a as j,t as Q,n as cr,g as M,i as jn}from"./CzvQHsIM.js";import{i as Dn}from"./CSlWMsbo.js";import{R as xe,T as Un,Q as Gn,i as r,w as Hn,W as Vn,X as Ha,Y as Va,Z as Ws,a1 as mt,a9 as Yn,_ as dr,$ as fr,a0 as Xn,ad as ur,O as Kn,z as Qn,I as Ya,ar as Ns,K as Xa,as as Zn,at as qn,au as Jn,ac as eo,av as to,aw as so,ax as ao,ay as ro,a3 as no,az as oo,aA as io,N as lo,aB as co,aC as fo,g as uo,n as po,p as ea,f as Pe,ai as $,a as ta,y as x,c as b,s as f,r as y,t as ie,k as je,ah as pr,aD as Te,aE as ho,aF as Xs}from"./D1rxTRw3.js";import{_ as Ka,i as le,p as ye}from"./DN2ixH3E.js";import{s as F,a as vo}from"./CSYyqGjZ.js";import{p as Ks,b as Qa}from"./Dk6Goypl.js";import{b as Le}from"./DnlvaP83.js";import{e as Me,E as C,a as go,C as sa,Q as Ot,V as $t,N as js,D as ue,H as mo,p as De,ab as nt,ac as Ue,ad as bo,w as Fe,ae as yt,af as hr,ag as ot,a9 as Re,ah as Bt,a1 as vr,ai as yo,aj as Ds,aa as xo,ak as _o,y as Lt}from"./SpTHHzAp.js";import{A as wo,B as Za,G as Ao,T as gr,a as ko,b as Us}from"./BUP9hRfY.js";function It(t,e){return e}function Eo(t,e,s,a){for(var n=[],o=e.length,i=0;i<o;i++)Jn(e[i].e,n,!0);var l=o>0&&n.length===0&&s!==null;if(l){var p=s.parentNode;eo(p),p.append(s),a.clear(),Be(t,e[0].prev,e[o-1].next)}to(n,()=>{for(var v=0;v<o;v++){var u=e[v];l||(a.delete(u.k),Be(t,u.prev,u.next)),so(u.e,!l)}})}function Ct(t,e,s,a,n,o=null){var i=t,l={flags:e,items:new Map,first:null};xe&&Un();var p=null,v=!1,u=Hn(()=>{var m=s();return Kn(m)?m:m==null?[]:ur(m)});Gn(()=>{var m=r(u),g=m.length;if(v&&g===0)return;v=g===0;let E=!1;if(xe){var z=i.data===Vn;z!==(g===0)&&(i=Ha(),Va(i),Ws(!1),E=!0)}if(xe){for(var Z=null,G,S=0;S<g;S++){if(mt.nodeType===8&&mt.data===Yn){i=mt,E=!0,Ws(!1);break}var P=m[S],V=a(P,S);G=mr(mt,l,Z,null,P,V,S,n,e,s),l.items.set(V,G),Z=G}g>0&&Va(Ha())}xe||zo(m,l,i,n,e,a,s),o!==null&&(g===0?p?dr(p):p=fr(()=>o(i)):p!==null&&Xn(p,()=>{p=null})),E&&Ws(!0),r(u)}),xe&&(i=mt)}function zo(t,e,s,a,n,o,i){var l=t.length,p=e.items,v=e.first,u=v,m,g=null,E=[],z=[],Z,G,S,P;for(P=0;P<l;P+=1){if(Z=t[P],G=o(Z,P),S=p.get(G),S===void 0){var V=u?u.e.nodes_start:s;g=mr(V,e,g,g===null?e.first:g.next,Z,G,P,a,n,i),p.set(G,g),E=[],z=[],u=g.next;continue}if(So(S,Z,P),(S.e.f&Ns)!==0&&dr(S.e),S!==u){if(m!==void 0&&m.has(S)){if(E.length<z.length){var se=z[0],ne;g=se.prev;var Ae=E[0],oe=E[E.length-1];for(ne=0;ne<E.length;ne+=1)qa(E[ne],se,s);for(ne=0;ne<z.length;ne+=1)m.delete(z[ne]);Be(e,Ae.prev,oe.next),Be(e,g,Ae),Be(e,oe,se),u=se,g=oe,P-=1,E=[],z=[]}else m.delete(S),qa(S,u,s),Be(e,S.prev,S.next),Be(e,S,g===null?e.first:g.next),Be(e,g,S),g=S;continue}for(E=[],z=[];u!==null&&u.k!==G;)(u.e.f&Ns)===0&&(m??(m=new Set)).add(u),z.push(u),u=u.next;if(u===null)continue;S=u}E.push(S),g=S,u=S.next}if(u!==null||m!==void 0){for(var _e=m===void 0?[]:ur(m);u!==null;)(u.e.f&Ns)===0&&_e.push(u),u=u.next;var ce=_e.length;if(ce>0){var ee=null;Eo(e,_e,ee,p)}}Xa.first=e.first&&e.first.e,Xa.last=g&&g.e}function So(t,e,s,a){qn(t.v,e),t.i=s}function mr(t,e,s,a,n,o,i,l,p,v){var u=(p&ao)!==0,m=(p&ro)===0,g=u?m?Qn(n):Ya(n):n,E=(p&Zn)===0?i:Ya(i),z={i:E,v:g,k:o,a:null,e:null,prev:s,next:a};try{return z.e=fr(()=>l(t,g,E,v),xe),z.e.prev=s&&s.e,z.e.next=a&&a.e,s===null?e.first=z:(s.next=z,s.e.next=z.e),a!==null&&(a.prev=z,a.e.prev=z.e),z}finally{}}function qa(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,n=e?e.e.nodes_start:s,o=t.e.nodes_start;o!==a;){var i=no(o);n.before(o),o=i}}function Be(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}const Ja=[...` 	
\r\f \v\uFEFF`];function To(t,e,s){var a=t==null?"":""+t;if(e&&(a=a?a+" "+e:e),s){for(var n in s)if(s[n])a=a?a+" "+n:n;else if(a.length)for(var o=n.length,i=0;(i=a.indexOf(n,i))>=0;){var l=i+o;(i===0||Ja.includes(a[i-1]))&&(l===a.length||Ja.includes(a[l]))?a=(i===0?"":a.substring(0,i))+a.substring(l+1):i=l}}return a===""?null:a}function Qs(t,e,s,a,n,o){var i=t.__className;if(xe||i!==s){var l=To(s,a,o);(!xe||l!==t.getAttribute("class"))&&(l==null?t.removeAttribute("class"):e?t.className=l:t.setAttribute("class",l)),t.__className=s}else if(o)for(var p in o){var v=!!o[p];(n==null||v!==!!n[p])&&t.classList.toggle(p,v)}return o}function Lo(t){if(xe){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;T(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var n=t.checked;T(t,"checked",null),t.checked=n}}};t.__on_r=s,oo(s),Wn()}}function T(t,e,s,a){var n=t.__attributes??(t.__attributes={});xe&&(n[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||n[e]!==(n[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[io]=s),s==null?t.removeAttribute(e):typeof s!="string"&&Ro(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var er=new Map;function Ro(t){var e=er.get(t.nodeName);if(e)return e;er.set(t.nodeName,e=[]);for(var s,a=t,n=Element.prototype;n!==a;){s=co(a);for(var o in s)s[o].set&&e.push(o);a=lo(a)}return e}function Po(t,e,s=e){var a=fo();Nn(t,"input",n=>{var o=n?t.defaultValue:t.value;if(o=Gs(t)?Hs(o):o,s(o),a&&o!==(o=e())){var i=t.selectionStart,l=t.selectionEnd;t.value=o??"",l!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(l,t.value.length))}}),(xe&&t.defaultValue!==t.value||uo(e)==null&&t.value)&&s(Gs(t)?Hs(t.value):t.value),po(()=>{var n=e();Gs(t)&&n===Hs(t.value)||t.type==="date"&&!n&&!t.value||n!==t.value&&(t.value=n??"")})}function Gs(t){var e=t.type;return e==="number"||e==="range"}function Hs(t){return t===""?null:+t}function Oo(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const Zs=[];Me.handleByNamedList(C.Environment,Zs);async function $o(t){if(!t)for(let e=0;e<Zs.length;e++){const s=Zs[e];if(s.value.test()){await s.value.load();return}}}let bt;function Io(){if(typeof bt=="boolean")return bt;try{bt=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{bt=!1}return bt}var br=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(br||{});class Co{constructor(e){this.items=[],this._name=e}emit(e,s,a,n,o,i,l,p){const{name:v,items:u}=this;for(let m=0,g=u.length;m<g;m++)u[m][v](e,s,a,n,o,i,l,p);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Bo=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],yr=class xr extends go{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...Bo,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await $o(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...xr.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof sa&&(a={container:a},s&&(Ot($t,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const n=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=n?a.clearColor:js.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const n=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==n&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=br.ALL);const{clear:a,clearColor:n,target:o}=e;js.shared.setValue(n??this.background.colorRgba),s.renderTarget.clear(o,a,js.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new Co(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const n in this.runners)this.runners[n].add(a);return this}_addPipes(e,s){const a=s.reduce((n,o)=>(n[o.name]=o.value,n),{});e.forEach(n=>{const o=n.value,i=n.name,l=a[i];this.renderPipes[i]=new o(this,l?new l:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Io())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};yr.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let _r=yr,Rt;function Fo(t){return Rt!==void 0||(Rt=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??_r.defaultOptions.failIfMajorPerformanceCaveat};try{if(!ue.get().getWebGLRenderingContext())return!1;let n=ue.get().createCanvas().getContext("webgl",e);const o=!!((s=n==null?void 0:n.getContextAttributes())!=null&&s.stencil);if(n){const i=n.getExtension("WEBGL_lose_context");i&&i.loseContext()}return n=null,o}catch{return!1}})()),Rt}let Pt;async function Mo(t={}){return Pt!==void 0||(Pt=await(async()=>{const e=ue.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),Pt}const tr=["webgl","webgpu","canvas"];async function Wo(t){let e=[];t.preference?(e.push(t.preference),tr.forEach(o=>{o!==t.preference&&e.push(o)})):e=tr.slice();let s,a={};for(let o=0;o<e.length;o++){const i=e[o];if(i==="webgpu"&&await Mo()){const{WebGPURenderer:l}=await Ka(async()=>{const{WebGPURenderer:p}=await import("./Cf-ADWCl.js");return{WebGPURenderer:p}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=l,a={...t,...t.webgpu};break}else if(i==="webgl"&&Fo(t.failIfMajorPerformanceCaveat??_r.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:l}=await Ka(async()=>{const{WebGLRenderer:p}=await import("./dz3ot17j.js");return{WebGLRenderer:p}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=l,a={...t,...t.webgl};break}else if(i==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const n=new s;return await n.init(a),n}const wr="8.8.1";class Ar{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,wr)}static destroy(){}}Ar.extension=C.Application;class No{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,wr)}destroy(){this._renderer=null}}No.extension={type:[C.WebGLSystem,C.WebGPUSystem],name:"initHook",priority:-10};const kr=class qs{constructor(...e){this.stage=new sa,e[0]!==void 0&&Ot($t,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Wo(e),qs._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Ot($t,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=qs._plugins.slice(0);a.reverse(),a.forEach(n=>{n.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};kr._plugins=[];let Er=kr;Me.handleByList(C.Application,Er._plugins);Me.add(Ar);class zr extends wo{constructor(e,s){super();const{textures:a,data:n}=e;Object.keys(n.pages).forEach(o=>{const i=n.pages[parseInt(o,10)],l=a[i.id];this.pages.push({texture:l})}),Object.keys(n.chars).forEach(o=>{const i=n.chars[o],{frame:l,source:p}=a[i.page],v=new mo(i.x+l.x,i.y+l.y,i.width,i.height),u=new De({source:p,frame:v});this.chars[o]={id:o.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:u}}),this.baseRenderedFontSize=n.fontSize,this.baseMeasurementFontSize=n.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:n.fontSize},this.baseLineOffset=n.baseLineOffset,this.lineHeight=n.lineHeight,this.fontFamily=n.fontFamily,this.distanceField=n.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){Za.install(e)}static uninstall(e){Za.uninstall(e)}}const Vs={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const m in e){const g=e[m].match(/^[a-z]+/gm)[0],E=e[m].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),z={};for(const Z in E){const G=E[Z].split("="),S=G[0],P=G[1].replace(/"/gm,""),V=parseFloat(P),se=isNaN(V)?P:V;z[S]=se}s[g].push(z)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[n]=s.info,[o]=s.common,[i]=s.distanceField??[];i&&(a.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),a.fontSize=parseInt(n.size,10),a.fontFamily=n.face,a.lineHeight=parseInt(o.lineHeight,10);const l=s.page;for(let m=0;m<l.length;m++)a.pages.push({id:parseInt(l[m].id,10)||0,file:l[m].file});const p={};a.baseLineOffset=a.lineHeight-parseInt(o.base,10);const v=s.char;for(let m=0;m<v.length;m++){const g=v[m],E=parseInt(g.id,10);let z=g.letter??g.char??String.fromCharCode(E);z==="space"&&(z=" "),p[E]=z,a.chars[z]={id:E,page:parseInt(g.page,10)||0,x:parseInt(g.x,10),y:parseInt(g.y,10),width:parseInt(g.width,10),height:parseInt(g.height,10),xOffset:parseInt(g.xoffset,10),yOffset:parseInt(g.yoffset,10),xAdvance:parseInt(g.xadvance,10),kerning:{}}}const u=s.kerning||[];for(let m=0;m<u.length;m++){const g=parseInt(u[m].first,10),E=parseInt(u[m].second,10),z=parseInt(u[m].amount,10);a.chars[p[E]].kerning[p[g]]=z}return a}},sr={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],n=t.getElementsByTagName("distanceField")[0];n&&(e.distanceField={type:n.getAttribute("fieldType"),range:parseInt(n.getAttribute("distanceRange"),10)});const o=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),l=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let v=0;v<o.length;v++)e.pages.push({id:parseInt(o[v].getAttribute("id"),10)||0,file:o[v].getAttribute("file")});const p={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let v=0;v<i.length;v++){const u=i[v],m=parseInt(u.getAttribute("id"),10);let g=u.getAttribute("letter")??u.getAttribute("char")??String.fromCharCode(m);g==="space"&&(g=" "),p[m]=g,e.chars[g]={id:m,page:parseInt(u.getAttribute("page"),10)||0,x:parseInt(u.getAttribute("x"),10),y:parseInt(u.getAttribute("y"),10),width:parseInt(u.getAttribute("width"),10),height:parseInt(u.getAttribute("height"),10),xOffset:parseInt(u.getAttribute("xoffset"),10),yOffset:parseInt(u.getAttribute("yoffset"),10),xAdvance:parseInt(u.getAttribute("xadvance"),10),kerning:{}}}for(let v=0;v<l.length;v++){const u=parseInt(l[v].getAttribute("first"),10),m=parseInt(l[v].getAttribute("second"),10),g=parseInt(l[v].getAttribute("amount"),10);e.chars[p[m]].kerning[p[u]]=g}return e}},ar={test(t){return typeof t=="string"&&t.includes("<font>")?sr.test(ue.get().parseXML(t)):!1},parse(t){return sr.parse(ue.get().parseXML(t))}},jo=[".xml",".fnt"],Do={extension:{type:C.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof zr,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},Uo={extension:{type:C.LoadParser,priority:nt.Normal},name:"loadBitmapFont",test(t){return jo.includes(Ue.extname(t).toLowerCase())},async testParse(t){return Vs.test(t)||ar.test(t)},async parse(t,e,s){const a=Vs.test(t)?Vs.parse(t):ar.parse(t),{src:n}=e,{pages:o}=a,i=[],l=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let m=0;m<o.length;++m){const g=o[m].file;let E=Ue.join(Ue.dirname(n),g);E=bo(E,n),i.push({src:E,data:l})}const p=await s.load(i),v=i.map(m=>p[m.src]);return new zr({data:a,textures:v},n)},async load(t,e){return await(await ue.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class Go{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Ho={extension:{type:C.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof De),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((n,o)=>{s[a+(o===0?"":o+1)]=n})}),s}};async function Sr(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Vo={extension:{type:C.DetectionParser,priority:1},test:async()=>Sr("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},rr=["png","jpg","jpeg"],Yo={extension:{type:C.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...rr],remove:async t=>t.filter(e=>!rr.includes(e))},Xo="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function aa(t){return Xo?!1:document.createElement("video").canPlayType(t)!==""}const Ko={extension:{type:C.DetectionParser,priority:0},test:async()=>aa("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},Qo={extension:{type:C.DetectionParser,priority:0},test:async()=>aa("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},Zo={extension:{type:C.DetectionParser,priority:0},test:async()=>aa("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},qo={extension:{type:C.DetectionParser,priority:0},test:async()=>Sr("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class Jo{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var i,l;let n=null,o=null;if(s.loadParser&&(o=this._parserHash[s.loadParser],o||Fe(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!o){for(let p=0;p<this.parsers.length;p++){const v=this.parsers[p];if(v.load&&((i=v.test)!=null&&i.call(v,e,s,this))){o=v;break}}if(!o)return Fe(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}n=await o.load(e,s,this),a.parser=o;for(let p=0;p<this.parsers.length;p++){const v=this.parsers[p];v.parse&&v.parse&&await((l=v.testParse)==null?void 0:l.call(v,n,s,this))&&(n=await v.parse(n,s,this)||n,a.parser=v)}return n})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const n={},o=hr(e),i=yt(e,v=>({alias:[v],src:v,data:{}})),l=i.length,p=i.map(async v=>{const u=Ue.toAbsolute(v.src);if(!n[v.src])try{this.promiseCache[u]||(this.promiseCache[u]=this._getLoadPromiseAndParser(u,v)),n[v.src]=await this.promiseCache[u].promise,s&&s(++a/l)}catch(m){throw delete this.promiseCache[u],delete n[v.src],new Error(`[Loader.load] Failed to load ${u}.
${m}`)}});return await Promise.all(p),o?n[i[0].src]:n}async unload(e){const a=yt(e,n=>({alias:[n],src:n})).map(async n=>{var l,p;const o=Ue.toAbsolute(n.src),i=this.promiseCache[o];if(i){const v=await i.promise;delete this.promiseCache[o],await((p=(l=i.parser)==null?void 0:l.unload)==null?void 0:p.call(l,v,n,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&Fe(`[Assets] loadParser name conflict "${s.name}"`):Fe("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function it(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const ei=".json",ti="application/json",si={extension:{type:C.LoadParser,priority:nt.Low},name:"loadJson",test(t){return it(t,ti)||ot(t,ei)},async load(t){return await(await ue.get().fetch(t)).json()}},ai=".txt",ri="text/plain",ni={name:"loadTxt",extension:{type:C.LoadParser,priority:nt.Low,name:"loadTxt"},test(t){return it(t,ri)||ot(t,ai)},async load(t){return await(await ue.get().fetch(t)).text()}},oi=["normal","bold","100","200","300","400","500","600","700","800","900"],ii=[".ttf",".otf",".woff",".woff2"],li=["font/ttf","font/otf","font/woff","font/woff2"],ci=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function di(t){const e=Ue.extname(t),n=Ue.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(l=>l.charAt(0).toUpperCase()+l.slice(1));let o=n.length>0;for(const l of n)if(!l.match(ci)){o=!1;break}let i=n.join(" ");return o||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const fi=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function ui(t){return fi.test(t)?t:encodeURI(t)}const pi={extension:{type:C.LoadParser,priority:nt.Low},name:"loadWebFont",test(t){return it(t,li)||ot(t,ii)},async load(t,e){var a,n,o;const s=ue.get().getFontFaceSet();if(s){const i=[],l=((a=e.data)==null?void 0:a.family)??di(t),p=((o=(n=e.data)==null?void 0:n.weights)==null?void 0:o.filter(u=>oi.includes(u)))??["normal"],v=e.data??{};for(let u=0;u<p.length;u++){const m=p[u],g=new FontFace(l,`url(${ui(t)})`,{...v,weight:m});await g.load(),s.add(g),i.push(g)}return Re.set(`${l}-and-url`,{url:t,fontFaces:i}),i.length===1?i[0]:i}return Fe("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{Re.remove(`${e.family}-and-url`),ue.get().getFontFaceSet().delete(e)})}};function ra(t,e=1){var a;const s=(a=Bt.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function na(t,e,s){t.label=s,t._sourceOrigin=s;const a=new De({source:t,label:s}),n=()=>{delete e.promiseCache[s],Re.has(s)&&Re.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(Fe("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),n())}),a.once("destroy",()=>{t.destroyed||(Fe("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),n())}),a}const hi=".svg",vi="image/svg+xml",gi={extension:{type:C.LoadParser,priority:nt.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return it(t,vi)||ot(t,hi)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?bi(t):mi(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function mi(t,e,s,a){var G,S,P;const o=await(await ue.get().fetch(t)).blob(),i=URL.createObjectURL(o),l=new Image;l.src=i,l.crossOrigin=a,await l.decode(),URL.revokeObjectURL(i);const p=document.createElement("canvas"),v=p.getContext("2d"),u=((G=e.data)==null?void 0:G.resolution)||ra(t),m=((S=e.data)==null?void 0:S.width)??l.width,g=((P=e.data)==null?void 0:P.height)??l.height;p.width=m*u,p.height=g*u,v.drawImage(l,0,0,m*u,g*u);const{parseAsGraphicsContext:E,...z}=e.data??{},Z=new vr({resource:p,alphaMode:"premultiply-alpha-on-upload",resolution:u,...z});return na(Z,s,t)}async function bi(t){const s=await(await ue.get().fetch(t)).text(),a=new Ao;return a.svg(s),a}const yi=`(function () {
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
`;let at=null,Js=class{constructor(){at||(at=URL.createObjectURL(new Blob([yi],{type:"application/javascript"}))),this.worker=new Worker(at)}};Js.revokeObjectURL=function(){at&&(URL.revokeObjectURL(at),at=null)};const xi=`(function () {
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
`;let rt=null;class Tr{constructor(){rt||(rt=URL.createObjectURL(new Blob([xi],{type:"application/javascript"}))),this.worker=new Worker(rt)}}Tr.revokeObjectURL=function(){rt&&(URL.revokeObjectURL(rt),rt=null)};let nr=0,Ys;class _i{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new Js;s.addEventListener("message",a=>{s.terminate(),Js.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Ys===void 0&&(Ys=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Ys&&(this._createdWorkers++,e=new Tr().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((n,o)=>{this._queue.push({id:e,arguments:s,resolve:n,reject:o})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[nr]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:nr++,id:a})}}const or=new _i,wi=[".jpeg",".jpg",".png",".webp",".avif"],Ai=["image/jpeg","image/png","image/webp","image/avif"];async function ki(t,e){var n;const s=await ue.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((n=e==null?void 0:e.data)==null?void 0:n.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const Lr={name:"loadTextures",extension:{type:C.LoadParser,priority:nt.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return it(t,Ai)||ot(t,wi)},async load(t,e,s){var o;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await or.isImageBitmapSupported()?a=await or.loadImageBitmap(t,e):a=await ki(t,e):a=await new Promise((i,l)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?i(a):(a.onload=()=>{i(a)},a.onerror=l)});const n=new vr({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((o=e.data)==null?void 0:o.resolution)||ra(t),...e.data});return na(n,s,t)},unload(t){t.destroy(!0)}},Rr=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],Ei=Rr.map(t=>`video/${t.substring(1)}`);function zi(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=Ti(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function Si(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",n),t.load();function a(){o(),e()}function n(i){o(),s(i)}function o(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",n)}})}function Ti(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const Li={name:"loadVideo",extension:{type:C.LoadParser,name:"loadVideo"},test(t){const e=it(t,Ei),s=ot(t,Rr);return e||s},async load(t,e,s){var p,v;const a={...Ds.defaultOptions,resolution:((p=e.data)==null?void 0:p.resolution)||ra(t),alphaMode:((v=e.data)==null?void 0:v.alphaMode)||await yo(),...e.data},n=document.createElement("video"),o={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(o).forEach(u=>{const m=o[u];m!==void 0&&n.setAttribute(u,m)}),a.muted===!0&&(n.muted=!0),zi(n,t,a.crossorigin);const i=document.createElement("source");let l;if(t.startsWith("data:"))l=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const u=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();l=Ds.MIME_TYPES[u]||`video/${u}`}return i.src=t,l&&(i.type=l),new Promise(u=>{const m=async()=>{const g=new Ds({...a,resource:n});n.removeEventListener("canplay",m),e.data.preload&&await Si(n),u(na(g,s,t))};n.addEventListener("canplay",m),n.appendChild(i)})},unload(t){t.destroy(!0)}},Pr={extension:{type:C.ResolveParser,name:"resolveTexture"},test:Lr.test,parse:t=>{var e;return{resolution:parseFloat(((e=Bt.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},Ri={extension:{type:C.ResolveParser,priority:-2,name:"resolveJson"},test:t=>Bt.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:Pr.parse};class Pi{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Bt,this.loader=new Jo,this.cache=Re,this._backgroundLoader=new Go(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var o,i;if(this._initialized){Fe("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let l=e.manifest;typeof l=="string"&&(l=await this.load(l)),this.resolver.addManifest(l)}const s=((o=e.texturePreference)==null?void 0:o.resolution)??1,a=typeof s=="number"?[s]:s,n=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:n,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=hr(e),n=yt(e).map(l=>{if(typeof l!="string"){const p=this.resolver.getAlias(l);return p.some(v=>!this.resolver.hasKey(v))&&this.add(l),Array.isArray(p)?p[0]:p}return this.resolver.hasKey(l)||this.add({alias:l,src:l}),l}),o=this.resolver.resolve(n),i=await this._mapLoadToResolve(o,s);return a?i[n[0]]:i}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const n=this.resolver.resolveBundle(e),o={},i=Object.keys(n);let l=0,p=0;const v=()=>{s==null||s(++l/p)},u=i.map(m=>{const g=n[m];return p+=Object.keys(g).length,this._mapLoadToResolve(g,v).then(E=>{o[m]=E})});return await Promise.all(u),a?o[e[0]]:o}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Re.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=Re.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const n=await this.loader.load(a,s);this._backgroundLoader.active=!0;const o={};return a.forEach(i=>{const l=n[i.src],p=[i.src];i.alias&&p.push(...i.alias),p.forEach(v=>{o[v]=l}),Re.set(p,l)}),o}async unload(e){this._initialized||await this.init();const s=yt(e).map(n=>typeof n!="string"?n.src:n),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=yt(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(n=>this._unloadFromResolved(s[n]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{Re.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,n)=>s.indexOf(a)===n),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const st=new Pi;Me.handleByList(C.LoadParser,st.loader.parsers).handleByList(C.ResolveParser,st.resolver.parsers).handleByList(C.CacheParser,st.cache.parsers).handleByList(C.DetectionParser,st.detections);Me.add(Ho,Yo,Vo,qo,Ko,Qo,Zo,si,ni,pi,gi,Lr,Li,Uo,Do,Pr,Ri);const ir={loader:C.LoadParser,resolver:C.ResolveParser,cache:C.CacheParser,detection:C.DetectionParser};Me.handle(C.Asset,t=>{const e=t.ref;Object.entries(ir).filter(([s])=>!!e[s]).forEach(([s,a])=>Me.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(ir).filter(s=>!!e[s]).forEach(s=>Me.remove(e[s]))});class Oi extends xo{constructor(e,s){const{text:a,resolution:n,style:o,anchor:i,width:l,height:p,roundPixels:v,...u}=e;super({...u}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=o,this.resolution=n??null,this.allowChildren=!1,this._anchor=new _o({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=v??!1,l!==void 0&&(this.width=l),p!==void 0&&(this.height=p)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,n=-s*this.anchor.x;let o=0;return e.x>=n&&e.x<=n+s&&(o=-a*this.anchor.y,e.y>=o&&e.y<=o+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function $i(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(Ot($t,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class Ii extends Oi{constructor(...e){const s=$i(e,"Text");super(s,gr),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=ko.measureText(this._text,this._style),{width:n,height:o}=a;e.minX=-s._x*n,e.maxX=e.minX+n,e.minY=-s._y*o,e.maxY=e.minY+o}}const Ci="1.1.7",Bi={version:Ci};var Fi=Q('<div class="win-label svelte-27a1cu">BIG WIN!</div> <div class="win-amount-display svelte-27a1cu"> </div>',1),Mi=cr('<use href="#sparkle" class="sparkle svelte-27a1cu"></use>'),Wi=cr('<use href="#vinyl"></use>'),Ni=Q('<div><!> <svg class="vinyl-canvas svelte-27a1cu" viewBox="0 0 1024 800" xmlns="http://www.w3.org/2000/svg"><defs class="svelte-27a1cu"><symbol id="vinyl" viewBox="-200 -200 400 400" class="svelte-27a1cu"><circle cx="0" cy="0" r="180" fill="#0b0b0b" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="150" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.3" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="120" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.25" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="90" fill="none" stroke="#1a1a1a" stroke-width="1.5" opacity="0.2" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="55" fill="var(--label-color)" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="6" fill="#ffffff" class="svelte-27a1cu"></circle><ellipse cx="-15" cy="-15" rx="20" ry="15" fill="#ffffff" opacity="0.3" transform="rotate(-30)" class="svelte-27a1cu"></ellipse></symbol><symbol id="sparkle" viewBox="-12 -12 24 24" class="svelte-27a1cu"><polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ffd966" class="svelte-27a1cu"></polygon><circle cx="0" cy="0" r="2" fill="#ffffff" class="svelte-27a1cu"></circle></symbol><symbol id="confetti" viewBox="-3 -3 6 6" class="svelte-27a1cu"><circle cx="0" cy="0" r="2" fill="var(--confetti-color)" class="svelte-27a1cu"></circle></symbol></defs><!><!></svg></div>');function ji(t,e){ea(e,!0);let s=Ks(e,"winLevel",3,"small"),a=Ks(e,"winAmount",3,0),n=$(!1),o=$(!1);const i={small:{vinyls:5,sparkles:8,maxRadius:150},medium:{vinyls:12,sparkles:16,maxRadius:200},jackpot:{vinyls:24,sparkles:30,maxRadius:280}},l=je(()=>i[s()]),p=["#f04e37","#ffd966","#ff8533","#4ecdc4","#ff6b9d"];function v(P){const V=[],Ae=r(l).maxRadius;for(let oe=0;oe<P;oe++){const _e=Math.PI*2*oe/P+Math.random()*.4,ce=Math.random()*Ae*.6+Ae*.3;V.push({x:512+Math.cos(_e)*ce,y:400+Math.sin(_e)*ce,rotation:Math.random()*30-15,scale:.4+Math.random()*.3,delay:oe*.05,color:p[oe%p.length]})}return V}function u(P){const V=[];for(let se=0;se<P;se++)V.push({x:100+Math.random()*824,y:50+Math.random()*700,delay:Math.random()*.8,duration:.6+Math.random()*.4,rotation:Math.random()*360});return V}const m=je(()=>v(r(l).vinyls)),g=je(()=>u(r(l).sparkles));function E(){x(n,!0),x(o,!0),setTimeout(()=>{x(o,!1),setTimeout(()=>{var P;x(n,!1),(P=e.onComplete)==null||P.call(e)},500)},s()==="jackpot"?4e3:s()==="medium"?3e3:2500)}function z(){x(o,!1),setTimeout(()=>{x(n,!1)},500)}var Z=lr(),G=Pe(Z);{var S=P=>{var V=Ni();let se;var ne=b(V);{var Ae=ee=>{var ae=Fi(),ge=f(Pe(ae),2),Oe=b(ge,!0);y(ge),ie(xt=>F(Oe,xt),[()=>a().toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),j(ee,ae)};le(ne,ee=>{a()>0&&ee(Ae)})}var oe=f(ne,2),_e=f(b(oe));Ct(_e,17,()=>r(g),It,(ee,ae)=>{var ge=Mi();ie(()=>T(ge,"style",`
            --sx: ${r(ae).x??""}px;
            --sy: ${r(ae).y??""}px;
            --duration: ${r(ae).duration??""}s;
            --sparkle-delay: ${r(ae).delay??""}s;
          `)),j(ee,ge)});var ce=f(_e);Ct(ce,17,()=>r(m),It,(ee,ae)=>{var ge=Wi();let Oe;ie(()=>{Oe=Qs(ge,0,"vinyl-group svelte-27a1cu",null,Oe,{floating:r(o)}),T(ge,"style",`
            --tx: ${r(ae).x??""}px;
            --ty: ${r(ae).y??""}px;
            --scale: ${r(ae).scale??""};
            --rotation: ${r(ae).rotation??""}deg;
            --delay: ${r(ae).delay??""}s;
            --label-color: ${r(ae).color??""};
          `)}),j(ee,ge)}),y(oe),y(V),ie(()=>se=Qs(V,1,"vinyl-win-container svelte-27a1cu",null,se,{visible:r(o),hiding:!r(o)})),j(P,V)};le(G,P=>{r(n)&&P(S)})}return j(t,Z),ta({show:E,hide:z})}var Di=jn('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-2k82zv"><\/script><!---->',1),Ui=Q('<p style="color: red;" class="svelte-2k82zv"><strong class="svelte-2k82zv">Error:</strong> </p>'),Gi=Q('<div class="svelte-2k82zv"> </div>'),Hi=Q('<details class="svelte-2k82zv"><summary class="svelte-2k82zv"> </summary> <!></details>'),Vi=Q(`<div style="
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
  " class="svelte-2k82zv"><h3 class="svelte-2k82zv">🎰 Oma-peli Debug</h3> <p class="svelte-2k82zv"><strong class="svelte-2k82zv">Status:</strong> </p> <!> <p class="svelte-2k82zv"><strong class="svelte-2k82zv">Base:</strong> </p> <p class="svelte-2k82zv"><strong class="svelte-2k82zv">BG URL:</strong> </p> <p class="svelte-2k82zv"><strong class="svelte-2k82zv">Sample:</strong> </p> <!></div>`),Yi=Q('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-2k82zv"> </div>'),Xi=Q('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-2k82zv"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-2k82zv"> </span></div>'),Ki=Q(`<div style="
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
      " class="svelte-2k82zv">Jatka pelaamista</button></div>`),Qi=Q(`<div style="
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
      " class="svelte-2k82zv">Sulje</button></div>`),Zi=Q('<div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #ff00ff; font-size: 16px; animation: pulse 1s infinite;" class="svelte-2k82zv"><span class="svelte-2k82zv">🎰 FREE SPINS:</span> <span class="svelte-2k82zv"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-top: 1px solid #555; padding-top: 8px;" class="svelte-2k82zv"><span style="color: #fff; font-size: 14px;" class="svelte-2k82zv">Total Won:</span> <span style="color: #00ff00; font-size: 14px;" class="svelte-2k82zv"> </span></div>',1),qi=Q(`<div style="
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
        " class="svelte-2k82zv">⏹ STOP</button></div>`),Ji=Q(`<div style="
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
          " class="svelte-2k82zv">Cancel</button></div>`),el=Q(`<button style="
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
      " class="svelte-2k82zv">🔄 AUTOPLAY</button> <!>`,1),tl=Q(`<!> <!> <!> <div style="
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  " class="svelte-2k82zv"></div> <div class="svelte-2k82zv"><!> <div style="display: flex; justify-content: space-between; margin-bottom: 8px;" class="svelte-2k82zv"><span style="color: #fff;" class="svelte-2k82zv">CREDITS:</span> <span style="color: #ffd700;" class="svelte-2k82zv"> </span></div> <div style="display: flex; justify-content: space-between; border-top: 1px solid #555; padding-top: 8px;" class="svelte-2k82zv"><span style="color: #fff;" class="svelte-2k82zv">BET:</span> <span style="color: #00ff00;" class="svelte-2k82zv"> </span></div></div> <div style="
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
      " class="svelte-2k82zv"> </div></div> <img alt="Divider" class="svelte-2k82zv"> <div style="position: relative; display: flex; align-items: center; justify-content: center; flex-grow: 0.5;" class="svelte-2k82zv"><div><button title="SPIN" class="svelte-2k82zv"></button></div></div> <img alt="Divider" class="svelte-2k82zv"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-2k82zv"><button title="Autoplay" class="svelte-2k82zv"></button> <img alt="Status bar" style="width: 50px; height: auto;" class="svelte-2k82zv"></div> <img alt="Divider" class="svelte-2k82zv"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-2k82zv"><button title="Fast Play" class="svelte-2k82zv"></button> <img alt="Status bar" style="width: 50px; height: auto;" class="svelte-2k82zv"></div> <img alt="Divider" class="svelte-2k82zv"> <div style="display: flex; flex-direction: column; align-items: center; gap: 5px;" class="svelte-2k82zv"><div style="color: #00ff00; font-size: 12px; font-weight: bold;" class="svelte-2k82zv">WIN</div> <div style="
        color: #ffd700;
        font-size: 20px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      " class="svelte-2k82zv"> </div></div> <img alt="Divider" class="svelte-2k82zv"> <button title="Menu" class="svelte-2k82zv"></button></div> <img alt="Right End" class="svelte-2k82zv"></div> <!>`,1);function sl(t,e){ea(e,!0);const s=Bi.version,a=13,n=1445,o=1e3,i=1.75,l=-30,p=-10,v=160,u=0,m=750,g=80,E=250,z=-230,Z=-390,G=1,S=1.1,P=.5,V=40,se=0,ne=-40,Ae=1,oe="height",ce=Math.round(100*i),ee=Math.round(ce*(700/760)),ge=ee+10,Oe=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],xt=typeof window<"u"&&window.location.hostname.includes("github.io"),te=xt?"/web-sdk/oma-peli/symbols":`${Le}/symbols`,J=xt?"/web-sdk/oma-peli/controls":`${Le}/controls`,Ft={a:`${te}/Blue_hotrod.jpg`,b:`${te}/Blue_jacket.jpg`,c:`${te}/Blue_rollers.jpg`,d:`${te}/Blue_speakers.jpg`,e:`${te}/Premium_blonde.jpg`,f:`${te}/Premium_brunette.jpg`,g:`${te}/Premium_rocker.jpg`,h:`${te}/New_Wild.jpg`,i:`${te}/Red_burger.jpg`,j:`${te}/Red_fries.jpg`,k:`${te}/Red_milkshake.jpg`,l:`${te}/Scatter.jpg`,emptyslot:`${te}/Emptyslot.jpg`},Mt=`${te}/bg_base.jpg`,oa=`${te}/ReelFrames.png`,ia=`${te}/RockABillyReels_logo.png`,Or={spin:`${Le}/sounds/spin.mp3`,stop:`${Le}/sounds/stop.mp3`,win:`${Le}/sounds/win.mp3`};let ke=$(!0),Wt={},q=null,Nt=null,jt=null;const $r=60/130,Ir=Math.round($r*60);let we=$(!0),Cr=$(!1),_t=$(!1),Dt=$(945),Ut=null;const Gt={background:`${Le}/music/rockabilly-loop.mp3`,drumHit:`${Le}/music/drum-hit.mp3`,winTheme:`${Le}/music/win-stinger.mp3`};function la(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(la,500);return}const d=window.Howl;try{q=new d({src:[Gt.background],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded"),x(Cr,!0)},onloaderror:(h,c)=>{console.warn("⚠️ Background music not found (generate with Suno AI):",c)}}),Nt=new d({src:[Gt.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),jt=new d({src:[Gt.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(h){console.error("Failed to initialize music system:",h)}}function Br(){q&&r(we)&&!q.playing()&&(q.play(),console.log("🎵 Background music started"))}function Fr(){q&&q.playing()&&(q.fade(q.volume(),0,500),setTimeout(()=>q.stop(),500))}function Mr(){if(q&&q.playing()){const d=q.volume();q.fade(d,0,1e3),setTimeout(()=>{q.stop(),q.volume(.3)},1e3)}}let Ht=$(!1);function Wr(){x(Ht,!1),setTimeout(()=>{x(Ht,!0)},10)}let Ge=null;function Nr(){x(we,!r(we)),r(we)?Br():Fr()}function jr(){Nt&&r(we)&&r(ke)&&Nt.play()}function Dr(){jt&&r(we)&&r(ke)&&jt.play()}let wt=null,He=null,lt=null,ct=null,dt=$("Initializing..."),Ve=$(""),me=[],Ee=$(1e3),Y=$(10);const ca=1,Vt=100;let pe=$(!1),Ye=$(0),We=$(!1),Ur=$(0),Ne=!1,ze=null,Yt=!1,Xe=$(0),Ke=$(0),ft=$(0),Xt=$(0),Kt=je(()=>r(Ke)>0?(r(ft)/r(Ke)*100).toFixed(2):"0.00"),Qt=je(()=>r(Xe)>0?(r(Xt)/r(Xe)*100).toFixed(2):"0.00"),X=$(!1),Se=$(0),$e=$(0),At=$(0),Zt=$(0),kt=$(0),qt=$(0),Gr=je(()=>r(kt)>0?(r(qt)/r(kt)*100).toFixed(2):"0.00"),he=$(ye([]));function Hr(d,h,c){const w=new Date().toLocaleString("fi-FI");let _=`
${"=".repeat(60)}
`;_+=`ROUND #${d} - ${w}
`,_+=`Mode: ${r(X)?"FREE SPINS":"BASE GAME"}
`,_+=`${"=".repeat(60)}
`,h.forEach((A,L)=>{_+=`
Win ${L+1}:
`,_+=`  Symbol: ${A.symbol} (${pa[A.symbol]})
`,_+=`  Count: ${A.count} symbols
`,_+=`  Multiplier: ${A.multiplier}x
`,_+=`  Payout: ${A.payout.toFixed(2)}
`,_+=`  Positions: [${A.positions.join(", ")}]
`}),_+=`
${"─".repeat(60)}
`,_+=`TOTAL WIN: ${c.toFixed(2)}
`,_+=`${"=".repeat(60)}
`,r(he).push(_)}function Vr(){const d=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${r(he).join(`
`)}`,h=new Blob([d],{type:"text/plain"}),c=URL.createObjectURL(h),w=document.createElement("a");w.href=c,w.download=`win-log-${Date.now()}.txt`,w.click(),URL.revokeObjectURL(c)}function Yr(){x(he,ye([]))}function Xr(){r(X)||(x(X,!0),x(Se,10),x($e,0),Te(At),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."))}const Kr={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},Qr={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function da(d){if(d===6)return Math.random()<.55?"h":"emptyslot";const h=r(X)?Qr:Kr,c=Math.random();let w=0;const _=Oe.filter(L=>L!=="h"),A=_.reduce((L,D)=>L+h[D],0);for(const L of _)if(w+=h[L]/A,c<w)return L;return"f"}function fa(){const d=[];for(let h=0;h<a;h++){const c=da(h);d.push(c),Te(kt),c==="emptyslot"&&Te(qt)}return d}function ua(d){return d<3?{col:0,row:d}:d<6?{col:1,row:d-3}:d===6?{col:2,row:0}:d<10?{col:3,row:d-7}:{col:4,row:d-10}}function ut(d,h){return d===0?h:d===1?3+h:d===2?6:d===3?7+h:d===4?10+h:-1}function Zr(){if(r(X)){const d=Math.random();return d<.7?3:d<.92?5:10}else{const d=Math.random();return d<.7?1:d<.92?2:3}}const qr={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function Jr(){var de;const d=[],h=[];for(let k=0;k<a;k++)pt[k]==="l"&&h.push(k);if(h.length>=5){const k=h.length;x(Se,r(Se)+k),r(X)?console.log(`🎰 FREE SPINS RETRIGGERED! +${k} FREE SPINS! Total: ${r(Se)}`):(x(X,!0),x($e,0),Te(At),console.log(`🎰 FREE SPINS TRIGGERED! ${h.length} scatters = ${k} FREE SPINS!`)),d.push({symbol:"l",count:h.length,payout:0,positions:h,multiplier:1})}const c=[];for(let k=0;k<3;k++)for(let R=0;R<3;R++)for(let O=0;O<1;O++)for(let I=0;I<3;I++)for(let N=0;N<3;N++){const W=[ut(0,k),ut(1,R),ut(2,O),ut(3,I),ut(4,N)];c.push(W)}console.log(`Generated ${c.length} possible paths (should be 81)`);const w=[];for(const k of c){const R=k.map(W=>pt[W]);if(R[0]==="emptyslot"||R[0]==="l")continue;let O=null;for(let W=0;W<R.length;W++)if(R[W]!=="h"&&R[W]!=="emptyslot"&&R[W]!=="l"){O=R[W];break}if(!O)continue;let I=0;const N=new Set;for(let W=0;W<k.length;W++){const Ce=k[W],{col:tt}=ua(Ce),fe=R[W];(fe===O||fe==="h")&&N.add(tt)}for(let W=0;W<5&&N.has(W);W++)I++;if(I>=3){const Ce=k[0]%3;w.push({symbol:O,length:I,path:k.slice(0,I),startRow:Ce})}}const _=[],A=new Map;for(const k of w){const R=`${k.symbol}-${k.path.join(",")}`;A.has(R)||A.set(R,[]),A.get(R).push(k)}for(const[k,R]of A.entries()){const O=Math.max(...R.map(N=>N.length)),I=R.find(N=>N.length===O);I&&_.push(I)}const L=[],D=new Map;for(const k of _)D.has(k.symbol)||D.set(k.symbol,[]),D.get(k.symbol).push(k);const U=[];for(const[k,R]of D.entries()){const O=Math.max(...R.map(N=>N.length)),I=R.filter(N=>N.length===O);U.push(...I)}const K=new Map;for(const k of U){const R=`${k.symbol}-${k.length}`;K.has(R)||K.set(R,[]),K.get(R).push(k)}const B=U.length>0?Zr():1;for(const[k,R]of K.entries()){const O=R[0],I=(de=qr[O.symbol])==null?void 0:de[O.length];if(I!==void 0&&I>0){const N=new Map;for(const fe of R)for(let re=0;re<fe.length;re++)N.has(re)||N.set(re,new Set),N.get(re).add(fe.path[re]);let W=1;for(let fe=0;fe<O.length;fe++){const re=N.get(fe);W*=re?re.size:1}const Ce=I*r(Y)*W*B;console.log(`  ${O.length}x${O.symbol}: ${W} ways × ${I}x × ${r(Y)} bet × ${B} mult = ${Ce}`);const tt=new Set;for(const fe of R)fe.path.forEach(re=>tt.add(re));L.push({symbol:O.symbol,count:O.length,payout:Ce,positions:Array.from(tt),multiplier:B})}}return d.push(...L),d}let ve=$(0),Qe=$(ye([])),Ie=$(!1),Ze=$(!1);const pa={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function Jt(d){if(!r(ke)||!Wt[d])return;const h=Wt[d];h.currentTime=0,h.play().catch(c=>{console.warn("Äänen toisto epäonnistui:",d,c)})}function en(d){ht.forEach(h=>H.stage.removeChild(h)),ht=[],d.forEach(h=>{h.positions.forEach(c=>{const w=qe[c],_=new Us().rect(0,0,ce,ee).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});_.x=w.container.x,_.y=w.container.y,H.stage.addChild(_),ht.push(_);let A=0,L=1;const D=.05;H.ticker.add(()=>{A+=L*D,A>=.4&&(L=-1),A<=0&&(L=1),_.alpha=.5+A})})})}function es(){ht.forEach(d=>H.stage.removeChild(d)),ht=[]}let pt=fa(),ts,H,qe=[],ht=[];class tn{constructor(h,c){be(this,"index");be(this,"container");be(this,"offset",0);be(this,"speed",0);be(this,"targetSpeed",30);be(this,"state","idle");be(this,"stopDelay",0);be(this,"bounceOffset",0);be(this,"bounceSpeed",0);be(this,"bounceFrames",0);this.index=h,this.container=c}start(h){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=h}startSynchronized(h){const c=60+h*Ir;this.start(c)}update(){this.state!=="idle"&&(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"&&(this.speed*=.92,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,Jt("stop"),jr())),this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=ge&&(this.offset=0,pt[this.index]=da(this.index))))}draw(){const h=this.container;h.removeChildren();const c=pt[this.index];if(!c||!wt||!wt[c])return;const w=wt[c];if(!w)return;const _=this.offset+this.bounceOffset,A=new Lt(w);A.width=ce,A.height=ee,A.x=0,A.y=_,h.addChild(A)}}pr(async()=>{H=new Er,await H.init({width:n,height:o,background:"#001a33"}),ts.appendChild(H.canvas);const d={};try{x(dt,"Loading background and UI images..."),me.push(`Loading background: ${Mt}`),me.push(`Loading reel frames: ${oa}`),me.push(`Loading logo: ${ia}`),await st.load([{alias:"background",src:Mt},{alias:"reelframes",src:oa},{alias:"logo",src:ia}]),He=De.from("background"),lt=De.from("reelframes"),ct=De.from("logo"),console.log("✅ Background texture created:",He.width,"x",He.height),console.log("✅ Reel frames texture created:",lt.width,"x",lt.height),console.log("✅ Logo texture created:",ct.width,"x",ct.height),me.push("✅ All UI images loaded"),x(dt,"Loading symbols...");const c=[];for(const w of Oe)c.push({alias:w,src:Ft[w]});await st.load(c);for(const w of Oe){const _=Ft[w];me.push(`Loading symbol ${w}: ${_}`);try{const A=De.from(w);d[w]=A,console.log(`✅ Symbol ${w} loaded:`,A.width,"x",A.height),me.push(`✅ Symbol ${w} loaded`)}catch(A){const L=`❌ Failed to load symbol ${w} from ${_}: ${A}`;throw me.push(L),console.error(L),new Error(L)}}wt=d,x(dt,"Assets loaded successfully!")}catch(c){x(Ve,`Asset loading failed: ${c}`),me.push(r(Ve)),console.error(r(Ve));return}console.log("Ladataan ääniefektit...");for(const[c,w]of Object.entries(Or)){const _=new Audio;_.src=w,_.preload="auto",_.volume=.7,_.load(),_.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${w} (käytetään hiljaista placeholderia)`)}),Wt[c]=_}if(console.log("Taustakuva ladattu, tekstuuri:",He),He){const c=new Lt(He);H.renderer.width/H.renderer.height;const w=c.texture.width/c.texture.height;let _;_=H.renderer.height/c.texture.height,_*=Ae,c.scale.set(_),c.x=(H.renderer.width-c.width)/2,c.y=(H.renderer.height-c.height)/2+ne,H.stage.addChild(c),console.log("Taustakuva lisätty:",oe,"mode, size:",c.width.toFixed(0),"x",c.height.toFixed(0),"image aspect:",w.toFixed(2),"scale:",_.toFixed(2),"pos:",c.x.toFixed(0),c.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(c=>({x:c.x+l,y:c.y+p})),qe=[];for(let c=0;c<a;c++){const w=ua(c),_=w.col,A=w.row,L=300+_*(ce+20),D=250+A*(ee+15),U=c===6?L+u:L,K=c===6?D+v:D,B=new sa;B.x=U+l,B.y=K+p;const de=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],k=new Us().rect(0,0,ce,ee).fill({color:de[c],alpha:.3});k.x=B.x,k.y=B.y,H.stage.addChild(k);const R=new gr({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),O=new Ii({text:c.toString(),style:R});O.x=B.x+5,O.y=B.y+5,H.stage.addChild(O);const I=new Us().rect(0,0,ce,ee).fill(16777215);I.x=B.x,I.y=B.y,B.mask=I,H.stage.addChild(I),H.stage.addChild(B),qe.push(new tn(c,B))}if(lt){const c=new Lt(lt);c.scale.set(1),c.x=250,c.y=200,H.stage.addChild(c),Ut=c,x(Dt,ye(c.width)),console.log("Reel frames lisätty:",c.width.toFixed(0),"x",c.height.toFixed(0)),console.log("Control panel leveys päivitetty:",r(Dt).toFixed(0))}if(ct){const c=new Lt(ct);c.scale.set(P),c.x=(H.renderer.width-c.width)/2+V,c.y=se,H.stage.addChild(c),console.log("Logo lisätty päällimmäiseen layeriin:",c.width.toFixed(0),"x",c.height.toFixed(0))}la(),H.ticker.add(sn)});function sn(){for(const d of qe)d.update(),d.draw();if(!r(Ie)&&!Yt&&qe.every(d=>d.state==="stopped")){Yt=!0,Mr();const d=Jr();console.log(`Checking wins, found ${d.length} wins`),d.length>0?(x(Qe,ye(d)),x(ve,ye(d.reduce((h,c)=>h+c.payout,0))),Hr(r(Xe),d,r(ve)),an(r(ve)),x(Ie,!0),x(Ur,ye(Date.now())),console.log(`🎉 VOITTO! ${r(ve)} pistettä! Uusi saldo: ${r(Ee)}`),console.log(`isShowingWin set to: ${r(Ie)}, totalWin: ${r(ve)}`),d.forEach(h=>{const c=h.multiplier?` (${h.multiplier}x multiplier)`:"";console.log(`${h.count}x ${h.symbol} = ${h.payout} pistettä${c}`)}),en(d),Jt("win"),r(pe)&&!Ne&&(Ne=!0,ze=window.setTimeout(()=>{r(Ie)&&r(pe)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),x(Ie,!1),es()),ze=window.setTimeout(()=>{Ne=!1,as()},200)},1500))):(console.log("No wins found this spin"),r(pe)&&!Ne&&(Ne=!0,ze=window.setTimeout(()=>{Ne=!1,as()},1e3))),r(X)&&r(Se)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${r($e)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${r($e).toFixed(2)}`),x(X,!1),x($e,0)},2e3))}}function ha(){if(q&&r(we)&&!q.playing()&&(q.play(),console.log("🎵 Background music started on first spin")),Wr(),r(X)&&r(Se)>0)Te(Se,-1),Te(Zt),console.log(`🎰 FREE SPIN! Remaining: ${r(Se)}`);else if(!r(X)){if(r(Ee)<r(Y)){alert(`Not enough credits! Balance: ${r(Ee)}, Bet: ${r(Y)}`),ss();return}x(Ee,r(Ee)-r(Y)),Te(Xe),x(Ke,r(Ke)+r(Y))}ze!==null&&(clearTimeout(ze),ze=null),x(Qe,ye([])),x(ve,0),x(Ie,!1),Yt=!1,es(),pt=fa(),qe.forEach((d,h)=>{const c=Math.floor(h/3);d.startSynchronized(c)}),Jt("spin")}function an(d){if(x(Ee,r(Ee)+d),x(ft,r(ft)+d),r(X)&&x($e,r($e)+d),d>0){Te(Xt);const h=d/r(Y);h>=10&&Dr(),Ge&&(h>=50?Ge.show():h>=20?setTimeout(()=>Ge.show(),200):h>=10&&setTimeout(()=>Ge.show(),400))}}function va(){r(Y)<Vt&&x(Y,ye(Math.min(r(Y)+1,Vt)))}function ga(){r(Y)>ca&&x(Y,ye(Math.max(r(Y)-1,ca)))}function rn(){x(Y,Vt)}function vt(d){x(pe,!0),x(Ye,ye(d)),x(We,!1),as()}function ss(){x(pe,!1),x(Ye,0),Ne=!1,ze!==null&&(clearTimeout(ze),ze=null)}function as(){if(!r(pe)||r(Ye)<=0){ss();return}console.log(`Autoplay: Starting spin ${r(Ye)} rounds left`),ha(),Te(Ye,-1)}function nn(){confirm("Reset all statistics?")&&(x(Xe,0),x(Ke,0),x(ft,0),x(Xt,0),x(At,0),x(Zt,0),x(kt,0),x(qt,0))}var ma=tl();vo(d=>{var h=Di();f(Pe(h)),j(d,h)});var ba=Pe(ma);{var on=d=>{var h=Vi(),c=f(b(h),2),w=f(b(c));y(c);var _=f(c,2);{var A=O=>{var I=Ui(),N=f(b(I));y(I),ie(()=>F(N,` ${r(Ve)??""}`)),j(O,I)};le(_,O=>{r(Ve)&&O(A)})}var L=f(_,2),D=f(b(L));D.nodeValue=` ${Le??""}`,y(L);var U=f(L,2),K=f(b(U));K.nodeValue=` ${Mt??""}`,y(U);var B=f(U,2),de=f(b(B));y(B);var k=f(B,2);{var R=O=>{var I=Hi(),N=b(I),W=b(N);y(N);var Ce=f(N,2);Ct(Ce,17,()=>me,It,(tt,fe)=>{var re=Gi(),Bn=b(re,!0);y(re),ie(()=>F(Bn,r(fe))),j(tt,re)}),y(I),ie(()=>F(W,`Log (${me.length??""})`)),j(O,I)};le(k,O=>{me.length>0&&O(R)})}y(h),ie(()=>{F(w,` ${r(dt)??""}`),F(de,` ${Ft.a??""}`)}),j(d,h)};le(ba,d=>{(r(dt)!=="Assets loaded successfully!"||r(Ve))&&d(on)})}var ya=f(ba,2);{var ln=d=>{var h=Ki(),c=f(b(h),2),w=b(c);y(c);var _=f(c,2);Ct(_,17,()=>r(Qe),It,(U,K)=>{var B=Yi(),de=b(B);y(B),ie(k=>F(de,`${r(K).count??""} × ${pa[r(K).symbol]??""} = ${k??""} pistettä`),[()=>r(K).payout.toFixed(2)]),j(U,B)});var A=f(_,2);{var L=U=>{var K=Xi(),B=b(K),de=b(B);y(B),y(K),ie(()=>F(de,`✨ ${r(Qe)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),j(U,K)};le(A,U=>{r(Qe).length>0&&r(Qe)[0].multiplier>1&&U(L)})}var D=f(A,2);y(h),ie(()=>F(w,`${r(ve)??""} pistettä`)),M("click",D,()=>{x(Ie,!1),es(),console.log("Win popup closed, ready for next spin")}),j(d,h)};le(ya,d=>{r(ve)>0&&r(Ie)&&d(ln)})}var xa=f(ya,2);{var cn=d=>{var h=Qi(),c=f(b(h),8);y(h),M("click",c,()=>{x(Ze,!1)}),j(d,h)};le(xa,d=>{r(Ze)&&d(cn)})}var _a=f(xa,2);Qa(_a,d=>ts=d,()=>ts);var Et=f(_a,2),wa=b(Et);{var dn=d=>{var h=Zi(),c=Pe(h),w=f(b(c),2),_=b(w,!0);y(w),y(c);var A=f(c,2),L=f(b(A),2),D=b(L,!0);y(L),y(A),ie(U=>{F(_,r(Se)),F(D,U)},[()=>r($e).toFixed(2)]),j(d,h)};le(wa,d=>{r(X)&&d(dn)})}var rs=f(wa,2),Aa=f(b(rs),2),fn=b(Aa,!0);y(Aa),y(rs);var ka=f(rs,2),Ea=f(b(ka),2),un=b(Ea,!0);y(Ea),y(ka),y(Et);var ns=f(Et,2),za=f(b(ns),2),Sa=b(za),os=f(Sa,2),pn=b(os,!0);y(os);var Ta=f(os,2),hn=f(Ta,2);y(za),y(ns);var La=f(ns,2),is=f(La,2),Ra=f(b(is),2);Ra.textContent=`v${s}`;var ls=f(Ra,2),Pa=f(b(ls),2),vn=b(Pa,!0);y(Pa),y(ls);var cs=f(ls,2),Oa=f(b(cs),2),gn=b(Oa,!0);y(Oa),y(cs);var ds=f(cs,2),$a=f(b(ds),2),mn=b($a,!0);y($a),y(ds);var fs=f(ds,2),us=f(b(fs),2),bn=b(us);y(us),y(fs);var ps=f(fs,2),hs=f(b(ps),2),yn=b(hs);y(hs),y(ps);var vs=f(ps,2),Ia=f(b(vs),2),xn=b(Ia,!0);y(Ia),y(vs);var gs=f(vs,2),Ca=f(b(gs),2),_n=b(Ca,!0);y(Ca),y(gs);var ms=f(gs,2),Ba=f(b(ms),2),wn=b(Ba);y(Ba),y(ms);var Fa=f(ms,2),Ma=f(Fa,2),Je=b(Ma),An=b(Je);y(Je);var zt=f(Je,2),gt=f(zt,2),kn=b(gt);y(gt);var bs=f(gt,2);y(Ma),y(is);var ys=f(is,2),En=b(ys);{var zn=d=>{var h=qi(),c=f(b(h),2),w=b(c);y(c);var _=f(c,2);y(h),ie(()=>F(w,`${r(Ye)??""} left`)),M("click",_,ss),j(d,h)},Sn=d=>{var h=el(),c=Pe(h),w=f(c,2);{var _=A=>{var L=Ji(),D=f(b(L),2),U=f(D,2),K=f(U,2),B=f(K,2),de=f(B,2),k=f(de,2);y(L),M("click",D,()=>vt(10)),M("click",U,()=>vt(100)),M("click",K,()=>vt(1e3)),M("click",B,()=>vt(1e4)),M("click",de,()=>vt(1e5)),M("click",k,()=>{x(We,!1)}),j(A,L)};le(w,A=>{r(We)&&A(_)})}M("click",c,()=>{x(We,!r(We))}),j(d,h)};le(En,d=>{r(pe)?d(zn):d(Sn,!1)})}y(ys);var et=f(ys,2),Tn=b(et,!0);y(et);var St=f(et,2),xs=b(St);T(xs,"src",`${J??""}/Control_leftend.png`),T(xs,"style",`height: ${g}px; flex-shrink: 0;`);var Tt=f(xs,2);T(Tt,"style",`
    flex-grow: 1;
    height: ${g}px;
    background-image: url('${J??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 20px;
  `);var _s=b(Tt),Wa=f(b(_s),2),ws=b(Wa);T(ws,"style",`
            width: 40px;
            height: 40px;
            background-image: url('${J??""}/Control_lowerbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `);var As=f(ws,2),Ln=b(As,!0);y(As);var Na=f(As,2);T(Na,"style",`
            width: 40px;
            height: 40px;
            background-image: url('${J??""}/Control_upperbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(Wa),y(_s);var ks=f(_s,2);T(ks,"src",`${J??""}/Control_divider.png`),T(ks,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Es=f(ks,2),ja=f(b(Es),2),Rn=b(ja,!0);y(ja),y(Es);var zs=f(Es,2);T(zs,"src",`${J??""}/Control_divider.png`),T(zs,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Ss=f(zs,2),Ts=b(Ss),Ls=b(Ts);y(Ts),y(Ss);var Rs=f(Ss,2);T(Rs,"src",`${J??""}/Control_divider.png`),T(Rs,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Ps=f(Rs,2),Os=b(Ps),Pn=f(Os,2);y(Ps);var $s=f(Ps,2);T($s,"src",`${J??""}/Control_divider.png`),T($s,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Is=f($s,2),Cs=b(Is),On=f(Cs,2);y(Is);var Bs=f(Is,2);T(Bs,"src",`${J??""}/Control_divider.png`),T(Bs,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Fs=f(Bs,2),Da=f(b(Fs),2),$n=b(Da,!0);y(Da),y(Fs);var Ms=f(Fs,2);T(Ms,"src",`${J??""}/Control_divider.png`),T(Ms,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Ua=f(Ms,2);T(Ua,"style",`
        width: 50px;
        height: 50px;
        background-image: url('${J??""}/Control_menubar.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),y(Tt);var Ga=f(Tt,2);T(Ga,"src",`${J??""}/Control_rightend.png`),T(Ga,"style",`height: ${g}px; flex-shrink: 0;`),y(St);var In=f(St,2);const Cn=je(()=>r(ve)/r(Y)>=50?"jackpot":r(ve)/r(Y)>=20?"medium":"small");Qa(ji(In,{get winLevel(){return r(Cn)},get winAmount(){return r(ve)}}),d=>Ge=d,()=>Ge),ie((d,h,c,w,_,A,L,D,U)=>{T(Et,"style",`
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
  border: 2px solid ${(r(X)?"#ff00ff":"#ffd700")??""};
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
  z-index: 1500;
  min-width: 180px;
`),F(fn,d),F(un,r(Y)),F(pn,r(Y)),F(vn,h),F(gn,c),F(mn,w),T(us,"style",`color: ${_??""};`),F(bn,`${r(Kt)??""}%`),T(hs,"style",`color: ${A??""};`),F(yn,`${r(Qt)??""}%`),F(xn,r(At)),F(_n,r(Zt)),F(wn,`${r(Gr)??""}%`),Je.disabled=r(he).length===0,T(Je,"style",`
        width: 100%;
        padding: 5px;
        background: ${(r(he).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(r(he).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(r(he).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(r(he).length>0?"1":"0.5")??""};
      `),F(An,`Download Win Log (${r(he).length??""})`),zt.disabled=r(he).length===0,T(zt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(r(he).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(r(he).length>0?"1":"0.5")??""};
      `),T(gt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(r(we)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(r(we)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),F(kn,`🎵 Music: ${(r(we)?"ON":"OFF")??""}`),bs.disabled=r(X),T(bs,"style",`
        width: 100%;
        padding: 5px;
        background: ${(r(X)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(r(X)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(r(X)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(r(X)?"0.5":"1")??""};
      `),T(et,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(r(ke)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(r(ke)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),T(et,"title",r(ke)?"Mykistä äänet":"Laita äänet päälle"),F(Tn,r(ke)?"🔊":"🔇"),T(St,"style",`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(
    calc(-50% + ${(Ut?Ut.x:E)+z}px),
    calc(-50% + ${m+Z}px)
  ) scale(${G}, ${S});
  transform-origin: center center;
  width: ${r(Dt)??""}px;
  height: ${g}px;
  display: flex;
  align-items: center;
  z-index: 1000;
`),F(Ln,L),F(Rn,D),Qs(Ts,1,`play-button-wrapper ${(r(Ht)?"glare-animate":"")??""}`,"svelte-2k82zv"),Ls.disabled=r(pe),T(Ls,"style",`
            width: 130px;
            height: 130px;
            background-image: url('${J??""}/Control_playbutton.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border: none;
            cursor: ${(r(pe)?"not-allowed":"pointer")??""};
            background-color: transparent;
            opacity: ${(r(pe)?.5:1)??""};
            position: relative;
            z-index: 10;
            border-radius: 50%;
          `),T(Os,"style",`
          width: 50px;
          height: 50px;
          background-image: url('${J??""}/${(r(pe)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),T(Pn,"src",`${J??""}/${(r(pe)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),T(Cs,"style",`
          width: 50px;
          height: 50px;
          background-image: url('${J??""}/${(r(_t)?"Control_fastplay_select.png":"Control_fastplay_deselect.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),T(On,"src",`${J??""}/${(r(_t)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),F($n,U)},[()=>r(Ee).toLocaleString(),()=>r(Xe).toLocaleString(),()=>r(Ke).toLocaleString(),()=>r(ft).toLocaleString(),()=>parseFloat(r(Kt))>=95?"#00ff00":parseFloat(r(Kt))>=85?"#ffff00":"#ff6666",()=>parseFloat(r(Qt))>=30?"#00ff00":parseFloat(r(Qt))>=20?"#ffff00":"#ff6666",()=>r(Y).toFixed(2),()=>r(Ee).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>r(ve).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),M("click",Sa,ga),M("click",Ta,va),M("click",hn,rn),M("click",La,()=>{x(Ze,!r(Ze))}),M("click",Fa,nn),M("click",Je,Vr),M("click",zt,Yr),M("click",gt,Nr),M("click",bs,Xr),M("click",et,()=>{x(ke,!r(ke))}),M("click",ws,ga),M("click",Na,va),M("click",Ls,ha),M("click",Os,()=>{x(We,!r(We))}),M("click",Cs,()=>{x(_t,!r(_t))}),M("click",Ua,()=>{x(Ze,!r(Ze))}),j(t,ma),ta()}var al=Q('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),rl=Q('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function nl(t,e){ea(e,!1);let s=Ks(e,"isAuthenticated",12,!1),a=Xs(""),n=Xs(!1);const o="slot2024";function i(){r(a)===o?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(x(n,!0),x(a,""),setTimeout(()=>x(n,!1),3e3))}pr(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),Dn();var l=lr(),p=Pe(l);{var v=u=>{var m=rl(),g=b(m),E=f(b(g),4),z=b(E);Lo(z),ho(2),y(E);var Z=f(E,2);{var G=S=>{var P=al();j(S,P)};le(Z,S=>{r(n)&&S(G)})}y(g),y(m),Po(z,()=>r(a),S=>x(a,S)),M("submit",E,Oo(i)),j(u,m)};le(p,u=>{s()||u(v)})}j(t,l),ta()}var ol=Q('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),il=Q("<!> <!>",1);function xl(t){let e=Xs(!1);var s=il(),a=Pe(s);nl(a,{get isAuthenticated(){return r(e)},set isAuthenticated(i){x(e,i)},$$legacy:!0});var n=f(a,2);{var o=i=>{var l=ol(),p=f(Pe(l),2);sl(p,{}),j(i,l)};le(n,i=>{r(e)&&i(o)})}j(t,s)}export{_r as A,br as C,No as R,Co as S,wr as V,xl as _,Io as u};
