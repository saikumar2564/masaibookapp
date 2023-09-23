const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  price:Number,
  description:String
});

module.exports = mongoose.model('Books', bookSchema);