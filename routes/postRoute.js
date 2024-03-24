const router = require("express").Router();
const post = require('../controllers/PostController');

router.get('/', post.getPosts);

router.get('/:groupId', post.getPostsByGroupId);

router.post('/', post.createPost);

router.post('/:groupId', (req, res) => {
    res.send('Create a Post in your Group');
});

router.put('/:postId', post.updatePost);

router.delete('/:postId', post.deletePost);


module.exports = router;
