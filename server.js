const cors = require ('cors');
const express = require('express');
const app = express();

app.use(cors())

app.get('/', function(req, res){
    return res.json([
        {name : "Karen"},
        {name: "Madha"}
    ]) 
});
app.listen('3000')
