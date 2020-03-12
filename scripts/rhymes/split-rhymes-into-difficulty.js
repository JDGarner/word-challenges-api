const MongoClient = require("mongodb").MongoClient;
const uri = require("../../uri");

console.log(">>> Connecting to db");


// TODO: make this into a function that takes start, end, difficulty as params
//       For each result that is returned within the params , add given difficulty field

// addDifficultyField(1, 19, "master");
// addDifficultyField(20, 49, "expert");
// addDifficultyField(50, 82, "journeyman");
// addDifficultyField(83, 100, "novice");


MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
  if (err) throw err;

  console.log(">>> Connected");
  const db = client.db("words");

  db.collection("rhymes")
    .find()
    .toArray(function(err, res) {
      if (err) throw err;

      console.log("Got result");
      const sizes = res.map(r => r.rhymes.length);
      const frequencies = sizes.reduce((current, size) => {
        if (!current[size]) {
          current[size] = 1;
        } else {
          current[size] = current[size] + 1;
        }

        return current;
      }, {});
      console.log(">>> frequencies: ", frequencies);

      client.close();
    });

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
});

// Difficulty Ranges:
// Novice     - 83 - 100
// Journeyman - 50 - 82
// Expert     - 20 - 49
// Master     - 1 - 19
