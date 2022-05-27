const Posts = require('../models/post');

module.exports.Blog = function(req, res) {
    Posts.find({}).then(posts => {
        const Kullanicila = req.session
        res.render('blog', {Kullanicila, posts});  
    })
   
}


module.exports.postsil = function(req,res) {
    const {id} = req.params
    
    Posts.remove({_id : id}).then(()=>{
        res.redirect('/blog')
    })
}

//function escapeRegex(text) {
//    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
//};


       
    
