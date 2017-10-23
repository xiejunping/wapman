import 'babel-polyfill';
import 'common/styles/index.styl';
import Vue from 'vue';
import fastclick from 'fastclick';
import Dialog from 'common/plugins/dialog';
import Toast from 'common/plugins/toast';
import Action from 'common/plugins/actionsheet';

Vue.use(Dialog);
Vue.use(Toast);
Vue.use(Action);

fastclick.attach(document.body);
