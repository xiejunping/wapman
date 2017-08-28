<template>
  <page>
    <div slot="head">
      <top-bar title="首页" :right="right"></top-bar>
    </div>

    <!--<div class="app">-->
      <!--<h2>首页</h2>-->

      <!--<p>Hello Word!</p>-->
    <!--</div>-->

    <div>
      <toast title="努力加载中" :show="true" icon="icon-logol"></toast>
      <!--<toast title="努力加载中" :show="true" position="bottom"></toast>-->
    </div>

    <div>
      <loading />
    </div>
  </page>
</template>

<script type="text/ecmascript-6">
import {open} from 'common/js/native';
import Page from 'components/page/page';
import TopBar from 'base/top-bar/top-bar';
import Toast from 'base/toast/toast';
import Loading from 'base/loading/loading';

import {getUserInfo} from 'api/home';

export default {
  data() {
    return {
      right: [{
        icon: 'icon-personal',
        handle() {
          open({
            name: 'user',
            url: './user.html'
          });
        }
      }, {
        icon: 'icon-code',
        handle() {}
      }]
    };
  },
  methods: {
    init () {
      this.getData();
    },
    getData () {
      getUserInfo(1, data => {
        console.log('this success');
      }, err => {
        if (err) {
          console.log('this error');
        }
      });
    }
  },
  created () {
    this.init();
  },
  components: {Page, TopBar, Toast, Loading}
};
</script>

<style scoped lang="stylus">
  .app
    border-bottom: solid 1px #ff6600

</style>
