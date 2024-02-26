// import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path: './env'
})


connectDB()




























//connect into DB connect
// iife 
// (async()=>{
//     // connect to the database
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_Name}`)
//         app.on("error",(error)=>{
//             console.log('error',error)
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log('app is listening  on port '+ process.env.PORT);
//         })
//     } catch (error) {
//         console.log('Error:',error);
//         throw error
//     }
// })()