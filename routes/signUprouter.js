const express = require('express');
const router =express.Router();
const UserController =require("../controller/signUpcontroller");

//router.post('/registration',UserController.register);
router.post('/register', UserController.register);

module.exports=router;