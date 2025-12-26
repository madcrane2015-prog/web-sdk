const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./yUD-I5m1.js","./SpTHHzAp.js","./DN2ixH3E.js","./D1rxTRw3.js","./BUP9hRfY.js","./C2GHuDhf.js","./ChiOifLY.js","./DvZbQQbe.js"])))=>i.map(i=>d[i]);
var Bn=Object.defineProperty;var Fn=(t,e,s)=>e in t?Bn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var me=(t,e,s)=>Fn(t,typeof e!="symbol"?e+"":e,s);import{f as Mn,l as Wn,d as nr,a as j,t as q,n as or,g as M,i as Nn}from"./CzvQHsIM.js";import{i as jn}from"./CSlWMsbo.js";import{R as ye,T as Dn,Q as Un,i as n,w as Gn,W as Hn,X as Da,Y as Ua,Z as Bs,a1 as ht,a9 as Vn,_ as ir,$ as lr,a0 as Yn,ad as cr,O as Xn,z as Kn,I as Ga,ar as Fs,K as Ha,as as Qn,at as Zn,au as qn,ac as Jn,av as eo,aw as to,ax as so,ay as ao,a3 as ro,az as no,aA as oo,N as io,aB as lo,aC as co,g as fo,n as po,p as Qs,f as Oe,ai as O,a as Zs,y as x,c as b,s as f,r as y,t as ie,k as Me,ah as dr,aD as ze,aE as uo,aF as Hs}from"./D1rxTRw3.js";import{_ as Va,i as le,p as be}from"./DN2ixH3E.js";import{a as ho,s as F}from"./CSYyqGjZ.js";import{p as fr,b as Ya}from"./Dk6Goypl.js";import{b as Se}from"./Ycrj12nE.js";import{e as Ce,E as C,a as vo,C as qs,Q as Tt,V as Lt,N as Ms,D as ce,H as go,p as We,ab as st,ac as Ne,ad as mo,w as Ie,ae as gt,af as pr,ag as at,a9 as Te,ah as $t,a1 as ur,ai as bo,aj as Ws,aa as yo,ak as xo,y as Et}from"./SpTHHzAp.js";import{A as _o,B as Xa,G as wo,T as hr,a as Ao,b as Ns}from"./BUP9hRfY.js";function Rt(t,e){return e}function ko(t,e,s,a){for(var r=[],o=e.length,i=0;i<o;i++)qn(e[i].e,r,!0);var l=o>0&&r.length===0&&s!==null;if(l){var u=s.parentNode;Jn(u),u.append(s),a.clear(),$e(t,e[0].prev,e[o-1].next)}eo(r,()=>{for(var v=0;v<o;v++){var p=e[v];l||(a.delete(p.k),$e(t,p.prev,p.next)),to(p.e,!l)}})}function Pt(t,e,s,a,r,o=null){var i=t,l={flags:e,items:new Map,first:null};ye&&Dn();var u=null,v=!1,p=Gn(()=>{var m=s();return Xn(m)?m:m==null?[]:cr(m)});Un(()=>{var m=n(p),g=m.length;if(v&&g===0)return;v=g===0;let z=!1;if(ye){var S=i.data===Hn;S!==(g===0)&&(i=Da(),Ua(i),Bs(!1),z=!0)}if(ye){for(var J=null,G,A=0;A<g;A++){if(ht.nodeType===8&&ht.data===Vn){i=ht,z=!0,Bs(!1);break}var P=m[A],te=a(P,A);G=vr(ht,l,J,null,P,te,A,r,e,s),l.items.set(te,G),J=G}g>0&&Ua(Da())}ye||Eo(m,l,i,r,e,a,s),o!==null&&(g===0?u?ir(u):u=lr(()=>o(i)):u!==null&&Yn(u,()=>{u=null})),z&&Bs(!0),n(p)}),ye&&(i=ht)}function Eo(t,e,s,a,r,o,i){var l=t.length,u=e.items,v=e.first,p=v,m,g=null,z=[],S=[],J,G,A,P;for(P=0;P<l;P+=1){if(J=t[P],G=o(J,P),A=u.get(G),A===void 0){var te=p?p.e.nodes_start:s;g=vr(te,e,g,g===null?e.first:g.next,J,G,P,a,r,i),u.set(G,g),z=[],S=[],p=g.next;continue}if(zo(A,J,P),(A.e.f&Fs)!==0&&ir(A.e),A!==p){if(m!==void 0&&m.has(A)){if(z.length<S.length){var de=S[0],V;g=de.prev;var _e=z[0],fe=z[z.length-1];for(V=0;V<z.length;V+=1)Ka(z[V],de,s);for(V=0;V<S.length;V+=1)m.delete(S[V]);$e(e,_e.prev,fe.next),$e(e,g,_e),$e(e,fe,de),p=de,g=fe,P-=1,z=[],S=[]}else m.delete(A),Ka(A,p,s),$e(e,A.prev,A.next),$e(e,A,g===null?e.first:g.next),$e(e,g,A),g=A;continue}for(z=[],S=[];p!==null&&p.k!==G;)(p.e.f&Fs)===0&&(m??(m=new Set)).add(p),S.push(p),p=p.next;if(p===null)continue;A=p}z.push(A),g=A,p=A.next}if(p!==null||m!==void 0){for(var Y=m===void 0?[]:cr(m);p!==null;)(p.e.f&Fs)===0&&Y.push(p),p=p.next;var ae=Y.length;if(ae>0){var he=null;ko(e,Y,he,u)}}Ha.first=e.first&&e.first.e,Ha.last=g&&g.e}function zo(t,e,s,a){Zn(t.v,e),t.i=s}function vr(t,e,s,a,r,o,i,l,u,v){var p=(u&so)!==0,m=(u&ao)===0,g=p?m?Kn(r):Ga(r):r,z=(u&Qn)===0?i:Ga(i),S={i:z,v:g,k:o,a:null,e:null,prev:s,next:a};try{return S.e=lr(()=>l(t,g,z,v),ye),S.e.prev=s&&s.e,S.e.next=a&&a.e,s===null?e.first=S:(s.next=S,s.e.next=S.e),a!==null&&(a.prev=S,a.e.prev=S.e),S}finally{}}function Ka(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,r=e?e.e.nodes_start:s,o=t.e.nodes_start;o!==a;){var i=ro(o);r.before(o),o=i}}function $e(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}const Qa=[...` 	
\r\f \v\uFEFF`];function So(t,e,s){var a=t==null?"":""+t;if(e&&(a=a?a+" "+e:e),s){for(var r in s)if(s[r])a=a?a+" "+r:r;else if(a.length)for(var o=r.length,i=0;(i=a.indexOf(r,i))>=0;){var l=i+o;(i===0||Qa.includes(a[i-1]))&&(l===a.length||Qa.includes(a[l]))?a=(i===0?"":a.substring(0,i))+a.substring(l+1):i=l}}return a===""?null:a}function Vs(t,e,s,a,r,o){var i=t.__className;if(ye||i!==s){var l=So(s,a,o);(!ye||l!==t.getAttribute("class"))&&(l==null?t.removeAttribute("class"):e?t.className=l:t.setAttribute("class",l)),t.__className=s}else if(o)for(var u in o){var v=!!o[u];(r==null||v!==!!r[u])&&t.classList.toggle(u,v)}return o}function To(t){if(ye){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;T(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var r=t.checked;T(t,"checked",null),t.checked=r}}};t.__on_r=s,no(s),Mn()}}function T(t,e,s,a){var r=t.__attributes??(t.__attributes={});ye&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[oo]=s),s==null?t.removeAttribute(e):typeof s!="string"&&Lo(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var Za=new Map;function Lo(t){var e=Za.get(t.nodeName);if(e)return e;Za.set(t.nodeName,e=[]);for(var s,a=t,r=Element.prototype;r!==a;){s=lo(a);for(var o in s)s[o].set&&e.push(o);a=io(a)}return e}function Ro(t,e,s=e){var a=co();Wn(t,"input",r=>{var o=r?t.defaultValue:t.value;if(o=js(t)?Ds(o):o,s(o),a&&o!==(o=e())){var i=t.selectionStart,l=t.selectionEnd;t.value=o??"",l!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(l,t.value.length))}}),(ye&&t.defaultValue!==t.value||fo(e)==null&&t.value)&&s(js(t)?Ds(t.value):t.value),po(()=>{var r=e();js(t)&&r===Ds(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function js(t){var e=t.type;return e==="number"||e==="range"}function Ds(t){return t===""?null:+t}function Po(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const Ys=[];Ce.handleByNamedList(C.Environment,Ys);async function $o(t){if(!t)for(let e=0;e<Ys.length;e++){const s=Ys[e];if(s.value.test()){await s.value.load();return}}}let vt;function Oo(){if(typeof vt=="boolean")return vt;try{vt=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{vt=!1}return vt}var gr=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(gr||{});class Io{constructor(e){this.items=[],this._name=e}emit(e,s,a,r,o,i,l,u){const{name:v,items:p}=this;for(let m=0,g=p.length;m<g;m++)p[m][v](e,s,a,r,o,i,l,u);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Co=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],mr=class br extends vo{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...Co,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await $o(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...br.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof qs&&(a={container:a},s&&(Tt(Lt,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const r=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=r?a.clearColor:Ms.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const r=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==r&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=gr.ALL);const{clear:a,clearColor:r,target:o}=e;Ms.shared.setValue(r??this.background.colorRgba),s.renderTarget.clear(o,a,Ms.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new Io(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const r in this.runners)this.runners[r].add(a);return this}_addPipes(e,s){const a=s.reduce((r,o)=>(r[o.name]=o.value,r),{});e.forEach(r=>{const o=r.value,i=r.name,l=a[i];this.renderPipes[i]=new o(this,l?new l:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Oo())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};mr.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let yr=mr,zt;function Bo(t){return zt!==void 0||(zt=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??yr.defaultOptions.failIfMajorPerformanceCaveat};try{if(!ce.get().getWebGLRenderingContext())return!1;let r=ce.get().createCanvas().getContext("webgl",e);const o=!!((s=r==null?void 0:r.getContextAttributes())!=null&&s.stencil);if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,o}catch{return!1}})()),zt}let St;async function Fo(t={}){return St!==void 0||(St=await(async()=>{const e=ce.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),St}const qa=["webgl","webgpu","canvas"];async function Mo(t){let e=[];t.preference?(e.push(t.preference),qa.forEach(o=>{o!==t.preference&&e.push(o)})):e=qa.slice();let s,a={};for(let o=0;o<e.length;o++){const i=e[o];if(i==="webgpu"&&await Fo()){const{WebGPURenderer:l}=await Va(async()=>{const{WebGPURenderer:u}=await import("./yUD-I5m1.js");return{WebGPURenderer:u}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=l,a={...t,...t.webgpu};break}else if(i==="webgl"&&Bo(t.failIfMajorPerformanceCaveat??yr.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:l}=await Va(async()=>{const{WebGLRenderer:u}=await import("./DvZbQQbe.js");return{WebGLRenderer:u}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=l,a={...t,...t.webgl};break}else if(i==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const r=new s;return await r.init(a),r}const xr="8.8.1";class _r{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,xr)}static destroy(){}}_r.extension=C.Application;class Wo{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,xr)}destroy(){this._renderer=null}}Wo.extension={type:[C.WebGLSystem,C.WebGPUSystem],name:"initHook",priority:-10};const wr=class Xs{constructor(...e){this.stage=new qs,e[0]!==void 0&&Tt(Lt,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Mo(e),Xs._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Tt(Lt,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=Xs._plugins.slice(0);a.reverse(),a.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};wr._plugins=[];let Ar=wr;Ce.handleByList(C.Application,Ar._plugins);Ce.add(_r);class kr extends _o{constructor(e,s){super();const{textures:a,data:r}=e;Object.keys(r.pages).forEach(o=>{const i=r.pages[parseInt(o,10)],l=a[i.id];this.pages.push({texture:l})}),Object.keys(r.chars).forEach(o=>{const i=r.chars[o],{frame:l,source:u}=a[i.page],v=new go(i.x+l.x,i.y+l.y,i.width,i.height),p=new We({source:u,frame:v});this.chars[o]={id:o.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:p}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){Xa.install(e)}static uninstall(e){Xa.uninstall(e)}}const Us={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const m in e){const g=e[m].match(/^[a-z]+/gm)[0],z=e[m].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),S={};for(const J in z){const G=z[J].split("="),A=G[0],P=G[1].replace(/"/gm,""),te=parseFloat(P),de=isNaN(te)?P:te;S[A]=de}s[g].push(S)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=s.info,[o]=s.common,[i]=s.distanceField??[];i&&(a.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),a.fontSize=parseInt(r.size,10),a.fontFamily=r.face,a.lineHeight=parseInt(o.lineHeight,10);const l=s.page;for(let m=0;m<l.length;m++)a.pages.push({id:parseInt(l[m].id,10)||0,file:l[m].file});const u={};a.baseLineOffset=a.lineHeight-parseInt(o.base,10);const v=s.char;for(let m=0;m<v.length;m++){const g=v[m],z=parseInt(g.id,10);let S=g.letter??g.char??String.fromCharCode(z);S==="space"&&(S=" "),u[z]=S,a.chars[S]={id:z,page:parseInt(g.page,10)||0,x:parseInt(g.x,10),y:parseInt(g.y,10),width:parseInt(g.width,10),height:parseInt(g.height,10),xOffset:parseInt(g.xoffset,10),yOffset:parseInt(g.yoffset,10),xAdvance:parseInt(g.xadvance,10),kerning:{}}}const p=s.kerning||[];for(let m=0;m<p.length;m++){const g=parseInt(p[m].first,10),z=parseInt(p[m].second,10),S=parseInt(p[m].amount,10);a.chars[u[z]].kerning[u[g]]=S}return a}},Ja={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const o=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),l=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let v=0;v<o.length;v++)e.pages.push({id:parseInt(o[v].getAttribute("id"),10)||0,file:o[v].getAttribute("file")});const u={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let v=0;v<i.length;v++){const p=i[v],m=parseInt(p.getAttribute("id"),10);let g=p.getAttribute("letter")??p.getAttribute("char")??String.fromCharCode(m);g==="space"&&(g=" "),u[m]=g,e.chars[g]={id:m,page:parseInt(p.getAttribute("page"),10)||0,x:parseInt(p.getAttribute("x"),10),y:parseInt(p.getAttribute("y"),10),width:parseInt(p.getAttribute("width"),10),height:parseInt(p.getAttribute("height"),10),xOffset:parseInt(p.getAttribute("xoffset"),10),yOffset:parseInt(p.getAttribute("yoffset"),10),xAdvance:parseInt(p.getAttribute("xadvance"),10),kerning:{}}}for(let v=0;v<l.length;v++){const p=parseInt(l[v].getAttribute("first"),10),m=parseInt(l[v].getAttribute("second"),10),g=parseInt(l[v].getAttribute("amount"),10);e.chars[u[m]].kerning[u[p]]=g}return e}},er={test(t){return typeof t=="string"&&t.includes("<font>")?Ja.test(ce.get().parseXML(t)):!1},parse(t){return Ja.parse(ce.get().parseXML(t))}},No=[".xml",".fnt"],jo={extension:{type:C.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof kr,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},Do={extension:{type:C.LoadParser,priority:st.Normal},name:"loadBitmapFont",test(t){return No.includes(Ne.extname(t).toLowerCase())},async testParse(t){return Us.test(t)||er.test(t)},async parse(t,e,s){const a=Us.test(t)?Us.parse(t):er.parse(t),{src:r}=e,{pages:o}=a,i=[],l=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let m=0;m<o.length;++m){const g=o[m].file;let z=Ne.join(Ne.dirname(r),g);z=mo(z,r),i.push({src:z,data:l})}const u=await s.load(i),v=i.map(m=>u[m.src]);return new kr({data:a,textures:v},r)},async load(t,e){return await(await ce.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class Uo{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Go={extension:{type:C.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof We),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((r,o)=>{s[a+(o===0?"":o+1)]=r})}),s}};async function Er(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Ho={extension:{type:C.DetectionParser,priority:1},test:async()=>Er("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},tr=["png","jpg","jpeg"],Vo={extension:{type:C.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...tr],remove:async t=>t.filter(e=>!tr.includes(e))},Yo="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Js(t){return Yo?!1:document.createElement("video").canPlayType(t)!==""}const Xo={extension:{type:C.DetectionParser,priority:0},test:async()=>Js("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},Ko={extension:{type:C.DetectionParser,priority:0},test:async()=>Js("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},Qo={extension:{type:C.DetectionParser,priority:0},test:async()=>Js("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},Zo={extension:{type:C.DetectionParser,priority:0},test:async()=>Er("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class qo{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var i,l;let r=null,o=null;if(s.loadParser&&(o=this._parserHash[s.loadParser],o||Ie(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!o){for(let u=0;u<this.parsers.length;u++){const v=this.parsers[u];if(v.load&&((i=v.test)!=null&&i.call(v,e,s,this))){o=v;break}}if(!o)return Ie(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await o.load(e,s,this),a.parser=o;for(let u=0;u<this.parsers.length;u++){const v=this.parsers[u];v.parse&&v.parse&&await((l=v.testParse)==null?void 0:l.call(v,r,s,this))&&(r=await v.parse(r,s,this)||r,a.parser=v)}return r})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const r={},o=pr(e),i=gt(e,v=>({alias:[v],src:v,data:{}})),l=i.length,u=i.map(async v=>{const p=Ne.toAbsolute(v.src);if(!r[v.src])try{this.promiseCache[p]||(this.promiseCache[p]=this._getLoadPromiseAndParser(p,v)),r[v.src]=await this.promiseCache[p].promise,s&&s(++a/l)}catch(m){throw delete this.promiseCache[p],delete r[v.src],new Error(`[Loader.load] Failed to load ${p}.
${m}`)}});return await Promise.all(u),o?r[i[0].src]:r}async unload(e){const a=gt(e,r=>({alias:[r],src:r})).map(async r=>{var l,u;const o=Ne.toAbsolute(r.src),i=this.promiseCache[o];if(i){const v=await i.promise;delete this.promiseCache[o],await((u=(l=i.parser)==null?void 0:l.unload)==null?void 0:u.call(l,v,r,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&Ie(`[Assets] loadParser name conflict "${s.name}"`):Ie("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function rt(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const Jo=".json",ei="application/json",ti={extension:{type:C.LoadParser,priority:st.Low},name:"loadJson",test(t){return rt(t,ei)||at(t,Jo)},async load(t){return await(await ce.get().fetch(t)).json()}},si=".txt",ai="text/plain",ri={name:"loadTxt",extension:{type:C.LoadParser,priority:st.Low,name:"loadTxt"},test(t){return rt(t,ai)||at(t,si)},async load(t){return await(await ce.get().fetch(t)).text()}},ni=["normal","bold","100","200","300","400","500","600","700","800","900"],oi=[".ttf",".otf",".woff",".woff2"],ii=["font/ttf","font/otf","font/woff","font/woff2"],li=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function ci(t){const e=Ne.extname(t),r=Ne.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(l=>l.charAt(0).toUpperCase()+l.slice(1));let o=r.length>0;for(const l of r)if(!l.match(li)){o=!1;break}let i=r.join(" ");return o||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const di=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function fi(t){return di.test(t)?t:encodeURI(t)}const pi={extension:{type:C.LoadParser,priority:st.Low},name:"loadWebFont",test(t){return rt(t,ii)||at(t,oi)},async load(t,e){var a,r,o;const s=ce.get().getFontFaceSet();if(s){const i=[],l=((a=e.data)==null?void 0:a.family)??ci(t),u=((o=(r=e.data)==null?void 0:r.weights)==null?void 0:o.filter(p=>ni.includes(p)))??["normal"],v=e.data??{};for(let p=0;p<u.length;p++){const m=u[p],g=new FontFace(l,`url(${fi(t)})`,{...v,weight:m});await g.load(),s.add(g),i.push(g)}return Te.set(`${l}-and-url`,{url:t,fontFaces:i}),i.length===1?i[0]:i}return Ie("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{Te.remove(`${e.family}-and-url`),ce.get().getFontFaceSet().delete(e)})}};function ea(t,e=1){var a;const s=(a=$t.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function ta(t,e,s){t.label=s,t._sourceOrigin=s;const a=new We({source:t,label:s}),r=()=>{delete e.promiseCache[s],Te.has(s)&&Te.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(Ie("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),a.once("destroy",()=>{t.destroyed||(Ie("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),a}const ui=".svg",hi="image/svg+xml",vi={extension:{type:C.LoadParser,priority:st.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return rt(t,hi)||at(t,ui)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?mi(t):gi(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function gi(t,e,s,a){var G,A,P;const o=await(await ce.get().fetch(t)).blob(),i=URL.createObjectURL(o),l=new Image;l.src=i,l.crossOrigin=a,await l.decode(),URL.revokeObjectURL(i);const u=document.createElement("canvas"),v=u.getContext("2d"),p=((G=e.data)==null?void 0:G.resolution)||ea(t),m=((A=e.data)==null?void 0:A.width)??l.width,g=((P=e.data)==null?void 0:P.height)??l.height;u.width=m*p,u.height=g*p,v.drawImage(l,0,0,m*p,g*p);const{parseAsGraphicsContext:z,...S}=e.data??{},J=new ur({resource:u,alphaMode:"premultiply-alpha-on-upload",resolution:p,...S});return ta(J,s,t)}async function mi(t){const s=await(await ce.get().fetch(t)).text(),a=new wo;return a.svg(s),a}const bi=`(function () {
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
`;let et=null,Ks=class{constructor(){et||(et=URL.createObjectURL(new Blob([bi],{type:"application/javascript"}))),this.worker=new Worker(et)}};Ks.revokeObjectURL=function(){et&&(URL.revokeObjectURL(et),et=null)};const yi=`(function () {
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
`;let tt=null;class zr{constructor(){tt||(tt=URL.createObjectURL(new Blob([yi],{type:"application/javascript"}))),this.worker=new Worker(tt)}}zr.revokeObjectURL=function(){tt&&(URL.revokeObjectURL(tt),tt=null)};let sr=0,Gs;class xi{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new Ks;s.addEventListener("message",a=>{s.terminate(),Ks.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Gs===void 0&&(Gs=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Gs&&(this._createdWorkers++,e=new zr().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((r,o)=>{this._queue.push({id:e,arguments:s,resolve:r,reject:o})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[sr]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:sr++,id:a})}}const ar=new xi,_i=[".jpeg",".jpg",".png",".webp",".avif"],wi=["image/jpeg","image/png","image/webp","image/avif"];async function Ai(t,e){var r;const s=await ce.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const Sr={name:"loadTextures",extension:{type:C.LoadParser,priority:st.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return rt(t,wi)||at(t,_i)},async load(t,e,s){var o;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await ar.isImageBitmapSupported()?a=await ar.loadImageBitmap(t,e):a=await Ai(t,e):a=await new Promise((i,l)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?i(a):(a.onload=()=>{i(a)},a.onerror=l)});const r=new ur({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((o=e.data)==null?void 0:o.resolution)||ea(t),...e.data});return ta(r,s,t)},unload(t){t.destroy(!0)}},Tr=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],ki=Tr.map(t=>`video/${t.substring(1)}`);function Ei(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=Si(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function zi(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",r),t.load();function a(){o(),e()}function r(i){o(),s(i)}function o(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",r)}})}function Si(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const Ti={name:"loadVideo",extension:{type:C.LoadParser,name:"loadVideo"},test(t){const e=rt(t,ki),s=at(t,Tr);return e||s},async load(t,e,s){var u,v;const a={...Ws.defaultOptions,resolution:((u=e.data)==null?void 0:u.resolution)||ea(t),alphaMode:((v=e.data)==null?void 0:v.alphaMode)||await bo(),...e.data},r=document.createElement("video"),o={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(o).forEach(p=>{const m=o[p];m!==void 0&&r.setAttribute(p,m)}),a.muted===!0&&(r.muted=!0),Ei(r,t,a.crossorigin);const i=document.createElement("source");let l;if(t.startsWith("data:"))l=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const p=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();l=Ws.MIME_TYPES[p]||`video/${p}`}return i.src=t,l&&(i.type=l),new Promise(p=>{const m=async()=>{const g=new Ws({...a,resource:r});r.removeEventListener("canplay",m),e.data.preload&&await zi(r),p(ta(g,s,t))};r.addEventListener("canplay",m),r.appendChild(i)})},unload(t){t.destroy(!0)}},Lr={extension:{type:C.ResolveParser,name:"resolveTexture"},test:Sr.test,parse:t=>{var e;return{resolution:parseFloat(((e=$t.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},Li={extension:{type:C.ResolveParser,priority:-2,name:"resolveJson"},test:t=>$t.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:Lr.parse};class Ri{constructor(){this._detections=[],this._initialized=!1,this.resolver=new $t,this.loader=new qo,this.cache=Te,this._backgroundLoader=new Uo(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var o,i;if(this._initialized){Ie("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let l=e.manifest;typeof l=="string"&&(l=await this.load(l)),this.resolver.addManifest(l)}const s=((o=e.texturePreference)==null?void 0:o.resolution)??1,a=typeof s=="number"?[s]:s,r=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=pr(e),r=gt(e).map(l=>{if(typeof l!="string"){const u=this.resolver.getAlias(l);return u.some(v=>!this.resolver.hasKey(v))&&this.add(l),Array.isArray(u)?u[0]:u}return this.resolver.hasKey(l)||this.add({alias:l,src:l}),l}),o=this.resolver.resolve(r),i=await this._mapLoadToResolve(o,s);return a?i[r[0]]:i}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const r=this.resolver.resolveBundle(e),o={},i=Object.keys(r);let l=0,u=0;const v=()=>{s==null||s(++l/u)},p=i.map(m=>{const g=r[m];return u+=Object.keys(g).length,this._mapLoadToResolve(g,v).then(z=>{o[m]=z})});return await Promise.all(p),a?o[e[0]]:o}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Te.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=Te.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(a,s);this._backgroundLoader.active=!0;const o={};return a.forEach(i=>{const l=r[i.src],u=[i.src];i.alias&&u.push(...i.alias),u.forEach(v=>{o[v]=l}),Te.set(u,l)}),o}async unload(e){this._initialized||await this.init();const s=gt(e).map(r=>typeof r!="string"?r.src:r),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=gt(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(r=>this._unloadFromResolved(s[r]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{Te.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,r)=>s.indexOf(a)===r),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const Je=new Ri;Ce.handleByList(C.LoadParser,Je.loader.parsers).handleByList(C.ResolveParser,Je.resolver.parsers).handleByList(C.CacheParser,Je.cache.parsers).handleByList(C.DetectionParser,Je.detections);Ce.add(Go,Vo,Ho,Zo,Xo,Ko,Qo,ti,ri,pi,vi,Sr,Ti,Do,jo,Lr,Li);const rr={loader:C.LoadParser,resolver:C.ResolveParser,cache:C.CacheParser,detection:C.DetectionParser};Ce.handle(C.Asset,t=>{const e=t.ref;Object.entries(rr).filter(([s])=>!!e[s]).forEach(([s,a])=>Ce.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(rr).filter(s=>!!e[s]).forEach(s=>Ce.remove(e[s]))});class Pi extends yo{constructor(e,s){const{text:a,resolution:r,style:o,anchor:i,width:l,height:u,roundPixels:v,...p}=e;super({...p}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=o,this.resolution=r??null,this.allowChildren=!1,this._anchor=new xo({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=v??!1,l!==void 0&&(this.width=l),u!==void 0&&(this.height=u)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,r=-s*this.anchor.x;let o=0;return e.x>=r&&e.x<=r+s&&(o=-a*this.anchor.y,e.y>=o&&e.y<=o+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function $i(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(Tt(Lt,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class Oi extends Pi{constructor(...e){const s=$i(e,"Text");super(s,hr),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=Ao.measureText(this._text,this._style),{width:r,height:o}=a;e.minX=-s._x*r,e.maxX=e.minX+r,e.minY=-s._y*o,e.maxY=e.minY+o}}const Ii="1.1.5",Ci={version:Ii};var Bi=or('<use href="#sparkle" class="sparkle svelte-ps9gl9"></use>'),Fi=or('<use href="#vinyl"></use>'),Mi=q('<div><svg class="vinyl-canvas svelte-ps9gl9" viewBox="0 0 1024 800" xmlns="http://www.w3.org/2000/svg"><defs class="svelte-ps9gl9"><symbol id="vinyl" viewBox="-200 -200 400 400" class="svelte-ps9gl9"><circle cx="0" cy="0" r="180" fill="#0b0b0b" class="svelte-ps9gl9"></circle><circle cx="0" cy="0" r="150" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.3" class="svelte-ps9gl9"></circle><circle cx="0" cy="0" r="120" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.25" class="svelte-ps9gl9"></circle><circle cx="0" cy="0" r="90" fill="none" stroke="#1a1a1a" stroke-width="1.5" opacity="0.2" class="svelte-ps9gl9"></circle><circle cx="0" cy="0" r="55" fill="var(--label-color)" class="svelte-ps9gl9"></circle><circle cx="0" cy="0" r="6" fill="#ffffff" class="svelte-ps9gl9"></circle><ellipse cx="-15" cy="-15" rx="20" ry="15" fill="#ffffff" opacity="0.3" transform="rotate(-30)" class="svelte-ps9gl9"></ellipse></symbol><symbol id="sparkle" viewBox="-12 -12 24 24" class="svelte-ps9gl9"><polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ffd966" class="svelte-ps9gl9"></polygon><circle cx="0" cy="0" r="2" fill="#ffffff" class="svelte-ps9gl9"></circle></symbol><symbol id="confetti" viewBox="-3 -3 6 6" class="svelte-ps9gl9"><circle cx="0" cy="0" r="2" fill="var(--confetti-color)" class="svelte-ps9gl9"></circle></symbol></defs><!><!></svg></div>');function Wi(t,e){Qs(e,!0);let s=fr(e,"winLevel",3,"small"),a=O(!1),r=O(!1);const o={small:{vinyls:5,sparkles:8},medium:{vinyls:12,sparkles:16},jackpot:{vinyls:24,sparkles:30}},i=Me(()=>o[s()]),l=["#f04e37","#ffd966","#ff8533","#4ecdc4","#ff6b9d"];function u(A){const P=[];for(let V=0;V<A;V++){const _e=s()==="jackpot"?350:s()==="medium"?280:220,fe=Math.PI*2*V/A+Math.random()*.4,Y=Math.random()*_e*.7+_e*.3;P.push({x:512+Math.cos(fe)*Y,y:400+Math.sin(fe)*Y,rotation:Math.random()*30-15,scale:.6+Math.random()*.6,delay:V*.05,color:l[V%l.length]})}return P}function v(A){const P=[];for(let te=0;te<A;te++)P.push({x:100+Math.random()*824,y:50+Math.random()*700,delay:Math.random()*.8,duration:.6+Math.random()*.4,rotation:Math.random()*360});return P}const p=Me(()=>u(n(i).vinyls)),m=Me(()=>v(n(i).sparkles));function g(){x(a,!0),x(r,!0),setTimeout(()=>{x(r,!1),setTimeout(()=>{var A;x(a,!1),(A=e.onComplete)==null||A.call(e)},500)},s()==="jackpot"?4e3:s()==="medium"?3e3:2500)}function z(){x(r,!1),setTimeout(()=>{x(a,!1)},500)}var S=nr(),J=Oe(S);{var G=A=>{var P=Mi();let te;var de=b(P),V=f(b(de));Pt(V,17,()=>n(m),Rt,(fe,Y)=>{var ae=Bi();ie(()=>T(ae,"style",`
            --sx: ${n(Y).x??""}px;
            --sy: ${n(Y).y??""}px;
            --duration: ${n(Y).duration??""}s;
            --sparkle-delay: ${n(Y).delay??""}s;
          `)),j(fe,ae)});var _e=f(V);Pt(_e,17,()=>n(p),Rt,(fe,Y)=>{var ae=Fi();let he;ie(()=>{he=Vs(ae,0,"vinyl-group svelte-ps9gl9",null,he,{floating:n(r)}),T(ae,"style",`
            --tx: ${n(Y).x??""}px;
            --ty: ${n(Y).y??""}px;
            --scale: ${n(Y).scale??""};
            --rotation: ${n(Y).rotation??""}deg;
            --delay: ${n(Y).delay??""}s;
            --label-color: ${n(Y).color??""};
          `)}),j(fe,ae)}),y(de),y(P),ie(()=>te=Vs(P,1,"vinyl-win-container svelte-ps9gl9",null,te,{visible:n(r),hiding:!n(r)})),j(A,P)};le(J,A=>{n(a)&&A(G)})}return j(t,S),Zs({show:g,hide:z})}var Ni=Nn('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-2k82zv"><\/script><!---->',1),ji=q('<p style="color: red;" class="svelte-2k82zv"><strong class="svelte-2k82zv">Error:</strong> </p>'),Di=q('<div class="svelte-2k82zv"> </div>'),Ui=q('<details class="svelte-2k82zv"><summary class="svelte-2k82zv"> </summary> <!></details>'),Gi=q(`<div style="
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
  " class="svelte-2k82zv"><h3 class="svelte-2k82zv">🎰 Oma-peli Debug</h3> <p class="svelte-2k82zv"><strong class="svelte-2k82zv">Status:</strong> </p> <!> <p class="svelte-2k82zv"><strong class="svelte-2k82zv">Base:</strong> </p> <p class="svelte-2k82zv"><strong class="svelte-2k82zv">BG URL:</strong> </p> <p class="svelte-2k82zv"><strong class="svelte-2k82zv">Sample:</strong> </p> <!></div>`),Hi=q('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-2k82zv"> </div>'),Vi=q('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-2k82zv"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-2k82zv"> </span></div>'),Yi=q(`<div style="
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
      " class="svelte-2k82zv">Jatka pelaamista</button></div>`),Xi=q(`<div style="
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
      " class="svelte-2k82zv">Sulje</button></div>`),Ki=q('<div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #ff00ff; font-size: 16px; animation: pulse 1s infinite;" class="svelte-2k82zv"><span class="svelte-2k82zv">🎰 FREE SPINS:</span> <span class="svelte-2k82zv"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-top: 1px solid #555; padding-top: 8px;" class="svelte-2k82zv"><span style="color: #fff; font-size: 14px;" class="svelte-2k82zv">Total Won:</span> <span style="color: #00ff00; font-size: 14px;" class="svelte-2k82zv"> </span></div>',1),Qi=q(`<div style="
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
        " class="svelte-2k82zv">⏹ STOP</button></div>`),Zi=q(`<div style="
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
          " class="svelte-2k82zv">Cancel</button></div>`),qi=q(`<button style="
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
      " class="svelte-2k82zv">🔄 AUTOPLAY</button> <!>`,1),Ji=q(`<!> <!> <!> <div style="
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
      " class="svelte-2k82zv"> </div></div> <img alt="Divider" class="svelte-2k82zv"> <button title="Menu" class="svelte-2k82zv"></button></div> <img alt="Right End" class="svelte-2k82zv"></div> <!>`,1);function el(t,e){Qs(e,!0);const s=Ci.version,a=13,r=1445,o=1e3,i=1.75,l=-30,u=-10,v=160,p=0,m=750,g=80,z=250,S=-230,J=-390,G=1,A=1.1,P=.5,te=40,de=0,V=-40,_e=1,fe="height",ae=Math.round(100*i),he=Math.round(ae*(700/760)),Rr=he+10,Ot=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],sa=typeof window<"u"&&window.location.hostname.includes("github.io"),se=sa?"/web-sdk/oma-peli/symbols":`${Se}/symbols`,ee=sa?"/web-sdk/oma-peli/controls":`${Se}/controls`,It={a:`${se}/Blue_hotrod.jpg`,b:`${se}/Blue_jacket.jpg`,c:`${se}/Blue_rollers.jpg`,d:`${se}/Blue_speakers.jpg`,e:`${se}/Premium_blonde.jpg`,f:`${se}/Premium_brunette.jpg`,g:`${se}/Premium_rocker.jpg`,h:`${se}/New_Wild.jpg`,i:`${se}/Red_burger.jpg`,j:`${se}/Red_fries.jpg`,k:`${se}/Red_milkshake.jpg`,l:`${se}/Scatter.jpg`,emptyslot:`${se}/Emptyslot.jpg`},Ct=`${se}/bg_base.jpg`,aa=`${se}/ReelFrames.png`,ra=`${se}/RockABillyReels_logo.png`,Pr={spin:`${Se}/sounds/spin.mp3`,stop:`${Se}/sounds/stop.mp3`,win:`${Se}/sounds/win.mp3`};let we=O(!0),Bt={},Z=null,Ft=null,Mt=null;const $r=60/130,Or=Math.round($r*60);let xe=O(!0),Ir=O(!1),mt=O(!1),Wt=O(945),Nt=null;const jt={background:`${Se}/music/rockabilly-loop.mp3`,drumHit:`${Se}/music/drum-hit.mp3`,winTheme:`${Se}/music/win-stinger.mp3`};function na(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(na,500);return}const d=window.Howl;try{Z=new d({src:[jt.background],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded"),x(Ir,!0)},onloaderror:(h,c)=>{console.warn("⚠️ Background music not found (generate with Suno AI):",c)}}),Ft=new d({src:[jt.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Mt=new d({src:[jt.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(h){console.error("Failed to initialize music system:",h)}}function Cr(){Z&&n(xe)&&!Z.playing()&&(Z.play(),console.log("🎵 Background music started"))}function Br(){Z&&Z.playing()&&(Z.fade(Z.volume(),0,500),setTimeout(()=>Z.stop(),500))}function Fr(){if(Z&&Z.playing()){const d=Z.volume();Z.fade(d,0,1e3),setTimeout(()=>{Z.stop(),Z.volume(.3)},1e3)}}let Dt=O(!1);function Mr(){x(Dt,!1),setTimeout(()=>{x(Dt,!0)},10)}let je=null;function Wr(){x(xe,!n(xe)),n(xe)?Cr():Br()}function Nr(){Ft&&n(xe)&&n(we)&&Ft.play()}function jr(){Mt&&n(xe)&&n(we)&&Mt.play()}let bt=null,De=null,nt=null,ot=null,it=O("Initializing..."),Ue=O(""),ve=[],Ae=O(1e3),X=O(10);const oa=1,Ut=100;let pe=O(!1),Ge=O(0),Be=O(!1),Dr=O(0),Fe=!1,ke=null,Gt=!1,He=O(0),Ve=O(0),lt=O(0),Ht=O(0),Vt=Me(()=>n(Ve)>0?(n(lt)/n(Ve)*100).toFixed(2):"0.00"),Yt=Me(()=>n(He)>0?(n(Ht)/n(He)*100).toFixed(2):"0.00"),K=O(!1),Ee=O(0),Le=O(0),yt=O(0),Xt=O(0),xt=O(0),Kt=O(0),Ur=Me(()=>n(xt)>0?(n(Kt)/n(xt)*100).toFixed(2):"0.00"),ue=O(be([]));function Gr(d,h,c){const w=new Date().toLocaleString("fi-FI");let _=`
${"=".repeat(60)}
`;_+=`ROUND #${d} - ${w}
`,_+=`Mode: ${n(K)?"FREE SPINS":"BASE GAME"}
`,_+=`${"=".repeat(60)}
`,h.forEach((k,L)=>{_+=`
Win ${L+1}:
`,_+=`  Symbol: ${k.symbol} (${da[k.symbol]})
`,_+=`  Count: ${k.count} symbols
`,_+=`  Multiplier: ${k.multiplier}x
`,_+=`  Payout: ${k.payout.toFixed(2)}
`,_+=`  Positions: [${k.positions.join(", ")}]
`}),_+=`
${"─".repeat(60)}
`,_+=`TOTAL WIN: ${c.toFixed(2)}
`,_+=`${"=".repeat(60)}
`,n(ue).push(_)}function Hr(){const d=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${n(ue).join(`
`)}`,h=new Blob([d],{type:"text/plain"}),c=URL.createObjectURL(h),w=document.createElement("a");w.href=c,w.download=`win-log-${Date.now()}.txt`,w.click(),URL.revokeObjectURL(c)}function Vr(){x(ue,be([]))}function Yr(){n(K)||(x(K,!0),x(Ee,10),x(Le,0),ze(yt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."))}const Xr={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},Kr={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function ia(d){if(d===6)return Math.random()<.55?"h":"emptyslot";const h=n(K)?Kr:Xr,c=Math.random();let w=0;const _=Ot.filter(L=>L!=="h"),k=_.reduce((L,D)=>L+h[D],0);for(const L of _)if(w+=h[L]/k,c<w)return L;return"f"}function la(){const d=[];for(let h=0;h<a;h++){const c=ia(h);d.push(c),ze(xt),c==="emptyslot"&&ze(Kt)}return d}function ca(d){return d<3?{col:0,row:d}:d<6?{col:1,row:d-3}:d===6?{col:2,row:0}:d<10?{col:3,row:d-7}:{col:4,row:d-10}}function ct(d,h){return d===0?h:d===1?3+h:d===2?6:d===3?7+h:d===4?10+h:-1}function Qr(){if(n(K)){const d=Math.random();return d<.7?3:d<.92?5:10}else{const d=Math.random();return d<.7?1:d<.92?2:3}}const Zr={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function qr(){var ne;const d=[],h=[];for(let E=0;E<a;E++)dt[E]==="l"&&h.push(E);if(h.length>=5){const E=h.length;x(Ee,n(Ee)+E),n(K)?console.log(`🎰 FREE SPINS RETRIGGERED! +${E} FREE SPINS! Total: ${n(Ee)}`):(x(K,!0),x(Le,0),ze(yt),console.log(`🎰 FREE SPINS TRIGGERED! ${h.length} scatters = ${E} FREE SPINS!`)),d.push({symbol:"l",count:h.length,payout:0,positions:h,multiplier:1})}const c=[];for(let E=0;E<3;E++)for(let R=0;R<3;R++)for(let $=0;$<1;$++)for(let I=0;I<3;I++)for(let N=0;N<3;N++){const W=[ct(0,E),ct(1,R),ct(2,$),ct(3,I),ct(4,N)];c.push(W)}console.log(`Generated ${c.length} possible paths (should be 81)`);const w=[];for(const E of c){const R=E.map(W=>dt[W]);if(R[0]==="emptyslot"||R[0]==="l")continue;let $=null;for(let W=0;W<R.length;W++)if(R[W]!=="h"&&R[W]!=="emptyslot"&&R[W]!=="l"){$=R[W];break}if(!$)continue;let I=0;const N=new Set;for(let W=0;W<E.length;W++){const Pe=E[W],{col:qe}=ca(Pe),oe=R[W];(oe===$||oe==="h")&&N.add(qe)}for(let W=0;W<5&&N.has(W);W++)I++;if(I>=3){const Pe=E[0]%3;w.push({symbol:$,length:I,path:E.slice(0,I),startRow:Pe})}}const _=[],k=new Map;for(const E of w){const R=`${E.symbol}-${E.path.join(",")}`;k.has(R)||k.set(R,[]),k.get(R).push(E)}for(const[E,R]of k.entries()){const $=Math.max(...R.map(N=>N.length)),I=R.find(N=>N.length===$);I&&_.push(I)}const L=[],D=new Map;for(const E of _)D.has(E.symbol)||D.set(E.symbol,[]),D.get(E.symbol).push(E);const U=[];for(const[E,R]of D.entries()){const $=Math.max(...R.map(N=>N.length)),I=R.filter(N=>N.length===$);U.push(...I)}const Q=new Map;for(const E of U){const R=`${E.symbol}-${E.length}`;Q.has(R)||Q.set(R,[]),Q.get(R).push(E)}const B=U.length>0?Qr():1;for(const[E,R]of Q.entries()){const $=R[0],I=(ne=Zr[$.symbol])==null?void 0:ne[$.length];if(I!==void 0&&I>0){const N=new Map;for(const oe of R)for(let re=0;re<oe.length;re++)N.has(re)||N.set(re,new Set),N.get(re).add(oe.path[re]);let W=1;for(let oe=0;oe<$.length;oe++){const re=N.get(oe);W*=re?re.size:1}const Pe=I*n(X)*W*B;console.log(`  ${$.length}x${$.symbol}: ${W} ways × ${I}x × ${n(X)} bet × ${B} mult = ${Pe}`);const qe=new Set;for(const oe of R)oe.path.forEach(re=>qe.add(re));L.push({symbol:$.symbol,count:$.length,payout:Pe,positions:Array.from(qe),multiplier:B})}}return d.push(...L),d}let ge=O(0),Ye=O(be([])),Re=O(!1),Xe=O(!1);const da={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function Qt(d){if(!n(we)||!Bt[d])return;const h=Bt[d];h.currentTime=0,h.play().catch(c=>{console.warn("Äänen toisto epäonnistui:",d,c)})}function Jr(d){ft.forEach(h=>H.stage.removeChild(h)),ft=[],d.forEach(h=>{h.positions.forEach(c=>{const w=Ke[c],_=new Ns().rect(0,0,ae,he).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});_.x=w.container.x,_.y=w.container.y,H.stage.addChild(_),ft.push(_);let k=0,L=1;const D=.05;H.ticker.add(()=>{k+=L*D,k>=.4&&(L=-1),k<=0&&(L=1),_.alpha=.5+k})})})}function Zt(){ft.forEach(d=>H.stage.removeChild(d)),ft=[]}let dt=la(),qt,H,Ke=[],ft=[];class en{constructor(h,c){me(this,"index");me(this,"container");me(this,"offset",0);me(this,"speed",0);me(this,"targetSpeed",30);me(this,"state","idle");me(this,"stopDelay",0);me(this,"bounceOffset",0);me(this,"bounceSpeed",0);me(this,"bounceFrames",0);this.index=h,this.container=c}start(h){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=h}startSynchronized(h){const c=60+h*Or;this.start(c)}update(){this.state!=="idle"&&(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"&&(this.speed*=.92,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,Qt("stop"),Nr())),this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=Rr&&(this.offset=0,dt[this.index]=ia(this.index))))}draw(){const h=this.container;h.removeChildren();const c=dt[this.index];if(!c||!bt||!bt[c])return;const w=bt[c];if(!w)return;const _=this.offset+this.bounceOffset,k=new Et(w);k.width=ae,k.height=he,k.x=0,k.y=_,h.addChild(k)}}dr(async()=>{H=new Ar,await H.init({width:r,height:o,background:"#001a33"}),qt.appendChild(H.canvas);const d={};try{x(it,"Loading background and UI images..."),ve.push(`Loading background: ${Ct}`),ve.push(`Loading reel frames: ${aa}`),ve.push(`Loading logo: ${ra}`),await Je.load([{alias:"background",src:Ct},{alias:"reelframes",src:aa},{alias:"logo",src:ra}]),De=We.from("background"),nt=We.from("reelframes"),ot=We.from("logo"),console.log("✅ Background texture created:",De.width,"x",De.height),console.log("✅ Reel frames texture created:",nt.width,"x",nt.height),console.log("✅ Logo texture created:",ot.width,"x",ot.height),ve.push("✅ All UI images loaded"),x(it,"Loading symbols...");const c=[];for(const w of Ot)c.push({alias:w,src:It[w]});await Je.load(c);for(const w of Ot){const _=It[w];ve.push(`Loading symbol ${w}: ${_}`);try{const k=We.from(w);d[w]=k,console.log(`✅ Symbol ${w} loaded:`,k.width,"x",k.height),ve.push(`✅ Symbol ${w} loaded`)}catch(k){const L=`❌ Failed to load symbol ${w} from ${_}: ${k}`;throw ve.push(L),console.error(L),new Error(L)}}bt=d,x(it,"Assets loaded successfully!")}catch(c){x(Ue,`Asset loading failed: ${c}`),ve.push(n(Ue)),console.error(n(Ue));return}console.log("Ladataan ääniefektit...");for(const[c,w]of Object.entries(Pr)){const _=new Audio;_.src=w,_.preload="auto",_.volume=.7,_.load(),_.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${w} (käytetään hiljaista placeholderia)`)}),Bt[c]=_}if(console.log("Taustakuva ladattu, tekstuuri:",De),De){const c=new Et(De);H.renderer.width/H.renderer.height;const w=c.texture.width/c.texture.height;let _;_=H.renderer.height/c.texture.height,_*=_e,c.scale.set(_),c.x=(H.renderer.width-c.width)/2,c.y=(H.renderer.height-c.height)/2+V,H.stage.addChild(c),console.log("Taustakuva lisätty:",fe,"mode, size:",c.width.toFixed(0),"x",c.height.toFixed(0),"image aspect:",w.toFixed(2),"scale:",_.toFixed(2),"pos:",c.x.toFixed(0),c.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(c=>({x:c.x+l,y:c.y+u})),Ke=[];for(let c=0;c<a;c++){const w=ca(c),_=w.col,k=w.row,L=300+_*(ae+20),D=250+k*(he+15),U=c===6?L+p:L,Q=c===6?D+v:D,B=new qs;B.x=U+l,B.y=Q+u;const ne=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],E=new Ns().rect(0,0,ae,he).fill({color:ne[c],alpha:.3});E.x=B.x,E.y=B.y,H.stage.addChild(E);const R=new hr({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),$=new Oi({text:c.toString(),style:R});$.x=B.x+5,$.y=B.y+5,H.stage.addChild($);const I=new Ns().rect(0,0,ae,he).fill(16777215);I.x=B.x,I.y=B.y,B.mask=I,H.stage.addChild(I),H.stage.addChild(B),Ke.push(new en(c,B))}if(nt){const c=new Et(nt);c.scale.set(1),c.x=250,c.y=200,H.stage.addChild(c),Nt=c,x(Wt,be(c.width)),console.log("Reel frames lisätty:",c.width.toFixed(0),"x",c.height.toFixed(0)),console.log("Control panel leveys päivitetty:",n(Wt).toFixed(0))}if(ot){const c=new Et(ot);c.scale.set(P),c.x=(H.renderer.width-c.width)/2+te,c.y=de,H.stage.addChild(c),console.log("Logo lisätty päällimmäiseen layeriin:",c.width.toFixed(0),"x",c.height.toFixed(0))}na(),H.ticker.add(tn)});function tn(){for(const d of Ke)d.update(),d.draw();if(!n(Re)&&!Gt&&Ke.every(d=>d.state==="stopped")){Gt=!0,Fr();const d=qr();console.log(`Checking wins, found ${d.length} wins`),d.length>0?(x(Ye,be(d)),x(ge,be(d.reduce((h,c)=>h+c.payout,0))),Gr(n(He),d,n(ge)),sn(n(ge)),x(Re,!0),x(Dr,be(Date.now())),console.log(`🎉 VOITTO! ${n(ge)} pistettä! Uusi saldo: ${n(Ae)}`),console.log(`isShowingWin set to: ${n(Re)}, totalWin: ${n(ge)}`),d.forEach(h=>{const c=h.multiplier?` (${h.multiplier}x multiplier)`:"";console.log(`${h.count}x ${h.symbol} = ${h.payout} pistettä${c}`)}),Jr(d),Qt("win"),n(pe)&&!Fe&&(Fe=!0,ke=window.setTimeout(()=>{n(Re)&&n(pe)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),x(Re,!1),Zt()),ke=window.setTimeout(()=>{Fe=!1,es()},200)},1500))):(console.log("No wins found this spin"),n(pe)&&!Fe&&(Fe=!0,ke=window.setTimeout(()=>{Fe=!1,es()},1e3))),n(K)&&n(Ee)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${n(Le)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${n(Le).toFixed(2)}`),x(K,!1),x(Le,0)},2e3))}}function fa(){if(Z&&n(xe)&&!Z.playing()&&(Z.play(),console.log("🎵 Background music started on first spin")),Mr(),n(K)&&n(Ee)>0)ze(Ee,-1),ze(Xt),console.log(`🎰 FREE SPIN! Remaining: ${n(Ee)}`);else if(!n(K)){if(n(Ae)<n(X)){alert(`Not enough credits! Balance: ${n(Ae)}, Bet: ${n(X)}`),Jt();return}x(Ae,n(Ae)-n(X)),ze(He),x(Ve,n(Ve)+n(X))}ke!==null&&(clearTimeout(ke),ke=null),x(Ye,be([])),x(ge,0),x(Re,!1),Gt=!1,Zt(),dt=la(),Ke.forEach((d,h)=>{const c=Math.floor(h/3);d.startSynchronized(c)}),Qt("spin")}function sn(d){if(x(Ae,n(Ae)+d),x(lt,n(lt)+d),n(K)&&x(Le,n(Le)+d),d>0){ze(Ht);const h=d/n(X);h>=10&&jr(),je&&(h>=50?je.show():h>=20?setTimeout(()=>je.show(),200):h>=10&&setTimeout(()=>je.show(),400))}}function pa(){n(X)<Ut&&x(X,be(Math.min(n(X)+1,Ut)))}function ua(){n(X)>oa&&x(X,be(Math.max(n(X)-1,oa)))}function an(){x(X,Ut)}function pt(d){x(pe,!0),x(Ge,be(d)),x(Be,!1),es()}function Jt(){x(pe,!1),x(Ge,0),Fe=!1,ke!==null&&(clearTimeout(ke),ke=null)}function es(){if(!n(pe)||n(Ge)<=0){Jt();return}console.log(`Autoplay: Starting spin ${n(Ge)} rounds left`),fa(),ze(Ge,-1)}function rn(){confirm("Reset all statistics?")&&(x(He,0),x(Ve,0),x(lt,0),x(Ht,0),x(yt,0),x(Xt,0),x(xt,0),x(Kt,0))}var ha=Ji();ho(d=>{var h=Ni();f(Oe(h)),j(d,h)});var va=Oe(ha);{var nn=d=>{var h=Gi(),c=f(b(h),2),w=f(b(c));y(c);var _=f(c,2);{var k=$=>{var I=ji(),N=f(b(I));y(I),ie(()=>F(N,` ${n(Ue)??""}`)),j($,I)};le(_,$=>{n(Ue)&&$(k)})}var L=f(_,2),D=f(b(L));D.nodeValue=` ${Se??""}`,y(L);var U=f(L,2),Q=f(b(U));Q.nodeValue=` ${Ct??""}`,y(U);var B=f(U,2),ne=f(b(B));y(B);var E=f(B,2);{var R=$=>{var I=Ui(),N=b(I),W=b(N);y(N);var Pe=f(N,2);Pt(Pe,17,()=>ve,Rt,(qe,oe)=>{var re=Di(),Cn=b(re,!0);y(re),ie(()=>F(Cn,n(oe))),j(qe,re)}),y(I),ie(()=>F(W,`Log (${ve.length??""})`)),j($,I)};le(E,$=>{ve.length>0&&$(R)})}y(h),ie(()=>{F(w,` ${n(it)??""}`),F(ne,` ${It.a??""}`)}),j(d,h)};le(va,d=>{(n(it)!=="Assets loaded successfully!"||n(Ue))&&d(nn)})}var ga=f(va,2);{var on=d=>{var h=Yi(),c=f(b(h),2),w=b(c);y(c);var _=f(c,2);Pt(_,17,()=>n(Ye),Rt,(U,Q)=>{var B=Hi(),ne=b(B);y(B),ie(E=>F(ne,`${n(Q).count??""} × ${da[n(Q).symbol]??""} = ${E??""} pistettä`),[()=>n(Q).payout.toFixed(2)]),j(U,B)});var k=f(_,2);{var L=U=>{var Q=Vi(),B=b(Q),ne=b(B);y(B),y(Q),ie(()=>F(ne,`✨ ${n(Ye)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),j(U,Q)};le(k,U=>{n(Ye).length>0&&n(Ye)[0].multiplier>1&&U(L)})}var D=f(k,2);y(h),ie(()=>F(w,`${n(ge)??""} pistettä`)),M("click",D,()=>{x(Re,!1),Zt(),console.log("Win popup closed, ready for next spin")}),j(d,h)};le(ga,d=>{n(ge)>0&&n(Re)&&d(on)})}var ma=f(ga,2);{var ln=d=>{var h=Xi(),c=f(b(h),8);y(h),M("click",c,()=>{x(Xe,!1)}),j(d,h)};le(ma,d=>{n(Xe)&&d(ln)})}var ba=f(ma,2);Ya(ba,d=>qt=d,()=>qt);var _t=f(ba,2),ya=b(_t);{var cn=d=>{var h=Ki(),c=Oe(h),w=f(b(c),2),_=b(w,!0);y(w),y(c);var k=f(c,2),L=f(b(k),2),D=b(L,!0);y(L),y(k),ie(U=>{F(_,n(Ee)),F(D,U)},[()=>n(Le).toFixed(2)]),j(d,h)};le(ya,d=>{n(K)&&d(cn)})}var ts=f(ya,2),xa=f(b(ts),2),dn=b(xa,!0);y(xa),y(ts);var _a=f(ts,2),wa=f(b(_a),2),fn=b(wa,!0);y(wa),y(_a),y(_t);var ss=f(_t,2),Aa=f(b(ss),2),ka=b(Aa),as=f(ka,2),pn=b(as,!0);y(as);var Ea=f(as,2),un=f(Ea,2);y(Aa),y(ss);var za=f(ss,2),rs=f(za,2),Sa=f(b(rs),2);Sa.textContent=`v${s}`;var ns=f(Sa,2),Ta=f(b(ns),2),hn=b(Ta,!0);y(Ta),y(ns);var os=f(ns,2),La=f(b(os),2),vn=b(La,!0);y(La),y(os);var is=f(os,2),Ra=f(b(is),2),gn=b(Ra,!0);y(Ra),y(is);var ls=f(is,2),cs=f(b(ls),2),mn=b(cs);y(cs),y(ls);var ds=f(ls,2),fs=f(b(ds),2),bn=b(fs);y(fs),y(ds);var ps=f(ds,2),Pa=f(b(ps),2),yn=b(Pa,!0);y(Pa),y(ps);var us=f(ps,2),$a=f(b(us),2),xn=b($a,!0);y($a),y(us);var hs=f(us,2),Oa=f(b(hs),2),_n=b(Oa);y(Oa),y(hs);var Ia=f(hs,2),Ca=f(Ia,2),Qe=b(Ca),wn=b(Qe);y(Qe);var wt=f(Qe,2),ut=f(wt,2),An=b(ut);y(ut);var vs=f(ut,2);y(Ca),y(rs);var gs=f(rs,2),kn=b(gs);{var En=d=>{var h=Qi(),c=f(b(h),2),w=b(c);y(c);var _=f(c,2);y(h),ie(()=>F(w,`${n(Ge)??""} left`)),M("click",_,Jt),j(d,h)},zn=d=>{var h=qi(),c=Oe(h),w=f(c,2);{var _=k=>{var L=Zi(),D=f(b(L),2),U=f(D,2),Q=f(U,2),B=f(Q,2),ne=f(B,2),E=f(ne,2);y(L),M("click",D,()=>pt(10)),M("click",U,()=>pt(100)),M("click",Q,()=>pt(1e3)),M("click",B,()=>pt(1e4)),M("click",ne,()=>pt(1e5)),M("click",E,()=>{x(Be,!1)}),j(k,L)};le(w,k=>{n(Be)&&k(_)})}M("click",c,()=>{x(Be,!n(Be))}),j(d,h)};le(kn,d=>{n(pe)?d(En):d(zn,!1)})}y(gs);var Ze=f(gs,2),Sn=b(Ze,!0);y(Ze);var At=f(Ze,2),ms=b(At);T(ms,"src",`${ee??""}/Control_leftend.png`),T(ms,"style",`height: ${g}px; flex-shrink: 0;`);var kt=f(ms,2);T(kt,"style",`
    flex-grow: 1;
    height: ${g}px;
    background-image: url('${ee??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 20px;
  `);var bs=b(kt),Ba=f(b(bs),2),ys=b(Ba);T(ys,"style",`
            width: 40px;
            height: 40px;
            background-image: url('${ee??""}/Control_lowerbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `);var xs=f(ys,2),Tn=b(xs,!0);y(xs);var Fa=f(xs,2);T(Fa,"style",`
            width: 40px;
            height: 40px;
            background-image: url('${ee??""}/Control_upperbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(Ba),y(bs);var _s=f(bs,2);T(_s,"src",`${ee??""}/Control_divider.png`),T(_s,"style",`height: ${g*.8}px; flex-shrink: 0;`);var ws=f(_s,2),Ma=f(b(ws),2),Ln=b(Ma,!0);y(Ma),y(ws);var As=f(ws,2);T(As,"src",`${ee??""}/Control_divider.png`),T(As,"style",`height: ${g*.8}px; flex-shrink: 0;`);var ks=f(As,2),Es=b(ks),zs=b(Es);y(Es),y(ks);var Ss=f(ks,2);T(Ss,"src",`${ee??""}/Control_divider.png`),T(Ss,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Ts=f(Ss,2),Ls=b(Ts),Rn=f(Ls,2);y(Ts);var Rs=f(Ts,2);T(Rs,"src",`${ee??""}/Control_divider.png`),T(Rs,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Ps=f(Rs,2),$s=b(Ps),Pn=f($s,2);y(Ps);var Os=f(Ps,2);T(Os,"src",`${ee??""}/Control_divider.png`),T(Os,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Is=f(Os,2),Wa=f(b(Is),2),$n=b(Wa,!0);y(Wa),y(Is);var Cs=f(Is,2);T(Cs,"src",`${ee??""}/Control_divider.png`),T(Cs,"style",`height: ${g*.8}px; flex-shrink: 0;`);var Na=f(Cs,2);T(Na,"style",`
        width: 50px;
        height: 50px;
        background-image: url('${ee??""}/Control_menubar.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),y(kt);var ja=f(kt,2);T(ja,"src",`${ee??""}/Control_rightend.png`),T(ja,"style",`height: ${g}px; flex-shrink: 0;`),y(At);var On=f(At,2);const In=Me(()=>n(ge)/n(X)>=50?"jackpot":n(ge)/n(X)>=20?"medium":"small");Ya(Wi(On,{get winLevel(){return n(In)}}),d=>je=d,()=>je),ie((d,h,c,w,_,k,L,D,U)=>{T(_t,"style",`
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
  border: 2px solid ${(n(K)?"#ff00ff":"#ffd700")??""};
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
  z-index: 1500;
  min-width: 180px;
`),F(dn,d),F(fn,n(X)),F(pn,n(X)),F(hn,h),F(vn,c),F(gn,w),T(cs,"style",`color: ${_??""};`),F(mn,`${n(Vt)??""}%`),T(fs,"style",`color: ${k??""};`),F(bn,`${n(Yt)??""}%`),F(yn,n(yt)),F(xn,n(Xt)),F(_n,`${n(Ur)??""}%`),Qe.disabled=n(ue).length===0,T(Qe,"style",`
        width: 100%;
        padding: 5px;
        background: ${(n(ue).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(n(ue).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(n(ue).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(n(ue).length>0?"1":"0.5")??""};
      `),F(wn,`Download Win Log (${n(ue).length??""})`),wt.disabled=n(ue).length===0,T(wt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(n(ue).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(n(ue).length>0?"1":"0.5")??""};
      `),T(ut,"style",`
        width: 100%;
        padding: 5px;
        background: ${(n(xe)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(n(xe)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),F(An,`🎵 Music: ${(n(xe)?"ON":"OFF")??""}`),vs.disabled=n(K),T(vs,"style",`
        width: 100%;
        padding: 5px;
        background: ${(n(K)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(n(K)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(n(K)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(n(K)?"0.5":"1")??""};
      `),T(Ze,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(n(we)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(n(we)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),T(Ze,"title",n(we)?"Mykistä äänet":"Laita äänet päälle"),F(Sn,n(we)?"🔊":"🔇"),T(At,"style",`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(
    calc(-50% + ${(Nt?Nt.x:z)+S}px),
    calc(-50% + ${m+J}px)
  ) scale(${G}, ${A});
  transform-origin: center center;
  width: ${n(Wt)??""}px;
  height: ${g}px;
  display: flex;
  align-items: center;
  z-index: 1000;
`),F(Tn,L),F(Ln,D),Vs(Es,1,`play-button-wrapper ${(n(Dt)?"glare-animate":"")??""}`,"svelte-2k82zv"),zs.disabled=n(pe),T(zs,"style",`
            width: 130px;
            height: 130px;
            background-image: url('${ee??""}/Control_playbutton.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border: none;
            cursor: ${(n(pe)?"not-allowed":"pointer")??""};
            background-color: transparent;
            opacity: ${(n(pe)?.5:1)??""};
            position: relative;
            z-index: 10;
            border-radius: 50%;
          `),T(Ls,"style",`
          width: 50px;
          height: 50px;
          background-image: url('${ee??""}/${(n(pe)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),T(Rn,"src",`${ee??""}/${(n(pe)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),T($s,"style",`
          width: 50px;
          height: 50px;
          background-image: url('${ee??""}/${(n(mt)?"Control_fastplay_select.png":"Control_fastplay_deselect.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),T(Pn,"src",`${ee??""}/${(n(mt)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),F($n,U)},[()=>n(Ae).toLocaleString(),()=>n(He).toLocaleString(),()=>n(Ve).toLocaleString(),()=>n(lt).toLocaleString(),()=>parseFloat(n(Vt))>=95?"#00ff00":parseFloat(n(Vt))>=85?"#ffff00":"#ff6666",()=>parseFloat(n(Yt))>=30?"#00ff00":parseFloat(n(Yt))>=20?"#ffff00":"#ff6666",()=>n(X).toFixed(2),()=>n(Ae).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>n(ge).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),M("click",ka,ua),M("click",Ea,pa),M("click",un,an),M("click",za,()=>{x(Xe,!n(Xe))}),M("click",Ia,rn),M("click",Qe,Hr),M("click",wt,Vr),M("click",ut,Wr),M("click",vs,Yr),M("click",Ze,()=>{x(we,!n(we))}),M("click",ys,ua),M("click",Fa,pa),M("click",zs,fa),M("click",Ls,()=>{x(Be,!n(Be))}),M("click",$s,()=>{x(mt,!n(mt))}),M("click",Na,()=>{x(Xe,!n(Xe))}),j(t,ha),Zs()}var tl=q('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),sl=q('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function al(t,e){Qs(e,!1);let s=fr(e,"isAuthenticated",12,!1),a=Hs(""),r=Hs(!1);const o="slot2024";function i(){n(a)===o?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(x(r,!0),x(a,""),setTimeout(()=>x(r,!1),3e3))}dr(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),jn();var l=nr(),u=Oe(l);{var v=p=>{var m=sl(),g=b(m),z=f(b(g),4),S=b(z);To(S),uo(2),y(z);var J=f(z,2);{var G=A=>{var P=tl();j(A,P)};le(J,A=>{n(r)&&A(G)})}y(g),y(m),Ro(S,()=>n(a),A=>x(a,A)),M("submit",z,Po(i)),j(p,m)};le(u,p=>{s()||p(v)})}j(t,l),Zs()}var rl=q('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),nl=q("<!> <!>",1);function yl(t){let e=Hs(!1);var s=nl(),a=Oe(s);al(a,{get isAuthenticated(){return n(e)},set isAuthenticated(i){x(e,i)},$$legacy:!0});var r=f(a,2);{var o=i=>{var l=rl(),u=f(Oe(l),2);el(u,{}),j(i,l)};le(r,i=>{n(e)&&i(o)})}j(t,s)}export{yr as A,gr as C,Wo as R,Io as S,xr as V,yl as _,Oo as u};
