<template>
  <page>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </page>
</template>

<script type="text/ecmascript-6">
  // 引用组件
  import Page from 'components/page/page';

  export default {
    components: {Page}
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
