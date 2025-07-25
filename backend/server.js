import express from 'express';
import 'dotenv/config'
import cors from "cors";
import cookieParser from 'cookie-parser';

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import { connectDB } from './config/db.js';

const app = express();
const PORT = process.env.PORT;

app.use(cors({
    origin: "http://localhost:5173",
    credentials:true,   //allow frontend to send cookies
}));
app.use(express.json());
app.use(cookieParser());


// routes
app.use("/api/v1/auth" , authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/chat" , chatRoutes);


app.get('/' ,(req , res) =>{
    console.log("Hello World");
});

app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
