const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')

const app = express()

// config app
app.set('views',__dirname+'/views')
app.use(express.static(__dirname+'/public'))
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// require routes
const indexRoute = require('./routes/index.route')
const loginRoute = require('./routes/login.route')
const counselRoute = require('./routes/counsel.route')
const userRoute = require('./routes/user.route')
const logoutRoute = require('./routes/logout.route')

app.use('/',indexRoute)
app.use('/login',loginRoute)
app.use('/counsel',counselRoute)
app.use('/user',userRoute)
app.use('/logout',logoutRoute)

app.listen(5555)