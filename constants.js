module.exports = {
  DB: "words_prod",
  DB_URI: "mongodb://localhost:27017/words_prod",
  IS_PROD: process.env.NODE_ENV === "production",
  DEFINITIONS: "DEFINITIONS",
  SYNONYMS: "SYNONYMS",
  RHYMES: "RHYMES",
};
