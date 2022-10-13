<template>
  <div class="home">
    <h1>{{$store.state.user.first_name}}</h1>
    {{text}}
    <input type="text" v-model="text">
    <button @click="save">Salvar</button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      text: '',
    }
  },
  
  methods: {
    save() {
      // Action
      // this.$store.dispatch('save', this.text)

      //Mutation
      this.$store.commit('save', this.text)
    }
  }

}
</script>
