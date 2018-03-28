const express = require('express');
const app = express();
const router = express.Router();

router.get("/:id", (req, res) => {
    res.send("Some File");
});

router.post("/:id",(req, res) => {
    res.send("Some File");
});

module.exports = router;