const mongoose = require('mongoose')
//llamamos al esquema
const Schema = mongoose.Schema;
//establecemos un esquema
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