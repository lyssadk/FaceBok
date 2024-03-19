const router = require('express').Router();
const { auth } = require('express-oauth2-jwt-bearer');
const TestRoutes = require('./test');
const groupRoute = require("./groupRoute.js");
const postRoute = require("./postRoute.js");
const userRoute = require("./userRoute.js");
const settingsRoute = require("./settingsRoute.js");

const checkJwt = auth({
    audience: process.env.AUDIENCE,
    issuerBaseURL: `https://${process.env.ISSUER_BASE_URL}`
});

router.use('/test', 
checkJwt, 
TestRoutes);

router.use('/groups', groupRoute);
router.use('/posts', postRoute);

router.use('/users', 
// checkJwt, 
userRoute);

router.use('/settings', settingsRoute);

module.exports = router;