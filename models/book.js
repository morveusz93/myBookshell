const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  isToRead: {
    type: Boolean,
    required: true,
  },
  category: {
    type: String,
    lowercase: true,
    enum: ["sci-fi", "fantasy", "horror", "thriller", "adventue"],
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
