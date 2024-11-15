const express = require("express");
const router = express.Router();

const homeController= require('../controllers/homeController.js')

router.get("/", homeController.HOME);
//router.get("/activacionpolera", homeController.ActivacionPolera);

//router.get("/productos", homeController.Productos);
router.get("/condiciones", homeController.Condiciones);
router.get("/contacto", homeController.Contacto);
router.get("/micuenta", homeController.MiCuenta);




module.exports = router;

