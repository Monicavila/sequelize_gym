"use strict";

var _pagos = require("../controllers/pagos");

var express = require("express");

var router = express.Router();
router.get("/pagos", _pagos.obtenerPagos);
router.post("/pagos", _pagos.agregarPagos);
module.exports = router;