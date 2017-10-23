<template>
  <page>
    <top-bar title="图片上传七牛demo"></top-bar>

    <content-main>
      <div class="g-box">

      </div>

    </content-main>
  </page>
</template>

<script type="text/ecmascript-6">
  import Page from 'components/page/page';
  import TopBar from 'base/top-bar/top-bar';
  import ContentMain from 'base/main/content-main';
  import VcButton from 'base/button/vc-button';

//  import Qiniu from 'qiniu-js';

  export default {
    data() {
      return {};
    },
    methods: {

    },
    components: {Page, TopBar, ContentMain, VcButton}
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  .m-button
    padding-top: .234rem
</style>
