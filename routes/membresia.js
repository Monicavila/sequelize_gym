const express = require ("express");

const {obtenerMembresia, obtenerMembresiaPorId, agregarMembresia, actualizarMembresia, borrarMembresiaPorId} = require("../controllers/membresia");

const router = express.Router();

router.get("/membresias", obtenerMembresia);
router.get("/membresias/:id", obtenerMembresiaPorId);
router.post("/membresias", agregarMembresia);
router.put('/membresias/:id', actualizarMembresia);
router.delete('/membresias/:id', borrarMembresiaPorId);

module.exports = router;