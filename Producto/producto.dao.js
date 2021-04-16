const mongoose = require("mongoose");
const productoSchema = require('./producto.model')

productoSchema.statics.create = function create(data, cb) {
    const producto = new this(data)
    producto.save(cb)
}

productoSchema.statics.get = function (valor,parametro, cb) {
    if(parametro.localeCompare('')==0){
        this.find({}, cb)
    }else if(parametro.localeCompare('id')==0){
        this.findById(valor, cb)
    }else{
        this.find({parametro:valor}, cb)
    }
}

productoSchema.statics.edit = function (id,producto, cb) {
    this.updateOne({"_id":id},producto,cb)
    
}

productoSchema.statics.delete = function (id, cb) {
    this.deleteOne({"_id":id},cb)
}


const productoModel = mongoose.model('productos', productoSchema)
module.exports = productoModel;