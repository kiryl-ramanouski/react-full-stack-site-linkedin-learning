import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import About from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import Article from './pages/ArticlePage';

import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='page-body'>
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/about' element={<About />} exact />
          <Route path='/article-list' element={<ArticlesList />} exact />
          <Route path='/article' element={<Article />} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;
