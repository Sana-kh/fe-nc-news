export default function({comment}){

    return (
        <div className="comment-card">
          <p><strong>Author:</strong> {comment.author}</p>
          <p><strong>Created At:</strong> {new Date(comment.created_at).toLocaleString()}</p>
          <p>{comment.body}</p>
          <p><strong>Votes:</strong> {comment.votes}</p>
        </div>
      );
}