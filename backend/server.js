const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const user  = require('./module/user')

const app = express();

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/register');

app.post('/singin', (res,rep)=>{
    user.create(req.body)
    .then((data)=>res.json(data))
    .catch(e)=> res.json(e);
})