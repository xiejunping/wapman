<template>
  <page>
    <div slot="head">
      <top-bar title="联系人"></top-bar>
    </div>

    <div class="g-wrapper">
      <list-view :data="personList" ref="list"></list-view>
    </div>

  </page>
</template>

<script type="text/ecmascript-6">
  import Page from 'components/page/page';
  import TopBar from 'base/top-bar/top-bar';
  import ListView from 'base/list/list-view';

  import {getUserInfo} from 'api/home';

  export default {
    data () {
      return {
        personList: []
      };
    },
    methods: {
      _init () {
        this._getData();
      },
      _getData () {
        getUserInfo(1, data => {
          this.personList = data.projects;
        }, err => {
          if (err) {
            console.log('this error');
          }
        });
      }
    },
    created () {
      this._init();
    },
    components: {Page, TopBar, ListView}
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/styles/variable"

</style>
