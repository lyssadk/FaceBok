const router = require("express").Router();
const post = require('../controllers/PostController');
const validation = require('../middleware/validatePost');

router.get('/', post.getPosts);

router.get('/:groupId', post.getPostsByGroupId);

router.post('/', validation.postRules, post.createPost);

router.put('/:postId', validation.postRules, post.updatePost);

router.delete('/:postId', post.deletePost);


module.exports = router;
