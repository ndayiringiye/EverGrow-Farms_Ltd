import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res) => {
  const { username, email, password, businesssector, address, profile } = req.body;

  if (!username || !email || !password || !businesssector || !address) {
    return res.status(400).json({ message: 'Please enter all required fields' });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      businesssector,
      address,
      profile
    });

    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      businesssector: user.businesssector,
      address: user.address,
      profile: user.profile,
      token: generateToken(user._id),
    });

  } catch (error) {
    res.status(500).json({ message: 'Server error during registration', error: error.message });
  }
};
