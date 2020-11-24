const { Router } = require('express')
const DirectorsRouter = require('./DirectorsRouter.js')
const MoviesRouter = require('./MoviesRouter.js')

const router = Router()

router.use(DirectorsRouter)
router.use(MoviesRouter)

module.exports = router