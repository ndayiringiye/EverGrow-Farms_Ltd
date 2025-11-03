import createNotification from '../services/notificationService.js'; // Assuming your notification logic is in a service file

// ... other imports

const handleNewComment = async (req, res) => {
    const { userId, articleId, commentText } = req.body; // Example data

    // Assuming you have the authorId of the article
    const articleAuthorId = 'some_author_id'; // Get this from your database

    try {
        // Create a notification for the author about the new comment
        await createNotification(
            articleAuthorId,
            `A new comment was posted on your article.`,
            'new_comment' // A custom type for new comments
        );

        // Also, you might want to notify the commenter about something
        // await createNotification(
        //     userId,
        //     `Your comment has been successfully posted.`,
        //     'comment_posted'
        // );

        res.status(201).json({ message: 'Comment posted and notification sent!' });
    } catch (error) {
        console.error('Error handling new comment:', error);
        res.status(500).json({ error: 'Failed to post comment or send notification.' });
    }
};