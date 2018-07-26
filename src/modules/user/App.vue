<template>
  <page>
    <div slot="head">
      <top-bar title="个人中心"></top-bar>
    </div>

    <content-main :mounted="show"
                  @data="getInfo"
                  :respond="respond"
                  :offline="offline"
                  :noscroll="true">

      <div class="m-panel g-spacer">
        <div class="g-list-padding-thiner vc-li-item">
          <div class="g-box g-row" @click="acShow">
            <div class="g-col-2">
              <div class="m-avatar">
                <vc-image :src="avatar" width="100%"></vc-image>
              </div>
            </div>
            <div class="g-col-4 m-info">
              <h3>{{nickname || '昵称：'}}</h3>
              <p>会员号: {{id | fillZero}}</p>
              <p>积&nbsp;&nbsp;&nbsp;分: {{score}}</p>
            </div>
            <div class="g-col-2"></div>
          </div>
        </div>
      </div>

      <div class="m-panel">
        <div class="g-list-padding vc-li-item">
          <div class="g-row g-box">
            <div class="g-col-1 g-center">
              <label for=""><i class="icon-homefill"></i></label>
            </div>
            <div class="g-col-3 m-key">
              <label for="">用户名</label>
            </div>
            <div class="g-col-4 g-right m-value">
              <label for="">{{name}}</label>
              <label for=""></label>
            </div>
          </div>
        </div>
        <div class="g-list-padding vc-li-item">
          <div class="g-row g-box">
            <div class="g-col-1 g-center">
              <label for=""><i class="icon-mobilefill"></i></label>
            </div>
            <div class="g-col-3 m-key">
              <label for="">手机号</label>
            </div>
            <div class="g-col-4 g-right m-value">
              <label for="">{{tel | maskText(3, 4)}}</label>
              <label for=""></label>
            </div>
          </div>
        </div>
        <div class="g-list-padding vc-li-item">
          <div class="g-row g-box">
            <div class="g-col-1 g-center">
              <label for=""><i class="icon-wefill"></i></label>
            </div>
            <div class="g-col-3 m-key">
              <label for="">邀请码</label>
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
              <label for=""><i class="icon-locationfill"></i></label>
            </div>
            <div class="g-col-3 m-key">
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
              <label for=""><i class="icon-friendfill"></i></label>
            </div>
            <div class="g-col-3 m-key">
              <label for="">性别</label>
            </div>
            <div class="g-col-4 g-right m-value">
              <label for="">{{sex ? '男' : '女'}}</label>
              <label for=""></label>
            </div>
          </div>
        </div>

      </div>

      <div class="g-list-padding g-row">
        <div class="g-col-8 g-box">
          <vc-button @click.native="showDialog">退出登录</vc-button>
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
        id: '',
        nickname: '',
        name: '',
        tel: '',
        email: '',
        cid: '',
        score: 0,
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
            userData.id && (this.id = userData.id);
            userData.nickname && (this.nickname = userData.nickname);
            userData.avatar && (this.avatar = userData.avatar);
            userData.name && (this.name = userData.name);
            userData.phone && (this.tel = userData.phone);
            userData.email && (this.email = userData.email);
            userData.cid && (this.cid = userData.cid);
            userData.sex && (this.sex = userData.sex);
            userData.score && (this.score = userData.score);
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
              const { name } = getStorage('userData');
              me.$dialog.close();
              clearStorage();
              name && setStorage('userCode', name);
              ISAPP ? sendEvent('logout', true) : me.loginout();
            }
          }
        });
      },
      loginout() {
        open({
          name: 'root',
          url: './root.html'
        });
      },
      imgoutput(base64) {
        uploadAvatar({
          avatar: base64
        }, data => {
          if (data) this.getInfo();
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
      line-height: .5rem
      color: $c_light_color
    .m-key
      line-height: .5rem
    .vc-li-item
      $active-block()
      width: 100%
      border-bottom: solid 1px $c_light_gray
      i
        font-size: .5rem
      &:last-child
        border-bottom: none

</style>
