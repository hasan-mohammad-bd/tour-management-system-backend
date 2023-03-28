const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors')

const packageRoute = require('./routes/package.route');



// const colors = require('colors');

app.use(cors());
app.use(express.json())

//database connection

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log(`database connection is successful` .green.bold);
})

//route

app.use('/api/v1/tour', packageRoute)

//server 

const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`App is running at port ${port}`);
})