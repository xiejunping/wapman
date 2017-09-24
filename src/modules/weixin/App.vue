<template>
  <page>
    <top-bar title="微信功能demo"></top-bar>

    <content-main>
      <div class="g-box">
        <div class="m-button">
          <vc-button @click="getToken">获取授权</vc-button>
        </div>
        <div class="m-button">
          <vc-button @click="sharePage">分享网页</vc-button>
        </div>

        <div class="m-button">
          <vc-button @click="shareImage">分享图片</vc-button>
        </div>

        <div class="m-button">
          <vc-button @click="shareVideo">分享视频</vc-button>
        </div>
      </div>

    </content-main>
  </page>
</template>

<script type="text/ecmascript-6">
  import Page from 'components/page/page';
  import TopBar from 'base/top-bar/top-bar';
  import ContentMain from 'base/main/content-main';
  import VcButton from 'base/button/vc-button';

  import * as wx from 'cloud/weixin/weixin';

  export default {
    data() {
      return {};
    },
    methods: {
      getToken() {
        wx.auth().then((code) => {
          wx.getToken(code, (ret) => {
            console.log(ret);
            window.api.alert({msg: ret});
          });
        });
      },
      sharePage() {
        wx.isInstalled().then(() => {
          wx.shareWebpage({
            title: '这是一个title内容',
            contentUrl: 'http://api.pjpiao.com'
          });
        });
      },
      shareImage() {
        wx.isInstalled().then(() => {
          wx.shareImage({
            thumb: 'widget://dist/static/img/user.a50845f.jpg',
            contentUrl: 'widget://dist/static/img/user.a50845f.jpg'
          });
        });
      },
      shareVideo() {
        wx.isInstalled().then(() => {
          wx.shareVideo();
        });
      }
    },
    components: {Page, TopBar, ContentMain, VcButton}
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  .m-button
    padding-top: .234rem
</style>
