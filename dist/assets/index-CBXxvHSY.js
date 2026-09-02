(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Xm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tp={exports:{}},As={},np={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ii=Symbol.for("react.element"),Ym=Symbol.for("react.portal"),Zm=Symbol.for("react.fragment"),eg=Symbol.for("react.strict_mode"),tg=Symbol.for("react.profiler"),ng=Symbol.for("react.provider"),rg=Symbol.for("react.context"),ig=Symbol.for("react.forward_ref"),sg=Symbol.for("react.suspense"),og=Symbol.for("react.memo"),ag=Symbol.for("react.lazy"),Cc=Symbol.iterator;function lg(e){return e===null||typeof e!="object"?null:(e=Cc&&e[Cc]||e["@@iterator"],typeof e=="function"?e:null)}var rp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ip=Object.assign,sp={};function Zn(e,t,n){this.props=e,this.context=t,this.refs=sp,this.updater=n||rp}Zn.prototype.isReactComponent={};Zn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function op(){}op.prototype=Zn.prototype;function Qa(e,t,n){this.props=e,this.context=t,this.refs=sp,this.updater=n||rp}var Ja=Qa.prototype=new op;Ja.constructor=Qa;ip(Ja,Zn.prototype);Ja.isPureReactComponent=!0;var jc=Array.isArray,ap=Object.prototype.hasOwnProperty,Xa={current:null},lp={key:!0,ref:!0,__self:!0,__source:!0};function cp(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)ap.call(t,r)&&!lp.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ii,type:e,key:s,ref:o,props:i,_owner:Xa.current}}function cg(e,t){return{$$typeof:ii,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ya(e){return typeof e=="object"&&e!==null&&e.$$typeof===ii}function ug(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pc=/\/+/g;function Ys(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ug(""+e.key):t.toString(36)}function Ni(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ii:case Ym:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Ys(o,0):r,jc(i)?(n="",e!=null&&(n=e.replace(Pc,"$&/")+"/"),Ni(i,t,n,"",function(c){return c})):i!=null&&(Ya(i)&&(i=cg(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Pc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",jc(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Ys(s,a);o+=Ni(s,t,n,l,i)}else if(l=lg(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Ys(s,a++),o+=Ni(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function mi(e,t,n){if(e==null)return e;var r=[],i=0;return Ni(e,r,"","",function(s){return t.call(n,s,i++)}),r}function dg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},zi={transition:null},pg={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:zi,ReactCurrentOwner:Xa};function up(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:mi,forEach:function(e,t,n){mi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mi(e,function(){t++}),t},toArray:function(e){return mi(e,function(t){return t})||[]},only:function(e){if(!Ya(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=Zn;N.Fragment=Zm;N.Profiler=tg;N.PureComponent=Qa;N.StrictMode=eg;N.Suspense=sg;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pg;N.act=up;N.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ip({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Xa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)ap.call(t,l)&&!lp.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ii,type:e.type,key:i,ref:s,props:r,_owner:o}};N.createContext=function(e){return e={$$typeof:rg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ng,_context:e},e.Consumer=e};N.createElement=cp;N.createFactory=function(e){var t=cp.bind(null,e);return t.type=e,t};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:ig,render:e}};N.isValidElement=Ya;N.lazy=function(e){return{$$typeof:ag,_payload:{_status:-1,_result:e},_init:dg}};N.memo=function(e,t){return{$$typeof:og,type:e,compare:t===void 0?null:t}};N.startTransition=function(e){var t=zi.transition;zi.transition={};try{e()}finally{zi.transition=t}};N.unstable_act=up;N.useCallback=function(e,t){return Se.current.useCallback(e,t)};N.useContext=function(e){return Se.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};N.useEffect=function(e,t){return Se.current.useEffect(e,t)};N.useId=function(){return Se.current.useId()};N.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};N.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};N.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};N.useMemo=function(e,t){return Se.current.useMemo(e,t)};N.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};N.useRef=function(e){return Se.current.useRef(e)};N.useState=function(e){return Se.current.useState(e)};N.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};N.useTransition=function(){return Se.current.useTransition()};N.version="18.3.1";np.exports=N;var C=np.exports;const fg=Xm(C);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg=C,mg=Symbol.for("react.element"),gg=Symbol.for("react.fragment"),yg=Object.prototype.hasOwnProperty,vg=hg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xg={key:!0,ref:!0,__self:!0,__source:!0};function dp(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)yg.call(t,r)&&!xg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:mg,type:e,key:s,ref:o,props:i,_owner:vg.current}}As.Fragment=gg;As.jsx=dp;As.jsxs=dp;tp.exports=As;var u=tp.exports,Fo={},pp={exports:{}},ze={},fp={exports:{}},hp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,R){var D=T.length;T.push(R);e:for(;0<D;){var H=D-1>>>1,X=T[H];if(0<i(X,R))T[H]=R,T[D]=X,D=H;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var R=T[0],D=T.pop();if(D!==R){T[0]=D;e:for(var H=0,X=T.length,yn=X>>>1;H<yn;){var lt=2*(H+1)-1,ct=T[lt],ut=lt+1,Qt=T[ut];if(0>i(ct,D))ut<X&&0>i(Qt,ct)?(T[H]=Qt,T[ut]=D,H=ut):(T[H]=ct,T[lt]=D,H=lt);else if(ut<X&&0>i(Qt,D))T[H]=Qt,T[ut]=D,H=ut;else break e}}return R}function i(T,R){var D=T.sortIndex-R.sortIndex;return D!==0?D:T.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,p=null,f=3,y=!1,v=!1,x=!1,b=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=T)r(c),R.sortIndex=R.expirationTime,t(l,R);else break;R=n(c)}}function w(T){if(x=!1,g(T),!v)if(n(l)!==null)v=!0,re(S);else{var R=n(c);R!==null&&J(w,R.startTime-T)}}function S(T,R){v=!1,x&&(x=!1,m(k),k=-1),y=!0;var D=f;try{for(g(R),p=n(l);p!==null&&(!(p.expirationTime>R)||T&&!F());){var H=p.callback;if(typeof H=="function"){p.callback=null,f=p.priorityLevel;var X=H(p.expirationTime<=R);R=e.unstable_now(),typeof X=="function"?p.callback=X:p===n(l)&&r(l),g(R)}else r(l);p=n(l)}if(p!==null)var yn=!0;else{var lt=n(c);lt!==null&&J(w,lt.startTime-R),yn=!1}return yn}finally{p=null,f=D,y=!1}}var j=!1,_=null,k=-1,M=5,E=-1;function F(){return!(e.unstable_now()-E<M)}function Te(){if(_!==null){var T=e.unstable_now();E=T;var R=!0;try{R=_(!0,T)}finally{R?Ae():(j=!1,_=null)}}else j=!1}var Ae;if(typeof h=="function")Ae=function(){h(Te)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ir=oe.port2;oe.port1.onmessage=Te,Ae=function(){ir.postMessage(null)}}else Ae=function(){b(Te,0)};function re(T){_=T,j||(j=!0,Ae())}function J(T,R){k=b(function(){T(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||y||(v=!0,re(S))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(T){switch(f){case 1:case 2:case 3:var R=3;break;default:R=f}var D=f;f=R;try{return T()}finally{f=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var D=f;f=T;try{return R()}finally{f=D}},e.unstable_scheduleCallback=function(T,R,D){var H=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?H+D:H):D=H,T){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=D+X,T={id:d++,callback:R,priorityLevel:T,startTime:D,expirationTime:X,sortIndex:-1},D>H?(T.sortIndex=D,t(c,T),n(l)===null&&T===n(c)&&(x?(m(k),k=-1):x=!0,J(w,D-H))):(T.sortIndex=X,t(l,T),v||y||(v=!0,re(S))),T},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(T){var R=f;return function(){var D=f;f=R;try{return T.apply(this,arguments)}finally{f=D}}}})(hp);fp.exports=hp;var wg=fp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg=C,Ie=wg;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mp=new Set,Ir={};function hn(e,t){Un(e,t),Un(e+"Capture",t)}function Un(e,t){for(Ir[e]=t,e=0;e<t.length;e++)mp.add(t[e])}var vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vo=Object.prototype.hasOwnProperty,kg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_c={},Tc={};function bg(e){return Vo.call(Tc,e)?!0:Vo.call(_c,e)?!1:kg.test(e)?Tc[e]=!0:(_c[e]=!0,!1)}function Cg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function jg(e,t,n,r){if(t===null||typeof t>"u"||Cg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ke(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){pe[e]=new ke(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];pe[t]=new ke(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){pe[e]=new ke(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){pe[e]=new ke(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){pe[e]=new ke(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){pe[e]=new ke(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){pe[e]=new ke(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){pe[e]=new ke(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){pe[e]=new ke(e,5,!1,e.toLowerCase(),null,!1,!1)});var Za=/[\-:]([a-z])/g;function el(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Za,el);pe[t]=new ke(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Za,el);pe[t]=new ke(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Za,el);pe[t]=new ke(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){pe[e]=new ke(e,1,!1,e.toLowerCase(),null,!1,!1)});pe.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){pe[e]=new ke(e,1,!1,e.toLowerCase(),null,!0,!0)});function tl(e,t,n,r){var i=pe.hasOwnProperty(t)?pe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(jg(t,n,i,r)&&(n=null),r||i===null?bg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var bt=Sg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gi=Symbol.for("react.element"),xn=Symbol.for("react.portal"),wn=Symbol.for("react.fragment"),nl=Symbol.for("react.strict_mode"),Oo=Symbol.for("react.profiler"),gp=Symbol.for("react.provider"),yp=Symbol.for("react.context"),rl=Symbol.for("react.forward_ref"),Bo=Symbol.for("react.suspense"),Uo=Symbol.for("react.suspense_list"),il=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),vp=Symbol.for("react.offscreen"),Ac=Symbol.iterator;function sr(e){return e===null||typeof e!="object"?null:(e=Ac&&e[Ac]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Zs;function mr(e){if(Zs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Zs=t&&t[1]||""}return`
`+Zs+e}var eo=!1;function to(e,t){if(!e||eo)return"";eo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{eo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?mr(e):""}function Pg(e){switch(e.tag){case 5:return mr(e.type);case 16:return mr("Lazy");case 13:return mr("Suspense");case 19:return mr("SuspenseList");case 0:case 2:case 15:return e=to(e.type,!1),e;case 11:return e=to(e.type.render,!1),e;case 1:return e=to(e.type,!0),e;default:return""}}function Wo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wn:return"Fragment";case xn:return"Portal";case Oo:return"Profiler";case nl:return"StrictMode";case Bo:return"Suspense";case Uo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yp:return(e.displayName||"Context")+".Consumer";case gp:return(e._context.displayName||"Context")+".Provider";case rl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case il:return t=e.displayName||null,t!==null?t:Wo(e.type)||"Memo";case Pt:t=e._payload,e=e._init;try{return Wo(e(t))}catch{}}return null}function _g(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wo(t);case 8:return t===nl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Bt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Tg(e){var t=xp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yi(e){e._valueTracker||(e._valueTracker=Tg(e))}function wp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=xp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $o(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ec(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Bt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Sp(e,t){t=t.checked,t!=null&&tl(e,"checked",t,!1)}function Ho(e,t){Sp(e,t);var n=Bt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?qo(e,t.type,n):t.hasOwnProperty("defaultValue")&&qo(e,t.type,Bt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function qo(e,t,n){(t!=="number"||Xi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var gr=Array.isArray;function Nn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Bt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Go(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Lc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(gr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Bt(n)}}function kp(e,t){var n=Bt(t.value),r=Bt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Rc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ko(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vi,Cp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vi=vi||document.createElement("div"),vi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ag=["Webkit","ms","Moz","O"];Object.keys(kr).forEach(function(e){Ag.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kr[t]=kr[e]})});function jp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||kr.hasOwnProperty(e)&&kr[e]?(""+t).trim():t+"px"}function Pp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Eg=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qo(e,t){if(t){if(Eg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Jo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xo=null;function sl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yo=null,zn=null,Fn=null;function Dc(e){if(e=ai(e)){if(typeof Yo!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Ds(t),Yo(e.stateNode,e.type,t))}}function _p(e){zn?Fn?Fn.push(e):Fn=[e]:zn=e}function Tp(){if(zn){var e=zn,t=Fn;if(Fn=zn=null,Dc(e),t)for(e=0;e<t.length;e++)Dc(t[e])}}function Ap(e,t){return e(t)}function Ep(){}var no=!1;function Mp(e,t,n){if(no)return e(t,n);no=!0;try{return Ap(e,t,n)}finally{no=!1,(zn!==null||Fn!==null)&&(Ep(),Tp())}}function zr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ds(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Zo=!1;if(vt)try{var or={};Object.defineProperty(or,"passive",{get:function(){Zo=!0}}),window.addEventListener("test",or,or),window.removeEventListener("test",or,or)}catch{Zo=!1}function Mg(e,t,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var br=!1,Yi=null,Zi=!1,ea=null,Lg={onError:function(e){br=!0,Yi=e}};function Rg(e,t,n,r,i,s,o,a,l){br=!1,Yi=null,Mg.apply(Lg,arguments)}function Dg(e,t,n,r,i,s,o,a,l){if(Rg.apply(this,arguments),br){if(br){var c=Yi;br=!1,Yi=null}else throw Error(P(198));Zi||(Zi=!0,ea=c)}}function mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ic(e){if(mn(e)!==e)throw Error(P(188))}function Ig(e){var t=e.alternate;if(!t){if(t=mn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ic(i),e;if(s===r)return Ic(i),t;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Rp(e){return e=Ig(e),e!==null?Dp(e):null}function Dp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Dp(e);if(t!==null)return t;e=e.sibling}return null}var Ip=Ie.unstable_scheduleCallback,Nc=Ie.unstable_cancelCallback,Ng=Ie.unstable_shouldYield,zg=Ie.unstable_requestPaint,te=Ie.unstable_now,Fg=Ie.unstable_getCurrentPriorityLevel,ol=Ie.unstable_ImmediatePriority,Np=Ie.unstable_UserBlockingPriority,es=Ie.unstable_NormalPriority,Vg=Ie.unstable_LowPriority,zp=Ie.unstable_IdlePriority,Es=null,it=null;function Og(e){if(it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(Es,e,void 0,(e.current.flags&128)===128)}catch{}}var Ye=Math.clz32?Math.clz32:Wg,Bg=Math.log,Ug=Math.LN2;function Wg(e){return e>>>=0,e===0?32:31-(Bg(e)/Ug|0)|0}var xi=64,wi=4194304;function yr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ts(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=yr(a):(s&=o,s!==0&&(r=yr(s)))}else o=n&~i,o!==0?r=yr(o):s!==0&&(r=yr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ye(t),i=1<<n,r|=e[n],t&=~i;return r}function $g(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Ye(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=$g(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function ta(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fp(){var e=xi;return xi<<=1,!(xi&4194240)&&(xi=64),e}function ro(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function si(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ye(t),e[t]=n}function qg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ye(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function al(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ye(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var V=0;function Vp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Op,ll,Bp,Up,Wp,na=!1,Si=[],Rt=null,Dt=null,It=null,Fr=new Map,Vr=new Map,Tt=[],Gg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zc(e,t){switch(e){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":It=null;break;case"pointerover":case"pointerout":Fr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vr.delete(t.pointerId)}}function ar(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ai(t),t!==null&&ll(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Kg(e,t,n,r,i){switch(t){case"focusin":return Rt=ar(Rt,e,t,n,r,i),!0;case"dragenter":return Dt=ar(Dt,e,t,n,r,i),!0;case"mouseover":return It=ar(It,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fr.set(s,ar(Fr.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Vr.set(s,ar(Vr.get(s)||null,e,t,n,r,i)),!0}return!1}function $p(e){var t=tn(e.target);if(t!==null){var n=mn(t);if(n!==null){if(t=n.tag,t===13){if(t=Lp(n),t!==null){e.blockedOn=t,Wp(e.priority,function(){Bp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ra(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xo=r,n.target.dispatchEvent(r),Xo=null}else return t=ai(n),t!==null&&ll(t),e.blockedOn=n,!1;t.shift()}return!0}function Fc(e,t,n){Fi(e)&&n.delete(t)}function Qg(){na=!1,Rt!==null&&Fi(Rt)&&(Rt=null),Dt!==null&&Fi(Dt)&&(Dt=null),It!==null&&Fi(It)&&(It=null),Fr.forEach(Fc),Vr.forEach(Fc)}function lr(e,t){e.blockedOn===t&&(e.blockedOn=null,na||(na=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Qg)))}function Or(e){function t(i){return lr(i,e)}if(0<Si.length){lr(Si[0],e);for(var n=1;n<Si.length;n++){var r=Si[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Rt!==null&&lr(Rt,e),Dt!==null&&lr(Dt,e),It!==null&&lr(It,e),Fr.forEach(t),Vr.forEach(t),n=0;n<Tt.length;n++)r=Tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Tt.length&&(n=Tt[0],n.blockedOn===null);)$p(n),n.blockedOn===null&&Tt.shift()}var Vn=bt.ReactCurrentBatchConfig,ns=!0;function Jg(e,t,n,r){var i=V,s=Vn.transition;Vn.transition=null;try{V=1,cl(e,t,n,r)}finally{V=i,Vn.transition=s}}function Xg(e,t,n,r){var i=V,s=Vn.transition;Vn.transition=null;try{V=4,cl(e,t,n,r)}finally{V=i,Vn.transition=s}}function cl(e,t,n,r){if(ns){var i=ra(e,t,n,r);if(i===null)ho(e,t,r,rs,n),zc(e,r);else if(Kg(i,e,t,n,r))r.stopPropagation();else if(zc(e,r),t&4&&-1<Gg.indexOf(e)){for(;i!==null;){var s=ai(i);if(s!==null&&Op(s),s=ra(e,t,n,r),s===null&&ho(e,t,r,rs,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ho(e,t,r,null,n)}}var rs=null;function ra(e,t,n,r){if(rs=null,e=sl(r),e=tn(e),e!==null)if(t=mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return rs=e,null}function Hp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fg()){case ol:return 1;case Np:return 4;case es:case Vg:return 16;case zp:return 536870912;default:return 16}default:return 16}}var Mt=null,ul=null,Vi=null;function qp(){if(Vi)return Vi;var e,t=ul,n=t.length,r,i="value"in Mt?Mt.value:Mt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Vi=i.slice(e,1<r?1-r:void 0)}function Oi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function Vc(){return!1}function Fe(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ki:Vc,this.isPropagationStopped=Vc,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),t}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dl=Fe(er),oi=Q({},er,{view:0,detail:0}),Yg=Fe(oi),io,so,cr,Ms=Q({},oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cr&&(cr&&e.type==="mousemove"?(io=e.screenX-cr.screenX,so=e.screenY-cr.screenY):so=io=0,cr=e),io)},movementY:function(e){return"movementY"in e?e.movementY:so}}),Oc=Fe(Ms),Zg=Q({},Ms,{dataTransfer:0}),ey=Fe(Zg),ty=Q({},oi,{relatedTarget:0}),oo=Fe(ty),ny=Q({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),ry=Fe(ny),iy=Q({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sy=Fe(iy),oy=Q({},er,{data:0}),Bc=Fe(oy),ay={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ly={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function uy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cy[e])?!!t[e]:!1}function pl(){return uy}var dy=Q({},oi,{key:function(e){if(e.key){var t=ay[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ly[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pl,charCode:function(e){return e.type==="keypress"?Oi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),py=Fe(dy),fy=Q({},Ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uc=Fe(fy),hy=Q({},oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pl}),my=Fe(hy),gy=Q({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),yy=Fe(gy),vy=Q({},Ms,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xy=Fe(vy),wy=[9,13,27,32],fl=vt&&"CompositionEvent"in window,Cr=null;vt&&"documentMode"in document&&(Cr=document.documentMode);var Sy=vt&&"TextEvent"in window&&!Cr,Gp=vt&&(!fl||Cr&&8<Cr&&11>=Cr),Wc=" ",$c=!1;function Kp(e,t){switch(e){case"keyup":return wy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Sn=!1;function ky(e,t){switch(e){case"compositionend":return Qp(t);case"keypress":return t.which!==32?null:($c=!0,Wc);case"textInput":return e=t.data,e===Wc&&$c?null:e;default:return null}}function by(e,t){if(Sn)return e==="compositionend"||!fl&&Kp(e,t)?(e=qp(),Vi=ul=Mt=null,Sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gp&&t.locale!=="ko"?null:t.data;default:return null}}var Cy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cy[e.type]:t==="textarea"}function Jp(e,t,n,r){_p(r),t=is(t,"onChange"),0<t.length&&(n=new dl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var jr=null,Br=null;function jy(e){lf(e,0)}function Ls(e){var t=Cn(e);if(wp(t))return e}function Py(e,t){if(e==="change")return t}var Xp=!1;if(vt){var ao;if(vt){var lo="oninput"in document;if(!lo){var qc=document.createElement("div");qc.setAttribute("oninput","return;"),lo=typeof qc.oninput=="function"}ao=lo}else ao=!1;Xp=ao&&(!document.documentMode||9<document.documentMode)}function Gc(){jr&&(jr.detachEvent("onpropertychange",Yp),Br=jr=null)}function Yp(e){if(e.propertyName==="value"&&Ls(Br)){var t=[];Jp(t,Br,e,sl(e)),Mp(jy,t)}}function _y(e,t,n){e==="focusin"?(Gc(),jr=t,Br=n,jr.attachEvent("onpropertychange",Yp)):e==="focusout"&&Gc()}function Ty(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ls(Br)}function Ay(e,t){if(e==="click")return Ls(t)}function Ey(e,t){if(e==="input"||e==="change")return Ls(t)}function My(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:My;function Ur(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vo.call(t,i)||!et(e[i],t[i]))return!1}return!0}function Kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qc(e,t){var n=Kc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kc(n)}}function Zp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ef(){for(var e=window,t=Xi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xi(e.document)}return t}function hl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ly(e){var t=ef(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zp(n.ownerDocument.documentElement,n)){if(r!==null&&hl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Qc(n,s);var o=Qc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ry=vt&&"documentMode"in document&&11>=document.documentMode,kn=null,ia=null,Pr=null,sa=!1;function Jc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sa||kn==null||kn!==Xi(r)||(r=kn,"selectionStart"in r&&hl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pr&&Ur(Pr,r)||(Pr=r,r=is(ia,"onSelect"),0<r.length&&(t=new dl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=kn)))}function bi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bn={animationend:bi("Animation","AnimationEnd"),animationiteration:bi("Animation","AnimationIteration"),animationstart:bi("Animation","AnimationStart"),transitionend:bi("Transition","TransitionEnd")},co={},tf={};vt&&(tf=document.createElement("div").style,"AnimationEvent"in window||(delete bn.animationend.animation,delete bn.animationiteration.animation,delete bn.animationstart.animation),"TransitionEvent"in window||delete bn.transitionend.transition);function Rs(e){if(co[e])return co[e];if(!bn[e])return e;var t=bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tf)return co[e]=t[n];return e}var nf=Rs("animationend"),rf=Rs("animationiteration"),sf=Rs("animationstart"),of=Rs("transitionend"),af=new Map,Xc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ht(e,t){af.set(e,t),hn(t,[e])}for(var uo=0;uo<Xc.length;uo++){var po=Xc[uo],Dy=po.toLowerCase(),Iy=po[0].toUpperCase()+po.slice(1);Ht(Dy,"on"+Iy)}Ht(nf,"onAnimationEnd");Ht(rf,"onAnimationIteration");Ht(sf,"onAnimationStart");Ht("dblclick","onDoubleClick");Ht("focusin","onFocus");Ht("focusout","onBlur");Ht(of,"onTransitionEnd");Un("onMouseEnter",["mouseout","mouseover"]);Un("onMouseLeave",["mouseout","mouseover"]);Un("onPointerEnter",["pointerout","pointerover"]);Un("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ny=new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));function Yc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Dg(r,t,void 0,e),e.currentTarget=null}function lf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Yc(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Yc(i,a,c),s=l}}}if(Zi)throw e=ea,Zi=!1,ea=null,e}function B(e,t){var n=t[ua];n===void 0&&(n=t[ua]=new Set);var r=e+"__bubble";n.has(r)||(cf(t,e,2,!1),n.add(r))}function fo(e,t,n){var r=0;t&&(r|=4),cf(n,e,r,t)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function Wr(e){if(!e[Ci]){e[Ci]=!0,mp.forEach(function(n){n!=="selectionchange"&&(Ny.has(n)||fo(n,!1,e),fo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ci]||(t[Ci]=!0,fo("selectionchange",!1,t))}}function cf(e,t,n,r){switch(Hp(t)){case 1:var i=Jg;break;case 4:i=Xg;break;default:i=cl}n=i.bind(null,t,n,e),i=void 0,!Zo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ho(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=tn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Mp(function(){var c=s,d=sl(n),p=[];e:{var f=af.get(e);if(f!==void 0){var y=dl,v=e;switch(e){case"keypress":if(Oi(n)===0)break e;case"keydown":case"keyup":y=py;break;case"focusin":v="focus",y=oo;break;case"focusout":v="blur",y=oo;break;case"beforeblur":case"afterblur":y=oo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Oc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=ey;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=my;break;case nf:case rf:case sf:y=ry;break;case of:y=yy;break;case"scroll":y=Yg;break;case"wheel":y=xy;break;case"copy":case"cut":case"paste":y=sy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Uc}var x=(t&4)!==0,b=!x&&e==="scroll",m=x?f!==null?f+"Capture":null:f;x=[];for(var h=c,g;h!==null;){g=h;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=zr(h,m),w!=null&&x.push($r(h,w,g)))),b)break;h=h.return}0<x.length&&(f=new y(f,v,null,n,d),p.push({event:f,listeners:x}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==Xo&&(v=n.relatedTarget||n.fromElement)&&(tn(v)||v[xt]))break e;if((y||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=c,v=v?tn(v):null,v!==null&&(b=mn(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=c),y!==v)){if(x=Oc,w="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(x=Uc,w="onPointerLeave",m="onPointerEnter",h="pointer"),b=y==null?f:Cn(y),g=v==null?f:Cn(v),f=new x(w,h+"leave",y,n,d),f.target=b,f.relatedTarget=g,w=null,tn(d)===c&&(x=new x(m,h+"enter",v,n,d),x.target=g,x.relatedTarget=b,w=x),b=w,y&&v)t:{for(x=y,m=v,h=0,g=x;g;g=vn(g))h++;for(g=0,w=m;w;w=vn(w))g++;for(;0<h-g;)x=vn(x),h--;for(;0<g-h;)m=vn(m),g--;for(;h--;){if(x===m||m!==null&&x===m.alternate)break t;x=vn(x),m=vn(m)}x=null}else x=null;y!==null&&Zc(p,f,y,x,!1),v!==null&&b!==null&&Zc(p,b,v,x,!0)}}e:{if(f=c?Cn(c):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var S=Py;else if(Hc(f))if(Xp)S=Ey;else{S=Ty;var j=_y}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=Ay);if(S&&(S=S(e,c))){Jp(p,S,n,d);break e}j&&j(e,f,c),e==="focusout"&&(j=f._wrapperState)&&j.controlled&&f.type==="number"&&qo(f,"number",f.value)}switch(j=c?Cn(c):window,e){case"focusin":(Hc(j)||j.contentEditable==="true")&&(kn=j,ia=c,Pr=null);break;case"focusout":Pr=ia=kn=null;break;case"mousedown":sa=!0;break;case"contextmenu":case"mouseup":case"dragend":sa=!1,Jc(p,n,d);break;case"selectionchange":if(Ry)break;case"keydown":case"keyup":Jc(p,n,d)}var _;if(fl)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Sn?Kp(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Gp&&n.locale!=="ko"&&(Sn||k!=="onCompositionStart"?k==="onCompositionEnd"&&Sn&&(_=qp()):(Mt=d,ul="value"in Mt?Mt.value:Mt.textContent,Sn=!0)),j=is(c,k),0<j.length&&(k=new Bc(k,e,null,n,d),p.push({event:k,listeners:j}),_?k.data=_:(_=Qp(n),_!==null&&(k.data=_)))),(_=Sy?ky(e,n):by(e,n))&&(c=is(c,"onBeforeInput"),0<c.length&&(d=new Bc("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=_))}lf(p,t)})}function $r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function is(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=zr(e,n),s!=null&&r.unshift($r(e,s,i)),s=zr(e,t),s!=null&&r.push($r(e,s,i))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zc(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=zr(n,s),l!=null&&o.unshift($r(n,l,a))):i||(l=zr(n,s),l!=null&&o.push($r(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var zy=/\r\n?/g,Fy=/\u0000|\uFFFD/g;function eu(e){return(typeof e=="string"?e:""+e).replace(zy,`
`).replace(Fy,"")}function ji(e,t,n){if(t=eu(t),eu(e)!==t&&n)throw Error(P(425))}function ss(){}var oa=null,aa=null;function la(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ca=typeof setTimeout=="function"?setTimeout:void 0,Vy=typeof clearTimeout=="function"?clearTimeout:void 0,tu=typeof Promise=="function"?Promise:void 0,Oy=typeof queueMicrotask=="function"?queueMicrotask:typeof tu<"u"?function(e){return tu.resolve(null).then(e).catch(By)}:ca;function By(e){setTimeout(function(){throw e})}function mo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Or(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Or(t)}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var tr=Math.random().toString(36).slice(2),rt="__reactFiber$"+tr,Hr="__reactProps$"+tr,xt="__reactContainer$"+tr,ua="__reactEvents$"+tr,Uy="__reactListeners$"+tr,Wy="__reactHandles$"+tr;function tn(e){var t=e[rt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[rt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nu(e);e!==null;){if(n=e[rt])return n;e=nu(e)}return t}e=n,n=e.parentNode}return null}function ai(e){return e=e[rt]||e[xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Ds(e){return e[Hr]||null}var da=[],jn=-1;function qt(e){return{current:e}}function U(e){0>jn||(e.current=da[jn],da[jn]=null,jn--)}function O(e,t){jn++,da[jn]=e.current,e.current=t}var Ut={},ve=qt(Ut),je=qt(!1),cn=Ut;function Wn(e,t){var n=e.type.contextTypes;if(!n)return Ut;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pe(e){return e=e.childContextTypes,e!=null}function os(){U(je),U(ve)}function ru(e,t,n){if(ve.current!==Ut)throw Error(P(168));O(ve,t),O(je,n)}function uf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,_g(e)||"Unknown",i));return Q({},n,r)}function as(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ut,cn=ve.current,O(ve,e),O(je,je.current),!0}function iu(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=uf(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,U(je),U(ve),O(ve,e)):U(je),O(je,n)}var pt=null,Is=!1,go=!1;function df(e){pt===null?pt=[e]:pt.push(e)}function $y(e){Is=!0,df(e)}function Gt(){if(!go&&pt!==null){go=!0;var e=0,t=V;try{var n=pt;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}pt=null,Is=!1}catch(i){throw pt!==null&&(pt=pt.slice(e+1)),Ip(ol,Gt),i}finally{V=t,go=!1}}return null}var Pn=[],_n=0,ls=null,cs=0,Be=[],Ue=0,un=null,ft=1,ht="";function Xt(e,t){Pn[_n++]=cs,Pn[_n++]=ls,ls=e,cs=t}function pf(e,t,n){Be[Ue++]=ft,Be[Ue++]=ht,Be[Ue++]=un,un=e;var r=ft;e=ht;var i=32-Ye(r)-1;r&=~(1<<i),n+=1;var s=32-Ye(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ft=1<<32-Ye(t)+i|n<<i|r,ht=s+e}else ft=1<<s|n<<i|r,ht=e}function ml(e){e.return!==null&&(Xt(e,1),pf(e,1,0))}function gl(e){for(;e===ls;)ls=Pn[--_n],Pn[_n]=null,cs=Pn[--_n],Pn[_n]=null;for(;e===un;)un=Be[--Ue],Be[Ue]=null,ht=Be[--Ue],Be[Ue]=null,ft=Be[--Ue],Be[Ue]=null}var Re=null,Le=null,$=!1,Xe=null;function ff(e,t){var n=We(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function su(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,Le=Nt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=un!==null?{id:ft,overflow:ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=We(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,Le=null,!0):!1;default:return!1}}function pa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fa(e){if($){var t=Le;if(t){var n=t;if(!su(e,t)){if(pa(e))throw Error(P(418));t=Nt(n.nextSibling);var r=Re;t&&su(e,t)?ff(r,n):(e.flags=e.flags&-4097|2,$=!1,Re=e)}}else{if(pa(e))throw Error(P(418));e.flags=e.flags&-4097|2,$=!1,Re=e}}}function ou(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function Pi(e){if(e!==Re)return!1;if(!$)return ou(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!la(e.type,e.memoizedProps)),t&&(t=Le)){if(pa(e))throw hf(),Error(P(418));for(;t;)ff(e,t),t=Nt(t.nextSibling)}if(ou(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=Nt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=Re?Nt(e.stateNode.nextSibling):null;return!0}function hf(){for(var e=Le;e;)e=Nt(e.nextSibling)}function $n(){Le=Re=null,$=!1}function yl(e){Xe===null?Xe=[e]:Xe.push(e)}var Hy=bt.ReactCurrentBatchConfig;function ur(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function _i(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function au(e){var t=e._init;return t(e._payload)}function mf(e){function t(m,h){if(e){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=Ot(m,h),m.index=0,m.sibling=null,m}function s(m,h,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,h,g,w){return h===null||h.tag!==6?(h=bo(g,m.mode,w),h.return=m,h):(h=i(h,g),h.return=m,h)}function l(m,h,g,w){var S=g.type;return S===wn?d(m,h,g.props.children,w,g.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Pt&&au(S)===h.type)?(w=i(h,g.props),w.ref=ur(m,h,g),w.return=m,w):(w=Gi(g.type,g.key,g.props,null,m.mode,w),w.ref=ur(m,h,g),w.return=m,w)}function c(m,h,g,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=Co(g,m.mode,w),h.return=m,h):(h=i(h,g.children||[]),h.return=m,h)}function d(m,h,g,w,S){return h===null||h.tag!==7?(h=an(g,m.mode,w,S),h.return=m,h):(h=i(h,g),h.return=m,h)}function p(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=bo(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case gi:return g=Gi(h.type,h.key,h.props,null,m.mode,g),g.ref=ur(m,null,h),g.return=m,g;case xn:return h=Co(h,m.mode,g),h.return=m,h;case Pt:var w=h._init;return p(m,w(h._payload),g)}if(gr(h)||sr(h))return h=an(h,m.mode,g,null),h.return=m,h;_i(m,h)}return null}function f(m,h,g,w){var S=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(m,h,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case gi:return g.key===S?l(m,h,g,w):null;case xn:return g.key===S?c(m,h,g,w):null;case Pt:return S=g._init,f(m,h,S(g._payload),w)}if(gr(g)||sr(g))return S!==null?null:d(m,h,g,w,null);_i(m,g)}return null}function y(m,h,g,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,a(h,m,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case gi:return m=m.get(w.key===null?g:w.key)||null,l(h,m,w,S);case xn:return m=m.get(w.key===null?g:w.key)||null,c(h,m,w,S);case Pt:var j=w._init;return y(m,h,g,j(w._payload),S)}if(gr(w)||sr(w))return m=m.get(g)||null,d(h,m,w,S,null);_i(h,w)}return null}function v(m,h,g,w){for(var S=null,j=null,_=h,k=h=0,M=null;_!==null&&k<g.length;k++){_.index>k?(M=_,_=null):M=_.sibling;var E=f(m,_,g[k],w);if(E===null){_===null&&(_=M);break}e&&_&&E.alternate===null&&t(m,_),h=s(E,h,k),j===null?S=E:j.sibling=E,j=E,_=M}if(k===g.length)return n(m,_),$&&Xt(m,k),S;if(_===null){for(;k<g.length;k++)_=p(m,g[k],w),_!==null&&(h=s(_,h,k),j===null?S=_:j.sibling=_,j=_);return $&&Xt(m,k),S}for(_=r(m,_);k<g.length;k++)M=y(_,m,k,g[k],w),M!==null&&(e&&M.alternate!==null&&_.delete(M.key===null?k:M.key),h=s(M,h,k),j===null?S=M:j.sibling=M,j=M);return e&&_.forEach(function(F){return t(m,F)}),$&&Xt(m,k),S}function x(m,h,g,w){var S=sr(g);if(typeof S!="function")throw Error(P(150));if(g=S.call(g),g==null)throw Error(P(151));for(var j=S=null,_=h,k=h=0,M=null,E=g.next();_!==null&&!E.done;k++,E=g.next()){_.index>k?(M=_,_=null):M=_.sibling;var F=f(m,_,E.value,w);if(F===null){_===null&&(_=M);break}e&&_&&F.alternate===null&&t(m,_),h=s(F,h,k),j===null?S=F:j.sibling=F,j=F,_=M}if(E.done)return n(m,_),$&&Xt(m,k),S;if(_===null){for(;!E.done;k++,E=g.next())E=p(m,E.value,w),E!==null&&(h=s(E,h,k),j===null?S=E:j.sibling=E,j=E);return $&&Xt(m,k),S}for(_=r(m,_);!E.done;k++,E=g.next())E=y(_,m,k,E.value,w),E!==null&&(e&&E.alternate!==null&&_.delete(E.key===null?k:E.key),h=s(E,h,k),j===null?S=E:j.sibling=E,j=E);return e&&_.forEach(function(Te){return t(m,Te)}),$&&Xt(m,k),S}function b(m,h,g,w){if(typeof g=="object"&&g!==null&&g.type===wn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case gi:e:{for(var S=g.key,j=h;j!==null;){if(j.key===S){if(S=g.type,S===wn){if(j.tag===7){n(m,j.sibling),h=i(j,g.props.children),h.return=m,m=h;break e}}else if(j.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Pt&&au(S)===j.type){n(m,j.sibling),h=i(j,g.props),h.ref=ur(m,j,g),h.return=m,m=h;break e}n(m,j);break}else t(m,j);j=j.sibling}g.type===wn?(h=an(g.props.children,m.mode,w,g.key),h.return=m,m=h):(w=Gi(g.type,g.key,g.props,null,m.mode,w),w.ref=ur(m,h,g),w.return=m,m=w)}return o(m);case xn:e:{for(j=g.key;h!==null;){if(h.key===j)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(m,h.sibling),h=i(h,g.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=Co(g,m.mode,w),h.return=m,m=h}return o(m);case Pt:return j=g._init,b(m,h,j(g._payload),w)}if(gr(g))return v(m,h,g,w);if(sr(g))return x(m,h,g,w);_i(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,g),h.return=m,m=h):(n(m,h),h=bo(g,m.mode,w),h.return=m,m=h),o(m)):n(m,h)}return b}var Hn=mf(!0),gf=mf(!1),us=qt(null),ds=null,Tn=null,vl=null;function xl(){vl=Tn=ds=null}function wl(e){var t=us.current;U(us),e._currentValue=t}function ha(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function On(e,t){ds=e,vl=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ce=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(vl!==e)if(e={context:e,memoizedValue:t,next:null},Tn===null){if(ds===null)throw Error(P(308));Tn=e,ds.dependencies={lanes:0,firstContext:e}}else Tn=Tn.next=e;return t}var nn=null;function Sl(e){nn===null?nn=[e]:nn.push(e)}function yf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Sl(t)):(n.next=i.next,i.next=n),t.interleaved=n,wt(e,r)}function wt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var _t=!1;function kl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,wt(e,n)}return i=r.interleaved,i===null?(t.next=t,Sl(r)):(t.next=i.next,i.next=t),r.interleaved=t,wt(e,n)}function Bi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,al(e,n)}}function lu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ps(e,t,n,r){var i=e.updateQueue;_t=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,y=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,x=a;switch(f=t,y=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){p=v.call(y,p,f);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(y,p,f):v,f==null)break e;p=Q({},p,f);break e;case 2:_t=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=y,l=p):d=d.next=y,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);pn|=o,e.lanes=o,e.memoizedState=p}}function cu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var li={},st=qt(li),qr=qt(li),Gr=qt(li);function rn(e){if(e===li)throw Error(P(174));return e}function bl(e,t){switch(O(Gr,t),O(qr,e),O(st,li),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ko(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ko(t,e)}U(st),O(st,t)}function qn(){U(st),U(qr),U(Gr)}function xf(e){rn(Gr.current);var t=rn(st.current),n=Ko(t,e.type);t!==n&&(O(qr,e),O(st,n))}function Cl(e){qr.current===e&&(U(st),U(qr))}var q=qt(0);function fs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=[];function jl(){for(var e=0;e<yo.length;e++)yo[e]._workInProgressVersionPrimary=null;yo.length=0}var Ui=bt.ReactCurrentDispatcher,vo=bt.ReactCurrentBatchConfig,dn=0,K=null,ie=null,ae=null,hs=!1,_r=!1,Kr=0,qy=0;function fe(){throw Error(P(321))}function Pl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!et(e[n],t[n]))return!1;return!0}function _l(e,t,n,r,i,s){if(dn=s,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ui.current=e===null||e.memoizedState===null?Jy:Xy,e=n(r,i),_r){s=0;do{if(_r=!1,Kr=0,25<=s)throw Error(P(301));s+=1,ae=ie=null,t.updateQueue=null,Ui.current=Yy,e=n(r,i)}while(_r)}if(Ui.current=ms,t=ie!==null&&ie.next!==null,dn=0,ae=ie=K=null,hs=!1,t)throw Error(P(300));return e}function Tl(){var e=Kr!==0;return Kr=0,e}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?K.memoizedState=ae=e:ae=ae.next=e,ae}function qe(){if(ie===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=ie.next;var t=ae===null?K.memoizedState:ae.next;if(t!==null)ae=t,ie=e;else{if(e===null)throw Error(P(310));ie=e,e={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ae===null?K.memoizedState=ae=e:ae=ae.next=e}return ae}function Qr(e,t){return typeof t=="function"?t(e):t}function xo(e){var t=qe(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((dn&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,o=r):l=l.next=p,K.lanes|=d,pn|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,et(r,t.memoizedState)||(Ce=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,K.lanes|=s,pn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wo(e){var t=qe(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);et(s,t.memoizedState)||(Ce=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function wf(){}function Sf(e,t){var n=K,r=qe(),i=t(),s=!et(r.memoizedState,i);if(s&&(r.memoizedState=i,Ce=!0),r=r.queue,Al(Cf.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,Jr(9,bf.bind(null,n,r,i,t),void 0,null),le===null)throw Error(P(349));dn&30||kf(n,t,i)}return i}function kf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bf(e,t,n,r){t.value=n,t.getSnapshot=r,jf(t)&&Pf(e)}function Cf(e,t,n){return n(function(){jf(t)&&Pf(e)})}function jf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!et(e,n)}catch{return!0}}function Pf(e){var t=wt(e,1);t!==null&&Ze(t,e,1,-1)}function uu(e){var t=nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qr,lastRenderedState:e},t.queue=e,e=e.dispatch=Qy.bind(null,K,e),[t.memoizedState,e]}function Jr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function _f(){return qe().memoizedState}function Wi(e,t,n,r){var i=nt();K.flags|=e,i.memoizedState=Jr(1|t,n,void 0,r===void 0?null:r)}function Ns(e,t,n,r){var i=qe();r=r===void 0?null:r;var s=void 0;if(ie!==null){var o=ie.memoizedState;if(s=o.destroy,r!==null&&Pl(r,o.deps)){i.memoizedState=Jr(t,n,s,r);return}}K.flags|=e,i.memoizedState=Jr(1|t,n,s,r)}function du(e,t){return Wi(8390656,8,e,t)}function Al(e,t){return Ns(2048,8,e,t)}function Tf(e,t){return Ns(4,2,e,t)}function Af(e,t){return Ns(4,4,e,t)}function Ef(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mf(e,t,n){return n=n!=null?n.concat([e]):null,Ns(4,4,Ef.bind(null,t,e),n)}function El(){}function Lf(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rf(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Df(e,t,n){return dn&21?(et(n,t)||(n=Fp(),K.lanes|=n,pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ce=!0),e.memoizedState=n)}function Gy(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=vo.transition;vo.transition={};try{e(!1),t()}finally{V=n,vo.transition=r}}function If(){return qe().memoizedState}function Ky(e,t,n){var r=Vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nf(e))zf(t,n);else if(n=yf(e,t,n,r),n!==null){var i=we();Ze(n,e,r,i),Ff(n,t,r)}}function Qy(e,t,n){var r=Vt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nf(e))zf(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,et(a,o)){var l=t.interleaved;l===null?(i.next=i,Sl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=yf(e,t,i,r),n!==null&&(i=we(),Ze(n,e,r,i),Ff(n,t,r))}}function Nf(e){var t=e.alternate;return e===K||t!==null&&t===K}function zf(e,t){_r=hs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ff(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,al(e,n)}}var ms={readContext:He,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},Jy={readContext:He,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:du,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wi(4194308,4,Ef.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wi(4,2,e,t)},useMemo:function(e,t){var n=nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ky.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:uu,useDebugValue:El,useDeferredValue:function(e){return nt().memoizedState=e},useTransition:function(){var e=uu(!1),t=e[0];return e=Gy.bind(null,e[1]),nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,i=nt();if($){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),le===null)throw Error(P(349));dn&30||kf(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,du(Cf.bind(null,r,s,e),[e]),r.flags|=2048,Jr(9,bf.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=nt(),t=le.identifierPrefix;if($){var n=ht,r=ft;n=(r&~(1<<32-Ye(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Xy={readContext:He,useCallback:Lf,useContext:He,useEffect:Al,useImperativeHandle:Mf,useInsertionEffect:Tf,useLayoutEffect:Af,useMemo:Rf,useReducer:xo,useRef:_f,useState:function(){return xo(Qr)},useDebugValue:El,useDeferredValue:function(e){var t=qe();return Df(t,ie.memoizedState,e)},useTransition:function(){var e=xo(Qr)[0],t=qe().memoizedState;return[e,t]},useMutableSource:wf,useSyncExternalStore:Sf,useId:If,unstable_isNewReconciler:!1},Yy={readContext:He,useCallback:Lf,useContext:He,useEffect:Al,useImperativeHandle:Mf,useInsertionEffect:Tf,useLayoutEffect:Af,useMemo:Rf,useReducer:wo,useRef:_f,useState:function(){return wo(Qr)},useDebugValue:El,useDeferredValue:function(e){var t=qe();return ie===null?t.memoizedState=e:Df(t,ie.memoizedState,e)},useTransition:function(){var e=wo(Qr)[0],t=qe().memoizedState;return[e,t]},useMutableSource:wf,useSyncExternalStore:Sf,useId:If,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ma(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zs={isMounted:function(e){return(e=e._reactInternals)?mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=we(),i=Vt(e),s=mt(r,i);s.payload=t,n!=null&&(s.callback=n),t=zt(e,s,i),t!==null&&(Ze(t,e,i,r),Bi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=we(),i=Vt(e),s=mt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=zt(e,s,i),t!==null&&(Ze(t,e,i,r),Bi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),r=Vt(e),i=mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=zt(e,i,r),t!==null&&(Ze(t,e,r,n),Bi(t,e,r))}};function pu(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Ur(n,r)||!Ur(i,s):!0}function Vf(e,t,n){var r=!1,i=Ut,s=t.contextType;return typeof s=="object"&&s!==null?s=He(s):(i=Pe(t)?cn:ve.current,r=t.contextTypes,s=(r=r!=null)?Wn(e,i):Ut),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function fu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zs.enqueueReplaceState(t,t.state,null)}function ga(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},kl(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=He(s):(s=Pe(t)?cn:ve.current,i.context=Wn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ma(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&zs.enqueueReplaceState(i,i.state,null),ps(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Gn(e,t){try{var n="",r=t;do n+=Pg(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function So(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ya(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Zy=typeof WeakMap=="function"?WeakMap:Map;function Of(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ys||(ys=!0,_a=r),ya(e,t)},n}function Bf(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ya(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ya(e,t),typeof r!="function"&&(Ft===null?Ft=new Set([this]):Ft.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function hu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zy;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=fv.bind(null,e,t,n),t.then(e,e))}function mu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,zt(n,t,1))),n.lanes|=1),e)}var ev=bt.ReactCurrentOwner,Ce=!1;function xe(e,t,n,r){t.child=e===null?gf(t,null,n,r):Hn(t,e.child,n,r)}function yu(e,t,n,r,i){n=n.render;var s=t.ref;return On(t,i),r=_l(e,t,n,r,s,i),n=Tl(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,St(e,t,i)):($&&n&&ml(t),t.flags|=1,xe(e,t,r,i),t.child)}function vu(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Fl(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Uf(e,t,s,r,i)):(e=Gi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ur,n(o,r)&&e.ref===t.ref)return St(e,t,i)}return t.flags|=1,e=Ot(s,r),e.ref=t.ref,e.return=t,t.child=e}function Uf(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Ur(s,r)&&e.ref===t.ref)if(Ce=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Ce=!0);else return t.lanes=e.lanes,St(e,t,i)}return va(e,t,n,r,i)}function Wf(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},O(En,Ee),Ee|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,O(En,Ee),Ee|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,O(En,Ee),Ee|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,O(En,Ee),Ee|=r;return xe(e,t,i,n),t.child}function $f(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function va(e,t,n,r,i){var s=Pe(n)?cn:ve.current;return s=Wn(t,s),On(t,i),n=_l(e,t,n,r,s,i),r=Tl(),e!==null&&!Ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,St(e,t,i)):($&&r&&ml(t),t.flags|=1,xe(e,t,n,i),t.child)}function xu(e,t,n,r,i){if(Pe(n)){var s=!0;as(t)}else s=!1;if(On(t,i),t.stateNode===null)$i(e,t),Vf(t,n,r),ga(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=He(c):(c=Pe(n)?cn:ve.current,c=Wn(t,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&fu(t,o,r,c),_t=!1;var f=t.memoizedState;o.state=f,ps(t,r,o,i),l=t.memoizedState,a!==r||f!==l||je.current||_t?(typeof d=="function"&&(ma(t,n,d,r),l=t.memoizedState),(a=_t||pu(t,n,a,r,f,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,vf(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Qe(t.type,a),o.props=c,p=t.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=He(l):(l=Pe(n)?cn:ve.current,l=Wn(t,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||f!==l)&&fu(t,o,r,l),_t=!1,f=t.memoizedState,o.state=f,ps(t,r,o,i);var v=t.memoizedState;a!==p||f!==v||je.current||_t?(typeof y=="function"&&(ma(t,n,y,r),v=t.memoizedState),(c=_t||pu(t,n,c,r,f,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),o.props=r,o.state=v,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return xa(e,t,n,r,s,i)}function xa(e,t,n,r,i,s){$f(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&iu(t,n,!1),St(e,t,s);r=t.stateNode,ev.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Hn(t,e.child,null,s),t.child=Hn(t,null,a,s)):xe(e,t,a,s),t.memoizedState=r.state,i&&iu(t,n,!0),t.child}function Hf(e){var t=e.stateNode;t.pendingContext?ru(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ru(e,t.context,!1),bl(e,t.containerInfo)}function wu(e,t,n,r,i){return $n(),yl(i),t.flags|=256,xe(e,t,n,r),t.child}var wa={dehydrated:null,treeContext:null,retryLane:0};function Sa(e){return{baseLanes:e,cachePool:null,transitions:null}}function qf(e,t,n){var r=t.pendingProps,i=q.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),O(q,i&1),e===null)return fa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Os(o,r,0,null),e=an(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Sa(n),t.memoizedState=wa,e):Ml(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return tv(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Ot(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ot(a,s):(s=an(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Sa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=wa,r}return s=e.child,e=s.sibling,r=Ot(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ml(e,t){return t=Os({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ti(e,t,n,r){return r!==null&&yl(r),Hn(t,e.child,null,n),e=Ml(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tv(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=So(Error(P(422))),Ti(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Os({mode:"visible",children:r.children},i,0,null),s=an(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Hn(t,e.child,null,o),t.child.memoizedState=Sa(o),t.memoizedState=wa,s);if(!(t.mode&1))return Ti(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(P(419)),r=So(s,r,void 0),Ti(e,t,o,r)}if(a=(o&e.childLanes)!==0,Ce||a){if(r=le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,wt(e,i),Ze(r,e,i,-1))}return zl(),r=So(Error(P(421))),Ti(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=hv.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Le=Nt(i.nextSibling),Re=t,$=!0,Xe=null,e!==null&&(Be[Ue++]=ft,Be[Ue++]=ht,Be[Ue++]=un,ft=e.id,ht=e.overflow,un=t),t=Ml(t,r.children),t.flags|=4096,t)}function Su(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ha(e.return,t,n)}function ko(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Gf(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(xe(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Su(e,n,t);else if(e.tag===19)Su(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(O(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&fs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ko(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ko(t,!0,n,null,s);break;case"together":ko(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $i(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function St(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Ot(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ot(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nv(e,t,n){switch(t.tag){case 3:Hf(t),$n();break;case 5:xf(t);break;case 1:Pe(t.type)&&as(t);break;case 4:bl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;O(us,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(O(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?qf(e,t,n):(O(q,q.current&1),e=St(e,t,n),e!==null?e.sibling:null);O(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Gf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,Wf(e,t,n)}return St(e,t,n)}var Kf,ka,Qf,Jf;Kf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ka=function(){};Qf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,rn(st.current);var s=null;switch(n){case"input":i=$o(e,i),r=$o(e,r),s=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),s=[];break;case"textarea":i=Go(e,i),r=Go(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ss)}Qo(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ir.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ir.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&B("scroll",e),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};Jf=function(e,t,n,r){n!==r&&(t.flags|=4)};function dr(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rv(e,t,n){var r=t.pendingProps;switch(gl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Pe(t.type)&&os(),he(t),null;case 3:return r=t.stateNode,qn(),U(je),U(ve),jl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Pi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(Ea(Xe),Xe=null))),ka(e,t),he(t),null;case 5:Cl(t);var i=rn(Gr.current);if(n=t.type,e!==null&&t.stateNode!=null)Qf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return he(t),null}if(e=rn(st.current),Pi(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[rt]=t,r[Hr]=s,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<vr.length;i++)B(vr[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":Ec(r,s),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},B("invalid",r);break;case"textarea":Lc(r,s),B("invalid",r)}Qo(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ji(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ji(r.textContent,a,e),i=["children",""+a]):Ir.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&B("scroll",r)}switch(n){case"input":yi(r),Mc(r,s,!0);break;case"textarea":yi(r),Rc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ss)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[rt]=t,e[Hr]=r,Kf(e,t,!1,!1),t.stateNode=e;e:{switch(o=Jo(n,r),n){case"dialog":B("cancel",e),B("close",e),i=r;break;case"iframe":case"object":case"embed":B("load",e),i=r;break;case"video":case"audio":for(i=0;i<vr.length;i++)B(vr[i],e);i=r;break;case"source":B("error",e),i=r;break;case"img":case"image":case"link":B("error",e),B("load",e),i=r;break;case"details":B("toggle",e),i=r;break;case"input":Ec(e,r),i=$o(e,r),B("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),B("invalid",e);break;case"textarea":Lc(e,r),i=Go(e,r),B("invalid",e);break;default:i=r}Qo(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Pp(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Cp(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Nr(e,l):typeof l=="number"&&Nr(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ir.hasOwnProperty(s)?l!=null&&s==="onScroll"&&B("scroll",e):l!=null&&tl(e,s,l,o))}switch(n){case"input":yi(e),Mc(e,r,!1);break;case"textarea":yi(e),Rc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Bt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Nn(e,!!r.multiple,s,!1):r.defaultValue!=null&&Nn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ss)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)Jf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=rn(Gr.current),rn(st.current),Pi(t)){if(r=t.stateNode,n=t.memoizedProps,r[rt]=t,(s=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:ji(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ji(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[rt]=t,t.stateNode=r}return he(t),null;case 13:if(U(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&Le!==null&&t.mode&1&&!(t.flags&128))hf(),$n(),t.flags|=98560,s=!1;else if(s=Pi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(P(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[rt]=t}else $n(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),s=!1}else Xe!==null&&(Ea(Xe),Xe=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?se===0&&(se=3):zl())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return qn(),ka(e,t),e===null&&Wr(t.stateNode.containerInfo),he(t),null;case 10:return wl(t.type._context),he(t),null;case 17:return Pe(t.type)&&os(),he(t),null;case 19:if(U(q),s=t.memoizedState,s===null)return he(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)dr(s,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=fs(e),o!==null){for(t.flags|=128,dr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return O(q,q.current&1|2),t.child}e=e.sibling}s.tail!==null&&te()>Kn&&(t.flags|=128,r=!0,dr(s,!1),t.lanes=4194304)}else{if(!r)if(e=fs(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),dr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!$)return he(t),null}else 2*te()-s.renderingStartTime>Kn&&n!==1073741824&&(t.flags|=128,r=!0,dr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=te(),t.sibling=null,n=q.current,O(q,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return Nl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ee&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function iv(e,t){switch(gl(t),t.tag){case 1:return Pe(t.type)&&os(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qn(),U(je),U(ve),jl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Cl(t),null;case 13:if(U(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));$n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(q),null;case 4:return qn(),null;case 10:return wl(t.type._context),null;case 22:case 23:return Nl(),null;case 24:return null;default:return null}}var Ai=!1,ge=!1,sv=typeof WeakSet=="function"?WeakSet:Set,A=null;function An(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function ba(e,t,n){try{n()}catch(r){Z(e,t,r)}}var ku=!1;function ov(e,t){if(oa=ns,e=ef(),hl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,p=e,f=null;t:for(;;){for(var y;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(y=p.firstChild)!==null;)f=p,p=y;for(;;){if(p===e)break t;if(f===n&&++c===i&&(a=o),f===s&&++d===r&&(l=o),(y=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(aa={focusedElem:e,selectionRange:n},ns=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,b=v.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:Qe(t.type,x),b);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){Z(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return v=ku,ku=!1,v}function Tr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&ba(t,n,s)}i=i.next}while(i!==r)}}function Fs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ca(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xf(e){var t=e.alternate;t!==null&&(e.alternate=null,Xf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[rt],delete t[Hr],delete t[ua],delete t[Uy],delete t[Wy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yf(e){return e.tag===5||e.tag===3||e.tag===4}function bu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ja(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ss));else if(r!==4&&(e=e.child,e!==null))for(ja(e,t,n),e=e.sibling;e!==null;)ja(e,t,n),e=e.sibling}function Pa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Pa(e,t,n),e=e.sibling;e!==null;)Pa(e,t,n),e=e.sibling}var ce=null,Je=!1;function Ct(e,t,n){for(n=n.child;n!==null;)Zf(e,t,n),n=n.sibling}function Zf(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(Es,n)}catch{}switch(n.tag){case 5:ge||An(n,t);case 6:var r=ce,i=Je;ce=null,Ct(e,t,n),ce=r,Je=i,ce!==null&&(Je?(e=ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ce.removeChild(n.stateNode));break;case 18:ce!==null&&(Je?(e=ce,n=n.stateNode,e.nodeType===8?mo(e.parentNode,n):e.nodeType===1&&mo(e,n),Or(e)):mo(ce,n.stateNode));break;case 4:r=ce,i=Je,ce=n.stateNode.containerInfo,Je=!0,Ct(e,t,n),ce=r,Je=i;break;case 0:case 11:case 14:case 15:if(!ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ba(n,t,o),i=i.next}while(i!==r)}Ct(e,t,n);break;case 1:if(!ge&&(An(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Z(n,t,a)}Ct(e,t,n);break;case 21:Ct(e,t,n);break;case 22:n.mode&1?(ge=(r=ge)||n.memoizedState!==null,Ct(e,t,n),ge=r):Ct(e,t,n);break;default:Ct(e,t,n)}}function Cu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sv),t.forEach(function(r){var i=mv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ge(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:ce=a.stateNode,Je=!1;break e;case 3:ce=a.stateNode.containerInfo,Je=!0;break e;case 4:ce=a.stateNode.containerInfo,Je=!0;break e}a=a.return}if(ce===null)throw Error(P(160));Zf(s,o,i),ce=null,Je=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Z(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)eh(t,e),t=t.sibling}function eh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),tt(e),r&4){try{Tr(3,e,e.return),Fs(3,e)}catch(x){Z(e,e.return,x)}try{Tr(5,e,e.return)}catch(x){Z(e,e.return,x)}}break;case 1:Ge(t,e),tt(e),r&512&&n!==null&&An(n,n.return);break;case 5:if(Ge(t,e),tt(e),r&512&&n!==null&&An(n,n.return),e.flags&32){var i=e.stateNode;try{Nr(i,"")}catch(x){Z(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Sp(i,s),Jo(a,o);var c=Jo(a,s);for(o=0;o<l.length;o+=2){var d=l[o],p=l[o+1];d==="style"?Pp(i,p):d==="dangerouslySetInnerHTML"?Cp(i,p):d==="children"?Nr(i,p):tl(i,d,p,c)}switch(a){case"input":Ho(i,s);break;case"textarea":kp(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Nn(i,!!s.multiple,y,!1):f!==!!s.multiple&&(s.defaultValue!=null?Nn(i,!!s.multiple,s.defaultValue,!0):Nn(i,!!s.multiple,s.multiple?[]:"",!1))}i[Hr]=s}catch(x){Z(e,e.return,x)}}break;case 6:if(Ge(t,e),tt(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(x){Z(e,e.return,x)}}break;case 3:if(Ge(t,e),tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Or(t.containerInfo)}catch(x){Z(e,e.return,x)}break;case 4:Ge(t,e),tt(e);break;case 13:Ge(t,e),tt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Dl=te())),r&4&&Cu(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(c=ge)||d,Ge(t,e),ge=c):Ge(t,e),tt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(A=e,d=e.child;d!==null;){for(p=A=d;A!==null;){switch(f=A,y=f.child,f.tag){case 0:case 11:case 14:case 15:Tr(4,f,f.return);break;case 1:An(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(x){Z(r,n,x)}}break;case 5:An(f,f.return);break;case 22:if(f.memoizedState!==null){Pu(p);continue}}y!==null?(y.return=f,A=y):Pu(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=jp("display",o))}catch(x){Z(e,e.return,x)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(x){Z(e,e.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ge(t,e),tt(e),r&4&&Cu(e);break;case 21:break;default:Ge(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Yf(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Nr(i,""),r.flags&=-33);var s=bu(e);Pa(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=bu(e);ja(e,a,o);break;default:throw Error(P(161))}}catch(l){Z(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function av(e,t,n){A=e,th(e)}function th(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var i=A,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ai;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ge;a=Ai;var c=ge;if(Ai=o,(ge=l)&&!c)for(A=i;A!==null;)o=A,l=o.child,o.tag===22&&o.memoizedState!==null?_u(i):l!==null?(l.return=o,A=l):_u(i);for(;s!==null;)A=s,th(s),s=s.sibling;A=i,Ai=a,ge=c}ju(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,A=s):ju(e)}}function ju(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||Fs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&cu(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}cu(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Or(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}ge||t.flags&512&&Ca(t)}catch(f){Z(t,t.return,f)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function Pu(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function _u(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fs(4,t)}catch(l){Z(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Z(t,i,l)}}var s=t.return;try{Ca(t)}catch(l){Z(t,s,l)}break;case 5:var o=t.return;try{Ca(t)}catch(l){Z(t,o,l)}}}catch(l){Z(t,t.return,l)}if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}var lv=Math.ceil,gs=bt.ReactCurrentDispatcher,Ll=bt.ReactCurrentOwner,$e=bt.ReactCurrentBatchConfig,z=0,le=null,ne=null,de=0,Ee=0,En=qt(0),se=0,Xr=null,pn=0,Vs=0,Rl=0,Ar=null,be=null,Dl=0,Kn=1/0,dt=null,ys=!1,_a=null,Ft=null,Ei=!1,Lt=null,vs=0,Er=0,Ta=null,Hi=-1,qi=0;function we(){return z&6?te():Hi!==-1?Hi:Hi=te()}function Vt(e){return e.mode&1?z&2&&de!==0?de&-de:Hy.transition!==null?(qi===0&&(qi=Fp()),qi):(e=V,e!==0||(e=window.event,e=e===void 0?16:Hp(e.type)),e):1}function Ze(e,t,n,r){if(50<Er)throw Er=0,Ta=null,Error(P(185));si(e,n,r),(!(z&2)||e!==le)&&(e===le&&(!(z&2)&&(Vs|=n),se===4&&At(e,de)),_e(e,r),n===1&&z===0&&!(t.mode&1)&&(Kn=te()+500,Is&&Gt()))}function _e(e,t){var n=e.callbackNode;Hg(e,t);var r=ts(e,e===le?de:0);if(r===0)n!==null&&Nc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Nc(n),t===1)e.tag===0?$y(Tu.bind(null,e)):df(Tu.bind(null,e)),Oy(function(){!(z&6)&&Gt()}),n=null;else{switch(Vp(r)){case 1:n=ol;break;case 4:n=Np;break;case 16:n=es;break;case 536870912:n=zp;break;default:n=es}n=ch(n,nh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nh(e,t){if(Hi=-1,qi=0,z&6)throw Error(P(327));var n=e.callbackNode;if(Bn()&&e.callbackNode!==n)return null;var r=ts(e,e===le?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xs(e,r);else{t=r;var i=z;z|=2;var s=ih();(le!==e||de!==t)&&(dt=null,Kn=te()+500,on(e,t));do try{dv();break}catch(a){rh(e,a)}while(!0);xl(),gs.current=s,z=i,ne!==null?t=0:(le=null,de=0,t=se)}if(t!==0){if(t===2&&(i=ta(e),i!==0&&(r=i,t=Aa(e,i))),t===1)throw n=Xr,on(e,0),At(e,r),_e(e,te()),n;if(t===6)At(e,r);else{if(i=e.current.alternate,!(r&30)&&!cv(i)&&(t=xs(e,r),t===2&&(s=ta(e),s!==0&&(r=s,t=Aa(e,s))),t===1))throw n=Xr,on(e,0),At(e,r),_e(e,te()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Yt(e,be,dt);break;case 3:if(At(e,r),(r&130023424)===r&&(t=Dl+500-te(),10<t)){if(ts(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ca(Yt.bind(null,e,be,dt),t);break}Yt(e,be,dt);break;case 4:if(At(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ye(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lv(r/1960))-r,10<r){e.timeoutHandle=ca(Yt.bind(null,e,be,dt),r);break}Yt(e,be,dt);break;case 5:Yt(e,be,dt);break;default:throw Error(P(329))}}}return _e(e,te()),e.callbackNode===n?nh.bind(null,e):null}function Aa(e,t){var n=Ar;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=xs(e,t),e!==2&&(t=be,be=n,t!==null&&Ea(t)),e}function Ea(e){be===null?be=e:be.push.apply(be,e)}function cv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!et(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~Rl,t&=~Vs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ye(t),r=1<<n;e[n]=-1,t&=~r}}function Tu(e){if(z&6)throw Error(P(327));Bn();var t=ts(e,0);if(!(t&1))return _e(e,te()),null;var n=xs(e,t);if(e.tag!==0&&n===2){var r=ta(e);r!==0&&(t=r,n=Aa(e,r))}if(n===1)throw n=Xr,on(e,0),At(e,t),_e(e,te()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Yt(e,be,dt),_e(e,te()),null}function Il(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(Kn=te()+500,Is&&Gt())}}function fn(e){Lt!==null&&Lt.tag===0&&!(z&6)&&Bn();var t=z;z|=1;var n=$e.transition,r=V;try{if($e.transition=null,V=1,e)return e()}finally{V=r,$e.transition=n,z=t,!(z&6)&&Gt()}}function Nl(){Ee=En.current,U(En)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Vy(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(gl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&os();break;case 3:qn(),U(je),U(ve),jl();break;case 5:Cl(r);break;case 4:qn();break;case 13:U(q);break;case 19:U(q);break;case 10:wl(r.type._context);break;case 22:case 23:Nl()}n=n.return}if(le=e,ne=e=Ot(e.current,null),de=Ee=t,se=0,Xr=null,Rl=Vs=pn=0,be=Ar=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}nn=null}return e}function rh(e,t){do{var n=ne;try{if(xl(),Ui.current=ms,hs){for(var r=K.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hs=!1}if(dn=0,ae=ie=K=null,_r=!1,Kr=0,Ll.current=null,n===null||n.return===null){se=1,Xr=t,ne=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=de,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=mu(o);if(y!==null){y.flags&=-257,gu(y,o,a,s,t),y.mode&1&&hu(s,c,t),t=y,l=c;var v=t.updateQueue;if(v===null){var x=new Set;x.add(l),t.updateQueue=x}else v.add(l);break e}else{if(!(t&1)){hu(s,c,t),zl();break e}l=Error(P(426))}}else if($&&a.mode&1){var b=mu(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),gu(b,o,a,s,t),yl(Gn(l,a));break e}}s=l=Gn(l,a),se!==4&&(se=2),Ar===null?Ar=[s]:Ar.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=Of(s,l,t);lu(s,m);break e;case 1:a=l;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ft===null||!Ft.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=Bf(s,a,t);lu(s,w);break e}}s=s.return}while(s!==null)}oh(n)}catch(S){t=S,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(!0)}function ih(){var e=gs.current;return gs.current=ms,e===null?ms:e}function zl(){(se===0||se===3||se===2)&&(se=4),le===null||!(pn&268435455)&&!(Vs&268435455)||At(le,de)}function xs(e,t){var n=z;z|=2;var r=ih();(le!==e||de!==t)&&(dt=null,on(e,t));do try{uv();break}catch(i){rh(e,i)}while(!0);if(xl(),z=n,gs.current=r,ne!==null)throw Error(P(261));return le=null,de=0,se}function uv(){for(;ne!==null;)sh(ne)}function dv(){for(;ne!==null&&!Ng();)sh(ne)}function sh(e){var t=lh(e.alternate,e,Ee);e.memoizedProps=e.pendingProps,t===null?oh(e):ne=t,Ll.current=null}function oh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=iv(n,t),n!==null){n.flags&=32767,ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,ne=null;return}}else if(n=rv(n,t,Ee),n!==null){ne=n;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);se===0&&(se=5)}function Yt(e,t,n){var r=V,i=$e.transition;try{$e.transition=null,V=1,pv(e,t,n,r)}finally{$e.transition=i,V=r}return null}function pv(e,t,n,r){do Bn();while(Lt!==null);if(z&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(qg(e,s),e===le&&(ne=le=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ei||(Ei=!0,ch(es,function(){return Bn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$e.transition,$e.transition=null;var o=V;V=1;var a=z;z|=4,Ll.current=null,ov(e,n),eh(n,e),Ly(aa),ns=!!oa,aa=oa=null,e.current=n,av(n),zg(),z=a,V=o,$e.transition=s}else e.current=n;if(Ei&&(Ei=!1,Lt=e,vs=i),s=e.pendingLanes,s===0&&(Ft=null),Og(n.stateNode),_e(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ys)throw ys=!1,e=_a,_a=null,e;return vs&1&&e.tag!==0&&Bn(),s=e.pendingLanes,s&1?e===Ta?Er++:(Er=0,Ta=e):Er=0,Gt(),null}function Bn(){if(Lt!==null){var e=Vp(vs),t=$e.transition,n=V;try{if($e.transition=null,V=16>e?16:e,Lt===null)var r=!1;else{if(e=Lt,Lt=null,vs=0,z&6)throw Error(P(331));var i=z;for(z|=4,A=e.current;A!==null;){var s=A,o=s.child;if(A.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(A=c;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:Tr(8,d,s)}var p=d.child;if(p!==null)p.return=d,A=p;else for(;A!==null;){d=A;var f=d.sibling,y=d.return;if(Xf(d),d===c){A=null;break}if(f!==null){f.return=y,A=f;break}A=y}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var b=x.sibling;x.sibling=null,x=b}while(x!==null)}}A=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,A=o;else e:for(;A!==null;){if(s=A,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Tr(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,A=m;break e}A=s.return}}var h=e.current;for(A=h;A!==null;){o=A;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,A=g;else e:for(o=h;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Fs(9,a)}}catch(S){Z(a,a.return,S)}if(a===o){A=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,A=w;break e}A=a.return}}if(z=i,Gt(),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(Es,e)}catch{}r=!0}return r}finally{V=n,$e.transition=t}}return!1}function Au(e,t,n){t=Gn(n,t),t=Of(e,t,1),e=zt(e,t,1),t=we(),e!==null&&(si(e,1,t),_e(e,t))}function Z(e,t,n){if(e.tag===3)Au(e,e,n);else for(;t!==null;){if(t.tag===3){Au(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ft===null||!Ft.has(r))){e=Gn(n,e),e=Bf(t,e,1),t=zt(t,e,1),e=we(),t!==null&&(si(t,1,e),_e(t,e));break}}t=t.return}}function fv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(de&n)===n&&(se===4||se===3&&(de&130023424)===de&&500>te()-Dl?on(e,0):Rl|=n),_e(e,t)}function ah(e,t){t===0&&(e.mode&1?(t=wi,wi<<=1,!(wi&130023424)&&(wi=4194304)):t=1);var n=we();e=wt(e,t),e!==null&&(si(e,t,n),_e(e,n))}function hv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ah(e,n)}function mv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),ah(e,n)}var lh;lh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ce=!1,nv(e,t,n);Ce=!!(e.flags&131072)}else Ce=!1,$&&t.flags&1048576&&pf(t,cs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$i(e,t),e=t.pendingProps;var i=Wn(t,ve.current);On(t,n),i=_l(null,t,r,e,i,n);var s=Tl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(s=!0,as(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,kl(t),i.updater=zs,t.stateNode=i,i._reactInternals=t,ga(t,r,e,n),t=xa(null,t,r,!0,s,n)):(t.tag=0,$&&s&&ml(t),xe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch($i(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=yv(r),e=Qe(r,e),i){case 0:t=va(null,t,r,e,n);break e;case 1:t=xu(null,t,r,e,n);break e;case 11:t=yu(null,t,r,e,n);break e;case 14:t=vu(null,t,r,Qe(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),va(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),xu(e,t,r,i,n);case 3:e:{if(Hf(t),e===null)throw Error(P(387));r=t.pendingProps,s=t.memoizedState,i=s.element,vf(e,t),ps(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Gn(Error(P(423)),t),t=wu(e,t,r,n,i);break e}else if(r!==i){i=Gn(Error(P(424)),t),t=wu(e,t,r,n,i);break e}else for(Le=Nt(t.stateNode.containerInfo.firstChild),Re=t,$=!0,Xe=null,n=gf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($n(),r===i){t=St(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return xf(t),e===null&&fa(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,la(r,i)?o=null:s!==null&&la(r,s)&&(t.flags|=32),$f(e,t),xe(e,t,o,n),t.child;case 6:return e===null&&fa(t),null;case 13:return qf(e,t,n);case 4:return bl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Hn(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),yu(e,t,r,i,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,O(us,r._currentValue),r._currentValue=o,s!==null)if(et(s.value,o)){if(s.children===i.children&&!je.current){t=St(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=mt(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ha(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ha(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,On(t,n),i=He(i),r=r(i),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,i=Qe(r,t.pendingProps),i=Qe(r.type,i),vu(e,t,r,i,n);case 15:return Uf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Qe(r,i),$i(e,t),t.tag=1,Pe(r)?(e=!0,as(t)):e=!1,On(t,n),Vf(t,r,i),ga(t,r,i,n),xa(null,t,r,!0,e,n);case 19:return Gf(e,t,n);case 22:return Wf(e,t,n)}throw Error(P(156,t.tag))};function ch(e,t){return Ip(e,t)}function gv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function We(e,t,n,r){return new gv(e,t,n,r)}function Fl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yv(e){if(typeof e=="function")return Fl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rl)return 11;if(e===il)return 14}return 2}function Ot(e,t){var n=e.alternate;return n===null?(n=We(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Gi(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Fl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case wn:return an(n.children,i,s,t);case nl:o=8,i|=8;break;case Oo:return e=We(12,n,t,i|2),e.elementType=Oo,e.lanes=s,e;case Bo:return e=We(13,n,t,i),e.elementType=Bo,e.lanes=s,e;case Uo:return e=We(19,n,t,i),e.elementType=Uo,e.lanes=s,e;case vp:return Os(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gp:o=10;break e;case yp:o=9;break e;case rl:o=11;break e;case il:o=14;break e;case Pt:o=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=We(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function an(e,t,n,r){return e=We(7,e,r,t),e.lanes=n,e}function Os(e,t,n,r){return e=We(22,e,r,t),e.elementType=vp,e.lanes=n,e.stateNode={isHidden:!1},e}function bo(e,t,n){return e=We(6,e,null,t),e.lanes=n,e}function Co(e,t,n){return t=We(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ro(0),this.expirationTimes=ro(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ro(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vl(e,t,n,r,i,s,o,a,l){return e=new vv(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=We(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kl(s),e}function xv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function uh(e){if(!e)return Ut;e=e._reactInternals;e:{if(mn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Pe(n))return uf(e,n,t)}return t}function dh(e,t,n,r,i,s,o,a,l){return e=Vl(n,r,!0,e,i,s,o,a,l),e.context=uh(null),n=e.current,r=we(),i=Vt(n),s=mt(r,i),s.callback=t??null,zt(n,s,i),e.current.lanes=i,si(e,i,r),_e(e,r),e}function Bs(e,t,n,r){var i=t.current,s=we(),o=Vt(i);return n=uh(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=zt(i,t,o),e!==null&&(Ze(e,i,o,s),Bi(e,i,o)),o}function ws(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Eu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ol(e,t){Eu(e,t),(e=e.alternate)&&Eu(e,t)}function wv(){return null}var ph=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bl(e){this._internalRoot=e}Us.prototype.render=Bl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Bs(e,t,null,null)};Us.prototype.unmount=Bl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fn(function(){Bs(null,e,null,null)}),t[xt]=null}};function Us(e){this._internalRoot=e}Us.prototype.unstable_scheduleHydration=function(e){if(e){var t=Up();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tt.length&&t!==0&&t<Tt[n].priority;n++);Tt.splice(n,0,e),n===0&&$p(e)}};function Ul(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ws(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mu(){}function Sv(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ws(o);s.call(c)}}var o=dh(t,r,e,0,null,!1,!1,"",Mu);return e._reactRootContainer=o,e[xt]=o.current,Wr(e.nodeType===8?e.parentNode:e),fn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ws(l);a.call(c)}}var l=Vl(e,0,!1,null,null,!1,!1,"",Mu);return e._reactRootContainer=l,e[xt]=l.current,Wr(e.nodeType===8?e.parentNode:e),fn(function(){Bs(t,l,n,r)}),l}function $s(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ws(o);a.call(l)}}Bs(t,o,e,i)}else o=Sv(n,t,e,i,r);return ws(o)}Op=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=yr(t.pendingLanes);n!==0&&(al(t,n|1),_e(t,te()),!(z&6)&&(Kn=te()+500,Gt()))}break;case 13:fn(function(){var r=wt(e,1);if(r!==null){var i=we();Ze(r,e,1,i)}}),Ol(e,1)}};ll=function(e){if(e.tag===13){var t=wt(e,134217728);if(t!==null){var n=we();Ze(t,e,134217728,n)}Ol(e,134217728)}};Bp=function(e){if(e.tag===13){var t=Vt(e),n=wt(e,t);if(n!==null){var r=we();Ze(n,e,t,r)}Ol(e,t)}};Up=function(){return V};Wp=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};Yo=function(e,t,n){switch(t){case"input":if(Ho(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ds(r);if(!i)throw Error(P(90));wp(r),Ho(r,i)}}}break;case"textarea":kp(e,n);break;case"select":t=n.value,t!=null&&Nn(e,!!n.multiple,t,!1)}};Ap=Il;Ep=fn;var kv={usingClientEntryPoint:!1,Events:[ai,Cn,Ds,_p,Tp,Il]},pr={findFiberByHostInstance:tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bv={bundleType:pr.bundleType,version:pr.version,rendererPackageName:pr.rendererPackageName,rendererConfig:pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rp(e),e===null?null:e.stateNode},findFiberByHostInstance:pr.findFiberByHostInstance||wv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mi.isDisabled&&Mi.supportsFiber)try{Es=Mi.inject(bv),it=Mi}catch{}}ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kv;ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ul(t))throw Error(P(200));return xv(e,t,null,n)};ze.createRoot=function(e,t){if(!Ul(e))throw Error(P(299));var n=!1,r="",i=ph;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Vl(e,1,!1,null,null,n,!1,r,i),e[xt]=t.current,Wr(e.nodeType===8?e.parentNode:e),new Bl(t)};ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Rp(t),e=e===null?null:e.stateNode,e};ze.flushSync=function(e){return fn(e)};ze.hydrate=function(e,t,n){if(!Ws(t))throw Error(P(200));return $s(null,e,t,!0,n)};ze.hydrateRoot=function(e,t,n){if(!Ul(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ph;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=dh(t,null,e,1,n??null,i,!1,s,o),e[xt]=t.current,Wr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Us(t)};ze.render=function(e,t,n){if(!Ws(t))throw Error(P(200));return $s(null,e,t,!1,n)};ze.unmountComponentAtNode=function(e){if(!Ws(e))throw Error(P(40));return e._reactRootContainer?(fn(function(){$s(null,null,e,!1,function(){e._reactRootContainer=null,e[xt]=null})}),!0):!1};ze.unstable_batchedUpdates=Il;ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ws(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return $s(e,t,n,!1,r)};ze.version="18.3.1-next-f1338f8080-20240426";function fh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fh)}catch(e){console.error(e)}}fh(),pp.exports=ze;var Cv=pp.exports,Lu=Cv;Fo.createRoot=Lu.createRoot,Fo.hydrateRoot=Lu.hydrateRoot;const Me={name:"Dereck Goolsby-Bearsong",tagline:"Engineering Efficiency Through Intelligent Customer Support",role:"Senior Technical Support Engineer & AI Automation Specialist",email:"dkbearsong@gmail.com",formsubmitToken:"bedd3d68b8b31a40c0628e3a8d47e602",location:"Morrisville, NC",openToRelocate:!0,socialLinks:{github:"https://github.com/dkbearsong",linkedin:"https://www.linkedin.com/in/dereck-goolsby-bearsong/",substack:"https://dereckbearsong.substack.com",n8n:"https://n8n.io/creators/dkbearsong/"}},jv={paragraphs:["I'm a Cloud & Software Support Engineer with 13+ years of experience transitioning into AI Engineering, focused on building autonomous agent workflows, developer tooling, and automated cloud pipelines. I'm driven by a simple goal: eliminating operational friction so builders can focus on what they do best—building.","Combining production systems with modern AI, I specialize in end-to-end orchestration. Currently, I am building an autonomous development pipeline that listens to Jira webhooks, contextually gathers source files, provisions isolated container environments, and dispatches tasks to local or cloud coding agents for remote execution and tracked resolution.","I am open to full-time AI Engineering, Support Operations, and Automation roles, as well as select freelance projects. If you’re looking to scale your engineering workflows or integrate agentic systems into your infrastructure, let’s connect."]},Pv=[{id:"atlassian-senior",role:"Senior Support Engineer I",company:"Atlassian",companyUrl:"https://www.atlassian.com/",period:"Jan 2025 - August 2025",description:"Took ownership of complex escalations by collaborating directly with development teams to troubleshoot critical issues and prevent recurrence, while simultaneously enhancing service quality through weekly case reviews that assessed accuracy, completeness, and resolution speed. Drove operational improvements by developing SOPs and enablement sessions that increased US government client response times by 15% and metrics tracking adherence by 25%. Additionally, I accelerated product stability by submitting over 100 bug reports and feature requests, working directly with engineering to prioritize and resolve newly discovered issues.",highlights:["Managed advanced segment escalations with direct dev team collaboration","Increased US Gov client response times by 15% & metric adherence by 25%","Filed 100+ prioritized bug reports & feature requests directly with engineering"],skills:["Jira","Splunk","MySQL","Rovo","Python","Javascript","Rest API","Gemini","Git","Webhooks","Postman"]},{id:"atlassian-cloud",role:"Cloud Software Support Engineer III",company:"Atlassian",companyUrl:"https://www.atlassian.com/",period:"August 2021 - Jan 2025",description:"Delivered first-class application support for Jira Cloud while driving operational excellence by building AI and automation tools to improve efficiency. Consistently exceeded all KPIs, handling an average of 30.77 tickets per week against a target of 16, maintaining a 4.714 CSAT score, and ensuring 99.5% SLA adherence. To enhance resolution speed, I implemented Rovo AI Agents that summarize ticket comments and analyze NPS/CSAT data, reducing average case review time by 20 minutes. Beyond individual support, I reviewed over 500 AI chatbot conversations to ensure accuracy, accelerating deployment five months ahead of schedule while identifying patterns that reduced estimated AI support costs by $500k. Furthermore, I developed SOPs and enablement sessions that improved US government client response times by 15% and metrics tracking adherence by 25%, all while contributing to product stability by submitting over 100 bug reports and feature requests for newly discovered issues.",highlights:["Maintained 4.714 / 5 CSAT & 99.5% SLA adherence across 30+ tickets/week (target: 16)","Built Rovo AI agents cutting case review time by 20 mins","Reviewed 500+ AI bot conversations saving ~$500k in projected support costs"],skills:["Jira","Splunk","MySQL","Python","Javascript","Rest API","Git","Webhooks","Postman"]},{id:"mitek",role:"Software Support Engineer II",company:"Mitek",companyUrl:"https://www.mitek-us.com/",period:"Sep 2018 - August 2021",description:"Delivered advanced database, API, and server-side support for enterprise construction management software. Built an automated Python/RegEx data ingestion framework that normalized 95% of incoming XML payloads, slashing daily escalated resolution times by 33% and intake backlogs by 40%. Served as the team’s SQL specialist, directly resolving 15% of cases via advanced database querying and reducing engineering escalations by 20%. Established comprehensive technical documentation and training modules that cut new hire onboarding by 22% while boosting first-touch resolution by 35%.",highlights:["Built Python XML parser cutting escalated case resolution time by 6+ days","Maintained escalation rate 4% below target through deep server & API diagnosis","Resolved 15% of team tickets as primary internal SQL specialist"],skills:["Python","T-SQL","Rest API"]},{id:"lexisnexis",role:"Application Training Analyst & Support Specialist",company:"LexisNexis",companyUrl:"https://www.lexisnexis.com/en-us",period:"April 2014 - April 2018",description:"Delivered dedicated technical support, database recovery, and client enablement for legal enterprise and government accounts using the CaseMap litigation platform. Resolved deep data integrity and workflow issues through Microsoft Access database analysis and schema manipulation. Overhauled the client training curriculum into an interactive, workflow-specific program that boosted customer engagement, while authoring standardized internal documentation and standard operating procedures that anchored the successful onboarding and operational ramp of a newly launched Tier-1 support team in Manila.",highlights:["Drove 10% improvement in enterprise client retention via redesigned training","Bridged client feedback directly to engineering to resolve feature gaps"],skills:["Microsoft Access","T-SQL","Rest API"]}],_v=[{id:"culinary",name:"Culinary Arts & Cooking",icon:"ChefHat",desc:"I enjoy cooking for myself and my family. I find home cooking is one of the best ways to ensure you and your fmaily can live and eat healthy, and I enjoy trying new culinary recipes and techniques from around the world",image:"/portfolio videos/cooking.jpg",video:"/portfolio videos/cooking.mp4",tag:"Kitchen Lab"},{id:"art",name:"Traditional & Digital Art",icon:"Palette",desc:"I enjoy Drawing, conceptual sketching, character design, and exploring digital visual workflows. I find it thereputic, and is something I can do with shows on in the background, either in my sketchbook or on my ipad.",image:"/portfolio videos/painting.jpg",video:"/portfolio videos/painting.mp4",tag:"Visual Design"},{id:"brewing",name:"Home Craft Brewing",icon:"Beer",desc:"Alcohol is the lifeblood of civilization, and brewing beer is a great combination of cullinary crafting and sciences like biology and chemistry. I enjoy both the practice and the final results.",image:"/portfolio videos/beer.jpg",video:"/portfolio videos/beer.mp4",tag:"Craft Ferment"},{id:"martial-arts",name:"Martial Arts & Trail Hiking",icon:"Flame",desc:"Although I wish I did alot more than I do at this moment, martial arts and hiking are two of my favorite forms of exercise. I've studied a number of different martial arts over the years, including several forms of Karate, Muay Thai, Tae Kwon Do, Judo, and several Kung Fu styles with my favorite one being Wing Chun. And I love hiking mountains to get to the scenic views",image:"/portfolio videos/hiking.jpg",video:"/portfolio videos/hiking.mp4",tag:"Endurance"},{id:"coffee",name:"Artisanal Coffee Roasting",icon:"Coffee",desc:"Roasting single-origin green coffee beans and profiling first crack times for nuanced extraction. While making coffee itself is great, I find that roasting it allows for even fresher coffee than we can get from store bought.",image:"/portfolio videos/coffee roasting.jpg",video:"/portfolio videos/coffee roasting.mp4",tag:"Roast Profile"},{id:"fermentation",name:"Fermentation & Pickling",icon:"Sparkles",desc:"Applied microbiology in the kitchen: lacto-fermented hot sauces, seasonal kimchi, and artisan sauerkraut. I never can get enough of the stuff, and am always thinking about how I can incorporate a bit of it in my recipes.",image:"/portfolio videos/pickling.jpg",video:"/portfolio videos/pickling.mp4",tag:"Microbiology"},{id:"sharpening",name:"Precision Knife Sharpening",icon:"Scissors",desc:"Freehand Japanese whetstone polishing down to 8000-grit for mirror bevels and surgical push-cuts. There is something very satisfying about taking a dull knife and making it razor sharp. Especially when you rely on these knives daily when working in the kitchen.",image:"/portfolio videos/knife sharpening.jpg",video:"/portfolio videos/knife sharpening.mp4",tag:"Whetstone"},{id:"gaming",name:"Gaming & Anime",icon:"Gamepad2",desc:"Deep interactive storytelling, competitive mechanics, RPG systems, and anime world-building. I grew up playing video games and watching anime, and still to this day enjoy both. I consider them a great way to relax and unwind after a long day.",image:"/portfolio videos/video games.jpg",video:"/portfolio videos/video games.mp4",tag:"Interactive"}],Tv=[{name:"Languages & Scripting",items:["Python","Javascript (ES6+)","HTML5","CSS3","Bash / Shell"]},{name:"Frameworks & Libraries",items:["Node.js","React.js","Express.js","Flask","Bootstrap 5","Tailwind CSS"]},{name:"Databases & Storage",items:["MySQL","PostgreSQL","T-SQL","MongoDB","ChromaDB (Vector RAG)","Microsoft Access"]},{name:"AI, MCP & Automation",items:["Model Context Protocol (MCP)","RAG Architecture","Google Gemini","Anthropic Claude","Ollama (Local LLMs)","Rovo AI Agents","n8n Workflows","RESTful APIs","Webhooks","Splunk","Postman","Git / GitHub"]}],Av=[{id:"my-full-job-search-workflow",title:"My Full Job Search Workflow",date:"August 27, 2026",readTime:"13 min read",publication:"Substack",url:"https://dereckbearsong.substack.com/p/my-full-job-search-workflow",summary:"How I process 2000 jobs overnight to find the best fit. A complete breakdown of autonomous filtering, multi-agent evaluation, and automated pipeline execution.",tags:["Job Search","AI Workflows","Automation","System Design"]},{id:"jira-intelligence-hub",title:"Jira Intelligence Hub",date:"December 5, 2025",readTime:"8 min read",publication:"Substack",url:"https://dereckbearsong.substack.com/p/jira-intelligence-hub",summary:"Connecting Jira Cloud directly to conversational AI models using Model Context Protocol (MCP) and custom agentic tools for enterprise support engineering.",tags:["Jira Cloud","Model Context Protocol","AI Agents","Automation"]}],Et=[{id:"home",label:"Home",path:"/",anchor:"#summary",index:0},{id:"about",label:"About Me",path:"/about",anchor:"#about",index:1},{id:"portfolio",label:"Portfolio",path:"/portfolio",anchor:"#portfolio",index:2},{id:"blog",label:"Blog",path:"/blog",anchor:"#blog",index:3},{id:"contact",label:"Contact Me",path:"/contact",anchor:"#contact",index:4}],Wl=C.createContext({});function $l(e){const t=C.useRef(null);return t.current===null&&(t.current=e()),t.current}const Hs=C.createContext(null),Hl=C.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class Ev extends C.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Mv({children:e,isPresent:t}){const n=C.useId(),r=C.useRef(null),i=C.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=C.useContext(Hl);return C.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=i.current;if(t||!r.current||!o||!a)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return s&&(d.nonce=s),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),u.jsx(Ev,{isPresent:t,childRef:r,sizeRef:i,children:C.cloneElement(e,{ref:r})})}const Lv=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const a=$l(Rv),l=C.useId(),c=C.useCallback(p=>{a.set(p,!0);for(const f of a.values())if(!f)return;r&&r()},[a,r]),d=C.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:c,register:p=>(a.set(p,!1),()=>a.delete(p))}),s?[Math.random(),c]:[n,c]);return C.useMemo(()=>{a.forEach((p,f)=>a.set(f,!1))},[n]),C.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),o==="popLayout"&&(e=u.jsx(Mv,{isPresent:n,children:e})),u.jsx(Hs.Provider,{value:d,children:e})};function Rv(){return new Map}function hh(e=!0){const t=C.useContext(Hs);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,s=C.useId();C.useEffect(()=>{e&&i(s)},[e]);const o=C.useCallback(()=>e&&r&&r(s),[s,r,e]);return!n&&r?[!1,o]:[!0]}const Li=e=>e.key||"";function Ru(e){const t=[];return C.Children.forEach(e,n=>{C.isValidElement(n)&&t.push(n)}),t}const ql=typeof window<"u",mh=ql?C.useLayoutEffect:C.useEffect,qs=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=hh(o),c=C.useMemo(()=>Ru(e),[e]),d=o&&!a?[]:c.map(Li),p=C.useRef(!0),f=C.useRef(c),y=$l(()=>new Map),[v,x]=C.useState(c),[b,m]=C.useState(c);mh(()=>{p.current=!1,f.current=c;for(let w=0;w<b.length;w++){const S=Li(b[w]);d.includes(S)?y.delete(S):y.get(S)!==!0&&y.set(S,!1)}},[b,d.length,d.join("-")]);const h=[];if(c!==v){let w=[...c];for(let S=0;S<b.length;S++){const j=b[S],_=Li(j);d.includes(_)||(w.splice(S,0,j),h.push(j))}s==="wait"&&h.length&&(w=h),m(Ru(w)),x(c);return}const{forceRender:g}=C.useContext(Wl);return u.jsx(u.Fragment,{children:b.map(w=>{const S=Li(w),j=o&&!a?!1:c===b||d.includes(S),_=()=>{if(y.has(S))y.set(S,!0);else return;let k=!0;y.forEach(M=>{M||(k=!1)}),k&&(g==null||g(),m(f.current),o&&(l==null||l()),r&&r())};return u.jsx(Lv,{isPresent:j,initial:!p.current||n?void 0:!1,custom:j?void 0:t,presenceAffectsLayout:i,mode:s,onExitComplete:j?void 0:_,children:w},S)})})},De=e=>e;let gh=De;function Gl(e){let t;return()=>(t===void 0&&(t=e()),t)}const Qn=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},gt=e=>e*1e3,yt=e=>e/1e3,Dv={useManualTiming:!1};function Iv(e){let t=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),e()),c(o)}const l={schedule:(c,d=!1,p=!1)=>{const y=p&&r?t:n;return d&&s.add(c),y.has(c)||y.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(a),t.clear(),r=!1,i&&(i=!1,l.process(c))}};return l}const Ri=["read","resolveKeyframes","update","preRender","render","postRender"],Nv=40;function yh(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Ri.reduce((m,h)=>(m[h]=Iv(s),m),{}),{read:a,resolveKeyframes:l,update:c,preRender:d,render:p,postRender:f}=o,y=()=>{const m=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(m-i.timestamp,Nv),1),i.timestamp=m,i.isProcessing=!0,a.process(i),l.process(i),c.process(i),d.process(i),p.process(i),f.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(y))},v=()=>{n=!0,r=!0,i.isProcessing||e(y)};return{schedule:Ri.reduce((m,h)=>{const g=o[h];return m[h]=(w,S=!1,j=!1)=>(n||v(),g.schedule(w,S,j)),m},{}),cancel:m=>{for(let h=0;h<Ri.length;h++)o[Ri[h]].cancel(m)},state:i,steps:o}}const{schedule:W,cancel:Wt,state:ue,steps:jo}=yh(typeof requestAnimationFrame<"u"?requestAnimationFrame:De,!0),vh=C.createContext({strict:!1}),Du={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Jn={};for(const e in Du)Jn[e]={isEnabled:t=>Du[e].some(n=>!!t[n])};function zv(e){for(const t in e)Jn[t]={...Jn[t],...e[t]}}const Fv=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ss(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Fv.has(e)}let xh=e=>!Ss(e);function Vv(e){e&&(xh=t=>t.startsWith("on")?!Ss(t):e(t))}try{Vv(require("@emotion/is-prop-valid").default)}catch{}function Ov(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(xh(i)||n===!0&&Ss(i)||!t&&!Ss(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function Bv(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const Gs=C.createContext({});function Yr(e){return typeof e=="string"||Array.isArray(e)}function Ks(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Kl=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ql=["initial",...Kl];function Qs(e){return Ks(e.animate)||Ql.some(t=>Yr(e[t]))}function wh(e){return!!(Qs(e)||e.variants)}function Uv(e,t){if(Qs(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Yr(n)?n:void 0,animate:Yr(r)?r:void 0}}return e.inherit!==!1?t:{}}function Wv(e){const{initial:t,animate:n}=Uv(e,C.useContext(Gs));return C.useMemo(()=>({initial:t,animate:n}),[Iu(t),Iu(n)])}function Iu(e){return Array.isArray(e)?e.join(" "):e}const $v=Symbol.for("motionComponentSymbol");function Mn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Hv(e,t,n){return C.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Mn(n)&&(n.current=r))},[t])}const Jl=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),qv="framerAppearId",Sh="data-"+Jl(qv),{schedule:Xl}=yh(queueMicrotask,!1),kh=C.createContext({});function Gv(e,t,n,r,i){var s,o;const{visualElement:a}=C.useContext(Gs),l=C.useContext(vh),c=C.useContext(Hs),d=C.useContext(Hl).reducedMotion,p=C.useRef(null);r=r||l.renderer,!p.current&&r&&(p.current=r(e,{visualState:t,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d}));const f=p.current,y=C.useContext(kh);f&&!f.projection&&i&&(f.type==="html"||f.type==="svg")&&Kv(p.current,n,i,y);const v=C.useRef(!1);C.useInsertionEffect(()=>{f&&v.current&&f.update(n,c)});const x=n[Sh],b=C.useRef(!!x&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,x))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,x)));return mh(()=>{f&&(v.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),Xl.render(f.render),b.current&&f.animationState&&f.animationState.animateChanges())}),C.useEffect(()=>{f&&(!b.current&&f.animationState&&f.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var m;(m=window.MotionHandoffMarkAsComplete)===null||m===void 0||m.call(window,x)}),b.current=!1))}),f}function Kv(e,t,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:bh(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||a&&Mn(a),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:c})}function bh(e){if(e)return e.options.allowProjection!==!1?e.projection:bh(e.parent)}function Qv({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var s,o;e&&zv(e);function a(c,d){let p;const f={...C.useContext(Hl),...c,layoutId:Jv(c)},{isStatic:y}=f,v=Wv(c),x=r(c,y);if(!y&&ql){Xv();const b=Yv(f);p=b.MeasureLayout,v.visualElement=Gv(i,x,f,t,b.ProjectionNode)}return u.jsxs(Gs.Provider,{value:v,children:[p&&v.visualElement?u.jsx(p,{visualElement:v.visualElement,...f}):null,n(i,c,Hv(x,v.visualElement,d),x,y,v.visualElement)]})}a.displayName=`motion.${typeof i=="string"?i:`create(${(o=(s=i.displayName)!==null&&s!==void 0?s:i.name)!==null&&o!==void 0?o:""})`}`;const l=C.forwardRef(a);return l[$v]=i,l}function Jv({layoutId:e}){const t=C.useContext(Wl).id;return t&&e!==void 0?t+"-"+e:e}function Xv(e,t){C.useContext(vh).strict}function Yv(e){const{drag:t,layout:n}=Jn;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const Zv=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Yl(e){return typeof e!="string"||e.includes("-")?!1:!!(Zv.indexOf(e)>-1||/[A-Z]/u.test(e))}function Nu(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Zl(e,t,n,r){if(typeof t=="function"){const[i,s]=Nu(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=Nu(r);t=t(n!==void 0?n:e.custom,i,s)}return t}const Ma=e=>Array.isArray(e),e0=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),t0=e=>Ma(e)?e[e.length-1]||0:e,ye=e=>!!(e&&e.getVelocity);function Ki(e){const t=ye(e)?e.get():e;return e0(t)?t.toValue():t}function n0({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,s){const o={latestValues:r0(r,i,s,e),renderState:t()};return n&&(o.onMount=a=>n({props:r,current:a,...o}),o.onUpdate=a=>n(a)),o}const Ch=e=>(t,n)=>{const r=C.useContext(Gs),i=C.useContext(Hs),s=()=>n0(e,t,r,i);return n?s():$l(s)};function r0(e,t,n,r){const i={},s=r(e,{});for(const f in s)i[f]=Ki(s[f]);let{initial:o,animate:a}=e;const l=Qs(e),c=wh(e);t&&c&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||o===!1;const p=d?a:o;if(p&&typeof p!="boolean"&&!Ks(p)){const f=Array.isArray(p)?p:[p];for(let y=0;y<f.length;y++){const v=Zl(e,f[y]);if(v){const{transitionEnd:x,transition:b,...m}=v;for(const h in m){let g=m[h];if(Array.isArray(g)){const w=d?g.length-1:0;g=g[w]}g!==null&&(i[h]=g)}for(const h in x)i[h]=x[h]}}}return i}const nr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],gn=new Set(nr),jh=e=>t=>typeof t=="string"&&t.startsWith(e),Ph=jh("--"),i0=jh("var(--"),ec=e=>i0(e)?s0.test(e.split("/*")[0].trim()):!1,s0=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,_h=(e,t)=>t&&typeof e=="number"?t.transform(e):e,kt=(e,t,n)=>n>t?t:n<e?e:n,rr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Zr={...rr,transform:e=>kt(0,1,e)},Di={...rr,default:1},ci=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),jt=ci("deg"),ot=ci("%"),L=ci("px"),o0=ci("vh"),a0=ci("vw"),zu={...ot,parse:e=>ot.parse(e)/100,transform:e=>ot.transform(e*100)},l0={borderWidth:L,borderTopWidth:L,borderRightWidth:L,borderBottomWidth:L,borderLeftWidth:L,borderRadius:L,radius:L,borderTopLeftRadius:L,borderTopRightRadius:L,borderBottomRightRadius:L,borderBottomLeftRadius:L,width:L,maxWidth:L,height:L,maxHeight:L,top:L,right:L,bottom:L,left:L,padding:L,paddingTop:L,paddingRight:L,paddingBottom:L,paddingLeft:L,margin:L,marginTop:L,marginRight:L,marginBottom:L,marginLeft:L,backgroundPositionX:L,backgroundPositionY:L},c0={rotate:jt,rotateX:jt,rotateY:jt,rotateZ:jt,scale:Di,scaleX:Di,scaleY:Di,scaleZ:Di,skew:jt,skewX:jt,skewY:jt,distance:L,translateX:L,translateY:L,translateZ:L,x:L,y:L,z:L,perspective:L,transformPerspective:L,opacity:Zr,originX:zu,originY:zu,originZ:L},Fu={...rr,transform:Math.round},tc={...l0,...c0,zIndex:Fu,size:L,fillOpacity:Zr,strokeOpacity:Zr,numOctaves:Fu},u0={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},d0=nr.length;function p0(e,t,n){let r="",i=!0;for(let s=0;s<d0;s++){const o=nr[s],a=e[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=_h(a,tc[o]);if(!l){i=!1;const d=u0[o]||o;r+=`${d}(${c}) `}n&&(t[o]=c)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function nc(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let o=!1,a=!1;for(const l in t){const c=t[l];if(gn.has(l)){o=!0;continue}else if(Ph(l)){i[l]=c;continue}else{const d=_h(c,tc[l]);l.startsWith("origin")?(a=!0,s[l]=d):r[l]=d}}if(t.transform||(o||n?r.transform=p0(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:d=0}=s;r.transformOrigin=`${l} ${c} ${d}`}}const f0={offset:"stroke-dashoffset",array:"stroke-dasharray"},h0={offset:"strokeDashoffset",array:"strokeDasharray"};function m0(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?f0:h0;e[s.offset]=L.transform(-r);const o=L.transform(t),a=L.transform(n);e[s.array]=`${o} ${a}`}function Vu(e,t,n){return typeof e=="string"?e:L.transform(t+n*e)}function g0(e,t,n){const r=Vu(t,e.x,e.width),i=Vu(n,e.y,e.height);return`${r} ${i}`}function rc(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},d,p){if(nc(e,c,p),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:f,style:y,dimensions:v}=e;f.transform&&(v&&(y.transform=f.transform),delete f.transform),v&&(i!==void 0||s!==void 0||y.transform)&&(y.transformOrigin=g0(v,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(f.x=t),n!==void 0&&(f.y=n),r!==void 0&&(f.scale=r),o!==void 0&&m0(f,o,a,l,!1)}const ic=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Th=()=>({...ic(),attrs:{}}),sc=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Ah(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const Eh=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Mh(e,t,n,r){Ah(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Eh.has(i)?i:Jl(i),t.attrs[i])}const ks={};function y0(e){Object.assign(ks,e)}function Lh(e,{layout:t,layoutId:n}){return gn.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!ks[e]||e==="opacity")}function oc(e,t,n){var r;const{style:i}=e,s={};for(const o in i)(ye(i[o])||t.style&&ye(t.style[o])||Lh(o,e)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(s[o]=i[o]);return s}function Rh(e,t,n){const r=oc(e,t,n);for(const i in e)if(ye(e[i])||ye(t[i])){const s=nr.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}function v0(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const Ou=["x","y","width","height","cx","cy","r"],x0={useVisualState:Ch({scrapeMotionValuesFromProps:Rh,createRenderState:Th,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let s=!!e.drag;if(!s){for(const a in i)if(gn.has(a)){s=!0;break}}if(!s)return;let o=!t;if(t)for(let a=0;a<Ou.length;a++){const l=Ou[a];e[l]!==t[l]&&(o=!0)}o&&W.read(()=>{v0(n,r),W.render(()=>{rc(r,i,sc(n.tagName),e.transformTemplate),Mh(n,r)})})}})},w0={useVisualState:Ch({scrapeMotionValuesFromProps:oc,createRenderState:ic})};function Dh(e,t,n){for(const r in t)!ye(t[r])&&!Lh(r,n)&&(e[r]=t[r])}function S0({transformTemplate:e},t){return C.useMemo(()=>{const n=ic();return nc(n,t,e),Object.assign({},n.vars,n.style)},[t])}function k0(e,t){const n=e.style||{},r={};return Dh(r,n,e),Object.assign(r,S0(e,t)),r}function b0(e,t){const n={},r=k0(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function C0(e,t,n,r){const i=C.useMemo(()=>{const s=Th();return rc(s,t,sc(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};Dh(s,e.style,e),i.style={...s,...i.style}}return i}function j0(e=!1){return(n,r,i,{latestValues:s},o)=>{const l=(Yl(n)?C0:b0)(r,s,o,n),c=Ov(r,typeof n=="string",e),d=n!==C.Fragment?{...c,...l,ref:i}:{},{children:p}=r,f=C.useMemo(()=>ye(p)?p.get():p,[p]);return C.createElement(n,{...d,children:f})}}function P0(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...Yl(r)?x0:w0,preloadedFeatures:e,useRender:j0(i),createVisualElement:t,Component:r};return Qv(o)}}function Ih(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Js(e,t,n){const r=e.getProps();return Zl(r,t,n!==void 0?n:r.custom,e)}const _0=Gl(()=>window.ScrollTimeline!==void 0);class T0{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(_0()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class A0 extends T0{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function ac(e,t){return e?e[t]||e.default||e:void 0}const La=2e4;function Nh(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<La;)t+=n,r=e.next(t);return t>=La?1/0:t}function lc(e){return typeof e=="function"}function Bu(e,t){e.timeline=t,e.onfinish=null}const cc=e=>Array.isArray(e)&&typeof e[0]=="number",E0={linearEasing:void 0};function M0(e,t){const n=Gl(e);return()=>{var r;return(r=E0[t])!==null&&r!==void 0?r:n()}}const bs=M0(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),zh=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let s=0;s<i;s++)r+=e(Qn(0,i-1,s))+", ";return`linear(${r.substring(0,r.length-2)})`};function Fh(e){return!!(typeof e=="function"&&bs()||!e||typeof e=="string"&&(e in Ra||bs())||cc(e)||Array.isArray(e)&&e.every(Fh))}const xr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Ra={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:xr([0,.65,.55,1]),circOut:xr([.55,0,1,.45]),backIn:xr([.31,.01,.66,-.59]),backOut:xr([.33,1.53,.69,.99])};function Vh(e,t){if(e)return typeof e=="function"&&bs()?zh(e,t):cc(e)?xr(e):Array.isArray(e)?e.map(n=>Vh(n,t)||Ra.easeOut):Ra[e]}const Ke={x:!1,y:!1};function Oh(){return Ke.x||Ke.y}function L0(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const s=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e)}function Bh(e,t){const n=L0(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function Uu(e){return t=>{t.pointerType==="touch"||Oh()||e(t)}}function R0(e,t,n={}){const[r,i,s]=Bh(e,n),o=Uu(a=>{const{target:l}=a,c=t(a);if(typeof c!="function"||!l)return;const d=Uu(p=>{c(p),l.removeEventListener("pointerleave",d)});l.addEventListener("pointerleave",d,i)});return r.forEach(a=>{a.addEventListener("pointerenter",o,i)}),s}const Uh=(e,t)=>t?e===t?!0:Uh(e,t.parentElement):!1,uc=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,D0=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function I0(e){return D0.has(e.tagName)||e.tabIndex!==-1}const wr=new WeakSet;function Wu(e){return t=>{t.key==="Enter"&&e(t)}}function Po(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const N0=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Wu(()=>{if(wr.has(n))return;Po(n,"down");const i=Wu(()=>{Po(n,"up")}),s=()=>Po(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function $u(e){return uc(e)&&!Oh()}function z0(e,t,n={}){const[r,i,s]=Bh(e,n),o=a=>{const l=a.currentTarget;if(!$u(a)||wr.has(l))return;wr.add(l);const c=t(a),d=(y,v)=>{window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",f),!(!$u(y)||!wr.has(l))&&(wr.delete(l),typeof c=="function"&&c(y,{success:v}))},p=y=>{d(y,n.useGlobalTarget||Uh(l,y.target))},f=y=>{d(y,!1)};window.addEventListener("pointerup",p,i),window.addEventListener("pointercancel",f,i)};return r.forEach(a=>{!I0(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,i),a.addEventListener("focus",c=>N0(c,i),i)}),s}function F0(e){return e==="x"||e==="y"?Ke[e]?null:(Ke[e]=!0,()=>{Ke[e]=!1}):Ke.x||Ke.y?null:(Ke.x=Ke.y=!0,()=>{Ke.x=Ke.y=!1})}const Wh=new Set(["width","height","top","left","right","bottom",...nr]);let Qi;function V0(){Qi=void 0}const at={now:()=>(Qi===void 0&&at.set(ue.isProcessing||Dv.useManualTiming?ue.timestamp:performance.now()),Qi),set:e=>{Qi=e,queueMicrotask(V0)}};function dc(e,t){e.indexOf(t)===-1&&e.push(t)}function pc(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class fc{constructor(){this.subscriptions=[]}add(t){return dc(this.subscriptions,t),()=>pc(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function $h(e,t){return t?e*(1e3/t):0}const Hu=30,O0=e=>!isNaN(parseFloat(e));class B0{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=at.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=at.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=O0(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new fc);const r=this.events[t].add(n);return t==="change"?()=>{r(),W.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=at.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Hu)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Hu);return $h(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ei(e,t){return new B0(e,t)}function U0(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ei(n))}function W0(e,t){const n=Js(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const a=t0(s[o]);U0(e,o,a)}}function $0(e){return!!(ye(e)&&e.add)}function Da(e,t){const n=e.getValue("willChange");if($0(n))return n.add(t)}function Hh(e){return e.props[Sh]}const qh=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,H0=1e-7,q0=12;function G0(e,t,n,r,i){let s,o,a=0;do o=t+(n-t)/2,s=qh(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>H0&&++a<q0);return o}function ui(e,t,n,r){if(e===t&&n===r)return De;const i=s=>G0(s,0,1,e,n);return s=>s===0||s===1?s:qh(i(s),t,r)}const Gh=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Kh=e=>t=>1-e(1-t),Qh=ui(.33,1.53,.69,.99),hc=Kh(Qh),Jh=Gh(hc),Xh=e=>(e*=2)<1?.5*hc(e):.5*(2-Math.pow(2,-10*(e-1))),mc=e=>1-Math.sin(Math.acos(e)),Yh=Kh(mc),Zh=Gh(mc),em=e=>/^0[^.\s]+$/u.test(e);function K0(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||em(e):!0}const Mr=e=>Math.round(e*1e5)/1e5,gc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Q0(e){return e==null}const J0=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,yc=(e,t)=>n=>!!(typeof n=="string"&&J0.test(n)&&n.startsWith(e)||t&&!Q0(n)&&Object.prototype.hasOwnProperty.call(n,t)),tm=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,a]=r.match(gc);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},X0=e=>kt(0,255,e),_o={...rr,transform:e=>Math.round(X0(e))},sn={test:yc("rgb","red"),parse:tm("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+_o.transform(e)+", "+_o.transform(t)+", "+_o.transform(n)+", "+Mr(Zr.transform(r))+")"};function Y0(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Ia={test:yc("#"),parse:Y0,transform:sn.transform},Ln={test:yc("hsl","hue"),parse:tm("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+ot.transform(Mr(t))+", "+ot.transform(Mr(n))+", "+Mr(Zr.transform(r))+")"},me={test:e=>sn.test(e)||Ia.test(e)||Ln.test(e),parse:e=>sn.test(e)?sn.parse(e):Ln.test(e)?Ln.parse(e):Ia.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?sn.transform(e):Ln.transform(e)},Z0=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function ex(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(gc))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Z0))===null||n===void 0?void 0:n.length)||0)>0}const nm="number",rm="color",tx="var",nx="var(",qu="${}",rx=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ti(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const a=t.replace(rx,l=>(me.test(l)?(r.color.push(s),i.push(rm),n.push(me.parse(l))):l.startsWith(nx)?(r.var.push(s),i.push(tx),n.push(l)):(r.number.push(s),i.push(nm),n.push(parseFloat(l))),++s,qu)).split(qu);return{values:n,split:a,indexes:r,types:i}}function im(e){return ti(e).values}function sm(e){const{split:t,types:n}=ti(e),r=t.length;return i=>{let s="";for(let o=0;o<r;o++)if(s+=t[o],i[o]!==void 0){const a=n[o];a===nm?s+=Mr(i[o]):a===rm?s+=me.transform(i[o]):s+=i[o]}return s}}const ix=e=>typeof e=="number"?0:e;function sx(e){const t=im(e);return sm(e)(t.map(ix))}const $t={test:ex,parse:im,createTransformer:sm,getAnimatableNone:sx},ox=new Set(["brightness","contrast","saturate","opacity"]);function ax(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(gc)||[];if(!r)return e;const i=n.replace(r,"");let s=ox.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const lx=/\b([a-z-]*)\(.*?\)/gu,Na={...$t,getAnimatableNone:e=>{const t=e.match(lx);return t?t.map(ax).join(" "):e}},cx={...tc,color:me,backgroundColor:me,outlineColor:me,fill:me,stroke:me,borderColor:me,borderTopColor:me,borderRightColor:me,borderBottomColor:me,borderLeftColor:me,filter:Na,WebkitFilter:Na},vc=e=>cx[e];function om(e,t){let n=vc(e);return n!==Na&&(n=$t),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const ux=new Set(["auto","none","0"]);function dx(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!ux.has(s)&&ti(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=om(n,i)}const Gu=e=>e===rr||e===L,Ku=(e,t)=>parseFloat(e.split(", ")[t]),Qu=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Ku(i[1],t);{const s=r.match(/^matrix\((.+)\)$/u);return s?Ku(s[1],e):0}},px=new Set(["x","y","z"]),fx=nr.filter(e=>!px.has(e));function hx(e){const t=[];return fx.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Xn={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Qu(4,13),y:Qu(5,14)};Xn.translateX=Xn.x;Xn.translateY=Xn.y;const ln=new Set;let za=!1,Fa=!1;function am(){if(Fa){const e=Array.from(ln).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=hx(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var a;(a=r.getValue(s))===null||a===void 0||a.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Fa=!1,za=!1,ln.forEach(e=>e.complete()),ln.clear()}function lm(){ln.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Fa=!0)})}function mx(){lm(),am()}class xc{constructor(t,n,r,i,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(ln.add(this),za||(za=!0,W.read(lm),W.resolveKeyframes(am))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let s=0;s<t.length;s++)if(t[s]===null)if(s===0){const o=i==null?void 0:i.get(),a=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const l=r.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),i&&o===void 0&&i.set(t[0])}else t[s]=t[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),ln.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,ln.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const cm=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),gx=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function yx(e){const t=gx.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function um(e,t,n=1){const[r,i]=yx(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const o=s.trim();return cm(o)?parseFloat(o):o}return ec(i)?um(i,t,n+1):i}const dm=e=>t=>t.test(e),vx={test:e=>e==="auto",parse:e=>e},pm=[rr,L,ot,jt,a0,o0,vx],Ju=e=>pm.find(dm(e));class fm extends xc{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let c=t[l];if(typeof c=="string"&&(c=c.trim(),ec(c))){const d=um(c,n.current);d!==void 0&&(t[l]=d),l===t.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!Wh.has(r)||t.length!==2)return;const[i,s]=t,o=Ju(i),a=Ju(s);if(o!==a)if(Gu(o)&&Gu(a))for(let l=0;l<t.length;l++){const c=t[l];typeof c=="string"&&(t[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)K0(t[i])&&r.push(i);r.length&&dx(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Xn[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const o=i.length-1,a=i[o];i[o]=Xn[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const Xu=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&($t.test(e)||e==="0")&&!e.startsWith("url("));function xx(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function wx(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],o=Xu(i,t),a=Xu(s,t);return!o||!a?!1:xx(e)||(n==="spring"||lc(n))&&r}const Sx=e=>e!==null;function Xs(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(Sx),s=t&&n!=="loop"&&t%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const kx=40;class hm{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=at.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>kx?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&mx(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=at.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!wx(t,r,i,s))if(o)this.options.duration=0;else{l&&l(Xs(t,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const G=(e,t,n)=>e+(t-e)*n;function To(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function bx({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=To(l,a,e+1/3),s=To(l,a,e),o=To(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function Cs(e,t){return n=>n>0?t:e}const Ao=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Cx=[Ia,sn,Ln],jx=e=>Cx.find(t=>t.test(e));function Yu(e){const t=jx(e);if(!t)return!1;let n=t.parse(e);return t===Ln&&(n=bx(n)),n}const Zu=(e,t)=>{const n=Yu(e),r=Yu(t);if(!n||!r)return Cs(e,t);const i={...n};return s=>(i.red=Ao(n.red,r.red,s),i.green=Ao(n.green,r.green,s),i.blue=Ao(n.blue,r.blue,s),i.alpha=G(n.alpha,r.alpha,s),sn.transform(i))},Px=(e,t)=>n=>t(e(n)),di=(...e)=>e.reduce(Px),Va=new Set(["none","hidden"]);function _x(e,t){return Va.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Tx(e,t){return n=>G(e,t,n)}function wc(e){return typeof e=="number"?Tx:typeof e=="string"?ec(e)?Cs:me.test(e)?Zu:Mx:Array.isArray(e)?mm:typeof e=="object"?me.test(e)?Zu:Ax:Cs}function mm(e,t){const n=[...e],r=n.length,i=e.map((s,o)=>wc(s)(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function Ax(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=wc(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function Ex(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const o=t.types[s],a=e.indexes[o][i[o]],l=(n=e.values[a])!==null&&n!==void 0?n:0;r[s]=l,i[o]++}return r}const Mx=(e,t)=>{const n=$t.createTransformer(t),r=ti(e),i=ti(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Va.has(e)&&!i.values.length||Va.has(t)&&!r.values.length?_x(e,t):di(mm(Ex(r,i),i.values),n):Cs(e,t)};function gm(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?G(e,t,n):wc(e)(e,t)}const Lx=5;function ym(e,t,n){const r=Math.max(t-Lx,0);return $h(n-e(r),t-r)}const Y={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Eo=.001;function Rx({duration:e=Y.duration,bounce:t=Y.bounce,velocity:n=Y.velocity,mass:r=Y.mass}){let i,s,o=1-t;o=kt(Y.minDamping,Y.maxDamping,o),e=kt(Y.minDuration,Y.maxDuration,yt(e)),o<1?(i=c=>{const d=c*o,p=d*e,f=d-n,y=Oa(c,o),v=Math.exp(-p);return Eo-f/y*v},s=c=>{const p=c*o*e,f=p*n+n,y=Math.pow(o,2)*Math.pow(c,2)*e,v=Math.exp(-p),x=Oa(Math.pow(c,2),o);return(-i(c)+Eo>0?-1:1)*((f-y)*v)/x}):(i=c=>{const d=Math.exp(-c*e),p=(c-n)*e+1;return-Eo+d*p},s=c=>{const d=Math.exp(-c*e),p=(n-c)*(e*e);return d*p});const a=5/e,l=Ix(i,s,a);if(e=gt(e),isNaN(l))return{stiffness:Y.stiffness,damping:Y.damping,duration:e};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:o*2*Math.sqrt(r*c),duration:e}}}const Dx=12;function Ix(e,t,n){let r=n;for(let i=1;i<Dx;i++)r=r-e(r)/t(r);return r}function Oa(e,t){return e*Math.sqrt(1-t*t)}const Nx=["duration","bounce"],zx=["stiffness","damping","mass"];function ed(e,t){return t.some(n=>e[n]!==void 0)}function Fx(e){let t={velocity:Y.velocity,stiffness:Y.stiffness,damping:Y.damping,mass:Y.mass,isResolvedFromDuration:!1,...e};if(!ed(e,zx)&&ed(e,Nx))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*kt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:Y.mass,stiffness:i,damping:s}}else{const n=Rx(e);t={...t,...n,mass:Y.mass},t.isResolvedFromDuration=!0}return t}function vm(e=Y.visualDuration,t=Y.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:d,duration:p,velocity:f,isResolvedFromDuration:y}=Fx({...n,velocity:-yt(n.velocity||0)}),v=f||0,x=c/(2*Math.sqrt(l*d)),b=o-s,m=yt(Math.sqrt(l/d)),h=Math.abs(b)<5;r||(r=h?Y.restSpeed.granular:Y.restSpeed.default),i||(i=h?Y.restDelta.granular:Y.restDelta.default);let g;if(x<1){const S=Oa(m,x);g=j=>{const _=Math.exp(-x*m*j);return o-_*((v+x*m*b)/S*Math.sin(S*j)+b*Math.cos(S*j))}}else if(x===1)g=S=>o-Math.exp(-m*S)*(b+(v+m*b)*S);else{const S=m*Math.sqrt(x*x-1);g=j=>{const _=Math.exp(-x*m*j),k=Math.min(S*j,300);return o-_*((v+x*m*b)*Math.sinh(k)+S*b*Math.cosh(k))/S}}const w={calculatedDuration:y&&p||null,next:S=>{const j=g(S);if(y)a.done=S>=p;else{let _=0;x<1&&(_=S===0?gt(v):ym(g,S,j));const k=Math.abs(_)<=r,M=Math.abs(o-j)<=i;a.done=k&&M}return a.value=a.done?o:j,a},toString:()=>{const S=Math.min(Nh(w),La),j=zh(_=>w.next(S*_).value,S,30);return S+"ms "+j}};return w}function td({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:d}){const p=e[0],f={done:!1,value:p},y=k=>a!==void 0&&k<a||l!==void 0&&k>l,v=k=>a===void 0?l:l===void 0||Math.abs(a-k)<Math.abs(l-k)?a:l;let x=n*t;const b=p+x,m=o===void 0?b:o(b);m!==b&&(x=m-p);const h=k=>-x*Math.exp(-k/r),g=k=>m+h(k),w=k=>{const M=h(k),E=g(k);f.done=Math.abs(M)<=c,f.value=f.done?m:E};let S,j;const _=k=>{y(f.value)&&(S=k,j=vm({keyframes:[f.value,v(f.value)],velocity:ym(g,k,f.value),damping:i,stiffness:s,restDelta:c,restSpeed:d}))};return _(0),{calculatedDuration:null,next:k=>{let M=!1;return!j&&S===void 0&&(M=!0,w(k),_(k)),S!==void 0&&k>=S?j.next(k-S):(!M&&w(k),f)}}}const Vx=ui(.42,0,1,1),Ox=ui(0,0,.58,1),xm=ui(.42,0,.58,1),Bx=e=>Array.isArray(e)&&typeof e[0]!="number",Ux={linear:De,easeIn:Vx,easeInOut:xm,easeOut:Ox,circIn:mc,circInOut:Zh,circOut:Yh,backIn:hc,backInOut:Jh,backOut:Qh,anticipate:Xh},nd=e=>{if(cc(e)){gh(e.length===4);const[t,n,r,i]=e;return ui(t,n,r,i)}else if(typeof e=="string")return Ux[e];return e};function Wx(e,t,n){const r=[],i=n||gm,s=e.length-1;for(let o=0;o<s;o++){let a=i(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||De:t;a=di(l,a)}r.push(a)}return r}function $x(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(gh(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=Wx(t,r,i),l=a.length,c=d=>{if(o&&d<e[0])return t[0];let p=0;if(l>1)for(;p<e.length-2&&!(d<e[p+1]);p++);const f=Qn(e[p],e[p+1],d);return a[p](f)};return n?d=>c(kt(e[0],e[s-1],d)):c}function Hx(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Qn(0,t,r);e.push(G(n,1,i))}}function qx(e){const t=[0];return Hx(t,e.length-1),t}function Gx(e,t){return e.map(n=>n*t)}function Kx(e,t){return e.map(()=>t||xm).splice(0,e.length-1)}function js({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=Bx(r)?r.map(nd):nd(r),s={done:!1,value:t[0]},o=Gx(n&&n.length===t.length?n:qx(t),e),a=$x(o,t,{ease:Array.isArray(i)?i:Kx(t,i)});return{calculatedDuration:e,next:l=>(s.value=a(l),s.done=l>=e,s)}}const Qx=e=>{const t=({timestamp:n})=>e(n);return{start:()=>W.update(t,!0),stop:()=>Wt(t),now:()=>ue.isProcessing?ue.timestamp:at.now()}},Jx={decay:td,inertia:td,tween:js,keyframes:js,spring:vm},Xx=e=>e/100;class Sc extends hm{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,o=(i==null?void 0:i.KeyframeResolver)||xc,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=this.options,a=lc(n)?n:Jx[n]||js;let l,c;a!==js&&typeof t[0]!="number"&&(l=di(Xx,gm(t[0],t[1])),t=[0,100]);const d=a({...this.options,keyframes:t});s==="mirror"&&(c=a({...this.options,keyframes:[...t].reverse(),velocity:-o})),d.calculatedDuration===null&&(d.calculatedDuration=Nh(d));const{calculatedDuration:p}=d,f=p+i,y=f*(r+1)-i;return{generator:d,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:p,resolvedDuration:f,totalDuration:y}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:k}=this.options;return{done:!0,value:k[k.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:d,resolvedDuration:p}=r;if(this.startTime===null)return s.next(0);const{delay:f,repeat:y,repeatType:v,repeatDelay:x,onUpdate:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const m=this.currentTime-f*(this.speed>=0?1:-1),h=this.speed>=0?m<0:m>d;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let g=this.currentTime,w=s;if(y){const k=Math.min(this.currentTime,d)/p;let M=Math.floor(k),E=k%1;!E&&k>=1&&(E=1),E===1&&M--,M=Math.min(M,y+1),!!(M%2)&&(v==="reverse"?(E=1-E,x&&(E-=x/p)):v==="mirror"&&(w=o)),g=kt(0,1,E)*p}const S=h?{done:!1,value:l[0]}:w.next(g);a&&(S.value=a(S.value));let{done:j}=S;!h&&c!==null&&(j=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const _=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&j);return _&&i!==void 0&&(S.value=Xs(l,this.options,i)),b&&b(S.value),_&&this.finish(),S}get duration(){const{resolved:t}=this;return t?yt(t.calculatedDuration):0}get time(){return yt(this.currentTime)}set time(t){t=gt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=yt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=Qx,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const Yx=new Set(["opacity","clipPath","filter","transform"]);function Zx(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[t]:n};l&&(c.offset=l);const d=Vh(a,i);return Array.isArray(d)&&(c.easing=d),e.animate(c,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const e1=Gl(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ps=10,t1=2e4;function n1(e){return lc(e.type)||e.type==="spring"||!Fh(e.ease)}function r1(e,t){const n=new Sc({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let s=0;for(;!r.done&&s<t1;)r=n.sample(s),i.push(r.value),s+=Ps;return{times:void 0,keyframes:i,duration:s-Ps,ease:"linear"}}const wm={anticipate:Xh,backInOut:Jh,circInOut:Zh};function i1(e){return e in wm}class rd extends hm{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new fm(s,(o,a)=>this.onKeyframesResolved(o,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:s,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&bs()&&i1(s)&&(s=wm[s]),n1(this.options)){const{onComplete:p,onUpdate:f,motionValue:y,element:v,...x}=this.options,b=r1(t,x);t=b.keyframes,t.length===1&&(t[1]=t[0]),r=b.duration,i=b.times,s=b.ease,o="keyframes"}const d=Zx(a.owner.current,l,t,{...this.options,duration:r,times:i,ease:s});return d.startTime=c??this.calcStartTime(),this.pendingTimeline?(Bu(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:p}=this.options;a.set(Xs(t,this.options,n)),p&&p(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:i,type:o,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return yt(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return yt(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=gt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return De;const{animation:r}=n;Bu(r,t)}return De}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:s,ease:o,times:a}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:d,onComplete:p,element:f,...y}=this.options,v=new Sc({...y,keyframes:r,duration:i,type:s,ease:o,times:a,isGenerator:!0}),x=gt(this.time);c.setWithVelocity(v.sample(x-Ps).value,v.sample(x).value,Ps)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:o,type:a}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return e1()&&r&&Yx.has(r)&&!l&&!c&&!i&&s!=="mirror"&&o!==0&&a!=="inertia"}}const s1={type:"spring",stiffness:500,damping:25,restSpeed:10},o1=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),a1={type:"keyframes",duration:.8},l1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},c1=(e,{keyframes:t})=>t.length>2?a1:gn.has(e)?e.startsWith("scale")?o1(t[1]):s1:l1;function u1({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...d}){return!!Object.keys(d).length}const kc=(e,t,n,r={},i,s)=>o=>{const a=ac(r,e)||{},l=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-gt(l);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-c,onUpdate:f=>{t.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:s?void 0:i};u1(a)||(d={...d,...c1(e,d)}),d.duration&&(d.duration=gt(d.duration)),d.repeatDelay&&(d.repeatDelay=gt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let p=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(p=!0)),p&&!s&&t.get()!==void 0){const f=Xs(d.keyframes,a);if(f!==void 0)return W.update(()=>{d.onUpdate(f),d.onComplete()}),new A0([])}return!s&&rd.supports(d)?new rd(d):new Sc(d)};function d1({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Sm(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:o=e.getDefaultTransition(),transitionEnd:a,...l}=t;r&&(o=r);const c=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const p in l){const f=e.getValue(p,(s=e.latestValues[p])!==null&&s!==void 0?s:null),y=l[p];if(y===void 0||d&&d1(d,p))continue;const v={delay:n,...ac(o||{},p)};let x=!1;if(window.MotionHandoffAnimation){const m=Hh(e);if(m){const h=window.MotionHandoffAnimation(m,p,W);h!==null&&(v.startTime=h,x=!0)}}Da(e,p),f.start(kc(p,f,y,e.shouldReduceMotion&&Wh.has(p)?{type:!1}:v,e,x));const b=f.animation;b&&c.push(b)}return a&&Promise.all(c).then(()=>{W.update(()=>{a&&W0(e,a)})}),c}function Ba(e,t,n={}){var r;const i=Js(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const o=i?()=>Promise.all(Sm(e,i,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:p,staggerDirection:f}=s;return p1(e,t,d+c,p,f,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,d]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>d())}else return Promise.all([o(),a(n.delay)])}function p1(e,t,n=0,r=0,i=1,s){const o=[],a=(e.variantChildren.size-1)*r,l=i===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(e.variantChildren).sort(f1).forEach((c,d)=>{c.notify("AnimationStart",t),o.push(Ba(c,t,{...s,delay:n+l(d)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(o)}function f1(e,t){return e.sortNodePosition(t)}function h1(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>Ba(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=Ba(e,t,n);else{const i=typeof t=="function"?Js(e,t,n.custom):t;r=Promise.all(Sm(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const m1=Ql.length;function km(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?km(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<m1;n++){const r=Ql[n],i=e.props[r];(Yr(i)||i===!1)&&(t[r]=i)}return t}const g1=[...Kl].reverse(),y1=Kl.length;function v1(e){return t=>Promise.all(t.map(({animation:n,options:r})=>h1(e,n,r)))}function x1(e){let t=v1(e),n=id(),r=!0;const i=l=>(c,d)=>{var p;const f=Js(e,d,l==="exit"?(p=e.presenceContext)===null||p===void 0?void 0:p.custom:void 0);if(f){const{transition:y,transitionEnd:v,...x}=f;c={...c,...x,...v}}return c};function s(l){t=l(e)}function o(l){const{props:c}=e,d=km(e.parent)||{},p=[],f=new Set;let y={},v=1/0;for(let b=0;b<y1;b++){const m=g1[b],h=n[m],g=c[m]!==void 0?c[m]:d[m],w=Yr(g),S=m===l?h.isActive:null;S===!1&&(v=b);let j=g===d[m]&&g!==c[m]&&w;if(j&&r&&e.manuallyAnimateOnMount&&(j=!1),h.protectedKeys={...y},!h.isActive&&S===null||!g&&!h.prevProp||Ks(g)||typeof g=="boolean")continue;const _=w1(h.prevProp,g);let k=_||m===l&&h.isActive&&!j&&w||b>v&&w,M=!1;const E=Array.isArray(g)?g:[g];let F=E.reduce(i(m),{});S===!1&&(F={});const{prevResolvedValues:Te={}}=h,Ae={...Te,...F},oe=J=>{k=!0,f.has(J)&&(M=!0,f.delete(J)),h.needsAnimating[J]=!0;const T=e.getValue(J);T&&(T.liveStyle=!1)};for(const J in Ae){const T=F[J],R=Te[J];if(y.hasOwnProperty(J))continue;let D=!1;Ma(T)&&Ma(R)?D=!Ih(T,R):D=T!==R,D?T!=null?oe(J):f.add(J):T!==void 0&&f.has(J)?oe(J):h.protectedKeys[J]=!0}h.prevProp=g,h.prevResolvedValues=F,h.isActive&&(y={...y,...F}),r&&e.blockInitialAnimation&&(k=!1),k&&(!(j&&_)||M)&&p.push(...E.map(J=>({animation:J,options:{type:m}})))}if(f.size){const b={};f.forEach(m=>{const h=e.getBaseTarget(m),g=e.getValue(m);g&&(g.liveStyle=!0),b[m]=h??null}),p.push({animation:b})}let x=!!p.length;return r&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,x?t(p):Promise.resolve()}function a(l,c){var d;if(n[l].isActive===c)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(f=>{var y;return(y=f.animationState)===null||y===void 0?void 0:y.setActive(l,c)}),n[l].isActive=c;const p=o(l);for(const f in n)n[f].protectedKeys={};return p}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=id(),r=!0}}}function w1(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Ih(t,e):!1}function Jt(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function id(){return{animate:Jt(!0),whileInView:Jt(),whileHover:Jt(),whileTap:Jt(),whileDrag:Jt(),whileFocus:Jt(),exit:Jt()}}class Kt{constructor(t){this.isMounted=!1,this.node=t}update(){}}class S1 extends Kt{constructor(t){super(t),t.animationState||(t.animationState=x1(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Ks(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let k1=0;class b1 extends Kt{constructor(){super(...arguments),this.id=k1++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const C1={animation:{Feature:S1},exit:{Feature:b1}};function ni(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function pi(e){return{point:{x:e.pageX,y:e.pageY}}}const j1=e=>t=>uc(t)&&e(t,pi(t));function Lr(e,t,n,r){return ni(e,t,j1(n),r)}const sd=(e,t)=>Math.abs(e-t);function P1(e,t){const n=sd(e.x,t.x),r=sd(e.y,t.y);return Math.sqrt(n**2+r**2)}class bm{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=Lo(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,y=P1(p.offset,{x:0,y:0})>=3;if(!f&&!y)return;const{point:v}=p,{timestamp:x}=ue;this.history.push({...v,timestamp:x});const{onStart:b,onMove:m}=this.handlers;f||(b&&b(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,p)},this.handlePointerMove=(p,f)=>{this.lastMoveEvent=p,this.lastMoveEventInfo=Mo(f,this.transformPagePoint),W.update(this.updatePoint,!0)},this.handlePointerUp=(p,f)=>{this.end();const{onEnd:y,onSessionEnd:v,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Lo(p.type==="pointercancel"?this.lastMoveEventInfo:Mo(f,this.transformPagePoint),this.history);this.startEvent&&y&&y(p,b),v&&v(p,b)},!uc(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=pi(t),a=Mo(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=ue;this.history=[{...l,timestamp:c}];const{onSessionStart:d}=n;d&&d(t,Lo(a,this.history)),this.removeListeners=di(Lr(this.contextWindow,"pointermove",this.handlePointerMove),Lr(this.contextWindow,"pointerup",this.handlePointerUp),Lr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Wt(this.updatePoint)}}function Mo(e,t){return t?{point:t(e.point)}:e}function od(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Lo({point:e},t){return{point:e,delta:od(e,Cm(t)),offset:od(e,_1(t)),velocity:T1(t,.1)}}function _1(e){return e[0]}function Cm(e){return e[e.length-1]}function T1(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Cm(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>gt(t)));)n--;if(!r)return{x:0,y:0};const s=yt(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const jm=1e-4,A1=1-jm,E1=1+jm,Pm=.01,M1=0-Pm,L1=0+Pm;function Ne(e){return e.max-e.min}function R1(e,t,n){return Math.abs(e-t)<=n}function ad(e,t,n,r=.5){e.origin=r,e.originPoint=G(t.min,t.max,e.origin),e.scale=Ne(n)/Ne(t),e.translate=G(n.min,n.max,e.origin)-e.originPoint,(e.scale>=A1&&e.scale<=E1||isNaN(e.scale))&&(e.scale=1),(e.translate>=M1&&e.translate<=L1||isNaN(e.translate))&&(e.translate=0)}function Rr(e,t,n,r){ad(e.x,t.x,n.x,r?r.originX:void 0),ad(e.y,t.y,n.y,r?r.originY:void 0)}function ld(e,t,n){e.min=n.min+t.min,e.max=e.min+Ne(t)}function D1(e,t,n){ld(e.x,t.x,n.x),ld(e.y,t.y,n.y)}function cd(e,t,n){e.min=t.min-n.min,e.max=e.min+Ne(t)}function Dr(e,t,n){cd(e.x,t.x,n.x),cd(e.y,t.y,n.y)}function I1(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?G(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?G(n,e,r.max):Math.min(e,n)),e}function ud(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function N1(e,{top:t,left:n,bottom:r,right:i}){return{x:ud(e.x,n,i),y:ud(e.y,t,r)}}function dd(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function z1(e,t){return{x:dd(e.x,t.x),y:dd(e.y,t.y)}}function F1(e,t){let n=.5;const r=Ne(e),i=Ne(t);return i>r?n=Qn(t.min,t.max-r,e.min):r>i&&(n=Qn(e.min,e.max-i,t.min)),kt(0,1,n)}function V1(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Ua=.35;function O1(e=Ua){return e===!1?e=0:e===!0&&(e=Ua),{x:pd(e,"left","right"),y:pd(e,"top","bottom")}}function pd(e,t,n){return{min:fd(e,t),max:fd(e,n)}}function fd(e,t){return typeof e=="number"?e:e[t]||0}const hd=()=>({translate:0,scale:1,origin:0,originPoint:0}),Rn=()=>({x:hd(),y:hd()}),md=()=>({min:0,max:0}),ee=()=>({x:md(),y:md()});function Oe(e){return[e("x"),e("y")]}function _m({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function B1({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function U1(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Ro(e){return e===void 0||e===1}function Wa({scale:e,scaleX:t,scaleY:n}){return!Ro(e)||!Ro(t)||!Ro(n)}function Zt(e){return Wa(e)||Tm(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Tm(e){return gd(e.x)||gd(e.y)}function gd(e){return e&&e!=="0%"}function _s(e,t,n){const r=e-n,i=t*r;return n+i}function yd(e,t,n,r,i){return i!==void 0&&(e=_s(e,i,r)),_s(e,n,r)+t}function $a(e,t=0,n=1,r,i){e.min=yd(e.min,t,n,r,i),e.max=yd(e.max,t,n,r,i)}function Am(e,{x:t,y:n}){$a(e.x,t.translate,t.scale,t.originPoint),$a(e.y,n.translate,n.scale,n.originPoint)}const vd=.999999999999,xd=1.0000000000001;function W1(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&In(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Am(e,o)),r&&Zt(s.latestValues)&&In(e,s.latestValues))}t.x<xd&&t.x>vd&&(t.x=1),t.y<xd&&t.y>vd&&(t.y=1)}function Dn(e,t){e.min=e.min+t,e.max=e.max+t}function wd(e,t,n,r,i=.5){const s=G(e.min,e.max,i);$a(e,t,n,s,r)}function In(e,t){wd(e.x,t.x,t.scaleX,t.scale,t.originX),wd(e.y,t.y,t.scaleY,t.scale,t.originY)}function Em(e,t){return _m(U1(e.getBoundingClientRect(),t))}function $1(e,t,n){const r=Em(e,n),{scroll:i}=t;return i&&(Dn(r.x,i.offset.x),Dn(r.y,i.offset.y)),r}const Mm=({current:e})=>e?e.ownerDocument.defaultView:null,H1=new WeakMap;class q1{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ee(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:p}=this.getProps();p?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(pi(d).point)},s=(d,p)=>{const{drag:f,dragPropagation:y,onDragStart:v}=this.getProps();if(f&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=F0(f),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Oe(b=>{let m=this.getAxisMotionValue(b).get()||0;if(ot.test(m)){const{projection:h}=this.visualElement;if(h&&h.layout){const g=h.layout.layoutBox[b];g&&(m=Ne(g)*(parseFloat(m)/100))}}this.originPoint[b]=m}),v&&W.postRender(()=>v(d,p)),Da(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},o=(d,p)=>{const{dragPropagation:f,dragDirectionLock:y,onDirectionLock:v,onDrag:x}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:b}=p;if(y&&this.currentDirection===null){this.currentDirection=G1(b),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",p.point,b),this.updateAxis("y",p.point,b),this.visualElement.render(),x&&x(d,p)},a=(d,p)=>this.stop(d,p),l=()=>Oe(d=>{var p;return this.getAnimationState(d)==="paused"&&((p=this.getAxisMotionValue(d).animation)===null||p===void 0?void 0:p.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new bm(t,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:Mm(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&W.postRender(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Ii(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=I1(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&Mn(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=N1(i.layoutBox,n):this.constraints=!1,this.elastic=O1(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Oe(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=V1(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Mn(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=$1(r,i.root,this.visualElement.getTransformPagePoint());let o=z1(i.layout.layoutBox,s);if(n){const a=n(B1(o));this.hasMutatedConstraints=!!a,a&&(o=_m(a))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Oe(d=>{if(!Ii(d,n,this.currentDirection))return;let p=l&&l[d]||{};o&&(p={min:0,max:0});const f=i?200:1e6,y=i?40:1e7,v={type:"inertia",velocity:r?t[d]:0,bounceStiffness:f,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...s,...p};return this.startAxisValueAnimation(d,v)});return Promise.all(c).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Da(this.visualElement,t),r.start(kc(t,r,0,n,this.visualElement,!1))}stopAnimation(){Oe(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Oe(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Oe(n=>{const{drag:r}=this.getProps();if(!Ii(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(t[n]-G(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Mn(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Oe(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();i[o]=F1({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Oe(o=>{if(!Ii(o,t,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(G(l,c,i[o]))})}addListeners(){if(!this.visualElement.current)return;H1.set(this.visualElement,this);const t=this.visualElement.current,n=Lr(t,"pointerdown",l=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Mn(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),W.read(r);const o=ni(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Oe(d=>{const p=this.getAxisMotionValue(d);p&&(this.originPoint[d]+=l[d].translate,p.set(p.get()+l[d].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=Ua,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Ii(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function G1(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class K1 extends Kt{constructor(t){super(t),this.removeGroupControls=De,this.removeListeners=De,this.controls=new q1(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||De}unmount(){this.removeGroupControls(),this.removeListeners()}}const Sd=e=>(t,n)=>{e&&W.postRender(()=>e(t,n))};class Q1 extends Kt{constructor(){super(...arguments),this.removePointerDownListener=De}onPointerDown(t){this.session=new bm(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Mm(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Sd(t),onStart:Sd(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&W.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=Lr(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Ji={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function kd(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const fr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(L.test(e))e=parseFloat(e);else return e;const n=kd(e,t.target.x),r=kd(e,t.target.y);return`${n}% ${r}%`}},J1={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=$t.parse(e);if(i.length>5)return r;const s=$t.createTransformer(e),o=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+o]/=a,i[1+o]/=l;const c=G(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),s(i)}};class X1 extends C.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;y0(Y1),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Ji.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||W.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Xl.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Lm(e){const[t,n]=hh(),r=C.useContext(Wl);return u.jsx(X1,{...e,layoutGroup:r,switchLayoutGroup:C.useContext(kh),isPresent:t,safeToRemove:n})}const Y1={borderRadius:{...fr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:fr,borderTopRightRadius:fr,borderBottomLeftRadius:fr,borderBottomRightRadius:fr,boxShadow:J1};function Z1(e,t,n){const r=ye(e)?e:ei(e);return r.start(kc("",r,t,n)),r.animation}function ew(e){return e instanceof SVGElement&&e.tagName!=="svg"}const tw=(e,t)=>e.depth-t.depth;class nw{constructor(){this.children=[],this.isDirty=!1}add(t){dc(this.children,t),this.isDirty=!0}remove(t){pc(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(tw),this.isDirty=!1,this.children.forEach(t)}}function rw(e,t){const n=at.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(Wt(r),e(s-t))};return W.read(r,!0),()=>Wt(r)}const Rm=["TopLeft","TopRight","BottomLeft","BottomRight"],iw=Rm.length,bd=e=>typeof e=="string"?parseFloat(e):e,Cd=e=>typeof e=="number"||L.test(e);function sw(e,t,n,r,i,s){i?(e.opacity=G(0,n.opacity!==void 0?n.opacity:1,ow(r)),e.opacityExit=G(t.opacity!==void 0?t.opacity:1,0,aw(r))):s&&(e.opacity=G(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<iw;o++){const a=`border${Rm[o]}Radius`;let l=jd(t,a),c=jd(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Cd(l)===Cd(c)?(e[a]=Math.max(G(bd(l),bd(c),r),0),(ot.test(c)||ot.test(l))&&(e[a]+="%")):e[a]=c}(t.rotate||n.rotate)&&(e.rotate=G(t.rotate||0,n.rotate||0,r))}function jd(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const ow=Dm(0,.5,Yh),aw=Dm(.5,.95,De);function Dm(e,t,n){return r=>r<e?0:r>t?1:n(Qn(e,t,r))}function Pd(e,t){e.min=t.min,e.max=t.max}function Ve(e,t){Pd(e.x,t.x),Pd(e.y,t.y)}function _d(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Td(e,t,n,r,i){return e-=t,e=_s(e,1/n,r),i!==void 0&&(e=_s(e,1/i,r)),e}function lw(e,t=0,n=1,r=.5,i,s=e,o=e){if(ot.test(t)&&(t=parseFloat(t),t=G(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=G(s.min,s.max,r);e===s&&(a-=t),e.min=Td(e.min,t,n,a,i),e.max=Td(e.max,t,n,a,i)}function Ad(e,t,[n,r,i],s,o){lw(e,t[n],t[r],t[i],t.scale,s,o)}const cw=["x","scaleX","originX"],uw=["y","scaleY","originY"];function Ed(e,t,n,r){Ad(e.x,t,cw,n?n.x:void 0,r?r.x:void 0),Ad(e.y,t,uw,n?n.y:void 0,r?r.y:void 0)}function Md(e){return e.translate===0&&e.scale===1}function Im(e){return Md(e.x)&&Md(e.y)}function Ld(e,t){return e.min===t.min&&e.max===t.max}function dw(e,t){return Ld(e.x,t.x)&&Ld(e.y,t.y)}function Rd(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Nm(e,t){return Rd(e.x,t.x)&&Rd(e.y,t.y)}function Dd(e){return Ne(e.x)/Ne(e.y)}function Id(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class pw{constructor(){this.members=[]}add(t){dc(this.members,t),t.scheduleRender()}remove(t){if(pc(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function fw(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:c,rotate:d,rotateX:p,rotateY:f,skewX:y,skewY:v}=n;c&&(r=`perspective(${c}px) ${r}`),d&&(r+=`rotate(${d}deg) `),p&&(r+=`rotateX(${p}deg) `),f&&(r+=`rotateY(${f}deg) `),y&&(r+=`skewX(${y}deg) `),v&&(r+=`skewY(${v}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const en={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Sr=typeof window<"u"&&window.MotionDebug!==void 0,Do=["","X","Y","Z"],hw={visibility:"hidden"},Nd=1e3;let mw=0;function Io(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function zm(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Hh(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",W,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&zm(r)}function Fm({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=t==null?void 0:t()){this.id=mw++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Sr&&(en.totalNodes=en.resolvedTargetDeltas=en.recalculatedProjection=0),this.nodes.forEach(vw),this.nodes.forEach(bw),this.nodes.forEach(Cw),this.nodes.forEach(xw),Sr&&window.MotionDebug.record(en)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new nw)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new fc),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=ew(o),this.instance=o;const{layoutId:l,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),e){let p;const f=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,p&&p(),p=rw(f,250),Ji.hasAnimatedSinceResize&&(Ji.hasAnimatedSinceResize=!1,this.nodes.forEach(Fd))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||c)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:f,hasRelativeTargetChanged:y,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||d.getDefaultTransition()||Aw,{onLayoutAnimationStart:b,onLayoutAnimationComplete:m}=d.getProps(),h=!this.targetLayout||!Nm(this.targetLayout,v)||y,g=!f&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||f&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(p,g);const w={...ac(x,"layout"),onPlay:b,onComplete:m};(d.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w)}else f||Fd(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Wt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(jw),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&zm(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const p=this.path[d];p.shouldResetTransform=!0,p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(zd);return}this.isUpdating||this.nodes.forEach(Sw),this.isUpdating=!1,this.nodes.forEach(kw),this.nodes.forEach(gw),this.nodes.forEach(yw),this.clearAllSnapshots();const a=at.now();ue.delta=kt(0,1e3/60,a-ue.timestamp),ue.timestamp=a,ue.isProcessing=!0,jo.update.process(ue),jo.preRender.process(ue),jo.render.process(ue),ue.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Xl.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(ww),this.sharedNodes.forEach(Pw)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,W.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){W.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ee(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Im(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;o&&(a||Zt(this.latestValues)||d)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),Ew(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return ee();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(Mw))){const{scroll:d}=this.root;d&&(Dn(l.x,d.offset.x),Dn(l.y,d.offset.y))}return l}removeElementScroll(o){var a;const l=ee();if(Ve(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:p,options:f}=d;d!==this.root&&p&&f.layoutScroll&&(p.wasRoot&&Ve(l,o),Dn(l.x,p.offset.x),Dn(l.y,p.offset.y))}return l}applyTransform(o,a=!1){const l=ee();Ve(l,o);for(let c=0;c<this.path.length;c++){const d=this.path[c];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&In(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Zt(d.latestValues)&&In(l,d.latestValues)}return Zt(this.latestValues)&&In(l,this.latestValues),l}removeTransform(o){const a=ee();Ve(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Zt(c.latestValues))continue;Wa(c.latestValues)&&c.updateSnapshot();const d=ee(),p=c.measurePageBox();Ve(d,p),Ed(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,d)}return Zt(this.latestValues)&&Ed(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ue.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:f}=this.options;if(!(!this.layout||!(p||f))){if(this.resolvedRelativeTargetAt=ue.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ee(),this.relativeTargetOrigin=ee(),Dr(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),Ve(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ee(),this.targetWithTransforms=ee()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),D1(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ve(this.target,this.layout.layoutBox),Am(this.target,this.targetDelta)):Ve(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ee(),this.relativeTargetOrigin=ee(),Dr(this.relativeTargetOrigin,this.target,y.target),Ve(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Sr&&en.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Wa(this.parent.latestValues)||Tm(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===ue.timestamp&&(c=!1),c)return;const{layout:d,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||p))return;Ve(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,y=this.treeScale.y;W1(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=ee());const{target:v}=a;if(!v){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(_d(this.prevProjectionDelta.x,this.projectionDelta.x),_d(this.prevProjectionDelta.y,this.projectionDelta.y)),Rr(this.projectionDelta,this.layoutCorrected,v,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==y||!Id(this.projectionDelta.x,this.prevProjectionDelta.x)||!Id(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),Sr&&en.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Rn(),this.projectionDelta=Rn(),this.projectionDeltaWithTransform=Rn()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},d={...this.latestValues},p=Rn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=ee(),y=l?l.source:void 0,v=this.layout?this.layout.source:void 0,x=y!==v,b=this.getStack(),m=!b||b.members.length<=1,h=!!(x&&!m&&this.options.crossfade===!0&&!this.path.some(Tw));this.animationProgress=0;let g;this.mixTargetDelta=w=>{const S=w/1e3;Vd(p.x,o.x,S),Vd(p.y,o.y,S),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Dr(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),_w(this.relativeTarget,this.relativeTargetOrigin,f,S),g&&dw(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=ee()),Ve(g,this.relativeTarget)),x&&(this.animationValues=d,sw(d,c,this.latestValues,S,h,m)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Wt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=W.update(()=>{Ji.hasAnimatedSinceResize=!0,this.currentAnimation=Z1(0,Nd,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Nd),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:d}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&Vm(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||ee();const p=Ne(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+p;const f=Ne(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}Ve(a,l),In(a,d),Rr(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new pw),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Io("z",o,c,this.animationValues);for(let d=0;d<Do.length;d++)Io(`rotate${Do[d]}`,o,c,this.animationValues),Io(`skew${Do[d]}`,o,c,this.animationValues);o.render();for(const d in c)o.setStaticValue(d,c[d]),this.animationValues&&(this.animationValues[d]=c[d]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return hw;const c={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Ki(o==null?void 0:o.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=Ki(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Zt(this.latestValues)&&(x.transform=d?d({},""):"none",this.hasProjected=!1),x}const f=p.animationValues||p.latestValues;this.applyTransformsToTarget(),c.transform=fw(this.projectionDeltaWithTransform,this.treeScale,f),d&&(c.transform=d(f,c.transform));const{x:y,y:v}=this.projectionDelta;c.transformOrigin=`${y.origin*100}% ${v.origin*100}% 0`,p.animationValues?c.opacity=p===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:c.opacity=p===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const x in ks){if(f[x]===void 0)continue;const{correct:b,applyTo:m}=ks[x],h=c.transform==="none"?f[x]:b(f[x],p);if(m){const g=m.length;for(let w=0;w<g;w++)c[m[w]]=h}else c[x]=h}return this.options.layoutId&&(c.pointerEvents=p===this?Ki(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(zd),this.root.sharedNodes.clear()}}}function gw(e){e.updateLayout()}function yw(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,o=n.source!==e.layout.source;s==="size"?Oe(p=>{const f=o?n.measuredBox[p]:n.layoutBox[p],y=Ne(f);f.min=r[p].min,f.max=f.min+y}):Vm(s,n.layoutBox,r)&&Oe(p=>{const f=o?n.measuredBox[p]:n.layoutBox[p],y=Ne(r[p]);f.max=f.min+y,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[p].max=e.relativeTarget[p].min+y)});const a=Rn();Rr(a,r,n.layoutBox);const l=Rn();o?Rr(l,e.applyTransform(i,!0),n.measuredBox):Rr(l,r,n.layoutBox);const c=!Im(a);let d=!1;if(!e.resumeFrom){const p=e.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:f,layout:y}=p;if(f&&y){const v=ee();Dr(v,n.layoutBox,f.layoutBox);const x=ee();Dr(x,r,y.layoutBox),Nm(v,x)||(d=!0),p.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=p)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function vw(e){Sr&&en.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function xw(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function ww(e){e.clearSnapshot()}function zd(e){e.clearMeasurements()}function Sw(e){e.isLayoutDirty=!1}function kw(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Fd(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function bw(e){e.resolveTargetDelta()}function Cw(e){e.calcProjection()}function jw(e){e.resetSkewAndRotation()}function Pw(e){e.removeLeadSnapshot()}function Vd(e,t,n){e.translate=G(t.translate,0,n),e.scale=G(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Od(e,t,n,r){e.min=G(t.min,n.min,r),e.max=G(t.max,n.max,r)}function _w(e,t,n,r){Od(e.x,t.x,n.x,r),Od(e.y,t.y,n.y,r)}function Tw(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Aw={duration:.45,ease:[.4,0,.1,1]},Bd=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Ud=Bd("applewebkit/")&&!Bd("chrome/")?Math.round:De;function Wd(e){e.min=Ud(e.min),e.max=Ud(e.max)}function Ew(e){Wd(e.x),Wd(e.y)}function Vm(e,t,n){return e==="position"||e==="preserve-aspect"&&!R1(Dd(t),Dd(n),.2)}function Mw(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const Lw=Fm({attachResizeListener:(e,t)=>ni(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),No={current:void 0},Om=Fm({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!No.current){const e=new Lw({});e.mount(window),e.setOptions({layoutScroll:!0}),No.current=e}return No.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Rw={pan:{Feature:Q1},drag:{Feature:K1,ProjectionNode:Om,MeasureLayout:Lm}};function $d(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&W.postRender(()=>s(t,pi(t)))}class Dw extends Kt{mount(){const{current:t}=this.node;t&&(this.unmount=R0(t,n=>($d(this.node,n,"Start"),r=>$d(this.node,r,"End"))))}unmount(){}}class Iw extends Kt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=di(ni(this.node.current,"focus",()=>this.onFocus()),ni(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Hd(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&W.postRender(()=>s(t,pi(t)))}class Nw extends Kt{mount(){const{current:t}=this.node;t&&(this.unmount=z0(t,n=>(Hd(this.node,n,"Start"),(r,{success:i})=>Hd(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Ha=new WeakMap,zo=new WeakMap,zw=e=>{const t=Ha.get(e.target);t&&t(e)},Fw=e=>{e.forEach(zw)};function Vw({root:e,...t}){const n=e||document;zo.has(n)||zo.set(n,{});const r=zo.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Fw,{root:e,...t})),r[i]}function Ow(e,t,n){const r=Vw(t);return Ha.set(e,n),r.observe(e),()=>{Ha.delete(e),r.unobserve(e)}}const Bw={some:0,all:1};class Uw extends Kt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:Bw[i]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:p}=this.node.getProps(),f=c?d:p;f&&f(l)};return Ow(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(Ww(t,n))&&this.startObserver()}unmount(){}}function Ww({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const $w={inView:{Feature:Uw},tap:{Feature:Nw},focus:{Feature:Iw},hover:{Feature:Dw}},Hw={layout:{ProjectionNode:Om,MeasureLayout:Lm}},qa={current:null},Bm={current:!1};function qw(){if(Bm.current=!0,!!ql)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>qa.current=e.matches;e.addListener(t),t()}else qa.current=!1}const Gw=[...pm,me,$t],Kw=e=>Gw.find(dm(e)),qd=new WeakMap;function Qw(e,t,n){for(const r in t){const i=t[r],s=n[r];if(ye(i))e.addValue(r,i);else if(ye(s))e.addValue(r,ei(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=e.getStaticValue(r);e.addValue(r,ei(o!==void 0?o:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Gd=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Jw{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=xc,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=at.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,W.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:d}=o;this.onUpdate=d,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Qs(n),this.isVariantNode=wh(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:p,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const y in f){const v=f[y];l[y]!==void 0&&ye(v)&&v.set(l[y],!1)}}mount(t){this.current=t,qd.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Bm.current||qw(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:qa.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){qd.delete(this.current),this.projection&&this.projection.unmount(),Wt(this.notifyUpdate),Wt(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=gn.has(t),i=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&W.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Jn){const n=Jn[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ee()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Gd.length;r++){const i=Gd[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=t[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=Qw(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=ei(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(cm(i)||em(i))?i=parseFloat(i):!Kw(i)&&$t.test(n)&&(i=om(t,n)),this.setBaseTarget(t,ye(i)?i.get():i)),ye(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const o=Zl(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(i=o[t])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!ye(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new fc),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Um extends Jw{constructor(){super(...arguments),this.KeyframeResolver=fm}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;ye(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function Xw(e){return window.getComputedStyle(e)}class Yw extends Um{constructor(){super(...arguments),this.type="html",this.renderInstance=Ah}readValueFromInstance(t,n){if(gn.has(n)){const r=vc(n);return r&&r.default||0}else{const r=Xw(t),i=(Ph(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Em(t,n)}build(t,n,r){nc(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return oc(t,n,r)}}class Zw extends Um{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ee}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(gn.has(n)){const r=vc(n);return r&&r.default||0}return n=Eh.has(n)?n:Jl(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Rh(t,n,r)}build(t,n,r){rc(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){Mh(t,n,r,i)}mount(t){this.isSVGTag=sc(t.tagName),super.mount(t)}}const eS=(e,t)=>Yl(e)?new Zw(t):new Yw(t,{allowProjection:e!==C.Fragment}),tS=P0({...C1,...$w,...Rw,...Hw},eS),Yn=Bv(tS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Wm=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=C.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>C.createElement("svg",{ref:l,...rS,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Wm("lucide",i),...a},[...o.map(([c,d])=>C.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=(e,t)=>{const n=C.forwardRef(({className:r,...i},s)=>C.createElement(iS,{ref:s,iconNode:t,className:Wm(`lucide-${nS(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Kd=I("ArrowRight",sS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Qd=I("ArrowUpRight",oS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1",key:"1yp76v"}],["path",{d:"M9 12v6",key:"1u1cab"}],["path",{d:"M13 12v6",key:"1sugkk"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",key:"1510fo"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"19jb7n"}]],lS=I("Beer",aS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Ga=I("BookOpen",cS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],dS=I("Bot",uS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Jd=I("Briefcase",pS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],$m=I("Calendar",fS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],mS=I("Check",hS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]],yS=I("ChefHat",gS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],xS=I("ChevronDown",vS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],SS=I("CircleAlert",wS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],bS=I("CircleCheck",kS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],jS=I("Clock",CS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],_S=I("CodeXml",PS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],AS=I("Coffee",TS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],MS=I("Cpu",ES);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],RS=I("Database",LS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],ri=I("ExternalLink",DS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]],NS=I("Filter",IS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]],Hm=I("Flame",zS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]],qm=I("FolderGit2",FS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],OS=I("Gamepad2",VS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],fi=I("Github",BS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Ts=I("Layers",US);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],$S=I("Lightbulb",WS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Gm=I("Linkedin",HS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Ka=I("Mail",qS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],KS=I("MapPin",GS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],JS=I("Menu",QS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],YS=I("Palette",XS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],e2=I("RefreshCw",ZS);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]],n2=I("Rss",t2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]],i2=I("Scissors",r2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Km=I("Search",s2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],a2=I("Send",o2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],hi=I("Sparkles",l2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],u2=I("Star",c2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],p2=I("Target",d2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],Xd=I("Terminal",f2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],m2=I("User",h2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],y2=I("X",g2);function v2({currentTab:e,onSelectTab:t,isMobile:n}){const[r,i]=C.useState(!1),s=(o,a)=>{o.preventDefault(),n&&i(!1),t(a)};return u.jsxs("header",{style:{position:"fixed",top:0,left:0,right:0,height:"var(--nav-height)",backgroundColor:"var(--bg-nav)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",borderBottom:"1px solid var(--border-muted)",zIndex:100,display:"flex",alignItems:"center",transition:"all 0.3s ease"},children:[u.jsxs("div",{style:{width:"100%",maxWidth:"1200px",margin:"0 auto",padding:"0 24px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsxs("a",{href:"/",onClick:o=>s(o,Et[0]),style:{display:"flex",alignItems:"center",gap:"12px",textDecoration:"none",color:"var(--text-heading)"},children:[u.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"8px",backgroundColor:"var(--color-panel)",border:"1px solid var(--color-accent)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 0 14px color-mix(in srgb, var(--color-accent) 40%, transparent)"},children:u.jsxs("svg",{viewBox:"0 0 32 32",width:"22",height:"22","aria-hidden":"true",children:[u.jsx("path",{d:"M16 4L16 22L6 22Z",fill:"var(--color-accent)"}),u.jsx("path",{d:"M16 8L16 22L24 22Z",fill:"var(--color-accent)",opacity:"0.65"}),u.jsx("path",{d:"M4 24Q10 20 16 24Q22 28 28 24",stroke:"var(--color-text)",strokeWidth:"2.5",fill:"none",strokeLinecap:"round"})]})}),u.jsxs("div",{children:[u.jsx("div",{style:{fontFamily:"var(--font-mono)",fontWeight:700,fontSize:"15px",letterSpacing:"-0.02em",color:"var(--text-heading)"},children:"DK Bearsong"}),u.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"10.5px",color:"var(--text-muted)"},children:"AI & Tech Support"})]})]}),!n&&u.jsx("nav",{style:{display:"flex",alignItems:"center",gap:"4px",backgroundColor:"color-mix(in srgb, var(--color-panel) 50%, transparent)",padding:"4px 6px",borderRadius:"var(--radius-full)",border:"1px solid var(--border-muted)"},children:Et.map(o=>{const a=e.id===o.id;return u.jsxs("button",{onClick:l=>s(l,o),style:{position:"relative",background:"transparent",border:"none",padding:"8px 18px",borderRadius:"var(--radius-full)",fontFamily:"var(--font-mono)",fontSize:"13px",fontWeight:a?700:500,color:a?"var(--color-bg)":"var(--text-muted)",cursor:"pointer",transition:"all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",display:"flex",alignItems:"center",gap:"6px"},children:[a&&u.jsx("div",{style:{position:"absolute",inset:0,backgroundColor:"var(--color-accent)",borderRadius:"var(--radius-full)",boxShadow:"0 2px 12px color-mix(in srgb, var(--color-accent) 45%, transparent)",zIndex:0}}),u.jsx("span",{style:{position:"relative",zIndex:1},children:o.label})]},o.id)})}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[u.jsxs("a",{href:Me.socialLinks.github,target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",style:{padding:"8px 14px",fontSize:"13px"},children:[u.jsx(fi,{size:16,color:"var(--color-accent)"}),!n&&u.jsx("span",{children:"GitHub"})]}),n&&u.jsx("button",{onClick:()=>i(!r),className:"btn btn-outline",style:{padding:"8px 10px"},"aria-label":"Toggle Navigation Menu",children:r?u.jsx(y2,{size:20}):u.jsx(JS,{size:20})})]})]}),u.jsx(qs,{children:n&&r&&u.jsx(Yn.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.5,ease:[.16,1,.3,1]},style:{overflow:"hidden",position:"absolute",top:"var(--nav-height)",left:0,right:0,backgroundColor:"color-mix(in srgb, var(--color-bg) 96%, transparent)",borderBottom:"1px solid var(--border-muted)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:"0 20px 40px rgba(0, 0, 0, 0.8)"},children:u.jsx("div",{style:{padding:"20px 24px",display:"flex",flexDirection:"column",gap:"10px"},children:Et.map(o=>{const a=e.id===o.id;return u.jsxs("a",{href:o.path,onClick:l=>s(l,o),style:{fontFamily:"var(--font-mono)",fontSize:"15px",fontWeight:a?700:500,color:a?"var(--color-accent)":"var(--text-heading)",textDecoration:"none",padding:"12px 16px",borderRadius:"8px",backgroundColor:a?"color-mix(in srgb, var(--color-accent) 15%, var(--bg-panel))":"var(--bg-panel)",border:a?"1px solid var(--color-accent)":"1px solid var(--border-muted)",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease"},children:[u.jsx("span",{children:o.label}),u.jsx("span",{style:{color:"var(--color-accent)",fontWeight:700},children:a?"●":"→"})]},o.id)})})},"mobile-nav-drawer")})]})}function x2(){const e=C.useRef(null);return C.useEffect(()=>{const t=e.current;if(!t)return;const n=t.getContext("2d");let r,i=t.width=window.innerWidth,s=t.height=window.innerHeight,o;const a=()=>{clearTimeout(o),o=setTimeout(()=>{t&&(i=t.width=window.innerWidth,s=t.height=window.innerHeight)},150)};window.addEventListener("resize",a);const l=()=>{const b=getComputedStyle(document.documentElement),m=b.getPropertyValue("--color-accent").trim()||"#FE7F2D",h=b.getPropertyValue("--color-panel").trim()||"#233D4D";return{accent:m,panel:h}},{accent:c,panel:d}=l();let p=0;const f=[{speed:.003,amplitude:35,wavelength:.0012,color:c,alpha:.15,offset:0},{speed:.004,amplitude:45,wavelength:.0016,color:d,alpha:.25,offset:2},{speed:.002,amplitude:25,wavelength:9e-4,color:c,alpha:.1,offset:4},{speed:.005,amplitude:55,wavelength:.002,color:d,alpha:.2,offset:1.5}];let y=!0;const v=()=>{y&&(n.clearRect(0,0,i,s),p+=1,f.forEach(b=>{n.save(),n.beginPath(),n.strokeStyle=b.color,n.globalAlpha=b.alpha,n.lineWidth=1.5;const m=s*.45;for(let h=0;h<i;h+=10){const g=m+Math.sin(h*b.wavelength+p*b.speed+b.offset)*b.amplitude+Math.cos(h*b.wavelength*.5+p*b.speed*.7)*(b.amplitude*.5);h===0?n.moveTo(h,g):n.lineTo(h,g)}n.stroke(),n.restore()}),r=requestAnimationFrame(v))},x=()=>{document.hidden?(y=!1,r&&cancelAnimationFrame(r)):y||(y=!0,r=requestAnimationFrame(v))};return document.addEventListener("visibilitychange",x),document.hidden||v(),()=>{y=!1,clearTimeout(o),window.removeEventListener("resize",a),document.removeEventListener("visibilitychange",x),r&&cancelAnimationFrame(r)}},[]),u.jsx("canvas",{ref:e,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0,opacity:.85},"aria-hidden":"true"})}const w2={enter:e=>({x:e>0?"100%":"-100%",opacity:0,position:"absolute",width:"100%",top:0,left:0}),center:{x:0,opacity:1,position:"relative",width:"100%",transition:{x:{type:"tween",ease:[.2,.7,.2,1],duration:.55},opacity:{duration:.35,ease:"easeOut"}}},exit:e=>({x:e>0?"-100%":"100%",opacity:[1,1,0],position:"absolute",width:"100%",top:0,left:0,transition:{x:{type:"tween",ease:[.2,.7,.2,1],duration:.55},opacity:{duration:.35,ease:"easeIn",times:[0,.6,1]}}})};function S2({pageKey:e,direction:t,children:n}){return u.jsx("div",{style:{position:"relative",width:"100%",overflow:"hidden",minHeight:"calc(100vh - 160px)"},children:u.jsx(qs,{custom:t,initial:!1,children:u.jsx(Yn.div,{custom:t,variants:w2,initial:"enter",animate:"center",exit:"exit",style:{width:"100%"},children:n},e)})})}function k2(){return u.jsx("footer",{style:{borderTop:"1px solid var(--border-muted)",backgroundColor:"#BFC9D1",padding:"40px 24px",marginTop:"auto",position:"relative",zIndex:10},children:u.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",display:"flex",flexDirection:"column",alignItems:"center",gap:"20px",textAlign:"center"},children:[u.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[u.jsx("a",{href:Me.socialLinks.github,target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",style:{padding:"8px 12px",borderRadius:"var(--radius-full)"},"aria-label":"GitHub",children:u.jsx(fi,{size:16})}),u.jsx("a",{href:Me.socialLinks.linkedin,target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",style:{padding:"8px 12px",borderRadius:"var(--radius-full)"},"aria-label":"LinkedIn",children:u.jsx(Gm,{size:16})}),u.jsx("a",{href:Me.socialLinks.substack,target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",style:{padding:"8px 12px",borderRadius:"var(--radius-full)"},"aria-label":"Substack",children:u.jsx(ri,{size:16})})]}),u.jsxs("div",{style:{color:"var(--text-muted)",fontSize:"13.5px",fontFamily:"var(--font-mono)"},children:[u.jsxs("p",{children:["© ",new Date().getFullYear()," ",Me.name,". All rights reserved."]}),u.jsx("p",{style:{marginTop:"4px",fontSize:"12px",color:"var(--text-dim)"},children:"Engineering Efficiency Through Intelligent Customer Support • Built with React & Express"})]})]})})}const Qm=[{name:"job_scraper_and_analyzer",slug:"job_scraper_and_analyzer",description:"An updated version of my job scraper and analyzer, designed to allow cloud LLM processing, uses vector comparisons, and provide a more thorough analyzing process.",githubUrl:"https://github.com/dkbearsong/job_scraper_and_analyzer",demoUrl:null,technologies:["Python","Shell"],topics:["ai","llm","portfolio","pytho"],status:"active",lastUpdated:"2026-09-01T18:03:05Z",readme:`# Job Scraper and Analyzer

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
- Page analysis`}];function b2(e){if(!e||typeof e!="object")return{name:"Untitled Project",slug:"untitled-project",description:null,githubUrl:null,demoUrl:null,technologies:[],topics:[],status:null,featured:!1,stars:null,lastUpdated:null};const t=typeof e.name=="string"&&e.name.trim()?e.name.trim():typeof e.slug=="string"&&e.slug.trim()?e.slug.trim():"Untitled Project",n=typeof e.slug=="string"&&e.slug.trim()?e.slug.trim():t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""),r=typeof e.description=="string"&&e.description.trim()?e.description.trim():null,i=typeof e.githubUrl=="string"&&e.githubUrl.trim()?e.githubUrl.trim():null,s=typeof e.demoUrl=="string"&&e.demoUrl.trim()?e.demoUrl.trim():null,o=Array.isArray(e.technologies)?e.technologies.filter(f=>typeof f=="string"&&f.trim()).map(f=>f.trim()):[],a=Array.isArray(e.topics)?e.topics.filter(f=>typeof f=="string"&&f.trim()).map(f=>f.trim()):[],l=typeof e.status=="string"&&e.status.trim()?e.status.trim().toLowerCase():null,c=!!e.featured,d=typeof e.stars=="number"&&!isNaN(e.stars)?e.stars:null,p=typeof e.lastUpdated=="string"&&e.lastUpdated.trim()?e.lastUpdated.trim():null;return{name:t,slug:n,description:r,githubUrl:i,demoUrl:s,technologies:o,topics:a,status:l,featured:c,stars:d,lastUpdated:p}}function C2(e,t=!0){if(!e)return null;try{const n=new Date(e);if(isNaN(n.getTime()))return null;const r=n.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return t?`Updated ${r}`:r}catch{return null}}function bc(e=Qm){return Array.isArray(e)?[...e.map(b2)].sort((n,r)=>{const i=n.lastUpdated?new Date(n.lastUpdated).getTime():0,s=r.lastUpdated?new Date(r.lastUpdated).getTime():0,o=isNaN(i)?0:i;return(isNaN(s)?0:s)-o}):[]}function j2(e=2,t=Qm){const n=bc(t),r=n.filter(s=>s.featured);if(r.length>=e)return r.slice(0,e);const i=n.filter(s=>!s.featured);return[...r,...i].slice(0,e)}bc();function Jm({project:e,animate:t=!0}){if(!e)return null;const n=C2(e.lastUpdated),r=Array.isArray(e.technologies)&&e.technologies.length>0,i=Array.isArray(e.topics)&&e.topics.length>0,s=!!(e.githubUrl||e.demoUrl),o=c=>{switch(c==null?void 0:c.toLowerCase()){case"active":return"#50fa7b";case"maintained":return"#8be9fd";case"in-progress":return"var(--color-accent)";case"archived":return"var(--text-dim)";default:return"var(--color-accent)"}},a=t?Yn.div:"div",l=t?{layout:!0,initial:{opacity:0,scale:.94,y:16},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.94,y:16},transition:{opacity:{duration:.25,ease:"easeInOut"},scale:{duration:.25,ease:"easeInOut"},y:{duration:.25,ease:"easeInOut"},layout:{type:"spring",damping:26,stiffness:280}}}:{};return u.jsxs(a,{...l,className:"card-glass project-card",style:{padding:"28px",display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"20px",position:"relative",height:"100%"},children:[u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px",marginBottom:"16px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[u.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"8px",backgroundColor:"color-mix(in srgb, var(--color-accent) 15%, transparent)",border:"1px solid color-mix(in srgb, var(--color-accent) 40%, transparent)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:u.jsx(qm,{size:20,color:"var(--color-accent)"})}),e.status&&u.jsxs("span",{className:"mono",style:{fontSize:"11px",display:"inline-flex",alignItems:"center",gap:"6px",textTransform:"capitalize",color:"var(--text-heading)",padding:"3px 10px",borderRadius:"var(--radius-full)",backgroundColor:"color-mix(in srgb, var(--color-panel) 60%, transparent)",border:"1px solid var(--border-muted)"},children:[u.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",backgroundColor:o(e.status),boxShadow:`0 0 6px ${o(e.status)}`}}),e.status]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.stars!==null&&e.stars>0&&u.jsxs("span",{className:"mono",style:{fontSize:"11px",color:"var(--text-dim)",display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"var(--radius-full)",background:"color-mix(in srgb, var(--color-panel) 40%, transparent)"},children:[u.jsx(u2,{size:12,color:"var(--color-accent)",fill:"var(--color-accent)"}),e.stars]}),e.featured&&u.jsxs("span",{className:"mono",style:{fontSize:"10.5px",textTransform:"uppercase",fontWeight:700,color:"var(--color-accent)",letterSpacing:"0.05em",backgroundColor:"color-mix(in srgb, var(--color-accent) 15%, transparent)",border:"1px solid color-mix(in srgb, var(--color-accent) 35%, transparent)",padding:"2px 8px",borderRadius:"var(--radius-full)",display:"inline-flex",alignItems:"center",gap:"4px"},children:[u.jsx(hi,{size:11}),"Featured"]})]})]}),u.jsx("h3",{style:{fontSize:"19px",fontWeight:700,marginBottom:"10px",color:"var(--text-heading)",lineHeight:"1.3"},children:e.name}),n&&u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"12px",color:"var(--text-dim)",marginBottom:"14px"},className:"mono",children:[u.jsx($m,{size:13,color:"var(--color-accent)"}),u.jsx("span",{children:n})]}),e.description&&u.jsx("p",{style:{fontSize:"14px",color:"var(--text-body)",lineHeight:"1.65",marginBottom:"18px"},children:e.description})]}),u.jsxs("div",{children:[r&&u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:i||s?"16px":"0"},children:e.technologies.map(c=>u.jsxs("span",{className:"badge-pill",style:{fontSize:"11px",padding:"3px 9px"},children:[u.jsx("span",{className:"dot"}),c]},c))}),i&&u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"5px",marginBottom:s?"20px":"0"},children:e.topics.map(c=>u.jsxs("span",{className:"mono",style:{fontSize:"10px",color:"var(--text-dim)",backgroundColor:"color-mix(in srgb, var(--color-bg) 60%, var(--color-panel) 40%)",padding:"2px 7px",borderRadius:"4px",border:"1px solid var(--border-subtle)"},children:["#",c]},c))}),s&&u.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px",marginTop:"4px"},children:[e.githubUrl&&u.jsxs("a",{href:e.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",style:{flex:1,minWidth:"130px",fontSize:"12.5px",padding:"8px 14px"},children:[u.jsx(fi,{size:15}),u.jsx("span",{children:"GitHub"})]}),e.demoUrl&&u.jsxs("a",{href:e.demoUrl,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",style:{flex:1,minWidth:"130px",fontSize:"12.5px",padding:"8px 14px"},children:[u.jsx(ri,{size:15}),u.jsx("span",{children:"Live Demo"})]})]})]})]})}function Yd({onNavigate:e}){const t=j2(2),n=Av[0];return u.jsx("div",{className:"home-page",children:u.jsxs("div",{className:"grid-2col",children:[u.jsx("div",{className:"home-sidebar",children:u.jsxs("div",{className:"card-glass",style:{padding:"32px 28px",borderLeft:"3px solid var(--color-accent)"},children:[u.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"4px 12px",borderRadius:"var(--radius-full)",background:"color-mix(in srgb, var(--color-accent) 15%, transparent)",border:"1px solid color-mix(in srgb, var(--color-accent) 40%, transparent)",marginBottom:"16px"},children:[u.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#50fa7b",boxShadow:"0 0 8px #50fa7b"}}),u.jsx("span",{className:"mono",style:{fontSize:"11.5px",color:"var(--text-heading)",fontWeight:600},children:"Open to New Opportunities"})]}),u.jsx("h1",{style:{fontSize:"32px",fontWeight:800,letterSpacing:"-0.03em",marginBottom:"12px"},children:Me.name}),u.jsx("h2",{style:{fontSize:"16px",fontWeight:500,color:"var(--text-muted)",lineHeight:"1.5",marginBottom:"24px"},children:Me.tagline}),u.jsxs("div",{style:{borderTop:"1px solid var(--border-muted)",paddingTop:"20px"},children:[u.jsx("p",{className:"mono",style:{fontSize:"11.5px",textTransform:"uppercase",color:"var(--text-dim)",marginBottom:"12px",letterSpacing:"0.05em"},children:"Section Navigator"}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[u.jsxs("a",{href:"#summary",className:"btn btn-ghost",style:{justifyContent:"flex-start",padding:"8px 12px",fontSize:"13px"},children:[u.jsx(Xd,{size:15,color:"var(--color-accent)"}),u.jsx("span",{children:"Executive Summary"})]}),u.jsxs("a",{href:"#experience",className:"btn btn-ghost",style:{justifyContent:"flex-start",padding:"8px 12px",fontSize:"13px"},children:[u.jsx(Jd,{size:15,color:"var(--color-accent)"}),u.jsx("span",{children:"Work Experience"})]}),u.jsxs("a",{href:"#projects",className:"btn btn-ghost",style:{justifyContent:"flex-start",padding:"8px 12px",fontSize:"13px"},children:[u.jsx(Ts,{size:15,color:"var(--color-accent)"}),u.jsx("span",{children:"Featured Projects"})]}),u.jsxs("a",{href:"#blog",className:"btn btn-ghost",style:{justifyContent:"flex-start",padding:"8px 12px",fontSize:"13px"},children:[u.jsx(Ga,{size:15,color:"var(--color-accent)"}),u.jsx("span",{children:"Latest Publications"})]})]})]}),u.jsxs("div",{style:{marginTop:"28px",display:"flex",gap:"10px"},children:[u.jsx("button",{onClick:()=>e&&e("contact"),className:"btn btn-primary",style:{flex:1,fontSize:"13px"},children:"Get In Touch"}),u.jsx("button",{onClick:()=>e&&e("portfolio"),className:"btn btn-outline",style:{flex:1,fontSize:"13px"},children:"Portfolio"})]})]})}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:[u.jsxs("section",{id:"summary",className:"card-glass",style:{padding:"36px 32px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"20px"},children:[u.jsx(Xd,{size:22,color:"var(--color-accent)"}),u.jsx("h2",{style:{fontSize:"22px",fontWeight:700},children:"Executive Summary"})]}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",color:"var(--text-body)",fontSize:"15px",lineHeight:"1.7"},children:jv.paragraphs.map((r,i)=>u.jsx("p",{children:r},i))})]}),u.jsxs("section",{id:"experience",style:{display:"flex",flexDirection:"column",gap:"24px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[u.jsx(Jd,{size:22,color:"var(--color-accent)"}),u.jsx("h2",{style:{fontSize:"22px",fontWeight:700},children:"Experience"})]}),u.jsx("span",{className:"mono",style:{fontSize:"12px",color:"var(--text-dim)"},children:"13+ Years in Tech & Enterprise Support"})]}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:Pv.map(r=>u.jsxs("div",{className:"card-glass",style:{padding:"28px"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"8px",marginBottom:"12px"},children:[u.jsxs("div",{children:[u.jsx("h3",{style:{fontSize:"18px",color:"var(--text-heading)",fontWeight:700},children:r.role}),u.jsxs("a",{href:r.companyUrl,target:"_blank",rel:"noopener noreferrer",style:{color:"var(--color-accent)",textDecoration:"none",fontSize:"14px",fontWeight:600,display:"inline-flex",alignItems:"center",gap:"4px",marginTop:"2px"},children:[r.company,u.jsx(ri,{size:12})]})]}),u.jsx("span",{className:"mono",style:{fontSize:"12px",padding:"4px 10px",borderRadius:"var(--radius-full)",backgroundColor:"color-mix(in srgb, var(--color-panel) 60%, transparent)",border:"1px solid var(--border-muted)",color:"var(--text-heading)"},children:r.period})]}),u.jsx("p",{style:{color:"var(--text-body)",fontSize:"14.5px",lineHeight:"1.65",marginBottom:"20px"},children:r.description}),u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:r.skills.map(i=>u.jsxs("span",{className:"badge-pill",children:[u.jsx("span",{className:"dot"}),i]},i))})]},r.id))})]}),u.jsxs("section",{id:"projects",style:{display:"flex",flexDirection:"column",gap:"24px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[u.jsx(Ts,{size:22,color:"var(--color-accent)"}),u.jsx("h2",{style:{fontSize:"22px",fontWeight:700},children:"Featured Projects"})]}),u.jsxs("button",{onClick:()=>e&&e("portfolio"),className:"btn btn-outline",style:{padding:"6px 14px",fontSize:"12px"},children:[u.jsx("span",{children:"View All Projects"}),u.jsx(Kd,{size:14})]})]}),u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"20px"},children:t.map(r=>u.jsx(Jm,{project:r,animate:!1},r.slug||r.name))})]}),u.jsxs("section",{id:"blog",style:{display:"flex",flexDirection:"column",gap:"24px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[u.jsx(Ga,{size:22,color:"var(--color-accent)"}),u.jsx("h2",{style:{fontSize:"22px",fontWeight:700},children:"Latest Blog Post"})]}),u.jsxs("button",{onClick:()=>e&&e("blog"),className:"btn btn-outline",style:{padding:"6px 14px",fontSize:"12px"},children:[u.jsx("span",{children:"All Posts"}),u.jsx(Kd,{size:14})]})]}),u.jsxs("div",{className:"card-glass",style:{padding:"28px"},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[u.jsxs("span",{className:"mono",style:{fontSize:"12px",color:"var(--color-accent)"},children:[n.publication," • ",n.readTime]}),u.jsx("span",{className:"mono",style:{fontSize:"12px",color:"var(--text-dim)"},children:n.date})]}),u.jsx("h3",{style:{fontSize:"19px",fontWeight:700,marginBottom:"12px"},children:n.title}),u.jsx("p",{style:{fontSize:"14.5px",color:"var(--text-body)",lineHeight:"1.65",marginBottom:"20px"},children:n.summary}),u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginBottom:"20px"},children:n.tags.map(r=>u.jsxs("span",{className:"badge-pill",style:{fontSize:"11px"},children:["#",r]},r))}),u.jsxs("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",style:{fontSize:"13px"},children:[u.jsx("span",{children:"Read Full Article on Substack"}),u.jsx(ri,{size:14})]})]})]})]})]})})}const P2={ChefHat:yS,Palette:YS,Beer:lS,Flame:Hm,Coffee:AS,Sparkles:hi,Scissors:i2,Gamepad2:OS},Zd=e=>{if(!e)return"";if(e.startsWith("http://")||e.startsWith("https://"))return e;let t=e.replace(/^public\//,"/");return t.startsWith("/")||(t="/"+t),encodeURI(decodeURI(t))};function _2({videoUrl:e}){const t=C.useRef(null),n=e.replace(/\.mp4$/i,".webm"),r=e.replace(/\.webm$/i,".mp4");return C.useEffect(()=>{const i=t.current;if(!i)return;const s=i.canPlayType("video/webm"),o=s==="probably"||s==="maybe"?n:r;i.src=o,i.muted=!0,i.defaultMuted=!0,i.playsInline=!0,i.loop=!0,i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline","true"),i.setAttribute("muted",""),i.load();const a=i.play();return a!==void 0&&a.catch(()=>{}),()=>{try{i.pause(),i.removeAttribute("src"),i.load()}catch{}}},[e,n,r]),u.jsx("video",{ref:t,className:"preview-media preview-video",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,"webkit-playsinline":"true",preload:"auto"})}function T2({items:e=[]}){const[t,n]=C.useState(-1),r=()=>typeof window>"u"?!1:window.matchMedia("(hover: hover) and (pointer: fine)").matches,i=l=>{r()&&n(l)},s=()=>{r()&&n(-1)},o=l=>{n(c=>c===l?-1:l)},a=(l,c)=>{if(l.key==="Enter"||l.key===" ")l.preventDefault(),o(c);else if(l.key==="ArrowRight"){l.preventDefault();const d=(c+1)%e.length;n(d)}else if(l.key==="ArrowLeft"){l.preventDefault();const d=(c-1+e.length)%e.length;n(d)}};return u.jsx("div",{className:"previews-accordion",role:"region","aria-label":"Interactive Interests and Creative Pursuits Previews",onMouseLeave:s,children:e.map((l,c)=>{const d=P2[l.icon]||hi,p=t===c,f=Zd(l.image||l.poster),y=Zd(l.video||(l.mediaType==="video"?l.mediaSrc:"")),v=!!f,x=!!y;return u.jsxs("div",{tabIndex:0,role:"button","aria-expanded":p,"aria-label":l.name,className:`preview-bar-panel ${p?"is-active":""}`,onMouseEnter:()=>i(c),onClick:()=>o(c),onKeyDown:b=>a(b,c),children:[!v&&!x&&u.jsxs("div",{className:"preview-ph",children:[u.jsx(d,{size:28,color:"var(--color-accent)"}),u.jsxs("span",{className:"preview-ph-title",children:["[ ",l.name," ]"]})]}),v&&u.jsx("img",{src:f,alt:l.name,className:"preview-media preview-image",loading:"lazy"}),x&&p&&u.jsx(_2,{videoUrl:y}),(v||x)&&u.jsx("div",{className:"preview-overlay"}),l.tag&&u.jsx("div",{className:"preview-tag",children:l.tag}),u.jsxs("div",{className:"preview-label",children:[u.jsxs("div",{className:"preview-title",children:[u.jsx(d,{size:16,className:"preview-ico"}),u.jsx("span",{children:l.name})]}),u.jsx("p",{className:"preview-desc",children:l.desc})]})]},l.id||l.name||c)})})}const ep=[_S,Ts,RS,dS];function A2(){return u.jsxs("div",{style:{maxWidth:"960px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"48px"},children:[u.jsxs("div",{className:"card-glass",style:{padding:"40px 36px",borderLeft:"4px solid var(--color-accent)"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"12px"},children:[u.jsx(m2,{size:26,color:"var(--color-accent)"}),u.jsx("h1",{style:{fontSize:"32px",fontWeight:800},children:"About Me"})]}),u.jsx("p",{style:{fontSize:"17px",color:"var(--text-heading)",fontWeight:500,lineHeight:"1.6"},children:"Application support engineer, automation specialist, and lifelong builder obsessed with technical problem solving and modern AI workflows."})]}),u.jsxs("div",{className:"card-glass",style:{padding:"36px"},children:[u.jsxs("h2",{style:{fontSize:"20px",fontWeight:700,marginBottom:"20px",display:"flex",alignItems:"center",gap:"10px"},children:[u.jsx(hi,{size:20,color:"var(--color-accent)"}),"My Story & Background"]}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"18px",fontSize:"15.5px",lineHeight:"1.75",color:"var(--text-body)"},children:[u.jsx("p",{children:"Hello! I’m an application support and automation specialist with over ten years of experience helping SaaS teams work smarter through better systems, data, and process design. In recent years, I’ve focused on bringing AI and automation into day-to-day operations, building tools that save time, reduce manual work, and make customer support more efficient and human at the same time."}),u.jsx("p",{children:"Outside of my career, I’m a man of many talents and interests. I cook, I draw, I brew beer, I hike and do martial arts, play video games and watch anime, I ferment and pickle, I roast coffee, I sharpen knives, I do it all. My motto is if something sounds interesting, it’s worth trying out."}),u.jsx("p",{children:"I’m also passionate about continual learning and personal development. Who I am today is a benchmark for who I will be tomorrow, and I’m never satisfied with simply staying in one place. If you want someone who will always look at how to do things better and how to learn new tech, I’m your guy!"})]})]}),u.jsxs("div",{className:"card-glass",style:{padding:"36px"},children:[u.jsxs("h2",{style:{fontSize:"20px",fontWeight:700,marginBottom:"24px",display:"flex",alignItems:"center",gap:"10px"},children:[u.jsx(MS,{size:20,color:"var(--color-accent)"}),"Technical Stack & Toolkit"]}),u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 300px), 1fr))",gap:"24px"},children:Tv.map((e,t)=>{const n=ep[t%ep.length];return u.jsxs("div",{style:{backgroundColor:"color-mix(in srgb, var(--color-bg) 70%, var(--color-panel) 30%)",border:"1px solid var(--border-muted)",borderRadius:"var(--radius-md)",padding:"22px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"14px"},children:[u.jsx(n,{size:18,color:"var(--color-accent)"}),u.jsx("h3",{style:{fontSize:"15px",fontWeight:700,color:"var(--text-heading)"},children:e.name})]}),u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:e.items.map(r=>u.jsxs("span",{className:"badge-pill",children:[u.jsx("span",{className:"dot"}),r]},r))})]},e.name)})})]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 280px), 1fr))",gap:"24px"},children:[u.jsxs("div",{className:"card-glass",style:{padding:"32px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"16px"},children:[u.jsx(p2,{size:22,color:"var(--color-accent)"}),u.jsx("h3",{style:{fontSize:"18px",fontWeight:700},children:"Technical Expertise"})]}),u.jsx("p",{style:{fontSize:"14.5px",lineHeight:"1.7",color:"var(--text-body)"},children:"Proficient in technical support, scripting and programming, and AI integration development. I combine deep knowledge in frontend and backend development with relational data pipelines and local/cloud LLMs to solve enterprise customer issues and drive down Mean Time to Resolution (mTTR)."})]}),u.jsxs("div",{className:"card-glass",style:{padding:"32px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",marginBottom:"16px"},children:[u.jsx($S,{size:22,color:"var(--color-accent)"}),u.jsx("h3",{style:{fontSize:"18px",fontWeight:700},children:"Problem Solving & Empathy"})]}),u.jsx("p",{style:{fontSize:"14.5px",lineHeight:"1.7",color:"var(--text-body)"},children:"I utilize customer empathy to document problems thoroughly, combining clear documentation with technical knowledge to resolve issues quickly and efficiently while ensuring root causes are eradicated so issues do not recur. If the right tool doesn't exist, I build it."})]})]}),u.jsxs("div",{className:"card-glass",style:{padding:"36px"},children:[u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginBottom:"8px"},children:[u.jsxs("h2",{style:{fontSize:"20px",fontWeight:700,display:"flex",alignItems:"center",gap:"10px"},children:[u.jsx(Hm,{size:20,color:"var(--color-accent)"}),"Interests & Creative Pursuits"]}),u.jsx("p",{style:{fontSize:"14px",color:"var(--text-muted)"},children:'"If something sounds interesting, it’s worth trying out." Hover or tap each panel to expand details, view screenshots, and watch video clips.'})]}),u.jsx(T2,{items:_v})]})]})}function E2({projects:e,showFilters:t=!0,showSearch:n=!0,title:r="What I've Been Building",subtitle:i="Recent projects, experiments, and tools I'm actively building."}){const s=C.useMemo(()=>e||bc(),[e]),[o,a]=C.useState("All"),[l,c]=C.useState(""),d=C.useMemo(()=>{const f=["All"],v=["AI","Python","JavaScript","Automation","MCP","RAG"].filter(x=>{const b=x.toLowerCase();return s.some(m=>m.technologies.some(h=>h.toLowerCase().includes(b))||m.topics.some(h=>h.toLowerCase().includes(b)))});return[...f,...v]},[s]),p=C.useMemo(()=>s.filter(f=>{let y=!0;if(o!=="All"){const x=o.toLowerCase(),b=f.technologies.some(g=>g.toLowerCase().includes(x)),m=f.topics.some(g=>g.toLowerCase().includes(x)),h=f.name.toLowerCase().includes(x);y=b||m||h}let v=!0;if(l.trim()){const x=l.toLowerCase().trim(),b=f.name.toLowerCase().includes(x),m=(f.description||"").toLowerCase().includes(x),h=f.technologies.some(w=>w.toLowerCase().includes(x)),g=f.topics.some(w=>w.toLowerCase().includes(x));v=b||m||h||g}return y&&v}),[s,o,l]);return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",width:"100%"},children:[u.jsxs("div",{className:"card-glass",style:{padding:"36px 32px",borderLeft:"4px solid var(--color-accent)"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"10px"},children:[u.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",backgroundColor:"color-mix(in srgb, var(--color-accent) 15%, transparent)",display:"flex",alignItems:"center",justifyContent:"center"},children:u.jsx(Ts,{size:22,color:"var(--color-accent)"})}),u.jsx("h2",{style:{fontSize:"28px",fontWeight:800,letterSpacing:"-0.02em"},children:r})]}),i&&u.jsx("p",{style:{fontSize:"15.5px",color:"var(--text-heading)",lineHeight:"1.6",maxWidth:"820px"},children:i}),(t||n)&&s.length>0&&u.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:"16px",marginTop:"24px",paddingTop:"20px",borderTop:"1px solid var(--border-subtle)"},children:[t&&d.length>1&&u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:d.map(f=>{const y=o===f;return u.jsx(Yn.button,{onClick:()=>a(f),whileHover:{scale:1.03},whileTap:{scale:.97},transition:{duration:.15},style:{padding:"6px 14px",borderRadius:"var(--radius-full)",fontFamily:"var(--font-mono)",fontSize:"12px",fontWeight:600,cursor:"pointer",border:y?"1px solid var(--color-accent)":"1px solid var(--border-muted)",backgroundColor:y?"var(--color-accent)":"color-mix(in srgb, var(--color-bg) 60%, transparent)",color:y?"var(--color-bg)":"var(--text-muted)",transition:"background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease"},children:f},f)})}),n&&u.jsxs("div",{style:{position:"relative",minWidth:"220px",flex:"1 1 200px",maxWidth:"320px"},children:[u.jsx(Km,{size:14,color:"var(--text-dim)",style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)"}}),u.jsx("input",{type:"text",placeholder:"Filter projects or tech...",value:l,onChange:f=>c(f.target.value),className:"form-control",style:{padding:"7px 12px 7px 34px",fontSize:"12.5px",borderRadius:"var(--radius-full)"}})]})]})]}),p.length>0?u.jsx(Yn.div,{layout:!0,style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"24px"},children:u.jsx(qs,{mode:"popLayout",children:p.map(f=>u.jsx(Jm,{project:f,animate:!0},f.slug||f.name))})}):u.jsxs("div",{className:"card-glass",style:{padding:"48px 24px",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:"14px"},children:[u.jsx("div",{style:{width:"48px",height:"48px",borderRadius:"50%",backgroundColor:"color-mix(in srgb, var(--color-accent) 15%, transparent)",display:"flex",alignItems:"center",justifyContent:"center"},children:u.jsx(qm,{size:24,color:"var(--color-accent)"})}),u.jsx("h3",{style:{fontSize:"18px",fontWeight:700},children:"No Projects Found"}),u.jsx("p",{style:{fontSize:"14px",color:"var(--text-muted)",maxWidth:"420px"},children:l||o!=="All"?'No projects match your active search filter. Try selecting "All" or clearing the search.':"There are no projects available in the feed right now."}),(l||o!=="All")&&u.jsx("button",{onClick:()=>{a("All"),c("")},className:"btn btn-outline",style:{fontSize:"12.5px",padding:"6px 16px",marginTop:"6px"},children:"Reset Filters"})]})]})}function M2(){return u.jsxs("div",{style:{maxWidth:"1080px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"40px"},children:[u.jsx(E2,{title:"What I've Been Building",subtitle:"Recent projects, experiments, and tools I'm actively building. Automatically synced from GitHub."}),u.jsxs("div",{className:"card-glass",style:{padding:"32px",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:"16px"},children:[u.jsx("h3",{style:{fontSize:"20px",fontWeight:700},children:"Want to explore more open-source repositories?"}),u.jsx("p",{style:{fontSize:"14.5px",color:"var(--text-muted)",maxWidth:"540px"},children:"Check out my personal GitHub profile for additional experimental AI agents, scripts, and automation prototypes."}),u.jsxs("a",{href:Me.socialLinks.github,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",style:{padding:"10px 24px"},children:[u.jsx(fi,{size:18}),u.jsx("span",{children:"View All Projects on GitHub"})]})]})]})}const hr=[{id:"post-0",title:"My Full Job Search Workflow",link:"https://dereckbearsong.substack.com/p/my-full-job-search-workflow",pubDate:"Thu, 27 Aug 2026 15:26:21 GMT",creator:"Dereck Bearsong",image:"https://substackcdn.com/image/fetch/$s_!EOpM!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd5939338-9885-44f5-a91e-d7e144bad215_1076x733.png",snippet:"How I process 2000 jobs overnight to find the best fit. A complete breakdown of autonomous filtering and pipeline execution.",readTime:"12 min read",tags:["Job Search","Automation"]},{id:"post-1",title:"How I do my Job Search in the Current Market",link:"https://dereckbearsong.substack.com/p/how-i-do-my-job-search-in-the-current",pubDate:"Fri, 13 Mar 2026 15:02:43 GMT",creator:"Dereck Bearsong",image:"https://substackcdn.com/image/fetch/$s_!R5ho!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F63472cfd-490f-4987-8d64-6c6d07d734dd_1248x832.png",snippet:"How do I survive in the day-to-day while searching for work in a tough market. Tactical routines and tooling.",readTime:"12 min read",tags:["Job Search","Career Strategy"]},{id:"post-2",title:"The Vilification of AI Art",link:"https://dereckbearsong.substack.com/p/the-vilification-of-ai-art",pubDate:"Thu, 05 Mar 2026 18:55:31 GMT",creator:"Dereck Bearsong",image:"https://substackcdn.com/image/fetch/$s_!2f_1!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F66d34a1d-e6f8-495c-89d3-647cff773e82_2280x3106.avif",snippet:"Examining cultural perception, creative ethics, and technological realities of generative AI art.",readTime:"11 min read",tags:["AI Art","Creative Tech"]},{id:"post-3",title:"Jira Intelligence Hub",link:"https://dereckbearsong.substack.com/p/jira-intelligence-hub",pubDate:"Fri, 05 Dec 2025 19:07:51 GMT",creator:"Dereck Bearsong",image:"https://substackcdn.com/image/fetch/$s_!obzv!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc79f02c1-87dd-4dbe-9eec-0bf1a46662d2_1220x1080.png",snippet:"Connecting Jira Cloud directly to AI models with Model Context Protocol (MCP) and custom agent tools.",readTime:"13 min read",tags:["Jira Cloud","AI & MCP"]},{id:"post-4",title:"The Job Search Automation workflow - V2",link:"https://dereckbearsong.substack.com/p/the-job-search-automation-workflow",pubDate:"Fri, 12 Sep 2025 17:38:45 GMT",creator:"Dereck Bearsong",image:"https://substackcdn.com/image/fetch/$s_!Jz2W!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc241c090-1fa4-4dc3-ae91-478799fb1b60_718x743.png",snippet:"Second iteration of the automated job hunting pipeline integrating n8n webhooks with multi-LLM scoring.",readTime:"5 min read",tags:["Job Search","Automation","n8n"]},{id:"post-5",title:"The Automated Job Search Step 1",link:"https://dereckbearsong.substack.com/p/the-automated-job-search-step-1",pubDate:"Wed, 20 Aug 2025 20:18:43 GMT",creator:"Dereck Bearsong",image:"https://substackcdn.com/image/fetch/$s_!VXDo!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fad4c4845-4e64-47bc-8557-8da29f9e43e9_2464x540.png",snippet:"Sourcing and processing the data: setting up scrapers, API endpoints, and clean data structures.",readTime:"13 min read",tags:["Job Search","Automation"]},{id:"post-6",title:"The Automated Job Search Prototype",link:"https://dereckbearsong.substack.com/p/the-automated-job-search-prototype",pubDate:"Mon, 18 Aug 2025 18:33:12 GMT",creator:"Dereck Bearsong",image:"https://substackcdn.com/image/fetch/$s_!2dX3!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3d3815c6-e7cc-4af7-b623-0b9d300e5664_1292x326.png",snippet:"Proof of concept architecture: building out an automation platform in n8n for filtering opportunities.",readTime:"8 min read",tags:["Job Search","Prototypes"]},{id:"post-7",title:"The start of my automated job search platform",link:"https://dereckbearsong.substack.com/p/the-start-of-my-automated-job-search",pubDate:"Tue, 12 Aug 2025 18:08:06 GMT",creator:"Dereck Bearsong",image:"https://substackcdn.com/image/fetch/$s_!Qwhg!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F467f369b-e283-461c-87b5-d5ec097a1aa6_2464x540.png",snippet:"Origins of the automated search project: defining goals, API requirements, and system design.",readTime:"5 min read",tags:["Job Search","System Design"]},{id:"post-8",title:"RSS feed to NotebookLM n8n automation",link:"https://dereckbearsong.substack.com/p/rss-feed-to-notebooklm-n8n-automation",pubDate:"Wed, 06 Aug 2025 13:01:13 GMT",creator:"Dereck Bearsong",image:"https://substackcdn.com/image/fetch/$s_!VCW6!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd5167365-fddf-4dff-8f34-90868aaf68c2_2052x1592.png",snippet:"Automating the ingestion of RSS feeds into Google NotebookLM using n8n workflows for research.",readTime:"5 min read",tags:["n8n","Workflows","Automation"]},{id:"post-9",title:"Beginnings",link:"https://dereckbearsong.substack.com/p/beginnings",pubDate:"Mon, 04 Aug 2025 14:03:04 GMT",creator:"Dereck Bearsong",image:"https://substackcdn.com/image/fetch/$s_!W9HN!,w_256,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F78cea8f8-e1af-48b6-a773-59a2b71b44f4_320x320.jpeg",snippet:"Welcome to The Wondrous Mind of Dereck Bearsong — exploring tech, AI, and continuous learning.",readTime:"3 min read",tags:["Substack","Introduction"]}];function L2(){const[e,t]=C.useState(hr),[n,r]=C.useState({title:"The Wondrous Mind of Dereck Bearsong",description:"Join me on a journey through my career, my hobbies, my education, and general tomfoolery.",link:"https://dereckbearsong.substack.com",image:"https://substackcdn.com/image/fetch/$s_!W9HN!,w_256,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F78cea8f8-e1af-48b6-a773-59a2b71b44f4_320x320.jpeg",totalPosts:10}),[i,s]=C.useState(!0),[o,a]=C.useState(!1),[l,c]=C.useState(""),[d,p]=C.useState("All"),[f,y]=C.useState(9),[v,x]=C.useState(!1),b=k=>{if(!k)return"Recent";try{const M=new Date(k);return isNaN(M.getTime())?k:M.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}catch{return k}},m=async(k=!1)=>{var E;k?a(!0):s(!0);const M="https://dereckbearsong.substack.com/feed";try{const F=await fetch("/api/substack-feed").catch(()=>null);if(F&&F.ok){const oe=await F.json();if(oe.success&&oe.data&&((E=oe.data.posts)==null?void 0:E.length)>0){t(oe.data.posts),oe.data.channel&&r(oe.data.channel),s(!1),a(!1);return}}const Te=`https://feed2json.org/convert?url=${encodeURIComponent(M)}`,Ae=await fetch(Te).catch(()=>null);if(Ae&&Ae.ok){const oe=await Ae.json();if(oe.items&&oe.items.length>0){const ir=oe.items.map((re,J)=>{var Qt;const T=hr[J%hr.length],R=re.content_html||re.content_text||"",D=R.match(/<img[^>]+src="([^">]+)"/),H=re.image||re.banner_image||(D==null?void 0:D[1])||T.image,X=(re.summary||R).replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim(),yn=R.replace(/<[^>]*>/g," ").split(/\s+/).filter(Boolean).length,lt=Math.max(1,Math.ceil(yn/220))+" min read",ct=re.title||T.title,ut=ct.toLowerCase().includes("job")?["Job Search","Automation"]:ct.toLowerCase().includes("jira")?["Jira Cloud","AI & MCP"]:ct.toLowerCase().includes("art")?["AI Art","Creative Tech"]:ct.toLowerCase().includes("n8n")?["n8n","Workflows"]:["Substack Article"];return{id:re.guid||`post-${J}`,title:ct,link:re.url||T.link,pubDate:re.date_published||T.pubDate,creator:((Qt=re.author)==null?void 0:Qt.name)||"Dereck Bearsong",image:H,snippet:X.length>160?X.slice(0,160)+"...":X,readTime:lt,tags:ut}});t(ir),r(re=>({...re,title:oe.title||re.title,description:oe.description||re.description,totalPosts:ir.length})),s(!1),a(!1);return}}t(hr)}catch(F){console.warn("Feed fetch notice:",F.message),t(hr)}finally{s(!1),a(!1)}};C.useEffect(()=>{m()},[]);const h=C.useMemo(()=>{const k=new Set(["All"]);return e.forEach(M=>{var E;(E=M.tags)==null||E.forEach(F=>k.add(F))}),Array.from(k)},[e]),g=C.useMemo(()=>e.filter(k=>{var F,Te;const M=k.title.toLowerCase().includes(l.toLowerCase())||k.snippet.toLowerCase().includes(l.toLowerCase())||((F=k.tags)==null?void 0:F.some(Ae=>Ae.toLowerCase().includes(l.toLowerCase()))),E=d==="All"||((Te=k.tags)==null?void 0:Te.includes(d));return M&&E}),[e,l,d]),w=C.useMemo(()=>g.slice(0,f),[g,f]),S=f<g.length,j=()=>{S&&y(k=>k+9)},_=()=>{navigator.clipboard.writeText("https://dereckbearsong.substack.com/feed"),x(!0),setTimeout(()=>x(!1),2200)};return u.jsxs("div",{className:"substack-widget-wrapper",style:{display:"flex",flexDirection:"column",gap:"32px"},children:[u.jsx("div",{className:"card-glass substack-header-card",style:{padding:"28px 32px",position:"relative",overflow:"hidden",border:"1px solid color-mix(in srgb, var(--color-accent) 25%, var(--border-muted))",background:"linear-gradient(145deg, color-mix(in srgb, var(--color-panel) 85%, transparent), color-mix(in srgb, var(--color-bg) 92%, transparent))"},children:u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"20px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"18px"},children:[u.jsxs("div",{style:{position:"relative"},children:[u.jsx("img",{src:n.image,alt:n.title,style:{width:"60px",height:"60px",borderRadius:"14px",objectFit:"cover",border:"2px solid var(--color-accent)",boxShadow:"0 6px 18px color-mix(in srgb, var(--color-accent) 25%, transparent)"}}),u.jsx("div",{style:{position:"absolute",bottom:"-3px",right:"-3px",backgroundColor:"#FF6719",color:"#fff",borderRadius:"50%",width:"20px",height:"20px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",fontWeight:900,boxShadow:"0 2px 4px rgba(0,0,0,0.3)",border:"2px solid var(--color-bg)"},title:"Substack Publication",children:"S"})]}),u.jsxs("div",{children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap",marginBottom:"2px"},children:[u.jsx("h2",{style:{fontSize:"20px",fontWeight:800,color:"var(--text-heading)",letterSpacing:"-0.02em"},children:n.title}),u.jsxs("span",{className:"badge-pill",style:{fontSize:"11px",padding:"2px 8px",backgroundColor:"color-mix(in srgb, #50fa7b 15%, transparent)",color:"#2bb352",border:"1px solid color-mix(in srgb, #50fa7b 30%, transparent)",display:"inline-flex",alignItems:"center",gap:"5px"},children:[u.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#50fa7b",display:"inline-block"}}),"Live Feed"]}),u.jsxs("span",{className:"mono",style:{fontSize:"11.5px",color:"var(--text-muted)"},children:[e.length," articles"]})]}),u.jsx("p",{style:{fontSize:"13.5px",color:"var(--text-muted)",maxWidth:"520px",lineHeight:"1.4"},children:n.description})]})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"},children:[u.jsxs("a",{href:`${n.link}/subscribe`,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",style:{padding:"9px 18px",fontSize:"13px",fontWeight:600,boxShadow:"0 4px 14px color-mix(in srgb, var(--color-accent) 25%, transparent)"},children:[u.jsx(Ka,{size:14}),u.jsx("span",{children:"Subscribe"}),u.jsx(Qd,{size:14})]}),u.jsxs("button",{onClick:_,className:"btn btn-secondary",style:{padding:"9px 13px",fontSize:"12.5px"},title:"Copy RSS Feed URL",children:[v?u.jsx(mS,{size:14,color:"#50fa7b"}):u.jsx(n2,{size:14,color:"var(--color-accent)"}),u.jsx("span",{children:v?"Copied":"RSS"})]}),u.jsx("button",{onClick:()=>m(!0),className:"btn btn-secondary",style:{padding:"9px 11px"},title:"Refresh Feed",disabled:o,children:u.jsx(e2,{size:14,className:o?"spin-anim":""})})]})]})}),u.jsx("div",{className:"card-glass",style:{padding:"14px 20px",display:"flex",flexDirection:"column",gap:"12px"},children:u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"16px",flexWrap:"wrap"},children:[u.jsxs("div",{style:{position:"relative",flex:"1 1 260px",minWidth:"220px"},children:[u.jsx(Km,{size:15,color:"var(--text-muted)",style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",pointerEvents:"none"}}),u.jsx("input",{type:"text",placeholder:"Filter by title, topic, or keyword...",value:l,onChange:k=>{c(k.target.value),y(9)},className:"input-field",style:{paddingLeft:"36px",paddingRight:l?"32px":"12px",fontSize:"13px",height:"38px",width:"100%"}}),l&&u.jsx("button",{onClick:()=>c(""),style:{position:"absolute",right:"10px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",color:"var(--text-muted)",cursor:"pointer",fontSize:"12px",padding:"2px 6px"},children:"✕"})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",flexWrap:"wrap"},children:[u.jsxs("span",{style:{fontSize:"11.5px",color:"var(--text-muted)",display:"flex",alignItems:"center",gap:"4px"},children:[u.jsx(NS,{size:12,color:"var(--color-accent)"}),"Topic:"]}),h.map(k=>u.jsx("button",{onClick:()=>{p(k),y(9)},style:{fontSize:"11.5px",padding:"3px 10px",borderRadius:"var(--radius-full)",border:d===k?"1px solid var(--color-accent)":"1px solid var(--border-subtle)",background:d===k?"color-mix(in srgb, var(--color-accent) 20%, transparent)":"var(--bg-pill)",color:d===k?"var(--color-accent)":"var(--text-body)",fontWeight:d===k?600:400,cursor:"pointer",transition:"all 0.2s ease"},children:k},k))]})]})}),i?u.jsx("div",{className:"substack-image-gallery",children:[...Array(9)].map((k,M)=>u.jsx("div",{className:"gallery-image-frame skeleton-shimmer",style:{aspectRatio:"16 / 11",background:"#ffffff",padding:"3px",borderRadius:"0px"},children:u.jsx("div",{style:{width:"100%",height:"100%",background:"var(--border-subtle)",borderRadius:"0px"}})},M))}):w.length===0?u.jsxs("div",{className:"card-glass",style:{padding:"50px 20px",textAlign:"center"},children:[u.jsx("p",{style:{color:"var(--text-muted)",fontSize:"14px"},children:"No posts matching your search criteria."}),u.jsx("button",{onClick:()=>{c(""),p("All")},className:"btn btn-secondary",style:{marginTop:"12px",padding:"6px 16px",fontSize:"12px"},children:"Reset Filters"})]}):u.jsx("div",{className:"substack-image-gallery",children:u.jsx(qs,{children:w.map((k,M)=>{var E;return u.jsxs(Yn.a,{href:k.link,target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.25,delay:Math.min(M*.03,.25)},className:"gallery-image-frame",title:`${k.title} — Click to read on Substack`,children:[u.jsx("img",{src:k.image,alt:k.title,loading:"lazy",className:"gallery-actual-img",onError:F=>{F.currentTarget.src=n.image}}),u.jsxs("div",{className:"gallery-hover-overlay",children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"6px"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",color:"var(--color-accent)",fontSize:"11px",fontFamily:"var(--font-mono)"},children:[u.jsx($m,{size:11}),u.jsx("span",{children:b(k.pubDate)})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",color:"rgba(255,255,255,0.7)",fontSize:"10.5px",fontFamily:"var(--font-mono)"},children:[u.jsx(jS,{size:11}),u.jsx("span",{children:k.readTime})]})]}),u.jsxs("div",{children:[u.jsx("h3",{style:{fontSize:"13.5px",fontWeight:700,color:"#ffffff",lineHeight:"1.3",marginBottom:"6px",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:k.title}),u.jsx("p",{style:{fontSize:"11px",color:"rgba(255,255,255,0.8)",lineHeight:"1.4",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"},children:k.snippet})]}),u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",borderTop:"1px solid rgba(255,255,255,0.15)",paddingTop:"6px"},children:[u.jsx("span",{style:{fontSize:"10px",color:"var(--color-accent)",background:"rgba(255, 155, 81, 0.18)",padding:"1px 6px",borderRadius:"0px",maxWidth:"90px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:((E=k.tags)==null?void 0:E[0])||"Article"}),u.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"3px",color:"#ffffff",fontSize:"10.5px",fontWeight:600},children:["Read",u.jsx(Qd,{size:12,color:"var(--color-accent)"})]})]})]})]},k.id||M)})})}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",marginTop:"4px"},children:[u.jsxs("button",{onClick:j,disabled:!S,className:`btn ${S?"btn-primary":"btn-ghost"}`,style:{padding:"10px 28px",fontSize:"13.5px",fontWeight:600,opacity:S?1:.45,cursor:S?"pointer":"not-allowed",border:S?"none":"1px solid var(--border-muted)",boxShadow:S?"0 4px 16px color-mix(in srgb, var(--color-accent) 25%, transparent)":"none"},children:[u.jsx("span",{children:S?`Show More (${g.length-f} remaining)`:"All Posts Loaded"}),S&&u.jsx(xS,{size:15})]}),u.jsxs("span",{className:"mono",style:{fontSize:"11.5px",color:"var(--text-muted)"},children:["Showing ",w.length," of ",g.length," posts"]})]}),u.jsxs("div",{className:"card-glass",style:{padding:"36px 28px",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:"16px",border:"1px solid color-mix(in srgb, var(--color-accent) 30%, var(--border-muted))",background:"linear-gradient(180deg, color-mix(in srgb, var(--color-panel) 60%, transparent), color-mix(in srgb, var(--color-bg) 80%, transparent))"},children:[u.jsx("div",{style:{width:"44px",height:"44px",borderRadius:"50%",background:"color-mix(in srgb, var(--color-accent) 20%, transparent)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--color-accent)"},children:u.jsx(hi,{size:22})}),u.jsx("h3",{style:{fontSize:"22px",fontWeight:800,color:"var(--text-heading)",letterSpacing:"-0.02em"},children:"Subscribe to The Wondrous Mind of Dereck Bearsong"}),u.jsx("p",{style:{fontSize:"14px",color:"var(--text-muted)",maxWidth:"480px",lineHeight:"1.5"},children:"Get newly published breakdowns on AI engineering, MCP systems, and support workflows delivered directly to your inbox."}),u.jsxs("a",{href:`${n.link}/subscribe`,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",style:{padding:"10px 24px",fontSize:"13.5px",fontWeight:600},children:[u.jsx(Ka,{size:15}),u.jsx("span",{children:"Subscribe on Substack"}),u.jsx(ri,{size:14})]})]})]})}function R2(){return u.jsxs("div",{style:{maxWidth:"1240px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"32px"},children:[u.jsxs("div",{className:"card-glass",style:{padding:"36px 32px",borderLeft:"4px solid var(--color-accent)",background:"linear-gradient(135deg, color-mix(in srgb, var(--color-panel) 80%, transparent), color-mix(in srgb, var(--color-bg) 95%, transparent))"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"10px"},children:[u.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"10px",background:"color-mix(in srgb, var(--color-accent) 15%, transparent)",display:"flex",alignItems:"center",justifyContent:"center"},children:u.jsx(Ga,{size:22,color:"var(--color-accent)"})}),u.jsx("h1",{style:{fontSize:"30px",fontWeight:800,letterSpacing:"-0.02em"},children:"Blog & Publications"})]}),u.jsx("p",{style:{fontSize:"15.5px",color:"var(--text-heading)",lineHeight:"1.6",maxWidth:"800px"},children:"Thoughts, technical architecture breakdowns, and practical insights on AI engineering, MCP integration, automated job search workflows, and support operations."})]}),u.jsx(L2,{})]})}function D2(){const[e,t]=C.useState({name:"",email:"",subject:"",message:""}),[n,r]=C.useState({submitting:!1,success:!1,error:null}),[i,s]=C.useState(!1),o=l=>{t({...e,[l.target.name]:l.target.value})},a=async l=>{l.preventDefault(),r({submitting:!0,success:!1,error:null});try{const c=Me.formsubmitToken||Me.email,d=await fetch(`https://formsubmit.co/ajax/${c}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:e.name,email:e.email,_subject:e.subject||`New Contact Message from ${e.name}`,message:e.message})}),p=await d.json();d.ok&&(p.success==="true"||p.success===!0)?(r({submitting:!1,success:!0,error:null}),t({name:"",email:"",subject:"",message:""})):r({submitting:!1,success:!1,error:p.message||"Failed to submit message. Please try again."})}catch(c){console.error("Contact submission error:",c),r({submitting:!1,success:!1,error:"Network error submitting message. Please try again."})}};return u.jsxs("div",{style:{maxWidth:"960px",margin:"0 auto",display:"flex",flexDirection:"column",gap:"40px"},children:[u.jsxs("div",{className:"card-glass",style:{padding:"40px 36px",borderLeft:"4px solid var(--color-accent)"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"12px"},children:[u.jsx(Ka,{size:26,color:"var(--color-accent)"}),u.jsx("h1",{style:{fontSize:"32px",fontWeight:800},children:"Contact Me"})]}),u.jsx("p",{style:{fontSize:"16px",color:"var(--text-heading)",lineHeight:"1.6"},children:"Interested in discussing AI engineering, support systems optimization, or potential collaborations? Let's connect."})]}),u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(340px, 1fr))",gap:"28px",alignItems:"start"},children:[u.jsxs("div",{className:"card-glass",style:{padding:"36px"},children:[u.jsx("h2",{style:{fontSize:"20px",fontWeight:700,marginBottom:"16px",color:"var(--text-heading)"},children:"Get in Touch"}),u.jsx("p",{style:{fontSize:"14.5px",color:"var(--text-body)",lineHeight:"1.65",marginBottom:"28px"},children:"Feel free to reach out if you'd like to collaborate, discuss an opportunity, or have any technical questions."}),u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[u.jsxs("div",{style:{display:"flex",gap:"14px",alignItems:"flex-start"},children:[u.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"8px",backgroundColor:"color-mix(in srgb, var(--color-accent) 20%, transparent)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:u.jsx(KS,{size:18,color:"var(--color-accent)"})}),u.jsxs("div",{children:[u.jsx("p",{className:"mono",style:{fontSize:"11px",textTransform:"uppercase",color:"var(--text-muted)"},children:"Location"}),u.jsxs("p",{style:{color:"var(--text-heading)",fontWeight:600,fontSize:"14.5px",marginTop:"2px"},children:[Me.location," ",u.jsx("span",{style:{fontSize:"12px",color:"#50fa7b",fontWeight:500},children:"(Willing to relocate)"})]})]})]}),u.jsxs("div",{style:{borderTop:"1px solid var(--border-muted)",paddingTop:"20px",marginTop:"8px"},children:[u.jsx("p",{className:"mono",style:{fontSize:"11px",textTransform:"uppercase",color:"var(--text-muted)",marginBottom:"12px"},children:"Social Profiles"}),u.jsxs("div",{style:{display:"flex",gap:"12px"},children:[u.jsxs("a",{href:Me.socialLinks.linkedin,target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",style:{flex:1,fontSize:"13px"},children:[u.jsx(Gm,{size:15,color:"var(--color-accent)"}),u.jsx("span",{children:"LinkedIn"})]}),u.jsxs("a",{href:Me.socialLinks.github,target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",style:{flex:1,fontSize:"13px"},children:[u.jsx(fi,{size:15,color:"var(--color-accent)"}),u.jsx("span",{children:"GitHub"})]})]})]})]})]}),u.jsxs("div",{className:"card-glass",style:{padding:"36px"},children:[u.jsx("h2",{style:{fontSize:"20px",fontWeight:700,marginBottom:"20px",color:"var(--text-heading)"},children:"Send a Message"}),n.success?u.jsxs("div",{style:{backgroundColor:"rgba(80, 250, 123, 0.1)",border:"1px solid rgba(80, 250, 123, 0.4)",borderRadius:"var(--radius-md)",padding:"24px",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:"12px"},children:[u.jsx(bS,{size:36,color:"#50fa7b"}),u.jsx("h3",{style:{fontSize:"18px",color:"#ffffff"},children:"Message Dispatched!"}),u.jsx("p",{style:{fontSize:"14px",color:"#d8fad8",lineHeight:"1.5"},children:"Thank you for reaching out. I've received your note and will reply promptly."}),u.jsx("button",{onClick:()=>r({submitting:!1,success:!1,error:null}),className:"btn btn-outline",style:{marginTop:"8px",fontSize:"12px"},children:"Send Another Message"})]}):u.jsxs("form",{onSubmit:a,style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.error&&u.jsxs("div",{style:{backgroundColor:"color-mix(in srgb, var(--color-accent) 20%, transparent)",border:"1px solid var(--color-accent)",padding:"10px 14px",borderRadius:"6px",display:"flex",alignItems:"center",gap:"8px",color:"var(--text-heading)",fontSize:"13px"},children:[u.jsx(SS,{size:16}),u.jsx("span",{children:n.error})]}),u.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[u.jsx("label",{className:"form-label",htmlFor:"contact-name",children:"Name *"}),u.jsx("input",{type:"text",id:"contact-name",name:"name",required:!0,placeholder:"Your name",value:e.name,onChange:o,className:"form-control"})]}),u.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[u.jsx("label",{className:"form-label",htmlFor:"contact-email",children:"Email *"}),u.jsx("input",{type:"email",id:"contact-email",name:"email",required:!0,placeholder:"your.email@example.com",value:e.email,onChange:o,className:"form-control"})]}),u.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[u.jsx("label",{className:"form-label",htmlFor:"contact-subject",children:"Subject"}),u.jsx("input",{type:"text",id:"contact-subject",name:"subject",placeholder:"Subject or project name",value:e.subject,onChange:o,className:"form-control"})]}),u.jsxs("div",{className:"form-group",style:{marginBottom:0},children:[u.jsx("label",{className:"form-label",htmlFor:"contact-message",children:"Message *"}),u.jsx("textarea",{id:"contact-message",name:"message",required:!0,rows:4,placeholder:"How can I help you?",value:e.message,onChange:o,className:"form-control",style:{resize:"vertical"}})]}),u.jsxs("button",{type:"submit",disabled:n.submitting,className:"btn btn-primary",style:{width:"100%",padding:"12px",marginTop:"6px",fontSize:"14px"},children:[u.jsx(a2,{size:16}),u.jsx("span",{children:n.submitting?"Sending...":"Send Message"})]})]})]})]})]})}function I2(){const e=()=>{const d=window.location.pathname;return Et.find(f=>f.path===d)||Et[0]},[t,n]=C.useState(e),[r,i]=C.useState(0),[s,o]=C.useState(!1);C.useEffect(()=>{const d=()=>{o(window.innerWidth<=840)};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),C.useEffect(()=>{const d=()=>{const p=window.location.pathname,f=Et.find(y=>y.path===p)||Et[0];i(f.index>t.index?1:-1),n(f)};return window.addEventListener("popstate",d),()=>window.removeEventListener("popstate",d)},[t]);const a=d=>{if(d.id===t.id)return;const p=d.index>t.index?1:-1;i(p),n(d),window.history.pushState(null,"",d.path),window.scrollTo({top:0,behavior:"smooth"})},l=d=>{const p=Et.find(f=>f.id===d);p&&a(p)},c=()=>{switch(t.id){case"home":return u.jsx(Yd,{onNavigate:l});case"about":return u.jsx(A2,{});case"portfolio":return u.jsx(M2,{});case"blog":return u.jsx(R2,{});case"contact":return u.jsx(D2,{});default:return u.jsx(Yd,{onNavigate:l})}};return u.jsxs("div",{className:"app-container",children:[u.jsx("div",{className:"ambient-bg"}),u.jsx(x2,{}),u.jsx(v2,{currentTab:t,onSelectTab:a,isMobile:s}),u.jsx("main",{className:"main-content",children:s?c():u.jsx(S2,{pageKey:t.id,direction:r,children:c()})}),u.jsx(k2,{})]})}Fo.createRoot(document.getElementById("root")).render(u.jsx(fg.StrictMode,{children:u.jsx(I2,{})}));
