import axios from './customize-axios';

const fetchAllBooks = () => {
    return axios.get("/books");
}

export { fetchAllBooks };
