

const AdminModel = require("../model/adminModel");
const { HandleError } = require("../utils/Error");
const { CatchErrorFunc } = require("../utils/CatchErrorFunc");
const bcrypt = require("bcrypt")

// Function to create a new admin
const signUpAdmin = CatchErrorFunc(async (req, res) => {
  const { name, email, password } = req.body;
  
  // Check if admin with the same username already exists
  const existingAdmin = await AdminModel.findOne({ email });
  if (existingAdmin) {
    throw new HandleError(400, "Admin with this username already exists", 400);
  }
const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password, salt)
  // Create new admin
  const newAdmin = await AdminModel.create({ name, email, password });
  
  res.status(201).json({ success: true, newAdmin });
});


const loginAdmin = CatchErrorFunc(async (req, res) => {
    const { email, password } = req.body;
    const user = await AdminModel.findOne({ email });
    if (user) {
      const isPassword = await bcrypt.compare(password, user.password);
      if (isPassword) {
        await jwt.sign(
          { id: user._id },
          process.env.JWT_SECRET,
          { expiresIn: period },
          async (err, token) => {
            if (err) {
              throw new HandleError(400, err.message, 400);
            }
            res.cookie("adminToken", token, {
              maxAge: 1000 * period,
              httpOnly: true,
            });
            res.status(200).json({
              success: true,
              user,
            });
          }
        );
      } else {
        throw new HandleError(400, "invalid password", 404);
      }
    } else {
      throw new HandleError(400, "invalid email", 404);
    }
  });
  


module.exports = { signUpAdmin , loginAdmin };
