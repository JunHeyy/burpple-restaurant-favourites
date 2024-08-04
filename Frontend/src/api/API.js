import axios from "axios";
// import { initInterceptors } from "./Interceptors.ts";
import { initInterceptors } from "./Interceptors";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Credentials": true,
    },
});

// initInterceptors(api);

const Get = async (endpoint, parameters) => {
    const response = await api.get(endpoint, { params: parameters });
    // console.log('This is get response', response['data']);
    return response.data.data;
};

const Post = async (endpoint, parameters) => {
    const response = await api.post(endpoint, parameters);
    return response.data;
};

const Put = async (endpoint, parameters) => {
    const response = await api.put(endpoint, parameters);
    return response.data;
};

const Delete = async (endpoint) => {
    const response = await api.delete(endpoint);
    return response.data;
};

export { Get, Post, Put, Delete };

// TODO: Implement the Put and Delete functions
