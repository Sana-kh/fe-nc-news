import { useState } from "react";
import { postComment } from "./Api";

export default function PostComment({ articleId }) {
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !body) {
      setError("Please enter both username and comment.");
      return;
    }
    setSubmitting(true);
    setUsername("");
    setBody("");
    setError(null);
    postComment(articleId, { username, body })
      .then(() => {
        setSuccess(true);
      })
      .catch((error) => {
        setSuccess(false);
        setError(
          "An error occurred while posting your comment. Please try again later."
        );
        setSubmitting(false);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="comment-form-container">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          disabled={submitting}
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Enter your comment..."
          rows={4}
          disabled={submitting}
        />
        {error ? <p className="error">{error}</p> : null}
        {success ? (
          <p className="success">Comment posted successfully!</p>
        ) : null}
        <button type="submit" disabled={submitting}>
          Submit Comment
        </button>
      </form>
    </div>
  );
}
