const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ProductRoutes = require('./Routes/routes');
const OrederRoutes = require('./Routes/orderRoute');
const runDB = require('./config/db');


const app = express();
app.use(bodyParser.json());

app.use('/', ProductRoutes)
app.use('/', OrederRoutes)

// Run DB
runDB()




//order api


app.listen(3002, () => {
    console.log('running on port 3002');
})