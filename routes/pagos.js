const express = require ("express");

const {obtenerPagos, agregarPagos} = require("../controllers/pagos");

const router = express.Router();

router.get("/pagos", obtenerPagos);
router.post("/pagos", agregarPagos);

module.exports = router;