const mongoose = require("mongoose");

const riderSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: [true, "please enter a password"]
  },
  tel: {
    type: Number,
    required: true
  },
//   // Adding fields for location
//   location: {
//     type: { type: String, enum: ["Point"], default: "Point" },
//     coordinates: { type: [Number], default: [0, 0] }
//   },

  // Adding field for availability
  availability: {
    type: Boolean,
    default: true
  }
});

// Indexing the location field for geospatial queries
riderSchema.index({ location: "2dsphere" });

const RiderModel = mongoose.model("rider", riderSchema);

module.exports = { RiderModel };
