<template>
  <page>
    <header slot="head">
      <top-bar title="轮播图组件"></top-bar>
    </header>

    <div v-if="banners.length" class="slider-wrapper">
      <slider>
        <div v-for="item in banners" :key="item.id">
          <a :href="item.linkUrl">
            <img :src="item.picUrl" alt=""/>
          </a>
        </div>
      </slider>
    </div>
  </page>
</template>

<script type="text/ecmascript-6">
  import Page from 'components/page/page';
  import TopBar from 'base/top-bar/top-bar';
  import Slider from 'base/slider/slider';

  // import { getRecommend } from 'api/slider';
  import { timeout } from 'common/js/utils';
  import { setRefreshHeader, setScreen, setFullScreen } from 'common/js/native';

  export default {
    name: 'slider-demo',
    data() {
      return {
        banners: []
      };
    },
    methods: {
      createFullScreen() {
        setFullScreen(true);
        setScreen('landscape_left');
        timeout(600).then(() => {
          setScreen('auto_landscape');
        });
      }
    },
    created() {
      // getRecommend({
      //   g_tk: 5381,
      //   format: 'json',
      //   platform: 'h5',
      //   uin: 0,
      //   needNewCode: 1
      // }, data => {
      //   this.banners = data.slider;
      // }, err => {
      //   console.log(err);
      // }, err => {
      //   console.log(err);
      // });
    },
    mounted() {
      setRefreshHeader().then(ret => {
        console.log(ret);
      }).catch(e => {
        console.log(e);
      });
      this.createFullScreen();
    },
    components: {Page, TopBar, Slider}
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/styles/variable"

  .slider-wrapper
    position: relative
    width: 100%
    overflow: hidden
</style>
