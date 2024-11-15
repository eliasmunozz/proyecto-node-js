// controllers/ventaController.js
const Venta = require('../models/ventaModel');

// Controlador para listar ventas
exports.listarVentas = async (req, res) => {
  try {
    const ventas = await Venta.obtenerVentas();
    res.render('activacionpolera', { ventas });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener las ventas');
  }
};

// Controlador para mostrar detalles de una venta
exports.mostrarDetallesVenta = async (req, res) => {
  const { ventaId } = req.body;
  try {
    const venta = await Venta.obtenerVentaPorId(ventaId);

    if (venta) {
      res.render('menactivacion', { venta });
    } else {
      res.status(404).send('Venta no encontrada');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los detalles de la venta');
  }
};