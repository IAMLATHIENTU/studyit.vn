require('dotenv').config()

const jwt = require('jsonwebtoken')

class controller {
    main(req,res) {
        alert('dự án chỉ với mục đích học tập nên mong ae góp ý 💖')
        try {
            var token = req.cookies['user_token']
            console.log(token)
            var secret = process.env.LOGIN_SECRET_TOKEN
            if(token === undefined || token === null) return res.render('index.ejs')
            
            const verify = jwt.verify(token,secret)
            var data = {
                head:'helloworld',
                payload: verify
            }
            if(verify) {
                console.log(verify)
                return res.render('index.ejs')
            } else {
                return res.render('index.ejs')
            }
        } catch (error) {
            console.log(error)
            res.render('index.ejs',{data})
        }
    }
}

module.exports = new controller