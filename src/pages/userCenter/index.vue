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
    <mptoast></mptoast>
    <view @tap="showTestToast">测试按钮</view>
  </scroll-view>
</template>

<script>

  import topInfo from './components/topInfo'
  import counter from './components/counter'
  import functionList from './components/functionList'
  import switchIdentity from './components/switchIdentity'
  import mptoast from 'mptoast'
  import miment from '@/utils/miment'
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
      showTestToast() {
        this.$mptoast(`请输入正确网址，如xxxx.com`, 'none',1500)
      }
    },
    onShow () {
      // var ddd = miment('2018-05-05')
      // 1522593599312
      // let str = ddd.distance().format('YYYY年MM月DD日', true)
      // let str = ddd.distance('2018-05-05')
      // let str = ddd.daysInMonth()
      // let str = ddd.firstDay().format()
      // console.log(str)
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
