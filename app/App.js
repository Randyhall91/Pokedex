import { ActivePokemonController } from "./Controllers/ActivePokemonController.js";
import { PokemonController } from "./Controllers/PokemonController.js";
import { SandboxPokemonController } from "./Controllers/SandboxPokemonController.js";


class App {

  pokemonController = new PokemonController
  sandboxPokemonController = new SandboxPokemonController
  activePokemonController = new ActivePokemonController
}

window["app"] = new App();
