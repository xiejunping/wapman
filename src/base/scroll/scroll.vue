<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';

  export default {
    name: 'scroll',
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      listenScroll: {
        type: Boolean,
        default: false
      },
      data: {
        type: Array,
        default: null
      },
      pullup: {
        type: Boolean,
        default: false
      },
      pulldown: {
        bype: Boolean,
        default: false
      },
      beforeScroll: {
        type: Boolean,
        default: false
      },
      refreshDelay: {
        type: Number,
        default: 20
      }
    },
    methods: {
      _initScroll () {
        if (!this.$refs.wrapper) return;
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click,
          scrollbar: true
        });

        if (this.listenScroll) {
          let me = this;
          this.scroll.on('scroll', (pos) => {
            me.$emit('scroll', pos);
          });
        }
        if (this.pullup) {
          this.scroll.on('scrollEnd', () => {
            if (this.scroll.y === (this.scroll.maxScrollY + 50)) {
              this.$emit('scrollToEnd');
            }
          });
        }

        if (this.beforeScroll) {
          this.scroll.on('beforeScrollStart', () => {
            this.$emit('beforeScroll');
          });
        }
        setTimeout(() => {
          this.refresh();
        }, 500);
      },
      disable () {
        this.scroll && this.scroll.disable();
      },
      enable () {
        this.scroll && this.scroll.enable();
      },
      refresh () {
        this.scroll && this.scroll.refresh();
      },
      scrollTo () {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
      },
      scrollToElement () {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
      }
    },
    mounted () {
      this.$nextTick(() => {
        this._initScroll();
      });
    },
    watch: {
      data () {
        setTimeout(() => {
          this.refresh();
        }, this.refreshDelay);
      }
    },
    components: {BScroll}
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">

</style>
