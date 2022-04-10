const express = require('express');
const { Signup } = require('../controller/auth');
const auth = require('../middleware/auth');
const User = require('../models/User');
const { SignupValidation } = require('../validation/signup');

const AuthRouter = express.Router();

AuthRouter.post('/signup',SignupValidation,Signup);
AuthRouter.get('/me',auth , async (req,res)=>{

   try {
    const user =await User.findById(req.user.id).select('-password');
    res.status(200).json(user) 
   } catch (error) {
    console.log(error);
    res.status(500).json({msg: 'server error'})
   }
});

module.exports = AuthRouter ;