const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){

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