<template>
  <div v-show="showFlag" :class="positionCls" class="vc-toast" @click.stop>
    <div v-if="icon" class="vc-toast-icon">
      <p>
        <loader-rack v-if="icon === 'load'"></loader-rack>
        <i v-else :class="icon"></i>
      </p>
    </div>
    <div v-if="title" class="vc-toast-title">
      <p>
        <span>{{title}}</span>
      </p>
    </div>
    <div v-if="text">
      <p>
        <span>{{text}}</span>
      </p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import LoaderRack from 'base/loading/loader-rack';
  export default {
    props: {
      position: {
        type: String,
        default: 'bottom'
      },
      title: {
        type: String
      },
      text: {
        type: String
      },
      icon: {
        type: String
      }
    },
    data () {
      return {
        showFlag: false
      };
    },
    methods: {
      show() {
        this.showFlag = true;
      },
      hide() {
        this.showFlag = false;
      }
    },
    computed: {
      positionCls () {
        switch (this.position) {
          case 'top':
            return 'c-top';
          case 'middle':
            return 'c-middle';
          case 'bottom':
            return 'c-bottom';
          default:
            return 'c-bottom';
        }
      }
    },
    components: {LoaderRack}
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/styles/variable"
  .vc-toast
    position: fixed
    z-index: 2017999
    text-align: center
    padding: 0.214rem 0.16rem
    border-radius: 0.16rem
    background-color: rgba(0, 0, 0, .6)
    color: $c_white
    .vc-toast-icon
      p
        padding: .107rem 0
      i
        font-size: 1.5rem

    .vc-toast-title
      color: $c_white
      p
        padding: .214rem 0
      span
        font-size: $t_4

  .c-middle
    width: 3rem
    height: 3rem
    left: 50%
    top: 50%
    margin-left: -1.5rem
    margin-top: -1.5rem

  .c-bottom
    width: 6rem
    left: 50%
    margin-left: -3rem
    bottom: 1.275rem
</style>
