const axios = require('axios')

const getPokemonById = (pokemon) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => {
      console.log(response.data.name);
    })
    .catch(err => console.log(err.message))
}

getPokemonById('adsrflgahsdofj')

// SWAPI Pidan a una personaje y a su planeta de nacimiento.

// NASA: Los asteroides potencialmente peligrosos para la tierra, de hoy en 5 días