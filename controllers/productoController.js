// controllers/productoController.js
const Producto = require('../models/productoModel');

// Controlador para mostrar todos los productos
exports.mostrarProductos = async (req, res) => {
  try {
    const productos = await Producto.obtenerProductos();
    res.render('productos', { productos });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los productos');
  }
};