import { Link } from "react-router-dom";

export default function ArticleCard({article}){

    const extractSummary = (body, maxLength) => {
        const summary = body.substring(0, maxLength);
        return body.length > maxLength ? `${summary}...` : summary;
      };
    return(
        <div>
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
                <strong>Votes:</strong> {article.votes}
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
        </div>
    )
}