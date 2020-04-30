const MongoClient = require("mongodb").MongoClient;
const uri = require("../../uri");

const setInitialELOForDifficulty = (difficulty, eloRating) => {
  console.log(">>> Connecting to db");

  MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
    if (err) throw err;

    console.log(">>> Connected");
    const db = client.db("words");

    db.collection("rhymes").updateMany({ difficulty }, { $set: { eloRating } });
  });
};

// [NOVICE]: { lower: 600, upper: 1000 }, 800
// [JOURNEYMAN]: { lower: 1000, upper: 1600 }, 1300
// [EXPERT]: { lower: 1600, upper: 2200 }, 1900
// [MASTER]: { lower: 2200, upper: 3600 }, 2900

setInitialELOForDifficulty("novice", 800);
setInitialELOForDifficulty("journeyman", 1300);
setInitialELOForDifficulty("expert", 1900);
setInitialELOForDifficulty("master", 2900);
