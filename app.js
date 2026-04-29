const express = require('express');
const app = express();
const port = 3000; // Local npm port

app.get('/', (req, res) => {
  res.send('Hello DevOps <3');
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.get('/info', (req, res) => {
  res.json({ app: 'student-app (Local)', version: '1.0.0' });
});

app.listen(port, () => {
  console.log(`Local app running at http://localhost:${port}`);
});
