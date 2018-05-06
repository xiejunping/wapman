<template>
  <page>
    <div slot="head">
      <top-bar title="个人中心"></top-bar>
    </div>

    <content-main :mounted="show"
                  @data="getInfo"
                  :respond="respond"
                  :offline="offline">

      <div class="m-panel g-spacer">
        <div class="g-list-padding-thiner vc-li-item">
          <div class="g-box g-row" @click="acShow">
            <div class="g-col-2">
              <div class="m-avatar">
                <vc-image :src="avatar" width="100%"></vc-image>
              </div>
            </div>
            <div class="g-col-4 m-info">
              <h3>放牛王小二</h3>
              <p>用户名: {{name}}</p>
            </div>
            <div class="g-col-2"></div>
          </div>
        </div>
      </div>

      <div class="m-panel">
        <div class="g-list-padding vc-li-item">
          <div class="g-row g-box">
            <div class="g-col-1 g-center">
              <label for=""><i class="icon-profile"></i></label>
            </div>
            <div class="g-col-3">
              <label for="">昵称</label>
            </div>
            <div class="g-col-4 g-right m-value">
              <label for="">放牛王小二</label>
              <label for=""></label>
            </div>
          </div>
        </div>
        <div class="g-list-padding vc-li-item">
          <div class="g-row g-box">
            <div class="g-col-1 g-center">
              <label for=""><i class="icon-profile"></i></label>
            </div>
            <div class="g-col-3">
              <label for="">手机号</label>
            </div>
            <div class="g-col-4 g-right m-value">
              <label for="">{{tel}}</label>
              <label for=""></label>
            </div>
          </div>
        </div>
        <div class="g-list-padding vc-li-item">
          <div class="g-row g-box">
            <div class="g-col-1 g-center">
              <label for=""><i class="icon-profile"></i></label>
            </div>
            <div class="g-col-3">
              <label for="">身份证号</label>
            </div>
            <div class="g-col-4 g-right m-value">
              <label for="">{{cid}}</label>
              <label for=""></label>
            </div>
          </div>
        </div>
        <div class="g-list-padding vc-li-item">
          <div class="g-row g-box">
            <div class="g-col-1 g-center">
              <label for=""><i class="icon-profile"></i></label>
            </div>
            <div class="g-col-3">
              <label for="">邮箱</label>
            </div>
            <div class="g-col-4 g-right m-value">
              <label for="">{{email}}</label>
              <label for=""></label>
            </div>
          </div>
        </div>
        <div class="g-list-padding vc-li-item">
          <div class="g-row g-box">
            <div class="g-col-1 g-center">
              <label for=""><i class="icon-profile"></i></label>
            </div>
            <div class="g-col-3">
              <label for="">性别</label>
            </div>
            <div class="g-col-4 g-right m-value">
              <label for="">{{sex}}</label>
              <label for=""></label>
            </div>
          </div>
        </div>

      </div>

      <div class="g-list-padding g-row">
        <div class="g-col-8 g-box">
          <vc-button @click="showDialog">退出登录</vc-button>
        </div>
      </div>
    </content-main>
  </page>
</template>

<script type="text/ecmascript-6">
  import {ISAPP, getStorage, setStorage, clearStorage} from 'common/js/api';
  import {open, sendEvent} from 'common/js/native';

  // 接口数据
  import {userGetInfo, uploadAvatar} from 'api/user'; // userUpdateInfo

  // 组件引用
  import Page from 'components/page/page';
  import TopBar from 'base/top-bar/top-bar';
  import ContentMain from 'base/main/content-main';
  import VcButton from 'base/button/vc-button';
  import VcImage from 'base/image/vc-image';

  //
  import upLoad from 'common/mixins/uploadimg';

  // 图片引用
  import userImg from 'common/images/user.jpg';

  export default {
    mixins: [upLoad],
    data() {
      return {
        // 页面框架
        show: null,
        respond: null,
        offline: null,
        // 业务数据
        name: '',
        tel: '',
        email: '',
        cid: '',
        sex: '',
        avatar: userImg
      };
    },
    methods: {
      getInfo() {
        userGetInfo(data => {
          this.respond = true;
          if (data) {
            this.show = true;
            this.offline = false;
            let userData = data;
            userData.avatar && (this.avatar = userData.avatar);
            userData.name && (this.name = userData.name);
            userData.tel && (this.tel = userData.tel);
            userData.email && (this.email = userData.email);
            userData.cid && (this.cid = userData.cid);
            userData.sex && (this.sex = userData.sex);
          }
        }, err => {
          if (err) {
            this.show = true;
            this.offline = true;
          }
        });
      },
      showDialog (e) {
        let me = this;
        this.$dialog.open({
          msg: '您确定要退出系统吗？',
          confirm: {
            text: '确定',
            handle() {
              me.$dialog.close();
              ISAPP ? sendEvent('loginout') : me.loginout();
            }
          }
        });
      },
      loginout() {
        let userData = getStorage('userData');
        clearStorage();
        userData && setStorage('userCode', userData.name);
        open({
          name: 'root',
          url: './root.html'
        });
      },
      imgoutput(base64) {
        uploadAvatar({
          file: base64
        }, data => {
          if (data.code) {
            this.getInfo();
          }
        }, err => {
          if (err) {
            this.show = true;
            this.offline = true;
          }
        });
      }
    },
    created() {
      this.getInfo();
    },
    components: {Page, TopBar, ContentMain, VcButton, VcImage}
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/styles/variable"
  @import "~common/styles/mixin"

  .m-panel
    background-color: $c_white
    font-size: $t_3
    color: $c_color

    .m-avatar
      width: 2.02rem
      height: 2.02rem
      overflow: hidden
    .m-info
      padding: .134rem 0
      line-height: 1.5
      color: $c_color
      h3
        font-size: $t_3
        line-height: 2
        color: $c_dark_color
        font-weight: normal
      p
        font-size: $t_2
        color: $c_light_color

    .m-value
      font-size: $t_2
      color: $c_light_color
    .vc-li-item
      $active-block()
      width: 100%
      border-bottom: solid 1px $c_light_gray
      &:last-child
        border-bottom: none

</style>
