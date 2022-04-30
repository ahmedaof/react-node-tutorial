const express = require('express');
const cors = require('cors')
const connectBD = require('./config/db')
const app = express();

app.use(express.json());
app.use(cors());
connectBD();

app.use('/api',require('./Router/auth'));
const PORT = process.env.PORT || 5000 ;

app.listen(PORT , ()=>{
    console.log(`server is working on ${PORT}`);
})