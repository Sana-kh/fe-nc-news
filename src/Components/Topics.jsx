import { useEffect, useState } from "react";
import { getTopics } from "./Api";
import { Link } from "react-router-dom";

export default function Topics() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [allTopics, setAllTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setAllTopics(topics);
    });
  }, []);

  const handleTopicClick = (topicName) => {
    setSelectedTopic(topicName);
  };

  return (
    <div className="topics">
      <h2>topics</h2>
      <ul>
        {allTopics.map((topic) => {
          return (
            <li key={topic.slug}>
              <Link
                to={`/articlesByTopic/${topic.slug}`}
                onClick={() => handleTopicClick(topic.slug)}
                className={selectedTopic === topic.slug ? "active" : ""}
              >
                {topic.slug}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
