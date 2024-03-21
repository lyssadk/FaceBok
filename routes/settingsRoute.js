const router = require("express").Router();
const settingsController = require("../controllers/settingsController");
//GET/settings
router.get("/:user_id", settingsController.getSettings);
//POST/settings
router.post("/:user_id", settingsController.createSettings);

//PUT/settings/:settingId
router.put("/:user_id", settingsController.updateSettings);

//DELETE/settings/:settingId
router.delete("/:user_id", settingsController.deleteSettings);

module.exports = router;
