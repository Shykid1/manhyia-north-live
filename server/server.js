const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const dbConnect = require('./utils/db')
const errorHandler = require('./middlewares/Error.middleware')
const authRoutes = require('./routes/Auth.routes')
const candidateRoutes = require('./routes/Candidate.routes')
const pollingRoutes = require('./routes/Polling.routes')
const resultRoutes = require('./routes/Results.routes')


dotenv.config()

// Initialize express
const app = express()

// Connect to the database
dbConnect();


// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(errorHandler)

// Routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/candidate', candidateRoutes)
app.use('/api/v1/polling', pollingRoutes)
app.use('/api/v1/result', resultRoutes)

app.listen(5000, () => console.log('server started on http://localhost:5000'))