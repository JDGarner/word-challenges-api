const { IS_PROD } = require("../../../constants");
const { exec } = require("child_process");
const { capitalize } = require("lodash");
const { createAPNNotification } = require("./notifications");

const sendPushNotification = (apnProvider, mode) => {
  if (IS_PROD) {
    sendPushNotificationViaAPN(apnProvider, mode);
  } else {
    sendPushNotificationToSimulator(mode);
  }
};

const sendPushNotificationViaAPN = (apnProvider, mode) => {
  const notification = createAPNNotification(mode);

  // TODO: Get all device tokens from DB
  const deviceTokens = ["123"];

  apnProvider.send(notification, deviceTokens).then((response) => {
    console.log(
      "Notification SUCCESSFULLY sent to the following device tokens: ",
      response.sent
    );

    console.log(
      "Notification FAILED to send to the following device tokens: ",
      response.failed
    );
  });
};

const sendPushNotificationToSimulator = (mode) => {
  const modeName = capitalize(mode);

  exec(
    `xcrun simctl push 8B042537-F600-40D2-ABDA-594469ACA79D com.jamiegarner.WordChallenges src/push-notifications/ios/${modeName}Push.apns`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    }
  );
};

module.exports = {
  sendPushNotification,
};
