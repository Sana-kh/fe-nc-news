import { getArticleByArticleId, getCommentsByArticleId } from "./Api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";
import VoteArticle from "./VoteArticle";
import PostComment from "./PostComment";

export default function SingleArticle() {
  const [article, setArticle] = useState(null);
  const { articleId } = useParams();
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticleByArticleId(articleId)
      .then((data) => {
        setArticle(data);
      })
      .catch((error) => {
        setError(error);
      });
    getCommentsByArticleId(articleId)
      .then((comments) => {
        setComments(comments);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setComments([]);
        } else {
          setError(error);
        }
      });
  }, [articleId]);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  if (!article) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div className="article-view">
      <img src={article.article_img_url} alt="Article Image" />
      <h2>{article.title}</h2>
      <p>
        <strong>Topic:</strong> {article.topic}
      </p>
      <p>
        <strong>Author:</strong> {article.author}
      </p>
      <p className="article-body">{article.body}</p>
      <p>
        <strong>Publication Date:</strong>{" "}
        {new Date(article.created_at).toLocaleDateString()}
      </p>
      <VoteArticle articleId={articleId} initialVotes={article.votes} />
      <p>
        <strong>Comments:</strong> {article.comment_count}
      </p>
      <button onClick={toggleComments} className="comments-button">
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>

      {showComments && (
        <div className="comment-section">
          <h3>Comments</h3>

          {comments.length === 0 ? (
            <div>No comments yet.</div>
          ) : (
            <div className="comments-post">
              <PostComment articleId={articleId} />
              <CommentList comments={comments} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
