/*! button 2022-01-02 */

!function(){return function t(e,n,r){function o(s,a){if(!n[s]){if(!e[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[s]={exports:{}};e[s][0].call(l.exports,function(t){return o(e[s][1][t]||t)},l,l.exports,t,e,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}}()({1:[function(t,e,n){"use strict";!function(){if(-1!==location.hostname.indexOf("glitch.me")||-1!==location.hostname.indexOf("glitch.com")){(0,t("es6-promise").polyfill)();var e=t("axios"),n=location.hostname.split(".")[0],r=document.createElement("link");r.rel="stylesheet",r.href="".concat("//button.glitch.me","/css/button.css"),document.head.appendChild(r);var o=document.getElementsByTagName("script");[].forEach.call(o,function(t){if(t.getAttribute("src")&&-1!==t.getAttribute("src").indexOf("//button.glitch.me")&&t.dataset.style){var e=document.createElement("link");e.rel="stylesheet",e.href="".concat("//button.glitch.me","/css/").concat(t.dataset.style,".css"),document.head.appendChild(e)}});var i=function(t,e){for(;(t=t.parentElement)&&!(t.matches||t.matchesSelector||t.msMatchesSelector).call(t,e););return t},s=function(){var t=document.getElementsByClassName("glitchOpenWindowElement");[].forEach.call(t,function(t){t.style.display="none",c(t)})},a=function(t){var e=i(t.target,".glitchButton").getElementsByClassName("glitchOpenWindowElement")[0];e.style.display="none"===e.style.display?"block":"none",c(e)},c=function(t){var e=t.getElementsByClassName("projectInfo")[0],n=t.getElementsByClassName("projectActions")[0],r=t.getElementsByClassName("projectEmbed")[0];e.style.display="block",n.style.display="block",r.style.display="none"};window.onkeyup=function(t){var e=i(document.activeElement,".glitchButton");9!==t.keyCode||e||s()},window.onclick=function(t){i(t.target,".glitchButton")||s()},e.get("https://api.glitch.com/projects/"+n).then(function(t){var e=t.data;if(!e)return null;var n=e.domain,r=e.description,o=e.users.map(function(t){return t.login?'<li><a href="'.concat("//glitch.com/@").concat(t.login,"?utm_source=button&utm_medium=button&utm_campaign=glitchButton&utm_contnet=").concat(n,'"><img width="25px" src="').concat(t.avatarThumbnailUrl,'" alt="avatar of ').concat(t.login,'" /> <span class="name">').concat(t.login,"</span></a></li>"):null}),i='<a class="buttonLinks remix" href="https://glitch.com/edit?utm_source=button&utm_medium=button&utm_campaign=glitchButton&utm_content='.concat(n,"/#!/remix/").concat(n,'">Remix on Glitch</a>'),s='<a class="buttonLinks viewCode" href="https://glitch.com/edit?utm_source=button&utm_medium=button&utm_campaign=glitchButton&utm_content='.concat(n,"/#!/").concat(n,'">View Source</a>'),c='<div class="embedGlitchCode"><label>Copy and paste this code anywhere you want to embed this app.<textarea><div class="glitch-embed-wrap" style="height: 486px; width: 100%;">\n  <iframe\n    allow="geolocation; microphone; camera; midi; encrypted-media"\n    src="https://glitch.com/embed/#!/embed/'.concat(n,'?previewSize=100&previewFirst=true&sidebarCollapsed=true"\n    alt="').concat(n,' on Glitch"\n    style="height: 100%; width: 100%; border: 0;">\n  </iframe>\n</div></textarea>').concat(s,' to customize the embed under the "Share" menu.</label></div>'),u='<div class="project">\n          <div class="projectInfo">\n            <div class="name"><a href="https://glitch.com/~'.concat(n,"?utm_source=button&utm_medium=button&utm_campaign=glitchButton&utm_content=").concat(n,'">').concat(n,'</a></div>\n            <p class="description">').concat(r,'</p>\n            <div class="users">\n              <ul>').concat(o.join(" "),'</ul>\n            </div>\n          </div>\n          <div class="projectActions">').concat(i,"<br /> ").concat(s,"<br /> ").concat('<button class="buttonLinks embed">Embed This App</button>','</div>\n          <div class="projectEmbed">').concat(c,"</div>\n        </div>"),l=document.getElementsByClassName("glitchButton");[].forEach.call(l,function(t){var e=document.createElement("button");e.className="glitchButtonElement",e.innerHTML='<img alt="This is a Glitch app!" width="50px" src="'.concat("https://cdn.glitch.com/1973df30-22e4-49d9-94b0-9a3b017066bc%2FGlitchLogo_Color.svg?v=1613667290307",'" />');var n=document.createElement("div");n.className="glitchOpenWindowElement",n.style.display="none",n.innerHTML="".concat(u,' <span class="tooltip border"></span><span class="tooltip fill"></span>'),e.onclick=a,t.appendChild(e),t.appendChild(n),t.getElementsByClassName("embed")[0].onclick=function(e){var n,r,o,i;r=(n=t).getElementsByClassName("projectInfo")[0],o=n.getElementsByClassName("projectActions")[0],i=n.getElementsByClassName("projectEmbed")[0],r.style.display="none",o.style.display="none",i.style.display="block"}})}).catch(function(t){console.log(t)})}}()},{axios:2,"es6-promise":27}],2:[function(t,e,n){e.exports=t("./lib/axios")},{"./lib/axios":4}],3:[function(t,e,n){(function(n){"use strict";var r=t("./../utils"),o=t("./../core/settle"),i=t("./../helpers/buildURL"),s=t("./../helpers/parseHeaders"),a=t("./../helpers/isURLSameOrigin"),c=t("../core/createError"),u="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||t("./../helpers/btoa");e.exports=function(e){return new Promise(function(l,f){var p=e.data,h=e.headers;r.isFormData(p)&&delete h["Content-Type"];var d=new XMLHttpRequest,m="onreadystatechange",v=!1;if("test"===n.env.NODE_ENV||"undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||a(e.url)||(d=new window.XDomainRequest,m="onload",v=!0,d.onprogress=function(){},d.ontimeout=function(){}),e.auth){var y=e.auth.username||"",g=e.auth.password||"";h.Authorization="Basic "+u(y+":"+g)}if(d.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d[m]=function(){if(d&&(4===d.readyState||v)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var t="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:t,config:e,request:d};o(l,f,n),d=null}},d.onerror=function(){f(c("Network Error",e,null,d)),d=null},d.ontimeout=function(){f(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var w=t("./../helpers/cookies"),b=(e.withCredentials||a(e.url))&&e.xsrfCookieName?w.read(e.xsrfCookieName):void 0;b&&(h[e.xsrfHeaderName]=b)}if("setRequestHeader"in d&&r.forEach(h,function(t,e){void 0===p&&"content-type"===e.toLowerCase()?delete h[e]:d.setRequestHeader(e,t)}),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(t){d&&(d.abort(),f(t),d=null)}),void 0===p&&(p=null),d.send(p)})}}).call(this,t("_process"))},{"../core/createError":10,"./../core/settle":13,"./../helpers/btoa":17,"./../helpers/buildURL":18,"./../helpers/cookies":20,"./../helpers/isURLSameOrigin":22,"./../helpers/parseHeaders":24,"./../utils":26,_process:29}],4:[function(t,e,n){"use strict";var r=t("./utils"),o=t("./helpers/bind"),i=t("./core/Axios"),s=t("./defaults");function a(t){var e=new i(t),n=o(i.prototype.request,e);return r.extend(n,i.prototype,e),r.extend(n,e),n}var c=a(s);c.Axios=i,c.create=function(t){return a(r.merge(s,t))},c.Cancel=t("./cancel/Cancel"),c.CancelToken=t("./cancel/CancelToken"),c.isCancel=t("./cancel/isCancel"),c.all=function(t){return Promise.all(t)},c.spread=t("./helpers/spread"),e.exports=c,e.exports.default=c},{"./cancel/Cancel":5,"./cancel/CancelToken":6,"./cancel/isCancel":7,"./core/Axios":8,"./defaults":15,"./helpers/bind":16,"./helpers/spread":25,"./utils":26}],5:[function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},{}],6:[function(t,e,n){"use strict";var r=t("./Cancel");function o(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new r(t),e(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o(function(e){t=e}),cancel:t}},e.exports=o},{"./Cancel":5}],7:[function(t,e,n){"use strict";e.exports=function(t){return!(!t||!t.__CANCEL__)}},{}],8:[function(t,e,n){"use strict";var r=t("./../defaults"),o=t("./../utils"),i=t("./InterceptorManager"),s=t("./dispatchRequest");function a(t){this.defaults=t,this.interceptors={request:new i,response:new i}}a.prototype.request=function(t){"string"==typeof t&&(t=o.merge({url:arguments[0]},arguments[1])),(t=o.merge(r,{method:"get"},this.defaults,t)).method=t.method.toLowerCase();var e=[s,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},o.forEach(["delete","get","head","options"],function(t){a.prototype[t]=function(e,n){return this.request(o.merge(n||{},{method:t,url:e}))}}),o.forEach(["post","put","patch"],function(t){a.prototype[t]=function(e,n,r){return this.request(o.merge(r||{},{method:t,url:e,data:n}))}}),e.exports=a},{"./../defaults":15,"./../utils":26,"./InterceptorManager":9,"./dispatchRequest":11}],9:[function(t,e,n){"use strict";var r=t("./../utils");function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},e.exports=o},{"./../utils":26}],10:[function(t,e,n){"use strict";var r=t("./enhanceError");e.exports=function(t,e,n,o,i){var s=new Error(t);return r(s,e,n,o,i)}},{"./enhanceError":12}],11:[function(t,e,n){"use strict";var r=t("./../utils"),o=t("./transformData"),i=t("../cancel/isCancel"),s=t("../defaults"),a=t("./../helpers/isAbsoluteURL"),c=t("./../helpers/combineURLs");function u(t){t.cancelToken&&t.cancelToken.throwIfRequested()}e.exports=function(t){return u(t),t.baseURL&&!a(t.url)&&(t.url=c(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||s.adapter)(t).then(function(e){return u(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(u(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},{"../cancel/isCancel":7,"../defaults":15,"./../helpers/combineURLs":19,"./../helpers/isAbsoluteURL":21,"./../utils":26,"./transformData":14}],12:[function(t,e,n){"use strict";e.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t}},{}],13:[function(t,e,n){"use strict";var r=t("./createError");e.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},{"./createError":10}],14:[function(t,e,n){"use strict";var r=t("./../utils");e.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},{"./../utils":26}],15:[function(t,e,n){(function(n){"use strict";var r=t("./utils"),o=t("./helpers/normalizeHeaderName"),i={"Content-Type":"application/x-www-form-urlencoded"};function s(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var a,c={adapter:("undefined"!=typeof XMLHttpRequest?a=t("./adapters/xhr"):void 0!==n&&(a=t("./adapters/http")),a),transformRequest:[function(t,e){return o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(s(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(s(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(t){c.headers[t]={}}),r.forEach(["post","put","patch"],function(t){c.headers[t]=r.merge(i)}),e.exports=c}).call(this,t("_process"))},{"./adapters/http":3,"./adapters/xhr":3,"./helpers/normalizeHeaderName":23,"./utils":26,_process:29}],16:[function(t,e,n){"use strict";e.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},{}],17:[function(t,e,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",e.exports=function(t){for(var e,n,i=String(t),s="",a=0,c=r;i.charAt(0|a)||(c="=",a%1);s+=c.charAt(63&e>>8-a%1*8)){if((n=i.charCodeAt(a+=.75))>255)throw new o;e=e<<8|n}return s}},{}],18:[function(t,e,n){"use strict";var r=t("./../utils");function o(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(r.isURLSearchParams(e))i=e.toString();else{var s=[];r.forEach(e,function(t,e){null!==t&&void 0!==t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),s.push(o(e)+"="+o(t))}))}),i=s.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},{"./../utils":26}],19:[function(t,e,n){"use strict";e.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},{}],20:[function(t,e,n){"use strict";var r=t("./../utils");e.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,o,i,s){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},{"./../utils":26}],21:[function(t,e,n){"use strict";e.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},{}],22:[function(t,e,n){"use strict";var r=t("./../utils");e.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},{"./../utils":26}],23:[function(t,e,n){"use strict";var r=t("../utils");e.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},{"../utils":26}],24:[function(t,e,n){"use strict";var r=t("./../utils"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(t){var e,n,i,s={};return t?(r.forEach(t.split("\n"),function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(s[e]&&o.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([n]):s[e]?s[e]+", "+n:n}}),s):s}},{"./../utils":26}],25:[function(t,e,n){"use strict";e.exports=function(t){return function(e){return t.apply(null,e)}}},{}],26:[function(t,e,n){"use strict";var r=t("./helpers/bind"),o=t("is-buffer"),i=Object.prototype.toString;function s(t){return"[object Array]"===i.call(t)}function a(t){return null!==t&&"object"==typeof t}function c(t){return"[object Function]"===i.call(t)}function u(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),s(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}e.exports={isArray:s,isArrayBuffer:function(t){return"[object ArrayBuffer]"===i.call(t)},isBuffer:o,isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:a,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===i.call(t)},isFile:function(t){return"[object File]"===i.call(t)},isBlob:function(t){return"[object Blob]"===i.call(t)},isFunction:c,isStream:function(t){return a(t)&&c(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function t(){var e={};function n(n,r){"object"==typeof e[r]&&"object"==typeof n?e[r]=t(e[r],n):e[r]=n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return e},extend:function(t,e,n){return u(e,function(e,o){t[o]=n&&"function"==typeof e?r(e,n):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},{"./helpers/bind":16,"is-buffer":28}],27:[function(t,e,n){(function(r,o){!function(t,r){"object"==typeof n&&void 0!==e?e.exports=r():"function"==typeof define&&define.amd?define(r):t.ES6Promise=r()}(this,function(){"use strict";function e(t){return"function"==typeof t}var n=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},i=0,s=void 0,a=void 0,c=function(t,e){m[i]=t,m[i+1]=e,2===(i+=2)&&(a?a(v):_())};var u="undefined"!=typeof window?window:void 0,l=u||{},f=l.MutationObserver||l.WebKitMutationObserver,p="undefined"==typeof self&&void 0!==r&&"[object process]"==={}.toString.call(r),h="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function d(){var t=setTimeout;return function(){return t(v,1)}}var m=new Array(1e3);function v(){for(var t=0;t<i;t+=2){(0,m[t])(m[t+1]),m[t]=void 0,m[t+1]=void 0}i=0}var y,g,w,b,_=void 0;function E(t,e){var n=this,r=new this.constructor(A);void 0===r[C]&&M(r);var o=n._state;if(o){var i=arguments[o-1];c(function(){return P(o,r,i,n._result)})}else q(n,r,t,e);return r}function x(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(A);return N(e,t),e}p?_=function(){return r.nextTick(v)}:f?(g=0,w=new f(v),b=document.createTextNode(""),w.observe(b,{characterData:!0}),_=function(){b.data=g=++g%2}):h?((y=new MessageChannel).port1.onmessage=v,_=function(){return y.port2.postMessage(0)}):_=void 0===u&&"function"==typeof t?function(){try{var t=Function("return this")().require("vertx");return void 0!==(s=t.runOnLoop||t.runOnContext)?function(){s(v)}:d()}catch(t){return d()}}():d();var C=Math.random().toString(36).substring(2);function A(){}var T=void 0,S=1,j=2,B={error:null};function R(t){try{return t.then}catch(t){return B.error=t,B}}function L(t,n,r){n.constructor===t.constructor&&r===E&&n.constructor.resolve===x?function(t,e){e._state===S?k(t,e._result):e._state===j?U(t,e._result):q(e,void 0,function(e){return N(t,e)},function(e){return U(t,e)})}(t,n):r===B?(U(t,B.error),B.error=null):void 0===r?k(t,n):e(r)?function(t,e,n){c(function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,function(n){r||(r=!0,e!==n?N(t,n):k(t,n))},function(e){r||(r=!0,U(t,e))},t._label);!r&&o&&(r=!0,U(t,o))},t)}(t,n,r):k(t,n)}function N(t,e){var n,r;t===e?U(t,new TypeError("You cannot resolve a promise with itself")):(r=typeof(n=e),null===n||"object"!==r&&"function"!==r?k(t,e):L(t,e,R(e)))}function O(t){t._onerror&&t._onerror(t._result),D(t)}function k(t,e){t._state===T&&(t._result=e,t._state=S,0!==t._subscribers.length&&c(D,t))}function U(t,e){t._state===T&&(t._state=j,t._result=e,c(O,t))}function q(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+S]=n,o[i+j]=r,0===i&&t._state&&c(D,t)}function D(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?P(n,r,o,i):o(i);t._subscribers.length=0}}function P(t,n,r,o){var i=e(r),s=void 0,a=void 0,c=void 0,u=void 0;if(i){if((s=function(t,e){try{return t(e)}catch(t){return B.error=t,B}}(r,o))===B?(u=!0,a=s.error,s.error=null):c=!0,n===s)return void U(n,new TypeError("A promises callback cannot return that same promise."))}else s=o,c=!0;n._state!==T||(i&&c?N(n,s):u?U(n,a):t===S?k(n,s):t===j&&U(n,s))}var F=0;function M(t){t[C]=F++,t._state=void 0,t._result=void 0,t._subscribers=[]}var H=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(A),this.promise[C]||M(this.promise),n(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?k(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&k(this.promise,this._result))):U(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===T&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===x){var o=R(t);if(o===E&&t._state!==T)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===I){var i=new n(A);L(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===T&&(this._remaining--,t===j?U(r,n):this._result[e]=n),0===this._remaining&&k(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;q(t,void 0,function(t){return n._settledAt(S,e,t)},function(t){return n._settledAt(j,e,t)})},t}();var I=function(){function t(e){this[C]=F++,this._result=this._state=void 0,this._subscribers=[],A!==e&&("function"!=typeof e&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof t?function(t,e){try{e(function(e){N(t,e)},function(e){U(t,e)})}catch(e){U(t,e)}}(this,e):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return t.prototype.catch=function(t){return this.then(null,t)},t.prototype.finally=function(t){var n=this.constructor;return e(t)?this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){throw e})}):this.then(t,t)},t}();return I.prototype.then=E,I.all=function(t){return new H(this,t).promise},I.race=function(t){var e=this;return n(t)?new e(function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}):new e(function(t,e){return e(new TypeError("You must pass an array to race."))})},I.resolve=x,I.reject=function(t){var e=new this(A);return U(e,t),e},I._setScheduler=function(t){a=t},I._setAsap=function(t){c=t},I._asap=c,I.polyfill=function(){var t=void 0;if(void 0!==o)t=o;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=I},I.Promise=I,I})}).call(this,t("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:29}],28:[function(t,e,n){function r(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}e.exports=function(t){return null!=t&&(r(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&r(t.slice(0,0))}(t)||!!t._isBuffer)}},{}],29:[function(t,e,n){var r,o,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(t){if(r===setTimeout)return setTimeout(t,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(t){r=s}try{o="function"==typeof clearTimeout?clearTimeout:a}catch(t){o=a}}();var u,l=[],f=!1,p=-1;function h(){f&&u&&(f=!1,u.length?l=u.concat(l):p=-1,l.length&&d())}function d(){if(!f){var t=c(h);f=!0;for(var e=l.length;e;){for(u=l,l=[];++p<e;)u&&u[p].run();p=-1,e=l.length}u=null,f=!1,function(t){if(o===clearTimeout)return clearTimeout(t);if((o===a||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function v(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new m(t,e)),1!==l.length||f||c(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}]},{},[1]);