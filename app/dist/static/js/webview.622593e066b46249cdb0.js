webpackJsonp([12],{12:function(t,n,e){function i(t){e(25)}var o=e(0)(e(26),e(27),i,"data-v-afe59830",null);t.exports=o.exports},14:function(t,n,e){function i(t){e(33)}var o=e(0)(e(34),e(35),i,null,null);t.exports=o.exports},17:function(t,n,e){"use strict";function i(t,n){return B.test(t)?k()(t).format(n):t}function o(t){return i(t,"YYYY-MM-DD")}function a(t){return i(t,"YYYY-MM-DD HH:mm")}function c(t){var n="YYYY-MM-DD",e=" HH:mm",o=i(t,n+e);return B.test(o)?k()(o).calendar(null,{sameDay:"[今天]"+e,nextDay:"[明天]"+e,nextWeek:n+e,lastDay:"[昨天]"+e,lastWeek:n+e,sameElse:n+e}):o}var s={};e.d(s,"fullDateFormat",function(){return o}),e.d(s,"datetimeToMin",function(){return a}),e.d(s,"datetimeToMinOpt",function(){return c});var r=(e(63),e(18),e(5)),u=e(66),l=e.n(u),d=e(19),f=e.n(d),p=void 0,v={install:function(t,n){if(!p){var e=t.extend(f.a);p=(new e).$mount(),document.body.appendChild(p.$el)}var i={show:function(t){p.msg=t,p.show()},close:function(){p.hide()},open:function(t){t.title&&(p.title=t.title),t.msg&&(p.msg=t.msg),t.cancel&&(p.cancel=t.cancel),t.confirm&&(p.confirm=t.confirm),p.show()}};t.$dialog||(t.$dialog=i),t.mixin({created:function(){this.$dialog=t.$dialog}})}},m=e(7),h=e.n(m),w=void 0,g=void 0,b={install:function(t,n){if(!w){var e=t.extend(h.a);w=(new e).$mount(),document.body.appendChild(w.$el)}var i={loading:function(t){w.position="middle",w.title=t,w.icon="load",w.show()},open:function(t){w.position=t.position,w.title=t.title,w.text=t.text,w.icon=t.icon,w.show()},close:function(){w.hide()},autoClose:function(t){w.position=t.position,w.title=t.title,w.text=t.text,w.icon=t.icon,w.show(),t.autoClose&&(g&&clearTimeout(g),g=setTimeout(function(){w.hide()},1e3*t.sec))},error:function(t){w.position="bottom",w.icon=null,w.title=t,w.show(),g&&clearTimeout(g),g=setTimeout(function(){w.hide()},3e3)}};t.$toast||(t.$toast=i),t.mixin({created:function(){this.$toast=t.$toast}})}},_=e(29),y=e.n(_),x=void 0,C={install:function(t,n){if(!x){var e=t.extend(y.a);x=(new e).$mount(),document.body.appendChild(x.$el)}var i={init:function(t){x.btns=t},show:function(){x.show()},close:function(){x.hide()}};t.$action||(t.$action=i),t.mixin({created:function(){this.$action=t.$action}})}},$=e(67),O=e.n($),j=e(68),T=e.n(j),P=e(57),k=e.n(P),B=/\d{4}(-|\/|.)\d{1,2}\1\d{1,2}/;r.a.use(v),r.a.use(b),r.a.use(C),O.a.config("https://d717fdeb7e6149da9928c8e57093a527@sentry.io/254621").addPlugin(T.a,r.a).install();for(var S in s)r.a.filter(S,s[S]);l.a.attach(document.body)},18:function(t,n){},19:function(t,n,e){function i(t){e(20)}var o=e(0)(e(21),e(22),i,"data-v-136ae367",null);t.exports=o.exports},2:function(t,n,e){"use strict";function i(){return j.a?new O.a(function(t,n){window.apiready=function(){h("light"),t()}}):O.a.resolve()}function o(t){t=C()({},t,{overScrollMode:"scrolls",slidBackEnabled:!0,slidBackType:"edge",historyGestureEnabled:!0,hideHomeIndicator:!0}),window.api?(window.api.openWin(t),g()):(t.pageParam&&Object(j.f)("pageparams",t.pageParam),setTimeout(function(){window.location.href=t.url},t.delay))}function a(t){var n=t.url,e=t.name,i=t.rect,o=void 0===i?{x:0,y:0,w:"auto",h:"auto"}:i,a=t.pageParam,c=void 0===a?{}:a,s=t.bounces,r=window.document.documentElement,u=parseInt(r.getAttribute("data-dpr"),10),l={url:n,name:e,rect:o,pageParam:c,bounces:s,useWKWebView:!0,progress:{type:"page",color:"#45C01A"},hScrollBarEnabled:!1,overScrollMode:"scrolls"};"number"==typeof l.rect.x&&(l.rect.x/=u),"number"==typeof l.rect.y&&(l.rect.y/=u),"number"==typeof l.rect.w&&(l.rect.w/=u),"number"==typeof l.rect.h&&(l.rect.h/=u),window.api&&window.api.openFrame(l)}function c(t){window.api?window.api.historyBack({frameName:t},function(t,n){f("portrait_up"),!t.status&&window.api.closeWin()}):window.history.go(-1)}function s(t){window.api&&window.api.closeToWin({name:t})}function r(){return window.api?window.api.pageParam:window.$api.getStorage("pageparams","object")}function u(){var t=void 0,n="再按一次退出"+window.api.appName;p("keyback").then(function(e){t?(new Date).getTime()-t<2e3&&window.api.closeWidget({silent:!0}):(t=(new Date).getTime(),window.api.toast({msg:n,duration:1500,location:"bottom"}),setTimeout(function(){t=null},1e3))}).catch(function(t){alert(t)})}function l(){var t={bgColor:"#f2f2f2",textColor:"#999",textDown:"下拉刷新...",textUp:"松开刷新..."};if(window.api)return new O.a(function(n,e){window.api.setRefreshHeaderInfo(t,function(t,i){console.log("ret:"+y()(t)),console.log("err:"+i),i?e(i):n(t)})});console.log("api is not be found in setRefreshHeader")}function d(t){window.api?window.api.setFullScreen({fullScreen:t}):console.log("api is not be found in setFullScreen")}function f(t){window.api?window.api.setScreenOrientation({orientation:t}):console.log("api is not be found in setScreen")}function p(t){if(window.api)return new O.a(function(n,e){window.api.addEventListener({name:t},function(t,i){var o=t&&t.value||{};i&&i.msg&&e(i.msg),n(o)})});console.warn("api is not be found in addEvent")}function v(t){window.api?window.api.removeEventListener({name:t}):console.warn("api is not be found in removeEvent")}function m(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};window.api?window.api.sendEvent({name:t,extra:n}):console.warn("api is not be found in sendEvent")}function h(t){window.api?window.api.setStatusBarStyle({style:t}):console.warn("api is not be found in setStatusBarStyle")}function w(t){window.api?window.api.removeLaunchView({animation:{type:"fade",duration:t}}):console.warn("api is not be found in removeLaunch")}function g(){window.api?(Object(T.b)("加载中"),p("removePage").then(function(t){Object(T.c)(),v("removePage")}).catch(function(t){alert(t)}),p("viewdisappear").then(function(t){return m("removePage")}).catch(function(t){alert(t)})):console.warn("api is not be found in openPage")}function b(t){return t=C()({},{sourceType:"camera",encodingType:"jpg",mediaValue:"pic",destinationType:"url",allowEdit:!0,quality:80,targetWidth:100,targetHeight:100,saveToPhotoAlbum:!1},t),window.api?new O.a(function(n,e){window.api.getPicture(t,function(e,i){if(e){var o="base64"===t.destinationType?e.base64Data:e.data;n(o)}else i&&i.msg&&Object(T.a)(i.msg)})}):O.a.resolve()}n.b=i,n.h=o,n.i=a,n.c=c,n.d=s,n.f=r,n.e=u,n.m=l,n.l=d,n.n=f,n.a=p,n.k=m,n.j=w,n.g=b;var _=e(16),y=e.n(_),x=e(4),C=e.n(x),$=e(36),O=e.n($),j=e(3),T=e(9)},20:function(t,n){},21:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(4),o=e.n(i);n.default={name:"dialog",props:{title:{type:String,default:"系统提示"},msg:{type:String},confirm:{type:Object,default:function(){return{text:"确定"}}},cancel:{type:Object,default:function(){return{text:"取消"}}}},data:function(){return{showFlag:!1}},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1}},computed:{cancelBtn:function(){var t=this;return o()({},{handle:function(){t.hide()}},this.cancel)},confirmBtn:function(){var t=this;return o()({},{handle:function(){t.hide()}},this.confirm)}}}},22:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"dialog-fade",appear:""}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"vc-dialog",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"dialog-wrapper"},[e("div",{staticClass:"dialog-content"},[e("div",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("p",{staticClass:"msg",domProps:{innerHTML:t._s(t.msg)}}),t._v(" "),e("div",{staticClass:"operate g-row"},[e("div",{staticClass:"g-col-4 left-btn",on:{click:t.cancelBtn.handle}},[t._v(t._s(t.cancel.text))]),t._v(" "),e("div",{staticClass:"g-col-4 right-btn",on:{click:t.confirmBtn.handle}},[t._v(t._s(t.confirm.text))])])])])])])},staticRenderFns:[]}},23:function(t,n){},24:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(12),o=e.n(i);n.default={props:{position:{type:String,default:"bottom"},title:{type:String},text:{type:String},icon:{type:String}},data:function(){return{showFlag:!1}},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1}},computed:{positionCls:function(){switch(this.position){case"top":return"c-top";case"middle":return"c-middle";case"bottom":default:return"c-bottom"}}},components:{LoaderRack:o.a}}},25:function(t,n){},26:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},27:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"loader"},[t._v("Loading...")])},staticRenderFns:[]}},28:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"vc-toast",class:t.positionCls,on:{click:function(t){t.stopPropagation()}}},[t.icon?e("div",{staticClass:"vc-toast-icon"},[e("p",["load"===t.icon?e("loader-rack"):e("i",{class:t.icon})],1)]):t._e(),t._v(" "),t.title?e("div",{staticClass:"vc-toast-title"},[e("p",[e("span",[t._v(t._s(t.title))])])]):t._e(),t._v(" "),t.text?e("div",[e("p",[e("span",[t._v(t._s(t.text))])])]):t._e()])},staticRenderFns:[]}},29:function(t,n,e){function i(t){e(30)}var o=e(0)(e(31),e(32),i,"data-v-73609114",null);t.exports=o.exports},3:function(t,n,e){"use strict";function i(t){var n=!(!t||1!==t.nodeType);return n||console.warn("This function need el param, el param must be DOM Element"),n}function o(t,n){if(i(t))return t.className.indexOf(n)>-1}function a(t,n){if(i(t)&&!o(t,n)){if("classList"in t)t.classList.add(n);else{var e=t.className,a=e+" "+n;t.className=a}return t}}function c(t,n){var e=window.localStorage;e&&2===arguments.length&&("object"===(void 0===n?"undefined":v()(n))?(n=f()(n),n="obj-"+n):n="str-"+n,e.setItem(t,n))}function s(t){var n=window.localStorage;if(n){var e=n.getItem(t);if(!e)return;if(0===e.indexOf("obj-"))return e=e.slice(4),JSON.parse(e);if(0===e.indexOf("str-"))return e.slice(4)}}function r(){var t=window.localStorage;t&&t.clear()}function u(t){if(!i(t))return void console.warn("$api.fixIos7Bar Function need el param, el param must be DOM Element");w&&g>=5&&(t.style.paddingTop="0.53334rem")}function l(t){if(!i(t))return void console.warn("$api.fixIos7Bar Function need el param, el param must be DOM Element");w?u(t):h&&g>=4.4&&(t.style.paddingTop="0.66667rem")}e.d(n,"a",function(){return m}),n.b=a,n.f=c,n.e=s,n.c=r,n.d=l;var d=e(16),f=e.n(d),p=e(70),v=e.n(p),m=/file/gi.test(location.protocol),h=/android/gi.test(navigator.appVersion),w=/iPhone|iPad/gi.test(navigator.appVersion),g=parseFloat(navigator.appVersion)},30:function(t,n){},31:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"action-sheet",props:{btns:{type:Array,default:function(){return[{name:"是",handle:function(){}},{name:"否",handle:function(){}}]}}},data:function(){return{display:!1}},methods:{show:function(){this.display=!0},hide:function(){this.display=!1}}}},32:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"as-slide",appear:""}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.display,expression:"display"}],staticClass:"vc-as",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"vc-as-body g-box",class:{"vc-as-down":!t.display}},[e("div",{staticClass:"vc-as-menu"},[e("ul",t._l(t.btns,function(n){return e("li",{staticClass:"vc-as-btn"},[e("div",{staticClass:"vc-li-item",on:{click:n.handle}},[e("span",{domProps:{innerHTML:t._s(n.name)}})])])}))]),t._v(" "),e("div",{staticClass:"vc-as-btn vc-as-cancel",on:{click:t.hide}},[t._v("取消")])])])])},staticRenderFns:[]}},33:function(t,n){},34:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(2);n.default={data:function(){return{}},methods:{_scal:function(){var t=this.$refs.page.offsetHeight,n=this.$refs.top.offsetHeight,e=this.$refs.foot.offsetHeight,i=t-n-e;this.$emit("position",{top:n,foot:e,content:i}),this.$refs.content.style.height=i+"px"}},beforeCreate:function(){Object(i.a)("keyback").then(function(){Object(i.c)()}).catch(function(t){alert(t)})},mounted:function(){var t=this;this.$nextTick(function(){t._scal()})}}},35:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{ref:"page",staticClass:"vc-page"},[e("header",{ref:"top",staticClass:"vc-page-top"},[t._t("head")],2),t._v(" "),e("section",{ref:"content",staticClass:"vc-page-content"},[t._t("default")],2),t._v(" "),e("footer",{ref:"foot",staticClass:"vc-page-footer"},[t._t("foot")],2)])},staticRenderFns:[]}},40:function(t,n,e){function i(t){e(41)}var o=e(0)(e(42),e(43),i,"data-v-649a4d91",null);t.exports=o.exports},41:function(t,n){},42:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(4),o=e.n(i),a=e(2),c=e(3);n.default={props:{title:{type:String},titleBox:{type:Object},left:{type:Object,default:function(){return{icon:"icon-back",handle:function(){Object(a.c)()}}}},right:{type:Array}},data:function(){return{leftObj:{}}},methods:{_initBar:function(){this._fixStatusBar()},_fixStatusBar:function(){c.a&&Object(c.d)(this.$refs.bar)}},computed:{titleBtn:function(){return this.title?this.title:this.titleBox?o()({},{icon:"icon-pulldown1",text:null},this.titleBox):void 0}},mounted:function(){this._initBar()}}},43:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"bar",staticClass:"c-bar"},[e("div",{staticClass:"c-bar-left c-square",on:{click:t.left.handle}},[e("i",{class:t.left.icon})]),t._v(" "),e("div",{staticClass:"c-bar-center c-square",class:{"c-title":!t.titleBtn.icon}},[t.titleBtn.icon?e("div",[e("span",[t._v(t._s(t.titleBtn.text))]),t._v(" "),e("i",{class:t.titleBtn.icon})]):e("span",[t._v(t._s(t.titleBtn))])]),t._v(" "),e("div",{staticClass:"c-bar-right c-square"},[t._l(t.right,function(n){return e("div",{staticClass:"c-right-item",on:{click:n.handle}},[n.icon?e("i",{class:n.icon}):e("span",[t._v(t._s(n.text))])])}),t._v(" "),t._t("baright")],2),t._v(" "),e("div",{staticClass:"c-slot"},[t._t("default")],2)])},staticRenderFns:[]}},46:function(t,n,e){"use strict";function i(t){return new a.a(function(n,e){setTimeout(n,t)})}n.a=i;var o=e(36),a=e.n(o)},610:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=(e(17),e(5)),o=e(611),a=e.n(o),c=e(2);Object(c.b)().then(function(){new i.a({el:"#app",render:function(t){return t(a.a)}})})},611:function(t,n,e){function i(t){e(612)}var o=e(0)(e(613),e(614),i,"data-v-b7960c2a",null);t.exports=o.exports},612:function(t,n){},613:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(14),o=e.n(i),a=e(40),c=e.n(a),s=e(46),r=e(2);n.default={name:"webview",data:function(){var t=Object(r.f)();return{url:t.url,bounces:t.bounces,title:t.title}},methods:{position:function(t){var n=t.top;Object(r.i)({name:"video",url:this.url,bounces:this.bounces,rect:{x:0,y:n,w:"auto",h:"auto"}})}},mounted:function(){Object(s.a)(5e3).then(function(){Object(r.m)().then(function(t){console.log(t)}).catch(function(t){console.log(t)})}),this.$nextTick(function(){})},components:{Page:o.a,TopBar:c.a}}},614:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("page",{on:{position:t.position}},[e("div",{slot:"head"},[e("top-bar",{attrs:{title:t.title}})],1)])},staticRenderFns:[]}},69:function(t,n,e){function i(t){return e(o(t))}function o(t){var n=a[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}var a={"./zh-cn":15,"./zh-cn.js":15};i.keys=function(){return Object.keys(a)},i.resolve=o,t.exports=i,i.id=69},7:function(t,n,e){function i(t){e(23)}var o=e(0)(e(24),e(28),i,"data-v-525e81a9",null);t.exports=o.exports},9:function(t,n,e){"use strict";function i(t){d.position="middle",d.title=t,d.icon="load",d.show()}function o(t){d.hide()}function a(t){d.position="bottom",d.icon=null,d.title=t,d.show(),u&&clearTimeout(u),u=setTimeout(function(){d.hide()},3e3)}n.b=i,n.c=o,n.a=a;var c=e(5),s=e(7),r=e.n(s),u=null,l=c.a.extend(r.a),d=(new l).$mount();document.body.appendChild(d.$el)}},[610]);