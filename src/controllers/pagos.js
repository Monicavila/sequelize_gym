import { pagos, membresia, socios, socio_membresia } from "../../models";

const obtenerPagos = async (req, res) => {
    try{
        const results = await pagos.findAll({include: [socios, membresia]});
        res.json({message: results});
    }catch(error){
        console.log(error);
    }
}

const agregarPagos = async (req, res) => {
    const datos = req.body;
    datos.fecha_pago = new Date();

    console.log(datos);
    try{
        //Obetener costo de la membresia
        const costoMembresia = await membresia.findOne({where: {id: datos.id_membresia}});
        //Obtener promociones activas
        const socioMembresia =  await socio_membresia.findOne({where: {id_socio: datos.id_socio}});

        let totalPago = Number(costoMembresia.costo) - Number(socioMembresia.promociones);

        datos.total_a_pagar = Number(totalPago);

        const results = await pagos.create(datos);

        res.json({message: results});
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    obtenerPagos,
    agregarPagos
}

