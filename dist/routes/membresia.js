"use strict";

var _membresia = require("../controllers/membresia");

var express = require("express");

var router = express.Router();
router.get("/membresias", _membresia.obtenerMembresia);
router.get("/membresias/:id", _membresia.obtenerMembresiaPorId);
router.post("/membresias", _membresia.agregarMembresia);
router.put('/membresias/:id', _membresia.actualizarMembresia);
router.delete('/membresias/:id', _membresia.borrarMembresiaPorId);
module.exports = router;