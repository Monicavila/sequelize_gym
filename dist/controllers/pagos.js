"use strict";

var _models = require("../../models");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var obtenerPagos = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    try {
      var results = yield _models.pagos.findAll({
        include: [_models.socios, _models.membresia]
      });
      res.json({
        message: results
      });
    } catch (error) {
      console.log(error);
    }
  });

  return function obtenerPagos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var agregarPagos = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    var datos = req.body;
    datos.fecha_pago = new Date();
    console.log(datos);

    try {
      //Obetener costo de la membresia
      var costoMembresia = yield _models.membresia.findOne({
        where: {
          id: datos.id_membresia
        }
      }); //Obtener promociones activas

      var socioMembresia = yield _models.socio_membresia.findOne({
        where: {
          id_socio: datos.id_socio
        }
      });
      var totalPago = Number(costoMembresia.costo) - Number(socioMembresia.promociones);
      datos.total_a_pagar = Number(totalPago);
      var results = yield _models.pagos.create(datos);
      res.json({
        message: results
      });
    } catch (error) {
      console.log(error);
    }
  });

  return function agregarPagos(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports = {
  obtenerPagos,
  agregarPagos
};