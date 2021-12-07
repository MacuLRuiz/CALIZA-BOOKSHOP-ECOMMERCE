import React from 'react'
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import UserForm from './UserForm';

const CartModal = (buyerForm, generateOrder, handleChange) => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UserForm buyerForm={buyerForm} generateOrder={generateOrder} handleChange={handleChange} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose()}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default CartModal;