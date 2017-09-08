import Vue from 'vue';
import Toast from 'base/toast/toast.vue';

const Extoast = Vue.extend(Toast);
const toastVm = new Extoast().$mount();
document.body.appendChild(toastVm.$el);

let CTIME;

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
    CTIME && clearTimeout(CTIME);
    CTIME = setTimeout(() => {
      toastVm.hide();
    }, 1000 * option.sec);
  }
}

export function error(msg) {
  toastVm.position = 'bottom';
  toastVm.icon = null;
  toastVm.title = msg;
  toastVm.show();
  CTIME && clearTimeout(CTIME);
  CTIME = setTimeout(() => {
    toastVm.hide();
  }, 3000);
}
