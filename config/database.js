const mongoose = require('mongoose'),
    dbURL = require('./properties').DB


module.exports = function () {
    mongoose.connect('mongodb://localhost:27017/controlInventario', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
  

}


