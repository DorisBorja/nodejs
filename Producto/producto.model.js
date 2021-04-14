const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const productosSchema = new Schema({
    nombre:{
        type:String,
        require: true
    },
    descripcion:{
        type:String,
        require: true
    },
    precio:{
        type:Number,
        require: true
    }, 
    cantidad:{
        type:Number,
        require: true
    }
    
})

module.exports = productosSchema