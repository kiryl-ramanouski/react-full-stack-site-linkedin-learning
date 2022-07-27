import express from 'express';
import bodyParser from 'body-parser';

const articlesInfo = {
  'learn-react': {
    upVotes: 0,
  },
  'learn-node': {
    upVotes: 0,
  },
  'my-thoughts-on-resumes': {
    upVotes: 0,
  },
};

const app = express();

app.use(bodyParser.json());

app.post('/api/articles/:name/upvote', (req, res) => {
  const articleName = req.params.name;
  articlesInfo[articleName].upVotes += 1;

  res
    .status(200)
    .send(`${articleName} now has ${articlesInfo[articleName].upVotes} votes!`);
});

app.listen(8000, () => console.log('Server is listening the port 8000'));
