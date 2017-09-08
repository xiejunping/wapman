import Toast from 'base/toast/toast.vue';

let $vm, CTIME;

export default {
  install(Vue, option) {
    if (!$vm) {
      const Extoast = Vue.extend(Toast);

      $vm = new Extoast().$mount();
      document.body.appendChild($vm.$el);
    }

    let toast = {
      loading(text) {
        $vm.position = 'middle';
        $vm.title = text;
        $vm.icon = 'load';
        $vm.show();
      },
      open(option) {
        $vm.position = option.position;
        $vm.title = option.title;
        $vm.text = option.text;
        $vm.icon = option.icon;
        $vm.show();
      },
      close() {
        $vm.hide();
      },
      autoClose(option) {
        $vm.position = option.position;
        $vm.title = option.title;
        $vm.text = option.text;
        $vm.icon = option.icon;
        $vm.show();
        if (option.autoClose) {
          CTIME && clearTimeout(CTIME);
          CTIME = setTimeout(() => {
            $vm.hide();
          }, 1000 * option.sec);
        }
      },
      error(msg) {
        $vm.position = 'bottom';
        $vm.icon = null;
        $vm.title = msg;
        $vm.show();
        CTIME && clearTimeout(CTIME);
        CTIME = setTimeout(() => {
          $vm.hide();
        }, 3000);
      }
    };

    if (!Vue.$toast) Vue.$toast = toast;

    Vue.mixin({
      created() {
        this.$toast = Vue.$toast;
      }
    });
  }
};
