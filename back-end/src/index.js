import express from "express";
import authRoutes from "./router/auth.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors';

import {connectDb} from "./lib/db.js"
dotenv.config();
const app = express();

const PORT = process.env.PORT;

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

//routes
app.use("/api/auth", authRoutes);




//port for listening
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)

    connectDb();
});