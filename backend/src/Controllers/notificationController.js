import Notification from "../models/notificationModel.js"
 const  createNotification = async (recipientId, message, type) => {
    try {
        const newNotification = new Notification({
            recipient: recipientId,
            message: message,
            type: type,
        });

        await newNotification.save();
        console.log(`Notification created for user ${recipientId}.`);
        return newNotification;

    } catch (error) {
        console.error("Failed to save notification:", error);
    }
}
export default createNotification