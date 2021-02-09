const express = require ("express");

import {obtenerPagos, agregarPagos} from "../controllers/pagos";

const router = express.Router();

router.get("/pagos", obtenerPagos);
router.post("/pagos", agregarPagos);

module.exports = router;