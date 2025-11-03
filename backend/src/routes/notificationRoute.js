import express from "express";
import { createNotification, getUserNotifications, markNotificationRead } from "../Controllers/notificationController.js";

const router = express.Router();

router.post("/create", createNotification);
router.get("/:userId", getUserNotifications);
router.patch("/:notificationId/mark-read", markNotificationRead);

export default router;
