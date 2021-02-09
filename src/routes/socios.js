const express = require ("express");

import {obtenerSocio, obtenerSocioPorId, agregarSocio, actualizarSocio} from "../controllers/socios";

const router = express.Router();

router.get("/socios", obtenerSocio);
router.get("/socios/:id", obtenerSocioPorId);
router.post("/socios", agregarSocio);
router.put('/socios/:id', actualizarSocio);

export default router;