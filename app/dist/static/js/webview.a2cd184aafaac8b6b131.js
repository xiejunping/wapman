webpackJsonp([12],{13:function(t,n,e){function i(t){e(26)}var o=e(0)(e(27),e(28),i,"data-v-afe59830",null);t.exports=o.exports},14:function(t,n,e){function i(t){e(34)}var o=e(0)(e(35),e(36),i,null,null);t.exports=o.exports},17:function(t,n,e){"use strict";function i(t,n){return k.test(t)?P()(t).format(n):t}function o(t){return i(t,"YYYY-MM-DD")}function a(t){return i(t,"YYYY-MM-DD HH:mm")}function c(t){var n="YYYY-MM-DD",e=" HH:mm",o=i(t,n+e);return k.test(o)?P()(o).calendar(null,{sameDay:"[今天]"+e,nextDay:"[明天]"+e,nextWeek:n+e,lastDay:"[昨天]"+e,lastWeek:n+e,sameElse:n+e}):o}function s(t){return"number"!=typeof t&&(t=parseInt(t,10)),t.toString().length<8&&(t+=6e7),t.toString()}function r(t,n,e){var i=t.split(""),o=0;return i.forEach(function(t,a){a>=n&&o<e&&(i[a]="*",o++)}),i.join("")}var u={};e.d(u,"fullDateFormat",function(){return o}),e.d(u,"datetimeToMin",function(){return a}),e.d(u,"datetimeToMinOpt",function(){return c}),e.d(u,"fillZero",function(){return s}),e.d(u,"maskText",function(){return r});var l=(e(55),e(19),e(5)),d=e(20),f=e.n(d),p=void 0,v={install:function(t,n){if(!p){var e=t.extend(f.a);p=(new e).$mount(),document.body.appendChild(p.$el)}var i={show:function(t){p.msg=t,p.show()},close:function(){p.hide()},open:function(t){t.title&&(p.title=t.title),t.msg&&(p.msg=t.msg),t.cancel&&(p.cancel=t.cancel),t.confirm&&(p.confirm=t.confirm),p.show()}};t.$dialog||(t.$dialog=i),t.mixin({created:function(){this.$dialog=t.$dialog}})}},m=e(6),w=e.n(m),h=void 0,g=void 0,b={install:function(t,n){if(!h){var e=t.extend(w.a);h=(new e).$mount(),document.body.appendChild(h.$el)}var i={loading:function(t){h.position="middle",h.title=t,h.icon="load",h.show()},open:function(t){h.position=t.position,h.title=t.title,h.text=t.text,h.icon=t.icon,h.show()},close:function(){h.hide()},autoClose:function(t){h.position=t.position,h.title=t.title,h.text=t.text,h.icon=t.icon,h.show(),t.autoClose&&(g&&clearTimeout(g),g=setTimeout(function(){h.hide()},1e3*t.sec))},error:function(t){h.position="bottom",h.icon=null,h.title=t,h.show(),g&&clearTimeout(g),g=setTimeout(function(){h.hide()},3e3)}};t.$toast||(t.$toast=i),t.mixin({created:function(){this.$toast=t.$toast}})}},_=e(30),x=e.n(_),y=void 0,C={install:function(t,n){if(!y){var e=t.extend(x.a);y=(new e).$mount(),document.body.appendChild(y.$el)}var i={init:function(t){y.btns=t},show:function(){y.show()},close:function(){y.hide()}};t.$action||(t.$action=i),t.mixin({created:function(){this.$action=t.$action}})}},$=e(62),j=e.n($),S=e(63),O=e.n(S),T=e(54),P=e.n(T),k=/\d{4}(-|\/|.)\d{1,2}\1\d{1,2}/;l.a.use(v),l.a.use(b),l.a.use(C),j.a.config("https://d717fdeb7e6149da9928c8e57093a527@sentry.io/254621").addPlugin(O.a,l.a).install();for(var B in u)l.a.filter(B,u[B])},19:function(t,n){},2:function(t,n,e){"use strict";function i(){return O.a?new S.a(function(t,n){window.apiready=function(){h("light"),t()}}):S.a.resolve()}function o(t){t=$()({},t,{overScrollMode:"scrolls",slidBackEnabled:!0,slidBackType:"edge",historyGestureEnabled:!0,hideHomeIndicator:!0}),window.api?(window.api.openWin(t),b()):(t.pageParam&&Object(O.f)("pageparams",t.pageParam),setTimeout(function(){window.location.href=t.url},t.delay))}function a(t){var n=t.url,e=t.name,i=t.rect,o=void 0===i?{x:0,y:0,w:"auto",h:"auto"}:i,a=t.pageParam,c=void 0===a?{}:a,s=t.bounces,r=window.document.documentElement,u=parseInt(r.getAttribute("data-dpr"),10),l={url:n,name:e,rect:o,pageParam:c,bounces:s,useWKWebView:!0,progress:{type:"page",color:"#45C01A"},hScrollBarEnabled:!1,overScrollMode:"scrolls"};"number"==typeof l.rect.x&&(l.rect.x/=u),"number"==typeof l.rect.y&&(l.rect.y/=u),"number"==typeof l.rect.w&&(l.rect.w/=u),"number"==typeof l.rect.h&&(l.rect.h/=u),window.api&&window.api.openFrame(l)}function c(t){window.api?window.api.historyBack({frameName:t},function(t,n){f("portrait_up"),!t.status&&window.api.closeWin()}):window.history.go(-1)}function s(t){window.api&&window.api.closeToWin({name:t})}function r(){return window.api?window.api.pageParam:window.$api.getStorage("pageparams","object")}function u(){var t=void 0,n="再按一次退出"+window.api.appName;p("keyback").then(function(e){t?(new Date).getTime()-t<2e3&&window.api.closeWidget({silent:!0}):(t=(new Date).getTime(),window.api.toast({msg:n,duration:1500,location:"bottom"}),setTimeout(function(){t=null},1e3))}).catch(function(t){alert(t)})}function l(){var t={bgColor:"#f2f2f2",textColor:"#999",textDown:"下拉刷新...",textUp:"松开刷新..."};if(window.api)return new S.a(function(n,e){window.api.setRefreshHeaderInfo(t,function(t,i){console.log("ret:"+y()(t)),console.log("err:"+i),i?e(i):n(t)})});console.log("api is not be found in setRefreshHeader")}function d(t){window.api?window.api.setFullScreen({fullScreen:t}):console.log("api is not be found in setFullScreen")}function f(t){window.api?window.api.setScreenOrientation({orientation:t}):console.log("api is not be found in setScreen")}function p(t){return window.api?new S.a(function(n,e){window.api.addEventListener({name:t},function(t,i){var o=t&&t.value||{};i&&i.msg&&e(i.msg),n(o)})}):(console.warn("api is not be found in addEvent"),S.a.resolve())}function v(t){window.api?window.api.removeEventListener({name:t}):console.warn("api is not be found in removeEvent")}function m(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};window.api?window.api.sendEvent({name:t,extra:n}):console.warn("api is not be found in sendEvent")}function w(t){var n=t.winName,e=t.frmName,i=t.jsfun;window.api?n?e?window.api.execScript({name:n,frameName:e,script:i}):window.api.execScript({name:n,script:i}):window.api.execScript({frameName:e,script:i}):console.warn("api is not be found in execScript")}function h(t){window.api?window.api.setStatusBarStyle({style:t}):console.warn("api is not be found in setStatusBarStyle")}function g(t){window.api?window.api.removeLaunchView({animation:{type:"fade",duration:t}}):console.warn("api is not be found in removeLaunch")}function b(){window.api?(Object(T.b)("加载中"),p("removePage").then(function(t){Object(T.c)(),v("removePage")}).catch(function(t){alert(t)}),p("viewdisappear").then(function(t){return m("removePage")}).catch(function(t){alert(t)})):console.warn("api is not be found in openPage")}function _(t){return t=$()({},{sourceType:"camera",encodingType:"jpg",mediaValue:"pic",destinationType:"url",allowEdit:!0,quality:80,targetWidth:100,targetHeight:100,saveToPhotoAlbum:!1},t),window.api?new S.a(function(n,e){window.api.getPicture(t,function(e,i){if(e){var o="base64"===t.destinationType?e.base64Data:e.data;n(o)}else i&&i.msg&&Object(T.a)(i.msg)})}):S.a.resolve()}n.b=i,n.i=o,n.j=a,n.c=c,n.d=s,n.g=r,n.e=u,n.n=l,n.m=d,n.o=f,n.a=p,n.l=m,n.f=w,n.k=g,n.h=_;var x=e(16),y=e.n(x),C=e(3),$=e.n(C),j=e(37),S=e.n(j),O=e(4),T=e(9)},20:function(t,n,e){function i(t){e(21)}var o=e(0)(e(22),e(23),i,"data-v-136ae367",null);t.exports=o.exports},21:function(t,n){},22:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(3),o=e.n(i);n.default={name:"vc-dialog",props:{title:{type:String,default:"系统提示"},msg:{type:String},confirm:{type:Object,default:function(){return{text:"确定"}}},cancel:{type:Object,default:function(){return{text:"取消"}}}},data:function(){return{showFlag:!1}},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1}},computed:{cancelBtn:function(){var t=this;return o()({},{handle:function(){t.hide()}},this.cancel)},confirmBtn:function(){var t=this;return o()({},{handle:function(){t.hide()}},this.confirm)}}}},23:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"dialog-fade",appear:""}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"vc-dialog",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"dialog-wrapper"},[e("div",{staticClass:"dialog-content"},[e("div",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("p",{staticClass:"msg",domProps:{innerHTML:t._s(t.msg)}}),t._v(" "),e("div",{staticClass:"operate g-row"},[e("div",{staticClass:"g-col-4 left-btn",on:{click:t.cancelBtn.handle}},[t._v(t._s(t.cancel.text))]),t._v(" "),e("div",{staticClass:"g-col-4 right-btn",on:{click:t.confirmBtn.handle}},[t._v(t._s(t.confirm.text))])])])])])])},staticRenderFns:[]}},24:function(t,n){},25:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(13),o=e.n(i);n.default={props:{position:{type:String,default:"bottom"},title:{type:String},text:{type:String},icon:{type:String}},data:function(){return{showFlag:!1}},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1}},computed:{positionCls:function(){switch(this.position){case"top":return"c-top";case"middle":return"c-middle";case"bottom":default:return"c-bottom"}}},components:{LoaderRack:o.a}}},26:function(t,n){},27:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},28:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"loader"},[t._v("Loading...")])},staticRenderFns:[]}},29:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"vc-toast",class:t.positionCls,on:{click:function(t){t.stopPropagation()}}},[t.icon?e("div",{staticClass:"vc-toast-icon"},[e("p",["load"===t.icon?e("loader-rack"):e("i",{class:t.icon})],1)]):t._e(),t._v(" "),t.title?e("div",{staticClass:"vc-toast-title"},[e("p",[e("span",[t._v(t._s(t.title))])])]):t._e(),t._v(" "),t.text?e("div",[e("p",[e("span",[t._v(t._s(t.text))])])]):t._e()])},staticRenderFns:[]}},30:function(t,n,e){function i(t){e(31)}var o=e(0)(e(32),e(33),i,"data-v-73609114",null);t.exports=o.exports},31:function(t,n){},32:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"action-sheet",props:{btns:{type:Array,default:function(){return[{name:"是",handle:function(){}},{name:"否",handle:function(){}}]}}},data:function(){return{display:!1}},methods:{show:function(){this.display=!0},hide:function(){this.display=!1}}}},33:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"as-slide",appear:""}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.display,expression:"display"}],staticClass:"vc-as",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"vc-as-body g-box",class:{"vc-as-down":!t.display}},[e("div",{staticClass:"vc-as-menu"},[e("ul",t._l(t.btns,function(n){return e("li",{staticClass:"vc-as-btn"},[e("div",{staticClass:"vc-li-item",on:{click:n.handle}},[e("span",{domProps:{innerHTML:t._s(n.name)}})])])}))]),t._v(" "),e("div",{staticClass:"vc-as-btn vc-as-cancel",on:{click:t.hide}},[t._v("取消")])])])])},staticRenderFns:[]}},34:function(t,n){},35:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{}},methods:{_scal:function(){var t=this.$refs.page.offsetHeight,n=this.$refs.top.offsetHeight,e=this.$refs.foot.offsetHeight,i=t-n-e;this.$emit("position",{top:n,foot:e,content:i}),this.$refs.content.style.height=i+"px"}},mounted:function(){var t=this;this.$nextTick(function(){t._scal()})}}},36:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{ref:"page",staticClass:"vc-page"},[e("header",{ref:"top",staticClass:"vc-page-top"},[t._t("head")],2),t._v(" "),e("section",{ref:"content",staticClass:"vc-page-content"},[t._t("default")],2),t._v(" "),e("footer",{ref:"foot",staticClass:"vc-page-footer"},[t._t("foot")],2)])},staticRenderFns:[]}},38:function(t,n,e){"use strict";e.d(n,"b",function(){return i}),e.d(n,"a",function(){return o}),e.d(n,"d",function(){return a}),e.d(n,"c",function(){return c});var i=0,o=110,a="WAPMAN",c="http://localhost:5000"},4:function(t,n,e){"use strict";function i(t){var n=!(!t||1!==t.nodeType);return n||console.warn("This function need el param, el param must be DOM Element"),n}function o(t,n){if(i(t))return t.className.indexOf(n)>-1}function a(t,n){if(i(t)&&!o(t,n)){if("classList"in t)t.classList.add(n);else{var e=t.className,a=e+" "+n;t.className=a}return t}}function c(t,n){var e=window.localStorage;e&&2===arguments.length&&("object"===(void 0===n?"undefined":v()(n))?(n=f()(n),n="obj-"+n):n="str-"+n,e.setItem(t,n))}function s(t){var n=window.localStorage;if(n){var e=n.getItem(t);if(!e)return;if(0===e.indexOf("obj-"))return e=e.slice(4),JSON.parse(e);if(0===e.indexOf("str-"))return e.slice(4)}}function r(){var t=window.localStorage;t&&t.clear()}function u(t){if(!i(t))return void console.warn("$api.fixIos7Bar Function need el param, el param must be DOM Element");h&&g>=5&&(t.style.paddingTop="0.53334rem")}function l(t){if(!i(t))return void console.warn("$api.fixIos7Bar Function need el param, el param must be DOM Element");h?u(t):w&&g>=4.4&&(t.style.paddingTop="0.66667rem")}e.d(n,"a",function(){return m}),n.b=a,n.f=c,n.e=s,n.c=r,n.d=l;var d=e(16),f=e.n(d),p=e(66),v=e.n(p),m=/file/gi.test(location.protocol),w=/android/gi.test(navigator.appVersion),h=/iPhone|iPad/gi.test(navigator.appVersion),g=parseFloat(navigator.appVersion)},42:function(t,n,e){function i(t){e(43)}var o=e(0)(e(44),e(45),i,"data-v-649a4d91",null);t.exports=o.exports},43:function(t,n){},44:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(3),o=e.n(i),a=e(2),c=e(4);n.default={props:{title:{type:String},titleBox:{type:Object},left:{type:Object,default:function(){return{icon:"icon-back",handle:function(){Object(a.c)()}}}},right:{type:Array}},data:function(){return{leftObj:{}}},methods:{_initBar:function(){this._fixStatusBar()},_fixStatusBar:function(){c.a&&Object(c.d)(this.$refs.bar)}},computed:{titleBtn:function(){return this.title?this.title:this.titleBox?o()({},{icon:"icon-pulldown1",text:null},this.titleBox):void 0}},mounted:function(){this._initBar()}}},45:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"bar",staticClass:"c-bar"},[e("div",{staticClass:"c-bar-left c-square",on:{click:t.left.handle}},[e("i",{class:t.left.icon})]),t._v(" "),e("div",{staticClass:"c-bar-center c-square",class:{"c-title":!t.titleBtn.icon}},[t.titleBtn.icon?e("div",[e("span",[t._v(t._s(t.titleBtn.text))]),t._v(" "),e("i",{class:t.titleBtn.icon})]):e("span",[t._v(t._s(t.titleBtn))])]),t._v(" "),e("div",{staticClass:"c-bar-right c-square"},[t._l(t.right,function(n){return e("div",{staticClass:"c-right-item",on:{click:n.handle}},[n.icon?e("i",{class:n.icon}):e("span",[t._v(t._s(n.text))])])}),t._v(" "),t._t("baright")],2),t._v(" "),e("div",{staticClass:"c-slot"},[t._t("default")],2)])},staticRenderFns:[]}},46:function(t,n,e){"use strict";function i(t){return new c.a(function(n,e){setTimeout(n,t)})}function o(t){return r.a.AES.encrypt(t.toString(),u.d).toString()}n.b=i,n.a=o;var a=e(37),c=e.n(a),s=e(88),r=e.n(s),u=e(38)},6:function(t,n,e){function i(t){e(24)}var o=e(0)(e(25),e(29),i,"data-v-525e81a9",null);t.exports=o.exports},64:function(t,n,e){function i(t){return e(o(t))}function o(t){var n=a[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}var a={"./zh-cn":15,"./zh-cn.js":15};i.keys=function(){return Object.keys(a)},i.resolve=o,t.exports=i,i.id=64},656:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=(e(17),e(5)),o=e(657),a=e.n(o),c=e(2);Object(c.b)().then(function(){new i.a({el:"#app",render:function(t){return t(a.a)}})})},657:function(t,n,e){function i(t){e(658)}var o=e(0)(e(659),e(660),i,"data-v-b7960c2a",null);t.exports=o.exports},658:function(t,n){},659:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(14),o=e.n(i),a=e(42),c=e.n(a),s=e(46),r=e(2);n.default={name:"webview",data:function(){var t=Object(r.g)();return{url:t.url,bounces:t.bounces,title:t.title}},methods:{position:function(t){var n=t.top;Object(r.j)({name:"video",url:this.url,bounces:this.bounces,rect:{x:0,y:n,w:"auto",h:"auto"}})}},mounted:function(){Object(s.b)(5e3).then(function(){Object(r.n)().then(function(t){console.log(t)}).catch(function(t){console.log(t)})}),this.$nextTick(function(){})},components:{Page:o.a,TopBar:c.a}}},660:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("page",{on:{position:t.position}},[e("div",{attrs:{slot:"head"},slot:"head"},[e("top-bar",{attrs:{title:t.title}})],1)])},staticRenderFns:[]}},9:function(t,n,e){"use strict";function i(t){d.position="middle",d.title=t,d.icon="load",d.show()}function o(t){d.hide()}function a(t){d.position="bottom",d.icon=null,d.title=t,d.show(),u&&clearTimeout(u),u=setTimeout(function(){d.hide()},3e3)}n.b=i,n.c=o,n.a=a;var c=e(5),s=e(6),r=e.n(s),u=null,l=c.a.extend(r.a),d=(new l).$mount();document.body.appendChild(d.$el)}},[656]);