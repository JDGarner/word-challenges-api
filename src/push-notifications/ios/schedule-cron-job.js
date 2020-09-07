require("dotenv").config();
const mongoose = require("mongoose");
const cron = require("node-cron");
const { sendPushNotification } = require("./send");
const { DEFINITIONS, SYNONYMS, RHYMES, DB_URI } = require("../../../constants");
const { apnProvider } = require("./apn");

// Note - On production this is run as a process using PM2

(async () => {
  await mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // At 10:30 on Sunday
  cron.schedule("30 10 * * 0", () =>
    sendPushNotification(apnProvider, DEFINITIONS)
  );

  // At 10:30 on Tuesday
  cron.schedule("30 10 * * 2", () => sendPushNotification(apnProvider, SYNONYMS));

  // At 10:30 on Friday
  cron.schedule("30 10 * * 5", () => sendPushNotification(apnProvider, RHYMES));
})();
