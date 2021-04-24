const express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require("method-override"),
    cors = require('cors'),
    //instancia de express
    app = express(),
    //configuraciones previas para el servidor
    properties = require('./config/properties'),
    //rutas de productos
    productosRutas = require('./Producto/Producto.routes'),
    //rutas de ventas
    ventasRutas = require('./ventas/Venta.routes'),
    usuariosRutas = require('./Usuario/Usuario.routes'),
    //conexion con la base de datos
    db = require('./config/database')
//especifico lo que voy a usar 
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

//agrego un router para las rutas
const router = express.Router();

//utiliazr la /api para las apis
app.use('/api', router)
//agregar las  rutas de vente
ventasRutas(router)
//agregar las rutas de productos
productosRutas(router);
usuariosRutas(router);
//manda el token
app.use('/login', (req, res) => {
  console.log("hola")
    res.send({
      token: 'test123'
    });
  });
  
// Database connection
db();
app.use(router);
  

app.listen(properties.PORT, function () {
    console.log(`Node server running on port ${properties.PORT}`);

});