import mongoose from "mongoose";
import { DB_Name } from "../constants.js"; 



const connectDB = async()=>{
    try {
        const connection = await mongoose.connect(`${process.env.MONGO_URI}/${DB_Name}`)
        console.log(`\n MongoDB connected `)
    } catch (error) {
        console.log("MONGODB connection error",error)
        process.exit(1)
    }
}


export default connectDB