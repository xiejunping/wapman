<template>
  <transition name="dropmenu-fade" appear>
    <div class="vc-dropmenu" v-show="show" @click.stop>
      <div class="dropmenu-content">
        <div class="g-row" v-for="t in data" @click="$emit('fnlist', t)">
          <div class="g-col-3 dropmenu dm-ico g-center">
            <i :class="['iconfont', t.icon]"></i>
          </div>
          <div class="g-col-5 dropmenu dm-title">
            <label for="menu">{{t.title}}</label>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      data: Array,
      show: Boolean
    }
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/styles/variable"

  .vc-dropmenu
    position: absolute
    z-index: 1000
    right: .134rem
    top: 1.307rem

    &.dropmenu-fade-enter-active
      animation: drop-fadein 0.3s
      .dropmenu-content
        animation: drop-zoom 0.3s

    .dropmenu-content
      width: 3.62rem
      box-shadow: 0 0 0 .026rem rgba($c_black, .3)
      border-radius: .134rem
      font-size: $t_3
      color: $c_dark_white
      background-color: rgba($c_black, .8)
      transform-origin: 92% top
      &:before
        content: ''
        position: absolute
        width: 0
        height: 0
        margin-top: -0.267rem
        right: .246rem
        border-left: .267rem solid transparent
        border-right: .267rem solid transparent
        border-bottom: .267rem solid rgba($c_black, .8)
        z-index: 1002

    >div
      .dropmenu
        padding: .267rem 0
      .dm-title
        line-height: .533rem
        border-top: solid 1px $c_light_gray
        text-align: left
      &:first-child
        .dm-title
          border-top: none

    .iconfont
      font-size: $t_5

  @keyframes drop-fadein
    0%
      opacity: 0
    100%
      opacity: 1

  @keyframes drop-zoom
    0%
      transform: scale(0)
    100%
      transform: scale(1)
</style>
