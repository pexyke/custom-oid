const app = require("../app");
const mockServer = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");

// function sum(a, b) {
//   return a + b;
// }

// test("adds 1 + 2 to equal 3", () => {
//   // given
//   // no setup required
//   // when - 1 line only
//   const result = sum(1, 2);
//   // then
//   expect(result).toBe(3);
// });

test("/random endpoint sends 404", async () => {
  // given
  const client = mockServer(app);
  // when
  const response = await client.get("/api/random");
  // then
  expect(response.status).toBe(404);
});

/* === /// === */

test("mongo-in-memory server is running", async () => {
  // given
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  const connection = await mongoose.connect(uri);

  // fake mongo data
  const Cat = mongoose.model("Cat", { name: String });
  const kitty = new Cat({ name: "Zildjian" });

  // when
  await kitty.save();

  // then
  const cat = await Cat.findOne();
  expect(cat.name).toBe("Zildjian");

  // stop fake mongo
  await connection.disconnect();
  await mongod.stop();
});
