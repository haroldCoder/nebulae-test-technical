import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config() // load environment variables from .env file

const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/myapp"


// method to connect to MongoDB

export const connectDB = async () => {
    try {
        // from mongoose create connection with provided uri
        await mongoose.connect(mongoURI)
        .then(()=>{
            // if the connection is successfully show the message
            console.log("MongoDB connected successfully")
        });
    }
    catch(err: any) {
        // if the connection is not successfully show the error message
        console.log(err.message);
        process.exit(1);
    }
}


