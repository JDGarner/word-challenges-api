const Rhymes = require("../models/rhymes");
const Definitions = require("../models/definitions");

function getAllRhymes(req, res, next) {
  Rhymes.find((err, rhymes) => {
    if (err) res.send(err);
    res.json(rhymes);
  });
}

function getRandomRhymes(req, res, next) {
  Rhymes.aggregate([{ $sample: { size: 25 } }], (err, rhymes) => {
    if (err) res.send(err);
    res.json(rhymes);
  });
}

function getAllDefinitions(req, res, next) {
  Definitions.find((err, definitions) => {
    if (err) res.send(err);
    res.json(definitions);
  });
}

function getRandomDefinitions(req, res, next) {
  Definitions.aggregate([{ $sample: { size: 25 } }], (err, definitions) => {
    if (err) res.send(err);
    res.json(definitions);
  });
}

module.exports = {
  getAllRhymes: getAllRhymes,
  getRandomRhymes: getRandomRhymes,
  getAllDefinitions: getAllDefinitions,
  getRandomDefinitions: getRandomDefinitions
};
