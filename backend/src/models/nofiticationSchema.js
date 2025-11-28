import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: [true, 'Recipient is required']
    },
    message: {
        type: String,
        required: [true, 'Message is required']
    },
    type: {
        type: String,
        required: [true, 'Notification type is required'],
        enum: ['info', 'warning', 'error', 'success', 'message'] 
    },
    isRead: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true 
});

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;