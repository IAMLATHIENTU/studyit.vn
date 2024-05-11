require('dotenv').config()

const jwt = require('jsonwebtoken')

class controller {
    main(req,res) {
        return res.render('login.ejs')
    }

    auth(req,res) {
        var {username, password} = req.body
        var sign = jwt.sign({username,password},process.env.LOGIN_SECRET_TOKEN,{expiresIn:'1h'})

        // write to cookie
        res.cookie('user_token',sign)
        return res.redirect('/')
    }
}

module.exports = new controller