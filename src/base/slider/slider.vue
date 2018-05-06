<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dot"
            :class="{active: currentPageIndex === i}"
            v-for="(t, i) in dots">
      </span>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import {addCls} from 'common/js/api';

  export default {
    name: 'slider',
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      }
    },
    data() {
      return {
        dots: [],
        currentPageIndex: 0
      };
    },
    mounted() {
      this.$nextTick(() => {
        this.init();
      });
      window.addEventListener('resize', () => {
        if (!this.slider) {
          return;
        }
        clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(() => {
          if (this.slider.isInTransition) {
            this.onScrollEnd();
          } else {
            this.autoPlay && this.play();
          }
          this.setSliderWidth(true);
          this.slider.refresh();
        }, 60);
      });
    },
    methods: {
      init() {
        clearTimeout(this.timer);
        this.currentPageIndex = 0;
        this.setSliderWidth();
        this.initDots();
        this.initSlider();
        if (this.autoPlay) this.play();
      },
      setSliderWidth(isResize) {
        this.children = this.$refs.sliderGroup.children;

        let width = 0;
        const sliderWidth = this.$refs.slider.clientWidth;
        for (const child of this.children) {
          addCls(child, 'slider-item');
          child.style.width = `${sliderWidth}px`;
          width += sliderWidth;
        }

        if (this.loop && !isResize) width += 2 * sliderWidth;
        this.$refs.sliderGroup.style.width = `${width}px`;
      },
      initSlider() {
        this.slider = new BScroll(this.$refs.slider, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          snap: {
            loop: this.loop,
            threshold: 0.3,
            speed: 400
          },
          bounce: false,
          stopPropagation: true,
          click: true
        });
        this.slider.on('scrollEnd', this.onScrollEnd);
        this.slider.on('touchEnd', () => {
          this.autoPlay && this.play();
        });
        this.slider.on('beforeScrollStart', () => {
          this.autoPlay && clearTimeout(this.timer);
        });
      },
      onScrollEnd() {
        let pageIndex = this.slider.getCurrentPage().pageX;
        if (this.loop) pageIndex -= 1;
        this.currentPageIndex = pageIndex;
        this.autoPlay && this.play();
      },
      initDots() {
        this.dots = new Array(this.children.length);
      },
      play() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.slider.next();
        }, this.interval);
      }
    },
    deactivated() {
      clearTimeout(this.timer);
    },
    beforeDestroy() {
      clearTimeout(this.timer);
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/styles/variable"

  .slider
    min-height: 1px
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l
        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll
</style>
