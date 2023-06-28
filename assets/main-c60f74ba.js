(function(){const Y=document.createElement("link").relList;if(Y&&Y.supports&&Y.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))m(f);new MutationObserver(f=>{for(const r of f)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&m(c)}).observe(document,{childList:!0,subtree:!0});function g(f){const r={};return f.integrity&&(r.integrity=f.integrity),f.referrerPolicy&&(r.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?r.credentials="include":f.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function m(f){if(f.ep)return;f.ep=!0;const r=g(f);fetch(f.href,r)}})();const q=()=>{const u=document.createElement("div");u.style.visibility="hidden",u.style.overflow="scroll",document.body.appendChild(u);const Y=document.createElement("div");u.appendChild(Y);const g=u.offsetWidth-Y.offsetWidth;return u.parentNode.removeChild(u),g},R=u=>{if(u){const Y=q();document.body.style.paddingRight=`${Y}px`,document.body.style.overflow="hidden",document.querySelector("html").style.overflow="hidden"}else document.body.style.paddingRight="",document.body.style.overflowY="",document.querySelector("html").style.overflow=""},L=()=>{const u={mobile:360,smartphone:480,tablet:960,laptop:1200};let Y="";for(const[g,m]of Object.entries(u))window.matchMedia(`(min-width: ${m}px)`).matches&&(Y=g);return Y||"mobile"},O=document.querySelector(".burger-button"),E=document.querySelector(".burger-menu"),M=document.querySelector(".logo-icon");let k=!1;const F=()=>{k===!1?(O.classList.add("burger-button-opened"),setTimeout(()=>{M.classList.add("logo-icon-black")},200),E.classList.add("burger-active"),R(!0)):(O.classList.remove("burger-button-opened"),M.classList.remove("logo-icon-black"),E.classList.remove("burger-active"),R(!1)),k=!k};O.addEventListener("click",F);let A=L();const W=document.querySelectorAll(".flip-card");["tablet","laptop"].includes(A)&&(document.querySelector(".menu").classList.add("fade-in-menu"),document.querySelector(".main-header").classList.add("fade-in-header"),document.querySelector(".reveal").classList.add("reveal-animated"),W.forEach(u=>{let Y=u.dataset.card;setTimeout(()=>{u.classList.add("fade-in-delay")},Y*500),setTimeout(()=>{u.classList.add("pointer-events-auto")},Y*1e3)}));var P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function I(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}function S(u){throw new Error('Could not dynamically require "'+u+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var x={exports:{}};(function(u,Y){(function(g){u.exports=g()})(function(){return function g(m,f,r){function c(n,d){if(!f[n]){if(!m[n]){var w=typeof S=="function"&&S;if(!d&&w)return w(n,!0);if(l)return l(n,!0);var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}var a=f[n]={exports:{}};m[n][0].call(a.exports,function(i){var e=m[n][1][i];return c(e||i)},a,a.exports,g,m,f,r)}return f[n].exports}for(var l=typeof S=="function"&&S,b=0;b<r.length;b++)c(r[b]);return c}({1:[function(g,m,f){var r=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;function b(d){if(d==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(d)}function n(){try{if(!Object.assign)return!1;var d=new String("abc");if(d[5]="de",Object.getOwnPropertyNames(d)[0]==="5")return!1;for(var w={},s=0;s<10;s++)w["_"+String.fromCharCode(s)]=s;var a=Object.getOwnPropertyNames(w).map(function(e){return w[e]});if(a.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(e){i[e]=e}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}m.exports=n()?Object.assign:function(d,w){for(var s,a=b(d),i,e=1;e<arguments.length;e++){s=Object(arguments[e]);for(var t in s)c.call(s,t)&&(a[t]=s[t]);if(r){i=r(s);for(var o=0;o<i.length;o++)l.call(s,i[o])&&(a[i[o]]=s[i[o]])}}return a}},{}],2:[function(g,m,f){(function(r){(function(){var c,l,b,n,d,w;typeof performance<"u"&&performance!==null&&performance.now?m.exports=function(){return performance.now()}:typeof r<"u"&&r!==null&&r.hrtime?(m.exports=function(){return(c()-d)/1e6},l=r.hrtime,c=function(){var s;return s=l(),s[0]*1e9+s[1]},n=c(),w=r.uptime()*1e9,d=n-w):Date.now?(m.exports=function(){return Date.now()-b},b=Date.now()):(m.exports=function(){return new Date().getTime()-b},b=new Date().getTime())}).call(this)}).call(this,g("_process"))},{_process:3}],3:[function(g,m,f){var r=m.exports={},c,l;function b(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?c=setTimeout:c=b}catch{c=b}try{typeof clearTimeout=="function"?l=clearTimeout:l=n}catch{l=n}})();function d(h){if(c===setTimeout)return setTimeout(h,0);if((c===b||!c)&&setTimeout)return c=setTimeout,setTimeout(h,0);try{return c(h,0)}catch{try{return c.call(null,h,0)}catch{return c.call(this,h,0)}}}function w(h){if(l===clearTimeout)return clearTimeout(h);if((l===n||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(h);try{return l(h)}catch{try{return l.call(null,h)}catch{return l.call(this,h)}}}var s=[],a=!1,i,e=-1;function t(){!a||!i||(a=!1,i.length?s=i.concat(s):e=-1,s.length&&o())}function o(){if(!a){var h=d(t);a=!0;for(var y=s.length;y;){for(i=s,s=[];++e<y;)i&&i[e].run();e=-1,y=s.length}i=null,a=!1,w(h)}}r.nextTick=function(h){var y=new Array(arguments.length-1);if(arguments.length>1)for(var X=1;X<arguments.length;X++)y[X-1]=arguments[X];s.push(new p(h,y)),s.length===1&&!a&&d(o)};function p(h,y){this.fun=h,this.array=y}p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={};function v(){}r.on=v,r.addListener=v,r.once=v,r.off=v,r.removeListener=v,r.removeAllListeners=v,r.emit=v,r.prependListener=v,r.prependOnceListener=v,r.listeners=function(h){return[]},r.binding=function(h){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(h){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},{}],4:[function(g,m,f){(function(r){for(var c=g("performance-now"),l=typeof window>"u"?r:window,b=["moz","webkit"],n="AnimationFrame",d=l["request"+n],w=l["cancel"+n]||l["cancelRequest"+n],s=0;!d&&s<b.length;s++)d=l[b[s]+"Request"+n],w=l[b[s]+"Cancel"+n]||l[b[s]+"CancelRequest"+n];if(!d||!w){var a=0,i=0,e=[],t=1e3/60;d=function(o){if(e.length===0){var p=c(),v=Math.max(0,t-(p-a));a=v+p,setTimeout(function(){var h=e.slice(0);e.length=0;for(var y=0;y<h.length;y++)if(!h[y].cancelled)try{h[y].callback(a)}catch(X){setTimeout(function(){throw X},0)}},Math.round(v))}return e.push({handle:++i,callback:o,cancelled:!1}),i},w=function(o){for(var p=0;p<e.length;p++)e[p].handle===o&&(e[p].cancelled=!0)}}m.exports=function(o){return d.call(l,o)},m.exports.cancel=function(){w.apply(l,arguments)},m.exports.polyfill=function(){l.requestAnimationFrame=d,l.cancelAnimationFrame=w}}).call(this,typeof P<"u"?P:typeof self<"u"?self:typeof window<"u"?window:{})},{"performance-now":2}],5:[function(g,m,f){var r=function(){function a(i,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(i,o.key,o)}}return function(i,e,t){return e&&a(i.prototype,e),t&&a(i,t),i}}();function c(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")}var l=g("raf"),b=g("object-assign"),n={propertyCache:{},vendors:[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],clamp:function(i,e,t){return e<t?i<e?e:i>t?t:i:i<t?t:i>e?e:i},data:function(i,e){return n.deserialize(i.getAttribute("data-"+e))},deserialize:function(i){return i==="true"?!0:i==="false"?!1:i==="null"?null:!isNaN(parseFloat(i))&&isFinite(i)?parseFloat(i):i},camelCase:function(i){return i.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})},accelerate:function(i){n.css(i,"transform","translate3d(0,0,0) rotate(0.0001deg)"),n.css(i,"transform-style","preserve-3d"),n.css(i,"backface-visibility","hidden")},transformSupport:function(i){for(var e=document.createElement("div"),t=!1,o=null,p=!1,v=null,h=null,y=0,X=n.vendors.length;y<X;y++)if(n.vendors[y]!==null?(v=n.vendors[y][0]+"transform",h=n.vendors[y][1]+"Transform"):(v="transform",h="transform"),e.style[h]!==void 0){t=!0;break}switch(i){case"2D":p=t;break;case"3D":if(t){var T=document.body||document.createElement("body"),C=document.documentElement,j=C.style.overflow,D=!1;document.body||(D=!0,C.style.overflow="hidden",C.appendChild(T),T.style.overflow="hidden",T.style.background=""),T.appendChild(e),e.style[h]="translate3d(1px,1px,1px)",o=window.getComputedStyle(e).getPropertyValue(v),p=o!==void 0&&o.length>0&&o!=="none",C.style.overflow=j,T.removeChild(e),D&&(T.removeAttribute("style"),T.parentNode.removeChild(T))}break}return p},css:function(i,e,t){var o=n.propertyCache[e];if(!o){for(var p=0,v=n.vendors.length;p<v;p++)if(n.vendors[p]!==null?o=n.camelCase(n.vendors[p][1]+"-"+e):o=e,i.style[o]!==void 0){n.propertyCache[e]=o;break}}i.style[o]=t}},d=30,w={relativeInput:!1,clipRelativeInput:!1,inputElement:null,hoverOnly:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!1,precision:1,onReady:null,selector:null},s=function(){function a(i,e){c(this,a),this.element=i;var t={calibrateX:n.data(this.element,"calibrate-x"),calibrateY:n.data(this.element,"calibrate-y"),invertX:n.data(this.element,"invert-x"),invertY:n.data(this.element,"invert-y"),limitX:n.data(this.element,"limit-x"),limitY:n.data(this.element,"limit-y"),scalarX:n.data(this.element,"scalar-x"),scalarY:n.data(this.element,"scalar-y"),frictionX:n.data(this.element,"friction-x"),frictionY:n.data(this.element,"friction-y"),originX:n.data(this.element,"origin-x"),originY:n.data(this.element,"origin-y"),pointerEvents:n.data(this.element,"pointer-events"),precision:n.data(this.element,"precision"),relativeInput:n.data(this.element,"relative-input"),clipRelativeInput:n.data(this.element,"clip-relative-input"),hoverOnly:n.data(this.element,"hover-only"),inputElement:document.querySelector(n.data(this.element,"input-element")),selector:n.data(this.element,"selector")};for(var o in t)t[o]===null&&delete t[o];b(this,w,t,e),this.inputElement||(this.inputElement=this.element),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.elementPositionX=0,this.elementPositionY=0,this.elementWidth=0,this.elementHeight=0,this.elementCenterX=0,this.elementCenterY=0,this.elementRangeX=0,this.elementRangeY=0,this.calibrationX=0,this.calibrationY=0,this.inputX=0,this.inputY=0,this.motionX=0,this.motionY=0,this.velocityX=0,this.velocityY=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onDeviceMotion=this.onDeviceMotion.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onMotionTimer=this.onMotionTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.windowWidth=null,this.windowHeight=null,this.windowCenterX=null,this.windowCenterY=null,this.windowRadiusX=null,this.windowRadiusY=null,this.portrait=!1,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.motionSupport=!!window.DeviceMotionEvent&&!this.desktop,this.orientationSupport=!!window.DeviceOrientationEvent&&!this.desktop,this.orientationStatus=0,this.motionStatus=0,this.initialise()}return r(a,[{key:"initialise",value:function(){this.transform2DSupport===void 0&&(this.transform2DSupport=n.transformSupport("2D"),this.transform3DSupport=n.transformSupport("3D")),this.transform3DSupport&&n.accelerate(this.element);var e=window.getComputedStyle(this.element);e.getPropertyValue("position")==="static"&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)}},{key:"doReadyCallback",value:function(){this.onReady&&this.onReady()}},{key:"updateLayers",value:function(){this.selector?this.layers=this.element.querySelectorAll(this.selector):this.layers=this.element.children,this.layers.length||console.warn("ParallaxJS: Your scene does not have any layers."),this.depthsX=[],this.depthsY=[];for(var e=0;e<this.layers.length;e++){var t=this.layers[e];this.transform3DSupport&&n.accelerate(t),t.style.position=e?"absolute":"relative",t.style.display="block",t.style.left=0,t.style.top=0;var o=n.data(t,"depth")||0;this.depthsX.push(n.data(t,"depth-x")||o),this.depthsY.push(n.data(t,"depth-y")||o)}}},{key:"updateDimensions",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowCenterX=this.windowWidth*this.originX,this.windowCenterY=this.windowHeight*this.originY,this.windowRadiusX=Math.max(this.windowCenterX,this.windowWidth-this.windowCenterX),this.windowRadiusY=Math.max(this.windowCenterY,this.windowHeight-this.windowCenterY)}},{key:"updateBounds",value:function(){this.bounds=this.inputElement.getBoundingClientRect(),this.elementPositionX=this.bounds.left,this.elementPositionY=this.bounds.top,this.elementWidth=this.bounds.width,this.elementHeight=this.bounds.height,this.elementCenterX=this.elementWidth*this.originX,this.elementCenterY=this.elementHeight*this.originY,this.elementRangeX=Math.max(this.elementCenterX,this.elementWidth-this.elementCenterX),this.elementRangeY=Math.max(this.elementCenterY,this.elementHeight-this.elementCenterY)}},{key:"queueCalibration",value:function(e){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,e)}},{key:"enable",value:function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=!1,window.addEventListener("deviceorientation",this.onDeviceOrientation),this.detectionTimer=setTimeout(this.onOrientationTimer,this.supportDelay)):this.motionSupport?(this.portrait=!1,window.addEventListener("devicemotion",this.onDeviceMotion),this.detectionTimer=setTimeout(this.onMotionTimer,this.supportDelay)):(this.calibrationX=0,this.calibrationY=0,this.portrait=!1,window.addEventListener("mousemove",this.onMouseMove),this.doReadyCallback()),window.addEventListener("resize",this.onWindowResize),this.raf=l(this.onAnimationFrame))}},{key:"disable",value:function(){this.enabled&&(this.enabled=!1,this.orientationSupport?window.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?window.removeEventListener("devicemotion",this.onDeviceMotion):window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize),l.cancel(this.raf))}},{key:"calibrate",value:function(e,t){this.calibrateX=e===void 0?this.calibrateX:e,this.calibrateY=t===void 0?this.calibrateY:t}},{key:"invert",value:function(e,t){this.invertX=e===void 0?this.invertX:e,this.invertY=t===void 0?this.invertY:t}},{key:"friction",value:function(e,t){this.frictionX=e===void 0?this.frictionX:e,this.frictionY=t===void 0?this.frictionY:t}},{key:"scalar",value:function(e,t){this.scalarX=e===void 0?this.scalarX:e,this.scalarY=t===void 0?this.scalarY:t}},{key:"limit",value:function(e,t){this.limitX=e===void 0?this.limitX:e,this.limitY=t===void 0?this.limitY:t}},{key:"origin",value:function(e,t){this.originX=e===void 0?this.originX:e,this.originY=t===void 0?this.originY:t}},{key:"setInputElement",value:function(e){this.inputElement=e,this.updateDimensions()}},{key:"setPosition",value:function(e,t,o){t=t.toFixed(this.precision)+"px",o=o.toFixed(this.precision)+"px",this.transform3DSupport?n.css(e,"transform","translate3d("+t+","+o+",0)"):this.transform2DSupport?n.css(e,"transform","translate("+t+","+o+")"):(e.style.left=t,e.style.top=o)}},{key:"onOrientationTimer",value:function(){this.orientationSupport&&this.orientationStatus===0?(this.disable(),this.orientationSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onMotionTimer",value:function(){this.motionSupport&&this.motionStatus===0?(this.disable(),this.motionSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onCalibrationTimer",value:function(){this.calibrationFlag=!0}},{key:"onWindowResize",value:function(){this.updateDimensions()}},{key:"onAnimationFrame",value:function(){this.updateBounds();var e=this.inputX-this.calibrationX,t=this.inputY-this.calibrationY;(Math.abs(e)>this.calibrationThreshold||Math.abs(t)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.motionX=this.calibrateX?t:this.inputY,this.motionY=this.calibrateY?e:this.inputX):(this.motionX=this.calibrateX?e:this.inputX,this.motionY=this.calibrateY?t:this.inputY),this.motionX*=this.elementWidth*(this.scalarX/100),this.motionY*=this.elementHeight*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.motionX=n.clamp(this.motionX,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.motionY=n.clamp(this.motionY,-this.limitY,this.limitY)),this.velocityX+=(this.motionX-this.velocityX)*this.frictionX,this.velocityY+=(this.motionY-this.velocityY)*this.frictionY;for(var o=0;o<this.layers.length;o++){var p=this.layers[o],v=this.depthsX[o],h=this.depthsY[o],y=this.velocityX*(v*(this.invertX?-1:1)),X=this.velocityY*(h*(this.invertY?-1:1));this.setPosition(p,y,X)}this.raf=l(this.onAnimationFrame)}},{key:"rotate",value:function(e,t){var o=(e||0)/d,p=(t||0)/d,v=this.windowHeight>this.windowWidth;this.portrait!==v&&(this.portrait=v,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.calibrationX=o,this.calibrationY=p),this.inputX=o,this.inputY=p}},{key:"onDeviceOrientation",value:function(e){var t=e.beta,o=e.gamma;t!==null&&o!==null&&(this.orientationStatus=1,this.rotate(t,o))}},{key:"onDeviceMotion",value:function(e){var t=e.rotationRate.beta,o=e.rotationRate.gamma;t!==null&&o!==null&&(this.motionStatus=1,this.rotate(t,o))}},{key:"onMouseMove",value:function(e){var t=e.clientX,o=e.clientY;if(this.hoverOnly&&(t<this.elementPositionX||t>this.elementPositionX+this.elementWidth||o<this.elementPositionY||o>this.elementPositionY+this.elementHeight)){this.inputX=0,this.inputY=0;return}this.relativeInput?(this.clipRelativeInput&&(t=Math.max(t,this.elementPositionX),t=Math.min(t,this.elementPositionX+this.elementWidth),o=Math.max(o,this.elementPositionY),o=Math.min(o,this.elementPositionY+this.elementHeight)),this.elementRangeX&&this.elementRangeY&&(this.inputX=(t-this.elementPositionX-this.elementCenterX)/this.elementRangeX,this.inputY=(o-this.elementPositionY-this.elementCenterY)/this.elementRangeY)):this.windowRadiusX&&this.windowRadiusY&&(this.inputX=(t-this.windowCenterX)/this.windowRadiusX,this.inputY=(o-this.windowCenterY)/this.windowRadiusY)}},{key:"destroy",value:function(){this.disable(),clearTimeout(this.calibrationTimer),clearTimeout(this.detectionTimer),this.element.removeAttribute("style");for(var e=0;e<this.layers.length;e++)this.layers[e].removeAttribute("style");delete this.element,delete this.layers}},{key:"version",value:function(){return"3.1.0"}}]),a}();m.exports=s},{"object-assign":1,raf:4}]},{},[5])(5)})})(x);var N=x.exports;const z=I(N);let H=L();if(["tablet","laptop"].includes(H)){const u=document.querySelector("#scene");new z(u,{hoverOnly:!0,relativeInput:!0,selector:".p-layer",scalarY:20})}
