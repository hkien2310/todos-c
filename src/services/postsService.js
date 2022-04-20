import { POSTS_URL } from "../constants/urls";
import axios from "./httpService";

const postsService = {
    getListPosts: () => {
        return axios.get(POSTS_URL);
    },

    getDetailPost: (id) => {
        return  axios.get(`${POSTS_URL}/${id}`)
    },

    deletePost: () => {},
    createPost: () => {},


}

export default postsService;