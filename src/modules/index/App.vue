<template>
  <page>
    <div slot="head">
      <top-bar title="首页" :right="right"></top-bar>
    </div>

    <!--<div class="app">-->
    <!--<h2>首页</h2>-->

    <!--<p>Hello Word!</p>-->
    <!--</div>-->

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

      <avatar classes="vc-avatar-icon vc-large" @click="">
        <img :src="bimg" alt="">
      </avatar>

      <avatar classes="vc-avatar-icon vc-primary">
        <vc-image src=""></vc-image>
      </avatar>
    </div>


    <div>
      <!--<loader/>-->
      <!--<spinner indeterminate></spinner>-->
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
  export default {
    data() {
      return {
        right: [{
          icon: 'icon-my',
          handle() {
            open({
              name: 'user',
              url: './user.html'
            });
          }
        }, {
          icon: 'icon-scan',
          handle() {
            open({
              name: 'contact',
              url: './contact.html'
            });
          }
        }],
        s: userImg,
        bimg: 'http://www.jadeshpfe.hk/Uploads/201611/thumb_138_88_58198ef26286f.jpg'
      };
    },
    methods: {
      _init () {

      },
      a() {
        this.$toast.loading('提交中');
      },
      b() {
        this.$toast.error('努力加载中');
      },
      c() {
        open({
          name: 'weixin',
          url: './weixin.html'
        });
      }
    },
    created () {
      this._init();
    },
    components: {Page, TopBar, Loading, Loader, LoaderRack, Spinner, VcImage, Avatar}
  };
</script>

<style scoped lang="stylus">


</style>
