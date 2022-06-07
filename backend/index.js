const connectToMongo = require('./db')
const express = require("express");
const app = express();
const hostname = '127.0.0.1';
const port = 8000;

connectToMongo();

// MiddleWares
app.use(express.json());

//ENDPOINTS - Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// START THE SERVER
app.listen(port, ()=>{
    console.log(`Server is running at http://${hostname}:${port}/`)
})
