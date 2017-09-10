<template>
  <page>
    <div slot="head">
      <top-bar title="联系人"></top-bar>
    </div>

    <content-main :mounted="show" @data="getData" :respond="respond" :offline="offline">
      <list-view :data="personList" ref="list"></list-view>
    </content-main>

  </page>
</template>

<script type="text/ecmascript-6">
  import Page from 'components/page/page';
  import TopBar from 'base/top-bar/top-bar';
  import ContentMain from 'base/main/content-main';
  import ListView from 'base/list/list-view';

  import {getUserInfo} from 'api/home';

  export default {
    data () {
      return {
        show: null,
        offline: null,
        respond: null,
        personList: []
      };
    },
    methods: {
      _init () {
        console.log('init');
      },
      getData (res) {
        this.respond = res;
        getUserInfo(1, data => {
          this.show = true;
          this.personList = data.projects;
        }, err => {
          if (err) {
            this.show = true;
            this.offline = true;
          }
        });
      }
    },
    created () {
      this._init();
    },
    components: {Page, TopBar, ContentMain, ListView}
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/styles/variable"

</style>
