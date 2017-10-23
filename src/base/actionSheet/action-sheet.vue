<template>
  <transition name="as-slide" appear>
    <div class="vc-as" v-show="display" @click.stop>
      <div class="vc-as-body g-box" :class="{'vc-as-down': !display}">
        <div class="vc-as-menu">
          <ul>
            <li class="vc-as-btn" v-for="t in btns">
              <div class="vc-li-item" @click="t.handle">
                <span v-html="t.name"></span>
              </div>
            </li>
          </ul>
        </div>
        <div class="vc-as-btn vc-as-cancel" @click="hide">取消</div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'action-sheet',
    props: {
      btns: {
        type: Array,
        default() {
          return [{
            name: '是',
            handle: () => {}
          }, {
            name: '否',
            handle: () => {}
          }];
        }
      }
    },
    data() {
      return {
        display: false
      };
    },
    methods: {
      show() {
        this.display = true;
      },
      hide() {
        this.display = false;
      }
    }
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/styles/variable"

  .vc-as
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: rgba($c_black, 0.3)
    z-index: 23333
    &.as-slide-enter-active
      animation: as-slidein 0.5s
      .vc-as-body
        animation: slide-up 0.5s

    &.as-slide-leave-active
      animation: as-slideout 0.5s
      .vc-as-body
        animation: slide-out 0.5s

    .vc-as-body
      position: absolute
      left: 0
      right: 0
      bottom: .267rem
      .vc-as-btn
        text-align: center
        font-size: $t_3
        background-color: $c_white
      .vc-as-cancel
        $active-block()
        color: $c_color
        border-radius: 0.134rem
        line-height: 1.25rem
      .vc-as-menu
        ul
          border-radius: 0.134rem
          background-color: $c_white
          overflow: hidden
          padding: 0 .134rem
          margin-bottom: .267rem
          li
            padding: .134rem 0
            line-height: .983rem
            border-bottom: 1px solid $c_light_gray
            &:last-child
              border-bottom: none

            .vc-li-item
              $active-block()
              background-color: #fefefe
              color: $c_dark_blue

    .vc-as-down
      bottom: -50%

  @keyframes as-slidein
    0%
      background: rgba($c_black, 0)
    100%
      background: rgba($c_black, 0.3)

  @keyframes as-slideout
    0%
      background: rgba($c_black, 0.3)
    100%
      background: rgba($c_black, 0)

  @keyframes slide-up
    0%
      bottom: -50%
    100%
      bottom: .267rem

  @keyframes slide-out
    0%
      bottom: .267rem
    100%
      bottom: -50%
</style>
