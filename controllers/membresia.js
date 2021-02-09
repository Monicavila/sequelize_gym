const { membresia } = require("../models");

const obtenerMembresia = async (req, res) => {
  try {
    const results = await membresia.findAll();
    res.json({ message: results });
  } catch (error) {
    console.log(error);
  }
};

const obtenerMembresiaPorId = async (req, res) => {
  try {
    const results = await membresia.findOne({ where: { id: req.params.id } });
    res.json({ message: results });
  } catch (error) {
    console.log(error);
  }
};

const agregarMembresia = async (req, res) => {
  const datos = req.body;
  console.log(datos);
  try {
    const results = await membresia.create(datos);
    res.json({ message: results });
  } catch (error) {
    console.log(error);
  }
};

const actualizarMembresia = async (req, res) => {
  try {
    const datos = req.body;
    console.log(datos);
    const results = await membresia.update(datos, {
      where: { id: req.params.id },
    });
    res.json({
      message: "La membresía ha sido actualizada correctamente",
      results,
    });
  } catch (error) {
    console.log(error);
  }
};

const borrarMembresiaPorId = async (req, res) => {
    try {
        const datos = req.body;
        console.log(datos);
        const results = await membresia.destroy({
          where: { id: req.params.id },
        });
        res.json({
          message: "La membresía ha sido eliminada",
          results,
        });
      } catch (error) {
        console.log(error);
      }
};

module.exports = {
  obtenerMembresia,
  obtenerMembresiaPorId,
  agregarMembresia,
  actualizarMembresia,
  borrarMembresiaPorId,
};
