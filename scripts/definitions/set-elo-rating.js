const MongoClient = require("mongodb").MongoClient;
const uri = require("../../uri");

const setInitialELOForDifficulty = (difficulty, eloRating) => {
  console.log(">>> Connecting to db");

  MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
    if (err) throw err;

    console.log(">>> Connected");
    const db = client.db("words");

    db.collection("definitions").updateMany({ difficulty }, { $set: { eloRating } });
  });
};
