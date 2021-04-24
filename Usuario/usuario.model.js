
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UsuariosSchema = new Schema({
    username:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require: true
    },
    password:{
        type:String,
        require: true
    }
    
})

module.exports = UsuariosSchema