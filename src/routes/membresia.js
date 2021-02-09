const express = require ("express");

import {obtenerMembresia, obtenerMembresiaPorId, agregarMembresia, actualizarMembresia, borrarMembresiaPorId} from "../controllers/membresia";

const router = express.Router();

router.get("/membresias", obtenerMembresia);
router.get("/membresias/:id", obtenerMembresiaPorId);
router.post("/membresias", agregarMembresia);
router.put('/membresias/:id', actualizarMembresia);
router.delete('/membresias/:id', borrarMembresiaPorId);

module.exports = router;