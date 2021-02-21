const cors = require('cors');
const express = require('express');
const axios = require('axios');//fetch similar

const app = express();
app.use(cors())

app.get('/', function(req, res){

    const { data } = await axios('https://rickandmortyapi.com/api/character');
    console.log(data);

    return res.json(data);
});
app.listen('3000')
