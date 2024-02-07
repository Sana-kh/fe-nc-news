import { getArticleByArticleId, getCommentsByArticleId } from "./Api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";

export default function SingleArticle() {
  const [article, setArticle] = useState(null);
  const { articleId } = useParams();
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() =>{
    getArticleByArticleId(articleId).then((data)=>{
        setArticle(data);
    })
    getCommentsByArticleId(articleId).then((comments)=>{
      setComments(comments)
    })
  },[articleId])

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  if (!article) {
    return <div className="loading">Loading...</div>;
  }
  return(
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
              <p>
                <strong>Comments:</strong> {article.comment_count}
              </p>
              <button onClick={toggleComments} className="comments-button">
        {showComments ? 'Hide Comments' : 'Show Comments'}
      </button>

      {showComments && (
        <div className="comment-section">
          <h3>Comments</h3>
          <CommentList comments={comments} />
        </div>
      )}
             
    </div>
  )
}
