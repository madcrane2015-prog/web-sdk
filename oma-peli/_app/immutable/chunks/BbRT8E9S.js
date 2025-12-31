const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DFyX2z03.js","./DJ5S-yJ0.js","./Db_meveG.js","./BdJg5JGx.js","./BcU-qs_z.js","./C2GHuDhf.js","./DhOQOgQF.js","./Bb3te8rW.js"])))=>i.map(i=>d[i]);
var Oi=Object.defineProperty;var Ii=(t,e,s)=>e in t?Oi(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var he=(t,e,s)=>Ii(t,typeof e!="symbol"?e+"":e,s);import{f as Ci,l as Bi,t as te,g as I,a as q,i as Fi,d as Mi}from"./BJCaw-qO.js";import{i as Wi}from"./CeejRTB0.js";import{R as ve,T as Ni,Q as zi,i as a,w as Di,W as Ui,X as Va,Y as Ya,Z as Hs,a1 as ht,a9 as Gi,_ as uo,$ as fo,a0 as Hi,ad as ho,O as Vi,z as Yi,I as Xa,ar as Vs,K as Ka,as as Xi,at as Ki,au as Qi,ac as Zi,av as qi,aw as Ji,ax as er,ay as tr,a3 as sr,az as ar,aA as or,N as ir,aB as rr,aC as nr,g as lr,n as cr,p as go,ai as R,ah as vo,y as x,aD as ke,f as vt,s as f,c as w,r as A,t as ge,k as Ys,a as mo,aE as dr,aF as ea}from"./BdJg5JGx.js";import{_ as Qa,p as ie,i as de}from"./Db_meveG.js";import{a as pr,s as N}from"./Df-H93ww.js";import{b as Za,p as ur}from"./dtG1_1a4.js";import{b as be}from"./CK5osbFR.js";import{e as Oe,E as O,a as fr,C as ra,Q as ta,V as sa,N as Xs,D as re,H as hr,p as Fe,a0 as et,a1 as Me,a2 as gr,w as Pe,a3 as mt,a4 as bo,a5 as tt,a6 as $e,a7 as Dt,a8 as yo,a9 as vr,aa as Ks,y as Wt}from"./DJ5S-yJ0.js";import{A as mr,B as qa,G as br,a as Ja}from"./BcU-qs_z.js";function eo(t,e){return e}function yr(t,e,s,o){for(var i=[],r=e.length,n=0;n<r;n++)Qi(e[n].e,i,!0);var d=r>0&&i.length===0&&s!==null;if(d){var v=s.parentNode;Zi(v),v.append(s),o.clear(),Re(t,e[0].prev,e[r-1].next)}qi(i,()=>{for(var m=0;m<r;m++){var p=e[m];d||(o.delete(p.k),Re(t,p.prev,p.next)),Ji(p.e,!d)}})}function to(t,e,s,o,i,r=null){var n=t,d={flags:e,items:new Map,first:null};ve&&Ni();var v=null,m=!1,p=Di(()=>{var b=s();return Vi(b)?b:b==null?[]:ho(b)});zi(()=>{var b=a(p),g=b.length;if(m&&g===0)return;m=g===0;let E=!1;if(ve){var j=n.data===Ui;j!==(g===0)&&(n=Va(),Ya(n),Hs(!1),E=!0)}if(ve){for(var se=null,H,L=0;L<g;L++){if(ht.nodeType===8&&ht.data===Gi){n=ht,E=!0,Hs(!1);break}var z=b[L],ye=o(z,L);H=xo(ht,d,se,null,z,ye,L,i,e,s),d.items.set(ye,H),se=H}g>0&&Ya(Va())}ve||xr(b,d,n,i,e,o,s),r!==null&&(g===0?v?uo(v):v=fo(()=>r(n)):v!==null&&Hi(v,()=>{v=null})),E&&Hs(!0),a(p)}),ve&&(n=ht)}function xr(t,e,s,o,i,r,n){var d=t.length,v=e.items,m=e.first,p=m,b,g=null,E=[],j=[],se,H,L,z;for(z=0;z<d;z+=1){if(se=t[z],H=r(se,z),L=v.get(H),L===void 0){var ye=p?p.e.nodes_start:s;g=xo(ye,e,g,g===null?e.first:g.next,se,H,z,o,i,n),v.set(H,g),E=[],j=[],p=g.next;continue}if(_r(L,se,z),(L.e.f&Vs)!==0&&uo(L.e),L!==p){if(b!==void 0&&b.has(L)){if(E.length<j.length){var Se=j[0],me;g=Se.prev;var Ut=E[0],xe=E[E.length-1];for(me=0;me<E.length;me+=1)so(E[me],Se,s);for(me=0;me<j.length;me+=1)b.delete(j[me]);Re(e,Ut.prev,xe.next),Re(e,g,Ut),Re(e,xe,Se),p=Se,g=xe,z-=1,E=[],j=[]}else b.delete(L),so(L,p,s),Re(e,L.prev,L.next),Re(e,L,g===null?e.first:g.next),Re(e,g,L),g=L;continue}for(E=[],j=[];p!==null&&p.k!==H;)(p.e.f&Vs)===0&&(b??(b=new Set)).add(p),j.push(p),p=p.next;if(p===null)continue;L=p}E.push(L),g=L,p=L.next}if(p!==null||b!==void 0){for(var _e=b===void 0?[]:ho(b);p!==null;)(p.e.f&Vs)===0&&_e.push(p),p=p.next;var da=_e.length;if(da>0){var Gt=null;yr(e,_e,Gt,v)}}Ka.first=e.first&&e.first.e,Ka.last=g&&g.e}function _r(t,e,s,o){Ki(t.v,e),t.i=s}function xo(t,e,s,o,i,r,n,d,v,m){var p=(v&er)!==0,b=(v&tr)===0,g=p?b?Yi(i):Xa(i):i,E=(v&Xi)===0?n:Xa(n),j={i:E,v:g,k:r,a:null,e:null,prev:s,next:o};try{return j.e=fo(()=>d(t,g,E,m),ve),j.e.prev=s&&s.e,j.e.next=o&&o.e,s===null?e.first=j:(s.next=j,s.e.next=j.e),o!==null&&(o.prev=j,o.e.prev=j.e),j}finally{}}function so(t,e,s){for(var o=t.next?t.next.e.nodes_start:s,i=e?e.e.nodes_start:s,r=t.e.nodes_start;r!==o;){var n=sr(r);i.before(r),r=n}}function Re(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function wr(t,e,s){var o=t==null?"":""+t;return o=o?o+" "+e:e,o===""?null:o}function Ar(t,e,s,o,i,r){var n=t.__className;if(ve||n!==s){var d=wr(s,o);(!ve||d!==t.getAttribute("class"))&&(d==null?t.removeAttribute("class"):t.className=d),t.__className=s}return r}function kr(t){if(ve){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var o=t.value;y(t,"value",null),t.value=o}if(t.hasAttribute("checked")){var i=t.checked;y(t,"checked",null),t.checked=i}}};t.__on_r=s,ar(s),Ci()}}function y(t,e,s,o){var i=t.__attributes??(t.__attributes={});ve&&(i[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||i[e]!==(i[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[or]=s),s==null?t.removeAttribute(e):typeof s!="string"&&$r(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var ao=new Map;function $r(t){var e=ao.get(t.nodeName);if(e)return e;ao.set(t.nodeName,e=[]);for(var s,o=t,i=Element.prototype;i!==o;){s=rr(o);for(var r in s)s[r].set&&e.push(r);o=ir(o)}return e}function Sr(t,e,s=e){var o=nr();Bi(t,"input",i=>{var r=i?t.defaultValue:t.value;if(r=Qs(t)?Zs(r):r,s(r),o&&r!==(r=e())){var n=t.selectionStart,d=t.selectionEnd;t.value=r??"",d!==null&&(t.selectionStart=n,t.selectionEnd=Math.min(d,t.value.length))}}),(ve&&t.defaultValue!==t.value||lr(e)==null&&t.value)&&s(Qs(t)?Zs(t.value):t.value),cr(()=>{var i=e();Qs(t)&&i===Zs(t.value)||t.type==="date"&&!i&&!t.value||i!==t.value&&(t.value=i??"")})}function Qs(t){var e=t.type;return e==="number"||e==="range"}function Zs(t){return t===""?null:+t}function Er(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const aa=[];Oe.handleByNamedList(O.Environment,aa);async function jr(t){if(!t)for(let e=0;e<aa.length;e++){const s=aa[e];if(s.value.test()){await s.value.load();return}}}let gt;function Lr(){if(typeof gt=="boolean")return gt;try{gt=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{gt=!1}return gt}var _o=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(_o||{});class Tr{constructor(e){this.items=[],this._name=e}emit(e,s,o,i,r,n,d,v){const{name:m,items:p}=this;for(let b=0,g=p.length;b<g;b++)p[b][m](e,s,o,i,r,n,d,v);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Rr=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],wo=class Ao extends fr{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...Rr,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await jr(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const o in this._systemsHash)e={...this._systemsHash[o].constructor.defaultOptions,...e};e={...Ao.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let o=0;o<this.runners.init.items.length;o++)await this.runners.init.items[o].init(e);this._initOptions=e}render(e,s){let o=e;if(o instanceof ra&&(o={container:o},s&&(ta(sa,"passing a second argument is deprecated, please use render options instead"),o.target=s.renderTexture)),o.target||(o.target=this.view.renderTarget),o.target===this.view.renderTarget&&(this._lastObjectRendered=o.container,o.clearColor??(o.clearColor=this.background.colorRgba),o.clear??(o.clear=this.background.clearBeforeRender)),o.clearColor){const i=Array.isArray(o.clearColor)&&o.clearColor.length===4;o.clearColor=i?o.clearColor:Xs.shared.setValue(o.clearColor).toArray()}o.transform||(o.container.updateLocalTransform(),o.transform=o.container.localTransform),o.container.enableRenderGroup(),this.runners.prerender.emit(o),this.runners.renderStart.emit(o),this.runners.render.emit(o),this.runners.renderEnd.emit(o),this.runners.postrender.emit(o)}resize(e,s,o){const i=this.view.resolution;this.view.resize(e,s,o),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),o!==void 0&&o!==i&&this.runners.resolutionChange.emit(o)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=_o.ALL);const{clear:o,clearColor:i,target:r}=e;Xs.shared.setValue(i??this.background.colorRgba),s.renderTarget.clear(r,o,Xs.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new Tr(s)})}_addSystems(e){let s;for(s in e){const o=e[s];this._addSystem(o.value,o.name)}}_addSystem(e,s){const o=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=o,this._systemsHash[s]=o;for(const i in this.runners)this.runners[i].add(o);return this}_addPipes(e,s){const o=s.reduce((i,r)=>(i[r.name]=r.value,i),{});e.forEach(i=>{const r=i.value,n=i.name,d=o[n];this.renderPipes[n]=new r(this,d?new d:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Lr())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};wo.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let ko=wo,Nt;function Pr(t){return Nt!==void 0||(Nt=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??ko.defaultOptions.failIfMajorPerformanceCaveat};try{if(!re.get().getWebGLRenderingContext())return!1;let i=re.get().createCanvas().getContext("webgl",e);const r=!!((s=i==null?void 0:i.getContextAttributes())!=null&&s.stencil);if(i){const n=i.getExtension("WEBGL_lose_context");n&&n.loseContext()}return i=null,r}catch{return!1}})()),Nt}let zt;async function Or(t={}){return zt!==void 0||(zt=await(async()=>{const e=re.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),zt}const oo=["webgl","webgpu","canvas"];async function Ir(t){let e=[];t.preference?(e.push(t.preference),oo.forEach(r=>{r!==t.preference&&e.push(r)})):e=oo.slice();let s,o={};for(let r=0;r<e.length;r++){const n=e[r];if(n==="webgpu"&&await Or()){const{WebGPURenderer:d}=await Qa(async()=>{const{WebGPURenderer:v}=await import("./DFyX2z03.js");return{WebGPURenderer:v}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=d,o={...t,...t.webgpu};break}else if(n==="webgl"&&Pr(t.failIfMajorPerformanceCaveat??ko.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:d}=await Qa(async()=>{const{WebGLRenderer:v}=await import("./Bb3te8rW.js");return{WebGLRenderer:v}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=d,o={...t,...t.webgl};break}else if(n==="canvas")throw o={...t},new Error("CanvasRenderer is not yet implemented")}if(delete o.webgpu,delete o.webgl,!s)throw new Error("No available renderer for the current environment");const i=new s;return await i.init(o),i}const $o="8.8.1";class So{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,$o)}static destroy(){}}So.extension=O.Application;class Cr{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,$o)}destroy(){this._renderer=null}}Cr.extension={type:[O.WebGLSystem,O.WebGPUSystem],name:"initHook",priority:-10};const Eo=class oa{constructor(...e){this.stage=new ra,e[0]!==void 0&&ta(sa,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Ir(e),oa._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return ta(sa,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const o=oa._plugins.slice(0);o.reverse(),o.forEach(i=>{i.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Eo._plugins=[];let jo=Eo;Oe.handleByList(O.Application,jo._plugins);Oe.add(So);class Lo extends mr{constructor(e,s){super();const{textures:o,data:i}=e;Object.keys(i.pages).forEach(r=>{const n=i.pages[parseInt(r,10)],d=o[n.id];this.pages.push({texture:d})}),Object.keys(i.chars).forEach(r=>{const n=i.chars[r],{frame:d,source:v}=o[n.page],m=new hr(n.x+d.x,n.y+d.y,n.width,n.height),p=new Fe({source:v,frame:m});this.chars[r]={id:r.codePointAt(0),xOffset:n.xOffset,yOffset:n.yOffset,xAdvance:n.xAdvance,kerning:n.kerning??{},texture:p}}),this.baseRenderedFontSize=i.fontSize,this.baseMeasurementFontSize=i.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:i.fontSize},this.baseLineOffset=i.baseLineOffset,this.lineHeight=i.lineHeight,this.fontFamily=i.fontFamily,this.distanceField=i.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){qa.install(e)}static uninstall(e){qa.uninstall(e)}}const qs={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const b in e){const g=e[b].match(/^[a-z]+/gm)[0],E=e[b].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),j={};for(const se in E){const H=E[se].split("="),L=H[0],z=H[1].replace(/"/gm,""),ye=parseFloat(z),Se=isNaN(ye)?z:ye;j[L]=Se}s[g].push(j)}const o={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[i]=s.info,[r]=s.common,[n]=s.distanceField??[];n&&(o.distanceField={range:parseInt(n.distanceRange,10),type:n.fieldType}),o.fontSize=parseInt(i.size,10),o.fontFamily=i.face,o.lineHeight=parseInt(r.lineHeight,10);const d=s.page;for(let b=0;b<d.length;b++)o.pages.push({id:parseInt(d[b].id,10)||0,file:d[b].file});const v={};o.baseLineOffset=o.lineHeight-parseInt(r.base,10);const m=s.char;for(let b=0;b<m.length;b++){const g=m[b],E=parseInt(g.id,10);let j=g.letter??g.char??String.fromCharCode(E);j==="space"&&(j=" "),v[E]=j,o.chars[j]={id:E,page:parseInt(g.page,10)||0,x:parseInt(g.x,10),y:parseInt(g.y,10),width:parseInt(g.width,10),height:parseInt(g.height,10),xOffset:parseInt(g.xoffset,10),yOffset:parseInt(g.yoffset,10),xAdvance:parseInt(g.xadvance,10),kerning:{}}}const p=s.kerning||[];for(let b=0;b<p.length;b++){const g=parseInt(p[b].first,10),E=parseInt(p[b].second,10),j=parseInt(p[b].amount,10);o.chars[v[E]].kerning[v[g]]=j}return o}},io={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],o=t.getElementsByTagName("common")[0],i=t.getElementsByTagName("distanceField")[0];i&&(e.distanceField={type:i.getAttribute("fieldType"),range:parseInt(i.getAttribute("distanceRange"),10)});const r=t.getElementsByTagName("page"),n=t.getElementsByTagName("char"),d=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(o.getAttribute("lineHeight"),10);for(let m=0;m<r.length;m++)e.pages.push({id:parseInt(r[m].getAttribute("id"),10)||0,file:r[m].getAttribute("file")});const v={};e.baseLineOffset=e.lineHeight-parseInt(o.getAttribute("base"),10);for(let m=0;m<n.length;m++){const p=n[m],b=parseInt(p.getAttribute("id"),10);let g=p.getAttribute("letter")??p.getAttribute("char")??String.fromCharCode(b);g==="space"&&(g=" "),v[b]=g,e.chars[g]={id:b,page:parseInt(p.getAttribute("page"),10)||0,x:parseInt(p.getAttribute("x"),10),y:parseInt(p.getAttribute("y"),10),width:parseInt(p.getAttribute("width"),10),height:parseInt(p.getAttribute("height"),10),xOffset:parseInt(p.getAttribute("xoffset"),10),yOffset:parseInt(p.getAttribute("yoffset"),10),xAdvance:parseInt(p.getAttribute("xadvance"),10),kerning:{}}}for(let m=0;m<d.length;m++){const p=parseInt(d[m].getAttribute("first"),10),b=parseInt(d[m].getAttribute("second"),10),g=parseInt(d[m].getAttribute("amount"),10);e.chars[v[b]].kerning[v[p]]=g}return e}},ro={test(t){return typeof t=="string"&&t.includes("<font>")?io.test(re.get().parseXML(t)):!1},parse(t){return io.parse(re.get().parseXML(t))}},Br=[".xml",".fnt"],Fr={extension:{type:O.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof Lo,getCacheableAssets(t,e){const s={};return t.forEach(o=>{s[o]=e,s[`${o}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},Mr={extension:{type:O.LoadParser,priority:et.Normal},name:"loadBitmapFont",test(t){return Br.includes(Me.extname(t).toLowerCase())},async testParse(t){return qs.test(t)||ro.test(t)},async parse(t,e,s){const o=qs.test(t)?qs.parse(t):ro.parse(t),{src:i}=e,{pages:r}=o,n=[],d=o.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let b=0;b<r.length;++b){const g=r[b].file;let E=Me.join(Me.dirname(i),g);E=gr(E,i),n.push({src:E,data:d})}const v=await s.load(n),m=n.map(b=>v[b.src]);return new Lo({data:o,textures:m},i)},async load(t,e){return await(await re.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(o=>s.unload(o.texture.source._sourceOrigin))),t.destroy()}};class Wr{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let o=0;o<s;o++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Nr={extension:{type:O.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Fe),getCacheableAssets:(t,e)=>{const s={};return t.forEach(o=>{e.forEach((i,r)=>{s[o+(r===0?"":r+1)]=i})}),s}};async function To(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const zr={extension:{type:O.DetectionParser,priority:1},test:async()=>To("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},no=["png","jpg","jpeg"],Dr={extension:{type:O.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...no],remove:async t=>t.filter(e=>!no.includes(e))},Ur="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function na(t){return Ur?!1:document.createElement("video").canPlayType(t)!==""}const Gr={extension:{type:O.DetectionParser,priority:0},test:async()=>na("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},Hr={extension:{type:O.DetectionParser,priority:0},test:async()=>na("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},Vr={extension:{type:O.DetectionParser,priority:0},test:async()=>na("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},Yr={extension:{type:O.DetectionParser,priority:0},test:async()=>To("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class Xr{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,o)=>(this._parsersValidated=!1,e[s]=o,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const o={promise:null,parser:null};return o.promise=(async()=>{var n,d;let i=null,r=null;if(s.loadParser&&(r=this._parserHash[s.loadParser],r||Pe(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!r){for(let v=0;v<this.parsers.length;v++){const m=this.parsers[v];if(m.load&&((n=m.test)!=null&&n.call(m,e,s,this))){r=m;break}}if(!r)return Pe(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}i=await r.load(e,s,this),o.parser=r;for(let v=0;v<this.parsers.length;v++){const m=this.parsers[v];m.parse&&m.parse&&await((d=m.testParse)==null?void 0:d.call(m,i,s,this))&&(i=await m.parse(i,s,this)||i,o.parser=m)}return i})(),o}async load(e,s){this._parsersValidated||this._validateParsers();let o=0;const i={},r=bo(e),n=mt(e,m=>({alias:[m],src:m,data:{}})),d=n.length,v=n.map(async m=>{const p=Me.toAbsolute(m.src);if(!i[m.src])try{this.promiseCache[p]||(this.promiseCache[p]=this._getLoadPromiseAndParser(p,m)),i[m.src]=await this.promiseCache[p].promise,s&&s(++o/d)}catch(b){throw delete this.promiseCache[p],delete i[m.src],new Error(`[Loader.load] Failed to load ${p}.
${b}`)}});return await Promise.all(v),r?i[n[0].src]:i}async unload(e){const o=mt(e,i=>({alias:[i],src:i})).map(async i=>{var d,v;const r=Me.toAbsolute(i.src),n=this.promiseCache[r];if(n){const m=await n.promise;delete this.promiseCache[r],await((v=(d=n.parser)==null?void 0:d.unload)==null?void 0:v.call(d,m,i,this))}});await Promise.all(o)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&Pe(`[Assets] loadParser name conflict "${s.name}"`):Pe("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function st(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const Kr=".json",Qr="application/json",Zr={extension:{type:O.LoadParser,priority:et.Low},name:"loadJson",test(t){return st(t,Qr)||tt(t,Kr)},async load(t){return await(await re.get().fetch(t)).json()}},qr=".txt",Jr="text/plain",en={name:"loadTxt",extension:{type:O.LoadParser,priority:et.Low,name:"loadTxt"},test(t){return st(t,Jr)||tt(t,qr)},async load(t){return await(await re.get().fetch(t)).text()}},tn=["normal","bold","100","200","300","400","500","600","700","800","900"],sn=[".ttf",".otf",".woff",".woff2"],an=["font/ttf","font/otf","font/woff","font/woff2"],on=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function rn(t){const e=Me.extname(t),i=Me.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(d=>d.charAt(0).toUpperCase()+d.slice(1));let r=i.length>0;for(const d of i)if(!d.match(on)){r=!1;break}let n=i.join(" ");return r||(n=`"${n.replace(/[\\"]/g,"\\$&")}"`),n}const nn=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function ln(t){return nn.test(t)?t:encodeURI(t)}const cn={extension:{type:O.LoadParser,priority:et.Low},name:"loadWebFont",test(t){return st(t,an)||tt(t,sn)},async load(t,e){var o,i,r;const s=re.get().getFontFaceSet();if(s){const n=[],d=((o=e.data)==null?void 0:o.family)??rn(t),v=((r=(i=e.data)==null?void 0:i.weights)==null?void 0:r.filter(p=>tn.includes(p)))??["normal"],m=e.data??{};for(let p=0;p<v.length;p++){const b=v[p],g=new FontFace(d,`url(${ln(t)})`,{...m,weight:b});await g.load(),s.add(g),n.push(g)}return $e.set(`${d}-and-url`,{url:t,fontFaces:n}),n.length===1?n[0]:n}return Pe("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{$e.remove(`${e.family}-and-url`),re.get().getFontFaceSet().delete(e)})}};function la(t,e=1){var o;const s=(o=Dt.RETINA_PREFIX)==null?void 0:o.exec(t);return s?parseFloat(s[1]):e}function ca(t,e,s){t.label=s,t._sourceOrigin=s;const o=new Fe({source:t,label:s}),i=()=>{delete e.promiseCache[s],$e.has(s)&&$e.remove(s)};return o.source.once("destroy",()=>{e.promiseCache[s]&&(Pe("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),i())}),o.once("destroy",()=>{t.destroyed||(Pe("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),i())}),o}const dn=".svg",pn="image/svg+xml",un={extension:{type:O.LoadParser,priority:et.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return st(t,pn)||tt(t,dn)},async load(t,e,s){var o;return((o=e.data)==null?void 0:o.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?hn(t):fn(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function fn(t,e,s,o){var H,L,z;const r=await(await re.get().fetch(t)).blob(),n=URL.createObjectURL(r),d=new Image;d.src=n,d.crossOrigin=o,await d.decode(),URL.revokeObjectURL(n);const v=document.createElement("canvas"),m=v.getContext("2d"),p=((H=e.data)==null?void 0:H.resolution)||la(t),b=((L=e.data)==null?void 0:L.width)??d.width,g=((z=e.data)==null?void 0:z.height)??d.height;v.width=b*p,v.height=g*p,m.drawImage(d,0,0,b*p,g*p);const{parseAsGraphicsContext:E,...j}=e.data??{},se=new yo({resource:v,alphaMode:"premultiply-alpha-on-upload",resolution:p,...j});return ca(se,s,t)}async function hn(t){const s=await(await re.get().fetch(t)).text(),o=new br;return o.svg(s),o}const gn=`(function () {
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
`;let qe=null,ia=class{constructor(){qe||(qe=URL.createObjectURL(new Blob([gn],{type:"application/javascript"}))),this.worker=new Worker(qe)}};ia.revokeObjectURL=function(){qe&&(URL.revokeObjectURL(qe),qe=null)};const vn=`(function () {
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
`;let Je=null;class Ro{constructor(){Je||(Je=URL.createObjectURL(new Blob([vn],{type:"application/javascript"}))),this.worker=new Worker(Je)}}Ro.revokeObjectURL=function(){Je&&(URL.revokeObjectURL(Je),Je=null)};let lo=0,Js;class mn{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new ia;s.addEventListener("message",o=>{s.terminate(),ia.revokeObjectURL(),e(o.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var o;return this._run("loadImageBitmap",[e,(o=s==null?void 0:s.data)==null?void 0:o.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){Js===void 0&&(Js=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<Js&&(this._createdWorkers++,e=new Ro().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const o=new Promise((i,r)=>{this._queue.push({id:e,arguments:s,resolve:i,reject:r})});return this._next(),o}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),o=s.id;this._resolveHash[lo]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:lo++,id:o})}}const co=new mn,bn=[".jpeg",".jpg",".png",".webp",".avif"],yn=["image/jpeg","image/png","image/webp","image/avif"];async function xn(t,e){var i;const s=await re.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const o=await s.blob();return((i=e==null?void 0:e.data)==null?void 0:i.alphaMode)==="premultiplied-alpha"?createImageBitmap(o,{premultiplyAlpha:"none"}):createImageBitmap(o)}const Po={name:"loadTextures",extension:{type:O.LoadParser,priority:et.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return st(t,yn)||tt(t,bn)},async load(t,e,s){var r;let o=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await co.isImageBitmapSupported()?o=await co.loadImageBitmap(t,e):o=await xn(t,e):o=await new Promise((n,d)=>{o=new Image,o.crossOrigin=this.config.crossOrigin,o.src=t,o.complete?n(o):(o.onload=()=>{n(o)},o.onerror=d)});const i=new yo({resource:o,alphaMode:"premultiply-alpha-on-upload",resolution:((r=e.data)==null?void 0:r.resolution)||la(t),...e.data});return ca(i,s,t)},unload(t){t.destroy(!0)}},Oo=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],_n=Oo.map(t=>`video/${t.substring(1)}`);function wn(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=kn(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function An(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",o),t.addEventListener("error",i),t.load();function o(){r(),e()}function i(n){r(),s(n)}function r(){t.removeEventListener("canplaythrough",o),t.removeEventListener("error",i)}})}function kn(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const $n={name:"loadVideo",extension:{type:O.LoadParser,name:"loadVideo"},test(t){const e=st(t,_n),s=tt(t,Oo);return e||s},async load(t,e,s){var v,m;const o={...Ks.defaultOptions,resolution:((v=e.data)==null?void 0:v.resolution)||la(t),alphaMode:((m=e.data)==null?void 0:m.alphaMode)||await vr(),...e.data},i=document.createElement("video"),r={preload:o.autoLoad!==!1?"auto":void 0,"webkit-playsinline":o.playsinline!==!1?"":void 0,playsinline:o.playsinline!==!1?"":void 0,muted:o.muted===!0?"":void 0,loop:o.loop===!0?"":void 0,autoplay:o.autoPlay!==!1?"":void 0};Object.keys(r).forEach(p=>{const b=r[p];b!==void 0&&i.setAttribute(p,b)}),o.muted===!0&&(i.muted=!0),wn(i,t,o.crossorigin);const n=document.createElement("source");let d;if(t.startsWith("data:"))d=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const p=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();d=Ks.MIME_TYPES[p]||`video/${p}`}return n.src=t,d&&(n.type=d),new Promise(p=>{const b=async()=>{const g=new Ks({...o,resource:i});i.removeEventListener("canplay",b),e.data.preload&&await An(i),p(ca(g,s,t))};i.addEventListener("canplay",b),i.appendChild(n)})},unload(t){t.destroy(!0)}},Io={extension:{type:O.ResolveParser,name:"resolveTexture"},test:Po.test,parse:t=>{var e;return{resolution:parseFloat(((e=Dt.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},Sn={extension:{type:O.ResolveParser,priority:-2,name:"resolveJson"},test:t=>Dt.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:Io.parse};class En{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Dt,this.loader=new Xr,this.cache=$e,this._backgroundLoader=new Wr(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var r,n;if(this._initialized){Pe("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let d=e.manifest;typeof d=="string"&&(d=await this.load(d)),this.resolver.addManifest(d)}const s=((r=e.texturePreference)==null?void 0:r.resolution)??1,o=typeof s=="number"?[s]:s,i=await this._detectFormats({preferredFormats:(n=e.texturePreference)==null?void 0:n.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:i,resolution:o}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const o=bo(e),i=mt(e).map(d=>{if(typeof d!="string"){const v=this.resolver.getAlias(d);return v.some(m=>!this.resolver.hasKey(m))&&this.add(d),Array.isArray(v)?v[0]:v}return this.resolver.hasKey(d)||this.add({alias:d,src:d}),d}),r=this.resolver.resolve(i),n=await this._mapLoadToResolve(r,s);return o?n[i[0]]:n}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let o=!1;typeof e=="string"&&(o=!0,e=[e]);const i=this.resolver.resolveBundle(e),r={},n=Object.keys(i);let d=0,v=0;const m=()=>{s==null||s(++d/v)},p=n.map(b=>{const g=i[b];return v+=Object.keys(g).length,this._mapLoadToResolve(g,m).then(E=>{r[b]=E})});return await Promise.all(p),o?r[e[0]]:r}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(o=>{this._backgroundLoader.add(Object.values(o))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return $e.get(e);const s={};for(let o=0;o<e.length;o++)s[o]=$e.get(e[o]);return s}async _mapLoadToResolve(e,s){const o=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const i=await this.loader.load(o,s);this._backgroundLoader.active=!0;const r={};return o.forEach(n=>{const d=i[n.src],v=[n.src];n.alias&&v.push(...n.alias),v.forEach(m=>{r[m]=d}),$e.set(v,d)}),r}async unload(e){this._initialized||await this.init();const s=mt(e).map(i=>typeof i!="string"?i.src:i),o=this.resolver.resolve(s);await this._unloadFromResolved(o)}async unloadBundle(e){this._initialized||await this.init(),e=mt(e);const s=this.resolver.resolveBundle(e),o=Object.keys(s).map(i=>this._unloadFromResolved(s[i]));await Promise.all(o)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(o=>{$e.remove(o.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const o of e.detections)e.skipDetections||await o.test()?s=await o.add(s):e.skipDetections||(s=await o.remove(s));return s=s.filter((o,i)=>s.indexOf(o)===i),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(o=>o in e).forEach(o=>{s.config[o]=e[o]})})}}const Ze=new En;Oe.handleByList(O.LoadParser,Ze.loader.parsers).handleByList(O.ResolveParser,Ze.resolver.parsers).handleByList(O.CacheParser,Ze.cache.parsers).handleByList(O.DetectionParser,Ze.detections);Oe.add(Nr,Dr,zr,Yr,Gr,Hr,Vr,Zr,en,cn,un,Po,$n,Mr,Fr,Io,Sn);const po={loader:O.LoadParser,resolver:O.ResolveParser,cache:O.CacheParser,detection:O.DetectionParser};Oe.handle(O.Asset,t=>{const e=t.ref;Object.entries(po).filter(([s])=>!!e[s]).forEach(([s,o])=>Oe.add(Object.assign(e[s],{extension:e[s].extension??o})))},t=>{const e=t.ref;Object.keys(po).filter(s=>!!e[s]).forEach(s=>Oe.remove(e[s]))});var jn=Fi('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-tijp0o"><\/script><!---->',1),Ln=te('<p style="color: red;" class="svelte-tijp0o"><strong class="svelte-tijp0o">Error:</strong> </p>'),Tn=te('<div class="svelte-tijp0o"> </div>'),Rn=te('<details class="svelte-tijp0o"><summary class="svelte-tijp0o"> </summary> <!></details>'),Pn=te(`<div style="
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
  " class="svelte-tijp0o"><h3 class="svelte-tijp0o">🎰 Oma-peli Debug</h3> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Status:</strong> </p> <!> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Base:</strong> </p> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">BG URL:</strong> </p> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Sample:</strong> </p> <!></div>`),On=te('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-tijp0o"> </div>'),In=te('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-tijp0o"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-tijp0o"> </span></div>'),Cn=te(`<div style="
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
      " class="svelte-tijp0o">Jatka pelaamista</button></div>`),Bn=te(`<div class="svelte-tijp0o"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-tijp0o">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-tijp0o">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-tijp0o"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-tijp0o"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-tijp0o">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-tijp0o">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-tijp0o">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-tijp0o">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-tijp0o">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-tijp0o">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-tijp0o"> <span style="color: #ffd700;" class="svelte-tijp0o">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-tijp0o">Sulje</button></div>`),Fn=te('<div class="svelte-tijp0o"><div class="svelte-tijp0o">SPIN SPEED</div> <button class="svelte-tijp0o">🐌 SLOW</button> <button class="svelte-tijp0o">⚡ MEDIUM</button> <button class="svelte-tijp0o">🚀 FAST</button></div>'),Mn=te(`<div style="
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
        " class="svelte-tijp0o">⏹ STOP</button></div>`),Wn=te(`<div style="
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
          " class="svelte-tijp0o">Cancel</button></div>`),Nn=te(`<button style="
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
      " class="svelte-tijp0o">🔄 AUTOPLAY</button> <!>`,1),zn=te(`<!> <!> <!> <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
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
  " class="svelte-tijp0o"><button class="svelte-tijp0o"> </button> <button class="svelte-tijp0o">Clear Win Log</button> <button class="svelte-tijp0o"> </button> <button class="svelte-tijp0o">🎰 Test Free Spins</button></div></div> <div class="debug-panel svelte-tijp0o"><!></div> <button class="debug-panel svelte-tijp0o"> </button></div></div>`,1);function Dn(t,e){go(e,!0);const s="1.3.1",o=13,i=1445,r=1e3,n=1.75,d=-30,v=-10,m=160,p=0,b=750,g=80,E=250,j=0,se=50,H=.5,L=40,z=0,ye=-40,Se=1,me="height",xe=Math.round(100*n),_e=Math.round(xe*(700/760)),Gt=_e+10,Ht=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],pa=typeof window<"u"&&window.location.hostname.includes("github.io"),ee=pa?"/web-sdk/oma-peli/symbols":`${be}/symbols`,V=pa?"/web-sdk/oma-peli/controls":`${be}/controls`,Vt={a:`${ee}/Blue_hotrod.jpg`,b:`${ee}/Blue_jacket.jpg`,c:`${ee}/Blue_rollers.jpg`,d:`${ee}/Blue_speakers.jpg`,e:`${ee}/Premium_blonde.jpg`,f:`${ee}/Premium_brunette.jpg`,g:`${ee}/Premium_rocker.jpg`,h:`${ee}/New_Wild.jpg`,i:`${ee}/Red_burger.jpg`,j:`${ee}/Red_fries.jpg`,k:`${ee}/Red_milkshake.jpg`,l:`${ee}/Scatter.jpg`,emptyslot:`${ee}/Emptyslot.jpg`},Yt=`${ee}/bg_base.jpg`,ua=`${ee}/ReelFrames.png`,fa=`${ee}/RockABillyReels_logo.png`,Co={spin:`${be}/sounds/spin.mp3`,stop:`${be}/sounds/stop.mp3`,win:`${be}/sounds/win.mp3`};let we=R(!0),Xt={},D=null,ne=null,Kt=null,Qt=null,pe=R(!0),Bo=R(!1),bt=R(!1),Zt=R(945),qt=null;const Fo={fast:3,medium:7,slow:18};let Y=R("medium"),We=R(!1),ha=R(Math.floor(Math.random()*20)+1);const yt={background:()=>`${be}/music/rockabilly reels loop ${a(ha)}.mp3`,freeSpins:`${be}/music/rockabilly-loop_long.mp3`,drumHit:`${be}/music/drum-hit.mp3`,winTheme:`${be}/music/win-stinger.mp3`};function ga(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(ga,500);return}const l=window.Howl;try{D=new l({src:[yt.background()],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+a(ha)+")"),x(Bo,!0)},onloaderror:(u,$)=>{console.warn("⚠️ Background music not found:",$)}}),ne=new l({src:[yt.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(u,$)=>console.warn("⚠️ Free spins music not found:",$)}),Kt=new l({src:[yt.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Qt=new l({src:[yt.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(u){console.error("Failed to initialize music system:",u)}}function va(){const l=a(G)?ne:D;l&&a(pe)&&!l.playing()&&(l.play(),console.log("🎵 "+(a(G)?"Free spins":"Background")+" music started"))}function Mo(){D&&D.playing()&&(D.fade(D.volume(),0,500),setTimeout(()=>D.stop(),500)),ne&&ne.playing()&&(ne.fade(ne.volume(),0,500),setTimeout(()=>ne.stop(),500))}function Jt(){D&&D.playing()&&(D.fade(D.volume(),0,500),setTimeout(()=>D.stop(),500)),ne&&ne.playing()&&(ne.fade(ne.volume(),0,500),setTimeout(()=>ne.stop(),500)),setTimeout(()=>{a(pe)&&va()},600)}function Wo(){if(D&&D.playing()){const l=D.volume();D.fade(l,0,1e3),setTimeout(()=>{D.stop(),D.volume(.3)},1e3)}}let es=R(!1);function No(){x(es,!1),setTimeout(()=>{x(es,!0)},10)}let Ne=null;function zo(){x(pe,!a(pe)),a(pe)?va():Mo()}function Do(){Kt&&a(pe)&&a(we)&&Kt.play()}function Uo(){Qt&&a(pe)&&a(we)&&Qt.play()}let xt=null,ze=null,at=null,ot=null,it=R("Initializing..."),De=R(""),ue=[],Ee=R(1e3),J=R(10),ma=R(0);const ba=1,ts=100;let le=R(!1),Ue=R(0),Ie=R(!1),_t=R(!1),Go=R(0),Ce=!1,Ae=null,ss=!1,Ge=R(0),He=R(0),rt=R(0),as=R(0),os=Ys(()=>a(He)>0?(a(rt)/a(He)*100).toFixed(2):"0.00"),is=Ys(()=>a(Ge)>0?(a(as)/a(Ge)*100).toFixed(2):"0.00"),G=R(!1),je=R(0),Be=R(0),wt=R(0),rs=R(0),At=R(0),ns=R(0),Ho=Ys(()=>a(At)>0?(a(ns)/a(At)*100).toFixed(2):"0.00"),ce=R(ie([]));function Vo(l,u,$){const h=new Date().toLocaleString("fi-FI");let _=`
${"=".repeat(60)}
`;_+=`ROUND #${l} - ${h}
`,_+=`Mode: ${a(G)?"FREE SPINS":"BASE GAME"}
`,_+=`${"=".repeat(60)}
`,u.forEach((k,T)=>{_+=`
Win ${T+1}:
`,_+=`  Symbol: ${k.symbol} (${wa[k.symbol]})
`,_+=`  Count: ${k.count} symbols
`,_+=`  Multiplier: ${k.multiplier}x
`,_+=`  Payout: ${k.payout.toFixed(2)}
`,_+=`  Positions: [${k.positions.join(", ")}]
`}),_+=`
${"─".repeat(60)}
`,_+=`TOTAL WIN: ${$.toFixed(2)}
`,_+=`${"=".repeat(60)}
`,a(ce).push(_)}function Yo(){const l=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${a(ce).join(`
`)}`,u=new Blob([l],{type:"text/plain"}),$=URL.createObjectURL(u),h=document.createElement("a");h.href=$,h.download=`win-log-${Date.now()}.txt`,h.click(),URL.revokeObjectURL($)}function Xo(){x(ce,ie([]))}function Ko(){a(G)||(x(G,!0),x(je,10),x(Be,0),ke(wt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),Jt())}const Qo={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},Zo={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function ya(l){if(l===6)return Math.random()<.55?"h":"emptyslot";const u=a(G)?Zo:Qo,$=Math.random();let h=0;const _=Ht.filter(T=>T!=="h"),k=_.reduce((T,B)=>T+u[B],0);for(const T of _)if(h+=u[T]/k,$<h)return T;return"f"}function xa(){const l=[];for(let u=0;u<o;u++){const $=ya(u);l.push($),ke(At),$==="emptyslot"&&ke(ns)}return l}function _a(l){return l<3?{col:0,row:l}:l<6?{col:1,row:l-3}:l===6?{col:2,row:0}:l<10?{col:3,row:l-7}:{col:4,row:l-10}}function nt(l,u){return l===0?u:l===1?3+u:l===2?6:l===3?7+u:l===4?10+u:-1}function qo(){if(a(G)){const l=Math.random();return l<.7?3:l<.92?5:10}else{const l=Math.random();return l<.7?1:l<.92?2:3}}const Jo={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function ei(){var Z;const l=[],u=[];for(let S=0;S<o;S++)lt[S]==="l"&&u.push(S);if(u.length>=5){const S=u.length;x(je,a(je)+S),a(G)?console.log(`🎰 FREE SPINS RETRIGGERED! +${S} FREE SPINS! Total: ${a(je)}`):(x(G,!0),x(Be,0),ke(wt),console.log(`🎰 FREE SPINS TRIGGERED! ${u.length} scatters = ${S} FREE SPINS!`),Jt()),l.push({symbol:"l",count:u.length,payout:0,positions:u,multiplier:1})}const $=[];for(let S=0;S<3;S++)for(let P=0;P<3;P++)for(let C=0;C<1;C++)for(let F=0;F<3;F++)for(let W=0;W<3;W++){const M=[nt(0,S),nt(1,P),nt(2,C),nt(3,F),nt(4,W)];$.push(M)}console.log(`Generated ${$.length} possible paths (should be 81)`);const h=[];for(const S of $){const P=S.map(M=>lt[M]);if(P[0]==="emptyslot"||P[0]==="l")continue;let C=null;for(let M=0;M<P.length;M++)if(P[M]!=="h"&&P[M]!=="emptyslot"&&P[M]!=="l"){C=P[M];break}if(!C)continue;let F=0;const W=new Set;for(let M=0;M<S.length;M++){const Te=S[M],{col:Qe}=_a(Te),oe=P[M];(oe===C||oe==="h")&&W.add(Qe)}for(let M=0;M<5&&W.has(M);M++)F++;if(F>=3){const Te=S[0]%3;h.push({symbol:C,length:F,path:S.slice(0,F),startRow:Te})}}const _=[],k=new Map;for(const S of h){const P=`${S.symbol}-${S.path.join(",")}`;k.has(P)||k.set(P,[]),k.get(P).push(S)}for(const[S,P]of k.entries()){const C=Math.max(...P.map(W=>W.length)),F=P.find(W=>W.length===C);F&&_.push(F)}const T=[],B=new Map;for(const S of _)B.has(S.symbol)||B.set(S.symbol,[]),B.get(S.symbol).push(S);const X=[];for(const[S,P]of B.entries()){const C=Math.max(...P.map(W=>W.length)),F=P.filter(W=>W.length===C);X.push(...F)}const K=new Map;for(const S of X){const P=`${S.symbol}-${S.length}`;K.has(P)||K.set(P,[]),K.get(P).push(S)}const Q=X.length>0?qo():1;for(const[S,P]of K.entries()){const C=P[0],F=(Z=Jo[C.symbol])==null?void 0:Z[C.length];if(F!==void 0&&F>0){const W=new Map;for(const oe of P)for(let ae=0;ae<oe.length;ae++)W.has(ae)||W.set(ae,new Set),W.get(ae).add(oe.path[ae]);let M=1;for(let oe=0;oe<C.length;oe++){const ae=W.get(oe);M*=ae?ae.size:1}const Te=F*a(J)*M*Q;console.log(`  ${C.length}x${C.symbol}: ${M} ways × ${F}x × ${a(J)} bet × ${Q} mult = ${Te}`);const Qe=new Set;for(const oe of P)oe.path.forEach(ae=>Qe.add(ae));T.push({symbol:C.symbol,count:C.length,payout:Te,positions:Array.from(Qe),multiplier:Q})}}return l.push(...T),l}let fe=R(0),Ve=R(ie([])),Le=R(!1),Ye=R(!1);const wa={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function ls(l){if(!a(we)||!Xt[l])return;const u=Xt[l];u.currentTime=0,u.play().catch($=>{console.warn("Äänen toisto epäonnistui:",l,$)})}function ti(l){ct.forEach(u=>U.stage.removeChild(u)),ct=[],l.forEach(u=>{u.positions.forEach($=>{const h=Xe[$],_=new Ja().rect(0,0,xe,_e).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});_.x=h.container.x,_.y=h.container.y,U.stage.addChild(_),ct.push(_);let k=0,T=1;const B=.05;U.ticker.add(()=>{k+=T*B,k>=.4&&(T=-1),k<=0&&(T=1),_.alpha=.5+k})})})}function cs(){ct.forEach(l=>U.stage.removeChild(l)),ct=[]}let lt=xa(),ds,U,Xe=[],ct=[];class si{constructor(u,$){he(this,"index");he(this,"container");he(this,"offset",0);he(this,"speed",0);he(this,"targetSpeed",30);he(this,"state","idle");he(this,"stopDelay",0);he(this,"bounceOffset",0);he(this,"bounceSpeed",0);he(this,"bounceFrames",0);this.index=u,this.container=$}start(u){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=u}startSynchronized(u){const $=Fo[a(Y)],h=60+u*$;this.start(h)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const u=a(Y)==="slow"?.88:a(Y)==="medium"?.92:.95;this.speed*=u,this.speed<2.5&&(this.state="bouncing",this.speed=0,this.offset=0,this.bounceOffset=0,this.bounceSpeed=8,ls("stop"),Do())}this.state==="bouncing"&&(this.bounceSpeed*=.85,this.bounceOffset+=this.bounceSpeed,Math.abs(this.bounceSpeed)<.3&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=Gt&&(this.offset=0,lt[this.index]=ya(this.index)))}}draw(){const u=this.container;u.removeChildren();const $=lt[this.index];if(!$||!xt||!xt[$])return;const h=xt[$];if(!h)return;const _=this.offset+this.bounceOffset,k=new Wt(h);k.width=xe,k.height=_e,k.x=0,k.y=_,u.addChild(k)}}let c=R(1);vo(async()=>{U=new jo,await U.init({width:i,height:r,background:"#001a33"}),ds.appendChild(U.canvas);const l=()=>{const h=window.innerWidth,_=window.innerHeight,k=h/i,T=_/r,B=Math.min(k,T,1);x(c,ie(B)),U.stage.scale.set(B),U.renderer.resize(i,r)};l(),window.addEventListener("resize",l);const u={};try{x(it,"Loading background and UI images..."),ue.push(`Loading background: ${Yt}`),ue.push(`Loading reel frames: ${ua}`),ue.push(`Loading logo: ${fa}`),await Ze.load([{alias:"background",src:Yt},{alias:"reelframes",src:ua},{alias:"logo",src:fa}]),ze=Fe.from("background"),at=Fe.from("reelframes"),ot=Fe.from("logo"),console.log("✅ Background texture created:",ze.width,"x",ze.height),console.log("✅ Reel frames texture created:",at.width,"x",at.height),console.log("✅ Logo texture created:",ot.width,"x",ot.height),ue.push("✅ All UI images loaded"),x(it,"Loading symbols...");const h=[];for(const _ of Ht)h.push({alias:_,src:Vt[_]});await Ze.load(h);for(const _ of Ht){const k=Vt[_];ue.push(`Loading symbol ${_}: ${k}`);try{const T=Fe.from(_);u[_]=T,console.log(`✅ Symbol ${_} loaded:`,T.width,"x",T.height),ue.push(`✅ Symbol ${_} loaded`)}catch(T){const B=`❌ Failed to load symbol ${_} from ${k}: ${T}`;throw ue.push(B),console.error(B),new Error(B)}}xt=u,x(it,"Assets loaded successfully!")}catch(h){x(De,`Asset loading failed: ${h}`),ue.push(a(De)),console.error(a(De));return}console.log("Ladataan ääniefektit...");for(const[h,_]of Object.entries(Co)){const k=new Audio;k.src=_,k.preload="auto",k.volume=.7,k.load(),k.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${_} (käytetään hiljaista placeholderia)`)}),Xt[h]=k}if(console.log("Taustakuva ladattu, tekstuuri:",ze),ze){const h=new Wt(ze);U.renderer.width/U.renderer.height;const _=h.texture.width/h.texture.height;let k;k=U.renderer.height/h.texture.height,k*=Se,h.scale.set(k),h.x=(U.renderer.width-h.width)/2,h.y=(U.renderer.height-h.height)/2+ye,U.stage.addChild(h),console.log("Taustakuva lisätty:",me,"mode, size:",h.width.toFixed(0),"x",h.height.toFixed(0),"image aspect:",_.toFixed(2),"scale:",k.toFixed(2),"pos:",h.x.toFixed(0),h.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(h=>({x:h.x+d,y:h.y+v})),Xe=[];for(let h=0;h<o;h++){const _=_a(h),k=_.col,T=_.row,B=300+k*(xe+20),X=250+T*(_e+15),K=h===6?B+p:B,Q=h===6?X+m:X,Z=new ra;Z.x=K+d,Z.y=Q+v;const S=new Ja().rect(0,0,xe,_e).fill(16777215);S.x=Z.x,S.y=Z.y,Z.mask=S,U.stage.addChild(S),U.stage.addChild(Z),Xe.push(new si(h,Z))}if(at){const h=new Wt(at);h.scale.set(1),h.x=250,h.y=200,U.stage.addChild(h),qt=h,x(Zt,ie(h.width)),console.log("Reel frames lisätty:",h.width.toFixed(0),"x",h.height.toFixed(0)),console.log("Control panel leveys päivitetty:",a(Zt).toFixed(0))}if(ot){const h=new Wt(ot);h.scale.set(H),h.x=(U.renderer.width-h.width)/2+L,h.y=z,U.stage.addChild(h),console.log("Logo lisätty päällimmäiseen layeriin:",h.width.toFixed(0),"x",h.height.toFixed(0))}ga(),U.ticker.add(ai)});function ai(){for(const l of Xe)l.update(),l.draw();if(!a(Le)&&!ss&&Xe.every(l=>l.state==="stopped")){ss=!0,Wo();const l=ei();console.log(`Checking wins, found ${l.length} wins`),l.length>0?(x(Ve,ie(l)),x(fe,ie(l.reduce((u,$)=>u+$.payout,0))),Vo(a(Ge),l,a(fe)),oi(a(fe)),x(Le,!0),x(Go,ie(Date.now())),console.log(`🎉 VOITTO! ${a(fe)} pistettä! Uusi saldo: ${a(Ee)}`),console.log(`isShowingWin set to: ${a(Le)}, totalWin: ${a(fe)}`),l.forEach(u=>{const $=u.multiplier?` (${u.multiplier}x multiplier)`:"";console.log(`${u.count}x ${u.symbol} = ${u.payout} pistettä${$}`)}),ti(l),ls("win"),a(le)&&!Ce&&(Ce=!0,Ae=window.setTimeout(()=>{a(Le)&&a(le)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),x(Le,!1),cs()),Ae=window.setTimeout(()=>{Ce=!1,us()},200)},1500))):(console.log("No wins found this spin"),a(le)&&!Ce&&(Ce=!0,Ae=window.setTimeout(()=>{Ce=!1,us()},1e3))),a(G)&&a(je)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${a(Be)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${a(Be).toFixed(2)}`),x(G,!1),x(Be,0),Jt()},2e3))}}function Aa(){if(!a(G)&&D&&a(pe)&&!D.playing()&&(D.play(),console.log("🎵 Background music started on first spin")),No(),a(G)&&a(je)>0)ke(je,-1),ke(rs),console.log(`🎰 FREE SPIN! Remaining: ${a(je)}`);else if(!a(G)){if(a(Ee)<a(J)){alert(`Not enough credits! Balance: ${a(Ee)}, Bet: ${a(J)}`),ps();return}x(Ee,a(Ee)-a(J)),ke(Ge),x(He,a(He)+a(J))}Ae!==null&&(clearTimeout(Ae),Ae=null),x(Ve,ie([])),x(fe,0),x(Le,!1),ss=!1,cs(),lt=xa(),Xe.forEach((l,u)=>{l.startSynchronized(u)}),ls("spin")}function oi(l){if(x(Ee,a(Ee)+l),x(rt,a(rt)+l),x(ma,ie(l)),a(G)&&x(Be,a(Be)+l),l>0){ke(as);const u=l/a(J);u>=10&&Uo(),Ne&&(u>=50?Ne.show():u>=20?setTimeout(()=>Ne.show(),200):u>=10&&setTimeout(()=>Ne.show(),400))}}function ii(){a(J)<ts&&x(J,ie(Math.min(a(J)+1,ts)))}function ri(){a(J)>ba&&x(J,ie(Math.max(a(J)-1,ba)))}function ni(){x(J,ts)}function dt(l){x(le,!0),x(Ue,ie(l)),x(Ie,!1),us()}function ps(){x(le,!1),x(Ue,0),Ce=!1,Ae!==null&&(clearTimeout(Ae),Ae=null)}function us(){if(!a(le)||a(Ue)<=0){ps();return}console.log(`Autoplay: Starting spin ${a(Ue)} rounds left`),Aa(),ke(Ue,-1)}function li(){confirm("Reset all statistics?")&&(x(Ge,0),x(He,0),x(rt,0),x(as,0),x(wt,0),x(rs,0),x(At,0),x(ns,0))}var ka=zn();pr(l=>{var u=jn();f(vt(u)),q(l,u)});var $a=vt(ka);{var ci=l=>{var u=Pn(),$=f(w(u),2),h=f(w($));A($);var _=f($,2);{var k=C=>{var F=Ln(),W=f(w(F));A(F),ge(()=>N(W,` ${a(De)??""}`)),q(C,F)};de(_,C=>{a(De)&&C(k)})}var T=f(_,2),B=f(w(T));B.nodeValue=` ${be??""}`,A(T);var X=f(T,2),K=f(w(X));K.nodeValue=` ${Yt??""}`,A(X);var Q=f(X,2),Z=f(w(Q));A(Q);var S=f(Q,2);{var P=C=>{var F=Rn(),W=w(F),M=w(W);A(W);var Te=f(W,2);to(Te,17,()=>ue,eo,(Qe,oe)=>{var ae=Tn(),Pi=w(ae,!0);A(ae),ge(()=>N(Pi,a(oe))),q(Qe,ae)}),A(F),ge(()=>N(M,`Log (${ue.length??""})`)),q(C,F)};de(S,C=>{ue.length>0&&C(P)})}A(u),ge(()=>{N(h,` ${a(it)??""}`),N(Z,` ${Vt.a??""}`)}),q(l,u)};de($a,l=>{(a(it)!=="Assets loaded successfully!"||a(De))&&l(ci)})}var Sa=f($a,2);{var di=l=>{var u=Cn(),$=f(w(u),2),h=w($);A($);var _=f($,2);to(_,17,()=>a(Ve),eo,(X,K)=>{var Q=On(),Z=w(Q);A(Q),ge(S=>N(Z,`${a(K).count??""} × ${wa[a(K).symbol]??""} = ${S??""} pistettä`),[()=>a(K).payout.toFixed(2)]),q(X,Q)});var k=f(_,2);{var T=X=>{var K=In(),Q=w(K),Z=w(Q);A(Q),A(K),ge(()=>N(Z,`✨ ${a(Ve)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),q(X,K)};de(k,X=>{a(Ve).length>0&&a(Ve)[0].multiplier>1&&X(T)})}var B=f(k,2);A(u),ge(()=>N(h,`${a(fe)??""} pistettä`)),I("click",B,()=>{x(Le,!1),cs(),console.log("Win popup closed, ready for next spin")}),q(l,u)};de(Sa,l=>{a(fe)>0&&a(Le)&&l(di)})}var Ea=f(Sa,2);{var pi=l=>{var u=Bn(),$=f(w(u),8);A(u),ge(h=>y(u,"style",`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.95);
    color: white;
    padding: ${30*a(c)}px;
    border-radius: ${15*a(c)}px;
    font-family: Arial, sans-serif;
    z-index: 3000;
    border: ${3*a(c)}px solid #ffd700;
    max-width: ${600*a(c)}px;
    max-height: ${h??""}px;
    overflow-y: auto;
    font-size: ${a(c)??""}em;
  `),[()=>Math.min(r*a(c)*.8,80*window.innerHeight/100)]),I("click",$,()=>{x(Ye,!1)}),q(l,u)};de(Ea,l=>{a(Ye)&&l(pi)})}var ja=f(Ea,2),fs=w(ja),pt=w(fs);y(pt,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${i}px;
        height: ${r}px;
      `);var hs=w(pt),kt=f(hs,2);kt.textContent=`🛠️ DEBUG v${s}`;var gs=f(kt,2),vs=w(gs);y(vs,"src",`${V??""}/Control_leftend.png`);var $t=f(vs,2),St=w($t),La=w(St),ms=f(La,2),bs=w(ms),Et=f(bs,2),ui=w(Et,!0);A(Et);var ys=f(Et,2),Ta=f(ys,2);A(ms),A(St);var xs=f(St,2);y(xs,"src",`${V??""}/Control_divider.png`);var jt=f(xs,2),Ra=w(jt),_s=f(Ra,2),fi=w(_s,!0);A(_s),A(jt);var ws=f(jt,2);y(ws,"src",`${V??""}/Control_divider.png`);var As=f(ws,2),ks=w(As),$s=w(ks);A(ks),A(As);var Ss=f(As,2);y(Ss,"src",`${V??""}/Control_divider.png`);var Lt=f(Ss,2),Es=w(Lt),Pa=f(Es,2);A(Lt);var js=f(Lt,2);y(js,"src",`${V??""}/Control_divider.png`);var Tt=f(js,2),Rt=w(Tt),Pt=f(Rt,2),hi=w(Pt,!0);A(Pt);var gi=f(Pt,2);{var vi=l=>{var u=Fn(),$=w(u),h=f($,2),_=f(h,2),k=f(_,2);A(u),ge(()=>{y(u,"style",`
          position: absolute;
          bottom: ${80*a(c)}px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
          border: ${2*a(c)}px solid #ffd700;
          border-radius: ${10*a(c)}px;
          padding: ${10*a(c)}px;
          display: flex;
          flex-direction: column;
          gap: ${8*a(c)}px;
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
        `),y($,"style",`
            color: #ffd700;
            font-size: ${14*a(c)}px;
            font-weight: bold;
            text-align: center;
            border-bottom: ${1*a(c)}px solid #444;
            padding-bottom: ${5*a(c)}px;
          `),y(h,"style",`
              background: ${(a(Y)==="slow"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: ${2*a(c)}px solid ${(a(Y)==="slow"?"#ffd700":"#666")??""};
              color: ${(a(Y)==="slow"?"#ffd700":"#ffffff")??""};
              padding: ${8*a(c)}px ${20*a(c)}px;
              border-radius: ${5*a(c)}px;
              cursor: pointer;
              font-weight: bold;
              font-size: ${12*a(c)}px;
              transition: all 0.2s;
            `),y(_,"style",`
              background: ${(a(Y)==="medium"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: ${2*a(c)}px solid ${(a(Y)==="medium"?"#ffd700":"#666")??""};
              color: ${(a(Y)==="medium"?"#ffd700":"#ffffff")??""};
              padding: ${8*a(c)}px ${20*a(c)}px;
              border-radius: ${5*a(c)}px;
              cursor: pointer;
              font-weight: bold;
              font-size: ${12*a(c)}px;
              transition: all 0.2s;
            `),y(k,"style",`
              background: ${(a(Y)==="fast"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: ${2*a(c)}px solid ${(a(Y)==="fast"?"#ffd700":"#666")??""};
              color: ${(a(Y)==="fast"?"#ffd700":"#ffffff")??""};
              padding: ${8*a(c)}px ${20*a(c)}px;
              border-radius: ${5*a(c)}px;
              cursor: pointer;
              font-weight: bold;
              font-size: ${12*a(c)}px;
              transition: all 0.2s;
            `)}),I("click",h,()=>{x(Y,"slow"),x(We,!1)}),I("click",_,()=>{x(Y,"medium"),x(We,!1)}),I("click",k,()=>{x(Y,"fast"),x(We,!1)}),q(l,u)};de(gi,l=>{a(We)&&l(vi)})}A(Tt);var Ls=f(Tt,2);y(Ls,"src",`${V??""}/Control_divider.png`);var Ot=f(Ls,2),Ts=w(Ot),Oa=f(Ts,2);A(Ot);var Rs=f(Ot,2);y(Rs,"src",`${V??""}/Control_divider.png`);var It=f(Rs,2),Ia=w(It),Ps=f(Ia,2),mi=w(Ps,!0);A(Ps),A(It);var Os=f(It,2);y(Os,"src",`${V??""}/Control_divider.png`);var Ca=f(Os,2);A($t);var Ba=f($t,2);y(Ba,"src",`${V??""}/Control_rightend.png`),A(gs),A(pt),Za(pt,l=>ds=l,()=>ds);var Ct=f(pt,2);Za(Ct,l=>Ne=l,()=>Ne);var Bt=f(Ct,2),Fa=f(w(Bt),2);Fa.textContent=`v${s}`;var Is=f(Fa,2),Ma=f(w(Is),2),bi=w(Ma,!0);A(Ma),A(Is);var Cs=f(Is,2),Wa=f(w(Cs),2),yi=w(Wa,!0);A(Wa),A(Cs);var Bs=f(Cs,2),Na=f(w(Bs),2),xi=w(Na,!0);A(Na),A(Bs);var Fs=f(Bs,2),Ms=f(w(Fs),2),_i=w(Ms);A(Ms),A(Fs);var Ws=f(Fs,2),Ns=f(w(Ws),2),wi=w(Ns);A(Ns),A(Ws);var zs=f(Ws,2),za=f(w(zs),2),Ai=w(za,!0);A(za),A(zs);var Ds=f(zs,2),Da=f(w(Ds),2),ki=w(Da,!0);A(Da),A(Ds);var Us=f(Ds,2),Ua=f(w(Us),2),$i=w(Ua);A(Ua),A(Us);var Ga=f(Us,2),Ha=f(Ga,2),Ke=w(Ha),Si=w(Ke);A(Ke);var Ft=f(Ke,2),ut=f(Ft,2),Ei=w(ut);A(ut);var Gs=f(ut,2);A(Ha),A(Bt);var Mt=f(Bt,2),ji=w(Mt);{var Li=l=>{var u=Mn(),$=f(w(u),2),h=w($);A($);var _=f($,2);A(u),ge(()=>N(h,`${a(Ue)??""} left`)),I("click",_,ps),q(l,u)},Ti=l=>{var u=Nn(),$=vt(u),h=f($,2);{var _=k=>{var T=Wn(),B=f(w(T),2),X=f(B,2),K=f(X,2),Q=f(K,2),Z=f(Q,2),S=f(Z,2);A(T),I("click",B,()=>dt(10)),I("click",X,()=>dt(100)),I("click",K,()=>dt(1e3)),I("click",Q,()=>dt(1e4)),I("click",Z,()=>dt(1e5)),I("click",S,()=>{x(Ie,!1)}),q(k,T)};de(h,k=>{a(Ie)&&k(_)})}I("click",$,()=>{x(Ie,!a(Ie))}),q(l,u)};de(ji,l=>{a(le)?l(Li):l(Ti,!1)})}A(Mt);var ft=f(Mt,2),Ri=w(ft,!0);A(ft),A(fs),A(ja),ge((l,u,$,h,_,k,T,B)=>{y(fs,"style",`
    position: relative;
    width: ${i*a(c)}px;
    height: ${r*a(c)}px;
  `),y(hs,"style",`
          position: absolute;
          top: ${130*a(c)}px;
          right: ${20*a(c)}px;
          padding: ${10*a(c)}px ${15*a(c)}px;
          background-color: rgba(255, 215, 0, 0.3);
          border: ${2*a(c)}px solid rgba(255, 215, 0, 0.7);
          border-radius: ${8*a(c)}px;
          cursor: pointer;
          font-weight: bold;
          font-size: ${16*a(c)}px;
          color: white;
          text-shadow: 0 0 ${5*a(c)}px rgba(0,0,0,0.8);
          z-index: 1000;
          min-width: ${180*a(c)}px;
        `),y(kt,"style",`
          position: absolute;
          top: ${190*a(c)}px;
          right: ${20*a(c)}px;
          padding: ${10*a(c)}px ${15*a(c)}px;
          background-color: rgba(0, 255, 0, 0.3);
          border: ${2*a(c)}px solid rgba(0, 255, 0, 0.7);
          border-radius: ${8*a(c)}px;
          cursor: pointer;
          font-weight: bold;
          font-size: ${16*a(c)}px;
          color: white;
          text-shadow: 0 0 ${5*a(c)}px rgba(0,0,0,0.8);
          z-index: 1000;
          min-width: ${180*a(c)}px;
        `),y(gs,"style",`
        position: absolute;
        left: ${((qt?qt.x:E)+j)*a(c)}px;
        top: ${(b+se)*a(c)}px;
        width: ${a(Zt)*a(c)}px;
        height: ${g*a(c)}px;
        display: flex;
        align-items: center;
        z-index: 1000;
      `),y(vs,"style",`height: ${g*a(c)}px; flex-shrink: 0;`),y($t,"style",`
    flex-grow: 1;
    height: ${g*a(c)}px;
    background-image: url('${V??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 ${20*a(c)}px;
  `),y(St,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*a(c)}px;`),y(La,"style",`color: #00ff00; font-size: ${12*a(c)}px; font-weight: bold;`),y(ms,"style",`display: flex; gap: ${5*a(c)}px; align-items: center;`),y(bs,"style",`
            width: ${40*a(c)}px;
            height: ${40*a(c)}px;
            background-image: url('${V??""}/Control_lowerbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(Et,"style",`
          color: #fff;
          font-size: ${18*a(c)}px;
          font-weight: bold;
          min-width: ${80*a(c)}px;
          text-align: center;
          font-family: 'Courier New', monospace;
        `),N(ui,l),y(ys,"style",`
            width: ${40*a(c)}px;
            height: ${40*a(c)}px;
            background-image: url('${V??""}/Control_upperbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(Ta,"style",`
            padding: ${6*a(c)}px ${10*a(c)}px;
            background: #ffd700;
            color: #000;
            border: ${2*a(c)}px solid #000;
            border-radius: ${5*a(c)}px;
            cursor: pointer;
            font-size: ${12*a(c)}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
            transition: background 0.2s;
          `),y(xs,"style",`height: ${g*.8*a(c)}px; flex-shrink: 0;`),y(jt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*a(c)}px;`),y(Ra,"style",`color: #00ff00; font-size: ${12*a(c)}px; font-weight: bold;`),y(_s,"style",`
        color: #fff;
        font-size: ${20*a(c)}px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      `),N(fi,u),y(ws,"style",`height: ${g*.8*a(c)}px; flex-shrink: 0;`),Ar(ks,1,`play-button-wrapper ${(a(es)?"glare-animate":"")??""}`,"svelte-tijp0o"),$s.disabled=a(le),y($s,"style",`
            width: ${130*a(c)}px;
            height: ${130*a(c)}px;
            background-image: url('${V??""}/Control_playbutton.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border: none;
            cursor: ${(a(le)?"not-allowed":"pointer")??""};
            background-color: transparent;
            opacity: ${(a(le)?.5:1)??""};
            position: relative;
            z-index: 10;
            border-radius: 50%;
          `),y(Ss,"style",`height: ${g*.8*a(c)}px; flex-shrink: 0;`),y(Lt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*a(c)}px;`),y(Es,"style",`
          width: ${50*a(c)}px;
          height: ${50*a(c)}px;
          background-image: url('${V??""}/${(a(le)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),y(Pa,"src",`${V??""}/${(a(le)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),y(Pa,"style",`width: ${50*a(c)}px; height: auto;`),y(js,"style",`height: ${g*.8*a(c)}px; flex-shrink: 0;`),y(Tt,"style",`position: relative; display: flex; flex-direction: column; align-items: center; gap: ${5*a(c)}px;`),y(Rt,"style",`
          width: ${50*a(c)}px;
          height: ${50*a(c)}px;
          background-image: url('${V??""}/Control_fastplay_select.png');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),y(Rt,"title",`Spin Speed: ${(a(Y)==="slow"?"Slow":a(Y)==="medium"?"Medium":"Fast")??""}`),y(Pt,"style",`
        color: #ffffff;
        font-size: ${10*a(c)}px;
        font-weight: bold;
        text-transform: uppercase;
      `),N(hi,a(Y)==="slow"?"Slow":a(Y)==="medium"?"Med":"Fast"),y(Ls,"style",`height: ${g*.8*a(c)}px; flex-shrink: 0;`),y(Ot,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*a(c)}px;`),y(Ts,"style",`
          width: ${50*a(c)}px;
          height: ${50*a(c)}px;
          background-image: url('${V??""}/${(a(bt)?"Control_fastplay_select.png":"Control_fastplay_deselect.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),y(Oa,"src",`${V??""}/${(a(bt)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),y(Oa,"style",`width: ${50*a(c)}px; height: auto;`),y(Rs,"style",`height: ${g*.8*a(c)}px; flex-shrink: 0;`),y(It,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*a(c)}px;`),y(Ia,"style",`color: #00ff00; font-size: ${12*a(c)}px; font-weight: bold;`),y(Ps,"style",`
        color: #ffd700;
        font-size: ${20*a(c)}px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      `),N(mi,$),y(Os,"style",`height: ${g*.8*a(c)}px; flex-shrink: 0;`),y(Ca,"style",`
        width: ${50*a(c)}px;
        height: ${50*a(c)}px;
        background-image: url('${V??""}/Control_menubar.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),y(Ba,"style",`height: ${g*a(c)}px; flex-shrink: 0;`),y(Ct,"winlevel",a(fe)/a(J)>=50?"jackpot":a(fe)/a(J)>=20?"medium":"small"),y(Ct,"winamount",a(fe)),y(Bt,"style",`
  position: absolute;
  top: 20px;
  left: 20px;
  display: ${(a(_t)?"block":"none")??""};
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
`),N(bi,h),N(yi,_),N(xi,k),y(Ms,"style",`color: ${T??""};`),N(_i,`${a(os)??""}%`),y(Ns,"style",`color: ${B??""};`),N(wi,`${a(is)??""}%`),N(Ai,a(wt)),N(ki,a(rs)),N($i,`${a(Ho)??""}%`),Ke.disabled=a(ce).length===0,y(Ke,"style",`
        width: 100%;
        padding: 5px;
        background: ${(a(ce).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(a(ce).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(a(ce).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(a(ce).length>0?"1":"0.5")??""};
      `),N(Si,`Download Win Log (${a(ce).length??""})`),Ft.disabled=a(ce).length===0,y(Ft,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(a(ce).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(a(ce).length>0?"1":"0.5")??""};
      `),y(ut,"style",`
        width: 100%;
        padding: 5px;
        background: ${(a(pe)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(a(pe)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),N(Ei,`🎵 Music: ${(a(pe)?"ON":"OFF")??""}`),Gs.disabled=a(G),y(Gs,"style",`
        width: 100%;
        padding: 5px;
        background: ${(a(G)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(a(G)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(a(G)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(a(G)?"0.5":"1")??""};
      `),y(Mt,"style",`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1500;
  display: ${(a(_t)?"block":"none")??""};
`),y(ft,"style",`
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
  `),y(ft,"title",a(we)?"Mykistä äänet":"Laita äänet päälle"),N(Ri,a(we)?"🔊":"🔇")},[()=>a(J).toFixed(2),()=>a(Ee).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>a(ma).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>a(Ge).toLocaleString(),()=>a(He).toLocaleString(),()=>a(rt).toLocaleString(),()=>parseFloat(a(os))>=95?"#00ff00":parseFloat(a(os))>=85?"#ffff00":"#ff6666",()=>parseFloat(a(is))>=30?"#00ff00":parseFloat(a(is))>=20?"#ffff00":"#ff6666"]),I("click",hs,()=>{x(Ye,!a(Ye))}),I("click",kt,()=>{x(_t,!a(_t))}),I("click",bs,ri),I("click",ys,ii),I("click",Ta,ni),I("click",$s,Aa),I("click",Es,()=>{x(Ie,!a(Ie))}),I("click",Rt,()=>{x(We,!a(We))}),I("click",Ts,()=>{x(bt,!a(bt))}),I("click",Ca,()=>{x(Ye,!a(Ye))}),I("click",Ga,li),I("click",Ke,Yo),I("click",Ft,Xo),I("click",ut,zo),I("click",Gs,Ko),I("click",ft,()=>{x(we,!a(we))}),q(t,ka),mo()}var Un=te('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),Gn=te('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function Hn(t,e){go(e,!1);let s=ur(e,"isAuthenticated",12,!1),o=ea(""),i=ea(!1);const r="slot2024";function n(){a(o)===r?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(x(i,!0),x(o,""),setTimeout(()=>x(i,!1),3e3))}vo(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),Wi();var d=Mi(),v=vt(d);{var m=p=>{var b=Gn(),g=w(b),E=f(w(g),4),j=w(E);kr(j),dr(2),A(E);var se=f(E,2);{var H=L=>{var z=Un();q(L,z)};de(se,L=>{a(i)&&L(H)})}A(g),A(b),Sr(j,()=>a(o),L=>x(o,L)),I("submit",E,Er(n)),q(p,b)};de(v,p=>{s()||p(m)})}q(t,d),mo()}var Vn=te("<!> <!>",1);function ol(t){let e=ea(!1);var s=Vn(),o=vt(s);Hn(o,{get isAuthenticated(){return a(e)},set isAuthenticated(n){x(e,n)},$$legacy:!0});var i=f(o,2);{var r=n=>{Dn(n,{})};de(i,n=>{a(e)&&n(r)})}q(t,s)}export{ko as A,_o as C,Cr as R,Tr as S,$o as V,ol as _,Lr as u};
