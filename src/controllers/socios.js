import { socios, pagos } from "../../models";

export const obtenerSocio = async(req, res) => {
    try{
        const results = await socios.findAll({include: [pagos]});
        res.json({message: results});
    }catch(error){
        console.log(error);
    }
}

export const obtenerSocioPorId = async(req, res) => {
    try{
        const results = await socios.findOne({where: {id: req.params.id}});
        res.json({message: results});
    }catch(error){
        console.log(error);
    }
}

export const agregarSocio = async(req, res) => {
    const datos = req.body;
    console.log(datos);
    try{
        const results = await socios.create(datos);
        res.json({message: results});
    }catch(error){
        console.log(error);
    }
}

export const actualizarSocio = async(req, res) => {
    try{
        const datos = req.body;
        console.log(datos);
        const results = await socios.update(datos, {where: {id: req.params.id}});
        res.json({message: "Los datos del socio han sido actualizados correctamente", results});
    }catch(error){
        console.log(error);
    }
}