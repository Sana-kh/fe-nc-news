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