<template>
  <div class="vc-input" :class="group">
    <span v-if="addon" class="vc-input-addon" v-html="addon"></span>
    <input :type="type"
           v-model="inputxt"
           class="vc-form-control"
           :placeholder="placeholder"
           :disabled="disabled"
           :readonly="readonly"
           @focus="$emit('onFocus')"
           @blur="$emit('onBlur')"/>
    <span v-if="btn"
          class="vc-input-btn"
          :class="{'vc-btn-disabled': !btn.visible}"
          v-html="btn.text"
          @click="btnEvent"></span>
    <span v-else-if="icon"
          class="vc-input-icon"
          @click="$emit('click')">
      <i :class="icon"></i>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'input-group',
    props: {
      value: {
        type: [String, Number]
      },
      addon: {
        type: String
      },
      disabled: {
        type: Boolean
      },
      readonly: {
        type: Boolean
      },
      btn: {
        type: Object
      },
      icon: {
        type: String
      },
      placeholder: {
        type: String
      },
      group: {
        type: String,
        default: 'input-group'
      },
      type: {
        type: String, // type 支持在vue 2.5.0 以上
        default: 'text'
      },
      size: {
        type: Number
      }
    },
    computed: {
      inputxt: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('input', val);
        }
      }
    },
    methods: {
      onFocus() {
      },
      onBlur() {
      },
      btnEvent() {
        this.btn.visible && this.btn.handle();
      }
    }
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/styles/variable"
  @import "~common/styles/mixin"

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

    .vc-btn-disabled
      color: $c_light_color
      user-select: none

    .vc-input-icon
      $active-block()
      width: 1rem
      text-align: center
      background-color: $c_white
      position: absolute
      right: .013rem
      top: .013rem
      z-index: 8
      padding-top: .204rem
      padding-bottom: .204rem
      i
        font-size: .534rem
        color: $c_light_color

</style>
