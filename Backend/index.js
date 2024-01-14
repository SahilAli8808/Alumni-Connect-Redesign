const express = require('express');

const app = express
const connectDB = require('./src/db/connection');
connectDB()
.then(()=>{
  app.listen(process.env.PORT, ()=>{
    console.log(`App is running on port ${process.env.PORT}`)
  })
})
.catch((error)=>{
console.log("Mongo db connection failed:",error)
})