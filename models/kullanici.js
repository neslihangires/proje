const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KullaniciSchema = new Schema({
    ad: { type: String },
    soyad: { type: String },
    nick: { type: String, unique: true},
    email: { type: String, require: true, unique: true },
    sifre: { type: String, require: true },
    onay: { type: String },
    tarih: { type: Date, default: Date.now },
    yetki: {type: String}
}, { collection: 'kullanici'});

const Kullanici = mongoose.model('kullanici', KullaniciSchema);

module.exports = Kullanici;