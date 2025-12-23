const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DPorI2No.js","./CfQEHKwl.js","./Db_meveG.js","./BdJg5JGx.js","./PpshkLFU.js","./C2GHuDhf.js","./5hE9ZzAo.js","./BE3R7zMw.js"])))=>i.map(i=>d[i]);
var Sn=Object.defineProperty;var Tn=(t,e,s)=>e in t?Sn(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var le=(t,e,s)=>Tn(t,typeof e!="symbol"?e+"":e,s);import{f as Ln,l as Rn,t as Z,g as F,a as Y,i as $n,d as On}from"./BJCaw-qO.js";import{i as Pn}from"./CeejRTB0.js";import{R as de,T as In,Q as Cn,i as n,w as Bn,W as Fn,X as Ba,Y as Fa,Z as Os,a1 as dt,a9 as Mn,_ as Ja,$ as er,a0 as Wn,ad as tr,O as Nn,z as jn,I as Ma,ar as Ps,K as Wa,as as Dn,at as Un,au as Gn,ac as Hn,av as Vn,aw as Yn,ax as Xn,ay as Kn,a3 as Qn,az as Zn,aA as qn,N as Jn,aB as eo,aC as to,g as so,n as ao,p as sr,ai as I,ah as ar,y as x,aD as xe,f as Ie,s as p,c as b,r as y,t as ue,k as Is,a as rr,aE as ro,aF as Ds}from"./BdJg5JGx.js";import{_ as Na,p as ce,i as oe}from"./Db_meveG.js";import{a as no,s as B}from"./Df-H93ww.js";import{b as oo,p as io}from"./dtG1_1a4.js";import{b as _e}from"./DP2gdqH-.js";import{e as $e,E as P,a as lo,C as Vs,Q as Et,V as zt,N as Cs,D as ae,H as co,p as Ce,a0 as Ze,a1 as Be,a2 as po,w as Re,a3 as ft,a4 as nr,a5 as qe,a6 as we,a7 as St,a8 as or,a9 as fo,aa as Bs,ab as uo,ac as ho,y as wt}from"./CfQEHKwl.js";import{A as vo,B as ja,G as go,T as ir,a as mo,b as Fs}from"./PpshkLFU.js";function Da(t,e){return e}function bo(t,e,s,a){for(var r=[],o=e.length,i=0;i<o;i++)Gn(e[i].e,r,!0);var c=o>0&&r.length===0&&s!==null;if(c){var u=s.parentNode;Hn(u),u.append(s),a.clear(),Le(t,e[0].prev,e[o-1].next)}Vn(r,()=>{for(var g=0;g<o;g++){var f=e[g];c||(a.delete(f.k),Le(t,f.prev,f.next)),Yn(f.e,!c)}})}function Ua(t,e,s,a,r,o=null){var i=t,c={flags:e,items:new Map,first:null};de&&In();var u=null,g=!1,f=Bn(()=>{var m=s();return Nn(m)?m:m==null?[]:tr(m)});Cn(()=>{var m=n(f),v=m.length;if(g&&v===0)return;g=v===0;let E=!1;if(de){var z=i.data===Fn;z!==(v===0)&&(i=Ba(),Fa(i),Os(!1),E=!0)}if(de){for(var J=null,G,S=0;S<v;S++){if(dt.nodeType===8&&dt.data===Mn){i=dt,E=!0,Os(!1);break}var D=m[S],he=a(D,S);G=lr(dt,c,J,null,D,he,S,r,e,s),c.items.set(he,G),J=G}v>0&&Fa(Ba())}de||yo(m,c,i,r,e,a,s),o!==null&&(v===0?u?Ja(u):u=er(()=>o(i)):u!==null&&Wn(u,()=>{u=null})),E&&Os(!0),n(f)}),de&&(i=dt)}function yo(t,e,s,a,r,o,i){var c=t.length,u=e.items,g=e.first,f=g,m,v=null,E=[],z=[],J,G,S,D;for(D=0;D<c;D+=1){if(J=t[D],G=o(J,D),S=u.get(G),S===void 0){var he=f?f.e.nodes_start:s;v=lr(he,e,v,v===null?e.first:v.next,J,G,D,a,r,i),u.set(G,v),E=[],z=[],f=v.next;continue}if(xo(S,J,D),(S.e.f&Ps)!==0&&Ja(S.e),S!==f){if(m!==void 0&&m.has(S)){if(E.length<z.length){var Ae=z[0],pe;v=Ae.prev;var ut=E[0],et=E[E.length-1];for(pe=0;pe<E.length;pe+=1)Ga(E[pe],Ae,s);for(pe=0;pe<z.length;pe+=1)m.delete(z[pe]);Le(e,ut.prev,et.next),Le(e,v,ut),Le(e,et,Ae),f=Ae,v=et,D-=1,E=[],z=[]}else m.delete(S),Ga(S,f,s),Le(e,S.prev,S.next),Le(e,S,v===null?e.first:v.next),Le(e,v,S),v=S;continue}for(E=[],z=[];f!==null&&f.k!==G;)(f.e.f&Ps)===0&&(m??(m=new Set)).add(f),z.push(f),f=f.next;if(f===null)continue;S=f}E.push(S),v=S,f=S.next}if(f!==null||m!==void 0){for(var ht=m===void 0?[]:tr(m);f!==null;)(f.e.f&Ps)===0&&ht.push(f),f=f.next;var ke=ht.length;if(ke>0){var Ee=null;bo(e,ht,Ee,u)}}Wa.first=e.first&&e.first.e,Wa.last=v&&v.e}function xo(t,e,s,a){Un(t.v,e),t.i=s}function lr(t,e,s,a,r,o,i,c,u,g){var f=(u&Xn)!==0,m=(u&Kn)===0,v=f?m?jn(r):Ma(r):r,E=(u&Dn)===0?i:Ma(i),z={i:E,v,k:o,a:null,e:null,prev:s,next:a};try{return z.e=er(()=>c(t,v,E,g),de),z.e.prev=s&&s.e,z.e.next=a&&a.e,s===null?e.first=z:(s.next=z,s.e.next=z.e),a!==null&&(a.prev=z,a.e.prev=z.e),z}finally{}}function Ga(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,r=e?e.e.nodes_start:s,o=t.e.nodes_start;o!==a;){var i=Qn(o);r.before(o),o=i}}function Le(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function _o(t,e,s){var a=t==null?"":""+t;return a=a?a+" "+e:e,a===""?null:a}function wo(t,e,s,a,r,o){var i=t.__className;if(de||i!==s){var c=_o(s,a);(!de||c!==t.getAttribute("class"))&&(c==null?t.removeAttribute("class"):t.className=c),t.__className=s}return o}function Ao(t){if(de){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;L(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var r=t.checked;L(t,"checked",null),t.checked=r}}};t.__on_r=s,Zn(s),Ln()}}function L(t,e,s,a){var r=t.__attributes??(t.__attributes={});de&&(r[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||r[e]!==(r[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[qn]=s),s==null?t.removeAttribute(e):typeof s!="string"&&ko(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var Ha=new Map;function ko(t){var e=Ha.get(t.nodeName);if(e)return e;Ha.set(t.nodeName,e=[]);for(var s,a=t,r=Element.prototype;r!==a;){s=eo(a);for(var o in s)s[o].set&&e.push(o);a=Jn(a)}return e}function Eo(t,e,s=e){var a=to();Rn(t,"input",r=>{var o=r?t.defaultValue:t.value;if(o=Ms(t)?Ws(o):o,s(o),a&&o!==(o=e())){var i=t.selectionStart,c=t.selectionEnd;t.value=o??"",c!==null&&(t.selectionStart=i,t.selectionEnd=Math.min(c,t.value.length))}}),(de&&t.defaultValue!==t.value||so(e)==null&&t.value)&&s(Ms(t)?Ws(t.value):t.value),ao(()=>{var r=e();Ms(t)&&r===Ws(t.value)||t.type==="date"&&!r&&!t.value||r!==t.value&&(t.value=r??"")})}function Ms(t){var e=t.type;return e==="number"||e==="range"}function Ws(t){return t===""?null:+t}function zo(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const Us=[];$e.handleByNamedList(P.Environment,Us);async function So(t){if(!t)for(let e=0;e<Us.length;e++){const s=Us[e];if(s.value.test()){await s.value.load();return}}}let pt;function To(){if(typeof pt=="boolean")return pt;try{pt=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{pt=!1}return pt}var cr=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(cr||{});class Lo{constructor(e){this.items=[],this._name=e}emit(e,s,a,r,o,i,c,u){const{name:g,items:f}=this;for(let m=0,v=f.length;m<v;m++)f[m][g](e,s,a,r,o,i,c,u);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Ro=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],dr=class pr extends lo{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...Ro,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await So(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...pr.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof Vs&&(a={container:a},s&&(Et(zt,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const r=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=r?a.clearColor:Cs.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const r=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==r&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=cr.ALL);const{clear:a,clearColor:r,target:o}=e;Cs.shared.setValue(r??this.background.colorRgba),s.renderTarget.clear(o,a,Cs.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new Lo(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const r in this.runners)this.runners[r].add(a);return this}_addPipes(e,s){const a=s.reduce((r,o)=>(r[o.name]=o.value,r),{});e.forEach(r=>{const o=r.value,i=r.name,c=a[i];this.renderPipes[i]=new o(this,c?new c:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!To())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};dr.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let fr=dr,At;function $o(t){return At!==void 0||(At=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??fr.defaultOptions.failIfMajorPerformanceCaveat};try{if(!ae.get().getWebGLRenderingContext())return!1;let r=ae.get().createCanvas().getContext("webgl",e);const o=!!((s=r==null?void 0:r.getContextAttributes())!=null&&s.stencil);if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,o}catch{return!1}})()),At}let kt;async function Oo(t={}){return kt!==void 0||(kt=await(async()=>{const e=ae.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),kt}const Va=["webgl","webgpu","canvas"];async function Po(t){let e=[];t.preference?(e.push(t.preference),Va.forEach(o=>{o!==t.preference&&e.push(o)})):e=Va.slice();let s,a={};for(let o=0;o<e.length;o++){const i=e[o];if(i==="webgpu"&&await Oo()){const{WebGPURenderer:c}=await Na(async()=>{const{WebGPURenderer:u}=await import("./DPorI2No.js");return{WebGPURenderer:u}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=c,a={...t,...t.webgpu};break}else if(i==="webgl"&&$o(t.failIfMajorPerformanceCaveat??fr.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:c}=await Na(async()=>{const{WebGLRenderer:u}=await import("./BE3R7zMw.js");return{WebGLRenderer:u}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=c,a={...t,...t.webgl};break}else if(i==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const r=new s;return await r.init(a),r}const ur="8.8.1";class hr{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,ur)}static destroy(){}}hr.extension=P.Application;class Io{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,ur)}destroy(){this._renderer=null}}Io.extension={type:[P.WebGLSystem,P.WebGPUSystem],name:"initHook",priority:-10};const vr=class Gs{constructor(...e){this.stage=new Vs,e[0]!==void 0&&Et(zt,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await Po(e),Gs._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Et(zt,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=Gs._plugins.slice(0);a.reverse(),a.forEach(r=>{r.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};vr._plugins=[];let gr=vr;$e.handleByList(P.Application,gr._plugins);$e.add(hr);class mr extends vo{constructor(e,s){super();const{textures:a,data:r}=e;Object.keys(r.pages).forEach(o=>{const i=r.pages[parseInt(o,10)],c=a[i.id];this.pages.push({texture:c})}),Object.keys(r.chars).forEach(o=>{const i=r.chars[o],{frame:c,source:u}=a[i.page],g=new co(i.x+c.x,i.y+c.y,i.width,i.height),f=new Ce({source:u,frame:g});this.chars[o]={id:o.codePointAt(0),xOffset:i.xOffset,yOffset:i.yOffset,xAdvance:i.xAdvance,kerning:i.kerning??{},texture:f}}),this.baseRenderedFontSize=r.fontSize,this.baseMeasurementFontSize=r.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize},this.baseLineOffset=r.baseLineOffset,this.lineHeight=r.lineHeight,this.fontFamily=r.fontFamily,this.distanceField=r.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){ja.install(e)}static uninstall(e){ja.uninstall(e)}}const Ns={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const m in e){const v=e[m].match(/^[a-z]+/gm)[0],E=e[m].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),z={};for(const J in E){const G=E[J].split("="),S=G[0],D=G[1].replace(/"/gm,""),he=parseFloat(D),Ae=isNaN(he)?D:he;z[S]=Ae}s[v].push(z)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[r]=s.info,[o]=s.common,[i]=s.distanceField??[];i&&(a.distanceField={range:parseInt(i.distanceRange,10),type:i.fieldType}),a.fontSize=parseInt(r.size,10),a.fontFamily=r.face,a.lineHeight=parseInt(o.lineHeight,10);const c=s.page;for(let m=0;m<c.length;m++)a.pages.push({id:parseInt(c[m].id,10)||0,file:c[m].file});const u={};a.baseLineOffset=a.lineHeight-parseInt(o.base,10);const g=s.char;for(let m=0;m<g.length;m++){const v=g[m],E=parseInt(v.id,10);let z=v.letter??v.char??String.fromCharCode(E);z==="space"&&(z=" "),u[E]=z,a.chars[z]={id:E,page:parseInt(v.page,10)||0,x:parseInt(v.x,10),y:parseInt(v.y,10),width:parseInt(v.width,10),height:parseInt(v.height,10),xOffset:parseInt(v.xoffset,10),yOffset:parseInt(v.yoffset,10),xAdvance:parseInt(v.xadvance,10),kerning:{}}}const f=s.kerning||[];for(let m=0;m<f.length;m++){const v=parseInt(f[m].first,10),E=parseInt(f[m].second,10),z=parseInt(f[m].amount,10);a.chars[u[E]].kerning[u[v]]=z}return a}},Ya={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],r=t.getElementsByTagName("distanceField")[0];r&&(e.distanceField={type:r.getAttribute("fieldType"),range:parseInt(r.getAttribute("distanceRange"),10)});const o=t.getElementsByTagName("page"),i=t.getElementsByTagName("char"),c=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let g=0;g<o.length;g++)e.pages.push({id:parseInt(o[g].getAttribute("id"),10)||0,file:o[g].getAttribute("file")});const u={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let g=0;g<i.length;g++){const f=i[g],m=parseInt(f.getAttribute("id"),10);let v=f.getAttribute("letter")??f.getAttribute("char")??String.fromCharCode(m);v==="space"&&(v=" "),u[m]=v,e.chars[v]={id:m,page:parseInt(f.getAttribute("page"),10)||0,x:parseInt(f.getAttribute("x"),10),y:parseInt(f.getAttribute("y"),10),width:parseInt(f.getAttribute("width"),10),height:parseInt(f.getAttribute("height"),10),xOffset:parseInt(f.getAttribute("xoffset"),10),yOffset:parseInt(f.getAttribute("yoffset"),10),xAdvance:parseInt(f.getAttribute("xadvance"),10),kerning:{}}}for(let g=0;g<c.length;g++){const f=parseInt(c[g].getAttribute("first"),10),m=parseInt(c[g].getAttribute("second"),10),v=parseInt(c[g].getAttribute("amount"),10);e.chars[u[m]].kerning[u[f]]=v}return e}},Xa={test(t){return typeof t=="string"&&t.includes("<font>")?Ya.test(ae.get().parseXML(t)):!1},parse(t){return Ya.parse(ae.get().parseXML(t))}},Co=[".xml",".fnt"],Bo={extension:{type:P.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof mr,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},Fo={extension:{type:P.LoadParser,priority:Ze.Normal},name:"loadBitmapFont",test(t){return Co.includes(Be.extname(t).toLowerCase())},async testParse(t){return Ns.test(t)||Xa.test(t)},async parse(t,e,s){const a=Ns.test(t)?Ns.parse(t):Xa.parse(t),{src:r}=e,{pages:o}=a,i=[],c=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let m=0;m<o.length;++m){const v=o[m].file;let E=Be.join(Be.dirname(r),v);E=po(E,r),i.push({src:E,data:c})}const u=await s.load(i),g=i.map(m=>u[m.src]);return new mr({data:a,textures:g},r)},async load(t,e){return await(await ae.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class Mo{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Wo={extension:{type:P.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Ce),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((r,o)=>{s[a+(o===0?"":o+1)]=r})}),s}};async function br(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const No={extension:{type:P.DetectionParser,priority:1},test:async()=>br("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},Ka=["png","jpg","jpeg"],jo={extension:{type:P.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...Ka],remove:async t=>t.filter(e=>!Ka.includes(e))},Do="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function Ys(t){return Do?!1:document.createElement("video").canPlayType(t)!==""}const Uo={extension:{type:P.DetectionParser,priority:0},test:async()=>Ys("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},Go={extension:{type:P.DetectionParser,priority:0},test:async()=>Ys("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},Ho={extension:{type:P.DetectionParser,priority:0},test:async()=>Ys("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},Vo={extension:{type:P.DetectionParser,priority:0},test:async()=>br("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class Yo{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var i,c;let r=null,o=null;if(s.loadParser&&(o=this._parserHash[s.loadParser],o||Re(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!o){for(let u=0;u<this.parsers.length;u++){const g=this.parsers[u];if(g.load&&((i=g.test)!=null&&i.call(g,e,s,this))){o=g;break}}if(!o)return Re(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await o.load(e,s,this),a.parser=o;for(let u=0;u<this.parsers.length;u++){const g=this.parsers[u];g.parse&&g.parse&&await((c=g.testParse)==null?void 0:c.call(g,r,s,this))&&(r=await g.parse(r,s,this)||r,a.parser=g)}return r})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const r={},o=nr(e),i=ft(e,g=>({alias:[g],src:g,data:{}})),c=i.length,u=i.map(async g=>{const f=Be.toAbsolute(g.src);if(!r[g.src])try{this.promiseCache[f]||(this.promiseCache[f]=this._getLoadPromiseAndParser(f,g)),r[g.src]=await this.promiseCache[f].promise,s&&s(++a/c)}catch(m){throw delete this.promiseCache[f],delete r[g.src],new Error(`[Loader.load] Failed to load ${f}.
${m}`)}});return await Promise.all(u),o?r[i[0].src]:r}async unload(e){const a=ft(e,r=>({alias:[r],src:r})).map(async r=>{var c,u;const o=Be.toAbsolute(r.src),i=this.promiseCache[o];if(i){const g=await i.promise;delete this.promiseCache[o],await((u=(c=i.parser)==null?void 0:c.unload)==null?void 0:u.call(c,g,r,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&Re(`[Assets] loadParser name conflict "${s.name}"`):Re("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function Je(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const Xo=".json",Ko="application/json",Qo={extension:{type:P.LoadParser,priority:Ze.Low},name:"loadJson",test(t){return Je(t,Ko)||qe(t,Xo)},async load(t){return await(await ae.get().fetch(t)).json()}},Zo=".txt",qo="text/plain",Jo={name:"loadTxt",extension:{type:P.LoadParser,priority:Ze.Low,name:"loadTxt"},test(t){return Je(t,qo)||qe(t,Zo)},async load(t){return await(await ae.get().fetch(t)).text()}},ei=["normal","bold","100","200","300","400","500","600","700","800","900"],ti=[".ttf",".otf",".woff",".woff2"],si=["font/ttf","font/otf","font/woff","font/woff2"],ai=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function ri(t){const e=Be.extname(t),r=Be.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(c=>c.charAt(0).toUpperCase()+c.slice(1));let o=r.length>0;for(const c of r)if(!c.match(ai)){o=!1;break}let i=r.join(" ");return o||(i=`"${i.replace(/[\\"]/g,"\\$&")}"`),i}const ni=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function oi(t){return ni.test(t)?t:encodeURI(t)}const ii={extension:{type:P.LoadParser,priority:Ze.Low},name:"loadWebFont",test(t){return Je(t,si)||qe(t,ti)},async load(t,e){var a,r,o;const s=ae.get().getFontFaceSet();if(s){const i=[],c=((a=e.data)==null?void 0:a.family)??ri(t),u=((o=(r=e.data)==null?void 0:r.weights)==null?void 0:o.filter(f=>ei.includes(f)))??["normal"],g=e.data??{};for(let f=0;f<u.length;f++){const m=u[f],v=new FontFace(c,`url(${oi(t)})`,{...g,weight:m});await v.load(),s.add(v),i.push(v)}return we.set(`${c}-and-url`,{url:t,fontFaces:i}),i.length===1?i[0]:i}return Re("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{we.remove(`${e.family}-and-url`),ae.get().getFontFaceSet().delete(e)})}};function Xs(t,e=1){var a;const s=(a=St.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function Ks(t,e,s){t.label=s,t._sourceOrigin=s;const a=new Ce({source:t,label:s}),r=()=>{delete e.promiseCache[s],we.has(s)&&we.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(Re("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),r())}),a.once("destroy",()=>{t.destroyed||(Re("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),a}const li=".svg",ci="image/svg+xml",di={extension:{type:P.LoadParser,priority:Ze.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return Je(t,ci)||qe(t,li)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?fi(t):pi(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function pi(t,e,s,a){var G,S,D;const o=await(await ae.get().fetch(t)).blob(),i=URL.createObjectURL(o),c=new Image;c.src=i,c.crossOrigin=a,await c.decode(),URL.revokeObjectURL(i);const u=document.createElement("canvas"),g=u.getContext("2d"),f=((G=e.data)==null?void 0:G.resolution)||Xs(t),m=((S=e.data)==null?void 0:S.width)??c.width,v=((D=e.data)==null?void 0:D.height)??c.height;u.width=m*f,u.height=v*f,g.drawImage(c,0,0,m*f,v*f);const{parseAsGraphicsContext:E,...z}=e.data??{},J=new or({resource:u,alphaMode:"premultiply-alpha-on-upload",resolution:f,...z});return Ks(J,s,t)}async function fi(t){const s=await(await ae.get().fetch(t)).text(),a=new go;return a.svg(s),a}const ui=`(function () {
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
`;let Ke=null,Hs=class{constructor(){Ke||(Ke=URL.createObjectURL(new Blob([ui],{type:"application/javascript"}))),this.worker=new Worker(Ke)}};Hs.revokeObjectURL=function(){Ke&&(URL.revokeObjectURL(Ke),Ke=null)};const hi=`(function () {
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
`;let Qe=null;class yr{constructor(){Qe||(Qe=URL.createObjectURL(new Blob([hi],{type:"application/javascript"}))),this.worker=new Worker(Qe)}}yr.revokeObjectURL=function(){Qe&&(URL.revokeObjectURL(Qe),Qe=null)};let Qa=0,js;class vi{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new Hs;s.addEventListener("message",a=>{s.terminate(),Hs.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){js===void 0&&(js=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<js&&(this._createdWorkers++,e=new yr().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((r,o)=>{this._queue.push({id:e,arguments:s,resolve:r,reject:o})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[Qa]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:Qa++,id:a})}}const Za=new vi,gi=[".jpeg",".jpg",".png",".webp",".avif"],mi=["image/jpeg","image/png","image/webp","image/avif"];async function bi(t,e){var r;const s=await ae.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((r=e==null?void 0:e.data)==null?void 0:r.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const xr={name:"loadTextures",extension:{type:P.LoadParser,priority:Ze.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return Je(t,mi)||qe(t,gi)},async load(t,e,s){var o;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await Za.isImageBitmapSupported()?a=await Za.loadImageBitmap(t,e):a=await bi(t,e):a=await new Promise((i,c)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?i(a):(a.onload=()=>{i(a)},a.onerror=c)});const r=new or({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((o=e.data)==null?void 0:o.resolution)||Xs(t),...e.data});return Ks(r,s,t)},unload(t){t.destroy(!0)}},_r=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],yi=_r.map(t=>`video/${t.substring(1)}`);function xi(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=wi(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function _i(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",r),t.load();function a(){o(),e()}function r(i){o(),s(i)}function o(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",r)}})}function wi(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const Ai={name:"loadVideo",extension:{type:P.LoadParser,name:"loadVideo"},test(t){const e=Je(t,yi),s=qe(t,_r);return e||s},async load(t,e,s){var u,g;const a={...Bs.defaultOptions,resolution:((u=e.data)==null?void 0:u.resolution)||Xs(t),alphaMode:((g=e.data)==null?void 0:g.alphaMode)||await fo(),...e.data},r=document.createElement("video"),o={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(o).forEach(f=>{const m=o[f];m!==void 0&&r.setAttribute(f,m)}),a.muted===!0&&(r.muted=!0),xi(r,t,a.crossorigin);const i=document.createElement("source");let c;if(t.startsWith("data:"))c=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const f=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();c=Bs.MIME_TYPES[f]||`video/${f}`}return i.src=t,c&&(i.type=c),new Promise(f=>{const m=async()=>{const v=new Bs({...a,resource:r});r.removeEventListener("canplay",m),e.data.preload&&await _i(r),f(Ks(v,s,t))};r.addEventListener("canplay",m),r.appendChild(i)})},unload(t){t.destroy(!0)}},wr={extension:{type:P.ResolveParser,name:"resolveTexture"},test:xr.test,parse:t=>{var e;return{resolution:parseFloat(((e=St.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},ki={extension:{type:P.ResolveParser,priority:-2,name:"resolveJson"},test:t=>St.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:wr.parse};class Ei{constructor(){this._detections=[],this._initialized=!1,this.resolver=new St,this.loader=new Yo,this.cache=we,this._backgroundLoader=new Mo(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var o,i;if(this._initialized){Re("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let c=e.manifest;typeof c=="string"&&(c=await this.load(c)),this.resolver.addManifest(c)}const s=((o=e.texturePreference)==null?void 0:o.resolution)??1,a=typeof s=="number"?[s]:s,r=await this._detectFormats({preferredFormats:(i=e.texturePreference)==null?void 0:i.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:r,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=nr(e),r=ft(e).map(c=>{if(typeof c!="string"){const u=this.resolver.getAlias(c);return u.some(g=>!this.resolver.hasKey(g))&&this.add(c),Array.isArray(u)?u[0]:u}return this.resolver.hasKey(c)||this.add({alias:c,src:c}),c}),o=this.resolver.resolve(r),i=await this._mapLoadToResolve(o,s);return a?i[r[0]]:i}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const r=this.resolver.resolveBundle(e),o={},i=Object.keys(r);let c=0,u=0;const g=()=>{s==null||s(++c/u)},f=i.map(m=>{const v=r[m];return u+=Object.keys(v).length,this._mapLoadToResolve(v,g).then(E=>{o[m]=E})});return await Promise.all(f),a?o[e[0]]:o}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return we.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=we.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const r=await this.loader.load(a,s);this._backgroundLoader.active=!0;const o={};return a.forEach(i=>{const c=r[i.src],u=[i.src];i.alias&&u.push(...i.alias),u.forEach(g=>{o[g]=c}),we.set(u,c)}),o}async unload(e){this._initialized||await this.init();const s=ft(e).map(r=>typeof r!="string"?r.src:r),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=ft(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(r=>this._unloadFromResolved(s[r]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{we.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,r)=>s.indexOf(a)===r),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const Xe=new Ei;$e.handleByList(P.LoadParser,Xe.loader.parsers).handleByList(P.ResolveParser,Xe.resolver.parsers).handleByList(P.CacheParser,Xe.cache.parsers).handleByList(P.DetectionParser,Xe.detections);$e.add(Wo,jo,No,Vo,Uo,Go,Ho,Qo,Jo,ii,di,xr,Ai,Fo,Bo,wr,ki);const qa={loader:P.LoadParser,resolver:P.ResolveParser,cache:P.CacheParser,detection:P.DetectionParser};$e.handle(P.Asset,t=>{const e=t.ref;Object.entries(qa).filter(([s])=>!!e[s]).forEach(([s,a])=>$e.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(qa).filter(s=>!!e[s]).forEach(s=>$e.remove(e[s]))});class zi extends uo{constructor(e,s){const{text:a,resolution:r,style:o,anchor:i,width:c,height:u,roundPixels:g,...f}=e;super({...f}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=o,this.resolution=r??null,this.allowChildren=!1,this._anchor=new ho({_onUpdate:()=>{this.onViewUpdate()}}),i&&(this.anchor=i),this.roundPixels=g??!1,c!==void 0&&(this.width=c),u!==void 0&&(this.height=u)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,r=-s*this.anchor.x;let o=0;return e.x>=r&&e.x<=r+s&&(o=-a*this.anchor.y,e.y>=o&&e.y<=o+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function Si(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(Et(zt,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class Ti extends zi{constructor(...e){const s=Si(e,"Text");super(s,ir),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=mo.measureText(this._text,this._style),{width:r,height:o}=a;e.minX=-s._x*r,e.maxX=e.minX+r,e.minY=-s._y*o,e.maxY=e.minY+o}}const Li="1.1.5",Ri={version:Li};var $i=$n('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-2k82zv"><\/script><!---->',1),Oi=Z('<p style="color: red;" class="svelte-2k82zv"><strong class="svelte-2k82zv">Error:</strong> </p>'),Pi=Z('<div class="svelte-2k82zv"> </div>'),Ii=Z('<details class="svelte-2k82zv"><summary class="svelte-2k82zv"> </summary> <!></details>'),Ci=Z(`<div style="
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
  " class="svelte-2k82zv"><h3 class="svelte-2k82zv">🎰 Oma-peli Debug</h3> <p class="svelte-2k82zv"><strong class="svelte-2k82zv">Status:</strong> </p> <!> <p class="svelte-2k82zv"><strong class="svelte-2k82zv">Base:</strong> </p> <p class="svelte-2k82zv"><strong class="svelte-2k82zv">BG URL:</strong> </p> <p class="svelte-2k82zv"><strong class="svelte-2k82zv">Sample:</strong> </p> <!></div>`),Bi=Z('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-2k82zv"> </div>'),Fi=Z('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-2k82zv"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-2k82zv"> </span></div>'),Mi=Z(`<div style="
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
      " class="svelte-2k82zv">Jatka pelaamista</button></div>`),Wi=Z(`<div style="
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
      " class="svelte-2k82zv">Sulje</button></div>`),Ni=Z('<div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #ff00ff; font-size: 16px; animation: pulse 1s infinite;" class="svelte-2k82zv"><span class="svelte-2k82zv">🎰 FREE SPINS:</span> <span class="svelte-2k82zv"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 8px; border-top: 1px solid #555; padding-top: 8px;" class="svelte-2k82zv"><span style="color: #fff; font-size: 14px;" class="svelte-2k82zv">Total Won:</span> <span style="color: #00ff00; font-size: 14px;" class="svelte-2k82zv"> </span></div>',1),ji=Z(`<div style="
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
        " class="svelte-2k82zv">⏹ STOP</button></div>`),Di=Z(`<div style="
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
          " class="svelte-2k82zv">Cancel</button></div>`),Ui=Z(`<button style="
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
      " class="svelte-2k82zv">🔄 AUTOPLAY</button> <!>`,1),Gi=Z(`<!> <!> <!> <div style="
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
      " class="svelte-2k82zv"> </div></div> <img alt="Divider" class="svelte-2k82zv"> <button title="Menu" class="svelte-2k82zv"></button></div> <img alt="Right End" class="svelte-2k82zv"></div>`,1);function Hi(t,e){sr(e,!0);const s=Ri.version,a=13,r=1445,o=1e3,i=1.75,c=-30,u=-10,g=160,f=0,m=750,v=80,E=250,z=-230,J=-390,G=1,S=1.1,D=.5,he=40,Ae=0,pe=-40,ut=1,et="height",ke=Math.round(100*i),Ee=Math.round(ke*(700/760)),Ar=Ee+10,Tt=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],Qs=typeof window<"u"&&window.location.hostname.includes("github.io"),q=Qs?"/web-sdk/oma-peli/symbols":`${_e}/symbols`,K=Qs?"/web-sdk/oma-peli/controls":`${_e}/controls`,Lt={a:`${q}/Blue_hotrod.jpg`,b:`${q}/Blue_jacket.jpg`,c:`${q}/Blue_rollers.jpg`,d:`${q}/Blue_speakers.jpg`,e:`${q}/Premium_blonde.jpg`,f:`${q}/Premium_brunette.jpg`,g:`${q}/Premium_rocker.jpg`,h:`${q}/New_Wild.jpg`,i:`${q}/Red_burger.jpg`,j:`${q}/Red_fries.jpg`,k:`${q}/Red_milkshake.jpg`,l:`${q}/Scatter.jpg`,emptyslot:`${q}/Emptyslot.jpg`},Rt=`${q}/bg_base.jpg`,Zs=`${q}/ReelFrames.png`,qs=`${q}/RockABillyReels_logo.png`,kr={spin:`${_e}/sounds/spin.mp3`,stop:`${_e}/sounds/stop.mp3`,win:`${_e}/sounds/win.mp3`};let ve=I(!0),$t={},X=null,Ot=null,Pt=null;const Er=60/130,zr=Math.round(Er*60);let fe=I(!0),Sr=I(!1),vt=I(!1),It=I(945),Ct=null;const Bt={background:`${_e}/music/rockabilly-loop.mp3`,drumHit:`${_e}/music/drum-hit.mp3`,winTheme:`${_e}/music/win-stinger.mp3`};function Js(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(Js,500);return}const d=window.Howl;try{X=new d({src:[Bt.background],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded"),x(Sr,!0)},onloaderror:(h,l)=>{console.warn("⚠️ Background music not found (generate with Suno AI):",l)}}),Ot=new d({src:[Bt.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),Pt=new d({src:[Bt.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(h){console.error("Failed to initialize music system:",h)}}function Tr(){X&&n(fe)&&!X.playing()&&(X.play(),console.log("🎵 Background music started"))}function Lr(){X&&X.playing()&&(X.fade(X.volume(),0,500),setTimeout(()=>X.stop(),500))}function Rr(){if(X&&X.playing()){const d=X.volume();X.fade(d,0,1e3),setTimeout(()=>{X.stop(),X.volume(.3)},1e3)}}let Ft=I(!1);function $r(){x(Ft,!1),setTimeout(()=>{x(Ft,!0)},10)}function Or(){x(fe,!n(fe)),n(fe)?Tr():Lr()}function Pr(){Ot&&n(fe)&&n(ve)&&Ot.play()}function Ir(){Pt&&n(fe)&&n(ve)&&Pt.play()}let gt=null,Fe=null,tt=null,st=null,at=I("Initializing..."),Me=I(""),ie=[],ge=I(1e3),Q=I(10);const ea=1,Mt=100;let re=I(!1),We=I(0),Oe=I(!1),Cr=I(0),Pe=!1,me=null,Wt=!1,Ne=I(0),je=I(0),rt=I(0),Nt=I(0),jt=Is(()=>n(je)>0?(n(rt)/n(je)*100).toFixed(2):"0.00"),Dt=Is(()=>n(Ne)>0?(n(Nt)/n(Ne)*100).toFixed(2):"0.00"),H=I(!1),be=I(0),ze=I(0),mt=I(0),Ut=I(0),bt=I(0),Gt=I(0),Br=Is(()=>n(bt)>0?(n(Gt)/n(bt)*100).toFixed(2):"0.00"),ne=I(ce([]));function Fr(d,h,l){const w=new Date().toLocaleString("fi-FI");let _=`
${"=".repeat(60)}
`;_+=`ROUND #${d} - ${w}
`,_+=`Mode: ${n(H)?"FREE SPINS":"BASE GAME"}
`,_+=`${"=".repeat(60)}
`,h.forEach((A,T)=>{_+=`
Win ${T+1}:
`,_+=`  Symbol: ${A.symbol} (${ra[A.symbol]})
`,_+=`  Count: ${A.count} symbols
`,_+=`  Multiplier: ${A.multiplier}x
`,_+=`  Payout: ${A.payout.toFixed(2)}
`,_+=`  Positions: [${A.positions.join(", ")}]
`}),_+=`
${"─".repeat(60)}
`,_+=`TOTAL WIN: ${l.toFixed(2)}
`,_+=`${"=".repeat(60)}
`,n(ne).push(_)}function Mr(){const d=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${n(ne).join(`
`)}`,h=new Blob([d],{type:"text/plain"}),l=URL.createObjectURL(h),w=document.createElement("a");w.href=l,w.download=`win-log-${Date.now()}.txt`,w.click(),URL.revokeObjectURL(l)}function Wr(){x(ne,ce([]))}function Nr(){n(H)||(x(H,!0),x(be,10),x(ze,0),xe(mt),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."))}const jr={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},Dr={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function ta(d){if(d===6)return Math.random()<.55?"h":"emptyslot";const h=n(H)?Dr:jr,l=Math.random();let w=0;const _=Tt.filter(T=>T!=="h"),A=_.reduce((T,N)=>T+h[N],0);for(const T of _)if(w+=h[T]/A,l<w)return T;return"f"}function sa(){const d=[];for(let h=0;h<a;h++){const l=ta(h);d.push(l),xe(bt),l==="emptyslot"&&xe(Gt)}return d}function aa(d){return d<3?{col:0,row:d}:d<6?{col:1,row:d-3}:d===6?{col:2,row:0}:d<10?{col:3,row:d-7}:{col:4,row:d-10}}function nt(d,h){return d===0?h:d===1?3+h:d===2?6:d===3?7+h:d===4?10+h:-1}function Ur(){if(n(H)){const d=Math.random();return d<.7?3:d<.92?5:10}else{const d=Math.random();return d<.7?1:d<.92?2:3}}const Gr={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function Hr(){var te;const d=[],h=[];for(let k=0;k<a;k++)ot[k]==="l"&&h.push(k);if(h.length>=5){const k=h.length;x(be,n(be)+k),n(H)?console.log(`🎰 FREE SPINS RETRIGGERED! +${k} FREE SPINS! Total: ${n(be)}`):(x(H,!0),x(ze,0),xe(mt),console.log(`🎰 FREE SPINS TRIGGERED! ${h.length} scatters = ${k} FREE SPINS!`)),d.push({symbol:"l",count:h.length,payout:0,positions:h,multiplier:1})}const l=[];for(let k=0;k<3;k++)for(let R=0;R<3;R++)for(let $=0;$<1;$++)for(let O=0;O<3;O++)for(let W=0;W<3;W++){const M=[nt(0,k),nt(1,R),nt(2,$),nt(3,O),nt(4,W)];l.push(M)}console.log(`Generated ${l.length} possible paths (should be 81)`);const w=[];for(const k of l){const R=k.map(M=>ot[M]);if(R[0]==="emptyslot"||R[0]==="l")continue;let $=null;for(let M=0;M<R.length;M++)if(R[M]!=="h"&&R[M]!=="emptyslot"&&R[M]!=="l"){$=R[M];break}if(!$)continue;let O=0;const W=new Set;for(let M=0;M<k.length;M++){const Te=k[M],{col:Ye}=aa(Te),se=R[M];(se===$||se==="h")&&W.add(Ye)}for(let M=0;M<5&&W.has(M);M++)O++;if(O>=3){const Te=k[0]%3;w.push({symbol:$,length:O,path:k.slice(0,O),startRow:Te})}}const _=[],A=new Map;for(const k of w){const R=`${k.symbol}-${k.path.join(",")}`;A.has(R)||A.set(R,[]),A.get(R).push(k)}for(const[k,R]of A.entries()){const $=Math.max(...R.map(W=>W.length)),O=R.find(W=>W.length===$);O&&_.push(O)}const T=[],N=new Map;for(const k of _)N.has(k.symbol)||N.set(k.symbol,[]),N.get(k.symbol).push(k);const j=[];for(const[k,R]of N.entries()){const $=Math.max(...R.map(W=>W.length)),O=R.filter(W=>W.length===$);j.push(...O)}const V=new Map;for(const k of j){const R=`${k.symbol}-${k.length}`;V.has(R)||V.set(R,[]),V.get(R).push(k)}const C=j.length>0?Ur():1;for(const[k,R]of V.entries()){const $=R[0],O=(te=Gr[$.symbol])==null?void 0:te[$.length];if(O!==void 0&&O>0){const W=new Map;for(const se of R)for(let ee=0;ee<se.length;ee++)W.has(ee)||W.set(ee,new Set),W.get(ee).add(se.path[ee]);let M=1;for(let se=0;se<$.length;se++){const ee=W.get(se);M*=ee?ee.size:1}const Te=O*n(Q)*M*C;console.log(`  ${$.length}x${$.symbol}: ${M} ways × ${O}x × ${n(Q)} bet × ${C} mult = ${Te}`);const Ye=new Set;for(const se of R)se.path.forEach(ee=>Ye.add(ee));T.push({symbol:$.symbol,count:$.length,payout:Te,positions:Array.from(Ye),multiplier:C})}}return d.push(...T),d}let ye=I(0),De=I(ce([])),Se=I(!1),Ue=I(!1);const ra={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function Ht(d){if(!n(ve)||!$t[d])return;const h=$t[d];h.currentTime=0,h.play().catch(l=>{console.warn("Äänen toisto epäonnistui:",d,l)})}function Vr(d){it.forEach(h=>U.stage.removeChild(h)),it=[],d.forEach(h=>{h.positions.forEach(l=>{const w=Ge[l],_=new Fs().rect(0,0,ke,Ee).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});_.x=w.container.x,_.y=w.container.y,U.stage.addChild(_),it.push(_);let A=0,T=1;const N=.05;U.ticker.add(()=>{A+=T*N,A>=.4&&(T=-1),A<=0&&(T=1),_.alpha=.5+A})})})}function Vt(){it.forEach(d=>U.stage.removeChild(d)),it=[]}let ot=sa(),Yt,U,Ge=[],it=[];class Yr{constructor(h,l){le(this,"index");le(this,"container");le(this,"offset",0);le(this,"speed",0);le(this,"targetSpeed",30);le(this,"state","idle");le(this,"stopDelay",0);le(this,"bounceOffset",0);le(this,"bounceSpeed",0);le(this,"bounceFrames",0);this.index=h,this.container=l}start(h){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=h}startSynchronized(h){const l=60+h*zr;this.start(l)}update(){this.state!=="idle"&&(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"&&(this.speed*=.92,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,Ht("stop"),Pr())),this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=Ar&&(this.offset=0,ot[this.index]=ta(this.index))))}draw(){const h=this.container;h.removeChildren();const l=ot[this.index];if(!l||!gt||!gt[l])return;const w=gt[l];if(!w)return;const _=this.offset+this.bounceOffset,A=new wt(w);A.width=ke,A.height=Ee,A.x=0,A.y=_,h.addChild(A)}}ar(async()=>{U=new gr,await U.init({width:r,height:o,background:"#001a33"}),Yt.appendChild(U.canvas);const d={};try{x(at,"Loading background and UI images..."),ie.push(`Loading background: ${Rt}`),ie.push(`Loading reel frames: ${Zs}`),ie.push(`Loading logo: ${qs}`),await Xe.load([{alias:"background",src:Rt},{alias:"reelframes",src:Zs},{alias:"logo",src:qs}]),Fe=Ce.from("background"),tt=Ce.from("reelframes"),st=Ce.from("logo"),console.log("✅ Background texture created:",Fe.width,"x",Fe.height),console.log("✅ Reel frames texture created:",tt.width,"x",tt.height),console.log("✅ Logo texture created:",st.width,"x",st.height),ie.push("✅ All UI images loaded"),x(at,"Loading symbols...");const l=[];for(const w of Tt)l.push({alias:w,src:Lt[w]});await Xe.load(l);for(const w of Tt){const _=Lt[w];ie.push(`Loading symbol ${w}: ${_}`);try{const A=Ce.from(w);d[w]=A,console.log(`✅ Symbol ${w} loaded:`,A.width,"x",A.height),ie.push(`✅ Symbol ${w} loaded`)}catch(A){const T=`❌ Failed to load symbol ${w} from ${_}: ${A}`;throw ie.push(T),console.error(T),new Error(T)}}gt=d,x(at,"Assets loaded successfully!")}catch(l){x(Me,`Asset loading failed: ${l}`),ie.push(n(Me)),console.error(n(Me));return}console.log("Ladataan ääniefektit...");for(const[l,w]of Object.entries(kr)){const _=new Audio;_.src=w,_.preload="auto",_.volume=.7,_.load(),_.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${w} (käytetään hiljaista placeholderia)`)}),$t[l]=_}if(console.log("Taustakuva ladattu, tekstuuri:",Fe),Fe){const l=new wt(Fe);U.renderer.width/U.renderer.height;const w=l.texture.width/l.texture.height;let _;_=U.renderer.height/l.texture.height,_*=ut,l.scale.set(_),l.x=(U.renderer.width-l.width)/2,l.y=(U.renderer.height-l.height)/2+pe,U.stage.addChild(l),console.log("Taustakuva lisätty:",et,"mode, size:",l.width.toFixed(0),"x",l.height.toFixed(0),"image aspect:",w.toFixed(2),"scale:",_.toFixed(2),"pos:",l.x.toFixed(0),l.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(l=>({x:l.x+c,y:l.y+u})),Ge=[];for(let l=0;l<a;l++){const w=aa(l),_=w.col,A=w.row,T=300+_*(ke+20),N=250+A*(Ee+15),j=l===6?T+f:T,V=l===6?N+g:N,C=new Vs;C.x=j+c,C.y=V+u;const te=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],k=new Fs().rect(0,0,ke,Ee).fill({color:te[l],alpha:.3});k.x=C.x,k.y=C.y,U.stage.addChild(k);const R=new ir({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),$=new Ti({text:l.toString(),style:R});$.x=C.x+5,$.y=C.y+5,U.stage.addChild($);const O=new Fs().rect(0,0,ke,Ee).fill(16777215);O.x=C.x,O.y=C.y,C.mask=O,U.stage.addChild(O),U.stage.addChild(C),Ge.push(new Yr(l,C))}if(tt){const l=new wt(tt);l.scale.set(1),l.x=250,l.y=200,U.stage.addChild(l),Ct=l,x(It,ce(l.width)),console.log("Reel frames lisätty:",l.width.toFixed(0),"x",l.height.toFixed(0)),console.log("Control panel leveys päivitetty:",n(It).toFixed(0))}if(st){const l=new wt(st);l.scale.set(D),l.x=(U.renderer.width-l.width)/2+he,l.y=Ae,U.stage.addChild(l),console.log("Logo lisätty päällimmäiseen layeriin:",l.width.toFixed(0),"x",l.height.toFixed(0))}Js(),U.ticker.add(Xr)});function Xr(){for(const d of Ge)d.update(),d.draw();if(!n(Se)&&!Wt&&Ge.every(d=>d.state==="stopped")){Wt=!0,Rr();const d=Hr();console.log(`Checking wins, found ${d.length} wins`),d.length>0?(x(De,ce(d)),x(ye,ce(d.reduce((h,l)=>h+l.payout,0))),Fr(n(Ne),d,n(ye)),Kr(n(ye)),x(Se,!0),x(Cr,ce(Date.now())),console.log(`🎉 VOITTO! ${n(ye)} pistettä! Uusi saldo: ${n(ge)}`),console.log(`isShowingWin set to: ${n(Se)}, totalWin: ${n(ye)}`),d.forEach(h=>{const l=h.multiplier?` (${h.multiplier}x multiplier)`:"";console.log(`${h.count}x ${h.symbol} = ${h.payout} pistettä${l}`)}),Vr(d),Ht("win"),n(re)&&!Pe&&(Pe=!0,me=window.setTimeout(()=>{n(Se)&&n(re)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),x(Se,!1),Vt()),me=window.setTimeout(()=>{Pe=!1,Kt()},200)},1500))):(console.log("No wins found this spin"),n(re)&&!Pe&&(Pe=!0,me=window.setTimeout(()=>{Pe=!1,Kt()},1e3))),n(H)&&n(be)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${n(ze)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${n(ze).toFixed(2)}`),x(H,!1),x(ze,0)},2e3))}}function na(){if(X&&n(fe)&&!X.playing()&&(X.play(),console.log("🎵 Background music started on first spin")),$r(),n(H)&&n(be)>0)xe(be,-1),xe(Ut),console.log(`🎰 FREE SPIN! Remaining: ${n(be)}`);else if(!n(H)){if(n(ge)<n(Q)){alert(`Not enough credits! Balance: ${n(ge)}, Bet: ${n(Q)}`),Xt();return}x(ge,n(ge)-n(Q)),xe(Ne),x(je,n(je)+n(Q))}me!==null&&(clearTimeout(me),me=null),x(De,ce([])),x(ye,0),x(Se,!1),Wt=!1,Vt(),ot=sa(),Ge.forEach((d,h)=>{const l=Math.floor(h/3);d.startSynchronized(l)}),Ht("spin")}function Kr(d){x(ge,n(ge)+d),x(rt,n(rt)+d),n(H)&&x(ze,n(ze)+d),d>0&&(xe(Nt),d/n(Q)>=10&&Ir())}function oa(){n(Q)<Mt&&x(Q,ce(Math.min(n(Q)+1,Mt)))}function ia(){n(Q)>ea&&x(Q,ce(Math.max(n(Q)-1,ea)))}function Qr(){x(Q,Mt)}function lt(d){x(re,!0),x(We,ce(d)),x(Oe,!1),Kt()}function Xt(){x(re,!1),x(We,0),Pe=!1,me!==null&&(clearTimeout(me),me=null)}function Kt(){if(!n(re)||n(We)<=0){Xt();return}console.log(`Autoplay: Starting spin ${n(We)} rounds left`),na(),xe(We,-1)}function Zr(){confirm("Reset all statistics?")&&(x(Ne,0),x(je,0),x(rt,0),x(Nt,0),x(mt,0),x(Ut,0),x(bt,0),x(Gt,0))}var la=Gi();no(d=>{var h=$i();p(Ie(h)),Y(d,h)});var ca=Ie(la);{var qr=d=>{var h=Ci(),l=p(b(h),2),w=p(b(l));y(l);var _=p(l,2);{var A=$=>{var O=Oi(),W=p(b(O));y(O),ue(()=>B(W,` ${n(Me)??""}`)),Y($,O)};oe(_,$=>{n(Me)&&$(A)})}var T=p(_,2),N=p(b(T));N.nodeValue=` ${_e??""}`,y(T);var j=p(T,2),V=p(b(j));V.nodeValue=` ${Rt??""}`,y(j);var C=p(j,2),te=p(b(C));y(C);var k=p(C,2);{var R=$=>{var O=Ii(),W=b(O),M=b(W);y(W);var Te=p(W,2);Ua(Te,17,()=>ie,Da,(Ye,se)=>{var ee=Pi(),zn=b(ee,!0);y(ee),ue(()=>B(zn,n(se))),Y(Ye,ee)}),y(O),ue(()=>B(M,`Log (${ie.length??""})`)),Y($,O)};oe(k,$=>{ie.length>0&&$(R)})}y(h),ue(()=>{B(w,` ${n(at)??""}`),B(te,` ${Lt.a??""}`)}),Y(d,h)};oe(ca,d=>{(n(at)!=="Assets loaded successfully!"||n(Me))&&d(qr)})}var da=p(ca,2);{var Jr=d=>{var h=Mi(),l=p(b(h),2),w=b(l);y(l);var _=p(l,2);Ua(_,17,()=>n(De),Da,(j,V)=>{var C=Bi(),te=b(C);y(C),ue(k=>B(te,`${n(V).count??""} × ${ra[n(V).symbol]??""} = ${k??""} pistettä`),[()=>n(V).payout.toFixed(2)]),Y(j,C)});var A=p(_,2);{var T=j=>{var V=Fi(),C=b(V),te=b(C);y(C),y(V),ue(()=>B(te,`✨ ${n(De)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),Y(j,V)};oe(A,j=>{n(De).length>0&&n(De)[0].multiplier>1&&j(T)})}var N=p(A,2);y(h),ue(()=>B(w,`${n(ye)??""} pistettä`)),F("click",N,()=>{x(Se,!1),Vt(),console.log("Win popup closed, ready for next spin")}),Y(d,h)};oe(da,d=>{n(ye)>0&&n(Se)&&d(Jr)})}var pa=p(da,2);{var en=d=>{var h=Wi(),l=p(b(h),8);y(h),F("click",l,()=>{x(Ue,!1)}),Y(d,h)};oe(pa,d=>{n(Ue)&&d(en)})}var fa=p(pa,2);oo(fa,d=>Yt=d,()=>Yt);var yt=p(fa,2),ua=b(yt);{var tn=d=>{var h=Ni(),l=Ie(h),w=p(b(l),2),_=b(w,!0);y(w),y(l);var A=p(l,2),T=p(b(A),2),N=b(T,!0);y(T),y(A),ue(j=>{B(_,n(be)),B(N,j)},[()=>n(ze).toFixed(2)]),Y(d,h)};oe(ua,d=>{n(H)&&d(tn)})}var Qt=p(ua,2),ha=p(b(Qt),2),sn=b(ha,!0);y(ha),y(Qt);var va=p(Qt,2),ga=p(b(va),2),an=b(ga,!0);y(ga),y(va),y(yt);var Zt=p(yt,2),ma=p(b(Zt),2),ba=b(ma),qt=p(ba,2),rn=b(qt,!0);y(qt);var ya=p(qt,2),nn=p(ya,2);y(ma),y(Zt);var xa=p(Zt,2),Jt=p(xa,2),_a=p(b(Jt),2);_a.textContent=`v${s}`;var es=p(_a,2),wa=p(b(es),2),on=b(wa,!0);y(wa),y(es);var ts=p(es,2),Aa=p(b(ts),2),ln=b(Aa,!0);y(Aa),y(ts);var ss=p(ts,2),ka=p(b(ss),2),cn=b(ka,!0);y(ka),y(ss);var as=p(ss,2),rs=p(b(as),2),dn=b(rs);y(rs),y(as);var ns=p(as,2),os=p(b(ns),2),pn=b(os);y(os),y(ns);var is=p(ns,2),Ea=p(b(is),2),fn=b(Ea,!0);y(Ea),y(is);var ls=p(is,2),za=p(b(ls),2),un=b(za,!0);y(za),y(ls);var cs=p(ls,2),Sa=p(b(cs),2),hn=b(Sa);y(Sa),y(cs);var Ta=p(cs,2),La=p(Ta,2),He=b(La),vn=b(He);y(He);var xt=p(He,2),ct=p(xt,2),gn=b(ct);y(ct);var ds=p(ct,2);y(La),y(Jt);var ps=p(Jt,2),mn=b(ps);{var bn=d=>{var h=ji(),l=p(b(h),2),w=b(l);y(l);var _=p(l,2);y(h),ue(()=>B(w,`${n(We)??""} left`)),F("click",_,Xt),Y(d,h)},yn=d=>{var h=Ui(),l=Ie(h),w=p(l,2);{var _=A=>{var T=Di(),N=p(b(T),2),j=p(N,2),V=p(j,2),C=p(V,2),te=p(C,2),k=p(te,2);y(T),F("click",N,()=>lt(10)),F("click",j,()=>lt(100)),F("click",V,()=>lt(1e3)),F("click",C,()=>lt(1e4)),F("click",te,()=>lt(1e5)),F("click",k,()=>{x(Oe,!1)}),Y(A,T)};oe(w,A=>{n(Oe)&&A(_)})}F("click",l,()=>{x(Oe,!n(Oe))}),Y(d,h)};oe(mn,d=>{n(re)?d(bn):d(yn,!1)})}y(ps);var Ve=p(ps,2),xn=b(Ve,!0);y(Ve);var fs=p(Ve,2),us=b(fs);L(us,"src",`${K??""}/Control_leftend.png`),L(us,"style",`height: ${v}px; flex-shrink: 0;`);var _t=p(us,2);L(_t,"style",`
    flex-grow: 1;
    height: ${v}px;
    background-image: url('${K??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 20px;
  `);var hs=b(_t),Ra=p(b(hs),2),vs=b(Ra);L(vs,"style",`
            width: 40px;
            height: 40px;
            background-image: url('${K??""}/Control_lowerbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `);var gs=p(vs,2),_n=b(gs,!0);y(gs);var $a=p(gs,2);L($a,"style",`
            width: 40px;
            height: 40px;
            background-image: url('${K??""}/Control_upperbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(Ra),y(hs);var ms=p(hs,2);L(ms,"src",`${K??""}/Control_divider.png`),L(ms,"style",`height: ${v*.8}px; flex-shrink: 0;`);var bs=p(ms,2),Oa=p(b(bs),2),wn=b(Oa,!0);y(Oa),y(bs);var ys=p(bs,2);L(ys,"src",`${K??""}/Control_divider.png`),L(ys,"style",`height: ${v*.8}px; flex-shrink: 0;`);var xs=p(ys,2),_s=b(xs),ws=b(_s);y(_s),y(xs);var As=p(xs,2);L(As,"src",`${K??""}/Control_divider.png`),L(As,"style",`height: ${v*.8}px; flex-shrink: 0;`);var ks=p(As,2),Es=b(ks),An=p(Es,2);y(ks);var zs=p(ks,2);L(zs,"src",`${K??""}/Control_divider.png`),L(zs,"style",`height: ${v*.8}px; flex-shrink: 0;`);var Ss=p(zs,2),Ts=b(Ss),kn=p(Ts,2);y(Ss);var Ls=p(Ss,2);L(Ls,"src",`${K??""}/Control_divider.png`),L(Ls,"style",`height: ${v*.8}px; flex-shrink: 0;`);var Rs=p(Ls,2),Pa=p(b(Rs),2),En=b(Pa,!0);y(Pa),y(Rs);var $s=p(Rs,2);L($s,"src",`${K??""}/Control_divider.png`),L($s,"style",`height: ${v*.8}px; flex-shrink: 0;`);var Ia=p($s,2);L(Ia,"style",`
        width: 50px;
        height: 50px;
        background-image: url('${K??""}/Control_menubar.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),y(_t);var Ca=p(_t,2);L(Ca,"src",`${K??""}/Control_rightend.png`),L(Ca,"style",`height: ${v}px; flex-shrink: 0;`),y(fs),ue((d,h,l,w,_,A,T,N,j)=>{L(yt,"style",`
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
  border: 2px solid ${(n(H)?"#ff00ff":"#ffd700")??""};
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
  z-index: 1500;
  min-width: 180px;
`),B(sn,d),B(an,n(Q)),B(rn,n(Q)),B(on,h),B(ln,l),B(cn,w),L(rs,"style",`color: ${_??""};`),B(dn,`${n(jt)??""}%`),L(os,"style",`color: ${A??""};`),B(pn,`${n(Dt)??""}%`),B(fn,n(mt)),B(un,n(Ut)),B(hn,`${n(Br)??""}%`),He.disabled=n(ne).length===0,L(He,"style",`
        width: 100%;
        padding: 5px;
        background: ${(n(ne).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(n(ne).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(n(ne).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(n(ne).length>0?"1":"0.5")??""};
      `),B(vn,`Download Win Log (${n(ne).length??""})`),xt.disabled=n(ne).length===0,L(xt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(n(ne).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(n(ne).length>0?"1":"0.5")??""};
      `),L(ct,"style",`
        width: 100%;
        padding: 5px;
        background: ${(n(fe)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(n(fe)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),B(gn,`🎵 Music: ${(n(fe)?"ON":"OFF")??""}`),ds.disabled=n(H),L(ds,"style",`
        width: 100%;
        padding: 5px;
        background: ${(n(H)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(n(H)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(n(H)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(n(H)?"0.5":"1")??""};
      `),L(Ve,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(n(ve)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(n(ve)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),L(Ve,"title",n(ve)?"Mykistä äänet":"Laita äänet päälle"),B(xn,n(ve)?"🔊":"🔇"),L(fs,"style",`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(
    calc(-50% + ${(Ct?Ct.x:E)+z}px),
    calc(-50% + ${m+J}px)
  ) scale(${G}, ${S});
  transform-origin: center center;
  width: ${n(It)??""}px;
  height: ${v}px;
  display: flex;
  align-items: center;
  z-index: 1000;
`),B(_n,T),B(wn,N),wo(_s,1,`play-button-wrapper ${(n(Ft)?"glare-animate":"")??""}`,"svelte-2k82zv"),ws.disabled=n(re),L(ws,"style",`
            width: 130px;
            height: 130px;
            background-image: url('${K??""}/Control_playbutton.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border: none;
            cursor: ${(n(re)?"not-allowed":"pointer")??""};
            background-color: transparent;
            opacity: ${(n(re)?.5:1)??""};
            position: relative;
            z-index: 10;
            border-radius: 50%;
          `),L(Es,"style",`
          width: 50px;
          height: 50px;
          background-image: url('${K??""}/${(n(re)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),L(An,"src",`${K??""}/${(n(re)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),L(Ts,"style",`
          width: 50px;
          height: 50px;
          background-image: url('${K??""}/${(n(vt)?"Control_fastplay_select.png":"Control_fastplay_deselect.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),L(kn,"src",`${K??""}/${(n(vt)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),B(En,j)},[()=>n(ge).toLocaleString(),()=>n(Ne).toLocaleString(),()=>n(je).toLocaleString(),()=>n(rt).toLocaleString(),()=>parseFloat(n(jt))>=95?"#00ff00":parseFloat(n(jt))>=85?"#ffff00":"#ff6666",()=>parseFloat(n(Dt))>=30?"#00ff00":parseFloat(n(Dt))>=20?"#ffff00":"#ff6666",()=>n(Q).toFixed(2),()=>n(ge).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>n(ye).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),F("click",ba,ia),F("click",ya,oa),F("click",nn,Qr),F("click",xa,()=>{x(Ue,!n(Ue))}),F("click",Ta,Zr),F("click",He,Mr),F("click",xt,Wr),F("click",ct,Or),F("click",ds,Nr),F("click",Ve,()=>{x(ve,!n(ve))}),F("click",vs,ia),F("click",$a,oa),F("click",ws,na),F("click",Es,()=>{x(Oe,!n(Oe))}),F("click",Ts,()=>{x(vt,!n(vt))}),F("click",Ia,()=>{x(Ue,!n(Ue))}),Y(t,la),rr()}var Vi=Z('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),Yi=Z('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function Xi(t,e){sr(e,!1);let s=io(e,"isAuthenticated",12,!1),a=Ds(""),r=Ds(!1);const o="slot2024";function i(){n(a)===o?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(x(r,!0),x(a,""),setTimeout(()=>x(r,!1),3e3))}ar(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),Pn();var c=On(),u=Ie(c);{var g=f=>{var m=Yi(),v=b(m),E=p(b(v),4),z=b(E);Ao(z),ro(2),y(E);var J=p(E,2);{var G=S=>{var D=Vi();Y(S,D)};oe(J,S=>{n(r)&&S(G)})}y(v),y(m),Eo(z,()=>n(a),S=>x(a,S)),F("submit",E,zo(i)),Y(f,m)};oe(u,f=>{s()||f(g)})}Y(t,c),rr()}var Ki=Z('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),Qi=Z("<!> <!>",1);function dl(t){let e=Ds(!1);var s=Qi(),a=Ie(s);Xi(a,{get isAuthenticated(){return n(e)},set isAuthenticated(i){x(e,i)},$$legacy:!0});var r=p(a,2);{var o=i=>{var c=Ki(),u=p(Ie(c),2);Hi(u,{}),Y(i,c)};oe(r,i=>{n(e)&&i(o)})}Y(t,s)}export{fr as A,cr as C,Io as R,Lo as S,ur as V,dl as _,To as u};
