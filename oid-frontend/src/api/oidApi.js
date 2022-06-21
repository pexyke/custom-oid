import http from "axios";
import config from "../app.config";

export const oidApi = () => {
    const instance = http.create({
        baseURL: config.oidapi,
        timeout: 3000,
    });

    const post = async (path, data) => {
        try {
            const response = await instance.post(path, data, { });
            return response;
        } catch (err) {
            if (!err.response) return err;
            return err.response;
        }
    };

    const get = async (path) => {
        try {
            const response = await instance.get(path, { });
            return response;
        } catch (err) {
            if (!err.response) return err;
            return err.response;
        }
    };
    return { post, get, _instance: instance }; // _private_stuff
};

// module.exports = toDoApi();

/*

*/