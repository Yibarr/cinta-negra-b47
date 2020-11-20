// var variable1 = 1001.788
// var user = 'Yael'


// backtick
// console.log(`El costo total es de $ ${ variable1 * 2 + 2 } USD, ${user}`)



// Variables
// scope
// {
//   var saludo = 'Hola'
//   let despedida = 'Adiós'

// }
//   despedida += ', Gunter'
//   console.log(despedida)


// TypeError: Assignment to constante variable.
// const goodbye = 'Adiós'
// goodbye += ', Gunter'
// console.log(goodbye)


// const arr = [1, 2, 'adsjfnakj', () => 'Hola']
// const saludar = arr[3]
// console.log(saludar())

// const perro = {
//   'dog name': "Gunter",
//   age: 2,
//   ladrar: () => `${this['dog name']}, me llaman y toy ladrando`,
//   ladrar: () => {
//     1 + 1
//     return `${this['dog name']}, me llaman y toy ladrando`
//   } ,
//   ladrar1() {
//     return `${this['dog name']}, me llaman y toy ladrando`
//   }
// }
// perro.age = 23
// console.log(perro['age'])
// console.log(perro.age)
// console.log(perro.ladrar1())

// const mascotas = ['Robin', 'Gunter', 'Pinky', 'Michi', 'gato']

// mascotas[0] = 'Firulais'
// mascotas.splice(1, 0, 'Firulais')
// console.log(mascotas);

// for (let i = 0; i < mascotas.length; i++) {
//   const element = mascotas[i];
//   console.log(element.toUpperCase());
// }


// const pencilFactory = (log) => {
//   log.raw = false
//   log.pencils = log.weight * 100

//   return log
// }

// const tronco1 = {
//   weight: 100,
//   raw: true
// }
// const tronco2 = {
//   weight: 57,
//   raw: true
// }
// const tronco3 = {
//   weight: 280,
//   raw: true
// }

// const pencils = pencilFactory(tronco2)

// console.log(pencils)


// Hacer una función que se encargue de mostrar los números del 1 al 100
// Pero que lo múltiplos de 3 sean reemplazados por la palabra "Fizz"
// , los múltiplos de 5 sean reemplazados por "Buzz", y si son múltiplos de 3 y de 5
// se deberá reemplazar por "FizzBuzz"

// const fizzBuzz = () => {
//   for (let i = 1; i <= 100; i++) {
//     if (i%5===0 && i%3===0){
//         console.log("FizzBuzz")
//     }else if(i%3===0){
//         console.log("Fizz")
//     }else if(i%5===0){
//         console.log("Buzz")
//     }else{
//         console.log(i)
//     }
//   }
// }

// Una función que reciba como parámetro un arreglo de calificaciones y obtenga el promedio
const calif = [{ calif: 8, student: 'Y' }, { calif: 5, student: 'D' }, { calif:  10, student: 'B' }, { calif:  6.3, student: 'Z' } ,{ calif:  5, student: 'W' } , { calif:  3, student: 'S' }, { calif:  10, student: 'P' }, { calif:  9, student: 'E' }, { calif:  8, student: 'K' }, { calif:  7, student: 'L' }]
const califB = [6,7,8,9,10,8,5,4,3,7,8,7,6,6,6,6,6,6,6,9,9,10]


const mean = (array = []) => {
  const reducer = (acc, calif) => acc + calif
  const suma = array.reduce(reducer, 0)
  return suma / array.length
}

// console.log(mean(calif))


// Una función que reciba como parámetro un arreglo de calificaciones y obtenga la mediana

const median = (array = [], key, direction = 'desc') => {
  const sortFunction = (a, b) => {
    let res = 0
    if (a[key] > b[key]) {
      res = 1;
    }
    if (a[key] < b[key]) {
      res = -1
    }
    return direction === 'asc'
      ? res
      : - res
  }
  let res = 0
  const sortedCalif = array.sort(sortFunction)
  if (array.length % 2 === 0) {
    const x = sortedCalif.length / 2
    const y = x + 1
    const medianStudents = sortedCalif.slice(x, y + 1)
    res = { students: medianStudents, median: mean([x, y]) }
  } else {
    const index = Math.floor(sortedCalif.length / 2)
    res = array[index]
  }
  return res
}

// console.log(median(calif, 'calif', 'asc'))


//Una función que eciba como parámetro un arreglo de calificaciones y obtenga la moda

const moda = (array = []) => {
  const reducer = (acc, element) => {
    if (acc[element.calif]) {
      acc[element.calif] += 1 
    } else {
      acc[element.calif] = 1
    }
    return acc
  }
  const count = array.reduce(reducer, {})
  const res = Object.entries(count);
  const max = res.reduce((acc, element) => {
    if (acc[1] <= element[1]) {
      acc = element
    }
    return acc
  }, [0 ,0]) 
  console.log(max);
}

moda(calif)
