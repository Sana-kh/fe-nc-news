import { useState } from 'react'
import {Route, Routes} from "react-router-dom"
import './App.css'
import Header from './Components/Header'
import Articles from './Components/Articles'
import Topics from './Components/Topics'
import ArticlesByTopic from './Components/ArticlesByTopic'
import Home from './Components/Home'
import SingleArticle from './Components/SingleArticle'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path= "/" element= {<Home />}/>
        <Route path= "/articles" element= {<Articles />} />
        <Route path= "/topics" element= {<Topics />} />
        <Route path= "/articlesByTopic/:TopicName" element= {<ArticlesByTopic />} />
        <Route path="/articles/:articleId" element={<SingleArticle />} />
      </Routes>
    </>
  )
}

export default App
