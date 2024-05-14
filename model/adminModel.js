
const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    
  },
  email: {
    type: String,
    required: true,
    unique: true
   
  },
  password: {
    type: String,
    required: true
  }
});

const AdminModel = mongoose.model("admin", adminSchema);

module.exports = AdminModel;
