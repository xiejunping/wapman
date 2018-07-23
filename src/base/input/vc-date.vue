<template>
  <div class="vc-date">
    <div class="vc-date-content">
      <div class="vc-data-body" :class="{'vc-data-disabled': disabled}" @click="tiggler">
        <span v-if="inputxt" class="g-block vc-date-txt">{{inputxt}}</span>
        <span v-else class="g-block vc-date-praceholder">{{placeholder}}</span>
      </div>
      <input type="date" v-model="inputxt" ref="date" @change="$emit('change', inputxt)"/>
    </div>
    <div class="vc-date-icon" @click="tiggler">
      <i :class="icon"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vc-date',
    props: {
      placeholder: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      value: {
        type: [String, Number]
      },
      icon: {
        type: String,
        default: 'icon-time'
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
      tiggler() {
        this.$refs.date.click();
      }
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/styles/variable"
  @import "~common/styles/mixin"

  .vc-date
    position: relative
    height: 1.04rem
    z-index: 10
    /*overflow: hidden*/
    .vc-date-content
      font-size: $t_4
      .vc-data-disabled
        border: solid 1px $c_light_gray
        background-color: $c_light_white
        color: $c_light_dark
      .vc-data-body
        border: solid 1px $c_gray
        border-radius: .1rem
        background-color: $c_white
        line-height: 1rem
        padding-left: .134rem
        .vc-date-praceholder
          color: $c_gray

        .vc-date-txt
          color: $c_color

        .vc-form-control
          width: 100%
          padding-left: .134rem
          height: inherit
          border: none
          background: none
          line-height: normal

      input
        visibility: hidden
        height: 0
    .vc-date-icon
      $active-block()
      width: 1rem
      height: .942rem
      text-align: center
      background-color: $c_white
      position: absolute
      right: .013rem
      top: .018rem
      z-index: 8
      padding-top: .204rem
      i
        font-size: .534rem
        color: $c_light_color
</style>
