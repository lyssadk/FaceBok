const router = require("express").Router();
const user = require('../controllers/UserController');

router.get("/:id", user.getUser);

router.post("/", user.createUser);

router.put("/:id", user.updateUser);

router.delete("/:id", user.deleteUser);

module.exports = router;
