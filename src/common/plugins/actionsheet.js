/**
 * Created by junpingxie on 2017/10/13.
 */
import ActionSheet from 'base/actionSheet/action-sheet';

let $vm;

export default {
  install(Vue, option) {
    if (!$vm) {
      const Exaction = Vue.extend(ActionSheet);

      $vm = new Exaction().$mount();
      document.body.appendChild($vm.$el);
    }

    let action = {
      init(btns) {
        $vm.btns = btns;
      },
      show() {
        $vm.show();
      },
      close() {
        $vm.hide();
      }
    };

    if (!Vue.$action) Vue.$action = action;

    Vue.mixin({
      created() {
        this.$action = Vue.$action;
      }
    });
  }
};
