<template>
  <section class="vc-page" ref="page">
    <header class="vc-page-top" ref="top">
      <slot name="head"></slot>
    </header>
    <section class="vc-page-content" ref="content">
      <slot></slot>
    </section>
    <footer class="vc-page-footer" ref="foot">
      <slot name="foot"></slot>
    </footer>
  </section>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {};
    },
    methods: {
      _scal () {
        let page = this.$refs.page.offsetHeight,
          top = this.$refs.top.offsetHeight,
          foot = this.$refs.foot.offsetHeight;

        this.$refs.content.style.height = page - top - foot + 'px';
      }
    },
    mounted () {
      this.$nextTick(() => {
        this._scal();
      });
    },
    components: {}
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .vc-page
    height: inherit
    position: relative

  .vc-page-content
    position: relative
</style>
