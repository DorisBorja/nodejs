
const Producto = require('./producto.dao')

exports.createProducto = (req,res,next)=>{
    console.log(req.body)
    const  producto = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        cantidad: req.body.cantidad
        
    }
    
    Producto.create(producto,(err, producto)=>{
        if (err) res.send(err);
        res.json({Producto:producto});
      })
}

exports.getProducto = (req,res)=>{
    console.log(req.body)
    Producto.get(req.body.valor, req.body.parametro,function (err, producto) {
        if (err) console.log(err);
        res.json({Producto:producto})
        
    });
}

exports.getProductos = (req,res)=>{
    Producto.get( "","",function (err, productos) {
        if (err) console.log(err);
        res.json({Productos:productos})
        
    });
}

exports.deleteProductoById = (req,res)=>{
    Producto.delete( req.body._id,function (err, productos) {
        if (err) console.log(err);
        res.json({Productos:productos})
        
    });
}

exports.editProductoById = (req,res)=>{
    console.log(req.body)
    const  producto = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        cantidad: req.body.cantidad
    }
    Producto.edit( req.body._id, producto,function (err, msg) {
        if (err) console.log(err);
        res.json({producto})
        
    });
}