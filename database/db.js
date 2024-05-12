const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("connected to db succesfully")
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {connectDB};