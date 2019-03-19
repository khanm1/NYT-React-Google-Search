const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
 
  title: {
    type: String,
    trim: true,
    required: true 
  },
  authors: {
    type: String,
    trim: true 
  },
  description: {
    type: String,
    trim: true 
  },
  infoLink: {
    type: String,
    trim: true 
  } , 
  imageLinks: {
    type: String,
    trim: true 
  }  
 
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
