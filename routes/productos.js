const express = require('express');
const router = express.Router();
const db = require('../database.js');
const productoController = require('../controllers/productoController');


router.get('/', productoController.mostrarProductos);

module.exports = router;
