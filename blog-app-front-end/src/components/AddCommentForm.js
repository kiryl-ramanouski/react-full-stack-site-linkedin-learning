import React from 'react';
import { useState } from 'react';

// React bootstrap components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddCommentForm = ({ articleName, setArticlesInfo }) => {
  const [userName, setName] = useState('');
  const [commentText, setCommentText] = useState('');

  const addNewComment = async (e) => {
    e.preventDefault();
    const newComment = { userName, text: commentText };
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: 'post',
      body: JSON.stringify(newComment),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const body = await result.json();
    setArticlesInfo(body);
    setName('');
    setCommentText('');
  };

  return (
    <Form className='mt-3'>
      <h3>Add a Comment</h3>
      <Form.Group className='mb-3'>
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type='text'
          value={userName}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter your name'
        />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Comment:</Form.Label>
        <Form.Control
          as='textarea'
          type='textarea'
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder='Leave a comment here'
          style={{ height: '100px' }}
        />
      </Form.Group>
      <Button variant='primary' type='submit' onClick={(e) => addNewComment(e)}>
        Add
      </Button>
    </Form>
  );
};

export default AddCommentForm;
