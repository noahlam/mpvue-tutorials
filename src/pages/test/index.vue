<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <button @click="updateFlag">updateFlag</button>

  </div>
</template>

<script>

export default {
  computed: {
    count () {
      return this.store.getters.GET_COUNT
    },
    getFlag(){
      return this.store.getters.GET_DATA
    }
  },
  methods: {
    increment () {
      this.store.commit('increment')
    },
    decrement () {
      this.store.commit('decrement')
    },
    updateFlag () {
      this.store.commit('update_DATA', '我是更改后的内容')
    }
  }
}

</script>
<style scoped>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}

</style>
