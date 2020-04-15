const { startServer } = require("./server");

startServer("/prod", "3001", "mongodb://localhost:27017/words_prod");
