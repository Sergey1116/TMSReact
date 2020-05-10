import React, { useState } from "react";
import { Table} from "react-bootstrap";
import {Link} from 'react-router-dom';
import { sortList } from "../../../helpers/costAccountingHelpers";
import ModalForm from './ModalForm';

export default function CATable({ props }) {
  const { listCA, setlistCA } = props;
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [editId, setEditId] = useState(false);

  const handleDelete = (id) => {
    return () => {
      setlistCA(listCA.filter(el => el.id !== id));
    }
  }

  const handlerEdit = (id) => {
    return () => {
      handleShow();
      setEditId(id);
    }
  }

  const handlerCreate = () => {
    handleShow();
    setEditId(0);
  }

  return (
    <>
    <Table striped bordered hover>
      <thead>
            <tr className="table-primary">
                <th scope="col">#</th>
                <th scope="col">Received from/ Paid to</th>
                <th scope="col">Date</th>
                <th scope="col" className="text-center">$</th>
                <th></th>
            </tr>
      </thead>
      <tbody>
          {sortList(listCA).map((el, i) => {
              return (
              <tr key={el.id} className={el.type === "income"? "table-success": "table-danger"}>
                <th scope="row">{i+1}</th>
                <td>
                  <Link to={`/CostAccounting/${el.id}`}>{el.name}</Link> 
                  
                </td>
                <td>{el.date}</td>
                <td className="text-center">{(el.type==="income" || el.price === 0) ? el.price : "-"+el.price}</td>
                <td >
                  <button className="btn btn-sm btn-warning text-white mr-1" onClick={handlerEdit(el.id)}>Edit</button>
                  <button className="btn btn-sm btn-danger text-white" onClick={handleDelete(el.id)}>Delete</button>
                </td>
            </tr>)
          })}
      </tbody>
      <tfoot> 
            <tr className="table-primary"> 
                <td colSpan="3" className="text-right">Total:</ td> 
                <td className="text-center"> 
                    {listCA.reduce((acc, curr) => curr.type==="income" ? acc + curr.price: acc - curr.price, 0)}
                </td> 
                <td></td> 
            </tr> 
        </tfoot> 
    </Table>
    
    <button className="btn btn-success float-right mr-3 text-white" onClick={handlerCreate}>
          Add
    </button>

    {show ? <ModalForm props={
        {listCA: listCA, 
        setlistCA: setlistCA, 
        editId:editId, 
        handleClose:handleClose}}/>: ""}
    </>
  );
}
