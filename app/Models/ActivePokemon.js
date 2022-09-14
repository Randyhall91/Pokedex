




// TODO make this inherit from Pokemon...maybe
export class ActivePokemon {

  constructor(data) {
    this.name = data.name


  }

  get PokemonTemplate() {
    return/*html*/`
  <h3>${this.name}</h3>
          <div class="p-3">
            <img class="img-fluid" src="${this.url}" alt="">
          </div>
          <div class="border border-dark p-3">
            <p>Info</p>
            <div class="text-end">
              
              <button class="btn btn-outline-danger">Catch</button>
            </div>
          </div>
  `
  }


}

