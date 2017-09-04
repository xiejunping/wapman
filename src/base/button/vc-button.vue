<template>
  <div class="vc-btn">
    <button class="vc-btn-primary">登录</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/styles/variable"
  @import "~common/styles/mixin"

  .vc-btn
    text-align: center

    button
      width: 100%
      color: $c_white
      line-height: 1
      -webkit-user-select: none

      font-size: $t_3
      padding: .333rem 0
      border-radius: .134rem

      $active-block()

    .vc-btn-lg
      font-size: $t_4
      padding: 0 1.5rem
      border-radius: .25rem

    .vc-btn-sm
      font-size: $t_2
      padding: 0 1.2rem

    .vc-btn-xs
      font-size: $t_1
      padding: 0 1rem

    .vc-btn-primary
      background-color: $c_base

    .vc-btn-primary-light
      border: solid 1px $c_base
      color: $c_base
      background-color: $c_white

</style>
