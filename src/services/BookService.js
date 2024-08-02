import axios from './customize-axios';

const fetchAllBooks = (page) => {
    return axios.get(`/books?page=${page}&size=2`);
}

const createBook = (bookName, author, price) => {
    return axios.post('/books', { bookName, author, price });
}

export { fetchAllBooks, createBook };
