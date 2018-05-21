import Vue from 'vue'
import App from './App'
import store from '@/stores/index'
import asyncRequestMethod from './utils/asyncRequestMethod'
import mptoastReg from 'mptoast/registry'
Vue.config.productionTip = false
App.mpType = 'app'
mptoastReg(Vue)
// 挂载全局的store
Vue.prototype.store = store
// 挂载一个全局的图片路径,方便后期修改图片地址的时候,做统一修改
Vue.prototype.$imagePath = '../../static/'
// 配置 后端统一的请求路径
Vue.prototype.$server = 'http://abc.defghijk.lmn/opqrst/'
// 把 异步请求的方法挂载到this.$post上
Vue.prototype.$post = asyncRequestMethod.post


const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/userCenter/userCenter',            // 个人中心
      'pages/editUserInfo/editUserInfo',        // 编辑个人资料
      'pages/test/test',                        // 测试页面
    ],
    window: {
      backgroundTextStyle: 'dark',              // 下拉时的背景颜色(只能选dark跟light其中一个)
      navigationBarTitleText: 'mpvue-tutorials',// 顶部栏中间标题
      navigationBarBackgroundColor: '#0779fc',  // 顶部栏背景色
      navigationBarTextStyle: 'light'           // 顶部栏前景色(只能选black跟light其中一个)
    }
  }
}
