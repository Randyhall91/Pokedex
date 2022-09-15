


export class Pokemon {

  constructor(data) {
    this.name = data.name
    this.url = data.url
  }

  get PokemonTemplate() {
    return/*html*/`
    <div class="selectable no-select p-3" onclick="app.activePokemonController.getPokemonDetails('${this.url}')">
    <li>${this.name}</li>
    </div>
  `
  }


}

