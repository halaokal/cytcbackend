
const mongoose =require('mongoose');
const connection =mongoose.createConnection('mongodb://localhost:27017/cytcdb').on('open',()=>{
  console.log("database connected succefully");
}).on('error',()=>{
  console.log("connection failed");
});


module.exports=connection;
