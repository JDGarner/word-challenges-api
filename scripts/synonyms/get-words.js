const fs = require("fs");
const MongoClient = require("mongodb").MongoClient;
const { DB_URI, DB } = require("../../constants");

const uri = DB_URI;

const getWords = (difficulty) => {
  MongoClient.connect(uri, { useNewUrlParser: true }, function (err, client) {
    if (err) throw err;

    console.log(">>> Connected");
    const db = client.db(DB);

    db.collection("definitions")
      .find({ difficulty })
      .toArray((err, results) => {
        if (err) throw err;

        const fileContent = results.map((r) => r.word).join(">>> \n");

        fs.writeFile(`scripts/synonyms/${difficulty}`, fileContent, function (err) {
          if (err) throw err;
          console.log("Success!");
        });

        client.close();
      });
  });
};

// getWords("journeyman");
// getWords("expert");
// getWords("master");
