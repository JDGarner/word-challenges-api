const MongoClient = require("mongodb").MongoClient;
const { DB_URI, DB } = require("../../constants");

const uri = DB_URI;

MongoClient.connect(uri, { useNewUrlParser: true }, function (err, client) {
  if (err) throw err;

  console.log(">>> Connected");
  const db = client.db(DB);

  db.collection("definitions")
    .find({
      definition: /^[\s\S]{180,}$/,
    })
    .toArray((err, results) => {
      if (err) throw err;
      results.forEach((res) => {
        console.log(res.word, ", ", res.definition);
      });
      client.close();
    });
  // db.collection("definitions").count({ definition: /^[\s\S]{180,}$/ }, (err, res) => {
  //   console.log(">>> res: ", res);
  //   client.close();
  // });
});
