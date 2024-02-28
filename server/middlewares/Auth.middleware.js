const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const asyncHandler = require('express-async-handler')
const User = require('../models/User.model.js')

dotenv.config();

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {

      // get token from the request header
      token = req.headers.authorization.split(" ")[1];

      //verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //GET the user from the database and attach it to the request object
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };