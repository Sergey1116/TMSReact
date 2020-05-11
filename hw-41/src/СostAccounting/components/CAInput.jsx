import { Button, Modal, Form } from "react-bootstrap";
import React, { useState } from "react";

export default function CAInput(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    function handleSubmit(event){
        event.preventDefault();
        props.setlistCA([...props.listCA, {
            name: event.target.elements[0].value,
            price: +event.target.elements[1].value,
            type: event.target.elements[2].checked ? "income": "outcome",
            date: Date.now()
        }]);
        handleClose();
    }

    function handleDeleteAll(){
      props.setlistCA([]);
  }

  return (
    <>
      <Button variant="success float-right mr-3" onClick={handleShow}>
        Add
      </Button>

      <Button variant="danger float-left ml-3" onClick={handleDeleteAll}>
        Delete all
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Received from/ Paid to</Form.Label>
              <Form.Control type="text" placeholder="Enter name"/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Value</Form.Label>
              <Form.Control type="number" placeholder="$"/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Income"/>
            </Form.Group>
            <Button variant="success float-right" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
