<template>
  <view class="switchIdentityContainer">
    <view class="switchIdentity_title">身份选择</view>
    <view class="switchIdentity_main">

      <view :class="getBossClassName"  @tap.stop="setIdentity(1)">
        <view class="switchIdentity_itemTitle">设备老板</view>
        <icon type="success" color="#0779fc" v-if="identity==1"/>
        <view class="switchIdentity_itemCircle" v-else />
      </view>

      <view :class="getDriverClassName" @tap.stop="setIdentity(2)">
        <view class="switchIdentity_itemTitle">司机</view>
        <icon type="success" color="#0779fc" v-if="identity==2"/>
        <view class="switchIdentity_itemCircle" v-else />
      </view>

    </view>
  </view>
</template>

<script>


export default {
  data(){
    return{
      identity: ''
    }
  },
  computed: {
    // 根据用户身份,获取className
    getBossClassName(){
      return this.identity == 1 ? 'switchIdentity_itemActive' : 'switchIdentity_item'
    },
    getDriverClassName(){
      return this.identity == 2 ? 'switchIdentity_itemActive' : 'switchIdentity_item'
    },
  },
  methods: {
    setIdentity (id) {
      this.identity = id
      this.store.commit('setIdentity',id)
      setTimeout(()=> {this.$emit('input',false)},100)
    }
  },
  mounted () {
    this.identity = this.store.getters.GET_IDENTITY
  }
}

</script>
<style scoped>
  .switchIdentityContainer{
    width: 710rpx;
    border-radius: 10rpx;
    background: #fff;
  }
  .switchIdentity_title{
    width: 100%;
    line-height: 100rpx;
    border-bottom: 1px solid var(--border);
    color: #333;
    text-align: center;
    font-size: 32rpx;
    font-weight: bold;
  }
  .switchIdentity_main{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32rpx 0 62rpx;
  }
  .switchIdentity_itemActive{
    width: 500rpx;
    height: 150rpx;
    border-radius: 5rpx;
    box-shadow: 0 2rpx 18rpx 0 rgba(7,121,252,0.26);
    border:1px solid var(--blue);
    padding: 0 55rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 18rpx 0;
  }
  .switchIdentity_item{
    width: 500rpx;
    height: 150rpx;
    border-radius: 5rpx;
    padding: 0 55rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 18rpx 0;
    background: #efefef;
  }
  .switchIdentity_itemTitle{
    color: #666;
    font-size: 36rpx;
  }
  .switchIdentity_itemCircle{
    width: 32rpx;
    height: 32rpx;
    border-radius: 16rpx;
    background: #fff;
  }
</style>
