const Rhymes = require("../models/rhymes");
const Definitions = require("../models/definitions");

const RESPONSE_SIZE = 80;

function getRandomRhymes(req, res, next) {
  Rhymes.aggregate([{ $sample: { size: RESPONSE_SIZE } }], (err, rhymes) => {
    if (err) res.send(err);
    res.json(rhymes);
  });
}

function getRandomEasyDefinitions(req, res, next) {
  Definitions.aggregate(
    [{ $match: { difficulty: "easy" } }, { $sample: { size: RESPONSE_SIZE } }],
    (err, definitions) => {
      if (err) res.send(err);
      res.json(definitions);
    }
  );
}

function getRandomHardDefinitions(req, res, next) {
  Definitions.aggregate(
    [{ $match: { difficulty: "hard" } }, { $sample: { size: RESPONSE_SIZE } }],
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
