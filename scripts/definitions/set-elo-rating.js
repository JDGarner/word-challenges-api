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

setInitialELOForDifficulty("easy", 1000);
setInitialELOForDifficulty("hard", 1800);

// Possible Ranges:
// Novice ~ 800-1000
// Journeyman ~ 1000-1200
// Expert ~ 1600-1800
// Master ~ 1800-2000
