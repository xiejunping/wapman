<template>
  <page>
    <div slot="head">
      <top-bar :title-box="title"></top-bar>
    </div>

    <div>
      <h1>我是个人中心页</h1>
    </div>

    <div slot="foot"></div>
  </page>
</template>

<script type="text/ecmascript-6">
import TopBar from 'base/top-bar/top-bar';
import Page from 'components/page/page';

export default {
  data () {
    return {
      title: {
        icon: 'icon-dropdown',
        text: '个人中心'
      }
    };
  },
  created() {
  },
  components: {Page, TopBar}
};
</script>

<style></style>
