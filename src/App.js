import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
import TableBooks from './components/TableBooks';

import { ToastContainer } from 'react-toastify';
import { useState } from 'react';

function App() {

  return (
    <>
      <div className="app-container">
        <Header />
        <Container>
          <TableBooks />
        </Container>

      </div >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;


