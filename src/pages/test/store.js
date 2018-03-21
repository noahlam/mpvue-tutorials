const store = {
  state: {
    count: 0
  },
  getters:{
    'GET_COUNT': function (state) {
      return state.count
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    },
  }
}

export default store
