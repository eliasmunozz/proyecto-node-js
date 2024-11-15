const db = require('../database.js');


exports.obtenerVentas = async () => {
  const query = 'SELECT * FROM ventas';
  const [resultados] = await db.query(query);
  return resultados;
};


exports.obtenerVentaPorId = async (ventaId) => {
  const query = 'SELECT * FROM ventas WHERE id = ?';
  const [resultado] = await db.query(query, [ventaId]);
  return resultado.length > 0 ? resultado[0] : null;
};
