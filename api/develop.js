const { startServer } = require("./server");

startServer("/dev", "3000", "mongodb://localhost:27017/words_dev");
