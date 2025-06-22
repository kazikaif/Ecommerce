 
const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const userSchema = mongoose.model('users', Schema);

module.exports= userSchema; 