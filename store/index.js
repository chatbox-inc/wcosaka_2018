import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    prises: []
  },
  getters: {
    byColor:(state) => (color) => {
      for(let prise of state.prises){
        if(prise.color === color){
          return prise
        }
      }
    }
  },
  mutations: {
    update (state,values) {
      state.prises = []
      for(let prise of values){
        state.prises.push(Object.assign({},prise))
      }
      if(localStorage){
        localStorage.setItem("GAMEDATA",JSON.stringify(values))
      }
    },
    sub(state,color){
      for(let index in state.prises){
        if(state.prises[index].color === color){
          state.prises[index].amount --
        }
      }
      if(localStorage){
        localStorage.setItem("GAMEDATA",JSON.stringify(state.prises))
      }
    }
  }
})

export default store
