import React from 'react';
import { Link } from 'react-router-dom';

// react bootstrap components
import ListGroup from 'react-bootstrap/ListGroup';

// data
import articles from '../content/article-content';

const ArticlesList = () => {
  return (
    <>
      <h1 className='header'>Articles List</h1>
      <ListGroup>
        {articles.map((item, i) => {
          return (
            <ListGroup.Item key={i} as={Link} to={`/article/${item.name}`}>
              {item.title}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
};

export default ArticlesList;
