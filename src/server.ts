import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Hello world' }));

app.listen(4000, () => {
  console.log('🚀 Server started on port 4000   💜');
});
