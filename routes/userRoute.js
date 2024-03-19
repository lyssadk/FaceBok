const router = require("express").Router();
const user = require('../controllers/UserController');

router.get("/:id", user.getUser);

router.post("/", user.createUser);

router.put("/:id", (req, res) => {
    res.send("For updating one user")
});

router.delete("/:id", (req, res) => {
    res.send("For deleting one user")
});

module.exports = router;
