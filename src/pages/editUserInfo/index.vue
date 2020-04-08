<template>
  <view class="container">
    <view class="avatarWrap">
      <view class="avatarContainer">
        <image mode="aspectFill" class="avatar" :src="userInfo.avatar"></image>
        <image mode="aspectFit" class="camera" :src="$$imagePath + 'camera.png'" v-if="$$imagePath"  @click.stop="chooseImage"></image>
      </view>
    </view>
    <view class="bgw pl20 pr20">

      <view class="cell">
        <view class="cellLeft">昵称</view>
        <view class="cellRight">
          <input class="cellText" v-model="userInfo.nickname" placeholder="发布和公开信息时显示,请填写" />
        </view>
      </view>

      <view class="cell">
        <view class="cellLeft">真实姓名</view>
        <view class="cellRight">
          <input class="cellText" v-model="userInfo.name" placeholder="请填写" />
        </view>
      </view>

      <view class="cell">
        <view class="cellLeft">性别</view>
        <view class="cellRight">
          <view class="dsf" @tap="setGender(1)">
            <image mode="aspectFit" class="cellMale" :src="$$imagePath + 'male_active.png'" v-if="$$imagePath && userInfo.sex==1"></image>
            <image mode="aspectFit" class="cellMale" :src="$$imagePath + 'male_normal.png'" v-if="$$imagePath && userInfo.sex!=1"></image>
            <view class="mr50">男</view>
          </view>
          <view class="dsf" @tap="setGender(0)">
            <image mode="aspectFit" class="cellFemale" :src="$$imagePath + 'female_active.png'" v-if="$$imagePath && userInfo.sex==0"></image>
            <image mode="aspectFit" class="cellFemale" :src="$$imagePath + 'female_noraml.png'" v-if="$$imagePath && userInfo.sex!=0"></image>
            <view>女</view>
          </view>
        </view>
      </view>

      <view class="cell">
        <view class="cellLeft">手机号码</view>
        <view class="cellRight">
          <view class="cellText">{{shownPhone}}</view>
          <image mode="aspectFit" class="cellEyeClose" :src="$$imagePath + 'eye_close.png'" v-if="$$imagePath && !isShowPhoneNumber" @tap="setPhoneVisibility(true)"></image>
          <image mode="aspectFit" class="cellEyeOpen" :src="$$imagePath + 'eye_open.png'" v-if="$$imagePath && isShowPhoneNumber" @tap="setPhoneVisibility(false)" ></image>
        </view>
      </view>

      <view class="cell">
        <view class="cellLeft">出生日期</view>
        <view class="cellRight">
          <picker mode="date" class="cellRight" :value="userInfo.birthday" @change="birthDateChange">
            <view class="dsf aic">
              {{birthdayShow}}<image mode="aspectFit" class="cellArrow" :src="$$imagePath + 'rightArrow.png'" v-if="$$imagePath"></image>
            </view>
          </picker>
        </view>
      </view>

      <view class="cell">
        <view class="cellLeft">入行日期</view>
        <picker mode="date" class="cellRight" :value="userInfo.join_time" @change="joinDateChange">
          <view class="dsf aic">
            {{join_timeShow}}<image mode="aspectFit" class="cellArrow" :src="$$imagePath + 'rightArrow.png'" v-if="$$imagePath"></image>
          </view>
        </picker>
      </view>
    </view>
    <view class="dsf jcc mt200">
      <button class="btn650" @tap="submitChange">保存</button>
    </view>
  </view>
</template>

<script>
export default {
  components:{ },
  data(){
    return{
      userInfo:{
        avatar: 'http://mpvue.com/assets/img/logo.0aaccdfd.png',
        mobile: '15985817766',
        name: '',
        sex: 0,
        nickname: '',
        birthday: '',
        join_time: '',
      },
      birthdayShow:'请选择',
      join_timeShow: '请选择',
      isShowPhoneNumber:true
    }
  },
  computed: {
    $$imagePath(){ return this.$imagePath },
    shownPhone() {
      if(this.isShowPhoneNumber){
        return this.userInfo.mobile
      }else {
        return this.encryptPhone(this.userInfo.mobile)
      }
    }
  },
  methods: {
    // 加密显示电话号码
    encryptPhone(phone){
      let arr = phone.split('')
      arr.splice(3,4,'****')
      return arr.join('')
    },
    // 设置性别
    setGender (gender) {
      this.userInfo.sex = gender
    },
    // 设置电话号码的可见性
    setPhoneVisibility (bool) {
      this.isShowPhoneNumber = bool
    },
    // 选择图片,并上传到服务器,然后赋值给当前的头像
    chooseImage () {
      let that = this
      wx.chooseImage({
        count: 1, // 默认一次选择照片的张数
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths
          // 上传图片到服务器
          wx.uploadFile({
            url: that.$server + 'mobileUpload/uploadImg.do',
            filePath: tempFilePaths[0],
            name: 'file',
            formData:{
              'from': 'userinfo'
            },
            success: function(result){
              var data = JSON.parse(result.data)
              if(data.code == 1) {
                that.userInfo.avatar = data.data.url
              }
              console.log(data)
            }
          })
        }
      })
    },
    // 监控入行日期改变
    joinDateChange (e) {
      this.userInfo.join_time = e.mp.detail.value + ' 00:00:00'
      this.join_timeShow = e.mp.detail.value
    },
    // 监控出生日期改变
    birthDateChange (e) {
      this.userInfo.birthday = e.mp.detail.value + ' 00:00:00'
      this.birthdayShow = e.mp.detail.value
    },
    // 提交修改用户基本信息
    async submitChange () {
      wx.navigateBack()
    }
  },
  onShow () {
    wx.getUserInfo({
      success: function(res) {
        console.log('获取微信的个人信息:',res)
      }
    })
  }
}

</script>
<style scoped>
  .avatarWrap{
    width: 100%;
    height: 230rpx;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10rpx;
  }
  .avatarContainer{
    width: 150rpx;
    height: 150rpx;
    position: relative;
  }
  .avatar{
    width: 150rpx;
    height: 150rpx;
    border-radius: 75rpx;
    background: #efefef;
  }
  .camera{
    width: 44rpx;
    height: 36rpx;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 9;
  }
  .mr50{
    margin-right: 50rpx;
  }
  .mt200{
    margin-top: 200rpx;
  }
</style>
