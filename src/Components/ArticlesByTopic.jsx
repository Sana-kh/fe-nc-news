import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "./Api"; // Define API function to fetch articles by topic
import ArticleCard from "./ArticleCard";
import Topics from "./Topics";
export default function ArticlesByTopic() {
  const [articlesInTopic, setArticlesInTopic] = useState([]);
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    // Fetch articles by topic
    getArticlesByTopic(topic)
      .then((data) => setArticlesInTopic(data))
      .catch((error) => console.error("Error fetching articles:", error));
  }, [topic]);

  return (
    <div className="articles">
      {/* <Topics /> */}
      <h2>Articles on {topic}</h2>
      <ul>
        {articlesInTopic.map((article) => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    </div>
  );
}
