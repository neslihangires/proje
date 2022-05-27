var path = require('path');
const multer = require('multer')


const Kediler = require('../models/kediler');
module.exports.kediekle = function(req, res){

    //ejs 
    res.render('kediekle',{Kullanicila:req.session});
}

module.exports.kedieklee  = function (req, res){
    

    var yenikedi = new Kediler({
        catimg : req.file.filename,
        catname : req.body.catname,
        catowner: req.session.nick,
        catadress: req.body.catadress,
        catabout: req.body.catabout,
        date: req.body.date
    })



    yenikedi.save(function (err) {
        if (err) {
            res.redirect('/kediekle');
        }
        else {
            res.redirect('/');
        }
        console.log(yenikedi)
    })



}

