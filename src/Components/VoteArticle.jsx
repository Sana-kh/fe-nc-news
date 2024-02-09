import { useState } from "react";
import { voteArticle } from "./Api";
export default function VoteArticle({ articleId, initialVotes }) {
  const [voteCount, setVoteCount] = useState(initialVotes);
  const [voted, setVoted] = useState(false);
  const [error, setError] = useState(null);

  const handleVote = (increment) => {
    if (!voted) {
      voteArticle(articleId, increment)
        .then(() => {
          setVoteCount((prevVoteCount) =>
            increment===1 ? prevVoteCount + 1 : prevVoteCount - 1
          );
          setVoted(true);
        })
        .catch((error) => {
          setError(error);
        });
    }
  };

  if (error) {
    return <div>An error has occurred!</div>;
  }

  return (
    <div>
      <p><strong>Votes: {voteCount}</strong></p>
      <button onClick={() => handleVote(1)} disabled={voted} className="vote-button upvote">
        Upvote
      </button>
      <button onClick={() => handleVote(-1)} disabled={voted} className="vote-button downvote">
        Downvote
      </button>
    </div>
  );
}
