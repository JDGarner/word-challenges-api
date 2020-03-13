const MongoClient = require("mongodb").MongoClient;
const uri = require("../../uri");

// Difficulty Ranges:
// Novice     - 83 - 100
// Journeyman - 50 - 82
// Expert     - 20 - 49
// Master     - 1 - 19

const addDifficultyField = (start, end, difficulty) => {
  console.log(">>> Connecting to db");

  MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
    if (err) throw err;

    console.log(">>> Connected");
    const db = client.db("words");

    for (let i = start; i <= end; i++) {
      console.log(`>>> set difficulty for rhymes with size ${i} to ${difficulty}`);
      db.collection("rhymes").updateMany({ rhymes: { $size: i } }, { $set: { difficulty } });
      console.log(">>> done");
    }
  });
};

// addDifficultyField(1, 19, "master");
// addDifficultyField(20, 49, "expert");
// addDifficultyField(50, 82, "journeyman");
// addDifficultyField(83, 100, "novice");

// Prints out frequencies for number of rhymes per word
// db.collection("rhymes")
//   .find()
//   .toArray(function(err, res) {
//     if (err) throw err;

//     console.log("Got result");
//     const sizes = res.map(r => r.rhymes.length);
//     const frequencies = sizes.reduce((current, size) => {
//       if (!current[size]) {
//         current[size] = 1;
//       } else {
//         current[size] = current[size] + 1;
//       }

//       return current;
//     }, {});
//     console.log(">>> frequencies: ", frequencies);

//     client.close();
//   });
