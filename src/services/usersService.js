import { USER_URL } from "../constants/urls";
import axios from "./httpService";

const usersService = {
    getListUsers: () => {
        return axios.get(USER_URL);
    },

    getDetailUser: (id) => {
        return  axios.get(`${USER_URL}/${id}`)
    },

    deleteTodo: () => {},
    createTodo: () => {},


}

export default usersService;