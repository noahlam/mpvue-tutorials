<template>
  <view class="counter_container">
    <view class="counter_item">
      <view class="counter_itemTitle">参与工程数</view>
      <view class="counter_itemNumber">{{userInfo.totalProjectNum}}</view>
    </view>

    <view class="counter_item">
      <view class="counter_itemTitle">累计土方数量 <span class="f20">(万方)</span>  </view>
      <view class="counter_itemNumber">{{userInfo.totalEarthworkVolume}}</view>
    </view>

    <view class="counter_item">
      <view class="counter_itemTitle">设备数</view>
      <view class="counter_itemNumber">{{userInfo.deviceNum}}</view>
    </view>

    <view class="counter_item">
      <view class="counter_itemTitle">司机人数</view>
      <view class="counter_itemNumber">{{userInfo.driverNum}}</view>
    </view>
  </view>
</template>

<script>


export default {
  data(){
    return{}
  },
  props:{
    userInfo: () => { return {}}
  },
  computed: {
    $$imagePath(){ return this.$imagePath },
    userInfo () { return this.store.getters.GET_USERINFO }
  },
  methods: {},
  mounted () {
  }
}

</script>
<style scoped>
  .counter_container{
    background: #fff;
    width: 100%;
    padding: 25rpx 0;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
  }
  .counter_item{
    flex-shrink: 1;
  }
  .counter_itemTitle{
    font-size: 22rpx;
    color: #999;
    text-align: center;
  }
  .counter_itemNumber{
    font-size: 36rpx;
    color: var(--orange);
    font-weight: bold;
    text-align: center;
    line-height: 66rpx;
  }
</style>
