import Vue from 'vue';
import Toast from 'base/toast/toast';
import {timeout} from 'common/js/utils';

const Extoast = Vue.extend(Toast);
const toastVm = new Extoast().$mount();
document.body.appendChild(toastVm.$el);

export function loadingShow(text) {
  toastVm.position = 'middle';
  toastVm.title = text;
  toastVm.icon = 'load';
  toastVm.show();
}

export function toastShow(option) {
  toastVm.position = option.position;
  toastVm.title = option.title;
  toastVm.text = option.text;
  toastVm.icon = option.icon;
  toastVm.show();
}

export function toastClose(option) {
  toastVm.hide();
}

export function toastAutoClose(option) {
  toastVm.position = option.position;
  toastVm.title = option.title;
  toastVm.text = option.text;
  toastVm.icon = option.icon;
  toastVm.show();
  if (option.autoClose) {
    timeout(1000 * option.sec).then(() => {
      toastVm.hide();
    });
  }
}

export function error(msg) {
  toastVm.position = 'bottom';
  toastVm.icon = null;
  toastVm.title = msg;
  toastVm.show();
  timeout(3000).then(() => {
    toastVm.hide();
  });
}
