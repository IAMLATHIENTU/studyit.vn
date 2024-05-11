const router = require('express').Router()
const controller = require('../controllers/users.controller')

router.get('/:id', controller.main)

module.exports = router