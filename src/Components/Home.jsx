import { useEffect, useState } from "react";
import { getArticles } from "./Api";

export default function Home() {
  const [recentArticles, setRecentArticles] = useState([]);
  useEffect(() => {
    getArticles().then((itemData) => {
      const recentItems = itemData.slice(1, 4);
      setRecentArticles(recentItems);
    });
  }, []);

  return (
    <div className="recent-articles-container">
      <h2>Recent Articles </h2>
      <div>
        <ul className="most-recent-list">
          {recentArticles.map((item) => {
            return (
              <li key={item.article_id} className="most-recent-item">
                <img src={item.article_img_url} alt={item.title} />
                <h2>
                  {item.title}
                </h2>
                <p>{item.body}</p>
                <p>{item.author}</p>
                <p>{new Date(item.created_at).toLocaleDateString()}</p>
                <p>{item.votes} votes</p>
                <p>{item.comment_count} comments</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
