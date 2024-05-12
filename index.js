const express = require('express');
const cookieParser = require('cookie-parser')
require('dotenv').config()
const {connectDB} = require("./database/db")
// const { userRouter } = require("./routes/userRoutes")
const { ErrorHnadler } = require('./middleware/ErrorHandler');
const {userRouter} = require("./routes/userRoutes")

const app = express();

const port = process.env.PORT || 8080;






// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/v1", userRouter)
app.use(ErrorHnadler);




(async function(){
    try {
        await connectDB();
        app.listen(port, () => console.log(`server running on localhost port ${port}`))
    } catch (error) {
        console.log(error.message)
    }
})()