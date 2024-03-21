const router = require("express").Router();
const groupController = require("../controllers/groupController");

// //POST /group
 router.post("/", groupController.createGroup);

// PUT /group/:groupId
router.put("/:groupId", groupController.updateGroup);

// GET /group/
router.get("/", groupController.getGroups);

// GET /group/:groupId
router.get("/:groupId", groupController.getGroupById);

// DELETE /group/:groupId
router.delete("/:groupId", groupController.deleteGroup);


module.exports = router;