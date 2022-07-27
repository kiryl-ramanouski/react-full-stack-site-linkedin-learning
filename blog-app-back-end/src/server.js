import express from 'express';
import bodyParser from 'body-parser';

const articlesInfo = {
  'learn-react': {
    upvotes: 0,
  },
  'learn-node': {
    upvotes: 0,
  },
  'my-thoughts-on-resumes': {
    upvotes: 0,
  },
};

const app = express();

app.use(bodyParser.json());

app.listen(8000, () => console.log('Server is listening the port 8000'));
