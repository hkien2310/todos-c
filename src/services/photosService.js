import { PHOTOSSERVICE_URL } from "../constants/urls";
import axios from "./httpService";

const photosService = {
    getListPhotos: () => {
        return axios.get(PHOTOSSERVICE_URL);
    },

    getDetailPhoto: (id) => {
        return  axios.get(`${PHOTOSSERVICE_URL}/${id}`)
    },

    deletePost: () => {},
    createPost: () => {},

}

export default photosService;