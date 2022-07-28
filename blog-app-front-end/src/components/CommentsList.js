import React from 'react';

// react bootstrap components
import ListGroup from 'react-bootstrap/ListGroup';

const CommentsList = ({ comments }) => {
  return (
    <ListGroup>
      <h3>Comments:</h3>
      {comments.map((item, i) => {
        return (
          <ListGroup.Item key={i}>
            <h4>{item.userName}</h4>
            <p>{item.text}</p>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default CommentsList;
