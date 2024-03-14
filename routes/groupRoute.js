const router = require("express").Router();
// //POST /group
 router.post("/", (req, res) => {
   res.send("POST group");
 });

// PUT /group/:groupId
router.put("/:groupId", (req, res) => {
  res.send("PUT group");
});

// GET /group/
router.get("/", (req, res) => {
  res.send("GET group");
});

// GET /group/:groupId
router.get("/:groupId", (req, res) => {
  res.send("GET group");
});

// DELETE /group/:groupId
router.delete("/:groupId", (req, res) => {
  res.send("DELETE group");
});


module.exports = router;