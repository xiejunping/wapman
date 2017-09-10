<template>
  <page>
    <div slot="head">
      <top-bar :title-box="title"></top-bar>
    </div>

    <content-main>
      <div class="g-list-padding g-row">
        <div class="g-col-8 g-box">
          <label for="">我是个人中心页</label>
        </div>
      </div>
      <div class="g-list-padding g-row">
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
  import {open} from 'common/js/native';

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
      }
    },
    created() {
    },
    components: {Page, TopBar, ContentMain, VcButton}
  };
</script>

<style></style>
