var Posts = require('../models/post')

module.exports.addpost = function (req, res) {
    // res.render('header');
    res.render('postekle',{Kullanicila:req.session});
}

module.exports.indexpost = function (req, res) {
    var yenipost = new Posts({
        writer: req.session.nick,
        title: req.body.title,
        text: req.body.text,
        date: req.body.date
    })


    yenipost.save(function (err) {
        if (err) {
            res.redirect('/addpost');
        }
        else {
            res.redirect('/');
        }
        console.log(yenipost)
    })
    
}
