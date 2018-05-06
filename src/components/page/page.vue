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
import { addEvent, back } from 'common/js/native';

export default {
  data() {
    return {};
  },
  methods: {
    _scal () {
      const page = this.$refs.page.offsetHeight;
      const top = this.$refs.top.offsetHeight;
      const foot = this.$refs.foot.offsetHeight;
      const content = page - top - foot;

      this.$emit('position', {
        top, foot, content
      });
      this.$refs.content.style.height = content + 'px';
    }
  },
  beforeCreate () {
    addEvent('keyback').then(() => {
      back();
    }).catch(e => {
      alert(e);
    });
  },
  mounted () {
    this.$nextTick(() => {
      this._scal();
    });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .vc-page
    height: inherit
    position: relative
    overflow-y: hidden
    overflow-x: hidden
  .vc-page-content
    position: relative
</style>
