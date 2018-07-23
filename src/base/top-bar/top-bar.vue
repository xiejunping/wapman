<template>
  <div class="c-bar" ref="bar">
    <div class="c-bar-left c-square" @click="left.handle">
      <i :class="left.icon"></i>
    </div>
    <div class="c-bar-center c-square" :class="{'c-title': !titleBtn.icon}">
      <div v-if="titleBtn.icon">
        <span>{{titleBtn.text}}</span>
        <i :class="titleBtn.icon"></i>
      </div>
      <span v-else>{{titleBtn}}</span>
    </div>
    <div class="c-bar-right c-square">
      <div v-for="r in right" @click="r.handle" class="c-right-item">
        <i v-if="r.icon" :class="r.icon"></i>
        <span v-else>{{r.text}}</span>
      </div>
      <slot name="baright"></slot>
    </div>
    <div class="c-slot">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {back} from 'common/js/native';
  import {ISAPP, fixStatusBar} from 'common/js/api';

  export default {
    props: {
      title: {
        type: String
      },
      titleBox: {
        type: Object
      },
      left: {
        type: Object,
        default () {
          return {
            icon: 'icon-back',
            handle () {
              back();
            }
          };
        }
      },
      right: {
        type: Array
      }
    },
    data () {
      return {
        leftObj: {}
      };
    },
    methods: {
      _initBar () {
        this._fixStatusBar();
      },
      _fixStatusBar () {
        // 适配iOS 7+，Android 4.4+状态栏
        ISAPP && fixStatusBar(this.$refs.bar);
      }
    },
    computed: {
      titleBtn () {
        if (this.title) {
          return this.title;
        } else if (this.titleBox) {
          return Object.assign({}, {
            icon: 'icon-pulldown1',
            text: null
          }, this.titleBox);
        }
      }
    },
    mounted () {
      this._initBar();
    }
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/styles/variable"
  @import "~common/styles/mixin"

  $c_bar_height = 1.44rem
  $c_bar_padding = .35rem
  .c-bar
    $clear()
    position: relative
    background: $c_base

    .c-square
      text-align: center
      height: $c_bar_height
      color: $c_white
      padding: $c_bar_padding 0
      i
        font-size: .74rem

    .c-bar-left
      $active-block()
      width: $c_bar_height
      float: left

    .c-bar-right
      $clear()
      min-width: $c_bar_height
      position: absolute
      right: 0
      bottom: 0
      padding: 0
      .c-right-item
        $active-block()
        width: $c_bar_height
        float: right
        padding: $c_bar_padding 0

    .c-bar-center
      margin: 0 $c_bar_height
      font-size: $t_7
      span
        $no-wrap()
        max-width: 70%
        display: inline-block
      i
        $active-block()

    .c-slot
      position: absolute
      width: 100%
      top: $c_bar_height

    .c-title
      line-height: .74rem
</style>
