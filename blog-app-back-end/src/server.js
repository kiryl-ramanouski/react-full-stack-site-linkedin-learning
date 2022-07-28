import express from 'express';
import bodyParser from 'body-parser';

const articlesInfo = {
  'learn-react': {
    upVotes: 1,
    comments: [],
  },
  'learn-node': {
    upVotes: 2,
    comments: [],
  },
  'my-thoughts-on-resumes': {
    upVotes: 3,
    comments: [],
  },
};

const app = express();

app.use(bodyParser.json());

// Routes
app.get('/api/article/:name', (req, res) => {
  const articleName = req.params.name;
  const targetArticleInfo = articlesInfo[articleName];
  res.status(200).json(targetArticleInfo);
});

app.post('/api/articles/:name/upvote', (req, res) => {
  const articleName = req.params.name;
  articlesInfo[articleName].upVotes += 1;
  res
    .status(200)
    .send(`${articleName} now has ${articlesInfo[articleName].upVotes} votes!`);
});

app.post('/api/articles/:name/add-comment', (req, res) => {
  const articleName = req.params.name;
  const { userName, comment } = req.body;
  articlesInfo[articleName].comments.push({ userName, comment });
  res.status(200).send(articlesInfo[articleName]);
});

app.listen(8000, () => console.log('Server is listening the port 8000'));
