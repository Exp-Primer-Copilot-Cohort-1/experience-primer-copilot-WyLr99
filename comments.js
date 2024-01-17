const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// In-memory storage for comments
let comments = [];

// Route to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Route to add a new comment
app.post('/comments', (req, res) => {
    let newComment = req.body;
    comments.push(newComment);
    res.status(201).json(newComment);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
// Continue from your existing code...

// Route to add a new comment
app.post('/comments', (req, res) => {
    let newComment = req.body;
    comments.push(newComment);
    res.status(201).json(newComment);
});

// Route to update an existing comment
app.put('/comments/:id', (req, res) => {
    let id = req.params.id;
    let updatedComment = req.body;
    comments[id] = updatedComment;
    res.status(200).json(updatedComment);
});