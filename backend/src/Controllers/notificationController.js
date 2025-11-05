import Notification from "../models/notificationModel.js";

export const createNotification = async (req, res) => {
    const { recipientId, message, type } = req.body;

    try {
        const notif = await Notification.create({
            recipient: recipientId,
            message,
            type,
        });

        res.status(201).json({ success: true, notif });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

export const getUserNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find({
            recipient: req.params.userId
        }).sort({ createdAt: -1 });

        res.json({ success: true, notifications });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

export const markNotificationRead = async (req, res) => {
    try {
        const notification = await Notification.findByIdAndUpdate(
            req.params.notificationId,
            { isRead: true },
            { new: true }
        );

        res.json({ success: true, notification });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
