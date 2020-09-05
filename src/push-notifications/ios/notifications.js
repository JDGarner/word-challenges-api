const apn = require("apn");
const { DEFINITIONS, RHYMES } = require("../../../constants");

const createAPNNotification = (mode) => {
  return new apn.Notification({
    alert: {
      title: "Good Morning",
      body: `How about some ${getTextForMode(mode)} practice today? :)`,
    },
    topic: "com.jamiegarner.WordChallenges",
    pushType: "background",
    payload: {
      mode,
    },
  });
};

const getTextForMode = (mode) => {
  if (mode === DEFINITIONS) {
    return "definition";
  }

  if (mode === RHYMES) {
    return "rhyming";
  }

  return "synonym";
};

module.exports = {
  createAPNNotification,
};
