var path = require('path');
module.exports.Hakkimizda = function(req, res){

    //ejs
    res.render('hakkimizda',{Kullanicila:req.session});
}