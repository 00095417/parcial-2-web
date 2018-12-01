const mongoose = require('mongoose');

const { Schema } = mongoose;

const bestiarioSchema = new Schema({
    nombre:String,
    familia:String,
    annio:Number
});

let Bestiario = mongoose.model('bestiario',bestiarioSchema);

module.exports = Bestiario;