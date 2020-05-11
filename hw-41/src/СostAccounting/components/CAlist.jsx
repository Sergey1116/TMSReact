import React from "react";

import { sortList } from "../../helpers/costAccountingHelpers";

export default function CAList({ props }) {
  const { listCA } = props;

  return (
    <div className="container">
    <table className="table table-hover table-striped table-bordered">
      <thead>
            <tr className="table-primary">
                <th scope="col">#</th>
                <th scope="col">Received from/ Paid to</th>
                <th scope="col">Date</th>
                <th scope="col" className="text-center">$</th>
            </tr>
      </thead>
      <tbody>
          {sortList(listCA).map((el, i) => {
              return (
              <tr key={el.date} className={el.type === "income"? "table-success": "table-danger"}>
                <th scope="row">{i+1}</th>
                <td>{el.name}</td>
                <td>{new Date(el.date).toUTCString()}</td>
                <td className="text-center">{el.type==="income" ? el.price: "-"+el.price}</td>
            </tr>)
          })}
      </tbody>
      <tfoot> 
            <tr className="table-primary"> 
                <td colSpan="3" className="text-right">Total:</ td> 
                <td className="text-center"> 
                    {listCA.reduce((acc, curr) => curr.type==="income" ? acc + curr.price: acc - curr.price, 0)}
                </td> 
            </tr> 
        </tfoot> 
    </table>
    </div>
  );
}
