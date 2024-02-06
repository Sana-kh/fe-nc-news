import { getArticleByArticleId } from "./Api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleArticle() {
  const [article, setArticle] = useState(null);
  const { articleId } = useParams();

  useEffect(() =>{
    getArticleByArticleId(articleId).then((data)=>{
        setArticle(data);
    })
  },[articleId])

  if (!article) {
    return <div className="loading">Loading...</div>;
  }
  return(
    <div className="single-article">
        <img src={article.article_img_url} alt="Article Image" />
              <h2>{article.title}</h2>
              <p>
                <strong>Topic:</strong> {article.topic}
              </p>
              <p>
                <strong>Author:</strong> {article.author}
              </p>
              <p>
                <strong>Publication Date:</strong>{" "}
                {new Date(article.created_at).toLocaleDateString()}
              </p>
              <p>
                <strong>Comments:</strong> {article.comment_count}
              </p>
              <p className="article-body">{article.body}</p>
    </div>
  )
}
