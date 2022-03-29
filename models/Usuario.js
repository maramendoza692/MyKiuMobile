const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
    nombre: {
        type: String,
        requiered: true,
        trim: true
    },
    email: {
        type: String,
        requiered: true, //Campo obligatorio
        trim: true, //Eliminar espacios
        unique: true //Email registrado sólo una vez
    },
    password: {
        type: String,
        requiered: true,
        trim: true
    },
    registro: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Usuario', UsuariosSchema); 