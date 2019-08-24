const express = require("express");
const router = express.Router();
const queries = require("../queries");

router.get("/words", queries.getAllWords);

router.get("*", function(req, res, next) {
  res.status(404).send("Route Not Found. Valid Routes - /words");
});

module.exports = router;
