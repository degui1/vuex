import { createStore } from 'vuex'

export default createStore({
  //Impede que o state seja alterado diretamente, ex: v-model
  strict: true,
  state: {
    user: {
      first_name: 'John'
    }
  },
  getters: {
  },
  mutations: {
    save(state, payload) {
      // console.log(state, payload)
      state.user.first_name = payload
    }
  },
  actions: {
    save(context, payload) {
      context.commit('save', payload)

    }
  },
  modules: {
  }
})
