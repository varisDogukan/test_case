import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://panel-api-test.pendc.com/api",
});

export default customFetch;
