
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



exports.totalVentas = (req,res)=>{
    Venta.count( {},function (err, total) {
        if (err) console.log(err);
        res.json({total})
        
    });
}