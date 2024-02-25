import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import * as dotenv from 'dotenv'
import dbConnect from './utils/db.js'


dotenv.config()

dbConnect();

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
    res.status(200).send({
        message: "Hello there"
    })
})

app.listen(5000, () => console.log('server started on http://localhost:5000'))