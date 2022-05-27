const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostsSchema = new Schema({
    writer: { type: String },
    title: { type: String, require: true },
    text: { type: String },
    date: { type: Date, default: Date.now }

}, { collection: 'Posts'});

const Posts = mongoose.model('Posts', PostsSchema);

module.exports = Posts;