const router = require('express').Router();
const TestRoutes = require('./test');

router.use('/test', TestRoutes);

module.exports = router;