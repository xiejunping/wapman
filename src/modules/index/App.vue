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
        }]
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
      }
    },
    created () {
      this._init();
    },
    components: {Page, TopBar, Loading, Loader, LoaderRack, Spinner}
  };
</script>

<style scoped lang="stylus">


</style>
