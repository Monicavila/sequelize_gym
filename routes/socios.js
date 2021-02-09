const express = require ("express");

const {obtenerSocio, obtenerSocioPorId, agregarSocio, actualizarSocio} = require ("../controllers/socios");

const router = express.Router();

router.get("/socios", obtenerSocio);
router.get("/socios/:id", obtenerSocioPorId);
router.post("/socios", agregarSocio);
router.put('/socios/:id', actualizarSocio);

module.exports = router;