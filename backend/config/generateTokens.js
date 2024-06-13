const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET_KEY || "PC1234";

const generateToken = (_id) => {
  return jwt.sign({ _id }, SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
