const mongoose = require("mongoose");
const ventasSchema = require('./venta.model')

ventasSchema.statics.create = function create(data, cb) {
    const venta = new this(data)
    venta.save(cb)
}

ventasSchema.statics.get = function (valor,parametro, cb) {
    if(parametro.localeCompare('')==0){
        this.find({}, cb)
    }else if(parametro.localeCompare('id')==0){
        this.findById(valor, cb)
    }else{
        this.find({parametro:valor}, cb)
    }
}

ventasSchema.statics.edit = function (id,venta, cb) {
    this.updateOne({"_id":id},venta,cb)
    
}

ventasSchema.statics.delete = function (id, cb) {
    this.deleteOne({"_id":id},cb)
}


const ventaModel = mongoose.model('ventas', ventasSchema)
module.exports = ventaModel;