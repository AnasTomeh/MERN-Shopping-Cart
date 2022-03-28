const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { route } = require('./Routes/routes');


const app = express();
app.use(bodyParser.json());

app.use('/', route)


const connectionString = 'mongodb://localhost:27017/react-shooping-cart'

mongoose.connect(connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })






app.listen(3002, () => {
    console.log('running on port 3002');
})