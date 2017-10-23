<template>
  <page>
    <div slot="head">
      <top-bar title="联系人"></top-bar>
    </div>

    <content-main :mounted="show"
                  @data="getData"
                  :respond="respond"
                  :offline="offline">
      <list-view v-if="personList.length" :data="personList" @fnlist="goItem" ref="list"></list-view>
      <no-result v-else></no-result>
    </content-main>

  </page>
</template>

<script type="text/ecmascript-6">
  import Page from 'components/page/page';
  import TopBar from 'base/top-bar/top-bar';
  import ContentMain from 'base/main/content-main';
  import NoResult from 'base/no-result/no-result';
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
        console.info('init');
      },
      getData (res) {
        this.respond = res;
        getUserInfo(1, data => {
          this.show = true;
          this.offline = false;
          this.personList = data.projects;
        }, err => {
          if (err) {
            this.show = true;
            this.offline = true;
          }
        });
      },
      goItem (meta) {
        console.log(meta);
      }
    },
    created () {
      this._init();
    },
    components: {Page, TopBar, ContentMain, ListView, NoResult}
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/styles/variable"

</style>
