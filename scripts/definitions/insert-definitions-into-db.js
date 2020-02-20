const MongoClient = require("mongodb").MongoClient;
const uri = require("../../uri");
const capitalize = require("lodash").capitalize;

// const uri = "mongodb://localhost";

const getFormattedDefinitions = (definitions, difficulty) => {
  const formattedDefs = definitions.map(def => {
    const word = def.word.toLowerCase();
    let definition = capitalize(def.definition);
    definition = definition.replace(/\.\s*$/, "");

    console.log(">>> ", word, definition);
    return { word, definition, difficulty };
  });

  return formattedDefs;
};

const insertDefinitionsIntoDb = (definitions, difficulty) => {
  const formattedDefinitions = getFormattedDefinitions(definitions, difficulty);

  console.log(">>> Connecting to db");
  MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
    if (err) throw err;

    console.log(">>> Connected");
    const db = client.db("words");

    db.collection("definitions").insertMany(formattedDefinitions, function(
      err,
      res
    ) {
      if (err) throw err;

      console.log("Number of documents inserted: " + res.insertedCount);
      client.close();
    });
  });
};

module.exports = { insertDefinitionsIntoDb };

// const insertDefinitionsIntoDbReset = (definitions, difficulty) => {
//   const formattedDefinitions = getFormattedDefinitions(definitions, difficulty);
//   console.log(">>> Connecting to db");

//   MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
//     if (err) throw err;

//     console.log(">>> Connected");
//     const db = client.db("words");

//     db.collection("definitions").drop(err => {
//       if (err) throw err;
//       console.log("Collection Dropped");

//       db.collection("definitions").insertMany(formattedDefinitions, function(err, res) {
//         if (err) throw err;

//         console.log("Number of documents inserted: " + res.insertedCount);
//         client.close();
//       });
//     });
//   });
// };
