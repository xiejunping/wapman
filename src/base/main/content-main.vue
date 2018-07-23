<template>
  <div class="g-wrapper">
    <div v-if="show" class="vc-main">
      <Offline v-if="offline" @refresh="$emit('data', true)"></Offline>
      <scroll v-else-if="!noscroll"
              @scroll="scroll"
              :data="data"
              :listen-scroll="listenScroll"
              :probe-type="probeType"
              class="main-list"
              ref="mainList">
        <div class="g-container">
          <slot></slot>
        </div>
      </scroll>
      <div v-else class="g-container">
        <slot></slot>
      </div>
    </div>
    <div v-else class="vc-loading">
      <spinner indeterminate></spinner>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Spinner from 'base/loading/spinner';
  import Offline from 'base/offline/offline';
  import Scroll from 'base/scroll/scroll';
  export default {
    name: 'content-main',
    props: {
      mounted: Boolean,
      respond: Boolean,
      offline: Boolean,
      noscroll: Boolean
    },
    data() {
      return {
        data: null
      };
    },
    methods: {
      scroll(pos) {
        console.log(pos);
      }
    },
    computed: {
      show() {
        if (this.respond) return this.mounted;
        else return true;
      }
    },
    created() {
      this.probeType = 1;
      this.listenScroll = false;
    },
    mounted() {
      this.$nextTick(() => {
        this.data = [];
        this.$emit('data', true);
      });
    },
    components: {Spinner, Offline, Scroll}
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  .g-wrapper
    font-size: $t_4
  .vc-main
    height: inherit
    .main-list
      width: 100%
      height: 100%
      overflow: hidden
  .vc-loading
    padding-top: .56rem
    text-align: center
</style>
