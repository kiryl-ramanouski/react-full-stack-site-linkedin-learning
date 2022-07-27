import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import About from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';

// Components
import NavBar from './components/NavBar';

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
            <Route path='/articles-list' element={<ArticlesListPage />} />
            <Route path='/article/:name' element={<ArticlePage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
