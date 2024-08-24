const Post = require('../models/postModel');

exports.createPost = async (req, res) => {
    try {
        // fetch data from the request body
        const { title, body } = req.body;
        // create a new post object
        const post = new Post({
            title,
            body,
        });
        // save the new post object into database
        const savedPost = await post.save();
        // send response
        res.json({
            post: savedPost,
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    } 
}

exports.getAllPosts = async (req, res) => {
    try {
        // fetch all posts from the database
        const posts = await Post.find().populate('comments').exec();
        // send response
        res.json({
            posts,
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}