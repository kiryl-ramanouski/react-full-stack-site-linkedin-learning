import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from './pages/AboutPage';
import Article from './pages/ArticlePage';
import ArticlesList from './pages/ArticlesList';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';

import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='page-body'>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/about' element={<About />} exact />
          <Route path='/articles-list' element={<ArticlesList />} exact />
          <Route path='/article' element={<Article />} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;
