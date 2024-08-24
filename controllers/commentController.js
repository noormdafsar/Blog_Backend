// import model
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

// business logic

exports.createComment = async (req, res) => {
    try{
        // fetch data from the request body
        const {post, user, body} = req.body;
        // create a new comment object
        const  comment = new Comment({
            post,
            user,
            body
        });
        // save the new comment object into database
        const savedComment = await comment.save();
        // find the post with the given id and add new comment to the comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {
            $push: {comments: savedComment._id} }, {new: true})
            .populate('comments')// populate the comments array with the actual comment objects
            .exec();
        // send response
        res.json({
            post: updatedPost,

        });
    }
    catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}