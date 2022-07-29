import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

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

app.use(express.static(path.join(__dirname, '/build')));
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
  const { userName, text } = req.body;
  articlesInfo[articleName].comments.push({ userName, text });
  res.status(200).send(articlesInfo[articleName]);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + 'build/index.html'));
});

app.listen(8000, () => console.log('Server is listening the port 8000'));
