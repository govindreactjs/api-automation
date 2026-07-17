import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = async () => {
    return axios.get(BASE_URL);
};

export const getPostById = async (id) => {
    return axios.get(`${BASE_URL}/${id}`);
};

export const createPost = async (postData) => {
    return axios.post(BASE_URL, postData);
};

export const updatePost = async (id, postData) => {
    return axios.put(`${BASE_URL}/${id}`, postData);
};

export const deletePost = async (id) => {
    return axios.delete(`${BASE_URL}/${id}`);
};
