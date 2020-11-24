const axios = require('axios')
const { response } = require('express')

// const getPokemonById = (pokemon) => {
//   axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//     .then(response => {
//       console.log(response.data.name);
//     })
//     .catch(err => console.log(err.message))
// }

// getPokemonById('adsrflgahsdofj')


const getPokemonById = async (pokemon) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    console.log(response.data.name)
  } catch (error) {
    console.log(error.message)
  }
}
// getPokemonById('mewtwfxvcbsdo')

const getPeopleAndPlanet = async(people) => {
  try {
    const responsePeople = await axios.get(`https://swapi.dev/api/people/${people}`)
    const planetURI = responsePeople.data.homeworld
    const responsePlanet = await axios.get(planetURI)
    const character = responsePeople.data.name
    const planet = responsePlanet.data.name
    console.log(`persona: ${character}, planeta: ${planet}`)
  } catch (error) {
    console.log(error.message)
  }
}

getPeopleAndPlanet(1)

// SWAPI Pidan a una personaje y a su planeta de nacimiento.

// NASA: Los asteroides potencialmente peligrosos para la tierra, de hoy en 5 días