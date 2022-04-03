const mongoose = require('mongoose');
require('dotenv').config();
const connectBD = async () =>{

    try {
        await mongoose.connect(process.env.DATABASE , {
            useNewUrlParser:true })
            console.log("connected to database");

    } catch (error) {
        console.log(error);
         // exit process with failer
        process.exit(1);
    }

}


module.exports = connectBD;