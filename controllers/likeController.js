const Post = require('../models/postModel');
const Like = require('../models/likeModel');

exports.likepost = async (req, res) => {    
    try {
        // fetch data from the request body
        const { post, user } = req.body;
        // create a new like object
        const like = new Like({
            post,
            user
        });
        const savedLike = await like.save();

        // update the post collection basis on this
        const updatedPost = await Post.findByIdAndUpdate(post, {
            $push: { likes: savedLike._id } }, { new: true })
           .populate('likes')
           .exec();
           res.json({
            post: updatedPost,
               message: 'Post liked successfully'
           });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

// unlike a post
exports.unlikePost = async (req, res) => {
    try {
        // fetch data from the request body
        const { post, like } = req.body;
        // find the like object and delete it
        const deletedLike = await Like.findOneAndDelete({
            post: post,
            _id: like
        });
        // update the post collection basis on this
        const updatedPost = await Post.findByIdAndUpdate(post, {
            $pull: { likes: deletedLike._id } }, { new: true });
            res.json({
            post: updatedPost,
               message: 'Post unliked successfully'
           });
    }
    catch (err) {
    res.status(400).json({
        status: 'fail',
        message: err
        });
    }
};

exports.dummyLink = (req,res) => {
    res.send(`<h1>This is a dummy route</h1>`);
};
