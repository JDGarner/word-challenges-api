const path = require("path");
const apn = require("apn");
const { IS_PROD } = require("../../../constants");

const apnOptions = {
  token: {
    key: path.join(__dirname, "../../../keys/PushAuthKey.p8"),
    keyId: process.env.APPLE_PUSH_KEY_ID,
    teamId: process.env.APPLE_TEAM_ID,
  },
  production: IS_PROD,
};

const apnProvider = new apn.Provider(apnOptions);

module.exports = {
  apnProvider,
};
