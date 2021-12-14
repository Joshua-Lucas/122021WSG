const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '../clientBuild')))

app.get("/", function(req, res){
    res.sendFile(path.join( __dirname, '../clientBuild', 'index.html'))
})


app.listen(3000)