import React from 'react';

// Components
import ArticleList from '../components/ArticleList';

// data
import articles from '../content/article-content';

const ArticlesListPage = () => {
  return (
    <>
      <h1 className='header'>Articles List</h1>
      <ArticleList articles={articles} />
    </>
  );
};

export default ArticlesListPage;
