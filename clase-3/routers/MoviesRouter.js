const { Router } = require('express')
const { Movie } = require('../models/index.js')

const router = Router()

router.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find().populate('directors')

    res.send({ message: 'ok', movies })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
})

router.post('/movies', async (req, res) => {
  try {
    const { body } = req

    const newMovie = new Movie(body)
    const movie = await newMovie.save()

    res.send({ message: 'ok', movie })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
})

router.get('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params

    const movie = await Movie.findById(id)
    
    res.send({ message: 'ok', movie })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
})

router.patch('/movies/:id', async (req, res) => {
  try {
    const { body, params } = req
  
    const movie = await Movie.findById(params.id)
  
    Object.assign(movie, body)
  
    await movie.save()
  
    res.send({ message: 'ok', movie })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
  
  router.delete('/movies/:id', async (req, res) => {
    try {
      const { id } = req.params

      const deletedMovie = await Movie.findByIdAndDelete(id)

      res.send({ message: 'deleted', movie: deletedMovie })

    } catch (error) {
      res.status(400).send({ error: error.message })
    }
  })

})

module.exports = router