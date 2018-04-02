<template>
  <scroll-view :scroll-y="showModal?false:true" class="container">
    <topInfo />
    <counter />
    <view class="mt10">
      <functionList/>
    </view>

    <view class="cell">
      <view class="cellLeft">{{identityInChinese}} (当前角色)</view>
      <view class="cellRight" @tap="switchIdentitys">切换</view>
    </view>

    <view v-if="showModal" @tap.stop="showModal=false" class="modal_container">
      <switchIdentity v-model="showModal"/>
    </view>
    <view @tap="ccc">123123</view>
    <mptoast />
  </scroll-view>
</template>

<script>

  import topInfo from './components/topInfo'
  import counter from './components/counter'
  import functionList from './components/functionList'
  import switchIdentity from './components/switchIdentity'
  import mptoast from 'mptoast'
  import moment from '@/utils/dt'
  export default {
    components: {topInfo, counter, functionList, switchIdentity,mptoast},
    data () {
      return {
        showModal: false,  // 显示遮罩层
      }
    },
    computed: {
      identityInChinese () {
        return this.store.getters.GET_IDENTITY_IN_CHINESE
      },
      userInfo () {
        this.store.getters.GET_USERINFO
      }
    },
    methods: {
      // 切换用户角色
      switchIdentitys () {
        this.showModal = true
      },
      ccc() {
        this.$mptoast('我是弹窗内容',1500)
      }
    },
    onShow () {
      var ddd = moment()
      ddd.get()
      console.log(ddd.getFullYear())
    }
  }

</script>
<style scoped>
  .cell {
    height: 100rpx;
    width: 100%;
    box-sizing: border-box;
    padding: 0 20rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10rpx;
    background: #fff;
  }

  .cellLeft {
    font-size: 28rpx;
    color: #333;
  }

  .cellRight {
    font-size: 24rpx;
    color: var(--blue);
  }
</style>
