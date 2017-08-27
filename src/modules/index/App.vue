<template>
  <page>
    <div slot="head">
      <top-bar title="首页" :right="right"></top-bar>
    </div>

    <div class="app">
      <h2>首页</h2>

      <p>Hello Word!</p>
    </div>
  </page>
</template>

<script type="text/ecmascript-6">
import {open} from 'common/js/native';
import Page from 'components/page/page';
import TopBar from 'base/top-bar/top-bar';

export default {
  data() {
    return {
      right: [{
        icon: 'icon-personal1',
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
  components: {Page, TopBar}
};
</script>

<style scoped lang="stylus">
  .app
    border-bottom: solid 1px #ff6600

</style>
