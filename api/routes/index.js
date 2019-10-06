const express = require("express");
const router = express.Router();
const queries = require("../queries");

router.get("/rhymes", queries.getAllRhymes);
router.get("/random-rhymes", queries.getRandomRhymes);
router.get("/definitions", queries.getAllDefinitions);
router.get("/random-definitions", queries.getRandomDefinitions);

router.get("*", function(req, res, next) {
  res
    .status(404)
    .send(
      "Route Not Found. Valid Routes - /rhymes, /random-rhymes, /definitions, /random-definitions"
    );
});

module.exports = router;
