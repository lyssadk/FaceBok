const router = require('express').Router();
const TestRoutes = require('./test');
const groupRoute = require("./groupRoute.js");
const postRoute = require("./postRoute.js");
const userRoute = require("./userRoute.js");
const settingsRoute = require("./settingsRoute.js");

router.use('/test', TestRoutes);
router.use('/groups', groupRoute);
router.use('/posts', postRoute);
router.use('/users', userRoute);
router.use('/settings', settingsRoute);

module.exports = router;