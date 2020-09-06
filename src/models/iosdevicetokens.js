const mongoose = require("mongoose");

const iOSDeviceTokensSchema = mongoose.Schema(
  {
    token: String,
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("iosdevicetokens", iOSDeviceTokensSchema);
