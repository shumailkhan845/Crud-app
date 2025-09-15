import dotenv from 'dotenv';
import { app } from "./app.js";
import connectDB from './Database/connectDB.js';
dotenv.config({
    path: './.env'
})

connectDB().then(()=>{
    app.listen(process.env.PORT, ()=>{
    console.log(`Server is listening at http://localhost:${process.env.PORT}`)
})
}).catch((err)=>{
    console.log(err)
})










