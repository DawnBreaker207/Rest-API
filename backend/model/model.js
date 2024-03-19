import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
    },
  },
  { versionKey: false }
);
const bookSchema = mongoose.Schema(
  {
    bookTitle: { type: String, required: true },
    bookPrice: { type: Number, required: true },
    noAvailable: Number,
    imageUrl: String,
    category: String,
    bookDescription: String,
    upc: String,
    currency: String,
  },
  {
    versionKey: false,
    timestamp: true,
  }
);

export const bookModel = mongoose.model('books', bookSchema);
export const categoryModel = mongoose.model('categories', categorySchema);
