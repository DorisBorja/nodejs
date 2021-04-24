const mongoose = require('mongoose'),
    dbURL = require('./properties').DB

//funcion de connecion
module.exports = function () {
    mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
  

}


