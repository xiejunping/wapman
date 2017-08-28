<template>
  <div class="spinner">
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="rect3"></div>
    <div class="rect4"></div>
    <div class="rect5"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  .spinner
    margin: .534rem auto
    width: 1.334rem
    height: .8rem
    text-align: center
    font-size: .267rem

  .spinner > div
    background-color: #67CF22
    height: 100%
    width: .08rem
    display: inline-block
    animation: stretchdelay 1.2s infinite ease-in-out

  .spinner .rect2
    -webkit-animation-delay: -1.1s
    animation-delay: -1.1s

  .spinner .rect3
    -webkit-animation-delay: -1.0s
    animation-delay: -1.0s

  .spinner .rect4
    -webkit-animation-delay: -0.9s
    animation-delay: -0.9s

  .spinner .rect5
    -webkit-animation-delay: -0.8s
    animation-delay: -0.8s

  @-webkit-keyframes stretchdelay
    0%, 40%, 100%
      -webkit-transform: scaleY(0.4)
    20%
      -webkit-transform: scaleY(1.0)

  @keyframes stretchdelay
    0%, 40%, 100%
      transform: scaleY(0.4)
      -webkit-transform: scaleY(0.4)

    20%
      transform: scaleY(1.0)
      -webkit-transform: scaleY(1.0)

</style>
