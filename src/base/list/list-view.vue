<template>
    <div class="vc-list-view">
        <div v-for="t in data" class="li-item g-box g-row g-list-padding" @click="$emit('fnlist', t)">
            <div class="g-col-2 li-name">
                <label for="">{{t.name}}</label>
            </div>
            <div class="g-col-6">
                <label for="">{{t.address}}</label>
            </div>
            <div class="vc-li-item"></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'list-view',
    props: {
      data: {
        type: Array,
        default: []
      }
    }
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/styles/variable"
  @import "~common/styles/mixin"
  .vc-list-view
    font-size: $t_3
    border-top: solid 1px $c_gray
    .li-item
      $active-block()
      position: relative
      width: 100%
      background-color: $c_white
      border-top: solid 1px $c_light_gray
      &:first-child
        border-top: none
      .li-name
        text-align: center
    .vc-li-item
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      width: 100%
      height: 100%
</style>
