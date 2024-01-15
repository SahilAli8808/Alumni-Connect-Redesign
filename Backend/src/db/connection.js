const mongoose = require('mongoose')
const connectDB = async ()=> {
try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        autoIndex: true,
      });      
    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } 
    catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1)
    }
}

module.exports = connectDB