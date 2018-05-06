<template>
  <page>
    <div slot="head">
      <top-bar title="手机快速注册"></top-bar>
    </div>

    <div class="g-container">
      <div class="g-box">
        <div class="g-row login-form">
          <div class="g-col">
            <input-group type="text" v-model="name" placeholder="请输入用户名"></input-group>
          </div>
          <div class="g-col">
            <input-group type="password" v-model="pass" placeholder="请输入密码"></input-group>
          </div>
          <div class="g-col">
            <input-group type="password" v-model="password" placeholder="请再次输入密码"></input-group>
          </div>
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
            <vc-button v-if="sign">注册
              <ins>...</ins>
            </vc-button>
            <vc-button v-else @click="register">注册</vc-button>
          </div>
        </div>
      </div>

      <div class="g-box">
        <div class="g-row login-reg">
          <div class="g-col-4">
            <label for="">已有账号？<span @click="login">登录</span></label>
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
  import {error} from 'common/js/toast';
  import {timeout} from 'common/js/utils';

  // 接口数据
  import {userRegister} from 'api/user';
  import {getCode, phoneExists} from 'api/common';

  // 引用组件
  import Page from 'components/page/page';
  import TopBar from 'base/top-bar/top-bar';
  import InputGroup from 'base/input/input-group';
  import VcButton from 'base/button/vc-button';

  export default {
    data () {
      let me = this;
      return {
        name: '',
        pass: '',
        password: '',
        tel: '',
        vcode: '',
        code: {
          text: '获取验证码',
          handle() {
            me.getcode();
          }
        },
        sign: false
      };
    },
    methods: {
      login() {
        back();
      },
      register() {
        this.sign = true;
        userRegister({
          name: this.name,
          pass: this.pass,
          password: this.password,
          code: this.vcode,
          tel: this.tel
        }, data => {
          this.sign = false;
          if (data.id) {
            error('注册成功');
            timeout(3000).then(() => this.login());
          }
        }, err => {
          this.sign = false;
          error(err);
        }, err => {
          if (err) {
            this.show = false;
            this.offline = true;
          }
        });
      },
      getcode() {
        // 手机号占用
        phoneExists({
          tel: this.tel
        }, data => {
          this.sendCode();
        }, err => {
          err && console.log('offline');
        });
      },
      sendCode() {
        getCode({
          tel: this.tel
        }, data => {
          error(data);
        }, err => {
          err && console.log('offline');
        });
      },
      contact() {
        open({
          name: 'webview',
          url: './webview.html',
          pageParam: {
            title: 'Apicloud',
            url: 'https://www.apicloud.com'
          }
        });
      },
      service () {
        console.log(this.tel, this.vcode);
        open({
          name: 'webview',
          url: './webview.html',
          pageParam: {
            title: '我的后台页面',
            url: './slider.html',
            bounces: true
          }
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

    .g-col
      border-bottom: solid 1px $c_light_gray
      &:last-child
        border-bottom: none

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

  ins
    display: inline-block
    width: 3ch
    text-indent: 0
    vertical-align: bottom
    overflow: hidden
    animation: dot 3s infinite step-start both
    font-family: Consolas, Monaco, monospace

  .login-service
    position: absolute
    bottom: .267rem
    width: 100%
    font-size: $t_2
    color: $c_light_color
    span
      color: $c_color
      text-decoration: underline

  @keyframes dot
    33%
      text-indent: -4ch
    66%
      text-indent: -2ch

</style>
