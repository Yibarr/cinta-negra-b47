const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = 3006
const MONGO_URI = ''


const options = { useNewUrlParser: true, useUnifiedTopology: true }



mongoose.connect(MONGO_URI, options)
  .then(res => console.log('Connected to MongoDB'))
  .catch(err => console.log(err.message))



app.get('/', (req, res) => {
  res.send('Te damos la bienvenida a nuestra API')
})

app.listen(PORT, () => {
  console.log(`Server initialized on PORT: ${PORT}`)
})