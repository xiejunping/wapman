import 'babel-polyfill';
import 'common/styles/index.styl';
import Vue from 'vue';
import fastclick from 'fastclick';
import Dialog from 'common/plugins/dialog';
import Toast from 'common/plugins/toast';

Vue.use(Dialog);
Vue.use(Toast);

fastclick.attach(document.body);
