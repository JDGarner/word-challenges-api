const cron = require("node-cron");
const { sendPushNotification } = require("./send");
const { DEFINITIONS, SYNONYMS, RHYMES } = require("../../../constants");
const { apnProvider } = require("./apn");

// Note: on the server this will be run as a node process using pm2

// Runs every minute:
cron.schedule("* * * * * *", () =>
  sendPushNotification(apnProvider, DEFINITIONS)
);
cron.schedule("* * * * * *", () => sendPushNotification(apnProvider, SYNONYMS));
cron.schedule("* * * * * *", () => sendPushNotification(apnProvider, RHYMES));
