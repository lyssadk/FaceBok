const router = require("express").Router();

router.get('/', (req, res) => {
    res.send('Welcome to Posts');
});

router.get('/:groupId', (req, res) => {
    res.send('Welcome to your Group Posts');
});

router.post('/', (req, res) => {
    res.send('Create a Post');
});

router.post('/:groupId', (req, res) => {
    res.send('Create a Post in your Group');
});

router.put('/:postId', (req, res) => {
    res.send('Update a Post');
});

router.delete('/:postId', (req, res) => {
    res.send('Delete a Post');
});


module.exports = router;
