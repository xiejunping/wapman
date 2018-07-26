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
            <input-group :type="passType" v-model="pass" placeholder="请输入密码" :icon="passIcon" @click="taggleIcon('pass')"></input-group>
          </div>
          <div class="g-col">
            <input-group :type="passwordType" v-model="password" placeholder="请再次输入密码" :icon="passwordIcon" @click="taggleIcon('password')" @onBlur="confirm"></input-group>
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
            <vc-button v-else @click.native="register">注册</vc-button>
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
  import {timeout, aesEncrypt} from 'common/js/utils';

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
        passType: 'password',
        passwordType: 'password',
        passIcon: 'icon-attention',
        passwordIcon: 'icon-attention',
        tel: '',
        vcode: '',
        code: {
          text: '获取验证码',
          visible: true,
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
      confirm() {
        if (!this.pass) {
          error('请输入密码');
        } else if (!this.password) {
          error('请确认密码');
        } else if (this.pass !== this.password) {
          error('两次输入的密码不一致');
        }
      },
      register() {
        this.sign = true;
        userRegister({
          username: this.name,
          password: aesEncrypt(this.pass),
          code: this.vcode,
          phone: this.tel
        }, data => {
          this.sign = false;
          if (data) {
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
          phone: this.tel
        }, data => {
          if (data) error('该手机号已经注册');
          else this.sendCode();
        }, err => {
          err && console.log('offline');
        });
      },
      sendCode() {
        getCode({
          phone: this.tel
        }, data => {
          data && this.timer(60);
        }, err => {
          err && console.log('offline');
        });
      },
      timer(num) {
        this.code.visible = false;
        clearTimeout(this.DTIME);
        this.DTIME = setTimeout(() => {
          if (num > 0) {
            this.code.text = `(${num}s)重新获取`;
            this.timer(--num);
          } else {
            this.code.text = '获取验证码';
            this.code.visible = true;
          }
        }, 1000);
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
      },
      taggleIcon(type) {
        if (this[`${type}Icon`] === 'icon-attention') {
          this[`${type}Type`] = 'text';
          this[`${type}Icon`] = 'icon-attentionfill';
        } else {
          this[`${type}Type`] = 'password';
          this[`${type}Icon`] = 'icon-attention';
        }
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
    font-size: $t_4
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
