const MongoClient = require("mongodb").MongoClient;
const uri = require("../../uri");

// Difficulty Ranges:
// Novice     - 101+ (101 - 786)
// Journeyman - 49 - 100
// Expert     - 15 - 48
// Master     - 1 - 14

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

// addDifficultyField(1, 14, "master");
// addDifficultyField(15, 48, "expert");
// addDifficultyField(49, 100, "journeyman");
// addDifficultyField(101, 786, "novice");

// Prints out frequencies for number of rhymes per word
// MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
//   if (err) throw err;

//   console.log(">>> Connected");
//   const db = client.db("words");

//   db.collection("rhymes")
//     .find()
//     .toArray(function(err, res) {
//       if (err) throw err;

//       console.log("Got result");
//       const sizes = res.map(r => r.rhymes.length);
//       const frequencies = sizes.reduce((current, size) => {
//         if (!current[size]) {
//           current[size] = 1;
//         } else {
//           current[size] = current[size] + 1;
//         }

//         return current;
//       }, {});
//       console.log(">>> frequencies: ", frequencies);

//       client.close();
//     });
// });
