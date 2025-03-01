import axios from "axios";

const httpClient = axios.create({
    //baseURL: process.env.NEXT_PUBLIC_API_URL,
    baseURL: "http://localhost:8080/",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true
});

httpClient.interceptors.request.use((config: any) => {
    //config.headers.Authorization = 'Bearer test';
    return config;
}, (error: any) => {
    return Promise.reject(error);
});

httpClient.interceptors.response.use(
    (response: any) => response.data,
    (error: any) => {
        return Promise.reject(error.response?.data || error);
    }
);

export default httpClient;
