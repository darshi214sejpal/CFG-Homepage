const connectToMongo = require('./db')
const express = require("express");
const app = express();
const hostname = '127.0.0.1';
const port = 8000;

connectToMongo();

//ENDPOINTS
app.get('/', (req,res)=>{
    res.send('hello world!!');
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`Server is running at http://${hostname}:${port}/`)
})