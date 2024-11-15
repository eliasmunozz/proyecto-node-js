const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");
const pool = require("./database.js");
const productosRouter = require('./routes/productos');
const productosVentas = require('./routes/ventas');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');

app.set('views',path.join(__dirname, './views'))

app.use("/", routes);
app.use('/productos', productosRouter);
app.use('/activacionpolera', productosVentas);
app.use('/activacionpolera', express.static('public'));


app.listen(4000);



