import{$ as C,$a as ne,A as pa,Aa as fo,Ab as Yt,B as fa,Ba as Xt,Bb as z,C as Et,Ca as ho,Cb as Le,D as qe,Da as oi,Db as W,E as Mt,Ea as bo,Eb as De,F as pe,Fa as Je,Fb as it,G as Jr,Ga as v,Gb as Do,H as eo,Ha as et,Hb as me,I as K,Ia as fe,Ib as Eo,J as gt,Ja as re,Jb as ve,K as te,Ka as go,Kb as se,L,La as vo,Lb as va,M as g,Ma as wn,Mb as ya,N as U,Na as oe,Nb as Sn,O as s,Oa as yo,Ob as Mo,P as kt,Pa as tt,Pb as he,Q as to,Qa as si,Qb as ko,R as rt,Ra as li,Rb as No,S as no,Sa as k,Sb as N,T as ot,Ta as B,Tb as Ve,U as Ze,Ua as w,Ub as _a,V as Qe,Va as _o,Vb as di,W as io,Wa as le,X as Y,Xa as lt,Y as V,Ya as xo,Z as st,Za as It,_ as M,_a as Co,a as I,aa as ha,ab as H,b as be,ba as j,bb as G,ca as xn,cb as At,d as He,da as ao,db as dt,e as ue,ea as Ht,eb as ct,f as Ke,fa as Gt,fb as J,g as E,ga as Nt,gb as _,h as jt,ha as ro,hb as x,i as $r,ia as Ge,ib as ie,j as Wr,ja as Pe,jb as ke,k as ai,ka as ba,kb as Ne,l as Xr,la as xe,lb as Re,m as bt,ma as Te,mb as Tt,n as ca,na as T,nb as Kt,o as _e,oa as S,ob as q,p as Kr,pa as Cn,pb as $,q as Yr,qa as oo,qb as ge,r as qr,ra as ri,rb as Z,s as Ye,sa as $t,sb as nt,t as de,ta as Wt,tb as Oe,u as ua,ua as so,ub as R,v as Zr,va as lo,vb as O,w as Ut,wa as co,wb as wo,x as _n,xa as uo,xb as So,y as ma,ya as mo,yb as ga,z as Qr,za as po,zb as vt}from"./chunk-XUVZAJE2.js";var Io=null;function Be(){return Io}function xa(i){Io??=i}var Dn=class{},qt=(()=>{class i{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||i)};static \u0275prov=te({token:i,factory:()=>s(Ao),providedIn:"platform"})}return i})();var Ao=(()=>{class i extends qt{_location;_history;_doc=s(V);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Be().getBaseHref(this._doc)}onPopState(e){let t=Be().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=Be().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,a){this._history.pushState(e,t,a)}replaceState(e,t,a){this._history.replaceState(e,t,a)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(t){return new(t||i)};static \u0275prov=te({token:i,factory:()=>new i,providedIn:"platform"})}return i})();function Oo(i,n){return i?n?i.endsWith("/")?n.startsWith("/")?i+n.slice(1):i+n:n.startsWith("/")?i+n:`${i}/${n}`:i:n}function To(i){let n=i.search(/#|\?|$/);return i[n-1]==="/"?i.slice(0,n-1)+i.slice(n):i}function yt(i){return i&&i[0]!=="?"?`?${i}`:i}var ci=(()=>{class i{historyGo(e){throw new Error("")}static \u0275fac=function(t){return new(t||i)};static \u0275prov=te({token:i,factory:()=>s(Od),providedIn:"root"})}return i})(),Rd=new g(""),Od=(()=>{class i extends ci{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,t){super(),this._platformLocation=e,this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??s(V).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Oo(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+yt(this._platformLocation.search),a=this._platformLocation.hash;return a&&e?`${t}${a}`:t}pushState(e,t,a,r){let o=this.prepareExternalUrl(a+yt(r));this._platformLocation.pushState(e,t,o)}replaceState(e,t,a,r){let o=this.prepareExternalUrl(a+yt(r));this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(t){return new(t||i)(U(qt),U(Rd,8))};static \u0275prov=te({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ui=(()=>{class i{_subject=new E;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=Ld(To(Ro(t))),this._locationStrategy.onPopState(a=>{let r={url:this.path(!0),pop:!0,state:a.state,type:a.type};a.hasUAVisualTransition&&(r.hasUAVisualTransition=!0),this._subject.next(r)})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+yt(t))}normalize(e){return i.stripTrailingSlash(Pd(this._basePath,Ro(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",a=null){this._locationStrategy.pushState(a,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+yt(t)),a)}replaceState(e,t="",a=null){this._locationStrategy.replaceState(a,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+yt(t)),a)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(a=>a(e,t))}subscribe(e,t,a){return this._subject.subscribe({next:e,error:t??void 0,complete:a??void 0})}static normalizeQueryParams=yt;static joinWithSlash=Oo;static stripTrailingSlash=To;static \u0275fac=function(t){return new(t||i)(U(ci))};static \u0275prov=te({token:i,factory:()=>Fd(),providedIn:"root"})}return i})();function Fd(){return new ui(U(ci))}function Pd(i,n){if(!i||!n.startsWith(i))return n;let e=n.substring(i.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function Ro(i){return i.replace(/\/index\.html$/,"")}function Ld(i){if(new RegExp("^(https?:)?//").test(i)){let[,e]=i.split(/\/\/[^\/]+/);return e}return i}var wa=(()=>{class i{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=s(Y);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let a=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,a,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,a)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,a):!1,get:(e,t,a)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,a)}})}static \u0275fac=function(t){return new(t||i)(oe(tt))};static \u0275dir=w({type:i,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[xe]})}return i})();function En(i,n){n=encodeURIComponent(n);for(let e of i.split(";")){let t=e.indexOf("="),[a,r]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(a.trim()!==n)continue;let o=r;try{o=decodeURIComponent(r)}catch(l){}return o.length>1&&o[0]==='"'&&o[o.length-1]==='"'&&(o=o.slice(1,-1)),o}return null}var Sa="browser";function Fo(i){return i===Sa}var Mn=class{_doc;constructor(n){this._doc=n}manager},mi=(()=>{class i extends Mn{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,a,r){return e.addEventListener(t,a,r),()=>this.removeEventListener(e,t,a,r)}removeEventListener(e,t,a,r){return e.removeEventListener(t,a,r)}static \u0275fac=function(t){return new(t||i)(U(V))};static \u0275prov=te({token:i,factory:i.\u0275fac})}return i})(),hi=new g(""),ka=(()=>{class i{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,t){this._zone=t,e.forEach(o=>{o.manager=this});let a=e.filter(o=>!(o instanceof mi));this._plugins=a.slice().reverse();let r=e.find(o=>o instanceof mi);r&&this._plugins.push(r)}addEventListener(e,t,a,r){return this._findPluginFor(t).addEventListener(e,t,a,r)}getZone(){return this._zone}_findPluginFor(e){let t=this._eventNameToPlugin.get(e);if(t)return t;if(t=this._plugins.find(r=>r.supports(e)),!t)throw new K(-5101,!1);return this._eventNameToPlugin.set(e,t),t}static \u0275fac=function(t){return new(t||i)(U(hi),U(C))};static \u0275prov=te({token:i,factory:i.\u0275fac})}return i})(),Da="ng-app-id";function Po(i){for(let n of i)n.remove()}function Lo(i,n){let e=n.createElement("style");return e.textContent=i,e}function Ud(i,n,e,t){let a=i.head?.querySelectorAll(`style[${Da}="${n}"],link[${Da}="${n}"]`);if(!a||a.length===0)return!1;for(let r of a)r.removeAttribute(Da),r instanceof HTMLLinkElement?t.set(r.href.slice(r.href.lastIndexOf("/")+1),{usage:0,elements:[r]}):r.textContent&&e.set(r.textContent,{usage:0,elements:[r]});return!0}function Ma(i,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",i),e}var Na=(()=>{class i{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,t,a,r={}){this.doc=e,this.appId=t,this.nonce=a,Ud(e,t,this.inline,this.external)&&this.hosts.add(e.head)}addStyles(e,t){for(let a of e)this.addUsage(a,this.inline,Lo);t?.forEach(a=>this.addUsage(a,this.external,Ma))}removeStyles(e,t){for(let a of e)this.removeUsage(a,this.inline);t?.forEach(a=>this.removeUsage(a,this.external))}addUsage(e,t,a){let r=t.get(e);r?r.usage++:t.set(e,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,a(e,this.doc)))})}removeUsage(e,t){let a=t.get(e);a&&(a.usage--,a.usage<=0&&(Po(a.elements),t.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Po(e);this.hosts.clear()}addHost(e){if(!this.hosts.has(e)){this.hosts.add(e);for(let[t,{elements:a}]of this.inline)a.push(this.addElement(e,Lo(t,this.doc)));for(let[t,{elements:a}]of this.external)a.push(this.addElement(e,Ma(t,this.doc)))}}removeHost(e){this.hosts.delete(e);for(let t of[...this.inline.values(),...this.external.values()]){let a=[];for(let r of t.elements)r.parentNode===e?r.remove():a.push(r);t.elements=a}}addElement(e,t){return this.nonce&&t.setAttribute("nonce",this.nonce),e.appendChild(t)}static \u0275fac=function(t){return new(t||i)(U(V),U(xn),U(Nt,8),U(Ht))};static \u0275prov=te({token:i,factory:i.\u0275fac})}return i})(),Ea={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Ia=/%COMP%/g;var Bo="%COMP%",Hd=`_nghost-${Bo}`,Gd=`_ngcontent-${Bo}`,$d=!0,Wd=new g("",{factory:()=>$d}),Xd=new g("");function Kd(i){return Gd.replace(Ia,i)}function Yd(i){return Hd.replace(Ia,i)}function zo(i,n){return n.map(e=>e.replace(Ia,i))}var Nn=(()=>{class i{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(e,t,a,r,o,l,d=null,p=null,c=null){this.eventManager=e,this.sharedStylesHost=t,this.appId=a,this.removeStylesOnCompDestroy=r,this.doc=o,this.ngZone=l,this.nonce=d,this.tracingService=p,this.cssVarNamespace=c??"",this.defaultRenderer=new Zt(e,o,l,this.tracingService,this.cssVarNamespace)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;let a=this.getOrCreateRenderer(e,t);return a instanceof fi?a.applyToHost(e):a instanceof kn&&a.applyStyles(),a}getOrCreateRenderer(e,t){let a=this.rendererByCompId,r=a.get(t.id);if(!r){let o=this.doc,l=this.ngZone,d=this.eventManager,p=this.sharedStylesHost,c=this.removeStylesOnCompDestroy,m=this.tracingService;switch(t.encapsulation){case ri.Emulated:r=new fi(d,p,t,this.appId,c,o,l,m,this.cssVarNamespace);break;case ri.ShadowDom:return new pi(d,e,t,o,l,this.nonce,m,this.cssVarNamespace,p);case ri.ExperimentalIsolatedShadowDom:return new pi(d,e,t,o,l,this.nonce,m,this.cssVarNamespace);default:r=new kn(d,p,t,c,o,l,m,this.cssVarNamespace);break}a.set(t.id,r)}return r}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(t){return new(t||i)(U(ka),U(wn),U(xn),U(Wd),U(V),U(C),U(Nt),U(oi,8),U(Xd,8))};static \u0275prov=te({token:i,factory:i.\u0275fac})}return i})(),Zt=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,t,a,r=""){this.eventManager=n,this.doc=e,this.ngZone=t,this.tracingService=a,this.cssVarNamespace=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(Ea[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(Vo(n)?n.content:n).appendChild(e)}insertBefore(n,e,t){if(n){let a=Vo(n)?n.content:n;if(t!=null&&t.parentNode!==a)throw new K(-5106,!1);a.insertBefore(e,t)}}removeChild(n,e){e.remove()}selectRootElement(n,e){let t=typeof n=="string"?this.doc.querySelector(n):n;if(!t)throw new K(-5104,!1);return e||(t.textContent=""),t}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,t,a){if(a){e=a+":"+e;let r=Ea[a];r?n.setAttributeNS(r,e,t):n.setAttribute(e,t)}else n.setAttribute(e,t)}removeAttribute(n,e,t){if(t){let a=Ea[t];a?n.removeAttributeNS(a,e):n.removeAttribute(`${t}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,t,a){let r=e.startsWith("--");r&&(e=e.replace("%NS%",this.cssVarNamespace)),r||a&(Xt.DashCase|Xt.Important)?n.style.setProperty(e,t,a&Xt.Important?"important":""):n.style[e]=t}removeStyle(n,e,t){let a=e.startsWith("--");a&&(e=e.replace("%NS%",this.cssVarNamespace)),a||t&Xt.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,t){n!=null&&(n[e]=t)}setValue(n,e){n.nodeValue=e}listen(n,e,t,a){if(typeof n=="string"&&(n=Be().getGlobalEventTarget(this.doc,n),!n))throw new K(-5102,!1);let r=this.decoratePreventDefault(t);return this.tracingService?.wrapEventListener&&(r=this.tracingService.wrapEventListener(n,e,r)),this.eventManager.addEventListener(n,e,r,a)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function jo(i){i instanceof Zt&&(i.throwOnSyntheticProps=!1)}function Vo(i){return i.tagName==="TEMPLATE"&&i.content!==void 0}var pi=class extends Zt{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,t,a,r,o,l,d,p){super(n,a,r,l,d),this.hostEl=e,this.sharedStylesHost=p,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=t.styles;c=zo(t.id,c).map(h=>h.replace(/%NS%/g,d));for(let h of c){let u=document.createElement("style");o&&u.setAttribute("nonce",o),u.textContent=h,this.shadowRoot.appendChild(u)}let m=t.getExternalStyles?.();if(m)for(let h of m){let u=Ma(h,a);o&&u.setAttribute("nonce",o),this.shadowRoot.appendChild(u)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,t){return super.insertBefore(this.nodeOrShadowRoot(n),e,t)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},kn=class extends Zt{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,t,a,r,o,l,d,p){super(n,r,o,l,d),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=a;let c=t.styles,m=p?zo(p,c):c;this.styles=m.map(h=>h.replace(/%NS%/g,d)),this.styleUrls=t.getExternalStyles?.(p)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&ho.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},fi=class extends kn{contentAttr;hostAttr;constructor(n,e,t,a,r,o,l,d,p){let c=a+"-"+t.id;super(n,e,t,r,o,l,d,p,c),this.contentAttr=Kd(c),this.hostAttr=Yd(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let t=super.createElement(n,e);return super.setAttribute(t,this.contentAttr,""),t}};var bi=class i extends Dn{supportsDOMEvents=!0;static makeCurrent(){xa(new i)}onAndCancel(n,e,t,a){return n.addEventListener(e,t,a),()=>{n.removeEventListener(e,t,a)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=Zd();return e==null?null:Qd(e)}resetBaseElement(){In=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return En(document.cookie,n)}},In=null;function Zd(){return In=In||document.head.querySelector("base"),In?In.getAttribute("href"):null}function Qd(i){return new URL(i,document.baseURI).pathname}var Uo=["alt","control","meta","shift"],Jd={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},ec={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey},Ho=(()=>{class i extends Mn{constructor(e){super(e)}supports(e){return i.parseEventName(e)!=null}addEventListener(e,t,a,r){let o=i.parseEventName(t),l=i.eventCallback(o.fullKey,a,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Be().onAndCancel(e,o.domEventName,l,r))}static parseEventName(e){let t=e.toLowerCase().split("."),a=t.shift();if(t.length===0||!(a==="keydown"||a==="keyup"))return null;let r=i._normalizeKey(t.pop()),o="",l=t.indexOf("code");if(l>-1&&(t.splice(l,1),o="code."),Uo.forEach(p=>{let c=t.indexOf(p);c>-1&&(t.splice(c,1),o+=p+".")}),o+=r,t.length!=0||r.length===0)return null;let d={};return d.domEventName=a,d.fullKey=o,d}static matchEventFullKeyCode(e,t){let a=Jd[e.key]||e.key,r="";return t.indexOf("code.")>-1&&(a=e.code,r="code."),a==null||!a?!1:(a=a.toLowerCase(),a===" "?a="space":a==="."&&(a="dot"),Uo.forEach(o=>{if(o!==a){let l=ec[o];l(e)&&(r+=o+".")}}),r+=a,r===t)}static eventCallback(e,t,a){return r=>{i.matchEventFullKeyCode(r,e)&&a.runGuarded(()=>t(r))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(t){return new(t||i)(U(V))};static \u0275prov=te({token:i,factory:i.\u0275fac})}return i})();function Aa(i,n,e){return He(this,null,function*(){let t=I({rootComponent:i},tc(n,e));return No(t)})}function tc(i,n){return{platformRef:n?.platformRef,appProviders:[...oc,...i?.providers??[]],platformProviders:rc}}function nc(){bi.makeCurrent()}function ic(){return new ha}function ac(){return oo(document),document}var rc=[{provide:Ht,useValue:Sa},{provide:ao,useValue:nc,multi:!0},{provide:V,useFactory:ac}];var oc=[{provide:to,useValue:"root"},{provide:ha,useFactory:ic},{provide:hi,useClass:mi,multi:!0},{provide:hi,useClass:Ho,multi:!0},Nn,{provide:wn,useClass:Na},{provide:Na,useExisting:wn},ka,{provide:fe,useExisting:Nn},[]];var mt=class i{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let t=e.indexOf(":");if(t>0){let a=e.slice(0,t),r=e.slice(t+1).trim();this.addHeaderEntry(a,r)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,t)=>{this.addHeaderEntry(t,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,t])=>{this.setHeaderEntries(e,t)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof i?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init();for(let[e,t]of n.headers.entries())this.headers.set(e,t),this.normalizedNames.set(e,n.normalizedNames.get(e))}clone(n){let e=new i;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof i?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let t=n.value;if(typeof t=="string"&&(t=[t]),t.length===0)return;this.maybeSetNormalizedName(n.name,e);let a=n.op==="a"?(this.headers.get(e)||[]).slice():[];a.push(...t),this.headers.set(e,a);break;case"d":let r=n.value;if(r===void 0)this.headers.delete(e),this.normalizedNames.delete(e);else{let o=Array.isArray(r)?r:[r],l=this.headers.get(e);if(!l)return;l=l.filter(d=>o.indexOf(d)===-1),l.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,l)}break}}addHeaderEntry(n,e){let t=n.toLowerCase();this.maybeSetNormalizedName(n,t),this.headers.has(t)?this.headers.get(t).push(e):this.headers.set(t,[e])}setHeaderEntries(n,e){let t=(Array.isArray(e)?e:[e]).map(r=>r.toString()),a=n.toLowerCase();this.headers.set(a,t),this.maybeSetNormalizedName(n,a)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var vi=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},yi=class{encodeKey(n){return Go(n)}encodeValue(n){return Go(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function sc(i,n){let e=new Map;return i.length>0&&i.replace(/^\?/,"").split("&").forEach(a=>{let r=a.indexOf("="),[o,l]=r==-1?[n.decodeKey(a),""]:[n.decodeKey(a.slice(0,r)),n.decodeValue(a.slice(r+1))],d=e.get(o)||[];d.push(l),e.set(o,d)}),e}var lc=/[&+#]/g;function Go(i){return encodeURI(i).replace(lc,encodeURIComponent)}function gi(i){return`${i}`}var ut=class i{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new yi,n.fromString){if(n.fromObject)throw new K(2805,!1);this.map=sc(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let t=n.fromObject[e],a=Array.isArray(t)?t.map(gi):[gi(t)];this.map.set(e,a)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(t=>{let a=n[t];Array.isArray(a)?a.forEach(r=>{e.push({param:t,value:r,op:"a"})}):e.push({param:t,value:a,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(t=>e+"="+this.encoder.encodeValue(t)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new i({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[n,e]of this.cloneFrom.map.entries())this.map.set(n,e);this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=n.op==="a"?(this.map.get(n.param)||[]).slice():[];e.push(gi(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let t=(this.map.get(n.param)||[]).slice(),a=t.indexOf(gi(n.value));a!==-1&&t.splice(a,1),t.length>0?this.map.set(n.param,t):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null}}};function dc(i){switch(i){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function $o(i){return typeof ArrayBuffer<"u"&&i instanceof ArrayBuffer}function Wo(i){return typeof Blob<"u"&&i instanceof Blob}function Xo(i){return typeof FormData<"u"&&i instanceof FormData}function cc(i){return typeof URLSearchParams<"u"&&i instanceof URLSearchParams}var Ta="Content-Type",Ko="Accept",Zo="text/plain",Qo="application/json",uc=`${Qo}, ${Zo}, */*`,Qt=class i{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,t,a){this.url=e,this.method=n.toUpperCase();let r;if(dc(this.method)||a?(this.body=t!==void 0?t:null,r=a):r=t,r){if(this.reportProgress=!!r.reportProgress,this.reportUploadProgress=!!r.reportUploadProgress,this.reportDownloadProgress=!!r.reportDownloadProgress,this.withCredentials=!!r.withCredentials,this.keepalive=!!r.keepalive,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.context&&(this.context=r.context),r.params&&(this.params=r.params),r.priority&&(this.priority=r.priority),r.cache&&(this.cache=r.cache),r.credentials&&(this.credentials=r.credentials),typeof r.timeout=="number"){if(r.timeout<1||!Number.isInteger(r.timeout))throw new K(2822,"");this.timeout=r.timeout}r.mode&&(this.mode=r.mode),r.redirect&&(this.redirect=r.redirect),r.integrity&&(this.integrity=r.integrity),r.referrer!==void 0&&(this.referrer=r.referrer),r.referrerPolicy&&(this.referrerPolicy=r.referrerPolicy),this.transferCache=r.transferCache}if(this.headers??=new mt,this.context??=new vi,!this.params)this.params=new ut,this.urlWithParams=e;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=e;else{let l=e,d="",p=e.indexOf("#");p!==-1&&(d=e.substring(p),l=e.substring(0,p));let c=l.indexOf("?"),m=c===-1?"?":c<l.length-1?"&":"";this.urlWithParams=l+m+o+d}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||$o(this.body)||Wo(this.body)||Xo(this.body)||cc(this.body)?this.body:this.body instanceof ut?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Xo(this.body)?null:Wo(this.body)?this.body.type||null:$o(this.body)?null:typeof this.body=="string"?Zo:this.body instanceof ut?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Qo:null}clone(n={}){let e=n.method||this.method,t=n.url||this.url,a=n.responseType||this.responseType,r=n.keepalive??this.keepalive,o=n.priority||this.priority,l=n.cache||this.cache,d=n.mode||this.mode,p=n.redirect||this.redirect,c=n.credentials||this.credentials,m=n.referrer??this.referrer,h=n.integrity||this.integrity,u=n.referrerPolicy||this.referrerPolicy,b=n.transferCache??this.transferCache,y=n.timeout??this.timeout,P=n.body!==void 0?n.body:this.body,Ae=n.withCredentials??this.withCredentials,Me=n.reportProgress??this.reportProgress,Ue=n.reportUploadProgress??this.reportUploadProgress,wt=n.reportDownloadProgress??this.reportDownloadProgress,We=n.headers||this.headers,St=n.params||this.params,Dt=n.context??this.context;return n.setHeaders!==void 0&&(We=Object.keys(n.setHeaders).reduce((ht,Xe)=>ht.set(Xe,n.setHeaders[Xe]),We)),n.setParams&&(St=Object.keys(n.setParams).reduce((ht,Xe)=>ht.set(Xe,n.setParams[Xe]),St)),new i(e,t,P,{params:St,headers:We,context:Dt,reportProgress:Me,reportUploadProgress:Ue,reportDownloadProgress:wt,responseType:a,withCredentials:Ae,transferCache:b,keepalive:r,cache:l,priority:o,timeout:y,mode:d,redirect:p,credentials:c,referrer:m,integrity:h,referrerPolicy:u})}},Ot=(function(i){return i[i.Sent=0]="Sent",i[i.UploadProgress=1]="UploadProgress",i[i.ResponseHeader=2]="ResponseHeader",i[i.DownloadProgress=3]="DownloadProgress",i[i.Response=4]="Response",i[i.User=5]="User",i})(Ot||{}),Jt=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,t="OK"){this.headers=n.headers||new mt,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||t,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},_i=class i extends Jt{constructor(n={}){super(n)}type=Ot.ResponseHeader;clone(n={}){return new i({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},An=class i extends Jt{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Ot.Response;clone(n={}){return new i({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Rt=class extends Jt{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},mc=200;var pc=/^\)\]\}',?\n/,gh=1024*1024,Jo=new g("",{factory:()=>null}),en=(()=>{class i{fetchImpl=s(Oa,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=s(C);destroyRef=s(st);maxResponseSize=s(Jo);handle(e){return new Ke(t=>{let a=new AbortController,r=!1,o={next:d=>{d.type===Ot.Response&&(r=!0),t.next(d)},error:d=>{r=!0,t.error(d)},complete:()=>{r=!0,t.complete()}};this.doRequest(e,a.signal,o).then(Fa,d=>o.error(new Rt({error:d})));let l;return e.timeout&&(l=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{a.signal.aborted||a.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{l!==void 0&&clearTimeout(l),!r&&!a.signal.aborted&&a.abort()}})}doRequest(e,t,a){return He(this,null,function*(){let r=this.createRequestInit(e),o;try{let P=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,I({signal:t},r)));fc(P),a.next({type:Ot.Sent}),o=yield P}catch(P){a.error(new Rt({error:P,status:P.status??0,statusText:P.statusText,url:e.urlWithParams,headers:P.headers}));return}let l=new mt(o.headers),d=o.statusText,p=o.url||e.urlWithParams,c=o.status,m=null,h=e.reportProgress||e.reportDownloadProgress;if(h&&a.next(new _i({headers:l,status:c,statusText:d,url:p})),o.body){let P=o.headers.get(Ta)??"",Ae=o.headers.get("content-length"),Me=Ae!==null?Number(Ae):NaN;this.maxResponseSize!==null&&Number.isFinite(Me)&&Me>this.maxResponseSize&&(yield o.body.cancel(),Yo(this.maxResponseSize));let Ue=[],wt=o.body.getReader(),We=0,St,Dt,ht=typeof Zone<"u"&&Zone.current,Xe=!1;if(yield this.ngZone.runOutsideAngular(()=>He(this,null,function*(){for(;;){if(this.destroyRef.destroyed){yield wt.cancel(),Xe=!0;break}let{done:X,value:f}=yield wt.read();if(X)break;if(Ue.push(f),We+=f.length,this.maxResponseSize!==null&&We>this.maxResponseSize&&(yield wt.cancel(),Yo(this.maxResponseSize)),h){Dt=e.responseType==="text"?(Dt??"")+(St??=qo(P)).decode(f,{stream:!0}):void 0;let Q=()=>a.next({type:Ot.DownloadProgress,total:Number.isFinite(Me)?Me:void 0,loaded:We,partialText:Dt});ht?ht.run(Q):Q()}}})),Xe){a.complete();return}let A=this.concatChunks(Ue,We);try{m=this.parseBody(e,A,P,c)}catch(X){a.error(new Rt({error:X,headers:new mt(o.headers),status:o.status,statusText:o.statusText,url:o.url||e.urlWithParams}));return}}c===0&&(c=m?mc:0);let u=c>=200&&c<300,b=o.redirected,y=o.type;u?(a.next(new An({body:m,headers:l,status:c,statusText:d,url:p,redirected:b,responseType:y})),a.complete()):a.error(new Rt({error:m,headers:l,status:c,statusText:d,url:p,redirected:b,responseType:y}))})}parseBody(e,t,a,r){switch(e.responseType){case"json":let o=new TextDecoder().decode(t).replace(pc,"");if(o==="")return null;try{return JSON.parse(o)}catch(l){if(r<200||r>=300)return o;throw l}case"text":return qo(a).decode(t);case"blob":return new Blob([t],{type:a});case"arraybuffer":return t.buffer}}createRequestInit(e){if(e.reportUploadProgress)throw new K(2824,!1);let t={},a;if(a=e.credentials,e.withCredentials&&(a="include"),e.headers.forEach((r,o)=>t[r]=o.join(",")),e.headers.has(Ko)||(t[Ko]=uc),!e.headers.has(Ta)){let r=e.detectContentTypeHeader();r!==null&&(t[Ta]=r)}return{body:e.serializeBody(),method:e.method,headers:t,credentials:a,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect,referrer:e.referrer,integrity:e.integrity,referrerPolicy:e.referrerPolicy}}concatChunks(e,t){let a=new Uint8Array(t),r=0;for(let o of e)a.set(o,r),r+=o.length;return a}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})(),Oa=class{};function Fa(){}function fc(i){i.then(Fa,Fa)}function Yo(i){throw new K(-2825,!1)}var hc=/charset=\s*["']?([^;"'\s]+)["']?/i;function qo(i){let n=i.match(hc);if(n!==null)try{return new TextDecoder(n[1])}catch(e){}return new TextDecoder}var bc=new g("",{factory:()=>!0}),gc="XSRF-TOKEN",vc=new g("",{factory:()=>gc}),yc="X-XSRF-TOKEN",_c=new g("",{factory:()=>yc}),xc=(()=>{class i{cookieName=s(vc);doc=s(V);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=En(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})(),es=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=te({token:i,factory:function(t){let a=null;return t?a=new(t||i):a=U(xc),a},providedIn:"root"})}return i})();function ts(i,n){if(!s(bc)||i.method==="GET"||i.method==="HEAD")return n(i);try{let a=s(qt).href,{origin:r}=new URL(a),{origin:o}=new URL(i.url,r);if(r!==o)return n(i)}catch(a){return n(i)}let e=s(es).getToken(),t=s(_c);return e!=null&&!i.headers.has(t)&&(i=i.clone({headers:i.headers.set(t,e)})),n(i)}function Cc(i,n){return n(i)}function wc(i,n,e){return(t,a)=>no(e,()=>n(t,r=>i(r,a)))}var ns=new g("",{factory:()=>[ts]}),is=new g(""),as=new g("",{factory:()=>!0});var Ci=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=te({token:i,factory:function(t){let a=null;return t?a=new(t||i):a=U(en),a},providedIn:"root"})}return i})();var xi=(()=>{class i{backend;injector;chain=null;pendingTasks=s(ba);contributeToStability=s(as);constructor(e,t){this.backend=e,this.injector=t}handle(e){if(this.chain===null){let a=this.injector.get(wi,null,{skipSelf:!0}),r=a!==null&&this.backend===a,o=this.injector.get(is,[],r?{self:!0}:void 0),l=Array.from(new Set([...this.injector.get(ns),...o]));this.chain=l.reduceRight((d,p)=>wc(d,p,this.injector),Cc)}let t=this.chain;if(this.contributeToStability){let a=this.pendingTasks.add();return se(()=>t(e,r=>this.backend.handle(r))).pipe(Qr(a))}else return se(()=>t(e,a=>this.backend.handle(a)))}static \u0275fac=function(t){return new(t||i)(U(Ci),U(rt))};static \u0275prov=te({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),wi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=te({token:i,factory:function(t){let a=null;return t?a=new(t||i):a=U(xi),a},providedIn:"root"})}return i})();function Ra(i,n){return I({body:n},i)}var tn=(()=>{class i{handler;constructor(e){this.handler=e}request(e,t,a={}){let r;if(e instanceof Qt)r=e;else{let d;a.headers instanceof mt?d=a.headers:d=new mt(a.headers);let p;a.params&&(a.params instanceof ut?p=a.params:p=new ut({fromObject:a.params})),r=new Qt(e,t,a.body!==void 0?a.body:null,{headers:d,context:a.context,params:p,reportProgress:a.reportProgress,reportUploadProgress:a.reportUploadProgress,reportDownloadProgress:a.reportDownloadProgress,responseType:a.responseType||"json",withCredentials:a.withCredentials,transferCache:a.transferCache,keepalive:a.keepalive,priority:a.priority,cache:a.cache,mode:a.mode,redirect:a.redirect,credentials:a.credentials,referrer:a.referrer,referrerPolicy:a.referrerPolicy,integrity:a.integrity,timeout:a.timeout})}let o=bt(r).pipe(Zr(d=>this.handler.handle(d)));if(e instanceof Qt||a.observe==="events")return o;let l=o.pipe(de(d=>d instanceof An));switch(a.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return l.pipe(_e(d=>{if(d.body!==null&&!(d.body instanceof ArrayBuffer))throw new K(2806,!1);return d.body}));case"blob":return l.pipe(_e(d=>{if(d.body!==null&&!(d.body instanceof Blob))throw new K(2807,!1);return d.body}));case"text":return l.pipe(_e(d=>{if(d.body!==null&&typeof d.body!="string")throw new K(2808,!1);return d.body}));default:return l.pipe(_e(d=>d.body))}case"response":return l;default:throw new K(2809,!1)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:new ut().append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,a={}){return this.request("PATCH",e,Ra(a,t))}post(e,t,a={}){return this.request("POST",e,Ra(a,t))}put(e,t,a={}){return this.request("PUT",e,Ra(a,t))}static \u0275fac=function(t){return new(t||i)(U(wi))};static \u0275prov=te({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Pa=(function(i){return i[i.Interceptors=0]="Interceptors",i[i.LegacyInterceptors=1]="LegacyInterceptors",i[i.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",i[i.NoXsrfProtection=3]="NoXsrfProtection",i[i.JsonpSupport=4]="JsonpSupport",i[i.RequestsMadeViaParent=5]="RequestsMadeViaParent",i[i.Fetch=6]="Fetch",i[i.Xhr=7]="Xhr",i})(Pa||{});function Sc(i,n){return{\u0275kind:i,\u0275providers:n}}function La(...i){let n=[tn,en,xi,{provide:wi,useExisting:xi},{provide:Ci,useFactory:()=>s(en)},{provide:ns,useValue:ts,multi:!0}];for(let e of i)n.push(...e.\u0275providers);return kt(n)}function Va(){return Sc(Pa.Fetch,[en,{provide:Ci,useExisting:en}])}var Ba=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275prov=te({token:i,factory:function(t){let a=null;return t?a=new(t||i):a=U(Ec),a},providedIn:"root"})}return i})(),Ec=(()=>{class i extends Ba{_doc=s(V);sanitize(e,t){if(t==null)return null;switch(e){case ot.NONE:return t;case ot.HTML:return Wt(t,"HTML")?$t(t):fo(this._doc,String(t)).toString();case ot.STYLE:return Wt(t,"Style")?$t(t):t;case ot.SCRIPT:if(Wt(t,"Script"))return $t(t);throw new K(5200,!1);case ot.URL:return Wt(t,"URL")?$t(t):po(String(t));case ot.RESOURCE_URL:if(Wt(t,"ResourceURL"))return $t(t);throw new K(-5201,!1);default:throw new K(5202,!1)}}bypassSecurityTrustHtml(e){return so(e)}bypassSecurityTrustStyle(e){return lo(e)}bypassSecurityTrustScript(e){return co(e)}bypassSecurityTrustUrl(e){return uo(e)}bypassSecurityTrustResourceUrl(e){return mo(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})();var za;try{za=typeof Intl<"u"&&Intl.v8BreakIterator}catch(i){za=!1}var ee=(()=>{class i{_platformId=s(Ht);isBrowser=this._platformId?Fo(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||za)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})();var $e=(function(i){return i[i.NORMAL=0]="NORMAL",i[i.NEGATED=1]="NEGATED",i[i.INVERTED=2]="INVERTED",i})($e||{}),Si,Ft;function Di(){if(Ft==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Ft=!1,Ft;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Ft=!0;else{let i=Element.prototype.scrollTo;i?Ft=!/\{\s*\[native code\]\s*\}/.test(i.toString()):Ft=!1}}return Ft}function nn(){if(typeof document!="object"||!document)return $e.NORMAL;if(Si==null){let i=document.createElement("div"),n=i.style;i.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),t=e.style;t.width="2px",t.height="1px",i.appendChild(e),document.body.appendChild(i),Si=$e.NORMAL,i.scrollLeft===0&&(i.scrollLeft=1,Si=i.scrollLeft===0?$e.NEGATED:$e.INVERTED),i.remove()}return Si}var ja;function rs(){if(ja==null){let i=typeof document<"u"?document.head:null;ja=!!(i&&(i.createShadowRoot||i.attachShadow))}return ja}function Ua(i){if(rs()){let n=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function ye(i){if(i.composedPath)try{return i.composedPath()[0]}catch(n){}return i.target}function Ha(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Tn;function os(){if(Tn==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Tn=!0}))}finally{Tn=Tn||!1}return Tn}function an(i){return os()?i:!!i.capture}var rn,ss=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Ga(){if(rn)return rn;if(typeof document!="object"||!document)return rn=new Set(ss),rn;let i=document.createElement("input");return rn=new Set(ss.filter(n=>(i.setAttribute("type",n),i.type===n))),rn}var Mc=new g("cdk-dir-doc",{providedIn:"root",factory:()=>s(V)}),kc=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function ls(i){let n=i?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?kc.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Fe=(()=>{class i{get value(){return this.valueSignal()}valueSignal=j("ltr");change=new M;constructor(){let e=s(Mc,{optional:!0});if(e){let t=e.body?e.body.dir:null,a=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(ls(t||a||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})();var ae=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({})}return i})();var Nc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return i})(),ds=(()=>{class i{_elementRef=s(S);_platform=s(ee);_document=s(V);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["*",[["mat-toolbar-row"]]];return k({type:i,selectors:[["mat-toolbar"]],contentQueries:function(r,o,l){if(r&1&&nt(l,Nc,5),r&2){let d;R(d=O())&&(o._toolbarRows=d)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(r,o){r&2&&(Le(o.color?"mat-"+o.color:""),z("mat-toolbar-multiple-rows",o._toolbarRows.length>0)("mat-toolbar-single-row",o._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:["*","mat-toolbar-row"],decls:2,vars:0,template:function(r,o){r&1&&(ge(e),Z(0),Z(1,1))},styles:[`.mat-toolbar {
  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));
  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));
  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));
  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})})()}return i})();var cs=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[ae]})}return i})();var us=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=k({type:i,selectors:[["app-header"]],decls:4,vars:0,template:function(t,a){t&1&&(_(0,"header")(1,"mat-toolbar")(2,"span"),W(3,"Read Bible \u5927\u5BB6\u4E00\u8D77\u8B80\u8056\u7D93"),x()()())},dependencies:[cs,ds],styles:["header[_ngcontent-%COMP%]{background-color:#223965;color:#fff;padding:10px}"]})}}return i})();function ms(i,n){let t=!n?.manualCleanup?n?.injector?.get(st)??s(st):null,a=Tc(n?.equal),r;n?.requireSync?r=j({kind:0},{equal:a}):r=j({kind:1,value:n?.initialValue},{equal:a});let o,l=i.subscribe({next:d=>r.set({kind:1,value:d}),error:d=>{r.set({kind:2,error:d}),o?.()},complete:()=>{o?.()}});if(n?.requireSync&&r().kind===0)throw new K(601,!1);return o=t?.onDestroy(l.unsubscribe.bind(l)),ve(()=>{let d=r();switch(d.kind){case 1:return d.value;case 2:throw d.error;case 0:throw new K(601,!1)}},{equal:n?.equal})}function Tc(i=Object.is){return(n,e)=>n.kind===1&&e.kind===1&&i(n.value,e.value)}var Wa=class{constructor(){this.onHasErrorChange=new M,this.onIsLoadedChange=new M,this.hasError=!1,this.isLoaded=!1}loadScript(n,e,t,a=null,r=null){if(typeof document<"u"&&!document.getElementById(n)){let o=document.createElement("script");o.async=!0,o.src=e,o.onload=t,o.onerror=r,a||(a=document.head),a.appendChild(o)}}},Xa=class{constructor(){}},Ka=()=>typeof window.google?.accounts<"u",Rc=()=>{if(!Ka())throw new Error("Google Accounts API is undefined")},$a=()=>(Rc(),window.google.accounts),Oc={oneTapEnabled:!0},on=(()=>{class i extends Wa{static{this.PROVIDER_ID="GOOGLE"}constructor(e,t){super(),this.clientId=e,this.initOptions=t,this.changeUser=new M,this._socialUser=new jt(null),this._accessToken=new jt(null),this._receivedAccessToken=new M,this.initOptions=I(I({},Oc),this.initOptions),this._socialUser.pipe(Et(1)).subscribe(this.changeUser),this._accessToken.pipe(Et(1)).subscribe(this._receivedAccessToken)}initialize(e,t){return new Promise((a,r)=>{try{this.loadScript(i.PROVIDER_ID,this.getGoogleLoginScriptSrc(t||""),()=>{if(Ka()){if(google.accounts.id.initialize({client_id:this.clientId,auto_select:e,callback:({credential:o})=>{let l=this.createSocialUser(o);this._socialUser.next(l)},prompt_parent_id:this.initOptions?.prompt_parent_id,itp_support:this.initOptions.oneTapEnabled,use_fedcm_for_prompt:this.initOptions.oneTapEnabled}),this.initOptions.oneTapEnabled&&this._socialUser.pipe(de(o=>o===null)).subscribe(()=>google.accounts.id.prompt(console.debug)),this.initOptions.scopes){let o=this.initOptions.scopes instanceof Array?this.initOptions.scopes.filter(l=>l).join(" "):this.initOptions.scopes;this._tokenClient=google.accounts.oauth2.initTokenClient({client_id:this.clientId,scope:o,prompt:this.initOptions.prompt,callback:l=>{l.error?this._accessToken.error({code:l.error,description:l.error_description,uri:l.error_uri}):this._accessToken.next(l.access_token)}})}a()}},null,()=>{this.hasError=!0,this.onHasErrorChange.emit(this.hasError),r(`There was an issue loading the ${i.PROVIDER_ID} authentication script.`)})}catch(o){r(o)}finally{this.isLoaded=!0,this.onIsLoadedChange.emit(this.isLoaded)}})}getLoginStatus(){return new Promise((e,t)=>{this._socialUser.value?e(this._socialUser.value):t(`No user is currently logged in with ${i.PROVIDER_ID}`)})}refreshToken(){return new Promise((e,t)=>{$a().id.revoke(this._socialUser.value.id,a=>{a.error?t(a.error):e(this._socialUser.value)})})}getAccessToken(){return new Promise((e,t)=>{this._tokenClient?(this._tokenClient.requestAccessToken({hint:this._socialUser.value?.email}),this._receivedAccessToken.pipe(_n(1)).subscribe(e)):this._socialUser.value?t("No token client was instantiated, you should specify some scopes."):t("You should be logged-in first.")})}revokeAccessToken(){return new Promise((e,t)=>{this._tokenClient?this._accessToken.value?$a().oauth2.revoke(this._accessToken.value,()=>{this._accessToken.next(null),e()}):t("No access token to revoke"):t("No token client was instantiated, you should specify some scopes.")})}signIn(){return Promise.reject('You should not call this method directly for Google, use "<asl-google-signin-button>" wrapper or generate the button yourself with "google.accounts.id.renderButton()" (https://developers.google.com/identity/gsi/web/guides/display-button#javascript)')}signOut(){return He(this,null,function*(){$a().id.disableAutoSelect(),this._socialUser.next(null)})}createSocialUser(e){let t=new Xa;t.idToken=e;let a=this.decodeJwt(e);return t.id=a.sub,t.name=a.name,t.email=a.email,t.photoUrl=a.picture,t.firstName=a.given_name,t.lastName=a.family_name,t}decodeJwt(e){let a=e.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),r=decodeURIComponent(window.atob(a).split("").map(function(o){return"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)}).join(""));return JSON.parse(r)}getGoogleLoginScriptSrc(e){return e?`https://accounts.google.com/gsi/client?hl=${e}`:"https://accounts.google.com/gsi/client"}}return i})(),Ya=new g("SocialAuthServiceConfig"),qa=(()=>{class i{static{this.ERR_LOGIN_PROVIDER_NOT_FOUND="Login provider not found"}static{this.ERR_NOT_LOGGED_IN="Not logged in"}static{this.ERR_NOT_INITIALIZED="Login providers not ready yet. Are there errors on your console?"}static{this.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN="Chosen login provider is not supported for refreshing a token"}static{this.ERR_NOT_SUPPORTED_FOR_ACCESS_TOKEN="Chosen login provider is not supported for getting an access token"}get authState(){return this._authState.asObservable()}get initState(){return this._initState.asObservable()}constructor(){this.providers=new Map,this.autoLogin=!1,this.lang="",this._user=null,this._authState=new $r(1),this.initialized=!1,this._initState=new Wr,this._ngZone=s(C),this._injector=s(Y),this._config=s(Ya),Promise.resolve(this._config).then(e=>this.initialize(e))}initialize(e){this.autoLogin=e.autoLogin!==void 0?e.autoLogin:!1,this.lang=e.lang!==void 0?e.lang:"";let{onError:t=console.error}=e;e.providers.forEach(a=>{this.providers.set(a.id,"prototype"in a.provider?this._injector.get(a.provider):a.provider)}),Promise.all(Array.from(this.providers.values()).map(a=>a.initialize(this.autoLogin,this.lang))).then(()=>{if(this.autoLogin){let a=[],r=!1;this.providers.forEach((o,l)=>{let d=o.getLoginStatus();a.push(d),d.then(p=>{this.setUser(p,l),r=!0}).catch(console.debug)}),Promise.all(a).catch(()=>{r||(this._user=null,this._authState.next(null))})}this.providers.forEach((a,r)=>{ca(a.changeUser)&&a.changeUser.subscribe(o=>{this._ngZone.run(()=>{this.setUser(o,r)})})})}).catch(a=>{t(a)}).finally(()=>{this.initialized=!0,this._initState.next(this.initialized),this._initState.complete()})}getAccessToken(e){return He(this,null,function*(){let t=this.providers.get(e);if(this.initialized)if(t){if(!(t instanceof on))throw i.ERR_NOT_SUPPORTED_FOR_ACCESS_TOKEN}else throw i.ERR_LOGIN_PROVIDER_NOT_FOUND;else throw i.ERR_NOT_INITIALIZED;return yield t.getAccessToken()})}refreshAuthToken(e){return new Promise((t,a)=>{if(!this.initialized)a(i.ERR_NOT_INITIALIZED);else{let r=this.providers.get(e);r?typeof r.refreshToken!="function"?a(i.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN):r.refreshToken().then(o=>{this.setUser(o,e),t()}).catch(o=>{a(o)}):a(i.ERR_LOGIN_PROVIDER_NOT_FOUND)}})}refreshAccessToken(e){return new Promise((t,a)=>{if(!this.initialized)a(i.ERR_NOT_INITIALIZED);else if(e!==on.PROVIDER_ID)a(i.ERR_NOT_SUPPORTED_FOR_REFRESH_TOKEN);else{let r=this.providers.get(e);r instanceof on?r.revokeAccessToken().then(t).catch(a):a(i.ERR_LOGIN_PROVIDER_NOT_FOUND)}})}signIn(e,t){return new Promise((a,r)=>{if(!this.initialized)r(i.ERR_NOT_INITIALIZED);else{let o=this.providers.get(e);o?o.signIn(t).then(l=>{this.setUser(l,e),a(l)}).catch(l=>{r(l)}):r(i.ERR_LOGIN_PROVIDER_NOT_FOUND)}})}signOut(e=!1){return new Promise((t,a)=>{if(!this.initialized)a(i.ERR_NOT_INITIALIZED);else if(!this._user)a(i.ERR_NOT_LOGGED_IN);else{let r=this._user.provider,o=this.providers.get(r);o?o.signOut(e).then(()=>{t(),this.setUser(null)}).catch(l=>{a(l)}):a(i.ERR_LOGIN_PROVIDER_NOT_FOUND)}})}setUser(e,t){e&&t&&(e.provider=t),this._user=e,this._authState.next(e)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=te({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var ps=(()=>{class i{constructor(){this.type="icon",this.size="medium",this.text="signin_with",this.shape="rectangular",this.theme="outline",this.logo_alignment="left",this.width=0,this.locale="";let e=s(S);s(qa).initState.pipe(_n(1)).subscribe(()=>{Promise.resolve(this.width).then(a=>{a>400||a<200&&a!=0?Promise.reject("Please note .. max-width 400 , min-width 200 (https://developers.google.com/identity/gsi/web/tools/configurator)"):Ka()&&google.accounts.id.renderButton(e.nativeElement,{type:this.type,size:this.size,text:this.text,width:this.width,shape:this.shape,theme:this.theme,logo_alignment:this.logo_alignment,locale:this.locale})})})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275dir=w({type:i,selectors:[["asl-google-signin-button"]],inputs:{type:"type",size:"size",text:"text",shape:"shape",theme:"theme",logo_alignment:"logo_alignment",width:"width",locale:"locale"}})}}return i})();function Fc(i,n){if(i&1&&(_(0,"div",0),ie(1,"img",2),_(2,"div")(3,"h4"),W(4),x(),_(5,"p"),W(6),x()()()),i&2){let e=n;v(),J("src",e.photoUrl)("alt",e.name),v(3),De(e.name),v(2),De(e.email)}}function Pc(i,n){i&1&&ie(0,"asl-google-signin-button",1)}var fs=(()=>{class i{constructor(){this.authService=s(qa),this.user=ms(this.authService.authState,{initialValue:null})}signOut(){return this.authService.signOut()}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=k({type:i,selectors:[["app-login"]],decls:2,vars:1,consts:[[1,"user"],["type","icon","size","medium"],["referrerpolicy","no-referrer",3,"src","alt"]],template:function(t,a){if(t&1&&H(0,Fc,7,4,"div",0)(1,Pc,1,0,"asl-google-signin-button",1),t&2){let r;G((r=a.user())?0:1,r)}},dependencies:[ps],encapsulation:2})}}return i})();var Rn=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Za=class extends Rn{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(n,e,t,a,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=t,this.projectableNodes=a,this.bindings=r||null,this.directives=o||null}},_t=class extends Rn{templateRef;viewContainerRef;context;injector;constructor(n,e,t,a){super(),this.templateRef=n,this.viewContainerRef=e,this.context=t,this.injector=a}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Qa=class extends Rn{element;constructor(n){super(),this.element=n instanceof S?n.nativeElement:n}},Ei=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Za)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof _t)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Qa)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Mi=class extends Ei{outletElement;_appRef;_defaultInjector;constructor(n,e,t){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=t}attachComponentPortal(n){let e;if(n.viewContainerRef){let t=n.injector||n.viewContainerRef.injector,a=t.get(li,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:t,ngModuleRef:a,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,a=n.injector||this._defaultInjector||Y.NULL,r=a.get(rt,t.injector);e=di(n.component,{elementInjector:a,environmentInjector:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0,directives:n.directives||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,t=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return t.rootNodes.forEach(a=>this.outletElement.appendChild(a)),t.detectChanges(),this.setDisposeFn(()=>{let a=e.indexOf(t);a!==-1&&e.remove(a)}),this._attachedPortal=n,t}attachDomPortal=n=>{let e=n.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}},hs=(()=>{class i extends _t{constructor(){let e=s(et),t=s(tt);super(e,t)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["","cdkPortal",""]],exportAs:["cdkPortal"],features:[le]})}return i})(),Ja=(()=>{class i extends Ei{_moduleRef=s(li,{optional:!0});_document=s(V);_viewContainerRef=s(tt);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new M;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,a=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(a.hostView.rootNodes[0]),super.setDisposeFn(()=>a.destroy()),this._attachedPortal=e,this._attachedRef=a,this.attached.emit(a),a}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let a=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(a,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{a.parentNode&&a.parentNode.replaceChild(t,a)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Te(i)))(a||i)}})();static \u0275dir=w({type:i,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[le]})}return i})(),bs=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({})}return i})();var ki=new WeakMap,Ie=(()=>{class i{_appRef;_injector=s(Y);_environmentInjector=s(rt);load(e){let t=this._appRef=this._appRef||this._injector.get(It),a=ki.get(t);a||(a={loaders:new Set,refs:[]},ki.set(t,a),t.onDestroy(()=>{ki.get(t)?.refs.forEach(r=>r.destroy()),ki.delete(t)})),a.loaders.has(e)||(a.loaders.add(e),a.refs.push(di(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})();var er=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,a){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return i})(),Ni;function Lc(){if(Ni===void 0&&(Ni=null,typeof window<"u")){let i=window;if(i.trustedTypes!==void 0)try{Ni=i.trustedTypes.createPolicy("angular#components",{createHTML:n=>n})}catch(n){console.error(n)}}return Ni}function Vc(i){return Lc()?.createHTML(i)||i}function gs(i,n,e){let t=e.sanitize(ot.HTML,n);i.innerHTML=Vc(t||"")}var sn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,a){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return i})();function On(i){return i.buttons===0||i.detail===0}function Fn(i){let n=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}function Pn(i,n=0){return vs(i)?Number(i):arguments.length===2?n:0}function vs(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function Ee(i){return i instanceof S?i.nativeElement:i}var ys=new g("cdk-input-modality-detector-options"),_s={ignoreKeys:[18,17,224,91,16]},xs=650,tr={passive:!0,capture:!0},Cs=(()=>{class i{_platform=s(ee);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new jt(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=ye(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<xs||(this._modality.next(On(e)?"keyboard":"mouse"),this._mostRecentTarget=ye(e))};_onTouchstart=e=>{if(Fn(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=ye(e)};constructor(){let e=s(C),t=s(V),a=s(ys,{optional:!0});if(this._options=I(I({},_s),a),this.modalityDetected=this._modality.pipe(Et(1)),this.modalityChanged=this.modalityDetected.pipe(ma()),this._platform.isBrowser){let r=s(fe).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(t,"keydown",this._onKeydown,tr),r.listen(t,"mousedown",this._onMousedown,tr),r.listen(t,"touchstart",this._onTouchstart,tr)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})(),Ln=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(Ln||{}),ws=new g("cdk-focus-monitor-default-options"),Ii=an({passive:!0,capture:!0}),Vn=(()=>{class i{_ngZone=s(C);_platform=s(ee);_inputModalityDetector=s(Cs);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(V);_stopInputModalityDetector=new E;constructor(){let e=s(ws,{optional:!0});this._detectionMode=e?.detectionMode||Ln.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=ye(e);for(let a=t;a;a=a.parentElement)e.type==="focus"?this._onFocus(e,a):this._onBlur(e,a)};monitor(e,t=!1){let a=Ee(e);if(!this._platform.isBrowser||a.nodeType!==1)return bt();let r=Ua(a)||this._document,o=this._elementInfo.get(a);if(o)return t&&(o.checkChildren=!0),o.subject;let l={checkChildren:t,subject:new E,rootNode:r};return this._elementInfo.set(a,l),this._registerGlobalListeners(l),l.subject}stopMonitoring(e){let t=Ee(e),a=this._elementInfo.get(t);a&&(a.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(a))}focusVia(e,t,a){let r=Ee(e),o=this._document.activeElement;r===o?this._getClosestElementsInfo(r).forEach(([l,d])=>this._originChanged(l,t,d)):(this._setOrigin(t),typeof r.focus=="function"&&r.focus(a))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Ln.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Ln.IMMEDIATE){clearTimeout(this._originTimeoutId);let a=this._originFromTouchInteraction?xs:1;this._originTimeoutId=setTimeout(()=>this._origin=null,a)}})}_onFocus(e,t){let a=this._elementInfo.get(t),r=ye(e);!a||!a.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),a)}_onBlur(e,t){let a=this._elementInfo.get(t);!a||a.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(a,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,a=this._rootNodeFocusListenerCount.get(t)||0;a||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Ii),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Ii)}),this._rootNodeFocusListenerCount.set(t,a+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(pe(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let a=this._rootNodeFocusListenerCount.get(t);a>1?this._rootNodeFocusListenerCount.set(t,a-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Ii),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Ii),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,a){this._setClasses(e,t),this._emitOrigin(a,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((a,r)=>{(r===e||a.checkChildren&&r.contains(e))&&t.push([r,a])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:a}=this._inputModalityDetector;if(a!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let r=e.labels;if(r){for(let o=0;o<r.length;o++)if(r[o].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})(),nr=(()=>{class i{_elementRef=s(S);_focusMonitor=s(Vn);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new M;get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return i})();function ir(i){return Array.isArray(i)?i:[i]}var Ss=new Set,Pt,ar=(()=>{class i{_platform=s(ee);_nonce=s(Nt,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):zc}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Bc(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})();function Bc(i,n){if(!Ss.has(i))try{Pt||(Pt=document.createElement("style"),n&&Pt.setAttribute("nonce",n),Pt.setAttribute("type","text/css"),document.head.appendChild(Pt)),Pt.sheet&&(Pt.sheet.insertRule(`@media ${i.replace(/[{}]/g,"")} {body{ }}`,0),Ss.add(i))}catch(e){console.error(e)}}function zc(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}function jc(i){if(i.type==="characterData"&&i.target instanceof Comment)return!0;if(i.type==="childList"){for(let n=0;n<i.addedNodes.length;n++)if(!(i.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<i.removedNodes.length;n++)if(!(i.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var Ds=(()=>{class i{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})(),Uc=(()=>{class i{_mutationObserverFactory=s(Ds);_observedElements=new Map;_ngZone=s(C);ngOnDestroy(){this._observedElements.forEach((e,t)=>this._cleanupObserver(t))}observe(e){let t=Ee(e);return new Ke(a=>{let o=this._observeElement(t).pipe(_e(l=>l.filter(d=>!jc(d))),de(l=>!!l.length)).subscribe(l=>{this._ngZone.run(()=>{a.next(l)})});return()=>{o.unsubscribe(),this._unobserveElement(t)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let t=new E,a=this._mutationObserverFactory.create(r=>t.next(r));a&&a.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:a,stream:t,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:t,stream:a}=this._observedElements.get(e);t&&t.disconnect(),a.complete(),this._observedElements.delete(e)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})(),Es=(()=>{class i{_contentObserver=s(Uc);_elementRef=s(S);event=new M;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Pn(e),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Ut(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",N],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return i})(),Ms=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({providers:[Ds]})}return i})();var ks=new g("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Ns=new g("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),Hc=0,rr=(()=>{class i{_ngZone=s(C);_defaultOptions=s(Ns,{optional:!0});_liveElement;_document=s(V);_sanitizer=s(Ba);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=s(ks,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let a=this._defaultOptions,r,o;return t.length===1&&typeof t[0]=="number"?o=t[0]:[r,o]=t,this.clear(),clearTimeout(this._previousTimeout),r||(r=a&&a.politeness?a.politeness:"polite"),o==null&&a&&(o=a.duration),this._liveElement.setAttribute("aria-live",r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(l=>this._currentResolve=l)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:gs(this._liveElement,e,this._sanitizer),typeof o=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),o)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),a=this._document.createElement("div");for(let r=0;r<t.length;r++)t[r].remove();return a.classList.add(e),a.classList.add("cdk-visually-hidden"),a.setAttribute("aria-atomic","true"),a.setAttribute("aria-live","polite"),a.id=`cdk-live-announcer-${Hc++}`,this._document.body.appendChild(a),a}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let a=0;a<t.length;a++){let r=t[a],o=r.getAttribute("aria-owns");o?o.indexOf(e)===-1&&r.setAttribute("aria-owns",o+" "+e):r.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})();var Gc=200,Ai=class{_letterKeyStream=new E;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new E;selectedItem=this._selectedItem;constructor(n,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:Gc;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(eo(e=>this._pressedLetters.push(e)),Ut(n),de(()=>this._pressedLetters.length>0),_e(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let a=(this._selectedItemIndex+t)%this._items.length,r=this._items[a];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};function ze(i,...n){return n.length?n.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var ln=class{_items;_activeItemIndex=j(-1);_activeItem=j(null);_wrap=!1;_typeaheadSubscription=ue.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof Cn?this._itemChangesSubscription=n.changes.subscribe(t=>this._itemsChanged(t.toArray())):Pe(n)&&(this._effectRef=Ge(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new E;change=new E;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Ai(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,a=["altKey","ctrlKey","metaKey","shiftKey"].every(r=>!n[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&a){this.setNextItemActive();break}else return;case 38:if(this._vertical&&a){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&a){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&a){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&a){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&a){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&a){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&a){let r=this._activeItemIndex()+this._pageUpAndDown.delta,o=this._getItemsArray().length;this._setActiveItemByIndex(r<o?r:o-1,-1);break}else return;default:(a||ze(n,"shiftKey"))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),t=typeof n=="number"?n:e.indexOf(n),a=e[t];this._activeItem.set(a??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let a=(this._activeItemIndex()+n*t+e.length)%e.length,r=e[a];if(!this._skipPredicateFn(r)){this.setActiveItem(a);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let t=this._getItemsArray();if(t[n]){for(;this._skipPredicateFn(t[n]);)if(n+=e,!t[n])return;this.setActiveItem(n)}}_getItemsArray(){return Pe(this._items)?this._items():this._items instanceof Cn?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let t=n.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var Bn=class extends ln{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles()}};var zn=class extends ln{_origin="program";setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var Rs=new Map,Ce=class i{_appId=s(xn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){this._appId!=="ng"&&(n+=this._appId);let t=Rs.get(n);return t===void 0?t=0:t++,Rs.set(n,t),`${n}${e?i._infix+"-":""}${t}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})};var lr=class{_box;_destroyed=new E;_resizeSubject=new E;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new Ke(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),t.unsubscribe(),this._elementObservables.delete(n)}}).pipe(de(e=>e.some(t=>t.target===n)),fa({bufferSize:1,refCount:!0}),pe(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Ti=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=s(C);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let a=t?.box||"content-box";return this._observers.has(a)||this._observers.set(a,new lr(a)),this._observers.get(a).observe(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})();var $c=20,Oi=(()=>{class i{_ngZone=s(C);_platform=s(ee);_renderer=s(fe).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new E;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=$c){return this._platform.isBrowser?new Ke(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let a=e>0?this._scrolled.pipe(ua(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{a.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):bt()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let a=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(de(r=>!r||a.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((a,r)=>{this._targetContainsElement(r,e)&&t.push(r)}),t}_targetContainsElement(e,t){let a=Ee(t),r=e.getElementRef().nativeElement;do if(a==r)return!0;while(a=a.parentElement);return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})(),Os=(()=>{class i{elementRef=s(S);scrollDispatcher=s(Oi);ngZone=s(C);dir=s(Fe,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new E;_renderer=s(re);_cleanupScroll;_elementScrolled=new E;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,a=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=a?e.end:e.start),e.right==null&&(e.right=a?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),a&&nn()!=$e.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),nn()==$e.INVERTED?e.left=e.right:nn()==$e.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;Di()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",a="right",r=this.elementRef.nativeElement;if(e=="top")return r.scrollTop;if(e=="bottom")return r.scrollHeight-r.clientHeight-r.scrollTop;let o=this.dir&&this.dir.value=="rtl";return e=="start"?e=o?a:t:e=="end"&&(e=o?t:a),o&&nn()==$e.INVERTED?e==t?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:o&&nn()==$e.NEGATED?e==t?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==t?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return i})(),Wc=20,pt=(()=>{class i{_platform=s(ee);_listeners;_viewportSize=null;_change=new E;_document=s(V);constructor(){let e=s(C),t=s(fe).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let a=r=>this._change.next(r);this._listeners=[t.listen("window","resize",a),t.listen("window","orientationchange",a)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:a}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+a,right:e.left+t,height:a,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),a=e.documentElement,r=a.getBoundingClientRect(),o=-r.top||e.body?.scrollTop||t.scrollY||a.scrollTop||0,l=-r.left||e.body?.scrollLeft||t.scrollX||a.scrollLeft||0;return{top:o,left:l}}change(e=Wc){return e>0?this._change.pipe(ua(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})();var Ri=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({})}return i})(),dr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[ae,Ri,ae,Ri]})}return i})();var Xc=new g("MATERIAL_ANIMATIONS"),Fs=null;function cr(){return s(Xc,{optional:!0})?.animationsDisabled||s(Gt,{optional:!0})==="NoopAnimations"?"di-disabled":(Fs??=s(ar).matchMedia("(prefers-reduced-motion)").matches,Fs?"reduced-motion":"enabled")}function we(){return cr()!=="enabled"}function ce(i){return i==null?"":typeof i=="string"?i:`${i}px`}function dn(i){return i!=null&&`${i}`!="false"}var je=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(je||{}),ur=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=je.HIDDEN;constructor(n,e,t,a=!1){this._renderer=n,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=a}fadeOut(){this._renderer.fadeOutRipple(this)}},Ps=an({passive:!0,capture:!0}),mr=class{_events=new Map;addHandler(n,e,t,a){let r=this._events.get(e);if(r){let o=r.get(t);o?o.add(a):r.set(t,new Set([a]))}else this._events.set(e,new Map([[t,new Set([a])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Ps)})}removeHandler(n,e,t){let a=this._events.get(n);if(!a)return;let r=a.get(e);r&&(r.delete(t),r.size===0&&a.delete(e),a.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,Ps)))}_delegateEventHandler=n=>{let e=ye(n);e&&this._events.get(n.type)?.forEach((t,a)=>{(a===e||a.contains(e))&&t.forEach(r=>r.handleEvent(n))})}},jn={enterDuration:225,exitDuration:150},Kc=800,Ls=an({passive:!0,capture:!0}),Vs=["mousedown","touchstart"],Bs=["mouseup","mouseleave","touchend","touchcancel"],Yc=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,a){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return i})(),Un=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new mr;constructor(n,e,t,a,r){this._target=n,this._ngZone=e,this._platform=a,a.isBrowser&&(this._containerElement=Ee(t)),r&&r.get(Ie).load(Yc)}fadeInRipple(n,e,t={}){let a=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=I(I({},jn),t.animation);t.centered&&(n=a.left+a.width/2,e=a.top+a.height/2);let o=t.radius||qc(n,e,a),l=n-a.left,d=e-a.top,p=r.enterDuration,c=document.createElement("div");c.classList.add("mat-ripple-element"),c.style.left=`${l-o}px`,c.style.top=`${d-o}px`,c.style.height=`${o*2}px`,c.style.width=`${o*2}px`,t.color!=null&&(c.style.backgroundColor=t.color),c.style.transitionDuration=`${p}ms`,this._containerElement.appendChild(c);let m=window.getComputedStyle(c),h=m.transitionProperty,u=m.transitionDuration,b=h==="none"||u==="0s"||u==="0s, 0s"||a.width===0&&a.height===0,y=new ur(this,c,t,b);c.style.transform="scale3d(1, 1, 1)",y.state=je.FADING_IN,t.persistent||(this._mostRecentTransientRipple=y);let P=null;return!b&&(p||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Ae=()=>{P&&(P.fallbackTimer=null),clearTimeout(Ue),this._finishRippleTransition(y)},Me=()=>this._destroyRipple(y),Ue=setTimeout(Me,p+100);c.addEventListener("transitionend",Ae),c.addEventListener("transitioncancel",Me),P={onTransitionEnd:Ae,onTransitionCancel:Me,fallbackTimer:Ue}}),this._activeRipples.set(y,P),(b||!p)&&this._finishRippleTransition(y),y}fadeOutRipple(n){if(n.state===je.FADING_OUT||n.state===je.HIDDEN)return;let e=n.element,t=I(I({},jn),n.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",n.state=je.FADING_OUT,(n._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=Ee(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Vs.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Bs.forEach(e=>{this._triggerElement.addEventListener(e,this,Ls)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===je.FADING_IN?this._startFadeOutTransition(n):n.state===je.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:t}=n.config;n.state=je.VISIBLE,!t&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=je.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=On(n),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Kc;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!Fn(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===je.VISIBLE||n.config.terminateOnPointerUp&&n.state===je.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(Vs.forEach(e=>i._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(Bs.forEach(e=>n.removeEventListener(e,this,Ls)),this._pointerUpEventsRegistered=!1))}};function qc(i,n,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),a=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(t*t+a*a)}var Fi=new g("mat-ripple-global-options"),Hn=(()=>{class i{_elementRef=s(S);_animationsDisabled=we();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=s(C),t=s(ee),a=s(Fi,{optional:!0}),r=s(Y);this._globalOptions=a||{},this._rippleRenderer=new Un(this,e,this._elementRef,t,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:I(I(I({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,a){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,I(I({},this.rippleConfig),a)):this._rippleRenderer.fadeInRipple(0,0,I(I({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,a){t&2&&z("mat-ripple-unbounded",a.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var Zc=new g("MatTabContent"),Qc=(()=>{class i{template=s(et);static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["","matTabContent",""]],features:[me([{provide:Zc,useExisting:i}])]})}return i})(),Jc=new g("MatTabLabel"),Hs=new g("MAT_TAB"),eu=(()=>{class i extends hs{_closestTab=s(Hs,{optional:!0});static \u0275fac=(()=>{let e;return function(a){return(e||(e=Te(i)))(a||i)}})();static \u0275dir=w({type:i,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[me([{provide:Jc,useExisting:i}]),le]})}return i})(),Gs=new g("MAT_TAB_GROUP"),vr=(()=>{class i{_viewContainerRef=s(tt);_closestTabGroup=s(Gs,{optional:!0});disabled=!1;get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}_templateLabel;_explicitContent=void 0;_implicitContent;textLabel="";ariaLabel;ariaLabelledby;labelClass;bodyClass;id=null;_contentPortal=null;get content(){return this._contentPortal}_stateChanges=new E;position=null;origin=null;isActive=!1;constructor(){s(Ie).load(sn)}ngOnChanges(e){(Object.hasOwn(e,"textLabel")||Object.hasOwn(e,"disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new _t(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["*"];function t(a,r){a&1&&Z(0)}return k({type:i,selectors:[["mat-tab"]],contentQueries:function(r,o,l){if(r&1&&nt(l,eu,5)(l,Qc,7,et),r&2){let d;R(d=O())&&(o.templateLabel=d.first),R(d=O())&&(o._explicitContent=d.first)}},viewQuery:function(r,o){if(r&1&&Oe(et,7),r&2){let l;R(l=O())&&(o._implicitContent=l.first)}},hostAttrs:["hidden",""],hostVars:1,hostBindings:function(r,o){r&2&&ne("id",null)},inputs:{disabled:[2,"disabled","disabled",N],textLabel:[0,"label","textLabel"],ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],labelClass:"labelClass",bodyClass:"bodyClass",id:"id"},exportAs:["matTab"],features:[me([{provide:Hs,useExisting:i}]),xe],ngContentSelectors:e,decls:1,vars:0,template:function(r,o){r&1&&(ge(),xo(0,t,1,0,"ng-template"))},encapsulation:2,changeDetection:1})})()}return i})(),pr="mdc-tab-indicator--active",zs="mdc-tab-indicator--no-transition",hr=class{_items;_currentItem;constructor(n){this._items=n}hide(){this._items.forEach(n=>n.deactivateInkBar()),this._currentItem=void 0}alignToElement(n){let e=this._items.find(a=>a.elementRef.nativeElement===n),t=this._currentItem;if(e!==t&&(t?.deactivateInkBar(),e)){let a=t?.elementRef.nativeElement.getBoundingClientRect?.();e.activateInkBar(a),this._currentItem=e}}},tu=(()=>{class i{_elementRef=s(S);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(e){this._fitToContent!==e&&(this._fitToContent=e,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(e){let t=this._elementRef.nativeElement;if(!e||!t.getBoundingClientRect||!this._inkBarContentElement){t.classList.add(pr);return}let a=t.getBoundingClientRect(),r=e.width/a.width,o=e.left-a.left;t.classList.add(zs),this._inkBarContentElement.style.setProperty("transform",`translateX(${o}px) scaleX(${r})`),t.getBoundingClientRect(),t.classList.remove(zs),t.classList.add(pr),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(pr)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let e=this._elementRef.nativeElement.ownerDocument||document,t=this._inkBarElement=e.createElement("span"),a=this._inkBarContentElement=e.createElement("span");t.className="mdc-tab-indicator",a.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",t.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let e=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;e.appendChild(this._inkBarElement)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",N]}})}return i})();var $s=(()=>{class i extends tu{elementRef=s(S);disabled=!1;focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Te(i)))(a||i)}})();static \u0275dir=w({type:i,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,a){t&2&&(ne("aria-disabled",!!a.disabled),z("mat-mdc-tab-disabled",a.disabled))},inputs:{disabled:[2,"disabled","disabled",N]},features:[le]})}return i})(),js={passive:!0},nu=650,iu=100;function fr(i){let n=i+"";return/^[0-9]+(?:\.[0-9]+)?$/.test(n)?`${i}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(n)?n:""}var au=(()=>{class i{_elementRef=s(S);_changeDetectorRef=s(he);_viewportRuler=s(pt);_dir=s(Fe,{optional:!0});_ngZone=s(C);_platform=s(ee);_sharedResizeObserver=s(Ti);_injector=s(Y);_renderer=s(re);_animationsDisabled=we();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new E;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new E;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){let t=isNaN(e)?0:e;this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}_selectedIndex=0;selectFocusedIndex=new M;indexFocused=new M;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,"mouseleave",()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("before"),js),this._renderer.listen(this._nextPaginator.nativeElement,"touchstart",()=>this._handlePaginatorPress("after"),js))}ngAfterContentInit(){let e=this._dir?this._dir.change:bt("ltr"),t=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(Ut(32),pe(this._destroyed)),a=this._viewportRuler.change(150).pipe(pe(this._destroyed)),r=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new zn(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),Je(r,{injector:this._injector}),Ye(e,a,t,this._items.changes,this._itemsResized()).pipe(pe(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),r()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(o=>{this.indexFocused.emit(o),this._setTabFocus(o)})}_itemsResized(){return typeof ResizeObserver!="function"?ai:this._items.changes.pipe(qe(this._items),Mt(e=>new Ke(t=>this._ngZone.runOutsideAngular(()=>{let a=new ResizeObserver(r=>t.next(r));return e.forEach(r=>a.observe(r.elementRef.nativeElement)),()=>{a.disconnect()}}))),Et(1),de(e=>e.some(t=>t.contentRect.width>0&&t.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!ze(e))switch(e.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let t=this._items.get(this.focusIndex);t&&!t.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e))}break;default:this._keyManager?.onKeydown(e)}}_onContentChanges(){let e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){return this._items?!!this._items.toArray()[e]:!0}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();let t=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?t.scrollLeft=0:t.scrollLeft=t.scrollWidth-t.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let e=this.scrollDistance,t=this._getLayoutDirection()==="ltr"?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(t)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){let t=this._tabListContainer.nativeElement.offsetWidth,a=(e=="before"?-1:1)*t/3;return this._scrollTo(this._scrollDistance+a)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;let t=this._items?this._items.toArray()[e]:null;if(!t)return;let a=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:r,offsetWidth:o}=t.elementRef.nativeElement,l,d;this._getLayoutDirection()=="ltr"?(l=r,d=l+o):(d=this._tabListInner.nativeElement.offsetWidth-r,l=d-o);let p=this.scrollDistance,c=this.scrollDistance+a;l<p?this.scrollDistance-=p-l:d>c&&(this.scrollDistance+=Math.min(d-c,l-p))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let e=this._tabListInner.nativeElement.scrollWidth,t=this._elementRef.nativeElement.offsetWidth,a=e-t>=5;a||(this.scrollDistance=0),a!==this._showPaginationControls&&(this._showPaginationControls=a,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let e=this._tabListInner.nativeElement.scrollWidth,t=this._tabListContainer.nativeElement.offsetWidth;return e-t||0}_alignInkBarToSelectedTab(){let e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,t=e?e.elementRef.nativeElement:null;t?this._inkBar.alignToElement(t):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,t){t&&t.button!=null&&t.button!==0||(this._stopInterval(),qr(nu,iu).pipe(pe(Ye(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:a,distance:r}=this._scrollHeader(e);(r===0||r>=a)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let t=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(t,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:t,distance:this._scrollDistance}}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,inputs:{disablePagination:[2,"disablePagination","disablePagination",N],selectedIndex:[2,"selectedIndex","selectedIndex",Ve]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"}})}return i})(),ru=(()=>{class i extends au{_items;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;ariaLabel;ariaLabelledby;disableRipple=!1;ngAfterContentInit(){this._inkBar=new hr(this._items),super.ngAfterContentInit()}_itemSelected(e){e.preventDefault()}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Te(i)))(a||i)}})();static \u0275cmp=(function(){let e=["tabListContainer"],t=["tabList"],a=["tabListInner"],r=["nextPaginator"],o=["previousPaginator"];return k({type:i,selectors:[["mat-tab-header"]],contentQueries:function(p,c,m){if(p&1&&nt(m,$s,4),p&2){let h;R(h=O())&&(c._items=h)}},viewQuery:function(p,c){if(p&1&&Oe(e,7)(t,7)(a,7)(r,5)(o,5),p&2){let m;R(m=O())&&(c._tabListContainer=m.first),R(m=O())&&(c._tabList=m.first),R(m=O())&&(c._tabListInner=m.first),R(m=O())&&(c._nextPaginator=m.first),R(m=O())&&(c._previousPaginator=m.first)}},hostAttrs:[1,"mat-mdc-tab-header"],hostVars:4,hostBindings:function(p,c){p&2&&z("mat-mdc-tab-header-pagination-controls-enabled",c._showPaginationControls)("mat-mdc-tab-header-rtl",c._getLayoutDirection()=="rtl")},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],disableRipple:[2,"disableRipple","disableRipple",N]},features:[le],ngContentSelectors:["*"],decls:13,vars:10,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-label-container",3,"keydown"],["role","tablist",1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-labels"],["mat-ripple","",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled"]],template:function(p,c){p&1&&(ge(),_(0,"div",5,0),q("click",function(){return c._handlePaginatorClick("before")})("mousedown",function(h){return c._handlePaginatorPress("before",h)})("touchend",function(){return c._stopInterval()}),ie(2,"div",6),x(),_(3,"div",7,1),q("keydown",function(h){return c._handleKeydown(h)}),_(5,"div",8,2),q("cdkObserveContent",function(){return c._onContentChanges()}),_(7,"div",9,3),Z(9),x()()(),_(10,"div",10,4),q("mousedown",function(h){return c._handlePaginatorPress("after",h)})("click",function(){return c._handlePaginatorClick("after")})("touchend",function(){return c._stopInterval()}),ie(12,"div",6),x()),p&2&&(z("mat-mdc-tab-header-pagination-disabled",c._disableScrollBefore),J("matRippleDisabled",c._disableScrollBefore||c.disableRipple),v(3),z("_mat-animation-noopable",c._animationsDisabled),v(2),ne("aria-label",c.ariaLabel||null)("aria-labelledby",c.ariaLabelledby||null),v(5),z("mat-mdc-tab-header-pagination-disabled",c._disableScrollAfter),J("matRippleDisabled",c._disableScrollAfter||c.disableRipple))},dependencies:[Hn,Es],styles:[`.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-label-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}
.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container {
  border-bottom: none;
  border-top-style: solid;
  border-top-width: var(--%NS%mat-tab-divider-height, 1px);
  border-top-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-labels {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-header .mat-mdc-tab-labels {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-labels, .mat-mdc-tab-labels.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab::before {
  margin: 5px;
}
@media (forced-colors: active) {
  .mat-mdc-tab[aria-disabled=true] {
    color: GrayText;
  }
}
`],encapsulation:2,changeDetection:1})})()}return i})(),ou=new g("MAT_TABS_CONFIG"),Us=(()=>{class i extends Ja{_host=s(br);_ngZone=s(C);_centeringSub=ue.EMPTY;_leavingSub=ue.EMPTY;ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(qe(this._host._isCenterPosition())).subscribe(e=>{this._host._content&&e&&!this.hasAttached()&&this._ngZone.run(()=>{Promise.resolve().then(),this.attach(this._host._content)})}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this._host.preserveContent||this._ngZone.run(()=>this.detach())})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Te(i)))(a||i)}})();static \u0275dir=w({type:i,selectors:[["","matTabBodyHost",""]],features:[le]})}return i})(),br=(()=>{class i{_elementRef=s(S);_dir=s(Fe,{optional:!0});_ngZone=s(C);_injector=s(Y);_renderer=s(re);_diAnimationsDisabled=we();_eventCleanups;_initialized=!1;_fallbackTimer;_positionIndex;_dirChangeSubscription=ue.EMPTY;_position;_previousPosition;_onCentering=new M;_beforeCentering=new M;_afterLeavingCenter=new M;_onCentered=new M(!0);_portalHost;_contentElement;_content;animationDuration="500ms";preserveContent=!1;set position(e){this._positionIndex=e,this._computePositionAnimationState()}constructor(){if(this._dir){let e=s(he);this._dirChangeSubscription=this._dir.change.subscribe(t=>{this._computePositionAnimationState(t),e.markForCheck()})}}ngOnInit(){this._bindTransitionEvents(),this._position==="center"&&(this._setActiveClass(!0),Je(()=>this._onCentering.emit(this._elementRef.nativeElement.clientHeight),{injector:this._injector})),this._initialized=!0}ngOnDestroy(){clearTimeout(this._fallbackTimer),this._eventCleanups?.forEach(e=>e()),this._dirChangeSubscription.unsubscribe()}_bindTransitionEvents(){this._ngZone.runOutsideAngular(()=>{let e=this._elementRef.nativeElement,t=a=>{a.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.remove("mat-tab-body-animating"),a.type==="transitionend"&&this._transitionDone())};this._eventCleanups=[this._renderer.listen(e,"transitionstart",a=>{a.target===this._contentElement?.nativeElement&&(this._elementRef.nativeElement.classList.add("mat-tab-body-animating"),this._transitionStarted())}),this._renderer.listen(e,"transitionend",t),this._renderer.listen(e,"transitioncancel",t)]})}_transitionStarted(){clearTimeout(this._fallbackTimer);let e=this._position==="center";this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_transitionDone(){this._position==="center"?this._onCentered.emit():this._previousPosition==="center"&&this._afterLeavingCenter.emit()}_setActiveClass(e){this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active",e)}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_isCenterPosition(){return this._positionIndex===0}_computePositionAnimationState(e=this._getLayoutDirection()){this._previousPosition=this._position,this._positionIndex<0?this._position=e=="ltr"?"left":"right":this._positionIndex>0?this._position=e=="ltr"?"right":"left":this._position="center",this._animationsDisabled()?this._simulateTransitionEvents():this._initialized&&(this._position==="center"||this._previousPosition==="center")&&(clearTimeout(this._fallbackTimer),this._fallbackTimer=this._ngZone.runOutsideAngular(()=>setTimeout(()=>this._simulateTransitionEvents(),100)))}_simulateTransitionEvents(){this._transitionStarted(),Je(()=>this._transitionDone(),{injector:this._injector})}_animationsDisabled(){return this._diAnimationsDisabled||this.animationDuration==="0ms"||this.animationDuration==="0s"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["content"];function t(a,r){}return k({type:i,selectors:[["mat-tab-body"]],viewQuery:function(r,o){if(r&1&&Oe(Us,5)(e,5),r&2){let l;R(l=O())&&(o._portalHost=l.first),R(l=O())&&(o._contentElement=l.first)}},hostAttrs:[1,"mat-mdc-tab-body"],hostVars:1,hostBindings:function(r,o){r&2&&ne("inert",o._position==="center"?null:"")},inputs:{_content:[0,"content","_content"],animationDuration:"animationDuration",preserveContent:"preserveContent",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_onCentered:"_onCentered"},decls:3,vars:6,consts:[["content",""],["cdkScrollable","",1,"mat-mdc-tab-body-content"],["matTabBodyHost",""]],template:function(r,o){r&1&&(_(0,"div",1,0),lt(2,t,0,0,"ng-template",2),x()),r&2&&z("mat-tab-body-content-left",o._position==="left")("mat-tab-body-content-right",o._position==="right")("mat-tab-body-content-can-animate",o._position==="center"||o._previousPosition==="center")},dependencies:[Us,Os],styles:[`.mat-mdc-tab-body {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  overflow: hidden;
  outline: 0;
  flex-basis: 100%;
}
.mat-mdc-tab-body.mat-mdc-tab-body-active {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  flex-grow: 1;
}
.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active {
  overflow-y: hidden;
}

.mat-mdc-tab-body-content {
  height: 100%;
  overflow: auto;
  transform: none;
  visibility: hidden;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content, .mat-mdc-tab-body-active > .mat-mdc-tab-body-content {
  visibility: visible;
}
.mat-tab-body-animating > .mat-mdc-tab-body-content {
  min-height: 1px;
}
.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content {
  overflow: hidden;
}

.mat-tab-body-content-can-animate {
  transition: transform var(--%NS%mat-tab-body-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate {
  transition: none;
}

.mat-tab-body-content-left {
  transform: translate3d(-100%, 0, 0);
}

.mat-tab-body-content-right {
  transform: translate3d(100%, 0, 0);
}
`],encapsulation:2,changeDetection:1})})()}return i})(),Ws=(()=>{class i{_elementRef=s(S);_changeDetectorRef=s(he);_ngZone=s(C);_tabsSubscription=ue.EMPTY;_tabLabelSubscription=ue.EMPTY;_tabBodySubscription=ue.EMPTY;_diAnimationsDisabled=we();_bodyAnimationDuration;_headerAnimationDuration;_allTabs;_tabBodies;_tabBodyWrapper;_tabHeader;_tabs=new Cn;_indexToSelect=0;_lastFocusedTabIndex=null;_tabBodyWrapperHeight=0;color;get fitInkBarToContent(){return this._fitInkBarToContent}set fitInkBarToContent(e){this._fitInkBarToContent=e,this._changeDetectorRef.markForCheck()}_fitInkBarToContent=!1;stretchTabs=!0;alignTabs=null;dynamicHeight=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=isNaN(e)?null:e}_selectedIndex=null;headerPosition="above";get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=e,e&&typeof e=="object"?(this._bodyAnimationDuration=fr(e.body),this._headerAnimationDuration=fr(e.header)):this._headerAnimationDuration=this._bodyAnimationDuration=fr(e)}_animationDuration;get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=isNaN(e)?null:e}_contentTabIndex=null;disablePagination=!1;disableRipple=!1;preserveContent=!1;get backgroundColor(){return this._backgroundColor}set backgroundColor(e){let t=this._elementRef.nativeElement.classList;t.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),e&&t.add("mat-tabs-with-background",`mat-background-${e}`),this._backgroundColor=e}_backgroundColor;ariaLabel;ariaLabelledby;selectedIndexChange=new M;focusChange=new M;animationDone=new M;selectedTabChange=new M(!0);_groupId;_isServer=!s(ee).isBrowser;constructor(){let e=s(ou,{optional:!0});this._groupId=s(Ce).getId("mat-tab-group-"),this.animationDuration=e&&e.animationDuration?e.animationDuration:"500ms",this.disablePagination=e&&e.disablePagination!=null?e.disablePagination:!1,this.dynamicHeight=e&&e.dynamicHeight!=null?e.dynamicHeight:!1,e?.contentTabIndex!=null&&(this.contentTabIndex=e.contentTabIndex),this.preserveContent=!!e?.preserveContent,this.fitInkBarToContent=e&&e.fitInkBarToContent!=null?e.fitInkBarToContent:!1,this.stretchTabs=e&&e.stretchTabs!=null?e.stretchTabs:!0,this.alignTabs=e&&e.alignTabs!=null?e.alignTabs:null}ngAfterContentChecked(){let e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){let t=this._selectedIndex==null;if(!t){this.selectedTabChange.emit(this._createChangeEvent(e));let a=this._tabBodyWrapper.nativeElement;a.style.minHeight=a.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((a,r)=>a.isActive=r===e),t||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((t,a)=>{t.position=a-e,this._selectedIndex!=null&&t.position==0&&!t.origin&&(t.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._lastFocusedTabIndex=null,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{let e=this._clampTabIndex(this._indexToSelect);if(e===this._selectedIndex){let t=this._tabs.toArray(),a;for(let r=0;r<t.length;r++)if(t[r].isActive){this._indexToSelect=this._selectedIndex=r,this._lastFocusedTabIndex=null,a=t[r];break}!a&&t[e]&&Promise.resolve().then(()=>{t[e].isActive=!0,this.selectedTabChange.emit(this._createChangeEvent(e))})}this._changeDetectorRef.markForCheck()})}ngAfterViewInit(){this._tabBodySubscription=this._tabBodies.changes.subscribe(()=>this._bodyCentered(!0))}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(qe(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(t=>t._closestTabGroup===this||!t._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe(),this._tabBodySubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}updatePagination(){this._tabHeader&&this._tabHeader.updatePagination()}focusTab(e){let t=this._tabHeader;t&&(t.focusIndex=e)}_focusChanged(e){this._lastFocusedTabIndex=e,this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){let t=new gr;return t.index=e,this._tabs&&this._tabs.length&&(t.tab=this._tabs.toArray()[e]),t}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Ye(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e,t){return e.id||`${this._groupId}-label-${t}`}_getTabContentId(e){return`${this._groupId}-content-${e}`}_setTabBodyWrapperHeight(e){if(!this.dynamicHeight||!this._tabBodyWrapperHeight){this._tabBodyWrapperHeight=e;return}let t=this._tabBodyWrapper.nativeElement;t.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(t.style.height=e+"px")}_removeTabBodyWrapperHeight(){let e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this._ngZone.run(()=>this.animationDone.emit())}_handleClick(e,t,a){t.focusIndex=a,e.disabled||(this.selectedIndex=a)}_getTabIndex(e){let t=this._lastFocusedTabIndex??this.selectedIndex;return e===t?0:-1}_tabFocusChanged(e,t){e&&e!=="mouse"&&e!=="touch"&&(this._tabHeader.focusIndex=t)}_bodyCentered(e){e&&this._tabBodies?.forEach((t,a)=>t._setActiveClass(a===this._selectedIndex))}_bodyAnimationsDisabled(){return this._diAnimationsDisabled||this._bodyAnimationDuration==="0"||this._bodyAnimationDuration==="0ms"}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["tabBodyWrapper"],t=["tabHeader"],a=["*"];function r(m,h){}function o(m,h){if(m&1&&lt(0,r,0,0,"ng-template",12),m&2){let u=$().$implicit;J("cdkPortalOutlet",u.templateLabel)}}function l(m,h){if(m&1&&W(0),m&2){let u=$().$implicit;De(u.textLabel)}}function d(m,h){if(m&1){let u=Tt();_(0,"div",7,2),q("click",function(){let y=Ze(u),P=y.$implicit,Ae=y.$index,Me=$(),Ue=vt(1);return Qe(Me._handleClick(P,Ue,Ae))})("cdkFocusChange",function(y){let P=Ze(u).$index,Ae=$();return Qe(Ae._tabFocusChanged(y,P))}),ie(2,"span",8)(3,"div",9),_(4,"span",10)(5,"span",11),H(6,o,1,1,null,12)(7,l,1,1),x()()()}if(m&2){let u=h.$implicit,b=h.$index,y=vt(1),P=$();Le(u.labelClass),z("mdc-tab--active",P.selectedIndex===b),J("id",P._getTabLabelId(u,b))("disabled",u.disabled)("fitInkBarToContent",P.fitInkBarToContent),ne("tabIndex",P._getTabIndex(b))("aria-posinset",b+1)("aria-setsize",P._tabs.length)("aria-controls",P._getTabContentId(b))("aria-selected",P.selectedIndex===b)("aria-label",u.ariaLabel||null)("aria-labelledby",!u.ariaLabel&&u.ariaLabelledby?u.ariaLabelledby:null),v(3),J("matRippleTrigger",y)("matRippleDisabled",u.disabled||P.disableRipple),v(3),G(u.templateLabel?6:7)}}function p(m,h){m&1&&Z(0)}function c(m,h){if(m&1){let u=Tt();_(0,"mat-tab-body",13),q("_onCentered",function(){Ze(u);let y=$();return Qe(y._removeTabBodyWrapperHeight())})("_onCentering",function(y){Ze(u);let P=$();return Qe(P._setTabBodyWrapperHeight(y))})("_beforeCentering",function(y){Ze(u);let P=$();return Qe(P._bodyCentered(y))}),x()}if(m&2){let u=h.$implicit,b=h.$index,y=$();Le(u.bodyClass),J("id",y._getTabContentId(b))("content",u.content)("position",u.position)("animationDuration",y._bodyAnimationDuration)("preserveContent",y.preserveContent),ne("tabindex",y.contentTabIndex!=null&&y.selectedIndex===b?y.contentTabIndex:null)("aria-labelledby",y._getTabLabelId(u,b))("aria-hidden",y.selectedIndex!==b)}}return k({type:i,selectors:[["mat-tab-group"]],contentQueries:function(h,u,b){if(h&1&&nt(b,vr,5),h&2){let y;R(y=O())&&(u._allTabs=y)}},viewQuery:function(h,u){if(h&1&&Oe(e,5)(t,5)(br,5),h&2){let b;R(b=O())&&(u._tabBodyWrapper=b.first),R(b=O())&&(u._tabHeader=b.first),R(b=O())&&(u._tabBodies=b)}},hostAttrs:[1,"mat-mdc-tab-group"],hostVars:13,hostBindings:function(h,u){h&2&&(ne("mat-align-tabs",u.alignTabs),Le("mat-"+(u.color||"primary")),Yt("--%NS%mat-tab-body-animation-duration",u._bodyAnimationDuration)("--%NS%mat-tab-header-animation-duration",u._headerAnimationDuration),z("mat-mdc-tab-group-dynamic-height",u.dynamicHeight)("mat-mdc-tab-group-inverted-header",u.headerPosition==="below")("mat-mdc-tab-group-stretch-tabs",u.stretchTabs))},inputs:{color:"color",fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",N],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",N],alignTabs:[0,"mat-align-tabs","alignTabs"],dynamicHeight:[2,"dynamicHeight","dynamicHeight",N],selectedIndex:[2,"selectedIndex","selectedIndex",Ve],headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:[2,"contentTabIndex","contentTabIndex",Ve],disablePagination:[2,"disablePagination","disablePagination",N],disableRipple:[2,"disableRipple","disableRipple",N],preserveContent:[2,"preserveContent","preserveContent",N],backgroundColor:"backgroundColor",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"]},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},exportAs:["matTabGroup"],features:[me([{provide:Gs,useExisting:i}])],ngContentSelectors:a,decls:9,vars:8,consts:[["tabHeader",""],["tabBodyWrapper",""],["tabNode",""],[3,"indexFocused","selectFocusedIndex","selectedIndex","disableRipple","disablePagination","aria-label","aria-labelledby"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"id","mdc-tab--active","class","disabled","fitInkBarToContent"],[1,"mat-mdc-tab-body-wrapper"],["role","tabpanel",3,"id","class","content","position","animationDuration","preserveContent"],["role","tab","matTabLabelWrapper","","cdkMonitorElementFocus","",1,"mdc-tab","mat-mdc-tab","mat-focus-indicator",3,"click","cdkFocusChange","id","disabled","fitInkBarToContent"],[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"_onCentered","_onCentering","_beforeCentering","id","content","position","animationDuration","preserveContent"]],template:function(h,u){h&1&&(ge(),_(0,"mat-tab-header",3,0),q("indexFocused",function(y){return u._focusChanged(y)})("selectFocusedIndex",function(y){return u.selectedIndex=y}),dt(2,d,8,17,"div",4,At),x(),H(4,p,1,0),_(5,"div",5,1),dt(7,c,1,10,"mat-tab-body",6,At),x()),h&2&&(J("selectedIndex",u.selectedIndex||0)("disableRipple",u.disableRipple)("disablePagination",u.disablePagination),Co("aria-label",u.ariaLabel)("aria-labelledby",u.ariaLabelledby),v(2),ct(u._tabs),v(2),G(u._isServer?4:-1),v(),z("_mat-animation-noopable",u._bodyAnimationsDisabled()),v(2),ct(u._tabs))},dependencies:[ru,$s,nr,Hn,Ja,br],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs > .mat-mdc-tab-header .mat-mdc-tab {
  flex-grow: 1;
}

.mat-mdc-tab-group {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background.mat-primary > .mat-mdc-tab-header .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-focus-indicator::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mdc-tab__ripple::before, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-group.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header {
  flex-direction: column-reverse;
}
.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline {
  align-self: flex-start;
}

.mat-mdc-tab-body-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  transition: height 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
.mat-mdc-tab-body-wrapper._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
`],encapsulation:2,changeDetection:1})})()}return i})(),gr=class{index;tab};var Xs=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[ae]})}return i})();var nl=(()=>{class i{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||i)(oe(re),oe(S))};static \u0275dir=w({type:i})}return i})(),lu=(()=>{class i extends nl{static \u0275fac=(()=>{let e;return function(a){return(e||(e=Te(i)))(a||i)}})();static \u0275dir=w({type:i,features:[le]})}return i})(),il=new g("");var du={provide:il,useExisting:gt(()=>Xi),multi:!0};function cu(){let i=Be()?Be().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var uu=new g(""),Xi=(()=>{class i extends nl{_compositionMode;_composing=!1;constructor(e,t,a){super(e,t),this._compositionMode=a,this._compositionMode==null&&(this._compositionMode=!cu())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||i)(oe(re),oe(S),oe(uu,8))};static \u0275dir=w({type:i,selectors:[["input","formControlName","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControlName","",3,"ngNoCva",""],["input","formControl","",3,"type","checkbox",3,"ngNoCva",""],["textarea","formControl","",3,"ngNoCva",""],["input","ngModel","",3,"type","checkbox",3,"ngNoCva",""],["textarea","ngModel","",3,"ngNoCva",""],["","ngDefaultControl",""]],hostBindings:function(t,a){t&1&&q("input",function(o){return a._handleInput(o.target.value)})("blur",function(){return a.onTouched()})("compositionstart",function(){return a._compositionStart()})("compositionend",function(o){return a._compositionEnd(o.target.value)})},standalone:!1,features:[me([du]),le]})}return i})();function xr(i){return i==null||Cr(i)===0}function Cr(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null}var Ki=new g(""),wr=new g(""),mu=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Lt=class{static min(n){return pu(n)}static max(n){return fu(n)}static required(n){return al(n)}static requiredTrue(n){return hu(n)}static email(n){return bu(n)}static minLength(n){return gu(n)}static maxLength(n){return vu(n)}static pattern(n){return yu(n)}static nullValidator(n){return Li()}static compose(n){return cl(n)}static composeAsync(n){return ul(n)}};function pu(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<i?{min:{min:i,actual:n.value}}:null}}function fu(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>i?{max:{max:i,actual:n.value}}:null}}function al(i){return xr(i.value)?{required:!0}:null}function hu(i){return i.value===!0?null:{required:!0}}function bu(i){return xr(i.value)||mu.test(i.value)?null:{email:!0}}function gu(i){return n=>{let e=n.value?.length??Cr(n.value);return e===null||e===0?null:e<i?{minlength:{requiredLength:i,actualLength:e}}:null}}function vu(i){return n=>{let e=n.value?.length??Cr(n.value);return e!==null&&e>i?{maxlength:{requiredLength:i,actualLength:e}}:null}}function yu(i){if(!i)return Li;let n,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=i.toString(),n=i),t=>{if(xr(t.value))return null;let a=t.value;return n.test(a)?null:{pattern:{requiredPattern:e,actualValue:a}}}}function Li(i){return null}function rl(i){return i!=null}function ol(i){return si(i)?Xr(i):i}function sl(i){let n={};return i.forEach(e=>{n=e!=null?I(I({},n),e):n}),Object.keys(n).length===0?null:n}function ll(i,n){return n.map(e=>e(i))}function _u(i){return!i.validate}function dl(i){return i.map(n=>_u(n)?n:e=>n.validate(e))}function cl(i){if(!i)return null;let n=i.filter(rl);return n.length==0?null:function(e){return sl(ll(e,n))}}function Sr(i){return i!=null?cl(dl(i)):null}function ul(i){if(!i)return null;let n=i.filter(rl);return n.length==0?null:function(e){let t=ll(e,n).map(ol);return Yr(t).pipe(_e(sl))}}function Dr(i){return i!=null?ul(dl(i)):null}function Ks(i,n){return i===null?[n]:Array.isArray(i)?[...i,n]:[i,n]}function ml(i){return i._rawValidators}function pl(i){return i._rawAsyncValidators}function yr(i){return i?Array.isArray(i)?i:[i]:[]}function Vi(i,n){return Array.isArray(i)?i.includes(n):i===n}function Ys(i,n){let e=yr(n);return yr(i).forEach(a=>{Vi(e,a)||e.push(a)}),e}function qs(i,n){return yr(n).filter(e=>!Vi(i,e))}var Bi=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Sr(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Dr(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},xt=class extends Bi{name;get formDirective(){return null}get path(){return null}};var Gn="VALID",Pi="INVALID",mn="PENDING",$n="DISABLED",Ct=class{},zi=class extends Ct{value;source;constructor(n,e){super(),this.value=n,this.source=e}},Xn=class extends Ct{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},Kn=class extends Ct{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},pn=class extends Ct{status;source;constructor(n,e){super(),this.status=n,this.source=e}},ji=class extends Ct{source;constructor(n){super(),this.source=n}},fn=class extends Ct{source;constructor(n){super(),this.source=n}};function fl(i){return(Yi(i)?i.validators:i)||null}function xu(i){return Array.isArray(i)?Sr(i):i||null}function hl(i,n){return(Yi(n)?n.asyncValidators:i)||null}function Cu(i){return Array.isArray(i)?Dr(i):i||null}function Yi(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function wu(i,n,e){let t=i.controls;if(!(n?Object.keys(t):t).length)throw new K(1e3,"");if(!bl(t,e))throw new K(1001,"")}function Su(i,n,e){i._forEachChild((t,a)=>{if(e[a]===void 0)throw new K(-1002,"")})}var Ui=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_hasRequired=j(!1);_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n,this._updateHasRequiredValidator()}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return se(this.statusReactive)}set status(n){se(()=>this.statusReactive.set(n))}_status=ve(()=>this.statusReactive());statusReactive=j(void 0);get valid(){return this.status===Gn}get invalid(){return this.status===Pi}get pending(){return this.status===mn}get disabled(){return this.status===$n}get enabled(){return this.status!==$n}errors;get pristine(){return se(this.pristineReactive)}set pristine(n){se(()=>this.pristineReactive.set(n))}_pristine=ve(()=>this.pristineReactive());pristineReactive=j(!0);get dirty(){return!this.pristine}get touched(){return se(this.touchedReactive)}set touched(n){se(()=>this.touchedReactive.set(n))}_touched=ve(()=>this.touchedReactive());touchedReactive=j(!1);get untouched(){return!this.touched}_events=new E;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Ys(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Ys(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(qs(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(qs(n,this._rawAsyncValidators))}hasValidator(n){return Vi(this._rawValidators,n)}hasAsyncValidator(n){return Vi(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(be(I({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new Kn(!0,t))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=n.sourceControl??this;this._forEachChild(a=>{a.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:t})}),n.onlySelf||this._parent?._updateTouched(n,t),e&&n.emitEvent!==!1&&this._events.next(new Kn(!1,t))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(be(I({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new Xn(!1,t))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=n.sourceControl??this;this._forEachChild(a=>{a.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,t),e&&n.emitEvent!==!1&&this._events.next(new Xn(!0,t))}markAsPending(n={}){this.status=mn;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new pn(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(be(I({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=$n,this.errors=null,this._forEachChild(a=>{a.disable(be(I({},n),{onlySelf:!0}))}),this._updateValue();let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new zi(this.value,t)),this._events.next(new pn(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(be(I({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(a=>a(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Gn,this._forEachChild(t=>{t.enable(be(I({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(be(I({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Gn||this.status===mn)&&this._runAsyncValidator(t,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new zi(this.value,e)),this._events.next(new pn(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(be(I({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?$n:Gn}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=mn,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let t=ol(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(a=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(a,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,a)=>t&&t._find(a),this)}getError(n,e){let t=e?this.get(e):this;return t?.errors?t.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,t){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||t)&&this._events.next(new pn(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,t)}_initObservables(){this.valueChanges=new M,this.statusChanges=new M}_calculateStatus(){return this._allControlsDisabled()?$n:this.errors?Pi:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(mn)?mn:this._anyControlsHaveStatus(Pi)?Pi:Gn}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let t=!this._anyControlsDirty(),a=this.pristine!==t;this.pristine=t,n.onlySelf||this._parent?._updatePristine(n,e),a&&this._events.next(new Xn(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Kn(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Yi(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=xu(this._rawValidators),this._updateHasRequiredValidator()}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Cu(this._rawAsyncValidators)}_updateHasRequiredValidator(){se(()=>this._hasRequired.set(this.hasValidator(Lt.required)))}};function bl(i,n){return Object.hasOwn(i,n)}function Du(i){return i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"}function Eu(i,n,e,t){switch(e){case"name":i.setAttribute(n,e,t);break;case"disabled":case"readonly":case"required":t?i.setAttribute(n,e,""):i.removeAttribute(n,e);break;case"max":case"min":case"minLength":case"maxLength":t!==void 0?i.setAttribute(n,e,t.toString()):i.removeAttribute(n,e);break}}var _r=class{kind;context;control;message;constructor({kind:n,context:e,control:t}){this.kind=n,this.context=e,this.control=t}};var Mu=(()=>{class i{_validator=Li;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let t=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(t),this._validator=this._enabled?this.createValidator(t):Li,this._onChange?.()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,features:[xe]})}return i})();var ku={provide:Ki,useExisting:gt(()=>gl),multi:!0};var gl=(()=>{class i extends Mu{required;inputName="required";normalizeInput=N;createValidator=e=>al;enabled(e){return e}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Te(i)))(a||i)}})();static \u0275dir=w({type:i,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,a){t&2&&ne("required",a._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[me([ku]),le]})}return i})();var Nu=new g(""),qi=new g("",{factory:()=>Er}),Er="always";function Iu(i,n){return[...n.path,i]}function Zs(i,n,e=Er){Mr(i,n),n.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(i.disabled),Tu(i,n),Ou(i,n),Ru(i,n),Au(i,n)}function Qs(i,n,e=!0){let t=()=>{};n?.valueAccessor?.registerOnChange(t),n?.valueAccessor?.registerOnTouched(t),Gi(i,n),i&&(n._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function Hi(i,n){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function Au(i,n){if(n.valueAccessor.setDisabledState){let e=t=>{n.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(e),n._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function Mr(i,n){let e=ml(i);n.validator!==null?i.setValidators(Ks(e,n.validator)):typeof e=="function"&&i.setValidators([e]);let t=pl(i);n.asyncValidator!==null?i.setAsyncValidators(Ks(t,n.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let a=()=>i.updateValueAndValidity();Hi(n._rawValidators,a),Hi(n._rawAsyncValidators,a)}function Gi(i,n){let e=!1;if(i!==null){if(n.validator!==null){let a=ml(i);if(Array.isArray(a)&&a.length>0){let r=a.filter(o=>o!==n.validator);r.length!==a.length&&(e=!0,i.setValidators(r))}}if(n.asyncValidator!==null){let a=pl(i);if(Array.isArray(a)&&a.length>0){let r=a.filter(o=>o!==n.asyncValidator);r.length!==a.length&&(e=!0,i.setAsyncValidators(r))}}}let t=()=>{};return Hi(n._rawValidators,t),Hi(n._rawAsyncValidators,t),e}function Tu(i,n){n.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&vl(i,n)})}function Ru(i,n){n.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&vl(i,n),i.updateOn!=="submit"&&i.markAsTouched()})}function vl(i,n){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Ou(i,n){let e=(t,a)=>{n.valueAccessor.writeValue(t),a&&n.viewToModelUpdate(t)};i.registerOnChange(e),n._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function yl(i,n){i==null,Mr(i,n)}function Fu(i,n){return Gi(i,n)}function Pu(i,n){if(!Object.hasOwn(i,"model"))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function Lu(i){return Object.getPrototypeOf(i.constructor)===lu}function _l(i,n){i._syncPendingControls(),n.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Vu(i,n){if(!n)return null;Array.isArray(n);let e,t,a;return n.forEach(r=>{r.constructor===Xi?e=r:Lu(r)?t=r:a=r}),a||t||e||null}function Bu(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1)}var zu={provide:Nu,useFactory:()=>{let i=s(at,{self:!0});return{setParseErrors:n=>{i.setParseErrorSource(n)},set onReset(n){i.onReset=n}}}},at=class extends Bi{_parent=null;name=null;valueAccessor=null;isCustomControlBased=!1;userOnReset;resetSubscription;set onReset(n){this.userOnReset=n,this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.control&&(this.resetSubscription=this.control.events.subscribe(e=>{e instanceof fn&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription?.add(this.resetSubscription))}isNativeFormElement=!1;rawValueAccessors;_selectedValueAccessor=null;get selectedValueAccessor(){return this._selectedValueAccessor??=Vu(this,this.rawValueAccessors)}parseErrorsValidator=null;renderer;injector;requiredValidatorViaDi;subscription;customControlBindings=null;constructor(n,e,t){super(),this.injector=n,this.renderer=e,this.rawValueAccessors=t,this.injector?.get(st)?.onDestroy(()=>{this.removeParseErrorsValidator(this.control),this.subscription?.unsubscribe()})}setupCustomControl(){this.subscription?.unsubscribe();let n=this.injector?.get(he);if(!this.control||!n)return;let e=n.markForCheck.bind(n);this.subscription=new ue,this.subscription.add(this.control.valueChanges.subscribe(e)),this.subscription.add(this.control.statusChanges.subscribe(e)),this.resetSubscription?.unsubscribe(),this.resetSubscription=void 0,this.userOnReset&&(this.resetSubscription=this.control.events.subscribe(t=>{t instanceof fn&&this.control&&this.userOnReset?.(this.control.value)}),this.subscription.add(this.resetSubscription)),this.parseErrorsValidator&&this.control.addValidators(this.parseErrorsValidator)}ngControlCreate(n){!n.nativeElement.hasAttribute?.("ngNoCva")&&(this.rawValueAccessors&&this.rawValueAccessors.length>0||this.valueAccessor!==null)||!n.customControl||(this.isCustomControlBased=!0,n.listenToCustomControlModel(a=>{this.control?.markAsDirty(),this.control?.setValue(a,{emitModelToViewChange:!1}),this.viewToModelUpdate(a)}),n.listenToCustomControlOutput("touch",()=>{this.control?.markAsTouched()}),this.customControlBindings={},this.isNativeFormElement=Du(n.nativeElement),this.requiredValidatorViaDi=this._rawValidators.find(a=>a instanceof gl))}ngControlUpdate(n,e){if(!this.isCustomControlBased)return;let t=this.control,a=this.customControlBindings;Object.is(a.value,t.value)||(a.value=t.value,n.setCustomControlModelInput(t.value)),this.bindControlProperty(n,a,"touched",t.touched),this.bindControlProperty(n,a,"dirty",t.dirty),this.bindControlProperty(n,a,"valid",t.valid),this.bindControlProperty(n,a,"invalid",t.invalid),this.bindControlProperty(n,a,"pending",t.pending),this.bindControlProperty(n,a,"disabled",t.disabled),this.shouldBindRequired&&this.bindControlProperty(n,a,"required",this.isRequired);let r=t.errors;if(a.errors!==r){a.errors=r;let o=this._convertErrors(r);n.setInputOnDirectives("errors",o)}}get isRequired(){return(this.requiredValidatorViaDi?._enabled||this.control?._hasRequired())??!1}get shouldBindRequired(){return!0}bindControlProperty(n,e,t,a){if(e[t]===a)return;e[t]=a;let r=n.setInputOnDirectives(t,a);this.isNativeFormElement&&!r&&(t==="disabled"||t==="required")&&this.renderer&&Eu(this.renderer,n.nativeElement,t,a)}_convertErrors(n){if(n===null)return[];let e=this.control;return Object.entries(n).map(([t,a])=>new _r({context:a,kind:t,control:e}))}setParseErrorSource(n){if(n===void 0)return;let e=null,t=ve(()=>{let a=n();return a.length===0?null:a.reduce((r,o)=>(r[o.kind]=o,r),{})});this.parseErrorsValidator=(()=>e).bind(this),Ge(()=>{e=t(),this.control?.updateValueAndValidity({emitEvent:!1})},{injector:this.injector})}removeParseErrorsValidator(n){this.parseErrorsValidator&&(n?.removeValidators(this.parseErrorsValidator),n?.updateValueAndValidity({emitEvent:!1}))}},$i=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var xl=(()=>{class i extends $i{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(oe(at,2))};static \u0275dir=w({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,a){t&2&&z("ng-untouched",a.isUntouched)("ng-touched",a.isTouched)("ng-pristine",a.isPristine)("ng-dirty",a.isDirty)("ng-valid",a.isValid)("ng-invalid",a.isInvalid)("ng-pending",a.isPending)},standalone:!1,features:[le]})}return i})(),Cl=(()=>{class i extends $i{constructor(e){super(e)}static \u0275fac=function(t){return new(t||i)(oe(xt,10))};static \u0275dir=w({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,a){t&2&&z("ng-untouched",a.isUntouched)("ng-touched",a.isTouched)("ng-pristine",a.isPristine)("ng-dirty",a.isDirty)("ng-valid",a.isValid)("ng-invalid",a.isInvalid)("ng-pending",a.isPending)("ng-submitted",a.isSubmitted)},standalone:!1,features:[le]})}return i})(),Wi=class extends Ui{constructor(n,e,t){super(fl(e),hl(t,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){let t=this._find(n);return t||(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,t={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){let t=this._find(n);t&&t._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,t={}){let a=this._find(n);a&&a._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(n){return this._find(n)?.enabled===!0}setValue(n,e={}){se(()=>{Su(this,!0,n),Object.keys(n).forEach(t=>{wu(this,!0,t),this.controls[t].setValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)})}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(t=>{let a=this._find(t);a&&a.patchValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((t,a)=>{t.reset(n?n[a]:null,be(I({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new fn(this))}getRawValue(){return this._reduceChildren({},(n,e,t)=>(n[t]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&n(t,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&n(t))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,t,a)=>((t.enabled||this.disabled)&&(e[a]=t.value),e))}_reduceChildren(n,e){let t=n;return this._forEachChild((a,r)=>{t=e(t,a,r)}),t}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return bl(this.controls,n)?this.controls[n]:null}};var ju={provide:xt,useExisting:gt(()=>Vt)},Wn=Promise.resolve(),Vt=(()=>{class i extends xt{callSetDisabledState;get submitted(){return se(this.submittedReactive)}_submitted=ve(()=>this.submittedReactive());submittedReactive=j(!1);_directives=new Set;form;ngSubmit=new M;options;constructor(e,t,a){super(),this.callSetDisabledState=a,this.form=new Wi({},Sr(e),Dr(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Wn.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),e._setupWithForm(this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Wn.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Wn.then(()=>{let t=this._findContainer(e.path),a=new Wi({});yl(a,e),t.registerControl(e.name,a),a.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Wn.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){Wn.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),_l(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new ji(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||i)(oe(Ki,10),oe(wr,10),oe(qi,8))};static \u0275dir=w({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,a){t&1&&q("submit",function(o){return a.onSubmit(o)})("reset",function(){return a.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[me([ju]),le]})}return i})();function Js(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1)}function el(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var wl=class extends Ui{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,t){super(fl(e),hl(t,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Yi(e)&&(e.nonNullable||e.initialValueIsDefault)&&(el(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){se(()=>{this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)})}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new fn(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Js(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Js(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){el(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var Uu=i=>i instanceof wl;var Hu=(()=>{class i extends xt{callSetDisabledState;get submitted(){return se(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=ve(()=>this._submittedReactive());_submittedReactive=j(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,a){super(),this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(t)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){if(!this.form)throw new K(1052,!1);Object.hasOwn(e,"form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Gi(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let t=this.form.get(e.path);return e._setupWithForm(t,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t}getControl(e){return this.form.get(e.path)}removeControl(e){Qs(e.control||null,e,!1),Bu(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,t){this.form.get(e.path).setValue(t)}onReset(){this.resetForm()}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,_l(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new ji(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,a=this.form.get(e.path);t!==a&&(Qs(t||null,e),Uu(a)&&e._setupWithForm(a,this.callSetDisabledState))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let t=this.form.get(e.path);yl(t,e),t.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&Fu(t,e)&&t.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Mr(this.form,this),this._oldForm&&Gi(this._oldForm,this)}static \u0275fac=function(t){return new(t||i)(oe(Ki,10),oe(wr,10),oe(qi,8))};static \u0275dir=w({type:i,features:[le,xe]})}return i})(),Gu={provide:xt,useExisting:gt(()=>Yn)},Yn=(()=>{class i extends Hu{form=null;ngSubmit=new M;get control(){return this.form}static \u0275fac=(()=>{let e;return function(a){return(e||(e=Te(i)))(a||i)}})();static \u0275dir=w({type:i,selectors:[["","formGroup",""]],hostBindings:function(t,a){t&1&&q("submit",function(o){return a.onSubmit(o)})("reset",function(){return a.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[me([Gu]),le]})}return i})(),$u={provide:at,useExisting:gt(()=>kr)},tl=Promise.resolve(),kr=(()=>{class i extends at{_changeDetectorRef;callSetDisabledState;control=new wl;static ngAcceptInputType_isDisabled;_registered=!1;_ngModelInjector;viewModel;name="";isDisabled;model;options;update=new M;constructor(e,t,a,r,o,l,d,p){super(d,p,r),this._changeDetectorRef=o,this.callSetDisabledState=l,this._parent=e,this._setValidators(t),this._setAsyncValidators(a)}ngOnChanges(e){if(this._registered,this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Pu(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}\u0275ngControlCreate(e){super.ngControlCreate(e)}\u0275ngControlUpdate(e){super.ngControlUpdate(e,!1)}get shouldBindRequired(){return!1}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Zs(this.control,this,this.callSetDisabledState)),this.control.updateValueAndValidity({emitEvent:!1})}_setupWithForm(e){this.isCustomControlBased?this.setupCustomControl():(this.valueAccessor??=this.selectedValueAccessor,Zs(this.control,this,e))}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){tl.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,a=t!==0&&N(t);tl.then(()=>{a&&!this.control.disabled?this.control.disable():!a&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Iu(e,this._parent):[e]}static \u0275fac=function(t){return new(t||i)(oe(xt,9),oe(Ki,10),oe(wr,10),oe(il,10),oe(he,8),oe(qi,8),oe(Y,8),oe(re,8))};static \u0275dir=w({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[me([$u,zu]),le,xe,_o(null)]})}return i})();var Sl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return i})();var Wu=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({})}return i})();var Dl=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:qi,useValue:e.callSetDisabledState??Er}]}}static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[Wu]})}return i})();var Ml=Symbol("FIELD_TREE");var kl=Symbol("IS_ASYNC_VALIDATION_RESOURCE"),El=class{reducer;create;brand;[kl];constructor(n,e){this.reducer=n,this.create=e}};function qn(i){return typeof i=="function"&&i[Ml]===!0}var Zi=new g("");var Bt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["mat-label"]]})}return i})(),Ku=new g("MatError");var Nr=(()=>{class i{align="start";id=s(Ce).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,a){t&2&&(Kt("id",a.id),ne("align",null),z("mat-mdc-form-field-hint-end",a.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),Yu=new g("MatPrefix");var qu=new g("MatSuffix");var Fl=new g("FloatingLabelParent"),Nl=(()=>{class i{_elementRef=s(S);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=s(Ti);_ngZone=s(C);_parent=s(Fl);_resizeSubscription=new ue;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Zu(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,a){t&2&&z("mdc-floating-label--float-above",a.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function Zu(i){let n=i;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Il="mdc-line-ripple--active",Qi="mdc-line-ripple--deactivating",Al=(()=>{class i{_elementRef=s(S);_cleanupTransitionEnd;constructor(){let e=s(C),t=s(re);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Qi),e.add(Il)}deactivate(){this._elementRef.nativeElement.classList.add(Qi)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,a=t.contains(Qi);e.propertyName==="opacity"&&a&&t.remove(Il,Qi)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),Tl=(()=>{class i{_elementRef=s(S);_ngZone=s(C);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["notch"];return k({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(r,o){if(r&1&&Oe(e,5),r&2){let l;R(l=O())&&(o._notch=l.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(r,o){r&2&&z("mdc-notched-outline--notched",o.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},ngContentSelectors:["*"],decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(r,o){r&1&&(ge(),Re(0,"div",1),ke(1,"div",2,0),Z(3),Ne(),Re(4,"div",3))},encapsulation:2})})()}return i})(),Zn=(()=>{class i{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i})}return i})();var Qn=new g("MatFormField"),Qu=new g("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Rl="fill",Ju="auto",Ol="fixed",em="translateY(-50%)",hn=(()=>{class i{_elementRef=s(S);_changeDetectorRef=s(he);_platform=s(ee);_idGenerator=s(Ce);_ngZone=s(C);_defaults=s(Qu,{optional:!0});_currentDirection;_unwrapMaybeSignal(e){return Pe(e)?e():e}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Sn("iconPrefixContainer");_textPrefixContainerSignal=Sn("textPrefixContainer");_iconSuffixContainerSignal=Sn("iconSuffixContainer");_textSuffixContainerSignal=Sn("textSuffixContainer");_prefixSuffixContainers=ve(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Mo(Bt);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=dn(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Ju}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Rl;this._appearanceSignal.set(t)}_appearanceSignal=j(Rl);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Ol}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Ol}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new E;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=we();constructor(){let e=this._defaults,t=s(Fe);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Ge(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=qn(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!qn(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=ve(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,a="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(a+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(a+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges?.pipe(qe([void 0,void 0]),_e(()=>[this._unwrapMaybeSignal(t.errorState),t.userAriaDescribedBy]),pa(),de(([[r,o],[l,d]])=>r!==l||o!==d)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&!qn(t.ngField)&&(this._valueChanges=t.ngControl.valueChanges.pipe(pe(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ye(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._unwrapMaybeSignal(this._control.focused);e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){_a({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=ve(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(e){let t=this._control?.ngField||this._control?.ngControl;if(!t)return!1;if(qn(t)){let a=t();return e==="valid"?a.valid():e==="dirty"?a.dirty():e==="touched"?a.touched():e==="pending"?a.pending():e==="untouched"?!a.touched():e==="pristine"?!a.dirty():e==="invalid"?!a.valid():!1}else{let a=t;return e==="valid"?a.valid:e==="dirty"?a.dirty:e==="touched"?a.touched:e==="pending"?a.pending:e==="untouched"?a.untouched:e==="pristine"?a.pristine:e==="invalid"?a.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,o=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;r?e.push(r.id):this._hintLabel&&e.push(this._hintLabelId),o&&e.push(o.id)}else this._errorChildren&&e.push(...this._errorChildren.map(r=>r.id));let t=this._control.describedByIds,a;if(t){let r=this._describedByIds||e;a=e.concat(t.filter(o=>o&&!r.includes(o)))}else a=e;this._control.setDescribedByIds(a),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,a=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,o=e?.getBoundingClientRect().width??0,l=t?.getBoundingClientRect().width??0,d=a?.getBoundingClientRect().width??0,p=r?.getBoundingClientRect().width??0,c=this._currentDirection==="rtl"?"-1":"1",m=`${o+l}px`,u=`calc(${c} * (${m} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,b=`var(--mat-mdc-form-field-label-transform, ${em} translateX(${u}))`,y=o+l+d+p;return[b,y]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,a]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),a!==null&&this._notchedOutline?._setMaxWidth(a)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["iconPrefixContainer"],t=["textPrefixContainer"],a=["iconSuffixContainer"],r=["textSuffixContainer"],o=["textField"],l=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],d=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function p(A,X){A&1&&ie(0,"span",21)}function c(A,X){if(A&1&&(_(0,"label",20),Z(1,1),H(2,p,1,0,"span",21),x()),A&2){let f=$(2);J("floating",f._shouldLabelFloat())("monitorResize",f._hasOutline())("id",f._labelId),ne("for",f._control.disableAutomaticLabeling?null:f._control.id),v(2),G(!f.hideRequiredMarker&&f._unwrapMaybeSignal(f._control.required)?2:-1)}}function m(A,X){if(A&1&&H(0,c,3,5,"label",20),A&2){let f=$();G(f._hasFloatingLabel()?0:-1)}}function h(A,X){A&1&&ie(0,"div",7)}function u(A,X){}function b(A,X){if(A&1&&lt(0,u,0,0,"ng-template",13),A&2){$(2);let f=vt(1);J("ngTemplateOutlet",f)}}function y(A,X){if(A&1&&(_(0,"div",9),H(1,b,1,1,null,13),x()),A&2){let f=$();J("matFormFieldNotchedOutlineOpen",f._shouldLabelFloat()),v(),G(f._forceDisplayInfixLabel()?-1:1)}}function P(A,X){A&1&&(_(0,"div",10,2),Z(2,2),x())}function Ae(A,X){A&1&&(_(0,"div",11,3),Z(2,3),x())}function Me(A,X){}function Ue(A,X){if(A&1&&lt(0,Me,0,0,"ng-template",13),A&2){$();let f=vt(1);J("ngTemplateOutlet",f)}}function wt(A,X){A&1&&(_(0,"div",14,4),Z(2,4),x())}function We(A,X){A&1&&(_(0,"div",15,5),Z(2,5),x())}function St(A,X){A&1&&ie(0,"div",16)}function Dt(A,X){A&1&&(_(0,"div",18),Z(1,6),x())}function ht(A,X){if(A&1&&(_(0,"mat-hint",22),W(1),x()),A&2){let f=$(2);J("id",f._hintLabelId),v(),De(f.hintLabel)}}function Xe(A,X){if(A&1&&(_(0,"div",19),H(1,ht,2,2,"mat-hint",22),Z(2,7),ie(3,"div",23),Z(4,8),x()),A&2){let f=$();v(),G(f.hintLabel?1:-1)}}return k({type:i,selectors:[["mat-form-field"]],contentQueries:function(X,f,Q){if(X&1&&(wo(Q,f._labelChild,Bt,5),nt(Q,Zn,5)(Q,Yu,5)(Q,qu,5)(Q,Ku,5)(Q,Nr,5)),X&2){ga();let Se;R(Se=O())&&(f._formFieldControl=Se.first),R(Se=O())&&(f._prefixChildren=Se),R(Se=O())&&(f._suffixChildren=Se),R(Se=O())&&(f._errorChildren=Se),R(Se=O())&&(f._hintChildren=Se)}},viewQuery:function(X,f){if(X&1&&(So(f._iconPrefixContainerSignal,e,5)(f._textPrefixContainerSignal,t,5)(f._iconSuffixContainerSignal,a,5)(f._textSuffixContainerSignal,r,5),Oe(o,5)(e,5)(t,5)(a,5)(r,5)(Nl,5)(Tl,5)(Al,5)),X&2){ga(4);let Q;R(Q=O())&&(f._textField=Q.first),R(Q=O())&&(f._iconPrefixContainer=Q.first),R(Q=O())&&(f._textPrefixContainer=Q.first),R(Q=O())&&(f._iconSuffixContainer=Q.first),R(Q=O())&&(f._textSuffixContainer=Q.first),R(Q=O())&&(f._floatingLabel=Q.first),R(Q=O())&&(f._notchedOutline=Q.first),R(Q=O())&&(f._lineRipple=Q.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(X,f){X&2&&z("mat-mdc-form-field-label-always-float",f._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",f._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",f._hasIconSuffix)("mat-form-field-invalid",f._unwrapMaybeSignal(f._control.errorState))("mat-form-field-disabled",f._unwrapMaybeSignal(f._control.disabled))("mat-form-field-autofilled",f._unwrapMaybeSignal(f._control.autofilled))("mat-form-field-appearance-fill",f.appearance=="fill")("mat-form-field-appearance-outline",f.appearance=="outline")("mat-form-field-hide-placeholder",f._hasFloatingLabel()&&!f._shouldLabelFloat())("mat-primary",f.color!=="accent"&&f.color!=="warn")("mat-accent",f.color==="accent")("mat-warn",f.color==="warn")("ng-untouched",f._shouldForward("untouched"))("ng-touched",f._shouldForward("touched"))("ng-pristine",f._shouldForward("pristine"))("ng-dirty",f._shouldForward("dirty"))("ng-valid",f._shouldForward("valid"))("ng-invalid",f._shouldForward("invalid"))("ng-pending",f._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[me([{provide:Qn,useExisting:i},{provide:Fl,useExisting:i}])],ngContentSelectors:d,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(X,f){if(X&1&&(ge(l),lt(0,m,1,1,"ng-template",null,0,Eo),_(2,"div",6,1),q("click",function(Se){return f._control.onContainerClick(Se)}),H(4,h,1,0,"div",7),_(5,"div",8),H(6,y,2,2,"div",9),H(7,P,3,0,"div",10),H(8,Ae,3,0,"div",11),_(9,"div",12),H(10,Ue,1,1,null,13),Z(11),x(),H(12,wt,3,0,"div",14),H(13,We,3,0,"div",15),x(),H(14,St,1,0,"div",16),x(),_(15,"div",17),H(16,Dt,2,0,"div",18)(17,Xe,5,1,"div",19),x()),X&2){let Q,Se=f._unwrapMaybeSignal(f._control.disabled);v(2),z("mdc-text-field--filled",!f._hasOutline())("mdc-text-field--outlined",f._hasOutline())("mdc-text-field--no-label",!f._hasFloatingLabel())("mdc-text-field--disabled",Se)("mdc-text-field--invalid",f._unwrapMaybeSignal(f._control.errorState)),v(2),G(!f._hasOutline()&&!Se?4:-1),v(2),G(f._hasOutline()?6:-1),v(),G(f._hasIconPrefix?7:-1),v(),G(f._hasTextPrefix?8:-1),v(2),G(!f._hasOutline()||f._forceDisplayInfixLabel()?10:-1),v(2),G(f._hasTextSuffix?12:-1),v(),G(f._hasIconSuffix?13:-1),v(),G(f._hasOutline()?-1:14),v(),z("mat-mdc-form-field-subscript-dynamic-size",f.subscriptSizing==="dynamic");let Td=f._getSubscriptMessageType();v(),G((Q=Td)==="error"?16:Q==="hint"?17:-1)}},dependencies:[Nl,Tl,wa,Al,Nr],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})})()}return i})();var ft=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[Ms,hn,ae]})}return i})();var Jn=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new E;bulk={select:n=>this._select(n),deselect:n=>this._deselect(n),setSelection:n=>this._setSelection(n)};constructor(n=!1,e,t=!0,a){this._multiple=n,this._emitChanges=t,this.compareWith=a,e&&e.length&&(n?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){return this._select(n)}deselect(...n){return this._deselect(n)}setSelection(...n){return this._setSelection(n)}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_select(n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(r=>this._getConcreteValue(r)));n.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let a=this._hasQueuedChanges();return this._emitChangeEvent(),a}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n}else return n}};var Ll=Di();function $l(i){return new Ji(i.get(pt),i.get(V))}var Ji=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=ce(-this._previousScrollPosition.left),n.style.top=ce(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,t=n.style,a=e.style,r=t.scrollBehavior||"",o=a.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),Ll&&(t.scrollBehavior=a.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Ll&&(t.scrollBehavior=r,a.scrollBehavior=o)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function Wl(i,n){return new ea(i.get(Oi),i.get(C),i.get(pt),n)}var ea=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,t,a){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=t,this._config=a}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(de(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var ei=class{enable(){}disable(){}attach(){}};function Ar(i,n){return n.some(e=>{let t=i.bottom<e.top,a=i.top>e.bottom,r=i.right<e.left,o=i.left>e.right;return t||a||r||o})}function Vl(i,n){return n.some(e=>{let t=i.top<e.top,a=i.bottom>e.bottom,r=i.left<e.left,o=i.right>e.right;return t||a||r||o})}function ni(i,n){return new ta(i.get(Oi),i.get(pt),i.get(C),n)}var ta=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,t,a){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=t,this._config=a}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:a}=this._viewportRuler.getViewportSize();Ar(e,[{width:t,height:a,bottom:a,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},Xl=(()=>{class i{_injector=s(Y);noop=()=>new ei;close=e=>Wl(this._injector,e);block=()=>$l(this._injector);reposition=e=>ni(this._injector,e);static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})(),ti=class{positionStrategy;scrollStrategy=new ei;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let t of e)n[t]!==void 0&&(this[t]=n[t])}}};var na=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var Kl=(()=>{class i{_attachedOverlays=[];_document=s(V);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,a){return a.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})(),Yl=(()=>{class i extends Kl{_ngZone=s(C);_renderer=s(fe).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let a=t.length-1;a>-1;a--){let r=t[a];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})(),ql=(()=>{class i extends Kl{_platform=s(ee);_ngZone=s(C);_renderer=s(fe).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,a={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(t,"pointerdown",this._pointerDownListener,a),r.listen(t,"click",this._clickListener,a),r.listen(t,"auxclick",this._clickListener,a),r.listen(t,"contextmenu",this._clickListener,a)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=ye(e)};_clickListener=e=>{let t=ye(e),a=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let o=r.length-1;o>-1;o--){let l=r[o],d=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,e,d))){if(Bl(l.overlayElement,t)||Bl(l.overlayElement,a))break;this._ngZone?this._ngZone.run(()=>d.next(e)):d.next(e)}}};static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})();function Bl(i,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=n;for(;t;){if(t===i)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var Zl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,a){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return i})(),Ql=(()=>{class i{_platform=s(ee);_containerElement;_document=s(V);_styleLoader=s(Ie);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Ha()){let a=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<a.length;r++)a[r].remove()}let t=this._document.createElement("div");t.classList.add(e),Ha()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(Zl)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})(),Tr=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,t,a){this._renderer=e,this._ngZone=t,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",a)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Rr(i){return i&&i.nodeType===1}var Ir=j([]),ia=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new E;_attachments=new E;_detachments=new E;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new E;_outsidePointerEvents=new E;_afterNextRenderRef;constructor(n,e,t,a,r,o,l,d,p,c=!1,m,h){this._portalOutlet=n,this._host=e,this._pane=t,this._config=a,this._ngZone=r,this._keyboardDispatcher=o,this._document=l,this._location=d,this._outsideClickDispatcher=p,this._animationsDisabled=c,this._injector=m,this._renderer=h,a.scrollStrategy&&(this._scrollStrategy=a.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=a.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),se(()=>{Ir.update(t=>t.includes(this)?t:[...t,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Je(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation==="pop-state"){let t=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>t.unsubscribe()}else this._config.disposeOnNavigation==="url-change"&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),se(()=>{Ir.update(e=>e.filter(t=>t!==this))}),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,se(()=>{Ir.update(e=>e.filter(t=>t!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=I(I({},this._config),n),this._updateElementSize()}setDirection(n){this._config=be(I({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=ce(this._config.width),n.height=ce(this._config.height),n.minWidth=ce(this._config.minWidth),n.minHeight=ce(this._config.minHeight),n.maxWidth=ce(this._config.maxWidth),n.maxHeight=ce(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Rr(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(n){}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Tr(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,t){let a=ir(e||[]).filter(r=>!!r);a.length&&(t?n.classList.add(...a):n.classList.remove(...a))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Je(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},zl="cdk-overlay-connected-position-bounding-box",tm=/([A-Za-z%]+)$/;function Or(i,n){return new aa(n,i.get(pt),i.get(V),i.get(ee),i.get(Ql))}var aa=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new E;_resizeSubscription=ue.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,t,a,r){this._viewportRuler=e,this._document=t,this._platform=a,this._overlayContainer=r,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(zl),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,t=this._viewportRect,a=this._containerRect,r=[],o;for(let l of this._preferredPositions){let d=this._getOriginPoint(n,a,l),p=this._getOverlayPoint(d,e,l),c=this._getOverlayFit(p,e,t,l);if(c.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,d);return}if(this._canFitWithFlexibleDimensions(c,p,t)){r.push({position:l,origin:d,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(d,l)});continue}(!o||o.overlayFit.visibleArea<c.visibleArea)&&(o={overlayFit:c,overlayPoint:p,originPoint:d,position:l,overlayRect:e})}if(r.length){let l=null,d=-1;for(let p of r){let c=p.boundingBoxRect.width*p.boundingBoxRect.height*(p.position.weight||1);c>d&&(d=c,l=p)}this._isPushed=!1,this._applyPosition(l.position,l.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(o.position,o.originPoint);return}this._applyPosition(o.position,o.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&zt(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(zl),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof S?this._origin.nativeElement:Rr(this._origin)?this._origin:null}_getOriginPoint(n,e,t){let a;if(t.originX=="center")a=n.left+n.width/2;else{let o=this._isRtl()?n.right:n.left,l=this._isRtl()?n.left:n.right;a=t.originX=="start"?o:l}e.left<0&&(a-=e.left);let r;return t.originY=="center"?r=n.top+n.height/2:r=t.originY=="top"?n.top:n.bottom,e.top<0&&(r-=e.top),{x:a,y:r}}_getOverlayPoint(n,e,t){let a;t.overlayX=="center"?a=-e.width/2:t.overlayX==="start"?a=this._isRtl()?-e.width:0:a=this._isRtl()?0:-e.width;let r;return t.overlayY=="center"?r=-e.height/2:r=t.overlayY=="top"?0:-e.height,{x:n.x+a,y:n.y+r}}_getOverlayFit(n,e,t,a){let r=Ul(e),{x:o,y:l}=n,d=this._getOffset(a,"x"),p=this._getOffset(a,"y");d&&(o+=d),p&&(l+=p);let c=0-o,m=o+r.width-t.width,h=0-l,u=l+r.height-t.height,b=this._subtractOverflows(r.width,c,m),y=this._subtractOverflows(r.height,h,u),P=b*y;return{visibleArea:P,isCompletelyWithinViewport:r.width*r.height===P,fitsInViewportVertically:y===r.height,fitsInViewportHorizontally:b==r.width}}_canFitWithFlexibleDimensions(n,e,t){if(this._hasFlexibleDimensions){let a=t.bottom-e.y,r=t.right-e.x,o=jl(this._overlayRef.getConfig().minHeight),l=jl(this._overlayRef.getConfig().minWidth),d=n.fitsInViewportVertically||o!=null&&o<=a,p=n.fitsInViewportHorizontally||l!=null&&l<=r;return d&&p}return!1}_pushOverlayOnScreen(n,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let a=Ul(e),r=this._viewportRect,o=Math.max(n.x+a.width-r.width,0),l=Math.max(n.y+a.height-r.height,0),d=Math.max(r.top-t.top-n.y,0),p=Math.max(r.left-t.left-n.x,0),c=0,m=0;return a.width<=r.width?c=p||-o:c=n.x<this._getViewportMarginStart()?r.left-t.left-n.x:0,a.height<=r.height?m=d||-l:m=n.y<this._getViewportMarginTop()?r.top-t.top-n.y:0,this._previousPushAmount={x:c,y:m},{x:n.x+c,y:n.y+m}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!nm(this._lastScrollVisibility,t)){let a=new na(n,t);this._positionChanges.next(a)}this._lastScrollVisibility=t}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,a=n.overlayY;n.overlayX==="center"?t="center":this._isRtl()?t=n.overlayX==="start"?"right":"left":t=n.overlayX==="start"?"left":"right";for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${t} ${a}`}_calculateBoundingBoxRect(n,e){let t=this._viewportRect,a=this._isRtl(),r,o,l;if(e.overlayY==="top")o=n.y,r=t.height-o+this._getViewportMarginBottom();else if(e.overlayY==="bottom")l=t.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=t.height-l+this._getViewportMarginTop();else{let u=Math.min(t.bottom-n.y+t.top,n.y),b=this._lastBoundingBoxSize.height;r=u*2,o=n.y-u,r>b&&!this._isInitialRender&&!this._growAfterOpen&&(o=n.y-b/2)}let d=e.overlayX==="start"&&!a||e.overlayX==="end"&&a,p=e.overlayX==="end"&&!a||e.overlayX==="start"&&a,c,m,h;if(p)h=t.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),c=n.x-this._getViewportMarginStart();else if(d)m=n.x,c=t.right-n.x-this._getViewportMarginEnd();else{let u=Math.min(t.right-n.x+t.left,n.x),b=this._lastBoundingBoxSize.width;c=u*2,m=n.x-u,c>b&&!this._isInitialRender&&!this._growAfterOpen&&(m=n.x-b/2)}return{top:o,left:m,bottom:l,right:h,width:c,height:r}}_setBoundingBoxStyles(n,e){let t=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let a={};if(this._hasExactPosition())a.top=a.left="0",a.bottom=a.right="auto",a.maxHeight=a.maxWidth="",a.width=a.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,o=this._overlayRef.getConfig().maxWidth;a.width=ce(t.width),a.height=ce(t.height),a.top=ce(t.top)||"auto",a.bottom=ce(t.bottom)||"auto",a.left=ce(t.left)||"auto",a.right=ce(t.right)||"auto",e.overlayX==="center"?a.alignItems="center":a.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?a.justifyContent="center":a.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",r&&(a.maxHeight=ce(r)),o&&(a.maxWidth=ce(o))}this._lastBoundingBoxSize=t,zt(this._boundingBox.style,a)}_resetBoundingBoxStyles(){zt(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){zt(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let t={},a=this._hasExactPosition(),r=this._hasFlexibleDimensions,o=this._overlayRef.getConfig();if(a){let c=this._viewportRuler.getViewportScrollPosition();zt(t,this._getExactOverlayY(e,n,c)),zt(t,this._getExactOverlayX(e,n,c))}else t.position="static";let l="",d=this._getOffset(e,"x"),p=this._getOffset(e,"y");d&&(l+=`translateX(${d}px) `),p&&(l+=`translateY(${p}px)`),t.transform=l.trim(),o.maxHeight&&(a?t.maxHeight=ce(o.maxHeight):r&&(t.maxHeight="")),o.maxWidth&&(a?t.maxWidth=ce(o.maxWidth):r&&(t.maxWidth="")),zt(this._pane.style,t)}_getExactOverlayY(n,e,t){let a={top:"",bottom:""},r=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t)),n.overlayY==="bottom"){let o=this._document.documentElement.clientHeight;a.bottom=`${o-(r.y+this._overlayRect.height)}px`}else a.top=ce(r.y);return a}_getExactOverlayX(n,e,t){let a={left:"",right:""},r=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t));let o;if(this._isRtl()?o=n.overlayX==="end"?"left":"right":o=n.overlayX==="end"?"right":"left",o==="right"){let l=this._document.documentElement.clientWidth;a.right=`${l-(r.x+this._overlayRect.width)}px`}else a.left=ce(r.x);return a}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(a=>a.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Vl(n,t),isOriginOutsideView:Ar(n,t),isOverlayClipped:Vl(e,t),isOverlayOutsideView:Ar(e,t)}}_subtractOverflows(n,...e){return e.reduce((t,a)=>t-Math.max(a,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+n-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&ir(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof S)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,t=n.height||0;return{top:n.y,bottom:n.y+t,left:n.x,right:n.x+e,height:t,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let t=e.getBoundingClientRect();return n&&(e.style.display=""),t}};function zt(i,n){for(let e in n)Object.hasOwn(n,e)&&(i[e]=n[e]);return i}function jl(i){if(typeof i!="number"&&i!=null){let[n,e]=i.split(tm);return!e||e==="px"?parseFloat(n):null}return i||null}function Ul(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function nm(i,n){return i===n?!0:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView}var Hl="cdk-global-overlay-wrapper";function Jl(i){return new ra}var ra=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(Hl),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:a,height:r,maxWidth:o,maxHeight:l}=t,d=(a==="100%"||a==="100vw")&&(!o||o==="100%"||o==="100vw"),p=(r==="100%"||r==="100vh")&&(!l||l==="100%"||l==="100vh"),c=this._xPosition,m=this._xOffset,h=this._overlayRef.getConfig().direction==="rtl",u="",b="",y="";d?y="flex-start":c==="center"?(y="center",h?b=m:u=m):h?c==="left"||c==="end"?(y="flex-end",u=m):(c==="right"||c==="start")&&(y="flex-start",b=m):c==="left"||c==="start"?(y="flex-start",u=m):(c==="right"||c==="end")&&(y="flex-end",b=m),n.position=this._cssPosition,n.marginLeft=d?"0":u,n.marginTop=p?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=d?"0":b,e.justifyContent=y,e.alignItems=p?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(Hl),t.justifyContent=t.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},ed=(()=>{class i{_injector=s(Y);global(){return Jl()}flexibleConnectedTo(e){return Or(this._injector,e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})(),ii=new g("OVERLAY_DEFAULT_CONFIG");function Fr(i,n){i.get(Ie).load(Zl);let e=i.get(Ql),t=i.get(V),a=i.get(Ce),r=i.get(It),o=i.get(Fe),l=i.get(re,null,{optional:!0})||i.get(fe).createRenderer(null,null),d=new ti(n),p=i.get(ii,null,{optional:!0})?.usePopover??!0;d.direction=d.direction||o.value,!t.body||!("showPopover"in t.body)?d.usePopover=!1:d.usePopover=n?.usePopover??p;let c=t.createElement("div"),m=t.createElement("div");c.id=a.getId("cdk-overlay-"),c.classList.add("cdk-overlay-pane"),m.appendChild(c),d.usePopover&&(m.setAttribute("popover","manual"),m.classList.add("cdk-overlay-popover"));let h=d.usePopover?d.positionStrategy?.getPopoverInsertionPoint?.():null;return Rr(h)?h.after(m):h?.type==="parent"?h.element.appendChild(m):e.getContainerElement().appendChild(m),new ia(new Mi(c,r,i),m,c,d,i.get(C),i.get(Yl),t,i.get(ui),i.get(ql),n?.disableAnimations??i.get(Gt,null,{optional:!0})==="NoopAnimations",i.get(rt),l)}var td=(()=>{class i{scrollStrategies=s(Xl);_positionBuilder=s(ed);_injector=s(Y);create(e){return Fr(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})(),im=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],am=new g("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(Y);return()=>ni(i)}}),bn=(()=>{class i{elementRef=s(S);static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return i})(),nd=new g("cdk-connected-overlay-default-config"),oa=(()=>{class i{_dir=s(Fe,{optional:!0});_injector=s(Y);_overlayRef;_templatePortal;_backdropSubscription=ue.EMPTY;_attachSubscription=ue.EMPTY;_detachSubscription=ue.EMPTY;_positionSubscription=ue.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=s(am);_ngZone=s(C);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new M;positionChange=new M;attach=new M;detach=new M;overlayKeydown=new M;overlayOutsideClick=new M;constructor(){let e=s(et),t=s(tt),a=s(nd,{optional:!0}),r=s(ii,{optional:!0});this.usePopover=r?.usePopover===!1?null:"global",this._templatePortal=new _t(e,t),this.scrollStrategy=this._scrollStrategyFactory(),a&&this._assignConfig(a)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=im);let e=this._overlayRef=Fr(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!ze(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let a=this._getOriginElement(),r=ye(t);(!a||a!==r&&!a.contains(r))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new ti({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(a=>({originX:a.originX,originY:a.originY,overlayX:a.overlayX,overlayY:a.overlayY,offsetX:a.offsetX||this.offsetX,offsetY:a.offsetY||this.offsetY,panelClass:a.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=Or(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof bn?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof bn?this.origin.elementRef.nativeElement:this.origin instanceof S?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Jr(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",N],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",N],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",N],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",N],push:[2,"cdkConnectedOverlayPush","push",N],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",e=>e==="url-change"||e==="pop-state"?e:N(e)],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",N],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[xe]})}return i})(),Pr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({providers:[td],imports:[ae,bs,dr,dr]})}return i})();var id=(()=>{class i{_animationsDisabled=we();state="unchecked";disabled=!1;appearance="full";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,a){t&2&&z("mat-pseudo-checkbox-indeterminate",a.state==="indeterminate")("mat-pseudo-checkbox-checked",a.state==="checked")("mat-pseudo-checkbox-disabled",a.disabled)("mat-pseudo-checkbox-minimal",a.appearance==="minimal")("mat-pseudo-checkbox-full",a.appearance==="full")("_mat-animation-noopable",a._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,a){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return i})();var Vr=new g("MAT_OPTION_PARENT_COMPONENT"),Br=new g("MatOptgroup");var Lr=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e}},gn=(()=>{class i{_element=s(S);_changeDetectorRef=s(he);_parent=s(Vr,{optional:!0});group=s(Br,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=s(Ce).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=j(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new M;_text;_stateChanges=new E;constructor(){let e=s(Ie);e.load(sn),e.load(er),this._signalDisableRipple=!!this._parent&&Pe(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let a=this._getHostElement();typeof a.focus=="function"&&a.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!ze(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Lr(this,e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["text"],t=[[["mat-icon"]],"*"],a=["mat-icon","*"];function r(d,p){if(d&1&&ie(0,"mat-pseudo-checkbox",1),d&2){let c=$();J("disabled",c.disabled)("state",c.selected?"checked":"unchecked")}}function o(d,p){if(d&1&&ie(0,"mat-pseudo-checkbox",3),d&2){let c=$();J("disabled",c.disabled)}}function l(d,p){if(d&1&&(_(0,"span",4),W(1),x()),d&2){let c=$();v(),it("(",c.group.label,")")}}return k({type:i,selectors:[["mat-option"]],viewQuery:function(p,c){if(p&1&&Oe(e,7),p&2){let m;R(m=O())&&(c._text=m.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(p,c){p&1&&q("click",function(){return c._selectViaInteraction()})("keydown",function(h){return c._handleKeydown(h)}),p&2&&(Kt("id",c.id),ne("aria-selected",c.selected)("aria-disabled",c.disabled.toString()),z("mdc-list-item--selected",c.selected)("mat-mdc-option-multiple",c.multiple)("mat-mdc-option-active",c.active)("mdc-list-item--disabled",c.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",N]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:a,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(p,c){p&1&&(ge(t),H(0,r,1,2,"mat-pseudo-checkbox",1),Z(1),_(2,"span",2,0),Z(4,1),x(),H(5,o,1,1,"mat-pseudo-checkbox",3),H(6,l,2,1,"span",4),ie(7,"div",5)),p&2&&(G(c.multiple?0:-1),v(5),G(!c.multiple&&c.selected&&!c.hideSingleSelectionIndicator?5:-1),v(),G(c.group&&c.group._inert?6:-1),v(),J("matRippleTrigger",c._getHostElement())("matRippleDisabled",c.disabled||c.disableRipple))},dependencies:[id,Hn],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--%NS%mat-option-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-option-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-option-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-option-label-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-option-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-option-label-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--%NS%mat-option-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--%NS%mat-option-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--%NS%mat-option-selected-state-layer-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--%NS%selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-option-selected-state-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--%NS%selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --%NS%mat-list-list-item-selected-container-color: var(--%NS%mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})})()}return i})();function ad(i,n,e){if(e.length){let t=n.toArray(),a=e.toArray(),r=0;for(let o=0;o<i+1;o++)t[o].group&&t[o].group===a[r]&&r++;return r}return 0}function rd(i,n,e,t){return i<e?i:i+n>e+t?Math.max(0,i-t+n):e}var sa=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),a=e().touched();return t&&a}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})();var vn=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(n,e,t,a,r){this._defaultMatcher=n,this._parentFormGroup=t,this._parentForm=a,this._stateChanges=r,e?Pe(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let n=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==n&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(n){if(this.formField&&n?.isSignalErrorState)return n.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,t=this.ngControl?this.ngControl.control:null;return n?.isErrorState(t,e)??!1}};var la=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[ae]})}return i})();var od=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[ae]})}return i})();var zr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[la,od,gn,ae]})}return i})();var rm=new g("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(Y);return()=>ni(i)}}),om=new g("MAT_SELECT_CONFIG"),sm=new g("MatSelectTrigger"),jr=class{source;value;constructor(n,e){this.source=n,this.value=e}},sd=(()=>{class i{_viewportRuler=s(pt);_changeDetectorRef=s(he);_elementRef=s(S);_dir=s(Fe,{optional:!0});_idGenerator=s(Ce);_renderer=s(re);_parentFormField=s(Qn,{optional:!0});ngControl=s(at,{self:!0,optional:!0});_liveAnnouncer=s(rr);_defaultOptions=s(om,{optional:!0});_animationsDisabled=we();_popoverLocation;_initialized=new E;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let a=this.panel.nativeElement,r=ad(e,this.options,this.optionGroups),o=t._getHostElement();e===0&&r===1?a.scrollTop=0:a.scrollTop=rd(o.offsetTop,o.offsetHeight,a.scrollTop,a.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new jr(this,e)}_scrollStrategyFactory=s(rm);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new E;_errorStateTracker;stateChanges=new E;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=j(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Lt.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Kr(()=>{let e=this.options;return e?e.changes.pipe(qe(e),Mt(()=>Ye(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Mt(()=>this.optionSelectionChanges))});openedChange=new M;_openedStream=this.openedChange.pipe(de(e=>e),_e(()=>{}));_closedStream=this.openedChange.pipe(de(e=>!e),_e(()=>{}));selectionChange=new M;valueChange=new M;constructor(){let e=s(sa),t=s(Vt,{optional:!0}),a=s(Yn,{optional:!0}),r=s(new va("tabindex"),{optional:!0}),o=s(ii,{optional:!0}),l=s(Zi,{optional:!0,self:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new vn(e,l||this.ngControl,a,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=o?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Jn(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(pe(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(pe(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(qe(null),pe(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let a=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?a.setAttribute("aria-labelledby",e):a.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._panelOpen=!0,this._overlayDir.positionChange.pipe(_n(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(a),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",r=>{r.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),a=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,a=t===40||t===38||t===37||t===39,r=t===13||t===32,o=this._keyManager;if(!o.isTyping()&&r&&!ze(e)||(this.multiple||e.altKey)&&a)e.preventDefault(),this.open();else if(!this.multiple){let l=this.selected;o.onKeydown(e);let d=this.selected;d&&l!==d&&this._liveAnnouncer.announce(d.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,a=e.keyCode,r=a===40||a===38,o=t.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(!o&&(a===13||a===32)&&t.activeItem&&!ze(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!o&&this._multiple&&a===65&&e.ctrlKey){e.preventDefault();let l=this.options.some(d=>!d.disabled&&!d.selected);this.options.forEach(d=>{d.disabled||(l?d.select():d.deselect())})}else{let l=t.activeItemIndex;t.onKeydown(e),this._multiple&&r&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==l&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!ze(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(a=>{if(this._selectionModel.isSelected(a))return!1;try{return(a.value!=null||this.canSelectNullableOptions)&&this._compareWith(a.value,e)}catch(r){return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof bn?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new Bn(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Ye(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(pe(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Ye(...this.options.map(t=>t._stateChanges)).pipe(pe(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let a=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(a!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),a!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,a)=>this.sortComparator?this.sortComparator(t,a,e):e.indexOf(t)-e.indexOf(a)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(a=>a.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=ye(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=["trigger"],t=["panel"],a=[[["mat-select-trigger"]],"*"],r=["mat-select-trigger","*"];function o(m,h){if(m&1&&(_(0,"span",4),W(1),x()),m&2){let u=$();v(),De(u.placeholder)}}function l(m,h){m&1&&Z(0)}function d(m,h){if(m&1&&(_(0,"span",11),W(1),x()),m&2){let u=$(2);v(),De(u.triggerValue)}}function p(m,h){if(m&1&&(_(0,"span",5),H(1,l,1,0)(2,d,2,1,"span",11),x()),m&2){let u=$();v(),G(u.customTrigger?1:2)}}function c(m,h){if(m&1){let u=Tt();_(0,"div",12,1),q("keydown",function(y){Ze(u);let P=$();return Qe(P._handleKeydown(y))}),Z(2,1),x()}if(m&2){let u=$();Le(u.panelClass),z("mat-select-panel-animations-enabled",!u._animationsDisabled)("mat-primary",u._parentFormField?.color==="primary")("mat-accent",u._parentFormField?.color==="accent")("mat-warn",u._parentFormField?.color==="warn")("mat-undefined",!u._parentFormField?.color),ne("id",u.id+"-panel")("aria-multiselectable",u.multiple)("aria-label",u.ariaLabel||null)("aria-labelledby",u._getPanelAriaLabelledby())}}return k({type:i,selectors:[["mat-select"]],contentQueries:function(h,u,b){if(h&1&&nt(b,sm,5)(b,gn,5)(b,Br,5),h&2){let y;R(y=O())&&(u.customTrigger=y.first),R(y=O())&&(u.options=y),R(y=O())&&(u.optionGroups=y)}},viewQuery:function(h,u){if(h&1&&Oe(e,5)(t,5)(oa,5),h&2){let b;R(b=O())&&(u.trigger=b.first),R(b=O())&&(u.panel=b.first),R(b=O())&&(u._overlayDir=b.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(h,u){h&1&&q("keydown",function(y){return u._handleKeydown(y)})("focus",function(){return u._onFocus()})("blur",function(){return u._onBlur()}),h&2&&(ne("id",u.id)("tabindex",u.disabled?-1:u.tabIndex)("aria-controls",u.panelOpen?u.id+"-panel":null)("aria-expanded",u.panelOpen)("aria-label",u.ariaLabel||null)("aria-required",u.required.toString())("aria-disabled",u.disabled.toString())("aria-invalid",u.errorState)("aria-activedescendant",u._getAriaActiveDescendant()),z("mat-mdc-select-disabled",u.disabled)("mat-mdc-select-invalid",u.errorState)("mat-mdc-select-required",u.required)("mat-mdc-select-empty",u.empty)("mat-mdc-select-multiple",u.multiple)("mat-select-open",u.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",N],disableRipple:[2,"disableRipple","disableRipple",N],tabIndex:[2,"tabIndex","tabIndex",m=>m==null?0:Ve(m)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",N],placeholder:"placeholder",required:[2,"required","required",N],multiple:[2,"multiple","multiple",N],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",N],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Ve],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",N]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[me([{provide:Zn,useExisting:i},{provide:Vr,useExisting:i}]),xe],ngContentSelectors:r,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(h,u){if(h&1&&(ge(a),_(0,"div",2,0),q("click",function(){return u.open()}),_(3,"div",3),H(4,o,2,1,"span",4)(5,p,3,1,"span",5),x(),_(6,"div",6)(7,"div",7),io(),_(8,"svg",8),ie(9,"path",9),x()()()(),lt(10,c,3,16,"ng-template",10),q("detach",function(){return u.close()})("backdropClick",function(){return u.close()})("overlayKeydown",function(y){return u._handleOverlayKeydown(y)})),h&2){let b=vt(1);v(3),ne("id",u._valueId),v(),G(u.empty?4:5),v(6),J("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",u._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",u._scrollStrategy)("cdkConnectedOverlayOrigin",u._preferredOverlayOrigin||b)("cdkConnectedOverlayPositions",u._positions)("cdkConnectedOverlayWidth",u._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",u._popoverLocation)}},dependencies:[bn,oa],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--%NS%mat-select-enabled-trigger-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-select-trigger-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-select-trigger-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-select-trigger-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-select-trigger-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-select-trigger-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--%NS%mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--%NS%mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-select-invalid-arrow-color, var(--%NS%mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--%NS%mat-select-enabled-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-focused-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--%NS%mat-select-disabled-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--%NS%mat-select-panel-background-color, var(--%NS%mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear forwards;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--%NS%mat-select-placeholder-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--%NS%mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2})})()}return i})();var ld=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[Pr,zr,ae,Ri,ft,zr]})}return i})();var dm=new g("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");var cd=(()=>{class i{_elementRef=s(S);_ngZone=s(C);_changeDetectorRef=s(he);_renderer=s(re);_cleanupTransitionEnd;constructor(){let e=cr(),t=s(dm,{optional:!0});this._isNoopAnimation=e==="di-disabled",e==="reduced-motion"&&this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion"),t&&(t.color&&(this.color=this._defaultColor=t.color),this.mode=t.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor="primary";get value(){return this._value}set value(e){this._value=dd(e||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(e){this._bufferValue=dd(e||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new M;get mode(){return this._mode}set mode(e){this._mode=e,this._changeDetectorRef.markForCheck()}_mode="determinate";ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,"transitionend",this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode==="buffer"?this.bufferValue:100}%`}_isIndeterminate(){return this.mode==="indeterminate"||this.mode==="query"}_transitionendHandler=e=>{this.animationEnd.observers.length===0||!e.target||!e.target.classList.contains("mdc-linear-progress__primary-bar")||(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){function e(t,a){t&1&&Re(0,"div",2)}return k({type:i,selectors:[["mat-progress-bar"]],hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-mdc-progress-bar","mdc-linear-progress"],hostVars:10,hostBindings:function(a,r){a&2&&(ne("aria-valuenow",r._isIndeterminate()?null:r.value)("mode",r.mode),Le("mat-"+r.color),z("_mat-animation-noopable",r._isNoopAnimation)("mdc-linear-progress--animation-ready",!r._isNoopAnimation)("mdc-linear-progress--indeterminate",r._isIndeterminate()))},inputs:{color:"color",value:[2,"value","value",Ve],bufferValue:[2,"bufferValue","bufferValue",Ve],mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],decls:7,vars:5,consts:[["aria-hidden","true",1,"mdc-linear-progress__buffer"],[1,"mdc-linear-progress__buffer-bar"],[1,"mdc-linear-progress__buffer-dots"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__primary-bar"],[1,"mdc-linear-progress__bar-inner"],["aria-hidden","true",1,"mdc-linear-progress__bar","mdc-linear-progress__secondary-bar"]],template:function(a,r){a&1&&(ke(0,"div",0),Re(1,"div",1),H(2,e,1,0,"div",2),Ne(),ke(3,"div",3),Re(4,"span",4),Ne(),ke(5,"div",5),Re(6,"span",4),Ne()),a&2&&(v(),Yt("flex-basis",r._getBufferBarFlexBasis()),v(),G(r.mode==="buffer"?2:-1),v(),Yt("transform",r._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --%NS%mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --%NS%mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--%NS%mat-progress-bar-track-height, 4px), var(--%NS%mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--%NS%mat-progress-bar-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--%NS%mat-progress-bar-track-height, 4px);
  border-radius: var(--%NS%mat-progress-bar-track-shape, var(--%NS%mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant)) calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--%NS%mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})})()}return i})();function dd(i,n=0,e=100){return Math.max(n,Math.min(e,i))}var ud=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[ae]})}return i})();var yn={apiUrl:"https://read-bible-api.vercel.app",bibleApiUrl:"https://bible-api.com",googleClientId:"296361301198-8pshrus8f8j51b0g3n5dublb3sq5u05k.apps.googleusercontent.com"};var md=[{id:"Genesis",name:"\u5275\u4E16\u8A18",chapters:50},{id:"Exodus",name:"\u51FA\u57C3\u53CA\u8A18",chapters:40},{id:"Leviticus",name:"\u5229\u672A\u8A18",chapters:27},{id:"Numbers",name:"\u6C11\u6578\u8A18",chapters:36},{id:"Deuteronomy",name:"\u7533\u547D\u8A18",chapters:34},{id:"Joshua",name:"\u7D04\u66F8\u4E9E\u8A18",chapters:24},{id:"Judges",name:"\u58EB\u5E2B\u8A18",chapters:21},{id:"Ruth",name:"\u8DEF\u5F97\u8A18",chapters:4},{id:"1 Samuel",name:"\u6492\u6BCD\u8033\u8A18\u4E0A",chapters:31},{id:"2 Samuel",name:"\u6492\u6BCD\u8033\u8A18\u4E0B",chapters:24},{id:"1 Kings",name:"\u5217\u738B\u7D00\u4E0A",chapters:22},{id:"2 Kings",name:"\u5217\u738B\u7D00\u4E0B",chapters:25},{id:"1 Chronicles",name:"\u6B77\u4EE3\u5FD7\u4E0A",chapters:29},{id:"2 Chronicles",name:"\u6B77\u4EE3\u5FD7\u4E0B",chapters:36},{id:"Ezra",name:"\u4EE5\u65AF\u62C9\u8A18",chapters:10},{id:"Nehemiah",name:"\u5C3C\u5E0C\u7C73\u8A18",chapters:13},{id:"Esther",name:"\u4EE5\u65AF\u5E16\u8A18",chapters:10},{id:"Job",name:"\u7D04\u4F2F\u8A18",chapters:42},{id:"Psalms",name:"\u8A69\u7BC7",chapters:150},{id:"Proverbs",name:"\u7BB4\u8A00",chapters:31},{id:"Ecclesiastes",name:"\u50B3\u9053\u66F8",chapters:12},{id:"Song of Solomon",name:"\u96C5\u6B4C",chapters:8},{id:"Isaiah",name:"\u4EE5\u8CFD\u4E9E\u66F8",chapters:66},{id:"Jeremiah",name:"\u8036\u5229\u7C73\u66F8",chapters:52},{id:"Lamentations",name:"\u8036\u5229\u7C73\u54C0\u6B4C",chapters:5},{id:"Ezekiel",name:"\u4EE5\u897F\u7D50\u66F8",chapters:48},{id:"Daniel",name:"\u4F46\u4EE5\u7406\u66F8",chapters:12},{id:"Hosea",name:"\u4F55\u897F\u963F\u66F8",chapters:14},{id:"Joel",name:"\u7D04\u73E5\u66F8",chapters:3},{id:"Amos",name:"\u963F\u6469\u53F8\u66F8",chapters:9},{id:"Obadiah",name:"\u4FC4\u5DF4\u5E95\u4E9E\u66F8",chapters:1},{id:"Jonah",name:"\u7D04\u62FF\u66F8",chapters:4},{id:"Micah",name:"\u5F4C\u8FE6\u66F8",chapters:7},{id:"Nahum",name:"\u90A3\u9D3B\u66F8",chapters:3},{id:"Habakkuk",name:"\u54C8\u5DF4\u8C37\u66F8",chapters:3},{id:"Zephaniah",name:"\u897F\u756A\u96C5\u66F8",chapters:3},{id:"Haggai",name:"\u54C8\u8A72\u66F8",chapters:2},{id:"Zechariah",name:"\u6492\u8FE6\u5229\u4E9E\u66F8",chapters:14},{id:"Malachi",name:"\u746A\u62C9\u57FA\u66F8",chapters:4},{id:"Matthew",name:"\u99AC\u592A\u798F\u97F3",chapters:28},{id:"Mark",name:"\u99AC\u53EF\u798F\u97F3",chapters:16},{id:"Luke",name:"\u8DEF\u52A0\u798F\u97F3",chapters:24},{id:"John",name:"\u7D04\u7FF0\u798F\u97F3",chapters:21},{id:"Acts",name:"\u4F7F\u5F92\u884C\u50B3",chapters:28},{id:"Romans",name:"\u7F85\u99AC\u66F8",chapters:16},{id:"1 Corinthians",name:"\u54E5\u6797\u591A\u524D\u66F8",chapters:16},{id:"2 Corinthians",name:"\u54E5\u6797\u591A\u5F8C\u66F8",chapters:13},{id:"Galatians",name:"\u52A0\u62C9\u592A\u66F8",chapters:6},{id:"Ephesians",name:"\u4EE5\u5F17\u6240\u66F8",chapters:6},{id:"Philippians",name:"\u8153\u7ACB\u6BD4\u66F8",chapters:4},{id:"Colossians",name:"\u6B4C\u7F85\u897F\u66F8",chapters:4},{id:"1 Thessalonians",name:"\u5E16\u6492\u7F85\u5C3C\u8FE6\u524D\u66F8",chapters:5},{id:"2 Thessalonians",name:"\u5E16\u6492\u7F85\u5C3C\u8FE6\u5F8C\u66F8",chapters:3},{id:"1 Timothy",name:"\u63D0\u6469\u592A\u524D\u66F8",chapters:6},{id:"2 Timothy",name:"\u63D0\u6469\u592A\u5F8C\u66F8",chapters:4},{id:"Titus",name:"\u63D0\u591A\u66F8",chapters:3},{id:"Philemon",name:"\u8153\u5229\u9580\u66F8",chapters:1},{id:"Hebrews",name:"\u5E0C\u4F2F\u4F86\u66F8",chapters:13},{id:"James",name:"\u96C5\u5404\u66F8",chapters:5},{id:"1 Peter",name:"\u5F7C\u5F97\u524D\u66F8",chapters:5},{id:"2 Peter",name:"\u5F7C\u5F97\u5F8C\u66F8",chapters:3},{id:"1 John",name:"\u7D04\u7FF0\u4E00\u66F8",chapters:5},{id:"2 John",name:"\u7D04\u7FF0\u4E8C\u66F8",chapters:1},{id:"3 John",name:"\u7D04\u7FF0\u4E09\u66F8",chapters:1},{id:"Jude",name:"\u7336\u5927\u66F8",chapters:1},{id:"Revelation",name:"\u555F\u793A\u9304",chapters:22}];var um=(i,n)=>n.id,mm=(i,n)=>n.verse;function pm(i,n){if(i&1&&(_(0,"mat-option",3),W(1),x()),i&2){let e=n.$implicit;J("value",e),v(),De(e.name)}}function fm(i,n){if(i&1&&(_(0,"mat-option",3),W(1),x()),i&2){let e=n.$implicit;J("value",e),v(),it("\u7B2C ",e," \u7AE0")}}function hm(i,n){i&1&&ie(0,"mat-progress-bar",5)}function bm(i,n){i&1&&(_(0,"p",6),W(1,"\u7D93\u6587\u8F09\u5165\u5931\u6557\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002"),x())}function gm(i,n){if(i&1&&(_(0,"p")(1,"sup"),W(2),x(),W(3),x()),i&2){let e=n.$implicit;v(2),De(e.verse),v(),it(" ",e.text," ")}}function vm(i,n){if(i&1&&(_(0,"article",7)(1,"h4"),W(2),x(),dt(3,gm,4,2,"p",null,mm),x()),i&2){let e=$();v(2),Do("",e.book()?.name," \u7B2C ",e.chapter()," \u7AE0"),v(),ct(e.verses())}}var pd=(()=>{class i{constructor(){this.http=s(tn),this.books=md,this.book=j(null),this.chapter=j(null),this.verses=j([]),this.loading=j(!1),this.error=j(!1),this.chapters=ve(()=>{let e=this.book();return e?Array.from({length:e.chapters},(t,a)=>a+1):[]})}selectBook(e){this.book.set(e),this.chapter.set(null),this.verses.set([])}selectChapter(e){this.chapter.set(e),this.loadChapter()}loadChapter(){let e=this.book(),t=this.chapter();if(!e||!t)return;this.loading.set(!0),this.error.set(!1);let a=encodeURIComponent(`${e.id} ${t}`),r=`${yn.bibleApiUrl}/${a}?translation=cuv`;this.http.get(r).subscribe({next:o=>{this.verses.set(o.verses.map(l=>({verse:l.verse,text:l.text.trim()}))),this.loading.set(!1)},error:()=>{this.verses.set([]),this.error.set(!0),this.loading.set(!1)}})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=k({type:i,selectors:[["app-search-verse"]],decls:18,vars:4,consts:[[1,"text-center"],["appearance","outline",1,"full-width"],[3,"selectionChange","value"],[3,"value"],[3,"selectionChange","value","disabled"],["mode","indeterminate"],[1,"error"],[1,"passage"]],template:function(t,a){t&1&&(_(0,"h3"),W(1,"\u9078\u64C7\u66F8\u5377\u548C\u7AE0\u7BC0\u5F8C\uFF0C\u5C31\u53EF\u4EE5\u958B\u59CB\u95B1\u8B80\u548C\u5408\u672C\u7D93\u6587\u3002"),x(),_(2,"div",0)(3,"mat-form-field",1)(4,"mat-label"),W(5,"\u8ACB\u9078\u64C7\u66F8\u5377"),x(),_(6,"mat-select",2),q("selectionChange",function(o){return a.selectBook(o.value)}),dt(7,pm,2,2,"mat-option",3,um),x()(),_(9,"mat-form-field",1)(10,"mat-label"),W(11,"\u8ACB\u9078\u64C7\u7AE0"),x(),_(12,"mat-select",4),q("selectionChange",function(o){return a.selectChapter(o.value)}),dt(13,fm,2,2,"mat-option",3,At),x()()(),H(15,hm,1,0,"mat-progress-bar",5)(16,bm,2,0,"p",6)(17,vm,5,2,"article",7)),t&2&&(v(6),J("value",a.book()),v(),ct(a.books),v(5),J("value",a.chapter())("disabled",!a.book()),v(),ct(a.chapters()),v(2),G(a.loading()?15:a.error()?16:a.verses().length?17:-1))},dependencies:[ft,hn,Bt,ld,sd,gn,ud,cd],styles:["h3[_ngcontent-%COMP%]{color:#5f9ea0}.text-center[_ngcontent-%COMP%]{margin:20px 0}.full-width[_ngcontent-%COMP%]{width:100%;margin-bottom:10px}.passage[_ngcontent-%COMP%]{font-size:18px;line-height:1.8;text-align:justify;padding:20px;margin:20px 0;border:1px solid #ccc;border-radius:10px}.passage[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-top:0}.passage[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 8px}.passage[_ngcontent-%COMP%]   sup[_ngcontent-%COMP%]{color:#5f9ea0;font-size:.7em}.error[_ngcontent-%COMP%]{color:#c62828}"]})}}return i})();var ym={capture:!0},_m=["focus","mousedown","mouseenter","touchstart"],Ur="mat-ripple-loader-uninitialized",Hr="mat-ripple-loader-class-name",fd="mat-ripple-loader-centered",da="mat-ripple-loader-disabled",hd=(()=>{class i{_document=s(V);_animationsDisabled=we();_globalRippleOptions=s(Fi,{optional:!0});_platform=s(ee);_ngZone=s(C);_injector=s(Y);_eventCleanups;_hosts=new Map;constructor(){let e=s(fe).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>_m.map(t=>e.listen(this._document,t,this._onInteraction,ym)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(Ur,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Hr))&&e.setAttribute(Hr,t.className||""),t.centered&&e.setAttribute(fd,""),t.disabled&&e.setAttribute(da,"")}setDisabled(e,t){let a=this._hosts.get(e);a?(a.target.rippleDisabled=t,!t&&!a.hasSetUpEvents&&(a.hasSetUpEvents=!0,a.renderer.setupTriggerEvents(e))):t?e.setAttribute(da,""):e.removeAttribute(da)}_onInteraction=e=>{let t=ye(e);if(t instanceof HTMLElement){let a=t.closest(`[${Ur}="${this._globalRippleOptions?.namespace??""}"]`);a&&this._createRipple(a)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Hr)),e.append(t);let a=this._globalRippleOptions,r=this._animationsDisabled?0:a?.animation?.enterDuration??jn.enterDuration,o=this._animationsDisabled?0:a?.animation?.exitDuration??jn.exitDuration,l={rippleDisabled:this._animationsDisabled||a?.disabled||e.hasAttribute(da),rippleConfig:{centered:e.hasAttribute(fd),terminateOnPointerUp:a?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:o}}},d=new Un(l,this._ngZone,t,this._platform,this._injector),p=!l.rippleDisabled;p&&d.setupTriggerEvents(e),this._hosts.set(e,{target:l,renderer:d,hasSetUpEvents:p}),e.removeAttribute(Ur)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})();var xm=new g("MAT_BUTTON_CONFIG");function bd(i){return i==null?void 0:Ve(i)}var gd=(()=>{class i{_elementRef=s(S);_ngZone=s(C);_animationsDisabled=we();_config=s(xm,{optional:!0});_focusMonitor=s(Vn);_cleanupClick;_renderer=s(re);_rippleLoader=s(hd);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}showProgress=ya(!1,{transform:N});constructor(){s(Ie).load(sn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:15,hostBindings:function(t,a){t&2&&(ne("disabled",a._getDisabledAttribute())("aria-disabled",a._getAriaDisabled())("tabindex",a._getTabIndex()),Le(a.color?"mat-"+a.color:""),z("mat-mdc-button-progress-indicator-shown",a.showProgress())("mat-mdc-button-disabled",a.disabled)("mat-mdc-button-disabled-interactive",a.disabledInteractive)("mat-unthemed",!a.color)("_mat-animation-noopable",a._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",N],disabled:[2,"disabled","disabled",N],ariaDisabled:[2,"aria-disabled","ariaDisabled",N],disabledInteractive:[2,"disabledInteractive","disabledInteractive",N],tabIndex:[2,"tabIndex","tabIndex",bd],_tabindex:[2,"tabindex","_tabindex",bd],showProgress:[1,"showProgress"]}})}return i})();var vd=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),yd=(()=>{class i extends gd{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Cm(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,a=this._appearance?vd.get(this._appearance):null,r=vd.get(e);a&&t.remove(...a),t.add(...r),this._appearance=e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=(function(){let e=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""],["",8,"material-symbols-outlined",3,"iconPositionEnd",""],["",8,"material-symbols-rounded",3,"iconPositionEnd",""],["",8,"material-symbols-sharp",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""],["","iconPositionEnd","",8,"material-symbols-outlined"],["","iconPositionEnd","",8,"material-symbols-rounded"],["","iconPositionEnd","",8,"material-symbols-sharp"]],[["","progressIndicator",""]]],t=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]","[progressIndicator]"];function a(r,o){r&1&&(ke(0,"div",2),Z(1,3),Ne())}return k({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[le],ngContentSelectors:t,decls:8,vars:5,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-mdc-button-progress-indicator-container"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(o,l){o&1&&(ge(e),Re(0,"span",0),Z(1),ke(2,"span",1),Z(3,1),Ne(),Z(4,2),H(5,a,2,0,"div",2),Re(6,"span",3)(7,"span",4)),o&2&&(z("mdc-button__ripple",!l._isFab)("mdc-fab__ripple",l._isFab),v(5),G(l.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded,
.material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return i})();function Cm(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}var _d=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[la,ae]})}return i})();var Sm=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=k({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,a){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return i})(),Dm={passive:!0},xd=(()=>{class i{_platform=s(ee);_ngZone=s(C);_renderer=s(fe).createRenderer(null,null);_styleLoader=s(Ie);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return ai;this._styleLoader.load(Sm);let t=Ee(e),a=this._monitoredElements.get(t);if(a)return a.subject;let r=new E,o="cdk-text-field-autofilled",l=p=>{p.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(o)?(t.classList.add(o),this._ngZone.run(()=>r.next({target:p.target,isAutofilled:!0}))):p.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(o)&&(t.classList.remove(o),this._ngZone.run(()=>r.next({target:p.target,isAutofilled:!1})))},d=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",l,Dm)));return this._monitoredElements.set(t,{subject:r,unlisten:d}),r}stopMonitoring(e){let t=Ee(e),a=this._monitoredElements.get(t);a&&(a.unlisten(),a.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})();var Cd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({})}return i})();var wd=new g("MAT_INPUT_VALUE_ACCESSOR");var Em=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Mm=new g("MAT_INPUT_CONFIG"),Sd=(()=>{class i{_elementRef=s(S);_platform=s(ee);ngControl=s(at,{optional:!0,self:!0});_autofillMonitor=s(xd);_ngZone=s(C);_formField=s(Qn,{optional:!0});_renderer=s(re);_uid=s(Ce).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=s(Mm,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new E;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=dn(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(Lt.required)??!1}set required(e){this._required=dn(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Ga().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=dn(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Ga().has(e));constructor(){let e=s(Vt,{optional:!0}),t=s(Yn,{optional:!0}),a=s(sa),r=s(wd,{optional:!0,self:!0}),o=s(Zi,{optional:!0,self:!0}),l=this._elementRef.nativeElement,d=l.nodeName.toLowerCase();r?Pe(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=l,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(l,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new vn(a,o||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=d==="select",this._isTextarea=d==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=l.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Ge(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Em.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=w({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,a){t&1&&q("focus",function(){return a._focusChanged(!0)})("blur",function(){return a._focusChanged(!1)})("input",function(){return a._onInput()}),t&2&&(Kt("id",a.id)("disabled",a.disabled&&!a.disabledInteractive)("required",a.required),ne("name",a.name||null)("readonly",a._getReadonlyAttribute())("aria-disabled",a.disabled&&a.disabledInteractive?"true":null)("aria-invalid",a.empty&&a.required?null:a.errorState)("aria-required",a.required)("id",a.id),z("mat-input-server",a._isServer)("mat-mdc-form-field-textarea-control",a._isInFormField&&a._isTextarea)("mat-mdc-form-field-input-control",a._isInFormField)("mat-mdc-input-disabled-interactive",a.disabledInteractive)("mdc-text-field__input",a._isInFormField)("mat-mdc-native-select-inline",a._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",N]},exportAs:["matInput"],features:[me([{provide:Zn,useExisting:i}]),xe]})}return i})(),Dd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=B({type:i});static \u0275inj=L({imports:[ft,ft,Cd,ae]})}return i})();function Nm(i,n){if(i&1){let e=Tt();_(0,"button",8),q("click",function(){let a=Ze(e).$implicit,r=$();return Qe(r.chooseMood(a))}),W(1),x()}if(i&2){let e=n.$implicit;v(),it(" ",e," ")}}function Im(i,n){i&1&&(_(0,"div",7),W(1,"\u76EE\u524D\u7121\u6CD5\u53D6\u5F97\u7D93\u6587\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u3002"),x())}function Am(i,n){if(i&1&&(_(0,"div",7),W(1),x()),i&2){let e=$();v(),De(e.bibleVerse())}}var Ed=(()=>{class i{constructor(){this.http=s(tn),this.moods=["\u958B\u5FC3","\u96E3\u904E","\u7126\u616E","\u611F\u6069","\u75B2\u618A"],this.mood=j(""),this.bibleVerse=j(""),this.isLoading=j(!1),this.error=j(!1)}chooseMood(e){this.mood.set(e)}submit(){let e=this.mood().trim();!e||this.isLoading()||(this.isLoading.set(!0),this.error.set(!1),this.http.post(`${yn.apiUrl}/get-bible-verse-from-mood`,{mood:e}).subscribe({next:t=>{this.bibleVerse.set(t.verse),this.isLoading.set(!1)},error:()=>{this.error.set(!0),this.isLoading.set(!1)}}))}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=k({type:i,selectors:[["app-generate-verse-from-mood"]],decls:15,vars:4,consts:[[1,"moods"],["mat-stroked-button","","type","button"],[1,"input-container",3,"ngSubmit"],[1,"mood"],["matInput","","name","mood","placeholder","\u4ECA\u5929\u7684\u5FC3\u60C5\u5982\u4F55",3,"ngModelChange","ngModel"],["mat-stroked-button","","type","submit",3,"disabled"],[1,"chat-container"],[1,"chat-bubble","ai-bubble"],["mat-stroked-button","","type","button",3,"click"]],template:function(t,a){t&1&&(_(0,"h3"),W(1,"\u9EDE\u9078\u5FC3\u60C5\u6309\u9215\uFF0C\u6216\u63CF\u8FF0\u4ECA\u5929\u7684\u5FC3\u60C5\uFF0CAI \u5C07\u6703\u63D0\u4F9B\u4F60\u4E00\u4E9B\u8056\u7D93\u7D93\u6587\u3002"),x(),_(2,"p",0),dt(3,Nm,2,1,"button",1,At),x(),_(5,"form",2),q("ngSubmit",function(){return a.submit()}),_(6,"mat-form-field",3)(7,"mat-label"),W(8,"\u8ACB\u63CF\u8FF0\u4F60\u4ECA\u5929\u7684\u5FC3\u60C5"),x(),_(9,"input",4),go(),q("ngModelChange",function(o){return a.mood.set(o)}),x()(),_(10,"button",5),W(11),x()(),_(12,"div",6),H(13,Im,2,0,"div",7)(14,Am,2,1,"div",7),x()),t&2&&(v(3),ct(a.moods),v(6),J("ngModel",a.mood()),vo(),v(),J("disabled",a.isLoading()||!a.mood().trim()),v(),it(" ",a.isLoading()?"\u8F09\u5165\u4E2D...":"\u9001\u51FA"," "),v(2),G(a.error()?13:a.bibleVerse()?14:-1))},dependencies:[Dl,Sl,Xi,xl,Cl,kr,Vt,_d,yd,ft,hn,Bt,Dd,Sd],styles:['h3[_ngcontent-%COMP%]{color:#5f9ea0}button[_ngcontent-%COMP%]{display:inline-block;font-size:16px;font-weight:700;border:2px solid #2196f3;background-color:#fff;color:#2196f3;border-radius:5px;cursor:pointer;transition:background-color .2s,color .2s}button[_ngcontent-%COMP%]:hover{background-color:#2196f3;color:#fff}button.loading[_ngcontent-%COMP%]{position:relative}button.loading[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;top:50%;left:50%;width:1em;height:1em;border-radius:50%;border:.25em solid rgba(0,0,0,.1);border-top-color:#007bff;animation:_ngcontent-%COMP%_loading 1s infinite linear}@keyframes _ngcontent-%COMP%_loading{0%{transform:translate(-50%,-50%) rotate(0)}to{transform:translate(-50%,-50%) rotate(360deg)}}form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-top:20px}input[_ngcontent-%COMP%]{padding:10px;font-size:16px;border:2px solid #ccc;border-radius:5px;margin-bottom:10px;width:100%}mat-form-field[_ngcontent-%COMP%]{width:100%}.chat-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;overflow-y:scroll;padding:16px}.chat-bubble[_ngcontent-%COMP%]{display:inline-block;max-width:80%;padding:8px 16px;margin-bottom:8px;border-radius:16px;font-size:18px}.ai-bubble[_ngcontent-%COMP%]{align-self:flex-start;background-color:#5f9ea0;color:#fff}']})}}return i})();var Md=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=k({type:i,selectors:[["app-tabs"]],decls:5,vars:0,consts:[["label","\u641C\u5C0B\u8056\u7D93\u7D93\u6587"],["label","AI \u5FC3\u60C5\u554F\u7B54\u5340"]],template:function(t,a){t&1&&(_(0,"mat-tab-group")(1,"mat-tab",0),ie(2,"app-search-verse"),x(),_(3,"mat-tab",1),ie(4,"app-generate-verse-from-mood"),x()())},dependencies:[Xs,vr,Ws,pd,Ed],encapsulation:2})}}return i})();var kd=(()=>{class i{constructor(){this.year=new Date().getFullYear()}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=k({type:i,selectors:[["app-footer"]],decls:4,vars:1,consts:[[1,"footer"],[1,"container"],[1,"footer-text"]],template:function(t,a){t&1&&(ke(0,"footer",0)(1,"div",1)(2,"p",2),W(3),Ne()()()),t&2&&(v(3),it("\xA9 2023\u2013",a.year," JenniferShih"))},styles:[".footer[_ngcontent-%COMP%]{position:relative;margin-top:400px;text-align:center}"]})}}return i})();var Nd=(()=>{class i{static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=k({type:i,selectors:[["app-root"]],decls:4,vars:0,template:function(t,a){t&1&&ie(0,"app-header")(1,"app-login")(2,"app-tabs")(3,"app-footer")},dependencies:[us,fs,Md,kd],encapsulation:2})}}return i})();var Tm="@",Rm=(()=>{class i{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=s(Y);loadingSchedulerFn=s(Om,{optional:!0});_engine;constructor(e,t,a,r,o){this.doc=e,this.delegate=t,this.zone=a,this.animationType=r,this.moduleImpl=o}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-LMO3YS3W.js").then(a=>a),t;return this.loadingSchedulerFn?t=this.loadingSchedulerFn(e):t=e(),t.catch(a=>{throw new K(5300,!1)}).then(({\u0275createEngine:a,\u0275AnimationRendererFactory:r})=>{this._engine=a(this.animationType,this.doc);let o=new r(this.delegate,this._engine,this.zone);return this.delegate=o,o})}createRenderer(e,t){let a=this.delegate.createRenderer(e,t);if(a.\u0275type===0)return a;jo(a);let r=new Gr(a);return t?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(o=>{let l=o.createRenderer(e,t);r.use(l),this.scheduler??=this.injector.get(ro,null,{optional:!0}),this.scheduler?.notify(10)}).catch(o=>{r.use(a)}),r}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(t){yo()};static \u0275prov=te({token:i,factory:i.\u0275fac})}return i})(),Gr=class{delegate;replay=[];\u0275type=1;constructor(n){this.delegate=n}use(n){if(this.delegate=n,this.replay!==null){for(let e of this.replay)e(n);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}get destroyNode(){return this.delegate.destroyNode}appendChild(n,e){this.delegate.appendChild(n,e)}insertBefore(n,e,t,a){this.delegate.insertBefore(n,e,t,a)}removeChild(n,e,t,a){this.delegate.removeChild(n,e,t,a)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,t,a){this.delegate.setAttribute(n,e,t,a)}removeAttribute(n,e,t){this.delegate.removeAttribute(n,e,t)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,t,a){this.delegate.setStyle(n,e,t,a)}removeStyle(n,e,t){this.delegate.removeStyle(n,e,t)}setProperty(n,e,t){this.shouldReplay(e)&&this.replay.push(a=>a.setProperty(n,e,t)),this.delegate.setProperty(n,e,t)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,t,a){return this.shouldReplay(e)&&this.replay.push(r=>r.listen(n,e,t,a)),this.delegate.listen(n,e,t,a)}shouldReplay(n){return this.replay!==null&&n.startsWith(Tm)}},Om=new g("");function Id(i="animations"){return bo("NgAsyncAnimations"),kt([{provide:fe,useFactory:()=>new Rm(s(V),s(Nn),s(C),i)},{provide:Gt,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Ad={providers:[ko({eventCoalescing:!0}),La(Va()),Id(),{provide:Ya,useValue:{autoLogin:!1,providers:[{id:on.PROVIDER_ID,provider:new on(yn.googleClientId)}],onError:i=>console.error(i)}}]};Aa(Nd,Ad).catch(i=>console.error(i));
