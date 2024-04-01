const User = require("../models/User.model");
const Admin = require("../models/Admin.model");
const Agent = require("../models/Agent.model");
const Polling = require("../models/Polling.model");
const middleware = require("../middlewares/Auth.middleware");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
dotenv.config();

// Register an admin
exports.createAdmin = async (req, res) => {
  const { image, firstname, lastname, othername, email, password, role } =
    req.body;
  try {
    // Check if role is set to Admin
    if (role !== "Admin") {
      res.status(400).json({ message: "Please specify role to Admin" });
    }

    // Check if user with the same email exist
    const userExist = await User.findOne({ email });
    if (userExist) {
      res
        .status(400)
        .json({ message: "User with the same email already exist" });
    }

    // hash password and save user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      password: hashedPassword,
      role,
    });

    // Store admin details in admin database
    const admin = await Admin.create({
      image,
      firstname,
      lastname,
      othername,
      userId: newUser._id,
    });

    res.status(201).json(admin);
  } catch (error) {
    res.status(500).json({ error: "Failed to register admin" });
  }
};

// Register an Agent
exports.createAgent = async (req, res) => {
  try {
    const {
      image,
      firstname,
      lastname,
      othername,
      phone,
      email,
      password,
      role,
      pollingcode,
    } = req.body;

    if (role !== "Agent") {
      res.status(400).json({ message: "Please specify role to Admin" });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      res
        .status(400)
        .json({ message: "User with the same email already exist" });
    }

    // hash password and save user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      password: hashedPassword,
      role,
    });

    // Store admin details in admin database
    const agent = await Agent.create({
      image,
      firstname,
      lastname,
      othername,
      phone,
      pollingcode,
      userId: newUser._id,
    });

    res.status(201).json(agent);
  } catch (error) {
    res.status(500).json({ error: "Failed to register admin" });
  }
};

// Get all Admins
exports.getAdmins = asyncHandler(async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch admins" });
  }
});

// Get all Agents
exports.getAgents = asyncHandler(async (req, res) => {
  try {
    const agents = await Agent.find();
    res.status(200).json(agents);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch agents" });
  }
});

// Get all users
exports.getUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Login User
exports.loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    User.findOne({ email }).then((user) => {
      if (!user) {
        res.status(401).json({ message: "User does not exist" });
      } else if (user) {
        //Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            res.status(500).json({
              message: "An error occured while logging in. Try again",
            });
          }
          if (isMatch) {
            res.status(200).json({
              success: true,
              message: "User logged in successfully",
              token: generateToken(user._id),
            });
          } else {
            res.status(401).json({ message: "Invalid email or password" });
          }
        });
      }
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An unexpected error occurred. Please try again later" });
  }
});

exports.refreshToken = async (req, res) => {
  try {
    const { token } = req.body;
    const newToken = await refreshTokenService(token);
    res.json({ newToken: newToken });
  } catch (error) {
    res.status(401).json({ "Invalid token": error });
  }
};

// Refresh Token
const refreshTokenService = async (oldToken, res, req) => {
  const verifyToken = middleware.veryfyToken;
  try {
    const decodedToken = verifyToken(oldToken);
    const user = User.findById(decodedToken._id);
    if (!user) {
      res.status(401).json({ message: "User not found" });
    }
    const newToken = generateToken(user);
    return newToken;
  } catch (error) {
    res.status(500).json({ "Invalid Token:": error });
  }
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};
