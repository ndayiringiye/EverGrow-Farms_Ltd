import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || process.env.SECRET_KEYS;

const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "30d", 
  });
};

export default generateToken;
