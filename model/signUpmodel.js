const mongoose = require('mongoose');
const db =require('../config/db');


const { Schema }=mongoose;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase:true,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  bloodType: {
    type: String,
    required: true
  },
  role: {
    type: Number,
    required: true,
    
  }
});
const UserModel=db.model('user',userSchema);
module.exports=UserModel;

