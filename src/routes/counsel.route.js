const router = require('express').Router()
const controller = require('../controllers/counsel.controller')

router.get('/tu-van-hoc-be-hay-fe', controller.TuVanBackEndFrontEnd)

router.get('/create', controller.createCounsel)

module.exports = router