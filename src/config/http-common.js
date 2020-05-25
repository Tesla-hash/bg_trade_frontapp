import axios from "axios";

export default axios.create({
  baseURL: "http://45.90.34.67:8082/api",
  headers: {
    "Content-type": "application/json"
  }
});
