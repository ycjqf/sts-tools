const _d=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};_d();var Se={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Or=Symbol.for("react.element"),Ed=Symbol.for("react.portal"),xd=Symbol.for("react.fragment"),Dd=Symbol.for("react.strict_mode"),Td=Symbol.for("react.profiler"),Id=Symbol.for("react.provider"),Nd=Symbol.for("react.context"),$d=Symbol.for("react.forward_ref"),Cd=Symbol.for("react.suspense"),Od=Symbol.for("react.memo"),Pd=Symbol.for("react.lazy"),nu=Symbol.iterator;function Fd(e){return e===null||typeof e!="object"?null:(e=nu&&e[nu]||e["@@iterator"],typeof e=="function"?e:null)}var Is={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ns=Object.assign,$s={};function $n(e,t,n){this.props=e,this.context=t,this.refs=$s,this.updater=n||Is}$n.prototype.isReactComponent={};$n.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cs(){}Cs.prototype=$n.prototype;function ra(e,t,n){this.props=e,this.context=t,this.refs=$s,this.updater=n||Is}var ia=ra.prototype=new Cs;ia.constructor=ra;Ns(ia,$n.prototype);ia.isPureReactComponent=!0;var ru=Array.isArray,Os=Object.prototype.hasOwnProperty,oa={current:null},Ps={key:!0,ref:!0,__self:!0,__source:!0};function Fs(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Os.call(t,r)&&!Ps.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Or,type:e,key:o,ref:l,props:i,_owner:oa.current}}function Ld(e,t){return{$$typeof:Or,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function la(e){return typeof e=="object"&&e!==null&&e.$$typeof===Or}function Ad(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var iu=/\/+/g;function _o(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ad(""+e.key):t.toString(36)}function oi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Or:case Ed:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+_o(l,0):r,ru(i)?(n="",e!=null&&(n=e.replace(iu,"$&/")+"/"),oi(i,t,n,"",function(c){return c})):i!=null&&(la(i)&&(i=Ld(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(iu,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",ru(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+_o(o,a);l+=oi(o,t,n,u,i)}else if(u=Fd(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+_o(o,a++),l+=oi(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Br(e,t,n){if(e==null)return e;var r=[],i=0;return oi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Rd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},li={transition:null},Md={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:li,ReactCurrentOwner:oa};R.Children={map:Br,forEach:function(e,t,n){Br(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Br(e,function(){t++}),t},toArray:function(e){return Br(e,function(t){return t})||[]},only:function(e){if(!la(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=$n;R.Fragment=xd;R.Profiler=Td;R.PureComponent=ra;R.StrictMode=Dd;R.Suspense=Cd;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Md;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ns({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=oa.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Os.call(t,u)&&!Ps.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Or,type:e.type,key:i,ref:o,props:r,_owner:l}};R.createContext=function(e){return e={$$typeof:Nd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Id,_context:e},e.Consumer=e};R.createElement=Fs;R.createFactory=function(e){var t=Fs.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:$d,render:e}};R.isValidElement=la;R.lazy=function(e){return{$$typeof:Pd,_payload:{_status:-1,_result:e},_init:Rd}};R.memo=function(e,t){return{$$typeof:Od,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=li.transition;li.transition={};try{e()}finally{li.transition=t}};R.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};R.useCallback=function(e,t){return ge.current.useCallback(e,t)};R.useContext=function(e){return ge.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};R.useEffect=function(e,t){return ge.current.useEffect(e,t)};R.useId=function(){return ge.current.useId()};R.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return ge.current.useMemo(e,t)};R.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};R.useRef=function(e){return ge.current.useRef(e)};R.useState=function(e){return ge.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return ge.current.useTransition()};R.version="18.2.0";Se.exports=R;var zd=Se.exports,nl={},Ls={exports:{}},Ne={},As={exports:{}},Rs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(D,P){var L=D.length;D.push(P);e:for(;0<L;){var U=L-1>>>1,X=D[U];if(0<i(X,P))D[U]=P,D[L]=X,L=U;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var P=D[0],L=D.pop();if(L!==P){D[0]=L;e:for(var U=0,X=D.length,dt=X>>>1;U<dt;){var Lt=2*(U+1)-1,wo=D[Lt],At=Lt+1,jr=D[At];if(0>i(wo,L))At<X&&0>i(jr,wo)?(D[U]=jr,D[At]=L,U=At):(D[U]=wo,D[Lt]=L,U=Lt);else if(At<X&&0>i(jr,L))D[U]=jr,D[At]=L,U=At;else break e}}return P}function i(D,P){var L=D.sortIndex-P.sortIndex;return L!==0?L:D.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],c=[],g=1,h=null,p=3,S=!1,v=!1,k=!1,_=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(D){for(var P=n(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=D)r(c),P.sortIndex=P.expirationTime,t(u,P);else break;P=n(c)}}function y(D){if(k=!1,d(D),!v)if(n(u)!==null)v=!0,ft(x);else{var P=n(c);P!==null&&bt(y,P.startTime-D)}}function x(D,P){v=!1,k&&(k=!1,f(C),C=-1),S=!0;var L=p;try{for(d(P),h=n(u);h!==null&&(!(h.expirationTime>P)||D&&!te());){var U=h.callback;if(typeof U=="function"){h.callback=null,p=h.priorityLevel;var X=U(h.expirationTime<=P);P=e.unstable_now(),typeof X=="function"?h.callback=X:h===n(u)&&r(u),d(P)}else r(u);h=n(u)}if(h!==null)var dt=!0;else{var Lt=n(c);Lt!==null&&bt(y,Lt.startTime-P),dt=!1}return dt}finally{h=null,p=L,S=!1}}var N=!1,I=null,C=-1,G=5,F=-1;function te(){return!(e.unstable_now()-F<G)}function ze(){if(I!==null){var D=e.unstable_now();F=D;var P=!0;try{P=I(!0,D)}finally{P?be():(N=!1,I=null)}}else N=!1}var be;if(typeof s=="function")be=function(){s(ze)};else if(typeof MessageChannel!="undefined"){var zn=new MessageChannel,et=zn.port2;zn.port1.onmessage=ze,be=function(){et.postMessage(null)}}else be=function(){_(ze,0)};function ft(D){I=D,N||(N=!0,be())}function bt(D,P){C=_(function(){D(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(D){D.callback=null},e.unstable_continueExecution=function(){v||S||(v=!0,ft(x))},e.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<D?Math.floor(1e3/D):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(D){switch(p){case 1:case 2:case 3:var P=3;break;default:P=p}var L=p;p=P;try{return D()}finally{p=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(D,P){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var L=p;p=D;try{return P()}finally{p=L}},e.unstable_scheduleCallback=function(D,P,L){var U=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?U+L:U):L=U,D){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=L+X,D={id:g++,callback:P,priorityLevel:D,startTime:L,expirationTime:X,sortIndex:-1},L>U?(D.sortIndex=L,t(c,D),n(u)===null&&D===n(c)&&(k?(f(C),C=-1):k=!0,bt(y,L-U))):(D.sortIndex=X,t(u,D),v||S||(v=!0,ft(x))),D},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(D){var P=p;return function(){var L=p;p=P;try{return D.apply(this,arguments)}finally{p=L}}}})(Rs);As.exports=Rs;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ms=Se.exports,Ie=As.exports;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zs=new Set,cr={};function Kt(e,t){wn(e,t),wn(e+"Capture",t)}function wn(e,t){for(cr[e]=t,e=0;e<t.length;e++)zs.add(t[e])}var lt=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),rl=Object.prototype.hasOwnProperty,Ud=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ou={},lu={};function jd(e){return rl.call(lu,e)?!0:rl.call(ou,e)?!1:Ud.test(e)?lu[e]=!0:(ou[e]=!0,!1)}function Bd(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Vd(e,t,n,r){if(t===null||typeof t=="undefined"||Bd(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){se[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];se[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){se[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){se[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){se[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){se[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){se[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){se[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){se[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var aa=/[\-:]([a-z])/g;function ua(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(aa,ua);se[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(aa,ua);se[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(aa,ua);se[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){se[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});se.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){se[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function sa(e,t,n,r){var i=se.hasOwnProperty(t)?se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Vd(t,n,i,r)&&(n=null),r||i===null?jd(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ct=Ms.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vr=Symbol.for("react.element"),tn=Symbol.for("react.portal"),nn=Symbol.for("react.fragment"),ca=Symbol.for("react.strict_mode"),il=Symbol.for("react.profiler"),Us=Symbol.for("react.provider"),js=Symbol.for("react.context"),fa=Symbol.for("react.forward_ref"),ol=Symbol.for("react.suspense"),ll=Symbol.for("react.suspense_list"),da=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),Bs=Symbol.for("react.offscreen"),au=Symbol.iterator;function Un(e){return e===null||typeof e!="object"?null:(e=au&&e[au]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Eo;function Yn(e){if(Eo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Eo=t&&t[1]||""}return`
`+Eo+e}var xo=!1;function Do(e,t){if(!e||xo)return"";xo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{xo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Yn(e):""}function Gd(e){switch(e.tag){case 5:return Yn(e.type);case 16:return Yn("Lazy");case 13:return Yn("Suspense");case 19:return Yn("SuspenseList");case 0:case 2:case 15:return e=Do(e.type,!1),e;case 11:return e=Do(e.type.render,!1),e;case 1:return e=Do(e.type,!0),e;default:return""}}function al(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nn:return"Fragment";case tn:return"Portal";case il:return"Profiler";case ca:return"StrictMode";case ol:return"Suspense";case ll:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case js:return(e.displayName||"Context")+".Consumer";case Us:return(e._context.displayName||"Context")+".Provider";case fa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case da:return t=e.displayName||null,t!==null?t:al(e.type)||"Memo";case mt:t=e._payload,e=e._init;try{return al(e(t))}catch{}}return null}function qd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return al(t);case 8:return t===ca?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Qd(e){var t=Vs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gr(e){e._valueTracker||(e._valueTracker=Qd(e))}function Gs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Vs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ei(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function ul(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function uu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Nt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function qs(e,t){t=t.checked,t!=null&&sa(e,"checked",t,!1)}function sl(e,t){qs(e,t);var n=Nt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?cl(e,t.type,n):t.hasOwnProperty("defaultValue")&&cl(e,t.type,Nt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function su(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function cl(e,t,n){(t!=="number"||Ei(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jn=Array.isArray;function hn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Nt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function fl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(Jn(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nt(n)}}function Qs(e,t){var n=Nt(t.value),r=Nt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function fu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Hs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Hs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qr,Ws=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qr=qr||document.createElement("div"),qr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var er={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hd=["Webkit","ms","Moz","O"];Object.keys(er).forEach(function(e){Hd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),er[t]=er[e]})});function Ys(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||er.hasOwnProperty(e)&&er[e]?(""+t).trim():t+"px"}function Js(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ys(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Wd=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pl(e,t){if(t){if(Wd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function ml(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hl=null;function pa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gl=null,gn=null,vn=null;function du(e){if(e=Lr(e)){if(typeof gl!="function")throw Error(E(280));var t=e.stateNode;t&&(t=to(t),gl(e.stateNode,e.type,t))}}function Xs(e){gn?vn?vn.push(e):vn=[e]:gn=e}function Ks(){if(gn){var e=gn,t=vn;if(vn=gn=null,du(e),t)for(e=0;e<t.length;e++)du(t[e])}}function Zs(e,t){return e(t)}function bs(){}var To=!1;function ec(e,t,n){if(To)return e(t,n);To=!0;try{return Zs(e,t,n)}finally{To=!1,(gn!==null||vn!==null)&&(bs(),Ks())}}function dr(e,t){var n=e.stateNode;if(n===null)return null;var r=to(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var vl=!1;if(lt)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){vl=!0}}),window.addEventListener("test",jn,jn),window.removeEventListener("test",jn,jn)}catch{vl=!1}function Yd(e,t,n,r,i,o,l,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var tr=!1,xi=null,Di=!1,yl=null,Jd={onError:function(e){tr=!0,xi=e}};function Xd(e,t,n,r,i,o,l,a,u){tr=!1,xi=null,Yd.apply(Jd,arguments)}function Kd(e,t,n,r,i,o,l,a,u){if(Xd.apply(this,arguments),tr){if(tr){var c=xi;tr=!1,xi=null}else throw Error(E(198));Di||(Di=!0,yl=c)}}function Zt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function tc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pu(e){if(Zt(e)!==e)throw Error(E(188))}function Zd(e){var t=e.alternate;if(!t){if(t=Zt(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return pu(i),e;if(o===r)return pu(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function nc(e){return e=Zd(e),e!==null?rc(e):null}function rc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=rc(e);if(t!==null)return t;e=e.sibling}return null}var ic=Ie.unstable_scheduleCallback,mu=Ie.unstable_cancelCallback,bd=Ie.unstable_shouldYield,ep=Ie.unstable_requestPaint,J=Ie.unstable_now,tp=Ie.unstable_getCurrentPriorityLevel,ma=Ie.unstable_ImmediatePriority,oc=Ie.unstable_UserBlockingPriority,Ti=Ie.unstable_NormalPriority,np=Ie.unstable_LowPriority,lc=Ie.unstable_IdlePriority,Ki=null,Ke=null;function rp(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Ki,e,void 0,(e.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:lp,ip=Math.log,op=Math.LN2;function lp(e){return e>>>=0,e===0?32:31-(ip(e)/op|0)|0}var Qr=64,Hr=4194304;function Xn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ii(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Xn(a):(o&=l,o!==0&&(r=Xn(o)))}else l=n&~i,l!==0?r=Xn(l):o!==0&&(r=Xn(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Qe(t),i=1<<n,r|=e[n],t&=~i;return r}function ap(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function up(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Qe(o),a=1<<l,u=i[l];u===-1?((a&n)===0||(a&r)!==0)&&(i[l]=ap(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function Sl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ac(){var e=Qr;return Qr<<=1,(Qr&4194240)===0&&(Qr=64),e}function Io(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Qe(t),e[t]=n}function sp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Qe(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function ha(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var z=0;function uc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var sc,ga,cc,fc,dc,kl=!1,Wr=[],kt=null,wt=null,_t=null,pr=new Map,mr=new Map,gt=[],cp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hu(e,t){switch(e){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":wt=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mr.delete(t.pointerId)}}function Bn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Lr(t),t!==null&&ga(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function fp(e,t,n,r,i){switch(t){case"focusin":return kt=Bn(kt,e,t,n,r,i),!0;case"dragenter":return wt=Bn(wt,e,t,n,r,i),!0;case"mouseover":return _t=Bn(_t,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return pr.set(o,Bn(pr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,mr.set(o,Bn(mr.get(o)||null,e,t,n,r,i)),!0}return!1}function pc(e){var t=zt(e.target);if(t!==null){var n=Zt(t);if(n!==null){if(t=n.tag,t===13){if(t=tc(n),t!==null){e.blockedOn=t,dc(e.priority,function(){cc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ai(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);hl=r,n.target.dispatchEvent(r),hl=null}else return t=Lr(n),t!==null&&ga(t),e.blockedOn=n,!1;t.shift()}return!0}function gu(e,t,n){ai(e)&&n.delete(t)}function dp(){kl=!1,kt!==null&&ai(kt)&&(kt=null),wt!==null&&ai(wt)&&(wt=null),_t!==null&&ai(_t)&&(_t=null),pr.forEach(gu),mr.forEach(gu)}function Vn(e,t){e.blockedOn===t&&(e.blockedOn=null,kl||(kl=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,dp)))}function hr(e){function t(i){return Vn(i,e)}if(0<Wr.length){Vn(Wr[0],e);for(var n=1;n<Wr.length;n++){var r=Wr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(kt!==null&&Vn(kt,e),wt!==null&&Vn(wt,e),_t!==null&&Vn(_t,e),pr.forEach(t),mr.forEach(t),n=0;n<gt.length;n++)r=gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)pc(n),n.blockedOn===null&&gt.shift()}var yn=ct.ReactCurrentBatchConfig,Ni=!0;function pp(e,t,n,r){var i=z,o=yn.transition;yn.transition=null;try{z=1,va(e,t,n,r)}finally{z=i,yn.transition=o}}function mp(e,t,n,r){var i=z,o=yn.transition;yn.transition=null;try{z=4,va(e,t,n,r)}finally{z=i,yn.transition=o}}function va(e,t,n,r){if(Ni){var i=wl(e,t,n,r);if(i===null)Mo(e,t,r,$i,n),hu(e,r);else if(fp(i,e,t,n,r))r.stopPropagation();else if(hu(e,r),t&4&&-1<cp.indexOf(e)){for(;i!==null;){var o=Lr(i);if(o!==null&&sc(o),o=wl(e,t,n,r),o===null&&Mo(e,t,r,$i,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Mo(e,t,r,null,n)}}var $i=null;function wl(e,t,n,r){if($i=null,e=pa(r),e=zt(e),e!==null)if(t=Zt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=tc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $i=e,null}function mc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tp()){case ma:return 1;case oc:return 4;case Ti:case np:return 16;case lc:return 536870912;default:return 16}default:return 16}}var yt=null,ya=null,ui=null;function hc(){if(ui)return ui;var e,t=ya,n=t.length,r,i="value"in yt?yt.value:yt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return ui=i.slice(e,1<r?1-r:void 0)}function si(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yr(){return!0}function vu(){return!1}function $e(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Yr:vu,this.isPropagationStopped=vu,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yr)},persist:function(){},isPersistent:Yr}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sa=$e(Cn),Fr=W({},Cn,{view:0,detail:0}),hp=$e(Fr),No,$o,Gn,Zi=W({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ka,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gn&&(Gn&&e.type==="mousemove"?(No=e.screenX-Gn.screenX,$o=e.screenY-Gn.screenY):$o=No=0,Gn=e),No)},movementY:function(e){return"movementY"in e?e.movementY:$o}}),yu=$e(Zi),gp=W({},Zi,{dataTransfer:0}),vp=$e(gp),yp=W({},Fr,{relatedTarget:0}),Co=$e(yp),Sp=W({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0}),kp=$e(Sp),wp=W({},Cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_p=$e(wp),Ep=W({},Cn,{data:0}),Su=$e(Ep),xp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ip(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tp[e])?!!t[e]:!1}function ka(){return Ip}var Np=W({},Fr,{key:function(e){if(e.key){var t=xp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ka,charCode:function(e){return e.type==="keypress"?si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$p=$e(Np),Cp=W({},Zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ku=$e(Cp),Op=W({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ka}),Pp=$e(Op),Fp=W({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lp=$e(Fp),Ap=W({},Zi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rp=$e(Ap),Mp=[9,13,27,32],wa=lt&&"CompositionEvent"in window,nr=null;lt&&"documentMode"in document&&(nr=document.documentMode);var zp=lt&&"TextEvent"in window&&!nr,gc=lt&&(!wa||nr&&8<nr&&11>=nr),wu=String.fromCharCode(32),_u=!1;function vc(e,t){switch(e){case"keyup":return Mp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rn=!1;function Up(e,t){switch(e){case"compositionend":return yc(t);case"keypress":return t.which!==32?null:(_u=!0,wu);case"textInput":return e=t.data,e===wu&&_u?null:e;default:return null}}function jp(e,t){if(rn)return e==="compositionend"||!wa&&vc(e,t)?(e=hc(),ui=ya=yt=null,rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gc&&t.locale!=="ko"?null:t.data;default:return null}}var Bp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bp[e.type]:t==="textarea"}function Sc(e,t,n,r){Xs(r),t=Ci(t,"onChange"),0<t.length&&(n=new Sa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var rr=null,gr=null;function Vp(e){Cc(e,0)}function bi(e){var t=an(e);if(Gs(t))return e}function Gp(e,t){if(e==="change")return t}var kc=!1;if(lt){var Oo;if(lt){var Po="oninput"in document;if(!Po){var xu=document.createElement("div");xu.setAttribute("oninput","return;"),Po=typeof xu.oninput=="function"}Oo=Po}else Oo=!1;kc=Oo&&(!document.documentMode||9<document.documentMode)}function Du(){rr&&(rr.detachEvent("onpropertychange",wc),gr=rr=null)}function wc(e){if(e.propertyName==="value"&&bi(gr)){var t=[];Sc(t,gr,e,pa(e)),ec(Vp,t)}}function qp(e,t,n){e==="focusin"?(Du(),rr=t,gr=n,rr.attachEvent("onpropertychange",wc)):e==="focusout"&&Du()}function Qp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bi(gr)}function Hp(e,t){if(e==="click")return bi(t)}function Wp(e,t){if(e==="input"||e==="change")return bi(t)}function Yp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var We=typeof Object.is=="function"?Object.is:Yp;function vr(e,t){if(We(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!rl.call(t,i)||!We(e[i],t[i]))return!1}return!0}function Tu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Iu(e,t){var n=Tu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tu(n)}}function _c(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_c(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ec(){for(var e=window,t=Ei();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ei(e.document)}return t}function _a(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Jp(e){var t=Ec(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&_c(n.ownerDocument.documentElement,n)){if(r!==null&&_a(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Iu(n,o);var l=Iu(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xp=lt&&"documentMode"in document&&11>=document.documentMode,on=null,_l=null,ir=null,El=!1;function Nu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;El||on==null||on!==Ei(r)||(r=on,"selectionStart"in r&&_a(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ir&&vr(ir,r)||(ir=r,r=Ci(_l,"onSelect"),0<r.length&&(t=new Sa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=on)))}function Jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ln={animationend:Jr("Animation","AnimationEnd"),animationiteration:Jr("Animation","AnimationIteration"),animationstart:Jr("Animation","AnimationStart"),transitionend:Jr("Transition","TransitionEnd")},Fo={},xc={};lt&&(xc=document.createElement("div").style,"AnimationEvent"in window||(delete ln.animationend.animation,delete ln.animationiteration.animation,delete ln.animationstart.animation),"TransitionEvent"in window||delete ln.transitionend.transition);function eo(e){if(Fo[e])return Fo[e];if(!ln[e])return e;var t=ln[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xc)return Fo[e]=t[n];return e}var Dc=eo("animationend"),Tc=eo("animationiteration"),Ic=eo("animationstart"),Nc=eo("transitionend"),$c=new Map,$u="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ct(e,t){$c.set(e,t),Kt(t,[e])}for(var Lo=0;Lo<$u.length;Lo++){var Ao=$u[Lo],Kp=Ao.toLowerCase(),Zp=Ao[0].toUpperCase()+Ao.slice(1);Ct(Kp,"on"+Zp)}Ct(Dc,"onAnimationEnd");Ct(Tc,"onAnimationIteration");Ct(Ic,"onAnimationStart");Ct("dblclick","onDoubleClick");Ct("focusin","onFocus");Ct("focusout","onBlur");Ct(Nc,"onTransitionEnd");wn("onMouseEnter",["mouseout","mouseover"]);wn("onMouseLeave",["mouseout","mouseover"]);wn("onPointerEnter",["pointerout","pointerover"]);wn("onPointerLeave",["pointerout","pointerover"]);Kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Kn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Kn));function Cu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kd(r,t,void 0,e),e.currentTarget=null}function Cc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;Cu(i,a,c),o=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;Cu(i,a,c),o=u}}}if(Di)throw e=yl,Di=!1,yl=null,e}function B(e,t){var n=t[Nl];n===void 0&&(n=t[Nl]=new Set);var r=e+"__bubble";n.has(r)||(Oc(t,e,2,!1),n.add(r))}function Ro(e,t,n){var r=0;t&&(r|=4),Oc(n,e,r,t)}var Xr="_reactListening"+Math.random().toString(36).slice(2);function yr(e){if(!e[Xr]){e[Xr]=!0,zs.forEach(function(n){n!=="selectionchange"&&(bp.has(n)||Ro(n,!1,e),Ro(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xr]||(t[Xr]=!0,Ro("selectionchange",!1,t))}}function Oc(e,t,n,r){switch(mc(t)){case 1:var i=pp;break;case 4:i=mp;break;default:i=va}n=i.bind(null,t,n,e),i=void 0,!vl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Mo(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=zt(a),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}a=a.parentNode}}r=r.return}ec(function(){var c=o,g=pa(n),h=[];e:{var p=$c.get(e);if(p!==void 0){var S=Sa,v=e;switch(e){case"keypress":if(si(n)===0)break e;case"keydown":case"keyup":S=$p;break;case"focusin":v="focus",S=Co;break;case"focusout":v="blur",S=Co;break;case"beforeblur":case"afterblur":S=Co;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=yu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=vp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Pp;break;case Dc:case Tc:case Ic:S=kp;break;case Nc:S=Lp;break;case"scroll":S=hp;break;case"wheel":S=Rp;break;case"copy":case"cut":case"paste":S=_p;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=ku}var k=(t&4)!==0,_=!k&&e==="scroll",f=k?p!==null?p+"Capture":null:p;k=[];for(var s=c,d;s!==null;){d=s;var y=d.stateNode;if(d.tag===5&&y!==null&&(d=y,f!==null&&(y=dr(s,f),y!=null&&k.push(Sr(s,y,d)))),_)break;s=s.return}0<k.length&&(p=new S(p,v,null,n,g),h.push({event:p,listeners:k}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",p&&n!==hl&&(v=n.relatedTarget||n.fromElement)&&(zt(v)||v[at]))break e;if((S||p)&&(p=g.window===g?g:(p=g.ownerDocument)?p.defaultView||p.parentWindow:window,S?(v=n.relatedTarget||n.toElement,S=c,v=v?zt(v):null,v!==null&&(_=Zt(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(S=null,v=c),S!==v)){if(k=yu,y="onMouseLeave",f="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(k=ku,y="onPointerLeave",f="onPointerEnter",s="pointer"),_=S==null?p:an(S),d=v==null?p:an(v),p=new k(y,s+"leave",S,n,g),p.target=_,p.relatedTarget=d,y=null,zt(g)===c&&(k=new k(f,s+"enter",v,n,g),k.target=d,k.relatedTarget=_,y=k),_=y,S&&v)t:{for(k=S,f=v,s=0,d=k;d;d=en(d))s++;for(d=0,y=f;y;y=en(y))d++;for(;0<s-d;)k=en(k),s--;for(;0<d-s;)f=en(f),d--;for(;s--;){if(k===f||f!==null&&k===f.alternate)break t;k=en(k),f=en(f)}k=null}else k=null;S!==null&&Ou(h,p,S,k,!1),v!==null&&_!==null&&Ou(h,_,v,k,!0)}}e:{if(p=c?an(c):window,S=p.nodeName&&p.nodeName.toLowerCase(),S==="select"||S==="input"&&p.type==="file")var x=Gp;else if(Eu(p))if(kc)x=Wp;else{x=Qp;var N=qp}else(S=p.nodeName)&&S.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(x=Hp);if(x&&(x=x(e,c))){Sc(h,x,n,g);break e}N&&N(e,p,c),e==="focusout"&&(N=p._wrapperState)&&N.controlled&&p.type==="number"&&cl(p,"number",p.value)}switch(N=c?an(c):window,e){case"focusin":(Eu(N)||N.contentEditable==="true")&&(on=N,_l=c,ir=null);break;case"focusout":ir=_l=on=null;break;case"mousedown":El=!0;break;case"contextmenu":case"mouseup":case"dragend":El=!1,Nu(h,n,g);break;case"selectionchange":if(Xp)break;case"keydown":case"keyup":Nu(h,n,g)}var I;if(wa)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else rn?vc(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(gc&&n.locale!=="ko"&&(rn||C!=="onCompositionStart"?C==="onCompositionEnd"&&rn&&(I=hc()):(yt=g,ya="value"in yt?yt.value:yt.textContent,rn=!0)),N=Ci(c,C),0<N.length&&(C=new Su(C,e,null,n,g),h.push({event:C,listeners:N}),I?C.data=I:(I=yc(n),I!==null&&(C.data=I)))),(I=zp?Up(e,n):jp(e,n))&&(c=Ci(c,"onBeforeInput"),0<c.length&&(g=new Su("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:c}),g.data=I))}Cc(h,t)})}function Sr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ci(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=dr(e,n),o!=null&&r.unshift(Sr(e,o,i)),o=dr(e,t),o!=null&&r.push(Sr(e,o,i))),e=e.return}return r}function en(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ou(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=dr(n,o),u!=null&&l.unshift(Sr(n,u,a))):i||(u=dr(n,o),u!=null&&l.push(Sr(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var em=/\r\n?/g,tm=/\u0000|\uFFFD/g;function Pu(e){return(typeof e=="string"?e:""+e).replace(em,`
`).replace(tm,"")}function Kr(e,t,n){if(t=Pu(t),Pu(e)!==t&&n)throw Error(E(425))}function Oi(){}var xl=null,Dl=null;function Tl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Il=typeof setTimeout=="function"?setTimeout:void 0,nm=typeof clearTimeout=="function"?clearTimeout:void 0,Fu=typeof Promise=="function"?Promise:void 0,rm=typeof queueMicrotask=="function"?queueMicrotask:typeof Fu!="undefined"?function(e){return Fu.resolve(null).then(e).catch(im)}:Il;function im(e){setTimeout(function(){throw e})}function zo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),hr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);hr(t)}function Et(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Lu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var On=Math.random().toString(36).slice(2),Xe="__reactFiber$"+On,kr="__reactProps$"+On,at="__reactContainer$"+On,Nl="__reactEvents$"+On,om="__reactListeners$"+On,lm="__reactHandles$"+On;function zt(e){var t=e[Xe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[at]||n[Xe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Lu(e);e!==null;){if(n=e[Xe])return n;e=Lu(e)}return t}e=n,n=e.parentNode}return null}function Lr(e){return e=e[Xe]||e[at],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function an(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function to(e){return e[kr]||null}var $l=[],un=-1;function Ot(e){return{current:e}}function V(e){0>un||(e.current=$l[un],$l[un]=null,un--)}function j(e,t){un++,$l[un]=e.current,e.current=t}var $t={},pe=Ot($t),we=Ot(!1),qt=$t;function _n(e,t){var n=e.type.contextTypes;if(!n)return $t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function Pi(){V(we),V(pe)}function Au(e,t,n){if(pe.current!==$t)throw Error(E(168));j(pe,t),j(we,n)}function Pc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,qd(e)||"Unknown",i));return W({},n,r)}function Fi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||$t,qt=pe.current,j(pe,e),j(we,we.current),!0}function Ru(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Pc(e,t,qt),r.__reactInternalMemoizedMergedChildContext=e,V(we),V(pe),j(pe,e)):V(we),j(we,n)}var nt=null,no=!1,Uo=!1;function Fc(e){nt===null?nt=[e]:nt.push(e)}function am(e){no=!0,Fc(e)}function Pt(){if(!Uo&&nt!==null){Uo=!0;var e=0,t=z;try{var n=nt;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}nt=null,no=!1}catch(i){throw nt!==null&&(nt=nt.slice(e+1)),ic(ma,Pt),i}finally{z=t,Uo=!1}}return null}var sn=[],cn=0,Li=null,Ai=0,Ce=[],Oe=0,Qt=null,rt=1,it="";function Rt(e,t){sn[cn++]=Ai,sn[cn++]=Li,Li=e,Ai=t}function Lc(e,t,n){Ce[Oe++]=rt,Ce[Oe++]=it,Ce[Oe++]=Qt,Qt=e;var r=rt;e=it;var i=32-Qe(r)-1;r&=~(1<<i),n+=1;var o=32-Qe(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,rt=1<<32-Qe(t)+i|n<<i|r,it=o+e}else rt=1<<o|n<<i|r,it=e}function Ea(e){e.return!==null&&(Rt(e,1),Lc(e,1,0))}function xa(e){for(;e===Li;)Li=sn[--cn],sn[cn]=null,Ai=sn[--cn],sn[cn]=null;for(;e===Qt;)Qt=Ce[--Oe],Ce[Oe]=null,it=Ce[--Oe],Ce[Oe]=null,rt=Ce[--Oe],Ce[Oe]=null}var Te=null,De=null,q=!1,Ge=null;function Ac(e,t){var n=Pe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Mu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,De=Et(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,De=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qt!==null?{id:rt,overflow:it}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,De=null,!0):!1;default:return!1}}function Cl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ol(e){if(q){var t=De;if(t){var n=t;if(!Mu(e,t)){if(Cl(e))throw Error(E(418));t=Et(n.nextSibling);var r=Te;t&&Mu(e,t)?Ac(r,n):(e.flags=e.flags&-4097|2,q=!1,Te=e)}}else{if(Cl(e))throw Error(E(418));e.flags=e.flags&-4097|2,q=!1,Te=e}}}function zu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function Zr(e){if(e!==Te)return!1;if(!q)return zu(e),q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Tl(e.type,e.memoizedProps)),t&&(t=De)){if(Cl(e))throw Rc(),Error(E(418));for(;t;)Ac(e,t),t=Et(t.nextSibling)}if(zu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){De=Et(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}De=null}}else De=Te?Et(e.stateNode.nextSibling):null;return!0}function Rc(){for(var e=De;e;)e=Et(e.nextSibling)}function En(){De=Te=null,q=!1}function Da(e){Ge===null?Ge=[e]:Ge.push(e)}var um=ct.ReactCurrentBatchConfig;function Be(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ri=Ot(null),Mi=null,fn=null,Ta=null;function Ia(){Ta=fn=Mi=null}function Na(e){var t=Ri.current;V(Ri),e._currentValue=t}function Pl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Sn(e,t){Mi=e,Ta=fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ke=!0),e.firstContext=null)}function Re(e){var t=e._currentValue;if(Ta!==e)if(e={context:e,memoizedValue:t,next:null},fn===null){if(Mi===null)throw Error(E(308));fn=e,Mi.dependencies={lanes:0,firstContext:e}}else fn=fn.next=e;return t}var Ut=null;function $a(e){Ut===null?Ut=[e]:Ut.push(e)}function Mc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,$a(t)):(n.next=i.next,i.next=n),t.interleaved=n,ut(e,r)}function ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ht=!1;function Ca(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(M&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ut(e,n)}return i=r.interleaved,i===null?(t.next=t,$a(r)):(t.next=i.next,i.next=t),r.interleaved=t,ut(e,n)}function ci(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ha(e,n)}}function Uu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zi(e,t,n,r){var i=e.updateQueue;ht=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==l&&(a===null?g.firstBaseUpdate=c:a.next=c,g.lastBaseUpdate=u))}if(o!==null){var h=i.baseState;l=0,g=c=u=null,a=o;do{var p=a.lane,S=a.eventTime;if((r&p)===p){g!==null&&(g=g.next={eventTime:S,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,k=a;switch(p=t,S=n,k.tag){case 1:if(v=k.payload,typeof v=="function"){h=v.call(S,h,p);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,p=typeof v=="function"?v.call(S,h,p):v,p==null)break e;h=W({},h,p);break e;case 2:ht=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else S={eventTime:S,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(c=g=S,u=h):g=g.next=S,l|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(g===null&&(u=h),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Wt|=l,e.lanes=l,e.memoizedState=h}}function ju(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Uc=new Ms.Component().refs;function Fl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ro={isMounted:function(e){return(e=e._reactInternals)?Zt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),i=Tt(e),o=ot(r,i);o.payload=t,n!=null&&(o.callback=n),t=xt(e,o,i),t!==null&&(He(t,e,i,r),ci(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),i=Tt(e),o=ot(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=xt(e,o,i),t!==null&&(He(t,e,i,r),ci(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=Tt(e),i=ot(n,r);i.tag=2,t!=null&&(i.callback=t),t=xt(e,i,r),t!==null&&(He(t,e,r,n),ci(t,e,r))}};function Bu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!vr(n,r)||!vr(i,o):!0}function jc(e,t,n){var r=!1,i=$t,o=t.contextType;return typeof o=="object"&&o!==null?o=Re(o):(i=_e(t)?qt:pe.current,r=t.contextTypes,o=(r=r!=null)?_n(e,i):$t),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ro,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Vu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ro.enqueueReplaceState(t,t.state,null)}function Ll(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Uc,Ca(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Re(o):(o=_e(t)?qt:pe.current,i.context=_n(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Fl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ro.enqueueReplaceState(i,i.state,null),zi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function qn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===Uc&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function br(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Gu(e){var t=e._init;return t(e._payload)}function Bc(e){function t(f,s){if(e){var d=f.deletions;d===null?(f.deletions=[s],f.flags|=16):d.push(s)}}function n(f,s){if(!e)return null;for(;s!==null;)t(f,s),s=s.sibling;return null}function r(f,s){for(f=new Map;s!==null;)s.key!==null?f.set(s.key,s):f.set(s.index,s),s=s.sibling;return f}function i(f,s){return f=It(f,s),f.index=0,f.sibling=null,f}function o(f,s,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<s?(f.flags|=2,s):d):(f.flags|=2,s)):(f.flags|=1048576,s)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,s,d,y){return s===null||s.tag!==6?(s=Ho(d,f.mode,y),s.return=f,s):(s=i(s,d),s.return=f,s)}function u(f,s,d,y){var x=d.type;return x===nn?g(f,s,d.props.children,y,d.key):s!==null&&(s.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===mt&&Gu(x)===s.type)?(y=i(s,d.props),y.ref=qn(f,s,d),y.return=f,y):(y=gi(d.type,d.key,d.props,null,f.mode,y),y.ref=qn(f,s,d),y.return=f,y)}function c(f,s,d,y){return s===null||s.tag!==4||s.stateNode.containerInfo!==d.containerInfo||s.stateNode.implementation!==d.implementation?(s=Wo(d,f.mode,y),s.return=f,s):(s=i(s,d.children||[]),s.return=f,s)}function g(f,s,d,y,x){return s===null||s.tag!==7?(s=Vt(d,f.mode,y,x),s.return=f,s):(s=i(s,d),s.return=f,s)}function h(f,s,d){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Ho(""+s,f.mode,d),s.return=f,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Vr:return d=gi(s.type,s.key,s.props,null,f.mode,d),d.ref=qn(f,null,s),d.return=f,d;case tn:return s=Wo(s,f.mode,d),s.return=f,s;case mt:var y=s._init;return h(f,y(s._payload),d)}if(Jn(s)||Un(s))return s=Vt(s,f.mode,d,null),s.return=f,s;br(f,s)}return null}function p(f,s,d,y){var x=s!==null?s.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return x!==null?null:a(f,s,""+d,y);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Vr:return d.key===x?u(f,s,d,y):null;case tn:return d.key===x?c(f,s,d,y):null;case mt:return x=d._init,p(f,s,x(d._payload),y)}if(Jn(d)||Un(d))return x!==null?null:g(f,s,d,y,null);br(f,d)}return null}function S(f,s,d,y,x){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(d)||null,a(s,f,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Vr:return f=f.get(y.key===null?d:y.key)||null,u(s,f,y,x);case tn:return f=f.get(y.key===null?d:y.key)||null,c(s,f,y,x);case mt:var N=y._init;return S(f,s,d,N(y._payload),x)}if(Jn(y)||Un(y))return f=f.get(d)||null,g(s,f,y,x,null);br(s,y)}return null}function v(f,s,d,y){for(var x=null,N=null,I=s,C=s=0,G=null;I!==null&&C<d.length;C++){I.index>C?(G=I,I=null):G=I.sibling;var F=p(f,I,d[C],y);if(F===null){I===null&&(I=G);break}e&&I&&F.alternate===null&&t(f,I),s=o(F,s,C),N===null?x=F:N.sibling=F,N=F,I=G}if(C===d.length)return n(f,I),q&&Rt(f,C),x;if(I===null){for(;C<d.length;C++)I=h(f,d[C],y),I!==null&&(s=o(I,s,C),N===null?x=I:N.sibling=I,N=I);return q&&Rt(f,C),x}for(I=r(f,I);C<d.length;C++)G=S(I,f,C,d[C],y),G!==null&&(e&&G.alternate!==null&&I.delete(G.key===null?C:G.key),s=o(G,s,C),N===null?x=G:N.sibling=G,N=G);return e&&I.forEach(function(te){return t(f,te)}),q&&Rt(f,C),x}function k(f,s,d,y){var x=Un(d);if(typeof x!="function")throw Error(E(150));if(d=x.call(d),d==null)throw Error(E(151));for(var N=x=null,I=s,C=s=0,G=null,F=d.next();I!==null&&!F.done;C++,F=d.next()){I.index>C?(G=I,I=null):G=I.sibling;var te=p(f,I,F.value,y);if(te===null){I===null&&(I=G);break}e&&I&&te.alternate===null&&t(f,I),s=o(te,s,C),N===null?x=te:N.sibling=te,N=te,I=G}if(F.done)return n(f,I),q&&Rt(f,C),x;if(I===null){for(;!F.done;C++,F=d.next())F=h(f,F.value,y),F!==null&&(s=o(F,s,C),N===null?x=F:N.sibling=F,N=F);return q&&Rt(f,C),x}for(I=r(f,I);!F.done;C++,F=d.next())F=S(I,f,C,F.value,y),F!==null&&(e&&F.alternate!==null&&I.delete(F.key===null?C:F.key),s=o(F,s,C),N===null?x=F:N.sibling=F,N=F);return e&&I.forEach(function(ze){return t(f,ze)}),q&&Rt(f,C),x}function _(f,s,d,y){if(typeof d=="object"&&d!==null&&d.type===nn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Vr:e:{for(var x=d.key,N=s;N!==null;){if(N.key===x){if(x=d.type,x===nn){if(N.tag===7){n(f,N.sibling),s=i(N,d.props.children),s.return=f,f=s;break e}}else if(N.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===mt&&Gu(x)===N.type){n(f,N.sibling),s=i(N,d.props),s.ref=qn(f,N,d),s.return=f,f=s;break e}n(f,N);break}else t(f,N);N=N.sibling}d.type===nn?(s=Vt(d.props.children,f.mode,y,d.key),s.return=f,f=s):(y=gi(d.type,d.key,d.props,null,f.mode,y),y.ref=qn(f,s,d),y.return=f,f=y)}return l(f);case tn:e:{for(N=d.key;s!==null;){if(s.key===N)if(s.tag===4&&s.stateNode.containerInfo===d.containerInfo&&s.stateNode.implementation===d.implementation){n(f,s.sibling),s=i(s,d.children||[]),s.return=f,f=s;break e}else{n(f,s);break}else t(f,s);s=s.sibling}s=Wo(d,f.mode,y),s.return=f,f=s}return l(f);case mt:return N=d._init,_(f,s,N(d._payload),y)}if(Jn(d))return v(f,s,d,y);if(Un(d))return k(f,s,d,y);br(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,s!==null&&s.tag===6?(n(f,s.sibling),s=i(s,d),s.return=f,f=s):(n(f,s),s=Ho(d,f.mode,y),s.return=f,f=s),l(f)):n(f,s)}return _}var xn=Bc(!0),Vc=Bc(!1),Ar={},Ze=Ot(Ar),wr=Ot(Ar),_r=Ot(Ar);function jt(e){if(e===Ar)throw Error(E(174));return e}function Oa(e,t){switch(j(_r,t),j(wr,e),j(Ze,Ar),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:dl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=dl(t,e)}V(Ze),j(Ze,t)}function Dn(){V(Ze),V(wr),V(_r)}function Gc(e){jt(_r.current);var t=jt(Ze.current),n=dl(t,e.type);t!==n&&(j(wr,e),j(Ze,n))}function Pa(e){wr.current===e&&(V(Ze),V(wr))}var Q=Ot(0);function Ui(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var jo=[];function Fa(){for(var e=0;e<jo.length;e++)jo[e]._workInProgressVersionPrimary=null;jo.length=0}var fi=ct.ReactCurrentDispatcher,Bo=ct.ReactCurrentBatchConfig,Ht=0,H=null,b=null,ne=null,ji=!1,or=!1,Er=0,sm=0;function ce(){throw Error(E(321))}function La(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!We(e[n],t[n]))return!1;return!0}function Aa(e,t,n,r,i,o){if(Ht=o,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fi.current=e===null||e.memoizedState===null?pm:mm,e=n(r,i),or){o=0;do{if(or=!1,Er=0,25<=o)throw Error(E(301));o+=1,ne=b=null,t.updateQueue=null,fi.current=hm,e=n(r,i)}while(or)}if(fi.current=Bi,t=b!==null&&b.next!==null,Ht=0,ne=b=H=null,ji=!1,t)throw Error(E(300));return e}function Ra(){var e=Er!==0;return Er=0,e}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?H.memoizedState=ne=e:ne=ne.next=e,ne}function Me(){if(b===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=b.next;var t=ne===null?H.memoizedState:ne.next;if(t!==null)ne=t,b=e;else{if(e===null)throw Error(E(310));b=e,e={memoizedState:b.memoizedState,baseState:b.baseState,baseQueue:b.baseQueue,queue:b.queue,next:null},ne===null?H.memoizedState=ne=e:ne=ne.next=e}return ne}function xr(e,t){return typeof t=="function"?t(e):t}function Vo(e){var t=Me(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=b,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,u=null,c=o;do{var g=c.lane;if((Ht&g)===g)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=h,l=r):u=u.next=h,H.lanes|=g,Wt|=g}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=a,We(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,H.lanes|=o,Wt|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Go(e){var t=Me(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);We(o,t.memoizedState)||(ke=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function qc(){}function Qc(e,t){var n=H,r=Me(),i=t(),o=!We(r.memoizedState,i);if(o&&(r.memoizedState=i,ke=!0),r=r.queue,Ma(Yc.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,Dr(9,Wc.bind(null,n,r,i,t),void 0,null),ie===null)throw Error(E(349));(Ht&30)!==0||Hc(n,t,i)}return i}function Hc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wc(e,t,n,r){t.value=n,t.getSnapshot=r,Jc(t)&&Xc(e)}function Yc(e,t,n){return n(function(){Jc(t)&&Xc(e)})}function Jc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!We(e,n)}catch{return!0}}function Xc(e){var t=ut(e,1);t!==null&&He(t,e,1,-1)}function qu(e){var t=Je();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xr,lastRenderedState:e},t.queue=e,e=e.dispatch=dm.bind(null,H,e),[t.memoizedState,e]}function Dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Kc(){return Me().memoizedState}function di(e,t,n,r){var i=Je();H.flags|=e,i.memoizedState=Dr(1|t,n,void 0,r===void 0?null:r)}function io(e,t,n,r){var i=Me();r=r===void 0?null:r;var o=void 0;if(b!==null){var l=b.memoizedState;if(o=l.destroy,r!==null&&La(r,l.deps)){i.memoizedState=Dr(t,n,o,r);return}}H.flags|=e,i.memoizedState=Dr(1|t,n,o,r)}function Qu(e,t){return di(8390656,8,e,t)}function Ma(e,t){return io(2048,8,e,t)}function Zc(e,t){return io(4,2,e,t)}function bc(e,t){return io(4,4,e,t)}function ef(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tf(e,t,n){return n=n!=null?n.concat([e]):null,io(4,4,ef.bind(null,t,e),n)}function za(){}function nf(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&La(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function rf(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&La(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function of(e,t,n){return(Ht&21)===0?(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n):(We(n,t)||(n=ac(),H.lanes|=n,Wt|=n,e.baseState=!0),t)}function cm(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=Bo.transition;Bo.transition={};try{e(!1),t()}finally{z=n,Bo.transition=r}}function lf(){return Me().memoizedState}function fm(e,t,n){var r=Tt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},af(e))uf(t,n);else if(n=Mc(e,t,n,r),n!==null){var i=he();He(n,e,r,i),sf(n,t,r)}}function dm(e,t,n){var r=Tt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(af(e))uf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,We(a,l)){var u=t.interleaved;u===null?(i.next=i,$a(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Mc(e,t,i,r),n!==null&&(i=he(),He(n,e,r,i),sf(n,t,r))}}function af(e){var t=e.alternate;return e===H||t!==null&&t===H}function uf(e,t){or=ji=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function sf(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ha(e,n)}}var Bi={readContext:Re,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useInsertionEffect:ce,useLayoutEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useMutableSource:ce,useSyncExternalStore:ce,useId:ce,unstable_isNewReconciler:!1},pm={readContext:Re,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:Qu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,di(4194308,4,ef.bind(null,t,e),n)},useLayoutEffect:function(e,t){return di(4194308,4,e,t)},useInsertionEffect:function(e,t){return di(4,2,e,t)},useMemo:function(e,t){var n=Je();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Je();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=fm.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:qu,useDebugValue:za,useDeferredValue:function(e){return Je().memoizedState=e},useTransition:function(){var e=qu(!1),t=e[0];return e=cm.bind(null,e[1]),Je().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=Je();if(q){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),ie===null)throw Error(E(349));(Ht&30)!==0||Hc(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Qu(Yc.bind(null,r,o,e),[e]),r.flags|=2048,Dr(9,Wc.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Je(),t=ie.identifierPrefix;if(q){var n=it,r=rt;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Er++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=sm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},mm={readContext:Re,useCallback:nf,useContext:Re,useEffect:Ma,useImperativeHandle:tf,useInsertionEffect:Zc,useLayoutEffect:bc,useMemo:rf,useReducer:Vo,useRef:Kc,useState:function(){return Vo(xr)},useDebugValue:za,useDeferredValue:function(e){var t=Me();return of(t,b.memoizedState,e)},useTransition:function(){var e=Vo(xr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:qc,useSyncExternalStore:Qc,useId:lf,unstable_isNewReconciler:!1},hm={readContext:Re,useCallback:nf,useContext:Re,useEffect:Ma,useImperativeHandle:tf,useInsertionEffect:Zc,useLayoutEffect:bc,useMemo:rf,useReducer:Go,useRef:Kc,useState:function(){return Go(xr)},useDebugValue:za,useDeferredValue:function(e){var t=Me();return b===null?t.memoizedState=e:of(t,b.memoizedState,e)},useTransition:function(){var e=Go(xr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:qc,useSyncExternalStore:Qc,useId:lf,unstable_isNewReconciler:!1};function Tn(e,t){try{var n="",r=t;do n+=Gd(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function qo(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Al(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gm=typeof WeakMap=="function"?WeakMap:Map;function cf(e,t,n){n=ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Gi||(Gi=!0,Ql=r),Al(e,t)},n}function ff(e,t,n){n=ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Al(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Al(e,t),typeof r!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Hu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Cm.bind(null,e,t,n),t.then(e,e))}function Wu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yu(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ot(-1,1),t.tag=2,xt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var vm=ct.ReactCurrentOwner,ke=!1;function me(e,t,n,r){t.child=e===null?Vc(t,null,n,r):xn(t,e.child,n,r)}function Ju(e,t,n,r,i){n=n.render;var o=t.ref;return Sn(t,i),r=Aa(e,t,n,r,o,i),n=Ra(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,st(e,t,i)):(q&&n&&Ea(t),t.flags|=1,me(e,t,r,i),t.child)}function Xu(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ha(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,df(e,t,o,r,i)):(e=gi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:vr,n(l,r)&&e.ref===t.ref)return st(e,t,i)}return t.flags|=1,e=It(o,r),e.ref=t.ref,e.return=t,t.child=e}function df(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(vr(o,r)&&e.ref===t.ref)if(ke=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(ke=!0);else return t.lanes=e.lanes,st(e,t,i)}return Rl(e,t,n,r,i)}function pf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},j(pn,xe),xe|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,j(pn,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,j(pn,xe),xe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,j(pn,xe),xe|=r;return me(e,t,i,n),t.child}function mf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Rl(e,t,n,r,i){var o=_e(n)?qt:pe.current;return o=_n(t,o),Sn(t,i),n=Aa(e,t,n,r,o,i),r=Ra(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,st(e,t,i)):(q&&r&&Ea(t),t.flags|=1,me(e,t,n,i),t.child)}function Ku(e,t,n,r,i){if(_e(n)){var o=!0;Fi(t)}else o=!1;if(Sn(t,i),t.stateNode===null)pi(e,t),jc(t,n,r),Ll(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Re(c):(c=_e(n)?qt:pe.current,c=_n(t,c));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Vu(t,l,r,c),ht=!1;var p=t.memoizedState;l.state=p,zi(t,r,l,i),u=t.memoizedState,a!==r||p!==u||we.current||ht?(typeof g=="function"&&(Fl(t,n,g,r),u=t.memoizedState),(a=ht||Bu(t,n,a,r,p,u,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,zc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Be(t.type,a),l.props=c,h=t.pendingProps,p=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Re(u):(u=_e(n)?qt:pe.current,u=_n(t,u));var S=n.getDerivedStateFromProps;(g=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||p!==u)&&Vu(t,l,r,u),ht=!1,p=t.memoizedState,l.state=p,zi(t,r,l,i);var v=t.memoizedState;a!==h||p!==v||we.current||ht?(typeof S=="function"&&(Fl(t,n,S,r),v=t.memoizedState),(c=ht||Bu(t,n,c,r,p,v,u)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Ml(e,t,n,r,o,i)}function Ml(e,t,n,r,i,o){mf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Ru(t,n,!1),st(e,t,o);r=t.stateNode,vm.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=xn(t,e.child,null,o),t.child=xn(t,null,a,o)):me(e,t,a,o),t.memoizedState=r.state,i&&Ru(t,n,!0),t.child}function hf(e){var t=e.stateNode;t.pendingContext?Au(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Au(e,t.context,!1),Oa(e,t.containerInfo)}function Zu(e,t,n,r,i){return En(),Da(i),t.flags|=256,me(e,t,n,r),t.child}var zl={dehydrated:null,treeContext:null,retryLane:0};function Ul(e){return{baseLanes:e,cachePool:null,transitions:null}}function gf(e,t,n){var r=t.pendingProps,i=Q.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),j(Q,i&1),e===null)return Ol(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=l):o=ao(l,r,0,null),e=Vt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ul(n),t.memoizedState=zl,e):Ua(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ym(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=It(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=It(a,o):(o=Vt(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Ul(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=zl,r}return o=e.child,e=o.sibling,r=It(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ua(e,t){return t=ao({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ei(e,t,n,r){return r!==null&&Da(r),xn(t,e.child,null,n),e=Ua(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ym(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=qo(Error(E(422))),ei(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ao({mode:"visible",children:r.children},i,0,null),o=Vt(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&xn(t,e.child,null,l),t.child.memoizedState=Ul(l),t.memoizedState=zl,o);if((t.mode&1)===0)return ei(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(E(419)),r=qo(o,r,void 0),ei(e,t,l,r)}if(a=(l&e.childLanes)!==0,ke||a){if(r=ie,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|l))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ut(e,i),He(r,e,i,-1))}return Qa(),r=qo(Error(E(421))),ei(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Om.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,De=Et(i.nextSibling),Te=t,q=!0,Ge=null,e!==null&&(Ce[Oe++]=rt,Ce[Oe++]=it,Ce[Oe++]=Qt,rt=e.id,it=e.overflow,Qt=t),t=Ua(t,r.children),t.flags|=4096,t)}function bu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Pl(e.return,t,n)}function Qo(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function vf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(me(e,t,r.children,n),r=Q.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bu(e,n,t);else if(e.tag===19)bu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(j(Q,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ui(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Qo(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ui(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Qo(t,!0,n,null,o);break;case"together":Qo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function pi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function st(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wt|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=It(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=It(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Sm(e,t,n){switch(t.tag){case 3:hf(t),En();break;case 5:Gc(t);break;case 1:_e(t.type)&&Fi(t);break;case 4:Oa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;j(Ri,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(j(Q,Q.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?gf(e,t,n):(j(Q,Q.current&1),e=st(e,t,n),e!==null?e.sibling:null);j(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return vf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,pf(e,t,n)}return st(e,t,n)}var yf,jl,Sf,kf;yf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jl=function(){};Sf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,jt(Ze.current);var o=null;switch(n){case"input":i=ul(e,i),r=ul(e,r),o=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":i=fl(e,i),r=fl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Oi)}pl(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(cr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(cr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&B("scroll",e),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};kf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Qn(e,t){if(!q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function km(e,t,n){var r=t.pendingProps;switch(xa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return _e(t.type)&&Pi(),fe(t),null;case 3:return r=t.stateNode,Dn(),V(we),V(pe),Fa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ge!==null&&(Yl(Ge),Ge=null))),jl(e,t),fe(t),null;case 5:Pa(t);var i=jt(_r.current);if(n=t.type,e!==null&&t.stateNode!=null)Sf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return fe(t),null}if(e=jt(Ze.current),Zr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Xe]=t,r[kr]=o,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<Kn.length;i++)B(Kn[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":uu(r,o),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},B("invalid",r);break;case"textarea":cu(r,o),B("invalid",r)}pl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Kr(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Kr(r.textContent,a,e),i=["children",""+a]):cr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&B("scroll",r)}switch(n){case"input":Gr(r),su(r,o,!0);break;case"textarea":Gr(r),fu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Oi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Xe]=t,e[kr]=r,yf(e,t,!1,!1),t.stateNode=e;e:{switch(l=ml(n,r),n){case"dialog":B("cancel",e),B("close",e),i=r;break;case"iframe":case"object":case"embed":B("load",e),i=r;break;case"video":case"audio":for(i=0;i<Kn.length;i++)B(Kn[i],e);i=r;break;case"source":B("error",e),i=r;break;case"img":case"image":case"link":B("error",e),B("load",e),i=r;break;case"details":B("toggle",e),i=r;break;case"input":uu(e,r),i=ul(e,r),B("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),B("invalid",e);break;case"textarea":cu(e,r),i=fl(e,r),B("invalid",e);break;default:i=r}pl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?Js(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ws(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&fr(e,u):typeof u=="number"&&fr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(cr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&B("scroll",e):u!=null&&sa(e,o,u,l))}switch(n){case"input":Gr(e),su(e,r,!1);break;case"textarea":Gr(e),fu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?hn(e,!!r.multiple,o,!1):r.defaultValue!=null&&hn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Oi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return fe(t),null;case 6:if(e&&t.stateNode!=null)kf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=jt(_r.current),jt(Ze.current),Zr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xe]=t,(o=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:Kr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Kr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xe]=t,t.stateNode=r}return fe(t),null;case 13:if(V(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(q&&De!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Rc(),En(),t.flags|=98560,o=!1;else if(o=Zr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[Xe]=t}else En(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;fe(t),o=!1}else Ge!==null&&(Yl(Ge),Ge=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Q.current&1)!==0?ee===0&&(ee=3):Qa())),t.updateQueue!==null&&(t.flags|=4),fe(t),null);case 4:return Dn(),jl(e,t),e===null&&yr(t.stateNode.containerInfo),fe(t),null;case 10:return Na(t.type._context),fe(t),null;case 17:return _e(t.type)&&Pi(),fe(t),null;case 19:if(V(Q),o=t.memoizedState,o===null)return fe(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)Qn(o,!1);else{if(ee!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Ui(e),l!==null){for(t.flags|=128,Qn(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return j(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&J()>In&&(t.flags|=128,r=!0,Qn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ui(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Qn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!q)return fe(t),null}else 2*J()-o.renderingStartTime>In&&n!==1073741824&&(t.flags|=128,r=!0,Qn(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=J(),t.sibling=null,n=Q.current,j(Q,r?n&1|2:n&1),t):(fe(t),null);case 22:case 23:return qa(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(xe&1073741824)!==0&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function wm(e,t){switch(xa(t),t.tag){case 1:return _e(t.type)&&Pi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dn(),V(we),V(pe),Fa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Pa(t),null;case 13:if(V(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Q),null;case 4:return Dn(),null;case 10:return Na(t.type._context),null;case 22:case 23:return qa(),null;case 24:return null;default:return null}}var ti=!1,de=!1,_m=typeof WeakSet=="function"?WeakSet:Set,T=null;function dn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Y(e,t,r)}else n.current=null}function Bl(e,t,n){try{n()}catch(r){Y(e,t,r)}}var es=!1;function Em(e,t){if(xl=Ni,e=Ec(),_a(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,c=0,g=0,h=e,p=null;t:for(;;){for(var S;h!==n||i!==0&&h.nodeType!==3||(a=l+i),h!==o||r!==0&&h.nodeType!==3||(u=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(S=h.firstChild)!==null;)p=h,h=S;for(;;){if(h===e)break t;if(p===n&&++c===i&&(a=l),p===o&&++g===r&&(u=l),(S=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=S}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dl={focusedElem:e,selectionRange:n},Ni=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var v=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,_=v.memoizedState,f=t.stateNode,s=f.getSnapshotBeforeUpdate(t.elementType===t.type?k:Be(t.type,k),_);f.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){Y(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return v=es,es=!1,v}function lr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Bl(t,n,o)}i=i.next}while(i!==r)}}function oo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function wf(e){var t=e.alternate;t!==null&&(e.alternate=null,wf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xe],delete t[kr],delete t[Nl],delete t[om],delete t[lm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _f(e){return e.tag===5||e.tag===3||e.tag===4}function ts(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_f(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Oi));else if(r!==4&&(e=e.child,e!==null))for(Gl(e,t,n),e=e.sibling;e!==null;)Gl(e,t,n),e=e.sibling}function ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ql(e,t,n),e=e.sibling;e!==null;)ql(e,t,n),e=e.sibling}var le=null,Ve=!1;function pt(e,t,n){for(n=n.child;n!==null;)Ef(e,t,n),n=n.sibling}function Ef(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Ki,n)}catch{}switch(n.tag){case 5:de||dn(n,t);case 6:var r=le,i=Ve;le=null,pt(e,t,n),le=r,Ve=i,le!==null&&(Ve?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(Ve?(e=le,n=n.stateNode,e.nodeType===8?zo(e.parentNode,n):e.nodeType===1&&zo(e,n),hr(e)):zo(le,n.stateNode));break;case 4:r=le,i=Ve,le=n.stateNode.containerInfo,Ve=!0,pt(e,t,n),le=r,Ve=i;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&((o&2)!==0||(o&4)!==0)&&Bl(n,t,l),i=i.next}while(i!==r)}pt(e,t,n);break;case 1:if(!de&&(dn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Y(n,t,a)}pt(e,t,n);break;case 21:pt(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,pt(e,t,n),de=r):pt(e,t,n);break;default:pt(e,t,n)}}function ns(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _m),t.forEach(function(r){var i=Pm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ue(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:le=a.stateNode,Ve=!1;break e;case 3:le=a.stateNode.containerInfo,Ve=!0;break e;case 4:le=a.stateNode.containerInfo,Ve=!0;break e}a=a.return}if(le===null)throw Error(E(160));Ef(o,l,i),le=null,Ve=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Y(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xf(t,e),t=t.sibling}function xf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),Ye(e),r&4){try{lr(3,e,e.return),oo(3,e)}catch(k){Y(e,e.return,k)}try{lr(5,e,e.return)}catch(k){Y(e,e.return,k)}}break;case 1:Ue(t,e),Ye(e),r&512&&n!==null&&dn(n,n.return);break;case 5:if(Ue(t,e),Ye(e),r&512&&n!==null&&dn(n,n.return),e.flags&32){var i=e.stateNode;try{fr(i,"")}catch(k){Y(e,e.return,k)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&qs(i,o),ml(a,l);var c=ml(a,o);for(l=0;l<u.length;l+=2){var g=u[l],h=u[l+1];g==="style"?Js(i,h):g==="dangerouslySetInnerHTML"?Ws(i,h):g==="children"?fr(i,h):sa(i,g,h,c)}switch(a){case"input":sl(i,o);break;case"textarea":Qs(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var S=o.value;S!=null?hn(i,!!o.multiple,S,!1):p!==!!o.multiple&&(o.defaultValue!=null?hn(i,!!o.multiple,o.defaultValue,!0):hn(i,!!o.multiple,o.multiple?[]:"",!1))}i[kr]=o}catch(k){Y(e,e.return,k)}}break;case 6:if(Ue(t,e),Ye(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(k){Y(e,e.return,k)}}break;case 3:if(Ue(t,e),Ye(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{hr(t.containerInfo)}catch(k){Y(e,e.return,k)}break;case 4:Ue(t,e),Ye(e);break;case 13:Ue(t,e),Ye(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Va=J())),r&4&&ns(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(de=(c=de)||g,Ue(t,e),de=c):Ue(t,e),Ye(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&(e.mode&1)!==0)for(T=e,g=e.child;g!==null;){for(h=T=g;T!==null;){switch(p=T,S=p.child,p.tag){case 0:case 11:case 14:case 15:lr(4,p,p.return);break;case 1:dn(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(k){Y(r,n,k)}}break;case 5:dn(p,p.return);break;case 22:if(p.memoizedState!==null){is(h);continue}}S!==null?(S.return=p,T=S):is(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{i=h.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,u=h.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Ys("display",l))}catch(k){Y(e,e.return,k)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(k){Y(e,e.return,k)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ue(t,e),Ye(e),r&4&&ns(e);break;case 21:break;default:Ue(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_f(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(fr(i,""),r.flags&=-33);var o=ts(e);ql(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=ts(e);Gl(e,a,l);break;default:throw Error(E(161))}}catch(u){Y(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xm(e,t,n){T=e,Df(e)}function Df(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var i=T,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||ti;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||de;a=ti;var c=de;if(ti=l,(de=u)&&!c)for(T=i;T!==null;)l=T,u=l.child,l.tag===22&&l.memoizedState!==null?os(i):u!==null?(u.return=l,T=u):os(i);for(;o!==null;)T=o,Df(o),o=o.sibling;T=i,ti=a,de=c}rs(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,T=o):rs(e)}}function rs(e){for(;T!==null;){var t=T;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:de||oo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Be(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ju(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ju(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&hr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}de||t.flags&512&&Vl(t)}catch(p){Y(t,t.return,p)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function is(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function os(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{oo(4,t)}catch(u){Y(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){Y(t,i,u)}}var o=t.return;try{Vl(t)}catch(u){Y(t,o,u)}break;case 5:var l=t.return;try{Vl(t)}catch(u){Y(t,l,u)}}}catch(u){Y(t,t.return,u)}if(t===e){T=null;break}var a=t.sibling;if(a!==null){a.return=t.return,T=a;break}T=t.return}}var Dm=Math.ceil,Vi=ct.ReactCurrentDispatcher,ja=ct.ReactCurrentOwner,Le=ct.ReactCurrentBatchConfig,M=0,ie=null,Z=null,ue=0,xe=0,pn=Ot(0),ee=0,Tr=null,Wt=0,lo=0,Ba=0,ar=null,ye=null,Va=0,In=1/0,tt=null,Gi=!1,Ql=null,Dt=null,ni=!1,St=null,qi=0,ur=0,Hl=null,mi=-1,hi=0;function he(){return(M&6)!==0?J():mi!==-1?mi:mi=J()}function Tt(e){return(e.mode&1)===0?1:(M&2)!==0&&ue!==0?ue&-ue:um.transition!==null?(hi===0&&(hi=ac()),hi):(e=z,e!==0||(e=window.event,e=e===void 0?16:mc(e.type)),e)}function He(e,t,n,r){if(50<ur)throw ur=0,Hl=null,Error(E(185));Pr(e,n,r),((M&2)===0||e!==ie)&&(e===ie&&((M&2)===0&&(lo|=n),ee===4&&vt(e,ue)),Ee(e,r),n===1&&M===0&&(t.mode&1)===0&&(In=J()+500,no&&Pt()))}function Ee(e,t){var n=e.callbackNode;up(e,t);var r=Ii(e,e===ie?ue:0);if(r===0)n!==null&&mu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&mu(n),t===1)e.tag===0?am(ls.bind(null,e)):Fc(ls.bind(null,e)),rm(function(){(M&6)===0&&Pt()}),n=null;else{switch(uc(r)){case 1:n=ma;break;case 4:n=oc;break;case 16:n=Ti;break;case 536870912:n=lc;break;default:n=Ti}n=Ff(n,Tf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Tf(e,t){if(mi=-1,hi=0,(M&6)!==0)throw Error(E(327));var n=e.callbackNode;if(kn()&&e.callbackNode!==n)return null;var r=Ii(e,e===ie?ue:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Qi(e,r);else{t=r;var i=M;M|=2;var o=Nf();(ie!==e||ue!==t)&&(tt=null,In=J()+500,Bt(e,t));do try{Nm();break}catch(a){If(e,a)}while(1);Ia(),Vi.current=o,M=i,Z!==null?t=0:(ie=null,ue=0,t=ee)}if(t!==0){if(t===2&&(i=Sl(e),i!==0&&(r=i,t=Wl(e,i))),t===1)throw n=Tr,Bt(e,0),vt(e,r),Ee(e,J()),n;if(t===6)vt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Tm(i)&&(t=Qi(e,r),t===2&&(o=Sl(e),o!==0&&(r=o,t=Wl(e,o))),t===1))throw n=Tr,Bt(e,0),vt(e,r),Ee(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Mt(e,ye,tt);break;case 3:if(vt(e,r),(r&130023424)===r&&(t=Va+500-J(),10<t)){if(Ii(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Il(Mt.bind(null,e,ye,tt),t);break}Mt(e,ye,tt);break;case 4:if(vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Qe(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Dm(r/1960))-r,10<r){e.timeoutHandle=Il(Mt.bind(null,e,ye,tt),r);break}Mt(e,ye,tt);break;case 5:Mt(e,ye,tt);break;default:throw Error(E(329))}}}return Ee(e,J()),e.callbackNode===n?Tf.bind(null,e):null}function Wl(e,t){var n=ar;return e.current.memoizedState.isDehydrated&&(Bt(e,t).flags|=256),e=Qi(e,t),e!==2&&(t=ye,ye=n,t!==null&&Yl(t)),e}function Yl(e){ye===null?ye=e:ye.push.apply(ye,e)}function Tm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!We(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vt(e,t){for(t&=~Ba,t&=~lo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Qe(t),r=1<<n;e[n]=-1,t&=~r}}function ls(e){if((M&6)!==0)throw Error(E(327));kn();var t=Ii(e,0);if((t&1)===0)return Ee(e,J()),null;var n=Qi(e,t);if(e.tag!==0&&n===2){var r=Sl(e);r!==0&&(t=r,n=Wl(e,r))}if(n===1)throw n=Tr,Bt(e,0),vt(e,t),Ee(e,J()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mt(e,ye,tt),Ee(e,J()),null}function Ga(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(In=J()+500,no&&Pt())}}function Yt(e){St!==null&&St.tag===0&&(M&6)===0&&kn();var t=M;M|=1;var n=Le.transition,r=z;try{if(Le.transition=null,z=1,e)return e()}finally{z=r,Le.transition=n,M=t,(M&6)===0&&Pt()}}function qa(){xe=pn.current,V(pn)}function Bt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,nm(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(xa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pi();break;case 3:Dn(),V(we),V(pe),Fa();break;case 5:Pa(r);break;case 4:Dn();break;case 13:V(Q);break;case 19:V(Q);break;case 10:Na(r.type._context);break;case 22:case 23:qa()}n=n.return}if(ie=e,Z=e=It(e.current,null),ue=xe=t,ee=0,Tr=null,Ba=lo=Wt=0,ye=ar=null,Ut!==null){for(t=0;t<Ut.length;t++)if(n=Ut[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Ut=null}return e}function If(e,t){do{var n=Z;try{if(Ia(),fi.current=Bi,ji){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ji=!1}if(Ht=0,ne=b=H=null,or=!1,Er=0,ja.current=null,n===null||n.return===null){ee=1,Tr=t,Z=null;break}e:{var o=e,l=n.return,a=n,u=t;if(t=ue,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,g=a,h=g.tag;if((g.mode&1)===0&&(h===0||h===11||h===15)){var p=g.alternate;p?(g.updateQueue=p.updateQueue,g.memoizedState=p.memoizedState,g.lanes=p.lanes):(g.updateQueue=null,g.memoizedState=null)}var S=Wu(l);if(S!==null){S.flags&=-257,Yu(S,l,a,o,t),S.mode&1&&Hu(o,c,t),t=S,u=c;var v=t.updateQueue;if(v===null){var k=new Set;k.add(u),t.updateQueue=k}else v.add(u);break e}else{if((t&1)===0){Hu(o,c,t),Qa();break e}u=Error(E(426))}}else if(q&&a.mode&1){var _=Wu(l);if(_!==null){(_.flags&65536)===0&&(_.flags|=256),Yu(_,l,a,o,t),Da(Tn(u,a));break e}}o=u=Tn(u,a),ee!==4&&(ee=2),ar===null?ar=[o]:ar.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=cf(o,u,t);Uu(o,f);break e;case 1:a=u;var s=o.type,d=o.stateNode;if((o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Dt===null||!Dt.has(d)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=ff(o,a,t);Uu(o,y);break e}}o=o.return}while(o!==null)}Cf(n)}catch(x){t=x,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(1)}function Nf(){var e=Vi.current;return Vi.current=Bi,e===null?Bi:e}function Qa(){(ee===0||ee===3||ee===2)&&(ee=4),ie===null||(Wt&268435455)===0&&(lo&268435455)===0||vt(ie,ue)}function Qi(e,t){var n=M;M|=2;var r=Nf();(ie!==e||ue!==t)&&(tt=null,Bt(e,t));do try{Im();break}catch(i){If(e,i)}while(1);if(Ia(),M=n,Vi.current=r,Z!==null)throw Error(E(261));return ie=null,ue=0,ee}function Im(){for(;Z!==null;)$f(Z)}function Nm(){for(;Z!==null&&!bd();)$f(Z)}function $f(e){var t=Pf(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?Cf(e):Z=t,ja.current=null}function Cf(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=km(n,t,xe),n!==null){Z=n;return}}else{if(n=wm(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,Z=null;return}}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);ee===0&&(ee=5)}function Mt(e,t,n){var r=z,i=Le.transition;try{Le.transition=null,z=1,$m(e,t,n,r)}finally{Le.transition=i,z=r}return null}function $m(e,t,n,r){do kn();while(St!==null);if((M&6)!==0)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(sp(e,o),e===ie&&(Z=ie=null,ue=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ni||(ni=!0,Ff(Ti,function(){return kn(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=Le.transition,Le.transition=null;var l=z;z=1;var a=M;M|=4,ja.current=null,Em(e,n),xf(n,e),Jp(Dl),Ni=!!xl,Dl=xl=null,e.current=n,xm(n),ep(),M=a,z=l,Le.transition=o}else e.current=n;if(ni&&(ni=!1,St=e,qi=i),o=e.pendingLanes,o===0&&(Dt=null),rp(n.stateNode),Ee(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gi)throw Gi=!1,e=Ql,Ql=null,e;return(qi&1)!==0&&e.tag!==0&&kn(),o=e.pendingLanes,(o&1)!==0?e===Hl?ur++:(ur=0,Hl=e):ur=0,Pt(),null}function kn(){if(St!==null){var e=uc(qi),t=Le.transition,n=z;try{if(Le.transition=null,z=16>e?16:e,St===null)var r=!1;else{if(e=St,St=null,qi=0,(M&6)!==0)throw Error(E(331));var i=M;for(M|=4,T=e.current;T!==null;){var o=T,l=o.child;if((T.flags&16)!==0){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(T=c;T!==null;){var g=T;switch(g.tag){case 0:case 11:case 15:lr(8,g,o)}var h=g.child;if(h!==null)h.return=g,T=h;else for(;T!==null;){g=T;var p=g.sibling,S=g.return;if(wf(g),g===c){T=null;break}if(p!==null){p.return=S,T=p;break}T=S}}}var v=o.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var _=k.sibling;k.sibling=null,k=_}while(k!==null)}}T=o}}if((o.subtreeFlags&2064)!==0&&l!==null)l.return=o,T=l;else e:for(;T!==null;){if(o=T,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:lr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,T=f;break e}T=o.return}}var s=e.current;for(T=s;T!==null;){l=T;var d=l.child;if((l.subtreeFlags&2064)!==0&&d!==null)d.return=l,T=d;else e:for(l=s;T!==null;){if(a=T,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:oo(9,a)}}catch(x){Y(a,a.return,x)}if(a===l){T=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,T=y;break e}T=a.return}}if(M=i,Pt(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Ki,e)}catch{}r=!0}return r}finally{z=n,Le.transition=t}}return!1}function as(e,t,n){t=Tn(n,t),t=cf(e,t,1),e=xt(e,t,1),t=he(),e!==null&&(Pr(e,1,t),Ee(e,t))}function Y(e,t,n){if(e.tag===3)as(e,e,n);else for(;t!==null;){if(t.tag===3){as(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dt===null||!Dt.has(r))){e=Tn(n,e),e=ff(t,e,1),t=xt(t,e,1),e=he(),t!==null&&(Pr(t,1,e),Ee(t,e));break}}t=t.return}}function Cm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(ue&n)===n&&(ee===4||ee===3&&(ue&130023424)===ue&&500>J()-Va?Bt(e,0):Ba|=n),Ee(e,t)}function Of(e,t){t===0&&((e.mode&1)===0?t=1:(t=Hr,Hr<<=1,(Hr&130023424)===0&&(Hr=4194304)));var n=he();e=ut(e,t),e!==null&&(Pr(e,t,n),Ee(e,n))}function Om(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Of(e,n)}function Pm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Of(e,n)}var Pf;Pf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)ke=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ke=!1,Sm(e,t,n);ke=(e.flags&131072)!==0}else ke=!1,q&&(t.flags&1048576)!==0&&Lc(t,Ai,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;pi(e,t),e=t.pendingProps;var i=_n(t,pe.current);Sn(t,n),i=Aa(null,t,r,e,i,n);var o=Ra();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(o=!0,Fi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ca(t),i.updater=ro,t.stateNode=i,i._reactInternals=t,Ll(t,r,e,n),t=Ml(null,t,r,!0,o,n)):(t.tag=0,q&&o&&Ea(t),me(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(pi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Lm(r),e=Be(r,e),i){case 0:t=Rl(null,t,r,e,n);break e;case 1:t=Ku(null,t,r,e,n);break e;case 11:t=Ju(null,t,r,e,n);break e;case 14:t=Xu(null,t,r,Be(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),Rl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),Ku(e,t,r,i,n);case 3:e:{if(hf(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,zc(e,t),zi(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Tn(Error(E(423)),t),t=Zu(e,t,r,n,i);break e}else if(r!==i){i=Tn(Error(E(424)),t),t=Zu(e,t,r,n,i);break e}else for(De=Et(t.stateNode.containerInfo.firstChild),Te=t,q=!0,Ge=null,n=Vc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(En(),r===i){t=st(e,t,n);break e}me(e,t,r,n)}t=t.child}return t;case 5:return Gc(t),e===null&&Ol(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Tl(r,i)?l=null:o!==null&&Tl(r,o)&&(t.flags|=32),mf(e,t),me(e,t,l,n),t.child;case 6:return e===null&&Ol(t),null;case 13:return gf(e,t,n);case 4:return Oa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xn(t,null,r,n):me(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),Ju(e,t,r,i,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,j(Ri,r._currentValue),r._currentValue=l,o!==null)if(We(o.value,l)){if(o.children===i.children&&!we.current){t=st(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=ot(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?u.next=u:(u.next=g.next,g.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Pl(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(E(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Pl(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}me(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Sn(t,n),i=Re(i),r=r(i),t.flags|=1,me(e,t,r,n),t.child;case 14:return r=t.type,i=Be(r,t.pendingProps),i=Be(r.type,i),Xu(e,t,r,i,n);case 15:return df(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Be(r,i),pi(e,t),t.tag=1,_e(r)?(e=!0,Fi(t)):e=!1,Sn(t,n),jc(t,r,i),Ll(t,r,i,n),Ml(null,t,r,!0,e,n);case 19:return vf(e,t,n);case 22:return pf(e,t,n)}throw Error(E(156,t.tag))};function Ff(e,t){return ic(e,t)}function Fm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pe(e,t,n,r){return new Fm(e,t,n,r)}function Ha(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lm(e){if(typeof e=="function")return Ha(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fa)return 11;if(e===da)return 14}return 2}function It(e,t){var n=e.alternate;return n===null?(n=Pe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function gi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Ha(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case nn:return Vt(n.children,i,o,t);case ca:l=8,i|=8;break;case il:return e=Pe(12,n,t,i|2),e.elementType=il,e.lanes=o,e;case ol:return e=Pe(13,n,t,i),e.elementType=ol,e.lanes=o,e;case ll:return e=Pe(19,n,t,i),e.elementType=ll,e.lanes=o,e;case Bs:return ao(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Us:l=10;break e;case js:l=9;break e;case fa:l=11;break e;case da:l=14;break e;case mt:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=Pe(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Vt(e,t,n,r){return e=Pe(7,e,r,t),e.lanes=n,e}function ao(e,t,n,r){return e=Pe(22,e,r,t),e.elementType=Bs,e.lanes=n,e.stateNode={isHidden:!1},e}function Ho(e,t,n){return e=Pe(6,e,null,t),e.lanes=n,e}function Wo(e,t,n){return t=Pe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Am(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Io(0),this.expirationTimes=Io(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Io(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wa(e,t,n,r,i,o,l,a,u){return e=new Am(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Pe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ca(o),e}function Rm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Lf(e){if(!e)return $t;e=e._reactInternals;e:{if(Zt(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(_e(n))return Pc(e,n,t)}return t}function Af(e,t,n,r,i,o,l,a,u){return e=Wa(n,r,!0,e,i,o,l,a,u),e.context=Lf(null),n=e.current,r=he(),i=Tt(n),o=ot(r,i),o.callback=t!=null?t:null,xt(n,o,i),e.current.lanes=i,Pr(e,i,r),Ee(e,r),e}function uo(e,t,n,r){var i=t.current,o=he(),l=Tt(i);return n=Lf(n),t.context===null?t.context=n:t.pendingContext=n,t=ot(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xt(i,t,l),e!==null&&(He(e,i,l,o),ci(e,i,l)),l}function Hi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function us(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ya(e,t){us(e,t),(e=e.alternate)&&us(e,t)}function Mm(){return null}var Rf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ja(e){this._internalRoot=e}so.prototype.render=Ja.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));uo(e,t,null,null)};so.prototype.unmount=Ja.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Yt(function(){uo(null,e,null,null)}),t[at]=null}};function so(e){this._internalRoot=e}so.prototype.unstable_scheduleHydration=function(e){if(e){var t=fc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gt.length&&t!==0&&t<gt[n].priority;n++);gt.splice(n,0,e),n===0&&pc(e)}};function Xa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function co(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ss(){}function zm(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Hi(l);o.call(c)}}var l=Af(t,r,e,0,null,!1,!1,"",ss);return e._reactRootContainer=l,e[at]=l.current,yr(e.nodeType===8?e.parentNode:e),Yt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Hi(u);a.call(c)}}var u=Wa(e,0,!1,null,null,!1,!1,"",ss);return e._reactRootContainer=u,e[at]=u.current,yr(e.nodeType===8?e.parentNode:e),Yt(function(){uo(t,u,n,r)}),u}function fo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var u=Hi(l);a.call(u)}}uo(t,l,e,i)}else l=zm(n,t,e,i,r);return Hi(l)}sc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xn(t.pendingLanes);n!==0&&(ha(t,n|1),Ee(t,J()),(M&6)===0&&(In=J()+500,Pt()))}break;case 13:Yt(function(){var r=ut(e,1);if(r!==null){var i=he();He(r,e,1,i)}}),Ya(e,1)}};ga=function(e){if(e.tag===13){var t=ut(e,134217728);if(t!==null){var n=he();He(t,e,134217728,n)}Ya(e,134217728)}};cc=function(e){if(e.tag===13){var t=Tt(e),n=ut(e,t);if(n!==null){var r=he();He(n,e,t,r)}Ya(e,t)}};fc=function(){return z};dc=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};gl=function(e,t,n){switch(t){case"input":if(sl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=to(r);if(!i)throw Error(E(90));Gs(r),sl(r,i)}}}break;case"textarea":Qs(e,n);break;case"select":t=n.value,t!=null&&hn(e,!!n.multiple,t,!1)}};Zs=Ga;bs=Yt;var Um={usingClientEntryPoint:!1,Events:[Lr,an,to,Xs,Ks,Ga]},Hn={findFiberByHostInstance:zt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},jm={bundleType:Hn.bundleType,version:Hn.version,rendererPackageName:Hn.rendererPackageName,rendererConfig:Hn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=nc(e),e===null?null:e.stateNode},findFiberByHostInstance:Hn.findFiberByHostInstance||Mm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ri.isDisabled&&ri.supportsFiber)try{Ki=ri.inject(jm),Ke=ri}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Um;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xa(t))throw Error(E(200));return Rm(e,t,null,n)};Ne.createRoot=function(e,t){if(!Xa(e))throw Error(E(299));var n=!1,r="",i=Rf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Wa(e,1,!1,null,null,n,!1,r,i),e[at]=t.current,yr(e.nodeType===8?e.parentNode:e),new Ja(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=nc(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return Yt(e)};Ne.hydrate=function(e,t,n){if(!co(t))throw Error(E(200));return fo(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!Xa(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Rf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Af(t,null,e,1,n!=null?n:null,i,!1,o,l),e[at]=t.current,yr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new so(t)};Ne.render=function(e,t,n){if(!co(t))throw Error(E(200));return fo(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!co(e))throw Error(E(40));return e._reactRootContainer?(Yt(function(){fo(null,null,e,!1,function(){e._reactRootContainer=null,e[at]=null})}),!0):!1};Ne.unstable_batchedUpdates=Ga;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!co(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return fo(e,t,n,!1,r)};Ne.version="18.2.0-next-9e3b772b8-20220608";function Mf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mf)}catch(e){console.error(e)}}Mf(),Ls.exports=Ne;var cs=Ls.exports;nl.createRoot=cs.createRoot,nl.hydrateRoot=cs.hydrateRoot;function vi(e,t){if(!Boolean(e))throw new Error(t)}const Bm=10,zf=2;function Uf(e){return po(e,[])}function po(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return Vm(e,t);default:return String(e)}}function Vm(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";const n=[...t,e];if(Gm(e)){const r=e.toJSON();if(r!==e)return typeof r=="string"?r:po(r,n)}else if(Array.isArray(e))return Qm(e,n);return qm(e,n)}function Gm(e){return typeof e.toJSON=="function"}function qm(e,t){const n=Object.entries(e);if(n.length===0)return"{}";if(t.length>zf)return"["+Hm(e)+"]";const r=n.map(([i,o])=>i+": "+po(o,t));return"{ "+r.join(", ")+" }"}function Qm(e,t){if(e.length===0)return"[]";if(t.length>zf)return"[Array]";const n=Math.min(Bm,e.length),r=e.length-n,i=[];for(let o=0;o<n;++o)i.push(po(e[o],t));return r===1?i.push("... 1 more item"):r>1&&i.push(`... ${r} more items`),"["+i.join(", ")+"]"}function Hm(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){const n=e.constructor.name;if(typeof n=="string"&&n!=="")return n}return t}class Wm{constructor(t,n,r){this.start=t.start,this.end=n.end,this.startToken=t,this.endToken=n,this.source=r}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class jf{constructor(t,n,r,i,o,l){this.kind=t,this.start=n,this.end=r,this.line=i,this.column=o,this.value=l,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const Bf={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},Ym=new Set(Object.keys(Bf));function fs(e){const t=e==null?void 0:e.kind;return typeof t=="string"&&Ym.has(t)}let mn;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(mn||(mn={}));let O;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(O||(O={}));const Jm=Object.freeze({});function Vf(e,t,n=Bf){const r=new Map;for(const f of Object.values(O))r.set(f,Xm(t,f));let i,o=Array.isArray(e),l=[e],a=-1,u=[],c=e,g,h;const p=[],S=[];do{a++;const f=a===l.length,s=f&&u.length!==0;if(f){if(g=S.length===0?void 0:p[p.length-1],c=h,h=S.pop(),s)if(o){c=c.slice();let y=0;for(const[x,N]of u){const I=x-y;N===null?(c.splice(I,1),y++):c[I]=N}}else{c=Object.defineProperties({},Object.getOwnPropertyDescriptors(c));for(const[y,x]of u)c[y]=x}a=i.index,l=i.keys,u=i.edits,o=i.inArray,i=i.prev}else if(h){if(g=o?a:l[a],c=h[g],c==null)continue;p.push(g)}let d;if(!Array.isArray(c)){var v,k;fs(c)||vi(!1,`Invalid AST Node: ${Uf(c)}.`);const y=f?(v=r.get(c.kind))===null||v===void 0?void 0:v.leave:(k=r.get(c.kind))===null||k===void 0?void 0:k.enter;if(d=y==null?void 0:y.call(t,c,g,h,p,S),d===Jm)break;if(d===!1){if(!f){p.pop();continue}}else if(d!==void 0&&(u.push([g,d]),!f))if(fs(d))c=d;else{p.pop();continue}}if(d===void 0&&s&&u.push([g,c]),f)p.pop();else{var _;i={inArray:o,index:a,keys:l,edits:u,prev:i},o=Array.isArray(c),l=o?c:(_=n[c.kind])!==null&&_!==void 0?_:[],a=-1,u=[],h&&S.push(h),h=c}}while(i!==void 0);return u.length!==0?u[u.length-1][1]:e}function Xm(e,t){const n=e[t];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:e.enter,leave:e.leave}}function Jl(e){return e===9||e===32}function Ir(e){return e>=48&&e<=57}function Gf(e){return e>=97&&e<=122||e>=65&&e<=90}function qf(e){return Gf(e)||e===95}function Km(e){return Gf(e)||Ir(e)||e===95}function Zm(e){var t;let n=Number.MAX_SAFE_INTEGER,r=null,i=-1;for(let l=0;l<e.length;++l){var o;const a=e[l],u=bm(a);u!==a.length&&(r=(o=r)!==null&&o!==void 0?o:l,i=l,l!==0&&u<n&&(n=u))}return e.map((l,a)=>a===0?l:l.slice(n)).slice((t=r)!==null&&t!==void 0?t:0,i+1)}function bm(e){let t=0;for(;t<e.length&&Jl(e.charCodeAt(t));)++t;return t}function eh(e,t){const n=e.replace(/"""/g,'\\"""'),r=n.split(/\r\n|[\n\r]/g),i=r.length===1,o=r.length>1&&r.slice(1).every(S=>S.length===0||Jl(S.charCodeAt(0))),l=n.endsWith('\\"""'),a=e.endsWith('"')&&!l,u=e.endsWith("\\"),c=a||u,g=!(t!=null&&t.minimize)&&(!i||e.length>70||c||o||l);let h="";const p=i&&Jl(e.charCodeAt(0));return(g&&!p||o)&&(h+=`
`),h+=n,(g||c)&&(h+=`
`),'"""'+h+'"""'}function th(e){return`"${e.replace(nh,rh)}"`}const nh=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function rh(e){return ih[e.charCodeAt(0)]}const ih=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"];function Qf(e){return Vf(e,lh)}const oh=80,lh={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>$(e.definitions,`

`)},OperationDefinition:{leave(e){const t=A("(",$(e.variableDefinitions,", "),")"),n=$([e.operation,$([e.name,t]),$(e.directives," ")]," ");return(n==="query"?"":n+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:n,directives:r})=>e+": "+t+A(" = ",n)+A(" ",$(r," "))},SelectionSet:{leave:({selections:e})=>je(e)},Field:{leave({alias:e,name:t,arguments:n,directives:r,selectionSet:i}){const o=A("",e,": ")+t;let l=o+A("(",$(n,", "),")");return l.length>oh&&(l=o+A(`(
`,yi($(n,`
`)),`
)`)),$([l,$(r," "),i]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+A(" ",$(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:n})=>$(["...",A("on ",e),$(t," "),n]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:n,directives:r,selectionSet:i})=>`fragment ${e}${A("(",$(n,", "),")")} on ${t} ${A("",$(r," ")," ")}`+i},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?eh(e):th(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+$(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+$(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+A("(",$(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:n})=>A("",e,`
`)+$(["schema",$(t," "),je(n)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:n})=>A("",e,`
`)+$(["scalar",t,$(n," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:i})=>A("",e,`
`)+$(["type",t,A("implements ",$(n," & ")),$(r," "),je(i)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:n,type:r,directives:i})=>A("",e,`
`)+t+(ds(n)?A(`(
`,yi($(n,`
`)),`
)`):A("(",$(n,", "),")"))+": "+r+A(" ",$(i," "))},InputValueDefinition:{leave:({description:e,name:t,type:n,defaultValue:r,directives:i})=>A("",e,`
`)+$([t+": "+n,A("= ",r),$(i," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:i})=>A("",e,`
`)+$(["interface",t,A("implements ",$(n," & ")),$(r," "),je(i)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:n,types:r})=>A("",e,`
`)+$(["union",t,$(n," "),A("= ",$(r," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:n,values:r})=>A("",e,`
`)+$(["enum",t,$(n," "),je(r)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:n})=>A("",e,`
`)+$([t,$(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:n,fields:r})=>A("",e,`
`)+$(["input",t,$(n," "),je(r)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:n,repeatable:r,locations:i})=>A("",e,`
`)+"directive @"+t+(ds(n)?A(`(
`,yi($(n,`
`)),`
)`):A("(",$(n,", "),")"))+(r?" repeatable":"")+" on "+$(i," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>$(["extend schema",$(e," "),je(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>$(["extend scalar",e,$(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>$(["extend type",e,A("implements ",$(t," & ")),$(n," "),je(r)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>$(["extend interface",e,A("implements ",$(t," & ")),$(n," "),je(r)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:n})=>$(["extend union",e,$(t," "),A("= ",$(n," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:n})=>$(["extend enum",e,$(t," "),je(n)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:n})=>$(["extend input",e,$(t," "),je(n)]," ")}};function $(e,t=""){var n;return(n=e==null?void 0:e.filter(r=>r).join(t))!==null&&n!==void 0?n:""}function je(e){return A(`{
`,yi($(e,`
`)),`
}`)}function A(e,t,n=""){return t!=null&&t!==""?e+t+n:""}function yi(e){return A("  ",e.replace(/\n/g,`
  `))}function ds(e){var t;return(t=e==null?void 0:e.some(n=>n.includes(`
`)))!==null&&t!==void 0?t:!1}function ah(e){return typeof e=="object"&&e!==null}function uh(e,t){if(!Boolean(e))throw new Error(t!=null?t:"Unexpected invariant triggered.")}const sh=/\r\n|[\n\r]/g;function Xl(e,t){let n=0,r=1;for(const i of e.body.matchAll(sh)){if(typeof i.index=="number"||uh(!1),i.index>=t)break;n=i.index+i[0].length,r+=1}return{line:r,column:t+1-n}}function ch(e){return Hf(e.source,Xl(e.source,e.start))}function Hf(e,t){const n=e.locationOffset.column-1,r="".padStart(n)+e.body,i=t.line-1,o=e.locationOffset.line-1,l=t.line+o,a=t.line===1?n:0,u=t.column+a,c=`${e.name}:${l}:${u}
`,g=r.split(/\r\n|[\n\r]/g),h=g[i];if(h.length>120){const p=Math.floor(u/80),S=u%80,v=[];for(let k=0;k<h.length;k+=80)v.push(h.slice(k,k+80));return c+ps([[`${l} |`,v[0]],...v.slice(1,p+1).map(k=>["|",k]),["|","^".padStart(S)],["|",v[p+1]]])}return c+ps([[`${l-1} |`,g[i-1]],[`${l} |`,h],["|","^".padStart(u)],[`${l+1} |`,g[i+1]]])}function ps(e){const t=e.filter(([r,i])=>i!==void 0),n=Math.max(...t.map(([r])=>r.length));return t.map(([r,i])=>r.padStart(n)+(i?" "+i:"")).join(`
`)}function fh(e){const t=e[0];return t==null||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}class Nr extends Error{constructor(t,...n){var r,i,o;const{nodes:l,source:a,positions:u,path:c,originalError:g,extensions:h}=fh(n);super(t),this.name="GraphQLError",this.path=c!=null?c:void 0,this.originalError=g!=null?g:void 0,this.nodes=ms(Array.isArray(l)?l:l?[l]:void 0);const p=ms((r=this.nodes)===null||r===void 0?void 0:r.map(v=>v.loc).filter(v=>v!=null));this.source=a!=null?a:p==null||(i=p[0])===null||i===void 0?void 0:i.source,this.positions=u!=null?u:p==null?void 0:p.map(v=>v.start),this.locations=u&&a?u.map(v=>Xl(a,v)):p==null?void 0:p.map(v=>Xl(v.source,v.start));const S=ah(g==null?void 0:g.extensions)?g==null?void 0:g.extensions:void 0;this.extensions=(o=h!=null?h:S)!==null&&o!==void 0?o:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),g!=null&&g.stack?Object.defineProperty(this,"stack",{value:g.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,Nr):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let t=this.message;if(this.nodes)for(const n of this.nodes)n.loc&&(t+=`

`+ch(n.loc));else if(this.source&&this.locations)for(const n of this.locations)t+=`

`+Hf(this.source,n);return t}toJSON(){const t={message:this.message};return this.locations!=null&&(t.locations=this.locations),this.path!=null&&(t.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(t.extensions=this.extensions),t}}function ms(e){return e===void 0||e.length===0?void 0:e}function ae(e,t,n){return new Nr(`Syntax Error: ${n}`,{source:e,positions:[t]})}let Kl;(function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(Kl||(Kl={}));let w;(function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"})(w||(w={}));class dh{constructor(t){const n=new jf(w.SOF,0,0,0,0);this.source=t,this.lastToken=n,this.token=n,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let t=this.token;if(t.kind!==w.EOF)do if(t.next)t=t.next;else{const n=mh(this,t.end);t.next=n,n.prev=t,t=n}while(t.kind===w.COMMENT);return t}}function ph(e){return e===w.BANG||e===w.DOLLAR||e===w.AMP||e===w.PAREN_L||e===w.PAREN_R||e===w.SPREAD||e===w.COLON||e===w.EQUALS||e===w.AT||e===w.BRACKET_L||e===w.BRACKET_R||e===w.BRACE_L||e===w.PIPE||e===w.BRACE_R}function Pn(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function mo(e,t){return Wf(e.charCodeAt(t))&&Yf(e.charCodeAt(t+1))}function Wf(e){return e>=55296&&e<=56319}function Yf(e){return e>=56320&&e<=57343}function Jt(e,t){const n=e.source.body.codePointAt(t);if(n===void 0)return w.EOF;if(n>=32&&n<=126){const r=String.fromCodePoint(n);return r==='"'?`'"'`:`"${r}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function K(e,t,n,r,i){const o=e.line,l=1+n-e.lineStart;return new jf(t,n,r,o,l,i)}function mh(e,t){const n=e.source.body,r=n.length;let i=t;for(;i<r;){const o=n.charCodeAt(i);switch(o){case 65279:case 9:case 32:case 44:++i;continue;case 10:++i,++e.line,e.lineStart=i;continue;case 13:n.charCodeAt(i+1)===10?i+=2:++i,++e.line,e.lineStart=i;continue;case 35:return hh(e,i);case 33:return K(e,w.BANG,i,i+1);case 36:return K(e,w.DOLLAR,i,i+1);case 38:return K(e,w.AMP,i,i+1);case 40:return K(e,w.PAREN_L,i,i+1);case 41:return K(e,w.PAREN_R,i,i+1);case 46:if(n.charCodeAt(i+1)===46&&n.charCodeAt(i+2)===46)return K(e,w.SPREAD,i,i+3);break;case 58:return K(e,w.COLON,i,i+1);case 61:return K(e,w.EQUALS,i,i+1);case 64:return K(e,w.AT,i,i+1);case 91:return K(e,w.BRACKET_L,i,i+1);case 93:return K(e,w.BRACKET_R,i,i+1);case 123:return K(e,w.BRACE_L,i,i+1);case 124:return K(e,w.PIPE,i,i+1);case 125:return K(e,w.BRACE_R,i,i+1);case 34:return n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34?wh(e,i):vh(e,i)}if(Ir(o)||o===45)return gh(e,i,o);if(qf(o))return _h(e,i);throw ae(e.source,i,o===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:Pn(o)||mo(n,i)?`Unexpected character: ${Jt(e,i)}.`:`Invalid character: ${Jt(e,i)}.`)}return K(e,w.EOF,r,r)}function hh(e,t){const n=e.source.body,r=n.length;let i=t+1;for(;i<r;){const o=n.charCodeAt(i);if(o===10||o===13)break;if(Pn(o))++i;else if(mo(n,i))i+=2;else break}return K(e,w.COMMENT,t,i,n.slice(t+1,i))}function gh(e,t,n){const r=e.source.body;let i=t,o=n,l=!1;if(o===45&&(o=r.charCodeAt(++i)),o===48){if(o=r.charCodeAt(++i),Ir(o))throw ae(e.source,i,`Invalid number, unexpected digit after 0: ${Jt(e,i)}.`)}else i=Yo(e,i,o),o=r.charCodeAt(i);if(o===46&&(l=!0,o=r.charCodeAt(++i),i=Yo(e,i,o),o=r.charCodeAt(i)),(o===69||o===101)&&(l=!0,o=r.charCodeAt(++i),(o===43||o===45)&&(o=r.charCodeAt(++i)),i=Yo(e,i,o),o=r.charCodeAt(i)),o===46||qf(o))throw ae(e.source,i,`Invalid number, expected digit but got: ${Jt(e,i)}.`);return K(e,l?w.FLOAT:w.INT,t,i,r.slice(t,i))}function Yo(e,t,n){if(!Ir(n))throw ae(e.source,t,`Invalid number, expected digit but got: ${Jt(e,t)}.`);const r=e.source.body;let i=t+1;for(;Ir(r.charCodeAt(i));)++i;return i}function vh(e,t){const n=e.source.body,r=n.length;let i=t+1,o=i,l="";for(;i<r;){const a=n.charCodeAt(i);if(a===34)return l+=n.slice(o,i),K(e,w.STRING,t,i+1,l);if(a===92){l+=n.slice(o,i);const u=n.charCodeAt(i+1)===117?n.charCodeAt(i+2)===123?yh(e,i):Sh(e,i):kh(e,i);l+=u.value,i+=u.size,o=i;continue}if(a===10||a===13)break;if(Pn(a))++i;else if(mo(n,i))i+=2;else throw ae(e.source,i,`Invalid character within String: ${Jt(e,i)}.`)}throw ae(e.source,i,"Unterminated string.")}function yh(e,t){const n=e.source.body;let r=0,i=3;for(;i<12;){const o=n.charCodeAt(t+i++);if(o===125){if(i<5||!Pn(r))break;return{value:String.fromCodePoint(r),size:i}}if(r=r<<4|Zn(o),r<0)break}throw ae(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+i)}".`)}function Sh(e,t){const n=e.source.body,r=hs(n,t+2);if(Pn(r))return{value:String.fromCodePoint(r),size:6};if(Wf(r)&&n.charCodeAt(t+6)===92&&n.charCodeAt(t+7)===117){const i=hs(n,t+8);if(Yf(i))return{value:String.fromCodePoint(r,i),size:12}}throw ae(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}function hs(e,t){return Zn(e.charCodeAt(t))<<12|Zn(e.charCodeAt(t+1))<<8|Zn(e.charCodeAt(t+2))<<4|Zn(e.charCodeAt(t+3))}function Zn(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function kh(e,t){const n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw ae(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}function wh(e,t){const n=e.source.body,r=n.length;let i=e.lineStart,o=t+3,l=o,a="";const u=[];for(;o<r;){const c=n.charCodeAt(o);if(c===34&&n.charCodeAt(o+1)===34&&n.charCodeAt(o+2)===34){a+=n.slice(l,o),u.push(a);const g=K(e,w.BLOCK_STRING,t,o+3,Zm(u).join(`
`));return e.line+=u.length-1,e.lineStart=i,g}if(c===92&&n.charCodeAt(o+1)===34&&n.charCodeAt(o+2)===34&&n.charCodeAt(o+3)===34){a+=n.slice(l,o),l=o+1,o+=4;continue}if(c===10||c===13){a+=n.slice(l,o),u.push(a),c===13&&n.charCodeAt(o+1)===10?o+=2:++o,a="",l=o,i=o;continue}if(Pn(c))++o;else if(mo(n,o))o+=2;else throw ae(e.source,o,`Invalid character within String: ${Jt(e,o)}.`)}throw ae(e.source,o,"Unterminated string.")}function _h(e,t){const n=e.source.body,r=n.length;let i=t+1;for(;i<r;){const o=n.charCodeAt(i);if(Km(o))++i;else break}return K(e,w.NAME,t,i,n.slice(t,i))}const Eh=function(t,n){return t instanceof n};class Jf{constructor(t,n="GraphQL request",r={line:1,column:1}){typeof t=="string"||vi(!1,`Body must be a string. Received: ${Uf(t)}.`),this.body=t,this.name=n,this.locationOffset=r,this.locationOffset.line>0||vi(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||vi(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function xh(e){return Eh(e,Jf)}function Xf(e,t){return new Dh(e,t).parseDocument()}class Dh{constructor(t,n){const r=xh(t)?t:new Jf(t);this._lexer=new dh(r),this._options=n}parseName(){const t=this.expectToken(w.NAME);return this.node(t,{kind:O.NAME,value:t.value})}parseDocument(){return this.node(this._lexer.token,{kind:O.DOCUMENT,definitions:this.many(w.SOF,this.parseDefinition,w.EOF)})}parseDefinition(){if(this.peek(w.BRACE_L))return this.parseOperationDefinition();const t=this.peekDescription(),n=t?this._lexer.lookahead():this._lexer.token;if(n.kind===w.NAME){switch(n.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(t)throw ae(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(n.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(n)}parseOperationDefinition(){const t=this._lexer.token;if(this.peek(w.BRACE_L))return this.node(t,{kind:O.OPERATION_DEFINITION,operation:mn.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const n=this.parseOperationType();let r;return this.peek(w.NAME)&&(r=this.parseName()),this.node(t,{kind:O.OPERATION_DEFINITION,operation:n,name:r,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const t=this.expectToken(w.NAME);switch(t.value){case"query":return mn.QUERY;case"mutation":return mn.MUTATION;case"subscription":return mn.SUBSCRIPTION}throw this.unexpected(t)}parseVariableDefinitions(){return this.optionalMany(w.PAREN_L,this.parseVariableDefinition,w.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:O.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(w.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(w.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const t=this._lexer.token;return this.expectToken(w.DOLLAR),this.node(t,{kind:O.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:O.SELECTION_SET,selections:this.many(w.BRACE_L,this.parseSelection,w.BRACE_R)})}parseSelection(){return this.peek(w.SPREAD)?this.parseFragment():this.parseField()}parseField(){const t=this._lexer.token,n=this.parseName();let r,i;return this.expectOptionalToken(w.COLON)?(r=n,i=this.parseName()):i=n,this.node(t,{kind:O.FIELD,alias:r,name:i,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(w.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(t){const n=t?this.parseConstArgument:this.parseArgument;return this.optionalMany(w.PAREN_L,n,w.PAREN_R)}parseArgument(t=!1){const n=this._lexer.token,r=this.parseName();return this.expectToken(w.COLON),this.node(n,{kind:O.ARGUMENT,name:r,value:this.parseValueLiteral(t)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const t=this._lexer.token;this.expectToken(w.SPREAD);const n=this.expectOptionalKeyword("on");return!n&&this.peek(w.NAME)?this.node(t,{kind:O.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(t,{kind:O.INLINE_FRAGMENT,typeCondition:n?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){var t;const n=this._lexer.token;return this.expectKeyword("fragment"),((t=this._options)===null||t===void 0?void 0:t.allowLegacyFragmentVariables)===!0?this.node(n,{kind:O.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(n,{kind:O.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(t){const n=this._lexer.token;switch(n.kind){case w.BRACKET_L:return this.parseList(t);case w.BRACE_L:return this.parseObject(t);case w.INT:return this._lexer.advance(),this.node(n,{kind:O.INT,value:n.value});case w.FLOAT:return this._lexer.advance(),this.node(n,{kind:O.FLOAT,value:n.value});case w.STRING:case w.BLOCK_STRING:return this.parseStringLiteral();case w.NAME:switch(this._lexer.advance(),n.value){case"true":return this.node(n,{kind:O.BOOLEAN,value:!0});case"false":return this.node(n,{kind:O.BOOLEAN,value:!1});case"null":return this.node(n,{kind:O.NULL});default:return this.node(n,{kind:O.ENUM,value:n.value})}case w.DOLLAR:if(t)if(this.expectToken(w.DOLLAR),this._lexer.token.kind===w.NAME){const r=this._lexer.token.value;throw ae(this._lexer.source,n.start,`Unexpected variable "$${r}" in constant value.`)}else throw this.unexpected(n);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const t=this._lexer.token;return this._lexer.advance(),this.node(t,{kind:O.STRING,value:t.value,block:t.kind===w.BLOCK_STRING})}parseList(t){const n=()=>this.parseValueLiteral(t);return this.node(this._lexer.token,{kind:O.LIST,values:this.any(w.BRACKET_L,n,w.BRACKET_R)})}parseObject(t){const n=()=>this.parseObjectField(t);return this.node(this._lexer.token,{kind:O.OBJECT,fields:this.any(w.BRACE_L,n,w.BRACE_R)})}parseObjectField(t){const n=this._lexer.token,r=this.parseName();return this.expectToken(w.COLON),this.node(n,{kind:O.OBJECT_FIELD,name:r,value:this.parseValueLiteral(t)})}parseDirectives(t){const n=[];for(;this.peek(w.AT);)n.push(this.parseDirective(t));return n}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(t){const n=this._lexer.token;return this.expectToken(w.AT),this.node(n,{kind:O.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(t)})}parseTypeReference(){const t=this._lexer.token;let n;if(this.expectOptionalToken(w.BRACKET_L)){const r=this.parseTypeReference();this.expectToken(w.BRACKET_R),n=this.node(t,{kind:O.LIST_TYPE,type:r})}else n=this.parseNamedType();return this.expectOptionalToken(w.BANG)?this.node(t,{kind:O.NON_NULL_TYPE,type:n}):n}parseNamedType(){return this.node(this._lexer.token,{kind:O.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(w.STRING)||this.peek(w.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("schema");const r=this.parseConstDirectives(),i=this.many(w.BRACE_L,this.parseOperationTypeDefinition,w.BRACE_R);return this.node(t,{kind:O.SCHEMA_DEFINITION,description:n,directives:r,operationTypes:i})}parseOperationTypeDefinition(){const t=this._lexer.token,n=this.parseOperationType();this.expectToken(w.COLON);const r=this.parseNamedType();return this.node(t,{kind:O.OPERATION_TYPE_DEFINITION,operation:n,type:r})}parseScalarTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("scalar");const r=this.parseName(),i=this.parseConstDirectives();return this.node(t,{kind:O.SCALAR_TYPE_DEFINITION,description:n,name:r,directives:i})}parseObjectTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("type");const r=this.parseName(),i=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(t,{kind:O.OBJECT_TYPE_DEFINITION,description:n,name:r,interfaces:i,directives:o,fields:l})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(w.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(w.BRACE_L,this.parseFieldDefinition,w.BRACE_R)}parseFieldDefinition(){const t=this._lexer.token,n=this.parseDescription(),r=this.parseName(),i=this.parseArgumentDefs();this.expectToken(w.COLON);const o=this.parseTypeReference(),l=this.parseConstDirectives();return this.node(t,{kind:O.FIELD_DEFINITION,description:n,name:r,arguments:i,type:o,directives:l})}parseArgumentDefs(){return this.optionalMany(w.PAREN_L,this.parseInputValueDef,w.PAREN_R)}parseInputValueDef(){const t=this._lexer.token,n=this.parseDescription(),r=this.parseName();this.expectToken(w.COLON);const i=this.parseTypeReference();let o;this.expectOptionalToken(w.EQUALS)&&(o=this.parseConstValueLiteral());const l=this.parseConstDirectives();return this.node(t,{kind:O.INPUT_VALUE_DEFINITION,description:n,name:r,type:i,defaultValue:o,directives:l})}parseInterfaceTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("interface");const r=this.parseName(),i=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),l=this.parseFieldsDefinition();return this.node(t,{kind:O.INTERFACE_TYPE_DEFINITION,description:n,name:r,interfaces:i,directives:o,fields:l})}parseUnionTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("union");const r=this.parseName(),i=this.parseConstDirectives(),o=this.parseUnionMemberTypes();return this.node(t,{kind:O.UNION_TYPE_DEFINITION,description:n,name:r,directives:i,types:o})}parseUnionMemberTypes(){return this.expectOptionalToken(w.EQUALS)?this.delimitedMany(w.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("enum");const r=this.parseName(),i=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();return this.node(t,{kind:O.ENUM_TYPE_DEFINITION,description:n,name:r,directives:i,values:o})}parseEnumValuesDefinition(){return this.optionalMany(w.BRACE_L,this.parseEnumValueDefinition,w.BRACE_R)}parseEnumValueDefinition(){const t=this._lexer.token,n=this.parseDescription(),r=this.parseEnumValueName(),i=this.parseConstDirectives();return this.node(t,{kind:O.ENUM_VALUE_DEFINITION,description:n,name:r,directives:i})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw ae(this._lexer.source,this._lexer.token.start,`${ii(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("input");const r=this.parseName(),i=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();return this.node(t,{kind:O.INPUT_OBJECT_TYPE_DEFINITION,description:n,name:r,directives:i,fields:o})}parseInputFieldsDefinition(){return this.optionalMany(w.BRACE_L,this.parseInputValueDef,w.BRACE_R)}parseTypeSystemExtension(){const t=this._lexer.lookahead();if(t.kind===w.NAME)switch(t.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(t)}parseSchemaExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const n=this.parseConstDirectives(),r=this.optionalMany(w.BRACE_L,this.parseOperationTypeDefinition,w.BRACE_R);if(n.length===0&&r.length===0)throw this.unexpected();return this.node(t,{kind:O.SCHEMA_EXTENSION,directives:n,operationTypes:r})}parseScalarTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const n=this.parseName(),r=this.parseConstDirectives();if(r.length===0)throw this.unexpected();return this.node(t,{kind:O.SCALAR_TYPE_EXTENSION,name:n,directives:r})}parseObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const n=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(r.length===0&&i.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:O.OBJECT_TYPE_EXTENSION,name:n,interfaces:r,directives:i,fields:o})}parseInterfaceTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const n=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(r.length===0&&i.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:O.INTERFACE_TYPE_EXTENSION,name:n,interfaces:r,directives:i,fields:o})}parseUnionTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const n=this.parseName(),r=this.parseConstDirectives(),i=this.parseUnionMemberTypes();if(r.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:O.UNION_TYPE_EXTENSION,name:n,directives:r,types:i})}parseEnumTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const n=this.parseName(),r=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();if(r.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:O.ENUM_TYPE_EXTENSION,name:n,directives:r,values:i})}parseInputObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const n=this.parseName(),r=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();if(r.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:O.INPUT_OBJECT_TYPE_EXTENSION,name:n,directives:r,fields:i})}parseDirectiveDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("directive"),this.expectToken(w.AT);const r=this.parseName(),i=this.parseArgumentDefs(),o=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const l=this.parseDirectiveLocations();return this.node(t,{kind:O.DIRECTIVE_DEFINITION,description:n,name:r,arguments:i,repeatable:o,locations:l})}parseDirectiveLocations(){return this.delimitedMany(w.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const t=this._lexer.token,n=this.parseName();if(Object.prototype.hasOwnProperty.call(Kl,n.value))return n;throw this.unexpected(t)}node(t,n){var r;return((r=this._options)===null||r===void 0?void 0:r.noLocation)!==!0&&(n.loc=new Wm(t,this._lexer.lastToken,this._lexer.source)),n}peek(t){return this._lexer.token.kind===t}expectToken(t){const n=this._lexer.token;if(n.kind===t)return this._lexer.advance(),n;throw ae(this._lexer.source,n.start,`Expected ${Kf(t)}, found ${ii(n)}.`)}expectOptionalToken(t){return this._lexer.token.kind===t?(this._lexer.advance(),!0):!1}expectKeyword(t){const n=this._lexer.token;if(n.kind===w.NAME&&n.value===t)this._lexer.advance();else throw ae(this._lexer.source,n.start,`Expected "${t}", found ${ii(n)}.`)}expectOptionalKeyword(t){const n=this._lexer.token;return n.kind===w.NAME&&n.value===t?(this._lexer.advance(),!0):!1}unexpected(t){const n=t!=null?t:this._lexer.token;return ae(this._lexer.source,n.start,`Unexpected ${ii(n)}.`)}any(t,n,r){this.expectToken(t);const i=[];for(;!this.expectOptionalToken(r);)i.push(n.call(this));return i}optionalMany(t,n,r){if(this.expectOptionalToken(t)){const i=[];do i.push(n.call(this));while(!this.expectOptionalToken(r));return i}return[]}many(t,n,r){this.expectToken(t);const i=[];do i.push(n.call(this));while(!this.expectOptionalToken(r));return i}delimitedMany(t,n){this.expectOptionalToken(t);const r=[];do r.push(n.call(this));while(this.expectOptionalToken(t));return r}}function ii(e){const t=e.value;return Kf(e.kind)+(t!=null?` "${t}"`:"")}function Kf(e){return ph(e)?`"${e}"`:e}function oe(e,t){return t.tag=e,t}function Ae(){}function Th(e){return function(t){var n=e.length;let r=!1,i=!1,o=!1,l=0;t(oe(0,[function(a){if(a)r=!0;else if(i)o=!0;else{for(i=o=!0;o&&!r;)l<n?(a=e[l],l=l+1|0,o=!1,t(oe(1,[a]))):(r=!0,t(0));i=!1}}]))}}function Ih(){}function Nh(e){e(0)}function $h(e){return e(0)}function Zf(e){return function(t){return function(n){let r=Ae,i=!1,o=[],l=!1;t(function(a){typeof a=="number"?l||(l=!0,o.length===0&&n(0)):a.tag?l||(i=!1,function(u){function c(p){typeof p=="number"?o.length!==0&&(o=o.filter(g),p=o.length===0,l&&p?n(0):!i&&p&&(i=!0,r(0))):p.tag?o.length!==0&&(n(oe(1,[p[0]])),h(0)):(h=p=p[0],o=o.concat(p),p(0))}function g(p){return p!==h}let h=Ae;u.length===1?u(c):u.bind(null,c)}(e(a[0])),i||(i=!0,r(0))):r=a[0]}),n(oe(0,[function(a){a?(l||(l=!0,r(a)),o.forEach(function(u){return u(a)}),o=[]):(i||l?i=!1:(i=!0,r(0)),o.forEach($h))}]))}}}function Ch(e){return e}function Xt(e){return function(t){return function(n){let r=!1;return t(function(i){if(typeof i=="number")r||(r=!0,n(i));else if(i.tag)r||(e(i[0]),n(i));else{var o=i[0];n(oe(0,[function(l){if(!r)return l&&(r=!0),o(l)}]))}})}}}function Oh(e){e(0)}function Ph(e){return function(t){return function(n){function r(g){a&&(typeof g=="number"?(a=!1,c?n(g):o||(o=!0,i(0))):g.tag?(n(g),u?u=!1:l(0)):(l=g=g[0],u=!1,g(0)))}let i=Ae,o=!1,l=Ae,a=!1,u=!1,c=!1;t(function(g){typeof g=="number"?c||(c=!0,a||n(0)):g.tag?c||(a&&(l(1),l=Ae),o?o=!1:(o=!0,i(0)),g=e(g[0]),a=!0,g(r)):i=g[0]}),n(oe(0,[function(g){if(g){if(c||(c=!0,i(1)),a)return a=!1,l(1)}else c||o||(o=!0,i(0)),a&&!u&&(u=!0,l(0))}]))}}}function Gt(e){return function(t){let n=Ae,r=!1;return t(function(i){typeof i=="number"?r=!0:i.tag?r||(e(i[0]),n(0)):(n=i=i[0],i(0))}),{unsubscribe:function(){if(!r)return r=!0,n(1)}}}}function Fh(){}function Fe(e){return function(t){return function(n){let r=Ae;return t(function(i){typeof i=="number"?n(i):i.tag?e(i[0])?n(i):r(0):(r=i[0],n(i))})}}}function gs(e){return function(t){let n=!1;t(oe(0,[function(r){r?n=!0:n||(n=!0,t(oe(1,[e])),t(0))}]))}}function bf(e){return function(t){let n=Ih,r=!1;n=e({next:function(i){r||t(oe(1,[i]))},complete:function(){r||(r=!0,t(0))}}),t(oe(0,[function(i){if(i&&!r)return r=!0,n()}]))}}function Lh(){let e=[],t=!1;return{source:function(n){function r(i){return i!==n}e=e.concat(n),n(oe(0,[function(i){i&&(e=e.filter(r))}]))},next:function(n){t||e.forEach(function(r){r(oe(1,[n]))})},complete:function(){t||(t=!0,e.forEach(Nh))}}}function sr(e){return function(t){return function(n){return t(function(r){r=typeof r=="number"?0:r.tag?oe(1,[e(r[0])]):oe(0,[r[0]]),n(r)})}}}function Wi(e){return Zf(Ch)(Th(e))}function Zl(e){return function(t){return function(n){let r=!1;return t(function(i){if(typeof i=="number")return r?void 0:(r=!0,n(i),e());if(i.tag)r||n(i);else{var o=i[0];n(oe(0,[function(l){if(!r)return l?(r=!0,o(l),e()):o(l)}]))}})}}}function vs(e){return function(t){return function(n){return t(function(r){typeof r=="number"||r.tag?n(r):(n(r),e())})}}}function Ah(e){return Gt(Fh)(e)}function Yi(e){function t(o){typeof o=="number"?(n.forEach(Oh),n=[]):o.tag?(i=!1,n.forEach(function(l){l(o)})):r=o[0]}let n=[],r=Ae,i=!1;return function(o){function l(a){return a!==o}n=n.concat(o),n.length===1&&e(t),o(oe(0,[function(a){if(a){if(n=n.filter(l),n.length===0)return r(1)}else i||(i=!0,r(a))}]))}}function ys(e){return function(t){return function(n){let r=!1,i=0,o=Ae;t(function(l){typeof l=="number"?r||(r=!0,n(0)):l.tag?i<e&&!r&&(i=i+1|0,n(l),!r&&i>=e&&(r=!0,n(0),o(1))):(l=l[0],0>=e?(r=!0,n(0),l(1)):o=l)}),n(oe(0,[function(l){if(!r){if(l)return r=!0,o(1);if(i<e)return o(0)}}]))}}}function ed(e){return function(t){return function(n){function r(a){typeof a!="number"&&(a.tag?(i=!0,o(1),n(0)):(l=a=a[0],a(0)))}let i=!1,o=Ae,l=Ae;t(function(a){typeof a=="number"?i||(i=!0,l(1),n(0)):a.tag?i||n(a):(o=a[0],e(r))}),n(oe(0,[function(a){if(!i)return a?(i=!0,o(1),l(1)):o(0)}]))}}}function Rh(e){return function(t){return function(n){let r=Ae,i=!1;return t(function(o){typeof o=="number"?i||(i=!0,n(0)):o.tag?i||(e(o[0])?n(o):(i=!0,n(0),r(1))):(r=o[0],n(o))})}}}typeof Symbol=="function"&&(Symbol.observable||(Symbol.observable=Symbol("observable")));function Mh(e){return typeof e=="string"?new Nr(e):typeof e=="object"&&e.message?new Nr(e.message,e.nodes,e.source,e.positions,e.path,e,e.extensions||{}):e}var Ka=function(e){function t(n){var r=n.networkError,i=n.response,o=(n.graphQLErrors||[]).map(Mh),l=function(u,c){var g="";return u!==void 0?g="[Network] "+u.message:(c!==void 0&&c.forEach(function(h){g+="[GraphQL] "+h.message+`
`}),g.trim())}(r,o);e.call(this,l),this.name="CombinedError",this.message=l,this.graphQLErrors=o,this.networkError=r,this.response=i}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.toString=function(){return this.message},t}(Error);function td(e,t){e|=0;for(var n=0,r=0|t.length;n<r;n++)e=(e<<5)+e+t.charCodeAt(n);return e}function Ss(e){return td(5381,e)>>>0}var Si=new Set,ks=new WeakMap;function bn(e){if(e===null||Si.has(e))return"null";if(typeof e!="object")return JSON.stringify(e)||"";if(e.toJSON)return bn(e.toJSON());if(Array.isArray(e)){for(var t="[",n=0,r=e.length;n<r;n++){n>0&&(t+=",");var i=bn(e[n]);t+=i.length>0?i:"null"}return t+="]"}var o=Object.keys(e).sort();if(!o.length&&e.constructor&&e.constructor!==Object){var l=ks.get(e)||Math.random().toString(36).slice(2);return ks.set(e,l),'{"__key":"'+l+'"}'}Si.add(e);for(var a="{",u=0,c=o.length;u<c;u++){var g=o[u],h=bn(e[g]);h&&(a.length>1&&(a+=","),a+=bn(g)+":"+h)}return Si.delete(e),a+="}"}function bl(e){return Si.clear(),bn(e)}var zh=/("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g,Uh=/([\s,]|#[^\n\r]+)+/g;function jh(e,t){return t%2==0?e.replace(Uh," ").trim():e}function Jo(e){var t=(typeof e!="string"?e.loc&&e.loc.source.body||Qf(e):e).split(zh).map(jh).join("");if(typeof e!="string"){var n="definitions"in e&&rd(e);n&&(t="# "+n+`
`+t),e.loc||(e.loc={start:0,end:t.length,source:{body:t,name:"gql",locationOffset:{line:1,column:1}}})}return t}var Xo=new Map;function nd(e){var t,n;return typeof e=="string"?(t=Ss(Jo(e)),n=Xo.get(t)||Xf(e,{noLocation:!0})):(t=e.__key||Ss(Jo(e)),n=Xo.get(t)||e),n.loc||Jo(n),n.__key=t,Xo.set(t,n),n}function ki(e,t){t||(t={});var n=nd(e);return{key:td(n.__key,bl(t))>>>0,query:n,variables:t}}function rd(e){for(var t=0,n=e.definitions.length;t<n;t++){var r=e.definitions[t];if(r.kind===O.OPERATION_DEFINITION&&r.name)return r.name.value}}function Bh(e){for(var t=0,n=e.definitions.length;t<n;t++){var r=e.definitions[t];if(r.kind===O.OPERATION_DEFINITION)return r.operation}}function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ko(e,t,n){if(!("data"in t)&&!("errors"in t)||"path"in t)throw new Error("No Content");return{operation:e,data:t.data,error:Array.isArray(t.errors)?new Ka({graphQLErrors:t.errors,response:n}):void 0,extensions:typeof t.extensions=="object"&&t.extensions||void 0,hasNext:!!t.hasNext}}function Vh(e,t,n){var r=re({},e);if(r.hasNext=!!t.hasNext,!("path"in t))return"data"in t&&(r.data=t.data),r;Array.isArray(t.errors)&&(r.error=new Ka({graphQLErrors:r.error?r.error.graphQLErrors.concat(t.errors):t.errors,response:n}));for(var i=r.data=re({},r.data),o=0,l;o<t.path.length;)i=i[l=t.path[o++]]=Array.isArray(i[l])?[].concat(i[l]):re({},i[l]);return re(i,t.data),r}function ws(e,t,n){return{operation:e,data:void 0,error:new Ka({networkError:t,response:n}),extensions:void 0}}function id(e){return e.kind==="query"&&!!e.context.preferGetMethod}function Gh(e){return{query:Qf(e.query),operationName:rd(e.query),variables:e.variables||void 0,extensions:void 0}}function qh(e,t){var n=id(e),r=e.context.url;if(!n||!t)return r;var i=[];t.operationName&&i.push("operationName="+encodeURIComponent(t.operationName)),t.query&&i.push("query="+encodeURIComponent(t.query.replace(/#[^\n\r]+/g," ").trim())),t.variables&&i.push("variables="+encodeURIComponent(bl(t.variables))),t.extensions&&i.push("extensions="+encodeURIComponent(bl(t.extensions)));var o=r+"?"+i.join("&");return o.length>2047?(e.context.preferGetMethod=!1,r):o}function Qh(e,t){var n=id(e),r={accept:"application/graphql+json, application/json"};n||(r["content-type"]="application/json");var i=(typeof e.context.fetchOptions=="function"?e.context.fetchOptions():e.context.fetchOptions)||{};if(i.headers)for(var o in i.headers)r[o.toLowerCase()]=i.headers[o];return re({},i,{body:!n&&t?JSON.stringify(t):void 0,method:n?"GET":"POST",headers:r})}var Zo=typeof Symbol!="undefined"?Symbol.asyncIterator:null,Hh=typeof TextDecoder!="undefined"?new TextDecoder:null,Wh=/content-type:[^\r\n]*application\/json/i,Yh=/boundary="?([^=";]+)"?/i;function Jh(e,t,n){var r=n.redirect==="manual"?400:300,i=e.context.fetch;return bf(function(o){var l=o.next,a=o.complete,u=typeof AbortController!="undefined"?new AbortController:null;u&&(n.signal=u.signal);var c=!1;function g(v,k,_){var f=_.headers&&_.headers.get("Content-Type")||"";if(/text\//i.test(f))return _.text().then(function(ze){v(ws(k,new Error(ze),_))});if(!/multipart\/mixed/i.test(f))return _.text().then(function(ze){v(Ko(k,JSON.parse(ze),_))});var s="---",d=f.match(Yh);d&&(s="--"+d[1]);var y,x=function(){};if(Zo&&_[Zo]){var N=_[Zo]();y=N.next.bind(N)}else if("body"in _&&_.body){var I=_.body.getReader();x=I.cancel.bind(I),y=I.read.bind(I)}else throw new TypeError("Streaming requests unsupported");var C="",G=!0,F=null,te=null;return y().then(function ze(be){if(be.done)c=!0;else{var zn=function(dt){return dt.constructor.name==="Buffer"?dt.toString():Hh.decode(dt)}(be.value),et=zn.indexOf(s);for(et>-1?et+=C.length:et=C.indexOf(s),C+=zn;et>-1;){var ft=C.slice(0,et),bt=C.slice(et+s.length);if(G)G=!1;else{var D=ft.indexOf(`\r
\r
`)+4,P=ft.slice(0,D),L=ft.slice(D,ft.lastIndexOf(`\r
`)),U=void 0;if(Wh.test(P))try{U=JSON.parse(L),F=te=te?Vh(te,U,_):Ko(k,U,_)}catch{}if(bt.slice(0,2)==="--"||U&&!U.hasNext){if(!te)return v(Ko(k,{},_));break}}et=(C=bt).indexOf(s)}}if(F&&(v(F),F=null),!be.done&&(!te||te.hasNext))return y().then(ze)}).finally(x)}var h=!1,p=!1,S;return Promise.resolve().then(function(){if(!h)return(i||fetch)(t,n)}).then(function(v){if(!!v)return p=(S=v).status<200||S.status>=r,g(l,e,S)}).then(a).catch(function(v){if(c)throw v;var k=ws(e,p&&S.statusText?new Error(S.statusText):v,S);l(k),a()}),function(){h=!0,u&&u.abort()}})}function ea(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++)ea(e[n],t);else if(typeof e=="object"&&e!==null)for(var r in e)r==="__typename"&&typeof e[r]=="string"?t[e[r]]=0:ea(e[r],t);return t}function Xh(e){return Object.keys(ea(e,{}))}var _s=function(e){if(e.selectionSet&&!e.selectionSet.selections.some(function(t){return t.kind===O.FIELD&&t.name.value==="__typename"&&!t.alias}))return re({},e,{selectionSet:re({},e.selectionSet,{selections:e.selectionSet.selections.concat([{kind:O.FIELD,name:{kind:O.NAME,value:"__typename"}}])})})},Es=new Map;function Kh(e){var t=nd(e),n=Es.get(t.__key);return n||(n=Vf(t,{Field:_s,InlineFragment:_s}),Object.defineProperty(n,"__key",{value:t.__key,enumerable:!1}),Es.set(t.__key,n)),n}function ta(e){return!e||typeof e!="object"?e:Object.keys(e).reduce(function(t,n){var r=e[n];return n==="__typename"?Object.defineProperty(t,"__typename",{enumerable:!1,value:r}):Array.isArray(r)?t[n]=r.map(ta):r&&typeof r=="object"&&"__typename"in r?t[n]=ta(r):t[n]=r,t},Array.isArray(e)?[]:{})}function xs(e){return e.toPromise=function(){return new Promise(function(t){var n=Gt(function(r){!r.stale&&!r.hasNext&&Promise.resolve().then(function(){n.unsubscribe(),t(r)})})(e)})},e}function $r(e,t,n){return n||(n=t.context),{key:t.key,query:t.query,variables:t.variables,kind:e,context:n}}function Ds(e,t){return $r(e.kind,e,re({},e.context,{meta:re({},e.context.meta,t)}))}function od(){}function bo(e){var t=e.kind;return t!=="mutation"&&t!=="query"}function Zh(e){var t=e.forward,n=e.client;e.dispatchDebug;var r=new Map,i=Object.create(null);function o(a){var u=$r(a.kind,a);return u.query=Kh(a.query),u}function l(a){var u=a.context.requestPolicy;return a.kind==="query"&&u!=="network-only"&&(u==="cache-only"||r.has(a.key))}return function(a){var u=Yi(a),c=sr(function(h){var p=r.get(h.key),S=re({},p,{operation:Ds(h,{cacheOutcome:p?"hit":"miss"})});return h.context.requestPolicy==="cache-and-network"&&(S.stale=!0,Ts(n,h)),S})(Fe(function(h){return!bo(h)&&l(h)})(u)),g=Xt(function(h){var p=h.operation;if(!!p){var S=Xh(h.data).concat(p.context.additionalTypenames||[]);if(h.operation.kind==="mutation"){for(var v=new Set,k=0;k<S.length;k++){var _=S[k],f=i[_]||(i[_]=new Set);f.forEach(function(y){v.add(y)}),f.clear()}v.forEach(function(y){r.has(y)&&(p=r.get(y).operation,r.delete(y),Ts(n,p))})}else if(p.kind==="query"&&h.data){r.set(p.key,h);for(var s=0;s<S.length;s++){var d=S[s];(i[d]||(i[d]=new Set)).add(p.key)}}}})(t(Fe(function(h){return h.kind!=="query"||h.context.requestPolicy!=="cache-only"})(sr(function(h){return Ds(h,{cacheOutcome:"miss"})})(Wi([sr(o)(Fe(function(h){return!bo(h)&&!l(h)})(u)),Fe(function(h){return bo(h)})(u)])))));return Wi([c,g])}}function Ts(e,t){return e.reexecuteOperation($r(t.kind,t,re({},t.context,{requestPolicy:"network-only"})))}function bh(e){var t=e.forward;e.dispatchDebug;var n=new Set;function r(o){var l=o.key,a=o.kind;if(a==="teardown")return n.delete(l),!0;if(a!=="query"&&a!=="subscription")return!0;var u=n.has(l);return n.add(l),!u}function i(o){o.hasNext||n.delete(o.operation.key)}return function(o){var l=Fe(r)(o);return Xt(i)(t(l))}}function e0(e){var t=e.forward;return e.dispatchDebug,function(n){var r=Yi(n),i=Zf(function(l){var a=l.key,u=Fe(function(p){return p.kind==="teardown"&&p.key===a})(r),c=Gh(l),g=qh(l,c),h=Qh(l,c);return Xt(function(p){p.data||p.error})(ed(u)(Jh(l,g,h)))})(Fe(function(l){return l.kind==="query"||l.kind==="mutation"})(r)),o=t(Fe(function(l){return l.kind!=="query"&&l.kind!=="mutation"})(r));return Wi([i,o])}}function ld(e){return e.dispatchDebug,function(t){return Fe(function(){return!1})(Xt(function(n){if(n.kind!=="teardown"&&!1)var r})(t))}}ld({dispatchDebug:od});function t0(e){return function(t){var n=t.client;return t.dispatchDebug,e.reduceRight(function(r,i){return i({client:n,forward:r,dispatchDebug:function(l){}})},t.forward)}}var n0=[bh,Zh,e0],r0=function e(t){var n=new Map,r=new Map,i=[],o=Lh(),l=o.source,a=o.next,u=!1;function c(_){for(u=!0,_&&a(_);_=i.shift();)a(_);u=!1}function g(_){var f=Fe(function(s){return s.operation.kind===_.kind&&s.operation.key===_.key&&(!s.operation.context._instance||s.operation.context._instance===_.context._instance)})(k);return p.maskTypename&&(f=sr(function(s){return re({},s,{data:ta(s.data)})})(f)),_.kind==="mutation"?ys(1)(vs(function(){return c(_)})(f)):Yi(Zl(function(){n.delete(_.key),r.delete(_.key);for(var s=i.length-1;s>=0;s--)i[s].key===_.key&&i.splice(s,1);c($r("teardown",_,_.context))})(Xt(function(s){n.set(_.key,s)})(Ph(function(s){return _.kind!=="query"||s.stale?gs(s):Wi([gs(s),sr(function(){return re({},s,{stale:!0})})(ys(1)(Fe(function(d){return d.kind==="query"&&d.key===_.key&&d.context.requestPolicy!=="cache-only"})(l)))])})(ed(Fe(function(s){return s.kind==="teardown"&&s.key===_.key})(l))(f)))))}var h=this instanceof e?this:Object.create(e.prototype),p=re(h,{url:t.url,fetchOptions:t.fetchOptions,fetch:t.fetch,suspense:!!t.suspense,requestPolicy:t.requestPolicy||"cache-first",preferGetMethod:!!t.preferGetMethod,maskTypename:!!t.maskTypename,operations$:l,reexecuteOperation:function(f){(f.kind==="mutation"||r.has(f.key))&&(i.push(f),u||Promise.resolve().then(c))},createOperationContext:function(f){return f||(f={}),re({},{_instance:void 0,url:p.url,fetchOptions:p.fetchOptions,fetch:p.fetch,preferGetMethod:p.preferGetMethod},f,{suspense:f.suspense||f.suspense!==!1&&p.suspense,requestPolicy:f.requestPolicy||p.requestPolicy})},createRequestOperation:function(f,s,d){Bh(s.query);var y=p.createOperationContext(d);return f==="mutation"&&(y._instance=[]),$r(f,s,y)},executeRequestOperation:function(f){return f.kind==="mutation"?g(f):bf(function(s){var d=r.get(f.key);d||r.set(f.key,d=g(f));var y=f.context.requestPolicy==="cache-and-network"||f.context.requestPolicy==="network-only";return Gt(s.next)(Zl(s.complete)(vs(function(){var x=n.get(f.key);if(f.kind==="subscription")return c(f);y&&c(f),x!=null&&x===n.get(f.key)?s.next(y?re({},x,{stale:!0}):x):y||c(f)})(d))).unsubscribe})},executeQuery:function(f,s){var d=p.createRequestOperation("query",f,s);return p.executeRequestOperation(d)},executeSubscription:function(f,s){var d=p.createRequestOperation("subscription",f,s);return p.executeRequestOperation(d)},executeMutation:function(f,s){var d=p.createRequestOperation("mutation",f,s);return p.executeRequestOperation(d)},query:function(f,s,d){return(!d||typeof d.suspense!="boolean")&&(d=re({},d,{suspense:!1})),xs(p.executeQuery(ki(f,s),d))},readQuery:function(f,s,d){var y=null;return Gt(function(x){y=x})(p.query(f,s,d)).unsubscribe(),y},subscription:function(f,s,d){return p.executeSubscription(ki(f,s),d)},mutation:function(f,s,d){return xs(p.executeMutation(ki(f,s),d))}}),S=od,v=t0(t.exchanges!==void 0?t.exchanges:n0),k=Yi(v({client:p,dispatchDebug:S,forward:ld({dispatchDebug:S})})(l));return Ah(k),p},ad=r0,i0=ad({url:"/graphql"}),ho=Se.exports.createContext(i0),o0=ho.Provider;ho.Consumer;ho.displayName="UrqlContext";function l0(){var e=Se.exports.useContext(ho);return e}function Cr(){return Cr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cr.apply(this,arguments)}var a0={fetching:!1,stale:!1,error:void 0,data:void 0,extensions:void 0,operation:void 0};function el(e,t){var n=Cr({},e,t,{data:t.data!==void 0||t.error?t.data:e.data,fetching:!!t.fetching,stale:!!t.stale});return function(i,o){if(typeof i!="object"||typeof o!="object")return i!==o;for(var l in i)if(!(l in o))return!0;for(var a in o)if(i[a]!==o[a])return!0;return!1}(e,n)?n:e}function u0(e,t){for(var n=0,r=t.length;n<r;n++)if(e[n]!==t[n])return!0;return!1}function s0(e,t){var n=Se.exports.useRef(void 0);return Se.exports.useMemo(function(){var r=ki(e,t);return n.current!==void 0&&n.current.key===r.key?n.current:(n.current=r,r)},[e,t])}var tl=!1;function c0(e){var t=l0(),n=function(v){if(!v._react){var k=new Set,_=new Map;v.operations$&&Gt(function(f){f.kind==="teardown"&&k.has(f.key)&&(k.delete(f.key),_.delete(f.key))})(v.operations$),v._react={get:function(s){return _.get(s)},set:function(s,d){k.delete(s),_.set(s,d)},dispose:function(s){k.add(s)}}}return v._react}(t),r=function(v,k){return v.suspense&&(!k||k.suspense!==!1)}(t,e.context),i=s0(e.query,e.variables),o=Se.exports.useMemo(function(){if(e.pause)return null;var S=t.executeQuery(i,Cr({},{requestPolicy:e.requestPolicy},e.context));return r?Xt(function(v){n.set(i.key,v)})(S):S},[n,t,i,r,e.pause,e.requestPolicy,e.context]),l=Se.exports.useCallback(function(S,v){if(!S)return{fetching:!1};var k=n.get(i.key);if(k){if(v&&k!=null&&"then"in k)throw k}else{var _,f=Gt(function(d){k=d,_&&_(k)})(Rh(function(){return v&&!_||!k})(S));if(k==null&&v){var s=new Promise(function(d){_=d});throw n.set(i.key,s),s}else f.unsubscribe()}return k||{fetching:!0}},[n,i]),a=[t,i,e.requestPolicy,e.context,e.pause],u=Se.exports.useState(function(){tl=!0;try{return[o,el(a0,l(o,r)),a]}finally{tl=!1}}),c=u[0],g=u[1],h=c[1];o!==c[0]&&u0(c[2],a)&&g([o,h=el(c[1],l(o,r)),a]),Se.exports.useEffect(function(){var S=c[0],v=c[2][1],k=!1;function _(s){k=!0,tl||g(function(d){var y=el(d[1],s);return d[1]!==y?[d[0],y,d[2]]:d})}if(S){var f=Gt(_)(Zl(function(){_({fetching:!1})})(S));return k||_({fetching:!0}),function(){n.dispose(v.key),f.unsubscribe()}}else _({fetching:!1})},[n,c[0],c[2][1]]);var p=Se.exports.useCallback(function(S){var v=Cr({},{requestPolicy:e.requestPolicy},e.context,S);g(function(k){return[r?Xt(function(_){n.set(i.key,_)})(t.executeQuery(i,v)):t.executeQuery(i,v),k[1],a]})},[t,n,i,r,l,e.requestPolicy,e.context]);return[h,p]}const ud="http://localhost:9999/graphql";var Ji=function(){return Ji=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Ji.apply(this,arguments)},wi=new Map,na=new Map,sd=!0,Xi=!1;function cd(e){return e.replace(/[\s,]+/g," ").trim()}function f0(e){return cd(e.source.body.substring(e.start,e.end))}function d0(e){var t=new Set,n=[];return e.definitions.forEach(function(r){if(r.kind==="FragmentDefinition"){var i=r.name.value,o=f0(r.loc),l=na.get(i);l&&!l.has(o)?sd&&console.warn("Warning: fragment with name "+i+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):l||na.set(i,l=new Set),l.add(o),t.has(o)||(t.add(o),n.push(r))}else n.push(r)}),Ji(Ji({},e),{definitions:n})}function p0(e){var t=new Set(e.definitions);t.forEach(function(r){r.loc&&delete r.loc,Object.keys(r).forEach(function(i){var o=r[i];o&&typeof o=="object"&&t.add(o)})});var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}function m0(e){var t=cd(e);if(!wi.has(t)){var n=Xf(e,{experimentalFragmentVariables:Xi,allowLegacyFragmentVariables:Xi});if(!n||n.kind!=="Document")throw new Error("Not a valid GraphQL document.");wi.set(t,p0(d0(n)))}return wi.get(t)}function Nn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];typeof e=="string"&&(e=[e]);var r=e[0];return t.forEach(function(i,o){i&&i.kind==="Document"?r+=i.loc.source.body:r+=i,r+=e[o+1]}),m0(r)}function h0(){wi.clear(),na.clear()}function g0(){sd=!1}function v0(){Xi=!0}function y0(){Xi=!1}var Wn={gql:Nn,resetCaches:h0,disableFragmentWarnings:g0,enableExperimentalFragmentVariables:v0,disableExperimentalFragmentVariables:y0};(function(e){e.gql=Wn.gql,e.resetCaches=Wn.resetCaches,e.disableFragmentWarnings=Wn.disableFragmentWarnings,e.enableExperimentalFragmentVariables=Wn.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=Wn.disableExperimentalFragmentVariables})(Nn||(Nn={}));Nn.default=Nn;var m=Nn;const fd=m`
    fragment ConfigGeneralData on ConfigGeneralResult {
  stashes {
    path
    excludeVideo
    excludeImage
  }
  databasePath
  generatedPath
  metadataPath
  scrapersPath
  cachePath
  calculateMD5
  videoFileNamingAlgorithm
  parallelTasks
  previewAudio
  previewSegments
  previewSegmentDuration
  previewExcludeStart
  previewExcludeEnd
  previewPreset
  maxTranscodeSize
  maxStreamingTranscodeSize
  writeImageThumbnails
  apiKey
  username
  password
  maxSessionAge
  logFile
  logOut
  logLevel
  logAccess
  createGalleriesFromFolders
  videoExtensions
  imageExtensions
  galleryExtensions
  excludes
  imageExcludes
  customPerformerImageLocation
  scraperUserAgent
  scraperCertCheck
  scraperCDPPath
  stashBoxes {
    name
    endpoint
    api_key
  }
  pythonPath
}
    `,dd=m`
    fragment ConfigInterfaceData on ConfigInterfaceResult {
  menuItems
  soundOnPreview
  wallShowTitle
  wallPlayback
  showScrubber
  maximumLoopDuration
  noBrowser
  notificationsEnabled
  autostartVideo
  autostartVideoOnPlaySelected
  continuePlaylistDefault
  showStudioAsText
  css
  cssEnabled
  language
  imageLightbox {
    slideshowDelay
    displayMode
    scaleUp
    resetZoomOnNav
    scrollMode
    scrollAttemptsBeforeChange
  }
  disableDropdownCreate {
    performer
    tag
    studio
  }
  handyKey
  funscriptOffset
}
    `,pd=m`
    fragment ConfigDLNAData on ConfigDLNAResult {
  serverName
  enabled
  whitelistedIPs
  interfaces
}
    `,md=m`
    fragment ConfigScrapingData on ConfigScrapingResult {
  scraperUserAgent
  scraperCertCheck
  scraperCDPPath
  excludeTagPatterns
}
    `,S0=m`
    fragment ScraperSourceData on ScraperSource {
  stash_box_index
  stash_box_endpoint
  scraper_id
}
    `,k0=m`
    fragment IdentifyFieldOptionsData on IdentifyFieldOptions {
  field
  strategy
  createMissing
}
    `,w0=m`
    fragment IdentifyMetadataOptionsData on IdentifyMetadataOptions {
  fieldOptions {
    ...IdentifyFieldOptionsData
  }
  setCoverImage
  setOrganized
  includeMalePerformers
}
    ${k0}`,hd=m`
    fragment ConfigDefaultSettingsData on ConfigDefaultSettingsResult {
  scan {
    useFileMetadata
    stripFileExtension
    scanGeneratePreviews
    scanGenerateImagePreviews
    scanGenerateSprites
    scanGeneratePhashes
    scanGenerateThumbnails
  }
  identify {
    sources {
      source {
        ...ScraperSourceData
      }
      options {
        ...IdentifyMetadataOptionsData
      }
    }
    options {
      ...IdentifyMetadataOptionsData
    }
  }
  autoTag {
    performers
    studios
    tags
  }
  generate {
    sprites
    previews
    imagePreviews
    previewOptions {
      previewSegments
      previewSegmentDuration
      previewExcludeStart
      previewExcludeEnd
      previewPreset
    }
    markers
    markerImagePreviews
    markerScreenshots
    transcodes
    phashes
    interactiveHeatmapsSpeeds
  }
  deleteFile
  deleteGenerated
}
    ${S0}
${w0}`,_0=m`
    fragment ConfigData on ConfigResult {
  general {
    ...ConfigGeneralData
  }
  interface {
    ...ConfigInterfaceData
  }
  dlna {
    ...ConfigDLNAData
  }
  scraping {
    ...ConfigScrapingData
  }
  defaults {
    ...ConfigDefaultSettingsData
  }
  ui
}
    ${fd}
${dd}
${pd}
${md}
${hd}`,go=m`
    fragment SavedFilterData on SavedFilter {
  id
  mode
  name
  filter
}
    `,Rr=m`
    fragment SlimImageData on Image {
  id
  checksum
  title
  rating
  organized
  o_counter
  path
  file {
    size
    width
    height
  }
  paths {
    thumbnail
    image
  }
  galleries {
    id
    path
    title
  }
  studio {
    id
    name
    image_path
  }
  tags {
    id
    name
  }
  performers {
    id
    name
    gender
    favorite
    image_path
  }
}
    `,Mr=m`
    fragment SlimStudioData on Studio {
  id
  name
  image_path
  stash_ids {
    endpoint
    stash_id
  }
  parent_studio {
    id
  }
  details
  rating
  aliases
}
    `,zr=m`
    fragment SlimTagData on Tag {
  id
  name
  aliases
  image_path
}
    `,Ft=m`
    fragment PerformerData on Performer {
  id
  checksum
  name
  url
  gender
  twitter
  instagram
  birthdate
  ethnicity
  country
  eye_color
  height
  measurements
  fake_tits
  career_length
  tattoos
  piercings
  aliases
  favorite
  ignore_auto_tag
  image_path
  scene_count
  image_count
  gallery_count
  movie_count
  tags {
    ...SlimTagData
  }
  stash_ids {
    stash_id
    endpoint
  }
  rating
  details
  death_date
  hair_color
  weight
}
    ${zr}`,vo=m`
    fragment SlimSceneData on Scene {
  id
  checksum
  oshash
  title
  details
  url
  date
  rating
  o_counter
  organized
  path
  phash
  interactive
  interactive_speed
  captions {
    language_code
    caption_type
  }
  file {
    size
    duration
    video_codec
    audio_codec
    width
    height
    framerate
    bitrate
  }
  paths {
    screenshot
    preview
    stream
    webp
    vtt
    chapters_vtt
    sprite
    funscript
    interactive_heatmap
    caption
  }
  scene_markers {
    id
    title
    seconds
  }
  galleries {
    id
    path
    title
  }
  studio {
    id
    name
    image_path
  }
  movies {
    movie {
      id
      name
      front_image_path
    }
    scene_index
  }
  tags {
    id
    name
  }
  performers {
    id
    name
    gender
    favorite
    image_path
  }
  stash_ids {
    endpoint
    stash_id
  }
}
    `,Fn=m`
    fragment GalleryData on Gallery {
  id
  checksum
  path
  created_at
  updated_at
  title
  date
  url
  details
  rating
  organized
  images {
    ...SlimImageData
  }
  cover {
    ...SlimImageData
  }
  studio {
    ...SlimStudioData
  }
  tags {
    ...SlimTagData
  }
  performers {
    ...PerformerData
  }
  scenes {
    ...SlimSceneData
  }
}
    ${Rr}
${Mr}
${zr}
${Ft}
${vo}`,E0=m`
    fragment ImageData on Image {
  id
  checksum
  title
  rating
  organized
  o_counter
  path
  created_at
  updated_at
  file {
    size
    width
    height
  }
  paths {
    thumbnail
    image
  }
  galleries {
    ...GalleryData
  }
  studio {
    ...SlimStudioData
  }
  tags {
    ...SlimTagData
  }
  performers {
    ...PerformerData
  }
}
    ${Fn}
${Mr}
${zr}
${Ft}`,gd=m`
    fragment JobData on Job {
  id
  status
  subTasks
  description
  progress
  startTime
  endTime
  addTime
}
    `,vd=m`
    fragment LogEntryData on LogEntry {
  time
  level
  message
}
    `,x0=m`
    fragment SlimMovieData on Movie {
  id
  name
  front_image_path
}
    `,D0=m`
    fragment SlimPerformerData on Performer {
  id
  name
  gender
  url
  twitter
  instagram
  image_path
  favorite
  ignore_auto_tag
  country
  birthdate
  ethnicity
  hair_color
  eye_color
  height
  fake_tits
  career_length
  tattoos
  piercings
  tags {
    id
    name
  }
  stash_ids {
    endpoint
    stash_id
  }
  rating
  death_date
  weight
}
    `,Ln=m`
    fragment SceneMarkerData on SceneMarker {
  id
  title
  seconds
  stream
  preview
  screenshot
  scene {
    id
  }
  primary_tag {
    id
    name
    aliases
  }
  tags {
    id
    name
    aliases
  }
}
    `,yd=m`
    fragment SlimGalleryData on Gallery {
  id
  checksum
  path
  title
  date
  url
  details
  rating
  organized
  image_count
  cover {
    file {
      size
      width
      height
    }
    paths {
      thumbnail
    }
  }
  studio {
    id
    name
    image_path
  }
  tags {
    id
    name
  }
  performers {
    id
    name
    gender
    favorite
    image_path
  }
  scenes {
    id
    title
    path
  }
}
    `,An=m`
    fragment MovieData on Movie {
  id
  checksum
  name
  aliases
  duration
  date
  rating
  director
  studio {
    ...SlimStudioData
  }
  synopsis
  url
  front_image_path
  back_image_path
  scene_count
  scenes {
    id
    title
    path
  }
}
    ${Mr}`,Rn=m`
    fragment SceneData on Scene {
  id
  checksum
  oshash
  title
  details
  url
  date
  rating
  o_counter
  organized
  path
  phash
  interactive
  interactive_speed
  captions {
    language_code
    caption_type
  }
  created_at
  updated_at
  file {
    size
    duration
    video_codec
    audio_codec
    width
    height
    framerate
    bitrate
  }
  paths {
    screenshot
    preview
    stream
    webp
    vtt
    chapters_vtt
    sprite
    funscript
    interactive_heatmap
    caption
  }
  scene_markers {
    ...SceneMarkerData
  }
  galleries {
    ...SlimGalleryData
  }
  studio {
    ...SlimStudioData
  }
  movies {
    movie {
      ...MovieData
    }
    scene_index
  }
  tags {
    ...SlimTagData
  }
  performers {
    ...PerformerData
  }
  stash_ids {
    endpoint
    stash_id
  }
  sceneStreams {
    url
    mime_type
    label
  }
}
    ${Ln}
${yd}
${Mr}
${An}
${zr}
${Ft}`,Ur=m`
    fragment ScrapedSceneTagData on ScrapedTag {
  stored_id
  name
}
    `,Za=m`
    fragment ScrapedPerformerData on ScrapedPerformer {
  stored_id
  name
  gender
  url
  twitter
  instagram
  birthdate
  ethnicity
  country
  eye_color
  height
  measurements
  fake_tits
  career_length
  tattoos
  piercings
  aliases
  tags {
    ...ScrapedSceneTagData
  }
  images
  details
  death_date
  hair_color
  weight
  remote_site_id
}
    ${Ur}`,T0=m`
    fragment ScrapedMovieStudioData on ScrapedStudio {
  stored_id
  name
  url
}
    `,I0=m`
    fragment ScrapedMovieData on ScrapedMovie {
  name
  aliases
  duration
  date
  rating
  director
  url
  synopsis
  front_image
  back_image
  studio {
    ...ScrapedMovieStudioData
  }
}
    ${T0}`,ba=m`
    fragment ScrapedSceneStudioData on ScrapedStudio {
  stored_id
  name
  url
  remote_site_id
}
    `,yo=m`
    fragment ScrapedScenePerformerData on ScrapedPerformer {
  stored_id
  name
  gender
  url
  twitter
  instagram
  birthdate
  ethnicity
  country
  eye_color
  height
  measurements
  fake_tits
  career_length
  tattoos
  piercings
  aliases
  tags {
    ...ScrapedSceneTagData
  }
  remote_site_id
  images
  details
  death_date
  hair_color
  weight
}
    ${Ur}`,Sd=m`
    fragment ScrapedSceneMovieData on ScrapedMovie {
  stored_id
  name
  aliases
  duration
  date
  rating
  director
  url
  synopsis
}
    `,eu=m`
    fragment ScrapedSceneData on ScrapedScene {
  title
  details
  url
  date
  image
  remote_site_id
  file {
    size
    duration
    video_codec
    audio_codec
    width
    height
    framerate
    bitrate
  }
  studio {
    ...ScrapedSceneStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
  performers {
    ...ScrapedScenePerformerData
  }
  movies {
    ...ScrapedSceneMovieData
  }
  fingerprints {
    hash
    algorithm
    duration
  }
}
    ${ba}
${Ur}
${yo}
${Sd}`,kd=m`
    fragment ScrapedGalleryData on ScrapedGallery {
  title
  details
  url
  date
  studio {
    ...ScrapedSceneStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
  performers {
    ...ScrapedScenePerformerData
  }
}
    ${ba}
${Ur}
${yo}`;m`
    fragment ScrapedStashBoxSceneData on ScrapedScene {
  title
  details
  url
  date
  image
  remote_site_id
  duration
  file {
    size
    duration
    video_codec
    audio_codec
    width
    height
    framerate
    bitrate
  }
  fingerprints {
    hash
    algorithm
    duration
  }
  studio {
    ...ScrapedSceneStudioData
  }
  tags {
    ...ScrapedSceneTagData
  }
  performers {
    ...ScrapedScenePerformerData
  }
  movies {
    ...ScrapedSceneMovieData
  }
}
    ${ba}
${Ur}
${yo}
${Sd}`;m`
    fragment ScrapedStashBoxPerformerData on StashBoxPerformerQueryResult {
  query
  results {
    ...ScrapedScenePerformerData
  }
}
    ${yo}`;const So=m`
    fragment StudioData on Studio {
  id
  checksum
  name
  url
  parent_studio {
    id
    name
    url
    image_path
  }
  child_studios {
    id
    name
    image_path
  }
  ignore_auto_tag
  image_path
  scene_count
  image_count
  gallery_count
  movie_count
  stash_ids {
    stash_id
    endpoint
  }
  details
  rating
  aliases
}
    `,Mn=m`
    fragment TagData on Tag {
  id
  name
  aliases
  ignore_auto_tag
  image_path
  scene_count
  scene_marker_count
  image_count
  gallery_count
  performer_count
  parents {
    ...SlimTagData
  }
  children {
    ...SlimTagData
  }
}
    ${zr}`,N0=m`
    query AllPerformers {
  findPerformers {
    performers {
      name
    }
  }
}
    `;function $0(e){return c0({query:N0,...e})}m`
    mutation Setup($input: SetupInput!) {
  setup(input: $input)
}
    `;m`
    mutation Migrate($input: MigrateInput!) {
  migrate(input: $input)
}
    `;m`
    mutation ConfigureGeneral($input: ConfigGeneralInput!) {
  configureGeneral(input: $input) {
    ...ConfigGeneralData
  }
}
    ${fd}`;m`
    mutation ConfigureInterface($input: ConfigInterfaceInput!) {
  configureInterface(input: $input) {
    ...ConfigInterfaceData
  }
}
    ${dd}`;m`
    mutation ConfigureDLNA($input: ConfigDLNAInput!) {
  configureDLNA(input: $input) {
    ...ConfigDLNAData
  }
}
    ${pd}`;m`
    mutation ConfigureScraping($input: ConfigScrapingInput!) {
  configureScraping(input: $input) {
    ...ConfigScrapingData
  }
}
    ${md}`;m`
    mutation ConfigureDefaults($input: ConfigDefaultSettingsInput!) {
  configureDefaults(input: $input) {
    ...ConfigDefaultSettingsData
  }
}
    ${hd}`;m`
    mutation ConfigureUI($input: Map!) {
  configureUI(input: $input)
}
    `;m`
    mutation GenerateAPIKey($input: GenerateAPIKeyInput!) {
  generateAPIKey(input: $input)
}
    `;m`
    mutation EnableDLNA($input: EnableDLNAInput!) {
  enableDLNA(input: $input)
}
    `;m`
    mutation DisableDLNA($input: DisableDLNAInput!) {
  disableDLNA(input: $input)
}
    `;m`
    mutation AddTempDLNAIP($input: AddTempDLNAIPInput!) {
  addTempDLNAIP(input: $input)
}
    `;m`
    mutation RemoveTempDLNAIP($input: RemoveTempDLNAIPInput!) {
  removeTempDLNAIP(input: $input)
}
    `;m`
    mutation SaveFilter($input: SaveFilterInput!) {
  saveFilter(input: $input) {
    ...SavedFilterData
  }
}
    ${go}`;m`
    mutation DestroySavedFilter($input: DestroyFilterInput!) {
  destroySavedFilter(input: $input)
}
    `;m`
    mutation SetDefaultFilter($input: SetDefaultFilterInput!) {
  setDefaultFilter(input: $input)
}
    `;m`
    mutation GalleryCreate($input: GalleryCreateInput!) {
  galleryCreate(input: $input) {
    ...GalleryData
  }
}
    ${Fn}`;m`
    mutation GalleryUpdate($input: GalleryUpdateInput!) {
  galleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${Fn}`;m`
    mutation BulkGalleryUpdate($input: BulkGalleryUpdateInput!) {
  bulkGalleryUpdate(input: $input) {
    ...GalleryData
  }
}
    ${Fn}`;m`
    mutation GalleriesUpdate($input: [GalleryUpdateInput!]!) {
  galleriesUpdate(input: $input) {
    ...GalleryData
  }
}
    ${Fn}`;m`
    mutation GalleryDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  galleryDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;m`
    mutation AddGalleryImages($gallery_id: ID!, $image_ids: [ID!]!) {
  addGalleryImages(input: {gallery_id: $gallery_id, image_ids: $image_ids})
}
    `;m`
    mutation RemoveGalleryImages($gallery_id: ID!, $image_ids: [ID!]!) {
  removeGalleryImages(input: {gallery_id: $gallery_id, image_ids: $image_ids})
}
    `;m`
    mutation ImageUpdate($input: ImageUpdateInput!) {
  imageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${Rr}`;m`
    mutation BulkImageUpdate($input: BulkImageUpdateInput!) {
  bulkImageUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${Rr}`;m`
    mutation ImagesUpdate($input: [ImageUpdateInput!]!) {
  imagesUpdate(input: $input) {
    ...SlimImageData
  }
}
    ${Rr}`;m`
    mutation ImageIncrementO($id: ID!) {
  imageIncrementO(id: $id)
}
    `;m`
    mutation ImageDecrementO($id: ID!) {
  imageDecrementO(id: $id)
}
    `;m`
    mutation ImageResetO($id: ID!) {
  imageResetO(id: $id)
}
    `;m`
    mutation ImageDestroy($id: ID!, $delete_file: Boolean, $delete_generated: Boolean) {
  imageDestroy(
    input: {id: $id, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;m`
    mutation ImagesDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  imagesDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;m`
    mutation StopJob($job_id: ID!) {
  stopJob(job_id: $job_id)
}
    `;m`
    mutation StopAllJobs {
  stopAllJobs
}
    `;m`
    mutation MetadataImport {
  metadataImport
}
    `;m`
    mutation MetadataExport {
  metadataExport
}
    `;m`
    mutation ExportObjects($input: ExportObjectsInput!) {
  exportObjects(input: $input)
}
    `;m`
    mutation ImportObjects($input: ImportObjectsInput!) {
  importObjects(input: $input)
}
    `;m`
    mutation MetadataScan($input: ScanMetadataInput!) {
  metadataScan(input: $input)
}
    `;m`
    mutation MetadataGenerate($input: GenerateMetadataInput!) {
  metadataGenerate(input: $input)
}
    `;m`
    mutation MetadataAutoTag($input: AutoTagMetadataInput!) {
  metadataAutoTag(input: $input)
}
    `;m`
    mutation MetadataIdentify($input: IdentifyMetadataInput!) {
  metadataIdentify(input: $input)
}
    `;m`
    mutation MetadataClean($input: CleanMetadataInput!) {
  metadataClean(input: $input)
}
    `;m`
    mutation MigrateHashNaming {
  migrateHashNaming
}
    `;m`
    mutation BackupDatabase($input: BackupDatabaseInput!) {
  backupDatabase(input: $input)
}
    `;m`
    mutation MovieCreate($name: String!, $aliases: String, $duration: Int, $date: String, $rating: Int, $studio_id: ID, $director: String, $synopsis: String, $url: String, $front_image: String, $back_image: String) {
  movieCreate(
    input: {name: $name, aliases: $aliases, duration: $duration, date: $date, rating: $rating, studio_id: $studio_id, director: $director, synopsis: $synopsis, url: $url, front_image: $front_image, back_image: $back_image}
  ) {
    ...MovieData
  }
}
    ${An}`;m`
    mutation MovieUpdate($input: MovieUpdateInput!) {
  movieUpdate(input: $input) {
    ...MovieData
  }
}
    ${An}`;m`
    mutation BulkMovieUpdate($input: BulkMovieUpdateInput!) {
  bulkMovieUpdate(input: $input) {
    ...MovieData
  }
}
    ${An}`;m`
    mutation MovieDestroy($id: ID!) {
  movieDestroy(input: {id: $id})
}
    `;m`
    mutation MoviesDestroy($ids: [ID!]!) {
  moviesDestroy(ids: $ids)
}
    `;m`
    mutation PerformerCreate($input: PerformerCreateInput!) {
  performerCreate(input: $input) {
    ...PerformerData
  }
}
    ${Ft}`;m`
    mutation PerformerUpdate($input: PerformerUpdateInput!) {
  performerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${Ft}`;m`
    mutation BulkPerformerUpdate($input: BulkPerformerUpdateInput!) {
  bulkPerformerUpdate(input: $input) {
    ...PerformerData
  }
}
    ${Ft}`;m`
    mutation PerformerDestroy($id: ID!) {
  performerDestroy(input: {id: $id})
}
    `;m`
    mutation PerformersDestroy($ids: [ID!]!) {
  performersDestroy(ids: $ids)
}
    `;m`
    mutation ReloadPlugins {
  reloadPlugins
}
    `;m`
    mutation RunPluginTask($plugin_id: ID!, $task_name: String!, $args: [PluginArgInput!]) {
  runPluginTask(plugin_id: $plugin_id, task_name: $task_name, args: $args)
}
    `;m`
    mutation SceneMarkerCreate($title: String!, $seconds: Float!, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerCreate(
    input: {title: $title, seconds: $seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${Ln}`;m`
    mutation SceneMarkerUpdate($id: ID!, $title: String!, $seconds: Float!, $scene_id: ID!, $primary_tag_id: ID!, $tag_ids: [ID!] = []) {
  sceneMarkerUpdate(
    input: {id: $id, title: $title, seconds: $seconds, scene_id: $scene_id, primary_tag_id: $primary_tag_id, tag_ids: $tag_ids}
  ) {
    ...SceneMarkerData
  }
}
    ${Ln}`;m`
    mutation SceneMarkerDestroy($id: ID!) {
  sceneMarkerDestroy(id: $id)
}
    `;m`
    mutation SceneUpdate($input: SceneUpdateInput!) {
  sceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${Rn}`;m`
    mutation BulkSceneUpdate($input: BulkSceneUpdateInput!) {
  bulkSceneUpdate(input: $input) {
    ...SceneData
  }
}
    ${Rn}`;m`
    mutation ScenesUpdate($input: [SceneUpdateInput!]!) {
  scenesUpdate(input: $input) {
    ...SceneData
  }
}
    ${Rn}`;m`
    mutation SceneIncrementO($id: ID!) {
  sceneIncrementO(id: $id)
}
    `;m`
    mutation SceneDecrementO($id: ID!) {
  sceneDecrementO(id: $id)
}
    `;m`
    mutation SceneResetO($id: ID!) {
  sceneResetO(id: $id)
}
    `;m`
    mutation SceneDestroy($id: ID!, $delete_file: Boolean, $delete_generated: Boolean) {
  sceneDestroy(
    input: {id: $id, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;m`
    mutation ScenesDestroy($ids: [ID!]!, $delete_file: Boolean, $delete_generated: Boolean) {
  scenesDestroy(
    input: {ids: $ids, delete_file: $delete_file, delete_generated: $delete_generated}
  )
}
    `;m`
    mutation SceneGenerateScreenshot($id: ID!, $at: Float) {
  sceneGenerateScreenshot(id: $id, at: $at)
}
    `;m`
    mutation ReloadScrapers {
  reloadScrapers
}
    `;m`
    mutation SubmitStashBoxFingerprints($input: StashBoxFingerprintSubmissionInput!) {
  submitStashBoxFingerprints(input: $input)
}
    `;m`
    mutation StashBoxBatchPerformerTag($input: StashBoxBatchPerformerTagInput!) {
  stashBoxBatchPerformerTag(input: $input)
}
    `;m`
    mutation SubmitStashBoxSceneDraft($input: StashBoxDraftSubmissionInput!) {
  submitStashBoxSceneDraft(input: $input)
}
    `;m`
    mutation SubmitStashBoxPerformerDraft($input: StashBoxDraftSubmissionInput!) {
  submitStashBoxPerformerDraft(input: $input)
}
    `;m`
    mutation StudioCreate($input: StudioCreateInput!) {
  studioCreate(input: $input) {
    ...StudioData
  }
}
    ${So}`;m`
    mutation StudioUpdate($input: StudioUpdateInput!) {
  studioUpdate(input: $input) {
    ...StudioData
  }
}
    ${So}`;m`
    mutation StudioDestroy($id: ID!) {
  studioDestroy(input: {id: $id})
}
    `;m`
    mutation StudiosDestroy($ids: [ID!]!) {
  studiosDestroy(ids: $ids)
}
    `;m`
    mutation TagCreate($input: TagCreateInput!) {
  tagCreate(input: $input) {
    ...TagData
  }
}
    ${Mn}`;m`
    mutation TagDestroy($id: ID!) {
  tagDestroy(input: {id: $id})
}
    `;m`
    mutation TagsDestroy($ids: [ID!]!) {
  tagsDestroy(ids: $ids)
}
    `;m`
    mutation TagUpdate($input: TagUpdateInput!) {
  tagUpdate(input: $input) {
    ...TagData
  }
}
    ${Mn}`;m`
    mutation TagsMerge($source: [ID!]!, $destination: ID!) {
  tagsMerge(input: {source: $source, destination: $destination}) {
    ...TagData
  }
}
    ${Mn}`;m`
    query DLNAStatus {
  dlnaStatus {
    running
    until
    recentIPAddresses
    allowedIPAddresses {
      ipAddress
      until
    }
  }
}
    `;m`
    query FindSavedFilter($id: ID!) {
  findSavedFilter(id: $id) {
    ...SavedFilterData
  }
}
    ${go}`;m`
    query FindSavedFilters($mode: FilterMode) {
  findSavedFilters(mode: $mode) {
    ...SavedFilterData
  }
}
    ${go}`;m`
    query FindDefaultFilter($mode: FilterMode!) {
  findDefaultFilter(mode: $mode) {
    ...SavedFilterData
  }
}
    ${go}`;m`
    query FindGalleries($filter: FindFilterType, $gallery_filter: GalleryFilterType) {
  findGalleries(gallery_filter: $gallery_filter, filter: $filter) {
    count
    galleries {
      ...SlimGalleryData
    }
  }
}
    ${yd}`;m`
    query FindGallery($id: ID!) {
  findGallery(id: $id) {
    ...GalleryData
  }
}
    ${Fn}`;m`
    query FindImages($filter: FindFilterType, $image_filter: ImageFilterType, $image_ids: [Int!]) {
  findImages(filter: $filter, image_filter: $image_filter, image_ids: $image_ids) {
    count
    megapixels
    filesize
    images {
      ...SlimImageData
    }
  }
}
    ${Rr}`;m`
    query FindImage($id: ID!, $checksum: String) {
  findImage(id: $id, checksum: $checksum) {
    ...ImageData
  }
}
    ${E0}`;m`
    query JobQueue {
  jobQueue {
    ...JobData
  }
}
    ${gd}`;m`
    query FindJob($input: FindJobInput!) {
  findJob(input: $input) {
    ...JobData
  }
}
    ${gd}`;m`
    query SceneWall($q: String) {
  sceneWall(q: $q) {
    ...SceneData
  }
}
    ${Rn}`;m`
    query MarkerWall($q: String) {
  markerWall(q: $q) {
    ...SceneMarkerData
  }
}
    ${Ln}`;m`
    query MarkerStrings($q: String, $sort: String) {
  markerStrings(q: $q, sort: $sort) {
    id
    count
    title
  }
}
    `;m`
    query AllTags {
  allTags {
    ...TagData
  }
}
    ${Mn}`;m`
    query AllPerformersForFilter {
  allPerformers {
    ...SlimPerformerData
  }
}
    ${D0}`;m`
    query AllStudiosForFilter {
  allStudios {
    ...SlimStudioData
  }
}
    ${Mr}`;m`
    query AllMoviesForFilter {
  allMovies {
    ...SlimMovieData
  }
}
    ${x0}`;m`
    query AllTagsForFilter {
  allTags {
    id
    name
    aliases
  }
}
    `;m`
    query Stats {
  stats {
    scene_count
    scenes_size
    scenes_duration
    image_count
    images_size
    gallery_count
    performer_count
    studio_count
    movie_count
    tag_count
  }
}
    `;m`
    query Logs {
  logs {
    ...LogEntryData
  }
}
    ${vd}`;m`
    query Version {
  version {
    version
    hash
    build_time
  }
}
    `;m`
    query LatestVersion {
  latestversion {
    shorthash
    url
  }
}
    `;m`
    query FindMovies($filter: FindFilterType, $movie_filter: MovieFilterType) {
  findMovies(filter: $filter, movie_filter: $movie_filter) {
    count
    movies {
      ...MovieData
    }
  }
}
    ${An}`;m`
    query FindMovie($id: ID!) {
  findMovie(id: $id) {
    ...MovieData
  }
}
    ${An}`;m`
    query FindPerformers($filter: FindFilterType, $performer_filter: PerformerFilterType) {
  findPerformers(filter: $filter, performer_filter: $performer_filter) {
    count
    performers {
      ...PerformerData
    }
  }
}
    ${Ft}`;m`
    query FindPerformer($id: ID!) {
  findPerformer(id: $id) {
    ...PerformerData
  }
}
    ${Ft}`;m`
    query Plugins {
  plugins {
    id
    name
    description
    url
    version
    tasks {
      name
      description
    }
    hooks {
      name
      description
      hooks
    }
  }
}
    `;m`
    query PluginTasks {
  pluginTasks {
    name
    description
    plugin {
      id
      name
    }
  }
}
    `;m`
    query FindSceneMarkers($filter: FindFilterType, $scene_marker_filter: SceneMarkerFilterType) {
  findSceneMarkers(filter: $filter, scene_marker_filter: $scene_marker_filter) {
    count
    scene_markers {
      ...SceneMarkerData
    }
  }
}
    ${Ln}`;m`
    query FindScenes($filter: FindFilterType, $scene_filter: SceneFilterType, $scene_ids: [Int!]) {
  findScenes(filter: $filter, scene_filter: $scene_filter, scene_ids: $scene_ids) {
    count
    filesize
    duration
    scenes {
      ...SceneData
    }
  }
}
    ${Rn}`;m`
    query FindScenesByPathRegex($filter: FindFilterType) {
  findScenesByPathRegex(filter: $filter) {
    count
    filesize
    duration
    scenes {
      ...SlimSceneData
    }
  }
}
    ${vo}`;m`
    query FindDuplicateScenes($distance: Int) {
  findDuplicateScenes(distance: $distance) {
    ...SlimSceneData
  }
}
    ${vo}`;m`
    query FindScene($id: ID!, $checksum: String) {
  findScene(id: $id, checksum: $checksum) {
    ...SceneData
  }
}
    ${Rn}`;m`
    query FindSceneMarkerTags($id: ID!) {
  sceneMarkerTags(scene_id: $id) {
    tag {
      id
      name
    }
    scene_markers {
      ...SceneMarkerData
    }
  }
}
    ${Ln}`;m`
    query ParseSceneFilenames($filter: FindFilterType!, $config: SceneParserInput!) {
  parseSceneFilenames(filter: $filter, config: $config) {
    count
    results {
      scene {
        ...SlimSceneData
      }
      title
      details
      url
      date
      rating
      studio_id
      gallery_ids
      movies {
        movie_id
      }
      performer_ids
      tag_ids
    }
  }
}
    ${vo}`;m`
    query SceneStreams($id: ID!) {
  findScene(id: $id) {
    sceneStreams {
      url
      mime_type
      label
    }
  }
}
    `;m`
    query ScrapeFreeonesPerformers($q: String!) {
  scrapeFreeonesPerformerList(query: $q)
}
    `;m`
    query ListPerformerScrapers {
  listPerformerScrapers {
    id
    name
    performer {
      urls
      supported_scrapes
    }
  }
}
    `;m`
    query ListSceneScrapers {
  listSceneScrapers {
    id
    name
    scene {
      urls
      supported_scrapes
    }
  }
}
    `;m`
    query ListGalleryScrapers {
  listGalleryScrapers {
    id
    name
    gallery {
      urls
      supported_scrapes
    }
  }
}
    `;m`
    query ListMovieScrapers {
  listMovieScrapers {
    id
    name
    movie {
      urls
      supported_scrapes
    }
  }
}
    `;m`
    query ScrapeSinglePerformer($source: ScraperSourceInput!, $input: ScrapeSinglePerformerInput!) {
  scrapeSinglePerformer(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${Za}`;m`
    query ScrapeMultiPerformers($source: ScraperSourceInput!, $input: ScrapeMultiPerformersInput!) {
  scrapeMultiPerformers(source: $source, input: $input) {
    ...ScrapedPerformerData
  }
}
    ${Za}`;m`
    query ScrapePerformerURL($url: String!) {
  scrapePerformerURL(url: $url) {
    ...ScrapedPerformerData
  }
}
    ${Za}`;m`
    query ScrapeSingleScene($source: ScraperSourceInput!, $input: ScrapeSingleSceneInput!) {
  scrapeSingleScene(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${eu}`;m`
    query ScrapeMultiScenes($source: ScraperSourceInput!, $input: ScrapeMultiScenesInput!) {
  scrapeMultiScenes(source: $source, input: $input) {
    ...ScrapedSceneData
  }
}
    ${eu}`;m`
    query ScrapeSceneURL($url: String!) {
  scrapeSceneURL(url: $url) {
    ...ScrapedSceneData
  }
}
    ${eu}`;m`
    query ScrapeSingleGallery($source: ScraperSourceInput!, $input: ScrapeSingleGalleryInput!) {
  scrapeSingleGallery(source: $source, input: $input) {
    ...ScrapedGalleryData
  }
}
    ${kd}`;m`
    query ScrapeGalleryURL($url: String!) {
  scrapeGalleryURL(url: $url) {
    ...ScrapedGalleryData
  }
}
    ${kd}`;m`
    query ScrapeMovieURL($url: String!) {
  scrapeMovieURL(url: $url) {
    ...ScrapedMovieData
  }
}
    ${I0}`;m`
    query Configuration {
  configuration {
    ...ConfigData
  }
}
    ${_0}`;m`
    query Directory($path: String) {
  directory(path: $path) {
    path
    parent
    directories
  }
}
    `;m`
    query ValidateStashBox($input: StashBoxInput!) {
  validateStashBoxCredentials(input: $input) {
    valid
    status
  }
}
    `;m`
    query SystemStatus {
  systemStatus {
    databaseSchema
    databasePath
    appSchema
    status
    configPath
  }
}
    `;m`
    query FindStudios($filter: FindFilterType, $studio_filter: StudioFilterType) {
  findStudios(filter: $filter, studio_filter: $studio_filter) {
    count
    studios {
      ...StudioData
    }
  }
}
    ${So}`;m`
    query FindStudio($id: ID!) {
  findStudio(id: $id) {
    ...StudioData
  }
}
    ${So}`;m`
    query FindTags($filter: FindFilterType, $tag_filter: TagFilterType) {
  findTags(filter: $filter, tag_filter: $tag_filter) {
    count
    tags {
      ...TagData
    }
  }
}
    ${Mn}`;m`
    query FindTag($id: ID!) {
  findTag(id: $id) {
    ...TagData
  }
}
    ${Mn}`;m`
    subscription JobsSubscribe {
  jobsSubscribe {
    type
    job {
      id
      status
      subTasks
      description
      progress
    }
  }
}
    `;m`
    subscription LoggingSubscribe {
  loggingSubscribe {
    ...LogEntryData
  }
}
    ${vd}`;m`
    subscription ScanCompleteSubscribe {
  scanCompleteSubscribe
}
    `;var tu={exports:{}},ko={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0=Se.exports,O0=Symbol.for("react.element"),P0=Symbol.for("react.fragment"),F0=Object.prototype.hasOwnProperty,L0=C0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A0={key:!0,ref:!0,__self:!0,__source:!0};function wd(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)F0.call(t,r)&&!A0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:O0,type:e,key:o,ref:l,props:i,_owner:L0.current}}ko.Fragment=P0;ko.jsx=wd;ko.jsxs=wd;tu.exports=ko;const qe=tu.exports.jsx,_i=tu.exports.jsxs;function R0(){const e=localStorage.getItem("ApiKey"),t=localStorage.getItem("EndPoint");return _i("div",{className:"flex flex-col",children:[_i("div",{children:[qe("span",{className:"mr-1",children:"Current Token"}),qe("span",{className:`${e?"":"text-slate-400"}`,children:e||"nothing"})]}),qe("input",{type:"text",placeholder:"input new token",onKeyDown:n=>{n.key==="Enter"&&(localStorage.setItem("ApiKey",n.currentTarget.value),window.location.reload())}}),_i("div",{children:[qe("span",{className:"mr-1",children:"Current EndPoint"}),qe("span",{className:`${t?"":"text-slate-400"}`,children:t||`default(${ud})`})]}),qe("input",{type:"text",placeholder:"input new end point",onKeyDown:n=>{n.key==="Enter"&&(localStorage.setItem("EndPoint",n.currentTarget.value),window.location.reload())}})]})}function M0(){const[e]=$0();return Se.exports.useEffect(()=>{e.fetching||console.log(e.error)},[e]),_i("div",{children:[qe(R0,{}),qe("span",{children:JSON.stringify(e)})]})}const z0=ad({url:(()=>{const e=localStorage.getItem("EndPoint");return typeof e!="string"||e.trim().length===0?ud:e.trim()})(),fetchOptions:()=>({headers:{ApiKey:localStorage.getItem("ApiKey")||""}})});nl.createRoot(document.getElementById("root")).render(qe(zd.StrictMode,{children:qe(o0,{value:z0,children:qe(M0,{})})}));
