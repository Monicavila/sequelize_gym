"use strict";

var _socio_membresia = require("../controllers/socio_membresia");

var express = require("express");

var router = express.Router();
router.get("/socio-membresia", _socio_membresia.obtenerSocioMembresia);
router.post("/socio-membresia", _socio_membresia.agregarSocioMembresia);
module.exports = router;