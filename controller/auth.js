const User = require("../models/User");

const gravatar = require('gravatar')
const bcrypt = require('bcrypt')

exports.Signup = async (req,res)=>{
    const {email , password ,role ,name} = req.body
  try {
      // check user 
      let user =await User.findOne({email});

      if(user){
          return res.status(400).json({error:[{msg:"u registerd before"}]})
      }

      user = new User(req.body);

      const salt = bcrypt.genSalt(10);

      user.password = bcrypt.hash(password,salt);

      user.avatat = gravatar.url(email , {s: '200', r: 'pg', d: '404'});

      user.save();

       res.send(' u r registerd ')


  } catch (error) {
      console.log(error);
     return res.status(500).send("server error")
  }
}