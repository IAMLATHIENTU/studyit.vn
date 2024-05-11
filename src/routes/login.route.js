const router = require('express').Router()
const controller = require('../controllers/login.controller')

router.get('/', controller.main)

router.post('/auth',controller.auth)

module.exports = router