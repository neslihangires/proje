var path = require('path');
module.exports.Ilaclar = function(req, res){

    //ejs
    res.render('ilaclar',{Kullanicila:req.session});
}