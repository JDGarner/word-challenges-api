const express = require("express");
const router = express.Router();
const queries = require("../queries");

router.get("/rhymes", queries.getRandomRhymes);
router.post("/rhymes-elo", queries.setRhymeELO);

router.get("/definitions", queries.getRandomDefinitions);
router.post("/definitions-elo", queries.setDefinitionELO);

router.get("/synonyms", queries.getRandomSynonyms);
router.post("/synonyms-elo", queries.setSynonymELO);

router.get("*", function (req, res, next) {
  res.status(404).send("Route Not Found. Valid GET Routes - /rhymes, /definitions, /synonyms");
});

module.exports = router;
