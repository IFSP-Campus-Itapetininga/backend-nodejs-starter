const { Router } = require('express')
const exampleController = require('./controllers/example')

const ROUTES_PREFIX = '/example'
const router = Router()

router.get('/', exampleController.helloWorld)

module.exports = {
  ROUTES_PREFIX,
  router
}
