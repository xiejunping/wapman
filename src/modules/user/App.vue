<template>
  <page>
    <div slot="head">
      <top-bar :title-box="title" :right="right">
        <drop-menu slot="baright" :show="show" :data="menu" @fnlist="fnDropMenu"></drop-menu>
      </top-bar>
    </div>

    <content-main>
      <div class="g-list-padding g-row vc-li-item">
        <div class="g-col-8 g-box">
          <label for="">我是个人中心页</label>
        </div>
      </div>
      <div class="g-list-padding g-row vc-li-item">
        <div class="g-col-8 g-box">
          <label for="">我是个人中心页</label>
        </div>
      </div>
      <div class="g-list-padding g-row vc-li-item">
        <div class="g-col-8 g-box">
          <label for="">我是个人中心页</label>
        </div>
      </div>
      <div class="g-list-padding g-row vc-li-item">
        <div class="g-col-8 g-box">
          <label for="">我是个人中心页</label>
        </div>
      </div>
      <div class="g-list-padding g-row vc-li-item">
        <div class="g-col-8 g-box">
          <label for="">我是个人中心页</label>
        </div>
      </div>
      <div class="g-list-padding g-row vc-li-item">
        <div class="g-col-8 g-box">
          <label for="">我是个人中心页</label>
        </div>
      </div>
      <div class="g-list-padding g-row vc-li-item">
        <div class="g-col-8 g-box">
          <label for="">我是个人中心页</label>
        </div>
      </div>
      <div class="g-list-padding g-row vc-li-item">
        <div class="g-col-8 g-box">
          <label for="">我是个人中心页</label>
        </div>
      </div>
      <div class="g-list-padding g-row vc-li-item">
        <div class="g-col-8 g-box">
          <label for="">我是个人中心页</label>
        </div>
      </div>
      <div class="g-list-padding g-row vc-li-item">
        <div class="g-col-8 g-box">
          <label for="">我是个人中心页</label>
        </div>
      </div>
      <div class="g-list-padding g-row vc-li-item">
        <div class="g-col-8 g-box">
          <label for="">我是个人中心页</label>
        </div>
      </div>
      <div class="g-list-padding g-row vc-li-item">
        <div class="g-col-8 g-box">
          <label for="">我是个人中心页</label>
        </div>
      </div>
      <div class="g-list-padding g-row vc-li-item">
        <div class="g-col-8 g-box">
          <label for="">我是个人中心页</label>
        </div>
      </div>
      <div class="g-list-padding g-row vc-li-item">
        <div class="g-col-8 g-box">
          <label for="">我是个人中心页</label>
        </div>
      </div>
      <div class="g-list-padding g-row vc-li-item">
        <div class="g-col-8 g-box">
          <label for="">我是个人中心页</label>
        </div>
      </div>
      <div class="g-list-padding g-row vc-li-item">
        <div class="g-col-8 g-box">
          <vc-button @click="showDialog">退出登录</vc-button>
        </div>
      </div>
    </content-main>


    <div slot="foot"></div>
  </page>
</template>

<script type="text/ecmascript-6">
  import Page from 'components/page/page';
  import TopBar from 'base/top-bar/top-bar';
  import ContentMain from 'base/main/content-main';
  import VcButton from 'base/button/vc-button';
  import DropMenu from 'base/drop-menu/drop-menu';

  import {open} from 'common/js/native';

  export default {
    data () {
      let me = this;
      return {
        title: {
          icon: 'icon-pulldown1',
          text: '个人中心'
        },
        right: [{
          icon: 'icon-more',
          handle() {
            me.show = !me.show;
          }
        }],
        show: false,
        menu: [{
          id: 0,
          icon: 'icon-share',
          title: '分享'
        }, {
          id: 1,
          icon: 'icon-like',
          title: '喜欢'
        }, {
          id: 2,
          icon: 'icon-scan',
          title: '扫一扫'
        }, {
          id: 3,
          icon: 'icon-favor',
          title: '收藏'
        }]
      };
    },
    methods: {
      showDialog (e) {
        let me = this;
        this.$dialog.open({
          msg: '您确定要退出系统吗？',
          confirm: {
            text: '确定',
            handle() {
              me.$dialog.close();
              open({
                name: 'login',
                url: './login.html'
              });
            }
          }
        });
      },
      fnDropMenu (menu) {
        console.log(menu);
      }
    },
    created() {
    },
    components: {Page, TopBar, ContentMain, VcButton, DropMenu}
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/styles/variable"
  @import "~common/styles/mixin"
  .vc-li-item
    $active-block()
    width: 100%
    background-color: $c_white

</style>
