<template>
  <div class="loader">Loading...</div>
</template>

<script type="text/ecmascript-6">
  export default {
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  .loader
    margin: 0.06rem auto 0
    font-size: .134rem
    position: relative
    text-indent: -9999rem
    border-top: .165rem solid rgba(255, 255, 255, 0.2)
    border-right: .165rem solid rgba(255, 255, 255, 0.2)
    border-bottom: .165rem solid rgba(255, 255, 255, 0.2)
    border-left: .165rem solid #ffffff
    animation: rack 1.8s infinite linear

  .loader, .loader:after
    border-radius: 50%
    width: 1.2rem
    height: 1.2rem
    margin-top: .167rem
    margin-bottom: .134rem

  @-webkit-keyframes rack
    0%
      transform: rotate(0deg)
    100%
      transform: rotate(360deg)

  @keyframes rack
    0%
      transform: rotate(0deg)
    100%
      transform: rotate(360deg)
</style>
