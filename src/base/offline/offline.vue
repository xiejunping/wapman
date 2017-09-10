<template>
  <div class="vc-offline">
    <div>
      <p class="ol-img">
        <i class="icon-discover"></i>
      </p>
      <p class="ol-desc">
        <span>页面加载失败了</span>
        <ins>别紧张，轻触按钮重新加载页面</ins>
      </p>
      <p class="ol-refresh">
        <vc-button color="vc-btn-primary-light" @click="$emit('refresh')">重新加载</vc-button>
      </p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import VcButton from 'base/button/vc-button';
  export default {
    components: {VcButton}
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/styles/variable"
  .vc-offline
    position: relative
    width: 70%
    left: 50%
    top: 40%
    transform: translate(-50%, -50%)
    text-align: center
    .ol-img
      font-size: 3rem
      color: $c_gray
    .ol-desc
      line-height: 1.5
      font-size: $t_3
      span
        display: inline-block
        color: $c_color
      ins
        display: inline-block
        font-size: $t_2
        color: $c_light_color
    .ol-refresh
      width: 50%
      margin: 1rem auto
</style>
