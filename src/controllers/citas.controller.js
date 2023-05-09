const citasController = {};
const Citas = require('../models/Cita.model');

citasController.obtenerCitas =async(req,res)=>{
    const citas = await Citas.find();
    res.json(citas);
};
module.exports = citasController;
