<script lang="ts">
import { defineComponent } from 'vue'
import { getPokemons } from '../api/getPokemon'

export default defineComponent({
  name: 'HomeView',
  components: {},
  async mounted() {
    try {
      await getPokemons()
    } catch (error) {
      console.error('errorr:', error)
    }
  },
})
</script>

<template>
  <div class="home">
    <!-- Contenido de tu componente -->
  </div>
</template>
