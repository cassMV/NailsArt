const citasController = {};
const Citas = require('../models/Cita.model');

citasController.obtenerCitas = async(req,res)=>{
    const citas = await Citas.find();
    res.render('../src/views/index.ejs',{citas});
};

citasController.obtenerCita = async(req,res)=>{
    const cita = await Citas.find({ficha:req.params.cb});
    if(cita != null){
        res.render('../src/views/editar.ejs',{cita});
    }else
        res.send('{"status":"Cita no encontrada"}');
};

citasController.insertarCita = async(req,res)=>{
    const citaInsertada = new Citas(req.body);
    await citaInsertada.save();
    res.redirect("/"); 
}

citasController.actualizarCita = async(req,res)=>{
    const citaActualizada = new Citas(req.body);
    await Citas.findOneAndUpdate({ficha:req.params.cb},{citaActualizada});
    res.json('{"status":"Cita actualizada"}');
}

citasController.eliminarCita = async(req,res)=>{
    await Citas.findOneAndDelete({ficha:req.params.cb});
    res.json('{"status":"Cita eliminada"}');
}

module.exports = citasController;
