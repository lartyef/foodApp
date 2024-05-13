const mongoose = require('mongoose');

// schema for FoodType
const foodTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  imageUrl: {
    type: String
  },
  price: {
    type: Number, 
    required: true 
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// FoodType model
const FoodType = mongoose.model('FoodType', foodTypeSchema);

module.exports = {FoodType}
