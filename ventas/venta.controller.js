
const Venta = require('./venta.dao')
const Producto = require('../Producto/producto.dao')
exports.createVenta = (req,res,next)=>{
    console.log(req.body)
    const  venta = {
        date: req.body.date,
        detalles: req.body.detalles,
    }
    
    Venta.create(venta,(err, venta)=>{
        if (err) res.send(err);
        venta.detalles.map(detalle=>{
           Producto.findById(detalle._id, function (err, producto) {
                if (err) console.log(err);
                producto.cantidad = producto.cantidad - detalle.cantidad;
                console.log(producto)
                Producto.updateOne({"_id":detalle._id},producto,function (err, msg) {
                    if (err) console.log(err);
                })
            })
           
        })
        res.json({venta:venta});
      })
      
}

exports.getventa = (req,res)=>{
    console.log(req.body)
    Venta.get(req.body.valor, req.body.parametro,function (err, venta) {
        if (err) console.log(err);
        res.json({venta:venta})
        
    });
}

exports.getventas = (req,res)=>{
    Venta.get( "","",function (err, ventas) {
        if (err) console.log(err);
        res.json({ventas:ventas})
        
    });
}

exports.deleteventaById = (req,res)=>{
    Venta.delete( req.body._id,function (err, ventas) {
        if (err) console.log(err);
        res.json({ventas:ventas})
        
    });
}

exports.editventaById = (req,res)=>{
    const  venta = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        cantidad: req.body.cantidad
    }
    Venta.edit( req.body._id, venta,function (err, msg) {
        if (err) console.log(err);
        res.json({venta})
        
    });
}

exports.totalventas = (req,res)=>{
    Venta.count( {},function (err, total) {
        if (err) console.log(err);
        res.json({total})
        
    });
}

exports.totalventasBajoStock = (req,res)=>{
    Venta.count( {cantidad:{$lt:20}},function (err, total) {
        if (err) console.log(err);
        res.json({total})
        
    });
}

exports.totalVentas = (req,res)=>{
    Venta.count( {},function (err, total) {
        if (err) console.log(err);
        res.json({total})
        
    });
}