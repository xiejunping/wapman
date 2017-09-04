<template>
  <div class="g-container">
    <h2>用户中心</h2>
    <a href="/">跳转到首页</a>
    <h4>用户登陆</h4>

    <div class="g-box">
      <div class="g-row login-form">
        <div class="g-col">
          <input-group type="tel" addon="手机号" placeholder="请输入手机号"></input-group>
        </div>
        <div class="g-col">
          <input-group type="password" addon="验证码" placeholder="请输入验证码" :btn="code"></input-group>
        </div>
      </div>
    </div>

    <div class="g-box">
      <div class="g-row login-button">
        <div class="g-col">
          <vc-button></vc-button>
        </div>
      </div>
    </div>

    <div class="g-box">
      <div class="g-row login-form">
        <div class="g-col">
          <input-group type="tel" placeholder="请输入手机号码"></input-group>
        </div>
        <div class="g-col">
          <input-group type="password" placeholder="请输入验证码" :btn="code"></input-group>
        </div>
      </div>
    </div>

    <div class="g-box">
      <div class="g-row login-button">
        <div class="g-col">
          <vc-button></vc-button>
        </div>
      </div>
    </div>

    <div class="g-box">
      <div class="g-row login-form">
        <div class="g-col">
          <input-group type="text" placeholder="请输入用户名"></input-group>
        </div>
        <div class="g-col">
          <input-group type="password" placeholder="请输入密码"></input-group>
        </div>
      </div>
    </div>

    <div class="g-box">
      <div class="g-row login-button">
        <div class="g-col">
          <vc-button></vc-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import InputGroup from 'base/input/input-group';
  import VcButton from 'base/button/vc-button';

  export default {
    data () {
      return {
        code: {
          text: '获取验证码',
          handle() {
            console.log('请求验证码');
          }
        }
      };
    },
    components: {InputGroup, VcButton}
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/styles/variable"

  .login-form
    border: solid 1px $c_dark
    border-radius: .107rem
    background-color: $c_white
    .g-col:last-child
      border-top: solid 1px $c_light_dark

  .login-button
    height: 2rem
    margin-top: .267rem
</style>
