const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
    res.send('GET: comments');
    });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});