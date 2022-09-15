import { appState } from "../AppState.js";
import { sandboxPokemonService } from "../Services/SandboxPokemonService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawSandboxPokemon() {
  let template = ''
  appState.sandboxPokemon.forEach(p => template += p.SandboxPokemonTemplate)

  setHTML('SandboxPokemon', template)
}



export class SandboxPokemonController {
  constructor() {
    appState.on('sandboxPokemon', _drawSandboxPokemon)
    this.getSandboxPokemon()

  }
  async getSandboxPokemon() {
    try {
      await sandboxPokemonService.getPokemon()

    } catch (error) {
      console.error('[GetSandyPokemon', error);
      Pop.error(error)
    }
  }
  async addPokemon() {
    try {
      await sandboxPokemonService.addPokemon()

    } catch (error) {
      console.error('[AddPokemon]', error);
      Pop.error(error)
    }
  }
  async deletePokemon(id) {
    try {
      await sandboxPokemonService.deletePokemon(id)

    } catch (error) {
      console.error('[Del Pokemon]', error);
      Pop.error(error)
    }
  }



}
