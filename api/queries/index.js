const Words = require("../models/words");

function getAllWords(req, res, next) {
  Words.find((err, words) => {
    if (err) res.send(err);
    res.json(words);
  });
}

module.exports = {
  getAllWords: getAllWords
};
