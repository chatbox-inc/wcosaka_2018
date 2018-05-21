import Vuex from 'vuex'

const default_values = [
  {
    name: "サーモスタンブラー",
    amount: 50,
    color: "#DE3047"
  },
  {
    name: "特製タオル",
    amount: 50,
    color: "#FF8900"
  },
  {
    name: "アクリルキーホルダー",
    amount: 50,
    color: "#8B7FEB"
  },
  {
    name: "マスキングテープ",
    amount: 200,
    color: "#A9CB24"
  },
  {
    name: "記念テープ",
    amount: 200,
    color: "#0EA3CC"
  },
]

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
    update (state,_values = null) {
      const values = _values || default_values
      state.prises = []
      for(let prise of values){
        state.prises.push(Object.assign({},prise))
      }
      if(_values && localStorage){
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
