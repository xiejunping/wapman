<template>
  <div class="vc-nodata">
    <p class="nd-img">
      <i :class="icon"></i>
    </p>
    <p class="nd-desc" v-html="text"></p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'no-result',
    props: {
      icon: {
        type: String,
        default: 'icon-edit_light'
      },
      text: {
        type: String,
        default: '暂无数据'
      }
    }
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/styles/variable"

  .vc-nodata
    position: relative
    width: 70%
    left: 50%
    top: 40%
    transform: translate(-50%, -50%)
    text-align: center
    .nd-img
      font-size: 3rem
      color: $c_gray
    .nd-desc
      margin-top: .267rem
      font-size: $t_3
      color: $c_light_color

</style>
