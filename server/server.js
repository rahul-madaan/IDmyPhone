const express = require('express')
const server = express()
const mysql = require('mysql')
const cors = require('cors')

server.use(cors())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root',
    database: 'phone'
})

server.get('/retrieve', (req,res) =>{
    db.query('SELECT * FROM user_login',(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})


server.listen(3001,() =>{
console.log("server is running on port 3001")
})