const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  hotel: {
    type: String,
    required: true
  },
  tourduration: {
    type: String,
    required: true
  },
  departuredate: {
    type: Date, 
  },
  arrivaldate: {
    type: Date,
  },
  numberofperson: {
    type: String,
    required: true
  }
});

module.exports = Book = mongoose.model('book', BookSchema);