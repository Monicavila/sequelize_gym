const express = require ("express");

const {obtenerSocioMembresia, agregarSocioMembresia} = require("../controllers/socio_membresia");

const router = express.Router();

router.get("/socio-membresia", obtenerSocioMembresia);
router.post("/socio-membresia", agregarSocioMembresia);

module.exports = router;