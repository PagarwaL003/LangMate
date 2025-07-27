import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL:"https://lang-mate.vercel.app/api/v1",
    withCredentials:true,   // send cookies with requests
});

