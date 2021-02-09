const express = require ("express");

import {obtenerSocioMembresia, agregarSocioMembresia} from "../controllers/socio_membresia";

const router = express.Router();

router.get("/socio-membresia", obtenerSocioMembresia);
router.post("/socio-membresia", agregarSocioMembresia);

module.exports = router;