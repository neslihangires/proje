const path = require('path');
module.exports.Asilar = function(req, res){

    //ejs 
    res.render('asilar',{Kullanicila:req.session});
}