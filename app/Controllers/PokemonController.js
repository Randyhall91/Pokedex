import { appState } from "../AppState.js";
import { pokemonService } from "../Services/PokemonService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawApiPokemon() {
  let template = ''
  appState.pokemon.forEach(p => template += p.PokemonTemplate)

  setHTML('api-pokemon', template)
}



export class PokemonController {
  constructor() {
    appState.on('pokemon', _drawApiPokemon)
    this.getApiPokemon()
  }


  async getApiPokemon() {
    try {
      await pokemonService.getApiPokemon()
    } catch (error) {
      console.error('[GetPokemon]', error);
      Pop.error(error)

    }
  }
}