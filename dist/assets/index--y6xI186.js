(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ug(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sp={exports:{}},Ms={},op={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ai=Symbol.for("react.element"),dg=Symbol.for("react.portal"),pg=Symbol.for("react.fragment"),fg=Symbol.for("react.strict_mode"),hg=Symbol.for("react.profiler"),mg=Symbol.for("react.provider"),gg=Symbol.for("react.context"),yg=Symbol.for("react.forward_ref"),vg=Symbol.for("react.suspense"),xg=Symbol.for("react.memo"),Sg=Symbol.for("react.lazy"),Ac=Symbol.iterator;function wg(e){return e===null||typeof e!="object"?null:(e=Ac&&e[Ac]||e["@@iterator"],typeof e=="function"?e:null)}var ap={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lp=Object.assign,cp={};function Zn(e,t,n){this.props=e,this.context=t,this.refs=cp,this.updater=n||ap}Zn.prototype.isReactComponent={};Zn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function up(){}up.prototype=Zn.prototype;function Xa(e,t,n){this.props=e,this.context=t,this.refs=cp,this.updater=n||ap}var Ya=Xa.prototype=new up;Ya.constructor=Xa;lp(Ya,Zn.prototype);Ya.isPureReactComponent=!0;var Mc=Array.isArray,dp=Object.prototype.hasOwnProperty,Za={current:null},pp={key:!0,ref:!0,__self:!0,__source:!0};function fp(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)dp.call(t,r)&&!pp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ai,type:e,key:s,ref:o,props:i,_owner:Za.current}}function kg(e,t){return{$$typeof:ai,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function el(e){return typeof e=="object"&&e!==null&&e.$$typeof===ai}function bg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Lc=/\/+/g;function eo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bg(""+e.key):t.toString(36)}function Fi(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ai:case dg:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+eo(o,0):r,Mc(i)?(n="",e!=null&&(n=e.replace(Lc,"$&/")+"/"),Fi(i,t,n,"",function(u){return u})):i!=null&&(el(i)&&(i=kg(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Lc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Mc(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+eo(s,a);o+=Fi(s,t,n,l,i)}else if(l=wg(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+eo(s,a++),o+=Fi(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function yi(e,t,n){if(e==null)return e;var r=[],i=0;return Fi(e,r,"","",function(s){return t.call(n,s,i++)}),r}function jg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},Vi={transition:null},Cg={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:Vi,ReactCurrentOwner:Za};function hp(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:yi,forEach:function(e,t,n){yi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yi(e,function(){t++}),t},toArray:function(e){return yi(e,function(t){return t})||[]},only:function(e){if(!el(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=Zn;N.Fragment=pg;N.Profiler=hg;N.PureComponent=Xa;N.StrictMode=fg;N.Suspense=vg;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cg;N.act=hp;N.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=lp({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Za.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)dp.call(t,l)&&!pp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ai,type:e.type,key:i,ref:s,props:r,_owner:o}};N.createContext=function(e){return e={$$typeof:gg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mg,_context:e},e.Consumer=e};N.createElement=fp;N.createFactory=function(e){var t=fp.bind(null,e);return t.type=e,t};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:yg,render:e}};N.isValidElement=el;N.lazy=function(e){return{$$typeof:Sg,_payload:{_status:-1,_result:e},_init:jg}};N.memo=function(e,t){return{$$typeof:xg,type:e,compare:t===void 0?null:t}};N.startTransition=function(e){var t=Vi.transition;Vi.transition={};try{e()}finally{Vi.transition=t}};N.unstable_act=hp;N.useCallback=function(e,t){return ke.current.useCallback(e,t)};N.useContext=function(e){return ke.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};N.useEffect=function(e,t){return ke.current.useEffect(e,t)};N.useId=function(){return ke.current.useId()};N.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};N.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};N.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};N.useMemo=function(e,t){return ke.current.useMemo(e,t)};N.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};N.useRef=function(e){return ke.current.useRef(e)};N.useState=function(e){return ke.current.useState(e)};N.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};N.useTransition=function(){return ke.current.useTransition()};N.version="18.3.1";op.exports=N;var j=op.exports;const Pg=ug(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg=j,_g=Symbol.for("react.element"),Eg=Symbol.for("react.fragment"),Ag=Object.prototype.hasOwnProperty,Mg=Tg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lg={key:!0,ref:!0,__self:!0,__source:!0};function mp(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Ag.call(t,r)&&!Lg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:_g,type:e,key:s,ref:o,props:i,_owner:Mg.current}}Ms.Fragment=Eg;Ms.jsx=mp;Ms.jsxs=mp;sp.exports=Ms;var c=sp.exports,Bo={},gp={exports:{}},ze={},yp={exports:{}},vp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,R){var D=_.length;_.push(R);e:for(;0<D;){var q=D-1>>>1,Y=_[q];if(0<i(Y,R))_[q]=R,_[D]=Y,D=q;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var R=_[0],D=_.pop();if(D!==R){_[0]=D;e:for(var q=0,Y=_.length,vn=Y>>>1;q<vn;){var lt=2*(q+1)-1,ct=_[lt],ut=lt+1,Qt=_[ut];if(0>i(ct,D))ut<Y&&0>i(Qt,ct)?(_[q]=Qt,_[ut]=D,q=ut):(_[q]=ct,_[lt]=D,q=lt);else if(ut<Y&&0>i(Qt,D))_[q]=Qt,_[ut]=D,q=ut;else break e}}return R}function i(_,R){var D=_.sortIndex-R.sortIndex;return D!==0?D:_.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,f=null,p=3,y=!1,v=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(_){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=_)r(u),R.sortIndex=R.expirationTime,t(l,R);else break;R=n(u)}}function S(_){if(x=!1,g(_),!v)if(n(l)!==null)v=!0,ie(w);else{var R=n(u);R!==null&&X(S,R.startTime-_)}}function w(_,R){v=!1,x&&(x=!1,m(k),k=-1),y=!0;var D=p;try{for(g(R),f=n(l);f!==null&&(!(f.expirationTime>R)||_&&!F());){var q=f.callback;if(typeof q=="function"){f.callback=null,p=f.priorityLevel;var Y=q(f.expirationTime<=R);R=e.unstable_now(),typeof Y=="function"?f.callback=Y:f===n(l)&&r(l),g(R)}else r(l);f=n(l)}if(f!==null)var vn=!0;else{var lt=n(u);lt!==null&&X(S,lt.startTime-R),vn=!1}return vn}finally{f=null,p=D,y=!1}}var C=!1,T=null,k=-1,M=5,A=-1;function F(){return!(e.unstable_now()-A<M)}function Ee(){if(T!==null){var _=e.unstable_now();A=_;var R=!0;try{R=T(!0,_)}finally{R?Ae():(C=!1,T=null)}}else C=!1}var Ae;if(typeof h=="function")Ae=function(){h(Ee)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,sr=ae.port2;ae.port1.onmessage=Ee,Ae=function(){sr.postMessage(null)}}else Ae=function(){b(Ee,0)};function ie(_){T=_,C||(C=!0,Ae())}function X(_,R){k=b(function(){_(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,ie(w))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(_){switch(p){case 1:case 2:case 3:var R=3;break;default:R=p}var D=p;p=R;try{return _()}finally{p=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,R){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var D=p;p=_;try{return R()}finally{p=D}},e.unstable_scheduleCallback=function(_,R,D){var q=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?q+D:q):D=q,_){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=D+Y,_={id:d++,callback:R,priorityLevel:_,startTime:D,expirationTime:Y,sortIndex:-1},D>q?(_.sortIndex=D,t(u,_),n(l)===null&&_===n(u)&&(x?(m(k),k=-1):x=!0,X(S,D-q))):(_.sortIndex=Y,t(l,_),v||y||(v=!0,ie(w))),_},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(_){var R=p;return function(){var D=p;p=R;try{return _.apply(this,arguments)}finally{p=D}}}})(vp);yp.exports=vp;var Rg=yp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg=j,Ie=Rg;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xp=new Set,Nr={};function mn(e,t){Wn(e,t),Wn(e+"Capture",t)}function Wn(e,t){for(Nr[e]=t,e=0;e<t.length;e++)xp.add(t[e])}var vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oo=Object.prototype.hasOwnProperty,Ig=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rc={},Dc={};function Ng(e){return Oo.call(Dc,e)?!0:Oo.call(Rc,e)?!1:Ig.test(e)?Dc[e]=!0:(Rc[e]=!0,!1)}function zg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fg(e,t,n,r){if(t===null||typeof t>"u"||zg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function be(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new be(e,5,!1,e.toLowerCase(),null,!1,!1)});var tl=/[\-:]([a-z])/g;function nl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(tl,nl);fe[t]=new be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(tl,nl);fe[t]=new be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(tl,nl);fe[t]=new be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new be(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new be(e,1,!1,e.toLowerCase(),null,!0,!0)});function rl(e,t,n,r){var i=fe.hasOwnProperty(t)?fe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fg(t,n,i,r)&&(n=null),r||i===null?Ng(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var bt=Dg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vi=Symbol.for("react.element"),Sn=Symbol.for("react.portal"),wn=Symbol.for("react.fragment"),il=Symbol.for("react.strict_mode"),Uo=Symbol.for("react.profiler"),Sp=Symbol.for("react.provider"),wp=Symbol.for("react.context"),sl=Symbol.for("react.forward_ref"),Wo=Symbol.for("react.suspense"),$o=Symbol.for("react.suspense_list"),ol=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),kp=Symbol.for("react.offscreen"),Ic=Symbol.iterator;function or(e){return e===null||typeof e!="object"?null:(e=Ic&&e[Ic]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,to;function gr(e){if(to===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);to=t&&t[1]||""}return`
`+to+e}var no=!1;function ro(e,t){if(!e||no)return"";no=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{no=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?gr(e):""}function Vg(e){switch(e.tag){case 5:return gr(e.type);case 16:return gr("Lazy");case 13:return gr("Suspense");case 19:return gr("SuspenseList");case 0:case 2:case 15:return e=ro(e.type,!1),e;case 11:return e=ro(e.type.render,!1),e;case 1:return e=ro(e.type,!0),e;default:return""}}function Ho(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wn:return"Fragment";case Sn:return"Portal";case Uo:return"Profiler";case il:return"StrictMode";case Wo:return"Suspense";case $o:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wp:return(e.displayName||"Context")+".Consumer";case Sp:return(e._context.displayName||"Context")+".Provider";case sl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ol:return t=e.displayName||null,t!==null?t:Ho(e.type)||"Memo";case Pt:t=e._payload,e=e._init;try{return Ho(e(t))}catch{}}return null}function Bg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ho(t);case 8:return t===il?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ot(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function bp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Og(e){var t=bp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xi(e){e._valueTracker||(e._valueTracker=Og(e))}function jp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=bp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Zi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qo(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Nc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ot(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Cp(e,t){t=t.checked,t!=null&&rl(e,"checked",t,!1)}function Go(e,t){Cp(e,t);var n=Ot(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ko(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ko(e,t.type,Ot(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ko(e,t,n){(t!=="number"||Zi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var yr=Array.isArray;function zn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ot(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(yr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ot(n)}}function Pp(e,t){var n=Ot(t.value),r=Ot(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Vc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Tp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Tp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Si,_p=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Si=Si||document.createElement("div"),Si.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Si.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ug=["Webkit","ms","Moz","O"];Object.keys(br).forEach(function(e){Ug.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),br[t]=br[e]})});function Ep(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||br.hasOwnProperty(e)&&br[e]?(""+t).trim():t+"px"}function Ap(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ep(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Wg=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xo(e,t){if(t){if(Wg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Yo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zo=null;function al(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ea=null,Fn=null,Vn=null;function Bc(e){if(e=ui(e)){if(typeof ea!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Ns(t),ea(e.stateNode,e.type,t))}}function Mp(e){Fn?Vn?Vn.push(e):Vn=[e]:Fn=e}function Lp(){if(Fn){var e=Fn,t=Vn;if(Vn=Fn=null,Bc(e),t)for(e=0;e<t.length;e++)Bc(t[e])}}function Rp(e,t){return e(t)}function Dp(){}var io=!1;function Ip(e,t,n){if(io)return e(t,n);io=!0;try{return Rp(e,t,n)}finally{io=!1,(Fn!==null||Vn!==null)&&(Dp(),Lp())}}function Fr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ns(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var ta=!1;if(vt)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){ta=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{ta=!1}function $g(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var jr=!1,es=null,ts=!1,na=null,Hg={onError:function(e){jr=!0,es=e}};function qg(e,t,n,r,i,s,o,a,l){jr=!1,es=null,$g.apply(Hg,arguments)}function Gg(e,t,n,r,i,s,o,a,l){if(qg.apply(this,arguments),jr){if(jr){var u=es;jr=!1,es=null}else throw Error(P(198));ts||(ts=!0,na=u)}}function gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Np(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Oc(e){if(gn(e)!==e)throw Error(P(188))}function Kg(e){var t=e.alternate;if(!t){if(t=gn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Oc(i),e;if(s===r)return Oc(i),t;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function zp(e){return e=Kg(e),e!==null?Fp(e):null}function Fp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fp(e);if(t!==null)return t;e=e.sibling}return null}var Vp=Ie.unstable_scheduleCallback,Uc=Ie.unstable_cancelCallback,Qg=Ie.unstable_shouldYield,Jg=Ie.unstable_requestPaint,ne=Ie.unstable_now,Xg=Ie.unstable_getCurrentPriorityLevel,ll=Ie.unstable_ImmediatePriority,Bp=Ie.unstable_UserBlockingPriority,ns=Ie.unstable_NormalPriority,Yg=Ie.unstable_LowPriority,Op=Ie.unstable_IdlePriority,Ls=null,it=null;function Zg(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(Ls,e,void 0,(e.current.flags&128)===128)}catch{}}var Ye=Math.clz32?Math.clz32:ny,ey=Math.log,ty=Math.LN2;function ny(e){return e>>>=0,e===0?32:31-(ey(e)/ty|0)|0}var wi=64,ki=4194304;function vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function rs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=vr(a):(s&=o,s!==0&&(r=vr(s)))}else o=n&~i,o!==0?r=vr(o):s!==0&&(r=vr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ye(t),i=1<<n,r|=e[n],t&=~i;return r}function ry(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Ye(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=ry(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function ra(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Up(){var e=wi;return wi<<=1,!(wi&4194240)&&(wi=64),e}function so(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function li(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ye(t),e[t]=n}function sy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ye(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function cl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ye(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var V=0;function Wp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $p,ul,Hp,qp,Gp,ia=!1,bi=[],Rt=null,Dt=null,It=null,Vr=new Map,Br=new Map,_t=[],oy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wc(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":Vr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Br.delete(t.pointerId)}}function lr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ui(t),t!==null&&ul(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ay(e,t,n,r,i){switch(t){case"focusin":return Rt=lr(Rt,e,t,n,r,i),!0;case"dragenter":return Dt=lr(Dt,e,t,n,r,i),!0;case"mouseover":return It=lr(It,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Vr.set(s,lr(Vr.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Br.set(s,lr(Br.get(s)||null,e,t,n,r,i)),!0}return!1}function Kp(e){var t=tn(e.target);if(t!==null){var n=gn(t);if(n!==null){if(t=n.tag,t===13){if(t=Np(n),t!==null){e.blockedOn=t,Gp(e.priority,function(){Hp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=sa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zo=r,n.target.dispatchEvent(r),Zo=null}else return t=ui(n),t!==null&&ul(t),e.blockedOn=n,!1;t.shift()}return!0}function $c(e,t,n){Bi(e)&&n.delete(t)}function ly(){ia=!1,Rt!==null&&Bi(Rt)&&(Rt=null),Dt!==null&&Bi(Dt)&&(Dt=null),It!==null&&Bi(It)&&(It=null),Vr.forEach($c),Br.forEach($c)}function cr(e,t){e.blockedOn===t&&(e.blockedOn=null,ia||(ia=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,ly)))}function Or(e){function t(i){return cr(i,e)}if(0<bi.length){cr(bi[0],e);for(var n=1;n<bi.length;n++){var r=bi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&cr(Rt,e),Dt!==null&&cr(Dt,e),It!==null&&cr(It,e),Vr.forEach(t),Br.forEach(t),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)Kp(n),n.blockedOn===null&&_t.shift()}var Bn=bt.ReactCurrentBatchConfig,is=!0;function cy(e,t,n,r){var i=V,s=Bn.transition;Bn.transition=null;try{V=1,dl(e,t,n,r)}finally{V=i,Bn.transition=s}}function uy(e,t,n,r){var i=V,s=Bn.transition;Bn.transition=null;try{V=4,dl(e,t,n,r)}finally{V=i,Bn.transition=s}}function dl(e,t,n,r){if(is){var i=sa(e,t,n,r);if(i===null)go(e,t,r,ss,n),Wc(e,r);else if(ay(i,e,t,n,r))r.stopPropagation();else if(Wc(e,r),t&4&&-1<oy.indexOf(e)){for(;i!==null;){var s=ui(i);if(s!==null&&$p(s),s=sa(e,t,n,r),s===null&&go(e,t,r,ss,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else go(e,t,r,null,n)}}var ss=null;function sa(e,t,n,r){if(ss=null,e=al(r),e=tn(e),e!==null)if(t=gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Np(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ss=e,null}function Qp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xg()){case ll:return 1;case Bp:return 4;case ns:case Yg:return 16;case Op:return 536870912;default:return 16}default:return 16}}var Mt=null,pl=null,Oi=null;function Jp(){if(Oi)return Oi;var e,t=pl,n=t.length,r,i="value"in Mt?Mt.value:Mt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Oi=i.slice(e,1<r?1-r:void 0)}function Ui(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ji(){return!0}function Hc(){return!1}function Fe(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ji:Hc,this.isPropagationStopped=Hc,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ji)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ji)},persist:function(){},isPersistent:ji}),t}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=Fe(er),ci=J({},er,{view:0,detail:0}),dy=Fe(ci),oo,ao,ur,Rs=J({},ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ur&&(ur&&e.type==="mousemove"?(oo=e.screenX-ur.screenX,ao=e.screenY-ur.screenY):ao=oo=0,ur=e),oo)},movementY:function(e){return"movementY"in e?e.movementY:ao}}),qc=Fe(Rs),py=J({},Rs,{dataTransfer:0}),fy=Fe(py),hy=J({},ci,{relatedTarget:0}),lo=Fe(hy),my=J({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),gy=Fe(my),yy=J({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vy=Fe(yy),xy=J({},er,{data:0}),Gc=Fe(xy),Sy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ky={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function by(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ky[e])?!!t[e]:!1}function hl(){return by}var jy=J({},ci,{key:function(e){if(e.key){var t=Sy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hl,charCode:function(e){return e.type==="keypress"?Ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cy=Fe(jy),Py=J({},Rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kc=Fe(Py),Ty=J({},ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hl}),_y=Fe(Ty),Ey=J({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ay=Fe(Ey),My=J({},Rs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ly=Fe(My),Ry=[9,13,27,32],ml=vt&&"CompositionEvent"in window,Cr=null;vt&&"documentMode"in document&&(Cr=document.documentMode);var Dy=vt&&"TextEvent"in window&&!Cr,Xp=vt&&(!ml||Cr&&8<Cr&&11>=Cr),Qc=" ",Jc=!1;function Yp(e,t){switch(e){case"keyup":return Ry.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kn=!1;function Iy(e,t){switch(e){case"compositionend":return Zp(t);case"keypress":return t.which!==32?null:(Jc=!0,Qc);case"textInput":return e=t.data,e===Qc&&Jc?null:e;default:return null}}function Ny(e,t){if(kn)return e==="compositionend"||!ml&&Yp(e,t)?(e=Jp(),Oi=pl=Mt=null,kn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xp&&t.locale!=="ko"?null:t.data;default:return null}}var zy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zy[e.type]:t==="textarea"}function ef(e,t,n,r){Mp(r),t=os(t,"onChange"),0<t.length&&(n=new fl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pr=null,Ur=null;function Fy(e){pf(e,0)}function Ds(e){var t=Cn(e);if(jp(t))return e}function Vy(e,t){if(e==="change")return t}var tf=!1;if(vt){var co;if(vt){var uo="oninput"in document;if(!uo){var Yc=document.createElement("div");Yc.setAttribute("oninput","return;"),uo=typeof Yc.oninput=="function"}co=uo}else co=!1;tf=co&&(!document.documentMode||9<document.documentMode)}function Zc(){Pr&&(Pr.detachEvent("onpropertychange",nf),Ur=Pr=null)}function nf(e){if(e.propertyName==="value"&&Ds(Ur)){var t=[];ef(t,Ur,e,al(e)),Ip(Fy,t)}}function By(e,t,n){e==="focusin"?(Zc(),Pr=t,Ur=n,Pr.attachEvent("onpropertychange",nf)):e==="focusout"&&Zc()}function Oy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ds(Ur)}function Uy(e,t){if(e==="click")return Ds(t)}function Wy(e,t){if(e==="input"||e==="change")return Ds(t)}function $y(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:$y;function Wr(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oo.call(t,i)||!et(e[i],t[i]))return!1}return!0}function eu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tu(e,t){var n=eu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=eu(n)}}function rf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sf(){for(var e=window,t=Zi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zi(e.document)}return t}function gl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hy(e){var t=sf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&rf(n.ownerDocument.documentElement,n)){if(r!==null&&gl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=tu(n,s);var o=tu(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qy=vt&&"documentMode"in document&&11>=document.documentMode,bn=null,oa=null,Tr=null,aa=!1;function nu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;aa||bn==null||bn!==Zi(r)||(r=bn,"selectionStart"in r&&gl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Tr&&Wr(Tr,r)||(Tr=r,r=os(oa,"onSelect"),0<r.length&&(t=new fl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=bn)))}function Ci(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jn={animationend:Ci("Animation","AnimationEnd"),animationiteration:Ci("Animation","AnimationIteration"),animationstart:Ci("Animation","AnimationStart"),transitionend:Ci("Transition","TransitionEnd")},po={},of={};vt&&(of=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function Is(e){if(po[e])return po[e];if(!jn[e])return e;var t=jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in of)return po[e]=t[n];return e}var af=Is("animationend"),lf=Is("animationiteration"),cf=Is("animationstart"),uf=Is("transitionend"),df=new Map,ru="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,t){df.set(e,t),mn(t,[e])}for(var fo=0;fo<ru.length;fo++){var ho=ru[fo],Gy=ho.toLowerCase(),Ky=ho[0].toUpperCase()+ho.slice(1);Ht(Gy,"on"+Ky)}Ht(af,"onAnimationEnd");Ht(lf,"onAnimationIteration");Ht(cf,"onAnimationStart");Ht("dblclick","onDoubleClick");Ht("focusin","onFocus");Ht("focusout","onBlur");Ht(uf,"onTransitionEnd");Wn("onMouseEnter",["mouseout","mouseover"]);Wn("onMouseLeave",["mouseout","mouseover"]);Wn("onPointerEnter",["pointerout","pointerover"]);Wn("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qy=new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));function iu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Gg(r,t,void 0,e),e.currentTarget=null}function pf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;iu(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;iu(i,a,u),s=l}}}if(ts)throw e=na,ts=!1,na=null,e}function U(e,t){var n=t[pa];n===void 0&&(n=t[pa]=new Set);var r=e+"__bubble";n.has(r)||(ff(t,e,2,!1),n.add(r))}function mo(e,t,n){var r=0;t&&(r|=4),ff(n,e,r,t)}var Pi="_reactListening"+Math.random().toString(36).slice(2);function $r(e){if(!e[Pi]){e[Pi]=!0,xp.forEach(function(n){n!=="selectionchange"&&(Qy.has(n)||mo(n,!1,e),mo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Pi]||(t[Pi]=!0,mo("selectionchange",!1,t))}}function ff(e,t,n,r){switch(Qp(t)){case 1:var i=cy;break;case 4:i=uy;break;default:i=dl}n=i.bind(null,t,n,e),i=void 0,!ta||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function go(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=tn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Ip(function(){var u=s,d=al(n),f=[];e:{var p=df.get(e);if(p!==void 0){var y=fl,v=e;switch(e){case"keypress":if(Ui(n)===0)break e;case"keydown":case"keyup":y=Cy;break;case"focusin":v="focus",y=lo;break;case"focusout":v="blur",y=lo;break;case"beforeblur":case"afterblur":y=lo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=qc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=fy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=_y;break;case af:case lf:case cf:y=gy;break;case uf:y=Ay;break;case"scroll":y=dy;break;case"wheel":y=Ly;break;case"copy":case"cut":case"paste":y=vy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Kc}var x=(t&4)!==0,b=!x&&e==="scroll",m=x?p!==null?p+"Capture":null:p;x=[];for(var h=u,g;h!==null;){g=h;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,m!==null&&(S=Fr(h,m),S!=null&&x.push(Hr(h,S,g)))),b)break;h=h.return}0<x.length&&(p=new y(p,v,null,n,d),f.push({event:p,listeners:x}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==Zo&&(v=n.relatedTarget||n.fromElement)&&(tn(v)||v[xt]))break e;if((y||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?tn(v):null,v!==null&&(b=gn(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(x=qc,S="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=Kc,S="onPointerLeave",m="onPointerEnter",h="pointer"),b=y==null?p:Cn(y),g=v==null?p:Cn(v),p=new x(S,h+"leave",y,n,d),p.target=b,p.relatedTarget=g,S=null,tn(d)===u&&(x=new x(m,h+"enter",v,n,d),x.target=g,x.relatedTarget=b,S=x),b=S,y&&v)t:{for(x=y,m=v,h=0,g=x;g;g=xn(g))h++;for(g=0,S=m;S;S=xn(S))g++;for(;0<h-g;)x=xn(x),h--;for(;0<g-h;)m=xn(m),g--;for(;h--;){if(x===m||m!==null&&x===m.alternate)break t;x=xn(x),m=xn(m)}x=null}else x=null;y!==null&&su(f,p,y,x,!1),v!==null&&b!==null&&su(f,b,v,x,!0)}}e:{if(p=u?Cn(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var w=Vy;else if(Xc(p))if(tf)w=Wy;else{w=Oy;var C=By}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(w=Uy);if(w&&(w=w(e,u))){ef(f,w,n,d);break e}C&&C(e,p,u),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&Ko(p,"number",p.value)}switch(C=u?Cn(u):window,e){case"focusin":(Xc(C)||C.contentEditable==="true")&&(bn=C,oa=u,Tr=null);break;case"focusout":Tr=oa=bn=null;break;case"mousedown":aa=!0;break;case"contextmenu":case"mouseup":case"dragend":aa=!1,nu(f,n,d);break;case"selectionchange":if(qy)break;case"keydown":case"keyup":nu(f,n,d)}var T;if(ml)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else kn?Yp(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Xp&&n.locale!=="ko"&&(kn||k!=="onCompositionStart"?k==="onCompositionEnd"&&kn&&(T=Jp()):(Mt=d,pl="value"in Mt?Mt.value:Mt.textContent,kn=!0)),C=os(u,k),0<C.length&&(k=new Gc(k,e,null,n,d),f.push({event:k,listeners:C}),T?k.data=T:(T=Zp(n),T!==null&&(k.data=T)))),(T=Dy?Iy(e,n):Ny(e,n))&&(u=os(u,"onBeforeInput"),0<u.length&&(d=new Gc("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=T))}pf(f,t)})}function Hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function os(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Fr(e,n),s!=null&&r.unshift(Hr(e,s,i)),s=Fr(e,t),s!=null&&r.push(Hr(e,s,i))),e=e.return}return r}function xn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function su(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Fr(n,s),l!=null&&o.unshift(Hr(n,l,a))):i||(l=Fr(n,s),l!=null&&o.push(Hr(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Jy=/\r\n?/g,Xy=/\u0000|\uFFFD/g;function ou(e){return(typeof e=="string"?e:""+e).replace(Jy,`
`).replace(Xy,"")}function Ti(e,t,n){if(t=ou(t),ou(e)!==t&&n)throw Error(P(425))}function as(){}var la=null,ca=null;function ua(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var da=typeof setTimeout=="function"?setTimeout:void 0,Yy=typeof clearTimeout=="function"?clearTimeout:void 0,au=typeof Promise=="function"?Promise:void 0,Zy=typeof queueMicrotask=="function"?queueMicrotask:typeof au<"u"?function(e){return au.resolve(null).then(e).catch(ev)}:da;function ev(e){setTimeout(function(){throw e})}function yo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Or(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var tr=Math.random().toString(36).slice(2),rt="__reactFiber$"+tr,qr="__reactProps$"+tr,xt="__reactContainer$"+tr,pa="__reactEvents$"+tr,tv="__reactListeners$"+tr,nv="__reactHandles$"+tr;function tn(e){var t=e[rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lu(e);e!==null;){if(n=e[rt])return n;e=lu(e)}return t}e=n,n=e.parentNode}return null}function ui(e){return e=e[rt]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Ns(e){return e[qr]||null}var fa=[],Pn=-1;function qt(e){return{current:e}}function W(e){0>Pn||(e.current=fa[Pn],fa[Pn]=null,Pn--)}function O(e,t){Pn++,fa[Pn]=e.current,e.current=t}var Ut={},xe=qt(Ut),Pe=qt(!1),cn=Ut;function $n(e,t){var n=e.type.contextTypes;if(!n)return Ut;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Te(e){return e=e.childContextTypes,e!=null}function ls(){W(Pe),W(xe)}function cu(e,t,n){if(xe.current!==Ut)throw Error(P(168));O(xe,t),O(Pe,n)}function hf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,Bg(e)||"Unknown",i));return J({},n,r)}function cs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ut,cn=xe.current,O(xe,e),O(Pe,Pe.current),!0}function uu(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=hf(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,W(Pe),W(xe),O(xe,e)):W(Pe),O(Pe,n)}var pt=null,zs=!1,vo=!1;function mf(e){pt===null?pt=[e]:pt.push(e)}function rv(e){zs=!0,mf(e)}function Gt(){if(!vo&&pt!==null){vo=!0;var e=0,t=V;try{var n=pt;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}pt=null,zs=!1}catch(i){throw pt!==null&&(pt=pt.slice(e+1)),Vp(ll,Gt),i}finally{V=t,vo=!1}}return null}var Tn=[],_n=0,us=null,ds=0,Oe=[],Ue=0,un=null,ft=1,ht="";function Xt(e,t){Tn[_n++]=ds,Tn[_n++]=us,us=e,ds=t}function gf(e,t,n){Oe[Ue++]=ft,Oe[Ue++]=ht,Oe[Ue++]=un,un=e;var r=ft;e=ht;var i=32-Ye(r)-1;r&=~(1<<i),n+=1;var s=32-Ye(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ft=1<<32-Ye(t)+i|n<<i|r,ht=s+e}else ft=1<<s|n<<i|r,ht=e}function yl(e){e.return!==null&&(Xt(e,1),gf(e,1,0))}function vl(e){for(;e===us;)us=Tn[--_n],Tn[_n]=null,ds=Tn[--_n],Tn[_n]=null;for(;e===un;)un=Oe[--Ue],Oe[Ue]=null,ht=Oe[--Ue],Oe[Ue]=null,ft=Oe[--Ue],Oe[Ue]=null}var Re=null,Le=null,H=!1,Xe=null;function yf(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function du(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,Le=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=un!==null?{id:ft,overflow:ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,Le=null,!0):!1;default:return!1}}function ha(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ma(e){if(H){var t=Le;if(t){var n=t;if(!du(e,t)){if(ha(e))throw Error(P(418));t=Nt(n.nextSibling);var r=Re;t&&du(e,t)?yf(r,n):(e.flags=e.flags&-4097|2,H=!1,Re=e)}}else{if(ha(e))throw Error(P(418));e.flags=e.flags&-4097|2,H=!1,Re=e}}}function pu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function _i(e){if(e!==Re)return!1;if(!H)return pu(e),H=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ua(e.type,e.memoizedProps)),t&&(t=Le)){if(ha(e))throw vf(),Error(P(418));for(;t;)yf(e,t),t=Nt(t.nextSibling)}if(pu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=Nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=Re?Nt(e.stateNode.nextSibling):null;return!0}function vf(){for(var e=Le;e;)e=Nt(e.nextSibling)}function Hn(){Le=Re=null,H=!1}function xl(e){Xe===null?Xe=[e]:Xe.push(e)}var iv=bt.ReactCurrentBatchConfig;function dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Ei(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fu(e){var t=e._init;return t(e._payload)}function xf(e){function t(m,h){if(e){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=Bt(m,h),m.index=0,m.sibling=null,m}function s(m,h,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,h,g,S){return h===null||h.tag!==6?(h=Co(g,m.mode,S),h.return=m,h):(h=i(h,g),h.return=m,h)}function l(m,h,g,S){var w=g.type;return w===wn?d(m,h,g.props.children,S,g.key):h!==null&&(h.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Pt&&fu(w)===h.type)?(S=i(h,g.props),S.ref=dr(m,h,g),S.return=m,S):(S=Qi(g.type,g.key,g.props,null,m.mode,S),S.ref=dr(m,h,g),S.return=m,S)}function u(m,h,g,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Po(g,m.mode,S),h.return=m,h):(h=i(h,g.children||[]),h.return=m,h)}function d(m,h,g,S,w){return h===null||h.tag!==7?(h=an(g,m.mode,S,w),h.return=m,h):(h=i(h,g),h.return=m,h)}function f(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Co(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case vi:return g=Qi(h.type,h.key,h.props,null,m.mode,g),g.ref=dr(m,null,h),g.return=m,g;case Sn:return h=Po(h,m.mode,g),h.return=m,h;case Pt:var S=h._init;return f(m,S(h._payload),g)}if(yr(h)||or(h))return h=an(h,m.mode,g,null),h.return=m,h;Ei(m,h)}return null}function p(m,h,g,S){var w=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return w!==null?null:a(m,h,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case vi:return g.key===w?l(m,h,g,S):null;case Sn:return g.key===w?u(m,h,g,S):null;case Pt:return w=g._init,p(m,h,w(g._payload),S)}if(yr(g)||or(g))return w!==null?null:d(m,h,g,S,null);Ei(m,g)}return null}function y(m,h,g,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(g)||null,a(h,m,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case vi:return m=m.get(S.key===null?g:S.key)||null,l(h,m,S,w);case Sn:return m=m.get(S.key===null?g:S.key)||null,u(h,m,S,w);case Pt:var C=S._init;return y(m,h,g,C(S._payload),w)}if(yr(S)||or(S))return m=m.get(g)||null,d(h,m,S,w,null);Ei(h,S)}return null}function v(m,h,g,S){for(var w=null,C=null,T=h,k=h=0,M=null;T!==null&&k<g.length;k++){T.index>k?(M=T,T=null):M=T.sibling;var A=p(m,T,g[k],S);if(A===null){T===null&&(T=M);break}e&&T&&A.alternate===null&&t(m,T),h=s(A,h,k),C===null?w=A:C.sibling=A,C=A,T=M}if(k===g.length)return n(m,T),H&&Xt(m,k),w;if(T===null){for(;k<g.length;k++)T=f(m,g[k],S),T!==null&&(h=s(T,h,k),C===null?w=T:C.sibling=T,C=T);return H&&Xt(m,k),w}for(T=r(m,T);k<g.length;k++)M=y(T,m,k,g[k],S),M!==null&&(e&&M.alternate!==null&&T.delete(M.key===null?k:M.key),h=s(M,h,k),C===null?w=M:C.sibling=M,C=M);return e&&T.forEach(function(F){return t(m,F)}),H&&Xt(m,k),w}function x(m,h,g,S){var w=or(g);if(typeof w!="function")throw Error(P(150));if(g=w.call(g),g==null)throw Error(P(151));for(var C=w=null,T=h,k=h=0,M=null,A=g.next();T!==null&&!A.done;k++,A=g.next()){T.index>k?(M=T,T=null):M=T.sibling;var F=p(m,T,A.value,S);if(F===null){T===null&&(T=M);break}e&&T&&F.alternate===null&&t(m,T),h=s(F,h,k),C===null?w=F:C.sibling=F,C=F,T=M}if(A.done)return n(m,T),H&&Xt(m,k),w;if(T===null){for(;!A.done;k++,A=g.next())A=f(m,A.value,S),A!==null&&(h=s(A,h,k),C===null?w=A:C.sibling=A,C=A);return H&&Xt(m,k),w}for(T=r(m,T);!A.done;k++,A=g.next())A=y(T,m,k,A.value,S),A!==null&&(e&&A.alternate!==null&&T.delete(A.key===null?k:A.key),h=s(A,h,k),C===null?w=A:C.sibling=A,C=A);return e&&T.forEach(function(Ee){return t(m,Ee)}),H&&Xt(m,k),w}function b(m,h,g,S){if(typeof g=="object"&&g!==null&&g.type===wn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case vi:e:{for(var w=g.key,C=h;C!==null;){if(C.key===w){if(w=g.type,w===wn){if(C.tag===7){n(m,C.sibling),h=i(C,g.props.children),h.return=m,m=h;break e}}else if(C.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Pt&&fu(w)===C.type){n(m,C.sibling),h=i(C,g.props),h.ref=dr(m,C,g),h.return=m,m=h;break e}n(m,C);break}else t(m,C);C=C.sibling}g.type===wn?(h=an(g.props.children,m.mode,S,g.key),h.return=m,m=h):(S=Qi(g.type,g.key,g.props,null,m.mode,S),S.ref=dr(m,h,g),S.return=m,m=S)}return o(m);case Sn:e:{for(C=g.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(m,h.sibling),h=i(h,g.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=Po(g,m.mode,S),h.return=m,m=h}return o(m);case Pt:return C=g._init,b(m,h,C(g._payload),S)}if(yr(g))return v(m,h,g,S);if(or(g))return x(m,h,g,S);Ei(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,g),h.return=m,m=h):(n(m,h),h=Co(g,m.mode,S),h.return=m,m=h),o(m)):n(m,h)}return b}var qn=xf(!0),Sf=xf(!1),ps=qt(null),fs=null,En=null,Sl=null;function wl(){Sl=En=fs=null}function kl(e){var t=ps.current;W(ps),e._currentValue=t}function ga(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function On(e,t){fs=e,Sl=En=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(Sl!==e)if(e={context:e,memoizedValue:t,next:null},En===null){if(fs===null)throw Error(P(308));En=e,fs.dependencies={lanes:0,firstContext:e}}else En=En.next=e;return t}var nn=null;function bl(e){nn===null?nn=[e]:nn.push(e)}function wf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,bl(t)):(n.next=i.next,i.next=n),t.interleaved=n,St(e,r)}function St(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Tt=!1;function jl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,St(e,n)}return i=r.interleaved,i===null?(t.next=t,bl(r)):(t.next=i.next,i.next=t),r.interleaved=t,St(e,n)}function Wi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cl(e,n)}}function hu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function hs(e,t,n,r){var i=e.updateQueue;Tt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,d=u=l=null,a=s;do{var p=a.lane,y=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(p=t,y=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){f=v.call(y,f,p);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,p=typeof v=="function"?v.call(y,f,p):v,p==null)break e;f=J({},f,p);break e;case 2:Tt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else y={eventTime:y,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=y,l=f):d=d.next=y,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);pn|=o,e.lanes=o,e.memoizedState=f}}function mu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var di={},st=qt(di),Gr=qt(di),Kr=qt(di);function rn(e){if(e===di)throw Error(P(174));return e}function Cl(e,t){switch(O(Kr,t),O(Gr,e),O(st,di),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Jo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Jo(t,e)}W(st),O(st,t)}function Gn(){W(st),W(Gr),W(Kr)}function bf(e){rn(Kr.current);var t=rn(st.current),n=Jo(t,e.type);t!==n&&(O(Gr,e),O(st,n))}function Pl(e){Gr.current===e&&(W(st),W(Gr))}var G=qt(0);function ms(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xo=[];function Tl(){for(var e=0;e<xo.length;e++)xo[e]._workInProgressVersionPrimary=null;xo.length=0}var $i=bt.ReactCurrentDispatcher,So=bt.ReactCurrentBatchConfig,dn=0,Q=null,se=null,le=null,gs=!1,_r=!1,Qr=0,sv=0;function he(){throw Error(P(321))}function _l(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!et(e[n],t[n]))return!1;return!0}function El(e,t,n,r,i,s){if(dn=s,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$i.current=e===null||e.memoizedState===null?cv:uv,e=n(r,i),_r){s=0;do{if(_r=!1,Qr=0,25<=s)throw Error(P(301));s+=1,le=se=null,t.updateQueue=null,$i.current=dv,e=n(r,i)}while(_r)}if($i.current=ys,t=se!==null&&se.next!==null,dn=0,le=se=Q=null,gs=!1,t)throw Error(P(300));return e}function Al(){var e=Qr!==0;return Qr=0,e}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Q.memoizedState=le=e:le=le.next=e,le}function qe(){if(se===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=le===null?Q.memoizedState:le.next;if(t!==null)le=t,se=e;else{if(e===null)throw Error(P(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},le===null?Q.memoizedState=le=e:le=le.next=e}return le}function Jr(e,t){return typeof t=="function"?t(e):t}function wo(e){var t=qe(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=se,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((dn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Q.lanes|=d,pn|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,et(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Q.lanes|=s,pn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ko(e){var t=qe(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);et(s,t.memoizedState)||(Ce=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function jf(){}function Cf(e,t){var n=Q,r=qe(),i=t(),s=!et(r.memoizedState,i);if(s&&(r.memoizedState=i,Ce=!0),r=r.queue,Ml(_f.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,Xr(9,Tf.bind(null,n,r,i,t),void 0,null),ce===null)throw Error(P(349));dn&30||Pf(n,t,i)}return i}function Pf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Tf(e,t,n,r){t.value=n,t.getSnapshot=r,Ef(t)&&Af(e)}function _f(e,t,n){return n(function(){Ef(t)&&Af(e)})}function Ef(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!et(e,n)}catch{return!0}}function Af(e){var t=St(e,1);t!==null&&Ze(t,e,1,-1)}function gu(e){var t=nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jr,lastRenderedState:e},t.queue=e,e=e.dispatch=lv.bind(null,Q,e),[t.memoizedState,e]}function Xr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Mf(){return qe().memoizedState}function Hi(e,t,n,r){var i=nt();Q.flags|=e,i.memoizedState=Xr(1|t,n,void 0,r===void 0?null:r)}function Fs(e,t,n,r){var i=qe();r=r===void 0?null:r;var s=void 0;if(se!==null){var o=se.memoizedState;if(s=o.destroy,r!==null&&_l(r,o.deps)){i.memoizedState=Xr(t,n,s,r);return}}Q.flags|=e,i.memoizedState=Xr(1|t,n,s,r)}function yu(e,t){return Hi(8390656,8,e,t)}function Ml(e,t){return Fs(2048,8,e,t)}function Lf(e,t){return Fs(4,2,e,t)}function Rf(e,t){return Fs(4,4,e,t)}function Df(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function If(e,t,n){return n=n!=null?n.concat([e]):null,Fs(4,4,Df.bind(null,t,e),n)}function Ll(){}function Nf(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_l(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zf(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_l(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ff(e,t,n){return dn&21?(et(n,t)||(n=Up(),Q.lanes|=n,pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function ov(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=So.transition;So.transition={};try{e(!1),t()}finally{V=n,So.transition=r}}function Vf(){return qe().memoizedState}function av(e,t,n){var r=Vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bf(e))Of(t,n);else if(n=wf(e,t,n,r),n!==null){var i=we();Ze(n,e,r,i),Uf(n,t,r)}}function lv(e,t,n){var r=Vt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bf(e))Of(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,et(a,o)){var l=t.interleaved;l===null?(i.next=i,bl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=wf(e,t,i,r),n!==null&&(i=we(),Ze(n,e,r,i),Uf(n,t,r))}}function Bf(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Of(e,t){_r=gs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Uf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,cl(e,n)}}var ys={readContext:He,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},cv={readContext:He,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:yu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Hi(4194308,4,Df.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Hi(4,2,e,t)},useMemo:function(e,t){var n=nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=av.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:gu,useDebugValue:Ll,useDeferredValue:function(e){return nt().memoizedState=e},useTransition:function(){var e=gu(!1),t=e[0];return e=ov.bind(null,e[1]),nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,i=nt();if(H){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),ce===null)throw Error(P(349));dn&30||Pf(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,yu(_f.bind(null,r,s,e),[e]),r.flags|=2048,Xr(9,Tf.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=nt(),t=ce.identifierPrefix;if(H){var n=ht,r=ft;n=(r&~(1<<32-Ye(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=sv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},uv={readContext:He,useCallback:Nf,useContext:He,useEffect:Ml,useImperativeHandle:If,useInsertionEffect:Lf,useLayoutEffect:Rf,useMemo:zf,useReducer:wo,useRef:Mf,useState:function(){return wo(Jr)},useDebugValue:Ll,useDeferredValue:function(e){var t=qe();return Ff(t,se.memoizedState,e)},useTransition:function(){var e=wo(Jr)[0],t=qe().memoizedState;return[e,t]},useMutableSource:jf,useSyncExternalStore:Cf,useId:Vf,unstable_isNewReconciler:!1},dv={readContext:He,useCallback:Nf,useContext:He,useEffect:Ml,useImperativeHandle:If,useInsertionEffect:Lf,useLayoutEffect:Rf,useMemo:zf,useReducer:ko,useRef:Mf,useState:function(){return ko(Jr)},useDebugValue:Ll,useDeferredValue:function(e){var t=qe();return se===null?t.memoizedState=e:Ff(t,se.memoizedState,e)},useTransition:function(){var e=ko(Jr)[0],t=qe().memoizedState;return[e,t]},useMutableSource:jf,useSyncExternalStore:Cf,useId:Vf,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ya(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vs={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=we(),i=Vt(e),s=mt(r,i);s.payload=t,n!=null&&(s.callback=n),t=zt(e,s,i),t!==null&&(Ze(t,e,i,r),Wi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=we(),i=Vt(e),s=mt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=zt(e,s,i),t!==null&&(Ze(t,e,i,r),Wi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),r=Vt(e),i=mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=zt(e,i,r),t!==null&&(Ze(t,e,r,n),Wi(t,e,r))}};function vu(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Wr(n,r)||!Wr(i,s):!0}function Wf(e,t,n){var r=!1,i=Ut,s=t.contextType;return typeof s=="object"&&s!==null?s=He(s):(i=Te(t)?cn:xe.current,r=t.contextTypes,s=(r=r!=null)?$n(e,i):Ut),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function xu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vs.enqueueReplaceState(t,t.state,null)}function va(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},jl(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=He(s):(s=Te(t)?cn:xe.current,i.context=$n(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ya(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Vs.enqueueReplaceState(i,i.state,null),hs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Kn(e,t){try{var n="",r=t;do n+=Vg(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function bo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pv=typeof WeakMap=="function"?WeakMap:Map;function $f(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){xs||(xs=!0,Ea=r),xa(e,t)},n}function Hf(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){xa(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xa(e,t),typeof r!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Su(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Pv.bind(null,e,t,n),t.then(e,e))}function wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ku(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,zt(n,t,1))),n.lanes|=1),e)}var fv=bt.ReactCurrentOwner,Ce=!1;function Se(e,t,n,r){t.child=e===null?Sf(t,null,n,r):qn(t,e.child,n,r)}function bu(e,t,n,r,i){n=n.render;var s=t.ref;return On(t,i),r=El(e,t,n,r,s,i),n=Al(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wt(e,t,i)):(H&&n&&yl(t),t.flags|=1,Se(e,t,r,i),t.child)}function ju(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Bl(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,qf(e,t,s,r,i)):(e=Qi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wr,n(o,r)&&e.ref===t.ref)return wt(e,t,i)}return t.flags|=1,e=Bt(s,r),e.ref=t.ref,e.return=t,t.child=e}function qf(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Wr(s,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,wt(e,t,i)}return Sa(e,t,n,r,i)}function Gf(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(Mn,Me),Me|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(Mn,Me),Me|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,O(Mn,Me),Me|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,O(Mn,Me),Me|=r;return Se(e,t,i,n),t.child}function Kf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Sa(e,t,n,r,i){var s=Te(n)?cn:xe.current;return s=$n(t,s),On(t,i),n=El(e,t,n,r,s,i),r=Al(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wt(e,t,i)):(H&&r&&yl(t),t.flags|=1,Se(e,t,n,i),t.child)}function Cu(e,t,n,r,i){if(Te(n)){var s=!0;cs(t)}else s=!1;if(On(t,i),t.stateNode===null)qi(e,t),Wf(t,n,r),va(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=He(u):(u=Te(n)?cn:xe.current,u=$n(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&xu(t,o,r,u),Tt=!1;var p=t.memoizedState;o.state=p,hs(t,r,o,i),l=t.memoizedState,a!==r||p!==l||Pe.current||Tt?(typeof d=="function"&&(ya(t,n,d,r),l=t.memoizedState),(a=Tt||vu(t,n,a,r,p,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,kf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Qe(t.type,a),o.props=u,f=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=He(l):(l=Te(n)?cn:xe.current,l=$n(t,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==l)&&xu(t,o,r,l),Tt=!1,p=t.memoizedState,o.state=p,hs(t,r,o,i);var v=t.memoizedState;a!==f||p!==v||Pe.current||Tt?(typeof y=="function"&&(ya(t,n,y,r),v=t.memoizedState),(u=Tt||vu(t,n,u,r,p,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return wa(e,t,n,r,s,i)}function wa(e,t,n,r,i,s){Kf(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&uu(t,n,!1),wt(e,t,s);r=t.stateNode,fv.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=qn(t,e.child,null,s),t.child=qn(t,null,a,s)):Se(e,t,a,s),t.memoizedState=r.state,i&&uu(t,n,!0),t.child}function Qf(e){var t=e.stateNode;t.pendingContext?cu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cu(e,t.context,!1),Cl(e,t.containerInfo)}function Pu(e,t,n,r,i){return Hn(),xl(i),t.flags|=256,Se(e,t,n,r),t.child}var ka={dehydrated:null,treeContext:null,retryLane:0};function ba(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jf(e,t,n){var r=t.pendingProps,i=G.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),O(G,i&1),e===null)return ma(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Us(o,r,0,null),e=an(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ba(n),t.memoizedState=ka,e):Rl(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return hv(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Bt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Bt(a,s):(s=an(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?ba(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=ka,r}return s=e.child,e=s.sibling,r=Bt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Rl(e,t){return t=Us({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ai(e,t,n,r){return r!==null&&xl(r),qn(t,e.child,null,n),e=Rl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function hv(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=bo(Error(P(422))),Ai(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Us({mode:"visible",children:r.children},i,0,null),s=an(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&qn(t,e.child,null,o),t.child.memoizedState=ba(o),t.memoizedState=ka,s);if(!(t.mode&1))return Ai(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(P(419)),r=bo(s,r,void 0),Ai(e,t,o,r)}if(a=(o&e.childLanes)!==0,Ce||a){if(r=ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,St(e,i),Ze(r,e,i,-1))}return Vl(),r=bo(Error(P(421))),Ai(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Tv.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Le=Nt(i.nextSibling),Re=t,H=!0,Xe=null,e!==null&&(Oe[Ue++]=ft,Oe[Ue++]=ht,Oe[Ue++]=un,ft=e.id,ht=e.overflow,un=t),t=Rl(t,r.children),t.flags|=4096,t)}function Tu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ga(e.return,t,n)}function jo(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Xf(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Se(e,t,r.children,n),r=G.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tu(e,n,t);else if(e.tag===19)Tu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(G,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ms(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jo(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ms(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jo(t,!0,n,null,s);break;case"together":jo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mv(e,t,n){switch(t.tag){case 3:Qf(t),Hn();break;case 5:bf(t);break;case 1:Te(t.type)&&cs(t);break;case 4:Cl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;O(ps,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(G,G.current&1),t.flags|=128,null):n&t.child.childLanes?Jf(e,t,n):(O(G,G.current&1),e=wt(e,t,n),e!==null?e.sibling:null);O(G,G.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Xf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(G,G.current),r)break;return null;case 22:case 23:return t.lanes=0,Gf(e,t,n)}return wt(e,t,n)}var Yf,ja,Zf,eh;Yf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ja=function(){};Zf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,rn(st.current);var s=null;switch(n){case"input":i=qo(e,i),r=qo(e,r),s=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),s=[];break;case"textarea":i=Qo(e,i),r=Qo(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=as)}Xo(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Nr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Nr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&U("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};eh=function(e,t,n,r){n!==r&&(t.flags|=4)};function pr(e,t){if(!H)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function gv(e,t,n){var r=t.pendingProps;switch(vl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return Te(t.type)&&ls(),me(t),null;case 3:return r=t.stateNode,Gn(),W(Pe),W(xe),Tl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_i(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(La(Xe),Xe=null))),ja(e,t),me(t),null;case 5:Pl(t);var i=rn(Kr.current);if(n=t.type,e!==null&&t.stateNode!=null)Zf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return me(t),null}if(e=rn(st.current),_i(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[rt]=t,r[qr]=s,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(i=0;i<xr.length;i++)U(xr[i],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":Nc(r,s),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},U("invalid",r);break;case"textarea":Fc(r,s),U("invalid",r)}Xo(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ti(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ti(r.textContent,a,e),i=["children",""+a]):Nr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&U("scroll",r)}switch(n){case"input":xi(r),zc(r,s,!0);break;case"textarea":xi(r),Vc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=as)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Tp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[rt]=t,e[qr]=r,Yf(e,t,!1,!1),t.stateNode=e;e:{switch(o=Yo(n,r),n){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<xr.length;i++)U(xr[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":Nc(e,r),i=qo(e,r),U("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),U("invalid",e);break;case"textarea":Fc(e,r),i=Qo(e,r),U("invalid",e);break;default:i=r}Xo(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ap(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&_p(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&zr(e,l):typeof l=="number"&&zr(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Nr.hasOwnProperty(s)?l!=null&&s==="onScroll"&&U("scroll",e):l!=null&&rl(e,s,l,o))}switch(n){case"input":xi(e),zc(e,r,!1);break;case"textarea":xi(e),Vc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ot(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?zn(e,!!r.multiple,s,!1):r.defaultValue!=null&&zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=as)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)eh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=rn(Kr.current),rn(st.current),_i(t)){if(r=t.stateNode,n=t.memoizedProps,r[rt]=t,(s=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:Ti(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ti(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rt]=t,t.stateNode=r}return me(t),null;case 13:if(W(G),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(H&&Le!==null&&t.mode&1&&!(t.flags&128))vf(),Hn(),t.flags|=98560,s=!1;else if(s=_i(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(P(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[rt]=t}else Hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),s=!1}else Xe!==null&&(La(Xe),Xe=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||G.current&1?oe===0&&(oe=3):Vl())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return Gn(),ja(e,t),e===null&&$r(t.stateNode.containerInfo),me(t),null;case 10:return kl(t.type._context),me(t),null;case 17:return Te(t.type)&&ls(),me(t),null;case 19:if(W(G),s=t.memoizedState,s===null)return me(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)pr(s,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ms(e),o!==null){for(t.flags|=128,pr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(G,G.current&1|2),t.child}e=e.sibling}s.tail!==null&&ne()>Qn&&(t.flags|=128,r=!0,pr(s,!1),t.lanes=4194304)}else{if(!r)if(e=ms(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!H)return me(t),null}else 2*ne()-s.renderingStartTime>Qn&&n!==1073741824&&(t.flags|=128,r=!0,pr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ne(),t.sibling=null,n=G.current,O(G,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return Fl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Me&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function yv(e,t){switch(vl(t),t.tag){case 1:return Te(t.type)&&ls(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gn(),W(Pe),W(xe),Tl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Pl(t),null;case 13:if(W(G),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(G),null;case 4:return Gn(),null;case 10:return kl(t.type._context),null;case 22:case 23:return Fl(),null;case 24:return null;default:return null}}var Mi=!1,ye=!1,vv=typeof WeakSet=="function"?WeakSet:Set,E=null;function An(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function Ca(e,t,n){try{n()}catch(r){ee(e,t,r)}}var _u=!1;function xv(e,t){if(la=is,e=sf(),gl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var y;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)p=f,f=y;for(;;){if(f===e)break t;if(p===n&&++u===i&&(a=o),p===s&&++d===r&&(l=o),(y=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ca={focusedElem:e,selectionRange:n},is=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,b=v.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:Qe(t.type,x),b);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(S){ee(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return v=_u,_u=!1,v}function Er(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ca(t,n,s)}i=i.next}while(i!==r)}}function Bs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Pa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function th(e){var t=e.alternate;t!==null&&(e.alternate=null,th(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[rt],delete t[qr],delete t[pa],delete t[tv],delete t[nv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nh(e){return e.tag===5||e.tag===3||e.tag===4}function Eu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=as));else if(r!==4&&(e=e.child,e!==null))for(Ta(e,t,n),e=e.sibling;e!==null;)Ta(e,t,n),e=e.sibling}function _a(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(_a(e,t,n),e=e.sibling;e!==null;)_a(e,t,n),e=e.sibling}var ue=null,Je=!1;function jt(e,t,n){for(n=n.child;n!==null;)rh(e,t,n),n=n.sibling}function rh(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(Ls,n)}catch{}switch(n.tag){case 5:ye||An(n,t);case 6:var r=ue,i=Je;ue=null,jt(e,t,n),ue=r,Je=i,ue!==null&&(Je?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Je?(e=ue,n=n.stateNode,e.nodeType===8?yo(e.parentNode,n):e.nodeType===1&&yo(e,n),Or(e)):yo(ue,n.stateNode));break;case 4:r=ue,i=Je,ue=n.stateNode.containerInfo,Je=!0,jt(e,t,n),ue=r,Je=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ca(n,t,o),i=i.next}while(i!==r)}jt(e,t,n);break;case 1:if(!ye&&(An(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ee(n,t,a)}jt(e,t,n);break;case 21:jt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,jt(e,t,n),ye=r):jt(e,t,n);break;default:jt(e,t,n)}}function Au(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vv),t.forEach(function(r){var i=_v.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Je=!1;break e;case 3:ue=a.stateNode.containerInfo,Je=!0;break e;case 4:ue=a.stateNode.containerInfo,Je=!0;break e}a=a.return}if(ue===null)throw Error(P(160));rh(s,o,i),ue=null,Je=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ih(t,e),t=t.sibling}function ih(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),tt(e),r&4){try{Er(3,e,e.return),Bs(3,e)}catch(x){ee(e,e.return,x)}try{Er(5,e,e.return)}catch(x){ee(e,e.return,x)}}break;case 1:Ge(t,e),tt(e),r&512&&n!==null&&An(n,n.return);break;case 5:if(Ge(t,e),tt(e),r&512&&n!==null&&An(n,n.return),e.flags&32){var i=e.stateNode;try{zr(i,"")}catch(x){ee(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Cp(i,s),Yo(a,o);var u=Yo(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Ap(i,f):d==="dangerouslySetInnerHTML"?_p(i,f):d==="children"?zr(i,f):rl(i,d,f,u)}switch(a){case"input":Go(i,s);break;case"textarea":Pp(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?zn(i,!!s.multiple,y,!1):p!==!!s.multiple&&(s.defaultValue!=null?zn(i,!!s.multiple,s.defaultValue,!0):zn(i,!!s.multiple,s.multiple?[]:"",!1))}i[qr]=s}catch(x){ee(e,e.return,x)}}break;case 6:if(Ge(t,e),tt(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(x){ee(e,e.return,x)}}break;case 3:if(Ge(t,e),tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Or(t.containerInfo)}catch(x){ee(e,e.return,x)}break;case 4:Ge(t,e),tt(e);break;case 13:Ge(t,e),tt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Nl=ne())),r&4&&Au(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(u=ye)||d,Ge(t,e),ye=u):Ge(t,e),tt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(E=e,d=e.child;d!==null;){for(f=E=d;E!==null;){switch(p=E,y=p.child,p.tag){case 0:case 11:case 14:case 15:Er(4,p,p.return);break;case 1:An(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){ee(r,n,x)}}break;case 5:An(p,p.return);break;case 22:if(p.memoizedState!==null){Lu(f);continue}}y!==null?(y.return=p,E=y):Lu(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ep("display",o))}catch(x){ee(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){ee(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ge(t,e),tt(e),r&4&&Au(e);break;case 21:break;default:Ge(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(nh(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zr(i,""),r.flags&=-33);var s=Eu(e);_a(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Eu(e);Ta(e,a,o);break;default:throw Error(P(161))}}catch(l){ee(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sv(e,t,n){E=e,sh(e)}function sh(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Mi;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ye;a=Mi;var u=ye;if(Mi=o,(ye=l)&&!u)for(E=i;E!==null;)o=E,l=o.child,o.tag===22&&o.memoizedState!==null?Ru(i):l!==null?(l.return=o,E=l):Ru(i);for(;s!==null;)E=s,sh(s),s=s.sibling;E=i,Mi=a,ye=u}Mu(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,E=s):Mu(e)}}function Mu(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Bs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&mu(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}mu(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Or(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}ye||t.flags&512&&Pa(t)}catch(p){ee(t,t.return,p)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function Lu(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function Ru(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Bs(4,t)}catch(l){ee(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ee(t,i,l)}}var s=t.return;try{Pa(t)}catch(l){ee(t,s,l)}break;case 5:var o=t.return;try{Pa(t)}catch(l){ee(t,o,l)}}}catch(l){ee(t,t.return,l)}if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}var wv=Math.ceil,vs=bt.ReactCurrentDispatcher,Dl=bt.ReactCurrentOwner,$e=bt.ReactCurrentBatchConfig,z=0,ce=null,re=null,pe=0,Me=0,Mn=qt(0),oe=0,Yr=null,pn=0,Os=0,Il=0,Ar=null,je=null,Nl=0,Qn=1/0,dt=null,xs=!1,Ea=null,Ft=null,Li=!1,Lt=null,Ss=0,Mr=0,Aa=null,Gi=-1,Ki=0;function we(){return z&6?ne():Gi!==-1?Gi:Gi=ne()}function Vt(e){return e.mode&1?z&2&&pe!==0?pe&-pe:iv.transition!==null?(Ki===0&&(Ki=Up()),Ki):(e=V,e!==0||(e=window.event,e=e===void 0?16:Qp(e.type)),e):1}function Ze(e,t,n,r){if(50<Mr)throw Mr=0,Aa=null,Error(P(185));li(e,n,r),(!(z&2)||e!==ce)&&(e===ce&&(!(z&2)&&(Os|=n),oe===4&&Et(e,pe)),_e(e,r),n===1&&z===0&&!(t.mode&1)&&(Qn=ne()+500,zs&&Gt()))}function _e(e,t){var n=e.callbackNode;iy(e,t);var r=rs(e,e===ce?pe:0);if(r===0)n!==null&&Uc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Uc(n),t===1)e.tag===0?rv(Du.bind(null,e)):mf(Du.bind(null,e)),Zy(function(){!(z&6)&&Gt()}),n=null;else{switch(Wp(r)){case 1:n=ll;break;case 4:n=Bp;break;case 16:n=ns;break;case 536870912:n=Op;break;default:n=ns}n=fh(n,oh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function oh(e,t){if(Gi=-1,Ki=0,z&6)throw Error(P(327));var n=e.callbackNode;if(Un()&&e.callbackNode!==n)return null;var r=rs(e,e===ce?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ws(e,r);else{t=r;var i=z;z|=2;var s=lh();(ce!==e||pe!==t)&&(dt=null,Qn=ne()+500,on(e,t));do try{jv();break}catch(a){ah(e,a)}while(!0);wl(),vs.current=s,z=i,re!==null?t=0:(ce=null,pe=0,t=oe)}if(t!==0){if(t===2&&(i=ra(e),i!==0&&(r=i,t=Ma(e,i))),t===1)throw n=Yr,on(e,0),Et(e,r),_e(e,ne()),n;if(t===6)Et(e,r);else{if(i=e.current.alternate,!(r&30)&&!kv(i)&&(t=ws(e,r),t===2&&(s=ra(e),s!==0&&(r=s,t=Ma(e,s))),t===1))throw n=Yr,on(e,0),Et(e,r),_e(e,ne()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Yt(e,je,dt);break;case 3:if(Et(e,r),(r&130023424)===r&&(t=Nl+500-ne(),10<t)){if(rs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=da(Yt.bind(null,e,je,dt),t);break}Yt(e,je,dt);break;case 4:if(Et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ye(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wv(r/1960))-r,10<r){e.timeoutHandle=da(Yt.bind(null,e,je,dt),r);break}Yt(e,je,dt);break;case 5:Yt(e,je,dt);break;default:throw Error(P(329))}}}return _e(e,ne()),e.callbackNode===n?oh.bind(null,e):null}function Ma(e,t){var n=Ar;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=ws(e,t),e!==2&&(t=je,je=n,t!==null&&La(t)),e}function La(e){je===null?je=e:je.push.apply(je,e)}function kv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!et(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Et(e,t){for(t&=~Il,t&=~Os,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ye(t),r=1<<n;e[n]=-1,t&=~r}}function Du(e){if(z&6)throw Error(P(327));Un();var t=rs(e,0);if(!(t&1))return _e(e,ne()),null;var n=ws(e,t);if(e.tag!==0&&n===2){var r=ra(e);r!==0&&(t=r,n=Ma(e,r))}if(n===1)throw n=Yr,on(e,0),Et(e,t),_e(e,ne()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yt(e,je,dt),_e(e,ne()),null}function zl(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(Qn=ne()+500,zs&&Gt())}}function fn(e){Lt!==null&&Lt.tag===0&&!(z&6)&&Un();var t=z;z|=1;var n=$e.transition,r=V;try{if($e.transition=null,V=1,e)return e()}finally{V=r,$e.transition=n,z=t,!(z&6)&&Gt()}}function Fl(){Me=Mn.current,W(Mn)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yy(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(vl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ls();break;case 3:Gn(),W(Pe),W(xe),Tl();break;case 5:Pl(r);break;case 4:Gn();break;case 13:W(G);break;case 19:W(G);break;case 10:kl(r.type._context);break;case 22:case 23:Fl()}n=n.return}if(ce=e,re=e=Bt(e.current,null),pe=Me=t,oe=0,Yr=null,Il=Os=pn=0,je=Ar=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}nn=null}return e}function ah(e,t){do{var n=re;try{if(wl(),$i.current=ys,gs){for(var r=Q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gs=!1}if(dn=0,le=se=Q=null,_r=!1,Qr=0,Dl.current=null,n===null||n.return===null){oe=1,Yr=t,re=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=pe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=wu(o);if(y!==null){y.flags&=-257,ku(y,o,a,s,t),y.mode&1&&Su(s,u,t),t=y,l=u;var v=t.updateQueue;if(v===null){var x=new Set;x.add(l),t.updateQueue=x}else v.add(l);break e}else{if(!(t&1)){Su(s,u,t),Vl();break e}l=Error(P(426))}}else if(H&&a.mode&1){var b=wu(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),ku(b,o,a,s,t),xl(Kn(l,a));break e}}s=l=Kn(l,a),oe!==4&&(oe=2),Ar===null?Ar=[s]:Ar.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=$f(s,l,t);hu(s,m);break e;case 1:a=l;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ft===null||!Ft.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var S=Hf(s,a,t);hu(s,S);break e}}s=s.return}while(s!==null)}uh(n)}catch(w){t=w,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function lh(){var e=vs.current;return vs.current=ys,e===null?ys:e}function Vl(){(oe===0||oe===3||oe===2)&&(oe=4),ce===null||!(pn&268435455)&&!(Os&268435455)||Et(ce,pe)}function ws(e,t){var n=z;z|=2;var r=lh();(ce!==e||pe!==t)&&(dt=null,on(e,t));do try{bv();break}catch(i){ah(e,i)}while(!0);if(wl(),z=n,vs.current=r,re!==null)throw Error(P(261));return ce=null,pe=0,oe}function bv(){for(;re!==null;)ch(re)}function jv(){for(;re!==null&&!Qg();)ch(re)}function ch(e){var t=ph(e.alternate,e,Me);e.memoizedProps=e.pendingProps,t===null?uh(e):re=t,Dl.current=null}function uh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yv(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,re=null;return}}else if(n=gv(n,t,Me),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);oe===0&&(oe=5)}function Yt(e,t,n){var r=V,i=$e.transition;try{$e.transition=null,V=1,Cv(e,t,n,r)}finally{$e.transition=i,V=r}return null}function Cv(e,t,n,r){do Un();while(Lt!==null);if(z&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(sy(e,s),e===ce&&(re=ce=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Li||(Li=!0,fh(ns,function(){return Un(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$e.transition,$e.transition=null;var o=V;V=1;var a=z;z|=4,Dl.current=null,xv(e,n),ih(n,e),Hy(ca),is=!!la,ca=la=null,e.current=n,Sv(n),Jg(),z=a,V=o,$e.transition=s}else e.current=n;if(Li&&(Li=!1,Lt=e,Ss=i),s=e.pendingLanes,s===0&&(Ft=null),Zg(n.stateNode),_e(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xs)throw xs=!1,e=Ea,Ea=null,e;return Ss&1&&e.tag!==0&&Un(),s=e.pendingLanes,s&1?e===Aa?Mr++:(Mr=0,Aa=e):Mr=0,Gt(),null}function Un(){if(Lt!==null){var e=Wp(Ss),t=$e.transition,n=V;try{if($e.transition=null,V=16>e?16:e,Lt===null)var r=!1;else{if(e=Lt,Lt=null,Ss=0,z&6)throw Error(P(331));var i=z;for(z|=4,E=e.current;E!==null;){var s=E,o=s.child;if(E.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(E=u;E!==null;){var d=E;switch(d.tag){case 0:case 11:case 15:Er(8,d,s)}var f=d.child;if(f!==null)f.return=d,E=f;else for(;E!==null;){d=E;var p=d.sibling,y=d.return;if(th(d),d===u){E=null;break}if(p!==null){p.return=y,E=p;break}E=y}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}E=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,E=o;else e:for(;E!==null;){if(s=E,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Er(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,E=m;break e}E=s.return}}var h=e.current;for(E=h;E!==null;){o=E;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,E=g;else e:for(o=h;E!==null;){if(a=E,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Bs(9,a)}}catch(w){ee(a,a.return,w)}if(a===o){E=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,E=S;break e}E=a.return}}if(z=i,Gt(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(Ls,e)}catch{}r=!0}return r}finally{V=n,$e.transition=t}}return!1}function Iu(e,t,n){t=Kn(n,t),t=$f(e,t,1),e=zt(e,t,1),t=we(),e!==null&&(li(e,1,t),_e(e,t))}function ee(e,t,n){if(e.tag===3)Iu(e,e,n);else for(;t!==null;){if(t.tag===3){Iu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ft===null||!Ft.has(r))){e=Kn(n,e),e=Hf(t,e,1),t=zt(t,e,1),e=we(),t!==null&&(li(t,1,e),_e(t,e));break}}t=t.return}}function Pv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(pe&n)===n&&(oe===4||oe===3&&(pe&130023424)===pe&&500>ne()-Nl?on(e,0):Il|=n),_e(e,t)}function dh(e,t){t===0&&(e.mode&1?(t=ki,ki<<=1,!(ki&130023424)&&(ki=4194304)):t=1);var n=we();e=St(e,t),e!==null&&(li(e,t,n),_e(e,n))}function Tv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dh(e,n)}function _v(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),dh(e,n)}var ph;ph=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,mv(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,H&&t.flags&1048576&&gf(t,ds,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qi(e,t),e=t.pendingProps;var i=$n(t,xe.current);On(t,n),i=El(null,t,r,e,i,n);var s=Al();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Te(r)?(s=!0,cs(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,jl(t),i.updater=Vs,t.stateNode=i,i._reactInternals=t,va(t,r,e,n),t=wa(null,t,r,!0,s,n)):(t.tag=0,H&&s&&yl(t),Se(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Av(r),e=Qe(r,e),i){case 0:t=Sa(null,t,r,e,n);break e;case 1:t=Cu(null,t,r,e,n);break e;case 11:t=bu(null,t,r,e,n);break e;case 14:t=ju(null,t,r,Qe(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Sa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),Cu(e,t,r,i,n);case 3:e:{if(Qf(t),e===null)throw Error(P(387));r=t.pendingProps,s=t.memoizedState,i=s.element,kf(e,t),hs(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Kn(Error(P(423)),t),t=Pu(e,t,r,n,i);break e}else if(r!==i){i=Kn(Error(P(424)),t),t=Pu(e,t,r,n,i);break e}else for(Le=Nt(t.stateNode.containerInfo.firstChild),Re=t,H=!0,Xe=null,n=Sf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hn(),r===i){t=wt(e,t,n);break e}Se(e,t,r,n)}t=t.child}return t;case 5:return bf(t),e===null&&ma(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,ua(r,i)?o=null:s!==null&&ua(r,s)&&(t.flags|=32),Kf(e,t),Se(e,t,o,n),t.child;case 6:return e===null&&ma(t),null;case 13:return Jf(e,t,n);case 4:return Cl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=qn(t,null,r,n):Se(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),bu(e,t,r,i,n);case 7:return Se(e,t,t.pendingProps,n),t.child;case 8:return Se(e,t,t.pendingProps.children,n),t.child;case 12:return Se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,O(ps,r._currentValue),r._currentValue=o,s!==null)if(et(s.value,o)){if(s.children===i.children&&!Pe.current){t=wt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=mt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ga(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ga(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Se(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,On(t,n),i=He(i),r=r(i),t.flags|=1,Se(e,t,r,n),t.child;case 14:return r=t.type,i=Qe(r,t.pendingProps),i=Qe(r.type,i),ju(e,t,r,i,n);case 15:return qf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),qi(e,t),t.tag=1,Te(r)?(e=!0,cs(t)):e=!1,On(t,n),Wf(t,r,i),va(t,r,i,n),wa(null,t,r,!0,e,n);case 19:return Xf(e,t,n);case 22:return Gf(e,t,n)}throw Error(P(156,t.tag))};function fh(e,t){return Vp(e,t)}function Ev(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new Ev(e,t,n,r)}function Bl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Av(e){if(typeof e=="function")return Bl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sl)return 11;if(e===ol)return 14}return 2}function Bt(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qi(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Bl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case wn:return an(n.children,i,s,t);case il:o=8,i|=8;break;case Uo:return e=We(12,n,t,i|2),e.elementType=Uo,e.lanes=s,e;case Wo:return e=We(13,n,t,i),e.elementType=Wo,e.lanes=s,e;case $o:return e=We(19,n,t,i),e.elementType=$o,e.lanes=s,e;case kp:return Us(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Sp:o=10;break e;case wp:o=9;break e;case sl:o=11;break e;case ol:o=14;break e;case Pt:o=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=We(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function an(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function Us(e,t,n,r){return e=We(22,e,r,t),e.elementType=kp,e.lanes=n,e.stateNode={isHidden:!1},e}function Co(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function Po(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=so(0),this.expirationTimes=so(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=so(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ol(e,t,n,r,i,s,o,a,l){return e=new Mv(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=We(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jl(s),e}function Lv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function hh(e){if(!e)return Ut;e=e._reactInternals;e:{if(gn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Te(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Te(n))return hf(e,n,t)}return t}function mh(e,t,n,r,i,s,o,a,l){return e=Ol(n,r,!0,e,i,s,o,a,l),e.context=hh(null),n=e.current,r=we(),i=Vt(n),s=mt(r,i),s.callback=t??null,zt(n,s,i),e.current.lanes=i,li(e,i,r),_e(e,r),e}function Ws(e,t,n,r){var i=t.current,s=we(),o=Vt(i);return n=hh(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=zt(i,t,o),e!==null&&(Ze(e,i,o,s),Wi(e,i,o)),o}function ks(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ul(e,t){Nu(e,t),(e=e.alternate)&&Nu(e,t)}function Rv(){return null}var gh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wl(e){this._internalRoot=e}$s.prototype.render=Wl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Ws(e,t,null,null)};$s.prototype.unmount=Wl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fn(function(){Ws(null,e,null,null)}),t[xt]=null}};function $s(e){this._internalRoot=e}$s.prototype.unstable_scheduleHydration=function(e){if(e){var t=qp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&Kp(e)}};function $l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zu(){}function Dv(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ks(o);s.call(u)}}var o=mh(t,r,e,0,null,!1,!1,"",zu);return e._reactRootContainer=o,e[xt]=o.current,$r(e.nodeType===8?e.parentNode:e),fn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ks(l);a.call(u)}}var l=Ol(e,0,!1,null,null,!1,!1,"",zu);return e._reactRootContainer=l,e[xt]=l.current,$r(e.nodeType===8?e.parentNode:e),fn(function(){Ws(t,l,n,r)}),l}function qs(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ks(o);a.call(l)}}Ws(t,o,e,i)}else o=Dv(n,t,e,i,r);return ks(o)}$p=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=vr(t.pendingLanes);n!==0&&(cl(t,n|1),_e(t,ne()),!(z&6)&&(Qn=ne()+500,Gt()))}break;case 13:fn(function(){var r=St(e,1);if(r!==null){var i=we();Ze(r,e,1,i)}}),Ul(e,1)}};ul=function(e){if(e.tag===13){var t=St(e,134217728);if(t!==null){var n=we();Ze(t,e,134217728,n)}Ul(e,134217728)}};Hp=function(e){if(e.tag===13){var t=Vt(e),n=St(e,t);if(n!==null){var r=we();Ze(n,e,t,r)}Ul(e,t)}};qp=function(){return V};Gp=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};ea=function(e,t,n){switch(t){case"input":if(Go(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ns(r);if(!i)throw Error(P(90));jp(r),Go(r,i)}}}break;case"textarea":Pp(e,n);break;case"select":t=n.value,t!=null&&zn(e,!!n.multiple,t,!1)}};Rp=zl;Dp=fn;var Iv={usingClientEntryPoint:!1,Events:[ui,Cn,Ns,Mp,Lp,zl]},fr={findFiberByHostInstance:tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nv={bundleType:fr.bundleType,version:fr.version,rendererPackageName:fr.rendererPackageName,rendererConfig:fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zp(e),e===null?null:e.stateNode},findFiberByHostInstance:fr.findFiberByHostInstance||Rv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ri.isDisabled&&Ri.supportsFiber)try{Ls=Ri.inject(Nv),it=Ri}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iv;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$l(t))throw Error(P(200));return Lv(e,t,null,n)};ze.createRoot=function(e,t){if(!$l(e))throw Error(P(299));var n=!1,r="",i=gh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ol(e,1,!1,null,null,n,!1,r,i),e[xt]=t.current,$r(e.nodeType===8?e.parentNode:e),new Wl(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=zp(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return fn(e)};ze.hydrate=function(e,t,n){if(!Hs(t))throw Error(P(200));return qs(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!$l(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=gh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=mh(t,null,e,1,n??null,i,!1,s,o),e[xt]=t.current,$r(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new $s(t)};ze.render=function(e,t,n){if(!Hs(t))throw Error(P(200));return qs(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!Hs(e))throw Error(P(40));return e._reactRootContainer?(fn(function(){qs(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1};ze.unstable_batchedUpdates=zl;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Hs(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return qs(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function yh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yh)}catch(e){console.error(e)}}yh(),gp.exports=ze;var zv=gp.exports,Fu=zv;Bo.createRoot=Fu.createRoot,Bo.hydrateRoot=Fu.hydrateRoot;const B={name:"Dereck Goolsby-Bearsong",tagline:"Engineering Efficiency Through Intelligent Customer Support",role:"Senior Technical Support Engineer & AI Automation Specialist",email:"dkbearsong@gmail.com",formsubmitToken:"bedd3d68b8b31a40c0628e3a8d47e602",location:"Morrisville, NC",openToRelocate:!0,socialLinks:{github:"https://github.com/dkbearsong",linkedin:"https://www.linkedin.com/in/dereck-goolsby-bearsong/",substack:"https://dereckbearsong.substack.com",n8n:"https://n8n.io/creators/dkbearsong/"}},vh={paragraphs:["I'm a Cloud & Software Support Engineer with 13+ years of experience transitioning into AI Engineering, focused on building autonomous agent workflows, developer tooling, and automated cloud pipelines. I'm driven by a simple goal: eliminating operational friction so builders can focus on what they do best—building.","Combining production systems with modern AI, I specialize in end-to-end orchestration. Currently, I am building an autonomous development pipeline that listens to Jira webhooks, contextually gathers source files, provisions isolated container environments, and dispatches tasks to local or cloud coding agents for remote execution and tracked resolution.","I am open to full-time AI Engineering, Support Operations, and Automation roles, as well as select freelance projects. If you’re looking to scale your engineering workflows or integrate agentic systems into your infrastructure, let’s connect."]},xh=[{id:"atlassian-senior",role:"Senior Support Engineer I",company:"Atlassian",companyUrl:"https://www.atlassian.com/",period:"Jan 2025 - August 2025",description:"Took ownership of complex escalations by collaborating directly with development teams to troubleshoot critical issues and prevent recurrence, while simultaneously enhancing service quality through weekly case reviews that assessed accuracy, completeness, and resolution speed. Drove operational improvements by developing SOPs and enablement sessions that increased US government client response times by 15% and metrics tracking adherence by 25%. Additionally, I accelerated product stability by submitting over 100 bug reports and feature requests, working directly with engineering to prioritize and resolve newly discovered issues.",highlights:["Managed advanced segment escalations with direct dev team collaboration","Increased US Gov client response times by 15% & metric adherence by 25%","Filed 100+ prioritized bug reports & feature requests directly with engineering"],skills:["Jira","Splunk","MySQL","Rovo","Python","Javascript","Rest API","Gemini","Git","Webhooks","Postman"]},{id:"atlassian-cloud",role:"Cloud Software Support Engineer III",company:"Atlassian",companyUrl:"https://www.atlassian.com/",period:"August 2021 - Jan 2025",description:"Delivered first-class application support for Jira Cloud while driving operational excellence by building AI and automation tools to improve efficiency. Consistently exceeded all KPIs, handling an average of 30.77 tickets per week against a target of 16, maintaining a 4.714 CSAT score, and ensuring 99.5% SLA adherence. To enhance resolution speed, I implemented Rovo AI Agents that summarize ticket comments and analyze NPS/CSAT data, reducing average case review time by 20 minutes. Beyond individual support, I reviewed over 500 AI chatbot conversations to ensure accuracy, accelerating deployment five months ahead of schedule while identifying patterns that reduced estimated AI support costs by $500k. Furthermore, I developed SOPs and enablement sessions that improved US government client response times by 15% and metrics tracking adherence by 25%, all while contributing to product stability by submitting over 100 bug reports and feature requests for newly discovered issues.",highlights:["Maintained 4.714 / 5 CSAT & 99.5% SLA adherence across 30+ tickets/week (target: 16)","Built Rovo AI agents cutting case review time by 20 mins","Reviewed 500+ AI bot conversations saving ~$500k in projected support costs"],skills:["Jira","Splunk","MySQL","Python","Javascript","Rest API","Git","Webhooks","Postman"]},{id:"mitek",role:"Software Support Engineer II",company:"Mitek",companyUrl:"https://www.mitek-us.com/",period:"Sep 2018 - August 2021",description:"Delivered advanced database, API, and server-side support for enterprise construction management software. Built an automated Python/RegEx data ingestion framework that normalized 95% of incoming XML payloads, slashing daily escalated resolution times by 33% and intake backlogs by 40%. Served as the team’s SQL specialist, directly resolving 15% of cases via advanced database querying and reducing engineering escalations by 20%. Established comprehensive technical documentation and training modules that cut new hire onboarding by 22% while boosting first-touch resolution by 35%.",highlights:["Built Python XML parser cutting escalated case resolution time by 6+ days","Maintained escalation rate 4% below target through deep server & API diagnosis","Resolved 15% of team tickets as primary internal SQL specialist"],skills:["Python","T-SQL","Rest API"]},{id:"lexisnexis",role:"Application Training Analyst & Support Specialist",company:"LexisNexis",companyUrl:"https://www.lexisnexis.com/en-us",period:"April 2014 - April 2018",description:"Delivered dedicated technical support, database recovery, and client enablement for legal enterprise and government accounts using the CaseMap litigation platform. Resolved deep data integrity and workflow issues through Microsoft Access database analysis and schema manipulation. Overhauled the client training curriculum into an interactive, workflow-specific program that boosted customer engagement, while authoring standardized internal documentation and standard operating procedures that anchored the successful onboarding and operational ramp of a newly launched Tier-1 support team in Manila.",highlights:["Drove 10% improvement in enterprise client retention via redesigned training","Bridged client feedback directly to engineering to resolve feature gaps"],skills:["Microsoft Access","T-SQL","Rest API"]}],Sh=[{id:"culinary",name:"Culinary Arts & Cooking",icon:"ChefHat",desc:"Crafting diverse cuisines, testing heat curves, and experimenting with global flavor profiles.",image:"/portfolio videos/cooking.jpg",video:"/portfolio videos/cooking.mp4",tag:"Kitchen Lab"},{id:"art",name:"Traditional & Digital Art",icon:"Palette",desc:"Drawing, conceptual sketching, character design, and exploring digital visual workflows.",image:"/portfolio videos/painting.jpg",video:"/portfolio videos/painting.mp4",tag:"Visual Design"},{id:"brewing",name:"Home Craft Brewing",icon:"Beer",desc:"Formulating all-grain recipes, dialing in yeast fermentation profiles, and kegging custom craft beers.",image:"/portfolio videos/beer.jpg",video:"/portfolio videos/beer.mp4",tag:"Craft Ferment"},{id:"martial-arts",name:"Martial Arts & Trail Hiking",icon:"Flame",desc:"Discipline, physical conditioning, striking technique, and rugged backcountry trail endurance.",image:"/portfolio videos/hiking.jpg",video:"/portfolio videos/hiking.mp4",tag:"Endurance"},{id:"coffee",name:"Artisanal Coffee Roasting",icon:"Coffee",desc:"Roasting single-origin green coffee beans and profiling first crack times for nuanced extraction.",image:"/portfolio videos/coffee roasting.jpg",video:"/portfolio videos/coffee roasting.mp4",tag:"Roast Profile"},{id:"fermentation",name:"Fermentation & Pickling",icon:"Sparkles",desc:"Applied microbiology in the kitchen: lacto-fermented hot sauces, seasonal kimchi, and artisan sauerkraut.",image:"/portfolio videos/pickling.jpg",video:"/portfolio videos/pickling.mp4",tag:"Microbiology"},{id:"sharpening",name:"Precision Knife Sharpening",icon:"Scissors",desc:"Freehand Japanese whetstone polishing down to 8000-grit for mirror bevels and surgical push-cuts.",image:"/portfolio videos/knife sharpening.jpg",video:"/portfolio videos/knife sharpening.mp4",tag:"Whetstone"},{id:"gaming",name:"Gaming & Anime",icon:"Gamepad2",desc:"Deep interactive storytelling, competitive mechanics, RPG systems, and anime world-building.",image:"/portfolio videos/video games.jpg",video:"/portfolio videos/video games.mp4",tag:"Interactive"}],wh=[{name:"Languages & Scripting",items:["Python","Javascript (ES6+)","HTML5","CSS3","Bash / Shell"]},{name:"Frameworks & Libraries",items:["Node.js","React.js","Express.js","Flask","Bootstrap 5","Tailwind CSS"]},{name:"Databases & Storage",items:["MySQL","PostgreSQL","T-SQL","MongoDB","ChromaDB (Vector RAG)","Microsoft Access"]},{name:"AI, MCP & Automation",items:["Model Context Protocol (MCP)","RAG Architecture","Google Gemini","Anthropic Claude","Ollama (Local LLMs)","Rovo AI Agents","n8n Workflows","RESTful APIs","Webhooks","Splunk","Postman","Git / GitHub"]}],kh=[{id:"my-full-job-search-workflow",title:"My Full Job Search Workflow",date:"August 27, 2026",readTime:"13 min read",publication:"Substack",url:"https://dereckbearsong.substack.com/p/my-full-job-search-workflow",summary:"How I process 2000 jobs overnight to find the best fit. A complete breakdown of autonomous filtering, multi-agent evaluation, and automated pipeline execution.",tags:["Job Search","AI Workflows","Automation","System Design"]},{id:"jira-intelligence-hub",title:"Jira Intelligence Hub",date:"December 5, 2025",readTime:"8 min read",publication:"Substack",url:"https://dereckbearsong.substack.com/p/jira-intelligence-hub",summary:"Connecting Jira Cloud directly to conversational AI models using Model Context Protocol (MCP) and custom agentic tools for enterprise support engineering.",tags:["Jira Cloud","Model Context Protocol","AI Agents","Automation"]}],At=[{id:"home",label:"Home",path:"/",anchor:"#summary",index:0},{id:"about",label:"About Me",path:"/about",anchor:"#about",index:1},{id:"portfolio",label:"Portfolio",path:"/portfolio",anchor:"#portfolio",index:2},{id:"blog",label:"Blog",path:"/blog",anchor:"#blog",index:3},{id:"contact",label:"Contact Me",path:"/contact",anchor:"#contact",index:4}];/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bh=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Vv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=j.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>j.createElement("svg",{ref:l,...Vv,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:bh("lucide",i),...a},[...o.map(([u,d])=>j.createElement(u,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=(e,t)=>{const n=j.forwardRef(({className:r,...i},s)=>j.createElement(Bv,{ref:s,iconNode:t,className:bh(`lucide-${Fv(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Vu=I("ArrowRight",Ov);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Bu=I("ArrowUpRight",Uv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1",key:"1yp76v"}],["path",{d:"M9 12v6",key:"1u1cab"}],["path",{d:"M13 12v6",key:"1sugkk"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",key:"1510fo"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"19jb7n"}]],$v=I("Beer",Wv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],bs=I("BookOpen",Hv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],Gv=I("Bot",qv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Ra=I("Briefcase",Kv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],jh=I("Calendar",Qv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Hl=I("Check",Jv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]],Yv=I("ChefHat",Xv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ex=I("ChevronDown",Zv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Ch=I("CircleAlert",tx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ph=I("CircleCheck",nx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],ix=I("Clock",rx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],ox=I("CodeXml",sx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],lx=I("Coffee",ax);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Th=I("Copy",cx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],_h=I("Cpu",ux);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],px=I("Database",dx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],hn=I("ExternalLink",fx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]],mx=I("Filter",hx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]],ql=I("Flame",gx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],Eh=I("FolderGit2",yx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],xx=I("Gamepad2",vx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],nr=I("Github",Sx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Zr=I("Layers",wx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],bx=I("Lightbulb",kx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Gl=I("Linkedin",jx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],ei=I("Mail",Cx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Tx=I("MapPin",Px);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Ex=I("Menu",_x);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],Mx=I("Palette",Ax);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Rx=I("RefreshCw",Lx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],Ix=I("Rss",Dx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]],zx=I("Scissors",Nx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Ah=I("Search",Fx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Mh=I("Send",Vx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],pi=I("Sparkles",Bx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Ux=I("Star",Ox);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],$x=I("Target",Wx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],Da=I("Terminal",Hx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Lh=I("User",qx);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Kx=I("X",Gx);function Qx({currentTab:e,onSelectTab:t,isMobile:n}){const[r,i]=j.useState(!1),s=(o,a)=>{if(n){o.preventDefault(),i(!1);const l=document.querySelector(a.anchor);l&&l.scrollIntoView({behavior:"smooth"})}else o.preventDefault(),t(a)};return c.jsxs("header",{style:{position:"fixed",top:0,left:0,right:0,height:"var(--nav-height)",backgroundColor:"var(--bg-nav)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",borderBottom:"1px solid var(--border-muted)",zIndex:100,display:"flex",alignItems:"center",transition:"all 0.3s ease"},children:[c.jsxs("div",{style:{width:"100%",maxWidth:"1200px",margin:"0 auto",padding:"0 24px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("a",{href:"/",onClick:o=>s(o,At[0]),style:{display:"flex",alignItems:"center",gap:"12px",textDecoration:"none",color:"var(--text-heading)"},children:[c.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"8px",backgroundColor:"var(--color-panel)",border:"1px solid var(--color-accent)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 14px color-mix(in srgb, var(--color-accent) 40%, transparent)"},children:c.jsxs("svg",{viewBox:"0 0 32 32",width:"22",height:"22","aria-hidden":"true",children:[c.jsx("path",{d:"M16 4L16 22L6 22Z",fill:"var(--color-accent)"}),c.jsx("path",{d:"M16 8L16 22L24 22Z",fill:"var(--color-accent)",opacity:"0.65"}),c.jsx("path",{d:"M4 24Q10 20 16 24Q22 28 28 24",stroke:"var(--color-text)",strokeWidth:"2.5",fill:"none",strokeLinecap:"round"})]})}),c.jsxs("div",{children:[c.jsx("div",{style:{fontFamily:"var(--font-mono)",fontWeight:700,fontSize:"15px",letterSpacing:"-0.02em",color:"var(--text-heading)"},children:"DK Bearsong"}),c.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"10.5px",color:"var(--text-muted)"},children:"AI & Tech Support"})]})]}),!n&&c.jsx("nav",{style:{display:"flex",alignItems:"center",gap:"4px",backgroundColor:"color-mix(in srgb, var(--color-panel) 50%, transparent)",padding:"4px 6px",borderRadius:"var(--radius-full)",border:"1px solid var(--border-muted)"},children:At.map(o=>{const a=e.id===o.id;return c.jsxs("button",{onClick:l=>s(l,o),style:{position:"relative",background:"transparent",border:"none",padding:"8px 18px",borderRadius:"var(--radius-full)",fontFamily:"var(--font-mono)",fontSize:"13px",fontWeight:a?700:500,color:a?"var(--color-bg)":"var(--text-muted)",cursor:"pointer",transition:"all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",display:"flex",alignItems:"center",gap:"6px"},children:[a&&c.jsx("div",{style:{position:"absolute",inset:0,backgroundColor:"var(--color-accent)",borderRadius:"var(--radius-full)",boxShadow:"0 2px 12px color-mix(in srgb, var(--color-accent) 45%, transparent)",zIndex:0}}),c.jsx("span",{style:{position:"relative",zIndex:1},children:o.label})]},o.id)})}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[c.jsxs("a",{href:B.socialLinks.github,target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",style:{padding:"8px 14px",fontSize:"13px"},children:[c.jsx(nr,{size:16,color:"var(--color-accent)"}),!n&&c.jsx("span",{children:"GitHub"})]}),n&&c.jsx("button",{onClick:()=>i(!r),className:"btn btn-outline",style:{padding:"8px 10px"},"aria-label":"Toggle Navigation Menu",children:r?c.jsx(Kx,{size:20}):c.jsx(Ex,{size:20})})]})]}),n&&r&&c.jsx("div",{style:{position:"absolute",top:"var(--nav-height)",left:0,right:0,backgroundColor:"color-mix(in srgb, var(--color-bg) 95%, transparent)",borderBottom:"1px solid var(--border-muted)",padding:"20px 24px",backdropFilter:"blur(20px)",display:"flex",flexDirection:"column",gap:"12px",boxShadow:"0 20px 40px rgba(0, 0, 0, 0.8)"},children:At.map(o=>c.jsxs("a",{href:o.anchor,onClick:a=>s(a,o),style:{fontFamily:"var(--font-mono)",fontSize:"15px",color:"var(--text-heading)",textDecoration:"none",padding:"12px 16px",borderRadius:"8px",backgroundColor:"var(--bg-panel)",border:"1px solid var(--border-muted)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsx("span",{children:o.label}),c.jsx("span",{style:{color:"var(--color-accent)"},children:"→"})]},o.id))})]})}function Jx(){const e=j.useRef(null);return j.useEffect(()=>{const t=e.current;if(!t)return;const n=t.getContext("2d");let r,i=t.width=window.innerWidth,s=t.height=window.innerHeight,o;const a=()=>{clearTimeout(o),o=setTimeout(()=>{t&&(i=t.width=window.innerWidth,s=t.height=window.innerHeight)},150)};window.addEventListener("resize",a);const l=()=>{const b=getComputedStyle(document.documentElement),m=b.getPropertyValue("--color-accent").trim()||"#FE7F2D",h=b.getPropertyValue("--color-panel").trim()||"#233D4D";return{accent:m,panel:h}},{accent:u,panel:d}=l();let f=0;const p=[{speed:.003,amplitude:35,wavelength:.0012,color:u,alpha:.15,offset:0},{speed:.004,amplitude:45,wavelength:.0016,color:d,alpha:.25,offset:2},{speed:.002,amplitude:25,wavelength:9e-4,color:u,alpha:.1,offset:4},{speed:.005,amplitude:55,wavelength:.002,color:d,alpha:.2,offset:1.5}];let y=!0;const v=()=>{y&&(n.clearRect(0,0,i,s),f+=1,p.forEach(b=>{n.save(),n.beginPath(),n.strokeStyle=b.color,n.globalAlpha=b.alpha,n.lineWidth=1.5;const m=s*.45;for(let h=0;h<i;h+=10){const g=m+Math.sin(h*b.wavelength+f*b.speed+b.offset)*b.amplitude+Math.cos(h*b.wavelength*.5+f*b.speed*.7)*(b.amplitude*.5);h===0?n.moveTo(h,g):n.lineTo(h,g)}n.stroke(),n.restore()}),r=requestAnimationFrame(v))},x=()=>{document.hidden?(y=!1,r&&cancelAnimationFrame(r)):y||(y=!0,r=requestAnimationFrame(v))};return document.addEventListener("visibilitychange",x),document.hidden||v(),()=>{y=!1,clearTimeout(o),window.removeEventListener("resize",a),document.removeEventListener("visibilitychange",x),r&&cancelAnimationFrame(r)}},[]),c.jsx("canvas",{ref:e,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0,opacity:.85},"aria-hidden":"true"})}const Kl=j.createContext({});function Ql(e){const t=j.useRef(null);return t.current===null&&(t.current=e()),t.current}const Gs=j.createContext(null),Jl=j.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Xx extends j.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Yx({children:e,isPresent:t}){const n=j.useId(),r=j.useRef(null),i=j.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=j.useContext(Jl);return j.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:u}=i.current;if(t||!r.current||!o||!a)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return s&&(d.nonce=s),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),c.jsx(Xx,{isPresent:t,childRef:r,sizeRef:i,children:j.cloneElement(e,{ref:r})})}const Zx=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const a=Ql(e0),l=j.useId(),u=j.useCallback(f=>{a.set(f,!0);for(const p of a.values())if(!p)return;r&&r()},[a,r]),d=j.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:u,register:f=>(a.set(f,!1),()=>a.delete(f))}),s?[Math.random(),u]:[n,u]);return j.useMemo(()=>{a.forEach((f,p)=>a.set(p,!1))},[n]),j.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),o==="popLayout"&&(e=c.jsx(Yx,{isPresent:n,children:e})),c.jsx(Gs.Provider,{value:d,children:e})};function e0(){return new Map}function Rh(e=!0){const t=j.useContext(Gs);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,s=j.useId();j.useEffect(()=>{e&&i(s)},[e]);const o=j.useCallback(()=>e&&r&&r(s),[s,r,e]);return!n&&r?[!1,o]:[!0]}const Di=e=>e.key||"";function Ou(e){const t=[];return j.Children.forEach(e,n=>{j.isValidElement(n)&&t.push(n)}),t}const Xl=typeof window<"u",Dh=Xl?j.useLayoutEffect:j.useEffect,Yl=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=Rh(o),u=j.useMemo(()=>Ou(e),[e]),d=o&&!a?[]:u.map(Di),f=j.useRef(!0),p=j.useRef(u),y=Ql(()=>new Map),[v,x]=j.useState(u),[b,m]=j.useState(u);Dh(()=>{f.current=!1,p.current=u;for(let S=0;S<b.length;S++){const w=Di(b[S]);d.includes(w)?y.delete(w):y.get(w)!==!0&&y.set(w,!1)}},[b,d.length,d.join("-")]);const h=[];if(u!==v){let S=[...u];for(let w=0;w<b.length;w++){const C=b[w],T=Di(C);d.includes(T)||(S.splice(w,0,C),h.push(C))}s==="wait"&&h.length&&(S=h),m(Ou(S)),x(u);return}const{forceRender:g}=j.useContext(Kl);return c.jsx(c.Fragment,{children:b.map(S=>{const w=Di(S),C=o&&!a?!1:u===b||d.includes(w),T=()=>{if(y.has(w))y.set(w,!0);else return;let k=!0;y.forEach(M=>{M||(k=!1)}),k&&(g==null||g(),m(p.current),o&&(l==null||l()),r&&r())};return c.jsx(Zx,{isPresent:C,initial:!f.current||n?void 0:!1,custom:C?void 0:t,presenceAffectsLayout:i,mode:s,onExitComplete:C?void 0:T,children:S},w)})})},De=e=>e;let Ih=De;function Zl(e){let t;return()=>(t===void 0&&(t=e()),t)}const Jn=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},gt=e=>e*1e3,yt=e=>e/1e3,t0={useManualTiming:!1};function n0(e){let t=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(u){s.has(u)&&(l.schedule(u),e()),u(o)}const l={schedule:(u,d=!1,f=!1)=>{const y=f&&r?t:n;return d&&s.add(u),y.has(u)||y.add(u),u},cancel:u=>{n.delete(u),s.delete(u)},process:u=>{if(o=u,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(a),t.clear(),r=!1,i&&(i=!1,l.process(u))}};return l}const Ii=["read","resolveKeyframes","update","preRender","render","postRender"],r0=40;function Nh(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Ii.reduce((m,h)=>(m[h]=n0(s),m),{}),{read:a,resolveKeyframes:l,update:u,preRender:d,render:f,postRender:p}=o,y=()=>{const m=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(m-i.timestamp,r0),1),i.timestamp=m,i.isProcessing=!0,a.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(y))},v=()=>{n=!0,r=!0,i.isProcessing||e(y)};return{schedule:Ii.reduce((m,h)=>{const g=o[h];return m[h]=(S,w=!1,C=!1)=>(n||v(),g.schedule(S,w,C)),m},{}),cancel:m=>{for(let h=0;h<Ii.length;h++)o[Ii[h]].cancel(m)},state:i,steps:o}}const{schedule:$,cancel:Wt,state:de,steps:To}=Nh(typeof requestAnimationFrame<"u"?requestAnimationFrame:De,!0),zh=j.createContext({strict:!1}),Uu={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Xn={};for(const e in Uu)Xn[e]={isEnabled:t=>Uu[e].some(n=>!!t[n])};function i0(e){for(const t in e)Xn[t]={...Xn[t],...e[t]}}const s0=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function js(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||s0.has(e)}let Fh=e=>!js(e);function o0(e){e&&(Fh=t=>t.startsWith("on")?!js(t):e(t))}try{o0(require("@emotion/is-prop-valid").default)}catch{}function a0(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Fh(i)||n===!0&&js(i)||!t&&!js(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function l0(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const Ks=j.createContext({});function ti(e){return typeof e=="string"||Array.isArray(e)}function Qs(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const ec=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],tc=["initial",...ec];function Js(e){return Qs(e.animate)||tc.some(t=>ti(e[t]))}function Vh(e){return!!(Js(e)||e.variants)}function c0(e,t){if(Js(e)){const{initial:n,animate:r}=e;return{initial:n===!1||ti(n)?n:void 0,animate:ti(r)?r:void 0}}return e.inherit!==!1?t:{}}function u0(e){const{initial:t,animate:n}=c0(e,j.useContext(Ks));return j.useMemo(()=>({initial:t,animate:n}),[Wu(t),Wu(n)])}function Wu(e){return Array.isArray(e)?e.join(" "):e}const d0=Symbol.for("motionComponentSymbol");function Ln(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function p0(e,t,n){return j.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Ln(n)&&(n.current=r))},[t])}const nc=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),f0="framerAppearId",Bh="data-"+nc(f0),{schedule:rc}=Nh(queueMicrotask,!1),Oh=j.createContext({});function h0(e,t,n,r,i){var s,o;const{visualElement:a}=j.useContext(Ks),l=j.useContext(zh),u=j.useContext(Gs),d=j.useContext(Jl).reducedMotion,f=j.useRef(null);r=r||l.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:a,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const p=f.current,y=j.useContext(Oh);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&m0(f.current,n,i,y);const v=j.useRef(!1);j.useInsertionEffect(()=>{p&&v.current&&p.update(n,u)});const x=n[Bh],b=j.useRef(!!x&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,x))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,x)));return Dh(()=>{p&&(v.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),rc.render(p.render),b.current&&p.animationState&&p.animationState.animateChanges())}),j.useEffect(()=>{p&&(!b.current&&p.animationState&&p.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var m;(m=window.MotionHandoffMarkAsComplete)===null||m===void 0||m.call(window,x)}),b.current=!1))}),p}function m0(e,t,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Uh(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||a&&Ln(a),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}function Uh(e){if(e)return e.options.allowProjection!==!1?e.projection:Uh(e.parent)}function g0({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var s,o;e&&i0(e);function a(u,d){let f;const p={...j.useContext(Jl),...u,layoutId:y0(u)},{isStatic:y}=p,v=u0(u),x=r(u,y);if(!y&&Xl){v0();const b=x0(p);f=b.MeasureLayout,v.visualElement=h0(i,x,p,t,b.ProjectionNode)}return c.jsxs(Ks.Provider,{value:v,children:[f&&v.visualElement?c.jsx(f,{visualElement:v.visualElement,...p}):null,n(i,u,p0(x,v.visualElement,d),x,y,v.visualElement)]})}a.displayName=`motion.${typeof i=="string"?i:`create(${(o=(s=i.displayName)!==null&&s!==void 0?s:i.name)!==null&&o!==void 0?o:""})`}`;const l=j.forwardRef(a);return l[d0]=i,l}function y0({layoutId:e}){const t=j.useContext(Kl).id;return t&&e!==void 0?t+"-"+e:e}function v0(e,t){j.useContext(zh).strict}function x0(e){const{drag:t,layout:n}=Xn;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const S0=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ic(e){return typeof e!="string"||e.includes("-")?!1:!!(S0.indexOf(e)>-1||/[A-Z]/u.test(e))}function $u(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function sc(e,t,n,r){if(typeof t=="function"){const[i,s]=$u(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=$u(r);t=t(n!==void 0?n:e.custom,i,s)}return t}const Ia=e=>Array.isArray(e),w0=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),k0=e=>Ia(e)?e[e.length-1]||0:e,ve=e=>!!(e&&e.getVelocity);function Ji(e){const t=ve(e)?e.get():e;return w0(t)?t.toValue():t}function b0({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,s){const o={latestValues:j0(r,i,s,e),renderState:t()};return n&&(o.onMount=a=>n({props:r,current:a,...o}),o.onUpdate=a=>n(a)),o}const Wh=e=>(t,n)=>{const r=j.useContext(Ks),i=j.useContext(Gs),s=()=>b0(e,t,r,i);return n?s():Ql(s)};function j0(e,t,n,r){const i={},s=r(e,{});for(const p in s)i[p]=Ji(s[p]);let{initial:o,animate:a}=e;const l=Js(e),u=Vh(e);t&&u&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const f=d?a:o;if(f&&typeof f!="boolean"&&!Qs(f)){const p=Array.isArray(f)?f:[f];for(let y=0;y<p.length;y++){const v=sc(e,p[y]);if(v){const{transitionEnd:x,transition:b,...m}=v;for(const h in m){let g=m[h];if(Array.isArray(g)){const S=d?g.length-1:0;g=g[S]}g!==null&&(i[h]=g)}for(const h in x)i[h]=x[h]}}}return i}const rr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],yn=new Set(rr),$h=e=>t=>typeof t=="string"&&t.startsWith(e),Hh=$h("--"),C0=$h("var(--"),oc=e=>C0(e)?P0.test(e.split("/*")[0].trim()):!1,P0=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,qh=(e,t)=>t&&typeof e=="number"?t.transform(e):e,kt=(e,t,n)=>n>t?t:n<e?e:n,ir={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ni={...ir,transform:e=>kt(0,1,e)},Ni={...ir,default:1},fi=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Ct=fi("deg"),ot=fi("%"),L=fi("px"),T0=fi("vh"),_0=fi("vw"),Hu={...ot,parse:e=>ot.parse(e)/100,transform:e=>ot.transform(e*100)},E0={borderWidth:L,borderTopWidth:L,borderRightWidth:L,borderBottomWidth:L,borderLeftWidth:L,borderRadius:L,radius:L,borderTopLeftRadius:L,borderTopRightRadius:L,borderBottomRightRadius:L,borderBottomLeftRadius:L,width:L,maxWidth:L,height:L,maxHeight:L,top:L,right:L,bottom:L,left:L,padding:L,paddingTop:L,paddingRight:L,paddingBottom:L,paddingLeft:L,margin:L,marginTop:L,marginRight:L,marginBottom:L,marginLeft:L,backgroundPositionX:L,backgroundPositionY:L},A0={rotate:Ct,rotateX:Ct,rotateY:Ct,rotateZ:Ct,scale:Ni,scaleX:Ni,scaleY:Ni,scaleZ:Ni,skew:Ct,skewX:Ct,skewY:Ct,distance:L,translateX:L,translateY:L,translateZ:L,x:L,y:L,z:L,perspective:L,transformPerspective:L,opacity:ni,originX:Hu,originY:Hu,originZ:L},qu={...ir,transform:Math.round},ac={...E0,...A0,zIndex:qu,size:L,fillOpacity:ni,strokeOpacity:ni,numOctaves:qu},M0={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},L0=rr.length;function R0(e,t,n){let r="",i=!0;for(let s=0;s<L0;s++){const o=rr[s],a=e[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=qh(a,ac[o]);if(!l){i=!1;const d=M0[o]||o;r+=`${d}(${u}) `}n&&(t[o]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function lc(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let o=!1,a=!1;for(const l in t){const u=t[l];if(yn.has(l)){o=!0;continue}else if(Hh(l)){i[l]=u;continue}else{const d=qh(u,ac[l]);l.startsWith("origin")?(a=!0,s[l]=d):r[l]=d}}if(t.transform||(o||n?r.transform=R0(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:d=0}=s;r.transformOrigin=`${l} ${u} ${d}`}}const D0={offset:"stroke-dashoffset",array:"stroke-dasharray"},I0={offset:"strokeDashoffset",array:"strokeDasharray"};function N0(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?D0:I0;e[s.offset]=L.transform(-r);const o=L.transform(t),a=L.transform(n);e[s.array]=`${o} ${a}`}function Gu(e,t,n){return typeof e=="string"?e:L.transform(t+n*e)}function z0(e,t,n){const r=Gu(t,e.x,e.width),i=Gu(n,e.y,e.height);return`${r} ${i}`}function cc(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},d,f){if(lc(e,u,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:y,dimensions:v}=e;p.transform&&(v&&(y.transform=p.transform),delete p.transform),v&&(i!==void 0||s!==void 0||y.transform)&&(y.transformOrigin=z0(v,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),o!==void 0&&N0(p,o,a,l,!1)}const uc=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Gh=()=>({...uc(),attrs:{}}),dc=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Kh(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const Qh=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Jh(e,t,n,r){Kh(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Qh.has(i)?i:nc(i),t.attrs[i])}const Cs={};function F0(e){Object.assign(Cs,e)}function Xh(e,{layout:t,layoutId:n}){return yn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Cs[e]||e==="opacity")}function pc(e,t,n){var r;const{style:i}=e,s={};for(const o in i)(ve(i[o])||t.style&&ve(t.style[o])||Xh(o,e)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(s[o]=i[o]);return s}function Yh(e,t,n){const r=pc(e,t,n);for(const i in e)if(ve(e[i])||ve(t[i])){const s=rr.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}function V0(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const Ku=["x","y","width","height","cx","cy","r"],B0={useVisualState:Wh({scrapeMotionValuesFromProps:Yh,createRenderState:Gh,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let s=!!e.drag;if(!s){for(const a in i)if(yn.has(a)){s=!0;break}}if(!s)return;let o=!t;if(t)for(let a=0;a<Ku.length;a++){const l=Ku[a];e[l]!==t[l]&&(o=!0)}o&&$.read(()=>{V0(n,r),$.render(()=>{cc(r,i,dc(n.tagName),e.transformTemplate),Jh(n,r)})})}})},O0={useVisualState:Wh({scrapeMotionValuesFromProps:pc,createRenderState:uc})};function Zh(e,t,n){for(const r in t)!ve(t[r])&&!Xh(r,n)&&(e[r]=t[r])}function U0({transformTemplate:e},t){return j.useMemo(()=>{const n=uc();return lc(n,t,e),Object.assign({},n.vars,n.style)},[t])}function W0(e,t){const n=e.style||{},r={};return Zh(r,n,e),Object.assign(r,U0(e,t)),r}function $0(e,t){const n={},r=W0(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function H0(e,t,n,r){const i=j.useMemo(()=>{const s=Gh();return cc(s,t,dc(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};Zh(s,e.style,e),i.style={...s,...i.style}}return i}function q0(e=!1){return(n,r,i,{latestValues:s},o)=>{const l=(ic(n)?H0:$0)(r,s,o,n),u=a0(r,typeof n=="string",e),d=n!==j.Fragment?{...u,...l,ref:i}:{},{children:f}=r,p=j.useMemo(()=>ve(f)?f.get():f,[f]);return j.createElement(n,{...d,children:p})}}function G0(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...ic(r)?B0:O0,preloadedFeatures:e,useRender:q0(i),createVisualElement:t,Component:r};return g0(o)}}function em(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Xs(e,t,n){const r=e.getProps();return sc(r,t,n!==void 0?n:r.custom,e)}const K0=Zl(()=>window.ScrollTimeline!==void 0);class Q0{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(K0()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class J0 extends Q0{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function fc(e,t){return e?e[t]||e.default||e:void 0}const Na=2e4;function tm(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Na;)t+=n,r=e.next(t);return t>=Na?1/0:t}function hc(e){return typeof e=="function"}function Qu(e,t){e.timeline=t,e.onfinish=null}const mc=e=>Array.isArray(e)&&typeof e[0]=="number",X0={linearEasing:void 0};function Y0(e,t){const n=Zl(e);return()=>{var r;return(r=X0[t])!==null&&r!==void 0?r:n()}}const Ps=Y0(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),nm=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let s=0;s<i;s++)r+=e(Jn(0,i-1,s))+", ";return`linear(${r.substring(0,r.length-2)})`};function rm(e){return!!(typeof e=="function"&&Ps()||!e||typeof e=="string"&&(e in za||Ps())||mc(e)||Array.isArray(e)&&e.every(rm))}const Sr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,za={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Sr([0,.65,.55,1]),circOut:Sr([.55,0,1,.45]),backIn:Sr([.31,.01,.66,-.59]),backOut:Sr([.33,1.53,.69,.99])};function im(e,t){if(e)return typeof e=="function"&&Ps()?nm(e,t):mc(e)?Sr(e):Array.isArray(e)?e.map(n=>im(n,t)||za.easeOut):za[e]}const Ke={x:!1,y:!1};function sm(){return Ke.x||Ke.y}function Z0(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const s=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e)}function om(e,t){const n=Z0(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function Ju(e){return t=>{t.pointerType==="touch"||sm()||e(t)}}function e1(e,t,n={}){const[r,i,s]=om(e,n),o=Ju(a=>{const{target:l}=a,u=t(a);if(typeof u!="function"||!l)return;const d=Ju(f=>{u(f),l.removeEventListener("pointerleave",d)});l.addEventListener("pointerleave",d,i)});return r.forEach(a=>{a.addEventListener("pointerenter",o,i)}),s}const am=(e,t)=>t?e===t?!0:am(e,t.parentElement):!1,gc=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,t1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function n1(e){return t1.has(e.tagName)||e.tabIndex!==-1}const wr=new WeakSet;function Xu(e){return t=>{t.key==="Enter"&&e(t)}}function _o(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const r1=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Xu(()=>{if(wr.has(n))return;_o(n,"down");const i=Xu(()=>{_o(n,"up")}),s=()=>_o(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function Yu(e){return gc(e)&&!sm()}function i1(e,t,n={}){const[r,i,s]=om(e,n),o=a=>{const l=a.currentTarget;if(!Yu(a)||wr.has(l))return;wr.add(l);const u=t(a),d=(y,v)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),!(!Yu(y)||!wr.has(l))&&(wr.delete(l),typeof u=="function"&&u(y,{success:v}))},f=y=>{d(y,n.useGlobalTarget||am(l,y.target))},p=y=>{d(y,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(a=>{!n1(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,i),a.addEventListener("focus",u=>r1(u,i),i)}),s}function s1(e){return e==="x"||e==="y"?Ke[e]?null:(Ke[e]=!0,()=>{Ke[e]=!1}):Ke.x||Ke.y?null:(Ke.x=Ke.y=!0,()=>{Ke.x=Ke.y=!1})}const lm=new Set(["width","height","top","left","right","bottom",...rr]);let Xi;function o1(){Xi=void 0}const at={now:()=>(Xi===void 0&&at.set(de.isProcessing||t0.useManualTiming?de.timestamp:performance.now()),Xi),set:e=>{Xi=e,queueMicrotask(o1)}};function yc(e,t){e.indexOf(t)===-1&&e.push(t)}function vc(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class xc{constructor(){this.subscriptions=[]}add(t){return yc(this.subscriptions,t),()=>vc(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function cm(e,t){return t?e*(1e3/t):0}const Zu=30,a1=e=>!isNaN(parseFloat(e));class l1{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=at.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=at.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=a1(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new xc);const r=this.events[t].add(n);return t==="change"?()=>{r(),$.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=at.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Zu)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Zu);return cm(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ri(e,t){return new l1(e,t)}function c1(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ri(n))}function u1(e,t){const n=Xs(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const a=k0(s[o]);c1(e,o,a)}}function d1(e){return!!(ve(e)&&e.add)}function Fa(e,t){const n=e.getValue("willChange");if(d1(n))return n.add(t)}function um(e){return e.props[Bh]}const dm=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,p1=1e-7,f1=12;function h1(e,t,n,r,i){let s,o,a=0;do o=t+(n-t)/2,s=dm(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>p1&&++a<f1);return o}function hi(e,t,n,r){if(e===t&&n===r)return De;const i=s=>h1(s,0,1,e,n);return s=>s===0||s===1?s:dm(i(s),t,r)}const pm=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,fm=e=>t=>1-e(1-t),hm=hi(.33,1.53,.69,.99),Sc=fm(hm),mm=pm(Sc),gm=e=>(e*=2)<1?.5*Sc(e):.5*(2-Math.pow(2,-10*(e-1))),wc=e=>1-Math.sin(Math.acos(e)),ym=fm(wc),vm=pm(wc),xm=e=>/^0[^.\s]+$/u.test(e);function m1(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||xm(e):!0}const Lr=e=>Math.round(e*1e5)/1e5,kc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function g1(e){return e==null}const y1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,bc=(e,t)=>n=>!!(typeof n=="string"&&y1.test(n)&&n.startsWith(e)||t&&!g1(n)&&Object.prototype.hasOwnProperty.call(n,t)),Sm=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,a]=r.match(kc);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},v1=e=>kt(0,255,e),Eo={...ir,transform:e=>Math.round(v1(e))},sn={test:bc("rgb","red"),parse:Sm("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Eo.transform(e)+", "+Eo.transform(t)+", "+Eo.transform(n)+", "+Lr(ni.transform(r))+")"};function x1(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Va={test:bc("#"),parse:x1,transform:sn.transform},Rn={test:bc("hsl","hue"),parse:Sm("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+ot.transform(Lr(t))+", "+ot.transform(Lr(n))+", "+Lr(ni.transform(r))+")"},ge={test:e=>sn.test(e)||Va.test(e)||Rn.test(e),parse:e=>sn.test(e)?sn.parse(e):Rn.test(e)?Rn.parse(e):Va.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?sn.transform(e):Rn.transform(e)},S1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function w1(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(kc))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(S1))===null||n===void 0?void 0:n.length)||0)>0}const wm="number",km="color",k1="var",b1="var(",ed="${}",j1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ii(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const a=t.replace(j1,l=>(ge.test(l)?(r.color.push(s),i.push(km),n.push(ge.parse(l))):l.startsWith(b1)?(r.var.push(s),i.push(k1),n.push(l)):(r.number.push(s),i.push(wm),n.push(parseFloat(l))),++s,ed)).split(ed);return{values:n,split:a,indexes:r,types:i}}function bm(e){return ii(e).values}function jm(e){const{split:t,types:n}=ii(e),r=t.length;return i=>{let s="";for(let o=0;o<r;o++)if(s+=t[o],i[o]!==void 0){const a=n[o];a===wm?s+=Lr(i[o]):a===km?s+=ge.transform(i[o]):s+=i[o]}return s}}const C1=e=>typeof e=="number"?0:e;function P1(e){const t=bm(e);return jm(e)(t.map(C1))}const $t={test:w1,parse:bm,createTransformer:jm,getAnimatableNone:P1},T1=new Set(["brightness","contrast","saturate","opacity"]);function _1(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(kc)||[];if(!r)return e;const i=n.replace(r,"");let s=T1.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const E1=/\b([a-z-]*)\(.*?\)/gu,Ba={...$t,getAnimatableNone:e=>{const t=e.match(E1);return t?t.map(_1).join(" "):e}},A1={...ac,color:ge,backgroundColor:ge,outlineColor:ge,fill:ge,stroke:ge,borderColor:ge,borderTopColor:ge,borderRightColor:ge,borderBottomColor:ge,borderLeftColor:ge,filter:Ba,WebkitFilter:Ba},jc=e=>A1[e];function Cm(e,t){let n=jc(e);return n!==Ba&&(n=$t),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const M1=new Set(["auto","none","0"]);function L1(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!M1.has(s)&&ii(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=Cm(n,i)}const td=e=>e===ir||e===L,nd=(e,t)=>parseFloat(e.split(", ")[t]),rd=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return nd(i[1],t);{const s=r.match(/^matrix\((.+)\)$/u);return s?nd(s[1],e):0}},R1=new Set(["x","y","z"]),D1=rr.filter(e=>!R1.has(e));function I1(e){const t=[];return D1.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Yn={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:rd(4,13),y:rd(5,14)};Yn.translateX=Yn.x;Yn.translateY=Yn.y;const ln=new Set;let Oa=!1,Ua=!1;function Pm(){if(Ua){const e=Array.from(ln).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=I1(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var a;(a=r.getValue(s))===null||a===void 0||a.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Ua=!1,Oa=!1,ln.forEach(e=>e.complete()),ln.clear()}function Tm(){ln.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Ua=!0)})}function N1(){Tm(),Pm()}class Cc{constructor(t,n,r,i,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(ln.add(this),Oa||(Oa=!0,$.read(Tm),$.resolveKeyframes(Pm))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let s=0;s<t.length;s++)if(t[s]===null)if(s===0){const o=i==null?void 0:i.get(),a=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const l=r.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),i&&o===void 0&&i.set(t[0])}else t[s]=t[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),ln.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,ln.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const _m=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),z1=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function F1(e){const t=z1.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Em(e,t,n=1){const[r,i]=F1(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const o=s.trim();return _m(o)?parseFloat(o):o}return oc(i)?Em(i,t,n+1):i}const Am=e=>t=>t.test(e),V1={test:e=>e==="auto",parse:e=>e},Mm=[ir,L,ot,Ct,_0,T0,V1],id=e=>Mm.find(Am(e));class Lm extends Cc{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),oc(u))){const d=Em(u,n.current);d!==void 0&&(t[l]=d),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!lm.has(r)||t.length!==2)return;const[i,s]=t,o=id(i),a=id(s);if(o!==a)if(td(o)&&td(a))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)m1(t[i])&&r.push(i);r.length&&L1(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Yn[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const o=i.length-1,a=i[o];i[o]=Yn[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}const sd=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&($t.test(e)||e==="0")&&!e.startsWith("url("));function B1(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function O1(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],o=sd(i,t),a=sd(s,t);return!o||!a?!1:B1(e)||(n==="spring"||hc(n))&&r}const U1=e=>e!==null;function Ys(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(U1),s=t&&n!=="loop"&&t%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const W1=40;class Rm{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=at.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>W1?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&N1(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=at.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!O1(t,r,i,s))if(o)this.options.duration=0;else{l&&l(Ys(t,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const K=(e,t,n)=>e+(t-e)*n;function Ao(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function $1({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=Ao(l,a,e+1/3),s=Ao(l,a,e),o=Ao(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function Ts(e,t){return n=>n>0?t:e}const Mo=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},H1=[Va,sn,Rn],q1=e=>H1.find(t=>t.test(e));function od(e){const t=q1(e);if(!t)return!1;let n=t.parse(e);return t===Rn&&(n=$1(n)),n}const ad=(e,t)=>{const n=od(e),r=od(t);if(!n||!r)return Ts(e,t);const i={...n};return s=>(i.red=Mo(n.red,r.red,s),i.green=Mo(n.green,r.green,s),i.blue=Mo(n.blue,r.blue,s),i.alpha=K(n.alpha,r.alpha,s),sn.transform(i))},G1=(e,t)=>n=>t(e(n)),mi=(...e)=>e.reduce(G1),Wa=new Set(["none","hidden"]);function K1(e,t){return Wa.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Q1(e,t){return n=>K(e,t,n)}function Pc(e){return typeof e=="number"?Q1:typeof e=="string"?oc(e)?Ts:ge.test(e)?ad:Y1:Array.isArray(e)?Dm:typeof e=="object"?ge.test(e)?ad:J1:Ts}function Dm(e,t){const n=[...e],r=n.length,i=e.map((s,o)=>Pc(s)(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function J1(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Pc(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function X1(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const o=t.types[s],a=e.indexes[o][i[o]],l=(n=e.values[a])!==null&&n!==void 0?n:0;r[s]=l,i[o]++}return r}const Y1=(e,t)=>{const n=$t.createTransformer(t),r=ii(e),i=ii(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Wa.has(e)&&!i.values.length||Wa.has(t)&&!r.values.length?K1(e,t):mi(Dm(X1(r,i),i.values),n):Ts(e,t)};function Im(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?K(e,t,n):Pc(e)(e,t)}const Z1=5;function Nm(e,t,n){const r=Math.max(t-Z1,0);return cm(n-e(r),t-r)}const Z={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Lo=.001;function eS({duration:e=Z.duration,bounce:t=Z.bounce,velocity:n=Z.velocity,mass:r=Z.mass}){let i,s,o=1-t;o=kt(Z.minDamping,Z.maxDamping,o),e=kt(Z.minDuration,Z.maxDuration,yt(e)),o<1?(i=u=>{const d=u*o,f=d*e,p=d-n,y=$a(u,o),v=Math.exp(-f);return Lo-p/y*v},s=u=>{const f=u*o*e,p=f*n+n,y=Math.pow(o,2)*Math.pow(u,2)*e,v=Math.exp(-f),x=$a(Math.pow(u,2),o);return(-i(u)+Lo>0?-1:1)*((p-y)*v)/x}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-Lo+d*f},s=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const a=5/e,l=nS(i,s,a);if(e=gt(e),isNaN(l))return{stiffness:Z.stiffness,damping:Z.damping,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:e}}}const tS=12;function nS(e,t,n){let r=n;for(let i=1;i<tS;i++)r=r-e(r)/t(r);return r}function $a(e,t){return e*Math.sqrt(1-t*t)}const rS=["duration","bounce"],iS=["stiffness","damping","mass"];function ld(e,t){return t.some(n=>e[n]!==void 0)}function sS(e){let t={velocity:Z.velocity,stiffness:Z.stiffness,damping:Z.damping,mass:Z.mass,isResolvedFromDuration:!1,...e};if(!ld(e,iS)&&ld(e,rS))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*kt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Z.mass,stiffness:i,damping:s}}else{const n=eS(e);t={...t,...n,mass:Z.mass},t.isResolvedFromDuration=!0}return t}function zm(e=Z.visualDuration,t=Z.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:u,mass:d,duration:f,velocity:p,isResolvedFromDuration:y}=sS({...n,velocity:-yt(n.velocity||0)}),v=p||0,x=u/(2*Math.sqrt(l*d)),b=o-s,m=yt(Math.sqrt(l/d)),h=Math.abs(b)<5;r||(r=h?Z.restSpeed.granular:Z.restSpeed.default),i||(i=h?Z.restDelta.granular:Z.restDelta.default);let g;if(x<1){const w=$a(m,x);g=C=>{const T=Math.exp(-x*m*C);return o-T*((v+x*m*b)/w*Math.sin(w*C)+b*Math.cos(w*C))}}else if(x===1)g=w=>o-Math.exp(-m*w)*(b+(v+m*b)*w);else{const w=m*Math.sqrt(x*x-1);g=C=>{const T=Math.exp(-x*m*C),k=Math.min(w*C,300);return o-T*((v+x*m*b)*Math.sinh(k)+w*b*Math.cosh(k))/w}}const S={calculatedDuration:y&&f||null,next:w=>{const C=g(w);if(y)a.done=w>=f;else{let T=0;x<1&&(T=w===0?gt(v):Nm(g,w,C));const k=Math.abs(T)<=r,M=Math.abs(o-C)<=i;a.done=k&&M}return a.value=a.done?o:C,a},toString:()=>{const w=Math.min(tm(S),Na),C=nm(T=>S.next(w*T).value,w,30);return w+"ms "+C}};return S}function cd({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:d}){const f=e[0],p={done:!1,value:f},y=k=>a!==void 0&&k<a||l!==void 0&&k>l,v=k=>a===void 0?l:l===void 0||Math.abs(a-k)<Math.abs(l-k)?a:l;let x=n*t;const b=f+x,m=o===void 0?b:o(b);m!==b&&(x=m-f);const h=k=>-x*Math.exp(-k/r),g=k=>m+h(k),S=k=>{const M=h(k),A=g(k);p.done=Math.abs(M)<=u,p.value=p.done?m:A};let w,C;const T=k=>{y(p.value)&&(w=k,C=zm({keyframes:[p.value,v(p.value)],velocity:Nm(g,k,p.value),damping:i,stiffness:s,restDelta:u,restSpeed:d}))};return T(0),{calculatedDuration:null,next:k=>{let M=!1;return!C&&w===void 0&&(M=!0,S(k),T(k)),w!==void 0&&k>=w?C.next(k-w):(!M&&S(k),p)}}}const oS=hi(.42,0,1,1),aS=hi(0,0,.58,1),Fm=hi(.42,0,.58,1),lS=e=>Array.isArray(e)&&typeof e[0]!="number",cS={linear:De,easeIn:oS,easeInOut:Fm,easeOut:aS,circIn:wc,circInOut:vm,circOut:ym,backIn:Sc,backInOut:mm,backOut:hm,anticipate:gm},ud=e=>{if(mc(e)){Ih(e.length===4);const[t,n,r,i]=e;return hi(t,n,r,i)}else if(typeof e=="string")return cS[e];return e};function uS(e,t,n){const r=[],i=n||Im,s=e.length-1;for(let o=0;o<s;o++){let a=i(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||De:t;a=mi(l,a)}r.push(a)}return r}function dS(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(Ih(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=uS(t,r,i),l=a.length,u=d=>{if(o&&d<e[0])return t[0];let f=0;if(l>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const p=Jn(e[f],e[f+1],d);return a[f](p)};return n?d=>u(kt(e[0],e[s-1],d)):u}function pS(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Jn(0,t,r);e.push(K(n,1,i))}}function fS(e){const t=[0];return pS(t,e.length-1),t}function hS(e,t){return e.map(n=>n*t)}function mS(e,t){return e.map(()=>t||Fm).splice(0,e.length-1)}function _s({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=lS(r)?r.map(ud):ud(r),s={done:!1,value:t[0]},o=hS(n&&n.length===t.length?n:fS(t),e),a=dS(o,t,{ease:Array.isArray(i)?i:mS(t,i)});return{calculatedDuration:e,next:l=>(s.value=a(l),s.done=l>=e,s)}}const gS=e=>{const t=({timestamp:n})=>e(n);return{start:()=>$.update(t,!0),stop:()=>Wt(t),now:()=>de.isProcessing?de.timestamp:at.now()}},yS={decay:cd,inertia:cd,tween:_s,keyframes:_s,spring:zm},vS=e=>e/100;class Tc extends Rm{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,o=(i==null?void 0:i.KeyframeResolver)||Cc,a=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new o(s,a,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=this.options,a=hc(n)?n:yS[n]||_s;let l,u;a!==_s&&typeof t[0]!="number"&&(l=mi(vS,Im(t[0],t[1])),t=[0,100]);const d=a({...this.options,keyframes:t});s==="mirror"&&(u=a({...this.options,keyframes:[...t].reverse(),velocity:-o})),d.calculatedDuration===null&&(d.calculatedDuration=tm(d));const{calculatedDuration:f}=d,p=f+i,y=p*(r+1)-i;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:p,totalDuration:y}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:k}=this.options;return{done:!0,value:k[k.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:d,resolvedDuration:f}=r;if(this.startTime===null)return s.next(0);const{delay:p,repeat:y,repeatType:v,repeatDelay:x,onUpdate:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const m=this.currentTime-p*(this.speed>=0?1:-1),h=this.speed>=0?m<0:m>d;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let g=this.currentTime,S=s;if(y){const k=Math.min(this.currentTime,d)/f;let M=Math.floor(k),A=k%1;!A&&k>=1&&(A=1),A===1&&M--,M=Math.min(M,y+1),!!(M%2)&&(v==="reverse"?(A=1-A,x&&(A-=x/f)):v==="mirror"&&(S=o)),g=kt(0,1,A)*f}const w=h?{done:!1,value:l[0]}:S.next(g);a&&(w.value=a(w.value));let{done:C}=w;!h&&u!==null&&(C=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const T=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return T&&i!==void 0&&(w.value=Ys(l,this.options,i)),b&&b(w.value),T&&this.finish(),w}get duration(){const{resolved:t}=this;return t?yt(t.calculatedDuration):0}get time(){return yt(this.currentTime)}set time(t){t=gt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=yt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=gS,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const xS=new Set(["opacity","clipPath","filter","transform"]);function SS(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const u={[t]:n};l&&(u.offset=l);const d=im(a,i);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const wS=Zl(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Es=10,kS=2e4;function bS(e){return hc(e.type)||e.type==="spring"||!rm(e.ease)}function jS(e,t){const n=new Tc({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let s=0;for(;!r.done&&s<kS;)r=n.sample(s),i.push(r.value),s+=Es;return{times:void 0,keyframes:i,duration:s-Es,ease:"linear"}}const Vm={anticipate:gm,backInOut:mm,circInOut:vm};function CS(e){return e in Vm}class dd extends Rm{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new Lm(s,(o,a)=>this.onKeyframesResolved(o,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:s,type:o,motionValue:a,name:l,startTime:u}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&Ps()&&CS(s)&&(s=Vm[s]),bS(this.options)){const{onComplete:f,onUpdate:p,motionValue:y,element:v,...x}=this.options,b=jS(t,x);t=b.keyframes,t.length===1&&(t[1]=t[0]),r=b.duration,i=b.times,s=b.ease,o="keyframes"}const d=SS(a.owner.current,l,t,{...this.options,duration:r,times:i,ease:s});return d.startTime=u??this.calcStartTime(),this.pendingTimeline?(Qu(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;a.set(Ys(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:i,type:o,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return yt(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return yt(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=gt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return De;const{animation:r}=n;Qu(r,t)}return De}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:s,ease:o,times:a}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:f,element:p,...y}=this.options,v=new Tc({...y,keyframes:r,duration:i,type:s,ease:o,times:a,isGenerator:!0}),x=gt(this.time);u.setWithVelocity(v.sample(x-Es).value,v.sample(x).value,Es)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:o,type:a}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=n.owner.getProps();return wS()&&r&&xS.has(r)&&!l&&!u&&!i&&s!=="mirror"&&o!==0&&a!=="inertia"}}const PS={type:"spring",stiffness:500,damping:25,restSpeed:10},TS=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),_S={type:"keyframes",duration:.8},ES={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},AS=(e,{keyframes:t})=>t.length>2?_S:yn.has(e)?e.startsWith("scale")?TS(t[1]):PS:ES;function MS({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...d}){return!!Object.keys(d).length}const _c=(e,t,n,r={},i,s)=>o=>{const a=fc(r,e)||{},l=a.delay||r.delay||0;let{elapsed:u=0}=r;u=u-gt(l);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:p=>{t.set(p),a.onUpdate&&a.onUpdate(p)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:s?void 0:i};MS(a)||(d={...d,...AS(e,d)}),d.duration&&(d.duration=gt(d.duration)),d.repeatDelay&&(d.repeatDelay=gt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!s&&t.get()!==void 0){const p=Ys(d.keyframes,a);if(p!==void 0)return $.update(()=>{d.onUpdate(p),d.onComplete()}),new J0([])}return!s&&dd.supports(d)?new dd(d):new Tc(d)};function LS({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Bm(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:o=e.getDefaultTransition(),transitionEnd:a,...l}=t;r&&(o=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in l){const p=e.getValue(f,(s=e.latestValues[f])!==null&&s!==void 0?s:null),y=l[f];if(y===void 0||d&&LS(d,f))continue;const v={delay:n,...fc(o||{},f)};let x=!1;if(window.MotionHandoffAnimation){const m=um(e);if(m){const h=window.MotionHandoffAnimation(m,f,$);h!==null&&(v.startTime=h,x=!0)}}Fa(e,f),p.start(_c(f,p,y,e.shouldReduceMotion&&lm.has(f)?{type:!1}:v,e,x));const b=p.animation;b&&u.push(b)}return a&&Promise.all(u).then(()=>{$.update(()=>{a&&u1(e,a)})}),u}function Ha(e,t,n={}){var r;const i=Xs(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const o=i?()=>Promise.all(Bm(e,i,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:p}=s;return RS(e,t,d+u,f,p,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[u,d]=l==="beforeChildren"?[o,a]:[a,o];return u().then(()=>d())}else return Promise.all([o(),a(n.delay)])}function RS(e,t,n=0,r=0,i=1,s){const o=[],a=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>a-u*r;return Array.from(e.variantChildren).sort(DS).forEach((u,d)=>{u.notify("AnimationStart",t),o.push(Ha(u,t,{...s,delay:n+l(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(o)}function DS(e,t){return e.sortNodePosition(t)}function IS(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>Ha(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=Ha(e,t,n);else{const i=typeof t=="function"?Xs(e,t,n.custom):t;r=Promise.all(Bm(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const NS=tc.length;function Om(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Om(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<NS;n++){const r=tc[n],i=e.props[r];(ti(i)||i===!1)&&(t[r]=i)}return t}const zS=[...ec].reverse(),FS=ec.length;function VS(e){return t=>Promise.all(t.map(({animation:n,options:r})=>IS(e,n,r)))}function BS(e){let t=VS(e),n=pd(),r=!0;const i=l=>(u,d)=>{var f;const p=Xs(e,d,l==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:y,transitionEnd:v,...x}=p;u={...u,...x,...v}}return u};function s(l){t=l(e)}function o(l){const{props:u}=e,d=Om(e.parent)||{},f=[],p=new Set;let y={},v=1/0;for(let b=0;b<FS;b++){const m=zS[b],h=n[m],g=u[m]!==void 0?u[m]:d[m],S=ti(g),w=m===l?h.isActive:null;w===!1&&(v=b);let C=g===d[m]&&g!==u[m]&&S;if(C&&r&&e.manuallyAnimateOnMount&&(C=!1),h.protectedKeys={...y},!h.isActive&&w===null||!g&&!h.prevProp||Qs(g)||typeof g=="boolean")continue;const T=OS(h.prevProp,g);let k=T||m===l&&h.isActive&&!C&&S||b>v&&S,M=!1;const A=Array.isArray(g)?g:[g];let F=A.reduce(i(m),{});w===!1&&(F={});const{prevResolvedValues:Ee={}}=h,Ae={...Ee,...F},ae=X=>{k=!0,p.has(X)&&(M=!0,p.delete(X)),h.needsAnimating[X]=!0;const _=e.getValue(X);_&&(_.liveStyle=!1)};for(const X in Ae){const _=F[X],R=Ee[X];if(y.hasOwnProperty(X))continue;let D=!1;Ia(_)&&Ia(R)?D=!em(_,R):D=_!==R,D?_!=null?ae(X):p.add(X):_!==void 0&&p.has(X)?ae(X):h.protectedKeys[X]=!0}h.prevProp=g,h.prevResolvedValues=F,h.isActive&&(y={...y,...F}),r&&e.blockInitialAnimation&&(k=!1),k&&(!(C&&T)||M)&&f.push(...A.map(X=>({animation:X,options:{type:m}})))}if(p.size){const b={};p.forEach(m=>{const h=e.getBaseTarget(m),g=e.getValue(m);g&&(g.liveStyle=!0),b[m]=h??null}),f.push({animation:b})}let x=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(f):Promise.resolve()}function a(l,u){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(p=>{var y;return(y=p.animationState)===null||y===void 0?void 0:y.setActive(l,u)}),n[l].isActive=u;const f=o(l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=pd(),r=!0}}}function OS(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!em(t,e):!1}function Jt(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function pd(){return{animate:Jt(!0),whileInView:Jt(),whileHover:Jt(),whileTap:Jt(),whileDrag:Jt(),whileFocus:Jt(),exit:Jt()}}class Kt{constructor(t){this.isMounted=!1,this.node=t}update(){}}class US extends Kt{constructor(t){super(t),t.animationState||(t.animationState=BS(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Qs(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let WS=0;class $S extends Kt{constructor(){super(...arguments),this.id=WS++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const HS={animation:{Feature:US},exit:{Feature:$S}};function si(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function gi(e){return{point:{x:e.pageX,y:e.pageY}}}const qS=e=>t=>gc(t)&&e(t,gi(t));function Rr(e,t,n,r){return si(e,t,qS(n),r)}const fd=(e,t)=>Math.abs(e-t);function GS(e,t){const n=fd(e.x,t.x),r=fd(e.y,t.y);return Math.sqrt(n**2+r**2)}class Um{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Do(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,y=GS(f.offset,{x:0,y:0})>=3;if(!p&&!y)return;const{point:v}=f,{timestamp:x}=de;this.history.push({...v,timestamp:x});const{onStart:b,onMove:m}=this.handlers;p||(b&&b(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Ro(p,this.transformPagePoint),$.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:y,onSessionEnd:v,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Do(f.type==="pointercancel"?this.lastMoveEventInfo:Ro(p,this.transformPagePoint),this.history);this.startEvent&&y&&y(f,b),v&&v(f,b)},!gc(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=gi(t),a=Ro(o,this.transformPagePoint),{point:l}=a,{timestamp:u}=de;this.history=[{...l,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,Do(a,this.history)),this.removeListeners=mi(Rr(this.contextWindow,"pointermove",this.handlePointerMove),Rr(this.contextWindow,"pointerup",this.handlePointerUp),Rr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Wt(this.updatePoint)}}function Ro(e,t){return t?{point:t(e.point)}:e}function hd(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Do({point:e},t){return{point:e,delta:hd(e,Wm(t)),offset:hd(e,KS(t)),velocity:QS(t,.1)}}function KS(e){return e[0]}function Wm(e){return e[e.length-1]}function QS(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Wm(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>gt(t)));)n--;if(!r)return{x:0,y:0};const s=yt(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const $m=1e-4,JS=1-$m,XS=1+$m,Hm=.01,YS=0-Hm,ZS=0+Hm;function Ne(e){return e.max-e.min}function ew(e,t,n){return Math.abs(e-t)<=n}function md(e,t,n,r=.5){e.origin=r,e.originPoint=K(t.min,t.max,e.origin),e.scale=Ne(n)/Ne(t),e.translate=K(n.min,n.max,e.origin)-e.originPoint,(e.scale>=JS&&e.scale<=XS||isNaN(e.scale))&&(e.scale=1),(e.translate>=YS&&e.translate<=ZS||isNaN(e.translate))&&(e.translate=0)}function Dr(e,t,n,r){md(e.x,t.x,n.x,r?r.originX:void 0),md(e.y,t.y,n.y,r?r.originY:void 0)}function gd(e,t,n){e.min=n.min+t.min,e.max=e.min+Ne(t)}function tw(e,t,n){gd(e.x,t.x,n.x),gd(e.y,t.y,n.y)}function yd(e,t,n){e.min=t.min-n.min,e.max=e.min+Ne(t)}function Ir(e,t,n){yd(e.x,t.x,n.x),yd(e.y,t.y,n.y)}function nw(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?K(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?K(n,e,r.max):Math.min(e,n)),e}function vd(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function rw(e,{top:t,left:n,bottom:r,right:i}){return{x:vd(e.x,n,i),y:vd(e.y,t,r)}}function xd(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function iw(e,t){return{x:xd(e.x,t.x),y:xd(e.y,t.y)}}function sw(e,t){let n=.5;const r=Ne(e),i=Ne(t);return i>r?n=Jn(t.min,t.max-r,e.min):r>i&&(n=Jn(e.min,e.max-i,t.min)),kt(0,1,n)}function ow(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const qa=.35;function aw(e=qa){return e===!1?e=0:e===!0&&(e=qa),{x:Sd(e,"left","right"),y:Sd(e,"top","bottom")}}function Sd(e,t,n){return{min:wd(e,t),max:wd(e,n)}}function wd(e,t){return typeof e=="number"?e:e[t]||0}const kd=()=>({translate:0,scale:1,origin:0,originPoint:0}),Dn=()=>({x:kd(),y:kd()}),bd=()=>({min:0,max:0}),te=()=>({x:bd(),y:bd()});function Be(e){return[e("x"),e("y")]}function qm({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function lw({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function cw(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Io(e){return e===void 0||e===1}function Ga({scale:e,scaleX:t,scaleY:n}){return!Io(e)||!Io(t)||!Io(n)}function Zt(e){return Ga(e)||Gm(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Gm(e){return jd(e.x)||jd(e.y)}function jd(e){return e&&e!=="0%"}function As(e,t,n){const r=e-n,i=t*r;return n+i}function Cd(e,t,n,r,i){return i!==void 0&&(e=As(e,i,r)),As(e,n,r)+t}function Ka(e,t=0,n=1,r,i){e.min=Cd(e.min,t,n,r,i),e.max=Cd(e.max,t,n,r,i)}function Km(e,{x:t,y:n}){Ka(e.x,t.translate,t.scale,t.originPoint),Ka(e.y,n.translate,n.scale,n.originPoint)}const Pd=.999999999999,Td=1.0000000000001;function uw(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Nn(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Km(e,o)),r&&Zt(s.latestValues)&&Nn(e,s.latestValues))}t.x<Td&&t.x>Pd&&(t.x=1),t.y<Td&&t.y>Pd&&(t.y=1)}function In(e,t){e.min=e.min+t,e.max=e.max+t}function _d(e,t,n,r,i=.5){const s=K(e.min,e.max,i);Ka(e,t,n,s,r)}function Nn(e,t){_d(e.x,t.x,t.scaleX,t.scale,t.originX),_d(e.y,t.y,t.scaleY,t.scale,t.originY)}function Qm(e,t){return qm(cw(e.getBoundingClientRect(),t))}function dw(e,t,n){const r=Qm(e,n),{scroll:i}=t;return i&&(In(r.x,i.offset.x),In(r.y,i.offset.y)),r}const Jm=({current:e})=>e?e.ownerDocument.defaultView:null,pw=new WeakMap;class fw{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=te(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(gi(d).point)},s=(d,f)=>{const{drag:p,dragPropagation:y,onDragStart:v}=this.getProps();if(p&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=s1(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Be(b=>{let m=this.getAxisMotionValue(b).get()||0;if(ot.test(m)){const{projection:h}=this.visualElement;if(h&&h.layout){const g=h.layout.layoutBox[b];g&&(m=Ne(g)*(parseFloat(m)/100))}}this.originPoint[b]=m}),v&&$.postRender(()=>v(d,f)),Fa(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},o=(d,f)=>{const{dragPropagation:p,dragDirectionLock:y,onDirectionLock:v,onDrag:x}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:b}=f;if(y&&this.currentDirection===null){this.currentDirection=hw(b),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",f.point,b),this.updateAxis("y",f.point,b),this.visualElement.render(),x&&x(d,f)},a=(d,f)=>this.stop(d,f),l=()=>Be(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new Um(t,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Jm(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&$.postRender(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!zi(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=nw(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&Ln(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=rw(i.layoutBox,n):this.constraints=!1,this.elastic=aw(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Be(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=ow(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Ln(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=dw(r,i.root,this.visualElement.getTransformPagePoint());let o=iw(i.layout.layoutBox,s);if(n){const a=n(lw(o));this.hasMutatedConstraints=!!a,a&&(o=qm(a))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Be(d=>{if(!zi(d,n,this.currentDirection))return;let f=l&&l[d]||{};o&&(f={min:0,max:0});const p=i?200:1e6,y=i?40:1e7,v={type:"inertia",velocity:r?t[d]:0,bounceStiffness:p,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,v)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Fa(this.visualElement,t),r.start(_c(t,r,0,n,this.visualElement,!1))}stopAnimation(){Be(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Be(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Be(n=>{const{drag:r}=this.getProps();if(!zi(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(t[n]-K(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Ln(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Be(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();i[o]=sw({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Be(o=>{if(!zi(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(K(l,u,i[o]))})}addListeners(){if(!this.visualElement.current)return;pw.set(this.visualElement,this);const t=this.visualElement.current,n=Rr(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Ln(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),$.read(r);const o=si(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Be(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=l[d].translate,f.set(f.get()+l[d].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=qa,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function zi(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function hw(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class mw extends Kt{constructor(t){super(t),this.removeGroupControls=De,this.removeListeners=De,this.controls=new fw(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||De}unmount(){this.removeGroupControls(),this.removeListeners()}}const Ed=e=>(t,n)=>{e&&$.postRender(()=>e(t,n))};class gw extends Kt{constructor(){super(...arguments),this.removePointerDownListener=De}onPointerDown(t){this.session=new Um(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Jm(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Ed(t),onStart:Ed(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&$.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=Rr(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Yi={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ad(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const hr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(L.test(e))e=parseFloat(e);else return e;const n=Ad(e,t.target.x),r=Ad(e,t.target.y);return`${n}% ${r}%`}},yw={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=$t.parse(e);if(i.length>5)return r;const s=$t.createTransformer(e),o=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+o]/=a,i[1+o]/=l;const u=K(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=u),typeof i[3+o]=="number"&&(i[3+o]/=u),s(i)}};class vw extends j.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;F0(xw),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Yi.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||$.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),rc.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Xm(e){const[t,n]=Rh(),r=j.useContext(Kl);return c.jsx(vw,{...e,layoutGroup:r,switchLayoutGroup:j.useContext(Oh),isPresent:t,safeToRemove:n})}const xw={borderRadius:{...hr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:hr,borderTopRightRadius:hr,borderBottomLeftRadius:hr,borderBottomRightRadius:hr,boxShadow:yw};function Sw(e,t,n){const r=ve(e)?e:ri(e);return r.start(_c("",r,t,n)),r.animation}function ww(e){return e instanceof SVGElement&&e.tagName!=="svg"}const kw=(e,t)=>e.depth-t.depth;class bw{constructor(){this.children=[],this.isDirty=!1}add(t){yc(this.children,t),this.isDirty=!0}remove(t){vc(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(kw),this.isDirty=!1,this.children.forEach(t)}}function jw(e,t){const n=at.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(Wt(r),e(s-t))};return $.read(r,!0),()=>Wt(r)}const Ym=["TopLeft","TopRight","BottomLeft","BottomRight"],Cw=Ym.length,Md=e=>typeof e=="string"?parseFloat(e):e,Ld=e=>typeof e=="number"||L.test(e);function Pw(e,t,n,r,i,s){i?(e.opacity=K(0,n.opacity!==void 0?n.opacity:1,Tw(r)),e.opacityExit=K(t.opacity!==void 0?t.opacity:1,0,_w(r))):s&&(e.opacity=K(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<Cw;o++){const a=`border${Ym[o]}Radius`;let l=Rd(t,a),u=Rd(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Ld(l)===Ld(u)?(e[a]=Math.max(K(Md(l),Md(u),r),0),(ot.test(u)||ot.test(l))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=K(t.rotate||0,n.rotate||0,r))}function Rd(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Tw=Zm(0,.5,ym),_w=Zm(.5,.95,De);function Zm(e,t,n){return r=>r<e?0:r>t?1:n(Jn(e,t,r))}function Dd(e,t){e.min=t.min,e.max=t.max}function Ve(e,t){Dd(e.x,t.x),Dd(e.y,t.y)}function Id(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Nd(e,t,n,r,i){return e-=t,e=As(e,1/n,r),i!==void 0&&(e=As(e,1/i,r)),e}function Ew(e,t=0,n=1,r=.5,i,s=e,o=e){if(ot.test(t)&&(t=parseFloat(t),t=K(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=K(s.min,s.max,r);e===s&&(a-=t),e.min=Nd(e.min,t,n,a,i),e.max=Nd(e.max,t,n,a,i)}function zd(e,t,[n,r,i],s,o){Ew(e,t[n],t[r],t[i],t.scale,s,o)}const Aw=["x","scaleX","originX"],Mw=["y","scaleY","originY"];function Fd(e,t,n,r){zd(e.x,t,Aw,n?n.x:void 0,r?r.x:void 0),zd(e.y,t,Mw,n?n.y:void 0,r?r.y:void 0)}function Vd(e){return e.translate===0&&e.scale===1}function eg(e){return Vd(e.x)&&Vd(e.y)}function Bd(e,t){return e.min===t.min&&e.max===t.max}function Lw(e,t){return Bd(e.x,t.x)&&Bd(e.y,t.y)}function Od(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function tg(e,t){return Od(e.x,t.x)&&Od(e.y,t.y)}function Ud(e){return Ne(e.x)/Ne(e.y)}function Wd(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class Rw{constructor(){this.members=[]}add(t){yc(this.members,t),t.scheduleRender()}remove(t){if(vc(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Dw(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:f,rotateY:p,skewX:y,skewY:v}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),y&&(r+=`skewX(${y}deg) `),v&&(r+=`skewY(${v}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const en={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},kr=typeof window<"u"&&window.MotionDebug!==void 0,No=["","X","Y","Z"],Iw={visibility:"hidden"},$d=1e3;let Nw=0;function zo(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function ng(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=um(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",$,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&ng(r)}function rg({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=t==null?void 0:t()){this.id=Nw++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,kr&&(en.totalNodes=en.resolvedTargetDeltas=en.recalculatedProjection=0),this.nodes.forEach(Vw),this.nodes.forEach($w),this.nodes.forEach(Hw),this.nodes.forEach(Bw),kr&&window.MotionDebug.record(en)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new bw)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new xc),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=ww(o),this.instance=o;const{layoutId:l,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=jw(p,250),Yi.hasAnimatedSinceResize&&(Yi.hasAnimatedSinceResize=!1,this.nodes.forEach(qd))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:y,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||d.getDefaultTransition()||Jw,{onLayoutAnimationStart:b,onLayoutAnimationComplete:m}=d.getProps(),h=!this.targetLayout||!tg(this.targetLayout,v)||y,g=!p&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||p&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,g);const S={...fc(x,"layout"),onPlay:b,onComplete:m};(d.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else p||qd(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Wt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(qw),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&ng(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Hd);return}this.isUpdating||this.nodes.forEach(Uw),this.isUpdating=!1,this.nodes.forEach(Ww),this.nodes.forEach(zw),this.nodes.forEach(Fw),this.clearAllSnapshots();const a=at.now();de.delta=kt(0,1e3/60,a-de.timestamp),de.timestamp=a,de.isProcessing=!0,To.update.process(de),To.preRender.process(de),To.render.process(de),de.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,rc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Ow),this.sharedNodes.forEach(Gw)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,$.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){$.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=te(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!eg(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;o&&(a||Zt(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),Xw(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return te();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(Yw))){const{scroll:d}=this.root;d&&(In(l.x,d.offset.x),In(l.y,d.offset.y))}return l}removeElementScroll(o){var a;const l=te();if(Ve(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:f,options:p}=d;d!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&Ve(l,o),In(l.x,f.offset.x),In(l.y,f.offset.y))}return l}applyTransform(o,a=!1){const l=te();Ve(l,o);for(let u=0;u<this.path.length;u++){const d=this.path[u];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&Nn(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Zt(d.latestValues)&&Nn(l,d.latestValues)}return Zt(this.latestValues)&&Nn(l,this.latestValues),l}removeTransform(o){const a=te();Ve(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Zt(u.latestValues))continue;Ga(u.latestValues)&&u.updateSnapshot();const d=te(),f=u.measurePageBox();Ve(d,f),Fd(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return Zt(this.latestValues)&&Fd(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==de.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=de.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=te(),this.relativeTargetOrigin=te(),Ir(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),Ve(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=te(),this.targetWithTransforms=te()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),tw(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ve(this.target,this.layout.layoutBox),Km(this.target,this.targetDelta)):Ve(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=te(),this.relativeTargetOrigin=te(),Ir(this.relativeTargetOrigin,this.target,y.target),Ve(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}kr&&en.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Ga(this.parent.latestValues)||Gm(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===de.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;Ve(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,y=this.treeScale.y;uw(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=te());const{target:v}=a;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Id(this.prevProjectionDelta.x,this.projectionDelta.x),Id(this.prevProjectionDelta.y,this.projectionDelta.y)),Dr(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==y||!Wd(this.projectionDelta.x,this.prevProjectionDelta.x)||!Wd(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),kr&&en.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Dn(),this.projectionDelta=Dn(),this.projectionDeltaWithTransform=Dn()}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},f=Dn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=te(),y=l?l.source:void 0,v=this.layout?this.layout.source:void 0,x=y!==v,b=this.getStack(),m=!b||b.members.length<=1,h=!!(x&&!m&&this.options.crossfade===!0&&!this.path.some(Qw));this.animationProgress=0;let g;this.mixTargetDelta=S=>{const w=S/1e3;Gd(f.x,o.x,w),Gd(f.y,o.y,w),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ir(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Kw(this.relativeTarget,this.relativeTargetOrigin,p,w),g&&Lw(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=te()),Ve(g,this.relativeTarget)),x&&(this.animationValues=d,Pw(d,u,this.latestValues,w,h,m)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Wt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=$.update(()=>{Yi.hasAnimatedSinceResize=!0,this.currentAnimation=Sw(0,$d,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta($d),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:d}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&ig(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||te();const f=Ne(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const p=Ne(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+p}Ve(a,l),Nn(a,d),Dr(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new Rw),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&zo("z",o,u,this.animationValues);for(let d=0;d<No.length;d++)zo(`rotate${No[d]}`,o,u,this.animationValues),zo(`skew${No[d]}`,o,u,this.animationValues);o.render();for(const d in u)o.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Iw;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Ji(o==null?void 0:o.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=Ji(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Zt(this.latestValues)&&(x.transform=d?d({},""):"none",this.hasProjected=!1),x}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=Dw(this.projectionDeltaWithTransform,this.treeScale,p),d&&(u.transform=d(p,u.transform));const{x:y,y:v}=this.projectionDelta;u.transformOrigin=`${y.origin*100}% ${v.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const x in Cs){if(p[x]===void 0)continue;const{correct:b,applyTo:m}=Cs[x],h=u.transform==="none"?p[x]:b(p[x],f);if(m){const g=m.length;for(let S=0;S<g;S++)u[m[S]]=h}else u[x]=h}return this.options.layoutId&&(u.pointerEvents=f===this?Ji(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Hd),this.root.sharedNodes.clear()}}}function zw(e){e.updateLayout()}function Fw(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,o=n.source!==e.layout.source;s==="size"?Be(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],y=Ne(p);p.min=r[f].min,p.max=p.min+y}):ig(s,n.layoutBox,r)&&Be(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],y=Ne(r[f]);p.max=p.min+y,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+y)});const a=Dn();Dr(a,r,n.layoutBox);const l=Dn();o?Dr(l,e.applyTransform(i,!0),n.measuredBox):Dr(l,r,n.layoutBox);const u=!eg(a);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:y}=f;if(p&&y){const v=te();Ir(v,n.layoutBox,p.layoutBox);const x=te();Ir(x,r,y.layoutBox),tg(v,x)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Vw(e){kr&&en.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Bw(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Ow(e){e.clearSnapshot()}function Hd(e){e.clearMeasurements()}function Uw(e){e.isLayoutDirty=!1}function Ww(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function qd(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function $w(e){e.resolveTargetDelta()}function Hw(e){e.calcProjection()}function qw(e){e.resetSkewAndRotation()}function Gw(e){e.removeLeadSnapshot()}function Gd(e,t,n){e.translate=K(t.translate,0,n),e.scale=K(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Kd(e,t,n,r){e.min=K(t.min,n.min,r),e.max=K(t.max,n.max,r)}function Kw(e,t,n,r){Kd(e.x,t.x,n.x,r),Kd(e.y,t.y,n.y,r)}function Qw(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Jw={duration:.45,ease:[.4,0,.1,1]},Qd=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Jd=Qd("applewebkit/")&&!Qd("chrome/")?Math.round:De;function Xd(e){e.min=Jd(e.min),e.max=Jd(e.max)}function Xw(e){Xd(e.x),Xd(e.y)}function ig(e,t,n){return e==="position"||e==="preserve-aspect"&&!ew(Ud(t),Ud(n),.2)}function Yw(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const Zw=rg({attachResizeListener:(e,t)=>si(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Fo={current:void 0},sg=rg({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Fo.current){const e=new Zw({});e.mount(window),e.setOptions({layoutScroll:!0}),Fo.current=e}return Fo.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),e2={pan:{Feature:gw},drag:{Feature:mw,ProjectionNode:sg,MeasureLayout:Xm}};function Yd(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&$.postRender(()=>s(t,gi(t)))}class t2 extends Kt{mount(){const{current:t}=this.node;t&&(this.unmount=e1(t,n=>(Yd(this.node,n,"Start"),r=>Yd(this.node,r,"End"))))}unmount(){}}class n2 extends Kt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=mi(si(this.node.current,"focus",()=>this.onFocus()),si(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Zd(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&$.postRender(()=>s(t,gi(t)))}class r2 extends Kt{mount(){const{current:t}=this.node;t&&(this.unmount=i1(t,n=>(Zd(this.node,n,"Start"),(r,{success:i})=>Zd(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Qa=new WeakMap,Vo=new WeakMap,i2=e=>{const t=Qa.get(e.target);t&&t(e)},s2=e=>{e.forEach(i2)};function o2({root:e,...t}){const n=e||document;Vo.has(n)||Vo.set(n,{});const r=Vo.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(s2,{root:e,...t})),r[i]}function a2(e,t,n){const r=o2(t);return Qa.set(e,n),r.observe(e),()=>{Qa.delete(e),r.unobserve(e)}}const l2={some:0,all:1};class c2 extends Kt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:l2[i]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=u?d:f;p&&p(l)};return a2(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(u2(t,n))&&this.startObserver()}unmount(){}}function u2({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const d2={inView:{Feature:c2},tap:{Feature:r2},focus:{Feature:n2},hover:{Feature:t2}},p2={layout:{ProjectionNode:sg,MeasureLayout:Xm}},Ja={current:null},og={current:!1};function f2(){if(og.current=!0,!!Xl)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Ja.current=e.matches;e.addListener(t),t()}else Ja.current=!1}const h2=[...Mm,ge,$t],m2=e=>h2.find(Am(e)),ep=new WeakMap;function g2(e,t,n){for(const r in t){const i=t[r],s=n[r];if(ve(i))e.addValue(r,i);else if(ve(s))e.addValue(r,ri(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,ri(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const tp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class y2{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Cc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=at.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,$.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:d}=o;this.onUpdate=d,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Js(n),this.isVariantNode=Vh(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const y in p){const v=p[y];l[y]!==void 0&&ve(v)&&v.set(l[y],!1)}}mount(t){this.current=t,ep.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),og.current||f2(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ja.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){ep.delete(this.current),this.projection&&this.projection.unmount(),Wt(this.notifyUpdate),Wt(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=yn.has(t),i=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&$.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Xn){const n=Xn[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):te()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<tp.length;r++){const i=tp[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=t[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=g2(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=ri(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(_m(i)||xm(i))?i=parseFloat(i):!m2(i)&&$t.test(n)&&(i=Cm(t,n)),this.setBaseTarget(t,ve(i)?i.get():i)),ve(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const o=sc(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(i=o[t])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!ve(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new xc),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class ag extends y2{constructor(){super(...arguments),this.KeyframeResolver=Lm}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;ve(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function v2(e){return window.getComputedStyle(e)}class x2 extends ag{constructor(){super(...arguments),this.type="html",this.renderInstance=Kh}readValueFromInstance(t,n){if(yn.has(n)){const r=jc(n);return r&&r.default||0}else{const r=v2(t),i=(Hh(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Qm(t,n)}build(t,n,r){lc(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return pc(t,n,r)}}class S2 extends ag{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=te}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(yn.has(n)){const r=jc(n);return r&&r.default||0}return n=Qh.has(n)?n:nc(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Yh(t,n,r)}build(t,n,r){cc(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){Jh(t,n,r,i)}mount(t){this.isSVGTag=dc(t.tagName),super.mount(t)}}const w2=(e,t)=>ic(e)?new S2(t):new x2(t,{allowProjection:e!==j.Fragment}),k2=G0({...HS,...d2,...e2,...p2},w2),oi=l0(k2),b2={enter:e=>({x:e>0?"100%":"-100%",opacity:0,position:"absolute",width:"100%",top:0,left:0}),center:{x:0,opacity:1,position:"relative",width:"100%",transition:{x:{type:"tween",ease:[.2,.7,.2,1],duration:.55},opacity:{duration:.35,ease:"easeOut"}}},exit:e=>({x:e>0?"-100%":"100%",opacity:[1,1,0],position:"absolute",width:"100%",top:0,left:0,transition:{x:{type:"tween",ease:[.2,.7,.2,1],duration:.55},opacity:{duration:.35,ease:"easeIn",times:[0,.6,1]}}})};function j2({pageKey:e,direction:t,children:n}){return c.jsx("div",{style:{position:"relative",width:"100%",overflow:"hidden",minHeight:"calc(100vh - 160px)"},children:c.jsx(Yl,{custom:t,initial:!1,children:c.jsx(oi.div,{custom:t,variants:b2,initial:"enter",animate:"center",exit:"exit",style:{width:"100%"},children:n},e)})})}function C2(){return c.jsx("footer",{style:{borderTop:"1px solid var(--border-muted)",backgroundColor:"#BFC9D1",padding:"40px 24px",marginTop:"auto",position:"relative",zIndex:10},children:c.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",display:"flex",flexDirection:"column",alignItems:"center",gap:"20px",textAlign:"center"},children:[c.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[c.jsx("a",{href:B.socialLinks.github,target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",style:{padding:"8px 12px",borderRadius:"var(--radius-full)"},"aria-label":"GitHub",children:c.jsx(nr,{size:16})}),c.jsx("a",{href:B.socialLinks.linkedin,target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",style:{padding:"8px 12px",borderRadius:"var(--radius-full)"},"aria-label":"LinkedIn",children:c.jsx(Gl,{size:16})}),c.jsx("a",{href:B.socialLinks.substack,target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",style:{padding:"8px 12px",borderRadius:"var(--radius-full)"},"aria-label":"Substack",children:c.jsx(hn,{size:16})})]}),c.jsxs("div",{style:{color:"var(--text-muted)",fontSize:"13.5px",fontFamily:"var(--font-mono)"},children:[c.jsxs("p",{children:["© ",new Date().getFullYear()," ",B.name,". All rights reserved."]}),c.jsx("p",{style:{marginTop:"4px",fontSize:"12px",color:"var(--text-dim)"},children:"Engineering Efficiency Through Intelligent Customer Support • Built with React & Express"})]})]})})}const lg=[{name:"job_scraper_and_analyzer",slug:"job_scraper_and_analyzer",description:"An updated version of my job scraper and analyzer, designed to allow cloud LLM processing, uses vector comparisons, and provide a more thorough analyzing process.",githubUrl:"https://github.com/dkbearsong/job_scraper_and_analyzer",demoUrl:null,technologies:["Python","Shell"],topics:["ai","llm","portfolio","pytho"],status:"active",lastUpdated:"2026-09-01T18:03:05Z",readme:`# Job Scraper and Analyzer

A multi-stage agentic pipeline that scrapes job listings from API services (Adzuna), job boards (Indeed, LinkedIn, ZipRecruiter, Google), and company career portals. It filters and evaluates them against your professional profile, resume, and benchmark archetypes using a hybrid architecture of deterministic extraction, vector similarity (pgvector), and multi-tiered LLM evaluation (fast cheap classification + deep qualitative reranking) to produce a ranked final application queue.

---

## Table of Contents

- [Pipeline Architecture](#pipeline-architecture)
- [Quick Start & Installation](#quick-start--installation)
- [Directory Structure](#directory-structure)
- [Key Features & Recent Advancements](#key-features--recent-advancements)
  - [Pluggable Scraper Adapters](#1-pluggable-scraper-adapters)
  - [Deterministic Extraction & Stage 1.5 Preliminary Filter](#2-deterministic-extraction--stage-15-preliminary-filter)
  - [Multi-Provider Hybrid LLM Architecture](#3-multi-provider-hybrid-llm-architecture)
  - [Rate Limiting & Tiered Throttling](#4-rate-limiting--tiered-throttling)
  - [Role-Specific Seniority & Geocoding Radius](#5-role-specific-seniority--geocoding-radius)
  - [Negative Vector Scoring](#6-negative-vector-scoring)
  - [RAG Retrieval & Application Tailoring](#7-rag-retrieval--application-tailoring)
  - [Model Context Protocol (MCP) Server](#8-model-context-protocol-mcp-server)
  - [Embedding Regeneration Utility](#9-embedding-regeneration-utility)
  - [Pipeline Test Runner](#10-pipeline-test-runner)
- [Writing Custom Scraper Adapters](#writing-custom-scraper-adapters)
- [Running the Application](#running-the-application)
  - [CLI Flags Reference](#cli-flags-reference)
  - [Common Usage Examples](#common-usage-examples)
- [Understanding Pipeline Output](#understanding-pipeline-output)

---

## Pipeline Architecture

The system processes jobs through a 10-step sequence designed for maximum cost-efficiency, filtering out unqualified listings early to conserve LLM tokens and API calls:

\`\`\`
[Stage 0: Setup] ──> [Stage 1: Scrape] ──> [Stage 1.5: Preliminary Filter]
                                                         │ (disqualifies non-matches)
                                                         ▼
[Stage 4: Archetypes] ◄── [Stage 3: Rule Filter] ◄── [Stage 2: Embed & Extract]
         │
         ▼
[Stage 5: Vector Scoring] ──> [Stage 6: Cheap LLM] ──> [Stage 7: Strong LLM] ──> [Stage 8: Final Queue]
\`\`\`

| Stage | Name | What It Does |
|-------|------|--------------|
| **0** | **Setup** | Loads \`.env\` and \`user_preferences.yaml\`, extracts skills and titles from resume (\`.docx\`) and user profile (\`.txt\`), initializes the AI engine, and configures the database connection. |
| **1** | **Scrape** | Executes pluggable scraper adapters configured in \`scrapers_config.yaml\` (e.g. Adzuna API, JobSpy boards, or local career microservice). Merges newly scraped jobs with deduplication. |
| **1.5** | **Preliminary Filter** | Fast deterministic pre-filter on title keywords, basic location, and work type *before* running expensive embeddings or LLM calls, immediately discarding obvious mismatches. |
| **2** | **Embed + Extract** | Runs deterministic regex extraction for salary, work flexibility, seniority, and timezone. Uses the extraction LLM for unstructured skills/requirements/summary and generates dense vector embeddings (title, requirements, responsibilities). |
| **3** | **Rule Filter** | Evaluates hard constraints from \`user_preferences.yaml\` (work types, seniority levels, role-specific seniority overrides, geocoded target city radius, pay range, and timezones). Failing jobs are flagged as \`skip\`. |
| **4** | **Archetype Integration** | Loads benchmark archetypes from \`documents/archetypes_config.json\` alongside your resume and profile archetypes, computing or loading their vector embeddings. Prepares negative scoring penalty criteria. |
| **5** | **Vector Scoring** | Calculates multi-vector cosine similarity (weighted: 40% title, 35% skills/requirements, 25% responsibilities) against archetypes. Applies negative penalties for unwanted titles/functions, and filters by similarity threshold. |
| **6** | **Cheap LLM** | Classifies candidate jobs using a fast, economical model (e.g. Gemini Flash Lite, local LM Studio / Ollama, or Groq), evaluating core fit, strengths, concerns, and outputting an initial \`fit_score\` (0-100) and \`decision\` (\`yes\`, \`maybe\`, \`no\`). |
| **7** | **Strong LLM** | Executes deep qualitative reranking on the top-N candidates using an advanced model (e.g. Gemini Pro, Claude 3.5 Sonnet, or GPT-4o), evaluating career trajectory, scale fit, recruiter red flags, and driving points. |
| **8** | **Final Queue** | Synthesizes scores from all stages into a final weighted score (0-100), assigning priority levels (\`high\`, \`medium\`, \`low\`) and actionable recommendations (\`apply\`, \`maybe\`, \`skip\`). Saves to database and logs results. |

---

## Quick Start & Installation

> [!IMPORTANT]
> All setup prerequisites, system requirements, database configuration (\`pgvector\`), environment variable references, and step-by-step guides have been centralized in **[INSTALL.md](INSTALL.md)**.

### Automated Setup

Run the interactive installation script from the project root:

\`\`\`bash
./install.sh
\`\`\`

Or in non-interactive mode:

\`\`\`bash
./install.sh -y
\`\`\`

### Manual Installation Summary

1. **Virtual Environment**: \`python3 -m venv .venv && source .venv/bin/activate\`
2. **Install Dependencies**: \`pip install -r requirements.txt && playwright install chromium\`
3. **Database**: PostgreSQL 14+ with \`pgvector\` extension enabled (\`CREATE EXTENSION IF NOT EXISTS vector;\`)
4. **Initialize Tables**: \`python -c "from app.make_db import make_db; make_db()"\`
5. **Configuration**: Copy \`.env.example\` to \`.env\` and customize \`user_preferences.yaml\`
6. **Self-Test**: \`python tests/test_runner.py --stage 0 --skip-db\`

For complete instructions, troubleshooting, and Docker setup, please refer to **[INSTALL.md](INSTALL.md)**.

---

## Directory Structure

\`\`\`
.
├── INSTALL.md                       # Comprehensive installation & operational setup guide
├── README.md                        # Project overview, architecture, and operation reference
├── install.sh                       # Automated installation and dependency setup script
├── main.py                          # Pipeline orchestrator and CLI entry point
├── scrapers_config.yaml             # Scraper adapter configuration (Adzuna, JobSpy, etc.)
├── user_preferences.yaml            # Filtering rules, LLM providers/models, rate limits
├── .env.example                     # Sanitized environment configuration template
├── .env                             # Local secrets, database credentials, and file paths
├── job_sites.csv                    # Company career sites for scraping
├── diagnose_db.py                   # Database network and authentication connectivity tester
├── mcp_server.py                    # Model Context Protocol (MCP) server for AI assistants
├── regenerate_embeddings.py         # Utility for recomputing vector embeddings in PostgreSQL
├── requirements.txt                 # Python package dependencies
├── app/
│   ├── ai_engine.py                 # Multi-provider LLM interface (LM Studio, Gemini, OpenRouter, etc.)
│   ├── ai_limiter.py                # Concurrency and rate-limiting throttle (Free vs Paid tiers)
│   ├── ai_utils.py                  # Embedding generation and batching utilities
│   ├── archetype_engine.py          # Benchmark role archetypes and negative scoring criteria
│   ├── backfill_pay_location_embeddings.py  # Utility for backfilling legacy embeddings
│   ├── config_utils.py              # Configuration loader (.env + user_preferences.yaml)
│   ├── eval_harness.py              # Prompt evaluation harness for extraction accuracy
│   ├── fallback_scraping_instructions.py  # Fallback scraping (career sites + JobSpy)
│   ├── geocoding_cache.json         # Local persistent geocoding coordinate cache
│   ├── llm_classifier.py            # Cheap LLM (Stage 6) & Strong LLM (Stage 7) evaluators
│   ├── llm_usage_tracker.py         # Token consumption and cost auditing logger
│   ├── location_utils.py            # Geocoding and geographic radius calculations
│   ├── logger.py                    # Structured logging and pipeline statistics
│   ├── make_db.py                   # PostgreSQL schema creation and pgvector initialization
│   ├── postgres_mgr.py              # Low-level PostgreSQL connection and query manager
│   ├── prompt_injection_defender.py # Defense against prompt injections in job descriptions
│   ├── pull_data.py                 # DataPuller database persistence and retrieval layer
│   ├── rag_engine.py                # Hybrid vector + metadata retrieval and application tailoring
│   ├── rule_filters.py              # Deterministic filtering rules (salary, seniority, timezone)
│   ├── text_engine.py               # Deterministic text processing & regex extraction
│   ├── vector_engine.py             # Vector operations, similarity scoring, negative penalties
│   ├── pipeline/
│   │   ├── stages.py                # Implementations for Pipeline Stages 0 through 8
│   │   ├── pipeline_utils.py        # Stage routing, stage range parsing, pool merging
│   │   └── maintenance.py           # 24h description rescraping & final score recalculation
│   └── scrapers/
│       ├── __init__.py              # ScraperAdapter abstract base class & JobData schema
│       ├── adapter_loader.py        # Dynamic adapter loader driven by scrapers_config.yaml
│       ├── adzuna_adapter.py        # Adzuna job search API adapter with full description fetching
│       ├── jobspy_adapter.py        # Multi-board scraper adapter (Indeed, LinkedIn, Google, ZipRecruiter)
│       ├── microservice_adapter.py  # Local microservice adapter for company career pages
│       ├── http_adapter.py          # Generic HTTP REST API scraper adapter
│       └── validator.py             # Scraped job dictionary validator
├── documents/
│   ├── Your Resume.docx             # User resume used for archetype comparisons
│   ├── User Profile.txt             # Plain-text user skills, titles, and summary
│   ├── archetypes_config.json       # Benchmark target role definitions
│   ├── search_terms.csv             # JobSpy search queries
│   └── adzunda_searches.csv         # Adzuna search queries and parameters
├── logs/                            # Application logs, app_error.log, and pipeline_stats.log
└── tests/
    ├── test_runner.py               # Comprehensive pipeline stage runner with synthetic data
    └── test_*.py                    # Unit and integration test suites
\`\`\`

---

## Key Features & Recent Advancements

### 1. Pluggable Scraper Adapters

Scraping in Stage 1 is fully decoupled using the \`ScraperAdapter\` architecture. Instead of hardcoding sources, adapters are declared in \`scrapers_config.yaml\`:
- **Adzuna Adapter (\`AdzunaAdapter\`)**: Connects to the Adzuna API, executing targeted searches defined in \`documents/adzunda_searches.csv\`, automatically deduplicating against the database, and scraping full descriptions.
- **JobSpy Adapter (\`JobSpyAdapter\`)**: Queries Indeed, LinkedIn, ZipRecruiter, and Google with configurable freshness (\`hours_old\`) and result limits.
- **Microservice Adapter (\`MicroserviceAdapter\`)**: Interfaces with a local scraping microservice using JSON strategy files from \`site_strategies/\`.
- **Custom HTTP Adapter (\`HttpAdapter\`)**: Allows querying arbitrary external endpoints.
- **Fallback Chaining**: Set \`run_fallback_after_adapters: true\` in \`scrapers_config.yaml\` to run legacy scrapers after modular adapters have finished.

### 2. Deterministic Extraction & Stage 1.5 Preliminary Filter

To drastically cut LLM API costs and execution time:
- **Preliminary Filtering (Stage 1.5)**: Disqualifies obvious non-matches immediately after scraping based on title keywords/regex disqualifiers (\`disqualified_titles\` in \`user_preferences.yaml\`), seniority, pay, and arrangement without making costly embedding or LLM calls. Failing jobs are marked \`skip\` in the database and purged from active pipeline memory.
- **Deterministic Text Engine**: Extracts salary numbers/ranges, work arrangements (remote/hybrid/onsite), seniority levels, and US timezones using optimized regex patterns in \`app/text_engine.py\`, reserving LLM calls strictly for ambiguous descriptions.
- **Prompt Injection Defense**: Untrusted job descriptions are sanitized by \`app/prompt_injection_defender.py\` before passing into LLM evaluation prompts.

### 3. Multi-Provider Hybrid LLM Architecture

The pipeline supports mixing and matching LLM providers for different stages in \`user_preferences.yaml\`:
- **Local Inference**: LM Studio, Ollama, native \`sentence-transformers\`, \`fastembed\`.
- **Cloud Providers**: Google Gemini, OpenRouter, OpenAI, Anthropic Claude, Groq, NVIDIA NIM, Cohere, SiliconFlow.
- **Example Strategy**: Use local \`sentence-transformers\` for embeddings (zero cost), local LM Studio or Groq for Stage 2 extraction, Gemini Flash Lite for Stage 6 cheap classification, and Claude 3.5 Sonnet or GPT-4o via OpenRouter for Stage 7 strong reranking.

### 4. Rate Limiting & Tiered Throttling

\`app/ai_limiter.py\` provides rate-limiting to prevent \`429 Too Many Requests\` errors:
- **Free vs. Paid Tiers**: Configurable in \`user_preferences.yaml\` with explicit \`requests_per_minute\`, \`tokens_per_minute\`, and \`concurrency\` limits.
- Set \`STAGE_6_TIER='free'\` or \`STAGE_7_TIER='paid'\` in \`.env\` to automatically throttle API requests to match your tier limits.

### 5. Role-Specific Seniority & Geocoding Radius

- **Role Seniority Overrides**: Allows fine-tuning allowed seniority levels per job title. For instance, requiring "senior" for Software Engineer, but accepting "mid-level" or "lead" for Support Engineer.
- **Geocoding & Radius Filtering**: Target cities configured in \`user_preferences.yaml\` (e.g. \`target_city_range: 50\`) calculate true geographic distance using cached coordinates in \`app/geocoding_cache.json\`.

### 6. Negative Vector Scoring

Jobs matching unwanted job functions or career paths are penalized during Stage 5 vector scoring:
- Configured under \`negative_scoring\` in \`user_preferences.yaml\`.
- Computes cosine similarity against \`avoid_titles\` (e.g. "Sales Representative", "Account Executive") and \`avoid_functions\` (e.g. "cold calling outbound quota prospecting").
- Jobs exceeding the threshold receive a proportional score reduction (up to \`penalty_weight\`, e.g. 35%).

### 7. RAG Retrieval & Application Tailoring

Built-in retrieval-augmented generation engine (\`app/rag_engine.py\`) backed by \`pgvector\` HNSW indexes:
- **Corpus Natural Language Query**:
  \`\`\`bash
  python main.py --rag-query "Find remote Python roles that mention Kubernetes and distributed systems"
  \`\`\`
- **Job Application Tailoring**:
  \`\`\`bash
  python main.py --rag-tailor 142
  \`\`\`
  Generates targeted resume bullet points, key strengths to highlight, and talking points tailored specifically for Job ID 142.

### 8. Model Context Protocol (MCP) Server

Expose your job search pipeline directly to AI assistants like Claude Desktop or Cursor via \`mcp_server.py\`:
- Tools exposed:
  - \`search_job_corpus\`: Hybrid vector + metadata semantic search across all scraped jobs.
  - \`tailor_application\`: Generates a custom tailoring strategy for a given Job ID.
  - \`get_pipeline_status\`: Reports stats on active jobs, extractions, and scores.
  - \`list_top_jobs\`: Returns the highest-ranked jobs from the final application queue.

### 9. Embedding Regeneration Utility

If you change your embedding model (e.g. switching from \`all-MiniLM-L6-v2\` to a larger model):
\`\`\`bash
# Regenerate embeddings for jobs added in the last 14 days
python regenerate_embeddings.py --days-back 14

# Regenerate all jobs and archetypes
python regenerate_embeddings.py --all-jobs
\`\`\`

### 10. Pipeline Test Runner

Test any stage or the entire pipeline using synthetic fixtures without requiring external scrapers or live database connections:
\`\`\`bash
# List all stages and their input/output contracts
python tests/test_runner.py --list-stages

# Test Stage 3 (Rule Filtering) in isolation
python tests/test_runner.py --stage 3 --skip-db

# Test chained execution through Stage 5
python tests/test_runner.py --from 2 --to 5 --chain --skip-db
\`\`\`

---

## Writing Custom Scraper Adapters

You can easily add new job sources by writing a subclass of \`ScraperAdapter\` (defined in \`app/scrapers/__init__.py\`) and registering it in \`scrapers_config.yaml\`.

### Required Adapter Interface

\`\`\`python
from typing import Any, Dict, List
from app.scrapers import ScraperAdapter

class CustomJobBoardAdapter(ScraperAdapter):
    def get_name(self) -> str:
        """Return the adapter identifier used in logs."""
        return self._config.get("name", "custom_job_board")

    def configure(self, config: Dict[str, Any]) -> None:
        """Receive adapter-specific configuration from scrapers_config.yaml."""
        self._config = config
        self._api_key = config.get("api_key", "")
        self._max_results = config.get("max_results", 50)

    async def scrape(self) -> List[Dict[str, Any]]:
        """
        Execute scraping and return a list of job dictionaries.
        Must conform to the JobData schema (at minimum: 'title' and 'company').
        """
        jobs = []
        # ... perform API request or web scrape ...
        jobs.append({
            "title": "Senior Backend Engineer",
            "company": "Acme Corp",
            "source": "custom_job_board",
            "url": "https://example.com/jobs/123",
            "location": "Austin, TX",
            "flexibility": "remote",
            "pay": "$130k-$170k",
            "description": "Full job description text...",
        })
        return jobs
\`\`\`

### Registering in \`scrapers_config.yaml\`

\`\`\`yaml
scrapers:
  - name: my_job_source
    adapter: my_module.scrapers.CustomJobBoardAdapter
    enabled: true
    config:
      api_key: "\${CUSTOM_API_KEY}"
      max_results: 100
\`\`\`

---

## Running the Application

### Basic Command

Execute the complete end-to-end pipeline (Stages 0 through 8):

\`\`\`bash
python main.py
\`\`\`

### CLI Flags Reference

| Flag | Type | Default | Description |
|------|------|---------|-------------|
| \`-s, --stage\` | str | \`"0-8"\` | Stage range to run. Accepts a single stage (\`3\`), a range (\`2-5\`), or all (\`0-8\`). |
| \`-l, --limit\` | int | \`50\` | Maximum records to load from PostgreSQL in bulk-load operations when resuming. |
| \`--skip-db\` | flag | \`False\` | Disables database persistence across all stages (runs purely in-memory). |
| \`--verbose\` | flag | \`False\` | Enables detailed per-job debug logging across all pipeline stages. |
| \`--debug\` | flag | \`False\` | Enables debug-level logging output. |
| \`--log-file\` | str | \`None\` | Path to custom log file (stored under \`logs/\`). |
| \`--pages\` | int | \`None\` | Override max scraping pages per site for Stage 1. |
| \`--visible\` | flag | \`False\` | Shows browser window during browser-based scraping (disables headless). |
| \`--skip-part-a\` | flag | \`False\` | Skips company career-page scraping in the legacy fallback path. |
| \`--scrape-missing-24h\` | flag | \`False\` | At Stage 1, only re-scrapes descriptions for jobs from the last 24h that lack them. |
| \`--reprocess\` | int/flag | \`0\` | Clears database extractions and scores for the specified number of days (default: 1 day if flag is given without a value) to allow re-running stages. |
| \`--recalculate-final-scores\` | flag | \`False\` | Re-evaluates final scores and priority rankings from stored database scores without re-running models. |
| \`--rag-query\` | str | \`None\` | Executes a natural language query over the pgvector job corpus and prints an answer with citations. |
| \`--rag-tailor\` | int | \`None\` | Generates a tailored resume and application talking points for a specific Job ID. |

### Common Usage Examples

\`\`\`bash
# Run the full pipeline
python main.py

# Run only rule filtering (Stage 3) with verbose output
python main.py -s 3 --verbose

# Run embedding generation through cheap classification (Stages 2-6)
python main.py -s 2-6

# Offline demo run without requiring PostgreSQL
python main.py --skip-db

# Scrape jobs with a visible browser window and debug logging
python main.py -s 1 --visible --debug

# Reprocess and re-evaluate jobs from the last 7 days
python main.py --reprocess 7 -s 2-8

# Recalculate final application queue scores after tuning weights in user_preferences.yaml
python main.py --recalculate-final-scores

# Query the job corpus using RAG
python main.py --rag-query "What companies are hiring remote engineers with FastAPI and Docker?"

# Generate tailored application strategy for Job ID 42
python main.py --rag-tailor 42
\`\`\`

---

## Understanding Pipeline Output

Each job that completes the pipeline receives comprehensive evaluation data stored in PostgreSQL:

| Field | Source | Meaning |
|-------|--------|---------|
| \`final_score\` | Stage 8 | Normalized overall score (0-100) combining vector similarity, Cheap LLM, and Strong LLM evaluations. |
| \`priority\` | Stage 8 | Action priority: \`high\`, \`medium\`, or \`low\`. |
| \`apply_recommendation\` | Stage 8 | Final recommendation: \`apply\`, \`maybe\`, or \`skip\`. |
| \`semantic_score\` | Stage 5 | Vector similarity score (0.0 to 1.0) against the closest archetype. |
| \`best_archetype\` | Stage 5 | Name of the archetype that best matches the job. |
| \`cheap_llm_result.fit_score\` | Stage 6 | Fast LLM fit assessment (0-100). |
| \`cheap_llm_result.decision\` | Stage 6 | Fast LLM screening decision: \`yes\`, \`maybe\`, \`no\`. |
| \`cheap_llm_result.strengths\` | Stage 6 | Specific skills and qualifications that match your profile. |
| \`cheap_llm_result.concerns\` | Stage 6 | Gaps, missing requirements, or potential mismatches. |
| \`strong_llm_result.final_score\` | Stage 7 | In-depth LLM analysis score (0-100). |
| \`strong_llm_result.driving_points\` | Stage 7 | Key selling points to emphasize in your application and interview. |
| \`strong_llm_result.red_flags\` | Stage 7 | Warning signs identified in the job posting or company expectations. |`},{name:"Postgres-MCP-Tool",slug:"Postgres-MCP-Tool",description:"A secure, sandboxed Model Context Protocol (MCP) server that gives AI language models safe, autonomous read/write access to PostgreSQL databases.",githubUrl:"https://github.com/dkbearsong/Postgres-MCP-Tool",demoUrl:null,technologies:["Python"],topics:["mcp","portfolio","psq","python"],status:"active",lastUpdated:"2026-07-31T13:46:51Z",readme:`# PostgreSQL Model Context Protocol (MCP) Server

A secure, robust Model Context Protocol (MCP) server written in Python that allows AI models to safely read, write, update, and delete records from a PostgreSQL database.

## Project Overview

### Purpose & Problem Solved
AI models lack direct access to databases, which hinders their ability to build reports, analyze database structure, and manage records on demand. Traditional integrations can expose databases to major security risks, such as SQL injection, resource exhaustion, or accidental truncation.

This PostgreSQL MCP Server acts as a secure, sandboxed gateway for AI agents. It implements:
- **Strict parameterized query enforcement** to eliminate SQL injection risks.
- **Multi-tier security verification**:
  - **Transactional Dry-Runs (Small/Medium operations)**: Runs write operations inside a PostgreSQL \`BEGIN\` transaction, captures a sample preview of affected records, and automatically issues a \`ROLLBACK\` so zero disk changes persist until explicitly confirmed.
  - **Disposable Environment Testing (High-Risk/Large-Scale operations)**: Tests high-risk DDL (\`DROP TABLE\`, \`TRUNCATE\`) or large-scale modifications (> 1,000 rows) inside an isolated temporary schema (\`_mcp_disposable_...\`), inspects structural outcomes, and automatically drops the disposable environment.
- **Row limits** preventing memory exhaustion from accidental massive selects.
- **Automated pre-deletion backups** (CSV and database dumps) with built-in age and count retention policies.
- **Error feedback loops** and **Explain Plan integrations** to allow self-correcting query generation.

### Tech Stack
- **FastMCP**: High-level SDK for creating MCP tools, resources, and prompts.
- **asyncpg**: High-performance, asynchronous PostgreSQL client library.
- **sqlglot**: SQL parser and transpiler used to inspect ASTs and validate query safety.
- **python-dotenv**: Configuration management via \`.env\` files.

---

## Installation & Configuration

### Prerequisites
- Python 3.10+
- PostgreSQL database instance
- \`pg_dump\` (Optional, fallback Python backup generator will be used if missing)

### Installation
1. Clone the repository and navigate to the project directory:
   \`\`\`bash
   cd "Postgres MCP"
   \`\`\`
2. Create and activate a virtual environment:
   \`\`\`bash
   python3 -m venv venv
   source venv/bin/activate
   \`\`\`
3. Install the dependencies:
   \`\`\`bash
   pip install -r requirements.txt
   \`\`\`

### Configuration
Create a \`.env\` file in the root of the workspace directory. The server loads parameters using both standard PostgreSQL keys and user-friendly aliases:

\`\`\`ini
# Database Connection (Uses URL or individual variables)
DATABASE_URL=postgresql://user:password@host:5432/dbname

# Fallback individual configuration parameters
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=postgres

# SSL / TLS Settings ('disable', 'prefer', 'require', 'verify-ca', 'verify-full')
PGSSLMODE=prefer

# Row limit guardrail for SELECT queries
ROW_LIMIT=500

# Large Scale Operation Threshold (triggers Disposable Environment testing)
LARGE_SCALE_THRESHOLD=1000

# Backup Retention Configurations
BACKUP_DIR=./backups
MAX_BACKUPS=10
MAX_BACKUP_AGE_DAYS=7.0
DB_BACKUP_THRESHOLD_BYTES=10485760 # 10MB
\`\`\`

### MCP Client Integration (mcp.json)
To register the server with an MCP client (such as Claude Desktop or other AI interfaces), add the server setup details to your client configuration file. 

Use absolute paths for the virtual environment's python interpreter and the \`mcp_server.py\` script:

\`\`\`json
{
  "mcpServers": {
    "postgres-mcp": {
      "command": ".../Postgres MCP/venv/bin/python",
      "args": [
        ".../Postgres MCP/mcp_server.py"
      ],
      "env": {
        "DB_HOST": "192.168.1.1",
        "DB_PORT": "5432",
        "DB_USER": "postgres",
        "DB_PASSWORD": "<PASSWORD>",
        "DB_NAME": "job_searcher"
      }
    }
  }
}
\`\`\`

*Note: Passing environment variables inside the \`"env"\` key in the client configuration is a secure way to supply database credentials at runtime.*

---

## Usage Examples

### Running the Server
Run the main script to start the server over stdio transport:
\`\`\`bash
python mcp_server.py
\`\`\`

### Context Injection (Resources)
The server exposes the database schema to the AI via:
- **Resource URI**: \`postgres://schema\`
  - *Returns*: A complete Markdown outline of all tables, comments, column types, nullability, defaults, check constraints, indexes, and foreign keys.

### Tools Exposed to the AI

#### 1. \`get_schema_info\`
Lists all database tables and schema-wide foreign key relationships.

#### 2. \`get_table_details\`
Retrieves column schemas, CHECK constraints, indexes, and descriptions for a specific table.
- **Parameters**:
  - \`table_name\` (string)

#### 3. \`execute_read_query\`
Executes a read-only query. Limits results to \`ROW_LIMIT\` (default 500) and returns results in a structured JSON format.
- **Parameters**:
  - \`query\` (string): e.g., \`"SELECT name, email FROM users WHERE age > $1"\`
  - \`parameters\` (list, optional): e.g., \`[25]\`
  - \`explain\` (boolean, optional): Prepend \`EXPLAIN ANALYZE\` to the query.

#### 4. \`execute_write_query\`
Executes write queries (\`INSERT\`, \`UPDATE\`, \`DELETE\`). Requires explicit confirmation.
- **Parameters**:
  - \`query\` (string): e.g., \`"INSERT INTO users (name, email) VALUES ($1, $2)"\`
  - \`parameters\` (list, optional): e.g., \`["Alice", "alice@example.com"]\`
  - \`confirm\` (boolean): Default \`False\`. If \`False\`, the query is not run and a \`pending_approval\` message is returned.

#### 5. \`delete_records\`
Deletes rows from a table. Backs up matching records to a timestamped CSV before performing the delete. Rotates backups based on retention settings, and runs a full database backup if the CSV size exceeds the database backup threshold.
- **Parameters**:
  - \`table_name\` (string)
  - \`where_clause\` (string): e.g., \`"id = $1"\` (Must not be empty or evaluate to \`1=1\`)
  - \`parameters\` (list, optional): e.g., \`[104]\`
  - \`confirm\` (boolean): Default \`False\`.

#### 6. \`export_to_csv\`
Executes a SELECT query and exports the structured results directly to a CSV file in the backups directory.
- **Parameters**:
  - \`query\` (string)
  - \`parameters\` (list, optional)
  - \`filename\` (string, optional)

#### 7. \`backup_database\`
Runs a full database schema and data backup immediately.

---

## Contribution Guidelines

We welcome contributions to enhance security features, support additional dialects, or improve parsing performance.

### Project Layout
- [config.py](file:///Users/dbearsong/Documents/projects/python/Postgres%20MCP/config.py): Configuration parser.
- [safety.py](file:///Users/dbearsong/Documents/projects/python/Postgres%20MCP/safety.py): Query AST checks and literal validation.
- [database.py](file:///Users/dbearsong/Documents/projects/python/Postgres%20MCP/database.py): Connection pool and database queries.
- [backup.py](file:///Users/dbearsong/Documents/projects/python/Postgres%20MCP/backup.py): Pre-deletion backups and retention rotation.
- [mcp_server.py](file:///Users/dbearsong/Documents/projects/python/Postgres%20MCP/mcp_server.py): FastMCP API registration.
- [test_server.py](file:///Users/dbearsong/Documents/projects/python/Postgres%20MCP/test_server.py): Integration test suite.

### Testing
To run the integration and safety test suite, ensure your \`.env\` connection values are set and run:
\`\`\`bash
python test_server.py
\`\`\`
*Note: The test suite sets up temporary tables (\`test_mcp_users\`, \`test_mcp_logs\`), executes query tools, attempts SQL injection/destructive actions, validates backups, and cleans up the tables automatically upon completion.*
`},{name:"web_scraper",slug:"web_scraper",description:"A Rest API microservice for scraping websites. Includes tools for working around Cloudfare blocks as well as routes for JS framework injected sites",githubUrl:"https://github.com/dkbearsong/web_scraper",demoUrl:null,technologies:["Python"],topics:["beautifulsoup","portfolio","python"],status:"active",lastUpdated:"2026-07-18T18:41:08Z",readme:`# Web Crawler Microservice

A powerful, production-ready Python microservice for extracting data from any website, including JavaScript-rendered SPAs, paginated content, and iframe-embedded pages. Built with Flask, BeautifulSoup, and Selenium.

## Features

- **Multiple Extraction Strategies**: Generic, Product, Article, and highly customizable CSS Selector-based extraction
- **JavaScript Rendering**: Full Selenium-based rendering for SPAs built with React, Vue, Angular, Next.js, Nuxt, etc.
- **Advanced Pagination**: Support for URL-based pagination, click-based pagination, and infinite scroll
- **Iframe Support**: Extract content from embedded iframes (Ashby job boards, embedded widgets, etc.)
- **Intelligent Click Handling**: Automatic overlay dismissal, element interception handling, and JavaScript click fallbacks
- **Content Change Detection**: Ensures page content actually updates between pagination clicks
- **Page Structure Analysis**: Automatic detection of page structure, content patterns, and recommended strategies
- **Table/List Extraction**: Extract structured data from HTML tables with configurable column mappings
- **Attribute Extraction**: Extract href, src, data-*, or any HTML attribute
- **Multi-page Crawling**: Recursive crawling with depth control and same-domain link following

---

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [API Endpoints](#api-endpoints)
- [Extraction Strategies](#extraction-strategies)
- [JavaScript Configuration](#javascript-configuration)
- [Pagination Handling](#pagination-handling)
- [Advanced Features](#advanced-features)
- [Complete Examples](#complete-examples)
- [Troubleshooting](#troubleshooting)
- [Performance & Security](#performance--security)

---

## Installation

### Prerequisites

- Python 3.8 or higher
- Chrome/Chromium browser (for JavaScript rendering)
- pip package manager

### Step 1: Install Dependencies

\`\`\`bash
pip install flask requests beautifulsoup4 selenium webdriver-manager
\`\`\`

### Step 2: Save and Run

Save the microservice code as \`app.py\`, then:

\`\`\`bash
python app.py
\`\`\`

The service will start on \`http://localhost:5000\`

### Docker Installation

\`\`\`dockerfile
FROM python:3.9-slim

# Install Chrome
RUN apt-get update && apt-get install -y \\
    wget gnupg2 \\
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \\
    && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list \\
    && apt-get update && apt-get install -y google-chrome-stable

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY app.py .
EXPOSE 5000

CMD ["python", "app.py"]
\`\`\`

---

## Quick Start

### Extract from a Static Page

\`\`\`bash
curl -X POST http://localhost:5000/extract \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://example.com/product",
    "strategy": "product"
  }'
\`\`\`

### Extract from a JavaScript-Rendered Page

\`\`\`bash
curl -X POST http://localhost:5000/extract-js \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://react-app.com/jobs",
    "strategy": "selector",
    "selectors": {
      "jobs": ".job-listing"
    },
    "js_config": {
      "wait": {
        "type": "element",
        "value": ".job-listing",
        "timeout": 10
      },
      "headless": true,
      "user_data_dir": "/home/youruser/.config/google-chrome",
      "profile": "Default"
    }
  }'
\`\`\`

---

## API Endpoints

### 1. Health Check

**GET** \`/health\`

Check if the service is running.

\`\`\`bash
curl http://localhost:5000/health
\`\`\`

**Response:**
\`\`\`json
{
  "status": "healthy",
  "service": "web-crawler"
}
\`\`\`

---

### 2. List Strategies

**GET** \`/strategies\`

Get available extraction strategies with descriptions.

\`\`\`bash
curl http://localhost:5000/strategies
\`\`\`

---

### 3. Quick Page Extraction (Static)

**POST** \`/extract\`

Extract data from static HTML pages (no JavaScript execution).

**Request Body:**
\`\`\`json
{
  "url": "https://example.com",
  "strategy": "generic|product|article|selector",
  "selectors": {}
}
\`\`\`

**Example:**
\`\`\`bash
curl -X POST http://localhost:5000/extract \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://shop.example.com/product/123",
    "strategy": "product"
  }'
\`\`\`

---

### 4. JavaScript Page Extraction

**POST** \`/extract-js\`

Extract data from JavaScript-rendered pages with full browser automation and advanced interaction capabilities.

#### **Basic Usage**
\`\`\`bash
curl -X POST http://localhost:5052/extract-js \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://react-spa.example.com",
    "strategy": "selector",
    "selectors": {
      "title": "h1",
      "content": ".main-content"
    },
    "js_config": {
      "headless": true,
      "wait": {
        "type": "element",
        "value": ".main-content",
        "timeout": 10
      }
    }
  }'
\`\`\`

#### **Request Body Parameters**

**Required:**
- \`url\` (string): Target URL to extract from
- \`strategy\` (string): Extraction strategy - \`generic\`, \`product\`, \`article\`, or \`selector\`

**Optional:**
- \`selectors\` (object): CSS selectors for extraction (required for \`selector\` strategy)
- \`js_config\` (object): JavaScript rendering configuration (see below)

#### **JavaScript Configuration (\`js_config\`)**

**Browser Settings:**
\`\`\`json
{
  "js_config": {
    "headless": true,
    "user_data_dir": "/path/to/.config/google-chrome",
    "profile": "Default",
    "debug": false,
    "block_images": false,
    "page_load_strategy": "normal"
  }
}
\`\`\`
- \`headless\` (bool, default: \`true\`): Run Chrome in headless mode
- \`user_data_dir\` (string): Path to Chrome user data directory (enables cookie persistence)
- \`profile\` (string): Chrome profile name (e.g., "Default", "Profile 1")
- \`debug\` (bool, default: \`false\`): Enable debug logging and HTML output
- \`block_images\` (bool, default: \`false\`): Disable loading of images to save bandwidth and speed up page load
- \`page_load_strategy\` (string, default: \`"normal"\`): Configures Selenium's page load strategy. Options: \`"normal"\`, \`"eager"\` (DOM interactive, does not wait for stylesheets/images), \`"none"\`.

**Wait Strategies:**

The \`wait\` configuration determines when to consider the page "ready" for extraction:

\`\`\`json
{
  "wait": {
    "type": "time",
    "value": 3,
    "timeout": 10
  }
}
\`\`\`

Available wait types:

| Type | Value | Description |
|------|-------|-------------|
| \`time\` | seconds (number) | Wait fixed seconds (e.g., 3) |
| \`element\` | CSS selector | Wait for element to appear (timeout in seconds) |
| \`script\` | JavaScript code | Wait for custom JS condition (e.g., \`return document.readyState === 'complete'\`) |
| \`network_idle\` | N/A | Wait for network activity to settle |

Examples:
\`\`\`json
{
  "wait": {
    "type": "element",
    "value": ".content-loaded",
    "timeout": 15
  }
}
\`\`\`

\`\`\`json
{
  "wait": {
    "type": "script",
    "value": "return document.querySelectorAll('.job-card').length > 0",
    "timeout": 20
  }
}
\`\`\`

**Action Sequences:**

Perform automated interactions before extraction:

\`\`\`json
{
  "actions": [
    {"type": "click", "selector": "#accept-cookies", "use_js": true},
    {"type": "wait", "seconds": 2},
    {"type": "scroll", "max_scrolls": 5, "pause_time": 1.5},
    {"type": "click_until_gone", "selector": ".load-more", "max_clicks": 20},
    {"type": "load_all", "method": "scroll", "selector": ".load-more", "max_iterations": 10},
    {"type": "script", "code": "document.querySelectorAll('.popup').forEach(el => el.remove())"}
  ]
}
\`\`\`

Action types:

| Type | Parameters | Description |
|------|------------|-------------|
| \`click\` | \`selector\`, \`use_js\` | Click an element (use_js=true for JS click) |
| \`wait\` | \`seconds\` | Wait for specified seconds |
| \`scroll\` | \`max_scrolls\`, \`pause_time\` | Scroll page down (pause between scrolls) |
| \`click_until_gone\` | \`selector\`, \`max_clicks\` | Click element repeatedly until it disappears |
| \`load_all\` | \`method\`, \`selector\`, \`max_iterations\` | Load all items (scroll or click method) |
| \`script\` | \`code\` | Execute custom JavaScript |

**Iframe Support:**

Extract content from iframes:

\`\`\`json
{
  "js_config": {
    "iframe": "iframe[src*='ashby']"
  }
}
\`\`\`

#### **Complete Example: Complex SPA with Actions**
\`\`\`json
{
  "url": "https://careers.example.com/jobs",
  "strategy": "selector",
  "selectors": {
    "jobs": {
      "selector": ".job-card",
      "columns": [
        {"name": "title", "selector": ".title", "extract": "text"},
        {"name": "location", "selector": ".location", "extract": "text"},
        {"name": "link", "selector": "a@href"}
      ]
    }
  },
  "js_config": {
    "headless": true,
    "user_data_dir": "/home/user/.config/google-chrome",
    "profile": "Default",
    "wait": {
      "type": "element",
      "value": ".job-card",
      "timeout": 15
    },
    "actions": [
      {"type": "click", "selector": "#accept-all", "use_js": true},
      {"type": "wait", "seconds": 2},
      {"type": "scroll", "max_scrolls": 10, "pause_time": 1}
    ],
    "debug": false
  }
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "url": "https://careers.example.com/jobs",
  "data": {
    "jobs": [
      {
        "title": "Software Engineer",
        "location": "San Francisco, CA",
        "link": "https://careers.example.com/jobs/123"
      }
    ]
  }
}
\`\`\`

---

### 5. Multi-Page Crawling (Static)

**POST** \`/crawl\`

Crawl multiple pages by following internal links.

**Request Body:**
\`\`\`json
{
  "url": "https://example.com/blog",
  "strategy": "article",
  "config": {
    "max_depth": 2,
    "max_pages": 20,
    "delay": 1.5,
    "follow_links": true
  }
}
\`\`\`

---

### 6. Multi-Page Crawling (JavaScript)

**POST** \`/crawl-js\`

Crawl JavaScript-rendered pages with link following.

**Request Body:**
\`\`\`json
{
  "url": "https://spa-site.com",
  "strategy": "selector",
  "selectors": {"articles": "article"},
  "config": {
    "max_depth": 2,
    "max_pages": 10,
    "follow_links": true
  },
  "js_config": {
    "wait": {"type": "time", "value": 3},
    "headless": true
  }
}
\`\`\`

---

### 7. Paginated Content Extraction

**POST** \`/extract-paginated\`

Extract data from multi-page results with support for both URL-based pagination (page numbers in URL) and click-based pagination (clicking "Next" button). Handles both static and JavaScript-rendered pages.

#### **Pagination Method 1: URL-Based Pagination**

Use when page numbers are in the URL (e.g., \`?page=1\`, \`?p=2\`).

**Request:**
\`\`\`json
{
  "url_template": "https://jobs.example.com/search?keywords=python&page={page}",
  "start_page": 1,
  "end_page": 5,
  "strategy": "selector",
  "selectors": {
    "jobs": {
      "selector": ".job-card",
      "columns": [
        {"name": "title", "selector": ".title", "extract": "text"},
        {"name": "company", "selector": ".company", "extract": "text"},
        {"name": "link", "selector": "a@href"}
      ]
    }
  },
  "delay": 1.5
}
\`\`\`

**URL-Based Parameters:**
- \`url_template\` (string, required): URL with \`{page}\` placeholder for page numbers
- \`start_page\` (int, default: 1): First page number
- \`end_page\` (int, default: 10): Last page number
- \`strategy\` (string): Extraction strategy (\`generic\`, \`product\`, \`article\`, \`selector\`)
- \`selectors\` (object): Selectors for data extraction
- \`delay\` (float, default: 1.0): Delay between page requests (seconds)
- \`js_config\` (object, optional): For JavaScript-rendered pages

**Example with JavaScript Rendering:**
\`\`\`json
{
  "url_template": "https://react-jobs.app/search?q=python&page={page}",
  "start_page": 1,
  "end_page": 10,
  "strategy": "selector",
  "selectors": {
    "title": ".job-title",
    "company": ".company-name"
  },
  "js_config": {
    "headless": true,
    "wait": {
      "type": "element",
      "value": ".job-title",
      "timeout": 10
    },
    "user_data_dir": "/home/user/.config/google-chrome",
    "profile": "Default"
  },
  "delay": 2.0
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "total_pages": 5,
  "data": [
    {
      "page": 1,
      "url": "https://jobs.example.com/search?keywords=python&page=1",
      "items": [
        {"title": "Senior Python Dev", "company": "TechCorp", "link": "..."}
      ]
    },
    {
      "page": 2,
      "url": "https://jobs.example.com/search?keywords=python&page=2",
      "items": [...]
    }
  ]
}
\`\`\`

---

#### **Pagination Method 2: Click-Based Pagination**

Use when you click a "Next" button or similar element to load next page.

**Basic Click Pagination:**
\`\`\`json
{
  "url": "https://jobs.example.com/search",
  "pagination": {
    "method": "click",
    "next_selector": "a.pagination-next",
    "max_pages": 10,
    "wait_after_click": 3
  },
  "strategy": "selector",
  "selectors": {
    "jobs": ".job-listing"
  },
  "js_config": {
    "headless": true,
    "wait": {
      "type": "element",
      "value": ".job-listing",
      "timeout": 10
    }
  }
}
\`\`\`

**Click-Based Parameters:**

**pagination object:**
- \`method\` (string, required): "click" for click-based pagination
- \`next_selector\` (string, required): CSS selector for the "Next" button/link
- \`max_pages\` (int, default: 10): Maximum number of pages to scrape
- \`wait_after_click\` (float, default: 2): Wait time after clicking Next (seconds)
- \`use_js\` (bool, default: true): Use JavaScript click instead of Selenium click
- \`content_change_selector\` (string, optional): Selector to verify page content changed

**js_config object:** Same as extract-js endpoint

**Example: LinkedIn-Style Pagination**
\`\`\`json
{
  "url": "https://linkedin.com/jobs/search/?keywords=python",
  "pagination": {
    "method": "click",
    "next_selector": "button.jobs-search-pagination__button--next",
    "max_pages": 5,
    "wait_after_click": 3,
    "use_js": true,
    "content_change_selector": "div.artdeco-entity-lockup"
  },
  "strategy": "selector",
  "selectors": {
    "title": "div.artdeco-entity-lockup__title a span strong",
    "company": "div.artdeco-entity-lockup__subtitle span",
    "location": "div.artdeco-entity-lockup__caption span[dir='ltr']",
    "link": "div.artdeco-entity-lockup__title a@href"
  },
  "js_config": {
    "headless": true,
    "user_data_dir": "/home/user/.config/google-chrome",
    "profile": "Default",
    "wait": {
      "type": "element",
      "value": "div.artdeco-entity-lockup",
      "timeout": 15
    }
  }
}
\`\`\`

**Content Change Detection:**

Click-based pagination automatically detects when new content loads by comparing page content before/after the click. You can customize this detection:

\`\`\`json
{
  "pagination": {
    "method": "click",
    "next_selector": ".next-page",
    "max_pages": 20,
    "wait_after_click": 2,
    "content_change_selector": ".item-card"
  }
}
\`\`\`

The scraper will:
1. Get a snapshot of content matching \`content_change_selector\` before click
2. Click the Next button
3. Wait for new content to appear (verifying actual page change)
4. Extract data from new content
5. Repeat until Next button disappears or max_pages reached

**Advanced: Initial Actions**

Perform setup actions before pagination starts:

\`\`\`json
{
  "url": "https://example.com/jobs",
  "pagination": {
    "method": "click",
    "next_selector": ".next-btn",
    "max_pages": 10,
    "wait_after_click": 2
  },
  "strategy": "selector",
  "selectors": {"jobs": ".job-card"},
  "js_config": {
    "headless": true,
    "wait": {"type": "time", "value": 2},
    "actions": [
      {"type": "click", "selector": "#filters"},
      {"type": "wait", "seconds": 1},
      {"type": "scroll", "max_scrolls": 3}
    ]
  }
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "total_pages": 5,
  "data": [
    {
      "page": 1,
      "url": "https://jobs.example.com/search",
      "items": [
        {
          "title": "Senior Python Developer",
          "company": "TechCorp",
          "location": "Remote",
          "link": "https://..."
        }
      ]
    },
    {
      "page": 2,
      "url": "https://jobs.example.com/search",
      "items": [...]
    }
  ]
}
\`\`\`

**Error Handling:**

If pagination stops before reaching \`max_pages\`, the response will include information about why:

\`\`\`json
{
  "success": true,
  "total_pages": 3,
  "stopped_reason": "No next button found on page 3",
  "data": [...]
}
\`\`\`

---

### 8. Page Structure Analysis

**POST** \`/analyze\`

Automatically analyze page structure and get recommended extraction strategies.

**Request Body:**
\`\`\`json
{
  "url": "https://example.com/product"
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "analysis": {
    "metadata": {
      "title": "Product Name",
      "description": "...",
      "og_tags": {}
    },
    "structure": {
      "headings": [...],
      "main_container": {...}
    },
    "content_hints": {
      "price_indicators": [{"selector": ".price", "text": "$29.99"}],
      "date_indicators": [...]
    },
    "recommended_strategy": {
      "recommended": "product",
      "confidence": 5,
      "custom_selector_template": {
        "title": ".product-title",
        "price": ".price-tag"
      }
    }
  }
}
\`\`\`

---

## Extraction Strategies

### 1. Generic Strategy

Extracts common elements from any page.

\`\`\`json
{
  "strategy": "generic"
}
\`\`\`

**Extracts:** Title, headings (H1-H6), paragraphs, images, meta tags

---

### 2. Product Strategy

Optimized for e-commerce product pages.

\`\`\`json
{
  "strategy": "product"
}
\`\`\`

**Extracts:** Product name, price, description, availability, images

---

### 3. Article Strategy

Optimized for blog posts and news articles.

\`\`\`json
{
  "strategy": "article"
}
\`\`\`

**Extracts:** Headline, author, publish date, content, tags

---

### 4. Selector Strategy (Most Powerful)

Custom CSS selector-based extraction with advanced features.

#### **Simple Text Extraction**
\`\`\`json
{
  "strategy": "selector",
  "selectors": {
    "title": "h1.product-title",
    "price": ".price"
  }
}
\`\`\`

#### **Attribute Extraction**
\`\`\`json
{
  "selectors": {
    "product_link": "a.product@href",
    "image": "img.product@src",
    "data_id": ".product@data-id"
  }
}
\`\`\`

#### **Advanced Configuration**
\`\`\`json
{
  "selectors": {
    "description": {
      "selector": ".description",
      "extract": "html",
      "multiple": false
    },
    "main_link": {
      "selector": ".product",
      "child": "a",
      "extract": "attr",
      "attribute": "href"
    }
  }
}
\`\`\`

#### **Table/Structured Data Extraction**
\`\`\`json
{
  "selectors": {
    "jobs": {
      "selector": "table.jobs tbody tr",
      "extract": "table",
      "columns": [
        {"name": "title", "selector": "td:nth-child(1) a", "extract": "text"},
        {"name": "location", "selector": "td:nth-child(2)", "extract": "text"},
        {"name": "link", "selector": "td:nth-child(1) a@href"}
      ]
    }
  }
}
\`\`\`

**Extract Types:**
- \`text\` - Extract text content (default)
- \`html\` - Extract raw HTML
- \`attr\` - Extract specific attribute
- \`table\` - Extract structured rows with columns

---

## JavaScript Configuration

### Wait Strategies

#### **Time-Based Wait**
\`\`\`json
{
  "wait": {
    "type": "time",
    "value": 3
  }
}
\`\`\`

#### **Wait for Element**
\`\`\`json
{
  "wait": {
    "type": "element",
    "value": ".product-list",
    "timeout": 10
  }
}
\`\`\`

#### **Wait for Script Condition**
\`\`\`json
{
  "wait": {
    "type": "script",
    "value": "return document.querySelectorAll('.item').length > 10",
    "timeout": 15
  }
}
\`\`\`

#### **Wait for Content to Load (Next.js/Nuxt)**
\`\`\`json
{
  "wait": {
    "type": "script",
    "value": "return document.querySelectorAll('.job-card').length > 0 && document.querySelector('.job-card').textContent.trim().length > 10",
    "timeout": 15
  }
}
\`\`\`

---

### Actions

Execute actions before or during extraction.

#### **Click Element**
\`\`\`json
{
  "type": "click",
  "selector": ".load-more",
  "use_js": true,
  "dismiss_overlays": true
}
\`\`\`

#### **Click Until Element Gone**
\`\`\`json
{
  "type": "click_until_gone",
  "selector": ".load-more",
  "max_clicks": 20,
  "pause_time": 2,
  "use_js": true
}
\`\`\`

#### **Scroll to Bottom**
\`\`\`json
{
  "type": "scroll",
  "max_scrolls": 5,
  "pause_time": 1.5
}
\`\`\`

#### **Load All Content**
\`\`\`json
{
  "type": "load_all",
  "method": "scroll",
  "max_iterations": 10,
  "pause_time": 2
}
\`\`\`

Or for click-based:
\`\`\`json
{
  "type": "load_all",
  "method": "click",
  "selector": ".load-more",
  "max_iterations": 20,
  "pause_time": 2
}
\`\`\`

#### **Execute Custom JavaScript**
\`\`\`json
{
  "type": "script",
  "code": "document.querySelector('.modal-overlay')?.remove();"
}
\`\`\`

#### **Wait/Pause**
\`\`\`json
{
  "type": "wait",
  "seconds": 2
}
\`\`\`

---

### Iframe Support

Extract content from embedded iframes:

\`\`\`json
{
  "js_config": {
    "iframe": "iframe[src*='ashbyhq.com']",
    "wait": {
      "type": "element",
      "value": ".job-listing",
      "timeout": 10
    }
  }
}
\`\`\`

---

## Pagination Handling

### URL-Based Pagination

When page numbers are in the URL:

\`\`\`json
{
  "url_template": "https://example.com/jobs?page={page}",
  "start_page": 1,
  "end_page": 20,
  "strategy": "selector",
  "selectors": {...},
  "delay": 1.5
}
\`\`\`

Works with:
- Query parameters: \`?page=1\`
- Path parameters: \`/page/1\`
- Hash routes: \`#/page/1\`

### Click-Based Pagination

When clicking "Next" button:

\`\`\`json
{
  "url": "https://example.com/jobs",
  "pagination": {
    "method": "click",
    "next_selector": "a[title='Next']",
    "max_pages": 20,
    "wait_after_click": 3,
    "use_js": true
  },
  "strategy": "selector",
  "selectors": {...}
}
\`\`\`

**Tips for Finding the Right Selector:**
- Use \`a[title='Next']\` for buttons with title attribute
- Use \`.pagination-next\` for class-based selectors
- Use \`a[aria-label*='next']\` for aria-label attributes
- Avoid dynamic class names like \`_container_j2da7_1\`
- Use stable classes like \`pagination-link\` or \`ashby-job-posting\`

---

## Advanced Features

### Handling Intercepted Clicks

When modals or overlays block clicks:

\`\`\`json
{
  "js_config": {
    "actions": [
      {
        "type": "script",
        "code": "document.querySelectorAll('.modal, .overlay').forEach(el => el.remove());"
      },
      {
        "type": "click",
        "selector": ".next-button",
        "use_js": true,
        "dismiss_overlays": true
      }
    ]
  }
}
\`\`\`

The system automatically:
- Dismisses common overlays before clicks
- Falls back to JavaScript click if regular click fails
- Scrolls elements into view
- Waits for elements to be clickable

### Dynamic Class Names (CSS Modules)

For Next.js/Nuxt sites with hashed class names:

❌ **Bad:** \`._container_j2da7_1\` (changes on each build)

✅ **Good:** \`.ashby-job-posting-brief-title\` (stable)

\`\`\`json
{
  "selectors": {
    "title": ".ashby-job-posting-brief-title",
    "jobs": ".job-card"
  }
}
\`\`\`

### Content Change Detection

The paginated endpoint automatically detects when content changes after clicking "Next":

- Captures page content before click
- Clicks next button
- Waits and verifies content actually changed
- Retries up to 10 times if needed
- Stops if content doesn't change

---

## Complete Examples

### Example 1: E-commerce Product Scraping

\`\`\`bash
curl -X POST http://localhost:5000/extract \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://shop.example.com/product/123",
    "strategy": "selector",
    "selectors": {
      "name": "h1.product-name",
      "price": ".price-current",
      "availability": ".stock-status",
      "images": "img.product-image@src",
      "description": {
        "selector": ".product-description",
        "extract": "html"
      }
    }
  }'
\`\`\`

---

### Example 2: Job Listings (JavaScript-Rendered)

\`\`\`bash
curl -X POST http://localhost:5000/extract-js \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://careers.example.com/jobs",
    "strategy": "selector",
    "selectors": {
      "jobs": {
        "selector": "div.job-card",
        "extract": "table",
        "columns": [
          {"name": "title", "selector": "h3", "extract": "text"},
          {"name": "location", "selector": ".location", "extract": "text"},
          {"name": "link", "selector": "a@href"}
        ]
      }
    },
    "js_config": {
      "wait": {
        "type": "element",
        "value": ".job-card",
        "timeout": 10
      },
      "headless": true
    }
  }'
\`\`\`

---

### Example 3: Paginated Job Board

\`\`\`bash
curl -X POST http://localhost:5000/extract-paginated \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://monday.com/careers",
    "pagination": {
      "method": "click",
      "next_selector": "a.pagination-link[title=\\"Next\\"]",
      "max_pages": 22,
      "wait_after_click": 3,
      "use_js": true
    },
    "strategy": "selector",
    "selectors": {
      "title": "div.position-name",
      "location": "div.tags div:nth-child(2) span",
      "link": "a[href]@href"
    },
    "js_config": {
      "wait": {"type": "time", "value": 3},
      "headless": true
    }
  }'
\`\`\`

---

### Example 4: Iframe-Embedded Content

\`\`\`bash
curl -X POST http://localhost:5000/extract-js \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://n8n.io/careers/",
    "strategy": "selector",
    "selectors": {
      "title": ".ashby-job-posting-brief-title",
      "location": ".ashby-job-posting-brief-details p",
      "link": "a[href*=\\"/n8n/\\"]@href"
    },
    "js_config": {
      "iframe": "iframe[src*=\\"ashbyhq.com\\"]",
      "wait": {
        "type": "element",
        "value": ".ashby-job-posting-brief-title",
        "timeout": 15
      },
      "headless": true
    }
  }'
\`\`\`

---

### Example 5: Infinite Scroll

\`\`\`bash
curl -X POST http://localhost:5000/extract-js \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://social.example.com/feed",
    "strategy": "selector",
    "selectors": {
      "posts": ".post-item"
    },
    "js_config": {
      "wait": {"type": "time", "value": 2},
      "actions": [
        {
          "type": "load_all",
          "method": "scroll",
          "max_iterations": 10,
          "pause_time": 2
        }
      ],
      "headless": true
    }
  }'
\`\`\`

---

## Troubleshooting

### Issue: Null Values from Next.js/Nuxt Sites

**Problem:** Elements exist but data is null.

**Solution:** Use script-based wait for content hydration:

\`\`\`json
{
  "js_config": {
    "wait": {
      "type": "script",
      "value": "return document.querySelectorAll('.job-card').length > 0 && document.querySelector('.job-card').textContent.trim().length > 10",
      "timeout": 15
    },
    "actions": [
      {"type": "wait", "seconds": 3}
    ]
  }
}
\`\`\`

### Issue: Element Click Intercepted

**Problem:** \`element click intercepted\` error.

**Solution:** Use JavaScript click with overlay dismissal:

\`\`\`json
{
  "js_config": {
    "actions": [
      {
        "type": "click",
        "selector": ".button",
        "use_js": true,
        "dismiss_overlays": true
      }
    ]
  }
}
\`\`\`

### Issue: Wrong Pagination Button Selected

**Problem:** Clicking page number instead of next arrow.

**Solution:** Use specific attributes:

\`\`\`json
{
  "pagination": {
    "next_selector": "a[title='Next']"
  }
}
\`\`\`

Or target by content:
\`\`\`json
{
  "pagination": {
    "next_selector": "a.pagination-link:not([aria-label])"
  }
}
\`\`\`

### Issue: Pagination Returns Same Data

**Problem:** All pages return identical data.

**Cause:** Content not changing after click.

**Solution:** The system now automatically detects this. Check console logs for:
\`\`\`
Warning: Content didn't change after clicking next on page X
\`\`\`

Increase \`wait_after_click\`:
\`\`\`json
{
  "pagination": {
    "wait_after_click": 5
  }
}
\`\`\`

### Issue: Chrome Driver Errors

**Solution:**

\`\`\`bash
# Update webdriver-manager
pip install --upgrade webdriver-manager

# Or set Chrome binary
export CHROME_BIN=/usr/bin/google-chrome
\`\`\`

### Debugging Tips

1. **Use \`headless: false\`** to see what's happening:
\`\`\`json
{
  "js_config": {
    "headless": false
  }
}
\`\`\`

2. **Check console output** for debug messages showing page numbers and content changes

3. **Use \`/analyze\` endpoint** to discover correct selectors

4. **Test selectors in browser DevTools** before using them

---

## Performance & Security

### Performance Tips

1. **Use \`/extract\` for static pages** - Much faster than \`/extract-js\`
2. **Set appropriate delays** - Respect rate limits with \`delay\` config
3. **Limit crawl scope** - Use \`max_depth\` and \`max_pages\`
4. **Use specific selectors** - More specific = faster extraction
5. **Enable headless mode** - Always use \`"headless": true\` in production
6. **Batch operations** - Use table extraction instead of multiple selectors
7. **Disable images & Use Eager Page Loading** - Set \`"block_images": true\` and \`"page_load_strategy": "eager"\` in \`js_config\` to stop waiting for images and stylesheets.
8. **Asynchronous & Concurrent Execution**:
   - The service processes requests targeting *different* domains asynchronously in parallel.
   - Requests targeting the *same* domain are queued and processed sequentially with an automated, randomized 1-2 second pause between them to respect server rate-limits and avoid IP blocks.

### Security Considerations

- **Rate Limiting**: Implement rate limiting in production environments
- **URL Validation**: Validate and sanitize input URLs
- **Resource Limits**: Set max timeout and page limits
- **Authentication**: Add API key authentication for production
- **CORS**: Configure CORS policies appropriately
- **Logging**: Monitor for abuse patterns
- **Sandboxing**: Run in containerized environment

### Rate Limiting Example

\`\`\`python
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

limiter = Limiter(
    app=app,
    key_func=get_remote_address,
    default_limits=["100 per hour"]
)

@app.route('/extract-js', methods=['POST'])
@limiter.limit("10 per minute")
def extract_js():
    # ...
\`\`\`

---

## API Summary

| Endpoint | Use Case | JavaScript | Pagination |
|----------|----------|------------|------------|
| \`/extract\` | Static HTML pages | ❌ | ❌ |
| \`/extract-js\` | Single JS-rendered page | ✅ | ❌ |
| \`/crawl\` | Multi-page static crawl | ❌ | Link following |
| \`/crawl-js\` | Multi-page JS crawl | ✅ | Link following |
| \`/extract-paginated\` | Numbered pages | ✅ | URL or Click |
| \`/analyze\` | Page structure analysis | ❌ | ❌ |

---

## Contributing

Contributions welcome! Please:

1. Test changes thoroughly
2. Follow existing code style
3. Add documentation for new features
4. Update this README

---

## License

MIT License - Free to use in your projects!

---

## Support

For issues, questions, or feature requests, please open an issue on the project repository.

---

## Changelog

### Version 2.1
- Added domain-specific rate limiting and sequential queueing (1-2s randomized pauses) for concurrent requests
- Enabled parallel asynchronous processing for requests targeting different domains
- Added \`block_images\` browser configuration in \`js_config\` to speed up page rendering
- Added \`page_load_strategy\` option in \`js_config\` (e.g. \`"eager"\`) for faster DOM-interactive loading
- Fixed browser session isolation so concurrent JS-rendering runs do not terminate each other's Chrome processes

### Version 2.0
- Added iframe support for embedded content
- Enhanced click handling with automatic overlay dismissal
- Improved pagination with content change detection
- Added support for Next.js/Nuxt dynamic class names
- Better error messages and debug logging
- Fixed table extraction with @ attribute syntax

### Version 1.0
- Initial release
- Basic extraction strategies
- JavaScript rendering support
- Multi-page crawling
- Page analysis`}];function P2(e){if(!e||typeof e!="object")return{name:"Untitled Project",slug:"untitled-project",description:null,githubUrl:null,demoUrl:null,technologies:[],topics:[],status:null,featured:!1,stars:null,lastUpdated:null};const t=typeof e.name=="string"&&e.name.trim()?e.name.trim():typeof e.slug=="string"&&e.slug.trim()?e.slug.trim():"Untitled Project",n=typeof e.slug=="string"&&e.slug.trim()?e.slug.trim():t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""),r=typeof e.description=="string"&&e.description.trim()?e.description.trim():null,i=typeof e.githubUrl=="string"&&e.githubUrl.trim()?e.githubUrl.trim():null,s=typeof e.demoUrl=="string"&&e.demoUrl.trim()?e.demoUrl.trim():null,o=Array.isArray(e.technologies)?e.technologies.filter(p=>typeof p=="string"&&p.trim()).map(p=>p.trim()):[],a=Array.isArray(e.topics)?e.topics.filter(p=>typeof p=="string"&&p.trim()).map(p=>p.trim()):[],l=typeof e.status=="string"&&e.status.trim()?e.status.trim().toLowerCase():null,u=!!e.featured,d=typeof e.stars=="number"&&!isNaN(e.stars)?e.stars:null,f=typeof e.lastUpdated=="string"&&e.lastUpdated.trim()?e.lastUpdated.trim():null;return{name:t,slug:n,description:r,githubUrl:i,demoUrl:s,technologies:o,topics:a,status:l,featured:u,stars:d,lastUpdated:f}}function T2(e,t=!0){if(!e)return null;try{const n=new Date(e);if(isNaN(n.getTime()))return null;const r=n.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return t?`Updated ${r}`:r}catch{return null}}function Zs(e=lg){return Array.isArray(e)?[...e.map(P2)].sort((n,r)=>{const i=n.lastUpdated?new Date(n.lastUpdated).getTime():0,s=r.lastUpdated?new Date(r.lastUpdated).getTime():0,o=isNaN(i)?0:i;return(isNaN(s)?0:s)-o}):[]}function _2(e=2,t=lg){const n=Zs(t),r=n.filter(s=>s.featured);if(r.length>=e)return r.slice(0,e);const i=n.filter(s=>!s.featured);return[...r,...i].slice(0,e)}Zs();function Ec({project:e,animate:t=!0}){if(!e)return null;const n=T2(e.lastUpdated),r=Array.isArray(e.technologies)&&e.technologies.length>0,i=Array.isArray(e.topics)&&e.topics.length>0,s=!!(e.githubUrl||e.demoUrl),o=u=>{switch(u==null?void 0:u.toLowerCase()){case"active":return"#50fa7b";case"maintained":return"#8be9fd";case"in-progress":return"var(--color-accent)";case"archived":return"var(--text-dim)";default:return"var(--color-accent)"}},a=t?oi.div:"div",l=t?{layout:!0,initial:{opacity:0,scale:.94,y:16},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.94,y:16},transition:{opacity:{duration:.25,ease:"easeInOut"},scale:{duration:.25,ease:"easeInOut"},y:{duration:.25,ease:"easeInOut"},layout:{type:"spring",damping:26,stiffness:280}}}:{};return c.jsxs(a,{...l,className:"card-glass project-card",style:{padding:"28px",display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"20px",position:"relative",height:"100%"},children:[c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px",marginBottom:"16px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[c.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"8px",backgroundColor:"color-mix(in srgb, var(--color-accent) 15%, transparent)",border:"1px solid color-mix(in srgb, var(--color-accent) 40%, transparent)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:c.jsx(Eh,{size:20,color:"var(--color-accent)"})}),e.status&&c.jsxs("span",{className:"mono",style:{fontSize:"11px",display:"inline-flex",alignItems:"center",gap:"6px",textTransform:"capitalize",color:"var(--text-heading)",padding:"3px 10px",borderRadius:"var(--radius-full)",backgroundColor:"color-mix(in srgb, var(--color-panel) 60%, transparent)",border:"1px solid var(--border-muted)"},children:[c.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",backgroundColor:o(e.status),boxShadow:`0 0 6px ${o(e.status)}`}}),e.status]})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.stars!==null&&e.stars>0&&c.jsxs("span",{className:"mono",style:{fontSize:"11px",color:"var(--text-dim)",display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"var(--radius-full)",background:"color-mix(in srgb, var(--color-panel) 40%, transparent)"},children:[c.jsx(Ux,{size:12,color:"var(--color-accent)",fill:"var(--color-accent)"}),e.stars]}),e.featured&&c.jsxs("span",{className:"mono",style:{fontSize:"10.5px",textTransform:"uppercase",fontWeight:700,color:"var(--color-accent)",letterSpacing:"0.05em",backgroundColor:"color-mix(in srgb, var(--color-accent) 15%, transparent)",border:"1px solid color-mix(in srgb, var(--color-accent) 35%, transparent)",padding:"2px 8px",borderRadius:"var(--radius-full)",display:"inline-flex",alignItems:"center",gap:"4px"},children:[c.jsx(pi,{size:11}),"Featured"]})]})]}),c.jsx("h3",{style:{fontSize:"19px",fontWeight:700,marginBottom:"10px",color:"var(--text-heading)",lineHeight:"1.3"},children:e.name}),n&&c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"12px",color:"var(--text-dim)",marginBottom:"14px"},className:"mono",children:[c.jsx(jh,{size:13,color:"var(--color-accent)"}),c.jsx("span",{children:n})]}),e.description&&c.jsx("p",{style:{fontSize:"14px",color:"var(--text-body)",lineHeight:"1.65",marginBottom:"18px"},children:e.description})]}),c.jsxs("div",{children:[r&&c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:i||s?"16px":"0"},children:e.technologies.map(u=>c.jsxs("span",{className:"badge-pill",style:{fontSize:"11px",padding:"3px 9px"},children:[c.jsx("span",{className:"dot"}),u]},u))}),i&&c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"5px",marginBottom:s?"20px":"0"},children:e.topics.map(u=>c.jsxs("span",{className:"mono",style:{fontSize:"10px",color:"var(--text-dim)",backgroundColor:"color-mix(in srgb, var(--color-bg) 60%, var(--color-panel) 40%)",padding:"2px 7px",borderRadius:"4px",border:"1px solid var(--border-subtle)"},children:["#",u]},u))}),s&&c.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px",marginTop:"4px"},children:[e.githubUrl&&c.jsxs("a",{href:e.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",style:{flex:1,minWidth:"130px",fontSize:"12.5px",padding:"8px 14px"},children:[c.jsx(nr,{size:15}),c.jsx("span",{children:"GitHub"})]}),e.demoUrl&&c.jsxs("a",{href:e.demoUrl,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",style:{flex:1,minWidth:"130px",fontSize:"12.5px",padding:"8px 14px"},children:[c.jsx(hn,{size:15}),c.jsx("span",{children:"Live Demo"})]})]})]})]})}function np({onNavigate:e}){const t=_2(2),n=kh[0];return c.jsx("div",{className:"home-page",children:c.jsxs("div",{className:"grid-2col",children:[c.jsx("div",{style:{position:"sticky",top:"calc(var(--nav-height) + 24px)"},children:c.jsxs("div",{className:"card-glass",style:{padding:"32px 28px",borderLeft:"3px solid var(--color-accent)"},children:[c.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"4px 12px",borderRadius:"var(--radius-full)",background:"color-mix(in srgb, var(--color-accent) 15%, transparent)",border:"1px solid color-mix(in srgb, var(--color-accent) 40%, transparent)",marginBottom:"16px"},children:[c.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#50fa7b",boxShadow:"0 0 8px #50fa7b"}}),c.jsx("span",{className:"mono",style:{fontSize:"11.5px",color:"var(--text-heading)",fontWeight:600},children:"Open to New Opportunities"})]}),c.jsx("h1",{style:{fontSize:"32px",fontWeight:800,letterSpacing:"-0.03em",marginBottom:"12px"},children:B.name}),c.jsx("h2",{style:{fontSize:"16px",fontWeight:500,color:"var(--text-muted)",lineHeight:"1.5",marginBottom:"24px"},children:B.tagline}),c.jsxs("div",{style:{borderTop:"1px solid var(--border-muted)",paddingTop:"20px"},children:[c.jsx("p",{className:"mono",style:{fontSize:"11.5px",textTransform:"uppercase",color:"var(--text-dim)",marginBottom:"12px",letterSpacing:"0.05em"},children:"Section Navigator"}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[c.jsxs("a",{href:"#summary",className:"btn btn-ghost",style:{justifyContent:"flex-start",padding:"8px 12px",fontSize:"13px"},children:[c.jsx(Da,{size:15,color:"var(--color-accent)"}),c.jsx("span",{children:"Executive Summary"})]}),c.jsxs("a",{href:"#experience",className:"btn btn-ghost",style:{justifyContent:"flex-start",padding:"8px 12px",fontSize:"13px"},children:[c.jsx(Ra,{size:15,color:"var(--color-accent)"}),c.jsx("span",{children:"Work Experience"})]}),c.jsxs("a",{href:"#projects",className:"btn btn-ghost",style:{justifyContent:"flex-start",padding:"8px 12px",fontSize:"13px"},children:[c.jsx(Zr,{size:15,color:"var(--color-accent)"}),c.jsx("span",{children:"Featured Projects"})]}),c.jsxs("a",{href:"#blog",className:"btn btn-ghost",style:{justifyContent:"flex-start",padding:"8px 12px",fontSize:"13px"},children:[c.jsx(bs,{size:15,color:"var(--color-accent)"}),c.jsx("span",{children:"Latest Publications"})]})]})]}),c.jsxs("div",{style:{marginTop:"28px",display:"flex",gap:"10px"},children:[c.jsx("button",{onClick:()=>e&&e("contact"),className:"btn btn-primary",style:{flex:1,fontSize:"13px"},children:"Get In Touch"}),c.jsx("button",{onClick:()=>e&&e("portfolio"),className:"btn btn-outline",style:{flex:1,fontSize:"13px"},children:"Portfolio"})]})]})}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:[c.jsxs("section",{id:"summary",className:"card-glass",style:{padding:"36px 32px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"20px"},children:[c.jsx(Da,{size:22,color:"var(--color-accent)"}),c.jsx("h2",{style:{fontSize:"22px",fontWeight:700},children:"Executive Summary"})]}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",color:"var(--text-body)",fontSize:"15px",lineHeight:"1.7"},children:vh.paragraphs.map((r,i)=>c.jsx("p",{children:r},i))})]}),c.jsxs("section",{id:"experience",style:{display:"flex",flexDirection:"column",gap:"24px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[c.jsx(Ra,{size:22,color:"var(--color-accent)"}),c.jsx("h2",{style:{fontSize:"22px",fontWeight:700},children:"Experience"})]}),c.jsx("span",{className:"mono",style:{fontSize:"12px",color:"var(--text-dim)"},children:"13+ Years in Tech & Enterprise Support"})]}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:xh.map(r=>c.jsxs("div",{className:"card-glass",style:{padding:"28px"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"8px",marginBottom:"12px"},children:[c.jsxs("div",{children:[c.jsx("h3",{style:{fontSize:"18px",color:"var(--text-heading)",fontWeight:700},children:r.role}),c.jsxs("a",{href:r.companyUrl,target:"_blank",rel:"noopener noreferrer",style:{color:"var(--color-accent)",textDecoration:"none",fontSize:"14px",fontWeight:600,display:"inline-flex",alignItems:"center",gap:"4px",marginTop:"2px"},children:[r.company,c.jsx(hn,{size:12})]})]}),c.jsx("span",{className:"mono",style:{fontSize:"12px",padding:"4px 10px",borderRadius:"var(--radius-full)",backgroundColor:"color-mix(in srgb, var(--color-panel) 60%, transparent)",border:"1px solid var(--border-muted)",color:"var(--text-heading)"},children:r.period})]}),c.jsx("p",{style:{color:"var(--text-body)",fontSize:"14.5px",lineHeight:"1.65",marginBottom:"20px"},children:r.description}),c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:r.skills.map(i=>c.jsxs("span",{className:"badge-pill",children:[c.jsx("span",{className:"dot"}),i]},i))})]},r.id))})]}),c.jsxs("section",{id:"projects",style:{display:"flex",flexDirection:"column",gap:"24px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[c.jsx(Zr,{size:22,color:"var(--color-accent)"}),c.jsx("h2",{style:{fontSize:"22px",fontWeight:700},children:"Featured Projects"})]}),c.jsxs("button",{onClick:()=>e&&e("portfolio"),className:"btn btn-outline",style:{padding:"6px 14px",fontSize:"12px"},children:[c.jsx("span",{children:"View All Projects"}),c.jsx(Vu,{size:14})]})]}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"20px"},children:t.map(r=>c.jsx(Ec,{project:r,animate:!1},r.slug||r.name))})]}),c.jsxs("section",{id:"blog",style:{display:"flex",flexDirection:"column",gap:"24px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[c.jsx(bs,{size:22,color:"var(--color-accent)"}),c.jsx("h2",{style:{fontSize:"22px",fontWeight:700},children:"Latest Blog Post"})]}),c.jsxs("button",{onClick:()=>e&&e("blog"),className:"btn btn-outline",style:{padding:"6px 14px",fontSize:"12px"},children:[c.jsx("span",{children:"All Posts"}),c.jsx(Vu,{size:14})]})]}),c.jsxs("div",{className:"card-glass",style:{padding:"28px"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[c.jsxs("span",{className:"mono",style:{fontSize:"12px",color:"var(--color-accent)"},children:[n.publication," • ",n.readTime]}),c.jsx("span",{className:"mono",style:{fontSize:"12px",color:"var(--text-dim)"},children:n.date})]}),c.jsx("h3",{style:{fontSize:"19px",fontWeight:700,marginBottom:"12px"},children:n.title}),c.jsx("p",{style:{fontSize:"14.5px",color:"var(--text-body)",lineHeight:"1.65",marginBottom:"20px"},children:n.summary}),c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginBottom:"20px"},children:n.tags.map(r=>c.jsxs("span",{className:"badge-pill",style:{fontSize:"11px"},children:["#",r]},r))}),c.jsxs("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",style:{fontSize:"13px"},children:[c.jsx("span",{children:"Read Full Article on Substack"}),c.jsx(hn,{size:14})]})]})]})]})]})})}const E2={ChefHat:Yv,Palette:Mx,Beer:$v,Flame:ql,Coffee:lx,Sparkles:pi,Scissors:zx,Gamepad2:xx},rp=e=>{if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;let t=e.replace(/^public\//,"/");return t.startsWith("/")||(t="/"+t),encodeURI(decodeURI(t))};function A2({videoUrl:e}){const t=j.useRef(null),n=e.replace(/\.mp4$/i,".webm"),r=e.replace(/\.webm$/i,".mp4");return j.useEffect(()=>{const i=t.current;if(!i)return;const s=i.canPlayType("video/webm"),o=s==="probably"||s==="maybe"?n:r;i.src=o,i.muted=!0,i.defaultMuted=!0,i.playsInline=!0,i.loop=!0,i.setAttribute("playsinline",""),i.setAttribute("muted",""),i.load();const a=i.play();return a!==void 0&&a.catch(()=>{}),()=>{try{i.pause(),i.src="",i.load()}catch{}}},[e,n,r]),c.jsx("video",{ref:t,className:"preview-media preview-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"auto"})}function cg({items:e=[]}){const[t,n]=j.useState(-1),r=j.useRef({x:null,y:null}),i=p=>{n(p)},s=()=>{typeof window<"u"&&!window.matchMedia("(hover: none)").matches&&n(-1)},o=p=>{n(p)},a=p=>{t===p&&n(-1)},l=p=>{n(y=>y===p?-1:p)},u=(p,y)=>{if(p.key==="Enter"||p.key===" ")p.preventDefault(),l(y);else if(p.key==="ArrowRight"){p.preventDefault();const v=(y+1)%e.length;n(v)}else if(p.key==="ArrowLeft"){p.preventDefault();const v=(y-1+e.length)%e.length;n(v)}},d=p=>{p.touches.length&&(r.current={x:p.touches[0].clientX,y:p.touches[0].clientY})},f=p=>{const{x:y,y:v}=r.current;if(y===null||v===null||!p.changedTouches.length)return;const x=p.changedTouches[0].clientX-y,b=p.changedTouches[0].clientY-v;if(Math.abs(x)>40&&Math.abs(x)>Math.abs(b)*1.2){const m=t<0?0:t,h=x<0?Math.min(e.length-1,m+1):Math.max(0,m-1);n(h)}r.current={x:null,y:null}};return c.jsx("div",{className:"previews-accordion",role:"region","aria-label":"Interactive Interests and Creative Pursuits Previews",onMouseLeave:s,onTouchStart:d,onTouchEnd:f,children:e.map((p,y)=>{const v=E2[p.icon]||pi,x=t===y,b=rp(p.image||p.poster),m=rp(p.video||(p.mediaType==="video"?p.mediaSrc:"")),h=!!b,g=!!m;return c.jsxs("div",{tabIndex:0,role:"button","aria-expanded":x,"aria-label":p.name,className:`preview-bar-panel ${x?"is-active":""}`,onMouseEnter:()=>i(y),onFocus:()=>o(y),onBlur:()=>a(y),onClick:()=>l(y),onKeyDown:S=>u(S,y),children:[!h&&!g&&c.jsxs("div",{className:"preview-ph",children:[c.jsx(v,{size:28,color:"var(--color-accent)"}),c.jsxs("span",{className:"preview-ph-title",children:["[ ",p.name," ]"]})]}),h&&c.jsx("img",{src:b,alt:p.name,className:"preview-media preview-image",loading:"lazy"}),g&&x&&c.jsx(A2,{videoUrl:m}),(h||g)&&c.jsx("div",{className:"preview-overlay"}),p.tag&&c.jsx("div",{className:"preview-tag",children:p.tag}),c.jsxs("div",{className:"preview-label",children:[c.jsxs("div",{className:"preview-title",children:[c.jsx(v,{size:16,className:"preview-ico"}),c.jsx("span",{children:p.name})]}),c.jsx("p",{className:"preview-desc",children:p.desc})]})]},p.id||p.name||y)})})}const ip=[ox,Zr,px,Gv];function M2(){return c.jsxs("div",{style:{maxWidth:"960px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"48px"},children:[c.jsxs("div",{className:"card-glass",style:{padding:"40px 36px",borderLeft:"4px solid var(--color-accent)"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"12px"},children:[c.jsx(Lh,{size:26,color:"var(--color-accent)"}),c.jsx("h1",{style:{fontSize:"32px",fontWeight:800},children:"About Me"})]}),c.jsx("p",{style:{fontSize:"17px",color:"var(--text-heading)",fontWeight:500,lineHeight:"1.6"},children:"Application support engineer, automation specialist, and lifelong builder obsessed with technical problem solving and modern AI workflows."})]}),c.jsxs("div",{className:"card-glass",style:{padding:"36px"},children:[c.jsxs("h2",{style:{fontSize:"20px",fontWeight:700,marginBottom:"20px",display:"flex",alignItems:"center",gap:"10px"},children:[c.jsx(pi,{size:20,color:"var(--color-accent)"}),"My Story & Background"]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"18px",fontSize:"15.5px",lineHeight:"1.75",color:"var(--text-body)"},children:[c.jsx("p",{children:"Hello! I’m an application support and automation specialist with over ten years of experience helping SaaS teams work smarter through better systems, data, and process design. In recent years, I’ve focused on bringing AI and automation into day-to-day operations, building tools that save time, reduce manual work, and make customer support more efficient and human at the same time."}),c.jsx("p",{children:"Outside of my career, I’m a man of many talents and interests. I cook, I draw, I brew beer, I hike and do martial arts, play video games and watch anime, I ferment and pickle, I roast coffee, I sharpen knives, I do it all. My motto is if something sounds interesting, it’s worth trying out."}),c.jsx("p",{children:"I’m also passionate about continual learning and personal development. Who I am today is a benchmark for who I will be tomorrow, and I’m never satisfied with simply staying in one place. If you want someone who will always look at how to do things better and how to learn new tech, I’m your guy!"})]})]}),c.jsxs("div",{className:"card-glass",style:{padding:"36px"},children:[c.jsxs("h2",{style:{fontSize:"20px",fontWeight:700,marginBottom:"24px",display:"flex",alignItems:"center",gap:"10px"},children:[c.jsx(_h,{size:20,color:"var(--color-accent)"}),"Technical Stack & Toolkit"]}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(380px, 1fr))",gap:"24px"},children:wh.map((e,t)=>{const n=ip[t%ip.length];return c.jsxs("div",{style:{backgroundColor:"color-mix(in srgb, var(--color-bg) 70%, var(--color-panel) 30%)",border:"1px solid var(--border-muted)",borderRadius:"var(--radius-md)",padding:"22px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"14px"},children:[c.jsx(n,{size:18,color:"var(--color-accent)"}),c.jsx("h3",{style:{fontSize:"15px",fontWeight:700,color:"var(--text-heading)"},children:e.name})]}),c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:e.items.map(r=>c.jsxs("span",{className:"badge-pill",children:[c.jsx("span",{className:"dot"}),r]},r))})]},e.name)})})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"24px"},children:[c.jsxs("div",{className:"card-glass",style:{padding:"32px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"16px"},children:[c.jsx($x,{size:22,color:"var(--color-accent)"}),c.jsx("h3",{style:{fontSize:"18px",fontWeight:700},children:"Technical Expertise"})]}),c.jsx("p",{style:{fontSize:"14.5px",lineHeight:"1.7",color:"var(--text-body)"},children:"Proficient in technical support, scripting and programming, and AI integration development. I combine deep knowledge in frontend and backend development with relational data pipelines and local/cloud LLMs to solve enterprise customer issues and drive down Mean Time to Resolution (mTTR)."})]}),c.jsxs("div",{className:"card-glass",style:{padding:"32px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"16px"},children:[c.jsx(bx,{size:22,color:"var(--color-accent)"}),c.jsx("h3",{style:{fontSize:"18px",fontWeight:700},children:"Problem Solving & Empathy"})]}),c.jsx("p",{style:{fontSize:"14.5px",lineHeight:"1.7",color:"var(--text-body)"},children:"I utilize customer empathy to document problems thoroughly, combining clear documentation with technical knowledge to resolve issues quickly and efficiently while ensuring root causes are eradicated so issues do not recur. If the right tool doesn't exist, I build it."})]})]}),c.jsxs("div",{className:"card-glass",style:{padding:"36px"},children:[c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginBottom:"8px"},children:[c.jsxs("h2",{style:{fontSize:"20px",fontWeight:700,display:"flex",alignItems:"center",gap:"10px"},children:[c.jsx(ql,{size:20,color:"var(--color-accent)"}),"Interests & Creative Pursuits"]}),c.jsx("p",{style:{fontSize:"14px",color:"var(--text-muted)"},children:'"If something sounds interesting, it’s worth trying out." Hover or tap each panel to expand details, view screenshots, and watch video clips.'})]}),c.jsx(cg,{items:Sh})]})]})}function L2({projects:e,showFilters:t=!0,showSearch:n=!0,title:r="What I've Been Building",subtitle:i="Recent projects, experiments, and tools I'm actively building."}){const s=j.useMemo(()=>e||Zs(),[e]),[o,a]=j.useState("All"),[l,u]=j.useState(""),d=j.useMemo(()=>{const p=["All"],v=["AI","Python","JavaScript","Automation","MCP","RAG"].filter(x=>{const b=x.toLowerCase();return s.some(m=>m.technologies.some(h=>h.toLowerCase().includes(b))||m.topics.some(h=>h.toLowerCase().includes(b)))});return[...p,...v]},[s]),f=j.useMemo(()=>s.filter(p=>{let y=!0;if(o!=="All"){const x=o.toLowerCase(),b=p.technologies.some(g=>g.toLowerCase().includes(x)),m=p.topics.some(g=>g.toLowerCase().includes(x)),h=p.name.toLowerCase().includes(x);y=b||m||h}let v=!0;if(l.trim()){const x=l.toLowerCase().trim(),b=p.name.toLowerCase().includes(x),m=(p.description||"").toLowerCase().includes(x),h=p.technologies.some(S=>S.toLowerCase().includes(x)),g=p.topics.some(S=>S.toLowerCase().includes(x));v=b||m||h||g}return y&&v}),[s,o,l]);return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",width:"100%"},children:[c.jsxs("div",{className:"card-glass",style:{padding:"36px 32px",borderLeft:"4px solid var(--color-accent)"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"10px"},children:[c.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",backgroundColor:"color-mix(in srgb, var(--color-accent) 15%, transparent)",display:"flex",alignItems:"center",justifyContent:"center"},children:c.jsx(Zr,{size:22,color:"var(--color-accent)"})}),c.jsx("h2",{style:{fontSize:"28px",fontWeight:800,letterSpacing:"-0.02em"},children:r})]}),i&&c.jsx("p",{style:{fontSize:"15.5px",color:"var(--text-heading)",lineHeight:"1.6",maxWidth:"820px"},children:i}),(t||n)&&s.length>0&&c.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:"16px",marginTop:"24px",paddingTop:"20px",borderTop:"1px solid var(--border-subtle)"},children:[t&&d.length>1&&c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:d.map(p=>{const y=o===p;return c.jsx(oi.button,{onClick:()=>a(p),whileHover:{scale:1.03},whileTap:{scale:.97},transition:{duration:.15},style:{padding:"6px 14px",borderRadius:"var(--radius-full)",fontFamily:"var(--font-mono)",fontSize:"12px",fontWeight:600,cursor:"pointer",border:y?"1px solid var(--color-accent)":"1px solid var(--border-muted)",backgroundColor:y?"var(--color-accent)":"color-mix(in srgb, var(--color-bg) 60%, transparent)",color:y?"var(--color-bg)":"var(--text-muted)",transition:"background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease"},children:p},p)})}),n&&c.jsxs("div",{style:{position:"relative",minWidth:"220px",flex:"1 1 200px",maxWidth:"320px"},children:[c.jsx(Ah,{size:14,color:"var(--text-dim)",style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)"}}),c.jsx("input",{type:"text",placeholder:"Filter projects or tech...",value:l,onChange:p=>u(p.target.value),className:"form-control",style:{padding:"7px 12px 7px 34px",fontSize:"12.5px",borderRadius:"var(--radius-full)"}})]})]})]}),f.length>0?c.jsx(oi.div,{layout:!0,style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"24px"},children:c.jsx(Yl,{mode:"popLayout",children:f.map(p=>c.jsx(Ec,{project:p,animate:!0},p.slug||p.name))})}):c.jsxs("div",{className:"card-glass",style:{padding:"48px 24px",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:"14px"},children:[c.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"50%",backgroundColor:"color-mix(in srgb, var(--color-accent) 15%, transparent)",display:"flex",alignItems:"center",justifyContent:"center"},children:c.jsx(Eh,{size:24,color:"var(--color-accent)"})}),c.jsx("h3",{style:{fontSize:"18px",fontWeight:700},children:"No Projects Found"}),c.jsx("p",{style:{fontSize:"14px",color:"var(--text-muted)",maxWidth:"420px"},children:l||o!=="All"?'No projects match your active search filter. Try selecting "All" or clearing the search.':"There are no projects available in the feed right now."}),(l||o!=="All")&&c.jsx("button",{onClick:()=>{a("All"),u("")},className:"btn btn-outline",style:{fontSize:"12.5px",padding:"6px 16px",marginTop:"6px"},children:"Reset Filters"})]})]})}function R2(){return c.jsxs("div",{style:{maxWidth:"1080px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"40px"},children:[c.jsx(L2,{title:"What I've Been Building",subtitle:"Recent projects, experiments, and tools I'm actively building. Automatically synced from GitHub."}),c.jsxs("div",{className:"card-glass",style:{padding:"32px",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:"16px"},children:[c.jsx("h3",{style:{fontSize:"20px",fontWeight:700},children:"Want to explore more open-source repositories?"}),c.jsx("p",{style:{fontSize:"14.5px",color:"var(--text-muted)",maxWidth:"540px"},children:"Check out my personal GitHub profile for additional experimental AI agents, scripts, and automation prototypes."}),c.jsxs("a",{href:B.socialLinks.github,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",style:{padding:"10px 24px"},children:[c.jsx(nr,{size:18}),c.jsx("span",{children:"View All Projects on GitHub"})]})]})]})}const mr=[{id:"post-0",title:"My Full Job Search Workflow",link:"https://dereckbearsong.substack.com/p/my-full-job-search-workflow",pubDate:"Thu, 27 Aug 2026 15:26:21 GMT",creator:"Dereck Bearsong",image:"https://substackcdn.com/image/fetch/$s_!EOpM!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd5939338-9885-44f5-a91e-d7e144bad215_1076x733.png",snippet:"How I process 2000 jobs overnight to find the best fit. A complete breakdown of autonomous filtering and pipeline execution.",readTime:"12 min read",tags:["Job Search","Automation"]},{id:"post-1",title:"How I do my Job Search in the Current Market",link:"https://dereckbearsong.substack.com/p/how-i-do-my-job-search-in-the-current",pubDate:"Fri, 13 Mar 2026 15:02:43 GMT",creator:"Dereck Bearsong",image:"https://substackcdn.com/image/fetch/$s_!R5ho!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F63472cfd-490f-4987-8d64-6c6d07d734dd_1248x832.png",snippet:"How do I survive in the day-to-day while searching for work in a tough market. Tactical routines and tooling.",readTime:"12 min read",tags:["Job Search","Career Strategy"]},{id:"post-2",title:"The Vilification of AI Art",link:"https://dereckbearsong.substack.com/p/the-vilification-of-ai-art",pubDate:"Thu, 05 Mar 2026 18:55:31 GMT",creator:"Dereck Bearsong",image:"https://substackcdn.com/image/fetch/$s_!2f_1!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F66d34a1d-e6f8-495c-89d3-647cff773e82_2280x3106.avif",snippet:"Examining cultural perception, creative ethics, and technological realities of generative AI art.",readTime:"11 min read",tags:["AI Art","Creative Tech"]},{id:"post-3",title:"Jira Intelligence Hub",link:"https://dereckbearsong.substack.com/p/jira-intelligence-hub",pubDate:"Fri, 05 Dec 2025 19:07:51 GMT",creator:"Dereck Bearsong",image:"https://substackcdn.com/image/fetch/$s_!obzv!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc79f02c1-87dd-4dbe-9eec-0bf1a46662d2_1220x1080.png",snippet:"Connecting Jira Cloud directly to AI models with Model Context Protocol (MCP) and custom agent tools.",readTime:"13 min read",tags:["Jira Cloud","AI & MCP"]},{id:"post-4",title:"The Job Search Automation workflow - V2",link:"https://dereckbearsong.substack.com/p/the-job-search-automation-workflow",pubDate:"Fri, 12 Sep 2025 17:38:45 GMT",creator:"Dereck Bearsong",image:"https://substackcdn.com/image/fetch/$s_!Jz2W!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc241c090-1fa4-4dc3-ae91-478799fb1b60_718x743.png",snippet:"Second iteration of the automated job hunting pipeline integrating n8n webhooks with multi-LLM scoring.",readTime:"5 min read",tags:["Job Search","Automation","n8n"]},{id:"post-5",title:"The Automated Job Search Step 1",link:"https://dereckbearsong.substack.com/p/the-automated-job-search-step-1",pubDate:"Wed, 20 Aug 2025 20:18:43 GMT",creator:"Dereck Bearsong",image:"https://substackcdn.com/image/fetch/$s_!VXDo!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fad4c4845-4e64-47bc-8557-8da29f9e43e9_2464x540.png",snippet:"Sourcing and processing the data: setting up scrapers, API endpoints, and clean data structures.",readTime:"13 min read",tags:["Job Search","Automation"]},{id:"post-6",title:"The Automated Job Search Prototype",link:"https://dereckbearsong.substack.com/p/the-automated-job-search-prototype",pubDate:"Mon, 18 Aug 2025 18:33:12 GMT",creator:"Dereck Bearsong",image:"https://substackcdn.com/image/fetch/$s_!2dX3!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3d3815c6-e7cc-4af7-b623-0b9d300e5664_1292x326.png",snippet:"Proof of concept architecture: building out an automation platform in n8n for filtering opportunities.",readTime:"8 min read",tags:["Job Search","Prototypes"]},{id:"post-7",title:"The start of my automated job search platform",link:"https://dereckbearsong.substack.com/p/the-start-of-my-automated-job-search",pubDate:"Tue, 12 Aug 2025 18:08:06 GMT",creator:"Dereck Bearsong",image:"https://substackcdn.com/image/fetch/$s_!Qwhg!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F467f369b-e283-461c-87b5-d5ec097a1aa6_2464x540.png",snippet:"Origins of the automated search project: defining goals, API requirements, and system design.",readTime:"5 min read",tags:["Job Search","System Design"]},{id:"post-8",title:"RSS feed to NotebookLM n8n automation",link:"https://dereckbearsong.substack.com/p/rss-feed-to-notebooklm-n8n-automation",pubDate:"Wed, 06 Aug 2025 13:01:13 GMT",creator:"Dereck Bearsong",image:"https://substackcdn.com/image/fetch/$s_!VCW6!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd5167365-fddf-4dff-8f34-90868aaf68c2_2052x1592.png",snippet:"Automating the ingestion of RSS feeds into Google NotebookLM using n8n workflows for research.",readTime:"5 min read",tags:["n8n","Workflows","Automation"]},{id:"post-9",title:"Beginnings",link:"https://dereckbearsong.substack.com/p/beginnings",pubDate:"Mon, 04 Aug 2025 14:03:04 GMT",creator:"Dereck Bearsong",image:"https://substackcdn.com/image/fetch/$s_!W9HN!,w_256,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F78cea8f8-e1af-48b6-a773-59a2b71b44f4_320x320.jpeg",snippet:"Welcome to The Wondrous Mind of Dereck Bearsong — exploring tech, AI, and continuous learning.",readTime:"3 min read",tags:["Substack","Introduction"]}];function D2(){const[e,t]=j.useState(mr),[n,r]=j.useState({title:"The Wondrous Mind of Dereck Bearsong",description:"Join me on a journey through my career, my hobbies, my education, and general tomfoolery.",link:"https://dereckbearsong.substack.com",image:"https://substackcdn.com/image/fetch/$s_!W9HN!,w_256,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F78cea8f8-e1af-48b6-a773-59a2b71b44f4_320x320.jpeg",totalPosts:10}),[i,s]=j.useState(!0),[o,a]=j.useState(!1),[l,u]=j.useState(""),[d,f]=j.useState("All"),[p,y]=j.useState(9),[v,x]=j.useState(!1),b=k=>{if(!k)return"Recent";try{const M=new Date(k);return isNaN(M.getTime())?k:M.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}catch{return k}},m=async(k=!1)=>{var A;k?a(!0):s(!0);const M="https://dereckbearsong.substack.com/feed";try{const F=await fetch("/api/substack-feed").catch(()=>null);if(F&&F.ok){const ae=await F.json();if(ae.success&&ae.data&&((A=ae.data.posts)==null?void 0:A.length)>0){t(ae.data.posts),ae.data.channel&&r(ae.data.channel),s(!1),a(!1);return}}const Ee=`https://feed2json.org/convert?url=${encodeURIComponent(M)}`,Ae=await fetch(Ee).catch(()=>null);if(Ae&&Ae.ok){const ae=await Ae.json();if(ae.items&&ae.items.length>0){const sr=ae.items.map((ie,X)=>{var Qt;const _=mr[X%mr.length],R=ie.content_html||ie.content_text||"",D=R.match(/<img[^>]+src="([^">]+)"/),q=ie.image||ie.banner_image||(D==null?void 0:D[1])||_.image,Y=(ie.summary||R).replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim(),vn=R.replace(/<[^>]*>/g," ").split(/\s+/).filter(Boolean).length,lt=Math.max(1,Math.ceil(vn/220))+" min read",ct=ie.title||_.title,ut=ct.toLowerCase().includes("job")?["Job Search","Automation"]:ct.toLowerCase().includes("jira")?["Jira Cloud","AI & MCP"]:ct.toLowerCase().includes("art")?["AI Art","Creative Tech"]:ct.toLowerCase().includes("n8n")?["n8n","Workflows"]:["Substack Article"];return{id:ie.guid||`post-${X}`,title:ct,link:ie.url||_.link,pubDate:ie.date_published||_.pubDate,creator:((Qt=ie.author)==null?void 0:Qt.name)||"Dereck Bearsong",image:q,snippet:Y.length>160?Y.slice(0,160)+"...":Y,readTime:lt,tags:ut}});t(sr),r(ie=>({...ie,title:ae.title||ie.title,description:ae.description||ie.description,totalPosts:sr.length})),s(!1),a(!1);return}}t(mr)}catch(F){console.warn("Feed fetch notice:",F.message),t(mr)}finally{s(!1),a(!1)}};j.useEffect(()=>{m()},[]);const h=j.useMemo(()=>{const k=new Set(["All"]);return e.forEach(M=>{var A;(A=M.tags)==null||A.forEach(F=>k.add(F))}),Array.from(k)},[e]),g=j.useMemo(()=>e.filter(k=>{var F,Ee;const M=k.title.toLowerCase().includes(l.toLowerCase())||k.snippet.toLowerCase().includes(l.toLowerCase())||((F=k.tags)==null?void 0:F.some(Ae=>Ae.toLowerCase().includes(l.toLowerCase()))),A=d==="All"||((Ee=k.tags)==null?void 0:Ee.includes(d));return M&&A}),[e,l,d]),S=j.useMemo(()=>g.slice(0,p),[g,p]),w=p<g.length,C=()=>{w&&y(k=>k+9)},T=()=>{navigator.clipboard.writeText("https://dereckbearsong.substack.com/feed"),x(!0),setTimeout(()=>x(!1),2200)};return c.jsxs("div",{className:"substack-widget-wrapper",style:{display:"flex",flexDirection:"column",gap:"32px"},children:[c.jsx("div",{className:"card-glass substack-header-card",style:{padding:"28px 32px",position:"relative",overflow:"hidden",border:"1px solid color-mix(in srgb, var(--color-accent) 25%, var(--border-muted))",background:"linear-gradient(145deg, color-mix(in srgb, var(--color-panel) 85%, transparent), color-mix(in srgb, var(--color-bg) 92%, transparent))"},children:c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"20px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"18px"},children:[c.jsxs("div",{style:{position:"relative"},children:[c.jsx("img",{src:n.image,alt:n.title,style:{width:"60px",height:"60px",borderRadius:"14px",objectFit:"cover",border:"2px solid var(--color-accent)",boxShadow:"0 6px 18px color-mix(in srgb, var(--color-accent) 25%, transparent)"}}),c.jsx("div",{style:{position:"absolute",bottom:"-3px",right:"-3px",backgroundColor:"#FF6719",color:"#fff",borderRadius:"50%",width:"20px",height:"20px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",fontWeight:900,boxShadow:"0 2px 4px rgba(0,0,0,0.3)",border:"2px solid var(--color-bg)"},title:"Substack Publication",children:"S"})]}),c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap",marginBottom:"2px"},children:[c.jsx("h2",{style:{fontSize:"20px",fontWeight:800,color:"var(--text-heading)",letterSpacing:"-0.02em"},children:n.title}),c.jsxs("span",{className:"badge-pill",style:{fontSize:"11px",padding:"2px 8px",backgroundColor:"color-mix(in srgb, #50fa7b 15%, transparent)",color:"#2bb352",border:"1px solid color-mix(in srgb, #50fa7b 30%, transparent)",display:"inline-flex",alignItems:"center",gap:"5px"},children:[c.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#50fa7b",display:"inline-block"}}),"Live Feed"]}),c.jsxs("span",{className:"mono",style:{fontSize:"11.5px",color:"var(--text-muted)"},children:[e.length," articles"]})]}),c.jsx("p",{style:{fontSize:"13.5px",color:"var(--text-muted)",maxWidth:"520px",lineHeight:"1.4"},children:n.description})]})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[c.jsxs("a",{href:`${n.link}/subscribe`,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",style:{padding:"9px 18px",fontSize:"13px",fontWeight:600,boxShadow:"0 4px 14px color-mix(in srgb, var(--color-accent) 25%, transparent)"},children:[c.jsx(ei,{size:14}),c.jsx("span",{children:"Subscribe"}),c.jsx(Bu,{size:14})]}),c.jsxs("button",{onClick:T,className:"btn btn-secondary",style:{padding:"9px 13px",fontSize:"12.5px"},title:"Copy RSS Feed URL",children:[v?c.jsx(Hl,{size:14,color:"#50fa7b"}):c.jsx(Ix,{size:14,color:"var(--color-accent)"}),c.jsx("span",{children:v?"Copied":"RSS"})]}),c.jsx("button",{onClick:()=>m(!0),className:"btn btn-secondary",style:{padding:"9px 11px"},title:"Refresh Feed",disabled:o,children:c.jsx(Rx,{size:14,className:o?"spin-anim":""})})]})]})}),c.jsx("div",{className:"card-glass",style:{padding:"14px 20px",display:"flex",flexDirection:"column",gap:"12px"},children:c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"16px",flexWrap:"wrap"},children:[c.jsxs("div",{style:{position:"relative",flex:"1 1 260px",minWidth:"220px"},children:[c.jsx(Ah,{size:15,color:"var(--text-muted)",style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",pointerEvents:"none"}}),c.jsx("input",{type:"text",placeholder:"Filter by title, topic, or keyword...",value:l,onChange:k=>{u(k.target.value),y(9)},className:"input-field",style:{paddingLeft:"36px",paddingRight:l?"32px":"12px",fontSize:"13px",height:"38px",width:"100%"}}),l&&c.jsx("button",{onClick:()=>u(""),style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",color:"var(--text-muted)",cursor:"pointer",fontSize:"12px",padding:"2px 6px"},children:"✕"})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap"},children:[c.jsxs("span",{style:{fontSize:"11.5px",color:"var(--text-muted)",display:"flex",alignItems:"center",gap:"4px"},children:[c.jsx(mx,{size:12,color:"var(--color-accent)"}),"Topic:"]}),h.map(k=>c.jsx("button",{onClick:()=>{f(k),y(9)},style:{fontSize:"11.5px",padding:"3px 10px",borderRadius:"var(--radius-full)",border:d===k?"1px solid var(--color-accent)":"1px solid var(--border-subtle)",background:d===k?"color-mix(in srgb, var(--color-accent) 20%, transparent)":"var(--bg-pill)",color:d===k?"var(--color-accent)":"var(--text-body)",fontWeight:d===k?600:400,cursor:"pointer",transition:"all 0.2s ease"},children:k},k))]})]})}),i?c.jsx("div",{className:"substack-image-gallery",children:[...Array(9)].map((k,M)=>c.jsx("div",{className:"gallery-image-frame skeleton-shimmer",style:{aspectRatio:"16 / 11",background:"#ffffff",padding:"3px",borderRadius:"0px"},children:c.jsx("div",{style:{width:"100%",height:"100%",background:"var(--border-subtle)",borderRadius:"0px"}})},M))}):S.length===0?c.jsxs("div",{className:"card-glass",style:{padding:"50px 20px",textAlign:"center"},children:[c.jsx("p",{style:{color:"var(--text-muted)",fontSize:"14px"},children:"No posts matching your search criteria."}),c.jsx("button",{onClick:()=>{u(""),f("All")},className:"btn btn-secondary",style:{marginTop:"12px",padding:"6px 16px",fontSize:"12px"},children:"Reset Filters"})]}):c.jsx("div",{className:"substack-image-gallery",children:c.jsx(Yl,{children:S.map((k,M)=>{var A;return c.jsxs(oi.a,{href:k.link,target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.25,delay:Math.min(M*.03,.25)},className:"gallery-image-frame",title:`${k.title} — Click to read on Substack`,children:[c.jsx("img",{src:k.image,alt:k.title,loading:"lazy",className:"gallery-actual-img",onError:F=>{F.currentTarget.src=n.image}}),c.jsxs("div",{className:"gallery-hover-overlay",children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"6px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",color:"var(--color-accent)",fontSize:"11px",fontFamily:"var(--font-mono)"},children:[c.jsx(jh,{size:11}),c.jsx("span",{children:b(k.pubDate)})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",color:"rgba(255,255,255,0.7)",fontSize:"10.5px",fontFamily:"var(--font-mono)"},children:[c.jsx(ix,{size:11}),c.jsx("span",{children:k.readTime})]})]}),c.jsxs("div",{children:[c.jsx("h3",{style:{fontSize:"13.5px",fontWeight:700,color:"#ffffff",lineHeight:"1.3",marginBottom:"6px",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:k.title}),c.jsx("p",{style:{fontSize:"11px",color:"rgba(255,255,255,0.8)",lineHeight:"1.4",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:k.snippet})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",borderTop:"1px solid rgba(255,255,255,0.15)",paddingTop:"6px"},children:[c.jsx("span",{style:{fontSize:"10px",color:"var(--color-accent)",background:"rgba(255, 155, 81, 0.18)",padding:"1px 6px",borderRadius:"0px",maxWidth:"90px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:((A=k.tags)==null?void 0:A[0])||"Article"}),c.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"3px",color:"#ffffff",fontSize:"10.5px",fontWeight:600},children:["Read",c.jsx(Bu,{size:12,color:"var(--color-accent)"})]})]})]})]},k.id||M)})})}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",marginTop:"4px"},children:[c.jsxs("button",{onClick:C,disabled:!w,className:`btn ${w?"btn-primary":"btn-ghost"}`,style:{padding:"10px 28px",fontSize:"13.5px",fontWeight:600,opacity:w?1:.45,cursor:w?"pointer":"not-allowed",border:w?"none":"1px solid var(--border-muted)",boxShadow:w?"0 4px 16px color-mix(in srgb, var(--color-accent) 25%, transparent)":"none"},children:[c.jsx("span",{children:w?`Show More (${g.length-p} remaining)`:"All Posts Loaded"}),w&&c.jsx(ex,{size:15})]}),c.jsxs("span",{className:"mono",style:{fontSize:"11.5px",color:"var(--text-muted)"},children:["Showing ",S.length," of ",g.length," posts"]})]}),c.jsxs("div",{className:"card-glass",style:{padding:"36px 28px",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:"16px",border:"1px solid color-mix(in srgb, var(--color-accent) 30%, var(--border-muted))",background:"linear-gradient(180deg, color-mix(in srgb, var(--color-panel) 60%, transparent), color-mix(in srgb, var(--color-bg) 80%, transparent))"},children:[c.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"50%",background:"color-mix(in srgb, var(--color-accent) 20%, transparent)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--color-accent)"},children:c.jsx(pi,{size:22})}),c.jsx("h3",{style:{fontSize:"22px",fontWeight:800,color:"var(--text-heading)",letterSpacing:"-0.02em"},children:"Subscribe to The Wondrous Mind of Dereck Bearsong"}),c.jsx("p",{style:{fontSize:"14px",color:"var(--text-muted)",maxWidth:"480px",lineHeight:"1.5"},children:"Get newly published breakdowns on AI engineering, MCP systems, and support workflows delivered directly to your inbox."}),c.jsxs("a",{href:`${n.link}/subscribe`,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",style:{padding:"10px 24px",fontSize:"13.5px",fontWeight:600},children:[c.jsx(ei,{size:15}),c.jsx("span",{children:"Subscribe on Substack"}),c.jsx(hn,{size:14})]})]})]})}function I2(){return c.jsxs("div",{style:{maxWidth:"1240px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"32px"},children:[c.jsxs("div",{className:"card-glass",style:{padding:"36px 32px",borderLeft:"4px solid var(--color-accent)",background:"linear-gradient(135deg, color-mix(in srgb, var(--color-panel) 80%, transparent), color-mix(in srgb, var(--color-bg) 95%, transparent))"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"10px"},children:[c.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"color-mix(in srgb, var(--color-accent) 15%, transparent)",display:"flex",alignItems:"center",justifyContent:"center"},children:c.jsx(bs,{size:22,color:"var(--color-accent)"})}),c.jsx("h1",{style:{fontSize:"30px",fontWeight:800,letterSpacing:"-0.02em"},children:"Blog & Publications"})]}),c.jsx("p",{style:{fontSize:"15.5px",color:"var(--text-heading)",lineHeight:"1.6",maxWidth:"800px"},children:"Thoughts, technical architecture breakdowns, and practical insights on AI engineering, MCP integration, automated job search workflows, and support operations."})]}),c.jsx(D2,{})]})}function N2(){const[e,t]=j.useState({name:"",email:"",subject:"",message:""}),[n,r]=j.useState({submitting:!1,success:!1,error:null}),[i,s]=j.useState(!1),o=()=>{navigator.clipboard.writeText(B.email),s(!0),setTimeout(()=>s(!1),2e3)},a=u=>{t({...e,[u.target.name]:u.target.value})},l=async u=>{u.preventDefault(),r({submitting:!0,success:!1,error:null});try{const d=B.formsubmitToken||B.email,f=await fetch(`https://formsubmit.co/ajax/${d}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:e.name,email:e.email,_subject:e.subject||`New Contact Message from ${e.name}`,message:e.message})}),p=await f.json();f.ok&&(p.success==="true"||p.success===!0)?(r({submitting:!1,success:!0,error:null}),t({name:"",email:"",subject:"",message:""})):r({submitting:!1,success:!1,error:p.message||"Failed to submit message. Please try again."})}catch(d){console.error("Contact submission error:",d),r({submitting:!1,success:!1,error:"Network error submitting message. Please try again."})}};return c.jsxs("div",{style:{maxWidth:"960px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"40px"},children:[c.jsxs("div",{className:"card-glass",style:{padding:"40px 36px",borderLeft:"4px solid var(--color-accent)"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"12px"},children:[c.jsx(ei,{size:26,color:"var(--color-accent)"}),c.jsx("h1",{style:{fontSize:"32px",fontWeight:800},children:"Contact Me"})]}),c.jsx("p",{style:{fontSize:"16px",color:"var(--text-heading)",lineHeight:"1.6"},children:"Interested in discussing AI engineering, support systems optimization, or potential collaborations? Let's connect."})]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(340px, 1fr))",gap:"28px",alignItems:"start"},children:[c.jsxs("div",{className:"card-glass",style:{padding:"36px"},children:[c.jsx("h2",{style:{fontSize:"20px",fontWeight:700,marginBottom:"16px",color:"var(--text-heading)"},children:"Get in Touch"}),c.jsx("p",{style:{fontSize:"14.5px",color:"var(--text-body)",lineHeight:"1.65",marginBottom:"28px"},children:"Feel free to reach out if you'd like to collaborate, discuss an opportunity, or have any technical questions."}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[c.jsxs("div",{style:{display:"flex",gap:"14px",alignItems:"flex-start"},children:[c.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"8px",backgroundColor:"color-mix(in srgb, var(--color-accent) 20%, transparent)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:c.jsx(ei,{size:18,color:"var(--color-accent)"})}),c.jsxs("div",{children:[c.jsx("p",{className:"mono",style:{fontSize:"11px",textTransform:"uppercase",color:"var(--text-muted)"},children:"Direct Email"}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginTop:"2px"},children:[c.jsx("a",{href:`mailto:${B.email}`,style:{color:"var(--text-heading)",textDecoration:"none",fontWeight:600,fontSize:"14.5px"},children:B.email}),c.jsx("button",{onClick:o,className:"btn btn-ghost",style:{padding:"4px 8px",fontSize:"11px"},title:"Copy Email",children:i?c.jsx(Hl,{size:13,color:"#50fa7b"}):c.jsx(Th,{size:13})})]})]})]}),c.jsxs("div",{style:{display:"flex",gap:"14px",alignItems:"flex-start"},children:[c.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"8px",backgroundColor:"color-mix(in srgb, var(--color-accent) 20%, transparent)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:c.jsx(Tx,{size:18,color:"var(--color-accent)"})}),c.jsxs("div",{children:[c.jsx("p",{className:"mono",style:{fontSize:"11px",textTransform:"uppercase",color:"var(--text-muted)"},children:"Location"}),c.jsxs("p",{style:{color:"var(--text-heading)",fontWeight:600,fontSize:"14.5px",marginTop:"2px"},children:[B.location," ",c.jsx("span",{style:{fontSize:"12px",color:"#50fa7b",fontWeight:500},children:"(Willing to relocate)"})]})]})]}),c.jsxs("div",{style:{borderTop:"1px solid var(--border-muted)",paddingTop:"20px",marginTop:"8px"},children:[c.jsx("p",{className:"mono",style:{fontSize:"11px",textTransform:"uppercase",color:"var(--text-muted)",marginBottom:"12px"},children:"Social Profiles"}),c.jsxs("div",{style:{display:"flex",gap:"12px"},children:[c.jsxs("a",{href:B.socialLinks.linkedin,target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",style:{flex:1,fontSize:"13px"},children:[c.jsx(Gl,{size:15,color:"var(--color-accent)"}),c.jsx("span",{children:"LinkedIn"})]}),c.jsxs("a",{href:B.socialLinks.github,target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",style:{flex:1,fontSize:"13px"},children:[c.jsx(nr,{size:15,color:"var(--color-accent)"}),c.jsx("span",{children:"GitHub"})]})]})]})]})]}),c.jsxs("div",{className:"card-glass",style:{padding:"36px"},children:[c.jsx("h2",{style:{fontSize:"20px",fontWeight:700,marginBottom:"20px",color:"var(--text-heading)"},children:"Send a Message"}),n.success?c.jsxs("div",{style:{backgroundColor:"rgba(80, 250, 123, 0.1)",border:"1px solid rgba(80, 250, 123, 0.4)",borderRadius:"var(--radius-md)",padding:"24px",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:"12px"},children:[c.jsx(Ph,{size:36,color:"#50fa7b"}),c.jsx("h3",{style:{fontSize:"18px",color:"#ffffff"},children:"Message Dispatched!"}),c.jsx("p",{style:{fontSize:"14px",color:"#d8fad8",lineHeight:"1.5"},children:"Thank you for reaching out. I've received your note and will reply promptly."}),c.jsx("button",{onClick:()=>r({submitting:!1,success:!1,error:null}),className:"btn btn-outline",style:{marginTop:"8px",fontSize:"12px"},children:"Send Another Message"})]}):c.jsxs("form",{onSubmit:l,style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.error&&c.jsxs("div",{style:{backgroundColor:"color-mix(in srgb, var(--color-accent) 20%, transparent)",border:"1px solid var(--color-accent)",padding:"10px 14px",borderRadius:"6px",display:"flex",alignItems:"center",gap:"8px",color:"var(--text-heading)",fontSize:"13px"},children:[c.jsx(Ch,{size:16}),c.jsx("span",{children:n.error})]}),c.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[c.jsx("label",{className:"form-label",htmlFor:"contact-name",children:"Name *"}),c.jsx("input",{type:"text",id:"contact-name",name:"name",required:!0,placeholder:"Your name",value:e.name,onChange:a,className:"form-control"})]}),c.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[c.jsx("label",{className:"form-label",htmlFor:"contact-email",children:"Email *"}),c.jsx("input",{type:"email",id:"contact-email",name:"email",required:!0,placeholder:"your.email@example.com",value:e.email,onChange:a,className:"form-control"})]}),c.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[c.jsx("label",{className:"form-label",htmlFor:"contact-subject",children:"Subject"}),c.jsx("input",{type:"text",id:"contact-subject",name:"subject",placeholder:"Subject or project name",value:e.subject,onChange:a,className:"form-control"})]}),c.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[c.jsx("label",{className:"form-label",htmlFor:"contact-message",children:"Message *"}),c.jsx("textarea",{id:"contact-message",name:"message",required:!0,rows:4,placeholder:"How can I help you?",value:e.message,onChange:a,className:"form-control",style:{resize:"vertical"}})]}),c.jsxs("button",{type:"submit",disabled:n.submitting,className:"btn btn-primary",style:{width:"100%",padding:"12px",marginTop:"6px",fontSize:"14px"},children:[c.jsx(Mh,{size:16}),c.jsx("span",{children:n.submitting?"Sending...":"Send Message"})]})]})]})]})]})}function z2(){const[e,t]=j.useState({name:"",email:"",subject:"",message:""}),[n,r]=j.useState({submitting:!1,success:!1,error:null}),[i,s]=j.useState(!1),o=()=>{navigator.clipboard.writeText(B.email),s(!0),setTimeout(()=>s(!1),2e3)},a=async l=>{l.preventDefault(),r({submitting:!0,success:!1,error:null});try{const u=B.formsubmitToken||B.email,d=await fetch(`https://formsubmit.co/ajax/${u}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:e.name,email:e.email,_subject:e.subject||`New Contact Message from ${e.name}`,message:e.message})}),f=await d.json();d.ok&&(f.success==="true"||f.success===!0)?(r({submitting:!1,success:!0,error:null}),t({name:"",email:"",subject:"",message:""})):r({submitting:!1,success:!1,error:f.message||"Submission error"})}catch(u){console.error("Contact submission error:",u),r({submitting:!1,success:!1,error:"Network error submitting message. Please try again."})}};return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"56px",width:"100%"},children:[c.jsxs("section",{id:"summary",style:{display:"flex",flexDirection:"column",gap:"28px"},children:[c.jsxs("div",{className:"card-glass",style:{padding:"28px 20px",borderLeft:"4px solid var(--color-accent)"},children:[c.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"3px 10px",borderRadius:"var(--radius-full)",background:"color-mix(in srgb, var(--color-accent) 15%, transparent)",border:"1px solid color-mix(in srgb, var(--color-accent) 40%, transparent)",marginBottom:"14px"},children:[c.jsx("span",{style:{width:"7px",height:"7px",borderRadius:"50%",background:"#50fa7b",boxShadow:"0 0 6px #50fa7b"}}),c.jsx("span",{className:"mono",style:{fontSize:"11px",color:"var(--text-heading)",fontWeight:600},children:"Open to New Opportunities"})]}),c.jsx("h1",{style:{fontSize:"26px",fontWeight:800,letterSpacing:"-0.02em",marginBottom:"8px"},children:B.name}),c.jsx("h2",{style:{fontSize:"14.5px",fontWeight:500,color:"var(--text-muted)",lineHeight:"1.5",marginBottom:"20px"},children:B.tagline}),c.jsxs("div",{style:{display:"flex",gap:"10px"},children:[c.jsx("a",{href:"#contact",className:"btn btn-primary",style:{flex:1,fontSize:"12.5px"},children:"Contact Me"}),c.jsx("a",{href:"#portfolio",className:"btn btn-outline",style:{flex:1,fontSize:"12.5px"},children:"View Work"})]})]}),c.jsxs("div",{className:"card-glass",style:{padding:"28px 20px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"16px"},children:[c.jsx(Da,{size:20,color:"var(--color-accent)"}),c.jsx("h2",{style:{fontSize:"19px",fontWeight:700},children:"Executive Summary"})]}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"14px",color:"var(--text-body)",fontSize:"14px",lineHeight:"1.65"},children:vh.paragraphs.map((l,u)=>c.jsx("p",{children:l},u))})]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"18px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx(Ra,{size:20,color:"var(--color-accent)"}),c.jsx("h2",{style:{fontSize:"19px",fontWeight:700},children:"Experience"})]}),xh.map(l=>c.jsxs("div",{className:"card-glass",style:{padding:"22px 18px"},children:[c.jsxs("div",{style:{marginBottom:"10px"},children:[c.jsx("h3",{style:{fontSize:"16px",color:"var(--text-heading)",fontWeight:700},children:l.role}),c.jsxs("a",{href:l.companyUrl,target:"_blank",rel:"noopener noreferrer",style:{color:"var(--color-accent)",textDecoration:"none",fontSize:"13.5px",fontWeight:600,display:"inline-flex",alignItems:"center",gap:"4px"},children:[l.company," ",c.jsx(hn,{size:11})]}),c.jsx("p",{className:"mono",style:{fontSize:"11px",color:"var(--text-dim)",marginTop:"4px"},children:l.period})]}),c.jsx("p",{style:{color:"var(--text-body)",fontSize:"13.5px",lineHeight:"1.6",marginBottom:"14px"},children:l.description}),c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:l.skills.map(u=>c.jsxs("span",{className:"badge-pill",style:{fontSize:"10.5px",padding:"2px 7px"},children:[c.jsx("span",{className:"dot"}),u]},u))})]},l.id))]})]}),c.jsxs("section",{id:"about",style:{display:"flex",flexDirection:"column",gap:"24px"},children:[c.jsxs("div",{className:"card-glass",style:{padding:"28px 20px",borderLeft:"4px solid var(--color-accent)"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"12px"},children:[c.jsx(Lh,{size:22,color:"var(--color-accent)"}),c.jsx("h2",{style:{fontSize:"22px",fontWeight:800},children:"About Me"})]}),c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px",fontSize:"14px",lineHeight:"1.65",color:"var(--text-body)"},children:[c.jsx("p",{children:"Hello! I’m an application support and automation specialist with over ten years of experience helping SaaS teams work smarter through better systems, data, and process design. In recent years, I’ve focused on bringing AI and automation into day-to-day operations, building tools that save time, reduce manual work, and make customer support more efficient and human at the same time."}),c.jsx("p",{children:"Outside of my career, I’m a man of many talents and interests. I cook, I draw, I brew beer, I hike and do martial arts, play video games and watch anime, I ferment and pickle, I roast coffee, I sharpen knives, I do it all."})]})]}),c.jsxs("div",{className:"card-glass",style:{padding:"24px 18px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"16px"},children:[c.jsx(_h,{size:18,color:"var(--color-accent)"}),c.jsx("h3",{style:{fontSize:"17px",fontWeight:700},children:"Tech Stack"})]}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:wh.map(l=>c.jsxs("div",{children:[c.jsx("h4",{style:{fontSize:"13px",color:"var(--color-accent)",marginBottom:"8px"},children:l.name}),c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:l.items.map(u=>c.jsx("span",{className:"badge-pill",style:{fontSize:"10.5px"},children:u},u))})]},l.name))})]}),c.jsxs("div",{className:"card-glass",style:{padding:"22px 18px"},children:[c.jsx("h3",{style:{fontSize:"16px",fontWeight:700,marginBottom:"8px"},children:"Technical Expertise"}),c.jsx("p",{style:{fontSize:"13.5px",color:"var(--text-body)",lineHeight:"1.6"},children:"Proficient in technical support, scripting and programming, and AI integration development. I combine knowledge in frontend and backend development with relational data and AI to solve customer problems."})]}),c.jsxs("div",{className:"card-glass",style:{padding:"22px 18px"},children:[c.jsx("h3",{style:{fontSize:"16px",fontWeight:700,marginBottom:"8px"},children:"Problem Solving"}),c.jsx("p",{style:{fontSize:"13.5px",color:"var(--text-body)",lineHeight:"1.6"},children:"I utilize customer empathy to document problems thoroughly, and combine clear documentation with technical knowledge to resolve issues quickly and efficiently while ensuring issues do not recur."})]}),c.jsxs("div",{className:"card-glass",style:{padding:"24px 18px"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"},children:[c.jsx(ql,{size:18,color:"var(--color-accent)"}),c.jsx("h3",{style:{fontSize:"17px",fontWeight:700},children:"Interests & Creative Pursuits"})]}),c.jsx("p",{style:{fontSize:"13px",color:"var(--text-muted)",marginBottom:"16px"},children:"Tap or swipe panels to explore creative disciplines, screenshots, and clips."}),c.jsx(cg,{items:Sh})]})]}),c.jsxs("section",{id:"portfolio",style:{display:"flex",flexDirection:"column",gap:"20px"},children:[c.jsxs("div",{className:"card-glass",style:{padding:"28px 20px",borderLeft:"4px solid var(--color-accent)"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"6px"},children:[c.jsx(Zr,{size:22,color:"var(--color-accent)"}),c.jsx("h2",{style:{fontSize:"22px",fontWeight:800},children:"What I've Been Building"})]}),c.jsx("p",{style:{fontSize:"13.5px",color:"var(--text-muted)"},children:"Recent projects, experiments, and tools I'm actively building."})]}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"18px"},children:Zs().map(l=>c.jsx(Ec,{project:l,animate:!1},l.slug||l.name))})]}),c.jsxs("section",{id:"blog",style:{display:"flex",flexDirection:"column",gap:"20px"},children:[c.jsxs("div",{className:"card-glass",style:{padding:"28px 20px",borderLeft:"4px solid var(--color-accent)"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"6px"},children:[c.jsx(bs,{size:22,color:"var(--color-accent)"}),c.jsx("h2",{style:{fontSize:"22px",fontWeight:800},children:"Blog"})]}),c.jsx("p",{style:{fontSize:"13.5px",color:"var(--text-muted)"},children:"Thoughts, tutorials, and insights from my development journey."})]}),kh.map(l=>c.jsxs("div",{className:"card-glass",style:{padding:"24px 18px"},children:[c.jsxs("p",{className:"mono",style:{fontSize:"11px",color:"var(--color-accent)",marginBottom:"6px"},children:[l.date," • ",l.readTime]}),c.jsx("h3",{style:{fontSize:"18px",fontWeight:700,marginBottom:"10px"},children:l.title}),c.jsx("p",{style:{fontSize:"13.5px",color:"var(--text-body)",lineHeight:"1.6",marginBottom:"16px"},children:l.summary}),c.jsxs("a",{href:l.url,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",style:{width:"100%",fontSize:"12.5px"},children:[c.jsx("span",{children:"Read on Substack"}),c.jsx(hn,{size:14})]})]},l.id))]}),c.jsxs("section",{id:"contact",style:{display:"flex",flexDirection:"column",gap:"20px"},children:[c.jsxs("div",{className:"card-glass",style:{padding:"28px 20px",borderLeft:"4px solid var(--color-accent)"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"6px"},children:[c.jsx(ei,{size:22,color:"var(--color-accent)"}),c.jsx("h2",{style:{fontSize:"22px",fontWeight:800},children:"Contact Me"})]}),c.jsx("p",{style:{fontSize:"13.5px",color:"var(--text-muted)"},children:"Feel free to reach out if you'd like to collaborate or have any questions."})]}),c.jsxs("div",{className:"card-glass",style:{padding:"22px 18px"},children:[c.jsx("p",{className:"mono",style:{fontSize:"11px",textTransform:"uppercase",color:"var(--text-muted)"},children:"Email"}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",margin:"4px 0 16px"},children:[c.jsx("a",{href:`mailto:${B.email}`,style:{color:"var(--text-heading)",fontWeight:600,fontSize:"14px"},children:B.email}),c.jsx("button",{onClick:o,className:"btn btn-ghost",style:{padding:"4px 8px"},children:i?c.jsx(Hl,{size:13,color:"#50fa7b"}):c.jsx(Th,{size:13})})]}),c.jsx("p",{className:"mono",style:{fontSize:"11px",textTransform:"uppercase",color:"var(--text-muted)"},children:"Location"}),c.jsx("p",{style:{color:"var(--text-heading)",fontWeight:600,fontSize:"14px",marginTop:"4px",marginBottom:"16px"},children:B.location}),c.jsx("p",{className:"mono",style:{fontSize:"11px",textTransform:"uppercase",color:"var(--text-muted)"},children:"Social Profiles"}),c.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"6px"},children:[c.jsxs("a",{href:B.socialLinks.linkedin,target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",style:{flex:1,fontSize:"12px"},children:[c.jsx(Gl,{size:14})," LinkedIn"]}),c.jsxs("a",{href:B.socialLinks.github,target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",style:{flex:1,fontSize:"12px"},children:[c.jsx(nr,{size:14})," GitHub"]})]})]}),c.jsxs("div",{className:"card-glass",style:{padding:"24px 18px"},children:[c.jsx("h3",{style:{fontSize:"17px",fontWeight:700,marginBottom:"16px"},children:"Send a Message"}),n.success?c.jsxs("div",{style:{padding:"16px",textAlign:"center",backgroundColor:"rgba(80, 250, 123, 0.1)",borderRadius:"8px"},children:[c.jsx(Ph,{size:28,color:"#50fa7b",style:{margin:"0 auto 8px"}}),c.jsx("p",{style:{fontSize:"13.5px",color:"#50fa7b",marginBottom:"8px"},children:"Message Dispatched!"}),c.jsx("button",{onClick:()=>r({submitting:!1,success:!1,error:null}),className:"btn btn-outline",style:{fontSize:"11px",padding:"4px 10px"},children:"Send Another Message"})]}):c.jsxs("form",{onSubmit:a,style:{display:"flex",flexDirection:"column",gap:"12px"},children:[n.error&&c.jsxs("div",{style:{backgroundColor:"color-mix(in srgb, var(--color-accent) 20%, transparent)",border:"1px solid var(--color-accent)",padding:"10px 14px",borderRadius:"6px",display:"flex",alignItems:"center",gap:"8px",color:"var(--text-heading)",fontSize:"12.5px"},children:[c.jsx(Ch,{size:15}),c.jsx("span",{children:n.error})]}),c.jsx("input",{type:"text",required:!0,placeholder:"Name",value:e.name,onChange:l=>t({...e,name:l.target.value}),className:"form-control"}),c.jsx("input",{type:"email",required:!0,placeholder:"Email",value:e.email,onChange:l=>t({...e,email:l.target.value}),className:"form-control"}),c.jsx("input",{type:"text",placeholder:"Subject",value:e.subject,onChange:l=>t({...e,subject:l.target.value}),className:"form-control"}),c.jsx("textarea",{required:!0,rows:4,placeholder:"Message",value:e.message,onChange:l=>t({...e,message:l.target.value}),className:"form-control"}),c.jsxs("button",{type:"submit",disabled:n.submitting,className:"btn btn-primary",style:{width:"100%",padding:"12px",fontSize:"13px"},children:[c.jsx(Mh,{size:15})," ",c.jsx("span",{children:n.submitting?"Sending...":"Send Message"})]})]})]})]})]})}function F2(){const e=()=>{const d=window.location.pathname;return At.find(p=>p.path===d)||At[0]},[t,n]=j.useState(e),[r,i]=j.useState(0),[s,o]=j.useState(!1);j.useEffect(()=>{const d=()=>{o(window.innerWidth<=840)};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),j.useEffect(()=>{const d=()=>{const f=window.location.pathname,p=At.find(y=>y.path===f)||At[0];i(p.index>t.index?1:-1),n(p)};return window.addEventListener("popstate",d),()=>window.removeEventListener("popstate",d)},[t]);const a=d=>{if(d.id===t.id)return;const f=d.index>t.index?1:-1;i(f),n(d),window.history.pushState(null,"",d.path),window.scrollTo({top:0,behavior:"smooth"})},l=d=>{const f=At.find(p=>p.id===d);f&&a(f)},u=()=>{switch(t.id){case"home":return c.jsx(np,{onNavigate:l});case"about":return c.jsx(M2,{});case"portfolio":return c.jsx(R2,{});case"blog":return c.jsx(I2,{});case"contact":return c.jsx(N2,{});default:return c.jsx(np,{onNavigate:l})}};return c.jsxs("div",{className:"app-container",children:[c.jsx("div",{className:"ambient-bg"}),c.jsx(Jx,{}),c.jsx(Qx,{currentTab:t,onSelectTab:a,isMobile:s}),c.jsx("main",{className:"main-content",children:s?c.jsx(z2,{}):c.jsx(j2,{pageKey:t.id,direction:r,children:u()})}),c.jsx(C2,{})]})}Bo.createRoot(document.getElementById("root")).render(c.jsx(Pg.StrictMode,{children:c.jsx(F2,{})}));
