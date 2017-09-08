import Dialog from 'base/dialog/vc-dialog.vue';

let $vm;

export default {
  install(Vue, option) {
    if (!$vm) {
      const Exdialog = Vue.extend(Dialog);

      $vm = new Exdialog().$mount();
      document.body.appendChild($vm.$el);
    }

    let dialog = {
      show(text) {
        $vm.msg = text;
        $vm.show();
      },
      open(option) {
        option.title && ($vm.title = option.title);
        option.msg && ($vm.msg = option.msg);
        option.cancel && ($vm.cancel = option.cancel);
        option.confirm && ($vm.confirm = option.confirm);
        $vm.show();
      }
    };

    if (!Vue.$dialog) Vue.$dialog = dialog;

    Vue.mixin({
      created() {
        this.$dialog = Vue.$dialog;
      }
    });
  }
};
