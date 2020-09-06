require("dotenv").config();
const mongoose = require("mongoose");
const cron = require("node-cron");
const { sendPushNotification } = require("./send");
const { DEFINITIONS, SYNONYMS, RHYMES, DB_URI } = require("../../../constants");
const { apnProvider } = require("./apn");

// Note: on the server this will be run as a node process using pm2

(async () => {
  await mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cron.schedule("* * * * * *", () =>
    sendPushNotification(apnProvider, DEFINITIONS)
  );
  cron.schedule("* * * * * *", () => sendPushNotification(apnProvider, SYNONYMS));
  cron.schedule("* * * * * *", () => sendPushNotification(apnProvider, RHYMES));
})();
