<template>
  <page>
    <div slot="head">
      <top-bar title="手机找回密码"></top-bar>
    </div>

    <div class="g-container">

      <div class="g-box">
        <div class="g-row login-form">
          <div class="g-col">
            <input-group type="tel" v-model="tel" placeholder="请输入手机号码" :btn="code"></input-group>
          </div>
          <div class="g-col">
            <input-group type="tel" v-model="vcode" placeholder="请输入验证码"></input-group>
          </div>
        </div>
      </div>

      <div class="g-box">
        <div class="g-row login-button">
          <div class="g-col">
            <vc-button v-if="sign">找回密码<ins>...</ins></vc-button>
            <vc-button v-else @click="forget">找回密码</vc-button>
          </div>
        </div>
      </div>

      <div class="g-box">
        <div class="g-row login-reg">
          <div class="g-col-4">
            <label for="" @click="login"><span>返回登录</span></label>
          </div>
          <div class="g-col-4 g-right">
            <label for="">遇到问题？<span @click="contact">联系客服</span></label>
          </div>
        </div>
      </div>
    </div>

    <div class="g-box">
      <div class="g-row login-service">
        <div class="g-col g-center">已阅读并同意<span @click="service">服务条款</span></div>
      </div>
    </div>
  </page>
</template>

<script type="text/ecmascript-6">
  import {open, back} from 'common/js/native';

  import Page from 'components/page/page';
  import TopBar from 'base/top-bar/top-bar';
  import InputGroup from 'base/input/input-group';
  import VcButton from 'base/button/vc-button';

  export default {
    data () {
      return {
        tel: '',
        vcode: '',
        code: {
          text: '获取验证码',
          handle() {
            console.log('请求验证码');
          }
        },
        sign: false
      };
    },
    methods: {
      login() {
        back();
      },
      forget () {
        this.sign = true;
        console.log(this.tel, this.vcode);
      },
      contact() {
        open({
          name: '',
          url: ''
        });
      },
      service() {
        open({
          name: '',
          url: ''
        });
      }
    },
    components: {Page, TopBar, InputGroup, VcButton}
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/styles/variable"
  @import "~common/styles/mixin"

  .login-form
    border: solid 1px $c_dark
    border-radius: .107rem
    background-color: $c_white
    font-size: $t_3
    .g-col:last-child
      border-top: solid 1px $c_light_dark

  .login-button
    margin: .267rem 0

  .list
    $active-block()
    width: 100%
    background-color: $c_white

  .login-reg
    font-size: $t_3
    color: $c_light_color
    span
      color: $c_color

  .login-service
    position: absolute
    bottom: .267rem
    width: 100%
    font-size: $t_2
    color: $c_light_color
    span
      color: $c_color

  ins
    display: inline-block
    width: 3ch
    text-indent: 0
    vertical-align: bottom
    overflow: hidden
    animation: dot 3s infinite step-start both
    font-family: Consolas, Monaco, monospace

  @keyframes dot
    33%
      text-indent: -4ch
    66%
      text-indent: -2ch

</style>
