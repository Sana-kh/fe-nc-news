import { useState, useEffect } from "react";
import { getArticles } from "./Api";
import { Link } from "react-router-dom";

export default function () {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);

  const extractSummary = (body, maxLength) => {
    const summary = body.substring(0, maxLength);
    return body.length > maxLength ? `${summary}...` : summary;
  };

  return (
    <div className="articles">
      <h2>Explore articles</h2>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
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
              <p>{extractSummary(article.body, 100)}</p>
              <Link
                to={`/articles/${article.article_id}`}
                className="read-more-link"
              >
                Read more
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

