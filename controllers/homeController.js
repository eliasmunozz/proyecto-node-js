const pool = require("../database.js");
exports.HOME = (req, res) => {
    res.render('home');
};

exports.Condiciones = (req, res) => {
    res.render('condiciones');
};
exports.Privacidad = (req, res) => {
    res.render('privacidad');
};
exports.Contacto = (req, res) => {
    res.render('contacto');
};
exports.MiCuenta = (req, res) => {
    res.render('micuenta');
};
exports.PoliticaPrivacidad = (req, res) => {
    res.render('politicaprivacidad');
};

exports.Registro = (req, res) => {
    res.render('registro');
};
exports.Administracion = (req, res) => {
    res.render('administracion');
};





exports.ProductosApi = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM productos");
        res.json(rows);
    } catch (error) {
        console.error("Error en /productos:", error);
        res.status(500).send("Error en el servidor");
    }
};