import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { createBook } from "../services/BookService"
import { ToastContainer, toast } from 'react-toastify';

const ModalAddNew = (props) => {
    const { show, handleClose, handleUpdateBook } = props;
    const [bookName, setBookName] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState(0);

    const handleSaveBook = async () => {
        let res = await createBook(bookName, author, price);
        if (res && res.id) {
            handleClose();
            setBookName('');
            setAuthor('');
            setPrice('');
            toast.success("Book created successfully!")
            handleUpdateBook()
        } else {
            toast.error("Book creation failed!")
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                        <form>
                            <div class="form-group">
                                <label className='form-label'>Name</label>
                                <input type="text" className="form-control" value={bookName} onChange={(e) => setBookName(e.target.value)} />
                            </div>
                            <div class="form-group">
                                <label className='form-label'>Author</label>
                                <input type="text" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} />
                            </div>
                            <div class="form-group">
                                <label className='form-label'>Price</label>
                                <input type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSaveBook()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalAddNew

