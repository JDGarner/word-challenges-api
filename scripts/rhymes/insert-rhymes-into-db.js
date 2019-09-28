const MongoClient = require("mongodb").MongoClient;
const uri = require("../../uri");

// const uri = "mongodb://localhost";

const insertRhymesIntoDbFirstTime = rhymes => {
  console.log(">>> Connecting to db");

  MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
    if (err) throw err;

    console.log(">>> Connected");
    const db = client.db("words");

    db.collection("rhymes").drop(err => {
      if (err) throw err;

      console.log("Collection Dropped");

      db.collection("rhymes").insertMany(rhymes, function(err, res) {
        if (err) throw err;

        console.log("Number of documents inserted: " + res.insertedCount);
        client.close();
      });
    });
  });
};

const insertRhymesIntoDb = rhymes => {
  console.log(">>> Connecting to db");

  MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
    if (err) throw err;

    console.log(">>> Connected");
    const db = client.db("words");

    db.collection("rhymes").insertMany(rhymes, function(err, res) {
      if (err) throw err;

      console.log("Number of documents inserted: " + res.insertedCount);
      client.close();
    });
  });
};

module.exports = { insertRhymesIntoDb, insertRhymesIntoDbFirstTime };
