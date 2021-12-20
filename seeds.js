const mongoose = require("mongoose");
const Book = require("./models/book");

mongoose
  .connect("mongodb://localhost:27017/myBookshell")
  .then(() => {
    console.log("connection oprn to db...");
  })
  .catch((err) => {
    console.log("error to connect db");
    console.log(err);
  });

// const b = new Book({
//   title: "The Master of Ice Gardens",
//   author: "Jaroslaw Grzedowicz",
//   isToRead: false,
// });

// b.save()
//   .then((b) => {
//     console.log(b);
//   })
//   .catch((err) => {
//     console.log("error when saving");
//     console.log(err);
//   });

// const myBooks = [
//   {
//     title: "Hyperion",
//     author: "Dan Simmons",
//     isToRead: false,
//     category: "sci-fi",
//   },
//   {
//     title: "Endymion",
//     author: "Dan Simmons",
//     isToRead: false,
//     category: "sci-fi",
//   },
//   {
//     title: "Outsider",
//     author: "Stephen King",
//     isToRead: true,
//     category: "horror",
//   },
//   {
//     title: "Bastion",
//     author: "Stephen King",
//     isToRead: true,
//     category: "thriller",
//   },
// ];

// Book.insertMany(myBooks)
//   .then((res) => {
//     console.log("done");
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("error");
//     console.log(err);
//   });
