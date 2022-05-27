const Kediler = require('../models/kediler');

module.exports.kedilerimiz = function(req, res) {
    Kediler.find({}).then(cats => {
        const Kullanicila = req.session
        res.render('kedilerimiz', {Kullanicila, cats});  
    })
   
}

module.exports.kedisil = function(req,res) {
    const {id} = req.params
    
    Kediler.remove({_id : id}).then(()=>{
        res.redirect('/kedilerimiz')
    })
}
