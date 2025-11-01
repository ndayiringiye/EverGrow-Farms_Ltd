import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res) => {
  const { username, email, password, businesssector, address, image } = req.body;

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
      image
    });

   res.status(201).json({
  _id: user._id,
  username: user.username,
  email: user.email,
  businesssector: user.businesssector,
  address: user.address,
  image: user.image,
  token: generateToken(user._id),
  message: "User signed up successfully"
});


  } catch (error) {
    res.status(500).json({ message: 'Server error during registration', error: error.message });
  }
};


export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please enter email and password" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      businesssector: user.businesssector,
      address: user.address,
      image: user.image,
      token: generateToken(user._id),
      message: "Login successful",
    });

  } catch (error) {
    res.status(500).json({ message: "Server error during login", error: error.message });
  }
};
