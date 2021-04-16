const mongoose = require('mongoose'),
    dbURL = require('./properties').DB


module.exports = function () {
    mongoose.connect('mongodb+srv://muenala:kovi123maU@cluster0.toweq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
  

}


