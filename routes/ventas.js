
const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');


router.get('/', ventaController.listarVentas);


router.post('/detalles', ventaController.mostrarDetallesVenta);

module.exports = router;