<template>
  <page>
    <div slot="head">
      <top-bar :title-box="title"></top-bar>
    </div>

    <div>
      <h1>我是个人中心页</h1>
    </div>

    <div>
      <a href="#" @click="showDialog"> 退出登录 </a>
      <vc-dialog ref="dialog" msg="您确定要退出系统吗？" @cancel="" @confirm=""></vc-dialog>
    </div>

    <div slot="foot"></div>
  </page>
</template>

<script type="text/ecmascript-6">
  import TopBar from 'base/top-bar/top-bar';
  import VcDialog from 'base/dialog/vc-dialog';
  import Page from 'components/page/page';

  export default {
    data () {
      return {
        title: {
          icon: 'icon-pulldown1',
          text: '个人中心'
        }
      };
    },
    methods: {
      showDialog () {
        this.$refs.dialog.show();
      }
    },
    created() {
    },
    components: {Page, TopBar, VcDialog}
  };
</script>

<style></style>
