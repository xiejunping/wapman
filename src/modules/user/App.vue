<template>
  <page>
    <div slot="head">
      <top-bar :title-box="title"></top-bar>
    </div>

    <div class="g-container">
      <div class="g-list-padding g-row">
        <div class="g-col-8 g-box">
          <label for="">我是个人中心页</label>
        </div>
      </div>
      <div class="g-list-padding g-row">
        <div class="g-col-8 g-box">
          <vc-button :btn="loginout">退出登录</vc-button>
        </div>
      </div>
    </div>


    <div slot="foot"></div>
  </page>
</template>

<script type="text/ecmascript-6">
  import Page from 'components/page/page';
  import TopBar from 'base/top-bar/top-bar';
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
    computed: {
      loginout () {
        let me = this;
        return {
          style: '',
          icon: '',
          handle() {
            me.$dialog.open({
              msg: '您确定要退出系统吗？',
              confirm: {
                text: '确定',
                handle() {
                  open({
                    name: 'login',
                    url: './login.html'
                  });
                }
              }
            });
          }
        };
      }
    },
    methods: {
      showDialog () {

      }
    },
    created() {
    },
    components: {Page, TopBar, VcButton}
  };
</script>

<style></style>
