import React from 'react';
import { Link } from 'react-router-dom';

// react bootstrap components
import ListGroup from 'react-bootstrap/ListGroup';

const ArticleList = ({ articles }) => {
  return (
    <ListGroup>
      {articles.map((item, i) => {
        return (
          <ListGroup.Item key={i} as={Link} to={`/article/${item.name}`}>
            <h3 className='header'>{item.title}</h3>
            <p>{item.content[0].slice(0, 100)}...</p>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default ArticleList;
