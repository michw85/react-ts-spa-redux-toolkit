import axios from "axios";

export default axios.create({
  baseURL: process.env.NODE_APP_BASE_URL,
});
