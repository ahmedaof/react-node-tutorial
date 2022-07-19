const express = require('express');
const { Signup , Signin, LoadUser } = require('../controller/auth');
const {isAuth,isAdmin} = require('../middleware/auth');
const { SignupValidation , SigninValidation } = require('../validation/signup');

const AuthRouter = express.Router();

AuthRouter.post('/signup',SignupValidation,Signup);
AuthRouter.post('/signin',SigninValidation,Signin);
AuthRouter.get('/me',isAuth ,isAdmin , LoadUser);
AuthRouter.get('/check' , (req,res)=>{res.status(200).json('aa') });


module.exports = AuthRouter ;