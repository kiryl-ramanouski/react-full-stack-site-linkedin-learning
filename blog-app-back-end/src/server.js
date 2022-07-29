import express from 'express';
import bodyParser, { text } from 'body-parser';

const articlesInfo = {
  'learn-react': {
    upVotes: 1,
    comments: [
      {
        userName: 'Ivan',
        text: 'I am very clever man!',
      },
    ],
  },
  'learn-node': {
    upVotes: 2,
    comments: [
      {
        userName: 'Ivan',
        text: 'I am very clever man!',
      },
      {
        userName: 'Kate',
        text: 'I am princess of the whole world!',
      },
    ],
  },
  'my-thoughts-on-resumes': {
    upVotes: 3,
    comments: [
      {
        userName: 'Ivan',
        text: 'I am very clever man!',
      },
      {
        userName: 'Kate',
        text: 'I am princess of the whole world!',
      },
      {
        userName: 'Incognito',
        text: 'Welcome to your new life!',
      },
    ],
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
  res.status(200).send(articlesInfo[articleName]);
});

app.post('/api/articles/:name/add-comment', (req, res) => {
  const articleName = req.params.name;
  const { userName, comment } = req.body;
  articlesInfo[articleName].comments.push({ userName, comment });
  res.status(200).send(articlesInfo[articleName]);
});

app.listen(8000, () => console.log('Server is listening the port 8000'));
