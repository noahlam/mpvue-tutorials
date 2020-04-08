import Vue from 'vue'
import App from './App'
import store from '@/stores/index'
import asyncRequestMethod from './utils/asyncRequestMethod'

import mptoastRegistry from 'mptoast/registry'
mptoastRegistry(Vue)



Vue.config.productionTip = false
App.mpType = 'app'

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

  }
}
