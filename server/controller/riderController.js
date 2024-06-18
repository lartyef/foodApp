const { RiderModel } = require("../model/riderModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { HandleError } = require("../utils/Error");
const { CatchErrorFunc } = require("../utils/CatchErrorFunc");
const { SendMail } = require("../utils/sendMail");

const period = 60 * 60 * 24;

const signupRider = CatchErrorFunc(async (req, res) => {
  const { firstname, lastname, email, password, tel, availability } = req.body;
  const riderExist = await RiderModel.findOne({ email });
  if (riderExist) {
    throw new HandleError(400, "Rider with this email already exists", 400);
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newRider = new RiderModel({
    firstname,
    lastname,
    email,
    password: hashedPassword,
    tel,
    // location,
    availability
  });
  const savedRider = await newRider.save();
  res.status(201).json({
    success: true,
    savedRider
  });
});

const loginRider = CatchErrorFunc(async (req, res) => {
  const { email, password } = req.body;

  const rider = await RiderModel.findOne({ email });
  if (rider) {
    const correctPassword = await bcrypt.compare(password, rider.password);

    if (correctPassword) {
      const token = await jwt.sign({ id: rider._id }, process.env.JWT_SECRET, {
        expiresIn: period
      });
      if (token) {
        let text = `<h1>Rider Logged Into Food Application</h1>
                     <p> Hello ${rider.firstname}, you have just logged into your account,
                     if you did not authorize this login kindly report to our support team
                      </p>
                     `;
        await SendMail(rider.email, "Successful Login", text);
        res.cookie("riderToken", token, {
          maxAge: 1000 * period,
          httpOnly: true
        });
        res.status(200).json({
          success: true,
          rider,
          token
        });
      } else {
        throw new HandleError(400, "invalid token", 400);
      }
    } else {
      throw new HandleError(process.env.WRONG_PASSWORD, "invalid password", 400);
    }
  } else {
    throw new HandleError(400, "invalid email", 400);
  }
});

module.exports = { signupRider, loginRider };
