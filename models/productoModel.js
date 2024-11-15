
const db = require('../database.js');


exports.obtenerProductos = async () => {
  const query = 'SELECT * FROM productos';
  const [resultados] = await db.query(query);
  return resultados;
};