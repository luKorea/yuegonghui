(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0019":function(t,e,i){"use strict";var a=i("7033"),n=i.n(a);n.a},"008a":function(t,e,i){var a=i("700a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("e96c84c4",a,!0,{sourceMap:!1,shadowMode:!1})},"0351":function(t,e,i){"use strict";i.r(e);var a=i("96f9"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"1de9":function(t,e,i){"use strict";i.r(e);var a=i("9022"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},3189:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"swiper-container"},[i("v-uni-swiper",{staticClass:"swiper",attrs:{circular:!0,"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration}},t._l(t.data,(function(t,e){return i("v-uni-swiper-item",{key:e},[i("v-uni-view",{staticClass:"swiper-item"},[i("v-uni-image",{attrs:{src:t,mode:"aspectFill"}})],1)],1)})),1)],1)},r=[]},"3fe1":function(t,e,i){"use strict";var a=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("5131")),r=a(i("9489")),o=a(i("5b53")),c=a(i("e4dc")),s=a(i("f510")),l=a(i("71b9")),u=a(i("9edd")),d={components:{MySwiper:n.default,MyAlbum:r.default,MyCity:o.default,MyIndustry:c.default},data:function(){return{swiperData:[s.default,l.default,u.default],albumData:[{id:1,title:"中国政府网由国务院办公厅中国政府网由国务院办公厅",img:s.default},{id:2,title:"中国政府网由国务院办公厅中国政府网由国务院办公厅",img:l.default},{id:3,title:"中国政府网由国务院办公厅中国政府网由国务院办公厅",img:u.default},{id:4,title:"中国政府网由国务院办公厅",img:s.default}],cityData:[{id:1,title:"广州",img:s.default,address:"广州"},{id:2,title:"深圳",img:l.default,address:"深圳"},{id:3,title:"汕头",img:u.default,address:"汕头"},{id:4,title:"揭阳",img:s.default}],industryData:[{id:1,title:"教育工会",img:s.default},{id:2,title:"金融工会",img:l.default},{id:3,title:"基金工会",img:u.default},{id:4,title:"基地工会",img:s.default}]}},onLoad:function(){console.log(this.imgData)},methods:{}};e.default=d},"403f":function(t,e,i){var a=i("5b8c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("d29512be",a,!0,{sourceMap:!1,shadowMode:!1})},"40e9":function(t,e,i){"use strict";i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{data:{type:Array,default:function(){return[]}}},data:function(){return{title:"往期专辑"}},methods:{goMore:function(t){uni.navigateTo({url:"../more/more?type=".concat(t,"&title=").concat(this.title)})}}};e.default=a},"44df":function(t,e,i){"use strict";i.r(e);var a=i("5987"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"471f":function(t,e,i){"use strict";var a=i("008a"),n=i.n(a);n.a},"499a":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".home-container[data-v-6ddc8a60]{width:100%;height:100%}.content-wrap[data-v-6ddc8a60]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin:%?34?%}",""]),t.exports=e},5131:function(t,e,i){"use strict";i.r(e);var a=i("3189"),n=i("0351");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("de59");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"a7d4ebb2",null,!1,a["a"],o);e["default"]=s.exports},5257:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"city-container"},[i("v-uni-view",{staticClass:"city-header"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[t._v(t._s(t.title))])],1),i("v-uni-view",{staticClass:"city-item"},[i("v-uni-button",{staticClass:"mini-btn",attrs:{type:"default",size:"mini"}},[t._v("广州")]),i("v-uni-button",{staticClass:"mini-btn",attrs:{type:"default",size:"mini"}},[t._v("深圳")]),i("v-uni-button",{staticClass:"mini-btn",attrs:{type:"default",size:"mini"}},[t._v("上海")])],1),i("v-uni-view",{staticClass:"more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goMore("city")}}},[i("v-uni-text",[t._v("更多 >")])],1)],1),i("v-uni-view",{staticClass:"city-content"},t._l(t.data,(function(e){return i("v-uni-view",{key:e.id,staticClass:"content-item"},[i("v-uni-image",{attrs:{src:e.img,mode:"aspectFill"}}),i("v-uni-text",{staticClass:"title"},[t._v(t._s(e.title))])],1)})),1)],1)},r=[]},"52ba":function(t,e,i){"use strict";i.r(e);var a=i("3fe1"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},5987:function(t,e,i){"use strict";i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{data:{type:Array,default:function(){return[]}}},data:function(){return{title:"产业工会直播"}},methods:{goMore:function(t){uni.navigateTo({url:"../more/more?type=".concat(t,"&title=").concat(this.title)})}}};e.default=a},"5ae2":function(t,e,i){"use strict";i.r(e);var a=i("40e9"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"5b53":function(t,e,i){"use strict";i.r(e);var a=i("5257"),n=i("1de9");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("bac9");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"1bf516e6",null,!1,a["a"],o);e["default"]=s.exports},"5b8c":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".city-container[data-v-1bf516e6]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-bottom:%?20?%}.city-container .city-header[data-v-1bf516e6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.city-header .title[data-v-1bf516e6]{font-size:%?30?%;font-family:Source Han Sans CN;font-weight:700;color:#333}.city-item[data-v-1bf516e6]{display:-webkit-box;display:-webkit-flex;display:flex}.city-item uni-button[data-v-1bf516e6]{margin-right:%?6?%;color:#fff;background-color:#ffaf35}.city-header .more[data-v-1bf516e6]{font-size:%?24?%;font-family:Microsoft YaHei;font-weight:400;color:#999;vertical-align:middle}.city-container .city-content[data-v-1bf516e6]{margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-flex-wrap:wrap;flex-wrap:wrap}.city-container .city-content .content-item[data-v-1bf516e6]{width:%?314?%;height:%?240?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;text-align:center}.content-item .title[data-v-1bf516e6]{font-size:%?26?%;font-family:Microsoft YaHei;font-weight:400;color:#333;margin-top:%?10?%;margin-bottom:%?20?%}.content-item uni-image[data-v-1bf516e6]{width:100%;height:100%;-webkit-border-radius:%?10?%;border-radius:%?10?%}",""]),t.exports=e},"64ea":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"album-container"},[a("v-uni-view",{staticClass:"album-header"},[a("v-uni-view",{staticClass:"icon"},[a("v-uni-view",{staticClass:"img"},[a("v-uni-image",{attrs:{src:i("8593"),mode:""}})],1),a("v-uni-view",{staticClass:"title"},[a("v-uni-text",[t._v(t._s(t.title))])],1)],1),a("v-uni-view",{staticClass:"more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goMore("album")}}},[a("v-uni-text",[t._v("更多 >")])],1)],1),a("v-uni-scroll-view",{staticClass:"scroll-view_H",attrs:{"scroll-x":"true"}},[a("v-uni-view",{staticClass:"album-content"},t._l(t.data,(function(e){return a("v-uni-view",{key:e.id,staticClass:"content-item"},[a("v-uni-image",{attrs:{src:e.img,mode:"aspectFill"}}),a("v-uni-text",{staticClass:"title"},[t._v(t._s(e.title))])],1)})),1)],1)],1)},r=[]},6522:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".album-container[data-v-4cc96e31]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-bottom:%?30?%}.album-container .album-header[data-v-4cc96e31]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.album-container .album-header .icon[data-v-4cc96e31]{display:-webkit-box;display:-webkit-flex;display:flex}.album-header .img[data-v-4cc96e31]{width:%?40?%;height:%?40?%;margin-right:%?6?%}.album-header .img uni-image[data-v-4cc96e31]{width:100%;height:100%}.album-header .title[data-v-4cc96e31]{font-size:%?30?%;font-family:Source Han Sans CN;font-weight:700;color:#333}.album-header .more[data-v-4cc96e31]{font-size:%?24?%;font-family:Microsoft YaHei;font-weight:400;color:#999;vertical-align:middle}.album-container .album-content[data-v-4cc96e31]{margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:%?20?%}.album-container .album-content .content-item[data-v-4cc96e31]{width:%?216?%;height:%?156?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin:0 %?8?% %?10?% %?8?%}.content-item .title[data-v-4cc96e31]{text-align:center;font-size:%?16?%;font-family:Microsoft YaHei;font-weight:400;margin-top:%?6?%;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.content-item uni-image[data-v-4cc96e31]{width:100%;height:100%;-webkit-border-radius:%?10?%;border-radius:%?10?%}",""]),t.exports=e},"6e9e":function(t,e,i){var a=i("c8c2");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("ff7649e8",a,!0,{sourceMap:!1,shadowMode:!1})},"700a":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".industry-container[data-v-e8d5a132]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-bottom:%?20?%}.industry-container .industry-header[data-v-e8d5a132]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.industry-header .title[data-v-e8d5a132]{font-size:%?30?%;font-family:Source Han Sans CN;font-weight:700;color:#333}.industry-header .more[data-v-e8d5a132]{font-size:%?24?%;font-family:Microsoft YaHei;font-weight:400;color:#999;vertical-align:middle}.industry-container .industry-content[data-v-e8d5a132]{margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;-webkit-flex-wrap:wrap;flex-wrap:wrap}.industry-container .industry-content .content-item[data-v-e8d5a132]{width:%?314?%;height:%?240?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;text-align:center}.content-item .title[data-v-e8d5a132]{font-size:%?26?%;font-family:Microsoft YaHei;font-weight:400;color:#333;margin-top:%?10?%;margin-bottom:%?20?%}.content-item uni-image[data-v-e8d5a132]{width:100%;height:100%;-webkit-border-radius:%?10?%;border-radius:%?10?%}",""]),t.exports=e},7033:function(t,e,i){var a=i("6522");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("c2011052",a,!0,{sourceMap:!1,shadowMode:!1})},"71b9":function(t,e,i){t.exports=i.p+"static/img/swiper2.8d39b3e6.jpg"},"84f9":function(t,e,i){"use strict";var a=i("a65a"),n=i.n(a);n.a},8593:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACv0lEQVRYR+2WS2gTURSGM0kgBkRrfYCI7kQwom7EECEvkoW6UaTdKJhulVaLoEt1qSBqim6NoJsWqRt1kZAXGFLcqBhB3Cki+KwixEAefqfOlEmadIZmhiA4cJm5557z//8999zhKI4BP8qA+R3/BZjKQC6XG+KorjMSJo8shd9kJBKZN/I3K0DIzxqBdazfQMCkUYxZAb8A+gjgdiNAWSdjb3ltxn+1kb+hgHw+P9JqtaYZU9FodMIIUNaz2WxSUZRxxmg4HJ5ZLmaJAIKvEhgnaK8+ENshwJ6YEYDogwh+3OH7HFuaTZxvw9VPCBzHKdmFZIZ0jpoh13w4hmm+Rzpj2MgEG5nS7IsZKJVKw7Va7au6MAahVLJlD4ISgN0RQI/Hsz4QCHyT70UBpH4/6srYKpDvsoxZB4SIV0x9ZNnPUcy1CWAxjCHHyCMgYiQA/w0AbVkAUZQPhHwxESP4wiMU+RUL0KpcT2jmliC6fwFgyDnKeTog/XuOijKsikmxs7FemehbgL6QIDkB2X0hw36c1z2VuGcBWyFgFpIj7DjJVTqj3ylX+CYZkR/VQ4Qd7ZYFKwR8B3jI6XRuC4VC7/UkhUJha7PZfIdtHgHr7BIg11Su62kycLsjA6fIwC1scwjw2yXgIsCXGDVIVulJSO9v5h5ZZ+2yLQLK5fKaarVaAtynVv8F9TZcUQkrXq834Pf7f9oiQED5BxzmCK7xuaOD5A1HcI4/3KNu5GLruwg14HQ6vdbtdkulH1BtT+v1+mw8Hv/Ri9xSAcuR/LsCMpnMbpfL9YIdfKaKN610lwYZ+MT6xkajsScWi71cKGQtgH7ASz/wTK3wFO+7Fos4CV6CUaEf2Ec/UG0TIJNisbgTdRWLidvgyLIvGAy+1oxLekK1LziGg9VNiTQjD7Q+oKcAO3ffDduwLbdb0MAF/AGhMHcwYgtjmAAAAABJRU5ErkJggg=="},9022:function(t,e,i){"use strict";i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{data:{type:Array,default:function(){return[]}}},data:function(){return{title:"地市直播"}},methods:{goMore:function(t){uni.navigateTo({url:"../more/more?type=".concat(t,"&title=").concat(this.title)})}}};e.default=a},9489:function(t,e,i){"use strict";i.r(e);var a=i("64ea"),n=i("5ae2");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("0019");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"4cc96e31",null,!1,a["a"],o);e["default"]=s.exports},"96f9":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{data:{type:Array,default:function(){return[]}}},data:function(){return{indicatorDots:!0,autoplay:!0,interval:2e3,duration:500}}};e.default=a},"9edd":function(t,e,i){t.exports=i.p+"static/img/swiper3.3cbb0570.jpg"},a03a:function(t,e,i){"use strict";i.r(e);var a=i("f98a"),n=i("52ba");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("84f9");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"6ddc8a60",null,!1,a["a"],o);e["default"]=s.exports},a65a:function(t,e,i){var a=i("499a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("527bff7f",a,!0,{sourceMap:!1,shadowMode:!1})},bac9:function(t,e,i){"use strict";var a=i("403f"),n=i.n(a);n.a},c8c2:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".swiper-container[data-v-a7d4ebb2]{width:100%;height:%?402?%}.swiper-container .swiper[data-v-a7d4ebb2]{width:100%;height:100%}.swiper-container .swiper .swiper-item[data-v-a7d4ebb2]{width:100%;height:100%}.swiper-item uni-image[data-v-a7d4ebb2]{width:100%;height:100%}",""]),t.exports=e},de59:function(t,e,i){"use strict";var a=i("6e9e"),n=i.n(a);n.a},e4dc:function(t,e,i){"use strict";i.r(e);var a=i("e6e3"),n=i("44df");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("471f");var o,c=i("f0c5"),s=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"e8d5a132",null,!1,a["a"],o);e["default"]=s.exports},e6e3:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"industry-container"},[i("v-uni-view",{staticClass:"industry-header"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-text",[t._v(t._s(t.title))])],1),i("v-uni-view",{staticClass:"more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goMore("industry")}}},[i("v-uni-text",[t._v("更多 >")])],1)],1),i("v-uni-view",{staticClass:"industry-content"},t._l(t.data,(function(e){return i("v-uni-view",{key:e.id,staticClass:"content-item"},[i("v-uni-image",{attrs:{src:e.img,mode:"aspectFill"}}),i("v-uni-text",{staticClass:"title"},[t._v(t._s(e.title))])],1)})),1)],1)},r=[]},f510:function(t,e,i){t.exports=i.p+"static/img/swiper1.ff555524.jpg"},f98a:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"home-container"},[i("my-swiper",{attrs:{data:t.swiperData}}),i("v-uni-view",{staticClass:"content-wrap"},[i("my-album",{attrs:{data:t.albumData}}),i("my-city",{attrs:{data:t.cityData}}),i("my-industry",{attrs:{data:t.industryData}})],1)],1)},r=[]}}]);