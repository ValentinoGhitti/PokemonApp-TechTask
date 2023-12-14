import axios from 'axios'

export async function getPokemons() {
  try {
    const endpointUrl = process.env.VUE_APP_API_URL
    const query = `
      query PokemonGraphQLCall {
        pokemon_v2_pokemon {
          name
          height
          weight
          base_experience
          pokemon_v2_pokemonabilities {
            pokemon_v2_ability {
              name
            }
          }
          pokemon_v2_pokemontypes(limit: 1) {
            pokemon_v2_type {
              name
            }
          }
          pokemon_v2_pokemonsprites(limit: 1) {
            sprites
          }
        }
      }
    `

    const request = await axios.post(
      endpointUrl,
      { query },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )

    const response = request.data.data
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}
