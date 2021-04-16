const Productos = require('./producto.controller');
module.exports = (router)=>{
    router.post('/producto-add',Productos.createProducto);
    router.get('/producto',Productos.getProducto);
    router.get('/productosTotal',Productos.totalProductos);
    router.get('/productosBajoStock',Productos.totalProductosBajoStock);
    router.get('/productos',Productos.getProductos);
    router.post('/producto-delete',Productos.deleteProductoById)
    router.post('/producto-edit',Productos.editProductoById)
}