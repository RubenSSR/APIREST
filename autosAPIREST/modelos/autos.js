var mongoose = require('mongoose');
var Schema = mongoose.schema;

var AutoSchema={
    color:String,
    caballos: Number,
    modelo: Number,
    segmento: String,
    marca: String
};

module.export = mongoose.model('Autos', AutoSchema);