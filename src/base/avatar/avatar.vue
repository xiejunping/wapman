<template>
  <div class="vc-avatar" :class="classStr" @click="$emit('click', $event)">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'vc-avatar',
    props: {
      classes: String,
      default: ''
    },
    computed: {
      classStr() {
        return this.classes && this.classes.split(' ');
      }
    }
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/styles/variable"

  $avatar-size       = 1.067rem
  $avatar-large-size = 1.707rem
  $avatar-large-icon = 1.067rem

  .vc-avatar
    width: $avatar-size
    height: $avatar-size
    min-width: $avatar-size
    min-height: $avatar-size
    margin: auto
    display: inline-block
    overflow: hidden
    user-select: none
    position: relative
    border-radius: $avatar-size
    vertical-align: middle

    &.vc-large
      width: $avatar-large-size
      height: $avatar-large-size
      min-width: $avatar-large-size
      min-height: $avatar-large-size
      border-radius: $avatar-large-size

      .vc-icon
        width: $avatar-large-icon
        min-width: $avatar-large-icon
        height: $avatar-large-icon
        min-height: $avatar-large-icon
        font-size: $avatar-large-icon
        line-height: $avatar-large-icon

    &.vc-avatar-icon
      background-color: rgba($c_black, .38)

      .vc-icon
        color: $c_white

    .vc-icon
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)

    img
      width: 100%
      height: 100%
      display: block
</style>
