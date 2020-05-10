import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { editElem, findById } from "../../../helpers/costAccountingHelpers";
import {getToDayDate} from '../../../helpers/dateHelpers';

export default function ModalForm({ props }) {
  const { listCA, setlistCA, editId, handleClose } = props;
  const elem = findById(editId) ?? {};

  function handleSubmit(event) {
    event.preventDefault();
    const newElem = {
      name: event.target.elements.Name.value,
      description: event.target.elements.Description.value,
      price: +event.target.elements.Cost.value,
      date: event.target.elements.Date.value,
      type: event.target.elements.Checkbox.checked ? "income" : "outcome",
      id: editId ? editId : Date.now(),
    };
    if (editId) {
      const newList = editElem(newElem);
      setlistCA(newList);
    } else {
      setlistCA([...listCA, newElem]);
    }
    handleClose();
  }

  return (
    <>
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Received from/ Paid to</Form.Label>
              <Form.Control name="Name" type="text" defaultValue={elem.name} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Descriptipon</Form.Label>
              <Form.Control name="Description" as="textarea" rows="3" defaultValue={elem.description} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Value</Form.Label>
              <Form.Control
                name="Cost"
                type="number"
                defaultValue={elem.price}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                name="Date"
                type="date"
                defaultValue = {elem.date ? elem.date : getToDayDate()}
              />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                name="Checkbox"
                type="checkbox"
                label="Income"
                defaultChecked={elem.type === "income" ? true : false}
              />
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
