"use strict";

var _socios = require("../controllers/socios");

var express = require("express");

var router = express.Router();
router.get("/socios", _socios.obtenerSocio);
router.get("/socios/:id", _socios.obtenerSocioPorId);
router.post("/socios", _socios.agregarSocio);
router.put('/socios/:id', _socios.actualizarSocio);
module.exports = router;