const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 6000;

// middleware
app.use(express.json());

const connectDB = require('./config/database');
connectDB();

const blog = require('./routes/blog');
// mount the routes
app.use('/api/v1/', blog);

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// default route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the blog API</h1>');
});