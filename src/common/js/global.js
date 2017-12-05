import 'babel-polyfill';
import 'common/styles/index.styl';
import Vue from 'vue';
import fastclick from 'fastclick';

// 插件式组件
import Dialog from 'common/plugins/dialog';
import Toast from 'common/plugins/toast';
import Action from 'common/plugins/actionsheet';

// 错误监控日志
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

// 全局过滤器
import * as Filter from 'common/js/filters';

Vue.use(Dialog);
Vue.use(Toast);
Vue.use(Action);

if (process.env.NODE_ENV === 'production') {
  Raven.config('https://d717fdeb7e6149da9928c8e57093a527@sentry.io/254621').addPlugin(RavenVue, Vue).install();
}

for (let key in Filter) {
  Vue.filter(key, Filter[key]);
}

fastclick.attach(document.body);
