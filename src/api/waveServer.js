import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

class WaveServer {
  static token;

  static async request(endpoint, data = {}, method = "get") {
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${WaveServer.token}` };
    const params = method === "get" ? data : {};
    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  static async sendRequestToSlack(data, files) {
    console.log("data", data, files);

    // to send files and JSON need to send as formData
    let formData = new FormData();
    // formData.append("file", files);
    files.forEach((file) => {
      formData.append("files", file);
    });
    formData.append("json", JSON.stringify(data));
    console.log("form", formData.getAll("file"));

    try {
      await this.request("instructionals/request", formData, "post");
    } catch (err) {
      console.log(err);
    }
  }
}

export default WaveServer;
