<template>
  <page>
    <div slot="head">
      <top-bar title="首页" :right="right"></top-bar>
    </div>

    <!--<div class="app">-->
    <!--<h2>首页</h2>-->

    <!--<p>Hello Word!</p>-->
    <!--</div>-->

    <!--<div>-->
    <!--<toast title="提交中" :show="true" icon="load"></toast>-->
    <!--<toast title="努力加载中" :show="true" position="bottom"></toast>-->
    <!--</div>-->

    <!--<div>-->
    <!--<loading />-->
    <!--</div>-->

    <div>
      <loader/>
    </div>

  </page>
</template>

<script type="text/ecmascript-6">
  import {open} from 'common/js/native';
  import Page from 'components/page/page';
  import TopBar from 'base/top-bar/top-bar';
  import Toast from 'base/toast/toast';
  import Loading from 'base/loading/loading';
  import Loader from 'base/loading/loader';
  import LoaderRack from 'base/loading/loader-rack';

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

      }
    },
    created () {
      this._init();
    },
    components: {Page, TopBar, Toast, Loading, Loader, LoaderRack}
  };
</script>

<style scoped lang="stylus">


</style>
