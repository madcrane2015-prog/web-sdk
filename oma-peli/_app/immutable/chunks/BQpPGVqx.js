const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CkWkdRg6.js","./SpTHHzAp.js","./DN2ixH3E.js","./D1rxTRw3.js","./BUP9hRfY.js","./C2GHuDhf.js","./BZuEDv4n.js","./CrG-BmEX.js"])))=>i.map(i=>d[i]);
var No=Object.defineProperty;var zo=(t,e,s)=>e in t?No(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var Ae=(t,e,s)=>zo(t,typeof e!="symbol"?e+"":e,s);import{f as Do,l as Uo,d as vi,a as D,t as se,n as mi,g as M,i as Go}from"./CzvQHsIM.js";import{i as Ho}from"./CSlWMsbo.js";import{R as ke,T as Vo,Q as Yo,i,w as Xo,W as Ko,X as Ja,Y as ei,Z as Qs,a1 as xt,a9 as Qo,_ as bi,$ as yi,a0 as Zo,ad as xi,O as qo,z as Jo,I as ti,ar as Zs,K as si,as as er,at as tr,au as sr,ac as ar,av as ir,aw as or,ax as rr,ay as nr,a3 as lr,az as cr,aA as dr,N as pr,aB as ur,aC as fr,g as hr,n as gr,p as pa,f as Fe,ai as R,a as ua,y as b,c as _,s as p,r as w,t as ce,k as Ue,ah as _i,aD as je,aE as vr,aF as oa}from"./D1rxTRw3.js";import{_ as ai,i as pe,p as fe}from"./DN2ixH3E.js";import{s as z,a as mr}from"./CSYyqGjZ.js";import{p as ra,b as ii}from"./Dk6Goypl.js";import{b as Se}from"./CuosE6QE.js";import{e as Me,E as I,a as br,C as fa,Q as Vt,V as Yt,N as qs,D as he,H as yr,p as Ge,ab as nt,ac as He,ad as xr,w as Be,ae as wt,af as wi,ag as lt,a9 as Te,ah as Qt,a1 as Ai,ai as _r,aj as Js,aa as wr,ak as Ar,y as Ut}from"./SpTHHzAp.js";import{A as kr,B as oi,G as Sr,T as ki,a as Er,b as ea}from"./BUP9hRfY.js";function Xt(t,e){return e}function $r(t,e,s,a){for(var o=[],r=e.length,n=0;n<r;n++)sr(e[n].e,o,!0);var l=r>0&&o.length===0&&s!==null;if(l){var f=s.parentNode;ar(f),f.append(s),a.clear(),Ce(t,e[0].prev,e[r-1].next)}ir(o,()=>{for(var g=0;g<r;g++){var d=e[g];l||(a.delete(d.k),Ce(t,d.prev,d.next)),or(d.e,!l)}})}function Kt(t,e,s,a,o,r=null){var n=t,l={flags:e,items:new Map,first:null};ke&&Vo();var f=null,g=!1,d=Xo(()=>{var m=s();return qo(m)?m:m==null?[]:xi(m)});Yo(()=>{var m=i(d),v=m.length;if(g&&v===0)return;g=v===0;let E=!1;if(ke){var j=n.data===Ko;j!==(v===0)&&(n=Ja(),ei(n),Qs(!1),E=!0)}if(ke){for(var ae=null,H,T=0;T<v;T++){if(xt.nodeType===8&&xt.data===Qo){n=xt,E=!0,Qs(!1);break}var O=m[T],K=a(O,T);H=Si(xt,l,ae,null,O,K,T,o,e,s),l.items.set(K,H),ae=H}v>0&&ei(Ja())}ke||jr(m,l,n,o,e,a,s),r!==null&&(v===0?f?bi(f):f=yi(()=>r(n)):f!==null&&Zo(f,()=>{f=null})),E&&Qs(!0),i(d)}),ke&&(n=xt)}function jr(t,e,s,a,o,r,n){var l=t.length,f=e.items,g=e.first,d=g,m,v=null,E=[],j=[],ae,H,T,O;for(O=0;O<l;O+=1){if(ae=t[O],H=r(ae,O),T=f.get(H),T===void 0){var K=d?d.e.nodes_start:s;v=Si(K,e,v,v===null?e.first:v.next,ae,H,O,a,o,n),f.set(H,v),E=[],j=[],d=v.next;continue}if(Tr(T,ae,O),(T.e.f&Zs)!==0&&bi(T.e),T!==d){if(m!==void 0&&m.has(T)){if(E.length<j.length){var ne=j[0],de;v=ne.prev;var Le=E[0],Z=E[E.length-1];for(de=0;de<E.length;de+=1)ri(E[de],ne,s);for(de=0;de<j.length;de+=1)m.delete(j[de]);Ce(e,Le.prev,Z.next),Ce(e,v,Le),Ce(e,Z,ne),d=ne,v=Z,O-=1,E=[],j=[]}else m.delete(T),ri(T,d,s),Ce(e,T.prev,T.next),Ce(e,T,v===null?e.first:v.next),Ce(e,v,T),v=T;continue}for(E=[],j=[];d!==null&&d.k!==H;)(d.e.f&Zs)===0&&(m??(m=new Set)).add(d),j.push(d),d=d.next;if(d===null)continue;T=d}E.push(T),v=T,d=T.next}if(d!==null||m!==void 0){for(var re=m===void 0?[]:xi(m);d!==null;)(d.e.f&Zs)===0&&re.push(d),d=d.next;var We=re.length;if(We>0){var ye=null;$r(e,re,ye,f)}}si.first=e.first&&e.first.e,si.last=v&&v.e}function Tr(t,e,s,a){tr(t.v,e),t.i=s}function Si(t,e,s,a,o,r,n,l,f,g){var d=(f&rr)!==0,m=(f&nr)===0,v=d?m?Jo(o):ti(o):o,E=(f&er)===0?n:ti(n),j={i:E,v,k:r,a:null,e:null,prev:s,next:a};try{return j.e=yi(()=>l(t,v,E,g),ke),j.e.prev=s&&s.e,j.e.next=a&&a.e,s===null?e.first=j:(s.next=j,s.e.next=j.e),a!==null&&(a.prev=j,a.e.prev=j.e),j}finally{}}function ri(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,o=e?e.e.nodes_start:s,r=t.e.nodes_start;r!==a;){var n=lr(r);o.before(r),r=n}}function Ce(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}const ni=[...` 	
\r\f \v\uFEFF`];function Lr(t,e,s){var a=t==null?"":""+t;if(e&&(a=a?a+" "+e:e),s){for(var o in s)if(s[o])a=a?a+" "+o:o;else if(a.length)for(var r=o.length,n=0;(n=a.indexOf(o,n))>=0;){var l=n+r;(n===0||ni.includes(a[n-1]))&&(l===a.length||ni.includes(a[l]))?a=(n===0?"":a.substring(0,n))+a.substring(l+1):n=l}}return a===""?null:a}function na(t,e,s,a,o,r){var n=t.__className;if(ke||n!==s){var l=Lr(s,a,r);(!ke||l!==t.getAttribute("class"))&&(l==null?t.removeAttribute("class"):e?t.className=l:t.setAttribute("class",l)),t.__className=s}else if(r)for(var f in r){var g=!!r[f];(o==null||g!==!!o[f])&&t.classList.toggle(f,g)}return r}function Rr(t){if(ke){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;y(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var o=t.checked;y(t,"checked",null),t.checked=o}}};t.__on_r=s,cr(s),Do()}}function y(t,e,s,a){var o=t.__attributes??(t.__attributes={});ke&&(o[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||o[e]!==(o[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[dr]=s),s==null?t.removeAttribute(e):typeof s!="string"&&Pr(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var li=new Map;function Pr(t){var e=li.get(t.nodeName);if(e)return e;li.set(t.nodeName,e=[]);for(var s,a=t,o=Element.prototype;o!==a;){s=ur(a);for(var r in s)s[r].set&&e.push(r);a=pr(a)}return e}function Or(t,e,s=e){var a=fr();Uo(t,"input",o=>{var r=o?t.defaultValue:t.value;if(r=ta(t)?sa(r):r,s(r),a&&r!==(r=e())){var n=t.selectionStart,l=t.selectionEnd;t.value=r??"",l!==null&&(t.selectionStart=n,t.selectionEnd=Math.min(l,t.value.length))}}),(ke&&t.defaultValue!==t.value||hr(e)==null&&t.value)&&s(ta(t)?sa(t.value):t.value),gr(()=>{var o=e();ta(t)&&o===sa(t.value)||t.type==="date"&&!o&&!t.value||o!==t.value&&(t.value=o??"")})}function ta(t){var e=t.type;return e==="number"||e==="range"}function sa(t){return t===""?null:+t}function Ir(t){return function(...e){var s=e[0];return s.preventDefault(),t==null?void 0:t.apply(this,e)}}const la=[];Me.handleByNamedList(I.Environment,la);async function Cr(t){if(!t)for(let e=0;e<la.length;e++){const s=la[e];if(s.value.test()){await s.value.load();return}}}let _t;function Br(){if(typeof _t=="boolean")return _t;try{_t=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{_t=!1}return _t}var Ei=(t=>(t[t.NONE=0]="NONE",t[t.COLOR=16384]="COLOR",t[t.STENCIL=1024]="STENCIL",t[t.DEPTH=256]="DEPTH",t[t.COLOR_DEPTH=16640]="COLOR_DEPTH",t[t.COLOR_STENCIL=17408]="COLOR_STENCIL",t[t.DEPTH_STENCIL=1280]="DEPTH_STENCIL",t[t.ALL=17664]="ALL",t))(Ei||{});class Fr{constructor(e){this.items=[],this._name=e}emit(e,s,a,o,r,n,l,f){const{name:g,items:d}=this;for(let m=0,v=d.length;m<v;m++)d[m][g](e,s,a,o,r,n,l,f);return this}add(e){return e[this._name]&&(this.remove(e),this.items.push(e)),this}remove(e){const s=this.items.indexOf(e);return s!==-1&&this.items.splice(s,1),this}contains(e){return this.items.indexOf(e)!==-1}removeAll(){return this.items.length=0,this}destroy(){this.removeAll(),this.items=null,this._name=null}get empty(){return this.items.length===0}get name(){return this._name}}const Mr=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"],$i=class ji extends br{constructor(e){super(),this.runners=Object.create(null),this.renderPipes=Object.create(null),this._initOptions={},this._systemsHash=Object.create(null),this.type=e.type,this.name=e.name,this.config=e;const s=[...Mr,...this.config.runners??[]];this._addRunners(...s),this._unsafeEvalCheck()}async init(e={}){const s=e.skipExtensionImports===!0?!0:e.manageImports===!1;await Cr(s),this._addSystems(this.config.systems),this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(const a in this._systemsHash)e={...this._systemsHash[a].constructor.defaultOptions,...e};e={...ji.defaultOptions,...e},this._roundPixels=e.roundPixels?1:0;for(let a=0;a<this.runners.init.items.length;a++)await this.runners.init.items[a].init(e);this._initOptions=e}render(e,s){let a=e;if(a instanceof fa&&(a={container:a},s&&(Vt(Yt,"passing a second argument is deprecated, please use render options instead"),a.target=s.renderTexture)),a.target||(a.target=this.view.renderTarget),a.target===this.view.renderTarget&&(this._lastObjectRendered=a.container,a.clearColor??(a.clearColor=this.background.colorRgba),a.clear??(a.clear=this.background.clearBeforeRender)),a.clearColor){const o=Array.isArray(a.clearColor)&&a.clearColor.length===4;a.clearColor=o?a.clearColor:qs.shared.setValue(a.clearColor).toArray()}a.transform||(a.container.updateLocalTransform(),a.transform=a.container.localTransform),a.container.enableRenderGroup(),this.runners.prerender.emit(a),this.runners.renderStart.emit(a),this.runners.render.emit(a),this.runners.renderEnd.emit(a),this.runners.postrender.emit(a)}resize(e,s,a){const o=this.view.resolution;this.view.resize(e,s,a),this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution),a!==void 0&&a!==o&&this.runners.resolutionChange.emit(a)}clear(e={}){const s=this;e.target||(e.target=s.renderTarget.renderTarget),e.clearColor||(e.clearColor=this.background.colorRgba),e.clear??(e.clear=Ei.ALL);const{clear:a,clearColor:o,target:r}=e;qs.shared.setValue(o??this.background.colorRgba),s.renderTarget.clear(r,a,qs.shared.toArray())}get resolution(){return this.view.resolution}set resolution(e){this.view.resolution=e,this.runners.resolutionChange.emit(e)}get width(){return this.view.texture.frame.width}get height(){return this.view.texture.frame.height}get canvas(){return this.view.canvas}get lastObjectRendered(){return this._lastObjectRendered}get renderingToScreen(){return this.renderTarget.renderingToScreen}get screen(){return this.view.screen}_addRunners(...e){e.forEach(s=>{this.runners[s]=new Fr(s)})}_addSystems(e){let s;for(s in e){const a=e[s];this._addSystem(a.value,a.name)}}_addSystem(e,s){const a=new e(this);if(this[s])throw new Error(`Whoops! The name "${s}" is already in use`);this[s]=a,this._systemsHash[s]=a;for(const o in this.runners)this.runners[o].add(a);return this}_addPipes(e,s){const a=s.reduce((o,r)=>(o[r.name]=r.value,o),{});e.forEach(o=>{const r=o.value,n=o.name,l=a[n];this.renderPipes[n]=new r(this,l?new l:null)})}destroy(e=!1){this.runners.destroy.items.reverse(),this.runners.destroy.emit(e),Object.values(this.runners).forEach(s=>{s.destroy()}),this._systemsHash=null,this.renderPipes=null}generateTexture(e){return this.textureGenerator.generateTexture(e)}get roundPixels(){return!!this._roundPixels}_unsafeEvalCheck(){if(!Br())throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}resetState(){this.runners.resetState.emit()}};$i.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};let Ti=$i,Gt;function Wr(t){return Gt!==void 0||(Gt=(()=>{var s;const e={stencil:!0,failIfMajorPerformanceCaveat:t??Ti.defaultOptions.failIfMajorPerformanceCaveat};try{if(!he.get().getWebGLRenderingContext())return!1;let o=he.get().createCanvas().getContext("webgl",e);const r=!!((s=o==null?void 0:o.getContextAttributes())!=null&&s.stencil);if(o){const n=o.getExtension("WEBGL_lose_context");n&&n.loseContext()}return o=null,r}catch{return!1}})()),Gt}let Ht;async function Nr(t={}){return Ht!==void 0||(Ht=await(async()=>{const e=he.get().getNavigator().gpu;if(!e)return!1;try{return await(await e.requestAdapter(t)).requestDevice(),!0}catch{return!1}})()),Ht}const ci=["webgl","webgpu","canvas"];async function zr(t){let e=[];t.preference?(e.push(t.preference),ci.forEach(r=>{r!==t.preference&&e.push(r)})):e=ci.slice();let s,a={};for(let r=0;r<e.length;r++){const n=e[r];if(n==="webgpu"&&await Nr()){const{WebGPURenderer:l}=await ai(async()=>{const{WebGPURenderer:f}=await import("./CkWkdRg6.js");return{WebGPURenderer:f}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);s=l,a={...t,...t.webgpu};break}else if(n==="webgl"&&Wr(t.failIfMajorPerformanceCaveat??Ti.defaultOptions.failIfMajorPerformanceCaveat)){const{WebGLRenderer:l}=await ai(async()=>{const{WebGLRenderer:f}=await import("./CrG-BmEX.js");return{WebGLRenderer:f}},__vite__mapDeps([7,1,2,3,5,6,4]),import.meta.url);s=l,a={...t,...t.webgl};break}else if(n==="canvas")throw a={...t},new Error("CanvasRenderer is not yet implemented")}if(delete a.webgpu,delete a.webgl,!s)throw new Error("No available renderer for the current environment");const o=new s;return await o.init(a),o}const Li="8.8.1";class Ri{static init(){var e;(e=globalThis.__PIXI_APP_INIT__)==null||e.call(globalThis,this,Li)}static destroy(){}}Ri.extension=I.Application;class Dr{constructor(e){this._renderer=e}init(){var e;(e=globalThis.__PIXI_RENDERER_INIT__)==null||e.call(globalThis,this._renderer,Li)}destroy(){this._renderer=null}}Dr.extension={type:[I.WebGLSystem,I.WebGPUSystem],name:"initHook",priority:-10};const Pi=class ca{constructor(...e){this.stage=new fa,e[0]!==void 0&&Vt(Yt,"Application constructor options are deprecated, please use Application.init() instead.")}async init(e){e={...e},this.renderer=await zr(e),ca._plugins.forEach(s=>{s.init.call(this,e)})}render(){this.renderer.render({container:this.stage})}get canvas(){return this.renderer.canvas}get view(){return Vt(Yt,"Application.view is deprecated, please use Application.canvas instead."),this.renderer.canvas}get screen(){return this.renderer.screen}destroy(e=!1,s=!1){const a=ca._plugins.slice(0);a.reverse(),a.forEach(o=>{o.destroy.call(this)}),this.stage.destroy(s),this.stage=null,this.renderer.destroy(e),this.renderer=null}};Pi._plugins=[];let Oi=Pi;Me.handleByList(I.Application,Oi._plugins);Me.add(Ri);class Ii extends kr{constructor(e,s){super();const{textures:a,data:o}=e;Object.keys(o.pages).forEach(r=>{const n=o.pages[parseInt(r,10)],l=a[n.id];this.pages.push({texture:l})}),Object.keys(o.chars).forEach(r=>{const n=o.chars[r],{frame:l,source:f}=a[n.page],g=new yr(n.x+l.x,n.y+l.y,n.width,n.height),d=new Ge({source:f,frame:g});this.chars[r]={id:r.codePointAt(0),xOffset:n.xOffset,yOffset:n.yOffset,xAdvance:n.xAdvance,kerning:n.kerning??{},texture:d}}),this.baseRenderedFontSize=o.fontSize,this.baseMeasurementFontSize=o.fontSize,this.fontMetrics={ascent:0,descent:0,fontSize:o.fontSize},this.baseLineOffset=o.baseLineOffset,this.lineHeight=o.lineHeight,this.fontFamily=o.fontFamily,this.distanceField=o.distanceField??{type:"none",range:0},this.url=s}destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){const{texture:s}=this.pages[e];s.destroy(!0)}this.pages=null}static install(e){oi.install(e)}static uninstall(e){oi.uninstall(e)}}const aa={test(t){return typeof t=="string"&&t.startsWith("info face=")},parse(t){const e=t.match(/^[a-z]+\s+.+$/gm),s={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const m in e){const v=e[m].match(/^[a-z]+/gm)[0],E=e[m].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),j={};for(const ae in E){const H=E[ae].split("="),T=H[0],O=H[1].replace(/"/gm,""),K=parseFloat(O),ne=isNaN(K)?O:K;j[T]=ne}s[v].push(j)}const a={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},[o]=s.info,[r]=s.common,[n]=s.distanceField??[];n&&(a.distanceField={range:parseInt(n.distanceRange,10),type:n.fieldType}),a.fontSize=parseInt(o.size,10),a.fontFamily=o.face,a.lineHeight=parseInt(r.lineHeight,10);const l=s.page;for(let m=0;m<l.length;m++)a.pages.push({id:parseInt(l[m].id,10)||0,file:l[m].file});const f={};a.baseLineOffset=a.lineHeight-parseInt(r.base,10);const g=s.char;for(let m=0;m<g.length;m++){const v=g[m],E=parseInt(v.id,10);let j=v.letter??v.char??String.fromCharCode(E);j==="space"&&(j=" "),f[E]=j,a.chars[j]={id:E,page:parseInt(v.page,10)||0,x:parseInt(v.x,10),y:parseInt(v.y,10),width:parseInt(v.width,10),height:parseInt(v.height,10),xOffset:parseInt(v.xoffset,10),yOffset:parseInt(v.yoffset,10),xAdvance:parseInt(v.xadvance,10),kerning:{}}}const d=s.kerning||[];for(let m=0;m<d.length;m++){const v=parseInt(d[m].first,10),E=parseInt(d[m].second,10),j=parseInt(d[m].amount,10);a.chars[f[E]].kerning[f[v]]=j}return a}},di={test(t){const e=t;return typeof e!="string"&&"getElementsByTagName"in e&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(t){const e={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0},s=t.getElementsByTagName("info")[0],a=t.getElementsByTagName("common")[0],o=t.getElementsByTagName("distanceField")[0];o&&(e.distanceField={type:o.getAttribute("fieldType"),range:parseInt(o.getAttribute("distanceRange"),10)});const r=t.getElementsByTagName("page"),n=t.getElementsByTagName("char"),l=t.getElementsByTagName("kerning");e.fontSize=parseInt(s.getAttribute("size"),10),e.fontFamily=s.getAttribute("face"),e.lineHeight=parseInt(a.getAttribute("lineHeight"),10);for(let g=0;g<r.length;g++)e.pages.push({id:parseInt(r[g].getAttribute("id"),10)||0,file:r[g].getAttribute("file")});const f={};e.baseLineOffset=e.lineHeight-parseInt(a.getAttribute("base"),10);for(let g=0;g<n.length;g++){const d=n[g],m=parseInt(d.getAttribute("id"),10);let v=d.getAttribute("letter")??d.getAttribute("char")??String.fromCharCode(m);v==="space"&&(v=" "),f[m]=v,e.chars[v]={id:m,page:parseInt(d.getAttribute("page"),10)||0,x:parseInt(d.getAttribute("x"),10),y:parseInt(d.getAttribute("y"),10),width:parseInt(d.getAttribute("width"),10),height:parseInt(d.getAttribute("height"),10),xOffset:parseInt(d.getAttribute("xoffset"),10),yOffset:parseInt(d.getAttribute("yoffset"),10),xAdvance:parseInt(d.getAttribute("xadvance"),10),kerning:{}}}for(let g=0;g<l.length;g++){const d=parseInt(l[g].getAttribute("first"),10),m=parseInt(l[g].getAttribute("second"),10),v=parseInt(l[g].getAttribute("amount"),10);e.chars[f[m]].kerning[f[d]]=v}return e}},pi={test(t){return typeof t=="string"&&t.includes("<font>")?di.test(he.get().parseXML(t)):!1},parse(t){return di.parse(he.get().parseXML(t))}},Ur=[".xml",".fnt"],Gr={extension:{type:I.CacheParser,name:"cacheBitmapFont"},test:t=>t instanceof Ii,getCacheableAssets(t,e){const s={};return t.forEach(a=>{s[a]=e,s[`${a}-bitmap`]=e}),s[`${e.fontFamily}-bitmap`]=e,s}},Hr={extension:{type:I.LoadParser,priority:nt.Normal},name:"loadBitmapFont",test(t){return Ur.includes(He.extname(t).toLowerCase())},async testParse(t){return aa.test(t)||pi.test(t)},async parse(t,e,s){const a=aa.test(t)?aa.parse(t):pi.parse(t),{src:o}=e,{pages:r}=a,n=[],l=a.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let m=0;m<r.length;++m){const v=r[m].file;let E=He.join(He.dirname(o),v);E=xr(E,o),n.push({src:E,data:l})}const f=await s.load(n),g=n.map(m=>f[m.src]);return new Ii({data:a,textures:g},o)},async load(t,e){return await(await he.get().fetch(t)).text()},async unload(t,e,s){await Promise.all(t.pages.map(a=>s.unload(a.texture.source._sourceOrigin))),t.destroy()}};class Vr{constructor(e,s=!1){this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=s}add(e){e.forEach(s=>{this._assetList.push(s)}),this.verbose&&console.log("[BackgroundLoader] assets: ",this._assetList),this._isActive&&!this._isLoading&&this._next()}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=[],s=Math.min(this._assetList.length,this._maxConcurrent);for(let a=0;a<s;a++)e.push(this._assetList.pop());await this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e){this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}const Yr={extension:{type:I.CacheParser,name:"cacheTextureArray"},test:t=>Array.isArray(t)&&t.every(e=>e instanceof Ge),getCacheableAssets:(t,e)=>{const s={};return t.forEach(a=>{e.forEach((o,r)=>{s[a+(r===0?"":r+1)]=o})}),s}};async function Ci(t){if("Image"in globalThis)return new Promise(e=>{const s=new Image;s.onload=()=>{e(!0)},s.onerror=()=>{e(!1)},s.src=t});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await fetch(t)).blob();await createImageBitmap(e)}catch{return!1}return!0}return!1}const Xr={extension:{type:I.DetectionParser,priority:1},test:async()=>Ci("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async t=>[...t,"avif"],remove:async t=>t.filter(e=>e!=="avif")},ui=["png","jpg","jpeg"],Kr={extension:{type:I.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async t=>[...t,...ui],remove:async t=>t.filter(e=>!ui.includes(e))},Qr="WorkerGlobalScope"in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;function ha(t){return Qr?!1:document.createElement("video").canPlayType(t)!==""}const Zr={extension:{type:I.DetectionParser,priority:0},test:async()=>ha("video/mp4"),add:async t=>[...t,"mp4","m4v"],remove:async t=>t.filter(e=>e!=="mp4"&&e!=="m4v")},qr={extension:{type:I.DetectionParser,priority:0},test:async()=>ha("video/ogg"),add:async t=>[...t,"ogv"],remove:async t=>t.filter(e=>e!=="ogv")},Jr={extension:{type:I.DetectionParser,priority:0},test:async()=>ha("video/webm"),add:async t=>[...t,"webm"],remove:async t=>t.filter(e=>e!=="webm")},en={extension:{type:I.DetectionParser,priority:0},test:async()=>Ci("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async t=>[...t,"webp"],remove:async t=>t.filter(e=>e!=="webp")};class tn{constructor(){this._parsers=[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,s,a)=>(this._parsersValidated=!1,e[s]=a,!0)}),this.promiseCache={}}reset(){this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,s){const a={promise:null,parser:null};return a.promise=(async()=>{var n,l;let o=null,r=null;if(s.loadParser&&(r=this._parserHash[s.loadParser],r||Be(`[Assets] specified load parser "${s.loadParser}" not found while loading ${e}`)),!r){for(let f=0;f<this.parsers.length;f++){const g=this.parsers[f];if(g.load&&((n=g.test)!=null&&n.call(g,e,s,this))){r=g;break}}if(!r)return Be(`[Assets] ${e} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),null}o=await r.load(e,s,this),a.parser=r;for(let f=0;f<this.parsers.length;f++){const g=this.parsers[f];g.parse&&g.parse&&await((l=g.testParse)==null?void 0:l.call(g,o,s,this))&&(o=await g.parse(o,s,this)||o,a.parser=g)}return o})(),a}async load(e,s){this._parsersValidated||this._validateParsers();let a=0;const o={},r=wi(e),n=wt(e,g=>({alias:[g],src:g,data:{}})),l=n.length,f=n.map(async g=>{const d=He.toAbsolute(g.src);if(!o[g.src])try{this.promiseCache[d]||(this.promiseCache[d]=this._getLoadPromiseAndParser(d,g)),o[g.src]=await this.promiseCache[d].promise,s&&s(++a/l)}catch(m){throw delete this.promiseCache[d],delete o[g.src],new Error(`[Loader.load] Failed to load ${d}.
${m}`)}});return await Promise.all(f),r?o[n[0].src]:o}async unload(e){const a=wt(e,o=>({alias:[o],src:o})).map(async o=>{var l,f;const r=He.toAbsolute(o.src),n=this.promiseCache[r];if(n){const g=await n.promise;delete this.promiseCache[r],await((f=(l=n.parser)==null?void 0:l.unload)==null?void 0:f.call(l,g,o,this))}});await Promise.all(a)}_validateParsers(){this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,s)=>(s.name?e[s.name]&&Be(`[Assets] loadParser name conflict "${s.name}"`):Be("[Assets] loadParser should have a name"),{...e,[s.name]:s}),{})}}function ct(t,e){if(Array.isArray(e)){for(const s of e)if(t.startsWith(`data:${s}`))return!0;return!1}return t.startsWith(`data:${e}`)}const sn=".json",an="application/json",on={extension:{type:I.LoadParser,priority:nt.Low},name:"loadJson",test(t){return ct(t,an)||lt(t,sn)},async load(t){return await(await he.get().fetch(t)).json()}},rn=".txt",nn="text/plain",ln={name:"loadTxt",extension:{type:I.LoadParser,priority:nt.Low,name:"loadTxt"},test(t){return ct(t,nn)||lt(t,rn)},async load(t){return await(await he.get().fetch(t)).text()}},cn=["normal","bold","100","200","300","400","500","600","700","800","900"],dn=[".ttf",".otf",".woff",".woff2"],pn=["font/ttf","font/otf","font/woff","font/woff2"],un=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function fn(t){const e=He.extname(t),o=He.basename(t,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(l=>l.charAt(0).toUpperCase()+l.slice(1));let r=o.length>0;for(const l of o)if(!l.match(un)){r=!1;break}let n=o.join(" ");return r||(n=`"${n.replace(/[\\"]/g,"\\$&")}"`),n}const hn=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function gn(t){return hn.test(t)?t:encodeURI(t)}const vn={extension:{type:I.LoadParser,priority:nt.Low},name:"loadWebFont",test(t){return ct(t,pn)||lt(t,dn)},async load(t,e){var a,o,r;const s=he.get().getFontFaceSet();if(s){const n=[],l=((a=e.data)==null?void 0:a.family)??fn(t),f=((r=(o=e.data)==null?void 0:o.weights)==null?void 0:r.filter(d=>cn.includes(d)))??["normal"],g=e.data??{};for(let d=0;d<f.length;d++){const m=f[d],v=new FontFace(l,`url(${gn(t)})`,{...g,weight:m});await v.load(),s.add(v),n.push(v)}return Te.set(`${l}-and-url`,{url:t,fontFaces:n}),n.length===1?n[0]:n}return Be("[loadWebFont] FontFace API is not supported. Skipping loading font"),null},unload(t){(Array.isArray(t)?t:[t]).forEach(e=>{Te.remove(`${e.family}-and-url`),he.get().getFontFaceSet().delete(e)})}};function ga(t,e=1){var a;const s=(a=Qt.RETINA_PREFIX)==null?void 0:a.exec(t);return s?parseFloat(s[1]):e}function va(t,e,s){t.label=s,t._sourceOrigin=s;const a=new Ge({source:t,label:s}),o=()=>{delete e.promiseCache[s],Te.has(s)&&Te.remove(s)};return a.source.once("destroy",()=>{e.promiseCache[s]&&(Be("[Assets] A TextureSource managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the TextureSource."),o())}),a.once("destroy",()=>{t.destroyed||(Be("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),o())}),a}const mn=".svg",bn="image/svg+xml",yn={extension:{type:I.LoadParser,priority:nt.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(t){return ct(t,bn)||lt(t,mn)},async load(t,e,s){var a;return((a=e.data)==null?void 0:a.parseAsGraphicsContext)??this.config.parseAsGraphicsContext?_n(t):xn(t,e,s,this.config.crossOrigin)},unload(t){t.destroy(!0)}};async function xn(t,e,s,a){var H,T,O;const r=await(await he.get().fetch(t)).blob(),n=URL.createObjectURL(r),l=new Image;l.src=n,l.crossOrigin=a,await l.decode(),URL.revokeObjectURL(n);const f=document.createElement("canvas"),g=f.getContext("2d"),d=((H=e.data)==null?void 0:H.resolution)||ga(t),m=((T=e.data)==null?void 0:T.width)??l.width,v=((O=e.data)==null?void 0:O.height)??l.height;f.width=m*d,f.height=v*d,g.drawImage(l,0,0,m*d,v*d);const{parseAsGraphicsContext:E,...j}=e.data??{},ae=new Ai({resource:f,alphaMode:"premultiply-alpha-on-upload",resolution:d,...j});return va(ae,s,t)}async function _n(t){const s=await(await he.get().fetch(t)).text(),a=new Sr;return a.svg(s),a}const wn=`(function () {
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
`;let ot=null,da=class{constructor(){ot||(ot=URL.createObjectURL(new Blob([wn],{type:"application/javascript"}))),this.worker=new Worker(ot)}};da.revokeObjectURL=function(){ot&&(URL.revokeObjectURL(ot),ot=null)};const An=`(function () {
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
`;let rt=null;class Bi{constructor(){rt||(rt=URL.createObjectURL(new Blob([An],{type:"application/javascript"}))),this.worker=new Worker(rt)}}Bi.revokeObjectURL=function(){rt&&(URL.revokeObjectURL(rt),rt=null)};let fi=0,ia;class kn{constructor(){this._initialized=!1,this._createdWorkers=0,this._workerPool=[],this._queue=[],this._resolveHash={}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>{const{worker:s}=new da;s.addEventListener("message",a=>{s.terminate(),da.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e,s){var a;return this._run("loadImageBitmap",[e,(a=s==null?void 0:s.data)==null?void 0:a.alphaMode])}async _initWorkers(){this._initialized||(this._initialized=!0)}_getWorker(){ia===void 0&&(ia=navigator.hardwareConcurrency||4);let e=this._workerPool.pop();return!e&&this._createdWorkers<ia&&(this._createdWorkers++,e=new Bi().worker,e.addEventListener("message",s=>{this._complete(s.data),this._returnWorker(s.target),this._next()})),e}_returnWorker(e){this._workerPool.push(e)}_complete(e){e.error!==void 0?this._resolveHash[e.uuid].reject(e.error):this._resolveHash[e.uuid].resolve(e.data),this._resolveHash[e.uuid]=null}async _run(e,s){await this._initWorkers();const a=new Promise((o,r)=>{this._queue.push({id:e,arguments:s,resolve:o,reject:r})});return this._next(),a}_next(){if(!this._queue.length)return;const e=this._getWorker();if(!e)return;const s=this._queue.pop(),a=s.id;this._resolveHash[fi]={resolve:s.resolve,reject:s.reject},e.postMessage({data:s.arguments,uuid:fi++,id:a})}}const hi=new kn,Sn=[".jpeg",".jpg",".png",".webp",".avif"],En=["image/jpeg","image/png","image/webp","image/avif"];async function $n(t,e){var o;const s=await he.get().fetch(t);if(!s.ok)throw new Error(`[loadImageBitmap] Failed to fetch ${t}: ${s.status} ${s.statusText}`);const a=await s.blob();return((o=e==null?void 0:e.data)==null?void 0:o.alphaMode)==="premultiplied-alpha"?createImageBitmap(a,{premultiplyAlpha:"none"}):createImageBitmap(a)}const Fi={name:"loadTextures",extension:{type:I.LoadParser,priority:nt.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(t){return ct(t,En)||lt(t,Sn)},async load(t,e,s){var r;let a=null;globalThis.createImageBitmap&&this.config.preferCreateImageBitmap?this.config.preferWorkers&&await hi.isImageBitmapSupported()?a=await hi.loadImageBitmap(t,e):a=await $n(t,e):a=await new Promise((n,l)=>{a=new Image,a.crossOrigin=this.config.crossOrigin,a.src=t,a.complete?n(a):(a.onload=()=>{n(a)},a.onerror=l)});const o=new Ai({resource:a,alphaMode:"premultiply-alpha-on-upload",resolution:((r=e.data)==null?void 0:r.resolution)||ga(t),...e.data});return va(o,s,t)},unload(t){t.destroy(!0)}},Mi=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"],jn=Mi.map(t=>`video/${t.substring(1)}`);function Tn(t,e,s){s===void 0&&!e.startsWith("data:")?t.crossOrigin=Rn(e):s!==!1&&(t.crossOrigin=typeof s=="string"?s:"anonymous")}function Ln(t){return new Promise((e,s)=>{t.addEventListener("canplaythrough",a),t.addEventListener("error",o),t.load();function a(){r(),e()}function o(n){r(),s(n)}function r(){t.removeEventListener("canplaythrough",a),t.removeEventListener("error",o)}})}function Rn(t,e=globalThis.location){if(t.startsWith("data:"))return"";e||(e=globalThis.location);const s=new URL(t,document.baseURI);return s.hostname!==e.hostname||s.port!==e.port||s.protocol!==e.protocol?"anonymous":""}const Pn={name:"loadVideo",extension:{type:I.LoadParser,name:"loadVideo"},test(t){const e=ct(t,jn),s=lt(t,Mi);return e||s},async load(t,e,s){var f,g;const a={...Js.defaultOptions,resolution:((f=e.data)==null?void 0:f.resolution)||ga(t),alphaMode:((g=e.data)==null?void 0:g.alphaMode)||await _r(),...e.data},o=document.createElement("video"),r={preload:a.autoLoad!==!1?"auto":void 0,"webkit-playsinline":a.playsinline!==!1?"":void 0,playsinline:a.playsinline!==!1?"":void 0,muted:a.muted===!0?"":void 0,loop:a.loop===!0?"":void 0,autoplay:a.autoPlay!==!1?"":void 0};Object.keys(r).forEach(d=>{const m=r[d];m!==void 0&&o.setAttribute(d,m)}),a.muted===!0&&(o.muted=!0),Tn(o,t,a.crossorigin);const n=document.createElement("source");let l;if(t.startsWith("data:"))l=t.slice(5,t.indexOf(";"));else if(!t.startsWith("blob:")){const d=t.split("?")[0].slice(t.lastIndexOf(".")+1).toLowerCase();l=Js.MIME_TYPES[d]||`video/${d}`}return n.src=t,l&&(n.type=l),new Promise(d=>{const m=async()=>{const v=new Js({...a,resource:o});o.removeEventListener("canplay",m),e.data.preload&&await Ln(o),d(va(v,s,t))};o.addEventListener("canplay",m),o.appendChild(n)})},unload(t){t.destroy(!0)}},Wi={extension:{type:I.ResolveParser,name:"resolveTexture"},test:Fi.test,parse:t=>{var e;return{resolution:parseFloat(((e=Qt.RETINA_PREFIX.exec(t))==null?void 0:e[1])??"1"),format:t.split(".").pop(),src:t}}},On={extension:{type:I.ResolveParser,priority:-2,name:"resolveJson"},test:t=>Qt.RETINA_PREFIX.test(t)&&t.endsWith(".json"),parse:Wi.parse};class In{constructor(){this._detections=[],this._initialized=!1,this.resolver=new Qt,this.loader=new tn,this.cache=Te,this._backgroundLoader=new Vr(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var r,n;if(this._initialized){Be("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchParams(e.defaultSearchParams),e.basePath&&(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIdentifier),e.manifest){let l=e.manifest;typeof l=="string"&&(l=await this.load(l)),this.resolver.addManifest(l)}const s=((r=e.texturePreference)==null?void 0:r.resolution)??1,a=typeof s=="number"?[s]:s,o=await this._detectFormats({preferredFormats:(n=e.texturePreference)==null?void 0:n.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:o,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e){this.resolver.add(e)}async load(e,s){this._initialized||await this.init();const a=wi(e),o=wt(e).map(l=>{if(typeof l!="string"){const f=this.resolver.getAlias(l);return f.some(g=>!this.resolver.hasKey(g))&&this.add(l),Array.isArray(f)?f[0]:f}return this.resolver.hasKey(l)||this.add({alias:l,src:l}),l}),r=this.resolver.resolve(o),n=await this._mapLoadToResolve(r,s);return a?n[o[0]]:n}addBundle(e,s){this.resolver.addBundle(e,s)}async loadBundle(e,s){this._initialized||await this.init();let a=!1;typeof e=="string"&&(a=!0,e=[e]);const o=this.resolver.resolveBundle(e),r={},n=Object.keys(o);let l=0,f=0;const g=()=>{s==null||s(++l/f)},d=n.map(m=>{const v=o[m];return f+=Object.keys(v).length,this._mapLoadToResolve(v,g).then(E=>{r[m]=E})});return await Promise.all(d),a?r[e[0]]:r}async backgroundLoad(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(s))}async backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const s=this.resolver.resolveBundle(e);Object.values(s).forEach(a=>{this._backgroundLoader.add(Object.values(a))})}reset(){this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof e=="string")return Te.get(e);const s={};for(let a=0;a<e.length;a++)s[a]=Te.get(e[a]);return s}async _mapLoadToResolve(e,s){const a=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;const o=await this.loader.load(a,s);this._backgroundLoader.active=!0;const r={};return a.forEach(n=>{const l=o[n.src],f=[n.src];n.alias&&f.push(...n.alias),f.forEach(g=>{r[g]=l}),Te.set(f,l)}),r}async unload(e){this._initialized||await this.init();const s=wt(e).map(o=>typeof o!="string"?o.src:o),a=this.resolver.resolve(s);await this._unloadFromResolved(a)}async unloadBundle(e){this._initialized||await this.init(),e=wt(e);const s=this.resolver.resolveBundle(e),a=Object.keys(s).map(o=>this._unloadFromResolved(s[o]));await Promise.all(a)}async _unloadFromResolved(e){const s=Object.values(e);s.forEach(a=>{Te.remove(a.src)}),await this.loader.unload(s)}async _detectFormats(e){let s=[];e.preferredFormats&&(s=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of e.detections)e.skipDetections||await a.test()?s=await a.add(s):e.skipDetections||(s=await a.remove(s));return s=s.filter((a,o)=>s.indexOf(a)===o),s}get detections(){return this._detections}setPreferences(e){this.loader.parsers.forEach(s=>{s.config&&Object.keys(s.config).filter(a=>a in e).forEach(a=>{s.config[a]=e[a]})})}}const it=new In;Me.handleByList(I.LoadParser,it.loader.parsers).handleByList(I.ResolveParser,it.resolver.parsers).handleByList(I.CacheParser,it.cache.parsers).handleByList(I.DetectionParser,it.detections);Me.add(Yr,Kr,Xr,en,Zr,qr,Jr,on,ln,vn,yn,Fi,Pn,Hr,Gr,Wi,On);const gi={loader:I.LoadParser,resolver:I.ResolveParser,cache:I.CacheParser,detection:I.DetectionParser};Me.handle(I.Asset,t=>{const e=t.ref;Object.entries(gi).filter(([s])=>!!e[s]).forEach(([s,a])=>Me.add(Object.assign(e[s],{extension:e[s].extension??a})))},t=>{const e=t.ref;Object.keys(gi).filter(s=>!!e[s]).forEach(s=>Me.remove(e[s]))});class Cn extends wr{constructor(e,s){const{text:a,resolution:o,style:r,anchor:n,width:l,height:f,roundPixels:g,...d}=e;super({...d}),this.batched=!0,this._resolution=null,this._autoResolution=!0,this._didTextUpdate=!0,this._styleClass=s,this.text=a??"",this.style=r,this.resolution=o??null,this.allowChildren=!1,this._anchor=new Ar({_onUpdate:()=>{this.onViewUpdate()}}),n&&(this.anchor=n),this.roundPixels=g??!1,l!==void 0&&(this.width=l),f!==void 0&&(this.height=f)}get anchor(){return this._anchor}set anchor(e){typeof e=="number"?this._anchor.set(e):this._anchor.copyFrom(e)}set text(e){e=e.toString(),this._text!==e&&(this._text=e,this.onViewUpdate())}get text(){return this._text}set resolution(e){this._autoResolution=e===null,this._resolution=e,this.onViewUpdate()}get resolution(){return this._resolution}get style(){return this._style}set style(e){var s;e||(e={}),(s=this._style)==null||s.off("update",this.onViewUpdate,this),e instanceof this._styleClass?this._style=e:this._style=new this._styleClass(e),this._style.on("update",this.onViewUpdate,this),this.onViewUpdate()}get width(){return Math.abs(this.scale.x)*this.bounds.width}set width(e){this._setWidth(e,this.bounds.width)}get height(){return Math.abs(this.scale.y)*this.bounds.height}set height(e){this._setHeight(e,this.bounds.height)}getSize(e){return e||(e={}),e.width=Math.abs(this.scale.x)*this.bounds.width,e.height=Math.abs(this.scale.y)*this.bounds.height,e}setSize(e,s){typeof e=="object"?(s=e.height??e.width,e=e.width):s??(s=e),e!==void 0&&this._setWidth(e,this.bounds.width),s!==void 0&&this._setHeight(s,this.bounds.height)}containsPoint(e){const s=this.bounds.width,a=this.bounds.height,o=-s*this.anchor.x;let r=0;return e.x>=o&&e.x<=o+s&&(r=-a*this.anchor.y,e.y>=r&&e.y<=r+a)}onViewUpdate(){this.didViewUpdate||(this._didTextUpdate=!0),super.onViewUpdate()}_getKey(){return`${this.text}:${this._style.styleKey}:${this._resolution}`}destroy(e=!1){super.destroy(e),this.owner=null,this._bounds=null,this._anchor=null,(typeof e=="boolean"?e:e!=null&&e.style)&&this._style.destroy(e),this._style=null,this._text=null}}function Bn(t,e){let s=t[0]??{};return(typeof s=="string"||t[1])&&(Vt(Yt,`use new ${e}({ text: "hi!", style }) instead`),s={text:s,style:t[1]}),s}class Fn extends Cn{constructor(...e){const s=Bn(e,"Text");super(s,ki),this.renderPipeId="text"}updateBounds(){const e=this._bounds,s=this._anchor,a=Er.measureText(this._text,this._style),{width:o,height:r}=a;e.minX=-s._x*o,e.maxX=e.minX+o,e.minY=-s._y*r,e.maxY=e.minY+r}}var Mn=se('<div class="win-label svelte-27a1cu">BIG WIN!</div> <div class="win-amount-display svelte-27a1cu"> </div>',1),Wn=mi('<use href="#sparkle" class="sparkle svelte-27a1cu"></use>'),Nn=mi('<use href="#vinyl"></use>'),zn=se('<div><!> <svg class="vinyl-canvas svelte-27a1cu" viewBox="0 0 1024 800" xmlns="http://www.w3.org/2000/svg"><defs class="svelte-27a1cu"><symbol id="vinyl" viewBox="-200 -200 400 400" class="svelte-27a1cu"><circle cx="0" cy="0" r="180" fill="#0b0b0b" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="150" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.3" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="120" fill="none" stroke="#1a1a1a" stroke-width="2" opacity="0.25" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="90" fill="none" stroke="#1a1a1a" stroke-width="1.5" opacity="0.2" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="55" fill="var(--label-color)" class="svelte-27a1cu"></circle><circle cx="0" cy="0" r="6" fill="#ffffff" class="svelte-27a1cu"></circle><ellipse cx="-15" cy="-15" rx="20" ry="15" fill="#ffffff" opacity="0.3" transform="rotate(-30)" class="svelte-27a1cu"></ellipse></symbol><symbol id="sparkle" viewBox="-12 -12 24 24" class="svelte-27a1cu"><polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ffd966" class="svelte-27a1cu"></polygon><circle cx="0" cy="0" r="2" fill="#ffffff" class="svelte-27a1cu"></circle></symbol><symbol id="confetti" viewBox="-3 -3 6 6" class="svelte-27a1cu"><circle cx="0" cy="0" r="2" fill="var(--confetti-color)" class="svelte-27a1cu"></circle></symbol></defs><!><!></svg></div>');function Dn(t,e){pa(e,!0);let s=ra(e,"winLevel",3,"small"),a=ra(e,"winAmount",3,0),o=R(!1),r=R(!1);const n={small:{vinyls:5,sparkles:8,maxRadius:100},medium:{vinyls:12,sparkles:16,maxRadius:140},jackpot:{vinyls:24,sparkles:30,maxRadius:180}},l=Ue(()=>n[s()]),f=["#f04e37","#ffd966","#ff8533","#4ecdc4","#ff6b9d"];function g(O){const K=[],Le=i(l).maxRadius;for(let Z=0;Z<O;Z++){const re=Math.PI*2*Z/O+Math.random()*.4,We=Math.random()*Le*.7+Le*.2;K.push({x:512+Math.cos(re)*We,y:400+Math.sin(re)*We,rotation:Math.random()*30-15,scale:.3+Math.random()*.25,delay:Z*.05,color:f[Z%f.length]})}return K}function d(O){const K=[];for(let ne=0;ne<O;ne++)K.push({x:100+Math.random()*824,y:50+Math.random()*700,delay:Math.random()*.8,duration:.6+Math.random()*.4,rotation:Math.random()*360});return K}const m=Ue(()=>g(i(l).vinyls)),v=Ue(()=>d(i(l).sparkles));function E(){b(o,!0),b(r,!0),setTimeout(()=>{b(r,!1),setTimeout(()=>{var O;b(o,!1),(O=e.onComplete)==null||O.call(e)},500)},s()==="jackpot"?4e3:s()==="medium"?3e3:2500)}function j(){b(r,!1),setTimeout(()=>{b(o,!1)},500)}var ae=vi(),H=Fe(ae);{var T=O=>{var K=zn();let ne;var de=_(K);{var Le=ye=>{var ie=Mn(),ge=p(Fe(ie),2),V=_(ge,!0);w(ge),ce(Y=>z(V,Y),[()=>a().toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]),D(ye,ie)};pe(de,ye=>{a()>0&&ye(Le)})}var Z=p(de,2),re=p(_(Z));Kt(re,17,()=>i(v),Xt,(ye,ie)=>{var ge=Wn();ce(()=>y(ge,"style",`
            --sx: ${i(ie).x??""}px;
            --sy: ${i(ie).y??""}px;
            --duration: ${i(ie).duration??""}s;
            --sparkle-delay: ${i(ie).delay??""}s;
          `)),D(ye,ge)});var We=p(re);Kt(We,17,()=>i(m),Xt,(ye,ie)=>{var ge=Nn();let V;ce(()=>{V=na(ge,0,"vinyl-group svelte-27a1cu",null,V,{floating:i(r)}),y(ge,"style",`
            --tx: ${i(ie).x??""}px;
            --ty: ${i(ie).y??""}px;
            --scale: ${i(ie).scale??""};
            --rotation: ${i(ie).rotation??""}deg;
            --delay: ${i(ie).delay??""}s;
            --label-color: ${i(ie).color??""};
          `)}),D(ye,ge)}),w(Z),w(K),ce(()=>ne=na(K,1,"vinyl-win-container svelte-27a1cu",null,ne,{visible:i(r),hiding:!i(r)})),D(O,K)};pe(H,O=>{i(o)&&O(T)})}return D(t,ae),ua({show:E,hide:j})}var Un=Go('<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js" class="svelte-tijp0o"><\/script><!---->',1),Gn=se('<p style="color: red;" class="svelte-tijp0o"><strong class="svelte-tijp0o">Error:</strong> </p>'),Hn=se('<div class="svelte-tijp0o"> </div>'),Vn=se('<details class="svelte-tijp0o"><summary class="svelte-tijp0o"> </summary> <!></details>'),Yn=se(`<div style="
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
  " class="svelte-tijp0o"><h3 class="svelte-tijp0o">🎰 Oma-peli Debug</h3> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Status:</strong> </p> <!> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Base:</strong> </p> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">BG URL:</strong> </p> <p class="svelte-tijp0o"><strong class="svelte-tijp0o">Sample:</strong> </p> <!></div>`),Xn=se('<div style="margin: 5px 0; font-size: 1.1em;" class="svelte-tijp0o"> </div>'),Kn=se('<div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;" class="svelte-tijp0o"><span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;" class="svelte-tijp0o"> </span></div>'),Qn=se(`<div style="
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
      " class="svelte-tijp0o">Jatka pelaamista</button></div>`),Zn=se(`<div class="svelte-tijp0o"><h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;" class="svelte-tijp0o">💰 PAYTABLE (81 WAYS)</h2> <div style="margin-bottom: 15px; text-align: center; color: #aaa;" class="svelte-tijp0o">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br class="svelte-tijp0o"> Vähintään 3 symbolia tarvitaan voittoon</div> <div style="display: grid; gap: 10px;" class="svelte-tijp0o"><div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;" class="svelte-tijp0o">👑 PREMIUM SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;" class="svelte-tijp0o">💎 BLUE SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;" class="svelte-tijp0o">🎵 RED SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div> <div style="margin: 5px 0;" class="svelte-tijp0o">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div></div> <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;" class="svelte-tijp0o"><div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;" class="svelte-tijp0o">⭐ SPECIAL SYMBOLS</div> <div style="margin: 5px 0;" class="svelte-tijp0o">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div> <div style="margin: 5px 0;" class="svelte-tijp0o">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div></div></div> <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;" class="svelte-tijp0o">Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br class="svelte-tijp0o"> <span style="color: #ffd700;" class="svelte-tijp0o">Ways = Symbolien määrä per kela kerrottuna</span></div> <button style="
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
      " class="svelte-tijp0o">Sulje</button></div>`),qn=se(`<div style="
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
          " class="svelte-tijp0o">SPIN SPEED</div> <button class="svelte-tijp0o">🐌 SLOW</button> <button class="svelte-tijp0o">⚡ MEDIUM</button> <button class="svelte-tijp0o">🚀 FAST</button></div>`),Jn=se(`<div style="
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
        " class="svelte-tijp0o">⏹ STOP</button></div>`),el=se(`<div style="
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
          " class="svelte-tijp0o">Cancel</button></div>`),tl=se(`<button style="
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
      " class="svelte-tijp0o">🔄 AUTOPLAY</button> <!>`,1),sl=se(`<!> <!> <!> <div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #000;
" class="svelte-tijp0o"><div class="svelte-tijp0o"><div class="svelte-tijp0o"></div> <button style="
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
  " class="svelte-tijp0o">💰 PAYTABLE</button> <button style="
    position: absolute;
    top: 190px;
    right: 20px;
    padding: 10px 15px;
    background-color: rgba(0, 255, 0, 0.3);
    border: 2px solid rgba(0, 255, 0, 0.7);
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    color: white;
    text-shadow: 0 0 5px rgba(0,0,0,0.8);
    z-index: 1000;
    min-width: 180px;
  " class="svelte-tijp0o"></button>  <div class="control-panel-mobile svelte-tijp0o"><img alt="Left End" class="svelte-tijp0o"> <div class="svelte-tijp0o"><div class="svelte-tijp0o"><div class="svelte-tijp0o">BET</div> <div class="svelte-tijp0o"><button title="Decrease Bet" class="svelte-tijp0o"></button> <div class="svelte-tijp0o"> </div> <button title="Increase Bet" class="svelte-tijp0o"></button> <button title="Max Bet" class="svelte-tijp0o">MAX</button></div></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><div class="svelte-tijp0o">BALANCE</div> <div class="svelte-tijp0o"> </div></div> <img alt="Divider" class="svelte-tijp0o"> <div style="position: relative; display: flex; align-items: center; justify-content: center; flex-grow: 0.5;" class="svelte-tijp0o"><div><button title="SPIN" class="svelte-tijp0o"></button></div></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><button title="Autoplay" class="svelte-tijp0o"></button> <img alt="Status bar" class="svelte-tijp0o"></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><button class="svelte-tijp0o"></button> <div class="svelte-tijp0o"> </div> <!></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><button title="Fast Play" class="svelte-tijp0o"></button> <img alt="Status bar" class="svelte-tijp0o"></div> <img alt="Divider" class="svelte-tijp0o"> <div class="svelte-tijp0o"><div class="svelte-tijp0o">WIN</div> <div class="svelte-tijp0o"> </div></div> <img alt="Divider" class="svelte-tijp0o"> <button title="Menu" class="svelte-tijp0o"></button></div> <img alt="Right End" class="svelte-tijp0o"></div> <!>  <div class="debug-panel svelte-tijp0o"><div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;" class="svelte-tijp0o">📊 RTP MONITOR</div> <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;" class="svelte-tijp0o"></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Rounds:</span> <span style="color: #fff;" class="svelte-tijp0o"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Wagered:</span> <span style="color: #ff6666;" class="svelte-tijp0o"> </span></div> <div style="display: flex; justify-content: space-between; margin-bottom: 5px;" class="svelte-tijp0o"><span style="color: #aaa;" class="svelte-tijp0o">Won:</span> <span style="color: #66ff66;" class="svelte-tijp0o"> </span></div> <div style="
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
  " class="svelte-tijp0o"><button class="svelte-tijp0o"> </button> <button class="svelte-tijp0o">Clear Win Log</button> <button class="svelte-tijp0o"> </button> <button class="svelte-tijp0o">🎰 Test Free Spins</button></div></div> <div class="debug-panel svelte-tijp0o"><!></div> <button class="debug-panel svelte-tijp0o"> </button></div></div>`,1);function al(t,e){pa(e,!0);const s="1.2.0",a=13,o=1445,r=1e3,n=1.75,l=-30,f=-10,g=160,d=0,m=750,v=80,E=250,j=-130,ae=-190,H=.5,T=40,O=0,K=-40,ne=1,de="height",Z=Math.round(100*n),re=Math.round(Z*(700/760)),ye=re+10,ie=["a","b","c","d","e","f","g","h","i","j","k","l","emptyslot"],ge=typeof window<"u"&&window.location.hostname.includes("github.io"),V=ge?"/web-sdk/oma-peli/symbols":`${Se}/symbols`,Y=ge?"/web-sdk/oma-peli/controls":`${Se}/controls`,Zt={a:`${V}/Blue_hotrod.jpg`,b:`${V}/Blue_jacket.jpg`,c:`${V}/Blue_rollers.jpg`,d:`${V}/Blue_speakers.jpg`,e:`${V}/Premium_blonde.jpg`,f:`${V}/Premium_brunette.jpg`,g:`${V}/Premium_rocker.jpg`,h:`${V}/New_Wild.jpg`,i:`${V}/Red_burger.jpg`,j:`${V}/Red_fries.jpg`,k:`${V}/Red_milkshake.jpg`,l:`${V}/Scatter.jpg`,emptyslot:`${V}/Emptyslot.jpg`},qt=`${V}/bg_base.jpg`,ma=`${V}/ReelFrames.png`,ba=`${V}/RockABillyReels_logo.png`,Ni={spin:`${Se}/sounds/spin.mp3`,stop:`${Se}/sounds/stop.mp3`,win:`${Se}/sounds/win.mp3`};let Ee=R(!0),Jt={},X=null,ve=null,es=null,ts=null,xe=R(!0),zi=R(!1),At=R(!1),ss=R(945),as=null;const Di={fast:1,medium:10,slow:18};let q=R("medium"),Ve=R(!1);const ya=Math.floor(Math.random()*20)+1,kt={background:`${Se}/music/rockabilly reels loop ${ya}.mp3`,freeSpins:`${Se}/music/rockabilly-loop_long.mp3`,drumHit:`${Se}/music/drum-hit.mp3`,winTheme:`${Se}/music/win-stinger.mp3`};function xa(){if(typeof window>"u"||!window.Howl){console.warn("Howler.js not loaded yet, retrying in 500ms..."),setTimeout(xa,500);return}const c=window.Howl;try{X=new c({src:[kt.background],loop:!0,volume:.3,onload:()=>{console.log("✅ Background music loaded (loop #"+ya+")"),b(zi,!0)},onloaderror:(u,k)=>{console.warn("⚠️ Background music not found:",k)}}),ve=new c({src:[kt.freeSpins],loop:!0,volume:.3,onload:()=>console.log("✅ Free spins music loaded"),onloaderror:(u,k)=>console.warn("⚠️ Free spins music not found:",k)}),es=new c({src:[kt.drumHit],volume:.5,onload:()=>console.log("✅ Drum hit sound loaded"),onloaderror:()=>console.warn("⚠️ Drum hit sound not found")}),ts=new c({src:[kt.winTheme],volume:.6,onload:()=>console.log("✅ Win theme loaded"),onloaderror:()=>console.warn("⚠️ Win theme not found")}),console.log("🎵 Music system initialized (generate music with Suno AI)")}catch(u){console.error("Failed to initialize music system:",u)}}function _a(){const c=i(Q)?ve:X;c&&i(xe)&&!c.playing()&&(c.play(),console.log("🎵 "+(i(Q)?"Free spins":"Background")+" music started"))}function Ui(){X&&X.playing()&&(X.fade(X.volume(),0,500),setTimeout(()=>X.stop(),500)),ve&&ve.playing()&&(ve.fade(ve.volume(),0,500),setTimeout(()=>ve.stop(),500))}function is(){X&&X.playing()&&(X.fade(X.volume(),0,500),setTimeout(()=>X.stop(),500)),ve&&ve.playing()&&(ve.fade(ve.volume(),0,500),setTimeout(()=>ve.stop(),500)),setTimeout(()=>{i(xe)&&_a()},600)}function Gi(){if(X&&X.playing()){const c=X.volume();X.fade(c,0,1e3),setTimeout(()=>{X.stop(),X.volume(.3)},1e3)}}let os=R(!1);function Hi(){b(os,!1),setTimeout(()=>{b(os,!0)},10)}let Ye=null;function Vi(){b(xe,!i(xe)),i(xe)?_a():Ui()}function Yi(){es&&i(xe)&&i(Ee)&&es.play()}function Xi(){ts&&i(xe)&&i(Ee)&&ts.play()}let St=null,Xe=null,dt=null,pt=null,ut=R("Initializing..."),Ke=R(""),_e=[],Re=R(1e3),oe=R(10),wa=R(0);const Aa=1,rs=100;let me=R(!1),Qe=R(0),Ne=R(!1),Et=R(!1),Ki=R(0),ze=!1,$e=null,ns=!1,Ze=R(0),qe=R(0),ft=R(0),ls=R(0),cs=Ue(()=>i(qe)>0?(i(ft)/i(qe)*100).toFixed(2):"0.00"),ds=Ue(()=>i(Ze)>0?(i(ls)/i(Ze)*100).toFixed(2):"0.00"),Q=R(!1),Pe=R(0),De=R(0),$t=R(0),ps=R(0),jt=R(0),us=R(0),Qi=Ue(()=>i(jt)>0?(i(us)/i(jt)*100).toFixed(2):"0.00"),be=R(fe([]));function Zi(c,u,k){const h=new Date().toLocaleString("fi-FI");let x=`
${"=".repeat(60)}
`;x+=`ROUND #${c} - ${h}
`,x+=`Mode: ${i(Q)?"FREE SPINS":"BASE GAME"}
`,x+=`${"=".repeat(60)}
`,u.forEach((S,L)=>{x+=`
Win ${L+1}:
`,x+=`  Symbol: ${S.symbol} (${$a[S.symbol]})
`,x+=`  Count: ${S.count} symbols
`,x+=`  Multiplier: ${S.multiplier}x
`,x+=`  Payout: ${S.payout.toFixed(2)}
`,x+=`  Positions: [${S.positions.join(", ")}]
`}),x+=`
${"─".repeat(60)}
`,x+=`TOTAL WIN: ${k.toFixed(2)}
`,x+=`${"=".repeat(60)}
`,i(be).push(x)}function qi(){const c=`SLOT GAME WIN LOG
Generated: ${new Date().toLocaleString("fi-FI")}
${i(be).join(`
`)}`,u=new Blob([c],{type:"text/plain"}),k=URL.createObjectURL(u),h=document.createElement("a");h.href=k,h.download=`win-log-${Date.now()}.txt`,h.click(),URL.revokeObjectURL(k)}function Ji(){b(be,fe([]))}function eo(){i(Q)||(b(Q,!0),b(Pe,10),b(De,0),je($t),console.log("🎰 TEST MODE: Free spins activated! 10 spins granted."),is())}const to={k:.08,j:.07,i:.07,c:.07,d:.07,b:.07,a:.07,f:.06,e:.05,g:.04,l:.1,h:0,emptyslot:.25},so={k:0,j:0,i:0,c:.07,d:.07,b:.07,a:.07,f:.14,e:.12,g:.11,l:.1,h:0,emptyslot:.25};function ka(c){if(c===6)return Math.random()<.55?"h":"emptyslot";const u=i(Q)?so:to,k=Math.random();let h=0;const x=ie.filter(L=>L!=="h"),S=x.reduce((L,W)=>L+u[W],0);for(const L of x)if(h+=u[L]/S,k<h)return L;return"f"}function Sa(){const c=[];for(let u=0;u<a;u++){const k=ka(u);c.push(k),je(jt),k==="emptyslot"&&je(us)}return c}function Ea(c){return c<3?{col:0,row:c}:c<6?{col:1,row:c-3}:c===6?{col:2,row:0}:c<10?{col:3,row:c-7}:{col:4,row:c-10}}function ht(c,u){return c===0?u:c===1?3+u:c===2?6:c===3?7+u:c===4?10+u:-1}function ao(){if(i(Q)){const c=Math.random();return c<.7?3:c<.92?5:10}else{const c=Math.random();return c<.7?1:c<.92?2:3}}const io={k:{3:.2,4:.6,5:1.5},j:{3:.4,4:1,5:2.5},i:{3:.4,4:1,5:2.5},c:{3:.8,4:2,5:5},d:{3:.8,4:2,5:5},b:{3:1.5,4:4,5:8},a:{3:1.5,4:4,5:8},f:{3:3,4:8,5:20},e:{3:5,4:10,5:25},g:{3:7,4:15,5:50},h:{},l:{},emptyslot:{}};function oo(){var G;const c=[],u=[];for(let $=0;$<a;$++)gt[$]==="l"&&u.push($);if(u.length>=5){const $=u.length;b(Pe,i(Pe)+$),i(Q)?console.log(`🎰 FREE SPINS RETRIGGERED! +${$} FREE SPINS! Total: ${i(Pe)}`):(b(Q,!0),b(De,0),je($t),console.log(`🎰 FREE SPINS TRIGGERED! ${u.length} scatters = ${$} FREE SPINS!`),is()),c.push({symbol:"l",count:u.length,payout:0,positions:u,multiplier:1})}const k=[];for(let $=0;$<3;$++)for(let P=0;P<3;P++)for(let C=0;C<1;C++)for(let B=0;B<3;B++)for(let F=0;F<3;F++){const N=[ht(0,$),ht(1,P),ht(2,C),ht(3,B),ht(4,F)];k.push(N)}console.log(`Generated ${k.length} possible paths (should be 81)`);const h=[];for(const $ of k){const P=$.map(N=>gt[N]);if(P[0]==="emptyslot"||P[0]==="l")continue;let C=null;for(let N=0;N<P.length;N++)if(P[N]!=="h"&&P[N]!=="emptyslot"&&P[N]!=="l"){C=P[N];break}if(!C)continue;let B=0;const F=new Set;for(let N=0;N<$.length;N++){const Ie=$[N],{col:at}=Ea(Ie),ue=P[N];(ue===C||ue==="h")&&F.add(at)}for(let N=0;N<5&&F.has(N);N++)B++;if(B>=3){const Ie=$[0]%3;h.push({symbol:C,length:B,path:$.slice(0,B),startRow:Ie})}}const x=[],S=new Map;for(const $ of h){const P=`${$.symbol}-${$.path.join(",")}`;S.has(P)||S.set(P,[]),S.get(P).push($)}for(const[$,P]of S.entries()){const C=Math.max(...P.map(F=>F.length)),B=P.find(F=>F.length===C);B&&x.push(B)}const L=[],W=new Map;for(const $ of x)W.has($.symbol)||W.set($.symbol,[]),W.get($.symbol).push($);const J=[];for(const[$,P]of W.entries()){const C=Math.max(...P.map(F=>F.length)),B=P.filter(F=>F.length===C);J.push(...B)}const ee=new Map;for(const $ of J){const P=`${$.symbol}-${$.length}`;ee.has(P)||ee.set(P,[]),ee.get(P).push($)}const te=J.length>0?ao():1;for(const[$,P]of ee.entries()){const C=P[0],B=(G=io[C.symbol])==null?void 0:G[C.length];if(B!==void 0&&B>0){const F=new Map;for(const ue of P)for(let le=0;le<ue.length;le++)F.has(le)||F.set(le,new Set),F.get(le).add(ue.path[le]);let N=1;for(let ue=0;ue<C.length;ue++){const le=F.get(ue);N*=le?le.size:1}const Ie=B*i(oe)*N*te;console.log(`  ${C.length}x${C.symbol}: ${N} ways × ${B}x × ${i(oe)} bet × ${te} mult = ${Ie}`);const at=new Set;for(const ue of P)ue.path.forEach(le=>at.add(le));L.push({symbol:C.symbol,count:C.length,payout:Ie,positions:Array.from(at),multiplier:te})}}return c.push(...L),c}let we=R(0),Je=R(fe([])),Oe=R(!1),et=R(!1);const $a={a:"Hot Rod",b:"Jacket",c:"Roller Skates",d:"Microphone",e:"Blonde",f:"Brunette",g:"Rockabilly",h:"WILD",i:"Burger",j:"Fries",k:"Milkshake",l:"SCATTER",emptyslot:"Empty"};function fs(c){if(!i(Ee)||!Jt[c])return;const u=Jt[c];u.currentTime=0,u.play().catch(k=>{console.warn("Äänen toisto epäonnistui:",c,k)})}function ro(c){vt.forEach(u=>U.stage.removeChild(u)),vt=[],c.forEach(u=>{u.positions.forEach(k=>{const h=tt[k],x=new ea().rect(0,0,Z,re).fill({color:16776960,alpha:0}).stroke({color:16766720,width:4});x.x=h.container.x,x.y=h.container.y,U.stage.addChild(x),vt.push(x);let S=0,L=1;const W=.05;U.ticker.add(()=>{S+=L*W,S>=.4&&(L=-1),S<=0&&(L=1),x.alpha=.5+S})})})}function hs(){vt.forEach(c=>U.stage.removeChild(c)),vt=[]}let gt=Sa(),gs,U,tt=[],vt=[];class no{constructor(u,k){Ae(this,"index");Ae(this,"container");Ae(this,"offset",0);Ae(this,"speed",0);Ae(this,"targetSpeed",30);Ae(this,"state","idle");Ae(this,"stopDelay",0);Ae(this,"bounceOffset",0);Ae(this,"bounceSpeed",0);Ae(this,"bounceFrames",0);this.index=u,this.container=k}start(u){this.state="spinning",this.speed=0,this.targetSpeed=35,this.stopDelay=u}startSynchronized(u){const k=Di[i(q)],h=60+u*k;this.start(h)}update(){if(this.state!=="idle"){if(this.state==="spinning"&&(this.speed<this.targetSpeed&&(this.speed+=2),this.stopDelay>0?this.stopDelay--:this.state="slowing"),this.state==="slowing"){const u=i(q)==="slow"?.88:i(q)==="medium"?.92:.95;this.speed*=u,this.speed<2.5&&(this.state="bouncing",this.bounceSpeed=-8,this.bounceFrames=0,this.speed=0,this.offset=0,fs("stop"),Yi())}this.state==="bouncing"&&(this.bounceFrames++,this.bounceSpeed+=.8,this.bounceOffset+=this.bounceSpeed,this.bounceOffset>3&&(this.bounceOffset=3,this.bounceSpeed*=-.6),(this.bounceFrames>45||Math.abs(this.bounceSpeed)<.5&&Math.abs(this.bounceOffset)<1)&&(this.state="stopped",this.bounceOffset=0,this.bounceSpeed=0)),this.speed>0&&(this.offset+=this.speed,this.offset>=ye&&(this.offset=0,gt[this.index]=ka(this.index)))}}draw(){const u=this.container;u.removeChildren();const k=gt[this.index];if(!k||!St||!St[k])return;const h=St[k];if(!h)return;const x=this.offset+this.bounceOffset,S=new Ut(h);S.width=Z,S.height=re,S.x=0,S.y=x,u.addChild(S)}}let A=R(1);_i(async()=>{U=new Oi,await U.init({width:o,height:r,background:"#001a33"}),gs.appendChild(U.canvas);const c=()=>{const h=window.innerWidth,x=window.innerHeight,S=h/o,L=x/r,W=Math.min(S,L,1);b(A,fe(W)),U.stage.scale.set(W),U.renderer.resize(o*W,r*W)};c(),window.addEventListener("resize",c);const u={};try{b(ut,"Loading background and UI images..."),_e.push(`Loading background: ${qt}`),_e.push(`Loading reel frames: ${ma}`),_e.push(`Loading logo: ${ba}`),await it.load([{alias:"background",src:qt},{alias:"reelframes",src:ma},{alias:"logo",src:ba}]),Xe=Ge.from("background"),dt=Ge.from("reelframes"),pt=Ge.from("logo"),console.log("✅ Background texture created:",Xe.width,"x",Xe.height),console.log("✅ Reel frames texture created:",dt.width,"x",dt.height),console.log("✅ Logo texture created:",pt.width,"x",pt.height),_e.push("✅ All UI images loaded"),b(ut,"Loading symbols...");const h=[];for(const x of ie)h.push({alias:x,src:Zt[x]});await it.load(h);for(const x of ie){const S=Zt[x];_e.push(`Loading symbol ${x}: ${S}`);try{const L=Ge.from(x);u[x]=L,console.log(`✅ Symbol ${x} loaded:`,L.width,"x",L.height),_e.push(`✅ Symbol ${x} loaded`)}catch(L){const W=`❌ Failed to load symbol ${x} from ${S}: ${L}`;throw _e.push(W),console.error(W),new Error(W)}}St=u,b(ut,"Assets loaded successfully!")}catch(h){b(Ke,`Asset loading failed: ${h}`),_e.push(i(Ke)),console.error(i(Ke));return}console.log("Ladataan ääniefektit...");for(const[h,x]of Object.entries(Ni)){const S=new Audio;S.src=x,S.preload="auto",S.volume=.7,S.load(),S.addEventListener("error",()=>{console.log(`Äänitiedostoa ei löydy: ${x} (käytetään hiljaista placeholderia)`)}),Jt[h]=S}if(console.log("Taustakuva ladattu, tekstuuri:",Xe),Xe){const h=new Ut(Xe);U.renderer.width/U.renderer.height;const x=h.texture.width/h.texture.height;let S;S=U.renderer.height/h.texture.height,S*=ne,h.scale.set(S),h.x=(U.renderer.width-h.width)/2,h.y=(U.renderer.height-h.height)/2+K,U.stage.addChild(h),console.log("Taustakuva lisätty:",de,"mode, size:",h.width.toFixed(0),"x",h.height.toFixed(0),"image aspect:",x.toFixed(2),"scale:",S.toFixed(2),"pos:",h.x.toFixed(0),h.y.toFixed(0))}else console.error("Taustakuva ei ole saatavilla!");[{x:70,y:120},{x:203,y:120},{x:345,y:120},{x:487,y:120},{x:620,y:120}].map(h=>({x:h.x+l,y:h.y+f})),tt=[];for(let h=0;h<a;h++){const x=Ea(h),S=x.col,L=x.row,W=300+S*(Z+20),J=250+L*(re+15),ee=h===6?W+d:W,te=h===6?J+g:J,G=new fa;G.x=ee+l,G.y=te+f;const $=[16711680,65280,255,16776960,16711935,65535,16753920,8388736,32768,128,16744448,8388863,33023],P=new ea().rect(0,0,Z,re).fill({color:$[h],alpha:.3});P.x=G.x,P.y=G.y,U.stage.addChild(P);const C=new ki({fontFamily:"Arial",fontSize:20,fill:16777215,fontWeight:"bold",stroke:{color:0,width:2}}),B=new Fn({text:h.toString(),style:C});B.x=G.x+5,B.y=G.y+5,U.stage.addChild(B);const F=new ea().rect(0,0,Z,re).fill(16777215);F.x=G.x,F.y=G.y,G.mask=F,U.stage.addChild(F),U.stage.addChild(G),tt.push(new no(h,G))}if(dt){const h=new Ut(dt);h.scale.set(1),h.x=250,h.y=200,U.stage.addChild(h),as=h,b(ss,fe(h.width)),console.log("Reel frames lisätty:",h.width.toFixed(0),"x",h.height.toFixed(0)),console.log("Control panel leveys päivitetty:",i(ss).toFixed(0))}if(pt){const h=new Ut(pt);h.scale.set(H),h.x=(U.renderer.width-h.width)/2+T,h.y=O,U.stage.addChild(h),console.log("Logo lisätty päällimmäiseen layeriin:",h.width.toFixed(0),"x",h.height.toFixed(0))}xa(),U.ticker.add(lo)});function lo(){for(const c of tt)c.update(),c.draw();if(!i(Oe)&&!ns&&tt.every(c=>c.state==="stopped")){ns=!0,Gi();const c=oo();console.log(`Checking wins, found ${c.length} wins`),c.length>0?(b(Je,fe(c)),b(we,fe(c.reduce((u,k)=>u+k.payout,0))),Zi(i(Ze),c,i(we)),co(i(we)),b(Oe,!0),b(Ki,fe(Date.now())),console.log(`🎉 VOITTO! ${i(we)} pistettä! Uusi saldo: ${i(Re)}`),console.log(`isShowingWin set to: ${i(Oe)}, totalWin: ${i(we)}`),c.forEach(u=>{const k=u.multiplier?` (${u.multiplier}x multiplier)`:"";console.log(`${u.count}x ${u.symbol} = ${u.payout} pistettä${k}`)}),ro(c),fs("win"),i(me)&&!ze&&(ze=!0,$e=window.setTimeout(()=>{i(Oe)&&i(me)&&(console.log("Autoplay: Auto-closing win popup after 1.5s"),b(Oe,!1),hs()),$e=window.setTimeout(()=>{ze=!1,ms()},200)},1500))):(console.log("No wins found this spin"),i(me)&&!ze&&(ze=!0,$e=window.setTimeout(()=>{ze=!1,ms()},1e3))),i(Q)&&i(Pe)===0&&(console.log(`🎰 FREE SPINS ENDED! Total won: ${i(De)}`),setTimeout(()=>{alert(`Free Spins Ended!
Total Won: ${i(De).toFixed(2)}`),b(Q,!1),b(De,0),is()},2e3))}}function ja(){if(!i(Q)&&X&&i(xe)&&!X.playing()&&(X.play(),console.log("🎵 Background music started on first spin")),Hi(),i(Q)&&i(Pe)>0)je(Pe,-1),je(ps),console.log(`🎰 FREE SPIN! Remaining: ${i(Pe)}`);else if(!i(Q)){if(i(Re)<i(oe)){alert(`Not enough credits! Balance: ${i(Re)}, Bet: ${i(oe)}`),vs();return}b(Re,i(Re)-i(oe)),je(Ze),b(qe,i(qe)+i(oe))}$e!==null&&(clearTimeout($e),$e=null),b(Je,fe([])),b(we,0),b(Oe,!1),ns=!1,hs(),gt=Sa(),tt.forEach((c,u)=>{c.startSynchronized(u)}),fs("spin")}function co(c){if(b(Re,i(Re)+c),b(ft,i(ft)+c),b(wa,fe(c)),i(Q)&&b(De,i(De)+c),c>0){je(ls);const u=c/i(oe);u>=10&&Xi(),Ye&&(u>=50?Ye.show():u>=20?setTimeout(()=>Ye.show(),200):u>=10&&setTimeout(()=>Ye.show(),400))}}function po(){i(oe)<rs&&b(oe,fe(Math.min(i(oe)+1,rs)))}function uo(){i(oe)>Aa&&b(oe,fe(Math.max(i(oe)-1,Aa)))}function fo(){b(oe,rs)}function mt(c){b(me,!0),b(Qe,fe(c)),b(Ne,!1),ms()}function vs(){b(me,!1),b(Qe,0),ze=!1,$e!==null&&(clearTimeout($e),$e=null)}function ms(){if(!i(me)||i(Qe)<=0){vs();return}console.log(`Autoplay: Starting spin ${i(Qe)} rounds left`),ja(),je(Qe,-1)}function ho(){confirm("Reset all statistics?")&&(b(Ze,0),b(qe,0),b(ft,0),b(ls,0),b($t,0),b(ps,0),b(jt,0),b(us,0))}var Ta=sl();mr(c=>{var u=Un();p(Fe(u)),D(c,u)});var La=Fe(Ta);{var go=c=>{var u=Yn(),k=p(_(u),2),h=p(_(k));w(k);var x=p(k,2);{var S=C=>{var B=Gn(),F=p(_(B));w(B),ce(()=>z(F,` ${i(Ke)??""}`)),D(C,B)};pe(x,C=>{i(Ke)&&C(S)})}var L=p(x,2),W=p(_(L));W.nodeValue=` ${Se??""}`,w(L);var J=p(L,2),ee=p(_(J));ee.nodeValue=` ${qt??""}`,w(J);var te=p(J,2),G=p(_(te));w(te);var $=p(te,2);{var P=C=>{var B=Vn(),F=_(B),N=_(F);w(F);var Ie=p(F,2);Kt(Ie,17,()=>_e,Xt,(at,ue)=>{var le=Hn(),Wo=_(le,!0);w(le),ce(()=>z(Wo,i(ue))),D(at,le)}),w(B),ce(()=>z(N,`Log (${_e.length??""})`)),D(C,B)};pe($,C=>{_e.length>0&&C(P)})}w(u),ce(()=>{z(h,` ${i(ut)??""}`),z(G,` ${Zt.a??""}`)}),D(c,u)};pe(La,c=>{(i(ut)!=="Assets loaded successfully!"||i(Ke))&&c(go)})}var Ra=p(La,2);{var vo=c=>{var u=Qn(),k=p(_(u),2),h=_(k);w(k);var x=p(k,2);Kt(x,17,()=>i(Je),Xt,(J,ee)=>{var te=Xn(),G=_(te);w(te),ce($=>z(G,`${i(ee).count??""} × ${$a[i(ee).symbol]??""} = ${$??""} pistettä`),[()=>i(ee).payout.toFixed(2)]),D(J,te)});var S=p(x,2);{var L=J=>{var ee=Kn(),te=_(ee),G=_(te);w(te),w(ee),ce(()=>z(G,`✨ ${i(Je)[0].multiplier??""}x WIN MULTIPLIER! ✨`)),D(J,ee)};pe(S,J=>{i(Je).length>0&&i(Je)[0].multiplier>1&&J(L)})}var W=p(S,2);w(u),ce(()=>z(h,`${i(we)??""} pistettä`)),M("click",W,()=>{b(Oe,!1),hs(),console.log("Win popup closed, ready for next spin")}),D(c,u)};pe(Ra,c=>{i(we)>0&&i(Oe)&&c(vo)})}var Pa=p(Ra,2);{var mo=c=>{var u=Zn(),k=p(_(u),8);w(u),ce(h=>y(u,"style",`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.95);
    color: white;
    padding: ${30*i(A)}px;
    border-radius: ${15*i(A)}px;
    font-family: Arial, sans-serif;
    z-index: 3000;
    border: ${3*i(A)}px solid #ffd700;
    max-width: ${600*i(A)}px;
    max-height: ${h??""}px;
    overflow-y: auto;
    font-size: ${i(A)??""}em;
  `),[()=>Math.min(r*i(A)*.8,80*window.innerHeight/100)]),M("click",k,()=>{b(et,!1)}),D(c,u)};pe(Pa,c=>{i(et)&&c(mo)})}var Oa=p(Pa,2),bs=_(Oa),ys=_(bs);y(ys,"style",`
        position: absolute;
        top: 0;
        left: 0;
        width: ${o}px;
        height: ${r}px;
      `),ii(ys,c=>gs=c,()=>gs);var Ia=p(ys,2),xs=p(Ia,2);xs.textContent=`🛠️ DEBUG v${s}`;var Tt=p(xs,2),_s=_(Tt);y(_s,"src",`${Y??""}/Control_leftend.png`);var Lt=p(_s,2),Rt=_(Lt),Ca=_(Rt),ws=p(Ca,2),As=_(ws),Pt=p(As,2),bo=_(Pt,!0);w(Pt);var ks=p(Pt,2),Ba=p(ks,2);w(ws),w(Rt);var Ss=p(Rt,2);y(Ss,"src",`${Y??""}/Control_divider.png`);var Ot=p(Ss,2),Fa=_(Ot),Es=p(Fa,2),yo=_(Es,!0);w(Es),w(Ot);var $s=p(Ot,2);y($s,"src",`${Y??""}/Control_divider.png`);var js=p($s,2),Ts=_(js),Ls=_(Ts);w(Ts),w(js);var Rs=p(js,2);y(Rs,"src",`${Y??""}/Control_divider.png`);var It=p(Rs,2),Ps=_(It),Ma=p(Ps,2);w(It);var Os=p(It,2);y(Os,"src",`${Y??""}/Control_divider.png`);var Ct=p(Os,2),Bt=_(Ct),Ft=p(Bt,2),xo=_(Ft,!0);w(Ft);var _o=p(Ft,2);{var wo=c=>{var u=qn(),k=p(_(u),2),h=p(k,2),x=p(h,2);w(u),ce(()=>{y(k,"style",`
              background: ${(i(q)==="slow"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: 2px solid ${(i(q)==="slow"?"#ffd700":"#666")??""};
              color: ${(i(q)==="slow"?"#ffd700":"#ffffff")??""};
              padding: 8px 20px;
              border-radius: 5px;
              cursor: pointer;
              font-weight: bold;
              font-size: 12px;
              transition: all 0.2s;
            `),y(h,"style",`
              background: ${(i(q)==="medium"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: 2px solid ${(i(q)==="medium"?"#ffd700":"#666")??""};
              color: ${(i(q)==="medium"?"#ffd700":"#ffffff")??""};
              padding: 8px 20px;
              border-radius: 5px;
              cursor: pointer;
              font-weight: bold;
              font-size: 12px;
              transition: all 0.2s;
            `),y(x,"style",`
              background: ${(i(q)==="fast"?"linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)":"linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)")??""};
              border: 2px solid ${(i(q)==="fast"?"#ffd700":"#666")??""};
              color: ${(i(q)==="fast"?"#ffd700":"#ffffff")??""};
              padding: 8px 20px;
              border-radius: 5px;
              cursor: pointer;
              font-weight: bold;
              font-size: 12px;
              transition: all 0.2s;
            `)}),M("click",k,()=>{b(q,"slow"),b(Ve,!1)}),M("click",h,()=>{b(q,"medium"),b(Ve,!1)}),M("click",x,()=>{b(q,"fast"),b(Ve,!1)}),D(c,u)};pe(_o,c=>{i(Ve)&&c(wo)})}w(Ct);var Is=p(Ct,2);y(Is,"src",`${Y??""}/Control_divider.png`);var Mt=p(Is,2),Cs=_(Mt),Wa=p(Cs,2);w(Mt);var Bs=p(Mt,2);y(Bs,"src",`${Y??""}/Control_divider.png`);var Wt=p(Bs,2),Na=_(Wt),Fs=p(Na,2),Ao=_(Fs,!0);w(Fs),w(Wt);var Ms=p(Wt,2);y(Ms,"src",`${Y??""}/Control_divider.png`);var za=p(Ms,2);w(Lt);var Da=p(Lt,2);y(Da,"src",`${Y??""}/Control_rightend.png`),w(Tt);var Ua=p(Tt,2);const ko=Ue(()=>i(we)/i(oe)>=50?"jackpot":i(we)/i(oe)>=20?"medium":"small");ii(Dn(Ua,{get winLevel(){return i(ko)},get winAmount(){return i(we)}}),c=>Ye=c,()=>Ye);var Nt=p(Ua,2),Ga=p(_(Nt),2);Ga.textContent=`v${s}`;var Ws=p(Ga,2),Ha=p(_(Ws),2),So=_(Ha,!0);w(Ha),w(Ws);var Ns=p(Ws,2),Va=p(_(Ns),2),Eo=_(Va,!0);w(Va),w(Ns);var zs=p(Ns,2),Ya=p(_(zs),2),$o=_(Ya,!0);w(Ya),w(zs);var Ds=p(zs,2),Us=p(_(Ds),2),jo=_(Us);w(Us),w(Ds);var Gs=p(Ds,2),Hs=p(_(Gs),2),To=_(Hs);w(Hs),w(Gs);var Vs=p(Gs,2),Xa=p(_(Vs),2),Lo=_(Xa,!0);w(Xa),w(Vs);var Ys=p(Vs,2),Ka=p(_(Ys),2),Ro=_(Ka,!0);w(Ka),w(Ys);var Xs=p(Ys,2),Qa=p(_(Xs),2),Po=_(Qa);w(Qa),w(Xs);var Za=p(Xs,2),qa=p(Za,2),st=_(qa),Oo=_(st);w(st);var zt=p(st,2),bt=p(zt,2),Io=_(bt);w(bt);var Ks=p(bt,2);w(qa),w(Nt);var Dt=p(Nt,2),Co=_(Dt);{var Bo=c=>{var u=Jn(),k=p(_(u),2),h=_(k);w(k);var x=p(k,2);w(u),ce(()=>z(h,`${i(Qe)??""} left`)),M("click",x,vs),D(c,u)},Fo=c=>{var u=tl(),k=Fe(u),h=p(k,2);{var x=S=>{var L=el(),W=p(_(L),2),J=p(W,2),ee=p(J,2),te=p(ee,2),G=p(te,2),$=p(G,2);w(L),M("click",W,()=>mt(10)),M("click",J,()=>mt(100)),M("click",ee,()=>mt(1e3)),M("click",te,()=>mt(1e4)),M("click",G,()=>mt(1e5)),M("click",$,()=>{b(Ne,!1)}),D(S,L)};pe(h,S=>{i(Ne)&&S(x)})}M("click",k,()=>{b(Ne,!i(Ne))}),D(c,u)};pe(Co,c=>{i(me)?c(Bo):c(Fo,!1)})}w(Dt);var yt=p(Dt,2),Mo=_(yt,!0);w(yt),w(bs),w(Oa),ce((c,u,k,h,x,S,L,W)=>{y(bs,"style",`
    position: relative;
    width: ${o*i(A)}px;
    height: ${r*i(A)}px;
  `),y(Tt,"style",`
  position: absolute;
  left: ${((as?as.x:E)+j)*i(A)}px;
  top: ${(m+ae)*i(A)}px;
  width: ${i(ss)*i(A)}px;
  height: ${v*i(A)}px;
  display: flex;
  align-items: center;
  z-index: 1000;
`),y(_s,"style",`height: ${v*i(A)}px; flex-shrink: 0;`),y(Lt,"style",`
    flex-grow: 1;
    height: ${v*i(A)}px;
    background-image: url('${Y??""}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 ${20*i(A)}px;
  `),y(Rt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*i(A)}px;`),y(Ca,"style",`color: #00ff00; font-size: ${12*i(A)}px; font-weight: bold;`),y(ws,"style",`display: flex; gap: ${5*i(A)}px; align-items: center;`),y(As,"style",`
            width: ${40*i(A)}px;
            height: ${40*i(A)}px;
            background-image: url('${Y??""}/Control_lowerbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(Pt,"style",`
          color: #fff;
          font-size: ${18*i(A)}px;
          font-weight: bold;
          min-width: ${80*i(A)}px;
          text-align: center;
          font-family: 'Courier New', monospace;
        `),z(bo,c),y(ks,"style",`
            width: ${40*i(A)}px;
            height: ${40*i(A)}px;
            background-image: url('${Y??""}/Control_upperbet_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          `),y(Ba,"style",`
            padding: ${6*i(A)}px ${10*i(A)}px;
            background: #ffd700;
            color: #000;
            border: ${2*i(A)}px solid #000;
            border-radius: ${5*i(A)}px;
            cursor: pointer;
            font-size: ${12*i(A)}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
            transition: background 0.2s;
          `),y(Ss,"style",`height: ${v*.8*i(A)}px; flex-shrink: 0;`),y(Ot,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*i(A)}px;`),y(Fa,"style",`color: #00ff00; font-size: ${12*i(A)}px; font-weight: bold;`),y(Es,"style",`
        color: #fff;
        font-size: ${20*i(A)}px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      `),z(yo,u),y($s,"style",`height: ${v*.8*i(A)}px; flex-shrink: 0;`),na(Ts,1,`play-button-wrapper ${(i(os)?"glare-animate":"")??""}`,"svelte-tijp0o"),Ls.disabled=i(me),y(Ls,"style",`
            width: 130px;
            height: 130px;
            background-image: url('${Y??""}/Control_playbutton.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border: none;
            cursor: ${(i(me)?"not-allowed":"pointer")??""};
            background-color: transparent;
            opacity: ${(i(me)?.5:1)??""};
            position: relative;
            z-index: 10;
            border-radius: 50%;
          `),y(Rs,"style",`height: ${v*.8*i(A)}px; flex-shrink: 0;`),y(It,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*i(A)}px;`),y(Ps,"style",`
          width: ${50*i(A)}px;
          height: ${50*i(A)}px;
          background-image: url('${Y??""}/${(i(me)?"Control_autoplay_stop.png":"Control_autoplay_select.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),y(Ma,"src",`${Y??""}/${(i(me)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),y(Ma,"style",`width: ${50*i(A)}px; height: auto;`),y(Os,"style",`height: ${v*.8*i(A)}px; flex-shrink: 0;`),y(Ct,"style",`position: relative; display: flex; flex-direction: column; align-items: center; gap: ${5*i(A)}px;`),y(Bt,"style",`
          width: ${50*i(A)}px;
          height: ${50*i(A)}px;
          background-image: url('${Y??""}/Control_fastplay_select.png');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),y(Bt,"title",`Spin Speed: ${(i(q)==="slow"?"Slow":i(q)==="medium"?"Medium":"Fast")??""}`),y(Ft,"style",`
        color: #ffffff;
        font-size: ${10*i(A)}px;
        font-weight: bold;
        text-transform: uppercase;
      `),z(xo,i(q)==="slow"?"Slow":i(q)==="medium"?"Med":"Fast"),y(Is,"style",`height: ${v*.8*i(A)}px; flex-shrink: 0;`),y(Mt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*i(A)}px;`),y(Cs,"style",`
          width: ${50*i(A)}px;
          height: ${50*i(A)}px;
          background-image: url('${Y??""}/${(i(At)?"Control_fastplay_select.png":"Control_fastplay_deselect.png")??""}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        `),y(Wa,"src",`${Y??""}/${(i(At)?"Control_bar_select.png":"Control_bar_deselect.png")??""}`),y(Wa,"style",`width: ${50*i(A)}px; height: auto;`),y(Bs,"style",`height: ${v*.8*i(A)}px; flex-shrink: 0;`),y(Wt,"style",`display: flex; flex-direction: column; align-items: center; gap: ${5*i(A)}px;`),y(Na,"style",`color: #00ff00; font-size: ${12*i(A)}px; font-weight: bold;`),y(Fs,"style",`
        color: #ffd700;
        font-size: ${20*i(A)}px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      `),z(Ao,k),y(Ms,"style",`height: ${v*.8*i(A)}px; flex-shrink: 0;`),y(za,"style",`
        width: ${50*i(A)}px;
        height: ${50*i(A)}px;
        background-image: url('${Y??""}/Control_menubar.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: none;
        cursor: pointer;
        background-color: transparent;
      `),y(Da,"style",`height: ${v*i(A)}px; flex-shrink: 0;`),y(Nt,"style",`
  position: absolute;
  top: 20px;
  left: 20px;
  display: ${(i(Et)?"block":"none")??""};
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
`),z(So,h),z(Eo,x),z($o,S),y(Us,"style",`color: ${L??""};`),z(jo,`${i(cs)??""}%`),y(Hs,"style",`color: ${W??""};`),z(To,`${i(ds)??""}%`),z(Lo,i($t)),z(Ro,i(ps)),z(Po,`${i(Qi)??""}%`),st.disabled=i(be).length===0,y(st,"style",`
        width: 100%;
        padding: 5px;
        background: ${(i(be).length>0?"rgba(100, 255, 100, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(i(be).length>0?"#66ff66":"#666")??""};
        border-radius: 5px;
        cursor: ${(i(be).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(i(be).length>0?"1":"0.5")??""};
      `),z(Oo,`Download Win Log (${i(be).length??""})`),zt.disabled=i(be).length===0,y(zt,"style",`
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: ${(i(be).length>0?"pointer":"not-allowed")??""};
        font-size: 11px;
        opacity: ${(i(be).length>0?"1":"0.5")??""};
      `),y(bt,"style",`
        width: 100%;
        padding: 5px;
        background: ${(i(xe)?"rgba(255, 215, 0, 0.3)":"rgba(100, 100, 100, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(i(xe)?"#ffd700":"#666")??""};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      `),z(Io,`🎵 Music: ${(i(xe)?"ON":"OFF")??""}`),Ks.disabled=i(Q),y(Ks,"style",`
        width: 100%;
        padding: 5px;
        background: ${(i(Q)?"rgba(100, 100, 100, 0.3)":"rgba(100, 150, 255, 0.3)")??""};
        color: #fff;
        border: 1px solid ${(i(Q)?"#666":"#66aaff")??""};
        border-radius: 5px;
        cursor: ${(i(Q)?"not-allowed":"pointer")??""};
        font-size: 11px;
        opacity: ${(i(Q)?"0.5":"1")??""};
      `),y(Dt,"style",`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1500;
  display: ${(i(Et)?"block":"none")??""};
`),y(yt,"style",`
    position: absolute;
    top: 10px;
    right: 10px;
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(i(Ee)?"rgba(0,255,0,0.2)":"rgba(255,0,0,0.2)")??""};
    border: 2px solid ${(i(Ee)?"rgba(0,255,0,0.5)":"rgba(255,0,0,0.5)")??""};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `),y(yt,"title",i(Ee)?"Mykistä äänet":"Laita äänet päälle"),z(Mo,i(Ee)?"🔊":"🔇")},[()=>i(oe).toFixed(2),()=>i(Re).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>i(wa).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),()=>i(Ze).toLocaleString(),()=>i(qe).toLocaleString(),()=>i(ft).toLocaleString(),()=>parseFloat(i(cs))>=95?"#00ff00":parseFloat(i(cs))>=85?"#ffff00":"#ff6666",()=>parseFloat(i(ds))>=30?"#00ff00":parseFloat(i(ds))>=20?"#ffff00":"#ff6666"]),M("click",Ia,()=>{b(et,!i(et))}),M("click",xs,()=>{b(Et,!i(Et))}),M("click",As,uo),M("click",ks,po),M("click",Ba,fo),M("click",Ls,ja),M("click",Ps,()=>{b(Ne,!i(Ne))}),M("click",Bt,()=>{b(Ve,!i(Ve))}),M("click",Cs,()=>{b(At,!i(At))}),M("click",za,()=>{b(et,!i(et))}),M("click",Za,ho),M("click",st,qi),M("click",zt,Ji),M("click",bt,Vi),M("click",Ks,eo),M("click",yt,()=>{b(Ee,!i(Ee))}),D(t,Ta),ua()}var il=se('<p class="error svelte-8ys286">❌ Väärä salasana!</p>'),ol=se('<div class="auth-container svelte-8ys286"><div class="auth-box svelte-8ys286"><h2 class="svelte-8ys286">🎰 Peli Access</h2> <p class="svelte-8ys286">Anna salasana päästäksesi peliin:</p> <form><input type="password" placeholder="Salasana..." class="password-input svelte-8ys286" autocomplete="off"> <button type="submit" class="submit-btn svelte-8ys286">Kirjaudu sisään</button></form> <!></div></div>');function rl(t,e){pa(e,!1);let s=ra(e,"isAuthenticated",12,!1),a=oa(""),o=oa(!1);const r="slot2024";function n(){i(a)===r?(s(!0),sessionStorage.setItem("gameAuthenticated","true")):(b(o,!0),b(a,""),setTimeout(()=>b(o,!1),3e3))}_i(()=>{s(sessionStorage.getItem("gameAuthenticated")==="true")}),Ho();var l=vi(),f=Fe(l);{var g=d=>{var m=ol(),v=_(m),E=p(_(v),4),j=_(E);Rr(j),vr(2),w(E);var ae=p(E,2);{var H=T=>{var O=il();D(T,O)};pe(ae,T=>{i(o)&&T(H)})}w(v),w(m),Or(j,()=>i(a),T=>b(a,T)),M("submit",E,Ir(n)),D(d,m)};pe(f,d=>{s()||d(g)})}D(t,l),ua()}var nl=se('<div style="position: fixed; top: 10px; left: 10px; z-index: 9999; color: white; font-weight: bold;">HELLO MAD CRANE 👋 (oma peli käynnissä)</div> <!>',1),ll=se("<!> <!>",1);function xl(t){let e=oa(!1);var s=ll(),a=Fe(s);rl(a,{get isAuthenticated(){return i(e)},set isAuthenticated(n){b(e,n)},$$legacy:!0});var o=p(a,2);{var r=n=>{var l=nl(),f=p(Fe(l),2);al(f,{}),D(n,l)};pe(o,n=>{i(e)&&n(r)})}D(t,s)}export{Ti as A,Ei as C,Dr as R,Fr as S,Li as V,xl as _,Br as u};
