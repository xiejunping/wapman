<template>
  <page>
    <div slot="head">
      <top-bar title="首页" :right="right" :left="left"></top-bar>
    </div>

    <div class="g-container">
      <div class="g-row g-list-padding">
        <div class="g-col-8 g-box">
          <span @click="a">Toast: 提交中</span>
        </div>
      </div>

      <div class="g-row g-list-padding">
        <div class="g-col-8 g-box">
          <span @click="b">Toast: 努力加载中</span>
        </div>
      </div>

      <!--<div>-->
      <!--<loading/>-->
      <!--</div>-->

      <div class="g-box">
        <vc-image :src="s"></vc-image>

        <avatar class="vc-large" @click="c">
          <img src="~common/images/user.jpg" alt="">
        </avatar>

        <avatar classes="vc-avatar-icon vc-large" @click="acShow">
          <img :src="bimg" alt="">
        </avatar>

        <avatar classes="vc-avatar-icon vc-primary">
          <vc-image src=""></vc-image>
        </avatar>

        <div class="">{{ac | datetimeToMinOpt}}</div>
        <div class="">{{ac | fullDateFormat}}</div>
        <div class="">{{ac | datetimeToMin}}</div>
      </div>


      <div>
        <!--<loader/>-->
        <!--<spinner indeterminate></spinner>-->
      </div>

    </div>

  </page>
</template>

<script type="text/ecmascript-6">
  import {open} from 'common/js/native';
  import Page from 'components/page/page';
  import TopBar from 'base/top-bar/top-bar';

  import Loading from 'base/loading/loading';
  import Loader from 'base/loading/loader';
  import LoaderRack from 'base/loading/loader-rack';
  import Spinner from 'base/loading/spinner';
  import VcImage from 'base/image/vc-image';
  import Avatar from 'base/avatar/avatar';

  import userImg from 'common/images/user.jpg';

  import upLoad from 'common/mixins/uploadimg';

  export default {
    mixins: [upLoad],
    data() {
      return {
        left: {
          icon: 'icon-searchlist',
          handle() {
            open({
              name: 'search',
              url: './search.html'
            });
          }
        },
        right: [{
          icon: 'icon-settings',
          handle() {
            open({
              name: 'repairfill',
              url: './user.html'
            });
          }
        }],
        ac: '2017-11-06 00:02:42',
        s: userImg,
        bimg: ''
      };
    },
    methods: {
      a() {
        this.$toast.loading('提交中');
      },
      b() {
        this.$toast.error('努力加载中');
        open({
          name: 'webview',
          url: './webview.html',
          pageParam: {
            title: '教研活动直播回放',
            url: 'http://p889c49de.bkt.clouddn.com/video/h5video.html?userId=0e674be49a5e4feeab1d15d9a159e9a3'
          }
        });
      },
      c() {
        open({
          name: 'weixin',
          url: './upload.html'
        });
      },
      imgoutput(base64) {
        window.api.alert({msg: base64});
      }
    },
    components: {Page, TopBar, Loading, Loader, LoaderRack, Spinner, VcImage, Avatar}
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/styles/variable"
  @import "~common/styles/mixin"

  .g-container
    font-size: $t_4
</style>
