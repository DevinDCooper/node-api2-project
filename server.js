const express = require('express');

const server = express();
const postRouter = require('./data/posts-router.js');




server.use(express.json());
server.use('/api/posts', postRouter);




server.get('/', (req, res) => {
    res.send('<h2> Devin  blog <h2> <p> Welcome to Devin blog api')
});





module.exports = server;