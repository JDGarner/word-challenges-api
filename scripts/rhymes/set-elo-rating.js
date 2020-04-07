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

setInitialELOForDifficulty("novice", 1000);
setInitialELOForDifficulty("journeyman", 1400);
setInitialELOForDifficulty("expert", 1800);
setInitialELOForDifficulty("master", 2800);

// const DIFFICULTY_ELO_RANGES = {
//   [DIFFICULTIES.NOVICE]: { lower: 800, upper: 1200 },
//   [DIFFICULTIES.JOURNEYMAN]: { lower: 1200, upper: 1600 },
//   [DIFFICULTIES.EXPERT]: { lower: 1600, upper: 2000 },
//   [DIFFICULTIES.MASTER]: { lower: 2000, upper: 3600 },
// };
