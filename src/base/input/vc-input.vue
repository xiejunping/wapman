<template>
  <input v-if="type === 'tel'"
         type="tel"
         v-model="inputxt"
         class="vc-form-control"
         :placeholder="placeholder"
         :disabled="disabled"
         :readonly="readonly"
         @focus="onFocus"
         @blur="onBlur"
         @input="onInput"/>
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
      }
    },
  }
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">

</style>
