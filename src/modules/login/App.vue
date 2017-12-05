<template>
  <page>
    <div class="g-box g-center login-logo">
      <img src="~common/images/logo_login.png" width="64%" alt="">
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
        </div>
      </div>

      <div class="g-box">
        <div class="g-row login-button">
          <div class="g-col">
            <vc-button v-if="sign">登录
              <ins>...</ins>
            </vc-button>
            <vc-button v-else @click="login">登录</vc-button>
          </div>
        </div>
      </div>

      <div class="g-box">
        <div class="g-row login-reg">
          <div class="g-col-4">
            <label for="" @click="forget"><span>忘记密码?</span></label>
          </div>
          <div class="g-col-4 g-right">
            <label for="" @click="register"><span>新用户注册</span></label>
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
  import {ISAPP, getStorage, setStorage} from 'common/js/api';
  import {open, sendEvent} from 'common/js/native';
  import {error} from 'common/js/toast';
  import {userLogin} from 'api/user';

  import Page from 'components/page/page';
  import InputGroup from 'base/input/input-group';
  import VcButton from 'base/button/vc-button';

  export default {
    data () {
      return {
        name: '',
        pass: '',
        sign: false
      };
    },
    methods: {
      _init () {
        let userData = getStorage('userData');
        if (userData && userData.id) {
          this.$router.replace({
            name: 'index'
          });
        } else this.name = this.name || getStorage('userCode');
      },
      login() {
        this.sign = true;
        userLogin({
          name: this.name,
          password: this.pass
        }, data => {
          this.show = true;
          this.offline = false;
          this.sign = false;
          this.pass = '';
          ISAPP ? sendEvent('login', data) : this.success(data);
        }, err => {
          this.sign = false;
          error(err);
        }, err => {
          if (err) {
            this.show = true;
            this.offline = true;
          }
        });
      },
      success(data) {
        setStorage('userData', data);
        setStorage('token', data.token);
        this.$router.push({
          name: 'index'
        });
      },
      forget () {
        open({
          name: 'forget',
          url: './forget.html'
        });
      },
      register() {
        open({
          name: 'reg',
          url: './reg.html'
        });
      },
      service() {
        open({
          name: '',
          url: ''
        });
      }
    },
    created() {
      this._init();
    },
    mounted() {
      this.$nextTick(() => {
        this.$el.querySelector('.vc-page-content').style.height = '100%';
      });
    },
    components: {Page, InputGroup, VcButton}
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/styles/variable"
  @import "~common/styles/mixin"

  .login-logo
    padding: .8rem 0
    background-color: $c_base

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
      text-decoration: underline

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
