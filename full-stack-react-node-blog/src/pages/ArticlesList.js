import React from 'react';
import { Link, Outlet } from 'react-router-dom';

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
            <ListGroup.Item key={i} as={Link} to={item.name}>
              {item.name[0].toUpperCase() +
                item.name.replaceAll('-', ' ').slice(1)}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <Outlet />
    </>
  );
};

export default ArticlesList;
