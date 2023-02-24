require('dotenv').config();

const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 5001
const users = ['frodo', 'bilbo', 'samwise', 'gandolf', 'aragorn', 'gimli', 'legolas'];

const server = express();

server.use(express.json());
server.use(cors())

server.get('/api/users', (req, res, next) => {
    res.status(200).json(users)
})

server.post('/api/register', (req, res) => {
    res.status(201).json(req.body.user)
})

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
