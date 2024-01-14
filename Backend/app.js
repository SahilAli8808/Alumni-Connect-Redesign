const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookiesParser = require('cookie-parser');
dotenv.config();

const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    Credential: true
}))

app.use(express.json({
    limit: "16kb"
}))

app.use(express.urlencoded({
    extended:true, limit:"16kb"
}))

app.use(express.static(`${__dirname}/public`))
app.use(cookiesParser())

module.exports = {app}