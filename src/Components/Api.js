import axios from "axios";
const ncApi = axios.create({
  baseURL: "https://webtech-otc2.onrender.com/api",
});

export const getArticles = () => {
  return ncApi.get("/articles").then((res) => {
    console.log(res.data.articles)
    return res.data.articles;
  });
};

export const getTopics = () => {
  return ncApi.get("/topics").then((res) => {
    console.log(res.data)
    return res.data.topics;
  });
};