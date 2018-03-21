<template>
  <view class="topinfo_container">
    <view class="topinfo_showInfo">
      <view class="topinfo_avatarWrap">
        <image mode="aspectFit" class="topinfo_avatar" src="https://mp.weixin.qq.com/debug/wxadoc/dev/image/cat/1.png?t=2018315"></image>
        <image mode="aspectFit" class="topinfo_gender" :src="$$imagePath + 'female.png'" v-if="$$imagePath && userInfo.sex==1"></image>
        <image mode="aspectFit" class="topinfo_gender" :src="$$imagePath + 'male.png'" v-if="$$imagePath && userInfo.sex==2"></image>
      </view>
      <view class="topinfo_infoWrap">
        <view class="topinfo_wxName">{{userInfo.nickname}}</view>
        <view class="topinfo_otherInfo">{{userInfo.name}}  |  入行{{userInfo.lengthOfService || 0}}年  |  {{identityInChinese}}</view>
      </view>

    </view>
    <navigator class="topinfo_editInfo" url="/pages/editUserInfo/editUserInfo" hover-start-time="500" hover-stay-time="0">完善资料</navigator>
    <!--<button class="topinfo_editInfo" open-type="getPhoneNumber" @getphonenumber="gotoEditUserInfo">完善资料</button>-->
  </view>
</template>

<script>


export default {
  data(){
    return{}
  },
  computed: {
    userInfo () { return this.store.getters.GET_USERINFO },
    $$imagePath(){ return this.$imagePath },
    identityInChinese () {
      return this.store.getters.GET_IDENTITY_IN_CHINESE
    },
  },
  methods: {},
  mounted () {
  }
}

</script>
<style scoped>
  .topinfo_container {
    width: 100%;
    padding: 35rpx 20rpx;
    box-sizing: border-box;
    background: #fff;
    border-bottom: 1px solid var(--border);
    display: flex;
  }
  .topinfo_showInfo{
    width: 600rpx;
    flex-direction: row;
    display: flex;
  }
  .topinfo_avatarWrap{
    margin-left:24rpx;
    width: 128rpx;
    height: 128rpx;
    position: relative;
  }
  .topinfo_avatar{
    width: 128rpx;
    height: 128rpx;
    border-radius: 64rpx;
  }
  .topinfo_gender{
    position: absolute;
    width: 30rpx;
    height: 30rpx;
    right: -5rpx;
    bottom: -5rpx;
    z-index: 9;
  }
  .topinfo_editInfo{
    color: var(--blue);
    width: 110rpx;
    font-size: 26rpx;
  }
  .topinfo_infoWrap{
    padding-left: 40rpx;
    padding-top: 10rpx;
  }
  .topinfo_wxName{
    font-size: 28rpx;
    color: #666;
    line-height: 68rpx;
  }
  .topinfo_otherInfo{
    font-size: 24rpx;
    color: #999;
  }
</style>
