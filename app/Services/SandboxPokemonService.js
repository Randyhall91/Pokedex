import { appState } from "../AppState.js"
import { SandboxPokemon } from "../Models/SandboxPokemon.js"
import { SandboxServer } from "./AxiosService.js"



class SandboxPokemonService {
  async addPokemon() {
    if (!appState.activePokemon) return

    // @ts-ignore
    const alreadycaught = appState.sandboxPokemon.find(p => p.name == appState.activePokemon.name)
    if (alreadycaught) {
      throw new Error('You already have one of these')
    }
    // console.log(appState.activePokemon);

    const res = await SandboxServer.post(`/api/${appState.user}/pokemon`, appState.activePokemon)
    // console.log(res.data);
    const newPokemon = new SandboxPokemon(res.data)
    appState.sandboxPokemon = [...appState.sandboxPokemon, newPokemon]
  }



  async deletePokemon(id) {
    await SandboxServer.delete(`/api/${appState.user}/pokemon/${id}`)
    appState.sandboxPokemon = appState.sandboxPokemon.filter(p => p.name != id)
  }



  async getPokemon() {
    const res = await SandboxServer.get(`/api/${appState.user}/pokemon`)
    appState.sandboxPokemon = res.data.map(p => new SandboxPokemon(p))
  }



}
export const sandboxPokemonService = new SandboxPokemonService()