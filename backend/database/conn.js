import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

async function connect() {
    const getUri = "mongodb+srv://Rajat_28:Rajat2590852@cluster0.9vk4s.mongodb.net/twitter-clone?retryWrites=true&w=majority";
    
    // mongoose.set('strictQuery', true)
    const db = await mongoose.connect(getUri);
    console.log("Database Connected Successfully...!");

    return db;
}


export default connect;