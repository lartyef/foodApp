const riderRouter = require("express").Router();
//const { signupRider, loginRider } = require("../controller/riderController");

const {signupRider, loginRider} = require("../controller/riderController")


// SIGNUP A RIDER
riderRouter.post("/signup-rider", signupRider);
riderRouter.post("/login-rider", loginRider);

module.exports = { riderRouter };
