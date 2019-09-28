const fetch = require("node-fetch");
const words = require("../../data/rhymes/final-words");
const isWordDefined = require("./check-definition");
const { insertRhymesIntoDb } = require("./insert-rhymes-into-db");

// - call https://www.datamuse.com/api/ (e.g. https://api.datamuse.com/words?rel_rhy=list)
// - call API with each word, sort in order of most number of rhyming words
// - split into easy, medium, hard groups

// const url = `https://api.datamuse.com/words?rel_rhy=${words[0]}`;
// const url = `https://api.datamuse.com/words?rel_rhy=list`;

const filterWordsWithSpaces = words => {
  return words.filter(result => !result.word.match(/ /g));
};

const filterUndefinedWords = async words => {
  const promises = await words.map(result => isWordDefined(result.word));
  const definedWordMap = await Promise.all(promises);

  return words.filter((result, index) => definedWordMap[index]);
};

const getRhymesForWord = async word => {
  return new Promise(async (resolve, reject) => {
    try {
      const url = `https://api.datamuse.com/words?rel_rhy=${word}`;
      console.log("Getting rhymes for ", word, new Date());
      const response = await fetch(url);
      const json = await response.json();
      const spacesFiltered = filterWordsWithSpaces(json);

      const definedWords = await filterUndefinedWords(spacesFiltered);
      console.log("Got ", definedWords.length, " rhymes for ", word);
      // console.log("Rhymes ", definedWords);

      resolve({
        word,
        rhymes: definedWords
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

const getRhymesForWords = async words => {
  const results = [];

  function getAllRhymes(words) {
    function delay(t, data) {
      return new Promise(resolve => {
        setTimeout(() => {
          results.push(data);
          resolve();
        }, t);
      });
    }

    let index = 0;
    function next() {
      if (index < words.length) {
        return getRhymesForWord(words[index++]).then(function(data) {
          return delay(200, data).then(next);
        });
      }
    }

    return Promise.resolve().then(next);
  }

  getAllRhymes(words).then(() => {
    console.log(">>> Inserting rhymes into db");
    insertRhymesIntoDb(results);
  });
};

getRhymesForWords(words);

// getRhymesForWords(["list", "air", "some"]);
