const {socio_membresia, socios, membresia} = require("../models");

const obtenerSocioMembresia = async (req, res) => {
    try{
        const results = await socio_membresia.findAll({include: [socios, membresia]});
        res.json({message: results});
    }catch(error){
        console.log(error);
    }
}

const agregarSocioMembresia = async (req, res) => {
    const datos = req.body;
    console.log(datos);
    try{
        const results = await socio_membresia.create(datos);
        res.json({message: results});
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    obtenerSocioMembresia,
    agregarSocioMembresia
}