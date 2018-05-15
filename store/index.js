import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    prises: [
      {
        name: ""
      }
    ]
  },
  mutations: {
    increment (state) {
      state.counter++
    }
  }
})

export default store
