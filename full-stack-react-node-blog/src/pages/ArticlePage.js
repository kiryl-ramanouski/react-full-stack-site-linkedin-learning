import React from 'react';
import { useParams } from 'react-router-dom';

// data
import articles from '../content/article-content';

const ArticlePage = () => {
  const { name } = useParams();
  const article = articles.find((item) => item.name === name);

  if (!article) {
    return <h2 className='header'>Article doesn't exist.</h2>;
  }

  return (
    <>
      <h2 className='header'>{article.title}</h2>
      <>
        {article.content.map((item, i) => {
          return (
            <p key={i} className='main-text'>
              {item}
            </p>
          );
        })}
      </>
    </>
  );
};

export default ArticlePage;
