const MongoClient = require("mongodb").MongoClient;

// Option 1
// const rhymes = {
//   list: {
//     rhymes: [{ rhyme: "fist", score: 3, syllables: 1 }, { rhyme: "missed", score: 5, syllables: 1 }]
//   },
//   air: {
//     rhymes: [{ rhyme: "fair", score: 3, syllables: 1 }, { rhyme: "scare", score: 5, syllables: 1 }]
//   }
// };

// Option 2
// const words = [
//   {
//     word: "list",
//     rhymes: [{ rhyme: "fist", score: 3, syllables: 1 }, { rhyme: "missed", score: 5, syllables: 1 }]
//   },
//   {
//     word: "air",
//     rhymes: [{ rhyme: "fair", score: 3, syllables: 1 }, { rhyme: "scare", score: 5, syllables: 1 }]
//   }
// ];

const insertRhymesIntoDb = rhymes => {
  console.log(">>> Connecting to db");

  MongoClient.connect("mongodb://localhost", { useNewUrlParser: true }, function(err, client) {
    if (err) throw err;

    console.log(">>> Connected");
    const db = client.db("words");

    db.collection("words").drop(err => {
      if (err) throw err;

      console.log("Collection Dropped");

      db.collection("words").insertMany(rhymes, function(err, res) {
        if (err) throw err;

        console.log("Number of documents inserted: " + res.insertedCount);
        client.close();
      });
    });
  });
};

module.exports = insertRhymesIntoDb;
