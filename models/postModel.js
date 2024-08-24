// import mongoose
const mongoose = require('mongoose');

// route handler
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Like',
        ref: 'Like', // reference to the Like model
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Comment',
        ref: 'Comment', // reference to the Comment model
    }],
});

// export the model
module.exports = mongoose.model('Post', postSchema); 
