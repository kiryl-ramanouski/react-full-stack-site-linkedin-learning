import React from 'react';
import { useState } from 'react';

// React bootstrap components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddCommentForm = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  return (
    <Form className='mt-3'>
      <h3>Add a Comment</h3>
      <Form.Group className='mb-3'>
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type='email'
          value={name}
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
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder='Leave a comment here'
          style={{ height: '100px' }}
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Add
      </Button>
    </Form>
  );
};

export default AddCommentForm;
