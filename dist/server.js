"use strict";

var _socios = _interopRequireDefault(require("./routes/socios"));

var _membresia = _interopRequireDefault(require("./routes/membresia"));

var _pagos = _interopRequireDefault(require("./routes/pagos"));

var _socio_membresia = _interopRequireDefault(require("./routes/socio_membresia"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require("express");

var logger = require("morgan");

require("dotenv").config();

var PORT = process.env.PORT;
var app = express();
app.use(express.json()); // condiguración para interpretar formato json enviados desde insomnia

app.use(logger("dev"));
app.get('/', (req, res) => {
  res.send("Diseñando ando");
});
app.use(_socios.default);
app.use(_membresia.default);
app.use(_pagos.default);
app.use(_socio_membresia.default);
app.listen(PORT, () => {
  console.log("Probando servidor en puerto", PORT);
});