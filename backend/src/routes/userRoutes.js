import express from "express";
import { signup } from "../Controllers/UserController.js";
import protect from "../middlewares/authMiddleware.js";


 

const router = express.Router();

router.post("/signup",signup)

export default router;
