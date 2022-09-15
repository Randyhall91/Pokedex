import { appState } from "../AppState.js";
import { pokemonService } from "../Services/PokemonService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";



function _drawActivePokemon() {
  if (appState.activePokemon == null) { return }
  setHTML('active-pokemon', appState.activePokemon.PokemonTemplate)
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