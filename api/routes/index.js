const express = require("express");
const router = express.Router();
const queries = require("../queries");

router.get("/rhymes", queries.getRandomRhymes);
router.get("/easy-definitions", queries.getRandomEasyDefinitions);
router.get("/hard-definitions", queries.getRandomHardDefinitions);

router.get("*", function(req, res, next) {
  res
    .status(404)
    .send(
      "Route Not Found. Valid Routes - /rhymes, /random-rhymes, /definitions, /random-definitions"
    );
});

module.exports = router;
