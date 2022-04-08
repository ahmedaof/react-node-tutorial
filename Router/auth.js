const express = require('express');

const AuthRouter = express.Router();

AuthRouter.get('/',(req,res)=>{
    res.send('auth')
});

module.exports = AuthRouter ;