const Rhymes = require("../models/rhymes");
const Definitions = require("../models/definitions");

const RHYME_RESPONSE_SIZE = 25;
const DEFINITION_RESPONSE_SIZE = 80;

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
    .then(values => {
      res.json({ novice: values[0], journeyman: values[1], expert: values[2], master: values[3] });
    })
    .catch(err => {
      res.send(err);
    });
}

function getRandomEasyDefinitions(req, res, next) {
  Definitions.aggregate(
    [{ $match: { difficulty: "easy" } }, { $sample: { size: DEFINITION_RESPONSE_SIZE } }],
    (err, definitions) => {
      if (err) res.send(err);
      res.json(definitions);
    }
  );
}

function getRandomHardDefinitions(req, res, next) {
  Definitions.aggregate(
    [{ $match: { difficulty: "hard" } }, { $sample: { size: DEFINITION_RESPONSE_SIZE } }],
    (err, definitions) => {
      if (err) res.send(err);
      res.json(definitions);
    }
  );
}

module.exports = {
  getRandomRhymes: getRandomRhymes,
  getRandomEasyDefinitions: getRandomEasyDefinitions,
  getRandomHardDefinitions: getRandomHardDefinitions
};
