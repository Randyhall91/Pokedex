import { ActivePokemon } from "./ActivePokemon.js"
import { Pokemon } from "./Pokemon.js"



export class SandboxPokemon extends ActivePokemon {
  constructor(data) {
    super(data)
    this.url = data.img


  }




  // TODO add this back to div if we can figure out how to refrence the original URL link to pull details
  // class = "selectable no-select p-3" onclick = "app.activePokemonController.getPokemonDetails('${this.url}')"
  get SandboxPokemonTemplate() {
    return/*html*/`
  
    <div class="d-flex justify-content-between">
    <li>${this.name}</li>
    <i class="mdi mdi-close" onclick="app.sandboxPokemonController.deletePokemon('${this.id}')"></i>
    </div>

`
  }

}