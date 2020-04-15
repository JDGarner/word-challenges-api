const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const BodyParser = require("body-parser");

const startServer = (rootPath, port, dbUri) => {
  mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });

  const app = express();

  app.use(BodyParser.json());
  app.use(BodyParser.urlencoded({ extended: true }));

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  // app.use(function(req, res, next) {
  //   if (req.headers.authorization !== process.env.WORDS_API_KEY) {
  //     return res.status(403).json({ error: '403 Forbidden' });
  //   }
  //   next();
  // });

  app.use(rootPath, routes);

  app.listen(port, function(error) {
    if (error) throw error;
    console.log("Server running on PORT " + port);
  });
};

module.exports = { startServer };
