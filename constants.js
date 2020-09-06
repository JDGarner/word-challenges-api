const IS_PROD = process.env.NODE_ENV === "production";
const DB_BASE = "mongodb://localhost:27017";

module.exports = {
  DB: IS_PROD ? "words_prod" : "words_dev",
  DB_URI: IS_PROD ? `${DB_BASE}/words_prod` : `${DB_BASE}/words_dev`,
  IS_PROD,
  DEFINITIONS: "DEFINITIONS",
  SYNONYMS: "SYNONYMS",
  RHYMES: "RHYMES",
};
