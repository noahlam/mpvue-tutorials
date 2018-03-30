import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const toastStore = new Vuex.Store({
  state: {
    show:false,
    text:'提示',
    duration: 1500,
    modalStyles:null,
    modalClass:null,
    textStyles:null,
    textClass:null
  },
  getters:{
    'GET_TOAST_SHOW': function (state) {
      return state.show
    },
    'GET_TOAST_TEXT': function (state) {
      return state.text
    },
    'GET_TOAST_DURATION': function (state) {
      return state.duration
    },
    'GET_TOAST_TEXT_CLASS_NAME': function (state) {
      return state.textClass
    },
  },
  mutations: {
    showToast (state,data) {
      if(state.show) return
      let dt = {
        show : true,
        text : data.text ||'提示',
        duration: data.duration || 1500,
        textClass : data.textClass || '',
      }

      state = Object.assign(state,dt)

      setTimeout(() => {
        state.show = false
      },data.duration)
    }
  }
})

export default  toastStore
