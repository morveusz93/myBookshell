const express = require("express");
const path = require("path");
const Book = require("./models/book");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const categories = ["sci-fi", "fantasy", "horror", "thriller", "adventue"];

mongoose
  .connect("mongodb://localhost:27017/myBookshell")
  .then(() => {
    console.log("connection open to db...");
  })
  .catch((err) => {
    console.log("error to connect db");
    console.log(err);
  });

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/books", async (req, res) => {
  const allBooks = await Book.find();
  res.render("books", { allBooks });
});

app.get("/books/new", (req, res) => {
  res.render("new", { categories });
});

app.post("/books", async (req, res) => {
  const { title, author, isRead, cat } = req.body;
  let isToRead = true;
  if (isRead === "on") {
    isToRead = false;
  }
  const newBook = new Book({
    title: title,
    author: author,
    isToRead: isToRead,
    category: cat,
  });
  await newBook.save();
  res.redirect("books");
});

app.get("/books/:id", async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);
  res.render("book", { book });
});

app.get("/books/:id/edit", async (req, res) => {
  const { id } = req.params;
  const bookToEdit = await Book.findById(id);
  res.render("edit", { book: bookToEdit, categories });
});

app.put("/books/:id", async (req, res) => {
  const { id } = req.params;
  const { title, author, cat, isRead } = req.body;
  let isToRead = true;
  if (isRead === "on") {
    isToRead = false;
  }
  const editedBook = await Book.findByIdAndUpdate(
    id,
    {
      title: title,
      author: author,
      category: cat,
      isToRead: isToRead,
    },
    { runValidators: true, new: true }
  );
  res.redirect(`/books/${editedBook.id}`);
});

app.listen(3000, () => {
  console.log("listening port 3000...");
});
