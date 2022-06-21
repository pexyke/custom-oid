const axios = require("axios");

const http = () => {
  const instance = axios.create({
    baseURL: "",
    timeout: 3000,
  });

  const post = async (...params) => {
    try {
      const response = await instance.post(...params);
      return response;
    } catch (err) {
      if (!err.response) return err;
      return err.response;
    }
  };
  return { post, _instance: instance }; // _private_stuff
};

module.exports = http();

/*

*/