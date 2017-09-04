<template>
  <scroll @scroll="scroll"
          :listen-scroll="listenScroll"
          :probe-type="probeType"
          :data="data"
          class="g-list-wrapper"
          ref="listview">
    <div class="g-container">
      <ul>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
        <li>木木水</li>
      </ul>
    </div>
  </scroll>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll';
  export default {
    props: {
      data: {
        type: Array,
        default: []
      }
    },
    methods: {
      scroll (pos) {
        console.log(pos);
      }
    },
    created () {
      this.probeType = 1;
      this.listenScroll = false;
    },
    components: {Scroll}
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">

</style>
