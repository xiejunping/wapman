<template>
  <div class="g-wrapper g-container">
    <div v-if="show">
      <Offline v-if="offline" @refresh="$emit('data', true)"></Offline>
      <slot v-else></slot>
    </div>
    <div v-else class="vc-main">
      <spinner indeterminate></spinner>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Spinner from 'base/loading/spinner';
  import Offline from 'base/offline/offline';
  export default {
    name: 'content-main',
    props: {
      mounted: Boolean,
      respond: Boolean,
      offline: Boolean
    },
    computed: {
      show() {
        if (this.respond) return this.mounted;
        else return true;
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.$emit('data', true);
      });
    },
    components: {Spinner, Offline}
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  .vc-main
    padding-top: .56rem
    text-align: center
</style>
