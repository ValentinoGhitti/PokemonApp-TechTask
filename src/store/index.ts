import { createStore } from 'vuex'
import { getPokemons } from '../api/getPokemon'

export default createStore({
  state: {
    pokemons: [],
    pokemonsFIlter: []
  },
  getters: {
  },
  mutations: {
    setPokemons( state, payload ) {
      state.pokemons = payload
    },
    setPokemonsFIlter( state, payload ) {
      state.pokemonsFIlter = payload
    }
  },
  actions: {
    async getPokemons({commit}) {
      try {
        await getPokemons()
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})