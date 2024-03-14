const router = require("express").Router();

router.get("/:id", (req, res) => {
    res.send.json("For getting one user")
});

router.post("/", (req, res) => {
    res.send.json("For posting one user")
});

router.put("/:id", (req, res) => {
    res.send.json("For updating one user")
});

router.delete("/:id", (req, res) => {
    res.send.json("For deleting one user")
});

module.exports = router;
