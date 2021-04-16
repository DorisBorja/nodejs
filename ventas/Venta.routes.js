const ventas = require('./venta.controller');
module.exports = (router)=>{
    router.post('/venta-add',ventas.createVenta);
    router.get('/venta',ventas.getventa);
    router.get('/ventasTotal',ventas.totalventas);
    router.get('/ventasBajoStock',ventas.totalventasBajoStock);
    router.get('/ventasTotal',ventas.totalVentas);
    router.get('/ventas',ventas.getventas);
    router.post('/venta-delete',ventas.deleteventaById)
    router.post('/venta-edit',ventas.editventaById)
}