const app = require("../app");
const mockServer = require("supertest");

describe("post request to /user", () => {
  describe("given a username and password", () => {
    test("should respond with a status code 200", async () => {
      // given
      const client = mockServer(app);
      // when
      const response = await client.post("/user").send({
        username: "username",
        password: "password",
      });
      // then
      expect(response.statusCode).toBe(200);
    });

    test("response has userId", async () => {
      // given
      const client = mockServer(app);
      // when
      const response = await client.post("/user").send({
        username: "username",
        password: "password",
      });
      // then
      expect(response.body.userId).toBeDefined();
    });
  });

  describe("when the username and password is missing", () => {
    test("should respond with a status code of 400", async () => {
      // given
      const client = mockServer(app);
      // when
      const response = await client.post("/user").send({
        username: "username",
      });
      // then
      expect(response.status).toBe(400);
    });
  });
});
