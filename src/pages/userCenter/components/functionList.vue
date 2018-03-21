<template>
  <view class="functionList_container">
    <view class="functionList_titleWrap">
      <view class="functionList_titleText">我发布的</view>
      <view class="functionList_publishText">发布</view>
    </view>
    <view class="functionList_funcWrap">

      <view class="functionList_funcItem">
        <image mode="aspectFit" class="functionList_funcImage" :src="$$imagePath + 'iconbar/icon-soldDevice.png'" v-if="$$imagePath"></image>
        <text class="functionList_funcText">出售设备</text>
      </view>

      <view class="functionList_funcItem">
        <image mode="aspectFit" class="functionList_funcImage" :src="$$imagePath + 'iconbar/icon-buyDevice.png'" v-if="$$imagePath"></image>
        <text class="functionList_funcText">求购设备</text>
      </view>

      <view class="functionList_funcItem">
        <image mode="aspectFit" class="functionList_funcImage" :src="$$imagePath + 'iconbar/icon-rentOutDevice.png'" v-if="$$imagePath"></image>
        <text class="functionList_funcText">出租设备</text>
      </view>

      <view class="functionList_funcItem">
        <image mode="aspectFit" class="functionList_funcImage" :src="$$imagePath + 'iconbar/icon-rentInDevice.png'" v-if="$$imagePath"></image>
        <text class="functionList_funcText">求租设备</text>
      </view>

      <view class="functionList_funcItem">
        <image mode="aspectFit" class="functionList_funcImage" :src="$$imagePath + 'iconbar/icon-transportDevice.png'" v-if="$$imagePath"></image>
        <text class="functionList_funcText">运输设备</text>
      </view>

      <view class="functionList_funcItem">
        <image mode="aspectFit" class="functionList_funcImage" :src="$$imagePath + 'iconbar/icon-buyDinas.png'" v-if="$$imagePath"></image>
        <text class="functionList_funcText">求购砂石</text>
      </view>

      <view class="functionList_funcItem">
        <image mode="aspectFit" class="functionList_funcImage" :src="$$imagePath + 'iconbar/icon-soldDinas.png'" v-if="$$imagePath"></image>
        <text class="functionList_funcText">出售砂石</text>
      </view>

      <view class="functionList_funcItem">
        <image mode="aspectFit" class="functionList_funcImage" :src="$$imagePath + 'iconbar/icon-recruitCasual.png'" v-if="$$imagePath"></image>
        <text class="functionList_funcText">求职</text>
      </view>

      <view class="functionList_funcItem">
        <image mode="aspectFit" class="functionList_funcImage" :src="$$imagePath + 'iconbar/icon-findWork.png'" v-if="$$imagePath"></image>
        <text class="functionList_funcText">招聘</text>
      </view>

      <view class="functionList_funcItem">
        <image mode="aspectFit" class="functionList_funcImage" :src="$$imagePath + 'iconbar/icon-projectInfo.png'" v-if="$$imagePath"></image>
        <text class="functionList_funcText">工程信息</text>
      </view>
    </view>
  </view>
</template>

<script>


export default {
  data(){
    return{}
  },
  computed: {
    $$imagePath(){ return this.$imagePath }
  },
  methods: {},
  mounted () {}
}

</script>
<style scoped>
  .functionList_container {
    width: 100%;
    padding: 35rpx 20rpx;
    box-sizing: border-box;
    background: #fff;
  }
  .functionList_titleWrap{
    line-height: 35rpx;
    padding-bottom: 25rpx;
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid var(--border);
  }
  .functionList_titleText{
    border-left:6rpx solid var(--blue);
    font-size: 28rpx;
    color: #333;
    padding-left: 30rpx;
  }
  .functionList_publishText{
    font-size: 24rpx;
    color:var(--blue);
  }
  .functionList_funcWrap{
    padding: 10rpx 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .functionList_funcItem{
    margin: 25rpx 0;
    width: 142rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .functionList_funcImage{
    width: 100rpx;
    height: 100rpx;
    border-radius: 50rpx;
  }
  .functionList_funcText{
    font-size: 24rpx;
    margin-top: 20rpx;
    color: #333;
  }
</style>
