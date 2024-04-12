const app = require('./app');
const db = require('./config/db')
const port =3001;
const UserModel=require('./model/signUpmodel');

app.get('/',(req,res)=>{
    res.send("Hiiiii")
});

app.listen(port ,()=>{
    console.log(`Server Listing on port http://localhost:${port}`)
});