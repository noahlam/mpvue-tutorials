import Vue from 'vue'
import Vuex from 'vuex'

import testStore from '@/pages/test/store'
import userCenterStore from '@/pages/userCenter/store'

Vue.use(Vuex)
const store = new Vuex.Store({
  // 做模块化处理,每个功能一个store.js文件,然后统一在这边引入
  modules: {
    userCenterStore,
    testStore,
  }
})


export default  store
