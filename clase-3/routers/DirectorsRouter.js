const { Router } = require('express')
const { Director } = require('../models/index.js')

const router = Router()

router.get('/directors', async (req, res) => {
  try {
    const directors = await Director.find().populate('movies')

    res.send({ message: 'ok', directors })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
})

router.post('/directors', async (req, res) => {
  try {
    const { body } = req

    const newDirector = new Director(body)
    const director = await newDirector.save()

    res.send({ message: 'ok', director })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
})

router.get('/directors/:id', async (req, res) => {
  try {
    const { id } = req.params

    const director = await Director.findById(id)
    
    res.send({ message: 'ok', director })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
})

router.patch('/directors/:id', async (req, res) => {
  try {
    const { body, params } = req
  
    const director = await Director.findById(params.id)
  
    Object.assign(director, body)
  
    director.save();
  
    res.send({ message: 'ok', director })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }

  router.delete('/directors/:id', async (req, res) => {
    try {
      const { id } = req.params

      const deletedDirector = await Director.findByIdAndDelete(id)

      res.send({ message: 'deleted', movie: deletedDirector })
    } catch (error) {
      res.status(400).send({ error: error.message })
    }
  })

})



module.exports = router