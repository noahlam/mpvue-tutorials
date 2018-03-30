<template>
  <view :animation="animationData" style="" :class="textClass" v-if="show">{{text}}</view>
</template>

<script type="text/ecmascript-6">
  import toastStore from './store'
  export default {
    data () {
      return {
        animationData: {},
      }
    },
    computed:{
      show() {
        let delay = toastStore.getters.GET_TOAST_DURATION
        let animation = wx.createAnimation()
        animation.opacity(0.99).step({duration: 200});//修改透明度
        animation.opacity(1).step({duration: delay - 400});//修改透明度
        animation.opacity(0).step({duration: 200});//修改透明度
        this.animationData = animation.export()
        return toastStore.getters.GET_TOAST_SHOW
      },
      text() {
        return toastStore.getters.GET_TOAST_TEXT
      },
      textClass() {
        return toastStore.getters.GET_TOAST_TEXT_CLASS_NAME  || '__toast_text__'
      }
    }
  }
</script>

<style scoped>
  .__toast_text__{
    min-height: 60rpx;
    min-width: 150rpx;
    max-width: 50%;
    max-height: 50%;
    border-radius: 10rpx;
    z-index: 9999;
    position: fixed;
    font-size: 28rpx;
    color: #fff;
    top:50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(-50%, -50%) ;
    background: rgba(0,0,0,.65);
    padding: 20rpx;
    opacity: 0;
  }
</style>
