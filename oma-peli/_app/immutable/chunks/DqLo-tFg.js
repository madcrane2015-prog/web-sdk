const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./rk-1ZPy2.js","./BaqJxISf.js","./CgWia7Op.js","./EjnPGRTu.js","./Bkkaav7K.js","./C2GHuDhf.js","./B3eEZ4Vx.js","./Khq9v_lZ.js"])))=>i.map(i=>d[i]);
var kr=Object.defineProperty;var $r=(t,e,a)=>e in t?kr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var ve=(t,e,a)=>$r(t,typeof e!="symbol"?e+"":e,a);import{g as Sr,l as Er,t as se,i as Lr,j as Tr,a as Q,k as C,e as Rr}from"./XZc5ccWP.js";import{i as Ir}from"./DIdOt9--.js";import{y as ye,j as Pr,a8 as Or,F as s,Q as Br,aa as Cr,ab as ja,h as Na,e as Ws,k as ft,l as Fr,ac as ro,w as no,ad as Mr,q as io,a7 as Wr,U as zr,a2 as Da,ar as zs,z as Ua,as as jr,at as Nr,au as Dr,o as Ur,av as Gr,aw as Hr,ax as Vr,ay as Yr,b as Xr,az as Kr,aA as qr,a6 as Qr,aB as Jr,aC as Zr,D as en,L as tn,p as lo,ah as I,ag as co,T as b,I as Ct,aD as me,s as f,f as Wt,c as _,r as A,t as xe,a as po,aE as sn,aF as Ys}from"./EjnPGRTu.js";import{_ as Ga,p as ce,i as be}from"./CgWia7Op.js";import{s as D}from"./2z5c-rnE.js";import{b as Ha,p as an}from"./CHseoIM1.js";import{b as we}from"./CG1ReV7E.js";import{e as Oe,E as O,a as on,C as Zs,Q as Xs,V as Ks,N as js,D as re,H as rn,p as Me,a0 as Qe,a1 as We,a2 as nn,w as Pe,a3 as gt,a4 as uo,a5 as Je,a6 as ke,a7 as zt,a8 as fo,a9 as ln,aa as Ns,y as Ds}from"./BaqJxISf.js";import{A as dn,B as Va,G as cn,a as Ya}from"./Bkkaav7K.js";function Xa(t,e){return e}function pn(t,e,a,o){for(var r=[],i=e.length,l=0;l<i;l++)Dr(e[l].e,r,!0);var c=i>0&&r.length===0&&a!==null;if(c){var v=a.parentNode;Ur(v),v.append(a),o.clear(),Ie(t,e[0].prev,e[i-1].next)}Gr(r,()=>{for(var m=0;m<i;m++){var p=e[m];c||(o.delete(p.k),Ie(t,p.prev,p.next)),Hr(p.e,!c)}})}function Ka(t,e,a,o,r,i=null){var l=t,c={flags:e,items:new Map,first:null};ye&&Pr();var v=null,m=!1,p=Br(()=>{var x=a();return Wr(x)?x:x==null?[]:io(x)});Or(()=>{var x=s(p),g=x.length;if(m&&g===0)return;m=g===0;let L=!1;if(ye){var T=l.data===Cr;T!==(g===0)&&(l=ja(),Na(l),Ws(!1),L=!0)}if(ye){for(var J=null,X,R=0;R<g;R++){if(ft.nodeType===8&&ft.data===Fr){l=ft,L=!0,Ws(!1);break}var H=x[R],$e=o(H,R);X=ho(ft,c,J,null,H,$e,R,r,e,a),c.items.set($e,X),J=X}g>0&&Na(ja())}ye||un(x,c,l,r,e,o,a),i!==null&&(g===0?v?ro(v):v=no(()=>i(l)):v!==null&&Mr(v,()=>{v=null})),L&&Ws(!0),s(p)}),ye&&(l=ft)}function un(t,e,a,o,r,i,l){var c=t.length,v=e.items,m=e.first,p=m,x,g=null,L=[],T=[],J,X,R,H;for(H=0;H<c;H+=1){if(J=t[H],X=i(J,H),R=v.get(X),R===void 0){var $e=p?p.e.nodes_start:a;g=ho($e,e,g,g===null?e.first:g.next,J,X,H,o,r,l),v.set(X,g),L=[],T=[],p=g.next;continue}if(fn(R,J,H),(R.e.f&zs)!==0&&ro(R.e),R!==p){if(x!==void 0&&x.has(R)){if(L.length<T.length){var ne=T[0],te;g=ne.prev;var jt=L[0],et=L[L.length-1];for(te=0;te<L.length;te+=1)qa(L[te],ne,a);for(te=0;te<T.length;te+=1)x.delete(T[te]);Ie(e,jt.prev,et.next),Ie(e,g,jt),Ie(e,et,ne),p=ne,g=et,H-=1,L=[],T=[]}else x.delete(R),qa(R,p,a),Ie(e,R.prev,R.next),Ie(e,R,g===null?e.first:g.next),Ie(e,g,R),g=R;continue}for(L=[],T=[];p!==null&&p.k!==X;)(p.e.f&zs)===0&&(x??(x=new Set)).add(p),T.push(p),p=p.next;if(p===null)continue;R=p}L.push(R),g=R,p=R.next}if(p!==null||x!==void 0){for(var Be=x===void 0?[]:io(x);p!==null;)(p.e.f&zs)===0&&Be.push(p),p=p.next;var vt=Be.length;if(vt>0){var K=null;pn(e,Be,K,v)}}Ua.first=e.first&&e.first.e,Ua.last=g&&g.e}function fn(t,e,a,o){Nr(t.v,e),t.i=a}function ho(t,e,a,o,r,i,l,c,v,m){var p=(v&Vr)!==0,x=(v&Yr)===0,g=p?x?zr(r):Da(r):r,L=(v&jr)===0?l:Da(l),T={i:L,v:g,k:i,a:null,e:null,prev:a,next:o};try{return T.e=no(()=>c(t,g,L,m),ye),T.e.prev=a&&a.e,T.e.next=o&&o.e,a===null?e.first=T:(a.next=T,a.e.next=T.e),o!==null&&(o.prev=T,o.e.prev=T.e),T}finally{}}function qa(t,e,a){for(var o=t.next?t.next.e.nodes_start:a,r=e?e.e.nodes_start:a,i=t.e.nodes_start;i!==o;){var l=Xr(i);r.before(i),i=l}}function Ie(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function hn(t,e,a){var o=t==null?"":""+t;return o=o?o+" "+e:e,o===""?null:o}function gn(t,e,a,o,r,i){var l=t.__className;if(ye||l!==a){var c=hn(a,o);(!ye||c!==t.getAttribute("class"))&&(c==null?t.removeAttribute("class"):t.className=c),t.__className=a}return i}function vn(t){if(ye){var e=!1,a=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var o=t.value;y(t,"value",null),t.value=o}if(t.hasAttribute("checked")){var r=t.checked;y(t,"checked",null),t.checked=r}}};t.__on_r=a,Kr(a),Sr()}}function y(t,e,a,o){var r=t.__attributes??(t.__attributes={});ye&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=a)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[qr]=a),a==null?t.removeAttribute(e):typeof a!="string"&&mn(t).includes(e)?t[e]=a:t.setAttribute(e,a))}var Qa=new Map;function mn(t){var e=Qa.get(t.nodeName);if(e)return e;Qa.set(t.nodeName,e=[]);for(var a,o=t,r=Element.prototype;r!==o;){a=Jr(o);for(var i in a)a[i].set&&e.push(i);o=Qr(o)}return e}function xn(t,e,a=e){var o=Zr();Er(t,"input",r=>{var i=r?t.defaultValue:t.value;if(i=Us(t)?Gs(i):i,a(i),o&&i!==(i=e())){var l=t.selectionStart,c=t.selectionEnd;t.value=i??"",c!==null&&(t.selectionStart=l,t.selectionEnd=Math.min(c,t.value.length))}}),(ye&&t.defaultValue!==t.value||en(e)==null&&t.value)&&a(Us(t)?Gs(t.value):t.value),tn(()=>{var r=e();Us(t)&&r===Gs(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function Us(t){var e=t.type;return e==="number"||e==="range"}function Gs(t){return t===""?null:+t}function bn(t){return function(...e){var a=e[0];return a.preventDefault(),t==null?void 0:t.apply(this,e)}}const qs=[];Oe.handleByNamedList(O.Environment,qs);async function yn(t){if(!t)for(let e=0;e<qs.length;e++){const a=qs[e];if(a.value.test()){await a.value.load();return}}}let ht;function wn(){if(typeof ht=="boolean")return ht;try{ht=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{ht=!1}return ht}var go=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(go||{});class _n{constructor(e){this.items=[],this._name=e}emit(e,a,o,r,i,l,c,v){const{name:m,items:p}=this;for(let x=0,g=p.length;x<g;x++)p[x][m](e,a,o,r,i,l,c,v);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const a=this.items.indexOf(e);return a!==-1&&this.items.splice(a,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const An=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],vo=class mo extends on{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const a=[...An,...this.config.runners??[]];this._addRunners(...a),this._unsafeEvalCheck()}async init(e={}){const a=e.skipExtensionImports===!0?!0:e.manageImports===!1;await yn(a),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const o in this._systemsHash)e={...this._systemsHash[o].constructor.defaultOptions,...e};e={...mo.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let o=0;o<this.runners.init.items.length;o++)await this.runners.init.items[o].init(e);this._initOptions=e}render(e,a){let o=e;if(o instanceof Zs&&(o={container:o},a&&(Xs(Ks,"passing a second argument is deprecated, please use render options instead"),o.target=a.renderTexture)),o.target||(o.target=this.view.renderTarget),o.target===this.view.renderTarget&&(this._lastObjectRendered=o.container,o.clearColor??(o.clearColor=this.background.colorRgba),o.clear??(o.clear=this.background.clearBeforeRender)),o.clearColor){const r=Array.isArray(o.clearColor)&&o.clearColor.length===4;o.clearColor=r?o.clearColor:js.shared.setValue(o.clearColor).toArray()}o.transform||(o.container.updateLocalTransform(),o.transform=o.container.localTransform),o.container.enableRenderGroup(),this.runners.prerender.emit(o),this.runners.renderStart.emit(o),this.runners.render.emit(o),this.runners.renderEnd.emit(o),this.runners.postrender.emit(o)}resize(e,a,o){const r=this.view.resolution;this.view.resize(e,a,o),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),o!==void 0&&o!==r&&this.runners.resolutionChange.emit(o)}clear(e={}){const a=this;e.target||(e.target=a.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=go.ALL);const{clear:o,clearColor:r,target:i}=e;js.shared.setValue(r??this.background.colorRgba),a.renderTarget.clear(i,o,js.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(a=>{this.runners[a]=new _n(a)})}_addSystems(e){let a;for(a in e){const o=e[a];this._addSystem(o.value,o.name)}}_addSystem(e,a){const o=new e(this);if(this[a])throw new Error(`Whoops! The name "${a}" is already in use`);this[a]=o,this._systemsHash[a]=o;for(const r in this.runners)this.runners[r].add(o);return this}_addPipes(e,a){const o=a.reduce((r,i)=>(r[i.name]=i.value,r),{});e.forEach(r=>{const i=r.value,l=r.name,c=o[l];this.renderPipes[l]=new i(this,c?new c:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(a=>{a.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!wn())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};vo.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let xo=vo,Ft;function kn(t){return Ft!==void 0||(Ft=(()=>{var a;const e={stencil:!0,failIfMajorPerformanceCaveat:t??xo.defaultOptions.failIfMajorPerformanceCaveat};try{if(!re.get().getWebGLRenderingContext())return!1;let r=re.get().createCanvas().getContext("webgl",e);const i=!!((a=r==null?void 0:r.getContextAttributes())!=null&&a.stencil);if(r){const l=r.getExtension("WEBGL_lose_context");l&&l.loseContext()}return r=null,i}catch{return!1}})()),Ft}let Mt;async function $n(t={}){return Mt!==void 0||(Mt=await(async()=>{const e=re.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),Mt}const Ja=["webgl","webgpu","canvas"];async function Sn(t){let e=[];t.preference?(e.push(t.preference),Ja.forEach(i=>{i!==t.preference&&e.push(i)})):e=Ja.slice();let a,o={};for(let i=0;i<e.length;i++){const l=e[i];if(l==="webgpu"&&await $n()){const{WebGPURenderer:c}=await Ga(async()=>{const{WebGPURenderer:v}=await import("./rk-1ZPy2.js");return{WebGPURenderer:v}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);a=c,o={...t,...t.webgpu};break}else if(l==="webgl"&&kn(t.failIfMajorPerformanceCaveat??xo.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:c}=await Ga(async()=>{const{WebGLRenderer:v}=await import("./Khq9v_lZ.js");return{WebGLRenderer:v}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);a=c,o={...t,...t.webgl};break}else if(l==="canvas")throw o={...t},new Error("CanvasRenderer is not yet implemented")}if(delete o.webgpu,delete o.webgl,!a)throw new Error("No available renderer for the current environment");const r=new a;return await r.init(o),r}const bo="8.8.1";class yo{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,bo)}static destroy(){}}yo.extension=O.Application;class En{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,bo)}destroy(){this._renderer=null}}En.extension={type:[O.WebGLSystem,O.WebGPUSystem],name:"initHook",priority:-10};const wo=class Qs{constructor(...e){this.stage=new Zs,e[0]!==void 0&&Xs(Ks,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Sn(e),Qs._plugins.forEach(a=>{a.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Xs(Ks,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,a=!1){const o=Qs._plugins.slice(0);o.reverse(),o.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(a),this.stage=null,this.renderer.destroy(e),this.renderer=null}};wo._plugins=[];let _o=wo;Oe.handleByList(O.Application,_o._plugins);Oe.add(yo);class Ao extends dn{constructor(e,a){super();const{textures:o,data:r}=e;Object.keys(r.pages).forEach(i=>{const l=r.pages[parseInt(i,10)],c=o[l.id];this.pages.push({texture:c})}),Object.keys(r.chars).forEach(i=>{const l=r.chars[i],{frame:c,source:v}=o[l.page],m=new rn(l.x+c.x,l.y+c.y,l.width,l.height),p=new Me({source:v,frame:m});this.chars[i]={id:i.codePointAt(0),xOffset:l.xOffset,yOffset:l.yOffset,xAdvance:l.xAdvance,kerning:l.kerning??{},texture:p}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=a}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:a}=this.pages[e];a.destroy(!0)}this.pages=null}static install(e){Va.install(e)}static uninstall(e){Va.uninstall(e)}}const Hs={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),a={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const x in e){const g=e[x].match(/^[a-z]+/gm)[0],L=e[x].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),T={};for(const J in L){const X=L[J].split("="),R=X[0],H=X[1].replace(/"/gm,""),$e=parseFloat(H),ne=isNaN($e)?H:$e;T[R]=ne}a[g].push(T)}const o={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=a.info,[i]=a.common,[l]=a.distanceField??[];l&&(o.distanceField={range:parseInt(l.distanceRange,10),type:l.fieldType}),o.fontSize=parseInt(r.size,10),o.fontFamily=r.face,o.lineHeight=parseInt(i.lineHeight,10);const c=a.page;for(let x=0;x<c.length;x++)o.pages.push({id:parseInt(c[x].id,10)||0,file:c[x].file});const v={};o.baseLineOffset=o.lineHeight-parseInt(i.base,10);const m=a.char;for(let x=0;x<m.length;x++){const g=m[x],L=parseInt(g.id,10);let T=g.letter??g.char??String.fromCharCode(L);T==="space"&&(T=" "),v[L]=T,o.chars[T]={id:L,page:parseInt(g.page,10)||0,x:parseInt(g.x,10),y:parseInt(g.y,10),width:parseInt(g.width,10),height:parseInt(g.height,10),xOffset:parseInt(g.xoffset,10),yOffset:parseInt(g.yoffset,10),xAdvance:parseInt(g.xadvance,10),kerning:{}}}const p=a.kerning||[];for(let x=0;x<p.length;x++){const g=parseInt(p[x].first,10),L=parseInt(p[x].second,10),T=parseInt(p[x].amount,10);o.chars[v[L]].kerning[v[g]]=T}return o}},Za={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},a=t.getElementsByTagName("info")[0],o=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const i=t.getElementsByTagName("page"),l=t.getElementsByTagName("char"),c=t.getElementsByTagName("kerning");e.fontSize=parseInt(a.getAttribute("size"),10),e.fontFamily=a.getAttribute("face"),e.lineHeight=parseInt(o.getAttribute("lineHeight"),10);for(let m=0;m<i.length;m++)e.pages.push({id:parseInt(i[m].getAttribute("id"),10)||0,file:i[m].getAttribute("file")});const v={};e.baseLineOffset=e.lineHeight-parseInt(o.getAttribute("base"),10);for(let m=0;m<l.length;m++){const p=l[m],x=parseInt(p.getAttribute("id"),10);let g=p.getAttribute("letter")??p.getAttribute("char")??String.fromCharCode(x);g==="space"&&(g=" "),v[x]=g,e.chars[g]={id:x,page:parseInt(p.getAttribute("page"),10)||0,x:parseInt(p.getAttribute("x"),10),y:parseInt(p.getAttribute("y"),10),width:parseInt(p.getAttribute("width"),10),height:parseInt(p.getAttribute("height"),10),xOffset:parseInt(p.getAttribute("xoffset"),10),yOffset:parseInt(p.getAttribute("yoffset"),10),xAdvance:parseInt(p.getAttribute("xadvance"),10),kerning:{}}}for(let m=0;m<c.length;m++){const p=parseInt(c[m].getAttribute("first"),10),x=parseInt(c[m].getAttribute("second"),10),g=parseInt(c[m].getAttribute("amount"),10);e.chars[v[x]].kerning[v[p]]=g}return e}},eo={test(t){return typeof t=="string"&&t.includes("<font>")?Za.test(re.get().parseXML(t)):!1},parse(t){return Za.parse(re.get().parseXML(t))}},Ln=[".xml",".fnt"],Tn={extension:{type:O.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof Ao,getCacheableAssets(t,e){const a={};return t.forEach(o=>{a[o]=e,a[`${o}-bitmap`]=e}),a[`${e.fontFamily}-bitmap`]=e,a}},Rn={extension:{type:O.LoadParser,priority:Qe.Normal},name:"loadBitmapFont",test(t){return Ln.includes(We.extname(t).toLowerCase())},async testParse(t){return Hs.test(t)||eo.test(t)},async parse(t,e,a){const o=Hs.test(t)?Hs.parse(t):eo.parse(t),{src:r}=e,{pages:i}=o,l=[],c=o.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let x=0;x<i.length;++x){const g=i[x].file;let L=We.join(We.dirname(r),g);L=nn(L,r),l.push({src:L,data:c})}const v=await a.load(l),m=l.map(x=>v[x.src]);return new Ao({data:o,textures:m},r)},async load(t,e){return await(await re.get().fetch(t)).text()},async unload(t,e,a){await Promise.all(t.pages.map(o=>a.unload(o.texture.source._sourceOrigin))),t.destroy()}};class In{constructor(e,a=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=a}add(e){e.forEach(a=>{this._assetList.push(a)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],a=Math.min(this._assetList.length,this._maxConcurrent);for(let o=0;o<a;o++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Pn={extension:{type:O.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Me),getCacheableAssets:(t,e)=>{const a={};return t.forEach(o=>{e.forEach((r,i)=>{a[o+(i===0?"":i+1)]=r})}),a}};async function ko(t){if("Image"in globalThis)return new Promise(e=>{const a=new Image;a.onload=()=>{e(!0)},a.onerror=()=>{e(!1)},a.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const On={extension:{type:O.DetectionParser,priority:1},test:async()=>ko("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},to=["png","jpg","jpeg"],Bn={extension:{type:O.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...to],remove:async t=>t.filter(e=>!to.includes(e))},Cn="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function ea(t){return Cn?!1:document.createElement("video").canPlayType(t)!==""}const Fn={extension:{type:O.DetectionParser,priority:0},test:async()=>ea("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},Mn={extension:{type:O.DetectionParser,priority:0},test:async()=>ea("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},Wn={extension:{type:O.DetectionParser,priority:0},test:async()=>ea("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},zn={extension:{type:O.DetectionParser,priority:0},test:async()=>ko("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class jn{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,a,o)=>(this._parsersValidated=!1,e[a]=o,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,a){const o={promise:null,parser:null};return o.promise=(async()=>{var l,c;let r=null,i=null;if(a.loadParser&&(i=this._parserHash[a.loadParser],i||Pe(`[Assets] specified load parser "${a.loadParser}" not found while loading ${e}`)),!i){for(let v=0;v<this.parsers.length;v++){const m=this.parsers[v];if(m.load&&((l=m.test)!=null&&l.call(m,e,a,this))){i=m;break}}if(!i)return Pe(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await i.load(e,a,this),o.parser=i;for(let v=0;v<this.parsers.length;v++){const m=this.parsers[v];m.parse&&m.parse&&await((c=m.testParse)==null?void 0:c.call(m,r,a,this))&&(r=await m.parse(r,a,this)||r,o.parser=m)}return r})(),o}async load(e,a){this._parsersValidated||this._validateParsers();let o=0;const r={},i=uo(e),l=gt(e,m=>({alias:[m],src:m,data:{}})),c=l.length,v=l.map(async m=>{const p=We.toAbsolute(m.src);if(!r[m.src])try{this.promiseCache[p]||(this.promiseCache[p]=this._getLoadPromiseAndParser(p,m)),r[m.src]=await this.promiseCache[p].promise,a&&a(++o/c)}catch(x){throw delete this.promiseCache[p],delete r[m.src],new Error(`[Loader.load] Failed to load ${p}.
${x}`)}});return await Promise.all(v),i?r[l[0].src]:r}async unload(e){const o=gt(e,r=>({alias:[r],src:r})).map(async r=>{var c,v;const i=We.toAbsolute(r.src),l=this.promiseCache[i];if(l){const m=await l.promise;delete this.promiseCache[i],await((v=(c=l.parser)==null?void 0:c.unload)==null?void 0:v.call(c,m,r,this))}});await Promise.all(o)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,a)=>(a.name?e[a.name]&&Pe(`[Assets] loadParser name conflict "${a.name}"`):Pe("[Assets] loadParser should have a name"),{...e,[a.name]:a}),{})}}function Ze(t,e){if(Array.isArray(e)){for(const a of e)if(t.startsWith(`data:${a}`))return!0;return!1}return t.startsWith(`data:${e}`)}const Nn=".json",Dn="application/json",Un={extension:{type:O.LoadParser,priority:Qe.Low},name:"loadJson",test(t){return Ze(t,Dn)||Je(t,Nn)},async load(t){return await(await re.get().fetch(t)).json()}},Gn=".txt",Hn="text/plain",Vn={name:"loadTxt",extension:{type:O.LoadParser,priority:Qe.Low,name:"loadTxt"},test(t){return Ze(t,Hn)||Je(t,Gn)},async load(t){return await(await re.get().fetch(t)).text()}},Yn=["normal","bold","100","200","300","400","500","600","700","800","900"],Xn=[".ttf",".otf",".woff",".woff2"],Kn=["font/ttf","font/otf","font/woff","font/woff2"],qn=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function Qn(t){const e=We.extname(t),r=We.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(c=>c.charAt(0).toUpperCase()+c.slice(1));let i=r.length>0;for(const c of r)if(!c.match(qn)){i=!1;break}let l=r.join(" ");return i||(l=`"${l.replace(/[\\"]/g,"\\$&")}"`),l}const Jn=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function Zn(t){return Jn.test(t)?t:encodeURI(t)}const ei={extension:{type:O.LoadParser,priority:Qe.Low},name:"loadWebFont",test(t){return Ze(t,Kn)||Je(t,Xn)},async load(t,e){var o,r,i;const a=re.get().getFontFaceSet();if(a){const l=[],c=((o=e.data)==null?void 0:o.family)??Qn(t),v=((i=(r=e.data)==null?void 0:r.weights)==null?void 0:i.filter(p=>Yn.includes(p)))??["normal"],m=e.data??{};for(let p=0;p<v.length;p++){const x=v[p],g=new FontFace(c,`url(${Zn(t)})`,{...m,weight:x});await g.load(),a.add(g),l.push(g)}return ke.set(`${c}-and-url`,{url:t,fontFaces:l}),l.length===1?l[0]:l}return Pe("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{ke.remove(`${e.family}-and-url`),re.get().getFontFaceSet().delete(e)})}};function ta(t,e=1){var o;const a=(o=zt.RETINA_PREFIX)==null?void 0:o.exec(t);return a?parseFloat(a[1]):e}function sa(t,e,a){t.label=a,t._sourceOrigin=a;const o=new Me({source:t,label:a}),r=()=>{delete e.promiseCache[a],ke.has(a)&&ke.remove(a)};return o.source.once("destroy",()=>{e.promiseCache[a]&&(Pe("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),o.once("destroy",()=>{t.destroyed||(Pe("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),o}const ti=".svg",si="image/svg+xml",ai={extension:{type:O.LoadParser,priority:Qe.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return Ze(t,si)||Je(t,ti)},async load(t,e,a){var o;return((o=e.data)==null?void 0:o.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?ri(t):oi(t,e,a,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function oi(t,e,a,o){var X,R,H;const i=await(await re.get().fetch(t)).blob(),l=URL.createObjectURL(i),c=new Image;c.src=l,c.crossOrigin=o,await c.decode(),URL.revokeObjectURL(l);const v=document.createElement("canvas"),m=v.getContext("2d"),p=((X=e.data)==null?void 0:X.resolution)||ta(t),x=((R=e.data)==null?void 0:R.width)??c.width,g=((H=e.data)==null?void 0:H.height)??c.height;v.width=x*p,v.height=g*p,m.drawImage(c,0,0,x*p,g*p);const{parseAsGraphicsContext:L,...T}=e.data??{},J=new fo({resource:v,alphaMode:"premultiply-alpha-on-upload",resolution:p,...T});return sa(J,a,t)}async function ri(t){const a=await(await re.get().fetch(t)).text(),o=new cn;return o.svg(a),o}const ni=`(function () {
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
`;let Ke=null,Js=class{constructor(){Ke||(Ke=URL.createObjectURL(new Blob([ni],{type:"application/javascript"}))),this.worker=new Worker(Ke)}};Js.revokeObjectURL=function(){Ke&&(URL.revokeObjectURL(Ke),Ke=null)};const ii=`(function () {
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
`;let qe=null;class $o{constructor(){qe||(qe=URL.createObjectURL(new Blob([ii],{type:"application/javascript"}))),this.worker=new Worker(qe)}}$o.revokeObjectURL=function(){qe&&(URL.revokeObjectURL(qe),qe=null)};let so=0,Vs;class li{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:a}=new Js;a.addEventListener("message",o=>{a.terminate(),Js.revokeObjectURL(),e(o.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,a){var o;return this._run("loadImageBitmap",[e,(o=a==null?void 0:a.data)==null?void 0:o.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Vs===void 0&&(Vs=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Vs&&(this._createdWorkers++,e=new $o().worker,e.addEventListener("message",a=>{this._complete(a.data),this._returnWorker(a.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,a){await this._initWorkers();const o=new Promise((r,i)=>{this._queue.push({id:e,arguments:a,resolve:r,reject:i})});return this._next(),o}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const a=this._queue.pop(),o=a.id;this._resolveHash[so]={resolve:a.resolve,reject:a.reject},e.postMessage({data:a.arguments,uuid:so++,id:o})}}const ao=new li,di=[".jpeg",".jpg",".png",".webp",".avif"],ci=["image/jpeg","image/png","image/webp","image/avif"];async function pi(t,e){var r;const a=await re.get().fetch(t);if(!a.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${a.status} ${a.statusText}`);const o=await a.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(o,{premultiplyAlpha:"none"}):createImageBitmap(o)}const So={name:"loadTextures",extension:{type:O.LoadParser,priority:Qe.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return Ze(t,ci)||Je(t,di)},async load(t,e,a){var i;let o=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await ao.isImageBitmapSupported()?o=await ao.loadImageBitmap(t,e):o=await pi(t,e):o=await new Promise((l,c)=>{o=new Image,o.crossOrigin=this.config.crossOrigin,o.src=t,o.complete?l(o):(o.onload=()=>{l(o)},o.onerror=c)});const r=new fo({resource:o,alphaMode:"premultiply-alpha-on-upload",resolution:((i=e.data)==null?void 0:i.resolution)||ta(t),...e.data});return sa(r,a,t)},unload(t){t.destroy(!0)}},Eo=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],ui=Eo.map(t=>`video/${t.substring(1)}`);function fi(t,e,a){a===void 0&&!e.startsWith("data:")?t.crossOrigin=gi(e):a!==!1&&(t.crossOrigin=typeof a=="string"?a:"anonymous")}function hi(t){return new Promise((e,a)=>{t.addEventListener("canplaythrough",o),t.addEventListener("error",r),t.load();function o(){i(),e()}function r(l){i(),a(l)}function i(){t.removeEventListener("canplaythrough",o),t.removeEventListener("error",r)}})}function gi(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const a=new URL(t,document.baseURI);return a.hostname!==e.hostname||a.port!==e.port||a.protocol!==e.protocol?"anonymous":""}const vi={name:"loadVideo",extension:{type:O.LoadParser,name:"loadVideo"},test(t){const e=Ze(t,ui),a=Je(t,Eo);return e||a},async load(t,e,a){var v,m;const o={...Ns.defaultOptions,resolution:((v=e.data)==null?void 0:v.resolution)||ta(t),alphaMode:((m=e.data)==null?void 0:m.alphaMode)||await ln(),...e.data},r=document.createElement("video"),i={preload:o.autoLoad!==!1?"auto":void 0,"webkit-playsinline":o.playsinline!==!1?"":void 0,playsinline:o.playsinline!==!1?"":void 0,muted:o.muted===!0?"":void 0,loop:o.loop===!0?"":void 0,autoplay:o.autoPlay!==!1?"":void 0};Object.keys(i).forEach(p=>{const x=i[p];x!==void 0&&r.setAttribute(p,x)}),o.muted===!0&&(r.muted=!0),fi(r,t,o.crossorigin);const l=document.createElement("source");let c;if(t.startsWith("data:"))c=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const p=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();c=Ns.MIME_TYPES[p]||`video/${p}`}return l.src=t,c&&(l.type=c),new Promise(p=>{const x=async()=>{const g=new Ns({...o,resource:r});r.removeEventListener("canplay",x),e.data.preload&&await hi(r),p(sa(g,a,t))};r.addEventListener("canplay",x),r.appendChild(l)})},unload(t){t.destroy(!0)}},Lo={extension:{type:O.ResolveParser,name:"resolveTexture"},test:So.test,parse:t=>{var e;return{resolution:parseFloat(((e=zt.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},mi={extension:{type:O.ResolveParser,priority:-2,name:"resolveJson"},test:t=>zt.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:Lo.parse};class xi{constructor(){this._detections=[],this._initialized=!1,this.resolver=new zt,this.loader=new jn,this.cache=ke,this._backgroundLoader=new In(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var i,l;if(this._initialized){Pe("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let c=e.manifest;typeof c=="string"&&(c=await this.load(c)),this.resolver.addManifest(c)}const a=((i=e.texturePreference)==null?void 0:i.resolution)??1,o=typeof a=="number"?[a]:a,r=await this._detectFormats({preferredFormats:(l=e.texturePreference)==null?void 0:l.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:o}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,a){this._initialized||await this.init();const o=uo(e),r=gt(e).map(c=>{if(typeof c!="string"){const v=this.resolver.getAlias(c);return v.some(m=>!this.resolver.hasKey(m))&&this.add(c),Array.isArray(v)?v[0]:v}return this.resolver.hasKey(c)||this.add({alias:c,src:c}),c}),i=this.resolver.resolve(r),l=await this._mapLoadToResolve(i,a);return o?l[r[0]]:l}addBundle(e,a){this.resolver.addBundle(e,a)}async loadBundle(e,a){this._initialized||await this.init();let o=!1;typeof e=="string"&&(o=!0,e=[e]);const r=this.resolver.resolveBundle(e),i={},l=Object.keys(r);let c=0,v=0;const m=()=>{a==null||a(++c/v)},p=l.map(x=>{const g=r[x];return v+=Object.keys(g).length,this._mapLoadToResolve(g,m).then(L=>{i[x]=L})});return await Promise.all(p),o?i[e[0]]:i}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(a))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const a=this.resolver.resolveBundle(e);Object.values(a).forEach(o=>{this._backgroundLoader.add(Object.values(o))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return ke.get(e);const a={};for(let o=0;o<e.length;o++)a[o]=ke.get(e[o]);return a}async _mapLoadToResolve(e,a){const o=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(o,a);this._backgroundLoader.active=!0;const i={};return o.forEach(l=>{const c=r[l.src],v=[l.src];l.alias&&v.push(...l.alias),v.forEach(m=>{i[m]=c}),ke.set(v,c)}),i}async unload(e){this._initialized||await this.init();const a=gt(e).map(r=>typeof r!="string"?r.src:r),o=this.resolver.resolve(a);await this._unloadFromResolved(o)}async unloadBundle(e){this._initialized||await this.init(),e=gt(e);const a=this.resolver.resolveBundle(e),o=Object.keys(a).map(r=>this._unloadFromResolved(a[r]));await Promise.all(o)}async _unloadFromResolved(e){const a=Object.values(e);a.forEach(o=>{ke.remove(o.src)}),await this.loader.unload(a)}async _detectFormats(e){let a=[];e.preferredFormats&&(a=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const o of e.detections)e.skipDetections||await o.test()?a=await o.add(a):e.skipDetections||(a=await o.remove(a));return a=a.filter((o,r)=>a.indexOf(o)===r),a}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(a=>{a.config&&Object.keys(a.config).filter(o=>o in e).forEach(o=>{a.config[o]=e[o]})})}}const Xe=new xi;Oe.handleByList(O.LoadParser,Xe.loader.parsers).handleByList(O.ResolveParser,Xe.resolver.parsers).handleByList(O.CacheParser,Xe.cache.parsers).handleByList(O.DetectionParser,Xe.detections);Oe.add(Pn,Bn,On,zn,Fn,Mn,Wn,Un,Vn,ei,ai,So,vi,Rn,Tn,Lo,mi);const oo={loader:O.LoadParser,resolver:O.ResolveParser,cache:O.CacheParser,detection:O.DetectionParser};Oe.handle(O.Asset,t=>{const e=t.ref;Object.entries(oo).filter(([a])=>!!e[a]).forEach(([a,o])=>Oe.add(Object.assign(e[a],{extension:e[a].extension??o})))},t=>{const e=t.ref;Object.keys(oo).filter(a=>!!e[a]).forEach(a=>Oe.remove(e[a]))});var bi=Tr('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-o2kwxd"><\/script><!---->',1),yi=se('<p style="color: red;" class="svelte-o2kwxd"><strong class="svelte-o2kwxd">Error:</strong> </p>'),wi=se('<div class="svelte-o2kwxd"> </div>'),_i=se('<details class="svelte-o2kwxd"><summary class="svelte-o2kwxd"> </summary> <!></details>'),Ai=se(`<div style="
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
  " class="svelte-o2kwxd"><h3 class="svelte-o2kwxd">🎰 Oma-peli Debug</h3> <p class="svelte-o2kwxd"><strong class="svelte-o2kwxd">Status:</strong> </p> <!> <p class="svelte-o2kwxd"><strong class="svelte-o2kwxd">Base:</strong> </p> <p class="svelte-o2kwxd"><strong class="svelte-o2kwxd">BG URL:</strong> </p> <p class="svelte-o2kwxd"><strong class="svelte-o2kwxd">Sample:</strong> </p> <!></div>`),ki=se('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-o2kwxd"> </div>'),$i=se('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-o2kwxd"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-o2kwxd"> </span></div>'),Si=se(`<div style="
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
  " class="svelte-o2kwxd"><h2 style="margin: 0 0 10px 0; font-size: 2em;" class="svelte-o2kwxd">🎉 VOITTO! 🎉</h2> <div style="font-size: 1.5em; font-weight: bold; margin: 10px 0;" class="svelte-o2kwxd"> </div> <!> <!> <button style="
        margin-top: 15px;
        padding: 8px 16px;
        background: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
      " class="svelte-o2kwxd">Jatka pelaamista</button></div>`),Ei=se(`<div class="svelte-o2kwxd"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-o2kwxd">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-o2kwxd">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-o2kwxd"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-o2kwxd"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-o2kwxd"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-o2kwxd">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-o2kwxd"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-o2kwxd">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-o2kwxd"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-o2kwxd">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-o2kwxd"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-o2kwxd">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-o2kwxd">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-o2kwxd">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-o2kwxd"> <span style="color: #ffd700;" class="svelte-o2kwxd">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-o2kwxd">Sulje</button></div>`),Li=se(`<div style="
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
  " class="svelte-o2kwxd"><div style="
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: white;
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      border: 3px solid #ffd700;
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
      max-width: 500px;
      font-family: Arial, sans-serif;
    " class="svelte-o2kwxd"><h1 style="
        margin: 0 0 20px 0;
        font-size: 2.5em;
        color: #ffd700;
        text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
      " class="svelte-o2kwxd">🎰 VAPAAPELIT PÄÄTTYIVÄT! 🎰</h1> <div style="
        font-size: 1.2em;
        margin: 20px 0;
        color: #aaa;
      " class="svelte-o2kwxd">Voitit yhteensä:</div> <div style="
        font-size: 3em;
        font-weight: bold;
        color: #00ff00;
        text-shadow: 0 0 15px rgba(0, 255, 0, 0.8);
        margin: 20px 0;
      " class="svelte-o2kwxd"> </div> <button style="
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
        " class="svelte-o2kwxd">JATKA PERUSPELIIN</button></div></div>`),Ti=se('<div class="svelte-o2kwxd"><div class="svelte-o2kwxd">🔄 Select Rounds</div> <button class="svelte-o2kwxd">10 Rounds</button> <button class="svelte-o2kwxd">25 Rounds</button> <button class="svelte-o2kwxd">50 Rounds</button> <button class="svelte-o2kwxd">100 Rounds</button> <button class="svelte-o2kwxd">200 Rounds</button> <button class="svelte-o2kwxd">500 Rounds</button> <button class="svelte-o2kwxd">1,000 Rounds</button> <button class="svelte-o2kwxd">5,000 Rounds</button> <button class="svelte-o2kwxd">Cancel</button></div>'),Ri=se(`<!>   <!>   <!>   <!>  <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
" class="svelte-o2kwxd"><div class="svelte-o2kwxd"><div class="svelte-o2kwxd"><button class="svelte-o2kwxd">💰 PAYTABLE</button>  <div class="control-panel-mobile svelte-o2kwxd"><!>  <img alt="Left End" class="svelte-o2kwxd"> <div class="svelte-o2kwxd"><div class="svelte-o2kwxd"><div class="svelte-o2kwxd">BET</div> <div class="svelte-o2kwxd"><button title="Decrease Bet" class="svelte-o2kwxd"></button> <div class="svelte-o2kwxd"> </div> <button title="Increase Bet" class="svelte-o2kwxd"></button></div></div> <img alt="Divider" class="svelte-o2kwxd"> <div class="svelte-o2kwxd"><div class="svelte-o2kwxd">BALANCE</div> <div class="svelte-o2kwxd"> </div></div> <img alt="Divider" class="svelte-o2kwxd"> <div style="position: relative; display: flex; align-items: center; justify-content: center; flex-grow: 0.5;" class="svelte-o2kwxd"><div><button title="SPIN" class="svelte-o2kwxd"></button></div></div> <img alt="Divider" class="svelte-o2kwxd"> <div class="svelte-o2kwxd"><button class="svelte-o2kwxd"></button> <img alt="Status bar" class="svelte-o2kwxd"></div> <img alt="Divider" class="svelte-o2kwxd"> <div class="svelte-o2kwxd"><button class="svelte-o2kwxd"></button> <img alt="Speed bar" class="svelte-o2kwxd"></div> <div class="svelte-o2kwxd"><div class="svelte-o2kwxd">WIN</div> <div class="win3d winShine svelte-o2kwxd" id="winLabel"><span class="depth svelte-o2kwxd" aria-hidden="true"> </span> <span class="face svelte-o2kwxd"> </span></div></div> <img alt="Divider" class="svelte-o2kwxd"> <button title="Menu" class="svelte-o2kwxd"></button></div> <img alt="Right End" class="svelte-o2kwxd"></div></div>  <button class="svelte-o2kwxd"></button> <button <VinylWinAnimation="" class="svelte-o2kwxd"></button>   <div class="debug-panel svelte-o2kwxd"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-o2kwxd">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-o2kwxd"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Rounds:</span> <span style="color: #fff;" class="svelte-o2kwxd"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Wagered:</span> <span style="color: #ff6666;" class="svelte-o2kwxd"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Won:</span> <span style="color: #66ff66;" class="svelte-o2kwxd"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 10px; 
    padding-top: 10px; 
    border-top: 1px solid #555;
    font-weight: bold;
    font-size: 18px;
  " class="svelte-o2kwxd"><span style="color: #ffd700;" class="svelte-o2kwxd">RTP:</span> <span class="svelte-o2kwxd"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
  " class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Hit Freq:</span> <span class="svelte-o2kwxd"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-size: 14px;
  " class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Free Spins Triggered:</span> <span style="color: #66ccff;" class="svelte-o2kwxd"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 4px;
    font-size: 14px;
  " class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Free Spins Played:</span> <span style="color: #66ccff;" class="svelte-o2kwxd"> </span></div> <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #555;
    font-size: 14px;
  " class="svelte-o2kwxd"><span style="color: #aaa;" class="svelte-o2kwxd">Empty Slots:</span> <span style="color: #ff9900;" class="svelte-o2kwxd"> </span></div> <button style="
      margin-top: 10px;
      width: 100%;
      padding: 5px;
      background: rgba(255, 100, 100, 0.3);
      color: #fff;
      border: 1px solid #ff6666;
      border-radius: 5px;
      cursor: pointer;
      font-size: 11px;
    " class="svelte-o2kwxd">Reset Stats</button> <div style="
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  " class="svelte-o2kwxd"><button class="svelte-o2kwxd"> </button> <button class="svelte-o2kwxd">Clear Win Log</button> <button class="svelte-o2kwxd"> </button> <button class="svelte-o2kwxd">🎰 Test Free Spins</button></div></div> <button class="debug-panel svelte-o2kwxd"> </button></div></div>`,1);function Ii(t,e){lo(e,!0);const a="1.3.2",o=13,r=1445,i=1e3,l=1.75,c=-30,v=-10,m=160,p=0,x=750,g=80,L=250,T=0,J=50,X=.5,R=40,H=0,ne=Math.round(100*l),te=Math.round(ne*(700/760)),et=te+10,Be=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],vt=typeof window<"u"&&window.location.hostname.includes("github.io"),K=vt?"/web-sdk/oma-peli/symbols":`${we}/symbols`,q=vt?"/web-sdk/oma-peli/controls":`${we}/controls`,Nt={a:`${K}/Blue_hotrod.jpg`,b:`${K}/Blue_jacket.jpg`,c:`${K}/Blue_rollers.jpg`,d:`${K}/Blue_speakers.jpg`,e:`${K}/Premium_blonde.jpg`,f:`${K}/Premium_brunette.jpg`,g:`${K}/Premium_rocker.jpg`,h:`${K}/New_Wild.jpg`,i:`${K}/Red_burger.jpg`,j:`${K}/Red_fries.jpg`,k:`${K}/Red_milkshake.jpg`,l:`${K}/Scatter.jpg`,emptyslot:`${K}/Emptyslot.jpg`},Dt=`${K}/bg_base.jpg`,aa=`${K}/ReelFrames.png`,oa=`${K}/RockABillyReels_logo.png`,To={spin:`${we}/sounds/spin.mp3`,stop:`${we}/sounds/stop.mp3`,win:`${we}/sounds/win.mp3`};let _e=I(!0),Ut={},V=null,ie=null,Gt=null,Ht=null,pe=I(!0),Ro=I(!1),Vt=I(945),Yt=null;const Io={fast:3,medium:7,slow:18};let le=I("medium"),ra=I(Math.floor(Math.random()*20)+1);const mt={background:()=>`${we}/music/rockabilly reels loop ${s(ra)}.mp3`,freeSpins:`${we}/music/rockabilly-loop_long.mp3`,drumHit:`${we}/music/drum-hit.mp3`,winTheme:`${we}/music/win-stinger.mp3`};function na(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(na,500);return}const d=window.Howl;try{V=new d({src:[mt.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+s(ra)+")"),b(Ro,!0)},onloaderror:(u,k)=>{console.warn("⚠️ Background music not found:",k)}}),ie=new d({src:[mt.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(u,k)=>console.warn("⚠️ Free spins music not found:",k)}),Gt=new d({src:[mt.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Ht=new d({src:[mt.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(u){console.error("Failed to initialize music system:",u)}}function ia(){const d=s(Y)?ie:V;d&&s(pe)&&!d.playing()&&(d.play(),console.log("🎵 "+(s(Y)?"Free spins":"Background")+" music started"))}function Po(){V&&V.playing()&&(V.fade(V.volume(),0,500),setTimeout(()=>V.stop(),500)),ie&&ie.playing()&&(ie.fade(ie.volume(),0,500),setTimeout(()=>ie.stop(),500))}function Xt(){V&&V.playing()&&(V.fade(V.volume(),0,500),setTimeout(()=>V.stop(),500)),ie&&ie.playing()&&(ie.fade(ie.volume(),0,500),setTimeout(()=>ie.stop(),500)),setTimeout(()=>{s(pe)&&ia()},600)}function Oo(){if(V&&V.playing()){const d=V.volume();V.fade(d,0,1e3),setTimeout(()=>{V.stop(),V.volume(.3)},1e3)}}let Kt=I(!1);function Bo(){b(Kt,!1),setTimeout(()=>{b(Kt,!0)},10)}let ze=null;function Co(){b(pe,!s(pe)),s(pe)?ia():Po()}function Fo(){Gt&&s(pe)&&s(_e)&&Gt.play()}function Mo(){Ht&&s(pe)&&s(_e)&&Ht.play()}let xt=null,qt=null,tt=null,st=null,at=I("Initializing..."),je=I(""),ue=[],Se=I(1e3);const la=[.4,.8,1,1.6,2,3,5,8,10,15,20,25,30,40,50,60,80,100];let ot=I(5),fe=Ct(()=>la[s(ot)]),Qt=I(0),he=I(!1),rt=I(0),ae=I(!1),Jt=I(!1),Wo=I(0),Ce=!1,Ae=null,Zt=!1,Ne=I(0),De=I(0),nt=I(0),es=I(0),ts=Ct(()=>s(De)>0?(s(nt)/s(De)*100).toFixed(2):"0.00"),ss=Ct(()=>s(Ne)>0?(s(es)/s(Ne)*100).toFixed(2):"0.00"),Y=I(!1),Ee=I(0),Fe=I(0),bt=I(0),as=I(0),yt=I(0),os=I(0),zo=Ct(()=>s(yt)>0?(s(os)/s(yt)*100).toFixed(2):"0.00"),de=I(ce([]));function jo(d,u,k){const h=new Date().toLocaleString("fi-FI");let w=`
${"=".repeat(60)}
`;w+=`ROUND #${d} - ${h}
`,w+=`Mode: ${s(Y)?"FREE SPINS":"BASE GAME"}
`,w+=`${"=".repeat(60)}
`,u.forEach(($,S)=>{w+=`
Win ${S+1}:
`,w+=`  Symbol: ${$.symbol} (${ua[$.symbol]})
`,w+=`  Count: ${$.count} symbols
`,w+=`  Multiplier: ${$.multiplier}x
`,w+=`  Payout: ${$.payout.toFixed(2)}
`,w+=`  Positions: [${$.positions.join(", ")}]
`}),w+=`
${"─".repeat(60)}
`,w+=`TOTAL WIN: ${k.toFixed(2)}
`,w+=`${"=".repeat(60)}
`,s(de).push(w)}function No(){const d=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${s(de).join(`
`)}`,u=new Blob([d],{type:"text/plain"}),k=URL.createObjectURL(u),h=document.createElement("a");h.href=k,h.download=`win-log-${Date.now()}.txt`,h.click(),URL.revokeObjectURL(k)}function Do(){b(de,ce([]))}function Uo(){s(Y)||(b(Y,!0),b(Ee,10),b(Fe,0),me(bt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),Xt())}const Go={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},Ho={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function da(d){if(d===6)return Math.random()<.55?"h":"emptyslot";const u=s(Y)?Ho:Go,k=Math.random();let h=0;const w=Be.filter(S=>S!=="h"),$=w.reduce((S,B)=>S+u[B],0);for(const S of w)if(h+=u[S]/$,k<h)return S;return"f"}function ca(){const d=[];for(let u=0;u<o;u++){const k=da(u);d.push(k),me(yt),k==="emptyslot"&&me(os)}return d}function pa(d){return d<3?{col:0,row:d}:d<6?{col:1,row:d-3}:d===6?{col:2,row:0}:d<10?{col:3,row:d-7}:{col:4,row:d-10}}function it(d,u){return d===0?u:d===1?3+u:d===2?6:d===3?7+u:d===4?10+u:-1}function Vo(){if(s(Y)){const d=Math.random();return d<.7?3:d<.92?5:10}else{const d=Math.random();return d<.7?1:d<.92?2:3}}const Yo={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function Xo(){var G;const d=[],u=[];for(let E=0;E<o;E++)lt[E]==="l"&&u.push(E);if(u.length>=5){const E=u.length;b(Ee,s(Ee)+E),s(Y)?console.log(`🎰 FREE SPINS RETRIGGERED! +${E} FREE SPINS! Total: ${s(Ee)}`):(b(Y,!0),b(Fe,0),me(bt),console.log(`🎰 FREE SPINS TRIGGERED! ${u.length} scatters = ${E} FREE SPINS!`),Xt()),d.push({symbol:"l",count:u.length,payout:0,positions:u,multiplier:1})}const k=[];for(let E=0;E<3;E++)for(let P=0;P<3;P++)for(let F=0;F<1;F++)for(let M=0;M<3;M++)for(let z=0;z<3;z++){const W=[it(0,E),it(1,P),it(2,F),it(3,M),it(4,z)];k.push(W)}console.log(`Generated ${k.length} possible paths (should be 81)`);const h=[];for(const E of k){const P=E.map(W=>lt[W]);if(P[0]==="emptyslot"||P[0]==="l")continue;let F=null;for(let W=0;W<P.length;W++)if(P[W]!=="h"&&P[W]!=="emptyslot"&&P[W]!=="l"){F=P[W];break}if(!F)continue;let M=0;const z=new Set;for(let W=0;W<E.length;W++){const Re=E[W],{col:Ye}=pa(Re),oe=P[W];(oe===F||oe==="h")&&z.add(Ye)}for(let W=0;W<5&&z.has(W);W++)M++;if(M>=3){const Re=E[0]%3;h.push({symbol:F,length:M,path:E.slice(0,M),startRow:Re})}}const w=[],$=new Map;for(const E of h){const P=`${E.symbol}-${E.path.join(",")}`;$.has(P)||$.set(P,[]),$.get(P).push(E)}for(const[E,P]of $.entries()){const F=Math.max(...P.map(z=>z.length)),M=P.find(z=>z.length===F);M&&w.push(M)}const S=[],B=new Map;for(const E of w)B.has(E.symbol)||B.set(E.symbol,[]),B.get(E.symbol).push(E);const j=[];for(const[E,P]of B.entries()){const F=Math.max(...P.map(z=>z.length)),M=P.filter(z=>z.length===F);j.push(...M)}const U=new Map;for(const E of j){const P=`${E.symbol}-${E.length}`;U.has(P)||U.set(P,[]),U.get(P).push(E)}const N=j.length>0?Vo():1;for(const[E,P]of U.entries()){const F=P[0],M=(G=Yo[F.symbol])==null?void 0:G[F.length];if(M!==void 0&&M>0){const z=new Map;for(const oe of P)for(let ee=0;ee<oe.length;ee++)z.has(ee)||z.set(ee,new Set),z.get(ee).add(oe.path[ee]);let W=1;for(let oe=0;oe<F.length;oe++){const ee=z.get(oe);W*=ee?ee.size:1}const Re=M*s(fe)*W*N;console.log(`  ${F.length}x${F.symbol}: ${W} ways × ${M}x × ${s(fe)} bet × ${N} mult = ${Re}`);const Ye=new Set;for(const oe of P)oe.path.forEach(ee=>Ye.add(ee));S.push({symbol:F.symbol,count:F.length,payout:Re,positions:Array.from(Ye),multiplier:N})}}return d.push(...S),d}let ge=I(0),Ue=I(ce([])),Le=I(!1),Ge=I(!1),rs=I(!1),ns=I(0);const ua={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function is(d){if(!s(_e)||!Ut[d])return;const u=Ut[d];u.currentTime=0,u.play().catch(k=>{console.warn("Äänen toisto epäonnistui:",d,k)})}function Ko(d){dt.forEach(u=>Z.stage.removeChild(u)),dt=[],d.forEach(u=>{u.positions.forEach(k=>{const h=He[k],w=new Ya().rect(0,0,ne,te).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});w.x=h.container.x,w.y=h.container.y,Z.stage.addChild(w),dt.push(w);let $=0,S=1;const B=.05;Z.ticker.add(()=>{$+=S*B,$>=.4&&(S=-1),$<=0&&(S=1),w.alpha=.5+$})})})}function ls(){dt.forEach(d=>Z.stage.removeChild(d)),dt=[]}let lt=ca(),ds,Z,He=[],dt=[];class qo{constructor(u,k){ve(this,"index");ve(this,"container");ve(this,"offset",0);ve(this,"speed",0);ve(this,"targetSpeed",30);ve(this,"state","idle");ve(this,"stopDelay",0);ve(this,"bounceOffset",0);ve(this,"bounceSpeed",0);ve(this,"bounceFrames",0);this.index=u,this.container=k}start(u){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=u}startSynchronized(u){const k=Io[s(le)],h=60+u*k;this.start(h)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const u=s(le)==="slow"?.88:s(le)==="medium"?.92:.95;this.speed*=u,this.speed<2.5&&(this.state="bouncing",this.speed=0,this.offset=0,this.bounceOffset=0,this.bounceSpeed=8,is("stop"),Fo())}this.state==="bouncing"&&(this.bounceSpeed*=.85,this.bounceOffset+=this.bounceSpeed,Math.abs(this.bounceSpeed)<.3&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=et&&(this.offset=0,lt[this.index]=da(this.index)))}}draw(){const u=this.container;u.removeChildren();const k=lt[this.index];if(!k||!xt||!xt[k])return;const h=xt[k];if(!h)return;const w=this.offset+this.bounceOffset,$=new Ds(h);$.width=ne,$.height=te,$.x=0,$.y=w,u.addChild($)}}let n=I(1);co(async()=>{Z=new _o,await Z.init({width:r,height:i,backgroundAlpha:0}),ds.appendChild(Z.canvas);const d=()=>{const h=window.innerWidth,w=window.innerHeight,$=h/r,S=w/i,B=Math.min($,S,1);b(n,ce(B)),Z.stage.scale.set(B),Z.renderer.resize(r,i)};d(),window.addEventListener("resize",d);const u={};try{b(at,"Loading background and UI images..."),ue.push(`Loading background: ${Dt}`),ue.push(`Loading reel frames: ${aa}`),ue.push(`Loading logo: ${oa}`),await Xe.load([{alias:"background",src:Dt},{alias:"reelframes",src:aa},{alias:"logo",src:oa}]),qt=Me.from("background"),tt=Me.from("reelframes"),st=Me.from("logo"),console.log("✅ Background texture created:",qt.width,"x",qt.height),console.log("✅ Reel frames texture created:",tt.width,"x",tt.height),console.log("✅ Logo texture created:",st.width,"x",st.height),ue.push("✅ All UI images loaded"),b(at,"Loading symbols...");const h=[];for(const w of Be)h.push({alias:w,src:Nt[w]});await Xe.load(h);for(const w of Be){const $=Nt[w];ue.push(`Loading symbol ${w}: ${$}`);try{const S=Me.from(w);u[w]=S,console.log(`✅ Symbol ${w} loaded:`,S.width,"x",S.height),ue.push(`✅ Symbol ${w} loaded`)}catch(S){const B=`❌ Failed to load symbol ${w} from ${$}: ${S}`;throw ue.push(B),console.error(B),new Error(B)}}xt=u,b(at,"Assets loaded successfully!")}catch(h){b(je,`Asset loading failed: ${h}`),ue.push(s(je)),console.error(s(je));return}console.log("Ladataan ääniefektit...");for(const[h,w]of Object.entries(To)){const $=new Audio;$.src=w,$.preload="auto",$.volume=.7,$.load(),$.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${w} (käytetään hiljaista placeholderia)`)}),Ut[h]=$}[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(h=>({x:h.x+c,y:h.y+v})),He=[];for(let h=0;h<o;h++){const w=pa(h),$=w.col,S=w.row,B=300+$*(ne+20),j=250+S*(te+15),U=h===6?B+p:B,N=h===6?j+m:j,G=new Zs;G.x=U+c,G.y=N+v;const E=new Ya().rect(0,0,ne,te).fill(16777215);E.x=G.x,E.y=G.y,G.mask=E,Z.stage.addChild(E),Z.stage.addChild(G),He.push(new qo(h,G))}if(tt){const h=new Ds(tt);h.scale.set(1),h.x=250,h.y=200,Z.stage.addChild(h),Yt=h,b(Vt,ce(h.width)),console.log("Reel frames lisätty:",h.width.toFixed(0),"x",h.height.toFixed(0)),console.log("Control panel leveys päivitetty:",s(Vt).toFixed(0))}if(st){const h=new Ds(st);h.scale.set(X),h.x=(Z.renderer.width-h.width)/2+R,h.y=H,Z.stage.addChild(h),console.log("Logo lisätty päällimmäiseen layeriin:",h.width.toFixed(0),"x",h.height.toFixed(0))}na(),Z.ticker.add(Qo)});function Qo(){for(const d of He)d.update(),d.draw();if(!s(Le)&&!Zt&&He.every(d=>d.state==="stopped")){Zt=!0,Oo();const d=Xo();console.log(`Checking wins, found ${d.length} wins`),d.length>0?(b(Ue,ce(d)),b(ge,ce(d.reduce((u,k)=>u+k.payout,0))),jo(s(Ne),d,s(ge)),Zo(s(ge)),b(Le,!0),b(Wo,ce(Date.now())),console.log(`🎉 VOITTO! ${s(ge)} pistettä! Uusi saldo: ${s(Se)}`),console.log(`isShowingWin set to: ${s(Le)}, totalWin: ${s(ge)}`),d.forEach(u=>{const k=u.multiplier?` (${u.multiplier}x multiplier)`:"";console.log(`${u.count}x ${u.symbol} = ${u.payout} pistettä${k}`)}),Ko(d),is("win"),s(he)&&!Ce&&(Ce=!0,Ae=window.setTimeout(()=>{s(Le)&&s(he)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),b(Le,!1),ls()),Ae=window.setTimeout(()=>{Ce=!1,cs()},200)},1500))):(console.log("No wins found this spin"),s(he)&&!Ce&&(Ce=!0,Ae=window.setTimeout(()=>{Ce=!1,cs()},500))),s(Y)&&s(Ee)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${s(Fe)}`),setTimeout(()=>{b(ns,ce(s(Fe))),b(rs,!0)},2e3))}}function fa(){if(!s(Y)&&V&&s(pe)&&!V.playing()&&(V.play(),console.log("🎵 Background music started on first spin")),Bo(),s(Y)&&s(Ee)>0)me(Ee,-1),me(as),console.log(`🎰 FREE SPIN! Remaining: ${s(Ee)}`);else if(!s(Y)){if(s(Se)<s(fe)){alert(`Not enough credits! Balance: ${s(Se)}, Bet: ${s(fe)}`),wt();return}b(Se,s(Se)-s(fe)),me(Ne),b(De,s(De)+s(fe))}Ae!==null&&(clearTimeout(Ae),Ae=null),b(Ue,ce([])),b(ge,0),b(Le,!1),Zt=!1,ls(),lt=ca(),He.forEach((d,u)=>{d.startSynchronized(u)}),is("spin")}function Jo(d,u,k=1400){if(typeof window>"u")return;const h=document.getElementById("winLabel");if(!h)return;const w=h.querySelector(".face"),$=h.querySelector(".depth");if(!w||!$)return;h.classList.add("rolling");const S=performance.now(),B=u-d,j=N=>1-Math.pow(1-N,3);function U(N){const G=Math.min(1,(N-S)/k),P="WIN "+Math.round(d+B*j(G)).toLocaleString("en-US");w.textContent=P,$.textContent=P,G<1?requestAnimationFrame(U):(h.classList.remove("rolling"),h.classList.add("winHit"),setTimeout(()=>h.classList.remove("winHit"),450))}requestAnimationFrame(U)}function Zo(d){b(Se,s(Se)+d),b(nt,s(nt)+d);const u=s(Qt);b(Qt,ce(d));const k=d>s(fe)*50?2e3:1400;if(Jo(u,d,k),s(Y)&&b(Fe,s(Fe)+d),d>0){me(es);const h=d/s(fe);h>=10&&Mo(),ze&&(h>=50?ze.show():h>=20?setTimeout(()=>ze.show(),200):h>=10&&setTimeout(()=>ze.show(),400))}}function er(){s(ot)<la.length-1&&me(ot)}function tr(){s(ot)>0&&me(ot,-1)}function Te(d){b(he,!0),b(rt,ce(d)),b(ae,!1),cs()}function wt(){b(he,!1),b(rt,0),Ce=!1,Ae!==null&&(clearTimeout(Ae),Ae=null)}function cs(){if(!s(he)||s(rt)<=0){wt();return}console.log(`Autoplay: Starting spin ${s(rt)} rounds left`),fa(),me(rt,-1)}function sr(){confirm("Reset all statistics?")&&(b(Ne,0),b(De,0),b(nt,0),b(es,0),b(bt,0),b(as,0),b(yt,0),b(os,0))}var ha=Ri();Lr(d=>{var u=bi();f(Wt(u)),Q(d,u)});var ga=Wt(ha);{var ar=d=>{var u=Ai(),k=f(_(u),2),h=f(_(k));A(k);var w=f(k,2);{var $=F=>{var M=yi(),z=f(_(M));A(M),xe(()=>D(z,` ${s(je)??""}`)),Q(F,M)};be(w,F=>{s(je)&&F($)})}var S=f(w,2),B=f(_(S));B.nodeValue=` ${we??""}`,A(S);var j=f(S,2),U=f(_(j));U.nodeValue=` ${Dt??""}`,A(j);var N=f(j,2),G=f(_(N));A(N);var E=f(N,2);{var P=F=>{var M=_i(),z=_(M),W=_(z);A(z);var Re=f(z,2);Ka(Re,17,()=>ue,Xa,(Ye,oe)=>{var ee=wi(),Ar=_(ee,!0);A(ee),xe(()=>D(Ar,s(oe))),Q(Ye,ee)}),A(M),xe(()=>D(W,`Log (${ue.length??""})`)),Q(F,M)};be(E,F=>{ue.length>0&&F(P)})}A(u),xe(()=>{D(h,` ${s(at)??""}`),D(G,` ${Nt.a??""}`)}),Q(d,u)};be(ga,d=>{(s(at)!=="Assets loaded successfully!"||s(je))&&d(ar)})}var va=f(ga,2);{var or=d=>{var u=Si(),k=f(_(u),2),h=_(k);A(k);var w=f(k,2);Ka(w,17,()=>s(Ue),Xa,(j,U)=>{var N=ki(),G=_(N);A(N),xe(E=>D(G,`${s(U).count??""} × ${ua[s(U).symbol]??""} = ${E??""} pistettä`),[()=>s(U).payout.toFixed(2)]),Q(j,N)});var $=f(w,2);{var S=j=>{var U=$i(),N=_(U),G=_(N);A(N),A(U),xe(()=>D(G,`✨ ${s(Ue)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),Q(j,U)};be($,j=>{s(Ue).length>0&&s(Ue)[0].multiplier>1&&j(S)})}var B=f($,2);A(u),xe(j=>D(h,`${j??""} pistettä`),[()=>s(ge).toFixed(2)]),C("click",B,()=>{b(Le,!1),ls(),console.log("Win popup closed, ready for next spin")}),Q(d,u)};be(va,d=>{s(ge)>0&&s(Le)&&d(or)})}var ma=f(va,2);{var rr=d=>{var u=Ei(),k=f(_(u),8);A(u),xe(h=>y(u,"style",`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.95);
    color: white;
    padding: ${30*s(n)}px;
    border-radius: ${15*s(n)}px;
    font-family: Arial, sans-serif;
    z-index: 3000;
    border: ${3*s(n)}px solid #ffd700;
    max-width: ${600*s(n)}px;
    max-height: ${h??""}px;
    overflow-y: auto;
    font-size: ${s(n)??""}em;
  `),[()=>Math.min(i*s(n)*.8,80*window.innerHeight/100)]),C("click",k,()=>{b(Ge,!1)}),Q(d,u)};be(ma,d=>{s(Ge)&&d(rr)})}var xa=f(ma,2);{var nr=d=>{var u=Li(),k=_(u),h=f(_(k),4),w=_(h,!0);A(h);var $=f(h,2);A(k),A(u),xe(S=>D(w,S),[()=>s(ns).toFixed(2)]),C("click",$,()=>{b(rs,!1),b(Y,!1),b(Fe,0),b(ns,0),Xt()}),C("mouseenter",$,S=>{S.currentTarget.style.transform="scale(1.05)",S.currentTarget.style.boxShadow="0 6px 20px rgba(255, 215, 0, 0.6)"}),C("mouseleave",$,S=>{S.currentTarget.style.transform="scale(1)",S.currentTarget.style.boxShadow="0 4px 15px rgba(255, 215, 0, 0.4)"}),Q(d,u)};be(xa,d=>{s(rs)&&d(nr)})}var ba=f(xa,2),ps=_(ba),ct=_(ps);y(ct,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${r}px;
        height: ${i}px;
      `);var us=_(ct),fs=f(us,2),ya=_(fs);{var ir=d=>{var u=Ti(),k=_(u),h=f(k,2),w=f(h,2),$=f(w,2),S=f($,2),B=f(S,2),j=f(B,2),U=f(j,2),N=f(U,2),G=f(N,2);A(u),xe(()=>{y(u,"style",`
    position: absolute;
    bottom: ${(g+20)*s(n)}px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.95);
    padding: ${20*s(n)}px;
    border-radius: ${15*s(n)}px;
    border: ${3*s(n)}px solid #0088ff;
    box-shadow: 0 ${8*s(n)}px ${30*s(n)}px rgba(0, 136, 255, 0.6);
    z-index: 2000;
    min-width: ${250*s(n)}px;
  `),y(k,"style",`color: white; font-weight: bold; margin-bottom: ${15*s(n)}px; text-align: center; font-size: ${18*s(n)}px;`),y(h,"style",`
        width: 100%;
        padding: ${12*s(n)}px;
        margin-bottom: ${8*s(n)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*s(n)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*s(n)}px;
        box-shadow: 0 ${4*s(n)}px ${10*s(n)}px rgba(68, 170, 68, 0.4);
      `),y(w,"style",`
        width: 100%;
        padding: ${12*s(n)}px;
        margin-bottom: ${8*s(n)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*s(n)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*s(n)}px;
        box-shadow: 0 ${4*s(n)}px ${10*s(n)}px rgba(68, 170, 68, 0.4);
      `),y($,"style",`
        width: 100%;
        padding: ${12*s(n)}px;
        margin-bottom: ${8*s(n)}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: ${8*s(n)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*s(n)}px;
        box-shadow: 0 ${4*s(n)}px ${10*s(n)}px rgba(68, 170, 68, 0.4);
      `),y(S,"style",`
        width: 100%;
        padding: ${12*s(n)}px;
        margin-bottom: ${8*s(n)}px;
        background: linear-gradient(135deg, #4488ff 0%, #66aaff 100%);
        color: white;
        border: none;
        border-radius: ${8*s(n)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*s(n)}px;
        box-shadow: 0 ${4*s(n)}px ${10*s(n)}px rgba(68, 136, 255, 0.4);
      `),y(B,"style",`
        width: 100%;
        padding: ${12*s(n)}px;
        margin-bottom: ${8*s(n)}px;
        background: linear-gradient(135deg, #4488ff 0%, #66aaff 100%);
        color: white;
        border: none;
        border-radius: ${8*s(n)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*s(n)}px;
        box-shadow: 0 ${4*s(n)}px ${10*s(n)}px rgba(68, 136, 255, 0.4);
      `),y(j,"style",`
        width: 100%;
        padding: ${12*s(n)}px;
        margin-bottom: ${8*s(n)}px;
        background: linear-gradient(135deg, #ff8844 0%, #ffaa66 100%);
        color: white;
        border: none;
        border-radius: ${8*s(n)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*s(n)}px;
        box-shadow: 0 ${4*s(n)}px ${10*s(n)}px rgba(255, 136, 68, 0.4);
      `),y(U,"style",`
        width: 100%;
        padding: ${12*s(n)}px;
        margin-bottom: ${8*s(n)}px;
        background: linear-gradient(135deg, #ff8844 0%, #ffaa66 100%);
        color: white;
        border: none;
        border-radius: ${8*s(n)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*s(n)}px;
        box-shadow: 0 ${4*s(n)}px ${10*s(n)}px rgba(255, 136, 68, 0.4);
      `),y(N,"style",`
        width: 100%;
        padding: ${12*s(n)}px;
        margin-bottom: ${15*s(n)}px;
        background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%);
        color: white;
        border: none;
        border-radius: ${8*s(n)}px;
        cursor: pointer;
        font-weight: bold;
        font-size: ${16*s(n)}px;
        box-shadow: 0 ${4*s(n)}px ${10*s(n)}px rgba(255, 68, 68, 0.4);
      `),y(G,"style",`
        width: 100%;
        padding: ${10*s(n)}px;
        background: rgba(255, 255, 255, 0.1);
        color: #aaa;
        border: ${1*s(n)}px solid #555;
        border-radius: ${8*s(n)}px;
        cursor: pointer;
        font-size: ${14*s(n)}px;
      `)}),C("click",h,()=>{Te(10),b(ae,!1)}),C("click",w,()=>{Te(25),b(ae,!1)}),C("click",$,()=>{Te(50),b(ae,!1)}),C("click",S,()=>{Te(100),b(ae,!1)}),C("click",B,()=>{Te(200),b(ae,!1)}),C("click",j,()=>{Te(500),b(ae,!1)}),C("click",U,()=>{Te(1e3),b(ae,!1)}),C("click",N,()=>{Te(5e3),b(ae,!1)}),C("click",G,()=>{b(ae,!1)}),Q(d,u)};be(ya,d=>{s(ae)&&d(ir)})}var hs=f(ya,2);y(hs,"src",`${q??""}/Control_leftend.png`);var _t=f(hs,2),At=_(_t),wa=_(At),gs=f(wa,2),vs=_(gs),kt=f(vs,2),lr=_(kt,!0);A(kt);var _a=f(kt,2);A(gs),A(At);var ms=f(At,2);y(ms,"src",`${q??""}/Control_divider.png`);var $t=f(ms,2),Aa=_($t),xs=f(Aa,2),dr=_(xs,!0);A(xs),A($t);var bs=f($t,2);y(bs,"src",`${q??""}/Control_divider.png`);var ys=f(bs,2),ws=_(ys),ka=_(ws);A(ws),A(ys);var _s=f(ys,2);y(_s,"src",`${q??""}/Control_divider.png`);var St=f(_s,2),Et=_(St),$a=f(Et,2);A(St);var As=f(St,2);y(As,"src",`${q??""}/Control_divider.png`);var Lt=f(As,2),Tt=_(Lt),Sa=f(Tt,2);A(Lt);var Rt=f(Lt,2),Ea=_(Rt),ks=f(Ea,2),$s=_(ks),cr=_($s);A($s);var La=f($s,2),pr=_(La);A(La),A(ks),A(Rt);var Ss=f(Rt,2);y(Ss,"src",`${q??""}/Control_divider.png`);var Ta=f(Ss,2);A(_t);var Ra=f(_t,2);y(Ra,"src",`${q??""}/Control_rightend.png`),A(fs),A(ct),Ha(ct,d=>ds=d,()=>ds);var It=f(ct,2);It.textContent=`🛠️ DEBUG v${a}`;var Pt=f(It,2);Ha(Pt,d=>ze=d,()=>ze);var Ot=f(Pt,2),Ia=f(_(Ot),2);Ia.textContent=`v${a}`;var Es=f(Ia,2),Pa=f(_(Es),2),ur=_(Pa,!0);A(Pa),A(Es);var Ls=f(Es,2),Oa=f(_(Ls),2),fr=_(Oa,!0);A(Oa),A(Ls);var Ts=f(Ls,2),Ba=f(_(Ts),2),hr=_(Ba,!0);A(Ba),A(Ts);var Rs=f(Ts,2),Is=f(_(Rs),2),gr=_(Is);A(Is),A(Rs);var Ps=f(Rs,2),Os=f(_(Ps),2),vr=_(Os);A(Os),A(Ps);var Bs=f(Ps,2),Ca=f(_(Bs),2),mr=_(Ca,!0);A(Ca),A(Bs);var Cs=f(Bs,2),Fa=f(_(Cs),2),xr=_(Fa,!0);A(Fa),A(Cs);var Fs=f(Cs,2),Ma=f(_(Fs),2),br=_(Ma);A(Ma),A(Fs);var Wa=f(Fs,2),za=f(Wa,2),Ve=_(za),yr=_(Ve);A(Ve);var Bt=f(Ve,2),pt=f(Bt,2),wr=_(pt);A(pt);var Ms=f(pt,2);A(za),A(Ot);var ut=f(Ot,2),_r=_(ut,!0);A(ut),A(ps),A(ba),xe((d,u,k,h,w,$,S,B)=>{y(ps,"style",`
    position: relative;
    width: ${r*s(n)}px;
    height: ${i*s(n)}px;
  `),y(us,"style",`
          position: absolute;
          top: ${130*s(n)}px;
          right: ${20*s(n)}px;
          padding: ${10*s(n)}px ${15*s(n)}px;
          background-color: rgba(255, 215, 0, 0.3);
          border: ${2*s(n)}px solid rgba(255, 215, 0, 0.7);
          border-radius: ${8*s(n)}px;
          cursor: pointer;
          font-weight: bold;
          font-size: ${16*s(n)}px;
          color: white;
          text-shadow: 0 0 ${5*s(n)}px rgba(0,0,0,0.8);
          z-index: 1000;
          min-width: ${180*s(n)}px;
        `),y(fs,"style",`
        position: absolute;
        left: ${((Yt?Yt.x:L)+T)*s(n)}px;
        top: ${(x+J)*s(n)}px;
        width: ${s(Vt)*s(n)}px;
        height: ${g*s(n)}px;
        display: flex;
        align-items: center;
        z-index: 1000;
      `),y(hs,"style",`height: ${g*s(n)}px; flex-shrink: 0;`),y(_t,"style",`
    flex-grow: 1;
    height: ${g*s(n)}px;
    background-image: url('${q??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 ${20*s(n)}px;
  `),y(At,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*s(n)}px;`),y(wa,"style",`color: #00ff00; font-size: ${12*s(n)}px; font-weight: bold;`),y(gs,"style",`display: flex; gap: ${5*s(n)}px; align-items: center;`),y(vs,"style",`
            width: ${40*s(n)}px;
            height: ${40*s(n)}px;
            background-image: url('${q??""}/Control_lowerbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(kt,"style",`
          color: #fff;
          font-size: ${18*s(n)}px;
          font-weight: bold;
          min-width: ${80*s(n)}px;
          text-align: center;
          font-family: 'Courier New', monospace;
        `),D(lr,d),y(_a,"style",`
            width: ${40*s(n)}px;
            height: ${40*s(n)}px;
            background-image: url('${q??""}/Control_upperbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(ms,"style",`height: ${g*.8*s(n)}px; flex-shrink: 0;`),y($t,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*s(n)}px;`),y(Aa,"style",`color: #00ff00; font-size: ${12*s(n)}px; font-weight: bold;`),y(xs,"style",`
        color: #fff;
        font-size: ${20*s(n)}px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      `),D(dr,u),y(bs,"style",`height: ${g*.8*s(n)}px; flex-shrink: 0;`),gn(ws,1,`play-button-wrapper ${(s(Kt)?"glare-animate":"")??""}`,"svelte-o2kwxd"),y(ka,"style",`
            width: ${130*s(n)}px;
            height: ${130*s(n)}px;
            background-image: url('${q??""}/Control_playbutton.png');
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
          `),y(_s,"style",`height: ${g*.8*s(n)}px; flex-shrink: 0;`),y(St,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*s(n)}px;`),y(Et,"style",`
          width: ${50*s(n)}px;
          height: ${50*s(n)}px;
          background-image: url('${q??""}/${(s(he)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),y(Et,"title",s(he)?"Stop Autoplay":"Autoplay"),y($a,"src",`${q??""}/${(s(he)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),y($a,"style",`width: ${50*s(n)}px; height: auto;`),y(As,"style",`height: ${g*.8*s(n)}px; flex-shrink: 0;`),y(Lt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*s(n)}px;`),y(Tt,"style",`
          width: ${50*s(n)}px;
          height: ${50*s(n)}px;
          background-image: url('${q??""}/Control_fastplay_select.png');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),y(Tt,"title",`Spin Speed: ${(s(le)==="slow"?"Slow":s(le)==="medium"?"Medium":"Fast")??""}`),y(Sa,"src",`${q??""}/${(s(le)==="slow"?"Control_bar_deselect.png":s(le)==="medium"?"Control_half_bar_select.png":"Control_bar_select.png")??""}`),y(Sa,"style",`width: ${50*s(n)}px; height: auto;`),y(Rt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*s(n)}px;`),y(Ea,"style",`color: #00ff00; font-size: ${12*s(n)}px; font-weight: bold;`),y(ks,"style",`font-size: ${20*s(n)}px;`),D(cr,`WIN ${k??""}`),D(pr,`WIN ${k??""}`),y(Ss,"style",`height: ${g*.8*s(n)}px; flex-shrink: 0;`),y(Ta,"style",`
        width: ${50*s(n)}px;
        height: ${50*s(n)}px;
        background-image: url('${q??""}/Control_menubar.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),y(Ra,"style",`height: ${g*s(n)}px; flex-shrink: 0;`),y(It,"style",`
    position: absolute;
    top: ${190*s(n)}px;
    right: ${20*s(n)}px;
    padding: ${10*s(n)}px ${15*s(n)}px;
    background-color: rgba(0, 255, 0, 0.3);
    border: ${2*s(n)}px solid rgba(0, 255, 0, 0.7);
    border-radius: ${8*s(n)}px;
    cursor: pointer;
    font-weight: bold;
    font-size: ${16*s(n)}px;
    color: white;
    text-shadow: 0 0 ${5*s(n)}px rgba(0,0,0,0.8);
    z-index: 10000;
    min-width: ${180*s(n)}px;
    pointer-events: auto;
  `),y(Pt,"winlevel",s(ge)/s(fe)>=50?"jackpot":s(ge)/s(fe)>=20?"medium":"small"),y(Pt,"winamount",s(ge)),y(Ot,"style",`
  position: absolute;
  top: 20px;
  left: 20px;
  display: ${(s(Jt)?"block":"none")??""};
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
`),D(ur,h),D(fr,w),D(hr,$),y(Is,"style",`color: ${S??""};`),D(gr,`${s(ts)??""}%`),y(Os,"style",`color: ${B??""};`),D(vr,`${s(ss)??""}%`),D(mr,s(bt)),D(xr,s(as)),D(br,`${s(zo)??""}%`),Ve.disabled=s(de).length===0,y(Ve,"style",`
        width: 100%;
        padding: 5px;
        background: ${(s(de).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(s(de).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(s(de).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(s(de).length>0?"1":"0.5")??""};
      `),D(yr,`Download Win Log (${s(de).length??""})`),Bt.disabled=s(de).length===0,y(Bt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(s(de).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(s(de).length>0?"1":"0.5")??""};
      `),y(pt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(s(pe)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(s(pe)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),D(wr,`🎵 Music: ${(s(pe)?"ON":"OFF")??""}`),Ms.disabled=s(Y),y(Ms,"style",`
        width: 100%;
        padding: 5px;
        background: ${(s(Y)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(s(Y)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(s(Y)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(s(Y)?"0.5":"1")??""};
      `),y(ut,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(s(_e)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(s(_e)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),y(ut,"title",s(_e)?"Mykistä äänet":"Laita äänet päälle"),D(_r,s(_e)?"🔊":"🔇")},[()=>s(fe).toFixed(2),()=>s(Se).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>s(Qt).toLocaleString("en-US",{minimumFractionDigits:0,maximumFractionDigits:0}),()=>s(Ne).toLocaleString(),()=>s(De).toLocaleString(),()=>s(nt).toLocaleString(),()=>parseFloat(s(ts))>=95?"#00ff00":parseFloat(s(ts))>=85?"#ffff00":"#ff6666",()=>parseFloat(s(ss))>=30?"#00ff00":parseFloat(s(ss))>=20?"#ffff00":"#ff6666"]),C("click",us,()=>{b(Ge,!s(Ge))}),C("click",vs,tr),C("click",_a,er),C("click",ka,()=>{s(he)&&wt(),fa()}),C("click",Et,()=>{s(he)?wt():b(ae,!s(ae))}),C("click",Tt,()=>{s(le)==="slow"?b(le,"medium"):s(le)==="medium"?b(le,"fast"):b(le,"slow")}),C("click",Ta,()=>{b(Ge,!s(Ge))}),C("click",It,()=>{b(Jt,!s(Jt))}),C("click",Wa,sr),C("click",Ve,No),C("click",Bt,Do),C("click",pt,Co),C("click",Ms,Uo),C("click",ut,()=>{b(_e,!s(_e))}),Q(t,ha),po()}var Pi=se('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),Oi=se('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function Bi(t,e){lo(e,!1);let a=an(e,"isAuthenticated",12,!1),o=Ys(""),r=Ys(!1);const i="slot2024";function l(){s(o)===i?(a(!0),sessionStorage.setItem("gameAuthenticated","true")):(b(r,!0),b(o,""),setTimeout(()=>b(r,!1),3e3))}co(()=>{a(sessionStorage.getItem("gameAuthenticated")==="true")}),Ir();var c=Rr(),v=Wt(c);{var m=p=>{var x=Oi(),g=_(x),L=f(_(g),4),T=_(L);vn(T),sn(2),A(L);var J=f(L,2);{var X=R=>{var H=Pi();Q(R,H)};be(J,R=>{s(r)&&R(X)})}A(g),A(x),xn(T,()=>s(o),R=>b(o,R)),C("submit",L,bn(l)),Q(p,x)};be(v,p=>{a()||p(m)})}Q(t,c),po()}var Ci=se("<!> <!>",1);function Yi(t){let e=Ys(!1);var a=Ci(),o=Wt(a);Bi(o,{get isAuthenticated(){return s(e)},set isAuthenticated(l){b(e,l)},$$legacy:!0});var r=f(o,2);{var i=l=>{Ii(l,{})};be(r,l=>{s(e)&&l(i)})}Q(t,a)}export{xo as A,go as C,En as R,_n as S,bo as V,Yi as _,wn as u};
