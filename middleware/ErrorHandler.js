const { HandleError } = require("../utils/Error")

function ErrorHnadler(err, req, res, next) {
  let errors = { email: "", password: "" };

  if (err instanceof HandleError) {
    if (err.message == "invalid password") {
      errors.password = "you have entered a wrong password";
      return res.status(400).json({
        success: false,
        errors,
      });
    }

    if (err.message == "invalid email") {
      errors.email = "this email does not exist";
      return res.status(400).json({
        success: false,
        errors,
      });
    }

    return errors;
  }

  return res.status(400).json({
    success: false,
    error: err.message,
  });
}

module.exports = { ErrorHnadler };
