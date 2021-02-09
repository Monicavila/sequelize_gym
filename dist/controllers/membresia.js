"use strict";

var _models = require("../../models");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var obtenerMembresia = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    try {
      var results = yield _models.membresia.findAll();
      res.json({
        message: results
      });
    } catch (error) {
      console.log(error);
    }
  });

  return function obtenerMembresia(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var obtenerMembresiaPorId = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    try {
      var results = yield _models.membresia.findOne({
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

  return function obtenerMembresiaPorId(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var agregarMembresia = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    var datos = req.body;
    console.log(datos);

    try {
      var results = yield _models.membresia.create(datos);
      res.json({
        message: results
      });
    } catch (error) {
      console.log(error);
    }
  });

  return function agregarMembresia(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

var actualizarMembresia = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    try {
      var datos = req.body;
      console.log(datos);
      var results = yield _models.membresia.update(datos, {
        where: {
          id: req.params.id
        }
      });
      res.json({
        message: "La membresía ha sido actualizada correctamente",
        results
      });
    } catch (error) {
      console.log(error);
    }
  });

  return function actualizarMembresia(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

var borrarMembresiaPorId = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    try {
      var datos = req.body;
      console.log(datos);
      var results = yield _models.membresia.destroy({
        where: {
          id: req.params.id
        }
      });
      res.json({
        message: "La membresía ha sido eliminada",
        results
      });
    } catch (error) {
      console.log(error);
    }
  });

  return function borrarMembresiaPorId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

module.exports = {
  obtenerMembresia,
  obtenerMembresiaPorId,
  agregarMembresia,
  actualizarMembresia,
  borrarMembresiaPorId
};