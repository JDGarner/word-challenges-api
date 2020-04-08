const MongoClient = require("mongodb").MongoClient;
const uri = require("../../uri");
const isWordDefined = require("./check-definition");

const filterUndefinedWords = async words => {
  const promises = await words.map(result => isWordDefined(result.word));
  const definedWordMap = await Promise.all(promises);

  return words.filter((result, index) => definedWordMap[index]);
};

const getFilterPromise = (result, db) => {
  return new Promise(async (resolve, reject) => {
    console.log("Before: ", result.rhymes);
    const filteredWords = await filterUndefinedWords(result.rhymes);
    console.log("After: ", filteredWords);
    db.collection("rhymes").updateOne(
      { word: result.word },
      { $set: { rhymes: filteredWords } },
      err => {
        if (err) reject(err);
        resolve();
      }
    );
  });
};

const filterUndefinedWordsDB = () => {
  console.log(">>> Connecting to db");

  MongoClient.connect(uri, { useNewUrlParser: true }, async function(err, client) {
    if (err) throw err;

    console.log(">>> Connected");
    const db = client.db("words");

    db.collection("rhymes")
      .find()
      .toArray(async (err, results) => {
        if (err) throw err;

        results.reduce(async (previousPromise, nextResult) => {
          return previousPromise
            .then(() => {
              return getFilterPromise(nextResult, db);
            })
            .catch(err => {
              throw err;
            });
        }, Promise.resolve());
      });
  });
};

filterUndefinedWordsDB();
