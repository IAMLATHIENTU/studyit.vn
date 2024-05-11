const database = require('../model/Database')

class controller {
    async main(req,res) {
        var data = await database.getUser(req.params.id)
        if(data.length === 0) return res.send('Invalid user ID')
        else return res.send(data[0].username)
    }
}

module.exports = new controller