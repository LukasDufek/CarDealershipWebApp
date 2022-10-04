const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let carSchema = new Schema({
    //hlavni info
    id: {
        type: Number
    },
    znacka: {
        type: String
    },
    model: {
        type: String
    },
    karoserie: {
        type: String
    },
    cena: {
        type: Number
    },
    motor: {
        type: String
    },
    vykon: {
        type: Number
    },
    rok: {
        type: Number
    },

    //dodatecne info
    barva: {
        type: String
    },
    prevodovka: {
        type: String
    },
    palivo: {
        type: String
    },
    popis: {
        type: String
    },


}, {
    collection: 'car'
})

module.exports = mongoose.model('Car', carSchema)
