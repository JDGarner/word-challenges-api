const express = require("express");
const router = express.Router();
const queries = require("../queries");

router.get("/rhymes", queries.getRandomRhymes);
router.get("/easy-definitions", queries.getRandomEasyDefinitions);
router.get("/hard-definitions", queries.getRandomHardDefinitions);

router.post("/definitions-elo", queries.setDefinitionELO);
router.post("/rhymes-elo", queries.setRhymeELO);

router.get("*", function(req, res, next) {
  res
    .status(404)
    .send("Route Not Found. Valid GET Routes - /rhymes, /easy-definitions, /hard-definitions");
});

module.exports = router;
