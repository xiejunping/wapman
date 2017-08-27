<template>
  <section class="vc-page">
    <header class="vc-page-top">
      <slot name="head"></slot>
    </header>
    <section class="vc-page-content">
      <slot></slot>
    </section>
    <footer class="vc-page-footer">
      <slot name="foot"></slot>
    </footer>
  </section>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {
      };
    },
    methods: {
      scal () {}
    },
    created () {
      this.scal();
    },
    components: {}
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  /*@import "~common/styles/index"*/

</style>
