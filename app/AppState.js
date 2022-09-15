import { ActivePokemon } from "./Models/ActivePokemon.js"
import { Pokemon } from "./Models/Pokemon.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', Value)

  /** @type {import('./Models/Pokemon').Pokemon[]} */
  pokemon = []

  /** @type {import('./Models/ActivePokemon.js').ActivePokemon | null} */
  activePokemon = null


  /** @type {import('./Models/SandboxPokemon').SandboxPokemon[]} */
  sandboxPokemon = []

  user = prompt('What your name?')


}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
