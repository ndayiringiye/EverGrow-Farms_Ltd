import createNotification from '../services/notificationService.js'; 

const handleNewComment = async (req, res) => {
    const { userId, articleId, commentText } = req.body; 
    const articleAuthorId = 'some_author_id'; 
    try {
        await createNotification(
            articleAuthorId,
            `A new comment was posted on your article.`,
            'new_comment' 
        );
        res.status(201).json({ message: 'Comment posted and notification sent!' });
    } catch (error) {
        console.error('Error handling new comment:', error);
        res.status(500).json({ error: 'Failed to post comment or send notification.' });
    }
};