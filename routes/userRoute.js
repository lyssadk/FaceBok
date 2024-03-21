const router = require("express").Router();
const user = require('../controllers/UserController');
const validation = require('../middleware/validate');

router.get("/:id", user.getUser);

router.post("/", validation.userRules, user.createUser);

router.put("/:id", validation.userRules, user.updateUser);

router.delete("/:id", user.deleteUser);

module.exports = router;
