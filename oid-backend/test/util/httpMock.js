const { _instance } = require("../../util/http");
const axiosMockAdapter = require("axios-mock-adapter");
const jwt = require("jsonwebtoken");

const mock = new axiosMockAdapter(_instance);

const setupGoogleSuccessResponse = (sub) => {
  const token = jwt.sign({ sub }, "fakeSecretKey");
  mock.onPost("https://oauth2.googleapis.com/token").replyOnce(200, { id_token: token });
};

const setupGoogleErrorResponse = () => {
  mock.onPost("https://oauth2.googleapis.com/token").replyOnce(401);
};

module.exports = { setupGoogleSuccessResponse, setupGoogleErrorResponse };