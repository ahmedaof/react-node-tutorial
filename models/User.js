const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:23
    },
        email:{
            type:String,
            required:true,
            unique:true
        },

        password:{
            type:String,
            required:true,
        },
        role:{
            type:Number,
            default:0
        },
        avatar:{
         type:String
        },
        date:{
            type:Date,
            default:Date.now()
        }
    
})


module.exports = mongoose.model('User',userSchema);