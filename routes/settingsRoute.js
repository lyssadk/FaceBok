const router = require("express").Router();
//GET/settings
router.get("/", (req, res) => {
  res.send("GET settings");
});
//POST/settings
router.post("/", (req, res) => {
  res.send("POST settings");
});
//PUT/settings/:settingId
router.put("/:settingId", (req, res) => {
  res.send("PUT settings");
});

//DELETE/settings/:settingId
router.delete("/:settingId", (req, res) => {
  res.send("DELETE settings");
});

module.exports = router;
