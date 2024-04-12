const express =require('express');
const db = require('./config/db');

//const body_parser=require('body-parser');
const app = express();



//app.use(body_parser.json());
app.use(express.json());

// Connect to MongoDB using the exported connection from db.js
db.on('open', () => {
  console.log("Database connected successfully");
}).on('error', () => {
  console.log("Connection failed");
});



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//signup router : 
const signUpRouter =require('./routes/signUprouter');
app.use('/',signUpRouter);


//signin router:
const signInRouter = require('./routes/signInrouter');
app.use('/', signInRouter);

module.exports=app;


