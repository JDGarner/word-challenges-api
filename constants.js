module.exports = {
  DB: "words_dev",
  DB_URI: "mongodb://localhost:27017/words_dev",
  IS_PROD: process.env.NODE_ENV === "production",
  DEFINITIONS: "DEFINITIONS",
  SYNONYMS: "SYNONYMS",
  RHYMES: "RHYMES",
};
