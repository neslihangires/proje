var kullanici = require('../models/kullanici');


module.exports.register = function (req, res) {
    if(req.session.userId){
        res.redirect('/');
    }
    else{
    res.render('register',{Kullanicila:req.session});
    }
}
module.exports.indexRegister = function (req, res) {
    var yenikullanici = new kullanici({
        ad: req.body.ad,
        soyad: req.body.soyad,
        nick: req.body.nick,
        email: req.body.email,
        sifre: req.body.sifre,
        onay: req.body.onay,
        tarih: req.body.tarih

    });

    yenikullanici.save(function (err) {
        if (err) {
            res.redirect('/register');

        }
        else {
            res.redirect('/login');
        }
    });

    console.log(yenikullanici);

}
