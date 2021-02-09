import {socio_membresia, socios, membresia} from "../../models";

export const obtenerSocioMembresia = async (req, res) => {
    try{
        const results = await socio_membresia.findAll({include: [socios, membresia]});
        res.json({message: results});
    }catch(error){
        console.log(error);
    }
}

export const agregarSocioMembresia = async (req, res) => {
    const datos = req.body;
    console.log(datos);
    try{
        const results = await socio_membresia.create(datos);
        res.json({message: results});
    }catch(error){
        console.log(error);
    }
}