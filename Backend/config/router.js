const express = require('express');
const app = express();
const router = express.Router();

router.get("/:id", (req, res) => {
    console.log(req.route);
});

router.post("/:id",(req, res) => {
    console.log(req);
    console.log(req.route);
    res.send("Some File");
});
router.post("/post",(req, res) => {
    console.log(req);
    console.log(req.route);
    res.send("Some File");
});

module.exports = router;