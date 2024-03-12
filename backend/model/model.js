import  mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  category: String,
  books: [
    {
      bookTitle: String,
      bookPrice: String,
      noAvailable: String,
      imageURL: String,
      bookDescription: String,
      upc: String,
    },
  ],
});

export const bookModel = mongoose.model('books', bookSchema);