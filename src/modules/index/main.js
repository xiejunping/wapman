import Vue from 'vue';
import {apiReady} from 'common/js/native';
import App from './App';

/* eslint-disable no-new */
apiReady(() => {
  console.log(navigator.appVersion);
  new Vue({
    el: '#app',
    render: h => h(App)
  });
});
