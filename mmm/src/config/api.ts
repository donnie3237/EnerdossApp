import axios from "axios";

export const api = "https://jsonplaceholder.typicode.com/todos/";

export const APi1 = axios.create({
  baseURL: api,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
