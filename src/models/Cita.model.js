const{Schema, model}=require('mongoose');
const citaSchema = new Schema({
    ficha:{
        require:true,
        unique:true,
        type:String
    },
    nombre:String,
    dia:String,
    hora:String,
    modeloUñas:String,
    costo:Number
},{
    versionKey:false,
    timestamps:true
});
module.exports = model('cita',citaSchema);