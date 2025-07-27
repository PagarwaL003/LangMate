import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import { connectDB } from "./config/db.js";

const app = express();
const allowedOrigin = process.env.FRONTEND_URL || "http://localhost:5173";
app.use(
  cors({
    origin: allowedOrigin,
    credentials: true, //allow frontend to send cookies
  })
);
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/chat", chatRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

connectDB();

// if (require.main === module) {
//   const PORT = process.env.PORT || 3000;
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// }

export default app;
