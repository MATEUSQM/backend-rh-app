const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'teste',
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/api/get', (req, res) =>{
    const sqlSelect = "SELECT * FROM table_teste";
    db.query(sqlSelect,(err, result) =>{
        console.log(result)
    })
})

app.delete('/api/delete/:name', (req, res) => {
    const name = req.params.name
    const sqlDelete = "DELETE FROM table_teste WHERE name = ?";

    db.query(sqlDelete, name, (err, result) => {
        console.log(result)
    })
})

app.post('/api/insert', (req,res) =>{

    const name = req.body.nameV
    const review = req.body.reviewV

    const sqlInsert = "INSERT INTO table_teste (name, review) VALUES (?,?)"
    db.query(sqlInsert, [name, review], (err, result) =>{
        console.log(result)
    })
})

app.listen(3001, () =>{
    console.log('running')
})