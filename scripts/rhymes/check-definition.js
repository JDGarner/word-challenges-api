const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const readFile = promisify(fs.readFile);

const dictionaryPath = path.resolve(__dirname, "../../data/rhymes/all-words.txt");

const isWordDefined = async word => {
  try {
    const data = await readFile(dictionaryPath, "utf8");
    const regex = new RegExp(`${word.toLowerCase()}\r`);
    const match = regex.exec(data);
    // if (match) {
    //   console.log(">>> match: ", match[0]);
    // } else {
    //   console.log(">>> no match");
    // }

    return !!match;
  } catch (e) {
    console.log(e);
  }
};

// isWordDefined("aahaf")

module.exports = isWordDefined;
