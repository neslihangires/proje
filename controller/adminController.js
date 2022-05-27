const Kullanicilar = require('../models/kullanici');

module.exports.admin = function(req, res) {
    Kullanicilar.find({}).then(kullanicilar => {
        const Kullanicila = req.session
        res.render('adminpanel', {Kullanicila, kullanicilar});  
    })
   
}


module.exports.kullanicisil = function(req,res) {
    const {id} = req.params
    
    Kullanicilar.remove({_id : id}).then(()=>{
        res.redirect('/admin')
    })
}
