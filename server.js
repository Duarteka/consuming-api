const express = require('express')
const app = express()

app.get('/', function(req, res){
    return res.json({message : 'ok'}) 
});
app.listen('3000')
