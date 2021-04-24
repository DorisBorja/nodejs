
const Producto = require('./producto.dao')

//exportar una funcion para crear el producto
exports.createProducto = (req,res,next)=>{
    console.log(req.body)
    //obtenemos los datos del producto
    const  producto = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        cantidad: req.body.cantidad
        
    }
    //guarda el producto
    Producto.create(producto,(err, producto)=>{
        if (err) res.send(err);
        res.json({Producto:producto});
      })
}
//obtener un producto
exports.getProducto = (req,res)=>{
    console.log(req.body)
      //obtenemos los datos del producto
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

exports.totalProductos = (req,res)=>{
    Producto.count( {},function (err, total) {
        if (err) console.log(err);
        res.json({total})
        
    });
}

exports.totalProductosBajoStock = (req,res)=>{
    Producto.count( {cantidad:{$lt:20}},function (err, total) {
        if (err) console.log(err);
        res.json({total})
        
    });
}
