webpackJsonp([8],{10:function(t,n,e){function o(t){e(24)}var i=e(1)(e(25),e(29),o,"data-v-525e81a9",null);t.exports=i.exports},12:function(t,n,e){"use strict";function o(t){d.position="middle",d.title=t,d.icon="load",d.show()}function i(t){d.hide()}function a(t){d.position="bottom",d.icon=null,d.title=t,d.show(),u&&clearTimeout(u),u=setTimeout(function(){d.hide()},3e3)}n.b=o,n.c=i,n.a=a;var s=e(9),c=e(10),r=e.n(c),u=null,l=s.a.extend(r.a),d=(new l).$mount();document.body.appendChild(d.$el)},124:function(t,n,e){function o(t){e(125)}var i=e(1)(e(126),e(127),o,"data-v-1543c03e",null);t.exports=i.exports},125:function(t,n){},126:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"input",props:{value:{type:[String,Number]},addon:{type:String},disabled:{type:Boolean},readonly:{type:Boolean},btn:{type:Object},placeholder:{type:String},group:{type:String,default:"input-group"},type:{type:String,default:"text"},size:{type:Number}},computed:{inputxt:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{onFocus:function(){},onBlur:function(){},onInput:function(){}}}},127:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vc-input",class:t.group},[t.addon?e("span",{staticClass:"vc-input-addon",domProps:{innerHTML:t._s(t.addon)}}):t._e(),t._v(" "),"tel"===t.type?e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputxt,expression:"inputxt"}],staticClass:"vc-form-control",attrs:{type:"tel",placeholder:t.placeholder,disabled:t.disabled,readonly:t.readonly},domProps:{value:t.inputxt},on:{focus:t.onFocus,blur:t.onBlur,input:[function(n){n.target.composing||(t.inputxt=n.target.value)},t.onInput]}}):"number"===t.type?e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputxt,expression:"inputxt"}],staticClass:"vc-form-control",attrs:{type:"number",placeholder:t.placeholder,disabled:t.disabled,readonly:t.readonly},domProps:{value:t.inputxt},on:{focus:t.onFocus,blur:t.onBlur,input:[function(n){n.target.composing||(t.inputxt=n.target.value)},t.onInput]}}):"password"===t.type?e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputxt,expression:"inputxt"}],staticClass:"vc-form-control",attrs:{type:"password",placeholder:t.placeholder,disabled:t.disabled,readonly:t.readonly},domProps:{value:t.inputxt},on:{focus:t.onFocus,blur:t.onBlur,input:[function(n){n.target.composing||(t.inputxt=n.target.value)},t.onInput]}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputxt,expression:"inputxt"}],staticClass:"vc-form-control",attrs:{type:"text",placeholder:t.placeholder,disabled:t.disabled,readonly:t.readonly},domProps:{value:t.inputxt},on:{focus:t.onFocus,blur:t.onBlur,input:[function(n){n.target.composing||(t.inputxt=n.target.value)},t.onInput]}}),t._v(" "),t.btn?e("span",{staticClass:"vc-input-btn",domProps:{innerHTML:t._s(t.btn.text)},on:{click:t.btn.handle}}):t._e()])},staticRenderFns:[]}},128:function(t,n,e){"use strict";function o(t,n,e){Object(c.a)({url:"/index.php?s=User_User.Login",type:"POST",params:t,success:function(t){return n(t)},faild:function(t){return e(t)}})}function i(t,n,e){Object(c.a)({url:"/index.php?s=User_User.Register",type:"POST",params:t,success:function(t){return n(t)},faild:function(t){return e(t)}})}function a(t,n){Object(c.a)({url:"/index.php?s=User_User.Getinfo",success:function(n){return t(n)},faild:function(t){return n(t)}})}function s(t,n,e){Object(c.a)({url:"/index.php?s=User_User.Uploadavatar",type:"POST",params:t,success:function(t){return n(t)},faild:function(t){return e(t)}})}n.c=o,n.d=i,n.b=a,n.a=s;var c=e(82)},17:function(t,n,e){function o(t){e(26)}var i=e(1)(e(27),e(28),o,"data-v-afe59830",null);t.exports=i.exports},18:function(t,n,e){"use strict";var o=(e(69),e(19),e(9)),i=e(72),a=e.n(i),s=e(20),c=e.n(s),r=void 0,u={install:function(t,n){if(!r){var e=t.extend(c.a);r=(new e).$mount(),document.body.appendChild(r.$el)}var o={show:function(t){r.msg=t,r.show()},close:function(){r.hide()},open:function(t){t.title&&(r.title=t.title),t.msg&&(r.msg=t.msg),t.cancel&&(r.cancel=t.cancel),t.confirm&&(r.confirm=t.confirm),r.show()}};t.$dialog||(t.$dialog=o),t.mixin({created:function(){this.$dialog=t.$dialog}})}},l=e(10),d=e.n(l),p=void 0,f=void 0,v={install:function(t,n){if(!p){var e=t.extend(d.a);p=(new e).$mount(),document.body.appendChild(p.$el)}var o={loading:function(t){p.position="middle",p.title=t,p.icon="load",p.show()},open:function(t){p.position=t.position,p.title=t.title,p.text=t.text,p.icon=t.icon,p.show()},close:function(){p.hide()},autoClose:function(t){p.position=t.position,p.title=t.title,p.text=t.text,p.icon=t.icon,p.show(),t.autoClose&&(f&&clearTimeout(f),f=setTimeout(function(){p.hide()},1e3*t.sec))},error:function(t){p.position="bottom",p.icon=null,p.title=t,p.show(),f&&clearTimeout(f),f=setTimeout(function(){p.hide()},3e3)}};t.$toast||(t.$toast=o),t.mixin({created:function(){this.$toast=t.$toast}})}},m=e(30),g=e.n(m),h=void 0,w={install:function(t,n){if(!h){var e=t.extend(g.a);h=(new e).$mount(),document.body.appendChild(h.$el)}var o={init:function(t){h.btns=t},show:function(){h.show()},close:function(){h.hide()}};t.$action||(t.$action=o),t.mixin({created:function(){this.$action=t.$action}})}};o.a.use(u),o.a.use(v),o.a.use(w),a.a.attach(document.body)},19:function(t,n){},20:function(t,n,e){function o(t){e(21)}var i=e(1)(e(22),e(23),o,"data-v-136ae367",null);t.exports=i.exports},21:function(t,n){},22:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(6),i=e.n(o);n.default={name:"dialog",props:{title:{type:String,default:"系统提示"},msg:{type:String},confirm:{type:Object,default:function(){return{text:"确定"}}},cancel:{type:Object,default:function(){return{text:"取消"}}}},data:function(){return{showFlag:!1}},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1}},computed:{cancelBtn:function(){var t=this;return i()({},{handle:function(){t.hide()}},this.cancel)},confirmBtn:function(){var t=this;return i()({},{handle:function(){t.hide()}},this.confirm)}}}},23:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"dialog-fade",appear:""}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"vc-dialog",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"dialog-wrapper"},[e("div",{staticClass:"dialog-content"},[e("div",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),e("p",{staticClass:"msg",domProps:{innerHTML:t._s(t.msg)}}),t._v(" "),e("div",{staticClass:"operate g-row"},[e("div",{staticClass:"g-col-4 left-btn",on:{click:t.cancelBtn.handle}},[t._v(t._s(t.cancel.text))]),t._v(" "),e("div",{staticClass:"g-col-4 right-btn",on:{click:t.confirmBtn.handle}},[t._v(t._s(t.confirm.text))])])])])])])},staticRenderFns:[]}},24:function(t,n){},25:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(17),i=e.n(o);n.default={props:{position:{type:String,default:"bottom"},title:{type:String},text:{type:String},icon:{type:String}},data:function(){return{showFlag:!1}},methods:{show:function(){this.showFlag=!0},hide:function(){this.showFlag=!1}},computed:{positionCls:function(){switch(this.position){case"top":return"c-top";case"middle":return"c-middle";case"bottom":default:return"c-bottom"}}},components:{LoaderRack:i.a}}},26:function(t,n){},27:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},28:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"loader"},[t._v("Loading...")])},staticRenderFns:[]}},29:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],staticClass:"vc-toast",class:t.positionCls,on:{click:function(t){t.stopPropagation()}}},[t.icon?e("div",{staticClass:"vc-toast-icon"},[e("p",["load"===t.icon?e("loader-rack"):e("i",{class:t.icon})],1)]):t._e(),t._v(" "),t.title?e("div",{staticClass:"vc-toast-title"},[e("p",[e("span",[t._v(t._s(t.title))])])]):t._e(),t._v(" "),t.text?e("div",[e("p",[e("span",[t._v(t._s(t.text))])])]):t._e()])},staticRenderFns:[]}},3:function(t,n,e){"use strict";function o(){return b.a?new w.a(function(t,n){window.apiready=function(){d("light"),t()}}):w.a.resolve()}function i(t){t=g()({},t,{slidBackEnabled:!1,historyGestureEnabled:!0}),window.api?(window.api.openWin(t),f()):(t.pageParam&&Object(b.e)("pageparams",t.pageParam),setTimeout(function(){window.location.href=t.url},t.delay))}function a(t){window.api?window.api.historyBack({frameName:t},function(t,n){!t.status&&window.api.closeWin()}):window.history.go(-1)}function s(t){window.api&&window.api.closeToWin({name:t})}function c(){var t=void 0,n="再按一次退出"+window.api.appName;r("keyback",function(e){t?(new Date).getTime()-t<2e3&&window.api.closeWidget({silent:!0}):(t=(new Date).getTime(),window.api.toast({msg:n,duration:1500,location:"bottom"}),setTimeout(function(){t=null},1e3))})}function r(t,n){window.api?window.api.addEventListener({name:t},function(t,e){var o=t&&t.value||{};e&&e.msg&&Object(x.a)(e.msg),n(o)}):console.warn("api is not be found in addEvent")}function u(t){window.api?window.api.removeEventListener({name:t}):console.warn("api is not be found in removeEvent")}function l(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};window.api?window.api.sendEvent({name:t,extra:n}):console.warn("api is not be found in sendEvent")}function d(t){window.api?window.api.setStatusBarStyle({style:t}):console.warn("api is not be found in setStatusBarStyle")}function p(t){window.api?window.api.removeLaunchView({animation:{type:"fade",duration:t}}):console.warn("api is not be found in removeLaunch")}function f(){window.api?(Object(x.b)("加载中"),r("removePage",function(t){Object(x.c)(),u("removePage")}),r("viewdisappear",function(t){return l("removePage")})):console.warn("api is not be found in openPage")}function v(t){return t=g()({},{sourceType:"camera",encodingType:"jpg",mediaValue:"pic",destinationType:"url",allowEdit:!0,quality:80,targetWidth:100,targetHeight:100,saveToPhotoAlbum:!1},t),window.api?new w.a(function(n,e){window.api.getPicture(t,function(e,o){if(e){var i="base64"===t.destinationType?e.base64Data:e.data;n(i)}else o&&o.msg&&Object(x.a)(o.msg)})}):w.a.resolve()}n.b=o,n.g=i,n.c=a,n.d=s,n.e=c,n.a=r,n.i=l,n.h=p,n.f=v;var m=e(6),g=e.n(m),h=e(34),w=e.n(h),b=e(7),x=e(12)},30:function(t,n,e){function o(t){e(31)}var i=e(1)(e(32),e(33),o,"data-v-73609114",null);t.exports=i.exports},31:function(t,n){},32:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"action-sheet",props:{btns:{type:Array,default:function(){return[{name:"是",handle:function(){}},{name:"否",handle:function(){}}]}}},data:function(){return{display:!1}},methods:{show:function(){this.display=!0},hide:function(){this.display=!1}}}},33:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"as-slide",appear:""}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.display,expression:"display"}],staticClass:"vc-as",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"vc-as-body g-box",class:{"vc-as-down":!t.display}},[e("div",{staticClass:"vc-as-menu"},[e("ul",t._l(t.btns,function(n){return e("li",{staticClass:"vc-as-btn"},[e("div",{staticClass:"vc-li-item",on:{click:n.handle}},[e("span",{domProps:{innerHTML:t._s(n.name)}})])])}))]),t._v(" "),e("div",{staticClass:"vc-as-btn vc-as-cancel",on:{click:t.hide}},[t._v("取消")])])])])},staticRenderFns:[]}},36:function(t,n,e){function o(t){e(52)}var i=e(1)(e(53),e(54),o,"data-v-3d98de8a",null);t.exports=i.exports},37:function(t,n,e){function o(t){e(38)}var i=e(1)(e(39),e(40),o,null,null);t.exports=i.exports},38:function(t,n){},39:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{}},methods:{_scal:function(){var t=this.$refs.page.offsetHeight,n=this.$refs.top.offsetHeight,e=this.$refs.foot.offsetHeight;this.$refs.content.style.height=t-n-e+"px"}},mounted:function(){var t=this;this.$nextTick(function(){t._scal()})},components:{}}},40:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{ref:"page",staticClass:"vc-page"},[e("header",{ref:"top",staticClass:"vc-page-top"},[t._t("head")],2),t._v(" "),e("section",{ref:"content",staticClass:"vc-page-content"},[t._t("default")],2),t._v(" "),e("footer",{ref:"foot",staticClass:"vc-page-footer"},[t._t("foot")],2)])},staticRenderFns:[]}},52:function(t,n){},53:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{btn:Object,disabled:Boolean,color:String},computed:{classes:function(){return this.color||"vc-btn-primary"}}}},54:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vc-btn"},[e("button",{class:t.classes,attrs:{disabled:t.disabled},on:{click:function(n){t.$emit("click",n)}}},[t._t("default")],2)])},staticRenderFns:[]}},554:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=(e(18),e(9)),i=e(555),a=e.n(i),s=e(3);Object(s.b)().then(function(){Object(s.e)(),console.log(navigator.appVersion),new o.a({el:"#app",render:function(t){return t(a.a)}})})},555:function(t,n,e){function o(t){e(556)}var i=e(1)(e(557),e(558),o,"data-v-3358d14a",null);t.exports=i.exports},556:function(t,n){},557:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(7),i=e(3),a=e(128),s=e(37),c=e.n(s),r=e(124),u=e.n(r),l=e(36),d=e.n(l);n.default={data:function(){return{name:"",pass:"",sign:!1}},methods:{login:function(){var t=this;this.sign=!0,Object(a.c)({name:this.name,password:this.pass},function(n){t.show=!0,t.offline=!1,t.sign=!1,t.pass="",Object(i.i)("login",n)},function(n){n&&(t.show=!0,t.offline=!0)})},forget:function(){Object(i.g)({name:"forget",url:"./forget.html"})},register:function(){Object(i.g)({name:"reg",url:"./reg.html"})},service:function(){Object(i.g)({name:"",url:""})}},created:function(){this.name=this.name||Object(o.d)("userCode")},components:{Page:c.a,InputGroup:u.a,VcButton:d.a}}},558:function(t,n,e){t.exports={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("page",[o("div",{staticClass:"g-box g-center login-logo"},[o("img",{attrs:{src:e(559),width:"64%",alt:""}})]),t._v(" "),o("div",{staticClass:"g-container"},[o("div",{staticClass:"g-box"},[o("div",{staticClass:"g-row login-form"},[o("div",{staticClass:"g-col"},[o("input-group",{attrs:{type:"text",placeholder:"请输入用户名"},model:{value:t.name,callback:function(n){t.name=n},expression:"name"}})],1),t._v(" "),o("div",{staticClass:"g-col"},[o("input-group",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.pass,callback:function(n){t.pass=n},expression:"pass"}})],1)])]),t._v(" "),o("div",{staticClass:"g-box"},[o("div",{staticClass:"g-row login-button"},[o("div",{staticClass:"g-col"},[t.sign?o("vc-button",[t._v("登录\n            "),o("ins",[t._v("...")])]):o("vc-button",{on:{click:t.login}},[t._v("登录")])],1)])]),t._v(" "),o("div",{staticClass:"g-box"},[o("div",{staticClass:"g-row login-reg"},[o("div",{staticClass:"g-col-4"},[o("label",{attrs:{for:""},on:{click:t.forget}},[o("span",[t._v("忘记密码?")])])]),t._v(" "),o("div",{staticClass:"g-col-4 g-right"},[o("label",{attrs:{for:""},on:{click:t.register}},[o("span",[t._v("新用户注册")])])])])])]),t._v(" "),o("div",{staticClass:"g-box"},[o("div",{staticClass:"g-row login-service"},[o("div",{staticClass:"g-col g-center"},[t._v("已阅读并同意"),o("span",{on:{click:t.service}},[t._v("服务条款")])])])])])},staticRenderFns:[]}},559:function(t,n,e){t.exports=e.p+"static/img/logo_login.2a23109.png"},58:function(t,n,e){"use strict";function o(t){return new a.a(function(n,e){setTimeout(n,t)})}n.a=o;var i=e(34),a=e.n(i)},7:function(t,n,e){"use strict";function o(t){return!(!t||1!==t.nodeType)}function i(t,n){var e=window.localStorage;e&&2===arguments.length&&("object"===(void 0===n?"undefined":p()(n))?(n=l()(n),n="obj-"+n):n="str-"+n,e.setItem(t,n))}function a(t){var n=window.localStorage;if(n){var e=n.getItem(t);if(!e)return;if(0===e.indexOf("obj-"))return e=e.slice(4),JSON.parse(e);if(0===e.indexOf("str-"))return e.slice(4)}}function s(){var t=window.localStorage;t&&t.clear()}function c(t){if(!o(t))return void console.warn("$api.fixIos7Bar Function need el param, el param must be DOM Element");m&&g>=5&&(t.style.paddingTop="0.53334rem")}function r(t){if(!o(t))return void console.warn("$api.fixIos7Bar Function need el param, el param must be DOM Element");m?c(t):v&&g>=4.4&&(t.style.paddingTop="0.66667rem")}e.d(n,"a",function(){return f}),n.e=i,n.d=a,n.b=s,n.c=r;var u=e(73),l=e.n(u),d=e(74),p=e.n(d),f=/file/gi.test(location.protocol),v=/android/gi.test(navigator.appVersion),m=/iPhone|iPad/gi.test(navigator.appVersion),g=parseFloat(navigator.appVersion)},82:function(t,n,e){"use strict";var o=e(6),i=e.n(o),a=e(152),s=e.n(a),c=e(12),r=e(7),u=e(58),l=e(3);n.a=function(t){t=i()({},{type:"GET",timeout:3e4,resType:"json",contentType:"application/json"},t),s.a.request({baseURL:"http://web.pjpiao.com/public",url:t.url,method:t.type,params:t.params,data:t.data,timeout:t.timeout,headers:{Token:Object(r.d)("token"),Client:"app"},withCredentials:!1,auth:{},responseType:t.resType,onUploadProgress:t.onUpload,onDownloadProgress:t.onDown,validateStatus:function(t){return t>=200&&t<300},maxContentLength:2e3}).then(function(n){console.log(n);var e=n.data||{};200===e.ret?void 0===e.data?Object(c.a)('接口返回数据中没有"data"'):t.success(e.data):501===e.ret?(Object(c.a)("登陆信息失效，请重新登录"),Object(u.a)(3e3).then(function(){return Object(l.i)("loginout")})):(e.msg=e.msg.replace(/非法请求：/g,""),t.error?t.error(e.msg):Object(c.a)(e.msg||"请求返回错误"))}).catch(function(n){t.faild(n)})}}},[554]);