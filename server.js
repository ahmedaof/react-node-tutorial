const express = require('express');

const connectBD = require('./config/db')
const app = express();
connectBD();

app.use('/api',require('./Router/auth'));
const PORT = process.env.PORT || 5000 ;

app.listen(PORT , ()=>{
    console.log(`server is working on ${PORT}`);
})