const adminRouter = require("express").Router();

const {signUpAdmin, loginAdmin} = require("../controller/adminController")


adminRouter.post("/signup-admin", signUpAdmin);
adminRouter.post("/login-admin", loginAdmin);




module.exports = {adminRouter}
