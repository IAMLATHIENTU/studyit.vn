const router = require('express').Router()
// const controller = require('../controllers/index.controller')

router.get('/', (req,res)=>{
    res.clearCookie('user_token')
    res.redirect('/')
})

module.exports = router