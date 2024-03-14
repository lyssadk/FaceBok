const router = require("express").Router();

router.get("/:id", (req, res) => {
    res.send("For getting one user")
});

router.post("/", (req, res) => {
    res.send("For posting one user")
});

router.put("/:id", (req, res) => {
    res.send("For updating one user")
});

router.delete("/:id", (req, res) => {
    res.send("For deleting one user")
});

module.exports = router;
