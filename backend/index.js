const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userSchema = require('./models/user');

const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Ecommerce");

app.post('/login', (req, res)=>{
  const {name, password} =req.body;
  userSchema.findOne({name: name})
  .then((user)=>{
    if(user){
      if(user.password === password){
        res.json("Success")
      }else{
        res.json("Invalid Password")
      }
    }else{
      res.json("User Not Found")
    }
  
  })
  
})

app.post('/signin', (req, res)=>{
userSchema.create(req.body)
  .then((data) => res.json(data))
  .catch((err) => res.json(err));

 })

app.listen(3001, ()=>{
  console.log("Server is running");
})