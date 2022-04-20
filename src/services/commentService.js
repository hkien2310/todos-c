import { POSTS_URL } from "../constants/urls";
import axios from "./httpService";

const commentService = {
    getListComments: () => {
        return axios.get(POSTS_URL);
    },

    getDetailComment: (id) => {
        return  axios.get(`${POSTS_URL}/${id}`)
    },

    deletePost: () => {},
    createPost: () => {},


}

export default commentService;