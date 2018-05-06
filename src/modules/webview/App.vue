<template>
  <page @position="position">
    <div slot="head">
      <top-bar :title="title"></top-bar>
    </div>
  </page>
</template>

<script>
// 组件引用
import Page from 'components/page/page';
import TopBar from 'base/top-bar/top-bar';
import { timeout } from 'common/js/utils';
import { openFrame, getParams, setRefreshHeader } from 'common/js/native';

export default {
  name: 'webview',
  data() {
    const {url, bounces, title} = getParams();
    return {
      url,
      bounces,
      title
    };
  },
  methods: {
    position(pos) {
      const rectY = pos.top;
      openFrame({
        name: 'video',
        url: this.url,
        bounces: this.bounces,
        rect: {
          x: 0,
          y: rectY,
          w: 'auto',
          h: 'auto'
        }
      });
    }
  },
  mounted() {
    timeout(5000).then(() => {
      // setRefreshHeader();
      setRefreshHeader().then(ret => {
        console.log(ret);
      }).catch(e => {
        console.log(e);
      });
    });
    this.$nextTick(() => {
    });
  },
  components: {Page, TopBar}
};
</script>

<style scoped>

</style>
