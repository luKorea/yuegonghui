(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"04d2":function(t,e,n){"use strict";n.r(e);var r=n("6895"),i=n("b4b7");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var s,a=n("f0c5"),u=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],s);e["default"]=u.exports},"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){return"string"===typeof __channelId__&&__channelId__}function o(t,e){switch(r(e)){case"Function":return"function() { [native code] }";default:return e}}function s(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];console[t].apply(console,n)}function a(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var s=e.shift();if(i())return e.push(e.pop().replace("at ","uni-app:///")),console[s].apply(console,e);var a=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,o)+"---END:JSON---"}catch(i){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),u="";if(a.length>1){var c=a.pop();u=a.join("---COMMA---"),0===c.indexOf(" at ")?u+=c:u+="---COMMA---"+c}else u=a[0];console[s](u)}n.r(e),n.d(e,"log",(function(){return s})),n.d(e,"default",(function(){return a}))},1253:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("view",{staticClass:t._$s(0,"sc","studio-container"),attrs:{_i:0}},[r("view",{staticClass:t._$s(1,"sc","upload-wrap"),attrs:{_i:1},on:{click:t.uploadImg}},[r("view",{staticClass:t._$s(2,"sc","upload"),attrs:{_i:2}},[r("image",{staticClass:t._$s(3,"sc","img"),attrs:{src:t._$s(3,"a-src",n("8593")),_i:3}})]),r("text",{staticClass:t._$s(4,"sc","upload-text"),attrs:{_i:4}})]),r("form",{attrs:{_i:5},on:{submit:t.formSubmit}},[r("view",{staticClass:t._$s(6,"sc","form-item"),attrs:{_i:6}},[r("input",{staticClass:t._$s(7,"sc","uni-input"),attrs:{_i:7}})]),r("view",{staticClass:t._$s(8,"sc","form-item"),attrs:{_i:8}},[r("input",{staticClass:t._$s(9,"sc","uni-input"),attrs:{_i:9}})]),r("view",{staticClass:t._$s(10,"sc","form-item"),attrs:{_i:10}},[r("input",{staticClass:t._$s(11,"sc","uni-input"),attrs:{_i:11}})]),r("view",{staticClass:t._$s(12,"sc","form-btn"),attrs:{_i:12}},[r("button",{})])])])},o=[]},"2ffe":function(t,e,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("04d2").default)})),__definePage("pages/studio/studio",(function(){return Vue.extend(n("d6a1").default)}))},"36ec":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{title:"Hello"}},onLoad:function(){},methods:{uploadImg:function(){t("log",1," at pages/studio/studio.vue:40")},formSubmit:function(e){var n=e.detail.value;t("log",n," at pages/studio/studio.vue:48")}}};e.default=n}).call(this,n("0de9")["default"])},3751:function(t,e,n){"use strict";n.r(e);var r=n("36ec"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"3d15":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{title:"Hello"}},onLoad:function(){},methods:{}};e.default=r},"43e6":function(t,e,n){"use strict";n.r(e);var r=n("e51d"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},6895:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:t._$s(0,"sc","content"),attrs:{_i:0}},[n("image",{staticClass:t._$s(1,"sc","logo"),attrs:{_i:1}}),n("view",{staticClass:t._$s(2,"sc","text-area"),attrs:{_i:2}},[n("text",{staticClass:t._$s(3,"sc","title"),attrs:{_i:3}},[t._v(t._$s(3,"t0-0",t._s(t.title)))])])])},o=[]},8593:function(t,e){t.exports="/static/camera.png"},"8bbf":function(t,e){t.exports=Vue},b4b7:function(t,e,n){"use strict";n.r(e);var r=n("3d15"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},c8f5:function(t,e,n){"use strict";n.r(e);var r=n("43e6");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var o,s,a,u,c=n("f0c5"),f=Object(c["a"])(r["default"],o,s,!1,null,null,null,!1,a,u);e["default"]=f.exports},d106:function(t,e,n){"use strict";n("2ffe");var r=o(n("8bbf")),i=o(n("c8f5"));function o(t){return t&&t.__esModule?t:{default:t}}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}r.default.config.productionTip=!1,i.default.mpType="app";var c=new r.default(a({},i.default));c.$mount()},d6a1:function(t,e,n){"use strict";n.r(e);var r=n("1253"),i=n("3751");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);var s,a=n("f0c5"),u=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"347d8242",null,!1,r["a"],s);e["default"]=u.exports},e51d:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};e.default=n}).call(this,n("0de9")["default"])},f0c5:function(t,e,n){"use strict";function r(t,e,n,r,i,o,s,a,u,c){var f,l="function"===typeof t?t.options:t;if(u){l.components||(l.components={});var d=Object.prototype.hasOwnProperty;for(var p in u)d.call(u,p)&&!d.call(l.components,p)&&(l.components[p]=u[p])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(l.mixins||(l.mixins=[])).push(c)),e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),s?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=f):i&&(f=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),f)if(l.functional){l._injectStyles=f;var _=l.render;l.render=function(t,e){return f.call(e),_(t,e)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,f):[f]}return{exports:t,options:l}}n.d(e,"a",(function(){return r}))}},[["d106","app-config"]]]);