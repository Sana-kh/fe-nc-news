import axios from "axios";
const ncApi = axios.create({
  baseURL: "https://webtech-otc2.onrender.com/api",
});

export const getArticles = () => {
  return ncApi.get("/articles").then((res) => {
    return res.data.articles;
  });
};

export const getTopics = () => {
  return ncApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getArticleByArticleId = (articleId) =>{
  return ncApi.get(`/articles/${articleId}`).then((res) => {
    return res.data.article;
  })
}

export const getCommentsByArticleId = (articleId) => {
  return ncApi.get(`/articles/${articleId}/comments`).then((res) => {
    return res.data.comments;
  })
}

export const voteArticle = (articleId, newVote) => {
  return ncApi.patch(`/articles/${articleId}`, {inc_votes: newVote}).then((res)=>{
    return res.data.article;
  })
}

export const postComment =(articleId, comment) => {
  return ncApi.post(`/articles/${articleId}/comments`, comment).then((res)=>{
    return res.data.comment;
  })
}

export const deleteComment =(commentId)=>{
  return ncApi.delete(`/comments/${commentId}`).then((res)=>{
    return;
  })
}