const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

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

});


const UserModel =  mongoose.model('user', userSchema)

module.exports = {UserModel}