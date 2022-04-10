const express = require('express');
const { Signup } = require('../controller/auth');
const { SignupValidation } = require('../validation/signup');

const AuthRouter = express.Router();

AuthRouter.post('/signup',SignupValidation,Signup);

module.exports = AuthRouter ;