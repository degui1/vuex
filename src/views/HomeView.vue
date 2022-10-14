<template>
  <div class="">

    <div class="row">
      <div class="col" v-for="product in products" :key="product.id">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div class="card-body">
              <p class="card-text">{{product.name}}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button @click="ADD_TO_CART(product)" type="button" class="btn btn-sm btn-outline-secondary">Adicionar</button>
                  <button v-if="!!qtdProduct(product.id)" @click="REMOVE_PRODUCT(product)" type="button" class="btn btn-sm btn-outline-secondary">Remover</button>
                </div>
                <small v-if="!!qtdProduct(product.id)" class="text-muted">
                  {{qtdProduct( product.id )}}
                </small>
              </div>
            </div>
          </div>
        </div>
    </div>

    <br>

    <pre>
      {{cart}}
    </pre>



    <br><br><br><br><br>
    <h1>{{fullName}}</h1>
    {{text}}
    <input type="text" v-model="name">
    <input type="text" v-model="lastName">
    <!-- <button @click="save">Salvar</button> -->
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      text: '',
      products: [
        {id: 1, name: 'Produto 1'},
        {id: 2, name: 'Produto 2'},
        {id: 3, name: 'Produto 3'}
      ]
    }
  },
  computed: {
    ...mapGetters(['fullName']),
    ...mapState({
      user: state => state.user,
      cart: state => state.cart
    }),

    name: {
      get() {
        return this.user.first_name;
      },
      set(value) {
        this.SAVE(value)
      }
    },
    lastName: {
      get() {
        return this.user.last_name;
      },
      set(value) {
        this.SAVE_LAST_NAME(value);
      }
    },
    // fullName() {
    //   return `${this.name}  ${this.lastName}`
    // }
  },
  methods: {
    ...mapMutations(['ADD_TO_CART', 'REMOVE_PRODUCT', 'SAVE', 'SAVE_LAST_NAME']),
    ...mapActions(['saveFirstName']),

    save() {
      // Action
      // this.$store.dispatch('saveFirstName', this.text)
      // COM MAPEAMENTO
      // this.saveFirstName(this.text)

      //Mutation
      // this.$store.commit('save', this.text)
    },
    // saveProduct(product) {
    //   // this.$store.commit('addToCart', product)
    // COM MAPEAMENTO
    //   this.addToCart(product)
    // },
    qtdProduct(id) {
      // return this.$store.state.cart.find(o => o.id === id)?.qtd || 0
      return this.cart.find(o => o.id === id)?.qtd || 0
    }
  }

}
</script>
