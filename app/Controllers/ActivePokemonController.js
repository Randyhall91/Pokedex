import { appState } from "../AppState.js";
import { pokemonService } from "../Services/PokemonService.js";
import { Pop } from "../Utils/Pop.js";



function _drawActivePokemon() {

}


export class ActivePokemonController {
  constructor() {
    appState.on('activePokemon', _drawActivePokemon)
    // this.getPokemonDetails()
  }


  async getPokemonDetails(url) {
    try {
      await pokemonService.getPokemonDetails(url)

    } catch (error) {
      console.error('[GetDetails', error);
      Pop.error(error)

    }
  }
}