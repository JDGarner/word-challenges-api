const Rhymes = require("../models/rhymes");
const Definitions = require("../models/definitions");
const Synonyms = require("../models/synonyms");

const RHYME_RESPONSE_SIZE = 40;
const DEFINITION_RESPONSE_SIZE = 80;
const SYNONYM_RESPONSE_SIZE = 70;

const DIFFICULTIES = {
  NOVICE: "novice",
  JOURNEYMAN: "journeyman",
  EXPERT: "expert",
  MASTER: "master",
};

const DIFFICULTY_ELO_RANGES = {
  [DIFFICULTIES.NOVICE]: { lower: 600, upper: 1000 },
  [DIFFICULTIES.JOURNEYMAN]: { lower: 1000, upper: 1600 },
  [DIFFICULTIES.EXPERT]: { lower: 1600, upper: 2200 },
  [DIFFICULTIES.MASTER]: { lower: 2200, upper: 3600 },
};

function getRhymesForDifficulty(difficulty) {
  return new Promise((resolve, reject) => {
    Rhymes.aggregate(
      [{ $match: { difficulty } }, { $sample: { size: RHYME_RESPONSE_SIZE } }],
      (err, rhymes) => {
        if (err) reject(err);
        resolve(rhymes);
      }
    );
  });
}

function getRandomRhymes(req, res, next) {
  const novice = getRhymesForDifficulty("novice");
  const journeyman = getRhymesForDifficulty("journeyman");
  const expert = getRhymesForDifficulty("expert");
  const master = getRhymesForDifficulty("master");

  Promise.all([novice, journeyman, expert, master])
    .then((values) => {
      res.json({ novice: values[0], journeyman: values[1], expert: values[2], master: values[3] });
    })
    .catch((err) => {
      res.send(err);
    });
}

function getDefinitionsForDifficulty(difficulty) {
  return new Promise((resolve, reject) => {
    Definitions.aggregate(
      [{ $match: { difficulty } }, { $sample: { size: DEFINITION_RESPONSE_SIZE } }],
      (err, definitions) => {
        if (err) reject(err);
        resolve(definitions);
      }
    );
  });
}

function getRandomDefinitions(req, res, next) {
  const novice = getDefinitionsForDifficulty("novice");
  const journeyman = getDefinitionsForDifficulty("journeyman");
  const expert = getDefinitionsForDifficulty("expert");
  const master = getDefinitionsForDifficulty("master");

  Promise.all([novice, journeyman, expert, master])
    .then((values) => {
      res.json({ novice: values[0], journeyman: values[1], expert: values[2], master: values[3] });
    })
    .catch((err) => {
      res.send(err);
    });
}

function getSynonymsForDifficulty(difficulty) {
  return new Promise((resolve, reject) => {
    Synonyms.aggregate(
      [{ $match: { difficulty } }, { $sample: { size: SYNONYM_RESPONSE_SIZE } }],
      (err, synoynms) => {
        if (err) reject(err);
        resolve(synoynms);
      }
    );
  });
}

function getRandomSynonyms(req, res, next) {
  const novice = getSynonymsForDifficulty("novice");
  const journeyman = getSynonymsForDifficulty("journeyman");
  const expert = getSynonymsForDifficulty("expert");
  const master = getSynonymsForDifficulty("master");

  Promise.all([novice, journeyman, expert, master])
    .then((values) => {
      res.json({ novice: values[0], journeyman: values[1], expert: values[2], master: values[3] });
    })
    .catch((err) => {
      res.send(err);
    });
}

function setDefinitionELO(req, res, next) {
  const { word, elo } = req.body;

  Definitions.findOne({ word }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const newELO = getActualNewELO(elo, result.difficulty);
      Definitions.updateOne({ word }, { $set: { eloRating: newELO } }, (err) => {
        if (err) {
          res.send(err);
        } else {
          res.sendStatus(200);
        }
      });
    }
  });
}

const getActualNewELO = (potentialNewELO, difficulty) => {
  const { lower, upper } = DIFFICULTY_ELO_RANGES[difficulty];

  if (potentialNewELO < lower) {
    return lower;
  }

  if (potentialNewELO > upper) {
    return upper;
  }

  return potentialNewELO;
};

function setRhymeELO(req, res, next) {
  const { word, elo } = req.body;

  Rhymes.findOne({ word }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const newELO = getActualNewELO(elo, result.difficulty);
      Rhymes.updateOne({ word }, { $set: { eloRating: newELO } }, (err) => {
        if (err) {
          res.send(err);
        } else {
          res.sendStatus(200);
        }
      });
    }
  });
}

function setSynonymELO(req, res, next) {
  const { word, elo } = req.body;

  Synonyms.findOne({ word }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const newELO = getActualNewELO(elo, result.difficulty);
      Synonyms.updateOne({ word }, { $set: { eloRating: newELO } }, (err) => {
        if (err) {
          res.send(err);
        } else {
          res.sendStatus(200);
        }
      });
    }
  });
}

module.exports = {
  getRandomRhymes: getRandomRhymes,
  setRhymeELO: setRhymeELO,
  getRandomDefinitions: getRandomDefinitions,
  setDefinitionELO: setDefinitionELO,
  getRandomSynonyms: getRandomSynonyms,
  setSynonymELO: setSynonymELO,
};
