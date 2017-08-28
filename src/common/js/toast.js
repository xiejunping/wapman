import Vue from 'vue';
import Toast from 'base/toast/toast.vue';

const Extoast = Vue.extend(Toast);
const toastVm = new Extoast().$mount();
document.body.appendChild(toastVm.$el);

export function loadingShow() {
  toastVm.show = true;
  toastVm.title = '努力加载中';
}

export function toastShow(option) {
  toastVm.show = true;
  toastVm.position = option.position;
  toastVm.title = option.title;
  toastVm.text = option.text;
  toastVm.icon = option.icon;
}

export function toastClose(option) {
  toastVm.show = false;
}

export function toastAutoClose(option) {
  toastVm.show = true;
  toastVm.position = option.position;
  toastVm.title = option.title;
  toastVm.text = option.text;
  toastVm.icon = option.icon;
  if (option.autoClose) {
    setTimeout(() => {
      toastClose();
    }, 1000 * option.sec);
  }
}
