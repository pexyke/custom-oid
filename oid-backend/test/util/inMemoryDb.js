const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");

const startDb = async () => {
  const server = await MongoMemoryServer.create();
  const uri = server.getUri();
  const connection = await mongoose.connect(uri);
  return [connection, server];
};

const stopDb = async (connection, server) => {
  await connection.disconnect();
  await server.stop();
};

// database collections
const deleteAll = async (...collections) => {
  const promises = collections.map((collection) => collection.deleteMany()); // ez instant-azonnal, egy listanyi promise-t ad vissza
  await Promise.all(promises);
};

module.exports = { startDb, stopDb, deleteAll };
