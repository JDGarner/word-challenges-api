// https://api.datamuse.com/words?sp=sessile&md=d
// get first item in array
// get first definition
// remove first word (adj/v/n/adv)
// insert into db

const fetch = require("node-fetch");
// const words = require("../../data/rhymes/final-words");
// const { insertDefinitionsIntoDb } = require("./insert-definitions-into-db");

const getDefinition = result => {
  if (result && result[0] && result[0].defs && result[0].defs[1]) {
    let definition = result[0].defs[1];
    definition = definition.split(" ");
    definition.shift();
    return definition.join(" ");
  }

  return null;
};

const getDefinitionsForWord = async word => {
  return new Promise(async (resolve, reject) => {
    try {
      const url = `https://api.datamuse.com/words?sp=${word}&md=d`;
      console.log("Getting definition for ", word, new Date());
      const response = await fetch(url);
      const json = await response.json();
      const definition = getDefinition(json);
      if (definition) {
        console.log(`${word}: ${definition}`);
        resolve({ word, definition });
      } else {
        console.log("No definition found for: ", word);
        resolve(null);
      }
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

const getDefinitionsForWords = async words => {
  const results = [];

  function getAllDefinitions(words) {
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
        return getDefinitionsForWord(words[index++]).then(function(data) {
          return delay(200, data).then(next);
        });
      }
    }

    return Promise.resolve().then(next);
  }

  getAllDefinitions(words).then(() => {
    console.log(">>> Insert definitions into db");
    // insertDefinitionsIntoDb(results);
  });
};

const words2 = ["sessile", "haberdashery"];

// getDefinitionsForWords(words);
getDefinitionsForWords(words2);
