const {UserModel} = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { HandleError } = require("../utils/Error");
const { CatchErrorFunc } = require("../utils/CatchErrorFunc");
const {SendMail} = require("../utils/sendMail")

const period = 60 * 60 * 24;

const signupUser = CatchErrorFunc(async (req, res) => {
  const { firstname, lastname, email, password, tel } = req.body;
  const userExist = await UserModel.findOne({ email });
  if (userExist) {
    throw new HandleError(400, "User with this email already exists", 400);
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new UserModel({
    firstname,
    lastname,
    email,
    password: hashedPassword,
    tel,
  });
  const savedUser = await newUser.save();
  res.status(201).json({
    success: true,
    savedUser,
  });

});

const loginUser = CatchErrorFunc(async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });
  console.log(user);
  if (user) {
      const correctPassword = await bcrypt.compare(password, user.password);

      if (correctPassword) {
          const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: period })
           if (token) {
              let text = `<h1>User Logged Into Food Application</h1>
                     <p> Hello ${user.firstname}, you have just logged into your account,
                     if you did not authorize this login kindly report to our support team
                      </p>
                     `
              await SendMail(user.email, "Successful Login", text);
              res.cookie('userToken', token, { maxAge: 1000 * period, httpOnly: true })
               res.status(200).json({
                  success: true,
                  user,
                  token

              })
          } else {
              throw new HandleError(400, "invalid token", 400)
          }

      }
      else {
          throw new HandleError(process.env.WRONG_PASSWORD, 'invalid password', 400)
      }
  }
  else {
      throw new HandleError(400, 'invalid email', 400)
  }
});



const submitEmailPasswordUpdate = CatchErrorFunc(async (req, res) => {
  const { email } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new HandleError(400, "user not found", 400);
  }
  await jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: 60 * 5 },
    async (error, token) => {
      if (error) {
        throw new HandleError(400, error.message, 400);
      }
      let text = `http://localhost:3000/api/v1/update-password/${user._id}/${token}`;
      console.log(text);
      await sendMail(user.email, "Reset password", text);
    }
  );
});


module.exports = { signupUser, loginUser };
