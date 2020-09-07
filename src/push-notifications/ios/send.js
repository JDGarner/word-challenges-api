const { IS_PROD } = require("../../../constants");
const { exec } = require("child_process");
const { capitalize } = require("lodash");
const { createAPNNotification } = require("./notifications");
const iosDeviceTokens = require("../../models/iosdevicetokens");

const sendPushNotification = (apnProvider, mode) => {
  if (IS_PROD) {
    console.log("Sending Push Notification via APN for ", mode);
    sendPushNotificationViaAPN(apnProvider, mode);
  } else {
    console.log("Sending Push Notification to simulator for ", mode);
    sendPushNotificationToSimulator(mode);
  }
};

const sendPushNotificationViaAPN = async (apnProvider, mode) => {
  const notification = createAPNNotification(mode);

  try {
    const deviceTokens = await iosDeviceTokens.find();
    const tokens = deviceTokens.map((dt) => dt.token);

    if (tokens && tokens.length > 0) {
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
    } else {
      console.log("No device tokens found");
    }
  } catch (e) {
    console.error(e);
  }
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
