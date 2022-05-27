var path = require('path');
module.exports.Iletisim = function(req, res){

    //ejs 
    res.render('iletisim',{Kullanicila:req.session});
}