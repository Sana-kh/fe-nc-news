import { useState } from "react";
import { deleteComment } from "./Api";

export default function CommentCard({ comment, onDelete }) {
  const [deleting, setDeleting] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleDelete = () => {
    setDeleteConfirmation(true);
  };
  const confirmDelete = () => {
    setDeleting(true);
    deleteComment(comment.comment_id)
      .then(() => {
        onDelete(comment.comment_id);
        setDeleteConfirmation(false);
      })
      .catch((error) => {
        console.error("Error deleting comment:", error);
        setDeleting(false);
        setErrorMessage(
          "An error occurred while deleting the comment. Please try again later."
        );
      });
  };
  const cancelDelete = () => {
    setDeleteConfirmation(false);
  };

  return (
    <div className="comment-card">
      <p>
        <strong>Author:</strong> {comment.author}
      </p>
      <p>
        <strong>Created At:</strong>{" "}
        {new Date(comment.created_at).toLocaleString()}
      </p>
      <p>{comment.body}</p>
      <p>
        <strong>Votes:</strong> {comment.votes}
      </p>
      {comment.author === "jessjelly" && (
        <>
          <button onClick={handleDelete} disabled={deleting}>
            {deleting ? "Deleting..." : "Delete"}
          </button>
          {deleteConfirmation && (
            <div className="delete-confirmation">
              <p>Are you sure you want to delete this comment?</p>
              <button onClick={confirmDelete}>Yes</button>
              <button onClick={cancelDelete}>No</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
