const express = require('express');
const app = express();
const port = 3000;

const comments = [
    {
        username: 'Todd',
        comment: 'lol that is so funny!'
        },
        {
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
        },
        {
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
        },
        {
        username: 'onlysayswoof',
        comment: 'woof woof woof'
        }
];

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
