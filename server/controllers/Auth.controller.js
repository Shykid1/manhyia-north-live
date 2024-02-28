const User = require('../models/User.model');
const Admin = require('../models/Admin.model');
const Agent = require('../models/Agent.model');
const Polling = require('../models/Polling.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const dotenv = require('dotenv');
dotenv.config()

// Register an admin
exports.createAdmin = async (req, res) => {
  const {
    image,
    firstname,
    lastname,
    othername,
    email,
    password,
    role,
  } = req.body
  try {
    // Check if role is set to Admin
    if (role !== 'Admin') {
      res.status(400)
      throw new Error('Please specify role to Admin')
    }

    // Check if user with the same email exist
    const userExist = await User.findOne({email})
    if (userExist) {
      res.status(400)
      throw new Error('User with the same email already exist')
    }

    // hash password and save user
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({
      email,
      password: hashedPassword,
      role
    })

    // Store admin details in admin database
    const admin = await Admin.create({
      image,
      firstname,
      lastname,
      othername,
      userId: newUser._id
    })

    res.status(201).json(admin)
  } catch (error) {
    res.status(500).json({error: 'Failed to register admin'})
  }
}

// Register an Agent
exports.createAgent = async (req, res) => {
  try {
    if (req.user.role !== 'Admin') {
      res.status(400)
      throw new Error('You are not authorized')
    }

    const {
      firstname,
      lastname,
      othername,
      email,
      password,
      role,
      pollingCode
    } = req.body

    const polling = await Polling.findOne({pollingcode: pollingCode})
    if (!polling) {
      res.status(404)
      throw new Error('Polling not found')
    }

    // Check if role is set to Agent 
    if (role !== "Agent") {
      res.status(400)
      throw new Error('Please specify role to Agent')
    }

    // Check if user with the same email exist
    const userExist = await User.findOne({email})
    if (userExist) {
      res.status(400)
      throw new Error('User with the same email already exist')
    }

    // hash password and save user
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({
      email,
      password: hashedPassword,
      role
    })

    // Store agent details in agent database
    const agent = await Agent.create({
      image,
      firstname,
      lastname,
      othername,
      userId: newUser._id,
      pollingCode: polling
    })

    res.status(201).json(agent)
  } catch (error) {
    res.status(500).json({error: 'Failed to register Agent'})
  }
}

// Login User
exports.loginUser = asyncHandler(async (req, res) => {
  try {
    const {email, password} = req.body
    User.findOne({email}).then(user => {
      if (!user) {
        res.status(401)
        throw new Error('User does not exist')
      } else if (user) {
        //Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            res.status(500)
            throw new Error('An error occured while logging in. Try again')
          }
          if (isMatch) {
            res.status(200).json({
              success: true,
              message: 'User logged in successfully',
              token: generateToken(user._id)
            })
          } else {
            res.status(401)
            throw new Error('Invalid email or password')
          }
        })
      }
    })
  } catch (error) {
    res.status(500).json({error: 'An unexpected error occurred. Please try again later'})
  }
})

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
  })
}
