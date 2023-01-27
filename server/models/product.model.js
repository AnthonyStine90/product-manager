const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({  
  title: {
    type: String,
    required: [true, "Please enter product title"],
    minLength: [2, 'Title must be at least two characters.']
  },
  price: {
    type: Number,
    required: [true, 'Please enter a price.'],
    min: [.01, 'Price must be more than 0'],
  },
  description: {
    type: String,
    minLength: [3, 'Description must be at least three characters.']
  }
}, { timestamps: true })

const Product = mongoose.model("Product", productSchema);
module.exports = Product;