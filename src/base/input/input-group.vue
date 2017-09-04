<template>
  <div class="vc-input" :class="group">
    <span v-if="addon" class="vc-input-addon" v-html="addon"></span>
    <input :type="type" class="vc-form-control" :placeholder="placeholder"/>
    <span v-if="btn" class="vc-input-btn" v-html="btn.text" @click="btn.handle"></span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'input',
    props: {
      addon: {
        type: String
      },
      btn: {
        type: Object
      },
      placeholder: {
        type: String
      },
      group: {
        type: String,
        default: 'input-group'
      },
      type: {
        type: String
      },
      size: {
        type: Number
      }
    }
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/styles/variable"

  .input-group
    font-size: $t_3
    .vc-form-control
      font-size: inherit
      padding: .32rem 0
      border-radius: .107rem
    .vc-input-addon, .vc-input-btn
      padding: .346rem
      border-radius: .107rem

  .input-group-lg
    padding: .2rem 0

  .input-group-sm
    padding: .14rem 0

  .input-group-xs
    padding: .12rem 0

  .vc-input
    width: 100%
    position: relative
    display: table
    border-collapse: separate

    .vc-form-control
      width: 100%
      position: relative
      z-index: 2
      float: left
      line-height: 1
      padding-left: .267rem
      background-color: $c_white

    .vc-form-control::-webkit-input-placeholder
      font-size: $t_2

    .vc-input-addon
      border-top-right-radius: 0
      border-bottom-right-radius: 0

    .vc-input-btn
      border-top-left-radius: 0
      border-bottom-left-radius: 0

    .vc-input-addon, .vc-input-btn, .vc-form-control, .vc-input-group
      display: table-cell

    .vc-input-addon, .vc-input-btn
      line-height: 1
      font-weight: 400
      color: $c_color
      background-color: $c_dark_gray
      width: 1%
      white-space: nowrap
      vertical-align: middle

</style>
