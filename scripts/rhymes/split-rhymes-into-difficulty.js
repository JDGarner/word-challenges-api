const MongoClient = require("mongodb").MongoClient;
const uri = require("../../uri");

// Difficulty Ranges:
// Novice     - 121+ (121 - 766)
// Journeyman - 52 - 120
// Expert     - 20 - 51
// Master     - 6 - 19

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

addDifficultyField(6, 19, "master");
addDifficultyField(20, 51, "expert");
addDifficultyField(52, 120, "journeyman");
addDifficultyField(121, 766, "novice");

const findRhymesWithSize = size => {
  MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
    if (err) throw err;

    console.log(">>> Connected");
    const db = client.db("words");

    db.collection("rhymes")
      .find({ rhymes: { $size: size } })
      .toArray((err, results) => {
        if (err) throw err;
        console.log(">>> results: ", results);
      });
  });
};

const deleteRhymesWithSize = size => {
  MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
    if (err) throw err;

    console.log(">>> Connected");
    const db = client.db("words");

    db.collection("rhymes").deleteMany({ rhymes: { $size: size } }, err => {
      if (err) throw err;
      console.log(">>> deleted");
    });
  });
};

// Prints out frequencies for number of rhymes per word
const printFrequencies = () => {
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
  });
};

// printFrequencies();


