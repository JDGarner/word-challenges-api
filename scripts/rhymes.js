const fetch = require("node-fetch");
const words = require("../temp-data/words");


// - call https://www.datamuse.com/api/ (e.g. https://api.datamuse.com/words?rel_rhy=list)
// - call API with each word, sort in order of most number of rhyming words
// - split into easy, medium, hard groups

const url = `https://api.datamuse.com/words?rel_rhy=${words[0]}`;

const getRhymes = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

getRhymes(url);