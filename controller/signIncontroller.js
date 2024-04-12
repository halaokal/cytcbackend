const bcrypt = require('bcrypt');
const { findUserByEmail } = require("../model/signInmodel");

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // If everything is correct, you can generate a token or session for authentication
    // For simplicity, let's just return a success message for now
    return res.status(200).json({ message: 'Login successful' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
