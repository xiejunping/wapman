<template>
  <page>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </page>
</template>

<script type="text/ecmascript-6">
  import { sendEvent } from 'common/js/native';
  // 引用组件
  import Page from 'components/page/page';

  export default {
    created() {
      window.Vm = this;
      sendEvent('home');
    },
    methods: {
      goHome() {
        console.log('goHome');
        this.$router.replace({
          name: 'index'
        });
      },
      goLogin() {
        console.log('goLogin');
        this.$router.replace({
          name: 'login'
        });
      }
    },
    components: {Page}
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
