"use strict";

var _models = require("../../models");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var obtenerSocio = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    try {
      var results = yield _models.socios.findAll({
        include: [_models.pagos]
      });
      res.json({
        message: results
      });
    } catch (error) {
      console.log(error);
    }
  });

  return function obtenerSocio(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var obtenerSocioPorId = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    try {
      var results = yield _models.socios.findOne({
        where: {
          id: req.params.id
        }
      });
      res.json({
        message: results
      });
    } catch (error) {
      console.log(error);
    }
  });

  return function obtenerSocioPorId(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var agregarSocio = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    var datos = req.body;
    console.log(datos);

    try {
      var results = yield _models.socios.create(datos);
      res.json({
        message: results
      });
    } catch (error) {
      console.log(error);
    }
  });

  return function agregarSocio(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var actualizarSocio = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    try {
      var datos = req.body;
      console.log(datos);
      var results = yield _models.socios.update(datos, {
        where: {
          id: req.params.id
        }
      });
      res.json({
        message: "Los datos del socio han sido actualizados correctamente",
        results
      });
    } catch (error) {
      console.log(error);
    }
  });

  return function actualizarSocio(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

module.exports = {
  obtenerSocio,
  obtenerSocioPorId,
  agregarSocio,
  actualizarSocio
};