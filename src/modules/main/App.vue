<template>
  <page/>
</template>

<script>
  import { open, backTo, removeLaunch, addEvent, sendEvent, execScript } from 'common/js/native';
  import { getStorage } from 'common/js/api';
  import { timeout } from 'common/js/utils';

  // 引用组件
  import Page from 'components/page/page';

  export default {
    name: 'main',
    created() {
      // 监听事件
      addEvent('home').then(ret => this.eventHome()).catch(e => {
        alert(e);
      });
      addEvent('login').then(ret => ret && this.eventLogin()).catch(e => {
        alert(e);
      });
      addEvent('logout').then(ret => ret && this.eventLoginOut()).catch(e => {
        alert(e);
      });

      // 首页路由准备完成
      open({
        name: 'rootIndex',
        url: './root.html'
      });
      timeout(2000).then(() => removeLaunch(2000));
    },
    methods: {
      eventHome() {
        let userData = getStorage('userData');
        if (userData && userData.id) {
          execScript({
            winName: 'rootIndex',
            jsfun: 'try{window.Vm.goHome()}catch(e){}'
          });
        } else {
          execScript({
            winName: 'rootIndex',
            jsfun: 'try{window.Vm.goLogin()}catch(e){}'
          });
        }
      },
      eventLoginOut() {
        this.eventHome();
        timeout(600).then(() => backTo('rootIndex'));
      },
      eventLogin() {
        this.eventHome();
      }
    },
    components: {Page}
  };
</script>

<style scoped>

</style>
