const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.isAuth = function(req,res,next){

    const token = req.header('token');

    if(!token){
        return res.status(400).json({msg: 'no token added'})
    }

    try {
        const decode = jwt.verify(token, process.env.JWTSECRET);
        req.user = decode.user;
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: 'token isnot verified'})
    }
    next()
}
exports.isAdmin = function(req,res,next){

     User.findById(req.user.id).exec((err,user)=>{
         if(user.role == 0){
           res.status(403).json({msg:'invalid role access denied it\'s for admin only'});
       }
    })

    next();
}