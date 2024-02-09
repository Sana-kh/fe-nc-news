import CommentCard from "./CommentCard";

export default function CommentList({ comments, setComments}) {
  const handleDeleteComment = (deletedCommentId) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.comment_id !== deletedCommentId)
    );
  };

    return (
      <div className="comment-list">
        {comments.map(comment => (
          <CommentCard key={comment.comment_id} comment={comment} onDelete={handleDeleteComment} />
        ))}
      </div>
    );
  }