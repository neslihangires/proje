const Posts = require('../models/post.js')
var path = require('path');

const indexfip = (req, res) => {
    console.log(req.session)
    // res.render('header');
    res.render('index',{Kullanicila:req.session});
    // res.sendFile(path.join(__dirname, '../index.fip.html'));
}

const ara = async (req, res) => {
    const aranacakKelime = req.query.look
      const allPost = await Posts.find()
      const postsResult = allPost.filter(p => p.title.toLowerCase().includes(aranacakKelime.toLowerCase()));
      const textResult = allPost.filter(p => p.text.toLowerCase().includes(aranacakKelime.toLowerCase()));
      res.render('blog', {posts:textResult, Kullanicila: req.session}); 
    console.log(textResult);    
    }
module.exports = {
    indexfip,
    ara
}