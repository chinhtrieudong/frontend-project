import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { fetchAllBooks } from '../services/BookService';
import ReactPaginate from 'react-paginate';
import ModalAddNew from './ModalAddNew';

const TableBooks = (props) => {
    const [listBooks, setListBooks] = useState([]);
    const [totalBooks, setTotalBooks] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const [isShowModal, setIsShowModal] = useState(false);

    const handleClose = () => {
        setIsShowModal(false);
    }

    const handleUpdateBook = () => {
        getBooks()
    }

    useEffect(() => {
        getBooks(1);
    }, [])

    const getBooks = async (page) => {
        let res = await fetchAllBooks(page);

        if (res) {
            setTotalBooks(res.total);
            setTotalPages(res.pages);
            setListBooks(res.data);
        }
    }

    const handlePageClick = (event) => {
        getBooks(+event.selected + 1);
    }

    return (
        <>
            <div className='my-3 add-new'>
                <span><h3>List books:</h3></span>
                <button className='btn btn-primary'
                    onClick={() => setIsShowModal(true)}>
                    Add new book
                </button>
            </div>
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
                                <td>{item.bookName}</td>
                                <td>{item.author}</td>
                                <td>{item.price}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
            />
            <ModalAddNew show={isShowModal} handleClose={handleClose} handleUpdateBook={handleUpdateBook} />
        </>
    )
}

export default TableBooks