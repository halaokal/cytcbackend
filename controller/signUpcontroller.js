const User=require("../model/signUpmodel");
const bcrypt = require('bcrypt');


exports.register = async (req, res, next) => {
    try {
      console.log(req.body);
      const { email, username, password, phoneNumber, city, bloodType, role } = req.body;
  
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
  
      // Create a new user
      const newUser = new User({ email, username, password: hashedPassword, phoneNumber, city, bloodType, role });
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };


