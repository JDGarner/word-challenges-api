const Rhymes = require("../models/rhymes");

function getAllRhymes(req, res, next) {
  Rhymes.find((err, rhymes) => {
    if (err) res.send(err);
    res.json(rhymes);
  });
}

function getRandomRhymes(req, res, next) {
  Rhymes.aggregate([{ $sample: { size: 10 } }], (err, rhymes) => {
    if (err) res.send(err);
    res.json(rhymes);
  });
}

module.exports = {
  getAllRhymes: getAllRhymes,
  getRandomRhymes: getRandomRhymes
};
