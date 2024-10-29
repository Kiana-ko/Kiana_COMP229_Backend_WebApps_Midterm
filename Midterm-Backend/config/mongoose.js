
let config = require('./config');

// Responsible for setting up the Database::
const mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(config.ATLASDB);

    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', ()=>{
        console.log("====> Connected to MongoDB.");
    })
}