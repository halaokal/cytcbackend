const User = require("../model/signUpmodel");

async function findUserByEmail(email) {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    throw error;
  }
}

module.exports = { findUserByEmail };
