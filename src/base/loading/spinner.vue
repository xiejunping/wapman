<template>
  <transition name="vc-spinner" appear>
    <div class="vc-spinner" :class="classes" :style="styles">
      <svg class="vc-spinner-draw" viewBox="25 25 50 50">
        <circle class="vc-spinner-path" cx="50" cy="50" r="20" :stroke-width="stroke" :stroke-dasharray="dashProgress"></circle>
      </svg>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'spinner',
    props: {
      size: {
        type: Number,
        default: 1.067
      },
      stroke: {
        type: Number,
        default: 3.5
      },
      indeterminate: Boolean,
      progress: {
        type: Number,
        default: 0
      }
    },
    computed: {
      classes() {
        return {
          'vc-indeterminate': this.indeterminate
        };
      },
      styles() {
        const newSize = this.size + 'rem';

        return {
          width: newSize,
          height: newSize
        };
      },
      dashProgress() {
        let progress = this.progress * 125 / 100;

        if (this.indeterminate) {
          return false;
        }

        if (progress >= 125) {
          progress = 130;
        }

        return `${progress}, 200`;
      }
    }
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import '~common/styles/variable';

  .vc-spinner {
    display: inline-block;
    position: relative;
    pointer-events: none;
    will-change: transform, opacity;

    &.vc-indeterminate {
      .vc-spinner-draw {
        animation: spinner-rotate 1.9s linear infinite;
        transform: rotate(0deg) translateZ(0);
      }

      .vc-spinner-path {
        stroke-dasharray: 2, 200;
        animation: spinner-dash 1.425s ease-in-out infinite;
      }
    }

    &.vc-spinner-leave-active {
      opacity: 0;
      transform: scale(.8) translateZ(0);
      transition: all .4s cubic-bezier(.25, .8, .25, 1);
    }

    &:not(.vc-indeterminate) {
      &.vc-spinner-enter-active {
        transition-duration: 2s;

        .vc-spinner-draw {
          animation: spinner-initial-rotate 1.98s cubic-bezier(.25, .8, .25, 1) forwards;
        }
      }
    }
  }

  .vc-spinner-draw {
    width: 100%;
    height: 100%;
    margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: rotate(270deg) translateZ(0);
    transform-origin: center center;
    will-change: transform, opacity;
  }

  .vc-spinner-path {
    stroke: $c_base;
    fill: none;
    stroke-dashoffset: 0;
    stroke-miterlimit: 10;
    transition: all .4s cubic-bezier(.25, .8, .25, 1);
  }

  @keyframes spinner-rotate {
    to {
      transform: rotate(360deg) translateZ(0);
    }
  }

  @keyframes spinner-initial-rotate {
    0% {
      opacity: 0;
      transform: rotate(-90deg) translateZ(0);
    }

    20% {
      opacity: 1;
    }

    100% {
      transform: rotate(270deg) translateZ(0);
    }
  }

  @keyframes spinner-dash {
    0% {
      stroke-dasharray: 2, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }

    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }

</style>
