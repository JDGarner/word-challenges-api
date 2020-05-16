const fs = require("fs");
const MongoClient = require("mongodb").MongoClient;
const { DB_URI, DB } = require("../../constants");

const uri = DB_URI;

MongoClient.connect(uri, { useNewUrlParser: true }, function (err, client) {
  if (err) throw err;

  console.log(">>> Connected");
  const db = client.db(DB);

  db.collection("synonyms")
    // .find({ $or: [ { difficulty: "novice" }, { difficulty: "journeyman" } ] })
    .find({ $or: [ { word: "air" }, { word: "damage" } ] })
    .toArray((err, results) => {
      if (err) throw err;
      // console.log(results);

      // let synonymsFlattened = [];
      const synonyms = results.map(r => r.synonyms).reduce((acc, current) => {
        console.log(">>> acc: ", acc);
        console.log(">>> current: ", acc);
        return [...acc, ...current];
      }, [])
      console.log(synonyms);

      // const words = results.map((r) => r.word);
      // const fileContent = [...words, ...synonyms].join(">>> \n")

      // fs.writeFile(`scripts/synonyms/allnovicejourneyman`, fileContent, function (err) {
      //   if (err) throw err;
      //   console.log("Success!");
      // });

      client.close();
    });
});
