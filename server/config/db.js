const mongoose = require('mongoose')

function runDB() {
    const connectionString = 'mongodb://localhost:27017/react-shooping-cart'

    mongoose.connect(connectionString,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(res => console.log('connection Done'))
}

module.exports = runDB