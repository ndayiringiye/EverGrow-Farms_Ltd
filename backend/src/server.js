import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./Config/db.js";
import userRoutes from "./routes/userRoutes.js";
import notificationRoute from "./routes/notificationRoute.js"



dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/notifications", notificationRoute);

app.get("/", (req, res) => {
  res.send("Project set up");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await connectDb();
  console.log(`Server is running on http://localhost:${PORT}`);
});
