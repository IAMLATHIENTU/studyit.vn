const router = require('express').Router()
const controller = require('../controllers/index.controller')

router.get('/', controller.main)

module.exports = router