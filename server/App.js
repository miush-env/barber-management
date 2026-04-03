import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
import { clerkMiddleware } from "@clerk/express";

dotenv.config();

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// rutas
app.use("/api/users", userRoutes);

// conectar DB
connectDB();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
})
