const axios = window.axios;

const BASE_API_URL = "localhost/api";

export default {
    getAllPosts: () => axios.get(`${BASE_API_URL}/posts`),
};
