<template>
  <img :src="vcSrc" class="vc-image" alt=""/>
</template>

<script type="text/ecmascript-6">
  import defaultImg from 'common/images/default.png';
  export default {
    name: 'vc-image',
    props: {
      src: String
    },
    computed: {
      vcSrc() {
        return this.src || defaultImg;
      }
    }
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">

</style>
