import toastStore from '@/components/toast/store'
import Vue from 'vue'


function toast(data,duration=1500,textClass=''){
  if(typeof data === 'string' || typeof data === 'number'){
    toastStore.commit('showToast',{text:data,duration:duration,textClass:textClass})
  }
  if(typeof data === 'object'){
    toastStore.commit('showToast',data)
  }
}
export default function registryToast () {
  Vue.prototype.$toastStore = toastStore
  Vue.prototype.$toast = toast
}
