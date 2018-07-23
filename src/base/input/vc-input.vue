<template>
  <div class="vc-input">
    <div class="vc-input-body">
      <input type="type"
             v-model="inputxt"
             class="vc-form-control"
             :placeholder="placeholder"
             :disabled="disabled"
             :readonly="readonly"
             @focus="onFocus"
             @blur="onBlur"/>
    </div>
    <div class="vc-input-icon" @click="$emit('click')">
      <i :class="icon"></i>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    name: 'vc-input',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      size: {
        type: Number
      },
      placeholder: {
        type: String
      },
      disabled: {
        type: Boolean
      },
      readonly: {
        type: Boolean
      },
      value: {
        type: [String, Number]
      },
      icon: {
        type: String,
        default: 'icon-close_light'
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
      onFocus() {},
      onBlur() {}
    }
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/styles/variable"
  @import "~common/styles/mixin"

  .vc-input
    position: relative
    height: 1.04rem
    border: solid 1px $c_gray
    border-radius: .1rem
    background-color: $c_white
    z-index: 10
    .vc-input-body
      height: 100%
      .vc-form-control
        width: 100%
        padding-left: .134rem
        height: inherit
        border: none
        background: none
        line-height: normal

    .vc-input-icon
      $active-block()
      width: 1rem
      height: .942rem
      text-align: center
      background-color: $c_white
      position: absolute
      right: .013rem
      top: .013rem
      z-index: 8
      padding-top: .204rem
      i
        font-size: .534rem
        color: $c_light_color
</style>
