import React from 'react';

// react bootstrap components
import Button from 'react-bootstrap/Button';

const UpVotesSection = ({ articleName, upVotes, setArticlesInfo }) => {
  const upVoteArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: 'post',
    });
    const body = await result.json();
    setArticlesInfo(body);
  };
  return (
    <div className=' d-flex justify-content-between align-items-center'>
      <div className='d-flex justify-content-between align-items-center'>
        <p className='m-0'>This post has been up voted {upVotes} times</p>
      </div>
      <Button onClick={() => upVoteArticle()} variant='success'>
        Like
      </Button>
    </div>
  );
};

export default UpVotesSection;
