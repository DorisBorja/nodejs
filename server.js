const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    properties = require('./config/properties'),
    methodOverride = require("method-override"),
    cors = require('cors'),
    productosRutas = require('./Producto/Producto.routes'),
    ventasRutas = require('./ventas/Venta.routes'),
    db = require('./config/database')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

const router = express.Router();

app.use('/api', router)
productosRutas(router);
ventasRutas(router)

app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });
  
// Database connection
db();

  








app.use(router);

app.listen(properties.PORT, function () {
    console.log(`Node server running on ${properties.PORT}`);

});