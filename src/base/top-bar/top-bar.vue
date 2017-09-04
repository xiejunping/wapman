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
    </div>
    <div class="c-slot">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {back, setStatusBarStyle} from 'common/js/native';
  import {fixStatusBar} from 'common/js/api';

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
        fixStatusBar(this.$refs.bar);
        setStatusBarStyle('light');
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

  .c-bar
    $clear()
    position: relative
    background: $c_base
    border-bottom: solid 1px $c_gray

    .c-square
      text-align: center
      height: 1.174rem
      color: $c_white
      padding: .287rem 0

      i
        font-size: .6rem

    .c-bar-left
      width: 1.174rem
      float: left

    .c-bar-right
      $clear()
      min-width: 1.174rem
      position: absolute
      right: 0
      bottom: 0
      .c-right-item
        width: 1.174rem
        float: right

    .c-bar-center
      margin: 0 1.174rem
      font-size: $t_4
      span
        $no-wrap()
        max-width: 70%
        display: inline-block

    .c-slot
      position: absolute
      width: 100%
      top: 1.174rem

    .c-title
      line-height: .6rem
</style>
