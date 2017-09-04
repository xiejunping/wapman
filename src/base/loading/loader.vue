<template>
  <div class="loader">Loading...</div>
</template>

<script type="text/ecmascript-6">
  export default {
  };
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
  @import "~common/styles/variable.styl"
  .loader, .loader:before, .loader:after
    border-radius: 50%
    position: absolute
    content: ''

  .loader:before, .loader:after
    width: .525rem
    height: 1.2rem
    background-color: #f2f2f2
    top: -0.09rem

  .loader
    font-size: .146rem
    text-indent: -99999rem
    margin: 2.2rem auto 0  //7.2rem
    position: relative
    width: 1rem
    height: 1rem
    box-shadow: inset 0 0 0 .14rem $c_base

  .loader:before
    border-radius: 1.02rem 0 0 1.02rem
    left: -0.01rem
    transform-origin: .50rem .58rem
    animation: loader 2s infinite ease 1.5s

  .loader:after
    border-radius: 0 1.02rem 1.02rem 0
    left: .51rem
    transform-origin: 0 .58rem
    animation: loader 2s infinite ease

  @-webkit-keyframes loader
    0%
      -webkit-transform: rotate(0deg)
      transform: rotate(0deg)
    100%
      -webkit-transform: rotate(360deg)
      transform: rotate(360deg)

  @keyframes loader
    0%
      -webkit-transform: rotate(0deg)
      transform: rotate(0deg)
    100%
      -webkit-transform: rotate(360deg)
      transform: rotate(360deg)
</style>
