
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const VentasSchema = new Schema({
    date:{
        type:Date,
        require: true
    },
    detalles:{
        type:Array,
        require: true
    }
    
})

module.exports = VentasSchema