const express = require('express');
const router = express.Router();

// Import constrollers
const { dummyLink, likepost, unlikePost } = require('../controllers/likeController');
const { createComment } = require('../controllers/commentController');
const { createPost, getAllPosts } = require('../controllers/postController');

// Mapping Create
router.get('/dummyroute', dummyLink);
router.post('/comments/create', createComment);
router.post('/posts/create', createPost);
router.get('/posts', getAllPosts);
router.post('/likes/like', likepost);
router.post('/likes/unlike', unlikePost);

//export the router
module.exports = router;