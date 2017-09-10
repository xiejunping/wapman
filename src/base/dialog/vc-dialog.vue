<template>
  <transition name="dialog-fade" appear>
    <div class="vc-dialog" v-show="showFlag" @click.stop>
      <div class="dialog-wrapper">
        <div class="dialog-content">
          <div class="title" v-html="title"></div>
          <p class="msg" v-html="msg"></p>
          <div class="operate g-row">
            <div @click="cancelBtn.handle" class="g-col-4 left-btn">{{cancel.text}}</div>
            <div @click="confirmBtn.handle" class="g-col-4 right-btn">{{confirm.text}}</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'dialog',
    props: {
      title: {
        type: String,
        default: '系统提示'
      },
      msg: {
        type: String
      },
      confirm: {
        type: Object,
        default() {
          return {
            text: '确定'
          };
        }
      },
      cancel: {
        type: Object,
        default() {
          return {
            text: '取消'
          };
        }
      }
    },
    data () {
      return {
        showFlag: false
      };
    },
    methods: {
      show () {
        this.showFlag = true;
      },
      hide () {
        this.showFlag = false;
      }
    },
    computed: {
      cancelBtn() {
        return Object.assign({}, {
          handle: () => {
            this.hide();
          }
        }, this.cancel);
      },
      confirmBtn() {
        return Object.assign({}, {
          handle: () => {
            this.hide();
          }
        }, this.confirm);
      }
    }
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/styles/variable"

  .vc-dialog
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    z-index: 998
    background-color: rgba(0, 0, 0, .4)
    &.dialog-fade-enter-active
      animation: dialog-fadein 0.3s
      .dialog-content
        animation: dialog-zoom 0.3s

    .dialog-wrapper
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      z-index: 999
      .dialog-content
        width: 7.8rem
        text-align: center
        border-radius: .134rem
        background-color: $c_white
        .title
          font-size: $t_5
          line-height: 1.2rem
        .msg
          padding: .267rem .4rem
          line-height: .586rem
          font-size: $t_3
          color: $p_color
        .operate
          margin-top: .267rem
          font-size: $t_4
          line-height: 1.25rem
          border-top: solid 1px $c_light_gray
          .left-btn
            border-right: solid 1px $c_light_gray
          .right-btn
            color: $c_base

  @keyframes dialog-fade
    0%
      opacity: 0
    100%
      opacity: 1

  @keyframes dialog-zoom
    0%
      transform: scale(0)
    50%
      transform: scale(1.1)
    100%
      transform: scale(1)
</style>
