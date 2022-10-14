import { createStore } from 'vuex'

export default createStore({
  //Impede que o state seja alterado diretamente, ex: v-model
  strict: true,
  state: {
    user: {
      first_name: 'John',
      last_name: 'Snow'
    },
    cart: [],
  },
  getters: {
    fullName(state) {
      return `${state.user.first_name} ${state.user.last_name}`
    }
  },
  mutations: {
    //as funções estão em letra maiúscula apenas por causa da convenção, mas nao muda nada. É uma forma de identificar no
    // componente o vuex
    SAVE(state, payload) {
      // console.log(state, payload)
      state.user.first_name = payload
    },
    SAVE_LAST_NAME(state, payload) {
      state.user.last_name = payload
    },
    ADD_TO_CART(state, payload) {

      const existingProduct = state.cart.find(o => o.id === payload.id)

      if(existingProduct){
        existingProduct.qtd += 1
      }
      else{
        payload.qtd = 1
        state.cart.push(payload);
      }
    },
    REMOVE_PRODUCT(state, payload) {
      const existingProduct = state.cart.find(o => o.id === payload.id)

      if (existingProduct && existingProduct.qtd > 1) {
        existingProduct.qtd -= 1
      } else {
        const id = state.cart.findIndex(o => o.id === payload.id)
        state.cart.splice(id, 1)
      }
    }
  },
  actions: {
    saveFirstName(context, payload) {
      context.commit('save', payload)

    }
  },
  modules: {
    users: {
      state: () => ({
        first_name: "Testando os módulos"
      }),
      mutations: {},
      getters: {},
      actions: {}
    },
    carrinho: {
      state: () => ({
        teste: "acc?lvpbetmkionopdbgfm os módulos"
      }),
      mutations: {},
      getters: {},
      actions: {}
    }
  }
})
