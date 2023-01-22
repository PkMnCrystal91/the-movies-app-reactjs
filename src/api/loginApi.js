import axios from 'axios';

const loginApi = axios.create({
    baseURL: "https://reqres.in/api/"
});

export default loginApi;