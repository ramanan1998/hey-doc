const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(uri);
        console.log(`Database connected at: ${connect.connection.name}, ${connect.connection.host}`);

    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;