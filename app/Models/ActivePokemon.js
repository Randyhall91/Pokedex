




// TODO make this inherit from Pokemon...maybe
export class ActivePokemon {

  constructor(data) {
    this.name = data.name
    this.number = data.id
    this.type = data.type
    this.height = data.height
    this.weight = data.weight
    this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.number}.png`
    this.id = data.id
  }

  get PokemonTemplate() {
    return/*html*/`
  <h3>${this.name}</h3>
          <div class="p-3">
            <img class="img-fluid" src=${this.img} alt="">
          </div>
          <div class="border border-dark p-3">
            <p>Height:${this.height} | Weight:${this.weight} | Type:${this.type}</p>
            <div class="text-end">
              
              <button class="btn btn-outline-danger" onclick="app.sandboxPokemonController.addPokemon()">Catch</button>
            </div>
          </div>
  `
  }


}

