import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/database";
import tableDataRoutes from "./routes/table-data.route";
import tripRoutes from "./routes/trip.route";

const app = express()
const PORT = process.env.PORT || 3000;

dotenv.config();
connectDB();

app.use(cors());
app.use(express.json()); 

app.use("/api/v1/table-data", tableDataRoutes);
app.use("/api/v1/trip", tripRoutes);

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
})