const express = require('express');
const { Signup } = require('../controller/auth');

const AuthRouter = express.Router();

AuthRouter.post('/signup',Signup);

module.exports = AuthRouter ;