const express = require("express");
const router = express.Router();
const queries = require("../queries");

router.get("/rhymes", queries.getAllRhymes);
router.get("/random-rhymes", queries.getRandomRhymes);

router.get("*", function(req, res, next) {
  res.status(404).send("Route Not Found. Valid Routes - /rhymes, /random-rhymes");
});

module.exports = router;
