import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Pages
import NotFoundPage from './NotFoundPage';

// Components
import ArticleList from '../components/ArticleList';
import CommentsList from '../components/CommentsList';

// data
import articles from '../content/article-content';

const ArticlePage = () => {
  const { name } = useParams();
  const article = articles.find((item) => item.name === name);
  const otherArticles = articles.filter((item) => item.name !== name);

  const [articlesInfo, setArticlesInfo] = useState({
    upVotes: 0,
    comments: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/article/${name}`);
      const body = await result.json();
      setArticlesInfo(body);
    };

    fetchData();
  }, [name]);

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h2 className='header'>{article.title}</h2>
      <p>This post has been up voted {articlesInfo.upVotes} times</p>
      <>
        {article.content.map((item, i) => {
          return (
            <p key={i} className='main-text'>
              {item}
            </p>
          );
        })}
      </>
      <CommentsList comments={articlesInfo.comments} />
      {otherArticles && (
        <>
          <h3 className='header'>Other Articles</h3>
          <ArticleList articles={otherArticles} />
        </>
      )}
    </>
  );
};

export default ArticlePage;
