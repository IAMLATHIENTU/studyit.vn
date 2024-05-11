const mysql = require('mysql')

var connection = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'studyit.vn'
})

class Database {
    async getUser(id) {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM users WHERE id = "${id}"`,(err,rows)=>{
                if(err) return reject(err)
                return resolve(rows)
            })
        })
    }
}

module.exports = new Database