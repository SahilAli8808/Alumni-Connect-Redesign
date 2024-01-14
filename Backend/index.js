const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { DB_NAME } = require('./constants');

dotenv.config();

const app = express();

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.on('error', (error) => {
      console.log('Error:', error);
      throw error;
    });

    app.listen(process.env.PORT || 8081, () => {
      console.log(`App is running on ${process.env.PORT || 8081}`);
    });
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
}

startServer();
