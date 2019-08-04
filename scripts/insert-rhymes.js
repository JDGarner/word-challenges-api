const { Client } = require("pg");
const fetch = require("node-fetch");
const words = require("../data/common-words");
const isWordDefined = require("./check-definition");
const insertRhymesIntoDb = require("./init-db");

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
  try {
    const url = `https://api.datamuse.com/words?rel_rhy=${word}`;
    console.log("Getting rhymes for ", word);
    const response = await fetch(url);
    const json = await response.json();
    const spacesFiltered = filterWordsWithSpaces(json);

    const definedWords = await filterUndefinedWords(spacesFiltered);
    console.log("Got ", definedWords.length, " rhymes for ", word);
    // console.log("Rhymes ", definedWords);

    return {
      word,
      rhymes: definedWords
    };
  } catch (error) {
    console.log(error);
  }
};

const getRhymesForWords = async words => {
  const promises = await words.map(word => getRhymesForWord(word));
  console.log(">>> Got all rhymes, resolving promises");
  const resolved = await Promise.all(promises);

  console.log(">>> Inserting rhymes into db");
  insertRhymesIntoDb(resolved);
};

const words2 = ["list", "air", "face", "cow", "end", "find", "good", "have", "smash"];
getRhymesForWords(words2);

// getRhymesForWord("list");
