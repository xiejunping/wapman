<template>
  <img :src="src" class="vc-image" :class="classes" alt=""/>
</template>

<script type="text/ecmascript-6">
  import {getImageLightness} from 'common/js/utils';

  export default {
    name: 'vc-image',
    props: {
      src: String
    },
    data: () => ({
      loaded: false,
      applyBlack: true,
      imageElement: null
    }),
    watch: {
      mdsrc() {
        this.createImage();
      }
    },
    computed: {
      classes() {
        return {
          'vc-loaded': this.loaded,
          'vc-black-output': this.applyBlack
        };
      }
    },
    methods: {
      analyzeLightness(image) {
        const applyLoad = () => {
          this.loaded = true;
        };

        getImageLightness(image, (lightness) => {
        }, applyLoad);
      },
      createImage() {
        this.loaded = false;
        this.applyBlack = false;
        this.imageElement = null;

        if (this.src) {
          this.imageElement = document.createElement('img');
          this.imageElement.crossOrigin = '';
          this.imageElement.src = this.src;
          this.analyzeLightness(this.imageElement);
        }
      }
    },
    created () {
      console.log(this.src);
      this.createImage();
    }
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">

</style>
