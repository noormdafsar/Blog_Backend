// import mongoose
const mongoose = require('mongoose');

// route handler
const likeSchema = new mongoose.Schema({ 
    post: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Post',
        ref: 'Post', // reference to the Post model
    },
    user:{
        type: String,
        required: true,
    }
});

//export the model
module.exports = mongoose.model('Like', likeSchema);    
