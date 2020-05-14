const fs = require("fs");
const { noviceWords } = require("./novice-words");
const { getSynonymsForWords } = require("./init-synonyms-oxford");

const getEntryStringFromResult = (result) => {
  if (result && result.word) {
    const { word, synonyms } = result;

    const synonynmsString = synonyms.map(s => `\"${s}\"`).join(", ")

    return `db.synonyms.update({ word: "${word}" }, { $set: { synonyms: [${synonynmsString}] } })\n`;
  }

  return "";
};

const getSynsAndCreateInsertMigrationFile = (words, filename) => {
  getSynonymsForWords(words).then((results) => {
    const entries = results.map((result) => getEntryStringFromResult(result));
    const queries = entries.join("");

    const wordsDev = "use words_dev\n\n";
    const wordsProd = "\n\nuse words_prod\n\n";

    const fileContent = [wordsDev, queries, wordsProd, queries].join("");

    fs.writeFile(`migrations/${filename}`, fileContent, function (err) {
      if (err) throw err;
      console.log("Success!");
    });
  });
};

const words = ["adroit"]
getSynsAndCreateInsertMigrationFile(words, "may14-synonyms-test");

// getSynsAndCreateInsertMigrationFile(noviceWords, "may14-synonyms-novice");
