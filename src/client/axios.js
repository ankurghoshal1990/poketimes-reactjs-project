import axiosDefault from 'axios';
const baseURL = 'https://jsonplaceholder.typicode.com/posts';
const defaultOptions = {
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
};
const axios = axiosDefault.create(defaultOptions);
export default axios