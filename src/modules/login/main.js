import 'babel-polyfill';
import Vue from 'vue';
import fastclick from 'fastclick';
import {apiReady} from 'common/js/native';
import App from './App';

fastclick.attach(document.body);

/* eslint-disable no-new */
apiReady(() => {
  console.log(navigator.appVersion);
  new Vue({
    el: '#app',
    render: h => h(App)
  });
});
