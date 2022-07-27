import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesList from './pages/ArticlesList';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';

import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='page-body'>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<About />} />
            <Route path='/articles-list' element={<ArticlesList />} />
            <Route path='/article/:name' element={<ArticlePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
