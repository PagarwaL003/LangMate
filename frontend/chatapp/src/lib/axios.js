import axios from 'axios';

export const axiosInstance = axios.create({
    baseUrl:"http://localhost:3000/api/v1",
    withCredentials:true,   // send cookies with requests
});

