import 'common/js/global';
import { apiReady } from 'common/js/native';

import Vue from 'vue';
import App from './App';
import router from './router';

/* eslint-disable no-new */
apiReady().then(() => {
  // 路由模式
  new Vue({
    el: '#app',
    router,
    render: h => h(App)
  });
});
