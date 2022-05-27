const { redirect } = require('express/lib/response');
var path = require('path');
//var alert = require('alert');
var kullanici = require('../models/kullanici');
const router = require('../routers/indexfipRoute');


module.exports.login = function (req, res) {
    if(req.session.userId){
        res.render('/');
   }
    else{
    res.render('login',{Kullanicila:req.session});
    }
}
module.exports.indexlogin = async function (req, res) {

    kullanici.findOne({ nick: req.body.nick, sifre: req.body.sifre }, function (err, kullanici) {
        if (kullanici == null) {
            console.log(err);
            res.redirect('/login');
        }
        else {
            req.session.yetki = kullanici.yetki;
            req.session.nick = kullanici.nick;
            req.session.ad = kullanici.ad;
            req.session.userId = kullanici._id;
            console.log("Result : ", kullanici, req.session);
            res.redirect('/');
        }
    });


}
