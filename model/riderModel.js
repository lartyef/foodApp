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
        required: true,
    
    },

})

const riderModel = new model.mongoose("rider", riderSchema)