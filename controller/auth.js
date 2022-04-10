const User = require("../models/User");

const gravatar = require('gravatar')
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

exports.Signup = async (req,res)=>{
    const {email , password ,role ,name} = req.body
  try {
      // check user 
      let user =await User.findOne({email});

      if(user){
          return res.status(400).json({error:[{msg:"u registerd before"}]})
      }

      user = new User(req.body);

      const salt =await bcrypt.genSalt(10);

      user.password =await bcrypt.hash(password,salt);

      user.avatat = gravatar.url(email , {s: '200', r: 'pg', d: '404'});

     await user.save();

      const payload = {
          user:{
              id: user.id
          }
      }
      jwt.sign(payload,
        process.env.JWTSECRET,
        {expiresIn:3600}
        ,(err,token)=>{
          if(err) throw err ;
          res.json({token})
      }
      )
  } catch (error) {
      console.log(error);
     return res.status(500).send("server error")
  }
}