import { TODOS_URL } from "../constants/urls";
import axios from "./httpService";

const todosService = {
    getListTodos: () => {
        return axios.get(TODOS_URL);
    },

    getDetailTodo: (id) => {
        return  axios.get(`${TODOS_URL}/${id}`)
    },

    deleteTodo: () => {},
    createTodo: () => {},


}

export default todosService;