const mongoose = require('mongoose');

// Define schema for Order
const orderSchema = new mongoose.Schema({
  // Define the customer's name field for the order
  customerName: {
    type: String,
    required: true
  },
  // Define an array of items for the order
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FoodType',
    required: true
  }],
  // Define the total price of the order
  totalPrice: {
    type: Number,
    required: true
  },
  // Define the status of the order (e.g., 'pending', 'delivered', etc.)
  status: {
    type: String,
    enum: ['pending', 'processing', 'delivered'],
    default: 'pending'
  },
  // Define the date and time when the order was created
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create Order model
const orderModel = mongoose.model('Order', orderSchema);

module.exports = {orderModel}
