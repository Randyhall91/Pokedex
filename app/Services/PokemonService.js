import { appState } from "../AppState.js"
import { ActivePokemon } from "../Models/ActivePokemon.js"
import { Pokemon } from "../Models/Pokemon.js"
import { PokemonServer } from "./AxiosService.js"



class PokemonService {

  async getPokemonDetails(url) {
    const res = await PokemonServer.get(url)
    appState.activePokemon = new ActivePokemon(res.data)
    console.log(appState.activePokemon);

  }
  async getApiPokemon() {
    const res = await PokemonServer.get('/api/v2/pokemon/')
    console.log(res.data.results);
    appState.pokemon = res.data.results.map(p => new Pokemon(p))
  }

}



export const pokemonService = new PokemonService()