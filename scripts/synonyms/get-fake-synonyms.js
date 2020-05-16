const fs = require("fs");
const { sampleSize, uniq } = require("lodash");
const MongoClient = require("mongodb").MongoClient;
const { DB_URI, DB } = require("../../constants");

const uri = DB_URI;

const getAllPossibleWords = () => {
  MongoClient.connect(uri, { useNewUrlParser: true }, function (err, client) {
    if (err) throw err;
  
    console.log(">>> Connected");
    const db = client.db(DB);
  
    db.collection("synonyms")
      .find({ $or: [ { difficulty: "novice" }, { difficulty: "journeyman" } ] })
      .toArray((err, results) => {
        if (err) throw err;
        console.log(results);
  
        const synonyms = results.map(r => r.synonyms).reduce((acc, current) => {
          return [...acc, ...current];
        }, [])
        console.log(synonyms);
  
        const words = results.map((r) => r.word);
        const allWords = uniq([...words, ...synonyms]);
        const fileContent = allWords.join(">>> \n")
  
        fs.writeFile(`scripts/synonyms/words/potential-fake-easy-words`, fileContent, function (err) {
          if (err) throw err;
          console.log("Success!");
        });
  
        client.close();
      });
  });
}

getAllPossibleWords();






// const getEntryStringForWord = (word, fakes) => {
//   if (word && fakes) {
//     const fakesString = fakes.map(s => `\"${s}\"`).join(", ")

//     return `db.synonyms.update({ word: "${word}" }, { $set: { fakes: [${fakesString}] } })\n`;
//   }

//   return "";
// };

// const writeFakeSynonymsMigration = () => {
//   MongoClient.connect(uri, { useNewUrlParser: true }, function (err, client) {
//     if (err) throw err;
  
//     console.log(">>> Connected");
//     const db = client.db(DB);
  
//     db.collection("synonyms")
//       // .find({ $or: [ { difficulty: "novice" }, { difficulty: "journeyman" } ] })
//       .find({ $or: [ { word: "air" }, { word: "damage" } ] })
//       .toArray((err, results) => {
//         if (err) throw err;
//         console.log(results);

//         const fileContentArray = results.map((res) => {
//           const potentialFakes = uniq(sampleSize(potentialFakeEasyWords, 60));
//           const filteredFakes = potentialFakes.filter(p => !res.synonyms.includes(p));
//           return getEntryStringForWord(res.word, filteredFakes);
//         })

//         const fileContent = fileContentArray.join("");
//         console.log(fileContent);

//         // fs.writeFile(`migrations/may16-generate-fake-synonyms`, fileContent, function (err) {
//         //   if (err) throw err;
//         //   console.log("Success!");
//         // });
  
//         client.close();
//       });
//   });
// }
