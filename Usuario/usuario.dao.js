const mongoose = require("mongoose");
const usuariosSchema = require('./usuario.model')

usuariosSchema.statics.create = function (data, cb) {
    console.log("aqui")
    const usuario = new this(data)
    usuario.save(cb)
}
usuariosSchema.statics.login = function (data, cb) {
    this.find({email:data}, cb)
}

usuariosSchema.statics.get = function (valor,parametro, cb) {
    if(parametro.localeCompare('')==0){
        this.find({}, cb)
    }else if(parametro.localeCompare('id')==0){
        this.findById(valor, cb)
    }else{
        this.find({parametro:valor}, cb)
    }
}

usuariosSchema.statics.edit = function (id,venta, cb) {
    this.updateOne({"_id":id},venta,cb)
    
}

usuariosSchema.statics.delete = function (id, cb) {
    this.deleteOne({"_id":id},cb)
}


const usuarioModel = mongoose.model('usuarios', usuariosSchema)
module.exports = usuarioModel;