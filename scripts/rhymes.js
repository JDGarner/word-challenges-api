const fetch = require("node-fetch");
const words = require("../data/common-words");
const isWordDefined = require("./check-definition");

// - call https://www.datamuse.com/api/ (e.g. https://api.datamuse.com/words?rel_rhy=list)
// - call API with each word, sort in order of most number of rhyming words
// - split into easy, medium, hard groups

// const url = `https://api.datamuse.com/words?rel_rhy=${words[0]}`;
const url = `https://api.datamuse.com/words?rel_rhy=list`;

const filterWordsWithSpaces = words => {
  return words.filter(result => !result.word.match(/ /g));
};

const filterUndefinedWords = async words => {
  const promises = await words.map(result => isWordDefined(result.word));
  const definedWordMap = await Promise.all(promises);

  return words.filter((result, index) => definedWordMap[index]);
};

const getRhymes = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const spacesFiltered = filterWordsWithSpaces(json);

    const definedWords = await filterUndefinedWords(spacesFiltered);
    console.log("defined: ", definedWords);

    // TODO: Store in my db
  } catch (error) {
    console.log(error);
  }
};

console.log("Words that Rhyme with ", words[0]);
getRhymes(url);
