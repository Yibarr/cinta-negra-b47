const express = require('express')

const app = express()

app.use(express.json({ extended: true }))

app.get('/', (request, response) => {
  // response.json({
  //   message: 'Hola'
  // })

  response.send(`name, age \n gunter, 2`)
})

// app.get('/pokemon/:id', async (req, res) => {
//   const id = req.params.id
//   res.status(200).send(id)
// })


// app.get('/pokemon', (req, res) => {
//   const queries = req.query
//   // url?start=1&end=2
//   console.log(queries.start)

//   res.send(queries)
// })

// app.post('/posts', (req, res) => {
//   const body = req.body
//   res.send(body)
// })

// Crear tres endpoints uno que obtenga la moda, otro que obtenga la mediana y otro que obtenga la media

app.listen(3006, () => {
  console.log('Server iniciado')
})
