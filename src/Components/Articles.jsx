import { useState, useEffect } from "react";
import { getArticles } from "./Api";
import ArticleCard from "./ArticleCard";

export default function () {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
    });
  }, []);

  

  return (
    <div className="articles">
      <h2>Explore articles</h2>
      <ul>
        {articles.map((article) => {
          return (
            <ArticleCard article= {article}/>
          );
        })}
      </ul>
    </div>
  );
}

