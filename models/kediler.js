const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KediSchema = new Schema({
    catimg: { type: String },
    catname: { type: String } ,
    catowner: { type: String } ,
    catadress: { type: String },
    catabout: { type: String },
    catdate: { type: Date, default: Date.now }

}, { collection: 'Kediler'});

const Kediler = mongoose.model('Kediler', KediSchema);

module.exports = Kediler;