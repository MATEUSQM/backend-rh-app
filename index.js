const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send('hello word2222')
})

app.listen(3001, () =>{
    console.log('running')
})