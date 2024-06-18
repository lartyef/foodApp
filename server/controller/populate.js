const data = require("./data.json");
const {connectDB} = require("./database/db");
const { FoodTypeModel } = require("./model/foodTypeModel");
require("dotenv").config();


// const start = async () => {

//     try {
//         await connectDB();
//         await FoodTypeModel.c
//         await FoodTypeModel.deleteMany()
//         console.log("successfull");
//         process.exit(0)
//     } catch (error) {
//         error.message
//         process.exit(1)
//     }

// };


(async function(){
    try {
        await connectDB()
        await FoodTypeModel.deleteMany();
        await FoodTypeModel.create(data);
        console.log("successfully");
        process.exit(0)
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
})()