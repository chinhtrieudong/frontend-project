import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { fetchAllBooks } from '../services/BookService';

const TableBooks = (props) => {
    const [listBooks, setListBooks] = useState([]);

    useEffect(() => {
        getBooks();
    }, [])

    const getBooks = async () => {
        let res = await fetchAllBooks();

        if (res) {
            setListBooks(res);
        }
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    listBooks && listBooks.length > 0 && listBooks.map((item, index) => {
                        return <tr key={`books-${index}`}>
                            <td>{item.id}</td>
                            <td>{item.bookname}</td>
                            <td>{item.author}</td>
                            <td>{item.price}</td>
                        </tr>
                    })
                }
            </tbody>
        </Table>
    )
}

export default TableBooks