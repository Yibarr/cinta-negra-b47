const { Router } = require('express')

const router = Router()

router.get('/directors', (req, res) => {
  res.send('Directors')
})

router.get('/directors/:id', (req, res) => {
  res.send(`Director id: ${req.params.id}`)
})



module.exports = router