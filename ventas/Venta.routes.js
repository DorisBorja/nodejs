
const ventas = require('./venta.controller');
module.exports = (router)=>{
    router.post('/venta-add',ventas.createVenta);
    router.get('/ventasTotal',ventas.totalVentas);

}