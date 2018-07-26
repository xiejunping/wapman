webpackJsonp([8],{127:function(t,n,e){function i(t){e(128)}var o=e(0)(e(129),e(130),i,"data-v-1543c03e",null);t.exports=o.exports},128:function(t,n){},129:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"input-group",props:{value:{type:[String,Number]},addon:{type:String},disabled:{type:Boolean},readonly:{type:Boolean},btn:{type:Object},icon:{type:String},placeholder:{type:String},group:{type:String,default:"input-group"},type:{type:String,default:"text"},size:{type:Number}},computed:{inputxt:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{onFocus:function(){},onBlur:function(){},btnEvent:function(){this.btn.visible&&this.btn.handle()}}}},13:function(t,n,e){function i(t){e(26)}var o=e(0)(e(27),e(28),i,"data-v-afe59830",null);t.exports=o.exports},130:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vc-input",class:t.group},[t.addon?e("span",{staticClass:"vc-input-addon",domProps:{innerHTML:t._s(t.addon)}}):t._e(),t._v(" "),"checkbox"===t.type?e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputxt,expression:"inputxt"}],staticClass:"vc-form-control",attrs:{placeholder:t.placeholder,disabled:t.disabled,readonly:t.readonly,type:"checkbox"},domProps:{checked:Array.isArray(t.inputxt)?t._i(t.inputxt,null)>-1:t.inputxt},on:{focus:function(n){t.$emit("onFocus")},blur:function(n){t.$emit("onBlur")},change:function(n){var e=t.inputxt,i=n.target,o=!!i.checked;if(Array.isArray(e)){var a=t._i(e,null);i.checked?a<0&&(t.inputxt=e.concat([null])):a>-1&&(t.inputxt=e.slice(0,a).concat(e.slice(a+1)))}else t.inputxt=o}}}):"radio"===t.type?e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputxt,expression:"inputxt"}],staticClass:"vc-form-control",attrs:{placeholder:t.placeholder,disabled:t.disabled,readonly:t.readonly,type:"radio"},domProps:{checked:t._q(t.inputxt,null)},on:{focus:function(n){t.$emit("onFocus")},blur:function(n){t.$emit("onBlur")},change:function(n){t.inputxt=null}}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputxt,expression:"inputxt"}],staticClass:"vc-form-control",attrs:{placeholder:t.placeholder,disabled:t.disabled,readonly:t.readonly,type:t.type},domProps:{value:t.inputxt},on:{focus:function(n){t.$emit("onFocus")},blur:function(n){t.$emit("onBlur")},input:function(n){n.target.composing||(t.inputxt=n.target.value)}}}),t._v(" "),t.btn?e("span",{staticClass:"vc-input-btn",class:{"vc-btn-disabled":!t.btn.visible},domProps:{innerHTML:t._s(t.btn.text)},on:{click:t.btnEvent}}):t.icon?e("span",{staticClass:"vc-input-icon",on:{click:function(n){t.$emit("click")}}},[e("i",{class:t.icon})]):t._e()])},staticRenderFns:[]}},131:function(t,n,e){"use strict";function i(t,n,e,i){Object(c.a)({url:"/user/login",type:"POST",data:t,success:function(t){return n(t)},error:function(t){return e(t)},faild:function(t){return i(t)}})}function o(t,n,e,i){Object(c.a)({url:"/user/register",type:"POST",data:t,success:function(t){return n(t)},error:function(t){return e(t)},faild:function(t){return i(t)}})}function a(t,n){Object(c.a)({url:"/user/info",success:function(n){return t(n)},faild:function(t){return n(t)}})}function s(t,n,e){Object(c.a)({url:"/user/update/avatar",type:"POST",data:t,success:function(t){return n(t)},faild:function(t){return e(t)}})}e.d(n,"c",function(){return i}),e.d(n,"d",function(){return o}),n.b=a,n.a=s;var c=e(84)},14:function(t,n,e){function i(t){e(34)}var o=e(0)(e(35),e(36),i,null,null);t.exports=o.exports},17:function(t,n,e){"use strict";function i(t,n){return P.test(t)?k()(t).format(n):t}function o(t){return i(t,"YYYY-MM-DD")}function a(t){return i(t,"YYYY-MM-DD HH:mm")}function s(t){var n="YYYY-MM-DD",e=" HH:mm",o=i(t,n+e);return P.test(o)?k()(o).calendar(null,{sameDay:"[今天]"+e,nextDay:"[明天]"+e,nextWeek:n+e,lastDay:"[昨天]"+e,lastWeek:n+e,sameElse:n+e}):o}function c(t){return"number"!=typeof t&&(t=parseInt(t,10)),t.toString().length<8&&(t+=6e7),t.toString()}function r(t,n,e){var i=t.split(""),o=0;return i.forEach(function(t,a){a>=n&&o<e&&(i[a]="*",o++)}),i.join("")}var u={};e.d(u,"fullDateFormat",function(){return o}),e.d(u,"datetimeToMin",function(){return a}),e.d(u,"datetimeToMinOpt",function(){return s}),e.d(u,"fillZero",function(){return c}),e.d(u,"maskText",function(){return r});var l=(e(55),e(19),e(5)),d=e(20),f=e.n(d),p=void 0,v={install:function(t,n){if(!p){var e=t.extend(f.a);p=(new e).$mount(),document.body.appendChild(p.$el)}var i={show:function(t){p.msg=t,p.show()},close:function(){p.hide()},open:function(t){t.title&&(p.title=t.title),t.msg&&(p.msg=t.msg),t.cancel&&(p.cancel=t.cancel),t.confirm&&(p.confirm=t.confirm),p.show()}};t.$dialog||(t.$dialog=i),t.mixin({created:function(){this.$dialog=t.$dialog}})}},m=e(6),h=e.n(m),g=void 0,w=void 0,b={install:function(t,n){if(!g){var e=t.extend(h.a);g=(new e).$mount(),document.body.appendChild(g.$el)}var i={loading:function(t){g.position="middle",g.title=t,g.icon="load",g.show()},open:function(t){g.position=t.position,g.title=t.title,g.text=t.text,g.icon=t.icon,g.show()},close:function(){g.hide()},autoClose:function(t){g.position=t.position,g.title=t.title,g.text=t.text,g.icon=t.icon,g.show(),t.autoClose&&(w&&clearTimeout(w),w=setTimeout(function(){g.hide()},1e3*t.sec))},error:function(t){g.position="bottom",g.icon=null,g.title=t,g.show(),w&&clearTimeout(w),w=setTimeout(function(){g.hide()},3e3)}};t.$toast||(t.$toast=i),t.mixin({created:function(){this.$toast=t.$toast}})}},y=e(30),x=e.n(y),_=void 0,C={install:function(t,n){if(!_){var e=t.extend(x.a);_=(new e).$mount(),document.body.appendChild(_.$el)}var i={init:function(t){_.btns=t},show:function(){_.show()},close:function(){_.hide()}};t.$action||(t.$action=i),t.mixin({created:function(){this.$action=t.$action}})}},O=e(62),j=e.n(O),T=e(63),S=e.n(T),$=e(54),k=e.n($),P=/\d{4}(-|\/|.)\d{1,2}\1\d{1,2}/;l.a.use(v),l.a.use(b),l.a.use(C),j.a.config("https://d717fdeb7e6149da9928c8e57093a527@sentry.io/254621").addPlugin(S.a,l.a).install();for(var B in u)l.a.filter(B,u[B])},19:function(t,n){},2:function(t,n,e){"use strict";function i(){return S.a?new T.a(function(t,n){window.apiready=function(){g("light"),t()}}):T.a.resolve()}function o(t){t=O()({},t,{overScrollMode:"scrolls",slidBackEnabled:!0,slidBackType:"edge",historyGestureEnabled:!0,hideHomeIndicator:!0}),window.api?(window.api.openWin(t),b()):(t.pageParam&&Object(S.f)("pageparams",t.pageParam),setTimeout(function(){window.location.href=t.url},t.delay))}function a(t){var n=t.url,e=t.name,i=t.rect,o=void 0===i?{x:0,y:0,w:"auto",h:"auto"}:i,a=t.pageParam,s=void 0===a?{}:a,c=t.bounces,r=window.document.documentElement,u=parseInt(r.getAttribute("data-dpr"),10),l={url:n,name:e,rect:o,pageParam:s,bounces:c,useWKWebView:!0,progress:{type:"page",color:"#45C01A"},hScrollBarEnabled:!1,overScrollMode:"scrolls"};"number"==typeof l.rect.x&&(l.rect.x/=u),"number"==typeof l.rect.y&&(l.rect.y/=u),"number"==typeof l.rect.w&&(l.rect.w/=u),"number"==typeof l.rect.h&&(l.rect.h/=u),window.api&&window.api.openFrame(l)}function s(t){window.api?window.api.historyBack({frameName:t},function(t,n){f("portrait_up"),!t.status&&window.api.closeWin()}):window.history.go(-1)}function c(t){window.api&&window.api.closeToWin({name:t})}function r(){return window.api?window.api.pageParam:window.$api.getStorage("pageparams","object")}function u(){var t=void 0,n="再按一次退出"+window.api.appName;p("keyback").then(function(e){t?(new Date).getTime()-t<2e3&&window.api.closeWidget({silent:!0}):(t=(new Date).getTime(),window.api.toast({msg:n,duration:1500,location:"bottom"}),setTimeout(function(){t=null},1e3))}).catch(function(t){alert(t)})}function l(){var t={bgColor:"#f2f2f2",textColor:"#999",textDown:"下拉刷新...",textUp:"松开刷新..."};if(window.api)return new T.a(function(n,e){window.api.setRefreshHeaderInfo(t,function(t,i){console.log("ret:"+_()(t)),console.log("err:"+i),i?e(i):n(t)})});console.log("api is not be found in setRefreshHeader")}function d(t){window.api?window.api.setFullScreen({fullScreen:t}):console.log("api is not be found in setFullScreen")}function f(t){window.api?window.api.setScreenOrientation({orientation:t}):console.log("api is not be found in setScreen")}function p(t){return window.api?new T.a(function(n,e){window.api.addEventListener({name:t},function(t,i){var o=t&&t.value||{};i&&i.msg&&e(i.msg),n(o)})}):(console.warn("api is not be found in addEvent"),T.a.resolve())}function v(t){window.api?window.api.removeEventListener({name:t}):console.warn("api is not be found in removeEvent")}function m(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};window.api?window.api.sendEvent({name:t,extra:n}):console.warn("api is not be found in sendEvent")}function h(t){var n=t.winName,e=t.frmName,i=t.jsfun;window.api?n?e?window.api.execScript({name:n,frameName:e,script:i}):window.api.execScript({name:n,script:i}):window.api.execScript({frameName:e,script:i}):console.warn("api is not be found in execScript")}function g(t){window.api?window.api.setStatusBarStyle({style:t}):console.warn("api is not be found in setStatusBarStyle")}function w(t){window.api?window.api.removeLaunchView({animation:{type:"fade",duration:t}}):console.warn("api is not be found in removeLaunch")}function b(){window.api?(Object($.b)("加载中"),p("removePage").then(function(t){Object($.c)(),v("removePage")}).catch(function(t){alert(t)}),p("viewdisappear").then(function(t){return m("removePage")}).catch(function(t){alert(t)})):console.warn("api is not be found in openPage")}function y(t){return t=O()({},{sourceType:"camera",encodingType:"jpg",mediaValue:"pic",destinationType:"url",allowEdit:!0,quality:80,targetWidth:100,targetHeight:100,saveToPhotoAlbum:!1},t),window.api?new T.a(function(n,e){window.api.getPicture(t,function(e,i){if(e){var o="base64"===t.destinationType?e.base64Data:e.data;n(o)}else i&&i.msg&&Object($.a)(i.msg)})}):T.a.resolve()}n.b=i,n.i=o,n.j=a,n.c=s,n.d=c,n.g=r,n.e=u,n.n=l,n.m=d,n.o=f,n.a=p,n.l=m,n.f=h,n.k=w,n.h=y;var x=e(16),_=e.n(x),C=e(3),O=e.n(C),j=e(37),T=e.n(j),S=e(4),$=e(9)},20:function(t,n,e){function i(t){e(21)}var o=e(0)(e(22),e(23),i,"data-v-136ae367",null);t.exports=o.exports},21:function(t,n){},22:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(3),o=e.n(i);n.default={name:"vc-dialog",props:{title:{type:String,default:"系统提示"},msg:{type:String},confirm:{type:Object,default:function(){return{text:"确定"}}},cancel:{type:Object,default:function(){return{text:"取消"}}}},data:function(){return{showFlag:!1}},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1}},computed:{cancelBtn:function(){var t=this;return o()({},{handle:function(){t.hide()}},this.cancel)},confirmBtn:function(){var t=this;return o()({},{handle:function(){t.hide()}},this.confirm)}}}},23:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"dialog-fade",appear:""}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"vc-dialog",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"dialog-wrapper"},[e("div",{staticClass:"dialog-content"},[e("div",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("p",{staticClass:"msg",domProps:{innerHTML:t._s(t.msg)}}),t._v(" "),e("div",{staticClass:"operate g-row"},[e("div",{staticClass:"g-col-4 left-btn",on:{click:t.cancelBtn.handle}},[t._v(t._s(t.cancel.text))]),t._v(" "),e("div",{staticClass:"g-col-4 right-btn",on:{click:t.confirmBtn.handle}},[t._v(t._s(t.confirm.text))])])])])])])},staticRenderFns:[]}},24:function(t,n){},25:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(13),o=e.n(i);n.default={props:{position:{type:String,default:"bottom"},title:{type:String},text:{type:String},icon:{type:String}},data:function(){return{showFlag:!1}},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1}},computed:{positionCls:function(){switch(this.position){case"top":return"c-top";case"middle":return"c-middle";case"bottom":default:return"c-bottom"}}},components:{LoaderRack:o.a}}},26:function(t,n){},27:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},28:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"loader"},[t._v("Loading...")])},staticRenderFns:[]}},29:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"vc-toast",class:t.positionCls,on:{click:function(t){t.stopPropagation()}}},[t.icon?e("div",{staticClass:"vc-toast-icon"},[e("p",["load"===t.icon?e("loader-rack"):e("i",{class:t.icon})],1)]):t._e(),t._v(" "),t.title?e("div",{staticClass:"vc-toast-title"},[e("p",[e("span",[t._v(t._s(t.title))])])]):t._e(),t._v(" "),t.text?e("div",[e("p",[e("span",[t._v(t._s(t.text))])])]):t._e()])},staticRenderFns:[]}},30:function(t,n,e){function i(t){e(31)}var o=e(0)(e(32),e(33),i,"data-v-73609114",null);t.exports=o.exports},31:function(t,n){},32:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"action-sheet",props:{btns:{type:Array,default:function(){return[{name:"是",handle:function(){}},{name:"否",handle:function(){}}]}}},data:function(){return{display:!1}},methods:{show:function(){this.display=!0},hide:function(){this.display=!1}}}},33:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"as-slide",appear:""}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.display,expression:"display"}],staticClass:"vc-as",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"vc-as-body g-box",class:{"vc-as-down":!t.display}},[e("div",{staticClass:"vc-as-menu"},[e("ul",t._l(t.btns,function(n){return e("li",{staticClass:"vc-as-btn"},[e("div",{staticClass:"vc-li-item",on:{click:n.handle}},[e("span",{domProps:{innerHTML:t._s(n.name)}})])])}))]),t._v(" "),e("div",{staticClass:"vc-as-btn vc-as-cancel",on:{click:t.hide}},[t._v("取消")])])])])},staticRenderFns:[]}},34:function(t,n){},35:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{}},methods:{_scal:function(){var t=this.$refs.page.offsetHeight,n=this.$refs.top.offsetHeight,e=this.$refs.foot.offsetHeight,i=t-n-e;this.$emit("position",{top:n,foot:e,content:i}),this.$refs.content.style.height=i+"px"}},mounted:function(){var t=this;this.$nextTick(function(){t._scal()})}}},36:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{ref:"page",staticClass:"vc-page"},[e("header",{ref:"top",staticClass:"vc-page-top"},[t._t("head")],2),t._v(" "),e("section",{ref:"content",staticClass:"vc-page-content"},[t._t("default")],2),t._v(" "),e("footer",{ref:"foot",staticClass:"vc-page-footer"},[t._t("foot")],2)])},staticRenderFns:[]}},38:function(t,n,e){"use strict";e.d(n,"b",function(){return i}),e.d(n,"a",function(){return o}),e.d(n,"d",function(){return a}),e.d(n,"c",function(){return s});var i=0,o=110,a="WAPMAN",s="http://localhost:5000"},4:function(t,n,e){"use strict";function i(t){var n=!(!t||1!==t.nodeType);return n||console.warn("This function need el param, el param must be DOM Element"),n}function o(t,n){if(i(t))return t.className.indexOf(n)>-1}function a(t,n){if(i(t)&&!o(t,n)){if("classList"in t)t.classList.add(n);else{var e=t.className,a=e+" "+n;t.className=a}return t}}function s(t,n){var e=window.localStorage;e&&2===arguments.length&&("object"===(void 0===n?"undefined":v()(n))?(n=f()(n),n="obj-"+n):n="str-"+n,e.setItem(t,n))}function c(t){var n=window.localStorage;if(n){var e=n.getItem(t);if(!e)return;if(0===e.indexOf("obj-"))return e=e.slice(4),JSON.parse(e);if(0===e.indexOf("str-"))return e.slice(4)}}function r(){var t=window.localStorage;t&&t.clear()}function u(t){if(!i(t))return void console.warn("$api.fixIos7Bar Function need el param, el param must be DOM Element");g&&w>=5&&(t.style.paddingTop="0.53334rem")}function l(t){if(!i(t))return void console.warn("$api.fixIos7Bar Function need el param, el param must be DOM Element");g?u(t):h&&w>=4.4&&(t.style.paddingTop="0.66667rem")}e.d(n,"a",function(){return m}),n.b=a,n.f=s,n.e=c,n.c=r,n.d=l;var d=e(16),f=e.n(d),p=e(66),v=e.n(p),m=/file/gi.test(location.protocol),h=/android/gi.test(navigator.appVersion),g=/iPhone|iPad/gi.test(navigator.appVersion),w=parseFloat(navigator.appVersion)},42:function(t,n,e){function i(t){e(43)}var o=e(0)(e(44),e(45),i,"data-v-649a4d91",null);t.exports=o.exports},43:function(t,n){},44:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(3),o=e.n(i),a=e(2),s=e(4);n.default={props:{title:{type:String},titleBox:{type:Object},left:{type:Object,default:function(){return{icon:"icon-back",handle:function(){Object(a.c)()}}}},right:{type:Array}},data:function(){return{leftObj:{}}},methods:{_initBar:function(){this._fixStatusBar()},_fixStatusBar:function(){s.a&&Object(s.d)(this.$refs.bar)}},computed:{titleBtn:function(){return this.title?this.title:this.titleBox?o()({},{icon:"icon-pulldown1",text:null},this.titleBox):void 0}},mounted:function(){this._initBar()}}},45:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"bar",staticClass:"c-bar"},[e("div",{staticClass:"c-bar-left c-square",on:{click:t.left.handle}},[e("i",{class:t.left.icon})]),t._v(" "),e("div",{staticClass:"c-bar-center c-square",class:{"c-title":!t.titleBtn.icon}},[t.titleBtn.icon?e("div",[e("span",[t._v(t._s(t.titleBtn.text))]),t._v(" "),e("i",{class:t.titleBtn.icon})]):e("span",[t._v(t._s(t.titleBtn))])]),t._v(" "),e("div",{staticClass:"c-bar-right c-square"},[t._l(t.right,function(n){return e("div",{staticClass:"c-right-item",on:{click:n.handle}},[n.icon?e("i",{class:n.icon}):e("span",[t._v(t._s(n.text))])])}),t._v(" "),t._t("baright")],2),t._v(" "),e("div",{staticClass:"c-slot"},[t._t("default")],2)])},staticRenderFns:[]}},46:function(t,n,e){"use strict";function i(t){return new s.a(function(n,e){setTimeout(n,t)})}function o(t){return r.a.AES.encrypt(t.toString(),u.d).toString()}n.b=i,n.a=o;var a=e(37),s=e.n(a),c=e(88),r=e.n(c),u=e(38)},48:function(t,n,e){function i(t){e(51)}var o=e(0)(e(52),e(53),i,"data-v-3d98de8a",null);t.exports=o.exports},51:function(t,n){},52:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{btn:Object,disabled:Boolean,color:String},computed:{classes:function(){return this.color||"vc-btn-primary"}}}},53:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vc-btn"},[e("button",{class:t.classes,attrs:{disabled:t.disabled}},[t._t("default")],2)])},staticRenderFns:[]}},6:function(t,n,e){function i(t){e(24)}var o=e(0)(e(25),e(29),i,"data-v-525e81a9",null);t.exports=o.exports},623:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=(e(17),e(5)),o=e(624),a=e.n(o),s=e(2);Object(s.b)().then(function(){new i.a({el:"#app",render:function(t){return t(a.a)}})})},624:function(t,n,e){function i(t){e(625)}var o=e(0)(e(626),e(627),i,"data-v-edec40f4",null);t.exports=o.exports},625:function(t,n){},626:function(t,n,e){"use strict";function i(t,n,e){Object(u.a)({url:"/user/check",params:t,success:function(t){return n(t)},faild:function(t){return e(t)}})}function o(t,n,e){Object(u.a)({url:"/user/code",type:"POST",data:t,success:function(t){return n(t)},faild:function(t){return e(t)}})}Object.defineProperty(n,"__esModule",{value:!0});var a=e(2),s=e(9),c=e(46),r=e(131),u=e(84),l=e(14),d=e.n(l),f=e(42),p=e.n(f),v=e(127),m=e.n(v),h=e(48),g=e.n(h);n.default={data:function(){var t=this;return{name:"",pass:"",password:"",passType:"password",passwordType:"password",passIcon:"icon-attention",passwordIcon:"icon-attention",tel:"",vcode:"",code:{text:"获取验证码",visible:!0,handle:function(){t.getcode()}},sign:!1}},methods:{login:function(){Object(a.c)()},confirm:function(){this.pass?this.password?this.pass!==this.password&&Object(s.a)("两次输入的密码不一致"):Object(s.a)("请确认密码"):Object(s.a)("请输入密码")},register:function(){var t=this;this.sign=!0,Object(r.d)({username:this.name,password:Object(c.a)(this.pass),code:this.vcode,phone:this.tel},function(n){t.sign=!1,n&&(Object(s.a)("注册成功"),Object(c.b)(3e3).then(function(){return t.login()}))},function(n){t.sign=!1,Object(s.a)(n)},function(n){n&&(t.show=!1,t.offline=!0)})},getcode:function(){var t=this;i({phone:this.tel},function(n){n?Object(s.a)("该手机号已经注册"):t.sendCode()},function(t){t&&console.log("offline")})},sendCode:function(){var t=this;o({phone:this.tel},function(n){n&&t.timer(60)},function(t){t&&console.log("offline")})},timer:function(t){var n=this;this.code.visible=!1,clearTimeout(this.DTIME),this.DTIME=setTimeout(function(){t>0?(n.code.text="("+t+"s)重新获取",n.timer(--t)):(n.code.text="获取验证码",n.code.visible=!0)},1e3)},contact:function(){Object(a.i)({name:"webview",url:"./webview.html",pageParam:{title:"Apicloud",url:"https://www.apicloud.com"}})},service:function(){console.log(this.tel,this.vcode),Object(a.i)({name:"webview",url:"./webview.html",pageParam:{title:"我的后台页面",url:"./slider.html",bounces:!0}})},taggleIcon:function(t){"icon-attention"===this[t+"Icon"]?(this[t+"Type"]="text",this[t+"Icon"]="icon-attentionfill"):(this[t+"Type"]="password",this[t+"Icon"]="icon-attention")}},components:{Page:d.a,TopBar:p.a,InputGroup:m.a,VcButton:g.a}}},627:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("page",[e("div",{attrs:{slot:"head"},slot:"head"},[e("top-bar",{attrs:{title:"手机快速注册"}})],1),t._v(" "),e("div",{staticClass:"g-container"},[e("div",{staticClass:"g-box"},[e("div",{staticClass:"g-row login-form"},[e("div",{staticClass:"g-col"},[e("input-group",{attrs:{type:"text",placeholder:"请输入用户名"},model:{value:t.name,callback:function(n){t.name=n},expression:"name"}})],1),t._v(" "),e("div",{staticClass:"g-col"},[e("input-group",{attrs:{type:t.passType,placeholder:"请输入密码",icon:t.passIcon},on:{click:function(n){t.taggleIcon("pass")}},model:{value:t.pass,callback:function(n){t.pass=n},expression:"pass"}})],1),t._v(" "),e("div",{staticClass:"g-col"},[e("input-group",{attrs:{type:t.passwordType,placeholder:"请再次输入密码",icon:t.passwordIcon},on:{click:function(n){t.taggleIcon("password")},onBlur:t.confirm},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}})],1),t._v(" "),e("div",{staticClass:"g-col"},[e("input-group",{attrs:{type:"tel",placeholder:"请输入手机号码",btn:t.code},model:{value:t.tel,callback:function(n){t.tel=n},expression:"tel"}})],1),t._v(" "),e("div",{staticClass:"g-col"},[e("input-group",{attrs:{type:"tel",placeholder:"请输入验证码"},model:{value:t.vcode,callback:function(n){t.vcode=n},expression:"vcode"}})],1)])]),t._v(" "),e("div",{staticClass:"g-box"},[e("div",{staticClass:"g-row login-button"},[e("div",{staticClass:"g-col"},[t.sign?e("vc-button",[t._v("注册\n            "),e("ins",[t._v("...")])]):e("vc-button",{nativeOn:{click:function(n){return t.register(n)}}},[t._v("注册")])],1)])]),t._v(" "),e("div",{staticClass:"g-box"},[e("div",{staticClass:"g-row login-reg"},[e("div",{staticClass:"g-col-4"},[e("label",{attrs:{for:""}},[t._v("已有账号？"),e("span",{on:{click:t.login}},[t._v("登录")])])]),t._v(" "),e("div",{staticClass:"g-col-4 g-right"},[e("label",{attrs:{for:""}},[t._v("遇到问题？"),e("span",{on:{click:t.contact}},[t._v("联系客服")])])])])])]),t._v(" "),e("div",{staticClass:"g-box"},[e("div",{staticClass:"g-row login-service"},[e("div",{staticClass:"g-col g-center"},[t._v("已阅读并同意"),e("span",{on:{click:t.service}},[t._v("服务条款")])])])])])},staticRenderFns:[]}},64:function(t,n,e){function i(t){return e(o(t))}function o(t){var n=a[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}var a={"./zh-cn":15,"./zh-cn.js":15};i.keys=function(){return Object.keys(a)},i.resolve=o,t.exports=i,i.id=64},84:function(t,n,e){"use strict";var i=e(3),o=e.n(i),a=e(149),s=e.n(a),c=e(150),r=e.n(c),u=e(38),l=e(9),d=e(46),f=e(2);n.a=function(t){t=o()({},{type:"GET",timeout:3e4,resType:"json",contentType:"application/x-www-form-urlencoded"},t),"application/x-www-form-urlencoded"===t.contentType&&(t.data=r.a.stringify(t.data)),s.a.request({baseURL:u.c,url:t.url,method:t.type,params:t.params,data:t.data,timeout:t.timeout,headers:{"Content-Type":t.contentType},withCredentials:!0,auth:{},responseType:t.resType,onUploadProgress:t.onUpload,onDownloadProgress:t.onDown,validateStatus:function(t){return t>=200&&t<300},maxContentLength:2e3}).then(function(n){var e=n.data||{};u.b===e.ret||0===e.code?void 0===e.data?Object(l.a)('接口返回数据中没有"data"'):t.success(e.data):u.a===e.ret?(Object(l.a)("登陆信息失效，请重新登录"),Object(d.b)(3e3).then(function(){return Object(f.l)("logout",!0)})):(e.msg=e.msg.replace(/非法请求：/g,""),t.error?t.error(e.msg):Object(l.a)(e.msg||"请求返回错误"))}).catch(function(n){t.faild(n)})}},9:function(t,n,e){"use strict";function i(t){d.position="middle",d.title=t,d.icon="load",d.show()}function o(t){d.hide()}function a(t){d.position="bottom",d.icon=null,d.title=t,d.show(),u&&clearTimeout(u),u=setTimeout(function(){d.hide()},3e3)}n.b=i,n.c=o,n.a=a;var s=e(5),c=e(6),r=e.n(c),u=null,l=s.a.extend(r.a),d=(new l).$mount();document.body.appendChild(d.$el)}},[623]);